/**
 * Author:Dante Fung
 * Date:2017-4-13 21:05:15
 * Version:1.0.1
 * Memo:依赖jQuery
 * Changelog:
 *     hello world! 2017-4-13 21:06:15 
 */
(function(global,factory){
	
	(global.DownLoader = factory());
	
})(this,function(){
	
	/**
	 * 这里暴露DownLoader的构造器
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 *   公开的API方法和属性将都以$符号作为前缀开头
	 * - internal methods/properties are prefixed with `_`
	 *   内部私有的方法和属性将以_作为前缀开头
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 * 
	 */
	function DownLoader(options){
		
	}
	
	/**
	 * 对象继承
	 */
	function inherits(Child, Parent) {
	    var F = function () {};
	    F.prototype = Parent.prototype;
	    Child.prototype = new F();
	    Child.prototype.constructor = Child;
	}
	
	/**
	 * 创建对象方法
	 */
	function createDownLoader(props) {
	    return new DownLoader(props || {});
	}
	
	/**
	 * POST方式下载资源
	 */
	DownLoader.prototype.DownLoadFile = function (_options) {  
	    var config = $.extend(true, { method: 'post' }, _options);  
	    var $iframe = $('<iframe id="down-file-iframe" />');  
	    var $form = $('<form target="down-file-iframe" method="' + config.method + '" />');  
	    $form.attr('action', config.url);  
	    for (var key in config.data) {  
	        $form.append('<input type="hidden" name="' + key + '" value="' + config.data[key] + '" />');  
	    }  
	    $iframe.append($form);  
	    $(document.body).append($iframe);  
	    $form[0].submit();  
	    $iframe.remove();  
	}

	DownLoader = createDownLoader();
	DownLoader.version = '1.0.0';
	
	return DownLoader;
});
