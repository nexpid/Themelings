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
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var4 = var4.FLYWHEEL_FONTS;
    var _closure1_slot2 = var4;
    var4 = {};
    var5 = 1;
    var8 = var7[var5];
    var8 = var6.bind(var1)(var8);
    var8 = var8.DisplayNameFont;
    var9 = var8.CHERRY_BOMB;
    var8 = 'Sakura-Normal';
    var4[8] = var8;
    var8 = var7[var5];
    var8 = var6.bind(var1)(var8);
    var8 = var8.DisplayNameFont;
    var9 = var8.CHICLE;
    var8 = 'Jellybean-Normal';
    var4[8] = var8;
    var8 = var7[var5];
    var8 = var6.bind(var1)(var8);
    var8 = var8.DisplayNameFont;
    var9 = var8.MUSEO_MODERNO;
    var8 = 'Modern-Medium';
    var4[8] = var8;
    var8 = var7[var5];
    var8 = var6.bind(var1)(var8);
    var8 = var8.DisplayNameFont;
    var9 = var8.NEO_CASTEL;
    var8 = 'Medieval-Normal';
    var4[8] = var8;
    var8 = var7[var5];
    var8 = var6.bind(var1)(var8);
    var8 = var8.DisplayNameFont;
    var9 = var8.PIXELIFY;
    var8 = '8Bit-Normal';
    var4[8] = var8;
    var8 = var7[var5];
    var8 = var6.bind(var1)(var8);
    var8 = var8.DisplayNameFont;
    var9 = var8.SINISTRE;
    var8 = 'Vampyre-Normal';
    var4[8] = var8;
    var8 = var7[var5];
    var8 = var6.bind(var1)(var8);
    var8 = var8.DisplayNameFont;
    var9 = var8.ZILLA_SLAB;
    var8 = 'Tempo-SemiBold';
    var4[8] = var8;
    var8 = var7[var5];
    var8 = var6.bind(var1)(var8);
    var8 = var8.DisplayNameFont;
    var9 = var8.PLAYPEN_SANS;
    var8 = 'MonkeyBars-Bold';
    var4[8] = var8;
    var8 = var7[var5];
    var8 = var6.bind(var1)(var8);
    var8 = var8.DisplayNameFont;
    var9 = var8.ORBITRON;
    var8 = 'Mainframe-Bold';
    var4[8] = var8;
    var8 = var7[var5];
    var8 = var6.bind(var1)(var8);
    var8 = var8.DisplayNameFont;
    var9 = var8.NEW_ROCKER;
    var8 = 'Headbang-Normal';
    var4[8] = var8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.DisplayNameFont;
    var8 = var5.KALAM;
    var5 = 'Journal-Bold';
    var4[7] = var5;
    var _closure1_slot3 = var4;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/display_name_styles/native/useDisplayNameStylesFont.tsx';
    var5 = var6.bind(var7)(var5);
    var3['DISPLAY_NAME_STYLES_FONT_FAMILY_MAP'] = var4;
    var2 = function useDisplayNameStylesFont(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.displayNameStyles;
            var5 = var2.ignoreDisabledStylesSetting;
            var3 = undefined;
            if(!(var5 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = false;
case 2:
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var4 = 2;
            var4 = var9[var4];
            var10 = var7.bind(var3)(var4);
            var6 = var10.useDisplayNameStylesEnabled;
            var4 = {};
            var8 = 'useDisplayNameStylesFont-native';
            var4['location'] = var8;
            var6 = var6.bind(var10)(var4);
            var4 = 3;
            var4 = var9[var4];
            var7 = var7.bind(var3)(var4);
            var4 = var7.useIsDisplayNameStylesFlywheelViewersEnabled;
            var4 = var4.bind(var7)(var8);
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(!var5) { _fun0001_ip = 6; continue _fun0001 }
case 4:
            var5 = null;
            if(!(var5 != var1)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = _closure1_slot2;
            var5 = var6.includes;
            var4 = var1.fontId;
            var4 = var5.bind(var6)(var4);
            if(!var4) { _fun0001_ip = 8; continue _fun0001 }
case 6:
            return var3;
case 8:
            var2 = _closure1_slot3;
            var1 = var1.fontId;
            var1 = var2[var1];
            return var1;
        }
    };
    var3['useDisplayNameStylesFont'] = var2;
    return var1;
})();