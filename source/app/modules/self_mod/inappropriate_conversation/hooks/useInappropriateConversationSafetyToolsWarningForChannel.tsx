// app/modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationSafetyToolsWarningForChannel.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var4 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 3;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationSafetyToolsWarningForChannel.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useInappropriateConversationSafetyToolsWarningForChannel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 0;
            var4 = var8[var2];
            var3 = undefined;
            var6 = var7.bind(var3)(var4);
            var5 = var6.useIsEligibleForInappropriateConversationWarning;
            var4 = {};
            var9 = 'safety-tools-button';
            var4['location'] = var9;
            var5 = var5.bind(var6)(var4);
            var4 = 1;
            var4 = var8[var4];
            var6 = var7.bind(var3)(var4);
            var4 = var6.useSafetyAlertsSettingOrDefault;
            var4 = var4.bind(var6)();
            var6 = 2;
            var6 = var8[var6];
            var8 = var7.bind(var3)(var6);
            var7 = var8.useInappropriateConversationWarningsForChannel;
            var6 = arg1;
            var6 = var7.bind(var8)(var6);
            if(!var5) { _fun0001_ip = 127; continue _fun0001 }
 100:
            if(!var4) { _fun0001_ip = 127; continue _fun0001 }
 103:
            var5 = var6.filter;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.dismiss_timestamp;
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var4 = var5.bind(var6)(var4);
            var5 = var4.length;
            if(!(var2 === var5)) { _fun0001_ip = 129; continue _fun0001 }
 127:
            return var3;
 129:
            var3 = var4.sort;
            var1 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = arg1;
                    var1 = arg2;
                    var4 = var2.type;
                    var3 = var1.type;
                    if(!(!(var4 > var3))) { _fun0002_ip = 45; continue _fun0002 }
 20:
                    var2 = var2.dismiss_timestamp;
                    var1 = var1.dismiss_timestamp;
                    var2 = var2 < var1;
                    var1 = -1;
                    if(!var2) { _fun0002_ip = 48; continue _fun0002 }
 45:
                    var1 = 1;
 48:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1);
            var1 = var1[var2];
            return var1;
        }
    };
    var3['useInappropriateConversationSafetyToolsWarningForChannel'] = var2;
    return var1;
})();