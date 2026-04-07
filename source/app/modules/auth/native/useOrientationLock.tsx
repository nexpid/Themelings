// app/modules/auth/native/useOrientationLock.tsx
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/native/useOrientationLock.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function usePortraitOrientationOnly() {
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var1 = 3;
        var4 = var4[var1];
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var6 = var4.bind(var1)();
        var _closure2_slot0 = var6;
        var5 = _closure1_slot3;
        var4 = var5.useEffect;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 1;
                var3 = var4[var3];
                var4 = undefined;
                var5 = var5.bind(var4)(var3);
                var3 = var5.isIpadOS;
                var3 = var3.bind(var5)();
                var3 = !var3;
                if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 2;
                var5 = var7[var5];
                var6 = var6.bind(var4)(var5);
                var5 = var6.isMetaQuest;
                var5 = var5.bind(var6)();
                var3 = !var5;
case 2:
                if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var5 = _closure2_slot0;
                var3 = !var5;
case 4:
                var _closure3_slot0 = var3;
                if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 4;
                var2 = var5[var2];
                var5 = var3.bind(var4)(var2);
                var4 = var5.lockOrientation;
                var3 = 'PORTRAIT';
                var2 = false;
                var2 = var4.bind(var5)(var3, var2);
case 6:
                var1 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var1 = _closure3_slot0;
                        if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.unlockOrientation;
                        var1 = {};
                        var4 = false;
                        var1['unlockAfterRotatingToPreviousLock'] = var4;
                        var1 = var2.bind(var3)(var1);
case 8:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();