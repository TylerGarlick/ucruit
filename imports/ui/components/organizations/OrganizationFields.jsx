'use strict';

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

export default class OrganizationFields extends Component {

  getOrganization() {
    return {
      name: ReactDOM.findDOMNode(this.refs.name).value.trim(),
      description: ReactDOM.findDOMNode(this.refs.description).value.trim(),
      website: ReactDOM.findDOMNode(this.refs.website).value.trim(),
      address: ReactDOM.findDOMNode(this.refs.address).value.trim(),
      address2: ReactDOM.findDOMNode(this.refs.address2).value.trim(),
      city: ReactDOM.findDOMNode(this.refs.city).value.trim(),
      state: ReactDOM.findDOMNode(this.refs.state).value.trim(),
      zip: ReactDOM.findDOMNode(this.refs.zip).value.trim(),
      email: ReactDOM.findDOMNode(this.refs.email).value.trim(),
      phone: ReactDOM.findDOMNode(this.refs.phone).value.trim()
    }
  }

  render() {
    return (
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" className="u-full-width" ref="name" defaultValue={this.props.organization.name}/>

        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" className="u-full-width" ref="description" defaultValue={this.props.organization.description}/>

        <label htmlFor="website">Website</label>
        <input type="url" id="website" name="website" className="u-full-width" ref="website" defaultValue={this.props.organization.website}/>

        <div className="row">
          <div className="one-half column">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" className="u-full-width" ref="email" defaultValue={this.props.organization.email}/>
          </div>
          <div className="one-half column">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" className="u-full-width" ref="phone" defaultValue={this.props.organization.phone}/>
          </div>
        </div>

        <h4>Primary Location</h4>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" name="address" className="u-full-width" ref="address" defaultValue={this.props.organization.address}/>
        <input type="text" id="address2" name="address2" className="u-full-width" ref="address2" defaultValue={this.props.organization.address2}/>

        <div className="row">
          <div className="six columns">
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" className="u-full-width" ref="city" defaultValue={this.props.organization.city}/>
          </div>
          <div className="two columns">
            <label htmlFor="state">State</label>
            <input type="text" id="state" name="state" className="u-full-width" ref="state" defaultValue={this.props.organization.state}/>
          </div>
          <div className="four columns">
            <label htmlFor="zip">Zip</label>
            <input type="text" id="zip" name="zip" className="u-full-width" ref="zip" defaultValue={this.props.organization.zip}/>
          </div>
        </div>
      </div>
    );
  }
}

OrganizationFields.propTypes = {
  organization: PropTypes.object
};
