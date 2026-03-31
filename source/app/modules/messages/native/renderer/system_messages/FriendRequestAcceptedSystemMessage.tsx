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
            var8 = var5.message;
            var12 = var5.roleStyle;
            var4 = _closure1_slot3;
            var2 = var4.getChannel;
            var1 = var8.channel_id;
            var11 = var2.bind(var4)(var1);
            var1 = null;
            if(!(var1 != var11)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var11.isDM;
            var2 = var2.bind(var11)();
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var2 = var11.getRecipientId;
            var16 = var2.bind(var11)();
            var4 = _closure1_slot4;
            var2 = var4.getUser;
            var10 = var2.bind(var4)(var16);
            var2 = var4.getCurrentUser;
            var2 = var2.bind(var4)();
            if(!(var1 != var10)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            if(!(var1 != var2)) { _fun0001_ip = 5; continue _fun0001 }
case 7:
            var4 = var8.author;
            var7 = var4.id;
            var6 = var2.id;
            var9 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 2;
            var2 = var4[var2];
            var4 = undefined;
            var9 = var9.bind(var4)(var2);
            var2 = var9.getUserAuthorWithProcessedColor;
            var9 = var2.bind(var9)(var10, var11);
            var2 = var9.nick;
            var11 = var9.colorString;
            var13 = var9.colorStrings;
            var15 = var9.guildId;
            var10 = {};
            var10['username'] = var2;
            var2 = {};
            var9 = 'bindUserMenu';
            var2['action'] = var9;
            var2['userId'] = var16;
            var2['colorString'] = var11;
            var14 = 'username';
            var9 = null;
            if(!(var14 === var12)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var9 = var11;
case 8:
            var2['linkColor'] = var9;
            var2['roleColor'] = var11;
            var14 = _closure1_slot0;
            var17 = _closure1_slot2;
            var9 = 3;
            var9 = var17[var9];
            var14 = var14.bind(var4)(var9);
            var9 = var14.isNativeMessageEligibleForEnhancedRoleColors;
            var14 = var9.bind(var14)(var15, var16, var12);
            var9 = null;
            if(!var14) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = var13;
case 10:
            var2['roleColors'] = var9;
            var9 = 'dot';
            var9 = var9 === var12;
            if(!var9) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var9 = var1 != var11;
case 12:
            var2['shouldShowRoleDot'] = var9;
            var8 = var8.channel_id;
            var2['messageChannelId'] = var8;
            var8 = true;
            var2['medium'] = var8;
            var10['usernameOnClick'] = var2;
            var2 = {};
            if(!(var7 !== var6)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 4;
            var7 = var11[var6];
            var7 = var9.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.formatToParts;
            var6 = var11[var6];
            var6 = var9.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.hyPOTm;
            var6 = var7.bind(var8)(var6, var10);
            _fun0001_ip = 16; continue _fun0001;
case 14:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 4;
            var8 = var12[var7];
            var8 = var11.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.formatToParts;
            var7 = var12[var7];
            var7 = var11.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.REfFZs;
            var6 = var8.bind(var9)(var7, var10);
case 16:
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
            var19 = var3.bind(var4)(var5);
            var20 = var2;
            var3 = copyDataProperties(var20, var19);
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