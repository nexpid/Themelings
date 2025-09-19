// app/modules/rtc/hooks/useSecureFramesUserVerifiedKeysCount.tsx
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
    var7 = var6[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rtc/hooks/useSecureFramesUserVerifiedKeysCount.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSecureFramesUserVerifiedKeysCount(arg1) {
        var2 = arg1;
        var6 = var2.userId;
        var _closure2_slot0 = var6;
        var3 = var2.keyToOmit;
        var _closure2_slot1 = var3;
        var7 = _closure1_slot2;
        var5 = var7.useMemo;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure2_slot1;
                var1 = null;
                if(!(var1 != var3)) { _fun0001_ip = 83; continue _fun0001 }
 13:
                var3 = global;
                var4 = var3.Uint8Array;
                var6 = _closure2_slot1;
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var7 = var3;
                var2 = new var7[var4](var6, var5);
                var4 = var2 instanceof Object ? var2 : var3;
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 2;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var2 = var3.serializeKey;
                var2 = var2.bind(var3)(var4);
                return var2;
 83:
                return var1;
            }
        };
        var7 = var5.bind(var7)(var3, var4);
        var _closure2_slot2 = var7;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot3;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = _closure1_slot3;
                var2 = var3.getUserVerifiedKeys;
                var1 = _closure2_slot0;
                var4 = var2.bind(var3)(var1);
                var1 = null;
                var2 = var1 == var4;
                var1 = 0;
                if(var2) { _fun0002_ip = 78; continue _fun0002 }
 36:
                var2 = global;
                var3 = var2.Object;
                var2 = var3.keys;
                var4 = var2.bind(var3)(var4);
                var3 = var4.filter;
                var2 = function(arg1) {
                    var2 = _closure2_slot2;
                    var1 = arg1;
                    var1 = var1 !== var2;
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                var1 = var2.length;
 78:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useSecureFramesUserVerifiedKeysCount'] = var2;
    return var1;
})();