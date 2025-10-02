// app/modules/guild_onboarding/useSortedOnboardingPrompts.tsx
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportDefault;
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
case 0:
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
                if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = _closure2_slot1;
                var12 = var1[var8];
                var1 = var12.isNew;
                if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var1 = var12.hasNewAnswers;
                if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var1 = var12.inOnboarding;
                if(var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var1 = var4.push;
                var1 = var1.bind(var4)(var12);
                var11 = var9;
                _fun0001_ip = 10; continue _fun0001;
case 8:
                var1 = var3.push;
                var1 = var1.bind(var3)(var12);
                var11 = var9;
                _fun0001_ip = 10; continue _fun0001;
case 6:
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
                _fun0001_ip = 10; continue _fun0001;
case 4:
                var1 = var6.push;
                var1 = var1.bind(var6)(var12);
                var11 = var9;
case 10:
                var8 = var8 + 1;
                var1 = _closure2_slot1;
                var1 = var1.length;
                var9 = var11;
                var2 = var9;
                if(var8 < var1) { _fun0001_ip = 3; continue _fun0001 }
case 2:
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