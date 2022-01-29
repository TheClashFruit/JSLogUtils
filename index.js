/**
 * A library that makes logging look better!
 * @example
 * const JSLogUtils = require('../index');
 * const logger = new JSLogUtils();
 *
 * logger.setPrefix(JSLogUtils.PREFIX.ERROR, '[ERROR]');
 * logger.setPrefix(JSLogUtils.PREFIX.DEBUG, '[DEBUG]');
 * logger.setPrefix(JSLogUtils.PREFIX.INFO, '[INFO]');
 * logger.setPrefix(JSLogUtils.PREFIX.WARNING, '[WARNING]');
 *
 * logger.error('error');
 * logger.debug('debug');
 * logger.info('info');
 * logger.warning('warning');
 */
class JSLogUtils {
  errorPrefix   = ''; 
  debugPrefix   = ''; 
  infoPrefix    = ''; 
  warningPrefix = ''; 

  /**
   * Set the prefix for the logging.
   * @param {int} [prefixType] Type of the prefix (ex.: JSLogUtils.PREFIX.ERROR)
   * @param {string} [prefix] The prefix
   * @example
   * logger.setPrefix(JSLogUtils.PREFIX.ERROR, '[ERROR]');
   */
  setPrefix(prefixType, prefix) {
    if(prefixType == 0) this.errorPrefix = prefix;
    if(prefixType == 1) this.debugPrefix = prefix;
    if(prefixType == 2) this.infoPrefix = prefix;
    if(prefixType == 3) this.warningPrefix = prefix;
  }
  
  /**
   * Logs an error.
   * @param {string} [message] The message of the log.
   * @example
   * logger.error('error');
   */
  error(msg) {
    console.log('\x1b[31m' + this.errorPrefix,  msg, '\x1b[0m');
  }
  
  /**
   * Logs a debug.
   * @param {string} [message] The message of the log.
   * @example
   * logger.debug('error');
   */
  debug(msg) {
    console.log('\x1b[32m' + this.debugPrefix, msg, '\x1b[0m');
  }

  /**
   * Logs an info.
   * @param {string} [message] The message of the log.
   * @example
   * logger.info('error');
   */
  info(msg) {
    console.log('\x1b[36m' + this.infoPrefix, msg, '\x1b[0m');
  }

  /**
   * Logs a warning.
   * @param {string} [message] The message of the log.
   * @example
   * logger.warning('error');
   */
  warning(msg) {
    console.log('\x1b[33m' + this.warningPrefix, msg, '\x1b[0m');
  }
}


/**
 * Int values for the prefix types.
 */
JSLogUtils.PREFIX = {
  /**
   * 0
   */
  ERROR: 0,
  /**
   * 1
   */
  DEBUG: 1,
  /**
   * 2
   */
  INFO: 2,
  /**
   * 3
   */
  WARNING: 3
}

module.exports = JSLogUtils;