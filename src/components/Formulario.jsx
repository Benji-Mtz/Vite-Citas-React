import { useState } from 'react';

const Formulario = () => {

    const [nombre, setNombre] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Formulario enviado')
    }
    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {' '}
                <span className="text-indigo-600 font-bold">Adminstralos</span>
            </p>

            <form 
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <div className="mb-5">
                    <label 
                        htmlFor="nombre"
                        className="block text-gray-700 uppercase font-bold "
                    >
                        Nombre de la mascota: {nombre}
                    </label>

                    <input 
                        type="text"
                        placeholder="Nombre de la mascota" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                        name="nombre"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label 
                        htmlFor="propietario"
                        className="block text-gray-700 uppercase font-bold "
                    >
                        Nombre del propietario
                    </label>

                    <input 
                        type="text"
                        placeholder="Nombre del propietario" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                        name="propietario"
                        id="propietario"
                    />
                </div>
                <div className="mb-5">
                    <label 
                        htmlFor="email"
                        className="block text-gray-700 uppercase font-bold "
                    >
                        Email
                    </label>

                    <input 
                        type="email"
                        placeholder="Email contacto" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                        name="email"
                        id="email"
                    />
                </div>
                <div className="mb-5">
                    <label 
                        htmlFor="alta"
                        className="block text-gray-700 uppercase font-bold "
                    >
                        Alta
                    </label>

                    <input 
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                        name="alta"
                        id="alta"
                    />
                </div>
                <div className="mb-5">
                    <label 
                        htmlFor="sintomas"
                        className="block text-gray-700 uppercase font-bold "
                    >
                        Sintomas
                    </label>

                    <textarea 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg"
                        name="sintomas"
                        id="sintomas"
                        placeholder="Describe los sintomas"
                    />
                </div>
                <input 
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-lg hover:bg-indigo-700 cursor-pointer transition-all"
                    value="Agregar paciente"
                />
            </form>
        </div>
    )
}

export default Formulario
