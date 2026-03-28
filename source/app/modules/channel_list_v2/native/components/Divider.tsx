// app/modules/channel_list_v2/native/components/Divider.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
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
    var4 = var4.View;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = {};
            var2 = {'height': 1, 'backgroundColor': null, 'marginTop': 8, 'marginBottom': 8};
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var4 = 4;
            var5 = var5[var4];
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var5 = var4.colors;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.BORDER_MUTED;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var4 = var5.BORDER_SUBTLE;
case 4:
            var2['backgroundColor'] = var4;
            if(var3) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var3 = {};
            _fun0001_ip = 7; continue _fun0001;
case 5:
            var4 = {};
            var5 = 16;
            var4['marginHorizontal'] = var5;
            var3 = var4;
case 7:
            var8 = var2;
            var7 = var3;
            var3 = copyDataProperties(var8, var7);
            var1['divider'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel_list_v2/native/components/Divider.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function Divider() {
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var2 = 5;
        var2 = var4[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = 'Divider';
        var3 = var3.bind(var4)(var2);
        var2 = _closure1_slot4;
        var5 = var2.bind(var4)(var3);
        var3 = _closure1_slot3;
        var2 = _closure1_slot2;
        var1 = {};
        var5 = var5.divider;
        var1['style'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    var2 = 8;
    var3['DIVIDER_MARGIN_TOP'] = var2;
    var3['DIVIDER_MARGIN_BOTTOM'] = var2;
    var2 = 17;
    var3['DIVIDER_HEIGHT'] = var2;
    var2 = 16;
    var3['DIVIDER_MARGIN_HORIZONTAL'] = var2;
    return var1;
})();