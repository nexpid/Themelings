// app/modules/messages/native/renderer/system_messages/RemoveRecipientSystemMessage.tsx
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
    var4 = 'modules/messages/native/renderer/system_messages/RemoveRecipientSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createRemoveRecipientSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var10 = var4.message;
            var7 = var4.roleStyle;
            var1 = var10.author;
            var3 = var10.mentions;
            var2 = 0;
            var12 = var3[var2];
            var6 = _closure1_slot4;
            var5 = var6.getChannel;
            var3 = var10.channel_id;
            var14 = var5.bind(var6)(var3);
            var3 = null;
            var5 = var3 != var14;
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = _closure1_slot3;
            var6 = var8.has;
            var3 = var14.type;
            var5 = var6.bind(var8)(var3);
case 2:
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 3;
            var9 = var8[var6];
            var3 = undefined;
            var11 = var11.bind(var3)(var9);
            var9 = var11.getMessageAuthorWithProcessedColor;
            var15 = var9.bind(var11)(var10);
            var9 = {};
            var11 = var15.nick;
            var9['username'] = var11;
            var11 = _closure1_slot1;
            var13 = 4;
            var8 = var8[var13];
            var11 = var11.bind(var3)(var8);
            var8 = {};
            var8['message'] = var10;
            var8['author'] = var15;
            var8['roleStyle'] = var7;
            var8 = var11.bind(var3)(var8);
            var9['usernameOnClick'] = var8;
            var1 = var1.id;
            if(!(var1 !== var12)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = _closure1_slot5;
            var1 = var8.getUser;
            var11 = var1.bind(var8)(var12);
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = var1[var6];
            var8 = var8.bind(var3)(var6);
            var6 = var8.getUserAuthorWithProcessedColor;
            var8 = var6.bind(var8)(var11, var14);
            var11 = {};
            var18 = var11;
            var17 = var9;
            var6 = copyDataProperties(var18, var17);
            var14 = var8.nick;
            var6 = 'otherUsername';
            var11[5] = var14;
            var6 = _closure1_slot1;
            var1 = var1[var13];
            var6 = var6.bind(var3)(var1);
            var1 = {};
            var1['userId'] = var12;
            var1['message'] = var10;
            var1['author'] = var8;
            var1['roleStyle'] = var7;
            var6 = var6.bind(var3)(var1);
            var1 = 'otherUsernameOnClick';
            var11[0] = var6;
            var1 = {};
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 5;
            var8 = var12[var6];
            var8 = var7.bind(var3)(var8);
            var10 = var8.intl;
            var8 = var10.formatToParts;
            var6 = var12[var6];
            var6 = var7.bind(var3)(var6);
            var7 = var6.t;
            if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var7.QtZ0RD;
            var6 = var8.bind(var10)(var6, var11);
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var7 = var7.KBrM5t;
            var6 = var8.bind(var10)(var7, var11);
case 8:
            var1['content'] = var6;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 6;
            var6 = var8[var6];
            var6 = var7.bind(var3)(var6);
            var17 = var6.bind(var3)(var4);
            var18 = var1;
            var6 = copyDataProperties(var18, var17);
            return var1;
case 4:
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
            if(var5) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var5 = var6.Qn5+Lf;
            var5 = var7.bind(var8)(var5, var9);
            _fun0001_ip = 11; continue _fun0001;
case 9:
            var6 = var6.uHmblj;
            var5 = var7.bind(var8)(var6, var9);
case 11:
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
    var3['createRemoveRecipientSystemMessage'] = var2;
    return var1;
})();