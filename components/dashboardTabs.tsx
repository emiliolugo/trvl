'use client'

import * as React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { motion, AnimatePresence } from "motion/react";
import CountryTracker from "./countryTracker";
import MyMapPage from "./myMap";
import { useState } from "react";

const DashTabsPage = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div className="w-full mx-auto">
      <Tabs.Root
        className="flex flex-col w-full"
        defaultValue="tab1"
        value={activeTab}
        onValueChange={handleTabChange}
      >
        <div className="border-b border-gray-200 p-5">
          <Tabs.List
            className="flex gap-8"
            aria-label="Manage your travel dashboard"
          >
            <Tabs.Trigger
              className="px-4 text-gray-600 font-medium text-base transition-colors duration-200 hover:text-black data-[state=active]:text-black relative outline-none"
              value="tab1"
            >
              My Map
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black scale-x-0 transition-transform duration-500 data-[state=active]:scale-x-100" />
            </Tabs.Trigger>
            <Tabs.Trigger
              className="px-4 text-gray-600 font-medium text-base transition-colors duration-200 hover:text-black data-[state=active]:text-black relative outline-none"
              value="tab2"
            >
              Countries
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black scale-x-0 transition-transform duration-500 data-[state=active]:scale-x-100" />
            </Tabs.Trigger>
          </Tabs.List>
        </div>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            {activeTab === "tab1" && (
              <motion.div
                key="tab1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="p-6"
              >
                <Tabs.Content
                  className="outline-none"
                  value="tab1"
                  forceMount
                >
                  <MyMapPage />
                </Tabs.Content>
              </motion.div>
            )}
            
            {activeTab === "tab2" && (
              <motion.div
                key="tab2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="p-6"
              >
                <Tabs.Content
                  className="outline-none"
                  value="tab2"
                  forceMount
                >
                  <CountryTracker />
                </Tabs.Content>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Tabs.Root>
    </div>
  );
};

export default DashTabsPage;