'use strict';

import React, { Component, PropTypes } from 'react';
import OrganizationFields from './OrganizationFields.jsx';
import { Organizations } from '../../../api/organizations';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router'
import { createContainer } from 'meteor/react-meteor-data';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class EditOrganization extends TrackerReact(Component) {

  constructor(props) {
    super(props);

    this.state = {
      subscription: {
        organization: Meteor.subscribe('organization', this.props.params.id)
      }
    }
  }

  componentWillUnmount() {
    this.state.subscription.organization.stop();
  }

  get organization() {
    return Organizations.findOne(this.props.params.id);
  }

  handleSubmit(event) {
    event.preventDefault();
    const organization = this.refs.organizationFields.getOrganization();
    Organizations.update(this.props.params.id, { $set: organization });
    browserHistory.push('/admin/organizations');
  }

  render() {
    return (
      <div className="container">
        <h2>Update Organization</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <OrganizationFields organization={this.organization} ref="organizationFields"/>
          <a className="button u-pull-left" href="/admin/organizations">Cancel</a>
          <button className="button-primary u-pull-right" type="submit">Update</button>
        </form>
      </div>
    );
  }
}

// EditOrganization.propTypes = {
//   organization: PropTypes.object.isRequired
// };
//
//
//
// export default createContainer(({ params }) => {
//
//   return {
//     organization: Organizations.findOne({ _id: params.id })
//   }
// }, EditOrganization);

