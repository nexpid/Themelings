// app/design/animation/reanimated/timing/timing.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.CONFIG_NEVER_ANIMATE_TIMING;
    var _closure1_slot2 = var4;
    var4 = {};
    var7 = "function withTiming_timingTsx1(toValue,config,shouldAnimate='respect-motion-settings',callback){const{accessibilityPreferencesSharedValue,REAwithTiming,CONFIG_NEVER_ANIMATE_TIMING}=this.__closure;const reducedMotionEnabled=accessibilityPreferencesSharedValue.get().reduceMotion;const animate=shouldAnimate==='animate-always'||shouldAnimate==='respect-motion-settings'&&!reducedMotionEnabled;return REAwithTiming(toValue,animate?config:CONFIG_NEVER_ANIMATE_TIMING,callback);}";
    var4['code'] = var7;
    var _closure1_slot3 = var4;
    var2 = function() {
        var1 = function withTiming(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var6 = arg2;
                var8 = arguments[2];
                var5 = undefined;
                if(!(var8 === var5)) { _fun0001_ip = 18; continue _fun0001 }
 12:
                var8 = 'respect-motion-settings';
 18:
                var4 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 1;
                var2 = var7[var2];
                var2 = var4.bind(var5)(var2);
                var3 = var2.accessibilityPreferencesSharedValue;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var2 = var2.reduceMotion;
                var3 = 2;
                var3 = var7[var3];
                var5 = var4.bind(var5)(var3);
                var4 = var5.withTiming;
                var7 = 'animate-always';
                var3 = var6;
                if(!(var7 !== var8)) { _fun0001_ip = 112; continue _fun0001 }
 92:
                var7 = 'respect-motion-settings';
                if(!(var7 === var8)) { _fun0001_ip = 108; continue _fun0001 }
 102:
                var3 = var6;
                if(!var2) { _fun0001_ip = 112; continue _fun0001 }
 108:
                var3 = _closure1_slot2;
 112:
                var2 = arg1;
                var1 = arguments[3];
                var1 = var4.bind(var5)(var2, var3, var1);
                return var1;
            }
        };
        var3 = {};
        var6 = _closure1_slot0;
        var7 = _closure1_slot1;
        var4 = 1;
        var4 = var7[var4];
        var5 = undefined;
        var4 = var6.bind(var5)(var4);
        var4 = var4.accessibilityPreferencesSharedValue;
        var3['accessibilityPreferencesSharedValue'] = var4;
        var4 = 2;
        var4 = var7[var4];
        var4 = var6.bind(var5)(var4);
        var4 = var4.withTiming;
        var3['REAwithTiming'] = var4;
        var4 = _closure1_slot2;
        var3['CONFIG_NEVER_ANIMATE_TIMING'] = var4;
        var1['__closure'] = var3;
        var3 = 9297601463860.0;
        var1['__workletHash'] = var3;
        var2 = _closure1_slot3;
        var1['__initData'] = var2;
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/animation/reanimated/timing/timing.tsx';
    var4 = var5.bind(var6)(var4);
    var3['withTiming'] = var2;
    return var1;
})();