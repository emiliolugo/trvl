'use client'

import { GlobeIcon, PlaneIcon, TrendingUpIcon, UserIcon, UsersRoundIcon } from "lucide-react";

export const SideBar = () => {
    const navigations = [
        {name: "Explore", icon: GlobeIcon},
        {name: "Trending", icon: TrendingUpIcon},
        {name: "Friends", icon: UsersRoundIcon},
        {name: "Trips", icon: PlaneIcon},
        {name: "Profile", icon: UserIcon},



    ]
    return(
        <div className="h-screen w-[30vw] bg-stone-100 m-0flex flex-col py-10">
            <h1 className="text-7xl font-black px-5">
                trvl.
            </h1>
            <li className="py-10 flex flex-col gap-y-5">
            {navigations.map((item) => {
            return <ul key={item.name} className="font-bold md:text-xl flex gap-x-2 items-center hover:bg-stone-200 w-full p-5">
                <item.icon />
                <p>
                {item.name}
                </p>
                </ul>;
            })}
            </li>
            

        </div>
    )
}