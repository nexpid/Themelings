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
    var4 = var4.getGuildIconSource;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/launchpad/native/shared/SimpleGuild.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SimpleGuild(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var34 = var1.guildIconRef;
            var16 = var1.style;
            var5 = var1.guildId;
            var _closure2_slot0 = var5;
            var31 = var1.onPress;
            var28 = var1.onLongPress;
            var8 = var1.onAccessibilityAction;
            var10 = var1.onLayout;
            var32 = var1.backgroundColor;
            var3 = var1.animated;
            var4 = undefined;
            if(!(var3 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = true;
case 2:
            var25 = var1.altDefaultBackground;
            if(!(var25 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var25 = false;
case 4:
            var11 = var1.selected;
            if(!(var11 === var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var11 = false;
case 6:
            var21 = var1.size;
            var26 = var1.iconSize;
            if(!(var26 === var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 5;
            var6 = var9[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.GuildIconSizes;
            var26 = var6.LARGE;
case 8:
            var15 = var1.borderRadius;
            var30 = var1.unread;
            var29 = var1.badge;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var9 = _closure1_slot1;
            var1 = _closure1_slot2;
            var7 = 6;
            var7 = var1[var7];
            var7 = var9.bind(var4)(var7);
            var7 = var7.bind(var4)();
            var9 = var7.iconStroke;
            var13 = var7.iconBackground;
            var12 = var7.iconBackgroundBrand;
            var7 = _closure1_slot0;
            var14 = 7;
            var1 = var1[var14];
            var18 = var7.bind(var4)(var1);
            var17 = var18.useStateFromStores;
            var1 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var27 = var17.bind(var18)(var7, var1);
            var20 = null;
            var7 = var20 == var27;
            var1 = undefined;
            if(var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var1 = var27.name;
case 10:
            var7 = var20 != var1;
            var18 = '';
            if(!var7) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var18 = var1;
case 12:
            _closure2_slot1 = var18;
            var7 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var14];
            var19 = var7.bind(var4)(var1);
            var17 = var19.useStateFromStoresObject;
            var1 = _closure1_slot5;
            var14 = new Array(1);
            var14[0] = var1;
            var7 = new Array(1);
            var7[0] = var5;
            var1 = function() {
                var1 = {};
                var4 = _closure1_slot5;
                var2 = var4.hasUnread;
                var3 = _closure2_slot0;
                var2 = var2.bind(var4)(var3);
                var1['unread'] = var2;
                var2 = var4.getMentionCount;
                var2 = var2.bind(var4)(var3);
                var1['badge'] = var2;
                return var1;
            };
            var1 = var17.bind(var19)(var14, var1, var7);
            var24 = var1.unread;
            _closure2_slot2 = var24;
            var19 = var1.badge;
            _closure2_slot3 = var19;
            var7 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 8;
            var1 = var14[var1];
            var1 = var7.bind(var4)(var1);
            if(var3) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var3 = var1.SimpleGuildContainer;
            _fun0001_ip = 16; continue _fun0001;
case 14:
            var3 = var1.SimpleGuildContainerAnimated;
case 16:
            var14 = _closure1_slot1;
            var1 = _closure1_slot2;
            var7 = 9;
            var7 = var1[var7];
            var14 = var14.bind(var4)(var7);
            var7 = {};
            var7['size'] = var21;
            var7['style'] = var16;
            var7 = var14.bind(var4)(var7);
            var17 = var7.containerSize;
            var22 = var7.containerSizeStyle;
            var33 = var7.containerStyles;
            var16 = _closure1_slot3;
            var14 = var16.useMemo;
            var7 = new Array(3);
            var7[0] = var18;
            var7[1] = var24;
            var7[2] = var19;
            var2 = function() {
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
                    var1 = 10;
                    var4 = var7[var1];
                    var3 = undefined;
                    var4 = var6.bind(var3)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var1 = var7[var1];
                    var1 = var6.bind(var3)(var1);
                    var1 = var1.t;
                    var3 = var1./uzRsr;
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
                    var3 = 10;
                    var5 = var8[var3];
                    var4 = undefined;
                    var5 = var7.bind(var4)(var5);
                    var6 = var5.intl;
                    var5 = var6.formatToPlainString;
                    var3 = var8[var3];
                    var3 = var7.bind(var4)(var3);
                    var3 = var3.t;
                    var4 = var3.lzqe4+;
                    var3 = {};
                    var7 = _closure2_slot1;
                    var3['guildName'] = var7;
                    var1 = var5.bind(var6)(var4, var3);
case 24:
                    _fun0002_ip = 25; continue _fun0002;
case 21:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 10;
                    var5 = var8[var3];
                    var4 = undefined;
                    var5 = var7.bind(var4)(var5);
                    var6 = var5.intl;
                    var5 = var6.formatToPlainString;
                    var3 = var8[var3];
                    var3 = var7.bind(var4)(var3);
                    var3 = var3.t;
                    var4 = var3./uzRsr;
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
            var7 = var14.bind(var16)(var2, var7);
            var2 = _closure1_slot0;
            var23 = 11;
            var1 = var1[var23];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useActivityIndicatorState;
            var18 = var1.bind(var2)(var5);
            var5 = var24;
            if(var24) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var5 = var11;
case 27:
            if(var5) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var1 = 0;
            var5 = var19 > var1;
case 29:
            if(var5) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var1 = var18.source;
            var5 = var20 != var1;
case 31:
            if(!var5) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var1 = 'transparent';
            var5 = var1 === var32;
case 33:
            var1 = var20 != var27;
            var16 = undefined;
            if(!var1) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var2 = _closure1_slot4;
            var1 = var11;
            if(!var1) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var1 = !var5;
case 37:
            var16 = var2.bind(var4)(var27, var17, var1);
case 35:
            if(!(var20 !== var16)) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var2 = 'object';
            var1 = typeof var16;
            if(!(var2 === var1)) { _fun0001_ip = 39; continue _fun0001 }
case 41:
            var1 = 'uri';
            var1 = var1 in var16;
            if(var1) { _fun0001_ip = 42; continue _fun0001 }
case 39:
            var14 = var20 != var16;
            _fun0001_ip = 43; continue _fun0001;
case 42:
            var1 = var16.uri;
            var14 = var20 != var1;
case 43:
            var2 = _closure1_slot7;
            var1 = {};
            var1['guildIconRef'] = var34;
            var35 = var20 == var27;
            var34 = undefined;
            if(var35) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var34 = var27.id;
case 44:
            var1['guildId'] = var34;
            var1['style'] = var33;
            var1['backgroundColor'] = var32;
            var1['selected'] = var11;
            var1['size'] = var21;
            var1['borderRadius'] = var15;
            var1['onPress'] = var31;
            var1['onLongPress'] = var28;
            var28 = var24;
            if(!(var20 != var30)) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var28 = var30;
case 46:
            var1['unread'] = var28;
            var28 = var19;
            if(!(var20 != var29)) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var28 = var29;
case 48:
            var1['badge'] = var28;
            var1['onLayout'] = var10;
            var1['onAccessibilityAction'] = var8;
            var1['accessibilityLabel'] = var7;
            var1['usingCutout'] = var5;
            var1['activityIndicatorState'] = var18;
            var8 = _closure1_slot7;
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            if(var5) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var5 = 5;
            var5 = var10[var5];
            var6 = var7.bind(var4)(var5);
            var5 = {};
            var5['guild'] = var27;
            var5['size'] = var26;
            var5['selected'] = var11;
            var5['animate'] = var11;
            var5['TABS_altDefaultBackground'] = var25;
            var25 = var20 != var21;
            var21 = null;
            if(!var25) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var21 = var22;
case 52:
            var5['style'] = var21;
            var5 = var8.bind(var4)(var6, var5);
            _fun0001_ip = 54; continue _fun0001;
case 50:
            var6 = 12;
            var6 = var10[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {'cutoutBottomRightSize': null, 'cutoutBottomRightInsetX': 6, 'cutoutBottomRightInsetY': 7, 'cutoutTopRightSize': null, 'cutoutTopRightInsetX': 8, 'cutoutTopRightInsetY': 8};
            var10 = 0;
            var22 = var19 > var10;
            var19 = 13;
            var21 = var19;
            if(var22) { _fun0001_ip = 55; continue _fun0001 }
case 56:
            var22 = 0;
            if(!var24) { _fun0001_ip = 57; continue _fun0001 }
case 58:
            var22 = var23;
case 57:
            var21 = var22;
case 55:
            var6['cutoutBottomRightSize'] = var21;
            var18 = var18.source;
            var20 = var20 != var18;
            var18 = 0;
            if(!var20) { _fun0001_ip = 59; continue _fun0001 }
case 60:
            var18 = var19;
case 59:
            var6['cutoutTopRightSize'] = var18;
            var6['imageSize'] = var17;
            var6['imageSource'] = var16;
            var6['imageBorderRadius'] = var15;
            if(var14) { _fun0001_ip = 61; continue _fun0001 }
case 62:
            var12 = var12.color;
            _fun0001_ip = 63; continue _fun0001;
case 61:
            var12 = var13.color;
case 63:
            var6['imageBackgroundColor'] = var12;
            var10 = 0;
            if(!var11) { _fun0001_ip = 64; continue _fun0001 }
case 65:
            var10 = 3;
case 64:
            var6['clipOuterAmount'] = var10;
            var10 = 1;
            var6['borderStroke'] = var10;
            var9 = var9.color;
            var6['borderStrokeColor'] = var9;
            var5 = var8.bind(var4)(var7, var6);
case 54:
            var1['children'] = var5;
            var1 = var2.bind(var4)(var3, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();