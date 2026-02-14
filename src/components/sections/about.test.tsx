import {render, screen} from '@testing-library/react'
import {describe, expect, test} from 'vitest'
import {About} from './about'
import {siteContent} from '@/data/content'

describe('About', () => {
    test('renders title and content', () => {
        render(<About/>)
        expect(screen.getByText(siteContent.about.title)).toBeInTheDocument()
        expect(screen.getByText(siteContent.about.content)).toBeInTheDocument()
    })

    test('renders education information', () => {
        render(<About/>)
        expect(screen.getByText('Education')).toBeInTheDocument()
        expect(screen.getByText(siteContent.about.education.degree)).toBeInTheDocument()
        expect(screen.getByText(siteContent.about.education.institution)).toBeInTheDocument()
    })
})
