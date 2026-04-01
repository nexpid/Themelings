// app/design/animation/reanimated/spring/spring.tsx
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
    var4 = var4.CONFIG_NEVER_ANIMATE;
    var _closure1_slot2 = var4;
    var4 = {};
    var7 = "function withSpring_springTsx1(toValue,config,shouldAnimate='respect-motion-settings',callback){const{accessibilityPreferencesSharedValue,CONFIG_NEVER_ANIMATE,ReduceMotion,REAwithSpring}=this.__closure;const reducedMotionEnabled=accessibilityPreferencesSharedValue.get().reduceMotion;const animate=shouldAnimate==='animate-always'||shouldAnimate==='respect-motion-settings'&&!reducedMotionEnabled;const configForRea=!animate?CONFIG_NEVER_ANIMATE:shouldAnimate==='animate-always'?{...(config!==null&&config!==void 0?config:{}),reduceMotion:ReduceMotion.Never}:config;return REAwithSpring(toValue,configForRea,callback);}";
    var4['code'] = var7;
    var _closure1_slot3 = var4;
    var2 = function() {
        var1 = function withSpring(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var8 = arg2;
                var6 = arguments[2];
                var3 = undefined;
                if(!(var6 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var6 = 'respect-motion-settings';
case 2:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 1;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var4 = var2.accessibilityPreferencesSharedValue;
                var2 = var4.get;
                var2 = var2.bind(var4)();
                var2 = var2.reduceMotion;
                var4 = 'animate-always';
                var4 = var4 === var6;
                if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var5 = 'respect-motion-settings';
                if(!(var5 === var6)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 6:
                var5 = _closure1_slot2;
                _fun0001_ip = 8; continue _fun0001;
case 4:
                var2 = var8;
                if(!var4) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                var4 = {};
                var7 = null;
                var6 = var8;
                if(!(var7 == var8)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                var6 = {};
case 11:
                var11 = var4;
                var10 = var6;
                var6 = copyDataProperties(var11, var10);
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var6 = 2;
                var6 = var8[var6];
                var6 = var7.bind(var3)(var6);
                var6 = var6.ReduceMotion;
                var7 = var6.Never;
                var6 = 'reduceMotion';
                var4[5] = var7;
                var2 = var4;
case 9:
                var5 = var2;
case 8:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 2;
                var1 = var4[var1];
                var4 = var2.bind(var3)(var1);
                var3 = var4.withSpring;
                var2 = arg1;
                var1 = arguments[3];
                var1 = var3.bind(var4)(var2, var5, var1);
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
        var4 = _closure1_slot2;
        var3['CONFIG_NEVER_ANIMATE'] = var4;
        var4 = 2;
        var8 = var7[var4];
        var8 = var6.bind(var5)(var8);
        var8 = var8.ReduceMotion;
        var3['ReduceMotion'] = var8;
        var4 = var7[var4];
        var4 = var6.bind(var5)(var4);
        var4 = var4.withSpring;
        var3['REAwithSpring'] = var4;
        var1['__closure'] = var3;
        var3 = 14783154107972.0;
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
    var4 = 'design/animation/reanimated/spring/spring.tsx';
    var4 = var5.bind(var6)(var4);
    var3['withSpring'] = var2;
    return var1;
})();