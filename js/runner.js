$(document).ready(function() {
  $('#run').click(function() {
    runTest();
  });
});

var testWin;
var testOutput = {};

function runTest() {
  if (!testList.length) {
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
