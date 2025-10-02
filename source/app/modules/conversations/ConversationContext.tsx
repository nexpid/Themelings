// app/modules/conversations/ConversationContext.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var7 = dependencyMap;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var5 = var7[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var8 = var4.bind(var1)(var5);
    var _closure1_slot0 = var8;
    var5 = var8.createContext;
    var4 = null;
    var5 = var5.bind(var8)(var4);
    var _closure1_slot1 = var5;
    var6 = var8.createContext;
    var4 = {};
    var4 = var6.bind(var8)(var4);
    var _closure1_slot2 = var4;
    var6 = 1;
    var7 = var7[var6];
    var6 = require;
    var8 = var6.bind(var1)(var7);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/conversations/ConversationContext.tsx';
    var6 = var7.bind(var8)(var6);
    var3['ConversationContext'] = var5;
    var5 = function useConversationContext() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var2 = var3.useContext;
            var1 = _closure1_slot1;
            var1 = var2.bind(var3)(var1);
            var2 = null;
            if(!(var2 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            return var1;
case 2:
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var4 = 'useConversationContext must be used within a ConversationProvider';
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var3['useConversationContext'] = var5;
    var3['ConversationRenderContext'] = var4;
    var2 = function useConversationRenderContext() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot0;
            var2 = var3.useContext;
            var1 = _closure1_slot2;
            var1 = var2.bind(var3)(var1);
            var2 = null;
            if(!(var2 != var1)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            return var1;
case 2:
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var4 = 'useConversationRenderContext must be used within a ConversationRenderProvider';
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var3['useConversationRenderContext'] = var2;
    return var1;
})();