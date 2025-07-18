// app/modules/go_live/utils/windowSourceMatches.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = native7;
    var1 = 0;
    var4 = var2[var1];
    var2 = native2;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = 'modules/go_live/utils/windowSourceMatches.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function windowSourceMatches(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var6 = arg2;
            var1 = null;
            var1 = var1 != var6;
            if(!var1) { _fun0001_ip = 50; continue _fun0001 }
 15:
            var3 = var4.startsWith;
            var2 = global;
            var2 = var2.HermesInternal;
            var5 = var2.concat;
            var2 = 'window:';
            var2 = var5.bind(var2)(var6);
            var1 = var3.bind(var4)(var2);
 50:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();