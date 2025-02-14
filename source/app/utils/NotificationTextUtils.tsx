// app/utils/NotificationTextUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    golf = argBar;
    oscar = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    var _closure1_slot2 = options;
    report = function(argFoo, argBar, argBaz) { // Original name: shouldNotifyBase
        _fun86616: for(var _fun86616_ip = 0; ; ) switch(_fun86616_ip) {
 0:
            zulu = argBar;
            verify = argBaz;
            oscar = arguments[3];
            offset = undefined;
            if(!(oscar === offset)) { _fun86616_ip = 17; continue _fun86616 }
 15:
            oscar = {};
 17:
            mike = zulu.hasFlag;
            entity = _closure1_slot24;
            entity = entity.SPAMMER;
            entity = mike.bind(zulu)(entity);
            if(entity) { _fun86616_ip = 309; continue _fun86616 }
 47:
            entity = verify.isManaged;
            entity = entity.bind(verify)();
            if(entity) { _fun86616_ip = 305; continue _fun86616 }
 63:
            entity = verify.getGuildId;
            report = entity.bind(verify)();
            entity = null;
            entity = entity == report;
            if(entity) { _fun86616_ip = 100; continue _fun86616 }
 82:
            tango = _closure1_slot3;
            mike = tango.isLurking;
            mike = mike.bind(tango)(report);
            entity = !mike;
 100:
            if(!entity) { _fun86616_ip = 303; continue _fun86616 }
 106:
            mike = oscar.ignoreSameUser;
            tango = !mike;
            if(!tango) { _fun86616_ip = 135; continue _fun86616 }
 118:
            report = zulu.id;
            mike = argFoo;
            mike = mike.id;
            tango = report === mike;
 135:
            mike = !tango;
            if(tango) { _fun86616_ip = 300; continue _fun86616 }
 144:
            report = _closure1_slot12;
            tango = report.isBlockedOrIgnored;
            zulu = zulu.id;
            zulu = tango.bind(report)(zulu);
            zulu = !zulu;
            if(!zulu) { _fun86616_ip = 297; continue _fun86616 }
 173:
            tango = oscar.ignoreStatus;
            report = !tango;
            if(!report) { _fun86616_ip = 213; continue _fun86616 }
 185:
            options = _closure1_slot15;
            tango = options.getStatus;
            options = tango.bind(options)();
            tango = _closure1_slot23;
            tango = tango.DND;
            report = options === tango;
 213:
            tango = !report;
            if(report) { _fun86616_ip = 294; continue _fun86616 }
 219:
            options = _closure1_slot0;
            yankee = _closure1_slot2;
            report = 16;
            report = yankee[report];
            report = options.bind(offset)(report);
            options = report.FocusMode;
            report = options.getSetting;
            report = report.bind(options)();
            report = !report;
            if(!report) { _fun86616_ip = 291; continue _fun86616 }
 261:
            oscar = oscar.ignoreNoMessagesSetting;
            oscar = !oscar;
            if(!oscar) { _fun86616_ip = 288; continue _fun86616 }
 273:
            options = _closure1_slot16;
            golf = options.allowNoMessages;
            oscar = golf.bind(options)(verify);
 288:
            report = !oscar;
 291:
            tango = report;
 294:
            zulu = tango;
 297:
            mike = zulu;
 300:
            entity = mike;
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
    var _closure1_slot27 = report;
    entity = function(argFoo, argBar, argBaz, argCorge) { // Original name: getInviteEmbedFormatString
        _fun86617: for(var _fun86617_ip = 0; ; ) switch(_fun86617_ip) {
 0:
            entity = argFoo;
            zulu = entity.type;
            mike = _closure1_slot19;
            mike = mike.GUILD_ANNOUNCEMENT;
            if(!(mike !== zulu)) { _fun86617_ip = 73; continue _fun86617 }
 25:
            mike = _closure1_slot19;
            mike = mike.GUILD_TEXT;
            if(!(mike !== zulu)) { _fun86617_ip = 73; continue _fun86617 }
 39:
            mike = _closure1_slot19;
            mike = mike.GROUP_DM;
            if(!(mike !== zulu)) { _fun86617_ip = 68; continue _fun86617 }
 53:
            entity = _closure1_slot19;
            entity = entity.DM;
            entity = argCorge;
            return entity;
 68:
            entity = argBaz;
            return entity;
 73:
            entity = argBar;
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, tango);
    entity = 0;
    tango = options[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = options[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = options[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = options[tango];
    tango = golf.bind(entity)(tango);
    verify = tango.GUILD_VOCAL_CHANNEL_TYPES;
    var _closure1_slot6 = verify;
    tango = tango.THREAD_CHANNEL_TYPES;
    var _closure1_slot7 = tango;
    tango = 4;
    tango = options[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 5;
    tango = options[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 6;
    tango = options[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 7;
    tango = options[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot11 = tango;
    tango = 8;
    tango = options[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot12 = tango;
    tango = 9;
    tango = options[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot13 = tango;
    tango = 10;
    tango = options[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot14 = tango;
    tango = 11;
    tango = options[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot15 = tango;
    tango = 12;
    tango = options[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot16 = tango;
    tango = 13;
    tango = options[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot17 = tango;
    tango = 14;
    tango = options[tango];
    tango = golf.bind(entity)(tango);
    oscar = tango.ActivityActionTypes;
    var _closure1_slot18 = oscar;
    oscar = tango.ChannelTypes;
    var _closure1_slot19 = oscar;
    oscar = tango.MessageFlags;
    var _closure1_slot20 = oscar;
    oscar = tango.MessageTypes;
    var _closure1_slot21 = oscar;
    oscar = tango.MessageTypesSets;
    var _closure1_slot22 = oscar;
    oscar = tango.StatusTypes;
    var _closure1_slot23 = oscar;
    tango = tango.UserFlags;
    var _closure1_slot24 = tango;
    tango = 15;
    tango = options[tango];
    tango = golf.bind(entity)(tango);
    tango = tango.ThreadMemberFlags;
    var _closure1_slot25 = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: renderTitle
        _fun86618: for(var _fun86618_ip = 0; ; ) switch(_fun86618_ip) {
 0:
            options = argBaz;
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            verify = 20;
            mike = mike[verify];
            tango = undefined;
            offset = zulu.bind(tango)(mike);
            golf = offset.computeChannelName;
            backup = _closure1_slot17;
            foxtrot = _closure1_slot12;
            kilo = argBar;
            romeo = true;
            sizing = offset;
            golf = sizing[golf](kilo, backup, foxtrot, romeo, yankee);
            mike = null;
            mike = mike != options;
            oscar = '';
            report = oscar;
            if(!mike) { _fun86618_ip = 132; continue _fun86618 }
 70:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[verify];
            tango = zulu.bind(tango)(mike);
            zulu = tango.computeChannelName;
            mike = _closure1_slot17;
            entity = _closure1_slot12;
            zulu = zulu.bind(tango)(options, mike, entity);
            entity = global;
            entity = entity.HermesInternal;
            mike = entity.concat;
            entity = ', ';
            report = mike.bind(entity)(zulu);
 132:
            entity = global;
            entity = entity.HermesInternal;
            tango = entity.concat;
            kilo = argFoo;
            backup = ' (';
            yankee = ')';
            sizing = oscar;
            foxtrot = golf;
            romeo = report;
            entity = sizing[tango](kilo, backup, foxtrot, romeo, yankee, offset);
            return entity;
        }
    };
    var _closure1_slot26 = tango;
    oscar = 31;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'utils/NotificationTextUtils.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['shouldNotifyBase'] = report;
    report = function(argFoo, argBar) { // Original name: shouldNotify
        _fun86619: for(var _fun86619_ip = 0; ; ) switch(_fun86619_ip) {
 0:
            golf = argFoo;
            offset = argBar;
            entity = arguments[2];
            romeo = arguments[3];
            report = undefined;
            if(!(entity === report)) { _fun86619_ip = 20; continue _fun86619 }
 18:
            entity = true;
 20:
            if(!(romeo === report)) { _fun86619_ip = 26; continue _fun86619 }
 24:
            romeo = false;
 26:
            zulu = golf.flags;
            mike = null;
            if(!(mike != zulu)) { _fun86619_ip = 93; continue _fun86619 }
 37:
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            tango = 17;
            tango = options[tango];
            options = oscar.bind(report)(tango);
            oscar = options.hasFlag;
            tango = golf.flags;
            zulu = _closure1_slot20;
            zulu = zulu.SUPPRESS_NOTIFICATIONS;
            zulu = oscar.bind(options)(tango, zulu);
            if(zulu) { _fun86619_ip = 884; continue _fun86619 }
 93:
            oscar = _closure1_slot9;
            tango = oscar.getChannel;
            yankee = tango.bind(oscar)(offset);
            options = golf.type;
            tango = _closure1_slot21;
            oscar = tango.THREAD_STARTER_MESSAGE;
            tango = yankee;
            if(!(options === oscar)) { _fun86619_ip = 161; continue _fun86619 }
 132:
            verify = _closure1_slot9;
            options = verify.getChannel;
            foxtrot = mike == yankee;
            oscar = undefined;
            if(foxtrot) { _fun86619_ip = 156; continue _fun86619 }
 150:
            oscar = yankee.parent_id;
 156:
            tango = options.bind(verify)(oscar);
 161:
            yankee = _closure1_slot17;
            oscar = yankee.getCurrentUser;
            oscar = oscar.bind(yankee)();
            verify = yankee.getUser;
            foxtrot = golf.author;
            backup = mike == foxtrot;
            options = undefined;
            if(backup) { _fun86619_ip = 200; continue _fun86619 }
 195:
            options = foxtrot.id;
 200:
            yankee = verify.bind(yankee)(options);
            if(!(mike != tango)) { _fun86619_ip = 880; continue _fun86619 }
 212:
            if(!(mike != oscar)) { _fun86619_ip = 880; continue _fun86619 }
 219:
            if(!(mike != yankee)) { _fun86619_ip = 880; continue _fun86619 }
 226:
            verify = tango.type;
            options = _closure1_slot19;
            options = options.GROUP_DM;
            if(!(verify === options)) { _fun86619_ip = 267; continue _fun86619 }
 245:
            verify = golf.type;
            options = _closure1_slot21;
            options = options.RECIPIENT_REMOVE;
            if(!(verify !== options)) { _fun86619_ip = 876; continue _fun86619 }
 267:
            verify = _closure1_slot27;
            options = {};
            options['ignoreStatus'] = romeo;
            romeo = _closure1_slot22;
            backup = romeo.SELF_MENTIONABLE_SYSTEM;
            foxtrot = backup.has;
            romeo = golf.type;
            romeo = foxtrot.bind(backup)(romeo);
            options['ignoreSameUser'] = romeo;
            echo = undefined;
            result = oscar;
            output = yankee;
            sizing = tango;
            kilo = options;
            options = echo[verify](result, output, sizing, kilo, backup);
            if(options) { _fun86619_ip = 333; continue _fun86619 }
 329:
            options = false;
            return options;
 333:
            verify = _closure1_slot4;
            options = verify.isMessageRequest;
            options = options.bind(verify)(offset);
            if(options) { _fun86619_ip = 872; continue _fun86619 }
 354:
            if(entity) { _fun86619_ip = 427; continue _fun86619 }
 357:
            verify = _closure1_slot13;
            options = verify.getChannelId;
            offset = _closure1_slot14;
            entity = offset.getGuildId;
            entity = entity.bind(offset)();
            verify = options.bind(verify)(entity);
            entity = tango.id;
            if(!(verify !== entity)) { _fun86619_ip = 423; continue _fun86619 }
 395:
            options = _closure1_slot8;
            entity = options.getCurrentSidebarChannelId;
            options = entity.bind(options)(verify);
            entity = tango.id;
            if(!(options === entity)) { _fun86619_ip = 427; continue _fun86619 }
 419:
            entity = false;
            return entity;
 423:
            entity = false;
            return entity;
 427:
            options = _closure1_slot12;
            entity = options.isBlockedOrIgnoredForMessage;
            entity = entity.bind(options)(golf);
            if(entity) { _fun86619_ip = 868; continue _fun86619 }
 448:
            entity = golf.activity_instance;
            if(!(report !== entity)) { _fun86619_ip = 496; continue _fun86619 }
 458:
            entity = golf.interaction;
            if(!(mike != entity)) { _fun86619_ip = 496; continue _fun86619 }
 468:
            entity = golf.interaction;
            entity = entity.user;
            mike = entity.id;
            entity = oscar.id;
            if(!(mike !== entity)) { _fun86619_ip = 864; continue _fun86619 }
 496:
            options = _closure1_slot7;
            mike = options.has;
            entity = tango.type;
            entity = mike.bind(options)(entity);
            if(entity) { _fun86619_ip = 705; continue _fun86619 }
 521:
            options = _closure1_slot6;
            mike = options.has;
            entity = tango.type;
            entity = mike.bind(options)(entity);
            entity = !entity;
            if(entity) { _fun86619_ip = 569; continue _fun86619 }
 546:
            options = _closure1_slot11;
            mike = options.getChannelId;
            options = mike.bind(options)();
            mike = tango.id;
            entity = options === mike;
 569:
            options = _closure1_slot16;
            mike = options.allowAllMessages;
            mike = mike.bind(options)(tango);
            if(!mike) { _fun86619_ip = 592; continue _fun86619 }
 589:
            if(entity) { _fun86619_ip = 701; continue _fun86619 }
 592:
            options = _closure1_slot16;
            mike = options.isSuppressEveryoneEnabled;
            entity = tango.getGuildId;
            entity = entity.bind(tango)();
            offset = mike.bind(options)(entity);
            options = _closure1_slot16;
            mike = options.isSuppressRolesEnabled;
            entity = tango.getGuildId;
            entity = entity.bind(tango)();
            verify = mike.bind(options)(entity);
            mike = _closure1_slot0;
            options = _closure1_slot2;
            entity = 19;
            entity = options[entity];
            options = mike.bind(report)(entity);
            mike = options.isRawMessageMentioned;
            entity = {};
            entity['rawMessage'] = golf;
            yankee = oscar.id;
            entity['userId'] = yankee;
            entity['suppressEveryone'] = offset;
            entity['suppressRoles'] = verify;
            entity = mike.bind(options)(entity);
            return entity;
 701:
            entity = true;
            return entity;
 705:
            options = _closure1_slot5;
            mike = options.isMuted;
            entity = tango.id;
            entity = mike.bind(options)(entity);
            if(entity) { _fun86619_ip = 860; continue _fun86619 }
 731:
            mike = _closure1_slot0;
            options = _closure1_slot2;
            entity = 18;
            entity = options[entity];
            mike = mike.bind(report)(entity);
            entity = mike.computeThreadNotificationSetting;
            tango = entity.bind(mike)(tango);
            entity = _closure1_slot25;
            entity = entity.NO_MESSAGES;
            entity = tango !== entity;
            if(!entity) { _fun86619_ip = 858; continue _fun86619 }
 779:
            mike = _closure1_slot25;
            mike = mike.ALL_MESSAGES;
            mike = tango === mike;
            if(mike) { _fun86619_ip = 855; continue _fun86619 }
 796:
            tango = _closure1_slot0;
            options = _closure1_slot2;
            zulu = 19;
            zulu = options[zulu];
            report = tango.bind(report)(zulu);
            tango = report.isRawMessageMentioned;
            zulu = {};
            zulu['rawMessage'] = golf;
            oscar = oscar.id;
            zulu['userId'] = oscar;
            oscar = false;
            zulu['suppressEveryone'] = oscar;
            zulu['suppressRoles'] = oscar;
            mike = tango.bind(report)(zulu);
 855:
            entity = mike;
 858:
            return entity;
 860:
            entity = false;
            return entity;
 864:
            entity = false;
            return entity;
 868:
            entity = false;
            return entity;
 872:
            entity = false;
            return entity;
 876:
            entity = false;
            return entity;
 880:
            entity = false;
            return entity;
 884:
            entity = false;
            return entity;
        }
    };
    zulu['shouldNotify'] = report;
    report = function(argFoo, argBar) { // Original name: shouldNotifyForSelectedChannel
        _fun86620: for(var _fun86620_ip = 0; ; ) switch(_fun86620_ip) {
 0:
            verify = argFoo;
            zulu = argBar;
            tango = _closure1_slot13;
            mike = tango.getChannelId;
            report = _closure1_slot14;
            entity = report.getGuildId;
            entity = entity.bind(report)();
            entity = mike.bind(tango)(entity);
            if(!(entity === zulu)) { _fun86620_ip = 382; continue _fun86620 }
 45:
            mike = _closure1_slot9;
            entity = mike.getChannel;
            tango = entity.bind(mike)(zulu);
            mike = verify.type;
            entity = _closure1_slot21;
            entity = entity.THREAD_STARTER_MESSAGE;
            offset = tango;
            if(!(mike === entity)) { _fun86620_ip = 112; continue _fun86620 }
 81:
            zulu = _closure1_slot9;
            mike = zulu.getChannel;
            entity = null;
            report = entity == tango;
            entity = undefined;
            if(report) { _fun86620_ip = 107; continue _fun86620 }
 101:
            entity = tango.parent_id;
 107:
            offset = mike.bind(zulu)(entity);
 112:
            tango = _closure1_slot17;
            entity = tango.getCurrentUser;
            report = entity.bind(tango)();
            zulu = tango.getUser;
            oscar = verify.author;
            mike = null;
            golf = mike == oscar;
            yankee = undefined;
            entity = undefined;
            if(golf) { _fun86620_ip = 155; continue _fun86620 }
 150:
            entity = oscar.id;
 155:
            oscar = zulu.bind(tango)(entity);
            entity = mike != offset;
            if(!entity) { _fun86620_ip = 171; continue _fun86620 }
 167:
            entity = mike != report;
 171:
            if(!entity) { _fun86620_ip = 178; continue _fun86620 }
 174:
            entity = mike != oscar;
 178:
            if(!entity) { _fun86620_ip = 380; continue _fun86620 }
 184:
            mike = offset.isManaged;
            mike = mike.bind(offset)();
            mike = !mike;
            if(!mike) { _fun86620_ip = 377; continue _fun86620 }
 203:
            tango = oscar.hasFlag;
            zulu = _closure1_slot24;
            zulu = zulu.SPAMMER;
            zulu = tango.bind(oscar)(zulu);
            zulu = !zulu;
            if(!zulu) { _fun86620_ip = 374; continue _fun86620 }
 233:
            golf = _closure1_slot12;
            tango = golf.isBlockedOrIgnoredForMessage;
            tango = tango.bind(golf)(verify);
            tango = !tango;
            if(!tango) { _fun86620_ip = 371; continue _fun86620 }
 254:
            oscar = oscar.id;
            report = report.id;
            report = oscar !== report;
            if(!report) { _fun86620_ip = 368; continue _fun86620 }
 271:
            golf = _closure1_slot15;
            oscar = golf.getStatus;
            golf = oscar.bind(golf)();
            oscar = _closure1_slot23;
            oscar = oscar.DND;
            oscar = golf !== oscar;
            if(!oscar) { _fun86620_ip = 365; continue _fun86620 }
 302:
            verify = _closure1_slot0;
            romeo = _closure1_slot2;
            golf = 16;
            golf = romeo[golf];
            golf = verify.bind(yankee)(golf);
            verify = golf.FocusMode;
            golf = verify.getSetting;
            golf = golf.bind(verify)();
            golf = !golf;
            if(!golf) { _fun86620_ip = 362; continue _fun86620 }
 344:
            verify = _closure1_slot16;
            options = verify.allowNoMessages;
            options = options.bind(verify)(offset);
            golf = !options;
 362:
            oscar = golf;
 365:
            report = oscar;
 368:
            tango = report;
 371:
            zulu = tango;
 374:
            mike = zulu;
 377:
            entity = mike;
 380:
            return entity;
 382:
            entity = false;
            return entity;
        }
    };
    zulu['shouldNotifyForSelectedChannel'] = report;
    report = function(argFoo, argBar) { // Original name: shouldNotifyForForumThreadCreation
        _fun86621: for(var _fun86621_ip = 0; ; ) switch(_fun86621_ip) {
 0:
            golf = argBar;
            tango = arguments[2];
            offset = arguments[3];
            verify = undefined;
            if(!(tango === verify)) { _fun86621_ip = 17; continue _fun86621 }
 15:
            tango = true;
 17:
            if(!(offset === verify)) { _fun86621_ip = 23; continue _fun86621 }
 21:
            offset = false;
 23:
            zulu = _closure1_slot17;
            entity = zulu.getCurrentUser;
            options = entity.bind(zulu)();
            mike = zulu.getUser;
            entity = argFoo;
            entity = entity.ownerId;
            oscar = mike.bind(zulu)(entity);
            mike = null;
            entity = mike != golf;
            if(!entity) { _fun86621_ip = 72; continue _fun86621 }
 68:
            entity = mike != options;
 72:
            if(!entity) { _fun86621_ip = 79; continue _fun86621 }
 75:
            entity = mike != oscar;
 79:
            if(!entity) { _fun86621_ip = 236; continue _fun86621 }
 85:
            zulu = _closure1_slot27;
            mike = {};
            mike['ignoreStatus'] = offset;
            offset = true;
            mike['ignoreNoMessagesSetting'] = offset;
            kilo = undefined;
            backup = options;
            foxtrot = oscar;
            romeo = golf;
            yankee = mike;
            zulu = kilo[zulu](backup, foxtrot, romeo, yankee, offset);
            mike = !zulu;
            mike = !mike;
            if(!zulu) { _fun86621_ip = 233; continue _fun86621 }
 130:
            verify = _closure1_slot16;
            options = verify.isGuildOrCategoryOrChannelMuted;
            oscar = golf.guild_id;
            zulu = golf.id;
            zulu = options.bind(verify)(oscar, zulu);
            zulu = !zulu;
            if(!zulu) { _fun86621_ip = 230; continue _fun86621 }
 162:
            oscar = !tango;
            if(!oscar) { _fun86621_ip = 206; continue _fun86621 }
 168:
            verify = _closure1_slot13;
            options = verify.getChannelId;
            offset = _closure1_slot14;
            tango = offset.getGuildId;
            tango = tango.bind(offset)();
            options = options.bind(verify)(tango);
            tango = golf.id;
            oscar = options === tango;
 206:
            tango = !oscar;
            if(oscar) { _fun86621_ip = 227; continue _fun86621 }
 212:
            oscar = _closure1_slot16;
            report = oscar.getNewForumThreadsCreated;
            tango = report.bind(oscar)(golf);
 227:
            zulu = tango;
 230:
            mike = zulu;
 233:
            entity = mike;
 236:
            return entity;
        }
    };
    zulu['shouldNotifyForForumThreadCreation'] = report;
    report = function(argFoo, argBar) { // Original name: shouldNotifyVoiceStatus
        _fun86622: for(var _fun86622_ip = 0; ; ) switch(_fun86622_ip) {
 0:
            zulu = _closure1_slot17;
            entity = zulu.getCurrentUser;
            oscar = entity.bind(zulu)();
            entity = null;
            entity = entity != oscar;
            if(!entity) { _fun86622_ip = 44; continue _fun86622 }
 25:
            report = _closure1_slot27;
            tango = undefined;
            zulu = argFoo;
            mike = argBar;
            entity = report.bind(tango)(oscar, zulu, mike);
 44:
            return entity;
        }
    };
    zulu['shouldNotifyVoiceStatus'] = report;
    zulu['renderTitle'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: makeTextChatNotification
        _fun86623: for(var _fun86623_ip = 0; ; ) switch(_fun86623_ip) {
 0:
            golf = argFoo;
            tango = argBar;
            offset = argBaz;
            report = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 23;
            mike = zulu[mike];
            zulu = undefined;
            options = report.bind(zulu)(mike);
            oscar = options.getName;
            mike = golf.getGuildId;
            report = mike.bind(golf)();
            mike = golf.id;
            foxtrot = oscar.bind(options)(report, mike, offset);
            report = golf.type;
            mike = _closure1_slot19;
            mike = mike.GUILD_ANNOUNCEMENT;
            if(!(mike !== report)) { _fun86623_ip = 350; continue _fun86623 }
 84:
            mike = _closure1_slot19;
            mike = mike.GUILD_TEXT;
            if(!(mike !== report)) { _fun86623_ip = 350; continue _fun86623 }
 101:
            mike = _closure1_slot19;
            mike = mike.GUILD_VOICE;
            if(!(mike !== report)) { _fun86623_ip = 350; continue _fun86623 }
 118:
            mike = _closure1_slot19;
            mike = mike.ANNOUNCEMENT_THREAD;
            if(!(mike !== report)) { _fun86623_ip = 350; continue _fun86623 }
 135:
            mike = _closure1_slot19;
            mike = mike.PUBLIC_THREAD;
            if(!(mike !== report)) { _fun86623_ip = 350; continue _fun86623 }
 152:
            mike = _closure1_slot19;
            mike = mike.PRIVATE_THREAD;
            if(!(mike !== report)) { _fun86623_ip = 350; continue _fun86623 }
 169:
            mike = _closure1_slot19;
            mike = mike.GROUP_DM;
            oscar = foxtrot;
            if(!(mike === report)) { _fun86623_ip = 513; continue _fun86623 }
 189:
            mike = golf.isManaged;
            mike = mike.bind(golf)();
            if(!mike) { _fun86623_ip = 208; continue _fun86623 }
 202:
            mike = offset.bot;
 208:
            if(!mike) { _fun86623_ip = 256; continue _fun86623 }
 211:
            options = _closure1_slot0;
            verify = _closure1_slot2;
            report = 20;
            report = verify[report];
            yankee = options.bind(zulu)(report);
            verify = yankee.computeChannelName;
            options = _closure1_slot17;
            report = _closure1_slot12;
            report = verify.bind(yankee)(golf, options, report);
            mike = foxtrot === report;
 256:
            oscar = foxtrot;
            if(mike) { _fun86623_ip = 513; continue _fun86623 }
 265:
            report = _closure1_slot0;
            options = _closure1_slot2;
            mike = 20;
            mike = options[mike];
            yankee = report.bind(zulu)(mike);
            verify = yankee.computeChannelName;
            control = _closure1_slot17;
            source = _closure1_slot12;
            update = true;
            sequence = yankee;
            vacuum = golf;
            source = sequence[verify](vacuum, control, source, update, echo);
            mike = global;
            mike = mike.HermesInternal;
            verify = mike.concat;
            sequence = '';
            control = ' (';
            update = ')';
            vacuum = foxtrot;
            oscar = sequence[verify](vacuum, control, source, update, echo);
            _fun86623_ip = 513; continue _fun86623;
 350:
            options = _closure1_slot9;
            report = options.getChannel;
            mike = golf.parent_id;
            options = report.bind(options)(mike);
            report = tango.type;
            mike = _closure1_slot21;
            mike = mike.THREAD_STARTER_MESSAGE;
            if(!(report === mike)) { _fun86623_ip = 395; continue _fun86623 }
 389:
            mike = null;
            if(!(mike == options)) { _fun86623_ip = 482; continue _fun86623 }
 395:
            report = _closure1_slot1;
            verify = _closure1_slot2;
            mike = 24;
            mike = verify[mike];
            mike = report.bind(zulu)(mike);
            mike = mike.bind(zulu)(tango);
            if(mike) { _fun86623_ip = 436; continue _fun86623 }
 423:
            mike = _closure1_slot26;
            oscar = mike.bind(zulu)(foxtrot, golf, options);
            _fun86623_ip = 513; continue _fun86623;
 436:
            verify = _closure1_slot10;
            report = verify.getGuild;
            mike = golf.getGuildId;
            mike = mike.bind(golf)();
            report = report.bind(verify)(mike);
            mike = null;
            oscar = foxtrot;
            if(!(mike != report)) { _fun86623_ip = 513; continue _fun86623 }
 469:
            mike = _closure1_slot26;
            oscar = mike.bind(zulu)(foxtrot, golf, options);
            _fun86623_ip = 513; continue _fun86623;
 482:
            report = _closure1_slot26;
            yankee = _closure1_slot9;
            verify = yankee.getChannel;
            mike = options.parent_id;
            mike = verify.bind(yankee)(mike);
            oscar = report.bind(zulu)(foxtrot, options, mike);
 513:
            sizing = tango.content;
            report = _closure1_slot1;
            options = _closure1_slot2;
            mike = 24;
            mike = options[mike];
            mike = report.bind(zulu)(mike);
            mike = mike.bind(zulu)(tango);
            if(!mike) { _fun86623_ip = 587; continue _fun86623 }
 546:
            report = _closure1_slot1;
            options = _closure1_slot2;
            mike = 25;
            mike = options[mike];
            report = report.bind(zulu)(mike);
            mike = report.stringify;
            sizing = mike.bind(report)(tango, golf);
            mike = null;
            if(!(mike != sizing)) { _fun86623_ip = 2535; continue _fun86623 }
 587:
            mike = 'sticker_items';
            mike = mike in tango;
            if(mike) { _fun86623_ip = 625; continue _fun86623 }
 598:
            mike = 'stickerItems';
            mike = mike in tango;
            if(mike) { _fun86623_ip = 617; continue _fun86623 }
 609:
            backup = tango.stickers;
            _fun86623_ip = 623; continue _fun86623;
 617:
            backup = tango.stickerItems;
 623:
            _fun86623_ip = 631; continue _fun86623;
 625:
            backup = tango.sticker_items;
 631:
            mike = 'message_reference';
            mike = mike in tango;
            if(mike) { _fun86623_ip = 669; continue _fun86623 }
 642:
            report = _closure1_slot1;
            options = _closure1_slot2;
            mike = 27;
            mike = options[mike];
            mike = report.bind(zulu)(mike);
            mike = mike.bind(zulu)(tango);
            _fun86623_ip = 700; continue _fun86623;
 669:
            options = _closure1_slot0;
            verify = _closure1_slot2;
            report = 27;
            report = verify[report];
            options = options.bind(zulu)(report);
            report = options.isForwardServerMessage;
            mike = report.bind(options)(tango);
 700:
            if(mike) { _fun86623_ip = 1901; continue _fun86623 }
 706:
            report = tango.activity;
            mike = null;
            if(!(mike != report)) { _fun86623_ip = 730; continue _fun86623 }
 718:
            report = tango.application;
            if(!(mike == report)) { _fun86623_ip = 1571; continue _fun86623 }
 730:
            report = tango.activity;
            if(!(mike != report)) { _fun86623_ip = 768; continue _fun86623 }
 740:
            report = tango.activity;
            options = report.type;
            report = _closure1_slot18;
            report = report.LISTEN;
            if(!(options !== report)) { _fun86623_ip = 1451; continue _fun86623 }
 768:
            if(!(mike != backup)) { _fun86623_ip = 786; continue _fun86623 }
 772:
            report = backup.length;
            romeo = 0;
            if(!(!(report > romeo))) { _fun86623_ip = 1374; continue _fun86623 }
 786:
            options = tango.type;
            report = _closure1_slot21;
            report = report.PREMIUM_REFERRAL;
            if(!(options !== report)) { _fun86623_ip = 1280; continue _fun86623 }
 808:
            report = tango.poll;
            if(!(mike == report)) { _fun86623_ip = 1195; continue _fun86623 }
 821:
            options = tango.type;
            report = _closure1_slot21;
            report = report.POLL_RESULT;
            if(!(options !== report)) { _fun86623_ip = 1025; continue _fun86623 }
 843:
            report = sizing.length;
            verify = 0;
            if(!(verify !== report)) { _fun86623_ip = 980; continue _fun86623 }
 857:
            options = golf.type;
            report = _closure1_slot19;
            report = report.DM;
            if(!(options === report)) { _fun86623_ip = 980; continue _fun86623 }
 876:
            report = offset.bot;
            if(report) { _fun86623_ip = 980; continue _fun86623 }
 885:
            options = sizing.startsWith;
            report = '> -# *';
            report = options.bind(sizing)(report);
            if(!report) { _fun86623_ip = 980; continue _fun86623 }
 905:
            options = _closure1_slot1;
            yankee = _closure1_slot2;
            report = 29;
            report = yankee[report];
            kilo = options.bind(zulu)(report);
            yankee = kilo.unparse;
            options = golf.id;
            report = true;
            yankee = yankee.bind(kilo)(sizing, options, report);
            options = yankee.substring;
            report = 1;
            options = options.bind(yankee)(verify, report);
            verify = yankee.substring;
            report = 4;
            report = verify.bind(yankee)(report);
            report = options + report;
            _fun86623_ip = 1020; continue _fun86623;
 980:
            verify = _closure1_slot1;
            yankee = _closure1_slot2;
            options = 29;
            options = yankee[options];
            kilo = verify.bind(zulu)(options);
            yankee = kilo.unparse;
            verify = golf.id;
            options = true;
            report = yankee.bind(kilo)(sizing, verify, options);
 1020:
            _fun86623_ip = 1956; continue _fun86623;
 1025:
            yankee = tango.embeds;
            verify = mike == yankee;
            options = undefined;
            if(verify) { _fun86623_ip = 1089; continue _fun86623 }
 1040:
            verify = 0;
            verify = yankee[verify];
            yankee = mike == verify;
            options = undefined;
            if(yankee) { _fun86623_ip = 1089; continue _fun86623 }
 1055:
            kilo = verify.fields;
            verify = mike == kilo;
            options = undefined;
            if(verify) { _fun86623_ip = 1089; continue _fun86623 }
 1070:
            yankee = kilo.find;
            verify = function(argFoo) {
                _fun86624: for(var _fun86624_ip = 0; ; ) switch(_fun86624_ip) {
 0:
                    entity = argFoo;
                    mike = 'name';
                    mike = mike in entity;
                    if(mike) { _fun86624_ip = 22; continue _fun86624 }
 14:
                    mike = entity.rawName;
                    _fun86624_ip = 27; continue _fun86624;
 22:
                    mike = entity.name;
 27:
                    entity = 'poll_question_text';
                    entity = entity === mike;
                    return entity;
                }
            };
            options = yankee.bind(kilo)(verify);
 1089:
            mike = mike != options;
            kilo = '';
            if(!mike) { _fun86623_ip = 1127; continue _fun86623 }
 1100:
            mike = 'value';
            mike = mike in options;
            if(mike) { _fun86623_ip = 1119; continue _fun86623 }
 1111:
            mike = options.rawValue;
            _fun86623_ip = 1124; continue _fun86623;
 1119:
            mike = options.value;
 1124:
            kilo = mike;
 1127:
            options = _closure1_slot0;
            sizing = _closure1_slot2;
            mike = 21;
            verify = sizing[mike];
            verify = options.bind(zulu)(verify);
            yankee = verify.intl;
            verify = yankee.formatToPlainString;
            mike = sizing[mike];
            mike = options.bind(zulu)(mike);
            mike = mike.t;
            options = mike.9WrecH;
            mike = {};
            mike['question'] = kilo;
            report = verify.bind(yankee)(options, mike);
            _fun86623_ip = 1956; continue _fun86623;
 1195:
            options = _closure1_slot0;
            kilo = _closure1_slot2;
            mike = 21;
            verify = kilo[mike];
            verify = options.bind(zulu)(verify);
            yankee = verify.intl;
            verify = yankee.formatToPlainString;
            mike = kilo[mike];
            mike = options.bind(zulu)(mike);
            mike = mike.t;
            options = mike.ImizdH;
            mike = {};
            kilo = tango.poll;
            kilo = kilo.question;
            kilo = kilo.text;
            mike['question'] = kilo;
            report = verify.bind(yankee)(options, mike);
            _fun86623_ip = 1956; continue _fun86623;
 1280:
            options = _closure1_slot0;
            output = _closure1_slot2;
            mike = 21;
            verify = output[mike];
            verify = options.bind(zulu)(verify);
            yankee = verify.intl;
            verify = yankee.formatToPlainString;
            mike = output[mike];
            mike = options.bind(zulu)(mike);
            mike = mike.t;
            options = mike.lieTqa;
            mike = {};
            sizing = _closure1_slot1;
            kilo = 28;
            kilo = output[kilo];
            sizing = sizing.bind(zulu)(kilo);
            kilo = sizing.getName;
            kilo = kilo.bind(sizing)(offset);
            mike['username'] = kilo;
            report = verify.bind(yankee)(options, mike);
            _fun86623_ip = 1956; continue _fun86623;
 1374:
            options = _closure1_slot0;
            kilo = _closure1_slot2;
            mike = 21;
            verify = kilo[mike];
            verify = options.bind(zulu)(verify);
            yankee = verify.intl;
            verify = yankee.formatToPlainString;
            mike = kilo[mike];
            mike = options.bind(zulu)(mike);
            mike = mike.t;
            options = mike.zY4v1N;
            mike = {};
            romeo = backup[romeo];
            romeo = romeo.name;
            mike['stickerName'] = romeo;
            report = verify.bind(yankee)(options, mike);
            _fun86623_ip = 1956; continue _fun86623;
 1451:
            kilo = _closure1_slot28;
            options = _closure1_slot0;
            verify = _closure1_slot2;
            mike = 21;
            yankee = verify[mike];
            yankee = options.bind(zulu)(yankee);
            yankee = yankee.t;
            control = yankee.SaDdmJ;
            yankee = verify[mike];
            yankee = options.bind(zulu)(yankee);
            yankee = yankee.t;
            source = yankee.qsODho;
            yankee = verify[mike];
            yankee = options.bind(zulu)(yankee);
            yankee = yankee.t;
            update = yankee.WeiMTU;
            sequence = undefined;
            vacuum = golf;
            yankee = sequence[kilo](vacuum, control, source, update, echo);
            mike = verify[mike];
            mike = options.bind(zulu)(mike);
            verify = mike.intl;
            options = verify.formatToPlainString;
            mike = {};
            mike['user'] = foxtrot;
            report = options.bind(verify)(yankee, mike);
            _fun86623_ip = 1956; continue _fun86623;
 1571:
            mike = tango.activity;
            options = mike.type;
            mike = _closure1_slot18;
            mike = mike.JOIN;
            if(!(options !== mike)) { _fun86623_ip = 1766; continue _fun86623 }
 1599:
            mike = tango.activity;
            verify = mike.type;
            mike = _closure1_slot18;
            options = mike.JOIN_REQUEST;
            mike = '';
            if(!(verify === options)) { _fun86623_ip = 1761; continue _fun86623 }
 1631:
            sizing = _closure1_slot0;
            output = _closure1_slot2;
            options = 21;
            verify = output[options];
            verify = sizing.bind(zulu)(verify);
            romeo = verify.intl;
            yankee = romeo.formatToPlainString;
            kilo = _closure1_slot28;
            verify = output[options];
            verify = sizing.bind(zulu)(verify);
            verify = verify.t;
            control = verify./TD0lZ;
            verify = output[options];
            verify = sizing.bind(zulu)(verify);
            verify = verify.t;
            source = verify./TD0lZ;
            options = output[options];
            options = sizing.bind(zulu)(options);
            options = options.t;
            update = options./TD0lZ;
            sequence = undefined;
            vacuum = golf;
            verify = sequence[kilo](vacuum, control, source, update, echo);
            options = {};
            options['user'] = foxtrot;
            backup = tango.application;
            backup = backup.name;
            options['game'] = backup;
            mike = yankee.bind(romeo)(verify, options);
 1761:
            _fun86623_ip = 1896; continue _fun86623;
 1766:
            sizing = _closure1_slot0;
            output = _closure1_slot2;
            options = 21;
            verify = output[options];
            verify = sizing.bind(zulu)(verify);
            romeo = verify.intl;
            yankee = romeo.formatToPlainString;
            kilo = _closure1_slot28;
            verify = output[options];
            verify = sizing.bind(zulu)(verify);
            verify = verify.t;
            control = verify.E8CgCg;
            verify = output[options];
            verify = sizing.bind(zulu)(verify);
            verify = verify.t;
            source = verify.c6KHWF;
            options = output[options];
            options = sizing.bind(zulu)(options);
            options = options.t;
            update = options.Fy7rJC;
            sequence = undefined;
            vacuum = golf;
            verify = sequence[kilo](vacuum, control, source, update, echo);
            options = {};
            options['user'] = foxtrot;
            foxtrot = tango.application;
            foxtrot = foxtrot.name;
            options['game'] = foxtrot;
            mike = yankee.bind(romeo)(verify, options);
 1896:
            report = mike;
            _fun86623_ip = 1956; continue _fun86623;
 1901:
            yankee = _closure1_slot0;
            romeo = _closure1_slot2;
            mike = 21;
            options = romeo[mike];
            options = yankee.bind(zulu)(options);
            verify = options.intl;
            options = verify.string;
            mike = romeo[mike];
            mike = yankee.bind(zulu)(mike);
            mike = mike.t;
            mike = mike.9ddYKi;
            report = options.bind(verify)(mike);
 1956:
            mike = report.length;
            yankee = 0;
            if(!(yankee === mike)) { _fun86623_ip = 2499; continue _fun86623 }
 1970:
            mike = tango.embeds;
            if(!(zulu !== mike)) { _fun86623_ip = 2100; continue _fun86623 }
 1980:
            mike = tango.embeds;
            mike = mike.length;
            if(!(mike > yankee)) { _fun86623_ip = 2100; continue _fun86623 }
 1995:
            mike = tango.embeds;
            options = mike[yankee];
            mike = 'description';
            mike = mike in options;
            if(mike) { _fun86623_ip = 2024; continue _fun86623 }
 2016:
            backup = options.rawDescription;
            _fun86623_ip = 2029; continue _fun86623;
 2024:
            backup = options.description;
 2029:
            mike = 'title';
            mike = mike in options;
            if(mike) { _fun86623_ip = 2048; continue _fun86623 }
 2040:
            foxtrot = options.rawTitle;
            _fun86623_ip = 2053; continue _fun86623;
 2048:
            foxtrot = options.title;
 2053:
            verify = null;
            if(!(verify == backup)) { _fun86623_ip = 2458; continue _fun86623 }
 2062:
            mike = foxtrot;
            if(!(verify == mike)) { _fun86623_ip = 2496; continue _fun86623 }
 2072:
            romeo = options.fields;
            if(!(verify != romeo)) { _fun86623_ip = 2100; continue _fun86623 }
 2082:
            romeo = options.fields;
            romeo = romeo.length;
            if(!(!(romeo > yankee))) { _fun86623_ip = 2370; continue _fun86623 }
 2100:
            kilo = _closure1_slot0;
            sizing = _closure1_slot2;
            romeo = 17;
            romeo = sizing[romeo];
            output = kilo.bind(zulu)(romeo);
            sizing = output.hasFlag;
            romeo = tango.flags;
            kilo = null;
            result = kilo != romeo;
            kilo = 0;
            if(!result) { _fun86623_ip = 2145; continue _fun86623 }
 2142:
            kilo = romeo;
 2145:
            romeo = _closure1_slot20;
            romeo = romeo.IS_VOICE_MESSAGE;
            romeo = sizing.bind(output)(kilo, romeo);
            if(romeo) { _fun86623_ip = 2310; continue _fun86623 }
 2167:
            romeo = tango.attachments;
            kilo = '';
            mike = kilo;
            if(!(zulu !== romeo)) { _fun86623_ip = 2496; continue _fun86623 }
 2187:
            romeo = tango.attachments;
            romeo = romeo.length;
            romeo = romeo > yankee;
            mike = kilo;
            if(!romeo) { _fun86623_ip = 2496; continue _fun86623 }
 2211:
            kilo = _closure1_slot1;
            echo = _closure1_slot2;
            romeo = 22;
            romeo = echo[romeo];
            kilo = kilo.bind(zulu)(romeo);
            romeo = tango.attachments;
            romeo = romeo[yankee];
            result = kilo.bind(zulu)(romeo);
            kilo = _closure1_slot0;
            romeo = 21;
            sizing = echo[romeo];
            sizing = kilo.bind(zulu)(sizing);
            output = sizing.intl;
            sizing = output.formatToPlainString;
            romeo = echo[romeo];
            romeo = kilo.bind(zulu)(romeo);
            romeo = romeo.t;
            kilo = romeo.51OkwM;
            romeo = {};
            romeo['filename'] = result;
            mike = sizing.bind(output)(kilo, romeo);
            _fun86623_ip = 2496; continue _fun86623;
 2310:
            output = _closure1_slot0;
            result = _closure1_slot2;
            romeo = 21;
            kilo = result[romeo];
            kilo = output.bind(zulu)(kilo);
            sizing = kilo.intl;
            kilo = sizing.string;
            romeo = result[romeo];
            romeo = output.bind(zulu)(romeo);
            romeo = romeo.t;
            romeo = romeo.slFYgo;
            mike = kilo.bind(sizing)(romeo);
            _fun86623_ip = 2496; continue _fun86623;
 2370:
            options = options.fields;
            options = options[yankee];
            yankee = 'name';
            yankee = yankee in options;
            if(yankee) { _fun86623_ip = 2399; continue _fun86623 }
 2391:
            sizing = options.rawName;
            _fun86623_ip = 2404; continue _fun86623;
 2399:
            sizing = options.name;
 2404:
            yankee = 'value';
            yankee = yankee in options;
            if(yankee) { _fun86623_ip = 2423; continue _fun86623 }
 2415:
            kilo = options.rawValue;
            _fun86623_ip = 2428; continue _fun86623;
 2423:
            kilo = options.value;
 2428:
            options = global;
            options = options.HermesInternal;
            romeo = options.concat;
            yankee = '';
            options = ' ';
            mike = romeo.bind(yankee)(sizing, options, kilo);
            _fun86623_ip = 2496; continue _fun86623;
 2458:
            options = backup;
            if(!(verify != foxtrot)) { _fun86623_ip = 2493; continue _fun86623 }
 2465:
            verify = global;
            verify = verify.HermesInternal;
            romeo = verify.concat;
            yankee = '';
            verify = ' ';
            options = romeo.bind(yankee)(foxtrot, verify, backup);
 2493:
            mike = options;
 2496:
            report = mike;
 2499:
            mike = {};
            verify = offset.getAvatarURL;
            options = golf.guild_id;
            golf = 128;
            golf = verify.bind(offset)(options, golf);
            mike['icon'] = golf;
            mike['title'] = oscar;
            mike['body'] = report;
            return mike;
 2535:
            mike = _closure1_slot1;
            report = _closure1_slot2;
            entity = 26;
            entity = report[entity];
            zulu = mike.bind(zulu)(entity);
            entity = zulu.prototype;
            mike = Object.create(entity, {constructor: {value: zulu}});
            vacuum = 'NotificationTextUtils';
            sequence = mike;
            entity = new sequence[zulu](vacuum, control);
            zulu = entity instanceof Object ? entity : mike;
            mike = zulu.warn;
            entity = 'SystemMessageUtils.stringify(...) could not convert';
            entity = mike.bind(zulu)(entity, tango);
            entity = global;
            zulu = entity.Error;
            entity = zulu.prototype;
            mike = Object.create(entity, {constructor: {value: zulu}});
            vacuum = 'failed to stringify system message';
            sequence = mike;
            entity = new sequence[zulu](vacuum, control);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        }
    };
    zulu['makeTextChatNotification'] = tango;
    tango = function() { // Original name: allowInAppNotifications
        _fun86625: for(var _fun86625_ip = 0; ; ) switch(_fun86625_ip) {
 0:
            tango = _closure1_slot0;
            report = _closure1_slot2;
            entity = 16;
            entity = report[entity];
            zulu = undefined;
            entity = tango.bind(zulu)(entity);
            mike = entity.ShowInAppNotifications;
            entity = mike.getSetting;
            entity = entity.bind(mike)();
            mike = 30;
            mike = report[mike];
            zulu = tango.bind(zulu)(mike);
            mike = zulu.getFocusModeEnabled;
            mike = mike.bind(zulu)();
            if(!entity) { _fun86625_ip = 69; continue _fun86625 }
 66:
            entity = !mike;
 69:
            return entity;
        }
    };
    zulu['allowInAppNotifications'] = tango;
    mike = function() { // Original name: useAllowInAppNotifications
        _fun86626: for(var _fun86626_ip = 0; ; ) switch(_fun86626_ip) {
 0:
            tango = _closure1_slot0;
            report = _closure1_slot2;
            entity = 16;
            entity = report[entity];
            zulu = undefined;
            entity = tango.bind(zulu)(entity);
            mike = entity.ShowInAppNotifications;
            entity = mike.useSetting;
            entity = entity.bind(mike)();
            mike = 30;
            mike = report[mike];
            zulu = tango.bind(zulu)(mike);
            mike = zulu.useFocusModeEnabled;
            mike = mike.bind(zulu)();
            if(!entity) { _fun86626_ip = 69; continue _fun86626 }
 66:
            entity = !mike;
 69:
            return entity;
        }
    };
    zulu['useAllowInAppNotifications'] = mike;
    return entity;
})();