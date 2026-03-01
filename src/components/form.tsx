import type { FormEvent } from "react";
import { useState } from "react";
import { Button } from "./button"

export const Form = () => {

    const [inputValue, setInputValue] = useState<string>("")
    const [error, setError] = useState<boolean>(false)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
        
        const isValid = regExp.test(inputValue);

        if(isValid) {
            console.log("Correo Enviado");
            setError(false);
        } else {
            setError(true);
        }

        console.log(inputValue)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value)
    }

    return (
        <div className="mb-[300px] absolute top-[-200px] left-0 right-0 mx-auto top-[-200px] text-center py-12 px-12 bg-Navy-850 rounded-[9px] w-[336px] md:w-[480px] xl:w-[720px]">
            <h2 className="font-bold mb-4 text-[20px]">Obtén acceso anticipado hoy</h2>
            <p className="text-sm mb-8">Solo toma un minuto registrarse y nuestro plan inicial gratuito es muy generoso. Si tienes alguna pregunta, nuestro equipo de soporte estará encantado de ayudarte.</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 xl:flex-row" action="">
                <input
                    onChange={handleChange}
                    className="bg-white rounded-3xl placeholder:text-gray-400 text-gray-400 text-center h-12 xl:flex-1"
                    type="email"
                    placeholder="email@example.com" 
                    required
                    value={inputValue}
                />

                {
                    error && (<p className="text-red-400 text-sm mt-[-12px]">Please provide an valid Email</p>)
                }
                
                <Button styles="xl:w-[200px]" text="Comenzar gratis" />
            </form>
        </div>
    )
}
