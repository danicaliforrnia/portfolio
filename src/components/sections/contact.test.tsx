import {fireEvent, render, screen, waitFor} from '@testing-library/react'
import {describe, expect, test, vi} from 'vitest'
import {Contact} from './contact'
import {siteContent} from '@/data/content'
import emailjs from '@emailjs/browser'
import {toast} from 'sonner'

vi.mock('@emailjs/browser', () => ({
    default: {
        send: vi.fn(),
    },
}))

vi.mock('sonner', () => ({
    toast: {
        success: vi.fn(),
        error: vi.fn(),
    },
}))

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

    test('submits the form successfully', async () => {
        vi.mocked(emailjs.send).mockResolvedValueOnce({status: 200, text: 'OK'})

        render(<Contact/>)

        fireEvent.change(screen.getByLabelText(/name/i), {target: {value: 'John Doe'}})
        fireEvent.change(screen.getByLabelText(/email/i), {target: {value: 'john@example.com'}})
        fireEvent.change(screen.getByLabelText(/subject/i), {target: {value: 'Test Subject'}})
        fireEvent.change(screen.getByLabelText(/message/i), {target: {value: 'Test Message'}})

        const submitButton = screen.getByRole('button', {name: /send message/i})
        fireEvent.click(submitButton)

        expect(submitButton).toBeDisabled()
        expect(screen.getByTestId('spinner')).toBeInTheDocument()

        await waitFor(() => {
            expect(emailjs.send).toHaveBeenCalledWith(
                undefined,
                undefined,
                {
                    name: 'John Doe',
                    email: 'john@example.com',
                    subject: 'Test Subject',
                    message: 'Test Message',
                },
                undefined
            )
        })

        await waitFor(() => {
            expect(toast.success).toHaveBeenCalledWith("Notification sent to Daniel! ☺️")
        })

        expect(submitButton).not.toBeDisabled()
    })

    test('handles form submission error', async () => {
        vi.spyOn(console, 'error').mockImplementation(() => {
        })
        vi.mocked(emailjs.send).mockRejectedValueOnce(new Error('Failed to send'))

        render(<Contact/>)

        fireEvent.change(screen.getByLabelText(/name/i), {target: {value: 'John Doe'}})
        fireEvent.change(screen.getByLabelText(/email/i), {target: {value: 'john@example.com'}})
        fireEvent.change(screen.getByLabelText(/subject/i), {target: {value: 'Test Subject'}})
        fireEvent.change(screen.getByLabelText(/message/i), {target: {value: 'Test Message'}})

        const submitButton = screen.getByRole('button', {name: /send message/i})
        fireEvent.click(submitButton)

        await waitFor(() => {
            expect(toast.error).toHaveBeenCalledWith("An error occurred. Please try again later.")
        })

        expect(submitButton).not.toBeDisabled()
    })
})
