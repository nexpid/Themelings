// app/modules/user_settings/defs/native/ParentalControlsUseDataToImproveDiscordSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var1 = global;
    var10 = var1.Object;
    var7 = var10.defineProperty;
    var2 = {};
    var8 = true;
    var2['value'] = var8;
    var1 = '__esModule';
    var1 = var7.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var10 = var2.MobileSetting;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.Consents;
    var _closure1_slot4 = var2;
    var2 = 5;
    var2 = var6[var2];
    var7 = var5.bind(var1)(var2);
    var4 = var7.createToggle;
    var2 = {};
    var11 = function useTitle() {
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
        var1 = var1.XuADY2;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['useTitle'] = var11;
    var10 = var10.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS;
    var2['parent'] = var10;
    var10 = function useDataToImproveDiscordSettingValue() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useParentalControlledConsent;
        var1 = _closure1_slot4;
        var1 = var1.USAGE_STATISTICS;
        var1 = var2.bind(var3)(var1);
        var1 = var1.hasConsented;
        return var1;
    };
    var2['useValue'] = var10;
    var9 = function handleUsageStatisticsChange(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var4 = _closure1_slot3;
            var3 = var4.getSelectedTeenId;
            var5 = var3.bind(var4)();
            var3 = null;
            if(!(var3 != var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = new Array(0);
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var3 = _closure1_slot4;
            var6 = var3.USAGE_STATISTICS;
            var3 = new Array(1);
            var3[0] = var6;
            var4 = var3;
case 6:
            if(var2) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var2 = _closure1_slot4;
            var2 = var2.USAGE_STATISTICS;
            var3 = new Array(1);
            var3[0] = var2;
            _fun0001_ip = 9; continue _fun0001;
case 7:
            var3 = new Array(0);
case 9:
            var6 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var6.bind(var1)(var2);
            var1 = var2.updateTeenConsents;
            var1 = var1.bind(var2)(var5, var4, var3);
case 2:
            var1 = undefined;
            return var1;
        }
    };
    var2['onValueChange'] = var9;
    var2['unsearchable'] = var8;
    var2 = var4.bind(var7)(var2);
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/defs/native/ParentalControlsUseDataToImproveDiscordSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();