// app/modules/action_sheet/native/PanGestureAnimations.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var10;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var6 = {'damping': 30, 'mass': 1, 'stiffness': 250, 'overshootClamping': true, 'restSpeedThreshold': 0.001, 'restDisplacementThreshold': 0.001};
    var _closure1_slot2 = var6;
    var5 = {};
    var1 = 500;
    var5['duration'] = var1;
    var1 = 0;
    var2 = var10[var1];
    var1 = undefined;
    var2 = var9.bind(var1)(var2);
    var2 = var2.STANDARD_EASING;
    var5['easing'] = var2;
    var _closure1_slot3 = var5;
    var2 = {};
    var4 = "function getNearestValue_PanGestureAnimationsTsx1(array,measure,velocity=0){const unitVector=velocity<0?-1:velocity>0?1:0;function getSortedByMeasure(array,measure){'worklet';const sorted=new Array(...array).sort(function(left,right){const al=Math.abs(left-measure);const ar=Math.abs(right-measure);return al<ar?-1:al>ar?1:0;});return sorted;}if(array.length===0){return measure;}const sorted=getSortedByMeasure(array,measure);if(unitVector!==0){var _sorted$find;return(_sorted$find=sorted.find(function(value){const result=unitVector<0?measure>value:measure<value;return result;}))!==null&&_sorted$find!==void 0?_sorted$find:sorted[0];}return sorted[0];}";
    var2['code'] = var4;
    var _closure1_slot4 = var2;
    var2 = {};
    var4 = 'function getSortedByMeasure_PanGestureAnimationsTsx2(array,measure){const sorted=new Array(...array).sort(function(left,right){const al=Math.abs(left-measure);const ar=Math.abs(right-measure);return al<ar?-1:al>ar?1:0;});return sorted;}';
    var2['code'] = var4;
    var _closure1_slot5 = var2;
    var2 = function() {
        var1 = function getNearestValue(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var7 = arg1;
                var1 = arg2;
                var3 = arguments[2];
                var _closure3_slot0 = var1;
                var6 = undefined;
                if(!(var3 === var6)) { _fun0001_ip = 23; continue _fun0001 }
 21:
                var3 = 0;
 23:
                var _closure3_slot1 = var6;
                var4 = 0;
                var8 = var3 < var4;
                var5 = -1;
                if(var8) { _fun0001_ip = 57; continue _fun0001 }
 42:
                var8 = var3 > var4;
                var3 = 0;
                if(!var8) { _fun0001_ip = 54; continue _fun0001 }
 51:
                var3 = 1;
 54:
                var5 = var3;
 57:
                _closure3_slot1 = var5;
                var3 = function() {
                    var1 = function getSortedByMeasure(arg1, arg2) {
                        var2 = arg2;
                        var _closure5_slot0 = var2;
                        var2 = global;
                        var3 = var2.Array;
                        var2 = new Array(0);
                        var7 = arg1;
                        var6 = 0;
                        var8 = var2;
                        var4 = arraySpread(var8, var7, var6);
                        var8 = var3;
                        var7 = var2;
                        var3 = apply(var8, var7);
                        var2 = var3.sort;
                        var1 = function(arg1, arg2) {
                            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                                var1 = global;
                                var4 = var1.Math;
                                var3 = var4.abs;
                                var5 = _closure5_slot0;
                                var2 = arg1;
                                var2 = var2 - var5;
                                var3 = var3.bind(var4)(var2);
                                var4 = var1.Math;
                                var2 = var4.abs;
                                var1 = arg2;
                                var1 = var1 - var5;
                                var2 = var2.bind(var4)(var1);
                                var4 = var3 < var2;
                                var1 = -1;
                                if(var4) { _fun0002_ip = 85; continue _fun0002 }
 70:
                                var3 = var3 > var2;
                                var2 = 0;
                                if(!var3) { _fun0002_ip = 82; continue _fun0002 }
 79:
                                var2 = 1;
 82:
                                var1 = var2;
 85:
                                return var1;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var2 = {};
                    var1['__closure'] = var2;
                    var2 = 9192847351523.0;
                    var1['__workletHash'] = var2;
                    var2 = _closure1_slot5;
                    var1['__initData'] = var2;
                    return var1;
                };
                var3 = var3.bind(var6)();
                var8 = var7.length;
                if(!(var4 !== var8)) { _fun0001_ip = 121; continue _fun0001 }
 81:
                var3 = var3.bind(var6)(var7, var1);
                if(!(var4 !== var5)) { _fun0001_ip = 115; continue _fun0001 }
 91:
                var5 = var3.find;
                var2 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var3 = arg1;
                        var4 = _closure3_slot1;
                        var1 = 0;
                        if(!(!(var4 < var1))) { _fun0003_ip = 26; continue _fun0003 }
 16:
                        var1 = _closure3_slot0;
                        var1 = var1 < var3;
                        _fun0003_ip = 34; continue _fun0003;
 26:
                        var2 = _closure3_slot0;
                        var1 = var2 > var3;
 34:
                        return var1;
                    }
                };
                var2 = var5.bind(var3)(var2);
                var5 = null;
                if(!(var5 == var2)) { _fun0001_ip = 119; continue _fun0001 }
 115:
                var2 = var3[var4];
 119:
                return var2;
 121:
                return var1;
            }
        };
        var2 = {};
        var1['__closure'] = var2;
        var2 = 4186929947751.0;
        var1['__workletHash'] = var2;
        var2 = _closure1_slot4;
        var1['__initData'] = var2;
        return var1;
    };
    var2 = var2.bind(var1)();
    var _closure1_slot6 = var2;
    var2 = {};
    var4 = 'function withPanGestureSpring_PanGestureAnimationsTsx3(destination,velocity,config){const{SPRING_CONFIG,withSpring}=this.__closure;const springConfig=config!==null&&config!==void 0?config:SPRING_CONFIG;return withSpring(destination,{...springConfig,velocity:velocity});}';
    var2['code'] = var4;
    var _closure1_slot7 = var2;
    var2 = function() {
        var1 = function withPanGestureSpring(arg1, arg2, arg3) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = arg3;
                var2 = null;
                if(!(var2 == var1)) { _fun0004_ip = 16; continue _fun0004 }
 9:
                var1 = _closure1_slot2;
 16:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 1;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.withSpring;
                var2 = {};
                var7 = var2;
                var6 = var1;
                var1 = copyDataProperties(var7, var6);
                var5 = arg2;
                var1 = 'velocity';
                var2[var1] = var5;
                var1 = arg1;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            }
        };
        var3 = {};
        var4 = _closure1_slot2;
        var3['SPRING_CONFIG'] = var4;
        var6 = _closure1_slot0;
        var5 = _closure1_slot1;
        var4 = 1;
        var5 = var5[var4];
        var4 = undefined;
        var4 = var6.bind(var4)(var5);
        var4 = var4.withSpring;
        var3['withSpring'] = var4;
        var1['__closure'] = var3;
        var3 = 12189464558811.0;
        var1['__workletHash'] = var3;
        var2 = _closure1_slot7;
        var1['__initData'] = var2;
        return var1;
    };
    var4 = var2.bind(var1)();
    var _closure1_slot8 = var4;
    var2 = {};
    var8 = 'function withPanGestureTiming_PanGestureAnimationsTsx4(destination,config){const{TIMING_CONFIG,withTiming}=this.__closure;const timingConfig=config!==null&&config!==void 0?config:TIMING_CONFIG;return withTiming(destination,timingConfig);}';
    var2['code'] = var8;
    var _closure1_slot9 = var2;
    var2 = function() {
        var1 = function withPanGestureTiming(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = arg2;
                var1 = null;
                if(!(var1 == var4)) { _fun0005_ip = 16; continue _fun0005 }
 9:
                var4 = _closure1_slot3;
 16:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.withTiming;
                var1 = arg1;
                var1 = var2.bind(var3)(var1, var4);
                return var1;
            }
        };
        var3 = {};
        var4 = _closure1_slot3;
        var3['TIMING_CONFIG'] = var4;
        var6 = _closure1_slot0;
        var5 = _closure1_slot1;
        var4 = 2;
        var5 = var5[var4];
        var4 = undefined;
        var4 = var6.bind(var4)(var5);
        var4 = var4.withTiming;
        var3['withTiming'] = var4;
        var1['__closure'] = var3;
        var3 = 7636074551896.0;
        var1['__workletHash'] = var3;
        var2 = _closure1_slot9;
        var1['__initData'] = var2;
        return var1;
    };
    var2 = var2.bind(var1)();
    var _closure1_slot10 = var2;
    var8 = {};
    var11 = 'function PanGestureAnimationsTsx5(){const{isGestureInProgress}=this.__closure;if(isGestureInProgress!=null){isGestureInProgress.set(false);}}';
    var8['code'] = var11;
    var _closure1_slot11 = var8;
    var8 = {};
    var11 = 'function PanGestureAnimationsTsx6(event,success){const{start,translate,snapPositions,velocity,swipeVelocityThreshold,getNearestValue,withPanGestureSpring,withPanGestureTiming,onEnd}=this.__closure;start.set(translate.get());if(snapPositions!=null){var _onEnd;const swipeVelocity=Math.abs(velocity.get())>swipeVelocityThreshold?velocity.get():0;const snapPoint=getNearestValue(snapPositions.get(),translate.get(),swipeVelocity);if(swipeVelocity!==0){translate.set(withPanGestureSpring(snapPoint,velocity.get()));}else{translate.set(withPanGestureTiming(snapPoint));}(_onEnd=onEnd)===null||_onEnd===void 0||_onEnd(event,{success:success,destination:snapPoint,startPosition:start.get()});}}';
    var8['code'] = var11;
    var _closure1_slot12 = var8;
    var8 = {};
    var11 = 'function PanGestureAnimationsTsx7(event){const{start,vertical,lowerBounds,upperBounds,velocity,translate,onChange}=this.__closure;var _onChange;const{velocityY:velocityY,translationY:translationY,velocityX:velocityX,translationX:translationX}=event;let next=start.get()+(vertical?translationY:translationX);if(lowerBounds!=null&&next<lowerBounds){next=lowerBounds;}else if(upperBounds!=null&&next>upperBounds){next=upperBounds;}velocity.set(vertical?velocityY:velocityX);translate.set(next);(_onChange=onChange)===null||_onChange===void 0||_onChange(event,{destination:translate.get(),startPosition:start.get()});}';
    var8['code'] = var11;
    var _closure1_slot13 = var8;
    var8 = {};
    var11 = 'function PanGestureAnimationsTsx8(event){const{start,translate,velocity,isGestureInProgress,onStart}=this.__closure;var _onStart;start.set(translate.get());velocity.set(0);if(isGestureInProgress!=null){isGestureInProgress.set(true);}(_onStart=onStart)===null||_onStart===void 0||_onStart(event,{destination:start.get(),startPosition:start.get()});}';
    var8['code'] = var11;
    var _closure1_slot14 = var8;
    var8 = 5;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/action_sheet/native/PanGestureAnimations.tsx';
    var8 = var9.bind(var10)(var8);
    var7 = function usePanGesture(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg1;
            var16 = var2.lowerBounds;
            var _closure2_slot0 = var16;
            var15 = var2.upperBounds;
            var _closure2_slot1 = var15;
            var11 = var2.snapPositions;
            var _closure2_slot2 = var11;
            var9 = var2.swipeVelocityThreshold;
            var5 = undefined;
            if(!(var9 === var5)) { _fun0006_ip = 53; continue _fun0006 }
 47:
            var9 = 300;
 53:
            var _closure2_slot3 = var9;
            var12 = var2.translate;
            var _closure2_slot4 = var12;
            var18 = var2.onStart;
            var _closure2_slot5 = var18;
            var14 = var2.onChange;
            var _closure2_slot6 = var14;
            var8 = var2.onEnd;
            var _closure2_slot7 = var8;
            var17 = var2.vertical;
            if(!(var17 === var5)) { _fun0006_ip = 109; continue _fun0006 }
 107:
            var17 = true;
 109:
            var _closure2_slot8 = var17;
            var6 = var2.isGestureInProgress;
            var _closure2_slot9 = var6;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var3 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 3;
            var10 = var7[var2];
            var13 = var3.bind(var5)(var10);
            var10 = var13.useSharedValue;
            var19 = 0;
            var13 = var10.bind(var13)(var19);
            _closure2_slot10 = var13;
            var2 = var7[var2];
            var10 = var3.bind(var5)(var2);
            var2 = var10.useSharedValue;
            var10 = var2.bind(var10)(var19);
            _closure2_slot11 = var10;
            var2 = 4;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Gesture;
            var2 = var3.Pan;
            var5 = var2.bind(var3)();
            var3 = var5.onStart;
            var2 = function N(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var4 = _closure2_slot10;
                    var3 = var4.set;
                    var5 = _closure2_slot4;
                    var2 = var5.get;
                    var2 = var2.bind(var5)();
                    var2 = var3.bind(var4)(var2);
                    var4 = _closure2_slot11;
                    var3 = var4.set;
                    var2 = 0;
                    var2 = var3.bind(var4)(var2);
                    var2 = _closure2_slot9;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0007_ip = 72; continue _fun0007 }
 56:
                    var5 = _closure2_slot9;
                    var4 = var5.set;
                    var2 = true;
                    var2 = var4.bind(var5)(var2);
 72:
                    var2 = _closure2_slot5;
                    if(!(var3 != var2)) { _fun0007_ip = 133; continue _fun0007 }
 80:
                    var4 = _closure2_slot5;
                    var3 = {};
                    var5 = _closure2_slot10;
                    var2 = var5.get;
                    var2 = var2.bind(var5)();
                    var3['destination'] = var2;
                    var2 = _closure2_slot10;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var3['startPosition'] = var1;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var4.bind(var2)(var1, var3);
 133:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = {};
            var7['start'] = var13;
            var7['translate'] = var12;
            var7['velocity'] = var10;
            var7['isGestureInProgress'] = var6;
            var7['onStart'] = var18;
            var2['__closure'] = var7;
            var7 = 7008504704609.0;
            var2['__workletHash'] = var7;
            var7 = _closure1_slot14;
            var2['__initData'] = var7;
            var5 = var3.bind(var5)(var2);
            var3 = var5.onChange;
            var2 = function C(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var4 = arg1;
                    var8 = var4.velocityY;
                    var5 = var4.translationY;
                    var7 = var4.velocityX;
                    var3 = var4.translationX;
                    var6 = _closure2_slot10;
                    var2 = var6.get;
                    var2 = var2.bind(var6)();
                    var6 = _closure2_slot8;
                    if(!var6) { _fun0008_ip = 53; continue _fun0008 }
 50:
                    var3 = var5;
 53:
                    var6 = var2 + var3;
                    var2 = _closure2_slot0;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0008_ip = 75; continue _fun0008 }
 67:
                    var2 = _closure2_slot0;
                    if(!(!(var6 < var2))) { _fun0008_ip = 103; continue _fun0008 }
 75:
                    var2 = _closure2_slot1;
                    var2 = var3 != var2;
                    if(!var2) { _fun0008_ip = 94; continue _fun0008 }
 86:
                    var5 = _closure2_slot1;
                    var2 = var6 > var5;
 94:
                    if(!var2) { _fun0008_ip = 107; continue _fun0008 }
 97:
                    var6 = _closure2_slot1;
                    _fun0008_ip = 107; continue _fun0008;
 103:
                    var6 = _closure2_slot0;
 107:
                    var5 = _closure2_slot11;
                    var2 = var5.set;
                    var9 = _closure2_slot8;
                    if(!var9) { _fun0008_ip = 126; continue _fun0008 }
 123:
                    var7 = var8;
 126:
                    var2 = var2.bind(var5)(var7);
                    var5 = _closure2_slot4;
                    var2 = var5.set;
                    var2 = var2.bind(var5)(var6);
                    var2 = _closure2_slot6;
                    if(!(var3 != var2)) { _fun0008_ip = 203; continue _fun0008 }
 153:
                    var3 = _closure2_slot6;
                    var2 = {};
                    var6 = _closure2_slot4;
                    var5 = var6.get;
                    var5 = var5.bind(var6)();
                    var2['destination'] = var5;
                    var5 = _closure2_slot10;
                    var1 = var5.get;
                    var1 = var1.bind(var5)();
                    var2['startPosition'] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var4, var2);
 203:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = {};
            var7['start'] = var13;
            var7['vertical'] = var17;
            var7['lowerBounds'] = var16;
            var7['upperBounds'] = var15;
            var7['velocity'] = var10;
            var7['translate'] = var12;
            var7['onChange'] = var14;
            var2['__closure'] = var7;
            var7 = 15962975179371.0;
            var2['__workletHash'] = var7;
            var7 = _closure1_slot13;
            var2['__initData'] = var7;
            var5 = var3.bind(var5)(var2);
            var3 = var5.onEnd;
            var2 = function T(arg1, arg2) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var4 = _closure2_slot10;
                    var3 = var4.set;
                    var5 = _closure2_slot4;
                    var2 = var5.get;
                    var2 = var2.bind(var5)();
                    var2 = var3.bind(var4)(var2);
                    var2 = _closure2_slot2;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0009_ip = 265; continue _fun0009 }
 43:
                    var2 = global;
                    var5 = var2.Math;
                    var4 = var5.abs;
                    var6 = _closure2_slot11;
                    var2 = var6.get;
                    var2 = var2.bind(var6)();
                    var4 = var4.bind(var5)(var2);
                    var2 = _closure2_slot3;
                    var2 = var4 > var2;
                    var7 = 0;
                    var6 = 0;
                    if(!var2) { _fun0009_ip = 103; continue _fun0009 }
 90:
                    var4 = _closure2_slot11;
                    var2 = var4.get;
                    var6 = var2.bind(var4)();
 103:
                    var9 = _closure1_slot6;
                    var5 = _closure2_slot2;
                    var4 = var5.get;
                    var8 = var4.bind(var5)();
                    var5 = _closure2_slot4;
                    var4 = var5.get;
                    var5 = var4.bind(var5)();
                    var4 = undefined;
                    var5 = var9.bind(var4)(var8, var5, var6);
                    if(!(var7 === var6)) { _fun0009_ip = 174; continue _fun0009 }
 149:
                    var8 = _closure2_slot4;
                    var7 = var8.set;
                    var6 = _closure1_slot10;
                    var6 = var6.bind(var4)(var5);
                    var6 = var7.bind(var8)(var6);
                    _fun0009_ip = 211; continue _fun0009;
 174:
                    var7 = _closure2_slot4;
                    var6 = var7.set;
                    var8 = _closure1_slot8;
                    var9 = _closure2_slot11;
                    var2 = var9.get;
                    var2 = var2.bind(var9)();
                    var2 = var8.bind(var4)(var5, var2);
                    var2 = var6.bind(var7)(var2);
 211:
                    var2 = _closure2_slot7;
                    if(!(var3 != var2)) { _fun0009_ip = 265; continue _fun0009 }
 219:
                    var3 = _closure2_slot7;
                    var2 = {};
                    var6 = arg2;
                    var2['success'] = var6;
                    var2['destination'] = var5;
                    var5 = _closure2_slot10;
                    var1 = var5.get;
                    var1 = var1.bind(var5)();
                    var2['startPosition'] = var1;
                    var1 = arg1;
                    var1 = var3.bind(var4)(var1, var2);
 265:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = {};
            var7['start'] = var13;
            var7['translate'] = var12;
            var7['snapPositions'] = var11;
            var7['velocity'] = var10;
            var7['swipeVelocityThreshold'] = var9;
            var9 = _closure1_slot6;
            var7['getNearestValue'] = var9;
            var9 = _closure1_slot8;
            var7['withPanGestureSpring'] = var9;
            var9 = _closure1_slot10;
            var7['withPanGestureTiming'] = var9;
            var7['onEnd'] = var8;
            var2['__closure'] = var7;
            var7 = 15665959414289.0;
            var2['__workletHash'] = var7;
            var7 = _closure1_slot12;
            var2['__initData'] = var7;
            var3 = var3.bind(var5)(var2);
            var2 = var3.onFinalize;
            var1 = function S() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = _closure2_slot9;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0010_ip = 29; continue _fun0010 }
 13:
                    var3 = _closure2_slot9;
                    var2 = var3.set;
                    var1 = false;
                    var1 = var2.bind(var3)(var1);
 29:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = {};
            var5['isGestureInProgress'] = var6;
            var1['__closure'] = var5;
            var5 = 11128244755178.0;
            var1['__workletHash'] = var5;
            var4 = _closure1_slot11;
            var1['__initData'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['default'] = var7;
    var3['SPRING_CONFIG'] = var6;
    var3['TIMING_CONFIG'] = var5;
    var3['withPanGestureSpring'] = var4;
    var3['withPanGestureTiming'] = var2;
    return var1;
})();