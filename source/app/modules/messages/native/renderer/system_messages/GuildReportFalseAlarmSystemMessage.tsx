// app/modules/messages/native/renderer/system_messages/GuildReportFalseAlarmSystemMessage.tsx
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
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/GuildReportFalseAlarmSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createGuildReportFalseAlarmSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var8 = arg1;
            var15 = var8.message;
            var11 = var8.roleStyle;
            var17 = var8.theme;
            var2 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 1;
            var1 = var14[var1];
            var9 = undefined;
            var1 = var2.bind(var9)(var1);
            var6 = var1.bind(var9)(var17);
            var2 = var15.author;
            var5 = _closure1_slot3;
            var4 = var5.getChannel;
            var1 = var15.channel_id;
            var13 = var4.bind(var5)(var1);
            var7 = _closure1_slot0;
            var1 = 2;
            var1 = var14[var1];
            var4 = var7.bind(var9)(var1);
            var1 = var4.getMessageAuthorWithProcessedColor;
            var4 = var1.bind(var4)(var15);
            var1 = var4.nick;
            var10 = var4.colorString;
            var12 = var4.colorStrings;
            var16 = var4.guildId;
            var4 = 3;
            var4 = var14[var4];
            var5 = var7.bind(var9)(var4);
            var4 = var5.resolveAlertModeColors;
            var4 = var4.bind(var5)(var17);
            var4 = var4.automodUsernameColor;
            var5 = 4;
            var5 = var14[var5];
            var14 = var7.bind(var9)(var5);
            var7 = var14.isNativeMessageEligibleForEnhancedRoleColors;
            var5 = var2.id;
            var16 = var7.bind(var14)(var16, var5, var11);
            var14 = {};
            var14['username'] = var1;
            var1 = {};
            var5 = 'bindUserMenu';
            var1['action'] = var5;
            var2 = var2.id;
            var1['userId'] = var2;
            var1['colorString'] = var10;
            var5 = null;
            var7 = 'username';
            var2 = null;
            if(!(var7 === var11)) { _fun0001_ip = 231; continue _fun0001 }
 228:
            var2 = var10;
 231:
            var1['linkColor'] = var2;
            var1['roleColor'] = var10;
            var2 = null;
            if(!var16) { _fun0001_ip = 249; continue _fun0001 }
 246:
            var2 = var12;
 249:
            var1['roleColors'] = var2;
            var2 = 'dot';
            var2 = var2 === var11;
            if(!var2) { _fun0001_ip = 269; continue _fun0001 }
 265:
            var2 = var5 != var10;
 269:
            var1['shouldShowRoleDot'] = var2;
            var2 = var15.channel_id;
            var1['messageChannelId'] = var2;
            var11 = true;
            var1['medium'] = var11;
            var14['usernameOnClick'] = var1;
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 5;
            var1 = var12[var1];
            var2 = var10.bind(var9)(var1);
            var1 = {};
            var1['message'] = var15;
            var1['channel'] = var13;
            var1['isSystemDM'] = var11;
            var1['colors'] = var6;
            var2 = var2.bind(var9)(var1);
            var1 = {};
            var6 = 6;
            var6 = var12[var6];
            var6 = var10.bind(var9)(var6);
            var19 = var6.bind(var9)(var8);
            var20 = var1;
            var6 = copyDataProperties(var20, var19);
            var11 = _closure1_slot0;
            var6 = 7;
            var8 = var12[var6];
            var8 = var11.bind(var9)(var8);
            var13 = var8.intl;
            var10 = var13.formatToParts;
            var8 = var12[var6];
            var8 = var11.bind(var9)(var8);
            var8 = var8.t;
            var8 = var8.21+uW1;
            var10 = var10.bind(var13)(var8, var14);
            var8 = 'content';
            var1[var8] = var10;
            var8 = var12[var6];
            var8 = var11.bind(var9)(var8);
            var10 = var8.intl;
            var8 = var10.string;
            var6 = var12[var6];
            var6 = var11.bind(var9)(var6);
            var6 = var6.t;
            var6 = var6.hG1StL;
            var6 = var8.bind(var10)(var6);
            var1[var7] = var6;
            var6 = var5 != var4;
            var5 = null;
            if(!var6) { _fun0001_ip = 491; continue _fun0001 }
 488:
            var5 = var4;
 491:
            var4 = 'usernameColor';
            var1[var4] = var5;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 8;
            var4 = var10[var3];
            var5 = var8.bind(var9)(var4);
            var4 = var5.ensureAvatarSource;
            var6 = 9;
            var6 = var10[var6];
            var7 = var8.bind(var9)(var6);
            var6 = var7.makeSource;
            var3 = var10[var3];
            var8 = var8.bind(var9)(var3);
            var3 = var8.getAutomodAvatarURL;
            var3 = var3.bind(var8)();
            var3 = var6.bind(var7)(var3);
            var3 = var4.bind(var5)(var3);
            var4 = var3.uri;
            var3 = 'avatarURL';
            var1[var3] = var4;
            var20 = var1;
            var19 = var2;
            var2 = copyDataProperties(var20, var19);
            return var1;
        }
    };
    var3['createGuildReportFalseAlarmSystemMessage'] = var2;
    return var1;
})();