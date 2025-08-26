// app/modules/keyboard/native/AnimatedKeyboardExperiment.tsx
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
    var11 = true;
    var4['value'] = var11;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var8 = var6.bind(var1)(var4);
    var5 = var8.createApexExperiment;
    var4 = {'name': '2025-08_animated_keyboard_android', 'kind': 'user'};
    var9 = {};
    var10 = false;
    var9['enabled'] = var10;
    var4['defaultConfig'] = var9;
    var9 = {};
    var10 = {};
    var10['enabled'] = var11;
    var9[1] = var10;
    var4['variations'] = var9;
    var4 = var5.bind(var8)(var4);
    var8 = var4.getConfig;
    var5 = {};
    var9 = 'isAnimatedKeyboardEnabled';
    var5['location'] = var9;
    var5 = var8.bind(var4)(var5);
    var5 = var5.enabled;
    var _closure1_slot2 = var5;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/keyboard/native/AnimatedKeyboardExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var3['AnimatedKeyboardExperiment'] = var4;
    var2 = function isAnimatedAndroidKeyboard() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var1 = var3.isAndroid;
            var1 = var1.bind(var3)();
            var3 = !var1;
            var1 = !var3;
            if(var3) { _fun0001_ip = 47; continue _fun0001 }
 43:
            var1 = _closure1_slot2;
 47:
            return var1;
        }
    };
    var3['isAnimatedAndroidKeyboard'] = var2;
    return var1;
})();