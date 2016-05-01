import React from 'react';
import auth from '../utils/auth';
import ajaxHelpers from '../utils/ajaxHelpers';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';

const AddNewForm = React.createClass ({
  getInitialState: function() {
    return {
      image: '',
      type: '',
      color: ''
    }
  },

  handleAdd: function(e) {
    var callbackAfterSubmit = function(success) {
      if (!sucess) {
        return this.setState({ error: true })
      } else {
        this.setState({successMsg: "Succesfully added new item"});
        const location = this.props.location;
        console.log(location);
        if (location.state && location.state.nextPathname) {
          this.props.history.push(location.state.nextPathname);
        } else {
          this.props.history.push('/')
        }
      }
    }.bind(this);
//I LEFT IT HERE - add logic for ajaxcall
    ajaxHelpers.addNew
  },

  render: function() {
    return (
      <div>
        <div>Add New Form</div>
          <div>
            <button>Add Image</button>
            <br></br>
            <input placeholder='Select Type' name='type' onChange={ e => this.setState({type: e.target.value})}/>
            <br></br>
            <input placeholder='Select Color' name='color' onChange={e => this.setState({color: e.target.value})}/>
            <br></br>
            <button onClick={ () => this.handleAdd() }>Submit</button>
          </div>
      </div>


      )}
  })

export default AddNewForm;
