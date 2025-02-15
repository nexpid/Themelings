// app/modules/quests/QuestContentImpressionTracker.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    golf = argBar;
    oscar = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    var _closure1_slot2 = options;
    tango = function() { // Original name: useQuestImpression
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = _closure1_slot5;
            mike = zulu.useContext;
            entity = _closure1_slot9;
            mike = mike.bind(zulu)(entity);
            entity = null;
            zulu = entity == mike;
            entity = undefined;
            if(zulu) { _fun00002_ip = 38; continue _fun00001 }
 33:
            entity = mike.current;
 38:
            return entity;
        }
    };
    var _closure1_slot10 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = options[entity];
    entity = undefined;
    report = oscar.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = options[report];
    report = oscar.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    oscar = options[report];
    report = argCorge;
    verify = report.bind(entity)(oscar);
    var _closure1_slot5 = verify;
    report = 3;
    report = options[report];
    report = golf.bind(entity)(report);
    report = report.AnalyticEvents;
    var _closure1_slot6 = report;
    report = 4;
    report = options[report];
    report = golf.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot7 = report;
    report = function() {
        tango = _closure1_slot4;
        zulu = function(argFoo) { // Original name: QuestContentImpression
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = argFoo;
                zulu = this;
                var _closure3_slot0 = zulu;
                options = entity.questOrQuests;
                verify = entity.questContent;
                offset = entity.questDecisionId;
                tango = entity.triggeredByStatusChange;
                report = entity.trackGuildAndChannelMetadata;
                golf = entity.questContentPosition;
                mike = entity.questContentRowIndex;
                oscar = entity.minViewTimeSeconds;
                entity = undefined;
                if(!(oscar === entity)) { _fun00004_ip = 69; continue _fun00003 }
 66:
                oscar = 1;
 69:
                backup = _closure1_slot3;
                foxtrot = _closure2_slot0;
                foxtrot = backup.bind(entity)(zulu, foxtrot);
                foxtrot = false;
                zulu['isRunning'] = foxtrot;
                foxtrot = function() {
                    entity = _closure3_slot0;
                    zulu = entity.quests;
                    mike = zulu.forEach;
                    entity = function(argFoo) {
                        options = argFoo;
                        zulu = _closure1_slot0;
                        tango = _closure1_slot2;
                        entity = 5;
                        mike = tango[entity];
                        entity = undefined;
                        report = zulu.bind(entity)(mike);
                        mike = report.getQuestLogger;
                        yankee = mike.bind(report)();
                        offset = yankee.info;
                        mike = options.config;
                        mike = mike.messages;
                        sizing = mike.questName;
                        report = _closure3_slot0;
                        echo = report.minViewTimeSeconds;
                        mike = 6;
                        golf = tango[mike];
                        romeo = zulu.bind(entity)(golf);
                        verify = romeo.getQuestContentName;
                        golf = report.questContent;
                        output = verify.bind(romeo)(golf);
                        golf = global;
                        golf = golf.HermesInternal;
                        foxtrot = golf.concat;
                        control = '';
                        update = ' Quest viewed for at least ';
                        result = 's at ';
                        source = sizing;
                        verify = control[foxtrot](source, update, echo, result, output, sizing);
                        golf = {};
                        romeo = report.id;
                        golf['impressionId'] = romeo;
                        golf = offset.bind(yankee)(verify, golf);
                        mike = tango[mike];
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.trackQuestEvent;
                        mike = {};
                        golf = options.id;
                        mike['questId'] = golf;
                        oscar = _closure1_slot6;
                        oscar = oscar.QUEST_CONTENT_VIEWED;
                        mike['event'] = oscar;
                        oscar = {};
                        golf = report.minViewTimeSeconds;
                        oscar['min_view_time_seconds'] = golf;
                        golf = report.minViewportPercentage;
                        oscar['min_viewport_percentage'] = golf;
                        golf = report.triggeredByStatusChange;
                        oscar['triggered_by_status_change'] = golf;
                        golf = report.commonProperties;
                        update = golf.bind(report)(options);
                        source = oscar;
                        golf = copyDataProperties(source, update);
                        mike['properties'] = oscar;
                        report = report.trackGuildAndChannelMetadata;
                        mike['trackGuildAndChannelMetadata'] = report;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                };
                zulu['onMinViewTimeReached'] = foxtrot;
                foxtrot = function() {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        zulu = arguments[0];
                        entity = undefined;
                        if(!(zulu === entity)) { _fun00006_ip = 13; continue _fun00005 }
 11:
                        zulu = false;
 13:
                        var _closure4_slot0 = zulu;
                        zulu = _closure3_slot0;
                        report = zulu.quests;
                        tango = report.forEach;
                        mike = function(argFoo) {
                            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                                golf = argFoo;
                                entity = _closure3_slot0;
                                mike = entity.lastBeatTime;
                                entity = null;
                                if(!(entity != mike)) { _fun00008_ip = 343; continue _fun00007 }
 25:
                                entity = global;
                                report = entity.Math;
                                zulu = report.round;
                                oscar = entity.Date;
                                mike = oscar.now;
                                oscar = mike.bind(oscar)();
                                mike = _closure3_slot0;
                                mike = mike.lastBeatTime;
                                mike = oscar - mike;
                                oscar = zulu.bind(report)(mike);
                                options = _closure1_slot0;
                                zulu = _closure1_slot2;
                                mike = 5;
                                mike = zulu[mike];
                                zulu = undefined;
                                options = options.bind(zulu)(mike);
                                mike = options.getQuestLogger;
                                offset = mike.bind(options)();
                                verify = offset.info;
                                mike = golf.config;
                                mike = mike.messages;
                                kilo = mike.questName;
                                mike = _closure4_slot0;
                                backup = '';
                                foxtrot = backup;
                                if(!mike) { _fun00008_ip = 153; continue _fun00007 }
 147:
                                foxtrot = 'terminal ';
 153:
                                entity = entity.HermesInternal;
                                romeo = entity.concat;
                                update = ' Quest impression ';
                                result = 'heartbeat: ';
                                sizing = 'ms since last heartbeat';
                                control = backup;
                                source = kilo;
                                echo = foxtrot;
                                output = oscar;
                                mike = control[romeo](source, update, echo, result, output, sizing, kilo);
                                entity = {};
                                tango = _closure3_slot0;
                                yankee = tango.id;
                                entity['impressionId'] = yankee;
                                entity = verify.bind(offset)(mike, entity);
                                mike = _closure1_slot0;
                                verify = _closure1_slot2;
                                entity = 6;
                                entity = verify[entity];
                                zulu = mike.bind(zulu)(entity);
                                mike = zulu.trackQuestEvent;
                                entity = {};
                                verify = golf.id;
                                entity['questId'] = verify;
                                report = _closure1_slot6;
                                report = report.QUEST_CONTENT_VIEW_TIME;
                                entity['event'] = report;
                                report = {};
                                options = _closure4_slot0;
                                report['is_termination_beat'] = options;
                                report['viewed_time_ms'] = oscar;
                                oscar = tango.triggeredByStatusChange;
                                report['triggered_by_status_change'] = oscar;
                                oscar = tango.commonProperties;
                                update = oscar.bind(tango)(golf);
                                source = report;
                                oscar = copyDataProperties(source, update);
                                entity['properties'] = report;
                                tango = tango.trackGuildAndChannelMetadata;
                                entity['trackGuildAndChannelMetadata'] = tango;
                                entity = mike.bind(zulu)(entity);
 343:
                                entity = undefined;
                                return entity;
                            }
                        };
                        mike = tango.bind(report)(mike);
                        mike = global;
                        tango = mike.Date;
                        mike = tango.now;
                        mike = mike.bind(tango)();
                        zulu['lastBeatTime'] = mike;
                        return entity;
                    }
                };
                zulu['beat'] = foxtrot;
                foxtrot = function(argFoo) {
                    entity = {};
                    mike = _closure3_slot0;
                    zulu = mike.id;
                    entity['impression_id'] = zulu;
                    zulu = mike.questDecisionId;
                    entity['decision_id'] = zulu;
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    zulu = 6;
                    golf = oscar[zulu];
                    tango = undefined;
                    verify = report.bind(tango)(golf);
                    options = verify.getQuestStatus;
                    golf = argFoo;
                    golf = options.bind(verify)(golf);
                    entity['quest_status'] = golf;
                    zulu = oscar[zulu];
                    oscar = report.bind(tango)(zulu);
                    report = oscar.getContentProperties;
                    tango = mike.questContent;
                    zulu = mike.questContentPosition;
                    mike = mike.questContentRowIndex;
                    yankee = report.bind(oscar)(tango, zulu, mike);
                    romeo = entity;
                    mike = copyDataProperties(romeo, yankee);
                    return entity;
                };
                zulu['commonProperties'] = foxtrot;
                foxtrot = function(argFoo) {
                    entity = argFoo;
                    mike = entity.triggeredByStatusChange;
                    tango = _closure3_slot0;
                    entity = tango.stop;
                    entity = entity.bind(tango)();
                    zulu = _closure2_slot0;
                    entity = {};
                    report = tango.questContent;
                    entity['questContent'] = report;
                    report = tango.questDecisionId;
                    entity['questDecisionId'] = report;
                    report = tango.quests;
                    entity['questOrQuests'] = report;
                    report = tango.questContentRowIndex;
                    entity['questContentRowIndex'] = report;
                    report = tango.questContentPosition;
                    entity['questContentPosition'] = report;
                    tango = tango.trackGuildAndChannelMetadata;
                    entity['trackGuildAndChannelMetadata'] = tango;
                    entity['triggeredByStatusChange'] = mike;
                    mike = zulu.prototype;
                    mike = Object.create(mike, {constructor: {value: zulu}});
                    golf = mike;
                    oscar = entity;
                    entity = new golf[zulu](oscar, report);
                    entity = entity instanceof Object ? entity : mike;
                    return entity;
                };
                zulu['clone'] = foxtrot;
                foxtrot = function() {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        zulu = _closure3_slot0;
                        report = zulu.stop;
                        tango = false;
                        tango = report.bind(zulu)(tango);
                        oscar = global;
                        report = oscar.Date;
                        tango = report.now;
                        tango = tango.bind(report)();
                        zulu['lastBeatTime'] = tango;
                        options = oscar.window;
                        golf = options.setInterval;
                        report = function() {
                            mike = _closure3_slot0;
                            entity = mike.beat;
                            entity = entity.bind(mike)();
                            return entity;
                        };
                        tango = 60000;
                        tango = golf.bind(options)(report, tango);
                        zulu['heartbeatTimeoutId'] = tango;
                        options = oscar.window;
                        golf = options.setTimeout;
                        report = zulu.onMinViewTimeReached;
                        verify = zulu.minViewTimeSeconds;
                        tango = 1000;
                        tango = tango * verify;
                        tango = golf.bind(options)(report, tango);
                        zulu['minViewTimeReachedTimeoutId'] = tango;
                        tango = zulu.quests;
                        zulu = tango.forEach;
                        entity = function(argFoo) {
                            options = argFoo;
                            zulu = _closure1_slot0;
                            tango = _closure1_slot2;
                            entity = 5;
                            mike = tango[entity];
                            entity = undefined;
                            report = zulu.bind(entity)(mike);
                            mike = report.getQuestLogger;
                            yankee = mike.bind(report)();
                            offset = yankee.info;
                            mike = options.config;
                            mike = mike.messages;
                            backup = mike.questName;
                            mike = 6;
                            report = tango[mike];
                            romeo = zulu.bind(entity)(report);
                            verify = romeo.getQuestContentName;
                            report = _closure3_slot0;
                            golf = report.questContent;
                            foxtrot = verify.bind(romeo)(golf);
                            golf = global;
                            golf = golf.HermesInternal;
                            romeo = golf.concat;
                            verify = '';
                            golf = ' Quest became visible at ';
                            verify = romeo.bind(verify)(backup, golf, foxtrot);
                            golf = {};
                            romeo = report.id;
                            golf['impressionId'] = romeo;
                            golf = offset.bind(yankee)(verify, golf);
                            mike = tango[mike];
                            tango = zulu.bind(entity)(mike);
                            zulu = tango.trackQuestEvent;
                            mike = {};
                            golf = options.id;
                            mike['questId'] = golf;
                            oscar = _closure1_slot6;
                            oscar = oscar.QUEST_CONTENT_LOADED;
                            mike['event'] = oscar;
                            oscar = {};
                            golf = report.triggeredByStatusChange;
                            oscar['triggered_by_status_change'] = golf;
                            golf = report.commonProperties;
                            sizing = golf.bind(report)(options);
                            output = oscar;
                            golf = copyDataProperties(output, sizing);
                            mike['properties'] = oscar;
                            report = report.trackGuildAndChannelMetadata;
                            mike['trackGuildAndChannelMetadata'] = report;
                            mike = zulu.bind(tango)(mike);
                            return entity;
                        };
                        entity = zulu.bind(tango)(entity);
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        entity = 7;
                        zulu = zulu[entity];
                        entity = undefined;
                        report = tango.bind(entity)(zulu);
                        tango = report.isEligibleForQuestsClientMonitoring;
                        zulu = 'QuestImpressionTracker';
                        zulu = tango.bind(report)(zulu);
                        if(!zulu) { _fun00010_ip = 331; continue _fun00009 }
 198:
                        tango = _closure1_slot1;
                        verify = _closure1_slot2;
                        zulu = 8;
                        zulu = verify[zulu];
                        report = tango.bind(entity)(zulu);
                        tango = report.increment;
                        zulu = {};
                        options = _closure1_slot0;
                        golf = 9;
                        golf = verify[golf];
                        golf = options.bind(entity)(golf);
                        golf = golf.MetricEvents;
                        golf = golf.QUEST_CONTENT_IMPRESSION;
                        zulu['name'] = golf;
                        golf = 6;
                        golf = verify[golf];
                        verify = options.bind(entity)(golf);
                        options = verify.getQuestContentName;
                        golf = _closure3_slot0;
                        golf = golf.questContent;
                        options = options.bind(verify)(golf);
                        oscar = oscar.HermesInternal;
                        golf = oscar.concat;
                        oscar = 'quest_content:';
                        golf = golf.bind(oscar)(options);
                        oscar = new Array(1);
                        oscar[0] = golf;
                        zulu['tags'] = oscar;
                        zulu = tango.bind(report)(zulu);
 331:
                        zulu = _closure3_slot0;
                        mike = true;
                        zulu['isRunning'] = mike;
                        return entity;
                    }
                };
                zulu['start'] = foxtrot;
                romeo = function() {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        mike = arguments[0];
                        entity = undefined;
                        if(!(mike === entity)) { _fun00012_ip = 11; continue _fun00011 }
 9:
                        mike = true;
 11:
                        if(!mike) { _fun00012_ip = 34; continue _fun00011 }
 14:
                        tango = _closure3_slot0;
                        zulu = tango.beat;
                        mike = true;
                        mike = zulu.bind(tango)(mike);
 34:
                        zulu = _closure3_slot0;
                        zulu['lastBeatTime'] = entity;
                        mike = global;
                        report = mike.clearInterval;
                        tango = zulu.heartbeatTimeoutId;
                        tango = report.bind(entity)(tango);
                        tango = mike.clearTimeout;
                        mike = zulu.minViewTimeReachedTimeoutId;
                        mike = tango.bind(entity)(mike);
                        mike = false;
                        zulu['isRunning'] = mike;
                        return entity;
                    }
                };
                zulu['stop'] = romeo;
                romeo = _closure1_slot0;
                foxtrot = _closure1_slot2;
                yankee = 10;
                yankee = foxtrot[yankee];
                romeo = romeo.bind(entity)(yankee);
                yankee = romeo.v4;
                yankee = yankee.bind(romeo)();
                zulu['id'] = yankee;
                zulu['questDecisionId'] = offset;
                zulu['questContent'] = verify;
                zulu['questContentPosition'] = golf;
                zulu['minViewTimeSeconds'] = oscar;
                oscar = 0.5;
                zulu['minViewportPercentage'] = oscar;
                oscar = global;
                golf = oscar.Array;
                oscar = golf.isArray;
                golf = oscar.bind(golf)(options);
                oscar = options;
                if(golf) { _fun00004_ip = 286; continue _fun00003 }
 275:
                golf = new Array(1);
                golf[0] = options;
                oscar = golf;
 286:
                zulu['quests'] = oscar;
                zulu['trackGuildAndChannelMetadata'] = report;
                zulu['triggeredByStatusChange'] = tango;
                zulu['questContentRowIndex'] = mike;
                return entity;
            }
        };
        var _closure2_slot0 = zulu;
        entity = {};
        report = 'getId';
        entity['key'] = report;
        mike = function() { // Original name: value
            entity = this;
            entity = entity.id;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(1);
        mike[0] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    report = report.bind(entity)();
    var _closure1_slot8 = report;
    oscar = verify.createContext;
    oscar = oscar.bind(verify)(entity);
    var _closure1_slot9 = oscar;
    oscar = 14;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/quests/QuestContentImpressionTracker.tsx';
    oscar = golf.bind(options)(oscar);
    oscar = 0.5;
    zulu['MIN_QUEST_CONTENT_VISIBILITY_PERCENTAGE'] = oscar;
    zulu['QuestContentImpression'] = report;
    report = function(argFoo, argBar) {
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zulu = argFoo;
            entity = global;
            tango = entity.Array;
            mike = tango.isArray;
            mike = mike.bind(tango)(zulu);
            if(mike) { _fun00014_ip = 31; continue _fun00013 }
 24:
            report = zulu.id;
            _fun00014_ip = 74; continue _fun00013;
 31:
            mike = zulu.sort;
            tango = mike.bind(zulu)();
            zulu = tango.map;
            mike = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            tango = zulu.bind(tango)(mike);
            zulu = tango.join;
            mike = '_';
            report = zulu.bind(tango)(mike);
 74:
            entity = entity.HermesInternal;
            tango = entity.concat;
            zulu = '';
            mike = '_';
            entity = argBar;
            entity = tango.bind(zulu)(report, mike, entity);
            return entity;
        }
    };
    zulu['getQuestContentImpressionTrackerKey'] = report;
    zulu['useQuestImpression'] = tango;
    tango = function() { // Original name: useQuestImpressionId
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            mike = _closure1_slot10;
            entity = undefined;
            zulu = mike.bind(entity)();
            mike = null;
            mike = mike == zulu;
            if(mike) { _fun00016_ip = 32; continue _fun00015 }
 22:
            mike = zulu.getId;
            entity = mike.bind(zulu)();
 32:
            return entity;
        }
    };
    zulu['useQuestImpressionId'] = tango;
    mike = function(argFoo) { // Original name: QuestContentImpressionTrackerInner
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            options = argFoo;
            var _closure2_slot0 = options;
            backup = options.visible;
            var _closure2_slot1 = backup;
            romeo = options.visibleChanged;
            var _closure2_slot2 = romeo;
            golf = options.reference;
            kilo = options.focused;
            var _closure2_slot3 = kilo;
            foxtrot = options.focusedChanged;
            var _closure2_slot4 = foxtrot;
            oscar = options.impression;
            var _closure2_slot5 = oscar;
            tango = options.questOrQuests;
            entity = global;
            zulu = entity.Array;
            entity = zulu.isArray;
            entity = entity.bind(zulu)(tango);
            report = null;
            if(entity) { _fun00018_ip = 134; continue _fun00017 }
 98:
            verify = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 6;
            zulu = zulu[entity];
            entity = undefined;
            zulu = verify.bind(entity)(zulu);
            entity = zulu.getQuestStatus;
            report = entity.bind(zulu)(tango);
 134:
            verify = _closure1_slot1;
            sizing = _closure1_slot2;
            zulu = 11;
            zulu = sizing[zulu];
            tango = undefined;
            zulu = verify.bind(tango)(zulu);
            zulu = zulu.bind(tango)(report);
            yankee = report !== zulu;
            var _closure2_slot6 = yankee;
            offset = _closure1_slot0;
            zulu = 12;
            zulu = sizing[zulu];
            verify = offset.bind(tango)(zulu);
            report = verify.useQuestDecisionId;
            zulu = 13;
            zulu = sizing[zulu];
            sizing = offset.bind(tango)(zulu);
            offset = sizing.getQuestPlacementFromQuestContent;
            zulu = options.questContent;
            zulu = offset.bind(sizing)(zulu);
            offset = report.bind(verify)(zulu);
            var _closure2_slot7 = offset;
            sizing = _closure1_slot5;
            verify = sizing.useEffect;
            report = new Array(1);
            report[0] = oscar;
            zulu = function() {
                entity = function() {
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        mike = _closure2_slot5;
                        zulu = mike.current;
                        mike = null;
                        if(!(mike != zulu)) { _fun00020_ip = 37; continue _fun00019 }
 18:
                        entity = _closure2_slot5;
                        mike = entity.current;
                        entity = mike.stop;
                        entity = entity.bind(mike)();
 37:
                        entity = undefined;
                        return entity;
                    }
                };
                return entity;
            };
            zulu = verify.bind(sizing)(zulu, report);
            verify = _closure1_slot5;
            report = verify.useEffect;
            zulu = new Array(13);
            zulu[0] = kilo;
            zulu[1] = backup;
            zulu[2] = oscar;
            zulu[3] = foxtrot;
            zulu[4] = romeo;
            romeo = options.questOrQuests;
            zulu[5] = romeo;
            romeo = options.questContent;
            zulu[6] = romeo;
            romeo = options.questContentPosition;
            zulu[7] = romeo;
            romeo = options.questContentRowIndex;
            zulu[8] = romeo;
            romeo = options.trackGuildAndChannelMetadata;
            zulu[9] = romeo;
            zulu[10] = yankee;
            yankee = options.minViewTimeSeconds;
            zulu[11] = yankee;
            zulu[12] = offset;
            mike = function() {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    tango = _closure2_slot3;
                    if(!tango) { _fun00022_ip = 14; continue _fun00021 }
 10:
                    tango = _closure2_slot1;
 14:
                    entity = _closure2_slot2;
                    if(entity) { _fun00022_ip = 25; continue _fun00021 }
 21:
                    entity = _closure2_slot4;
 25:
                    if(entity) { _fun00022_ip = 32; continue _fun00021 }
 28:
                    entity = _closure2_slot6;
 32:
                    if(!entity) { _fun00022_ip = 38; continue _fun00021 }
 35:
                    entity = tango;
 38:
                    mike = entity;
                    if(mike) { _fun00022_ip = 64; continue _fun00021 }
 44:
                    zulu = _closure2_slot2;
                    if(zulu) { _fun00022_ip = 55; continue _fun00021 }
 51:
                    zulu = _closure2_slot4;
 55:
                    if(!zulu) { _fun00022_ip = 61; continue _fun00021 }
 58:
                    zulu = !tango;
 61:
                    mike = zulu;
 64:
                    if(mike) { _fun00022_ip = 71; continue _fun00021 }
 67:
                    mike = _closure2_slot6;
 71:
                    if(!mike) { _fun00022_ip = 89; continue _fun00021 }
 74:
                    zulu = _closure2_slot5;
                    tango = zulu.current;
                    zulu = null;
                    mike = zulu != tango;
 89:
                    if(!mike) { _fun00022_ip = 111; continue _fun00021 }
 92:
                    mike = _closure2_slot5;
                    zulu = mike.current;
                    mike = zulu.stop;
                    mike = mike.bind(zulu)();
 111:
                    if(!entity) { _fun00022_ip = 261; continue _fun00021 }
 117:
                    entity = _closure2_slot5;
                    tango = _closure1_slot8;
                    mike = {};
                    zulu = _closure2_slot7;
                    mike['questDecisionId'] = zulu;
                    zulu = _closure2_slot0;
                    oscar = zulu.questOrQuests;
                    mike['questOrQuests'] = oscar;
                    oscar = zulu.questContent;
                    mike['questContent'] = oscar;
                    oscar = zulu.questContentPosition;
                    mike['questContentPosition'] = oscar;
                    oscar = zulu.questContentRowIndex;
                    mike['questContentRowIndex'] = oscar;
                    report = _closure2_slot6;
                    mike['triggeredByStatusChange'] = report;
                    report = zulu.trackGuildAndChannelMetadata;
                    mike['trackGuildAndChannelMetadata'] = report;
                    zulu = zulu.minViewTimeSeconds;
                    mike['minViewTimeSeconds'] = zulu;
                    zulu = tango.prototype;
                    zulu = Object.create(zulu, {constructor: {value: tango}});
                    options = zulu;
                    golf = mike;
                    mike = new options[tango](golf, oscar);
                    mike = mike instanceof Object ? mike : zulu;
                    entity['current'] = mike;
                    mike = entity.current;
                    entity = mike.start;
                    entity = entity.bind(mike)();
 261:
                    entity = undefined;
                    return entity;
                }
            };
            mike = report.bind(verify)(mike, zulu);
            zulu = _closure1_slot7;
            entity = _closure1_slot9;
            mike = entity.Provider;
            entity = {};
            entity['value'] = oscar;
            report = options.children;
            report = report.bind(options)(golf, oscar);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['QuestContentImpressionTrackerInner'] = mike;
    return entity;
})();