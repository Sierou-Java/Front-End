/**
* Author:Dante Fung
* Date:2017-4-23 04:21:15
* Version:1.0.0
* ChangeLog:Hello world!
* Memo:Miban util is a meaningful js libary.
*/
(function(this,factory){
	
	// 注册对象
	window.Miban = factory();


})(global,function(){

	// 构造器
	function Miban(options){
		
	}
	
	/**
	 * 创建对象方法
	 */
	function createMiban(props) {
	    return new Miban(props || {});
	}

	// 扩展方法
	// 解析URL
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
				// 创建一个链接
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

	// 多终端判断
	Miban.prototype.browser=function(){

		return {
					versions:function(){
								var u = navigator.userAgent,
								app = navigator.appVersion;

								return { trident: u.indexOf('Trident') > -1, //IE内核
										presto: u.indexOf('Presto') > -1, //opera内核
										webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
										gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
										mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
										ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),//ios终端
										android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
										iPhone: u.indexOf('iPhone') > -1 ,//是否为iPhone或者QQHD浏览器
										iPad: u.indexOf('iPad') > -1,//是否iPad
										webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
										weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
										qq: u.match(/\sQQ/i) == " qq" //是否QQ
									   };
							}(),
				  language:(navigator.browserLanguage || navigator.language).toLowerCase()
				};
	}

	// 计算数组极值 - start
	Miban.prototype.smallest = function(array){
		return Math.min.apply(Math, array);
	}

	Miban.prototype.largest= function(array){
		return Math.min.apply(Math, array);
	}
	// -end
	
	// 迭代arguments
	Miban.prototype.iterArgs = function(){
		[].forEach.call(arguments, function(val, key) { console.log(key, val) });
	}



	return createMiban();
});