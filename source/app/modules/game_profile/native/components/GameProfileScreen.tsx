// app/modules/game_profile/native/components/GameProfileScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function GetButton(arg1) {
        var1 = arg1;
        var6 = var1.onPress;
        var4 = _closure1_slot7;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 6;
        var1 = var9[var1];
        var3 = undefined;
        var1 = var8.bind(var3)(var1);
        var2 = var1.Button;
        var1 = {'variant': 'primary', 'size': 'sm'};
        var5 = 7;
        var7 = var9[var5];
        var7 = var8.bind(var3)(var7);
        var11 = var7.intl;
        var10 = var11.string;
        var7 = var9[var5];
        var7 = var8.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7.l8JeHg;
        var7 = var10.bind(var11)(var7);
        var1['text'] = var7;
        var1['onPress'] = var6;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.Vsxqmz;
        var5 = var6.bind(var7)(var5);
        var1['accessibilityLabel'] = var5;
        var1 = var4.bind(var3)(var2, var1);
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
    var12 = 1;
    var7 = var6[var12];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var4 = var4.ActivityIndicator;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flex': 1, 'justifyContent': 'center', 'alignItems': 'center', 'minHeight': 300};
    var10 = 5;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWEST;
    var9['backgroundColor'] = var13;
    var4['loadingContainer'] = var9;
    var9 = {};
    var9['flex'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWEST;
    var9['backgroundColor'] = var10;
    var4['scrollView'] = var9;
    var9 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0};
    var4['stickyHeader'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = 'function GameProfileScreenTsx1(){const{heroHeaderHeight,scrollY,STICKY_HEADER_HEIGHT}=this.__closure;return heroHeaderHeight.get()>0&&scrollY.get()>=heroHeaderHeight.get()-STICKY_HEADER_HEIGHT;}';
    var4['code'] = var7;
    var _closure1_slot10 = var4;
    var4 = {};
    var7 = 'function GameProfileScreenTsx2(isVisible,wasVisible){const{stickyHeaderVisible,withTiming}=this.__closure;if(isVisible!==wasVisible){stickyHeaderVisible.set(withTiming(isVisible?1:0,{duration:150}));}}';
    var4['code'] = var7;
    var _closure1_slot11 = var4;
    var4 = {};
    var7 = 'function GameProfileScreenTsx3(){const{interpolate,stickyHeaderVisible,STICKY_HEADER_HEIGHT}=this.__closure;return{transform:[{translateY:interpolate(stickyHeaderVisible.get(),[0,1],[-1*STICKY_HEADER_HEIGHT,0])}]};}';
    var4['code'] = var7;
    var _closure1_slot12 = var4;
    var4 = {};
    var7 = 'function GameProfileScreenTsx4(){const{scrollY,storeLinksSectionBottomY,STICKY_HEADER_HEIGHT}=this.__closure;return scrollY.get()>storeLinksSectionBottomY.get()-STICKY_HEADER_HEIGHT;}';
    var4['code'] = var7;
    var _closure1_slot13 = var4;
    var4 = {};
    var7 = 'function GameProfileScreenTsx5(shouldShow,prevShouldShow){const{runOnJS,setShowGetButton}=this.__closure;if(shouldShow!==prevShouldShow){runOnJS(setShowGetButton)(shouldShow);}}';
    var4['code'] = var7;
    var _closure1_slot14 = var4;
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_profile/native/components/GameProfileScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GameProfileScreen(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var34 = var2.applicationId;
            var _closure2_slot0 = var34;
            var26 = var2.source;
            var _closure2_slot1 = var26;
            var20 = var2.sourceUserId;
            var _closure2_slot2 = var20;
            var2 = var2.initialScrollOffset;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = 0;
case 2:
            var _closure2_slot3 = var2;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var _closure2_slot17 = var4;
            var _closure2_slot18 = var4;
            var _closure2_slot19 = var4;
            var _closure2_slot20 = var4;
            var _closure2_slot21 = var4;
            var _closure2_slot22 = var4;
            var _closure2_slot23 = var4;
            var _closure2_slot24 = var4;
            var _closure2_slot25 = var4;
            var3 = _closure1_slot9;
            var12 = var3.bind(var4)();
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 8;
            var3 = var11[var3];
            var5 = var7.bind(var4)(var3);
            var3 = var5.useBottomSheetRef;
            var3 = var3.bind(var5)();
            var18 = var3.bottomSheetRef;
            var9 = var3.bottomSheetClose;
            var8 = _closure1_slot1;
            var3 = 9;
            var3 = var11[var3];
            var5 = var8.bind(var4)(var3);
            var3 = 10;
            var3 = var11[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.openURL;
            var21 = var5.bind(var4)(var3);
            _closure2_slot4 = var21;
            var10 = _closure1_slot4;
            var5 = var10.useState;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.generateViewId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var5.bind(var10)(var3);
            var8 = _closure1_slot3;
            var33 = 1;
            var3 = var8.bind(var4)(var3, var33);
            var32 = 0;
            var27 = var3[var32];
            _closure2_slot5 = var27;
            var3 = var10.useRef;
            var5 = null;
            var13 = var3.bind(var10)(var5);
            _closure2_slot6 = var13;
            var3 = var10.useRef;
            var19 = var3.bind(var10)(var32);
            _closure2_slot7 = var19;
            var3 = 12;
            var3 = var11[var3];
            var14 = var7.bind(var4)(var3);
            var3 = var14.useGetOrFetchApplication;
            var16 = var3.bind(var14)(var34);
            _closure2_slot8 = var16;
            var3 = 13;
            var3 = var11[var3];
            var7 = var7.bind(var4)(var3);
            var3 = var7.useGame;
            var3 = var3.bind(var7)(var34);
            var17 = var3.data;
            var3 = var3.isLoading;
            _closure2_slot9 = var3;
            var7 = var10.useState;
            var7 = var7.bind(var10)(var5);
            var36 = 2;
            var7 = var8.bind(var4)(var7, var36);
            var28 = var7[var32];
            _closure2_slot10 = var28;
            var24 = var7[var33];
            var7 = var5 == var17;
            var25 = undefined;
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var25 = var17.name;
case 4:
            if(!(var5 == var25)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = var5 == var16;
            var7 = undefined;
            if(var8) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = var16.name;
case 8:
            var25 = var7;
case 6:
            _closure2_slot11 = var25;
            var15 = _closure1_slot4;
            var8 = var15.useMemo;
            var7 = new Array(2);
            var7[0] = var16;
            var7[1] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot8;
                    var1 = null;
                    var1 = var1 == var3;
                    if(var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var1 = _closure2_slot9;
case 10:
                    return var1;
                }
            };
            var8 = var8.bind(var15)(var3, var7);
            var10 = _closure1_slot0;
            var14 = _closure1_slot2;
            var7 = 14;
            var3 = var14[var7];
            var10 = var10.bind(var4)(var3);
            var3 = var10.useSharedValue;
            var23 = var3.bind(var10)(var32);
            _closure2_slot12 = var23;
            var11 = var15.useCallback;
            var10 = new Array(1);
            var10[0] = var23;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.contentOffset;
                var2 = var1.y;
                var4 = _closure2_slot12;
                var3 = var4.set;
                var3 = var3.bind(var4)(var2);
                var1 = _closure2_slot7;
                var1['current'] = var2;
                var1 = undefined;
                return var1;
            };
            var11 = var11.bind(var15)(var3, var10);
            var3 = var15.useRef;
            var35 = false;
            var3 = var3.bind(var15)(var35);
            _closure2_slot13 = var3;
            var10 = var15.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var1 = 0;
                    var1 = var2 > var1;
                    if(!var1) { _fun0003_ip = 12; continue _fun0003 }
case 11:
                    var2 = _closure2_slot13;
                    var2 = var2.current;
                    var1 = !var2;
case 12:
                    if(!var1) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var2 = _closure2_slot13;
                    var1 = true;
                    var2['current'] = var1;
                    var1 = _closure2_slot6;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0003_ip = 13; continue _fun0003 }
case 15:
                    var2 = var3.scrollTo;
                    var1 = {};
                    var4 = _closure2_slot3;
                    var1['y'] = var4;
                    var4 = false;
                    var1['animated'] = var4;
                    var1 = var2.bind(var3)(var1);
case 13:
                    var1 = undefined;
                    return var1;
                }
            };
            var10 = var10.bind(var15)(var2, var3);
            var3 = _closure1_slot1;
            var2 = 15;
            var2 = var14[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var15 = var5 == var17;
            var14 = undefined;
            if(var15) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var14 = var17.id;
case 16:
            var2['gameId'] = var14;
            var2['scrollOffsetRef'] = var19;
            var2 = var3.bind(var4)(var2);
            var2 = _closure1_slot0;
            var29 = _closure1_slot2;
            var3 = var29[var7];
            var14 = var2.bind(var4)(var3);
            var3 = var14.useSharedValue;
            var15 = var3.bind(var14)(var32);
            _closure2_slot14 = var15;
            var3 = var29[var7];
            var14 = var2.bind(var4)(var3);
            var3 = var14.useSharedValue;
            var31 = var3.bind(var14)(var32);
            _closure2_slot15 = var31;
            var3 = var29[var7];
            var30 = var2.bind(var4)(var3);
            var22 = var30.useAnimatedReaction;
            var14 = function z() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot14;
                    var1 = var3.get;
                    var3 = var1.bind(var3)();
                    var1 = 0;
                    var1 = var3 > var1;
                    if(!var1) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var4 = _closure2_slot12;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var4 = _closure2_slot14;
                    var2 = var4.get;
                    var4 = var2.bind(var4)();
                    var2 = 56;
                    var2 = var4 - var2;
                    var1 = var3 >= var2;
case 18:
                    return var1;
                }
            };
            var3 = {};
            var3['heroHeaderHeight'] = var15;
            var3['scrollY'] = var23;
            var37 = 56;
            var3['STICKY_HEADER_HEIGHT'] = var37;
            var14['__closure'] = var3;
            var3 = 15395308691297.0;
            var14['__workletHash'] = var3;
            var3 = _closure1_slot10;
            var14['__initData'] = var3;
            var3 = function U(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var2 = arg2;
                    if(!(var1 !== var2)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                    var3 = _closure2_slot15;
                    var2 = var3.set;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 16;
                    var5 = var5[var4];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.withTiming;
                    var4 = 0;
                    if(!var1) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                    var4 = 1;
case 22:
                    var1 = {};
                    var7 = 150;
                    var1['duration'] = var7;
                    var1 = var5.bind(var6)(var4, var1);
                    var1 = var2.bind(var3)(var1);
case 20:
                    var1 = undefined;
                    return var1;
                }
            };
            var38 = {};
            var38['stickyHeaderVisible'] = var31;
            var39 = 16;
            var39 = var29[var39];
            var39 = var2.bind(var4)(var39);
            var39 = var39.withTiming;
            var38['withTiming'] = var39;
            var3['__closure'] = var38;
            var38 = 3161097061646.0;
            var3['__workletHash'] = var38;
            var38 = _closure1_slot11;
            var3['__initData'] = var38;
            var3 = var22.bind(var30)(var14, var3);
            var3 = var29[var7];
            var22 = var2.bind(var4)(var3);
            var14 = var22.useAnimatedStyle;
            var3 = function Q() {
                var1 = {};
                var3 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 14;
                var4 = var4[var2];
                var2 = undefined;
                var7 = var5.bind(var2)(var4);
                var6 = var7.interpolate;
                var4 = _closure2_slot15;
                var2 = var4.get;
                var5 = var2.bind(var4)();
                var4 = new Array(2);
                var2 = -56;
                var4[0] = var2;
                var2 = 0;
                var4[1] = var2;
                var2 = [0, 1];
                var2 = var6.bind(var7)(var5, var2, var4);
                var3['translateY'] = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1['transform'] = var2;
                return var1;
            };
            var30 = {};
            var38 = var29[var7];
            var38 = var2.bind(var4)(var38);
            var38 = var38.interpolate;
            var30['interpolate'] = var38;
            var30['stickyHeaderVisible'] = var31;
            var30['STICKY_HEADER_HEIGHT'] = var37;
            var3['__closure'] = var30;
            var30 = 16452163547712.0;
            var3['__workletHash'] = var30;
            var30 = _closure1_slot12;
            var3['__initData'] = var30;
            var14 = var14.bind(var22)(var3);
            var3 = 17;
            var3 = var29[var3];
            var30 = var2.bind(var4)(var3);
            var22 = var30.useCanSeeGameProfileMobileStoreLinks;
            var3 = 'GameProfileContent';
            var22 = var22.bind(var30)(var3);
            _closure2_slot16 = var22;
            var3 = var29[var7];
            var31 = var2.bind(var4)(var3);
            var30 = var31.useSharedValue;
            var3 = inf;
            var3 = var30.bind(var31)(var3);
            _closure2_slot17 = var3;
            var30 = _closure1_slot4;
            var31 = var30.useState;
            var35 = var31.bind(var30)(var35);
            var31 = _closure1_slot3;
            var31 = var31.bind(var4)(var35, var36);
            var32 = var31[var32];
            _closure2_slot18 = var32;
            var38 = var31[var33];
            _closure2_slot19 = var38;
            var31 = var29[var7];
            var36 = var2.bind(var4)(var31);
            var35 = var36.useAnimatedReaction;
            var33 = function Z() {
                var3 = _closure2_slot12;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var3 = _closure2_slot17;
                var1 = var3.get;
                var3 = var1.bind(var3)();
                var1 = 56;
                var1 = var3 - var1;
                var1 = var2 > var1;
                return var1;
            };
            var31 = {};
            var31['scrollY'] = var23;
            var31['storeLinksSectionBottomY'] = var3;
            var31['STICKY_HEADER_HEIGHT'] = var37;
            var33['__closure'] = var31;
            var31 = 14521195063038.0;
            var33['__workletHash'] = var31;
            var31 = _closure1_slot13;
            var33['__initData'] = var31;
            var31 = function X(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0006_ip = 23; continue _fun0006 }
case 21:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot19;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
case 23:
                    var1 = undefined;
                    return var1;
                }
            };
            var37 = {};
            var39 = var29[var7];
            var39 = var2.bind(var4)(var39);
            var39 = var39.runOnJS;
            var37['runOnJS'] = var39;
            var37['setShowGetButton'] = var38;
            var31['__closure'] = var37;
            var37 = 15045914286853.0;
            var31['__workletHash'] = var37;
            var37 = _closure1_slot14;
            var31['__initData'] = var37;
            var31 = var35.bind(var36)(var33, var31);
            var31 = 18;
            var31 = var29[var31];
            var33 = var2.bind(var4)(var31);
            var31 = var33.useGameProfileStoreWebsites;
            var35 = var31.bind(var33)(var17);
            _closure2_slot20 = var35;
            var33 = var30.useMemo;
            var31 = new Array(2);
            var31[0] = var35;
            var31[1] = var22;
            var22 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot16;
                    if(var1) { _fun0007_ip = 11; continue _fun0007 }
case 21:
                    var1 = new Array(0);
                    _fun0007_ip = 24; continue _fun0007;
case 11:
                    var4 = _closure2_slot20;
                    var3 = var4.map;
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 19;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5);
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.filter;
                    var2 = function(arg1) {
                        var2 = null;
                        var1 = arg1;
                        var1 = var2 != var1;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2);
case 24:
                    return var1;
                }
            };
            var22 = var33.bind(var30)(var22, var31);
            _closure2_slot21 = var22;
            var31 = var30.useRef;
            var31 = var31.bind(var30)(var4);
            _closure2_slot22 = var31;
            var31 = var30.useRef;
            var31 = var31.bind(var30)(var5);
            _closure2_slot23 = var31;
            var33 = var30.useEffect;
            var31 = new Array(1);
            var31[0] = var25;
            var25 = function() {
                var2 = _closure2_slot22;
                var1 = _closure2_slot11;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var25 = var33.bind(var30)(var25, var31);
            var33 = var30.useEffect;
            var31 = new Array(1);
            var31[0] = var28;
            var25 = function() {
                var2 = _closure2_slot23;
                var1 = _closure2_slot10;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var25 = var33.bind(var30)(var25, var31);
            var33 = var30.useCallback;
            var31 = new Array(3);
            var31[0] = var34;
            var31[1] = var27;
            var31[2] = var26;
            var25 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.trackGameProfileAction;
                    var2 = {};
                    var6 = _closure2_slot22;
                    var7 = var6.current;
                    var8 = null;
                    var9 = var8 != var7;
                    var6 = '';
                    if(!var9) { _fun0008_ip = 25; continue _fun0008 }
case 15:
                    var6 = var7;
case 25:
                    var2['gameName'] = var6;
                    var6 = _closure2_slot0;
                    var2['applicationId'] = var6;
                    var6 = arg1;
                    var2['action'] = var6;
                    var6 = _closure2_slot5;
                    var2['viewId'] = var6;
                    var6 = _closure2_slot23;
                    var7 = var6.current;
                    var9 = var8 == var7;
                    var6 = undefined;
                    if(var9) { _fun0008_ip = 26; continue _fun0008 }
case 27:
                    var7 = var7.guild;
                    var8 = var8 == var7;
                    var6 = undefined;
                    if(var8) { _fun0008_ip = 26; continue _fun0008 }
case 28:
                    var6 = var7.id;
case 26:
                    var2['officialGuildId'] = var6;
                    var5 = _closure2_slot1;
                    var2['source'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var25 = var33.bind(var30)(var25, var31);
            _closure2_slot24 = var25;
            var33 = var30.useCallback;
            var31 = new Array(3);
            var31[0] = var22;
            var31[1] = var25;
            var31[2] = var21;
            var21 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot21;
                    var1 = var1.length;
                    var5 = 1;
                    if(!(var5 !== var1)) { _fun0009_ip = 29; continue _fun0009 }
case 30:
                    var1 = _closure2_slot21;
                    var1 = var1.length;
                    if(!(var1 > var5)) { _fun0009_ip = 31; continue _fun0009 }
case 32:
                    var11 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 20;
                    var1 = var10[var1];
                    var9 = undefined;
                    var4 = var11.bind(var9)(var1);
                    var3 = var4.showActionSheet;
                    var1 = {};
                    var6 = 21;
                    var8 = var10[var6];
                    var8 = var11.bind(var9)(var8);
                    var8 = var8.ACTION_SHEET_KEY;
                    var1['key'] = var8;
                    var8 = _closure1_slot7;
                    var7 = _closure1_slot1;
                    var6 = var10[var6];
                    var7 = var7.bind(var9)(var6);
                    var6 = {};
                    var10 = _closure2_slot22;
                    var11 = var10.current;
                    var10 = null;
                    var12 = var10 != var11;
                    var10 = '';
                    if(!var12) { _fun0009_ip = 33; continue _fun0009 }
case 34:
                    var10 = var11;
case 33:
                    var6['gameName'] = var10;
                    var10 = _closure2_slot21;
                    var6['websiteButtons'] = var10;
                    var10 = _closure2_slot24;
                    var6['trackAction'] = var10;
                    var6 = var8.bind(var9)(var7, var6);
                    var1['content'] = var6;
                    var6 = 'stack';
                    var1['stackingBehavior'] = var6;
                    var1 = var3.bind(var4)(var1);
                    _fun0009_ip = 31; continue _fun0009;
case 29:
                    var4 = _closure1_slot3;
                    var1 = _closure2_slot21;
                    var3 = undefined;
                    var4 = var4.bind(var3)(var1, var5);
                    var1 = 0;
                    var1 = var4[var1];
                    var5 = _closure2_slot24;
                    var4 = var1.action;
                    var4 = var5.bind(var3)(var4);
                    var2 = _closure2_slot4;
                    var1 = var1.url;
                    var1 = var2.bind(var3)(var1);
case 31:
                    var1 = undefined;
                    return var1;
                }
            };
            var31 = var33.bind(var30)(var21, var31);
            _closure2_slot25 = var31;
            var35 = var30.useEffect;
            var33 = new Array(4);
            var33[0] = var34;
            var33[1] = var26;
            var33[2] = var20;
            var33[3] = var27;
            var21 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var7 = 11;
                    var2 = var1[var7];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.trackGameProfileOpen;
                    var2 = {};
                    var8 = _closure2_slot1;
                    var2['source'] = var8;
                    var8 = _closure2_slot5;
                    var2['viewId'] = var8;
                    var8 = _closure2_slot0;
                    var2['applicationId'] = var8;
                    var8 = _closure2_slot22;
                    var9 = var8.current;
                    var8 = null;
                    var10 = var8 != var9;
                    var8 = '';
                    if(!var10) { _fun0010_ip = 13; continue _fun0010 }
case 35:
                    var8 = var9;
case 13:
                    var2['gameName'] = var8;
                    var6 = _closure2_slot2;
                    var2['authorId'] = var6;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var7];
                    var5 = var6.bind(var1)(var5);
                    var5 = var5.GameProfileTypes;
                    var5 = var5.FullProfile;
                    var2['profileType'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var21 = var35.bind(var30)(var21, var33);
            var33 = var30.useEffect;
            var21 = new Array(4);
            var21[0] = var34;
            var21[1] = var26;
            var21[2] = var20;
            var21[3] = var27;
            var20 = function() {
                var1 = function() {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 11;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.trackGameProfileClose;
                        var2 = {};
                        var6 = _closure2_slot5;
                        var2['viewId'] = var6;
                        var6 = _closure2_slot0;
                        var2['applicationId'] = var6;
                        var6 = _closure2_slot22;
                        var8 = var6.current;
                        var7 = null;
                        var9 = var7 != var8;
                        var6 = '';
                        if(!var9) { _fun0011_ip = 36; continue _fun0011 }
case 37:
                        var6 = var8;
case 36:
                        var2['gameName'] = var6;
                        var6 = new Array(0);
                        var2['playedFriendIds'] = var6;
                        var6 = new Array(0);
                        var2['playedFriendsData'] = var6;
                        var6 = new Array(0);
                        var2['similarGames'] = var6;
                        var5 = _closure2_slot23;
                        var6 = var5.current;
                        var8 = var7 == var6;
                        var5 = undefined;
                        if(var8) { _fun0011_ip = 38; continue _fun0011 }
case 39:
                        var6 = var6.guild;
                        var7 = var7 == var6;
                        var5 = undefined;
                        if(var7) { _fun0011_ip = 38; continue _fun0011 }
case 40:
                        var5 = var6.id;
case 38:
                        var2['officialGuildId'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                return var1;
            };
            var20 = var33.bind(var30)(var20, var21);
            var21 = var30.useCallback;
            var20 = new Array(1);
            var20[0] = var15;
            var15 = function(arg1) {
                var3 = _closure2_slot14;
                var2 = var3.set;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var20 = var21.bind(var30)(var15, var20);
            var21 = var30.useCallback;
            var15 = new Array(1);
            var15[0] = var3;
            var3 = function(arg1) {
                var3 = _closure2_slot17;
                var2 = var3.set;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var21 = var21.bind(var30)(var3, var15);
            var15 = var30.useMemo;
            var3 = new Array(3);
            var3[0] = var22;
            var3[1] = var32;
            var3[2] = var31;
            var1 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var1 = _closure2_slot21;
                    var3 = var1.length;
                    var1 = 0;
                    var4 = var3 > var1;
                    var1 = undefined;
                    if(!var4) { _fun0012_ip = 41; continue _fun0012 }
case 42:
                    var2 = _closure2_slot18;
                    var1 = undefined;
                    if(!var2) { _fun0012_ip = 41; continue _fun0012 }
case 43:
                    var1 = function() {
                        var4 = _closure1_slot7;
                        var3 = _closure1_slot15;
                        var2 = {};
                        var1 = _closure2_slot25;
                        var2['onPress'] = var1;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
case 41:
                    return var1;
                }
            };
            var15 = var15.bind(var30)(var1, var3);
            var3 = _closure1_slot8;
            var1 = 22;
            var1 = var29[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {'ref': null, 'startExpanded': true, 'scrollable': true, 'handleDisabled': true};
            var1['ref'] = var18;
            var1['onExpand'] = var10;
            if(var8) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            if(!(var5 != var16)) { _fun0001_ip = 44; continue _fun0001 }
case 46:
            if(!(var5 != var17)) { _fun0001_ip = 44; continue _fun0001 }
case 47:
            var10 = _closure1_slot7;
            var8 = _closure1_slot0;
            var29 = _closure1_slot2;
            var5 = 23;
            var5 = var29[var5];
            var5 = var8.bind(var4)(var5);
            var8 = var5.BottomSheetScrollView;
            var5 = {};
            var5['ref'] = var13;
            var13 = var12.scrollView;
            var5['style'] = var13;
            var5['onScroll'] = var11;
            var18 = _closure1_slot7;
            var13 = _closure1_slot1;
            var11 = 24;
            var11 = var29[var11];
            var13 = var13.bind(var4)(var11);
            var11 = {};
            var11['application'] = var16;
            var11['game'] = var17;
            var11['officialInvite'] = var28;
            var11['viewId'] = var27;
            var11['source'] = var26;
            var11['trackAction'] = var25;
            var11['onOfficialGuildInviteResolved'] = var24;
            var11['closeModal'] = var9;
            var11['scrollY'] = var23;
            var11['websiteButtons'] = var22;
            var11['onStoreLinksMeasured'] = var21;
            var11['onHeaderHeightMeasured'] = var20;
            var11['scrollOffsetRef'] = var19;
            var11 = var18.bind(var4)(var13, var11);
            var5['children'] = var11;
            var8 = var10.bind(var4)(var8, var5);
            _fun0001_ip = 48; continue _fun0001;
case 44:
            var11 = _closure1_slot7;
            var10 = _closure1_slot5;
            var5 = {};
            var13 = var12.loadingContainer;
            var5['style'] = var13;
            var19 = _closure1_slot7;
            var18 = _closure1_slot6;
            var13 = {'animating': true, 'size': 'large'};
            var13 = var19.bind(var4)(var18, var13);
            var5['children'] = var13;
            var8 = var11.bind(var4)(var10, var5);
case 48:
            var5 = new Array(3);
            var5[0] = var8;
            var11 = _closure1_slot7;
            var13 = _closure1_slot1;
            var10 = _closure1_slot2;
            var7 = var10[var7];
            var7 = var13.bind(var4)(var7);
            var8 = var7.View;
            var7 = {};
            var18 = var12.stickyHeader;
            var12 = new Array(2);
            var12[0] = var18;
            var12[1] = var14;
            var7['style'] = var12;
            var12 = 'box-none';
            var7['pointerEvents'] = var12;
            var14 = _closure1_slot7;
            var12 = 25;
            var12 = var10[var12];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var12['game'] = var17;
            var12['application'] = var16;
            var12['headerRight'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var7['children'] = var12;
            var7 = var11.bind(var4)(var8, var7);
            var5[1] = var7;
            var8 = _closure1_slot7;
            var7 = _closure1_slot0;
            var6 = 26;
            var6 = var10[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.ActionSheetHeaderBar;
            var6 = {};
            var10 = 'overlay';
            var6['variant'] = var10;
            var6['onPress'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();