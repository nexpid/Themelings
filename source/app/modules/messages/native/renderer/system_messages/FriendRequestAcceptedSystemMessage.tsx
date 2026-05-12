// app/modules/messages/native/renderer/system_messages/FriendRequestAcceptedSystemMessage.tsx
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/FriendRequestAcceptedSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createFriendRequestAcceptedSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var2 = var5.message;
            var10 = var5.roleStyle;
            var6 = _closure1_slot3;
            var4 = var6.getChannel;
            var1 = var2.channel_id;
            var13 = var4.bind(var6)(var1);
            var1 = null;
            if(!(var1 != var13)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var13.isDM;
            var4 = var4.bind(var13)();
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var4 = var13.getRecipientId;
            var11 = var4.bind(var13)();
            var6 = _closure1_slot4;
            var4 = var6.getUser;
            var9 = var4.bind(var6)(var11);
            var4 = var6.getCurrentUser;
            var6 = var4.bind(var6)();
            if(!(var1 != var9)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            if(!(var1 != var6)) { _fun0001_ip = 5; continue _fun0001 }
case 7:
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 2;
            var7 = var12[var4];
            var4 = undefined;
            var8 = var8.bind(var4)(var7);
            var7 = var8.getUserAuthorWithProcessedColor;
            var8 = var7.bind(var8)(var9, var13);
            var9 = _closure1_slot1;
            var7 = 3;
            var7 = var12[var7];
            var9 = var9.bind(var4)(var7);
            var7 = {};
            var7['userId'] = var11;
            var7['message'] = var2;
            var7['author'] = var8;
            var7['roleStyle'] = var10;
            var7 = var9.bind(var4)(var7);
            var12 = {};
            var8 = var8.nick;
            var12['username'] = var8;
            var12['usernameOnClick'] = var7;
            var7 = var2.author;
            var7 = var7.id;
            var6 = var6.id;
            var7 = var7 === var6;
            var13 = var2.content;
            var2 = {};
            if(!(var1 != var13)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = '';
            if(!(var6 === var13)) { _fun0001_ip = 10; continue _fun0001 }
case 8:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 4;
            var9 = var11[var6];
            var9 = var8.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.formatToParts;
            var6 = var11[var6];
            var6 = var8.bind(var4)(var6);
            var8 = var6.t;
            if(var7) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var6 = var8.hyPOTm;
            var6 = var9.bind(var10)(var6, var12);
            _fun0001_ip = 13; continue _fun0001;
case 11:
            var8 = var8.REfFZs;
            var6 = var9.bind(var10)(var8, var12);
case 13:
            _fun0001_ip = 14; continue _fun0001;
case 10:
            var9 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 4;
            var10 = var14[var8];
            var10 = var9.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.formatToParts;
            var8 = var14[var8];
            var8 = var9.bind(var4)(var8);
            var8 = var8.t;
            if(var7) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var9 = var8.oMEXZ3;
            var7 = {};
            var16 = var7;
            var15 = var12;
            var14 = copyDataProperties(var16, var15);
            var14 = 'note';
            var7[13] = var13;
            var7 = var10.bind(var11)(var9, var7);
            _fun0001_ip = 17; continue _fun0001;
case 15:
            var9 = var8.IPk+su;
            var8 = {};
            var16 = var8;
            var15 = var12;
            var12 = copyDataProperties(var16, var15);
            var12 = 'note';
            var8[11] = var13;
            var7 = var10.bind(var11)(var9, var8);
case 17:
            var6 = var7;
case 14:
            var2['content'] = var6;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var6 = 5;
            var6 = var7[var6];
            var9 = var8.bind(var4)(var6);
            var8 = var9.getAssetUriForEmbed;
            var6 = _closure1_slot1;
            var3 = 6;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var8.bind(var9)(var3);
            var2['iconUrl'] = var3;
            var3 = 7;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var15 = var3.bind(var4)(var5);
            var16 = var2;
            var3 = copyDataProperties(var16, var15);
            return var2;
case 5:
            return var1;
case 2:
            return var1;
        }
    };
    var3['createFriendRequestAcceptedSystemMessage'] = var2;
    return var1;
})();