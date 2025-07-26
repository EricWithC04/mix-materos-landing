import { Heart, Sprout, Leaf, Home } from "lucide-react"

export const Benefits = () => {

    const cards = [
        {
            title: "Natural",
            description: "100% hierbas naturales seleccionadas",
            Icon: Sprout,
            color: "#d97607"
        },
        {
            title: "Antioxidantes",
            description: "Acompaña el mate con beneficios digestivos y relajantes",
            Icon: Heart,
            color: "#ef4545"
        },
        {
            title: "Vitaminas",
            description: "Vitaminas A, C, E y complejo B natural",
            Icon: Leaf,
            color: "#17a24a"
        },
        {
            title: "Elaboración Casera",
            description: "Hecho en Pirane, con amor por la tradición",
            Icon: Home,
            color: "#2463ea"
        },
    ]

    return (
        <section className="bg-green-50">
            <div className="py-16">
                <div className="container mx-auto flex flex-col items-center gap-6">
                    <div className="flex justify-center">
                        <h1 className="text-5xl max-w-3/4 text-center lg:max-w-1/1 font-bold text-green-800">Beneficios del Producto</h1>
                    </div>
                    <p className="text-xl font-semibold max-w-1/2 text-center text-green-500">Más que sabor, el mate aporta energía natural y múltiples beneficios para tu bienestar.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-16">
                    {cards.map(({ title, description, Icon, color }, idx) => (
                        <div key={idx} className="flex flex-col gap-2 items-center bg-white border border-green-500 p-6 shadow-lg hover:shadow-xl rounded-lg">
                            <div className="rounded-md p-3 w-fit">
                                <Icon size={52} color={color} />
                            </div>
                            <h1 className="text-2xl font-semibold text-green-800">{title}</h1>
                            <p className="text-lg text-center text-green-700">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
