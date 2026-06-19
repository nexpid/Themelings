// app/modules/display_name_styles/DisplayNameStylesFontOrder.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var9 = 0;
    var7 = var6[var9];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.FLYWHEEL_FONTS;
    var4 = 2;
    var7 = var6[var4];
    var7 = var5.bind(var1)(var7);
    var7 = var7.DisplayNameFont;
    var10 = var7.DEFAULT;
    var7 = new Array(8);
    var7[0] = var10;
    var10 = var6[var4];
    var10 = var5.bind(var1)(var10);
    var10 = var10.DisplayNameFont;
    var10 = var10.ZILLA_SLAB;
    var7[1] = var10;
    var10 = var6[var4];
    var10 = var5.bind(var1)(var10);
    var10 = var10.DisplayNameFont;
    var10 = var10.CHERRY_BOMB;
    var7[2] = var10;
    var10 = var6[var4];
    var10 = var5.bind(var1)(var10);
    var10 = var10.DisplayNameFont;
    var10 = var10.CHICLE;
    var7[3] = var10;
    var10 = var6[var4];
    var10 = var5.bind(var1)(var10);
    var10 = var10.DisplayNameFont;
    var10 = var10.MUSEO_MODERNO;
    var7[4] = var10;
    var10 = var6[var4];
    var10 = var5.bind(var1)(var10);
    var10 = var10.DisplayNameFont;
    var10 = var10.NEO_CASTEL;
    var7[5] = var10;
    var10 = var6[var4];
    var10 = var5.bind(var1)(var10);
    var10 = var10.DisplayNameFont;
    var10 = var10.PIXELIFY;
    var7[6] = var10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DisplayNameFont;
    var4 = var4.SINISTRE;
    var7[7] = var4;
    var _closure1_slot3 = var7;
    var4 = new Array(0);
    var13 = var4;
    var12 = var7;
    var11 = 0;
    var11 = arraySpread(var13, var12, var11);
    var13 = var4;
    var12 = var8;
    var7 = arraySpread(var13, var12, var11);
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/display_name_styles/DisplayNameStylesFontOrder.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useVisibleFontOrder() {
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useIsDisplayNameStylesFlywheelSettersEnabled;
        var3 = 'font-order';
        var5 = var4.bind(var5)(var3);
        var _closure2_slot0 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot0;
                if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = _closure1_slot3;
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var1 = _closure1_slot4;
case 4:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useVisibleFontOrder'] = var2;
    return var1;
})();