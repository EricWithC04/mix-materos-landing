export const Ingredients = () => {
    return (
        <section className="py-16 px-8 bg-gradient-to-br from-green-700 to-green-900">
            <div className="grid lg:grid-cols-2 gap-6">
                <div>
                    <img className="max-h-160 rounded-lg shadow-lg" src="./herbs.jpg" alt="foto" />
                </div>
                <div className="px-2 flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold font-dancing text-white text-center mb-8">Ingredientes</h1>
                    <div className="grid lg:grid-cols-2 gap-8 text-white [&>div>h2]:font-bold [&>div>h2]:text-3xl [&>div>p]:text-lg">
                        <div className="flex flex-col text-center gap-2">
                            <h2 className="font-dancing">Cascara de Naranja</h2>
                            <p>Los antioxidantes y flavonoides presentes en la cáscara de naranja ayudan a reducir la presión arterial y los niveles de colesterol.</p>
                        </div>
                        <div className="flex flex-col text-center gap-2">
                            <h2 className="font-dancing">Cola de Caballo</h2>
                            <p>La cola de caballo tiene efectos diuréticos, antioxidantes y antiinflamatorios. Buena aliada de los riñones.</p>
                        </div>
                        <div className="flex flex-col col-span-2 text-center gap-2">
                            <h2 className="font-dancing">Burrito</h2>
                            <p>Aromatizante natural, el burrito agrega un sabor y aroma riquísimo al mate, mejorando la experiencia al tomarlo.
Tiene propiedades digestivas leves y ayuda a aliviar las molestias estomacales.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
