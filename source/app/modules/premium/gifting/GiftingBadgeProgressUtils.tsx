// app/modules/premium/gifting/GiftingBadgeProgressUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = var4.getSingleRequirementThreshold;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/gifting/GiftingBadgeProgressUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getGiftingBadgeProgressPercent(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var3 = arg3;
            var2 = _closure1_slot0;
            var1 = undefined;
            var5 = arg2;
            var5 = var2.bind(var1)(var5);
            var2 = var2.bind(var1)(var3);
            var1 = null;
            if(!(var1 == var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = 0;
            var1 = var5 > var1;
            var3 = 100;
            var6 = var3;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = global;
            var7 = var1.Math;
            var1 = var7.min;
            var1 = var1.bind(var7)(var5, var4);
            var1 = var1 / var5;
            var6 = var1 * var3;
case 4:
            _fun0001_ip = 6; continue _fun0001;
case 2:
            var1 = 0;
            var5 = var2 > var1;
            var3 = 100;
            var1 = var3;
            if(!var5) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var2 = var4 / var2;
            var1 = var2 * var3;
case 7:
            var6 = var1;
case 6:
            var1 = global;
            var4 = var1.Math;
            var3 = var4.min;
            var5 = var1.Math;
            var2 = var5.max;
            var1 = 0;
            var2 = var2.bind(var5)(var6, var1);
            var1 = 100;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['getGiftingBadgeProgressPercent'] = var2;
    return var1;
})();