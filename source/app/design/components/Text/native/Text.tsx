// app/design/components/Text/native/Text.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var15 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var7;
    var4 = global;
    var9 = var4.Object;
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
    var12 = var5.Text;
    var _closure1_slot3 = var12;
    var9 = var5.StyleSheet;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var10 = var5.Fonts;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot4 = var5;
    var5 = 4;
    var5 = var7[var5];
    var11 = var15.bind(var1)(var5);
    var5 = var11.createAnimatedComponent;
    var5 = var5.bind(var11)(var12);
    var _closure1_slot5 = var5;
    var12 = var4.Object;
    var11 = var12.fromEntries;
    var14 = var4.Object;
    var13 = var14.keys;
    var5 = 5;
    var5 = var7[var5];
    var5 = var15.bind(var1)(var5);
    var5 = var5.colors;
    var14 = var13.bind(var14)(var5);
    var13 = var14.map;
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
    var5 = var13.bind(var14)(var5);
    var5 = var11.bind(var12)(var5);
    var _closure1_slot6 = var5;
    var5 = {};
    var11 = var10.DISPLAY_NORMAL;
    var5[400] = var11;
    var11 = var10.DISPLAY_MEDIUM;
    var5[500] = var11;
    var11 = var10.DISPLAY_SEMIBOLD;
    var5[600] = var11;
    var11 = var10.DISPLAY_BOLD;
    var5[700] = var11;
    var11 = var10.DISPLAY_EXTRABOLD;
    var5[800] = var11;
    var _closure1_slot7 = var5;
    var5 = {};
    var11 = var10.PRIMARY_NORMAL;
    var5[400] = var11;
    var11 = var10.PRIMARY_MEDIUM;
    var5[500] = var11;
    var11 = var10.PRIMARY_SEMIBOLD;
    var5[600] = var11;
    var11 = var10.PRIMARY_BOLD;
    var5[700] = var11;
    var _closure1_slot8 = var5;
    var5 = {};
    var10 = var10.GINTO_NORD_EXTRA_BOLD;
    var5[800] = var10;
    var _closure1_slot9 = var5;
    var5 = var9.create;
    var11 = var4.Object;
    var10 = var11.fromEntries;
    var12 = 7;
    var12 = var7[var12];
    var12 = var6.bind(var1)(var12);
    var14 = var12.TextVariantsFlat;
    var13 = var14.map;
    var12 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var3 = var5.name;
            var8 = null;
            var2 = 'code';
            var1 = null;
            if(!(var2 !== var3)) { _fun0001_ip = 206; continue _fun0001 }
 23:
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
            if(!var6) { _fun0001_ip = 76; continue _fun0001 }
 72:
            var4 = 'uppercase';
 76:
            var3['textTransform'] = var4;
            var7 = var5.fontStack;
            var6 = var5.weight;
            var4 = var6.toString;
            var6 = var4.bind(var6)();
            var4 = {};
            var10 = _closure1_slot9;
            var4['headline'] = var10;
            var10 = _closure1_slot7;
            var4['display'] = var10;
            var9 = _closure1_slot8;
            var4['primary'] = var9;
            var4 = var4[var7];
            var4 = var4[var6];
            var3['fontFamily'] = var4;
            var4 = false;
            var3['includeFontPadding'] = var4;
            var4 = 'letterSpacing';
            var6 = var4 in var5;
            var4 = undefined;
            if(!var6) { _fun0001_ip = 194; continue _fun0001 }
 166:
            var6 = var5.letterSpacing;
            var6 = var8 != var6;
            var4 = undefined;
            if(!var6) { _fun0001_ip = 194; continue _fun0001 }
 181:
            var6 = var5.letterSpacing;
            var5 = 10;
            var4 = var6 / var5;
 194:
            var3['letterSpacing'] = var4;
            var2[1] = var3;
            var1 = var2;
 206:
            return var1;
        }
    };
    var13 = var13.bind(var14)(var12);
    var12 = var13.filter;
    var4 = var4.Boolean;
    var4 = var12.bind(var13)(var4);
    var4 = var10.bind(var11)(var4);
    var4 = var5.bind(var9)(var4);
    var _closure1_slot10 = var4;
    var5 = 8;
    var5 = var7[var5];
    var10 = var6.bind(var1)(var5);
    var9 = var10.createStyles;
    var5 = function(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var7 = arg1;
            var1 = {};
            var2 = {};
            var3 = undefined;
            var5 = 'none';
            var4 = undefined;
            if(!(var5 !== var7)) { _fun0002_ip = 108; continue _fun0002 }
 19:
            var5 = 'always-white';
            if(!(var5 !== var7)) { _fun0002_ip = 71; continue _fun0002 }
 29:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 5;
            var6 = var9[var6];
            var6 = var8.bind(var3)(var6);
            var6 = var6.colors;
            var5 = _closure1_slot6;
            var5 = var5[var7];
            var5 = var6[var5];
            _fun0002_ip = 105; continue _fun0002;
 71:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 5;
            var6 = var8[var6];
            var6 = var7.bind(var3)(var6);
            var6 = var6.unsafe_rawColors;
            var5 = var6.WHITE_500;
 105:
            var4 = var5;
 108:
            var2['color'] = var4;
            var4 = arg2;
            var3 = undefined;
            if(!var4) { _fun0002_ip = 130; continue _fun0002 }
 120:
            var3 = ['tabular-nums'];
 130:
            var2['fontVariant'] = var3;
            var1['text'] = var2;
            return var1;
        }
    };
    var5 = var9.bind(var10)(var5);
    var _closure1_slot11 = var5;
    var5 = var8.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var9 = arg1;
            var12 = var9.variant;
            var14 = var9.color;
            var10 = var9.style;
            var8 = var9.lineClamp;
            var7 = var9.ellipsizeMode;
            var13 = var9.tabularNumbers;
            var4 = undefined;
            if(!(var13 === var4)) { _fun0003_ip = 44; continue _fun0003 }
 42:
            var13 = false;
 44:
            var1 = var9.animated;
            if(!(var1 === var4)) { _fun0003_ip = 56; continue _fun0003 }
 54:
            var1 = false;
 56:
            var2 = var9.experimental_useNativeText;
            if(!(var2 === var4)) { _fun0003_ip = 68; continue _fun0003 }
 66:
            var2 = false;
 68:
            var5 = {'variant': 0, 'color': 0, 'style': 0, 'lineClamp': 0, 'ellipsizeMode': 0, 'tabularNumbers': 0, 'animated': 0, 'experimental_useNativeText': 0};
            var6 = null;
            var18 = var5;
            var17 = null;
            var3 = silentSetPrototypeOf(var18, var17);
            var18 = {};
            var17 = var9;
            var16 = var5;
            var5 = copyDataProperties(var18, var17, var16);
            var11 = _closure1_slot11;
            var15 = var6 != var14;
            var3 = 'text-normal';
            if(!var15) { _fun0003_ip = 128; continue _fun0003 }
 125:
            var3 = var14;
 128:
            var11 = var11.bind(var4)(var3, var13);
            if(var2) { _fun0003_ip = 152; continue _fun0003 }
 137:
            if(var1) { _fun0003_ip = 146; continue _fun0003 }
 140:
            var3 = _closure1_slot3;
            _fun0003_ip = 150; continue _fun0003;
 146:
            var3 = _closure1_slot5;
 150:
            _fun0003_ip = 178; continue _fun0003;
 152:
            var2 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 9;
            var1 = var13[var1];
            var1 = var2.bind(var4)(var1);
            var3 = var1.NativeText;
 178:
            var2 = _closure1_slot4;
            var1 = {};
            var9 = _closure1_slot10;
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
            if(!var8) { _fun0003_ip = 236; continue _fun0003 }
 233:
            var6 = var7;
 236:
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
    var2 = var5.bind(var8)(var2);
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'design/components/Text/native/Text.tsx';
    var5 = var6.bind(var7)(var5);
    var3['TextStyleSheet'] = var4;
    var3['Text'] = var2;
    return var1;
})();