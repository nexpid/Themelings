// app/modules/messages/native/renderer/rows/Separator.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var5 = var7[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.RowType;
    var _closure1_slot3 = var5;
    var4 = var4.SeparatorType;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var8 = var6.bind(var1)(var4);
    var5 = var8.createNativeStyleProperties;
    var4 = {};
    var9 = 4;
    var11 = var7[var9];
    var11 = var10.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_MUTED;
    var4['dayColor'] = var11;
    var11 = var7[var9];
    var11 = var10.bind(var1)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.RED_400;
    var4['unreadColor'] = var11;
    var9 = var7[var9];
    var9 = var10.bind(var1)(var9);
    var9 = var9.colors;
    var9 = var9.TEXT_BRAND;
    var4['summaryColor'] = var9;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/native/renderer/rows/Separator.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function Separator(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.row;
            var7 = var2.rowType;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 5;
            var3 = var4[var3];
            var4 = undefined;
            var5 = var5.bind(var4)(var3);
            var3 = var5.useMessageRendererTheme;
            var5 = var3.bind(var5)();
            var3 = _closure1_slot6;
            var6 = var3.bind(var4)(var5);
            var3 = _closure1_slot4;
            var3 = var3.DAY;
            if(!(var3 !== var7)) { _fun0001_ip = 289; continue _fun0001 }
 76:
            var3 = _closure1_slot4;
            var3 = var3.UNREAD;
            if(!(var3 !== var7)) { _fun0001_ip = 226; continue _fun0001 }
 93:
            var3 = _closure1_slot4;
            var3 = var3.SUMMARY;
            if(!(var3 !== var7)) { _fun0001_ip = 140; continue _fun0001 }
 107:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 7;
            var3 = var8[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.assertNever;
            var3 = var3.bind(var5)(var7);
            return var4;
 140:
            var10 = var2.summary;
            var9 = var2.isBeforeContent;
            var8 = _closure1_slot5;
            var5 = _closure1_slot1;
            var11 = _closure1_slot2;
            var3 = 6;
            var3 = var11[var3];
            var3 = var5.bind(var4)(var3);
            var5 = var3.Separator;
            var3 = {};
            var3['id'] = var7;
            var11 = var6.summaryColor;
            var3['color'] = var11;
            var11 = var10.topic;
            var3['text'] = var11;
            var3['summary'] = var10;
            var3['isBeforeContent'] = var9;
            var3 = var8.bind(var4)(var5, var3);
            return var3;
 226:
            var9 = var2.text;
            var8 = _closure1_slot5;
            var5 = _closure1_slot1;
            var10 = _closure1_slot2;
            var3 = 6;
            var3 = var10[var3];
            var3 = var5.bind(var4)(var3);
            var5 = var3.Separator;
            var3 = {};
            var3['id'] = var7;
            var10 = var6.unreadColor;
            var3['color'] = var10;
            var3['text'] = var9;
            var3 = var8.bind(var4)(var5, var3);
            return var3;
 289:
            var5 = var2.text;
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 6;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Separator;
            var1 = {};
            var1['id'] = var7;
            var6 = var6.dayColor;
            var1['color'] = var6;
            var1['text'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var5;
    var3['resolveBaseColors'] = var4;
    var2 = function generateSeparatorRowData(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var5 = var1.rowType;
            var2 = var1.changeType;
            var7 = _closure1_slot6;
            var3 = undefined;
            var4 = arg2;
            var4 = var7.bind(var3)(var4);
            var7 = _closure1_slot4;
            var7 = var7.DAY;
            if(!(var7 !== var5)) { _fun0002_ip = 225; continue _fun0002 }
 49:
            var7 = _closure1_slot4;
            var7 = var7.UNREAD;
            if(!(var7 !== var5)) { _fun0002_ip = 179; continue _fun0002 }
 63:
            var7 = _closure1_slot4;
            var7 = var7.SUMMARY;
            if(!(var7 !== var5)) { _fun0002_ip = 110; continue _fun0002 }
 77:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 7;
            var7 = var9[var7];
            var8 = var8.bind(var3)(var7);
            var7 = var8.assertNever;
            var7 = var7.bind(var8)(var5);
            return var3;
 110:
            var8 = var1.summary;
            var7 = var1.isBeforeContent;
            var3 = {};
            var9 = _closure1_slot3;
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
            var8 = _closure1_slot3;
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
            var6 = _closure1_slot3;
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