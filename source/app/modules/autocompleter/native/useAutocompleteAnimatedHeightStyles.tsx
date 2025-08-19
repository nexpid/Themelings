// app/modules/autocompleter/native/useAutocompleteAnimatedHeightStyles.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = {};
    var6 = "function useAutocompleteAnimatedHeightStylesTsx1(){const{withTiming,height,timingStandard,isFrozenSharedValue}=this.__closure;return{height:withTiming(height,timingStandard),display:!isFrozenSharedValue.get()?'flex':'none'};}";
    var1['code'] = var6;
    var _closure1_slot2 = var1;
    var1 = 4;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/autocompleter/native/useAutocompleteAnimatedHeightStyles.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useAutocompleteAnimatedHeightStyles(arg1, arg2) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var9 = _closure1_slot0;
        var10 = _closure1_slot1;
        var2 = 0;
        var2 = var10[var2];
        var8 = undefined;
        var5 = var9.bind(var8)(var2);
        var3 = var5.useIsScreenIndexFrozenSharedValue;
        var2 = arg2;
        var6 = var3.bind(var5)(var2);
        var _closure2_slot1 = var6;
        var2 = 1;
        var2 = var10[var2];
        var3 = var9.bind(var8)(var2);
        var2 = var3.useAnimatedStyle;
        var1 = function s() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var2 = 2;
                var2 = var9[var2];
                var7 = undefined;
                var6 = var8.bind(var7)(var2);
                var5 = var6.withTiming;
                var4 = _closure2_slot0;
                var3 = 3;
                var3 = var9[var3];
                var3 = var8.bind(var7)(var3);
                var3 = var3.timingStandard;
                var3 = var5.bind(var6)(var4, var3);
                var1['height'] = var3;
                var3 = _closure2_slot1;
                var2 = var3.get;
                var3 = var2.bind(var3)();
                var2 = 'flex';
                if(!var3) { _fun0001_ip = 91; continue _fun0001 }
 87:
                var2 = 'none';
 91:
                var1['display'] = var2;
                return var1;
            }
        };
        var5 = {};
        var11 = 2;
        var11 = var10[var11];
        var11 = var9.bind(var8)(var11);
        var11 = var11.withTiming;
        var5['withTiming'] = var11;
        var5['height'] = var7;
        var7 = 3;
        var7 = var10[var7];
        var7 = var9.bind(var8)(var7);
        var7 = var7.timingStandard;
        var5['timingStandard'] = var7;
        var5['isFrozenSharedValue'] = var6;
        var1['__closure'] = var5;
        var5 = 3862216441966.0;
        var1['__workletHash'] = var5;
        var4 = _closure1_slot2;
        var1['__initData'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();