// app/modules/guild_action_sheet/native/components/GuildActionSheetHeader.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var11 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var11;
        var _closure1_slot2 = var6;
        var1 = function CommunityPill(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var2 = var1.guildVisibility;
                var4 = undefined;
                var _closure2_slot0 = var4;
                var1 = _closure1_slot12;
                var10 = var1.bind(var4)();
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var13 = 10;
                var1 = var8[var13];
                var1 = var7.bind(var4)(var1);
                var9 = var1.intl;
                var3 = var9.string;
                var1 = var8[var13];
                var1 = var7.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.TME4LJ;
                var1 = var3.bind(var9)(var1);
                var _closure2_slot1 = var1;
                var3 = _closure1_slot1;
                var1 = 11;
                var1 = var8[var1];
                var11 = var3.bind(var4)(var1);
                var1 = 12;
                var1 = var8[var1];
                var1 = var7.bind(var4)(var1);
                var1 = var1.GuildVisibility;
                var1 = var1.PUBLIC;
                if(!(var2 === var1)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = var3[var13];
                var1 = var2.bind(var4)(var1);
                var8 = var1.intl;
                var7 = var8.string;
                var1 = var3[var13];
                var1 = var2.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.op2cJ6;
                var1 = var7.bind(var8)(var1);
                _closure2_slot1 = var1;
                var1 = 13;
                var1 = var3[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.GlobeEarthIcon;
                _closure2_slot0 = var1;
                var2 = _closure1_slot1;
                var1 = 14;
                var1 = var3[var1];
                var11 = var2.bind(var4)(var1);
case 2:
                var3 = _closure1_slot11;
                var12 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 15;
                var1 = var9[var1];
                var1 = var12.bind(var4)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var7 = var10.communityPill;
                var1['style'] = var7;
                var7 = 'button';
                var1['accessibilityRole'] = var7;
                var5 = function onPress() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 16;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.open;
                    var2 = {};
                    var5 = 'SERVER_BADGE_DESCRIPTION_INVITE_ONLY';
                    var2['key'] = var5;
                    var6 = _closure2_slot1;
                    var2['content'] = var6;
                    var5 = _closure2_slot0;
                    var2['IconComponent'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['onPress'] = var5;
                var8 = _closure1_slot10;
                var5 = 17;
                var5 = var9[var5];
                var5 = var12.bind(var4)(var5);
                var7 = var5.Icon;
                var5 = {};
                var14 = var10.communityPillIcon;
                var5['style'] = var14;
                var5['source'] = var11;
                var11 = true;
                var5['disableColor'] = var11;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var8 = _closure1_slot10;
                var6 = 18;
                var6 = var9[var6];
                var6 = var12.bind(var4)(var6);
                var7 = var6.Text;
                var6 = {'variant': 'text-xs/medium', 'color': 'text-default'};
                var10 = var10.communityPillText;
                var6['style'] = var10;
                var10 = var9[var13];
                var10 = var12.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var9[var13];
                var9 = var12.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9.K7iRig;
                var9 = var10.bind(var11)(var9);
                var6['children'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot13 = var1;
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
        var7 = var4.View;
        var _closure1_slot4 = var7;
        var4 = var4.Image;
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
        var4 = var11.bind(var1)(var4);
        var _closure1_slot8 = var4;
        var4 = 5;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.GuildFeatures;
        var _closure1_slot9 = var4;
        var4 = 6;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.jsx;
        var _closure1_slot10 = var7;
        var4 = var4.jsxs;
        var _closure1_slot11 = var4;
        var4 = 7;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var7 = var8.createStyles;
        var4 = {};
        var9 = {};
        var10 = 16;
        var9['padding'] = var10;
        var4['content'] = var9;
        var9 = {'borderRadius': 14.117647058823529, 'height': 60, 'width': 60};
        var4['avatar'] = var9;
        var9 = {};
        var10 = 8;
        var12 = var6[var10];
        var12 = var11.bind(var1)(var12);
        var12 = var12.colors;
        var12 = var12.MOBILE_ACTIONSHEET_BACKGROUND;
        var9['backgroundColor'] = var12;
        var4['headerContainer'] = var9;
        var9 = {'height': 68, 'width': 68, 'marginBottom': 12, 'marginLeft': 4294967292, 'padding': 4, 'borderRadius': 16, 'alignContent': 'center', 'justifyContent': 'center'};
        var12 = var6[var10];
        var12 = var11.bind(var1)(var12);
        var12 = var12.colors;
        var12 = var12.MOBILE_ACTIONSHEET_BACKGROUND;
        var9['backgroundColor'] = var12;
        var4['avatarBackground'] = var9;
        var9 = {};
        var9['marginTop'] = var10;
        var4['description'] = var9;
        var9 = {'marginTop': 16, 'flexDirection': 'row', 'alignItems': 'center', 'flexWrap': 'wrap', 'gap': 16};
        var4['memberInfo'] = var9;
        var9 = {'flexDirection': 'row', 'alignItems': 'center', 'marginTop': 8};
        var4['nameRow'] = var9;
        var9 = {'flexDirection': 'row', 'alignItems': 'center', 'backgroundColor': null, 'paddingTop': 4, 'paddingRight': 8, 'paddingBottom': 4, 'paddingLeft': 6};
        var12 = var6[var10];
        var12 = var11.bind(var1)(var12);
        var12 = var12.colors;
        var12 = var12.INTERACTIVE_BACKGROUND_HOVER;
        var9['backgroundColor'] = var12;
        var10 = var6[var10];
        var10 = var11.bind(var1)(var10);
        var10 = var10.radii;
        var10 = var10.round;
        var9['borderRadius'] = var10;
        var4['communityPill'] = var9;
        var9 = {'width': 16, 'height': 16, 'marginRight': 6};
        var4['communityPillIcon'] = var9;
        var9 = {};
        var10 = 9;
        var10 = var6[var10];
        var11 = var5.bind(var1)(var10);
        var10 = var11.isAndroid;
        var11 = var10.bind(var11)();
        var10 = undefined;
        if(!var11) { _fun0001_ip = 4; continue _fun0001 }
case 5:
        var10 = 14;
case 4:
        var9['lineHeight'] = var10;
        var4['communityPillText'] = var9;
        var9 = {'position': 'absolute', 'left': '50%', 'top': 0};
        var4['guildBanner'] = var9;
        var4 = var7.bind(var8)(var4);
        var _closure1_slot12 = var4;
        var4 = 33;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/guild_action_sheet/native/components/GuildActionSheetHeader.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function GuildActionSheetHeader(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = arg1;
                var23 = var2.guild;
                var _closure2_slot0 = var23;
                var4 = undefined;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var2 = _closure1_slot12;
                var13 = var2.bind(var4)();
                var _closure2_slot1 = var13;
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 19;
                var2 = var7[var2];
                var2 = var3.bind(var4)(var2);
                var5 = var2.bind(var4)();
                var6 = _closure1_slot0;
                var2 = 20;
                var3 = var7[var2];
                var10 = var6.bind(var4)(var3);
                var9 = var10.useStateFromStores;
                var3 = _closure1_slot8;
                var8 = new Array(1);
                var8[0] = var3;
                var3 = function() {
                    var3 = _closure1_slot8;
                    var2 = var3.isSubscribedToAnyGuildChannel;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var8 = var9.bind(var10)(var8, var3);
                var _closure2_slot2 = var8;
                var11 = _closure1_slot3;
                var10 = var11.useEffect;
                var9 = new Array(2);
                var9[0] = var23;
                var9[1] = var8;
                var3 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var2 = _closure2_slot2;
                        var2 = !var2;
                        if(!var2) { _fun0004_ip = 6; continue _fun0004 }
case 7:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 21;
                        var4 = var4[var3];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.isGuildRecord;
                        var3 = _closure2_slot0;
                        var2 = var4.bind(var5)(var3);
case 6:
                        if(!var2) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 22;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var4.bind(var2)(var3);
                        var2 = var3.fetchGuildForPopout;
                        var1 = _closure2_slot0;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
case 8:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3 = var10.bind(var11)(var3, var9);
                var3 = var7[var2];
                var11 = var6.bind(var4)(var3);
                var10 = var11.useStateFromStores;
                var3 = _closure1_slot7;
                var9 = new Array(1);
                var9[0] = var3;
                var3 = function() {
                    var3 = _closure1_slot7;
                    var2 = var3.getGuild;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3 = var10.bind(var11)(var9, var3);
                var2 = var7[var2];
                var9 = var6.bind(var4)(var2);
                var7 = var9.useStateFromStores;
                var2 = _closure1_slot6;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() {
                    var3 = _closure1_slot6;
                    var2 = var3.getGuild;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var6 = var7.bind(var9)(var6, var2);
                var18 = null;
                var2 = var6;
                if(!(var18 != var3)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var2 = var3;
case 10:
                if(!(var18 != var2)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var23 = var2;
case 12:
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 23;
                var2 = var7[var2];
                var7 = var3.bind(var4)(var2);
                var3 = var7.useGuildHeaderCounts;
                var2 = var23.id;
                var3 = var3.bind(var7)(var2);
                var2 = undefined;
                var7 = undefined;
                if(!var8) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                var2 = var3.onlineCount;
                var7 = var3.memberCount;
case 14:
                var24 = var2;
                var22 = var7;
                if(!(var18 != var6)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                var3 = var2;
                if(!(var2 == var18)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                var3 = var6.presenceCount;
case 18:
                var2 = var7;
                if(!(var7 == var18)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                var2 = var6.memberCount;
case 20:
                var22 = var2;
                var24 = var3;
case 16:
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 24;
                var2 = var6[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.bind(var4)();
                var9 = var2.width;
                _closure2_slot3 = var9;
                var3 = _closure1_slot0;
                var2 = 21;
                var2 = var6[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.isGuildRecord;
                var2 = var2.bind(var3)(var23);
                if(var2) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                var6 = _closure1_slot1;
                var2 = _closure1_slot2;
                var3 = 26;
                var2 = var2[var3];
                var7 = var6.bind(var4)(var2);
                var6 = var7.getGuildIconSource;
                var2 = {};
                var8 = var23.id;
                var2['id'] = var8;
                var8 = var23.icon;
                var2['icon'] = var8;
                var8 = true;
                var2['canAnimate'] = var8;
                var8 = 68;
                var2['size'] = var8;
                var8 = var6.bind(var7)(var2);
                var7 = _closure1_slot10;
                var6 = _closure1_slot5;
                var2 = {};
                var10 = var13.avatar;
                var2['style'] = var10;
                var2['source'] = var8;
                var2 = var7.bind(var4)(var6, var2);
                var6 = var23.splash;
                var6 = var18 == var6;
                var12 = null;
                if(var6) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                var12 = null;
                if(var5) { _fun0003_ip = 24; continue _fun0003 }
case 26:
                var6 = _closure1_slot1;
                var11 = _closure1_slot2;
                var3 = var11[var3];
                var7 = var6.bind(var4)(var3);
                var6 = var7.getGuildSplashSource;
                var3 = {};
                var8 = var23.id;
                var3['id'] = var8;
                var8 = var23.splash;
                var3['splash'] = var8;
                var10 = _closure1_slot0;
                var8 = 27;
                var8 = var11[var8];
                var10 = var10.bind(var4)(var8);
                var8 = var10.getDevicePixelRatio;
                var8 = var8.bind(var10)();
                var8 = var9 * var8;
                var3['size'] = var8;
                var12 = var6.bind(var7)(var3);
case 24:
                var10 = var2;
                _fun0003_ip = 27; continue _fun0003;
case 22:
                var6 = var23.features;
                var3 = var6.has;
                var2 = _closure1_slot9;
                var2 = var2.ANIMATED_BANNER;
                var8 = var3.bind(var6)(var2);
                var6 = _closure1_slot10;
                var3 = _closure1_slot4;
                var2 = {'style': null, 'accessibilityElementsHidden': true, 'importantForAccessibility': 'no-hide-descendants', 'accessibilityRole': 'none'};
                var7 = var13.avatarBackground;
                var2['style'] = var7;
                var15 = true;
                var14 = _closure1_slot10;
                var11 = _closure1_slot1;
                var20 = _closure1_slot2;
                var16 = 25;
                var7 = var20[var16];
                var11 = var11.bind(var4)(var7);
                var7 = {};
                var17 = var13.avatar;
                var7['style'] = var17;
                var7['guild'] = var23;
                var17 = _closure1_slot0;
                var16 = var20[var16];
                var16 = var17.bind(var4)(var16);
                var16 = var16.GuildIconSizes;
                var16 = var16.XLARGE;
                var7['size'] = var16;
                var7['animate'] = var15;
                var7 = var14.bind(var4)(var11, var7);
                var2['children'] = var7;
                var3 = var6.bind(var4)(var3, var2);
                var2 = var23.banner;
                var6 = var18 == var2;
                var2 = null;
                if(var6) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                var2 = null;
                if(var5) { _fun0003_ip = 28; continue _fun0003 }
case 30:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 26;
                var5 = var7[var5];
                var7 = var6.bind(var4)(var5);
                var6 = var7.getGuildBannerSource;
                var5 = {};
                var11 = var23.id;
                var5['id'] = var11;
                var11 = var23.banner;
                var5['banner'] = var11;
                var2 = var6.bind(var7)(var5, var8);
case 28:
                var12 = var2;
                var10 = var3;
case 27:
                var25 = var23.name;
                var15 = var23.description;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 12;
                var3 = var7[var3];
                var5 = var2.bind(var4)(var3);
                var3 = var5.getGuildTraits;
                var17 = var3.bind(var5)(var23);
                var3 = 28;
                var3 = var7[var3];
                var5 = var2.bind(var4)(var3);
                var3 = var5.useClientThemesOverride;
                var6 = var3.bind(var5)();
                var3 = 0.56;
                var16 = var3 * var9;
                _closure2_slot4 = var16;
                var8 = _closure1_slot3;
                var5 = var8.useMemo;
                var11 = var13.guildBanner;
                var3 = new Array(3);
                var3[0] = var11;
                var3[1] = var9;
                var3[2] = var16;
                var1 = function() {
                    var1 = {};
                    var3 = _closure2_slot1;
                    var5 = var3.guildBanner;
                    var6 = var1;
                    var3 = copyDataProperties(var6, var5);
                    var4 = _closure2_slot3;
                    var3 = 'width';
                    var1[2] = var4;
                    var4 = _closure2_slot4;
                    var3 = 'height';
                    var1[2] = var4;
                    var2 = _closure2_slot3;
                    var3 = -var2;
                    var2 = 2;
                    var3 = var3 / var2;
                    var2 = 'marginLeft';
                    var1[1] = var3;
                    return var1;
                };
                var9 = var5.bind(var8)(var1, var3);
                var1 = 29;
                var1 = var7[var1];
                var3 = var2.bind(var4)(var1);
                var2 = var3.useToken;
                var5 = _closure1_slot1;
                var1 = 8;
                var1 = var7[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.modules;
                var1 = var1.mobile;
                var1 = var1.CHANNEL_LIST_TITLE_TEXT_STYLE;
                var26 = var2.bind(var3)(var1);
                var3 = _closure1_slot11;
                var2 = _closure1_slot4;
                var1 = {};
                var7 = var13.headerContainer;
                var5 = new Array(2);
                var5[0] = var7;
                var5[1] = var6;
                var1['style'] = var5;
                var6 = var18 != var12;
                if(!var6) { _fun0003_ip = 31; continue _fun0003 }
case 32:
                var8 = _closure1_slot10;
                var7 = _closure1_slot1;
                var11 = _closure1_slot2;
                var5 = 30;
                var5 = var11[var5];
                var7 = var7.bind(var4)(var5);
                var5 = {};
                var5['style'] = var9;
                var5['source'] = var12;
                var6 = var8.bind(var4)(var7, var5);
case 31:
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot11;
                var7 = _closure1_slot4;
                var6 = {};
                var11 = var13.content;
                var9 = new Array(2);
                var9[0] = var11;
                var11 = {};
                var14 = var18 != var12;
                var12 = 0;
                if(!var14) { _fun0003_ip = 33; continue _fun0003 }
case 34:
                var14 = 48;
                var12 = var16 - var14;
case 33:
                var11['marginTop'] = var12;
                var9[1] = var11;
                var6['style'] = var9;
                var9 = new Array(4);
                var9[0] = var10;
                var12 = _closure1_slot11;
                var11 = _closure1_slot4;
                var10 = {};
                var14 = var13.nameRow;
                var10['style'] = var14;
                var21 = _closure1_slot10;
                var16 = _closure1_slot1;
                var20 = _closure1_slot2;
                var14 = 31;
                var14 = var20[var14];
                var16 = var16.bind(var4)(var14);
                var14 = {};
                var14['guild'] = var23;
                var16 = var21.bind(var4)(var16, var14);
                var14 = new Array(2);
                var14[0] = var16;
                var23 = _closure1_slot10;
                var21 = _closure1_slot0;
                var16 = 18;
                var20 = var20[var16];
                var20 = var21.bind(var4)(var20);
                var21 = var20.Text;
                var20 = {'lineClamp': 2, 'accessibilityRole': 'header', 'variant': null, 'color': 'mobile-text-heading-primary'};
                var20['variant'] = var26;
                var20['children'] = var25;
                var20 = var23.bind(var4)(var21, var20);
                var14[1] = var20;
                var10['children'] = var14;
                var10 = var12.bind(var4)(var11, var10);
                var9[1] = var10;
                var11 = var18 != var15;
                var10 = null;
                if(!var11) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                var14 = _closure1_slot10;
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var16];
                var11 = var12.bind(var4)(var11);
                var12 = var11.Text;
                var11 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-default'};
                var16 = var13.description;
                var11['style'] = var16;
                var11['children'] = var15;
                var10 = var14.bind(var4)(var12, var11);
case 35:
                var9[2] = var10;
                var12 = _closure1_slot11;
                var11 = _closure1_slot4;
                var10 = {};
                var13 = var13.memberInfo;
                var10['style'] = var13;
                var13 = var17.community;
                var14 = null;
                if(!var13) { _fun0003_ip = 37; continue _fun0003 }
case 38:
                var16 = _closure1_slot10;
                var15 = _closure1_slot13;
                var13 = {};
                var17 = var17.visibility;
                var13['guildVisibility'] = var17;
                var14 = var16.bind(var4)(var15, var13);
case 37:
                var13 = new Array(2);
                var13[0] = var14;
                var16 = _closure1_slot11;
                var15 = _closure1_slot4;
                var14 = {};
                var17 = {'gap': 15, 'flexDirection': 'row'};
                var14['style'] = var17;
                var20 = var18 != var24;
                if(!var20) { _fun0003_ip = 39; continue _fun0003 }
case 40:
                var23 = _closure1_slot10;
                var21 = _closure1_slot1;
                var25 = _closure1_slot2;
                var17 = 32;
                var17 = var25[var17];
                var21 = var21.bind(var4)(var17);
                var17 = {};
                var25 = 'online';
                var17['type'] = var25;
                var17['count'] = var24;
                var20 = var23.bind(var4)(var21, var17);
case 39:
                var17 = new Array(2);
                var17[0] = var20;
                var18 = var18 != var22;
                if(!var18) { _fun0003_ip = 41; continue _fun0003 }
case 42:
                var21 = _closure1_slot10;
                var20 = _closure1_slot1;
                var23 = _closure1_slot2;
                var19 = 32;
                var19 = var23[var19];
                var20 = var20.bind(var4)(var19);
                var19 = {};
                var23 = 'total';
                var19['type'] = var23;
                var19['count'] = var22;
                var18 = var21.bind(var4)(var20, var19);
case 41:
                var17[1] = var18;
                var14['children'] = var17;
                var14 = var16.bind(var4)(var15, var14);
                var13[1] = var14;
                var10['children'] = var13;
                var10 = var12.bind(var4)(var11, var10);
                var9[3] = var10;
                var6['children'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var3['default'] = var2;
        return var1;
    }
})();