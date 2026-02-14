import {render, screen} from '@testing-library/react'
import {describe, expect, test} from 'vitest'
import {Hero} from './hero'
import {siteContent} from '@/data/content'

describe('Hero', () => {
    test('renders greeting, name, and title', () => {
        render(<Hero/>)
        expect(screen.getByText(siteContent.hero.greeting)).toBeInTheDocument()
        expect(screen.getByText(siteContent.hero.name)).toBeInTheDocument()
        expect(screen.getByText(siteContent.hero.title)).toBeInTheDocument()
    })

    test('renders description', () => {
        render(<Hero/>)
        expect(screen.getByText(siteContent.hero.description)).toBeInTheDocument()
    })

    test('renders CTA buttons with correct links', () => {
        render(<Hero/>)
        const experienceLink = screen.getByRole('link', {name: new RegExp(siteContent.hero.cta, 'i')})
        const cvLink = screen.getByRole('link', {name: /download cv/i})

        expect(experienceLink).toHaveAttribute('href', siteContent.hero.ctaHref)
        expect(cvLink).toHaveAttribute('href', siteContent.hero.cvHref)
    })
})
