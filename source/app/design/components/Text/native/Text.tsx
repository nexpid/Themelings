// app/design/components/Text/native/Text.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var8;
    var4 = global;
    var9 = var4.Object;
    var6 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var5);
    var1 = 0;
    var6 = var8[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var9 = var5.bind(var1)(var6);
    var5 = 1;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var11 = var5.Text;
    var _closure1_slot3 = var11;
    var5 = 2;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var6 = var5.Fonts;
    var5 = 3;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot4 = var5;
    var5 = 4;
    var5 = var8[var5];
    var10 = var14.bind(var1)(var5);
    var5 = var10.createAnimatedComponent;
    var5 = var5.bind(var10)(var11);
    var _closure1_slot5 = var5;
    var11 = var4.Object;
    var10 = var11.fromEntries;
    var13 = var4.Object;
    var12 = var13.keys;
    var5 = 5;
    var5 = var8[var5];
    var5 = var14.bind(var1)(var5);
    var5 = var5.colors;
    var13 = var12.bind(var13)(var5);
    var12 = var13.map;
    var5 = function(arg1) {
        var2 = arg1;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 6;
        var3 = var3[var1];
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var1 = var3.kebabCase;
        var3 = var1.bind(var3)(var2);
        var1 = new Array(2);
        var1[0] = var3;
        var1[1] = var2;
        return var1;
    };
    var5 = var12.bind(var13)(var5);
    var5 = var10.bind(var11)(var5);
    var _closure1_slot6 = var5;
    var5 = {};
    var10 = var6.DISPLAY_NORMAL;
    var5[400] = var10;
    var10 = var6.DISPLAY_MEDIUM;
    var5[500] = var10;
    var10 = var6.DISPLAY_SEMIBOLD;
    var5[600] = var10;
    var10 = var6.DISPLAY_BOLD;
    var5[700] = var10;
    var10 = var6.DISPLAY_EXTRABOLD;
    var5[800] = var10;
    var _closure1_slot7 = var5;
    var5 = {};
    var10 = var6.PRIMARY_NORMAL;
    var5[400] = var10;
    var10 = var6.PRIMARY_MEDIUM;
    var5[500] = var10;
    var10 = var6.PRIMARY_SEMIBOLD;
    var5[600] = var10;
    var10 = var6.PRIMARY_BOLD;
    var5[700] = var10;
    var _closure1_slot8 = var5;
    var5 = {};
    var10 = var6.GINTO_NORD_EXTRA_BOLD;
    var5[800] = var10;
    var _closure1_slot9 = var5;
    var5 = {};
    var10 = var6.CODE_NORMAL;
    var5[400] = var10;
    var6 = var6.CODE_BOLD;
    var5[700] = var6;
    var _closure1_slot10 = var5;
    var6 = var4.Object;
    var5 = var6.fromEntries;
    var10 = 7;
    var10 = var8[var10];
    var10 = var7.bind(var1)(var10);
    var12 = var10.TextVariantsFlat;
    var11 = var12.map;
    var10 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var3 = var5.name;
            var2 = 'code';
            var1 = null;
            if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var5.name;
            var2 = new Array(2);
            var2[0] = var3;
            var3 = {};
            var4 = var5.size;
            var3['fontSize'] = var4;
            var4 = var5.lineHeight;
            var3['lineHeight'] = var4;
            var6 = var5.uppercase;
            var4 = 'none';
            if(!var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = 'uppercase';
case 4:
            var3['textTransform'] = var4;
            var7 = var5.fontStack;
            var6 = var5.weight;
            var4 = var6.toString;
            var6 = var4.bind(var6)();
            var4 = {};
            var9 = _closure1_slot9;
            var4['headline'] = var9;
            var9 = _closure1_slot7;
            var4['display'] = var9;
            var9 = _closure1_slot8;
            var4['primary'] = var9;
            var8 = _closure1_slot10;
            var4['code'] = var8;
            var4 = var4[var7];
            var4 = var4[var6];
            var3['fontFamily'] = var4;
            var4 = false;
            var3['includeFontPadding'] = var4;
            var4 = 'letterSpacing';
            var6 = var4 in var5;
            var4 = undefined;
            if(!var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.letterSpacing;
            var5 = 10;
            var4 = var6 / var5;
case 6:
            var3['letterSpacing'] = var4;
            var2[1] = var3;
            var1 = var2;
case 2:
            return var1;
        }
    };
    var11 = var11.bind(var12)(var10);
    var10 = var11.filter;
    var4 = var4.Boolean;
    var4 = var10.bind(var11)(var4);
    var5 = var5.bind(var6)(var4);
    var _closure1_slot11 = var5;
    var4 = 8;
    var4 = var8[var4];
    var10 = var7.bind(var1)(var4);
    var6 = var10.createStyles;
    var4 = function(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var7 = arg1;
            var1 = {};
            var2 = {};
            var3 = undefined;
            var5 = 'none';
            var4 = undefined;
            if(!(var5 !== var7)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 5;
            var6 = var9[var6];
            var6 = var8.bind(var3)(var6);
            var6 = var6.colors;
            var5 = _closure1_slot6;
            var5 = var5[var7];
            var4 = var6[var5];
case 8:
            var2['color'] = var4;
            var4 = arg2;
            var3 = undefined;
            if(!var4) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var3 = ['tabular-nums'];
case 10:
            var2['fontVariant'] = var3;
            var1['text'] = var2;
            return var1;
        }
    };
    var4 = var6.bind(var10)(var4);
    var _closure1_slot12 = var4;
    var6 = var9.forwardRef;
    var4 = function(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var9 = arg1;
            var13 = var9.variant;
            var14 = var9.color;
            var10 = var9.style;
            var8 = var9.lineClamp;
            var7 = var9.ellipsizeMode;
            var12 = var9.tabularNumbers;
            var4 = undefined;
            if(!(var12 === var4)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var12 = false;
case 12:
            var1 = var9.animated;
            if(!(var1 === var4)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var1 = false;
case 14:
            var2 = var9.experimental_useNativeText;
            if(!(var2 === var4)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var2 = false;
case 16:
            var5 = {'variant': 0, 'color': 0, 'style': 0, 'lineClamp': 0, 'ellipsizeMode': 0, 'tabularNumbers': 0, 'animated': 0, 'experimental_useNativeText': 0};
            var6 = null;
            var18 = var5;
            var17 = null;
            var3 = silentSetPrototypeOf(var18, var17);
            var18 = {};
            var17 = var9;
            var16 = var5;
            var5 = copyDataProperties(var18, var17, var16);
            var11 = _closure1_slot12;
            var15 = var6 != var14;
            var3 = 'text-default';
            if(!var15) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var3 = var14;
case 18:
            var11 = var11.bind(var4)(var3, var12);
            if(var2) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            if(var1) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var3 = _closure1_slot3;
            _fun0003_ip = 24; continue _fun0003;
case 22:
            var3 = _closure1_slot5;
case 24:
            _fun0003_ip = 25; continue _fun0003;
case 20:
            var2 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 9;
            var1 = var12[var1];
            var1 = var2.bind(var4)(var1);
            var3 = var1.NativeText;
case 25:
            var2 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 10;
            var1 = var12[var1];
            var12 = var2.bind(var4)(var1);
            var2 = var12.useTypographyVariantRemap;
            var1 = false;
            var12 = var2.bind(var12)(var13, var1);
            var2 = _closure1_slot4;
            var1 = {};
            var9 = _closure1_slot11;
            var12 = var9[var12];
            var9 = new Array(3);
            var9[0] = var12;
            var11 = var11.text;
            var9[1] = var11;
            var9[2] = var10;
            var1['style'] = var9;
            var1['numberOfLines'] = var8;
            var8 = var6 != var7;
            var6 = 'tail';
            if(!var8) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var6 = var7;
case 26:
            var1['ellipsizeMode'] = var6;
            var6 = true;
            var1['allowFontScaling'] = var6;
            var6 = arg2;
            var1['ref'] = var6;
            var18 = var1;
            var17 = var5;
            var5 = copyDataProperties(var18, var17);
            var1 = var2.bind(var4)(var3, var1);
            return var1;
        }
    };
    var4 = var6.bind(var9)(var4);
    var _closure1_slot13 = var4;
    var6 = var9.forwardRef;
    var2 = function(arg1, arg2) {
        var5 = arg1;
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 10;
        var2 = var4[var2];
        var4 = undefined;
        var7 = var3.bind(var4)(var2);
        var6 = var7.useTypographyVariantRemap;
        var3 = var5.variant;
        var2 = true;
        var6 = var6.bind(var7)(var3, var2);
        var3 = _closure1_slot4;
        var2 = _closure1_slot13;
        var1 = {};
        var7 = arg2;
        var1['ref'] = var7;
        var9 = var1;
        var8 = var5;
        var5 = copyDataProperties(var9, var8);
        var7 = 'header';
        var5 = 'accessibilityRole';
        var1[4] = var7;
        var5 = 'variant';
        var1[4] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var6.bind(var9)(var2);
    var6 = 11;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'design/components/Text/native/Text.tsx';
    var6 = var7.bind(var8)(var6);
    var3['TextStyleSheet'] = var5;
    var3['Text'] = var4;
    var3['Heading'] = var2;
    return var1;
})();