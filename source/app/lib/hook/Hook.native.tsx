// app/lib/hook/Hook.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = native7;
    var1 = 0;
    var5 = var4[var1];
    var4 = native2;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/hook/Hook.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function isHookModuleTooOld() {
        var1 = true;
        return var1;
    };
    var3['isHookModuleTooOld'] = var4;
    var4 = function attachToProcess() {
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.resolve;
        var1 = var1.bind(var2)();
        return var1;
    };
    var3['attachToProcess'] = var4;
    var2 = function cancelAttachToProcess() {
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.resolve;
        var1 = var1.bind(var2)();
        return var1;
    };
    var3['cancelAttachToProcess'] = var2;
    return var1;
})();