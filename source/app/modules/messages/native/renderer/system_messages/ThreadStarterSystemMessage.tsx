// app/modules/messages/native/renderer/system_messages/ThreadStarterSystemMessage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var4 = 0;
    var7 = var6[var4];
    var1 = undefined;
    var7 = var8.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ReferencedMessageState;
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageTypes;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/ThreadStarterSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createThreadStarterSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var1 = var5.message;
            var6 = var1.messageReference;
            var8 = var1.type;
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 2;
            var1 = var4[var1];
            var4 = undefined;
            var7 = var2.bind(var4)(var1);
            var1 = _closure1_slot5;
            var1 = var1.THREAD_STARTER_MESSAGE;
            var2 = global;
            var2 = var2.HermesInternal;
            var9 = var2.concat;
            var2 = 'cannot call createThreadStarterSystemMessage on a message of type ';
            var2 = var9.bind(var2)(var8);
            var1 = var8 === var1;
            var1 = var7.bind(var4)(var1, var2);
            var2 = _closure1_slot3;
            var1 = var2.getMessageByReference;
            var1 = var1.bind(var2)(var6);
            var6 = var1.state;
            var1 = _closure1_slot4;
            var2 = var1.LOADED;
            var1 = null;
            if(!(var6 !== var2)) { _fun0001_ip = 218; continue _fun0001 }
 124:
            var2 = {};
            var10 = _closure1_slot0;
            var7 = _closure1_slot2;
            var6 = 3;
            var8 = var7[var6];
            var8 = var10.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var6 = var7[var6];
            var6 = var10.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.OCs36O;
            var6 = var8.bind(var9)(var6);
            var2['content'] = var6;
            var6 = _closure1_slot1;
            var3 = 4;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var11 = var3.bind(var4)(var5);
            var12 = var2;
            var3 = copyDataProperties(var12, var11);
            var1 = var2;
 218:
            return var1;
        }
    };
    var3['createThreadStarterSystemMessage'] = var2;
    return var1;
})();