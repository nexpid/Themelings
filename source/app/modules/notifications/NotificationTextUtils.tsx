// app/modules/notifications/NotificationTextUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    oscard = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
    var _closure1_slot2 = option;
    report = function(argFoo, argBar, argBaz) { // Original name: shouldNotifyBase
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argBar;
            verify = argBaz;
            oscard = arguments[3];
            offset = undefined;
            if(!(oscard === offset)) { _fun00002_ip = 17; continue _fun00001 }
 15:
            oscard = {};
 17:
            michal = zuuluu.hasFlag;
            entity = _closure1_slot26;
            entity = entity.SPAMMER;
            entity = michal.bind(zuuluu)(entity);
            if(entity) { _fun00002_ip = 309; continue _fun00001 }
 47:
            entity = verify.isManaged;
            entity = entity.bind(verify)();
            if(entity) { _fun00002_ip = 305; continue _fun00001 }
 63:
            entity = verify.getGuildId;
            report = entity.bind(verify)();
            entity = null;
            entity = entity == report;
            if(entity) { _fun00002_ip = 100; continue _fun00001 }
 82:
            tangon = _closure1_slot4;
            michal = tangon.isLurking;
            michal = michal.bind(tangon)(report);
            entity = !michal;
 100:
            if(!entity) { _fun00002_ip = 303; continue _fun00001 }
 106:
            michal = oscard.ignoreSameUser;
            tangon = !michal;
            if(!tangon) { _fun00002_ip = 135; continue _fun00001 }
 118:
            report = zuuluu.id;
            michal = argFoo;
            michal = michal.id;
            tangon = report === michal;
 135:
            michal = !tangon;
            if(tangon) { _fun00002_ip = 300; continue _fun00001 }
 144:
            report = _closure1_slot13;
            tangon = report.isBlockedOrIgnored;
            zuuluu = zuuluu.id;
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = !zuuluu;
            if(!zuuluu) { _fun00002_ip = 297; continue _fun00001 }
 173:
            tangon = oscard.ignoreStatus;
            report = !tangon;
            if(!report) { _fun00002_ip = 213; continue _fun00001 }
 185:
            option = _closure1_slot16;
            tangon = option.getStatus;
            option = tangon.bind(option)();
            tangon = _closure1_slot25;
            tangon = tangon.DND;
            report = option === tangon;
 213:
            tangon = !report;
            if(report) { _fun00002_ip = 294; continue _fun00001 }
 219:
            option = _closure1_slot0;
            yankee = _closure1_slot2;
            report = 18;
            report = yankee[report];
            report = option.bind(offset)(report);
            option = report.FocusMode;
            report = option.getSetting;
            report = report.bind(option)();
            report = !report;
            if(!report) { _fun00002_ip = 291; continue _fun00001 }
 261:
            oscard = oscard.ignoreNoMessagesSetting;
            oscard = !oscard;
            if(!oscard) { _fun00002_ip = 288; continue _fun00001 }
 273:
            option = _closure1_slot17;
            golfie = option.allowNoMessages;
            oscard = golfie.bind(option)(verify);
 288:
            report = !oscard;
 291:
            tangon = report;
 294:
            zuuluu = tangon;
 297:
            michal = zuuluu;
 300:
            entity = michal;
 303:
            return entity;
 305:
            entity = false;
            return entity;
 309:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot29 = report;
    entity = function(argFoo, argBar, argBaz, argCor) { // Original name: getInviteEmbedFormatString
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.type;
            michal = _closure1_slot21;
            michal = michal.GUILD_ANNOUNCEMENT;
            if(!(michal !== zuuluu)) { _fun00004_ip = 73; continue _fun00003 }
 25:
            michal = _closure1_slot21;
            michal = michal.GUILD_TEXT;
            if(!(michal !== zuuluu)) { _fun00004_ip = 73; continue _fun00003 }
 39:
            michal = _closure1_slot21;
            michal = michal.GROUP_DM;
            if(!(michal !== zuuluu)) { _fun00004_ip = 68; continue _fun00003 }
 53:
            entity = _closure1_slot21;
            entity = entity.DM;
            entity = argCor;
            return entity;
 68:
            entity = argBaz;
            return entity;
 73:
            entity = argBar;
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, tangon);
    entity = 0;
    tangon = option[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = option[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = option[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = option[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = option[tangon];
    tangon = golfie.bind(entity)(tangon);
    verify = tangon.GUILD_VOCAL_CHANNEL_TYPES;
    var _closure1_slot7 = verify;
    tangon = tangon.THREAD_CHANNEL_TYPES;
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = option[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 6;
    tangon = option[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 7;
    tangon = option[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 8;
    tangon = option[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 9;
    tangon = option[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot13 = tangon;
    tangon = 10;
    tangon = option[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot14 = tangon;
    tangon = 11;
    tangon = option[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot15 = tangon;
    tangon = 12;
    tangon = option[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot16 = tangon;
    tangon = 13;
    tangon = option[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot17 = tangon;
    tangon = 14;
    tangon = option[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot18 = tangon;
    tangon = 15;
    tangon = option[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot19 = tangon;
    tangon = 16;
    tangon = option[tangon];
    tangon = golfie.bind(entity)(tangon);
    oscard = tangon.ActivityActionTypes;
    var _closure1_slot20 = oscard;
    oscard = tangon.ChannelTypes;
    var _closure1_slot21 = oscard;
    oscard = tangon.MessageFlags;
    var _closure1_slot22 = oscard;
    oscard = tangon.MessageTypes;
    var _closure1_slot23 = oscard;
    oscard = tangon.MessageTypesSets;
    var _closure1_slot24 = oscard;
    oscard = tangon.StatusTypes;
    var _closure1_slot25 = oscard;
    tangon = tangon.UserFlags;
    var _closure1_slot26 = tangon;
    tangon = 17;
    tangon = option[tangon];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.ThreadMemberFlags;
    var _closure1_slot27 = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: renderTitle
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            option = argBaz;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            verify = 24;
            michal = michal[verify];
            tangon = undefined;
            offset = zuuluu.bind(tangon)(michal);
            golfie = offset.computeChannelName;
            backup = _closure1_slot18;
            foxtra = _closure1_slot13;
            kiloes = argBar;
            romeon = true;
            sizing = offset;
            golfie = sizing[golfie](kiloes, backup, foxtra, romeon, yankee);
            michal = null;
            michal = michal != option;
            oscard = '';
            report = oscard;
            if(!michal) { _fun00006_ip = 132; continue _fun00005 }
 70:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[verify];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.computeChannelName;
            michal = _closure1_slot18;
            entity = _closure1_slot13;
            zuuluu = zuuluu.bind(tangon)(option, michal, entity);
            entity = global;
            entity = entity.HermesInternal;
            michal = entity.concat;
            entity = ', ';
            report = michal.bind(entity)(zuuluu);
 132:
            entity = global;
            entity = entity.HermesInternal;
            tangon = entity.concat;
            kiloes = argFoo;
            backup = ' (';
            yankee = ')';
            sizing = oscard;
            foxtra = golfie;
            romeon = report;
            entity = sizing[tangon](kiloes, backup, foxtra, romeon, yankee, offset);
            return entity;
        }
    };
    var _closure1_slot28 = tangon;
    oscard = 35;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/notifications/NotificationTextUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['shouldNotifyBase'] = report;
    report = function(argFoo, argBar) { // Original name: shouldNotify
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            golfie = argFoo;
            option = argBar;
            entity = arguments[2];
            romeon = arguments[3];
            report = undefined;
            if(!(entity === report)) { _fun00008_ip = 20; continue _fun00007 }
 18:
            entity = true;
 20:
            if(!(romeon === report)) { _fun00008_ip = 26; continue _fun00007 }
 24:
            romeon = false;
 26:
            michal = golfie.flags;
            verify = null;
            if(!(verify != michal)) { _fun00008_ip = 93; continue _fun00007 }
 37:
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 19;
            zuuluu = oscard[zuuluu];
            oscard = tangon.bind(report)(zuuluu);
            tangon = oscard.hasFlag;
            zuuluu = golfie.flags;
            michal = _closure1_slot22;
            michal = michal.SUPPRESS_NOTIFICATIONS;
            michal = tangon.bind(oscard)(zuuluu, michal);
            if(michal) { _fun00008_ip = 1120; continue _fun00007 }
 93:
            tangon = _closure1_slot10;
            michal = tangon.getChannel;
            yankee = michal.bind(tangon)(option);
            oscard = golfie.type;
            michal = _closure1_slot23;
            michal = michal.THREAD_STARTER_MESSAGE;
            tangon = yankee;
            if(!(oscard === michal)) { _fun00008_ip = 161; continue _fun00007 }
 132:
            offset = _closure1_slot10;
            oscard = offset.getChannel;
            foxtra = verify == yankee;
            michal = undefined;
            if(foxtra) { _fun00008_ip = 156; continue _fun00007 }
 150:
            michal = yankee.parent_id;
 156:
            tangon = oscard.bind(offset)(michal);
 161:
            yankee = _closure1_slot18;
            michal = yankee.getCurrentUser;
            oscard = michal.bind(yankee)();
            offset = yankee.getUser;
            foxtra = golfie.author;
            backup = verify == foxtra;
            michal = undefined;
            if(backup) { _fun00008_ip = 200; continue _fun00007 }
 195:
            michal = foxtra.id;
 200:
            yankee = offset.bind(yankee)(michal);
            if(!(verify != tangon)) { _fun00008_ip = 1116; continue _fun00007 }
 212:
            if(!(verify != oscard)) { _fun00008_ip = 1116; continue _fun00007 }
 219:
            if(!(verify != yankee)) { _fun00008_ip = 1116; continue _fun00007 }
 226:
            offset = tangon.type;
            michal = _closure1_slot21;
            michal = michal.GROUP_DM;
            if(!(offset === michal)) { _fun00008_ip = 267; continue _fun00007 }
 245:
            offset = golfie.type;
            michal = _closure1_slot23;
            michal = michal.RECIPIENT_REMOVE;
            if(!(offset !== michal)) { _fun00008_ip = 1112; continue _fun00007 }
 267:
            offset = _closure1_slot19;
            michal = offset.areSlayerNotificationsSuppressed;
            michal = michal.bind(offset)();
            if(!michal) { _fun00008_ip = 324; continue _fun00007 }
 286:
            offset = tangon.type;
            michal = _closure1_slot21;
            michal = michal.DM;
            michal = offset === michal;
            if(michal) { _fun00008_ip = 318; continue _fun00007 }
 308:
            offset = tangon.linkedLobby;
            michal = verify != offset;
 318:
            if(michal) { _fun00008_ip = 1108; continue _fun00007 }
 324:
            offset = _closure1_slot29;
            michal = {};
            michal['ignoreStatus'] = romeon;
            romeon = _closure1_slot24;
            backup = romeon.SELF_MENTIONABLE_SYSTEM;
            foxtra = backup.has;
            romeon = golfie.type;
            romeon = foxtra.bind(backup)(romeon);
            michal['ignoreSameUser'] = romeon;
            echoed = undefined;
            result = oscard;
            output = yankee;
            sizing = tangon;
            kiloes = michal;
            michal = echoed[offset](result, output, sizing, kiloes, backup);
            if(michal) { _fun00008_ip = 390; continue _fun00007 }
 386:
            michal = false;
            return michal;
 390:
            offset = _closure1_slot5;
            michal = offset.isMessageRequest;
            michal = michal.bind(offset)(option);
            if(michal) { _fun00008_ip = 1104; continue _fun00007 }
 411:
            if(entity) { _fun00008_ip = 484; continue _fun00007 }
 414:
            offset = _closure1_slot14;
            michal = offset.getChannelId;
            yankee = _closure1_slot15;
            entity = yankee.getGuildId;
            entity = entity.bind(yankee)();
            offset = michal.bind(offset)(entity);
            entity = tangon.id;
            if(!(offset !== entity)) { _fun00008_ip = 480; continue _fun00007 }
 452:
            michal = _closure1_slot9;
            entity = michal.getCurrentSidebarChannelId;
            michal = entity.bind(michal)(offset);
            entity = tangon.id;
            if(!(michal === entity)) { _fun00008_ip = 484; continue _fun00007 }
 476:
            entity = false;
            return entity;
 480:
            entity = false;
            return entity;
 484:
            michal = _closure1_slot13;
            entity = michal.isBlockedOrIgnoredForMessage;
            entity = entity.bind(michal)(golfie);
            if(entity) { _fun00008_ip = 1100; continue _fun00007 }
 505:
            entity = golfie.activity_instance;
            if(!(report !== entity)) { _fun00008_ip = 553; continue _fun00007 }
 515:
            entity = golfie.interaction;
            if(!(verify != entity)) { _fun00008_ip = 553; continue _fun00007 }
 525:
            entity = golfie.interaction;
            entity = entity.user;
            michal = entity.id;
            entity = oscard.id;
            if(!(michal !== entity)) { _fun00008_ip = 1096; continue _fun00007 }
 553:
            michal = _closure1_slot1;
            offset = _closure1_slot2;
            entity = 20;
            entity = offset[entity];
            romeon = michal.bind(report)(entity);
            yankee = romeon.getCurrentConfig;
            offset = {};
            entity = 'NotificationTextUtils.shouldNotify';
            offset['location'] = entity;
            michal = {};
            entity = true;
            michal['autoTrackExposure'] = entity;
            michal = yankee.bind(romeon)(offset, michal);
            michal = michal.disableCurrentActivityNotifications;
            if(!michal) { _fun00008_ip = 726; continue _fun00007 }
 615:
            michal = golfie.application_id;
            if(!(verify != michal)) { _fun00008_ip = 726; continue _fun00007 }
 625:
            offset = _closure1_slot3;
            michal = offset.getCurrentEmbeddedActivity;
            michal = michal.bind(offset)();
            verify = verify == michal;
            offset = undefined;
            if(verify) { _fun00008_ip = 653; continue _fun00007 }
 648:
            offset = michal.applicationId;
 653:
            verify = golfie.application_id;
            if(!(offset === verify)) { _fun00008_ip = 726; continue _fun00007 }
 663:
            verify = michal.location;
            offset = verify.kind;
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            verify = 21;
            verify = romeon[verify];
            verify = yankee.bind(report)(verify);
            verify = verify.EmbeddedActivityLocationKind;
            verify = verify.CONTEXTLESS;
            if(!(offset !== verify)) { _fun00008_ip = 726; continue _fun00007 }
 709:
            michal = michal.location;
            michal = michal.channel_id;
            if(!(michal !== option)) { _fun00008_ip = 1092; continue _fun00007 }
 726:
            verify = _closure1_slot8;
            option = verify.has;
            michal = tangon.type;
            michal = option.bind(verify)(michal);
            if(michal) { _fun00008_ip = 933; continue _fun00007 }
 751:
            verify = _closure1_slot7;
            option = verify.has;
            michal = tangon.type;
            michal = option.bind(verify)(michal);
            michal = !michal;
            if(michal) { _fun00008_ip = 799; continue _fun00007 }
 776:
            verify = _closure1_slot12;
            option = verify.getChannelId;
            verify = option.bind(verify)();
            option = tangon.id;
            michal = verify === option;
 799:
            verify = _closure1_slot17;
            option = verify.allowAllMessages;
            option = option.bind(verify)(tangon);
            if(!option) { _fun00008_ip = 822; continue _fun00007 }
 819:
            if(michal) { _fun00008_ip = 931; continue _fun00007 }
 822:
            verify = _closure1_slot17;
            option = verify.isSuppressEveryoneEnabled;
            michal = tangon.getGuildId;
            michal = michal.bind(tangon)();
            yankee = option.bind(verify)(michal);
            verify = _closure1_slot17;
            option = verify.isSuppressRolesEnabled;
            michal = tangon.getGuildId;
            michal = michal.bind(tangon)();
            offset = option.bind(verify)(michal);
            option = _closure1_slot0;
            verify = _closure1_slot2;
            michal = 23;
            michal = verify[michal];
            verify = option.bind(report)(michal);
            option = verify.isRawMessageMentioned;
            michal = {};
            michal['rawMessage'] = golfie;
            romeon = oscard.id;
            michal['userId'] = romeon;
            michal['suppressEveryone'] = yankee;
            michal['suppressRoles'] = offset;
            michal = option.bind(verify)(michal);
            return michal;
 931:
            return entity;
 933:
            option = _closure1_slot6;
            michal = option.isMuted;
            entity = tangon.id;
            entity = michal.bind(option)(entity);
            if(entity) { _fun00008_ip = 1088; continue _fun00007 }
 959:
            michal = _closure1_slot0;
            option = _closure1_slot2;
            entity = 22;
            entity = option[entity];
            michal = michal.bind(report)(entity);
            entity = michal.computeThreadNotificationSetting;
            tangon = entity.bind(michal)(tangon);
            entity = _closure1_slot27;
            entity = entity.NO_MESSAGES;
            entity = tangon !== entity;
            if(!entity) { _fun00008_ip = 1086; continue _fun00007 }
 1007:
            michal = _closure1_slot27;
            michal = michal.ALL_MESSAGES;
            michal = tangon === michal;
            if(michal) { _fun00008_ip = 1083; continue _fun00007 }
 1024:
            tangon = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 23;
            zuuluu = option[zuuluu];
            report = tangon.bind(report)(zuuluu);
            tangon = report.isRawMessageMentioned;
            zuuluu = {};
            zuuluu['rawMessage'] = golfie;
            oscard = oscard.id;
            zuuluu['userId'] = oscard;
            oscard = false;
            zuuluu['suppressEveryone'] = oscard;
            zuuluu['suppressRoles'] = oscard;
            michal = tangon.bind(report)(zuuluu);
 1083:
            entity = michal;
 1086:
            return entity;
 1088:
            entity = false;
            return entity;
 1092:
            entity = false;
            return entity;
 1096:
            entity = false;
            return entity;
 1100:
            entity = false;
            return entity;
 1104:
            entity = false;
            return entity;
 1108:
            entity = false;
            return entity;
 1112:
            entity = false;
            return entity;
 1116:
            entity = false;
            return entity;
 1120:
            entity = false;
            return entity;
        }
    };
    zuuluu['shouldNotify'] = report;
    report = function(argFoo, argBar) { // Original name: shouldNotifyForSelectedChannel
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            verify = argFoo;
            zuuluu = argBar;
            tangon = _closure1_slot14;
            michal = tangon.getChannelId;
            report = _closure1_slot15;
            entity = report.getGuildId;
            entity = entity.bind(report)();
            entity = michal.bind(tangon)(entity);
            if(!(entity === zuuluu)) { _fun00010_ip = 382; continue _fun00009 }
 45:
            michal = _closure1_slot10;
            entity = michal.getChannel;
            tangon = entity.bind(michal)(zuuluu);
            michal = verify.type;
            entity = _closure1_slot23;
            entity = entity.THREAD_STARTER_MESSAGE;
            offset = tangon;
            if(!(michal === entity)) { _fun00010_ip = 112; continue _fun00009 }
 81:
            zuuluu = _closure1_slot10;
            michal = zuuluu.getChannel;
            entity = null;
            report = entity == tangon;
            entity = undefined;
            if(report) { _fun00010_ip = 107; continue _fun00009 }
 101:
            entity = tangon.parent_id;
 107:
            offset = michal.bind(zuuluu)(entity);
 112:
            tangon = _closure1_slot18;
            entity = tangon.getCurrentUser;
            report = entity.bind(tangon)();
            zuuluu = tangon.getUser;
            oscard = verify.author;
            michal = null;
            golfie = michal == oscard;
            yankee = undefined;
            entity = undefined;
            if(golfie) { _fun00010_ip = 155; continue _fun00009 }
 150:
            entity = oscard.id;
 155:
            oscard = zuuluu.bind(tangon)(entity);
            entity = michal != offset;
            if(!entity) { _fun00010_ip = 171; continue _fun00009 }
 167:
            entity = michal != report;
 171:
            if(!entity) { _fun00010_ip = 178; continue _fun00009 }
 174:
            entity = michal != oscard;
 178:
            if(!entity) { _fun00010_ip = 380; continue _fun00009 }
 184:
            michal = offset.isManaged;
            michal = michal.bind(offset)();
            michal = !michal;
            if(!michal) { _fun00010_ip = 377; continue _fun00009 }
 203:
            tangon = oscard.hasFlag;
            zuuluu = _closure1_slot26;
            zuuluu = zuuluu.SPAMMER;
            zuuluu = tangon.bind(oscard)(zuuluu);
            zuuluu = !zuuluu;
            if(!zuuluu) { _fun00010_ip = 374; continue _fun00009 }
 233:
            golfie = _closure1_slot13;
            tangon = golfie.isBlockedOrIgnoredForMessage;
            tangon = tangon.bind(golfie)(verify);
            tangon = !tangon;
            if(!tangon) { _fun00010_ip = 371; continue _fun00009 }
 254:
            oscard = oscard.id;
            report = report.id;
            report = oscard !== report;
            if(!report) { _fun00010_ip = 368; continue _fun00009 }
 271:
            golfie = _closure1_slot16;
            oscard = golfie.getStatus;
            golfie = oscard.bind(golfie)();
            oscard = _closure1_slot25;
            oscard = oscard.DND;
            oscard = golfie !== oscard;
            if(!oscard) { _fun00010_ip = 365; continue _fun00009 }
 302:
            verify = _closure1_slot0;
            romeon = _closure1_slot2;
            golfie = 18;
            golfie = romeon[golfie];
            golfie = verify.bind(yankee)(golfie);
            verify = golfie.FocusMode;
            golfie = verify.getSetting;
            golfie = golfie.bind(verify)();
            golfie = !golfie;
            if(!golfie) { _fun00010_ip = 362; continue _fun00009 }
 344:
            verify = _closure1_slot17;
            option = verify.allowNoMessages;
            option = option.bind(verify)(offset);
            golfie = !option;
 362:
            oscard = golfie;
 365:
            report = oscard;
 368:
            tangon = report;
 371:
            zuuluu = tangon;
 374:
            michal = zuuluu;
 377:
            entity = michal;
 380:
            return entity;
 382:
            entity = false;
            return entity;
        }
    };
    zuuluu['shouldNotifyForSelectedChannel'] = report;
    report = function(argFoo, argBar) { // Original name: shouldNotifyForForumThreadCreation
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            golfie = argBar;
            tangon = arguments[2];
            offset = arguments[3];
            verify = undefined;
            if(!(tangon === verify)) { _fun00012_ip = 17; continue _fun00011 }
 15:
            tangon = true;
 17:
            if(!(offset === verify)) { _fun00012_ip = 23; continue _fun00011 }
 21:
            offset = false;
 23:
            zuuluu = _closure1_slot18;
            entity = zuuluu.getCurrentUser;
            option = entity.bind(zuuluu)();
            michal = zuuluu.getUser;
            entity = argFoo;
            entity = entity.ownerId;
            oscard = michal.bind(zuuluu)(entity);
            michal = null;
            entity = michal != golfie;
            if(!entity) { _fun00012_ip = 72; continue _fun00011 }
 68:
            entity = michal != option;
 72:
            if(!entity) { _fun00012_ip = 79; continue _fun00011 }
 75:
            entity = michal != oscard;
 79:
            if(!entity) { _fun00012_ip = 236; continue _fun00011 }
 85:
            zuuluu = _closure1_slot29;
            michal = {};
            michal['ignoreStatus'] = offset;
            offset = true;
            michal['ignoreNoMessagesSetting'] = offset;
            kiloes = undefined;
            backup = option;
            foxtra = oscard;
            romeon = golfie;
            yankee = michal;
            zuuluu = kiloes[zuuluu](backup, foxtra, romeon, yankee, offset);
            michal = !zuuluu;
            michal = !michal;
            if(!zuuluu) { _fun00012_ip = 233; continue _fun00011 }
 130:
            verify = _closure1_slot17;
            option = verify.isGuildOrCategoryOrChannelMuted;
            oscard = golfie.guild_id;
            zuuluu = golfie.id;
            zuuluu = option.bind(verify)(oscard, zuuluu);
            zuuluu = !zuuluu;
            if(!zuuluu) { _fun00012_ip = 230; continue _fun00011 }
 162:
            oscard = !tangon;
            if(!oscard) { _fun00012_ip = 206; continue _fun00011 }
 168:
            verify = _closure1_slot14;
            option = verify.getChannelId;
            offset = _closure1_slot15;
            tangon = offset.getGuildId;
            tangon = tangon.bind(offset)();
            option = option.bind(verify)(tangon);
            tangon = golfie.id;
            oscard = option === tangon;
 206:
            tangon = !oscard;
            if(oscard) { _fun00012_ip = 227; continue _fun00011 }
 212:
            oscard = _closure1_slot17;
            report = oscard.getNewForumThreadsCreated;
            tangon = report.bind(oscard)(golfie);
 227:
            zuuluu = tangon;
 230:
            michal = zuuluu;
 233:
            entity = michal;
 236:
            return entity;
        }
    };
    zuuluu['shouldNotifyForForumThreadCreation'] = report;
    report = function(argFoo, argBar) { // Original name: shouldNotifyVoiceStatus
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zuuluu = _closure1_slot18;
            entity = zuuluu.getCurrentUser;
            oscard = entity.bind(zuuluu)();
            entity = null;
            entity = entity != oscard;
            if(!entity) { _fun00014_ip = 44; continue _fun00013 }
 25:
            report = _closure1_slot29;
            tangon = undefined;
            zuuluu = argFoo;
            michal = argBar;
            entity = report.bind(tangon)(oscard, zuuluu, michal);
 44:
            return entity;
        }
    };
    zuuluu['shouldNotifyVoiceStatus'] = report;
    zuuluu['renderTitle'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: makeTextChatNotification
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            golfie = argFoo;
            tangon = argBar;
            offset = argBaz;
            report = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 27;
            michal = zuuluu[michal];
            zuuluu = undefined;
            option = report.bind(zuuluu)(michal);
            oscard = option.getName;
            michal = golfie.getGuildId;
            report = michal.bind(golfie)();
            michal = golfie.id;
            foxtra = oscard.bind(option)(report, michal, offset);
            report = golfie.type;
            michal = _closure1_slot21;
            michal = michal.GUILD_ANNOUNCEMENT;
            if(!(michal !== report)) { _fun00016_ip = 350; continue _fun00015 }
 84:
            michal = _closure1_slot21;
            michal = michal.GUILD_TEXT;
            if(!(michal !== report)) { _fun00016_ip = 350; continue _fun00015 }
 101:
            michal = _closure1_slot21;
            michal = michal.GUILD_VOICE;
            if(!(michal !== report)) { _fun00016_ip = 350; continue _fun00015 }
 118:
            michal = _closure1_slot21;
            michal = michal.ANNOUNCEMENT_THREAD;
            if(!(michal !== report)) { _fun00016_ip = 350; continue _fun00015 }
 135:
            michal = _closure1_slot21;
            michal = michal.PUBLIC_THREAD;
            if(!(michal !== report)) { _fun00016_ip = 350; continue _fun00015 }
 152:
            michal = _closure1_slot21;
            michal = michal.PRIVATE_THREAD;
            if(!(michal !== report)) { _fun00016_ip = 350; continue _fun00015 }
 169:
            michal = _closure1_slot21;
            michal = michal.GROUP_DM;
            oscard = foxtra;
            if(!(michal === report)) { _fun00016_ip = 513; continue _fun00015 }
 189:
            michal = golfie.isManaged;
            michal = michal.bind(golfie)();
            if(!michal) { _fun00016_ip = 208; continue _fun00015 }
 202:
            michal = offset.bot;
 208:
            if(!michal) { _fun00016_ip = 256; continue _fun00015 }
 211:
            option = _closure1_slot0;
            verify = _closure1_slot2;
            report = 24;
            report = verify[report];
            yankee = option.bind(zuuluu)(report);
            verify = yankee.computeChannelName;
            option = _closure1_slot18;
            report = _closure1_slot13;
            report = verify.bind(yankee)(golfie, option, report);
            michal = foxtra === report;
 256:
            oscard = foxtra;
            if(michal) { _fun00016_ip = 513; continue _fun00015 }
 265:
            report = _closure1_slot0;
            option = _closure1_slot2;
            michal = 24;
            michal = option[michal];
            yankee = report.bind(zuuluu)(michal);
            verify = yankee.computeChannelName;
            ctrled = _closure1_slot18;
            source = _closure1_slot13;
            update = true;
            sequen = yankee;
            vacuum = golfie;
            source = sequen[verify](vacuum, ctrled, source, update, echoed);
            michal = global;
            michal = michal.HermesInternal;
            verify = michal.concat;
            sequen = '';
            ctrled = ' (';
            update = ')';
            vacuum = foxtra;
            oscard = sequen[verify](vacuum, ctrled, source, update, echoed);
            _fun00016_ip = 513; continue _fun00015;
 350:
            option = _closure1_slot10;
            report = option.getChannel;
            michal = golfie.parent_id;
            option = report.bind(option)(michal);
            report = tangon.type;
            michal = _closure1_slot23;
            michal = michal.THREAD_STARTER_MESSAGE;
            if(!(report === michal)) { _fun00016_ip = 395; continue _fun00015 }
 389:
            michal = null;
            if(!(michal == option)) { _fun00016_ip = 482; continue _fun00015 }
 395:
            report = _closure1_slot1;
            verify = _closure1_slot2;
            michal = 28;
            michal = verify[michal];
            michal = report.bind(zuuluu)(michal);
            michal = michal.bind(zuuluu)(tangon);
            if(michal) { _fun00016_ip = 436; continue _fun00015 }
 423:
            michal = _closure1_slot28;
            oscard = michal.bind(zuuluu)(foxtra, golfie, option);
            _fun00016_ip = 513; continue _fun00015;
 436:
            verify = _closure1_slot11;
            report = verify.getGuild;
            michal = golfie.getGuildId;
            michal = michal.bind(golfie)();
            report = report.bind(verify)(michal);
            michal = null;
            oscard = foxtra;
            if(!(michal != report)) { _fun00016_ip = 513; continue _fun00015 }
 469:
            michal = _closure1_slot28;
            oscard = michal.bind(zuuluu)(foxtra, golfie, option);
            _fun00016_ip = 513; continue _fun00015;
 482:
            report = _closure1_slot28;
            yankee = _closure1_slot10;
            verify = yankee.getChannel;
            michal = option.parent_id;
            michal = verify.bind(yankee)(michal);
            oscard = report.bind(zuuluu)(foxtra, option, michal);
 513:
            sizing = tangon.content;
            report = _closure1_slot1;
            option = _closure1_slot2;
            michal = 28;
            michal = option[michal];
            michal = report.bind(zuuluu)(michal);
            michal = michal.bind(zuuluu)(tangon);
            if(!michal) { _fun00016_ip = 587; continue _fun00015 }
 546:
            report = _closure1_slot1;
            option = _closure1_slot2;
            michal = 29;
            michal = option[michal];
            report = report.bind(zuuluu)(michal);
            michal = report.stringify;
            sizing = michal.bind(report)(tangon, golfie);
            michal = null;
            if(!(michal != sizing)) { _fun00016_ip = 2553; continue _fun00015 }
 587:
            michal = 'sticker_items';
            michal = michal in tangon;
            if(michal) { _fun00016_ip = 625; continue _fun00015 }
 598:
            michal = 'stickerItems';
            michal = michal in tangon;
            if(michal) { _fun00016_ip = 617; continue _fun00015 }
 609:
            backup = tangon.stickers;
            _fun00016_ip = 623; continue _fun00015;
 617:
            backup = tangon.stickerItems;
 623:
            _fun00016_ip = 631; continue _fun00015;
 625:
            backup = tangon.sticker_items;
 631:
            michal = 'message_reference';
            michal = michal in tangon;
            if(michal) { _fun00016_ip = 669; continue _fun00015 }
 642:
            report = _closure1_slot1;
            option = _closure1_slot2;
            michal = 31;
            michal = option[michal];
            michal = report.bind(zuuluu)(michal);
            michal = michal.bind(zuuluu)(tangon);
            _fun00016_ip = 700; continue _fun00015;
 669:
            option = _closure1_slot0;
            verify = _closure1_slot2;
            report = 31;
            report = verify[report];
            option = option.bind(zuuluu)(report);
            report = option.isForwardServerMessage;
            michal = report.bind(option)(tangon);
 700:
            if(michal) { _fun00016_ip = 1917; continue _fun00015 }
 706:
            report = tangon.activity;
            michal = null;
            if(!(michal != report)) { _fun00016_ip = 730; continue _fun00015 }
 718:
            report = tangon.application;
            if(!(michal == report)) { _fun00016_ip = 1581; continue _fun00015 }
 730:
            report = tangon.activity;
            if(!(michal != report)) { _fun00016_ip = 768; continue _fun00015 }
 740:
            report = tangon.activity;
            option = report.type;
            report = _closure1_slot20;
            report = report.LISTEN;
            if(!(option !== report)) { _fun00016_ip = 1455; continue _fun00015 }
 768:
            if(!(michal != backup)) { _fun00016_ip = 786; continue _fun00015 }
 772:
            report = backup.length;
            romeon = 0;
            if(!(!(report > romeon))) { _fun00016_ip = 1376; continue _fun00015 }
 786:
            option = tangon.type;
            report = _closure1_slot23;
            report = report.PREMIUM_REFERRAL;
            if(!(option !== report)) { _fun00016_ip = 1282; continue _fun00015 }
 808:
            report = tangon.poll;
            if(!(michal == report)) { _fun00016_ip = 1197; continue _fun00015 }
 821:
            option = tangon.type;
            report = _closure1_slot23;
            report = report.POLL_RESULT;
            if(!(option !== report)) { _fun00016_ip = 1025; continue _fun00015 }
 843:
            report = sizing.length;
            verify = 0;
            if(!(verify !== report)) { _fun00016_ip = 980; continue _fun00015 }
 857:
            option = golfie.type;
            report = _closure1_slot21;
            report = report.DM;
            if(!(option === report)) { _fun00016_ip = 980; continue _fun00015 }
 876:
            report = offset.bot;
            if(report) { _fun00016_ip = 980; continue _fun00015 }
 885:
            option = sizing.startsWith;
            report = '> -# *';
            report = option.bind(sizing)(report);
            if(!report) { _fun00016_ip = 980; continue _fun00015 }
 905:
            option = _closure1_slot1;
            yankee = _closure1_slot2;
            report = 33;
            report = yankee[report];
            kiloes = option.bind(zuuluu)(report);
            yankee = kiloes.unparse;
            option = golfie.id;
            report = true;
            yankee = yankee.bind(kiloes)(sizing, option, report);
            option = yankee.substring;
            report = 1;
            option = option.bind(yankee)(verify, report);
            verify = yankee.substring;
            report = 4;
            report = verify.bind(yankee)(report);
            report = option + report;
            _fun00016_ip = 1020; continue _fun00015;
 980:
            verify = _closure1_slot1;
            yankee = _closure1_slot2;
            option = 33;
            option = yankee[option];
            kiloes = verify.bind(zuuluu)(option);
            yankee = kiloes.unparse;
            verify = golfie.id;
            option = true;
            report = yankee.bind(kiloes)(sizing, verify, option);
 1020:
            _fun00016_ip = 1972; continue _fun00015;
 1025:
            yankee = tangon.embeds;
            verify = michal == yankee;
            option = undefined;
            if(verify) { _fun00016_ip = 1089; continue _fun00015 }
 1040:
            verify = 0;
            verify = yankee[verify];
            yankee = michal == verify;
            option = undefined;
            if(yankee) { _fun00016_ip = 1089; continue _fun00015 }
 1055:
            kiloes = verify.fields;
            verify = michal == kiloes;
            option = undefined;
            if(verify) { _fun00016_ip = 1089; continue _fun00015 }
 1070:
            yankee = kiloes.find;
            verify = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    entity = argFoo;
                    michal = 'name';
                    michal = michal in entity;
                    if(michal) { _fun00018_ip = 22; continue _fun00017 }
 14:
                    michal = entity.rawName;
                    _fun00018_ip = 27; continue _fun00017;
 22:
                    michal = entity.name;
 27:
                    entity = 'poll_question_text';
                    entity = entity === michal;
                    return entity;
                }
            };
            option = yankee.bind(kiloes)(verify);
 1089:
            michal = michal != option;
            kiloes = '';
            if(!michal) { _fun00016_ip = 1127; continue _fun00015 }
 1100:
            michal = 'value';
            michal = michal in option;
            if(michal) { _fun00016_ip = 1119; continue _fun00015 }
 1111:
            michal = option.rawValue;
            _fun00016_ip = 1124; continue _fun00015;
 1119:
            michal = option.value;
 1124:
            kiloes = michal;
 1127:
            option = _closure1_slot0;
            sizing = _closure1_slot2;
            michal = 25;
            verify = sizing[michal];
            verify = option.bind(zuuluu)(verify);
            yankee = verify.intl;
            verify = yankee.formatToPlainString;
            michal = sizing[michal];
            michal = option.bind(zuuluu)(michal);
            michal = michal.t;
            option = michal.9WrecH;
            michal = {};
            michal['question'] = kiloes;
            report = verify.bind(yankee)(option, michal);
            _fun00016_ip = 1972; continue _fun00015;
 1197:
            option = _closure1_slot0;
            kiloes = _closure1_slot2;
            michal = 25;
            verify = kiloes[michal];
            verify = option.bind(zuuluu)(verify);
            yankee = verify.intl;
            verify = yankee.formatToPlainString;
            michal = kiloes[michal];
            michal = option.bind(zuuluu)(michal);
            michal = michal.t;
            option = michal.ImizdH;
            michal = {};
            kiloes = tangon.poll;
            kiloes = kiloes.question;
            kiloes = kiloes.text;
            michal['question'] = kiloes;
            report = verify.bind(yankee)(option, michal);
            _fun00016_ip = 1972; continue _fun00015;
 1282:
            option = _closure1_slot0;
            output = _closure1_slot2;
            michal = 25;
            verify = output[michal];
            verify = option.bind(zuuluu)(verify);
            yankee = verify.intl;
            verify = yankee.formatToPlainString;
            michal = output[michal];
            michal = option.bind(zuuluu)(michal);
            michal = michal.t;
            option = michal.lieTqa;
            michal = {};
            sizing = _closure1_slot1;
            kiloes = 32;
            kiloes = output[kiloes];
            sizing = sizing.bind(zuuluu)(kiloes);
            kiloes = sizing.getName;
            kiloes = kiloes.bind(sizing)(offset);
            michal['username'] = kiloes;
            report = verify.bind(yankee)(option, michal);
            _fun00016_ip = 1972; continue _fun00015;
 1376:
            option = _closure1_slot0;
            kiloes = _closure1_slot2;
            michal = 25;
            verify = kiloes[michal];
            verify = option.bind(zuuluu)(verify);
            yankee = verify.intl;
            verify = yankee.formatToPlainString;
            michal = kiloes[michal];
            michal = option.bind(zuuluu)(michal);
            michal = michal.t;
            option = michal.zY4v1N;
            michal = {};
            romeon = backup[romeon];
            romeon = romeon.name;
            michal['stickerName'] = romeon;
            report = verify.bind(yankee)(option, michal);
            _fun00016_ip = 1972; continue _fun00015;
 1455:
            kiloes = _closure1_slot30;
            option = _closure1_slot0;
            verify = _closure1_slot2;
            michal = 25;
            yankee = verify[michal];
            yankee = option.bind(zuuluu)(yankee);
            yankee = yankee.t;
            ctrled = yankee.SaDdmJ;
            yankee = verify[michal];
            yankee = option.bind(zuuluu)(yankee);
            yankee = yankee.t;
            source = yankee.qsODho;
            yankee = verify[michal];
            yankee = option.bind(zuuluu)(yankee);
            yankee = yankee.t;
            update = yankee.WeiMTU;
            sequen = undefined;
            vacuum = golfie;
            yankee = sequen[kiloes](vacuum, ctrled, source, update, echoed);
            michal = verify[michal];
            michal = option.bind(zuuluu)(michal);
            verify = michal.intl;
            option = verify.formatToPlainString;
            michal = {};
            michal['user'] = foxtra;
            report = option.bind(verify)(yankee, michal);
            _fun00016_ip = 1972; continue _fun00015;
 1581:
            michal = tangon.activity;
            option = michal.type;
            michal = _closure1_slot20;
            michal = michal.JOIN;
            if(!(option !== michal)) { _fun00016_ip = 1776; continue _fun00015 }
 1609:
            michal = tangon.activity;
            verify = michal.type;
            michal = _closure1_slot20;
            option = michal.JOIN_REQUEST;
            michal = '';
            if(!(verify === option)) { _fun00016_ip = 1771; continue _fun00015 }
 1641:
            sizing = _closure1_slot0;
            output = _closure1_slot2;
            option = 25;
            verify = output[option];
            verify = sizing.bind(zuuluu)(verify);
            romeon = verify.intl;
            yankee = romeon.formatToPlainString;
            kiloes = _closure1_slot30;
            verify = output[option];
            verify = sizing.bind(zuuluu)(verify);
            verify = verify.t;
            ctrled = verify./TD0lZ;
            verify = output[option];
            verify = sizing.bind(zuuluu)(verify);
            verify = verify.t;
            source = verify./TD0lZ;
            option = output[option];
            option = sizing.bind(zuuluu)(option);
            option = option.t;
            update = option./TD0lZ;
            sequen = undefined;
            vacuum = golfie;
            verify = sequen[kiloes](vacuum, ctrled, source, update, echoed);
            option = {};
            option['user'] = foxtra;
            backup = tangon.application;
            backup = backup.name;
            option['game'] = backup;
            michal = yankee.bind(romeon)(verify, option);
 1771:
            _fun00016_ip = 1912; continue _fun00015;
 1776:
            sizing = _closure1_slot0;
            output = _closure1_slot2;
            option = 25;
            verify = output[option];
            verify = sizing.bind(zuuluu)(verify);
            romeon = verify.intl;
            yankee = romeon.formatToPlainString;
            kiloes = _closure1_slot30;
            verify = output[option];
            verify = sizing.bind(zuuluu)(verify);
            verify = verify.t;
            ctrled = verify.E8CgCg;
            verify = output[option];
            verify = sizing.bind(zuuluu)(verify);
            verify = verify.t;
            source = verify.c6KHWF;
            option = output[option];
            option = sizing.bind(zuuluu)(option);
            option = option.t;
            update = option.Fy7rJC;
            sequen = undefined;
            vacuum = golfie;
            verify = sequen[kiloes](vacuum, ctrled, source, update, echoed);
            option = {};
            option['user'] = foxtra;
            foxtra = tangon.application;
            foxtra = foxtra.name;
            option['game'] = foxtra;
            michal = yankee.bind(romeon)(verify, option);
 1912:
            report = michal;
            _fun00016_ip = 1972; continue _fun00015;
 1917:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            michal = 25;
            option = romeon[michal];
            option = yankee.bind(zuuluu)(option);
            verify = option.intl;
            option = verify.string;
            michal = romeon[michal];
            michal = yankee.bind(zuuluu)(michal);
            michal = michal.t;
            michal = michal.9ddYKi;
            report = option.bind(verify)(michal);
 1972:
            michal = report.length;
            yankee = 0;
            if(!(yankee === michal)) { _fun00016_ip = 2517; continue _fun00015 }
 1986:
            michal = tangon.embeds;
            if(!(zuuluu !== michal)) { _fun00016_ip = 2116; continue _fun00015 }
 1996:
            michal = tangon.embeds;
            michal = michal.length;
            if(!(michal > yankee)) { _fun00016_ip = 2116; continue _fun00015 }
 2011:
            michal = tangon.embeds;
            option = michal[yankee];
            michal = 'description';
            michal = michal in option;
            if(michal) { _fun00016_ip = 2040; continue _fun00015 }
 2032:
            backup = option.rawDescription;
            _fun00016_ip = 2045; continue _fun00015;
 2040:
            backup = option.description;
 2045:
            michal = 'title';
            michal = michal in option;
            if(michal) { _fun00016_ip = 2064; continue _fun00015 }
 2056:
            foxtra = option.rawTitle;
            _fun00016_ip = 2069; continue _fun00015;
 2064:
            foxtra = option.title;
 2069:
            verify = null;
            if(!(verify == backup)) { _fun00016_ip = 2476; continue _fun00015 }
 2078:
            michal = foxtra;
            if(!(verify == michal)) { _fun00016_ip = 2514; continue _fun00015 }
 2088:
            romeon = option.fields;
            if(!(verify != romeon)) { _fun00016_ip = 2116; continue _fun00015 }
 2098:
            romeon = option.fields;
            romeon = romeon.length;
            if(!(!(romeon > yankee))) { _fun00016_ip = 2388; continue _fun00015 }
 2116:
            kiloes = _closure1_slot0;
            sizing = _closure1_slot2;
            romeon = 19;
            romeon = sizing[romeon];
            output = kiloes.bind(zuuluu)(romeon);
            sizing = output.hasFlag;
            romeon = tangon.flags;
            kiloes = null;
            result = kiloes != romeon;
            kiloes = 0;
            if(!result) { _fun00016_ip = 2161; continue _fun00015 }
 2158:
            kiloes = romeon;
 2161:
            romeon = _closure1_slot22;
            romeon = romeon.IS_VOICE_MESSAGE;
            romeon = sizing.bind(output)(kiloes, romeon);
            if(romeon) { _fun00016_ip = 2328; continue _fun00015 }
 2183:
            romeon = tangon.attachments;
            kiloes = '';
            michal = kiloes;
            if(!(zuuluu !== romeon)) { _fun00016_ip = 2514; continue _fun00015 }
 2203:
            romeon = tangon.attachments;
            romeon = romeon.length;
            romeon = romeon > yankee;
            michal = kiloes;
            if(!romeon) { _fun00016_ip = 2514; continue _fun00015 }
 2227:
            kiloes = _closure1_slot1;
            echoed = _closure1_slot2;
            romeon = 26;
            romeon = echoed[romeon];
            kiloes = kiloes.bind(zuuluu)(romeon);
            romeon = tangon.attachments;
            romeon = romeon[yankee];
            result = kiloes.bind(zuuluu)(romeon);
            kiloes = _closure1_slot0;
            romeon = 25;
            sizing = echoed[romeon];
            sizing = kiloes.bind(zuuluu)(sizing);
            output = sizing.intl;
            sizing = output.formatToPlainString;
            romeon = echoed[romeon];
            romeon = kiloes.bind(zuuluu)(romeon);
            romeon = romeon.t;
            kiloes = romeon.51OkwM;
            romeon = {};
            romeon['filename'] = result;
            michal = sizing.bind(output)(kiloes, romeon);
            _fun00016_ip = 2514; continue _fun00015;
 2328:
            output = _closure1_slot0;
            result = _closure1_slot2;
            romeon = 25;
            kiloes = result[romeon];
            kiloes = output.bind(zuuluu)(kiloes);
            sizing = kiloes.intl;
            kiloes = sizing.string;
            romeon = result[romeon];
            romeon = output.bind(zuuluu)(romeon);
            romeon = romeon.t;
            romeon = romeon.slFYgo;
            michal = kiloes.bind(sizing)(romeon);
            _fun00016_ip = 2514; continue _fun00015;
 2388:
            option = option.fields;
            option = option[yankee];
            yankee = 'name';
            yankee = yankee in option;
            if(yankee) { _fun00016_ip = 2417; continue _fun00015 }
 2409:
            sizing = option.rawName;
            _fun00016_ip = 2422; continue _fun00015;
 2417:
            sizing = option.name;
 2422:
            yankee = 'value';
            yankee = yankee in option;
            if(yankee) { _fun00016_ip = 2441; continue _fun00015 }
 2433:
            kiloes = option.rawValue;
            _fun00016_ip = 2446; continue _fun00015;
 2441:
            kiloes = option.value;
 2446:
            option = global;
            option = option.HermesInternal;
            romeon = option.concat;
            yankee = '';
            option = ' ';
            michal = romeon.bind(yankee)(sizing, option, kiloes);
            _fun00016_ip = 2514; continue _fun00015;
 2476:
            option = backup;
            if(!(verify != foxtra)) { _fun00016_ip = 2511; continue _fun00015 }
 2483:
            verify = global;
            verify = verify.HermesInternal;
            romeon = verify.concat;
            yankee = '';
            verify = ' ';
            option = romeon.bind(yankee)(foxtra, verify, backup);
 2511:
            michal = option;
 2514:
            report = michal;
 2517:
            michal = {};
            verify = offset.getAvatarURL;
            option = golfie.guild_id;
            golfie = 128;
            golfie = verify.bind(offset)(option, golfie);
            michal['icon'] = golfie;
            michal['title'] = oscard;
            michal['body'] = report;
            return michal;
 2553:
            michal = _closure1_slot1;
            report = _closure1_slot2;
            entity = 30;
            entity = report[entity];
            zuuluu = michal.bind(zuuluu)(entity);
            entity = zuuluu.prototype;
            michal = Object.create(entity, {constructor: {value: zuuluu}});
            vacuum = 'NotificationTextUtils';
            sequen = michal;
            entity = new sequen[zuuluu](vacuum, ctrled);
            zuuluu = entity instanceof Object ? entity : michal;
            michal = zuuluu.warn;
            entity = 'SystemMessageUtils.stringify(...) could not convert';
            entity = michal.bind(zuuluu)(entity, tangon);
            entity = global;
            zuuluu = entity.Error;
            entity = zuuluu.prototype;
            michal = Object.create(entity, {constructor: {value: zuuluu}});
            vacuum = 'failed to stringify system message';
            sequen = michal;
            entity = new sequen[zuuluu](vacuum, ctrled);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        }
    };
    zuuluu['makeTextChatNotification'] = tangon;
    tangon = function() { // Original name: allowInAppNotifications
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            entity = 18;
            entity = report[entity];
            zuuluu = undefined;
            entity = tangon.bind(zuuluu)(entity);
            michal = entity.ShowInAppNotifications;
            entity = michal.getSetting;
            entity = entity.bind(michal)();
            michal = 34;
            michal = report[michal];
            zuuluu = tangon.bind(zuuluu)(michal);
            michal = zuuluu.getFocusModeEnabled;
            michal = michal.bind(zuuluu)();
            if(!entity) { _fun00020_ip = 69; continue _fun00019 }
 66:
            entity = !michal;
 69:
            return entity;
        }
    };
    zuuluu['allowInAppNotifications'] = tangon;
    michal = function() { // Original name: useAllowInAppNotifications
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            entity = 18;
            entity = report[entity];
            zuuluu = undefined;
            entity = tangon.bind(zuuluu)(entity);
            michal = entity.ShowInAppNotifications;
            entity = michal.useSetting;
            entity = entity.bind(michal)();
            michal = 34;
            michal = report[michal];
            zuuluu = tangon.bind(zuuluu)(michal);
            michal = zuuluu.useFocusModeEnabled;
            michal = michal.bind(zuuluu)();
            if(!entity) { _fun00022_ip = 69; continue _fun00021 }
 66:
            entity = !michal;
 69:
            return entity;
        }
    };
    zuuluu['useAllowInAppNotifications'] = michal;
    return entity;
})();