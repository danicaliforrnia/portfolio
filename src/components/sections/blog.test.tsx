import {fireEvent, render, screen, waitFor} from '@testing-library/react'
import {beforeEach, describe, expect, test, vi} from 'vitest'
import {Blog} from './blog'

// Mock fetch
const mockFetch = vi.fn()
global.fetch = mockFetch

describe('Blog', () => {
    beforeEach(() => {
        mockFetch.mockClear()
    })

    test('renders title and loading state', async () => {
        mockFetch.mockImplementation(() =>
            new Promise(resolve => setTimeout(() => resolve({
                ok: true,
                json: () => Promise.resolve({status: 'ok', items: []})
            }), 100))
        )

        render(<Blog/>)

        expect(screen.getByText(/Latest Blog Posts/i)).toBeInTheDocument()
        expect(screen.getByText(/Loading posts.../i)).toBeInTheDocument()
    })

    test('renders blog posts after successful fetch', async () => {
        const mockPosts = [
            {
                title: 'Test Post 1',
                pubDate: '2024-01-01 10:00:00',
                link: 'https://medium.com/test-post-1',
                guid: '1',
                description: 'Description 1',
            },
            {
                title: 'Test Post 2',
                pubDate: '2024-01-02 10:00:00',
                link: 'https://medium.com/test-post-2',
                guid: '2',
                description: 'Description 2',
            }
        ]

        mockFetch.mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve({status: 'ok', items: mockPosts})
        })

        render(<Blog/>)

        await waitFor(() => {
            expect(screen.getByText('Test Post 1')).toBeInTheDocument()
            expect(screen.getByText('Test Post 2')).toBeInTheDocument()
        })

        expect(screen.queryByText(/Loading posts.../i)).not.toBeInTheDocument()

        const readMoreLinks = screen.getAllByText(/Read More/i)
        expect(readMoreLinks).toHaveLength(2)
        expect(readMoreLinks[0].closest('a')).toHaveAttribute('href', 'https://medium.com/test-post-1')
    })

    test('renders error message on fetch failure', async () => {
        mockFetch.mockRejectedValueOnce(new Error('Network error'))

        render(<Blog/>)

        await waitFor(() => {
            expect(screen.getByText(/Could not load blog posts/i)).toBeInTheDocument()
        })

        expect(screen.getByText(/Try Again/i)).toBeInTheDocument()
    })

    test('renders error message when API returns error status', async () => {
        mockFetch.mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve({status: 'error', message: 'API error'})
        })

        render(<Blog/>)

        await waitFor(() => {
            expect(screen.getByText(/Could not load blog posts/i)).toBeInTheDocument()
        })
    })

    test('paginates blog posts with Load More button', async () => {
        const mockPosts = Array.from({length: 5}, (_, i) => ({
            title: `Post ${i + 1}`,
            pubDate: `2024-01-0${i + 1} 10:00:00`,
            link: `https://medium.com/post-${i + 1}`,
            guid: `${i + 1}`,
            description: `Description ${i + 1}`,
        }))

        mockFetch.mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve({status: 'ok', items: mockPosts})
        })

        render(<Blog/>)

        await waitFor(() => {
            expect(screen.getByText('Post 1')).toBeInTheDocument()
            expect(screen.getByText('Post 2')).toBeInTheDocument()
            expect(screen.getByText('Post 3')).toBeInTheDocument()
        })

        expect(screen.queryByText('Post 4')).not.toBeInTheDocument()
        expect(screen.queryByText('Post 5')).not.toBeInTheDocument()

        const loadMoreButton = screen.getByRole('button', {name: /Load More Posts/i})
        expect(loadMoreButton).toBeInTheDocument()

        fireEvent.click(loadMoreButton)

        expect(screen.getByText('Post 4')).toBeInTheDocument()
        expect(screen.getByText('Post 5')).toBeInTheDocument()
        expect(screen.queryByRole('button', {name: /Load More Posts/i})).not.toBeInTheDocument()
    })
})
