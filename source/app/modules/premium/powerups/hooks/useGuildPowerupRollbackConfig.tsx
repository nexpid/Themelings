// app/modules/premium/powerups/hooks/useGuildPowerupRollbackConfig.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PowerupActiveStatusType;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.BoostedGuildTiers;
    var _closure1_slot8 = var7;
    var4 = var4.GuildFeatures;
    var _closure1_slot9 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/hooks/useGuildPowerupRollbackConfig.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useVanityURLPowerupRollbackNotificationConfig(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 6;
            var6 = var4[var2];
            var10 = undefined;
            var11 = var3.bind(var10)(var6);
            var9 = var11.useStateFromStores;
            var6 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot4;
                    var2 = var3.getGuild;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = var2.features;
case 2:
                    return var1;
                }
            };
            var7 = var9.bind(var11)(var7, var6);
            var2 = var4[var2];
            var4 = var3.bind(var10)(var2);
            var3 = var4.useStateFromStores;
            var6 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getStateForGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            var13 = null;
            var2 = var13 == var1;
            var4 = undefined;
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var1.allPowerups;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 7;
            var1 = var6[var1];
            var1 = var3.bind(var10)(var1);
            var1 = var1.VANITY_URL_POWERUP_SKU_ID;
            var4 = var2[var1];
case 4:
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 8;
            var1 = var6[var1];
            var1 = var2.bind(var10)(var1);
            var1 = var1.bind(var10)(var8, var4);
            var3 = _closure1_slot0;
            var2 = 9;
            var2 = var6[var2];
            var6 = var3.bind(var10)(var2);
            var3 = var6.useVanityURLPerkRollbackEnabled;
            var2 = arg2;
            var3 = var3.bind(var6)(var8, var2);
            var2 = var13 == var4;
            var14 = var4;
            var9 = undefined;
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = var14.storeRemovalDate;
case 6:
            var2 = var13 == var7;
            var4 = undefined;
            if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = var7.has;
            var2 = _closure1_slot9;
            var2 = var2.PARTNERED;
            var4 = var6.bind(var7)(var2);
case 8:
            var2 = var13 != var4;
            if(!var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = var4;
case 10:
            if(!var3) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var3 = var13 != var9;
case 12:
            if(!var3) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var3 = !var2;
case 14:
            if(!var3) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var2 = var1.type;
            var1 = _closure1_slot7;
            var1 = var1.POWERUP_ACTIVATED;
            var3 = var2 === var1;
case 16:
            var1 = {};
            var1['shouldShow'] = var3;
            var2 = null;
            if(!var3) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var3 = {};
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var6 = 10;
            var4 = var7[var6];
            var4 = var8.bind(var10)(var4);
            var12 = var4.intl;
            var11 = var12.formatToPlainString;
            var8 = _closure1_slot1;
            var4 = 11;
            var7 = var7[var4];
            var7 = var8.bind(var10)(var7);
            var8 = var7.mgoPkU;
            var7 = {};
            var15 = var13 == var14;
            var13 = undefined;
            if(var15) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var13 = var14.title;
case 20:
            var7['perkName'] = var13;
            var7 = var11.bind(var12)(var8, var7);
            var3['title'] = var7;
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = var12[var6];
            var6 = var7.bind(var10)(var6);
            var7 = var6.intl;
            var6 = var7.formatToPlainString;
            var11 = _closure1_slot1;
            var4 = var12[var4];
            var4 = var11.bind(var10)(var4);
            var5 = var4.UT9pkI;
            var4 = {};
            var8 = 12;
            var8 = var12[var8];
            var8 = var11.bind(var10)(var8);
            var8 = var8.bind(var10)(var9);
            var4['dateString'] = var8;
            var4 = var6.bind(var7)(var5, var4);
            var3['description'] = var4;
            var2 = var3;
case 18:
            var1['notificationConfig'] = var2;
            return var1;
        }
    };
    var3['useVanityURLPowerupRollbackNotificationConfig'] = var4;
    var2 = function useVanityURLPowerupRollbackModalConfig(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var15 = arg1;
            var _closure2_slot0 = var15;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var14 = 6;
            var2 = var6[var14];
            var16 = undefined;
            var8 = var3.bind(var16)(var2);
            var7 = var8.useStateFromStores;
            var2 = _closure1_slot4;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var7.bind(var8)(var5, var2);
            var _closure2_slot1 = var7;
            var2 = var6[var14];
            var8 = var3.bind(var16)(var2);
            var5 = var8.useStateFromStores;
            var2 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot5;
                var1 = var2.hasLayers;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var5.bind(var8)(var3, var2);
            var5 = _closure1_slot1;
            var2 = 13;
            var2 = var6[var2];
            var2 = var5.bind(var16)(var2);
            var2 = var2.bind(var16)(var15);
            var5 = null;
            var13 = var5 != var2;
            if(!var13) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var13 = var2;
case 22:
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var8 = 9;
            var8 = var2[var8];
            var10 = var6.bind(var16)(var8);
            var9 = var10.useVanityURLPerkRollbackEnabled;
            var8 = arg2;
            var12 = var9.bind(var10)(var15, var8);
            var2 = var2[var14];
            var9 = var6.bind(var16)(var2);
            var8 = var9.useStateFromStores;
            var2 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getStateForGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var8.bind(var9)(var6, var2);
            var6 = var5 == var2;
            var8 = undefined;
            if(var6) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var9 = var2.allPowerups;
            var6 = var5 == var9;
            var8 = undefined;
            if(var6) { _fun0003_ip = 24; continue _fun0003 }
case 26:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 7;
            var6 = var11[var6];
            var6 = var10.bind(var16)(var6);
            var6 = var6.VANITY_URL_POWERUP_SKU_ID;
            var8 = var9[var6];
case 24:
            var _closure2_slot2 = var8;
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 8;
            var6 = var10[var6];
            var6 = var9.bind(var16)(var6);
            var10 = var6.bind(var16)(var15, var8);
            var6 = var5 == var8;
            var9 = var8;
            var8 = undefined;
            if(var6) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var8 = var9.storeRemovalDate;
case 27:
            var _closure2_slot3 = var8;
            var11 = var5 == var2;
            var6 = undefined;
            if(var11) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var11 = var2.allPowerups;
            var2 = var5 == var11;
            var6 = undefined;
            if(var2) { _fun0003_ip = 29; continue _fun0003 }
case 31:
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var2 = 7;
            var2 = var18[var2];
            var2 = var17.bind(var16)(var2);
            var2 = var2.GUILD_POWERUP_LEVEL_3_SKU_ID;
            var6 = var11[var2];
case 29:
            var11 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var14];
            var17 = var11.bind(var16)(var2);
            var14 = var17.useStateFromStores;
            var2 = _closure1_slot4;
            var11 = new Array(1);
            var11[0] = var2;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure1_slot4;
                    var2 = var3.getGuild;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0004_ip = 2; continue _fun0004 }
case 3:
                    var1 = var2.features;
case 2:
                    return var1;
                }
            };
            var17 = var14.bind(var17)(var11, var2);
            var11 = var5 == var17;
            var2 = undefined;
            if(var11) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var14 = var17.has;
            var11 = _closure1_slot9;
            var11 = var11.PARTNERED;
            var2 = var14.bind(var17)(var11);
case 32:
            var11 = var5 != var2;
            if(!var11) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var11 = var2;
case 34:
            var14 = _closure1_slot0;
            var17 = _closure1_slot2;
            var2 = 14;
            var2 = var17[var2];
            var14 = var14.bind(var16)(var2);
            var2 = var14.useGuildPowerupOnActivate;
            var2 = var2.bind(var14)(var15, var6);
            var2 = var2.onActivate;
            var _closure2_slot4 = var2;
            var3 = !var3;
            if(!var3) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var3 = var13;
case 36:
            if(!var3) { _fun0003_ip = 38; continue _fun0003 }
case 39:
            var3 = var12;
case 38:
            if(!var3) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var3 = var5 != var9;
case 40:
            if(!var3) { _fun0003_ip = 42; continue _fun0003 }
case 43:
            var3 = !var11;
case 42:
            if(!var3) { _fun0003_ip = 44; continue _fun0003 }
case 45:
            var11 = var10.type;
            var10 = _closure1_slot7;
            var10 = var10.POWERUP_ACTIVATED;
            var3 = var11 === var10;
case 44:
            if(!var3) { _fun0003_ip = 46; continue _fun0003 }
case 47:
            var3 = var5 != var8;
case 46:
            if(!var3) { _fun0003_ip = 48; continue _fun0003 }
case 49:
            var3 = var5 != var6;
case 48:
            if(!var3) { _fun0003_ip = 50; continue _fun0003 }
case 51:
            var3 = var5 != var7;
case 50:
            var _closure2_slot5 = var3;
            var5 = _closure1_slot3;
            var6 = var5.useCallback;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = var2.stopPropagation;
                var1 = var1.bind(var2)();
                var2 = _closure2_slot4;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var6 = var6.bind(var5)(var2, var4);
            var _closure2_slot6 = var6;
            var4 = var5.useMemo;
            var2 = new Array(5);
            var2[0] = var3;
            var2[1] = var9;
            var2[2] = var8;
            var2[3] = var7;
            var2[4] = var6;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot5;
                    if(var1) { _fun0005_ip = 52; continue _fun0005 }
case 53:
                    var1 = null;
                    return var1;
case 52:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var1);
                    var1 = _closure2_slot3;
                    var14 = var5.bind(var2)(var1);
                    var1 = _closure2_slot1;
                    var6 = var1.premiumTier;
                    var1 = _closure1_slot8;
                    var1 = var1.TIER_2;
                    var5 = undefined;
                    if(!(var6 === var1)) { _fun0005_ip = 54; continue _fun0005 }
case 55:
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 10;
                    var1 = var9[var1];
                    var1 = var6.bind(var2)(var1);
                    var7 = var1.intl;
                    var6 = var7.string;
                    var8 = _closure1_slot1;
                    var1 = 11;
                    var1 = var9[var1];
                    var1 = var8.bind(var2)(var1);
                    var1 = var1.0uo/LD;
                    var5 = var6.bind(var7)(var1);
case 54:
                    var1 = {};
                    var6 = _closure2_slot2;
                    var6 = var6.title;
                    var1['firstHeader'] = var6;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 10;
                    var8 = var9[var6];
                    var8 = var7.bind(var2)(var8);
                    var13 = var8.intl;
                    var12 = var13.formatToPlainString;
                    var8 = _closure1_slot1;
                    var4 = 11;
                    var10 = var9[var4];
                    var10 = var8.bind(var2)(var10);
                    var11 = var10.8imxAq;
                    var10 = {};
                    var10['dateString'] = var14;
                    var10 = var12.bind(var13)(var11, var10);
                    var1['secondHeader'] = var10;
                    var10 = var9[var6];
                    var10 = var7.bind(var2)(var10);
                    var13 = var10.intl;
                    var12 = var13.formatToPlainString;
                    var10 = var9[var4];
                    var10 = var8.bind(var2)(var10);
                    var11 = var10./bW9tW;
                    var10 = {};
                    var15 = _closure2_slot1;
                    var15 = var15.name;
                    var10['serverName'] = var15;
                    var10 = var12.bind(var13)(var11, var10);
                    var1['firstBody'] = var10;
                    var10 = var9[var6];
                    var10 = var7.bind(var2)(var10);
                    var13 = var10.intl;
                    var12 = var13.formatToPlainString;
                    var10 = var9[var4];
                    var10 = var8.bind(var2)(var10);
                    var11 = var10.D09fdi;
                    var10 = {};
                    var10['dateString'] = var14;
                    var14 = _closure2_slot2;
                    var14 = var14.cost;
                    var10['boostCount'] = var14;
                    var10 = var12.bind(var13)(var11, var10);
                    var1['secondBody'] = var10;
                    var6 = var9[var6];
                    var6 = var7.bind(var2)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var4 = var9[var4];
                    var4 = var8.bind(var2)(var4);
                    var4 = var4.+zvKPr;
                    var4 = var6.bind(var7)(var4);
                    var1['thirdBody'] = var4;
                    var1['primaryButtonText'] = var5;
                    var4 = null;
                    var4 = var4 != var5;
                    var2 = undefined;
                    if(!var4) { _fun0005_ip = 56; continue _fun0005 }
case 57:
                    var2 = _closure2_slot6;
case 56:
                    var1['onPrimaryClick'] = var2;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var1, var2);
            var1 = {};
            var1['shouldShow'] = var3;
            var1['modalConfig'] = var2;
            return var1;
        }
    };
    var3['useVanityURLPowerupRollbackModalConfig'] = var2;
    return var1;
})();