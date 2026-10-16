/*
  Edit mode for Saverna's portfolio.
  Open any page with ?edit at the end of the address, for example:
    resonate.html?edit
  Click any text to change it, then press "Save page".
  The edited page downloads; replace the old file with it.
  Visitors never see edit mode unless ?edit is in the address.
*/
(function () {
  if (!/[?&]edit\b/.test(window.location.search)) return;

  var EDIT_AREAS = 'main, footer';
  var areas = document.querySelectorAll(EDIT_AREAS);
  for (var i = 0; i < areas.length; i++) {
    areas[i].setAttribute('contenteditable', 'true');
    areas[i].setAttribute('spellcheck', 'true');
  }

  // Don't follow links while editing, so you can click into link text.
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('main a, footer a') : null;
    if (a) e.preventDefault();
  }, true);

  // Paste as plain text so styles from other apps don't come along.
  document.addEventListener('paste', function (e) {
    if (!e.clipboardData) return;
    e.preventDefault();
    var text = e.clipboardData.getData('text/plain');
    document.execCommand('insertText', false, text);
  });

  // Toolbar
  var bar = document.createElement('div');
  bar.id = 'edit-bar';
  bar.setAttribute('contenteditable', 'false');
  bar.innerHTML =
    '<span><strong>Edit mode.</strong> Click any text to change it.</span>' +
    '<span class="edit-actions">' +
    '<button type="button" id="edit-undo">Undo</button>' +
    '<button type="button" id="edit-save">Save page</button>' +
    '</span>';
  var style = document.createElement('style');
  style.id = 'edit-style';
  style.textContent =
    '#edit-bar{position:fixed;left:50%;bottom:20px;transform:translateX(-50%);z-index:1000;display:flex;gap:16px;align-items:center;flex-wrap:wrap;justify-content:center;background:#1d1d1f;color:#fff;padding:12px 18px;border-radius:16px;box-shadow:0 10px 30px rgba(0,0,0,.3);font:15px -apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;max-width:calc(100% - 32px)}' +
    '#edit-bar button{font:inherit;font-weight:600;border:0;border-radius:10px;padding:8px 14px;cursor:pointer;margin-left:6px}' +
    '#edit-save{background:#0071e3;color:#fff}#edit-undo{background:#3a3a3c;color:#fff}' +
    '[contenteditable="true"] :hover{outline:1px dashed rgba(0,113,227,.5);outline-offset:2px}' +
    '[contenteditable="true"]:focus{outline:none}';
  document.head.appendChild(style);
  document.body.appendChild(bar);

  document.getElementById('edit-undo').addEventListener('click', function () {
    document.execCommand('undo');
  });

  document.getElementById('edit-save').addEventListener('click', function () {
    var copy = document.documentElement.cloneNode(true);

    // Remove everything edit mode added before saving.
    var remove = copy.querySelectorAll('#edit-bar, #edit-style');
    for (var i = 0; i < remove.length; i++) remove[i].parentNode.removeChild(remove[i]);
    var edited = copy.querySelectorAll('[contenteditable], [spellcheck]');
    for (var j = 0; j < edited.length; j++) {
      edited[j].removeAttribute('contenteditable');
      edited[j].removeAttribute('spellcheck');
    }

    var html = '<!doctype html>\n' + copy.outerHTML + '\n';
    var name = window.location.pathname.split('/').pop() || 'index.html';
    var blob = new Blob([html], { type: 'text/html' });
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = name;
    document.body.appendChild(link);
    link.click();
    setTimeout(function () {
      URL.revokeObjectURL(link.href);
      link.parentNode.removeChild(link);
    }, 1000);
  });
})();
