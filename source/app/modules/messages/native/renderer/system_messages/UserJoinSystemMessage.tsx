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
 0:
            var4 = arg1;
            var12 = var4.message;
            var16 = var4.roleStyle;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 3;
            var1 = var6[var1];
            var3 = undefined;
            var5 = var5.bind(var3)(var1);
            var1 = var5.getMessageAuthorWithProcessedColor;
            var1 = var1.bind(var5)(var12);
            var11 = var1.nick;
            var15 = var1.colorString;
            var17 = var1.colorStrings;
            var13 = var1.guildId;
            var7 = _closure1_slot3;
            var5 = var7.getChannel;
            var1 = var12.getChannelId;
            var1 = var1.bind(var12)();
            var9 = var5.bind(var7)(var1);
            var5 = _closure1_slot1;
            var1 = 4;
            var1 = var6[var1];
            var6 = var5.bind(var3)(var1);
            var5 = var6.getSystemMessageUserJoinMobile;
            var1 = var12.id;
            var10 = var5.bind(var6)(var1);
            var14 = null;
            var1 = var14 == var9;
            var8 = undefined;
            if(var1) { _fun0001_ip = 150; continue _fun0001 }
 140:
            var1 = var9.getGuildId;
            var8 = var1.bind(var9)();
 150:
            var1 = var14 != var8;
            var6 = undefined;
            if(!var1) { _fun0001_ip = 327; continue _fun0001 }
 162:
            var1 = var14 != var9;
            var6 = undefined;
            if(!var1) { _fun0001_ip = 327; continue _fun0001 }
 174:
            var5 = _closure1_slot4;
            var1 = var5.getGuild;
            var1 = var1.bind(var5)(var8);
            var7 = var14 != var1;
            if(!var7) { _fun0001_ip = 218; continue _fun0001 }
 195:
            var5 = var1.systemChannelFlags;
            var1 = _closure1_slot5;
            var1 = var1.SUPPRESS_JOIN_NOTIFICATION_REPLIES;
            var1 = var5 & var1;
            var7 = !var1;
 218:
            var5 = _closure1_slot0;
            var18 = _closure1_slot2;
            var1 = 5;
            var1 = var18[var1];
            var5 = var5.bind(var3)(var1);
            var1 = var5.computeIsStickerReplyEnabled;
            var24 = var5;
            var23 = var8;
            var22 = var9;
            var21 = var12;
            var20 = var7;
            var1 = var24[var1](var23, var22, var21, var20, var19);
            var6 = undefined;
            if(!var1) { _fun0001_ip = 327; continue _fun0001 }
 268:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 6;
            var1 = var9[var1];
            var7 = var8.bind(var3)(var1);
            var5 = var7.transformSticker;
            var1 = 7;
            var1 = var9[var1];
            var9 = var8.bind(var3)(var1);
            var8 = var9.pickWelcomeSticker;
            var1 = var12.id;
            var1 = var8.bind(var9)(var1);
            var6 = var5.bind(var7)(var1);
 327:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 8;
            var1 = var7[var1];
            var9 = var8.bind(var3)(var1);
            var5 = var9.isNativeMessageEligibleForEnhancedRoleColors;
            var1 = var12.author;
            var1 = var1.id;
            var18 = var5.bind(var9)(var13, var1, var16);
            var1 = {};
            var5 = 9;
            var7 = var7[var5];
            var7 = var8.bind(var3)(var7);
            var9 = var7.intl;
            var8 = var9.formatToParts;
            var7 = {};
            var7['username'] = var11;
            var11 = {};
            var13 = 'bindUserMenu';
            var11['action'] = var13;
            var13 = var12.author;
            var13 = var13.id;
            var11['userId'] = var13;
            var19 = 'username';
            var13 = null;
            if(!(var19 === var16)) { _fun0001_ip = 442; continue _fun0001 }
 439:
            var13 = var15;
 442:
            var11['linkColor'] = var13;
            var13 = null;
            if(!var18) { _fun0001_ip = 455; continue _fun0001 }
 452:
            var13 = var17;
 455:
            var11['roleColors'] = var13;
            var13 = 'dot';
            var13 = var13 === var16;
            if(!var13) { _fun0001_ip = 475; continue _fun0001 }
 471:
            var13 = var14 != var15;
 475:
            var11['shouldShowRoleDot'] = var13;
            var12 = var12.channel_id;
            var11['messageChannelId'] = var12;
            var12 = true;
            var11['medium'] = var12;
            var7['usernameOnClick'] = var11;
            var7 = var8.bind(var9)(var10, var7);
            var1['content'] = var7;
            var1['sticker'] = var6;
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var7 = var6[var5];
            var7 = var9.bind(var3)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var5 = var6[var5];
            var5 = var9.bind(var3)(var5);
            var5 = var5.t;
            var5 = var5.7Tj6HR;
            var5 = var7.bind(var8)(var5);
            var1['stickerLabel'] = var5;
            var5 = _closure1_slot1;
            var2 = 10;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            var22 = var2.bind(var3)(var4);
            var23 = var1;
            var2 = copyDataProperties(var23, var22);
            return var1;
        }
    };
    var3['createUserJoinSystemMessage'] = var2;
    return var1;
})();