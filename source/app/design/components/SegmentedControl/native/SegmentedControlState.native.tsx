// app/design/components/SegmentedControl/native/SegmentedControlState.native.tsx
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
    var4 = {};
    var7 = 'function SegmentedControlStateNativeTsx1(index,dimensions){const{itemDimensions,itemCount}=this.__closure;itemDimensions.get()[index]=dimensions;itemDimensions.set([...itemDimensions.get()].slice(0,itemCount));}';
    var4['code'] = var7;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/SegmentedControl/native/SegmentedControlState.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSegmentedControlState(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var12 = var2.items;
            var _closure2_slot0 = var12;
            var9 = var2.pageWidth;
            var _closure2_slot1 = var9;
            var22 = var2.defaultIndex;
            var20 = undefined;
            if(!(var22 === var20)) { _fun0001_ip = 39; continue _fun0001 }
 37:
            var22 = 0;
 39:
            var10 = var2.itemSpacing;
            if(!(var10 === var20)) { _fun0001_ip = 83; continue _fun0001 }
 49:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 1;
            var3 = var5[var3];
            var3 = var4.bind(var20)(var3);
            var3 = var3.spacing;
            var10 = var3.PX_24;
 83:
            var _closure2_slot2 = var10;
            var6 = var2.onPageChange;
            var _closure2_slot3 = var6;
            var18 = var2.onPageChangeStart;
            var _closure2_slot4 = var18;
            var3 = var2.onSetActiveIndex;
            var _closure2_slot5 = var3;
            var _closure2_slot6 = var20;
            var _closure2_slot7 = var20;
            var _closure2_slot8 = var20;
            var _closure2_slot9 = var20;
            var _closure2_slot10 = var20;
            var _closure2_slot11 = var20;
            var _closure2_slot12 = var20;
            var _closure2_slot13 = var20;
            var _closure2_slot14 = var20;
            var _closure2_slot15 = var20;
            var _closure2_slot16 = var20;
            var _closure2_slot17 = var20;
            var4 = _closure1_slot3;
            var7 = var4.useContext;
            var8 = _closure1_slot0;
            var21 = _closure1_slot2;
            var5 = 2;
            var5 = var21[var5];
            var5 = var8.bind(var20)(var5);
            var5 = var5.AccessibilityPreferencesContext;
            var5 = var7.bind(var4)(var5);
            var5 = var5.reducedMotion;
            var5 = var5.enabled;
            _closure2_slot6 = var5;
            var7 = 3;
            var11 = var21[var7];
            var14 = var8.bind(var20)(var11);
            var13 = var14.useSharedValue;
            var11 = new Array(0);
            var11 = var13.bind(var14)(var11);
            _closure2_slot7 = var11;
            var13 = var21[var7];
            var14 = var8.bind(var20)(var13);
            var13 = var14.useSharedValue;
            var19 = -1;
            var15 = var13.bind(var14)(var19);
            _closure2_slot8 = var15;
            var13 = var21[var7];
            var14 = var8.bind(var20)(var13);
            var13 = var14.useSharedValue;
            var17 = 0;
            var14 = var13.bind(var14)(var17);
            _closure2_slot9 = var14;
            var13 = var21[var7];
            var16 = var8.bind(var20)(var13);
            var13 = var16.useSharedValue;
            var13 = var13.bind(var16)(var17);
            _closure2_slot10 = var13;
            var16 = var21[var7];
            var17 = var8.bind(var20)(var16);
            var16 = var17.useSharedValue;
            var17 = var16.bind(var17)(var22);
            _closure2_slot11 = var17;
            var16 = var21[var7];
            var22 = var8.bind(var20)(var16);
            var16 = var22.useAnimatedRef;
            var16 = var16.bind(var22)();
            _closure2_slot12 = var16;
            var7 = var21[var7];
            var8 = var8.bind(var20)(var7);
            var7 = var8.useSharedValue;
            var8 = var7.bind(var8)(var19);
            _closure2_slot13 = var8;
            var7 = var4.useRef;
            var7 = var7.bind(var4)(var6);
            _closure2_slot14 = var7;
            var19 = var4.useLayoutEffect;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var2 = _closure2_slot14;
                var1 = _closure2_slot3;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var6 = var19.bind(var4)(var6, var7);
            var7 = var4.useCallback;
            var6 = new Array(7);
            var6[0] = var17;
            var6[1] = var18;
            var6[2] = var9;
            var6[3] = var15;
            var6[4] = var16;
            var6[5] = var5;
            var6[6] = var3;
            var3 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = arg1;
                    var3 = arguments[1];
                    var _closure3_slot0 = var4;
                    var1 = undefined;
                    if(!(var3 === var1)) { _fun0002_ip = 20; continue _fun0002 }
 18:
                    var3 = true;
 20:
                    var5 = function updateIndex(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var3 = arg1;
                            var4 = _closure2_slot11;
                            var1 = var4.set;
                            var1 = var1.bind(var4)(var3);
                            var1 = _closure2_slot1;
                            var8 = var3 * var1;
                            var4 = _closure2_slot8;
                            var1 = var4.set;
                            var1 = var1.bind(var4)(var8);
                            var1 = _closure2_slot12;
                            var5 = null;
                            var4 = var5 == var1;
                            var1 = undefined;
                            var7 = undefined;
                            if(var4) { _fun0003_ip = 75; continue _fun0003 }
 59:
                            var6 = _closure2_slot12;
                            var6 = var6.current;
                            var4 = var5 == var6;
                            var7 = var6;
 75:
                            if(var4) { _fun0003_ip = 107; continue _fun0003 }
 78:
                            var6 = var7.scrollTo;
                            var4 = {};
                            var4['x'] = var8;
                            var8 = _closure2_slot6;
                            var8 = !var8;
                            var4['animated'] = var8;
                            var4 = var6.bind(var7)(var4);
 107:
                            var4 = _closure2_slot5;
                            if(!(var5 != var4)) { _fun0003_ip = 124; continue _fun0003 }
 115:
                            var2 = _closure2_slot5;
                            var2 = var2.bind(var1)(var3);
 124:
                            return var1;
                        }
                    };
                    var _closure3_slot1 = var5;
                    if(!var3) { _fun0002_ip = 52; continue _fun0002 }
 32:
                    var7 = _closure2_slot11;
                    var6 = var7.get;
                    var6 = var6.bind(var7)();
                    var3 = var6 !== var4;
 52:
                    if(!var3) { _fun0002_ip = 110; continue _fun0002 }
 55:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 4;
                    var6 = var9[var3];
                    var7 = var8.bind(var1)(var6);
                    var6 = var7.triggerHapticFeedback;
                    var3 = var9[var3];
                    var3 = var8.bind(var1)(var3);
                    var3 = var3.HapticFeedbackTypes;
                    var3 = var3.IMPACT_MEDIUM;
                    var3 = var6.bind(var7)(var3);
 110:
                    var7 = _closure2_slot11;
                    var6 = var7.get;
                    var6 = var6.bind(var7)();
                    if(!(var4 !== var6)) { _fun0002_ip = 162; continue _fun0002 }
 130:
                    var7 = _closure2_slot4;
                    var6 = null;
                    if(!(var6 == var7)) { _fun0002_ip = 147; continue _fun0002 }
 140:
                    var5 = var5.bind(var1)(var4);
                    _fun0002_ip = 162; continue _fun0002;
 147:
                    var3 = _closure2_slot4;
                    var2 = function() {
                        var3 = _closure3_slot1;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = var3.bind(var1)(var4, var2);
 162:
                    return var1;
                }
            };
            var7 = var7.bind(var4)(var3, var6);
            _closure2_slot15 = var7;
            var18 = var12.length;
            _closure2_slot16 = var18;
            var6 = var4.useCallback;
            var3 = function M(arg1, arg2) {
                var3 = _closure2_slot7;
                var2 = var3.get;
                var4 = var2.bind(var3)();
                var3 = arg2;
                var2 = arg1;
                var4[var2] = var3;
                var3 = _closure2_slot7;
                var2 = var3.set;
                var5 = _closure2_slot7;
                var4 = var5.get;
                var8 = var4.bind(var5)();
                var6 = new Array(0);
                var5 = 0;
                var9 = var6;
                var7 = 0;
                var4 = arraySpread(var9, var8, var7);
                var4 = var6.slice;
                var1 = _closure2_slot16;
                var1 = var4.bind(var6)(var5, var1);
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var19 = {};
            var19['itemDimensions'] = var11;
            var19['itemCount'] = var18;
            var3['__closure'] = var19;
            var19 = 9501406272062.0;
            var3['__workletHash'] = var19;
            var2 = _closure1_slot4;
            var3['__initData'] = var2;
            var2 = new Array(2);
            var2[0] = var11;
            var2[1] = var18;
            var6 = var6.bind(var4)(var3, var2);
            _closure2_slot17 = var6;
            var3 = var4.useMemo;
            var2 = new Array(13);
            var2[0] = var17;
            var2[1] = var16;
            var2[2] = var15;
            var2[3] = var14;
            var2[4] = var13;
            var2[5] = var12;
            var2[6] = var11;
            var2[7] = var10;
            var2[8] = var9;
            var2[9] = var8;
            var2[10] = var7;
            var2[11] = var6;
            var2[12] = var5;
            var1 = function() {
                var1 = {};
                var3 = _closure2_slot11;
                var1['activeIndex'] = var3;
                var3 = _closure2_slot12;
                var1['pagerRef'] = var3;
                var3 = _closure2_slot8;
                var1['scrollTarget'] = var3;
                var3 = _closure2_slot9;
                var1['scrollOverflow'] = var3;
                var3 = _closure2_slot10;
                var1['scrollOffset'] = var3;
                var3 = _closure2_slot0;
                var1['items'] = var3;
                var3 = _closure2_slot7;
                var1['itemDimensions'] = var3;
                var3 = _closure2_slot2;
                var1['itemSpacing'] = var3;
                var3 = _closure2_slot1;
                var1['pageWidth'] = var3;
                var3 = _closure2_slot13;
                var1['pressedIndex'] = var3;
                var3 = _closure2_slot14;
                var1['onPageChangeRef'] = var3;
                var3 = _closure2_slot15;
                var1['setActiveIndex'] = var3;
                var3 = _closure2_slot17;
                var1['setItemDimensions'] = var3;
                var2 = _closure2_slot6;
                var1['useReducedMotion'] = var2;
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useSegmentedControlState'] = var2;
    return var1;
})();