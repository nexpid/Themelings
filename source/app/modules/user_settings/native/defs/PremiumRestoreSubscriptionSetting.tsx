// app/modules/user_settings/native/defs/PremiumRestoreSubscriptionSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var2 = {};
    var7 = true;
    var2['value'] = var7;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.RendererType;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot4 = var2;
    var2 = {};
    var8 = var8.PRESSABLE;
    var2['type'] = var8;
    var8 = function title() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.s9h22N;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['title'] = var8;
    var8 = null;
    var2['parent'] = var8;
    var8 = 10;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.NitroWheelIcon;
    var2['IconComponent'] = var8;
    var8 = function handleNitroRestoreSettingPress() {
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var1 = 3;
        var2 = var4[var1];
        var1 = undefined;
        var6 = var3.bind(var1)(var2);
        var5 = var6.restoreSubscription;
        var2 = true;
        var2 = var5.bind(var6)(var2);
        var2 = 4;
        var2 = var4[var2];
        var4 = var3.bind(var1)(var2);
        var3 = var4.openLazy;
        var2 = {};
        var5 = function importer() {
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = 6;
            var2 = var1[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = 5;
            var2 = var1[var2];
            var1 = var1.paths;
            var3 = var3.bind(var4)(var2, var1);
            var2 = var3.then;
            var1 = function(arg1) {
                var2 = arg1;
                var2 = var2.default;
                var _closure4_slot0 = var2;
                var1 = function(arg1) {
                    var4 = _closure1_slot4;
                    var3 = _closure4_slot0;
                    var2 = {};
                    var5 = arg1;
                    var6 = var2;
                    var1 = copyDataProperties(var6, var5);
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2['importer'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['onPress'] = var8;
    var2['withArrow'] = var7;
    var4 = function useHasPremiumRestoreSubscriptionSetting() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 7;
            var1 = var4[var1];
            var4 = undefined;
            var6 = var3.bind(var4)(var1);
            var5 = var6.useStateFromStores;
            var1 = _closure1_slot3;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var5.bind(var6)(var3, var1);
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0001_ip = 72; continue _fun0001 }
 66:
            var1 = var3.verified;
 72:
            if(!var1) { _fun0001_ip = 107; continue _fun0001 }
 75:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 8;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.isAndroid;
            var2 = var2.bind(var3)();
            var1 = !var2;
 107:
            return var1;
        }
    };
    var2['usePredicate'] = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/defs/PremiumRestoreSubscriptionSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();