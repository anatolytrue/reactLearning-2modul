import React from "react";
import './Counter.css';
import Controls from "./Controls";
import Value from "./Value";


class Counter extends React.Component{
    static defaultProps = {
        initialValue:0,
    }

    static propTypes = {
        //
    };

    state = {
        value: this.props.initialValue,
    };

    handleIncrement = () => {
        this.setState(prevState => ({
            value: prevState.value + 1,
        }));
    };

    handleDecrement = () => {
        this.setState(prevState => ({
            value: prevState.value - 1,
        }));
    };

    render() {
        const {value} = this.state
        return (
            <div className="Counter">
                <Value
                    value={value}
                />
                {/* <span className="Counter__value">{this.state.value}</span> */}
                <Controls
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                />
                {/* <div className="Counter__controls">
                    <button type="button" onClick={this.handleIncrement}>Increase by 1</button>
                    <button type="button" onClick={this.handleDecrement}>Reduse by 1</button>
                </div> */}
            </div>
        );
    }
}




export default Counter;