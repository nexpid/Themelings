// app/modules/quests/utils/QuestOrbMultiplierUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var4 = {};
    var1 = 'nitro';
    var4['NITRO'] = var1;
    var1 = 'crepe';
    var4['CREPE'] = var1;
    var _closure1_slot3 = var4;
    var1 = 4;
    var5 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/utils/QuestOrbMultiplierUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['QuestOrbMultiplierSource'] = var4;
    var4 = function shouldReceiveQuestOrbMultiplier(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 0;
            var1 = var1[var6];
            var5 = undefined;
            var1 = var4.bind(var5)(var1);
            var1 = var1.QuestOrbMultiplierEligibilityType;
            var1 = var1.UPSELL;
            var1 = var3 !== var1;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.QuestOrbMultiplierEligibilityType;
            var2 = var2.INELIGIBLE;
            var1 = var3 !== var2;
case 2:
            return var1;
        }
    };
    var3['shouldReceiveQuestOrbMultiplier'] = var4;
    var2 = function getQuestOrbMultiplierSource(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var5 = 1;
            var3 = var3[var5];
            var8 = undefined;
            var4 = var4.bind(var8)(var3);
            var3 = var4.canUseMoreQuestOrbs;
            var3 = var3.bind(var4)(var2);
            if(var3) { _fun0002_ip = 3; continue _fun0002 }
case 4:
            var3 = null;
            return var3;
case 3:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var4 = var4.bind(var8)(var3);
            var3 = var4.canUseQuestOrbMultiplier;
            var3 = var3.bind(var4)(var2);
            if(var3) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 2;
            var3 = var5[var3];
            var6 = var4.bind(var8)(var3);
            var5 = var6.getPerkSource;
            var4 = null;
            var7 = var4 == var2;
            var3 = undefined;
            if(var7) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var3 = var2.perks;
case 7:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 3;
            var2 = var2[var9];
            var2 = var7.bind(var8)(var2);
            var2 = var2.Perk;
            var2 = var2.MORE_QUEST_ORBS;
            var6 = var5.bind(var6)(var3, var2);
            var3 = var4 != var6;
            var2 = null;
            if(!var3) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var5 = var6.includes;
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var9];
            var3 = var7.bind(var8)(var3);
            var3 = var3.PerkSource;
            var3 = var3.SOURCE_NITRO;
            var3 = var5.bind(var6)(var3);
            var2 = null;
            if(!var3) { _fun0002_ip = 9; continue _fun0002 }
case 11:
            var3 = _closure1_slot3;
            var2 = var3.NITRO;
case 9:
            return var2;
case 5:
            var1 = _closure1_slot3;
            var1 = var1.NITRO;
            return var1;
        }
    };
    var3['getQuestOrbMultiplierSource'] = var2;
    return var1;
})();