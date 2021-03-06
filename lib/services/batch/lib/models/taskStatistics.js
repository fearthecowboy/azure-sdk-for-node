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

var moment = require('moment');

/**
 * @class
 * Initializes a new instance of the TaskStatistics class.
 * @constructor
 * Resource usage statistics for a task.
 * @member {string} url Gets or sets the URL for the statistics.
 * 
 * @member {date} startTime Gets or sets the start time of the time range
 * covered by the statistics.
 * 
 * @member {date} lastUpdateTime Gets or sets the time at which the statistics
 * were last updated. All statistics are limited to the range between
 * startTime and lastUpdateTime.
 * 
 * @member {moment.duration} userCPUTime Gets or sets the total user mode CPU
 * time (summed across all cores and all compute nodes) consumed by the task.
 * 
 * @member {moment.duration} kernelCPUTime Gets or sets the total kernel mode
 * CPU time (summed across all cores and all compute nodes) consumed by the
 * task.
 * 
 * @member {moment.duration} wallClockTime Gets or sets the total wall clock
 * time of the task.
 * 
 * @member {number} readIOps Gets or sets the total number of I/O read
 * operations performed by the task.
 * 
 * @member {number} writeIOps Gets or sets the total number of I/O write
 * operations performed by the task.
 * 
 * @member {number} readIOGiB Gets or sets the total amount of data in GiB of
 * I/O read by the task.
 * 
 * @member {number} writeIOGiB Gets or sets the total amount of data in GiB of
 * I/O written by the task.
 * 
 * @member {moment.duration} waitTime Gets or sets the elapsed time between
 * the creation of the task and the start of task execution.
 * 
 */
function TaskStatistics() {
}

/**
 * Defines the metadata of TaskStatistics
 *
 * @returns {object} metadata of TaskStatistics
 *
 */
TaskStatistics.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'TaskStatistics',
    type: {
      name: 'Composite',
      className: 'TaskStatistics',
      modelProperties: {
        url: {
          required: true,
          serializedName: 'url',
          type: {
            name: 'String'
          }
        },
        startTime: {
          required: true,
          serializedName: 'startTime',
          type: {
            name: 'DateTime'
          }
        },
        lastUpdateTime: {
          required: true,
          serializedName: 'lastUpdateTime',
          type: {
            name: 'DateTime'
          }
        },
        userCPUTime: {
          required: true,
          serializedName: 'userCPUTime',
          type: {
            name: 'TimeSpan'
          }
        },
        kernelCPUTime: {
          required: true,
          serializedName: 'kernelCPUTime',
          type: {
            name: 'TimeSpan'
          }
        },
        wallClockTime: {
          required: true,
          serializedName: 'wallClockTime',
          type: {
            name: 'TimeSpan'
          }
        },
        readIOps: {
          required: true,
          serializedName: 'readIOps',
          type: {
            name: 'Number'
          }
        },
        writeIOps: {
          required: true,
          serializedName: 'writeIOps',
          type: {
            name: 'Number'
          }
        },
        readIOGiB: {
          required: true,
          serializedName: 'readIOGiB',
          type: {
            name: 'Number'
          }
        },
        writeIOGiB: {
          required: true,
          serializedName: 'writeIOGiB',
          type: {
            name: 'Number'
          }
        },
        waitTime: {
          required: true,
          serializedName: 'waitTime',
          type: {
            name: 'TimeSpan'
          }
        }
      }
    }
  };
};

module.exports = TaskStatistics;
