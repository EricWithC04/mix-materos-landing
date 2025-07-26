import { Leaf, Heart, Users } from "lucide-react"

export const Features = () => {

    const cards = [
        {
            title: "Ritual de Amistad",
            description: "Compartir mate es un acto de confianza y amistad. La ronda de mate crea vínculos únicos entre las personas.",
            Icon: Leaf
        },
        {
            title: "Origen Natural",
            description: "Proveniente de la selva misionera, la yerba mate es un regalo de la naturaleza argentina al mundo.",
            Icon: Users
        },
        {
            title: "Herencia Cultural",
            description: "Transmitido de generación en generación, el mate es parte fundamental de la identidad argentina.",
            Icon: Heart
        },
    ]

    return (
        <section className="bg-green-50">
            <div className="py-16">
                <div className="container mx-auto flex flex-col items-center gap-6">
                    <div className="flex justify-center">
                        <h1 className="text-5xl text-center font-bold text-green-800">Tradición que Une Corazones</h1>
                    </div>
                    <p className="text-xl font-semibold max-w-1/2 text-center text-green-500">El mate es más que una bebida, es un ritual sagrado que ha unido a las familias argentinas por generaciones.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-16">
                    {cards.map(({ title, description, Icon }, idx) => (
                        <div key={idx} className="flex flex-col gap-2 bg-white border border-green-500 p-6 shadow-lg hover:shadow-xl rounded-lg">
                            <div className="rounded-md p-3 w-fit">
                                <Icon size={52} color="#17a24a" />
                            </div>
                            <h1 className="text-2xl font-semibold text-green-800">{title}</h1>
                            <p className="text-xl text-green-700">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
