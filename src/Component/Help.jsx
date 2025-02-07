import React from "react";

function Help() {
    return (
        <div className="p-10">
            <h2 className="text-2xl font-semibold mb-6 text-center">Important Websites</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center space-y-5">
                <a href="https://www.meity.gov.in/cyber-security-division" target="_blank" rel="noopener noreferrer">
                <div className="bg-white p-4 font-medium rounded-lg shadow-lg shadow-orange-100 w-96 hover:bg-gray-50 cursor-pointer">
                    <p>Ministry of Electronics and Information Technology (MeitY) - Cyber Security Division: This division is responsible for formulating policies and initiatives to enhance cybersecurity across the nation. It offers guidelines, best practices, and updates on cybersecurity measures.</p>
                </div>
                </a>
                <a href="https://cert-in.org.in/" target="_blank" rel="noopener noreferrer">
                <div className="bg-white p-4  font-medium rounded-lg shadow-lg shadow-orange-100 w-96 hover:bg-gray-50 cursor-pointer">
                    <p>Indian Computer Emergency Response Team (CERT-In): CERT-In is the national nodal agency for responding to computer security incidents. It provides alerts, advisories, and guidelines to protect against cybersecurity threats.</p>
                </div>
                </a>
                <a href="">
                <div className="bg-white p-4  font-medium rounded-lg shadow-lg  shadow-orange-100 w-96 hover:bg-gray-50 cursor-pointer">
                    <p>National Critical Information Infrastructure Protection Centre (NCIIPC): NCIIPC focuses on safeguarding critical information infrastructure in sectors like power, banking, telecom, and more. It offers resources and guidelines for the protection of such infrastructures.</p>
                </div>
                </a>
                <a href="">
                <div className="bg-white p-4  font-medium rounded-lg shadow-lg  shadow-orange-100 w-96 hover:bg-gray-50 cursor-pointer">
                    <p>Cyber Crime Portal: An initiative by the Government of India to facilitate online reporting of cyber crimes. Citizens can report incidents related to cyber crimes, especially those targeting women and children.</p>
                </div>
                </a>
                <a href="https://www.csk.gov.in/" target="_blank" rel="noopener noreferrer">
                <div className="bg-white p-4 font-medium  rounded-lg shadow-lg  shadow-orange-100 w-96 hover:bg-gray-50 cursor-pointer">
                    <p>Cyber Swachhta Kendra (Botnet Cleaning and Malware Analysis Centre): Part of the Digital India initiative, this center provides tools and resources to help users detect and remove botnets and malware from their systems.</p>
                </div>
                </a>
                <a href="https://www.aicte-india.org/CyberSecurity" target="_blank" rel="noopener noreferrer">
                <div className="bg-white p-4 font-medium  rounded-lg shadow-lg  shadow-orange-100 w-96 hover:bg-gray-50 cursor-pointer">
                    <p>Ministry of Home Affairs - Cyber and Information Security (C&IS) Division: This division deals with matters related to cybercrime, cybersecurity, and the implementation of policies to protect information infrastructure.</p>
                    
                </div>
                </a>
            </div>
        </div>
    );
}

export default Help;