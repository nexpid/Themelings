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
        var9 = arg1;
        var8 = arg2;
        var _closure2_slot0 = var9;
        var _closure2_slot1 = var8;
        var6 = _closure1_slot0;
        var11 = _closure1_slot2;
        var3 = 16;
        var3 = var11[var3];
        var4 = undefined;
        var5 = var6.bind(var4)(var3);
        var3 = var5.useVanityURLPerkPurchaseEnabled;
        var12 = 'GuildPowerupsChannelRow';
        var10 = var3.bind(var5)(var9, var12);
        var _closure2_slot2 = var10;
        var3 = 15;
        var3 = var11[var3];
        var5 = var6.bind(var4)(var3);
        var3 = var5.useGameServerEnabled;
        var7 = var3.bind(var5)(var9, var12);
        var _closure2_slot3 = var7;
        var3 = 17;
        var3 = var11[var3];
        var5 = var6.bind(var4)(var3);
        var3 = var5.useGuildTagBadgePacksWaveTwoExperimentEnabled;
        var5 = var3.bind(var5)(var9, var12);
        var _closure2_slot4 = var5;
        var3 = 18;
        var3 = var11[var3];
        var11 = var6.bind(var4)(var3);
        var6 = var11.useStateFromStores;
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
        var6 = var6.bind(var11)(var4, var3);
        var _closure2_slot5 = var6;
        var4 = _closure1_slot4;
        var3 = var4.useMemo;
        var2 = new Array(6);
        var2[0] = var10;
        var2[1] = var9;
        var2[2] = var8;
        var2[3] = var7;
        var2[4] = var6;
        var2[5] = var5;
        var1 = function() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var1 = _closure2_slot4;
                if(!var1) { _fun0009_ip = 43; continue _fun0009 }
case 44:
                var1 = global;
                var6 = var1.Array;
                var5 = var6.from;
                var7 = _closure1_slot14;
                var4 = _closure1_slot13;
                var4 = var4.GUILD_TAG_BADGE_PACKS_WAVE_TWO;
                var4 = var7[var4];
                var6 = var5.bind(var6)(var4);
                var5 = var6.some;
                var4 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var1 = _closure2_slot1;
                        var2 = null;
                        var4 = var2 == var1;
                        var1 = undefined;
                        if(var4) { _fun0010_ip = 20; continue _fun0010 }
case 45:
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
                var4 = var5.bind(var6)(var4);
                if(var4) { _fun0009_ip = 43; continue _fun0009 }
case 46:
                var1 = _closure1_slot13;
                var1 = var1.GUILD_TAG_BADGE_PACKS_WAVE_TWO;
                return var1;
case 43:
                var1 = _closure2_slot3;
                if(!var1) { _fun0009_ip = 47; continue _fun0009 }
case 48:
                var1 = _closure2_slot5;
                if(var1) { _fun0009_ip = 47; continue _fun0009 }
case 49:
                var1 = _closure1_slot13;
                var1 = var1.GAME_SERVER_HOSTING;
                return var1;
case 47:
                var1 = global;
                var6 = var1.Array;
                var5 = var6.from;
                var7 = _closure1_slot14;
                var4 = _closure1_slot13;
                var4 = var4.GUILD_TAG_BADGE_PACKS_WAVE_ONE;
                var4 = var7[var4];
                var5 = var5.bind(var6)(var4);
                var4 = var5.some;
                var2 = function(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var1 = _closure2_slot1;
                        var2 = null;
                        var4 = var2 == var1;
                        var1 = undefined;
                        if(var4) { _fun0011_ip = 20; continue _fun0011 }
case 45:
                        var3 = _closure2_slot1;
                        var4 = var3.unlockedPowerups;
                        var3 = var2 == var4;
                        var1 = undefined;
                        if(var3) { _fun0011_ip = 20; continue _fun0011 }
case 21:
                        var3 = arg1;
                        var1 = var4[var3];
case 20:
                        var1 = var2 != var1;
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var2);
                if(var2) { _fun0009_ip = 50; continue _fun0009 }
case 28:
                var2 = _closure1_slot13;
                var2 = var2.GUILD_TAG_BADGE_PACKS_WAVE_ONE;
                return var2;
case 50:
                var2 = _closure2_slot2;
                if(!var2) { _fun0009_ip = 51; continue _fun0009 }
case 52:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 19;
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
                if(var6) { _fun0009_ip = 53; continue _fun0009 }
case 31:
                var6 = _closure2_slot1;
                var6 = var6.unlockedPowerups;
                var9 = var5 == var6;
                var2 = undefined;
                if(var9) { _fun0009_ip = 53; continue _fun0009 }
case 54:
                var2 = var6[var7];
case 53:
                var2 = var5 != var2;
                if(!(var5 == var4)) { _fun0009_ip = 55; continue _fun0009 }
case 56:
                if(var2) { _fun0009_ip = 55; continue _fun0009 }
case 57:
                var6 = _closure1_slot13;
                var6 = var6.VANITY_URL;
                return var6;
case 55:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 9;
                var6 = var9[var6];
                var7 = var7.bind(var8)(var6);
                var6 = var7.getGuildTierFromGuild;
                var3 = _closure2_slot0;
                var3 = var6.bind(var7)(var3);
                if(!(var5 != var3)) { _fun0009_ip = 51; continue _fun0009 }
case 58:
                if(!(var5 != var4)) { _fun0009_ip = 51; continue _fun0009 }
case 59:
                if(!(var3 < var4)) { _fun0009_ip = 51; continue _fun0009 }
case 60:
                if(var2) { _fun0009_ip = 51; continue _fun0009 }
case 61:
                var1 = _closure1_slot13;
                var1 = var1.VANITY_URL;
                return var1;
case 51:
                var1 = 0;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot22 = var6;
    var5 = function useGuildPowerupsNotificationIndicator(arg1, arg2, arg3) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var10 = arg1;
            var9 = arg2;
            var11 = arg3;
            var _closure2_slot0 = var10;
            var _closure2_slot1 = var9;
            var _closure2_slot2 = var11;
            var4 = _closure1_slot1;
            var13 = _closure1_slot2;
            var3 = 20;
            var3 = var13[var3];
            var5 = undefined;
            var3 = var4.bind(var5)(var3);
            var3 = var3.bind(var5)(var10);
            var7 = var3.available;
            var _closure2_slot3 = var7;
            var3 = 21;
            var3 = var13[var3];
            var4 = var4.bind(var5)(var3);
            var3 = 'useGuildPowerupsNotificationIndicator';
            var3 = var4.bind(var5)(var10, var3);
            var8 = var3.shouldShow;
            var12 = _closure1_slot0;
            var3 = 22;
            var3 = var13[var3];
            var6 = var12.bind(var5)(var3);
            var4 = var6.useIsSingleUseGuildDismissibleContentDismissed;
            var3 = 14;
            var3 = var13[var3];
            var3 = var12.bind(var5)(var3);
            var3 = var3.DismissibleContent;
            var3 = var3.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION;
            var3 = var4.bind(var6)(var3, var10);
            if(!var8) { _fun0012_ip = 62; continue _fun0012 }
case 63:
            var8 = !var3;
case 62:
            var _closure2_slot4 = var8;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 18;
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
            if(var12) { _fun0012_ip = 64; continue _fun0012 }
case 65:
            var10 = var11.lastBoostCount;
case 64:
            var2[1] = var10;
            var12 = var7 == var11;
            var10 = undefined;
            if(var12) { _fun0012_ip = 66; continue _fun0012 }
case 67:
            var10 = var11.lastSeenWarningNotification;
case 66:
            var2[2] = var10;
            var2[3] = var9;
            var2[4] = var8;
            var7 = var7 == var6;
            var5 = undefined;
            if(var7) { _fun0012_ip = 68; continue _fun0012 }
case 69:
            var5 = var6.entitlements;
case 68:
            var2[5] = var5;
            var1 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var1)) { _fun0013_ip = 70; continue _fun0013 }
case 16:
                    var1 = _closure2_slot1;
                    var10 = var1.unlockedPowerups;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 23;
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
                    if(var14) { _fun0013_ip = 71; continue _fun0013 }
case 72:
                    var14 = _closure2_slot5;
                    var10 = var14.entitlements;
case 71:
                    if(!(var3 == var10)) { _fun0013_ip = 73; continue _fun0013 }
case 74:
                    var10 = {};
case 73:
                    var16 = var12.bind(var13)(var10);
                    var17 = var7;
                    var15 = var11;
                    var10 = arraySpread(var17, var16, var15);
                    var7 = var8.bind(var9)(var7);
                    var8 = _closure2_slot2;
                    var9 = var3 == var8;
                    var8 = undefined;
                    if(var9) { _fun0013_ip = 28; continue _fun0013 }
case 75:
                    var9 = _closure2_slot2;
                    var8 = var9.lastSeenWarningNotification;
case 28:
                    if(!(var3 == var8)) { _fun0013_ip = 76; continue _fun0013 }
case 77:
                    var10 = var5.Date;
                    var9 = var10.now;
                    var8 = var9.bind(var10)();
case 76:
                    var10 = var5.Date;
                    var9 = var7.length;
                    var5 = 1;
                    var5 = var9 - var5;
                    var9 = var7[var5];
                    var11 = var3 == var9;
                    var5 = undefined;
                    if(var11) { _fun0013_ip = 78; continue _fun0013 }
case 79:
                    var5 = var9.ends_at;
case 78:
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
                    if(var10) { _fun0013_ip = 80; continue _fun0013 }
case 81:
                    var10 = _closure2_slot2;
                    var9 = var10.lastBoostCount;
case 80:
                    var10 = var3 != var9;
                    var3 = 0;
                    if(!var10) { _fun0013_ip = 82; continue _fun0013 }
case 83:
                    var3 = var9;
case 82:
                    var7 = var7.length;
                    var7 = var7 > var1;
                    if(!var7) { _fun0013_ip = 84; continue _fun0013 }
case 85:
                    var7 = var8 < var5;
case 84:
                    var5 = _closure2_slot3;
                    var5 = var5 - var3;
                    if(var7) { _fun0013_ip = 86; continue _fun0013 }
case 87:
                    var7 = _closure2_slot4;
                    if(var7) { _fun0013_ip = 86; continue _fun0013 }
case 58:
                    var2 = _closure2_slot3;
                    if(!(var2 !== var3)) { _fun0013_ip = 88; continue _fun0013 }
case 60:
                    if(!(!(var5 > var1))) { _fun0013_ip = 89; continue _fun0013 }
case 88:
                    var1 = {};
                    var1['indicator'] = var6;
                    var2 = false;
                    var1['showUnread'] = var2;
                    _fun0013_ip = 90; continue _fun0013;
case 89:
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
case 90:
                    _fun0013_ip = 91; continue _fun0013;
case 86:
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
case 91:
                    return var1;
case 70:
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
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var26 = arg1;
            var16 = arg2;
            var _closure2_slot0 = var26;
            var _closure2_slot1 = var16;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var20 = 24;
            var3 = var5[var20];
            var18 = undefined;
            var8 = var6.bind(var18)(var3);
            var7 = var8.usePerksCoachmarkDCF;
            var3 = null;
            var4 = var3 != var16;
            var7 = var7.bind(var8)(var4);
            var4 = _closure1_slot3;
            var17 = 2;
            var7 = var4.bind(var18)(var7, var17);
            var11 = 0;
            var9 = var7[var11];
            var4 = 1;
            var14 = var7[var4];
            var _closure2_slot2 = var14;
            var7 = 14;
            var8 = var5[var7];
            var8 = var6.bind(var18)(var8);
            var8 = var8.DismissibleContent;
            var8 = var8.GUILD_POWERUP_PERKS_COACHMARK;
            var15 = var9 === var8;
            var _closure2_slot3 = var15;
            var9 = _closure1_slot1;
            var8 = 20;
            var8 = var5[var8];
            var8 = var9.bind(var18)(var8);
            var8 = var8.bind(var18)(var26);
            var25 = var8.available;
            var _closure2_slot4 = var25;
            var8 = 18;
            var9 = var5[var8];
            var13 = var6.bind(var18)(var9);
            var12 = var13.useStateFromStores;
            var9 = _closure1_slot5;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var4 = _closure1_slot5;
                    var2 = var4.getGuild;
                    var1 = _closure2_slot0;
                    var4 = var2.bind(var4)(var1);
                    var1 = null;
                    var5 = var1 == var4;
                    var2 = undefined;
                    if(var5) { _fun0015_ip = 37; continue _fun0015 }
case 42:
                    var5 = var4.features;
                    var4 = var5.has;
                    var3 = _closure1_slot17;
                    var3 = var3.GAME_SERVERS;
                    var2 = var4.bind(var5)(var3);
case 37:
                    var1 = var1 != var2;
                    if(!var1) { _fun0015_ip = 92; continue _fun0015 }
case 93:
                    var1 = var2;
case 92:
                    return var1;
                }
            };
            var24 = var12.bind(var13)(var10, var9);
            var _closure2_slot5 = var24;
            var8 = var5[var8];
            var12 = var6.bind(var18)(var8);
            var10 = var12.useStateFromStores;
            var8 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getLowestGameCostForGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var10.bind(var12)(var9, var8);
            var _closure2_slot6 = var13;
            var8 = _closure1_slot22;
            var8 = var8.bind(var18)(var26, var16);
            var _closure2_slot7 = var8;
            var5 = var5[var20];
            var9 = var6.bind(var18)(var5);
            var6 = var9.useNewPerkAvailableCoachmarkDCF;
            var5 = var3 != var16;
            if(!var5) { _fun0014_ip = 94; continue _fun0014 }
case 95:
            var5 = !var15;
case 94:
            var6 = var6.bind(var9)(var5, var8);
            var5 = _closure1_slot3;
            var5 = var5.bind(var18)(var6, var17);
            var10 = var5[var11];
            var9 = var5[var4];
            var _closure2_slot8 = var9;
            var12 = _closure1_slot0;
            var5 = _closure1_slot2;
            var6 = var5[var7];
            var6 = var12.bind(var18)(var6);
            var6 = var6.DismissibleContent;
            var6 = var6.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK;
            var10 = var10 === var6;
            var _closure2_slot9 = var10;
            var19 = _closure1_slot1;
            var6 = 25;
            var6 = var5[var6];
            var6 = var19.bind(var18)(var6);
            var6 = var6.bind(var18)(var26);
            var _closure2_slot10 = var6;
            var5 = var5[var20];
            var19 = var12.bind(var18)(var5);
            var12 = var19.useBoostToUnlockCoachmarkDCF;
            var5 = var3 != var16;
            if(!var5) { _fun0014_ip = 96; continue _fun0014 }
case 97:
            var5 = !var15;
case 96:
            if(!var5) { _fun0014_ip = 98; continue _fun0014 }
case 99:
            var5 = !var10;
case 98:
            if(!var5) { _fun0014_ip = 100; continue _fun0014 }
case 101:
            var5 = var3 != var6;
case 100:
            var12 = var12.bind(var19)(var5, var26);
            var5 = _closure1_slot3;
            var5 = var5.bind(var18)(var12, var17);
            var21 = var5[var11];
            var5 = var5[var4];
            var _closure2_slot11 = var5;
            var19 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = var12[var7];
            var7 = var19.bind(var18)(var7);
            var7 = var7.DismissibleContent;
            var7 = var7.BOOST_TO_UNLOCK_COACHMARK;
            var7 = var21 === var7;
            var _closure2_slot12 = var7;
            var23 = _closure1_slot4;
            var22 = var23.useMemo;
            var21 = new Array(8);
            var21[0] = var26;
            var21[1] = var16;
            var21[2] = var15;
            var21[3] = var10;
            var21[4] = var7;
            var21[5] = var25;
            var21[6] = var24;
            var21[7] = var13;
            var13 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var5 = null;
                    if(!(var5 != var1)) { _fun0016_ip = 102; continue _fun0016 }
case 103:
                    var1 = _closure2_slot3;
                    if(var1) { _fun0016_ip = 102; continue _fun0016 }
case 104:
                    var1 = _closure2_slot9;
                    if(var1) { _fun0016_ip = 102; continue _fun0016 }
case 105:
                    var1 = _closure2_slot12;
                    if(var1) { _fun0016_ip = 102; continue _fun0016 }
case 106:
                    var7 = _closure1_slot19;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var3 = undefined;
                    var1 = var7.bind(var3)(var2, var1);
                    if(!(var5 == var1)) { _fun0016_ip = 73; continue _fun0016 }
case 37:
                    var9 = _closure1_slot20;
                    var8 = _closure2_slot0;
                    var7 = _closure2_slot1;
                    var2 = _closure2_slot4;
                    var2 = var9.bind(var3)(var8, var7, var2);
                    if(!(var5 == var2)) { _fun0016_ip = 74; continue _fun0016 }
case 107:
                    var9 = _closure1_slot21;
                    var13 = _closure2_slot0;
                    var12 = _closure2_slot5;
                    var11 = _closure2_slot4;
                    var10 = _closure2_slot6;
                    var14 = undefined;
                    var4 = var14[var9](var13, var12, var11, var10, var9);
                    var5 = var5 != var4;
                    var3 = undefined;
                    if(!var5) { _fun0016_ip = 108; continue _fun0016 }
case 109:
                    var3 = var4;
case 108:
                    return var3;
case 74:
                    return var2;
case 73:
                    return var1;
case 102:
                    var1 = undefined;
                    return var1;
                }
            };
            var13 = var22.bind(var23)(var13, var21);
            var _closure2_slot13 = var13;
            var12 = var12[var20];
            var19 = var19.bind(var18)(var12);
            var12 = var19.useGuildPowerupNotificationDCF;
            var3 = var3 != var13;
            var12 = var12.bind(var19)(var3);
            var3 = _closure1_slot3;
            var3 = var3.bind(var18)(var12, var17);
            var12 = var3[var11];
            var _closure2_slot14 = var12;
            var11 = var3[var4];
            var _closure2_slot15 = var11;
            var4 = _closure1_slot4;
            var3 = var4.useMemo;
            var2 = new Array(12);
            var2[0] = var16;
            var2[1] = var15;
            var2[2] = var14;
            var2[3] = var13;
            var2[4] = var12;
            var2[5] = var11;
            var2[6] = var10;
            var2[7] = var9;
            var2[8] = var8;
            var2[9] = var7;
            var2[10] = var6;
            var2[11] = var5;
            var1 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var6 = null;
                    if(!(var6 == var3)) { _fun0017_ip = 110; continue _fun0017 }
case 111:
                    var3 = undefined;
                    return var3;
case 110:
                    var3 = _closure2_slot3;
                    if(var3) { _fun0017_ip = 86; continue _fun0017 }
case 112:
                    var3 = _closure2_slot9;
                    if(var3) { _fun0017_ip = 113; continue _fun0017 }
case 114:
                    var3 = _closure2_slot12;
                    if(!var3) { _fun0017_ip = 17; continue _fun0017 }
case 115:
                    var3 = _closure2_slot10;
                    if(!(var6 == var3)) { _fun0017_ip = 63; continue _fun0017 }
case 17:
                    var7 = _closure2_slot14;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 14;
                    var3 = var5[var3];
                    var5 = undefined;
                    var3 = var4.bind(var5)(var3);
                    var3 = var3.DismissibleContent;
                    var4 = var3.GUILD_POWERUP_NOTIFICATION;
                    var3 = undefined;
                    if(!(var7 === var4)) { _fun0017_ip = 116; continue _fun0017 }
case 117:
                    var4 = _closure2_slot13;
                    var4 = var6 != var4;
                    var3 = undefined;
                    if(!var4) { _fun0017_ip = 116; continue _fun0017 }
case 72:
                    var4 = {};
                    var8 = _closure2_slot13;
                    var9 = var4;
                    var5 = copyDataProperties(var9, var8);
                    var6 = function markAsDismissed(arg1) {
                        var4 = arg1;
                        var3 = _closure2_slot15;
                        var1 = undefined;
                        var3 = var3.bind(var1)(var4);
                        var3 = _closure2_slot13;
                        var2 = var3.markAsDismissed;
                        var2 = var2.bind(var3)(var4);
                        return var1;
                    };
                    var5 = 'markAsDismissed';
                    var4[var5] = var6;
                    var3 = var4;
case 116:
                    _fun0017_ip = 118; continue _fun0017;
case 63:
                    var4 = {};
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 11;
                    var6 = var6[var5];
                    var5 = undefined;
                    var5 = var7.bind(var5)(var6);
                    var5 = var5.GuildPowerupNotificationPopoutType;
                    var5 = var5.BOOST_TO_UNLOCK;
                    var4['type'] = var5;
                    var5 = _closure2_slot10;
                    var4['powerup'] = var5;
                    var5 = _closure2_slot11;
                    var4['markAsDismissed'] = var5;
                    var3 = var4;
case 118:
                    return var3;
case 113:
                    var5 = _closure2_slot7;
                    var4 = _closure1_slot13;
                    var4 = var4.GAME_SERVER_HOSTING;
                    if(!(var5 !== var4)) { _fun0017_ip = 119; continue _fun0017 }
case 120:
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
                    if(!(var1 !== var5)) { _fun0017_ip = 121; continue _fun0017 }
case 122:
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
case 121:
                    var1 = undefined;
                    return var1;
case 119:
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
case 86:
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
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 18;
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
            if(!var9) { _fun0018_ip = 73; continue _fun0018 }
case 9:
            var3 = var6;
case 73:
            var3 = var4.bind(var1)(var8, var3, var7);
            var4 = var3.indicator;
            var3 = var3.showUnread;
            var7 = _closure1_slot24;
            var9 = var5 != var6;
            var2 = undefined;
            if(!var9) { _fun0018_ip = 123; continue _fun0018 }
case 124:
            var2 = var6;
case 123:
            var2 = var7.bind(var1)(var8, var2);
            if(!(var5 !== var6)) { _fun0018_ip = 125; continue _fun0018 }
case 27:
            if(!(var5 == var4)) { _fun0018_ip = 126; continue _fun0018 }
case 127:
            if(var3) { _fun0018_ip = 126; continue _fun0018 }
case 128:
            if(!(var5 == var2)) { _fun0018_ip = 126; continue _fun0018 }
case 125:
            return var1;
case 126:
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
    var11 = 27;
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
    var2 = function useAutoDismissGuildPowerupsNotifications(arg1) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 18;
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
            var1 = 26;
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
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var1 = _closure2_slot2;
                var6 = null;
                var2 = var6 == var1;
                var1 = undefined;
                var4 = undefined;
                if(var2) { _fun0019_ip = 20; continue _fun0019 }
case 104:
                var2 = _closure2_slot2;
                var2 = var2.popout;
                var3 = var6 == var2;
                var4 = undefined;
                if(var3) { _fun0019_ip = 20; continue _fun0019 }
case 114:
                var4 = var2.type;
case 20:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 11;
                var3 = var8[var3];
                var3 = var7.bind(var1)(var3);
                var3 = var3.GuildPowerupNotificationPopoutType;
                var3 = var3.BOOST_TO_UNLOCK;
                if(!(var4 !== var3)) { _fun0019_ip = 129; continue _fun0019 }
case 40:
                var3 = _closure2_slot2;
                var3 = var6 == var3;
                var4 = undefined;
                if(var3) { _fun0019_ip = 47; continue _fun0019 }
case 130:
                var5 = _closure2_slot2;
                var5 = var5.popout;
                var3 = var6 == var5;
                var4 = var5;
case 47:
                if(var3) { _fun0019_ip = 129; continue _fun0019 }
case 131:
                var3 = var4.markAsDismissed;
                var2 = _closure1_slot18;
                var2 = var2.AUTO_DISMISS;
                var2 = var3.bind(var4)(var2);
case 129:
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
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var2 = _closure2_slot1;
                var1 = null;
                if(!(var1 != var2)) { _fun0020_ip = 4; continue _fun0020 }
case 103:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var3 = var1.ReverseOrderedTiers;
                var2 = var3.forEach;
                var1 = function(arg1) {
                    _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                        var5 = arg1;
                        var2 = _closure1_slot9;
                        var6 = var2[var5];
                        var3 = null;
                        if(!(var3 != var6)) { _fun0021_ip = 132; continue _fun0021 }
case 104:
                        var4 = _closure2_slot1;
                        var4 = var4.unlockedPowerups;
                        var4 = var4[var6];
                        if(!(var3 != var4)) { _fun0021_ip = 132; continue _fun0021 }
case 133:
                        var4 = _closure1_slot10;
                        var6 = var4[var5];
                        if(!(var3 != var6)) { _fun0021_ip = 132; continue _fun0021 }
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
case 132:
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
    var3['useAutoDismissGuildPowerupsNotifications'] = var2;
    return var1;
})();