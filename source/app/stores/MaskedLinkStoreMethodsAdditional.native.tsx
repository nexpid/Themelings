// app/stores/MaskedLinkStoreMethodsAdditional.native.tsx
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
    var4 = 'stores/MaskedLinkStoreMethodsAdditional.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getHostname(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
 3: // try_start_0
            var2 = global;
            var3 = var2.URL;
            var4 = var1;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            var1 = var1.hostname;
 40: // try_end0
            return var1;
 42: // catch_target0
            CatchBlockStart(arg_register=0);
            var1 = '';
            return var1;
        }
    };
    var3['getHostname'] = var4;
    var2 = function getProtocol(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
 3: // try_start_0
            var2 = global;
            var3 = var2.URL;
            var4 = var1;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            var1 = var1.protocol;
 40: // try_end0
            return var1;
 42: // catch_target0
            CatchBlockStart(arg_register=0);
            var1 = '';
            return var1;
        }
    };
    var3['getProtocol'] = var2;
    return var1;
})();