// app/modules/icymi/native/NewContentPill.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function CutoutGuildIcon(arg1) {
        var1 = arg1;
        var15 = var1.guild;
        var1 = _closure1_slot11;
        var4 = undefined;
        var11 = var1.bind(var4)();
        var3 = _closure1_slot9;
        var2 = _closure1_slot6;
        var1 = {};
        var5 = {'width': 24, 'height': 24};
        var1['style'] = var5;
        var7 = _closure1_slot9;
        var9 = _closure1_slot1;
        var14 = _closure1_slot2;
        var10 = 8;
        var5 = var14[var10];
        var6 = var9.bind(var4)(var5);
        var5 = {};
        var12 = {'shape': null, 'x': 18, 'y': 4294967292, 'width': 32, 'height': 32};
        var13 = _closure1_slot0;
        var10 = var14[var10];
        var10 = var13.bind(var4)(var10);
        var10 = var10.CutoutShape;
        var10 = var10.RoundedRect;
        var12['shape'] = var10;
        var10 = 7;
        var10 = var14[var10];
        var10 = var9.bind(var4)(var10);
        var10 = var10.radii;
        var10 = var10.md;
        var12['cornerRadius'] = var10;
        var10 = new Array(1);
        var10[0] = var12;
        var5['cutouts'] = var10;
        var10 = _closure1_slot9;
        var12 = 9;
        var8 = var14[var12];
        var9 = var9.bind(var4)(var8);
        var8 = {};
        var8['guild'] = var15;
        var12 = var14[var12];
        var12 = var13.bind(var4)(var12);
        var12 = var12.GuildIconSizes;
        var12 = var12.XSMALL;
        var8['size'] = var12;
        var11 = var11.guildIconBG;
        var8['style'] = var11;
        var8 = var10.bind(var4)(var9, var8);
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityIndicator;
    var _closure1_slot5 = var7;
    var4 = var4.View;
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
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'alignSelf': 'center', 'alignItems': 'center', 'flexDirection': 'row', 'paddingRight': 12, 'paddingLeft': 8, 'paddingVertical': 6};
    var10 = 7;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var9['borderRadius'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BG_BRAND;
    var9['backgroundColor'] = var12;
    var4['container'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BG_BASE_SECONDARY;
    var9['backgroundColor'] = var10;
    var4['guildIconBG'] = var9;
    var9 = {'position': 'absolute', 'top': 0, 'left': 0, 'height': 32, 'width': '100%', 'zIndex': 100};
    var4['refreshMorePillContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = {'overshootClamping': true, 'stiffness': 20, 'damping': 15, 'mass': 0.03};
    var _closure1_slot12 = var4;
    var4 = {};
    var7 = "function NewContentPillTsx1(){const{withSpring,showingPill,springConfig}=this.__closure;return{transform:[{translateY:withSpring(showingPill?12:0,springConfig)}],opacity:withSpring(showingPill?1:0,springConfig,'respect-motion-settings')};}";
    var4['code'] = var7;
    var _closure1_slot13 = var4;
    var4 = {};
    var7 = "function NewContentPillTsx2(){const{showingPill}=this.__closure;return{pointerEvents:showingPill?'box-none':'none'};}";
    var4['code'] = var7;
    var _closure1_slot14 = var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/NewContentPill.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function NewContentPill(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.onPress;
            var _closure2_slot0 = var1;
            var14 = var2.isRefreshing;
            var _closure2_slot1 = var14;
            var5 = undefined;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var2 = _closure1_slot11;
            var9 = var2.bind(var5)();
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 10;
            var3 = var8[var2];
            var12 = var7.bind(var5)(var3);
            var11 = var12.useStateFromStoresArray;
            var3 = _closure1_slot8;
            var6 = new Array(1);
            var6[0] = var3;
            var4 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getNewUnreadDehydratedItems;
                var1 = var1.bind(var2)();
                return var1;
            };
            var12 = var11.bind(var12)(var6, var4);
            var _closure2_slot2 = var12;
            var4 = var8[var2];
            var13 = var7.bind(var5)(var4);
            var11 = var13.useStateFromStores;
            var6 = new Array(1);
            var6[0] = var3;
            var4 = function() {
                var2 = _closure1_slot8;
                var1 = var2.hasNewContent;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = new Array(0);
            var3 = var11.bind(var13)(var6, var4, var3);
            var _closure2_slot3 = var3;
            var6 = _closure1_slot4;
            var4 = var6.useState;
            var11 = var4.bind(var6)(var12);
            var4 = _closure1_slot3;
            var13 = 2;
            var16 = var4.bind(var5)(var11, var13);
            var18 = 0;
            var11 = var16[var18];
            var _closure2_slot4 = var11;
            var25 = 1;
            var16 = var16[var25];
            var _closure2_slot5 = var16;
            var17 = _closure1_slot1;
            var16 = 11;
            var16 = var8[var16];
            var16 = var17.bind(var5)(var16);
            var22 = var16.bind(var5)();
            var17 = var6.useMemo;
            var16 = new Array(1);
            var16[0] = var11;
            var11 = function() {
                var1 = new Array(0);
                var _closure3_slot0 = var1;
                var4 = _closure2_slot4;
                var3 = var4.forEach;
                var2 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var2 = arg1;
                        var1 = _closure3_slot0;
                        var6 = var1.length;
                        var7 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 12;
                        var5 = var5[var1];
                        var1 = undefined;
                        var5 = var7.bind(var1)(var5);
                        var5 = var5.MIN_ITEMS_FOR_NEW_PILL;
                        if(!(!(var6 >= var5))) { _fun0002_ip = 138; continue _fun0002 }
 50:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 13;
                        var4 = var6[var4];
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.isGuildItem;
                        var4 = var4.bind(var5)(var2);
                        if(!var4) { _fun0002_ip = 111; continue _fun0002 }
 84:
                        var7 = _closure3_slot0;
                        var6 = var7.includes;
                        var5 = var2.data;
                        var5 = var5.guild_id;
                        var5 = var6.bind(var7)(var5);
                        var4 = !var5;
 111:
                        if(!var4) { _fun0002_ip = 138; continue _fun0002 }
 114:
                        var4 = _closure3_slot0;
                        var3 = var4.push;
                        var2 = var2.data;
                        var2 = var2.guild_id;
                        var2 = var3.bind(var4)(var2);
 138:
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var11 = var17.bind(var6)(var11, var16);
            var _closure2_slot6 = var11;
            var2 = var8[var2];
            var11 = var7.bind(var5)(var2);
            var8 = var11.useStateFromStoresArray;
            var2 = _closure1_slot7;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                var3 = _closure2_slot6;
                var2 = var3.map;
                var1 = function(arg1) {
                    var3 = _closure1_slot7;
                    var2 = var3.getGuild;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3 = var2.bind(var3)(var1);
                var2 = var3.filter;
                var1 = global;
                var1 = var1.Boolean;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var24 = var8.bind(var11)(var7, var2);
            var2 = var6.useState;
            var11 = false;
            var2 = var2.bind(var6)(var11);
            var4 = var4.bind(var5)(var2, var13);
            var2 = var4[var18];
            var4 = var4[var25];
            var _closure2_slot7 = var4;
            var20 = var3;
            if(!var20) { _fun0001_ip = 329; continue _fun0001 }
 326:
            var20 = var2;
 329:
            _closure2_slot8 = var20;
            var7 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = 14;
            var4 = var16[var2];
            var8 = var7.bind(var5)(var4);
            var6 = var8.useAnimatedStyle;
            var4 = function y() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = {};
                    var5 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var8 = 15;
                    var3 = var3[var8];
                    var7 = undefined;
                    var11 = var4.bind(var7)(var3);
                    var10 = var11.withSpring;
                    var4 = _closure2_slot8;
                    var9 = 0;
                    if(!var4) { _fun0003_ip = 49; continue _fun0003 }
 46:
                    var9 = 12;
 49:
                    var4 = _closure1_slot12;
                    var4 = var10.bind(var11)(var9, var4);
                    var5['translateY'] = var4;
                    var4 = new Array(1);
                    var4[0] = var5;
                    var1['transform'] = var4;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.withSpring;
                    var3 = _closure2_slot8;
                    var6 = 0;
                    if(!var3) { _fun0003_ip = 110; continue _fun0003 }
 107:
                    var6 = 1;
 110:
                    var3 = _closure1_slot12;
                    var2 = 'respect-motion-settings';
                    var2 = var4.bind(var5)(var6, var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var17 = {};
            var19 = 15;
            var19 = var16[var19];
            var19 = var7.bind(var5)(var19);
            var19 = var19.withSpring;
            var17['withSpring'] = var19;
            var17['showingPill'] = var20;
            var19 = _closure1_slot12;
            var17['springConfig'] = var19;
            var4['__closure'] = var17;
            var17 = 13655660855782.0;
            var4['__workletHash'] = var17;
            var17 = _closure1_slot13;
            var4['__initData'] = var17;
            var8 = var6.bind(var8)(var4);
            var4 = var16[var2];
            var17 = var7.bind(var5)(var4);
            var6 = var17.useAnimatedProps;
            var4 = function C() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = {};
                    var3 = _closure2_slot8;
                    var2 = 'none';
                    if(!var3) { _fun0004_ip = 22; continue _fun0004 }
 16:
                    var2 = 'box-none';
 22:
                    var1['pointerEvents'] = var2;
                    return var1;
                }
            };
            var19 = {};
            var19['showingPill'] = var20;
            var4['__closure'] = var19;
            var19 = 876312391659.0;
            var4['__workletHash'] = var19;
            var19 = _closure1_slot14;
            var4['__initData'] = var19;
            var6 = var6.bind(var17)(var4);
            var4 = 16;
            var4 = var16[var4];
            var7 = var7.bind(var5)(var4);
            var4 = var7.useIsFocused;
            var16 = var4.bind(var7)();
            _closure2_slot9 = var16;
            var7 = _closure1_slot4;
            var4 = var7.useState;
            var11 = var4.bind(var7)(var11);
            var4 = _closure1_slot3;
            var11 = var4.bind(var5)(var11, var13);
            var4 = var11[var18];
            _closure2_slot10 = var4;
            var11 = var11[var25];
            _closure2_slot11 = var11;
            var13 = var7.useLayoutEffect;
            var11 = new Array(3);
            var11[0] = var3;
            var11[1] = var16;
            var11[2] = var4;
            var4 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot10;
                    if(var2) { _fun0005_ip = 39; continue _fun0005 }
 10:
                    var2 = _closure2_slot9;
                    if(!var2) { _fun0005_ip = 39; continue _fun0005 }
 17:
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0005_ip = 39; continue _fun0005 }
 24:
                    var4 = _closure2_slot7;
                    var3 = undefined;
                    var2 = false;
                    var2 = var4.bind(var3)(var2);
                    _fun0005_ip = 76; continue _fun0005;
 39:
                    var2 = _closure2_slot10;
                    if(!var2) { _fun0005_ip = 50; continue _fun0005 }
 46:
                    var2 = _closure2_slot9;
 50:
                    if(!var2) { _fun0005_ip = 60; continue _fun0005 }
 53:
                    var3 = _closure2_slot3;
                    var2 = !var3;
 60:
                    if(!var2) { _fun0005_ip = 76; continue _fun0005 }
 63:
                    var4 = _closure2_slot7;
                    var3 = undefined;
                    var2 = true;
                    var2 = var4.bind(var3)(var2);
 76:
                    var3 = _closure2_slot11;
                    var2 = _closure2_slot9;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var4 = var13.bind(var7)(var4, var11);
            var11 = var7.useEffect;
            var4 = new Array(3);
            var4[0] = var14;
            var4[1] = var12;
            var4[2] = var3;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure2_slot1;
                    if(var2) { _fun0006_ip = 25; continue _fun0006 }
 10:
                    var3 = _closure2_slot5;
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 25:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var11.bind(var7)(var3, var4);
            var4 = var7.useCallback;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var11 = var4.bind(var7)(var1, var3);
            var1 = var24.length;
            if(!(var18 !== var1)) { _fun0001_ip = 1137; continue _fun0001 }
 679:
            var4 = _closure1_slot9;
            var3 = _closure1_slot1;
            var16 = _closure1_slot2;
            var1 = var16[var2];
            var1 = var3.bind(var5)(var1);
            var3 = var1.View;
            var1 = {};
            var12 = var9.refreshMorePillContainer;
            var7 = new Array(2);
            var7[0] = var12;
            var7[1] = var8;
            var1['style'] = var7;
            var1['animatedProps'] = var6;
            var13 = _closure1_slot10;
            var12 = _closure1_slot0;
            var7 = 17;
            var7 = var16[var7];
            var7 = var12.bind(var5)(var7);
            var12 = var7.PressableOpacity;
            var7 = {};
            var7['onPress'] = var11;
            var16 = var9.container;
            var7['style'] = var16;
            var19 = _closure1_slot9;
            if(var14) { _fun0001_ip = 830; continue _fun0001 }
 782:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var14 = 18;
            var14 = var17[var14];
            var14 = var16.bind(var5)(var14);
            var16 = var14.ArrowSmallUpIcon;
            var14 = {'size': 'md', 'color': 'interactive-active'};
            var16 = var19.bind(var5)(var16, var14);
            _fun0001_ip = 919; continue _fun0001;
 830:
            var17 = _closure1_slot5;
            var14 = {};
            var21 = _closure1_slot0;
            var23 = _closure1_slot2;
            var20 = 21;
            var20 = var23[var20];
            var21 = var21.bind(var5)(var20);
            var20 = var21.isThemeDark;
            var20 = var20.bind(var21)(var22);
            var22 = _closure1_slot1;
            var23 = _closure1_slot2;
            var21 = 7;
            var21 = var23[var21];
            var21 = var22.bind(var5)(var21);
            var21 = var21.unsafe_rawColors;
            if(var20) { _fun0001_ip = 903; continue _fun0001 }
 895:
            var20 = var21.PRIMARY_500;
            _fun0001_ip = 909; continue _fun0001;
 903:
            var20 = var21.WHITE_500;
 909:
            var14['color'] = var20;
            var16 = var19.bind(var5)(var17, var14);
 919:
            var14 = new Array(3);
            var14[0] = var16;
            var17 = var24.slice;
            var16 = var24.length;
            var16 = var16 - var25;
            var17 = var17.bind(var24)(var18, var16);
            var16 = var17.map;
            var15 = function(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = arg1;
                    var5 = _closure1_slot9;
                    var4 = _closure1_slot6;
                    var3 = {};
                    var6 = {};
                    var8 = arg2;
                    var7 = 0;
                    var8 = var8 > var7;
                    var7 = 4;
                    if(!var8) { _fun0007_ip = 39; continue _fun0007 }
 33:
                    var7 = -2;
 39:
                    var6['marginLeft'] = var7;
                    var3['style'] = var6;
                    var8 = _closure1_slot9;
                    var7 = _closure1_slot15;
                    var6 = {};
                    var6['guild'] = var1;
                    var2 = undefined;
                    var6 = var8.bind(var2)(var7, var6);
                    var3['children'] = var6;
                    var1 = var1.id;
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                }
            };
            var15 = var16.bind(var17)(var15);
            var14[1] = var15;
            var17 = _closure1_slot9;
            var16 = _closure1_slot6;
            var15 = {};
            var18 = {};
            var19 = var24.length;
            var20 = var19 > var25;
            var19 = 4;
            if(!var20) { _fun0001_ip = 1001; continue _fun0001 }
 995:
            var19 = -2;
 1001:
            var18['marginLeft'] = var19;
            var15['style'] = var18;
            var20 = _closure1_slot9;
            var19 = _closure1_slot1;
            var23 = _closure1_slot2;
            var21 = 9;
            var18 = var23[var21];
            var19 = var19.bind(var5)(var18);
            var18 = {};
            var22 = var24.length;
            var22 = var22 - var25;
            var22 = var24[var22];
            var18['guild'] = var22;
            var22 = _closure1_slot0;
            var21 = var23[var21];
            var21 = var22.bind(var5)(var21);
            var21 = var21.GuildIconSizes;
            var21 = var21.XSMALL;
            var18['size'] = var21;
            var21 = var9.guildIconBG;
            var18['style'] = var21;
            var18 = var20.bind(var5)(var19, var18);
            var15['children'] = var18;
            var15 = var17.bind(var5)(var16, var15);
            var14[2] = var15;
            var7['children'] = var14;
            var7 = var13.bind(var5)(var12, var7);
            var1['children'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 1417; continue _fun0001;
 1137:
            var4 = _closure1_slot9;
            var3 = _closure1_slot1;
            var17 = _closure1_slot2;
            var2 = var17[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.View;
            var2 = {};
            var12 = var9.refreshMorePillContainer;
            var7 = new Array(2);
            var7[0] = var12;
            var7[1] = var8;
            var2['style'] = var7;
            var2['animatedProps'] = var6;
            var8 = _closure1_slot10;
            var16 = _closure1_slot0;
            var6 = 17;
            var6 = var17[var6];
            var6 = var16.bind(var5)(var6);
            var7 = var6.PressableOpacity;
            var6 = {};
            var6['onPress'] = var11;
            var9 = var9.container;
            var6['style'] = var9;
            var12 = _closure1_slot9;
            var9 = 18;
            var9 = var17[var9];
            var9 = var16.bind(var5)(var9);
            var11 = var9.ArrowSmallUpIcon;
            var9 = {'size': 'md', 'color': 'interactive-active'};
            var11 = var12.bind(var5)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var12 = _closure1_slot9;
            var10 = 19;
            var10 = var17[var10];
            var10 = var16.bind(var5)(var10);
            var11 = var10.Text;
            var10 = {'style': null, 'variant': 'heading-md/bold', 'color': 'interactive-active'};
            var13 = {};
            var14 = 4;
            var13['marginLeft'] = var14;
            var10['style'] = var13;
            var13 = 20;
            var14 = var17[var13];
            var14 = var16.bind(var5)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.4Nl0Rk;
            var13 = var14.bind(var15)(var13);
            var10['children'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1417:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();