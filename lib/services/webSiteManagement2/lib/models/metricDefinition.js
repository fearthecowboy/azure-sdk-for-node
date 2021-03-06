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

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the MetricDefinition class.
 * @constructor
 * Class repesenting metadata for the metrics
 * @member {string} [metricDefinitionName] Name of the metric
 * 
 * @member {string} [unit] Unit of the metric
 * 
 * @member {string} [primaryAggregationType] Primary aggregation type
 * 
 * @member {array} [metricAvailabilities] List of time grains supported for
 * the metric together with retention period
 * 
 * @member {string} [displayName] Friendly name shown in the UI
 * 
 */
function MetricDefinition() {
  MetricDefinition['super_'].call(this);
}

util.inherits(MetricDefinition, models['Resource']);

/**
 * Defines the metadata of MetricDefinition
 *
 * @returns {object} metadata of MetricDefinition
 *
 */
MetricDefinition.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'MetricDefinition',
    type: {
      name: 'Composite',
      className: 'MetricDefinition',
      modelProperties: {
        id: {
          required: false,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        name: {
          required: false,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        location: {
          required: true,
          serializedName: 'location',
          type: {
            name: 'String'
          }
        },
        type: {
          required: false,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        tags: {
          required: false,
          serializedName: 'tags',
          type: {
            name: 'Dictionary',
            value: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        },
        metricDefinitionName: {
          required: false,
          serializedName: 'properties.name',
          type: {
            name: 'String'
          }
        },
        unit: {
          required: false,
          serializedName: 'properties.unit',
          type: {
            name: 'String'
          }
        },
        primaryAggregationType: {
          required: false,
          serializedName: 'properties.primaryAggregationType',
          type: {
            name: 'String'
          }
        },
        metricAvailabilities: {
          required: false,
          serializedName: 'properties.metricAvailabilities',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'MetricAvailabililyElementType',
                type: {
                  name: 'Composite',
                  className: 'MetricAvailabilily'
                }
            }
          }
        },
        displayName: {
          required: false,
          serializedName: 'properties.displayName',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = MetricDefinition;
