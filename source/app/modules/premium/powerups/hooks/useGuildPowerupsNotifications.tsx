// app/modules/premium/powerups/hooks/useGuildPowerupsNotifications.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var12 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var13 = dependencyMap;
    var _closure1_slot0 = var12;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var13;
    var9 = function maybeGetLevelUnlockedPopoutDCF(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var10 = arg1;
            var6 = arg2;
            var _closure2_slot0 = var10;
            var _closure2_slot1 = var6;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var7 = var2.ReverseOrderedTiers;
            var4 = var7.find;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot9;
                    var1 = arg1;
                    var5 = var3[var1];
                    var1 = null;
                    var4 = var1 != var5;
                    var3 = undefined;
                    if(!var4) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure2_slot1;
                    var4 = var4.unlockedPowerups;
                    var3 = var4[var5];
case 2:
                    var1 = var1 != var3;
                    if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = var3.user_id;
                    var2 = _closure1_slot11;
                    var1 = var3 !== var2;
case 4:
                    return var1;
                }
            };
            var7 = var4.bind(var7)(var2);
            var2 = null;
            if(!(var2 != var7)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = _closure1_slot10;
            var9 = var4[var7];
            var _closure2_slot2 = var9;
            if(!(var2 != var9)) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 10;
            var4 = var11[var4];
            var8 = var8.bind(var1)(var4);
            var4 = var8.isContentDismissed;
            var4 = var4.bind(var8)(var9, var10);
            if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 9:
            var4 = _closure1_slot9;
            var7 = var4[var7];
            var8 = var2 != var7;
            var4 = undefined;
            if(!var8) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var6 = var6.allPowerups;
            var4 = var6[var7];
case 10:
            if(!(var2 != var4)) { _fun0001_ip = 6; continue _fun0001 }
case 12:
            var2 = {};
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 11;
            var5 = var7[var5];
            var5 = var6.bind(var1)(var5);
            var5 = var5.GuildPowerupNotificationPopoutType;
            var5 = var5.LEVEL_REACHED;
            var2['type'] = var5;
            var2['powerup'] = var4;
            var3 = function markAsDismissed(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var7 = var3.bind(var1)(var2);
                var6 = var7.markContentAsDismissed;
                var11 = _closure2_slot2;
                var10 = _closure2_slot0;
                var9 = true;
                var8 = arg1;
                var12 = var7;
                var2 = var12[var6](var11, var10, var9, var8, var7);
                return var1;
            };
            var2['markAsDismissed'] = var3;
            return var2;
case 6:
            return var1;
        }
    };
    var _closure1_slot19 = var9;
    var8 = function maybeGetPerkPurchaseablePopoutDCF(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var10 = arg1;
            var _closure2_slot0 = var10;
            var1 = arg2;
            var _closure2_slot1 = var1;
            var1 = arg3;
            var _closure2_slot2 = var1;
            var2 = _closure1_slot5;
            var1 = var2.getGuild;
            var3 = var1.bind(var2)(var10);
            var2 = null;
            var5 = var2 == var3;
            var8 = undefined;
            var1 = undefined;
            if(var5) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var1 = var3.premiumTier;
case 13:
            if(!(var2 == var1)) { _fun0003_ip = 7; continue _fun0003 }
case 4:
            var2 = _closure1_slot16;
            var1 = var2.NONE;
case 7:
            var _closure2_slot3 = var1;
            var1 = global;
            var3 = var1.Array;
            var2 = var3.from;
            var5 = _closure1_slot12;
            var1 = var5.values;
            var1 = var1.bind(var5)();
            var3 = var2.bind(var3)(var1);
            var2 = var3.flatMap;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = arg1;
                    var4 = var3.length;
                    var2 = 0;
                    if(!(!(var4 <= var2))) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var4 = var3.some;
                    var2 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var4 = arg1;
                            var1 = _closure2_slot1;
                            var1 = var1.unlockedPowerups;
                            var3 = var1[var4];
                            var1 = null;
                            if(!(var1 == var3)) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                            var3 = _closure1_slot15;
                            var3 = var3[var4];
                            var1 = var1 != var3;
                            if(!var1) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                            var2 = _closure2_slot3;
                            var1 = var2 >= var3;
case 19:
                            return var1;
case 17:
                            var1 = true;
                            return var1;
                        }
                    };
                    var2 = var4.bind(var3)(var2);
                    if(var2) { _fun0004_ip = 15; continue _fun0004 }
case 21:
                    var2 = var3.map;
                    var1 = function(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var1 = _closure2_slot1;
                            var2 = var1.allPowerups;
                            var1 = arg1;
                            var2 = var2[var1];
                            var4 = null;
                            var5 = var4 == var2;
                            var1 = null;
                            if(var5) { _fun0006_ip = 22; continue _fun0006 }
case 23:
                            var6 = _closure2_slot2;
                            var5 = var2.cost;
                            var5 = var6 < var5;
                            var1 = null;
                            if(var5) { _fun0006_ip = 22; continue _fun0006 }
case 24:
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var5 = 12;
                            var6 = var6[var5];
                            var5 = undefined;
                            var7 = var7.bind(var5)(var6);
                            var6 = var7.isGuildPowerupRollbackEnabled;
                            var5 = _closure2_slot0;
                            var3 = 'maybeGetPerkPurchaseablePopoutDCF';
                            var3 = var6.bind(var7)(var5, var2, var3);
                            var1 = null;
                            if(var3) { _fun0006_ip = 22; continue _fun0006 }
case 25:
                            var1 = var2;
case 22:
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    _fun0004_ip = 26; continue _fun0004;
case 15:
                    var1 = new Array(0);
case 26:
                    return var1;
                }
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.filter;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 13;
            var1 = var7[var1];
            var1 = var5.bind(var8)(var1);
            var1 = var1.isNotNullish;
            var5 = var2.bind(var3)(var1);
            var2 = var5.length;
            var1 = 0;
            if(!(var1 === var2)) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            return var8;
case 27:
            var1 = var5.length;
            var3 = 1;
            if(!(var3 === var1)) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 10;
            var1 = var11[var1];
            var7 = var9.bind(var8)(var1);
            var2 = var7.isContentDismissed;
            var1 = 14;
            var1 = var11[var1];
            var1 = var9.bind(var8)(var1);
            var1 = var1.DismissibleGuildContent;
            var1 = var1.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK;
            var1 = var2.bind(var7)(var1, var10);
            if(var1) { _fun0003_ip = 29; continue _fun0003 }
case 31:
            var1 = {};
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 11;
            var2 = var9[var2];
            var2 = var7.bind(var8)(var2);
            var2 = var2.GuildPowerupNotificationPopoutType;
            var2 = var2.PERKS_PURCHASABLE;
            var1['type'] = var2;
            var1['powerups'] = var5;
            var2 = function markAsDismissed(arg1) {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 10;
                var2 = var4[var1];
                var1 = undefined;
                var7 = var3.bind(var1)(var2);
                var6 = var7.markContentAsDismissed;
                var2 = 14;
                var2 = var4[var2];
                var2 = var3.bind(var1)(var2);
                var2 = var2.DismissibleGuildContent;
                var11 = var2.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK;
                var10 = _closure2_slot0;
                var9 = true;
                var8 = arg1;
                var12 = var7;
                var2 = var12[var6](var11, var10, var9, var8, var7);
                return var1;
            };
            var1['markAsDismissed'] = var2;
            _fun0003_ip = 32; continue _fun0003;
case 29:
            var2 = var5.length;
            var3 = var2 > var3;
            var2 = undefined;
            if(!var3) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 10;
            var3 = var12[var3];
            var9 = var11.bind(var8)(var3);
            var7 = var9.isContentDismissed;
            var3 = 14;
            var3 = var12[var3];
            var3 = var11.bind(var8)(var3);
            var3 = var3.DismissibleGuildContent;
            var3 = var3.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK;
            var3 = var7.bind(var9)(var3, var10);
            var2 = undefined;
            if(var3) { _fun0003_ip = 33; continue _fun0003 }
case 35:
            var3 = {};
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 11;
            var6 = var9[var6];
            var6 = var7.bind(var8)(var6);
            var6 = var6.GuildPowerupNotificationPopoutType;
            var6 = var6.PERKS_PURCHASABLE;
            var3['type'] = var6;
            var3['powerups'] = var5;
            var4 = function markAsDismissed(arg1) {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 10;
                var2 = var4[var1];
                var1 = undefined;
                var7 = var3.bind(var1)(var2);
                var6 = var7.markContentAsDismissed;
                var2 = 14;
                var2 = var4[var2];
                var2 = var3.bind(var1)(var2);
                var2 = var2.DismissibleGuildContent;
                var11 = var2.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK;
                var10 = _closure2_slot0;
                var9 = true;
                var8 = arg1;
                var12 = var7;
                var2 = var12[var6](var11, var10, var9, var8, var7);
                return var1;
            };
            var3['markAsDismissed'] = var4;
            var2 = var3;
case 33:
            var1 = var2;
case 32:
            return var1;
        }
    };
    var _closure1_slot20 = var8;
    var7 = function maybeGetGameServerHostingGuildEligiblePopoutDCF(arg1, arg2, arg3, arg4) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var7 = arg1;
            var5 = arg4;
            var _closure2_slot0 = var7;
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 15;
            var2 = var2[var1];
            var1 = undefined;
            var8 = var6.bind(var1)(var2);
            var6 = var8.getGameServerEnabled;
            var2 = 'maybeGetGameServerHostingGuildEligiblePopoutDCF';
            var2 = var6.bind(var8)(var7, var2);
            if(!var2) { _fun0007_ip = 36; continue _fun0007 }
case 37:
            var2 = arg2;
            if(var2) { _fun0007_ip = 36; continue _fun0007 }
case 38:
            var2 = null;
            if(!(var2 != var5)) { _fun0007_ip = 36; continue _fun0007 }
case 39:
            var2 = arg3;
            if(!(var2 >= var5)) { _fun0007_ip = 36; continue _fun0007 }
case 40:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 10;
            var2 = var9[var2];
            var6 = var8.bind(var1)(var2);
            var5 = var6.isContentDismissed;
            var2 = 14;
            var2 = var9[var2];
            var2 = var8.bind(var1)(var2);
            var2 = var2.DismissibleGuildContent;
            var2 = var2.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK;
            var2 = var5.bind(var6)(var2, var7);
            if(var2) { _fun0007_ip = 36; continue _fun0007 }
case 41:
            var2 = {};
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 11;
            var4 = var6[var4];
            var4 = var5.bind(var1)(var4);
            var4 = var4.GuildPowerupNotificationPopoutType;
            var4 = var4.GAME_SERVER_HOSTING_GUILD_ELIGIBLE;
            var2['type'] = var4;
            var3 = function markAsDismissed(arg1) {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 10;
                var2 = var4[var1];
                var1 = undefined;
                var7 = var3.bind(var1)(var2);
                var6 = var7.markContentAsDismissed;
                var2 = 14;
                var2 = var4[var2];
                var2 = var3.bind(var1)(var2);
                var2 = var2.DismissibleGuildContent;
                var11 = var2.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK;
                var10 = _closure2_slot0;
                var9 = true;
                var8 = arg1;
                var12 = var7;
                var2 = var12[var6](var11, var10, var9, var8, var7);
                return var1;
            };
            var2['markAsDismissed'] = var3;
            return var2;
case 36:
            return var1;
        }
    };
    var _closure1_slot21 = var7;
    var6 = function useGuildPowerupNewPerkAvailableCoachmarkVersion(arg1, arg2) {
        var8 = arg1;
        var7 = arg2;
        var _closure2_slot0 = var8;
        var _closure2_slot1 = var7;
        var5 = _closure1_slot0;
        var10 = _closure1_slot2;
        var3 = 16;
        var3 = var10[var3];
        var4 = undefined;
        var6 = var5.bind(var4)(var3);
        var3 = var6.useVanityURLPerkPurchaseEnabled;
        var11 = 'GuildPowerupsChannelRow';
        var9 = var3.bind(var6)(var8, var11);
        var _closure2_slot2 = var9;
        var3 = 15;
        var3 = var10[var3];
        var6 = var5.bind(var4)(var3);
        var3 = var6.useGameServerEnabled;
        var6 = var3.bind(var6)(var8, var11);
        var _closure2_slot3 = var6;
        var3 = 17;
        var3 = var10[var3];
        var10 = var5.bind(var4)(var3);
        var5 = var10.useStateFromStores;
        var3 = _closure1_slot5;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var4 = _closure1_slot5;
                var3 = var4.getGuild;
                var1 = _closure2_slot0;
                var3 = var3.bind(var4)(var1);
                var1 = null;
                var4 = var1 == var3;
                var1 = undefined;
                if(var4) { _fun0008_ip = 37; continue _fun0008 }
case 42:
                var4 = var3.features;
                var3 = var4.has;
                var2 = _closure1_slot17;
                var2 = var2.GAME_SERVERS;
                var1 = var3.bind(var4)(var2);
case 37:
                return var1;
            }
        };
        var5 = var5.bind(var10)(var4, var3);
        var _closure2_slot4 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useMemo;
        var2 = new Array(5);
        var2[0] = var9;
        var2[1] = var8;
        var2[2] = var7;
        var2[3] = var6;
        var2[4] = var5;
        var1 = function() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var1 = _closure2_slot3;
                if(!var1) { _fun0009_ip = 43; continue _fun0009 }
case 44:
                var1 = _closure2_slot4;
                if(var1) { _fun0009_ip = 43; continue _fun0009 }
case 45:
                var1 = _closure1_slot13;
                var1 = var1.GAME_SERVER_HOSTING;
                return var1;
case 43:
                var1 = global;
                var5 = var1.Array;
                var4 = var5.from;
                var6 = _closure1_slot14;
                var2 = _closure1_slot13;
                var2 = var2.GUILD_TAG_BADGE_PACKS_WAVE_ONE;
                var2 = var6[var2];
                var5 = var4.bind(var5)(var2);
                var4 = var5.some;
                var2 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var1 = _closure2_slot1;
                        var2 = null;
                        var4 = var2 == var1;
                        var1 = undefined;
                        if(var4) { _fun0010_ip = 20; continue _fun0010 }
case 46:
                        var3 = _closure2_slot1;
                        var4 = var3.unlockedPowerups;
                        var3 = var2 == var4;
                        var1 = undefined;
                        if(var3) { _fun0010_ip = 20; continue _fun0010 }
case 21:
                        var3 = arg1;
                        var1 = var4[var3];
case 20:
                        var1 = var2 != var1;
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var2);
                if(var2) { _fun0009_ip = 22; continue _fun0009 }
case 47:
                var2 = _closure1_slot13;
                var2 = var2.GUILD_TAG_BADGE_PACKS_WAVE_ONE;
                return var2;
case 22:
                var2 = _closure2_slot2;
                if(!var2) { _fun0009_ip = 48; continue _fun0009 }
case 49:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 18;
                var2 = var5[var2];
                var8 = undefined;
                var2 = var4.bind(var8)(var2);
                var7 = var2.VANITY_URL_POWERUP_SKU_ID;
                var2 = _closure1_slot15;
                var4 = var2[var7];
                var2 = _closure2_slot1;
                var5 = null;
                var6 = var5 == var2;
                var2 = undefined;
                if(var6) { _fun0009_ip = 50; continue _fun0009 }
case 51:
                var6 = _closure2_slot1;
                var6 = var6.unlockedPowerups;
                var9 = var5 == var6;
                var2 = undefined;
                if(var9) { _fun0009_ip = 50; continue _fun0009 }
case 52:
                var2 = var6[var7];
case 50:
                var2 = var5 != var2;
                if(!(var5 == var4)) { _fun0009_ip = 53; continue _fun0009 }
case 54:
                if(var2) { _fun0009_ip = 53; continue _fun0009 }
case 55:
                var6 = _closure1_slot13;
                var6 = var6.VANITY_URL;
                return var6;
case 53:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 9;
                var6 = var9[var6];
                var7 = var7.bind(var8)(var6);
                var6 = var7.getGuildTierFromGuild;
                var3 = _closure2_slot0;
                var3 = var6.bind(var7)(var3);
                if(!(var5 != var3)) { _fun0009_ip = 48; continue _fun0009 }
case 56:
                if(!(var5 != var4)) { _fun0009_ip = 48; continue _fun0009 }
case 57:
                if(!(var3 < var4)) { _fun0009_ip = 48; continue _fun0009 }
case 58:
                if(var2) { _fun0009_ip = 48; continue _fun0009 }
case 59:
                var1 = _closure1_slot13;
                var1 = var1.VANITY_URL;
                return var1;
case 48:
                var1 = 0;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot22 = var6;
    var5 = function useGuildPowerupsNotificationIndicator(arg1, arg2, arg3) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var10 = arg1;
            var9 = arg2;
            var11 = arg3;
            var _closure2_slot0 = var10;
            var _closure2_slot1 = var9;
            var _closure2_slot2 = var11;
            var4 = _closure1_slot1;
            var13 = _closure1_slot2;
            var3 = 19;
            var3 = var13[var3];
            var5 = undefined;
            var3 = var4.bind(var5)(var3);
            var3 = var3.bind(var5)(var10);
            var7 = var3.available;
            var _closure2_slot3 = var7;
            var3 = 20;
            var3 = var13[var3];
            var4 = var4.bind(var5)(var3);
            var3 = 'useGuildPowerupsNotificationIndicator';
            var3 = var4.bind(var5)(var10, var3);
            var8 = var3.shouldShow;
            var12 = _closure1_slot0;
            var3 = 21;
            var3 = var13[var3];
            var6 = var12.bind(var5)(var3);
            var4 = var6.useIsSingleUseGuildDismissibleContentDismissed;
            var3 = 14;
            var3 = var13[var3];
            var3 = var12.bind(var5)(var3);
            var3 = var3.DismissibleContent;
            var3 = var3.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION;
            var3 = var4.bind(var6)(var3, var10);
            if(!var8) { _fun0011_ip = 60; continue _fun0011 }
case 61:
            var8 = !var3;
case 60:
            var _closure2_slot4 = var8;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 17;
            var3 = var6[var3];
            var10 = var4.bind(var5)(var3);
            var6 = var10.useStateFromStores;
            var3 = _closure1_slot6;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getStateForGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var6.bind(var10)(var4, var3);
            var _closure2_slot5 = var6;
            var4 = _closure1_slot4;
            var3 = var4.useMemo;
            var2 = new Array(6);
            var2[0] = var7;
            var7 = null;
            var12 = var7 == var11;
            var10 = undefined;
            if(var12) { _fun0011_ip = 62; continue _fun0011 }
case 63:
            var10 = var11.lastBoostCount;
case 62:
            var2[1] = var10;
            var12 = var7 == var11;
            var10 = undefined;
            if(var12) { _fun0011_ip = 64; continue _fun0011 }
case 57:
            var10 = var11.lastSeenWarningNotification;
case 64:
            var2[2] = var10;
            var2[3] = var9;
            var2[4] = var8;
            var7 = var7 == var6;
            var5 = undefined;
            if(var7) { _fun0011_ip = 65; continue _fun0011 }
case 66:
            var5 = var6.entitlements;
case 65:
            var2[5] = var5;
            var1 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var1)) { _fun0012_ip = 67; continue _fun0012 }
case 16:
                    var1 = _closure2_slot1;
                    var10 = var1.unlockedPowerups;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 22;
                    var1 = var6[var1];
                    var6 = undefined;
                    var9 = var5.bind(var6)(var1);
                    var8 = var9.getExpiringGuildEntitlements;
                    var5 = global;
                    var7 = var5.Object;
                    var1 = var7.values;
                    var16 = var1.bind(var7)(var10);
                    var7 = new Array(0);
                    var1 = 0;
                    var17 = var7;
                    var15 = 0;
                    var11 = arraySpread(var17, var16, var15);
                    var13 = var5.Object;
                    var12 = var13.values;
                    var10 = _closure2_slot5;
                    var14 = var3 == var10;
                    var10 = undefined;
                    if(var14) { _fun0012_ip = 68; continue _fun0012 }
case 69:
                    var14 = _closure2_slot5;
                    var10 = var14.entitlements;
case 68:
                    if(!(var3 == var10)) { _fun0012_ip = 70; continue _fun0012 }
case 71:
                    var10 = {};
case 70:
                    var16 = var12.bind(var13)(var10);
                    var17 = var7;
                    var15 = var11;
                    var10 = arraySpread(var17, var16, var15);
                    var7 = var8.bind(var9)(var7);
                    var8 = _closure2_slot2;
                    var9 = var3 == var8;
                    var8 = undefined;
                    if(var9) { _fun0012_ip = 28; continue _fun0012 }
case 72:
                    var9 = _closure2_slot2;
                    var8 = var9.lastSeenWarningNotification;
case 28:
                    if(!(var3 == var8)) { _fun0012_ip = 73; continue _fun0012 }
case 74:
                    var10 = var5.Date;
                    var9 = var10.now;
                    var8 = var9.bind(var10)();
case 73:
                    var10 = var5.Date;
                    var9 = var7.length;
                    var5 = 1;
                    var5 = var9 - var5;
                    var9 = var7[var5];
                    var11 = var3 == var9;
                    var5 = undefined;
                    if(var11) { _fun0012_ip = 75; continue _fun0012 }
case 76:
                    var5 = var9.ends_at;
case 75:
                    var9 = var10.prototype;
                    var9 = Object.create(var9, {constructor: {value: var10}});
                    var18 = var9;
                    var17 = var5;
                    var5 = new var18[var10](var17, var16);
                    var9 = var5 instanceof Object ? var5 : var9;
                    var5 = var9.getTime;
                    var5 = var5.bind(var9)();
                    var9 = _closure2_slot2;
                    var10 = var3 == var9;
                    var9 = undefined;
                    if(var10) { _fun0012_ip = 77; continue _fun0012 }
case 48:
                    var10 = _closure2_slot2;
                    var9 = var10.lastBoostCount;
case 77:
                    var10 = var3 != var9;
                    var3 = 0;
                    if(!var10) { _fun0012_ip = 78; continue _fun0012 }
case 79:
                    var3 = var9;
case 78:
                    var7 = var7.length;
                    var7 = var7 > var1;
                    if(!var7) { _fun0012_ip = 80; continue _fun0012 }
case 81:
                    var7 = var8 < var5;
case 80:
                    var5 = _closure2_slot3;
                    var5 = var5 - var3;
                    if(var7) { _fun0012_ip = 82; continue _fun0012 }
case 83:
                    var7 = _closure2_slot4;
                    if(var7) { _fun0012_ip = 82; continue _fun0012 }
case 84:
                    var2 = _closure2_slot3;
                    if(!(var2 !== var3)) { _fun0012_ip = 85; continue _fun0012 }
case 86:
                    if(!(!(var5 > var1))) { _fun0012_ip = 87; continue _fun0012 }
case 85:
                    var1 = {};
                    var1['indicator'] = var6;
                    var2 = false;
                    var1['showUnread'] = var2;
                    _fun0012_ip = 88; continue _fun0012;
case 87:
                    var2 = {};
                    var3 = {};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 11;
                    var7 = var9[var7];
                    var7 = var8.bind(var6)(var7);
                    var7 = var7.GuildPowerupNotificationIndicatorType;
                    var7 = var7.UNREAD;
                    var3['type'] = var7;
                    var3['count'] = var5;
                    var2['indicator'] = var3;
                    var3 = true;
                    var2['showUnread'] = var3;
                    var1 = var2;
case 88:
                    _fun0012_ip = 89; continue _fun0012;
case 82:
                    var2 = {};
                    var3 = {};
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 11;
                    var4 = var7[var4];
                    var4 = var5.bind(var6)(var4);
                    var4 = var4.GuildPowerupNotificationIndicatorType;
                    var4 = var4.WARNING;
                    var3['type'] = var4;
                    var2['indicator'] = var3;
                    var3 = true;
                    var2['showUnread'] = var3;
                    var1 = var2;
case 89:
                    return var1;
case 67:
                    var1 = {};
                    var2 = undefined;
                    var1['indicator'] = var2;
                    var2 = false;
                    var1['showUnread'] = var2;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var _closure1_slot23 = var5;
    var4 = function useGuildPowerupsChannelListPopout(arg1, arg2) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var23 = arg1;
            var13 = arg2;
            var _closure2_slot0 = var23;
            var _closure2_slot1 = var13;
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var17 = 23;
            var3 = var6[var17];
            var15 = undefined;
            var7 = var9.bind(var15)(var3);
            var5 = var7.usePerksCoachmarkDCF;
            var3 = null;
            var4 = var3 != var13;
            var5 = var5.bind(var7)(var4);
            var4 = _closure1_slot3;
            var14 = 2;
            var5 = var4.bind(var15)(var5, var14);
            var8 = 0;
            var10 = var5[var8];
            var4 = 1;
            var11 = var5[var4];
            var _closure2_slot2 = var11;
            var7 = 14;
            var5 = var6[var7];
            var5 = var9.bind(var15)(var5);
            var5 = var5.DismissibleContent;
            var5 = var5.GUILD_POWERUP_PERKS_COACHMARK;
            var12 = var10 === var5;
            var _closure2_slot3 = var12;
            var10 = _closure1_slot1;
            var5 = 19;
            var5 = var6[var5];
            var5 = var10.bind(var15)(var5);
            var5 = var5.bind(var15)(var23);
            var22 = var5.available;
            var _closure2_slot4 = var22;
            var5 = 17;
            var10 = var6[var5];
            var19 = var9.bind(var15)(var10);
            var18 = var19.useStateFromStores;
            var10 = _closure1_slot5;
            var16 = new Array(1);
            var16[0] = var10;
            var10 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var4 = _closure1_slot5;
                    var2 = var4.getGuild;
                    var1 = _closure2_slot0;
                    var4 = var2.bind(var4)(var1);
                    var1 = null;
                    var5 = var1 == var4;
                    var2 = undefined;
                    if(var5) { _fun0014_ip = 37; continue _fun0014 }
case 42:
                    var5 = var4.features;
                    var4 = var5.has;
                    var3 = _closure1_slot17;
                    var3 = var3.GAME_SERVERS;
                    var2 = var4.bind(var5)(var3);
case 37:
                    var1 = var1 != var2;
                    if(!var1) { _fun0014_ip = 90; continue _fun0014 }
case 91:
                    var1 = var2;
case 90:
                    return var1;
                }
            };
            var21 = var18.bind(var19)(var16, var10);
            var _closure2_slot5 = var21;
            var5 = var6[var5];
            var18 = var9.bind(var15)(var5);
            var16 = var18.useStateFromStores;
            var5 = _closure1_slot6;
            var10 = new Array(1);
            var10[0] = var5;
            var5 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getLowestGameCostForGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var16.bind(var18)(var10, var5);
            var _closure2_slot6 = var10;
            var5 = _closure1_slot22;
            var5 = var5.bind(var15)(var23, var13);
            var _closure2_slot7 = var5;
            var6 = var6[var17];
            var16 = var9.bind(var15)(var6);
            var9 = var16.useNewPerkAvailableCoachmarkDCF;
            var6 = var3 != var13;
            if(!var6) { _fun0013_ip = 92; continue _fun0013 }
case 93:
            var6 = !var12;
case 92:
            var9 = var9.bind(var16)(var6, var5);
            var6 = _closure1_slot3;
            var6 = var6.bind(var15)(var9, var14);
            var18 = var6[var8];
            var6 = var6[var4];
            var _closure2_slot8 = var6;
            var16 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = var9[var7];
            var7 = var16.bind(var15)(var7);
            var7 = var7.DismissibleContent;
            var7 = var7.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK;
            var7 = var18 === var7;
            var _closure2_slot9 = var7;
            var20 = _closure1_slot4;
            var19 = var20.useMemo;
            var18 = new Array(7);
            var18[0] = var23;
            var18[1] = var13;
            var18[2] = var12;
            var18[3] = var7;
            var18[4] = var22;
            var18[5] = var21;
            var18[6] = var10;
            var10 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var5 = null;
                    if(!(var5 != var1)) { _fun0015_ip = 94; continue _fun0015 }
case 95:
                    var1 = _closure2_slot3;
                    if(var1) { _fun0015_ip = 94; continue _fun0015 }
case 96:
                    var1 = _closure2_slot9;
                    if(var1) { _fun0015_ip = 94; continue _fun0015 }
case 97:
                    var7 = _closure1_slot19;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var3 = undefined;
                    var1 = var7.bind(var3)(var2, var1);
                    if(!(var5 == var1)) { _fun0015_ip = 98; continue _fun0015 }
case 17:
                    var9 = _closure1_slot20;
                    var8 = _closure2_slot0;
                    var7 = _closure2_slot1;
                    var2 = _closure2_slot4;
                    var2 = var9.bind(var3)(var8, var7, var2);
                    if(!(var5 == var2)) { _fun0015_ip = 99; continue _fun0015 }
case 100:
                    var9 = _closure1_slot21;
                    var13 = _closure2_slot0;
                    var12 = _closure2_slot5;
                    var11 = _closure2_slot4;
                    var10 = _closure2_slot6;
                    var14 = undefined;
                    var4 = var14[var9](var13, var12, var11, var10, var9);
                    var5 = var5 != var4;
                    var3 = undefined;
                    if(!var5) { _fun0015_ip = 101; continue _fun0015 }
case 49:
                    var3 = var4;
case 101:
                    return var3;
case 99:
                    return var2;
case 98:
                    return var1;
case 94:
                    var1 = undefined;
                    return var1;
                }
            };
            var10 = var19.bind(var20)(var10, var18);
            var _closure2_slot10 = var10;
            var9 = var9[var17];
            var16 = var16.bind(var15)(var9);
            var9 = var16.useGuildPowerupNotificationDCF;
            var3 = var3 != var10;
            var9 = var9.bind(var16)(var3);
            var3 = _closure1_slot3;
            var3 = var3.bind(var15)(var9, var14);
            var9 = var3[var8];
            var _closure2_slot11 = var9;
            var8 = var3[var4];
            var _closure2_slot12 = var8;
            var4 = _closure1_slot4;
            var3 = var4.useMemo;
            var2 = new Array(9);
            var2[0] = var13;
            var2[1] = var12;
            var2[2] = var11;
            var2[3] = var10;
            var2[4] = var9;
            var2[5] = var8;
            var2[6] = var7;
            var2[7] = var6;
            var2[8] = var5;
            var1 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var6 = null;
                    if(!(var6 == var3)) { _fun0016_ip = 102; continue _fun0016 }
case 103:
                    var3 = undefined;
                    return var3;
case 102:
                    var3 = _closure2_slot3;
                    if(var3) { _fun0016_ip = 104; continue _fun0016 }
case 105:
                    var3 = _closure2_slot9;
                    if(var3) { _fun0016_ip = 70; continue _fun0016 }
case 106:
                    var7 = _closure2_slot11;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 14;
                    var3 = var5[var3];
                    var5 = undefined;
                    var3 = var4.bind(var5)(var3);
                    var3 = var3.DismissibleContent;
                    var4 = var3.GUILD_POWERUP_NOTIFICATION;
                    var3 = undefined;
                    if(!(var7 === var4)) { _fun0016_ip = 71; continue _fun0016 }
case 40:
                    var4 = _closure2_slot10;
                    var4 = var6 != var4;
                    var3 = undefined;
                    if(!var4) { _fun0016_ip = 71; continue _fun0016 }
case 107:
                    var4 = {};
                    var8 = _closure2_slot10;
                    var9 = var4;
                    var5 = copyDataProperties(var9, var8);
                    var6 = function markAsDismissed(arg1) {
                        var4 = arg1;
                        var3 = _closure2_slot12;
                        var1 = undefined;
                        var3 = var3.bind(var1)(var4);
                        var3 = _closure2_slot10;
                        var2 = var3.markAsDismissed;
                        var2 = var2.bind(var3)(var4);
                        return var1;
                    };
                    var5 = 'markAsDismissed';
                    var4[var5] = var6;
                    var3 = var4;
case 71:
                    return var3;
case 70:
                    var5 = _closure2_slot7;
                    var4 = _closure1_slot13;
                    var4 = var4.GAME_SERVER_HOSTING;
                    if(!(var5 !== var4)) { _fun0016_ip = 108; continue _fun0016 }
case 10:
                    var5 = _closure1_slot14;
                    var4 = _closure2_slot7;
                    var4 = var5[var4];
                    var _closure3_slot0 = var4;
                    var4 = global;
                    var6 = var4.Object;
                    var5 = var6.values;
                    var4 = _closure2_slot1;
                    var4 = var4.allPowerups;
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.filter;
                    var1 = function(arg1) {
                        var3 = _closure3_slot0;
                        var2 = var3.has;
                        var1 = arg1;
                        var1 = var1.skuId;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var4 = var4.bind(var5)(var1);
                    var5 = var4.length;
                    var1 = 0;
                    if(!(var1 !== var5)) { _fun0016_ip = 109; continue _fun0016 }
case 110:
                    var1 = {};
                    var1['powerups'] = var4;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 11;
                    var5 = var5[var4];
                    var4 = undefined;
                    var4 = var6.bind(var4)(var5);
                    var4 = var4.GuildPowerupNotificationPopoutType;
                    var4 = var4.NEW_PERK_AVAILABLE;
                    var1['type'] = var4;
                    var4 = _closure2_slot8;
                    var1['markAsDismissed'] = var4;
                    return var1;
case 109:
                    var1 = undefined;
                    return var1;
case 108:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 11;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var3 = var3.GuildPowerupNotificationPopoutType;
                    var3 = var3.GAME_SERVER_HOSTING_AVAILABLE;
                    var1['type'] = var3;
                    var3 = _closure2_slot8;
                    var1['markAsDismissed'] = var3;
                    return var1;
case 104:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 11;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var3 = var3.GuildPowerupNotificationPopoutType;
                    var3 = var3.PERKS_AVAILABLE;
                    var1['type'] = var3;
                    var2 = _closure2_slot2;
                    var1['markAsDismissed'] = var2;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var _closure1_slot24 = var4;
    var10 = function useGuildPowerupsNotifications(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 17;
            var7 = var6[var4];
            var1 = undefined;
            var12 = var5.bind(var1)(var7);
            var11 = var12.useStateFromStores;
            var7 = _closure1_slot7;
            var10 = new Array(1);
            var10[0] = var7;
            var9 = new Array(1);
            var9[0] = var8;
            var7 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getNotificationStateForGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var11.bind(var12)(var10, var7, var9);
            var4 = var6[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.useStateFromStores;
            var9 = _closure1_slot8;
            var4 = new Array(1);
            var4[0] = var9;
            var3 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getStateForGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var5.bind(var6)(var4, var3);
            var4 = _closure1_slot23;
            var5 = null;
            var9 = var5 != var6;
            var3 = undefined;
            if(!var9) { _fun0017_ip = 70; continue _fun0017 }
case 9:
            var3 = var6;
case 70:
            var3 = var4.bind(var1)(var8, var3, var7);
            var4 = var3.indicator;
            var3 = var3.showUnread;
            var7 = _closure1_slot24;
            var9 = var5 != var6;
            var2 = undefined;
            if(!var9) { _fun0017_ip = 111; continue _fun0017 }
case 112:
            var2 = var6;
case 111:
            var2 = var7.bind(var1)(var8, var2);
            if(!(var5 !== var6)) { _fun0017_ip = 52; continue _fun0017 }
case 27:
            if(!(var5 == var4)) { _fun0017_ip = 113; continue _fun0017 }
case 114:
            if(var3) { _fun0017_ip = 113; continue _fun0017 }
case 115:
            if(!(var5 == var2)) { _fun0017_ip = 113; continue _fun0017 }
case 52:
            return var1;
case 113:
            var1 = {};
            var1['indicator'] = var4;
            var1['showUnread'] = var3;
            var1['popout'] = var2;
            return var1;
        }
    };
    var _closure1_slot25 = var10;
    var1 = global;
    var16 = var1.Object;
    var15 = var16.defineProperty;
    var11 = {};
    var1 = true;
    var11['value'] = var1;
    var1 = '__esModule';
    var1 = var15.bind(var16)(var3, var1, var11);
    var1 = 0;
    var11 = var13[var1];
    var1 = undefined;
    var11 = var14.bind(var1)(var11);
    var _closure1_slot3 = var11;
    var11 = 1;
    var15 = var13[var11];
    var11 = metroImportAll;
    var11 = var11.bind(var1)(var15);
    var _closure1_slot4 = var11;
    var11 = 2;
    var11 = var13[var11];
    var11 = var14.bind(var1)(var11);
    var _closure1_slot5 = var11;
    var11 = 3;
    var11 = var13[var11];
    var11 = var14.bind(var1)(var11);
    var _closure1_slot6 = var11;
    var11 = 4;
    var11 = var13[var11];
    var11 = var14.bind(var1)(var11);
    var _closure1_slot7 = var11;
    var11 = 5;
    var11 = var13[var11];
    var11 = var14.bind(var1)(var11);
    var _closure1_slot8 = var11;
    var11 = 6;
    var11 = var13[var11];
    var11 = var12.bind(var1)(var11);
    var14 = var11.BOOSTING_TIER_TO_LEVEL_SKU_ID;
    var _closure1_slot9 = var14;
    var14 = var11.BOOSTING_TIER_TO_LEVEL_UNLOCKED_DC;
    var _closure1_slot10 = var14;
    var14 = var11.GUILD_POWERUP_MIGRATION_USER_ID;
    var _closure1_slot11 = var14;
    var14 = var11.GUILD_POWERUP_NEW_PERK_GROUPS;
    var _closure1_slot12 = var14;
    var14 = var11.GuildPowerupNewPerkAvailableCoachmarkVersion;
    var _closure1_slot13 = var14;
    var14 = var11.NEW_PERK_AVAILABLE_COACHMARK_VERSION_TO_POWERUP_SKU_ID_SET;
    var _closure1_slot14 = var14;
    var11 = var11.POWERUPS_INCLUDED_IN_LEVEL;
    var _closure1_slot15 = var11;
    var11 = 7;
    var11 = var13[var11];
    var11 = var12.bind(var1)(var11);
    var14 = var11.BoostedGuildTiers;
    var _closure1_slot16 = var14;
    var11 = var11.GuildFeatures;
    var _closure1_slot17 = var11;
    var11 = 8;
    var11 = var13[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.ContentDismissActionType;
    var _closure1_slot18 = var11;
    var11 = 25;
    var11 = var13[var11];
    var13 = var12.bind(var1)(var11);
    var12 = var13.fileFinishedImporting;
    var11 = 'modules/premium/powerups/hooks/useGuildPowerupsNotifications.tsx';
    var11 = var12.bind(var13)(var11);
    var3['default'] = var10;
    var3['maybeGetLevelUnlockedPopoutDCF'] = var9;
    var3['maybeGetPerkPurchaseablePopoutDCF'] = var8;
    var3['maybeGetGameServerHostingGuildEligiblePopoutDCF'] = var7;
    var3['useGuildPowerupNewPerkAvailableCoachmarkVersion'] = var6;
    var3['useGuildPowerupsNotificationIndicator'] = var5;
    var3['useGuildPowerupsChannelListPopout'] = var4;
    var2 = function useDismissGuildPowerupsNotifications(arg1) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 17;
        var4 = var4[var1];
        var1 = undefined;
        var8 = var5.bind(var1)(var4);
        var6 = var8.useStateFromStores;
        var4 = _closure1_slot8;
        var5 = new Array(1);
        var5[0] = var4;
        var4 = function() {
            var3 = _closure1_slot8;
            var2 = var3.getStateForGuild;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6 = var6.bind(var8)(var5, var4);
        var _closure2_slot1 = var6;
        var4 = _closure1_slot25;
        var4 = var4.bind(var1)(var7);
        var _closure2_slot2 = var4;
        var10 = _closure1_slot4;
        var9 = var10.useEffect;
        var8 = new Array(1);
        var8[0] = var7;
        var5 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 24;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.guildPowerupsAckNotification;
            var2 = _closure2_slot0;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5 = var9.bind(var10)(var5, var8);
        var9 = _closure1_slot4;
        var8 = var9.useEffect;
        var5 = new Array(1);
        var5[0] = var4;
        var4 = function() {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var1 = _closure2_slot2;
                var5 = null;
                var2 = var5 == var1;
                var1 = undefined;
                var4 = undefined;
                if(var2) { _fun0018_ip = 21; continue _fun0018 }
case 96:
                var3 = _closure2_slot2;
                var3 = var3.popout;
                var2 = var5 == var3;
                var4 = var3;
case 21:
                if(var2) { _fun0018_ip = 116; continue _fun0018 }
case 117:
                var3 = var4.markAsDismissed;
                var2 = _closure1_slot18;
                var2 = var2.AUTO_DISMISS;
                var2 = var3.bind(var4)(var2);
case 116:
                return var1;
            }
        };
        var4 = var8.bind(var9)(var4, var5);
        var5 = _closure1_slot4;
        var4 = var5.useEffect;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var2 = function() {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var2 = _closure2_slot1;
                var1 = null;
                if(!(var1 != var2)) { _fun0019_ip = 4; continue _fun0019 }
case 95:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var3 = var1.ReverseOrderedTiers;
                var2 = var3.forEach;
                var1 = function(arg1) {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                        var5 = arg1;
                        var2 = _closure1_slot9;
                        var6 = var2[var5];
                        var3 = null;
                        if(!(var3 != var6)) { _fun0020_ip = 118; continue _fun0020 }
case 96:
                        var4 = _closure2_slot1;
                        var4 = var4.unlockedPowerups;
                        var4 = var4[var6];
                        if(!(var3 != var4)) { _fun0020_ip = 118; continue _fun0020 }
case 119:
                        var4 = _closure1_slot10;
                        var6 = var4[var5];
                        if(!(var3 != var6)) { _fun0020_ip = 118; continue _fun0020 }
case 14:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 10;
                        var4 = var4[var3];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.markContentAsDismissed;
                        var9 = _closure2_slot0;
                        var1 = _closure1_slot18;
                        var7 = var1.AUTO_DISMISS;
                        var8 = false;
                        var11 = var5;
                        var10 = var6;
                        var1 = var11[var4](var10, var9, var8, var7, var6);
case 118:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useDismissGuildPowerupsNotifications'] = var2;
    return var1;
})();