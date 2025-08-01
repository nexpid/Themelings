// app/modules/main_tabs_v2/native/settings/definitions/DirectMessageSafetyAlertsSetting.tsx
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
    var2 = var2.MobileSetting;
    var _closure1_slot3 = var2;
    var2 = {};
    var7 = 1;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.RendererType;
    var7 = var7.TOGGLE;
    var2['type'] = var7;
    var7 = function title() {
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
        var1 = var1.qFsx5u;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['title'] = var7;
    var7 = function parent() {
        var1 = _closure1_slot3;
        var1 = var1.CONTENT_AND_SOCIAL;
        return var1;
    };
    var2['parent'] = var7;
    var7 = 6;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.useSafetyAlertsSettingOrDefault;
    var2['useValue'] = var7;
    var7 = 7;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.updateDmSafetyAlertsSetting;
    var2['onValueChange'] = var7;
    var4 = function useHasDmSafetyAlertsSetting() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 2;
            var1 = var4[var1];
            var5 = undefined;
            var1 = var3.bind(var5)(var1);
            var3 = var1.bind(var5)();
            var1 = null;
            var1 = var1 == var3;
            if(var1) { _fun0001_ip = 41; continue _fun0001 }
 38:
            var1 = var3;
 41:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 3;
            var2 = var7[var2];
            var8 = var4.bind(var5)(var2);
            var3 = var8.useIsEligibleForInappropriateConversationWarning;
            var2 = {};
            var6 = 'user_settings_mobile_redesign';
            var2['location'] = var6;
            var3 = var3.bind(var8)(var2);
            var2 = 4;
            var2 = var7[var2];
            var5 = var4.bind(var5)(var2);
            var4 = var5.useIsEligibleForInappropriateConversationDefaultOn;
            var2 = {};
            var2['location'] = var6;
            var2 = var4.bind(var5)(var2);
            var1 = !var1;
            if(!var1) { _fun0001_ip = 122; continue _fun0001 }
 119:
            var1 = var3;
 122:
            if(!var1) { _fun0001_ip = 128; continue _fun0001 }
 125:
            var1 = !var2;
 128:
            return var1;
        }
    };
    var2['usePredicate'] = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/settings/definitions/DirectMessageSafetyAlertsSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();