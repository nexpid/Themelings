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
            verify = 22;
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
    oscard = 33;
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
            michal = argBar;
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
            zuuluu = golfie.flags;
            option = null;
            if(!(option != zuuluu)) { _fun00008_ip = 93; continue _fun00007 }
 37:
            oscard = _closure1_slot0;
            verify = _closure1_slot2;
            tangon = 19;
            tangon = verify[tangon];
            verify = oscard.bind(report)(tangon);
            oscard = verify.hasFlag;
            tangon = golfie.flags;
            zuuluu = _closure1_slot22;
            zuuluu = zuuluu.SUPPRESS_NOTIFICATIONS;
            zuuluu = oscard.bind(verify)(tangon, zuuluu);
            if(zuuluu) { _fun00008_ip = 1062; continue _fun00007 }
 93:
            oscard = _closure1_slot10;
            tangon = oscard.getChannel;
            yankee = tangon.bind(oscard)(michal);
            verify = golfie.type;
            tangon = _closure1_slot23;
            oscard = tangon.THREAD_STARTER_MESSAGE;
            tangon = yankee;
            if(!(verify === oscard)) { _fun00008_ip = 161; continue _fun00007 }
 132:
            offset = _closure1_slot10;
            verify = offset.getChannel;
            foxtra = option == yankee;
            oscard = undefined;
            if(foxtra) { _fun00008_ip = 156; continue _fun00007 }
 150:
            oscard = yankee.parent_id;
 156:
            tangon = verify.bind(offset)(oscard);
 161:
            yankee = _closure1_slot18;
            oscard = yankee.getCurrentUser;
            oscard = oscard.bind(yankee)();
            offset = yankee.getUser;
            foxtra = golfie.author;
            backup = option == foxtra;
            verify = undefined;
            if(backup) { _fun00008_ip = 200; continue _fun00007 }
 195:
            verify = foxtra.id;
 200:
            yankee = offset.bind(yankee)(verify);
            if(!(option != tangon)) { _fun00008_ip = 1058; continue _fun00007 }
 212:
            if(!(option != oscard)) { _fun00008_ip = 1058; continue _fun00007 }
 219:
            if(!(option != yankee)) { _fun00008_ip = 1058; continue _fun00007 }
 226:
            offset = tangon.type;
            verify = _closure1_slot21;
            verify = verify.GROUP_DM;
            if(!(offset === verify)) { _fun00008_ip = 267; continue _fun00007 }
 245:
            offset = golfie.type;
            verify = _closure1_slot23;
            verify = verify.RECIPIENT_REMOVE;
            if(!(offset !== verify)) { _fun00008_ip = 1054; continue _fun00007 }
 267:
            offset = _closure1_slot19;
            verify = offset.areSlayerNotificationsSuppressed;
            verify = verify.bind(offset)();
            if(!verify) { _fun00008_ip = 324; continue _fun00007 }
 286:
            offset = tangon.type;
            verify = _closure1_slot21;
            verify = verify.DM;
            verify = offset === verify;
            if(verify) { _fun00008_ip = 318; continue _fun00007 }
 308:
            offset = tangon.linkedLobby;
            verify = option != offset;
 318:
            if(verify) { _fun00008_ip = 1050; continue _fun00007 }
 324:
            offset = _closure1_slot29;
            verify = {};
            verify['ignoreStatus'] = romeon;
            romeon = _closure1_slot24;
            backup = romeon.SELF_MENTIONABLE_SYSTEM;
            foxtra = backup.has;
            romeon = golfie.type;
            romeon = foxtra.bind(backup)(romeon);
            verify['ignoreSameUser'] = romeon;
            echoed = undefined;
            result = oscard;
            output = yankee;
            sizing = tangon;
            kiloes = verify;
            verify = echoed[offset](result, output, sizing, kiloes, backup);
            if(verify) { _fun00008_ip = 390; continue _fun00007 }
 386:
            verify = false;
            return verify;
 390:
            offset = _closure1_slot5;
            verify = offset.isMessageRequest;
            verify = verify.bind(offset)(michal);
            if(verify) { _fun00008_ip = 1046; continue _fun00007 }
 411:
            if(entity) { _fun00008_ip = 484; continue _fun00007 }
 414:
            offset = _closure1_slot14;
            verify = offset.getChannelId;
            yankee = _closure1_slot15;
            entity = yankee.getGuildId;
            entity = entity.bind(yankee)();
            offset = verify.bind(offset)(entity);
            entity = tangon.id;
            if(!(offset !== entity)) { _fun00008_ip = 480; continue _fun00007 }
 452:
            verify = _closure1_slot9;
            entity = verify.getCurrentSidebarChannelId;
            verify = entity.bind(verify)(offset);
            entity = tangon.id;
            if(!(verify === entity)) { _fun00008_ip = 484; continue _fun00007 }
 476:
            entity = false;
            return entity;
 480:
            entity = false;
            return entity;
 484:
            verify = _closure1_slot13;
            entity = verify.isBlockedOrIgnoredForMessage;
            entity = entity.bind(verify)(golfie);
            if(entity) { _fun00008_ip = 1042; continue _fun00007 }
 505:
            entity = golfie.activity_instance;
            if(!(report !== entity)) { _fun00008_ip = 553; continue _fun00007 }
 515:
            entity = golfie.interaction;
            if(!(option != entity)) { _fun00008_ip = 553; continue _fun00007 }
 525:
            entity = golfie.interaction;
            entity = entity.user;
            verify = entity.id;
            entity = oscard.id;
            if(!(verify !== entity)) { _fun00008_ip = 1038; continue _fun00007 }
 553:
            entity = golfie.application_id;
            if(!(option != entity)) { _fun00008_ip = 618; continue _fun00007 }
 563:
            verify = _closure1_slot3;
            entity = verify.getCurrentEmbeddedActivity;
            entity = entity.bind(verify)();
            option = option == entity;
            verify = undefined;
            if(option) { _fun00008_ip = 591; continue _fun00007 }
 586:
            verify = entity.applicationId;
 591:
            option = golfie.application_id;
            if(!(verify === option)) { _fun00008_ip = 618; continue _fun00007 }
 601:
            entity = entity.location;
            entity = entity.channel_id;
            if(!(entity !== michal)) { _fun00008_ip = 1034; continue _fun00007 }
 618:
            michal = golfie.type;
            entity = _closure1_slot23;
            entity = entity.CHAT_WALLPAPER_SET;
            if(!(michal !== entity)) { _fun00008_ip = 1030; continue _fun00007 }
 640:
            michal = golfie.type;
            entity = _closure1_slot23;
            entity = entity.CHAT_WALLPAPER_REMOVED;
            if(!(michal !== entity)) { _fun00008_ip = 1030; continue _fun00007 }
 662:
            option = _closure1_slot8;
            michal = option.has;
            entity = tangon.type;
            entity = michal.bind(option)(entity);
            if(entity) { _fun00008_ip = 871; continue _fun00007 }
 687:
            option = _closure1_slot7;
            michal = option.has;
            entity = tangon.type;
            entity = michal.bind(option)(entity);
            entity = !entity;
            if(entity) { _fun00008_ip = 735; continue _fun00007 }
 712:
            option = _closure1_slot12;
            michal = option.getChannelId;
            option = michal.bind(option)();
            michal = tangon.id;
            entity = option === michal;
 735:
            option = _closure1_slot17;
            michal = option.allowAllMessages;
            michal = michal.bind(option)(tangon);
            if(!michal) { _fun00008_ip = 758; continue _fun00007 }
 755:
            if(entity) { _fun00008_ip = 867; continue _fun00007 }
 758:
            option = _closure1_slot17;
            michal = option.isSuppressEveryoneEnabled;
            entity = tangon.getGuildId;
            entity = entity.bind(tangon)();
            offset = michal.bind(option)(entity);
            option = _closure1_slot17;
            michal = option.isSuppressRolesEnabled;
            entity = tangon.getGuildId;
            entity = entity.bind(tangon)();
            verify = michal.bind(option)(entity);
            michal = _closure1_slot0;
            option = _closure1_slot2;
            entity = 21;
            entity = option[entity];
            option = michal.bind(report)(entity);
            michal = option.isRawMessageMentioned;
            entity = {};
            entity['rawMessage'] = golfie;
            yankee = oscard.id;
            entity['userId'] = yankee;
            entity['suppressEveryone'] = offset;
            entity['suppressRoles'] = verify;
            entity = michal.bind(option)(entity);
            return entity;
 867:
            entity = true;
            return entity;
 871:
            option = _closure1_slot6;
            michal = option.isMuted;
            entity = tangon.id;
            entity = michal.bind(option)(entity);
            if(entity) { _fun00008_ip = 1026; continue _fun00007 }
 897:
            michal = _closure1_slot0;
            option = _closure1_slot2;
            entity = 20;
            entity = option[entity];
            michal = michal.bind(report)(entity);
            entity = michal.computeThreadNotificationSetting;
            tangon = entity.bind(michal)(tangon);
            entity = _closure1_slot27;
            entity = entity.NO_MESSAGES;
            entity = tangon !== entity;
            if(!entity) { _fun00008_ip = 1024; continue _fun00007 }
 945:
            michal = _closure1_slot27;
            michal = michal.ALL_MESSAGES;
            michal = tangon === michal;
            if(michal) { _fun00008_ip = 1021; continue _fun00007 }
 962:
            tangon = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 21;
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
 1021:
            entity = michal;
 1024:
            return entity;
 1026:
            entity = false;
            return entity;
 1030:
            entity = false;
            return entity;
 1034:
            entity = false;
            return entity;
 1038:
            entity = false;
            return entity;
 1042:
            entity = false;
            return entity;
 1046:
            entity = false;
            return entity;
 1050:
            entity = false;
            return entity;
 1054:
            entity = false;
            return entity;
 1058:
            entity = false;
            return entity;
 1062:
            entity = false;
            return entity;
        }
    };
    zuuluu['shouldNotify'] = report;
    report = function(argFoo, argBar) { // Original name: shouldNotifyForSelectedChannel
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            yankee = argFoo;
            zuuluu = argBar;
            tangon = _closure1_slot14;
            michal = tangon.getChannelId;
            report = _closure1_slot15;
            entity = report.getGuildId;
            entity = entity.bind(report)();
            entity = michal.bind(tangon)(entity);
            if(!(entity === zuuluu)) { _fun00010_ip = 438; continue _fun00009 }
 45:
            michal = _closure1_slot10;
            entity = michal.getChannel;
            tangon = entity.bind(michal)(zuuluu);
            michal = yankee.type;
            entity = _closure1_slot23;
            entity = entity.THREAD_STARTER_MESSAGE;
            romeon = tangon;
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
            romeon = michal.bind(zuuluu)(entity);
 112:
            tangon = _closure1_slot18;
            entity = tangon.getCurrentUser;
            report = entity.bind(tangon)();
            zuuluu = tangon.getUser;
            oscard = yankee.author;
            michal = null;
            golfie = michal == oscard;
            verify = undefined;
            entity = undefined;
            if(golfie) { _fun00010_ip = 155; continue _fun00009 }
 150:
            entity = oscard.id;
 155:
            oscard = zuuluu.bind(tangon)(entity);
            entity = michal != romeon;
            if(!entity) { _fun00010_ip = 171; continue _fun00009 }
 167:
            entity = michal != report;
 171:
            if(!entity) { _fun00010_ip = 178; continue _fun00009 }
 174:
            entity = michal != oscard;
 178:
            if(!entity) { _fun00010_ip = 436; continue _fun00009 }
 184:
            michal = romeon.isManaged;
            michal = michal.bind(romeon)();
            michal = !michal;
            if(!michal) { _fun00010_ip = 433; continue _fun00009 }
 203:
            tangon = oscard.hasFlag;
            zuuluu = _closure1_slot26;
            zuuluu = zuuluu.SPAMMER;
            zuuluu = tangon.bind(oscard)(zuuluu);
            zuuluu = !zuuluu;
            if(!zuuluu) { _fun00010_ip = 430; continue _fun00009 }
 233:
            golfie = _closure1_slot13;
            tangon = golfie.isBlockedOrIgnoredForMessage;
            tangon = tangon.bind(golfie)(yankee);
            tangon = !tangon;
            if(!tangon) { _fun00010_ip = 427; continue _fun00009 }
 257:
            oscard = oscard.id;
            report = report.id;
            report = oscard !== report;
            if(!report) { _fun00010_ip = 424; continue _fun00009 }
 277:
            golfie = _closure1_slot16;
            oscard = golfie.getStatus;
            golfie = oscard.bind(golfie)();
            oscard = _closure1_slot25;
            oscard = oscard.DND;
            oscard = golfie !== oscard;
            if(!oscard) { _fun00010_ip = 421; continue _fun00009 }
 308:
            option = _closure1_slot0;
            foxtra = _closure1_slot2;
            golfie = 18;
            golfie = foxtra[golfie];
            golfie = option.bind(verify)(golfie);
            option = golfie.FocusMode;
            golfie = option.getSetting;
            golfie = golfie.bind(option)();
            golfie = !golfie;
            if(!golfie) { _fun00010_ip = 418; continue _fun00009 }
 350:
            verify = _closure1_slot17;
            option = verify.allowNoMessages;
            option = option.bind(verify)(romeon);
            option = !option;
            if(!option) { _fun00010_ip = 415; continue _fun00009 }
 371:
            romeon = yankee.type;
            verify = _closure1_slot23;
            verify = verify.CHAT_WALLPAPER_SET;
            verify = romeon !== verify;
            if(!verify) { _fun00010_ip = 412; continue _fun00009 }
 393:
            yankee = yankee.type;
            offset = _closure1_slot23;
            offset = offset.CHAT_WALLPAPER_REMOVED;
            verify = yankee !== offset;
 412:
            option = verify;
 415:
            golfie = option;
 418:
            oscard = golfie;
 421:
            report = oscard;
 424:
            tangon = report;
 427:
            zuuluu = tangon;
 430:
            michal = zuuluu;
 433:
            entity = michal;
 436:
            return entity;
 438:
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
            entity = argBar;
            offset = argBaz;
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            zuuluu = 25;
            zuuluu = tangon[zuuluu];
            tangon = undefined;
            option = report.bind(tangon)(zuuluu);
            oscard = option.getName;
            zuuluu = golfie.getGuildId;
            report = zuuluu.bind(golfie)();
            zuuluu = golfie.id;
            foxtra = oscard.bind(option)(report, zuuluu, offset);
            report = golfie.type;
            zuuluu = _closure1_slot21;
            zuuluu = zuuluu.GUILD_ANNOUNCEMENT;
            if(!(zuuluu !== report)) { _fun00016_ip = 350; continue _fun00015 }
 84:
            zuuluu = _closure1_slot21;
            zuuluu = zuuluu.GUILD_TEXT;
            if(!(zuuluu !== report)) { _fun00016_ip = 350; continue _fun00015 }
 101:
            zuuluu = _closure1_slot21;
            zuuluu = zuuluu.GUILD_VOICE;
            if(!(zuuluu !== report)) { _fun00016_ip = 350; continue _fun00015 }
 118:
            zuuluu = _closure1_slot21;
            zuuluu = zuuluu.ANNOUNCEMENT_THREAD;
            if(!(zuuluu !== report)) { _fun00016_ip = 350; continue _fun00015 }
 135:
            zuuluu = _closure1_slot21;
            zuuluu = zuuluu.PUBLIC_THREAD;
            if(!(zuuluu !== report)) { _fun00016_ip = 350; continue _fun00015 }
 152:
            zuuluu = _closure1_slot21;
            zuuluu = zuuluu.PRIVATE_THREAD;
            if(!(zuuluu !== report)) { _fun00016_ip = 350; continue _fun00015 }
 169:
            zuuluu = _closure1_slot21;
            zuuluu = zuuluu.GROUP_DM;
            oscard = foxtra;
            if(!(zuuluu === report)) { _fun00016_ip = 513; continue _fun00015 }
 189:
            zuuluu = golfie.isManaged;
            zuuluu = zuuluu.bind(golfie)();
            if(!zuuluu) { _fun00016_ip = 208; continue _fun00015 }
 202:
            zuuluu = offset.bot;
 208:
            if(!zuuluu) { _fun00016_ip = 256; continue _fun00015 }
 211:
            option = _closure1_slot0;
            verify = _closure1_slot2;
            report = 22;
            report = verify[report];
            yankee = option.bind(tangon)(report);
            verify = yankee.computeChannelName;
            option = _closure1_slot18;
            report = _closure1_slot13;
            report = verify.bind(yankee)(golfie, option, report);
            zuuluu = foxtra === report;
 256:
            oscard = foxtra;
            if(zuuluu) { _fun00016_ip = 513; continue _fun00015 }
 265:
            report = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 22;
            zuuluu = option[zuuluu];
            yankee = report.bind(tangon)(zuuluu);
            verify = yankee.computeChannelName;
            ctrled = _closure1_slot18;
            source = _closure1_slot13;
            update = true;
            sequen = yankee;
            vacuum = golfie;
            source = sequen[verify](vacuum, ctrled, source, update, echoed);
            zuuluu = global;
            zuuluu = zuuluu.HermesInternal;
            verify = zuuluu.concat;
            sequen = '';
            ctrled = ' (';
            update = ')';
            vacuum = foxtra;
            oscard = sequen[verify](vacuum, ctrled, source, update, echoed);
            _fun00016_ip = 513; continue _fun00015;
 350:
            option = _closure1_slot10;
            report = option.getChannel;
            zuuluu = golfie.parent_id;
            option = report.bind(option)(zuuluu);
            report = entity.type;
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.THREAD_STARTER_MESSAGE;
            if(!(report === zuuluu)) { _fun00016_ip = 395; continue _fun00015 }
 389:
            zuuluu = null;
            if(!(zuuluu == option)) { _fun00016_ip = 482; continue _fun00015 }
 395:
            report = _closure1_slot1;
            verify = _closure1_slot2;
            zuuluu = 26;
            zuuluu = verify[zuuluu];
            zuuluu = report.bind(tangon)(zuuluu);
            zuuluu = zuuluu.bind(tangon)(entity);
            if(zuuluu) { _fun00016_ip = 436; continue _fun00015 }
 423:
            zuuluu = _closure1_slot28;
            oscard = zuuluu.bind(tangon)(foxtra, golfie, option);
            _fun00016_ip = 513; continue _fun00015;
 436:
            verify = _closure1_slot11;
            report = verify.getGuild;
            zuuluu = golfie.getGuildId;
            zuuluu = zuuluu.bind(golfie)();
            report = report.bind(verify)(zuuluu);
            zuuluu = null;
            oscard = foxtra;
            if(!(zuuluu != report)) { _fun00016_ip = 513; continue _fun00015 }
 469:
            zuuluu = _closure1_slot28;
            oscard = zuuluu.bind(tangon)(foxtra, golfie, option);
            _fun00016_ip = 513; continue _fun00015;
 482:
            report = _closure1_slot28;
            yankee = _closure1_slot10;
            verify = yankee.getChannel;
            zuuluu = option.parent_id;
            zuuluu = verify.bind(yankee)(zuuluu);
            oscard = report.bind(tangon)(foxtra, option, zuuluu);
 513:
            sizing = entity.content;
            report = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 26;
            zuuluu = option[zuuluu];
            zuuluu = report.bind(tangon)(zuuluu);
            zuuluu = zuuluu.bind(tangon)(entity);
            if(!zuuluu) { _fun00016_ip = 587; continue _fun00015 }
 546:
            report = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 27;
            zuuluu = option[zuuluu];
            report = report.bind(tangon)(zuuluu);
            zuuluu = report.stringify;
            sizing = zuuluu.bind(report)(entity, golfie);
            zuuluu = null;
            if(!(zuuluu != sizing)) { _fun00016_ip = 2551; continue _fun00015 }
 587:
            zuuluu = 'sticker_items';
            zuuluu = zuuluu in entity;
            if(zuuluu) { _fun00016_ip = 625; continue _fun00015 }
 598:
            zuuluu = 'stickerItems';
            zuuluu = zuuluu in entity;
            if(zuuluu) { _fun00016_ip = 617; continue _fun00015 }
 609:
            backup = entity.stickers;
            _fun00016_ip = 623; continue _fun00015;
 617:
            backup = entity.stickerItems;
 623:
            _fun00016_ip = 631; continue _fun00015;
 625:
            backup = entity.sticker_items;
 631:
            zuuluu = 'message_reference';
            zuuluu = zuuluu in entity;
            if(zuuluu) { _fun00016_ip = 669; continue _fun00015 }
 642:
            report = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 29;
            zuuluu = option[zuuluu];
            zuuluu = report.bind(tangon)(zuuluu);
            zuuluu = zuuluu.bind(tangon)(entity);
            _fun00016_ip = 700; continue _fun00015;
 669:
            option = _closure1_slot0;
            verify = _closure1_slot2;
            report = 29;
            report = verify[report];
            option = option.bind(tangon)(report);
            report = option.isForwardServerMessage;
            zuuluu = report.bind(option)(entity);
 700:
            if(zuuluu) { _fun00016_ip = 1915; continue _fun00015 }
 706:
            report = entity.activity;
            zuuluu = null;
            if(!(zuuluu != report)) { _fun00016_ip = 730; continue _fun00015 }
 718:
            report = entity.application;
            if(!(zuuluu == report)) { _fun00016_ip = 1579; continue _fun00015 }
 730:
            report = entity.activity;
            if(!(zuuluu != report)) { _fun00016_ip = 768; continue _fun00015 }
 740:
            report = entity.activity;
            option = report.type;
            report = _closure1_slot20;
            report = report.LISTEN;
            if(!(option !== report)) { _fun00016_ip = 1453; continue _fun00015 }
 768:
            if(!(zuuluu != backup)) { _fun00016_ip = 786; continue _fun00015 }
 772:
            report = backup.length;
            romeon = 0;
            if(!(!(report > romeon))) { _fun00016_ip = 1374; continue _fun00015 }
 786:
            option = entity.type;
            report = _closure1_slot23;
            report = report.PREMIUM_REFERRAL;
            if(!(option !== report)) { _fun00016_ip = 1280; continue _fun00015 }
 808:
            report = entity.poll;
            if(!(zuuluu == report)) { _fun00016_ip = 1195; continue _fun00015 }
 821:
            option = entity.type;
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
            report = 31;
            report = yankee[report];
            kiloes = option.bind(tangon)(report);
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
            option = 31;
            option = yankee[option];
            kiloes = verify.bind(tangon)(option);
            yankee = kiloes.unparse;
            verify = golfie.id;
            option = true;
            report = yankee.bind(kiloes)(sizing, verify, option);
 1020:
            _fun00016_ip = 1970; continue _fun00015;
 1025:
            yankee = entity.embeds;
            verify = zuuluu == yankee;
            option = undefined;
            if(verify) { _fun00016_ip = 1087; continue _fun00015 }
 1040:
            verify = 0;
            verify = yankee[verify];
            yankee = zuuluu == verify;
            option = undefined;
            if(yankee) { _fun00016_ip = 1087; continue _fun00015 }
 1055:
            kiloes = verify.fields;
            verify = zuuluu == kiloes;
            option = undefined;
            if(verify) { _fun00016_ip = 1087; continue _fun00015 }
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
 1087:
            zuuluu = zuuluu != option;
            kiloes = '';
            if(!zuuluu) { _fun00016_ip = 1125; continue _fun00015 }
 1098:
            zuuluu = 'value';
            zuuluu = zuuluu in option;
            if(zuuluu) { _fun00016_ip = 1117; continue _fun00015 }
 1109:
            zuuluu = option.rawValue;
            _fun00016_ip = 1122; continue _fun00015;
 1117:
            zuuluu = option.value;
 1122:
            kiloes = zuuluu;
 1125:
            option = _closure1_slot0;
            sizing = _closure1_slot2;
            zuuluu = 23;
            verify = sizing[zuuluu];
            verify = option.bind(tangon)(verify);
            yankee = verify.intl;
            verify = yankee.formatToPlainString;
            zuuluu = sizing[zuuluu];
            zuuluu = option.bind(tangon)(zuuluu);
            zuuluu = zuuluu.t;
            option = zuuluu.9WrecH;
            zuuluu = {};
            zuuluu['question'] = kiloes;
            report = verify.bind(yankee)(option, zuuluu);
            _fun00016_ip = 1970; continue _fun00015;
 1195:
            option = _closure1_slot0;
            kiloes = _closure1_slot2;
            zuuluu = 23;
            verify = kiloes[zuuluu];
            verify = option.bind(tangon)(verify);
            yankee = verify.intl;
            verify = yankee.formatToPlainString;
            zuuluu = kiloes[zuuluu];
            zuuluu = option.bind(tangon)(zuuluu);
            zuuluu = zuuluu.t;
            option = zuuluu.ImizdH;
            zuuluu = {};
            kiloes = entity.poll;
            kiloes = kiloes.question;
            kiloes = kiloes.text;
            zuuluu['question'] = kiloes;
            report = verify.bind(yankee)(option, zuuluu);
            _fun00016_ip = 1970; continue _fun00015;
 1280:
            option = _closure1_slot0;
            output = _closure1_slot2;
            zuuluu = 23;
            verify = output[zuuluu];
            verify = option.bind(tangon)(verify);
            yankee = verify.intl;
            verify = yankee.formatToPlainString;
            zuuluu = output[zuuluu];
            zuuluu = option.bind(tangon)(zuuluu);
            zuuluu = zuuluu.t;
            option = zuuluu.lieTqa;
            zuuluu = {};
            sizing = _closure1_slot1;
            kiloes = 30;
            kiloes = output[kiloes];
            sizing = sizing.bind(tangon)(kiloes);
            kiloes = sizing.getName;
            kiloes = kiloes.bind(sizing)(offset);
            zuuluu['username'] = kiloes;
            report = verify.bind(yankee)(option, zuuluu);
            _fun00016_ip = 1970; continue _fun00015;
 1374:
            option = _closure1_slot0;
            kiloes = _closure1_slot2;
            zuuluu = 23;
            verify = kiloes[zuuluu];
            verify = option.bind(tangon)(verify);
            yankee = verify.intl;
            verify = yankee.formatToPlainString;
            zuuluu = kiloes[zuuluu];
            zuuluu = option.bind(tangon)(zuuluu);
            zuuluu = zuuluu.t;
            option = zuuluu.zY4v1N;
            zuuluu = {};
            romeon = backup[romeon];
            romeon = romeon.name;
            zuuluu['stickerName'] = romeon;
            report = verify.bind(yankee)(option, zuuluu);
            _fun00016_ip = 1970; continue _fun00015;
 1453:
            kiloes = _closure1_slot30;
            option = _closure1_slot0;
            verify = _closure1_slot2;
            zuuluu = 23;
            yankee = verify[zuuluu];
            yankee = option.bind(tangon)(yankee);
            yankee = yankee.t;
            ctrled = yankee.SaDdmJ;
            yankee = verify[zuuluu];
            yankee = option.bind(tangon)(yankee);
            yankee = yankee.t;
            source = yankee.qsODho;
            yankee = verify[zuuluu];
            yankee = option.bind(tangon)(yankee);
            yankee = yankee.t;
            update = yankee.WeiMTU;
            sequen = undefined;
            vacuum = golfie;
            yankee = sequen[kiloes](vacuum, ctrled, source, update, echoed);
            zuuluu = verify[zuuluu];
            zuuluu = option.bind(tangon)(zuuluu);
            verify = zuuluu.intl;
            option = verify.formatToPlainString;
            zuuluu = {};
            zuuluu['user'] = foxtra;
            report = option.bind(verify)(yankee, zuuluu);
            _fun00016_ip = 1970; continue _fun00015;
 1579:
            zuuluu = entity.activity;
            option = zuuluu.type;
            zuuluu = _closure1_slot20;
            zuuluu = zuuluu.JOIN;
            if(!(option !== zuuluu)) { _fun00016_ip = 1774; continue _fun00015 }
 1607:
            zuuluu = entity.activity;
            verify = zuuluu.type;
            zuuluu = _closure1_slot20;
            option = zuuluu.JOIN_REQUEST;
            zuuluu = '';
            if(!(verify === option)) { _fun00016_ip = 1769; continue _fun00015 }
 1639:
            sizing = _closure1_slot0;
            output = _closure1_slot2;
            option = 23;
            verify = output[option];
            verify = sizing.bind(tangon)(verify);
            romeon = verify.intl;
            yankee = romeon.formatToPlainString;
            kiloes = _closure1_slot30;
            verify = output[option];
            verify = sizing.bind(tangon)(verify);
            verify = verify.t;
            ctrled = verify./TD0lZ;
            verify = output[option];
            verify = sizing.bind(tangon)(verify);
            verify = verify.t;
            source = verify./TD0lZ;
            option = output[option];
            option = sizing.bind(tangon)(option);
            option = option.t;
            update = option./TD0lZ;
            sequen = undefined;
            vacuum = golfie;
            verify = sequen[kiloes](vacuum, ctrled, source, update, echoed);
            option = {};
            option['user'] = foxtra;
            backup = entity.application;
            backup = backup.name;
            option['game'] = backup;
            zuuluu = yankee.bind(romeon)(verify, option);
 1769:
            _fun00016_ip = 1910; continue _fun00015;
 1774:
            sizing = _closure1_slot0;
            output = _closure1_slot2;
            option = 23;
            verify = output[option];
            verify = sizing.bind(tangon)(verify);
            romeon = verify.intl;
            yankee = romeon.formatToPlainString;
            kiloes = _closure1_slot30;
            verify = output[option];
            verify = sizing.bind(tangon)(verify);
            verify = verify.t;
            ctrled = verify.E8CgCg;
            verify = output[option];
            verify = sizing.bind(tangon)(verify);
            verify = verify.t;
            source = verify.c6KHWF;
            option = output[option];
            option = sizing.bind(tangon)(option);
            option = option.t;
            update = option.Fy7rJC;
            sequen = undefined;
            vacuum = golfie;
            verify = sequen[kiloes](vacuum, ctrled, source, update, echoed);
            option = {};
            option['user'] = foxtra;
            foxtra = entity.application;
            foxtra = foxtra.name;
            option['game'] = foxtra;
            zuuluu = yankee.bind(romeon)(verify, option);
 1910:
            report = zuuluu;
            _fun00016_ip = 1970; continue _fun00015;
 1915:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            zuuluu = 23;
            option = romeon[zuuluu];
            option = yankee.bind(tangon)(option);
            verify = option.intl;
            option = verify.string;
            zuuluu = romeon[zuuluu];
            zuuluu = yankee.bind(tangon)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.9ddYKi;
            report = option.bind(verify)(zuuluu);
 1970:
            zuuluu = report.length;
            yankee = 0;
            if(!(yankee === zuuluu)) { _fun00016_ip = 2515; continue _fun00015 }
 1984:
            zuuluu = entity.embeds;
            if(!(tangon !== zuuluu)) { _fun00016_ip = 2114; continue _fun00015 }
 1994:
            zuuluu = entity.embeds;
            zuuluu = zuuluu.length;
            if(!(zuuluu > yankee)) { _fun00016_ip = 2114; continue _fun00015 }
 2009:
            zuuluu = entity.embeds;
            option = zuuluu[yankee];
            zuuluu = 'description';
            zuuluu = zuuluu in option;
            if(zuuluu) { _fun00016_ip = 2038; continue _fun00015 }
 2030:
            backup = option.rawDescription;
            _fun00016_ip = 2043; continue _fun00015;
 2038:
            backup = option.description;
 2043:
            zuuluu = 'title';
            zuuluu = zuuluu in option;
            if(zuuluu) { _fun00016_ip = 2062; continue _fun00015 }
 2054:
            foxtra = option.rawTitle;
            _fun00016_ip = 2067; continue _fun00015;
 2062:
            foxtra = option.title;
 2067:
            verify = null;
            if(!(verify == backup)) { _fun00016_ip = 2474; continue _fun00015 }
 2076:
            zuuluu = foxtra;
            if(!(verify == zuuluu)) { _fun00016_ip = 2512; continue _fun00015 }
 2086:
            romeon = option.fields;
            if(!(verify != romeon)) { _fun00016_ip = 2114; continue _fun00015 }
 2096:
            romeon = option.fields;
            romeon = romeon.length;
            if(!(!(romeon > yankee))) { _fun00016_ip = 2386; continue _fun00015 }
 2114:
            kiloes = _closure1_slot0;
            sizing = _closure1_slot2;
            romeon = 19;
            romeon = sizing[romeon];
            output = kiloes.bind(tangon)(romeon);
            sizing = output.hasFlag;
            romeon = entity.flags;
            kiloes = null;
            result = kiloes != romeon;
            kiloes = 0;
            if(!result) { _fun00016_ip = 2159; continue _fun00015 }
 2156:
            kiloes = romeon;
 2159:
            romeon = _closure1_slot22;
            romeon = romeon.IS_VOICE_MESSAGE;
            romeon = sizing.bind(output)(kiloes, romeon);
            if(romeon) { _fun00016_ip = 2326; continue _fun00015 }
 2181:
            romeon = entity.attachments;
            kiloes = '';
            zuuluu = kiloes;
            if(!(tangon !== romeon)) { _fun00016_ip = 2512; continue _fun00015 }
 2201:
            romeon = entity.attachments;
            romeon = romeon.length;
            romeon = romeon > yankee;
            zuuluu = kiloes;
            if(!romeon) { _fun00016_ip = 2512; continue _fun00015 }
 2225:
            kiloes = _closure1_slot1;
            echoed = _closure1_slot2;
            romeon = 24;
            romeon = echoed[romeon];
            kiloes = kiloes.bind(tangon)(romeon);
            romeon = entity.attachments;
            romeon = romeon[yankee];
            result = kiloes.bind(tangon)(romeon);
            kiloes = _closure1_slot0;
            romeon = 23;
            sizing = echoed[romeon];
            sizing = kiloes.bind(tangon)(sizing);
            output = sizing.intl;
            sizing = output.formatToPlainString;
            romeon = echoed[romeon];
            romeon = kiloes.bind(tangon)(romeon);
            romeon = romeon.t;
            kiloes = romeon.51OkwM;
            romeon = {};
            romeon['filename'] = result;
            zuuluu = sizing.bind(output)(kiloes, romeon);
            _fun00016_ip = 2512; continue _fun00015;
 2326:
            output = _closure1_slot0;
            result = _closure1_slot2;
            romeon = 23;
            kiloes = result[romeon];
            kiloes = output.bind(tangon)(kiloes);
            sizing = kiloes.intl;
            kiloes = sizing.string;
            romeon = result[romeon];
            romeon = output.bind(tangon)(romeon);
            romeon = romeon.t;
            romeon = romeon.slFYgo;
            zuuluu = kiloes.bind(sizing)(romeon);
            _fun00016_ip = 2512; continue _fun00015;
 2386:
            option = option.fields;
            option = option[yankee];
            yankee = 'name';
            yankee = yankee in option;
            if(yankee) { _fun00016_ip = 2415; continue _fun00015 }
 2407:
            sizing = option.rawName;
            _fun00016_ip = 2420; continue _fun00015;
 2415:
            sizing = option.name;
 2420:
            yankee = 'value';
            yankee = yankee in option;
            if(yankee) { _fun00016_ip = 2439; continue _fun00015 }
 2431:
            kiloes = option.rawValue;
            _fun00016_ip = 2444; continue _fun00015;
 2439:
            kiloes = option.value;
 2444:
            option = global;
            option = option.HermesInternal;
            romeon = option.concat;
            yankee = '';
            option = ' ';
            zuuluu = romeon.bind(yankee)(sizing, option, kiloes);
            _fun00016_ip = 2512; continue _fun00015;
 2474:
            option = backup;
            if(!(verify != foxtra)) { _fun00016_ip = 2509; continue _fun00015 }
 2481:
            verify = global;
            verify = verify.HermesInternal;
            romeon = verify.concat;
            yankee = '';
            verify = ' ';
            option = romeon.bind(yankee)(foxtra, verify, backup);
 2509:
            zuuluu = option;
 2512:
            report = zuuluu;
 2515:
            zuuluu = {};
            verify = offset.getAvatarURL;
            option = golfie.guild_id;
            golfie = 128;
            golfie = verify.bind(offset)(option, golfie);
            zuuluu['icon'] = golfie;
            zuuluu['title'] = oscard;
            zuuluu['body'] = report;
            return zuuluu;
 2551:
            zuuluu = _closure1_slot1;
            report = _closure1_slot2;
            michal = 28;
            michal = report[michal];
            tangon = zuuluu.bind(tangon)(michal);
            michal = tangon.prototype;
            zuuluu = Object.create(michal, {constructor: {value: tangon}});
            vacuum = 'NotificationTextUtils';
            sequen = zuuluu;
            michal = new sequen[tangon](vacuum, ctrled);
            tangon = michal instanceof Object ? michal : zuuluu;
            zuuluu = tangon.warn;
            michal = {};
            michal['message'] = entity;
            entity = 'SystemMessageUtils.stringify(...) could not convert';
            entity = zuuluu.bind(tangon)(entity, michal);
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
            michal = 32;
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
            michal = 32;
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