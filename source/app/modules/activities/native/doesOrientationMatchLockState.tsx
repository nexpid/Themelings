// app/modules/activities/native/doesOrientationMatchLockState.tsx
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
    var4 = var4.OrientationLockState;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/native/doesOrientationMatchLockState.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function doesOrientationMatchLockState(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var4 = arg2;
            var1 = null;
            var1 = var1 == var4;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var3 = var3.UNLOCKED;
            var1 = var4 === var3;
case 2:
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = !var2;
            if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = _closure1_slot0;
            var5 = var5.PORTRAIT;
            var3 = var4 === var5;
case 6:
            var1 = var3;
case 4:
            if(var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            if(!var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = _closure1_slot0;
            var3 = var3.LANDSCAPE;
            var2 = var4 === var3;
case 10:
            var1 = var2;
case 8:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();