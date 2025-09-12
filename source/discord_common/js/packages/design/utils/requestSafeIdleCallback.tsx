// discord_common/js/packages/design/utils/requestSafeIdleCallback.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var4 = true;
    var5['value'] = var4;
    var4 = '__esModule';
    var4 = var6.bind(var7)(var3, var4, var5);
    var1 = var1.window;
    var _closure1_slot0 = var1;
    var4 = dependencyMap;
    var1 = 0;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/design/utils/requestSafeIdleCallback.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function setOriginWindow(arg1) {
        var1 = arg1;
        _closure1_slot0 = var1;
        var1 = undefined;
        return var1;
    };
    var3['setOriginWindow'] = var4;
    var2 = function requestSafeIdleCallback(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var8 = arg1;
            var6 = arg2;
            var _closure2_slot0 = var8;
            var5 = _closure1_slot0;
            var _closure2_slot1 = var5;
            var2 = undefined;
            if(!(var2 !== var5)) { _fun0001_ip = 51; continue _fun0001 }
 29:
            var4 = var5.requestIdleCallback;
            var3 = null;
            if(!(var3 != var4)) { _fun0001_ip = 51; continue _fun0001 }
 41:
            var4 = var5.cancelIdleCallback;
            if(!(var3 == var4)) { _fun0001_ip = 75; continue _fun0001 }
 51:
            var7 = var5.setTimeout;
            var4 = 0;
            var4 = var7.bind(var5)(var8, var4);
            var _closure2_slot6 = var4;
            var4 = function() {
                var3 = _closure2_slot1;
                var2 = var3.clearTimeout;
                var1 = _closure2_slot6;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            return var4;
 75:
            var4 = false;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var3;
            var7 = function runOnce() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot2;
                    if(var2) { _fun0002_ip = 59; continue _fun0002 }
 10:
                    var2 = true;
                    _closure2_slot2 = var2;
                    var3 = _closure2_slot3;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 49; continue _fun0002 }
 26:
                    var5 = _closure2_slot1;
                    var4 = var5.clearTimeout;
                    var3 = _closure2_slot3;
                    var3 = var4.bind(var5)(var3);
                    _closure2_slot3 = var2;
 49:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 59:
                    var1 = undefined;
                    return var1;
                }
            };
            var _closure2_slot4 = var7;
            var4 = var5.requestIdleCallback;
            var4 = var4.bind(var5)(var7, var6);
            var _closure2_slot5 = var4;
            var4 = var5.setTimeout;
            var7 = var3 == var6;
            var2 = undefined;
            if(var7) { _fun0001_ip = 130; continue _fun0001 }
 124:
            var2 = var6.timeout;
 130:
            var6 = var3 != var2;
            var3 = 1000;
            if(!var6) { _fun0001_ip = 146; continue _fun0001 }
 143:
            var3 = var2;
 146:
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot2;
                    if(var2) { _fun0003_ip = 29; continue _fun0003 }
 10:
                    var4 = _closure2_slot1;
                    var3 = var4.cancelIdleCallback;
                    var2 = _closure2_slot5;
                    var2 = var3.bind(var4)(var2);
 29:
                    var2 = _closure2_slot4;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            _closure2_slot3 = var2;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = _closure2_slot1;
                    var3 = var4.cancelIdleCallback;
                    var1 = _closure2_slot5;
                    var1 = var3.bind(var4)(var1);
                    var3 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0004_ip = 55; continue _fun0004 }
 32:
                    var5 = _closure2_slot1;
                    var4 = var5.clearTimeout;
                    var3 = _closure2_slot3;
                    var3 = var4.bind(var5)(var3);
                    _closure2_slot3 = var1;
 55:
                    var1 = undefined;
                    return var1;
                }
            };
            return var1;
        }
    };
    var3['requestSafeIdleCallback'] = var2;
    return var1;
})();