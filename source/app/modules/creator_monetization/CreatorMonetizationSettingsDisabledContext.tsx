// app/modules/creator_monetization/CreatorMonetizationSettingsDisabledContext.tsx
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
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var5 = var7[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var5 = var4.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = var5.createContext;
    var4 = var4.bind(var5)(var1);
    var _closure1_slot4 = var4;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/creator_monetization/CreatorMonetizationSettingsDisabledContext.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var4 = function useCreatorMonetizationSettingsDisabled() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot2;
            var2 = var3.useContext;
            var1 = _closure1_slot4;
            var1 = var2.bind(var3)(var1);
            var2 = null;
            if(!(var2 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            return var1;
case 2:
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var4 = 'useCreatorMonetizationSettingsDisabled must be used within a CreatorMonetizationSettingsDisabledContext';
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var3['useCreatorMonetizationSettingsDisabled'] = var4;
    var2 = function CreatorMonetizationSettingsDisabledContextProvider(arg1) {
        var1 = arg1;
        var6 = var1.guildId;
        var5 = var1.children;
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var2 = 2;
        var2 = var4[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = var3.useShouldRestrictUpdatingCreatorMonetizationSettings;
        var2 = var2.bind(var3)(var6);
        var6 = var2.shouldRestrictUpdatingCreatorMonetizationSettings;
        var3 = _closure1_slot3;
        var1 = _closure1_slot4;
        var2 = var1.Provider;
        var1 = {};
        var1['value'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['CreatorMonetizationSettingsDisabledContextProvider'] = var2;
    return var1;
})();