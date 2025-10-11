// app/modules/notifications/NotificationTextUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var8;
    var5 = function shouldNotifyBase(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg2;
            var9 = arg3;
            var6 = arguments[3];
            var10 = undefined;
            if(!(var6 === var10)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = {};
case 2:
            var2 = var3.hasFlag;
            var1 = _closure1_slot26;
            var1 = var1.SPAMMER;
            var1 = var2.bind(var3)(var1);
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var9.isManaged;
            var1 = var1.bind(var9)();
            if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var9.getGuildId;
            var5 = var1.bind(var9)();
            var1 = null;
            var1 = var1 == var5;
            if(var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = _closure1_slot4;
            var2 = var4.isLurking;
            var2 = var2.bind(var4)(var5);
            var1 = !var2;
case 8:
            if(!var1) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = var6.ignoreSameUser;
            var4 = !var2;
            if(!var4) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var5 = var3.id;
            var2 = arg1;
            var2 = var2.id;
            var4 = var5 === var2;
case 12:
            var2 = !var4;
            if(var4) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var5 = _closure1_slot13;
            var4 = var5.isBlockedOrIgnored;
            var3 = var3.id;
            var3 = var4.bind(var5)(var3);
            var3 = !var3;
            if(!var3) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var4 = var6.ignoreStatus;
            var5 = !var4;
            if(!var5) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var8 = _closure1_slot16;
            var4 = var8.getStatus;
            var8 = var4.bind(var8)();
            var4 = _closure1_slot25;
            var4 = var4.DND;
            var5 = var8 === var4;
case 18:
            var4 = !var5;
            if(var5) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 18;
            var5 = var11[var5];
            var5 = var8.bind(var10)(var5);
            var8 = var5.FocusMode;
            var5 = var8.getSetting;
            var5 = var5.bind(var8)();
            var5 = !var5;
            if(!var5) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var6 = var6.ignoreNoMessagesSetting;
            var6 = !var6;
            if(!var6) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var8 = _closure1_slot17;
            var7 = var8.allowNoMessages;
            var6 = var7.bind(var8)(var9);
case 24:
            var5 = !var6;
case 22:
            var4 = var5;
case 20:
            var3 = var4;
case 16:
            var2 = var3;
case 14:
            var1 = var2;
case 10:
            return var1;
case 6:
            var1 = false;
            return var1;
case 4:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot29 = var5;
    var1 = function getInviteEmbedFormatString(arg1, arg2, arg3, arg4) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var3 = var1.type;
            var2 = _closure1_slot21;
            var2 = var2.GUILD_ANNOUNCEMENT;
            if(!(var2 !== var3)) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var2 = _closure1_slot21;
            var2 = var2.GUILD_TEXT;
            if(!(var2 !== var3)) { _fun0002_ip = 26; continue _fun0002 }
case 28:
            var2 = _closure1_slot21;
            var2 = var2.GROUP_DM;
            if(!(var2 !== var3)) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var1 = _closure1_slot21;
            var1 = var1.DM;
            var1 = arg4;
            return var1;
case 29:
            var1 = arg3;
            return var1;
case 26:
            var1 = arg2;
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var8[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var9 = var4.GUILD_VOCAL_CHANNEL_TYPES;
    var _closure1_slot7 = var9;
    var4 = var4.THREAD_CHANNEL_TYPES;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 11;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 12;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot16 = var4;
    var4 = 13;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot17 = var4;
    var4 = 14;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot18 = var4;
    var4 = 15;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot19 = var4;
    var4 = 16;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var6 = var4.ActivityActionTypes;
    var _closure1_slot20 = var6;
    var6 = var4.ChannelTypes;
    var _closure1_slot21 = var6;
    var6 = var4.MessageFlags;
    var _closure1_slot22 = var6;
    var6 = var4.MessageTypes;
    var _closure1_slot23 = var6;
    var6 = var4.MessageTypesSets;
    var _closure1_slot24 = var6;
    var6 = var4.StatusTypes;
    var _closure1_slot25 = var6;
    var4 = var4.UserFlags;
    var _closure1_slot26 = var4;
    var4 = 17;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.ThreadMemberFlags;
    var _closure1_slot27 = var4;
    var4 = function renderTitle(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var12 = arg3;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 22;
            var4 = var3[var2];
            var11 = undefined;
            var7 = var6.bind(var11)(var4);
            var5 = var7.isolate;
            var4 = arg1;
            var8 = true;
            var7 = var5.bind(var7)(var4, var8);
            var4 = var3[var2];
            var5 = var6.bind(var11)(var4);
            var4 = var5.isolate;
            var13 = 23;
            var3 = var3[var13];
            var14 = var6.bind(var11)(var3);
            var10 = var14.computeChannelName;
            var18 = _closure1_slot18;
            var17 = _closure1_slot13;
            var19 = arg2;
            var20 = var14;
            var16 = true;
            var3 = var20[var10](var19, var18, var17, var16, var15);
            var6 = var4.bind(var5)(var3, var8);
            var3 = null;
            var3 = var3 != var12;
            var5 = '';
            var4 = var5;
            if(!var3) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = var9[var2];
            var3 = var10.bind(var11)(var2);
            var2 = var3.isolate;
            var9 = var9[var13];
            var11 = var10.bind(var11)(var9);
            var10 = var11.computeChannelName;
            var9 = _closure1_slot18;
            var1 = _closure1_slot13;
            var1 = var10.bind(var11)(var12, var9, var1);
            var3 = var2.bind(var3)(var1, var8);
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = ', ';
            var4 = var2.bind(var1)(var3);
case 31:
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var18 = ' (';
            var15 = ')';
            var20 = var5;
            var19 = var7;
            var17 = var6;
            var16 = var4;
            var1 = var20[var3](var19, var18, var17, var16, var15, var14);
            return var1;
        }
    };
    var _closure1_slot28 = var4;
    var6 = 34;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/notifications/NotificationTextUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['shouldNotifyBase'] = var5;
    var5 = function shouldNotify(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var7 = arg1;
            var2 = arg2;
            var1 = arguments[2];
            var12 = arguments[3];
            var5 = undefined;
            if(!(var1 === var5)) { _fun0004_ip = 33; continue _fun0004 }
case 34:
            var1 = true;
case 33:
            if(!(var12 === var5)) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var12 = false;
case 35:
            var3 = var7.flags;
            var8 = null;
            if(!(var8 != var3)) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 19;
            var4 = var9[var4];
            var9 = var6.bind(var5)(var4);
            var6 = var9.hasFlag;
            var4 = var7.flags;
            var3 = _closure1_slot22;
            var3 = var3.SUPPRESS_NOTIFICATIONS;
            var3 = var6.bind(var9)(var4, var3);
            if(var3) { _fun0004_ip = 39; continue _fun0004 }
case 37:
            var6 = _closure1_slot10;
            var4 = var6.getChannel;
            var11 = var4.bind(var6)(var2);
            var9 = var7.type;
            var4 = _closure1_slot23;
            var6 = var4.THREAD_STARTER_MESSAGE;
            var4 = var11;
            if(!(var9 === var6)) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var10 = _closure1_slot10;
            var9 = var10.getChannel;
            var13 = var8 == var11;
            var6 = undefined;
            if(var13) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var6 = var11.parent_id;
case 42:
            var4 = var9.bind(var10)(var6);
case 40:
            var11 = _closure1_slot18;
            var6 = var11.getCurrentUser;
            var6 = var6.bind(var11)();
            var10 = var11.getUser;
            var13 = var7.author;
            var14 = var8 == var13;
            var9 = undefined;
            if(var14) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var9 = var13.id;
case 44:
            var11 = var10.bind(var11)(var9);
            if(!(var8 != var4)) { _fun0004_ip = 46; continue _fun0004 }
case 47:
            if(!(var8 != var6)) { _fun0004_ip = 46; continue _fun0004 }
case 21:
            if(!(var8 != var11)) { _fun0004_ip = 46; continue _fun0004 }
case 48:
            var10 = var4.type;
            var9 = _closure1_slot21;
            var9 = var9.GROUP_DM;
            if(!(var10 === var9)) { _fun0004_ip = 49; continue _fun0004 }
case 50:
            var10 = var7.type;
            var9 = _closure1_slot23;
            var9 = var9.RECIPIENT_REMOVE;
            if(!(var10 !== var9)) { _fun0004_ip = 51; continue _fun0004 }
case 49:
            var10 = _closure1_slot19;
            var9 = var10.areSlayerNotificationsSuppressed;
            var9 = var9.bind(var10)();
            if(!var9) { _fun0004_ip = 52; continue _fun0004 }
case 53:
            var10 = var4.type;
            var9 = _closure1_slot21;
            var9 = var9.DM;
            var9 = var10 === var9;
            if(var9) { _fun0004_ip = 54; continue _fun0004 }
case 55:
            var10 = var4.linkedLobby;
            var9 = var8 != var10;
case 54:
            if(var9) { _fun0004_ip = 56; continue _fun0004 }
case 52:
            var10 = _closure1_slot29;
            var9 = {};
            var9['ignoreStatus'] = var12;
            var12 = _closure1_slot24;
            var14 = var12.SELF_MENTIONABLE_SYSTEM;
            var13 = var14.has;
            var12 = var7.type;
            var12 = var13.bind(var14)(var12);
            var9['ignoreSameUser'] = var12;
            var19 = undefined;
            var18 = var6;
            var17 = var11;
            var16 = var4;
            var15 = var9;
            var9 = var19[var10](var18, var17, var16, var15, var14);
            if(var9) { _fun0004_ip = 57; continue _fun0004 }
case 58:
            var9 = false;
            return var9;
case 57:
            var10 = _closure1_slot5;
            var9 = var10.isMessageRequest;
            var9 = var9.bind(var10)(var2);
            if(var9) { _fun0004_ip = 59; continue _fun0004 }
case 60:
            if(var1) { _fun0004_ip = 61; continue _fun0004 }
case 62:
            var10 = _closure1_slot14;
            var9 = var10.getChannelId;
            var11 = _closure1_slot15;
            var1 = var11.getGuildId;
            var1 = var1.bind(var11)();
            var10 = var9.bind(var10)(var1);
            var1 = var4.id;
            if(!(var10 !== var1)) { _fun0004_ip = 63; continue _fun0004 }
case 64:
            var9 = _closure1_slot9;
            var1 = var9.getCurrentSidebarChannelId;
            var9 = var1.bind(var9)(var10);
            var1 = var4.id;
            if(!(var9 === var1)) { _fun0004_ip = 61; continue _fun0004 }
case 65:
            var1 = false;
            return var1;
case 63:
            var1 = false;
            return var1;
case 61:
            var9 = _closure1_slot13;
            var1 = var9.isBlockedOrIgnoredForMessage;
            var1 = var1.bind(var9)(var7);
            if(var1) { _fun0004_ip = 66; continue _fun0004 }
case 67:
            var1 = var7.activity_instance;
            if(!(var5 !== var1)) { _fun0004_ip = 68; continue _fun0004 }
case 69:
            var1 = var7.interaction;
            if(!(var8 != var1)) { _fun0004_ip = 68; continue _fun0004 }
case 70:
            var1 = var7.interaction;
            var1 = var1.user;
            var9 = var1.id;
            var1 = var6.id;
            if(!(var9 !== var1)) { _fun0004_ip = 71; continue _fun0004 }
case 68:
            var1 = var7.application_id;
            if(!(var8 != var1)) { _fun0004_ip = 72; continue _fun0004 }
case 73:
            var9 = _closure1_slot3;
            var1 = var9.getCurrentEmbeddedActivity;
            var1 = var1.bind(var9)();
            var8 = var8 == var1;
            var9 = undefined;
            if(var8) { _fun0004_ip = 74; continue _fun0004 }
case 75:
            var9 = var1.applicationId;
case 74:
            var8 = var7.application_id;
            if(!(var9 === var8)) { _fun0004_ip = 72; continue _fun0004 }
case 76:
            var1 = var1.location;
            var1 = var1.channel_id;
            if(!(var1 !== var2)) { _fun0004_ip = 77; continue _fun0004 }
case 72:
            var8 = _closure1_slot8;
            var2 = var8.has;
            var1 = var4.type;
            var1 = var2.bind(var8)(var1);
            if(var1) { _fun0004_ip = 78; continue _fun0004 }
case 79:
            var8 = _closure1_slot7;
            var2 = var8.has;
            var1 = var4.type;
            var1 = var2.bind(var8)(var1);
            var1 = !var1;
            if(var1) { _fun0004_ip = 80; continue _fun0004 }
case 81:
            var8 = _closure1_slot12;
            var2 = var8.getChannelId;
            var8 = var2.bind(var8)();
            var2 = var4.id;
            var1 = var8 === var2;
case 80:
            var8 = _closure1_slot17;
            var2 = var8.allowAllMessages;
            var2 = var2.bind(var8)(var4);
            if(!var2) { _fun0004_ip = 82; continue _fun0004 }
case 83:
            if(var1) { _fun0004_ip = 84; continue _fun0004 }
case 82:
            var8 = _closure1_slot17;
            var2 = var8.isSuppressEveryoneEnabled;
            var1 = var4.getGuildId;
            var1 = var1.bind(var4)();
            var10 = var2.bind(var8)(var1);
            var8 = _closure1_slot17;
            var2 = var8.isSuppressRolesEnabled;
            var1 = var4.getGuildId;
            var1 = var1.bind(var4)();
            var9 = var2.bind(var8)(var1);
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 21;
            var1 = var8[var1];
            var8 = var2.bind(var5)(var1);
            var2 = var8.isRawMessageMentioned;
            var1 = {};
            var1['rawMessage'] = var7;
            var11 = var6.id;
            var1['userId'] = var11;
            var1['suppressEveryone'] = var10;
            var1['suppressRoles'] = var9;
            var1 = var2.bind(var8)(var1);
            return var1;
case 84:
            var1 = true;
            return var1;
case 78:
            var8 = _closure1_slot6;
            var2 = var8.isMuted;
            var1 = var4.id;
            var1 = var2.bind(var8)(var1);
            if(var1) { _fun0004_ip = 85; continue _fun0004 }
case 86:
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 20;
            var1 = var8[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.computeThreadNotificationSetting;
            var4 = var1.bind(var2)(var4);
            var1 = _closure1_slot27;
            var1 = var1.NO_MESSAGES;
            var1 = var4 !== var1;
            if(!var1) { _fun0004_ip = 87; continue _fun0004 }
case 88:
            var2 = _closure1_slot27;
            var2 = var2.ALL_MESSAGES;
            var2 = var4 === var2;
            if(var2) { _fun0004_ip = 89; continue _fun0004 }
case 90:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 21;
            var3 = var8[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.isRawMessageMentioned;
            var3 = {};
            var3['rawMessage'] = var7;
            var6 = var6.id;
            var3['userId'] = var6;
            var6 = false;
            var3['suppressEveryone'] = var6;
            var3['suppressRoles'] = var6;
            var2 = var4.bind(var5)(var3);
case 89:
            var1 = var2;
case 87:
            return var1;
case 85:
            var1 = false;
            return var1;
case 77:
            var1 = false;
            return var1;
case 71:
            var1 = false;
            return var1;
case 66:
            var1 = false;
            return var1;
case 59:
            var1 = false;
            return var1;
case 56:
            var1 = false;
            return var1;
case 51:
            var1 = false;
            return var1;
case 46:
            var1 = false;
            return var1;
case 39:
            var1 = false;
            return var1;
        }
    };
    var3['shouldNotify'] = var5;
    var5 = function shouldNotifyForSelectedChannel(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var9 = arg1;
            var3 = arg2;
            var4 = _closure1_slot14;
            var2 = var4.getChannelId;
            var5 = _closure1_slot15;
            var1 = var5.getGuildId;
            var1 = var1.bind(var5)();
            var1 = var2.bind(var4)(var1);
            if(!(var1 === var3)) { _fun0005_ip = 91; continue _fun0005 }
case 92:
            var2 = _closure1_slot10;
            var1 = var2.getChannel;
            var4 = var1.bind(var2)(var3);
            var2 = var9.type;
            var1 = _closure1_slot23;
            var1 = var1.THREAD_STARTER_MESSAGE;
            var10 = var4;
            if(!(var2 === var1)) { _fun0005_ip = 93; continue _fun0005 }
case 94:
            var3 = _closure1_slot10;
            var2 = var3.getChannel;
            var1 = null;
            var5 = var1 == var4;
            var1 = undefined;
            if(var5) { _fun0005_ip = 95; continue _fun0005 }
case 96:
            var1 = var4.parent_id;
case 95:
            var10 = var2.bind(var3)(var1);
case 93:
            var4 = _closure1_slot18;
            var1 = var4.getCurrentUser;
            var5 = var1.bind(var4)();
            var3 = var4.getUser;
            var6 = var9.author;
            var2 = null;
            var7 = var2 == var6;
            var11 = undefined;
            var1 = undefined;
            if(var7) { _fun0005_ip = 97; continue _fun0005 }
case 43:
            var1 = var6.id;
case 97:
            var6 = var3.bind(var4)(var1);
            var1 = var2 != var10;
            if(!var1) { _fun0005_ip = 98; continue _fun0005 }
case 99:
            var1 = var2 != var5;
case 98:
            if(!var1) { _fun0005_ip = 100; continue _fun0005 }
case 101:
            var1 = var2 != var6;
case 100:
            if(!var1) { _fun0005_ip = 102; continue _fun0005 }
case 103:
            var2 = var10.isManaged;
            var2 = var2.bind(var10)();
            var2 = !var2;
            if(!var2) { _fun0005_ip = 104; continue _fun0005 }
case 31:
            var4 = var6.hasFlag;
            var3 = _closure1_slot26;
            var3 = var3.SPAMMER;
            var3 = var4.bind(var6)(var3);
            var3 = !var3;
            if(!var3) { _fun0005_ip = 105; continue _fun0005 }
case 106:
            var7 = _closure1_slot13;
            var4 = var7.isBlockedOrIgnoredForMessage;
            var4 = var4.bind(var7)(var9);
            var4 = !var4;
            if(!var4) { _fun0005_ip = 107; continue _fun0005 }
case 108:
            var6 = var6.id;
            var5 = var5.id;
            var5 = var6 !== var5;
            if(!var5) { _fun0005_ip = 109; continue _fun0005 }
case 110:
            var7 = _closure1_slot16;
            var6 = var7.getStatus;
            var7 = var6.bind(var7)();
            var6 = _closure1_slot25;
            var6 = var6.DND;
            var6 = var7 !== var6;
            if(!var6) { _fun0005_ip = 111; continue _fun0005 }
case 112:
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 18;
            var7 = var12[var7];
            var7 = var9.bind(var11)(var7);
            var9 = var7.FocusMode;
            var7 = var9.getSetting;
            var7 = var7.bind(var9)();
            var7 = !var7;
            if(!var7) { _fun0005_ip = 113; continue _fun0005 }
case 114:
            var9 = _closure1_slot17;
            var8 = var9.allowNoMessages;
            var8 = var8.bind(var9)(var10);
            var7 = !var8;
case 113:
            var6 = var7;
case 111:
            var5 = var6;
case 109:
            var4 = var5;
case 107:
            var3 = var4;
case 105:
            var2 = var3;
case 104:
            var1 = var2;
case 102:
            return var1;
case 91:
            var1 = false;
            return var1;
        }
    };
    var3['shouldNotifyForSelectedChannel'] = var5;
    var5 = function shouldNotifyForForumThreadCreation(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var7 = arg2;
            var4 = arguments[2];
            var10 = arguments[3];
            var9 = undefined;
            if(!(var4 === var9)) { _fun0006_ip = 2; continue _fun0006 }
case 3:
            var4 = true;
case 2:
            if(!(var10 === var9)) { _fun0006_ip = 115; continue _fun0006 }
case 116:
            var10 = false;
case 115:
            var3 = _closure1_slot18;
            var1 = var3.getCurrentUser;
            var8 = var1.bind(var3)();
            var2 = var3.getUser;
            var1 = arg1;
            var1 = var1.ownerId;
            var6 = var2.bind(var3)(var1);
            var2 = null;
            var1 = var2 != var7;
            if(!var1) { _fun0006_ip = 117; continue _fun0006 }
case 29:
            var1 = var2 != var8;
case 117:
            if(!var1) { _fun0006_ip = 118; continue _fun0006 }
case 119:
            var1 = var2 != var6;
case 118:
            if(!var1) { _fun0006_ip = 120; continue _fun0006 }
case 121:
            var3 = _closure1_slot29;
            var2 = {};
            var2['ignoreStatus'] = var10;
            var10 = true;
            var2['ignoreNoMessagesSetting'] = var10;
            var15 = undefined;
            var14 = var8;
            var13 = var6;
            var12 = var7;
            var11 = var2;
            var3 = var15[var3](var14, var13, var12, var11, var10);
            var2 = !var3;
            var2 = !var2;
            if(!var3) { _fun0006_ip = 106; continue _fun0006 }
case 122:
            var9 = _closure1_slot17;
            var8 = var9.isGuildOrCategoryOrChannelMuted;
            var6 = var7.guild_id;
            var3 = var7.id;
            var3 = var8.bind(var9)(var6, var3);
            var3 = !var3;
            if(!var3) { _fun0006_ip = 123; continue _fun0006 }
case 124:
            var6 = !var4;
            if(!var6) { _fun0006_ip = 125; continue _fun0006 }
case 126:
            var9 = _closure1_slot14;
            var8 = var9.getChannelId;
            var10 = _closure1_slot15;
            var4 = var10.getGuildId;
            var4 = var4.bind(var10)();
            var8 = var8.bind(var9)(var4);
            var4 = var7.id;
            var6 = var8 === var4;
case 125:
            var4 = !var6;
            if(var6) { _fun0006_ip = 127; continue _fun0006 }
case 47:
            var6 = _closure1_slot17;
            var5 = var6.getNewForumThreadsCreated;
            var4 = var5.bind(var6)(var7);
case 127:
            var3 = var4;
case 123:
            var2 = var3;
case 106:
            var1 = var2;
case 120:
            return var1;
        }
    };
    var3['shouldNotifyForForumThreadCreation'] = var5;
    var5 = function shouldNotifyVoiceStatus(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = _closure1_slot18;
            var1 = var3.getCurrentUser;
            var6 = var1.bind(var3)();
            var1 = null;
            var1 = var1 != var6;
            if(!var1) { _fun0007_ip = 128; continue _fun0007 }
case 27:
            var5 = _closure1_slot29;
            var4 = undefined;
            var3 = arg1;
            var2 = arg2;
            var1 = var5.bind(var4)(var6, var3, var2);
case 128:
            return var1;
        }
    };
    var3['shouldNotifyVoiceStatus'] = var5;
    var3['renderTitle'] = var4;
    var4 = function makeTextChatNotification(arg1, arg2, arg3) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var7 = arg1;
            var1 = arg2;
            var10 = arg3;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 26;
            var3 = var4[var3];
            var4 = undefined;
            var8 = var5.bind(var4)(var3);
            var6 = var8.getName;
            var3 = var7.getGuildId;
            var5 = var3.bind(var7)();
            var3 = var7.id;
            var13 = var6.bind(var8)(var5, var3, var10);
            var5 = var7.type;
            var3 = _closure1_slot21;
            var3 = var3.GUILD_ANNOUNCEMENT;
            if(!(var3 !== var5)) { _fun0008_ip = 129; continue _fun0008 }
case 130:
            var3 = _closure1_slot21;
            var3 = var3.GUILD_TEXT;
            if(!(var3 !== var5)) { _fun0008_ip = 129; continue _fun0008 }
case 96:
            var3 = _closure1_slot21;
            var3 = var3.GUILD_VOICE;
            if(!(var3 !== var5)) { _fun0008_ip = 129; continue _fun0008 }
case 13:
            var3 = _closure1_slot21;
            var3 = var3.ANNOUNCEMENT_THREAD;
            if(!(var3 !== var5)) { _fun0008_ip = 129; continue _fun0008 }
case 12:
            var3 = _closure1_slot21;
            var3 = var3.PUBLIC_THREAD;
            if(!(var3 !== var5)) { _fun0008_ip = 129; continue _fun0008 }
case 131:
            var3 = _closure1_slot21;
            var3 = var3.PRIVATE_THREAD;
            if(!(var3 !== var5)) { _fun0008_ip = 129; continue _fun0008 }
case 132:
            var3 = _closure1_slot21;
            var3 = var3.GROUP_DM;
            var6 = var13;
            if(!(var3 === var5)) { _fun0008_ip = 133; continue _fun0008 }
case 134:
            var3 = var7.isManaged;
            var3 = var3.bind(var7)();
            if(!var3) { _fun0008_ip = 135; continue _fun0008 }
case 136:
            var3 = var10.bot;
case 135:
            if(!var3) { _fun0008_ip = 137; continue _fun0008 }
case 138:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 23;
            var5 = var9[var5];
            var11 = var8.bind(var4)(var5);
            var9 = var11.computeChannelName;
            var8 = _closure1_slot18;
            var5 = _closure1_slot13;
            var5 = var9.bind(var11)(var7, var8, var5);
            var3 = var13 === var5;
case 137:
            var6 = var13;
            if(var3) { _fun0008_ip = 133; continue _fun0008 }
case 139:
            var3 = _closure1_slot28;
            var6 = var3.bind(var4)(var13, var7);
            _fun0008_ip = 133; continue _fun0008;
case 129:
            var8 = _closure1_slot10;
            var5 = var8.getChannel;
            var3 = var7.parent_id;
            var8 = var5.bind(var8)(var3);
            var5 = var1.type;
            var3 = _closure1_slot23;
            var3 = var3.THREAD_STARTER_MESSAGE;
            if(!(var5 === var3)) { _fun0008_ip = 140; continue _fun0008 }
case 141:
            var3 = null;
            if(!(var3 == var8)) { _fun0008_ip = 142; continue _fun0008 }
case 140:
            var5 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 27;
            var3 = var9[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)(var1);
            if(var3) { _fun0008_ip = 143; continue _fun0008 }
case 144:
            var3 = _closure1_slot28;
            var6 = var3.bind(var4)(var13, var7, var8);
            _fun0008_ip = 133; continue _fun0008;
case 143:
            var9 = _closure1_slot11;
            var5 = var9.getGuild;
            var3 = var7.getGuildId;
            var3 = var3.bind(var7)();
            var5 = var5.bind(var9)(var3);
            var3 = null;
            var6 = var13;
            if(!(var3 != var5)) { _fun0008_ip = 133; continue _fun0008 }
case 145:
            var3 = _closure1_slot28;
            var6 = var3.bind(var4)(var13, var7, var8);
            _fun0008_ip = 133; continue _fun0008;
case 142:
            var5 = _closure1_slot28;
            var11 = _closure1_slot10;
            var9 = var11.getChannel;
            var3 = var8.parent_id;
            var3 = var9.bind(var11)(var3);
            var6 = var5.bind(var4)(var13, var8, var3);
case 133:
            var16 = var1.content;
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 27;
            var3 = var8[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)(var1);
            if(!var3) { _fun0008_ip = 146; continue _fun0008 }
case 147:
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 28;
            var3 = var8[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.stringify;
            var16 = var3.bind(var5)(var1, var7);
            var3 = null;
            if(!(var3 != var16)) { _fun0008_ip = 148; continue _fun0008 }
case 146:
            var3 = 'sticker_items';
            var3 = var3 in var1;
            if(var3) { _fun0008_ip = 149; continue _fun0008 }
case 70:
            var3 = 'stickerItems';
            var3 = var3 in var1;
            if(var3) { _fun0008_ip = 150; continue _fun0008 }
case 151:
            var14 = var1.stickers;
            _fun0008_ip = 152; continue _fun0008;
case 150:
            var14 = var1.stickerItems;
case 152:
            _fun0008_ip = 153; continue _fun0008;
case 149:
            var14 = var1.sticker_items;
case 153:
            var3 = 'message_reference';
            var3 = var3 in var1;
            if(var3) { _fun0008_ip = 154; continue _fun0008 }
case 155:
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 30;
            var3 = var8[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)(var1);
            _fun0008_ip = 156; continue _fun0008;
case 154:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 30;
            var5 = var9[var5];
            var8 = var8.bind(var4)(var5);
            var5 = var8.isForwardServerMessage;
            var3 = var5.bind(var8)(var1);
case 156:
            if(var3) { _fun0008_ip = 157; continue _fun0008 }
case 158:
            var5 = var1.activity;
            var3 = null;
            if(!(var3 != var5)) { _fun0008_ip = 159; continue _fun0008 }
case 160:
            var5 = var1.application;
            if(!(var3 == var5)) { _fun0008_ip = 161; continue _fun0008 }
case 159:
            var5 = var1.activity;
            if(!(var3 != var5)) { _fun0008_ip = 162; continue _fun0008 }
case 163:
            var5 = var1.activity;
            var8 = var5.type;
            var5 = _closure1_slot20;
            var5 = var5.LISTEN;
            if(!(var8 !== var5)) { _fun0008_ip = 164; continue _fun0008 }
case 162:
            if(!(var3 != var14)) { _fun0008_ip = 165; continue _fun0008 }
case 166:
            var5 = var14.length;
            var12 = 0;
            if(!(!(var5 > var12))) { _fun0008_ip = 167; continue _fun0008 }
case 165:
            var8 = var1.type;
            var5 = _closure1_slot23;
            var5 = var5.PREMIUM_REFERRAL;
            if(!(var8 !== var5)) { _fun0008_ip = 168; continue _fun0008 }
case 169:
            var5 = var1.poll;
            if(!(var3 == var5)) { _fun0008_ip = 170; continue _fun0008 }
case 171:
            var8 = var1.type;
            var5 = _closure1_slot23;
            var5 = var5.POLL_RESULT;
            if(!(var8 !== var5)) { _fun0008_ip = 172; continue _fun0008 }
case 173:
            var5 = var16.length;
            var9 = 0;
            if(!(var9 !== var5)) { _fun0008_ip = 174; continue _fun0008 }
case 175:
            var8 = var7.type;
            var5 = _closure1_slot21;
            var5 = var5.DM;
            if(!(var8 === var5)) { _fun0008_ip = 174; continue _fun0008 }
case 176:
            var5 = var10.bot;
            if(var5) { _fun0008_ip = 174; continue _fun0008 }
case 177:
            var8 = var16.startsWith;
            var5 = '> -# *';
            var5 = var8.bind(var16)(var5);
            if(!var5) { _fun0008_ip = 174; continue _fun0008 }
case 178:
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 32;
            var5 = var11[var5];
            var15 = var8.bind(var4)(var5);
            var11 = var15.unparse;
            var8 = var7.id;
            var5 = true;
            var11 = var11.bind(var15)(var16, var8, var5);
            var8 = var11.substring;
            var5 = 1;
            var8 = var8.bind(var11)(var9, var5);
            var9 = var11.substring;
            var5 = 4;
            var5 = var9.bind(var11)(var5);
            var5 = var8 + var5;
            _fun0008_ip = 179; continue _fun0008;
case 174:
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 32;
            var8 = var11[var8];
            var15 = var9.bind(var4)(var8);
            var11 = var15.unparse;
            var9 = var7.id;
            var8 = true;
            var5 = var11.bind(var15)(var16, var9, var8);
case 179:
            _fun0008_ip = 180; continue _fun0008;
case 172:
            var11 = var1.embeds;
            var9 = var3 == var11;
            var8 = undefined;
            if(var9) { _fun0008_ip = 181; continue _fun0008 }
case 182:
            var9 = 0;
            var9 = var11[var9];
            var11 = var3 == var9;
            var8 = undefined;
            if(var11) { _fun0008_ip = 181; continue _fun0008 }
case 85:
            var15 = var9.fields;
            var9 = var3 == var15;
            var8 = undefined;
            if(var9) { _fun0008_ip = 181; continue _fun0008 }
case 183:
            var11 = var15.find;
            var9 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = arg1;
                    var2 = 'name';
                    var2 = var2 in var1;
                    if(var2) { _fun0009_ip = 184; continue _fun0009 }
case 185:
                    var2 = var1.rawName;
                    _fun0009_ip = 186; continue _fun0009;
case 184:
                    var2 = var1.name;
case 186:
                    var1 = 'poll_question_text';
                    var1 = var1 === var2;
                    return var1;
                }
            };
            var8 = var11.bind(var15)(var9);
case 181:
            var3 = var3 != var8;
            var15 = '';
            if(!var3) { _fun0008_ip = 187; continue _fun0008 }
case 188:
            var3 = 'value';
            var3 = var3 in var8;
            if(var3) { _fun0008_ip = 189; continue _fun0008 }
case 190:
            var3 = var8.rawValue;
            _fun0008_ip = 191; continue _fun0008;
case 189:
            var3 = var8.value;
case 191:
            var15 = var3;
case 187:
            var8 = _closure1_slot0;
            var16 = _closure1_slot2;
            var3 = 24;
            var9 = var16[var3];
            var9 = var8.bind(var4)(var9);
            var11 = var9.intl;
            var9 = var11.formatToPlainString;
            var3 = var16[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.t;
            var8 = var3.9WrecH;
            var3 = {};
            var3['question'] = var15;
            var5 = var9.bind(var11)(var8, var3);
            _fun0008_ip = 180; continue _fun0008;
case 170:
            var8 = _closure1_slot0;
            var15 = _closure1_slot2;
            var3 = 24;
            var9 = var15[var3];
            var9 = var8.bind(var4)(var9);
            var11 = var9.intl;
            var9 = var11.formatToPlainString;
            var3 = var15[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.t;
            var8 = var3.ImizdH;
            var3 = {};
            var15 = var1.poll;
            var15 = var15.question;
            var15 = var15.text;
            var3['question'] = var15;
            var5 = var9.bind(var11)(var8, var3);
            _fun0008_ip = 180; continue _fun0008;
case 168:
            var8 = _closure1_slot0;
            var17 = _closure1_slot2;
            var3 = 24;
            var9 = var17[var3];
            var9 = var8.bind(var4)(var9);
            var11 = var9.intl;
            var9 = var11.formatToPlainString;
            var3 = var17[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.t;
            var8 = var3.lieTqa;
            var3 = {};
            var16 = _closure1_slot1;
            var15 = 31;
            var15 = var17[var15];
            var16 = var16.bind(var4)(var15);
            var15 = var16.getName;
            var15 = var15.bind(var16)(var10);
            var3['username'] = var15;
            var5 = var9.bind(var11)(var8, var3);
            _fun0008_ip = 180; continue _fun0008;
case 167:
            var8 = _closure1_slot0;
            var15 = _closure1_slot2;
            var3 = 24;
            var9 = var15[var3];
            var9 = var8.bind(var4)(var9);
            var11 = var9.intl;
            var9 = var11.formatToPlainString;
            var3 = var15[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.t;
            var8 = var3.zY4v1N;
            var3 = {};
            var12 = var14[var12];
            var12 = var12.name;
            var3['stickerName'] = var12;
            var5 = var9.bind(var11)(var8, var3);
            _fun0008_ip = 180; continue _fun0008;
case 164:
            var15 = _closure1_slot30;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 24;
            var11 = var9[var3];
            var11 = var8.bind(var4)(var11);
            var11 = var11.t;
            var22 = var11.SaDdmJ;
            var11 = var9[var3];
            var11 = var8.bind(var4)(var11);
            var11 = var11.t;
            var21 = var11.qsODho;
            var11 = var9[var3];
            var11 = var8.bind(var4)(var11);
            var11 = var11.t;
            var20 = var11.WeiMTU;
            var24 = undefined;
            var23 = var7;
            var11 = var24[var15](var23, var22, var21, var20, var19);
            var3 = var9[var3];
            var3 = var8.bind(var4)(var3);
            var9 = var3.intl;
            var8 = var9.formatToPlainString;
            var3 = {};
            var3['user'] = var13;
            var5 = var8.bind(var9)(var11, var3);
            _fun0008_ip = 180; continue _fun0008;
case 161:
            var3 = var1.activity;
            var8 = var3.type;
            var3 = _closure1_slot20;
            var3 = var3.JOIN;
            if(!(var8 !== var3)) { _fun0008_ip = 192; continue _fun0008 }
case 193:
            var3 = var1.activity;
            var9 = var3.type;
            var3 = _closure1_slot20;
            var8 = var3.JOIN_REQUEST;
            var3 = '';
            if(!(var9 === var8)) { _fun0008_ip = 194; continue _fun0008 }
case 195:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var8 = 24;
            var9 = var17[var8];
            var9 = var16.bind(var4)(var9);
            var12 = var9.intl;
            var11 = var12.formatToPlainString;
            var15 = _closure1_slot30;
            var9 = var17[var8];
            var9 = var16.bind(var4)(var9);
            var9 = var9.t;
            var22 = var9./TD0lZ;
            var9 = var17[var8];
            var9 = var16.bind(var4)(var9);
            var9 = var9.t;
            var21 = var9./TD0lZ;
            var8 = var17[var8];
            var8 = var16.bind(var4)(var8);
            var8 = var8.t;
            var20 = var8./TD0lZ;
            var24 = undefined;
            var23 = var7;
            var9 = var24[var15](var23, var22, var21, var20, var19);
            var8 = {};
            var8['user'] = var13;
            var14 = var1.application;
            var14 = var14.name;
            var8['game'] = var14;
            var3 = var11.bind(var12)(var9, var8);
case 194:
            _fun0008_ip = 196; continue _fun0008;
case 192:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var8 = 24;
            var9 = var17[var8];
            var9 = var16.bind(var4)(var9);
            var12 = var9.intl;
            var11 = var12.formatToPlainString;
            var15 = _closure1_slot30;
            var9 = var17[var8];
            var9 = var16.bind(var4)(var9);
            var9 = var9.t;
            var22 = var9.E8CgCg;
            var9 = var17[var8];
            var9 = var16.bind(var4)(var9);
            var9 = var9.t;
            var21 = var9.c6KHWF;
            var8 = var17[var8];
            var8 = var16.bind(var4)(var8);
            var8 = var8.t;
            var20 = var8.Fy7rJC;
            var24 = undefined;
            var23 = var7;
            var9 = var24[var15](var23, var22, var21, var20, var19);
            var8 = {};
            var8['user'] = var13;
            var13 = var1.application;
            var13 = var13.name;
            var8['game'] = var13;
            var3 = var11.bind(var12)(var9, var8);
case 196:
            var5 = var3;
            _fun0008_ip = 180; continue _fun0008;
case 157:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 24;
            var8 = var12[var3];
            var8 = var11.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var3 = var12[var3];
            var3 = var11.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.9ddYKi;
            var5 = var8.bind(var9)(var3);
case 180:
            var3 = var5.length;
            var11 = 0;
            if(!(var11 === var3)) { _fun0008_ip = 197; continue _fun0008 }
case 198:
            var3 = var1.embeds;
            if(!(var4 !== var3)) { _fun0008_ip = 199; continue _fun0008 }
case 200:
            var3 = var1.embeds;
            var3 = var3.length;
            if(!(var3 > var11)) { _fun0008_ip = 199; continue _fun0008 }
case 201:
            var3 = var1.embeds;
            var8 = var3[var11];
            var3 = 'description';
            var3 = var3 in var8;
            if(var3) { _fun0008_ip = 202; continue _fun0008 }
case 203:
            var14 = var8.rawDescription;
            _fun0008_ip = 204; continue _fun0008;
case 202:
            var14 = var8.description;
case 204:
            var3 = 'title';
            var3 = var3 in var8;
            if(var3) { _fun0008_ip = 205; continue _fun0008 }
case 206:
            var13 = var8.rawTitle;
            _fun0008_ip = 207; continue _fun0008;
case 205:
            var13 = var8.title;
case 207:
            var9 = null;
            if(!(var9 == var14)) { _fun0008_ip = 208; continue _fun0008 }
case 209:
            var3 = var13;
            if(!(var9 == var3)) { _fun0008_ip = 210; continue _fun0008 }
case 211:
            var12 = var8.fields;
            if(!(var9 != var12)) { _fun0008_ip = 199; continue _fun0008 }
case 212:
            var12 = var8.fields;
            var12 = var12.length;
            if(!(!(var12 > var11))) { _fun0008_ip = 213; continue _fun0008 }
case 199:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var12 = 19;
            var12 = var16[var12];
            var17 = var15.bind(var4)(var12);
            var16 = var17.hasFlag;
            var12 = var1.flags;
            var15 = null;
            var18 = var15 != var12;
            var15 = 0;
            if(!var18) { _fun0008_ip = 214; continue _fun0008 }
case 215:
            var15 = var12;
case 214:
            var12 = _closure1_slot22;
            var12 = var12.IS_VOICE_MESSAGE;
            var12 = var16.bind(var17)(var15, var12);
            if(var12) { _fun0008_ip = 216; continue _fun0008 }
case 217:
            var12 = var1.attachments;
            var15 = '';
            var3 = var15;
            if(!(var4 !== var12)) { _fun0008_ip = 210; continue _fun0008 }
case 218:
            var12 = var1.attachments;
            var12 = var12.length;
            var12 = var12 > var11;
            var3 = var15;
            if(!var12) { _fun0008_ip = 210; continue _fun0008 }
case 219:
            var15 = _closure1_slot1;
            var19 = _closure1_slot2;
            var12 = 25;
            var12 = var19[var12];
            var15 = var15.bind(var4)(var12);
            var12 = var1.attachments;
            var12 = var12[var11];
            var18 = var15.bind(var4)(var12);
            var15 = _closure1_slot0;
            var12 = 24;
            var16 = var19[var12];
            var16 = var15.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.formatToPlainString;
            var12 = var19[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var15 = var12.51OkwM;
            var12 = {};
            var12['filename'] = var18;
            var3 = var16.bind(var17)(var15, var12);
            _fun0008_ip = 210; continue _fun0008;
case 216:
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var12 = 24;
            var15 = var18[var12];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var12 = var18[var12];
            var12 = var17.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.slFYgo;
            var3 = var15.bind(var16)(var12);
            _fun0008_ip = 210; continue _fun0008;
case 213:
            var8 = var8.fields;
            var8 = var8[var11];
            var11 = 'name';
            var11 = var11 in var8;
            if(var11) { _fun0008_ip = 220; continue _fun0008 }
case 221:
            var16 = var8.rawName;
            _fun0008_ip = 222; continue _fun0008;
case 220:
            var16 = var8.name;
case 222:
            var11 = 'value';
            var11 = var11 in var8;
            if(var11) { _fun0008_ip = 223; continue _fun0008 }
case 224:
            var15 = var8.rawValue;
            _fun0008_ip = 225; continue _fun0008;
case 223:
            var15 = var8.value;
case 225:
            var8 = global;
            var8 = var8.HermesInternal;
            var12 = var8.concat;
            var11 = '';
            var8 = ' ';
            var3 = var12.bind(var11)(var16, var8, var15);
            _fun0008_ip = 210; continue _fun0008;
case 208:
            var8 = var14;
            if(!(var9 != var13)) { _fun0008_ip = 226; continue _fun0008 }
case 227:
            var9 = global;
            var9 = var9.HermesInternal;
            var12 = var9.concat;
            var11 = '';
            var9 = ' ';
            var8 = var12.bind(var11)(var13, var9, var14);
case 226:
            var3 = var8;
case 210:
            var5 = var3;
case 197:
            var3 = {};
            var9 = var10.getAvatarURL;
            var8 = var7.guild_id;
            var7 = 128;
            var7 = var9.bind(var10)(var8, var7);
            var3['icon'] = var7;
            var3['title'] = var6;
            var3['body'] = var5;
            return var3;
case 148:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 29;
            var2 = var5[var2];
            var4 = var3.bind(var4)(var2);
            var2 = var4.prototype;
            var3 = Object.create(var2, {constructor: {value: var4}});
            var23 = 'NotificationTextUtils';
            var24 = var3;
            var2 = new var24[var4](var23, var22);
            var4 = var2 instanceof Object ? var2 : var3;
            var3 = var4.warn;
            var2 = {};
            var2['message'] = var1;
            var1 = 'SystemMessageUtils.stringify(...) could not convert';
            var1 = var3.bind(var4)(var1, var2);
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var23 = 'failed to stringify system message';
            var24 = var2;
            var1 = new var24[var3](var23, var22);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var3['makeTextChatNotification'] = var4;
    var4 = function allowInAppNotifications() {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 18;
            var1 = var5[var1];
            var3 = undefined;
            var1 = var4.bind(var3)(var1);
            var2 = var1.ShowInAppNotifications;
            var1 = var2.getSetting;
            var1 = var1.bind(var2)();
            var2 = 33;
            var2 = var5[var2];
            var3 = var4.bind(var3)(var2);
            var2 = var3.getFocusModeEnabled;
            var2 = var2.bind(var3)();
            if(!var1) { _fun0010_ip = 228; continue _fun0010 }
case 229:
            var1 = !var2;
case 228:
            return var1;
        }
    };
    var3['allowInAppNotifications'] = var4;
    var2 = function useAllowInAppNotifications() {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 18;
            var1 = var5[var1];
            var3 = undefined;
            var1 = var4.bind(var3)(var1);
            var2 = var1.ShowInAppNotifications;
            var1 = var2.useSetting;
            var1 = var1.bind(var2)();
            var2 = 33;
            var2 = var5[var2];
            var3 = var4.bind(var3)(var2);
            var2 = var3.useFocusModeEnabled;
            var2 = var2.bind(var3)();
            if(!var1) { _fun0011_ip = 228; continue _fun0011 }
case 229:
            var1 = !var2;
case 228:
            return var1;
        }
    };
    var3['useAllowInAppNotifications'] = var2;
    return var1;
})();