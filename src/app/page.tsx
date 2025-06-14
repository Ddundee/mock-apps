import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

export default function Home() {
    return (
        <main className="p-2">
            <div className="flex gap-4 items-center w-screen">
                <h1 className="text-lg font-medium">Mock Apps</h1>
                <ModeToggle />
            </div>
            <div className="flex gap-2 flex-wrap">
                <div className="border border-border bg-muted/40 p-2 rounded-md flex flex-col">
                    <p>Writer</p>
                    <Link className="text-blue-500 underline" href={"/writer"}>/writer</Link>
                    <Link className="text-blue-500 underline" href={"/writer/dash"}>/writer/dash</Link>

                </div>
            </div>
        </main>
    );
}
