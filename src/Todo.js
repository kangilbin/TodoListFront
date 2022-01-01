import React from 'react';
import { ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton} from "@material-ui/core";
import { DeleteOutline } from '@material-ui/icons';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { item: props.item, readOnly: true};
        this.delete = props.delete;
    }

    // (1) 함수 추가
    deleteEventHandler = () => {
        this.delete(this.state.item);
    } 
    offReadOnlyMode = () => {
        console.log("Event!", this.state.readOnly);
        this.setState({ readOnly: false}, () => {
            console.log("ReadOnly? ", this.state.readOnly);
        });
    }
    enterKeyEventHandler = (e) => {
        if(e.key === 'Enter') {
            this.setState({ readOnly: true});
        }
    }
    editEventHandler = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({ item: thisItem});
    }
    checkboxEventHandler = (e) => {
        const thisItem = this.state.item;
        thisItem.done = !thisItem.done;
        this.setState({ item: thisItem});
    }
    render() {
        const item = this.state.item;
        return (
            <ListItem>
                <Checkbox checked={item.done} onChange={this.checkboxEventHandler} />
                <ListItemText>
                    <InputBase
                        inputProps={{
                            "aria-label":"naked",
                            readOnly: this.state.readOnly,
                        }}
                        onClick={this.offReadOnlyMode}
                        onKeyPress={this.enterKeyEventHandler}
                        onChange={this.editEventHandler}
                        type='text'
                        id={item.id}    // 각 리스트를 구분하려고 id를 연결
                        name={item.id} 
                        value={item.title}
                        multiline={true}
                        fullWidth={true} 
                    />
                </ListItemText>

                <ListItemSecondaryAction>
                    <IconButton 
                        aria-label='Delete Todo'
                        onClick={this.deleteEventHandler}>
                        <DeleteOutline />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}
export default Todo;