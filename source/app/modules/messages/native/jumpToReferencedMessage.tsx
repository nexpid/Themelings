// app/modules/messages/native/jumpToReferencedMessage.tsx
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
    var4 = 'modules/messages/native/jumpToReferencedMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function jumpToReferencedMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var6 = var5.messageReference;
            var4 = null;
            var3 = var4 == var6;
            var1 = undefined;
            var2 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var6.channel_id;
case 2:
            var2 = var4 != var2;
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var6.message_id;
            var2 = var4 != var3;
case 4:
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 0;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.jumpToMessage;
            var2 = {};
            var7 = var6.channel_id;
            var2['channelId'] = var7;
            var6 = var6.message_id;
            var2['messageId'] = var6;
            var6 = true;
            var2['flash'] = var6;
            var5 = var5.id;
            var2['returnMessageId'] = var5;
            var2 = var3.bind(var4)(var2);
case 6:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();