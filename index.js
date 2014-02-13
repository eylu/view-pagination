var qs = require('querystring');
var ex = require('lodash');

module.exports.paginate = function(count, opts) {
  var setting = {
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
  };
  var opts = ex.extend({}, setting, opts);
  opts.currentPage = opts.currentPage < 1 ? 1 : parseInt(opts.currentPage);
  opts.perPage = opts.perPage < 1 ? 1 : parseInt(opts.perPage);
  opts.innerWindow = opts.innerWindow < 1 ? 1 : parseInt(opts.innerWindow);
  var totalPage = parseInt(Math.ceil(count / opts.perPage));
  var html = [];
  var formatHref = function(num){
    var param = {};
    param[opts.pageTag] = num;
    return '?'+ qs.encode(param);
  }

  var itemHelper = function(num, tagName ){
    var show_html = '';
    var href = formatHref(num);
    var tag = opts[tagName] || num;

    if(opts.currentPage==num){
      if(tagName){
        show_html = '<span>'+ tag +'</span>';
      }else{
        show_html = '<span class="active">'+ tag +'</span>';
      }
    }else{
      show_html = '<a href="'+ href +'">'+ tag +'</a>';
    }

    return show_html;
  }

  html.push(itemHelper(1,'firstTag'));  //首页
  html.push(itemHelper(Math.max(opts.currentPage-1,1),'prevTag'));  //上一页
  if(opts.currentPage - opts.innerWindow > 1 && opts.showDot){
    html.push('<span>'+ opts.dot +'</span>');
  }
  var prevPages = Math.max(opts.currentPage - opts.innerWindow, 1);
  var nextPages = Math.min(opts.currentPage + opts.innerWindow, totalPage);
  for(var i = prevPages; i <= nextPages; i++){
      html.push(itemHelper(i,''));
  }
  if(opts.currentPage + opts.innerWindow < totalPage && opts.showDot){
    html.push('<span>'+ opts.dot +'</span>');
  }
  html.push(itemHelper(Math.min(opts.currentPage+1,totalPage),'nextTag'));  //下一页
  html.push(itemHelper(totalPage,'lastTag'));  //末页


  return '<div class="pagination">'+ html.join('\n') +'</div>';
}

function parseAdditionalArgs(args){
  return args=='' ? args : '&' + qs.encode(args)
}
