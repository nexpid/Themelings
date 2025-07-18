// app/modules/guild_onboarding/useSortedOnboardingPrompts.tsx
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native3;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding/useSortedOnboardingPrompts.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSortedOnboardingPrompts(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 2;
        var4 = var4[var3];
        var3 = undefined;
        var6 = var5.bind(var3)(var4);
        var5 = var6.useStateFromStoresArray;
        var3 = _closure1_slot3;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var3 = _closure1_slot3;
            var2 = var3.getEnabledOnboardingPrompts;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5 = var5.bind(var6)(var4, var3);
        var _closure2_slot1 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var6 = new Array(0);
                var5 = new Array(0);
                var4 = new Array(0);
                var3 = new Array(0);
                var1 = _closure2_slot1;
                var1 = var1.length;
                var2 = 0;
                var1 = var2 < var1;
                var9 = 0;
                var8 = 0;
                if(!var1) { _fun0001_ip = 194; continue _fun0001 }
 46:
                var1 = _closure2_slot1;
                var12 = var1[var8];
                var1 = var12.isNew;
                if(var1) { _fun0001_ip = 156; continue _fun0001 }
 63:
                var1 = var12.hasNewAnswers;
                if(var1) { _fun0001_ip = 113; continue _fun0001 }
 74:
                var1 = var12.inOnboarding;
                if(var1) { _fun0001_ip = 98; continue _fun0001 }
 83:
                var1 = var4.push;
                var1 = var1.bind(var4)(var12);
                var11 = var9;
                _fun0001_ip = 169; continue _fun0001;
 98:
                var1 = var3.push;
                var1 = var1.bind(var3)(var12);
                var11 = var9;
                _fun0001_ip = 169; continue _fun0001;
 113:
                var1 = var5.push;
                var1 = var1.bind(var5)(var12);
                var14 = var12.options;
                var13 = var14.filter;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.isUnseen;
                    return var1;
                };
                var1 = var13.bind(var14)(var1);
                var1 = var1.length;
                var11 = var9 + var1;
                _fun0001_ip = 169; continue _fun0001;
 156:
                var1 = var6.push;
                var1 = var1.bind(var6)(var12);
                var11 = var9;
 169:
                var8 = var8 + 1;
                var1 = _closure2_slot1;
                var1 = var1.length;
                var9 = var11;
                var2 = var9;
                if(var8 < var1) { _fun0001_ip = 46; continue _fun0001 }
 194:
                var1 = {};
                var7 = _closure2_slot1;
                var1['onboardingPromptsRaw'] = var7;
                var1['newOnboardingPrompts'] = var6;
                var1['onboardingPromptsWithNewAnswers'] = var5;
                var1['newAnswersCount'] = var2;
                var2 = var4.concat;
                var2 = var2.bind(var4)(var3);
                var1['onboardingPrompts'] = var2;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();