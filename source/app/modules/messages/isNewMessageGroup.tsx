// app/modules/messages/isNewMessageGroup.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    tangon = function(argFoo, argBar, argBaz) { // Original name: isNewMessageGroup
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            report = argBar;
            zuuluu = argBaz;
            oscard = zuuluu.hasFlag;
            tangon = _closure1_slot5;
            tangon = tangon.HAS_THREAD;
            tangon = oscard.bind(zuuluu)(tangon);
            if(tangon) { _fun00002_ip = 713; continue _fun00001 }
 39:
            tangon = zuuluu.isCommandType;
            tangon = tangon.bind(zuuluu)();
            if(tangon) { _fun00002_ip = 713; continue _fun00001 }
 55:
            oscard = zuuluu.type;
            tangon = _closure1_slot3;
            tangon = tangon.DEFAULT;
            if(!(!(oscard > tangon))) { _fun00002_ip = 659; continue _fun00001 }
 77:
            golfie = _closure1_slot1;
            oscard = _closure1_slot2;
            tangon = 2;
            tangon = oscard[tangon];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            tangon = tangon.bind(oscard)(report);
            if(tangon) { _fun00002_ip = 655; continue _fun00001 }
 110:
            tangon = report.author;
            golfie = tangon.id;
            tangon = zuuluu.author;
            tangon = tangon.id;
            if(!(golfie === tangon)) { _fun00002_ip = 651; continue _fun00001 }
 139:
            golfie = report.hasFlag;
            tangon = _closure1_slot5;
            tangon = tangon.EPHEMERAL;
            golfie = golfie.bind(report)(tangon);
            option = zuuluu.hasFlag;
            tangon = _closure1_slot5;
            tangon = tangon.EPHEMERAL;
            tangon = option.bind(zuuluu)(tangon);
            if(!(golfie === tangon)) { _fun00002_ip = 647; continue _fun00001 }
 188:
            golfie = zuuluu.webhookId;
            tangon = null;
            if(!(tangon != golfie)) { _fun00002_ip = 229; continue _fun00001 }
 200:
            golfie = report.author;
            option = golfie.username;
            golfie = zuuluu.author;
            golfie = golfie.username;
            if(!(option === golfie)) { _fun00002_ip = 643; continue _fun00001 }
 229:
            if(!(tangon != entity)) { _fun00002_ip = 294; continue _fun00001 }
 233:
            tangon = entity.isForumPost;
            tangon = tangon.bind(entity)();
            if(!tangon) { _fun00002_ip = 294; continue _fun00001 }
 246:
            tangon = report.id;
            option = _closure1_slot1;
            verify = _closure1_slot2;
            golfie = 3;
            golfie = verify[golfie];
            option = option.bind(oscard)(golfie);
            golfie = option.castChannelIdAsMessageId;
            entity = entity.id;
            entity = golfie.bind(option)(entity);
            if(!(tangon !== entity)) { _fun00002_ip = 639; continue _fun00001 }
 294:
            tangon = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 4;
            entity = golfie[entity];
            verify = tangon.bind(oscard)(entity);
            option = verify.isWithinInterval;
            golfie = report.timestamp;
            tangon = zuuluu.timestamp;
            entity = _closure1_slot6;
            entity = option.bind(verify)(golfie, tangon, entity);
            if(entity) { _fun00002_ip = 350; continue _fun00001 }
 346:
            entity = true;
            return entity;
 350:
            tangon = zuuluu.hasFlag;
            entity = _closure1_slot5;
            entity = entity.SUPPRESS_NOTIFICATIONS;
            entity = tangon.bind(zuuluu)(entity);
            if(!entity) { _fun00002_ip = 402; continue _fun00001 }
 374:
            tangon = report.hasFlag;
            entity = _closure1_slot5;
            entity = entity.SUPPRESS_NOTIFICATIONS;
            entity = tangon.bind(report)(entity);
            if(entity) { _fun00002_ip = 402; continue _fun00001 }
 398:
            entity = true;
            return entity;
 402:
            tangon = report.hasFlag;
            entity = _closure1_slot5;
            entity = entity.SUPPRESS_NOTIFICATIONS;
            entity = tangon.bind(report)(entity);
            if(!entity) { _fun00002_ip = 495; continue _fun00001 }
 426:
            tangon = zuuluu.hasFlag;
            entity = _closure1_slot5;
            entity = entity.SUPPRESS_NOTIFICATIONS;
            entity = tangon.bind(zuuluu)(entity);
            if(entity) { _fun00002_ip = 495; continue _fun00001 }
 450:
            entity = zuuluu.mentions;
            entity = entity.length;
            tangon = 0;
            if(!(!(entity > tangon))) { _fun00002_ip = 491; continue _fun00001 }
 467:
            entity = zuuluu.mentionRoles;
            entity = entity.length;
            if(!(!(entity > tangon))) { _fun00002_ip = 491; continue _fun00001 }
 482:
            entity = zuuluu.mentionEveryone;
            if(!entity) { _fun00002_ip = 495; continue _fun00001 }
 491:
            entity = true;
            return entity;
 495:
            tangon = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 5;
            entity = golfie[entity];
            tangon = tangon.bind(oscard)(entity);
            entity = tangon.isRemix;
            entity = entity.bind(tangon)(zuuluu);
            if(entity) { _fun00002_ip = 635; continue _fun00001 }
 529:
            tangon = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 6;
            entity = golfie[entity];
            entity = tangon.bind(oscard)(entity);
            golfie = entity.ConfettiPotionExperiment;
            oscard = golfie.getCurrentConfig;
            tangon = {};
            entity = 'isNewMessageGroup';
            tangon['location'] = entity;
            entity = {};
            option = false;
            entity['autoTrackExposure'] = option;
            entity = oscard.bind(golfie)(tangon, entity);
            entity = entity.canSeeConfetti;
            tangon = zuuluu.hasPotions;
            tangon = tangon.bind(zuuluu)();
            tangon = !tangon;
            if(tangon) { _fun00002_ip = 613; continue _fun00001 }
 610:
            tangon = !entity;
 613:
            entity = !tangon;
            if(!tangon) { _fun00002_ip = 633; continue _fun00001 }
 619:
            oscard = zuuluu.applicationId;
            tangon = report.applicationId;
            entity = oscard !== tangon;
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
            oscard = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 2;
            entity = tangon[entity];
            tangon = undefined;
            entity = oscard.bind(tangon)(entity);
            entity = entity.bind(tangon)(report);
            entity = !entity;
            if(entity) { _fun00002_ip = 711; continue _fun00001 }
 692:
            zuuluu = zuuluu.type;
            michal = _closure1_slot3;
            michal = michal.REPLY;
            entity = zuuluu === michal;
 711:
            return entity;
 713:
            entity = true;
            return entity;
        }
    };
    var _closure1_slot7 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = oscard.bind(entity)(report);
    verify = report.MessageTypes;
    var _closure1_slot3 = verify;
    verify = report.ChannelStreamTypes;
    var _closure1_slot4 = verify;
    report = report.MessageFlags;
    var _closure1_slot5 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    report = report.Millis;
    option = report.MINUTE;
    report = 7;
    option = report * option;
    var _closure1_slot6 = option;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/messages/isNewMessageGroup.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    michal = function(argFoo, argBar, argBaz) { // Original name: isNewGroupItem
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argBar;
            entity = null;
            entity = entity == tangon;
            if(entity) { _fun00004_ip = 141; continue _fun00003 }
 15:
            zuuluu = tangon.type;
            michal = _closure1_slot4;
            michal = michal.MESSAGE;
            michal = zuuluu === michal;
            if(!michal) { _fun00004_ip = 64; continue _fun00003 }
 40:
            zuuluu = tangon.content;
            oscard = zuuluu.id;
            zuuluu = tangon.content;
            zuuluu = zuuluu.channel_id;
            michal = oscard === zuuluu;
 64:
            if(michal) { _fun00004_ip = 138; continue _fun00003 }
 67:
            oscard = tangon.type;
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.MESSAGE;
            zuuluu = oscard !== zuuluu;
            if(!zuuluu) { _fun00004_ip = 108; continue _fun00003 }
 89:
            golfie = tangon.type;
            oscard = _closure1_slot4;
            oscard = oscard.THREAD_STARTER_MESSAGE;
            zuuluu = golfie !== oscard;
 108:
            if(zuuluu) { _fun00004_ip = 135; continue _fun00003 }
 111:
            option = _closure1_slot7;
            golfie = tangon.content;
            oscard = undefined;
            report = argFoo;
            tangon = argBaz;
            zuuluu = option.bind(oscard)(report, golfie, tangon);
 135:
            michal = zuuluu;
 138:
            entity = michal;
 141:
            return entity;
        }
    };
    zuuluu['isNewGroupItem'] = michal;
    return entity;
})();