// app/modules/chat/native/ChatViewWrapperAnimatedKeyboard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
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
    var10 = 0;
    var7 = var6[var10];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var9 = 1;
    var4 = var6[var9];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.Easing;
    var7 = var8.bezier;
    var14 = 0.2;
    var15 = var8;
    var13 = 0;
    var12 = 0;
    var11 = var9;
    var7 = var15[var7](var14, var13, var12, var11, var10);
    var4 = {};
    var8 = 3;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.timingStandardDuration;
    var4['duration'] = var8;
    var4['easing'] = var7;
    var _closure1_slot4 = var4;
    var4 = {};
    var7 = 'function ChatViewWrapperAnimatedKeyboardTsx1(){const{animatedHeight}=this.__closure;return animatedHeight.get();}';
    var4['code'] = var7;
    var _closure1_slot5 = var4;
    var4 = {};
    var7 = 'function ChatViewWrapperAnimatedKeyboardTsx2(height,heightPrev){const{animatedAdjustedMargin,animatedAdjustedMarginPending}=this.__closure;if(heightPrev==null){return;}if(height<heightPrev){animatedAdjustedMargin.set(height);animatedAdjustedMarginPending.set(-1);}else{animatedAdjustedMarginPending.set(height);}}';
    var4['code'] = var7;
    var _closure1_slot6 = var4;
    var4 = {};
    var7 = "function ChatViewWrapperAnimatedKeyboardTsx3(){const{animatedAdjustedMargin,withTiming,animatedHeight,INSET_ANIMATION_CONFIG2,animatedAdjustedMarginPending}=this.__closure;return{marginTop:animatedAdjustedMargin.get(),transform:[{translateY:withTiming(-animatedHeight.get(),INSET_ANIMATION_CONFIG2,'respect-motion-settings',function(finished){if(!finished){return;}if(animatedAdjustedMarginPending.get()!==-1){animatedAdjustedMargin.set(animatedAdjustedMarginPending.get());animatedAdjustedMarginPending.set(-1);}})}]};}";
    var4['code'] = var7;
    var _closure1_slot7 = var4;
    var4 = {};
    var7 = 'function ChatViewWrapperAnimatedKeyboardTsx4(finished){const{animatedAdjustedMarginPending,animatedAdjustedMargin}=this.__closure;if(!finished){return;}if(animatedAdjustedMarginPending.get()!==-1){animatedAdjustedMargin.set(animatedAdjustedMarginPending.get());animatedAdjustedMarginPending.set(-1);}}';
    var4['code'] = var7;
    var _closure1_slot8 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat/native/ChatViewWrapperAnimatedKeyboard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ChatViewWrapperAnimatedKeyboard(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.channelId;
            var5 = var1.children;
            var8 = var1.style;
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 6;
            var3 = var7[var3];
            var4 = undefined;
            var3 = var2.bind(var4)(var3);
            var6 = var3.bind(var4)(var6);
            var3 = function useSafeAreaInsetAnimatedStyle() {
                var3 = _closure1_slot1;
                var11 = _closure1_slot2;
                var2 = 4;
                var2 = var11[var2];
                var10 = undefined;
                var2 = var3.bind(var10)(var2);
                var7 = var2.bind(var10)();
                var _closure3_slot0 = var7;
                var9 = _closure1_slot0;
                var2 = 2;
                var3 = var11[var2];
                var6 = var9.bind(var10)(var3);
                var5 = var6.useSharedValue;
                var3 = var7.get;
                var3 = var3.bind(var7)();
                var8 = var5.bind(var6)(var3);
                var _closure3_slot1 = var8;
                var3 = var11[var2];
                var6 = var9.bind(var10)(var3);
                var5 = var6.useSharedValue;
                var3 = -1;
                var6 = var5.bind(var6)(var3);
                var _closure3_slot2 = var6;
                var3 = var11[var2];
                var13 = var9.bind(var10)(var3);
                var12 = var13.useAnimatedReaction;
                var5 = function n() {
                    var2 = _closure3_slot0;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3 = {};
                var3['animatedHeight'] = var7;
                var5['__closure'] = var3;
                var3 = 9219066704490.0;
                var5['__workletHash'] = var3;
                var3 = _closure1_slot5;
                var5['__initData'] = var3;
                var3 = function t(arg1, arg2) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var4 = arg1;
                        var1 = arg2;
                        var2 = null;
                        if(!(var2 != var1)) { _fun0002_ip = 72; continue _fun0002 }
 12:
                        if(!(!(var4 < var1))) { _fun0002_ip = 35; continue _fun0002 }
 16:
                        var2 = _closure3_slot2;
                        var1 = var2.set;
                        var1 = var1.bind(var2)(var4);
                        _fun0002_ip = 72; continue _fun0002;
 35:
                        var3 = _closure3_slot1;
                        var2 = var3.set;
                        var2 = var2.bind(var3)(var4);
                        var3 = _closure3_slot2;
                        var2 = var3.set;
                        var1 = -1;
                        var1 = var2.bind(var3)(var1);
 72:
                        var1 = undefined;
                        return var1;
                    }
                };
                var14 = {};
                var14['animatedAdjustedMargin'] = var8;
                var14['animatedAdjustedMarginPending'] = var6;
                var3['__closure'] = var14;
                var14 = 15141457454312.0;
                var3['__workletHash'] = var14;
                var14 = _closure1_slot6;
                var3['__initData'] = var14;
                var3 = var12.bind(var13)(var5, var3);
                var2 = var11[var2];
                var3 = var9.bind(var10)(var2);
                var2 = var3.useAnimatedStyle;
                var1 = function _() {
                    var1 = {};
                    var10 = _closure3_slot1;
                    var2 = var10.get;
                    var2 = var2.bind(var10)();
                    var1['marginTop'] = var2;
                    var3 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 5;
                    var5 = var5[var4];
                    var4 = undefined;
                    var8 = var6.bind(var4)(var5);
                    var7 = var8.withTiming;
                    var5 = _closure3_slot0;
                    var4 = var5.get;
                    var4 = var4.bind(var5)();
                    var15 = -var4;
                    var14 = _closure1_slot4;
                    var4 = function t(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var1 = arg1;
                            if(!var1) { _fun0003_ip = 32; continue _fun0003 }
 6:
                            var3 = _closure3_slot2;
                            var2 = var3.get;
                            var3 = var2.bind(var3)();
                            var2 = -1;
                            var1 = var2 !== var3;
 32:
                            if(!var1) { _fun0003_ip = 81; continue _fun0003 }
 35:
                            var4 = _closure3_slot1;
                            var2 = var4.set;
                            var3 = _closure3_slot2;
                            var1 = var3.get;
                            var1 = var1.bind(var3)();
                            var1 = var2.bind(var4)(var1);
                            var2 = var3.set;
                            var1 = -1;
                            var1 = var2.bind(var3)(var1);
 81:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var9 = {};
                    var11 = _closure3_slot2;
                    var9['animatedAdjustedMarginPending'] = var11;
                    var9['animatedAdjustedMargin'] = var10;
                    var4['__closure'] = var9;
                    var9 = 16224255032954.0;
                    var4['__workletHash'] = var9;
                    var2 = _closure1_slot8;
                    var4['__initData'] = var2;
                    var13 = 'respect-motion-settings';
                    var16 = var8;
                    var12 = var4;
                    var2 = var16[var7](var15, var14, var13, var12, var11);
                    var3['translateY'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                };
                var5 = {};
                var5['animatedAdjustedMargin'] = var8;
                var8 = 5;
                var8 = var11[var8];
                var8 = var9.bind(var10)(var8);
                var8 = var8.withTiming;
                var5['withTiming'] = var8;
                var5['animatedHeight'] = var7;
                var7 = _closure1_slot4;
                var5['INSET_ANIMATION_CONFIG2'] = var7;
                var5['animatedAdjustedMarginPending'] = var6;
                var1['__closure'] = var5;
                var5 = 10402835415059.0;
                var1['__workletHash'] = var5;
                var4 = _closure1_slot7;
                var1['__initData'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var3.bind(var4)();
            var10 = _closure1_slot0;
            var3 = 7;
            var3 = var7[var3];
            var10 = var10.bind(var4)(var3);
            var3 = var10.isAnimatedAndroidKeyboard;
            var10 = var3.bind(var10)();
            var3 = _closure1_slot3;
            var1 = 2;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var7 = new Array(2);
            var7[0] = var8;
            var8 = undefined;
            if(!var10) { _fun0001_ip = 126; continue _fun0001 }
 123:
            var8 = var9;
 126:
            var7[1] = var8;
            var1['style'] = var7;
            var1['pointerEvents'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();