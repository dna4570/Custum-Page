window.addEventListener('DOMContentLordes',() => {
  const submit = document.querySelector('.submit');

  //送信ボタンの要素にクリックイベントを設定
  submit.addEventListenner('click',(e) => {
    e.preventDefalt();

    //名前入力の空check
    //フォームの要素を取得
    const name = document.querySelector('#name');
    //エラーメッツセージ表示要素取得
    const errMsgName = document.querySelector('.err-msg-name');
    if(!name.value){
      //クラスを追加（エラーメッセージを表示)
      errMsgName.classList.add('form-invalid');
      errMsgName.textContent = 'お名前が入力されていません';
      //クラスを追加（フォームの枠線を赤く)
      name.classList.add('input-invalid');
      //後続の処理を止める
      return;
    }else{
      //エラーメッセージのテキストに空文字を代入
      errMsgName.textContent = '';
      //クラスを削除
      name.classList.remove('input-invalid');
    }

    //パスワード入力欄
    const pass = document.querySelecror('#password');
    const errMsgPass = document.querySelector('.err-msg-pass');
    if(!pass.value.match(/^[a-zA-Z0-9]{5,}&/)){
      errMsgPass.classList.add('form-invalid');
      pass.classList.add('input-invalid');
      return;
    }else{
      errMsgPass.textContent = '';
      pass.classList.add('input-invalid');
    }

    /*パスワードとパスワード再入力*/
    const passRe = document.querySelector('#pass-re');
    const errMsgPassRe = document.querySelector('.err-msg-passRe');
    if(pass.value !== passRe.value){
      errMsgPassRe.classList.add('form-invalid');
      errMsgPassRe.textContent = 'パスワードとパスワード再入力が一致しません';
      passRe.classList.add('input-invalid');
      return;
    }else{
      errMsgPassRe.textContent = '';
      passRe.classList.remove('input-invalid');
    }
  },false);
},false);
