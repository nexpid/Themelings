// app/modules/user_settings/native/defs/LanguageSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var4 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var8)(var3, var1, var2);
    var1 = 0;
    var4 = var6[var1];
    var2 = metroImportDefault;
    var1 = undefined;
    var2 = var2.bind(var1)(var4);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.UserSettingsSections;
    var2 = {};
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.RendererType;
    var4 = var4.ROUTE;
    var2['type'] = var4;
    var4 = function title() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 4;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.IHMsPj;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['title'] = var4;
    var4 = null;
    var2['parent'] = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.LanguageIcon;
    var2['IconComponent'] = var4;
    var4 = function useLanguageSettingTrailing() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var5 = 3;
            var6 = var2[var5];
            var5 = undefined;
            var9 = var4.bind(var5)(var6);
            var8 = var9.useStateFromStores;
            var6 = _closure1_slot2;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var1 = _closure1_slot2;
                var1 = var1.locale;
                return var1;
            };
            var6 = var8.bind(var9)(var7, var6);
            var _closure2_slot0 = var6;
            var6 = 4;
            var2 = var2[var6];
            var4 = var4.bind(var5)(var2);
            var2 = var4.getAvailableLocales;
            var4 = var2.bind(var4)();
            var2 = var4.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.value;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var2.bind(var4)(var1);
            var1 = null;
            var4 = var1 != var2;
            if(!var4) { _fun0001_ip = 148; continue _fun0001 }
 110:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var2.localizedName;
            var1 = var3.bind(var4)(var2);
 148:
            return var1;
        }
    };
    var2['useTrailing'] = var4;
    var4 = {};
    var8 = var8.LOCALE;
    var4['route'] = var8;
    var7 = function getComponent() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var1 = var1.default;
        return var1;
    };
    var4['getComponent'] = var7;
    var2['screen'] = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/defs/LanguageSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();