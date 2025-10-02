// app/modules/user_settings/native/defs/AccessibilitySetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var1 = function useDismissibleContentTypes() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 6;
            var1 = var4[var1];
            var4 = undefined;
            var5 = var3.bind(var4)(var1);
            var3 = var5.useExperiment;
            var1 = {};
            var6 = 'SettingsOverview';
            var1['location'] = var6;
            var1 = var3.bind(var5)(var1);
            var1 = var1.enabled;
            if(var1) { _fun0001_ip = 62; continue _fun0001 }
 56:
            var1 = new Array(0);
            _fun0001_ip = 105; continue _fun0001;
 62:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 7;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.DismissibleContent;
            var3 = var2.MOBILE_ACCESSIBILITY_COLOR_SETTINGS;
            var2 = new Array(1);
            var2[0] = var3;
            var1 = var2;
 105:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var4 = var6[var2];
    var2 = metroImportAll;
    var2 = var2.bind(var1)(var4);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.UserSettingsSections;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.ContentDismissActionType;
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.RendererType;
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
        var1 = var1.G0neg4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['title'] = var4;
    var4 = null;
    var2['parent'] = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AccessibilityIcon;
    var2['IconComponent'] = var4;
    var4 = function useTrailing() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = _closure1_slot7;
            var5 = undefined;
            var8 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 8;
            var1 = var4[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useSelectedDismissibleContent;
            var4 = var1.bind(var3)(var8);
            var3 = _closure1_slot3;
            var1 = 2;
            var3 = var3.bind(var5)(var4, var1);
            var1 = 0;
            var7 = var3[var1];
            var1 = 1;
            var1 = var3[var1];
            var4 = null;
            var3 = var4 != var7;
            var1 = null;
            if(!var3) { _fun0002_ip = 194; continue _fun0002 }
 81:
            var6 = var4 == var8;
            var3 = undefined;
            if(var6) { _fun0002_ip = 100; continue _fun0002 }
 90:
            var6 = var8.includes;
            var3 = var6.bind(var8)(var7);
 100:
            var1 = null;
            if(!var3) { _fun0002_ip = 194; continue _fun0002 }
 105:
            var4 = _closure1_slot6;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 9;
            var2 = var10[var2];
            var2 = var9.bind(var5)(var2);
            var3 = var2.TextBadge;
            var2 = {};
            var6 = 10;
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
 194:
            return var1;
        }
    };
    var2['useTrailing'] = var4;
    var4 = function usePreNavigationAction() {
        var3 = _closure1_slot7;
        var6 = undefined;
        var7 = var3.bind(var6)();
        var _closure2_slot0 = var7;
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var3 = 8;
        var3 = var5[var3];
        var4 = var4.bind(var6)(var3);
        var3 = var4.useSelectedDismissibleContent;
        var5 = var3.bind(var4)(var7);
        var4 = _closure1_slot3;
        var3 = 2;
        var4 = var4.bind(var6)(var5, var3);
        var3 = 0;
        var5 = var4[var3];
        var _closure2_slot1 = var5;
        var3 = 1;
        var6 = var4[var3];
        var _closure2_slot2 = var6;
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = _closure2_slot1;
                var4 = null;
                var2 = var4 != var2;
                if(!var2) { _fun0003_ip = 24; continue _fun0003 }
 16:
                var3 = _closure2_slot0;
                var2 = var4 != var3;
 24:
                if(!var2) { _fun0003_ip = 45; continue _fun0003 }
 27:
                var5 = _closure2_slot0;
                var4 = var5.includes;
                var3 = _closure2_slot1;
                var2 = var4.bind(var5)(var3);
 45:
                if(!var2) { _fun0003_ip = 72; continue _fun0003 }
 48:
                var3 = _closure2_slot2;
                var1 = _closure1_slot5;
                var2 = var1.TAKE_ACTION;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
 72:
                var1 = true;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var2['usePreNavigationAction'] = var4;
    var4 = {};
    var8 = var8.ACCESSIBILITY;
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
    var4 = 'modules/user_settings/native/defs/AccessibilitySetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();