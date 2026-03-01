import { Button } from "./button"

export const Hero = () => {
  return (
    <section className="-mt-20 relative z-10 max-w-[450px] mx-auto md:-mt-30">
        <h1 className="text-center text-2xl font-Raleway font-bold px-3 lg:text-3xl">Todos tus archivos en un solo lugar seguro, accesibles desde cualquier lugar.</h1>
        <p className="text-center text-sm mt-6 px-4">Fylo almacena todos tus archivos más importantes en un solo lugar seguro. Accede a ellos donde los necesites, compártelos y colabora con amigos, familiares y compañeros de trabajo.</p>

    <div className="text-center mt-6 mb-10">
        <Button text="Empezar" styles="w-[240px]"/>
    </div>
    </section>
  )
}
