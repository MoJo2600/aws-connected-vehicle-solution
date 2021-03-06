/*********************************************************************************************************************
 *  Copyright 2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.                                           *
 *                                                                                                                    *
 *  Licensed under the Amazon Software License (the "License"). You may not use this file except in compliance        *
 *  with the License. A copy of the License is located at                                                             *
 *                                                                                                                    *
 *      http://aws.amazon.com/asl/                                                                                    *
 *                                                                                                                    *
 *  or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES *
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions    *
 *  and limitations under the License.                                                                                *
 *********************************************************************************************************************/

/**
 * @author Solution Builders
 */

'use strict';

let AWS = require('aws-sdk');
let Dtc = require('./dtc.js');

module.exports.respond = function(event, cb) {

    let _dtc = new Dtc();
    let _message = {};

    if (typeof event === 'object') {
        _message = event;
    } else {
        _message = JSON.parse(event);
    }

    if (event.action) {

    } else if (event.timestamp && event.value) {
        // identify message as dtc object to be created from IoT platform
        _dtc.createDtc(event, function(err, data) {
            if (err) {
                return cb(err, null);
            }

            return cb(null, data);
        });
    }

};
