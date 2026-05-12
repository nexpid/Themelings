// app/modules/a11y/native/useAnnounceAsyncCompletion.native.tsx
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
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AccessibilityInfo;
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/a11y/native/useAnnounceAsyncCompletion.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useAnnounceAsyncCompletion() {
        var4 = _closure1_slot2;
        var3 = var4.useRef;
        var2 = null;
        var2 = var3.bind(var4)(var2);
        var _closure2_slot0 = var2;
        var5 = var4.useEffect;
        var3 = function() {
            var1 = function() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var4 = _closure2_slot0;
                    var3 = var4.current;
                    var3 = var3.bind(var4)();
case 2:
                    var1 = _closure2_slot0;
                    var1['current'] = var2;
                    var1 = undefined;
                    return var1;
                }
            };
            return var1;
        };
        var2 = new Array(0);
        var2 = var5.bind(var4)(var3, var2);
        var3 = var4.useCallback;
        var2 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var9 = arg1;
                var8 = arguments[1];
                var _closure3_slot0 = var9;
                var4 = undefined;
                if(!(var8 === var4)) { _fun0002_ip = 4; continue _fun0002 }
case 3:
                var8 = 'assertive';
case 4:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 2;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var7 = var3.AccessibilityAnnouncer;
                var3 = var7.announce;
                var3 = var3.bind(var7)(var9, var8);
                var3 = 3;
                var3 = var6[var3];
                var5 = var5.bind(var4)(var3);
                var3 = var5.isIOS;
                var3 = var3.bind(var5)();
                if(!var3) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 4;
                var1 = var5[var1];
                var3 = var3.bind(var4)(var1);
                var1 = var3.getIsScreenReaderEnabled;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 7; continue _fun0002 }
case 5:
                var1 = global;
                var3 = var1.Promise;
                var1 = var3.resolve;
                var1 = var1.bind(var3)();
                _fun0002_ip = 8; continue _fun0002;
case 7:
                var4 = _closure2_slot0;
                var5 = var4.current;
                var4 = null;
                if(!(var4 != var5)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var4 = _closure2_slot0;
                var3 = var4.current;
                var3 = var3.bind(var4)();
case 9:
                var3 = global;
                var4 = var3.Promise;
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var11 = function(arg1) {
                    var1 = arg1;
                    var _closure4_slot0 = var1;
                    var1 = global;
                    var5 = var1.setTimeout;
                    var1 = undefined;
                    var4 = function() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var1 = _closure2_slot0;
                            var3 = var1.current;
                            var1 = null;
                            var3 = var1 == var3;
                            var1 = undefined;
                            if(var3) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                            var3 = _closure2_slot0;
                            var2 = var3.current;
                            var1 = var2.bind(var3)();
case 11:
                            return var1;
                        }
                    };
                    var3 = 1800;
                    var3 = var5.bind(var1)(var4, var3);
                    var _closure4_slot1 = var3;
                    var6 = _closure1_slot3;
                    var5 = var6.addEventListener;
                    var4 = 'announcementFinished';
                    var3 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var2 = arg1;
                            var3 = var2.announcement;
                            var1 = _closure3_slot0;
                            var1 = var3 === var1;
                            if(!var1) { _fun0004_ip = 13; continue _fun0004 }
case 12:
                            var1 = var2.success;
case 13:
                            if(!var1) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                            var2 = _closure2_slot0;
                            var3 = var2.current;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0004_ip = 14; continue _fun0004 }
case 16:
                            var2 = _closure2_slot0;
                            var1 = var2.current;
                            var1 = var1.bind(var2)();
case 14:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var3 = var5.bind(var6)(var4, var3);
                    var _closure4_slot2 = var3;
                    var3 = _closure2_slot0;
                    var2 = function() {
                        var1 = global;
                        var4 = var1.clearTimeout;
                        var3 = _closure4_slot1;
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var4 = _closure4_slot2;
                        var3 = var4.remove;
                        var3 = var3.bind(var4)();
                        var4 = _closure2_slot0;
                        var3 = null;
                        var4['current'] = var3;
                        var2 = _closure4_slot0;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var3['current'] = var2;
                    return var1;
                };
                var12 = var3;
                var2 = new var12[var4](var11, var10);
                var1 = var2 instanceof Object ? var2 : var3;
case 8:
                return var1;
            }
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();