// app/modules/panels/morphable/native/AppFreezer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var10 = 1;
    var4 = var6[var10];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot3 = var8;
    var4 = 3;
    var4 = var6[var4];
    var7 = var7.bind(var1)(var4);
    var4 = {};
    var9 = {};
    var9['flex'] = var10;
    var4['style'] = var9;
    var4 = var8.bind(var1)(var7, var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/panels/morphable/native/AppFreezer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AppFreezer(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.children;
            var8 = var1.manualFreeze;
            var4 = undefined;
            if(!(var8 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = false;
case 2:
            var6 = var1.placeholder;
            if(!(var6 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = _closure1_slot4;
case 4:
            var1 = var1.lockKeys;
            var _closure2_slot0 = var1;
            var3 = _closure1_slot2;
            var2 = function(arg1) {
                var1 = arg1;
                var4 = var1.lockKeys;
                var3 = _closure2_slot0;
                var2 = function shouldFreeze(arg1, arg2) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var1 = arg1;
                        var4 = arg2;
                        var _closure4_slot0 = var1;
                        var3 = null;
                        if(!(var3 == var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                        var3 = var1.size;
                        var1 = 0;
                        var1 = var3 > var1;
                        _fun0002_ip = 8; continue _fun0002;
case 6:
                        var3 = var4.some;
                        var2 = function(arg1) {
                            var3 = _closure4_slot0;
                            var2 = var3.has;
                            var1 = arg1;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var1 = var3.bind(var4)(var2);
case 8:
                        return var1;
                    }
                };
                var1 = undefined;
                var1 = var2.bind(var1)(var4, var3);
                return var1;
            };
            var7 = var3.bind(var4)(var2);
            var3 = _closure1_slot3;
            var2 = _closure1_slot0;
            var9 = _closure1_slot1;
            var1 = 4;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Freeze;
            var1 = {};
            if(var7) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var7 = var8;
case 9:
            var1['freeze'] = var7;
            var1['placeholder'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();