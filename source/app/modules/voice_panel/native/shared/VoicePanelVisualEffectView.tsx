// app/modules/voice_panel/native/shared/VoicePanelVisualEffectView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = var7.memo;
    var2 = function VoicePanelVisualEffectViewInner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var7 = var1.matchAppTheme;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = false;
case 2:
            var5 = 'dark';
            if(!var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = undefined;
case 4:
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 2;
            var3 = var8[var3];
            var9 = var2.bind(var4)(var3);
            var6 = var9.useToken;
            var10 = _closure1_slot1;
            var3 = 3;
            var3 = var8[var3];
            var3 = var10.bind(var4)(var3);
            var3 = var3.colors;
            var3 = var3.THEME_LOCKED_BLUR_FALLBACK;
            var6 = var6.bind(var9)(var3);
            var3 = _closure1_slot3;
            var1 = 4;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.BackgroundBlurFill;
            var1 = {};
            var1['blurTheme'] = var5;
            var5 = undefined;
            if(var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var6;
case 6:
            var1['android_fallbackColor'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/shared/VoicePanelVisualEffectView.tsx';
    var4 = var5.bind(var6)(var4);
    var3['VoicePanelVisualEffectView'] = var2;
    return var1;
})();