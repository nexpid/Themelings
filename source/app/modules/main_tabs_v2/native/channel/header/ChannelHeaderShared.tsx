// app/modules/main_tabs_v2/native/channel/header/ChannelHeaderShared.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function TitleWrapper(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var6 = var2.children;
            var11 = var2.onPress;
            var9 = var2.headerAccessibilityLabel;
            var12 = var2.titleContentHeight;
            var _closure2_slot0 = var12;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 9;
            var3 = var5[var3];
            var5 = undefined;
            var4 = var4.bind(var5)(var3);
            var3 = 'ChannelHeaderShared';
            var4 = var4.bind(var5)(var3);
            var3 = _closure1_slot12;
            var7 = var3.bind(var5)(var4);
            var4 = _closure1_slot4;
            var3 = var4.useState;
            var8 = var3.bind(var4)(var5);
            var4 = _closure1_slot3;
            var3 = 2;
            var4 = var4.bind(var5)(var8, var3);
            var3 = 0;
            var10 = var4[var3];
            var3 = 1;
            var3 = var4[var3];
            var _closure2_slot1 = var3;
            var13 = _closure1_slot4;
            var8 = var13.useCallback;
            var4 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var3 = _closure2_slot1;
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
            var3 = new Array(0);
            var13 = var8.bind(var13)(var4, var3);
            var8 = _closure1_slot4;
            var4 = var8.useMemo;
            var3 = new Array(1);
            var3[0] = var12;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = undefined;
                    return var2;
case 2:
                    var2 = global;
                    var4 = var2.Math;
                    var3 = var4.max;
                    var6 = _closure1_slot8;
                    var5 = undefined;
                    var2 = 'ChannelHeaderShared';
                    var2 = var6.bind(var5)(var2);
                    var1 = _closure2_slot0;
                    var2 = var2 - var1;
                    var1 = 2;
                    var2 = var2 / var1;
                    var1 = 0;
                    var2 = var3.bind(var4)(var1, var2);
                    var1 = {};
                    var1['top'] = var2;
                    var1['bottom'] = var2;
                    return var1;
                }
            };
            var8 = var4.bind(var8)(var1, var3);
            var1 = null;
            if(!(var1 != var11)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot9;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 10;
            var1 = var15[var1];
            var1 = var14.bind(var5)(var1);
            var3 = var1.PressableOpacity;
            var1 = {};
            var12 = 11;
            var12 = var15[var12];
            var14 = var14.bind(var5)(var12);
            var12 = var14.isAndroid;
            var14 = var12.bind(var14)();
            var12 = undefined;
            if(!var14) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var12 = var13;
case 6:
            var1['onLayout'] = var12;
            var1['onPress'] = var11;
            var1['androidRippleConfig'] = var10;
            var10 = 'header';
            var1['accessibilityRole'] = var10;
            var1['accessibilityLabel'] = var9;
            var1['hitSlop'] = var8;
            var8 = var7.wrapper;
            var1['style'] = var8;
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 8; continue _fun0001;
case 4:
            var4 = _closure1_slot9;
            var3 = _closure1_slot5;
            var2 = {};
            var7 = var7.wrapper;
            var2['style'] = var7;
            var7 = 'header';
            var2['accessibilityRole'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 8:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function ChannelTitle(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var19 = var1.title;
            var18 = var1.accessibleTitle;
            var10 = var1.subtitle;
            var13 = var1.disableArrow;
            var4 = undefined;
            if(!(var13 === var4)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var13 = false;
case 9:
            var22 = var1.userId;
            var21 = var1.guildId;
            var12 = var1.icon;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = 'ChannelTitle';
            var20 = var2.bind(var4)(var1);
            var1 = _closure1_slot12;
            var11 = var1.bind(var4)(var20);
            var3 = _closure1_slot10;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var11.channelContent;
            var1['style'] = var5;
            var9 = _closure1_slot10;
            var8 = _closure1_slot5;
            var5 = {};
            var6 = var11.nameWithArrow;
            var5['style'] = var6;
            var6 = null;
            var14 = null;
            if(!var20) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var15 = var6 != var12;
            var14 = null;
            if(!var15) { _fun0003_ip = 11; continue _fun0003 }
case 13:
            var14 = var12;
case 11:
            var12 = new Array(3);
            var12[0] = var14;
            if(!(var6 == var22)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var16 = _closure1_slot9;
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var14 = 13;
            var14 = var17[var14];
            var14 = var15.bind(var4)(var14);
            var15 = var14.Text;
            var14 = {'variant': null, 'color': 'mobile-text-heading-primary', 'lineClamp': 1, 'style': null, 'accessibilityLabel': null, 'accessibilityRole': 'header', 'maxFontSizeMultiplier': 2};
            var17 = 'heading-lg/bold';
            if(!var20) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var17 = 'redesign/heading-18/semibold';
case 16:
            var14['variant'] = var17;
            var17 = var11.channelName;
            var14['style'] = var17;
            var14['accessibilityLabel'] = var18;
            var14['children'] = var19;
            var14 = var16.bind(var4)(var15, var14);
            _fun0003_ip = 18; continue _fun0003;
case 14:
            var17 = _closure1_slot9;
            var16 = _closure1_slot1;
            var23 = _closure1_slot2;
            var15 = 12;
            var15 = var23[var15];
            var16 = var16.bind(var4)(var15);
            var15 = {};
            var15['userId'] = var22;
            var15['guildId'] = var21;
            var15['userName'] = var19;
            var19 = 'heading-lg/bold';
            if(!var20) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var19 = 'redesign/heading-18/semibold';
case 19:
            var15['variant'] = var19;
            var19 = 'mobile-text-heading-primary';
            var15['defaultColor'] = var19;
            var19 = 1;
            var15['lineClamp'] = var19;
            var19 = var11.channelName;
            var15['style'] = var19;
            var15['accessibilityLabel'] = var18;
            var18 = 'header';
            var15['accessibilityRole'] = var18;
            var18 = 2;
            var15['maxFontSizeMultiplier'] = var18;
            var14 = var17.bind(var4)(var16, var15);
case 18:
            var12[1] = var14;
            var13 = !var13;
            if(!var13) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var16 = _closure1_slot9;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var17 = 14;
            var14 = var19[var17];
            var14 = var18.bind(var4)(var14);
            var15 = var14.Icon;
            var14 = {};
            var21 = _closure1_slot1;
            var20 = 15;
            var20 = var19[var20];
            var20 = var21.bind(var4)(var20);
            var14['source'] = var20;
            var17 = var19[var17];
            var17 = var18.bind(var4)(var17);
            var17 = var17.Icon;
            var17 = var17.Sizes;
            var17 = var17.REFRESH_SMALL_16;
            var14['size'] = var17;
            var17 = var11.arrowIcon;
            var14['style'] = var17;
            var13 = var16.bind(var4)(var15, var14);
case 21:
            var12[2] = var13;
            var5['children'] = var12;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var6 = var6 != var10;
            if(!var6) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var9 = _closure1_slot9;
            var8 = _closure1_slot5;
            var7 = {};
            var11 = var11.subTitleContainer;
            var7['style'] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 23:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function GroupDMIcon(arg1) {
        var1 = arg1;
        var6 = var1.channel;
        var2 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 9;
        var1 = var9[var1];
        var4 = undefined;
        var3 = var2.bind(var4)(var1);
        var1 = 'ChannelHeaderShared';
        var3 = var3.bind(var4)(var1);
        var1 = _closure1_slot12;
        var5 = var1.bind(var4)(var3);
        var3 = _closure1_slot9;
        var1 = 16;
        var1 = var9[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var8 = _closure1_slot0;
        var7 = 14;
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
    var _closure1_slot15 = var1;
    var1 = function UserAvatar(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var10 = var1.user;
            var9 = var1.status;
            var7 = var1.isMobileOnline;
            var6 = var1.isVROnline;
            var3 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 9;
            var2 = var12[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = 'ChannelHeaderShared';
            var3 = var3.bind(var4)(var2);
            var2 = _closure1_slot12;
            var5 = var2.bind(var4)(var3);
            var3 = _closure1_slot9;
            var11 = _closure1_slot0;
            var8 = 14;
            var1 = var12[var8];
            var1 = var11.bind(var4)(var1);
            var2 = var1.Avatar;
            var1 = {};
            var1['user'] = var10;
            var13 = var10.avatarDecoration;
            var1['avatarDecoration'] = var13;
            var1['guildId'] = var4;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.AvatarSizes;
            var8 = var8.REFRESH_MEDIUM_32;
            var1['size'] = var8;
            var8 = var10.isSystemUser;
            var10 = var8.bind(var10)();
            var8 = null;
            if(var10) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var8 = var9;
case 25:
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
    var _closure1_slot16 = var1;
    var4 = function renderChannelIconRaw(arg1, arg2) {
        var4 = _closure1_slot9;
        var3 = _closure1_slot18;
        var2 = {};
        var1 = arg1;
        var2['icon'] = var1;
        var1 = arg2;
        var2['IconComponent'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot17 = var4;
    var1 = function ChannelIconRaw(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var10 = var1.icon;
            var5 = var1.IconComponent;
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 9;
            var1 = var9[var1];
            var4 = undefined;
            var3 = var8.bind(var4)(var1);
            var1 = 'ChannelHeaderShared';
            var7 = var3.bind(var4)(var1);
            var3 = _closure1_slot0;
            var1 = 17;
            var1 = var9[var1];
            var6 = var3.bind(var4)(var1);
            var3 = var6.useToken;
            var1 = 8;
            var1 = var9[var1];
            var1 = var8.bind(var4)(var1);
            var1 = var1.modules;
            var1 = var1.mobile;
            var1 = var1.CHANNEL_HEADER_ICON_SIZE;
            var6 = var3.bind(var6)(var1);
            var1 = _closure1_slot12;
            var9 = var1.bind(var4)(var7);
            var1 = null;
            if(!(var1 == var5)) { _fun0005_ip = 27; continue _fun0005 }
case 28:
            var8 = _closure1_slot9;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 14;
            var1 = var13[var11];
            var1 = var12.bind(var4)(var1);
            var3 = var1.Icon;
            var1 = {};
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.Icon;
            var11 = var11.Sizes;
            var11 = var11.SMALL_20;
            var1['size'] = var11;
            var1['source'] = var10;
            var9 = var9.guildChannelIcon;
            var9 = var9.tintColor;
            var1['color'] = var9;
            var1 = var8.bind(var4)(var3, var1);
            _fun0005_ip = 29; continue _fun0005;
case 27:
            var3 = _closure1_slot9;
            var2 = {};
            var2['size'] = var6;
            var6 = 'text-strong';
            if(!var7) { _fun0005_ip = 30; continue _fun0005 }
case 31:
            var6 = 'icon-strong';
case 30:
            var2['color'] = var6;
            var6 = undefined;
            if(!var7) { _fun0005_ip = 32; continue _fun0005 }
case 6:
            var7 = {};
            var8 = 4;
            var7['marginEnd'] = var8;
            var6 = var7;
case 32:
            var2['style'] = var6;
            var1 = var3.bind(var4)(var5, var2);
case 29:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function MemberCountText(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var6 = var1.presenceCount;
            var14 = var1.memberCount;
            var8 = var1.withSeparator;
            var13 = var1.leadingAccessoryWidth;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = 'ChannelHeaderShared';
            var11 = var2.bind(var4)(var1);
            var15 = 'online';
            var1 = 0;
            var12 = var15;
            if(!(var1 === var6)) { _fun0006_ip = 33; continue _fun0006 }
case 34:
            var1 = null;
            var12 = var15;
            if(!(var1 !== var14)) { _fun0006_ip = 33; continue _fun0006 }
case 35:
            var12 = 'total';
case 33:
            var3 = _closure1_slot10;
            var2 = _closure1_slot11;
            var1 = {};
            var10 = _closure1_slot9;
            var9 = _closure1_slot1;
            var16 = _closure1_slot2;
            var5 = 19;
            var5 = var16[var5];
            var9 = var9.bind(var4)(var5);
            var5 = {};
            var5['type'] = var12;
            if(!(var15 === var12)) { _fun0006_ip = 36; continue _fun0006 }
case 37:
            var14 = var6;
case 36:
            var6 = null;
            var15 = var6 != var14;
            var12 = undefined;
            if(!var15) { _fun0006_ip = 38; continue _fun0006 }
case 39:
            var12 = var14;
case 38:
            var5['count'] = var12;
            var12 = 'text-muted';
            if(!var11) { _fun0006_ip = 40; continue _fun0006 }
case 41:
            var12 = 'text-subtle';
case 40:
            var5['color'] = var12;
            var12 = undefined;
            if(!var11) { _fun0006_ip = 42; continue _fun0006 }
case 43:
            var12 = var13;
case 42:
            var5['dotContainerWidth'] = var12;
            var9 = var10.bind(var4)(var9, var5);
            var5 = new Array(2);
            var5[0] = var9;
            var6 = null;
            if(!var8) { _fun0006_ip = 44; continue _fun0006 }
case 45:
            var9 = _closure1_slot9;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 13;
            var7 = var10[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {'variant': null, 'color': 'text-subtle', 'children': '•'};
            var10 = 'text-xs/medium';
            if(!var11) { _fun0006_ip = 46; continue _fun0006 }
case 32:
            var10 = 'text-sm/normal';
case 46:
            var7['variant'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 44:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function ParentChannelSubTitle(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var9 = var1.channel;
            var2 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 9;
            var1 = var14[var1];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = 'ChannelHeaderShared';
            var10 = var2.bind(var4)(var1);
            var1 = _closure1_slot12;
            var6 = var1.bind(var4)(var10);
            var3 = _closure1_slot9;
            var15 = _closure1_slot0;
            var1 = 13;
            var1 = var14[var1];
            var1 = var15.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {'lineClamp': 1, 'accessibilityLabel': null, 'maxFontSizeMultiplier': 2};
            var7 = 20;
            var8 = var14[var7];
            var8 = var15.bind(var4)(var8);
            var13 = var8.intl;
            var12 = var13.formatToPlainString;
            var7 = var14[var7];
            var7 = var15.bind(var4)(var7);
            var7 = var7.t;
            var11 = var7.BjYvHO;
            var7 = {};
            var8 = 21;
            var14 = var14[var8];
            var17 = var15.bind(var4)(var14);
            var16 = var17.computeChannelName;
            var15 = _closure1_slot7;
            var14 = _closure1_slot6;
            var14 = var16.bind(var17)(var9, var15, var14);
            var7['channelName'] = var14;
            var7 = var12.bind(var13)(var11, var7);
            var1['accessibilityLabel'] = var7;
            var7 = 'text-xs/medium';
            if(!var10) { _fun0007_ip = 47; continue _fun0007 }
case 48:
            var7 = 'text-sm/medium';
case 47:
            var1['variant'] = var7;
            var7 = 'text-muted';
            if(!var10) { _fun0007_ip = 49; continue _fun0007 }
case 50:
            var7 = 'text-subtle';
case 49:
            var1['color'] = var7;
            var6 = var6.parentChannelName;
            var1['style'] = var6;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var8 = var7.bind(var4)(var6);
            var7 = var8.computeChannelName;
            var6 = _closure1_slot7;
            var5 = _closure1_slot6;
            var5 = var7.bind(var8)(var9, var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function EmptyIcon() {
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 9;
        var2 = var4[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = 'ChannelHeaderShared';
        var3 = var3.bind(var4)(var2);
        var2 = _closure1_slot12;
        var5 = var2.bind(var4)(var3);
        var3 = _closure1_slot9;
        var2 = _closure1_slot5;
        var1 = {};
        var5 = var5.channelIconWrapper;
        var1['style'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var9 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.View;
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.getMinHeaderHeight;
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot9 = var8;
    var8 = var5.jsxs;
    var _closure1_slot10 = var8;
    var5 = var5.Fragment;
    var _closure1_slot11 = var5;
    var5 = 7;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = function(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = arg1;
            var1 = {};
            var4 = 1;
            var6 = 8;
            var2 = {'flex': 1, 'alignItems': 'center', 'flexShrink': 1, 'flexDirection': 'row', 'paddingEnd': 8};
            var1['wrapper'] = var2;
            var2 = {'flex': 1, 'flexShrink': 1, 'justifyContent': 'center'};
            var5 = undefined;
            var7 = undefined;
            if(!var3) { _fun0008_ip = 51; continue _fun0008 }
case 52:
            var7 = 4;
case 51:
            var2['marginTop'] = var7;
            var1['channelContent'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'center', 'flexShrink': 1};
            var1['nameWithArrow'] = var2;
            var2 = {};
            var2['flexShrink'] = var4;
            if(var3) { _fun0008_ip = 53; continue _fun0008 }
case 54:
            var3 = {'fontSize': 18, 'lineHeight': 24};
            _fun0008_ip = 55; continue _fun0008;
case 53:
            var3 = {};
case 55:
            var10 = var2;
            var9 = var3;
            var3 = copyDataProperties(var10, var9);
            var1['channelName'] = var2;
            var2 = {'tintColor': null, 'flexShrink': 0, 'flexGrow': 0, 'marginTop': 2, 'marginLeft': 2};
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.colors;
            var7 = var7.INTERACTIVE_TEXT_DEFAULT;
            var2['tintColor'] = var7;
            var1['arrowIcon'] = var2;
            var2 = {'marginRight': 12, 'flexShrink': 0};
            var1['channelIcon'] = var2;
            var2 = {'width': 32, 'height': 32, 'justifyContent': 'center', 'alignItems': 'center'};
            var1['channelIconWrapper'] = var2;
            var2 = {};
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.colors;
            var3 = var3.TEXT_STRONG;
            var2['tintColor'] = var3;
            var1['guildChannelIcon'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 4, 'marginBottom': 4};
            var1['subTitleContainer'] = var2;
            var2 = {'lineHeight': 16, 'flexShrink': 1};
            var1['parentChannelName'] = var2;
            return var1;
        }
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot12 = var5;
    var5 = 22;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/channel/header/ChannelHeaderShared.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function renderTitleWrapper(arg1, arg2, arg3, arg4) {
        var4 = _closure1_slot9;
        var3 = _closure1_slot13;
        var2 = {};
        var1 = arg2;
        var2['onPress'] = var1;
        var1 = arg3;
        var2['headerAccessibilityLabel'] = var1;
        var1 = arg4;
        var2['titleContentHeight'] = var1;
        var1 = arg1;
        var2['children'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['renderTitleWrapper'] = var5;
    var5 = function renderChannelTitle(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arguments[1];
            var4 = undefined;
            if(!(var1 === var4)) { _fun0009_ip = 56; continue _fun0009 }
case 57:
            var1 = {};
case 56:
            var10 = var1.accessibleTitle;
            var9 = var1.subtitle;
            var2 = var1.disableArrow;
            var8 = var4 !== var2;
            if(!var8) { _fun0009_ip = 58; continue _fun0009 }
case 59:
            var8 = var2;
case 58:
            var7 = var1.userId;
            var6 = var1.guildId;
            var5 = var1.icon;
            var3 = _closure1_slot9;
            var2 = _closure1_slot14;
            var1 = {};
            var11 = arg1;
            var1['title'] = var11;
            var1['accessibleTitle'] = var10;
            var1['subtitle'] = var9;
            var1['disableArrow'] = var8;
            var1['userId'] = var7;
            var1['guildId'] = var6;
            var1['icon'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['renderChannelTitle'] = var5;
    var5 = function renderGroupDMIcon(arg1) {
        var4 = _closure1_slot9;
        var3 = _closure1_slot15;
        var2 = {};
        var1 = arg1;
        var2['channel'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['renderGroupDMIcon'] = var5;
    var5 = function renderUserAvatar(arg1, arg2, arg3, arg4) {
        var4 = _closure1_slot9;
        var3 = _closure1_slot16;
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
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var7 = arg1;
            var8 = arg2;
            var4 = _closure1_slot17;
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
            if(var10) { _fun0010_ip = 60; continue _fun0010 }
case 61:
            var9 = var8.rulesChannelId;
case 60:
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
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var8 = arg1;
            var7 = arg2;
            var6 = arguments[2];
            var5 = undefined;
            if(!(var6 === var5)) { _fun0011_ip = 2; continue _fun0011 }
case 62:
            var6 = false;
case 2:
            var1 = null;
            if(!(var1 == var8)) { _fun0011_ip = 10; continue _fun0011 }
case 63:
            var2 = var1 == var7;
            var1 = null;
            if(var2) { _fun0011_ip = 64; continue _fun0011 }
case 10:
            var4 = _closure1_slot9;
            var3 = _closure1_slot19;
            var2 = {};
            var2['presenceCount'] = var8;
            var2['memberCount'] = var7;
            var2['withSeparator'] = var6;
            var6 = arguments[3];
            var2['leadingAccessoryWidth'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 64:
            return var1;
        }
    };
    var3['renderMemberCountText'] = var4;
    var4 = function renderParentChannelSubTitle(arg1) {
        var4 = _closure1_slot9;
        var3 = _closure1_slot20;
        var2 = {};
        var1 = arg1;
        var2['channel'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['renderParentChannelSubTitle'] = var4;
    var2 = function renderEmptyIcon() {
        var4 = _closure1_slot9;
        var3 = _closure1_slot21;
        var2 = undefined;
        var1 = {};
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var3['renderEmptyIcon'] = var2;
    return var1;
})();