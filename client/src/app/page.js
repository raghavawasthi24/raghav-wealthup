"use client";

import Image from "next/image";
import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import React, { useState, useEffect } from "react";
import { getCode, checkCode } from "../utils/action";


export default function page() {
    const [code, setCode] = useState("");
    const [inputCode, setInputCode] = useState("");
    const [message, setMessage] = useState("");

    //fetching code every time page refreshes and on initial load
    useEffect(() => {
        fetchCode();
    }, []);

    const fetchCode = async () => {
        try {
            const newCode = await getCode();
            setCode(newCode);
            setMessage("");
        } catch (error) {
            console.error("Error fetching code:", error);
            setMessage("Error fetching code. Please try again.");
        }
    };

    const handleSubmit = async () => {
        try {
            const response = await checkCode(inputCode);
            setMessage(response.message);
        } catch (error) {
            console.error("Error using code:", error);
            setMessage(error.response.data.error);
        }
    };
  return (
    <>
    <main className="flex items-center justify-center w-full md:min-h-screen py-5">
                {/* Main Container */}
                <div className="relative overflow-hidden w-[700px] h-[650px]">
                    <div className="bg-gradient-to-r from-[#0A5783] via-[#10768D] to-[#189E99] w-full h-[500px]">
                        {/* Content Container */}
                        <div className="px-10 py-6 flex flex-col items-center gap-2">
                            {/* Main Content */}
                            <div className="w-[80%] flex flex-col items-center gap-3">
                                <h1 className="text-white text-3xl font-bold">
                                    Check your financial health
                                </h1>
                                <p className="text-center text-white text-xs font-extralight w-[60%] tracking-widest ">
                                    Use WealthoMeter to get a free report card
                                    for your finances- within minutes
                                </p>
                                {/* Get Started Button */}
                                <Button />
                            </div>

                            {/* Checkbox Section */}
                            <div className="flex items-start justify-between text-white w-full relative">
                                {/* Left Checkbox */}
                                <div className="flex flex-col items-start gap-3 pt-12">
                                    {/* Checkbox Item 1 */}
                                    <Checkbox label="Expected Retirement Age" />
                                    {/* Checkbox Item 2 */}
                                    <Checkbox label="Identify Mistakes" />
                                </div>

                                {/* Right Checkbox */}
                                <div className="flex flex-col items-start gap-3 pt-12">
                                    {/* Checkbox Item 3 */}
                                    <Checkbox label="Personalised Roadmap" />
                                    {/* Checkbox Item 4 */}
                                    <Checkbox label="Tips To Improve" />
                                </div>
                            </div>

                            {/* Absolute Positioned Image */}
                            <div className="absolute bottom-[240px] left-[260px]">
                                <Image
                                    src="/mobile.png"
                                    width={250}
                                    height={500}
                                    alt="bg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Second Section with Wave Background */}
                    <div className="-mt-[80px]">
                        <Image
                            src="/bg.png"
                            width={500}
                            height={400}
                            alt="bg"
                            className="absolute -bottom-[20px] left-0 w-full"
                        />
                        {/* Secondary Content */}
                        <div className="relative z-30 text-white flex flex-col items-center gap-5">
                            <h3 className="text-2xl font-bold">
                                How it works?
                            </h3>
                            {/* Steps Image */}
                            <div className="mx-auto">
                                <Image
                                    src="/line.png"
                                    width={400}
                                    height={50}
                                    alt="working"
                                    className="-mt-[90px] ml-[10px]"
                                />
                                {/* Steps Section */}
                                <div className="flex items-center justify-between text-center gap-3 w-[110%] -ml-[10px] -mt-[80px] text-xs font-light tracking-wider">
                                    <span className="w-[100px]">
                                        Answer few questions
                                    </span>
                                    <span className="w-[100px]">
                                        Register using phone and OTP
                                    </span>
                                    <span className="w-[120px]">
                                        Get report and personal roadmap
                                    </span>
                                </div>
                            </div>
                            {/* Get Started Button */}
                            <Button />
                        </div>
                    </div>
                </div>
            </main>

       
                <div className="flex items-center flex-col gap-4 mt-5 mb-10 ">
                <h3>Section-2</h3>
                <div className="flex flex-col gap-5 w-[400px]">
                    <div className="flex justify-between items-center">
                        <p>Code: {code}</p>
                        <button onClick={fetchCode} className="border-2">
                            Refresh
                        </button>
                    </div>
                    <div className="flex justify-between">
                        <input
                            type="text"
                            value={inputCode}
                            onChange={(e) => setInputCode(e.target.value)}
                            placeholder="Enter the above code"
                            className="border-2"
                        />
                        <button onClick={handleSubmit} className="border-2">
                            Submit
                        </button>
                    </div>
                    <p>Message: {message}</p>
                </div>
           
            </div>
    </>
  )
}
