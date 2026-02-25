// app/modules/user_settings/native/core/useAutoSettingsSearchSessionAnalytics.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/core/useAutoSettingsSearchSessionAnalytics.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useAutoSettingsSearchSessionAnalytics() {
        var5 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 3;
        var3 = var8[var1];
        var1 = undefined;
        var7 = var5.bind(var1)(var3);
        var6 = var7.useStateFromStores;
        var3 = _closure1_slot4;
        var5 = new Array(1);
        var5[0] = var3;
        var3 = function() {
            var3 = _closure1_slot4;
            var2 = var3.getState;
            var2 = var2.bind(var3)();
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 4;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var1 = var1.AppStates;
            var1 = var1.ACTIVE;
            var1 = var2 === var1;
            return var1;
        };
        var6 = var6.bind(var7)(var5, var3);
        var _closure2_slot0 = var6;
        var7 = _closure1_slot1;
        var3 = 5;
        var3 = var8[var3];
        var3 = var7.bind(var1)(var3);
        var3 = var3.bind(var1)(var6);
        var _closure2_slot1 = var3;
        var5 = 6;
        var5 = var8[var5];
        var7 = var7.bind(var1)(var5);
        var5 = function() {
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.terminate;
                var2 = var2.bind(var3)();
                return var1;
            };
            return var1;
        };
        var5 = var7.bind(var1)(var5);
        var5 = _closure1_slot3;
        var7 = var5.useEffect;
        var4 = new Array(2);
        var4[0] = var6;
        var4[1] = var3;
        var3 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var5 = _closure1_slot5;
                var3 = var5.getField;
                var2 = 'isFocused';
                var3 = var3.bind(var5)(var2);
                var4 = var5.getField;
                var2 = 'query';
                var2 = var4.bind(var5)(var2);
                if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = var2.length;
                var2 = 0;
                var3 = var4 > var2;
case 2:
                var2 = _closure2_slot0;
                if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var5 = _closure2_slot1;
                var2 = !var5;
case 4:
                if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var2 = var3;
case 6:
                if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 7;
                var5 = var5[var2];
                var2 = undefined;
                var5 = var6.bind(var2)(var5);
                var2 = var5.initialize;
                var2 = var2.bind(var5)();
case 8:
                var2 = _closure2_slot0;
                var2 = !var2;
                if(!var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                var2 = _closure2_slot1;
case 10:
                if(!var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                var2 = var3;
case 12:
                if(!var2) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.terminate;
                var1 = var1.bind(var2)();
case 14:
                var1 = undefined;
                return var1;
            }
        };
        var3 = var7.bind(var5)(var3, var4);
        var7 = var5.useEffect;
        var4 = new Array(1);
        var4[0] = var6;
        var3 = function() {
            var5 = _closure1_slot5;
            var4 = var5.subscribe;
            var3 = {};
            var2 = function equalityFn(arg1, arg2) {
                var2 = arg1;
                var1 = arg2;
                var1 = var2 === var1;
                return var1;
            };
            var3['equalityFn'] = var2;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.isFocused;
                    var2 = var2.query;
                    if(var1) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var3 = var2.length;
                    var2 = 0;
                    var1 = var3 > var2;
case 16:
                    return var1;
                }
            };
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = arg1;
                    if(var2) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var2 = var3.terminate;
                    var2 = var2.bind(var3)();
                    _fun0003_ip = 20; continue _fun0003;
case 18:
                    var2 = var3.initialize;
                    var2 = var2.bind(var3)();
case 20:
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var2, var1, var3);
            return var1;
        };
        var3 = var7.bind(var5)(var3, var4);
        var4 = var5.useEffect;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            var5 = _closure1_slot5;
            var4 = var5.subscribe;
            var3 = {};
            var2 = function equalityFn(arg1, arg2) {
                var2 = arg1;
                var1 = arg2;
                var1 = var2 === var1;
                return var1;
            };
            var3['equalityFn'] = var2;
            var2 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.isFocused;
                    var2 = var2.query;
                    if(!var1) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var3 = var2.length;
                    var2 = 0;
                    var1 = var3 > var2;
case 16:
                    return var1;
                }
            };
            var1 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    if(!var1) { _fun0005_ip = 18; continue _fun0005 }
case 21:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.maybeTrackQueryEntered;
                    var1 = var1.bind(var2)();
case 18:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var2, var1, var3);
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useAutoSettingsSearchSessionAnalytics'] = var2;
    return var1;
})();