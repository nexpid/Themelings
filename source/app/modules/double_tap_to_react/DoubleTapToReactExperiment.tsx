// app/modules/double_tap_to_react/DoubleTapToReactExperiment.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var9 = var5.bind(var1)(var4);
    var8 = var9.createExperiment;
    var7 = {'kind': 'user', 'id': '2025-08_double_tap_to_react', 'label': 'Double Tap To React'};
    var4 = {'enabled': false, 'showToast': false};
    var7['defaultConfig'] = var4;
    var4 = {'id': 1, 'label': 'Enabled - Show Half Sheet Upsell'};
    var10 = {'enabled': true, 'showToast': false};
    var4['config'] = var10;
    var10 = new Array(2);
    var10[0] = var4;
    var11 = {'id': 2, 'label': 'Enabled - Show Toast Upsell'};
    var4 = 2;
    var12 = {'enabled': true, 'showToast': true};
    var11['config'] = var12;
    var10[1] = var11;
    var7['treatments'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot2 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/double_tap_to_react/DoubleTapToReactExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useDoubleTapToReactExperiment(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var5 = arg2;
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 1;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var6.bind(var3)(var4);
            var3 = var4.useIsInCPFCHoldout;
            var6 = var3.bind(var4)(var1);
            var4 = _closure1_slot2;
            var3 = var4.useExperiment;
            var2 = {};
            var2['location'] = var1;
            var1 = {};
            var10 = var1;
            var9 = var5;
            var7 = copyDataProperties(var10, var9);
            if(var6) { _fun0001_ip = 94; continue _fun0001 }
 73:
            var7 = var5.disable;
            var5 = null;
            var5 = var5 != var7;
            if(!var5) { _fun0001_ip = 91; continue _fun0001 }
 88:
            var5 = var7;
 91:
            var6 = var5;
 94:
            var5 = 'disable';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['useDoubleTapToReactExperiment'] = var4;
    var2 = function getDoubleTapToReactExperiment(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var5 = arg2;
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 1;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var6.bind(var3)(var4);
            var3 = var4.isInCPFCHoldout;
            var6 = var3.bind(var4)(var1);
            var4 = _closure1_slot2;
            var3 = var4.getCurrentConfig;
            var2 = {};
            var2['location'] = var1;
            var1 = {};
            var10 = var1;
            var9 = var5;
            var7 = copyDataProperties(var10, var9);
            if(var6) { _fun0002_ip = 94; continue _fun0002 }
 73:
            var7 = var5.disable;
            var5 = null;
            var5 = var5 != var7;
            if(!var5) { _fun0002_ip = 91; continue _fun0002 }
 88:
            var5 = var7;
 91:
            var6 = var5;
 94:
            var5 = 'disable';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['getDoubleTapToReactExperiment'] = var2;
    return var1;
})();