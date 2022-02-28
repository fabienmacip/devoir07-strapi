'use strict';

/**
 * photo router.
 */
/* 
{
  "routes": [
    {
    "method": "GET",
    "path":"/photos/:id/comments", */
    // "path": "http://localhost:1337/api/photos/:id/?populate=comments"
    /* "handler":"photos.comments"
    }
  ]
} */



const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::photo.photo');



