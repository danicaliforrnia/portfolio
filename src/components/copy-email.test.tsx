import {fireEvent, render, screen, waitFor} from '@testing-library/react'
import {describe, expect, test, vi} from 'vitest'
import {CopyEmail} from './copy-email'
import {siteContent} from '@/data/content'
import {toast} from 'sonner'

vi.mock('sonner', () => ({
    toast: {
        success: vi.fn(),
        error: vi.fn(),
    },
}))

describe('CopyEmail', () => {
    test('renders children correctly', () => {
        render(<CopyEmail>Test Email</CopyEmail>)
        expect(screen.getByText('Test Email')).toBeInTheDocument()
    })

    test('has correct mailto href', () => {
        render(<CopyEmail>Test Email</CopyEmail>)
        const link = screen.getByRole('link')
        expect(link).toHaveAttribute('href', `mailto:${siteContent.contact.email}`)
    })

    test('copies email to clipboard on click', async () => {
        render(<CopyEmail>Test Email</CopyEmail>)
        const link = screen.getByRole('link')

        fireEvent.click(link)

        expect(navigator.clipboard.writeText).toHaveBeenCalledWith(siteContent.contact.email)

        await waitFor(() => {
            expect(toast.success).toHaveBeenCalledWith('Email copied to clipboard!')
        })
    })

    test('handles copy failure', async () => {
        vi.mocked(navigator.clipboard.writeText).mockRejectedValueOnce(new Error('Copy failed'))

        render(<CopyEmail>Test Email</CopyEmail>)
        const link = screen.getByRole('link')

        fireEvent.click(link)

        await waitFor(() => {
            expect(toast.error).toHaveBeenCalledWith('Failed to copy email to clipboard')
        })
    })
})
