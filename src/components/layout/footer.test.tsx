import {render, screen} from '@testing-library/react'
import {describe, expect, test} from 'vitest'
import {Footer} from './footer'
import {siteContent} from '@/data/content'

describe('Footer', () => {
    test('renders the name and copyright text', () => {
        render(<Footer/>)
        expect(screen.getByText(siteContent.header.name)).toBeInTheDocument()
        expect(screen.getByText(siteContent.footer.text)).toBeInTheDocument()
    })

    test('renders social links', () => {
        render(<Footer/>)
        const githubLink = screen.getByRole('link', {name: /github/i})
        const linkedinLink = screen.getByRole('link', {name: /linkedin/i})

        expect(githubLink).toHaveAttribute('href', siteContent.contact.github)
        expect(linkedinLink).toHaveAttribute('href', siteContent.contact.linkedin)
    })

    test('renders email copy component', () => {
        render(<Footer/>)
        const emailButton = screen.getByRole('link', {name: /email/i})
        expect(emailButton).toBeInTheDocument()
    })
})
