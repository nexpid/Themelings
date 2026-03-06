// app/modules/user_settings/native/defs/AccessibilitySetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var2 = metroImportDefault;
    var1 = undefined;
    var2 = var2.bind(var1)(var4);
    var _closure1_slot2 = var2;
    var2 = 1;
    var4 = var6[var2];
    var2 = metroImportAll;
    var2 = var2.bind(var1)(var4);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var10 = var2.UserSettingsSections;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.ContentDismissActionType;
    var _closure1_slot4 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot5 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.DismissibleContent;
    var4 = var2.MOBILE_ACCESSIBILITY_COLOR_SETTINGS;
    var2 = new Array(1);
    var2[0] = var4;
    var _closure1_slot6 = var2;
    var2 = 9;
    var2 = var6[var2];
    var7 = var5.bind(var1)(var2);
    var4 = var7.createRoute;
    var2 = {};
    var8 = function title() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 8;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.G0neg7;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['title'] = var8;
    var8 = null;
    var2['parent'] = var8;
    var8 = 10;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.AccessibilityIcon;
    var2['IconComponent'] = var8;
    var8 = function useTrailing() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 6;
            var1 = var4[var1];
            var5 = undefined;
            var4 = var3.bind(var5)(var1);
            var3 = var4.useSelectedDismissibleContent;
            var1 = _closure1_slot6;
            var4 = var3.bind(var4)(var1);
            var3 = _closure1_slot2;
            var1 = 2;
            var3 = var3.bind(var5)(var4, var1);
            var1 = 0;
            var8 = var3[var1];
            var1 = 1;
            var1 = var3[var1];
            var4 = null;
            var3 = var4 != var8;
            var1 = null;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot6;
            var6 = var4 == var3;
            var3 = undefined;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = _closure1_slot6;
            var6 = var7.includes;
            var3 = var6.bind(var7)(var8);
case 4:
            var1 = null;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 6:
            var4 = _closure1_slot5;
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var2 = 7;
            var2 = var10[var2];
            var2 = var9.bind(var5)(var2);
            var3 = var2.TextBadge;
            var2 = {};
            var6 = 8;
            var7 = var10[var6];
            var7 = var9.bind(var5)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var5)(var6);
            var6 = var6.t;
            var6 = var6.y2b7CA;
            var6 = var7.bind(var8)(var6);
            var2['text'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 2:
            return var1;
        }
    };
    var2['useTrailing'] = var8;
    var8 = function usePreNavigationAction() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var3 = 6;
        var3 = var5[var3];
        var6 = undefined;
        var5 = var4.bind(var6)(var3);
        var4 = var5.useSelectedDismissibleContent;
        var3 = _closure1_slot6;
        var5 = var4.bind(var5)(var3);
        var4 = _closure1_slot2;
        var3 = 2;
        var4 = var4.bind(var6)(var5, var3);
        var3 = 0;
        var5 = var4[var3];
        var _closure2_slot0 = var5;
        var3 = 1;
        var6 = var4[var3];
        var _closure2_slot1 = var6;
        var4 = _closure1_slot3;
        var3 = var4.useCallback;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure2_slot0;
                var4 = null;
                var2 = var4 != var2;
                if(!var2) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                var3 = _closure1_slot6;
                var2 = var4 != var3;
case 7:
                if(!var2) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var5 = _closure1_slot6;
                var4 = var5.includes;
                var3 = _closure2_slot0;
                var2 = var4.bind(var5)(var3);
case 9:
                if(!var2) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var3 = _closure2_slot1;
                var1 = _closure1_slot4;
                var2 = var1.TAKE_ACTION;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
case 11:
                var1 = true;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var2['usePreNavigationAction'] = var8;
    var8 = {};
    var10 = var10.ACCESSIBILITY;
    var8['route'] = var10;
    var9 = function getComponent() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
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
    var4 = 'modules/user_settings/native/defs/AccessibilitySetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();