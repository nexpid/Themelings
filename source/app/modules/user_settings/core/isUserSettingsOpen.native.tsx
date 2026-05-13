// app/modules/user_settings/core/isUserSettingsOpen.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function isSettingsRoutePresent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = null;
            var4 = var3 == var2;
            var1 = undefined;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2.routes;
case 2:
            var1 = var3 != var1;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var2.routes;
            var3 = var4.some;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = arg1;
                    var3 = var2.name;
                    var1 = 'settings';
                    var1 = var1 === var3;
                    if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = _closure1_slot4;
                    var3 = var2.state;
                    var2 = undefined;
                    var1 = var4.bind(var2)(var3);
case 6:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2);
case 4:
            return var1;
        }
    };
    var _closure1_slot4 = var1;
    var4 = function isUserSettingsOpen() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 2;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.getRootNavigationRef;
            var5 = var1.bind(var3)();
            var1 = null;
            var3 = var1 == var5;
            if(var3) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var1 = var5.isReady;
            var1 = var1.bind(var5)();
            var3 = !var1;
case 8:
            var1 = !var3;
            if(var3) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var3 = _closure1_slot4;
            var2 = var5.getRootState;
            var2 = var2.bind(var5)();
            var1 = var3.bind(var4)(var2);
case 10:
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportDefault;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot2 = var5;
    var5 = 1;
    var8 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot3 = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_settings/core/isUserSettingsOpen.native.tsx';
    var5 = var6.bind(var7)(var5);
    var3['isUserSettingsOpen'] = var4;
    var2 = function useIsUserSettingsOpen() {
        var5 = _closure1_slot3;
        var4 = var5.useState;
        var3 = _closure1_slot5;
        var6 = var4.bind(var5)(var3);
        var4 = _closure1_slot2;
        var3 = undefined;
        var1 = 2;
        var4 = var4.bind(var3)(var6, var1);
        var1 = 0;
        var1 = var4[var1];
        var3 = 1;
        var3 = var4[var3];
        var _closure2_slot0 = var3;
        var4 = var5.useEffect;
        var3 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 2;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.getRootNavigationRef;
                var5 = var3.bind(var4)();
                var _closure3_slot0 = var5;
                var3 = null;
                if(!(var3 == var5)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                return var2;
case 12:
                var4 = function handleStateChange() {
                    var3 = _closure1_slot4;
                    var2 = _closure3_slot0;
                    var1 = var2.getRootState;
                    var2 = var1.bind(var2)();
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = _closure2_slot0;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                };
                var _closure3_slot1 = var4;
                var3 = var5.addListener;
                var2 = 'state';
                var2 = var3.bind(var5)(var2, var4);
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
        var2 = new Array(0);
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['useIsUserSettingsOpen'] = var2;
    return var1;
})();