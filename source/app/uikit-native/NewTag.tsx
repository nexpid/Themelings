// app/uikit-native/NewTag.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot3 = var7;
    var4 = var4.Platform;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.HorizontalGradient;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'height': 'auto', 'backgroundColor': null, 'justifyContent': 'center', 'alignItems': 'center', 'paddingHorizontal': 4, 'marginBottom': 2};
    var10 = 5;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.RED_400;
    var9['backgroundColor'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.round;
    var9['borderRadius'] = var10;
    var4['tagContainer'] = var9;
    var9 = {};
    var10 = 'uppercase';
    var9['textTransform'] = var10;
    var4['tagText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/NewTag.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function NewTag(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var13 = var4.containerStyle;
            var10 = var4.textStyle;
            var16 = var4.variant;
            var5 = undefined;
            if(!(var16 === var5)) { _fun0001_ip = 32; continue _fun0001 }
 26:
            var16 = 'heading-sm/semibold';
 32:
            var15 = var4.color;
            if(!(var15 === var5)) { _fun0001_ip = 47; continue _fun0001 }
 41:
            var15 = 'always-white';
 47:
            var1 = var4.gradient;
            if(!(var1 === var5)) { _fun0001_ip = 59; continue _fun0001 }
 57:
            var1 = false;
 59:
            var9 = var4.borderRadius;
            if(!(var9 === var5)) { _fun0001_ip = 102; continue _fun0001 }
 68:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 5;
            var2 = var6[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.radii;
            var9 = var2.sm;
 102:
            var6 = var4.colors;
            if(!(var6 === var5)) { _fun0001_ip = 180; continue _fun0001 }
 111:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 5;
            var2 = var8[var3];
            var2 = var7.bind(var5)(var2);
            var2 = var2.unsafe_rawColors;
            var11 = var2.PREMIUM_TIER_2_PURPLE;
            var2 = new Array(2);
            var2[0] = var11;
            var3 = var8[var3];
            var3 = var7.bind(var5)(var3);
            var3 = var3.unsafe_rawColors;
            var3 = var3.PREMIUM_TIER_2_PINK;
            var2[1] = var3;
            var6 = var2;
 180:
            var3 = {'containerStyle': 0, 'textStyle': 0, 'variant': 0, 'color': 0, 'gradient': 0, 'borderRadius': 0, 'colors': 0};
            var22 = null;
            var23 = var3;
            var2 = silentSetPrototypeOf(var23, var22);
            var23 = {};
            var22 = var4;
            var21 = var3;
            var12 = copyDataProperties(var23, var22, var21);
            var2 = _closure1_slot6;
            var11 = var2.bind(var5)();
            var4 = _closure1_slot5;
            if(var1) { _fun0001_ip = 413; continue _fun0001 }
 236:
            var2 = _closure1_slot3;
            var1 = {};
            var7 = var11.tagContainer;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var13;
            var1['style'] = var3;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var3 = 7;
            var3 = var20[var3];
            var3 = var19.bind(var5)(var3);
            var7 = var3.Text;
            var3 = {};
            var3['variant'] = var16;
            var3['color'] = var15;
            var23 = var3;
            var22 = var12;
            var14 = copyDataProperties(var23, var22);
            var14 = var11.tagText;
            var17 = new Array(2);
            var17[0] = var14;
            var17[1] = var10;
            var14 = 'style';
            var3[var14] = var17;
            var14 = 8;
            var17 = var20[var14];
            var17 = var19.bind(var5)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var14 = var20[var14];
            var14 = var19.bind(var5)(var14);
            var14 = var14.t;
            var14 = var14.y2b7CA;
            var17 = var17.bind(var18)(var14);
            var14 = 'children';
            var3[var14] = var17;
            var3 = var4.bind(var5)(var7, var3);
            var1['children'] = var3;
            var1 = var4.bind(var5)(var2, var1);
            _fun0001_ip = 679; continue _fun0001;
 413:
            var17 = _closure1_slot1;
            var14 = _closure1_slot2;
            var2 = 6;
            var2 = var14[var2];
            var3 = var17.bind(var5)(var2);
            var2 = {};
            var7 = {};
            var7['borderRadius'] = var9;
            var9 = 5;
            var9 = var14[var9];
            var9 = var17.bind(var5)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_4;
            var7['marginLeft'] = var9;
            var2['style'] = var7;
            var7 = _closure1_slot4;
            var9 = var7.START;
            var2['start'] = var9;
            var7 = var7.END;
            var2['end'] = var7;
            var2['colors'] = var6;
            var7 = _closure1_slot3;
            var6 = {};
            var17 = var11.tagContainer;
            var9 = new Array(2);
            var9[0] = var17;
            var9[1] = var13;
            var6['style'] = var9;
            var13 = _closure1_slot0;
            var8 = 7;
            var8 = var14[var8];
            var8 = var13.bind(var5)(var8);
            var9 = var8.Text;
            var8 = {};
            var8['variant'] = var16;
            var8['color'] = var15;
            var23 = var8;
            var22 = var12;
            var12 = copyDataProperties(var23, var22);
            var12 = var11.tagText;
            var11 = new Array(2);
            var11[0] = var12;
            var11[1] = var10;
            var10 = 'style';
            var8[var10] = var11;
            var10 = 8;
            var11 = var14[var10];
            var11 = var13.bind(var5)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var5)(var10);
            var10 = var10.t;
            var10 = var10.y2b7CA;
            var11 = var11.bind(var12)(var10);
            var10 = 'children';
            var8[var10] = var11;
            var8 = var4.bind(var5)(var9, var8);
            var6['children'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 679:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();