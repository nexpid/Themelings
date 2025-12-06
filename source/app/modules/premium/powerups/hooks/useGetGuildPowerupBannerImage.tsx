// app/modules/premium/powerups/hooks/useGetGuildPowerupBannerImage.tsx
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
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/hooks/useGetGuildPowerupBannerImage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGetGuildPowerupBannerImage(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 1;
            var4 = var4[var3];
            var3 = undefined;
            var6 = var5.bind(var3)(var4);
            var5 = var6.useStateFromStores;
            var1 = _closure1_slot2;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var1 = _closure1_slot2;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var1 = var5.bind(var6)(var4, var1);
            var4 = null;
            if(!(var4 == var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            return var3;
case 2:
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = false;
            var1 = arg2;
            if(!(var3 !== var1)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var1 = var2.animatedImageUrl;
            _fun0001_ip = 7; continue _fun0001;
case 4:
            var1 = var2.staticImageUrl;
case 7:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();