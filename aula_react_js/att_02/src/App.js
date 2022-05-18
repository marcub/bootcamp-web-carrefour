import React from "react";

const buttonA = <button>Histórico de Clientes</button>

const buttonB = <button>Cadastrar Cliente</button>

const hasCustomer = false

const listCustomer = [
    {
        id: 1,
        name: "Marcus",
        skills: ['react','node']
    },
    {
        id: 2,
        name: "Carlos",
        skills: ['js', 'ruby']
    },
    {
        id: 3,
        name: "Irineu",
        skills: ['php','js']
    },
    {
        id: 4,
        name: "Marta",
        skills: ['mysql','python']
    }
]



const App = () => {

    const handleClick = (e, id) => {
        console.log('deletar cliente')
        alert(`ID do cliente: ${id}`)
    }

    //arrow function to print costumers names
    const renderCustomers = (customer, index) => {
        return (
            <div  key={`customer-${customer.id}`}>
                <li>{customer.name} <button onClick={(e) => handleClick (e, customer.id)}>Deletar Cliente</button></li>
                {customer.skills.map(renderSkills)}
            </div> 
        )
    }

    const renderSkills = (skill, index) => {
        return (
            <div style={{paddingLeft: '30px'}} key={`skill-${index}`}> 
                <li>{skill}</li>
            </div>
        )
    }

    const renderShowHistory = (
        <div>
            Clique abaixo para visualizar o histórico do cliente!
            <br />
            {buttonA}
        </div>
    )

    const renderAddCustomer = (
        <div>
            Clique abaixo para cadastrar cliente:
            <br />
            {buttonB}
        </div>
    )

    const showCustomer = () => {

        if (!hasCustomer) return null
        
        return (
            <div>
                <h1>Nome do Cliente: Marcus Cezar</h1>
            </div>
        )
    }

    const name = 'Dio'

    const handleChange = (e) => {
        const { value } = e.target
        console.log(value)
    }

    const showEvent = (e) => {
        console.log('evento')
        console.log(e)
        alert(name)
    }

    const buttonC = <button onClick={showEvent}>Mostrar Evento</button>

    return (
        <div>
            <p>WebPack + React Lesson </p>
            <p>Bem vindo!</p>
            <br />
            {hasCustomer ? renderShowHistory : renderAddCustomer}
            <div>
                {showCustomer()}
            </div>
            <div>
                <ul>
                    {listCustomer.map(renderCustomers)} 
                </ul>
            </div>
            <input onChange={handleChange} />
            {buttonC}
        </div>
    );
};
export default App;
