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
            var13 = var2.onPress;
            var12 = var2.pressAccessibilityLabel;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 8;
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
            var4 = _closure1_slot11;
            var3 = _closure1_slot10;
            var1 = {};
            var10 = _closure1_slot9;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var8 = 9;
            var8 = var17[var8];
            var8 = var16.bind(var5)(var8);
            var9 = var8.PressableOpacity;
            var8 = {};
            var14 = 10;
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
            var11 = _closure1_slot9;
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
            var4 = _closure1_slot9;
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
    var _closure1_slot13 = var1;
    var1 = function ChannelTitle(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var19 = var1.title;
            var18 = var1.accessibleTitle;
            var10 = var1.subtitle;
            var13 = var1.disableArrow;
            var4 = undefined;
            if(!(var13 === var4)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var13 = false;
case 7:
            var22 = var1.userId;
            var21 = var1.guildId;
            var12 = var1.icon;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 8;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = 'ChannelTitle';
            var20 = var2.bind(var4)(var1);
            var1 = _closure1_slot12;
            var11 = var1.bind(var4)(var20);
            var3 = _closure1_slot11;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var11.channelContent;
            var1['style'] = var5;
            var9 = _closure1_slot11;
            var8 = _closure1_slot6;
            var5 = {};
            var6 = var11.nameWithArrow;
            var5['style'] = var6;
            var6 = null;
            var14 = null;
            if(!var20) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var15 = var6 != var12;
            var14 = null;
            if(!var15) { _fun0002_ip = 9; continue _fun0002 }
case 11:
            var14 = var12;
case 9:
            var12 = new Array(3);
            var12[0] = var14;
            if(!(var6 == var22)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var16 = _closure1_slot9;
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var14 = 12;
            var14 = var17[var14];
            var14 = var15.bind(var4)(var14);
            var15 = var14.Text;
            var14 = {'variant': null, 'color': 'mobile-text-heading-primary', 'lineClamp': 1, 'style': null, 'accessibilityLabel': null, 'accessibilityRole': 'header', 'maxFontSizeMultiplier': 2};
            var17 = 'heading-lg/bold';
            if(!var20) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var17 = 'heading-md/semibold';
case 14:
            var14['variant'] = var17;
            var17 = var11.channelName;
            var14['style'] = var17;
            var14['accessibilityLabel'] = var18;
            var14['children'] = var19;
            var14 = var16.bind(var4)(var15, var14);
            _fun0002_ip = 16; continue _fun0002;
case 12:
            var17 = _closure1_slot9;
            var16 = _closure1_slot1;
            var23 = _closure1_slot2;
            var15 = 11;
            var15 = var23[var15];
            var16 = var16.bind(var4)(var15);
            var15 = {};
            var15['userId'] = var22;
            var15['guildId'] = var21;
            var15['userName'] = var19;
            var19 = 'heading-lg/bold';
            if(!var20) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var19 = 'heading-md/semibold';
case 17:
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
case 16:
            var12[1] = var14;
            var13 = !var13;
            if(!var13) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var16 = _closure1_slot9;
            var18 = _closure1_slot1;
            var19 = _closure1_slot2;
            var17 = 13;
            var14 = var19[var17];
            var15 = var18.bind(var4)(var14);
            var14 = {};
            var20 = 14;
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
case 19:
            var12[2] = var13;
            var5['children'] = var12;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var6 = var6 != var10;
            if(!var6) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var9 = _closure1_slot9;
            var8 = _closure1_slot6;
            var7 = {};
            var11 = var11.subTitleContainer;
            var7['style'] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 21:
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
        var1 = 8;
        var1 = var9[var1];
        var4 = undefined;
        var3 = var2.bind(var4)(var1);
        var1 = 'ChannelHeaderShared';
        var3 = var3.bind(var4)(var1);
        var1 = _closure1_slot12;
        var5 = var1.bind(var4)(var3);
        var3 = _closure1_slot9;
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
    var _closure1_slot15 = var1;
    var1 = function UserAvatar(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var10 = var1.user;
            var9 = var1.status;
            var7 = var1.isMobileOnline;
            var6 = var1.isVROnline;
            var2 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 8;
            var1 = var12[var1];
            var4 = undefined;
            var3 = var2.bind(var4)(var1);
            var1 = 'ChannelHeaderShared';
            var3 = var3.bind(var4)(var1);
            var1 = _closure1_slot12;
            var5 = var1.bind(var4)(var3);
            var3 = _closure1_slot9;
            var8 = 16;
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
            if(var10) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var8 = var9;
case 23:
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
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var9 = var1.icon;
            var5 = var1.IconComponent;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 8;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = 'ChannelHeaderShared';
            var7 = var3.bind(var4)(var1);
            var1 = _closure1_slot12;
            var8 = var1.bind(var4)(var7);
            var1 = null;
            if(!(var1 == var5)) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var6 = _closure1_slot9;
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 13;
            var1 = var12[var10];
            var3 = var11.bind(var4)(var1);
            var1 = {};
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var10 = var10.Sizes;
            var10 = var10.SMALL_20;
            var1['size'] = var10;
            var1['source'] = var9;
            var8 = var8.guildChannelIcon;
            var8 = var8.tintColor;
            var1['color'] = var8;
            var1 = var6.bind(var4)(var3, var1);
            _fun0004_ip = 27; continue _fun0004;
case 25:
            var3 = _closure1_slot9;
            var2 = {};
            var6 = 'md';
            if(!var7) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            var6 = 'sm';
case 28:
            var2['size'] = var6;
            var6 = 'text-strong';
            if(!var7) { _fun0004_ip = 30; continue _fun0004 }
case 31:
            var6 = 'icon-strong';
case 30:
            var2['color'] = var6;
            var6 = undefined;
            if(!var7) { _fun0004_ip = 32; continue _fun0004 }
case 33:
            var7 = {};
            var8 = 4;
            var7['marginEnd'] = var8;
            var6 = var7;
case 32:
            var2['style'] = var6;
            var1 = var3.bind(var4)(var5, var2);
case 27:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function MemberCountText(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var6 = var1.presenceCount;
            var13 = var1.memberCount;
            var8 = var1.withSeparator;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 8;
            var1 = var3[var1];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = 'ChannelHeaderShared';
            var11 = var2.bind(var4)(var1);
            var14 = 'online';
            var1 = 0;
            var12 = var14;
            if(!(var1 === var6)) { _fun0005_ip = 34; continue _fun0005 }
case 35:
            var1 = null;
            var12 = var14;
            if(!(var1 !== var13)) { _fun0005_ip = 34; continue _fun0005 }
case 36:
            var12 = 'total';
case 34:
            var3 = _closure1_slot11;
            var2 = _closure1_slot10;
            var1 = {};
            var10 = _closure1_slot9;
            var9 = _closure1_slot1;
            var15 = _closure1_slot2;
            var5 = 18;
            var5 = var15[var5];
            var9 = var9.bind(var4)(var5);
            var5 = {};
            var5['type'] = var12;
            if(!(var14 === var12)) { _fun0005_ip = 37; continue _fun0005 }
case 38:
            var13 = var6;
case 37:
            var6 = null;
            var14 = var6 != var13;
            var12 = undefined;
            if(!var14) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var12 = var13;
case 39:
            var5['count'] = var12;
            var12 = 'text-muted';
            if(!var11) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var12 = 'text-subtle';
case 41:
            var5['color'] = var12;
            var9 = var10.bind(var4)(var9, var5);
            var5 = new Array(2);
            var5[0] = var9;
            var6 = null;
            if(!var8) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            var9 = _closure1_slot9;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 12;
            var7 = var10[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {};
            var10 = 'text-xs/medium';
            if(!var11) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            var10 = 'text-sm/normal';
case 45:
            var7['variant'] = var10;
            var10 = 'border-subtle';
            if(!var11) { _fun0005_ip = 47; continue _fun0005 }
case 48:
            var10 = 'text-subtle';
case 47:
            var7['color'] = var10;
            var10 = '•';
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 43:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function ParentChannelSubTitle(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var9 = var1.channel;
            var2 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 8;
            var1 = var14[var1];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = 'ChannelHeaderShared';
            var10 = var2.bind(var4)(var1);
            var1 = _closure1_slot12;
            var6 = var1.bind(var4)(var10);
            var3 = _closure1_slot9;
            var15 = _closure1_slot0;
            var1 = 12;
            var1 = var14[var1];
            var1 = var15.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {'lineClamp': 1, 'accessibilityLabel': null, 'maxFontSizeMultiplier': 2};
            var7 = 19;
            var8 = var14[var7];
            var8 = var15.bind(var4)(var8);
            var13 = var8.intl;
            var12 = var13.formatToPlainString;
            var7 = var14[var7];
            var7 = var15.bind(var4)(var7);
            var7 = var7.t;
            var11 = var7.BjYvHO;
            var7 = {};
            var8 = 20;
            var14 = var14[var8];
            var17 = var15.bind(var4)(var14);
            var16 = var17.computeChannelName;
            var15 = _closure1_slot8;
            var14 = _closure1_slot7;
            var14 = var16.bind(var17)(var9, var15, var14);
            var7['channelName'] = var14;
            var7 = var12.bind(var13)(var11, var7);
            var1['accessibilityLabel'] = var7;
            var7 = 'text-xs/medium';
            if(!var10) { _fun0006_ip = 49; continue _fun0006 }
case 50:
            var7 = 'text-sm/medium';
case 49:
            var1['variant'] = var7;
            var7 = 'text-muted';
            if(!var10) { _fun0006_ip = 51; continue _fun0006 }
case 52:
            var7 = 'text-subtle';
case 51:
            var1['color'] = var7;
            var6 = var6.parentChannelName;
            var1['style'] = var6;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var8 = var7.bind(var4)(var6);
            var7 = var8.computeChannelName;
            var6 = _closure1_slot8;
            var5 = _closure1_slot7;
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
        var2 = 8;
        var2 = var4[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = 'ChannelHeaderShared';
        var3 = var3.bind(var4)(var2);
        var2 = _closure1_slot12;
        var5 = var2.bind(var4)(var3);
        var3 = _closure1_slot9;
        var2 = _closure1_slot6;
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
    var9 = var5.Pressable;
    var _closure1_slot5 = var9;
    var5 = var5.View;
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot9 = var8;
    var8 = var5.Fragment;
    var _closure1_slot10 = var8;
    var5 = var5.jsxs;
    var _closure1_slot11 = var5;
    var5 = 6;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = arg1;
            var1 = {};
            var4 = 1;
            var2 = {'flex': 1, 'alignItems': 'center', 'flexShrink': 1, 'flexDirection': 'row', 'height': '100%', 'paddingEnd': 8};
            var1['wrapper'] = var2;
            var2 = {'flex': 1, 'flexShrink': 1, 'justifyContent': 'center'};
            var5 = undefined;
            var6 = undefined;
            if(!var3) { _fun0007_ip = 53; continue _fun0007 }
case 54:
            var6 = 4;
case 53:
            var2['marginTop'] = var6;
            var1['channelContent'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'center', 'flexShrink': 1};
            var1['nameWithArrow'] = var2;
            var2 = {};
            var2['flexShrink'] = var4;
            if(var3) { _fun0007_ip = 55; continue _fun0007 }
case 56:
            var3 = {'fontSize': 18, 'lineHeight': 24};
            _fun0007_ip = 57; continue _fun0007;
case 55:
            var3 = {};
case 57:
            var9 = var2;
            var8 = var3;
            var3 = copyDataProperties(var9, var8);
            var1['channelName'] = var2;
            var2 = {'tintColor': null, 'flexShrink': 0, 'flexGrow': 0, 'marginTop': 2, 'marginLeft': 2};
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 7;
            var7 = var6[var3];
            var7 = var4.bind(var5)(var7);
            var7 = var7.colors;
            var7 = var7.INTERACTIVE_TEXT_DEFAULT;
            var2['tintColor'] = var7;
            var1['arrowIcon'] = var2;
            var2 = {'marginRight': 12, 'flexShrink': 0};
            var1['channelIcon'] = var2;
            var2 = {'width': 0, 'height': 0, 'opacity': 0, 'flexGrow': 0};
            var1['hiddenPressable'] = var2;
            var2 = {'width': 32, 'height': 32, 'justifyContent': 'center', 'alignItems': 'center'};
            var1['channelIconWrapper'] = var2;
            var2 = {};
            var3 = var6[var3];
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
    var5 = 21;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/channel/header/ChannelHeaderShared.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function renderTitleWrapper(arg1, arg2, arg3) {
        var4 = _closure1_slot9;
        var3 = _closure1_slot13;
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
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arguments[1];
            var4 = undefined;
            if(!(var1 === var4)) { _fun0008_ip = 58; continue _fun0008 }
case 59:
            var1 = {};
case 58:
            var10 = var1.accessibleTitle;
            var9 = var1.subtitle;
            var2 = var1.disableArrow;
            var8 = var4 !== var2;
            if(!var8) { _fun0008_ip = 60; continue _fun0008 }
case 61:
            var8 = var2;
case 60:
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
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var7 = arg1;
            var8 = arg2;
            var4 = _closure1_slot17;
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
            if(var10) { _fun0009_ip = 62; continue _fun0009 }
case 63:
            var9 = var8.rulesChannelId;
case 62:
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
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var8 = arg1;
            var7 = arg2;
            var6 = arguments[2];
            var5 = undefined;
            if(!(var6 === var5)) { _fun0010_ip = 64; continue _fun0010 }
case 65:
            var6 = false;
case 64:
            var1 = null;
            if(!(var1 == var8)) { _fun0010_ip = 8; continue _fun0010 }
case 66:
            var2 = var1 == var7;
            var1 = null;
            if(var2) { _fun0010_ip = 67; continue _fun0010 }
case 8:
            var4 = _closure1_slot9;
            var3 = _closure1_slot19;
            var2 = {};
            var2['presenceCount'] = var8;
            var2['memberCount'] = var7;
            var2['withSeparator'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 67:
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