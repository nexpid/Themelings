// app/modules/search/native/components/tabs/SearchTabsTransitionGroup.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function getItemKey(arg1) {
        var1 = arg1;
        var3 = var1.items;
        var2 = var3.map;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.id;
            return var1;
        };
        var3 = var2.bind(var3)(var1);
        var2 = var3.join;
        var1 = '-';
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot10 = var1;
    var1 = function AnimatedTabs(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var11 = var1.state;
            var _closure2_slot0 = var11;
            var3 = var1.transitionState;
            var _closure2_slot1 = var3;
            var14 = var1.cleanUp;
            var _closure2_slot2 = var14;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 4;
            var7 = var6[var1];
            var8 = var9.bind(var4)(var7);
            var7 = var8.useSharedValue;
            var15 = 5;
            var6 = var6[var15];
            var6 = var9.bind(var4)(var6);
            var6 = var6.TransitionStates;
            var9 = var6.MOUNTED;
            var6 = 0;
            if(!(var3 === var9)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = 1;
case 2:
            var13 = var7.bind(var8)(var6);
            _closure2_slot3 = var13;
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = var12[var1];
            var9 = var6.bind(var4)(var7);
            var8 = var9.useAnimatedStyle;
            var7 = function f() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = {};
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var2 = 6;
                    var2 = var13[var2];
                    var11 = undefined;
                    var8 = var12.bind(var11)(var2);
                    var7 = var8.withSpring;
                    var5 = _closure2_slot3;
                    var4 = var5.get;
                    var6 = var4.bind(var5)();
                    var4 = 7;
                    var4 = var13[var4];
                    var4 = var12.bind(var11)(var4);
                    var16 = var4.springStandard;
                    var4 = function t(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var1 = arg1;
                            if(!var1) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                            var3 = _closure2_slot1;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 5;
                            var4 = var4[var2];
                            var2 = undefined;
                            var2 = var5.bind(var2)(var4);
                            var2 = var2.TransitionStates;
                            var2 = var2.YEETED;
                            var1 = var3 === var2;
case 4:
                            if(!var1) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 4;
                            var1 = var2[var1];
                            var2 = undefined;
                            var4 = var3.bind(var2)(var1);
                            var3 = var4.runOnJS;
                            var1 = _closure2_slot2;
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.bind(var2)();
case 6:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var9 = {};
                    var10 = _closure2_slot1;
                    var9['transitionState'] = var10;
                    var10 = 5;
                    var10 = var13[var10];
                    var10 = var12.bind(var11)(var10);
                    var10 = var10.TransitionStates;
                    var9['TransitionStates'] = var10;
                    var10 = 4;
                    var10 = var13[var10];
                    var10 = var12.bind(var11)(var10);
                    var10 = var10.runOnJS;
                    var9['runOnJS'] = var10;
                    var10 = _closure2_slot2;
                    var9['cleanUp'] = var10;
                    var4['__closure'] = var9;
                    var9 = 15209468679721.0;
                    var4['__workletHash'] = var9;
                    var3 = _closure1_slot6;
                    var4['__initData'] = var3;
                    var15 = 'respect-motion-settings';
                    var18 = var8;
                    var17 = var6;
                    var14 = var4;
                    var3 = var18[var7](var17, var16, var15, var14, var13);
                    var1['opacity'] = var3;
                    var3 = _closure2_slot3;
                    var2 = var3.get;
                    var4 = var2.bind(var3)();
                    var2 = 'absolute';
                    var3 = 1;
                    if(!(var3 === var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var2 = 'relative';
case 8:
                    var1['position'] = var2;
                    return var1;
                }
            };
            var10 = {};
            var16 = 6;
            var16 = var12[var16];
            var16 = var6.bind(var4)(var16);
            var16 = var16.withSpring;
            var10['withSpring'] = var16;
            var10['opacity'] = var13;
            var16 = 7;
            var16 = var12[var16];
            var16 = var6.bind(var4)(var16);
            var16 = var16.springStandard;
            var10['springStandard'] = var16;
            var10['transitionState'] = var3;
            var15 = var12[var15];
            var15 = var6.bind(var4)(var15);
            var15 = var15.TransitionStates;
            var10['TransitionStates'] = var15;
            var15 = var12[var1];
            var15 = var6.bind(var4)(var15);
            var15 = var15.runOnJS;
            var10['runOnJS'] = var15;
            var10['cleanUp'] = var14;
            var7['__closure'] = var10;
            var10 = 10740262883803.0;
            var7['__workletHash'] = var10;
            var10 = _closure1_slot5;
            var7['__initData'] = var10;
            var7 = var8.bind(var9)(var7);
            var10 = _closure1_slot3;
            var9 = var10.useEffect;
            var8 = new Array(2);
            var8[0] = var13;
            var8[1] = var3;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure2_slot3;
                    var3 = var4.set;
                    var6 = _closure2_slot1;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.TransitionStates;
                    var5 = var2.YEETED;
                    var2 = 1;
                    if(!(var6 === var5)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                    var2 = 0;
case 10:
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var3 = var9.bind(var10)(var3, var8);
            var3 = function useCountFormatter() {
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 2;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var4 = var3.SearchResultExactCountEnabled;
                var3 = var4.useSetting;
                var5 = var3.bind(var4)();
                var _closure3_slot0 = var5;
                var4 = _closure1_slot3;
                var3 = var4.useCallback;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var4 = arg1;
                        var1 = _closure3_slot0;
                        if(var1) { _fun0005_ip = 12; continue _fun0005 }
case 13:
                        var3 = 1000;
                        if(!(var4 > var3)) { _fun0005_ip = 12; continue _fun0005 }
case 14:
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 3;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var5.bind(var1)(var2);
                        var1 = var2.defaultCountFormatter;
                        var5 = var1.bind(var2)(var3);
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var3 = var1.concat;
                        var2 = '(';
                        var1 = '+)';
                        var1 = var3.bind(var2)(var5, var1);
                        _fun0005_ip = 15; continue _fun0005;
case 12:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 3;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var5.bind(var2)(var3);
                        var2 = var3.defaultCountFormatter;
                        var5 = var2.bind(var3)(var4);
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var4 = var2.concat;
                        var3 = '(';
                        var2 = ')';
                        var1 = var4.bind(var3)(var5, var2);
case 15:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var8 = var3.bind(var4)();
            var10 = _closure1_slot3;
            var9 = var10.useContext;
            var3 = 8;
            var3 = var12[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.SwipeForMemberListContext;
            var10 = var9.bind(var10)(var3);
            _closure2_slot4 = var10;
            var14 = _closure1_slot3;
            var13 = var14.useCallback;
            var9 = function h() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 16; continue _fun0006 }
case 13:
                    var1 = _closure2_slot4;
                    var3 = var1.disallowGesture;
                    var2 = var3.set;
                    var1 = false;
                    var1 = var2.bind(var3)(var1);
case 16:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = {};
            var3['swipeForMemberListContext'] = var10;
            var9['__closure'] = var3;
            var3 = 5080152010224.0;
            var9['__workletHash'] = var3;
            var3 = _closure1_slot7;
            var9['__initData'] = var3;
            var3 = new Array(1);
            var3[0] = var10;
            var9 = var13.bind(var14)(var9, var3);
            var3 = var12[var1];
            var14 = var6.bind(var4)(var3);
            var13 = var14.useAnimatedReaction;
            var3 = function F() {
                var1 = _closure2_slot0;
                var2 = var1.scrollOffset;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var15 = {};
            var15['state'] = var11;
            var3['__closure'] = var15;
            var15 = 7791091456487.0;
            var3['__workletHash'] = var15;
            var15 = _closure1_slot8;
            var3['__initData'] = var15;
            var2 = function w(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0007_ip = 17; continue _fun0007 }
case 18:
                    var4 = _closure2_slot4;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0007_ip = 17; continue _fun0007 }
case 14:
                    var1 = _closure2_slot4;
                    var2 = var1.disallowGesture;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var3);
case 17:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = {};
            var15['swipeForMemberListContext'] = var10;
            var2['__closure'] = var15;
            var15 = 15386779064911.0;
            var2['__workletHash'] = var15;
            var15 = _closure1_slot9;
            var2['__initData'] = var15;
            var2 = var13.bind(var14)(var3, var2);
            var3 = _closure1_slot4;
            var2 = _closure1_slot1;
            var1 = var12[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var1['style'] = var7;
            var7 = _closure1_slot4;
            var5 = 9;
            var5 = var12[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Tabs;
            var5 = {};
            var5['state'] = var11;
            var11 = false;
            var5['grow'] = var11;
            var5['formatCount'] = var8;
            var8 = null;
            var12 = var8 == var10;
            var11 = undefined;
            if(var12) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var11 = var10.gesture;
case 19:
            var5['simultaneousHandlers'] = var11;
            var10 = var8 != var10;
            var8 = undefined;
            if(!var10) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var8 = var9;
case 21:
            var5['onEndDrag'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function renderItem(arg1, arg2, arg3, arg4) {
        var5 = _closure1_slot4;
        var4 = _closure1_slot11;
        var3 = {};
        var1 = arg2;
        var3['state'] = var1;
        var1 = arg3;
        var3['transitionState'] = var1;
        var1 = arg4;
        var3['cleanUp'] = var1;
        var2 = undefined;
        var1 = arg1;
        var1 = var5.bind(var2)(var4, var3, var1);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = {};
    var7 = "function SearchTabsTransitionGroupTsx1(){const{withSpring,opacity,springStandard,transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,'respect-motion-settings',function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}}),position:opacity.get()===1?'relative':'absolute'};}";
    var4['code'] = var7;
    var _closure1_slot5 = var4;
    var4 = {};
    var7 = 'function SearchTabsTransitionGroupTsx2(finished){const{transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}}';
    var4['code'] = var7;
    var _closure1_slot6 = var4;
    var4 = {};
    var7 = 'function SearchTabsTransitionGroupTsx3(){const{swipeForMemberListContext}=this.__closure;var _swipeForMemberListCo;(_swipeForMemberListCo=swipeForMemberListContext)===null||_swipeForMemberListCo===void 0||_swipeForMemberListCo.disallowGesture.set(false);}';
    var4['code'] = var7;
    var _closure1_slot7 = var4;
    var4 = {};
    var7 = 'function SearchTabsTransitionGroupTsx4(){const{state}=this.__closure;return state.scrollOffset.get()>0;}';
    var4['code'] = var7;
    var _closure1_slot8 = var4;
    var4 = {};
    var7 = 'function SearchTabsTransitionGroupTsx5(isOffsetFromStart,prevIsOffsetFromStart){const{swipeForMemberListContext}=this.__closure;if(isOffsetFromStart!==prevIsOffsetFromStart){var _swipeForMemberListCo;(_swipeForMemberListCo=swipeForMemberListContext)===null||_swipeForMemberListCo===void 0||_swipeForMemberListCo.disallowGesture.set(isOffsetFromStart);}}';
    var4['code'] = var7;
    var _closure1_slot9 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/components/tabs/SearchTabsTransitionGroup.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SearchTabsTransitionGroup(arg1) {
        var1 = arg1;
        var7 = var1.state;
        var4 = _closure1_slot4;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 5;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.TransitionGroup;
        var1 = {};
        var6 = new Array(1);
        var6[0] = var7;
        var1['items'] = var6;
        var6 = _closure1_slot10;
        var1['getItemKey'] = var6;
        var5 = _closure1_slot12;
        var1['renderItem'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();