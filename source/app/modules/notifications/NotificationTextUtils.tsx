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
 0:
            var3 = arg2;
            var9 = arg3;
            var6 = arguments[3];
            var10 = undefined;
            if(!(var6 === var10)) { _fun0001_ip = 17; continue _fun0001 }
 15:
            var6 = {};
 17:
            var2 = var3.hasFlag;
            var1 = _closure1_slot26;
            var1 = var1.SPAMMER;
            var1 = var2.bind(var3)(var1);
            if(var1) { _fun0001_ip = 309; continue _fun0001 }
 47:
            var1 = var9.isManaged;
            var1 = var1.bind(var9)();
            if(var1) { _fun0001_ip = 305; continue _fun0001 }
 63:
            var1 = var9.getGuildId;
            var5 = var1.bind(var9)();
            var1 = null;
            var1 = var1 == var5;
            if(var1) { _fun0001_ip = 100; continue _fun0001 }
 82:
            var4 = _closure1_slot4;
            var2 = var4.isLurking;
            var2 = var2.bind(var4)(var5);
            var1 = !var2;
 100:
            if(!var1) { _fun0001_ip = 303; continue _fun0001 }
 106:
            var2 = var6.ignoreSameUser;
            var4 = !var2;
            if(!var4) { _fun0001_ip = 135; continue _fun0001 }
 118:
            var5 = var3.id;
            var2 = arg1;
            var2 = var2.id;
            var4 = var5 === var2;
 135:
            var2 = !var4;
            if(var4) { _fun0001_ip = 300; continue _fun0001 }
 144:
            var5 = _closure1_slot13;
            var4 = var5.isBlockedOrIgnored;
            var3 = var3.id;
            var3 = var4.bind(var5)(var3);
            var3 = !var3;
            if(!var3) { _fun0001_ip = 297; continue _fun0001 }
 173:
            var4 = var6.ignoreStatus;
            var5 = !var4;
            if(!var5) { _fun0001_ip = 213; continue _fun0001 }
 185:
            var8 = _closure1_slot16;
            var4 = var8.getStatus;
            var8 = var4.bind(var8)();
            var4 = _closure1_slot25;
            var4 = var4.DND;
            var5 = var8 === var4;
 213:
            var4 = !var5;
            if(var5) { _fun0001_ip = 294; continue _fun0001 }
 219:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 18;
            var5 = var11[var5];
            var5 = var8.bind(var10)(var5);
            var8 = var5.FocusMode;
            var5 = var8.getSetting;
            var5 = var5.bind(var8)();
            var5 = !var5;
            if(!var5) { _fun0001_ip = 291; continue _fun0001 }
 261:
            var6 = var6.ignoreNoMessagesSetting;
            var6 = !var6;
            if(!var6) { _fun0001_ip = 288; continue _fun0001 }
 273:
            var8 = _closure1_slot17;
            var7 = var8.allowNoMessages;
            var6 = var7.bind(var8)(var9);
 288:
            var5 = !var6;
 291:
            var4 = var5;
 294:
            var3 = var4;
 297:
            var2 = var3;
 300:
            var1 = var2;
 303:
            return var1;
 305:
            var1 = false;
            return var1;
 309:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot29 = var5;
    var1 = function getInviteEmbedFormatString(arg1, arg2, arg3, arg4) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var3 = var1.type;
            var2 = _closure1_slot21;
            var2 = var2.GUILD_ANNOUNCEMENT;
            if(!(var2 !== var3)) { _fun0002_ip = 73; continue _fun0002 }
 25:
            var2 = _closure1_slot21;
            var2 = var2.GUILD_TEXT;
            if(!(var2 !== var3)) { _fun0002_ip = 73; continue _fun0002 }
 39:
            var2 = _closure1_slot21;
            var2 = var2.GROUP_DM;
            if(!(var2 !== var3)) { _fun0002_ip = 68; continue _fun0002 }
 53:
            var1 = _closure1_slot21;
            var1 = var1.DM;
            var1 = arg4;
            return var1;
 68:
            var1 = arg3;
            return var1;
 73:
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
 0:
            var8 = arg3;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 22;
            var2 = var2[var9];
            var4 = undefined;
            var10 = var3.bind(var4)(var2);
            var7 = var10.computeChannelName;
            var14 = _closure1_slot18;
            var13 = _closure1_slot13;
            var15 = arg2;
            var12 = true;
            var16 = var10;
            var7 = var16[var7](var15, var14, var13, var12, var11);
            var2 = null;
            var2 = var2 != var8;
            var6 = '';
            var5 = var6;
            if(!var2) { _fun0003_ip = 132; continue _fun0003 }
 70:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var9];
            var4 = var3.bind(var4)(var2);
            var3 = var4.computeChannelName;
            var2 = _closure1_slot18;
            var1 = _closure1_slot13;
            var3 = var3.bind(var4)(var8, var2, var1);
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = ', ';
            var5 = var2.bind(var1)(var3);
 132:
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var15 = arg1;
            var14 = ' (';
            var11 = ')';
            var16 = var6;
            var13 = var7;
            var12 = var5;
            var1 = var16[var4](var15, var14, var13, var12, var11, var10);
            return var1;
        }
    };
    var _closure1_slot28 = var4;
    var6 = 33;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/notifications/NotificationTextUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['shouldNotifyBase'] = var5;
    var5 = function shouldNotify(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var7 = arg1;
            var2 = arg2;
            var1 = arguments[2];
            var12 = arguments[3];
            var5 = undefined;
            if(!(var1 === var5)) { _fun0004_ip = 20; continue _fun0004 }
 18:
            var1 = true;
 20:
            if(!(var12 === var5)) { _fun0004_ip = 26; continue _fun0004 }
 24:
            var12 = false;
 26:
            var3 = var7.flags;
            var8 = null;
            if(!(var8 != var3)) { _fun0004_ip = 93; continue _fun0004 }
 37:
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
            if(var3) { _fun0004_ip = 1062; continue _fun0004 }
 93:
            var6 = _closure1_slot10;
            var4 = var6.getChannel;
            var11 = var4.bind(var6)(var2);
            var9 = var7.type;
            var4 = _closure1_slot23;
            var6 = var4.THREAD_STARTER_MESSAGE;
            var4 = var11;
            if(!(var9 === var6)) { _fun0004_ip = 161; continue _fun0004 }
 132:
            var10 = _closure1_slot10;
            var9 = var10.getChannel;
            var13 = var8 == var11;
            var6 = undefined;
            if(var13) { _fun0004_ip = 156; continue _fun0004 }
 150:
            var6 = var11.parent_id;
 156:
            var4 = var9.bind(var10)(var6);
 161:
            var11 = _closure1_slot18;
            var6 = var11.getCurrentUser;
            var6 = var6.bind(var11)();
            var10 = var11.getUser;
            var13 = var7.author;
            var14 = var8 == var13;
            var9 = undefined;
            if(var14) { _fun0004_ip = 200; continue _fun0004 }
 195:
            var9 = var13.id;
 200:
            var11 = var10.bind(var11)(var9);
            if(!(var8 != var4)) { _fun0004_ip = 1058; continue _fun0004 }
 212:
            if(!(var8 != var6)) { _fun0004_ip = 1058; continue _fun0004 }
 219:
            if(!(var8 != var11)) { _fun0004_ip = 1058; continue _fun0004 }
 226:
            var10 = var4.type;
            var9 = _closure1_slot21;
            var9 = var9.GROUP_DM;
            if(!(var10 === var9)) { _fun0004_ip = 267; continue _fun0004 }
 245:
            var10 = var7.type;
            var9 = _closure1_slot23;
            var9 = var9.RECIPIENT_REMOVE;
            if(!(var10 !== var9)) { _fun0004_ip = 1054; continue _fun0004 }
 267:
            var10 = _closure1_slot19;
            var9 = var10.areSlayerNotificationsSuppressed;
            var9 = var9.bind(var10)();
            if(!var9) { _fun0004_ip = 324; continue _fun0004 }
 286:
            var10 = var4.type;
            var9 = _closure1_slot21;
            var9 = var9.DM;
            var9 = var10 === var9;
            if(var9) { _fun0004_ip = 318; continue _fun0004 }
 308:
            var10 = var4.linkedLobby;
            var9 = var8 != var10;
 318:
            if(var9) { _fun0004_ip = 1050; continue _fun0004 }
 324:
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
            if(var9) { _fun0004_ip = 390; continue _fun0004 }
 386:
            var9 = false;
            return var9;
 390:
            var10 = _closure1_slot5;
            var9 = var10.isMessageRequest;
            var9 = var9.bind(var10)(var2);
            if(var9) { _fun0004_ip = 1046; continue _fun0004 }
 411:
            if(var1) { _fun0004_ip = 484; continue _fun0004 }
 414:
            var10 = _closure1_slot14;
            var9 = var10.getChannelId;
            var11 = _closure1_slot15;
            var1 = var11.getGuildId;
            var1 = var1.bind(var11)();
            var10 = var9.bind(var10)(var1);
            var1 = var4.id;
            if(!(var10 !== var1)) { _fun0004_ip = 480; continue _fun0004 }
 452:
            var9 = _closure1_slot9;
            var1 = var9.getCurrentSidebarChannelId;
            var9 = var1.bind(var9)(var10);
            var1 = var4.id;
            if(!(var9 === var1)) { _fun0004_ip = 484; continue _fun0004 }
 476:
            var1 = false;
            return var1;
 480:
            var1 = false;
            return var1;
 484:
            var9 = _closure1_slot13;
            var1 = var9.isBlockedOrIgnoredForMessage;
            var1 = var1.bind(var9)(var7);
            if(var1) { _fun0004_ip = 1042; continue _fun0004 }
 505:
            var1 = var7.activity_instance;
            if(!(var5 !== var1)) { _fun0004_ip = 553; continue _fun0004 }
 515:
            var1 = var7.interaction;
            if(!(var8 != var1)) { _fun0004_ip = 553; continue _fun0004 }
 525:
            var1 = var7.interaction;
            var1 = var1.user;
            var9 = var1.id;
            var1 = var6.id;
            if(!(var9 !== var1)) { _fun0004_ip = 1038; continue _fun0004 }
 553:
            var1 = var7.application_id;
            if(!(var8 != var1)) { _fun0004_ip = 618; continue _fun0004 }
 563:
            var9 = _closure1_slot3;
            var1 = var9.getCurrentEmbeddedActivity;
            var1 = var1.bind(var9)();
            var8 = var8 == var1;
            var9 = undefined;
            if(var8) { _fun0004_ip = 591; continue _fun0004 }
 586:
            var9 = var1.applicationId;
 591:
            var8 = var7.application_id;
            if(!(var9 === var8)) { _fun0004_ip = 618; continue _fun0004 }
 601:
            var1 = var1.location;
            var1 = var1.channel_id;
            if(!(var1 !== var2)) { _fun0004_ip = 1034; continue _fun0004 }
 618:
            var2 = var7.type;
            var1 = _closure1_slot23;
            var1 = var1.CHAT_WALLPAPER_SET;
            if(!(var2 !== var1)) { _fun0004_ip = 1030; continue _fun0004 }
 640:
            var2 = var7.type;
            var1 = _closure1_slot23;
            var1 = var1.CHAT_WALLPAPER_REMOVED;
            if(!(var2 !== var1)) { _fun0004_ip = 1030; continue _fun0004 }
 662:
            var8 = _closure1_slot8;
            var2 = var8.has;
            var1 = var4.type;
            var1 = var2.bind(var8)(var1);
            if(var1) { _fun0004_ip = 871; continue _fun0004 }
 687:
            var8 = _closure1_slot7;
            var2 = var8.has;
            var1 = var4.type;
            var1 = var2.bind(var8)(var1);
            var1 = !var1;
            if(var1) { _fun0004_ip = 735; continue _fun0004 }
 712:
            var8 = _closure1_slot12;
            var2 = var8.getChannelId;
            var8 = var2.bind(var8)();
            var2 = var4.id;
            var1 = var8 === var2;
 735:
            var8 = _closure1_slot17;
            var2 = var8.allowAllMessages;
            var2 = var2.bind(var8)(var4);
            if(!var2) { _fun0004_ip = 758; continue _fun0004 }
 755:
            if(var1) { _fun0004_ip = 867; continue _fun0004 }
 758:
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
 867:
            var1 = true;
            return var1;
 871:
            var8 = _closure1_slot6;
            var2 = var8.isMuted;
            var1 = var4.id;
            var1 = var2.bind(var8)(var1);
            if(var1) { _fun0004_ip = 1026; continue _fun0004 }
 897:
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
            if(!var1) { _fun0004_ip = 1024; continue _fun0004 }
 945:
            var2 = _closure1_slot27;
            var2 = var2.ALL_MESSAGES;
            var2 = var4 === var2;
            if(var2) { _fun0004_ip = 1021; continue _fun0004 }
 962:
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
 1021:
            var1 = var2;
 1024:
            return var1;
 1026:
            var1 = false;
            return var1;
 1030:
            var1 = false;
            return var1;
 1034:
            var1 = false;
            return var1;
 1038:
            var1 = false;
            return var1;
 1042:
            var1 = false;
            return var1;
 1046:
            var1 = false;
            return var1;
 1050:
            var1 = false;
            return var1;
 1054:
            var1 = false;
            return var1;
 1058:
            var1 = false;
            return var1;
 1062:
            var1 = false;
            return var1;
        }
    };
    var3['shouldNotify'] = var5;
    var5 = function shouldNotifyForSelectedChannel(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var11 = arg1;
            var3 = arg2;
            var4 = _closure1_slot14;
            var2 = var4.getChannelId;
            var5 = _closure1_slot15;
            var1 = var5.getGuildId;
            var1 = var1.bind(var5)();
            var1 = var2.bind(var4)(var1);
            if(!(var1 === var3)) { _fun0005_ip = 438; continue _fun0005 }
 45:
            var2 = _closure1_slot10;
            var1 = var2.getChannel;
            var4 = var1.bind(var2)(var3);
            var2 = var11.type;
            var1 = _closure1_slot23;
            var1 = var1.THREAD_STARTER_MESSAGE;
            var12 = var4;
            if(!(var2 === var1)) { _fun0005_ip = 112; continue _fun0005 }
 81:
            var3 = _closure1_slot10;
            var2 = var3.getChannel;
            var1 = null;
            var5 = var1 == var4;
            var1 = undefined;
            if(var5) { _fun0005_ip = 107; continue _fun0005 }
 101:
            var1 = var4.parent_id;
 107:
            var12 = var2.bind(var3)(var1);
 112:
            var4 = _closure1_slot18;
            var1 = var4.getCurrentUser;
            var5 = var1.bind(var4)();
            var3 = var4.getUser;
            var6 = var11.author;
            var2 = null;
            var7 = var2 == var6;
            var9 = undefined;
            var1 = undefined;
            if(var7) { _fun0005_ip = 155; continue _fun0005 }
 150:
            var1 = var6.id;
 155:
            var6 = var3.bind(var4)(var1);
            var1 = var2 != var12;
            if(!var1) { _fun0005_ip = 171; continue _fun0005 }
 167:
            var1 = var2 != var5;
 171:
            if(!var1) { _fun0005_ip = 178; continue _fun0005 }
 174:
            var1 = var2 != var6;
 178:
            if(!var1) { _fun0005_ip = 436; continue _fun0005 }
 184:
            var2 = var12.isManaged;
            var2 = var2.bind(var12)();
            var2 = !var2;
            if(!var2) { _fun0005_ip = 433; continue _fun0005 }
 203:
            var4 = var6.hasFlag;
            var3 = _closure1_slot26;
            var3 = var3.SPAMMER;
            var3 = var4.bind(var6)(var3);
            var3 = !var3;
            if(!var3) { _fun0005_ip = 430; continue _fun0005 }
 233:
            var7 = _closure1_slot13;
            var4 = var7.isBlockedOrIgnoredForMessage;
            var4 = var4.bind(var7)(var11);
            var4 = !var4;
            if(!var4) { _fun0005_ip = 427; continue _fun0005 }
 257:
            var6 = var6.id;
            var5 = var5.id;
            var5 = var6 !== var5;
            if(!var5) { _fun0005_ip = 424; continue _fun0005 }
 277:
            var7 = _closure1_slot16;
            var6 = var7.getStatus;
            var7 = var6.bind(var7)();
            var6 = _closure1_slot25;
            var6 = var6.DND;
            var6 = var7 !== var6;
            if(!var6) { _fun0005_ip = 421; continue _fun0005 }
 308:
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 18;
            var7 = var13[var7];
            var7 = var8.bind(var9)(var7);
            var8 = var7.FocusMode;
            var7 = var8.getSetting;
            var7 = var7.bind(var8)();
            var7 = !var7;
            if(!var7) { _fun0005_ip = 418; continue _fun0005 }
 350:
            var9 = _closure1_slot17;
            var8 = var9.allowNoMessages;
            var8 = var8.bind(var9)(var12);
            var8 = !var8;
            if(!var8) { _fun0005_ip = 415; continue _fun0005 }
 371:
            var12 = var11.type;
            var9 = _closure1_slot23;
            var9 = var9.CHAT_WALLPAPER_SET;
            var9 = var12 !== var9;
            if(!var9) { _fun0005_ip = 412; continue _fun0005 }
 393:
            var11 = var11.type;
            var10 = _closure1_slot23;
            var10 = var10.CHAT_WALLPAPER_REMOVED;
            var9 = var11 !== var10;
 412:
            var8 = var9;
 415:
            var7 = var8;
 418:
            var6 = var7;
 421:
            var5 = var6;
 424:
            var4 = var5;
 427:
            var3 = var4;
 430:
            var2 = var3;
 433:
            var1 = var2;
 436:
            return var1;
 438:
            var1 = false;
            return var1;
        }
    };
    var3['shouldNotifyForSelectedChannel'] = var5;
    var5 = function shouldNotifyForForumThreadCreation(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var7 = arg2;
            var4 = arguments[2];
            var10 = arguments[3];
            var9 = undefined;
            if(!(var4 === var9)) { _fun0006_ip = 17; continue _fun0006 }
 15:
            var4 = true;
 17:
            if(!(var10 === var9)) { _fun0006_ip = 23; continue _fun0006 }
 21:
            var10 = false;
 23:
            var3 = _closure1_slot18;
            var1 = var3.getCurrentUser;
            var8 = var1.bind(var3)();
            var2 = var3.getUser;
            var1 = arg1;
            var1 = var1.ownerId;
            var6 = var2.bind(var3)(var1);
            var2 = null;
            var1 = var2 != var7;
            if(!var1) { _fun0006_ip = 72; continue _fun0006 }
 68:
            var1 = var2 != var8;
 72:
            if(!var1) { _fun0006_ip = 79; continue _fun0006 }
 75:
            var1 = var2 != var6;
 79:
            if(!var1) { _fun0006_ip = 236; continue _fun0006 }
 85:
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
            if(!var3) { _fun0006_ip = 233; continue _fun0006 }
 130:
            var9 = _closure1_slot17;
            var8 = var9.isGuildOrCategoryOrChannelMuted;
            var6 = var7.guild_id;
            var3 = var7.id;
            var3 = var8.bind(var9)(var6, var3);
            var3 = !var3;
            if(!var3) { _fun0006_ip = 230; continue _fun0006 }
 162:
            var6 = !var4;
            if(!var6) { _fun0006_ip = 206; continue _fun0006 }
 168:
            var9 = _closure1_slot14;
            var8 = var9.getChannelId;
            var10 = _closure1_slot15;
            var4 = var10.getGuildId;
            var4 = var4.bind(var10)();
            var8 = var8.bind(var9)(var4);
            var4 = var7.id;
            var6 = var8 === var4;
 206:
            var4 = !var6;
            if(var6) { _fun0006_ip = 227; continue _fun0006 }
 212:
            var6 = _closure1_slot17;
            var5 = var6.getNewForumThreadsCreated;
            var4 = var5.bind(var6)(var7);
 227:
            var3 = var4;
 230:
            var2 = var3;
 233:
            var1 = var2;
 236:
            return var1;
        }
    };
    var3['shouldNotifyForForumThreadCreation'] = var5;
    var5 = function shouldNotifyVoiceStatus(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var3 = _closure1_slot18;
            var1 = var3.getCurrentUser;
            var6 = var1.bind(var3)();
            var1 = null;
            var1 = var1 != var6;
            if(!var1) { _fun0007_ip = 44; continue _fun0007 }
 25:
            var5 = _closure1_slot29;
            var4 = undefined;
            var3 = arg1;
            var2 = arg2;
            var1 = var5.bind(var4)(var6, var3, var2);
 44:
            return var1;
        }
    };
    var3['shouldNotifyVoiceStatus'] = var5;
    var3['renderTitle'] = var4;
    var4 = function makeTextChatNotification(arg1, arg2, arg3) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var7 = arg1;
            var1 = arg2;
            var10 = arg3;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 25;
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
            if(!(var3 !== var5)) { _fun0008_ip = 350; continue _fun0008 }
 84:
            var3 = _closure1_slot21;
            var3 = var3.GUILD_TEXT;
            if(!(var3 !== var5)) { _fun0008_ip = 350; continue _fun0008 }
 101:
            var3 = _closure1_slot21;
            var3 = var3.GUILD_VOICE;
            if(!(var3 !== var5)) { _fun0008_ip = 350; continue _fun0008 }
 118:
            var3 = _closure1_slot21;
            var3 = var3.ANNOUNCEMENT_THREAD;
            if(!(var3 !== var5)) { _fun0008_ip = 350; continue _fun0008 }
 135:
            var3 = _closure1_slot21;
            var3 = var3.PUBLIC_THREAD;
            if(!(var3 !== var5)) { _fun0008_ip = 350; continue _fun0008 }
 152:
            var3 = _closure1_slot21;
            var3 = var3.PRIVATE_THREAD;
            if(!(var3 !== var5)) { _fun0008_ip = 350; continue _fun0008 }
 169:
            var3 = _closure1_slot21;
            var3 = var3.GROUP_DM;
            var6 = var13;
            if(!(var3 === var5)) { _fun0008_ip = 513; continue _fun0008 }
 189:
            var3 = var7.isManaged;
            var3 = var3.bind(var7)();
            if(!var3) { _fun0008_ip = 208; continue _fun0008 }
 202:
            var3 = var10.bot;
 208:
            if(!var3) { _fun0008_ip = 256; continue _fun0008 }
 211:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 22;
            var5 = var9[var5];
            var11 = var8.bind(var4)(var5);
            var9 = var11.computeChannelName;
            var8 = _closure1_slot18;
            var5 = _closure1_slot13;
            var5 = var9.bind(var11)(var7, var8, var5);
            var3 = var13 === var5;
 256:
            var6 = var13;
            if(var3) { _fun0008_ip = 513; continue _fun0008 }
 265:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 22;
            var3 = var8[var3];
            var11 = var5.bind(var4)(var3);
            var9 = var11.computeChannelName;
            var22 = _closure1_slot18;
            var21 = _closure1_slot13;
            var20 = true;
            var24 = var11;
            var23 = var7;
            var21 = var24[var9](var23, var22, var21, var20, var19);
            var3 = global;
            var3 = var3.HermesInternal;
            var9 = var3.concat;
            var24 = '';
            var22 = ' (';
            var20 = ')';
            var23 = var13;
            var6 = var24[var9](var23, var22, var21, var20, var19);
            _fun0008_ip = 513; continue _fun0008;
 350:
            var8 = _closure1_slot10;
            var5 = var8.getChannel;
            var3 = var7.parent_id;
            var8 = var5.bind(var8)(var3);
            var5 = var1.type;
            var3 = _closure1_slot23;
            var3 = var3.THREAD_STARTER_MESSAGE;
            if(!(var5 === var3)) { _fun0008_ip = 395; continue _fun0008 }
 389:
            var3 = null;
            if(!(var3 == var8)) { _fun0008_ip = 482; continue _fun0008 }
 395:
            var5 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 26;
            var3 = var9[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)(var1);
            if(var3) { _fun0008_ip = 436; continue _fun0008 }
 423:
            var3 = _closure1_slot28;
            var6 = var3.bind(var4)(var13, var7, var8);
            _fun0008_ip = 513; continue _fun0008;
 436:
            var9 = _closure1_slot11;
            var5 = var9.getGuild;
            var3 = var7.getGuildId;
            var3 = var3.bind(var7)();
            var5 = var5.bind(var9)(var3);
            var3 = null;
            var6 = var13;
            if(!(var3 != var5)) { _fun0008_ip = 513; continue _fun0008 }
 469:
            var3 = _closure1_slot28;
            var6 = var3.bind(var4)(var13, var7, var8);
            _fun0008_ip = 513; continue _fun0008;
 482:
            var5 = _closure1_slot28;
            var11 = _closure1_slot10;
            var9 = var11.getChannel;
            var3 = var8.parent_id;
            var3 = var9.bind(var11)(var3);
            var6 = var5.bind(var4)(var13, var8, var3);
 513:
            var16 = var1.content;
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 26;
            var3 = var8[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)(var1);
            if(!var3) { _fun0008_ip = 587; continue _fun0008 }
 546:
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 27;
            var3 = var8[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.stringify;
            var16 = var3.bind(var5)(var1, var7);
            var3 = null;
            if(!(var3 != var16)) { _fun0008_ip = 2552; continue _fun0008 }
 587:
            var3 = 'sticker_items';
            var3 = var3 in var1;
            if(var3) { _fun0008_ip = 625; continue _fun0008 }
 598:
            var3 = 'stickerItems';
            var3 = var3 in var1;
            if(var3) { _fun0008_ip = 617; continue _fun0008 }
 609:
            var14 = var1.stickers;
            _fun0008_ip = 623; continue _fun0008;
 617:
            var14 = var1.stickerItems;
 623:
            _fun0008_ip = 631; continue _fun0008;
 625:
            var14 = var1.sticker_items;
 631:
            var3 = 'message_reference';
            var3 = var3 in var1;
            if(var3) { _fun0008_ip = 669; continue _fun0008 }
 642:
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 29;
            var3 = var8[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)(var1);
            _fun0008_ip = 700; continue _fun0008;
 669:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 29;
            var5 = var9[var5];
            var8 = var8.bind(var4)(var5);
            var5 = var8.isForwardServerMessage;
            var3 = var5.bind(var8)(var1);
 700:
            if(var3) { _fun0008_ip = 1916; continue _fun0008 }
 706:
            var5 = var1.activity;
            var3 = null;
            if(!(var3 != var5)) { _fun0008_ip = 730; continue _fun0008 }
 718:
            var5 = var1.application;
            if(!(var3 == var5)) { _fun0008_ip = 1580; continue _fun0008 }
 730:
            var5 = var1.activity;
            if(!(var3 != var5)) { _fun0008_ip = 768; continue _fun0008 }
 740:
            var5 = var1.activity;
            var8 = var5.type;
            var5 = _closure1_slot20;
            var5 = var5.LISTEN;
            if(!(var8 !== var5)) { _fun0008_ip = 1454; continue _fun0008 }
 768:
            if(!(var3 != var14)) { _fun0008_ip = 786; continue _fun0008 }
 772:
            var5 = var14.length;
            var12 = 0;
            if(!(!(var5 > var12))) { _fun0008_ip = 1375; continue _fun0008 }
 786:
            var8 = var1.type;
            var5 = _closure1_slot23;
            var5 = var5.PREMIUM_REFERRAL;
            if(!(var8 !== var5)) { _fun0008_ip = 1281; continue _fun0008 }
 808:
            var5 = var1.poll;
            if(!(var3 == var5)) { _fun0008_ip = 1196; continue _fun0008 }
 821:
            var8 = var1.type;
            var5 = _closure1_slot23;
            var5 = var5.POLL_RESULT;
            if(!(var8 !== var5)) { _fun0008_ip = 1025; continue _fun0008 }
 843:
            var5 = var16.length;
            var9 = 0;
            if(!(var9 !== var5)) { _fun0008_ip = 980; continue _fun0008 }
 857:
            var8 = var7.type;
            var5 = _closure1_slot21;
            var5 = var5.DM;
            if(!(var8 === var5)) { _fun0008_ip = 980; continue _fun0008 }
 876:
            var5 = var10.bot;
            if(var5) { _fun0008_ip = 980; continue _fun0008 }
 885:
            var8 = var16.startsWith;
            var5 = '> -# *';
            var5 = var8.bind(var16)(var5);
            if(!var5) { _fun0008_ip = 980; continue _fun0008 }
 905:
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 31;
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
            _fun0008_ip = 1020; continue _fun0008;
 980:
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 31;
            var8 = var11[var8];
            var15 = var9.bind(var4)(var8);
            var11 = var15.unparse;
            var9 = var7.id;
            var8 = true;
            var5 = var11.bind(var15)(var16, var9, var8);
 1020:
            _fun0008_ip = 1971; continue _fun0008;
 1025:
            var11 = var1.embeds;
            var9 = var3 == var11;
            var8 = undefined;
            if(var9) { _fun0008_ip = 1088; continue _fun0008 }
 1040:
            var9 = 0;
            var9 = var11[var9];
            var11 = var3 == var9;
            var8 = undefined;
            if(var11) { _fun0008_ip = 1088; continue _fun0008 }
 1055:
            var15 = var9.fields;
            var9 = var3 == var15;
            var8 = undefined;
            if(var9) { _fun0008_ip = 1088; continue _fun0008 }
 1070:
            var11 = var15.find;
            var9 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = arg1;
                    var2 = 'name';
                    var2 = var2 in var1;
                    if(var2) { _fun0009_ip = 22; continue _fun0009 }
 14:
                    var2 = var1.rawName;
                    _fun0009_ip = 27; continue _fun0009;
 22:
                    var2 = var1.name;
 27:
                    var1 = 'poll_question_text';
                    var1 = var1 === var2;
                    return var1;
                }
            };
            var8 = var11.bind(var15)(var9);
 1088:
            var3 = var3 != var8;
            var15 = '';
            if(!var3) { _fun0008_ip = 1126; continue _fun0008 }
 1099:
            var3 = 'value';
            var3 = var3 in var8;
            if(var3) { _fun0008_ip = 1118; continue _fun0008 }
 1110:
            var3 = var8.rawValue;
            _fun0008_ip = 1123; continue _fun0008;
 1118:
            var3 = var8.value;
 1123:
            var15 = var3;
 1126:
            var8 = _closure1_slot0;
            var16 = _closure1_slot2;
            var3 = 23;
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
            _fun0008_ip = 1971; continue _fun0008;
 1196:
            var8 = _closure1_slot0;
            var15 = _closure1_slot2;
            var3 = 23;
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
            _fun0008_ip = 1971; continue _fun0008;
 1281:
            var8 = _closure1_slot0;
            var17 = _closure1_slot2;
            var3 = 23;
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
            var15 = 30;
            var15 = var17[var15];
            var16 = var16.bind(var4)(var15);
            var15 = var16.getName;
            var15 = var15.bind(var16)(var10);
            var3['username'] = var15;
            var5 = var9.bind(var11)(var8, var3);
            _fun0008_ip = 1971; continue _fun0008;
 1375:
            var8 = _closure1_slot0;
            var15 = _closure1_slot2;
            var3 = 23;
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
            _fun0008_ip = 1971; continue _fun0008;
 1454:
            var15 = _closure1_slot30;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 23;
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
            _fun0008_ip = 1971; continue _fun0008;
 1580:
            var3 = var1.activity;
            var8 = var3.type;
            var3 = _closure1_slot20;
            var3 = var3.JOIN;
            if(!(var8 !== var3)) { _fun0008_ip = 1775; continue _fun0008 }
 1608:
            var3 = var1.activity;
            var9 = var3.type;
            var3 = _closure1_slot20;
            var8 = var3.JOIN_REQUEST;
            var3 = '';
            if(!(var9 === var8)) { _fun0008_ip = 1770; continue _fun0008 }
 1640:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var8 = 23;
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
 1770:
            _fun0008_ip = 1911; continue _fun0008;
 1775:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var8 = 23;
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
 1911:
            var5 = var3;
            _fun0008_ip = 1971; continue _fun0008;
 1916:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 23;
            var8 = var12[var3];
            var8 = var11.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var3 = var12[var3];
            var3 = var11.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.9ddYKi;
            var5 = var8.bind(var9)(var3);
 1971:
            var3 = var5.length;
            var11 = 0;
            if(!(var11 === var3)) { _fun0008_ip = 2516; continue _fun0008 }
 1985:
            var3 = var1.embeds;
            if(!(var4 !== var3)) { _fun0008_ip = 2115; continue _fun0008 }
 1995:
            var3 = var1.embeds;
            var3 = var3.length;
            if(!(var3 > var11)) { _fun0008_ip = 2115; continue _fun0008 }
 2010:
            var3 = var1.embeds;
            var8 = var3[var11];
            var3 = 'description';
            var3 = var3 in var8;
            if(var3) { _fun0008_ip = 2039; continue _fun0008 }
 2031:
            var14 = var8.rawDescription;
            _fun0008_ip = 2044; continue _fun0008;
 2039:
            var14 = var8.description;
 2044:
            var3 = 'title';
            var3 = var3 in var8;
            if(var3) { _fun0008_ip = 2063; continue _fun0008 }
 2055:
            var13 = var8.rawTitle;
            _fun0008_ip = 2068; continue _fun0008;
 2063:
            var13 = var8.title;
 2068:
            var9 = null;
            if(!(var9 == var14)) { _fun0008_ip = 2475; continue _fun0008 }
 2077:
            var3 = var13;
            if(!(var9 == var3)) { _fun0008_ip = 2513; continue _fun0008 }
 2087:
            var12 = var8.fields;
            if(!(var9 != var12)) { _fun0008_ip = 2115; continue _fun0008 }
 2097:
            var12 = var8.fields;
            var12 = var12.length;
            if(!(!(var12 > var11))) { _fun0008_ip = 2387; continue _fun0008 }
 2115:
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
            if(!var18) { _fun0008_ip = 2160; continue _fun0008 }
 2157:
            var15 = var12;
 2160:
            var12 = _closure1_slot22;
            var12 = var12.IS_VOICE_MESSAGE;
            var12 = var16.bind(var17)(var15, var12);
            if(var12) { _fun0008_ip = 2327; continue _fun0008 }
 2182:
            var12 = var1.attachments;
            var15 = '';
            var3 = var15;
            if(!(var4 !== var12)) { _fun0008_ip = 2513; continue _fun0008 }
 2202:
            var12 = var1.attachments;
            var12 = var12.length;
            var12 = var12 > var11;
            var3 = var15;
            if(!var12) { _fun0008_ip = 2513; continue _fun0008 }
 2226:
            var15 = _closure1_slot1;
            var19 = _closure1_slot2;
            var12 = 24;
            var12 = var19[var12];
            var15 = var15.bind(var4)(var12);
            var12 = var1.attachments;
            var12 = var12[var11];
            var18 = var15.bind(var4)(var12);
            var15 = _closure1_slot0;
            var12 = 23;
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
            _fun0008_ip = 2513; continue _fun0008;
 2327:
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var12 = 23;
            var15 = var18[var12];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var12 = var18[var12];
            var12 = var17.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.slFYgo;
            var3 = var15.bind(var16)(var12);
            _fun0008_ip = 2513; continue _fun0008;
 2387:
            var8 = var8.fields;
            var8 = var8[var11];
            var11 = 'name';
            var11 = var11 in var8;
            if(var11) { _fun0008_ip = 2416; continue _fun0008 }
 2408:
            var16 = var8.rawName;
            _fun0008_ip = 2421; continue _fun0008;
 2416:
            var16 = var8.name;
 2421:
            var11 = 'value';
            var11 = var11 in var8;
            if(var11) { _fun0008_ip = 2440; continue _fun0008 }
 2432:
            var15 = var8.rawValue;
            _fun0008_ip = 2445; continue _fun0008;
 2440:
            var15 = var8.value;
 2445:
            var8 = global;
            var8 = var8.HermesInternal;
            var12 = var8.concat;
            var11 = '';
            var8 = ' ';
            var3 = var12.bind(var11)(var16, var8, var15);
            _fun0008_ip = 2513; continue _fun0008;
 2475:
            var8 = var14;
            if(!(var9 != var13)) { _fun0008_ip = 2510; continue _fun0008 }
 2482:
            var9 = global;
            var9 = var9.HermesInternal;
            var12 = var9.concat;
            var11 = '';
            var9 = ' ';
            var8 = var12.bind(var11)(var13, var9, var14);
 2510:
            var3 = var8;
 2513:
            var5 = var3;
 2516:
            var3 = {};
            var9 = var10.getAvatarURL;
            var8 = var7.guild_id;
            var7 = 128;
            var7 = var9.bind(var10)(var8, var7);
            var3['icon'] = var7;
            var3['title'] = var6;
            var3['body'] = var5;
            return var3;
 2552:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 28;
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
 0:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 18;
            var1 = var5[var1];
            var3 = undefined;
            var1 = var4.bind(var3)(var1);
            var2 = var1.ShowInAppNotifications;
            var1 = var2.getSetting;
            var1 = var1.bind(var2)();
            var2 = 32;
            var2 = var5[var2];
            var3 = var4.bind(var3)(var2);
            var2 = var3.getFocusModeEnabled;
            var2 = var2.bind(var3)();
            if(!var1) { _fun0010_ip = 69; continue _fun0010 }
 66:
            var1 = !var2;
 69:
            return var1;
        }
    };
    var3['allowInAppNotifications'] = var4;
    var2 = function useAllowInAppNotifications() {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 18;
            var1 = var5[var1];
            var3 = undefined;
            var1 = var4.bind(var3)(var1);
            var2 = var1.ShowInAppNotifications;
            var1 = var2.useSetting;
            var1 = var1.bind(var2)();
            var2 = 32;
            var2 = var5[var2];
            var3 = var4.bind(var3)(var2);
            var2 = var3.useFocusModeEnabled;
            var2 = var2.bind(var3)();
            if(!var1) { _fun0011_ip = 69; continue _fun0011 }
 66:
            var1 = !var2;
 69:
            return var1;
        }
    };
    var3['useAllowInAppNotifications'] = var2;
    return var1;
})();