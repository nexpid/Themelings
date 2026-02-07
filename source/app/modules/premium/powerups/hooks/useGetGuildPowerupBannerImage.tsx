// app/modules/premium/powerups/hooks/useGetGuildPowerupBannerImage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var2 = function getGuildPowerupBannerImage(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = null;
            if(!(var3 == var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = undefined;
            return var1;
case 2:
            var1 = arg2;
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = false;
            var1 = arg3;
            if(!(var4 !== var1)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var1 = arg4;
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 7:
            var1 = var2.animatedImageUrl;
            if(!(var3 == var1)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = var2.staticImageUrl;
case 8:
            _fun0001_ip = 10; continue _fun0001;
case 4:
            var1 = var2.staticImageUrl;
case 10:
            return var1;
        }
    };
    var _closure1_slot3 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportDefault;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot2 = var5;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/powerups/hooks/useGetGuildPowerupBannerImage.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useGetGuildPowerupBannerImage(arg1, arg2, arg3) {
        var6 = _closure1_slot3;
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var2 = 1;
        var2 = var4[var2];
        var5 = undefined;
        var4 = var3.bind(var5)(var2);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var1 = _closure1_slot2;
            var1 = var1.useReducedMotion;
            return var1;
        };
        var9 = var3.bind(var4)(var2, var1);
        var10 = arg1;
        var8 = arg2;
        var7 = arg3;
        var11 = undefined;
        var1 = var11[var6](var10, var9, var8, var7, var6);
        return var1;
    };
    var3['default'] = var4;
    var3['getGuildPowerupBannerImage'] = var2;
    return var1;
})();