// app/modules/messages/native/renderer/system_messages/PrivateChannelIntegrationSystemMessage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageTypes;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/PrivateChannelIntegrationSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createPrivateChannelIntegrationSystemMessage(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var6 = var4.message;
            var1 = var6.author;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 1;
            var5 = var5[var3];
            var3 = undefined;
            var7 = var7.bind(var3)(var5);
            var5 = var7.getMessageAuthor;
            var5 = var5.bind(var7)(var6);
            var11 = var5.nick;
            var10 = {};
            var7 = 'bindUserMenu';
            var10['action'] = var7;
            var1 = var1.id;
            var10['userId'] = var1;
            var1 = var6.channel_id;
            var10['messageChannelId'] = var1;
            var5 = true;
            var10['medium'] = var5;
            var12 = var6.application;
            var8 = null;
            var9 = var8 == var12;
            var1 = undefined;
            if(var9) { _fun0001_ip = 116; continue _fun0001 }
 110:
            var1 = var12.bot;
 116:
            var1 = var8 != var1;
            var9 = undefined;
            if(!var1) { _fun0001_ip = 164; continue _fun0001 }
 125:
            var1 = {};
            var1['action'] = var7;
            var7 = var12.bot;
            var7 = var7.id;
            var1['userId'] = var7;
            var6 = var6.channel_id;
            var1['messageChannelId'] = var6;
            var1['medium'] = var5;
            var9 = var1;
 164:
            var1 = {};
            var5 = _closure1_slot3;
            var6 = var5.PRIVATE_CHANNEL_INTEGRATION_ADDED;
            var5 = arg2;
            if(!(var5 !== var6)) { _fun0001_ip = 236; continue _fun0001 }
 183:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 2;
            var5 = var7[var5];
            var7 = var6.bind(var3)(var5);
            var6 = var7.getPrivateChannelIntegrationRemovedSystemMessageASTContent;
            var5 = {};
            var5['application'] = var12;
            var5['username'] = var11;
            var5['usernameOnClick'] = var10;
            var5['applicationNameOnClick'] = var9;
            var5 = var6.bind(var7)(var5);
            _fun0001_ip = 287; continue _fun0001;
 236:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 2;
            var6 = var8[var6];
            var8 = var7.bind(var3)(var6);
            var7 = var8.getPrivateChannelIntegrationAddedSystemMessageASTContent;
            var6 = {};
            var6['application'] = var12;
            var6['username'] = var11;
            var6['usernameOnClick'] = var10;
            var6['applicationNameOnClick'] = var9;
            var5 = var7.bind(var8)(var6);
 287:
            var1['content'] = var5;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 3;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            var13 = var2.bind(var3)(var4);
            var14 = var1;
            var2 = copyDataProperties(var14, var13);
            return var1;
        }
    };
    var3['createPrivateChannelIntegrationSystemMessage'] = var2;
    return var1;
})();