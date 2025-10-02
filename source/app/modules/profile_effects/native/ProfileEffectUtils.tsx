// app/modules/profile_effects/native/ProfileEffectUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
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
    var4 = 'modules/profile_effects/native/ProfileEffectUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = arg2;
            var2 = var1.start;
            if(!(!(var4 >= var2))) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = false;
            return var2;
case 2:
            var2 = var1.loop;
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var1.duration;
            var2 = var1.start;
            var2 = var3 + var2;
            if(!(var4 > var2)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var2 = false;
            return var2;
case 4:
            var2 = var1.loop;
            if(!var2) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var2 = var1.loopDelay;
            var3 = undefined;
            if(!(var3 !== var2)) { _fun0001_ip = 7; continue _fun0001 }
case 9:
            var5 = var1.loopDelay;
            var2 = 0;
            if(!(var5 > var2)) { _fun0001_ip = 7; continue _fun0001 }
case 10:
            var2 = var1.duration;
            var5 = null;
            var5 = var5 == var1;
            var3 = undefined;
            if(var5) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var3 = var1.loopDelay;
case 11:
            var3 = var2 + var3;
            var2 = var1.start;
            var2 = var4 - var2;
            var2 = var2 % var3;
            var1 = var1.duration;
            if(!(!(var2 > var1))) { _fun0001_ip = 13; continue _fun0001 }
case 7:
            var1 = true;
            return var1;
case 13:
            var1 = false;
            return var1;
        }
    };
    var3['shouldAnimate'] = var4;
    var2 = function(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.getAssetWHRatio;
        var1 = arg1;
        var2 = var2.bind(var3)(var1);
        var1 = arg2;
        var1 = var1 / var2;
        return var1;
    };
    var3['calculateProfileEffectHeight'] = var2;
    return var1;
})();