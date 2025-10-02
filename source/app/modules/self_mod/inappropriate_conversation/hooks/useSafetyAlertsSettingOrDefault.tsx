// app/modules/self_mod/inappropriate_conversation/hooks/useSafetyAlertsSettingOrDefault.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/self_mod/inappropriate_conversation/hooks/useSafetyAlertsSettingOrDefault.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot3;
            var2 = var3.getCurrentUser;
            var6 = var2.bind(var3)();
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 2;
            var2 = var7[var2];
            var5 = undefined;
            var8 = var4.bind(var5)(var2);
            var3 = var8.useStateFromStores;
            var1 = _closure1_slot2;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure1_slot2;
                    var1 = var1.settings;
                    var3 = var1.privacy;
                    var1 = null;
                    var4 = var1 == var3;
                    var2 = undefined;
                    if(var4) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = var3.inappropriateConversationWarnings;
                    var4 = var1 == var3;
                    var2 = undefined;
                    if(var4) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                    var2 = var3.value;
case 2:
                    var1 = var1 == var2;
                    if(var1) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var1 = var2;
case 5:
                    return var1;
                }
            };
            var3 = var3.bind(var8)(var2, var1);
            var1 = 3;
            var1 = var7[var1];
            var2 = var4.bind(var5)(var1);
            var1 = var2.useUserIsTeen;
            var2 = var1.bind(var2)();
            var1 = 4;
            var1 = var7[var1];
            var7 = var4.bind(var5)(var1);
            var4 = var7.useIsEligibleForInappropriateConversationDefaultOn;
            var1 = {};
            var8 = 'useSafetyAlertsSettingOrDefault';
            var1['location'] = var8;
            var1 = var4.bind(var7)(var1);
            var4 = !var2;
            if(var4) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var4 = !var1;
case 7:
            var1 = !var4;
            if(!var4) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            if(var2) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var4 = null;
            var4 = var4 == var6;
            var5 = undefined;
            if(var4) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var4 = var6.isStaff;
            var5 = var4.bind(var6)();
case 13:
            var4 = true;
            var2 = var4 === var5;
case 11:
            if(!var2) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var2 = var3;
case 15:
            var1 = var2;
case 9:
            return var1;
        }
    };
    var3['useSafetyAlertsSettingOrDefault'] = var2;
    return var1;
})();