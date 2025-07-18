// app/design/components/SegmentedControl/native/SegmentedControl.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot4 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = {'mass': 0.3, 'damping': 13, 'stiffness': 100, 'restDisplacementThreshold': 0.001, 'overshootClamping': true};
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        var8 = arg1;
        var1 = {};
        var2 = {};
        var7 = 1;
        var2['flexGrow'] = var7;
        var1['scrollContentContainer'] = var2;
        var2 = {'backgroundColor': null, 'borderRadius': null, 'paddingVertical': null, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 4;
        var9 = var6[var3];
        var4 = undefined;
        var9 = var5.bind(var4)(var9);
        var9 = var9.colors;
        var9 = var9.INPUT_BACKGROUND;
        var2['backgroundColor'] = var9;
        var9 = var6[var3];
        var9 = var5.bind(var4)(var9);
        var9 = var9.radii;
        var9 = var9.lg;
        var9 = var9 + var8;
        var2['borderRadius'] = var9;
        var2['paddingVertical'] = var8;
        var1['controlsContainer'] = var2;
        var2 = {'position': 'absolute', 'width': '100%', 'height': '100%', 'borderRadius': null, 'flexDirection': 'row'};
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.radii;
        var8 = var8.lg;
        var2['borderRadius'] = var8;
        var1['indicatorContainer'] = var2;
        var2 = {};
        var2['flex'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.REDESIGN_INPUT_CONTROL_ACTIVE_BG;
        var2['backgroundColor'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.radii;
        var7 = var7.lg;
        var2['borderRadius'] = var7;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.shadows;
        var10 = var3.SHADOW_LOW;
        var11 = var2;
        var3 = copyDataProperties(var11, var10);
        var1['indicator'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = 'function SegmentedControlNativeTsx1(){const{indicatorWidth}=this.__closure;return indicatorWidth.get();}';
    var4['code'] = var7;
    var _closure1_slot10 = var4;
    var4 = {};
    var7 = 'function SegmentedControlNativeTsx2(_,previous){const{previousIndicatorWidth}=this.__closure;if(previous!=null){previousIndicatorWidth.set(previous);}}';
    var4['code'] = var7;
    var _closure1_slot11 = var4;
    var4 = {};
    var7 = 'function SegmentedControlNativeTsx3(){const{activeIndex,itemCount}=this.__closure;return Math.min(Math.max(activeIndex.get(),0),itemCount-1);}';
    var4['code'] = var7;
    var _closure1_slot12 = var4;
    var4 = {};
    var7 = 'function SegmentedControlNativeTsx4(){const{clampedActiveIndex,defaultActiveIndex,indicatorWidth}=this.__closure;return(clampedActiveIndex.get()-defaultActiveIndex.get())*indicatorWidth.get();}';
    var4['code'] = var7;
    var _closure1_slot13 = var4;
    var4 = {};
    var7 = "function SegmentedControlNativeTsx5(){const{indicatorTranslateX,pressedIndex,clampedActiveIndex,PRESSED_TRANSLATE_AMOUNT,indicatorWidth,scrollOverflow,interpolate,SCROLL_OVERFLOW_UPPER_BOUND,SCROLL_OVERFLOW_MAX_SCALE,segmentSpacing,itemCount,previousIndicatorWidth,withSpring,SELECTED_INDICATOR_SPRING}=this.__closure;let translateX=indicatorTranslateX.get();let scaleX=1;if(pressedIndex.get()>=0){if(pressedIndex.get()<clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX-=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}else if(pressedIndex.get()>clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX+=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}}if(scrollOverflow.get()<0){const scaleFactor=interpolate(scrollOverflow.get(),[-SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=-scaleAmount/2;}else if(scrollOverflow.get()>0){const scaleFactor=interpolate(scrollOverflow.get(),[SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=scaleAmount/2;}if(clampedActiveIndex.get()===0){translateX+=segmentSpacing;}else if(clampedActiveIndex.get()===itemCount-1){translateX-=segmentSpacing;}const animated=indicatorWidth.get()===previousIndicatorWidth.get();if(!animated){previousIndicatorWidth.set(indicatorWidth.get());}return{transform:[{translateX:animated?withSpring(translateX,SELECTED_INDICATOR_SPRING):translateX},{scaleX:withSpring(scaleX,SELECTED_INDICATOR_SPRING)}]};}";
    var4['code'] = var7;
    var _closure1_slot14 = var4;
    var4 = {};
    var7 = 'function onPanGestureUpdate_SegmentedControlNativeTsx6(event){const{indicatorWidth,panIndex,activeIndex,itemCount}=this.__closure;const progess=event.translationX/indicatorWidth.get();const index=panIndex.get()+progess;activeIndex.set(Math.min(Math.max(index,0),itemCount-1));}';
    var4['code'] = var7;
    var _closure1_slot15 = var4;
    var4 = {};
    var7 = 'function SegmentedControlNativeTsx7(){const{panIndex,activeIndex,runOnJS,setActiveIndex}=this.__closure;panIndex.set(-1);activeIndex.set(Math.round(activeIndex.get()));runOnJS(setActiveIndex)(activeIndex.get());}';
    var4['code'] = var7;
    var _closure1_slot16 = var4;
    var4 = {};
    var7 = 'function SegmentedControlNativeTsx8(){const{panIndex,activeIndex}=this.__closure;panIndex.set(activeIndex.get());}';
    var4['code'] = var7;
    var _closure1_slot17 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/SegmentedControl/native/SegmentedControl.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SegmentedControl(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var20 = var1.state;
            var _closure2_slot0 = var20;
            var7 = var1.variant;
            var5 = undefined;
            if(!(var7 === var5)) { _fun0001_ip = 29; continue _fun0001 }
 25:
            var7 = 'default';
 29:
            var _closure2_slot1 = var7;
            var10 = var1.keyboardShouldPersistTaps;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var _closure2_slot12 = var5;
            var _closure2_slot13 = var5;
            var _closure2_slot14 = var5;
            var _closure2_slot15 = var5;
            var _closure2_slot16 = var5;
            var _closure2_slot17 = var5;
            var _closure2_slot18 = var5;
            var18 = var20.activeIndex;
            _closure2_slot2 = var18;
            var27 = var20.scrollOverflow;
            _closure2_slot3 = var27;
            var1 = var20.items;
            _closure2_slot4 = var1;
            var14 = var20.pressedIndex;
            _closure2_slot5 = var14;
            var16 = var20.setActiveIndex;
            _closure2_slot6 = var16;
            var2 = 'experimental_Large';
            var3 = var2 === var7;
            _closure2_slot7 = var3;
            var21 = 4;
            if(!var3) { _fun0001_ip = 180; continue _fun0001 }
 177:
            var21 = 8;
 180:
            _closure2_slot8 = var21;
            var6 = _closure1_slot9;
            var11 = var6.bind(var5)(var21);
            _closure2_slot9 = var11;
            var22 = var1.length;
            _closure2_slot10 = var22;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var17 = 5;
            var8 = var9[var17];
            var13 = var6.bind(var5)(var8);
            var12 = var13.useSharedValue;
            var8 = -1;
            var19 = var12.bind(var13)(var8);
            _closure2_slot11 = var19;
            var8 = var9[var17];
            var12 = var6.bind(var5)(var8);
            var8 = var12.useSharedValue;
            var13 = 0;
            var28 = var8.bind(var12)(var13);
            _closure2_slot12 = var28;
            var8 = var9[var17];
            var12 = var6.bind(var5)(var8);
            var8 = var12.useSharedValue;
            var26 = var8.bind(var12)(var13);
            _closure2_slot13 = var26;
            var8 = var9[var17];
            var15 = var6.bind(var5)(var8);
            var13 = var15.useAnimatedReaction;
            var12 = function T() {
                var2 = _closure2_slot12;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = {};
            var8['indicatorWidth'] = var28;
            var12['__closure'] = var8;
            var8 = 5223249035388.0;
            var12['__workletHash'] = var8;
            var8 = _closure1_slot10;
            var12['__initData'] = var8;
            var8 = function R(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = arg2;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0002_ip = 26; continue _fun0002 }
 9:
                    var2 = _closure2_slot13;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var3);
 26:
                    var1 = undefined;
                    return var1;
                }
            };
            var23 = {};
            var23['previousIndicatorWidth'] = var26;
            var8['__closure'] = var23;
            var23 = 14748619096684.0;
            var8['__workletHash'] = var23;
            var23 = _closure1_slot11;
            var8['__initData'] = var23;
            var8 = var13.bind(var15)(var12, var8);
            var13 = _closure1_slot3;
            var15 = var13.useCallback;
            var12 = new Array(1);
            var12[0] = var28;
            var8 = function(arg1) {
                var3 = _closure2_slot12;
                var2 = var3.set;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var1 = var1.width;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var23 = var15.bind(var13)(var8, var12);
            _closure2_slot14 = var23;
            var8 = var9[var17];
            var15 = var6.bind(var5)(var8);
            var12 = var15.useSharedValue;
            var8 = var18.get;
            var8 = var8.bind(var18)();
            var24 = var12.bind(var15)(var8);
            _closure2_slot15 = var24;
            var8 = var9[var17];
            var15 = var6.bind(var5)(var8);
            var12 = var15.useDerivedValue;
            var8 = function F() {
                var1 = global;
                var4 = var1.Math;
                var3 = var4.min;
                var7 = var1.Math;
                var6 = var7.max;
                var5 = _closure2_slot2;
                var2 = var5.get;
                var5 = var2.bind(var5)();
                var2 = 0;
                var2 = var6.bind(var7)(var5, var2);
                var5 = _closure2_slot10;
                var1 = 1;
                var1 = var5 - var1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var25 = {};
            var25['activeIndex'] = var18;
            var25['itemCount'] = var22;
            var8['__closure'] = var25;
            var25 = 790542357728.0;
            var8['__workletHash'] = var25;
            var25 = _closure1_slot12;
            var8['__initData'] = var25;
            var29 = var12.bind(var15)(var8);
            _closure2_slot16 = var29;
            var8 = var9[var17];
            var15 = var6.bind(var5)(var8);
            var12 = var15.useDerivedValue;
            var8 = function k() {
                var3 = _closure2_slot16;
                var2 = var3.get;
                var3 = var2.bind(var3)();
                var4 = _closure2_slot15;
                var2 = var4.get;
                var2 = var2.bind(var4)();
                var2 = var3 - var2;
                var3 = _closure2_slot12;
                var1 = var3.get;
                var1 = var1.bind(var3)();
                var1 = var2 * var1;
                return var1;
            };
            var25 = {};
            var25['clampedActiveIndex'] = var29;
            var25['defaultActiveIndex'] = var24;
            var25['indicatorWidth'] = var28;
            var8['__closure'] = var25;
            var25 = 10116271570175.0;
            var8['__workletHash'] = var25;
            var25 = _closure1_slot13;
            var8['__initData'] = var25;
            var30 = var12.bind(var15)(var8);
            _closure2_slot17 = var30;
            var8 = var9[var17];
            var15 = var6.bind(var5)(var8);
            var12 = var15.useAnimatedStyle;
            var8 = function G() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot17;
                    var2 = var3.get;
                    var9 = var2.bind(var3)();
                    var3 = _closure2_slot5;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var4 = 0;
                    var2 = var2 >= var4;
                    var5 = 1;
                    var8 = var9;
                    var7 = var5;
                    if(!var2) { _fun0003_ip = 209; continue _fun0003 }
 50:
                    var3 = _closure2_slot5;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var6 = _closure2_slot16;
                    var2 = var6.get;
                    var2 = var2.bind(var6)();
                    if(!(!(var3 < var2))) { _fun0003_ip = 162; continue _fun0003 }
 80:
                    var3 = _closure2_slot5;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var6 = _closure2_slot16;
                    var2 = var6.get;
                    var2 = var2.bind(var6)();
                    var6 = var3 > var2;
                    var3 = var9;
                    var2 = var5;
                    if(!var6) { _fun0003_ip = 160; continue _fun0003 }
 119:
                    var10 = _closure2_slot12;
                    var6 = var10.get;
                    var10 = var6.bind(var10)();
                    var6 = 0.02;
                    var6 = var6 * var10;
                    var3 = var9 + var6;
                    var2 = 1.04;
 160:
                    _fun0003_ip = 203; continue _fun0003;
 162:
                    var10 = _closure2_slot12;
                    var6 = var10.get;
                    var10 = var6.bind(var10)();
                    var6 = 0.02;
                    var6 = var6 * var10;
                    var3 = var9 - var6;
                    var2 = 1.04;
 203:
                    var8 = var3;
                    var7 = var2;
 209:
                    var3 = _closure2_slot3;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    if(!(!(var2 < var4))) { _fun0003_ip = 367; continue _fun0003 }
 229:
                    var3 = _closure2_slot3;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var3 = var8;
                    if(!(var2 > var4)) { _fun0003_ip = 491; continue _fun0003 }
 252:
                    var9 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 5;
                    var6 = var6[var2];
                    var2 = undefined;
                    var12 = var9.bind(var2)(var6);
                    var11 = var12.interpolate;
                    var6 = _closure2_slot3;
                    var2 = var6.get;
                    var16 = var2.bind(var6)();
                    var15 = [50, 0];
                    var14 = [0.9, 1];
                    var13 = 'clamp';
                    var17 = var12;
                    var2 = var17[var11](var16, var15, var14, var13, var12);
                    var9 = _closure2_slot12;
                    var6 = var9.get;
                    var9 = var6.bind(var9)();
                    var6 = var5 - var2;
                    var9 = var9 * var6;
                    var6 = 2;
                    var6 = var9 / var6;
                    var3 = var8 + var6;
                    var7 = var2;
                    _fun0003_ip = 491; continue _fun0003;
 367:
                    var9 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 5;
                    var6 = var6[var2];
                    var2 = undefined;
                    var12 = var9.bind(var2)(var6);
                    var11 = var12.interpolate;
                    var6 = _closure2_slot3;
                    var2 = var6.get;
                    var16 = var2.bind(var6)();
                    var9 = new Array(2);
                    var2 = -50;
                    var9[0] = var2;
                    var9[1] = var4;
                    var14 = [0.9, 1];
                    var13 = 'clamp';
                    var17 = var12;
                    var15 = var9;
                    var2 = var17[var11](var16, var15, var14, var13, var12);
                    var9 = _closure2_slot12;
                    var6 = var9.get;
                    var6 = var6.bind(var9)();
                    var9 = -var6;
                    var6 = var5 - var2;
                    var9 = var9 * var6;
                    var6 = 2;
                    var6 = var9 / var6;
                    var3 = var8 + var6;
                    var7 = var2;
 491:
                    var6 = _closure2_slot16;
                    var2 = var6.get;
                    var2 = var2.bind(var6)();
                    if(!(var4 !== var2)) { _fun0003_ip = 546; continue _fun0003 }
 508:
                    var4 = _closure2_slot16;
                    var2 = var4.get;
                    var4 = var2.bind(var4)();
                    var2 = _closure2_slot10;
                    var2 = var2 - var5;
                    var8 = var3;
                    if(!(var4 === var2)) { _fun0003_ip = 554; continue _fun0003 }
 536:
                    var2 = _closure2_slot8;
                    var8 = var3 - var2;
                    _fun0003_ip = 554; continue _fun0003;
 546:
                    var2 = _closure2_slot8;
                    var8 = var3 + var2;
 554:
                    var3 = _closure2_slot12;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var4 = _closure2_slot13;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    var4 = var3 === var2;
                    if(var4) { _fun0003_ip = 614; continue _fun0003 }
 587:
                    var3 = _closure2_slot13;
                    var2 = var3.set;
                    var5 = _closure2_slot12;
                    var1 = var5.get;
                    var1 = var1.bind(var5)();
                    var1 = var2.bind(var3)(var1);
 614:
                    var1 = {};
                    var3 = {};
                    var2 = var8;
                    if(!var4) { _fun0003_ip = 664; continue _fun0003 }
 624:
                    var9 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 6;
                    var6 = var6[var5];
                    var5 = undefined;
                    var6 = var9.bind(var5)(var6);
                    var5 = var6.withSpring;
                    var4 = _closure1_slot8;
                    var2 = var5.bind(var6)(var8, var4);
 664:
                    var3['translateX'] = var2;
                    var2 = new Array(2);
                    var2[0] = var3;
                    var3 = {};
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 6;
                    var6 = var6[var5];
                    var5 = undefined;
                    var6 = var8.bind(var5)(var6);
                    var5 = var6.withSpring;
                    var4 = _closure1_slot8;
                    var4 = var5.bind(var6)(var7, var4);
                    var3['scaleX'] = var4;
                    var2[1] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var25 = {};
            var25['indicatorTranslateX'] = var30;
            var25['pressedIndex'] = var14;
            var25['clampedActiveIndex'] = var29;
            var29 = 0.04;
            var25['PRESSED_TRANSLATE_AMOUNT'] = var29;
            var25['indicatorWidth'] = var28;
            var25['scrollOverflow'] = var27;
            var27 = var9[var17];
            var27 = var6.bind(var5)(var27);
            var27 = var27.interpolate;
            var25['interpolate'] = var27;
            var27 = 50;
            var25['SCROLL_OVERFLOW_UPPER_BOUND'] = var27;
            var27 = 0.9;
            var25['SCROLL_OVERFLOW_MAX_SCALE'] = var27;
            var25['segmentSpacing'] = var21;
            var25['itemCount'] = var22;
            var25['previousIndicatorWidth'] = var26;
            var26 = 6;
            var26 = var9[var26];
            var26 = var6.bind(var5)(var26);
            var26 = var26.withSpring;
            var25['withSpring'] = var26;
            var26 = _closure1_slot8;
            var25['SELECTED_INDICATOR_SPRING'] = var26;
            var8['__closure'] = var25;
            var25 = 5537358752627.0;
            var8['__workletHash'] = var25;
            var25 = _closure1_slot14;
            var8['__initData'] = var25;
            var8 = var12.bind(var15)(var8);
            _closure2_slot18 = var8;
            var15 = var13.useMemo;
            var12 = new Array(5);
            var12[0] = var1;
            var12[1] = var24;
            var12[2] = var23;
            var23 = var11.indicator;
            var12[3] = var23;
            var12[4] = var8;
            var8 = function() {
                var3 = _closure2_slot4;
                var2 = var3.map;
                var1 = function(arg1, arg2) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var1 = arg1;
                        var5 = var1.id;
                        var2 = _closure2_slot15;
                        var1 = var2.get;
                        var2 = var1.bind(var2)();
                        var1 = arg2;
                        var7 = var2 === var1;
                        var4 = _closure1_slot6;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 5;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.View;
                        var1 = {};
                        var6 = undefined;
                        if(!var7) { _fun0004_ip = 76; continue _fun0004 }
 72:
                        var6 = _closure2_slot14;
 76:
                        var1['onLayout'] = var6;
                        var6 = _closure2_slot9;
                        var9 = var6.indicator;
                        var6 = new Array(2);
                        var6[0] = var9;
                        if(var7) { _fun0004_ip = 112; continue _fun0004 }
 102:
                        var7 = {};
                        var9 = 0;
                        var7['opacity'] = var9;
                        _fun0004_ip = 116; continue _fun0004;
 112:
                        var7 = _closure2_slot18;
 116:
                        var6[1] = var7;
                        var1['style'] = var6;
                        var1 = var4.bind(var3)(var2, var1, var5);
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var15 = var15.bind(var13)(var8, var12);
            var12 = var13.useMemo;
            var8 = new Array(8);
            var8[0] = var1;
            var8[1] = var22;
            var8[2] = var21;
            var8[3] = var20;
            var8[4] = var14;
            var8[5] = var3;
            var8[6] = var7;
            var8[7] = var16;
            var7 = function() {
                var3 = _closure2_slot4;
                var2 = var3.map;
                var1 = function(arg1, arg2) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var1 = arg1;
                        var10 = arg2;
                        var9 = var1.label;
                        var5 = var1.id;
                        var8 = var1.icon;
                        var _closure4_slot0 = var10;
                        var1 = 0;
                        var1 = var1 === var10;
                        if(var1) { _fun0005_ip = 65; continue _fun0005 }
 39:
                        var3 = _closure2_slot10;
                        var2 = 1;
                        var2 = var3 - var2;
                        var13 = undefined;
                        if(!(var10 === var2)) { _fun0005_ip = 63; continue _fun0005 }
 56:
                        var2 = _closure2_slot8;
                        var13 = -var2;
 63:
                        _fun0005_ip = 69; continue _fun0005;
 65:
                        var13 = _closure2_slot8;
 69:
                        if(var1) { _fun0005_ip = 95; continue _fun0005 }
 72:
                        var2 = _closure2_slot10;
                        var1 = 1;
                        var1 = var2 - var1;
                        var12 = undefined;
                        if(!(var10 === var1)) { _fun0005_ip = 93; continue _fun0005 }
 89:
                        var12 = _closure2_slot8;
 93:
                        _fun0005_ip = 102; continue _fun0005;
 95:
                        var1 = _closure2_slot8;
                        var12 = -var1;
 102:
                        var4 = _closure1_slot6;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 7;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.SegmentedControlItem;
                        var1 = {};
                        var11 = {};
                        var15 = _closure2_slot10;
                        var14 = 1;
                        var15 = var14 / var15;
                        var14 = 100;
                        var15 = var15 * var14;
                        var14 = '%';
                        var14 = var15 + var14;
                        var11['minWidth'] = var14;
                        var11['marginStart'] = var13;
                        var11['marginEnd'] = var12;
                        var1['style'] = var11;
                        var1['index'] = var10;
                        var1['label'] = var9;
                        var9 = _closure2_slot0;
                        var1['state'] = var9;
                        var9 = _closure2_slot5;
                        var1['pressed'] = var9;
                        var9 = function onPress() {
                            var3 = _closure2_slot6;
                            var2 = _closure4_slot0;
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var1['onPress'] = var9;
                        var9 = function onPressIn() {
                            var3 = _closure2_slot5;
                            var2 = var3.set;
                            var1 = _closure4_slot0;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        var1['onPressIn'] = var9;
                        var7 = function onPressOut() {
                            var3 = _closure2_slot5;
                            var2 = var3.set;
                            var1 = -1;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        var1['onPressOut'] = var7;
                        var9 = _closure2_slot7;
                        var7 = null;
                        if(!var9) { _fun0005_ip = 252; continue _fun0005 }
 249:
                        var7 = var8;
 252:
                        var1['icon'] = var7;
                        var6 = _closure2_slot1;
                        var1['variant'] = var6;
                        var1 = var4.bind(var3)(var2, var1, var5);
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var12.bind(var13)(var7, var8);
            var7 = function() {
                var1 = function onPanGestureUpdate(arg1) {
                    var1 = arg1;
                    var3 = var1.translationX;
                    var4 = _closure2_slot12;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    var3 = var3 / var2;
                    var4 = _closure2_slot11;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    var9 = var2 + var3;
                    var3 = _closure2_slot2;
                    var2 = var3.set;
                    var4 = global;
                    var6 = var4.Math;
                    var5 = var6.min;
                    var8 = var4.Math;
                    var7 = var8.max;
                    var4 = 0;
                    var4 = var7.bind(var8)(var9, var4);
                    var7 = _closure2_slot10;
                    var1 = 1;
                    var1 = var7 - var1;
                    var1 = var5.bind(var6)(var4, var1);
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var2 = {};
                var4 = _closure2_slot12;
                var2['indicatorWidth'] = var4;
                var4 = _closure2_slot11;
                var2['panIndex'] = var4;
                var4 = _closure2_slot2;
                var2['activeIndex'] = var4;
                var3 = _closure2_slot10;
                var2['itemCount'] = var3;
                var1['__closure'] = var2;
                var2 = 4853281820821.0;
                var1['__workletHash'] = var2;
                var2 = _closure1_slot15;
                var1['__initData'] = var2;
                return var1;
            };
            var13 = var7.bind(var5)();
            var8 = 8;
            var7 = var9[var8];
            var7 = var6.bind(var5)(var7);
            var12 = var7.Gesture;
            var7 = var12.Pan;
            var20 = var7.bind(var12)();
            var12 = var20.onStart;
            var7 = function B() {
                var3 = _closure2_slot11;
                var2 = var3.set;
                var4 = _closure2_slot2;
                var1 = var4.get;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var21 = {};
            var21['panIndex'] = var19;
            var21['activeIndex'] = var18;
            var7['__closure'] = var21;
            var21 = 16822477236158.0;
            var7['__workletHash'] = var21;
            var21 = _closure1_slot17;
            var7['__initData'] = var21;
            var12 = var12.bind(var20)(var7);
            var7 = var12.onUpdate;
            var12 = var7.bind(var12)(var13);
            var7 = var12.onEnd;
            var4 = function H() {
                var4 = _closure2_slot11;
                var3 = var4.set;
                var1 = -1;
                var1 = var3.bind(var4)(var1);
                var4 = _closure2_slot2;
                var3 = var4.set;
                var1 = global;
                var6 = var1.Math;
                var5 = var6.round;
                var7 = _closure2_slot2;
                var1 = var7.get;
                var1 = var1.bind(var7)();
                var1 = var5.bind(var6)(var1);
                var1 = var3.bind(var4)(var1);
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.runOnJS;
                var3 = _closure2_slot6;
                var3 = var4.bind(var5)(var3);
                var4 = _closure2_slot2;
                var2 = var4.get;
                var2 = var2.bind(var4)();
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var13 = {};
            var13['panIndex'] = var19;
            var13['activeIndex'] = var18;
            var17 = var9[var17];
            var17 = var6.bind(var5)(var17);
            var17 = var17.runOnJS;
            var13['runOnJS'] = var17;
            var13['setActiveIndex'] = var16;
            var4['__closure'] = var13;
            var13 = 4531135834116.0;
            var4['__workletHash'] = var13;
            var13 = _closure1_slot16;
            var4['__initData'] = var13;
            var7 = var7.bind(var12)(var4);
            var4 = 9;
            var4 = var9[var4];
            var6 = var6.bind(var5)(var4);
            var4 = var6.isAndroid;
            var4 = var4.bind(var6)();
            var9 = 'tabbar';
            if(!var4) { _fun0001_ip = 1141; continue _fun0001 }
 1135:
            var9 = 'tablist';
 1141:
            var12 = _closure1_slot7;
            var6 = _closure1_slot4;
            var4 = {};
            var4['accessibilityRole'] = var9;
            var9 = var11.controlsContainer;
            var4['style'] = var9;
            var9 = _closure1_slot6;
            var13 = {};
            var16 = false;
            var13['accessible'] = var16;
            var16 = var11.indicatorContainer;
            var13['style'] = var16;
            var13['children'] = var15;
            var15 = var9.bind(var5)(var6, var13);
            var13 = new Array(2);
            var13[0] = var15;
            var13[1] = var14;
            var4['children'] = var13;
            var1 = var1.length;
            var6 = var12.bind(var5)(var6, var4, var1);
            var4 = _closure1_slot5;
            var1 = {'horizontal': true, 'alwaysBounceHorizontal': false};
            var11 = var11.scrollContentContainer;
            var1['contentContainerStyle'] = var11;
            var1['keyboardShouldPersistTaps'] = var10;
            var1['children'] = var6;
            var1 = var9.bind(var5)(var4, var1);
            if(!var3) { _fun0001_ip = 1317; continue _fun0001 }
 1273:
            var4 = _closure1_slot6;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var3.bind(var5)(var2);
            var3 = var2.GestureDetector;
            var2 = {};
            var2['gesture'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1317:
            return var1;
        }
    };
    var3['SegmentedControl'] = var2;
    return var1;
})();