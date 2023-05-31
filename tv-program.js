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

/*
let search_posi = document.querySelector('button#print');
search_posi.addEventListener('click', search);


//検索結果の表示
function search() {
  let k = document.querySelector('input[name="tv_search"]');
  //ユーザの入力をinに代入
  let in = k.value;
}

*/
