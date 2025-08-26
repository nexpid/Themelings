// app/modules/guild_action_sheet/native/components/GuildActionSheetHeader.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function CommunityPill(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.guildVisibility;
            var4 = undefined;
            var _closure2_slot0 = var4;
            var1 = _closure1_slot12;
            var11 = var1.bind(var4)();
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
            var1 = var1.TME4LC;
            var1 = var3.bind(var9)(var1);
            var _closure2_slot1 = var1;
            var3 = _closure1_slot1;
            var1 = 11;
            var1 = var8[var1];
            var10 = var3.bind(var4)(var1);
            var1 = 12;
            var1 = var8[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.GuildVisibility;
            var1 = var1.PUBLIC;
            if(!(var2 === var1)) { _fun0001_ip = 225; continue _fun0001 }
 131:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = var3[var13];
            var1 = var2.bind(var4)(var1);
            var8 = var1.intl;
            var7 = var8.string;
            var1 = var3[var13];
            var1 = var2.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.op2cJy;
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
            var10 = var2.bind(var4)(var1);
 225:
            var3 = _closure1_slot11;
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 15;
            var1 = var9[var1];
            var1 = var12.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var7 = var11.communityPill;
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
            var7 = _closure1_slot1;
            var5 = 17;
            var5 = var9[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var11 = var11.communityPillIcon;
            var5['style'] = var11;
            var5['source'] = var10;
            var10 = true;
            var5['disableColor'] = var10;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot10;
            var6 = 18;
            var6 = var9[var6];
            var6 = var12.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-xs/medium', 'color': 'header-secondary'};
            var10 = var9[var13];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var9[var13];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.K7iRio;
            var9 = var10.bind(var11)(var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var8 = var6[var1];
    var7 = metroImportAll;
    var1 = undefined;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.View;
    var _closure1_slot4 = var8;
    var7 = var7.Image;
    var _closure1_slot5 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 4;
    var7 = var6[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 5;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.GuildFeatures;
    var _closure1_slot9 = var7;
    var7 = 6;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.jsx;
    var _closure1_slot10 = var8;
    var7 = var7.jsxs;
    var _closure1_slot11 = var7;
    var7 = 7;
    var7 = var6[var7];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var10 = {};
    var11 = 16;
    var10['padding'] = var11;
    var7['content'] = var10;
    var10 = {'borderRadius': 14.117647058823529, 'height': 60, 'width': 60};
    var7['avatar'] = var10;
    var10 = {};
    var11 = 8;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_BASE_SECONDARY;
    var10['backgroundColor'] = var13;
    var7['headerContainer'] = var10;
    var10 = {'height': 68, 'width': 68, 'marginBottom': 12, 'marginLeft': 4294967292, 'padding': 4, 'borderRadius': 16, 'alignContent': 'center', 'justifyContent': 'center'};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_BASE_SECONDARY;
    var10['backgroundColor'] = var13;
    var7['avatarBackground'] = var10;
    var10 = {'position': 'absolute', 'top': 2};
    var7['icon'] = var10;
    var10 = {};
    var10['marginTop'] = var11;
    var7['description'] = var10;
    var10 = {'marginTop': 16, 'flexDirection': 'row', 'alignItems': 'center'};
    var7['memberInfo'] = var10;
    var10 = {'width': 8, 'height': 8, 'borderRadius': null, 'marginRight': 4};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var10['borderRadius'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.STATUS_ONLINE;
    var10['backgroundColor'] = var13;
    var7['dotOnline'] = var10;
    var10 = {'width': 8, 'height': 8, 'borderRadius': null, 'marginRight': 4, 'marginLeft': 16};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var10['borderRadius'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.STATUS_OFFLINE;
    var10['backgroundColor'] = var13;
    var7['dotOffline'] = var10;
    var10 = {'marginLeft': 16, 'marginRight': 4, 'width': 14, 'height': 14};
    var7['publicIcon'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center'};
    var7['publicInfo'] = var10;
    var10 = {'flexDirection': 'row', 'marginTop': 8};
    var7['nameRow'] = var10;
    var10 = {'marginRight': 16, 'flexDirection': 'row', 'alignItems': 'center', 'backgroundColor': null, 'paddingTop': 4, 'paddingRight': 8, 'paddingBottom': 4, 'paddingLeft': 6};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MODIFIER_HOVER;
    var10['backgroundColor'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var10['borderRadius'] = var13;
    var7['communityPill'] = var10;
    var10 = {'width': 16, 'height': 16, 'marginRight': 6};
    var7['communityPillIcon'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_BRAND;
    var10['backgroundColor'] = var13;
    var7['toastContainer'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.WHITE;
    var10['color'] = var11;
    var7['toastIcon'] = var10;
    var10 = {'position': 'absolute', 'left': '50%', 'top': 0};
    var7['guildBanner'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot12 = var7;
    var8 = var4.Set;
    var7 = 9;
    var4 = var6[var7];
    var4 = var5.bind(var1)(var4);
    var4 = var4.BadgeCategory;
    var9 = var4.VERIFIED;
    var4 = new Array(3);
    var4[0] = var9;
    var9 = var6[var7];
    var9 = var5.bind(var1)(var9);
    var9 = var9.BadgeCategory;
    var9 = var9.PARTNERED;
    var4[1] = var9;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.BadgeCategory;
    var7 = var7.VERIFIED_AND_PARTNERED;
    var4[2] = var7;
    var7 = var8.prototype;
    var7 = Object.create(var7, {constructor: {value: var8}});
    var17 = var7;
    var16 = var4;
    var4 = new var17[var8](var16, var15);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot13 = var4;
    var4 = 35;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_action_sheet/native/components/GuildActionSheetHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildActionSheetHeader(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var1 = var1.guild;
            var _closure2_slot0 = var1;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var2 = _closure1_slot12;
            var23 = var2.bind(var4)();
            var _closure2_slot1 = var23;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 20;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var5 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var2 = 21;
            var6 = var8[var2];
            var10 = var3.bind(var4)(var6);
            var9 = var10.useStateFromStores;
            var6 = _closure1_slot8;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var3 = _closure1_slot8;
                var2 = var3.isSubscribedToAnyGuildChannel;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var9.bind(var10)(var7, var6);
            var _closure2_slot2 = var7;
            var11 = _closure1_slot3;
            var10 = var11.useEffect;
            var9 = new Array(2);
            var9[0] = var1;
            var9[1] = var7;
            var6 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot2;
                    var2 = !var2;
                    if(!var2) { _fun0003_ip = 53; continue _fun0003 }
 13:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 22;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.isGuildRecord;
                    var3 = _closure2_slot0;
                    var2 = var4.bind(var5)(var3);
 53:
                    if(!var2) { _fun0003_ip = 101; continue _fun0003 }
 56:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 23;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.fetchGuildForPopout;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
 101:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var10.bind(var11)(var6, var9);
            var6 = var8[var2];
            var11 = var3.bind(var4)(var6);
            var10 = var11.useStateFromStores;
            var6 = _closure1_slot7;
            var9 = new Array(1);
            var9[0] = var6;
            var6 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var10.bind(var11)(var9, var6);
            var2 = var8[var2];
            var9 = var3.bind(var4)(var2);
            var8 = var9.useStateFromStores;
            var2 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var8.bind(var9)(var3, var2);
            var17 = null;
            var2 = var3;
            if(!(var17 != var6)) { _fun0002_ip = 237; continue _fun0002 }
 234:
            var2 = var6;
 237:
            if(!(var17 != var2)) { _fun0002_ip = 244; continue _fun0002 }
 241:
            var1 = var2;
 244:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 24;
            var2 = var8[var2];
            var2 = var6.bind(var4)(var2);
            var16 = var2.bind(var4)(var1);
            var6 = _closure1_slot0;
            var2 = 25;
            var2 = var8[var2];
            var8 = var6.bind(var4)(var2);
            var6 = var8.useGuildHeaderCounts;
            var2 = var1.id;
            var2 = var6.bind(var8)(var2);
            var14 = var1;
            var1 = undefined;
            var6 = undefined;
            if(!var7) { _fun0002_ip = 323; continue _fun0002 }
 311:
            var1 = var2.onlineCount;
            var6 = var2.memberCount;
 323:
            var29 = var1;
            var30 = var6;
            if(!(var17 != var3)) { _fun0002_ip = 365; continue _fun0002 }
 333:
            var2 = var1;
            if(!(var1 == var17)) { _fun0002_ip = 346; continue _fun0002 }
 340:
            var2 = var3.presenceCount;
 346:
            var1 = var6;
            if(!(var6 == var17)) { _fun0002_ip = 359; continue _fun0002 }
 353:
            var1 = var3.memberCount;
 359:
            var30 = var1;
            var29 = var2;
 365:
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 26;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var1 = var1.width;
            _closure2_slot3 = var1;
            var3 = _closure1_slot0;
            var2 = 22;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.isGuildRecord;
            var2 = var2.bind(var3)(var14);
            if(var2) { _fun0002_ip = 638; continue _fun0002 }
 431:
            var6 = _closure1_slot1;
            var2 = _closure1_slot2;
            var3 = 28;
            var2 = var2[var3];
            var7 = var6.bind(var4)(var2);
            var6 = var7.getGuildIconSource;
            var2 = {};
            var8 = var14.id;
            var2['id'] = var8;
            var8 = var14.icon;
            var2['icon'] = var8;
            var8 = true;
            var2['canAnimate'] = var8;
            var8 = 68;
            var2['size'] = var8;
            var8 = var6.bind(var7)(var2);
            var7 = _closure1_slot10;
            var6 = _closure1_slot5;
            var2 = {};
            var9 = var23.avatar;
            var2['style'] = var9;
            var2['source'] = var8;
            var2 = var7.bind(var4)(var6, var2);
            var6 = var14.splash;
            var6 = var17 == var6;
            var12 = null;
            if(var6) { _fun0002_ip = 630; continue _fun0002 }
 541:
            var12 = null;
            if(var5) { _fun0002_ip = 630; continue _fun0002 }
 546:
            var6 = _closure1_slot1;
            var10 = _closure1_slot2;
            var3 = var10[var3];
            var7 = var6.bind(var4)(var3);
            var6 = var7.getGuildSplashSource;
            var3 = {};
            var8 = var14.id;
            var3['id'] = var8;
            var8 = var14.splash;
            var3['splash'] = var8;
            var9 = _closure1_slot0;
            var8 = 29;
            var8 = var10[var8];
            var9 = var9.bind(var4)(var8);
            var8 = var9.getDevicePixelRatio;
            var8 = var8.bind(var9)();
            var8 = var1 * var8;
            var3['size'] = var8;
            var12 = var6.bind(var7)(var3);
 630:
            var10 = var2;
            _fun0002_ip = 870; continue _fun0002;
 638:
            var6 = var14.features;
            var3 = var6.has;
            var2 = _closure1_slot9;
            var2 = var2.ANIMATED_BANNER;
            var8 = var3.bind(var6)(var2);
            var6 = _closure1_slot10;
            var3 = _closure1_slot4;
            var2 = {'style': null, 'accessibilityElementsHidden': true, 'importantForAccessibility': 'no-hide-descendants', 'accessibilityRole': 'none'};
            var7 = var23.avatarBackground;
            var2['style'] = var7;
            var13 = true;
            var11 = _closure1_slot10;
            var9 = _closure1_slot1;
            var21 = _closure1_slot2;
            var15 = 27;
            var7 = var21[var15];
            var9 = var9.bind(var4)(var7);
            var7 = {};
            var19 = var23.avatar;
            var7['style'] = var19;
            var7['guild'] = var14;
            var19 = _closure1_slot0;
            var15 = var21[var15];
            var15 = var19.bind(var4)(var15);
            var15 = var15.GuildIconSizes;
            var15 = var15.XLARGE;
            var7['size'] = var15;
            var7['animate'] = var13;
            var7 = var11.bind(var4)(var9, var7);
            var2['children'] = var7;
            var3 = var6.bind(var4)(var3, var2);
            var2 = var14.banner;
            var6 = var17 == var2;
            var2 = null;
            if(var6) { _fun0002_ip = 864; continue _fun0002 }
 805:
            var2 = null;
            if(var5) { _fun0002_ip = 864; continue _fun0002 }
 810:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 28;
            var5 = var7[var5];
            var7 = var6.bind(var4)(var5);
            var6 = var7.getGuildBannerSource;
            var5 = {};
            var9 = var14.id;
            var5['id'] = var9;
            var9 = var14.banner;
            var5['banner'] = var9;
            var2 = var6.bind(var7)(var5, var8);
 864:
            var12 = var2;
            var10 = var3;
 870:
            var27 = var14.name;
            var15 = var14.description;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 30;
            var2 = var5[var2];
            var7 = var3.bind(var4)(var2);
            var2 = var7.getGuildBadgeSource;
            var6 = true;
            var7 = var2.bind(var7)(var14, var6);
            var2 = 12;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getGuildTraits;
            var24 = var2.bind(var3)(var14);
            if(var16) { _fun0002_ip = 1001; continue _fun0002 }
 940:
            var2 = var17 != var7;
            var26 = null;
            if(!var2) { _fun0002_ip = 999; continue _fun0002 }
 949:
            var5 = _closure1_slot10;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 17;
            var2 = var8[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var8 = var23.icon;
            var2['style'] = var8;
            var2['source'] = var7;
            var2['disableColor'] = var6;
            var26 = var5.bind(var4)(var3, var2);
 999:
            _fun0002_ip = 1099; continue _fun0002;
 1001:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 9;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getBadgeCategory;
            var5 = var2.bind(var3)(var24);
            var3 = _closure1_slot13;
            var2 = var3.has;
            var3 = var2.bind(var3)(var5);
            var2 = null;
            if(!var3) { _fun0002_ip = 1096; continue _fun0002 }
 1051:
            var6 = _closure1_slot10;
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 19;
            var3 = var7[var3];
            var5 = var5.bind(var4)(var3);
            var3 = {};
            var3['guild'] = var14;
            var7 = var23.icon;
            var3['style'] = var7;
            var2 = var6.bind(var4)(var5, var3);
 1096:
            var26 = var2;
 1099:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 31;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useClientThemesOverride;
            var6 = var2.bind(var3)();
            var2 = 0.56;
            var19 = var2 * var1;
            _closure2_slot4 = var19;
            var5 = _closure1_slot3;
            var3 = var5.useMemo;
            var7 = var23.guildBanner;
            var2 = new Array(3);
            var2[0] = var7;
            var2[1] = var1;
            var2[2] = var19;
            var1 = function() {
                var1 = {};
                var3 = _closure2_slot1;
                var5 = var3.guildBanner;
                var6 = var1;
                var3 = copyDataProperties(var6, var5);
                var4 = _closure2_slot3;
                var3 = 'width';
                var1[var3] = var4;
                var4 = _closure2_slot4;
                var3 = 'height';
                var1[var3] = var4;
                var2 = _closure2_slot3;
                var3 = -var2;
                var2 = 2;
                var3 = var3 / var2;
                var2 = 'marginLeft';
                var1[var2] = var3;
                return var1;
            };
            var9 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot11;
            var2 = _closure1_slot4;
            var1 = {};
            var7 = var23.headerContainer;
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['style'] = var5;
            var6 = var17 != var12;
            if(!var6) { _fun0002_ip = 1270; continue _fun0002 }
 1230:
            var8 = _closure1_slot10;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 32;
            var5 = var11[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var5['style'] = var9;
            var5['source'] = var12;
            var6 = var8.bind(var4)(var7, var5);
 1270:
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot11;
            var7 = _closure1_slot4;
            var6 = {};
            var11 = var23.content;
            var9 = new Array(2);
            var9[0] = var11;
            var11 = {};
            var13 = var17 != var12;
            var12 = 0;
            if(!var13) { _fun0002_ip = 1319; continue _fun0002 }
 1312:
            var13 = 48;
            var12 = var19 - var13;
 1319:
            var11['marginTop'] = var12;
            var9[1] = var11;
            var6['style'] = var9;
            var9 = new Array(4);
            var9[0] = var10;
            var12 = _closure1_slot11;
            var11 = _closure1_slot4;
            var10 = {};
            var13 = var23.nameRow;
            var10['style'] = var13;
            var13 = new Array(2);
            var13[0] = var26;
            var25 = _closure1_slot11;
            var22 = _closure1_slot0;
            var21 = _closure1_slot2;
            var19 = 18;
            var21 = var21[var19];
            var21 = var22.bind(var4)(var21);
            var22 = var21.Text;
            var21 = {'lineClamp': 2, 'accessibilityRole': 'header', 'variant': 'heading-xl/extrabold', 'color': 'header-primary'};
            var26 = var17 != var26;
            var28 = null;
            if(!var26) { _fun0002_ip = 1425; continue _fun0002 }
 1419:
            var28 = '      ';
 1425:
            var26 = new Array(2);
            var26[0] = var28;
            var26[1] = var27;
            var21['children'] = var26;
            var21 = var25.bind(var4)(var22, var21);
            var13[1] = var21;
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var11 = var17 != var15;
            var10 = null;
            if(!var11) { _fun0002_ip = 1535; continue _fun0002 }
 1474:
            var13 = _closure1_slot10;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var19];
            var11 = var12.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var21 = var23.description;
            var11['style'] = var21;
            var11['children'] = var15;
            var10 = var13.bind(var4)(var12, var11);
 1535:
            var9[2] = var10;
            var12 = _closure1_slot11;
            var11 = _closure1_slot4;
            var10 = {};
            var13 = var23.memberInfo;
            var10['style'] = var13;
            var15 = null;
            if(!var16) { _fun0002_ip = 1602; continue _fun0002 }
 1564:
            var13 = var24.community;
            var15 = null;
            if(!var13) { _fun0002_ip = 1602; continue _fun0002 }
 1575:
            var22 = _closure1_slot10;
            var21 = _closure1_slot14;
            var13 = {};
            var24 = var24.visibility;
            var13['guildVisibility'] = var24;
            var15 = var22.bind(var4)(var21, var13);
 1602:
            var13 = new Array(3);
            var13[0] = var15;
            var24 = _closure1_slot11;
            var22 = _closure1_slot4;
            var21 = {};
            var15 = 15;
            var25 = {'gap': 15, 'flexDirection': 'row'};
            var21['style'] = var25;
            var26 = var17 != var29;
            if(!var26) { _fun0002_ip = 1693; continue _fun0002 }
 1648:
            var28 = _closure1_slot10;
            var27 = _closure1_slot1;
            var31 = _closure1_slot2;
            var25 = 33;
            var25 = var31[var25];
            var27 = var27.bind(var4)(var25);
            var25 = {};
            var31 = 'online';
            var25['type'] = var31;
            var25['count'] = var29;
            var26 = var28.bind(var4)(var27, var25);
 1693:
            var25 = new Array(2);
            var25[0] = var26;
            var26 = var17 != var30;
            if(!var26) { _fun0002_ip = 1753; continue _fun0002 }
 1708:
            var29 = _closure1_slot10;
            var28 = _closure1_slot1;
            var31 = _closure1_slot2;
            var27 = 33;
            var27 = var31[var27];
            var28 = var28.bind(var4)(var27);
            var27 = {};
            var31 = 'total';
            var27['type'] = var31;
            var27['count'] = var30;
            var26 = var29.bind(var4)(var28, var27);
 1753:
            var25[1] = var26;
            var21['children'] = var25;
            var21 = var24.bind(var4)(var22, var21);
            var13[1] = var21;
            var22 = var14.features;
            var21 = var22.has;
            var14 = _closure1_slot9;
            var14 = var14.DISCOVERABLE;
            var21 = var21.bind(var22)(var14);
            var14 = null;
            if(!var21) { _fun0002_ip = 2038; continue _fun0002 }
 1805:
            var14 = null;
            if(var16) { _fun0002_ip = 2038; continue _fun0002 }
 1813:
            var17 = _closure1_slot11;
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var15 = var26[var15];
            var15 = var25.bind(var4)(var15);
            var16 = var15.PressableOpacity;
            var15 = {};
            var21 = var23.publicInfo;
            var15['style'] = var21;
            var21 = 'button';
            var15['accessibilityRole'] = var21;
            var18 = function onPress() {
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 16;
                var2 = var9[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.open;
                var2 = {};
                var6 = 'DISCOVERABLE_GUILD_HEADER_PUBLIC_INFO';
                var2['key'] = var6;
                var8 = _closure1_slot0;
                var5 = 10;
                var6 = var9[var5];
                var6 = var8.bind(var1)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var1)(var5);
                var5 = var5.t;
                var5 = var5.O8lDIy;
                var5 = var6.bind(var7)(var5);
                var2['content'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var15['onPress'] = var18;
            var22 = _closure1_slot10;
            var24 = _closure1_slot1;
            var18 = 17;
            var18 = var26[var18];
            var21 = var24.bind(var4)(var18);
            var18 = {};
            var23 = var23.publicIcon;
            var18['style'] = var23;
            var23 = 34;
            var23 = var26[var23];
            var23 = var24.bind(var4)(var23);
            var18['source'] = var23;
            var21 = var22.bind(var4)(var21, var18);
            var18 = new Array(2);
            var18[0] = var21;
            var21 = _closure1_slot10;
            var19 = var26[var19];
            var19 = var25.bind(var4)(var19);
            var20 = var19.Text;
            var19 = {'variant': 'text-xs/medium', 'color': 'header-secondary'};
            var22 = 10;
            var23 = var26[var22];
            var23 = var25.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var22 = var26[var22];
            var22 = var25.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.emP/5e;
            var22 = var23.bind(var24)(var22);
            var19['children'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            var18[1] = var19;
            var15['children'] = var18;
            var14 = var17.bind(var4)(var16, var15);
 2038:
            var13[2] = var14;
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
})();