// app/modules/premium/gifting/native/components/CustomSegmentedControl.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var9;
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
    var4 = metroImportAll;
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
    var8 = var9.bind(var1)(var4);
    var7 = var8.createAnimatedComponent;
    var4 = 4;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = ['#21BB634D', '#0066384D'];
    var _closure1_slot10 = var4;
    var4 = ['#FF71B84D', '#8732444D'];
    var _closure1_slot11 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var1 = {};
            var2 = {};
            var3 = 1;
            var2['flexGrow'] = var3;
            var1['scrollContentContainer'] = var2;
            var2 = {};
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 6;
            var9 = var8[var6];
            var5 = undefined;
            var9 = var7.bind(var5)(var9);
            var9 = var9.radii;
            var9 = var9.lg;
            var9 = var9 + var4;
            var2['borderRadius'] = var9;
            var9 = 'hidden';
            var2['overflow'] = var9;
            var1['outerContainer'] = var2;
            var2 = {'position': 'absolute', 'width': '100%', 'height': '100%'};
            var9 = var8[var6];
            var9 = var7.bind(var5)(var9);
            var9 = var9.radii;
            var9 = var9.lg;
            var9 = var9 + var4;
            var2['borderRadius'] = var9;
            var1['gradientContainer'] = var2;
            var2 = {'position': 'absolute', 'width': '100%', 'height': '100%'};
            var9 = var8[var6];
            var9 = var7.bind(var5)(var9);
            var9 = var9.radii;
            var9 = var9.lg;
            var9 = var9 + var4;
            var2['borderRadius'] = var9;
            var1['radialOverlay'] = var2;
            var2 = {'backgroundColor': 'transparent', 'borderRadius': null, 'paddingVertical': null, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
            var9 = var8[var6];
            var9 = var7.bind(var5)(var9);
            var9 = var9.radii;
            var9 = var9.lg;
            var9 = var9 + var4;
            var2['borderRadius'] = var9;
            var2['paddingVertical'] = var4;
            var1['controlsContainer'] = var2;
            var2 = {'position': 'absolute', 'width': '100%', 'height': '100%', 'borderRadius': null, 'flexDirection': 'row'};
            var4 = var8[var6];
            var4 = var7.bind(var5)(var4);
            var4 = var4.radii;
            var4 = var4.lg;
            var2['borderRadius'] = var4;
            var1['indicatorContainer'] = var2;
            var2 = {'flex': 1, 'borderRadius': null, 'borderWidth': 2};
            var4 = var8[var6];
            var4 = var7.bind(var5)(var4);
            var4 = var4.radii;
            var4 = var4.lg;
            var2['borderRadius'] = var4;
            var7 = _closure1_slot0;
            var4 = 7;
            var4 = var8[var4];
            var7 = var7.bind(var5)(var4);
            var4 = var7.isAndroid;
            var4 = var4.bind(var7)();
            if(var4) { _fun0001_ip = 373; continue _fun0001 }
 342:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.shadows;
            var3 = var3.SHADOW_LOW_ACTIVE;
            _fun0001_ip = 385; continue _fun0001;
 373:
            var4 = {};
            var5 = 0;
            var4['elevation'] = var5;
            var3 = var4;
 385:
            var11 = var2;
            var10 = var3;
            var3 = copyDataProperties(var11, var10);
            var1['indicator'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = {};
    var7 = 'function CustomSegmentedControlTsx1(){const{indicatorWidth}=this.__closure;return indicatorWidth.get();}';
    var4['code'] = var7;
    var _closure1_slot13 = var4;
    var4 = {};
    var7 = 'function CustomSegmentedControlTsx2(_,previous){const{previousIndicatorWidth}=this.__closure;if(previous!=null){previousIndicatorWidth.set(previous);}}';
    var4['code'] = var7;
    var _closure1_slot14 = var4;
    var4 = {};
    var7 = 'function CustomSegmentedControlTsx3(){const{activeIndex,itemCount}=this.__closure;return Math.min(Math.max(activeIndex.get(),0),itemCount-1);}';
    var4['code'] = var7;
    var _closure1_slot15 = var4;
    var4 = {};
    var7 = 'function CustomSegmentedControlTsx4(){const{clampedActiveIndex,defaultActiveIndex,indicatorWidth}=this.__closure;return(clampedActiveIndex.get()-defaultActiveIndex.get())*indicatorWidth.get();}';
    var4['code'] = var7;
    var _closure1_slot16 = var4;
    var4 = {};
    var7 = "function CustomSegmentedControlTsx5(){const{indicatorTranslateX,pressedIndex,clampedActiveIndex,PRESSED_TRANSLATE_AMOUNT,indicatorWidth,scrollOverflow,interpolate,SCROLL_OVERFLOW_UPPER_BOUND,SCROLL_OVERFLOW_MAX_SCALE,segmentSpacing,itemCount,previousIndicatorWidth,withSpring,SELECTED_INDICATOR_SPRING}=this.__closure;let translateX=indicatorTranslateX.get();let scaleX=1;if(pressedIndex.get()>=0){if(pressedIndex.get()<clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX-=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}else if(pressedIndex.get()>clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX+=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}}if(scrollOverflow.get()<0){const scaleFactor=interpolate(scrollOverflow.get(),[-SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=-scaleAmount/2;}else if(scrollOverflow.get()>0){const scaleFactor=interpolate(scrollOverflow.get(),[SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=scaleAmount/2;}if(clampedActiveIndex.get()===0){translateX+=segmentSpacing;}else if(clampedActiveIndex.get()===itemCount-1){translateX-=segmentSpacing;}const animated=indicatorWidth.get()===previousIndicatorWidth.get();if(!animated){previousIndicatorWidth.set(indicatorWidth.get());}return{transform:[{translateX:animated?withSpring(translateX,SELECTED_INDICATOR_SPRING):translateX},{scaleX:withSpring(scaleX,SELECTED_INDICATOR_SPRING)}]};}";
    var4['code'] = var7;
    var _closure1_slot17 = var4;
    var4 = {};
    var7 = 'function CustomSegmentedControlTsx6(){const{clampedActiveIndex,withSpring,SELECTED_INDICATOR_SPRING}=this.__closure;const activeIdx=Math.round(clampedActiveIndex.get());return{opacity:withSpring(activeIdx===0?0.8:0,SELECTED_INDICATOR_SPRING)};}';
    var4['code'] = var7;
    var _closure1_slot18 = var4;
    var4 = {};
    var7 = 'function CustomSegmentedControlTsx7(){const{clampedActiveIndex,withSpring,SELECTED_INDICATOR_SPRING}=this.__closure;const activeIdx=Math.round(clampedActiveIndex.get());return{opacity:withSpring(activeIdx===1?0.8:0,SELECTED_INDICATOR_SPRING)};}';
    var4['code'] = var7;
    var _closure1_slot19 = var4;
    var4 = {};
    var7 = 'function CustomSegmentedControlTsx8(){const{clampedActiveIndex,bgModNormal,bgModStrong,withSpring,SELECTED_INDICATOR_SPRING,borderFaint}=this.__closure;const activeIdx=Math.round(clampedActiveIndex.get());const backgroundColor=activeIdx===0?bgModNormal:bgModStrong;return{backgroundColor:withSpring(backgroundColor,SELECTED_INDICATOR_SPRING),borderColor:withSpring(borderFaint,SELECTED_INDICATOR_SPRING)};}';
    var4['code'] = var7;
    var _closure1_slot20 = var4;
    var4 = {};
    var7 = 'function onPanGestureUpdate_CustomSegmentedControlTsx9(event){const{indicatorWidth,panIndex,activeIndex,itemCount}=this.__closure;const progess=event.translationX/indicatorWidth.get();const index=panIndex.get()+progess;activeIndex.set(Math.min(Math.max(index,0),itemCount-1));}';
    var4['code'] = var7;
    var _closure1_slot21 = var4;
    var4 = {};
    var7 = 'function CustomSegmentedControlTsx10(){const{panIndex,activeIndex,runOnJS,setActiveIndex}=this.__closure;panIndex.set(-1);activeIndex.set(Math.round(activeIndex.get()));runOnJS(setActiveIndex)(activeIndex.get());}';
    var4['code'] = var7;
    var _closure1_slot22 = var4;
    var4 = {};
    var7 = 'function CustomSegmentedControlTsx11(){const{panIndex,activeIndex}=this.__closure;panIndex.set(activeIndex.get());}';
    var4['code'] = var7;
    var _closure1_slot23 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/gifting/native/components/CustomSegmentedControl.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function CustomSegmentedControl(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var21 = var1.state;
            var _closure2_slot0 = var21;
            var7 = var1.variant;
            var5 = undefined;
            if(!(var7 === var5)) { _fun0002_ip = 29; continue _fun0002 }
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
            var _closure2_slot19 = var5;
            var _closure2_slot20 = var5;
            var _closure2_slot21 = var5;
            var _closure2_slot22 = var5;
            var _closure2_slot23 = var5;
            var _closure2_slot24 = var5;
            var _closure2_slot25 = var5;
            var _closure2_slot26 = var5;
            var19 = var21.activeIndex;
            _closure2_slot2 = var19;
            var32 = var21.scrollOverflow;
            _closure2_slot3 = var32;
            var1 = var21.items;
            _closure2_slot4 = var1;
            var16 = var21.pressedIndex;
            _closure2_slot5 = var16;
            var15 = var21.setActiveIndex;
            _closure2_slot6 = var15;
            var2 = 'experimental_Large';
            var3 = var2 === var7;
            var22 = 4;
            if(!var3) { _fun0002_ip = 208; continue _fun0002 }
 205:
            var22 = 8;
 208:
            _closure2_slot7 = var22;
            var6 = _closure1_slot12;
            var11 = var6.bind(var5)(var22);
            _closure2_slot8 = var11;
            var23 = var1.length;
            _closure2_slot9 = var23;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var18 = 3;
            var8 = var9[var18];
            var13 = var6.bind(var5)(var8);
            var12 = var13.useSharedValue;
            var8 = -1;
            var20 = var12.bind(var13)(var8);
            _closure2_slot10 = var20;
            var14 = 8;
            var8 = var9[var14];
            var17 = var6.bind(var5)(var8);
            var13 = var17.useToken;
            var30 = _closure1_slot1;
            var12 = 6;
            var8 = var9[var12];
            var8 = var30.bind(var5)(var8);
            var8 = var8.colors;
            var8 = var8.BG_SURFACE_OVERLAY;
            var8 = var13.bind(var17)(var8);
            _closure2_slot11 = var8;
            var13 = _closure1_slot3;
            var25 = var13.useMemo;
            var24 = new Array(1);
            var24[0] = var8;
            var17 = function() {
                var2 = _closure2_slot11;
                var1 = ['transparent'];
                var1[1] = var2;
                return var1;
            };
            var24 = var25.bind(var13)(var17, var24);
            _closure2_slot12 = var24;
            var25 = var13.useMemo;
            var17 = new Array(1);
            var17[0] = var8;
            var8 = function() {
                var2 = _closure2_slot11;
                var1 = new Array(2);
                var1[0] = var2;
                var2 = 'transparent';
                var1[1] = var2;
                return var1;
            };
            var8 = var25.bind(var13)(var8, var17);
            _closure2_slot13 = var8;
            var17 = var9[var18];
            var25 = var6.bind(var5)(var17);
            var17 = var25.useSharedValue;
            var26 = 0;
            var33 = var17.bind(var25)(var26);
            _closure2_slot14 = var33;
            var17 = var9[var18];
            var25 = var6.bind(var5)(var17);
            var17 = var25.useSharedValue;
            var31 = var17.bind(var25)(var26);
            _closure2_slot15 = var31;
            var17 = var9[var18];
            var27 = var6.bind(var5)(var17);
            var26 = var27.useAnimatedReaction;
            var25 = function y() {
                var2 = _closure2_slot14;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var17 = {};
            var17['indicatorWidth'] = var33;
            var25['__closure'] = var17;
            var17 = 3367221993870.0;
            var25['__workletHash'] = var17;
            var17 = _closure1_slot13;
            var25['__initData'] = var17;
            var17 = function b(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = arg2;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0003_ip = 26; continue _fun0003 }
 9:
                    var2 = _closure2_slot15;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var3);
 26:
                    var1 = undefined;
                    return var1;
                }
            };
            var28 = {};
            var28['previousIndicatorWidth'] = var31;
            var17['__closure'] = var28;
            var28 = 4874555109278.0;
            var17['__workletHash'] = var28;
            var28 = _closure1_slot14;
            var17['__initData'] = var28;
            var17 = var26.bind(var27)(var25, var17);
            var26 = var13.useCallback;
            var25 = new Array(1);
            var25[0] = var33;
            var17 = function(arg1) {
                var3 = _closure2_slot14;
                var2 = var3.set;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var1 = var1.width;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var28 = var26.bind(var13)(var17, var25);
            _closure2_slot16 = var28;
            var17 = var9[var18];
            var26 = var6.bind(var5)(var17);
            var25 = var26.useSharedValue;
            var17 = var19.get;
            var17 = var17.bind(var19)();
            var29 = var25.bind(var26)(var17);
            _closure2_slot17 = var29;
            var17 = var9[var18];
            var26 = var6.bind(var5)(var17);
            var25 = var26.useDerivedValue;
            var17 = function Y() {
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
                var5 = _closure2_slot9;
                var1 = 1;
                var1 = var5 - var1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var27 = {};
            var27['activeIndex'] = var19;
            var27['itemCount'] = var23;
            var17['__closure'] = var27;
            var27 = 15765477056018.0;
            var17['__workletHash'] = var27;
            var27 = _closure1_slot15;
            var17['__initData'] = var27;
            var36 = var25.bind(var26)(var17);
            _closure2_slot18 = var36;
            var17 = var9[var18];
            var26 = var6.bind(var5)(var17);
            var25 = var26.useDerivedValue;
            var17 = function q() {
                var3 = _closure2_slot18;
                var2 = var3.get;
                var3 = var2.bind(var3)();
                var4 = _closure2_slot17;
                var2 = var4.get;
                var2 = var2.bind(var4)();
                var2 = var3 - var2;
                var3 = _closure2_slot14;
                var1 = var3.get;
                var1 = var1.bind(var3)();
                var1 = var2 * var1;
                return var1;
            };
            var27 = {};
            var27['clampedActiveIndex'] = var36;
            var27['defaultActiveIndex'] = var29;
            var27['indicatorWidth'] = var33;
            var17['__closure'] = var27;
            var27 = 3037303550157.0;
            var17['__workletHash'] = var27;
            var27 = _closure1_slot16;
            var17['__initData'] = var27;
            var34 = var25.bind(var26)(var17);
            _closure2_slot19 = var34;
            var17 = var9[var18];
            var26 = var6.bind(var5)(var17);
            var25 = var26.useAnimatedStyle;
            var17 = function K() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot19;
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
                    if(!var2) { _fun0004_ip = 209; continue _fun0004 }
 50:
                    var3 = _closure2_slot5;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var6 = _closure2_slot18;
                    var2 = var6.get;
                    var2 = var2.bind(var6)();
                    if(!(!(var3 < var2))) { _fun0004_ip = 162; continue _fun0004 }
 80:
                    var3 = _closure2_slot5;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var6 = _closure2_slot18;
                    var2 = var6.get;
                    var2 = var2.bind(var6)();
                    var6 = var3 > var2;
                    var3 = var9;
                    var2 = var5;
                    if(!var6) { _fun0004_ip = 160; continue _fun0004 }
 119:
                    var10 = _closure2_slot14;
                    var6 = var10.get;
                    var10 = var6.bind(var10)();
                    var6 = 0.02;
                    var6 = var6 * var10;
                    var3 = var9 + var6;
                    var2 = 1.04;
 160:
                    _fun0004_ip = 203; continue _fun0004;
 162:
                    var10 = _closure2_slot14;
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
                    if(!(!(var2 < var4))) { _fun0004_ip = 367; continue _fun0004 }
 229:
                    var3 = _closure2_slot3;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var3 = var8;
                    if(!(var2 > var4)) { _fun0004_ip = 491; continue _fun0004 }
 252:
                    var9 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 3;
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
                    var9 = _closure2_slot14;
                    var6 = var9.get;
                    var9 = var6.bind(var9)();
                    var6 = var5 - var2;
                    var9 = var9 * var6;
                    var6 = 2;
                    var6 = var9 / var6;
                    var3 = var8 + var6;
                    var7 = var2;
                    _fun0004_ip = 491; continue _fun0004;
 367:
                    var9 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 3;
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
                    var9 = _closure2_slot14;
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
                    var6 = _closure2_slot18;
                    var2 = var6.get;
                    var2 = var2.bind(var6)();
                    if(!(var4 !== var2)) { _fun0004_ip = 546; continue _fun0004 }
 508:
                    var4 = _closure2_slot18;
                    var2 = var4.get;
                    var4 = var2.bind(var4)();
                    var2 = _closure2_slot9;
                    var2 = var2 - var5;
                    var8 = var3;
                    if(!(var4 === var2)) { _fun0004_ip = 554; continue _fun0004 }
 536:
                    var2 = _closure2_slot7;
                    var8 = var3 - var2;
                    _fun0004_ip = 554; continue _fun0004;
 546:
                    var2 = _closure2_slot7;
                    var8 = var3 + var2;
 554:
                    var3 = _closure2_slot14;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var4 = _closure2_slot15;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    var4 = var3 === var2;
                    if(var4) { _fun0004_ip = 614; continue _fun0004 }
 587:
                    var3 = _closure2_slot15;
                    var2 = var3.set;
                    var5 = _closure2_slot14;
                    var1 = var5.get;
                    var1 = var1.bind(var5)();
                    var1 = var2.bind(var3)(var1);
 614:
                    var1 = {};
                    var3 = {};
                    var2 = var8;
                    if(!var4) { _fun0004_ip = 664; continue _fun0004 }
 624:
                    var9 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 9;
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
                    var5 = 9;
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
            var27 = {};
            var27['indicatorTranslateX'] = var34;
            var27['pressedIndex'] = var16;
            var27['clampedActiveIndex'] = var36;
            var34 = 0.04;
            var27['PRESSED_TRANSLATE_AMOUNT'] = var34;
            var27['indicatorWidth'] = var33;
            var27['scrollOverflow'] = var32;
            var32 = var9[var18];
            var32 = var6.bind(var5)(var32);
            var32 = var32.interpolate;
            var27['interpolate'] = var32;
            var32 = 50;
            var27['SCROLL_OVERFLOW_UPPER_BOUND'] = var32;
            var32 = 0.9;
            var27['SCROLL_OVERFLOW_MAX_SCALE'] = var32;
            var27['segmentSpacing'] = var22;
            var27['itemCount'] = var23;
            var27['previousIndicatorWidth'] = var31;
            var33 = 9;
            var31 = var9[var33];
            var31 = var6.bind(var5)(var31);
            var31 = var31.withSpring;
            var27['withSpring'] = var31;
            var32 = _closure1_slot8;
            var27['SELECTED_INDICATOR_SPRING'] = var32;
            var17['__closure'] = var27;
            var27 = 13287528512321.0;
            var17['__workletHash'] = var27;
            var27 = _closure1_slot17;
            var17['__initData'] = var27;
            var27 = var25.bind(var26)(var17);
            _closure2_slot20 = var27;
            var17 = var9[var18];
            var26 = var6.bind(var5)(var17);
            var25 = var26.useAnimatedStyle;
            var17 = function Q() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = global;
                    var3 = var1.Math;
                    var2 = var3.round;
                    var4 = _closure2_slot18;
                    var1 = var4.get;
                    var1 = var1.bind(var4)();
                    var6 = var2.bind(var3)(var1);
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 9;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.withSpring;
                    var3 = 0;
                    if(!(var3 === var6)) { _fun0005_ip = 82; continue _fun0005 }
 72:
                    var3 = 0.8;
 82:
                    var2 = _closure1_slot8;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var31 = {};
            var31['clampedActiveIndex'] = var36;
            var34 = var9[var33];
            var34 = var6.bind(var5)(var34);
            var34 = var34.withSpring;
            var31['withSpring'] = var34;
            var31['SELECTED_INDICATOR_SPRING'] = var32;
            var17['__closure'] = var31;
            var31 = 3110635430305.0;
            var17['__workletHash'] = var31;
            var31 = _closure1_slot18;
            var17['__initData'] = var31;
            var26 = var25.bind(var26)(var17);
            _closure2_slot21 = var26;
            var17 = var9[var18];
            var31 = var6.bind(var5)(var17);
            var25 = var31.useAnimatedStyle;
            var17 = function Z() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = global;
                    var3 = var1.Math;
                    var2 = var3.round;
                    var4 = _closure2_slot18;
                    var1 = var4.get;
                    var1 = var1.bind(var4)();
                    var7 = var2.bind(var3)(var1);
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 9;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.withSpring;
                    var6 = 1;
                    var3 = 0;
                    if(!(var6 === var7)) { _fun0006_ip = 85; continue _fun0006 }
 75:
                    var3 = 0.8;
 85:
                    var2 = _closure1_slot8;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var34 = {};
            var34['clampedActiveIndex'] = var36;
            var35 = var9[var33];
            var35 = var6.bind(var5)(var35);
            var35 = var35.withSpring;
            var34['withSpring'] = var35;
            var34['SELECTED_INDICATOR_SPRING'] = var32;
            var17['__closure'] = var34;
            var34 = 15423570819201.0;
            var17['__workletHash'] = var34;
            var34 = _closure1_slot19;
            var17['__initData'] = var34;
            var25 = var25.bind(var31)(var17);
            _closure2_slot22 = var25;
            var17 = var9[var14];
            var34 = var6.bind(var5)(var17);
            var31 = var34.useToken;
            var17 = var9[var12];
            var17 = var30.bind(var5)(var17);
            var17 = var17.colors;
            var17 = var17.BG_MOD_SUBTLE;
            var35 = var31.bind(var34)(var17);
            _closure2_slot23 = var35;
            var17 = var9[var14];
            var34 = var6.bind(var5)(var17);
            var31 = var34.useToken;
            var17 = var9[var12];
            var17 = var30.bind(var5)(var17);
            var17 = var17.colors;
            var17 = var17.BG_MOD_STRONG;
            var34 = var31.bind(var34)(var17);
            _closure2_slot24 = var34;
            var14 = var9[var14];
            var17 = var6.bind(var5)(var14);
            var14 = var17.useToken;
            var12 = var9[var12];
            var12 = var30.bind(var5)(var12);
            var12 = var12.colors;
            var12 = var12.BORDER_FAINT;
            var31 = var14.bind(var17)(var12);
            _closure2_slot25 = var31;
            var12 = var9[var18];
            var17 = var6.bind(var5)(var12);
            var14 = var17.useAnimatedStyle;
            var12 = function $() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = global;
                    var4 = var1.Math;
                    var3 = var4.round;
                    var5 = _closure2_slot18;
                    var1 = var5.get;
                    var1 = var1.bind(var5)();
                    var3 = var3.bind(var4)(var1);
                    var1 = 0;
                    if(!(var1 !== var3)) { _fun0007_ip = 46; continue _fun0007 }
 40:
                    var10 = _closure2_slot24;
                    _fun0007_ip = 50; continue _fun0007;
 46:
                    var10 = _closure2_slot23;
 50:
                    var1 = {};
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 9;
                    var8 = var7[var3];
                    var4 = undefined;
                    var9 = var6.bind(var4)(var8);
                    var8 = var9.withSpring;
                    var5 = _closure1_slot8;
                    var8 = var8.bind(var9)(var10, var5);
                    var1['backgroundColor'] = var8;
                    var3 = var7[var3];
                    var4 = var6.bind(var4)(var3);
                    var3 = var4.withSpring;
                    var2 = _closure2_slot25;
                    var2 = var3.bind(var4)(var2, var5);
                    var1['borderColor'] = var2;
                    return var1;
                }
            };
            var30 = {};
            var30['clampedActiveIndex'] = var36;
            var30['bgModNormal'] = var35;
            var30['bgModStrong'] = var34;
            var33 = var9[var33];
            var33 = var6.bind(var5)(var33);
            var33 = var33.withSpring;
            var30['withSpring'] = var33;
            var30['SELECTED_INDICATOR_SPRING'] = var32;
            var30['borderFaint'] = var31;
            var12['__closure'] = var30;
            var30 = 4078253427100.0;
            var12['__workletHash'] = var30;
            var30 = _closure1_slot20;
            var12['__initData'] = var30;
            var12 = var14.bind(var17)(var12);
            _closure2_slot26 = var12;
            var17 = var13.useMemo;
            var14 = new Array(6);
            var14[0] = var1;
            var14[1] = var29;
            var14[2] = var28;
            var28 = var11.indicator;
            var14[3] = var28;
            var14[4] = var27;
            var14[5] = var12;
            var12 = function() {
                var3 = _closure2_slot4;
                var2 = var3.map;
                var1 = function(arg1, arg2) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var1 = arg1;
                        var5 = var1.id;
                        var2 = _closure2_slot17;
                        var1 = var2.get;
                        var2 = var1.bind(var2)();
                        var1 = arg2;
                        var7 = var2 === var1;
                        var4 = _closure1_slot6;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 3;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.View;
                        var1 = {};
                        var6 = undefined;
                        if(!var7) { _fun0008_ip = 76; continue _fun0008 }
 72:
                        var6 = _closure2_slot16;
 76:
                        var1['onLayout'] = var6;
                        var6 = _closure2_slot8;
                        var9 = var6.indicator;
                        var6 = new Array(3);
                        var6[0] = var9;
                        var9 = _closure2_slot26;
                        var6[1] = var9;
                        if(var7) { _fun0008_ip = 120; continue _fun0008 }
 110:
                        var7 = {};
                        var9 = 0;
                        var7['opacity'] = var9;
                        _fun0008_ip = 124; continue _fun0008;
 120:
                        var7 = _closure2_slot20;
 124:
                        var6[2] = var7;
                        var1['style'] = var6;
                        var1 = var4.bind(var3)(var2, var1, var5);
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var17 = var17.bind(var13)(var12, var14);
            var14 = var13.useMemo;
            var27 = var11.gradientContainer;
            var12 = new Array(6);
            var12[0] = var27;
            var27 = var11.radialOverlay;
            var12[1] = var27;
            var12[2] = var26;
            var12[3] = var25;
            var12[4] = var24;
            var12[5] = var8;
            var8 = function() {
                var4 = _closure1_slot7;
                var3 = _closure1_slot4;
                var2 = {};
                var1 = _closure2_slot8;
                var1 = var1.gradientContainer;
                var2['style'] = var1;
                var8 = _closure1_slot6;
                var7 = _closure1_slot9;
                var5 = {};
                var1 = _closure1_slot10;
                var5['colors'] = var1;
                var1 = {'x': 0, 'y': 0};
                var5['start'] = var1;
                var1 = {'x': 1, 'y': 0};
                var5['end'] = var1;
                var1 = _closure2_slot8;
                var6 = var1.gradientContainer;
                var1 = new Array(2);
                var1[0] = var6;
                var6 = _closure2_slot21;
                var1[1] = var6;
                var5['style'] = var1;
                var1 = undefined;
                var6 = var8.bind(var1)(var7, var5);
                var5 = new Array(4);
                var5[0] = var6;
                var6 = {};
                var9 = _closure1_slot11;
                var6['colors'] = var9;
                var9 = {'x': 1, 'y': 0};
                var6['start'] = var9;
                var9 = {'x': 0, 'y': 0};
                var6['end'] = var9;
                var9 = _closure2_slot8;
                var11 = var9.gradientContainer;
                var9 = new Array(2);
                var9[0] = var11;
                var11 = _closure2_slot22;
                var9[1] = var11;
                var6['style'] = var9;
                var6 = var8.bind(var1)(var7, var6);
                var5[1] = var6;
                var6 = {};
                var9 = _closure2_slot12;
                var6['colors'] = var9;
                var9 = {'x': 0.5, 'y': 0.5};
                var6['start'] = var9;
                var9 = {'x': 1, 'y': 1};
                var6['end'] = var9;
                var9 = _closure2_slot8;
                var11 = var9.radialOverlay;
                var9 = new Array(2);
                var9[0] = var11;
                var11 = _closure2_slot21;
                var9[1] = var11;
                var6['style'] = var9;
                var6 = var8.bind(var1)(var7, var6);
                var5[2] = var6;
                var6 = {};
                var9 = _closure2_slot13;
                var6['colors'] = var9;
                var9 = {'x': 0.5, 'y': 0.5};
                var6['start'] = var9;
                var9 = {'x': 1, 'y': 1};
                var6['end'] = var9;
                var9 = _closure2_slot8;
                var11 = var9.radialOverlay;
                var9 = new Array(2);
                var9[0] = var11;
                var10 = _closure2_slot22;
                var9[1] = var10;
                var6['style'] = var9;
                var6 = var8.bind(var1)(var7, var6);
                var5[3] = var6;
                var2['children'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var14 = var14.bind(var13)(var8, var12);
            var12 = var13.useMemo;
            var8 = new Array(7);
            var8[0] = var1;
            var8[1] = var23;
            var8[2] = var22;
            var8[3] = var21;
            var8[4] = var16;
            var8[5] = var7;
            var8[6] = var15;
            var7 = function() {
                var3 = _closure2_slot4;
                var2 = var3.map;
                var1 = function(arg1, arg2) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                        var1 = arg1;
                        var10 = arg2;
                        var9 = var1.label;
                        var5 = var1.id;
                        var7 = var1.icon;
                        var _closure4_slot0 = var10;
                        var1 = 0;
                        var1 = var1 === var10;
                        if(var1) { _fun0009_ip = 65; continue _fun0009 }
 39:
                        var3 = _closure2_slot9;
                        var2 = 1;
                        var2 = var3 - var2;
                        var13 = undefined;
                        if(!(var10 === var2)) { _fun0009_ip = 63; continue _fun0009 }
 56:
                        var2 = _closure2_slot7;
                        var13 = -var2;
 63:
                        _fun0009_ip = 69; continue _fun0009;
 65:
                        var13 = _closure2_slot7;
 69:
                        if(var1) { _fun0009_ip = 95; continue _fun0009 }
 72:
                        var2 = _closure2_slot9;
                        var1 = 1;
                        var1 = var2 - var1;
                        var12 = undefined;
                        if(!(var10 === var1)) { _fun0009_ip = 93; continue _fun0009 }
 89:
                        var12 = _closure2_slot7;
 93:
                        _fun0009_ip = 102; continue _fun0009;
 95:
                        var1 = _closure2_slot7;
                        var12 = -var1;
 102:
                        var4 = _closure1_slot6;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 10;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.CustomSegmentedControlItem;
                        var1 = {};
                        var11 = {};
                        var15 = _closure2_slot9;
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
                        var8 = function onPressOut() {
                            var3 = _closure2_slot5;
                            var2 = var3.set;
                            var1 = -1;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        var1['onPressOut'] = var8;
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
            var16 = var12.bind(var13)(var7, var8);
            var7 = function() {
                var1 = function onPanGestureUpdate(arg1) {
                    var1 = arg1;
                    var3 = var1.translationX;
                    var4 = _closure2_slot14;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    var3 = var3 / var2;
                    var4 = _closure2_slot10;
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
                    var7 = _closure2_slot9;
                    var1 = 1;
                    var1 = var7 - var1;
                    var1 = var5.bind(var6)(var4, var1);
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var2 = {};
                var4 = _closure2_slot14;
                var2['indicatorWidth'] = var4;
                var4 = _closure2_slot10;
                var2['panIndex'] = var4;
                var4 = _closure2_slot2;
                var2['activeIndex'] = var4;
                var3 = _closure2_slot9;
                var2['itemCount'] = var3;
                var1['__closure'] = var2;
                var2 = 6223033172232.0;
                var1['__workletHash'] = var2;
                var2 = _closure1_slot21;
                var1['__initData'] = var2;
                return var1;
            };
            var13 = var7.bind(var5)();
            var8 = 11;
            var7 = var9[var8];
            var7 = var6.bind(var5)(var7);
            var12 = var7.Gesture;
            var7 = var12.Pan;
            var21 = var7.bind(var12)();
            var12 = var21.onStart;
            var7 = function te() {
                var3 = _closure2_slot10;
                var2 = var3.set;
                var4 = _closure2_slot2;
                var1 = var4.get;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var22 = {};
            var22['panIndex'] = var20;
            var22['activeIndex'] = var19;
            var7['__closure'] = var22;
            var22 = 15229934061172.0;
            var7['__workletHash'] = var22;
            var22 = _closure1_slot23;
            var7['__initData'] = var22;
            var12 = var12.bind(var21)(var7);
            var7 = var12.onUpdate;
            var12 = var7.bind(var12)(var13);
            var7 = var12.onEnd;
            var4 = function ee() {
                var4 = _closure2_slot10;
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
                var1 = 3;
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
            var13['panIndex'] = var20;
            var13['activeIndex'] = var19;
            var18 = var9[var18];
            var18 = var6.bind(var5)(var18);
            var18 = var18.runOnJS;
            var13['runOnJS'] = var18;
            var13['setActiveIndex'] = var15;
            var4['__closure'] = var13;
            var13 = 12048468418048.0;
            var4['__workletHash'] = var13;
            var13 = _closure1_slot22;
            var4['__initData'] = var13;
            var7 = var7.bind(var12)(var4);
            var4 = 7;
            var4 = var9[var4];
            var6 = var6.bind(var5)(var4);
            var4 = var6.isAndroid;
            var4 = var4.bind(var6)();
            var9 = 'tabbar';
            if(!var4) { _fun0002_ip = 1791; continue _fun0002 }
 1785:
            var9 = 'tablist';
 1791:
            var12 = _closure1_slot7;
            var6 = _closure1_slot4;
            var4 = {};
            var13 = var11.outerContainer;
            var4['style'] = var13;
            var13 = new Array(2);
            var13[0] = var14;
            var14 = {};
            var14['accessibilityRole'] = var9;
            var9 = var11.controlsContainer;
            var14['style'] = var9;
            var9 = _closure1_slot6;
            var15 = {};
            var18 = false;
            var15['accessible'] = var18;
            var18 = var11.indicatorContainer;
            var15['style'] = var18;
            var15['children'] = var17;
            var17 = var9.bind(var5)(var6, var15);
            var15 = new Array(2);
            var15[0] = var17;
            var15[1] = var16;
            var14['children'] = var15;
            var14 = var12.bind(var5)(var6, var14);
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
            if(!var3) { _fun0002_ip = 2001; continue _fun0002 }
 1957:
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
 2001:
            return var1;
        }
    };
    var3['CustomSegmentedControl'] = var2;
    return var1;
})();