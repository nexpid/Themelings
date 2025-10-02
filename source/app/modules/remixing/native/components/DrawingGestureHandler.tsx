// app/modules/remixing/native/components/DrawingGestureHandler.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
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
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot14;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot14;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
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
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.isInDrawMode;
    var _closure1_slot4 = var7;
    var4 = var4.useRemixingEditorStore;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = {};
    var7 = 'function DrawingGestureHandlerTsx1(p1,p2){return{x:p1.x+(p2.x-p1.x)/2,y:p1.y+(p2.y-p1.y)/2};}';
    var4['code'] = var7;
    var _closure1_slot7 = var4;
    var4 = {};
    var7 = 'function DrawingGestureHandlerTsx2(newPoint){const{previousTouch,getMidPoint,drawingPath}=this.__closure;const prevTouch=previousTouch.get();const midPoint=getMidPoint(prevTouch,newPoint);previousTouch.set(newPoint);drawingPath.set(drawingPath.get()+(" Q "+prevTouch.x+" "+prevTouch.y+" "+midPoint.x+" "+midPoint.y));}';
    var4['code'] = var7;
    var _closure1_slot8 = var4;
    var4 = {};
    var7 = 'function DrawingGestureHandlerTsx3(touchEvent){const{touchInputId,drawingPath,previousTouch,runOnJS,RemixingActionCreators,color,strokeWidth,resetDrawing}=this.__closure;if(touchInputId.get()!=null){for(const touch of touchEvent.allTouches){if(touchInputId.get()===touch.id){drawingPath.set(drawingPath.get()+(" L "+touch.x+" "+touch.y));previousTouch.set({x:0,y:0});touchInputId.set(-1);runOnJS(RemixingActionCreators.addDrawing)(color,drawingPath.get(),strokeWidth.get());runOnJS(resetDrawing)();return;}}}}';
    var4['code'] = var7;
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = 'function DrawingGestureHandlerTsx4(touchEvent){const{touchInputId,updateDrawingPath}=this.__closure;for(const touch of touchEvent.allTouches){if(touchInputId.get()===touch.id){updateDrawingPath({x:touch.x,y:touch.y});}}}';
    var4['code'] = var7;
    var _closure1_slot10 = var4;
    var4 = {};
    var7 = 'function DrawingGestureHandlerTsx5(touchEvent){const{touchInputId,previousTouch,drawingPath,runOnJS,setIsActivelyDrawing}=this.__closure;if(touchInputId.get()===-1){const touchData=touchEvent.allTouches[0];touchInputId.set(touchData.id);previousTouch.set({x:touchData.x,y:touchData.y});drawingPath.set("M "+touchData.x+" "+touchData.y);runOnJS(setIsActivelyDrawing)(true);}}';
    var4['code'] = var7;
    var _closure1_slot11 = var4;
    var4 = {};
    var7 = "function DrawingGestureHandlerTsx6(){const{inDrawMode,canvasSize}=this.__closure;return{position:'absolute',left:0,top:0,width:inDrawMode?canvasSize.width:0,height:inDrawMode?canvasSize.height:0};}";
    var4['code'] = var7;
    var _closure1_slot12 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/remixing/native/components/DrawingGestureHandler.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        var1 = arg1;
        var16 = var1.color;
        var _closure2_slot0 = var16;
        var15 = var1.strokeWidth;
        var _closure2_slot1 = var15;
        var18 = var1.drawingPath;
        var _closure2_slot2 = var18;
        var12 = var1.canvasSize;
        var _closure2_slot3 = var12;
        var21 = var1.setIsActivelyDrawing;
        var _closure2_slot4 = var21;
        var14 = function resetDrawing() {
            var4 = _closure2_slot4;
            var1 = undefined;
            var3 = false;
            var3 = var4.bind(var1)(var3);
            var4 = _closure2_slot2;
            var3 = var4.set;
            var2 = '';
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var _closure2_slot10 = var14;
        var2 = _closure1_slot5;
        var4 = undefined;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.currentMode;
            return var1;
        };
        var7 = var2.bind(var4)(var1);
        var2 = _closure1_slot0;
        var8 = _closure1_slot3;
        var5 = 3;
        var1 = var8[var5];
        var10 = var2.bind(var4)(var1);
        var9 = var10.useSharedValue;
        var1 = -1;
        var19 = var9.bind(var10)(var1);
        var _closure2_slot5 = var19;
        var1 = var8[var5];
        var10 = var2.bind(var4)(var1);
        var9 = var10.useSharedValue;
        var1 = {'x': 0, 'y': 0};
        var17 = var9.bind(var10)(var1);
        var _closure2_slot6 = var17;
        var1 = _closure1_slot4;
        var13 = var1.bind(var4)(var7);
        var _closure2_slot7 = var13;
        var7 = function y(arg1, arg2) {
            var2 = arg1;
            var5 = arg2;
            var1 = {};
            var6 = var2.x;
            var4 = var5.x;
            var3 = var2.x;
            var3 = var4 - var3;
            var4 = 2;
            var3 = var3 / var4;
            var3 = var6 + var3;
            var1['x'] = var3;
            var3 = var2.y;
            var5 = var5.y;
            var2 = var2.y;
            var2 = var5 - var2;
            var2 = var2 / var4;
            var2 = var3 + var2;
            var1['y'] = var2;
            return var1;
        };
        var1 = {};
        var7['__closure'] = var1;
        var1 = 5693786585095.0;
        var7['__workletHash'] = var1;
        var1 = _closure1_slot7;
        var7['__initData'] = var1;
        var _closure2_slot8 = var7;
        var20 = function v(arg1) {
            var7 = arg1;
            var5 = _closure2_slot6;
            var1 = var5.get;
            var6 = var1.bind(var5)();
            var2 = _closure2_slot8;
            var1 = undefined;
            var2 = var2.bind(var1)(var6, var7);
            var4 = var5.set;
            var4 = var4.bind(var5)(var7);
            var4 = _closure2_slot2;
            var3 = var4.set;
            var5 = var4.get;
            var5 = var5.bind(var4)();
            var18 = var6.x;
            var16 = var6.y;
            var14 = var2.x;
            var12 = var2.y;
            var2 = global;
            var2 = var2.HermesInternal;
            var7 = var2.concat;
            var19 = ' Q ';
            var2 = ' ';
            var17 = var2;
            var15 = var2;
            var13 = var2;
            var2 = var19[var7](var18, var17, var16, var15, var14, var13, var12, var11);
            var2 = var5 + var2;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = {};
        var1['previousTouch'] = var17;
        var1['getMidPoint'] = var7;
        var1['drawingPath'] = var18;
        var20['__closure'] = var1;
        var1 = 207712562804.0;
        var20['__workletHash'] = var1;
        var1 = _closure1_slot8;
        var20['__initData'] = var1;
        var _closure2_slot9 = var20;
        var1 = 4;
        var7 = var8[var1];
        var7 = var2.bind(var4)(var7);
        var9 = var7.Gesture;
        var7 = var9.Pan;
        var9 = var7.bind(var9)();
        var7 = var9.enabled;
        var10 = var7.bind(var9)(var13);
        var9 = var10.onTouchesDown;
        var7 = function H(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = _closure2_slot5;
                var2 = var3.get;
                var3 = var2.bind(var3)();
                var2 = -1;
                if(!(var2 === var3)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                var2 = arg1;
                var3 = var2.allTouches;
                var2 = 0;
                var2 = var3[var2];
                var5 = _closure2_slot5;
                var4 = var5.set;
                var3 = var2.id;
                var3 = var4.bind(var5)(var3);
                var5 = _closure2_slot6;
                var4 = var5.set;
                var3 = {};
                var6 = var2.x;
                var3['x'] = var6;
                var6 = var2.y;
                var3['y'] = var6;
                var3 = var4.bind(var5)(var3);
                var4 = _closure2_slot2;
                var3 = var4.set;
                var8 = var2.x;
                var7 = var2.y;
                var2 = global;
                var2 = var2.HermesInternal;
                var6 = var2.concat;
                var5 = 'M ';
                var2 = ' ';
                var2 = var6.bind(var5)(var8, var2, var7);
                var2 = var3.bind(var4)(var2);
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var2 = 3;
                var2 = var3[var2];
                var3 = undefined;
                var4 = var4.bind(var3)(var2);
                var2 = var4.runOnJS;
                var1 = _closure2_slot4;
                var2 = var2.bind(var4)(var1);
                var1 = true;
                var1 = var2.bind(var3)(var1);
case 36:
                var1 = undefined;
                return var1;
            }
        };
        var11 = {};
        var11['touchInputId'] = var19;
        var11['previousTouch'] = var17;
        var11['drawingPath'] = var18;
        var22 = var8[var5];
        var22 = var2.bind(var4)(var22);
        var22 = var22.runOnJS;
        var11['runOnJS'] = var22;
        var11['setIsActivelyDrawing'] = var21;
        var7['__closure'] = var11;
        var11 = 9390781103065.0;
        var7['__workletHash'] = var11;
        var11 = _closure1_slot11;
        var7['__initData'] = var11;
        var10 = var9.bind(var10)(var7);
        var9 = var10.onTouchesMove;
        var7 = function A(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = _closure1_slot13;
                var1 = arg1;
                var2 = var1.allTouches;
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var3 = var5.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                var7 = var3.value;
                var6 = _closure2_slot5;
                var2 = var6.get;
                var6 = var2.bind(var6)();
                var2 = var7.id;
                if(!(var6 === var2)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                var6 = _closure2_slot9;
                var2 = {};
                var8 = var7.x;
                var2['x'] = var8;
                var7 = var7.y;
                var2['y'] = var7;
                var2 = var6.bind(var1)(var2);
case 40:
                var6 = var5.bind(var1)();
                var2 = var6.done;
                var3 = var6;
                if(!var2) { _fun0005_ip = 39; continue _fun0005 }
case 38:
                return var1;
            }
        };
        var11 = {};
        var11['touchInputId'] = var19;
        var11['updateDrawingPath'] = var20;
        var7['__closure'] = var11;
        var11 = 1958663319637.0;
        var7['__workletHash'] = var11;
        var11 = _closure1_slot10;
        var7['__initData'] = var11;
        var10 = var9.bind(var10)(var7);
        var9 = var10.onTouchesUp;
        var7 = function S(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = _closure2_slot5;
                var2 = var3.get;
                var3 = var2.bind(var3)();
                var2 = null;
                if(!(var2 != var3)) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                var4 = _closure1_slot13;
                var2 = arg1;
                var3 = var2.allTouches;
                var2 = undefined;
                var7 = var4.bind(var2)(var3);
                var4 = var7.bind(var2)();
                var3 = var4.done;
                var5 = var4;
                if(var3) { _fun0006_ip = 42; continue _fun0006 }
case 44:
                var3 = var5.value;
                var8 = _closure2_slot5;
                var4 = var8.get;
                var8 = var4.bind(var8)();
                var4 = var3.id;
                if(!(var8 !== var4)) { _fun0006_ip = 45; continue _fun0006 }
case 46:
                var8 = var7.bind(var2)();
                var4 = var8.done;
                var5 = var8;
                if(var4) { _fun0006_ip = 42; continue _fun0006 }
case 47:
                _fun0006_ip = 44; continue _fun0006;
case 45:
                var7 = _closure2_slot2;
                var4 = var7.set;
                var5 = var7.get;
                var5 = var5.bind(var7)();
                var11 = var3.x;
                var10 = var3.y;
                var3 = global;
                var3 = var3.HermesInternal;
                var9 = var3.concat;
                var8 = ' L ';
                var3 = ' ';
                var3 = var9.bind(var8)(var11, var3, var10);
                var3 = var5 + var3;
                var3 = var4.bind(var7)(var3);
                var5 = _closure2_slot6;
                var4 = var5.set;
                var3 = {'x': 0, 'y': 0};
                var3 = var4.bind(var5)(var3);
                var5 = _closure2_slot5;
                var4 = var5.set;
                var3 = -1;
                var3 = var4.bind(var5)(var3);
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var3 = 3;
                var8 = var5[var3];
                var9 = var4.bind(var2)(var8);
                var8 = var9.runOnJS;
                var10 = _closure1_slot2;
                var6 = 5;
                var6 = var5[var6];
                var6 = var10.bind(var2)(var6);
                var6 = var6.addDrawing;
                var9 = var8.bind(var9)(var6);
                var8 = _closure2_slot0;
                var6 = var7.get;
                var7 = var6.bind(var7)();
                var10 = _closure2_slot1;
                var6 = var10.get;
                var6 = var6.bind(var10)();
                var6 = var9.bind(var2)(var8, var7, var6);
                var3 = var5[var3];
                var4 = var4.bind(var2)(var3);
                var3 = var4.runOnJS;
                var1 = _closure2_slot10;
                var1 = var3.bind(var4)(var1);
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
case 42:
                var1 = undefined;
                return var1;
            }
        };
        var11 = {};
        var11['touchInputId'] = var19;
        var11['drawingPath'] = var18;
        var11['previousTouch'] = var17;
        var17 = var8[var5];
        var17 = var2.bind(var4)(var17);
        var17 = var17.runOnJS;
        var11['runOnJS'] = var17;
        var18 = _closure1_slot2;
        var17 = 5;
        var17 = var8[var17];
        var17 = var18.bind(var4)(var17);
        var11['RemixingActionCreators'] = var17;
        var11['color'] = var16;
        var11['strokeWidth'] = var15;
        var11['resetDrawing'] = var14;
        var7['__closure'] = var11;
        var11 = 12129881441711.0;
        var7['__workletHash'] = var11;
        var11 = _closure1_slot9;
        var7['__initData'] = var11;
        var9 = var9.bind(var10)(var7);
        var7 = var8[var5];
        var10 = var2.bind(var4)(var7);
        var7 = var10.useAnimatedStyle;
        var3 = function O() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = {'position': 'absolute', 'left': 0, 'top': 0};
                var5 = _closure2_slot7;
                var4 = 0;
                if(!var5) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                var5 = _closure2_slot3;
                var4 = var5.width;
case 48:
                var1['width'] = var4;
                var4 = _closure2_slot7;
                var2 = 0;
                if(!var4) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                var3 = _closure2_slot3;
                var2 = var3.height;
case 50:
                var1['height'] = var2;
                return var1;
            }
        };
        var11 = {};
        var11['inDrawMode'] = var13;
        var11['canvasSize'] = var12;
        var3['__closure'] = var11;
        var11 = 354522880830.0;
        var3['__workletHash'] = var11;
        var11 = _closure1_slot12;
        var3['__initData'] = var11;
        var7 = var7.bind(var10)(var3);
        var3 = _closure1_slot6;
        var1 = var8[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.GestureDetector;
        var1 = {};
        var1['gesture'] = var9;
        var6 = _closure1_slot1;
        var5 = var8[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.View;
        var5 = {};
        var5['style'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['DrawingGestureHandler'] = var2;
    return var1;
})();