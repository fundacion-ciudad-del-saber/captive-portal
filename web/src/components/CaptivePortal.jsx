import CardCds from "./CardCds"
import ParkSpaces from "./ParkSpaces"
import PrincipalSlider from "./PrincipalSlider"
import SquareSpaces from "./SquareSpaces"

const CaptivePortal = () => {
    return (
        <section className="max-w-3xl sm:rounded-3xl  mx-auto font-montserrat p-5 sm:grid sm:grid-cols-2 gap-x-4 bg-white">
            <div className="sm:col-sapn-1">
                <div className="flex gap-1 items-end ">
                    <img src="./cds.svg" alt="cds logo" className="h-12" />
                    <h1 className="flex font-bold text-4xl bg-gradient-to-r from-plaza via-plaza to-pink-400 text-transparent bg-clip-text ">La Plaza CDS</h1>
                </div>
                <p className="text-sm py-2 text-gray-800 font-light">Explora el conocimiento en la Plaza de <br /> Ciudad del Saber</p>
                <PrincipalSlider />
                <CardCds />
            </div>
            <div className=" sm:pt-14">
                <SquareSpaces />
                <ParkSpaces />
            </div>
        </section >
    )
}

export default CaptivePortal