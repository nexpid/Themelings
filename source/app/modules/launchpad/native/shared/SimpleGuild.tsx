// app/modules/launchpad/native/shared/SimpleGuild.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.getGuildIconSource;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ME;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flex': 1, 'justifyContent': 'center', 'alignItems': 'center'};
    var4['dmsWrapper'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/launchpad/native/shared/SimpleGuild.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SimpleGuild(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var36 = var2.guildIconRef;
            var16 = var2.style;
            var7 = var2.guildId;
            var _closure2_slot0 = var7;
            var33 = var2.onPress;
            var30 = var2.onLongPress;
            var8 = var2.onAccessibilityAction;
            var13 = var2.onLayout;
            var34 = var2.backgroundColor;
            var3 = var2.animated;
            var4 = undefined;
            if(!(var3 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = true;
case 2:
            var27 = var2.altDefaultBackground;
            if(!(var27 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var27 = false;
case 4:
            var11 = var2.selected;
            if(!(var11 === var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var11 = false;
case 6:
            var23 = var2.size;
            var28 = var2.iconSize;
            if(!(var28 === var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 8;
            var5 = var9[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.GuildIconSizes;
            var28 = var5.LARGE;
case 8:
            var17 = var2.borderRadius;
            var32 = var2.unread;
            var31 = var2.badge;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var2 = _closure1_slot10;
            var9 = var2.bind(var4)();
            var6 = _closure1_slot1;
            var2 = _closure1_slot2;
            var5 = 9;
            var5 = var2[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.bind(var4)();
            var10 = var5.iconStroke;
            var15 = var5.iconBackground;
            var14 = var5.iconBackgroundBrand;
            var5 = _closure1_slot0;
            var6 = 10;
            var2 = var2[var6];
            var19 = var5.bind(var4)(var2);
            var18 = var19.useStateFromStores;
            var2 = _closure1_slot7;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var29 = var18.bind(var19)(var5, var2);
            var22 = null;
            var5 = var22 == var29;
            var2 = undefined;
            if(var5) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = var29.name;
case 10:
            var5 = var22 != var2;
            var18 = '';
            if(!var5) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var18 = var2;
case 12:
            _closure2_slot1 = var18;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var20 = var5.bind(var4)(var2);
            var19 = var20.useStateFromStoresObject;
            var2 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var2;
            var5 = new Array(1);
            var5[0] = var7;
            var2 = function() {
                var1 = {};
                var4 = _closure1_slot6;
                var2 = var4.hasUnread;
                var3 = _closure2_slot0;
                var2 = var2.bind(var4)(var3);
                var1['unread'] = var2;
                var2 = var4.getMentionCount;
                var2 = var2.bind(var4)(var3);
                var1['badge'] = var2;
                return var1;
            };
            var2 = var19.bind(var20)(var6, var2, var5);
            var26 = var2.unread;
            _closure2_slot2 = var26;
            var21 = var2.badge;
            _closure2_slot3 = var21;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var25 = 11;
            var2 = var2[var25];
            var2 = var5.bind(var4)(var2);
            if(var3) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var3 = var2.SimpleGuildContainer;
            _fun0001_ip = 16; continue _fun0001;
case 14:
            var3 = var2.SimpleGuildContainerAnimated;
case 16:
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 12;
            var2 = var5[var2];
            var6 = var6.bind(var4)(var2);
            var2 = {};
            var2['size'] = var23;
            var2['style'] = var16;
            var2 = var6.bind(var4)(var2);
            var19 = var2.containerSize;
            var24 = var2.containerSizeStyle;
            var35 = var2.containerStyles;
            var16 = _closure1_slot3;
            var6 = var16.useMemo;
            var2 = new Array(3);
            var2[0] = var18;
            var2[1] = var26;
            var2[2] = var21;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = '';
                    if(!(var1 !== var3)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var3 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var3 = _closure2_slot3;
                    var1 = 0;
                    if(!(!(var3 > var1))) { _fun0002_ip = 21; continue _fun0002 }
case 19:
                    var3 = _closure2_slot2;
                    var1 = true;
                    if(!(var1 !== var3)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 13;
                    var4 = var7[var1];
                    var3 = undefined;
                    var4 = var6.bind(var3)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var1 = var7[var1];
                    var1 = var6.bind(var3)(var1);
                    var1 = var1.t;
                    var3 = var1["/uzRss"];
                    var1 = {};
                    var6 = _closure2_slot1;
                    var1['guildName'] = var6;
                    var6 = _closure2_slot3;
                    var1['mentions'] = var6;
                    var1 = var4.bind(var5)(var3, var1);
                    _fun0002_ip = 24; continue _fun0002;
case 22:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 13;
                    var5 = var8[var3];
                    var4 = undefined;
                    var5 = var7.bind(var4)(var5);
                    var6 = var5.intl;
                    var5 = var6.formatToPlainString;
                    var3 = var8[var3];
                    var3 = var7.bind(var4)(var3);
                    var3 = var3.t;
                    var4 = var3.lzqe42;
                    var3 = {};
                    var7 = _closure2_slot1;
                    var3['guildName'] = var7;
                    var1 = var5.bind(var6)(var4, var3);
case 24:
                    _fun0002_ip = 25; continue _fun0002;
case 21:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 13;
                    var5 = var8[var3];
                    var4 = undefined;
                    var5 = var7.bind(var4)(var5);
                    var6 = var5.intl;
                    var5 = var6.formatToPlainString;
                    var3 = var8[var3];
                    var3 = var7.bind(var4)(var3);
                    var3 = var3.t;
                    var4 = var3["/uzRss"];
                    var3 = {};
                    var7 = _closure2_slot1;
                    var3['guildName'] = var7;
                    var7 = _closure2_slot3;
                    var3['mentions'] = var7;
                    var1 = var5.bind(var6)(var4, var3);
case 25:
                    _fun0002_ip = 26; continue _fun0002;
case 17:
                    var1 = _closure2_slot1;
case 26:
                    return var1;
                }
            };
            var6 = var6.bind(var16)(var1, var2);
            var2 = _closure1_slot0;
            var1 = 14;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useActivityIndicatorState;
            var20 = var1.bind(var2)(var7);
            var5 = var26;
            if(var26) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var5 = var11;
case 27:
            if(var5) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var1 = 0;
            var5 = var21 > var1;
case 29:
            if(var5) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var1 = var20.source;
            var5 = var22 != var1;
case 31:
            if(!var5) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var1 = 'transparent';
            var5 = var1 === var34;
case 33:
            var1 = var22 != var29;
            var18 = undefined;
            if(!var1) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var2 = _closure1_slot5;
            var1 = var11;
            if(!var1) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var1 = !var5;
case 37:
            var18 = var2.bind(var4)(var29, var19, var1);
case 35:
            if(!(var22 !== var18)) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var2 = 'object';
            var1 = typeof var18;
            if(!(var2 === var1)) { _fun0001_ip = 39; continue _fun0001 }
case 41:
            var1 = 'uri';
            var1 = var1 in var18;
            if(var1) { _fun0001_ip = 42; continue _fun0001 }
case 39:
            var16 = var22 != var18;
            _fun0001_ip = 43; continue _fun0001;
case 42:
            var1 = var18.uri;
            var16 = var22 != var1;
case 43:
            var2 = _closure1_slot9;
            var1 = {};
            var1['guildIconRef'] = var36;
            var37 = var22 == var29;
            var36 = undefined;
            if(var37) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var36 = var29.id;
case 44:
            var1['guildId'] = var36;
            var1['style'] = var35;
            var1['backgroundColor'] = var34;
            var1['selected'] = var11;
            var1['size'] = var23;
            var1['borderRadius'] = var17;
            var1['onPress'] = var33;
            var1['onLongPress'] = var30;
            var30 = var26;
            if(!(var22 != var32)) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var30 = var32;
case 46:
            var1['unread'] = var30;
            var30 = var21;
            if(!(var22 != var31)) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var30 = var31;
case 48:
            var1['badge'] = var30;
            var1['onLayout'] = var13;
            var1['onAccessibilityAction'] = var8;
            var1['accessibilityLabel'] = var6;
            var1['usingCutout'] = var5;
            var1['activityIndicatorState'] = var20;
            var6 = _closure1_slot8;
            if(!(var7 !== var6)) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var8 = _closure1_slot9;
            var7 = _closure1_slot1;
            var13 = _closure1_slot2;
            if(var5) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var5 = 8;
            var5 = var13[var5];
            var6 = var7.bind(var4)(var5);
            var5 = {};
            var5['guild'] = var29;
            var5['size'] = var28;
            var5['selected'] = var11;
            var5['animate'] = var11;
            var5['TABS_altDefaultBackground'] = var27;
            var27 = var22 != var23;
            var23 = null;
            if(!var27) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var23 = var24;
case 54:
            var5['style'] = var23;
            var5 = var8.bind(var4)(var6, var5);
            _fun0001_ip = 56; continue _fun0001;
case 52:
            var6 = 17;
            var6 = var13[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {'cutoutBottomRightSize': null, 'cutoutBottomRightInsetX': 6, 'cutoutBottomRightInsetY': 7, 'cutoutTopRightSize': null, 'cutoutTopRightInsetX': 8, 'cutoutTopRightInsetY': 8};
            var13 = 0;
            var24 = var21 > var13;
            var21 = 13;
            var23 = var21;
            if(var24) { _fun0001_ip = 57; continue _fun0001 }
case 58:
            var24 = 0;
            if(!var26) { _fun0001_ip = 59; continue _fun0001 }
case 60:
            var24 = var25;
case 59:
            var23 = var24;
case 57:
            var6['cutoutBottomRightSize'] = var23;
            var20 = var20.source;
            var22 = var22 != var20;
            var20 = 0;
            if(!var22) { _fun0001_ip = 61; continue _fun0001 }
case 62:
            var20 = var21;
case 61:
            var6['cutoutTopRightSize'] = var20;
            var6['imageSize'] = var19;
            var6['imageSource'] = var18;
            var6['imageBorderRadius'] = var17;
            if(var16) { _fun0001_ip = 63; continue _fun0001 }
case 64:
            var14 = var14.color;
            _fun0001_ip = 65; continue _fun0001;
case 63:
            var14 = var15.color;
case 65:
            var6['imageBackgroundColor'] = var14;
            var13 = 0;
            if(!var11) { _fun0001_ip = 66; continue _fun0001 }
case 67:
            var13 = 3;
case 66:
            var6['clipOuterAmount'] = var13;
            var13 = 1;
            var6['borderStroke'] = var13;
            var10 = var10.color;
            var6['borderStrokeColor'] = var10;
            var5 = var8.bind(var4)(var7, var6);
case 56:
            _fun0001_ip = 68; continue _fun0001;
case 50:
            var8 = _closure1_slot9;
            var7 = _closure1_slot4;
            var6 = {};
            var9 = var9.dmsWrapper;
            var6['style'] = var9;
            var10 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 15;
            var9 = var13[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.ChatIcon;
            var9 = {};
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 16;
            var12 = var14[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.colors;
            if(var11) { _fun0001_ip = 69; continue _fun0001 }
case 70:
            var11 = var12.MOBILE_GUILDBAR_ICON_DEFAULT;
            _fun0001_ip = 71; continue _fun0001;
case 69:
            var11 = var12.WHITE;
case 71:
            var9['color'] = var11;
            var9 = var8.bind(var4)(var10, var9);
            var6['children'] = var9;
            var5 = var8.bind(var4)(var7, var6);
case 68:
            var1['children'] = var5;
            var1 = var2.bind(var4)(var3, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();