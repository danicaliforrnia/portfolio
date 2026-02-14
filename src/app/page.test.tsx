import {render, screen} from '@testing-library/react'
import {describe, expect, test, vi} from 'vitest'
import Home from './page'

vi.mock('@/components/layout/header', () => ({Header: () => <div data-testid="header">Header</div>}))
vi.mock('@/components/layout/footer', () => ({Footer: () => <div data-testid="footer">Footer</div>}))
vi.mock('@/components/sections/hero', () => ({Hero: () => <div data-testid="hero">Hero</div>}))
vi.mock('@/components/sections/about', () => ({About: () => <div data-testid="about">About</div>}))
vi.mock('@/components/sections/experience', () => ({Experience: () => <div data-testid="experience">Experience</div>}))
vi.mock('@/components/sections/skills', () => ({Skills: () => <div data-testid="skills">Skills</div>}))
vi.mock('@/components/sections/contact', () => ({Contact: () => <div data-testid="contact">Contact</div>}))

describe('Home Page', () => {
    test('renders all major sections', () => {
        render(<Home/>)
        expect(screen.getByTestId('header')).toBeInTheDocument()
        expect(screen.getByTestId('hero')).toBeInTheDocument()
        expect(screen.getByTestId('about')).toBeInTheDocument()
        expect(screen.getByTestId('experience')).toBeInTheDocument()
        expect(screen.getByTestId('skills')).toBeInTheDocument()
        expect(screen.getByTestId('contact')).toBeInTheDocument()
        expect(screen.getByTestId('footer')).toBeInTheDocument()
    })
})
