"use client";
import Image from "next/image";
import { useState } from "react";
import LoginForm from "@/components/screen/login";
import SignUpForm from "@/components/screen/signup";
import ProjectOverviewModel from "@/components/projectOverviewModel";

export default function Home() {
  const [activetab, setActiveTab] = useState("login");
  return (
    <main>
      <div className='auth-wrapper'>
        <div className='auth-left-image'>
          <Image
            src='/images/UX_Picture.jpg'
            alt='left iamge'
            width={730}
            height={598}
          />
        </div>
        <div className='form-wrapper'>
          <div className='auth-tabs'>
            <div className='button-tab' onClick={() => setActiveTab("login")}>
              <h3 className={`${activetab === "login" ? "active-tab" : ""}`}>
                Login
              </h3>
            </div>
            <div className='button-tab' onClick={() => setActiveTab("signup")}>
              <h3 className={`${activetab === "signup" ? "active-tab" : ""}`}>
                Register
              </h3>
            </div>
          </div>
          {activetab === "login" && <LoginForm />}
          {activetab === "signup" && <SignUpForm />}
          <ProjectOverviewModel />
        </div>
      </div>
    </main>
  );
}
