function doGet(e) {
  var page = e.parameter['page'];
  var fileName = '';
  var title = '';
  if (page == 'signUp') {
    // 遷移先がユーザー新規登録画面の場合
    fileName = 'signUp';
    title = 'ユーザー新規登録';
  } else if (page == 'myPage') {
    // 遷移先がマイページ画面の場合
    fileName = 'myPage';
    title = 'マイページ';
  } else if (page == 'eventDetail') {
    // 遷移先がイベント詳細画面の場合
    fileName = 'eventDetail';
    title = 'イベント詳細';
  } else if (page == '') {
    // 遷移先が指定されていない場合
    fileName = 'login';
    title = 'ログイン';
  }
  return HtmlService.createTemplateFromFile(fileName).evaluate().setTitle(title).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getUrl(param) {
  var url = ScriptApp.getService().getUrl();
  if (param) url += param;
  return url;
}
