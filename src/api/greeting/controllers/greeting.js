'use strict';

/**
 * A set of functions called "actions" for `greeting`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    try{
      const res=await strapi.plugins['email'].services.email.send({ 
        to: 'mohamednasim3108@gmail.com',
        from: 'virtuallab917@gmail.com', //e.g. single sender verification in SendGrid
        replyTo: 'virtuallab917@gmail.com',
        subject: 'The Strapi Email plugin worked successfully',
        text: 'Hello world!',
        html: 'Hello world!',
      })
      console.log(res)
      ctx.send({message:res})
    }
    catch(er){
      console.log(er)
      ctx.send({er})
    }
    
    
  }
}
