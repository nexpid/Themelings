// app/modules/main_tabs_v2/native/settings/definitions/IcymiTabSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var7 = var2.MobileSetting;
    var2 = {};
    var8 = 1;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.RendererType;
    var8 = var8.TOGGLE;
    var2['type'] = var8;
    var8 = function title() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 6;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.D4clKi;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['title'] = var8;
    var7 = var7.ADVANCED;
    var2['parent'] = var7;
    var7 = function useICYMISettingValue() {
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 2;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = 'hide_icymi_tab';
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['useValue'] = var7;
    var7 = function onICYMISettingValueChange(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 3;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var8 = var4.ICYMIAnalytics;
            var7 = var8.trackItemInteraction;
            var6 = 'show';
            if(!var2) { _fun0001_ip = 51; continue _fun0001 }
 47:
            var6 = 'hide';
 51:
            var5 = 'icymi_tab_toggle';
            var4 = 'press';
            var4 = var7.bind(var8)(var6, var5, var4);
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 4;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.toggleLabFeature;
            var3 = {};
            var3['enabled'] = var2;
            var2 = 'hide_icymi_tab';
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var2['onValueChange'] = var7;
    var4 = function useICYMIPredicate() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useICYMIExperiment;
        var1 = 'settings';
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['usePredicate'] = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/settings/definitions/IcymiTabSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();