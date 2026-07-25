// app/modules/voice_panel/native/shared/VoicePanelVisualEffectView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var13 = 1;
    var4 = var6[var13];
    var4 = var5.bind(var1)(var4);
    var11 = var4.StyleSheet;
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot4 = var8;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var16 = var11.absoluteFillObject;
    var17 = var10;
    var14 = copyDataProperties(var17, var16);
    var4['wrapper'] = var10;
    var10 = {};
    var16 = var11.absoluteFillObject;
    var17 = var10;
    var11 = copyDataProperties(var17, var16);
    var11 = 'borderWidth';
    var10[10] = var13;
    var11 = 4;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var14 = var13.BORDER_SUBTLE;
    var13 = 'borderColor';
    var10[12] = var14;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.modules;
    var11 = var11.mobile;
    var12 = var11.VOICE_PANEL_CONTROLS_BORDER_RADIUS;
    var11 = 'borderRadius';
    var10[10] = var12;
    var4['border'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot6 = var4;
    var4 = var7.memo;
    var2 = function VoicePanelVisualEffectViewInner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var10 = var1.matchAppTheme;
            var5 = undefined;
            if(!(var10 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = false;
case 2:
            var6 = 'dark';
            if(!var10) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = undefined;
case 4:
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 5;
            var1 = var11[var1];
            var8 = var3.bind(var5)(var1);
            var4 = var8.useToken;
            var2 = _closure1_slot1;
            var1 = 4;
            var1 = var11[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.colors;
            var1 = var1.THEME_LOCKED_BLUR_FALLBACK;
            var8 = var4.bind(var8)(var1);
            var1 = _closure1_slot6;
            var9 = var1.bind(var5)();
            var1 = 6;
            var1 = var11[var1];
            var2 = var2.bind(var5)(var1);
            var1 = 'VoicePanelVisualEffectView';
            var2 = var2.bind(var5)(var1);
            var4 = _closure1_slot4;
            var1 = 7;
            var1 = var11[var1];
            var1 = var3.bind(var5)(var1);
            var3 = var1.BackgroundBlurFill;
            var1 = {};
            var1['blurTheme'] = var6;
            var6 = undefined;
            if(var10) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var8;
case 6:
            var1['android_fallbackColor'] = var6;
            var8 = var4.bind(var5)(var3, var1);
            var1 = var8;
            if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = var9.wrapper;
            var2['style'] = var6;
            var6 = new Array(2);
            var6[0] = var8;
            var8 = _closure1_slot4;
            var7 = {};
            var9 = var9.border;
            var7['style'] = var9;
            var7 = var8.bind(var5)(var3, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 8:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/shared/VoicePanelVisualEffectView.tsx';
    var4 = var5.bind(var6)(var4);
    var3['VoicePanelVisualEffectView'] = var2;
    return var1;
})();