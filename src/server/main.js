function doGet(e) {
  var page = e.parameter['page'];
  if (page == 'signUp') return HtmlService.createTemplateFromFile('signUp').evaluate().setTitle('ユーザー新規登録');
  if (page == 'myPage') return HtmlService.createTemplateFromFile('myPage').evaluate().setTitle('マイページ');
  if (page == 'eventDetail') return HtmlService.createTemplateFromFile('eventDetail').evaluate().setTitle('イベント詳細');
  return HtmlService.createTemplateFromFile('login').evaluate().setTitle('ログイン');
}

function getUrl(param) {
  var url = ScriptApp.getService().getUrl();
  if (param) url += param;
  return url;
}
