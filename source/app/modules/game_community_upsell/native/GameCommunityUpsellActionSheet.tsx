// app/modules/game_community_upsell/native/GameCommunityUpsellActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Image;
    var _closure1_slot4 = var7;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot8 = var7;
    var12 = var4.Fonts;
    var4 = var4.JoinGuildSources;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot11 = var7;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var13 = '100%';
    var9['width'] = var13;
    var10 = 8;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var9['backgroundColor'] = var14;
    var4['contentContainer'] = var9;
    var9 = {'backgroundColor': null, 'marginHorizontal': 24, 'marginTop': 41, 'borderRadius': null, 'borderColor': null, 'overflow': 'hidden'};
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.CARD_PRIMARY_BG;
    var9['backgroundColor'] = var14;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.lg;
    var9['borderRadius'] = var14;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_SUBTLE;
    var9['borderColor'] = var14;
    var4['guildCard'] = var9;
    var9 = {};
    var9['width'] = var13;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.CARD_PRIMARY_BG;
    var9['backgroundColor'] = var14;
    var4['bannerContainer'] = var9;
    var9 = {};
    var9['width'] = var13;
    var4['banner'] = var9;
    var9 = {'padding': 16, 'alignItems': 'flex-start'};
    var4['guildInfo'] = var9;
    var9 = {'marginTop': 4294967242, 'marginBottom': 8, 'overflow': 'hidden'};
    var4['guildIconContainer'] = var9;
    var9 = {'width': 64, 'height': 64, 'marginLeft': 4294967294, 'borderRadius': null, 'borderWidth': 5};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var9['borderRadius'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.CARD_PRIMARY_BG;
    var9['borderColor'] = var13;
    var4['guildIcon'] = var9;
    var9 = {'flexDirection': 'column', 'alignItems': 'flex-start', 'gap': 12, 'alignSelf': 'stretch'};
    var4['guildDetails'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var4['guildNameRow'] = var9;
    var9 = {'width': 16, 'height': 16, 'marginRight': 4};
    var4['verifiedBadge'] = var9;
    var9 = {'flex': 1, 'fontSize': 20, 'fontWeight': '700', 'lineHeight': 24};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_STRONG;
    var9['color'] = var13;
    var4['guildName'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 28};
    var4['memberCounts'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 4};
    var4['countItem'] = var9;
    var9 = {'fontFamily': null, 'fontSize': 14, 'fontWeight': '400', 'lineHeight': 18};
    var12 = var12.PRIMARY_NORMAL;
    var9['fontFamily'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_SUBTLE;
    var9['color'] = var12;
    var4['countText'] = var9;
    var9 = {'width': 12, 'height': 12};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var9['borderRadius'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.STATUS_POSITIVE;
    var9['backgroundColor'] = var12;
    var4['onlineDot'] = var9;
    var9 = {'width': 12, 'height': 12};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var9['borderRadius'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.WHITE;
    var9['backgroundColor'] = var12;
    var4['memberDot'] = var9;
    var9 = {'paddingHorizontal': 40, 'paddingTop': 32, 'paddingBottom': 24};
    var4['textContent'] = var9;
    var9 = {'marginBottom': 8, 'textAlign': 'center', 'fontSize': 24, 'fontWeight': '700', 'lineHeight': 30};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.HEADER_PRIMARY;
    var9['color'] = var12;
    var4['title'] = var9;
    var9 = {'marginBottom': 24, 'textAlign': 'center', 'fontSize': 16, 'fontWeight': '500', 'lineHeight': 20, 'width': 327};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_STRONG;
    var9['color'] = var10;
    var4['description'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_community_upsell/native/GameCommunityUpsellActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = var3.game;
            var _closure2_slot0 = var1;
            var9 = var3.markAsDismissed;
            var _closure2_slot1 = var9;
            var4 = _closure1_slot13;
            var5 = undefined;
            var23 = var4.bind(var5)();
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 9;
            var4 = var8[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.bind(var5)();
            var10 = var4.analyticsLocations;
            var _closure2_slot2 = var10;
            var4 = 10;
            var4 = var8[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.bind(var5)();
            var4 = var4.width;
            var _closure2_slot3 = var4;
            var6 = 0.44;
            var25 = var6 * var4;
            var7 = _closure1_slot0;
            var6 = 11;
            var6 = var8[var6];
            var11 = var7.bind(var5)(var6);
            var8 = var11.useStateFromStores;
            var6 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var1.guildId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var22 = var8.bind(var11)(var7, var6);
            var _closure2_slot4 = var22;
            var7 = _closure1_slot3;
            var11 = var7.useEffect;
            var8 = new Array(3);
            var8[0] = var10;
            var8[1] = var22;
            var8[2] = var1;
            var6 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure1_slot7;
                    var3 = var4.markGameAsShown;
                    var5 = _closure2_slot0;
                    var2 = var5.id;
                    var2 = var3.bind(var4)(var2);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 12;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.track;
                    var1 = _closure1_slot8;
                    var2 = var1.GAME_COMMUNITY_UPSELL_VIEWED;
                    var1 = {};
                    var6 = _closure2_slot2;
                    var1['location_stack'] = var6;
                    var6 = var5.id;
                    var1['application_id'] = var6;
                    var5 = var5.guildId;
                    var1['guild_id'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var11.bind(var7)(var6, var8);
            var11 = var7.useEffect;
            var6 = var1.guildId;
            var8 = new Array(2);
            var8[0] = var6;
            var8[1] = var22;
            var6 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0003_ip = 4; continue _fun0003 }
case 3:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var2 = 14;
                    var2 = var1[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = 13;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var3 = var3.bind(var4)(var2, var1);
                    var2 = var3.then;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var3 = var1.fetchGuildForPopout;
                        var1 = _closure2_slot0;
                        var2 = var1.guildId;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var11.bind(var7)(var6, var8);
            var11 = var7.useMemo;
            var6 = var1.guildId;
            var8 = new Array(2);
            var8[0] = var6;
            var8[1] = var22;
            var6 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot4;
                    var5 = null;
                    var2 = var5 == var1;
                    var6 = undefined;
                    var1 = undefined;
                    if(var2) { _fun0004_ip = 5; continue _fun0004 }
case 6:
                    var2 = _closure2_slot4;
                    var1 = var2.icon;
case 5:
                    var2 = var5 != var1;
                    var5 = null;
                    if(!var2) { _fun0004_ip = 7; continue _fun0004 }
case 8:
                    var5 = var1;
case 7:
                    var2 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 15;
                    var1 = var7[var1];
                    var3 = var2.bind(var6)(var1);
                    var2 = var3.getGuildIconSource;
                    var1 = {};
                    var8 = _closure2_slot0;
                    var8 = var8.guildId;
                    var1['id'] = var8;
                    var1['icon'] = var5;
                    var5 = false;
                    var1['canAnimate'] = var5;
                    var5 = _closure1_slot0;
                    var4 = 16;
                    var4 = var7[var4];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.getDevicePixelRatio;
                    var5 = var4.bind(var5)();
                    var4 = 64;
                    var4 = var4 * var5;
                    var1['size'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var21 = var11.bind(var7)(var6, var8);
            var8 = var7.useMemo;
            var11 = var1.guildId;
            var6 = new Array(3);
            var6[0] = var11;
            var6[1] = var22;
            var6[2] = var4;
            var4 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var1 = null;
                    var2 = var1 == var2;
                    var8 = undefined;
                    var7 = undefined;
                    if(var2) { _fun0005_ip = 9; continue _fun0005 }
case 6:
                    var2 = _closure2_slot4;
                    var7 = var2.splash;
case 9:
                    var2 = _closure2_slot4;
                    var3 = var1 == var2;
                    var2 = undefined;
                    if(var3) { _fun0005_ip = 10; continue _fun0005 }
case 11:
                    var3 = _closure2_slot4;
                    var2 = var3.banner;
case 10:
                    if(!(var1 == var7)) { _fun0005_ip = 12; continue _fun0005 }
case 13:
                    var3 = var1 != var2;
                    var1 = null;
                    if(!var3) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 15;
                    var3 = var5[var3];
                    var5 = var4.bind(var8)(var3);
                    var4 = var5.getGuildBannerSource;
                    var3 = {};
                    var9 = _closure2_slot0;
                    var9 = var9.guildId;
                    var3['id'] = var9;
                    var3['banner'] = var2;
                    var2 = false;
                    var1 = var4.bind(var5)(var3, var2);
case 14:
                    _fun0005_ip = 16; continue _fun0005;
case 12:
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 15;
                    var2 = var9[var2];
                    var4 = var3.bind(var8)(var2);
                    var3 = var4.getGuildSplashSource;
                    var2 = {};
                    var10 = _closure2_slot0;
                    var10 = var10.guildId;
                    var2['id'] = var10;
                    var2['splash'] = var7;
                    var6 = _closure2_slot3;
                    var7 = _closure1_slot0;
                    var5 = 16;
                    var5 = var9[var5];
                    var7 = var7.bind(var8)(var5);
                    var5 = var7.getDevicePixelRatio;
                    var5 = var5.bind(var7)();
                    var5 = var6 * var5;
                    var2['size'] = var5;
                    var1 = var3.bind(var4)(var2);
case 16:
                    return var1;
                }
            };
            var19 = var8.bind(var7)(var4, var6);
            var8 = var7.useCallback;
            var6 = new Array(3);
            var6[0] = var10;
            var6[1] = var1;
            var6[2] = var9;
            var4 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 12;
                var3 = var3[var1];
                var1 = undefined;
                var7 = var4.bind(var1)(var3);
                var6 = var7.track;
                var3 = _closure1_slot8;
                var5 = var3.GAME_COMMUNITY_UPSELL_DISMISSED;
                var4 = {};
                var8 = _closure2_slot2;
                var4['location_stack'] = var8;
                var8 = _closure2_slot0;
                var9 = var8.id;
                var4['application_id'] = var9;
                var8 = var8.guildId;
                var4['guild_id'] = var8;
                var4 = var6.bind(var7)(var5, var4);
                var6 = _closure1_slot7;
                var5 = var6.setCurrentGame;
                var4 = null;
                var4 = var5.bind(var6)(var4);
                var3 = _closure2_slot1;
                var2 = _closure1_slot10;
                var2 = var2.USER_DISMISS;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var8 = var8.bind(var7)(var4, var6);
            var6 = var7.useCallback;
            var4 = new Array(3);
            var4[0] = var10;
            var4[1] = var1;
            var4[2] = var9;
            var2 = function() {
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 12;
                var2 = var5[var1];
                var1 = undefined;
                var10 = var4.bind(var1)(var2);
                var9 = var10.track;
                var2 = _closure1_slot8;
                var8 = var2.GAME_COMMUNITY_UPSELL_ACCEPTED;
                var7 = {};
                var2 = _closure2_slot2;
                var7['location_stack'] = var2;
                var2 = _closure2_slot0;
                var11 = var2.id;
                var7['application_id'] = var11;
                var11 = var2.guildId;
                var7['guild_id'] = var11;
                var7 = var9.bind(var10)(var8, var7);
                var9 = _closure1_slot7;
                var8 = var9.setCurrentGame;
                var7 = null;
                var7 = var8.bind(var9)(var7);
                var7 = _closure2_slot1;
                var3 = _closure1_slot10;
                var3 = var3.TAKE_ACTION;
                var3 = var7.bind(var1)(var3);
                var3 = 17;
                var3 = var5[var3];
                var8 = var4.bind(var1)(var3);
                var7 = var8.hideActionSheet;
                var3 = 'GameCommunityUpsellActionSheet';
                var3 = var7.bind(var8)(var3);
                var3 = 18;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.joinGuild;
                var3 = var2.guildId;
                var2 = {};
                var6 = _closure1_slot9;
                var6 = var6.GAME_COMMUNITY_UPSELL;
                var2['source'] = var6;
                var4 = var4.bind(var5)(var3, var2);
                var3 = var4.then;
                var2 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 18;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.transitionToGuildSync;
                    var2 = _closure2_slot0;
                    var2 = var2.guildId;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var18 = var6.bind(var7)(var2, var4);
            var2 = null;
            var6 = var2 == var22;
            var4 = undefined;
            if(var6) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var4 = var22.presenceCount;
case 17:
            var6 = var2 != var4;
            var26 = 0;
            var39 = 0;
            if(!var6) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var39 = var4;
case 19:
            var6 = var2 == var22;
            var4 = undefined;
            if(var6) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var4 = var22.memberCount;
case 21:
            var6 = var2 != var4;
            var38 = 0;
            if(!var6) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var38 = var4;
case 23:
            var4 = var2 == var22;
            var27 = undefined;
            if(var4) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var27 = var22.name;
case 25:
            if(!(var2 == var27)) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var27 = var1.guildName;
case 27:
            if(!(var2 != var22)) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var7 = _closure1_slot11;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 20;
            var4 = var9[var4];
            var4 = var6.bind(var5)(var4);
            var6 = var4.BottomSheet;
            var4 = {};
            var9 = true;
            var4['startExpanded'] = var9;
            var4['onDismiss'] = var8;
            var10 = _closure1_slot12;
            var9 = _closure1_slot5;
            var8 = {};
            var11 = var23.contentContainer;
            var8['style'] = var11;
            var11 = {};
            var12 = var23.guildCard;
            var11['style'] = var12;
            var13 = var2 != var19;
            if(!var13) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var15 = _closure1_slot11;
            var14 = _closure1_slot5;
            var12 = {};
            var17 = var23.bannerContainer;
            var16 = new Array(2);
            var16[0] = var17;
            var17 = {};
            var17['height'] = var25;
            var16[1] = var17;
            var12['style'] = var16;
            var17 = _closure1_slot4;
            var16 = {};
            var24 = var23.banner;
            var20 = new Array(2);
            var20[0] = var24;
            var24 = {};
            var24['height'] = var25;
            var20[1] = var24;
            var16['style'] = var20;
            var16['source'] = var19;
            var19 = 'cover';
            var16['resizeMode'] = var19;
            var16 = var15.bind(var5)(var17, var16);
            var12['children'] = var16;
            var13 = var15.bind(var5)(var14, var12);
case 31:
            var12 = new Array(2);
            var12[0] = var13;
            var15 = _closure1_slot12;
            var14 = _closure1_slot5;
            var13 = {};
            var16 = var23.guildInfo;
            var13['style'] = var16;
            var17 = _closure1_slot11;
            var16 = {};
            var19 = var23.guildIconContainer;
            var16['style'] = var19;
            var20 = _closure1_slot4;
            var19 = {};
            var24 = var23.guildIcon;
            var19['style'] = var24;
            var19['source'] = var21;
            var19 = var17.bind(var5)(var20, var19);
            var16['children'] = var19;
            var17 = var17.bind(var5)(var14, var16);
            var16 = new Array(2);
            var16[0] = var17;
            var17 = {};
            var19 = var23.guildDetails;
            var17['style'] = var19;
            var20 = {};
            var19 = var23.guildNameRow;
            var20['style'] = var19;
            var21 = var2 == var22;
            var19 = undefined;
            if(var21) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var25 = var22.features;
            var21 = var2 == var25;
            var19 = undefined;
            if(var21) { _fun0001_ip = 33; continue _fun0001 }
case 35:
            var24 = var25.has;
            var21 = 'VERIFIED';
            var19 = var24.bind(var25)(var21);
case 33:
            if(var19) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var24 = var2 == var22;
            var21 = undefined;
            if(var24) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var25 = var22.features;
            var22 = var2 == var25;
            var21 = undefined;
            if(var22) { _fun0001_ip = 38; continue _fun0001 }
case 40:
            var24 = var25.has;
            var22 = 'PARTNERED';
            var21 = var24.bind(var25)(var22);
case 38:
            var19 = var21;
case 36:
            if(!var19) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var24 = _closure1_slot11;
            var22 = _closure1_slot4;
            var21 = {};
            var25 = var23.verifiedBadge;
            var21['style'] = var25;
            var28 = _closure1_slot1;
            var29 = _closure1_slot2;
            var25 = 21;
            var25 = var29[var25];
            var25 = var28.bind(var5)(var25);
            var21['source'] = var25;
            var19 = var24.bind(var5)(var22, var21);
case 41:
            var21 = new Array(2);
            var21[0] = var19;
            var25 = _closure1_slot11;
            var24 = _closure1_slot0;
            var22 = _closure1_slot2;
            var19 = 22;
            var22 = var22[var19];
            var22 = var24.bind(var5)(var22);
            var24 = var22.Text;
            var22 = {'variant': 'text-md/semibold', 'style': null, 'lineClamp': 1};
            var28 = var23.guildName;
            var22['style'] = var28;
            var22['children'] = var27;
            var22 = var25.bind(var5)(var24, var22);
            var21[1] = var22;
            var20['children'] = var21;
            var21 = var15.bind(var5)(var14, var20);
            var20 = new Array(2);
            var20[0] = var21;
            var24 = _closure1_slot12;
            var22 = _closure1_slot5;
            var21 = {};
            var25 = var23.memberCounts;
            var21['style'] = var25;
            var27 = var39 > var26;
            if(!var27) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var29 = _closure1_slot12;
            var28 = _closure1_slot5;
            var25 = {};
            var30 = var23.countItem;
            var25['style'] = var30;
            var33 = _closure1_slot11;
            var30 = {};
            var31 = var23.onlineDot;
            var30['style'] = var31;
            var31 = var33.bind(var5)(var28, var30);
            var30 = new Array(2);
            var30[0] = var31;
            var35 = _closure1_slot0;
            var40 = _closure1_slot2;
            var31 = var40[var19];
            var31 = var35.bind(var5)(var31);
            var32 = var31.Text;
            var31 = {};
            var34 = 'text-sm/normal';
            var31['variant'] = var34;
            var34 = var23.countText;
            var31['style'] = var34;
            var34 = 23;
            var36 = var40[var34];
            var36 = var35.bind(var5)(var36);
            var37 = var36.intl;
            var36 = var37.format;
            var34 = var40[var34];
            var34 = var35.bind(var5)(var34);
            var34 = var34.t;
            var35 = var34.LC+S+m;
            var34 = {};
            var34['membersOnline'] = var39;
            var34 = var36.bind(var37)(var35, var34);
            var31['children'] = var34;
            var31 = var33.bind(var5)(var32, var31);
            var30[1] = var31;
            var25['children'] = var30;
            var27 = var29.bind(var5)(var28, var25);
case 43:
            var25 = new Array(2);
            var25[0] = var27;
            var26 = var38 > var26;
            if(!var26) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var29 = _closure1_slot12;
            var28 = _closure1_slot5;
            var27 = {};
            var30 = var23.countItem;
            var27['style'] = var30;
            var33 = _closure1_slot11;
            var30 = {};
            var31 = var23.memberDot;
            var30['style'] = var31;
            var31 = var33.bind(var5)(var28, var30);
            var30 = new Array(2);
            var30[0] = var31;
            var35 = _closure1_slot0;
            var39 = _closure1_slot2;
            var31 = var39[var19];
            var31 = var35.bind(var5)(var31);
            var32 = var31.Text;
            var31 = {};
            var34 = 'text-sm/normal';
            var31['variant'] = var34;
            var34 = var23.countText;
            var31['style'] = var34;
            var34 = 23;
            var36 = var39[var34];
            var36 = var35.bind(var5)(var36);
            var37 = var36.intl;
            var36 = var37.format;
            var34 = var39[var34];
            var34 = var35.bind(var5)(var34);
            var34 = var34.t;
            var35 = var34.zRl6XR;
            var34 = {};
            var34['count'] = var38;
            var34 = var36.bind(var37)(var35, var34);
            var31['children'] = var34;
            var31 = var33.bind(var5)(var32, var31);
            var30[1] = var31;
            var27['children'] = var30;
            var26 = var29.bind(var5)(var28, var27);
case 45:
            var25[1] = var26;
            var21['children'] = var25;
            var21 = var24.bind(var5)(var22, var21);
            var20[1] = var21;
            var17['children'] = var20;
            var17 = var15.bind(var5)(var14, var17);
            var16[1] = var17;
            var13['children'] = var16;
            var13 = var15.bind(var5)(var14, var13);
            var12[1] = var13;
            var11['children'] = var12;
            var12 = var10.bind(var5)(var9, var11);
            var11 = new Array(3);
            var11[0] = var12;
            var15 = _closure1_slot12;
            var14 = _closure1_slot5;
            var12 = {};
            var13 = var23.textContent;
            var12['style'] = var13;
            var13 = _closure1_slot11;
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var16 = var21[var19];
            var16 = var20.bind(var5)(var16);
            var22 = var16.Text;
            var16 = {};
            var17 = 'heading-lg/semibold';
            var16['variant'] = var17;
            var17 = var23.title;
            var16['style'] = var17;
            var17 = 23;
            var24 = var21[var17];
            var24 = var20.bind(var5)(var24);
            var27 = var24.intl;
            var26 = var27.formatToPlainString;
            var24 = var21[var17];
            var24 = var20.bind(var5)(var24);
            var24 = var24.t;
            var25 = var24.ry9SJw;
            var24 = {};
            var28 = var1.name;
            var24['gameName'] = var28;
            var24 = var26.bind(var27)(var25, var24);
            var16['children'] = var24;
            var22 = var13.bind(var5)(var22, var16);
            var16 = new Array(2);
            var16[0] = var22;
            var19 = var21[var19];
            var19 = var20.bind(var5)(var19);
            var22 = var19.Text;
            var19 = {};
            var24 = 'text-md/normal';
            var19['variant'] = var24;
            var23 = var23.description;
            var19['style'] = var23;
            var23 = var21[var17];
            var23 = var20.bind(var5)(var23);
            var25 = var23.intl;
            var24 = var25.string;
            var23 = var21[var17];
            var23 = var20.bind(var5)(var23);
            var23 = var23.t;
            var23 = var23.YPpOov;
            var23 = var24.bind(var25)(var23);
            var19['children'] = var23;
            var19 = var13.bind(var5)(var22, var19);
            var16[1] = var19;
            var12['children'] = var16;
            var12 = var15.bind(var5)(var14, var12);
            var11[1] = var12;
            var12 = {};
            var15 = {'paddingHorizontal': 16, 'marginBottom': 32};
            var12['style'] = var15;
            var15 = 24;
            var15 = var21[var15];
            var15 = var20.bind(var5)(var15);
            var16 = var15.Button;
            var15 = {'variant': 'primary', 'size': 'lg'};
            var15['onPress'] = var18;
            var18 = var21[var17];
            var18 = var20.bind(var5)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var21[var17];
            var17 = var20.bind(var5)(var17);
            var17 = var17.t;
            var17 = var17.RVfNGU;
            var17 = var18.bind(var19)(var17);
            var15['text'] = var17;
            var15 = var13.bind(var5)(var16, var15);
            var12['children'] = var15;
            var12 = var13.bind(var5)(var14, var12);
            var11[2] = var12;
            var8['children'] = var11;
            var8 = var10.bind(var5)(var9, var8);
            var4['children'] = var8;
            var1 = var1.id;
            var1 = var7.bind(var5)(var6, var4, var1);
            _fun0001_ip = 47; continue _fun0001;
case 29:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 19;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var5 = var3.debugLogger;
            var4 = var5.log;
            var3 = 'Not rendering action sheet - guild data not loaded';
            var3 = var4.bind(var5)(var3);
            var1 = null;
case 47:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();