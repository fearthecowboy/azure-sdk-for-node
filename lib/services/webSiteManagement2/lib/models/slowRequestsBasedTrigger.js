/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.15.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the SlowRequestsBasedTrigger class.
 * @constructor
 * SlowRequestsBasedTrigger
 * @member {string} [timeTaken] TimeTaken
 * 
 * @member {number} [count] Count
 * 
 * @member {string} [timeInterval] TimeInterval
 * 
 */
function SlowRequestsBasedTrigger() {
}

/**
 * Defines the metadata of SlowRequestsBasedTrigger
 *
 * @returns {object} metadata of SlowRequestsBasedTrigger
 *
 */
SlowRequestsBasedTrigger.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'SlowRequestsBasedTrigger',
    type: {
      name: 'Composite',
      className: 'SlowRequestsBasedTrigger',
      modelProperties: {
        timeTaken: {
          required: false,
          serializedName: 'timeTaken',
          type: {
            name: 'String'
          }
        },
        count: {
          required: false,
          serializedName: 'count',
          type: {
            name: 'Number'
          }
        },
        timeInterval: {
          required: false,
          serializedName: 'timeInterval',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = SlowRequestsBasedTrigger;
