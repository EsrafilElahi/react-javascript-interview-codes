//Controlled
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={this.state.value}//value managed by state -> khode component
                        onChange={this.handleChange}//ba event khode component manage kone
                    />
                </label>
                <button type='submit'>submit</button>
            </form>
        );
    }
}


// uncontrolled
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.input = React.createRef(); // create ref = value managed with DOM
    }

    handleSubmit(event) {
        const name = this._name // intori ham mishe without create ref
        alert('A name was submitted: ' + this.input.current.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" ref={this.input} />
                    <input type="text" ref={input => this._name = input} />
                    {/* be event onChenge not need -->  khode DOM manage mikone */}
                </label>
                <button type='submit'>submit</button>
            </form>
        );
    }
}

