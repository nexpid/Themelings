// discord_common/js/packages/design/components/Rive/native/useRivePlayback.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AppState;
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/design/components/Rive/native/useRivePlayback.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useRivePlayback(arg1, arg2) {
        var2 = arg1;
        var3 = arg2;
        var _closure2_slot0 = var2;
        var8 = var3.isReady;
        var _closure2_slot1 = var8;
        var9 = var3.appStatePlaybackEnabled;
        var _closure2_slot2 = var9;
        var4 = var3.shouldShortLoopForReducedMotion;
        var _closure2_slot3 = var4;
        var7 = _closure1_slot0;
        var6 = var7.useRef;
        var5 = false;
        var6 = var6.bind(var7)(var5);
        var _closure2_slot4 = var6;
        var6 = var7.useRef;
        var3 = _closure1_slot1;
        var10 = var3.currentState;
        var3 = 'background';
        var3 = var3 === var10;
        var3 = var6.bind(var7)(var3);
        var _closure2_slot5 = var3;
        var3 = var7.useRef;
        var3 = var3.bind(var7)(var5);
        var _closure2_slot6 = var3;
        var6 = var7.useRef;
        var3 = null;
        var3 = var6.bind(var7)(var3);
        var _closure2_slot7 = var3;
        var3 = var7.useRef;
        var3 = var3.bind(var7)(var5);
        var _closure2_slot8 = var3;
        var5 = var7.useRef;
        var3 = true;
        var3 = var5.bind(var7)(var3);
        var _closure2_slot9 = var3;
        var6 = var7.useEffect;
        var5 = function() {
            var2 = _closure2_slot9;
            var1 = true;
            var2['current'] = var1;
            var1 = function() {
                var2 = _closure2_slot9;
                var1 = false;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            return var1;
        };
        var3 = new Array(0);
        var3 = var6.bind(var7)(var5, var3);
        var6 = var7.useCallback;
        var5 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot7;
                var3 = var2.current;
                var2 = null;
                if(!(var2 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = global;
                var5 = var3.clearTimeout;
                var1 = _closure2_slot7;
                var4 = var1.current;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var1['current'] = var2;
case 2:
                var1 = undefined;
                return var1;
            }
        };
        var3 = new Array(0);
        var5 = var6.bind(var7)(var5, var3);
        var _closure2_slot10 = var5;
        var10 = var7.useCallback;
        var6 = new Array(2);
        var6[0] = var5;
        var6[1] = var2;
        var3 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = _closure2_slot10;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var4 = _closure2_slot0;
                var3 = null;
                if(!(var3 != var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var4 = _closure2_slot0;
                var3 = var4.pause;
                var3 = var3.bind(var4)();
case 4:
                var3 = _closure2_slot4;
                var2 = false;
                var3['current'] = var2;
                return var1;
            }
        };
        var3 = var10.bind(var7)(var3, var6);
        var _closure2_slot11 = var3;
        var10 = var7.useCallback;
        var6 = new Array(3);
        var6[0] = var5;
        var6[1] = var4;
        var6[2] = var3;
        var4 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = _closure2_slot10;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var3 = _closure2_slot3;
                if(!var3) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                var3 = _closure2_slot7;
                var2 = global;
                var5 = var2.setTimeout;
                var4 = function() {
                    var2 = _closure2_slot11;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    return var1;
                };
                var2 = 5000;
                var2 = var5.bind(var1)(var4, var2);
                var3['current'] = var2;
case 6:
                return var1;
            }
        };
        var11 = var10.bind(var7)(var4, var6);
        var _closure2_slot12 = var11;
        var10 = var7.useCallback;
        var6 = new Array(2);
        var6[0] = var2;
        var6[1] = var11;
        var4 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = _closure2_slot0;
                var2 = null;
                if(!(var2 != var3)) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                var3 = _closure2_slot0;
                var2 = var3.play;
                var2 = var2.bind(var3)();
case 8:
                var3 = _closure2_slot4;
                var2 = true;
                var3['current'] = var2;
                var2 = _closure2_slot12;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            }
        };
        var4 = var10.bind(var7)(var4, var6);
        var _closure2_slot13 = var4;
        var10 = var7.useCallback;
        var6 = new Array(3);
        var6[0] = var9;
        var6[1] = var2;
        var6[2] = var11;
        var2 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = _closure2_slot8;
                var2 = var2.current;
                if(var2) { _fun0005_ip = 10; continue _fun0005 }
case 11:
                var2 = _closure2_slot8;
                var1 = true;
                var2['current'] = var1;
                var1 = global;
                var3 = var1.queueMicrotask;
                var2 = undefined;
                var1 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var3 = _closure2_slot8;
                        var2 = false;
                        var3['current'] = var2;
                        var2 = _closure2_slot9;
                        var2 = var2.current;
                        if(!var2) { _fun0006_ip = 12; continue _fun0006 }
case 8:
                        var2 = _closure2_slot2;
                        if(!var2) { _fun0006_ip = 13; continue _fun0006 }
case 14:
                        var2 = _closure2_slot5;
                        var2 = var2.current;
                        if(var2) { _fun0006_ip = 15; continue _fun0006 }
case 13:
                        var3 = _closure2_slot0;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0006_ip = 16; continue _fun0006 }
case 17:
                        var3 = _closure2_slot0;
                        var2 = var3.playIfNeeded;
                        var2 = var2.bind(var3)();
case 16:
                        var3 = _closure2_slot4;
                        var2 = true;
                        var3['current'] = var2;
                        var3 = _closure2_slot12;
                        var2 = undefined;
                        var2 = var3.bind(var2)();
                        _fun0006_ip = 12; continue _fun0006;
case 15:
                        var2 = _closure2_slot6;
                        var1 = true;
                        var2['current'] = var1;
case 12:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var3.bind(var2)(var1);
case 10:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var10.bind(var7)(var2, var6);
        var12 = var7.useEffect;
        var10 = new Array(1);
        var10[0] = var8;
        var6 = function() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = _closure2_slot1;
                if(!var2) { _fun0007_ip = 18; continue _fun0007 }
case 19:
                var2 = _closure2_slot4;
                var1 = true;
                var2['current'] = var1;
case 18:
                var1 = undefined;
                return var1;
            }
        };
        var6 = var12.bind(var7)(var6, var10);
        var10 = var7.useEffect;
        var6 = new Array(3);
        var6[0] = var8;
        var6[1] = var11;
        var6[2] = var5;
        var5 = function() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = _closure2_slot1;
                var3 = undefined;
                if(var2) { _fun0008_ip = 20; continue _fun0008 }
case 21:
                return var3;
case 20:
                var2 = _closure2_slot12;
                var2 = var2.bind(var3)();
                var1 = _closure2_slot10;
                return var1;
            }
        };
        var5 = var10.bind(var7)(var5, var6);
        var6 = var7.useEffect;
        var5 = new Array(4);
        var5[0] = var9;
        var5[1] = var8;
        var5[2] = var4;
        var5[3] = var3;
        var1 = function() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = _closure2_slot2;
                if(var2) { _fun0009_ip = 22; continue _fun0009 }
case 21:
                var2 = undefined;
                return var2;
case 22:
                var5 = _closure1_slot1;
                var4 = var5.addEventListener;
                var3 = 'change';
                var2 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var2 = arg1;
                        var1 = 'background';
                        if(!(var1 !== var2)) { _fun0010_ip = 23; continue _fun0010 }
case 24:
                        var1 = 'active';
                        if(!(var1 === var2)) { _fun0010_ip = 25; continue _fun0010 }
case 26:
                        var2 = _closure2_slot5;
                        var3 = false;
                        var2['current'] = var3;
                        var2 = _closure2_slot1;
                        if(!var2) { _fun0010_ip = 27; continue _fun0010 }
case 28:
                        var4 = _closure2_slot6;
                        var2 = var4.current;
case 27:
                        if(!var2) { _fun0010_ip = 25; continue _fun0010 }
case 29:
                        var2 = _closure2_slot6;
                        var2['current'] = var3;
                        var2 = _closure2_slot13;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                        _fun0010_ip = 25; continue _fun0010;
case 23:
                        var2 = _closure2_slot5;
                        var3 = true;
                        var2['current'] = var3;
                        var2 = _closure2_slot1;
                        if(!var2) { _fun0010_ip = 12; continue _fun0010 }
case 30:
                        var4 = _closure2_slot4;
                        var2 = var4.current;
case 12:
                        if(!var2) { _fun0010_ip = 25; continue _fun0010 }
case 31:
                        var2 = _closure2_slot6;
                        var2['current'] = var3;
                        var2 = _closure2_slot11;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 25:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var3, var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.remove;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                return var1;
            }
        };
        var1 = var6.bind(var7)(var1, var5);
        var1 = {};
        var1['play'] = var4;
        var1['pause'] = var3;
        var1['playIfNeeded'] = var2;
        return var1;
    };
    var3['useRivePlayback'] = var2;
    return var1;
})();