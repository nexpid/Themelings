// app/modules/quests/QuestContentImpressionTracker.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = option;
    tangon = function() { // Original name: useQuestImpression
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot5;
            michal = zuuluu.useContext;
            entity = _closure1_slot10;
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
    var _closure1_slot11 = tangon;
    report = global;
    yankee = report.Object;
    offset = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 1;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot4 = oscard;
    oscard = 2;
    verify = option[oscard];
    oscard = argCor;
    verify = oscard.bind(entity)(verify);
    var _closure1_slot5 = verify;
    oscard = 3;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.AnalyticEvents;
    var _closure1_slot6 = oscard;
    oscard = 4;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.jsx;
    var _closure1_slot7 = oscard;
    report = report.Set;
    oscard = report.prototype;
    oscard = Object.create(oscard, {constructor: {value: report}});
    kiloes = oscard;
    report = new kiloes[report](backup);
    report = report instanceof Object ? report : oscard;
    var _closure1_slot8 = report;
    report = function() {
        tangon = _closure1_slot4;
        zuuluu = function(argFoo) { // Original name: QuestContentImpression
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = argFoo;
                zuuluu = this;
                var _closure3_slot0 = zuuluu;
                option = entity.questOrQuests;
                verify = entity.questContent;
                offset = entity.adDecisionData;
                tangon = entity.triggeredByStatusChange;
                report = entity.trackGuildAndChannelMetadata;
                golfie = entity.questContentPosition;
                michal = entity.questContentRowIndex;
                oscard = entity.minViewTimeSeconds;
                entity = undefined;
                if(!(oscard === entity)) { _fun00004_ip = 69; continue _fun00003 }
 66:
                oscard = 1;
 69:
                backup = _closure1_slot3;
                foxtra = _closure2_slot0;
                foxtra = backup.bind(entity)(zuuluu, foxtra);
                foxtra = false;
                zuuluu['isRunning'] = foxtra;
                foxtra = function() {
                    entity = _closure3_slot0;
                    zuuluu = entity.quests;
                    michal = zuuluu.forEach;
                    entity = function(argFoo) {
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            verify = argFoo;
                            option = _closure1_slot0;
                            report = _closure1_slot2;
                            entity = 5;
                            michal = report[entity];
                            entity = undefined;
                            zuuluu = option.bind(entity)(michal);
                            michal = zuuluu.getQuestLogger;
                            backup = michal.bind(zuuluu)();
                            foxtra = backup.info;
                            michal = verify.config;
                            michal = michal.messages;
                            result = michal.questName;
                            zuuluu = _closure3_slot0;
                            source = zuuluu.minViewTimeSeconds;
                            tangon = 6;
                            michal = report[tangon];
                            yankee = option.bind(entity)(michal);
                            offset = yankee.getQuestContentName;
                            michal = zuuluu.questContent;
                            echoed = offset.bind(yankee)(michal);
                            michal = global;
                            offset = michal.HermesInternal;
                            kiloes = offset.concat;
                            romeon = '';
                            ctrled = ' Quest viewed for at least ';
                            update = 's at ';
                            sequen = romeon;
                            vacuum = result;
                            yankee = sequen[kiloes](vacuum, ctrled, source, update, echoed, result);
                            offset = {};
                            kiloes = zuuluu.id;
                            offset['impressionId'] = kiloes;
                            offset = foxtra.bind(backup)(yankee, offset);
                            yankee = 7;
                            report = report[yankee];
                            option = option.bind(entity)(report);
                            report = option.getQuestPlacementFromQuestContent;
                            zuuluu = zuuluu.questContent;
                            offset = report.bind(option)(zuuluu);
                            zuuluu = null;
                            zuuluu = zuuluu != offset;
                            report = false;
                            if(!zuuluu) { _fun00006_ip = 308; continue _fun00005 }
 200:
                            option = verify.id;
                            michal = michal.HermesInternal;
                            zuuluu = michal.concat;
                            michal = '_';
                            offset = zuuluu.bind(romeon)(option, michal, offset);
                            zuuluu = _closure1_slot8;
                            michal = zuuluu.has;
                            michal = michal.bind(zuuluu)(offset);
                            michal = !michal;
                            if(!michal) { _fun00006_ip = 285; continue _fun00005 }
 247:
                            option = _closure1_slot0;
                            zuuluu = _closure1_slot2;
                            zuuluu = zuuluu[yankee];
                            yankee = option.bind(entity)(zuuluu);
                            option = yankee.isBillableQuestContent;
                            zuuluu = _closure3_slot0;
                            zuuluu = zuuluu.questContent;
                            michal = option.bind(yankee)(zuuluu);
 285:
                            report = michal;
                            if(!report) { _fun00006_ip = 308; continue _fun00005 }
 291:
                            option = _closure1_slot8;
                            zuuluu = option.add;
                            zuuluu = zuuluu.bind(option)(offset);
                            report = michal;
 308:
                            zuuluu = _closure1_slot0;
                            michal = _closure1_slot2;
                            michal = michal[tangon];
                            tangon = zuuluu.bind(entity)(michal);
                            zuuluu = tangon.trackQuestEvent;
                            michal = {};
                            option = verify.id;
                            michal['questId'] = option;
                            golfie = _closure1_slot6;
                            golfie = golfie.QUEST_CONTENT_VIEWED;
                            michal['event'] = golfie;
                            golfie = {};
                            oscard = _closure3_slot0;
                            option = oscard.minViewTimeSeconds;
                            golfie['min_view_time_seconds'] = option;
                            option = oscard.minViewportPercentage;
                            golfie['min_viewport_percentage'] = option;
                            option = oscard.triggeredByStatusChange;
                            golfie['triggered_by_status_change'] = option;
                            option = oscard.commonProperties;
                            ctrled = option.bind(oscard)(verify);
                            vacuum = golfie;
                            option = copyDataProperties(vacuum, ctrled);
                            michal['properties'] = golfie;
                            oscard = oscard.trackGuildAndChannelMetadata;
                            michal['trackGuildAndChannelMetadata'] = oscard;
                            michal['shouldExtendSession'] = report;
                            michal = zuuluu.bind(tangon)(michal);
                            return entity;
                        }
                    };
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                zuuluu['onMinViewTimeReached'] = foxtra;
                foxtra = function() {
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
                                michal = 5;
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
                                entity = 6;
                                entity = verify[entity];
                                zuuluu = michal.bind(zuuluu)(entity);
                                michal = zuuluu.trackQuestEvent;
                                entity = {};
                                verify = golfie.id;
                                entity['questId'] = verify;
                                report = _closure1_slot6;
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
                zuuluu['beat'] = foxtra;
                foxtra = function(argFoo) {
                    entity = {};
                    michal = _closure3_slot0;
                    zuuluu = michal.id;
                    entity['impression_id'] = zuuluu;
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    zuuluu = 7;
                    zuuluu = oscard[zuuluu];
                    tangon = undefined;
                    option = report.bind(tangon)(zuuluu);
                    golfie = option.adDecisionDataToAnalytics;
                    zuuluu = michal.adDecisionData;
                    yankee = golfie.bind(option)(zuuluu);
                    romeon = entity;
                    zuuluu = copyDataProperties(romeon, yankee);
                    zuuluu = 6;
                    golfie = oscard[zuuluu];
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
                zuuluu['commonProperties'] = foxtra;
                foxtra = function(argFoo) {
                    entity = argFoo;
                    michal = entity.triggeredByStatusChange;
                    tangon = _closure3_slot0;
                    entity = tangon.stop;
                    entity = entity.bind(tangon)();
                    zuuluu = _closure2_slot0;
                    entity = {};
                    report = tangon.questContent;
                    entity['questContent'] = report;
                    report = tangon.adDecisionData;
                    entity['adDecisionData'] = report;
                    report = tangon.quests;
                    entity['questOrQuests'] = report;
                    report = tangon.questContentRowIndex;
                    entity['questContentRowIndex'] = report;
                    report = tangon.questContentPosition;
                    entity['questContentPosition'] = report;
                    tangon = tangon.trackGuildAndChannelMetadata;
                    entity['trackGuildAndChannelMetadata'] = tangon;
                    entity['triggeredByStatusChange'] = michal;
                    michal = zuuluu.prototype;
                    michal = Object.create(michal, {constructor: {value: zuuluu}});
                    golfie = michal;
                    oscard = entity;
                    entity = new golfie[zuuluu](oscard, report);
                    entity = entity instanceof Object ? entity : michal;
                    return entity;
                };
                zuuluu['clone'] = foxtra;
                foxtra = function() {
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
                            entity = 5;
                            michal = tangon[entity];
                            entity = undefined;
                            report = zuuluu.bind(entity)(michal);
                            michal = report.getQuestLogger;
                            yankee = michal.bind(report)();
                            offset = yankee.info;
                            michal = option.config;
                            michal = michal.messages;
                            backup = michal.questName;
                            michal = 6;
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
                            oscard = _closure1_slot6;
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
                        entity = 8;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        report = tangon.bind(entity)(zuuluu);
                        tangon = report.isEligibleForQuestsClientMonitoring;
                        zuuluu = 'QuestImpressionTracker';
                        zuuluu = tangon.bind(report)(zuuluu);
                        if(!zuuluu) { _fun00012_ip = 331; continue _fun00011 }
 198:
                        tangon = _closure1_slot1;
                        verify = _closure1_slot2;
                        zuuluu = 9;
                        zuuluu = verify[zuuluu];
                        report = tangon.bind(entity)(zuuluu);
                        tangon = report.increment;
                        zuuluu = {};
                        option = _closure1_slot0;
                        golfie = 10;
                        golfie = verify[golfie];
                        golfie = option.bind(entity)(golfie);
                        golfie = golfie.MetricEvents;
                        golfie = golfie.QUEST_CONTENT_IMPRESSION;
                        zuuluu['name'] = golfie;
                        golfie = 6;
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
 331:
                        zuuluu = _closure3_slot0;
                        michal = true;
                        zuuluu['isRunning'] = michal;
                        return entity;
                    }
                };
                zuuluu['start'] = foxtra;
                romeon = function() {
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
                zuuluu['stop'] = romeon;
                romeon = _closure1_slot0;
                foxtra = _closure1_slot2;
                yankee = 11;
                yankee = foxtra[yankee];
                romeon = romeon.bind(entity)(yankee);
                yankee = romeon.v4;
                yankee = yankee.bind(romeon)();
                zuuluu['id'] = yankee;
                zuuluu['adDecisionData'] = offset;
                zuuluu['questContent'] = verify;
                zuuluu['questContentPosition'] = golfie;
                zuuluu['minViewTimeSeconds'] = oscard;
                oscard = 0.5;
                zuuluu['minViewportPercentage'] = oscard;
                oscard = global;
                golfie = oscard.Array;
                oscard = golfie.isArray;
                golfie = oscard.bind(golfie)(option);
                oscard = option;
                if(golfie) { _fun00004_ip = 286; continue _fun00003 }
 275:
                golfie = new Array(1);
                golfie[0] = option;
                oscard = golfie;
 286:
                zuuluu['quests'] = oscard;
                zuuluu['trackGuildAndChannelMetadata'] = report;
                zuuluu['triggeredByStatusChange'] = tangon;
                zuuluu['questContentRowIndex'] = michal;
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
    var _closure1_slot9 = report;
    oscard = verify.createContext;
    oscard = oscard.bind(verify)(entity);
    var _closure1_slot10 = oscard;
    oscard = 14;
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
            _fun00016_ip = 74; continue _fun00015;
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
 74:
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
            michal = _closure1_slot11;
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
            backup = option.visible;
            var _closure2_slot1 = backup;
            romeon = option.visibleChanged;
            var _closure2_slot2 = romeon;
            golfie = option.reference;
            kiloes = option.focused;
            var _closure2_slot3 = kiloes;
            foxtra = option.focusedChanged;
            var _closure2_slot4 = foxtra;
            oscard = option.impression;
            var _closure2_slot5 = oscard;
            tangon = option.questOrQuests;
            entity = global;
            zuuluu = entity.Array;
            entity = zuuluu.isArray;
            entity = entity.bind(zuuluu)(tangon);
            report = null;
            if(entity) { _fun00020_ip = 134; continue _fun00019 }
 98:
            verify = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 6;
            zuuluu = zuuluu[entity];
            entity = undefined;
            zuuluu = verify.bind(entity)(zuuluu);
            entity = zuuluu.getQuestStatus;
            report = entity.bind(zuuluu)(tangon);
 134:
            offset = _closure1_slot1;
            verify = _closure1_slot2;
            zuuluu = 12;
            zuuluu = verify[zuuluu];
            tangon = undefined;
            zuuluu = offset.bind(tangon)(zuuluu);
            zuuluu = zuuluu.bind(tangon)(report);
            yankee = report !== zuuluu;
            var _closure2_slot6 = yankee;
            report = _closure1_slot0;
            zuuluu = 13;
            zuuluu = verify[zuuluu];
            verify = report.bind(tangon)(zuuluu);
            report = verify.useAdDecisionData;
            zuuluu = option.questContent;
            offset = report.bind(verify)(zuuluu);
            var _closure2_slot7 = offset;
            sizing = _closure1_slot5;
            verify = sizing.useEffect;
            report = new Array(1);
            report[0] = oscard;
            zuuluu = function() {
                entity = function() {
                    _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                        michal = _closure2_slot5;
                        zuuluu = michal.current;
                        michal = null;
                        if(!(michal != zuuluu)) { _fun00022_ip = 37; continue _fun00021 }
 18:
                        entity = _closure2_slot5;
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
            zuuluu = verify.bind(sizing)(zuuluu, report);
            verify = _closure1_slot5;
            report = verify.useEffect;
            zuuluu = new Array(13);
            zuuluu[0] = kiloes;
            zuuluu[1] = backup;
            zuuluu[2] = oscard;
            zuuluu[3] = foxtra;
            zuuluu[4] = romeon;
            romeon = option.questOrQuests;
            zuuluu[5] = romeon;
            romeon = option.questContent;
            zuuluu[6] = romeon;
            romeon = option.questContentPosition;
            zuuluu[7] = romeon;
            romeon = option.questContentRowIndex;
            zuuluu[8] = romeon;
            romeon = option.trackGuildAndChannelMetadata;
            zuuluu[9] = romeon;
            zuuluu[10] = yankee;
            yankee = option.minViewTimeSeconds;
            zuuluu[11] = yankee;
            zuuluu[12] = offset;
            michal = function() {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    tangon = _closure2_slot3;
                    if(!tangon) { _fun00024_ip = 14; continue _fun00023 }
 10:
                    tangon = _closure2_slot1;
 14:
                    entity = _closure2_slot2;
                    if(entity) { _fun00024_ip = 25; continue _fun00023 }
 21:
                    entity = _closure2_slot4;
 25:
                    if(entity) { _fun00024_ip = 32; continue _fun00023 }
 28:
                    entity = _closure2_slot6;
 32:
                    if(!entity) { _fun00024_ip = 38; continue _fun00023 }
 35:
                    entity = tangon;
 38:
                    michal = entity;
                    if(michal) { _fun00024_ip = 64; continue _fun00023 }
 44:
                    zuuluu = _closure2_slot2;
                    if(zuuluu) { _fun00024_ip = 55; continue _fun00023 }
 51:
                    zuuluu = _closure2_slot4;
 55:
                    if(!zuuluu) { _fun00024_ip = 61; continue _fun00023 }
 58:
                    zuuluu = !tangon;
 61:
                    michal = zuuluu;
 64:
                    if(michal) { _fun00024_ip = 71; continue _fun00023 }
 67:
                    michal = _closure2_slot6;
 71:
                    if(!michal) { _fun00024_ip = 89; continue _fun00023 }
 74:
                    zuuluu = _closure2_slot5;
                    tangon = zuuluu.current;
                    zuuluu = null;
                    michal = zuuluu != tangon;
 89:
                    if(!michal) { _fun00024_ip = 111; continue _fun00023 }
 92:
                    michal = _closure2_slot5;
                    zuuluu = michal.current;
                    michal = zuuluu.stop;
                    michal = michal.bind(zuuluu)();
 111:
                    if(!entity) { _fun00024_ip = 261; continue _fun00023 }
 117:
                    entity = _closure2_slot5;
                    tangon = _closure1_slot9;
                    michal = {};
                    zuuluu = _closure2_slot7;
                    michal['adDecisionData'] = zuuluu;
                    zuuluu = _closure2_slot0;
                    oscard = zuuluu.questOrQuests;
                    michal['questOrQuests'] = oscard;
                    oscard = zuuluu.questContent;
                    michal['questContent'] = oscard;
                    oscard = zuuluu.questContentPosition;
                    michal['questContentPosition'] = oscard;
                    oscard = zuuluu.questContentRowIndex;
                    michal['questContentRowIndex'] = oscard;
                    report = _closure2_slot6;
                    michal['triggeredByStatusChange'] = report;
                    report = zuuluu.trackGuildAndChannelMetadata;
                    michal['trackGuildAndChannelMetadata'] = report;
                    zuuluu = zuuluu.minViewTimeSeconds;
                    michal['minViewTimeSeconds'] = zuuluu;
                    zuuluu = tangon.prototype;
                    zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
                    option = zuuluu;
                    golfie = michal;
                    michal = new option[tangon](golfie, oscard);
                    michal = michal instanceof Object ? michal : zuuluu;
                    entity['current'] = michal;
                    michal = entity.current;
                    entity = michal.start;
                    entity = entity.bind(michal)();
 261:
                    entity = undefined;
                    return entity;
                }
            };
            michal = report.bind(verify)(michal, zuuluu);
            zuuluu = _closure1_slot7;
            entity = _closure1_slot10;
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