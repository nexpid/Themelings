// app/modules/navbars/native/components/ChannelNavbar.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var7;
    var1 = function ChannelTitleContent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var11 = var1.title;
            var7 = var1.icon;
            var14 = var1.titleSuffix;
            var10 = var1.subTitle;
            var12 = var1.accessibleTitle;
            var1 = _closure1_slot18;
            var4 = undefined;
            var13 = var1.bind(var4)();
            var6 = null;
            var1 = var6 != var7;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot3;
            var1 = var2.isValidElement;
            var2 = var1.bind(var2)(var7);
            var1 = var7;
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot16;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var8 = 23;
            var2 = var16[var8];
            var2 = var15.bind(var4)(var2);
            var3 = var2.Icon;
            var2 = {};
            var8 = var16[var8];
            var8 = var15.bind(var4)(var8);
            var8 = var8.Icon;
            var8 = var8.Sizes;
            var8 = var8.CUSTOM;
            var2['size'] = var8;
            var2['source'] = var7;
            var7 = var13.channelIcon;
            var2['style'] = var7;
            var7 = var13.channelIconColor;
            var7 = var7.color;
            var2['color'] = var7;
            var1 = var5.bind(var4)(var3, var2);
case 4:
            var6 = var1;
case 2:
            var2 = _closure1_slot3;
            var1 = var2.isValidElement;
            var1 = var1.bind(var2)(var11);
            var15 = var11;
            if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot16;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var13.channelNameContainer;
            var1['style'] = var5;
            var8 = _closure1_slot16;
            var7 = _closure1_slot0;
            var16 = _closure1_slot2;
            var5 = 30;
            var5 = var16[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.Text;
            var5 = {'style': null, 'lineClamp': 1, 'variant': 'heading-md/bold', 'color': 'mobile-text-heading-primary', 'accessibilityLabel': null, 'maxFontSizeMultiplier': 1, 'accessibilityRole': 'header'};
            var16 = var13.channelName;
            var5['style'] = var16;
            var5['accessibilityLabel'] = var12;
            var5['children'] = var11;
            var5 = var8.bind(var4)(var7, var5);
            var1['children'] = var5;
            var15 = var3.bind(var4)(var2, var1);
case 6:
            var3 = _closure1_slot17;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var13.flexRow;
            var1['style'] = var5;
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot17;
            var7 = _closure1_slot4;
            var6 = {};
            var11 = var13.channelTextContainer;
            var6['style'] = var11;
            var12 = _closure1_slot17;
            var11 = _closure1_slot4;
            var9 = {};
            var13 = var13.flexRow;
            var9['style'] = var13;
            var13 = new Array(2);
            var13[0] = var15;
            var13[1] = var14;
            var9['children'] = var13;
            var11 = var12.bind(var4)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function ParentChannelSubTitle(arg1) {
        var1 = arg1;
        var10 = var1.parentChannel;
        var1 = _closure1_slot18;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var3 = _closure1_slot16;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 30;
        var1 = var8[var1];
        var1 = var7.bind(var4)(var1);
        var2 = var1.Text;
        var1 = {'lineClamp': 1, 'style': null, 'accessibilityLabel': null, 'maxFontSizeMultiplier': 1, 'variant': 'text-xs/medium', 'color': 'text-muted'};
        var6 = var6.navbarTitleSecondaryText;
        var1['style'] = var6;
        var6 = 17;
        var9 = var8[var6];
        var9 = var7.bind(var4)(var9);
        var13 = var9.intl;
        var12 = var13.formatToPlainString;
        var6 = var8[var6];
        var6 = var7.bind(var4)(var6);
        var6 = var6.t;
        var11 = var6.BjYvHO;
        var9 = {};
        var6 = 19;
        var14 = var8[var6];
        var17 = var7.bind(var4)(var14);
        var16 = var17.computeChannelName;
        var15 = _closure1_slot11;
        var14 = _closure1_slot10;
        var14 = var16.bind(var17)(var10, var15, var14);
        var9['channelName'] = var14;
        var9 = var12.bind(var13)(var11, var9);
        var1['accessibilityLabel'] = var9;
        var6 = var8[var6];
        var9 = var7.bind(var4)(var6);
        var8 = var9.computeChannelName;
        var20 = _closure1_slot11;
        var19 = _closure1_slot10;
        var18 = true;
        var22 = var9;
        var21 = var10;
        var5 = var22[var8](var21, var20, var19, var18, var17);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = function DMChannelName(arg1) {
        var1 = arg1;
        var11 = var1.userId;
        var _closure2_slot0 = var11;
        var6 = var1.style;
        var7 = _closure1_slot0;
        var10 = _closure1_slot2;
        var3 = 16;
        var3 = var10[var3];
        var4 = undefined;
        var9 = var7.bind(var4)(var3);
        var8 = var9.useStateFromStores;
        var3 = _closure1_slot11;
        var5 = new Array(2);
        var5[0] = var3;
        var3 = _closure1_slot10;
        var5[1] = var3;
        var3 = new Array(1);
        var3[0] = var11;
        var2 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure1_slot10;
                var1 = var2.getNickname;
                var5 = _closure2_slot0;
                var2 = var1.bind(var2)(var5);
                var4 = _closure1_slot11;
                var1 = var4.getUser;
                var5 = var1.bind(var4)(var5);
                var1 = null;
                if(!(var1 == var2)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var6 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 31;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var6.bind(var3)(var4);
                var3 = var4.getName;
                var2 = var3.bind(var4)(var5);
case 8:
                var3 = var1 != var2;
                var1 = '';
                if(!var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var1 = var2;
case 10:
                return var1;
            }
        };
        var5 = var8.bind(var9)(var5, var2, var3);
        var3 = _closure1_slot16;
        var1 = 23;
        var1 = var10[var1];
        var1 = var7.bind(var4)(var1);
        var2 = var1.LegacyText;
        var1 = {'numberOfLines': 1, 'style': null, 'accessibilityLabel': null, 'maxFontSizeMultiplier': 1, 'accessibilityRole': 'header'};
        var1['style'] = var6;
        var6 = 17;
        var8 = var10[var6];
        var8 = var7.bind(var4)(var8);
        var9 = var8.intl;
        var8 = var9.formatToPlainString;
        var6 = var10[var6];
        var6 = var7.bind(var4)(var6);
        var6 = var6.t;
        var7 = var6.fYqXVY;
        var6 = {};
        var6['channelName'] = var5;
        var6 = var8.bind(var9)(var7, var6);
        var1['accessibilityLabel'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = function ConnectedStatus(arg1) {
        var1 = arg1;
        var5 = var1.style;
        var1 = var1.userId;
        var _closure2_slot0 = var1;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var3 = 16;
        var3 = var8[var3];
        var4 = undefined;
        var9 = var7.bind(var4)(var3);
        var6 = var9.useStateFromStoresObject;
        var10 = _closure1_slot9;
        var3 = new Array(1);
        var3[0] = var10;
        var2 = function() {
            var1 = {};
            var4 = _closure1_slot9;
            var3 = var4.getStatus;
            var6 = _closure2_slot0;
            var3 = var3.bind(var4)(var6);
            var1['status'] = var3;
            var4 = _closure1_slot9;
            var3 = var4.isMobileOnline;
            var3 = var3.bind(var4)(var6);
            var1['isMobileOnline'] = var3;
            var4 = _closure1_slot9;
            var3 = var4.isVROnline;
            var3 = var3.bind(var4)(var6);
            var1['isVROnline'] = var3;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 32;
            var3 = var4[var3];
            var4 = undefined;
            var3 = var5.bind(var4)(var3);
            var5 = _closure1_slot9;
            var2 = var5.getActivities;
            var2 = var2.bind(var5)(var6);
            var2 = var3.bind(var4)(var2);
            var1['streaming'] = var2;
            return var1;
        };
        var2 = var6.bind(var9)(var3, var2);
        var10 = var2.status;
        var12 = var2.isMobileOnline;
        var11 = var2.isVROnline;
        var9 = var2.streaming;
        var3 = _closure1_slot16;
        var6 = 23;
        var1 = var8[var6];
        var1 = var7.bind(var4)(var1);
        var2 = var1.Status;
        var1 = {};
        var1['isMobileOnline'] = var12;
        var1['isVROnline'] = var11;
        var1['status'] = var10;
        var1['streaming'] = var9;
        var6 = var8[var6];
        var6 = var7.bind(var4)(var6);
        var6 = var6.StatusSizes;
        var6 = var6.SMALL;
        var1['size'] = var6;
        var1['style'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot23 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var5 = var7[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var8 = var4.bind(var1)(var5);
    var _closure1_slot3 = var8;
    var11 = 1;
    var4 = var7[var11];
    var4 = var6.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.THREAD_CHANNEL_TYPES;
    var _closure1_slot6 = var4;
    var12 = 4;
    var4 = var7[var12];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var7[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var13 = var4.Fonts;
    var4 = var4.ChannelTypes;
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.StaticChannelRoute;
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.ContentDismissActionType;
    var _closure1_slot14 = var5;
    var4 = var4.DismissibleContentGroupName;
    var _closure1_slot15 = var4;
    var4 = 12;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.jsx;
    var _closure1_slot16 = var5;
    var4 = var4.jsxs;
    var _closure1_slot17 = var4;
    var4 = 13;
    var4 = var7[var4];
    var9 = var6.bind(var1)(var4);
    var5 = var9.createStyles;
    var4 = {};
    var10 = {'height': '100%', 'flex': 1, 'flexDirection': 'row', 'alignItems': 'center'};
    var4['navbarTitleContainer'] = var10;
    var10 = {};
    var15 = 14;
    var15 = var7[var15];
    var18 = var14.bind(var1)(var15);
    var17 = var13.DISPLAY_SEMIBOLD;
    var13 = 15;
    var15 = var7[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var16 = var15.MOBILE_TEXT_HEADING_PRIMARY;
    var15 = 18;
    var20 = var18.bind(var1)(var17, var16, var15);
    var21 = var10;
    var15 = copyDataProperties(var21, var20);
    var15 = 'flexShrink';
    var10[14] = var11;
    var4['navbarTitlePrimaryText'] = var10;
    var10 = {'fontSize': 12, 'lineHeight': 16, 'color': null, 'marginTop': 4294967292};
    var15 = var7[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.TEXT_MUTED;
    var10['color'] = var15;
    var4['navbarTitleSecondaryText'] = var10;
    var10 = {'height': 18, 'width': 18, 'marginRight': 8};
    var4['channelIcon'] = var10;
    var10 = {};
    var15 = var7[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.CHANNEL_ICON;
    var10['color'] = var15;
    var4['channelIconColor'] = var10;
    var10 = {'height': 20, 'width': 20, 'tintColor': null, 'marginTop': 0, 'marginRight': 8};
    var13 = var7[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_MUTED;
    var10['tintColor'] = var13;
    var4['homeIcon'] = var10;
    var10 = {};
    var10['marginRight'] = var12;
    var4['premiumIcon'] = var10;
    var10 = {'marginLeft': 1, 'marginTop': 4};
    var4['status'] = var10;
    var10 = {'flex': 1, 'flexGrow': 1};
    var4['channelTextContainer'] = var10;
    var10 = {};
    var10['flexGrow'] = var11;
    var4['channelNameContainer'] = var10;
    var10 = {};
    var11 = 'left';
    var10['textAlign'] = var11;
    var4['channelName'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center'};
    var4['flexRow'] = var10;
    var4 = var5.bind(var9)(var4);
    var _closure1_slot18 = var4;
    var5 = var8.memo;
    var4 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var6 = var3.onPressTitle;
            var13 = var3.channelId;
            var _closure2_slot0 = var13;
            var10 = var3.guildId;
            var1 = var3.threadDraft;
            var _closure2_slot1 = var1;
            var5 = var3.style;
            var3 = _closure1_slot18;
            var4 = undefined;
            var7 = var3.bind(var4)();
            var3 = _closure1_slot0;
            var12 = _closure1_slot2;
            var16 = 16;
            var9 = var12[var16];
            var15 = var3.bind(var4)(var9);
            var14 = var15.useStateFromStores;
            var9 = _closure1_slot5;
            var11 = new Array(1);
            var11[0] = var9;
            var9 = function() {
                var2 = _closure1_slot5;
                var1 = var2.isConnected;
                var1 = var1.bind(var2)();
                return var1;
            };
            var15 = var14.bind(var15)(var11, var9);
            var9 = var12[var16];
            var18 = var3.bind(var4)(var9);
            var17 = var18.useStateFromStores;
            var14 = _closure1_slot7;
            var11 = new Array(1);
            var11[0] = var14;
            var9 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var5 = _closure2_slot0;
                    var1 = _closure1_slot13;
                    var4 = var1.GUILD_HOME;
                    var1 = null;
                    if(!(var5 !== var4)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var5 = _closure2_slot0;
                    var4 = _closure1_slot13;
                    var4 = var4.MEMBER_SAFETY;
                    var1 = null;
                    if(!(var5 !== var4)) { _fun0004_ip = 12; continue _fun0004 }
case 9:
                    var4 = _closure1_slot7;
                    var3 = var4.getChannel;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
case 12:
                    return var1;
                }
            };
            var11 = var17.bind(var18)(var11, var9);
            var _closure2_slot2 = var11;
            var9 = var12[var16];
            var19 = var3.bind(var4)(var9);
            var18 = var19.useStateFromStores;
            var9 = _closure1_slot8;
            var17 = new Array(1);
            var17[0] = var9;
            var9 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure1_slot8;
                    var2 = var3.getGuild;
                    var5 = _closure2_slot2;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                    var5 = _closure2_slot2;
                    var4 = var5.getGuildId;
                    var1 = var4.bind(var5)();
case 14:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var9 = var18.bind(var19)(var17, var9);
            var16 = var12[var16];
            var18 = var3.bind(var4)(var16);
            var17 = var18.useStateFromStores;
            var16 = new Array(1);
            var16[0] = var14;
            var14 = new Array(2);
            var14[0] = var11;
            var14[1] = var1;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var5 = null;
                    if(!(var5 != var1)) { _fun0006_ip = 16; continue _fun0006 }
case 17:
                    var1 = _closure2_slot1;
                    var1 = var1.parentChannelId;
                    if(!(var5 == var1)) { _fun0006_ip = 18; continue _fun0006 }
case 16:
                    var1 = _closure2_slot2;
                    var3 = var5 != var1;
                    var1 = null;
                    if(!var3) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                    var3 = _closure2_slot2;
                    var3 = var3.parent_id;
                    var3 = var5 != var3;
                    var1 = null;
                    if(!var3) { _fun0006_ip = 19; continue _fun0006 }
case 21:
                    var7 = _closure1_slot6;
                    var6 = var7.has;
                    var4 = _closure2_slot2;
                    var4 = var4.type;
                    var4 = var6.bind(var7)(var4);
                    var1 = null;
                    if(!var4) { _fun0006_ip = 19; continue _fun0006 }
case 11:
                    var5 = _closure1_slot7;
                    var4 = var5.getChannel;
                    var3 = _closure2_slot2;
                    var3 = var3.parent_id;
                    var1 = var4.bind(var5)(var3);
case 19:
                    _fun0006_ip = 22; continue _fun0006;
case 18:
                    var4 = _closure1_slot7;
                    var3 = var4.getChannel;
                    var2 = _closure2_slot1;
                    var2 = var2.parentChannelId;
                    var1 = var3.bind(var4)(var2);
case 22:
                    return var1;
                }
            };
            var17 = var17.bind(var18)(var16, var2, var14);
            var18 = 21;
            var2 = var12[var18];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useSelectedSpecialNavigationPath;
            var14 = var2.bind(var3)();
            var3 = _closure1_slot1;
            var2 = 22;
            var2 = var12[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var20 = _closure1_slot0;
            var3 = _closure1_slot2;
            var12 = 17;
            var16 = var3[var12];
            var16 = var20.bind(var4)(var16);
            var19 = var16.intl;
            var16 = var19.string;
            var3 = var3[var12];
            var3 = var20.bind(var4)(var3);
            var3 = var3.t;
            if(var15) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var15 = var3.ZTNur7;
            var15 = var16.bind(var19)(var15);
            _fun0003_ip = 25; continue _fun0003;
case 23:
            var3 = var3.ai6Lbr;
            var15 = var16.bind(var19)(var3);
case 25:
            var16 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var18];
            var3 = var16.bind(var4)(var3);
            var3 = var3.SpecialNavigationPath;
            var3 = var3.FRIENDS;
            if(!(var14 !== var3)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var3 = _closure1_slot13;
            var3 = var3.GUILD_HOME;
            if(!(var13 !== var3)) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var3 = _closure1_slot13;
            var3 = var3.MEMBER_SAFETY;
            if(!(var13 !== var3)) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            if(var2) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var13 = null;
            if(!(var13 != var1)) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            if(!(var13 != var11)) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var2 = var11.isForumLikeChannel;
            var2 = var2.bind(var11)();
            if(!var2) { _fun0003_ip = 36; continue _fun0003 }
case 34:
            var3 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 28;
            var2 = var14[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.shouldNSFWGateGuild;
            var2 = var2.bind(var3)(var10);
            if(var2) { _fun0003_ip = 38; continue _fun0003 }
case 39:
            if(!(var13 != var11)) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 19;
            var2 = var10[var2];
            var18 = var3.bind(var4)(var2);
            var16 = var18.computeChannelName;
            var14 = _closure1_slot11;
            var2 = _closure1_slot10;
            var20 = var16.bind(var18)(var11, var14, var2);
            var2 = 18;
            var2 = var10[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getChannelIconWithGuild;
            var19 = var2.bind(var3)(var11, var9);
            var2 = var11.isDM;
            var2 = var2.bind(var11)();
            if(var2) { _fun0003_ip = 42; continue _fun0003 }
case 43:
            var2 = var11.isThread;
            var3 = var2.bind(var11)();
            var14 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = var2[var12];
            var9 = var14.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.formatToPlainString;
            var2 = var2[var12];
            var2 = var14.bind(var4)(var2);
            var2 = var2.t;
            if(var3) { _fun0003_ip = 44; continue _fun0003 }
case 45:
            var14 = var2.UbNmGc;
            var3 = {};
            var3['channelName'] = var20;
            var23 = var9.bind(var10)(var14, var3);
            var16 = _closure1_slot16;
            var14 = _closure1_slot19;
            var3 = {};
            var3['onPressTitle'] = var6;
            var3['style'] = var5;
            var22 = _closure1_slot16;
            var21 = _closure1_slot20;
            var18 = {};
            var18['title'] = var20;
            var18['accessibleTitle'] = var23;
            var18['icon'] = var19;
            var18 = var22.bind(var4)(var21, var18);
            var3['children'] = var18;
            var3 = var16.bind(var4)(var14, var3);
            return var3;
case 44:
            var3 = var2.OkzL+Q;
            var2 = {};
            var2['channelName'] = var20;
            var18 = var9.bind(var10)(var3, var2);
            var9 = _closure1_slot16;
            var3 = _closure1_slot19;
            var2 = {};
            var2['onPressTitle'] = var6;
            var2['style'] = var5;
            var16 = _closure1_slot16;
            var14 = _closure1_slot20;
            var10 = {};
            var10['title'] = var20;
            var10['accessibleTitle'] = var18;
            var10['icon'] = var19;
            var18 = var13 != var17;
            if(!var18) { _fun0003_ip = 46; continue _fun0003 }
case 47:
            var22 = _closure1_slot16;
            var21 = _closure1_slot21;
            var20 = {};
            var20['parentChannel'] = var17;
            var18 = var22.bind(var4)(var21, var20);
case 46:
            var10['subTitle'] = var18;
            var10 = var16.bind(var4)(var14, var10);
            var2['children'] = var10;
            var2 = var9.bind(var4)(var3, var2);
            return var2;
case 42:
            var2 = var11.getRecipientId;
            var10 = var2.bind(var11)();
            var2 = var11.isSystemDM;
            var2 = var2.bind(var11)();
            var14 = _closure1_slot16;
            var9 = _closure1_slot22;
            var3 = {};
            var3['userId'] = var10;
            var16 = var7.navbarTitlePrimaryText;
            var3['style'] = var16;
            var20 = var14.bind(var4)(var9, var3);
            var18 = null;
            if(var2) { _fun0003_ip = 48; continue _fun0003 }
case 49:
            var9 = _closure1_slot16;
            var3 = _closure1_slot23;
            var2 = {};
            var2['userId'] = var10;
            var14 = var7.status;
            var2['style'] = var14;
            var18 = var9.bind(var4)(var3, var2);
case 48:
            var9 = _closure1_slot16;
            var3 = _closure1_slot1;
            var14 = _closure1_slot2;
            var2 = 20;
            var2 = var14[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['userId'] = var10;
            var14 = var13 == var11;
            var10 = undefined;
            if(var14) { _fun0003_ip = 50; continue _fun0003 }
case 51:
            var10 = var11.guild_id;
case 50:
            var2['guildId'] = var10;
            var16 = var9.bind(var4)(var3, var2);
            var9 = _closure1_slot16;
            var3 = _closure1_slot19;
            var2 = {};
            var2['onPressTitle'] = var6;
            var2['style'] = var5;
            var14 = _closure1_slot16;
            var11 = _closure1_slot20;
            var10 = {};
            var10['title'] = var20;
            var10['icon'] = var19;
            var10['titleSuffix'] = var18;
            var10['subTitle'] = var16;
            var10 = var14.bind(var4)(var11, var10);
            var2['children'] = var10;
            var2 = var9.bind(var4)(var3, var2);
            return var2;
case 40:
            var9 = _closure1_slot16;
            var3 = _closure1_slot19;
            var2 = {};
            var2['style'] = var5;
            var14 = _closure1_slot16;
            var11 = _closure1_slot20;
            var10 = {};
            var10['title'] = var15;
            var10 = var14.bind(var4)(var11, var10);
            var2['children'] = var10;
            var2 = var9.bind(var4)(var3, var2);
            return var2;
case 38:
            var9 = _closure1_slot16;
            var3 = _closure1_slot19;
            var2 = {};
            var2['style'] = var5;
            var14 = _closure1_slot16;
            var11 = _closure1_slot20;
            var10 = {};
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var12];
            var16 = var19.bind(var4)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var15 = var15[var12];
            var15 = var19.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.HbPHt1;
            var15 = var16.bind(var18)(var15);
            var10['title'] = var15;
            var10 = var14.bind(var4)(var11, var10);
            var2['children'] = var10;
            var2 = var9.bind(var4)(var3, var2);
            return var2;
case 36:
            var2 = var1.name;
            if(!(var13 != var2)) { _fun0003_ip = 52; continue _fun0003 }
case 53:
            var2 = var1.name;
            var3 = var2.length;
            var2 = 0;
            if(!(!(var3 > var2))) { _fun0003_ip = 54; continue _fun0003 }
case 52:
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = var2[var12];
            var3 = var10.bind(var4)(var3);
            var9 = var3.intl;
            var3 = var9.string;
            var2 = var2[var12];
            var2 = var10.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2["4WNcpu"];
            var16 = var3.bind(var9)(var2);
            _fun0003_ip = 55; continue _fun0003;
case 54:
            var16 = var1.name;
case 55:
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 18;
            var2 = var9[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getThreadChannelIcon;
            var1 = var1.isPrivate;
            var9 = _closure1_slot12;
            if(var1) { _fun0003_ip = 56; continue _fun0003 }
case 57:
            var1 = var9.PUBLIC_THREAD;
            _fun0003_ip = 58; continue _fun0003;
case 56:
            var1 = var9.PRIVATE_THREAD;
case 58:
            var14 = var2.bind(var3)(var1);
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = var1[var12];
            var3 = var2.bind(var4)(var3);
            var9 = var3.intl;
            var3 = var9.formatToPlainString;
            var1 = var1[var12];
            var1 = var2.bind(var4)(var1);
            var1 = var1.t;
            var2 = var1.OkzL+Q;
            var1 = {};
            var1['channelName'] = var16;
            var15 = var3.bind(var9)(var2, var1);
            var3 = _closure1_slot16;
            var2 = _closure1_slot19;
            var1 = {};
            var1['style'] = var5;
            var11 = _closure1_slot16;
            var10 = _closure1_slot20;
            var9 = {};
            var9['title'] = var16;
            var9['accessibleTitle'] = var15;
            var9['icon'] = var14;
            var13 = var13 != var17;
            if(!var13) { _fun0003_ip = 59; continue _fun0003 }
case 60:
            var16 = _closure1_slot16;
            var15 = _closure1_slot21;
            var14 = {};
            var14['parentChannel'] = var17;
            var13 = var16.bind(var4)(var15, var14);
case 59:
            var9['subTitle'] = var13;
            var9 = var11.bind(var4)(var10, var9);
            var1['children'] = var9;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 32:
            var3 = _closure1_slot16;
            var10 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 26;
            var1 = var14[var1];
            var2 = var10.bind(var4)(var1);
            var1 = {};
            var9 = 27;
            var9 = var14[var9];
            var9 = var10.bind(var4)(var9);
            var1['source'] = var9;
            var9 = var7.premiumIcon;
            var1['style'] = var9;
            var13 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot16;
            var2 = _closure1_slot19;
            var1 = {};
            var1['style'] = var5;
            var11 = _closure1_slot16;
            var10 = _closure1_slot20;
            var9 = {};
            var17 = _closure1_slot0;
            var15 = var14[var12];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var14[var12];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.KzCF/6;
            var14 = var15.bind(var16)(var14);
            var9['title'] = var14;
            var9['icon'] = var13;
            var9 = var11.bind(var4)(var10, var9);
            var1['children'] = var9;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 30:
            var3 = _closure1_slot16;
            var17 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 23;
            var1 = var14[var9];
            var1 = var17.bind(var4)(var1);
            var2 = var1.Icon;
            var1 = {};
            var9 = var14[var9];
            var9 = var17.bind(var4)(var9);
            var9 = var9.Icon;
            var9 = var9.Sizes;
            var9 = var9.CUSTOM;
            var1['size'] = var9;
            var10 = _closure1_slot1;
            var9 = 25;
            var9 = var14[var9];
            var9 = var10.bind(var4)(var9);
            var1['source'] = var9;
            var9 = var7.homeIcon;
            var1['style'] = var9;
            var13 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot16;
            var2 = _closure1_slot19;
            var1 = {};
            var1['onPressTitle'] = var6;
            var1['style'] = var5;
            var11 = _closure1_slot16;
            var10 = _closure1_slot20;
            var9 = {};
            var15 = var14[var12];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var14[var12];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14["9Oq93m"];
            var14 = var15.bind(var16)(var14);
            var9['title'] = var14;
            var9['icon'] = var13;
            var9 = var11.bind(var4)(var10, var9);
            var1['children'] = var9;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 28:
            var3 = _closure1_slot16;
            var15 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 23;
            var1 = var11[var9];
            var1 = var15.bind(var4)(var1);
            var2 = var1.Icon;
            var1 = {};
            var9 = var11[var9];
            var9 = var15.bind(var4)(var9);
            var9 = var9.Icon;
            var9 = var9.Sizes;
            var9 = var9.CUSTOM;
            var1['size'] = var9;
            var10 = _closure1_slot1;
            var9 = 24;
            var9 = var11[var9];
            var9 = var10.bind(var4)(var9);
            var1['source'] = var9;
            var7 = var7.homeIcon;
            var1['style'] = var7;
            var10 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot16;
            var2 = _closure1_slot19;
            var1 = {};
            var1['onPressTitle'] = var6;
            var1['style'] = var5;
            var9 = _closure1_slot16;
            var7 = _closure1_slot20;
            var6 = {};
            var13 = var11[var12];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var11 = var11[var12];
            var11 = var15.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.Ym2Ri6;
            var11 = var13.bind(var14)(var11);
            var6['title'] = var11;
            var6['icon'] = var10;
            var6 = var9.bind(var4)(var7, var6);
            var1['children'] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 26:
            var3 = _closure1_slot16;
            var2 = _closure1_slot19;
            var1 = {};
            var1['style'] = var5;
            var7 = _closure1_slot16;
            var6 = _closure1_slot20;
            var5 = {};
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var9 = var8[var12];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var8[var12];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.TdEu5X;
            var8 = var9.bind(var10)(var8);
            var5['title'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = function ChannelTitleWrapper(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var6 = var1.children;
            var9 = var1.onPressTitle;
            var8 = var1.style;
            var1 = _closure1_slot18;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var1 = null;
            if(!(var1 != var9)) { _fun0007_ip = 61; continue _fun0007 }
case 62:
            var4 = _closure1_slot16;
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 29;
            var1 = var10[var1];
            var1 = var3.bind(var5)(var1);
            var3 = var1.PressableOpacity;
            var1 = {};
            var11 = var7.navbarTitleContainer;
            var10 = new Array(2);
            var10[0] = var11;
            var10[1] = var8;
            var1['style'] = var10;
            var10 = 'header';
            var1['accessibilityRole'] = var10;
            var1['onPress'] = var9;
            var9 = function onAccessibilityTap() {
                var1 = null;
                return var1;
            };
            var1['onAccessibilityTap'] = var9;
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0007_ip = 63; continue _fun0007;
case 61:
            var4 = _closure1_slot16;
            var3 = _closure1_slot4;
            var2 = {};
            var9 = var7.navbarTitleContainer;
            var7 = new Array(2);
            var7[0] = var9;
            var7[1] = var8;
            var2['style'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 63:
            return var1;
        }
    };
    var _closure1_slot19 = var5;
    var5 = 38;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/navbars/native/components/ChannelNavbar.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function ChannelTitleWithoutRoute(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var6 = var2.onPressTitle;
            var2 = var2.channelId;
            var _closure2_slot0 = var2;
            var2 = _closure1_slot18;
            var4 = undefined;
            var12 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 16;
            var7 = var8[var2];
            var11 = var3.bind(var4)(var7);
            var10 = var11.useStateFromStores;
            var7 = _closure1_slot7;
            var9 = new Array(1);
            var9[0] = var7;
            var7 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var10.bind(var11)(var9, var7);
            var2 = var8[var2];
            var8 = var3.bind(var4)(var2);
            var3 = var8.useStateFromStores;
            var9 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var9;
            var1 = function() {
                var2 = _closure1_slot5;
                var1 = var2.isConnected;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var3.bind(var8)(var2, var1);
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 17;
            var2 = var10[var1];
            var2 = var9.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var10[var1];
            var1 = var9.bind(var4)(var1);
            var1 = var1.t;
            if(var8) { _fun0008_ip = 64; continue _fun0008 }
case 65:
            var8 = var1.ZTNur7;
            var14 = var2.bind(var3)(var8);
            _fun0008_ip = 66; continue _fun0008;
case 64:
            var1 = var1.ai6Lbr;
            var14 = var2.bind(var3)(var1);
case 66:
            var9 = null;
            var1 = var9 != var7;
            var10 = null;
            if(!var1) { _fun0008_ip = 67; continue _fun0008 }
case 68:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 18;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getChannelIcon;
            var10 = var1.bind(var2)(var7);
case 67:
            var1 = var9 != var7;
            var15 = null;
            if(!var1) { _fun0008_ip = 69; continue _fun0008 }
case 70:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 19;
            var1 = var3[var1];
            var8 = var2.bind(var4)(var1);
            var3 = var8.computeChannelName;
            var2 = _closure1_slot11;
            var1 = _closure1_slot10;
            var15 = var3.bind(var8)(var7, var2, var1);
case 69:
            if(!(var9 != var7)) { _fun0008_ip = 71; continue _fun0008 }
case 72:
            var1 = var7.isDM;
            var1 = var1.bind(var7)();
            if(var1) { _fun0008_ip = 73; continue _fun0008 }
case 71:
            var3 = _closure1_slot16;
            var2 = _closure1_slot19;
            var1 = {};
            var1['onPressTitle'] = var6;
            var13 = _closure1_slot16;
            var11 = _closure1_slot20;
            var8 = {};
            if(!(var9 != var15)) { _fun0008_ip = 74; continue _fun0008 }
case 75:
            var14 = var15;
case 74:
            var8['title'] = var14;
            var8['icon'] = var10;
            var8 = var13.bind(var4)(var11, var8);
            var1['children'] = var8;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 73:
            var1 = var7.getRecipientId;
            var8 = var1.bind(var7)();
            var1 = var7.isSystemDM;
            var1 = var1.bind(var7)();
            var11 = _closure1_slot16;
            var3 = _closure1_slot22;
            var2 = {};
            var2['userId'] = var8;
            var13 = var12.navbarTitlePrimaryText;
            var2['style'] = var13;
            var11 = var11.bind(var4)(var3, var2);
            var9 = null;
            if(var1) { _fun0008_ip = 76; continue _fun0008 }
case 77:
            var3 = _closure1_slot16;
            var2 = _closure1_slot23;
            var1 = {};
            var1['userId'] = var8;
            var12 = var12.status;
            var1['style'] = var12;
            var9 = var3.bind(var4)(var2, var1);
case 76:
            var3 = _closure1_slot16;
            var2 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 20;
            var1 = var12[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['userId'] = var8;
            var7 = var7.guild_id;
            var1['guildId'] = var7;
            var8 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot16;
            var2 = _closure1_slot19;
            var1 = {};
            var1['onPressTitle'] = var6;
            var7 = _closure1_slot16;
            var6 = _closure1_slot20;
            var5 = {};
            var5['title'] = var11;
            var5['icon'] = var10;
            var5['titleSuffix'] = var9;
            var5['subTitle'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ChannelTitleWithoutRoute'] = var5;
    var3['ChannelTitle'] = var4;
    var2 = function ChannelButtons(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var8 = var1.buttons;
            var1 = var1.style;
            var4 = _closure1_slot16;
            var3 = _closure1_slot4;
            var2 = {};
            var2['style'] = var1;
            var1 = null;
            var6 = var1 == var8;
            var1 = undefined;
            var5 = undefined;
            if(var6) { _fun0009_ip = 78; continue _fun0009 }
case 79:
            var7 = var8.map;
            var6 = function(arg1, arg2) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = arg1;
                    var15 = var1.onPress;
                    var _closure3_slot0 = var15;
                    var14 = var1.onLongPress;
                    var16 = var1.source;
                    var17 = var1.color;
                    var12 = var1.style;
                    var18 = var1.accessibilityLabel;
                    var9 = var1.children;
                    var13 = var1.disabled;
                    var7 = var1.hasActivitiesPrivateChannelTooltip;
                    var5 = _closure1_slot17;
                    var4 = _closure1_slot4;
                    var3 = {};
                    var8 = _closure1_slot16;
                    var6 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 33;
                    var1 = var2[var1];
                    var2 = undefined;
                    var6 = var6.bind(var2)(var1);
                    var1 = {};
                    var19 = 'button';
                    var1['accessibilityRole'] = var19;
                    var1['accessibilityLabel'] = var18;
                    var1['color'] = var17;
                    var1['source'] = var16;
                    if(!var7) { _fun0010_ip = 80; continue _fun0010 }
case 81:
                    var15 = function(arg1) {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            var3 = _closure3_slot0;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0011_ip = 16; continue _fun0011 }
case 17:
                            var3 = _closure3_slot0;
                            var2 = undefined;
                            var1 = arg1;
                            var1 = var3.bind(var2)(var1);
case 16:
                            var3 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 34;
                            var2 = var7[var1];
                            var1 = undefined;
                            var5 = var3.bind(var1)(var2);
                            var4 = var5.UNSAFE_markDismissibleContentAsDismissed;
                            var2 = 35;
                            var2 = var7[var2];
                            var2 = var3.bind(var1)(var2);
                            var2 = var2.DismissibleContent;
                            var3 = var2.ACTIVITY_GDM_CALL_TOOLTIP;
                            var2 = {};
                            var6 = _closure1_slot14;
                            var6 = var6.AUTO;
                            var2['dismissAction'] = var6;
                            var2 = var4.bind(var5)(var3, var2);
                            return var1;
                        }
                    };
case 80:
                    var1['onPress'] = var15;
                    var1['onLongPress'] = var14;
                    var1['disabled'] = var13;
                    var1['style'] = var12;
                    var1['children'] = var9;
                    var6 = var8.bind(var2)(var6, var1);
                    var1 = new Array(2);
                    var1[0] = var6;
                    var6 = null;
                    if(!var7) { _fun0010_ip = 82; continue _fun0010 }
case 65:
                    var9 = _closure1_slot16;
                    var8 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var7 = 36;
                    var7 = var14[var7];
                    var8 = var8.bind(var2)(var7);
                    var7 = {};
                    var13 = _closure1_slot0;
                    var12 = 35;
                    var12 = var14[var12];
                    var12 = var13.bind(var2)(var12);
                    var12 = var12.DismissibleContent;
                    var13 = var12.ACTIVITY_GDM_CALL_TOOLTIP;
                    var12 = new Array(1);
                    var12[0] = var13;
                    var7['contentTypes'] = var12;
                    var11 = _closure1_slot15;
                    var11 = var11.CHANNEL_HEADER_CALL_BUTTON_TOOLTIPS;
                    var7['groupName'] = var11;
                    var10 = function children(arg1) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            var1 = arg1;
                            var4 = var1.visibleContent;
                            var1 = var1.markAsDismissed;
                            var _closure4_slot0 = var1;
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 35;
                            var1 = var5[var1];
                            var5 = undefined;
                            var1 = var3.bind(var5)(var1);
                            var1 = var1.DismissibleContent;
                            var3 = var1.ACTIVITY_GDM_CALL_TOOLTIP;
                            var1 = null;
                            if(!(var4 === var3)) { _fun0012_ip = 83; continue _fun0012 }
case 12:
                            var4 = _closure1_slot16;
                            var3 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var2 = 37;
                            var2 = var7[var2];
                            var3 = var3.bind(var5)(var2);
                            var2 = {};
                            var6 = function onClosePress() {
                                var3 = _closure4_slot0;
                                var1 = _closure1_slot14;
                                var2 = var1.UNKNOWN;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var2['onClosePress'] = var6;
                            var1 = var4.bind(var5)(var3, var2);
case 83:
                            return var1;
                        }
                    };
                    var7['children'] = var10;
                    var6 = var9.bind(var2)(var8, var7);
case 82:
                    var1[1] = var6;
                    var3['children'] = var1;
                    var1 = arg2;
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                }
            };
            var5 = var7.bind(var8)(var6);
case 78:
            var2['children'] = var5;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var3['ChannelButtons'] = var2;
    return var1;
})();