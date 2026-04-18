// app/modules/external_pip/ExternalPipView.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var1 = function requestFreezeLock(arg1) {
        var2 = _closure1_slot4;
        var1 = var2.getState;
        var3 = var1.bind(var2)();
        var2 = var3.requestFreezeLock;
        var1 = {};
        var4 = arg1;
        var1['lockEnabled'] = var4;
        var4 = 'external-pip';
        var1['key'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot6 = var1;
    var1 = function FreezeAfterLayoutPipView() {
        var5 = _closure1_slot3;
        var4 = var5.useRef;
        var3 = false;
        var3 = var4.bind(var5)(var3);
        var _closure2_slot0 = var3;
        var6 = _closure1_slot3;
        var5 = var6.useCallback;
        var4 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot0;
                var2 = var2.current;
                if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = _closure2_slot0;
                var3 = true;
                var1['current'] = var3;
                var2 = _closure1_slot6;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
case 2:
                var1 = undefined;
                return var1;
            }
        };
        var3 = new Array(0);
        var5 = var5.bind(var6)(var4, var3);
        var6 = _closure1_slot3;
        var4 = var6.useEffect;
        var3 = function() {
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var1 = var1.current;
                    if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 3:
                    var3 = _closure1_slot6;
                    var2 = undefined;
                    var1 = false;
                    var1 = var3.bind(var2)(var1);
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            return var1;
        };
        var2 = new Array(0);
        var2 = var4.bind(var6)(var3, var2);
        var4 = _closure1_slot5;
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 6;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var1['onLayout'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot7 = var1;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/external_pip/ExternalPipView.android.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ExternalPipView() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 4;
            var3 = var8[var3];
            var5 = undefined;
            var4 = var7.bind(var5)(var3);
            var3 = {};
            var6 = 5;
            var6 = var8[var6];
            var7 = var7.bind(var5)(var6);
            var6 = var7.isSupported;
            var6 = var6.bind(var7)();
            var6 = !var6;
            var3['disabled'] = var6;
            var3 = var4.bind(var5)(var3);
            var4 = var3.externalPipEnabled;
            var _closure2_slot0 = var4;
            var3 = function useExternalPipActive() {
                var5 = _closure1_slot3;
                var3 = var5.useState;
                var2 = false;
                var6 = var3.bind(var5)(var2);
                var5 = _closure1_slot2;
                var3 = undefined;
                var2 = 2;
                var5 = var5.bind(var3)(var6, var2);
                var2 = 0;
                var3 = var5[var2];
                var2 = 1;
                var2 = var5[var2];
                var _closure3_slot0 = var2;
                var7 = _closure1_slot3;
                var6 = var7.useCallback;
                var5 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var2 = arg1;
                        var3 = _closure3_slot0;
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        if(var2) { _fun0004_ip = 5; continue _fun0004 }
case 6:
                        var3 = _closure1_slot6;
                        var2 = false;
                        var2 = var3.bind(var1)(var2);
case 5:
                        return var1;
                    }
                };
                var2 = new Array(0);
                var2 = var6.bind(var7)(var5, var2);
                var6 = _closure1_slot3;
                var5 = var6.useEffect;
                var4 = function() {
                    var1 = function() {
                        var3 = _closure1_slot6;
                        var1 = undefined;
                        var2 = false;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var1;
                };
                var1 = new Array(0);
                var1 = var5.bind(var6)(var4, var1);
                var1 = {};
                var1['externalPipActive'] = var3;
                var1['setExternalPipActive'] = var2;
                return var1;
            };
            var6 = var3.bind(var5)();
            var3 = var6.externalPipActive;
            var8 = var6.setExternalPipActive;
            var _closure2_slot1 = var8;
            var9 = _closure1_slot3;
            var7 = var9.useEffect;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.setEnabled;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var4 = var7.bind(var9)(var4, var6);
            var9 = _closure1_slot3;
            var7 = var9.useEffect;
            var6 = new Array(1);
            var6[0] = var8;
            var4 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 5;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.addOnPipModeChangedListener;
                var2 = function(arg1) {
                    var3 = _closure2_slot1;
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var3 = _closure3_slot0;
                        var1 = null;
                        var3 = var1 == var3;
                        var1 = undefined;
                        if(var3) { _fun0005_ip = 7; continue _fun0005 }
case 8:
                        var3 = _closure3_slot0;
                        var2 = var3.remove;
                        var1 = var2.bind(var3)();
case 7:
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var7.bind(var9)(var4, var6);
            var7 = _closure1_slot3;
            var6 = var7.useEffect;
            var4 = new Array(1);
            var4[0] = var8;
            var1 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 5;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.addOnPipModeWillChangeListener;
                var2 = function() {
                    var3 = _closure2_slot1;
                    var1 = undefined;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var3 = _closure3_slot0;
                        var1 = null;
                        var3 = var1 == var3;
                        var1 = undefined;
                        if(var3) { _fun0006_ip = 7; continue _fun0006 }
case 8:
                        var3 = _closure3_slot0;
                        var2 = var3.remove;
                        var1 = var2.bind(var3)();
case 7:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var6.bind(var7)(var1, var4);
            var1 = null;
            if(!var3) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var4 = _closure1_slot5;
            var3 = _closure1_slot7;
            var2 = {};
            var1 = var4.bind(var5)(var3, var2);
case 9:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();