/*global CANNON:true */

/**
 * @class CANNON.ObjectPool
 * @brief For pooling objects that can be reused.
 */
CANNON.ObjectPool = function(){
    this.objects = [];
    this.type = Object;
};

CANNON.ObjectPool.prototype.release = function(){
    for(var i in arguments)
	this.objects.push(arguments[i]);
};

CANNON.ObjectPool.prototype.get = function(){
    if(this.objects.length===0)
	return this.constructObject();
    else
	return this.objects.pop();
};

CANNON.ObjectPool.prototype.constructObject = function(){
    throw new Error("constructObject() not implemented in this ObjectPool subclass yet!");
};