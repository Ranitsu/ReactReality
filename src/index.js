import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle as rCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { faCheckCircle as sCheckCircle } from '@fortawesome/free-solid-svg-icons'

import './index.css';



class ItemList {
    constructor(content, isFinished) {
        this.content = content;
        this.isFinished = isFinished;
    }
}

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: Array(2),
        };

        this.state.items[0] = new ItemList("Test 1", false);
        this.state.items[1] = new ItemList("Test 2", true);
    }

    pressEnter = (e) => {
        if (e.key === 'Enter') {
            const items = this.state.items.slice(0, this.state.items.length);
            items.push(new ItemList(e.target.value, false));
            this.setState({
                items: items,
            });     
            
            e.target.value = "";
        }
    }

    changeTaskStatus(index) {
        const items = this.state.items.slice();
        items[index].isFinished = !items[index].isFinished;
        this.setState({
            items: items,
        });   
    }

    getIcon(item) {
        if (item.isFinished) {
            return <FontAwesomeIcon icon={sCheckCircle} className="checkCircle finished" />
        } else {
            return <FontAwesomeIcon icon={rCheckCircle} className="checkCircle" />
        }
    }

    render() {
        const items = this.state.items.map((item, index) => {            
            return (
                <div key={item.content} className="list-item">
                    <div className="list-item-content">{item.content}</div>
                    <div className="list-item-icon" onClick={() => this.changeTaskStatus(index)}>
                        {this.getIcon(item)}
                    </div>
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