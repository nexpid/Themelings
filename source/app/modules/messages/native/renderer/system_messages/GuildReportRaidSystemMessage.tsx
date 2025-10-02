// app/modules/messages/native/renderer/system_messages/GuildReportRaidSystemMessage.tsx
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
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/GuildReportRaidSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createGuildReportRaidSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var15 = var8.message;
            var12 = var8.roleStyle;
            var19 = var8.theme;
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 2;
            var1 = var4[var1];
            var9 = undefined;
            var1 = var2.bind(var9)(var1);
            var6 = var1.bind(var9)(var19);
            var7 = var15.author;
            var4 = _closure1_slot3;
            var2 = var4.getChannel;
            var1 = var15.channel_id;
            var13 = var2.bind(var4)(var1);
            var4 = _closure1_slot4;
            var2 = var4.getGuild;
            var5 = null;
            var10 = var5 == var13;
            var1 = undefined;
            if(var10) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var13.guild_id;
case 2:
            var1 = var2.bind(var4)(var1);
            var14 = _closure1_slot0;
            var17 = _closure1_slot2;
            var2 = 3;
            var2 = var17[var2];
            var4 = var14.bind(var9)(var2);
            var2 = var4.getMessageAuthorWithProcessedColor;
            var4 = var2.bind(var4)(var15);
            var2 = var4.nick;
            var11 = var4.colorString;
            var16 = var4.colorStrings;
            var18 = var4.guildId;
            var4 = 4;
            var4 = var17[var4];
            var10 = var14.bind(var9)(var4);
            var4 = var10.resolveAlertModeColors;
            var4 = var4.bind(var10)(var19);
            var4 = var4.automodUsernameColor;
            var10 = 5;
            var10 = var17[var10];
            var17 = var14.bind(var9)(var10);
            var14 = var17.isNativeMessageEligibleForEnhancedRoleColors;
            var10 = var7.id;
            var17 = var14.bind(var17)(var18, var10, var12);
            var14 = {};
            var14['username'] = var2;
            var2 = {};
            var10 = 'bindUserMenu';
            var2['action'] = var10;
            var7 = var7.id;
            var2['userId'] = var7;
            var2['colorString'] = var11;
            var7 = 'username';
            var10 = null;
            if(!(var7 === var12)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var10 = var11;
case 4:
            var2['linkColor'] = var10;
            var2['roleColor'] = var11;
            var10 = null;
            if(!var17) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var10 = var16;
case 6:
            var2['roleColors'] = var10;
            var10 = 'dot';
            var10 = var10 === var12;
            if(!var10) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var10 = var5 != var11;
case 8:
            var2['shouldShowRoleDot'] = var10;
            var10 = var15.channel_id;
            var2['messageChannelId'] = var10;
            var11 = true;
            var2['medium'] = var11;
            var14['usernameOnClick'] = var2;
            var10 = var5 == var1;
            var2 = undefined;
            if(var10) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = var1.name;
case 10:
            var10 = var5 != var2;
            var1 = '';
            if(!var10) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var1 = var2;
case 12:
            var14['guildName'] = var1;
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 6;
            var1 = var12[var1];
            var2 = var10.bind(var9)(var1);
            var1 = {};
            var1['message'] = var15;
            var1['channel'] = var13;
            var1['isSystemDM'] = var11;
            var1['colors'] = var6;
            var2 = var2.bind(var9)(var1);
            var1 = {};
            var6 = 7;
            var6 = var12[var6];
            var6 = var10.bind(var9)(var6);
            var21 = var6.bind(var9)(var8);
            var22 = var1;
            var6 = copyDataProperties(var22, var21);
            var11 = _closure1_slot0;
            var6 = 8;
            var8 = var12[var6];
            var8 = var11.bind(var9)(var8);
            var13 = var8.intl;
            var10 = var13.formatToParts;
            var8 = var12[var6];
            var8 = var11.bind(var9)(var8);
            var8 = var8.t;
            var8 = var8.MTmH+v;
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
            if(!var6) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var5 = var4;
case 14:
            var4 = 'usernameColor';
            var1[var4] = var5;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 9;
            var4 = var10[var3];
            var5 = var8.bind(var9)(var4);
            var4 = var5.ensureAvatarSource;
            var6 = 10;
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
            var22 = var1;
            var21 = var2;
            var2 = copyDataProperties(var22, var21);
            return var1;
        }
    };
    var3['createGuildReportRaidSystemMessage'] = var2;
    return var1;
})();