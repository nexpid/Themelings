// app/modules/messages/native/renderer/row_data/interaction/ExecutedCommand.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function getCommandUserAvatar(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var10 = arg1;
            var7 = arg2;
            var2 = var10.interaction;
            var1 = null;
            var3 = var1 == var2;
            var6 = undefined;
            var8 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = var2.user;
case 2:
            var5 = _closure1_slot6;
            var3 = var5.getUser;
            var9 = var1 == var8;
            var2 = undefined;
            if(var9) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var8.id;
case 4:
            var9 = var3.bind(var5)(var2);
            if(!(var1 == var9)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            return var6;
case 6:
            var8 = var7;
            if(!(var1 == var8)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = _closure1_slot5;
            var3 = var5.getChannel;
            var2 = var10.getChannelId;
            var2 = var2.bind(var10)();
            var8 = var3.bind(var5)(var2);
case 8:
            var2 = {};
            var2['user'] = var9;
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 7;
            var3 = var10[var3];
            var5 = var5.bind(var6)(var3);
            var3 = var5.getUserAuthor;
            var3 = var3.bind(var5)(var9, var8);
            var3 = var3.guildMemberAvatar;
            var2['guildMemberAvatar'] = var3;
            var5 = var1 == var7;
            var3 = undefined;
            if(var5) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = var7.getGuildId;
            var3 = var5.bind(var7)();
case 10:
            var2['guildId'] = var3;
            var7 = var2.user;
            var9 = var2.guildMemberAvatar;
            var8 = var2.guildId;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 5;
            var2 = var5[var2];
            var3 = var3.bind(var6)(var2);
            var2 = var3.ensureAvatarSource;
            if(!(var1 != var9)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            if(!(var1 == var8)) { _fun0001_ip = 14; continue _fun0001 }
case 12:
            var1 = var7.getAvatarSource;
            var1 = var1.bind(var7)(var6);
            _fun0001_ip = 15; continue _fun0001;
case 14:
            var5 = _closure1_slot1;
            var10 = _closure1_slot2;
            var4 = 6;
            var4 = var10[var4];
            var6 = var5.bind(var6)(var4);
            var5 = var6.getGuildMemberAvatarSource;
            var4 = {};
            var10 = var7.id;
            var4['userId'] = var10;
            var4['avatar'] = var9;
            var4['guildId'] = var8;
            var1 = var5.bind(var6)(var4, var7);
case 15:
            var1 = var2.bind(var3)(var1);
            var1 = var1.uri;
            return var1;
        }
    };
    var _closure1_slot8 = var1;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.processColor;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageTypes;
    var _closure1_slot7 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/interaction/ExecutedCommand.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createExecutedCommand(arg1, arg2, arg3, arg4, arg5) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var10 = arg1;
            var20 = arg2;
            var14 = arg3;
            var9 = arg5;
            var1 = var10.activityInstance;
            var18 = null;
            var1 = var18 != var1;
            if(!var1) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var3 = var10.activityInstance;
            var2 = undefined;
            var1 = var2 !== var3;
case 16:
            var2 = var10.interaction;
            if(!(var18 != var2)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var2 = var10.interaction;
            var3 = var2.displayName;
            var2 = '';
            if(!(var2 === var3)) { _fun0002_ip = 9; continue _fun0002 }
case 6:
            if(var1) { _fun0002_ip = 9; continue _fun0002 }
case 18:
            var2 = undefined;
            return var2;
case 9:
            var3 = _closure1_slot8;
            var5 = undefined;
            var7 = var3.bind(var5)(var10, var20);
            var4 = var10.type;
            var3 = _closure1_slot7;
            var3 = var3.CHAT_INPUT_COMMAND;
            var24 = var4 === var3;
            if(var24) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var4 = var10.type;
            var3 = _closure1_slot7;
            var3 = var3.INTERACTION_PREMIUM_UPSELL;
            var24 = var4 === var3;
case 20:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 8;
            var3 = var8[var3];
            var4 = var6.bind(var5)(var3);
            var3 = var4.isPrimaryEntryPointCommandMessage;
            var15 = var3.bind(var4)(var10);
            var22 = 7;
            var3 = var8[var22];
            var11 = var6.bind(var5)(var3);
            var4 = var11.getUserAuthor;
            var3 = var10.interaction;
            var3 = var3.user;
            var3 = var4.bind(var11)(var3, var20);
            var13 = var3.colorString;
            var26 = var3.colorStrings;
            var3 = var10.interaction;
            var12 = var3.displayName;
            var4 = _closure1_slot1;
            var3 = 9;
            var11 = var8[var3];
            var11 = var4.bind(var5)(var11);
            var16 = var11.internal;
            var11 = var16.resolveSemanticColor;
            var3 = var8[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.colors;
            var4 = var3.MENTION_BACKGROUND;
            var3 = arg4;
            var4 = var11.bind(var16)(var3, var4);
            var3 = 10;
            var3 = var8[var3];
            var6 = var6.bind(var5)(var3);
            var3 = var6.getInitialInteractionMetadata;
            var3 = var3.bind(var6)(var10);
            var6 = var18 == var3;
            var11 = undefined;
            if(var6) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var11 = var3.type;
case 22:
            var8 = _closure1_slot0;
            var16 = _closure1_slot2;
            var6 = 11;
            var6 = var16[var6];
            var6 = var8.bind(var5)(var6);
            var6 = var6.InteractionTypes;
            var8 = var6.APPLICATION_COMMAND;
            var6 = null;
            if(!(var11 === var8)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var8 = var3.target_user;
            var8 = var18 != var8;
            var6 = null;
            if(!var8) { _fun0002_ip = 24; continue _fun0002 }
case 26:
            var11 = _closure1_slot4;
            var30 = var3.target_user;
            var8 = var11.prototype;
            var8 = Object.create(var8, {constructor: {value: var11}});
            var31 = var8;
            var3 = new var31[var11](var30, var29);
            var6 = var3 instanceof Object ? var3 : var8;
case 24:
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var22];
            var8 = var8.bind(var5)(var3);
            var3 = var8.getUserAuthor;
            var3 = var3.bind(var8)(var6, var20);
            var17 = var3.colorString;
            var23 = var3.colorStrings;
            var3 = 'username';
            var3 = var3 === var14;
            var21 = var6;
            var6 = var9;
            if(!var3) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var11 = _closure1_slot3;
            var16 = var18 != var17;
            var8 = undefined;
            if(!var16) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var8 = var17;
case 29:
            var8 = var11.bind(var5)(var8);
            var6 = var9;
            if(!(var18 != var8)) { _fun0002_ip = 27; continue _fun0002 }
case 31:
            var6 = var8;
case 27:
            var8 = var9;
            if(!var3) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var11 = _closure1_slot3;
            var16 = var18 != var13;
            var3 = undefined;
            if(!var16) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var3 = var13;
case 34:
            var3 = var11.bind(var5)(var3);
            var8 = var9;
            if(!(var18 != var3)) { _fun0002_ip = 32; continue _fun0002 }
case 36:
            var8 = var3;
case 32:
            var9 = var18 == var20;
            var3 = undefined;
            if(var9) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var9 = var20.getGuildId;
            var3 = var9.bind(var20)();
case 37:
            var9 = var10.interaction;
            var9 = var9.user;
            var16 = var9.id;
            var19 = _closure1_slot0;
            var11 = _closure1_slot2;
            var25 = 12;
            var9 = var11[var25];
            var27 = var19.bind(var5)(var9);
            var9 = var27.isNativeMessageEligibleForEnhancedRoleColors;
            var9 = var9.bind(var27)(var3, var16);
            var11 = var11[var25];
            var27 = var19.bind(var5)(var11);
            var19 = var27.isNativeMessageEligibleForEnhancedRoleColors;
            var28 = var18 == var21;
            var11 = var3;
            var3 = undefined;
            if(var28) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var3 = var21.id;
case 39:
            var3 = var19.bind(var27)(var11, var3);
            var11 = null;
            if(!var9) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var19 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var25];
            var19 = var19.bind(var5)(var9);
            var9 = var19.processColorStrings;
            var11 = var9.bind(var19)(var26);
case 41:
            var19 = null;
            if(!var3) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var25];
            var9 = var9.bind(var5)(var3);
            var3 = var9.processColorStrings;
            var19 = var3.bind(var9)(var23);
case 43:
            var9 = {};
            var23 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var22];
            var25 = var23.bind(var5)(var3);
            var23 = var25.getUserAuthor;
            var3 = var10.interaction;
            var3 = var3.user;
            var3 = var23.bind(var25)(var3, var20);
            var3 = var3.nick;
            var9['username'] = var3;
            var3 = {'name': 'usernameOnClick', 'action': 'bindUserMenu'};
            var3['userId'] = var16;
            var16 = var10.channel_id;
            var3['messageChannelId'] = var16;
            var3['linkColor'] = var8;
            var23 = _closure1_slot3;
            var25 = var18 != var13;
            var16 = undefined;
            if(!var25) { _fun0002_ip = 45; continue _fun0002 }
case 46:
            var16 = var13;
case 45:
            var23 = var23.bind(var5)(var16);
            var25 = var18 != var23;
            var16 = null;
            if(!var25) { _fun0002_ip = 47; continue _fun0002 }
case 48:
            var16 = var23;
case 47:
            var3['roleColor'] = var16;
            var3['roleColors'] = var11;
            var11 = 'dot';
            var16 = var11 === var14;
            var11 = var16;
            if(!var16) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            var11 = var18 != var13;
case 49:
            var3['shouldShowRoleDot'] = var11;
            var9['usernameOnClick'] = var3;
            if(!var1) { _fun0002_ip = 51; continue _fun0002 }
case 52:
            if(var15) { _fun0002_ip = 51; continue _fun0002 }
case 53:
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 13;
            var1 = var11[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.isActivitiesInTextEnabled;
            var3 = var1.bind(var3)(var20);
            var11 = _closure1_slot0;
            var23 = _closure1_slot2;
            var1 = 14;
            var13 = var23[var1];
            var13 = var11.bind(var5)(var13);
            var14 = var13.intl;
            var13 = var14.formatToParts;
            var1 = var23[var1];
            var1 = var11.bind(var5)(var1);
            var1 = var1.t;
            if(var3) { _fun0002_ip = 54; continue _fun0002 }
case 55:
            var11 = var1.k964Wm;
            var3 = {};
            var30 = var3;
            var29 = var9;
            var23 = copyDataProperties(var30, var29);
            var3 = var13.bind(var14)(var11, var3);
            _fun0002_ip = 56; continue _fun0002;
case 54:
            var11 = var1.R/mrBi;
            var1 = {};
            var30 = var1;
            var29 = var9;
            var23 = copyDataProperties(var30, var29);
            var25 = {};
            var23 = 'bindTapActivityText';
            var25['action'] = var23;
            var23 = var10.author;
            var23 = var23.id;
            var25['applicationUserId'] = var23;
            var23 = var10.channel_id;
            var25['messageChannelId'] = var23;
            var23 = 'activityTextOnClick';
            var1[22] = var25;
            var3 = var13.bind(var14)(var11, var1);
case 56:
            _fun0002_ip = 57; continue _fun0002;
case 51:
            var25 = var12;
            if(!var15) { _fun0002_ip = 58; continue _fun0002 }
case 59:
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 15;
            var1 = var13[var1];
            var11 = var11.bind(var5)(var1);
            var1 = var11.formatPrimaryEntryPointCommandName;
            var25 = var1.bind(var11)(var12);
case 58:
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 14;
            var13 = var11[var1];
            var13 = var12.bind(var5)(var13);
            var14 = var13.intl;
            var13 = var14.formatToParts;
            var11 = var11[var1];
            var11 = var12.bind(var5)(var11);
            var11 = var11.t;
            var12 = var11.SSrolr;
            var11 = {};
            var30 = var11;
            var29 = var9;
            var23 = copyDataProperties(var30, var29);
            var23 = 'commandName';
            var11[22] = var25;
            if(!(var18 != var20)) { _fun0002_ip = 60; continue _fun0002 }
case 61:
            if(var24) { _fun0002_ip = 62; continue _fun0002 }
case 63:
            if(var15) { _fun0002_ip = 62; continue _fun0002 }
case 60:
            var15 = {};
            _fun0002_ip = 64; continue _fun0002;
case 62:
            var24 = {'name': 'commandNameOnClick', 'action': 'bindTapCommandName'};
            var26 = var10.interaction;
            var26 = var26.user;
            var26 = var26.id;
            var24['userId'] = var26;
            var26 = var10.id;
            var24['messageId'] = var26;
            var26 = var10.author;
            var26 = var26.id;
            var24['applicationUserId'] = var26;
            var26 = var10.type;
            var24['messageType'] = var26;
            var26 = var10.channel_id;
            var24['messageChannelId'] = var26;
            var15 = var24;
case 64:
            var24 = 'commandNameOnClick';
            var11[23] = var15;
            var3 = var13.bind(var14)(var12, var11);
            if(!(var18 != var21)) { _fun0002_ip = 57; continue _fun0002 }
case 65:
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = var14[var1];
            var11 = var15.bind(var5)(var11);
            var13 = var11.intl;
            var12 = var13.formatToParts;
            var1 = var14[var1];
            var1 = var15.bind(var5)(var1);
            var1 = var1.t;
            var11 = var1.mqKdCM;
            var1 = {};
            var30 = var1;
            var29 = var9;
            var26 = copyDataProperties(var30, var29);
            var1[22] = var25;
            var23 = {};
            var1[23] = var23;
            var14 = var14[var22];
            var15 = var15.bind(var5)(var14);
            var14 = var15.getUserAuthor;
            var14 = var14.bind(var15)(var21, var20);
            var15 = var14.nick;
            var14 = 'targetUsername';
            var1[13] = var15;
            var15 = {'name': 'targetUsernameOnClick', 'action': 'bindUserMenu'};
            var14 = 'targetUsernameOnClick';
            var22 = var18 == var21;
            var20 = undefined;
            if(var22) { _fun0002_ip = 66; continue _fun0002 }
case 67:
            var20 = var21.id;
case 66:
            var15['userId'] = var20;
            var20 = var10.channel_id;
            var15['messageChannelId'] = var20;
            var15['linkColor'] = var6;
            var21 = _closure1_slot3;
            var22 = var18 != var17;
            var20 = undefined;
            if(!var22) { _fun0002_ip = 68; continue _fun0002 }
case 69:
            var20 = var17;
case 68:
            var21 = var21.bind(var5)(var20);
            var22 = var18 != var21;
            var20 = null;
            if(!var22) { _fun0002_ip = 70; continue _fun0002 }
case 71:
            var20 = var21;
case 70:
            var15['roleColor'] = var20;
            var15['roleColors'] = var19;
            if(!var16) { _fun0002_ip = 72; continue _fun0002 }
case 73:
            var16 = var18 != var17;
case 72:
            var15['shouldShowRoleDot'] = var16;
            var1[13] = var15;
            var3 = var12.bind(var13)(var11, var1);
case 57:
            var1 = {};
            var10 = var10.interaction;
            var10 = var10.user;
            var10 = var10.id;
            var1['userId'] = var10;
            var9 = var9.username;
            var1['username'] = var9;
            var1['usernameColor'] = var8;
            var1['avatarURL'] = var7;
            var1['targetUsernameColor'] = var6;
            var1['content'] = var3;
            var3 = {'color': null, 'borderRadius': 4, 'spaceAround': true};
            var2 = _closure1_slot3;
            var2 = var2.bind(var5)(var4);
            var3['color'] = var2;
            var2 = true;
            var1['commandNameBackgroundStyles'] = var3;
            var1['showAppsIcon'] = var2;
            return var1;
        }
    };
    var3['createExecutedCommand'] = var2;
    return var1;
})();