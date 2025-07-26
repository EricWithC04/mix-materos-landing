import background from "../../../public/hero-bg.jpg"

export const Hero = () => {
    return (
        <section className="h-screen bg-blue-50 py-6 w-full">
            <img 
                className="absolute inset-0 w-full h-full object-cover z-0"
                src={background} 
                alt="fondo" 
            />

            <div className="absolute inset-0 bg-black z-10 opacity-60"></div>
            
            <div className="flex flex-col items-center justify-center text-center gap-10 mt-40 px-2">
                <div className="px-1 py-20 flex flex-col items-center gap-6 z-20">
                    <h1 className="text-5xl lg:text-7xl font-bold font-dancing max-w-3/4 text-white">Mix Materos, <span className="bg-gradient-to-t from-green-800 via-green-600 to-green-400 bg-clip-text text-transparent">Mate</span>, luego existo</h1>
                    <p className="text-neutral-400 font-semibold font-dancing text-2xl lg:text-3xl max-w-3/4">Una mezcla única de burrito, cola de caballo, romero y más hierbas seleccionadas para transformar tu ritual matero.</p>
                    <div className="flex gap-4 [&>button]:py-3 [&>button]:px-8 [&>button]:text-xl [&>button]:font-semibold [&>button]:rounded-md [&>button]:cursor-pointer">
                        <button onClick={() => window.location.href = "#contact"} className="bg-gradient-to-t from-green-800 via-green-600 to-green-400 text-white hover:from-green-700 hover:via-green-500 hover:to-green-300">Probar Ahora</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
