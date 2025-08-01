// app/modules/quests/native/QuestDock/QuestDockBlurredContentBackground.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot0 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StyleSheet;
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var9 = var10.bind(var1)(var4);
    var8 = var9.createAnimatedComponent;
    var4 = 4;
    var4 = var6[var4];
    var4 = var10.bind(var1)(var4);
    var4 = var8.bind(var9)(var4);
    var _closure1_slot3 = var4;
    var4 = var7.memo;
    var2 = function QuestDockBlurredContentBackground(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var7 = var2.animatedStyle;
            var5 = var2.animatedLayout;
            var2 = var2.blurTheme;
            var10 = 'dark';
            var4 = undefined;
            if(!(var4 !== var2)) { _fun0001_ip = 36; continue _fun0001 }
 33:
            var10 = var2;
 36:
            var _closure2_slot0 = var10;
            var9 = _closure1_slot0;
            var8 = var9.useMemo;
            var3 = new Array(1);
            var3[0] = var10;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = 'rgba(255, 255, 255, 0.1)';
                    var2 = 'dark';
                    if(!(var2 === var3)) { _fun0002_ip = 27; continue _fun0002 }
 21:
                    var1 = 'rgba(38, 39, 50, 0.65)';
 27:
                    return var1;
                }
            };
            var8 = var8.bind(var9)(var2, var3);
            var3 = var9.useMemo;
            var2 = new Array(1);
            var2[0] = var10;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = 'rgba(255, 255, 255, 0.1)';
                    var2 = 'dark';
                    if(!(var2 === var3)) { _fun0003_ip = 27; continue _fun0003 }
 21:
                    var1 = 'rgba(38, 39, 50, 0.1)';
 27:
                    return var1;
                }
            };
            var9 = var3.bind(var9)(var1, var2);
            var3 = _closure1_slot2;
            var2 = _closure1_slot3;
            var1 = {'blurTintRgba': null, 'blurAmount': 0.5, 'blurTheme': 'dark'};
            var1['blurTintRgba'] = var9;
            var1['android_fallbackColor'] = var8;
            var6 = _closure1_slot1;
            var8 = var6.absoluteFillObject;
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var1['style'] = var6;
            var1['layout'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestDock/QuestDockBlurredContentBackground.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();