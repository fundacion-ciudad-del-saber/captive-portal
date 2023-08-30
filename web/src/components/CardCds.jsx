import CdsIcon from "../assets/CdsIcon"

const CardCds = () => {
    return (
        <section className='w-full h-40 bg-gradient-to-r from-blue-700 via-cds-azul to-cds-azul  rounded-lg p-2 shadow-lg overflow-hidden relative flex flex-col justify-between mt-4'>
            <div>
                <h4 className='sm:text-lg text-xl text-white font-bold'>Ciudad del Saber</h4>
                <p className=' text-xs text-gray-300 pb-2'>Conoce todo sobre nosotros!</p>
                <a href="https://www.instagram.com/ciudaddelsaber/" className="w-8 h-8 bg-white absolute top-2 right-2 opacity-70 rounded-full grid place-content-center">
                    <img width="100%" height="100%" src="./instagram.svg" alt="instagram-icon" className="h-6 fill-black" />
                </a>
            </div>
            <a href='https://ciudaddelsaber.org/audioguia-de-ciudad-del-saber/' className="py-1 px-2 w-32 sm:w-24 justify-center sm:text-xs text-sm bg-white rounded-md hover:bg-gray-200 text-gray-600 font-semibold flex items-center">
                Ir al sitio web
            </a>
            <CdsIcon className={'absolute h-48 right-2 -bottom-16'} color={'#ffffff'} />

        </section>
    )
}

export default CardCds