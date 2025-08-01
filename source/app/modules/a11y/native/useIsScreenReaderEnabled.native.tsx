// app/modules/a11y/native/useIsScreenReaderEnabled.native.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.AccessibilityInfo;
    var _closure1_slot2 = var4;
    var4 = function SCREEN_READER_ENABLED_GETTER(arg1) {
        var1 = arg1;
        var1 = var1.screenReaderEnabled;
        return var1;
    };
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.create;
    var4 = function(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = function updateScreenReaderEnabled(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 2;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = function(arg1) {
                    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                        var1 = arg1;
                        var4 = var1.screenReaderEnabled;
                        var2 = _closure3_slot0;
                        if(!(var4 !== var2)) { _fun0001_ip = 34; continue _fun0001 }
 20:
                        var2 = {};
                        var3 = _closure3_slot0;
                        var2['screenReaderEnabled'] = var3;
                        var1 = var2;
 34:
                        return var1;
                    }
                };
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var _closure2_slot1 = var4;
        var3 = _closure1_slot2;
        var2 = var3.isScreenReaderEnabled;
        var5 = var2.bind(var3)();
        var2 = var5.then;
        var5 = var2.bind(var5)(var4);
        var2 = var5.catch;
        var1 = function() {
            var3 = _closure2_slot1;
            var1 = undefined;
            var2 = false;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var2.bind(var5)(var1);
        var2 = var3.addEventListener;
        var1 = 'screenReaderChanged';
        var1 = var2.bind(var3)(var1, var4);
        var1 = {};
        var2 = false;
        var1['screenReaderEnabled'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/a11y/native/useIsScreenReaderEnabled.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function addScreenReaderEnabledListener(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot4;
        var2 = var3.subscribe;
        var1 = function(arg1) {
            var1 = arg1;
            var3 = var1.screenReaderEnabled;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['addScreenReaderEnabledListener'] = var4;
    var4 = function getIsScreenReaderEnabled() {
        var2 = _closure1_slot4;
        var1 = var2.getState;
        var1 = var1.bind(var2)();
        var1 = var1.screenReaderEnabled;
        return var1;
    };
    var3['getIsScreenReaderEnabled'] = var4;
    var2 = function useIsScreenReaderEnabled() {
        var3 = _closure1_slot4;
        var2 = _closure1_slot3;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var3['useIsScreenReaderEnabled'] = var2;
    return var1;
})();