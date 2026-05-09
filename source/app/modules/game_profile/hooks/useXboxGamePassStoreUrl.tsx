// app/modules/game_profile/hooks/useXboxGamePassStoreUrl.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
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
    var4 = var4.Distributors;
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_profile/hooks/useXboxGamePassStoreUrl.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useXboxGamePassStoreUrl(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var2.thirdPartySkus;
            var3 = var4.find;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = arg1;
                    var4 = var2.distributor;
                    var1 = _closure1_slot2;
                    var1 = var1.XBOX_GAME_PASS;
                    var1 = var4 === var1;
                    if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var3 = 1;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.isNullOrEmpty;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
                    var1 = !var2;
case 4:
                    return var1;
                }
            };
            var3 = var3.bind(var4)(var2);
            var4 = var1 == var3;
            var6 = undefined;
            var2 = undefined;
            if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var3.id;
case 6:
            var4 = var1 == var2;
            var2 = null;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 2;
            var4 = var7[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.buildXboxGamePassStoreUrl;
            var3 = var3.id;
            var2 = var4.bind(var5)(var3);
case 8:
            return var2;
case 2:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();