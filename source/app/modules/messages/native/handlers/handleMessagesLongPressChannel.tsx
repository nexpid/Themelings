// app/modules/messages/native/handlers/handleMessagesLongPressChannel.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
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
    var4 = 'modules/messages/native/handlers/handleMessagesLongPressChannel.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function handleMessagesLongPressChannel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var1 = var1.data;
            var6 = var1.guildId;
            var5 = var1.channelId;
            var4 = var1.messageId;
            var7 = var1.originalLink;
            var1 = null;
            if(!(var1 == var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(!(var1 != var7)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            if(!(var1 == var7)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 0;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var8.bind(var2)(var3);
            var2 = var3.getChannelPermalink;
            var7 = var2.bind(var3)(var6, var5, var4);
case 5:
            if(!(var1 != var7)) { _fun0001_ip = 4; continue _fun0001 }
case 7:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 1;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var1['urlString'] = var7;
            var1['guildId'] = var6;
            var1['channelId'] = var5;
            var1['messageId'] = var4;
            var1 = var2.bind(var3)(var1);
case 4:
            var1 = undefined;
            return var1;
        }
    };
    var3['handleMessagesLongPressChannel'] = var2;
    return var1;
})();