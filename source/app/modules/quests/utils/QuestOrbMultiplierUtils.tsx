// app/modules/quests/utils/QuestOrbMultiplierUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var5 = {};
    var1 = 'UPSELL';
    var5['UPSELL'] = var1;
    var1 = 'NITRO';
    var5['NITRO'] = var1;
    var1 = 'CREPE';
    var5['CREPE'] = var1;
    var1 = 'INELIGIBLE';
    var5['INELIGIBLE'] = var1;
    var4 = {};
    var1 = 'nitro';
    var4['NITRO'] = var1;
    var1 = 'crepe';
    var4['CREPE'] = var1;
    var _closure1_slot3 = var4;
    var8 = var5.CREPE;
    var1 = new Array(2);
    var1[0] = var8;
    var8 = var5.NITRO;
    var1[1] = var8;
    var _closure1_slot4 = var1;
    var1 = 4;
    var6 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/quests/utils/QuestOrbMultiplierUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['QuestOrbMultiplierEligibilityType'] = var5;
    var3['QuestOrbMultiplierSource'] = var4;
    var4 = function shouldReceiveQuestOrbMultiplier(arg1) {
        var3 = _closure1_slot4;
        var2 = var3.includes;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['shouldReceiveQuestOrbMultiplier'] = var4;
    var2 = function getQuestOrbMultiplierSource(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var5 = 0;
            var3 = var3[var5];
            var8 = undefined;
            var4 = var4.bind(var8)(var3);
            var3 = var4.canUseMoreQuestOrbs;
            var3 = var3.bind(var4)(var2);
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = null;
            return var3;
case 2:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var4 = var4.bind(var8)(var3);
            var3 = var4.canUseQuestOrbMultiplier;
            var3 = var3.bind(var4)(var2);
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 1;
            var3 = var5[var3];
            var6 = var4.bind(var8)(var3);
            var5 = var6.getPerkSource;
            var4 = null;
            var7 = var4 == var2;
            var3 = undefined;
            if(var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var2.perks;
case 6:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 2;
            var2 = var2[var9];
            var2 = var7.bind(var8)(var2);
            var2 = var2.Perk;
            var2 = var2.MORE_QUEST_ORBS;
            var6 = var5.bind(var6)(var3, var2);
            if(!(var4 != var6)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var6.includes;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var9];
            var2 = var5.bind(var8)(var2);
            var2 = var2.PerkSource;
            var2 = var2.SOURCE_NITRO;
            var2 = var3.bind(var6)(var2);
            if(var2) { _fun0001_ip = 10; continue _fun0001 }
case 8:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 3;
            var2 = var5[var2];
            var5 = var3.bind(var8)(var2);
            var3 = var5.getIsCrepeEnabled;
            var2 = 'getQuestOrbMultiplierSource';
            var3 = var3.bind(var5)(var2);
            var2 = null;
            if(!var3) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var3 = var4 != var6;
            var2 = null;
            if(!var3) { _fun0001_ip = 11; continue _fun0001 }
case 13:
            var5 = var6.includes;
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var9];
            var3 = var7.bind(var8)(var3);
            var3 = var3.PerkSource;
            var3 = var3.SOURCE_THIRDPARTY_CROISSANT;
            var3 = var5.bind(var6)(var3);
            var2 = null;
            if(!var3) { _fun0001_ip = 11; continue _fun0001 }
case 14:
            var3 = _closure1_slot3;
            var2 = var3.CREPE;
case 11:
            _fun0001_ip = 15; continue _fun0001;
case 10:
            var3 = _closure1_slot3;
            var2 = var3.NITRO;
case 15:
            return var2;
case 4:
            var1 = _closure1_slot3;
            var1 = var1.NITRO;
            return var1;
        }
    };
    var3['getQuestOrbMultiplierSource'] = var2;
    return var1;
})();