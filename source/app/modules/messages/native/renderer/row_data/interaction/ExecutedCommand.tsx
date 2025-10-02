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
            var14 = arg1;
            var19 = arg2;
            var13 = arg3;
            var4 = arg5;
            var1 = var14.activityInstance;
            var12 = null;
            var1 = var12 != var1;
            if(!var1) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var3 = var14.activityInstance;
            var2 = undefined;
            var1 = var2 !== var3;
case 16:
            var2 = var14.interaction;
            if(!(var12 != var2)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var2 = var14.interaction;
            var3 = var2.displayName;
            var2 = '';
            if(!(var2 === var3)) { _fun0002_ip = 9; continue _fun0002 }
case 6:
            if(var1) { _fun0002_ip = 9; continue _fun0002 }
case 18:
            var2 = undefined;
            return var2;
case 9:
            var2 = _closure1_slot8;
            var7 = undefined;
            var9 = var2.bind(var7)(var14, var19);
            var3 = var14.type;
            var2 = _closure1_slot7;
            var2 = var2.CHAT_INPUT_COMMAND;
            var23 = var3 === var2;
            if(var23) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var3 = var14.type;
            var2 = _closure1_slot7;
            var2 = var2.INTERACTION_PREMIUM_UPSELL;
            var23 = var3 === var2;
case 20:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var16 = 8;
            var2 = var10[var16];
            var3 = var8.bind(var7)(var2);
            var2 = var3.isPrimaryEntryPointCommandMessage;
            var18 = var2.bind(var3)(var14);
            var21 = 7;
            var2 = var10[var21];
            var6 = var8.bind(var7)(var2);
            var3 = var6.getUserAuthor;
            var2 = var14.interaction;
            var2 = var2.user;
            var2 = var3.bind(var6)(var2, var19);
            var11 = var2.colorString;
            var2 = var14.interaction;
            var3 = var2.displayName;
            var6 = _closure1_slot1;
            var2 = 9;
            var15 = var10[var2];
            var15 = var6.bind(var7)(var15);
            var17 = var15.internal;
            var15 = var17.resolveSemanticColor;
            var2 = var10[var2];
            var2 = var6.bind(var7)(var2);
            var2 = var2.colors;
            var6 = var2.MENTION_BACKGROUND;
            var2 = arg4;
            var6 = var15.bind(var17)(var2, var6);
            var2 = 10;
            var2 = var10[var2];
            var8 = var8.bind(var7)(var2);
            var2 = var8.getInitialInteractionMetadata;
            var2 = var2.bind(var8)(var14);
            var8 = var12 == var2;
            var15 = undefined;
            if(var8) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var15 = var2.type;
case 22:
            var10 = _closure1_slot0;
            var17 = _closure1_slot2;
            var8 = 11;
            var8 = var17[var8];
            var8 = var10.bind(var7)(var8);
            var8 = var8.InteractionTypes;
            var10 = var8.APPLICATION_COMMAND;
            var8 = null;
            if(!(var15 === var10)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var10 = var2.target_user;
            var10 = var12 != var10;
            var8 = null;
            if(!var10) { _fun0002_ip = 24; continue _fun0002 }
case 26:
            var15 = _closure1_slot4;
            var28 = var2.target_user;
            var10 = var15.prototype;
            var10 = Object.create(var10, {constructor: {value: var15}});
            var29 = var10;
            var2 = new var29[var15](var28, var27);
            var8 = var2 instanceof Object ? var2 : var10;
case 24:
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var21];
            var10 = var10.bind(var7)(var2);
            var2 = var10.getUserAuthor;
            var2 = var2.bind(var10)(var8, var19);
            var17 = var2.colorString;
            var2 = 'username';
            var2 = var2 === var13;
            var20 = var8;
            var8 = var4;
            if(!var2) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var15 = _closure1_slot3;
            var22 = var12 != var17;
            var10 = undefined;
            if(!var22) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var10 = var17;
case 29:
            var10 = var15.bind(var7)(var10);
            var8 = var4;
            if(!(var12 != var10)) { _fun0002_ip = 27; continue _fun0002 }
case 31:
            var8 = var10;
case 27:
            var10 = var4;
            if(!var2) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var15 = _closure1_slot3;
            var17 = var12 != var11;
            var2 = undefined;
            if(!var17) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var2 = var11;
case 34:
            var2 = var15.bind(var7)(var2);
            var10 = var4;
            if(!(var12 != var2)) { _fun0002_ip = 32; continue _fun0002 }
case 36:
            var10 = var2;
case 32:
            var25 = {};
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var21];
            var15 = var4.bind(var7)(var2);
            var4 = var15.getUserAuthor;
            var2 = var14.interaction;
            var2 = var2.user;
            var2 = var4.bind(var15)(var2, var19);
            var2 = var2.nick;
            var25['username'] = var2;
            var2 = {'name': 'usernameOnClick', 'action': 'bindUserMenu'};
            var4 = var14.interaction;
            var4 = var4.user;
            var4 = var4.id;
            var2['userId'] = var4;
            var4 = var14.channel_id;
            var2['messageChannelId'] = var4;
            var2['linkColor'] = var10;
            var25['usernameOnClick'] = var2;
            if(!var1) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            if(var18) { _fun0002_ip = 37; continue _fun0002 }
case 39:
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 12;
            var1 = var4[var1];
            var2 = var2.bind(var7)(var1);
            var1 = var2.isActivitiesInTextEnabled;
            var2 = var1.bind(var2)(var19);
            var4 = _closure1_slot0;
            var22 = _closure1_slot2;
            var1 = 13;
            var15 = var22[var1];
            var15 = var4.bind(var7)(var15);
            var17 = var15.intl;
            var15 = var17.formatToParts;
            var1 = var22[var1];
            var1 = var4.bind(var7)(var1);
            var1 = var1.t;
            if(var2) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var4 = var1.k964Wl;
            var2 = {};
            var28 = var2;
            var27 = var25;
            var22 = copyDataProperties(var28, var27);
            var4 = var15.bind(var17)(var4, var2);
            _fun0002_ip = 42; continue _fun0002;
case 40:
            var2 = var1.R/mrBg;
            var1 = {};
            var28 = var1;
            var27 = var25;
            var22 = copyDataProperties(var28, var27);
            var24 = {};
            var22 = 'bindTapActivityText';
            var24['action'] = var22;
            var22 = var14.author;
            var22 = var22.id;
            var24['applicationUserId'] = var22;
            var22 = var14.channel_id;
            var24['messageChannelId'] = var22;
            var22 = 'activityTextOnClick';
            var1[var22] = var24;
            var4 = var15.bind(var17)(var2, var1);
case 42:
            _fun0002_ip = 43; continue _fun0002;
case 37:
            var24 = var3;
            if(!var18) { _fun0002_ip = 44; continue _fun0002 }
case 45:
            var2 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 14;
            var1 = var15[var1];
            var2 = var2.bind(var7)(var1);
            var1 = var2.formatPrimaryEntryPointCommandName;
            var24 = var1.bind(var2)(var3);
case 44:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 13;
            var15 = var2[var1];
            var15 = var3.bind(var7)(var15);
            var17 = var15.intl;
            var15 = var17.formatToParts;
            var2 = var2[var1];
            var2 = var3.bind(var7)(var2);
            var2 = var2.t;
            var3 = var2.SSrolp;
            var2 = {};
            var28 = var2;
            var27 = var25;
            var22 = copyDataProperties(var28, var27);
            var22 = 'commandName';
            var2[var22] = var24;
            if(!(var12 != var19)) { _fun0002_ip = 46; continue _fun0002 }
case 47:
            if(var23) { _fun0002_ip = 48; continue _fun0002 }
case 49:
            if(var18) { _fun0002_ip = 48; continue _fun0002 }
case 46:
            var18 = {};
            _fun0002_ip = 50; continue _fun0002;
case 48:
            var23 = {'name': 'commandNameOnClick', 'action': 'bindTapCommandName'};
            var26 = var14.interaction;
            var26 = var26.user;
            var26 = var26.id;
            var23['userId'] = var26;
            var26 = var14.id;
            var23['messageId'] = var26;
            var26 = var14.author;
            var26 = var26.id;
            var23['applicationUserId'] = var26;
            var26 = var14.type;
            var23['messageType'] = var26;
            var26 = var14.channel_id;
            var23['messageChannelId'] = var26;
            var18 = var23;
case 50:
            var23 = 'commandNameOnClick';
            var2[var23] = var18;
            var4 = var15.bind(var17)(var3, var2);
            if(!(var12 != var20)) { _fun0002_ip = 43; continue _fun0002 }
case 51:
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var2 = var17[var1];
            var2 = var18.bind(var7)(var2);
            var15 = var2.intl;
            var3 = var15.formatToParts;
            var1 = var17[var1];
            var1 = var18.bind(var7)(var1);
            var1 = var1.t;
            var2 = var1.mqKdCA;
            var1 = {};
            var28 = var1;
            var27 = var25;
            var25 = copyDataProperties(var28, var27);
            var1[var22] = var24;
            var22 = {};
            var1[var23] = var22;
            var17 = var17[var21];
            var18 = var18.bind(var7)(var17);
            var17 = var18.getUserAuthor;
            var17 = var17.bind(var18)(var20, var19);
            var18 = var17.nick;
            var17 = 'targetUsername';
            var1[var17] = var18;
            var18 = {'name': 'targetUsernameOnClick', 'action': 'bindUserMenu'};
            var17 = 'targetUsernameOnClick';
            var21 = var12 == var20;
            var19 = undefined;
            if(var21) { _fun0002_ip = 52; continue _fun0002 }
case 53:
            var19 = var20.id;
case 52:
            var18['userId'] = var19;
            var19 = var14.channel_id;
            var18['messageChannelId'] = var19;
            var18['linkColor'] = var8;
            var1[var17] = var18;
            var4 = var3.bind(var15)(var2, var1);
case 43:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 15;
            var1 = var3[var1];
            var1 = var2.bind(var7)(var1);
            var17 = var1.ActivitiesControllerIconMobileExperiment;
            var15 = var17.getCurrentConfig;
            var2 = {};
            var1 = 'ExecutedCommandNative';
            var2['location'] = var1;
            var1 = {};
            var3 = true;
            var1['autoTrackExposure'] = var3;
            var1 = var15.bind(var17)(var2, var1);
            var2 = var1.enabled;
            if(!var2) { _fun0002_ip = 54; continue _fun0002 }
case 55:
            var15 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var16];
            var15 = var15.bind(var7)(var1);
            var1 = var15.isPrimaryEntryPointCommandMessage;
            var2 = var1.bind(var15)(var14);
case 54:
            var1 = {};
            var14 = var14.interaction;
            var14 = var14.user;
            var14 = var14.id;
            var1['userId'] = var14;
            var1['usernameColor'] = var10;
            var14 = _closure1_slot3;
            var15 = var12 != var11;
            var10 = undefined;
            if(!var15) { _fun0002_ip = 56; continue _fun0002 }
case 57:
            var10 = var11;
case 56:
            var14 = var14.bind(var7)(var10);
            var15 = var12 != var14;
            var10 = null;
            if(!var15) { _fun0002_ip = 58; continue _fun0002 }
case 59:
            var10 = var14;
case 58:
            var1['roleColor'] = var10;
            var10 = 'dot';
            var10 = var10 === var13;
            if(!var10) { _fun0002_ip = 60; continue _fun0002 }
case 61:
            var10 = var12 != var11;
case 60:
            var1['shouldShowRoleDot'] = var10;
            var1['avatarURL'] = var9;
            var1['targetUsernameColor'] = var8;
            var1['content'] = var4;
            var4 = {'color': null, 'borderRadius': 4, 'spaceAround': true};
            var5 = _closure1_slot3;
            var5 = var5.bind(var7)(var6);
            var4['color'] = var5;
            var1['commandNameBackgroundStyles'] = var4;
            var1['showAppsIcon'] = var3;
            var1['showControllerIcon'] = var2;
            return var1;
        }
    };
    var3['createExecutedCommand'] = var2;
    return var1;
})();