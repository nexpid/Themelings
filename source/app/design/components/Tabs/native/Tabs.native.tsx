// app/design/components/Tabs/native/Tabs.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function defaultCountFormatter(arg1) {
        var3 = arg1;
        var2 = var3.toLocaleString;
        var1 = _closure1_slot5;
        var1 = var1.locale;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot18 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var9 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.View;
    var _closure1_slot4 = var9;
    var9 = var5.ScrollView;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var10 = var5.jsx;
    var _closure1_slot6 = var10;
    var5 = var5.jsxs;
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var7[var5];
    var8 = var8.bind(var1)(var5);
    var5 = var8.createAnimatedComponent;
    var5 = var5.bind(var8)(var9);
    var _closure1_slot8 = var5;
    var5 = {'mass': 0.3, 'damping': 13, 'stiffness': 100, 'restDisplacementThreshold': 0.001, 'overshootClamping': true};
    var _closure1_slot9 = var5;
    var5 = 5;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = function(arg1) {
        var1 = {};
        var2 = {'display': 'flex', 'flexGrow': 1, 'minWidth': '100%', 'flexDirection': 'row', 'alignItems': 'center', 'borderBottomColor': null, 'borderBottomWidth': 1};
        var7 = 'row';
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 6;
        var8 = var6[var3];
        var4 = undefined;
        var8 = var5.bind(var4)(var8);
        var8 = var8.colors;
        var8 = var8.BORDER_SUBTLE;
        var2['borderBottomColor'] = var8;
        var1['container'] = var2;
        var2 = {};
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_16;
        var2['marginHorizontal'] = var8;
        var2['flexDirection'] = var7;
        var7 = arg1;
        var2['gap'] = var7;
        var1['controlsContainer'] = var2;
        var2 = {'position': 'absolute', 'width': '100%', 'height': '100%', 'flexDirection': 'row', 'alignItems': 'flex-end'};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_16;
        var2['marginLeft'] = var7;
        var1['indicatorContainer'] = var2;
        var2 = {};
        var7 = 2;
        var2['height'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.TEXT_BRAND;
        var2['backgroundColor'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.radii;
        var7 = var7.xs;
        var2['borderTopStartRadius'] = var7;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.radii;
        var3 = var3.xs;
        var2['borderTopEndRadius'] = var3;
        var1['indicator'] = var2;
        return var1;
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot10 = var5;
    var5 = {};
    var8 = 'function TabsNativeTsx1(){const{activeIndex,itemCount}=this.__closure;return Math.round(Math.min(Math.max(activeIndex.get(),0),itemCount-1));}';
    var5['code'] = var8;
    var _closure1_slot11 = var5;
    var5 = {};
    var8 = 'function TabsNativeTsx2(){const{itemDimensions,clampedActiveIndex}=this.__closure;const activeItem=itemDimensions.get()[clampedActiveIndex.get()];if(activeItem==null)return 0;return activeItem.width;}';
    var5['code'] = var8;
    var _closure1_slot12 = var5;
    var5 = {};
    var8 = 'function TabsNativeTsx3(){const{itemDimensions,clampedActiveIndex}=this.__closure;var _itemDimensions$get$c,_itemDimensions$get$c2;return(_itemDimensions$get$c=(_itemDimensions$get$c2=itemDimensions.get()[clampedActiveIndex.get()])===null||_itemDimensions$get$c2===void 0?void 0:_itemDimensions$get$c2.x)!==null&&_itemDimensions$get$c!==void 0?_itemDimensions$get$c:0;}';
    var5['code'] = var8;
    var _closure1_slot13 = var5;
    var5 = {};
    var8 = "function TabsNativeTsx4(){const{indicatorTranslateX,pressedIndex,clampedActiveIndex,PRESSED_TRANSLATE_AMOUNT,indicatorWidth,scrollOverflow,interpolate,SCROLL_OVERFLOW_UPPER_BOUND,SCROLL_OVERFLOW_MAX_SCALE,withSpring,SELECTED_INDICATOR_SPRING}=this.__closure;let translateX=indicatorTranslateX.get();let scaleX=1;if(pressedIndex.get()>=0){if(pressedIndex.get()<clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX-=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}else if(pressedIndex.get()>clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX+=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}}if(scrollOverflow.get()<0){const scaleFactor=interpolate(scrollOverflow.get(),[-SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=-scaleAmount/2;}else if(scrollOverflow.get()>0){const scaleFactor=interpolate(scrollOverflow.get(),[SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=scaleAmount/2;}return{width:withSpring(indicatorWidth.get(),SELECTED_INDICATOR_SPRING),transform:[{translateX:withSpring(translateX,SELECTED_INDICATOR_SPRING)},{scaleX:withSpring(scaleX,SELECTED_INDICATOR_SPRING)}]};}";
    var5['code'] = var8;
    var _closure1_slot14 = var5;
    var5 = {};
    var8 = 'function TabsNativeTsx5(event){const{scrollOffset,onScrollWorklet}=this.__closure;var _onScrollWorklet;scrollOffset.set(event.contentOffset.x);(_onScrollWorklet=onScrollWorklet)===null||_onScrollWorklet===void 0||_onScrollWorklet(event.contentOffset.x);}';
    var5['code'] = var8;
    var _closure1_slot15 = var5;
    var5 = {};
    var8 = 'function TabsNativeTsx6(){const{scrollOffset,activeIndex,itemDimensions}=this.__closure;return{scrollOffset:scrollOffset.get(),activeIndex:activeIndex.get(),itemDimensions:itemDimensions.get()};}';
    var5['code'] = var8;
    var _closure1_slot16 = var5;
    var5 = {};
    var8 = 'function TabsNativeTsx7(props,prevState){const{cheapWorkletShallowEqual,itemSpacing,pageWidth,runOnJS,scrollToOffset,AUTO_SCROLL_BUFFER}=this.__closure;var _itemDimensions$activ,_itemDimensions$activ2,_itemDimensions$activ3;if(props.activeIndex===(prevState===null||prevState===void 0?void 0:prevState.activeIndex))return;if(cheapWorkletShallowEqual(props,prevState!==null&&prevState!==void 0?prevState:undefined))return;const{scrollOffset:scrollOffset,activeIndex:activeIndex,itemDimensions:itemDimensions}=props;const width=itemDimensions.reduce(function(sum,item){var _item$width;return sum+((_item$width=item===null||item===void 0?void 0:item.width)!==null&&_item$width!==void 0?_item$width:0);},0);const itemOffset=((_itemDimensions$activ=(_itemDimensions$activ2=itemDimensions[activeIndex])===null||_itemDimensions$activ2===void 0?void 0:_itemDimensions$activ2.x)!==null&&_itemDimensions$activ!==void 0?_itemDimensions$activ:0)+(activeIndex-1)*itemSpacing;const itemWidth=(_itemDimensions$activ3=itemDimensions[activeIndex])===null||_itemDimensions$activ3===void 0?void 0:_itemDimensions$activ3.width;if(width===0||itemOffset==null||itemWidth==null)return;if(scrollOffset+pageWidth<itemOffset+itemWidth){runOnJS(scrollToOffset)(itemOffset+AUTO_SCROLL_BUFFER);}else if(itemOffset<scrollOffset){runOnJS(scrollToOffset)(itemOffset-AUTO_SCROLL_BUFFER);}}';
    var5['code'] = var8;
    var _closure1_slot17 = var5;
    var5 = 12;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'design/components/Tabs/native/Tabs.native.tsx';
    var5 = var6.bind(var7)(var5);
    var3['defaultCountFormatter'] = var4;
    var2 = function Tabs(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var21 = var2.state;
            var _closure2_slot0 = var21;
            var20 = var2.grow;
            var5 = undefined;
            if(!(var20 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var20 = true;
case 2:
            var _closure2_slot1 = var20;
            var22 = var2.formatCount;
            if(!(var22 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var22 = _closure1_slot18;
case 4:
            var _closure2_slot2 = var22;
            var17 = var2.simultaneousHandlers;
            var _closure2_slot3 = var17;
            var32 = var2.onScrollWorklet;
            var _closure2_slot4 = var32;
            var25 = var2.onEndDrag;
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
            var18 = var21.activeIndex;
            _closure2_slot5 = var18;
            var30 = var21.scrollOffset;
            _closure2_slot6 = var30;
            var27 = var21.scrollOverflow;
            _closure2_slot7 = var27;
            var23 = var21.items;
            _closure2_slot8 = var23;
            var26 = var21.itemDimensions;
            _closure2_slot9 = var26;
            var29 = var21.itemSpacing;
            _closure2_slot10 = var29;
            var28 = var21.pageWidth;
            _closure2_slot11 = var28;
            var19 = var21.pressedIndex;
            _closure2_slot12 = var19;
            var4 = var21.setActiveIndex;
            _closure2_slot13 = var4;
            var6 = var21.useReducedMotion;
            _closure2_slot14 = var6;
            var3 = _closure1_slot10;
            var14 = var3.bind(var5)(var29);
            _closure2_slot15 = var14;
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var16 = 4;
            var3 = var13[var16];
            var7 = var11.bind(var5)(var3);
            var3 = var7.useSharedValue;
            var8 = var3.bind(var7)(var28);
            _closure2_slot16 = var8;
            var31 = var23.length;
            _closure2_slot17 = var31;
            var7 = _closure1_slot3;
            var9 = var7.useRef;
            var3 = null;
            var10 = var9.bind(var7)(var3);
            _closure2_slot18 = var10;
            var12 = var7.useCallback;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function(arg1) {
                var3 = _closure2_slot16;
                var2 = var3.set;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var1 = var1.width;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var12 = var12.bind(var7)(var8, var9);
            var8 = var13[var16];
            var15 = var11.bind(var5)(var8);
            var9 = var15.useDerivedValue;
            var8 = function w() {
                var1 = global;
                var3 = var1.Math;
                var2 = var3.round;
                var6 = var1.Math;
                var5 = var6.min;
                var9 = var1.Math;
                var8 = var9.max;
                var7 = _closure2_slot5;
                var4 = var7.get;
                var7 = var4.bind(var7)();
                var4 = 0;
                var4 = var8.bind(var9)(var7, var4);
                var7 = _closure2_slot17;
                var1 = 1;
                var1 = var7 - var1;
                var1 = var5.bind(var6)(var4, var1);
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var24 = {};
            var24['activeIndex'] = var18;
            var24['itemCount'] = var31;
            var8['__closure'] = var24;
            var24 = 3447899396126.0;
            var8['__workletHash'] = var24;
            var24 = _closure1_slot11;
            var8['__initData'] = var24;
            var33 = var9.bind(var15)(var8);
            _closure2_slot19 = var33;
            var8 = var13[var16];
            var15 = var11.bind(var5)(var8);
            var9 = var15.useDerivedValue;
            var8 = function L() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot9;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var3 = _closure2_slot19;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var2 = var2[var1];
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = 0;
                    if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                    var1 = var2.width;
case 4:
                    return var1;
                }
            };
            var24 = {};
            var24['itemDimensions'] = var26;
            var24['clampedActiveIndex'] = var33;
            var8['__closure'] = var24;
            var24 = 8603255620075.0;
            var8['__workletHash'] = var24;
            var24 = _closure1_slot12;
            var8['__initData'] = var24;
            var31 = var9.bind(var15)(var8);
            _closure2_slot20 = var31;
            var8 = var13[var16];
            var15 = var11.bind(var5)(var8);
            var9 = var15.useDerivedValue;
            var8 = function C() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot9;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var3 = _closure2_slot19;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var3 = var2[var1];
                    var1 = null;
                    var4 = var1 == var3;
                    var2 = undefined;
                    if(var4) { _fun0003_ip = 4; continue _fun0003 }
case 6:
                    var2 = var3.x;
case 4:
                    var3 = var1 != var2;
                    var1 = 0;
                    if(!var3) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var1 = var2;
case 7:
                    return var1;
                }
            };
            var24 = {};
            var24['itemDimensions'] = var26;
            var24['clampedActiveIndex'] = var33;
            var8['__closure'] = var24;
            var24 = 3224400863644.0;
            var8['__workletHash'] = var24;
            var24 = _closure1_slot13;
            var8['__initData'] = var24;
            var34 = var9.bind(var15)(var8);
            _closure2_slot21 = var34;
            var8 = var13[var16];
            var15 = var11.bind(var5)(var8);
            var9 = var15.useAnimatedStyle;
            var8 = function W() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot21;
                    var1 = var3.get;
                    var9 = var1.bind(var3)();
                    var3 = _closure2_slot12;
                    var1 = var3.get;
                    var3 = var1.bind(var3)();
                    var1 = 0;
                    var5 = var3 >= var1;
                    var3 = 1;
                    var4 = var9;
                    var7 = var3;
                    if(!var5) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                    var6 = _closure2_slot12;
                    var5 = var6.get;
                    var6 = var5.bind(var6)();
                    var8 = _closure2_slot19;
                    var5 = var8.get;
                    var5 = var5.bind(var8)();
                    if(!(!(var6 < var5))) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                    var6 = _closure2_slot12;
                    var5 = var6.get;
                    var6 = var5.bind(var6)();
                    var8 = _closure2_slot19;
                    var5 = var8.get;
                    var5 = var5.bind(var8)();
                    var8 = var6 > var5;
                    var6 = var9;
                    var5 = var3;
                    if(!var8) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var10 = _closure2_slot20;
                    var8 = var10.get;
                    var10 = var8.bind(var10)();
                    var8 = 0.02;
                    var8 = var8 * var10;
                    var6 = var9 + var8;
                    var5 = 1.04;
case 13:
                    _fun0004_ip = 15; continue _fun0004;
case 11:
                    var10 = _closure2_slot20;
                    var8 = var10.get;
                    var10 = var8.bind(var10)();
                    var8 = 0.02;
                    var8 = var8 * var10;
                    var6 = var9 - var8;
                    var5 = 1.04;
case 15:
                    var4 = var6;
                    var7 = var5;
case 9:
                    var6 = _closure2_slot7;
                    var5 = var6.get;
                    var5 = var5.bind(var6)();
                    if(!(!(var5 < var1))) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var6 = _closure2_slot7;
                    var5 = var6.get;
                    var5 = var5.bind(var6)();
                    var11 = var4;
                    if(!(var5 > var1)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 4;
                    var6 = var6[var5];
                    var5 = undefined;
                    var12 = var8.bind(var5)(var6);
                    var10 = var12.interpolate;
                    var6 = _closure2_slot7;
                    var5 = var6.get;
                    var16 = var5.bind(var6)();
                    var15 = [50, 0];
                    var14 = [0.9, 1];
                    var13 = 'clamp';
                    var17 = var12;
                    var5 = var17[var10](var16, var15, var14, var13, var12);
                    var8 = _closure2_slot20;
                    var6 = var8.get;
                    var8 = var6.bind(var8)();
                    var6 = var3 - var5;
                    var8 = var8 * var6;
                    var6 = 2;
                    var6 = var8 / var6;
                    var11 = var4 + var6;
                    var7 = var5;
                    _fun0004_ip = 18; continue _fun0004;
case 16:
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 4;
                    var6 = var6[var5];
                    var5 = undefined;
                    var10 = var8.bind(var5)(var6);
                    var9 = var10.interpolate;
                    var6 = _closure2_slot7;
                    var5 = var6.get;
                    var16 = var5.bind(var6)();
                    var6 = new Array(2);
                    var5 = -50;
                    var6[0] = var5;
                    var6[1] = var1;
                    var14 = [0.9, 1];
                    var13 = 'clamp';
                    var17 = var10;
                    var15 = var6;
                    var1 = var17[var9](var16, var15, var14, var13, var12);
                    var6 = _closure2_slot20;
                    var5 = var6.get;
                    var5 = var5.bind(var6)();
                    var5 = -var5;
                    var3 = var3 - var1;
                    var5 = var5 * var3;
                    var3 = 2;
                    var3 = var5 / var3;
                    var11 = var4 + var3;
                    var7 = var1;
case 18:
                    var1 = {};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 7;
                    var3 = var9[var4];
                    var5 = undefined;
                    var10 = var8.bind(var5)(var3);
                    var3 = var10.withSpring;
                    var12 = _closure2_slot20;
                    var2 = var12.get;
                    var2 = var2.bind(var12)();
                    var6 = _closure1_slot9;
                    var2 = var3.bind(var10)(var2, var6);
                    var1['width'] = var2;
                    var3 = {};
                    var2 = var9[var4];
                    var10 = var8.bind(var5)(var2);
                    var2 = var10.withSpring;
                    var2 = var2.bind(var10)(var11, var6);
                    var3['translateX'] = var2;
                    var2 = new Array(2);
                    var2[0] = var3;
                    var3 = {};
                    var4 = var9[var4];
                    var5 = var8.bind(var5)(var4);
                    var4 = var5.withSpring;
                    var4 = var4.bind(var5)(var7, var6);
                    var3['scaleX'] = var4;
                    var2[1] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var24 = {};
            var24['indicatorTranslateX'] = var34;
            var24['pressedIndex'] = var19;
            var24['clampedActiveIndex'] = var33;
            var33 = 0.04;
            var24['PRESSED_TRANSLATE_AMOUNT'] = var33;
            var24['indicatorWidth'] = var31;
            var24['scrollOverflow'] = var27;
            var27 = var13[var16];
            var27 = var11.bind(var5)(var27);
            var27 = var27.interpolate;
            var24['interpolate'] = var27;
            var27 = 50;
            var24['SCROLL_OVERFLOW_UPPER_BOUND'] = var27;
            var27 = 0.9;
            var24['SCROLL_OVERFLOW_MAX_SCALE'] = var27;
            var27 = 7;
            var27 = var13[var27];
            var27 = var11.bind(var5)(var27);
            var27 = var27.withSpring;
            var24['withSpring'] = var27;
            var27 = _closure1_slot9;
            var24['SELECTED_INDICATOR_SPRING'] = var27;
            var8['__closure'] = var24;
            var24 = 1794186407627.0;
            var8['__workletHash'] = var24;
            var24 = _closure1_slot14;
            var8['__initData'] = var24;
            var15 = var9.bind(var15)(var8);
            var8 = var13[var16];
            var24 = var11.bind(var5)(var8);
            var9 = var24.useAnimatedScrollHandler;
            var8 = {};
            var27 = function N(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var5 = _closure2_slot6;
                    var4 = var5.set;
                    var3 = var1.contentOffset;
                    var3 = var3.x;
                    var3 = var4.bind(var5)(var3);
                    var4 = _closure2_slot4;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                    var3 = _closure2_slot4;
                    var1 = var1.contentOffset;
                    var2 = var1.x;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 20:
                    var1 = undefined;
                    return var1;
                }
            };
            var31 = {};
            var31['scrollOffset'] = var30;
            var31['onScrollWorklet'] = var32;
            var27['__closure'] = var31;
            var31 = 1586298483424.0;
            var27['__workletHash'] = var31;
            var31 = _closure1_slot15;
            var27['__initData'] = var31;
            var8['onScroll'] = var27;
            var8['onEndDrag'] = var25;
            var8 = var9.bind(var24)(var8);
            var24 = var7.useCallback;
            var9 = new Array(1);
            var9[0] = var6;
            var6 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot18;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0006_ip = 10; continue _fun0006 }
case 22:
                    var2 = var3.scrollTo;
                    var1 = {};
                    var5 = arg1;
                    var1['x'] = var5;
                    var4 = _closure2_slot14;
                    var4 = !var4;
                    var1['animated'] = var4;
                    var1 = var2.bind(var3)(var1);
case 10:
                    var1 = undefined;
                    return var1;
                }
            };
            var27 = var24.bind(var7)(var6, var9);
            _closure2_slot22 = var27;
            var6 = var13[var16];
            var25 = var11.bind(var5)(var6);
            var24 = var25.useAnimatedReaction;
            var9 = function b() {
                var1 = {};
                var4 = _closure2_slot6;
                var3 = var4.get;
                var3 = var3.bind(var4)();
                var1['scrollOffset'] = var3;
                var4 = _closure2_slot5;
                var3 = var4.get;
                var3 = var3.bind(var4)();
                var1['activeIndex'] = var3;
                var3 = _closure2_slot9;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1['itemDimensions'] = var2;
                return var1;
            };
            var6 = {};
            var6['scrollOffset'] = var30;
            var6['activeIndex'] = var18;
            var6['itemDimensions'] = var26;
            var9['__closure'] = var6;
            var6 = 11927547413410.0;
            var9['__workletHash'] = var6;
            var6 = _closure1_slot16;
            var9['__initData'] = var6;
            var6 = function $(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = arg1;
                    var7 = arg2;
                    var4 = var2.activeIndex;
                    var8 = null;
                    var5 = var8 == var7;
                    var1 = undefined;
                    var3 = undefined;
                    if(var5) { _fun0007_ip = 23; continue _fun0007 }
case 24:
                    var3 = var7.activeIndex;
case 23:
                    if(!(var4 !== var3)) { _fun0007_ip = 25; continue _fun0007 }
case 26:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 8;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.cheapWorkletShallowEqual;
                    var9 = var8 != var7;
                    var4 = undefined;
                    if(!var9) { _fun0007_ip = 27; continue _fun0007 }
case 28:
                    var4 = var7;
case 27:
                    var4 = var5.bind(var6)(var2, var4);
                    if(var4) { _fun0007_ip = 25; continue _fun0007 }
case 29:
                    var5 = var2.scrollOffset;
                    var10 = var2.activeIndex;
                    var6 = var2.itemDimensions;
                    var4 = var6.reduce;
                    var2 = function(arg1, arg2) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var3 = arg2;
                            var2 = null;
                            var4 = var2 == var3;
                            var1 = undefined;
                            if(var4) { _fun0008_ip = 30; continue _fun0008 }
case 31:
                            var1 = var3.width;
case 30:
                            var3 = var2 != var1;
                            var2 = 0;
                            if(!var3) { _fun0008_ip = 23; continue _fun0008 }
case 2:
                            var2 = var1;
case 23:
                            var1 = arg1;
                            var1 = var1 + var2;
                            return var1;
                        }
                    };
                    var9 = 0;
                    var7 = var4.bind(var6)(var2, var9);
                    var4 = var6[var10];
                    var11 = var8 == var4;
                    var2 = undefined;
                    if(var11) { _fun0007_ip = 32; continue _fun0007 }
case 33:
                    var2 = var4.x;
case 32:
                    var4 = var8 != var2;
                    var11 = 0;
                    if(!var4) { _fun0007_ip = 11; continue _fun0007 }
case 34:
                    var11 = var2;
case 11:
                    var2 = 1;
                    var12 = var10 - var2;
                    var4 = _closure2_slot10;
                    var4 = var12 * var4;
                    var4 = var11 + var4;
                    var10 = var6[var10];
                    var11 = var8 == var10;
                    var6 = undefined;
                    if(var11) { _fun0007_ip = 35; continue _fun0007 }
case 36:
                    var6 = var10.width;
case 35:
                    var7 = var9 !== var7;
                    if(!var7) { _fun0007_ip = 37; continue _fun0007 }
case 9:
                    var7 = var8 != var4;
case 37:
                    if(!var7) { _fun0007_ip = 38; continue _fun0007 }
case 39:
                    var7 = var8 != var6;
case 38:
                    if(!var7) { _fun0007_ip = 25; continue _fun0007 }
case 40:
                    var7 = _closure2_slot11;
                    var7 = var5 + var7;
                    var6 = var4 + var6;
                    if(!(!(var7 < var6))) { _fun0007_ip = 41; continue _fun0007 }
case 42:
                    if(!(var4 < var5)) { _fun0007_ip = 25; continue _fun0007 }
case 43:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 4;
                    var5 = var7[var5];
                    var7 = var6.bind(var1)(var5);
                    var6 = var7.runOnJS;
                    var5 = _closure2_slot22;
                    var6 = var6.bind(var7)(var5);
                    var5 = 16;
                    var5 = var4 - var5;
                    var5 = var6.bind(var1)(var5);
                    _fun0007_ip = 25; continue _fun0007;
case 41:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 4;
                    var3 = var6[var3];
                    var5 = var5.bind(var1)(var3);
                    var3 = var5.runOnJS;
                    var2 = _closure2_slot22;
                    var3 = var3.bind(var5)(var2);
                    var2 = 16;
                    var2 = var4 + var2;
                    var2 = var3.bind(var1)(var2);
case 25:
                    return var1;
                }
            };
            var26 = {};
            var30 = 8;
            var30 = var13[var30];
            var30 = var11.bind(var5)(var30);
            var30 = var30.cheapWorkletShallowEqual;
            var26['cheapWorkletShallowEqual'] = var30;
            var26['itemSpacing'] = var29;
            var26['pageWidth'] = var28;
            var28 = var13[var16];
            var28 = var11.bind(var5)(var28);
            var28 = var28.runOnJS;
            var26['runOnJS'] = var28;
            var26['scrollToOffset'] = var27;
            var27 = 16;
            var26['AUTO_SCROLL_BUFFER'] = var27;
            var6['__closure'] = var26;
            var26 = 8832951278566.0;
            var6['__workletHash'] = var26;
            var26 = _closure1_slot17;
            var6['__initData'] = var26;
            var6 = var24.bind(var25)(var9, var6);
            var9 = var7.useMemo;
            var6 = new Array(8);
            var6[0] = var23;
            var6[1] = var22;
            var6[2] = var21;
            var6[3] = var20;
            var6[4] = var19;
            var6[5] = var18;
            var6[6] = var4;
            var4 = var14.controlsContainer;
            var6[7] = var4;
            var4 = function() {
                var4 = _closure1_slot6;
                var3 = _closure1_slot4;
                var2 = {};
                var5 = _closure2_slot15;
                var5 = var5.controlsContainer;
                var2['style'] = var5;
                var6 = _closure2_slot8;
                var5 = var6.map;
                var1 = function(arg1, arg2) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var1 = arg1;
                        var8 = arg2;
                        var7 = var1.label;
                        var10 = var1.count;
                        var5 = var1.id;
                        var _closure4_slot0 = var8;
                        var4 = _closure1_slot6;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 9;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.TabItem;
                        var1 = {};
                        var1['index'] = var8;
                        var1['label'] = var7;
                        var7 = null;
                        var9 = var7 != var10;
                        var7 = undefined;
                        if(!var9) { _fun0009_ip = 44; continue _fun0009 }
case 45:
                        var9 = _closure2_slot2;
                        var7 = var9.bind(var3)(var10);
case 44:
                        var1['count'] = var7;
                        var9 = _closure2_slot0;
                        var1['state'] = var9;
                        var9 = _closure2_slot1;
                        var1['grow'] = var9;
                        var9 = _closure2_slot12;
                        var1['pressed'] = var9;
                        var9 = _closure2_slot5;
                        var7 = var9.get;
                        var7 = var7.bind(var9)();
                        var7 = var8 === var7;
                        var1['selected'] = var7;
                        var7 = function onPress() {
                            var3 = _closure2_slot13;
                            var2 = _closure4_slot0;
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var1['onPress'] = var7;
                        var7 = function onPressIn() {
                            var3 = _closure2_slot12;
                            var2 = var3.set;
                            var1 = _closure4_slot0;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        var1['onPressIn'] = var7;
                        var6 = function onPressOut() {
                            var3 = _closure2_slot12;
                            var2 = var3.set;
                            var1 = -1;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        var1['onPressOut'] = var6;
                        var1 = var4.bind(var3)(var2, var1, var5);
                        return var1;
                    }
                };
                var1 = var5.bind(var6)(var1);
                var2['children'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var9 = var9.bind(var7)(var4, var6);
            var6 = var7.useMemo;
            var4 = new Array(1);
            var4[0] = var17;
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    var3 = var1 == var3;
                    if(var3) { _fun0010_ip = 46; continue _fun0010 }
case 47:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 10;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var4 = var3.Gesture;
                    var3 = var4.Native;
                    var4 = var3.bind(var4)();
                    var3 = var4.simultaneousWithExternalGesture;
                    var2 = _closure2_slot3;
                    var1 = var3.bind(var4)(var2);
case 46:
                    return var1;
                }
            };
            var7 = var6.bind(var7)(var1, var4);
            var6 = _closure1_slot7;
            var4 = _closure1_slot8;
            var1 = {'ref': null, 'accessibilityRole': null, 'keyboardShouldPersistTaps': 'handled', 'horizontal': true, 'onScroll': null, 'scrollEventThrottle': 16, 'showsHorizontalScrollIndicator': false};
            var1['ref'] = var10;
            var10 = 11;
            var10 = var13[var10];
            var11 = var11.bind(var5)(var10);
            var10 = var11.isIOS;
            var11 = var10.bind(var11)();
            var10 = undefined;
            if(!var11) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var10 = 'tabbar';
case 48:
            var1['accessibilityRole'] = var10;
            var1['onScroll'] = var8;
            var8 = false;
            var10 = var14.container;
            var1['contentContainerStyle'] = var10;
            var1['bounces'] = var8;
            var11 = _closure1_slot6;
            var10 = _closure1_slot4;
            var8 = {};
            var13 = var14.indicatorContainer;
            var8['style'] = var13;
            var8['onLayout'] = var12;
            var13 = _closure1_slot1;
            var12 = _closure1_slot2;
            var12 = var12[var16];
            var12 = var13.bind(var5)(var12);
            var13 = var12.View;
            var12 = {};
            var16 = var14.indicator;
            var14 = new Array(2);
            var14[0] = var16;
            var14[1] = var15;
            var12['style'] = var14;
            var12 = var11.bind(var5)(var13, var12);
            var8['children'] = var12;
            var10 = var11.bind(var5)(var10, var8);
            var8 = new Array(2);
            var8[0] = var10;
            var8[1] = var9;
            var1['children'] = var8;
            var6 = var6.bind(var5)(var4, var1);
            var1 = var6;
            if(!(var3 != var7)) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var4 = _closure1_slot6;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 10;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.GestureDetector;
            var2 = {};
            var2['gesture'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 50:
            return var1;
        }
    };
    var3['Tabs'] = var2;
    return var1;
})();