// app/polyfills.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = require;
    var4 = dependencyMap;
    var1 = 0;
    var5 = var4[var1];
    var1 = undefined;
    var5 = var3.bind(var1)(var5);
    var5 = global;
    var6 = var5.String;
    var6 = var6.prototype;
    var6 = var6.toLocaleLowerCase;
    var _closure1_slot0 = var6;
    var5 = var5.String;
    var5 = var5.prototype;
    var2 = function toLocaleLowerCase() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = this;
            var3 = var4.length;
            var1 = '';
            var2 = 0;
            if(!(var2 !== var3)) { _fun0001_ip = 35; continue _fun0001 }
 18:
            var3 = _closure1_slot0;
            var2 = var3.call;
            var1 = var2.bind(var3)(var4);
 35:
            return var1;
        }
    };
    var5['toLocaleLowerCase'] = var2;
    var2 = 1;
    var2 = var4[var2];
    var4 = var3.bind(var1)(var2);
    var3 = var4.fileFinishedImporting;
    var2 = 'polyfills.android.tsx';
    var2 = var3.bind(var4)(var2);
    return var1;
})();