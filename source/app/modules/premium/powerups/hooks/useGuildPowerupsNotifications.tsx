// app/modules/premium/powerups/hooks/useGuildPowerupsNotifications.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var11 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var12;
    var8 = function maybeGetLevelUnlockedPopoutDCF(arg1, arg2) {
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
    var _closure1_slot19 = var8;
    var7 = function maybeGetPerkPurchaseablePopoutDCF(arg1, arg2, arg3, arg4) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var10 = arg1;
            var _closure2_slot0 = var10;
            var1 = arg2;
            var _closure2_slot1 = var1;
            var1 = arg3;
            var _closure2_slot2 = var1;
            var1 = arg4;
            var _closure2_slot3 = var1;
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
            if(!(var2 == var1)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var2 = _closure1_slot16;
            var1 = var2.NONE;
case 15:
            var _closure2_slot4 = var1;
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
                    if(!(!(var4 <= var2))) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var4 = var3.some;
                    var2 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var4 = arg1;
                            var1 = _closure2_slot1;
                            var1 = var1.unlockedPowerups;
                            var3 = var1[var4];
                            var1 = null;
                            if(!(var1 == var3)) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                            var3 = _closure1_slot15;
                            var3 = var3[var4];
                            var1 = var1 != var3;
                            if(!var1) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                            var2 = _closure2_slot4;
                            var1 = var2 >= var3;
case 21:
                            return var1;
case 19:
                            var1 = true;
                            return var1;
                        }
                    };
                    var2 = var4.bind(var3)(var2);
                    if(var2) { _fun0004_ip = 17; continue _fun0004 }
case 23:
                    var2 = var3.map;
                    var1 = function(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var2 = arg1;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 12;
                            var1 = var4[var1];
                            var8 = undefined;
                            var1 = var3.bind(var8)(var1);
                            var1 = var1.GUILD_POWERUP_GUILD_THEME_SKU_ID;
                            if(!(var2 === var1)) { _fun0006_ip = 21; continue _fun0006 }
case 24:
                            var1 = _closure2_slot3;
                            if(var1) { _fun0006_ip = 21; continue _fun0006 }
case 25:
                            var1 = null;
                            return var1;
case 21:
                            var1 = _closure2_slot1;
                            var1 = var1.allPowerups;
                            var4 = var1[var2];
                            var3 = null;
                            var2 = var3 == var4;
                            var1 = null;
                            if(var2) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                            var7 = _closure2_slot2;
                            var2 = var4.cost;
                            var2 = var7 < var2;
                            var1 = null;
                            if(var2) { _fun0006_ip = 26; continue _fun0006 }
case 28:
                            var9 = var4.dependencies;
                            var7 = var9.every;
                            var2 = function(arg1) {
                                var1 = _closure2_slot1;
                                var2 = var1.unlockedPowerups;
                                var1 = arg1;
                                var2 = var2[var1];
                                var1 = null;
                                var1 = var1 != var2;
                                return var1;
                            };
                            var7 = var7.bind(var9)(var2);
                            var2 = null;
                            if(!var7) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                            var7 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var6 = 13;
                            var6 = var9[var6];
                            var8 = var7.bind(var8)(var6);
                            var7 = var8.isGuildPowerupRollbackEnabled;
                            var6 = _closure2_slot0;
                            var5 = 'maybeGetPerkPurchaseablePopoutDCF';
                            var5 = var7.bind(var8)(var6, var4, var5);
                            var3 = null;
                            if(var5) { _fun0006_ip = 31; continue _fun0006 }
case 32:
                            var3 = var4;
case 31:
                            var2 = var3;
case 29:
                            var1 = var2;
case 26:
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    _fun0004_ip = 33; continue _fun0004;
case 17:
                    var1 = new Array(0);
case 33:
                    return var1;
                }
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.filter;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 14;
            var1 = var7[var1];
            var1 = var5.bind(var8)(var1);
            var1 = var1.isNotNullish;
            var5 = var2.bind(var3)(var1);
            var2 = var5.length;
            var1 = 0;
            if(!(var1 === var2)) { _fun0003_ip = 34; continue _fun0003 }
case 31:
            return var8;
case 34:
            var1 = var5.length;
            var3 = 1;
            if(!(var3 === var1)) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 10;
            var1 = var11[var1];
            var7 = var9.bind(var8)(var1);
            var2 = var7.isContentDismissed;
            var1 = 15;
            var1 = var11[var1];
            var1 = var9.bind(var8)(var1);
            var1 = var1.DismissibleGuildContent;
            var1 = var1.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK;
            var1 = var2.bind(var7)(var1, var10);
            if(var1) { _fun0003_ip = 35; continue _fun0003 }
case 37:
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
                var2 = 15;
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
            _fun0003_ip = 38; continue _fun0003;
case 35:
            var2 = var5.length;
            var3 = var2 > var3;
            var2 = undefined;
            if(!var3) { _fun0003_ip = 39; continue _fun0003 }
case 40:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 10;
            var3 = var12[var3];
            var9 = var11.bind(var8)(var3);
            var7 = var9.isContentDismissed;
            var3 = 15;
            var3 = var12[var3];
            var3 = var11.bind(var8)(var3);
            var3 = var3.DismissibleGuildContent;
            var3 = var3.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK;
            var3 = var7.bind(var9)(var3, var10);
            var2 = undefined;
            if(var3) { _fun0003_ip = 39; continue _fun0003 }
case 41:
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
                var2 = 15;
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
case 39:
            var1 = var2;
case 38:
            return var1;
        }
    };
    var _closure1_slot20 = var7;
    var6 = function maybeGetGameServerHostingGuildEligiblePopoutDCF(arg1, arg2, arg3, arg4) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var7 = arg1;
            var5 = arg4;
            var _closure2_slot0 = var7;
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 16;
            var2 = var2[var1];
            var1 = undefined;
            var8 = var6.bind(var1)(var2);
            var6 = var8.getGameServerEnabled;
            var2 = 'maybeGetGameServerHostingGuildEligiblePopoutDCF';
            var2 = var6.bind(var8)(var7, var2);
            if(!var2) { _fun0007_ip = 42; continue _fun0007 }
case 14:
            var2 = arg2;
            if(var2) { _fun0007_ip = 42; continue _fun0007 }
case 43:
            var2 = null;
            if(!(var2 != var5)) { _fun0007_ip = 42; continue _fun0007 }
case 44:
            var2 = arg3;
            if(!(var2 >= var5)) { _fun0007_ip = 42; continue _fun0007 }
case 45:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 10;
            var2 = var9[var2];
            var6 = var8.bind(var1)(var2);
            var5 = var6.isContentDismissed;
            var2 = 15;
            var2 = var9[var2];
            var2 = var8.bind(var1)(var2);
            var2 = var2.DismissibleGuildContent;
            var2 = var2.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK;
            var2 = var5.bind(var6)(var2, var7);
            if(var2) { _fun0007_ip = 42; continue _fun0007 }
case 46:
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
                var2 = 15;
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
case 42:
            return var1;
        }
    };
    var _closure1_slot21 = var6;
    var5 = function useGuildPowerupsNotificationIndicator(arg1, arg2, arg3) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var12 = arg1;
            var9 = arg2;
            var11 = arg3;
            var _closure2_slot0 = var12;
            var _closure2_slot1 = var9;
            var _closure2_slot2 = var11;
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 17;
            var3 = var7[var3];
            var5 = undefined;
            var3 = var4.bind(var5)(var3);
            var3 = var3.bind(var5)(var12);
            var10 = var3.available;
            var _closure2_slot3 = var10;
            var3 = 18;
            var3 = var7[var3];
            var4 = var4.bind(var5)(var3);
            var3 = 'useGuildPowerupsNotificationIndicator';
            var4 = var4.bind(var5)(var12, var3);
            var6 = _closure1_slot0;
            var3 = 19;
            var3 = var7[var3];
            var8 = var6.bind(var5)(var3);
            var6 = var8.useIsSingleUseGuildDismissibleContentDismissed;
            var7 = null;
            var13 = var7 != var4;
            var3 = null;
            if(!var13) { _fun0008_ip = 47; continue _fun0008 }
case 48:
            var3 = var4.dismissibleContent;
case 47:
            var3 = var6.bind(var8)(var3, var12);
            var8 = var7 != var4;
            if(!var8) { _fun0008_ip = 46; continue _fun0008 }
case 49:
            var8 = !var3;
case 46:
            var _closure2_slot4 = var8;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 20;
            var3 = var6[var3];
            var12 = var4.bind(var5)(var3);
            var6 = var12.useStateFromStores;
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
            var6 = var6.bind(var12)(var4, var3);
            var _closure2_slot5 = var6;
            var4 = _closure1_slot4;
            var3 = var4.useMemo;
            var2 = new Array(6);
            var2[0] = var10;
            var12 = var7 == var11;
            var10 = undefined;
            if(var12) { _fun0008_ip = 50; continue _fun0008 }
case 51:
            var10 = var11.lastBoostCount;
case 50:
            var2[1] = var10;
            var12 = var7 == var11;
            var10 = undefined;
            if(var12) { _fun0008_ip = 52; continue _fun0008 }
case 53:
            var10 = var11.lastSeenWarningNotification;
case 52:
            var2[2] = var10;
            var2[3] = var9;
            var2[4] = var8;
            var7 = var7 == var6;
            var5 = undefined;
            if(var7) { _fun0008_ip = 54; continue _fun0008 }
case 55:
            var5 = var6.entitlements;
case 54:
            var2[5] = var5;
            var1 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var1)) { _fun0009_ip = 56; continue _fun0009 }
case 18:
                    var1 = _closure2_slot1;
                    var10 = var1.unlockedPowerups;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 21;
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
                    if(var14) { _fun0009_ip = 57; continue _fun0009 }
case 58:
                    var14 = _closure2_slot5;
                    var10 = var14.entitlements;
case 57:
                    if(!(var3 == var10)) { _fun0009_ip = 30; continue _fun0009 }
case 9:
                    var10 = {};
case 30:
                    var16 = var12.bind(var13)(var10);
                    var17 = var7;
                    var15 = var11;
                    var10 = arraySpread(var17, var16, var15);
                    var7 = var8.bind(var9)(var7);
                    var8 = _closure2_slot2;
                    var9 = var3 == var8;
                    var8 = undefined;
                    if(var9) { _fun0009_ip = 59; continue _fun0009 }
case 60:
                    var9 = _closure2_slot2;
                    var8 = var9.lastSeenWarningNotification;
case 59:
                    if(!(var3 == var8)) { _fun0009_ip = 61; continue _fun0009 }
case 62:
                    var10 = var5.Date;
                    var9 = var10.now;
                    var8 = var9.bind(var10)();
case 61:
                    var10 = var5.Date;
                    var9 = var7.length;
                    var5 = 1;
                    var5 = var9 - var5;
                    var9 = var7[var5];
                    var11 = var3 == var9;
                    var5 = undefined;
                    if(var11) { _fun0009_ip = 63; continue _fun0009 }
case 64:
                    var5 = var9.ends_at;
case 63:
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
                    if(var10) { _fun0009_ip = 65; continue _fun0009 }
case 66:
                    var10 = _closure2_slot2;
                    var9 = var10.lastBoostCount;
case 65:
                    var10 = var3 != var9;
                    var3 = 0;
                    if(!var10) { _fun0009_ip = 67; continue _fun0009 }
case 68:
                    var3 = var9;
case 67:
                    var7 = var7.length;
                    var7 = var7 > var1;
                    if(!var7) { _fun0009_ip = 69; continue _fun0009 }
case 70:
                    var7 = var8 < var5;
case 69:
                    var5 = _closure2_slot3;
                    var5 = var5 - var3;
                    if(var7) { _fun0009_ip = 71; continue _fun0009 }
case 72:
                    var7 = _closure2_slot4;
                    if(var7) { _fun0009_ip = 71; continue _fun0009 }
case 73:
                    var2 = _closure2_slot3;
                    if(!(var2 !== var3)) { _fun0009_ip = 74; continue _fun0009 }
case 75:
                    if(!(!(var5 > var1))) { _fun0009_ip = 76; continue _fun0009 }
case 74:
                    var1 = {};
                    var1['indicator'] = var6;
                    var2 = false;
                    var1['showUnread'] = var2;
                    _fun0009_ip = 77; continue _fun0009;
case 76:
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
case 77:
                    _fun0009_ip = 78; continue _fun0009;
case 71:
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
case 78:
                    return var1;
case 56:
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
    var _closure1_slot22 = var5;
    var4 = function useGuildPowerupsChannelListPopout(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var34 = arg1;
            var23 = arg2;
            var _closure2_slot0 = var34;
            var _closure2_slot1 = var23;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var27 = 22;
            var3 = var9[var27];
            var25 = undefined;
            var6 = var8.bind(var25)(var3);
            var5 = var6.usePerksCoachmarkDCF;
            var3 = null;
            var4 = var3 != var23;
            var5 = var5.bind(var6)(var4);
            var4 = _closure1_slot3;
            var24 = 2;
            var5 = var4.bind(var25)(var5, var24);
            var18 = 0;
            var7 = var5[var18];
            var4 = 1;
            var21 = var5[var4];
            var _closure2_slot2 = var21;
            var6 = 15;
            var5 = var9[var6];
            var5 = var8.bind(var25)(var5);
            var5 = var5.DismissibleContent;
            var5 = var5.GUILD_POWERUP_PERKS_COACHMARK;
            var22 = var7 === var5;
            var _closure2_slot3 = var22;
            var7 = _closure1_slot1;
            var5 = 17;
            var5 = var9[var5];
            var5 = var7.bind(var25)(var5);
            var5 = var5.bind(var25)(var34);
            var33 = var5.available;
            var _closure2_slot4 = var33;
            var5 = 20;
            var7 = var9[var5];
            var12 = var8.bind(var25)(var7);
            var11 = var12.useStateFromStores;
            var7 = _closure1_slot5;
            var10 = new Array(1);
            var10[0] = var7;
            var7 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var4 = _closure1_slot5;
                    var2 = var4.getGuild;
                    var1 = _closure2_slot0;
                    var4 = var2.bind(var4)(var1);
                    var1 = null;
                    var5 = var1 == var4;
                    var2 = undefined;
                    if(var5) { _fun0011_ip = 79; continue _fun0011 }
case 80:
                    var5 = var4.features;
                    var4 = var5.has;
                    var3 = _closure1_slot17;
                    var3 = var3.GAME_SERVERS;
                    var2 = var4.bind(var5)(var3);
case 79:
                    var1 = var1 != var2;
                    if(!var1) { _fun0011_ip = 81; continue _fun0011 }
case 82:
                    var1 = var2;
case 81:
                    return var1;
                }
            };
            var32 = var11.bind(var12)(var10, var7);
            var _closure2_slot5 = var32;
            var5 = var9[var5];
            var11 = var8.bind(var25)(var5);
            var10 = var11.useStateFromStores;
            var5 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getLowestGameCostForGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var31 = var10.bind(var11)(var7, var5);
            var _closure2_slot6 = var31;
            var5 = 23;
            var5 = var9[var5];
            var7 = var8.bind(var25)(var5);
            var5 = var7.useServerThemeEnabled;
            var30 = 'useGuildPowerupsChannelListPopout';
            var20 = var5.bind(var7)(var34, var30);
            var5 = 24;
            var5 = var9[var5];
            var8 = var8.bind(var25)(var5);
            var5 = var8.useServerThemeUserEnabled;
            var5 = var5.bind(var8)(var30);
            if(!var20) { _fun0010_ip = 83; continue _fun0010 }
case 84:
            var20 = var5;
case 83:
            var _closure2_slot7 = var20;
            var8 = _closure1_slot1;
            var5 = _closure1_slot2;
            var7 = 25;
            var7 = var5[var7];
            var7 = var8.bind(var25)(var7);
            var15 = var7.bind(var25)(var34, var23);
            var _closure2_slot8 = var15;
            var7 = _closure1_slot0;
            var5 = var5[var27];
            var8 = var7.bind(var25)(var5);
            var7 = var8.useNewPerkAvailableCoachmarkDCF;
            var5 = var3 != var23;
            if(!var5) { _fun0010_ip = 85; continue _fun0010 }
case 76:
            var5 = !var22;
case 85:
            var7 = var7.bind(var8)(var5, var15);
            var5 = _closure1_slot3;
            var5 = var5.bind(var25)(var7, var24);
            var9 = var5[var18];
            var16 = var5[var4];
            var _closure2_slot9 = var16;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var8 = var5[var6];
            var8 = var7.bind(var25)(var8);
            var8 = var8.DismissibleContent;
            var8 = var8.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK;
            var17 = var9 === var8;
            var _closure2_slot10 = var17;
            var9 = _closure1_slot1;
            var8 = 26;
            var8 = var5[var8];
            var8 = var9.bind(var25)(var8);
            var13 = var8.bind(var25)(var34);
            var _closure2_slot11 = var13;
            var5 = var5[var27];
            var8 = var7.bind(var25)(var5);
            var7 = var8.useBoostToUnlockCoachmarkDCF;
            var5 = var3 != var23;
            if(!var5) { _fun0010_ip = 56; continue _fun0010 }
case 86:
            var5 = !var22;
case 56:
            if(!var5) { _fun0010_ip = 87; continue _fun0010 }
case 88:
            var5 = !var17;
case 87:
            if(!var5) { _fun0010_ip = 89; continue _fun0010 }
case 90:
            var5 = var3 != var13;
case 89:
            var7 = var7.bind(var8)(var5, var34);
            var5 = _closure1_slot3;
            var5 = var5.bind(var25)(var7, var24);
            var9 = var5[var18];
            var12 = var5[var4];
            var _closure2_slot12 = var12;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var8 = var5[var6];
            var8 = var7.bind(var25)(var8);
            var8 = var8.DismissibleContent;
            var8 = var8.BOOST_TO_UNLOCK_COACHMARK;
            var14 = var9 === var8;
            var _closure2_slot13 = var14;
            var9 = _closure1_slot1;
            var8 = 27;
            var8 = var5[var8];
            var8 = var9.bind(var25)(var8);
            var10 = var8.bind(var25)(var34);
            var _closure2_slot14 = var10;
            var5 = var5[var27];
            var8 = var7.bind(var25)(var5);
            var7 = var8.useExpiringPowerupCoachmarkDCF;
            var5 = var3 != var23;
            if(!var5) { _fun0010_ip = 91; continue _fun0010 }
case 92:
            var5 = !var22;
case 91:
            if(!var5) { _fun0010_ip = 93; continue _fun0010 }
case 94:
            var5 = !var17;
case 93:
            if(!var5) { _fun0010_ip = 95; continue _fun0010 }
case 96:
            var5 = !var14;
case 95:
            if(!var5) { _fun0010_ip = 97; continue _fun0010 }
case 98:
            var5 = var3 != var10;
case 97:
            var7 = var7.bind(var8)(var5, var34);
            var5 = _closure1_slot3;
            var5 = var5.bind(var25)(var7, var24);
            var11 = var5[var18];
            var9 = var5[var4];
            var _closure2_slot15 = var9;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var8 = var5[var6];
            var8 = var7.bind(var25)(var8);
            var8 = var8.DismissibleContent;
            var8 = var8.EXPIRING_POWERUP_COACHMARK;
            var11 = var11 === var8;
            var _closure2_slot16 = var11;
            var8 = 16;
            var8 = var5[var8];
            var19 = var7.bind(var25)(var8);
            var8 = var19.getGameServerEnabled;
            var29 = var8.bind(var19)(var34, var30);
            var8 = 28;
            var8 = var5[var8];
            var19 = var7.bind(var25)(var8);
            var8 = var19.useIsNewGamesCoachmarkEnabled;
            var19 = var8.bind(var19)(var30);
            var5 = var5[var27];
            var8 = var7.bind(var25)(var5);
            var7 = var8.useNewGamesCoachmarkDC;
            var5 = var3 != var23;
            if(!var5) { _fun0010_ip = 99; continue _fun0010 }
case 100:
            var5 = var29;
case 99:
            if(!var5) { _fun0010_ip = 101; continue _fun0010 }
case 102:
            var5 = var19;
case 101:
            var7 = var7.bind(var8)(var5);
            var5 = _closure1_slot3;
            var5 = var5.bind(var25)(var7, var24);
            var26 = var5[var18];
            var7 = var5[var4];
            var _closure2_slot17 = var7;
            var19 = _closure1_slot0;
            var5 = _closure1_slot2;
            var8 = var5[var6];
            var8 = var19.bind(var25)(var8);
            var8 = var8.DismissibleContent;
            var8 = var8.GAME_SERVER_NEW_GAMES_COACHMARK;
            var8 = var26 === var8;
            var _closure2_slot18 = var8;
            var26 = 29;
            var26 = var5[var26];
            var28 = var19.bind(var25)(var26);
            var26 = var28.useIsGameServerPricingEnabled;
            var28 = var26.bind(var28)(var34, var30);
            var5 = var5[var27];
            var26 = var19.bind(var25)(var5);
            var19 = var26.useGameServerPricingCoachmarkDCF;
            var5 = var3 != var23;
            if(!var5) { _fun0010_ip = 103; continue _fun0010 }
case 104:
            var5 = !var32;
case 103:
            if(!var5) { _fun0010_ip = 105; continue _fun0010 }
case 106:
            var5 = var29;
case 105:
            if(!var5) { _fun0010_ip = 107; continue _fun0010 }
case 108:
            var5 = var28;
case 107:
            var19 = var19.bind(var26)(var5);
            var5 = _closure1_slot3;
            var5 = var5.bind(var25)(var19, var24);
            var28 = var5[var18];
            var5 = var5[var4];
            var _closure2_slot19 = var5;
            var26 = _closure1_slot0;
            var19 = _closure1_slot2;
            var6 = var19[var6];
            var6 = var26.bind(var25)(var6);
            var6 = var6.DismissibleContent;
            var6 = var6.GAME_SERVER_PRICING_CHANGE_COACHMARK;
            var6 = var28 === var6;
            var _closure2_slot20 = var6;
            var30 = _closure1_slot4;
            var29 = var30.useMemo;
            var28 = new Array(12);
            var28[0] = var34;
            var28[1] = var23;
            var28[2] = var22;
            var28[3] = var17;
            var28[4] = var8;
            var28[5] = var6;
            var28[6] = var14;
            var28[7] = var11;
            var28[8] = var33;
            var28[9] = var32;
            var28[10] = var31;
            var28[11] = var20;
            var20 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var5 = null;
                    if(!(var5 != var1)) { _fun0012_ip = 109; continue _fun0012 }
case 18:
                    var1 = _closure2_slot3;
                    if(var1) { _fun0012_ip = 109; continue _fun0012 }
case 20:
                    var1 = _closure2_slot10;
                    if(var1) { _fun0012_ip = 109; continue _fun0012 }
case 80:
                    var1 = _closure2_slot18;
                    if(var1) { _fun0012_ip = 109; continue _fun0012 }
case 110:
                    var1 = _closure2_slot20;
                    if(var1) { _fun0012_ip = 109; continue _fun0012 }
case 111:
                    var1 = _closure2_slot13;
                    if(var1) { _fun0012_ip = 109; continue _fun0012 }
case 33:
                    var1 = _closure2_slot16;
                    if(var1) { _fun0012_ip = 109; continue _fun0012 }
case 13:
                    var7 = _closure1_slot19;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var3 = undefined;
                    var1 = var7.bind(var3)(var2, var1);
                    if(!(var5 == var1)) { _fun0012_ip = 112; continue _fun0012 }
case 113:
                    var10 = _closure1_slot20;
                    var14 = _closure2_slot0;
                    var13 = _closure2_slot1;
                    var12 = _closure2_slot4;
                    var11 = _closure2_slot7;
                    var15 = undefined;
                    var2 = var15[var10](var14, var13, var12, var11, var10);
                    if(!(var5 == var2)) { _fun0012_ip = 114; continue _fun0012 }
case 57:
                    var9 = _closure1_slot21;
                    var14 = _closure2_slot0;
                    var13 = _closure2_slot5;
                    var12 = _closure2_slot4;
                    var11 = _closure2_slot6;
                    var15 = undefined;
                    var4 = var15[var9](var14, var13, var12, var11, var10);
                    var5 = var5 != var4;
                    var3 = undefined;
                    if(!var5) { _fun0012_ip = 115; continue _fun0012 }
case 12:
                    var3 = var4;
case 115:
                    return var3;
case 114:
                    return var2;
case 112:
                    return var1;
case 109:
                    var1 = undefined;
                    return var1;
                }
            };
            var20 = var29.bind(var30)(var20, var28);
            var _closure2_slot21 = var20;
            var19 = var19[var27];
            var26 = var26.bind(var25)(var19);
            var19 = var26.useGuildPowerupNotificationDCF;
            var3 = var3 != var20;
            var19 = var19.bind(var26)(var3);
            var3 = _closure1_slot3;
            var3 = var3.bind(var25)(var19, var24);
            var19 = var3[var18];
            var _closure2_slot22 = var19;
            var18 = var3[var4];
            var _closure2_slot23 = var18;
            var4 = _closure1_slot4;
            var3 = var4.useMemo;
            var2 = new Array(19);
            var2[0] = var23;
            var2[1] = var22;
            var2[2] = var21;
            var2[3] = var20;
            var2[4] = var19;
            var2[5] = var18;
            var2[6] = var17;
            var2[7] = var16;
            var2[8] = var15;
            var2[9] = var14;
            var2[10] = var13;
            var2[11] = var12;
            var2[12] = var11;
            var2[13] = var10;
            var2[14] = var9;
            var2[15] = var8;
            var2[16] = var7;
            var2[17] = var6;
            var2[18] = var5;
            var1 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var6 = null;
                    if(!(var6 == var3)) { _fun0013_ip = 116; continue _fun0013 }
case 117:
                    var3 = undefined;
                    return var3;
case 116:
                    var3 = _closure2_slot3;
                    if(var3) { _fun0013_ip = 118; continue _fun0013 }
case 119:
                    var3 = _closure2_slot10;
                    if(var3) { _fun0013_ip = 120; continue _fun0013 }
case 121:
                    var3 = _closure2_slot13;
                    if(!var3) { _fun0013_ip = 122; continue _fun0013 }
case 110:
                    var3 = _closure2_slot11;
                    if(!(var6 == var3)) { _fun0013_ip = 123; continue _fun0013 }
case 122:
                    var3 = _closure2_slot16;
                    if(!var3) { _fun0013_ip = 124; continue _fun0013 }
case 125:
                    var3 = _closure2_slot14;
                    if(!(var6 == var3)) { _fun0013_ip = 126; continue _fun0013 }
case 124:
                    var3 = _closure2_slot18;
                    if(var3) { _fun0013_ip = 127; continue _fun0013 }
case 128:
                    var3 = _closure2_slot20;
                    if(var3) { _fun0013_ip = 129; continue _fun0013 }
case 130:
                    var7 = _closure2_slot22;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 15;
                    var3 = var5[var3];
                    var5 = undefined;
                    var3 = var4.bind(var5)(var3);
                    var3 = var3.DismissibleContent;
                    var4 = var3.GUILD_POWERUP_NOTIFICATION;
                    var3 = undefined;
                    if(!(var7 === var4)) { _fun0013_ip = 29; continue _fun0013 }
case 49:
                    var4 = _closure2_slot21;
                    var4 = var6 != var4;
                    var3 = undefined;
                    if(!var4) { _fun0013_ip = 29; continue _fun0013 }
case 131:
                    var4 = {};
                    var8 = _closure2_slot21;
                    var9 = var4;
                    var5 = copyDataProperties(var9, var8);
                    var6 = function markAsDismissed(arg1) {
                        var4 = arg1;
                        var3 = _closure2_slot23;
                        var1 = undefined;
                        var3 = var3.bind(var1)(var4);
                        var3 = _closure2_slot21;
                        var2 = var3.markAsDismissed;
                        var2 = var2.bind(var3)(var4);
                        return var1;
                    };
                    var5 = 'markAsDismissed';
                    var4[4] = var6;
                    var3 = var4;
case 29:
                    _fun0013_ip = 132; continue _fun0013;
case 129:
                    var4 = {};
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 11;
                    var6 = var6[var5];
                    var5 = undefined;
                    var5 = var7.bind(var5)(var6);
                    var5 = var5.GuildPowerupNotificationPopoutType;
                    var5 = var5.GAME_SERVER_PRICING_CHANGE;
                    var4['type'] = var5;
                    var5 = _closure2_slot19;
                    var4['markAsDismissed'] = var5;
                    var3 = var4;
case 132:
                    _fun0013_ip = 133; continue _fun0013;
case 127:
                    var4 = {};
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 11;
                    var6 = var6[var5];
                    var5 = undefined;
                    var5 = var7.bind(var5)(var6);
                    var5 = var5.GuildPowerupNotificationPopoutType;
                    var5 = var5.GAME_SERVER_NEW_GAMES;
                    var4['type'] = var5;
                    var5 = _closure2_slot17;
                    var4['markAsDismissed'] = var5;
                    var3 = var4;
case 133:
                    _fun0013_ip = 134; continue _fun0013;
case 126:
                    var4 = {};
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 11;
                    var6 = var6[var5];
                    var5 = undefined;
                    var5 = var7.bind(var5)(var6);
                    var5 = var5.GuildPowerupNotificationPopoutType;
                    var5 = var5.EXPIRING_PERK;
                    var4['type'] = var5;
                    var5 = _closure2_slot14;
                    var4['featuredExpiringPowerup'] = var5;
                    var5 = _closure2_slot15;
                    var4['markAsDismissed'] = var5;
                    var3 = var4;
case 134:
                    _fun0013_ip = 135; continue _fun0013;
case 123:
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
                    var5 = _closure2_slot11;
                    var4['powerup'] = var5;
                    var5 = _closure2_slot12;
                    var4['markAsDismissed'] = var5;
                    var3 = var4;
case 135:
                    return var3;
case 120:
                    var5 = _closure2_slot8;
                    var4 = _closure1_slot13;
                    var4 = var4.GAME_SERVER_HOSTING;
                    if(!(var5 !== var4)) { _fun0013_ip = 136; continue _fun0013 }
case 137:
                    var5 = _closure1_slot14;
                    var4 = _closure2_slot8;
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
                    if(!(var1 !== var5)) { _fun0013_ip = 138; continue _fun0013 }
case 139:
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
                    var4 = _closure2_slot9;
                    var1['markAsDismissed'] = var4;
                    return var1;
case 138:
                    var1 = undefined;
                    return var1;
case 136:
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
                    var3 = _closure2_slot9;
                    var1['markAsDismissed'] = var3;
                    return var1;
case 118:
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
    var _closure1_slot23 = var4;
    var9 = function useGuildPowerupsNotifications(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 20;
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
            var4 = _closure1_slot22;
            var5 = null;
            var9 = var5 != var6;
            var3 = undefined;
            if(!var9) { _fun0014_ip = 30; continue _fun0014 }
case 140:
            var3 = var6;
case 30:
            var3 = var4.bind(var1)(var8, var3, var7);
            var4 = var3.indicator;
            var3 = var3.showUnread;
            var7 = _closure1_slot23;
            var9 = var5 != var6;
            var2 = undefined;
            if(!var9) { _fun0014_ip = 141; continue _fun0014 }
case 115:
            var2 = var6;
case 141:
            var2 = var7.bind(var1)(var8, var2);
            if(!(var5 !== var6)) { _fun0014_ip = 129; continue _fun0014 }
case 142:
            if(!(var5 == var4)) { _fun0014_ip = 143; continue _fun0014 }
case 144:
            if(var3) { _fun0014_ip = 143; continue _fun0014 }
case 145:
            if(!(var5 == var2)) { _fun0014_ip = 143; continue _fun0014 }
case 129:
            return var1;
case 143:
            var1 = {};
            var1['indicator'] = var4;
            var1['showUnread'] = var3;
            var1['popout'] = var2;
            return var1;
        }
    };
    var _closure1_slot24 = var9;
    var1 = global;
    var15 = var1.Object;
    var14 = var15.defineProperty;
    var10 = {};
    var1 = true;
    var10['value'] = var1;
    var1 = '__esModule';
    var1 = var14.bind(var15)(var3, var1, var10);
    var1 = 0;
    var10 = var12[var1];
    var1 = undefined;
    var10 = var13.bind(var1)(var10);
    var _closure1_slot3 = var10;
    var10 = 1;
    var14 = var12[var10];
    var10 = metroImportAll;
    var10 = var10.bind(var1)(var14);
    var _closure1_slot4 = var10;
    var10 = 2;
    var10 = var12[var10];
    var10 = var13.bind(var1)(var10);
    var _closure1_slot5 = var10;
    var10 = 3;
    var10 = var12[var10];
    var10 = var13.bind(var1)(var10);
    var _closure1_slot6 = var10;
    var10 = 4;
    var10 = var12[var10];
    var10 = var13.bind(var1)(var10);
    var _closure1_slot7 = var10;
    var10 = 5;
    var10 = var12[var10];
    var10 = var13.bind(var1)(var10);
    var _closure1_slot8 = var10;
    var10 = 6;
    var10 = var12[var10];
    var10 = var11.bind(var1)(var10);
    var13 = var10.BOOSTING_TIER_TO_LEVEL_SKU_ID;
    var _closure1_slot9 = var13;
    var13 = var10.BOOSTING_TIER_TO_LEVEL_UNLOCKED_DC;
    var _closure1_slot10 = var13;
    var13 = var10.GUILD_POWERUP_MIGRATION_USER_ID;
    var _closure1_slot11 = var13;
    var13 = var10.GUILD_POWERUP_NEW_PERK_GROUPS;
    var _closure1_slot12 = var13;
    var13 = var10.GuildPowerupNewPerkMarketingVersion;
    var _closure1_slot13 = var13;
    var13 = var10.NEW_PERK_MARKETING_VERSION_TO_POWERUP_SKU_ID_SET;
    var _closure1_slot14 = var13;
    var10 = var10.POWERUPS_INCLUDED_IN_LEVEL;
    var _closure1_slot15 = var10;
    var10 = 7;
    var10 = var12[var10];
    var10 = var11.bind(var1)(var10);
    var13 = var10.BoostedGuildTiers;
    var _closure1_slot16 = var13;
    var10 = var10.GuildFeatures;
    var _closure1_slot17 = var10;
    var10 = 8;
    var10 = var12[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.ContentDismissActionType;
    var _closure1_slot18 = var10;
    var10 = 32;
    var10 = var12[var10];
    var12 = var11.bind(var1)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/premium/powerups/hooks/useGuildPowerupsNotifications.tsx';
    var10 = var11.bind(var12)(var10);
    var3['default'] = var9;
    var3['maybeGetLevelUnlockedPopoutDCF'] = var8;
    var3['maybeGetPerkPurchaseablePopoutDCF'] = var7;
    var3['maybeGetGameServerHostingGuildEligiblePopoutDCF'] = var6;
    var3['useGuildPowerupsNotificationIndicator'] = var5;
    var3['useGuildPowerupsChannelListPopout'] = var4;
    var2 = function useAutoDismissGuildPowerupsNotifications(arg1) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 20;
        var4 = var9[var1];
        var1 = undefined;
        var10 = var8.bind(var1)(var4);
        var6 = var10.useStateFromStores;
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
        var6 = var6.bind(var10)(var5, var4);
        var _closure2_slot1 = var6;
        var4 = _closure1_slot24;
        var4 = var4.bind(var1)(var7);
        var _closure2_slot2 = var4;
        var5 = 30;
        var5 = var9[var5];
        var8 = var8.bind(var1)(var5);
        var5 = var8.useAutoDismissGuildPowerupsNewBadge;
        var5 = var5.bind(var8)(var7);
        var10 = _closure1_slot4;
        var9 = var10.useEffect;
        var8 = new Array(1);
        var8[0] = var7;
        var5 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 31;
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
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var1 = global;
                var5 = var1.Set;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 11;
                var3 = var7[var4];
                var1 = undefined;
                var3 = var6.bind(var1)(var3);
                var3 = var3.GuildPowerupNotificationPopoutType;
                var8 = var3.BOOST_TO_UNLOCK;
                var3 = new Array(2);
                var3[0] = var8;
                var4 = var7[var4];
                var4 = var6.bind(var1)(var4);
                var4 = var4.GuildPowerupNotificationPopoutType;
                var4 = var4.EXPIRING_PERK;
                var3[1] = var4;
                var4 = var5.prototype;
                var4 = Object.create(var4, {constructor: {value: var5}});
                var10 = var4;
                var9 = var3;
                var3 = new var10[var5](var9, var8);
                var8 = var3 instanceof Object ? var3 : var4;
                var3 = _closure2_slot2;
                var6 = null;
                var4 = var6 == var3;
                var3 = undefined;
                if(var4) { _fun0015_ip = 146; continue _fun0015 }
case 147:
                var4 = _closure2_slot2;
                var4 = var4.popout;
                var7 = var6 == var4;
                var3 = undefined;
                if(var7) { _fun0015_ip = 146; continue _fun0015 }
case 148:
                var3 = var4.type;
case 146:
                var3 = var6 != var3;
                if(!var3) { _fun0015_ip = 142; continue _fun0015 }
case 149:
                var7 = var8.has;
                var4 = _closure2_slot2;
                var4 = var4.popout;
                var4 = var4.type;
                var3 = var7.bind(var8)(var4);
case 142:
                if(var3) { _fun0015_ip = 129; continue _fun0015 }
case 32:
                var4 = _closure2_slot2;
                var3 = var6 == var4;
case 129:
                var4 = undefined;
                if(var3) { _fun0015_ip = 150; continue _fun0015 }
case 151:
                var5 = _closure2_slot2;
                var5 = var5.popout;
                var3 = var6 == var5;
                var4 = var5;
case 150:
                if(var3) { _fun0015_ip = 50; continue _fun0015 }
case 152:
                var3 = var4.markAsDismissed;
                var2 = _closure1_slot18;
                var2 = var2.AUTO_DISMISS;
                var2 = var3.bind(var4)(var2);
case 50:
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
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var2 = _closure2_slot1;
                var1 = null;
                if(!(var1 != var2)) { _fun0016_ip = 4; continue _fun0016 }
case 153:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var3 = var1.ReverseOrderedTiers;
                var2 = var3.forEach;
                var1 = function(arg1) {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var5 = arg1;
                        var2 = _closure1_slot9;
                        var6 = var2[var5];
                        var3 = null;
                        if(!(var3 != var6)) { _fun0017_ip = 154; continue _fun0017 }
case 155:
                        var4 = _closure2_slot1;
                        var4 = var4.unlockedPowerups;
                        var4 = var4[var6];
                        if(!(var3 != var4)) { _fun0017_ip = 154; continue _fun0017 }
case 156:
                        var4 = _closure1_slot10;
                        var6 = var4[var5];
                        if(!(var3 != var6)) { _fun0017_ip = 154; continue _fun0017 }
case 111:
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
case 154:
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