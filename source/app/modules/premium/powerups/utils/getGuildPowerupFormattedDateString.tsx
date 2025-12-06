// app/modules/premium/powerups/utils/getGuildPowerupFormattedDateString.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var5 = dependencyMap;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var6 = var5[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot0 = var4;
    var4 = 1;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/utils/getGuildPowerupFormattedDateString.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getGuildPowerupFormattedDateString(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arguments[1];
            var1 = undefined;
            if(!(var4 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = {'month': 'numeric', 'day': 'numeric'};
case 2:
            var1 = global;
            var3 = var1.Date;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var6 = arg1;
            var7 = var2;
            var1 = new var7[var3](var6, var5);
            var3 = var1 instanceof Object ? var1 : var2;
            var2 = var3.toLocaleDateString;
            var1 = _closure1_slot0;
            var1 = var1.locale;
            var1 = var2.bind(var3)(var1, var4);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();