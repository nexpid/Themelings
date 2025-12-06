// app/modules/premium/powerups/hooks/usePowerupActiveStatus.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var2 = function usePowerupsActiveStatuses(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg2;
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = function getPowerupActiveStatus(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = arg1;
                    var2 = var3.skuId;
                    var1 = _closure1_slot4;
                    if(!(var2 !== var1)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var1 = _closure2_slot1;
                    if(!(var2 != var1)) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                    var1 = _closure2_slot2;
                    if(!(var2 != var1)) { _fun0002_ip = 4; continue _fun0002 }
case 7:
                    var4 = _closure1_slot7;
                    var1 = var3.skuId;
                    var4 = var4[var1];
                    if(!(var2 != var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var1 = _closure2_slot1;
                    var1 = var1.premiumTier;
                    var7 = var1 >= var4;
                    var1 = _closure1_slot8;
                    var9 = var1[var4];
                    var4 = var2 != var9;
                    var6 = undefined;
                    if(!var4) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var4 = _closure2_slot2;
                    var10 = var4.unlockedPowerups;
                    var11 = var2 == var10;
                    var4 = undefined;
                    if(var11) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var4 = var10[var9];
case 12:
                    var6 = var4;
case 10:
                    var10 = var2 != var9;
                    var4 = undefined;
                    if(!var10) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var8 = _closure2_slot2;
                    var8 = var8.allPowerups;
                    var10 = var2 == var8;
                    var1 = undefined;
                    if(var10) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var1 = var8[var9];
case 16:
                    var4 = var1;
case 14:
                    var1 = {};
                    var1['isActiveFromLevel'] = var7;
                    var1['levelEntitlement'] = var6;
                    var1['levelPowerup'] = var4;
                    _fun0002_ip = 18; continue _fun0002;
case 8:
                    var4 = {};
                    var6 = false;
                    var4['isActiveFromLevel'] = var6;
                    var6 = undefined;
                    var4['levelEntitlement'] = var6;
                    var4['levelPowerup'] = var6;
                    var1 = var4;
                    _fun0002_ip = 18; continue _fun0002;
case 4:
                    var4 = {};
                    var6 = false;
                    var4['isActiveFromLevel'] = var6;
                    var6 = undefined;
                    var4['levelEntitlement'] = var6;
                    var4['levelPowerup'] = var6;
                    var1 = var4;
case 18:
                    var10 = var1.isActiveFromLevel;
                    var6 = var1.levelEntitlement;
                    var4 = var1.levelPowerup;
                    var9 = _closure2_slot3;
                    if(!var9) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var11 = _closure1_slot5;
                    var7 = var11.has;
                    var1 = var3.skuId;
                    var9 = var7.bind(var11)(var1);
case 19:
                    var1 = _closure2_slot2;
                    var11 = var2 == var1;
                    var7 = undefined;
                    var1 = undefined;
                    if(var11) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                    var8 = _closure2_slot2;
                    var11 = var8.unlockedPowerups;
                    var8 = var2 == var11;
                    var1 = undefined;
                    if(var8) { _fun0002_ip = 21; continue _fun0002 }
case 23:
                    var8 = var3.skuId;
                    var1 = var11[var8];
case 21:
                    var11 = var2 != var1;
                    var8 = null;
                    if(!var11) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                    var8 = var1;
case 24:
                    var1 = {};
                    var11 = _closure1_slot6;
                    var11 = var11.INACTIVE;
                    var1['type'] = var11;
                    var1['powerup'] = var3;
                    var1['sourceEntitlement'] = var7;
                    var1['sourcePowerup'] = var7;
                    if(var10) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                    if(var9) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    if(!(var2 != var8)) { _fun0002_ip = 30; continue _fun0002 }
case 31:
                    var2 = {};
                    var9 = _closure1_slot6;
                    var9 = var9.POWERUP_ACTIVATED;
                    var2['type'] = var9;
                    var2['powerup'] = var3;
                    var2['sourceEntitlement'] = var8;
                    var2['sourcePowerup'] = var3;
                    var1 = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var8 = _closure1_slot6;
                    var8 = var8.TIER_OVERRIDE_ACTIVATED;
                    var2['type'] = var8;
                    var2['powerup'] = var3;
                    var2['sourceEntitlement'] = var7;
                    var2['sourcePowerup'] = var3;
                    var1 = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 26:
                    var2 = {};
                    var7 = _closure1_slot6;
                    var7 = var7.LEVEL_ACTIVATED;
                    var2['type'] = var7;
                    var2['powerup'] = var3;
                    var2['sourceEntitlement'] = var6;
                    var2['sourcePowerup'] = var4;
                    var1 = var2;
case 30:
                    return var1;
case 2:
                    var1 = {};
                    var2 = _closure2_slot1;
                    var6 = null;
                    var8 = var6 == var2;
                    var2 = undefined;
                    var4 = undefined;
                    if(var8) { _fun0002_ip = 32; continue _fun0002 }
case 33:
                    var7 = _closure2_slot1;
                    var9 = var7.features;
                    var7 = var6 == var9;
                    var4 = undefined;
                    if(var7) { _fun0002_ip = 32; continue _fun0002 }
case 34:
                    var8 = var9.has;
                    var7 = _closure1_slot9;
                    var7 = var7.GAME_SERVERS;
                    var4 = var8.bind(var9)(var7);
case 32:
                    if(!(var6 != var4)) { _fun0002_ip = 35; continue _fun0002 }
case 36:
                    if(var4) { _fun0002_ip = 37; continue _fun0002 }
case 35:
                    var4 = _closure1_slot6;
                    var4 = var4.INACTIVE;
                    _fun0002_ip = 38; continue _fun0002;
case 37:
                    var5 = _closure1_slot6;
                    var4 = var5.POWERUP_ACTIVATED;
case 38:
                    var1['type'] = var4;
                    var1['powerup'] = var3;
                    var1['sourceEntitlement'] = var2;
                    var1['sourcePowerup'] = var2;
                    return var1;
                }
            };
            var _closure2_slot4 = var2;
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 5;
            var6 = var7[var2];
            var8 = undefined;
            var11 = var4.bind(var8)(var6);
            var10 = var11.useStateFromStores;
            var6 = _closure1_slot2;
            var9 = new Array(1);
            var9[0] = var6;
            var6 = function() {
                var3 = _closure1_slot2;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var10.bind(var11)(var9, var6);
            var _closure2_slot1 = var6;
            var2 = var7[var2];
            var9 = var4.bind(var8)(var2);
            var7 = var9.useStateFromStores;
            var2 = _closure1_slot3;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getStateForGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var7.bind(var9)(var4, var2);
            var _closure2_slot2 = var2;
            var2 = null;
            var7 = var2 == var6;
            var4 = undefined;
            if(var7) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var7 = var6.features;
            var6 = var2 == var7;
            var4 = undefined;
            if(var6) { _fun0001_ip = 39; continue _fun0001 }
case 41:
            var6 = var7.has;
            var5 = _closure1_slot9;
            var5 = var5.PREMIUM_TIER_3_OVERRIDE;
            var4 = var6.bind(var7)(var5);
case 39:
            var2 = var2 != var4;
            if(!var2) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var2 = var4;
case 42:
            var _closure2_slot3 = var2;
            var2 = var3.map;
            var1 = function(arg1) {
                var3 = _closure2_slot4;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot10 = var2;
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
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.GAME_SERVER_POWERUP_SKU_ID;
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.GUILD_POWERUP_TIER_3_OVERRIDDEN_SKUS;
    var _closure1_slot5 = var8;
    var8 = var5.PowerupActiveStatusType;
    var _closure1_slot6 = var8;
    var8 = var5.POWERUPS_INCLUDED_IN_LEVEL;
    var _closure1_slot7 = var8;
    var5 = var5.BOOSTING_TIER_TO_LEVEL_SKU_ID;
    var _closure1_slot8 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.GuildFeatures;
    var _closure1_slot9 = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/powerups/hooks/usePowerupActiveStatus.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function usePowerupActiveStatus(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg2;
            var5 = _closure1_slot10;
            var2 = null;
            if(!(var2 != var1)) { _fun0003_ip = 44; continue _fun0003 }
case 45:
            var2 = new Array(1);
            var2[0] = var1;
            _fun0003_ip = 46; continue _fun0003;
case 44:
            var2 = new Array(0);
case 46:
            var3 = undefined;
            var1 = arg1;
            var2 = var5.bind(var3)(var1, var2);
            var5 = var2.length;
            var1 = 0;
            if(!(!(var5 <= var1))) { _fun0003_ip = 47; continue _fun0003 }
case 48:
            var1 = var2[var1];
            _fun0003_ip = 49; continue _fun0003;
case 47:
            var2 = {};
            var4 = _closure1_slot6;
            var4 = var4.INACTIVE;
            var2['type'] = var4;
            var2['sourceEntitlement'] = var3;
            var2['sourcePowerup'] = var3;
            var1 = var2;
case 49:
            return var1;
        }
    };
    var3['default'] = var5;
    var4 = function isPowerupActiveStatusActive(arg1) {
        var1 = arg1;
        var2 = var1.type;
        var1 = _closure1_slot6;
        var1 = var1.INACTIVE;
        var1 = var2 !== var1;
        return var1;
    };
    var3['isPowerupActiveStatusActive'] = var4;
    var3['usePowerupsActiveStatuses'] = var2;
    return var1;
})();