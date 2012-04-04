$(document).ready(function() {
  $('#run').click(function() {
    runTest();
  });
});

var testOutput = {
  userAgent: navigator.userAgent,
  tests: []
};

function runTest() {
  if (!testList.length) {
    $('#content').text(JSON.stringify(testOutput, undefined, 2));
  } else {
    var test = testList.shift(),
        root = location.href.replace(/\/([^\/]*?\.[^\/]*?)?$/, '');
    window.open(root + '/' + test, 'device-size-check-test');
  }
}
