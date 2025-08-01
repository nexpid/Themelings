// app/modules/notifications/settings/utils/notificationSettingsPresetUtils.tsx
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
    var4 = var7[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var4 = var4.UserNotificationSettings;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.UnreadSetting;
    var _closure1_slot3 = var4;
    var4 = {};
    var5 = 'all_messages';
    var4['ALL_MESSAGES'] = var5;
    var5 = 'mentions';
    var4['MENTIONS'] = var5;
    var5 = 'nothing';
    var4['NOTHING'] = var5;
    var5 = 'custom';
    var4['CUSTOM'] = var5;
    var _closure1_slot4 = var4;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/notifications/settings/utils/notificationSettingsPresetUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['Presets'] = var4;
    var4 = function presetFromSettings(arg1, arg2) {
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 2;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.match;
        var3 = new Array(2);
        var6 = arg2;
        var3[0] = var6;
        var6 = arg1;
        var3[1] = var6;
        var7 = var4.bind(var5)(var3);
        var6 = var7.with;
        var3 = _closure1_slot2;
        var4 = var3.ALL_MESSAGES;
        var5 = new Array(2);
        var5[0] = var4;
        var2 = _closure1_slot3;
        var4 = var2.ALL_MESSAGES;
        var5[1] = var4;
        var4 = function() {
            var1 = _closure1_slot4;
            var1 = var1.ALL_MESSAGES;
            return var1;
        };
        var7 = var6.bind(var7)(var5, var4);
        var6 = var7.with;
        var4 = var3.ONLY_MENTIONS;
        var5 = new Array(2);
        var5[0] = var4;
        var4 = var2.UNSET;
        var5[1] = var4;
        var4 = function() {
            var1 = _closure1_slot4;
            var1 = var1.MENTIONS;
            return var1;
        };
        var7 = var6.bind(var7)(var5, var4);
        var6 = var7.with;
        var4 = var3.ONLY_MENTIONS;
        var5 = new Array(2);
        var5[0] = var4;
        var4 = var2.ONLY_MENTIONS;
        var5[1] = var4;
        var4 = function() {
            var1 = _closure1_slot4;
            var1 = var1.MENTIONS;
            return var1;
        };
        var7 = var6.bind(var7)(var5, var4);
        var6 = var7.with;
        var4 = var3.NO_MESSAGES;
        var5 = new Array(2);
        var5[0] = var4;
        var4 = var2.UNSET;
        var5[1] = var4;
        var4 = function() {
            var1 = _closure1_slot4;
            var1 = var1.NOTHING;
            return var1;
        };
        var5 = var6.bind(var7)(var5, var4);
        var4 = var5.with;
        var6 = var3.NO_MESSAGES;
        var3 = new Array(2);
        var3[0] = var6;
        var2 = var2.ONLY_MENTIONS;
        var3[1] = var2;
        var2 = function() {
            var1 = _closure1_slot4;
            var1 = var1.NOTHING;
            return var1;
        };
        var3 = var4.bind(var5)(var3, var2);
        var2 = var3.otherwise;
        var1 = function() {
            var1 = _closure1_slot4;
            var1 = var1.CUSTOM;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['presetFromSettings'] = var4;
    var4 = function presetName(arg1) {
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 2;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.match;
        var3 = arg1;
        var6 = var4.bind(var5)(var3);
        var5 = var6.with;
        var2 = _closure1_slot4;
        var4 = var2.ALL_MESSAGES;
        var3 = function() {
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 3;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.hZrr6u;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6 = var5.bind(var6)(var4, var3);
        var5 = var6.with;
        var4 = var2.MENTIONS;
        var3 = function() {
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 3;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.y59NJi;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6 = var5.bind(var6)(var4, var3);
        var5 = var6.with;
        var4 = var2.NOTHING;
        var3 = function() {
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 3;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.pGn/bG;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var4 = var5.bind(var6)(var4, var3);
        var3 = var4.with;
        var2 = var2.CUSTOM;
        var1 = function() {
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 3;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.32yow8;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2, var1);
        var1 = var2.exhaustive;
        var1 = var1.bind(var2)();
        return var1;
    };
    var3['presetName'] = var4;
    var2 = function arePresetSettingsUnset(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var4 = arg2;
            var2 = null;
            var1 = var2 != var5;
            if(!var1) { _fun0001_ip = 32; continue _fun0001 }
 15:
            var3 = _closure1_slot3;
            var3 = var3.UNSET;
            var1 = var5 !== var3;
 32:
            if(var1) { _fun0001_ip = 62; continue _fun0001 }
 35:
            var2 = var2 != var4;
            if(!var2) { _fun0001_ip = 59; continue _fun0001 }
 42:
            var3 = _closure1_slot2;
            var3 = var3.NULL;
            var2 = var4 !== var3;
 59:
            var1 = var2;
 62:
            var1 = !var1;
            return var1;
        }
    };
    var3['arePresetSettingsUnset'] = var2;
    return var1;
})();