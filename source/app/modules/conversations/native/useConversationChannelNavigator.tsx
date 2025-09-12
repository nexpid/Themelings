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
    var2 = function useConversationChannelNavigator(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var7 = _closure1_slot1;
        var1 = 1;
        var8 = var7[var1];
        var4 = undefined;
        var9 = var5.bind(var4)(var8);
        var8 = var9.useConversationContext;
        var8 = var8.bind(var9)();
        var9 = var8.keyMessage;
        var _closure2_slot1 = var9;
        var8 = var8.conversation;
        var _closure2_slot2 = var8;
        var1 = var7[var1];
        var4 = var5.bind(var4)(var1);
        var1 = var4.useConversationRenderContext;
        var1 = var1.bind(var4)();
        var7 = var1.trackItemInteraction;
        var _closure2_slot3 = var7;
        var1 = {};
        var5 = _closure1_slot2;
        var4 = var5.useCallback;
        var3 = new Array(4);
        var3[0] = var9;
        var3[1] = var8;
        var3[2] = var7;
        var3[3] = var6;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = _closure2_slot1;
                var3 = null;
                var1 = var3 != var1;
                if(!var1) { _fun0001_ip = 24; continue _fun0001 }
 16:
                var4 = _closure2_slot2;
                var1 = var3 != var4;
 24:
                if(!var1) { _fun0001_ip = 138; continue _fun0001 }
 27:
                var1 = _closure2_slot3;
                if(!(var3 != var1)) { _fun0001_ip = 50; continue _fun0001 }
 35:
                var4 = _closure2_slot3;
                var3 = _closure2_slot0;
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
 50:
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
                var1 = _closure2_slot1;
                var3 = var1.channel_id;
                var2 = _closure2_slot2;
                var2 = var2.guild;
                var2 = var2.id;
                var1 = var1.id;
                var1 = var4.bind(var5)(var3, var2, var1);
 138:
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