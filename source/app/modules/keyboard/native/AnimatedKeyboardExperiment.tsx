// app/modules/keyboard/native/AnimatedKeyboardExperiment.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var2 = function isLegacyAndroidKeyboard() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 1;
            var1 = var4[var1];
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            var1 = var2.isAndroid;
            var1 = var1.bind(var2)();
            var2 = !var1;
            var1 = !var2;
            if(var2) { _fun0001_ip = 89; continue _fun0001 }
 43:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 2;
            var2 = var6[var2];
            var4 = var4.bind(var5)(var2);
            var2 = var4.isFabric;
            var2 = var2.bind(var4)();
            var2 = !var2;
            if(!var2) { _fun0001_ip = 86; continue _fun0001 }
 79:
            var3 = _closure1_slot2;
            var2 = !var3;
 86:
            var1 = var2;
 89:
            return var1;
        }
    };
    var _closure1_slot4 = var2;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var8[var1];
    var1 = undefined;
    var9 = var7.bind(var1)(var5);
    var6 = var9.createExperiment;
    var5 = {'kind': 'user', 'id': '2025-06_animated_keyboard_android', 'label': 'Animated Keyboard (Android)'};
    var10 = {'enabled': false, 'reanimated': false};
    var5['defaultConfig'] = var10;
    var11 = {'id': 1, 'label': 'Enable w/ KeyboardController (Android)'};
    var10 = {'enabled': true, 'reanimated': false};
    var11['config'] = var10;
    var10 = new Array(2);
    var10[0] = var11;
    var11 = {'id': 2, 'label': 'Deprecated Reanimated (Android)'};
    var12 = {'enabled': true, 'reanimated': true};
    var11['config'] = var12;
    var10[1] = var11;
    var5['treatments'] = var10;
    var5 = var6.bind(var9)(var5);
    var9 = var5.getCurrentConfig;
    var6 = {};
    var10 = 'isAnimatedKeyboardEnabled';
    var6['location'] = var10;
    var6 = var9.bind(var5)(var6);
    var9 = var6.enabled;
    var _closure1_slot2 = var9;
    var6 = var6.reanimated;
    var _closure1_slot3 = var6;
    var6 = 3;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/keyboard/native/AnimatedKeyboardExperiment.tsx';
    var6 = var7.bind(var8)(var6);
    var3['AnimatedKeyboardExperiment'] = var5;
    var4 = function isReanimatedKeyboardEnabled() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = _closure1_slot4;
            var1 = undefined;
            var3 = var3.bind(var1)();
            var1 = !var3;
            if(var3) { _fun0002_ip = 23; continue _fun0002 }
 19:
            var1 = _closure1_slot3;
 23:
            return var1;
        }
    };
    var3['isReanimatedKeyboardEnabled'] = var4;
    var3['isLegacyAndroidKeyboard'] = var2;
    return var1;
})();