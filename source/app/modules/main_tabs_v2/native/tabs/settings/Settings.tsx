// app/modules/main_tabs_v2/native/tabs/settings/Settings.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var11;
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
    var _closure1_slot2 = var4;
    var12 = 1;
    var4 = var6[var12];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var12;
    var4['containerOuter'] = var9;
    var9 = {};
    var10 = 4;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_BASE_TERTIARY;
    var9['backgroundColor'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['paddingHorizontal'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.md;
    var9['borderRadius'] = var13;
    var9['flex'] = var12;
    var4['containerOuterTablet'] = var9;
    var9 = {};
    var9['flex'] = var12;
    var4['container'] = var9;
    var9 = {'borderRadius': null, 'overflow': 'hidden', 'flex': 1};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.md;
    var9['borderRadius'] = var10;
    var4['containerTablet'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/settings/Settings.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function Settings() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = _closure1_slot0;
            var10 = _closure1_slot1;
            var2 = 5;
            var2 = var10[var2];
            var4 = undefined;
            var2 = var6.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var11 = var2.top;
            var _closure2_slot0 = var11;
            var2 = 6;
            var2 = var10[var2];
            var2 = var6.bind(var4)(var2);
            var8 = var2.bind(var4)();
            var _closure2_slot1 = var8;
            var2 = _closure1_slot5;
            var9 = var2.bind(var4)();
            var _closure2_slot2 = var9;
            var5 = _closure1_slot2;
            var3 = var5.useMemo;
            var2 = new Array(3);
            var2[0] = var9;
            var2[1] = var8;
            var2[2] = var11;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var2 = _closure2_slot2;
                    if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = var2.containerOuter;
                    _fun0002_ip = 4; continue _fun0002;
case 2:
                    var3 = var2.containerOuterTablet;
                    var2 = new Array(2);
                    var2[0] = var3;
                    var3 = {};
                    var4 = _closure2_slot0;
                    var3['paddingTop'] = var4;
                    var2[1] = var3;
                    var1 = var2;
case 4:
                    return var1;
                }
            };
            var5 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot4;
            var2 = _closure1_slot3;
            var1 = {};
            var1['style'] = var5;
            var5 = 7;
            var5 = var10[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.View;
            var5 = {};
            if(var8) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var8 = var9.container;
            _fun0001_ip = 7; continue _fun0001;
case 5:
            var8 = var9.containerTablet;
case 7:
            var5['style'] = var8;
            var9 = _closure1_slot4;
            var8 = _closure1_slot0;
            var10 = _closure1_slot1;
            var7 = 8;
            var7 = var10[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7 = var9.bind(var4)(var8, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();