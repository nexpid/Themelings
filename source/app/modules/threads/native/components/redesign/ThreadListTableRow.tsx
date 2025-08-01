// app/modules/threads/native/components/redesign/ThreadListTableRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function ThreadListTableRow(arg1) {
        var2 = arg1;
        var14 = var2.thread;
        var _closure2_slot0 = var14;
        var8 = var2.onPress;
        var _closure2_slot1 = var8;
        var6 = var2.start;
        var5 = var2.end;
        var2 = _closure1_slot6;
        var4 = undefined;
        var13 = var2.bind(var4)();
        var7 = _closure1_slot2;
        var3 = var7.useMemo;
        var2 = new Array(2);
        var2[0] = var8;
        var8 = var14.id;
        var2[1] = var8;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure2_slot1;
                var1 = null;
                if(!(var1 == var2)) { _fun0001_ip = 17; continue _fun0001 }
 13:
                var1 = undefined;
                return var1;
 17:
                var1 = function() {
                    var3 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var2 = var1.id;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                return var1;
            }
        };
        var7 = var3.bind(var7)(var1, var2);
        var3 = _closure1_slot5;
        var12 = _closure1_slot0;
        var15 = _closure1_slot1;
        var1 = 5;
        var1 = var15[var1];
        var1 = var12.bind(var4)(var1);
        var2 = var1.TableRow;
        var1 = {};
        var8 = var14.name;
        var1['label'] = var8;
        var10 = _closure1_slot5;
        var9 = _closure1_slot3;
        var8 = {};
        var13 = var13.subLabel;
        var8['style'] = var13;
        var13 = _closure1_slot5;
        var11 = 6;
        var11 = var15[var11];
        var11 = var12.bind(var4)(var11);
        var12 = var11.ThreadSubtext;
        var11 = {};
        var11['thread'] = var14;
        var11 = var13.bind(var4)(var12, var11);
        var8['children'] = var11;
        var8 = var10.bind(var4)(var9, var8);
        var1['subLabel'] = var8;
        var1['onPress'] = var7;
        var1['start'] = var6;
        var1['end'] = var5;
        var5 = true;
        var1['arrow'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
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
    var7 = var4.bind(var1)(var7);
    var _closure1_slot2 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var8 = var6[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'maxWidth': '100%', 'marginTop': 2};
    var4['subLabel'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot6 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var3 = var2.threadId;
            var _closure2_slot0 = var3;
            var6 = var2.onPress;
            var8 = var2.start;
            var7 = var2.end;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 7;
            var3 = var5[var3];
            var5 = undefined;
            var9 = var4.bind(var5)(var3);
            var4 = var9.useStateFromStores;
            var10 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var10;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var4.bind(var9)(var3, var1);
            var1 = null;
            var3 = var1 == var9;
            if(var3) { _fun0002_ip = 127; continue _fun0002 }
 94:
            var4 = _closure1_slot5;
            var3 = _closure1_slot7;
            var2 = {};
            var2['thread'] = var9;
            var2['start'] = var8;
            var2['end'] = var7;
            var2['onPress'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 127:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/threads/native/components/redesign/ThreadListTableRow.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();