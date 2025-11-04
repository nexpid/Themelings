// app/modules/user_settings/native/defs/DirectMessageSafetyAlertsSetting.tsx
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
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var2 = var2.MobileSetting;
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var6[var2];
    var7 = var5.bind(var1)(var2);
    var4 = var7.createToggle;
    var2 = {};
    var9 = function title() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 5;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.qFsx5q;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['title'] = var9;
    var9 = function parent() {
        var1 = _closure1_slot3;
        var1 = var1.CONTENT_AND_SOCIAL;
        return var1;
    };
    var2['parent'] = var9;
    var9 = 6;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var9 = var9.useSafetyAlertsSettingOrDefault;
    var2['useValue'] = var9;
    var9 = 7;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var9 = var9.updateDmSafetyAlertsSetting;
    var2['onValueChange'] = var9;
    var8 = function useHasDmSafetyAlertsSetting() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 1;
            var1 = var4[var1];
            var5 = undefined;
            var1 = var3.bind(var5)(var1);
            var3 = var1.bind(var5)();
            var1 = null;
            var1 = var1 == var3;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var3;
case 2:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 2;
            var2 = var7[var2];
            var8 = var4.bind(var5)(var2);
            var3 = var8.useIsEligibleForInappropriateConversationWarning;
            var2 = {};
            var6 = 'user_settings_mobile_redesign';
            var2['location'] = var6;
            var3 = var3.bind(var8)(var2);
            var2 = 3;
            var2 = var7[var2];
            var5 = var4.bind(var5)(var2);
            var4 = var5.useIsEligibleForInappropriateConversationDefaultOn;
            var2 = {};
            var2['location'] = var6;
            var2 = var4.bind(var5)(var2);
            var1 = !var1;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var3;
case 4:
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = !var2;
case 6:
            return var1;
        }
    };
    var2['usePredicate'] = var8;
    var2 = var4.bind(var7)(var2);
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/defs/DirectMessageSafetyAlertsSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();