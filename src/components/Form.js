import React, { Component } from 'react'
import List from './List';

export default class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            users: [],
            vardas: '',
            pavarde: '',
            btn: 'Submit',
            updateID: ''
        };
        this.handleEvent = this.handleEvent.bind(this);
        this.handleForm = this.handleForm.bind(this);
    }

    handleEvent(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleForm(e) {
        e.preventDefault();
        if (this.state.btn === "Submit") {
            let data = [
                ...this.state.users,
                {
                    id: Date.now(),
                    vardas: this.state.vardas,
                    pavarde: this.state.pavarde
                }
            ]

            this.setState({
                users: data,
                vardas: '',
                pavarde: ''
            });
        } else if (this.state.btn === "Edit") {
            let index = this.state.users.findIndex((element) => element.id === this.state.updateID);
            let data = [...this.state.users];
            data[index].vardas = this.state.vardas;
            data[index].pavarde = this.state.pavarde;

            this.setState({
                users: data,
                vardas: '',
                pavarde: '',
                btn: "Submit"
            });
        }
    }

    removeListItem = (id) => {
        let data = this.state.users.filter((user) => user.id !== id);
        this.setState({
            users: data
        });
    }

    editListItem = (user) => {
        this.setState({
            vardas: user.vardas,
            pavarde: user.pavarde,
            btn: "Edit",
            updateID: user.id
        })
    }

    render() {
        return (
            <div className="row ms-2">
            <div className="col-3 p-4 border border-2">
                <form onSubmit={this.handleForm}>
                    <label>Vardas:</label>
                    <p><input type="text" name="vardas" value={this.state.vardas} onChange={this.handleEvent} /></p>
                    <label>Pavarde:</label>
                    <p><input type="text" name="pavarde" value={this.state.pavarde} onChange={this.handleEvent} /></p>
                    <input type="submit" value={this.state.btn} />
                </form>
                </div>

                <List
                    users={this.state.users}
                    removeUser={this.removeListItem}
                    editUser={this.editListItem}
                />
            
            </div>
        )
    }
}
