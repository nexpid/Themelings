// app/modules/messages/native/renderer/row_data/embeds/getEmbedThemeColors.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var4 = function getEmbedThemeColors(arg1) {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 5;
        var2 = var4[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = var3.getEmbedBackground;
        var3 = var2.bind(var3)();
        var2 = _closure1_slot13;
        var1 = arg1;
        var4 = var2.bind(var4)(var1, var3);
        var3 = var4.headerColor;
        var1 = {};
        var1['colors'] = var4;
        var2 = {};
        var5 = var4.borderColor;
        var2['borderColor'] = var5;
        var4 = var4.backgroundColor;
        var2['backgroundColor'] = var4;
        var4 = 15;
        var2['thumbnailCornerRadius'] = var4;
        var2['headerColor'] = var3;
        var1['baseColors'] = var2;
        return var1;
    };
    var _closure1_slot14 = var4;
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
    var5 = var5.bind(var1)(var8);
    var _closure1_slot3 = var5;
    var5 = 1;
    var8 = var7[var5];
    var10 = var6.bind(var1)(var8);
    var9 = var10.experimental_createToken;
    var8 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var5 = var1.theme;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 2;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.isThemeDark;
            var1 = var1.bind(var3)(var5);
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 3;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.unsafe_rawColors;
            if(var1) { _fun0001_ip = 80; continue _fun0001 }
 72:
            var1 = var2.PRIMARY_400;
            _fun0001_ip = 86; continue _fun0001;
 80:
            var1 = var2.PRIMARY_500;
 86:
            return var1;
        }
    };
    var8 = var9.bind(var10)(var8);
    var _closure1_slot4 = var8;
    var8 = var7[var5];
    var10 = var6.bind(var1)(var8);
    var9 = var10.experimental_createToken;
    var8 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var5 = var1.theme;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 2;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.isThemeDark;
            var1 = var1.bind(var3)(var5);
            if(var1) { _fun0002_ip = 118; continue _fun0002 }
 47:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 4;
            var1 = var7[var1];
            var6 = var3.bind(var4)(var1);
            var5 = var6.hexWithOpacity;
            var3 = _closure1_slot1;
            var1 = 3;
            var1 = var7[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.unsafe_rawColors;
            var3 = var1.PRIMARY_500;
            var1 = 0.3;
            var1 = var5.bind(var6)(var3, var1);
            _fun0002_ip = 149; continue _fun0002;
 118:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 3;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.unsafe_rawColors;
            var1 = var2.PRIMARY_600;
 149:
            return var1;
        }
    };
    var8 = var9.bind(var10)(var8);
    var _closure1_slot5 = var8;
    var8 = var7[var5];
    var10 = var6.bind(var1)(var8);
    var9 = var10.experimental_createToken;
    var8 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var5 = var1.theme;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 2;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.isThemeDark;
            var1 = var1.bind(var3)(var5);
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 3;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.unsafe_rawColors;
            if(var1) { _fun0003_ip = 80; continue _fun0003 }
 72:
            var1 = var2.PRIMARY_400;
            _fun0003_ip = 86; continue _fun0003;
 80:
            var1 = var2.PRIMARY_500;
 86:
            return var1;
        }
    };
    var8 = var9.bind(var10)(var8);
    var _closure1_slot6 = var8;
    var8 = var7[var5];
    var10 = var6.bind(var1)(var8);
    var9 = var10.experimental_createToken;
    var8 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var5 = var1.theme;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 2;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.isThemeDark;
            var1 = var1.bind(var3)(var5);
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 3;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.unsafe_rawColors;
            if(var1) { _fun0004_ip = 80; continue _fun0004 }
 72:
            var1 = var2.PRIMARY_400;
            _fun0004_ip = 86; continue _fun0004;
 80:
            var1 = var2.PRIMARY_500;
 86:
            return var1;
        }
    };
    var8 = var9.bind(var10)(var8);
    var _closure1_slot7 = var8;
    var8 = var7[var5];
    var10 = var6.bind(var1)(var8);
    var9 = var10.experimental_createToken;
    var8 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var5 = var1.theme;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 2;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.isThemeDark;
            var1 = var1.bind(var3)(var5);
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 3;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.unsafe_rawColors;
            if(var1) { _fun0005_ip = 80; continue _fun0005 }
 72:
            var1 = var2.PRIMARY_100;
            _fun0005_ip = 86; continue _fun0005;
 80:
            var1 = var2.PRIMARY_500;
 86:
            return var1;
        }
    };
    var8 = var9.bind(var10)(var8);
    var _closure1_slot8 = var8;
    var8 = var7[var5];
    var10 = var6.bind(var1)(var8);
    var9 = var10.experimental_createToken;
    var8 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var4 = var1.theme;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 2;
            var1 = var5[var1];
            var6 = undefined;
            var3 = var3.bind(var6)(var1);
            var1 = var3.isThemeDark;
            var1 = var1.bind(var3)(var4);
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 4;
            var3 = var7[var3];
            var5 = var4.bind(var6)(var3);
            var4 = var5.hexWithOpacity;
            var3 = _closure1_slot1;
            var2 = 3;
            var2 = var7[var2];
            var2 = var3.bind(var6)(var2);
            var2 = var2.unsafe_rawColors;
            if(var1) { _fun0006_ip = 118; continue _fun0006 }
 94:
            var3 = var2.PRIMARY_860;
            var1 = 0.08;
            var1 = var4.bind(var5)(var3, var1);
            _fun0006_ip = 140; continue _fun0006;
 118:
            var3 = var2.WHITE_500;
            var2 = 0.06;
            var1 = var4.bind(var5)(var3, var2);
 140:
            return var1;
        }
    };
    var8 = var9.bind(var10)(var8);
    var _closure1_slot9 = var8;
    var8 = var7[var5];
    var10 = var6.bind(var1)(var8);
    var9 = var10.experimental_createToken;
    var8 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var5 = var1.theme;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 2;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.isThemeDark;
            var1 = var1.bind(var3)(var5);
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 3;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.unsafe_rawColors;
            if(var1) { _fun0007_ip = 80; continue _fun0007 }
 72:
            var1 = var2.PRIMARY_100;
            _fun0007_ip = 86; continue _fun0007;
 80:
            var1 = var2.PRIMARY_600;
 86:
            return var1;
        }
    };
    var8 = var9.bind(var10)(var8);
    var _closure1_slot10 = var8;
    var8 = var7[var5];
    var10 = var6.bind(var1)(var8);
    var9 = var10.experimental_createToken;
    var8 = function(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var5 = var1.theme;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 2;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.isThemeDark;
            var3 = var1.bind(var3)(var5);
            var1 = '#666b73';
            if(var3) { _fun0008_ip = 84; continue _fun0008 }
 53:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 3;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.unsafe_rawColors;
            var1 = var2.PRIMARY_300;
 84:
            return var1;
        }
    };
    var8 = var9.bind(var10)(var8);
    var _closure1_slot11 = var8;
    var8 = var7[var5];
    var10 = var6.bind(var1)(var8);
    var9 = var10.experimental_createToken;
    var8 = function(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var5 = var1.theme;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 2;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.isThemeDark;
            var1 = var1.bind(var3)(var5);
            if(var1) { _fun0009_ip = 118; continue _fun0009 }
 47:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 4;
            var1 = var7[var1];
            var6 = var3.bind(var4)(var1);
            var5 = var6.hexWithOpacity;
            var3 = _closure1_slot1;
            var1 = 3;
            var1 = var7[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.unsafe_rawColors;
            var3 = var1.PRIMARY_200;
            var1 = 0.3;
            var1 = var5.bind(var6)(var3, var1);
            _fun0009_ip = 149; continue _fun0009;
 118:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 3;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.unsafe_rawColors;
            var1 = var2.PRIMARY_600;
 149:
            return var1;
        }
    };
    var8 = var9.bind(var10)(var8);
    var _closure1_slot12 = var8;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createNativeStyleProperties;
    var5 = function(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var2 = arg1;
            var1 = {};
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var8 = 3;
            var6 = var4[var8];
            var7 = undefined;
            var6 = var5.bind(var7)(var6);
            var6 = var6.unsafe_rawColors;
            var6 = var6.BRAND_500;
            var1['acceptBlurpleLabelBackgroundColor'] = var6;
            var6 = var4[var8];
            var6 = var5.bind(var7)(var6);
            var6 = var6.colors;
            var6 = var6.REDESIGN_BUTTON_POSITIVE_BACKGROUND;
            var1['acceptLabelGreenBackgroundColor'] = var6;
            var4 = var4[var8];
            var4 = var5.bind(var7)(var4);
            var4 = var4.unsafe_rawColors;
            var4 = var4.WHITE_500;
            var1['acceptLabelGreenColor'] = var4;
            var4 = null;
            var5 = var2;
            if(!(var4 == var2)) { _fun0010_ip = 133; continue _fun0010 }
 105:
            var9 = _closure1_slot1;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var9.bind(var7)(var6);
            var6 = var6.colors;
            var5 = var6.BACKGROUND_SECONDARY;
 133:
            var1['backgroundColor'] = var5;
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var9 = var5[var8];
            var9 = var6.bind(var7)(var9);
            var9 = var9.colors;
            var9 = var9.TEXT_NORMAL;
            var1['bodyTextColor'] = var9;
            var9 = var5[var8];
            var9 = var6.bind(var7)(var9);
            var9 = var9.unsafe_rawColors;
            var9 = var9.RED_400;
            var1['clearLabelRedBackgroundColor'] = var9;
            var9 = var5[var8];
            var9 = var6.bind(var7)(var9);
            var9 = var9.unsafe_rawColors;
            var9 = var9.WHITE_500;
            var1['clearLabelRedColor'] = var9;
            var9 = var5[var8];
            var9 = var6.bind(var7)(var9);
            var9 = var9.colors;
            var9 = var9.HEADER_SECONDARY;
            var1['headerColor'] = var9;
            var9 = var5[var8];
            var9 = var6.bind(var7)(var9);
            var9 = var9.colors;
            var9 = var9.HEADER_SECONDARY;
            var1['subtitleColor'] = var9;
            var5 = var5[var8];
            var5 = var6.bind(var7)(var5);
            var5 = var5.colors;
            var5 = var5.HEADER_PRIMARY;
            var1['titleColor'] = var5;
            var5 = _closure1_slot4;
            var1['acceptLabelActiveBackgroundColor'] = var5;
            var5 = _closure1_slot5;
            var1['acceptLabelDisabledBackgroundColor'] = var5;
            var5 = _closure1_slot6;
            var1['acceptLabelDisabledBorderColor'] = var5;
            var5 = _closure1_slot7;
            var1['acceptLabelDisabledTextColor'] = var5;
            var5 = _closure1_slot8;
            var1['acceptLabelDisabledColor'] = var5;
            var5 = _closure1_slot9;
            var1['borderColor'] = var5;
            var5 = _closure1_slot10;
            var1['resolvingGradientEnd'] = var5;
            var5 = _closure1_slot11;
            var1['resolvingGradientStart'] = var5;
            if(!(var4 == var2)) { _fun0010_ip = 375; continue _fun0010 }
 371:
            var2 = _closure1_slot12;
 375:
            var1['thumbnailBackgroundColor'] = var2;
            return var1;
        }
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot13 = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/native/renderer/row_data/embeds/getEmbedThemeColors.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function useEmbedThemeColors(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure1_slot14;
            var2 = _closure2_slot0;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useEmbedThemeColors'] = var2;
    return var1;
})();