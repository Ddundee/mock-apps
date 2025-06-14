import React from 'react'
import {
    Sidebar,
    SidebarInset,
    SidebarMenu,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
} from "@/components/ui/sidebar"
import { ModeToggle } from '@/components/mode-toggle'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ArrowRightFromLineIcon, BellIcon, ChevronsUpDownIcon, LayoutDashboardIcon, SettingsIcon, SlashIcon, StickyNoteIcon, UnplugIcon, ZapIcon } from 'lucide-react'
import { Geist_Mono } from "next/font/google";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Separator } from '@/components/ui/separator'

const geistMono = Geist_Mono()

export default function Page() {


    return (
        <SidebarProvider>
            <Sidebar variant='inset'>
                <SidebarHeader>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <div className='rounded-md bg-muted/30 border border-border flex justify-between items-center p-2'>
                                <div className='flex gap-2'>
                                    <div className="w-10 aspect-square h-10 bg-foreground rounded-xs" />
                                    <div>
                                        <h3 className='text-sm'>Project 01</h3>
                                        <p className='text-sm text-secondary-foreground/60'>Workspace</p>
                                    </div>
                                </div>
                                <ChevronsUpDownIcon className="opacity-50 !size-4" />
                            </div>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>
                <SidebarContent className='mt-2'>
                    <div className='flex gap-2 items-center justify-between p-2 rounded-md mx-2 hover:bg-muted/60'>
                        <p className='text-sm'>Dashboard</p>
                        <LayoutDashboardIcon className='!size-4' />
                    </div>
                    <div className='flex gap-2 items-center justify-between p-2 border border-border bg-muted/80 rounded-md mx-2 hover:bg-muted/60'>
                        <p className='text-sm'>Document Editor</p>
                        <StickyNoteIcon className='!size-4' />
                    </div>
                    <div className='flex gap-2 items-center justify-between p-2 rounded-md mx-2 hover:bg-muted/60'>
                        <p className='text-sm'>Integrations</p>
                        <UnplugIcon className='!size-4' />
                    </div>
                    <Separator />
                    <div className='flex gap-2 items-center justify-between p-2 rounded-md mx-2 hover:bg-muted/60'>
                        <p className='text-sm'>Activity</p>
                        <ZapIcon className='!size-4' />
                    </div>
                    <div className='flex gap-2 items-center justify-between p-2 rounded-md mx-2 hover:bg-muted/60'>
                        <p className='text-sm'>Workspace settings</p>
                        <SettingsIcon className='!size-4' />
                    </div>
                </SidebarContent>
                <SidebarFooter>
                    <div className='flex gap-2 items-center justify-between p-2 rounded-md mx-2 hover:bg-muted/60'>
                        <p className='text-sm'>Recent notifications</p>
                        <BellIcon className='!size-4' />
                    </div>
                    <div className='flex gap-2 items-center justify-between p-2 rounded-md mx-2 hover:bg-muted/60'>
                        <p className='text-sm'>Account settings</p>
                        <SettingsIcon className='!size-4' />
                    </div>
                    <div className='mt-2 rounded-md bg-muted/30 border border-border flex justify-between items-center p-2'>
                        <div className='flex gap-2'>
                            <div className="w-10 aspect-square h-10 bg-foreground rounded-xs" />
                            <div>
                                <h3 className='text-sm'>John Doe</h3>
                                <p className='text-sm text-secondary-foreground/60'>johndoe@gmail.com</p>
                            </div>
                        </div>
                        <ArrowRightFromLineIcon className="opacity-50 !size-4" />
                    </div>
                </SidebarFooter>
            </Sidebar>
            <SidebarInset className='p-2 max-h-[calc(100vh-16px)] w-full overflow-scroll'>
                <main className=''>
                    <div className='flex gap-8 items-center'>
                        <div className='flex gap-2'>
                            <SidebarTrigger />
                            <ModeToggle />
                        </div>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    Document Editor
                                </BreadcrumbItem>
                                <BreadcrumbSeparator>
                                    <SlashIcon />
                                </BreadcrumbSeparator>
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Draft #4</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                    <div className='p-2 flex w-full justify-center'>
                        <div className='space-y-6 w-full max-w-5xl'>
                            <h1 className={`${geistMono.className} mt-12 text-4xl font-semibold`}>
                                Draft #04
                            </h1>
                            <div className='grid grid-cols-5 gap-8'>
                                <div className={`space-y-6 col-span-3 ${geistMono.className} leading-loose text-secondary-foreground/70`}>
                                    <p>In a lush green meadow, there lived a frog named Ribbit and a
                                        rabbit called Hoppy. Ribbit was a jolly frog, while Hoppy was
                                        known for his incredible speed. They <span className='text-red-400 underline'>was</span> the best of friends and
                                        spent all their days playing together.</p>
                                    <p>
                                        In a lush green meadow, there <span className='text-red-400 underline'>lived</span> a frog named Ribbit and a
                                        rabbit called Hoppy. Ribbit was a jolly frog, while Hoppy was
                                        known for his incredible speed. They <span className='text-red-400 underline'>was</span> the best of friends and
                                        spent all their days <span className='text-red-400 underline'>playing</span> together.
                                    </p>
                                    <p>
                                        "Hoppy, look what I found!" <span className='text-red-400 underline'>exclaimed</span> Ribbit. Hoppy <span className='text-red-400 underline'>hopped</span>
                                        over to see what it was.
                                    </p>
                                    <p>
                                        "It's a magic crystal," said <span className='text-red-400 underline'>Hoppy</span>, his eyes gleaming with
                                        excitement.
                                    </p>
                                    <p>
                                        They pick up the crystal and <span className='text-red-400 underline'>suddenly</span>, a mysterious voice
                                        spoke. "Who dare disturb <span className='text-red-400 underline'>my</span> slumber?"
                                        Ribbit and Hoppy was <span className='text-red-400 underline'>startled</span>. "Who are you?" asked Ribbit, his
                                        voice <span className='text-red-400 underline'>trembling</span>.
                                    </p>
                                    <p>
                                        "I am the <span className='text-red-400 underline'>guardian</span> of the forest," said the voice. "Only those
                                        who are pure of <span className='text-red-400 underline'>heart</span> can possess the magic <span className='text-red-400 underline'>crystal</span>."
                                        Ribbit and Hoppy was <span className='text-red-400 underline'>determined</span> to <span className='text-red-400 underline'>prove</span> their worth. <span className='text-red-400 underline'>They</span>
                                        {" "}promise <span className='text-red-400 underline'>to</span> protect the forest and all its inhabitants. The guardian
                                    </p>
                                </div>
                                <aside className='col-span-2'>
                                    <Card className='mb-4'>
                                        <CardHeader>
                                            <CardTitle className={`${geistMono.className} text-5xl`}>40</CardTitle>
                                            <CardDescription className='text-md'>Total grammatical errors</CardDescription>
                                        </CardHeader>
                                    </Card>
                                    <div className='space-y-2'>
                                        <div className='p-4 border border-border bg-muted/30 rounded-md flex gap-2'>
                                            <p>Change <span className='text-red-400 bold'>was</span> to <span className='text-green-400 bold'>were</span></p>
                                        </div>
                                        <div className='p-4 border border-border bg-muted/30 rounded-md flex gap-2'>
                                            <p>Change <span className='text-red-400 bold'>decide</span> to <span className='text-green-400 bold'>decided</span></p>
                                        </div>
                                        <div className='p-4 border border-border bg-muted/30 rounded-md flex gap-2'>
                                            <p>Change <span className='text-red-400 bold'>spent</span> to <span className='text-green-400 bold'>spend</span></p>
                                        </div>
                                        <div className='p-4 border border-border bg-muted/30 rounded-md flex gap-2'>
                                            <p>Change <span className='text-red-400 bold'>playing</span> to <span className='text-green-400 bold'>play</span></p>
                                        </div>
                                        <div className='p-4 border border-border bg-muted/30 rounded-md flex gap-2'>
                                            <p>Change <span className='text-red-400 bold'>was</span> to <span className='text-green-400 bold'>were</span></p>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>

                    </div>

                </main>
            </SidebarInset>

        </SidebarProvider>
    )
}
