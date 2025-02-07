import React from "react";

function Navbar() {
    return (
        <div className="flex justify-between px-10 py-3">
            <div>
                <img src="src\assets\DALL·E 2025-02-07 19.42.17 - An aesthetically pleasing and futuristic logo for a cybersecurity quiz website. The design features a sleek, glowing shield with a digital keyhole at .webp" className="h-12 rounded-full" />
            </div>
            <div className="w-1/2 py-4">
                <ul className="flex justify-center space-x-60 font-semibold text-xl  ">
                    <li className="text-orange-600 hover:text-orange-500 cursor-pointer">Home</li>
                    <li className="text-orange-600 hover:text-orange-500 cursor-pointer"> <a href="https://quizizz.com/join/quiz/62c947eb091c6c001d484bfe/start?studentShare=true" target="_blank" rel="noopener noreferrer">Quiz</a></li>
                    <li className="text-orange-600 hover:text-orange-500 cursor-pointer">
                        <a href="https://www.geeksforgeeks.org/cyber-security-tutorial/" target="_blank" rel="noopener noreferrer">Lessons</a>
                    </li>
                   
                </ul>
            </div>
            <div className="flex space-x-8">
                <button className="bg-orange-500  text-white rounded-full font-semibold m-2 px-6 py-1 hover:bg-orange-700">Sign In</button>
                <button className="bg-orange-500 text-white rounded-full font-semibold m-2 px-6 py-1 hover:bg-orange-700">Login</button>
            </div>

        </div>
    )
   
}

export default Navbar;