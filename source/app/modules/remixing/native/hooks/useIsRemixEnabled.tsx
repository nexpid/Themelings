// app/modules/remixing/native/hooks/useIsRemixEnabled.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var5 = var7[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot3 = var4;
    var4 = function useIsRemixEnabled(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 1;
            var1 = var6[var1];
            var5 = undefined;
            var4 = var3.bind(var5)(var1);
            var3 = var4.useCanRemix;
            var1 = arg2;
            var1 = var3.bind(var4)(var1);
            var8 = _closure1_slot3;
            var7 = var8.useMemo;
            var4 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 2;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var3.bind(var2)(var1);
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = new Array(0);
            var3 = var7.bind(var8)(var4, var3);
            var4 = _closure1_slot1;
            var2 = 3;
            var2 = var6[var2];
            var4 = var4.bind(var5)(var2);
            var2 = arg1;
            var2 = var4.bind(var5)(var2);
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var3;
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot4 = var4;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/remixing/native/hooks/useIsRemixEnabled.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useIsRemixEnabled'] = var4;
    var2 = function(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg2;
            var _closure2_slot0 = var6;
            var7 = _closure1_slot4;
            var5 = undefined;
            var4 = arg1;
            var1 = arg3;
            var1 = var7.bind(var5)(var4, var1);
            var5 = _closure1_slot3;
            var4 = var5.useMemo;
            var3 = new Array(1);
            var3[0] = var6;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = var2.width;
                    var3 = 6000;
                    var1 = var1 < var3;
                    if(!var1) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var2 = var2.height;
                    var1 = var2 < var3;
case 6:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = var2;
case 8:
            return var1;
        }
    };
    var3['useIsRemixEnabledForMedia'] = var2;
    return var1;
})();