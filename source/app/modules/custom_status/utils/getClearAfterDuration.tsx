// app/modules/custom_status/utils/getClearAfterDuration.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.ClearAfterValues;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/custom_status/utils/getClearAfterDuration.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getClearAfterDuration(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = _closure1_slot2;
            var3 = var3.TODAY;
            if(!(var1 !== var3)) { _fun0001_ip = 67; continue _fun0001 }
 20:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 1;
            var2 = var4[var2];
            var5 = undefined;
            var4 = var3.bind(var5)(var2);
            var3 = 'number';
            var2 = typeof var1;
            var3 = var3 === var2;
            var2 = 'Invalid custom status clear timeout';
            var2 = var4.bind(var5)(var3, var2);
            return var1;
 67:
            var1 = global;
            var2 = var1.Date;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var10 = var3;
            var2 = new var10[var2](var9);
            var3 = var2 instanceof Object ? var2 : var3;
            var6 = var1.Date;
            var1 = var3.getFullYear;
            var9 = var1.bind(var3)();
            var1 = var3.getMonth;
            var8 = var1.bind(var3)();
            var1 = var3.getDate;
            var2 = var1.bind(var3)();
            var1 = 1;
            var7 = var2 + var1;
            var2 = var6.prototype;
            var2 = Object.create(var2, {constructor: {value: var6}});
            var10 = var2;
            var1 = new var10[var6](var9, var8, var7, var6);
            var2 = var1 instanceof Object ? var1 : var2;
            var1 = var2.getTime;
            var2 = var1.bind(var2)();
            var1 = var3.getTime;
            var1 = var1.bind(var3)();
            var1 = var2 - var1;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();