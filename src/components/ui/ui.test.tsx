import {render, screen} from '@testing-library/react'
import {describe, expect, test} from 'vitest'
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from './card'
import {Badge} from './badge'
import {Button} from './button'
import {Input} from './input'
import {Label} from './label'
import {Textarea} from './textarea'
import {Separator} from './separator'
import {Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage} from './avatar'
import {Tabs, TabsContent, TabsList, TabsTrigger} from './tabs'
import {ScrollArea} from './scroll-area'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './navigation-menu'
import {Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle,} from './sheet'

describe('UI Components', () => {
    test('Card renders all parts', () => {
        const {container} = render(
            <Card>
                <CardHeader>
                    <CardTitle>Title</CardTitle>
                    <CardDescription>Description</CardDescription>
                </CardHeader>
                <CardContent>Content</CardContent>
                <CardFooter>Footer</CardFooter>
            </Card>
        )
        expect(screen.getByText('Title')).toBeInTheDocument()
        expect(screen.getByText('Description')).toBeInTheDocument()
        expect(screen.getByText('Content')).toBeInTheDocument()
        expect(screen.getByText('Footer')).toBeInTheDocument()
        expect(container.firstChild).toHaveClass('rounded-xl')
    })

    test('Badge renders correctly', () => {
        render(<Badge>Test Badge</Badge>)
        expect(screen.getByText('Test Badge')).toBeInTheDocument()
    })

    test('Button renders correctly', () => {
        render(<Button>Test Button</Button>)
        expect(screen.getByRole('button', {name: /test button/i})).toBeInTheDocument()
    })

    test('Input renders correctly', () => {
        render(<Input placeholder="test input"/>)
        expect(screen.getByPlaceholderText('test input')).toBeInTheDocument()
    })

    test('Label renders correctly', () => {
        render(<Label>Test Label</Label>)
        expect(screen.getByText('Test Label')).toBeInTheDocument()
    })

    test('Textarea renders correctly', () => {
        render(<Textarea placeholder="test textarea"/>)
        expect(screen.getByPlaceholderText('test textarea')).toBeInTheDocument()
    })

    test('Separator renders correctly', () => {
        const {container} = render(<Separator/>)
        expect(container.firstChild).toBeInTheDocument()
    })

    test('Avatar renders correctly', () => {
        render(
            <AvatarGroup>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                    <AvatarFallback>CN</AvatarFallback>
                    <AvatarBadge/>
                </Avatar>
                <AvatarGroupCount>+5</AvatarGroupCount>
            </AvatarGroup>
        )
        expect(screen.getByText('CN')).toBeInTheDocument()
        expect(screen.getByText('+5')).toBeInTheDocument()
    })

    test('Tabs render correctly', () => {
        render(
            <Tabs defaultValue="account">
                <TabsList>
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account">Account Content</TabsContent>
                <TabsContent value="password">Password Content</TabsContent>
            </Tabs>
        )
        expect(screen.getByText('Account')).toBeInTheDocument()
        expect(screen.getByText('Account Content')).toBeInTheDocument()
    })

    test('ScrollArea renders correctly', () => {
        render(
            <ScrollArea className="h-[200px] w-[350px]">
                <div>Long content here...</div>
            </ScrollArea>
        )
        expect(screen.getByText('Long content here...')).toBeInTheDocument()
    })

    test('NavigationMenu parts render correctly', () => {
        render(
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>Link One</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
                <NavigationMenuIndicator/>
            </NavigationMenu>
        )
        expect(screen.getByText('Item One')).toBeInTheDocument()
    })

    test('Sheet parts render correctly', () => {
        render(
            <Sheet open={true}>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Sheet Title</SheetTitle>
                        <SheetDescription>Sheet Description</SheetDescription>
                    </SheetHeader>
                    <SheetFooter>Sheet Footer</SheetFooter>
                </SheetContent>
            </Sheet>
        )
        expect(screen.getByText('Sheet Title')).toBeInTheDocument()
        expect(screen.getByText('Sheet Description')).toBeInTheDocument()
        expect(screen.getByText('Sheet Footer')).toBeInTheDocument()
    })
})
