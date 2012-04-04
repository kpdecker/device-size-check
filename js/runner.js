$(document).ready(function() {
  $('#run').click(function() {
    runTest();
  });
});

var testWin;
var testOutput = {
  userAgent: navigator.userAgent,
  tests: []
};

function runTest() {
  if (!testList.length) {
    $('#content').text(JSON.stringify(testOutput, undefined, 2));
    testWin.close();
  } else {
    var test = testList.shift(),
        root = location.href.replace(/\/([^\/]*?\.[^\/]*?)?$/, '');
    testWin = window.open(root + '/' + test, 'device-size-check-test');
  }
}
