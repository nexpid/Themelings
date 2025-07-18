// app/modules/launchpad/native/shared/SimpleGuild.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
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
 0:
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
            if(!(var3 === var4)) { _fun0001_ip = 67; continue _fun0001 }
 65:
            var3 = true;
 67:
            var25 = var1.altDefaultBackground;
            if(!(var25 === var4)) { _fun0001_ip = 81; continue _fun0001 }
 79:
            var25 = false;
 81:
            var11 = var1.selected;
            if(!(var11 === var4)) { _fun0001_ip = 93; continue _fun0001 }
 91:
            var11 = false;
 93:
            var21 = var1.size;
            var26 = var1.iconSize;
            if(!(var26 === var4)) { _fun0001_ip = 143; continue _fun0001 }
 108:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 5;
            var6 = var9[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.GuildIconSizes;
            var26 = var6.LARGE;
 143:
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
            if(var7) { _fun0001_ip = 279; continue _fun0001 }
 274:
            var1 = var27.name;
 279:
            var7 = var20 != var1;
            var18 = '';
            if(!var7) { _fun0001_ip = 293; continue _fun0001 }
 290:
            var18 = var1;
 293:
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
            if(var3) { _fun0001_ip = 405; continue _fun0001 }
 397:
            var3 = var1.SimpleGuildContainer;
            _fun0001_ip = 411; continue _fun0001;
 405:
            var3 = var1.SimpleGuildContainerAnimated;
 411:
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
 0:
                    var3 = _closure2_slot1;
                    var1 = '';
                    if(!(var1 !== var3)) { _fun0002_ip = 291; continue _fun0002 }
 18:
                    var3 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0002_ip = 41; continue _fun0002 }
 28:
                    var3 = _closure2_slot3;
                    var1 = 0;
                    if(!(!(var3 > var1))) { _fun0002_ip = 208; continue _fun0002 }
 41:
                    var3 = _closure2_slot2;
                    var1 = true;
                    if(!(var1 !== var3)) { _fun0002_ip = 134; continue _fun0002 }
 51:
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
                    _fun0002_ip = 206; continue _fun0002;
 134:
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
 206:
                    _fun0002_ip = 289; continue _fun0002;
 208:
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
 289:
                    _fun0002_ip = 295; continue _fun0002;
 291:
                    var1 = _closure2_slot1;
 295:
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
            if(var24) { _fun0001_ip = 538; continue _fun0001 }
 535:
            var5 = var11;
 538:
            if(var5) { _fun0001_ip = 547; continue _fun0001 }
 541:
            var1 = 0;
            var5 = var19 > var1;
 547:
            if(var5) { _fun0001_ip = 559; continue _fun0001 }
 550:
            var1 = var18.source;
            var5 = var20 != var1;
 559:
            if(!var5) { _fun0001_ip = 570; continue _fun0001 }
 562:
            var1 = 'transparent';
            var5 = var1 === var32;
 570:
            var1 = var20 != var27;
            var16 = undefined;
            if(!var1) { _fun0001_ip = 599; continue _fun0001 }
 579:
            var2 = _closure1_slot4;
            var1 = var11;
            if(!var1) { _fun0001_ip = 592; continue _fun0001 }
 589:
            var1 = !var5;
 592:
            var16 = var2.bind(var4)(var27, var17, var1);
 599:
            if(!(var20 !== var16)) { _fun0001_ip = 625; continue _fun0001 }
 603:
            var2 = 'object';
            var1 = typeof var16;
            if(!(var2 === var1)) { _fun0001_ip = 625; continue _fun0001 }
 614:
            var1 = 'uri';
            var1 = var1 in var16;
            if(var1) { _fun0001_ip = 631; continue _fun0001 }
 625:
            var14 = var20 != var16;
            _fun0001_ip = 641; continue _fun0001;
 631:
            var1 = var16.uri;
            var14 = var20 != var1;
 641:
            var2 = _closure1_slot7;
            var1 = {};
            var1['guildIconRef'] = var34;
            var35 = var20 == var27;
            var34 = undefined;
            if(var35) { _fun0001_ip = 666; continue _fun0001 }
 661:
            var34 = var27.id;
 666:
            var1['guildId'] = var34;
            var1['style'] = var33;
            var1['backgroundColor'] = var32;
            var1['selected'] = var11;
            var1['size'] = var21;
            var1['borderRadius'] = var15;
            var1['onPress'] = var31;
            var1['onLongPress'] = var28;
            var28 = var24;
            if(!(var20 != var30)) { _fun0001_ip = 710; continue _fun0001 }
 707:
            var28 = var30;
 710:
            var1['unread'] = var28;
            var28 = var19;
            if(!(var20 != var29)) { _fun0001_ip = 725; continue _fun0001 }
 722:
            var28 = var29;
 725:
            var1['badge'] = var28;
            var1['onLayout'] = var10;
            var1['onAccessibilityAction'] = var8;
            var1['accessibilityLabel'] = var7;
            var1['usingCutout'] = var5;
            var1['activityIndicatorState'] = var18;
            var8 = _closure1_slot7;
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            if(var5) { _fun0001_ip = 833; continue _fun0001 }
 769:
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
            if(!var25) { _fun0001_ip = 818; continue _fun0001 }
 815:
            var21 = var22;
 818:
            var5['style'] = var21;
            var5 = var8.bind(var4)(var6, var5);
            _fun0001_ip = 986; continue _fun0001;
 833:
            var6 = 12;
            var6 = var10[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {'cutoutBottomRightSize': null, 'cutoutBottomRightInsetX': 6, 'cutoutBottomRightInsetY': 7, 'cutoutTopRightSize': null, 'cutoutTopRightInsetX': 8, 'cutoutTopRightInsetY': 8};
            var10 = 0;
            var22 = var19 > var10;
            var19 = 13;
            var21 = var19;
            if(var22) { _fun0001_ip = 885; continue _fun0001 }
 874:
            var22 = 0;
            if(!var24) { _fun0001_ip = 882; continue _fun0001 }
 879:
            var22 = var23;
 882:
            var21 = var22;
 885:
            var6['cutoutBottomRightSize'] = var21;
            var18 = var18.source;
            var20 = var20 != var18;
            var18 = 0;
            if(!var20) { _fun0001_ip = 908; continue _fun0001 }
 905:
            var18 = var19;
 908:
            var6['cutoutTopRightSize'] = var18;
            var6['imageSize'] = var17;
            var6['imageSource'] = var16;
            var6['imageBorderRadius'] = var15;
            if(var14) { _fun0001_ip = 939; continue _fun0001 }
 932:
            var12 = var12.color;
            _fun0001_ip = 944; continue _fun0001;
 939:
            var12 = var13.color;
 944:
            var6['imageBackgroundColor'] = var12;
            var10 = 0;
            if(!var11) { _fun0001_ip = 957; continue _fun0001 }
 954:
            var10 = 3;
 957:
            var6['clipOuterAmount'] = var10;
            var10 = 1;
            var6['borderStroke'] = var10;
            var9 = var9.color;
            var6['borderStrokeColor'] = var9;
            var5 = var8.bind(var4)(var7, var6);
 986:
            var1['children'] = var5;
            var1 = var2.bind(var4)(var3, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();