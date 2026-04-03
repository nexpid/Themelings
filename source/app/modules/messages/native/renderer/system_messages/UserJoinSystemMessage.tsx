// app/modules/messages/native/renderer/system_messages/UserJoinSystemMessage.tsx
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
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SystemChannelFlags;
    var _closure1_slot5 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/UserJoinSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createUserJoinSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var17 = var4.message;
            var15 = var4.roleStyle;
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 3;
            var1 = var6[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = var2.getMessageAuthorWithProcessedColor;
            var16 = var1.bind(var2)(var17);
            var7 = _closure1_slot3;
            var2 = var7.getChannel;
            var1 = var17.getChannelId;
            var1 = var1.bind(var17)();
            var9 = var2.bind(var7)(var1);
            var2 = _closure1_slot1;
            var1 = 4;
            var1 = var6[var1];
            var6 = var2.bind(var3)(var1);
            var2 = var6.getSystemMessageUserJoinMobile;
            var1 = var17.id;
            var12 = var2.bind(var6)(var1);
            var2 = null;
            var1 = var2 == var9;
            var8 = undefined;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var9.getGuildId;
            var8 = var1.bind(var9)();
case 2:
            var1 = var2 != var8;
            var7 = undefined;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var2 != var9;
            var7 = undefined;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var6 = _closure1_slot4;
            var1 = var6.getGuild;
            var1 = var1.bind(var6)(var8);
            var6 = var2 != var1;
            if(!var6) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var2 = var1.systemChannelFlags;
            var1 = _closure1_slot5;
            var1 = var1.SUPPRESS_JOIN_NOTIFICATION_REPLIES;
            var1 = var2 & var1;
            var6 = !var1;
case 7:
            var2 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 5;
            var1 = var10[var1];
            var2 = var2.bind(var3)(var1);
            var1 = var2.computeIsStickerReplyEnabled;
            var22 = var2;
            var21 = var8;
            var20 = var9;
            var19 = var17;
            var18 = var6;
            var1 = var22[var1](var21, var20, var19, var18, var17);
            var7 = undefined;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 9:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 6;
            var1 = var9[var1];
            var6 = var8.bind(var3)(var1);
            var2 = var6.transformSticker;
            var1 = 7;
            var1 = var9[var1];
            var9 = var8.bind(var3)(var1);
            var8 = var9.pickWelcomeSticker;
            var1 = var17.id;
            var1 = var8.bind(var9)(var1);
            var7 = var2.bind(var6)(var1);
case 4:
            var1 = {};
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 8;
            var8 = var6[var2];
            var8 = var9.bind(var3)(var8);
            var11 = var8.intl;
            var10 = var11.formatToParts;
            var8 = {};
            var13 = var16.nick;
            var8['username'] = var13;
            var5 = _closure1_slot1;
            var13 = 9;
            var13 = var6[var13];
            var14 = var5.bind(var3)(var13);
            var13 = {};
            var13['message'] = var17;
            var13['author'] = var16;
            var13['roleStyle'] = var15;
            var13 = var14.bind(var3)(var13);
            var8['usernameOnClick'] = var13;
            var8 = var10.bind(var11)(var12, var8);
            var1['content'] = var8;
            var1['sticker'] = var7;
            var7 = var6[var2];
            var7 = var9.bind(var3)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var2 = var6[var2];
            var2 = var9.bind(var3)(var2);
            var2 = var2.t;
            var2 = var2["7Tj6HT"];
            var2 = var7.bind(var8)(var2);
            var1['stickerLabel'] = var2;
            var2 = 10;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            var20 = var2.bind(var3)(var4);
            var21 = var1;
            var2 = copyDataProperties(var21, var20);
            return var1;
        }
    };
    var3['createUserJoinSystemMessage'] = var2;
    return var1;
})();