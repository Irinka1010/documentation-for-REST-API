'use strict';


/**
 * Create a new contact
 *
 * body Contact 
 * authorization String The token issued to the current user.
 * returns List
 **/
exports.cresteContact = function(body,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "phone" : "(501) 472-5218",
  "name" : "Allen Raymond",
  "id" : "id",
  "favorite" : true,
  "email" : "videfosota@rungel.net"
}, {
  "phone" : "(501) 472-5218",
  "name" : "Allen Raymond",
  "id" : "id",
  "favorite" : true,
  "email" : "videfosota@rungel.net"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete contact by id
 *
 * _id String _id contact
 * authorization String The token issued to the current user.
 * no response value expected for this operation
 **/
exports.deleteContactById = function(_id,authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get all user contacts
 *
 * authorization String The token issued to the current user.
 * returns List
 **/
exports.getAllContact = function(authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ [ {
  "phone" : "(501) 472-5218",
  "name" : "Allen Raymond",
  "id" : "id",
  "favorite" : true,
  "email" : "videfosota@rungel.net"
}, {
  "phone" : "(501) 472-5218",
  "name" : "Allen Raymond",
  "id" : "id",
  "favorite" : true,
  "email" : "videfosota@rungel.net"
} ], [ {
  "phone" : "(501) 472-5218",
  "name" : "Allen Raymond",
  "id" : "id",
  "favorite" : true,
  "email" : "videfosota@rungel.net"
}, {
  "phone" : "(501) 472-5218",
  "name" : "Allen Raymond",
  "id" : "id",
  "favorite" : true,
  "email" : "videfosota@rungel.net"
} ] ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get contact by id
 *
 * _id String _id contact
 * authorization String The token issued to the current user.
 * returns List
 **/
exports.getContactById = function(_id,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "phone" : "(501) 472-5218",
  "name" : "Allen Raymond",
  "id" : "id",
  "favorite" : true,
  "email" : "videfosota@rungel.net"
}, {
  "phone" : "(501) 472-5218",
  "name" : "Allen Raymond",
  "id" : "id",
  "favorite" : true,
  "email" : "videfosota@rungel.net"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

