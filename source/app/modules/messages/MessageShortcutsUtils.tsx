// app/modules/messages/MessageShortcutsUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: isMentioned
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argBar;
            entity = !entity;
            if(!entity) { _fun00002_ip = 18; continue _fun00001 }
 9:
            michal = argFoo;
            entity = michal.mentioned;
 18:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo) { // Original name: hasMosaicAttachment
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        michal = 2;
        zuuluu = zuuluu[michal];
        michal = undefined;
        michal = tangon.bind(michal)(zuuluu);
        zuuluu = michal.InlineAttachmentMedia;
        michal = zuuluu.getSetting;
        michal = michal.bind(zuuluu)();
        var _closure2_slot0 = michal;
        michal = argFoo;
        zuuluu = michal.attachments;
        michal = zuuluu.some;
        entity = function(argFoo) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 3;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.getMosaicMediaTypeForAttachment;
                michal = _closure2_slot0;
                entity = argFoo;
                zuuluu = zuuluu.bind(tangon)(entity, michal);
                entity = 'VIDEO';
                entity = entity === zuuluu;
                if(entity) { _fun00004_ip = 66; continue _fun00003 }
 58:
                michal = 'IMAGE';
                entity = michal === zuuluu;
 66:
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo) { // Original name: hasReacted
        entity = argFoo;
        zuuluu = entity.reactions;
        michal = zuuluu.some;
        entity = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = argFoo;
                entity = michal.me;
                if(entity) { _fun00006_ip = 18; continue _fun00005 }
 12:
                entity = michal.me_burst;
 18:
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo, argBar) { // Original name: hasMinimumReactions
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 4;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.sumBy;
        entity = argFoo;
        michal = entity.reactions;
        entity = function(argFoo) {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = argFoo;
                report = entity.count_details;
                tangon = null;
                entity = tangon == report;
                oscard = undefined;
                if(entity) { _fun00008_ip = 26; continue _fun00007 }
 20:
                oscard = report.burst;
 26:
                golfie = tangon != oscard;
                entity = 0;
                if(!golfie) { _fun00008_ip = 38; continue _fun00007 }
 35:
                entity = oscard;
 38:
                oscard = tangon == report;
                zuuluu = undefined;
                if(oscard) { _fun00008_ip = 53; continue _fun00007 }
 47:
                zuuluu = report.normal;
 53:
                tangon = tangon != zuuluu;
                michal = 0;
                if(!tangon) { _fun00008_ip = 65; continue _fun00007 }
 62:
                michal = zuuluu;
 65:
                entity = entity + michal;
                return entity;
            }
        };
        michal = zuuluu.bind(tangon)(michal, entity);
        entity = argBar;
        entity = michal >= entity;
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: isAnnouncementChannel
        entity = argFoo;
        michal = entity.type;
        entity = _closure1_slot3;
        entity = entity.GUILD_ANNOUNCEMENT;
        entity = michal === entity;
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: checkMessageConditionsForShortcut
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            verify = entity.shortcut;
            report = entity.message;
            michal = entity.ignoreMentioned;
            oscard = entity.channel;
            golfie = _closure1_slot1;
            entity = _closure1_slot2;
            option = 1;
            entity = entity[option];
            tangon = undefined;
            offset = golfie.bind(tangon)(entity);
            golfie = offset.getCurrentConfig;
            entity = {};
            yankee = 'createMessageContent';
            entity['location'] = yankee;
            entity = golfie.bind(offset)(entity);
            golfie = entity.showShortcutsConditions;
            entity = 'none';
            if(!(entity !== golfie)) { _fun00010_ip = 431; continue _fun00009 }
 90:
            entity = _closure1_slot11;
            entity = entity.bind(tangon)(oscard);
            if(!entity) { _fun00010_ip = 123; continue _fun00009 }
 102:
            entity = 'all';
            if(!(entity !== golfie)) { _fun00010_ip = 123; continue _fun00009 }
 110:
            entity = 'only_announcement';
            if(!(entity === golfie)) { _fun00010_ip = 427; continue _fun00009 }
 123:
            entity = _closure1_slot6;
            entity = entity.REPLY;
            if(!(verify === entity)) { _fun00010_ip = 152; continue _fun00009 }
 137:
            entity = _closure1_slot11;
            entity = entity.bind(tangon)(oscard);
            if(entity) { _fun00010_ip = 423; continue _fun00009 }
 152:
            entity = _closure1_slot6;
            entity = entity.THREAD;
            if(!(verify !== entity)) { _fun00010_ip = 358; continue _fun00009 }
 169:
            entity = _closure1_slot6;
            entity = entity.REACT;
            if(!(verify !== entity)) { _fun00010_ip = 187; continue _fun00009 }
 183:
            option = _closure1_slot5;
 187:
            entity = 'all';
            if(!(entity !== golfie)) { _fun00010_ip = 297; continue _fun00009 }
 195:
            entity = 'only_direct';
            if(!(entity !== golfie)) { _fun00010_ip = 285; continue _fun00009 }
 205:
            entity = 'only_attachments';
            if(!(entity !== golfie)) { _fun00010_ip = 274; continue _fun00009 }
 215:
            entity = 'only_reactions';
            if(!(entity !== golfie)) { _fun00010_ip = 250; continue _fun00009 }
 225:
            entity = 'only_announcement';
            if(!(entity !== golfie)) { _fun00010_ip = 239; continue _fun00009 }
 235:
            entity = false;
            return entity;
 239:
            entity = _closure1_slot11;
            entity = entity.bind(tangon)(oscard);
            return entity;
 250:
            entity = _closure1_slot9;
            entity = entity.bind(tangon)(report);
            if(entity) { _fun00010_ip = 272; continue _fun00009 }
 262:
            verify = _closure1_slot10;
            entity = verify.bind(tangon)(report, option);
 272:
            return entity;
 274:
            entity = _closure1_slot8;
            entity = entity.bind(tangon)(report);
            return entity;
 285:
            entity = _closure1_slot7;
            entity = entity.bind(tangon)(report, michal);
            return entity;
 297:
            entity = _closure1_slot7;
            entity = entity.bind(tangon)(report, michal);
            if(entity) { _fun00010_ip = 319; continue _fun00009 }
 310:
            michal = _closure1_slot8;
            entity = michal.bind(tangon)(report);
 319:
            if(entity) { _fun00010_ip = 331; continue _fun00009 }
 322:
            michal = _closure1_slot9;
            entity = michal.bind(tangon)(report);
 331:
            if(entity) { _fun00010_ip = 344; continue _fun00009 }
 334:
            michal = _closure1_slot10;
            entity = michal.bind(tangon)(report, option);
 344:
            if(entity) { _fun00010_ip = 356; continue _fun00009 }
 347:
            michal = _closure1_slot11;
            entity = michal.bind(tangon)(oscard);
 356:
            return entity;
 358:
            entity = 'all';
            entity = entity === golfie;
            if(entity) { _fun00010_ip = 379; continue _fun00009 }
 369:
            michal = 'only_announcement';
            entity = michal === golfie;
 379:
            if(!entity) { _fun00010_ip = 421; continue _fun00009 }
 382:
            michal = _closure1_slot11;
            michal = michal.bind(tangon)(oscard);
            if(!michal) { _fun00010_ip = 418; continue _fun00009 }
 394:
            tangon = report.hasFlag;
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.HAS_THREAD;
            zuuluu = tangon.bind(report)(zuuluu);
            michal = !zuuluu;
 418:
            entity = michal;
 421:
            return entity;
 423:
            entity = false;
            return entity;
 427:
            entity = false;
            return entity;
 431:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    golfie = tangon.ChannelTypes;
    var _closure1_slot3 = golfie;
    tangon = tangon.MessageFlags;
    var _closure1_slot4 = tangon;
    tangon = 5;
    var _closure1_slot5 = tangon;
    tangon = {};
    golfie = 'react';
    tangon['REACT'] = golfie;
    golfie = 'reply';
    tangon['REPLY'] = golfie;
    golfie = 'forward';
    tangon['FORWARD'] = golfie;
    golfie = 'thread';
    tangon['THREAD'] = golfie;
    var _closure1_slot6 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/MessageShortcutsUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: isInMessageShortcutsExperiment
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 1;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.getCurrentConfig;
        entity = {};
        tangon = 'createMessageContent';
        entity['location'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        michal = entity.showShortcutsConditions;
        entity = 'none';
        entity = entity !== michal;
        return entity;
    };
    zuuluu['isInMessageShortcutsExperiment'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: canShowForwardShortcut
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tangon = argFoo;
            report = argBaz;
            entity = null;
            if(!(entity != report)) { _fun00012_ip = 98; continue _fun00011 }
 12:
            zuuluu = _closure1_slot12;
            michal = {};
            oscard = _closure1_slot6;
            oscard = oscard.FORWARD;
            michal['shortcut'] = oscard;
            michal['message'] = tangon;
            oscard = argBar;
            michal['ignoreMentioned'] = oscard;
            michal['channel'] = report;
            report = undefined;
            michal = zuuluu.bind(report)(michal);
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 5;
            entity = oscard[entity];
            zuuluu = zuuluu.bind(report)(entity);
            entity = zuuluu.canForwardMessage;
            entity = entity.bind(zuuluu)(tangon);
            if(!entity) { _fun00012_ip = 96; continue _fun00011 }
 93:
            entity = michal;
 96:
            return entity;
 98:
            entity = false;
            return entity;
        }
    };
    zuuluu['canShowForwardShortcut'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: canShowReplyShortcut
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            report = argFoo;
            tangon = argBaz;
            entity = null;
            if(!(entity != tangon)) { _fun00014_ip = 99; continue _fun00013 }
 12:
            zuuluu = _closure1_slot12;
            michal = {};
            oscard = _closure1_slot6;
            oscard = oscard.REPLY;
            michal['shortcut'] = oscard;
            michal['message'] = report;
            oscard = argBar;
            michal['ignoreMentioned'] = oscard;
            michal['channel'] = tangon;
            oscard = undefined;
            michal = zuuluu.bind(oscard)(michal);
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 6;
            entity = golfie[entity];
            zuuluu = zuuluu.bind(oscard)(entity);
            entity = zuuluu.canReplyToMessage;
            entity = entity.bind(zuuluu)(tangon, report);
            if(!entity) { _fun00014_ip = 97; continue _fun00013 }
 94:
            entity = michal;
 97:
            return entity;
 99:
            entity = false;
            return entity;
        }
    };
    zuuluu['canShowReplyShortcut'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: canShowReactionShortcut
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            tangon = argBaz;
            entity = null;
            if(!(entity != tangon)) { _fun00016_ip = 92; continue _fun00015 }
 9:
            report = _closure1_slot12;
            michal = {};
            zuuluu = _closure1_slot6;
            zuuluu = zuuluu.REACT;
            michal['shortcut'] = zuuluu;
            zuuluu = argFoo;
            michal['message'] = zuuluu;
            zuuluu = argBar;
            michal['ignoreMentioned'] = zuuluu;
            michal['channel'] = tangon;
            zuuluu = undefined;
            michal = report.bind(zuuluu)(michal);
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            entity = 7;
            entity = oscard[entity];
            entity = report.bind(zuuluu)(entity);
            entity = entity.bind(zuuluu)(tangon);
            if(!entity) { _fun00016_ip = 90; continue _fun00015 }
 87:
            entity = michal;
 90:
            return entity;
 92:
            entity = false;
            return entity;
        }
    };
    zuuluu['canShowReactionShortcut'] = tangon;
    michal = function(argFoo, argBar) { // Original name: canShowThreadShortcut
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            oscard = argFoo;
            report = argBar;
            entity = null;
            if(!(entity != report)) { _fun00018_ip = 130; continue _fun00017 }
 12:
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            option = 8;
            entity = entity[option];
            tangon = undefined;
            michal = michal.bind(tangon)(entity);
            entity = michal.computeCanStartPublicThread;
            entity = entity.bind(michal)(report, oscard);
            if(entity) { _fun00018_ip = 81; continue _fun00017 }
 52:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[option];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.computeCanStartPrivateThread;
            entity = michal.bind(zuuluu)(report, oscard);
 81:
            zuuluu = _closure1_slot12;
            michal = {};
            golfie = _closure1_slot6;
            golfie = golfie.THREAD;
            michal['shortcut'] = golfie;
            michal['message'] = oscard;
            oscard = false;
            michal['ignoreMentioned'] = oscard;
            michal['channel'] = report;
            michal = zuuluu.bind(tangon)(michal);
            if(!entity) { _fun00018_ip = 128; continue _fun00017 }
 125:
            entity = michal;
 128:
            return entity;
 130:
            entity = false;
            return entity;
        }
    };
    zuuluu['canShowThreadShortcut'] = michal;
    return entity;
})();