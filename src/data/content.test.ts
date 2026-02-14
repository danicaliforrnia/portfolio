import {describe, expect, test} from 'vitest'
import {siteContent} from './content'

describe('siteContent', () => {
    test('has the required sections', () => {
        expect(siteContent).toHaveProperty('header')
        expect(siteContent).toHaveProperty('hero')
        expect(siteContent).toHaveProperty('about')
        expect(siteContent).toHaveProperty('experience')
        expect(siteContent).toHaveProperty('skills')
        expect(siteContent).toHaveProperty('contact')
        expect(siteContent).toHaveProperty('footer')
    })

    test('header navigation is not empty', () => {
        expect(siteContent.header.nav.length).toBeGreaterThan(0)
    })

    test('experience has items', () => {
        expect(siteContent.experience.length).toBeGreaterThan(0)
    })

    test('skills categories are present', () => {
        expect(siteContent.skills).toHaveProperty('languages')
        expect(siteContent.skills).toHaveProperty('frameworks')
        expect(siteContent.skills).toHaveProperty('cloudDevOps')
        expect(siteContent.skills).toHaveProperty('databases')
    })
})
