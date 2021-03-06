/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the VaultSecretGroup class.
 * @constructor
 * Describes a set of certificates which are all in the same Key Vault.
 * @member {object} [sourceVault] Gets or sets the Relative URL of the Key
 * Vault containing all of the certificates in VaultCertificates.
 * 
 * @member {string} [sourceVault.id] Resource Id
 * 
 * @member {array} [vaultCertificates] Gets or sets the list of key vault
 * references in SourceVault which contain certificates
 * 
 */
function VaultSecretGroup() {
}

/**
 * Defines the metadata of VaultSecretGroup
 *
 * @returns {object} metadata of VaultSecretGroup
 *
 */
VaultSecretGroup.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'VaultSecretGroup',
    type: {
      name: 'Composite',
      className: 'VaultSecretGroup',
      modelProperties: {
        sourceVault: {
          required: false,
          serializedName: 'sourceVault',
          type: {
            name: 'Composite',
            className: 'SubResource'
          }
        },
        vaultCertificates: {
          required: false,
          serializedName: 'vaultCertificates',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'VaultCertificateElementType',
                type: {
                  name: 'Composite',
                  className: 'VaultCertificate'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = VaultSecretGroup;
