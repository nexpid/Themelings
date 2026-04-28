// app/modules/collectibles/hooks/useShouldShowPremiumProfileFrameCTA.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 3;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/hooks/useShouldShowPremiumProfileFrameCTA.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useShouldShowPremiumProfileFrameCTA(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = var1.location;
            var3 = var1.product;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 0;
            var1 = var8[var1];
            var5 = undefined;
            var1 = var7.bind(var5)(var1);
            var1 = var1.bind(var5)(var6);
            var4 = 1;
            var4 = var8[var4];
            var4 = var7.bind(var5)(var4);
            var4 = var4.bind(var5)(var6);
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = !var4;
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var3.type;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var2 = var4.bind(var5)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.PROFILE_FRAME;
            var1 = var3 === var2;
case 4:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();