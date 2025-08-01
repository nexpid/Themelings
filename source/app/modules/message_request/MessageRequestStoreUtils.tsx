// app/modules/message_request/MessageRequestStoreUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var4 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var1 = 1;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/message_request/MessageRequestStoreUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function sortChannelIds(arg1) {
        var3 = arg1;
        var2 = var3.sort;
        var1 = function(arg1, arg2) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 0;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.compare;
            var1 = arg1;
            var2 = var1.lastMessageId;
            var1 = arg2;
            var1 = var1.lastMessageId;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.reverse;
        var1 = var1.bind(var2)();
        return var1;
    };
    var3['sortChannelIds'] = var2;
    return var1;
})();