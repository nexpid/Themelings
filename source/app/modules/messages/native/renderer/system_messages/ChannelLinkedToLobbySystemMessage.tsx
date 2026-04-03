// app/modules/messages/native/renderer/system_messages/ChannelLinkedToLobbySystemMessage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.HelpdeskArticles;
    var _closure1_slot4 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/ChannelLinkedToLobbySystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createChannelLinkedToLobbySystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var15 = var5.message;
            var13 = var5.roleStyle;
            var2 = var5.theme;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 2;
            var1 = var4[var1];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var8 = var1.bind(var4)(var2);
            var6 = _closure1_slot3;
            var3 = var6.getApplication;
            var7 = var15.applicationId;
            var1 = null;
            var10 = var1 != var7;
            var2 = '';
            if(!var10) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var7;
case 2:
            var2 = var3.bind(var6)(var2);
            if(!(var1 != var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var11 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 3;
            var3 = var7[var3];
            var6 = var11.bind(var4)(var3);
            var3 = var6.getMessageAuthorWithProcessedColor;
            var14 = var3.bind(var6)(var15);
            var10 = {};
            var3 = var14.nick;
            var10['username'] = var3;
            var6 = _closure1_slot1;
            var3 = 4;
            var3 = var7[var3];
            var12 = var6.bind(var4)(var3);
            var3 = {};
            var3['message'] = var15;
            var3['author'] = var14;
            var3['roleStyle'] = var13;
            var3 = var12.bind(var4)(var3);
            var10['usernameOnClick'] = var3;
            var2 = var2.name;
            var10['applicationName'] = var2;
            var2 = {};
            var3 = var8.defaultUsernameColor;
            var2['linkColor'] = var3;
            var3 = true;
            var2['medium'] = var3;
            var10['applicationNameOnClick'] = var2;
            var2 = {};
            var12 = 'bindOpenUrl';
            var2['action'] = var12;
            var12 = 5;
            var12 = var7[var12];
            var13 = var6.bind(var4)(var12);
            var12 = var13.getArticleURL;
            var9 = _closure1_slot4;
            var9 = var9.LINKED_LOBBIES;
            var9 = var12.bind(var13)(var9);
            var2['url'] = var9;
            var8 = var8.linkColor;
            var2['linkColor'] = var8;
            var2['medium'] = var3;
            var10['urlOnClick'] = var2;
            var2 = {};
            var3 = 6;
            var8 = var7[var3];
            var8 = var11.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.formatToParts;
            var3 = var7[var3];
            var3 = var11.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.gZfhOw;
            var3 = var8.bind(var9)(var3, var10);
            var2['content'] = var3;
            var3 = 7;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var16 = var3.bind(var4)(var5);
            var17 = var2;
            var3 = copyDataProperties(var17, var16);
            return var2;
case 4:
            return var1;
        }
    };
    var3['createChannelLinkedToLobbySystemMessage'] = var2;
    return var1;
})();