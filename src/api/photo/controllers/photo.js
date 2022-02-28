'use strict';

/**
 *  photo controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::photo.photo');


/*    comments: async (ctx) => {
	const {id} = ctx.params;
	const photos = await strapi.services.posts.findOne({id});
	console.log(photos);
	return photos.comments;
},
 */