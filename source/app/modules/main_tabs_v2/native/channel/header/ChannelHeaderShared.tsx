// app/modules/main_tabs_v2/native/channel/header/ChannelHeaderShared.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var1 = function TitleWrapper(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var6 = var2.children;
            var13 = var2.onPress;
            var12 = var2.pressAccessibilityLabel;
            var3 = _closure1_slot14;
            var5 = undefined;
            var7 = var3.bind(var5)();
            var4 = _closure1_slot4;
            var3 = var4.useState;
            var8 = var3.bind(var4)(var5);
            var4 = _closure1_slot3;
            var3 = 2;
            var4 = var4.bind(var5)(var8, var3);
            var3 = 0;
            var11 = var4[var3];
            var3 = 1;
            var3 = var4[var3];
            var _closure2_slot0 = var3;
            var8 = _closure1_slot4;
            var4 = var8.useCallback;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var3 = _closure2_slot0;
                var2 = {};
                var4 = true;
                var2['borderless'] = var4;
                var1 = var1.layout;
                var1 = var1.width;
                var2['radius'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = new Array(0);
            var15 = var4.bind(var8)(var3, var1);
            var1 = null;
            if(!(var1 != var13)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot13;
            var3 = _closure1_slot12;
            var1 = {};
            var10 = _closure1_slot11;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var8 = 10;
            var8 = var17[var8];
            var8 = var16.bind(var5)(var8);
            var9 = var8.PressableOpacity;
            var8 = {};
            var14 = 11;
            var14 = var17[var14];
            var16 = var16.bind(var5)(var14);
            var14 = var16.isAndroid;
            var16 = var14.bind(var16)();
            var14 = undefined;
            if(!var16) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var14 = var15;
case 4:
            var8['onLayout'] = var14;
            var8['onPress'] = var13;
            var8['androidRippleConfig'] = var11;
            var11 = 'header';
            var8['accessibilityRole'] = var11;
            var11 = var7.wrapper;
            var8['style'] = var11;
            var8['children'] = var6;
            var9 = var10.bind(var5)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var11 = _closure1_slot11;
            var10 = _closure1_slot5;
            var9 = {};
            var9['onPress'] = var13;
            var9['accessibilityLabel'] = var12;
            var12 = var7.hiddenPressable;
            var9['style'] = var12;
            var9 = var11.bind(var5)(var10, var9);
            var8[1] = var9;
            var1['children'] = var8;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 6; continue _fun0001;
case 2:
            var4 = _closure1_slot11;
            var3 = _closure1_slot6;
            var2 = {};
            var7 = var7.wrapper;
            var2['style'] = var7;
            var7 = 'header';
            var2['accessibilityRole'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 6:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function ChannelTitle(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var18 = var1.title;
            var17 = var1.accessibleTitle;
            var10 = var1.subtitle;
            var13 = var1.disableArrow;
            var4 = undefined;
            if(!(var13 === var4)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var13 = false;
case 7:
            var20 = var1.userId;
            var19 = var1.guildId;
            var1 = _closure1_slot14;
            var11 = var1.bind(var4)();
            var3 = _closure1_slot13;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var11.channelContent;
            var1['style'] = var5;
            var9 = _closure1_slot13;
            var8 = _closure1_slot6;
            var5 = {};
            var6 = var11.nameWithArrow;
            var5['style'] = var6;
            var6 = null;
            if(!(var6 == var20)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var15 = _closure1_slot11;
            var14 = _closure1_slot0;
            var16 = _closure1_slot2;
            var12 = 13;
            var12 = var16[var12];
            var12 = var14.bind(var4)(var12);
            var14 = var12.Text;
            var12 = {'variant': 'heading-lg/bold', 'color': 'mobile-text-heading-primary', 'lineClamp': 1, 'style': null, 'accessibilityLabel': null, 'accessibilityRole': 'header', 'maxFontSizeMultiplier': 2};
            var16 = var11.channelName;
            var12['style'] = var16;
            var12['accessibilityLabel'] = var17;
            var12['children'] = var18;
            var14 = var15.bind(var4)(var14, var12);
            _fun0002_ip = 11; continue _fun0002;
case 9:
            var16 = _closure1_slot11;
            var15 = _closure1_slot1;
            var21 = _closure1_slot2;
            var12 = 12;
            var12 = var21[var12];
            var15 = var15.bind(var4)(var12);
            var12 = {'userId': null, 'guildId': null, 'userName': null, 'variant': 'heading-lg/bold', 'defaultColor': 'mobile-text-heading-primary', 'lineClamp': 1};
            var12['userId'] = var20;
            var12['guildId'] = var19;
            var12['userName'] = var18;
            var18 = var11.channelName;
            var12['style'] = var18;
            var12['accessibilityLabel'] = var17;
            var17 = 'header';
            var12['accessibilityRole'] = var17;
            var17 = 2;
            var12['maxFontSizeMultiplier'] = var17;
            var14 = var16.bind(var4)(var15, var12);
case 11:
            var12 = new Array(2);
            var12[0] = var14;
            var13 = !var13;
            if(!var13) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var16 = _closure1_slot11;
            var18 = _closure1_slot1;
            var19 = _closure1_slot2;
            var17 = 14;
            var14 = var19[var17];
            var15 = var18.bind(var4)(var14);
            var14 = {};
            var20 = 15;
            var20 = var19[var20];
            var20 = var18.bind(var4)(var20);
            var14['source'] = var20;
            var17 = var19[var17];
            var17 = var18.bind(var4)(var17);
            var17 = var17.Sizes;
            var17 = var17.REFRESH_SMALL_16;
            var14['size'] = var17;
            var17 = var11.arrowIcon;
            var14['style'] = var17;
            var13 = var16.bind(var4)(var15, var14);
case 12:
            var12[1] = var13;
            var5['children'] = var12;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var6 = var6 != var10;
            if(!var6) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = _closure1_slot11;
            var8 = _closure1_slot6;
            var7 = {};
            var11 = var11.subTitleContainer;
            var7['style'] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 14:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function GroupDMIcon(arg1) {
        var1 = arg1;
        var6 = var1.channel;
        var1 = _closure1_slot14;
        var4 = undefined;
        var5 = var1.bind(var4)();
        var3 = _closure1_slot11;
        var2 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 16;
        var1 = var9[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var8 = _closure1_slot0;
        var7 = 17;
        var7 = var9[var7];
        var7 = var8.bind(var4)(var7);
        var7 = var7.AvatarSizes;
        var7 = var7.REFRESH_MEDIUM_32;
        var1['size'] = var7;
        var1['channel'] = var6;
        var5 = var5.channelIcon;
        var1['style'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot19 = var1;
    var1 = function UserAvatar(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var10 = var1.user;
            var9 = var1.status;
            var7 = var1.isMobileOnline;
            var6 = var1.isVROnline;
            var1 = _closure1_slot14;
            var4 = undefined;
            var5 = var1.bind(var4)();
            var3 = _closure1_slot11;
            var2 = _closure1_slot1;
            var12 = _closure1_slot2;
            var8 = 17;
            var1 = var12[var8];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['user'] = var10;
            var13 = var10.avatarDecoration;
            var1['avatarDecoration'] = var13;
            var1['guildId'] = var4;
            var11 = _closure1_slot0;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.AvatarSizes;
            var8 = var8.REFRESH_MEDIUM_32;
            var1['size'] = var8;
            var8 = var10.isSystemUser;
            var10 = var8.bind(var10)();
            var8 = null;
            if(var10) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var8 = var9;
case 16:
            var1['status'] = var8;
            var1['isMobileOnline'] = var7;
            var1['isVROnline'] = var6;
            var5 = var5.channelIcon;
            var1['style'] = var5;
            var5 = true;
            var1['autoStatusCutout'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var4 = function renderChannelIconRaw(arg1, arg2) {
        var4 = _closure1_slot11;
        var3 = _closure1_slot22;
        var2 = {};
        var1 = arg1;
        var2['icon'] = var1;
        var1 = arg2;
        var2['IconComponent'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot21 = var4;
    var1 = function ChannelIconRaw(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var8 = var1.icon;
            var5 = var1.IconComponent;
            var1 = _closure1_slot14;
            var4 = undefined;
            var7 = var1.bind(var4)();
            var1 = null;
            if(!(var1 == var5)) { _fun0004_ip = 18; continue _fun0004 }
case 8:
            var6 = _closure1_slot11;
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var9 = 14;
            var1 = var11[var9];
            var3 = var10.bind(var4)(var1);
            var1 = {};
            var9 = var11[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.Sizes;
            var9 = var9.SMALL_20;
            var1['size'] = var9;
            var1['source'] = var8;
            var7 = var7.guildChannelIcon;
            var7 = var7.tintColor;
            var1['color'] = var7;
            var1 = var6.bind(var4)(var3, var1);
            _fun0004_ip = 19; continue _fun0004;
case 18:
            var3 = _closure1_slot11;
            var2 = {'size': 'md', 'color': 'text-strong'};
            var1 = var3.bind(var4)(var5, var2);
case 19:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function ParentChannelSubTitle(arg1) {
        var1 = arg1;
        var9 = var1.channel;
        var1 = _closure1_slot14;
        var4 = undefined;
        var10 = var1.bind(var4)();
        var3 = _closure1_slot11;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 13;
        var1 = var8[var1];
        var1 = var7.bind(var4)(var1);
        var2 = var1.Text;
        var1 = {'lineClamp': 1, 'accessibilityLabel': null, 'maxFontSizeMultiplier': 2, 'variant': 'text-xs/medium', 'color': 'text-muted'};
        var6 = 20;
        var11 = var8[var6];
        var11 = var7.bind(var4)(var11);
        var14 = var11.intl;
        var13 = var14.formatToPlainString;
        var6 = var8[var6];
        var6 = var7.bind(var4)(var6);
        var6 = var6.t;
        var12 = var6.BjYvHO;
        var11 = {};
        var6 = 21;
        var15 = var8[var6];
        var18 = var7.bind(var4)(var15);
        var17 = var18.computeChannelName;
        var16 = _closure1_slot9;
        var15 = _closure1_slot8;
        var15 = var17.bind(var18)(var9, var16, var15);
        var11['channelName'] = var15;
        var11 = var13.bind(var14)(var12, var11);
        var1['accessibilityLabel'] = var11;
        var10 = var10.parentChannelName;
        var1['style'] = var10;
        var6 = var8[var6];
        var8 = var7.bind(var4)(var6);
        var7 = var8.computeChannelName;
        var6 = _closure1_slot9;
        var5 = _closure1_slot8;
        var5 = var7.bind(var8)(var9, var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot23 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var13.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var8 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.Pressable;
    var _closure1_slot5 = var8;
    var5 = var5.View;
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ReadStateTypes;
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.jsx;
    var _closure1_slot11 = var9;
    var8 = var5.Fragment;
    var _closure1_slot12 = var8;
    var5 = var5.jsxs;
    var _closure1_slot13 = var5;
    var5 = 8;
    var5 = var7[var5];
    var10 = var6.bind(var1)(var5);
    var8 = var10.createStyles;
    var5 = {};
    var11 = {'flex': 1, 'alignItems': 'center', 'flexShrink': 1, 'flexDirection': 'row', 'height': '100%', 'paddingEnd': 8};
    var5['wrapper'] = var11;
    var11 = {'flex': 1, 'flexShrink': 1, 'justifyContent': 'center'};
    var5['channelContent'] = var11;
    var11 = {'flexDirection': 'row', 'alignItems': 'center', 'flexShrink': 1};
    var5['nameWithArrow'] = var11;
    var11 = {'flexShrink': 1, 'fontSize': 18, 'lineHeight': 24};
    var5['channelName'] = var11;
    var11 = {'tintColor': null, 'flexShrink': 0, 'flexGrow': 0, 'marginTop': 2, 'marginLeft': 2};
    var12 = 9;
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.INTERACTIVE_TEXT_DEFAULT;
    var11['tintColor'] = var14;
    var5['arrowIcon'] = var11;
    var11 = {'marginRight': 12, 'flexShrink': 0};
    var5['channelIcon'] = var11;
    var11 = {'width': 0, 'height': 0, 'opacity': 0, 'flexGrow': 0};
    var5['hiddenPressable'] = var11;
    var11 = {'width': 32, 'height': 32, 'justifyContent': 'center', 'alignItems': 'center'};
    var5['channelIconWrapper'] = var11;
    var11 = {};
    var12 = var7[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_STRONG;
    var11['tintColor'] = var12;
    var5['guildChannelIcon'] = var11;
    var11 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 4, 'marginBottom': 4};
    var5['subTitleContainer'] = var11;
    var11 = {'lineHeight': 16, 'flexShrink': 1};
    var5['parentChannelName'] = var11;
    var11 = {'paddingLeft': 8, 'paddingRight': 8};
    var5['eventsActionButtonWithText'] = var11;
    var5 = var8.bind(var10)(var5);
    var _closure1_slot14 = var5;
    var5 = 13;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.Text;
    var5 = {'variant': 'text-xs/medium', 'color': 'border-subtle', 'children': '•'};
    var5 = var9.bind(var1)(var8, var5);
    var _closure1_slot15 = var5;
    var8 = function EmptyIcon() {
        var2 = _closure1_slot14;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var3 = _closure1_slot11;
        var2 = _closure1_slot6;
        var1 = {};
        var5 = var5.channelIconWrapper;
        var1['style'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var5 = {};
    var5 = var9.bind(var1)(var8, var5);
    var _closure1_slot16 = var5;
    var5 = 28;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/channel/header/ChannelHeaderShared.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function renderTitleWrapper(arg1, arg2, arg3) {
        var4 = _closure1_slot11;
        var3 = _closure1_slot17;
        var2 = {};
        var1 = arg2;
        var2['onPress'] = var1;
        var1 = arg3;
        var2['pressAccessibilityLabel'] = var1;
        var1 = arg1;
        var2['children'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['renderTitleWrapper'] = var5;
    var5 = function renderChannelTitle(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arguments[1];
            var4 = undefined;
            if(!(var1 === var4)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
            var1 = {};
case 20:
            var9 = var1.accessibleTitle;
            var8 = var1.subtitle;
            var2 = var1.disableArrow;
            var7 = var4 !== var2;
            if(!var7) { _fun0005_ip = 22; continue _fun0005 }
case 23:
            var7 = var2;
case 22:
            var6 = var1.userId;
            var5 = var1.guildId;
            var3 = _closure1_slot11;
            var2 = _closure1_slot18;
            var1 = {};
            var10 = arg1;
            var1['title'] = var10;
            var1['accessibleTitle'] = var9;
            var1['subtitle'] = var8;
            var1['disableArrow'] = var7;
            var1['userId'] = var6;
            var1['guildId'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['renderChannelTitle'] = var5;
    var5 = function renderGroupDMIcon(arg1) {
        var4 = _closure1_slot11;
        var3 = _closure1_slot19;
        var2 = {};
        var1 = arg1;
        var2['channel'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['renderGroupDMIcon'] = var5;
    var5 = function renderUserAvatar(arg1, arg2, arg3, arg4) {
        var4 = _closure1_slot11;
        var3 = _closure1_slot20;
        var2 = {};
        var1 = arg1;
        var2['user'] = var1;
        var1 = arg2;
        var2['status'] = var1;
        var1 = arg3;
        var2['isMobileOnline'] = var1;
        var1 = arg4;
        var2['isVROnline'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['renderUserAvatar'] = var5;
    var3['renderChannelIconRaw'] = var4;
    var4 = function renderChannelIcon(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var7 = arg1;
            var8 = arg2;
            var4 = _closure1_slot21;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 18;
            var2 = var6[var1];
            var3 = undefined;
            var9 = var5.bind(var3)(var2);
            var2 = var9.getChannelIconWithGuild;
            var2 = var2.bind(var9)(var7, var8);
            var1 = var6[var1];
            var6 = var5.bind(var3)(var1);
            var5 = var6.getChannelIconComponent;
            var1 = {};
            var9 = null;
            var10 = var9 == var8;
            var9 = undefined;
            if(var10) { _fun0006_ip = 24; continue _fun0006 }
case 25:
            var9 = var8.rulesChannelId;
case 24:
            var8 = var7.id;
            var8 = var9 === var8;
            var1['isRulesChannel'] = var8;
            var1 = var5.bind(var6)(var7, var1);
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var3['renderChannelIcon'] = var4;
    var4 = function renderMemberCountText(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var11 = arg1;
            var12 = arg2;
            var9 = arguments[2];
            var5 = undefined;
            if(!(var9 === var5)) { _fun0007_ip = 26; continue _fun0007 }
case 27:
            var9 = false;
case 26:
            var1 = null;
            if(!(var1 == var11)) { _fun0007_ip = 28; continue _fun0007 }
case 29:
            if(!(var1 != var12)) { _fun0007_ip = 30; continue _fun0007 }
case 28:
            var14 = 'online';
            var2 = 0;
            var13 = var14;
            if(!(var2 === var11)) { _fun0007_ip = 31; continue _fun0007 }
case 32:
            var13 = var14;
            if(!(var1 !== var12)) { _fun0007_ip = 31; continue _fun0007 }
case 33:
            var13 = 'total';
case 31:
            var4 = _closure1_slot13;
            var3 = _closure1_slot12;
            var2 = {};
            var10 = _closure1_slot11;
            var7 = _closure1_slot1;
            var15 = _closure1_slot2;
            var6 = 19;
            var6 = var15[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['type'] = var13;
            if(!(var14 === var13)) { _fun0007_ip = 34; continue _fun0007 }
case 10:
            var12 = var11;
case 34:
            var13 = var1 != var12;
            var11 = undefined;
            if(!var13) { _fun0007_ip = 35; continue _fun0007 }
case 3:
            var11 = var12;
case 35:
            var6['count'] = var11;
            var11 = 'text-muted';
            var6['color'] = var11;
            var7 = var10.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var7 = null;
            if(!var9) { _fun0007_ip = 36; continue _fun0007 }
case 37:
            var7 = _closure1_slot15;
case 36:
            var6[1] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 30:
            return var1;
        }
    };
    var3['renderMemberCountText'] = var4;
    var4 = function renderParentChannelSubTitle(arg1) {
        var4 = _closure1_slot11;
        var3 = _closure1_slot23;
        var2 = {};
        var1 = arg1;
        var2['channel'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['renderParentChannelSubTitle'] = var4;
    var4 = function renderEmptyIcon() {
        var1 = _closure1_slot16;
        return var1;
    };
    var3['renderEmptyIcon'] = var4;
    var2 = function EventsActionButton(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var10 = var2.guild;
            var _closure2_slot0 = var10;
            var2 = _closure1_slot14;
            var4 = undefined;
            var6 = var2.bind(var4)();
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 22;
            var2 = var12[var2];
            var3 = var11.bind(var4)(var2);
            var2 = var10.id;
            var2 = var3.bind(var4)(var2);
            var7 = var2.length;
            var13 = _closure1_slot0;
            var2 = 23;
            var2 = var12[var2];
            var9 = var13.bind(var4)(var2);
            var5 = var9.useStateFromStores;
            var2 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var4 = _closure1_slot7;
                var3 = var4.hasUnread;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var1 = _closure1_slot10;
                var1 = var1.GUILD_EVENT;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var9 = var5.bind(var9)(var3, var2);
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = new Array(1);
            var2[0] = var10;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 24;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openGuildEventListActionSheet;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var5 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot11;
            var1 = 25;
            var1 = var12[var1];
            var2 = var11.bind(var4)(var1);
            var1 = {};
            var10 = 26;
            var10 = var12[var10];
            var10 = var13.bind(var4)(var10);
            var10 = var10.CalendarIcon;
            var1['IconComponent'] = var10;
            var10 = 27;
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var1['source'] = var10;
            var1['onPress'] = var5;
            var5 = 0;
            if(!(!(var7 > var5))) { _fun0008_ip = 38; continue _fun0008 }
case 39:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 20;
            var11 = var14[var10];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.tlopTM;
            var10 = var11.bind(var12)(var10);
            _fun0008_ip = 40; continue _fun0008;
case 38:
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 20;
            var13 = var15[var11];
            var13 = var12.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.formatToPlainString;
            var11 = var15[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.t;
            var12 = var11.IBdqSu;
            var11 = {};
            var11['number'] = var7;
            var10 = var13.bind(var14)(var12, var11);
case 40:
            var1['accessibilityLabel'] = var10;
            var1['badge'] = var9;
            var10 = var7 > var5;
            var9 = undefined;
            if(!var10) { _fun0008_ip = 41; continue _fun0008 }
case 42:
            var10 = var7.toString;
            var9 = var10.bind(var7)();
case 41:
            var1['buttonText'] = var9;
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var8 = 9;
            var8 = var10[var8];
            var8 = var9.bind(var4)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_4;
            var1['hitSlop'] = var8;
            var7 = var7 > var5;
            var5 = null;
            if(!var7) { _fun0008_ip = 43; continue _fun0008 }
case 44:
            var5 = var6.eventsActionButtonWithText;
case 43:
            var1['style'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['EventsActionButton'] = var2;
    return var1;
})();