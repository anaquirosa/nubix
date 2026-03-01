
export const MoreInformation = () => {
  return (
    <div className="my-40 md:flex md:items-center md:gap-4 lg:gap-12 max-w-[920px] mx-auto">

        <img className="mb-12 md:w-[380px]" src="/images/illustration-stay-productive.png" alt="illustration stay productive" />
        
        <div>
          <h2 className="font-bold mb-4 font-Raleway lg:text-2xl">Mantente productivo, dondequiera que estés.</h2>
        
        <p className="text-sm mb-4">Nunca dejes que la ubicación sea un problema al acceder a tus archivos. Fylo te cubre para todas tus necesidades de almacenamiento de archivos.</p>
        
        <p className="text-sm mb-4">Comparte archivos y carpetas de forma segura con amigos, familiares y colegas para colaborar en tiempo real. No se requieren adjuntos de correo electrónico.</p>
        
        <a href="#" className="text-Teal-200 flex items-center gap-2 font-Raleway">
            <p>Probar Nubix</p>
            <img src="/images/icon-arrow.svg" alt="icon arrow" />
        
        </a>
        </div>
    </div>
  )
}
