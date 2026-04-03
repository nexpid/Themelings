// app/modules/messages/native/renderer/system_messages/AddRecipientSystemMessage.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.THREAD_CHANNEL_TYPES;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/AddRecipientSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createAddRecipientSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var10 = var4.message;
            var7 = var4.roleStyle;
            var2 = var10.mentions;
            var1 = 0;
            var11 = var2[var1];
            var3 = _closure1_slot5;
            var1 = var3.getUser;
            var9 = var1.bind(var3)(var11);
            var5 = _closure1_slot4;
            var3 = var5.getChannel;
            var1 = var10.channel_id;
            var8 = var3.bind(var5)(var1);
            var1 = null;
            var5 = var1 != var8;
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot3;
            var3 = var6.has;
            var1 = var8.type;
            var5 = var3.bind(var6)(var1);
case 2:
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 3;
            var13 = var12[var1];
            var3 = undefined;
            var14 = var6.bind(var3)(var13);
            var13 = var14.getMessageAuthorWithProcessedColor;
            var15 = var13.bind(var14)(var10);
            var1 = var12[var1];
            var6 = var6.bind(var3)(var1);
            var1 = var6.getUserAuthorWithProcessedColor;
            var8 = var1.bind(var6)(var9, var8);
            var9 = {};
            var1 = var15.nick;
            var9['username'] = var1;
            var6 = _closure1_slot1;
            var1 = 4;
            var13 = var12[var1];
            var14 = var6.bind(var3)(var13);
            var13 = {};
            var13['message'] = var10;
            var13['author'] = var15;
            var13['roleStyle'] = var7;
            var13 = var14.bind(var3)(var13);
            var9['usernameOnClick'] = var13;
            var13 = var8.nick;
            var9['otherUsername'] = var13;
            var1 = var12[var1];
            var6 = var6.bind(var3)(var1);
            var1 = {};
            var1['userId'] = var11;
            var1['message'] = var10;
            var1['author'] = var8;
            var1['roleStyle'] = var7;
            var1 = var6.bind(var3)(var1);
            var9['otherUsernameOnClick'] = var1;
            var1 = {};
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 5;
            var7 = var11[var6];
            var7 = var10.bind(var3)(var7);
            var8 = var7.intl;
            var7 = var8.formatToParts;
            var6 = var11[var6];
            var6 = var10.bind(var3)(var6);
            var6 = var6.t;
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var6["7/Xl0S"];
            var5 = var7.bind(var8)(var5, var9);
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var6 = var6.Vej1Nw;
            var5 = var7.bind(var8)(var6, var9);
case 6:
            var1['content'] = var5;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 6;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            var17 = var2.bind(var3)(var4);
            var18 = var1;
            var2 = copyDataProperties(var18, var17);
            return var1;
        }
    };
    var3['createAddRecipientSystemMessage'] = var2;
    return var1;
})();