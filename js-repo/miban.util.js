/**
* Author:Dante Fung
* Date:2017-4-23 04:21:15
* Version:1.0.0
* ChangeLog:Hello world!
* Memo:Miban util is a meaningful js libary.
*/
(function(this,factory){
	
	// ע�����
	window.Miban = factory();


})(global,function(){

	// ������
	function Miban(options){
		
	}
	
	/**
	 * �������󷽷�
	 */
	function createMiban(props) {
	    return new Miban(props || {});
	}

	// ��չ����
	// ����URL
	/**
	
	1. var myURL = parseURL('http://abc.com:8080/dir/index.html?id=255&m=hello#top');
	2. myURL.file;     // = 'index.html'
	3. myURL.hash;     // = 'top'
	4. myURL.host;     // = 'abc.com'
	5. myURL.query;    // = '?id=255&m=hello'
	6. myURL.params;   // = Object = { id: 255, m: hello }
	7. myURL.path;     // = '/dir/index.html'
	8. myURL.segments; // = Array = ['dir', 'index.html']
	9. myURL.port;     // = '8080'
	10. myURL.protocol; // = 'http'
	11. myURL.source;   // = 'http://abc.com:8080/dir/index.html?id=255&m=hello#top'

	*/
	Miban.prototype.parseURL = function (url) {
				var a = document.createElement('a');
				// ����һ������
				a.href = url;
				return {
					source : url,
					protocol : a.protocol.replace(':', ''),
					host : a.hostname,
					port : a.port,
					query : a.search,
					params : (function() {
						var ret = {}, seg = a.search.replace(/^\?/, '').split('&'), len = seg.length, i = 0, s;
						for (; i < len; i++) {
							if (!seg[i]) {
								continue;
							}
							s = seg[i].split('=');
							ret[s[0]] = s[1];
						}
						return ret;
					})(),
					file : (a.pathname.match(/\/([^\/?#]+)$/i) || [ , '' ])[1],
					hash : a.hash.replace('#', ''),
					path : a.pathname.replace(/^([^\/])/, '/$1'),
					relative : (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [ , '' ])[1],
					segments : a.pathname.replace(/^\//, '').split('/')
				};
			}

	// ���ն��ж�
	Miban.prototype.browser=function(){

		return {
					versions:function(){
								var u = navigator.userAgent,
								app = navigator.appVersion;

								return { trident: u.indexOf('Trident') > -1, //IE�ں�
										presto: u.indexOf('Presto') > -1, //opera�ں�
										webKit: u.indexOf('AppleWebKit') > -1, //ƻ�����ȸ��ں�
										gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//����ں�
										mobile: !!u.match(/AppleWebKit.*Mobile.*/), //�Ƿ�Ϊ�ƶ��ն�
										ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),//ios�ն�
										android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android�ն�
										iPhone: u.indexOf('iPhone') > -1 ,//�Ƿ�ΪiPhone����QQHD�����
										iPad: u.indexOf('iPad') > -1,//�Ƿ�iPad
										webApp: u.indexOf('Safari') == -1, //�Ƿ�webӦ�ó���û��ͷ����ײ�
										weixin: u.indexOf('MicroMessenger') > -1, //�Ƿ�΢�� ��2015-01-22������
										qq: u.match(/\sQQ/i) == " qq" //�Ƿ�QQ
									   };
							}(),
				  language:(navigator.browserLanguage || navigator.language).toLowerCase()
				};
	}

	// �������鼫ֵ - start
	Miban.prototype.smallest = function(array){
		return Math.min.apply(Math, array);
	}

	Miban.prototype.largest= function(array){
		return Math.min.apply(Math, array);
	}
	// -end
	
	// ����arguments
	Miban.prototype.iterArgs = function(){
		[].forEach.call(arguments, function(val, key) { console.log(key, val) });
	}



	return createMiban();
});