// app/modules/activities/native/applyActivityOrientationLock.tsx
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
    var4 = var4.OrientationLockState;
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/native/applyActivityOrientationLock.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function applyActivityOrientationLock(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var3);
            var3 = var5.getIsTabletActivitySurface;
            var3 = var3.bind(var5)();
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot2;
            var3 = var3.UNLOCKED;
            if(!(var3 !== var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot2;
            var3 = var3.PORTRAIT;
            if(!(var3 !== var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot2;
            var3 = var3.LANDSCAPE;
            if(!(var3 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 8:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 2;
            var3 = var5[var3];
            var6 = var4.bind(var1)(var3);
            var5 = var6.lockOrientation;
            var4 = 'LANDSCAPE';
            var3 = true;
            var3 = var5.bind(var6)(var4, var3);
            _fun0001_ip = 2; continue _fun0001;
case 6:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 2;
            var3 = var5[var3];
            var6 = var4.bind(var1)(var3);
            var5 = var6.lockOrientation;
            var4 = 'PORTRAIT';
            var3 = true;
            var3 = var5.bind(var6)(var4, var3);
            _fun0001_ip = 2; continue _fun0001;
case 4:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 2;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.unlockOrientation;
            var2 = {};
            var5 = true;
            var2['unlockAfterRotatingToPreviousLock'] = var5;
            var2 = var3.bind(var4)(var2);
case 2:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();