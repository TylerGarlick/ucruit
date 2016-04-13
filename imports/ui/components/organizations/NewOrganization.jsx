'use strict';

import React, { Component, PropTypes } from 'react';
import OrganizationFields from './OrganizationFields.jsx';
import { Organizations } from '../../../api/organizations';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router'

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = { organization: {} };
  }

  handleSubmit(event) {
    event.preventDefault();
    const organization = this.refs.organizationFields.getOrganization();
    console.log(organization);
    Meteor.call('organizations.insert', organization);

    browserHistory.push('/admin/organizations');
  }

  render() {
    return (
      <div className="container">
        <h2>New Organization</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <OrganizationFields organization={this.state.organization} ref="organizationFields"/>
          <a className="button u-pull-left" href="/admin/organizations">Cancel</a>
          <button className="button-primary u-pull-right" type="submit">Create</button>
        </form>
      </div>
    );
  }
}
