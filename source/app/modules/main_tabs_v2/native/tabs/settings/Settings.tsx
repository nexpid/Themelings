// app/modules/main_tabs_v2/native/tabs/settings/Settings.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot2 = var4;
    var13 = 1;
    var4 = var6[var13];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot4 = var8;
    var4 = 3;
    var4 = var6[var4];
    var10 = var5.bind(var1)(var4);
    var9 = var10.createStyles;
    var4 = {};
    var11 = {};
    var11['flex'] = var13;
    var4['containerOuter'] = var11;
    var11 = {};
    var12 = 4;
    var14 = var6[var12];
    var14 = var7.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOWEST;
    var11['backgroundColor'] = var14;
    var14 = var6[var12];
    var14 = var7.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var11['paddingHorizontal'] = var14;
    var14 = var6[var12];
    var14 = var7.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.md;
    var11['borderRadius'] = var14;
    var11['flex'] = var13;
    var4['containerOuterTablet'] = var11;
    var11 = {};
    var11['flex'] = var13;
    var4['container'] = var11;
    var11 = {'borderRadius': null, 'overflow': 'hidden', 'flex': 1};
    var12 = var6[var12];
    var12 = var7.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.md;
    var11['borderRadius'] = var12;
    var4['containerTablet'] = var11;
    var4 = var9.bind(var10)(var4);
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var7 = var7.bind(var1)(var4);
    var4 = {};
    var4 = var8.bind(var1)(var7, var4);
    var _closure1_slot6 = var4;
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
            var2 = 6;
            var2 = var10[var2];
            var4 = undefined;
            var2 = var6.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var11 = var2.top;
            var _closure2_slot0 = var11;
            var2 = 7;
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
            var5 = 8;
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
            var7 = _closure1_slot6;
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