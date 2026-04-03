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
            var7 = arg1;
            var12 = var7.message;
            var11 = var7.roleStyle;
            var8 = var7.theme;
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 2;
            var1 = var4[var1];
            var9 = undefined;
            var1 = var2.bind(var9)(var1);
            var6 = var1.bind(var9)(var8);
            var4 = _closure1_slot3;
            var2 = var4.getChannel;
            var1 = var12.channel_id;
            var10 = var2.bind(var4)(var1);
            var4 = _closure1_slot4;
            var2 = var4.getGuild;
            var5 = null;
            var13 = var5 == var10;
            var1 = undefined;
            if(var13) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var10.guild_id;
case 2:
            var1 = var2.bind(var4)(var1);
            var4 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 3;
            var2 = var15[var2];
            var13 = var4.bind(var9)(var2);
            var2 = var13.getMessageAuthorWithProcessedColor;
            var14 = var2.bind(var13)(var12);
            var2 = 4;
            var2 = var15[var2];
            var4 = var4.bind(var9)(var2);
            var2 = var4.resolveAlertModeColors;
            var2 = var2.bind(var4)(var8);
            var4 = var2.automodUsernameColor;
            var13 = {};
            var2 = var14.nick;
            var13['username'] = var2;
            var8 = _closure1_slot1;
            var2 = 5;
            var2 = var15[var2];
            var8 = var8.bind(var9)(var2);
            var2 = {};
            var2['message'] = var12;
            var2['author'] = var14;
            var2['roleStyle'] = var11;
            var2 = var8.bind(var9)(var2);
            var13['usernameOnClick'] = var2;
            var8 = var5 == var1;
            var2 = undefined;
            if(var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var1.name;
case 4:
            var8 = var5 != var2;
            var1 = '';
            if(!var8) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var2;
case 6:
            var13['guildName'] = var1;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 6;
            var1 = var11[var1];
            var2 = var8.bind(var9)(var1);
            var1 = {};
            var1['message'] = var12;
            var1['channel'] = var10;
            var10 = true;
            var1['isSystemDM'] = var10;
            var1['colors'] = var6;
            var2 = var2.bind(var9)(var1);
            var1 = {};
            var6 = 7;
            var6 = var11[var6];
            var6 = var8.bind(var9)(var6);
            var16 = var6.bind(var9)(var7);
            var17 = var1;
            var6 = copyDataProperties(var17, var16);
            var10 = _closure1_slot0;
            var6 = 8;
            var7 = var11[var6];
            var7 = var10.bind(var9)(var7);
            var12 = var7.intl;
            var8 = var12.formatToParts;
            var7 = var11[var6];
            var7 = var10.bind(var9)(var7);
            var7 = var7.t;
            var7 = var7.MTmH+u;
            var8 = var8.bind(var12)(var7, var13);
            var7 = 'content';
            var1[6] = var8;
            var7 = var11[var6];
            var7 = var10.bind(var9)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var11[var6];
            var6 = var10.bind(var9)(var6);
            var6 = var6.t;
            var6 = var6.hG1StD;
            var7 = var7.bind(var8)(var6);
            var6 = 'username';
            var1[5] = var7;
            var6 = var5 != var4;
            var5 = null;
            if(!var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = var4;
case 8:
            var4 = 'usernameColor';
            var1[3] = var5;
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
            var1[2] = var4;
            var17 = var1;
            var16 = var2;
            var2 = copyDataProperties(var17, var16);
            return var1;
        }
    };
    var3['createGuildReportRaidSystemMessage'] = var2;
    return var1;
})();