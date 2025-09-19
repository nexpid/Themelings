// app/modules/main_tabs_v2/native/settings/definitions/AppIconsSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var4 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var9.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var4 = var6[var2];
    var2 = metroImportAll;
    var2 = var2.bind(var1)(var4);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.RendererType;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.UserSettingsSections;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.ContentDismissActionType;
    var _closure1_slot5 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot6 = var2;
    var2 = {};
    var4 = var4.ROUTE;
    var2['type'] = var4;
    var4 = function title() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.N4YDam;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['title'] = var4;
    var4 = null;
    var2['parent'] = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var2['IconComponent'] = var4;
    var4 = function useAppIconSettingTrailing() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 6;
            var2 = var4[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var5 = var2.HalloweenAppIconsExperiment;
            var3 = var5.getConfig;
            var2 = {};
            var6 = 'AppIconsSetting';
            var2['location'] = var6;
            var2 = var3.bind(var5)(var2);
            var3 = var2.enabled;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 7;
            var2 = var6[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.DismissibleContent;
            if(var3) { _fun0001_ip = 96; continue _fun0001 }
 88:
            var5 = var2.CUSTOM_APP_ICONS_NEW_BADGE;
            _fun0001_ip = 102; continue _fun0001;
 96:
            var5 = var2.HALLOWEEN_APP_ICONS_APPEARANCE_SETTINGS_MOBILE_BADGE;
 102:
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 8;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['dismissibleContent'] = var5;
            var5 = true;
            var1['newPremiumStyle'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2['useTrailing'] = var4;
    var4 = function useAppIconSettingPreNavigationAction() {
        var5 = _closure1_slot0;
        var10 = _closure1_slot2;
        var13 = 9;
        var3 = var10[var13];
        var4 = undefined;
        var8 = var5.bind(var4)(var3);
        var7 = var8.useSelectedDismissibleContent;
        var3 = 7;
        var6 = var10[var3];
        var6 = var5.bind(var4)(var6);
        var6 = var6.DismissibleContent;
        var9 = var6.CUSTOM_APP_ICONS_NEW_BADGE;
        var6 = new Array(1);
        var6[0] = var9;
        var6 = var7.bind(var8)(var6);
        var12 = _closure1_slot3;
        var11 = 2;
        var8 = var12.bind(var4)(var6, var11);
        var7 = 0;
        var9 = var8[var7];
        var _closure2_slot0 = var9;
        var6 = 1;
        var8 = var8[var6];
        var _closure2_slot1 = var8;
        var13 = var10[var13];
        var14 = var5.bind(var4)(var13);
        var13 = var14.useSelectedDismissibleContent;
        var3 = var10[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.DismissibleContent;
        var15 = var3.HALLOWEEN_APP_ICONS_APPEARANCE_SETTINGS_MOBILE_BADGE;
        var3 = new Array(1);
        var3[0] = var15;
        var3 = var13.bind(var14)(var3);
        var3 = var12.bind(var4)(var3, var11);
        var7 = var3[var7];
        var _closure2_slot2 = var7;
        var6 = var3[var6];
        var _closure2_slot3 = var6;
        var3 = 6;
        var3 = var10[var3];
        var3 = var5.bind(var4)(var3);
        var5 = var3.HalloweenAppIconsExperiment;
        var4 = var5.getConfig;
        var3 = {};
        var10 = 'AppIconsSetting';
        var3['location'] = var10;
        var3 = var4.bind(var5)(var3);
        var5 = var3.enabled;
        var _closure2_slot4 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var2 = new Array(5);
        var2[0] = var9;
        var2[1] = var8;
        var2[2] = var7;
        var2[3] = var6;
        var2[4] = var5;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = _closure2_slot4;
                if(!var1) { _fun0002_ip = 55; continue _fun0002 }
 10:
                var5 = _closure2_slot2;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 7;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var6.bind(var3)(var4);
                var4 = var4.DismissibleContent;
                var4 = var4.HALLOWEEN_APP_ICONS_APPEARANCE_SETTINGS_MOBILE_BADGE;
                if(!(var5 !== var4)) { _fun0002_ip = 121; continue _fun0002 }
 55:
                var7 = _closure2_slot0;
                var8 = _closure1_slot0;
                var6 = _closure1_slot2;
                var5 = 7;
                var5 = var6[var5];
                var6 = undefined;
                var5 = var8.bind(var6)(var5);
                var5 = var5.DismissibleContent;
                var5 = var5.CUSTOM_APP_ICONS_NEW_BADGE;
                if(!(var7 === var5)) { _fun0002_ip = 140; continue _fun0002 }
 100:
                var5 = _closure2_slot1;
                var4 = _closure1_slot5;
                var4 = var4.TAKE_ACTION;
                var4 = var5.bind(var6)(var4);
                _fun0002_ip = 140; continue _fun0002;
 121:
                var2 = _closure2_slot3;
                var1 = _closure1_slot5;
                var1 = var1.TAKE_ACTION;
                var1 = var2.bind(var3)(var1);
 140:
                var1 = true;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var2['usePreNavigationAction'] = var4;
    var4 = {};
    var8 = var8.APP_ICONS;
    var4['route'] = var8;
    var7 = function getComponent() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 12;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var1 = var1.default;
        return var1;
    };
    var4['getComponent'] = var7;
    var2['screen'] = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/settings/definitions/AppIconsSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();