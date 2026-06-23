// app/modules/message_request/getRestrictedHiddenMediaCount.tsx
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
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/message_request/getRestrictedHiddenMediaCount.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getRestrictedHiddenMediaCount(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 0;
            var2 = var5[var2];
            var5 = undefined;
            var3 = var3.bind(var5)(var2);
            var2 = var3.maybeCreateSingleForwardForMessage;
            var2 = var2.bind(var3)(var4);
            var3 = null;
            if(!(var3 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var2.messageSnapshot;
            var4 = var2.message;
case 2:
            var2 = var4.attachments;
            var3 = var2.length;
            var2 = var4.embeds;
            var2 = var2.length;
            var2 = var3 + var2;
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 1;
            var1 = var6[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.getMessageStickers;
            var1 = var1.bind(var3)(var4);
            var1 = var1.length;
            var1 = var2 + var1;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();