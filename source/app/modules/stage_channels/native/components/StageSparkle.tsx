// app/modules/stage_channels/native/components/StageSparkle.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function StageSparkleInner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.style;
            var13 = var1.IconComponent;
            var14 = var1.icon;
            var4 = undefined;
            if(!(var14 === var4)) { _fun0001_ip = 48; continue _fun0001 }
 25:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var14 = var2.bind(var4)(var1);
 48:
            var1 = _closure1_slot6;
            var9 = var1.bind(var4)();
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var8 = var9.container;
            var5 = new Array(2);
            var5[0] = var8;
            var5[1] = var7;
            var1['style'] = var5;
            var8 = _closure1_slot4;
            var7 = _closure1_slot3;
            var5 = {};
            var10 = var9.iconContainer;
            var5['style'] = var10;
            var10 = null;
            if(!(var10 == var13)) { _fun0001_ip = 164; continue _fun0001 }
 116:
            var12 = _closure1_slot4;
            var11 = _closure1_slot1;
            var15 = _closure1_slot2;
            var10 = 6;
            var10 = var15[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['source'] = var14;
            var14 = var9.iconStyle;
            var10['style'] = var14;
            var10 = var12.bind(var4)(var11, var10);
            _fun0001_ip = 219; continue _fun0001;
 164:
            var12 = _closure1_slot4;
            var11 = {};
            var14 = 'lg';
            var11['size'] = var14;
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var14 = 4;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.colors;
            var14 = var14.HEADER_PRIMARY;
            var11['color'] = var14;
            var10 = var12.bind(var4)(var13, var11);
 219:
            var5['children'] = var10;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot4;
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 6;
            var6 = var11[var6];
            var7 = var10.bind(var4)(var6);
            var6 = {};
            var9 = var9.sparkles;
            var6['style'] = var9;
            var9 = 7;
            var9 = var11[var9];
            var9 = var10.bind(var4)(var9);
            var6['source'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot7 = var1;
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
    var4 = var4.View;
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
    var9 = {'width': 88, 'height': 88, 'alignItems': 'center', 'justifyContent': 'center'};
    var4['container'] = var9;
    var9 = {'backgroundColor': null, 'borderRadius': 28, 'height': 56, 'width': 56, 'alignItems': 'center', 'justifyContent': 'center'};
    var10 = 4;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_TERTIARY;
    var9['backgroundColor'] = var12;
    var4['iconContainer'] = var9;
    var9 = {'tintColor': null, 'height': 32, 'width': 32};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.HEADER_PRIMARY;
    var9['tintColor'] = var10;
    var4['iconStyle'] = var9;
    var9 = {'position': 'absolute', 'top': 0};
    var4['sparkles'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/native/components/StageSparkle.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function StageSparkle(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var7 = var4.theme;
            var1 = null;
            var3 = Object.create(var1);
            var2 = 0;
            var3['theme'] = var2;
            var12 = {};
            var11 = var4;
            var10 = var3;
            var9 = copyDataProperties(var12, var11, var10);
            if(!(var1 == var7)) { _fun0002_ip = 70; continue _fun0002 }
 37:
            var4 = _closure1_slot4;
            var3 = _closure1_slot7;
            var2 = {};
            var12 = var2;
            var11 = var9;
            var1 = copyDataProperties(var12, var11);
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            _fun0002_ip = 148; continue _fun0002;
 70:
            var5 = _closure1_slot4;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 8;
            var2 = var4[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var3 = var2.ThemeContextProvider;
            var2 = {};
            var2['theme'] = var7;
            var8 = _closure1_slot4;
            var7 = _closure1_slot7;
            var6 = {};
            var12 = var6;
            var11 = var9;
            var9 = copyDataProperties(var12, var11);
            var6 = var8.bind(var4)(var7, var6);
            var2['children'] = var6;
            var1 = var5.bind(var4)(var3, var2);
 148:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();