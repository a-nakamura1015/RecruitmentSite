function doGet(e) {
  var page = e.parameter['page'];
  if (!page) {
    return HtmlService.createTemplateFromFile('login').evaluate().setTitle(getTitle(page)).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }
  return HtmlService.createTemplateFromFile(page).evaluate().setTitle(getTitle(page)).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getUrl(param) {
  var url = ScriptApp.getService().getUrl();
  if (param) url += param;
  return url;
}

function getTitle(fileName) {
  var title = '';
  var titleNames = {
    signUp: 'ユーザー新規登録',
    myPage: 'マイページ',
    eventDetail: 'イベント詳細'
  };
  if (!fileName) {
    title = 'ログイン';
  } else {
    title = titleNames[fileName];
  }
  return title;
}