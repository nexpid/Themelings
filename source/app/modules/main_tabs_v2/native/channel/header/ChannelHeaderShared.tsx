// app/modules/main_tabs_v2/native/channel/header/ChannelHeaderShared.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = function TitleWrapper(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
            if(!(var1 != var13)) { _fun0001_ip = 282; continue _fun0001 }
 111:
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
            if(!var16) { _fun0001_ip = 182; continue _fun0001 }
 179:
            var14 = var15;
 182:
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
            _fun0001_ip = 320; continue _fun0001;
 282:
            var4 = _closure1_slot11;
            var3 = _closure1_slot6;
            var2 = {};
            var7 = var7.wrapper;
            var2['style'] = var7;
            var7 = 'header';
            var2['accessibilityRole'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 320:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function ChannelTitle(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var15 = var1.title;
            var16 = var1.accessibleTitle;
            var10 = var1.subtitle;
            var12 = var1.disableArrow;
            var4 = undefined;
            if(!(var12 === var4)) { _fun0002_ip = 34; continue _fun0002 }
 32:
            var12 = false;
 34:
            var1 = _closure1_slot14;
            var11 = var1.bind(var4)();
            var3 = _closure1_slot13;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var11.channelContent;
            var1['style'] = var5;
            var8 = _closure1_slot13;
            var6 = _closure1_slot6;
            var5 = {};
            var9 = var11.nameWithArrow;
            var5['style'] = var9;
            var14 = _closure1_slot11;
            var13 = _closure1_slot0;
            var17 = _closure1_slot2;
            var9 = 12;
            var9 = var17[var9];
            var9 = var13.bind(var4)(var9);
            var13 = var9.Text;
            var9 = {'variant': 'heading-lg/bold', 'color': 'header-primary', 'lineClamp': 1, 'style': null, 'accessibilityLabel': null, 'accessibilityRole': 'header', 'maxFontSizeMultiplier': 2};
            var17 = var11.channelName;
            var9['style'] = var17;
            var9['accessibilityLabel'] = var16;
            var9['children'] = var15;
            var13 = var14.bind(var4)(var13, var9);
            var9 = new Array(2);
            var9[0] = var13;
            var12 = !var12;
            if(!var12) { _fun0002_ip = 253; continue _fun0002 }
 170:
            var15 = _closure1_slot11;
            var17 = _closure1_slot1;
            var18 = _closure1_slot2;
            var16 = 13;
            var13 = var18[var16];
            var14 = var17.bind(var4)(var13);
            var13 = {};
            var19 = 14;
            var19 = var18[var19];
            var19 = var17.bind(var4)(var19);
            var13['source'] = var19;
            var16 = var18[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.Sizes;
            var16 = var16.REFRESH_SMALL_16;
            var13['size'] = var16;
            var16 = var11.arrowIcon;
            var13['style'] = var16;
            var12 = var15.bind(var4)(var14, var13);
 253:
            var9[1] = var12;
            var5['children'] = var9;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = null;
            var6 = var6 != var10;
            if(!var6) { _fun0002_ip = 314; continue _fun0002 }
 284:
            var9 = _closure1_slot11;
            var8 = _closure1_slot6;
            var7 = {};
            var11 = var11.subTitleContainer;
            var7['style'] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 314:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function GroupDMIcon(arg1) {
        var1 = arg1;
        var6 = var1.channel;
        var1 = _closure1_slot14;
        var4 = undefined;
        var5 = var1.bind(var4)();
        var3 = _closure1_slot11;
        var2 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 15;
        var1 = var9[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var8 = _closure1_slot0;
        var7 = 16;
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
    var _closure1_slot17 = var1;
    var1 = function UserAvatar(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var9 = var1.user;
            var8 = var1.status;
            var6 = var1.isMobileOnline;
            var1 = _closure1_slot14;
            var4 = undefined;
            var5 = var1.bind(var4)();
            var3 = _closure1_slot11;
            var2 = _closure1_slot1;
            var11 = _closure1_slot2;
            var7 = 16;
            var1 = var11[var7];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['user'] = var9;
            var12 = var9.avatarDecoration;
            var1['avatarDecoration'] = var12;
            var1['guildId'] = var4;
            var10 = _closure1_slot0;
            var7 = var11[var7];
            var7 = var10.bind(var4)(var7);
            var7 = var7.AvatarSizes;
            var7 = var7.REFRESH_MEDIUM_32;
            var1['size'] = var7;
            var7 = var9.isSystemUser;
            var9 = var7.bind(var9)();
            var7 = null;
            if(var9) { _fun0003_ip = 124; continue _fun0003 }
 121:
            var7 = var8;
 124:
            var1['status'] = var7;
            var1['isMobileOnline'] = var6;
            var5 = var5.channelIcon;
            var1['style'] = var5;
            var5 = true;
            var1['autoStatusCutout'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var4 = function renderChannelIconRaw(arg1, arg2) {
        var4 = _closure1_slot11;
        var3 = _closure1_slot20;
        var2 = {};
        var1 = arg1;
        var2['icon'] = var1;
        var1 = arg2;
        var2['IconComponent'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot19 = var4;
    var1 = function ChannelIconRaw(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var8 = var1.icon;
            var5 = var1.IconComponent;
            var1 = _closure1_slot14;
            var4 = undefined;
            var7 = var1.bind(var4)();
            var1 = null;
            if(!(var1 == var5)) { _fun0004_ip = 111; continue _fun0004 }
 32:
            var6 = _closure1_slot11;
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var9 = 13;
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
            _fun0004_ip = 135; continue _fun0004;
 111:
            var3 = _closure1_slot11;
            var2 = {'size': 'md', 'color': 'text-primary'};
            var1 = var3.bind(var4)(var5, var2);
 135:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function ParentChannelSubTitle(arg1) {
        var1 = arg1;
        var9 = var1.channel;
        var1 = _closure1_slot14;
        var4 = undefined;
        var10 = var1.bind(var4)();
        var3 = _closure1_slot11;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 12;
        var1 = var8[var1];
        var1 = var7.bind(var4)(var1);
        var2 = var1.Text;
        var1 = {'lineClamp': 1, 'accessibilityLabel': null, 'maxFontSizeMultiplier': 2, 'variant': 'text-xs/medium', 'color': 'text-muted'};
        var6 = 19;
        var11 = var8[var6];
        var11 = var7.bind(var4)(var11);
        var14 = var11.intl;
        var13 = var14.formatToPlainString;
        var6 = var8[var6];
        var6 = var7.bind(var4)(var6);
        var6 = var6.t;
        var12 = var6.BjYvHB;
        var11 = {};
        var6 = 20;
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
    var _closure1_slot21 = var1;
    var1 = function EmptyIcon() {
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
    var _closure1_slot22 = var1;
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
    var5 = var12.bind(var1)(var5);
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
    var5 = var12.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ReadStateTypes;
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot11 = var8;
    var8 = var5.Fragment;
    var _closure1_slot12 = var8;
    var5 = var5.jsxs;
    var _closure1_slot13 = var5;
    var5 = 8;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {'flex': 1, 'alignItems': 'center', 'flexShrink': 1, 'flexDirection': 'row', 'height': '100%', 'paddingEnd': 8};
    var5['wrapper'] = var10;
    var10 = {'flex': 1, 'flexShrink': 1, 'justifyContent': 'center'};
    var5['channelContent'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center', 'flexShrink': 1};
    var5['nameWithArrow'] = var10;
    var10 = {'flexShrink': 1, 'fontSize': 18, 'lineHeight': 24};
    var5['channelName'] = var10;
    var10 = {'tintColor': null, 'flexShrink': 0, 'flexGrow': 0, 'marginTop': 2, 'marginLeft': 2};
    var11 = 9;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.INTERACTIVE_NORMAL;
    var10['tintColor'] = var13;
    var5['arrowIcon'] = var10;
    var10 = {'marginRight': 12, 'flexShrink': 0};
    var5['channelIcon'] = var10;
    var10 = {'width': 0, 'height': 0, 'opacity': 0, 'flexGrow': 0};
    var5['hiddenPressable'] = var10;
    var10 = {'width': 32, 'height': 32, 'justifyContent': 'center', 'alignItems': 'center'};
    var5['channelIconWrapper'] = var10;
    var10 = {};
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_PRIMARY;
    var10['tintColor'] = var13;
    var5['guildChannelIcon'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 4, 'marginBottom': 4};
    var5['subTitleContainer'] = var10;
    var10 = {'lineHeight': 16, 'flexShrink': 1};
    var5['parentChannelName'] = var10;
    var10 = {'paddingLeft': 8, 'paddingRight': 8};
    var5['eventsActionButtonWithText'] = var10;
    var10 = {'width': 8, 'height': 8};
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var10['borderRadius'] = var13;
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.STATUS_POSITIVE;
    var10['backgroundColor'] = var11;
    var5['onlineIndicator'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot14 = var5;
    var5 = 27;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/channel/header/ChannelHeaderShared.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function renderTitleWrapper(arg1, arg2, arg3) {
        var4 = _closure1_slot11;
        var3 = _closure1_slot15;
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
    var5 = function renderChannelTitle(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var5 = arguments[3];
            var4 = undefined;
            if(!(var5 === var4)) { _fun0005_ip = 11; continue _fun0005 }
 9:
            var5 = false;
 11:
            var3 = _closure1_slot11;
            var2 = _closure1_slot16;
            var1 = {};
            var6 = arg1;
            var1['title'] = var6;
            var6 = arg2;
            var1['accessibleTitle'] = var6;
            var6 = arg3;
            var1['subtitle'] = var6;
            var1['disableArrow'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['renderChannelTitle'] = var5;
    var5 = function renderGroupDMIcon(arg1) {
        var4 = _closure1_slot11;
        var3 = _closure1_slot17;
        var2 = {};
        var1 = arg1;
        var2['channel'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['renderGroupDMIcon'] = var5;
    var5 = function renderUserAvatar(arg1, arg2, arg3) {
        var4 = _closure1_slot11;
        var3 = _closure1_slot18;
        var2 = {};
        var1 = arg1;
        var2['user'] = var1;
        var1 = arg2;
        var2['status'] = var1;
        var1 = arg3;
        var2['isMobileOnline'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['renderUserAvatar'] = var5;
    var3['renderChannelIconRaw'] = var4;
    var4 = function renderChannelIcon(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var7 = arg1;
            var8 = arg2;
            var4 = _closure1_slot19;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 17;
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
            if(var10) { _fun0006_ip = 81; continue _fun0006 }
 75:
            var9 = var8.rulesChannelId;
 81:
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
 0:
            var11 = arg1;
            var12 = arg2;
            var9 = arguments[2];
            var5 = undefined;
            if(!(var9 === var5)) { _fun0007_ip = 17; continue _fun0007 }
 15:
            var9 = false;
 17:
            var1 = null;
            if(!(var1 == var11)) { _fun0007_ip = 30; continue _fun0007 }
 23:
            if(!(var1 != var12)) { _fun0007_ip = 214; continue _fun0007 }
 30:
            var14 = 'online';
            var2 = 0;
            var13 = var14;
            if(!(var2 === var11)) { _fun0007_ip = 54; continue _fun0007 }
 43:
            var13 = var14;
            if(!(var1 !== var12)) { _fun0007_ip = 54; continue _fun0007 }
 50:
            var13 = 'total';
 54:
            var4 = _closure1_slot13;
            var3 = _closure1_slot12;
            var2 = {};
            var10 = _closure1_slot11;
            var7 = _closure1_slot1;
            var15 = _closure1_slot2;
            var6 = 18;
            var6 = var15[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['type'] = var13;
            if(!(var14 === var13)) { _fun0007_ip = 104; continue _fun0007 }
 101:
            var12 = var11;
 104:
            var13 = var1 != var12;
            var11 = undefined;
            if(!var13) { _fun0007_ip = 116; continue _fun0007 }
 113:
            var11 = var12;
 116:
            var6['count'] = var11;
            var11 = 'text-muted';
            var6['color'] = var11;
            var7 = var10.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var7 = null;
            if(!var9) { _fun0007_ip = 198; continue _fun0007 }
 149:
            var10 = _closure1_slot11;
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 12;
            var8 = var11[var8];
            var8 = var9.bind(var5)(var8);
            var9 = var8.Text;
            var8 = {'variant': 'text-xs/medium', 'color': 'divider-subtle', 'children': '•'};
            var7 = var10.bind(var5)(var9, var8);
 198:
            var6[1] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 214:
            return var1;
        }
    };
    var3['renderMemberCountText'] = var4;
    var4 = function renderParentChannelSubTitle(arg1) {
        var4 = _closure1_slot11;
        var3 = _closure1_slot21;
        var2 = {};
        var1 = arg1;
        var2['channel'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['renderParentChannelSubTitle'] = var4;
    var4 = function renderEmptyIcon() {
        var4 = _closure1_slot11;
        var3 = _closure1_slot22;
        var2 = undefined;
        var1 = {};
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var3['renderEmptyIcon'] = var4;
    var2 = function EventsActionButton(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var2 = arg1;
            var10 = var2.guild;
            var _closure2_slot0 = var10;
            var2 = _closure1_slot14;
            var4 = undefined;
            var6 = var2.bind(var4)();
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 21;
            var2 = var12[var2];
            var3 = var11.bind(var4)(var2);
            var2 = var10.id;
            var2 = var3.bind(var4)(var2);
            var7 = var2.length;
            var13 = _closure1_slot0;
            var2 = 22;
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
                var1 = 23;
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
            var1 = 24;
            var1 = var12[var1];
            var2 = var11.bind(var4)(var1);
            var1 = {};
            var10 = 25;
            var10 = var12[var10];
            var10 = var13.bind(var4)(var10);
            var10 = var10.CalendarIcon;
            var1['IconComponent'] = var10;
            var10 = 26;
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var1['source'] = var10;
            var1['onPress'] = var5;
            var5 = 0;
            if(!(!(var7 > var5))) { _fun0008_ip = 257; continue _fun0008 }
 200:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 19;
            var11 = var14[var10];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.tlopTE;
            var10 = var11.bind(var12)(var10);
            _fun0008_ip = 320; continue _fun0008;
 257:
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 19;
            var13 = var15[var11];
            var13 = var12.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.formatToPlainString;
            var11 = var15[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.t;
            var12 = var11.IBdqSk;
            var11 = {};
            var11['number'] = var7;
            var10 = var13.bind(var14)(var12, var11);
 320:
            var1['accessibilityLabel'] = var10;
            var1['badge'] = var9;
            var10 = var7 > var5;
            var9 = undefined;
            if(!var10) { _fun0008_ip = 347; continue _fun0008 }
 338:
            var10 = var7.toString;
            var9 = var10.bind(var7)();
 347:
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
            if(!var7) { _fun0008_ip = 403; continue _fun0008 }
 397:
            var5 = var6.eventsActionButtonWithText;
 403:
            var1['style'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['EventsActionButton'] = var2;
    return var1;
})();