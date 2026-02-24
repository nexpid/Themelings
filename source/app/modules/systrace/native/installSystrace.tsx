// app/modules/systrace/native/installSystrace.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function resolveName(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var4 = 'string';
            var2 = typeof var3;
            var1 = var3;
            if(!(var4 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = undefined;
            var1 = var3.bind(var2)();
case 2:
            return var1;
        }
    };
    var _closure1_slot3 = var1;
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
    var4 = var4.Systrace;
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/systrace/native/installSystrace.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function installSystrace() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 1;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.isAndroid;
            var4 = var4.bind(var5)();
            if(!var4) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var4 = function getNativeModule() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.default;
                return var1;
            };
            var _closure2_slot0 = var4;
            var3 = _closure1_slot2;
            var4 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var4 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var4;
                    if(var3) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var3 = var4.isEnabled;
                    var2 = var3.bind(var4)();
case 6:
                    var1 = var1 != var2;
                    if(!var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var1 = var2;
case 8:
                    return var1;
                }
            };
            var3['isEnabled'] = var4;
            var4 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var4 = var2.bind(var1)();
                    var2 = null;
                    if(!(var2 != var4)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                    var3 = var4.beginEvent;
                    var5 = _closure1_slot3;
                    var2 = arg1;
                    var2 = var5.bind(var1)(var2);
                    var2 = var3.bind(var4)(var2);
case 10:
                    return var1;
                }
            };
            var3['beginEvent'] = var4;
            var4 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var3 = var2.bind(var1)();
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 12; continue _fun0005 }
case 11:
                    var2 = var3.endEvent;
                    var2 = var2.bind(var3)();
case 12:
                    return var1;
                }
            };
            var3['endEvent'] = var4;
            var4 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var7 = undefined;
                    var5 = var1.bind(var7)();
                    var1 = null;
                    var3 = var1 == var5;
                    var2 = undefined;
                    if(var3) { _fun0006_ip = 13; continue _fun0006 }
case 14:
                    var4 = var5.beginAsyncEvent;
                    var6 = _closure1_slot3;
                    var3 = arg1;
                    var3 = var6.bind(var7)(var3);
                    var2 = var4.bind(var5)(var3);
case 13:
                    var3 = var1 != var2;
                    var1 = 0;
                    if(!var3) { _fun0006_ip = 15; continue _fun0006 }
case 16:
                    var1 = var2;
case 15:
                    return var1;
                }
            };
            var3['beginAsyncEvent'] = var4;
            var4 = function(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var5 = var2.bind(var1)();
                    var2 = null;
                    if(!(var2 != var5)) { _fun0007_ip = 17; continue _fun0007 }
case 11:
                    var4 = var5.endAsyncEvent;
                    var3 = _closure1_slot3;
                    var2 = arg1;
                    var3 = var3.bind(var1)(var2);
                    var2 = arg2;
                    var2 = var4.bind(var5)(var3, var2);
case 17:
                    return var1;
                }
            };
            var3['endAsyncEvent'] = var4;
            var2 = function(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var5 = var2.bind(var1)();
                    var2 = null;
                    if(!(var2 != var5)) { _fun0008_ip = 17; continue _fun0008 }
case 11:
                    var4 = var5.counterEvent;
                    var3 = _closure1_slot3;
                    var2 = arg1;
                    var3 = var3.bind(var1)(var2);
                    var2 = arg2;
                    var2 = var4.bind(var5)(var3, var2);
case 17:
                    return var1;
                }
            };
            var3['counterEvent'] = var2;
case 4:
            return var1;
        }
    };
    var3['installSystrace'] = var2;
    return var1;
})();