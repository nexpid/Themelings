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
    var4 = 10;
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
            var9 = var5.roleStyle;
            var4 = _closure1_slot3;
            var3 = var4.getChannel;
            var1 = var2.channel_id;
            var13 = var3.bind(var4)(var1);
            var1 = null;
            if(!(var1 != var13)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var13.isDM;
            var3 = var3.bind(var13)();
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var3 = var13.getRecipientId;
            var10 = var3.bind(var13)();
            var4 = _closure1_slot4;
            var3 = var4.getUser;
            var12 = var3.bind(var4)(var10);
            var3 = var4.getCurrentUser;
            var3 = var3.bind(var4)();
            if(!(var1 != var12)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            if(!(var1 != var3)) { _fun0001_ip = 5; continue _fun0001 }
case 7:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 2;
            var7 = var11[var4];
            var4 = undefined;
            var8 = var8.bind(var4)(var7);
            var7 = var8.getUserAuthorWithProcessedColor;
            var13 = var7.bind(var8)(var12, var13);
            var8 = _closure1_slot1;
            var7 = 3;
            var7 = var11[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['userId'] = var10;
            var7['message'] = var2;
            var7['author'] = var13;
            var7['roleStyle'] = var9;
            var7 = var8.bind(var4)(var7);
            var14 = {};
            var8 = var13.nick;
            var14['username'] = var8;
            var14['usernameOnClick'] = var7;
            var7 = var2.author;
            var7 = var7.id;
            var3 = var3.id;
            var8 = var7 === var3;
            var15 = var2.content;
            if(!(var1 != var15)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = '';
            if(!(var2 === var15)) { _fun0001_ip = 10; continue _fun0001 }
case 8:
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 6;
            var3 = var10[var2];
            var3 = var7.bind(var4)(var3);
            var9 = var3.intl;
            var3 = var9.formatToParts;
            var2 = var10[var2];
            var2 = var7.bind(var4)(var2);
            var2 = var2.t;
            if(var8) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var7 = var2.hyPOTm;
            var7 = var3.bind(var9)(var7, var14);
            _fun0001_ip = 13; continue _fun0001;
case 11:
            var2 = var2.REfFZs;
            var7 = var3.bind(var9)(var2, var14);
case 13:
            var3 = undefined;
            _fun0001_ip = 14; continue _fun0001;
case 10:
            var9 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = 4;
            var2 = var16[var2];
            var10 = var9.bind(var4)(var2);
            var9 = var10.createNativeStyleProperties;
            var2 = {};
            var12 = _closure1_slot1;
            var11 = 5;
            var11 = var16[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.colors;
            var11 = var11.TEXT_SUBTLE;
            var2['baseTextColor'] = var11;
            var9 = var9.bind(var10)(var2);
            var2 = var5.theme;
            var2 = var9.bind(var4)(var2);
            var2 = var2.baseTextColor;
            var10 = _closure1_slot0;
            var16 = _closure1_slot2;
            var9 = 6;
            var11 = var16[var9];
            var11 = var10.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.formatToParts;
            var9 = var16[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.t;
            if(var8) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var10 = var9.bNrwDM;
            var8 = {};
            var19 = var8;
            var18 = var14;
            var16 = copyDataProperties(var19, var18);
            var16 = 'note';
            var8[15] = var15;
            var17 = {};
            var16 = var13.colorString;
            var17['colorString'] = var16;
            var16 = 'formattedNote';
            var8[15] = var17;
            var8 = var11.bind(var12)(var10, var8);
            _fun0001_ip = 17; continue _fun0001;
case 15:
            var10 = var9["6pQebO"];
            var9 = {};
            var19 = var9;
            var18 = var14;
            var14 = copyDataProperties(var19, var18);
            var14 = 'note';
            var9[13] = var15;
            var14 = {};
            var13 = var13.colorString;
            var14['colorString'] = var13;
            var13 = 'formattedNote';
            var9[12] = var14;
            var8 = var11.bind(var12)(var10, var9);
case 17:
            var7 = var8;
            var3 = var2;
case 14:
            var2 = {};
            var2['content'] = var7;
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var8 = 7;
            var8 = var7[var8];
            var10 = var9.bind(var4)(var8);
            var9 = var10.getAssetUriForEmbed;
            var6 = _closure1_slot1;
            var8 = 8;
            var8 = var7[var8];
            var8 = var6.bind(var4)(var8);
            var8 = var9.bind(var10)(var8);
            var2['iconUrl'] = var8;
            var2['textColor'] = var3;
            var3 = 9;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var18 = var3.bind(var4)(var5);
            var19 = var2;
            var3 = copyDataProperties(var19, var18);
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