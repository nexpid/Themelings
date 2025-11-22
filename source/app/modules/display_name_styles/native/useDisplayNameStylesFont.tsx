// app/modules/display_name_styles/native/useDisplayNameStylesFont.tsx
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
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var4 = {};
    var5 = 0;
    var8 = var7[var5];
    var1 = undefined;
    var8 = var6.bind(var1)(var8);
    var8 = var8.DisplayNameFont;
    var9 = var8.CHERRY_BOMB;
    var8 = 'CherryBombOne-Normal';
    var4[var9] = var8;
    var8 = var7[var5];
    var8 = var6.bind(var1)(var8);
    var8 = var8.DisplayNameFont;
    var9 = var8.CHICLE;
    var8 = 'Chicle-Normal';
    var4[var9] = var8;
    var8 = var7[var5];
    var8 = var6.bind(var1)(var8);
    var8 = var8.DisplayNameFont;
    var9 = var8.MUSEO_MODERNO;
    var8 = 'MuseoModerno-Medium';
    var4[var9] = var8;
    var8 = var7[var5];
    var8 = var6.bind(var1)(var8);
    var8 = var8.DisplayNameFont;
    var9 = var8.NEO_CASTEL;
    var8 = 'NeoCastel-Normal';
    var4[var9] = var8;
    var8 = var7[var5];
    var8 = var6.bind(var1)(var8);
    var8 = var8.DisplayNameFont;
    var9 = var8.PIXELIFY;
    var8 = 'PixelifySans-Normal';
    var4[var9] = var8;
    var8 = var7[var5];
    var8 = var6.bind(var1)(var8);
    var8 = var8.DisplayNameFont;
    var9 = var8.SINISTRE;
    var8 = 'Sinistre-Normal';
    var4[var9] = var8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.DisplayNameFont;
    var8 = var5.ZILLA_SLAB;
    var5 = 'ZillaSlab-Normal';
    var4[var8] = var5;
    var _closure1_slot2 = var4;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/display_name_styles/native/useDisplayNameStylesFont.tsx';
    var5 = var6.bind(var7)(var5);
    var3['DISPLAY_NAME_STYLES_FONT_FAMILY_MAP'] = var4;
    var2 = function useDisplayNameStylesFont(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var1 = var1.displayNameStyles;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 1;
            var4 = var4[var3];
            var3 = undefined;
            var6 = var5.bind(var3)(var4);
            var5 = var6.useDisplayNameStylesViewerEnabled;
            var4 = {};
            var7 = 'useDisplayNameStylesFont-native';
            var4['location'] = var7;
            var4 = var5.bind(var6)(var4);
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = null;
            if(!(var4 == var1)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            return var3;
case 4:
            var2 = _closure1_slot2;
            var1 = var1.fontId;
            var1 = var2[var1];
            return var1;
        }
    };
    var3['useDisplayNameStylesFont'] = var2;
    return var1;
})();