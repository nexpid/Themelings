// app/modules/user_settings/native/defs/UseDataForQuests3PSetting.tsx
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
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var9 = var2.MobileSetting;
    var2 = 3;
    var2 = var6[var2];
    var7 = var5.bind(var1)(var2);
    var4 = var7.createToggle;
    var2 = {};
    var10 = function title() {
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
        var1 = var1.CyLYKZ;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['title'] = var10;
    var9 = var9.DATA_AND_PRIVACY;
    var2['parent'] = var9;
    var9 = function useDataToSupportQuests3PSettingValue() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var2 = var1.Quests3PDataOptedOut;
        var1 = var2.useSetting;
        var1 = var1.bind(var2)();
        var1 = !var1;
        return var1;
    };
    var2['useValue'] = var9;
    var9 = function onDataToSupportQuests3PSettingValueChange(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var4 = var2.Quests3PDataOptedOut;
        var3 = var4.updateSetting;
        var2 = arg1;
        var2 = !var2;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['onValueChange'] = var9;
    var8 = function useDataToSupportQuests3PSettingIsDisabled() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 1;
            var1 = var5[var1];
            var3 = undefined;
            var1 = var4.bind(var3)(var1);
            var2 = var1.DropsOptedOut;
            var1 = var2.useSetting;
            var1 = var1.bind(var2)();
            var2 = 2;
            var2 = var5[var2];
            var3 = var4.bind(var3)(var2);
            var2 = var3.useIsParentallyControlled;
            var2 = var2.bind(var3)();
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var2['useIsDisabled'] = var8;
    var2 = var4.bind(var7)(var2);
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/defs/UseDataForQuests3PSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();