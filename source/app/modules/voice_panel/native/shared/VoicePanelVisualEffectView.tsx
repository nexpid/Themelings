// app/modules/voice_panel/native/shared/VoicePanelVisualEffectView.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
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
    var4 = native4;
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
 0:
            var1 = arg1;
            var7 = var1.matchAppTheme;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0001_ip = 17; continue _fun0001 }
 15:
            var7 = false;
 17:
            var5 = 'dark';
            if(!var7) { _fun0001_ip = 26; continue _fun0001 }
 24:
            var5 = undefined;
 26:
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
            if(var7) { _fun0001_ip = 124; continue _fun0001 }
 121:
            var5 = var6;
 124:
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