// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

//表示位置を検索(回数の更新時に使用)
let k_posi = document.querySelector('p > span#kaisu');

//表示位置を検索(予想の表示を更新する際に使用)
let a_posi = document.querySelector('p > span#answer');

//判定結果の表示位置を検索(判定を表示するときに使用)
let r_posi = document.querySelector('p#result');


// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
    let yoso = 4;

    //回数の表示を変更する
        //kaisuの更新
        kaisu = kaisu + 1;

        //表示する要素の内容を変更
        k_posi.textContent = kaisu;
    //回数の更新完了
  
    //予想の表示を更新する
    a_posi.textContent = yoso;


    // 課題3-1: 正解判定する
    // kotae と yoso が一致するかどうか調べて結果を出力
    if(kaisu <= 3){
        if(kotae === yoso){
            
            // 課題3-1における出力先はコンソール

            r_posi.textContent = '正解です．おめでとう!';
            kaisu = 4;
        }
        else if(kotae < yoso){
            if(kaisu == 3)
                r_posi.textContent = 'まちがい．残念でした答えは ' + kotae + ' です．';
            else
                r_posi.textContent = 'まちがい．答えはもっと小さいですよ';
        }
        else{
            if(kaisu == 3)
                r_posi.textContent = 'まちがい．残念でした答えは ' + kotae + ' です．';
            else
                r_posi.textContent = 'まちがい．答えはもっと大きいですよ';
        }

    }
    else{
        r_posi.textContent = '答えは ' + kotae + ' でした．すでにゲームは終わっています';
    }


    
}