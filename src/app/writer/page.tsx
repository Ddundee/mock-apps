import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlayCircleIcon } from "lucide-react";

export default function Page() {
    return (
        <div className="font-geist-sans space-y-16">
            <div className="flex justify-center">
                <nav className="mt-6 mx-2 max-w-3xl w-full bg-muted/30 backdrop-blur-2xl border rounded-md border-border p-3 flex justify-between gap-4">
                    <div className="flex items-center">
                        <div className="w-10 mr-6 aspect-square h-10 bg-foreground rounded-xs" />
                        <Separator orientation="vertical" className="w-1" />
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="bg-inherit">Resources</NavigationMenuTrigger>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink className="bg-inherit">Pricing</NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="bg-inherit">Product</NavigationMenuTrigger>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                    <div className="flex gap-2">
                        <Button variant={"secondary"} >Login</Button>
                        <Button>Sign up</Button>
                        <ModeToggle />
                    </div>
                </nav>
            </div>

            <main className="w-full flex flex-col gap-5 items-center">
                <Badge className="my-auto" variant={"secondary"}>W&apos;re hiring!</Badge>
                <h1 className="text-center text-5xl font-semibold leading-tight">Refine your writing<br />AI-enabled suggestions.</h1>
                <p className="text-center text-secondary-foreground/70">Enhance your writing effortlessly with the help of AI suggestions,<br /> ensuring your content is clearer, more impactful, and refined.</p>
                <div className="flex gap-4">
                    <Button>Start free trial</Button>
                    <Button variant={"outline"}><PlayCircleIcon /> Try a demo</Button>
                </div>
                <div className="border-border border bg-muted/50 rounded-md max-w-4xl w-full aspect-square">
                    <div className="flex gap-2 px-4 py-3 border-b border-border">
                        <div className="bg-red-400 w-2.5 h-2.5 rounded-full" />
                        <div className="bg-yellow-400 w-2.5 h-2.5 rounded-full" />
                        <div className="bg-green-400 w-2.5 h-2.5 rounded-full" />
                    </div>
                    <div className="isolate relative overflow-hidden">

                    </div>
                </div>
            </main>
        </div>
    )
}
