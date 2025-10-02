// app/modules/panels/morphable/native/useScreenNameSharedValue.tsx
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
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/panels/morphable/native/useScreenNameSharedValue.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useScreenNameSharedValue() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 1;
            var1 = var5[var1];
            var6 = undefined;
            var7 = var4.bind(var6)(var1);
            var1 = var7.getRootNavigationRef;
            var10 = var1.bind(var7)();
            var1 = 2;
            var1 = var5[var1];
            var5 = var4.bind(var6)(var1);
            var4 = var5.useSharedValue;
            var7 = null;
            var1 = var7 == var10;
            var11 = undefined;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var10.isReady;
            var11 = var1.bind(var10)();
case 2:
            var8 = 'unknown';
            var9 = true;
            var1 = var8;
            if(!(var9 === var11)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = var10.getCurrentRoute;
            var9 = var9.bind(var10)();
            var10 = var7 == var9;
            var6 = undefined;
            if(var10) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var9.name;
case 6:
            var7 = var7 != var6;
            var1 = var8;
            if(!var7) { _fun0001_ip = 4; continue _fun0001 }
case 8:
            var1 = var6;
case 4:
            var1 = var4.bind(var5)(var1);
            var _closure2_slot0 = var1;
            var5 = _closure1_slot2;
            var4 = var5.useEffect;
            var3 = new Array(1);
            var3[0] = var1;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = function handleStateChange() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var3 = _closure3_slot0;
                            var1 = null;
                            if(!(var1 != var3)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                            var4 = _closure3_slot0;
                            var3 = var4.isReady;
                            var3 = var3.bind(var4)();
                            if(!var3) { _fun0003_ip = 9; continue _fun0003 }
case 11:
                            var3 = _closure3_slot0;
                            var2 = var3.getCurrentRoute;
                            var5 = var2.bind(var3)();
                            var3 = _closure2_slot0;
                            var2 = var3.set;
                            var6 = var1 == var5;
                            var4 = undefined;
                            if(var6) { _fun0003_ip = 12; continue _fun0003 }
case 3:
                            var4 = var5.name;
case 12:
                            var5 = var1 != var4;
                            var1 = 'unknown';
                            if(!var5) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                            var1 = var4;
case 13:
                            var1 = var2.bind(var3)(var1);
case 9:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var _closure3_slot1 = var5;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 1;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.getRootNavigationRef;
                    var4 = var3.bind(var4)();
                    var _closure3_slot0 = var4;
                    var3 = null;
                    if(!(var3 == var4)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    return var2;
case 15:
                    var3 = var4.addListener;
                    var2 = 'state';
                    var2 = var3.bind(var4)(var2, var5);
                    var1 = function() {
                        var4 = _closure3_slot0;
                        var3 = var4.removeListener;
                        var2 = _closure3_slot1;
                        var1 = 'state';
                        var1 = var3.bind(var4)(var1, var2);
                        var1 = undefined;
                        return var1;
                    };
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();