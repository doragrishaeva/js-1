//Write a polyfill for a .bind() function
Function.prototype.myBind = function (context) {
    var func = this;
    return function(arguments) {
        return func.call(context, arguments);
    }
}