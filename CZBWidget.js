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


// 为 target 扩展属性或方法
// obj 目前只支持对象，以后可以扩展到属性、函数等
function extend(target, obj) {
	// 应该先判断 target 和 obj 的类型，以及非空判断
	for(p in obj) {
		target[p] = obj[p]
	}
}