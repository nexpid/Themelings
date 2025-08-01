// app/modules/user_settings/trackVoiceAndVideoSettingsUpdate.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/trackVoiceAndVideoSettingsUpdate.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function trackVoiceAndVideoDebuggingSettingsUpdated(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var8 = arg3;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 1;
            var2 = var4[var2];
            var7 = undefined;
            var4 = var3.bind(var7)(var2);
            var3 = var4.track;
            var1 = _closure1_slot2;
            var2 = var1.VOICE_AND_VIDEO_SETTINGS_UPDATED;
            var1 = {};
            var5 = null;
            var6 = var5 != var8;
            var5 = undefined;
            if(!var6) { _fun0001_ip = 69; continue _fun0001 }
 56:
            var6 = global;
            var6 = var6.String;
            var5 = var6.bind(var7)(var8);
 69:
            var1['previous_setting_value'] = var5;
            var6 = arg2;
            var5 = arg1;
            var1[var5] = var6;
            var6 = arg4;
            var5 = 'location_stack';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();