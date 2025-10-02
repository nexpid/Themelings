// app/modules/visual_effect_view/native/VisualEffectView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var1 = function getIOSBlurEffect(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.MODERN_IOS_BLURS_EFFECTS_AVAILABLE;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = 'default';
            var1 = arg2;
            if(!(var2 === var1)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var1 = 'UIBlurEffectStyleDark';
            var2 = 'light';
            if(!(var2 === var4)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var1 = 'UIBlurEffectStyleLight';
case 5:
            _fun0001_ip = 7; continue _fun0001;
case 4:
            var2 = 'UIBlurEffectStyleSystemUltraThinMaterialDark';
            var3 = 'light';
            if(!(var3 === var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = 'UIBlurEffectStyleSystemUltraThinMaterialLight';
case 8:
            var1 = var2;
case 7:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function getAndroidBlurAmount(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg2;
            var2 = null;
            if(!(var2 == var1)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var2 = 1;
            var4 = 'light';
            var3 = arg1;
            if(!(var4 === var3)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var2 = 0.85;
case 12:
            var1 = var2;
case 10:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var2 = function isBlurDisabled(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var4 = var1.android_softwareBlurDisabled;
            var5 = var1.android_blurTargetViewNativeId;
            var1 = _closure1_slot6;
            if(!var1) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var2 = null;
            var2 = var2 == var5;
            if(var2) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            if(!var4) { _fun0003_ip = 5; continue _fun0003 }
case 3:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 8;
            var5 = var5[var3];
            var3 = undefined;
            var3 = var6.bind(var3)(var5);
            var3 = var3.MODERN_ANDROID_BLURRING_AVAILABLE;
            var4 = !var3;
case 5:
            var3 = true;
            var2 = var3 === var4;
case 16:
            var1 = var2;
case 14:
            return var1;
        }
    };
    var _closure1_slot9 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var8 = var5.bind(var1)(var8);
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.View;
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.useVisualEffectViewOverrides;
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var5 = var9.isAndroid;
    var5 = var5.bind(var9)();
    var _closure1_slot6 = var5;
    var5 = var8.forwardRef;
    var4 = function VisualEffectView(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = arg1;
            var8 = arg2;
            var18 = var6.blurTheme;
            var21 = var6.blurStyle;
            var5 = undefined;
            if(!(var21 === var5)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var21 = 'default';
case 18:
            var17 = var6.blurAmount;
            if(!(var17 === var5)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            var17 = 1;
case 20:
            var11 = var6.blurTintRgba;
            var1 = var6.android_fallbackColor;
            var10 = var6.android_blurTargetViewNativeId;
            var4 = var6.android_softwareBlurDisabled;
            if(!(var4 === var5)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            var4 = false;
case 22:
            var3 = {'blurTheme': 0, 'blurStyle': 0, 'blurAmount': 0, 'blurTintRgba': 0, 'android_fallbackColor': 0, 'android_blurTargetViewNativeId': 0, 'android_softwareBlurDisabled': 0};
            var13 = null;
            var29 = var3;
            var28 = null;
            var2 = silentSetPrototypeOf(var29, var28);
            var29 = {};
            var28 = var6;
            var27 = var3;
            var6 = copyDataProperties(var29, var28, var27);
            var7 = var6.style;
            var3 = _closure1_slot4;
            var3 = var3.bind(var5)();
            var14 = var3.blurAmountOverride;
            var12 = var3.blurTintRgbaOverride;
            var19 = var3.blurEffectNameOverride;
            var3 = {};
            var3['blurTheme'] = var18;
            var3['blurStyle'] = var21;
            var3['style'] = var7;
            var3['android_fallbackColor'] = var1;
            var1 = var3.style;
            var24 = var3.blurTheme;
            var23 = var3.blurStyle;
            var16 = var3.android_fallbackColor;
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var15 = 6;
            var7 = var3[var15];
            var26 = var9.bind(var5)(var7);
            var20 = var26.useToken;
            var25 = _closure1_slot1;
            var22 = 7;
            var7 = var3[var22];
            var7 = var25.bind(var5)(var7);
            var7 = var7.colors;
            var7 = var7.LEGACY_BLUR_FALLBACK_DEFAULT;
            var20 = var20.bind(var26)(var7, var24);
            var7 = var3[var15];
            var9 = var9.bind(var5)(var7);
            var7 = var9.useToken;
            var3 = var3[var22];
            var3 = var25.bind(var5)(var3);
            var3 = var3.colors;
            var3 = var3.LEGACY_BLUR_FALLBACK_ULTRA_THIN;
            var7 = var7.bind(var9)(var3, var24);
            var9 = {};
            var3 = 'default';
            if(!(var3 === var23)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
            var7 = var20;
case 24:
            var9['backgroundColor'] = var7;
            var7 = new Array(3);
            var7[0] = var9;
            var7[1] = var1;
            var9 = var13 != var16;
            var1 = undefined;
            if(!var9) { _fun0004_ip = 26; continue _fun0004 }
case 27:
            var9 = {};
            var9['backgroundColor'] = var16;
            var1 = var9;
case 26:
            var7[2] = var1;
            var16 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = var9[var15];
            var24 = var16.bind(var5)(var1);
            var23 = var24.useToken;
            var20 = _closure1_slot1;
            var1 = var9[var22];
            var1 = var20.bind(var5)(var1);
            var1 = var1.colors;
            var1 = var1.LEGACY_ANDROID_BLUR_OVERLAY_DEFAULT;
            var1 = var23.bind(var24)(var1, var18);
            var15 = var9[var15];
            var16 = var16.bind(var5)(var15);
            var15 = var16.useToken;
            var9 = var9[var22];
            var9 = var20.bind(var5)(var9);
            var9 = var9.colors;
            var9 = var9.LEGACY_ANDROID_BLUR_OVERLAY_ULTRA_THIN;
            var9 = var15.bind(var16)(var9, var18);
            if(!(var3 !== var21)) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            var3 = 'ultra-thin';
            var16 = var9;
            if(!(var3 !== var21)) { _fun0004_ip = 30; continue _fun0004 }
case 31:
            var16 = undefined;
            _fun0004_ip = 30; continue _fun0004;
case 28:
            var16 = var1;
case 30:
            var3 = _closure1_slot9;
            var1 = {};
            var1['android_softwareBlurDisabled'] = var4;
            var1['android_blurTargetViewNativeId'] = var10;
            var1 = var3.bind(var5)(var1);
            if(var1) { _fun0004_ip = 32; continue _fun0004 }
case 33:
            var1 = _closure1_slot6;
            var9 = _closure1_slot5;
            var4 = _closure1_slot1;
            var15 = _closure1_slot2;
            if(var1) { _fun0004_ip = 34; continue _fun0004 }
case 35:
            var1 = 5;
            var1 = var15[var1];
            var3 = var4.bind(var5)(var1);
            var1 = {};
            var1['ref'] = var8;
            if(!(var13 == var19)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var20 = _closure1_slot7;
            var19 = var20.bind(var5)(var18, var21);
case 36:
            var1['blurEffectName'] = var19;
            var19 = var17;
            if(!(var13 != var14)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var19 = var14;
case 38:
            var1['blurAmount'] = var19;
            var19 = var11;
            if(!(var13 != var12)) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var19 = var12;
case 40:
            var1['blurTintRgba'] = var19;
            var29 = var1;
            var28 = var6;
            var19 = copyDataProperties(var29, var28);
            var1 = var9.bind(var5)(var3, var1);
            _fun0004_ip = 42; continue _fun0004;
case 34:
            var3 = 8;
            var3 = var15[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var3['ref'] = var8;
            if(!(var13 == var14)) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            var15 = _closure1_slot8;
            var14 = var15.bind(var5)(var18, var17);
case 43:
            var3['blurAmount'] = var14;
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var14 = 9;
            var14 = var17[var14];
            var15 = var15.bind(var5)(var14);
            var14 = var15.hexToRgbaString;
            var14 = var14.bind(var15)(var16);
            var3['blurTintIOSParityCompensationRgba'] = var14;
            if(!(var13 != var12)) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            var11 = var12;
case 45:
            var3['blurTintRgba'] = var11;
            var3['blurTargetViewNativeId'] = var10;
            var29 = var3;
            var28 = var6;
            var10 = copyDataProperties(var29, var28);
            var1 = var9.bind(var5)(var4, var3);
case 42:
            _fun0004_ip = 47; continue _fun0004;
case 32:
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var2 = {};
            var2['ref'] = var8;
            var29 = var2;
            var28 = var6;
            var6 = copyDataProperties(var29, var28);
            var6 = 'style';
            var2[var6] = var7;
            var1 = var4.bind(var5)(var3, var2);
case 47:
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/visual_effect_view/native/VisualEffectView.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['isBlurDisabled'] = var2;
    return var1;
})();