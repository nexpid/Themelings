// app/modules/app_launcher/native/options/boolean/AppLauncherBooleanOption.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
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
    var9 = {'flexDirection': 'row', 'width': '100%', 'backgroundColor': null, 'borderRadius': null, 'alignItems': 'center'};
    var10 = 4;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BG_SURFACE_RAISED;
    var9['backgroundColor'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.lg;
    var9['borderRadius'] = var10;
    var4['container'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/options/boolean/AppLauncherBooleanOption.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AppLauncherBooleanOption(arg1) {
        var1 = arg1;
        var10 = var1.style;
        var7 = var1.option;
        var2 = var1.initialValue;
        var _closure2_slot0 = var2;
        var2 = var1.onPress;
        var _closure2_slot1 = var2;
        var8 = var1.hasError;
        var2 = _closure1_slot5;
        var4 = undefined;
        var9 = var2.bind(var4)();
        var6 = _closure1_slot3;
        var3 = var6.useState;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure2_slot0;
                var4 = var3.type;
                var3 = 'text';
                var1 = var3 === var4;
case 2:
                if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var2 = _closure2_slot0;
                var3 = var2.text;
                var2 = 'true';
                var1 = var2 === var3;
case 4:
                return var1;
            }
        };
        var6 = var3.bind(var6)(var2);
        var3 = _closure1_slot2;
        var2 = 2;
        var3 = var3.bind(var4)(var6, var2);
        var2 = 0;
        var6 = var3[var2];
        var _closure2_slot2 = var6;
        var2 = 1;
        var2 = var3[var2];
        var _closure2_slot3 = var2;
        var3 = _closure1_slot4;
        var2 = _closure1_slot0;
        var11 = _closure1_slot1;
        var1 = 5;
        var1 = var11[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.FormCheckboxRow;
        var1 = {'start': true, 'end': true};
        var11 = var9.container;
        var9 = new Array(2);
        var9[0] = var11;
        var9[1] = var10;
        var1['style'] = var9;
        var1['hasError'] = var8;
        var7 = var7.displayName;
        var1['label'] = var7;
        var1['selected'] = var6;
        var5 = function onPress() {
            var5 = _closure2_slot3;
            var2 = _closure2_slot2;
            var4 = !var2;
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var3 = _closure2_slot1;
            var2 = !var2;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1['onPress'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();