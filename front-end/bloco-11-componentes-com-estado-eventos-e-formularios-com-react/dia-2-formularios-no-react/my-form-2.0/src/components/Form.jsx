import React, { Component } from 'react';
import brazilianStates from '../data/brazilianStates';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            CPF: '',
            adress: '',
            city: '',
            state: '',
            home: '',
            abstract: '',
            position: '',
            showedAlert: false,
            positionDescription: '',
            submit: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }
    manageValue({ name, value }) {
        if (name === 'name') {
            return value.toUpperCase();
        }
        if (name === 'adress') {
            return value.match(/\w*/);
        }
        return value;
    }
    handleChange({ target }) {
        const { name } = target;
        this.setState({
            [name]: this.manageValue(target)
        });
    }
    handleBlur({ target: { value, name } }) {
        if (value.match(/^\d/)) {
            this.setState({
                [name]: '',
            });
        }
    }
    showAlert(showedAlert) {
        if (!showedAlert) {
            alert('Preencha esse campo com cuidado');
            this.setState({
                showedAlert: true,
            });
        }
    }
    submitForm(event) {
        const {email} = this.state;
        const regexEmail = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9.-]+(\.com$)/;
        event.preventDefault();
        if (regexEmail.test(email)) {
            this.setState({
                submit: true,
            });
        } else {
            alert('Preencher o e-mail em formato válido')
        }
    }
    clearForm() {
        this.setState({
            name: '',
            email: '',
            CPF: '',
            adress: '',
            city: '',
            state: '',
            home: '',
            abstract: '',
            position: '',
            showedAlert: false,
            positionDescription: '',
            submit: false,
        })
    }
    render() {
        const { name,
            email,
            CPF,
            adress,
            city,
            state,
            abstract,
            position,
            showedAlert,
            positionDescription,
            submit } = this.state;
        return (
            <form>
                <fieldset>
                    <legend>Dados Pessoais</legend>
                    <label htmlFor="name">
                        Nome:
                        <input
                            id="name"
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            value={ name }
                            maxLength={40}
                            required
                        />
                    </label>
                    <label htmlFor="email">
                        Email:
                        <input
                            id="email"
                            type="text"
                            name="email"
                            onChange={this.handleChange}
                            value={ email }
                            maxLength={50}
                            required
                        />
                    </label>
                    <label htmlFor="CPF">
                        CPF:
                        <input
                            id="CPF"
                            type="text"
                            name="CPF"
                            onChange={this.handleChange}
                            value={ CPF }
                            maxLength={11}
                            required
                        />
                    </label>
                    <label htmlFor="adress">
                        Endereço:
                        <input
                            id="adress"
                            type="text"
                            name="adress"
                            onChange={this.handleChange}
                            value={ adress }
                            maxLength={200}
                            required
                        />
                    </label>
                    <label htmlFor="city">
                        Cidade:
                        <input
                            id="city"
                            type="text"
                            name="city"
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                            value={ city }
                            maxLength={28}
                            required
                        />
                    </label>
                    <label htmlFor="state">
                        Estado:
                        <select
                            id="state"
                            name="state"
                            onChange={this.handleChange}
                            value={ state }
                            required
                        >
                            {brazilianStates.map((state, index) => (
                                <option key={index}>{state}</option>
                            ))}
                        </select>
                    </label>
                    <label htmlFor="house">
                        Casa
                        <input
                            id="house"
                            type="radio"
                            name="home"
                            onChange={this.handleChange}
                            value="Casa"
                            required
                        />
                    </label>
                    <label htmlFor="apartament">
                        Apartamento
                        <input
                            id="apartament"
                            type="radio"
                            name="home"
                            onChange={this.handleChange}
                            value="Apartamento"
                            required
                        />
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Último emprego</legend>
                    <label htmlFor="abstract">
                        Resumo do currículo
                        <textarea
                            id="abstract"
                            name="abstract"
                            onChange={this.handleChange}
                            value={ abstract }
                            maxLength="1000"
                            required
                        />
                    </label>
                    <label htmlFor="position">
                        Cargo
                        <textarea
                            id="position"
                            name="position"
                            onChange={this.handleChange}
                            onMouseEnter={() =>
                                this.showAlert(showedAlert)}
                            value={ position }
                            maxLength="40"
                            required
                        />
                    </label>
                    <label htmlFor="position-description">
                        Posição:
                        <input
                            id="position-description"
                            type="text"
                            name="positionDescription"
                            onChange={this.handleChange}
                            value={ positionDescription }
                            maxLength="500"
                            required
                        />
                    </label>
                </fieldset>
                <button
                    type='submit'
                    onClick={this.submitForm}>
                        Consolidar
                </button>
                <button
                    onClick={this.clearForm}>
                        Limpar
                </button>
                <div>
                    {submit && Object.values(this.state)}
                </div>
            </form>
        )
    }
}

export default Form;