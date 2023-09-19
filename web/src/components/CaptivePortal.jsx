import CardCds from "./CardCds"
import ParkSpaces from "./ParkSpaces"
import PrincipalSlider from "./PrincipalSlider"
import SquareSpaces from "./SquareSpaces"

const CaptivePortal = () => {
    return (
        <section className="max-w-3xl sm:rounded-3xl md:shadow-lg bg-white  mx-auto font-montserrat px-5 pb-8 sm:grid sm:grid-cols-2 gap-x-4 ">
            <div className="sm:col-sapn-1">
                <div className="flex gap-1 items-end ">
                    <img src="/cds-logo.svg" alt="Logo de Ciudad del Saber" className="md:-ml-9" />
                </div>
                <p className="text-sm pb-8 text-gray-800">Descubre la oferta comercial, gastronómica y de conveniencia de <a href="https://ciudaddelsaber.org/" className=" text-cds-azul font-bold">Ciudad del Saber</a></p>
                <PrincipalSlider />
                <SquareSpaces />
            </div>
            <div className=" sm:pt-14">
                <ParkSpaces />
                <CardCds />
            </div>
        </section >
    )
}

export default CaptivePortal