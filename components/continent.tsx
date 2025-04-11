"use client";
import { Dialog, Progress } from "radix-ui";
import { ScrollArea } from "radix-ui";
import { Switch } from "radix-ui";
import { useEffect, useState } from "react";
import { motion } from "motion/react"

interface ContinentProps {
  continent: string;
  countries: string[];
}

export default function ContinentComponent({
  continent,
  countries,
}: ContinentProps) {
  const [counter,setCounter] = useState(0);
	const [progress, setProgress] = useState(Math.round(counter/countries.length)*100);

  const handleCount=  (checked: boolean)=>{
    if(checked){
      setCounter(prevCounter => prevCounter+1);
    }
    else{
      setCounter(prevCounter => Math.max(0,prevCounter-1));

    }
  }

  useEffect(()=>{
    setProgress(Math.round((counter / countries.length) * 100));
    console.log(progress)
  },[counter])

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <motion.button className="text-black font-bold border p-10 rounded-lg shadow-lg"
        whileHover={{scale: 1.05}}> 
  {continent}</motion.button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-lg w-80">
          <Dialog.Title className="text-black text-xl font-bold">
            {continent}
          </Dialog.Title>
            <ScrollArea.Root 
            className="w-full h-[30vh] border-radius-4 overflow-hidden box-shadow-md
            ">
            <ScrollArea.Viewport className="w-full h-full border-radius-inherit">
                <div className="p-4">
                    {countries.map((c) => (
                        <div key={c} className="border-t-1 flex p-3">
                            <div className="mr-auto">
                            {c}
                            </div>
                            <Switch.Root
                            defaultChecked={false}
                              
                              className={`
                                w-[42px] h-[25px]
                                bg-stone-200
                                rounded-full
                                relative
                                shadow-[0_2px_10px_rgba(0,0,0,0.45)]
                                focus:outline-none focus:ring-2 focus:ring-black
                                data-[state=checked]:bg-black
                              `}
                              onCheckedChange={(checked)=> handleCount(checked)}
                            >
                              <Switch.Thumb
                                className={`
                                  block w-[21px] h-[21px]
                                  bg-white
                                  rounded-full
                                  shadow-[0_2px_2px_rgba(0,0,0,0.45)]
                                  transition-transform
                                  transform translate-x-[2px]
                                  data-[state=checked]:translate-x-[19px]
                                `}
                              />
                            </Switch.Root>
                        </div>
                    ))}
                </div>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar
                orientation="vertical"
                className="flex user-select-none touch-action-none p-2 transition 160 ease-out"
            >
                <ScrollArea.Thumb className="relative" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Scrollbar
                orientation="horizontal"
            >
                <ScrollArea.Thumb  />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner />
        </ScrollArea.Root>
        <div className="p-2">
        <p className="w-screen h-5 my-3">Countries Discovered: {counter}/{countries.length}</p>
        <Progress.Root
          className="relative overflow-hidden bg-gray-200 rounded-full w-full h-3 shadow-inner bg-black"
          value={progress}
        >
          <Progress.Indicator
				className="ease-[cubic-bezier(0.65, 0, 0.35, 1)] size-full bg-black transition-transform duration-[100ms]"
				style={{ transform: `translateX(-${100 - progress}%)` }}
			/>
		</Progress.Root>
        </div>
          <Dialog.Close asChild>
            <button className="mt-4 text-sm text-blue-500">Save</button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
