// app/modules/clips/isClipsEnabled.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var5 = function isClipsEnabled() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var1 = var3.areClipsAvailable;
            var1 = var1.bind(var3)();
            var3 = _closure1_slot2;
            var2 = var3.getState;
            var2 = var2.bind(var3)();
            var2 = var2.clipsSettings;
            var2 = var2.clipsEnabled;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot3 = var5;
    var4 = function useIsClipsEnabled() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 1;
            var1 = var6[var1];
            var4 = undefined;
            var3 = var5.bind(var4)(var1);
            var1 = var3.useIsClipsAvailable;
            var1 = var1.bind(var3)();
            var3 = 2;
            var3 = var6[var3];
            var5 = var5.bind(var4)(var3);
            var4 = var5.useStateFromStores;
            var2 = _closure1_slot2;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot2;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                var1 = var1.clipsSettings;
                var1 = var1.clipsEnabled;
                return var1;
            };
            var2 = var4.bind(var5)(var3, var2);
            if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot4 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var6);
    var1 = 0;
    var9 = var8[var1];
    var6 = metroImportDefault;
    var1 = undefined;
    var6 = var6.bind(var1)(var9);
    var _closure1_slot2 = var6;
    var6 = 4;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/clips/isClipsEnabled.tsx';
    var6 = var7.bind(var8)(var6);
    var3['isClipsEnabled'] = var5;
    var3['useIsClipsEnabled'] = var4;
    var4 = function isDecoupledClipsEnabled() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = _closure1_slot3;
            var5 = undefined;
            var1 = var1.bind(var5)();
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var3 = 3;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.isWindows;
            var3 = var3.bind(var4)();
            var4 = _closure1_slot2;
            var2 = var4.getState;
            var2 = var2.bind(var4)();
            var2 = var2.clipsSettings;
            var2 = var2.decoupledClipsEnabled;
            if(!var1) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var1 = var3;
case 6:
            if(!var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var1 = var2;
case 8:
            return var1;
        }
    };
    var3['isDecoupledClipsEnabled'] = var4;
    var2 = function useIsDecoupledClipsEnabled() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = _closure1_slot4;
            var6 = undefined;
            var1 = var1.bind(var6)();
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 3;
            var3 = var7[var3];
            var4 = var5.bind(var6)(var3);
            var3 = var4.isWindows;
            var3 = var3.bind(var4)();
            var4 = 2;
            var4 = var7[var4];
            var6 = var5.bind(var6)(var4);
            var5 = var6.useStateFromStores;
            var2 = _closure1_slot2;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                var2 = _closure1_slot2;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                var1 = var1.clipsSettings;
                var1 = var1.decoupledClipsEnabled;
                return var1;
            };
            var2 = var5.bind(var6)(var4, var2);
            if(!var1) { _fun0004_ip = 10; continue _fun0004 }
case 11:
            var1 = var3;
case 10:
            if(!var1) { _fun0004_ip = 12; continue _fun0004 }
case 13:
            var1 = var2;
case 12:
            return var1;
        }
    };
    var3['useIsDecoupledClipsEnabled'] = var2;
    return var1;
})();