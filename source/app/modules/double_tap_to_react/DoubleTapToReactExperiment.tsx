// app/modules/double_tap_to_react/DoubleTapToReactExperiment.tsx
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
    var14 = true;
    var4['value'] = var14;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var4 = {};
    var1 = 'half_sheet';
    var4['HALF_SHEET'] = var1;
    var1 = 'toast';
    var4['TOAST'] = var1;
    var1 = 'chat_banner';
    var4['CHAT_BANNER'] = var1;
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var10 = var6.bind(var1)(var5);
    var9 = var10.createExperiment;
    var8 = {'kind': 'user', 'id': '2025-08_double_tap_to_react', 'label': 'Double Tap To React'};
    var5 = {'enabled': false, 'upsellType': null};
    var8['defaultConfig'] = var5;
    var5 = {'id': 1, 'label': 'Enabled - Show Half Sheet Upsell'};
    var11 = {};
    var11['enabled'] = var14;
    var12 = var4.HALF_SHEET;
    var11['upsellType'] = var12;
    var5['config'] = var11;
    var11 = new Array(3);
    var11[0] = var5;
    var12 = {'id': 2, 'label': 'Enabled - Show Toast Upsell'};
    var5 = 2;
    var13 = {};
    var13['enabled'] = var14;
    var15 = var4.TOAST;
    var13['upsellType'] = var15;
    var12['config'] = var13;
    var11[1] = var12;
    var12 = {'id': 3, 'label': 'Enabled - Show Chat Banner Upsell'};
    var13 = {};
    var13['enabled'] = var14;
    var14 = var4.CHAT_BANNER;
    var13['upsellType'] = var14;
    var12['config'] = var13;
    var11[2] = var12;
    var8['treatments'] = var11;
    var8 = var9.bind(var10)(var8);
    var _closure1_slot2 = var8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/double_tap_to_react/DoubleTapToReactExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var3['DoubleTapToReactUpsellType'] = var4;
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