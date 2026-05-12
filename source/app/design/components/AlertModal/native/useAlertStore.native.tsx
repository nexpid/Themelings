// app/design/components/AlertModal/native/useAlertStore.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var5 = var7[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var7[var4];
    var8 = var6.bind(var1)(var4);
    var5 = var8.create;
    var4 = function() {
        var1 = {};
        var2 = new Array(0);
        var1['alerts'] = var2;
        return var1;
    };
    var4 = var5.bind(var8)(var4);
    var _closure1_slot3 = var4;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'design/components/AlertModal/native/useAlertStore.native.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useAlertStore'] = var4;
    var4 = function() {
        var4 = _closure1_slot3;
        var1 = var4.getState;
        var1 = var1.bind(var4)();
        var6 = var1.alerts;
        var5 = var6.reduce;
        var4 = new Array(2);
        var1 = new Array(0);
        var4[0] = var1;
        var1 = new Array(0);
        var4[1] = var1;
        var1 = function(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = arg1;
                var4 = arg2;
                var5 = var4.dismissable;
                var3 = false;
                var2 = 0;
                if(!(var3 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = 1;
case 2:
                var3 = var1[var2];
                var2 = var3.push;
                var2 = var2.bind(var3)(var4);
                return var1;
            }
        };
        var6 = var5.bind(var6)(var1, var4);
        var4 = _closure1_slot2;
        var1 = undefined;
        var5 = 2;
        var6 = var4.bind(var1)(var6, var5);
        var4 = 0;
        var7 = var6[var4];
        var4 = 1;
        var4 = var6[var4];
        var _closure2_slot0 = var4;
        var6 = var7.forEach;
        var4 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = arg1;
                var2 = var3.onDismiss;
                var1 = null;
                var2 = var1 == var2;
                var1 = undefined;
                if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 3:
                var2 = var3.onDismiss;
                var1 = var2.bind(var3)();
case 4:
                return var1;
            }
        };
        var4 = var6.bind(var7)(var4);
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var3 = var3[var5];
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot3;
            var2 = var3.setState;
            var1 = {};
            var4 = _closure2_slot0;
            var1['alerts'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['dismissAlerts'] = var4;
    var4 = function(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 2;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = _closure1_slot3;
                var3 = var4.getState;
                var3 = var3.bind(var4)();
                var5 = var3.alerts;
                var4 = var5.find;
                var3 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.key;
                    var1 = _closure2_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var4 = var4.bind(var5)(var3);
                var6 = null;
                var3 = var6 == var4;
                if(var3) { _fun0003_ip = 5; continue _fun0003 }
case 6:
                var5 = var4.onDismiss;
                var3 = var6 == var5;
case 5:
                if(var3) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                var3 = var4.onDismiss;
                var3 = var3.bind(var4)();
case 7:
                var3 = _closure1_slot3;
                var2 = var3.setState;
                var1 = function(arg1) {
                    var1 = {};
                    var2 = arg1;
                    var4 = var2.alerts;
                    var3 = var4.filter;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.key;
                        var1 = _closure2_slot0;
                        var1 = var2 !== var1;
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    var1['alerts'] = var2;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['dismissAlert'] = var4;
    var2 = function(arg1, arg2, arg3, arg4) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var1 = arg3;
        var _closure2_slot2 = var1;
        var1 = arg4;
        var _closure2_slot3 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 2;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot3;
            var2 = var3.setState;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = {};
                    var2 = arg1;
                    var9 = var2.alerts;
                    var2 = new Array(1);
                    var8 = 0;
                    var10 = var2;
                    var4 = arraySpread(var10, var9, var8);
                    var3 = {};
                    var5 = _closure2_slot0;
                    var3['key'] = var5;
                    var5 = _closure2_slot1;
                    var3['node'] = var5;
                    var5 = _closure2_slot2;
                    var3['onDismiss'] = var5;
                    var7 = _closure2_slot3;
                    var5 = null;
                    var7 = var5 == var7;
                    var5 = undefined;
                    if(var7) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                    var6 = _closure2_slot3;
                    var5 = var6.dismissable;
case 9:
                    var3['dismissable'] = var5;
                    var2[3] = var3;
                    var3 = 1;
                    var3 = var4 + var3;
                    var1['alerts'] = var2;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['openAlert'] = var2;
    return var1;
})();