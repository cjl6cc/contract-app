import React, {Component} from 'react';
import InputField from './InputField';
import firebase from './firebase.js';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';

export default class Form extends Component {

  constructor() {
    super();
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    firebase.database().ref('items').on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          name: items[item].name,
          companyDetail: items[item].companyDetail,
          contractDetail: items[item].contractDetail
        });
      }
      this.setState({
        items: newState
      })
      console.log(newState)
    });

  }

  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }

  render() {
    return (
      <div>
        <InputField />
          {this.state.items.map((item)=> {
            return (
              <div style={{paddingBottom: 20}}>
              <List style={{backgroundColor: '#dee6f2', width: '50%', position: 'relative', left: 100, top: 20, borderRadius: 20}}>
                <ListItem
                  dense
                  button
                  >
                    <ListItemText primary={`Name: ${item.name}`} />
                </ListItem>
                <ListItem
                  dense
                  button
                  >
                  <ListItemText primary={`Company Name: ${item.companyDetail}`} />
                </ListItem>
                <ListItem
                  dense
                  button
                  >
                  <ListItemText primary={`Contract Detail: ${item.contractDetail}`} />
                  <ListItemSecondaryAction style={{paddingRight: 20}}>
                    <IconButton aria-label="Comments">
                      <Button variant="contained" color="secondary" onClick={()=> this.removeItem(item.id)}>
                        Delete
                      </Button>
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </div>
            )
          })}

      </div>
    )
  }
}
