// app/modules/conversations/native/useConversationInteractionHandler.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var5 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var5;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var6 = var5[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot2 = var4;
    var4 = 2;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/conversations/native/useConversationInteractionHandler.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useConversationInteractionHandler(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useCallback;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot0;
                var2 = null;
                if(!(var2 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 1;
                var3 = var3[var2];
                var2 = undefined;
                var5 = var4.bind(var2)(var3);
                var4 = var5.itemInteracted;
                var1 = _closure2_slot0;
                var3 = var1.id;
                var2 = var1.type;
                var1 = arg1;
                var1 = var4.bind(var5)(var3, var2, var1);
case 2:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useConversationInteractionHandler'] = var2;
    return var1;
})();