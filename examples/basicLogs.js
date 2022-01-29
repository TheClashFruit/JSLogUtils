const JSLogUtils = require('../index');
const logger = new JSLogUtils();

logger.setPrefix(JSLogUtils.PREFIX.ERROR, '[ERROR]');
logger.setPrefix(JSLogUtils.PREFIX.DEBUG, '[DEBUG]');
logger.setPrefix(JSLogUtils.PREFIX.INFO, '[INFO]');
logger.setPrefix(JSLogUtils.PREFIX.WARNING, '[WARNING]');

logger.error('error');
logger.debug('debug');
logger.info('info');
logger.warning('warning');