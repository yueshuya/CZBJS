// 通过原型继承创建一个新对象
function inherit(p) {
	if (p == null) throw TypeError();
	if (Object.create) 
		return Object.create(p);
	var t = typeof p;
	if (t !== "object" && t !== "function") 
		throw TypeError();
	function f(){}
	f.prototype = p;
	return new f();
}