import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LateralMenu } from "./LateralMenu";

export const Header2 = ({ children }: any) => {
  return (
    <>
    <div className="container-fluid">
        <div className="row" id="header_principal">
            <div className="header" id="header_principal">
                <div className="header__logos" id="logo">
                <Image
                    src={"/images/logoucn.png" as any}
                    width="300"
                    height="100"
                    objectFit="contain"
                    alt="Logo UCN"
                    margin-right="100px"
                />
                </div>
            </div>
            <div className="header"  id="header_principal">
                <div className="header__logos" id="logo2">
                <img
                    src={"/images/logofooter2.png" as any}
                    width="auto"
                    height="106"
                    alt="Logo UCN"  
                    object-fit= "contain"

                />
                </div>
            </div>
        </div>
    </div>
    <main >
      {children}
    </main>
    </>
  );
};