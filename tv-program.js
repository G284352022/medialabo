let data = {
  "list": {
    "g1": [
      {
        "id": "2022030428673",
        "event_id": "28673",
        "start_time": "2022-03-04T04:35:00+09:00",
        "end_time": "2022-03-04T04:40:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "みんなのうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」",
        "subtitle": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "content": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "act": "",
        "genres": [
          "0409",
          "0700",
          "0504"
        ]
      },
      {
        "id": "2022030427069",
        "event_id": "27069",
        "start_time": "2022-03-04T23:05:00+09:00",
        "end_time": "2022-03-04T23:10:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "パラスポーツ×アニメ「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ",
        "subtitle": "パラスポーツの魅力をアニメで伝える番組。高速滑走に挑む精神力が試されるパラアルペンスキーを描く。キャラ原案：江口寿史／曲：Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ",
        "content": "パラスポーツの魅力をアニメで伝えるプロジェクトの第１３弾。圧倒的なスピードに挑む「パラアルペンスキー」の世界を江口寿史原案の魅力的なキャラクターで描く。平昌パラリンピック金メダリストの村岡桃佳選手への取材から生まれた主人公・桃は、スピードへの恐怖を克服していく。その壁を越えた先にあるものとは…　テーマ曲　♪「Ｏｎ　Ｙｏｕｒ　Ｍａｒｋ」はＡｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂが手掛けた。",
        "act": "【声】松本まりか，【出演】Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ，【監督】西村一彦，【脚本】加納新太，【原案】江口寿史",
        "genres": [
          "0700"
        ]
      }
    ]
  }
};

/////////////////// 課題3-2 はここから書き始めよう
/*
0000 ... ニュース・報道
0100 ... スポーツ
0205 ... 情報・ワイドショー
0300 ... ドラマ
0409 ... 音楽
0502 ... バラエティ
0600 ... 映画
0700 ... アニメ
0800 ... ドキュメンタリー・教養
0903 ... 劇場・公演
1000 ... 趣味・教育
1100 ... 福祉
*/

let i = 0;

//表の位置を検索
let data_posi = document.querySelector('tbody#tv_p');


//td要素を格納するtr要素、iの上限 = 番組数-1
let tr_data = [];
for(i = 0; i <= 1; i++){
  tr_data[i] = document.createElement('tr');

}

//データ項目が入ったtd要素 
let td_data = [];
let j;
for(i = 0; i <= 1; i++){
  td_data[i] = [];
  for(j = 0; j <= 6; j++){
      td_data[i][j] = document.createElement('td');

  }

}

i = 0;
for(let g of data.list.g1){
  //項目の要素の中身を作成
  td_data[i][0].textContent = g.title;
  td_data[i][1].textContent = g.start_time;
  td_data[i][2].textContent = g.end_time;  
  td_data[i][3].textContent = g.service.name;
  td_data[i][4].textContent = g.subtitle;
  td_data[i][5].textContent = g.content;
  td_data[i][6].textContent = g.act;
 
  //上のデータをtrに格納


  for(j = 0; j <= 6; j++){
    tr_data[i].insertAdjacentElement('beforeend', td_data[i][j]);

  }

  //ページ上(html)に追加
  data_posi.insertAdjacentElement('beforeend', tr_data[i]);

  i++;

}



//検索について


let search_posi = document.querySelector('button#print');
search_posi.addEventListener('click', search);



let s, g;
//検索結果の表示
function search() {
  let k1 = document.querySelector('select#s_tv_search');
  let k2 = document.querySelector('select#g_tv_search');

  //入力されたチャンネル、ジャンルを代入 → 検索時のURLで使用
  s = k1.value;
  g = k2.value;

  sendRequest();
  print_result();
}


// 通信を開始する処理


function sendRequest(){
  let url='https://www.nishita-lab.org/web-contents/jsons/nhk/' + s + '-' + g + '-j.json';
  //+で文字列をつなぐ

  // 通信開始
  axios.get(url)
    .then(showResult)   // 通信成功
    .catch(showError)   // 通信失敗
    .then(finish);      // 通信の最後の処理
}

//通信が成功した場合

let redata;

function showResult(resp) {
  //サーバから送られてきたデータを出力

  redata = resp.data;

  //dataが文字列型なら、オブジェクトに変換する
  if (typeof redata === 'string') {
    redata = JSON.parse(redata);
  }

  //結果の確認用
  console.log(redata);
  console.log(s);
  console.log(g);

  //検索結果の処理、表示



}


//通信エラーが発生した場合
function showError(err){
  console.log(err);
}

//通信の最後に実行する処理
function finish(){
  console.log('Ajax 通信が終わりました');
}



//////////////////検索結果の確認/////////////////


function print_result(){
  /*
  テスト用

  let newdata_posi = document.querySelector('p#re');

	let newdata = document.createElement('p');
	newdata.textContent = redata.list.e1;

	newdata_posi.insertAdjacentElement('beforeend', newdata);

*/
////////////////(上のコードを一旦コピー)/////////////////

  i = 0;

  //表の位置を検索
  data_posi = document.querySelector('tbody#tv_p');

  //元の検索結果を削除
  let tr_posi = document.querySelectorAll('tbody#tv_p > tr');

  for(let b_re of tr_posi){
    b_re.remove();
  }
  
  
  
  //td要素を格納するtr要素、iの上限 = 番組数-1
  let newtr_data = [];
  for(i = 0; i <= 1; i++){
    newtr_data[i] = document.createElement('tr');
  
  }
  
  //データ項目が入ったtd要素 
  let newtd_data = [];
  let j;
  for(i = 0; i <= 1; i++){
    newtd_data[i] = [];
    for(j = 0; j <= 6; j++){
        newtd_data[i][j] = document.createElement('td');
  
    }
  
  }
  
  i = 0;

  //if文でe1g1を分ける

  for(let g of redata.list.e1){
    //項目の要素の中身を作成
    newtd_data[i][0].textContent = g.title;
    newtd_data[i][1].textContent = g.start_time;
    newtd_data[i][2].textContent = g.end_time;  
    newtd_data[i][3].textContent = g.service.name;
    newtd_data[i][4].textContent = g.subtitle;
    newtd_data[i][5].textContent = g.content;
    newtd_data[i][6].textContent = g.act;
   
    //上のデータをtrに格納
  
  
    for(j = 0; j <= 6; j++){
      newtr_data[i].insertAdjacentElement('beforeend', newtd_data[i][j]);
  
    }
  
    //ページ上(html)に追加
    data_posi.insertAdjacentElement('beforeend', newtr_data[i]);
  
    i++;
  
  }
  
}

