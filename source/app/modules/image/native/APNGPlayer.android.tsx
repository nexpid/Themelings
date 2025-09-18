// app/modules/image/native/APNGPlayer.android.tsx
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
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var5 = var7[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var8 = var2.bind(var1)(var5);
    var _closure1_slot3 = var8;
    var2 = 1;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot4 = var2;
    var5 = var8.forwardRef;
    var2 = function(arg1, arg2) {
        var5 = arg1;
        var3 = var5.onLoad;
        var _closure2_slot0 = var3;
        var6 = null;
        var4 = Object.create(var6);
        var1 = 0;
        var4['onLoad'] = var1;
        var11 = {};
        var10 = var5;
        var9 = var4;
        var5 = copyDataProperties(var11, var10, var9);
        var8 = _closure1_slot3;
        var4 = var8.useRef;
        var7 = var4.bind(var8)(var6);
        var _closure2_slot1 = var7;
        var6 = var8.useCallback;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure2_slot0;
                var2 = null;
                if(!(var2 != var3)) { _fun0001_ip = 38; continue _fun0001 }
 13:
                var3 = _closure2_slot0;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var2 = var1.url;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
 38:
                var1 = undefined;
                return var1;
            }
        };
        var6 = var6.bind(var8)(var3, var4);
        var4 = var8.useImperativeHandle;
        var3 = arg2;
        var2 = function() {
            var1 = {};
            var3 = function play() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 69; continue _fun0002 }
 18:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 2;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var3 = var2.Commands;
                    var2 = var3.play;
                    var1 = _closure2_slot1;
                    var1 = var1.current;
                    var1 = var2.bind(var3)(var1);
 69:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['play'] = var3;
            var3 = function pause() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 69; continue _fun0003 }
 18:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 2;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var3 = var2.Commands;
                    var2 = var3.pause;
                    var1 = _closure2_slot1;
                    var1 = var1.current;
                    var1 = var2.bind(var3)(var1);
 69:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['pause'] = var3;
            var3 = function stop() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot1;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 103; continue _fun0004 }
 18:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 2;
                    var6 = var5[var2];
                    var3 = undefined;
                    var6 = var4.bind(var3)(var6);
                    var9 = var6.Commands;
                    var8 = var9.seek;
                    var1 = _closure2_slot1;
                    var7 = var1.current;
                    var6 = 0;
                    var6 = var8.bind(var9)(var7, var6);
                    var2 = var5[var2];
                    var2 = var4.bind(var3)(var2);
                    var3 = var2.Commands;
                    var2 = var3.pause;
                    var1 = var1.current;
                    var1 = var2.bind(var3)(var1);
 103:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['stop'] = var3;
            var2 = function seek(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot1;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 73; continue _fun0005 }
 18:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 2;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.Commands;
                    var3 = var4.seek;
                    var1 = _closure2_slot1;
                    var2 = var1.current;
                    var1 = arg1;
                    var1 = var3.bind(var4)(var2, var1);
 73:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['seek'] = var2;
            return var1;
        };
        var2 = var4.bind(var8)(var3, var2);
        var4 = _closure1_slot4;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 2;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var1['ref'] = var7;
        var1['onLoad'] = var6;
        var11 = var1;
        var10 = var5;
        var5 = copyDataProperties(var11, var10);
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var2 = var5.bind(var8)(var2);
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/image/native/APNGPlayer.android.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useRef;
        var2 = false;
        var2 = var3.bind(var4)(var2);
        var _closure2_slot1 = var2;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var1 = {};
            var3 = function play() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure2_slot0;
                    var3 = var2.current;
                    var2 = null;
                    var2 = var2 == var3;
                    if(var2) { _fun0006_ip = 30; continue _fun0006 }
 21:
                    var3 = _closure2_slot1;
                    var2 = var3.current;
 30:
                    if(var2) { _fun0006_ip = 64; continue _fun0006 }
 33:
                    var2 = _closure2_slot0;
                    var3 = var2.current;
                    var2 = var3.play;
                    var2 = var2.bind(var3)();
                    var2 = _closure2_slot1;
                    var1 = true;
                    var2['current'] = var1;
 64:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['play'] = var3;
            var3 = function pause() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = _closure2_slot0;
                    var3 = var2.current;
                    var2 = null;
                    var2 = var2 != var3;
                    if(!var2) { _fun0007_ip = 30; continue _fun0007 }
 21:
                    var3 = _closure2_slot1;
                    var2 = var3.current;
 30:
                    if(!var2) { _fun0007_ip = 64; continue _fun0007 }
 33:
                    var2 = _closure2_slot0;
                    var3 = var2.current;
                    var2 = var3.pause;
                    var2 = var2.bind(var3)();
                    var2 = _closure2_slot1;
                    var1 = false;
                    var2['current'] = var1;
 64:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['pause'] = var3;
            var3 = function stop() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var2 = _closure2_slot0;
                    var3 = var2.current;
                    var2 = null;
                    var2 = var2 != var3;
                    if(!var2) { _fun0008_ip = 30; continue _fun0008 }
 21:
                    var3 = _closure2_slot1;
                    var2 = var3.current;
 30:
                    if(!var2) { _fun0008_ip = 64; continue _fun0008 }
 33:
                    var2 = _closure2_slot0;
                    var3 = var2.current;
                    var2 = var3.stop;
                    var2 = var2.bind(var3)();
                    var2 = _closure2_slot1;
                    var1 = false;
                    var2['current'] = var1;
 64:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['stop'] = var3;
            var2 = function seek(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var2 = _closure2_slot0;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0009_ip = 41; continue _fun0009 }
 18:
                    var1 = _closure2_slot0;
                    var3 = var1.current;
                    var2 = var3.seek;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
 41:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['seek'] = var2;
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useAPNGPlayerControls'] = var4;
    var3['APNGPlayer'] = var2;
    return var1;
})();