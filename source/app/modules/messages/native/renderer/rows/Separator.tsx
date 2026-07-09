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
    var11 = var11.colors;
    var11 = var11.MOBILE_CHAT_NEW_MESSAGE_TEXT;
    var4['unreadTextColor'] = var11;
    var11 = var6[var9];
    var11 = var10.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.MOBILE_CHAT_NEW_MESSAGE_BORDER;
    var4['unreadBorderColor'] = var11;
    var9 = var6[var9];
    var9 = var10.bind(var1)(var9);
    var9 = var9.colors;
    var9 = var9.TEXT_BRAND;
    var4['summaryColor'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/rows/Separator.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function generateSeparatorRowData(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.rowType;
            var2 = var1.changeType;
            var4 = _closure1_slot4;
            var8 = undefined;
            var3 = arg2;
            var4 = var4.bind(var8)(var3);
            var3 = _closure1_slot3;
            var3 = var3.DAY;
            if(!(var3 !== var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot3;
            var3 = var3.UNREAD;
            if(!(var3 !== var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot3;
            var3 = var3.SUMMARY;
            if(!(var3 !== var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 4;
            var3 = var9[var3];
            var7 = var7.bind(var8)(var3);
            var3 = var7.assertNever;
            var3 = var3.bind(var7)(var5);
            return var8;
case 6:
            var9 = var1.summary;
            var7 = var1.isBeforeContent;
            var3 = {};
            var10 = _closure1_slot2;
            var10 = var10.SEPARATOR;
            var3['type'] = var10;
            var3['id'] = var5;
            var10 = var4.summaryColor;
            var3['color'] = var10;
            var10 = var9.topic;
            var3['text'] = var10;
            var3['summary'] = var9;
            var3['isBeforeContent'] = var7;
            var3['changeType'] = var2;
            return var3;
case 4:
            var7 = var1.text;
            var3 = {};
            var9 = _closure1_slot2;
            var9 = var9.SEPARATOR;
            var3['type'] = var9;
            var3['id'] = var5;
            var9 = var4.unreadTextColor;
            var3['color'] = var9;
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var9 = 3;
            var9 = var11[var9];
            var11 = var10.bind(var8)(var9);
            var10 = var11.isMobileVisualRefreshEnabled;
            var9 = 'Separator';
            var9 = var10.bind(var11)(var9);
            var8 = undefined;
            if(!var9) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = var4.unreadBorderColor;
case 8:
            var3['borderColor'] = var8;
            var3['changeType'] = var2;
            var3['text'] = var7;
            return var3;
case 2:
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