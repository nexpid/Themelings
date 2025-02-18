// app/modules/guild_scheduled_events/useGuildHasLiveChannelNotice.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildScheduledEventEntityTypes;
    var _closure1_slot11 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Permissions;
    var _closure1_slot12 = tangon;
    tangon = 16;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_scheduled_events/useGuildHasLiveChannelNotice.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: useGuildHasLiveChannelNotice
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            yankee = argFoo;
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            entity = 10;
            entity = report[entity];
            option = undefined;
            entity = tangon.bind(option)(entity);
            report = entity.bind(option)(yankee);
            oscard = _closure1_slot7;
            tangon = oscard.getChannel;
            entity = 0;
            golfie = report[entity];
            report = null;
            verify = report == golfie;
            entity = undefined;
            if(verify) { _fun00002_ip = 66; continue _fun00001 }
 61:
            entity = golfie.id;
 66:
            entity = tangon.bind(oscard)(entity);
            var _closure2_slot0 = entity;
            golfie = _closure1_slot0;
            verify = _closure1_slot2;
            oscard = 11;
            tangon = verify[oscard];
            foxtra = golfie.bind(option)(tangon);
            romeon = foxtra.useStateFromStores;
            tangon = _closure1_slot5;
            offset = new Array(1);
            offset[0] = tangon;
            tangon = new Array(1);
            tangon[0] = entity;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure1_slot5;
                    michal = zuuluu.getStageInstanceByChannel;
                    report = _closure2_slot0;
                    entity = null;
                    report = entity == report;
                    entity = undefined;
                    if(report) { _fun00004_ip = 40; continue _fun00003 }
 31:
                    tangon = _closure2_slot0;
                    entity = tangon.id;
 40:
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                }
            };
            tangon = romeon.bind(foxtra)(offset, entity, tangon);
            var _closure2_slot1 = tangon;
            entity = 12;
            entity = verify[entity];
            offset = golfie.bind(option)(entity);
            entity = offset.useGuildActiveEvent;
            entity = entity.bind(offset)(yankee);
            var _closure2_slot2 = entity;
            oscard = verify[oscard];
            option = golfie.bind(option)(oscard);
            golfie = option.useStateFromStoresObject;
            zuuluu = _closure1_slot10;
            oscard = new Array(1);
            oscard[0] = zuuluu;
            zuuluu = new Array(2);
            zuuluu[0] = tangon;
            zuuluu[1] = entity;
            michal = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = {};
                    golfie = _closure1_slot10;
                    tangon = golfie.isLiveChannelNoticeHidden;
                    zuuluu = {};
                    report = _closure2_slot1;
                    option = null;
                    offset = option == report;
                    verify = undefined;
                    if(offset) { _fun00006_ip = 44; continue _fun00005 }
 35:
                    offset = _closure2_slot1;
                    verify = offset.id;
 44:
                    zuuluu['stageId'] = verify;
                    zuuluu = tangon.bind(golfie)(zuuluu);
                    entity['isStageNoticeHidden'] = zuuluu;
                    tangon = _closure1_slot10;
                    zuuluu = tangon.isLiveChannelNoticeHidden;
                    michal = {};
                    golfie = _closure2_slot2;
                    golfie = option == golfie;
                    report = undefined;
                    if(golfie) { _fun00006_ip = 93; continue _fun00005 }
 84:
                    oscard = _closure2_slot2;
                    report = oscard.id;
 93:
                    michal['eventId'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    entity['isEventNoticeHidden'] = michal;
                    return entity;
                }
            };
            michal = golfie.bind(option)(oscard, michal, zuuluu);
            zuuluu = michal.isStageNoticeHidden;
            michal = michal.isEventNoticeHidden;
            if(!(report == entity)) { _fun00002_ip = 246; continue _fun00001 }
 234:
            entity = report != tangon;
            if(!entity) { _fun00002_ip = 244; continue _fun00001 }
 241:
            entity = !zuuluu;
 244:
            _fun00002_ip = 261; continue _fun00001;
 246:
            if(!(report == tangon)) { _fun00002_ip = 255; continue _fun00001 }
 250:
            michal = !michal;
            _fun00002_ip = 258; continue _fun00001;
 255:
            michal = !zuuluu;
 258:
            entity = michal;
 261:
            return entity;
        }
    };
    zuuluu['useGuildHasLiveChannelNotice'] = tangon;
    michal = function(argFoo) { // Original name: useGuildLiveChannelNoticeInfo
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            offset = argFoo;
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 13;
            zuuluu = golfie[zuuluu];
            option = undefined;
            tangon = report.bind(option)(zuuluu);
            zuuluu = tangon.useActiveEventOrStageInstanceChannel;
            oscard = zuuluu.bind(tangon)(offset);
            var _closure2_slot0 = oscard;
            yankee = 11;
            zuuluu = golfie[yankee];
            romeon = report.bind(option)(zuuluu);
            verify = romeon.useStateFromStores;
            zuuluu = _closure1_slot8;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    entity = null;
                    entity = entity != zuuluu;
                    if(!entity) { _fun00010_ip = 49; continue _fun00009 }
 16:
                    report = _closure1_slot8;
                    tangon = report.can;
                    zuuluu = _closure1_slot12;
                    zuuluu = zuuluu.CONNECT;
                    michal = _closure2_slot0;
                    entity = tangon.bind(report)(zuuluu, michal);
 49:
                    return entity;
                }
            };
            verify = verify.bind(romeon)(tangon, zuuluu);
            var _closure2_slot1 = verify;
            zuuluu = 12;
            zuuluu = golfie[zuuluu];
            tangon = report.bind(option)(zuuluu);
            zuuluu = tangon.useGuildActiveEvent;
            zuuluu = zuuluu.bind(tangon)(offset);
            tangon = golfie[yankee];
            backup = report.bind(option)(tangon);
            foxtra = backup.useStateFromStores;
            tangon = _closure1_slot5;
            romeon = new Array(1);
            romeon[0] = tangon;
            offset = new Array(1);
            offset[0] = oscard;
            tangon = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = _closure1_slot5;
                    michal = zuuluu.getStageInstanceByChannel;
                    report = _closure2_slot0;
                    entity = null;
                    report = entity == report;
                    entity = undefined;
                    if(report) { _fun00012_ip = 40; continue _fun00011 }
 31:
                    tangon = _closure2_slot0;
                    entity = tangon.id;
 40:
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                }
            };
            romeon = foxtra.bind(backup)(romeon, tangon, offset);
            tangon = 14;
            tangon = golfie[tangon];
            offset = report.bind(option)(tangon);
            golfie = offset.useActualStageSpeakerCount;
            tangon = null;
            foxtra = tangon == oscard;
            report = undefined;
            if(foxtra) { _fun00008_ip = 196; continue _fun00007 }
 191:
            report = oscard.id;
 196:
            golfie = golfie.bind(offset)(report);
            report = 0;
            report = golfie > report;
            offset = _closure1_slot0;
            golfie = _closure1_slot2;
            golfie = golfie[yankee];
            backup = offset.bind(option)(golfie);
            foxtra = backup.useStateFromStores;
            golfie = _closure1_slot9;
            offset = new Array(1);
            offset[0] = golfie;
            golfie = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    entity = null;
                    entity = entity != zuuluu;
                    if(!entity) { _fun00014_ip = 49; continue _fun00013 }
 16:
                    tangon = _closure1_slot9;
                    zuuluu = tangon.getVoiceStatesForChannel;
                    michal = _closure2_slot0;
                    michal = zuuluu.bind(tangon)(michal);
                    zuuluu = michal.length;
                    michal = 0;
                    entity = zuuluu > michal;
 49:
                    return entity;
                }
            };
            offset = foxtra.bind(backup)(offset, golfie);
            golfie = false;
            var _closure2_slot2 = golfie;
            if(!(tangon != oscard)) { _fun00008_ip = 268; continue _fun00007 }
 264:
            if(!(tangon == romeon)) { _fun00008_ip = 293; continue _fun00007 }
 268:
            romeon = tangon != oscard;
            if(!romeon) { _fun00008_ip = 279; continue _fun00007 }
 275:
            romeon = tangon != zuuluu;
 279:
            golfie = false;
            if(!romeon) { _fun00008_ip = 300; continue _fun00007 }
 284:
            _closure2_slot2 = offset;
            golfie = offset;
            _fun00008_ip = 300; continue _fun00007;
 293:
            _closure2_slot2 = report;
            golfie = report;
 300:
            offset = _closure1_slot0;
            report = _closure1_slot2;
            romeon = report[yankee];
            kiloes = offset.bind(option)(romeon);
            backup = kiloes.useStateFromStores;
            romeon = _closure1_slot4;
            foxtra = new Array(1);
            foxtra[0] = romeon;
            romeon = new Array(1);
            romeon[0] = oscard;
            oscard = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    michal = _closure2_slot0;
                    entity = null;
                    entity = entity != michal;
                    if(!entity) { _fun00016_ip = 84; continue _fun00015 }
 16:
                    report = _closure1_slot4;
                    tangon = report.getParticipantCount;
                    zuuluu = _closure2_slot0;
                    zuuluu = zuuluu.id;
                    golfie = _closure1_slot0;
                    oscard = _closure1_slot2;
                    michal = 15;
                    oscard = oscard[michal];
                    michal = undefined;
                    michal = golfie.bind(michal)(oscard);
                    michal = michal.StageChannelParticipantNamedIndex;
                    michal = michal.AUDIENCE;
                    zuuluu = tangon.bind(report)(zuuluu, michal);
                    michal = 0;
                    entity = zuuluu > michal;
 84:
                    return entity;
                }
            };
            oscard = backup.bind(kiloes)(foxtra, oscard, romeon);
            var _closure2_slot3 = oscard;
            report = report[yankee];
            romeon = offset.bind(option)(report);
            yankee = romeon.useStateFromStores;
            report = _closure1_slot6;
            offset = new Array(1);
            offset[0] = report;
            report = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    entity = null;
                    entity = entity != zuuluu;
                    if(!entity) { _fun00018_ip = 54; continue _fun00017 }
 16:
                    tangon = _closure1_slot6;
                    zuuluu = tangon.getAllApplicationStreamsForChannel;
                    michal = _closure2_slot0;
                    michal = michal.id;
                    michal = zuuluu.bind(tangon)(michal);
                    zuuluu = michal.length;
                    michal = 0;
                    entity = zuuluu > michal;
 54:
                    return entity;
                }
            };
            report = yankee.bind(romeon)(offset, report);
            var _closure2_slot4 = report;
            tangon = tangon == zuuluu;
            option = undefined;
            if(tangon) { _fun00008_ip = 418; continue _fun00007 }
 412:
            option = zuuluu.entity_type;
 418:
            var _closure2_slot5 = option;
            tangon = _closure1_slot3;
            zuuluu = tangon.useMemo;
            michal = new Array(5);
            michal[0] = verify;
            michal[1] = option;
            michal[2] = golfie;
            michal[3] = oscard;
            michal[4] = report;
            entity = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    entity = {};
                    tangon = _closure2_slot5;
                    zuuluu = _closure1_slot11;
                    zuuluu = zuuluu.EXTERNAL;
                    zuuluu = tangon === zuuluu;
                    if(zuuluu) { _fun00020_ip = 33; continue _fun00019 }
 29:
                    zuuluu = _closure2_slot1;
 33:
                    entity['hasButton'] = zuuluu;
                    zuuluu = _closure2_slot2;
                    entity['hasSpeakers'] = zuuluu;
                    zuuluu = _closure2_slot3;
                    entity['hasAudience'] = zuuluu;
                    michal = _closure2_slot4;
                    entity['hasStream'] = michal;
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        }
    };
    zuuluu['useGuildLiveChannelNoticeInfo'] = michal;
    return entity;
})();