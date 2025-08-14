// app/modules/messages/native/renderer/system_messages/GuildAlertModeSystemMessage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var10.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var8 = var6.bind(var1)(var4);
    var5 = var8.createNativeStyleProperties;
    var4 = {};
    var9 = 2;
    var9 = var7[var9];
    var9 = var10.bind(var1)(var9);
    var9 = var9.colors;
    var9 = var9.TEXT_BRAND;
    var4['automodUsernameColor'] = var9;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/native/renderer/system_messages/GuildAlertModeSystemMessage.tsx';
    var5 = var6.bind(var7)(var5);
    var3['resolveAlertModeColors'] = var4;
    var4 = function createGuildAlertModeEnabledSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var8 = arg1;
            var15 = var8.message;
            var11 = var8.roleStyle;
            var5 = var8.theme;
            var2 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 3;
            var1 = var14[var1];
            var9 = undefined;
            var1 = var2.bind(var9)(var1);
            var6 = var1.bind(var9)(var5);
            var2 = var15.author;
            var7 = _closure1_slot3;
            var4 = var7.getChannel;
            var1 = var15.channel_id;
            var13 = var4.bind(var7)(var1);
            var7 = _closure1_slot0;
            var1 = 4;
            var1 = var14[var1];
            var4 = var7.bind(var9)(var1);
            var1 = var4.getMessageAuthorWithProcessedColor;
            var4 = var1.bind(var4)(var15);
            var1 = var4.nick;
            var10 = var4.colorString;
            var12 = var4.colorStrings;
            var16 = var4.guildId;
            var4 = _closure1_slot4;
            var4 = var4.bind(var9)(var5);
            var4 = var4.automodUsernameColor;
            var5 = 5;
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
            if(!(var7 === var11)) { _fun0001_ip = 217; continue _fun0001 }
 214:
            var2 = var10;
 217:
            var1['linkColor'] = var2;
            var1['roleColor'] = var10;
            var2 = null;
            if(!var16) { _fun0001_ip = 235; continue _fun0001 }
 232:
            var2 = var12;
 235:
            var1['roleColors'] = var2;
            var2 = 'dot';
            var2 = var2 === var11;
            if(!var2) { _fun0001_ip = 255; continue _fun0001 }
 251:
            var2 = var5 != var10;
 255:
            var1['shouldShowRoleDot'] = var2;
            var2 = var15.channel_id;
            var1['messageChannelId'] = var2;
            var11 = true;
            var1['medium'] = var11;
            var14['usernameOnClick'] = var1;
            var2 = var15.content;
            var1 = '';
            if(!(var1 !== var2)) { _fun0001_ip = 385; continue _fun0001 }
 295:
            var2 = global;
            var12 = var2.Date;
            var20 = var15.content;
            var10 = var12.prototype;
            var10 = Object.create(var10, {constructor: {value: var12}});
            var21 = var10;
            var2 = new var21[var12](var20, var19);
            var16 = var2 instanceof Object ? var2 : var10;
            var12 = var16.toLocaleString;
            var10 = _closure1_slot0;
            var17 = _closure1_slot2;
            var2 = 6;
            var2 = var17[var2];
            var2 = var10.bind(var9)(var2);
            var2 = var2.intl;
            var10 = var2.currentLocale;
            var2 = {'hour': 'numeric', 'minute': '2-digit'};
            var1 = var12.bind(var16)(var10, var2);
 385:
            var14['time'] = var1;
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 7;
            var1 = var12[var1];
            var2 = var10.bind(var9)(var1);
            var1 = {};
            var1['message'] = var15;
            var1['channel'] = var13;
            var1['isSystemDM'] = var11;
            var1['colors'] = var6;
            var2 = var2.bind(var9)(var1);
            var1 = {};
            var6 = 8;
            var6 = var12[var6];
            var6 = var10.bind(var9)(var6);
            var19 = var6.bind(var9)(var8);
            var20 = var1;
            var6 = copyDataProperties(var20, var19);
            var11 = _closure1_slot0;
            var6 = 6;
            var8 = var12[var6];
            var8 = var11.bind(var9)(var8);
            var13 = var8.intl;
            var10 = var13.formatToParts;
            var8 = var12[var6];
            var8 = var11.bind(var9)(var8);
            var8 = var8.t;
            var8 = var8.ig55n5;
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
            if(!var6) { _fun0001_ip = 585; continue _fun0001 }
 582:
            var5 = var4;
 585:
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
            var20 = var1;
            var19 = var2;
            var2 = copyDataProperties(var20, var19);
            return var1;
        }
    };
    var3['createGuildAlertModeEnabledSystemMessage'] = var4;
    var2 = function createGuildAlertModeDisabledSystemMessage(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var8 = arg1;
            var13 = var8.message;
            var11 = var8.roleStyle;
            var4 = var8.theme;
            var2 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 3;
            var1 = var14[var1];
            var9 = undefined;
            var1 = var2.bind(var9)(var1);
            var6 = var1.bind(var9)(var4);
            var2 = var13.author;
            var1 = _closure1_slot4;
            var1 = var1.bind(var9)(var4);
            var4 = var1.automodUsernameColor;
            var7 = _closure1_slot0;
            var1 = 4;
            var1 = var14[var1];
            var5 = var7.bind(var9)(var1);
            var1 = var5.getMessageAuthorWithProcessedColor;
            var5 = var1.bind(var5)(var13);
            var1 = var5.nick;
            var10 = var5.colorString;
            var12 = var5.colorStrings;
            var15 = var5.guildId;
            var5 = 5;
            var5 = var14[var5];
            var14 = var7.bind(var9)(var5);
            var7 = var14.isNativeMessageEligibleForEnhancedRoleColors;
            var5 = var2.id;
            var15 = var7.bind(var14)(var15, var5, var11);
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
            if(!(var7 === var11)) { _fun0002_ip = 198; continue _fun0002 }
 195:
            var2 = var10;
 198:
            var1['linkColor'] = var2;
            var1['roleColor'] = var10;
            var2 = null;
            if(!var15) { _fun0002_ip = 216; continue _fun0002 }
 213:
            var2 = var12;
 216:
            var1['roleColors'] = var2;
            var2 = 'dot';
            var2 = var2 === var11;
            if(!var2) { _fun0002_ip = 236; continue _fun0002 }
 232:
            var2 = var5 != var10;
 236:
            var1['shouldShowRoleDot'] = var2;
            var2 = var13.channel_id;
            var1['messageChannelId'] = var2;
            var11 = true;
            var1['medium'] = var11;
            var14['usernameOnClick'] = var1;
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 7;
            var1 = var12[var1];
            var2 = var10.bind(var9)(var1);
            var1 = {};
            var1['message'] = var13;
            var1['channel'] = var9;
            var1['isSystemDM'] = var11;
            var1['colors'] = var6;
            var2 = var2.bind(var9)(var1);
            var1 = {};
            var6 = 8;
            var6 = var12[var6];
            var6 = var10.bind(var9)(var6);
            var18 = var6.bind(var9)(var8);
            var19 = var1;
            var6 = copyDataProperties(var19, var18);
            var11 = _closure1_slot0;
            var6 = 6;
            var8 = var12[var6];
            var8 = var11.bind(var9)(var8);
            var13 = var8.intl;
            var10 = var13.formatToParts;
            var8 = var12[var6];
            var8 = var11.bind(var9)(var8);
            var8 = var8.t;
            var8 = var8.cyq2WF;
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
            if(!var6) { _fun0002_ip = 458; continue _fun0002 }
 455:
            var5 = var4;
 458:
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
            var19 = var1;
            var18 = var2;
            var2 = copyDataProperties(var19, var18);
            return var1;
        }
    };
    var3['createGuildAlertModeDisabledSystemMessage'] = var2;
    return var1;
})();