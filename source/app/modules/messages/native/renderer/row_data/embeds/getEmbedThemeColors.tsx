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
case 0:
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
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2.PRIMARY_400;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var1 = var2.PRIMARY_500;
case 4:
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
case 0:
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
            if(var1) { _fun0002_ip = 5; continue _fun0002 }
case 6:
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
            _fun0002_ip = 7; continue _fun0002;
case 5:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 3;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.unsafe_rawColors;
            var1 = var2.PRIMARY_600;
case 7:
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
case 0:
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
            if(var1) { _fun0003_ip = 2; continue _fun0003 }
case 3:
            var1 = var2.PRIMARY_400;
            _fun0003_ip = 4; continue _fun0003;
case 2:
            var1 = var2.PRIMARY_500;
case 4:
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
case 0:
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
            if(var1) { _fun0004_ip = 2; continue _fun0004 }
case 3:
            var1 = var2.PRIMARY_400;
            _fun0004_ip = 4; continue _fun0004;
case 2:
            var1 = var2.PRIMARY_500;
case 4:
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
case 0:
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
            if(var1) { _fun0005_ip = 2; continue _fun0005 }
case 3:
            var1 = var2.PRIMARY_100;
            _fun0005_ip = 4; continue _fun0005;
case 2:
            var1 = var2.PRIMARY_500;
case 4:
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
case 0:
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
            if(var1) { _fun0006_ip = 5; continue _fun0006 }
case 8:
            var3 = var2.PRIMARY_860;
            var1 = 0.08;
            var1 = var4.bind(var5)(var3, var1);
            _fun0006_ip = 9; continue _fun0006;
case 5:
            var3 = var2.WHITE;
            var2 = 0.06;
            var1 = var4.bind(var5)(var3, var2);
case 9:
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
case 0:
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
            if(var1) { _fun0007_ip = 2; continue _fun0007 }
case 3:
            var1 = var2.PRIMARY_100;
            _fun0007_ip = 4; continue _fun0007;
case 2:
            var1 = var2.PRIMARY_600;
case 4:
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
case 0:
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
            if(var3) { _fun0008_ip = 10; continue _fun0008 }
case 11:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 3;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.unsafe_rawColors;
            var1 = var2.PRIMARY_300;
case 10:
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
case 0:
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
            if(var1) { _fun0009_ip = 5; continue _fun0009 }
case 6:
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
            _fun0009_ip = 7; continue _fun0009;
case 5:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 3;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.unsafe_rawColors;
            var1 = var2.PRIMARY_600;
case 7:
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
case 0:
            var4 = arg1;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var18 = 3;
            var3 = var1[var18];
            var17 = undefined;
            var3 = var2.bind(var17)(var3);
            var3 = var3.colors;
            var16 = var3.BACKGROUND_BRAND;
            var3 = var1[var18];
            var3 = var2.bind(var17)(var3);
            var3 = var3.colors;
            var15 = var3.CONTROL_CONNECTED_BACKGROUND_DEFAULT;
            var1 = var1[var18];
            var1 = var2.bind(var17)(var1);
            var1 = var1.unsafe_rawColors;
            var14 = var1.WHITE;
            var6 = null;
            var13 = var4;
            if(!(var6 == var4)) { _fun0010_ip = 12; continue _fun0010 }
case 13:
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var18];
            var1 = var2.bind(var17)(var1);
            var1 = var1.colors;
            var13 = var1.MOBILE_EMBED_BACKGROUND_DEFAULT;
case 12:
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var3 = var1[var18];
            var3 = var2.bind(var17)(var3);
            var3 = var3.colors;
            var12 = var3.TEXT_DEFAULT;
            var3 = var1[var18];
            var3 = var2.bind(var17)(var3);
            var3 = var3.unsafe_rawColors;
            var11 = var3.RED_400;
            var3 = var1[var18];
            var3 = var2.bind(var17)(var3);
            var3 = var3.unsafe_rawColors;
            var10 = var3.WHITE;
            var3 = var1[var18];
            var3 = var2.bind(var17)(var3);
            var3 = var3.colors;
            var9 = var3.TEXT_SUBTLE;
            var3 = var1[var18];
            var3 = var2.bind(var17)(var3);
            var3 = var3.colors;
            var8 = var3.TEXT_SUBTLE;
            var3 = var1[var18];
            var3 = var2.bind(var17)(var3);
            var3 = var3.colors;
            var7 = var3.MOBILE_TEXT_HEADING_PRIMARY;
            var3 = var1[var18];
            var3 = var2.bind(var17)(var3);
            var3 = var3.colors;
            var3 = var3.TEXT_FEEDBACK_POSITIVE;
            var1 = var1[var18];
            var1 = var2.bind(var17)(var1);
            var1 = var1.colors;
            var2 = var1.TEXT_MUTED;
            var1 = {};
            var1['acceptBlurpleLabelBackgroundColor'] = var16;
            var1['acceptLabelGreenBackgroundColor'] = var15;
            var1['acceptLabelGreenColor'] = var14;
            var1['backgroundColor'] = var13;
            var1['bodyTextColor'] = var12;
            var1['clearLabelRedBackgroundColor'] = var11;
            var1['clearLabelRedColor'] = var10;
            var1['headerColor'] = var9;
            var1['subtitleColor'] = var8;
            var1['titleColor'] = var7;
            var7 = _closure1_slot4;
            var1['acceptLabelActiveBackgroundColor'] = var7;
            var7 = _closure1_slot5;
            var1['acceptLabelDisabledBackgroundColor'] = var7;
            var7 = _closure1_slot6;
            var1['acceptLabelDisabledBorderColor'] = var7;
            var7 = _closure1_slot7;
            var1['acceptLabelDisabledTextColor'] = var7;
            var7 = _closure1_slot8;
            var1['acceptLabelDisabledColor'] = var7;
            var7 = _closure1_slot9;
            var1['borderColor'] = var7;
            var7 = _closure1_slot10;
            var1['resolvingGradientEnd'] = var7;
            var7 = _closure1_slot11;
            var1['resolvingGradientStart'] = var7;
            if(!(var6 == var4)) { _fun0010_ip = 14; continue _fun0010 }
case 15:
            var4 = _closure1_slot12;
case 14:
            var1['thumbnailBackgroundColor'] = var4;
            var1['voiceActiveColor'] = var3;
            var1['voiceMutedColor'] = var2;
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