import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LateralMenu } from "./LateralMenu";

export const Header2 = ({ children }: any) => {
  return (
    <>
    <div className="container-fluid">
      <div className="col" style={{height:'100px'}}>
        <div className="row" id="header_principal">
            <div className="header">
                <div className="header__logos" style={{marginLeft:'10px', marginTop:'10px'}}>
                <Image
                    src={"/images/logo.png" as any}
                    width="90"
                    height="90"
                    objectFit="contain"
                    alt="Logo UCN"
                    margin-right="100px"
                />
                </div>
            </div>
            <div className="header">
                <div className="header__logos" style={{marginLeft:'10px', marginTop:'10px'}}>
                <img
                    src={"/images/logofooter4.png" as any}
                    width="auto"
                    height="90"
                    alt="Logo UCN"  
                    object-fit= "contain"

                />
                </div>
            </div>
        </div>
        <hr style={{backgroundColor:'#dcdcdc'}}></hr>
      </div>
    </div>
    <main >
      {children}
    </main>
    </>
  );
};