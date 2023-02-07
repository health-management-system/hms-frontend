import React from "react";
import NavBar from "../shared/Navbar";

function ProfileLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className=" w-full">
            <div className="sticky top-0 right-0 left-0">
                <NavBar />
            </div>

            <div className="px-10 md:px-20 ">{children}</div>
        </div>
    );
}

export default ProfileLayout;
