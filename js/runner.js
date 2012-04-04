$(document).ready(function() {
  $('#run').click(function() {
    runTest();
    timeout = setTimeout(function() {
      // Force a reset
      testList = [];
      runTest();
    }, 10000*testList.length);
  });
});

var testWin,
    timeout;
var testOutput = {};

function runTest() {
  if (!testList.length) {
    clearTimeout(timeout);

    // Flatten the structure for browserscope
    var ret = {
      orientation: window.orientation,
      devicePixelRatio: window.devicePixelRatio
    };
    _.each(testOutput, function(test, testName) {
      _.each(test, function(metric, metricName) {
        if (metricName !== 'name') {
          _.each(metric, function(value, valueName) {
            ret[[testName, metricName, valueName].join('_')] = value;
          });
        }
      });
    });
    window._bTestResults = ret;

    // Beacon the results to Browserscope.
    var testKey = 'agt1YS1wcm9maWxlcnINCxIEVGVzdBjrw4wQDA';
    var newScript = document.createElement('script'),
        firstScript = document.getElementsByTagName('script')[0];
    newScript.src = 'http://www.browserscope.org/user/beacon/' + testKey;
    firstScript.parentNode.insertBefore(newScript, firstScript);

    // Output for the user
    $('#content').text(JSON.stringify({
        userAgent: navigator.userAgent,
        test: testOutput
      }, undefined, 2));
    testWin.close();
  } else {
    var test = testList.shift(),
        root = location.href.replace(/\/([^\/]*?\.[^\/]*?)?$/, '');
    testWin = window.open(root + '/' + test, 'device-size-check-test');
  }
}
function testComplete(testInfo) {
  console.log('testComplete: ' + testInfo.name);
  testOutput[testInfo.name] = testInfo;
  runTest();
}
