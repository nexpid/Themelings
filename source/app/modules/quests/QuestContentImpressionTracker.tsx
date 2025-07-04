// app/modules/quests/QuestContentImpressionTracker.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    offset = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = option;
    tangon = function() { // Original name: useQuestImpression
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot5;
            michal = zuuluu.useContext;
            entity = _closure1_slot11;
            michal = michal.bind(zuuluu)(entity);
            entity = null;
            zuuluu = entity == michal;
            entity = undefined;
            if(zuuluu) { _fun00002_ip = 38; continue _fun00001 }
 33:
            entity = michal.current;
 38:
            return entity;
        }
    };
    var _closure1_slot12 = tangon;
    report = global;
    yankee = report.Object;
    verify = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = offset.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 1;
    oscard = option[oscard];
    oscard = offset.bind(entity)(oscard);
    var _closure1_slot4 = oscard;
    oscard = 2;
    verify = option[oscard];
    oscard = argCor;
    verify = oscard.bind(entity)(verify);
    var _closure1_slot5 = verify;
    oscard = 3;
    oscard = option[oscard];
    oscard = offset.bind(entity)(oscard);
    var _closure1_slot6 = oscard;
    oscard = 4;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.AnalyticEvents;
    var _closure1_slot7 = oscard;
    oscard = 5;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.jsx;
    var _closure1_slot8 = oscard;
    report = report.Set;
    oscard = report.prototype;
    oscard = Object.create(oscard, {constructor: {value: report}});
    kiloes = oscard;
    report = new kiloes[report](backup);
    report = report instanceof Object ? report : oscard;
    var _closure1_slot9 = report;
    report = function() {
        tangon = _closure1_slot4;
        zuuluu = function(argFoo) { // Original name: QuestContentImpression
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = argFoo;
                zuuluu = this;
                var _closure3_slot0 = zuuluu;
                offset = michal.questOrQuests;
                yankee = michal.questContent;
                oscard = michal.triggeredByStatusChange;
                golfie = michal.trackGuildAndChannelMetadata;
                verify = michal.questContentPosition;
                report = michal.questContentRowIndex;
                option = michal.minViewTimeSeconds;
                entity = undefined;
                if(!(option === entity)) { _fun00004_ip = 63; continue _fun00003 }
 60:
                option = 1;
 63:
                tangon = michal.isQuestEnrollmentBlocked;
                michal = michal.sourceQuestContent;
                kiloes = _closure1_slot3;
                backup = _closure2_slot0;
                backup = kiloes.bind(entity)(zuuluu, backup);
                backup = false;
                zuuluu['isRunning'] = backup;
                backup = function() {
                    entity = _closure3_slot0;
                    zuuluu = entity.quests;
                    michal = zuuluu.forEach;
                    entity = function(argFoo) {
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            option = argFoo;
                            var _closure5_slot0 = option;
                            verify = _closure1_slot0;
                            golfie = _closure1_slot2;
                            entity = 6;
                            tangon = golfie[entity];
                            entity = undefined;
                            report = verify.bind(entity)(tangon);
                            tangon = report.getQuestLogger;
                            backup = tangon.bind(report)();
                            foxtra = backup.info;
                            tangon = option.config;
                            tangon = tangon.messages;
                            result = tangon.questName;
                            oscard = _closure3_slot0;
                            source = oscard.minViewTimeSeconds;
                            tangon = 7;
                            tangon = golfie[tangon];
                            yankee = verify.bind(entity)(tangon);
                            offset = yankee.getQuestContentName;
                            tangon = oscard.questContent;
                            echoed = offset.bind(yankee)(tangon);
                            tangon = global;
                            offset = tangon.HermesInternal;
                            kiloes = offset.concat;
                            yankee = '';
                            ctrled = ' Quest viewed for at least ';
                            update = 's at ';
                            sequen = yankee;
                            vacuum = result;
                            romeon = sequen[kiloes](vacuum, ctrled, source, update, echoed, result);
                            offset = {};
                            kiloes = oscard.id;
                            offset['impressionId'] = kiloes;
                            offset = foxtra.bind(backup)(romeon, offset);
                            offset = false;
                            var _closure5_slot1 = offset;
                            offset = 8;
                            golfie = golfie[offset];
                            verify = verify.bind(entity)(golfie);
                            golfie = verify.getQuestPlacementFromQuestContent;
                            oscard = oscard.questContent;
                            verify = golfie.bind(verify)(oscard);
                            oscard = null;
                            if(!(oscard != verify)) { _fun00006_ip = 313; continue _fun00005 }
 207:
                            golfie = option.id;
                            tangon = tangon.HermesInternal;
                            oscard = tangon.concat;
                            tangon = '_';
                            golfie = oscard.bind(yankee)(golfie, tangon, verify);
                            oscard = _closure1_slot9;
                            tangon = oscard.has;
                            tangon = tangon.bind(oscard)(golfie);
                            tangon = !tangon;
                            if(!tangon) { _fun00006_ip = 292; continue _fun00005 }
 254:
                            verify = _closure1_slot0;
                            oscard = _closure1_slot2;
                            oscard = oscard[offset];
                            offset = verify.bind(entity)(oscard);
                            verify = offset.isBillableQuestContent;
                            oscard = _closure3_slot0;
                            oscard = oscard.questContent;
                            tangon = verify.bind(offset)(oscard);
 292:
                            _closure5_slot1 = tangon;
                            if(!tangon) { _fun00006_ip = 313; continue _fun00005 }
 299:
                            oscard = _closure1_slot9;
                            tangon = oscard.add;
                            tangon = tangon.bind(oscard)(golfie);
 313:
                            tangon = {};
                            golfie = _closure3_slot0;
                            report = golfie.minViewTimeSeconds;
                            tangon['min_view_time_seconds'] = report;
                            report = golfie.minViewportPercentage;
                            tangon['min_viewport_percentage'] = report;
                            report = golfie.triggeredByStatusChange;
                            tangon['triggered_by_status_change'] = report;
                            verify = _closure1_slot1;
                            report = _closure1_slot2;
                            oscard = 9;
                            oscard = report[oscard];
                            oscard = verify.bind(entity)(oscard);
                            ctrled = oscard.bind(entity)();
                            vacuum = tangon;
                            oscard = copyDataProperties(vacuum, ctrled);
                            oscard = golfie.commonProperties;
                            ctrled = oscard.bind(golfie)(option);
                            vacuum = tangon;
                            oscard = copyDataProperties(vacuum, ctrled);
                            var _closure5_slot2 = tangon;
                            tangon = _closure1_slot0;
                            zuuluu = 10;
                            zuuluu = report[zuuluu];
                            tangon = tangon.bind(entity)(zuuluu);
                            zuuluu = tangon.getAdUser;
                            tangon = zuuluu.bind(tangon)();
                            zuuluu = tangon.then;
                            michal = function(argFoo) {
                                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                                    entity = argFoo;
                                    michal = null;
                                    if(!(michal != entity)) { _fun00008_ip = 120; continue _fun00007 }
 9:
                                    oscard = _closure1_slot0;
                                    zuuluu = _closure1_slot2;
                                    report = 11;
                                    zuuluu = zuuluu[report];
                                    tangon = undefined;
                                    oscard = oscard.bind(tangon)(zuuluu);
                                    zuuluu = oscard.isIOS;
                                    zuuluu = zuuluu.bind(oscard)();
                                    if(zuuluu) { _fun00008_ip = 99; continue _fun00007 }
 47:
                                    zuuluu = _closure1_slot0;
                                    michal = _closure1_slot2;
                                    michal = michal[report];
                                    zuuluu = zuuluu.bind(tangon)(michal);
                                    michal = zuuluu.isAndroid;
                                    michal = michal.bind(zuuluu)();
                                    if(!michal) { _fun00008_ip = 120; continue _fun00007 }
 76:
                                    zuuluu = _closure5_slot2;
                                    michal = entity.advertisingId;
                                    zuuluu['android_advertising_id'] = michal;
                                    _fun00008_ip = 120; continue _fun00007;
 99:
                                    michal = _closure5_slot2;
                                    entity = entity.advertisingId;
                                    michal['apple_advertising_id'] = entity;
 120:
                                    zuuluu = _closure1_slot0;
                                    michal = _closure1_slot2;
                                    entity = 7;
                                    michal = michal[entity];
                                    entity = undefined;
                                    tangon = zuuluu.bind(entity)(michal);
                                    zuuluu = tangon.trackQuestEvent;
                                    michal = {};
                                    golfie = _closure5_slot0;
                                    golfie = golfie.id;
                                    michal['questId'] = golfie;
                                    report = _closure1_slot7;
                                    report = report.QUEST_CONTENT_VIEWED;
                                    michal['event'] = report;
                                    report = _closure3_slot0;
                                    golfie = report.trackGuildAndChannelMetadata;
                                    michal['trackGuildAndChannelMetadata'] = golfie;
                                    golfie = _closure5_slot2;
                                    michal['properties'] = golfie;
                                    oscard = _closure5_slot1;
                                    michal['shouldExtendSession'] = oscard;
                                    report = report.sourceQuestContent;
                                    michal['sourceQuestContent'] = report;
                                    michal = zuuluu.bind(tangon)(michal);
                                    return entity;
                                }
                            };
                            michal = zuuluu.bind(tangon)(michal);
                            return entity;
                        }
                    };
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                zuuluu['onMinViewTimeReached'] = backup;
                backup = function() {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        zuuluu = arguments[0];
                        entity = undefined;
                        if(!(zuuluu === entity)) { _fun00010_ip = 13; continue _fun00009 }
 11:
                        zuuluu = false;
 13:
                        var _closure4_slot0 = zuuluu;
                        zuuluu = _closure3_slot0;
                        report = zuuluu.quests;
                        tangon = report.forEach;
                        michal = function(argFoo) {
                            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                                golfie = argFoo;
                                entity = _closure3_slot0;
                                michal = entity.lastBeatTime;
                                entity = null;
                                if(!(entity != michal)) { _fun00012_ip = 354; continue _fun00011 }
 25:
                                entity = global;
                                report = entity.Math;
                                zuuluu = report.round;
                                oscard = entity.Date;
                                michal = oscard.now;
                                oscard = michal.bind(oscard)();
                                michal = _closure3_slot0;
                                michal = michal.lastBeatTime;
                                michal = oscard - michal;
                                oscard = zuuluu.bind(report)(michal);
                                option = _closure1_slot0;
                                zuuluu = _closure1_slot2;
                                michal = 6;
                                michal = zuuluu[michal];
                                zuuluu = undefined;
                                option = option.bind(zuuluu)(michal);
                                michal = option.getQuestLogger;
                                offset = michal.bind(option)();
                                verify = offset.info;
                                michal = golfie.config;
                                michal = michal.messages;
                                kiloes = michal.questName;
                                michal = _closure4_slot0;
                                backup = '';
                                foxtra = backup;
                                if(!michal) { _fun00012_ip = 153; continue _fun00011 }
 147:
                                foxtra = 'terminal ';
 153:
                                entity = entity.HermesInternal;
                                romeon = entity.concat;
                                update = ' Quest impression ';
                                result = 'heartbeat: ';
                                sizing = 'ms since last heartbeat';
                                ctrled = backup;
                                source = kiloes;
                                echoed = foxtra;
                                output = oscard;
                                michal = ctrled[romeon](source, update, echoed, result, output, sizing, kiloes);
                                entity = {};
                                tangon = _closure3_slot0;
                                yankee = tangon.id;
                                entity['impressionId'] = yankee;
                                entity = verify.bind(offset)(michal, entity);
                                michal = _closure1_slot0;
                                verify = _closure1_slot2;
                                entity = 7;
                                entity = verify[entity];
                                zuuluu = michal.bind(zuuluu)(entity);
                                michal = zuuluu.trackQuestEvent;
                                entity = {};
                                verify = golfie.id;
                                entity['questId'] = verify;
                                report = _closure1_slot7;
                                report = report.QUEST_CONTENT_VIEW_TIME;
                                entity['event'] = report;
                                report = {};
                                option = _closure4_slot0;
                                report['is_termination_beat'] = option;
                                report['viewed_time_ms'] = oscard;
                                oscard = tangon.triggeredByStatusChange;
                                report['triggered_by_status_change'] = oscard;
                                oscard = tangon.commonProperties;
                                update = oscard.bind(tangon)(golfie);
                                source = report;
                                oscard = copyDataProperties(source, update);
                                entity['properties'] = report;
                                report = tangon.trackGuildAndChannelMetadata;
                                entity['trackGuildAndChannelMetadata'] = report;
                                tangon = tangon.sourceQuestContent;
                                entity['sourceQuestContent'] = tangon;
                                entity = michal.bind(zuuluu)(entity);
 354:
                                entity = undefined;
                                return entity;
                            }
                        };
                        michal = tangon.bind(report)(michal);
                        michal = global;
                        tangon = michal.Date;
                        michal = tangon.now;
                        michal = michal.bind(tangon)();
                        zuuluu['lastBeatTime'] = michal;
                        return entity;
                    }
                };
                zuuluu['beat'] = backup;
                backup = function(argFoo) {
                    verify = argFoo;
                    entity = {};
                    michal = _closure3_slot0;
                    zuuluu = michal.id;
                    entity['impression_id'] = zuuluu;
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    zuuluu = 8;
                    zuuluu = oscard[zuuluu];
                    tangon = undefined;
                    offset = report.bind(tangon)(zuuluu);
                    option = offset.getAdDecisionData;
                    golfie = verify.id;
                    zuuluu = michal.questContent;
                    romeon = option.bind(offset)(golfie, zuuluu);
                    foxtra = entity;
                    zuuluu = copyDataProperties(foxtra, romeon);
                    golfie = michal.isQuestEnrollmentBlocked;
                    zuuluu = 'is_quest_enrollment_blocked';
                    entity[zuuluu] = golfie;
                    zuuluu = 7;
                    golfie = oscard[zuuluu];
                    option = report.bind(tangon)(golfie);
                    golfie = option.getQuestStatus;
                    option = golfie.bind(option)(verify);
                    golfie = 'quest_status';
                    entity[golfie] = option;
                    zuuluu = oscard[zuuluu];
                    oscard = report.bind(tangon)(zuuluu);
                    report = oscard.getContentProperties;
                    tangon = michal.questContent;
                    zuuluu = michal.questContentPosition;
                    michal = michal.questContentRowIndex;
                    romeon = report.bind(oscard)(tangon, zuuluu, michal);
                    foxtra = entity;
                    michal = copyDataProperties(foxtra, romeon);
                    return entity;
                };
                zuuluu['commonProperties'] = backup;
                backup = function(argFoo) {
                    entity = argFoo;
                    tangon = entity.triggeredByStatusChange;
                    michal = _closure3_slot0;
                    entity = michal.stop;
                    entity = entity.bind(michal)();
                    zuuluu = _closure2_slot0;
                    entity = {};
                    report = michal.questContent;
                    entity['questContent'] = report;
                    report = michal.quests;
                    entity['questOrQuests'] = report;
                    report = michal.questContentRowIndex;
                    entity['questContentRowIndex'] = report;
                    report = michal.questContentPosition;
                    entity['questContentPosition'] = report;
                    report = michal.trackGuildAndChannelMetadata;
                    entity['trackGuildAndChannelMetadata'] = report;
                    entity['triggeredByStatusChange'] = tangon;
                    tangon = michal.isQuestEnrollmentBlocked;
                    entity['isQuestEnrollmentBlocked'] = tangon;
                    michal = michal.sourceQuestContent;
                    entity['sourceQuestContent'] = michal;
                    michal = zuuluu.prototype;
                    michal = Object.create(michal, {constructor: {value: zuuluu}});
                    golfie = michal;
                    oscard = entity;
                    entity = new golfie[zuuluu](oscard, report);
                    entity = entity instanceof Object ? entity : michal;
                    return entity;
                };
                zuuluu['clone'] = backup;
                backup = function() {
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        zuuluu = _closure3_slot0;
                        report = zuuluu.stop;
                        tangon = false;
                        tangon = report.bind(zuuluu)(tangon);
                        oscard = global;
                        report = oscard.Date;
                        tangon = report.now;
                        tangon = tangon.bind(report)();
                        zuuluu['lastBeatTime'] = tangon;
                        option = oscard.window;
                        golfie = option.setInterval;
                        report = function() {
                            michal = _closure3_slot0;
                            entity = michal.beat;
                            entity = entity.bind(michal)();
                            return entity;
                        };
                        tangon = 60000;
                        tangon = golfie.bind(option)(report, tangon);
                        zuuluu['heartbeatTimeoutId'] = tangon;
                        option = oscard.window;
                        golfie = option.setTimeout;
                        report = zuuluu.onMinViewTimeReached;
                        verify = zuuluu.minViewTimeSeconds;
                        tangon = 1000;
                        tangon = tangon * verify;
                        tangon = golfie.bind(option)(report, tangon);
                        zuuluu['minViewTimeReachedTimeoutId'] = tangon;
                        tangon = zuuluu.quests;
                        zuuluu = tangon.forEach;
                        entity = function(argFoo) {
                            option = argFoo;
                            zuuluu = _closure1_slot0;
                            tangon = _closure1_slot2;
                            entity = 6;
                            michal = tangon[entity];
                            entity = undefined;
                            report = zuuluu.bind(entity)(michal);
                            michal = report.getQuestLogger;
                            yankee = michal.bind(report)();
                            offset = yankee.info;
                            michal = option.config;
                            michal = michal.messages;
                            backup = michal.questName;
                            michal = 7;
                            report = tangon[michal];
                            romeon = zuuluu.bind(entity)(report);
                            verify = romeon.getQuestContentName;
                            report = _closure3_slot0;
                            golfie = report.questContent;
                            foxtra = verify.bind(romeon)(golfie);
                            golfie = global;
                            golfie = golfie.HermesInternal;
                            romeon = golfie.concat;
                            verify = '';
                            golfie = ' Quest became visible at ';
                            verify = romeon.bind(verify)(backup, golfie, foxtra);
                            golfie = {};
                            romeon = report.id;
                            golfie['impressionId'] = romeon;
                            golfie = offset.bind(yankee)(verify, golfie);
                            michal = tangon[michal];
                            tangon = zuuluu.bind(entity)(michal);
                            zuuluu = tangon.trackQuestEvent;
                            michal = {};
                            golfie = option.id;
                            michal['questId'] = golfie;
                            oscard = _closure1_slot7;
                            oscard = oscard.QUEST_CONTENT_LOADED;
                            michal['event'] = oscard;
                            oscard = {};
                            golfie = report.triggeredByStatusChange;
                            oscard['triggered_by_status_change'] = golfie;
                            golfie = report.commonProperties;
                            sizing = golfie.bind(report)(option);
                            output = oscard;
                            golfie = copyDataProperties(output, sizing);
                            michal['properties'] = oscard;
                            oscard = report.trackGuildAndChannelMetadata;
                            michal['trackGuildAndChannelMetadata'] = oscard;
                            report = report.sourceQuestContent;
                            michal['sourceQuestContent'] = report;
                            michal = zuuluu.bind(tangon)(michal);
                            return entity;
                        };
                        entity = zuuluu.bind(tangon)(entity);
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 12;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        report = tangon.bind(entity)(zuuluu);
                        tangon = report.isEligibleForQuestsClientMonitoring;
                        zuuluu = 'QuestImpressionTracker';
                        zuuluu = tangon.bind(report)(zuuluu);
                        if(!zuuluu) { _fun00014_ip = 327; continue _fun00013 }
 194:
                        tangon = _closure1_slot1;
                        verify = _closure1_slot2;
                        zuuluu = 13;
                        zuuluu = verify[zuuluu];
                        report = tangon.bind(entity)(zuuluu);
                        tangon = report.increment;
                        zuuluu = {};
                        option = _closure1_slot0;
                        golfie = 14;
                        golfie = verify[golfie];
                        golfie = option.bind(entity)(golfie);
                        golfie = golfie.MetricEvents;
                        golfie = golfie.QUEST_CONTENT_IMPRESSION;
                        zuuluu['name'] = golfie;
                        golfie = 7;
                        golfie = verify[golfie];
                        verify = option.bind(entity)(golfie);
                        option = verify.getQuestContentName;
                        golfie = _closure3_slot0;
                        golfie = golfie.questContent;
                        option = option.bind(verify)(golfie);
                        oscard = oscard.HermesInternal;
                        golfie = oscard.concat;
                        oscard = 'quest_content:';
                        golfie = golfie.bind(oscard)(option);
                        oscard = new Array(1);
                        oscard[0] = golfie;
                        zuuluu['tags'] = oscard;
                        zuuluu = tangon.bind(report)(zuuluu);
 327:
                        zuuluu = _closure3_slot0;
                        michal = true;
                        zuuluu['isRunning'] = michal;
                        return entity;
                    }
                };
                zuuluu['start'] = backup;
                foxtra = function() {
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        michal = arguments[0];
                        entity = undefined;
                        if(!(michal === entity)) { _fun00016_ip = 11; continue _fun00015 }
 9:
                        michal = true;
 11:
                        if(!michal) { _fun00016_ip = 34; continue _fun00015 }
 14:
                        tangon = _closure3_slot0;
                        zuuluu = tangon.beat;
                        michal = true;
                        michal = zuuluu.bind(tangon)(michal);
 34:
                        zuuluu = _closure3_slot0;
                        zuuluu['lastBeatTime'] = entity;
                        michal = global;
                        report = michal.clearInterval;
                        tangon = zuuluu.heartbeatTimeoutId;
                        tangon = report.bind(entity)(tangon);
                        tangon = michal.clearTimeout;
                        michal = zuuluu.minViewTimeReachedTimeoutId;
                        michal = tangon.bind(entity)(michal);
                        michal = false;
                        zuuluu['isRunning'] = michal;
                        return entity;
                    }
                };
                zuuluu['stop'] = foxtra;
                foxtra = _closure1_slot0;
                backup = _closure1_slot2;
                romeon = 15;
                romeon = backup[romeon];
                foxtra = foxtra.bind(entity)(romeon);
                romeon = foxtra.v4;
                romeon = romeon.bind(foxtra)();
                zuuluu['id'] = romeon;
                zuuluu['questContent'] = yankee;
                zuuluu['questContentPosition'] = verify;
                zuuluu['minViewTimeSeconds'] = option;
                option = 0.5;
                zuuluu['minViewportPercentage'] = option;
                option = global;
                verify = option.Array;
                option = verify.isArray;
                verify = option.bind(verify)(offset);
                option = offset;
                if(verify) { _fun00004_ip = 274; continue _fun00003 }
 263:
                verify = new Array(1);
                verify[0] = offset;
                option = verify;
 274:
                zuuluu['quests'] = option;
                zuuluu['trackGuildAndChannelMetadata'] = golfie;
                zuuluu['triggeredByStatusChange'] = oscard;
                zuuluu['questContentRowIndex'] = report;
                zuuluu['isQuestEnrollmentBlocked'] = tangon;
                zuuluu['sourceQuestContent'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'getId';
        entity['key'] = michal;
        michal = function() { // Original name: value
            entity = this;
            entity = entity.id;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(2);
        michal[0] = entity;
        entity = {};
        oscard = 'getQuestContentPosition';
        entity['key'] = oscard;
        report = function() { // Original name: value
            entity = this;
            entity = entity.questContentPosition;
            return entity;
        };
        entity['value'] = report;
        michal[1] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    report = report.bind(entity)();
    var _closure1_slot10 = report;
    oscard = verify.createContext;
    oscard = oscard.bind(verify)(entity);
    var _closure1_slot11 = oscard;
    oscard = 19;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/quests/QuestContentImpressionTracker.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = 0.5;
    zuuluu['MIN_QUEST_CONTENT_VISIBILITY_PERCENTAGE'] = oscard;
    zuuluu['QuestContentImpression'] = report;
    report = function(argFoo, argBar) {
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            zuuluu = argFoo;
            entity = global;
            tangon = entity.Array;
            michal = tangon.isArray;
            michal = michal.bind(tangon)(zuuluu);
            if(michal) { _fun00018_ip = 31; continue _fun00017 }
 24:
            report = zuuluu.id;
            _fun00018_ip = 72; continue _fun00017;
 31:
            michal = zuuluu.sort;
            tangon = michal.bind(zuuluu)();
            zuuluu = tangon.map;
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.join;
            michal = '_';
            report = zuuluu.bind(tangon)(michal);
 72:
            entity = entity.HermesInternal;
            tangon = entity.concat;
            zuuluu = '';
            michal = '_';
            entity = argBar;
            entity = tangon.bind(zuuluu)(report, michal, entity);
            return entity;
        }
    };
    zuuluu['getQuestContentImpressionTrackerKey'] = report;
    zuuluu['useQuestImpression'] = tangon;
    tangon = function() { // Original name: useQuestImpressionId
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            michal = _closure1_slot12;
            entity = undefined;
            zuuluu = michal.bind(entity)();
            michal = null;
            michal = michal == zuuluu;
            if(michal) { _fun00020_ip = 32; continue _fun00019 }
 22:
            michal = zuuluu.getId;
            entity = michal.bind(zuuluu)();
 32:
            return entity;
        }
    };
    zuuluu['useQuestImpressionId'] = tangon;
    michal = function(argFoo) { // Original name: QuestContentImpressionTrackerInner
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            option = argFoo;
            var _closure2_slot0 = option;
            kiloes = option.visible;
            var _closure2_slot1 = kiloes;
            foxtra = option.visibleChanged;
            var _closure2_slot2 = foxtra;
            sizing = option.focused;
            var _closure2_slot3 = sizing;
            golfie = option.reference;
            backup = option.focusedChanged;
            var _closure2_slot4 = backup;
            offset = option.sourceQuestContent;
            var _closure2_slot5 = offset;
            tangon = option.questOrQuests;
            entity = global;
            zuuluu = entity.Array;
            entity = zuuluu.isArray;
            entity = entity.bind(zuuluu)(tangon);
            yankee = null;
            oscard = null;
            if(entity) { _fun00022_ip = 134; continue _fun00021 }
 98:
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 7;
            zuuluu = zuuluu[entity];
            entity = undefined;
            zuuluu = report.bind(entity)(zuuluu);
            entity = zuuluu.getQuestStatus;
            oscard = entity.bind(zuuluu)(tangon);
 134:
            report = _closure1_slot1;
            verify = _closure1_slot2;
            zuuluu = 16;
            zuuluu = verify[zuuluu];
            tangon = undefined;
            zuuluu = report.bind(tangon)(zuuluu);
            zuuluu = zuuluu.bind(tangon)(oscard);
            romeon = oscard !== zuuluu;
            var _closure2_slot6 = romeon;
            oscard = _closure1_slot5;
            zuuluu = oscard.useRef;
            oscard = zuuluu.bind(oscard)(yankee);
            var _closure2_slot7 = oscard;
            yankee = _closure1_slot0;
            zuuluu = 17;
            zuuluu = verify[zuuluu];
            echoed = yankee.bind(tangon)(zuuluu);
            result = echoed.useStateFromStores;
            zuuluu = _closure1_slot6;
            output = new Array(1);
            output[0] = zuuluu;
            yankee = function() {
                entity = _closure1_slot6;
                michal = entity.questEnrollmentBlockedUntil;
                entity = null;
                entity = entity != michal;
                return entity;
            };
            zuuluu = new Array(0);
            yankee = result.bind(echoed)(output, yankee, zuuluu);
            var _closure2_slot8 = yankee;
            zuuluu = 18;
            zuuluu = verify[zuuluu];
            report = report.bind(tangon)(zuuluu);
            zuuluu = function() {
                entity = function() {
                    _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                        michal = _closure2_slot7;
                        zuuluu = michal.current;
                        michal = null;
                        if(!(michal != zuuluu)) { _fun00024_ip = 37; continue _fun00023 }
 18:
                        entity = _closure2_slot7;
                        michal = entity.current;
                        entity = michal.stop;
                        entity = entity.bind(michal)();
 37:
                        entity = undefined;
                        return entity;
                    }
                };
                return entity;
            };
            zuuluu = report.bind(tangon)(zuuluu);
            verify = _closure1_slot5;
            report = verify.useEffect;
            zuuluu = new Array(13);
            zuuluu[0] = sizing;
            zuuluu[1] = kiloes;
            zuuluu[2] = backup;
            zuuluu[3] = foxtra;
            foxtra = option.questOrQuests;
            zuuluu[4] = foxtra;
            foxtra = option.questContent;
            zuuluu[5] = foxtra;
            foxtra = option.questContentPosition;
            zuuluu[6] = foxtra;
            foxtra = option.questContentRowIndex;
            zuuluu[7] = foxtra;
            foxtra = option.trackGuildAndChannelMetadata;
            zuuluu[8] = foxtra;
            zuuluu[9] = romeon;
            romeon = option.minViewTimeSeconds;
            zuuluu[10] = romeon;
            zuuluu[11] = yankee;
            zuuluu[12] = offset;
            michal = function() {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    report = _closure2_slot3;
                    if(!report) { _fun00026_ip = 14; continue _fun00025 }
 10:
                    report = _closure2_slot1;
 14:
                    michal = _closure2_slot2;
                    if(michal) { _fun00026_ip = 25; continue _fun00025 }
 21:
                    michal = _closure2_slot4;
 25:
                    if(michal) { _fun00026_ip = 32; continue _fun00025 }
 28:
                    michal = _closure2_slot6;
 32:
                    if(!michal) { _fun00026_ip = 38; continue _fun00025 }
 35:
                    michal = report;
 38:
                    zuuluu = michal;
                    if(zuuluu) { _fun00026_ip = 64; continue _fun00025 }
 44:
                    tangon = _closure2_slot2;
                    if(tangon) { _fun00026_ip = 55; continue _fun00025 }
 51:
                    tangon = _closure2_slot4;
 55:
                    if(!tangon) { _fun00026_ip = 61; continue _fun00025 }
 58:
                    tangon = !report;
 61:
                    zuuluu = tangon;
 64:
                    if(zuuluu) { _fun00026_ip = 71; continue _fun00025 }
 67:
                    zuuluu = _closure2_slot6;
 71:
                    if(!zuuluu) { _fun00026_ip = 89; continue _fun00025 }
 74:
                    tangon = _closure2_slot7;
                    report = tangon.current;
                    tangon = null;
                    zuuluu = tangon != report;
 89:
                    if(!zuuluu) { _fun00026_ip = 111; continue _fun00025 }
 92:
                    zuuluu = _closure2_slot7;
                    tangon = zuuluu.current;
                    zuuluu = tangon.stop;
                    zuuluu = zuuluu.bind(tangon)();
 111:
                    if(!michal) { _fun00026_ip = 274; continue _fun00025 }
 117:
                    zuuluu = _closure2_slot7;
                    report = _closure1_slot10;
                    michal = {};
                    tangon = _closure2_slot0;
                    oscard = tangon.questOrQuests;
                    michal['questOrQuests'] = oscard;
                    oscard = tangon.questContent;
                    michal['questContent'] = oscard;
                    oscard = tangon.questContentPosition;
                    michal['questContentPosition'] = oscard;
                    oscard = tangon.questContentRowIndex;
                    michal['questContentRowIndex'] = oscard;
                    oscard = _closure2_slot6;
                    michal['triggeredByStatusChange'] = oscard;
                    oscard = tangon.trackGuildAndChannelMetadata;
                    michal['trackGuildAndChannelMetadata'] = oscard;
                    tangon = tangon.minViewTimeSeconds;
                    michal['minViewTimeSeconds'] = tangon;
                    tangon = _closure2_slot8;
                    michal['isQuestEnrollmentBlocked'] = tangon;
                    tangon = _closure2_slot5;
                    michal['sourceQuestContent'] = tangon;
                    tangon = report.prototype;
                    tangon = Object.create(tangon, {constructor: {value: report}});
                    option = tangon;
                    golfie = michal;
                    michal = new option[report](golfie, oscard);
                    michal = michal instanceof Object ? michal : tangon;
                    zuuluu['current'] = michal;
                    entity = _closure2_slot7;
                    michal = entity.current;
                    entity = michal.start;
                    entity = entity.bind(michal)();
 274:
                    entity = undefined;
                    return entity;
                }
            };
            michal = report.bind(verify)(michal, zuuluu);
            zuuluu = _closure1_slot8;
            entity = _closure1_slot11;
            michal = entity.Provider;
            entity = {};
            entity['value'] = oscard;
            report = option.children;
            report = report.bind(option)(golfie, oscard);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['QuestContentImpressionTrackerInner'] = michal;
    return entity;
})();