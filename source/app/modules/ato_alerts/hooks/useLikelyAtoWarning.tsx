// app/modules/ato_alerts/hooks/useLikelyAtoWarning.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/ato_alerts/hooks/useLikelyAtoWarning.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useLikelyAtoWarning(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var8 = arg1;
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var1 = 1;
            var3 = var9[var1];
            var1 = undefined;
            var4 = var7.bind(var1)(var3);
            var3 = var4.useIsSpamMessageRequest;
            var6 = var3.bind(var4)(var8);
            var3 = 2;
            var3 = var9[var3];
            var4 = var7.bind(var1)(var3);
            var3 = var4.useIsMessageRequest;
            var5 = var3.bind(var4)(var8);
            var3 = 3;
            var3 = var9[var3];
            var4 = var7.bind(var1)(var3);
            var3 = var4.useChannelSafetyWarning;
            var2 = _closure1_slot2;
            var2 = var2.LIKELY_ATO;
            var2 = var3.bind(var4)(var8, var2);
            var3 = 4;
            var3 = var9[var3];
            var4 = var7.bind(var1)(var3);
            var3 = var4.useInappropriateConversationWarningsForChannel;
            var3 = var3.bind(var4)(var8);
            var4 = var3.length;
            var3 = 0;
            var4 = var4 > var3;
            var3 = 5;
            var3 = var9[var3];
            var7 = var7.bind(var1)(var3);
            var3 = var7.useStrangerDangerWarning;
            var7 = var3.bind(var7)(var8);
            var3 = null;
            var3 = var3 != var7;
            if(var6) { _fun0001_ip = 173; continue _fun0001 }
 162:
            if(var5) { _fun0001_ip = 173; continue _fun0001 }
 165:
            if(var4) { _fun0001_ip = 173; continue _fun0001 }
 168:
            if(var3) { _fun0001_ip = 173; continue _fun0001 }
 171:
            return var2;
 173:
            return var1;
        }
    };
    var3['useLikelyAtoWarning'] = var2;
    return var1;
})();