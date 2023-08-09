import React from 'react'

const Paciente = () => {
    return (
        <div className="mt-5 bg-white shadow-md m-3 px-5 py-10 rounded-lg">
            <p className="font-bold mb-3 text-gray-700 uppercase"> Nombre: {''}
                <span className="font-normal normal-case">Scooby</span>
            </p>

            
            <p className="font-bold mb-3 text-gray-700 uppercase"> Propietario: {''}
                <span className="font-normal normal-case">Benji Mtz</span>
            </p>

            
            <p className="font-bold mb-3 text-gray-700 uppercase"> Email: {''}
                <span className="font-normal normal-case">benjim.flores@outlook.com</span>
            </p>

            
            <p className="font-bold mb-3 text-gray-700 uppercase"> Alta Paciente: {''}
                <span className="font-normal normal-case">04 de Marzo del 2022</span>
            </p>

            
            <p className="font-bold mb-3 text-gray-700 uppercase"> Síntomas: {''}
                <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, id rerum non totam atque nostrum praesentium numquam voluptatem iure, incidunt optio similique eum deserunt, obcaecati suscipit quaerat quidem voluptates! Maiores.</span>
            </p>

            
        </div>
    )
}

export default Paciente
