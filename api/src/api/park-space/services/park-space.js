'use strict';

/**
 * park-space service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::park-space.park-space');
