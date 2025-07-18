// app/modules/safe_area/SafeAreaProvider.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function getSafeAreaInsets(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 2;
            var2 = var5[var2];
            var5 = undefined;
            var4 = var4.bind(var5)(var2);
            var2 = var4.isAndroid;
            var2 = var2.bind(var4)();
            if(var2) { _fun0001_ip = 42; continue _fun0001 }
 40:
            return var3;
 42:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 3;
            var1 = var6[var1];
            var2 = var4.bind(var5)(var1);
            var1 = var2.getState;
            var1 = var1.bind(var2)();
            var1 = var1.safeAreaInsets;
            var2 = 4;
            var2 = var6[var2];
            var4 = var4.bind(var5)(var2);
            var2 = var4.getStableSafeAreaInsets;
            var4 = var2.bind(var4)();
            var5 = var1.bottom;
            var2 = var4.bottom;
            if(!(var5 === var2)) { _fun0001_ip = 156; continue _fun0001 }
 114:
            var5 = var1.top;
            var2 = var4.top;
            if(!(var5 === var2)) { _fun0001_ip = 156; continue _fun0001 }
 128:
            var5 = var1.left;
            var2 = var3.left;
            if(!(var5 === var2)) { _fun0001_ip = 156; continue _fun0001 }
 142:
            var5 = var1.right;
            var2 = var3.right;
            if(!(var5 !== var2)) { _fun0001_ip = 197; continue _fun0001 }
 156:
            var2 = {};
            var5 = var4.bottom;
            var2['bottom'] = var5;
            var4 = var4.top;
            var2['top'] = var4;
            var4 = var3.left;
            var2['left'] = var4;
            var3 = var3.right;
            var2['right'] = var3;
            var1 = var2;
 197:
            return var1;
        }
    };
    var _closure1_slot5 = var1;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/safe_area/SafeAreaProvider.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function SafeAreaReporter() {
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 5;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useSafeAreaInsets;
        var5 = var3.bind(var4)();
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useEffect;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.setState;
                var2 = function() {
                    var1 = {};
                    var4 = _closure1_slot5;
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1['safeAreaInsets'] = var2;
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = null;
        return var1;
    };
    var3['SafeAreaReporter'] = var4;
    var2 = function(arg1) {
        var1 = arg1;
        var5 = var1.children;
        var4 = _closure1_slot4;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 5;
        var1 = var8[var1];
        var3 = undefined;
        var1 = var7.bind(var3)(var1);
        var2 = var1.SafeAreaProvider;
        var1 = {};
        var6 = 7;
        var6 = var8[var6];
        var6 = var7.bind(var3)(var6);
        var6 = var6.INITIAL_SAFE_AREA_METRICS;
        var1['initialMetrics'] = var6;
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['SafeAreaProvider'] = var2;
    return var1;
})();