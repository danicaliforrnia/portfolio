import {render, screen} from '@testing-library/react'
import {describe, expect, test} from 'vitest'
import {Experience} from './experience'
import {siteContent} from '@/data/content'

describe('Experience', () => {
    test('renders title', () => {
        render(<Experience/>)
        expect(screen.getByText('Work Experience')).toBeInTheDocument()
    })

    test('renders all experience items', () => {
        render(<Experience/>)
        siteContent.experience.forEach((exp) => {
            expect(screen.getAllByText(exp.company).length).toBeGreaterThanOrEqual(1)
            expect(screen.getAllByText(exp.role).length).toBeGreaterThanOrEqual(1)
            expect(screen.getAllByText(exp.period).length).toBeGreaterThanOrEqual(1)
        })
    })
})
