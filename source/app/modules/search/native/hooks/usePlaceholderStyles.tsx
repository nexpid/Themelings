// app/modules/search/native/hooks/usePlaceholderStyles.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FADE_LAYOUT_ANIMATION_DURATION;
    var _closure1_slot4 = var4;
    var4 = {};
    var7 = 'function usePlaceholderStylesTsx1(){const{useReducedMotion,visible,withRepeat,withSequence,withTiming,STANDARD_EASING,FADE_LAYOUT_ANIMATION_DURATION}=this.__closure;if(useReducedMotion){return{opacity:visible?1:0};}if(visible){return{opacity:withRepeat(withSequence(withTiming(0.5,{duration:0}),withTiming(1,{duration:1300,easing:STANDARD_EASING}),withTiming(0.5,{duration:1300,easing:STANDARD_EASING})),-1)};}return{opacity:withTiming(0,{duration:FADE_LAYOUT_ANIMATION_DURATION})};}';
    var4['code'] = var7;
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/hooks/usePlaceholderStyles.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useFullscreenPlaceholderCount(arg1) {
        var1 = arg1;
        var5 = var1.placeholderHeight;
        var2 = var1.numColumns;
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var1 = 2;
        var1 = var4[var1];
        var4 = undefined;
        var3 = var3.bind(var4)(var1);
        var1 = {};
        var6 = true;
        var1['ignoreKeyboard'] = var6;
        var1 = var3.bind(var4)(var1);
        var1 = var1.height;
        var3 = global;
        var4 = var3.Math;
        var3 = var4.ceil;
        var1 = var1 / var5;
        var1 = var3.bind(var4)(var1);
        var1 = var1 * var2;
        return var1;
    };
    var3['useFullscreenPlaceholderCount'] = var4;
    var2 = function usePlaceholderAnimatedStyle(arg1) {
        var10 = arg1;
        var _closure2_slot0 = var10;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var2 = 3;
        var2 = var9[var2];
        var7 = undefined;
        var6 = var8.bind(var7)(var2);
        var5 = var6.useStateFromStores;
        var2 = _closure1_slot3;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var1 = _closure1_slot3;
            var1 = var1.useReducedMotion;
            return var1;
        };
        var11 = var5.bind(var6)(var3, var2);
        var _closure2_slot1 = var11;
        var6 = 4;
        var2 = var9[var6];
        var3 = var8.bind(var7)(var2);
        var2 = var3.useAnimatedStyle;
        var1 = function A() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = _closure2_slot1;
                var2 = {};
                var4 = _closure2_slot0;
                if(var1) { _fun0001_ip = 290; continue _fun0001 }
 19:
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                if(var4) { _fun0001_ip = 82; continue _fun0001 }
 33:
                var3 = 5;
                var5 = var17[var3];
                var3 = undefined;
                var6 = var16.bind(var3)(var5);
                var5 = var6.withTiming;
                var3 = {};
                var1 = _closure1_slot4;
                var3['duration'] = var1;
                var1 = 0;
                var1 = var5.bind(var6)(var1, var3);
                var2['opacity'] = var1;
                var1 = var2;
                _fun0001_ip = 288; continue _fun0001;
 82:
                var3 = 4;
                var5 = var17[var3];
                var15 = undefined;
                var7 = var16.bind(var15)(var5);
                var6 = var7.withRepeat;
                var3 = var17[var3];
                var10 = var16.bind(var15)(var3);
                var9 = var10.withSequence;
                var3 = 5;
                var5 = var17[var3];
                var11 = var16.bind(var15)(var5);
                var8 = var11.withTiming;
                var5 = {};
                var12 = 0;
                var5['duration'] = var12;
                var13 = 0.5;
                var8 = var8.bind(var11)(var13, var5);
                var5 = var17[var3];
                var19 = var16.bind(var15)(var5);
                var12 = var19.withTiming;
                var11 = {};
                var18 = 1300;
                var11['duration'] = var18;
                var14 = 6;
                var5 = var17[var14];
                var5 = var16.bind(var15)(var5);
                var5 = var5.STANDARD_EASING;
                var11['easing'] = var5;
                var5 = 1;
                var5 = var12.bind(var19)(var5, var11);
                var3 = var17[var3];
                var12 = var16.bind(var15)(var3);
                var11 = var12.withTiming;
                var3 = {};
                var3['duration'] = var18;
                var14 = var17[var14];
                var14 = var16.bind(var15)(var14);
                var14 = var14.STANDARD_EASING;
                var3['easing'] = var14;
                var3 = var11.bind(var12)(var13, var3);
                var5 = var9.bind(var10)(var8, var5, var3);
                var3 = -1;
                var3 = var6.bind(var7)(var5, var3);
                var2['opacity'] = var3;
                var1 = var2;
 288:
                _fun0001_ip = 305; continue _fun0001;
 290:
                var3 = 0;
                if(!var4) { _fun0001_ip = 298; continue _fun0001 }
 295:
                var3 = 1;
 298:
                var2['opacity'] = var3;
                var1 = var2;
 305:
                return var1;
            }
        };
        var5 = {};
        var5['useReducedMotion'] = var11;
        var5['visible'] = var10;
        var10 = var9[var6];
        var10 = var8.bind(var7)(var10);
        var10 = var10.withRepeat;
        var5['withRepeat'] = var10;
        var6 = var9[var6];
        var6 = var8.bind(var7)(var6);
        var6 = var6.withSequence;
        var5['withSequence'] = var6;
        var6 = 5;
        var6 = var9[var6];
        var6 = var8.bind(var7)(var6);
        var6 = var6.withTiming;
        var5['withTiming'] = var6;
        var6 = 6;
        var6 = var9[var6];
        var6 = var8.bind(var7)(var6);
        var6 = var6.STANDARD_EASING;
        var5['STANDARD_EASING'] = var6;
        var6 = _closure1_slot4;
        var5['FADE_LAYOUT_ANIMATION_DURATION'] = var6;
        var1['__closure'] = var5;
        var5 = 9750536800906.0;
        var1['__workletHash'] = var5;
        var4 = _closure1_slot5;
        var1['__initData'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['usePlaceholderAnimatedStyle'] = var2;
    return var1;
})();