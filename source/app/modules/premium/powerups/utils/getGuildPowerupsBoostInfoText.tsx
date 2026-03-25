// app/modules/premium/powerups/utils/getGuildPowerupsBoostInfoText.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var4 = var4.BoostInfoType;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/utils/getGuildPowerupsBoostInfoText.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getGuildPowerupsBoostInfoText(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var3 = arg2;
            var2 = _closure1_slot3;
            var2 = var2.AVAILABLE;
            if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot3;
            var2 = var2.SPENT;
            if(!(var2 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = _closure1_slot3;
            var2 = var2.TOTAL;
            if(!(var2 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = undefined;
            return var2;
case 6:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 1;
            var2 = var8[var2];
            var7 = undefined;
            var2 = var3.bind(var7)(var2);
            var4 = var2.intl;
            var3 = var4.string;
            var6 = _closure1_slot1;
            var2 = 2;
            var2 = var8[var2];
            var2 = var6.bind(var7)(var2);
            var2 = var2["/F7Z2y"];
            var2 = var3.bind(var4)(var2);
            return var2;
case 4:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 1;
            var2 = var8[var2];
            var7 = undefined;
            var2 = var3.bind(var7)(var2);
            var6 = var2.intl;
            var4 = var6.formatToPlainString;
            var3 = _closure1_slot1;
            var2 = 2;
            var2 = var8[var2];
            var2 = var3.bind(var7)(var2);
            var3 = var2.xvgIVG;
            var2 = {};
            var2['boostCount'] = var5;
            var2 = var4.bind(var6)(var3, var2);
            return var2;
case 2:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 1;
            var2 = var7[var2];
            var6 = undefined;
            var2 = var3.bind(var6)(var2);
            var4 = var2.intl;
            var3 = var4.formatToPlainString;
            var2 = _closure1_slot1;
            var1 = 2;
            var1 = var7[var1];
            var1 = var2.bind(var6)(var1);
            var2 = var1.BdRXZA;
            var1 = {};
            var1['boostCount'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['getGuildPowerupsBoostInfoText'] = var2;
    return var1;
})();