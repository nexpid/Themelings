// app/modules/game_community_upsell/native/GameCommunityMultiGuildUpsellCard.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.Image;
    var _closure1_slot6 = var8;
    var4 = var4.View;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.GuildFeatures;
    var _closure1_slot10 = var7;
    var7 = var4.JoinGuildSources;
    var _closure1_slot11 = var7;
    var4 = var4.AnalyticEvents;
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot13 = var7;
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
    var4 = function getGuildIconSize(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = 50;
            var3 = 'one-column';
            var2 = arg1;
            if(!(var3 === var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 8;
            var3 = var6[var2];
            var4 = undefined;
            var3 = var5.bind(var4)(var3);
            var3 = var3.ImageSizes;
            var2 = var6[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.GuildIconSizes;
            var2 = var2.XLARGE;
            var1 = var3[var2];
case 2:
            return var1;
        }
    };
    var _closure1_slot15 = var4;
    var4 = function getGuildIconTop(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot15;
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var1 = 'one-column';
            if(!(var1 !== var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var1 = 2;
            var2 = var3 / var1;
            var1 = 96;
            var1 = var1 - var2;
            _fun0002_ip = 6; continue _fun0002;
case 4:
            var2 = 2;
            var3 = var3 / var2;
            var2 = 192;
            var1 = var2 - var3;
case 6:
            return var1;
        }
    };
    var _closure1_slot16 = var4;
    var4 = function getCardWidth(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.getWindowDimensions;
            var1 = var1.bind(var2)();
            var3 = var1.width;
            var4 = 'one-column';
            var2 = arg1;
            var1 = var3;
            if(!(var4 !== var2)) { _fun0003_ip = 7; continue _fun0003 }
case 8:
            var2 = 2;
            var1 = var3 / var2;
case 7:
            return var1;
        }
    };
    var _closure1_slot17 = var4;
    var4 = 10;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var12 = arg1;
            var1 = 'one-column';
            var5 = var1 === var12;
            var10 = 10;
            if(!var5) { _fun0004_ip = 9; continue _fun0004 }
case 10:
            var10 = 12;
case 9:
            var1 = _closure1_slot15;
            var6 = undefined;
            var3 = var1.bind(var6)(var12);
            var1 = {};
            var2 = {};
            var11 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 11;
            var8 = var9[var7];
            var8 = var11.bind(var6)(var8);
            var8 = var8.colors;
            var8 = var8.CARD_BACKGROUND_DEFAULT;
            var2['backgroundColor'] = var8;
            var8 = var9[var7];
            var8 = var11.bind(var6)(var8);
            var8 = var8.radii;
            var8 = var8.lg;
            var2['borderRadius'] = var8;
            var8 = 'hidden';
            var2['overflow'] = var8;
            var8 = 1;
            var2['flex'] = var8;
            var9 = var9[var7];
            var9 = var11.bind(var6)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_16;
            var2['marginBottom'] = var9;
            var1['card'] = var2;
            var2 = {};
            var9 = 96;
            if(!var5) { _fun0004_ip = 11; continue _fun0004 }
case 12:
            var9 = 192;
case 11:
            var2['height'] = var9;
            var11 = _closure1_slot1;
            var9 = _closure1_slot2;
            var9 = var9[var7];
            var9 = var11.bind(var6)(var9);
            var9 = var9.colors;
            var9 = var9.CARD_BACKGROUND_DEFAULT;
            var2['backgroundColor'] = var9;
            var1['bannerContainer'] = var2;
            var2 = {};
            var2['flex'] = var8;
            var1['banner'] = var2;
            var2 = {'flex': 1, 'justifyContent': 'space-between'};
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var7];
            var8 = var9.bind(var6)(var8);
            var9 = var8.spacing;
            if(var5) { _fun0004_ip = 13; continue _fun0004 }
case 14:
            var8 = var9.PX_32;
            _fun0004_ip = 15; continue _fun0004;
case 13:
            var8 = var9.PX_40;
case 15:
            var2['marginTop'] = var8;
            var11 = _closure1_slot1;
            var9 = _closure1_slot2;
            var8 = var9[var7];
            var8 = var11.bind(var6)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_16;
            var2['marginBottom'] = var8;
            var8 = var9[var7];
            var8 = var11.bind(var6)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_16;
            var2['marginHorizontal'] = var8;
            var1['content'] = var2;
            var2 = {'position': 'absolute', 'top': null, 'left': 16};
            var8 = _closure1_slot16;
            var8 = var8.bind(var6)(var12);
            var2['top'] = var8;
            var1['guildIconContainer'] = var2;
            var2 = {};
            var2['width'] = var3;
            var2['height'] = var3;
            var3 = var9[var7];
            var3 = var11.bind(var6)(var3);
            var3 = var3.radii;
            var3 = var3.lg;
            var2['borderRadius'] = var3;
            var1['guildIcon'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'center'};
            var8 = 'row';
            var3 = 'center';
            var9 = var9[var7];
            var9 = var11.bind(var6)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_4;
            var2['marginBottom'] = var9;
            var1['guildNameRow'] = var2;
            var2 = {};
            var11 = _closure1_slot1;
            var9 = _closure1_slot2;
            var9 = var9[var7];
            var9 = var11.bind(var6)(var9);
            var11 = var9.spacing;
            if(var5) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var9 = var11.PX_4;
            _fun0004_ip = 18; continue _fun0004;
case 16:
            var9 = var11.PX_8;
case 18:
            var2['marginRight'] = var9;
            var1['guildBadge'] = var2;
            var2 = {'flex': 1, 'minWidth': 0};
            var1['guildName'] = var2;
            var2 = {};
            var11 = _closure1_slot1;
            var9 = _closure1_slot2;
            var9 = var9[var7];
            var9 = var11.bind(var6)(var9);
            var11 = var9.spacing;
            if(var5) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var9 = var11.PX_4;
            _fun0004_ip = 21; continue _fun0004;
case 19:
            var9 = var11.PX_12;
case 21:
            var2['marginBottom'] = var9;
            var1['description'] = var2;
            var2 = {};
            var2['flexDirection'] = var8;
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var7];
            var8 = var9.bind(var6)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_16;
            var2['gap'] = var8;
            var1['memberCounts'] = var2;
            var2 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'marginBottom': null, 'gap': 6};
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var7];
            var8 = var9.bind(var6)(var8);
            var8 = var8.spacing;
            if(var5) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            var5 = var8.PX_12;
            _fun0004_ip = 24; continue _fun0004;
case 22:
            var5 = var8.PX_16;
case 24:
            var2['marginBottom'] = var5;
            var1['memberCount'] = var2;
            var2 = {};
            var2['width'] = var10;
            var2['height'] = var10;
            var9 = 2;
            var8 = var10 / var9;
            var2['borderRadius'] = var8;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var11 = var4[var7];
            var11 = var5.bind(var6)(var11);
            var11 = var11.colors;
            var11 = var11.TEXT_STATUS_OFFLINE;
            var2['backgroundColor'] = var11;
            var1['dot'] = var2;
            var2 = {};
            var2['width'] = var10;
            var2['height'] = var10;
            var2['borderRadius'] = var8;
            var8 = var4[var7];
            var8 = var5.bind(var6)(var8);
            var8 = var8.colors;
            var8 = var8.TEXT_STATUS_ONLINE;
            var2['backgroundColor'] = var8;
            var1['dotOnline'] = var2;
            var2 = {'position': 'absolute', 'top': 8, 'right': 8};
            var8 = var4[var7];
            var8 = var5.bind(var6)(var8);
            var8 = var8.radii;
            var8 = var8.lg;
            var8 = var9 * var8;
            var2['width'] = var8;
            var8 = var4[var7];
            var8 = var5.bind(var6)(var8);
            var8 = var8.radii;
            var8 = var8.lg;
            var8 = var9 * var8;
            var2['height'] = var8;
            var8 = var4[var7];
            var8 = var5.bind(var6)(var8);
            var8 = var8.radii;
            var8 = var8.lg;
            var2['borderRadius'] = var8;
            var4 = var4[var7];
            var4 = var5.bind(var6)(var4);
            var4 = var4.colors;
            var4 = var4.BACKGROUND_MOD_SUBTLE;
            var2['backgroundColor'] = var4;
            var2['alignItems'] = var3;
            var2['justifyContent'] = var3;
            var1['dismissButton'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot18 = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_community_upsell/native/GameCommunityMultiGuildUpsellCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GameCommunityMultiGuildUpsellCard(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var20 = var1.guild;
            var _closure2_slot0 = var20;
            var6 = var1.gameId;
            var _closure2_slot1 = var6;
            var26 = var1.variant;
            var _closure2_slot2 = var26;
            var7 = var1.onDismiss;
            var _closure2_slot3 = var7;
            var4 = undefined;
            var _closure2_slot9 = var4;
            var1 = _closure1_slot18;
            var11 = var1.bind(var4)(var26);
            var8 = _closure1_slot5;
            var2 = var8.useState;
            var1 = false;
            var3 = var2.bind(var8)(var1);
            var2 = _closure1_slot4;
            var1 = 2;
            var2 = var2.bind(var4)(var3, var1);
            var22 = 0;
            var16 = var2[var22];
            var _closure2_slot4 = var16;
            var1 = 1;
            var1 = var2[var1];
            var _closure2_slot5 = var1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var13 = 12;
            var1 = var2[var13];
            var12 = var3.bind(var4)(var1);
            var9 = var12.useStateFromStores;
            var1 = _closure1_slot8;
            var5 = new Array(1);
            var5[0] = var1;
            var1 = function() {
                var1 = _closure1_slot8;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var1 = var9.bind(var12)(var5, var1);
            var _closure2_slot6 = var1;
            var2 = var2[var13];
            var9 = var3.bind(var4)(var2);
            var5 = var9.useStateFromStores;
            var2 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot9;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var25 = var5.bind(var9)(var3, var2);
            var _closure2_slot7 = var25;
            var2 = _closure1_slot15;
            var29 = var2.bind(var4)(var26);
            var _closure2_slot8 = var29;
            var5 = var8.useMemo;
            var2 = var20.id;
            var3 = new Array(4);
            var3[0] = var2;
            var2 = var20.icon;
            var3[1] = var2;
            var3[2] = var1;
            var3[3] = var29;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var1 = var1.icon;
                    var6 = null;
                    var2 = var6 != var1;
                    if(!var2) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                    var6 = var1;
case 25:
                    var2 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var1 = 13;
                    var1 = var8[var1];
                    var7 = undefined;
                    var3 = var2.bind(var7)(var1);
                    var2 = var3.getGuildIconSource;
                    var1 = {};
                    var9 = _closure2_slot0;
                    var9 = var9.id;
                    var1['id'] = var9;
                    var1['icon'] = var6;
                    var6 = _closure2_slot6;
                    var6 = !var6;
                    var1['canAnimate'] = var6;
                    var5 = _closure2_slot8;
                    var6 = _closure1_slot0;
                    var4 = 14;
                    var4 = var8[var4];
                    var6 = var6.bind(var7)(var4);
                    var4 = var6.getDevicePixelRatio;
                    var4 = var4.bind(var6)();
                    var4 = var5 * var4;
                    var1['size'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var15 = var5.bind(var8)(var2, var3);
            var1 = !var1;
            if(!var1) { _fun0005_ip = 27; continue _fun0005 }
case 28:
            var5 = var20.features;
            var3 = var5.has;
            var2 = _closure1_slot10;
            var2 = var2.ANIMATED_BANNER;
            var3 = var3.bind(var5)(var2);
            var2 = true;
            var1 = var2 === var3;
case 27:
            _closure2_slot9 = var1;
            var5 = _closure1_slot5;
            var3 = var5.useMemo;
            var8 = var20.id;
            var2 = new Array(5);
            var2[0] = var8;
            var8 = var20.splash;
            var2[1] = var8;
            var8 = var20.banner;
            var2[2] = var8;
            var2[3] = var1;
            var2[4] = var26;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var7 = var1.splash;
                    var3 = var1.banner;
                    var _closure3_slot0 = var3;
                    var1 = null;
                    if(!(var1 == var7)) { _fun0007_ip = 29; continue _fun0007 }
case 30:
                    var3 = var1 != var3;
                    var1 = null;
                    if(!var3) { _fun0007_ip = 31; continue _fun0007 }
case 32:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 13;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.getAnimatableSourceWithFallback;
                    var3 = _closure2_slot9;
                    var2 = function(arg1) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 13;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.getGuildBannerSource;
                        var2 = {};
                        var1 = _closure2_slot0;
                        var1 = var1.id;
                        var2['id'] = var1;
                        var1 = _closure3_slot0;
                        var2['banner'] = var1;
                        var1 = arg1;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var1 = var4.bind(var5)(var3, var2);
case 31:
                    _fun0007_ip = 33; continue _fun0007;
case 29:
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 13;
                    var2 = var9[var2];
                    var8 = undefined;
                    var4 = var3.bind(var8)(var2);
                    var3 = var4.getGuildSplashSource;
                    var2 = {};
                    var10 = _closure2_slot0;
                    var10 = var10.id;
                    var2['id'] = var10;
                    var2['splash'] = var7;
                    var7 = _closure1_slot17;
                    var6 = _closure2_slot2;
                    var6 = var7.bind(var8)(var6);
                    var7 = _closure1_slot0;
                    var5 = 14;
                    var5 = var9[var5];
                    var7 = var7.bind(var8)(var5);
                    var5 = var7.getDevicePixelRatio;
                    var5 = var5.bind(var7)();
                    var5 = var6 * var5;
                    var2['size'] = var5;
                    var1 = var3.bind(var4)(var2);
case 33:
                    return var1;
                }
            };
            var27 = var3.bind(var5)(var1, var2);
            var3 = var5.useCallback;
            var2 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0008_ip = 34; continue _fun0008 }
case 35:
                        var2 = _closure2_slot7;
                        if(var2) { _fun0008_ip = 36; continue _fun0008 }
case 37:
                        var2 = _closure2_slot4;
                        if(var2) { _fun0008_ip = 36; continue _fun0008 }
case 38:
                        var4 = _closure2_slot5;
                        var5 = undefined;
                        var2 = true;
                        var2 = var4.bind(var5)(var2);
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 15;
                        var2 = var6[var2];
                        var7 = var4.bind(var5)(var2);
                        var6 = var7.track;
                        var2 = _closure1_slot12;
                        var4 = var2.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD_JOINED;
                        var2 = {};
                        var9 = _closure2_slot0;
                        var9 = var9.id;
                        var2['guild_id'] = var9;
                        var9 = _closure2_slot1;
                        var2['game_id'] = var9;
                        var9 = _closure2_slot2;
                        var2['variant'] = var9;
                        var2 = var6.bind(var7)(var4, var2);
case 39: // try_start_0
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 16;
                        var2 = var6[var2];
                        var7 = var4.bind(var5)(var2);
                        var6 = var7.joinGuild;
                        var2 = _closure2_slot0;
                        var4 = var2.id;
                        var2 = {};
                        var8 = _closure1_slot11;
                        var8 = var8.GAME_COMMUNITY_UPSELL;
                        var2['source'] = var8;
                        var2 = var6.bind(var7)(var4, var2);
                        SaveGenerator(address=183);
case 40:
                        return var2;
case 41:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0008_ip = 42; continue _fun0008 }
case 43: // try_end0
                        var6 = _closure2_slot5;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        _fun0008_ip = 36; continue _fun0008;
case 42:
                        var6 = _closure2_slot5;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        return var2;
case 44: // catch_target0
                        CatchBlockStart(arg_register=1);
                        var4 = _closure2_slot5;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
case 36:
                        var2 = undefined;
                        return var2;
case 34:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var2.bind(var4)(var1);
            var8 = var20.id;
            var1 = new Array(5);
            var1[0] = var8;
            var1[1] = var25;
            var1[2] = var16;
            var1[3] = var6;
            var1[4] = var26;
            var24 = var3.bind(var5)(var2, var1);
            var1 = var20.presenceCount;
            var6 = null;
            var2 = var6 != var1;
            var38 = 0;
            if(!var2) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            var38 = var1;
case 45:
            var1 = var20.memberCount;
            var2 = var6 != var1;
            var36 = 0;
            if(!var2) { _fun0005_ip = 47; continue _fun0005 }
case 48:
            var36 = var1;
case 47:
            var23 = var20.name;
            var21 = var20.description;
            var3 = _closure1_slot14;
            var2 = _closure1_slot7;
            var1 = {};
            var5 = var11.card;
            var1['style'] = var5;
            var8 = _closure1_slot13;
            var5 = {};
            var9 = var11.bannerContainer;
            var5['style'] = var9;
            var19 = _closure1_slot1;
            var28 = _closure1_slot2;
            var18 = 17;
            var9 = var28[var18];
            var12 = var19.bind(var4)(var9);
            var9 = {};
            var17 = var11.banner;
            var9['style'] = var17;
            var17 = {};
            var30 = _closure1_slot0;
            var18 = var28[var18];
            var18 = var30.bind(var4)(var18);
            var18 = var18.CutoutShape;
            var18 = var18.RoundedRect;
            var17['shape'] = var18;
            var17['x'] = var13;
            var13 = _closure1_slot16;
            var13 = var13.bind(var4)(var26);
            var18 = 4;
            var13 = var13 - var18;
            var17['y'] = var13;
            var13 = 8;
            var30 = var29 + var13;
            var17['width'] = var30;
            var13 = var29 + var13;
            var17['height'] = var13;
            var13 = 11;
            var13 = var28[var13];
            var13 = var19.bind(var4)(var13);
            var13 = var13.radii;
            var13 = var13.lg;
            var13 = var13 + var18;
            var17['cornerRadius'] = var13;
            var13 = new Array(1);
            var13[0] = var17;
            var9['cutouts'] = var13;
            if(!(var6 == var27)) { _fun0005_ip = 49; continue _fun0005 }
case 50:
            var18 = _closure1_slot13;
            var17 = _closure1_slot7;
            var13 = {};
            var19 = var11.banner;
            var13['style'] = var19;
            var13 = var18.bind(var4)(var17, var13);
            _fun0005_ip = 51; continue _fun0005;
case 49:
            var19 = _closure1_slot13;
            var18 = _closure1_slot6;
            var17 = {};
            var28 = var11.banner;
            var17['style'] = var28;
            var17['source'] = var27;
            var27 = 'cover';
            var17['resizeMode'] = var27;
            var13 = var19.bind(var4)(var18, var17);
case 51:
            var9['children'] = var13;
            var9 = var8.bind(var4)(var12, var9);
            var5['children'] = var9;
            var8 = var8.bind(var4)(var2, var5);
            var5 = new Array(4);
            var5[0] = var8;
            var19 = _closure1_slot13;
            var12 = _closure1_slot7;
            var8 = {};
            var9 = var11.guildIconContainer;
            var8['style'] = var9;
            var13 = _closure1_slot6;
            var9 = {};
            var17 = var11.guildIcon;
            var9['style'] = var17;
            var9['source'] = var15;
            var9 = var19.bind(var4)(var13, var9);
            var8['children'] = var9;
            var8 = var19.bind(var4)(var12, var8);
            var5[1] = var8;
            var9 = _closure1_slot14;
            var8 = {};
            var13 = var11.content;
            var8['style'] = var13;
            var13 = {};
            var15 = {};
            var17 = var11.guildNameRow;
            var15['style'] = var17;
            var18 = _closure1_slot1;
            var27 = _closure1_slot2;
            var17 = 18;
            var17 = var27[var17];
            var18 = var18.bind(var4)(var17);
            var17 = {};
            var17['guild'] = var20;
            var20 = 'one-column';
            var27 = var20 === var26;
            var26 = _closure1_slot1;
            var28 = _closure1_slot2;
            var20 = 19;
            var20 = var28[var20];
            var20 = var26.bind(var4)(var20);
            var26 = var20.Sizes;
            if(var27) { _fun0005_ip = 52; continue _fun0005 }
case 53:
            var20 = var26.SMALL;
            _fun0005_ip = 54; continue _fun0005;
case 52:
            var20 = var26.SMALL_20;
case 54:
            var17['size'] = var20;
            var20 = var11.guildBadge;
            var17['style'] = var20;
            var18 = var19.bind(var4)(var18, var17);
            var17 = new Array(2);
            var17[0] = var18;
            var20 = _closure1_slot13;
            var19 = _closure1_slot0;
            var18 = _closure1_slot2;
            var29 = 20;
            var18 = var18[var29];
            var18 = var19.bind(var4)(var18);
            var19 = var18.Text;
            var18 = {'variant': null, 'color': 'mobile-text-heading-primary', 'accessibilityRole': 'header', 'style': null, 'lineClamp': 1};
            var26 = 'heading-md/bold';
            if(!var27) { _fun0005_ip = 55; continue _fun0005 }
case 56:
            var26 = 'heading-lg/bold';
case 55:
            var18['variant'] = var26;
            var26 = var11.guildName;
            var18['style'] = var26;
            var18['children'] = var23;
            var18 = var20.bind(var4)(var19, var18);
            var17[1] = var18;
            var15['children'] = var17;
            var17 = var9.bind(var4)(var12, var15);
            var15 = new Array(2);
            var15[0] = var17;
            var17 = var6 != var21;
            if(!var17) { _fun0005_ip = 57; continue _fun0005 }
case 58:
            var18 = var21.length;
            var17 = var18 > var22;
case 57:
            if(!var17) { _fun0005_ip = 59; continue _fun0005 }
case 60:
            var20 = _closure1_slot13;
            var19 = _closure1_slot0;
            var18 = _closure1_slot2;
            var18 = var18[var29];
            var18 = var19.bind(var4)(var18);
            var19 = var18.Text;
            var18 = {};
            var23 = 'text-xs/medium';
            if(!var27) { _fun0005_ip = 61; continue _fun0005 }
case 62:
            var23 = 'text-md/normal';
case 61:
            var18['variant'] = var23;
            var23 = var11.description;
            var18['style'] = var23;
            var23 = 3;
            var18['lineClamp'] = var23;
            var18['children'] = var21;
            var17 = var20.bind(var4)(var19, var18);
case 59:
            var15[1] = var17;
            var13['children'] = var15;
            var13 = var9.bind(var4)(var12, var13);
            var15 = new Array(2);
            var15[0] = var13;
            var19 = _closure1_slot14;
            var18 = _closure1_slot7;
            var17 = {};
            var13 = {};
            var20 = var11.memberCounts;
            var13['style'] = var20;
            var21 = var38 > var22;
            if(!var21) { _fun0005_ip = 63; continue _fun0005 }
case 64:
            var26 = _closure1_slot14;
            var23 = _closure1_slot7;
            var20 = {};
            var28 = var11.memberCount;
            var20['style'] = var28;
            var32 = _closure1_slot13;
            var28 = {};
            var30 = var11.dotOnline;
            var28['style'] = var30;
            var30 = var32.bind(var4)(var23, var28);
            var28 = new Array(2);
            var28[0] = var30;
            var31 = _closure1_slot0;
            var30 = _closure1_slot2;
            var30 = var30[var29];
            var30 = var31.bind(var4)(var30);
            var31 = var30.Text;
            var30 = {};
            var33 = 'text-xs/normal';
            if(!var27) { _fun0005_ip = 65; continue _fun0005 }
case 66:
            var33 = 'text-sm/normal';
case 65:
            var30['variant'] = var33;
            var33 = 'text-subtle';
            var30['color'] = var33;
            var34 = _closure1_slot0;
            var39 = _closure1_slot2;
            var33 = 21;
            var35 = var39[var33];
            var35 = var34.bind(var4)(var35);
            var37 = var35.intl;
            var35 = var37.format;
            var33 = var39[var33];
            var33 = var34.bind(var4)(var33);
            var33 = var33.t;
            var34 = var33.LC+S+m;
            var33 = {};
            var33['membersOnline'] = var38;
            var33 = var35.bind(var37)(var34, var33);
            var30['children'] = var33;
            var30 = var32.bind(var4)(var31, var30);
            var28[1] = var30;
            var20['children'] = var28;
            var21 = var26.bind(var4)(var23, var20);
case 63:
            var20 = new Array(2);
            var20[0] = var21;
            var21 = var27;
            if(!var21) { _fun0005_ip = 67; continue _fun0005 }
case 68:
            var21 = var36 > var22;
case 67:
            if(!var21) { _fun0005_ip = 69; continue _fun0005 }
case 70:
            var26 = _closure1_slot14;
            var23 = _closure1_slot7;
            var22 = {};
            var28 = var11.memberCount;
            var22['style'] = var28;
            var31 = _closure1_slot13;
            var28 = {};
            var30 = var11.dot;
            var28['style'] = var30;
            var30 = var31.bind(var4)(var23, var28);
            var28 = new Array(2);
            var28[0] = var30;
            var33 = _closure1_slot0;
            var37 = _closure1_slot2;
            var29 = var37[var29];
            var29 = var33.bind(var4)(var29);
            var30 = var29.Text;
            var29 = {'variant': 'text-sm/normal', 'color': 'text-subtle'};
            var32 = 21;
            var34 = var37[var32];
            var34 = var33.bind(var4)(var34);
            var35 = var34.intl;
            var34 = var35.format;
            var32 = var37[var32];
            var32 = var33.bind(var4)(var32);
            var32 = var32.t;
            var33 = var32.zRl6XR;
            var32 = {};
            var32['count'] = var36;
            var32 = var34.bind(var35)(var33, var32);
            var29['children'] = var32;
            var29 = var31.bind(var4)(var30, var29);
            var28[1] = var29;
            var22['children'] = var28;
            var21 = var26.bind(var4)(var23, var22);
case 69:
            var20[1] = var21;
            var13['children'] = var20;
            var13 = var19.bind(var4)(var18, var13);
            var20 = new Array(2);
            var20[0] = var13;
            var23 = _closure1_slot13;
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var13 = 22;
            var13 = var22[var13];
            var13 = var21.bind(var4)(var13);
            var22 = var13.Button;
            var21 = {};
            var13 = 'active';
            var21['variant'] = var13;
            var13 = 'sm';
            var26 = var13;
            if(!var27) { _fun0005_ip = 71; continue _fun0005 }
case 72:
            var26 = 'lg';
case 71:
            var21['size'] = var26;
            var21['disabled'] = var25;
            var21['loading'] = var16;
            var29 = _closure1_slot0;
            var26 = _closure1_slot2;
            var16 = 21;
            var27 = var26[var16];
            var27 = var29.bind(var4)(var27);
            var28 = var27.intl;
            var27 = var28.string;
            var26 = var26[var16];
            var26 = var29.bind(var4)(var26);
            var26 = var26.t;
            if(var25) { _fun0005_ip = 73; continue _fun0005 }
case 74:
            var25 = var26.VJlc0S;
            var25 = var27.bind(var28)(var25);
            _fun0005_ip = 75; continue _fun0005;
case 73:
            var26 = var26.cEnaWx;
            var25 = var27.bind(var28)(var26);
case 75:
            var21['text'] = var25;
            var21['onPress'] = var24;
            var24 = true;
            var21['grow'] = var24;
            var21 = var23.bind(var4)(var22, var21);
            var20[1] = var21;
            var17['children'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var15[1] = var17;
            var8['children'] = var15;
            var8 = var9.bind(var4)(var12, var8);
            var5[2] = var8;
            var6 = var6 != var7;
            if(!var6) { _fun0005_ip = 76; continue _fun0005 }
case 77:
            var9 = _closure1_slot13;
            var8 = _closure1_slot7;
            var7 = {};
            var11 = var11.dismissButton;
            var7['style'] = var11;
            var15 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = 23;
            var10 = var12[var10];
            var10 = var15.bind(var4)(var10);
            var11 = var10.IconButton;
            var10 = {};
            var14 = function onPress() {
                var5 = _closure2_slot3;
                var2 = _closure2_slot0;
                var4 = var2.id;
                var3 = _closure2_slot1;
                var2 = _closure2_slot2;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var10['onPress'] = var14;
            var14 = 24;
            var14 = var12[var14];
            var14 = var15.bind(var4)(var14);
            var17 = var14.XLargeBoldIcon;
            var14 = {};
            var14['size'] = var13;
            var14 = var9.bind(var4)(var17, var14);
            var10['icon'] = var14;
            var10['size'] = var13;
            var13 = 'secondary-overlay';
            var10['variant'] = var13;
            var13 = var12[var16];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var12[var16];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.WAI6xu;
            var12 = var13.bind(var14)(var12);
            var10['accessibilityLabel'] = var12;
            var10 = var9.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 76:
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();