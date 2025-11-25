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
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/interaction/ExecutedCommand.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createExecutedCommand(arg1, arg2, arg3, arg4, arg5) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var12 = arg1;
            var18 = arg2;
            var11 = arg3;
            var13 = arg5;
            var1 = var12.activityInstance;
            var10 = null;
            var1 = var10 != var1;
            if(!var1) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var3 = var12.activityInstance;
            var2 = undefined;
            var1 = var2 !== var3;
case 16:
            var2 = var12.interaction;
            if(!(var10 != var2)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var2 = var12.interaction;
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
            var7 = var3.bind(var5)(var12, var18);
            var4 = var12.type;
            var3 = _closure1_slot7;
            var3 = var3.CHAT_INPUT_COMMAND;
            var22 = var4 === var3;
            if(var22) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var4 = var12.type;
            var3 = _closure1_slot7;
            var3 = var3.INTERACTION_PREMIUM_UPSELL;
            var22 = var4 === var3;
case 20:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 8;
            var3 = var8[var3];
            var4 = var6.bind(var5)(var3);
            var3 = var4.isPrimaryEntryPointCommandMessage;
            var17 = var3.bind(var4)(var12);
            var20 = 7;
            var3 = var8[var20];
            var9 = var6.bind(var5)(var3);
            var4 = var9.getUserAuthor;
            var3 = var12.interaction;
            var3 = var3.user;
            var3 = var4.bind(var9)(var3, var18);
            var9 = var3.colorString;
            var3 = var12.interaction;
            var14 = var3.displayName;
            var4 = _closure1_slot1;
            var3 = 9;
            var15 = var8[var3];
            var15 = var4.bind(var5)(var15);
            var16 = var15.internal;
            var15 = var16.resolveSemanticColor;
            var3 = var8[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.colors;
            var4 = var3.MENTION_BACKGROUND;
            var3 = arg4;
            var4 = var15.bind(var16)(var3, var4);
            var3 = 10;
            var3 = var8[var3];
            var6 = var6.bind(var5)(var3);
            var3 = var6.getInitialInteractionMetadata;
            var3 = var3.bind(var6)(var12);
            var6 = var10 == var3;
            var15 = undefined;
            if(var6) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var15 = var3.type;
case 22:
            var8 = _closure1_slot0;
            var16 = _closure1_slot2;
            var6 = 11;
            var6 = var16[var6];
            var6 = var8.bind(var5)(var6);
            var6 = var6.InteractionTypes;
            var8 = var6.APPLICATION_COMMAND;
            var6 = null;
            if(!(var15 === var8)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var8 = var3.target_user;
            var8 = var10 != var8;
            var6 = null;
            if(!var8) { _fun0002_ip = 24; continue _fun0002 }
case 26:
            var15 = _closure1_slot4;
            var27 = var3.target_user;
            var8 = var15.prototype;
            var8 = Object.create(var8, {constructor: {value: var15}});
            var28 = var8;
            var3 = new var28[var15](var27, var26);
            var6 = var3 instanceof Object ? var3 : var8;
case 24:
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var20];
            var8 = var8.bind(var5)(var3);
            var3 = var8.getUserAuthor;
            var3 = var3.bind(var8)(var6, var18);
            var16 = var3.colorString;
            var3 = 'username';
            var3 = var3 === var11;
            var19 = var6;
            var6 = var13;
            if(!var3) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var15 = _closure1_slot3;
            var21 = var10 != var16;
            var8 = undefined;
            if(!var21) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var8 = var16;
case 29:
            var8 = var15.bind(var5)(var8);
            var6 = var13;
            if(!(var10 != var8)) { _fun0002_ip = 27; continue _fun0002 }
case 31:
            var6 = var8;
case 27:
            var8 = var13;
            if(!var3) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var15 = _closure1_slot3;
            var16 = var10 != var9;
            var3 = undefined;
            if(!var16) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var3 = var9;
case 34:
            var3 = var15.bind(var5)(var3);
            var8 = var13;
            if(!(var10 != var3)) { _fun0002_ip = 32; continue _fun0002 }
case 36:
            var8 = var3;
case 32:
            var24 = {};
            var13 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var20];
            var15 = var13.bind(var5)(var3);
            var13 = var15.getUserAuthor;
            var3 = var12.interaction;
            var3 = var3.user;
            var3 = var13.bind(var15)(var3, var18);
            var3 = var3.nick;
            var24['username'] = var3;
            var3 = {'name': 'usernameOnClick', 'action': 'bindUserMenu'};
            var13 = var12.interaction;
            var13 = var13.user;
            var13 = var13.id;
            var3['userId'] = var13;
            var13 = var12.channel_id;
            var3['messageChannelId'] = var13;
            var3['linkColor'] = var8;
            var24['usernameOnClick'] = var3;
            if(!var1) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            if(var17) { _fun0002_ip = 37; continue _fun0002 }
case 39:
            var3 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 12;
            var1 = var13[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.isActivitiesInTextEnabled;
            var3 = var1.bind(var3)(var18);
            var13 = _closure1_slot0;
            var21 = _closure1_slot2;
            var1 = 13;
            var15 = var21[var1];
            var15 = var13.bind(var5)(var15);
            var16 = var15.intl;
            var15 = var16.formatToParts;
            var1 = var21[var1];
            var1 = var13.bind(var5)(var1);
            var1 = var1.t;
            if(var3) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var13 = var1.k964Wm;
            var3 = {};
            var27 = var3;
            var26 = var24;
            var21 = copyDataProperties(var27, var26);
            var3 = var15.bind(var16)(var13, var3);
            _fun0002_ip = 42; continue _fun0002;
case 40:
            var13 = var1.R/mrBi;
            var1 = {};
            var27 = var1;
            var26 = var24;
            var21 = copyDataProperties(var27, var26);
            var23 = {};
            var21 = 'bindTapActivityText';
            var23['action'] = var21;
            var21 = var12.author;
            var21 = var21.id;
            var23['applicationUserId'] = var21;
            var21 = var12.channel_id;
            var23['messageChannelId'] = var21;
            var21 = 'activityTextOnClick';
            var1[var21] = var23;
            var3 = var15.bind(var16)(var13, var1);
case 42:
            _fun0002_ip = 43; continue _fun0002;
case 37:
            var23 = var14;
            if(!var17) { _fun0002_ip = 44; continue _fun0002 }
case 45:
            var13 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 14;
            var1 = var15[var1];
            var13 = var13.bind(var5)(var1);
            var1 = var13.formatPrimaryEntryPointCommandName;
            var23 = var1.bind(var13)(var14);
case 44:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 13;
            var15 = var13[var1];
            var15 = var14.bind(var5)(var15);
            var16 = var15.intl;
            var15 = var16.formatToParts;
            var13 = var13[var1];
            var13 = var14.bind(var5)(var13);
            var13 = var13.t;
            var14 = var13.SSrolr;
            var13 = {};
            var27 = var13;
            var26 = var24;
            var21 = copyDataProperties(var27, var26);
            var21 = 'commandName';
            var13[var21] = var23;
            if(!(var10 != var18)) { _fun0002_ip = 46; continue _fun0002 }
case 47:
            if(var22) { _fun0002_ip = 48; continue _fun0002 }
case 49:
            if(var17) { _fun0002_ip = 48; continue _fun0002 }
case 46:
            var17 = {};
            _fun0002_ip = 50; continue _fun0002;
case 48:
            var22 = {'name': 'commandNameOnClick', 'action': 'bindTapCommandName'};
            var25 = var12.interaction;
            var25 = var25.user;
            var25 = var25.id;
            var22['userId'] = var25;
            var25 = var12.id;
            var22['messageId'] = var25;
            var25 = var12.author;
            var25 = var25.id;
            var22['applicationUserId'] = var25;
            var25 = var12.type;
            var22['messageType'] = var25;
            var25 = var12.channel_id;
            var22['messageChannelId'] = var25;
            var17 = var22;
case 50:
            var22 = 'commandNameOnClick';
            var13[var22] = var17;
            var3 = var15.bind(var16)(var14, var13);
            if(!(var10 != var19)) { _fun0002_ip = 43; continue _fun0002 }
case 51:
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var13 = var16[var1];
            var13 = var17.bind(var5)(var13);
            var15 = var13.intl;
            var14 = var15.formatToParts;
            var1 = var16[var1];
            var1 = var17.bind(var5)(var1);
            var1 = var1.t;
            var13 = var1.mqKdCM;
            var1 = {};
            var27 = var1;
            var26 = var24;
            var24 = copyDataProperties(var27, var26);
            var1[var21] = var23;
            var21 = {};
            var1[var22] = var21;
            var16 = var16[var20];
            var17 = var17.bind(var5)(var16);
            var16 = var17.getUserAuthor;
            var16 = var16.bind(var17)(var19, var18);
            var17 = var16.nick;
            var16 = 'targetUsername';
            var1[var16] = var17;
            var17 = {'name': 'targetUsernameOnClick', 'action': 'bindUserMenu'};
            var16 = 'targetUsernameOnClick';
            var20 = var10 == var19;
            var18 = undefined;
            if(var20) { _fun0002_ip = 52; continue _fun0002 }
case 53:
            var18 = var19.id;
case 52:
            var17['userId'] = var18;
            var18 = var12.channel_id;
            var17['messageChannelId'] = var18;
            var17['linkColor'] = var6;
            var1[var16] = var17;
            var3 = var14.bind(var15)(var13, var1);
case 43:
            var1 = {};
            var12 = var12.interaction;
            var12 = var12.user;
            var12 = var12.id;
            var1['userId'] = var12;
            var1['usernameColor'] = var8;
            var12 = _closure1_slot3;
            var13 = var10 != var9;
            var8 = undefined;
            if(!var13) { _fun0002_ip = 54; continue _fun0002 }
case 55:
            var8 = var9;
case 54:
            var12 = var12.bind(var5)(var8);
            var13 = var10 != var12;
            var8 = null;
            if(!var13) { _fun0002_ip = 56; continue _fun0002 }
case 57:
            var8 = var12;
case 56:
            var1['roleColor'] = var8;
            var8 = 'dot';
            var8 = var8 === var11;
            if(!var8) { _fun0002_ip = 58; continue _fun0002 }
case 59:
            var8 = var10 != var9;
case 58:
            var1['shouldShowRoleDot'] = var8;
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