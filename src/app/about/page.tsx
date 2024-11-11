import Image from "next/image";
export default function about() {
    return (       
             <section>
                <main>
                    <div className="flex ">
                        <div className="ml-36 mt-44">
                            <h1 className="text-5xl font-semibold font-serif ">
                                About Me
                            </h1>
                            <p className="w-[500px] font-medium text-lg mt-8">
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad id temporibus dignissimos fugiat similique, nihil accusantium cupiditate reiciendis modi, dolores neque minima laborum provident fugit rem velit, et exercitationem nemo!
                             dplaceat dolor, molestias nulla explicabo libero deserunt, quo iure corporis ab doloremque ea expedita illum fuga non cumque eos. Eos blanditiis fugit adipisci accusantium vero quidem consectetur inventore quasi.    
                             </p>
                            <a href="https://resume-builder-six-green.vercel.app/">
                        <button className="text-2xl mt-4 bg-yellow-400 rounded-xl px-4 py-1">
                            Resume
                        </button>
                         </a>
                        </div>                      
                        <div className="w-[450px] h-[450px] bg-yellow-500 ml-[650px] rounded-full mt-24">
            <Image src={"/image.02.png"} alt={"image.2"}
            height={400}
            width={400}
            className="mx-9 my-2 h-96 w-96" ></Image>
          </div>        
                    </div>
                </main>
             </section>
    )
}