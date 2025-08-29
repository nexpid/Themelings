// app/modules/conversations/native/useConversationChannelNavigator.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/conversations/native/useConversationChannelNavigator.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useConversationChannelNavigator() {
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 1;
        var4 = var4[var1];
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var1 = var4.useConversationContext;
        var1 = var1.bind(var4)();
        var7 = var1.keyMessage;
        var _closure2_slot0 = var7;
        var6 = var1.conversation;
        var _closure2_slot1 = var6;
        var1 = {};
        var5 = _closure1_slot2;
        var4 = var5.useCallback;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = _closure2_slot0;
                var4 = null;
                var1 = var4 != var1;
                if(!var1) { _fun0001_ip = 24; continue _fun0001 }
 16:
                var3 = _closure2_slot1;
                var1 = var4 != var3;
 24:
                if(!var1) { _fun0001_ip = 115; continue _fun0001 }
 27:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 2;
                var1 = var5[var1];
                var3 = undefined;
                var6 = var4.bind(var3)(var1);
                var1 = var6.closeConversation;
                var1 = var1.bind(var6)();
                var1 = 3;
                var1 = var5[var1];
                var5 = var4.bind(var3)(var1);
                var4 = var5.navigateToMessage;
                var1 = _closure2_slot0;
                var3 = var1.channel_id;
                var2 = _closure2_slot1;
                var2 = var2.guild;
                var2 = var2.id;
                var1 = var1.id;
                var1 = var4.bind(var5)(var3, var2, var1);
 115:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        var1['navigateToKeyMessage'] = var2;
        return var1;
    };
    var3['useConversationChannelNavigator'] = var2;
    return var1;
})();