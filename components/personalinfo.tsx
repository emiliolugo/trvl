'use client'

import { Avatar } from "radix-ui";
import { motion } from "motion/react";
import { SettingsIcon, ShareIcon } from 'lucide-react'
const PersonalInfoPage = () => {
    return(
        <div className="px-20 mx-auto w-[80vw] flex items-center py-10">
	<div className="flex gap-5 mr-5">

            <Avatar.Root className="inline-flex md:size-[128px] select-none items-center justify-center overflow-hidden rounded-full bg-black align-middle shadow-md">
			<Avatar.Fallback className="leading-1 flex size-full items-center justify-center bg-stone-500 text-[15px] font-medium text-violet11">
				PD
			</Avatar.Fallback>
		</Avatar.Root>
	</div>
    <div>

    <h1 className="md:text-3xl text-xl font-bold">
        Username
      </h1>
      <div className="flex gap-x-3">
        <motion.button className="rounded-lg text-white font-bold text-lg bg-[#EF9056] hover:bg-[#DB7F49] px-3 py-1 shadow-md">
            Edit Profile
        </motion.button>

        <motion.button className="rounded-lg text-white font-bold text-lg bg-stone-500 hover:bg-stone-600 px-3 py-1 shadow-md">
            <SettingsIcon />
        </motion.button>
        <motion.button className="rounded-lg text-white font-bold text-lg bg-stone-500 hover:bg-stone-600 px-3 py-1 shadow-md">
            <ShareIcon />
        </motion.button>

      </div>
      <div className="flex gap-x-2">
        <p>
        <span className="font-bold text-xl md:text-2xl">100</span> followers
        </p>
        <p>
        <span className="font-bold text-xl md:text-2xl">100</span> following
        </p>
      </div>
      
      
    </div>
      

      </div>
    )
}

export default PersonalInfoPage;