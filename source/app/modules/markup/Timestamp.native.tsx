// app/modules/markup/Timestamp.native.tsx
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
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 3;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_NORMAL;
    var9['color'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_MODIFIER_ACCENT;
    var9['backgroundColor'] = var10;
    var4['timestamp'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/markup/Timestamp.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function Timestamp(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var3 = var1.node;
            var _closure2_slot0 = var3;
            var7 = var1.style;
            var2 = _closure1_slot4;
            var4 = undefined;
            var8 = var2.bind(var4)();
            var5 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 4;
            var2 = var9[var2];
            var2 = var5.bind(var4)(var2);
            var5 = var2.bind(var4)(var3);
            var3 = _closure1_slot3;
            var2 = _closure1_slot0;
            var1 = 5;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.LegacyText;
            var1 = {};
            var8 = var8.timestamp;
            var9 = null;
            if(!(var9 != var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var8;
case 2:
            var1['style'] = var7;
            var6 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.open;
                var2 = {};
                var5 = 'TIMESTAMP';
                var2['key'] = var5;
                var5 = _closure2_slot0;
                var5 = var5.full;
                var2['content'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1['onPress'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();