// app/modules/app_launcher/native/base_components/EntityBorderAppIcon.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.radii;
    var4 = var4.sm;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1, arg2) {
        var3 = arg1;
        var4 = arg2;
        var1 = {};
        var2 = {};
        var2['width'] = var3;
        var2['height'] = var3;
        var2['borderRadius'] = var4;
        var1['appIcon'] = var2;
        var2 = {'borderWidth': 1, 'borderColor': null, 'overflow': 'hidden'};
        var3 = 1;
        var7 = _closure1_slot0;
        var6 = _closure1_slot1;
        var5 = 2;
        var6 = var6[var5];
        var5 = undefined;
        var5 = var7.bind(var5)(var6);
        var5 = var5.colors;
        var5 = var5.BORDER_SUBTLE;
        var2['borderColor'] = var5;
        var3 = var4 + var3;
        var2['borderRadius'] = var3;
        var1['entityWrapper'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/base_components/EntityBorderAppIcon.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function EntityBorderAppIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.iconSource;
            var10 = var1.wrapperStyle;
            var9 = var1.iconStyle;
            var3 = var1.iconSize;
            var4 = undefined;
            if(!(var3 === var4)) { _fun0001_ip = 36; continue _fun0001 }
 33:
            var3 = 32;
 36:
            var2 = var1.iconBorderRadius;
            if(!(var2 === var4)) { _fun0001_ip = 53; continue _fun0001 }
 46:
            var2 = _closure1_slot4;
 53:
            var1 = _closure1_slot5;
            var8 = var1.bind(var4)(var3, var2);
            var3 = _closure1_slot3;
            var2 = _closure1_slot2;
            var1 = {};
            var11 = var8.entityWrapper;
            var6 = new Array(2);
            var6[0] = var11;
            var6[1] = var10;
            var1['style'] = var6;
            var6 = _closure1_slot0;
            var10 = _closure1_slot1;
            var5 = 4;
            var5 = var10[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var10 = var8.appIcon;
            var8 = new Array(2);
            var8[0] = var10;
            var8[1] = var9;
            var5['style'] = var8;
            var5['source'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();