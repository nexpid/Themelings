// app/modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationBannerForChannel.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
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
    var4 = var4.SafetyWarningTypes;
    var _closure1_slot2 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationBannerForChannel.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useInappropriateConversationBannerForChannel(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var8 = arg1;
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var1 = 1;
            var3 = var9[var1];
            var1 = undefined;
            var5 = var7.bind(var1)(var3);
            var4 = var5.useIsEligibleForInappropriateConversationWarning;
            var3 = {};
            var6 = arg2;
            var3['location'] = var6;
            var4 = var4.bind(var5)(var3);
            var3 = 2;
            var3 = var9[var3];
            var5 = var7.bind(var1)(var3);
            var3 = var5.useSafetyAlertsSettingOrDefault;
            var3 = var3.bind(var5)();
            var5 = 3;
            var5 = var9[var5];
            var6 = var7.bind(var1)(var5);
            var5 = var6.useInappropriateConversationWarningsForChannel;
            var5 = var5.bind(var6)(var8);
            var6 = 4;
            var6 = var9[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.useChannelSafetyWarning;
            var2 = _closure1_slot2;
            var2 = var2.INAPPROPRIATE_CONVERSATION_TIER_2;
            var2 = var6.bind(var7)(var8, var2);
            if(!var4) { _fun0001_ip = 169; continue _fun0001 }
 130:
            if(!var3) { _fun0001_ip = 169; continue _fun0001 }
 133:
            var4 = var5.length;
            var3 = 0;
            if(!(var3 !== var4)) { _fun0001_ip = 169; continue _fun0001 }
 144:
            var4 = var5.some;
            var3 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = arg1;
                    var4 = var3.type;
                    var1 = _closure1_slot2;
                    var1 = var1.INAPPROPRIATE_CONVERSATION_TIER_1;
                    var1 = var4 === var1;
                    if(var1) { _fun0002_ip = 65; continue _fun0002 }
 28:
                    var4 = var3.type;
                    var2 = _closure1_slot2;
                    var2 = var2.INAPPROPRIATE_CONVERSATION_TIER_2;
                    var2 = var4 === var2;
                    if(!var2) { _fun0002_ip = 62; continue _fun0002 }
 50:
                    var4 = var3.dismiss_timestamp;
                    var3 = null;
                    var2 = var3 != var4;
 62:
                    var1 = var2;
 65:
                    return var1;
                }
            };
            var3 = var4.bind(var5)(var3);
            if(var3) { _fun0001_ip = 169; continue _fun0001 }
 167:
            return var2;
 169:
            return var1;
        }
    };
    var3['useInappropriateConversationBannerForChannel'] = var2;
    return var1;
})();