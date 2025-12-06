// app/modules/display_name_styles/hooks/useDisplayNameStylesAccessibleColors.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/display_name_styles/hooks/useDisplayNameStylesAccessibleColors.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useDisplayNameStylesAccessibleColors(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var9 = var2.displayNameStyles;
            var _closure2_slot0 = var9;
            var5 = var2.backgroundColor;
            var _closure2_slot1 = var5;
            var7 = undefined;
            var _closure2_slot3 = var7;
            var _closure2_slot4 = var7;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 2;
            var3 = var6[var3];
            var8 = var4.bind(var7)(var3);
            var6 = var8.useStateFromStores;
            var3 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure1_slot4;
                    var3 = var1.desaturateUserColors;
                    var1 = 1;
                    if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = _closure1_slot4;
                    var1 = var2.saturation;
case 2:
                    return var1;
                }
            };
            var6 = var6.bind(var8)(var4, var3);
            var _closure2_slot2 = var6;
            var3 = null;
            var4 = var3 == var9;
            var8 = undefined;
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = var9.effectId;
case 4:
            if(!(var3 == var8)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 3;
            var3 = var10[var3];
            var3 = var4.bind(var7)(var3);
            var3 = var3.DisplayNameEffect;
            var8 = var3.SOLID;
case 6:
            _closure2_slot3 = var8;
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 4;
            var3 = var10[var3];
            var4 = var4.bind(var7)(var3);
            var3 = var4.useDisplayNameStylesEffectConfig;
            var7 = var3.bind(var4)(var8);
            _closure2_slot4 = var7;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(5);
            var2[0] = var9;
            var2[1] = var8;
            var7 = var7.minContrastRatio;
            var2[2] = var7;
            var2[3] = var6;
            var2[4] = var5;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var1 = _closure2_slot0;
                    var3 = var1.colors;
                    var2 = var3.map;
                    var1 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var1 = 5;
                            var1 = var11[var1];
                            var8 = undefined;
                            var3 = var10.bind(var8)(var1);
                            var2 = var3.getAccessibleForegroundColor;
                            var1 = {};
                            var5 = _closure1_slot1;
                            var9 = 6;
                            var4 = var11[var9];
                            var5 = var5.bind(var8)(var4);
                            var4 = arg1;
                            var4 = var5.bind(var8)(var4);
                            var1['foreground'] = var4;
                            var7 = _closure2_slot3;
                            var5 = 3;
                            var5 = var11[var5];
                            var5 = var10.bind(var8)(var5);
                            var5 = var5.DisplayNameEffect;
                            var5 = var5.TOON;
                            if(!(var7 !== var5)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                            var7 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var5 = var5[var9];
                            var7 = var7.bind(var8)(var5);
                            var5 = _closure2_slot1;
                            var5 = var7.bind(var8)(var5);
                            _fun0004_ip = 12; continue _fun0004;
case 10:
                            var7 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var6 = var6[var9];
                            var7 = var7.bind(var8)(var6);
                            var6 = '#333';
                            var5 = var7.bind(var8)(var6);
case 12:
                            var1['background'] = var5;
                            var5 = _closure2_slot4;
                            var5 = var5.minContrastRatio;
                            var1['ratio'] = var5;
                            var4 = _closure2_slot2;
                            var1['saturationFactor'] = var4;
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.hex;
                            var1 = var1.bind(var2)();
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    _fun0003_ip = 13; continue _fun0003;
case 8:
                    var1 = new Array(0);
case 13:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useDisplayNameStylesAccessibleColors'] = var2;
    return var1;
})();