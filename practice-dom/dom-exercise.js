//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラム

//html内のid = ex42を検索
let pra42 = document.querySelector('h2#ex42');

//p42というp要素を生成
let p42 = document.createElement('p');

//p42を<p>写真表と都市の緯度軽度のページです</p>にする
p42.textContent = '写真表と都市の緯度軽度のページです';

pra42.insertAdjacentElement('afterend', p42);


//CSSの編集

p42 = document.querySelector('p');
//p要素を検索

p42.style = 'text-emphasis: sesame green;';
//p42の位置にプロパティ設定を施す



// 練習4-3 写真表作成プログラム

//繰り返し使用する変数を作成

	//img要素を作成
	let img43t = document.createElement('img');
	let img43j = document.createElement('img');
	let img43h = document.createElement('img');

	//p要素を作成. この後、img要素を格納する
	let p43t = document.createElement('p');
	let p43j = document.createElement('p');
	let p43h = document.createElement('p');

	//img要素を追加する位置を検索
	let div43 = document.querySelector('div#phototable');

//以下、taro,jiro,hanako,の3回分繰り返す

//taro
	//img43に<src="taro.png">を設定
	img43t.setAttribute('src', "taro.png");

	//p43内にimg43(taro.png)を追加
	p43t.insertAdjacentElement('beforeend', img43t);


	//div#phototableの位置に、img要素の入ったp要素を追加
	div43.insertAdjacentElement('beforeend', p43t);

//jiro
	//img43に<src="jiro.png">を設定
	img43j.setAttribute('src', "jiro.png");

	//p43内にimg43(jiro.png)を追加
	p43j.insertAdjacentElement('beforeend', img43j);


	//div#phototableの位置に、img要素の入ったp要素を追加
	div43.insertAdjacentElement('beforeend', p43j);

//hanako
	//img43に<src="hanako.png">を設定
	img43h.setAttribute('src', "hanako.png");

	//p43内にimg43(hanako.png)を追加
	p43h.insertAdjacentElement('beforeend', img43h);


	//div#phototableの位置に、img要素の入ったp要素を追加
	div43.insertAdjacentElement('beforeend', p43h);




// 練習4-4 箇条書き削除プログラム

//ul#location要素の中のliを全て検索
let ul44 = document.querySelectorAll('ul#location > li');

//削除
for(let li44 of ul44){
	li44.remove();
}


// 練習4-5 箇条書き追加プログラム


//都市名をその緯度軽度を箇条書きする
for(let ul45 of data){
	//要素の位置はul#location
	let posi45 = document.querySelector('ul#location');

	//li要素を作成、中身を作成
	let li45 = document.createElement('li');
	li45.textContent = ul45.name +" ... 緯度: " + ul45.lat + ",  経度: " + ul45.lng;

	//liを追加
	posi45.insertAdjacentElement('beforeend', li45);
}