// app/modules/user_settings/defs/native/FamilyCenterSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var7 = var1.Object;
    var4 = var7.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var7)(var3, var1, var2);
    var1 = 0;
    var4 = var6[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var4);
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var10 = var2.UserSettingsSections;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot3 = var2;
    var2 = 9;
    var2 = var6[var2];
    var7 = var5.bind(var1)(var2);
    var4 = var7.createRoute;
    var2 = {};
    var8 = function useTitle() {
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 7;
        var2 = var6[var2];
        var5 = undefined;
        var2 = var3.bind(var5)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var4 = _closure1_slot1;
        var1 = 8;
        var1 = var6[var1];
        var1 = var4.bind(var5)(var1);
        var1 = var1.RZqaJn;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['useTitle'] = var8;
    var8 = null;
    var2['parent'] = var8;
    var8 = 10;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.GroupIcon;
    var2['IconComponent'] = var8;
    var8 = function useFamilyCenterTrailing() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 3;
            var1 = var4[var1];
            var5 = undefined;
            var2 = var3.bind(var5)(var1);
            var1 = var2.useIsParentalConsentBannerActive;
            var2 = var1.bind(var2)();
            var1 = 4;
            var1 = var4[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useParentalConsentWarning;
            var4 = var1.bind(var3)();
            var3 = null;
            var7 = var3 == var4;
            var1 = undefined;
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var4.daysRemaining;
case 2:
            var7 = var3 != var1;
            var4 = null;
            if(!var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var1;
case 4:
            var1 = null;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var3 == var4;
            var1 = null;
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var2 = 0;
            var2 = var4 < var2;
            var1 = null;
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 9:
            var4 = _closure1_slot3;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 5;
            var2 = var10[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.WarningIcon;
            var2 = {'size': 'sm', 'color': null, 'accessible': true};
            var9 = _closure1_slot1;
            var6 = 6;
            var6 = var10[var6];
            var6 = var9.bind(var5)(var6);
            var6 = var6.colors;
            var6 = var6.ICON_FEEDBACK_WARNING;
            var2['color'] = var6;
            var6 = 7;
            var6 = var10[var6];
            var6 = var7.bind(var5)(var6);
            var8 = var6.intl;
            var7 = var8.string;
            var6 = 8;
            var6 = var10[var6];
            var6 = var9.bind(var5)(var6);
            var6 = var6.wucWfE;
            var6 = var7.bind(var8)(var6);
            var2['accessibilityLabel'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 6:
            return var1;
        }
    };
    var2['useTrailing'] = var8;
    var8 = {};
    var10 = var10.FAMILY_CENTER;
    var8['route'] = var10;
    var9 = function getComponent() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var1 = var1.default;
        return var1;
    };
    var8['getComponent'] = var9;
    var2['screen'] = var8;
    var2 = var4.bind(var7)(var2);
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/defs/native/FamilyCenterSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();