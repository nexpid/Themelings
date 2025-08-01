// app/modules/video_calls/native/useDraggablePip.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useChannelCallStore;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PIP_FOCUS_SCALE;
    var _closure1_slot4 = var4;
    var4 = {'mass': 1, 'stiffness': 250, 'overshootClamping': true, 'restSpeedThreshold': 0.001, 'restDisplacementThreshold': 0.001, 'damping': 20};
    var _closure1_slot5 = var4;
    var4 = {};
    var7 = 'function useDraggablePipTsx1(){const{withTiming,pipFocus,PIP_FOCUS_SCALE,STANDARD_EASING}=this.__closure;return withTiming(pipFocus?PIP_FOCUS_SCALE:1,{easing:STANDARD_EASING,duration:250});}';
    var4['code'] = var7;
    var _closure1_slot6 = var4;
    var4 = {};
    var7 = 'function useDraggablePipTsx2(){const{width}=this.__closure;return width;}';
    var4['code'] = var7;
    var _closure1_slot7 = var4;
    var4 = {};
    var7 = 'function useDraggablePipTsx3(){const{height}=this.__closure;return height;}';
    var4['code'] = var7;
    var _closure1_slot8 = var4;
    var4 = {};
    var7 = 'function useDraggablePipTsx4(){const{pipScale,width}=this.__closure;return pipScale.get()*width;}';
    var4['code'] = var7;
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = 'function useDraggablePipTsx5(){const{pipScale,height}=this.__closure;return pipScale.get()*height;}';
    var4['code'] = var7;
    var _closure1_slot10 = var4;
    var4 = {};
    var7 = 'function useDraggablePipTsx6(){const{containerWidth}=this.__closure;return containerWidth;}';
    var4['code'] = var7;
    var _closure1_slot11 = var4;
    var4 = {};
    var7 = 'function useDraggablePipTsx7(){const{containerHeight}=this.__closure;return containerHeight;}';
    var4['code'] = var7;
    var _closure1_slot12 = var4;
    var4 = {};
    var7 = 'function useDraggablePipTsx8(){const{containerWidth,scaledWidthDv,xPosition}=this.__closure;return[containerWidth-scaledWidthDv.get(),xPosition.get()];}';
    var4['code'] = var7;
    var _closure1_slot13 = var4;
    var4 = {};
    var7 = 'function useDraggablePipTsx9(result,previous){const{cheapWorkletArrayShallowEqual,clamp,xPosition,xDestination}=this.__closure;if(cheapWorkletArrayShallowEqual(result,previous!==null&&previous!==void 0?previous:undefined))return;const[containerWidthNew,xPositionNew]=result;const[containerWidthOld]=previous!==null&&previous!==void 0?previous:[0,0];if(previous!=null&&containerWidthNew!==containerWidthOld){const newX=clamp(xPositionNew*(containerWidthNew/containerWidthOld),0,containerWidthNew);xPosition.set(newX);xDestination.set(newX);}}';
    var4['code'] = var7;
    var _closure1_slot14 = var4;
    var4 = {};
    var7 = 'function useDraggablePipTsx10(){const{containerHeight,scaledHeightDv,yPosition}=this.__closure;return[containerHeight-scaledHeightDv.get(),yPosition.get()];}';
    var4['code'] = var7;
    var _closure1_slot15 = var4;
    var4 = {};
    var7 = 'function useDraggablePipTsx11(result,previous){const{cheapWorkletArrayShallowEqual,clamp,yPosition,yDestination}=this.__closure;if(cheapWorkletArrayShallowEqual(result,previous!==null&&previous!==void 0?previous:undefined))return;const[containerHeightNew,yPositionNew]=result;const[containerHeightOld]=previous!==null&&previous!==void 0?previous:[0,0];if(previous!=null&&containerHeightNew!==containerHeightOld){const newY=clamp(yPositionNew*(containerHeightNew/containerHeightOld),0,containerHeightNew);yPosition.set(newY);yDestination.set(newY);}}';
    var4['code'] = var7;
    var _closure1_slot16 = var4;
    var4 = {};
    var7 = 'function useDraggablePipTsx12(event){const{xPosition,containerWidthDv,scaledWidthDv,clamp,yPosition,containerHeightDv,scaledHeightDv,snapToCorners,withSpring,spring,xDestination,yDestination}=this.__closure;const toss=0.0875;const xToss=xPosition.get()+toss*event.velocityX;const xMin=0;const xMax=containerWidthDv.get()-scaledWidthDv.get();const targetX=clamp(xToss,xMin,xMax);const yToss=yPosition.get()+toss*event.velocityY;const yMin=0;const yMax=containerHeightDv.get()-scaledHeightDv.get();const targetY=clamp(yToss,yMin,yMax);const top=targetY;const bottom=containerHeightDv.get()-scaledHeightDv.get()-targetY;const left=targetX;const right=containerWidthDv.get()-scaledWidthDv.get()-targetX;const minDistance=Math.min(top,bottom,left,right);let snapX=targetX;let snapY=targetY;switch(minDistance){case top:snapY=yMin;if(snapToCorners){snapX=left<right?xMin:xMax;}break;case bottom:snapY=yMax;if(snapToCorners){snapX=left<right?xMin:xMax;}break;case left:snapX=xMin;if(snapToCorners){snapY=top<bottom?yMin:yMax;}break;case right:snapX=xMax;if(snapToCorners){snapY=top<bottom?yMin:yMax;}break;}xPosition.set(withSpring(snapX,{...spring,velocity:event.velocityX}));xDestination.set(snapX);yPosition.set(withSpring(snapY,{...spring,velocity:event.velocityY}));yDestination.set(snapY);}';
    var4['code'] = var7;
    var _closure1_slot17 = var4;
    var4 = {};
    var7 = 'function useDraggablePipTsx13(event){const{xPosition,xDestination,yPosition,yDestination,trackedVoiceControlsToggleMovedForGestureSv,onMoved,runOnJS}=this.__closure;xPosition.set(xDestination.get()+event.translationX);yPosition.set(yDestination.get()+event.translationY);if(!trackedVoiceControlsToggleMovedForGestureSv.get()){if(onMoved!=null){runOnJS(onMoved)();}trackedVoiceControlsToggleMovedForGestureSv.set(true);}}';
    var4['code'] = var7;
    var _closure1_slot18 = var4;
    var4 = {};
    var7 = 'function useDraggablePipTsx14(){const{onPress,runOnJS}=this.__closure;if(onPress!=null){runOnJS(onPress)();}}';
    var4['code'] = var7;
    var _closure1_slot19 = var4;
    var4 = {};
    var7 = 'function useDraggablePipTsx15(){const{xPosition,scaledWidthDv,widthDv,yPosition,scaledHeightDv,heightDv,pipScale}=this.__closure;return{transform:[{translateX:xPosition.get()+(scaledWidthDv.get()-widthDv.get())/2},{translateY:yPosition.get()+(scaledHeightDv.get()-heightDv.get())/2},{scale:pipScale.get()}]};}';
    var4['code'] = var7;
    var _closure1_slot20 = var4;
    var4 = {};
    var7 = 'function clamp_useDraggablePipTsx16(value,min,max){return Math.min(Math.max(value,min),max);}';
    var4['code'] = var7;
    var _closure1_slot21 = var4;
    var4 = function() {
        var1 = function clamp(arg1, arg2, arg3) {
            var1 = global;
            var4 = var1.Math;
            var3 = var4.min;
            var6 = var1.Math;
            var5 = var6.max;
            var2 = arg1;
            var1 = arg2;
            var2 = var5.bind(var6)(var2, var1);
            var1 = arg3;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var2 = {};
        var1['__closure'] = var2;
        var2 = 1988116204206.0;
        var1['__workletHash'] = var2;
        var2 = _closure1_slot21;
        var1['__initData'] = var2;
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot22 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/useDraggablePip.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useDraggablePip(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var12 = var1.width;
            var _closure2_slot0 = var12;
            var13 = var1.height;
            var _closure2_slot1 = var13;
            var26 = var1.containerWidth;
            var _closure2_slot2 = var26;
            var18 = var1.containerHeight;
            var _closure2_slot3 = var18;
            var20 = var1.onPress;
            var _closure2_slot4 = var20;
            var28 = var1.onMoved;
            var _closure2_slot5 = var28;
            var22 = var1.snapToCorners;
            var _closure2_slot6 = var22;
            var16 = var1.activeOffsetX;
            var3 = var1.activeOffsetY;
            var4 = _closure1_slot3;
            var6 = undefined;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.pipFocus;
                return var1;
            };
            var9 = var4.bind(var6)(var1);
            var _closure2_slot7 = var9;
            var23 = _closure1_slot0;
            var24 = _closure1_slot1;
            var14 = 3;
            var1 = var24[var14];
            var7 = var23.bind(var6)(var1);
            var4 = var7.useDerivedValue;
            var1 = function N() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 4;
                    var1 = var3[var1];
                    var7 = undefined;
                    var4 = var2.bind(var7)(var1);
                    var3 = var4.withTiming;
                    var1 = _closure2_slot7;
                    var2 = 1;
                    if(!var1) { _fun0002_ip = 47; continue _fun0002 }
 43:
                    var2 = _closure1_slot4;
 47:
                    var1 = {};
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var5 = 5;
                    var5 = var8[var5];
                    var5 = var6.bind(var7)(var5);
                    var5 = var5.STANDARD_EASING;
                    var1['easing'] = var5;
                    var5 = 250;
                    var1['duration'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var8 = {};
            var10 = 4;
            var10 = var24[var10];
            var10 = var23.bind(var6)(var10);
            var10 = var10.withTiming;
            var8['withTiming'] = var10;
            var8['pipFocus'] = var9;
            var9 = _closure1_slot4;
            var8['PIP_FOCUS_SCALE'] = var9;
            var9 = 5;
            var9 = var24[var9];
            var9 = var23.bind(var6)(var9);
            var9 = var9.STANDARD_EASING;
            var8['STANDARD_EASING'] = var9;
            var1['__closure'] = var8;
            var8 = 7848271415351.0;
            var1['__workletHash'] = var8;
            var8 = _closure1_slot6;
            var1['__initData'] = var8;
            var7 = var4.bind(var7)(var1);
            var _closure2_slot8 = var7;
            var1 = var24[var14];
            var8 = var23.bind(var6)(var1);
            var4 = var8.useDerivedValue;
            var1 = function E() {
                var1 = _closure2_slot0;
                return var1;
            };
            var9 = {};
            var9['width'] = var12;
            var1['__closure'] = var9;
            var9 = 14810909441301.0;
            var1['__workletHash'] = var9;
            var9 = _closure1_slot7;
            var1['__initData'] = var9;
            var11 = var4.bind(var8)(var1);
            var _closure2_slot9 = var11;
            var1 = var24[var14];
            var8 = var23.bind(var6)(var1);
            var4 = var8.useDerivedValue;
            var1 = function V() {
                var1 = _closure2_slot1;
                return var1;
            };
            var9 = {};
            var9['height'] = var13;
            var1['__closure'] = var9;
            var9 = 15343935194036.0;
            var1['__workletHash'] = var9;
            var9 = _closure1_slot8;
            var1['__initData'] = var9;
            var8 = var4.bind(var8)(var1);
            var _closure2_slot10 = var8;
            var1 = var24[var14];
            var9 = var23.bind(var6)(var1);
            var4 = var9.useDerivedValue;
            var1 = function F() {
                var3 = _closure2_slot8;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1 = _closure2_slot0;
                var1 = var2 * var1;
                return var1;
            };
            var10 = {};
            var10['pipScale'] = var7;
            var10['width'] = var12;
            var1['__closure'] = var10;
            var10 = 3468337829868.0;
            var1['__workletHash'] = var10;
            var10 = _closure1_slot9;
            var1['__initData'] = var10;
            var12 = var4.bind(var9)(var1);
            var _closure2_slot11 = var12;
            var1 = var24[var14];
            var9 = var23.bind(var6)(var1);
            var4 = var9.useDerivedValue;
            var1 = function G() {
                var3 = _closure2_slot8;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1 = _closure2_slot1;
                var1 = var2 * var1;
                return var1;
            };
            var10 = {};
            var10['pipScale'] = var7;
            var10['height'] = var13;
            var1['__closure'] = var10;
            var10 = 7163944260205.0;
            var1['__workletHash'] = var10;
            var10 = _closure1_slot10;
            var1['__initData'] = var10;
            var9 = var4.bind(var9)(var1);
            var _closure2_slot12 = var9;
            var1 = var24[var14];
            var10 = var23.bind(var6)(var1);
            var4 = var10.useDerivedValue;
            var1 = function I() {
                var1 = _closure2_slot2;
                return var1;
            };
            var13 = {};
            var13['containerWidth'] = var26;
            var1['__closure'] = var13;
            var13 = 13449836478609.0;
            var1['__workletHash'] = var13;
            var13 = _closure1_slot11;
            var1['__initData'] = var13;
            var27 = var4.bind(var10)(var1);
            var _closure2_slot13 = var27;
            var1 = var24[var14];
            var10 = var23.bind(var6)(var1);
            var4 = var10.useDerivedValue;
            var1 = function q() {
                var1 = _closure2_slot3;
                return var1;
            };
            var13 = {};
            var13['containerHeight'] = var18;
            var1['__closure'] = var13;
            var13 = 4105281399152.0;
            var1['__workletHash'] = var13;
            var13 = _closure1_slot12;
            var1['__initData'] = var13;
            var25 = var4.bind(var10)(var1);
            var _closure2_slot14 = var25;
            var1 = var24[var14];
            var4 = var23.bind(var6)(var1);
            var1 = var4.useSharedValue;
            var10 = 0;
            var21 = var1.bind(var4)(var10);
            var _closure2_slot15 = var21;
            var1 = var24[var14];
            var13 = var23.bind(var6)(var1);
            var4 = var13.useSharedValue;
            var1 = var21.get;
            var1 = var1.bind(var21)();
            var13 = var4.bind(var13)(var1);
            var _closure2_slot16 = var13;
            var1 = var24[var14];
            var4 = var23.bind(var6)(var1);
            var1 = var4.useSharedValue;
            var19 = var1.bind(var4)(var10);
            var _closure2_slot17 = var19;
            var1 = var24[var14];
            var10 = var23.bind(var6)(var1);
            var4 = var10.useSharedValue;
            var1 = var19.get;
            var1 = var1.bind(var19)();
            var10 = var4.bind(var10)(var1);
            var _closure2_slot18 = var10;
            var1 = var24[var14];
            var15 = var23.bind(var6)(var1);
            var4 = var15.useSharedValue;
            var1 = false;
            var29 = var4.bind(var15)(var1);
            var _closure2_slot19 = var29;
            var1 = var24[var14];
            var17 = var23.bind(var6)(var1);
            var15 = var17.useAnimatedReaction;
            var4 = function R() {
                var3 = _closure2_slot2;
                var4 = _closure2_slot11;
                var1 = var4.get;
                var1 = var1.bind(var4)();
                var3 = var3 - var1;
                var1 = new Array(2);
                var1[0] = var3;
                var3 = _closure2_slot16;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1[1] = var2;
                return var1;
            };
            var1 = {};
            var1['containerWidth'] = var26;
            var1['scaledWidthDv'] = var12;
            var1['xPosition'] = var13;
            var4['__closure'] = var1;
            var1 = 2741340788440.0;
            var4['__workletHash'] = var1;
            var1 = _closure1_slot13;
            var4['__initData'] = var1;
            var1 = function J(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = arg1;
                    var8 = arg2;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var5.bind(var1)(var2);
                    var5 = var6.cheapWorkletArrayShallowEqual;
                    var7 = null;
                    var9 = var7 != var8;
                    var2 = undefined;
                    if(!var9) { _fun0003_ip = 51; continue _fun0003 }
 48:
                    var2 = var8;
 51:
                    var2 = var5.bind(var6)(var4, var2);
                    if(var2) { _fun0003_ip = 171; continue _fun0003 }
 60:
                    var10 = _closure1_slot2;
                    var2 = 2;
                    var2 = var10.bind(var1)(var4, var2);
                    var5 = 0;
                    var4 = var2[var5];
                    var9 = 1;
                    var6 = var2[var9];
                    var2 = var8;
                    if(!(var7 == var2)) { _fun0003_ip = 103; continue _fun0003 }
 93:
                    var2 = [0, 0];
 103:
                    var2 = var10.bind(var1)(var2, var9);
                    var2 = var2[var5];
                    if(!(var7 != var8)) { _fun0003_ip = 171; continue _fun0003 }
 117:
                    if(!(var4 !== var2)) { _fun0003_ip = 171; continue _fun0003 }
 121:
                    var3 = _closure1_slot22;
                    var2 = var4 / var2;
                    var2 = var6 * var2;
                    var4 = var3.bind(var1)(var2, var5, var4);
                    var5 = _closure2_slot16;
                    var3 = var5.set;
                    var3 = var3.bind(var5)(var4);
                    var3 = _closure2_slot15;
                    var2 = var3.set;
                    var2 = var2.bind(var3)(var4);
 171:
                    return var1;
                }
            };
            var31 = {};
            var30 = 6;
            var26 = var24[var30];
            var26 = var23.bind(var6)(var26);
            var26 = var26.cheapWorkletArrayShallowEqual;
            var31['cheapWorkletArrayShallowEqual'] = var26;
            var26 = _closure1_slot22;
            var31['clamp'] = var26;
            var31['xPosition'] = var13;
            var31['xDestination'] = var21;
            var1['__closure'] = var31;
            var31 = 15748808822770.0;
            var1['__workletHash'] = var31;
            var31 = _closure1_slot14;
            var1['__initData'] = var31;
            var1 = var15.bind(var17)(var4, var1);
            var1 = var24[var14];
            var17 = var23.bind(var6)(var1);
            var15 = var17.useAnimatedReaction;
            var4 = function L() {
                var3 = _closure2_slot3;
                var4 = _closure2_slot12;
                var1 = var4.get;
                var1 = var1.bind(var4)();
                var3 = var3 - var1;
                var1 = new Array(2);
                var1[0] = var3;
                var3 = _closure2_slot18;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1[1] = var2;
                return var1;
            };
            var1 = {};
            var1['containerHeight'] = var18;
            var1['scaledHeightDv'] = var9;
            var1['yPosition'] = var10;
            var4['__closure'] = var1;
            var1 = 11475249153313.0;
            var4['__workletHash'] = var1;
            var1 = _closure1_slot15;
            var4['__initData'] = var1;
            var1 = function U(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = arg1;
                    var8 = arg2;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var5.bind(var1)(var2);
                    var5 = var6.cheapWorkletArrayShallowEqual;
                    var7 = null;
                    var9 = var7 != var8;
                    var2 = undefined;
                    if(!var9) { _fun0004_ip = 51; continue _fun0004 }
 48:
                    var2 = var8;
 51:
                    var2 = var5.bind(var6)(var4, var2);
                    if(var2) { _fun0004_ip = 171; continue _fun0004 }
 60:
                    var10 = _closure1_slot2;
                    var2 = 2;
                    var2 = var10.bind(var1)(var4, var2);
                    var5 = 0;
                    var4 = var2[var5];
                    var9 = 1;
                    var6 = var2[var9];
                    var2 = var8;
                    if(!(var7 == var2)) { _fun0004_ip = 103; continue _fun0004 }
 93:
                    var2 = [0, 0];
 103:
                    var2 = var10.bind(var1)(var2, var9);
                    var2 = var2[var5];
                    if(!(var7 != var8)) { _fun0004_ip = 171; continue _fun0004 }
 117:
                    if(!(var4 !== var2)) { _fun0004_ip = 171; continue _fun0004 }
 121:
                    var3 = _closure1_slot22;
                    var2 = var4 / var2;
                    var2 = var6 * var2;
                    var4 = var3.bind(var1)(var2, var5, var4);
                    var5 = _closure2_slot18;
                    var3 = var5.set;
                    var3 = var3.bind(var5)(var4);
                    var3 = _closure2_slot17;
                    var2 = var3.set;
                    var2 = var2.bind(var3)(var4);
 171:
                    return var1;
                }
            };
            var18 = {};
            var30 = var24[var30];
            var30 = var23.bind(var6)(var30);
            var30 = var30.cheapWorkletArrayShallowEqual;
            var18['cheapWorkletArrayShallowEqual'] = var30;
            var18['clamp'] = var26;
            var18['yPosition'] = var10;
            var18['yDestination'] = var19;
            var1['__closure'] = var18;
            var18 = 7685377389843.0;
            var1['__workletHash'] = var18;
            var18 = _closure1_slot16;
            var1['__initData'] = var18;
            var1 = var15.bind(var17)(var4, var1);
            var15 = 7;
            var1 = var24[var15];
            var1 = var23.bind(var6)(var1);
            var4 = var1.Gesture;
            var1 = var4.Pan;
            var17 = var1.bind(var4)();
            var4 = var17.onUpdate;
            var1 = function re(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = arg1;
                    var5 = _closure2_slot16;
                    var4 = var5.set;
                    var6 = _closure2_slot15;
                    var3 = var6.get;
                    var6 = var3.bind(var6)();
                    var3 = var2.translationX;
                    var3 = var6 + var3;
                    var3 = var4.bind(var5)(var3);
                    var4 = _closure2_slot18;
                    var3 = var4.set;
                    var6 = _closure2_slot17;
                    var5 = var6.get;
                    var5 = var5.bind(var6)();
                    var2 = var2.translationY;
                    var2 = var5 + var2;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot19;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0005_ip = 165; continue _fun0005 }
 96:
                    var3 = _closure2_slot5;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 149; continue _fun0005 }
 106:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 3;
                    var2 = var3[var2];
                    var3 = undefined;
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.runOnJS;
                    var2 = _closure2_slot5;
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.bind(var3)();
 149:
                    var3 = _closure2_slot19;
                    var2 = var3.set;
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
 165:
                    var1 = undefined;
                    return var1;
                }
            };
            var18 = {};
            var18['xPosition'] = var13;
            var18['xDestination'] = var21;
            var18['yPosition'] = var10;
            var18['yDestination'] = var19;
            var18['trackedVoiceControlsToggleMovedForGestureSv'] = var29;
            var18['onMoved'] = var28;
            var28 = var24[var14];
            var28 = var23.bind(var6)(var28);
            var28 = var28.runOnJS;
            var18['runOnJS'] = var28;
            var1['__closure'] = var18;
            var18 = 14964390506971.0;
            var1['__workletHash'] = var18;
            var18 = _closure1_slot18;
            var1['__initData'] = var18;
            var17 = var4.bind(var17)(var1);
            var4 = var17.onEnd;
            var1 = function ae(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var9 = arg1;
                    var3 = _closure2_slot16;
                    var1 = var3.get;
                    var3 = var1.bind(var3)();
                    var1 = var9.velocityX;
                    var11 = 0.0875;
                    var1 = var11 * var1;
                    var4 = var3 + var1;
                    var5 = _closure2_slot13;
                    var1 = var5.get;
                    var3 = var1.bind(var5)();
                    var12 = _closure2_slot11;
                    var1 = var12.get;
                    var1 = var1.bind(var12)();
                    var6 = var3 - var1;
                    var13 = _closure1_slot22;
                    var1 = undefined;
                    var3 = 0;
                    var7 = var13.bind(var1)(var4, var3, var6);
                    var8 = _closure2_slot18;
                    var4 = var8.get;
                    var8 = var4.bind(var8)();
                    var4 = var9.velocityY;
                    var4 = var11 * var4;
                    var4 = var8 + var4;
                    var11 = _closure2_slot14;
                    var8 = var11.get;
                    var15 = var8.bind(var11)();
                    var14 = _closure2_slot12;
                    var8 = var14.get;
                    var8 = var8.bind(var14)();
                    var8 = var15 - var8;
                    var13 = var13.bind(var1)(var4, var3, var8);
                    var4 = var11.get;
                    var11 = var4.bind(var11)();
                    var4 = var14.get;
                    var4 = var4.bind(var14)();
                    var4 = var11 - var4;
                    var11 = var4 - var13;
                    var4 = var5.get;
                    var5 = var4.bind(var5)();
                    var4 = var12.get;
                    var4 = var4.bind(var12)();
                    var4 = var5 - var4;
                    var5 = var4 - var7;
                    var4 = global;
                    var12 = var4.Math;
                    var4 = var12.min;
                    var21 = var12;
                    var20 = var13;
                    var19 = var11;
                    var18 = var7;
                    var17 = var5;
                    var14 = var21[var4](var20, var19, var18, var17, var16);
                    if(!(var13 !== var14)) { _fun0006_ip = 361; continue _fun0006 }
 243:
                    if(!(var11 !== var14)) { _fun0006_ip = 328; continue _fun0006 }
 247:
                    if(!(var7 !== var14)) { _fun0006_ip = 297; continue _fun0006 }
 251:
                    var12 = var7;
                    var4 = var13;
                    if(!(var5 === var14)) { _fun0006_ip = 390; continue _fun0006 }
 264:
                    var14 = _closure2_slot6;
                    var12 = var6;
                    var4 = var13;
                    if(!var14) { _fun0006_ip = 390; continue _fun0006 }
 277:
                    var15 = var13 < var11;
                    var14 = 0;
                    if(var15) { _fun0006_ip = 289; continue _fun0006 }
 286:
                    var14 = var8;
 289:
                    var4 = var14;
                    var12 = var6;
                    _fun0006_ip = 390; continue _fun0006;
 297:
                    var14 = _closure2_slot6;
                    var12 = 0;
                    var4 = var13;
                    if(!var14) { _fun0006_ip = 390; continue _fun0006 }
 309:
                    var13 = var13 < var11;
                    var11 = 0;
                    if(var13) { _fun0006_ip = 321; continue _fun0006 }
 318:
                    var11 = var8;
 321:
                    var4 = var11;
                    var12 = 0;
                    _fun0006_ip = 390; continue _fun0006;
 328:
                    var11 = _closure2_slot6;
                    var12 = var7;
                    var4 = var8;
                    if(!var11) { _fun0006_ip = 390; continue _fun0006 }
 341:
                    var13 = var7 < var5;
                    var11 = 0;
                    if(var13) { _fun0006_ip = 353; continue _fun0006 }
 350:
                    var11 = var6;
 353:
                    var12 = var11;
                    var4 = var8;
                    _fun0006_ip = 390; continue _fun0006;
 361:
                    var8 = _closure2_slot6;
                    var12 = var7;
                    var4 = 0;
                    if(!var8) { _fun0006_ip = 390; continue _fun0006 }
 373:
                    var7 = var7 < var5;
                    var5 = 0;
                    if(var7) { _fun0006_ip = 385; continue _fun0006 }
 382:
                    var5 = var6;
 385:
                    var12 = var5;
                    var4 = 0;
 390:
                    var13 = _closure2_slot16;
                    var6 = var13.set;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var3 = 8;
                    var5 = var8[var3];
                    var15 = var7.bind(var1)(var5);
                    var14 = var15.withSpring;
                    var5 = {};
                    var11 = _closure1_slot5;
                    var20 = var5;
                    var19 = var11;
                    var10 = copyDataProperties(var20, var19);
                    var16 = var9.velocityX;
                    var10 = 'velocity';
                    var5[var10] = var16;
                    var5 = var14.bind(var15)(var12, var5);
                    var5 = var6.bind(var13)(var5);
                    var6 = _closure2_slot15;
                    var5 = var6.set;
                    var5 = var5.bind(var6)(var12);
                    var6 = _closure2_slot18;
                    var5 = var6.set;
                    var3 = var8[var3];
                    var8 = var7.bind(var1)(var3);
                    var7 = var8.withSpring;
                    var3 = {};
                    var20 = var3;
                    var19 = var11;
                    var11 = copyDataProperties(var20, var19);
                    var9 = var9.velocityY;
                    var3[var10] = var9;
                    var3 = var7.bind(var8)(var4, var3);
                    var3 = var5.bind(var6)(var3);
                    var3 = _closure2_slot17;
                    var2 = var3.set;
                    var2 = var2.bind(var3)(var4);
                    return var1;
                }
            };
            var18 = {};
            var18['xPosition'] = var13;
            var18['containerWidthDv'] = var27;
            var18['scaledWidthDv'] = var12;
            var18['clamp'] = var26;
            var18['yPosition'] = var10;
            var18['containerHeightDv'] = var25;
            var18['scaledHeightDv'] = var9;
            var18['snapToCorners'] = var22;
            var22 = 8;
            var22 = var24[var22];
            var22 = var23.bind(var6)(var22);
            var22 = var22.withSpring;
            var18['withSpring'] = var22;
            var22 = _closure1_slot5;
            var18['spring'] = var22;
            var18['xDestination'] = var21;
            var18['yDestination'] = var19;
            var1['__closure'] = var18;
            var18 = 690760681755.0;
            var1['__workletHash'] = var18;
            var18 = _closure1_slot17;
            var1['__initData'] = var18;
            var18 = var4.bind(var17)(var1);
            var1 = null;
            if(!(var1 != var16)) { _fun0001_ip = 1374; continue _fun0001 }
 1363:
            var4 = var18.activeOffsetX;
            var4 = var4.bind(var18)(var16);
 1374:
            if(!(var1 != var3)) { _fun0001_ip = 1389; continue _fun0001 }
 1378:
            var1 = var18.activeOffsetY;
            var1 = var1.bind(var18)(var3);
 1389:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = var3[var15];
            var1 = var4.bind(var6)(var1);
            var16 = var1.Gesture;
            var1 = var16.Tap;
            var17 = var1.bind(var16)();
            var16 = var17.onStart;
            var1 = function ce() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot4;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0007_ip = 56; continue _fun0007 }
 13:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.runOnJS;
                    var1 = _closure2_slot4;
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.bind(var2)();
 56:
                    var1 = undefined;
                    return var1;
                }
            };
            var19 = {};
            var19['onPress'] = var20;
            var20 = var3[var14];
            var20 = var4.bind(var6)(var20);
            var20 = var20.runOnJS;
            var19['runOnJS'] = var20;
            var1['__closure'] = var19;
            var19 = 4692146362189.0;
            var1['__workletHash'] = var19;
            var19 = _closure1_slot19;
            var1['__initData'] = var19;
            var17 = var16.bind(var17)(var1);
            var1 = {};
            var15 = var3[var15];
            var15 = var4.bind(var6)(var15);
            var16 = var15.Gesture;
            var15 = var16.Race;
            var15 = var15.bind(var16)(var18, var17);
            var1['gesture'] = var15;
            var3 = var3[var14];
            var4 = var4.bind(var6)(var3);
            var3 = var4.useAnimatedStyle;
            var2 = function ue() {
                var1 = {};
                var3 = {};
                var5 = _closure2_slot16;
                var2 = var5.get;
                var5 = var2.bind(var5)();
                var6 = _closure2_slot11;
                var2 = var6.get;
                var6 = var2.bind(var6)();
                var7 = _closure2_slot9;
                var2 = var7.get;
                var2 = var2.bind(var7)();
                var2 = var6 - var2;
                var7 = 2;
                var2 = var2 / var7;
                var2 = var5 + var2;
                var3['translateX'] = var2;
                var2 = new Array(3);
                var2[0] = var3;
                var3 = {};
                var6 = _closure2_slot18;
                var5 = var6.get;
                var6 = var5.bind(var6)();
                var8 = _closure2_slot12;
                var5 = var8.get;
                var8 = var5.bind(var8)();
                var9 = _closure2_slot10;
                var5 = var9.get;
                var5 = var5.bind(var9)();
                var5 = var8 - var5;
                var5 = var5 / var7;
                var5 = var6 + var5;
                var3['translateY'] = var5;
                var2[1] = var3;
                var3 = {};
                var5 = _closure2_slot8;
                var4 = var5.get;
                var4 = var4.bind(var5)();
                var3['scale'] = var4;
                var2[2] = var3;
                var1['transform'] = var2;
                return var1;
            };
            var6 = {};
            var6['xPosition'] = var13;
            var6['scaledWidthDv'] = var12;
            var6['widthDv'] = var11;
            var6['yPosition'] = var10;
            var6['scaledHeightDv'] = var9;
            var6['heightDv'] = var8;
            var6['pipScale'] = var7;
            var2['__closure'] = var6;
            var6 = 12534173786665.0;
            var2['__workletHash'] = var6;
            var5 = _closure1_slot20;
            var2['__initData'] = var5;
            var2 = var3.bind(var4)(var2);
            var1['draggableGridItemStyles'] = var2;
            return var1;
        }
    };
    var3['useDraggablePip'] = var2;
    return var1;
})();