// app/modules/display_name_styles/DisplayNameStylesExperiments.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var10;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var14 = true;
    var4['value'] = var14;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var5 = 0;
    var4 = var10[var5];
    var1 = undefined;
    var4 = var9.bind(var1)(var4);
    var12 = var4.CommonTriggerPoints;
    var7 = {};
    var7['PROFILE_ONLY'] = var5;
    var4 = 'PROFILE_ONLY';
    var7[var5] = var4;
    var5 = 1;
    var7['ALL_SURFACES'] = var5;
    var4 = 'ALL_SURFACES';
    var7[var5] = var4;
    var4 = 2;
    var7['ALL_EXCEPT_DM'] = var4;
    var6 = 'ALL_EXCEPT_DM';
    var7[var4] = var6;
    var _closure1_slot2 = var7;
    var6 = var10[var5];
    var11 = var9.bind(var1)(var6);
    var8 = var11.createExperiment;
    var6 = {'id': '2025-07_display_name_styles_viewer', 'kind': 'user', 'label': 'Display Name Styles Viewer'};
    var13 = false;
    var15 = {'enabled': false, 'includeNonProfile': false};
    var6['defaultConfig'] = var15;
    var15 = var12.CONNECTION_OPEN;
    var6['commonTriggerPoint'] = var15;
    var16 = {'id': 1, 'label': 'Enables viewing display name styles on all surfaces.'};
    var15 = {'enabled': true, 'includeNonProfile': true};
    var16['config'] = var15;
    var15 = new Array(3);
    var15[0] = var16;
    var16 = {'id': 2, 'label': 'Enables viewing display name styles on profile surfaces only.'};
    var17 = {'enabled': true, 'includeNonProfile': false};
    var16['config'] = var17;
    var15[1] = var16;
    var16 = {'id': 3, 'label': 'Same as T1, but these users will not have the setter XP enabled.'};
    var17 = {'enabled': true, 'includeNonProfile': true};
    var16['config'] = var17;
    var15[2] = var16;
    var6['treatments'] = var15;
    var6 = var8.bind(var11)(var6);
    var5 = var10[var5];
    var11 = var9.bind(var1)(var5);
    var8 = var11.createExperiment;
    var5 = {'id': '2025-07_display_name_styles_setter', 'kind': 'user', 'label': 'Display Name Styles Setter'};
    var15 = {};
    var15['enabled'] = var13;
    var5['defaultConfig'] = var15;
    var12 = var12.CONNECTION_OPEN;
    var5['commonTriggerPoint'] = var12;
    var15 = {'id': 1, 'label': 'Enables the UI for setting display name styles.'};
    var12 = {};
    var12['enabled'] = var14;
    var15['config'] = var12;
    var12 = new Array(1);
    var12[0] = var15;
    var5['treatments'] = var12;
    var5 = var8.bind(var11)(var5);
    var _closure1_slot3 = var5;
    var4 = var10[var4];
    var11 = var9.bind(var1)(var4);
    var8 = var11.createApexExperiment;
    var4 = {'name': '2025-10-display-name-styles-mobile', 'kind': 'user'};
    var12 = {};
    var12['enabled'] = var13;
    var4['defaultConfig'] = var12;
    var12 = {};
    var13 = {};
    var13['enabled'] = var14;
    var15 = var7.ALL_EXCEPT_DM;
    var13['surfaces'] = var15;
    var12[1] = var13;
    var13 = {};
    var13['enabled'] = var14;
    var14 = var7.ALL_SURFACES;
    var13['surfaces'] = var14;
    var12[2] = var13;
    var4['variations'] = var12;
    var4 = var8.bind(var11)(var4);
    var _closure1_slot4 = var4;
    var8 = 4;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/display_name_styles/DisplayNameStylesExperiments.tsx';
    var8 = var9.bind(var10)(var8);
    var3['DisplayNameStylesSurfaces'] = var7;
    var3['DisplayNameStylesViewerExperiment'] = var6;
    var3['DisplayNameStylesSetterExperiment'] = var5;
    var3['DisplayNameStylesMobileExperiment'] = var4;
    var4 = function useIsDisplayNameStylesMobileEnabled(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = var1.location;
            var4 = _closure1_slot4;
            var3 = var4.useConfig;
            var1 = {};
            var1['location'] = var6;
            var1 = var3.bind(var4)(var1);
            var1 = var1.enabled;
            var5 = _closure1_slot3;
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
    var3['useIsDisplayNameStylesMobileEnabled'] = var4;
    var2 = function isDisplayNameStylesMobileChatEnabled(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var6 = var1.location;
            var4 = _closure1_slot4;
            var3 = var4.getConfig;
            var1 = {};
            var1['location'] = var6;
            var4 = var3.bind(var4)(var1);
            var5 = _closure1_slot3;
            var3 = var5.getCurrentConfig;
            var1 = {};
            var1['location'] = var6;
            var1 = var3.bind(var5)(var1);
            var3 = var1.enabled;
            var1 = var4.enabled;
            if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 3:
            var5 = var4.surfaces;
            var4 = _closure1_slot2;
            var4 = var4.ALL_SURFACES;
            var1 = var5 === var4;
case 6:
            if(!var1) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var1 = var3;
case 7:
            if(!var1) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 3;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.getUserIsStaff;
            var1 = var2.bind(var3)();
case 9:
            return var1;
        }
    };
    var3['isDisplayNameStylesMobileChatEnabled'] = var2;
    return var1;
})();