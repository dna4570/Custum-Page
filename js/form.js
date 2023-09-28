/*--フォーム動作スクリプト--*/
'use strict'

$("button").click(function () {

	//入力されたデータを受け取る
	var name = $('[name="name"]').val();
	var gender = $('[name="gender"]:checked').val();
	var tel = $('[name="tel"]').val();
	var mail = $('[name="mail"]').val();
	var message = $('[name="message"]').val();

	var flag = 0; 			//入力エラーのフラグ
	var err = []; 		//エラーメッセージ配列
	var err_message = ''; 	//エラーメッセージ出力

	//必須項目の入力チェック
	if(!name || !gender || !tel || !message){
		err[1] = "・必須項目に未入力があります";
		flag = 1;
	}else{
		//電話番号の入力チェック
		if (!tel.match(/^[0-9]+$/)){
			err[2] = "・電話番号が正しく入力されていません";
			flag = 1;
		}

		//メールアドレスの入力チェック
		if(mail){
			if (!mail.match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
				err[3] = "・メールアドレスが正しく入力されていません";
				flag = 1;
			}
		}
	}

	if(flag == 1){
		//エラーメッセージを連結
		for(i = 1; i < err.length; i++) {
			if(err[i]) err_message = err_message + err[i] + "<br>";
		}
		$('.err').html(err_message).show(); //エラー出力
	}else{
		$('#frm').hide(); //フォームを非表示に
		$('#end').fadeIn(); //送信完了画面を表示
	}
});

