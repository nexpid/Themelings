// app/modules/messages/native/renderer/system_messages/GuildAlertModeSystemMessage.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var10 = native3;
    var3 = native6;
    var7 = native7;
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
    var5 = var7[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var8 = var6.bind(var1)(var4);
    var5 = var8.createNativeStyleProperties;
    var4 = {};
    var9 = 5;
    var9 = var7[var9];
    var9 = var10.bind(var1)(var9);
    var9 = var9.colors;
    var9 = var9.TEXT_BRAND;
    var4['automodUsernameColor'] = var9;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var5 = 17;
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
            var1 = 6;
            var1 = var14[var1];
            var9 = undefined;
            var1 = var2.bind(var9)(var1);
            var6 = var1.bind(var9)(var5);
            var2 = var15.author;
            var7 = _closure1_slot5;
            var4 = var7.getChannel;
            var1 = var15.channel_id;
            var13 = var4.bind(var7)(var1);
            var7 = _closure1_slot0;
            var1 = 7;
            var1 = var14[var1];
            var4 = var7.bind(var9)(var1);
            var1 = var4.getMessageAuthorWithProcessedColor;
            var4 = var1.bind(var4)(var15);
            var1 = var4.nick;
            var10 = var4.colorString;
            var12 = var4.colorStrings;
            var16 = var4.guildId;
            var4 = _closure1_slot7;
            var4 = var4.bind(var9)(var5);
            var4 = var4.automodUsernameColor;
            var5 = 8;
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
            var2 = 9;
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
            var1 = 10;
            var1 = var12[var1];
            var2 = var10.bind(var9)(var1);
            var1 = {};
            var1['message'] = var15;
            var1['channel'] = var13;
            var1['isSystemDM'] = var11;
            var1['colors'] = var6;
            var2 = var2.bind(var9)(var1);
            var1 = {};
            var6 = 11;
            var6 = var12[var6];
            var6 = var10.bind(var9)(var6);
            var19 = var6.bind(var9)(var8);
            var20 = var1;
            var6 = copyDataProperties(var20, var19);
            var11 = _closure1_slot0;
            var6 = 9;
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
            if(!var6) { _fun0001_ip = 583; continue _fun0001 }
 580:
            var5 = var4;
 583:
            var4 = 'usernameColor';
            var1[var4] = var5;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 12;
            var4 = var10[var3];
            var5 = var8.bind(var9)(var4);
            var4 = var5.ensureAvatarSource;
            var6 = 13;
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
    var4 = function GuildAlertModeEnabledSystemMessage(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var8 = var1.row;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 14;
            var3 = var13[var5];
            var4 = undefined;
            var10 = var12.bind(var4)(var3);
            var9 = var10.useStateFromStores;
            var3 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var3;
            var6 = function() {
                var1 = _closure1_slot4;
                var1 = var1.roleStyle;
                return var1;
            };
            var3 = new Array(0);
            var14 = var9.bind(var10)(var7, var6, var3);
            var _closure2_slot0 = var14;
            var10 = var8.message;
            var _closure2_slot1 = var10;
            var11 = var10.author;
            var _closure2_slot2 = var11;
            var3 = var10.channel_id;
            var _closure2_slot3 = var3;
            var5 = var13[var5];
            var9 = var12.bind(var4)(var5);
            var7 = var9.useStateFromStores;
            var5 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var7.bind(var9)(var6, var3, var5);
            var3 = 7;
            var3 = var13[var3];
            var5 = var12.bind(var4)(var3);
            var3 = var5.useMessageAuthorWithProcessedColor;
            var3 = var3.bind(var5)(var10);
            var15 = var3.nick;
            var _closure2_slot4 = var15;
            var16 = var3.colorString;
            var _closure2_slot5 = var16;
            var3 = 15;
            var3 = var13[var3];
            var5 = var12.bind(var4)(var3);
            var3 = var5.useThemeContext;
            var3 = var3.bind(var5)();
            var5 = var3.theme;
            var3 = _closure1_slot7;
            var3 = var3.bind(var4)(var5);
            var7 = var3.automodUsernameColor;
            var6 = _closure1_slot3;
            var5 = var6.useMemo;
            var3 = new Array(6);
            var3[0] = var16;
            var16 = var10.channel_id;
            var3[1] = var16;
            var16 = var10.content;
            var3[2] = var16;
            var3[3] = var15;
            var3[4] = var14;
            var11 = var11.id;
            var3[5] = var11;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = {};
                    var1 = _closure2_slot4;
                    var4['username'] = var1;
                    var3 = {};
                    var1 = 'bindUserMenu';
                    var3['action'] = var1;
                    var1 = _closure2_slot2;
                    var1 = var1.id;
                    var3['userId'] = var1;
                    var1 = _closure2_slot5;
                    var3['colorString'] = var1;
                    var7 = _closure2_slot0;
                    var6 = null;
                    var5 = 'username';
                    var1 = null;
                    if(!(var5 === var7)) { _fun0003_ip = 67; continue _fun0003 }
 63:
                    var1 = _closure2_slot5;
 67:
                    var3['linkColor'] = var1;
                    var1 = _closure2_slot5;
                    var3['roleColor'] = var1;
                    var5 = _closure2_slot0;
                    var1 = 'dot';
                    var1 = var1 === var5;
                    if(!var1) { _fun0003_ip = 104; continue _fun0003 }
 96:
                    var5 = _closure2_slot5;
                    var1 = var6 != var5;
 104:
                    var3['shouldShowRoleDot'] = var1;
                    var1 = _closure2_slot1;
                    var5 = var1.channel_id;
                    var3['messageChannelId'] = var5;
                    var5 = true;
                    var3['medium'] = var5;
                    var4['usernameOnClick'] = var3;
                    var3 = var1.content;
                    var1 = '';
                    if(!(var1 !== var3)) { _fun0003_ip = 247; continue _fun0003 }
 148:
                    var3 = global;
                    var5 = var3.Date;
                    var2 = _closure2_slot1;
                    var9 = var2.content;
                    var3 = var5.prototype;
                    var3 = Object.create(var3, {constructor: {value: var5}});
                    var10 = var3;
                    var2 = new var10[var5](var9, var8);
                    var6 = var2 instanceof Object ? var2 : var3;
                    var5 = var6.toLocaleString;
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 9;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var7.bind(var2)(var3);
                    var2 = var2.intl;
                    var3 = var2.currentLocale;
                    var2 = {'hour': 'numeric', 'minute': '2-digit'};
                    var1 = var5.bind(var6)(var3, var2);
 247:
                    var4['time'] = var1;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 9;
                    var2 = var7[var1];
                    var5 = undefined;
                    var2 = var6.bind(var5)(var2);
                    var3 = var2.intl;
                    var2 = var3.formatToParts;
                    var1 = var7[var1];
                    var1 = var6.bind(var5)(var1);
                    var1 = var1.t;
                    var1 = var1.ig55n5;
                    var1 = var2.bind(var3)(var1, var4);
                    return var1;
                }
            };
            var6 = var5.bind(var6)(var2, var3);
            var2 = _closure1_slot1;
            var3 = 10;
            var3 = var13[var3];
            var5 = var2.bind(var4)(var3);
            var3 = {};
            var3['message'] = var10;
            var3['channel'] = var9;
            var9 = true;
            var3['isSystemDM'] = var9;
            var9 = {};
            var3['colors'] = var9;
            var5 = var5.bind(var4)(var3);
            var3 = _closure1_slot6;
            var1 = 16;
            var1 = var13[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['row'] = var8;
            var1['content'] = var6;
            var6 = 9;
            var8 = var13[var6];
            var8 = var12.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var6 = var13[var6];
            var6 = var12.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.hG1StL;
            var6 = var8.bind(var9)(var6);
            var1['username'] = var6;
            var6 = 12;
            var8 = var13[var6];
            var9 = var12.bind(var4)(var8);
            var8 = var9.ensureAvatarSource;
            var10 = 13;
            var10 = var13[var10];
            var11 = var12.bind(var4)(var10);
            var10 = var11.makeSource;
            var6 = var13[var6];
            var12 = var12.bind(var4)(var6);
            var6 = var12.getAutomodAvatarURL;
            var6 = var6.bind(var12)();
            var6 = var10.bind(var11)(var6);
            var6 = var8.bind(var9)(var6);
            var6 = var6.uri;
            var1['avatarURL'] = var6;
            var6 = null;
            var8 = var6 != var7;
            if(!var8) { _fun0002_ip = 512; continue _fun0002 }
 509:
            var6 = var7;
 512:
            var1['usernameColor'] = var6;
            var19 = var1;
            var18 = var5;
            var5 = copyDataProperties(var19, var18);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['GuildAlertModeEnabledSystemMessage'] = var4;
    var4 = function createGuildAlertModeDisabledSystemMessage(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var8 = arg1;
            var13 = var8.message;
            var11 = var8.roleStyle;
            var4 = var8.theme;
            var2 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 6;
            var1 = var14[var1];
            var9 = undefined;
            var1 = var2.bind(var9)(var1);
            var6 = var1.bind(var9)(var4);
            var2 = var13.author;
            var1 = _closure1_slot7;
            var1 = var1.bind(var9)(var4);
            var4 = var1.automodUsernameColor;
            var7 = _closure1_slot0;
            var1 = 7;
            var1 = var14[var1];
            var5 = var7.bind(var9)(var1);
            var1 = var5.getMessageAuthorWithProcessedColor;
            var5 = var1.bind(var5)(var13);
            var1 = var5.nick;
            var10 = var5.colorString;
            var12 = var5.colorStrings;
            var15 = var5.guildId;
            var5 = 8;
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
            if(!(var7 === var11)) { _fun0004_ip = 198; continue _fun0004 }
 195:
            var2 = var10;
 198:
            var1['linkColor'] = var2;
            var1['roleColor'] = var10;
            var2 = null;
            if(!var15) { _fun0004_ip = 216; continue _fun0004 }
 213:
            var2 = var12;
 216:
            var1['roleColors'] = var2;
            var2 = 'dot';
            var2 = var2 === var11;
            if(!var2) { _fun0004_ip = 236; continue _fun0004 }
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
            var1 = 10;
            var1 = var12[var1];
            var2 = var10.bind(var9)(var1);
            var1 = {};
            var1['message'] = var13;
            var1['channel'] = var9;
            var1['isSystemDM'] = var11;
            var1['colors'] = var6;
            var2 = var2.bind(var9)(var1);
            var1 = {};
            var6 = 11;
            var6 = var12[var6];
            var6 = var10.bind(var9)(var6);
            var18 = var6.bind(var9)(var8);
            var19 = var1;
            var6 = copyDataProperties(var19, var18);
            var11 = _closure1_slot0;
            var6 = 9;
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
            if(!var6) { _fun0004_ip = 456; continue _fun0004 }
 453:
            var5 = var4;
 456:
            var4 = 'usernameColor';
            var1[var4] = var5;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 12;
            var4 = var10[var3];
            var5 = var8.bind(var9)(var4);
            var4 = var5.ensureAvatarSource;
            var6 = 13;
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
    var3['createGuildAlertModeDisabledSystemMessage'] = var4;
    var2 = function GuildAlertModeDisabledSystemMessage(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var8 = var1.row;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 14;
            var3 = var13[var3];
            var4 = undefined;
            var9 = var12.bind(var4)(var3);
            var7 = var9.useStateFromStores;
            var3 = _closure1_slot4;
            var6 = new Array(1);
            var6[0] = var3;
            var5 = function() {
                var1 = _closure1_slot4;
                var1 = var1.roleStyle;
                return var1;
            };
            var3 = new Array(0);
            var11 = var7.bind(var9)(var6, var5, var3);
            var _closure2_slot0 = var11;
            var3 = 15;
            var3 = var13[var3];
            var5 = var12.bind(var4)(var3);
            var3 = var5.useThemeContext;
            var3 = var3.bind(var5)();
            var5 = var3.theme;
            var9 = var8.message;
            var _closure2_slot1 = var9;
            var10 = var9.author;
            var _closure2_slot2 = var10;
            var3 = 7;
            var3 = var13[var3];
            var6 = var12.bind(var4)(var3);
            var3 = var6.useMessageAuthorWithProcessedColor;
            var3 = var3.bind(var6)(var9);
            var14 = var3.nick;
            var _closure2_slot3 = var14;
            var15 = var3.colorString;
            var _closure2_slot4 = var15;
            var3 = _closure1_slot7;
            var3 = var3.bind(var4)(var5);
            var7 = var3.automodUsernameColor;
            var6 = _closure1_slot3;
            var5 = var6.useMemo;
            var3 = new Array(5);
            var3[0] = var15;
            var15 = var9.channel_id;
            var3[1] = var15;
            var3[2] = var14;
            var3[3] = var11;
            var10 = var10.id;
            var3[4] = var10;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var4 = {};
                    var1 = _closure2_slot3;
                    var4['username'] = var1;
                    var1 = {};
                    var3 = 'bindUserMenu';
                    var1['action'] = var3;
                    var3 = _closure2_slot2;
                    var3 = var3.id;
                    var1['userId'] = var3;
                    var3 = _closure2_slot4;
                    var1['colorString'] = var3;
                    var7 = _closure2_slot0;
                    var6 = null;
                    var5 = 'username';
                    var3 = null;
                    if(!(var5 === var7)) { _fun0006_ip = 67; continue _fun0006 }
 63:
                    var3 = _closure2_slot4;
 67:
                    var1['linkColor'] = var3;
                    var3 = _closure2_slot4;
                    var1['roleColor'] = var3;
                    var5 = _closure2_slot0;
                    var3 = 'dot';
                    var3 = var3 === var5;
                    if(!var3) { _fun0006_ip = 104; continue _fun0006 }
 96:
                    var5 = _closure2_slot4;
                    var3 = var6 != var5;
 104:
                    var1['shouldShowRoleDot'] = var3;
                    var2 = _closure2_slot1;
                    var2 = var2.channel_id;
                    var1['messageChannelId'] = var2;
                    var2 = true;
                    var1['medium'] = var2;
                    var4['usernameOnClick'] = var1;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 9;
                    var2 = var7[var1];
                    var5 = undefined;
                    var2 = var6.bind(var5)(var2);
                    var3 = var2.intl;
                    var2 = var3.formatToParts;
                    var1 = var7[var1];
                    var1 = var6.bind(var5)(var1);
                    var1 = var1.t;
                    var1 = var1.cyq2WF;
                    var1 = var2.bind(var3)(var1, var4);
                    return var1;
                }
            };
            var6 = var5.bind(var6)(var2, var3);
            var2 = _closure1_slot1;
            var3 = 10;
            var3 = var13[var3];
            var5 = var2.bind(var4)(var3);
            var3 = {};
            var3['message'] = var9;
            var3['channel'] = var4;
            var9 = true;
            var3['isSystemDM'] = var9;
            var9 = {};
            var3['colors'] = var9;
            var5 = var5.bind(var4)(var3);
            var3 = _closure1_slot6;
            var1 = 16;
            var1 = var13[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['row'] = var8;
            var1['content'] = var6;
            var6 = 9;
            var8 = var13[var6];
            var8 = var12.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var6 = var13[var6];
            var6 = var12.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.hG1StL;
            var6 = var8.bind(var9)(var6);
            var1['username'] = var6;
            var6 = 12;
            var8 = var13[var6];
            var9 = var12.bind(var4)(var8);
            var8 = var9.ensureAvatarSource;
            var10 = 13;
            var10 = var13[var10];
            var11 = var12.bind(var4)(var10);
            var10 = var11.makeSource;
            var6 = var13[var6];
            var12 = var12.bind(var4)(var6);
            var6 = var12.getAutomodAvatarURL;
            var6 = var6.bind(var12)();
            var6 = var10.bind(var11)(var6);
            var6 = var8.bind(var9)(var6);
            var6 = var6.uri;
            var1['avatarURL'] = var6;
            var6 = null;
            var8 = var6 != var7;
            if(!var8) { _fun0005_ip = 446; continue _fun0005 }
 443:
            var6 = var7;
 446:
            var1['usernameColor'] = var6;
            var18 = var1;
            var17 = var5;
            var5 = copyDataProperties(var18, var17);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['GuildAlertModeDisabledSystemMessage'] = var2;
    return var1;
})();