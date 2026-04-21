// app/modules/safe_area/subscribeToSafeAreaInsets.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/safe_area/subscribeToSafeAreaInsets.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function subscribeToSafeAreaInsets(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arguments[1];
            var3 = arg1;
            var _closure2_slot0 = var3;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 0;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var2 = var3.DEFAULT_APP_ENTRY_KEY;
case 2:
            var _closure2_slot1 = var2;
            var2 = function selector(arg1) {
                var1 = arg1;
                var2 = var1.byAppEntry;
                var1 = _closure2_slot1;
                var1 = var2[var1];
                var1 = var1.safeAreaInsets;
                return var1;
            };
            var _closure2_slot2 = var2;
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 1;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.subscribe;
            var1 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = _closure2_slot2;
                    var1 = undefined;
                    var3 = arg1;
                    var3 = var5.bind(var1)(var3);
                    var4 = arg2;
                    var4 = var5.bind(var1)(var4);
                    if(!(var3 !== var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = _closure2_slot0;
                    var2 = var2.bind(var1)(var3);
case 4:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();