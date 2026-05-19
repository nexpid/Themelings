// app/modules/quests/hooks/QuestOrbMultiplierHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var2 = function getQuestOrbMultiplierEligibilityForUser(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var9 = arg1;
            var1 = null;
            if(!(var1 != var9)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 3;
            var2 = var5[var2];
            var5 = undefined;
            var4 = var4.bind(var5)(var2);
            var2 = var4.canUseMoreQuestOrbs;
            var2 = var2.bind(var4)(var9);
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(!(var1 != var9)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var9.isFractionalPremiumWithNoStandardSub;
            var1 = var1.bind(var9)();
            if(var1) { _fun0001_ip = 8; continue _fun0001 }
case 6:
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 2;
            var1 = var4[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.QuestOrbMultiplierEligibilityType;
            var1 = var1.UPSELL;
            _fun0001_ip = 9; continue _fun0001;
case 8:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var2 = var4.bind(var5)(var2);
            var2 = var2.QuestOrbMultiplierEligibilityType;
            var1 = var2.INELIGIBLE;
case 9:
            _fun0001_ip = 10; continue _fun0001;
case 4:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = 2;
            var4 = var2[var6];
            var8 = var7.bind(var5)(var4);
            var4 = var8.getQuestOrbMultiplierSource;
            var4 = var4.bind(var8)(var9);
            var2 = var2[var6];
            var2 = var7.bind(var5)(var2);
            var2 = var2.QuestOrbMultiplierSource;
            var2 = var2.CREPE;
            if(!(var4 !== var2)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.QuestOrbMultiplierEligibilityType;
            var2 = var2.NITRO;
            _fun0001_ip = 13; continue _fun0001;
case 11:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.QuestOrbMultiplierEligibilityType;
            var2 = var3.CREPE;
case 13:
            var1 = var2;
case 10:
            _fun0001_ip = 14; continue _fun0001;
case 2:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.QuestOrbMultiplierEligibilityType;
            var1 = var2.INELIGIBLE;
case 14:
            return var1;
        }
    };
    var _closure1_slot4 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/hooks/QuestOrbMultiplierHooks.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useQuestOrbMultiplierEligibility() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 1;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var3 = _closure1_slot4;
            var2 = _closure1_slot3;
            var1 = var2.getCurrentUser;
            var2 = var1.bind(var2)();
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useQuestOrbMultiplierEligibility'] = var4;
    var3['getQuestOrbMultiplierEligibilityForUser'] = var2;
    return var1;
})();