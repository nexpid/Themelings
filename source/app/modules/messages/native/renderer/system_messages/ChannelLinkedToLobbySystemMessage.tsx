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
 0:
            var5 = arg1;
            var7 = var5.message;
            var12 = var5.roleStyle;
            var2 = var5.theme;
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 2;
            var1 = var4[var1];
            var4 = undefined;
            var1 = var6.bind(var4)(var1);
            var9 = var1.bind(var4)(var2);
            var8 = var7.author;
            var10 = _closure1_slot3;
            var6 = var10.getApplication;
            var11 = var7.applicationId;
            var1 = null;
            var13 = var1 != var11;
            var2 = '';
            if(!var13) { _fun0001_ip = 87; continue _fun0001 }
 84:
            var2 = var11;
 87:
            var2 = var6.bind(var10)(var2);
            if(!(var1 != var2)) { _fun0001_ip = 501; continue _fun0001 }
 99:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = 3;
            var6 = var15[var6];
            var10 = var14.bind(var4)(var6);
            var6 = var10.getMessageAuthorWithProcessedColor;
            var10 = var6.bind(var10)(var7);
            var6 = var10.nick;
            var11 = var10.colorString;
            var13 = var10.colorStrings;
            var16 = var10.guildId;
            var10 = 4;
            var10 = var15[var10];
            var15 = var14.bind(var4)(var10);
            var14 = var15.isNativeMessageEligibleForEnhancedRoleColors;
            var10 = var8.id;
            var14 = var14.bind(var15)(var16, var10, var12);
            var10 = {};
            var10['username'] = var6;
            var6 = {};
            var15 = 'bindUserMenu';
            var6['action'] = var15;
            var8 = var8.id;
            var6['userId'] = var8;
            var6['colorString'] = var11;
            var15 = 'username';
            var8 = null;
            if(!(var15 === var12)) { _fun0001_ip = 228; continue _fun0001 }
 225:
            var8 = var11;
 228:
            if(!(var1 == var8)) { _fun0001_ip = 238; continue _fun0001 }
 232:
            var8 = var9.defaultUsernameColor;
 238:
            var6['linkColor'] = var8;
            var6['roleColor'] = var11;
            var8 = null;
            if(!var14) { _fun0001_ip = 256; continue _fun0001 }
 253:
            var8 = var13;
 256:
            var6['roleColors'] = var8;
            var8 = 'dot';
            var8 = var8 === var12;
            if(!var8) { _fun0001_ip = 276; continue _fun0001 }
 272:
            var8 = var1 != var11;
 276:
            var6['shouldShowRoleDot'] = var8;
            var7 = var7.channel_id;
            var6['messageChannelId'] = var7;
            var8 = true;
            var6['medium'] = var8;
            var10['usernameOnClick'] = var6;
            var2 = var2.name;
            var10['applicationName'] = var2;
            var2 = {};
            var6 = var9.defaultUsernameColor;
            var2['linkColor'] = var6;
            var2['medium'] = var8;
            var10['applicationNameOnClick'] = var2;
            var2 = {};
            var6 = 'bindOpenUrl';
            var2['action'] = var6;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var11 = 5;
            var11 = var7[var11];
            var13 = var6.bind(var4)(var11);
            var12 = var13.getArticleURL;
            var11 = _closure1_slot4;
            var11 = var11.LINKED_LOBBIES;
            var11 = var12.bind(var13)(var11);
            var2['url'] = var11;
            var9 = var9.linkColor;
            var2['linkColor'] = var9;
            var2['medium'] = var8;
            var10['urlOnClick'] = var2;
            var2 = {};
            var11 = _closure1_slot0;
            var3 = 6;
            var8 = var7[var3];
            var8 = var11.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.formatToParts;
            var3 = var7[var3];
            var3 = var11.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.gZfhOz;
            var3 = var8.bind(var9)(var3, var10);
            var2['content'] = var3;
            var3 = 7;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var18 = var3.bind(var4)(var5);
            var19 = var2;
            var3 = copyDataProperties(var19, var18);
            return var2;
 501:
            return var1;
        }
    };
    var3['createChannelLinkedToLobbySystemMessage'] = var2;
    return var1;
})();