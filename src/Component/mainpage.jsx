import React from "react";

function Mainpage() {  
    return(
        <div className="flex flex-col items-center h-auto justify-center py-20 bg-gradient-to-b from-orange-50 via-orange-50 to-white-50">
            <h1 className="font-semibold flex space-x-4 text-4xl font-sans tracking-wider  ">Welcome to
                 <p className="text-orange-500 px-2">CyberSecurity Quiz</p>
                 </h1>
            
            <p className="py-20 font-normal text-xl w-3/4 text-center">Test your knowledge and enhance your understanding of cybersecurity with our interactive quizzes. Practice different scenarios and learn how to protect yourself from cyber threats.</p>
            <div className="flex space-x-8">
            <a href="https://quizizz.com/join/quiz/62c947eb091c6c001d484bfe/start?studentShare=true" target="_blank" rel="noopener noreferrer">
            <button className="bg-orange-500 text-center text-white font-semibold px-5 py-2 rounded-full text-lg hover:bg-orange-700">Start Quiz</button>
            </a>
            <a href="https://www.geeksforgeeks.org/cyber-security-tutorial/" target="_blank" rel="noopener noreferrer">
            <button className=" border-orange-500  border-2 text-center text-orange-600 font-semibold px-5 py-2 rounded-full text-lg hover:border-orange-700 ">Learn Lessons </button>
            </a>
            </div>
        </div>
    )
}

export default Mainpage
