// app/uikit-native/EmptyState.tsx
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
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot2 = var7;
    var4 = var4.Image;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flex': 1, 'justifyContent': 'center', 'alignItems': 'center', 'paddingHorizontal': 36, 'paddingBottom': 80};
    var10 = 4;
    var11 = var6[var10];
    var10 = metroImportDefault;
    var10 = var10.bind(var1)(var11);
    var10 = var10.colors;
    var10 = var10.BG_BASE_SECONDARY;
    var9['backgroundColor'] = var10;
    var4['container'] = var9;
    var9 = {'flex': 1, 'maxWidth': 300, 'maxHeight': 200};
    var4['emptyImage'] = var9;
    var9 = {'marginTop': 20, 'textTransform': 'uppercase'};
    var4['emptyTitle'] = var9;
    var9 = {'textAlign': 'center', 'marginTop': 8};
    var4['emptyBody'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/EmptyState.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function EmptyState(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = _closure1_slot6;
            var4 = undefined;
            var12 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var11 = 5;
            var2 = var2[var11];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useThemeContext;
            var2 = var2.bind(var3)();
            var10 = var2.theme;
            var2 = var1.Illustration;
            var7 = null;
            if(!(var7 == var2)) { _fun0001_ip = 167; continue _fun0001 }
 63:
            var5 = _closure1_slot4;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = 'contain';
            var2['resizeMode'] = var6;
            var9 = _closure1_slot0;
            var6 = _closure1_slot1;
            var6 = var6[var11];
            var9 = var9.bind(var4)(var6);
            var6 = var9.isThemeLight;
            var6 = var6.bind(var9)(var10);
            if(var6) { _fun0001_ip = 121; continue _fun0001 }
 113:
            var6 = var1.darkSource;
            _fun0001_ip = 127; continue _fun0001;
 121:
            var6 = var1.lightSource;
 127:
            var2['source'] = var6;
            var9 = var12.emptyImage;
            var6 = new Array(2);
            var6[0] = var9;
            var9 = var1.imageStyle;
            var6[1] = var9;
            var2['style'] = var6;
            var9 = var5.bind(var4)(var3, var2);
            _fun0001_ip = 222; continue _fun0001;
 167:
            var5 = _closure1_slot4;
            var3 = var1.Illustration;
            var2 = {};
            var6 = 'contain';
            var2['resizeMode'] = var6;
            var10 = var12.emptyImage;
            var6 = new Array(2);
            var6[0] = var10;
            var10 = var1.imageStyle;
            var6[1] = var10;
            var2['style'] = var6;
            var9 = var5.bind(var4)(var3, var2);
 222:
            var10 = var1.style;
            var11 = var1.body;
            var16 = var1.title;
            var6 = var1.children;
            var13 = var1.bodyStyle;
            var18 = var1.titleStyle;
            var3 = _closure1_slot5;
            var2 = _closure1_slot2;
            var1 = {};
            var14 = var12.container;
            var5 = new Array(2);
            var5[0] = var14;
            var5[1] = var10;
            var1['style'] = var5;
            var5 = true;
            var1['accessible'] = var5;
            var5 = new Array(4);
            var5[0] = var9;
            var10 = var7 != var16;
            var9 = null;
            if(!var10) { _fun0001_ip = 384; continue _fun0001 }
 309:
            var15 = _closure1_slot4;
            var14 = _closure1_slot0;
            var17 = _closure1_slot1;
            var10 = 6;
            var10 = var17[var10];
            var10 = var14.bind(var4)(var10);
            var14 = var10.Text;
            var10 = {'variant': 'heading-lg/semibold', 'color': 'header-primary', 'maxFontSizeMultiplier': 2};
            var19 = var12.emptyTitle;
            var17 = new Array(2);
            var17[0] = var19;
            var17[1] = var18;
            var10['style'] = var17;
            var10['children'] = var16;
            var9 = var15.bind(var4)(var14, var10);
 384:
            var5[1] = var9;
            var9 = var7 != var11;
            var7 = null;
            if(!var9) { _fun0001_ip = 472; continue _fun0001 }
 397:
            var10 = _closure1_slot4;
            var9 = _closure1_slot0;
            var14 = _closure1_slot1;
            var8 = 6;
            var8 = var14[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.Text;
            var8 = {'variant': 'text-md/medium', 'color': 'text-muted', 'maxFontSizeMultiplier': 2};
            var14 = var12.emptyBody;
            var12 = new Array(2);
            var12[0] = var14;
            var12[1] = var13;
            var8['style'] = var12;
            var8['children'] = var11;
            var7 = var10.bind(var4)(var9, var8);
 472:
            var5[2] = var7;
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();