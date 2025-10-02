// app/modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx
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
    var7 = var6[var1];
    var4 = metroImportDefault;
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
case 0:
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
            if(var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = var10.isStaff;
            var7 = var8.bind(var10)();
case 2:
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
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = true;
            if(!(var6 === var7)) { _fun0001_ip = 6; continue _fun0001 }
case 4:
            if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 9:
            return var2;
case 6:
            return var1;
        }
    };
    var3['useStrangerDangerWarning'] = var2;
    return var1;
})();