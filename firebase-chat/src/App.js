import React from "react"
import "./index.css"
import fire from "./fire"

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            message: ""
        }
        this.buttonHandle = this.buttonHandle.bind(this)
        this.changeHandle = this.changeHandle.bind(this)
    }

    buttonHandle(event) {
        event.preventDefault()
        console.log(this.state.message)

        fire.database().ref('new_messages').push(this.state.message);
    }

    changeHandle(event) {
        const value = event.target.value
        console.log(value)
        this.setState({
            message: value
        })
    }

    render() {
        return (
            <div className="App">
                <div className="center">
                    <form>
                        <input type="text" onChange={this.changeHandle}/>
                        <button className="button" onClick={this.buttonHandle}>Submit</button>
                    </form>
                </div>
            </div>
        );
    }

}

export default App;
