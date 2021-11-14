import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import { LateralMenu } from "./LateralMenu";

export const Header = ({ children }: any) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
      const position = window.pageXOffset;
      setScrollPosition(position);
  };

  useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
           window.removeEventListener("scroll", handleScroll);
      };
  }, []);

  return (
    <>
    <div className="container-fluid" style={{marginLeft:scrollPosition}}>
      <div className="col" style={{height:'100px'}}>
        <div className="row" id="header_principal">
          <div className="header">
            <div className="header__logos" style={{marginLeft:'75px', marginTop:'10px'}}>
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
                height="90px"
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
      <LateralMenu></LateralMenu>
      {children}
    </main>
    </>
  );
};
