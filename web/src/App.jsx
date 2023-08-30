import { useState } from "react"
import CaptivePortal from "./components/CaptivePortal";

function App() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const imageSrc = "https://plus.unsplash.com/premium_photo-1690489323667-ea52e341b184?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1853&q=80";

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el correo electrónico a tu backend o cualquier otro procesamiento que necesites.
    // Para este ejemplo, simplemente estableceremos el estado "subscribed" en true para mostrar los componentes y ocultar el formulario.
    setSubscribed(true);
    setShowForm(false);
  };

  return (
    <main className="w-full h-full overflow-hidden font-montserrat bg-plaza bg-opacity-20 min-h-screen sm:grid sm:place-content-center sm:py-5 ">
      {showForm && ( // Mostrar el formulario solo si showForm es true
        <section className=" flex flex-col justify-center mx-auto bg-transparent">
          <div className="max-w-md mx-auto h-full min-h-screen sm:min-h-0 bg-gray-50 sm:rounded-3xl sm:shadow-2xl">
            <img
              src={imageSrc}
              className="w-full sm:h-64 h-[450px] object-cover sm:rounded-t-3xl"
              alt="img-login"
            />
            <h4 className="px-5 text-3xl pt-6 font-bold text-plaza/90 ">
              Ingresa su correo para seguir navegando!
            </h4>
            <p className="px-5 text-sm text-gray-600 pt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <form className="px-5 py-8 flex flex-col gap-y-4" onSubmit={handleSubmit}>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={handleEmailChange}
                className="w-full min-w-0 flex-auto placeholder-gray-400 rounded-md border-0 bg-white px-3.5 py-2 text-gray-600 shadow ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-pink-500 sm:text-sm sm:leading-6"
                placeholder="Ingresa tu correo"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-plaza/90 px-5 w-full py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
              >
                Enviar
              </button>
            </form>
          </div>
        </section>
      )}

      {subscribed && (
        <CaptivePortal />
      )}
    </main>
  );
}

export default App
