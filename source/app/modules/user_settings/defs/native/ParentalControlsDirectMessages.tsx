// app/modules/user_settings/defs/native/ParentalControlsDirectMessages.tsx
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
    var8 = true;
    var2['value'] = var8;
    var1 = '__esModule';
    var1 = var4.bind(var7)(var3, var1, var2);
    var1 = 0;
    var4 = var6[var1];
    var2 = metroImportDefault;
    var1 = undefined;
    var2 = var2.bind(var1)(var4);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var10 = var2.MobileSetting;
    var2 = 4;
    var2 = var6[var2];
    var7 = var5.bind(var1)(var2);
    var4 = var7.createToggle;
    var2 = {};
    var11 = function useTitle() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 5;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.RAQUSN;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['useTitle'] = var11;
    var11 = function useDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 5;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.wbYDfT;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['useDescription'] = var11;
    var10 = var10.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS;
    var2['parent'] = var10;
    var10 = function useValue() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.useDefaultGuildsRestricted;
        var1 = var1.bind(var2)();
        var1 = !var1;
        return var1;
    };
    var2['useValue'] = var10;
    var9 = function onAllowDirectMessagesFromServerMembersValueChange(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot2;
            var2 = var3.getSelectedTeenId;
            var4 = var2.bind(var3)();
            var2 = null;
            if(!(var2 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.ParentalControlledDefaultGuildsRestrictedV2;
            var2 = var3.updateControlledSetting;
            var1 = arg1;
            var1 = !var1;
            var1 = var2.bind(var3)(var4, var1);
case 2:
            var1 = undefined;
            return var1;
        }
    };
    var2['onValueChange'] = var9;
    var2['unsearchable'] = var8;
    var2 = var4.bind(var7)(var2);
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/defs/native/ParentalControlsDirectMessages.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var3['ParentalControlsDirectMessages'] = var2;
    return var1;
})();