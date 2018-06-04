import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import firebase from './firebase.js';

export default class InputField extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      companyDetail: '',
      contractDetail: '',

    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      name: this.state.name,
      companyDetail: this.state.companyDetail,
      contractDetail: this.state.contractDetail
    }
    itemsRef.push(item);
    this.setState({
      name: '',
      companyDetail: '',
      contractDetail: ''
    })
    console.log(this.state);
  }


  render() {

    return (
      <div style={{paddingLeft: 20}}>
          <h3>Name:</h3>
          <Input
          placeholder="Name"
          onChange={(e) => this.handleChange(e)}
          name="name"
          value={this.state.name}
          inputProps={{
            'aria-label': 'Description',
          }}
        />

        <h3>Company:</h3>
        <Input
        placeholder="Company Detail"
        name="companyDetail"
        value={this.state.companyDetail}
        onChange={(e) => this.handleChange(e)}
        inputProps={{
          'aria-label': 'Description',
        }}
      />

      <h3>Contract:</h3>
      <Input
      placeholder="Contract Detail"
      name="contractDetail"
      value={this.state.contractDetail}
      onChange={(e) => this.handleChange(e)}
      inputProps={{
        'aria-label': 'Description',
      }}
    />
    <div>

    </div>
    <div style={{paddingTop:10}}>
      <Button variant="raised" color="primary" onClick={(e)=> this.handleSubmit(e)}>
          Submit
        </Button>
      </div>
      </div>
    )
  }
}
