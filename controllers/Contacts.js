'use strict';

var utils = require('../utils/writer.js');
var Contacts = require('../service/ContactsService');

module.exports.cresteContact = function cresteContact (req, res, next, body, authorization) {
  Contacts.cresteContact(body, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteContactById = function deleteContactById (req, res, next, _id, authorization) {
  Contacts.deleteContactById(_id, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllContact = function getAllContact (req, res, next, authorization) {
  Contacts.getAllContact(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getContactById = function getContactById (req, res, next, _id, authorization) {
  Contacts.getContactById(_id, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
