// app/modules/display_name_styles/DisplayNameStylesExperiments.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var13 = true;
    var4['value'] = var13;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var4 = var9[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var11 = var4.CommonTriggerPoints;
    var5 = 1;
    var4 = var9[var5];
    var10 = var8.bind(var1)(var4);
    var7 = var10.createExperiment;
    var6 = {'id': '2025-07_display_name_styles_viewer', 'kind': 'user', 'label': 'Display Name Styles Viewer'};
    var14 = false;
    var4 = {'enabled': false, 'includeNonProfile': false};
    var6['defaultConfig'] = var4;
    var4 = var11.CONNECTION_OPEN;
    var6['commonTriggerPoint'] = var4;
    var4 = {'id': 1, 'label': 'Enables viewing display name styles on all surfaces.'};
    var12 = {'enabled': true, 'includeNonProfile': true};
    var4['config'] = var12;
    var12 = new Array(3);
    var12[0] = var4;
    var15 = {'id': 2, 'label': 'Enables viewing display name styles on profile surfaces only.'};
    var4 = 2;
    var16 = {'enabled': true, 'includeNonProfile': false};
    var15['config'] = var16;
    var12[1] = var15;
    var15 = {'id': 3, 'label': 'Same as T1, but these users will not have the setter XP enabled.'};
    var16 = {'enabled': true, 'includeNonProfile': true};
    var15['config'] = var16;
    var12[2] = var15;
    var6['treatments'] = var12;
    var6 = var7.bind(var10)(var6);
    var5 = var9[var5];
    var10 = var8.bind(var1)(var5);
    var7 = var10.createExperiment;
    var5 = {'id': '2025-07_display_name_styles_setter', 'kind': 'user', 'label': 'Display Name Styles Setter'};
    var12 = {};
    var12['enabled'] = var14;
    var5['defaultConfig'] = var12;
    var11 = var11.CONNECTION_OPEN;
    var5['commonTriggerPoint'] = var11;
    var12 = {'id': 1, 'label': 'Enables the UI for setting display name styles.'};
    var11 = {};
    var11['enabled'] = var13;
    var12['config'] = var11;
    var11 = new Array(1);
    var11[0] = var12;
    var5['treatments'] = var11;
    var5 = var7.bind(var10)(var5);
    var _closure1_slot2 = var5;
    var4 = var9[var4];
    var10 = var8.bind(var1)(var4);
    var7 = var10.createApexExperiment;
    var4 = {'name': '2025-10-display-name-styles-mobile', 'kind': 'user'};
    var11 = {'enabled': false, 'dmEffects': false};
    var4['defaultConfig'] = var11;
    var11 = {};
    var12 = {'enabled': true, 'dmEffects': false};
    var11[1] = var12;
    var12 = {'enabled': true, 'dmEffects': true};
    var11[2] = var12;
    var4['variations'] = var11;
    var4 = var7.bind(var10)(var4);
    var _closure1_slot3 = var4;
    var7 = 4;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/display_name_styles/DisplayNameStylesExperiments.tsx';
    var7 = var8.bind(var9)(var7);
    var3['DisplayNameStylesViewerExperiment'] = var6;
    var3['DisplayNameStylesSetterExperiment'] = var5;
    var3['DisplayNameStylesMobileExperiment'] = var4;
    var2 = function useIsDisplayNameStylesMobileEnabled(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = var1.location;
            var4 = _closure1_slot3;
            var3 = var4.useConfig;
            var1 = {};
            var1['location'] = var6;
            var1 = var3.bind(var4)(var1);
            var1 = var1.enabled;
            var5 = _closure1_slot2;
            var4 = var5.useExperiment;
            var3 = {};
            var3['location'] = var6;
            var3 = var4.bind(var5)(var3);
            var3 = var3.enabled;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var3;
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 3;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.getUserIsStaff;
            var1 = var2.bind(var3)();
case 4:
            return var1;
        }
    };
    var3['useIsDisplayNameStylesMobileEnabled'] = var2;
    return var1;
})();