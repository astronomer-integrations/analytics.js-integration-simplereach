/**
 * Module dependencies.
 */

var defaults = require('defaults');
var integration = require('analytics.js-integration');

/**
 * Expose `Simplereach` integration.
 */

var SimpleReach = module.exports = integration('SimpleReach')
  .global('__reach_config')
  .global('SPR')
  .option('pid', '')
  .tag('<script src="//d8rk54i4mohrb.cloudfront.net/js/reach.js">');

/**
 * Initialize.
 * http://www.simplereach.com/docs/#standardImplementation
 * Some adjustments made to standard implementation
 *
 * @api public
 */

SimpleReach.prototype.initialize = function() {
  window.__reach_config = window.__reach_config || {};
  defaults(window.__reach_config, {
    pid: this.options.pid,
    reach_tracking: false
  });
  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

SimpleReach.prototype.loaded = function() {
  return !!window.SPR;
};

/**
 * Page.
 *
 * http://www.simplereach.com/docs/ajax/
 *
 * @api public
 */

SimpleReach.prototype.page = function() {
  window.SPR.collect(window.__reach_config);
};