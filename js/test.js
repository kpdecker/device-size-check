function testComplete() {
  var docEl = document.documentElement;

  window.opener.testOutput.tests.push({
    name: document.title,
    orrientation: window.orrientation,
    screen: {
      width: window.screen.width,
      height: window.screen.height,
      availWidth: window.screen.availWidth,
      availHeight: window.screen.availHeight
    },
    window: {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      outerWidth: window.outerWidth,
      outerHeight: window.outerHeight
    },
    documentElement: {
      clientWidth: docEl.clientWidth,
      clientHeight: docEl.clientHeight,
      offsetWidth: docEl.offsetWidth,
      offsetHeight: docEl.offsetHeight,
      scrollWidth: docEl.scrollWidth,
      scrollHeight: docEl.scrollHeight
    }
  });
  window.opener.runTest();
  window.close();
}
