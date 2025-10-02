// app/modules/remixing/native/hooks/useOrientationLock.tsx
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Dimensions;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/remixing/native/hooks/useOrientationLock.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function usePortraitOrientationOnly() {
        var4 = _closure1_slot2;
        var3 = var4.useEffect;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 2;
                var2 = var3[var2];
                var3 = undefined;
                var4 = var4.bind(var3)(var2);
                var2 = var4.isIpadOS;
                var2 = var2.bind(var4)();
                if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 3;
                var1 = var4[var1];
                var4 = var2.bind(var3)(var1);
                var3 = var4.lockOrientation;
                var2 = 'PORTRAIT';
                var1 = false;
                var1 = var3.bind(var4)(var2, var1);
case 2:
                var1 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var1 = 2;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.isIpadOS;
                        var3 = var3.bind(var4)();
                        if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 3:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var2 = 3;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.unlockOrientation;
                        var2 = {};
                        var5 = false;
                        var2['unlockAfterRotatingToPreviousLock'] = var5;
                        var2 = var3.bind(var4)(var2);
case 4:
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
    var3['default'] = var4;
    var2 = function() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot3;
            var2 = var3.get;
            var1 = 'screen';
            var1 = var2.bind(var3)(var1);
            var3 = var1.width;
            var2 = var1.height;
            var4 = var3 > var2;
            var1 = {};
            var5 = var3;
            if(!var4) { _fun0003_ip = 5; continue _fun0003 }
case 6:
            var5 = var2;
case 5:
            var1['width'] = var5;
            if(!var4) { _fun0003_ip = 7; continue _fun0003 }
case 8:
            var2 = var3;
case 7:
            var1['height'] = var2;
            return var1;
        }
    };
    var3['getPortraitOrientationScreenSize'] = var2;
    return var1;
})();