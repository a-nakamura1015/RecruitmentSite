function doGet(e) {
  var page = e.parameter['page'];
  if (page == 'signUp') return HtmlService.createTemplateFromFile('signUp').evaluate().setTitle('ユーザー新規登録');
  return HtmlService.createTemplateFromFile('login').evaluate().setTitle('ログイン');
}

function getUrl(param) {
  var url = ScriptApp.getService().getUrl();
  if (param) url += param;
  return url;
}
