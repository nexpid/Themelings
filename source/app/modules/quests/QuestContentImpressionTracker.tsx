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
            entity = _closure1_slot12;
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
    var _closure1_slot13 = tangon;
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
    oscard = oscard.EMPTY_AD_DECISION_DATA;
    var _closure1_slot7 = oscard;
    oscard = 5;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.AnalyticEvents;
    var _closure1_slot8 = oscard;
    oscard = 6;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.jsx;
    var _closure1_slot9 = oscard;
    report = report.Set;
    oscard = report.prototype;
    oscard = Object.create(oscard, {constructor: {value: report}});
    kiloes = oscard;
    report = new kiloes[report](backup);
    report = report instanceof Object ? report : oscard;
    var _closure1_slot10 = report;
    report = function() {
        tangon = _closure1_slot4;
        zuuluu = function(argFoo) { // Original name: QuestContentImpression
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = argFoo;
                zuuluu = this;
                var _closure3_slot0 = zuuluu;
                verify = michal.questOrQuests;
                offset = michal.questContent;
                yankee = michal.adDecisionData;
                report = michal.triggeredByStatusChange;
                oscard = michal.trackGuildAndChannelMetadata;
                option = michal.questContentPosition;
                tangon = michal.questContentRowIndex;
                golfie = michal.minViewTimeSeconds;
                entity = undefined;
                if(!(golfie === entity)) { _fun00004_ip = 69; continue _fun00003 }
 66:
                golfie = 1;
 69:
                michal = michal.isQuestEnrollmentBlocked;
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
                            verify = argFoo;
                            oscard = _closure1_slot0;
                            report = _closure1_slot2;
                            entity = 7;
                            michal = report[entity];
                            entity = undefined;
                            zuuluu = oscard.bind(entity)(michal);
                            michal = zuuluu.getQuestLogger;
                            backup = michal.bind(zuuluu)();
                            romeon = backup.info;
                            michal = verify.config;
                            michal = michal.messages;
                            result = michal.questName;
                            zuuluu = _closure3_slot0;
                            source = zuuluu.minViewTimeSeconds;
                            tangon = 8;
                            michal = report[tangon];
                            yankee = oscard.bind(entity)(michal);
                            offset = yankee.getQuestContentName;
                            michal = zuuluu.questContent;
                            echoed = offset.bind(yankee)(michal);
                            michal = global;
                            offset = michal.HermesInternal;
                            kiloes = offset.concat;
                            foxtra = '';
                            ctrled = ' Quest viewed for at least ';
                            update = 's at ';
                            sequen = foxtra;
                            vacuum = result;
                            yankee = sequen[kiloes](vacuum, ctrled, source, update, echoed, result);
                            offset = {};
                            kiloes = zuuluu.id;
                            offset['impressionId'] = kiloes;
                            offset = romeon.bind(backup)(yankee, offset);
                            romeon = 9;
                            report = report[romeon];
                            oscard = oscard.bind(entity)(report);
                            report = oscard.getQuestPlacementFromQuestContent;
                            zuuluu = zuuluu.questContent;
                            yankee = report.bind(oscard)(zuuluu);
                            zuuluu = null;
                            oscard = zuuluu != yankee;
                            report = false;
                            if(!oscard) { _fun00006_ip = 308; continue _fun00005 }
 200:
                            offset = verify.id;
                            michal = michal.HermesInternal;
                            oscard = michal.concat;
                            michal = '_';
                            yankee = oscard.bind(foxtra)(offset, michal, yankee);
                            oscard = _closure1_slot10;
                            michal = oscard.has;
                            michal = michal.bind(oscard)(yankee);
                            michal = !michal;
                            if(!michal) { _fun00006_ip = 285; continue _fun00005 }
 247:
                            offset = _closure1_slot0;
                            oscard = _closure1_slot2;
                            oscard = oscard[romeon];
                            romeon = offset.bind(entity)(oscard);
                            offset = romeon.isBillableQuestContent;
                            oscard = _closure3_slot0;
                            oscard = oscard.questContent;
                            michal = offset.bind(romeon)(oscard);
 285:
                            report = michal;
                            if(!report) { _fun00006_ip = 308; continue _fun00005 }
 291:
                            offset = _closure1_slot10;
                            oscard = offset.add;
                            oscard = oscard.bind(offset)(yankee);
                            report = michal;
 308:
                            oscard = {};
                            offset = _closure3_slot0;
                            michal = offset.minViewTimeSeconds;
                            oscard['min_view_time_seconds'] = michal;
                            michal = offset.minViewportPercentage;
                            oscard['min_viewport_percentage'] = michal;
                            michal = offset.triggeredByStatusChange;
                            oscard['triggered_by_status_change'] = michal;
                            romeon = _closure1_slot1;
                            yankee = _closure1_slot2;
                            michal = 10;
                            michal = yankee[michal];
                            michal = romeon.bind(entity)(michal);
                            ctrled = michal.bind(entity)();
                            vacuum = oscard;
                            michal = copyDataProperties(vacuum, ctrled);
                            michal = offset.commonProperties;
                            ctrled = michal.bind(offset)(verify);
                            vacuum = oscard;
                            michal = copyDataProperties(vacuum, ctrled);
                            offset = _closure1_slot0;
                            michal = 11;
                            michal = yankee[michal];
                            offset = offset.bind(entity)(michal);
                            michal = offset.getAdUser;
                            michal = michal.bind(offset)();
                            if(!(zuuluu != michal)) { _fun00006_ip = 522; continue _fun00005 }
 430:
                            offset = _closure1_slot0;
                            zuuluu = _closure1_slot2;
                            yankee = 12;
                            zuuluu = zuuluu[yankee];
                            offset = offset.bind(entity)(zuuluu);
                            zuuluu = offset.isIOS;
                            zuuluu = zuuluu.bind(offset)();
                            if(zuuluu) { _fun00006_ip = 508; continue _fun00005 }
 463:
                            offset = _closure1_slot0;
                            zuuluu = _closure1_slot2;
                            zuuluu = zuuluu[yankee];
                            offset = offset.bind(entity)(zuuluu);
                            zuuluu = offset.isAndroid;
                            zuuluu = zuuluu.bind(offset)();
                            if(!zuuluu) { _fun00006_ip = 522; continue _fun00005 }
 492:
                            zuuluu = michal.advertisingId;
                            oscard['android_advertising_id'] = zuuluu;
                            _fun00006_ip = 522; continue _fun00005;
 508:
                            michal = michal.advertisingId;
                            oscard['apple_advertising_id'] = michal;
 522:
                            zuuluu = _closure1_slot0;
                            michal = _closure1_slot2;
                            michal = michal[tangon];
                            tangon = zuuluu.bind(entity)(michal);
                            zuuluu = tangon.trackQuestEvent;
                            michal = {};
                            verify = verify.id;
                            michal['questId'] = verify;
                            option = _closure1_slot8;
                            option = option.QUEST_CONTENT_VIEWED;
                            michal['event'] = option;
                            golfie = _closure3_slot0;
                            golfie = golfie.trackGuildAndChannelMetadata;
                            michal['trackGuildAndChannelMetadata'] = golfie;
                            michal['properties'] = oscard;
                            michal['shouldExtendSession'] = report;
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
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        zuuluu = arguments[0];
                        entity = undefined;
                        if(!(zuuluu === entity)) { _fun00008_ip = 13; continue _fun00007 }
 11:
                        zuuluu = false;
 13:
                        var _closure4_slot0 = zuuluu;
                        zuuluu = _closure3_slot0;
                        report = zuuluu.quests;
                        tangon = report.forEach;
                        michal = function(argFoo) {
                            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                golfie = argFoo;
                                entity = _closure3_slot0;
                                michal = entity.lastBeatTime;
                                entity = null;
                                if(!(entity != michal)) { _fun00010_ip = 343; continue _fun00009 }
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
                                michal = 7;
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
                                if(!michal) { _fun00010_ip = 153; continue _fun00009 }
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
                                entity = 8;
                                entity = verify[entity];
                                zuuluu = michal.bind(zuuluu)(entity);
                                michal = zuuluu.trackQuestEvent;
                                entity = {};
                                verify = golfie.id;
                                entity['questId'] = verify;
                                report = _closure1_slot8;
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
                                tangon = tangon.trackGuildAndChannelMetadata;
                                entity['trackGuildAndChannelMetadata'] = tangon;
                                entity = michal.bind(zuuluu)(entity);
 343:
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
                    entity = {};
                    michal = _closure3_slot0;
                    zuuluu = michal.id;
                    entity['impression_id'] = zuuluu;
                    yankee = michal.adDecisionData;
                    romeon = entity;
                    zuuluu = copyDataProperties(romeon, yankee);
                    tangon = michal.isQuestEnrollmentBlocked;
                    zuuluu = 'is_quest_enrollment_blocked';
                    entity[zuuluu] = tangon;
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    zuuluu = 8;
                    golfie = oscard[zuuluu];
                    tangon = undefined;
                    verify = report.bind(tangon)(golfie);
                    option = verify.getQuestStatus;
                    golfie = argFoo;
                    option = option.bind(verify)(golfie);
                    golfie = 'quest_status';
                    entity[golfie] = option;
                    zuuluu = oscard[zuuluu];
                    oscard = report.bind(tangon)(zuuluu);
                    report = oscard.getContentProperties;
                    tangon = michal.questContent;
                    zuuluu = michal.questContentPosition;
                    michal = michal.questContentRowIndex;
                    yankee = report.bind(oscard)(tangon, zuuluu, michal);
                    romeon = entity;
                    michal = copyDataProperties(romeon, yankee);
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
                    report = michal.adDecisionData;
                    entity['adDecisionData'] = report;
                    report = michal.quests;
                    entity['questOrQuests'] = report;
                    report = michal.questContentRowIndex;
                    entity['questContentRowIndex'] = report;
                    report = michal.questContentPosition;
                    entity['questContentPosition'] = report;
                    report = michal.trackGuildAndChannelMetadata;
                    entity['trackGuildAndChannelMetadata'] = report;
                    entity['triggeredByStatusChange'] = tangon;
                    michal = michal.isQuestEnrollmentBlocked;
                    entity['isQuestEnrollmentBlocked'] = michal;
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
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
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
                            entity = 7;
                            michal = tangon[entity];
                            entity = undefined;
                            report = zuuluu.bind(entity)(michal);
                            michal = report.getQuestLogger;
                            yankee = michal.bind(report)();
                            offset = yankee.info;
                            michal = option.config;
                            michal = michal.messages;
                            backup = michal.questName;
                            michal = 8;
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
                            oscard = _closure1_slot8;
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
                            report = report.trackGuildAndChannelMetadata;
                            michal['trackGuildAndChannelMetadata'] = report;
                            michal = zuuluu.bind(tangon)(michal);
                            return entity;
                        };
                        entity = zuuluu.bind(tangon)(entity);
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 13;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        report = tangon.bind(entity)(zuuluu);
                        tangon = report.isEligibleForQuestsClientMonitoring;
                        zuuluu = 'QuestImpressionTracker';
                        zuuluu = tangon.bind(report)(zuuluu);
                        if(!zuuluu) { _fun00012_ip = 327; continue _fun00011 }
 194:
                        tangon = _closure1_slot1;
                        verify = _closure1_slot2;
                        zuuluu = 14;
                        zuuluu = verify[zuuluu];
                        report = tangon.bind(entity)(zuuluu);
                        tangon = report.increment;
                        zuuluu = {};
                        option = _closure1_slot0;
                        golfie = 15;
                        golfie = verify[golfie];
                        golfie = option.bind(entity)(golfie);
                        golfie = golfie.MetricEvents;
                        golfie = golfie.QUEST_CONTENT_IMPRESSION;
                        zuuluu['name'] = golfie;
                        golfie = 8;
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
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        michal = arguments[0];
                        entity = undefined;
                        if(!(michal === entity)) { _fun00014_ip = 11; continue _fun00013 }
 9:
                        michal = true;
 11:
                        if(!michal) { _fun00014_ip = 34; continue _fun00013 }
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
                backup = _closure1_slot0;
                kiloes = _closure1_slot2;
                foxtra = 16;
                foxtra = kiloes[foxtra];
                backup = backup.bind(entity)(foxtra);
                foxtra = backup.v4;
                foxtra = foxtra.bind(backup)();
                zuuluu['id'] = foxtra;
                foxtra = null;
                if(!(foxtra == yankee)) { _fun00004_ip = 215; continue _fun00003 }
 211:
                yankee = _closure1_slot7;
 215:
                zuuluu['adDecisionData'] = yankee;
                zuuluu['questContent'] = offset;
                zuuluu['questContentPosition'] = option;
                zuuluu['minViewTimeSeconds'] = golfie;
                golfie = 0.5;
                zuuluu['minViewportPercentage'] = golfie;
                golfie = global;
                option = golfie.Array;
                golfie = option.isArray;
                option = golfie.bind(option)(verify);
                golfie = verify;
                if(option) { _fun00004_ip = 290; continue _fun00003 }
 279:
                option = new Array(1);
                option[0] = verify;
                golfie = option;
 290:
                zuuluu['quests'] = golfie;
                zuuluu['trackGuildAndChannelMetadata'] = oscard;
                zuuluu['triggeredByStatusChange'] = report;
                zuuluu['questContentRowIndex'] = tangon;
                zuuluu['isQuestEnrollmentBlocked'] = michal;
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
    var _closure1_slot11 = report;
    oscard = verify.createContext;
    oscard = oscard.bind(verify)(entity);
    var _closure1_slot12 = oscard;
    oscard = 21;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/quests/QuestContentImpressionTracker.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = 0.5;
    zuuluu['MIN_QUEST_CONTENT_VISIBILITY_PERCENTAGE'] = oscard;
    zuuluu['QuestContentImpression'] = report;
    report = function(argFoo, argBar) {
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            zuuluu = argFoo;
            entity = global;
            tangon = entity.Array;
            michal = tangon.isArray;
            michal = michal.bind(tangon)(zuuluu);
            if(michal) { _fun00016_ip = 31; continue _fun00015 }
 24:
            report = zuuluu.id;
            _fun00016_ip = 72; continue _fun00015;
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
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            michal = _closure1_slot13;
            entity = undefined;
            zuuluu = michal.bind(entity)();
            michal = null;
            michal = michal == zuuluu;
            if(michal) { _fun00018_ip = 32; continue _fun00017 }
 22:
            michal = zuuluu.getId;
            entity = michal.bind(zuuluu)();
 32:
            return entity;
        }
    };
    zuuluu['useQuestImpressionId'] = tangon;
    michal = function(argFoo) { // Original name: QuestContentImpressionTrackerInner
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
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
            tangon = option.questOrQuests;
            entity = global;
            zuuluu = entity.Array;
            entity = zuuluu.isArray;
            entity = entity.bind(zuuluu)(tangon);
            output = null;
            oscard = null;
            if(entity) { _fun00020_ip = 124; continue _fun00019 }
 88:
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 8;
            zuuluu = zuuluu[entity];
            entity = undefined;
            zuuluu = report.bind(entity)(zuuluu);
            entity = zuuluu.getQuestStatus;
            oscard = entity.bind(zuuluu)(tangon);
 124:
            report = _closure1_slot1;
            verify = _closure1_slot2;
            zuuluu = 17;
            zuuluu = verify[zuuluu];
            tangon = undefined;
            zuuluu = report.bind(tangon)(zuuluu);
            zuuluu = zuuluu.bind(tangon)(oscard);
            romeon = oscard !== zuuluu;
            var _closure2_slot5 = romeon;
            offset = _closure1_slot0;
            zuuluu = 18;
            zuuluu = verify[zuuluu];
            yankee = offset.bind(tangon)(zuuluu);
            oscard = yankee.useAdDecisionData;
            zuuluu = option.questContent;
            yankee = oscard.bind(yankee)(zuuluu);
            var _closure2_slot6 = yankee;
            oscard = _closure1_slot5;
            zuuluu = oscard.useRef;
            oscard = zuuluu.bind(oscard)(output);
            var _closure2_slot7 = oscard;
            zuuluu = 19;
            zuuluu = verify[zuuluu];
            echoed = offset.bind(tangon)(zuuluu);
            result = echoed.useStateFromStores;
            zuuluu = _closure1_slot6;
            output = new Array(1);
            output[0] = zuuluu;
            offset = function() {
                entity = _closure1_slot6;
                michal = entity.questEnrollmentBlockedUntil;
                entity = null;
                entity = entity != michal;
                return entity;
            };
            zuuluu = new Array(0);
            offset = result.bind(echoed)(output, offset, zuuluu);
            var _closure2_slot8 = offset;
            zuuluu = 20;
            zuuluu = verify[zuuluu];
            report = report.bind(tangon)(zuuluu);
            zuuluu = function() {
                entity = function() {
                    _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                        michal = _closure2_slot7;
                        zuuluu = michal.current;
                        michal = null;
                        if(!(michal != zuuluu)) { _fun00022_ip = 37; continue _fun00021 }
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
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    report = _closure2_slot3;
                    if(!report) { _fun00024_ip = 14; continue _fun00023 }
 10:
                    report = _closure2_slot1;
 14:
                    michal = _closure2_slot2;
                    if(michal) { _fun00024_ip = 25; continue _fun00023 }
 21:
                    michal = _closure2_slot4;
 25:
                    if(michal) { _fun00024_ip = 32; continue _fun00023 }
 28:
                    michal = _closure2_slot5;
 32:
                    if(!michal) { _fun00024_ip = 38; continue _fun00023 }
 35:
                    michal = report;
 38:
                    zuuluu = michal;
                    if(zuuluu) { _fun00024_ip = 64; continue _fun00023 }
 44:
                    tangon = _closure2_slot2;
                    if(tangon) { _fun00024_ip = 55; continue _fun00023 }
 51:
                    tangon = _closure2_slot4;
 55:
                    if(!tangon) { _fun00024_ip = 61; continue _fun00023 }
 58:
                    tangon = !report;
 61:
                    zuuluu = tangon;
 64:
                    if(zuuluu) { _fun00024_ip = 71; continue _fun00023 }
 67:
                    zuuluu = _closure2_slot5;
 71:
                    if(!zuuluu) { _fun00024_ip = 89; continue _fun00023 }
 74:
                    tangon = _closure2_slot7;
                    report = tangon.current;
                    tangon = null;
                    zuuluu = tangon != report;
 89:
                    if(!zuuluu) { _fun00024_ip = 111; continue _fun00023 }
 92:
                    zuuluu = _closure2_slot7;
                    tangon = zuuluu.current;
                    zuuluu = tangon.stop;
                    zuuluu = zuuluu.bind(tangon)();
 111:
                    if(!michal) { _fun00024_ip = 274; continue _fun00023 }
 117:
                    zuuluu = _closure2_slot7;
                    report = _closure1_slot11;
                    michal = {};
                    tangon = _closure2_slot6;
                    michal['adDecisionData'] = tangon;
                    tangon = _closure2_slot0;
                    oscard = tangon.questOrQuests;
                    michal['questOrQuests'] = oscard;
                    oscard = tangon.questContent;
                    michal['questContent'] = oscard;
                    oscard = tangon.questContentPosition;
                    michal['questContentPosition'] = oscard;
                    oscard = tangon.questContentRowIndex;
                    michal['questContentRowIndex'] = oscard;
                    oscard = _closure2_slot5;
                    michal['triggeredByStatusChange'] = oscard;
                    oscard = tangon.trackGuildAndChannelMetadata;
                    michal['trackGuildAndChannelMetadata'] = oscard;
                    tangon = tangon.minViewTimeSeconds;
                    michal['minViewTimeSeconds'] = tangon;
                    tangon = _closure2_slot8;
                    michal['isQuestEnrollmentBlocked'] = tangon;
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
            zuuluu = _closure1_slot9;
            entity = _closure1_slot12;
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