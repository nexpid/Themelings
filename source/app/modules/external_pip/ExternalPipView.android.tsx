// app/modules/external_pip/ExternalPipView.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function requestFreezeLock(arg1) {
        var2 = _closure1_slot5;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/external_pip/ExternalPipView.android.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ExternalPipView() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 5;
            var3 = var8[var3];
            var5 = undefined;
            var4 = var7.bind(var5)(var3);
            var3 = {};
            var6 = 6;
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
                var6 = _closure1_slot4;
                var4 = var6.useState;
                var3 = false;
                var5 = var4.bind(var6)(var3);
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = 2;
                var4 = var4.bind(var3)(var5, var2);
                var2 = 0;
                var3 = var4[var2];
                var2 = 1;
                var2 = var4[var2];
                var _closure3_slot0 = var2;
                var5 = var6.useCallback;
                var4 = function(arg1) {
                    var1 = arg1;
                    var _closure4_slot0 = var1;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 4;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.batchUpdates;
                    var2 = function() {
                        var2 = _closure3_slot0;
                        var3 = _closure4_slot0;
                        var1 = undefined;
                        var2 = var2.bind(var1)(var3);
                        var2 = _closure1_slot7;
                        var2 = var2.bind(var1)(var3);
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var2 = new Array(0);
                var2 = var5.bind(var6)(var4, var2);
                var5 = var6.useEffect;
                var4 = function() {
                    var1 = function() {
                        var3 = _closure1_slot7;
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
            var7 = _closure1_slot4;
            var9 = var7.useEffect;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.setEnabled;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var4 = var9.bind(var7)(var4, var6);
            var9 = var7.useEffect;
            var6 = new Array(1);
            var6[0] = var8;
            var4 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 6;
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
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var3 = _closure3_slot0;
                        var1 = null;
                        var3 = var1 == var3;
                        var1 = undefined;
                        if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                        var3 = _closure3_slot0;
                        var2 = var3.remove;
                        var1 = var2.bind(var3)();
case 2:
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var9.bind(var7)(var4, var6);
            var6 = var7.useEffect;
            var4 = new Array(1);
            var4[0] = var8;
            var1 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 6;
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
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var3 = _closure3_slot0;
                        var1 = null;
                        var3 = var1 == var3;
                        var1 = undefined;
                        if(var3) { _fun0003_ip = 2; continue _fun0003 }
case 3:
                        var3 = _closure3_slot0;
                        var2 = var3.remove;
                        var1 = var2.bind(var3)();
case 2:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var6.bind(var7)(var1, var4);
            var1 = null;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot6;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 7;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var1 = var4.bind(var5)(var3, var2);
case 4:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();