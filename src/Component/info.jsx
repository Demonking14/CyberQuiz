import React from "react";

function Info() {
    return (
        <div className="flex justify-center space-x-32 py-10 my-10">
            <div className="w-1/4">
                <img src="src\assets\it-virtualisation-hero-1.png" alt="image" />
            </div>
            <div className="border-l-2 " >
                <div  className="pl-5" >
                <h2 className="font-semibold text-2xl py-2">Interactive Quizes</h2>
                <p className="py-2 font-medium text-lg">Engage in fun and educational quizzes to enhance your cyber security skills</p>
                </div>
                <div  className="pl-5">
                <h2 className="font-semibold text-2xl py-2">Education Lessons</h2>
                <p className="py-2 font-medium text-lg">Learn about different cyber security topics</p>
                </div>
                <div className="pl-5">
                <h2 className="font-semibold text-2xl py-2">Quiz Practice</h2>
                <p className="py-2 font-medium text-lg">Test your knowledge with our interactive quizzes</p>
                </div>
            </div>
        </div>
    )
}   

export default Info;