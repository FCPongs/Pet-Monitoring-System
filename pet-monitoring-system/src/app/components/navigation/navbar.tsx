import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

export default function NavBar() {
    return (
        <div className="shadow-lg w-full">
            <div className="flex items-center justify-between w-full px-4">

                {/* Left - Logo */}
                <div className="p-4">Logo</div>

                {/* Center - Menu */}
                <NavigationMenu className="!flex flex-1 justify-center">
                    <NavigationMenuList className="!flex gap-4">
                        {/* Home */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                            <NavigationMenuContent className="p-2">
                                <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                                                href="/"
                                            >
                                                <div className="mb-2 text-lg font-medium sm:mt-4">
                                                    shadcn/ui
                                                </div>
                                                <p className="text-muted-foreground text-sm leading-tight">
                                                    Beautifully designed components built with Tailwind CSS.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        {/* Pets */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Pets</NavigationMenuTrigger>
                            <NavigationMenuContent className="!w-[150px] p-1.5">
                                <ul className="grid gap-2">
                                    <li className="cursor-pointer hover:bg-gray-100 rounded-sm p-1">
                                        <NavigationMenuLink asChild>
                                            <Link href="../pages/pet/addPet">Add Pet</Link>
                                        </NavigationMenuLink>
                                    </li>
                                    <li className="cursor-pointer hover:bg-gray-100 rounded-sm p-1">
                                        <NavigationMenuLink asChild>
                                            <Link href="#">View Pets</Link>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        {/* Vets */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Vets</NavigationMenuTrigger>
                            <NavigationMenuContent className="!w-[150px] p-1.5">
                                <ul className="grid gap-2">
                                    <li className="cursor-pointer hover:bg-gray-100 rounded-sm p-1">
                                        <NavigationMenuLink asChild>
                                            <Link href="#">Add Vet</Link>
                                        </NavigationMenuLink>
                                    </li>
                                    <li className="cursor-pointer hover:bg-gray-100 rounded-sm p-1">
                                        <NavigationMenuLink asChild>
                                            <Link href="#">View Vets</Link>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        {/* Schedules */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Schedules</NavigationMenuTrigger>
                            <NavigationMenuContent className="!w-[150px] p-1.5">
                                <ul className="grid gap-2">
                                    <li className="cursor-pointer hover:bg-gray-100 rounded-sm p-1">
                                        <NavigationMenuLink asChild>
                                            <Link href="#">Add Schedule</Link>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                    </NavigationMenuList>
                </NavigationMenu>

                {/* Right section (optional) */}
                <div className="p-4">Profile</div>
            </div>
        </div>
    )
}
