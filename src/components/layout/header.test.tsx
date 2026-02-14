import {fireEvent, render, screen} from '@testing-library/react'
import {describe, expect, test, vi} from 'vitest'
import {Header} from './header'
import {siteContent} from '@/data/content'

vi.mock('next/image', () => ({
    default: (props: any) => <img {...props} />,
}))

describe('Header', () => {
    test('renders the logo', () => {
        render(<Header/>)
        const logo = screen.getByAltText('Logo')
        expect(logo).toBeInTheDocument()
    })

    test('renders navigation items on desktop', () => {
        render(<Header/>)
        siteContent.header.nav.forEach((item) => {
            const navLinks = screen.getAllByText(item.label)
            expect(navLinks.length).toBeGreaterThanOrEqual(1)
            expect(navLinks[0]).toHaveAttribute('href', item.href)
        })
    })

    test('renders Download CV button', () => {
        render(<Header/>)
        const cvButtons = screen.getAllByText('Download CV')
        expect(cvButtons.length).toBeGreaterThanOrEqual(1)
        cvButtons.forEach(button => {
            expect(button.closest('a')).toHaveAttribute('href', siteContent.hero.cvHref)
        })
    })

    test('opens mobile menu when clicking the menu button', async () => {
        render(<Header/>)
        const menuButton = screen.getByRole('button', {name: /toggle menu/i})
        fireEvent.click(menuButton)
        siteContent.header.nav.forEach((item) => {
            const mobileLinks = screen.getAllByText(item.label)
            expect(mobileLinks.length).toBeGreaterThanOrEqual(1)
        })
    })
})
