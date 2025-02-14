// app/modules/messages/isNewMessageGroup.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    tango = function(argFoo, argBar, argBaz) { // Original name: isNewMessageGroup
        _fun90011: for(var _fun90011_ip = 0; ; ) switch(_fun90011_ip) {
 0:
            entity = argFoo;
            report = argBar;
            zulu = argBaz;
            oscar = zulu.hasFlag;
            tango = _closure1_slot5;
            tango = tango.HAS_THREAD;
            tango = oscar.bind(zulu)(tango);
            if(tango) { _fun90011_ip = 713; continue _fun90011 }
 39:
            tango = zulu.isCommandType;
            tango = tango.bind(zulu)();
            if(tango) { _fun90011_ip = 713; continue _fun90011 }
 55:
            oscar = zulu.type;
            tango = _closure1_slot3;
            tango = tango.DEFAULT;
            if(!(!(oscar > tango))) { _fun90011_ip = 659; continue _fun90011 }
 77:
            golf = _closure1_slot1;
            oscar = _closure1_slot2;
            tango = 2;
            tango = oscar[tango];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            tango = tango.bind(oscar)(report);
            if(tango) { _fun90011_ip = 655; continue _fun90011 }
 110:
            tango = report.author;
            golf = tango.id;
            tango = zulu.author;
            tango = tango.id;
            if(!(golf === tango)) { _fun90011_ip = 651; continue _fun90011 }
 139:
            golf = report.hasFlag;
            tango = _closure1_slot5;
            tango = tango.EPHEMERAL;
            golf = golf.bind(report)(tango);
            options = zulu.hasFlag;
            tango = _closure1_slot5;
            tango = tango.EPHEMERAL;
            tango = options.bind(zulu)(tango);
            if(!(golf === tango)) { _fun90011_ip = 647; continue _fun90011 }
 188:
            golf = zulu.webhookId;
            tango = null;
            if(!(tango != golf)) { _fun90011_ip = 229; continue _fun90011 }
 200:
            golf = report.author;
            options = golf.username;
            golf = zulu.author;
            golf = golf.username;
            if(!(options === golf)) { _fun90011_ip = 643; continue _fun90011 }
 229:
            if(!(tango != entity)) { _fun90011_ip = 294; continue _fun90011 }
 233:
            tango = entity.isForumPost;
            tango = tango.bind(entity)();
            if(!tango) { _fun90011_ip = 294; continue _fun90011 }
 246:
            tango = report.id;
            options = _closure1_slot1;
            verify = _closure1_slot2;
            golf = 3;
            golf = verify[golf];
            options = options.bind(oscar)(golf);
            golf = options.castChannelIdAsMessageId;
            entity = entity.id;
            entity = golf.bind(options)(entity);
            if(!(tango !== entity)) { _fun90011_ip = 639; continue _fun90011 }
 294:
            tango = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 4;
            entity = golf[entity];
            verify = tango.bind(oscar)(entity);
            options = verify.isWithinInterval;
            golf = report.timestamp;
            tango = zulu.timestamp;
            entity = _closure1_slot6;
            entity = options.bind(verify)(golf, tango, entity);
            if(entity) { _fun90011_ip = 350; continue _fun90011 }
 346:
            entity = true;
            return entity;
 350:
            tango = zulu.hasFlag;
            entity = _closure1_slot5;
            entity = entity.SUPPRESS_NOTIFICATIONS;
            entity = tango.bind(zulu)(entity);
            if(!entity) { _fun90011_ip = 402; continue _fun90011 }
 374:
            tango = report.hasFlag;
            entity = _closure1_slot5;
            entity = entity.SUPPRESS_NOTIFICATIONS;
            entity = tango.bind(report)(entity);
            if(entity) { _fun90011_ip = 402; continue _fun90011 }
 398:
            entity = true;
            return entity;
 402:
            tango = report.hasFlag;
            entity = _closure1_slot5;
            entity = entity.SUPPRESS_NOTIFICATIONS;
            entity = tango.bind(report)(entity);
            if(!entity) { _fun90011_ip = 495; continue _fun90011 }
 426:
            tango = zulu.hasFlag;
            entity = _closure1_slot5;
            entity = entity.SUPPRESS_NOTIFICATIONS;
            entity = tango.bind(zulu)(entity);
            if(entity) { _fun90011_ip = 495; continue _fun90011 }
 450:
            entity = zulu.mentions;
            entity = entity.length;
            tango = 0;
            if(!(!(entity > tango))) { _fun90011_ip = 491; continue _fun90011 }
 467:
            entity = zulu.mentionRoles;
            entity = entity.length;
            if(!(!(entity > tango))) { _fun90011_ip = 491; continue _fun90011 }
 482:
            entity = zulu.mentionEveryone;
            if(!entity) { _fun90011_ip = 495; continue _fun90011 }
 491:
            entity = true;
            return entity;
 495:
            tango = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 5;
            entity = golf[entity];
            tango = tango.bind(oscar)(entity);
            entity = tango.isRemix;
            entity = entity.bind(tango)(zulu);
            if(entity) { _fun90011_ip = 635; continue _fun90011 }
 529:
            tango = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 6;
            entity = golf[entity];
            entity = tango.bind(oscar)(entity);
            golf = entity.ConfettiPotionExperiment;
            oscar = golf.getCurrentConfig;
            tango = {};
            entity = 'isNewMessageGroup';
            tango['location'] = entity;
            entity = {};
            options = false;
            entity['autoTrackExposure'] = options;
            entity = oscar.bind(golf)(tango, entity);
            entity = entity.canSeeConfetti;
            tango = zulu.hasPotions;
            tango = tango.bind(zulu)();
            tango = !tango;
            if(tango) { _fun90011_ip = 613; continue _fun90011 }
 610:
            tango = !entity;
 613:
            entity = !tango;
            if(!tango) { _fun90011_ip = 633; continue _fun90011 }
 619:
            oscar = zulu.applicationId;
            tango = report.applicationId;
            entity = oscar !== tango;
 633:
            return entity;
 635:
            entity = true;
            return entity;
 639:
            entity = true;
            return entity;
 643:
            entity = true;
            return entity;
 647:
            entity = true;
            return entity;
 651:
            entity = true;
            return entity;
 655:
            entity = true;
            return entity;
 659:
            oscar = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 2;
            entity = tango[entity];
            tango = undefined;
            entity = oscar.bind(tango)(entity);
            entity = entity.bind(tango)(report);
            entity = !entity;
            if(entity) { _fun90011_ip = 711; continue _fun90011 }
 692:
            zulu = zulu.type;
            mike = _closure1_slot3;
            mike = mike.REPLY;
            entity = zulu === mike;
 711:
            return entity;
 713:
            entity = true;
            return entity;
        }
    };
    var _closure1_slot7 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = oscar.bind(entity)(report);
    verify = report.MessageTypes;
    var _closure1_slot3 = verify;
    verify = report.ChannelStreamTypes;
    var _closure1_slot4 = verify;
    report = report.MessageFlags;
    var _closure1_slot5 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    report = report.Millis;
    options = report.MINUTE;
    report = 7;
    options = report * options;
    var _closure1_slot6 = options;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/messages/isNewMessageGroup.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    mike = function(argFoo, argBar, argBaz) { // Original name: isNewGroupItem
        _fun90012: for(var _fun90012_ip = 0; ; ) switch(_fun90012_ip) {
 0:
            tango = argBar;
            entity = null;
            entity = entity == tango;
            if(entity) { _fun90012_ip = 141; continue _fun90012 }
 15:
            zulu = tango.type;
            mike = _closure1_slot4;
            mike = mike.MESSAGE;
            mike = zulu === mike;
            if(!mike) { _fun90012_ip = 64; continue _fun90012 }
 40:
            zulu = tango.content;
            oscar = zulu.id;
            zulu = tango.content;
            zulu = zulu.channel_id;
            mike = oscar === zulu;
 64:
            if(mike) { _fun90012_ip = 138; continue _fun90012 }
 67:
            oscar = tango.type;
            zulu = _closure1_slot4;
            zulu = zulu.MESSAGE;
            zulu = oscar !== zulu;
            if(!zulu) { _fun90012_ip = 108; continue _fun90012 }
 89:
            golf = tango.type;
            oscar = _closure1_slot4;
            oscar = oscar.THREAD_STARTER_MESSAGE;
            zulu = golf !== oscar;
 108:
            if(zulu) { _fun90012_ip = 135; continue _fun90012 }
 111:
            options = _closure1_slot7;
            golf = tango.content;
            oscar = undefined;
            report = argFoo;
            tango = argBaz;
            zulu = options.bind(oscar)(report, golf, tango);
 135:
            mike = zulu;
 138:
            entity = mike;
 141:
            return entity;
        }
    };
    zulu['isNewGroupItem'] = mike;
    return entity;
})();