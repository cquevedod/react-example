import React, {Component} from 'react';

class Formulario extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nombre: "",
            correo: ""
        }

        this.nameToCapital = this.nameToCapital.bind(this);
        this.showEmail = this.showEmail.bind(this);
    }

    showEmail(event) {
        this.setState({
            correo: event.target.value
        })
    }

    nameToCapital(event, key) {
        let textToCapital = event.target.value
            .toLowerCase()
            .split(' ')
            .map(char => char.charAt(0).toUpperCase() + char.substr(1))
            .join(' ');

        this.setState({
            [key]: textToCapital // key inside '[]' is the syntax to define dynamic properties
        });
    }

    render() {
        return (
            <div className="ed-grid">
                <h1>Formulario</h1>
                <form action="/hola">
                    <div className="ed-grid m-grid-2">                   
                        <div className="form__item">
                            <label>Nombre completo</label>
                            <input
                                type="text"
                                onChange={(event) => this.nameToCapital(event, 'nombre')}
                            />
                        </div>
                        <div className="form__item">
                            <label>Correo Electrónico</label>
                            <input 
                                type="email" 
                                onChange={this.showEmail}
                            />
                        </div>
                    </div>
                </form>
                <div>
                    <h2>{`Hola ${this.state.nombre}`}</h2>
                    <span>{`Tu correo es: ${this.state.correo}`}</span>
                </div>
            </div>
        )
    }
}

export default Formulario;