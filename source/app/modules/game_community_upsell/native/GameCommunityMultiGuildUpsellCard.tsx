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
            var1 = 56;
case 2:
            return var1;
        }
    };
    var _closure1_slot15 = var4;
    var4 = function getGuildIconTop(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot15;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            var1 = 'one-column';
            if(!(var1 !== var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var3 = 2;
            var4 = var2 / var3;
            var1 = 80;
            var1 = var1 - var4;
            var1 = var1 - var3;
            _fun0002_ip = 6; continue _fun0002;
case 4:
            var3 = 2;
            var4 = var2 / var3;
            var2 = 88;
            var2 = var2 - var4;
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
            var1 = 8;
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
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var12 = arg1;
            var1 = 'one-column';
            var5 = var1 === var12;
            var7 = 10;
            var10 = var7;
            if(!var5) { _fun0004_ip = 9; continue _fun0004 }
case 10:
            var10 = 12;
case 9:
            var1 = _closure1_slot15;
            var6 = undefined;
            var3 = var1.bind(var6)(var12);
            var1 = {};
            var2 = {'backgroundColor': null, 'borderColor': null, 'borderWidth': 1, 'borderRadius': null, 'overflow': 'hidden', 'flex': 1};
            var11 = _closure1_slot1;
            var9 = _closure1_slot2;
            var8 = var9[var7];
            var8 = var11.bind(var6)(var8);
            var8 = var8.colors;
            var8 = var8.BG_SURFACE_RAISED;
            var2['backgroundColor'] = var8;
            var8 = var9[var7];
            var8 = var11.bind(var6)(var8);
            var8 = var8.colors;
            var8 = var8.BORDER_MUTED;
            var2['borderColor'] = var8;
            var8 = 1;
            var13 = var9[var7];
            var13 = var11.bind(var6)(var13);
            var13 = var13.radii;
            var13 = var13.lg;
            var2['borderRadius'] = var13;
            var9 = var9[var7];
            var9 = var11.bind(var6)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_16;
            var2['marginBottom'] = var9;
            var1['card'] = var2;
            var2 = {};
            var9 = 80;
            if(!var5) { _fun0004_ip = 11; continue _fun0004 }
case 12:
            var9 = 88;
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
            var8 = 28;
            if(!var5) { _fun0004_ip = 13; continue _fun0004 }
case 14:
            var8 = 32;
case 13:
            var2['marginTop'] = var8;
            var11 = _closure1_slot1;
            var9 = _closure1_slot2;
            var8 = var9[var7];
            var8 = var11.bind(var6)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_12;
            var2['marginBottom'] = var8;
            var8 = var9[var7];
            var8 = var11.bind(var6)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_12;
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
            if(var5) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            var9 = var11.PX_4;
            _fun0004_ip = 17; continue _fun0004;
case 15:
            var9 = var11.PX_8;
case 17:
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
            if(var5) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var9 = var11.PX_4;
            _fun0004_ip = 20; continue _fun0004;
case 18:
            var9 = var11.PX_8;
case 20:
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
            if(var5) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var5 = var8.PX_8;
            _fun0004_ip = 23; continue _fun0004;
case 21:
            var5 = var8.PX_12;
case 23:
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
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_community_upsell/native/GameCommunityMultiGuildUpsellCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GameCommunityMultiGuildUpsellCard(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var21 = var1.guild;
            var _closure2_slot0 = var21;
            var6 = var1.gameId;
            var _closure2_slot1 = var6;
            var26 = var1.variant;
            var _closure2_slot2 = var26;
            var1 = var1.onDismiss;
            var _closure2_slot3 = var1;
            var4 = undefined;
            var _closure2_slot9 = var4;
            var2 = _closure1_slot18;
            var11 = var2.bind(var4)(var26);
            var9 = _closure1_slot5;
            var3 = var9.useState;
            var2 = false;
            var5 = var3.bind(var9)(var2);
            var3 = _closure1_slot4;
            var2 = 2;
            var3 = var3.bind(var4)(var5, var2);
            var7 = 0;
            var24 = var3[var7];
            var _closure2_slot4 = var24;
            var2 = 1;
            var2 = var3[var2];
            var _closure2_slot5 = var2;
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 11;
            var2 = var8[var3];
            var15 = var5.bind(var4)(var2);
            var14 = var15.useStateFromStores;
            var2 = _closure1_slot8;
            var13 = new Array(1);
            var13[0] = var2;
            var2 = function() {
                var1 = _closure1_slot8;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var2 = var14.bind(var15)(var13, var2);
            var _closure2_slot6 = var2;
            var3 = var8[var3];
            var13 = var5.bind(var4)(var3);
            var8 = var13.useStateFromStores;
            var3 = _closure1_slot9;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var3 = _closure1_slot9;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var19 = var8.bind(var13)(var5, var3);
            var _closure2_slot7 = var19;
            var3 = _closure1_slot15;
            var30 = var3.bind(var4)(var26);
            var _closure2_slot8 = var30;
            var8 = var9.useMemo;
            var3 = var21.id;
            var5 = new Array(4);
            var5[0] = var3;
            var3 = var21.icon;
            var5[1] = var3;
            var5[2] = var2;
            var5[3] = var30;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var1 = var1.icon;
                    var6 = null;
                    var2 = var6 != var1;
                    if(!var2) { _fun0006_ip = 24; continue _fun0006 }
case 25:
                    var6 = var1;
case 24:
                    var2 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var1 = 12;
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
                    var4 = 13;
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
            var15 = var8.bind(var9)(var3, var5);
            var2 = !var2;
            if(!var2) { _fun0005_ip = 26; continue _fun0005 }
case 27:
            var8 = var21.features;
            var5 = var8.has;
            var3 = _closure1_slot10;
            var3 = var3.ANIMATED_BANNER;
            var5 = var5.bind(var8)(var3);
            var3 = true;
            var2 = var3 === var5;
case 26:
            _closure2_slot9 = var2;
            var5 = _closure1_slot5;
            var8 = var5.useMemo;
            var9 = var21.id;
            var3 = new Array(5);
            var3[0] = var9;
            var9 = var21.splash;
            var3[1] = var9;
            var9 = var21.banner;
            var3[2] = var9;
            var3[3] = var2;
            var3[4] = var26;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var7 = var1.splash;
                    var3 = var1.banner;
                    var _closure3_slot0 = var3;
                    var1 = null;
                    if(!(var1 == var7)) { _fun0007_ip = 28; continue _fun0007 }
case 29:
                    var3 = var1 != var3;
                    var1 = null;
                    if(!var3) { _fun0007_ip = 30; continue _fun0007 }
case 31:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 12;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.getAnimatableSourceWithFallback;
                    var3 = _closure2_slot9;
                    var2 = function(arg1) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 12;
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
case 30:
                    _fun0007_ip = 32; continue _fun0007;
case 28:
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 12;
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
                    var5 = 13;
                    var5 = var9[var5];
                    var7 = var7.bind(var8)(var5);
                    var5 = var7.getDevicePixelRatio;
                    var5 = var5.bind(var7)();
                    var5 = var6 * var5;
                    var2['size'] = var5;
                    var1 = var3.bind(var4)(var2);
case 32:
                    return var1;
                }
            };
            var28 = var8.bind(var5)(var2, var3);
            var8 = var5.useCallback;
            var3 = _closure1_slot3;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0008_ip = 33; continue _fun0008 }
case 34:
                        var2 = _closure2_slot7;
                        if(var2) { _fun0008_ip = 35; continue _fun0008 }
case 36:
                        var2 = _closure2_slot4;
                        if(var2) { _fun0008_ip = 35; continue _fun0008 }
case 37:
                        var4 = _closure2_slot5;
                        var5 = undefined;
                        var2 = true;
                        var2 = var4.bind(var5)(var2);
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var2 = 14;
                        var2 = var7[var2];
                        var8 = var6.bind(var5)(var2);
                        var7 = var8.track;
                        var2 = _closure1_slot12;
                        var6 = var2.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD_JOINED;
                        var2 = {};
                        var9 = _closure2_slot0;
                        var9 = var9.id;
                        var2['guild_id'] = var9;
                        var9 = _closure2_slot1;
                        var2['game_id'] = var9;
                        var9 = _closure2_slot2;
                        var2['variant'] = var9;
                        var2 = var7.bind(var8)(var6, var2);
case 38: // try_start_0
                        var6 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var8 = 15;
                        var2 = var2[var8];
                        var10 = var6.bind(var5)(var2);
                        var9 = var10.joinGuild;
                        var2 = _closure2_slot0;
                        var7 = var2.id;
                        var2 = {};
                        var6 = _closure1_slot11;
                        var6 = var6.GAME_COMMUNITY_UPSELL;
                        var2['source'] = var6;
                        var6 = false;
                        var2['autoNavigate'] = var6;
                        var2 = var9.bind(var10)(var7, var2);
                        SaveGenerator(address=190);
case 39:
                        return var2;
case 40:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                        if(var7) { _fun0008_ip = 41; continue _fun0008 }
case 42:
                        var7 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var4 = var4[var8];
                        var8 = var7.bind(var5)(var4);
                        var7 = var8.waitForGuild;
                        var4 = _closure2_slot0;
                        var4 = var4.id;
                        var4 = var7.bind(var8)(var4);
                        SaveGenerator(address=237);
case 43:
                        return var4;
case 44:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                        if(var7) { _fun0008_ip = 45; continue _fun0008 }
case 46: // try_end0
                        var7 = _closure2_slot5;
                        var7 = var7.bind(var5)(var6);
                        _fun0008_ip = 35; continue _fun0008;
case 45:
                        var7 = _closure2_slot5;
                        var7 = var7.bind(var5)(var6);
                        return var4;
case 41:
                        var4 = _closure2_slot5;
                        var4 = var4.bind(var5)(var6);
                        return var2;
case 47: // catch_target0
                        CatchBlockStart(arg_register=1);
                        var4 = _closure2_slot5;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
case 35:
                        var2 = undefined;
                        return var2;
case 33:
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var9 = var21.id;
            var2 = new Array(5);
            var2[0] = var9;
            var2[1] = var19;
            var2[2] = var24;
            var2[3] = var6;
            var2[4] = var26;
            var22 = var8.bind(var5)(var3, var2);
            var8 = var5.useCallback;
            var2 = var21.id;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 16;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.transitionToGuild;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var23 = var8.bind(var5)(var2, var3);
            var3 = var5.useMemo;
            var8 = var21.id;
            var2 = new Array(3);
            var2[0] = var8;
            var2[1] = var6;
            var2[2] = var1;
            var1 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0009_ip = 48; continue _fun0009 }
case 49:
                    var2 = {};
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 17;
                    var3 = var7[var1];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var1 = var7[var1];
                    var1 = var6.bind(var5)(var1);
                    var1 = var1.t;
                    var1 = var1.XW1okC;
                    var1 = var3.bind(var4)(var1);
                    var2['label'] = var1;
                    var1 = 'destructive';
                    var2['variant'] = var1;
                    var1 = function action() {
                        var4 = _closure2_slot3;
                        var2 = _closure2_slot0;
                        var3 = var2.id;
                        var2 = _closure2_slot1;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var2['action'] = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    _fun0009_ip = 50; continue _fun0009;
case 48:
                    var1 = new Array(0);
case 50:
                    return var1;
                }
            };
            var13 = var3.bind(var5)(var1, var2);
            var1 = var21.presenceCount;
            var16 = null;
            var2 = var16 != var1;
            var38 = 0;
            if(!var2) { _fun0005_ip = 51; continue _fun0005 }
case 52:
            var38 = var1;
case 51:
            var1 = var21.memberCount;
            var2 = var16 != var1;
            var36 = 0;
            if(!var2) { _fun0005_ip = 53; continue _fun0005 }
case 54:
            var36 = var1;
case 53:
            var27 = var21.name;
            var25 = var21.description;
            var3 = _closure1_slot14;
            var2 = _closure1_slot7;
            var1 = {};
            var5 = var11.card;
            var1['style'] = var5;
            var6 = _closure1_slot13;
            var5 = {};
            var8 = var11.bannerContainer;
            var5['style'] = var8;
            var20 = _closure1_slot1;
            var29 = _closure1_slot2;
            var14 = 18;
            var8 = var29[var14];
            var9 = var20.bind(var4)(var8);
            var8 = {};
            var17 = var11.banner;
            var8['style'] = var17;
            var17 = {};
            var18 = _closure1_slot0;
            var14 = var29[var14];
            var14 = var18.bind(var4)(var14);
            var14 = var14.CutoutShape;
            var14 = var14.RoundedRect;
            var17['shape'] = var14;
            var14 = 12;
            var17['x'] = var14;
            var14 = _closure1_slot16;
            var14 = var14.bind(var4)(var26);
            var18 = 4;
            var14 = var14 - var18;
            var17['y'] = var14;
            var14 = 8;
            var14 = var30 + var14;
            var17['width'] = var14;
            var17['height'] = var14;
            var14 = 10;
            var14 = var29[var14];
            var14 = var20.bind(var4)(var14);
            var14 = var14.radii;
            var14 = var14.lg;
            var14 = var14 + var18;
            var17['cornerRadius'] = var14;
            var14 = new Array(1);
            var14[0] = var17;
            var8['cutouts'] = var14;
            if(!(var16 == var28)) { _fun0005_ip = 55; continue _fun0005 }
case 56:
            var18 = _closure1_slot13;
            var17 = _closure1_slot7;
            var14 = {};
            var20 = var11.banner;
            var14['style'] = var20;
            var14 = var18.bind(var4)(var17, var14);
            _fun0005_ip = 57; continue _fun0005;
case 55:
            var20 = _closure1_slot13;
            var18 = _closure1_slot6;
            var17 = {};
            var29 = var11.banner;
            var17['style'] = var29;
            var17['source'] = var28;
            var28 = 'cover';
            var17['resizeMode'] = var28;
            var14 = var20.bind(var4)(var18, var17);
case 57:
            var8['children'] = var14;
            var8 = var6.bind(var4)(var9, var8);
            var5['children'] = var8;
            var6 = var6.bind(var4)(var2, var5);
            var5 = new Array(4);
            var5[0] = var6;
            var20 = _closure1_slot13;
            var9 = _closure1_slot7;
            var6 = {};
            var8 = var11.guildIconContainer;
            var6['style'] = var8;
            var14 = _closure1_slot6;
            var8 = {};
            var17 = var11.guildIcon;
            var8['style'] = var17;
            var8['source'] = var15;
            var8 = var20.bind(var4)(var14, var8);
            var6['children'] = var8;
            var6 = var20.bind(var4)(var9, var6);
            var5[1] = var6;
            var8 = _closure1_slot14;
            var6 = {};
            var14 = var11.content;
            var6['style'] = var14;
            var14 = {};
            var15 = {};
            var17 = var11.guildNameRow;
            var15['style'] = var17;
            var18 = _closure1_slot1;
            var28 = _closure1_slot2;
            var17 = 19;
            var17 = var28[var17];
            var18 = var18.bind(var4)(var17);
            var17 = {};
            var17['guild'] = var21;
            var21 = 'one-column';
            var21 = var21 === var26;
            var28 = _closure1_slot1;
            var29 = _closure1_slot2;
            var26 = 20;
            var26 = var29[var26];
            var26 = var28.bind(var4)(var26);
            var28 = var26.Sizes;
            if(var21) { _fun0005_ip = 58; continue _fun0005 }
case 59:
            var26 = var28.EXTRA_SMALL;
            _fun0005_ip = 60; continue _fun0005;
case 58:
            var26 = var28.REFRESH_SMALL_16;
case 60:
            var17['size'] = var26;
            var26 = var11.guildBadge;
            var17['style'] = var26;
            var18 = var20.bind(var4)(var18, var17);
            var17 = new Array(2);
            var17[0] = var18;
            var26 = _closure1_slot13;
            var20 = _closure1_slot0;
            var18 = _closure1_slot2;
            var29 = 21;
            var18 = var18[var29];
            var18 = var20.bind(var4)(var18);
            var20 = var18.Text;
            var18 = {'variant': null, 'color': 'mobile-text-heading-primary', 'accessibilityRole': 'header', 'style': null, 'lineClamp': 1};
            var28 = 'heading-sm/bold';
            if(!var21) { _fun0005_ip = 61; continue _fun0005 }
case 62:
            var28 = 'heading-md/bold';
case 61:
            var18['variant'] = var28;
            var28 = var11.guildName;
            var18['style'] = var28;
            var18['children'] = var27;
            var18 = var26.bind(var4)(var20, var18);
            var17[1] = var18;
            var15['children'] = var17;
            var17 = var8.bind(var4)(var9, var15);
            var15 = new Array(2);
            var15[0] = var17;
            var16 = var16 != var25;
            if(!var16) { _fun0005_ip = 63; continue _fun0005 }
case 64:
            var17 = var25.length;
            var16 = var17 > var7;
case 63:
            if(!var16) { _fun0005_ip = 65; continue _fun0005 }
case 66:
            var20 = _closure1_slot13;
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var17 = var17[var29];
            var17 = var18.bind(var4)(var17);
            var18 = var17.Text;
            var17 = {};
            var26 = 'text-xs/medium';
            if(!var21) { _fun0005_ip = 67; continue _fun0005 }
case 68:
            var26 = 'text-sm/medium';
case 67:
            var17['variant'] = var26;
            var26 = var11.description;
            var17['style'] = var26;
            var26 = 3;
            var17['lineClamp'] = var26;
            var17['children'] = var25;
            var16 = var20.bind(var4)(var18, var17);
case 65:
            var15[1] = var16;
            var14['children'] = var15;
            var15 = var8.bind(var4)(var9, var14);
            var14 = new Array(2);
            var14[0] = var15;
            var17 = _closure1_slot14;
            var16 = _closure1_slot7;
            var15 = {};
            var18 = {};
            var20 = var11.memberCounts;
            var18['style'] = var20;
            var25 = var38 > var7;
            if(!var25) { _fun0005_ip = 69; continue _fun0005 }
case 70:
            var27 = _closure1_slot14;
            var26 = _closure1_slot7;
            var20 = {};
            var28 = var11.memberCount;
            var20['style'] = var28;
            var32 = _closure1_slot13;
            var28 = {};
            var30 = var11.dotOnline;
            var28['style'] = var30;
            var30 = var32.bind(var4)(var26, var28);
            var28 = new Array(2);
            var28[0] = var30;
            var34 = _closure1_slot0;
            var39 = _closure1_slot2;
            var30 = var39[var29];
            var30 = var34.bind(var4)(var30);
            var31 = var30.Text;
            var30 = {'variant': 'text-xs/medium', 'color': 'text-subtle'};
            var33 = 17;
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
            var25 = var27.bind(var4)(var26, var20);
case 69:
            var20 = new Array(2);
            var20[0] = var25;
            if(!var21) { _fun0005_ip = 71; continue _fun0005 }
case 72:
            var21 = var36 > var7;
case 71:
            if(!var21) { _fun0005_ip = 73; continue _fun0005 }
case 74:
            var27 = _closure1_slot14;
            var26 = _closure1_slot7;
            var25 = {};
            var28 = var11.memberCount;
            var25['style'] = var28;
            var31 = _closure1_slot13;
            var28 = {};
            var30 = var11.dot;
            var28['style'] = var30;
            var30 = var31.bind(var4)(var26, var28);
            var28 = new Array(2);
            var28[0] = var30;
            var33 = _closure1_slot0;
            var37 = _closure1_slot2;
            var29 = var37[var29];
            var29 = var33.bind(var4)(var29);
            var30 = var29.Text;
            var29 = {'variant': 'text-xs/medium', 'color': 'text-subtle'};
            var32 = 17;
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
            var25['children'] = var28;
            var21 = var27.bind(var4)(var26, var25);
case 73:
            var20[1] = var21;
            var18['children'] = var20;
            var20 = var17.bind(var4)(var16, var18);
            var18 = new Array(2);
            var18[0] = var20;
            var21 = _closure1_slot13;
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var20 = 22;
            var20 = var26[var20];
            var20 = var25.bind(var4)(var20);
            var20 = var20.Button;
            if(var19) { _fun0005_ip = 75; continue _fun0005 }
case 76:
            var19 = {'variant': 'primary', 'size': 'sm'};
            var19['loading'] = var24;
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var24 = 17;
            var25 = var28[var24];
            var25 = var27.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var24 = var28[var24];
            var24 = var27.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24.VJlc0S;
            var24 = var25.bind(var26)(var24);
            var19['text'] = var24;
            var19['onPress'] = var22;
            var22 = true;
            var19['grow'] = var22;
            _fun0005_ip = 77; continue _fun0005;
case 75:
            var22 = {'variant': 'active', 'size': 'sm', 'text': null, 'onPress': null, 'grow': true};
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var24 = 17;
            var25 = var28[var24];
            var25 = var27.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var24 = var28[var24];
            var24 = var27.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24.KLOhbO;
            var24 = var25.bind(var26)(var24);
            var22['text'] = var24;
            var22['onPress'] = var23;
            var19 = var22;
case 77:
            var19 = var21.bind(var4)(var20, var19);
            var18[1] = var19;
            var15['children'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var14[1] = var15;
            var6['children'] = var14;
            var6 = var8.bind(var4)(var9, var6);
            var5[2] = var6;
            var6 = var13.length;
            var6 = var6 > var7;
            if(!var6) { _fun0005_ip = 78; continue _fun0005 }
case 79:
            var9 = _closure1_slot13;
            var8 = _closure1_slot7;
            var7 = {};
            var11 = var11.dismissButton;
            var7['style'] = var11;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 23;
            var10 = var14[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.ContextMenu;
            var10 = {};
            var10['items'] = var13;
            var12 = function children(arg1) {
                var3 = arg1;
                var6 = var3.ref;
                var1 = null;
                var2 = Object.create(var1);
                var1 = 0;
                var2['ref'] = var1;
                var13 = {};
                var12 = var3;
                var11 = var2;
                var12 = copyDataProperties(var13, var12, var11);
                var4 = _closure1_slot13;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 24;
                var1 = var9[var1];
                var3 = undefined;
                var1 = var8.bind(var3)(var1);
                var2 = var1.IconButton;
                var1 = {};
                var1['ref'] = var6;
                var13 = var1;
                var5 = copyDataProperties(var13, var12);
                var5 = 25;
                var5 = var9[var5];
                var5 = var8.bind(var3)(var5);
                var7 = var5.MoreHorizontalIcon;
                var5 = {};
                var6 = 'sm';
                var5['size'] = var6;
                var7 = var4.bind(var3)(var7, var5);
                var5 = 'icon';
                var1[var5] = var7;
                var5 = 'size';
                var1[var5] = var6;
                var6 = 'secondary-overlay';
                var5 = 'variant';
                var1[var5] = var6;
                var5 = 17;
                var6 = var9[var5];
                var6 = var8.bind(var3)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.ogxXGq;
                var6 = var6.bind(var7)(var5);
                var5 = 'accessibilityLabel';
                var1[var5] = var6;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var10['children'] = var12;
            var10 = var9.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 78:
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();