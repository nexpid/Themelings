// app/modules/guild_scheduled_events/useGuildHasLiveChannelNotice.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildScheduledEventEntityTypes;
    var _closure1_slot11 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Permissions;
    var _closure1_slot12 = tango;
    tango = 16;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_scheduled_events/useGuildHasLiveChannelNotice.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: useGuildHasLiveChannelNotice
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            yankee = argFoo;
            tango = _closure1_slot1;
            report = _closure1_slot2;
            entity = 10;
            entity = report[entity];
            options = undefined;
            entity = tango.bind(options)(entity);
            report = entity.bind(options)(yankee);
            oscar = _closure1_slot7;
            tango = oscar.getChannel;
            entity = 0;
            golf = report[entity];
            report = null;
            verify = report == golf;
            entity = undefined;
            if(verify) { _fun00002_ip = 66; continue _fun00001 }
 61:
            entity = golf.id;
 66:
            entity = tango.bind(oscar)(entity);
            var _closure2_slot0 = entity;
            golf = _closure1_slot0;
            verify = _closure1_slot2;
            oscar = 11;
            tango = verify[oscar];
            foxtrot = golf.bind(options)(tango);
            romeo = foxtrot.useStateFromStores;
            tango = _closure1_slot5;
            offset = new Array(1);
            offset[0] = tango;
            tango = new Array(1);
            tango[0] = entity;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zulu = _closure1_slot5;
                    mike = zulu.getStageInstanceByChannel;
                    report = _closure2_slot0;
                    entity = null;
                    report = entity == report;
                    entity = undefined;
                    if(report) { _fun00004_ip = 40; continue _fun00003 }
 31:
                    tango = _closure2_slot0;
                    entity = tango.id;
 40:
                    entity = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            tango = romeo.bind(foxtrot)(offset, entity, tango);
            var _closure2_slot1 = tango;
            entity = 12;
            entity = verify[entity];
            offset = golf.bind(options)(entity);
            entity = offset.useGuildActiveEvent;
            entity = entity.bind(offset)(yankee);
            var _closure2_slot2 = entity;
            oscar = verify[oscar];
            options = golf.bind(options)(oscar);
            golf = options.useStateFromStoresObject;
            zulu = _closure1_slot10;
            oscar = new Array(1);
            oscar[0] = zulu;
            zulu = new Array(2);
            zulu[0] = tango;
            zulu[1] = entity;
            mike = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = {};
                    golf = _closure1_slot10;
                    tango = golf.isLiveChannelNoticeHidden;
                    zulu = {};
                    report = _closure2_slot1;
                    options = null;
                    offset = options == report;
                    verify = undefined;
                    if(offset) { _fun00006_ip = 44; continue _fun00005 }
 35:
                    offset = _closure2_slot1;
                    verify = offset.id;
 44:
                    zulu['stageId'] = verify;
                    zulu = tango.bind(golf)(zulu);
                    entity['isStageNoticeHidden'] = zulu;
                    tango = _closure1_slot10;
                    zulu = tango.isLiveChannelNoticeHidden;
                    mike = {};
                    golf = _closure2_slot2;
                    golf = options == golf;
                    report = undefined;
                    if(golf) { _fun00006_ip = 93; continue _fun00005 }
 84:
                    oscar = _closure2_slot2;
                    report = oscar.id;
 93:
                    mike['eventId'] = report;
                    mike = zulu.bind(tango)(mike);
                    entity['isEventNoticeHidden'] = mike;
                    return entity;
                }
            };
            mike = golf.bind(options)(oscar, mike, zulu);
            zulu = mike.isStageNoticeHidden;
            mike = mike.isEventNoticeHidden;
            if(!(report == entity)) { _fun00002_ip = 246; continue _fun00001 }
 234:
            entity = report != tango;
            if(!entity) { _fun00002_ip = 244; continue _fun00001 }
 241:
            entity = !zulu;
 244:
            _fun00002_ip = 261; continue _fun00001;
 246:
            if(!(report == tango)) { _fun00002_ip = 255; continue _fun00001 }
 250:
            mike = !mike;
            _fun00002_ip = 258; continue _fun00001;
 255:
            mike = !zulu;
 258:
            entity = mike;
 261:
            return entity;
        }
    };
    zulu['useGuildHasLiveChannelNotice'] = tango;
    mike = function(argFoo) { // Original name: useGuildLiveChannelNoticeInfo
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            offset = argFoo;
            report = _closure1_slot0;
            golf = _closure1_slot2;
            zulu = 13;
            zulu = golf[zulu];
            options = undefined;
            tango = report.bind(options)(zulu);
            zulu = tango.useActiveEventOrStageInstanceChannel;
            oscar = zulu.bind(tango)(offset);
            var _closure2_slot0 = oscar;
            yankee = 11;
            zulu = golf[yankee];
            romeo = report.bind(options)(zulu);
            verify = romeo.useStateFromStores;
            zulu = _closure1_slot8;
            tango = new Array(1);
            tango[0] = zulu;
            zulu = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zulu = _closure2_slot0;
                    entity = null;
                    entity = entity != zulu;
                    if(!entity) { _fun00010_ip = 49; continue _fun00009 }
 16:
                    report = _closure1_slot8;
                    tango = report.can;
                    zulu = _closure1_slot12;
                    zulu = zulu.CONNECT;
                    mike = _closure2_slot0;
                    entity = tango.bind(report)(zulu, mike);
 49:
                    return entity;
                }
            };
            verify = verify.bind(romeo)(tango, zulu);
            var _closure2_slot1 = verify;
            zulu = 12;
            zulu = golf[zulu];
            tango = report.bind(options)(zulu);
            zulu = tango.useGuildActiveEvent;
            zulu = zulu.bind(tango)(offset);
            tango = golf[yankee];
            backup = report.bind(options)(tango);
            foxtrot = backup.useStateFromStores;
            tango = _closure1_slot5;
            romeo = new Array(1);
            romeo[0] = tango;
            offset = new Array(1);
            offset[0] = oscar;
            tango = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zulu = _closure1_slot5;
                    mike = zulu.getStageInstanceByChannel;
                    report = _closure2_slot0;
                    entity = null;
                    report = entity == report;
                    entity = undefined;
                    if(report) { _fun00012_ip = 40; continue _fun00011 }
 31:
                    tango = _closure2_slot0;
                    entity = tango.id;
 40:
                    entity = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            romeo = foxtrot.bind(backup)(romeo, tango, offset);
            tango = 14;
            tango = golf[tango];
            offset = report.bind(options)(tango);
            golf = offset.useActualStageSpeakerCount;
            tango = null;
            foxtrot = tango == oscar;
            report = undefined;
            if(foxtrot) { _fun00008_ip = 196; continue _fun00007 }
 191:
            report = oscar.id;
 196:
            golf = golf.bind(offset)(report);
            report = 0;
            report = golf > report;
            offset = _closure1_slot0;
            golf = _closure1_slot2;
            golf = golf[yankee];
            backup = offset.bind(options)(golf);
            foxtrot = backup.useStateFromStores;
            golf = _closure1_slot9;
            offset = new Array(1);
            offset[0] = golf;
            golf = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zulu = _closure2_slot0;
                    entity = null;
                    entity = entity != zulu;
                    if(!entity) { _fun00014_ip = 49; continue _fun00013 }
 16:
                    tango = _closure1_slot9;
                    zulu = tango.getVoiceStatesForChannel;
                    mike = _closure2_slot0;
                    mike = zulu.bind(tango)(mike);
                    zulu = mike.length;
                    mike = 0;
                    entity = zulu > mike;
 49:
                    return entity;
                }
            };
            offset = foxtrot.bind(backup)(offset, golf);
            golf = false;
            var _closure2_slot2 = golf;
            if(!(tango != oscar)) { _fun00008_ip = 268; continue _fun00007 }
 264:
            if(!(tango == romeo)) { _fun00008_ip = 293; continue _fun00007 }
 268:
            romeo = tango != oscar;
            if(!romeo) { _fun00008_ip = 279; continue _fun00007 }
 275:
            romeo = tango != zulu;
 279:
            golf = false;
            if(!romeo) { _fun00008_ip = 300; continue _fun00007 }
 284:
            _closure2_slot2 = offset;
            golf = offset;
            _fun00008_ip = 300; continue _fun00007;
 293:
            _closure2_slot2 = report;
            golf = report;
 300:
            offset = _closure1_slot0;
            report = _closure1_slot2;
            romeo = report[yankee];
            kilo = offset.bind(options)(romeo);
            backup = kilo.useStateFromStores;
            romeo = _closure1_slot4;
            foxtrot = new Array(1);
            foxtrot[0] = romeo;
            romeo = new Array(1);
            romeo[0] = oscar;
            oscar = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    mike = _closure2_slot0;
                    entity = null;
                    entity = entity != mike;
                    if(!entity) { _fun00016_ip = 84; continue _fun00015 }
 16:
                    report = _closure1_slot4;
                    tango = report.getParticipantCount;
                    zulu = _closure2_slot0;
                    zulu = zulu.id;
                    golf = _closure1_slot0;
                    oscar = _closure1_slot2;
                    mike = 15;
                    oscar = oscar[mike];
                    mike = undefined;
                    mike = golf.bind(mike)(oscar);
                    mike = mike.StageChannelParticipantNamedIndex;
                    mike = mike.AUDIENCE;
                    zulu = tango.bind(report)(zulu, mike);
                    mike = 0;
                    entity = zulu > mike;
 84:
                    return entity;
                }
            };
            oscar = backup.bind(kilo)(foxtrot, oscar, romeo);
            var _closure2_slot3 = oscar;
            report = report[yankee];
            romeo = offset.bind(options)(report);
            yankee = romeo.useStateFromStores;
            report = _closure1_slot6;
            offset = new Array(1);
            offset[0] = report;
            report = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    zulu = _closure2_slot0;
                    entity = null;
                    entity = entity != zulu;
                    if(!entity) { _fun00018_ip = 54; continue _fun00017 }
 16:
                    tango = _closure1_slot6;
                    zulu = tango.getAllApplicationStreamsForChannel;
                    mike = _closure2_slot0;
                    mike = mike.id;
                    mike = zulu.bind(tango)(mike);
                    zulu = mike.length;
                    mike = 0;
                    entity = zulu > mike;
 54:
                    return entity;
                }
            };
            report = yankee.bind(romeo)(offset, report);
            var _closure2_slot4 = report;
            tango = tango == zulu;
            options = undefined;
            if(tango) { _fun00008_ip = 418; continue _fun00007 }
 412:
            options = zulu.entity_type;
 418:
            var _closure2_slot5 = options;
            tango = _closure1_slot3;
            zulu = tango.useMemo;
            mike = new Array(5);
            mike[0] = verify;
            mike[1] = options;
            mike[2] = golf;
            mike[3] = oscar;
            mike[4] = report;
            entity = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    entity = {};
                    tango = _closure2_slot5;
                    zulu = _closure1_slot11;
                    zulu = zulu.EXTERNAL;
                    zulu = tango === zulu;
                    if(zulu) { _fun00020_ip = 33; continue _fun00019 }
 29:
                    zulu = _closure2_slot1;
 33:
                    entity['hasButton'] = zulu;
                    zulu = _closure2_slot2;
                    entity['hasSpeakers'] = zulu;
                    zulu = _closure2_slot3;
                    entity['hasAudience'] = zulu;
                    mike = _closure2_slot4;
                    entity['hasStream'] = mike;
                    return entity;
                }
            };
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        }
    };
    zulu['useGuildLiveChannelNoticeInfo'] = mike;
    return entity;
})();