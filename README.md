View-pagination
===============
  a simple pagination for view

## Use it
  this is used for express


1. app.js

    var pagination = require('view-pagination');

    app.locals({
      paginate: pagination.paginate
    });

    app.get('/users', function(res, req){
      var pageOpts = {
        currentPage: req.query.page || 1,
        perPage: 20,
        innerWindow: 2
      };
      Model.findAndCountAll({where:{}}).success(function(users){
        res.render('users/index', { users: users, pageOpts: pageOpts });
      });
    });

2. view/users/index.ejs

      <%- paginate(users.count, pageOpts) %>


tips, 'pageOpts' has options:

      {
        currentPage: 1,
        perPage: 10,
        prevTag: '&lt; Prev',
        nextTag: 'Next &gt;',
        firstTag: '&laquo;',
        lastTag: '&raquo;',
        pageTag: 'page',
        showDot: true,
        dot: '...',
        innerWindow: 2
      }



