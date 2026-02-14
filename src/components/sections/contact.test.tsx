import {render, screen} from '@testing-library/react'
import {describe, expect, test} from 'vitest'
import {Contact} from './contact'
import {siteContent} from '@/data/content'

describe('Contact', () => {
    test('renders title and connect text', () => {
        render(<Contact/>)
        expect(screen.getByText('Get In Touch')).toBeInTheDocument()
        expect(screen.getByText("Let's connect")).toBeInTheDocument()
    })

    test('renders contact information links', () => {
        render(<Contact/>)
        expect(screen.getByText(siteContent.contact.email)).toBeInTheDocument()

        const linkedinLink = screen.getByRole('link', {name: /indanielstefanelli/i})
        const githubLink = screen.getByRole('link', {name: /danicaliforrnia/i})

        expect(linkedinLink).toHaveAttribute('href', siteContent.contact.linkedin)
        expect(githubLink).toHaveAttribute('href', siteContent.contact.github)
    })

    test('renders contact form fields', () => {
        render(<Contact/>)
        expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/subject/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
        expect(screen.getByRole('button', {name: /send message/i})).toBeInTheDocument()
    })
})
