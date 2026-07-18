// app/modules/premium/powerups/native/hooks/useGuildPowerupsCoachmark.tsx
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.GUILD_TAG_BADGE_PACKS_WAVE_ONE_SKU_ID_SET;
    var _closure1_slot6 = var7;
    var7 = var4.GUILD_TAG_BADGE_PACKS_WAVE_TWO_SKU_ID_SET;
    var _closure1_slot7 = var7;
    var4 = var4.GuildPowerupType;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticsPages;
    var _closure1_slot9 = var7;
    var4 = var4.AnalyticsSections;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeTypes;
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = {};
            var2 = {};
            var3 = 120;
            var2['height'] = var3;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 9;
            var8 = var7[var4];
            var5 = undefined;
            var8 = var6.bind(var5)(var8);
            var8 = var8.space;
            var9 = var8.PX_16;
            var8 = 2;
            var9 = var8 * var9;
            var8 = 260;
            var8 = var8 - var9;
            var2['width'] = var8;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.radii;
            var4 = var4.md;
            var2['borderRadius'] = var4;
            var1['coachmarkImage'] = var2;
            var2 = {};
            var4 = 'cover';
            var2['resizeMode'] = var4;
            var1['coachmarkCover'] = var2;
            var2 = {'width': 50, 'height': 50};
            var3 = _closure1_slot12;
            var5 = var3.LIGHT;
            var3 = '#0000003D';
            var4 = arg1;
            if(!(var4 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = '#0000001A';
case 2:
            var2['backgroundColor'] = var3;
            var1['boostGemBackground'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 30;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/native/hooks/useGuildPowerupsCoachmark.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildPowerupsCoachmark(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var13 = arg2;
            var10 = arg3;
            var _closure2_slot0 = var13;
            var _closure2_slot1 = var10;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 10;
            var6 = var7[var4];
            var1 = undefined;
            var12 = var5.bind(var1)(var6);
            var11 = var12.useStateFromStores;
            var6 = _closure1_slot5;
            var9 = new Array(1);
            var9[0] = var6;
            var8 = new Array(1);
            var8[0] = var13;
            var6 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot5;
                    var2 = var3.getGuild;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var1 = var2.name;
case 4:
                    return var1;
                }
            };
            var12 = var11.bind(var12)(var9, var6, var8);
            var _closure2_slot2 = var12;
            var6 = _closure1_slot1;
            var8 = 11;
            var8 = var7[var8];
            var8 = var6.bind(var1)(var8);
            var9 = var8.bind(var1)();
            var8 = _closure1_slot14;
            var9 = var8.bind(var1)(var9);
            var _closure2_slot3 = var9;
            var4 = var7[var4];
            var11 = var5.bind(var1)(var4);
            var8 = var11.useStateFromStores;
            var4 = _closure1_slot4;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                var1 = _closure1_slot4;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var8 = var8.bind(var11)(var5, var4);
            var _closure2_slot4 = var8;
            var4 = 12;
            var4 = var7[var4];
            var4 = var6.bind(var1)(var4);
            var4 = var4.bind(var1)(var13);
            var5 = var4.available;
            var4 = 13;
            var4 = var7[var4];
            var4 = var6.bind(var1)(var4);
            var14 = var4.bind(var1)(var13);
            var _closure2_slot5 = var14;
            var4 = null;
            var6 = var4 == var10;
            var7 = undefined;
            if(var6) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var7 = var10.type;
case 6:
            var11 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = 14;
            var6 = var15[var6];
            var6 = var11.bind(var1)(var6);
            var6 = var6.GuildPowerupNotificationPopoutType;
            var6 = var6.BOOST_TO_UNLOCK;
            var11 = undefined;
            if(!(var7 === var6)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var11 = var10.powerup;
case 8:
            var4 = var4 != var11;
            var15 = 0;
            if(!var4) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var4 = var11.cost;
            var15 = var4 - var5;
case 10:
            var _closure2_slot6 = var15;
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var5 = 15;
            var5 = var4[var5];
            var7 = var6.bind(var1)(var5);
            var6 = {};
            var5 = _closure1_slot9;
            var5 = var5.GUILD_CHANNEL;
            var6['page'] = var5;
            var5 = _closure1_slot10;
            var5 = var5.GUILD_HEADER;
            var6['section'] = var5;
            var17 = 'boost_to_unlock_coachmark';
            var21 = undefined;
            var20 = var13;
            var19 = var11;
            var18 = var15;
            var16 = var6;
            var11 = var21[var7](var20, var19, var18, var17, var16, var15);
            var _closure2_slot7 = var11;
            var7 = _closure1_slot3;
            var6 = var7.useMemo;
            var5 = new Array(8);
            var5[0] = var15;
            var5[1] = var14;
            var5[2] = var13;
            var5[3] = var12;
            var5[4] = var11;
            var5[5] = var10;
            var5[6] = var9;
            var5[7] = var8;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var5 = function handleButtonPress() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if(!(var1 != var2)) { _fun0005_ip = 12; continue _fun0005 }
case 13:
                            var5 = _closure2_slot1;
                            var3 = var5.markAsDismissed;
                            var2 = _closure1_slot11;
                            var2 = var2.TAKE_ACTION;
                            var2 = var3.bind(var5)(var2);
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 16;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var4 = _closure2_slot0;
                            var1['guildId'] = var4;
                            var1 = var2.bind(var3)(var1);
case 12:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var4 = function handleDismiss() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var3 = _closure2_slot1;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0006_ip = 4; continue _fun0006 }
case 13:
                            var3 = _closure2_slot1;
                            var2 = var3.markAsDismissed;
                            var1 = _closure1_slot11;
                            var1 = var1.USER_DISMISS;
                            var1 = var2.bind(var3)(var1);
case 4:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = {'title': '', 'description': '', 'position': 'bottom', 'visible': false};
                    var15 = '';
                    var2 = function onDismiss() {
                        var1 = undefined;
                        return var1;
                    };
                    var1['onDismiss'] = var2;
                    var6 = _closure2_slot1;
                    var17 = null;
                    if(!(var17 != var6)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var6 = _closure2_slot1;
                    var8 = var6.type;
                    var11 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var10 = 14;
                    var7 = var7[var10];
                    var9 = undefined;
                    var7 = var11.bind(var9)(var7);
                    var7 = var7.GuildPowerupNotificationPopoutType;
                    var7 = var7.LEVEL_REACHED;
                    if(!(var7 !== var8)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var11 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var10];
                    var7 = var11.bind(var9)(var7);
                    var7 = var7.GuildPowerupNotificationPopoutType;
                    var7 = var7.PERKS_AVAILABLE;
                    if(!(var7 !== var8)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var11 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var10];
                    var7 = var11.bind(var9)(var7);
                    var7 = var7.GuildPowerupNotificationPopoutType;
                    var7 = var7.PERKS_PURCHASABLE;
                    if(!(var7 !== var8)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                    var11 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var10];
                    var7 = var11.bind(var9)(var7);
                    var7 = var7.GuildPowerupNotificationPopoutType;
                    var7 = var7.NEW_PERK_AVAILABLE;
                    if(!(var7 !== var8)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                    var11 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var10];
                    var7 = var11.bind(var9)(var7);
                    var7 = var7.GuildPowerupNotificationPopoutType;
                    var7 = var7.BOOST_TO_UNLOCK;
                    if(!(var7 !== var8)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                    var11 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var10];
                    var7 = var11.bind(var9)(var7);
                    var7 = var7.GuildPowerupNotificationPopoutType;
                    var7 = var7.GAME_SERVER_HOSTING_AVAILABLE;
                    if(!(var7 !== var8)) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                    var11 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var10];
                    var7 = var11.bind(var9)(var7);
                    var7 = var7.GuildPowerupNotificationPopoutType;
                    var7 = var7.GAME_SERVER_HOSTING_GUILD_ELIGIBLE;
                    if(!(var7 !== var8)) { _fun0004_ip = 26; continue _fun0004 }
case 28:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var10];
                    var7 = var8.bind(var9)(var7);
                    var7 = var7.GuildPowerupNotificationPopoutType;
                    var7 = var7.GAME_SERVER_HOSTING_ENABLED;
case 26:
                    return var1;
case 24:
                    var7 = _closure2_slot1;
                    var14 = var7.powerup;
                    var _closure3_slot3 = var14;
                    var7 = {};
                    var24 = var7;
                    var23 = var1;
                    var8 = copyDataProperties(var24, var23);
                    var10 = true;
                    var8 = 'visible';
                    var7[7] = var10;
                    var11 = 8;
                    var8 = 'offsetY';
                    var7[7] = var11;
                    var11 = function renderImgComponent() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var1 = _closure3_slot3;
                            var3 = var1.type;
                            var1 = _closure1_slot8;
                            var1 = var1.LEVEL;
                            if(!(var3 !== var1)) { _fun0007_ip = 29; continue _fun0007 }
case 30:
                            var5 = _closure1_slot13;
                            var3 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var1 = 20;
                            var1 = var9[var1];
                            var4 = undefined;
                            var3 = var3.bind(var4)(var1);
                            var1 = {};
                            var8 = _closure1_slot0;
                            var7 = 22;
                            var7 = var9[var7];
                            var11 = var8.bind(var4)(var7);
                            var10 = var11.getGuildPowerupBannerImage;
                            var9 = _closure3_slot3;
                            var8 = _closure2_slot4;
                            var7 = true;
                            var8 = var10.bind(var11)(var9, var8, var7);
                            var7 = null;
                            var9 = var7 != var8;
                            var7 = '';
                            if(!var9) { _fun0007_ip = 31; continue _fun0007 }
case 17:
                            var7 = var8;
case 31:
                            var1['imageUrl'] = var7;
                            var7 = _closure2_slot4;
                            var7 = !var7;
                            var1['isAnimated'] = var7;
                            var7 = _closure2_slot3;
                            var8 = var7.coachmarkImage;
                            var6 = new Array(2);
                            var6[0] = var8;
                            var7 = var7.coachmarkCover;
                            var6[1] = var7;
                            var1['style'] = var6;
                            var1 = var5.bind(var4)(var3, var1);
                            _fun0007_ip = 32; continue _fun0007;
case 29:
                            var5 = _closure1_slot13;
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 17;
                            var2 = var4[var2];
                            var4 = undefined;
                            var3 = var3.bind(var4)(var2);
                            var2 = {'style': null, 'gemWidth': 30, 'gemHeight': 30};
                            var6 = _closure2_slot3;
                            var6 = var6.boostGemBackground;
                            var2['style'] = var6;
                            var1 = var5.bind(var4)(var3, var2);
case 32:
                            return var1;
                        }
                    };
                    var8 = 'renderImgComponent';
                    var7[7] = var11;
                    var11 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var13 = 18;
                    var12 = var8[var13];
                    var12 = var11.bind(var9)(var12);
                    var19 = var12.intl;
                    var16 = var19.string;
                    var20 = _closure1_slot1;
                    var18 = 19;
                    var12 = var8[var18];
                    var12 = var20.bind(var9)(var12);
                    var12 = var12.n37JhA;
                    var16 = var16.bind(var19)(var12);
                    var12 = 'title';
                    var7[11] = var16;
                    var8 = var8[var13];
                    var8 = var11.bind(var9)(var8);
                    var12 = var8.intl;
                    var11 = var12.formatToPlainString;
                    var8 = _closure2_slot5;
                    if(!(var10 !== var8)) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                    var10 = var14.type;
                    var8 = _closure1_slot8;
                    var8 = var8.LEVEL;
                    if(!(var10 === var8)) { _fun0004_ip = 35; continue _fun0004 }
case 33:
                    var10 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var8 = var8[var18];
                    var8 = var10.bind(var9)(var8);
                    var10 = var8.Yr1ogl;
                    _fun0004_ip = 36; continue _fun0004;
case 35:
                    var16 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var8 = var8[var18];
                    var8 = var16.bind(var9)(var8);
                    var10 = var8["7MZ2tu"];
case 36:
                    var8 = {};
                    var16 = _closure2_slot6;
                    var8['boostCount'] = var16;
                    var14 = var14.title;
                    var8['perkName'] = var14;
                    var10 = var11.bind(var12)(var10, var8);
                    var8 = 'description';
                    var7[7] = var10;
                    var12 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var10 = var8[var13];
                    var10 = var12.bind(var9)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var8 = var8[var13];
                    var8 = var12.bind(var9)(var8);
                    var8 = var8.t;
                    var8 = var8.oPAx73;
                    var10 = var10.bind(var11)(var8);
                    var8 = 'buttonLabel';
                    var7[7] = var10;
                    var10 = 'primary';
                    var8 = 'buttonVariant';
                    var7[7] = var10;
                    var10 = function onButtonPress() {
                        var4 = _closure2_slot1;
                        var3 = var4.markAsDismissed;
                        var2 = _closure1_slot11;
                        var2 = var2.TAKE_ACTION;
                        var2 = var3.bind(var4)(var2);
                        var2 = _closure2_slot7;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var8 = 'onButtonPress';
                    var7[7] = var10;
                    var8 = 'onDismiss';
                    var7[7] = var4;
                    return var7;
case 22:
                    var7 = _closure2_slot1;
                    var12 = var7.powerups;
                    var8 = var12.find;
                    var7 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.skuId;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 23;
                        var3 = var3[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                        var1 = var1.GUILD_POWERUP_TAG_SKU_ID;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var13 = var8.bind(var12)(var7);
                    if(!(var17 != var13)) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 22;
                    var7 = var10[var7];
                    var11 = var8.bind(var9)(var7);
                    var8 = var11.getGuildPowerupBannerImage;
                    var7 = _closure2_slot4;
                    var10 = true;
                    var7 = var8.bind(var11)(var13, var7, var10);
                    var _closure3_slot1 = var7;
                    if(!(var17 == var7)) { _fun0004_ip = 39; continue _fun0004 }
case 37:
                    var8 = var12.find;
                    var7 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.skuId;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 23;
                        var3 = var3[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                        var1 = var1.GUILD_POWERUP_GUILD_THEME_SKU_ID;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var8 = var8.bind(var12)(var7);
                    var _closure3_slot2 = var8;
                    if(!(var17 == var8)) { _fun0004_ip = 40; continue _fun0004 }
case 41:
                    var11 = var12.find;
                    var7 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.skuId;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 23;
                        var3 = var3[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                        var1 = var1.VANITY_URL_POWERUP_SKU_ID;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var7 = var11.bind(var12)(var7);
                    if(!(var17 == var7)) { _fun0004_ip = 42; continue _fun0004 }
case 43:
                    var11 = var12.find;
                    var7 = function(arg1) {
                        var3 = _closure1_slot7;
                        var2 = var3.has;
                        var1 = arg1;
                        var1 = var1.skuId;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var7 = var11.bind(var12)(var7);
                    if(!(var17 == var7)) { _fun0004_ip = 44; continue _fun0004 }
case 45:
                    var11 = var12.find;
                    var7 = function(arg1) {
                        var3 = _closure1_slot6;
                        var2 = var3.has;
                        var1 = arg1;
                        var1 = var1.skuId;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var7 = var11.bind(var12)(var7);
                    if(!(var17 == var7)) { _fun0004_ip = 46; continue _fun0004 }
case 47:
                    var11 = var12.find;
                    var7 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.skuId;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 23;
                        var3 = var3[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                        var1 = var1.GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var11 = var11.bind(var12)(var7);
                    var7 = var1;
                    if(!(var17 != var11)) { _fun0004_ip = 48; continue _fun0004 }
case 49:
                    var11 = {};
                    var24 = var11;
                    var23 = var1;
                    var12 = copyDataProperties(var24, var23);
                    var13 = true;
                    var12 = 'visible';
                    var11[11] = var13;
                    var13 = function renderImgComponent() {
                        var4 = _closure1_slot13;
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var1 = 20;
                        var1 = var7[var1];
                        var3 = undefined;
                        var2 = var6.bind(var3)(var1);
                        var1 = {};
                        var5 = 28;
                        var5 = var7[var5];
                        var5 = var6.bind(var3)(var5);
                        var1['imageUrl'] = var5;
                        var5 = false;
                        var1['isAnimated'] = var5;
                        var5 = _closure2_slot3;
                        var5 = var5.coachmarkImage;
                        var1['style'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var12 = 'renderImgComponent';
                    var11[11] = var13;
                    var16 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var12 = 18;
                    var13 = var18[var12];
                    var13 = var16.bind(var9)(var13);
                    var21 = var13.intl;
                    var19 = var21.string;
                    var20 = _closure1_slot1;
                    var13 = 19;
                    var14 = var18[var13];
                    var14 = var20.bind(var9)(var14);
                    var14 = var14.rp0Ff1;
                    var19 = var19.bind(var21)(var14);
                    var14 = 'title';
                    var11[13] = var19;
                    var14 = var18[var12];
                    var14 = var16.bind(var9)(var14);
                    var19 = var14.intl;
                    var14 = var19.string;
                    var13 = var18[var13];
                    var13 = var20.bind(var9)(var13);
                    var13 = var13["3L/DZq"];
                    var14 = var14.bind(var19)(var13);
                    var13 = 'description';
                    var11[12] = var14;
                    var13 = var18[var12];
                    var13 = var16.bind(var9)(var13);
                    var14 = var13.intl;
                    var13 = var14.string;
                    var12 = var18[var12];
                    var12 = var16.bind(var9)(var12);
                    var12 = var12.t;
                    var12 = var12.RzWDqY;
                    var13 = var13.bind(var14)(var12);
                    var12 = 'buttonLabel';
                    var11[11] = var13;
                    var13 = 'primary';
                    var12 = 'buttonVariant';
                    var11[11] = var13;
                    var12 = 'onButtonPress';
                    var11[11] = var5;
                    var12 = 'onDismiss';
                    var11[11] = var4;
                    var7 = var11;
case 48:
                    return var7;
case 46:
                    var7 = {};
                    var24 = var7;
                    var23 = var1;
                    var11 = copyDataProperties(var24, var23);
                    var12 = true;
                    var11 = 'visible';
                    var7[10] = var12;
                    var12 = function renderImgComponent() {
                        var4 = _closure1_slot13;
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var1 = 20;
                        var1 = var7[var1];
                        var3 = undefined;
                        var2 = var6.bind(var3)(var1);
                        var1 = {};
                        var5 = 27;
                        var5 = var7[var5];
                        var5 = var6.bind(var3)(var5);
                        var1['imageUrl'] = var5;
                        var5 = _closure2_slot3;
                        var5 = var5.coachmarkImage;
                        var1['style'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var11 = 'renderImgComponent';
                    var7[10] = var12;
                    var14 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var11 = 18;
                    var12 = var16[var11];
                    var12 = var14.bind(var9)(var12);
                    var20 = var12.intl;
                    var18 = var20.string;
                    var19 = _closure1_slot1;
                    var12 = 19;
                    var13 = var16[var12];
                    var13 = var19.bind(var9)(var13);
                    var13 = var13.kA2c+n;
                    var18 = var18.bind(var20)(var13);
                    var13 = 'title';
                    var7[12] = var18;
                    var13 = var16[var11];
                    var13 = var14.bind(var9)(var13);
                    var18 = var13.intl;
                    var13 = var18.string;
                    var12 = var16[var12];
                    var12 = var19.bind(var9)(var12);
                    var12 = var12.TUilLj;
                    var13 = var13.bind(var18)(var12);
                    var12 = 'description';
                    var7[11] = var13;
                    var12 = var16[var11];
                    var12 = var14.bind(var9)(var12);
                    var13 = var12.intl;
                    var12 = var13.string;
                    var11 = var16[var11];
                    var11 = var14.bind(var9)(var11);
                    var11 = var11.t;
                    var11 = var11.RzWDqY;
                    var12 = var12.bind(var13)(var11);
                    var11 = 'buttonLabel';
                    var7[10] = var12;
                    var12 = 'primary';
                    var11 = 'buttonVariant';
                    var7[10] = var12;
                    var11 = 'onButtonPress';
                    var7[10] = var5;
                    var11 = 'onDismiss';
                    var7[10] = var4;
                    return var7;
case 44:
                    var7 = {};
                    var24 = var7;
                    var23 = var1;
                    var11 = copyDataProperties(var24, var23);
                    var12 = true;
                    var11 = 'visible';
                    var7[10] = var12;
                    var12 = function renderImgComponent() {
                        var4 = _closure1_slot13;
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var1 = 20;
                        var1 = var7[var1];
                        var3 = undefined;
                        var2 = var6.bind(var3)(var1);
                        var1 = {};
                        var5 = 26;
                        var5 = var7[var5];
                        var5 = var6.bind(var3)(var5);
                        var1['imageUrl'] = var5;
                        var5 = _closure2_slot3;
                        var5 = var5.coachmarkImage;
                        var1['style'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var11 = 'renderImgComponent';
                    var7[10] = var12;
                    var14 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var11 = 18;
                    var12 = var16[var11];
                    var12 = var14.bind(var9)(var12);
                    var20 = var12.intl;
                    var18 = var20.string;
                    var19 = _closure1_slot1;
                    var12 = 19;
                    var13 = var16[var12];
                    var13 = var19.bind(var9)(var13);
                    var13 = var13.kA2c+n;
                    var18 = var18.bind(var20)(var13);
                    var13 = 'title';
                    var7[12] = var18;
                    var13 = var16[var11];
                    var13 = var14.bind(var9)(var13);
                    var18 = var13.intl;
                    var13 = var18.string;
                    var12 = var16[var12];
                    var12 = var19.bind(var9)(var12);
                    var12 = var12.TUilLj;
                    var13 = var13.bind(var18)(var12);
                    var12 = 'description';
                    var7[11] = var13;
                    var12 = var16[var11];
                    var12 = var14.bind(var9)(var12);
                    var13 = var12.intl;
                    var12 = var13.string;
                    var11 = var16[var11];
                    var11 = var14.bind(var9)(var11);
                    var11 = var11.t;
                    var11 = var11.RzWDqY;
                    var12 = var12.bind(var13)(var11);
                    var11 = 'buttonLabel';
                    var7[10] = var12;
                    var12 = 'primary';
                    var11 = 'buttonVariant';
                    var7[10] = var12;
                    var11 = 'onButtonPress';
                    var7[10] = var5;
                    var11 = 'onDismiss';
                    var7[10] = var4;
                    return var7;
case 42:
                    var7 = {};
                    var24 = var7;
                    var23 = var1;
                    var11 = copyDataProperties(var24, var23);
                    var12 = true;
                    var11 = 'visible';
                    var7[10] = var12;
                    var12 = function renderImgComponent() {
                        var4 = _closure1_slot13;
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var1 = 20;
                        var1 = var7[var1];
                        var3 = undefined;
                        var2 = var6.bind(var3)(var1);
                        var1 = {};
                        var5 = 25;
                        var5 = var7[var5];
                        var5 = var6.bind(var3)(var5);
                        var1['imageUrl'] = var5;
                        var5 = _closure2_slot3;
                        var5 = var5.coachmarkImage;
                        var1['style'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var11 = 'renderImgComponent';
                    var7[10] = var12;
                    var14 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var11 = 18;
                    var12 = var16[var11];
                    var12 = var14.bind(var9)(var12);
                    var20 = var12.intl;
                    var18 = var20.string;
                    var19 = _closure1_slot1;
                    var12 = 19;
                    var13 = var16[var12];
                    var13 = var19.bind(var9)(var13);
                    var13 = var13.Ygpx4Q;
                    var18 = var18.bind(var20)(var13);
                    var13 = 'title';
                    var7[12] = var18;
                    var13 = var16[var11];
                    var13 = var14.bind(var9)(var13);
                    var18 = var13.intl;
                    var13 = var18.string;
                    var12 = var16[var12];
                    var12 = var19.bind(var9)(var12);
                    var12 = var12.mmNkUA;
                    var13 = var13.bind(var18)(var12);
                    var12 = 'description';
                    var7[11] = var13;
                    var12 = var16[var11];
                    var12 = var14.bind(var9)(var12);
                    var13 = var12.intl;
                    var12 = var13.string;
                    var11 = var16[var11];
                    var11 = var14.bind(var9)(var11);
                    var11 = var11.t;
                    var11 = var11.RzWDqY;
                    var12 = var12.bind(var13)(var11);
                    var11 = 'buttonLabel';
                    var7[10] = var12;
                    var12 = 'primary';
                    var11 = 'buttonVariant';
                    var7[10] = var12;
                    var11 = 'onButtonPress';
                    var7[10] = var5;
                    var11 = 'onDismiss';
                    var7[10] = var4;
                    return var7;
case 40:
                    var7 = {};
                    var24 = var7;
                    var23 = var1;
                    var11 = copyDataProperties(var24, var23);
                    var12 = true;
                    var11 = 'visible';
                    var7[10] = var12;
                    var12 = function renderImgComponent() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var4 = _closure1_slot13;
                            var2 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var1 = 20;
                            var1 = var8[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var6 = _closure1_slot0;
                            var5 = 22;
                            var5 = var8[var5];
                            var11 = var6.bind(var3)(var5);
                            var10 = var11.getGuildPowerupBannerImage;
                            var9 = _closure3_slot2;
                            var8 = _closure2_slot4;
                            var6 = true;
                            var6 = var10.bind(var11)(var9, var8, var6);
                            var8 = null;
                            if(!(var8 == var6)) { _fun0008_ip = 50; continue _fun0008 }
case 51:
                            var8 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var7 = 24;
                            var7 = var9[var7];
                            var6 = var8.bind(var3)(var7);
case 50:
                            var1['imageUrl'] = var6;
                            var6 = _closure2_slot4;
                            var6 = !var6;
                            var1['isAnimated'] = var6;
                            var6 = _closure2_slot3;
                            var7 = var6.coachmarkImage;
                            var5 = new Array(2);
                            var5[0] = var7;
                            var6 = var6.coachmarkCover;
                            var5[1] = var6;
                            var1['style'] = var5;
                            var1 = var4.bind(var3)(var2, var1);
                            return var1;
                        }
                    };
                    var11 = 'renderImgComponent';
                    var7[10] = var12;
                    var12 = var8.title;
                    var11 = 'title';
                    var7[10] = var12;
                    var11 = var8.description;
                    var13 = 'string';
                    var12 = typeof var11;
                    var11 = var15;
                    if(!(var13 === var12)) { _fun0004_ip = 52; continue _fun0004 }
case 53:
                    var11 = var8.description;
case 52:
                    var8 = 'description';
                    var7[7] = var11;
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var8 = 18;
                    var11 = var14[var8];
                    var11 = var13.bind(var9)(var11);
                    var12 = var11.intl;
                    var11 = var12.string;
                    var8 = var14[var8];
                    var8 = var13.bind(var9)(var8);
                    var8 = var8.t;
                    var8 = var8.RzWDqY;
                    var11 = var11.bind(var12)(var8);
                    var8 = 'buttonLabel';
                    var7[7] = var11;
                    var11 = 'primary';
                    var8 = 'buttonVariant';
                    var7[7] = var11;
                    var8 = 'onButtonPress';
                    var7[7] = var5;
                    var8 = 'onDismiss';
                    var7[7] = var4;
                    return var7;
case 39:
                    var7 = {};
                    var24 = var7;
                    var23 = var1;
                    var8 = copyDataProperties(var24, var23);
                    var8 = 'visible';
                    var7[7] = var10;
                    var10 = function renderImgComponent() {
                        var4 = _closure1_slot13;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 20;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var5 = _closure3_slot1;
                        var1['imageUrl'] = var5;
                        var6 = _closure2_slot4;
                        var6 = !var6;
                        var1['isAnimated'] = var6;
                        var5 = _closure2_slot3;
                        var5 = var5.coachmarkImage;
                        var1['style'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var8 = 'renderImgComponent';
                    var7[7] = var10;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var8 = 18;
                    var10 = var13[var8];
                    var10 = var12.bind(var9)(var10);
                    var18 = var10.intl;
                    var14 = var18.string;
                    var16 = _closure1_slot1;
                    var10 = 19;
                    var11 = var13[var10];
                    var11 = var16.bind(var9)(var11);
                    var11 = var11.GcEkAP;
                    var14 = var14.bind(var18)(var11);
                    var11 = 'title';
                    var7[10] = var14;
                    var11 = var13[var8];
                    var11 = var12.bind(var9)(var11);
                    var14 = var11.intl;
                    var11 = var14.string;
                    var10 = var13[var10];
                    var10 = var16.bind(var9)(var10);
                    var10 = var10.yo0g7X;
                    var11 = var11.bind(var14)(var10);
                    var10 = 'description';
                    var7[9] = var11;
                    var10 = var13[var8];
                    var10 = var12.bind(var9)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var8 = var13[var8];
                    var8 = var12.bind(var9)(var8);
                    var8 = var8.t;
                    var8 = var8.RzWDqY;
                    var10 = var10.bind(var11)(var8);
                    var8 = 'buttonLabel';
                    var7[7] = var10;
                    var10 = 'primary';
                    var8 = 'buttonVariant';
                    var7[7] = var10;
                    var8 = 'onButtonPress';
                    var7[7] = var5;
                    var8 = 'onDismiss';
                    var7[7] = var4;
                    return var7;
case 20:
                    var7 = _closure2_slot1;
                    var14 = var7.powerups;
                    var _closure3_slot0 = var14;
                    var7 = var14.length;
                    var13 = 0;
                    if(!(var13 !== var7)) { _fun0004_ip = 54; continue _fun0004 }
case 55:
                    var8 = var14.length;
                    var7 = 3;
                    if(!(!(var8 >= var7))) { _fun0004_ip = 56; continue _fun0004 }
case 57:
                    var8 = var14.length;
                    var7 = 2;
                    if(!(var7 !== var8)) { _fun0004_ip = 58; continue _fun0004 }
case 59:
                    var8 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var7 = 18;
                    var7 = var12[var7];
                    var7 = var8.bind(var9)(var7);
                    var11 = var7.intl;
                    var10 = var11.formatToPlainString;
                    var8 = _closure1_slot1;
                    var7 = 19;
                    var7 = var12[var7];
                    var7 = var8.bind(var9)(var7);
                    var8 = var7.ZF8NT6;
                    var7 = {};
                    var12 = var14[var13];
                    var12 = var12.title;
                    var7['perk'] = var12;
                    var10 = var10.bind(var11)(var8, var7);
                    _fun0004_ip = 60; continue _fun0004;
case 58:
                    var8 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var7 = 18;
                    var7 = var16[var7];
                    var7 = var8.bind(var9)(var7);
                    var12 = var7.intl;
                    var11 = var12.formatToPlainString;
                    var8 = _closure1_slot1;
                    var7 = 19;
                    var7 = var16[var7];
                    var7 = var8.bind(var9)(var7);
                    var8 = var7.wcQOqC;
                    var7 = {};
                    var16 = var14[var13];
                    var20 = var16.title;
                    var16 = 1;
                    var16 = var14[var16];
                    var19 = var16.title;
                    var16 = global;
                    var16 = var16.HermesInternal;
                    var18 = var16.concat;
                    var16 = ' & ';
                    var16 = var18.bind(var15)(var20, var16, var19);
                    var7['perks'] = var16;
                    var10 = var11.bind(var12)(var8, var7);
case 60:
                    _fun0004_ip = 61; continue _fun0004;
case 56:
                    var8 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var7 = 18;
                    var7 = var16[var7];
                    var7 = var8.bind(var9)(var7);
                    var12 = var7.intl;
                    var11 = var12.formatToPlainString;
                    var8 = _closure1_slot1;
                    var7 = 19;
                    var7 = var16[var7];
                    var7 = var8.bind(var9)(var7);
                    var8 = var7["6Sv+3M"];
                    var7 = {};
                    var13 = var14[var13];
                    var13 = var13.title;
                    var7['perk'] = var13;
                    var13 = 1;
                    var13 = var14[var13];
                    var13 = var13.title;
                    var7['perk2'] = var13;
                    var13 = 2;
                    var13 = var14[var13];
                    var13 = var13.title;
                    var7['perk3'] = var13;
                    var10 = var11.bind(var12)(var8, var7);
case 61:
                    var7 = {};
                    var24 = var7;
                    var23 = var1;
                    var8 = copyDataProperties(var24, var23);
                    var11 = true;
                    var8 = 'visible';
                    var7[7] = var11;
                    var11 = function renderImgComponent() {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var4 = _closure1_slot13;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 20;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var6 = _closure3_slot0;
                            var7 = var6.length;
                            var6 = 1;
                            if(!(!(var7 > var6))) { _fun0009_ip = 62; continue _fun0009 }
case 63:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var7 = 22;
                            var7 = var10[var7];
                            var12 = var9.bind(var3)(var7);
                            var11 = var12.getGuildPowerupBannerImage;
                            var9 = _closure3_slot0;
                            var7 = 0;
                            var10 = var9[var7];
                            var9 = _closure2_slot4;
                            var7 = true;
                            var9 = var11.bind(var12)(var10, var9, var7);
                            var7 = null;
                            var10 = var7 != var9;
                            var7 = '';
                            if(!var10) { _fun0009_ip = 31; continue _fun0009 }
case 17:
                            var7 = var9;
case 31:
                            _fun0009_ip = 64; continue _fun0009;
case 62:
                            var9 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var8 = 21;
                            var8 = var10[var8];
                            var7 = var9.bind(var3)(var8);
case 64:
                            var1['imageUrl'] = var7;
                            var5 = _closure3_slot0;
                            var5 = var5.length;
                            var5 = var6 === var5;
                            var1['isAnimated'] = var5;
                            var6 = _closure2_slot3;
                            var7 = var6.coachmarkImage;
                            var5 = new Array(2);
                            var5[0] = var7;
                            var6 = var6.coachmarkCover;
                            var5[1] = var6;
                            var1['style'] = var5;
                            var1 = var4.bind(var3)(var2, var1);
                            return var1;
                        }
                    };
                    var8 = 'renderImgComponent';
                    var7[7] = var11;
                    var11 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var13 = 18;
                    var8 = var16[var13];
                    var8 = var11.bind(var9)(var8);
                    var14 = var8.intl;
                    var12 = var14.formatToPlainString;
                    var11 = _closure1_slot1;
                    var8 = 19;
                    var8 = var16[var8];
                    var8 = var11.bind(var9)(var8);
                    var11 = var8.LmpChE;
                    var8 = {};
                    var16 = _closure2_slot2;
                    var16 = var17 != var16;
                    if(!var16) { _fun0004_ip = 65; continue _fun0004 }
case 66:
                    var15 = _closure2_slot2;
case 65:
                    var8['guildName'] = var15;
                    var11 = var12.bind(var14)(var11, var8);
                    var8 = 'title';
                    var7[7] = var11;
                    var8 = 'description';
                    var7[7] = var10;
                    var12 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var10 = var8[var13];
                    var10 = var12.bind(var9)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var8 = var8[var13];
                    var8 = var12.bind(var9)(var8);
                    var8 = var8.t;
                    var8 = var8.RzWDqY;
                    var10 = var10.bind(var11)(var8);
                    var8 = 'buttonLabel';
                    var7[7] = var10;
                    var10 = 'primary';
                    var8 = 'buttonVariant';
                    var7[7] = var10;
                    var8 = 'onButtonPress';
                    var7[7] = var5;
                    var8 = 'onDismiss';
                    var7[7] = var4;
                    return var7;
case 54:
                    return var1;
case 18:
                    var7 = {};
                    var24 = var7;
                    var23 = var1;
                    var8 = copyDataProperties(var24, var23);
                    var10 = true;
                    var8 = 'visible';
                    var7[7] = var10;
                    var10 = function renderImgComponent() {
                        var4 = _closure1_slot13;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 17;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {'style': null, 'gemWidth': 30, 'gemHeight': 30};
                        var5 = _closure2_slot3;
                        var5 = var5.boostGemBackground;
                        var1['style'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var8 = 'renderImgComponent';
                    var7[7] = var10;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var8 = 18;
                    var10 = var13[var8];
                    var10 = var12.bind(var9)(var10);
                    var16 = var10.intl;
                    var14 = var16.string;
                    var15 = _closure1_slot1;
                    var10 = 19;
                    var11 = var13[var10];
                    var11 = var15.bind(var9)(var11);
                    var11 = var11.QpQBPQ;
                    var14 = var14.bind(var16)(var11);
                    var11 = 'title';
                    var7[10] = var14;
                    var11 = var13[var8];
                    var11 = var12.bind(var9)(var11);
                    var14 = var11.intl;
                    var11 = var14.string;
                    var10 = var13[var10];
                    var10 = var15.bind(var9)(var10);
                    var10 = var10["6hn0xF"];
                    var11 = var11.bind(var14)(var10);
                    var10 = 'description';
                    var7[9] = var11;
                    var10 = var13[var8];
                    var10 = var12.bind(var9)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var8 = var13[var8];
                    var8 = var12.bind(var9)(var8);
                    var8 = var8.t;
                    var8 = var8.RzWDqY;
                    var10 = var10.bind(var11)(var8);
                    var8 = 'buttonLabel';
                    var7[7] = var10;
                    var10 = 'primary';
                    var8 = 'buttonVariant';
                    var7[7] = var10;
                    var8 = 'onButtonPress';
                    var7[7] = var5;
                    var8 = 'onDismiss';
                    var7[7] = var4;
                    return var7;
case 16:
                    var13 = _closure2_slot1;
                    var2 = {};
                    var24 = var2;
                    var23 = var1;
                    var7 = copyDataProperties(var24, var23);
                    var8 = true;
                    var7 = 'visible';
                    var2[6] = var8;
                    var7 = function renderImgComponent() {
                        var4 = _closure1_slot13;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 17;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {'style': null, 'gemWidth': 30, 'gemHeight': 30};
                        var5 = _closure2_slot3;
                        var5 = var5.boostGemBackground;
                        var1['style'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var3 = 'renderImgComponent';
                    var2[2] = var7;
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 18;
                    var7 = var10[var3];
                    var7 = var8.bind(var9)(var7);
                    var15 = var7.intl;
                    var14 = var15.formatToPlainString;
                    var7 = _closure1_slot1;
                    var6 = 19;
                    var11 = var10[var6];
                    var11 = var7.bind(var9)(var11);
                    var12 = var11.Zg/m9K;
                    var11 = {};
                    var16 = var13.powerup;
                    var16 = var16.title;
                    var11['perkName'] = var16;
                    var12 = var14.bind(var15)(var12, var11);
                    var11 = 'title';
                    var2[10] = var12;
                    var11 = var10[var3];
                    var11 = var8.bind(var9)(var11);
                    var12 = var11.intl;
                    var11 = var12.formatToPlainString;
                    var6 = var10[var6];
                    var6 = var7.bind(var9)(var6);
                    var7 = var6["1EGXSK"];
                    var6 = {};
                    var13 = var13.powerup;
                    var13 = var13.title;
                    var6['perkName'] = var13;
                    var7 = var11.bind(var12)(var7, var6);
                    var6 = 'description';
                    var2[5] = var7;
                    var6 = var10[var3];
                    var6 = var8.bind(var9)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var3 = var10[var3];
                    var3 = var8.bind(var9)(var3);
                    var3 = var3.t;
                    var3 = var3.RzWDqY;
                    var6 = var6.bind(var7)(var3);
                    var3 = 'buttonLabel';
                    var2[2] = var6;
                    var6 = 'primary';
                    var3 = 'buttonVariant';
                    var2[2] = var6;
                    var3 = 'onButtonPress';
                    var2[2] = var5;
                    var3 = 'onDismiss';
                    var2[2] = var4;
                    return var2;
case 14:
                    return var1;
                }
            };
            var5 = var6.bind(var7)(var3, var5);
            var3 = _closure1_slot0;
            var2 = 29;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.useCoachmark;
            var2 = arg1;
            var2 = var3.bind(var4)(var2, var5);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();