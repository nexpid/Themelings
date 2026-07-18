// app/modules/premium/powerups/hooks/GuildPowerupsNotificationsDCF.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 4;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/hooks/GuildPowerupsNotificationsDCF.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function usePerksCoachmarkDCF(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 0;
            var1 = var3[var1];
            var6 = undefined;
            var3 = var2.bind(var6)(var1);
            var2 = var3.useSelectedDismissibleContent;
            var1 = arg1;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = new Array(0);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 1;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var4 = var4.DismissibleContent;
            var5 = var4.GUILD_POWERUP_PERKS_COACHMARK;
            var4 = new Array(1);
            var4[0] = var5;
            var1 = var4;
case 4:
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['usePerksCoachmarkDCF'] = var4;
    var4 = function useNewPerkAvailableCoachmarkDCF(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg2;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 0;
            var1 = var1[var6];
            var7 = undefined;
            var3 = var2.bind(var7)(var1);
            var2 = var3.useSelectedVersionedDismissibleContent;
            var9 = arg1;
            var1 = null;
            if(!var9) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var6 = var4 > var6;
            var1 = null;
            if(!var6) { _fun0002_ip = 5; continue _fun0002 }
case 7:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 1;
            var5 = var8[var5];
            var5 = var6.bind(var7)(var5);
            var5 = var5.DismissibleContent;
            var1 = var5.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK;
case 5:
            var1 = var2.bind(var3)(var1, var4);
            return var1;
        }
    };
    var3['useNewPerkAvailableCoachmarkDCF'] = var4;
    var4 = function useGuildPowerupNotificationDCF(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 0;
            var1 = var3[var1];
            var7 = undefined;
            var4 = var2.bind(var7)(var1);
            var3 = var4.useSelectedTimeRecurringDismissibleContent;
            var1 = arg1;
            var2 = null;
            if(!var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 1;
            var1 = var8[var1];
            var1 = var6.bind(var7)(var1);
            var1 = var1.DismissibleContent;
            var2 = var1.GUILD_POWERUP_NOTIFICATION;
case 8:
            var1 = {};
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 2;
            var5 = var8[var5];
            var5 = var6.bind(var7)(var5);
            var5 = var5.GUILD_POWERUP_NOTIFICATION_COOLDOWN;
            var1['cooldownDurationMs'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['useGuildPowerupNotificationDCF'] = var4;
    var4 = function useNewGamesCoachmarkDC() {
        var1 = [null];
        var2 = function() {
            var1 = undefined;
            return var1;
        };
        var1[1] = var2;
        return var1;
    };
    var3['useNewGamesCoachmarkDC'] = var4;
    var4 = function useGameServerPricingCoachmarkDCF() {
        var1 = [null];
        var2 = function() {
            var1 = undefined;
            return var1;
        };
        var1[1] = var2;
        return var1;
    };
    var3['useGameServerPricingCoachmarkDCF'] = var4;
    var4 = function useBoostToUnlockCoachmarkDCF(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 3;
            var2 = var5[var2];
            var7 = undefined;
            var4 = var3.bind(var7)(var2);
            var3 = var4.useConfig;
            var2 = {};
            var6 = 'useBoostToUnlockCoachmarkDCF';
            var2['location'] = var6;
            var2 = var3.bind(var4)(var2);
            var2 = var2.showCoachmark;
            var4 = _closure1_slot0;
            var3 = 0;
            var3 = var5[var3];
            var6 = var4.bind(var7)(var3);
            var5 = var6.useSelectedTimeRecurringGuildDismissibleContent;
            var8 = arg1;
            var4 = null;
            if(!var8) { _fun0004_ip = 10; continue _fun0004 }
case 11:
            var4 = null;
            if(!var2) { _fun0004_ip = 10; continue _fun0004 }
case 12:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 1;
            var2 = var8[var2];
            var2 = var3.bind(var7)(var2);
            var2 = var2.DismissibleContent;
            var4 = var2.BOOST_TO_UNLOCK_COACHMARK;
case 10:
            var3 = {};
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 2;
            var9 = var8[var1];
            var9 = var2.bind(var7)(var9);
            var9 = var9.BOOST_TO_UNLOCK_COACHMARK_COOLDOWN;
            var3['cooldownDurationMs'] = var9;
            var1 = var8[var1];
            var1 = var2.bind(var7)(var1);
            var1 = var1.BOOST_TO_UNLOCK_COACHMARK_MAX_TIMES_TO_RECUR;
            var3['numTimesToRecur'] = var1;
            var12 = arg2;
            var10 = arg3;
            var14 = var6;
            var13 = var4;
            var11 = var3;
            var1 = var14[var5](var13, var12, var11, var10, var9);
            return var1;
        }
    };
    var3['useBoostToUnlockCoachmarkDCF'] = var4;
    var2 = function useExpiringPowerupCoachmarkDCF() {
        var1 = [null];
        var2 = function() {
            var1 = undefined;
            return var1;
        };
        var1[1] = var2;
        return var1;
    };
    var3['useExpiringPowerupCoachmarkDCF'] = var2;
    return var1;
})();