'use strict';

import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Organizations } from '../../../api/organizations';

class ListOrganizations extends Component {

  render() {
    return (
      <div className="container organizations">
        <div className="row">
          <div className="six columns">
            <h2 >Organizations</h2>
          </div>
          <div className="six columns">
            <a href="/admin/organization/new" className="button u-pull-right new-organization">New Organization</a>
          </div>
        </div>
        <table className="u-full-width">
          <thead>
          <tr>
            <th>Name</th>
            <th></th>
          </tr>
          </thead>

          <tbody>
          {this.renderOrganizaations()}
          </tbody>
        </table>
      </div>
    );
  }

  renderOrganizaations() {
    return this.props.organizations.map(organization => {
      return (
        <tr key={organization._id}>
          <td>{organization.name}</td>
          <td>
            <a className="u-pull-right" href={`/admin/organization/edit/${organization._id}`}>Edit</a>
          </td>
        </tr>
      );
    });

  }
}

ListOrganizations.propTypes = {
  organizations: PropTypes.array.isRequired
};


export default createContainer(() => {
  return {
    organizations: Organizations.find({}).fetch()
  }
}, ListOrganizations);
