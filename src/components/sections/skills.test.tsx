import {render, screen} from '@testing-library/react'
import {describe, expect, test} from 'vitest'
import {Skills} from './skills'
import {siteContent} from '@/data/content'

describe('Skills', () => {
    test('renders title', () => {
        render(<Skills/>)
        expect(screen.getByText('Technical Skills')).toBeInTheDocument()
    })

    test('renders all skill categories and badges', () => {
        render(<Skills/>)

        // Check categories
        expect(screen.getByText('Languages')).toBeInTheDocument()
        expect(screen.getByText('Frameworks & Libraries')).toBeInTheDocument()
        expect(screen.getByText('Cloud & DevOps')).toBeInTheDocument()
        expect(screen.getByText('Databases')).toBeInTheDocument()

        // Check some specific skills
        siteContent.skills.languages.forEach(skill => {
            expect(screen.getByText(skill)).toBeInTheDocument()
        })
    })
})
