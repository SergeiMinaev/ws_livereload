const ws = new WebSocket('ws://localhost:8100');
ws.onmessage = function (event) {
  const d = JSON.parse(event.data);
  if (d.reload_wanted) {
    if (d.reload_wanted.endsWith('.css')) {
      for (const link of document.getElementsByTagName('link')) {
        if (link.href.split('?')[0].endsWith('.css')) {
          link.href = link.href.split('?')[0] + '?' + Math.random();
        }
      }
    } else if (d.reload_wanted.endsWith('.js')
        || d.reload_wanted.endsWith('.html')) {
      location.reload();
    }
  }
}
