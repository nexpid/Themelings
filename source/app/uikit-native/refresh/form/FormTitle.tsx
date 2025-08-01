// app/uikit-native/refresh/form/FormTitle.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var7 = require;
        var13 = metroImportDefault;
        var3 = exports;
        var8 = dependencyMap;
        var _closure1_slot0 = var7;
        var _closure1_slot1 = var8;
        var1 = global;
        var6 = var1.Object;
        var4 = var6.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var4.bind(var6)(var3, var1, var2);
        var1 = 0;
        var4 = var8[var1];
        var2 = metroImportAll;
        var1 = undefined;
        var2 = var2.bind(var1)(var4);
        var2 = 1;
        var2 = var8[var2];
        var2 = var7.bind(var1)(var2);
        var4 = var2.View;
        var _closure1_slot2 = var4;
        var2 = var2.Platform;
        var2 = 2;
        var2 = var8[var2];
        var2 = var7.bind(var1)(var2);
        var12 = var2.Fonts;
        var2 = 3;
        var2 = var8[var2];
        var2 = var7.bind(var1)(var2);
        var4 = var2.jsx;
        var _closure1_slot3 = var4;
        var2 = var2.jsxs;
        var _closure1_slot4 = var2;
        var2 = 4;
        var4 = var8[var2];
        var6 = var7.bind(var1)(var4);
        var4 = var6.isAndroid;
        var6 = var4.bind(var6)();
        var4 = 58;
        if(!var6) { _fun0001_ip = 175; continue _fun0001 }
 172:
        var4 = 48;
 175:
        var2 = var8[var2];
        var6 = var7.bind(var1)(var2);
        var2 = var6.isAndroid;
        var6 = var2.bind(var6)();
        var2 = 48;
        if(!var6) { _fun0001_ip = 202; continue _fun0001 }
 199:
        var2 = 56;
 202:
        var6 = 5;
        var6 = var8[var6];
        var10 = var7.bind(var1)(var6);
        var9 = var10.createStyles;
        var6 = {};
        var14 = 16;
        var11 = {'flexDirection': 'row', 'justifyContent': 'space-between', 'paddingTop': 16, 'paddingBottom': 16};
        var6['titleWrapper'] = var11;
        var11 = {};
        var11['paddingHorizontal'] = var14;
        var6['horizontalPadding'] = var11;
        var11 = {};
        var14 = 26;
        var11['paddingTop'] = var14;
        var6['thinTitle'] = var11;
        var11 = {};
        var12 = var12.PRIMARY_SEMIBOLD;
        var11['fontFamily'] = var12;
        var12 = 13;
        var11['fontSize'] = var12;
        var12 = 6;
        var14 = var8[var12];
        var14 = var13.bind(var1)(var14);
        var14 = var14.colors;
        var14 = var14.HEADER_SECONDARY;
        var11['color'] = var14;
        var6['titleText'] = var11;
        var11 = {};
        var12 = var8[var12];
        var12 = var13.bind(var1)(var12);
        var12 = var12.unsafe_rawColors;
        var12 = var12.RED_400;
        var11['color'] = var12;
        var6['error'] = var11;
        var6 = var9.bind(var10)(var6);
        var _closure1_slot5 = var6;
        var6 = 8;
        var6 = var8[var6];
        var8 = var7.bind(var1)(var6);
        var7 = var8.fileFinishedImporting;
        var6 = 'uikit-native/refresh/form/FormTitle.tsx';
        var6 = var7.bind(var8)(var6);
        var5 = function FormTitle(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg1;
                var11 = var1.title;
                var6 = var1.icon;
                var9 = var1.numberOfLines;
                var10 = var1.uppercaseTitle;
                var4 = undefined;
                if(!(var10 === var4)) { _fun0002_ip = 33; continue _fun0002 }
 31:
                var10 = true;
 33:
                var16 = var1.thinTitle;
                if(!(var16 === var4)) { _fun0002_ip = 45; continue _fun0002 }
 43:
                var16 = false;
 45:
                var13 = var1.error;
                if(!(var13 === var4)) { _fun0002_ip = 56; continue _fun0002 }
 54:
                var13 = false;
 56:
                var12 = var1.inset;
                if(!(var12 === var4)) { _fun0002_ip = 68; continue _fun0002 }
 66:
                var12 = false;
 68:
                var8 = var1.viewStyle;
                var15 = var1.textStyle;
                var1 = _closure1_slot5;
                var14 = var1.bind(var4)();
                var3 = _closure1_slot4;
                var2 = _closure1_slot2;
                var1 = {};
                var17 = var14.titleWrapper;
                var7 = new Array(4);
                var7[0] = var17;
                if(!var16) { _fun0002_ip = 124; continue _fun0002 }
 118:
                var16 = var14.thinTitle;
 124:
                var7[1] = var16;
                var12 = !var12;
                if(!var12) { _fun0002_ip = 140; continue _fun0002 }
 134:
                var12 = var14.horizontalPadding;
 140:
                var7[2] = var12;
                var7[3] = var8;
                var1['style'] = var7;
                var8 = _closure1_slot3;
                var7 = _closure1_slot0;
                var12 = _closure1_slot1;
                var5 = 7;
                var5 = var12[var5];
                var5 = var7.bind(var4)(var5);
                var7 = var5.LegacyText;
                var5 = {};
                var16 = var14.titleText;
                var12 = new Array(3);
                var12[0] = var16;
                var12[1] = var15;
                if(!var13) { _fun0002_ip = 210; continue _fun0002 }
 205:
                var13 = var14.error;
 210:
                var12[2] = var13;
                var5['style'] = var12;
                var5['numberOfLines'] = var9;
                var9 = 'header';
                var5['accessibilityRole'] = var9;
                var9 = var11;
                if(!var10) { _fun0002_ip = 247; continue _fun0002 }
 237:
                var10 = var11.toUpperCase;
                var9 = var10.bind(var11)();
 247:
                var5['children'] = var9;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var3['default'] = var5;
        var3['FORM_TITLE_HEIGHT'] = var4;
        var3['THIN_FORM_TITLE_HEIGHT'] = var2;
        return var1;
    }
})();