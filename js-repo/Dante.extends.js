(function() {
	// String
	String.prototype.format = function(args) {
		var result = this;
        if (arguments.length > 0) {    
            if (arguments.length == 1 && typeof (args) == "object") {
                for (var key in args) {
                    if(args[key]!=undefined){
                        var reg = new RegExp("({" + key + "})", "g");
                        result = result.replace(reg, args[key]);
                    }
                }
            }
            else {
                for (var i = 0; i < arguments.length; i++) {
                    if (arguments[i] != undefined) {
                        var reg = new RegExp("({[" + i + "]})", "g");
                        result = result.replace(reg, arguments[i]);
                    }
                }
            }
        }
       	result = result.replace(/{\w+}/g, '');
        return result;
	}
	String.prototype.leftPad = function(size, ch) {
		var result = String(this);
        if(!ch) {
            ch = " ";
        }
        while (result.length < size) {
            result = ch + result;
        }
        return result;
	}
	String.prototype.rightPad = function(size, ch) {
		var result = String(this);
        if(!ch) {
            ch = " ";
        }
        while (result.length < size) {
            result = result + ch;
        }
        return result;
	}
	
	// Array
	Array.prototype.indexOf = function(val) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] == val) return i;
        }
        return -1;
    };
    Array.prototype.remove = function(val) {
        var index = this.indexOf(val);
        if (index > -1) {
            this.splice(index, 1);
        }
    };
	
	// Function
	Function.prototype.createDelegate = function(scope, args) {
		var method = this;
		return function() {
			return method.apply(scope || window, args || arguments);
		};
	}
	Function.prototype.getName = function() {
		return this.name || this.toString().match(/function\s*([^(]*)\(/)[1]
	}
	// Date
	Date.prototype.format = function(format) {
		if(!format) {
			format = 'yyyy/MM/dd hh:mm:ss'
		}
		var o = {
			"M+" : this.getMonth() + 1, // month
			"d+" : this.getDate(), // day
			"h+" : this.getHours(), // hour
			"m+" : this.getMinutes(), // minute
			"s+" : this.getSeconds(), // second
			"q+" : Math.floor((this.getMonth() + 3) / 3), // quarter
			"S" : this.getMilliseconds()
		// millisecond
		}

		if (/(y+)/.test(format)) {
			format = format.replace(RegExp.$1, (this.getFullYear() + "")
					.substr(4 - RegExp.$1.length));
		}

		for ( var k in o) {
			if (new RegExp("(" + k + ")").test(format)) {
				format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k]
						: ("00" + o[k]).substr(("" + o[k]).length));
			}
		}
		return format;
	}
})();