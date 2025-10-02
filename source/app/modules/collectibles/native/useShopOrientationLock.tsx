// app/modules/collectibles/native/useShopOrientationLock.tsx
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
    var4 = 0;
    var8 = var6[var4];
    var7 = metroImportAll;
    var1 = undefined;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/useShopOrientationLock.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function() {
        var4 = _closure1_slot2;
        var3 = var4.useRef;
        var2 = false;
        var2 = var3.bind(var4)(var2);
        var _closure2_slot0 = var2;
        var3 = var4.useEffect;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure1_slot3;
                var1 = 0;
                if(!(var1 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 1;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.lockOrientation;
                var3 = 'PORTRAIT';
                var1 = true;
                var1 = var4.bind(var5)(var3, var1);
case 2:
                var3 = _closure2_slot0;
                var1 = true;
                var3['current'] = var1;
                var1 = _closure1_slot3;
                var1 = var1 + 1;
                _closure1_slot3 = var1;
                var1 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var2 = _closure2_slot0;
                        var2 = var2.current;
                        if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var3 = _closure1_slot3;
                        var4 = var3 - 1;
                        _closure1_slot3 = var4;
                        var3 = 0;
                        if(!(var3 === var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var2 = 1;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.unlockOrientation;
                        var2 = {};
                        var5 = false;
                        var2['unlockAfterRotatingToPreviousLock'] = var5;
                        var2 = var3.bind(var4)(var2);
case 6:
                        var2 = _closure2_slot0;
                        var1 = false;
                        var2['current'] = var1;
case 4:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            }
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        var1 = undefined;
        return var1;
    };
    var3['useShopOrientationLock'] = var2;
    return var1;
})();