// app/modules/rtc/hooks/useSecureFramesUserVerifiedKeys.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rtc/hooks/useSecureFramesUserVerifiedKeys.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSecureFramesUserVerifiedKeys(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 1;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStoresArray;
        var5 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 2;
            var3 = var4[var3];
            var4 = undefined;
            var3 = var5.bind(var4)(var3);
            var6 = _closure1_slot3;
            var5 = var6.getUserVerifiedKeys;
            var2 = _closure2_slot0;
            var2 = var5.bind(var6)(var2);
            var3 = var3.bind(var4)(var2);
            var2 = var3.entries;
            var4 = var2.bind(var3)();
            var3 = var4.map;
            var2 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var5 = arg1;
                    var1 = var5[Symbol.iterator];
                    var5 = var1().next;
                    var2 = var5().value;
                    var3 = var1;
                    var7 = undefined;
                    var4 = var3 === var7;
                    var3 = undefined;
                    if(var4) { _fun0001_ip = 27; continue _fun0001 }
 24:
                    var3 = var2;
 27:
                    var2 = undefined;
                    if(var4) { _fun0001_ip = 57; continue _fun0001 }
 32:
                    var6 = var5().value;
                    var5 = var1;
                    var5 = var5 === var7;
                    var2 = undefined;
                    var4 = var5;
                    if(var5) { _fun0001_ip = 57; continue _fun0001 }
 51:
                    var2 = var6;
                    var4 = var5;
 57:
                    if(var4) { _fun0001_ip = 63; continue _fun0001 }
 60:
                    var1.return();
 63:
                    var1 = {};
                    var1['verifiedKey'] = var3;
                    var1['timestamp'] = var2;
                    return var1;
                }
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.sortBy;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.timestamp;
                var1 = -1;
                var1 = var1 * var2;
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.value;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useSecureFramesUserVerifiedKeys'] = var2;
    return var1;
})();