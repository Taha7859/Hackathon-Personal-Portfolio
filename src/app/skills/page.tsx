
import React from "../icon/react";
import Css from "../icon/css";
import Figma from "../icon/figma";
import Html from "../icon/html";
import Java from "../icon/javascript";
import Next from "../icon/next.js";
import Nodejs from "../icon/nodejs";
import Typescript from "../icon/typescript";
import Canva from "../icon/canva";

export default function skills() {
    return (
                <section>
                    <main>
                        <div className=" mt-32">
                            <h1 className="text-3xl font-serif font-bold border-2 border-black inline-block mx-[800px] px-8 py-2">
                                SKILLS
                            </h1>
                            <p className="text-xl font-semibold mt-20 mx-[600px] ">
                                Using Now :
                            </p>
                            <div className="flex mx-[650px] mt-10 space-x-32">
                                <div>
                                    <Java></Java>
                                    <p className="font-semibold px-1">
                                        Javascript
                                    </p>
                                </div>
                                <div>
                                <Html></Html>
                                <p className="font-semibold px-5">HTML</p>
                                </div>
                                <div>
                                <Css></Css>
                                <p className="font-semibold px-6">CSS</p>
                                </div>
                            </div>
                            <div className="flex mx-[650px] mt-10 space-x-32">
                                <div>
                                    <Next></Next>
                                    <p className="font-semibold px-3">
                                        Next.Js
                                    </p>
                                </div>
                                <div>
                                <Nodejs></Nodejs>
                                <p className="font-semibold px-3">Nodejs</p>
                                </div>
                                <div>
                                <Figma></Figma>
                                <p className="font-semibold  px-4">Figma</p>
                                </div>
                            </div>
                            <p  className="text-xl font-semibold mt-20 mx-[600px]">
                                Others :
                            </p>
                            <div className="flex mx-[650px] mt-10 space-x-32">
                            <div>
                                <Typescript></Typescript>
                                <p className="font-semibold ">Typescript</p>
                                </div>
                                <div>
                                    <React></React>
                                    <p className="font-semibold px-4 ">
                                        React
                                    </p>
                                </div>                            
                                <div>
                                    <Canva></Canva>
                                <p className="font-semibold px-4">Canva</p>
                                </div>
                            </div>                            
                        </div>
                    </main>
                </section>
            
    )
}