import React from "react";

function Footer() {
    return (
        <footer className="bg-gradient-to-br from-white via-orange-50 to-orange-50 text-black py-6">
            <div className="flex flex-col items-center align-middle text-cente p-32">
                <p className="mb-4">© 2025 CyberSecurity Quiz. All rights reserved.</p>
                <ul className="flex justify-center space-x-6">
                    <li><a href="#home" className="hover:text-orange-200">Home</a></li>
                    <li><a href="#quiz" className="hover:text-orange-200">Quiz</a></li>
                    <li><a href="#lessons" className="hover:text-orange-200">Lessons</a></li>
                    <li><a href="#help" className="hover:text-orange-200">Help</a></li>
                </ul>
               
            </div>
        </footer>
    );
}

export default Footer;