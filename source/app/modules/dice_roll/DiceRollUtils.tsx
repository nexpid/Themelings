// app/modules/dice_roll/DiceRollUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = function sumResults(arg1) {
        var4 = arg1;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            var2 = arg1;
            var1 = arg2;
            var1 = var2 + var1;
            return var1;
        };
        var1 = 0;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot2 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/dice_roll/DiceRollUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getBarText(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg2;
            var1 = arg1;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = null;
            var2 = var1 == var8;
            var1 = '';
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot0;
            var9 = _closure1_slot1;
            var2 = 0;
            var4 = var9[var2];
            var7 = undefined;
            var4 = var3.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var9[var2];
            var2 = var3.bind(var7)(var2);
            var2 = var2.t;
            var3 = var2.xU4pF1;
            var2 = {};
            var6 = _closure1_slot2;
            var6 = var6.bind(var7)(var8);
            var2['total'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 4:
            _fun0001_ip = 6; continue _fun0001;
case 2:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 0;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.x/FIRX;
            var1 = var3.bind(var4)(var2);
case 6:
            return var1;
        }
    };
    var3['getBarText'] = var2;
    return var1;
})();