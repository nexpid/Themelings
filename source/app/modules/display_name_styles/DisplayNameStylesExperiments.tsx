// app/modules/display_name_styles/DisplayNameStylesExperiments.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var13 = true;
    var4['value'] = var13;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var5 = {};
    var1 = 0;
    var5['PROFILE_ONLY'] = var1;
    var4 = 'PROFILE_ONLY';
    var5[var1] = var4;
    var6 = 1;
    var5['ALL_SURFACES'] = var6;
    var4 = 'ALL_SURFACES';
    var5[var6] = var4;
    var9 = 2;
    var5['ALL_EXCEPT_DM'] = var9;
    var4 = 'ALL_EXCEPT_DM';
    var5[var9] = var4;
    var _closure1_slot0 = var5;
    var4 = var8[var1];
    var1 = undefined;
    var10 = var7.bind(var1)(var4);
    var9 = var10.createApexExperiment;
    var4 = {'name': '2025-10-display-name-styles-mobile', 'kind': 'user'};
    var11 = {};
    var12 = false;
    var11['enabled'] = var12;
    var4['defaultConfig'] = var11;
    var11 = {};
    var12 = {};
    var12['enabled'] = var13;
    var14 = var5.ALL_EXCEPT_DM;
    var12['surfaces'] = var14;
    var11[1] = var12;
    var12 = {};
    var12['enabled'] = var13;
    var13 = var5.ALL_SURFACES;
    var12['surfaces'] = var13;
    var11[2] = var12;
    var4['variations'] = var11;
    var4 = var9.bind(var10)(var4);
    var _closure1_slot1 = var4;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/display_name_styles/DisplayNameStylesExperiments.tsx';
    var6 = var7.bind(var8)(var6);
    var3['DisplayNameStylesSurfaces'] = var5;
    var3['DisplayNameStylesMobileExperiment'] = var4;
    var4 = function useIsDisplayNameStylesMobileEnabled(arg1) {
        var1 = arg1;
        var4 = var1.location;
        var3 = _closure1_slot1;
        var2 = var3.useConfig;
        var1 = {};
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.enabled;
        return var1;
    };
    var3['useIsDisplayNameStylesMobileEnabled'] = var4;
    var2 = function isDisplayNameStylesMobileChatEnabled(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.location;
            var4 = _closure1_slot1;
            var3 = var4.getConfig;
            var1 = {};
            var1['location'] = var5;
            var3 = var3.bind(var4)(var1);
            var1 = var3.enabled;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var3.surfaces;
            var2 = _closure1_slot0;
            var2 = var2.ALL_SURFACES;
            var1 = var3 === var2;
case 2:
            return var1;
        }
    };
    var3['isDisplayNameStylesMobileChatEnabled'] = var2;
    return var1;
})();