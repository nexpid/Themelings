// app/modules/self_mod/inappropriate_conversation/InappropriateConversationUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var2 = function shouldShowTakeoverForWarnings(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var3 = var4.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure1_slot5;
                var1 = var1.INAPPROPRIATE_CONVERSATION_TIER_1;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var3.bind(var4)(var1);
            var3 = var4.length;
            var1 = 0;
            var1 = var3 > var1;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var4.every;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.dismiss_timestamp;
                var1 = null;
                var1 = var1 == var2;
                return var1;
            };
            var1 = var3.bind(var4)(var2);
case 2:
            return var1;
        }
    };
    var _closure1_slot6 = var2;
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var9.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var8 = var7[var5];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.SafetyWarningTypes;
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/self_mod/inappropriate_conversation/InappropriateConversationUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function getSafetyAlertsSettingOrDefault() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot3;
            var2 = var3.getCurrentUser;
            var6 = var2.bind(var3)();
            var2 = null;
            var3 = var2 == var6;
            var5 = undefined;
            var4 = undefined;
            if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var3 = var6.isStaff;
            var4 = var3.bind(var6)();
case 4:
            var3 = true;
            var3 = var3 === var4;
            var4 = _closure1_slot2;
            var4 = var4.settings;
            var6 = var4.privacy;
            var7 = var2 == var6;
            var4 = undefined;
            if(var7) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var6 = var6.inappropriateConversationWarnings;
            var7 = var2 == var6;
            var4 = undefined;
            if(var7) { _fun0002_ip = 6; continue _fun0002 }
case 8:
            var4 = var6.value;
case 6:
            var2 = var2 == var4;
            if(var2) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var2 = var4;
case 9:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 3;
            var1 = var6[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.getUserIsTeen;
            var1 = var1.bind(var4)();
            if(var1) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var1 = var3;
case 11:
            if(!var1) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var1 = var2;
case 13:
            return var1;
        }
    };
    var3['getSafetyAlertsSettingOrDefault'] = var5;
    var5 = function getInappropriateConversationTakeoverForChannel(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = function getTier1WarningsForChannel(arg1) {
                var3 = _closure1_slot4;
                var2 = var3.getChannelSafetyWarnings;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var2 = var3.filter;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.type;
                    var1 = _closure1_slot5;
                    var1 = var1.INAPPROPRIATE_CONVERSATION_TIER_1;
                    var1 = var2 === var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = undefined;
            var2 = arg1;
            var4 = var4.bind(var3)(var2);
            var3 = var4.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.dismiss_timestamp;
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var2 = var2.length;
            var3 = 0;
            if(!(!(var2 > var3))) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var2 = var4.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.dismiss_timestamp;
                var1 = null;
                var1 = var1 == var2;
                return var1;
            };
            var2 = var2.bind(var4)(var1);
            var5 = var2.length;
            var4 = 1;
            var1 = null;
            if(!(var4 === var5)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var1 = var2[var3];
case 17:
            return var1;
case 15:
            var1 = null;
            return var1;
        }
    };
    var3['getInappropriateConversationTakeoverForChannel'] = var5;
    var4 = function shouldShowInappropriateConversationTakeoverForChannelRecord(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var3 = var2.safetyWarnings;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var4 = _closure1_slot6;
            var3 = var2.safetyWarnings;
            var2 = undefined;
            var1 = var4.bind(var2)(var3);
case 19:
            return var1;
        }
    };
    var3['shouldShowInappropriateConversationTakeoverForChannelRecord'] = var4;
    var3['shouldShowTakeoverForWarnings'] = var2;
    return var1;
})();