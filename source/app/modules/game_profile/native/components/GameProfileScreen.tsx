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
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_profile/native/components/GameProfileScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GameProfileScreen(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var33 = var2.gameId;
            var _closure2_slot0 = var33;
            var25 = var2.source;
            var _closure2_slot1 = var25;
            var19 = var2.sourceUserId;
            var _closure2_slot2 = var19;
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
            var3 = _closure1_slot9;
            var12 = var3.bind(var4)();
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 8;
            var3 = var11[var3];
            var5 = var8.bind(var4)(var3);
            var3 = var5.useBottomSheetRef;
            var3 = var3.bind(var5)();
            var17 = var3.bottomSheetRef;
            var9 = var3.bottomSheetClose;
            var7 = _closure1_slot1;
            var3 = 9;
            var3 = var11[var3];
            var5 = var7.bind(var4)(var3);
            var3 = 10;
            var3 = var11[var3];
            var3 = var7.bind(var4)(var3);
            var3 = var3.openURL;
            var20 = var5.bind(var4)(var3);
            _closure2_slot4 = var20;
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
            var7 = _closure1_slot3;
            var30 = 1;
            var3 = var7.bind(var4)(var3, var30);
            var31 = 0;
            var26 = var3[var31];
            _closure2_slot5 = var26;
            var3 = var10.useRef;
            var5 = null;
            var13 = var3.bind(var10)(var5);
            _closure2_slot6 = var13;
            var3 = var10.useRef;
            var18 = var3.bind(var10)(var31);
            _closure2_slot7 = var18;
            var3 = 12;
            var3 = var11[var3];
            var8 = var8.bind(var4)(var3);
            var3 = var8.useGame;
            var3 = var3.bind(var8)(var33);
            var16 = var3.data;
            var8 = var3.isLoading;
            var3 = var10.useState;
            var3 = var3.bind(var10)(var5);
            var34 = 2;
            var3 = var7.bind(var4)(var3, var34);
            var27 = var3[var31];
            _closure2_slot8 = var27;
            var23 = var3[var30];
            var3 = var5 == var16;
            var24 = undefined;
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var24 = var16.name;
case 4:
            _closure2_slot9 = var24;
            var10 = _closure1_slot0;
            var14 = _closure1_slot2;
            var7 = 13;
            var3 = var14[var7];
            var10 = var10.bind(var4)(var3);
            var3 = var10.useSharedValue;
            var22 = var3.bind(var10)(var31);
            _closure2_slot10 = var22;
            var15 = _closure1_slot4;
            var11 = var15.useCallback;
            var10 = new Array(1);
            var10[0] = var22;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.contentOffset;
                var2 = var1.y;
                var4 = _closure2_slot10;
                var3 = var4.set;
                var3 = var3.bind(var4)(var2);
                var1 = _closure2_slot7;
                var1['current'] = var2;
                var1 = undefined;
                return var1;
            };
            var11 = var11.bind(var15)(var3, var10);
            var3 = var15.useRef;
            var32 = false;
            var3 = var3.bind(var15)(var32);
            _closure2_slot11 = var3;
            var10 = var15.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var1 = 0;
                    var1 = var2 > var1;
                    if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var2 = _closure2_slot11;
                    var2 = var2.current;
                    var1 = !var2;
case 6:
                    if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var2 = _closure2_slot11;
                    var1 = true;
                    var2['current'] = var1;
                    var1 = _closure2_slot6;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0002_ip = 8; continue _fun0002 }
case 10:
                    var2 = var3.scrollTo;
                    var1 = {};
                    var4 = _closure2_slot3;
                    var1['y'] = var4;
                    var4 = false;
                    var1['animated'] = var4;
                    var1 = var2.bind(var3)(var1);
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            var10 = var10.bind(var15)(var2, var3);
            var3 = _closure1_slot1;
            var2 = 14;
            var2 = var14[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var15 = var5 == var16;
            var14 = undefined;
            if(var15) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var14 = var16.id;
case 11:
            var2['gameId'] = var14;
            var2['scrollOffsetRef'] = var18;
            var2 = var3.bind(var4)(var2);
            var2 = _closure1_slot0;
            var28 = _closure1_slot2;
            var3 = var28[var7];
            var14 = var2.bind(var4)(var3);
            var3 = var14.useSharedValue;
            var15 = var3.bind(var14)(var31);
            _closure2_slot12 = var15;
            var3 = var28[var7];
            var14 = var2.bind(var4)(var3);
            var3 = var14.useSharedValue;
            var36 = var3.bind(var14)(var31);
            _closure2_slot13 = var36;
            var3 = var28[var7];
            var29 = var2.bind(var4)(var3);
            var21 = var29.useAnimatedReaction;
            var14 = function M() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot12;
                    var1 = var3.get;
                    var3 = var1.bind(var3)();
                    var1 = 0;
                    var1 = var3 > var1;
                    if(!var1) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var4 = _closure2_slot10;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var4 = _closure2_slot12;
                    var2 = var4.get;
                    var4 = var2.bind(var4)();
                    var2 = 56;
                    var2 = var4 - var2;
                    var1 = var3 >= var2;
case 13:
                    return var1;
                }
            };
            var3 = {};
            var3['heroHeaderHeight'] = var15;
            var3['scrollY'] = var22;
            var35 = 56;
            var3['STICKY_HEADER_HEIGHT'] = var35;
            var14['__closure'] = var3;
            var3 = 15395308691297.0;
            var14['__workletHash'] = var3;
            var3 = _closure1_slot10;
            var14['__initData'] = var3;
            var3 = function J(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var2 = arg2;
                    if(!(var1 !== var2)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var3 = _closure2_slot13;
                    var2 = var3.set;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 15;
                    var5 = var5[var4];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.withTiming;
                    var4 = 0;
                    if(!var1) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var4 = 1;
case 17:
                    var1 = {};
                    var7 = 150;
                    var1['duration'] = var7;
                    var1 = var5.bind(var6)(var4, var1);
                    var1 = var2.bind(var3)(var1);
case 15:
                    var1 = undefined;
                    return var1;
                }
            };
            var37 = {};
            var37['stickyHeaderVisible'] = var36;
            var38 = 15;
            var38 = var28[var38];
            var38 = var2.bind(var4)(var38);
            var38 = var38.withTiming;
            var37['withTiming'] = var38;
            var3['__closure'] = var37;
            var37 = 3161097061646.0;
            var3['__workletHash'] = var37;
            var37 = _closure1_slot11;
            var3['__initData'] = var37;
            var3 = var21.bind(var29)(var14, var3);
            var3 = var28[var7];
            var21 = var2.bind(var4)(var3);
            var14 = var21.useAnimatedStyle;
            var3 = function z() {
                var1 = {};
                var3 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 13;
                var4 = var4[var2];
                var2 = undefined;
                var7 = var5.bind(var2)(var4);
                var6 = var7.interpolate;
                var4 = _closure2_slot13;
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
            var29 = {};
            var37 = var28[var7];
            var37 = var2.bind(var4)(var37);
            var37 = var37.interpolate;
            var29['interpolate'] = var37;
            var29['stickyHeaderVisible'] = var36;
            var29['STICKY_HEADER_HEIGHT'] = var35;
            var3['__closure'] = var29;
            var29 = 16452163547712.0;
            var3['__workletHash'] = var29;
            var29 = _closure1_slot12;
            var3['__initData'] = var29;
            var14 = var14.bind(var21)(var3);
            var3 = var28[var7];
            var29 = var2.bind(var4)(var3);
            var21 = var29.useSharedValue;
            var3 = inf;
            var3 = var21.bind(var29)(var3);
            _closure2_slot14 = var3;
            var29 = _closure1_slot4;
            var21 = var29.useState;
            var32 = var21.bind(var29)(var32);
            var21 = _closure1_slot3;
            var21 = var21.bind(var4)(var32, var34);
            var31 = var21[var31];
            _closure2_slot15 = var31;
            var36 = var21[var30];
            _closure2_slot16 = var36;
            var21 = var28[var7];
            var34 = var2.bind(var4)(var21);
            var32 = var34.useAnimatedReaction;
            var30 = function q() {
                var3 = _closure2_slot10;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var3 = _closure2_slot14;
                var1 = var3.get;
                var3 = var1.bind(var3)();
                var1 = 56;
                var1 = var3 - var1;
                var1 = var2 > var1;
                return var1;
            };
            var21 = {};
            var21['scrollY'] = var22;
            var21['storeLinksSectionBottomY'] = var3;
            var21['STICKY_HEADER_HEIGHT'] = var35;
            var30['__closure'] = var21;
            var21 = 14521195063038.0;
            var30['__workletHash'] = var21;
            var21 = _closure1_slot13;
            var30['__initData'] = var21;
            var21 = function W(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0005_ip = 18; continue _fun0005 }
case 16:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot16;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
case 18:
                    var1 = undefined;
                    return var1;
                }
            };
            var35 = {};
            var37 = var28[var7];
            var37 = var2.bind(var4)(var37);
            var37 = var37.runOnJS;
            var35['runOnJS'] = var37;
            var35['setShowGetButton'] = var36;
            var21['__closure'] = var35;
            var35 = 15045914286853.0;
            var21['__workletHash'] = var35;
            var35 = _closure1_slot14;
            var21['__initData'] = var35;
            var21 = var32.bind(var34)(var30, var21);
            var21 = 16;
            var21 = var28[var21];
            var30 = var2.bind(var4)(var21);
            var21 = var30.useGameProfileStoreWebsites;
            var21 = var21.bind(var30)(var16);
            _closure2_slot17 = var21;
            var32 = var29.useMemo;
            var30 = new Array(1);
            var30[0] = var21;
            var21 = function() {
                var3 = _closure2_slot17;
                var2 = var3.map;
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 17;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var3 = var2.bind(var3)(var1);
                var2 = var3.filter;
                var1 = function(arg1) {
                    var2 = null;
                    var1 = arg1;
                    var1 = var2 != var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var21 = var32.bind(var29)(var21, var30);
            _closure2_slot18 = var21;
            var30 = var29.useRef;
            var30 = var30.bind(var29)(var4);
            _closure2_slot19 = var30;
            var30 = var29.useRef;
            var30 = var30.bind(var29)(var5);
            _closure2_slot20 = var30;
            var32 = var29.useEffect;
            var30 = new Array(1);
            var30[0] = var24;
            var24 = function() {
                var2 = _closure2_slot19;
                var1 = _closure2_slot9;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var24 = var32.bind(var29)(var24, var30);
            var32 = var29.useEffect;
            var30 = new Array(1);
            var30[0] = var27;
            var24 = function() {
                var2 = _closure2_slot20;
                var1 = _closure2_slot8;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var24 = var32.bind(var29)(var24, var30);
            var32 = var29.useCallback;
            var30 = new Array(3);
            var30[0] = var33;
            var30[1] = var26;
            var30[2] = var25;
            var24 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 11;
                    var5 = var4[var2];
                    var1 = undefined;
                    var8 = var3.bind(var1)(var5);
                    var7 = var8.getGuildIdAndVerifiedFromInvite;
                    var6 = _closure2_slot20;
                    var6 = var6.current;
                    var6 = var7.bind(var8)(var6);
                    var7 = var6.guildId;
                    var6 = var6.isVerified;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.trackGameProfileAction;
                    var2 = {};
                    var8 = _closure2_slot19;
                    var9 = var8.current;
                    var8 = null;
                    var10 = var8 != var9;
                    var8 = '';
                    if(!var10) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                    var8 = var9;
case 19:
                    var2['gameName'] = var8;
                    var8 = _closure2_slot0;
                    var2['gameId'] = var8;
                    var8 = arg1;
                    var2['action'] = var8;
                    var8 = _closure2_slot5;
                    var2['viewId'] = var8;
                    var2['guildId'] = var7;
                    var2['isVerified'] = var6;
                    var5 = _closure2_slot1;
                    var2['source'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var24 = var32.bind(var29)(var24, var30);
            _closure2_slot21 = var24;
            var32 = var29.useCallback;
            var30 = new Array(3);
            var30[0] = var21;
            var30[1] = var24;
            var30[2] = var20;
            var20 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot18;
                    var1 = var1.length;
                    var5 = 1;
                    if(!(var5 !== var1)) { _fun0007_ip = 21; continue _fun0007 }
case 22:
                    var1 = _closure2_slot18;
                    var1 = var1.length;
                    if(!(var1 > var5)) { _fun0007_ip = 23; continue _fun0007 }
case 24:
                    var11 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 18;
                    var1 = var10[var1];
                    var9 = undefined;
                    var4 = var11.bind(var9)(var1);
                    var3 = var4.showActionSheet;
                    var1 = {};
                    var6 = 19;
                    var8 = var10[var6];
                    var8 = var11.bind(var9)(var8);
                    var8 = var8.ACTION_SHEET_KEY;
                    var1['key'] = var8;
                    var8 = _closure1_slot7;
                    var7 = _closure1_slot1;
                    var6 = var10[var6];
                    var7 = var7.bind(var9)(var6);
                    var6 = {};
                    var10 = _closure2_slot19;
                    var11 = var10.current;
                    var10 = null;
                    var12 = var10 != var11;
                    var10 = '';
                    if(!var12) { _fun0007_ip = 25; continue _fun0007 }
case 26:
                    var10 = var11;
case 25:
                    var6['gameName'] = var10;
                    var10 = _closure2_slot18;
                    var6['websiteButtons'] = var10;
                    var10 = _closure2_slot21;
                    var6['trackAction'] = var10;
                    var6 = var8.bind(var9)(var7, var6);
                    var1['content'] = var6;
                    var6 = 'stack';
                    var1['stackingBehavior'] = var6;
                    var1 = var3.bind(var4)(var1);
                    _fun0007_ip = 23; continue _fun0007;
case 21:
                    var4 = _closure1_slot3;
                    var1 = _closure2_slot18;
                    var3 = undefined;
                    var4 = var4.bind(var3)(var1, var5);
                    var1 = 0;
                    var1 = var4[var1];
                    var5 = _closure2_slot21;
                    var4 = var1.action;
                    var4 = var5.bind(var3)(var4);
                    var2 = _closure2_slot4;
                    var1 = var1.url;
                    var1 = var2.bind(var3)(var1);
case 23:
                    var1 = undefined;
                    return var1;
                }
            };
            var30 = var32.bind(var29)(var20, var30);
            _closure2_slot22 = var30;
            var34 = var29.useEffect;
            var32 = new Array(4);
            var32[0] = var33;
            var32[1] = var25;
            var32[2] = var19;
            var32[3] = var26;
            var20 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
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
                    var2['gameId'] = var8;
                    var8 = _closure2_slot19;
                    var9 = var8.current;
                    var8 = null;
                    var10 = var8 != var9;
                    var8 = '';
                    if(!var10) { _fun0008_ip = 27; continue _fun0008 }
case 28:
                    var8 = var9;
case 27:
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
            var20 = var34.bind(var29)(var20, var32);
            var32 = var29.useEffect;
            var20 = new Array(4);
            var20[0] = var33;
            var20[1] = var25;
            var20[2] = var19;
            var20[3] = var26;
            var19 = function() {
                var1 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 11;
                        var5 = var4[var2];
                        var1 = undefined;
                        var8 = var3.bind(var1)(var5);
                        var6 = var8.getGuildIdAndVerifiedFromInvite;
                        var5 = _closure2_slot20;
                        var5 = var5.current;
                        var5 = var6.bind(var8)(var5);
                        var6 = var5.guildId;
                        var5 = var5.isVerified;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.trackGameProfileClose;
                        var2 = {};
                        var8 = _closure2_slot5;
                        var2['viewId'] = var8;
                        var8 = _closure2_slot0;
                        var2['gameId'] = var8;
                        var7 = _closure2_slot19;
                        var8 = var7.current;
                        var7 = null;
                        var9 = var7 != var8;
                        var7 = '';
                        if(!var9) { _fun0009_ip = 29; continue _fun0009 }
case 30:
                        var7 = var8;
case 29:
                        var2['gameName'] = var7;
                        var7 = new Array(0);
                        var2['playedFriendIds'] = var7;
                        var7 = new Array(0);
                        var2['playedFriendsData'] = var7;
                        var7 = new Array(0);
                        var2['similarGames'] = var7;
                        var2['guildId'] = var6;
                        var2['isVerified'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                return var1;
            };
            var19 = var32.bind(var29)(var19, var20);
            var20 = var29.useCallback;
            var19 = new Array(1);
            var19[0] = var15;
            var15 = function(arg1) {
                var3 = _closure2_slot12;
                var2 = var3.set;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var19 = var20.bind(var29)(var15, var19);
            var20 = var29.useCallback;
            var15 = new Array(1);
            var15[0] = var3;
            var3 = function(arg1) {
                var3 = _closure2_slot14;
                var2 = var3.set;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var20 = var20.bind(var29)(var3, var15);
            var15 = var29.useMemo;
            var3 = new Array(3);
            var3[0] = var21;
            var3[1] = var31;
            var3[2] = var30;
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = _closure2_slot18;
                    var3 = var1.length;
                    var1 = 0;
                    var4 = var3 > var1;
                    var1 = undefined;
                    if(!var4) { _fun0010_ip = 31; continue _fun0010 }
case 32:
                    var2 = _closure2_slot15;
                    var1 = undefined;
                    if(!var2) { _fun0010_ip = 31; continue _fun0010 }
case 33:
                    var1 = function() {
                        var4 = _closure1_slot7;
                        var3 = _closure1_slot15;
                        var2 = {};
                        var1 = _closure2_slot22;
                        var2['onPress'] = var1;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
case 31:
                    return var1;
                }
            };
            var15 = var15.bind(var29)(var1, var3);
            var3 = _closure1_slot8;
            var1 = 20;
            var1 = var28[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {'ref': null, 'startExpanded': true, 'scrollable': true, 'handleDisabled': true};
            var1['ref'] = var17;
            var1['onExpand'] = var10;
            if(var8) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            if(!(var5 != var16)) { _fun0001_ip = 34; continue _fun0001 }
case 36:
            var10 = _closure1_slot7;
            var8 = _closure1_slot0;
            var28 = _closure1_slot2;
            var5 = 21;
            var5 = var28[var5];
            var5 = var8.bind(var4)(var5);
            var8 = var5.BottomSheetScrollView;
            var5 = {};
            var5['ref'] = var13;
            var13 = var12.scrollView;
            var5['style'] = var13;
            var5['onScroll'] = var11;
            var17 = _closure1_slot7;
            var13 = _closure1_slot1;
            var11 = 22;
            var11 = var28[var11];
            var13 = var13.bind(var4)(var11);
            var11 = {};
            var11['game'] = var16;
            var11['invite'] = var27;
            var11['viewId'] = var26;
            var11['source'] = var25;
            var11['trackAction'] = var24;
            var11['onGuildInviteResolved'] = var23;
            var11['closeModal'] = var9;
            var11['scrollY'] = var22;
            var11['websiteButtons'] = var21;
            var11['onStoreLinksMeasured'] = var20;
            var11['onHeaderHeightMeasured'] = var19;
            var11['scrollOffsetRef'] = var18;
            var11 = var17.bind(var4)(var13, var11);
            var5['children'] = var11;
            var8 = var10.bind(var4)(var8, var5);
            _fun0001_ip = 37; continue _fun0001;
case 34:
            var11 = _closure1_slot7;
            var10 = _closure1_slot5;
            var5 = {};
            var13 = var12.loadingContainer;
            var5['style'] = var13;
            var18 = _closure1_slot7;
            var17 = _closure1_slot6;
            var13 = {'animating': true, 'size': 'large'};
            var13 = var18.bind(var4)(var17, var13);
            var5['children'] = var13;
            var8 = var11.bind(var4)(var10, var5);
case 37:
            var5 = new Array(3);
            var5[0] = var8;
            var11 = _closure1_slot7;
            var13 = _closure1_slot1;
            var10 = _closure1_slot2;
            var7 = var10[var7];
            var7 = var13.bind(var4)(var7);
            var8 = var7.View;
            var7 = {};
            var17 = var12.stickyHeader;
            var12 = new Array(2);
            var12[0] = var17;
            var12[1] = var14;
            var7['style'] = var12;
            var12 = 'box-none';
            var7['pointerEvents'] = var12;
            var14 = _closure1_slot7;
            var12 = 23;
            var12 = var10[var12];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var12['game'] = var16;
            var12['headerRight'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var7['children'] = var12;
            var7 = var11.bind(var4)(var8, var7);
            var5[1] = var7;
            var8 = _closure1_slot7;
            var7 = _closure1_slot0;
            var6 = 24;
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