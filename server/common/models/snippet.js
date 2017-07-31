'use strict';

module.exports = function(Snippet) {
  Snippet.beforeRemote('create', function(context, user, next) {
    console.dir(context.args.data);
    context.args.data.developerId = context.req.accessToken.userId;
    context.args.data.created = Date.now();
    next();
  });
};
