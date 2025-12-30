import { div } from "framer-motion/client";

const Approach = () => {

    const cardsData = [
        {
            title : "Our Goal" ,
            desc : "Proxima supports scholars..." ,
            borderTop : "border-t-blue-500"
        },
        {
            title : "Our Methods" ,
            desc : "We provide cost-effective..." ,
            borderTop : "border-t-green-500"
        },
        {
            title : "Our Result" ,
            desc : "We deliver high-quality..." ,
            borderTop : "border-t-violet-500"
        }
    ]

    return (
         <div className="py-20 bg-gray-50 ">
            <h1 className="text-center text-5xl font-bold mb-16">Our Approach</h1>
            
            {/* Grid layout for neat alignment */}
            <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                {cardsData.map((card, idx) => (
                    <div 
                        key={idx} 
                        className={`border-t-4 w-[350px] bg-white ${card.borderTop} rounded-2xl px-8 py-8 shadow-lg`}
                    >
                        <h1 className="text-center font-bold text-2xl">{card.title}</h1>
                        <p className="text-center mt-6 text-gray-500">{card.desc}</p>
                    </div>
                ))}
            </div>
         </div>
    )
}

export default Approach;
