// app/modules/remixing/native/components/SizeSliderGestureHandler.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 343; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot16;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot16;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 343:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
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
    var7 = var4.maxStrokeWidth;
    var _closure1_slot4 = var7;
    var4 = var4.minStrokeWidth;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var7 = {};
    var4 = 'function SizeSliderGestureHandlerTsx1(current,lowerBound,upperBound){if(current>upperBound){return upperBound;}else if(current<lowerBound){return lowerBound;}else{return current;}}';
    var7['code'] = var4;
    var4 = function s(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var3 = arg2;
            var1 = arg3;
            if(!(!(var2 > var1))) { _fun0004_ip = 23; continue _fun0004 }
 13:
            if(!(var2 < var3)) { _fun0004_ip = 20; continue _fun0004 }
 17:
            var2 = var3;
 20:
            var1 = var2;
 23:
            return var1;
        }
    };
    var8 = {};
    var4['__closure'] = var8;
    var8 = 11500419360295.0;
    var4['__workletHash'] = var8;
    var4['__initData'] = var7;
    var _closure1_slot7 = var4;
    var4 = {};
    var7 = 'function SizeSliderGestureHandlerTsx2(newPos){const{sliderCirclePosition,MIN_POSITION_DELTA,sliderMinPositionY,sliderMaxPositionY,clamp,minStrokeWidth,maxStrokeWidth,size}=this.__closure;if(Math.abs(sliderCirclePosition.get()-newPos)<MIN_POSITION_DELTA){return;}sliderCirclePosition.set(newPos);const sliderPercentage=(newPos-sliderMinPositionY)/(sliderMaxPositionY-sliderMinPositionY);const newValue=clamp(minStrokeWidth+(1-sliderPercentage)*(maxStrokeWidth-minStrokeWidth),minStrokeWidth,maxStrokeWidth);size.set(newValue);}';
    var4['code'] = var7;
    var _closure1_slot8 = var4;
    var4 = {};
    var7 = 'function SizeSliderGestureHandlerTsx3(){const{isPanGestureActive}=this.__closure;isPanGestureActive.set(false);}';
    var4['code'] = var7;
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = 'function SizeSliderGestureHandlerTsx4(touchEvent){const{touchInputId,adjustSliderPosition,clamp,sliderMinPositionY,sliderMaxPositionY,runOnJS,handleGrabbed}=this.__closure;for(const touch of touchEvent.allTouches){if(touchInputId.get()===touch.id){touchInputId.set(-1);adjustSliderPosition(clamp(touch.y,sliderMinPositionY,sliderMaxPositionY));runOnJS(handleGrabbed)(false);}}}';
    var4['code'] = var7;
    var _closure1_slot10 = var4;
    var4 = {};
    var7 = 'function SizeSliderGestureHandlerTsx5(touchEvent){const{touchInputId,adjustSliderPosition,clamp,sliderMinPositionY,sliderMaxPositionY}=this.__closure;for(const touch of touchEvent.allTouches){if(touchInputId.get()===touch.id){adjustSliderPosition(clamp(touch.y,sliderMinPositionY,sliderMaxPositionY));}}}';
    var4['code'] = var7;
    var _closure1_slot11 = var4;
    var4 = {};
    var7 = 'function SizeSliderGestureHandlerTsx6(touchEvent){const{touchInputId,runOnJS,handleGrabbed}=this.__closure;if(touchInputId.get()===-1){const touchData=touchEvent.allTouches[0];touchInputId.set(touchData.id);runOnJS(handleGrabbed)(true);}}';
    var4['code'] = var7;
    var _closure1_slot12 = var4;
    var4 = {};
    var7 = 'function SizeSliderGestureHandlerTsx7(){const{isPanGestureActive}=this.__closure;isPanGestureActive.set(true);}';
    var4['code'] = var7;
    var _closure1_slot13 = var4;
    var4 = {};
    var7 = "function SizeSliderGestureHandlerTsx8(){const{top,gestureHandlerWidth,gestureHandlerHeight}=this.__closure;return{position:'absolute',left:0,top:top,width:gestureHandlerWidth,height:gestureHandlerHeight};}";
    var4['code'] = var7;
    var _closure1_slot14 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/remixing/native/components/SizeSliderGestureHandler.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var9 = var1.sliderCirclePosition;
            var _closure2_slot0 = var9;
            var15 = var1.handleGrabbed;
            var _closure2_slot1 = var15;
            var10 = var1.size;
            var _closure2_slot2 = var10;
            var13 = var1.top;
            var _closure2_slot3 = var13;
            var12 = var1.height;
            var1 = var1.controlCircleRadius;
            var4 = undefined;
            var _closure2_slot9 = var4;
            var _closure2_slot4 = var12;
            var2 = 2;
            var17 = var2 * var1;
            var _closure2_slot5 = var17;
            var16 = var12 - var1;
            var _closure2_slot6 = var16;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var8 = 3;
            var5 = var1[var8];
            var11 = var2.bind(var4)(var5);
            var7 = var11.useSharedValue;
            var5 = -1;
            var20 = var7.bind(var11)(var5);
            var _closure2_slot7 = var20;
            var1 = var1[var8];
            var5 = var2.bind(var4)(var1);
            var2 = var5.useSharedValue;
            var1 = false;
            var14 = var2.bind(var5)(var1);
            var _closure2_slot8 = var14;
            var2 = var16 - var17;
            var1 = var10.get;
            var1 = var1.bind(var10)();
            var7 = _closure1_slot5;
            var5 = var1 - var7;
            var1 = _closure1_slot4;
            var1 = var1 - var7;
            var5 = var5 / var1;
            var1 = 1;
            var1 = var1 - var5;
            var1 = var2 * var1;
            var2 = var17 + var1;
            var1 = var14.get;
            var1 = var1.bind(var14)();
            var1 = !var1;
            if(!var1) { _fun0005_ip = 260; continue _fun0005 }
 214:
            var5 = global;
            var11 = var5.Math;
            var7 = var11.abs;
            var5 = var9.get;
            var5 = var5.bind(var9)();
            var5 = var5 - var2;
            var7 = var7.bind(var11)(var5);
            var5 = 0.2;
            var1 = var7 > var5;
 260:
            if(!var1) { _fun0005_ip = 273; continue _fun0005 }
 263:
            var1 = var9.set;
            var1 = var1.bind(var9)(var2);
 273:
            var7 = _closure1_slot3;
            var5 = var7.useCallback;
            var2 = function G(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = arg1;
                    var1 = global;
                    var5 = var1.Math;
                    var4 = var5.abs;
                    var6 = _closure2_slot0;
                    var3 = var6.get;
                    var3 = var3.bind(var6)();
                    var3 = var3 - var2;
                    var4 = var4.bind(var5)(var3);
                    var3 = 0.2;
                    if(!(!(var4 < var3))) { _fun0006_ip = 147; continue _fun0006 }
 56:
                    var4 = _closure2_slot0;
                    var3 = var4.set;
                    var3 = var3.bind(var4)(var2);
                    var6 = _closure1_slot7;
                    var5 = _closure1_slot5;
                    var4 = _closure2_slot5;
                    var8 = var2 - var4;
                    var2 = _closure2_slot6;
                    var2 = var2 - var4;
                    var4 = _closure1_slot4;
                    var3 = var4 - var5;
                    var7 = 1;
                    var2 = var8 / var2;
                    var2 = var7 - var2;
                    var2 = var2 * var3;
                    var3 = var5 + var2;
                    var2 = undefined;
                    var3 = var6.bind(var2)(var3, var5, var4);
                    var2 = _closure2_slot2;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var3);
 147:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = {};
            var1['sliderCirclePosition'] = var9;
            var11 = 0.2;
            var1['MIN_POSITION_DELTA'] = var11;
            var1['sliderMinPositionY'] = var17;
            var1['sliderMaxPositionY'] = var16;
            var18 = _closure1_slot7;
            var1['clamp'] = var18;
            var11 = _closure1_slot5;
            var1['minStrokeWidth'] = var11;
            var11 = _closure1_slot4;
            var1['maxStrokeWidth'] = var11;
            var1['size'] = var10;
            var2['__closure'] = var1;
            var1 = 605266269799.0;
            var2['__workletHash'] = var1;
            var1 = _closure1_slot8;
            var2['__initData'] = var1;
            var1 = new Array(4);
            var1[0] = var10;
            var1[1] = var9;
            var1[2] = var17;
            var1[3] = var16;
            var19 = var5.bind(var7)(var2, var1);
            _closure2_slot9 = var19;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 4;
            var7 = var5[var1];
            var7 = var2.bind(var4)(var7);
            var9 = var7.Gesture;
            var7 = var9.Pan;
            var10 = var7.bind(var9)();
            var9 = var10.onStart;
            var7 = function Y() {
                var3 = _closure2_slot8;
                var2 = var3.set;
                var1 = true;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var11 = {};
            var11['isPanGestureActive'] = var14;
            var7['__closure'] = var11;
            var11 = 7371368069609.0;
            var7['__workletHash'] = var11;
            var11 = _closure1_slot13;
            var7['__initData'] = var11;
            var10 = var9.bind(var10)(var7);
            var9 = var10.onTouchesDown;
            var7 = function A(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot7;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = -1;
                    if(!(var2 === var3)) { _fun0007_ip = 106; continue _fun0007 }
 26:
                    var2 = arg1;
                    var3 = var2.allTouches;
                    var2 = 0;
                    var2 = var3[var2];
                    var4 = _closure2_slot7;
                    var3 = var4.set;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 3;
                    var2 = var3[var2];
                    var3 = undefined;
                    var4 = var4.bind(var3)(var2);
                    var2 = var4.runOnJS;
                    var1 = _closure2_slot1;
                    var2 = var2.bind(var4)(var1);
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
 106:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = {};
            var11['touchInputId'] = var20;
            var21 = var5[var8];
            var21 = var2.bind(var4)(var21);
            var21 = var21.runOnJS;
            var11['runOnJS'] = var21;
            var11['handleGrabbed'] = var15;
            var7['__closure'] = var11;
            var11 = 14337649011511.0;
            var7['__workletHash'] = var11;
            var11 = _closure1_slot12;
            var7['__initData'] = var11;
            var10 = var9.bind(var10)(var7);
            var9 = var10.onTouchesMove;
            var7 = function O(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = _closure1_slot15;
                    var1 = arg1;
                    var2 = var1.allTouches;
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var3 = var5.bind(var1)();
                    var2 = var3.done;
                    if(var2) { _fun0008_ip = 113; continue _fun0008 }
 38:
                    var2 = var3.value;
                    var8 = _closure2_slot7;
                    var7 = var8.get;
                    var8 = var7.bind(var8)();
                    var7 = var2.id;
                    if(!(var8 === var7)) { _fun0008_ip = 98; continue _fun0008 }
 65:
                    var7 = _closure2_slot9;
                    var10 = _closure1_slot7;
                    var9 = var2.y;
                    var8 = _closure2_slot5;
                    var2 = _closure2_slot6;
                    var2 = var10.bind(var1)(var9, var8, var2);
                    var2 = var7.bind(var1)(var2);
 98:
                    var7 = var5.bind(var1)();
                    var2 = var7.done;
                    var3 = var7;
                    if(!var2) { _fun0008_ip = 38; continue _fun0008 }
 113:
                    return var1;
                }
            };
            var11 = {};
            var11['touchInputId'] = var20;
            var11['adjustSliderPosition'] = var19;
            var11['clamp'] = var18;
            var11['sliderMinPositionY'] = var17;
            var11['sliderMaxPositionY'] = var16;
            var7['__closure'] = var11;
            var11 = 11277026904481.0;
            var7['__workletHash'] = var11;
            var11 = _closure1_slot11;
            var7['__initData'] = var11;
            var10 = var9.bind(var10)(var7);
            var9 = var10.onTouchesUp;
            var7 = function w(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var3 = _closure1_slot15;
                    var1 = arg1;
                    var2 = var1.allTouches;
                    var1 = undefined;
                    var8 = var3.bind(var1)(var2);
                    var3 = var8.bind(var1)();
                    var2 = var3.done;
                    var6 = -1;
                    var5 = 3;
                    var4 = false;
                    if(var2) { _fun0009_ip = 177; continue _fun0009 }
 52:
                    var2 = var3.value;
                    var11 = _closure2_slot7;
                    var10 = var11.get;
                    var11 = var10.bind(var11)();
                    var10 = var2.id;
                    if(!(var11 === var10)) { _fun0009_ip = 162; continue _fun0009 }
 79:
                    var11 = _closure2_slot7;
                    var10 = var11.set;
                    var10 = var10.bind(var11)(var6);
                    var10 = _closure2_slot9;
                    var13 = _closure1_slot7;
                    var12 = var2.y;
                    var11 = _closure2_slot5;
                    var2 = _closure2_slot6;
                    var2 = var13.bind(var1)(var12, var11, var2);
                    var2 = var10.bind(var1)(var2);
                    var10 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var11 = var10.bind(var1)(var2);
                    var10 = var11.runOnJS;
                    var2 = _closure2_slot1;
                    var2 = var10.bind(var11)(var2);
                    var2 = var2.bind(var1)(var4);
 162:
                    var10 = var8.bind(var1)();
                    var2 = var10.done;
                    var3 = var10;
                    if(!var2) { _fun0009_ip = 52; continue _fun0009 }
 177:
                    return var1;
                }
            };
            var11 = {};
            var11['touchInputId'] = var20;
            var11['adjustSliderPosition'] = var19;
            var11['clamp'] = var18;
            var11['sliderMinPositionY'] = var17;
            var11['sliderMaxPositionY'] = var16;
            var16 = var5[var8];
            var16 = var2.bind(var4)(var16);
            var16 = var16.runOnJS;
            var11['runOnJS'] = var16;
            var11['handleGrabbed'] = var15;
            var7['__closure'] = var11;
            var11 = 5776953446866.0;
            var7['__workletHash'] = var11;
            var11 = _closure1_slot10;
            var7['__initData'] = var11;
            var10 = var9.bind(var10)(var7);
            var9 = var10.onFinalize;
            var7 = function k() {
                var3 = _closure2_slot8;
                var2 = var3.set;
                var1 = false;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var11 = {};
            var11['isPanGestureActive'] = var14;
            var7['__closure'] = var11;
            var11 = 8779290509350.0;
            var7['__workletHash'] = var11;
            var11 = _closure1_slot9;
            var7['__initData'] = var11;
            var9 = var9.bind(var10)(var7);
            var7 = var5[var8];
            var10 = var2.bind(var4)(var7);
            var7 = var10.useAnimatedStyle;
            var3 = function D() {
                var1 = {'position': 'absolute', 'left': 0, 'top': null, 'width': 30};
                var3 = _closure2_slot3;
                var1['top'] = var3;
                var2 = _closure2_slot4;
                var1['height'] = var2;
                return var1;
            };
            var11 = {};
            var11['top'] = var13;
            var13 = 30;
            var11['gestureHandlerWidth'] = var13;
            var11['gestureHandlerHeight'] = var12;
            var3['__closure'] = var11;
            var11 = 13597685263452.0;
            var3['__workletHash'] = var11;
            var11 = _closure1_slot14;
            var3['__initData'] = var11;
            var7 = var7.bind(var10)(var3);
            var3 = _closure1_slot6;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.GestureDetector;
            var1 = {};
            var1['gesture'] = var9;
            var6 = _closure1_slot1;
            var5 = var5[var8];
            var5 = var6.bind(var4)(var5);
            var6 = var5.View;
            var5 = {};
            var5['style'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();