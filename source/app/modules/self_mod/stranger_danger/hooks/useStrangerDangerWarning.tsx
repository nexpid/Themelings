// app/modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx
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
    var7 = var6[var1];
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SafetyWarningTypes;
    var _closure1_slot3 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useStrangerDangerWarning(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var9 = arg1;
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 2;
            var2 = var8[var1];
            var1 = undefined;
            var6 = var7.bind(var1)(var2);
            var5 = var6.useStateFromStores;
            var2 = _closure1_slot2;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                var2 = _closure1_slot2;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var5.bind(var6)(var4, var2);
            var2 = 3;
            var2 = var8[var2];
            var4 = var7.bind(var1)(var2);
            var2 = var4.useIsSpamMessageRequest;
            var5 = var2.bind(var4)(var9);
            var2 = 4;
            var2 = var8[var2];
            var4 = var7.bind(var1)(var2);
            var2 = var4.useIsMessageRequest;
            var4 = var2.bind(var4)(var9);
            var2 = 5;
            var2 = var8[var2];
            var11 = var7.bind(var1)(var2);
            var6 = var11.useChannelSafetyWarning;
            var2 = _closure1_slot3;
            var2 = var2.STRANGER_DANGER;
            var2 = var6.bind(var11)(var9, var2);
            var6 = 6;
            var6 = var8[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.useUserIsTeen;
            var6 = var6.bind(var7)();
            var7 = null;
            var8 = var7 == var10;
            var7 = undefined;
            if(var8) { _fun0001_ip = 183; continue _fun0001 }
 173:
            var8 = var10.isStaff;
            var7 = var8.bind(var10)();
 183:
            var8 = _closure1_slot0;
            var10 = _closure1_slot1;
            var3 = 7;
            var3 = var10[var3];
            var8 = var8.bind(var1)(var3);
            var3 = var8.useInappropriateConversationWarningsForChannel;
            var3 = var3.bind(var8)(var9);
            var8 = var3.length;
            var3 = 0;
            var3 = var8 > var3;
            if(var6) { _fun0001_ip = 234; continue _fun0001 }
 228:
            var6 = true;
            if(!(var6 === var7)) { _fun0001_ip = 245; continue _fun0001 }
 234:
            if(var5) { _fun0001_ip = 245; continue _fun0001 }
 237:
            if(var4) { _fun0001_ip = 245; continue _fun0001 }
 240:
            if(var3) { _fun0001_ip = 245; continue _fun0001 }
 243:
            return var2;
 245:
            return var1;
        }
    };
    var3['useStrangerDangerWarning'] = var2;
    return var1;
})();