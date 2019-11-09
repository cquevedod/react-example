import React, {Component} from 'react';

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            date: new Date(),
        }

        this.nameToCapital = this.nameToCapital.bind(this);
        this.showEmail = this.showEmail.bind(this);
        this.changeDate = this.changeDate.bind(this);
    }

    changeDate(event) {
        this.setState({
            date: new Date(),
        });
    }

    showEmail(event) {
        this.setState({
            email: event.target.value
        });
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
                <h1>Form {this.props.namee}</h1>
                <h4>Currently date: {Math.ceil(this.state.date/1000)}</h4>
                <form id="element">
                    <div className="ed-grid m-grid-2">                   
                        <div className="form__item">
                            <label>Full name</label>
                            <input
                                type="text"
                                onChange={(event) => this.nameToCapital(event, 'name')}
                            />
                        </div>
                        <div className="form__item">
                            <label>Email</label>
                            <input 
                                type="email" 
                                onChange={this.showEmail}
                            />
                        </div>
                    </div>
                </form>
                <div>
                    <h2>{`Hola ${this.state.name}`}</h2>
                    <span>{`Tu correo es: ${this.state.email}`}</span>
                </div>
            </div>
        )
    }

    componentDidMount() {
        let element = document.getElementById("element");
        this.dateInterval = setInterval(() => { 
            this.changeDate();
            console.log(new Date())
        }, 1000)
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log(prevState);
    }

    componentWillUnmount() {
        clearInterval(this.dateInterval)
    }          
}

export default Form;