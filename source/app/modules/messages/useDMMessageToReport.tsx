// app/modules/messages/useDMMessageToReport.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 3;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/useDMMessageToReport.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useDMMessageToReport(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var9 = arg2;
            var6 = arg3;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 0;
            var2 = var4[var2];
            var11 = undefined;
            var3 = var3.bind(var11)(var2);
            var2 = var3.useIsRelationshipTypeSpamReportable;
            var2 = var2.bind(var3)(var9);
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var2;
case 2:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 1;
            var1 = var4[var1];
            var7 = var3.bind(var11)(var1);
            var2 = var7.useLongestChannelMessageBeforeReply;
            var1 = var5.id;
            var1 = var2.bind(var7)(var1, var9);
            var2 = 2;
            var2 = var4[var2];
            var4 = var3.bind(var11)(var2);
            var3 = var4.useMessageRequestPreview;
            var2 = {};
            var2['enabled'] = var6;
            var2 = var3.bind(var4)(var5, var2);
            var7 = var2.message;
            var4 = var2.loaded;
            var3 = var2.error;
            var5 = null;
            var2 = var1;
            if(!(var5 == var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var5 == var7;
            var8 = undefined;
            if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var7.author;
            var10 = var5 == var1;
            var8 = undefined;
            if(var10) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var8 = var1.id;
case 6:
            var1 = null;
            if(!(var8 === var9)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var1 = var7;
case 9:
            var2 = var1;
case 4:
            var1 = {};
            var1['message'] = var2;
            var1['isReportable'] = var6;
            var2 = var5 != var2;
            if(var2) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var2 = var4;
case 11:
            if(var2) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var2 = var3;
case 13:
            var1['isLoaded'] = var2;
            return var1;
        }
    };
    var3['useDMMessageToReport'] = var2;
    return var1;
})();