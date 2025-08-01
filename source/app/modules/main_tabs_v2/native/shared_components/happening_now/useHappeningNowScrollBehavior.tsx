// app/modules/main_tabs_v2/native/shared_components/happening_now/useHappeningNowScrollBehavior.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var5 = dependencyMap;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var6 = var5[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot0 = var4;
    var4 = 1;
    var6 = var5[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot1 = var4;
    var4 = 2;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/happening_now/useHappeningNowScrollBehavior.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useHappeningNowScrollBehavior(arg1, arg2) {
        var7 = arg1;
        var6 = arg2;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var5 = _closure1_slot1;
        var4 = var5.useState;
        var3 = false;
        var8 = var4.bind(var5)(var3);
        var4 = _closure1_slot0;
        var3 = undefined;
        var2 = 2;
        var4 = var4.bind(var3)(var8, var2);
        var2 = 0;
        var2 = var4[var2];
        var3 = 1;
        var3 = var4[var3];
        var _closure2_slot2 = var3;
        var4 = var5.useCallback;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var1 = function(arg1) {
            var2 = arg1;
            var5 = _closure2_slot2;
            var1 = var2.nativeEvent;
            var1 = var1.contentOffset;
            var4 = var1.x;
            var1 = _closure2_slot0;
            var4 = var4 < var1;
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var4 = _closure2_slot1;
            var3 = var2.nativeEvent;
            var3 = var3.contentOffset;
            var3 = var3.x;
            var2 = var2.nativeEvent;
            var2 = var2.layoutMeasurement;
            var2 = var2.width;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var3 = var4.bind(var5)(var1, var3);
        var1 = new Array(2);
        var1[0] = var3;
        var1[1] = var2;
        return var1;
    };
    var3['default'] = var4;
    var2 = function useHappeningNowScrollSnapping(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var9 = arg1;
            var2 = var9.current;
            var8 = null;
            var3 = var8 == var2;
            var1 = undefined;
            if(var3) { _fun0001_ip = 52; continue _fun0001 }
 19:
            var2 = var2.state;
            var3 = var8 == var2;
            var1 = undefined;
            if(var3) { _fun0001_ip = 52; continue _fun0001 }
 33:
            var2 = var2.data;
            var3 = var8 == var2;
            var1 = undefined;
            if(var3) { _fun0001_ip = 52; continue _fun0001 }
 47:
            var1 = var2.length;
 52:
            var2 = var8 != var1;
            var6 = 0;
            var5 = 0;
            if(!var2) { _fun0001_ip = 66; continue _fun0001 }
 63:
            var5 = var1;
 66:
            var1 = new Array(0);
            var10 = var6 < var5;
            var4 = 0;
            var3 = 0;
            var2 = undefined;
            if(!var10) { _fun0001_ip = 191; continue _fun0001 }
 83:
            var10 = var8 == var9;
            var11 = undefined;
            if(var10) { _fun0001_ip = 158; continue _fun0001 }
 92:
            var10 = var9.current;
            var12 = var8 == var10;
            var2 = var10;
            var11 = undefined;
            if(var12) { _fun0001_ip = 158; continue _fun0001 }
 109:
            var12 = var10.recyclerlistview_unsafe;
            var10 = var8 == var12;
            var2 = var12;
            var11 = undefined;
            if(var10) { _fun0001_ip = 158; continue _fun0001 }
 127:
            var10 = var12.getLayout;
            var12 = var10.bind(var12)(var3);
            var10 = var8 == var12;
            var2 = var12;
            var11 = undefined;
            if(var10) { _fun0001_ip = 158; continue _fun0001 }
 150:
            var11 = var12.width;
            var2 = var12;
 158:
            var12 = var8 != var11;
            var10 = 0;
            if(!var12) { _fun0001_ip = 170; continue _fun0001 }
 167:
            var10 = var11;
 170:
            var11 = var1.push;
            var11 = var11.bind(var1)(var4);
            var4 = var4 + var10;
            var3 = var3 + 1;
            if(var3 < var5) { _fun0001_ip = 83; continue _fun0001 }
 191:
            return var1;
        }
    };
    var3['useHappeningNowScrollSnapping'] = var2;
    return var1;
})();