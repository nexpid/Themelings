// app/modules/conversations/components/native/ConversationNavigatorUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var2 = {};
    var1 = 'conversation_list';
    var2['LIST'] = var1;
    var1 = 'conversation_focus';
    var2['FOCUS'] = var1;
    var1 = 2;
    var5 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/conversations/components/native/ConversationNavigatorUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function closeConversationsAndJumpToMessage(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 0;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.getRootNavigationRef;
            var4 = var3.bind(var4)();
            var3 = null;
            if(!(var3 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var4.goBack;
            var3 = var3.bind(var4)();
case 2:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 1;
            var2 = var4[var2];
            var6 = var3.bind(var1)(var2);
            var5 = var6.transitionToMessage;
            var4 = {};
            var2 = true;
            var4['navigationReplace'] = var2;
            var3 = arg1;
            var2 = arg2;
            var2 = var5.bind(var6)(var3, var2, var4);
            return var1;
        }
    };
    var3['closeConversationsAndJumpToMessage'] = var4;
    var3['ConversationNavigatorScreens'] = var2;
    return var1;
})();