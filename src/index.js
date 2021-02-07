import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle as rCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { faCheckCircle as sCheckCircle } from '@fortawesome/free-solid-svg-icons'

import './index.css';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: Array(2),
        };

        this.state.items[0] = "Test 1";
        this.state.items[1] = "Test 2";
    }

    pressEnter = (e) => {
        if (e.key === 'Enter') {
            const items = this.state.items.slice(0, this.state.items.length);
            items.push(e.target.value);
            this.setState({
                items: items,
            });     
            
            e.target.value = "";
        }
    }

    render() {   
        const ele = <FontAwesomeIcon icon={rCheckCircle}/>
        const element = <FontAwesomeIcon icon={sCheckCircle} className="checkCircle" />
        const items = this.state.items.map((item, index) => {
            return (
                <div className="list-item">
                    {item}
                    {ele}
                    {element}
                </div>
            );
        });

        const input = (
            <input type="text" name="newItem" className="item-input" onKeyDown={this.pressEnter}></input>
        );

        return (
            <div className="todolist">
                {items}
                {input}
            </div>
        );
    }
}


ReactDOM.render(
    <TodoList/>,
    document.getElementById('root')
)