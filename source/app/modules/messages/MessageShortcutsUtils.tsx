// app/modules/messages/MessageShortcutsUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: isMentioned
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argBar;
            entity = !entity;
            if(!entity) { _fun00002_ip = 18; continue _fun00001 }
 9:
            mike = argFoo;
            entity = mike.mentioned;
 18:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo) { // Original name: hasMosaicAttachment
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        mike = 2;
        zulu = zulu[mike];
        mike = undefined;
        mike = tango.bind(mike)(zulu);
        zulu = mike.InlineAttachmentMedia;
        mike = zulu.getSetting;
        mike = mike.bind(zulu)();
        var _closure2_slot0 = mike;
        mike = argFoo;
        zulu = mike.attachments;
        mike = zulu.some;
        entity = function(argFoo) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 3;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.getMosaicMediaTypeForAttachment;
                mike = _closure2_slot0;
                entity = argFoo;
                zulu = zulu.bind(tango)(entity, mike);
                entity = 'VIDEO';
                entity = entity === zulu;
                if(entity) { _fun00004_ip = 66; continue _fun00003 }
 58:
                mike = 'IMAGE';
                entity = mike === zulu;
 66:
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo) { // Original name: hasReacted
        entity = argFoo;
        zulu = entity.reactions;
        mike = zulu.some;
        entity = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                mike = argFoo;
                entity = mike.me;
                if(entity) { _fun00006_ip = 18; continue _fun00005 }
 12:
                entity = mike.me_burst;
 18:
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo, argBar) { // Original name: hasMinimumReactions
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.sumBy;
        entity = argFoo;
        mike = entity.reactions;
        entity = function(argFoo) {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = argFoo;
                report = entity.count_details;
                tango = null;
                entity = tango == report;
                oscar = undefined;
                if(entity) { _fun00008_ip = 26; continue _fun00007 }
 20:
                oscar = report.burst;
 26:
                golf = tango != oscar;
                entity = 0;
                if(!golf) { _fun00008_ip = 38; continue _fun00007 }
 35:
                entity = oscar;
 38:
                oscar = tango == report;
                zulu = undefined;
                if(oscar) { _fun00008_ip = 53; continue _fun00007 }
 47:
                zulu = report.normal;
 53:
                tango = tango != zulu;
                mike = 0;
                if(!tango) { _fun00008_ip = 65; continue _fun00007 }
 62:
                mike = zulu;
 65:
                entity = entity + mike;
                return entity;
            }
        };
        mike = zulu.bind(tango)(mike, entity);
        entity = argBar;
        entity = mike >= entity;
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: isAnnouncementChannel
        entity = argFoo;
        mike = entity.type;
        entity = _closure1_slot3;
        entity = entity.GUILD_ANNOUNCEMENT;
        entity = mike === entity;
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: checkMessageConditionsForShortcut
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            verify = entity.shortcut;
            report = entity.message;
            mike = entity.ignoreMentioned;
            oscar = entity.channel;
            golf = _closure1_slot1;
            entity = _closure1_slot2;
            options = 1;
            entity = entity[options];
            tango = undefined;
            offset = golf.bind(tango)(entity);
            golf = offset.getCurrentConfig;
            entity = {};
            yankee = 'createMessageContent';
            entity['location'] = yankee;
            entity = golf.bind(offset)(entity);
            golf = entity.showShortcutsConditions;
            entity = 'none';
            if(!(entity !== golf)) { _fun00010_ip = 431; continue _fun00009 }
 90:
            entity = _closure1_slot11;
            entity = entity.bind(tango)(oscar);
            if(!entity) { _fun00010_ip = 123; continue _fun00009 }
 102:
            entity = 'all';
            if(!(entity !== golf)) { _fun00010_ip = 123; continue _fun00009 }
 110:
            entity = 'only_announcement';
            if(!(entity === golf)) { _fun00010_ip = 427; continue _fun00009 }
 123:
            entity = _closure1_slot6;
            entity = entity.REPLY;
            if(!(verify === entity)) { _fun00010_ip = 152; continue _fun00009 }
 137:
            entity = _closure1_slot11;
            entity = entity.bind(tango)(oscar);
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
            options = _closure1_slot5;
 187:
            entity = 'all';
            if(!(entity !== golf)) { _fun00010_ip = 297; continue _fun00009 }
 195:
            entity = 'only_direct';
            if(!(entity !== golf)) { _fun00010_ip = 285; continue _fun00009 }
 205:
            entity = 'only_attachments';
            if(!(entity !== golf)) { _fun00010_ip = 274; continue _fun00009 }
 215:
            entity = 'only_reactions';
            if(!(entity !== golf)) { _fun00010_ip = 250; continue _fun00009 }
 225:
            entity = 'only_announcement';
            if(!(entity !== golf)) { _fun00010_ip = 239; continue _fun00009 }
 235:
            entity = false;
            return entity;
 239:
            entity = _closure1_slot11;
            entity = entity.bind(tango)(oscar);
            return entity;
 250:
            entity = _closure1_slot9;
            entity = entity.bind(tango)(report);
            if(entity) { _fun00010_ip = 272; continue _fun00009 }
 262:
            verify = _closure1_slot10;
            entity = verify.bind(tango)(report, options);
 272:
            return entity;
 274:
            entity = _closure1_slot8;
            entity = entity.bind(tango)(report);
            return entity;
 285:
            entity = _closure1_slot7;
            entity = entity.bind(tango)(report, mike);
            return entity;
 297:
            entity = _closure1_slot7;
            entity = entity.bind(tango)(report, mike);
            if(entity) { _fun00010_ip = 319; continue _fun00009 }
 310:
            mike = _closure1_slot8;
            entity = mike.bind(tango)(report);
 319:
            if(entity) { _fun00010_ip = 331; continue _fun00009 }
 322:
            mike = _closure1_slot9;
            entity = mike.bind(tango)(report);
 331:
            if(entity) { _fun00010_ip = 344; continue _fun00009 }
 334:
            mike = _closure1_slot10;
            entity = mike.bind(tango)(report, options);
 344:
            if(entity) { _fun00010_ip = 356; continue _fun00009 }
 347:
            mike = _closure1_slot11;
            entity = mike.bind(tango)(oscar);
 356:
            return entity;
 358:
            entity = 'all';
            entity = entity === golf;
            if(entity) { _fun00010_ip = 379; continue _fun00009 }
 369:
            mike = 'only_announcement';
            entity = mike === golf;
 379:
            if(!entity) { _fun00010_ip = 421; continue _fun00009 }
 382:
            mike = _closure1_slot11;
            mike = mike.bind(tango)(oscar);
            if(!mike) { _fun00010_ip = 418; continue _fun00009 }
 394:
            tango = report.hasFlag;
            zulu = _closure1_slot4;
            zulu = zulu.HAS_THREAD;
            zulu = tango.bind(report)(zulu);
            mike = !zulu;
 418:
            entity = mike;
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
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    golf = tango.ChannelTypes;
    var _closure1_slot3 = golf;
    tango = tango.MessageFlags;
    var _closure1_slot4 = tango;
    tango = 5;
    var _closure1_slot5 = tango;
    tango = {};
    golf = 'react';
    tango['REACT'] = golf;
    golf = 'reply';
    tango['REPLY'] = golf;
    golf = 'forward';
    tango['FORWARD'] = golf;
    golf = 'thread';
    tango['THREAD'] = golf;
    var _closure1_slot6 = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/MessageShortcutsUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: isInMessageShortcutsExperiment
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 1;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.getCurrentConfig;
        entity = {};
        tango = 'createMessageContent';
        entity['location'] = tango;
        entity = mike.bind(zulu)(entity);
        mike = entity.showShortcutsConditions;
        entity = 'none';
        entity = entity !== mike;
        return entity;
    };
    zulu['isInMessageShortcutsExperiment'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: canShowForwardShortcut
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tango = argFoo;
            report = argBaz;
            entity = null;
            if(!(entity != report)) { _fun00012_ip = 98; continue _fun00011 }
 12:
            zulu = _closure1_slot12;
            mike = {};
            oscar = _closure1_slot6;
            oscar = oscar.FORWARD;
            mike['shortcut'] = oscar;
            mike['message'] = tango;
            oscar = argBar;
            mike['ignoreMentioned'] = oscar;
            mike['channel'] = report;
            report = undefined;
            mike = zulu.bind(report)(mike);
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 5;
            entity = oscar[entity];
            zulu = zulu.bind(report)(entity);
            entity = zulu.canForwardMessage;
            entity = entity.bind(zulu)(tango);
            if(!entity) { _fun00012_ip = 96; continue _fun00011 }
 93:
            entity = mike;
 96:
            return entity;
 98:
            entity = false;
            return entity;
        }
    };
    zulu['canShowForwardShortcut'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: canShowReplyShortcut
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            report = argFoo;
            tango = argBaz;
            entity = null;
            if(!(entity != tango)) { _fun00014_ip = 99; continue _fun00013 }
 12:
            zulu = _closure1_slot12;
            mike = {};
            oscar = _closure1_slot6;
            oscar = oscar.REPLY;
            mike['shortcut'] = oscar;
            mike['message'] = report;
            oscar = argBar;
            mike['ignoreMentioned'] = oscar;
            mike['channel'] = tango;
            oscar = undefined;
            mike = zulu.bind(oscar)(mike);
            zulu = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 6;
            entity = golf[entity];
            zulu = zulu.bind(oscar)(entity);
            entity = zulu.canReplyToMessage;
            entity = entity.bind(zulu)(tango, report);
            if(!entity) { _fun00014_ip = 97; continue _fun00013 }
 94:
            entity = mike;
 97:
            return entity;
 99:
            entity = false;
            return entity;
        }
    };
    zulu['canShowReplyShortcut'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: canShowReactionShortcut
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            tango = argBaz;
            entity = null;
            if(!(entity != tango)) { _fun00016_ip = 92; continue _fun00015 }
 9:
            report = _closure1_slot12;
            mike = {};
            zulu = _closure1_slot6;
            zulu = zulu.REACT;
            mike['shortcut'] = zulu;
            zulu = argFoo;
            mike['message'] = zulu;
            zulu = argBar;
            mike['ignoreMentioned'] = zulu;
            mike['channel'] = tango;
            zulu = undefined;
            mike = report.bind(zulu)(mike);
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            entity = 7;
            entity = oscar[entity];
            entity = report.bind(zulu)(entity);
            entity = entity.bind(zulu)(tango);
            if(!entity) { _fun00016_ip = 90; continue _fun00015 }
 87:
            entity = mike;
 90:
            return entity;
 92:
            entity = false;
            return entity;
        }
    };
    zulu['canShowReactionShortcut'] = tango;
    mike = function(argFoo, argBar) { // Original name: canShowThreadShortcut
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            oscar = argFoo;
            report = argBar;
            entity = null;
            if(!(entity != report)) { _fun00018_ip = 130; continue _fun00017 }
 12:
            mike = _closure1_slot0;
            entity = _closure1_slot2;
            options = 8;
            entity = entity[options];
            tango = undefined;
            mike = mike.bind(tango)(entity);
            entity = mike.computeCanStartPublicThread;
            entity = entity.bind(mike)(report, oscar);
            if(entity) { _fun00018_ip = 81; continue _fun00017 }
 52:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[options];
            zulu = zulu.bind(tango)(mike);
            mike = zulu.computeCanStartPrivateThread;
            entity = mike.bind(zulu)(report, oscar);
 81:
            zulu = _closure1_slot12;
            mike = {};
            golf = _closure1_slot6;
            golf = golf.THREAD;
            mike['shortcut'] = golf;
            mike['message'] = oscar;
            oscar = false;
            mike['ignoreMentioned'] = oscar;
            mike['channel'] = report;
            mike = zulu.bind(tango)(mike);
            if(!entity) { _fun00018_ip = 128; continue _fun00017 }
 125:
            entity = mike;
 128:
            return entity;
 130:
            entity = false;
            return entity;
        }
    };
    zulu['canShowThreadShortcut'] = mike;
    return entity;
})();