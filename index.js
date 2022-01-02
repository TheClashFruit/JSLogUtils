class JSLogUtils {
  debug(msg) {
    console.log('\x1b[32m[DEBUG]', msg, '\x1b[0m');
  }

  warning(msg) {
    console.log('\x1b[33m[WARNING]', msg, '\x1b[0m');
  }

  error(msg) {
    console.log('\x1b[31m[ERROR]', msg, '\x1b[0m');
  }

  info(msg) {
    console.log('\x1b[36m[INFO]', msg, '\x1b[0m');
  }
}

module.exports = JSLogUtils;