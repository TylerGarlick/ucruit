'use strict';

import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';


export const Organizations = new Mongo.Collection('organizations');

if (Meteor.isServer) {
  Meteor.publish('organizations', () => {
    return Organizations.find({});
  });
}

Meteor.methods({

  'organizations.insert'(organization) {
    console.log(organization);
    Organizations.insert(organization);
  },

  'organization.update'(id, organization) {
    Organizations.update(id, { $set: organization });
  }

});

