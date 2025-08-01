// app/modules/chat/native/placeholder/useChatPlaceholderAnimatedStyles.tsx
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
    var4 = {};
    var7 = 1300;
    var4['duration'] = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.STANDARD_EASING;
    var4['easing'] = var7;
    var _closure1_slot3 = var4;
    var4 = {};
    var7 = 'function useChatPlaceholderAnimatedStylesTsx1(){const{visible,animated,useReducedMotion,withRepeat,withSequence,withTiming,timingNone,TIMING_CONFIG}=this.__closure;if(!visible){return{opacity:0};}else if(!animated||useReducedMotion){return{opacity:0.7};}return{opacity:withRepeat(withSequence(withTiming(0.3,timingNone),withTiming(0.7,TIMING_CONFIG),withTiming(0.3,TIMING_CONFIG)),-1)};}';
    var4['code'] = var7;
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat/native/placeholder/useChatPlaceholderAnimatedStyles.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useChatPlaceholderAnimatedStyles(arg1) {
        var2 = arg1;
        var12 = var2.visible;
        var _closure2_slot0 = var12;
        var11 = var2.animated;
        var _closure2_slot1 = var11;
        var8 = _closure1_slot0;
        var9 = _closure1_slot1;
        var2 = 2;
        var2 = var9[var2];
        var7 = undefined;
        var6 = var8.bind(var7)(var2);
        var5 = var6.useStateFromStores;
        var2 = _closure1_slot2;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var1 = _closure1_slot2;
            var1 = var1.useReducedMotion;
            return var1;
        };
        var10 = var5.bind(var6)(var3, var2);
        var _closure2_slot2 = var10;
        var6 = 3;
        var2 = var9[var6];
        var3 = var8.bind(var7)(var2);
        var2 = var3.useAnimatedStyle;
        var1 = function c() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = _closure2_slot0;
                if(var1) { _fun0001_ip = 23; continue _fun0001 }
 10:
                var1 = {};
                var3 = 0;
                var1['opacity'] = var3;
                _fun0001_ip = 243; continue _fun0001;
 23:
                var3 = _closure2_slot1;
                if(!var3) { _fun0001_ip = 221; continue _fun0001 }
 33:
                var2 = _closure2_slot2;
                if(var2) { _fun0001_ip = 221; continue _fun0001 }
 43:
                var2 = {};
                var13 = _closure1_slot0;
                var14 = _closure1_slot1;
                var3 = 3;
                var5 = var14[var3];
                var10 = undefined;
                var6 = var13.bind(var10)(var5);
                var5 = var6.withRepeat;
                var3 = var14[var3];
                var9 = var13.bind(var10)(var3);
                var8 = var9.withSequence;
                var3 = 4;
                var7 = var14[var3];
                var15 = var13.bind(var10)(var7);
                var11 = var15.withTiming;
                var7 = 5;
                var7 = var14[var7];
                var7 = var13.bind(var10)(var7);
                var7 = var7.timingNone;
                var12 = 0.3;
                var7 = var11.bind(var15)(var12, var7);
                var11 = var14[var3];
                var16 = var13.bind(var10)(var11);
                var15 = var16.withTiming;
                var11 = _closure1_slot3;
                var4 = 0.7;
                var4 = var15.bind(var16)(var4, var11);
                var3 = var14[var3];
                var10 = var13.bind(var10)(var3);
                var3 = var10.withTiming;
                var3 = var3.bind(var10)(var12, var11);
                var4 = var8.bind(var9)(var7, var4, var3);
                var3 = -1;
                var3 = var5.bind(var6)(var4, var3);
                var2['opacity'] = var3;
                _fun0001_ip = 240; continue _fun0001;
 221:
                var3 = {};
                var4 = 0.7;
                var3['opacity'] = var4;
                var2 = var3;
 240:
                var1 = var2;
 243:
                return var1;
            }
        };
        var5 = {};
        var5['visible'] = var12;
        var5['animated'] = var11;
        var5['useReducedMotion'] = var10;
        var10 = var9[var6];
        var10 = var8.bind(var7)(var10);
        var10 = var10.withRepeat;
        var5['withRepeat'] = var10;
        var6 = var9[var6];
        var6 = var8.bind(var7)(var6);
        var6 = var6.withSequence;
        var5['withSequence'] = var6;
        var6 = 4;
        var6 = var9[var6];
        var6 = var8.bind(var7)(var6);
        var6 = var6.withTiming;
        var5['withTiming'] = var6;
        var6 = 5;
        var6 = var9[var6];
        var6 = var8.bind(var7)(var6);
        var6 = var6.timingNone;
        var5['timingNone'] = var6;
        var6 = _closure1_slot3;
        var5['TIMING_CONFIG'] = var6;
        var1['__closure'] = var5;
        var5 = 3375288363194.0;
        var1['__workletHash'] = var5;
        var4 = _closure1_slot4;
        var1['__initData'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();