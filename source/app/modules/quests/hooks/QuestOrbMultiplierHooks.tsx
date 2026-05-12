// app/modules/quests/hooks/QuestOrbMultiplierHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = {};
    var5 = 'UPSELL';
    var4['UPSELL'] = var5;
    var5 = 'NITRO';
    var4['NITRO'] = var5;
    var5 = 'CREPE';
    var4['CREPE'] = var5;
    var5 = 'INELIGIBLE';
    var4['INELIGIBLE'] = var5;
    var _closure1_slot4 = var4;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/hooks/QuestOrbMultiplierHooks.tsx';
    var5 = var6.bind(var7)(var5);
    var3['QuestOrbMultiplierEligibilityType'] = var4;
    var2 = function useQuestOrbMultiplierEligibility() {
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
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure1_slot3;
                var1 = var2.getCurrentUser;
                var9 = var1.bind(var2)();
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 2;
                var1 = var4[var1];
                var6 = undefined;
                var2 = var2.bind(var6)(var1);
                var1 = var2.canUseMoreQuestOrbs;
                var1 = var1.bind(var2)(var9);
                if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = null;
                if(!(var1 != var9)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var1 = var9.isFractionalPremium;
                var1 = var1.bind(var9)();
                if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 4:
                var1 = _closure1_slot4;
                var1 = var1.UPSELL;
                _fun0001_ip = 7; continue _fun0001;
case 6:
                var2 = _closure1_slot4;
                var1 = var2.INELIGIBLE;
case 7:
                _fun0001_ip = 8; continue _fun0001;
case 2:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 3;
                var4 = var7[var2];
                var8 = var5.bind(var6)(var4);
                var4 = var8.getQuestOrbMultiplierSource;
                var4 = var4.bind(var8)(var9);
                var2 = var7[var2];
                var2 = var5.bind(var6)(var2);
                var2 = var2.QuestOrbMultiplierSource;
                var2 = var2.CREPE;
                if(!(var4 !== var2)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                var2 = _closure1_slot4;
                var2 = var2.NITRO;
                _fun0001_ip = 11; continue _fun0001;
case 9:
                var3 = _closure1_slot4;
                var2 = var3.CREPE;
case 11:
                var1 = var2;
case 8:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useQuestOrbMultiplierEligibility'] = var2;
    return var1;
})();