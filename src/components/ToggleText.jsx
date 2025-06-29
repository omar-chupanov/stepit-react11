import { Component } from "react";

export default class ToggleText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        };
    }


    toggleVisibility = () => {
        this.setState({ isVisible: !this.state.isVisible})
    }

    render (){
        return (
            <div>
                <button onClick={this.toggleVisibility}>
                    {this.state.isVisible ? 'Скрыть' : 'Показать'}
                </button>
                {this.state.isVisible && <p>Какой то текст</p>}
            </div>
        )
    }
}