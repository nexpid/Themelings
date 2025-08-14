// app/modules/messages/native/renderer/rows/Separator.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var10 = metroImportDefault;
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.RowType;
    var _closure1_slot2 = var7;
    var4 = var4.SeparatorType;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createNativeStyleProperties;
    var4 = {};
    var9 = 2;
    var11 = var6[var9];
    var11 = var10.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_MUTED;
    var4['dayColor'] = var11;
    var11 = var6[var9];
    var11 = var10.bind(var1)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.RED_400;
    var4['unreadColor'] = var11;
    var9 = var6[var9];
    var9 = var10.bind(var1)(var9);
    var9 = var9.colors;
    var9 = var9.TEXT_BRAND;
    var4['summaryColor'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/rows/Separator.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function generateSeparatorRowData(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var5 = var1.rowType;
            var2 = var1.changeType;
            var7 = _closure1_slot4;
            var3 = undefined;
            var4 = arg2;
            var4 = var7.bind(var3)(var4);
            var7 = _closure1_slot3;
            var7 = var7.DAY;
            if(!(var7 !== var5)) { _fun0001_ip = 225; continue _fun0001 }
 49:
            var7 = _closure1_slot3;
            var7 = var7.UNREAD;
            if(!(var7 !== var5)) { _fun0001_ip = 179; continue _fun0001 }
 63:
            var7 = _closure1_slot3;
            var7 = var7.SUMMARY;
            if(!(var7 !== var5)) { _fun0001_ip = 110; continue _fun0001 }
 77:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var7 = 3;
            var7 = var9[var7];
            var8 = var8.bind(var3)(var7);
            var7 = var8.assertNever;
            var7 = var7.bind(var8)(var5);
            return var3;
 110:
            var8 = var1.summary;
            var7 = var1.isBeforeContent;
            var3 = {};
            var9 = _closure1_slot2;
            var9 = var9.SEPARATOR;
            var3['type'] = var9;
            var3['id'] = var5;
            var9 = var4.summaryColor;
            var3['color'] = var9;
            var9 = var8.topic;
            var3['text'] = var9;
            var3['summary'] = var8;
            var3['isBeforeContent'] = var7;
            var3['changeType'] = var2;
            return var3;
 179:
            var7 = var1.text;
            var3 = {};
            var8 = _closure1_slot2;
            var8 = var8.SEPARATOR;
            var3['type'] = var8;
            var3['id'] = var5;
            var8 = var4.unreadColor;
            var3['color'] = var8;
            var3['changeType'] = var2;
            var3['text'] = var7;
            return var3;
 225:
            var3 = var1.text;
            var1 = {};
            var6 = _closure1_slot2;
            var6 = var6.SEPARATOR;
            var1['type'] = var6;
            var1['id'] = var5;
            var4 = var4.dayColor;
            var1['color'] = var4;
            var1['text'] = var3;
            var1['changeType'] = var2;
            return var1;
        }
    };
    var3['generateSeparatorRowData'] = var2;
    return var1;
})();