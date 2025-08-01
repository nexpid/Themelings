// app/modules/voice_panel/native/controls/utils/createUseAnimatedScrollLock.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var5 = var7[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var8 = var4.bind(var1)(var5);
    var4 = 1;
    var4 = var7[var4];
    var5 = var6.bind(var1)(var4);
    var4 = var5.isAndroid;
    var4 = var4.bind(var5)();
    var _closure1_slot2 = var4;
    var5 = var8.createContext;
    var4 = function() {
        var1 = {};
        return var1;
    };
    var4 = var5.bind(var8)(var4);
    var5 = {};
    var8 = 'function onBeginDrag_createUseAnimatedScrollLockTsx1(_,context){const{isDragScrolling}=this.__closure;context.momentumEndCount=0;isDragScrolling.set(true);}';
    var5['code'] = var8;
    var _closure1_slot3 = var5;
    var5 = {};
    var8 = 'function onEndDrag_createUseAnimatedScrollLockTsx2(event){const{isDragScrolling,scrollLocked}=this.__closure;var _event$velocity$y,_event$velocity;isDragScrolling.set(false);if(Math.abs((_event$velocity$y=(_event$velocity=event.velocity)===null||_event$velocity===void 0?void 0:_event$velocity.y)!==null&&_event$velocity$y!==void 0?_event$velocity$y:0)===0){scrollLocked.set(false);}}';
    var5['code'] = var8;
    var _closure1_slot4 = var5;
    var5 = {};
    var8 = 'function onMomentumEnd_createUseAnimatedScrollLockTsx3(event,context){const{IS_ANDROID,scrollLocked}=this.__closure;if(IS_ANDROID){var _context$momentumEndC;let count=(_context$momentumEndC=context===null||context===void 0?void 0:context.momentumEndCount)!==null&&_context$momentumEndC!==void 0?_context$momentumEndC:0;count+=1;if(count===3){scrollLocked.set(false);}else if(context!=null){context.momentumEndCount=count;}}else{scrollLocked.set(false);}}';
    var5['code'] = var8;
    var _closure1_slot5 = var5;
    var5 = {};
    var8 = 'function onScroll_createUseAnimatedScrollLockTsx4(event){const{isDragScrolling,IS_ANDROID,scrollTo,scrollerRef,scrollOffsetValue,scrollLocked,onScrollHandler,runOnJS,onScrollHandlerWorkletized}=this.__closure;var _onScrollHandlerWorkl;const newScrollPosition=event.contentOffset.y;if(isDragScrolling.get()!==true){let scrollPosition=newScrollPosition;if(IS_ANDROID&&scrollPosition<0){scrollPosition=0;scrollTo(scrollerRef,0,0,false);}scrollOffsetValue.set(scrollPosition);}else{const isUp=newScrollPosition<scrollOffsetValue.get();if(scrollLocked.get()||isUp&&newScrollPosition<=0){if(!scrollLocked.get()){scrollLocked.set(true);}scrollTo(scrollerRef,0,0,false);scrollOffsetValue.set(0);}else{scrollOffsetValue.set(newScrollPosition);}}const{width:width,height:height}=event.layoutMeasurement;const{width:contentWidth,height:contentHeight}=event.contentSize;onScrollHandler!=null&&runOnJS(onScrollHandler)({width:width,height:height,offset:newScrollPosition,contentWidth:contentWidth,contentHeight:contentHeight});(_onScrollHandlerWorkl=onScrollHandlerWorkletized)===null||_onScrollHandlerWorkl===void 0||_onScrollHandlerWorkl({width:width,height:height,offset:newScrollPosition,contentWidth:contentWidth,contentHeight:contentHeight});}';
    var5['code'] = var8;
    var _closure1_slot6 = var5;
    var5 = {};
    var8 = 'function createUseAnimatedScrollLockTsx5(){const{scrollLocked}=this.__closure;return{showsVerticalScrollIndicator:!scrollLocked.get()};}';
    var5['code'] = var8;
    var _closure1_slot7 = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/voice_panel/native/controls/utils/createUseAnimatedScrollLock.tsx';
    var5 = var6.bind(var7)(var5);
    var3['ControlsGestureScrollLock'] = var4;
    var2 = function createUseAnimatedScrollLock(arg1, arg2, arg3, arg4) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var2 = arg4;
        var _closure2_slot3 = var2;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = arguments[0];
                var8 = undefined;
                if(!(var1 === var8)) { _fun0001_ip = 13; continue _fun0001 }
 11:
                var1 = {};
 13:
                var17 = var1.onScrollHandler;
                var _closure3_slot0 = var17;
                var16 = var1.onScrollHandlerWorkletized;
                var _closure3_slot1 = var16;
                var _closure3_slot2 = var8;
                var6 = _closure1_slot0;
                var10 = _closure1_slot1;
                var5 = 2;
                var1 = var10[var5];
                var2 = var6.bind(var8)(var1);
                var1 = var2.useAnimatedRef;
                var3 = var1.bind(var2)();
                _closure3_slot2 = var3;
                var1 = {};
                var2 = var10[var5];
                var13 = var6.bind(var8)(var2);
                var12 = var13.useAnimatedScrollHandler;
                var11 = {};
                var9 = function w(arg1, arg2) {
                    var2 = 0;
                    var1 = arg2;
                    var1['momentumEndCount'] = var2;
                    var3 = _closure2_slot3;
                    var2 = var3.set;
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var14 = {};
                var19 = _closure2_slot3;
                var14['isDragScrolling'] = var19;
                var9['__closure'] = var14;
                var14 = 16433590303176.0;
                var9['__workletHash'] = var14;
                var14 = _closure1_slot3;
                var9['__initData'] = var14;
                var11['onBeginDrag'] = var9;
                var14 = function H(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var3 = _closure2_slot3;
                        var1 = var3.set;
                        var4 = false;
                        var1 = var1.bind(var3)(var4);
                        var1 = global;
                        var7 = var1.Math;
                        var6 = var7.abs;
                        var1 = arg1;
                        var5 = var1.velocity;
                        var3 = null;
                        var9 = var3 == var5;
                        var1 = undefined;
                        var8 = undefined;
                        if(var9) { _fun0002_ip = 60; continue _fun0002 }
 55:
                        var8 = var5.y;
 60:
                        var9 = var3 != var8;
                        var5 = 0;
                        var3 = 0;
                        if(!var9) { _fun0002_ip = 74; continue _fun0002 }
 71:
                        var3 = var8;
 74:
                        var3 = var6.bind(var7)(var3);
                        if(!(var5 === var3)) { _fun0002_ip = 97; continue _fun0002 }
 83:
                        var3 = _closure2_slot1;
                        var2 = var3.set;
                        var2 = var2.bind(var3)(var4);
 97:
                        return var1;
                    }
                };
                var15 = {};
                var15['isDragScrolling'] = var19;
                var9 = _closure2_slot1;
                var15['scrollLocked'] = var9;
                var14['__closure'] = var15;
                var15 = 1594981610850.0;
                var14['__workletHash'] = var15;
                var15 = _closure1_slot4;
                var14['__initData'] = var15;
                var11['onEndDrag'] = var14;
                var14 = function D(arg1, arg2) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var2 = arg2;
                        var1 = _closure1_slot2;
                        if(var1) { _fun0003_ip = 34; continue _fun0003 }
 13:
                        var4 = _closure2_slot1;
                        var3 = var4.set;
                        var1 = false;
                        var1 = var3.bind(var4)(var1);
                        _fun0003_ip = 108; continue _fun0003;
 34:
                        var3 = null;
                        var4 = var3 == var2;
                        var1 = undefined;
                        if(var4) { _fun0003_ip = 51; continue _fun0003 }
 45:
                        var1 = var2.momentumEndCount;
 51:
                        var5 = var3 != var1;
                        var4 = 0;
                        if(!var5) { _fun0003_ip = 63; continue _fun0003 }
 60:
                        var4 = var1;
 63:
                        var1 = 1;
                        var1 = var4 + var1;
                        var4 = 3;
                        if(!(var4 !== var1)) { _fun0003_ip = 89; continue _fun0003 }
 77:
                        if(!(var3 != var2)) { _fun0003_ip = 108; continue _fun0003 }
 81:
                        var2['momentumEndCount'] = var1;
                        _fun0003_ip = 108; continue _fun0003;
 89:
                        var3 = _closure2_slot1;
                        var2 = var3.set;
                        var1 = false;
                        var1 = var2.bind(var3)(var1);
 108:
                        var1 = undefined;
                        return var1;
                    }
                };
                var15 = {};
                var18 = _closure1_slot2;
                var15['IS_ANDROID'] = var18;
                var15['scrollLocked'] = var9;
                var14['__closure'] = var15;
                var15 = 17525906195822.0;
                var14['__workletHash'] = var15;
                var15 = _closure1_slot5;
                var14['__initData'] = var15;
                var11['onMomentumEnd'] = var14;
                var14 = function k(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var1 = arg1;
                        var2 = var1.contentOffset;
                        var5 = var2.y;
                        var4 = _closure2_slot3;
                        var3 = var4.get;
                        var3 = var3.bind(var4)();
                        var6 = true;
                        if(!(var6 === var3)) { _fun0004_ip = 199; continue _fun0004 }
 39:
                        var4 = _closure2_slot2;
                        var3 = var4.get;
                        var3 = var3.bind(var4)();
                        var3 = var5 < var3;
                        var7 = _closure2_slot1;
                        var4 = var7.get;
                        var4 = var4.bind(var7)();
                        if(var4) { _fun0004_ip = 100; continue _fun0004 }
 72:
                        if(!var3) { _fun0004_ip = 81; continue _fun0004 }
 75:
                        var3 = 0;
                        if(!(!(var5 <= var3))) { _fun0004_ip = 100; continue _fun0004 }
 81:
                        var4 = _closure2_slot2;
                        var3 = var4.set;
                        var3 = var3.bind(var4)(var5);
                        _fun0004_ip = 285; continue _fun0004;
 100:
                        var4 = _closure2_slot1;
                        var3 = var4.get;
                        var3 = var3.bind(var4)();
                        if(var3) { _fun0004_ip = 130; continue _fun0004 }
 116:
                        var4 = _closure2_slot1;
                        var3 = var4.set;
                        var3 = var3.bind(var4)(var6);
 130:
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var3 = 2;
                        var4 = var4[var3];
                        var3 = undefined;
                        var8 = var6.bind(var3)(var4);
                        var7 = var8.scrollTo;
                        var15 = _closure3_slot2;
                        var6 = 0;
                        var12 = false;
                        var16 = var8;
                        var14 = 0;
                        var13 = 0;
                        var3 = var16[var7](var15, var14, var13, var12, var11);
                        var4 = _closure2_slot2;
                        var3 = var4.set;
                        var3 = var3.bind(var4)(var6);
                        _fun0004_ip = 285; continue _fun0004;
 199:
                        var6 = _closure1_slot2;
                        if(!var6) { _fun0004_ip = 215; continue _fun0004 }
 209:
                        var4 = 0;
                        var6 = var5 < var4;
 215:
                        var4 = var5;
                        if(!var6) { _fun0004_ip = 271; continue _fun0004 }
 221:
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var3 = 2;
                        var6 = var6[var3];
                        var3 = undefined;
                        var9 = var7.bind(var3)(var6);
                        var8 = var9.scrollTo;
                        var15 = _closure3_slot2;
                        var12 = false;
                        var16 = var9;
                        var14 = 0;
                        var13 = 0;
                        var6 = var16[var8](var15, var14, var13, var12, var11);
                        var4 = 0;
 271:
                        var3 = _closure2_slot2;
                        var2 = var3.set;
                        var2 = var2.bind(var3)(var4);
 285:
                        var2 = var1.layoutMeasurement;
                        var7 = var2.width;
                        var6 = var2.height;
                        var1 = var1.contentSize;
                        var4 = var1.width;
                        var1 = var1.height;
                        var3 = _closure3_slot0;
                        var8 = null;
                        if(!(var8 != var3)) { _fun0004_ip = 399; continue _fun0004 }
 330:
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var3 = 2;
                        var3 = var10[var3];
                        var10 = undefined;
                        var11 = var9.bind(var10)(var3);
                        var9 = var11.runOnJS;
                        var3 = _closure3_slot0;
                        var9 = var9.bind(var11)(var3);
                        var3 = {};
                        var3['width'] = var7;
                        var3['height'] = var6;
                        var3['offset'] = var5;
                        var3['contentWidth'] = var4;
                        var3['contentHeight'] = var1;
                        var3 = var9.bind(var10)(var3);
 399:
                        var3 = _closure3_slot1;
                        if(!(var8 != var3)) { _fun0004_ip = 443; continue _fun0004 }
 407:
                        var3 = _closure3_slot1;
                        var2 = {};
                        var2['width'] = var7;
                        var2['height'] = var6;
                        var2['offset'] = var5;
                        var2['contentWidth'] = var4;
                        var2['contentHeight'] = var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
 443:
                        var1 = undefined;
                        return var1;
                    }
                };
                var15 = {};
                var15['isDragScrolling'] = var19;
                var15['IS_ANDROID'] = var18;
                var18 = var10[var5];
                var18 = var6.bind(var8)(var18);
                var18 = var18.scrollTo;
                var15['scrollTo'] = var18;
                var15['scrollerRef'] = var3;
                var18 = _closure2_slot2;
                var15['scrollOffsetValue'] = var18;
                var15['scrollLocked'] = var9;
                var15['onScrollHandler'] = var17;
                var17 = var10[var5];
                var17 = var6.bind(var8)(var17);
                var17 = var17.runOnJS;
                var15['runOnJS'] = var17;
                var15['onScrollHandlerWorkletized'] = var16;
                var14['__closure'] = var15;
                var15 = 13271628494164.0;
                var14['__workletHash'] = var15;
                var15 = _closure1_slot6;
                var14['__initData'] = var15;
                var11['onScroll'] = var14;
                var11 = var12.bind(var13)(var11);
                var1['onScroll'] = var11;
                var5 = var10[var5];
                var6 = var6.bind(var8)(var5);
                var5 = var6.useAnimatedProps;
                var4 = function L() {
                    var1 = {};
                    var3 = _closure2_slot1;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var2 = !var2;
                    var1['showsVerticalScrollIndicator'] = var2;
                    return var1;
                };
                var8 = {};
                var8['scrollLocked'] = var9;
                var4['__closure'] = var8;
                var8 = 3670657775473.0;
                var4['__workletHash'] = var8;
                var7 = _closure1_slot7;
                var4['__initData'] = var7;
                var4 = var5.bind(var6)(var4);
                var1['animatedProps'] = var4;
                var1['scrollerRef'] = var3;
                var2 = _closure2_slot0;
                var1['gestureRef'] = var2;
                return var1;
            }
        };
        return var1;
    };
    var3['createUseAnimatedScrollLock'] = var2;
    return var1;
})();