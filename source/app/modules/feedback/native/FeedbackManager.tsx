// app/modules/feedback/native/FeedbackManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot14;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot14 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
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
    tango = golf.bind(entity)(tango);
    var _closure1_slot11 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.FeedbackType;
    var _closure1_slot12 = tango;
    tango = 21;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: FeedbackManager
            oscar = this;
            yankee = 0;
            golf = copyRestArgs(yankee);
            zulu = _closure1_slot3;
            report = _closure2_slot0;
            tango = undefined;
            zulu = zulu.bind(tango)(oscar, report);
            zulu = _closure1_slot13;
            entity = new Array(0);
            yankee = entity;
            offset = golf;
            verify = 0;
            golf = arraySpread(yankee, offset, verify);
            entity = zulu.bind(tango)(oscar, report, entity);
            var _closure3_slot0 = entity;
            zulu = {};
            tango = function(argFoo) { // Original name: VOICE_CHANNEL_SHOW_FEEDBACK
                zulu = _closure3_slot0;
                mike = zulu.handleShowVoiceFeedback;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu['VOICE_CHANNEL_SHOW_FEEDBACK'] = tango;
            tango = function(argFoo) { // Original name: STREAM_CLOSE
                zulu = _closure3_slot0;
                mike = zulu.handleShowStreamFeedback;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu['STREAM_CLOSE'] = tango;
            tango = function(argFoo) { // Original name: EMBEDDED_ACTIVITY_CLOSE
                zulu = _closure3_slot0;
                mike = zulu.handleShowActivityFeedback;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu['EMBEDDED_ACTIVITY_CLOSE'] = tango;
            tango = function(argFoo) { // Original name: IN_APP_REPORTS_SHOW_FEEDBACK
                zulu = _closure3_slot0;
                mike = zulu.handleInAppReportsFeedback;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu['IN_APP_REPORTS_SHOW_FEEDBACK'] = tango;
            tango = function() { // Original name: BLOCK_USER_SHOW_FEEDBACK
                mike = _closure3_slot0;
                entity = mike.handleBlockUserFeedback;
                entity = entity.bind(mike)();
                return entity;
            };
            zulu['BLOCK_USER_SHOW_FEEDBACK'] = tango;
            entity['actions'] = zulu;
            zulu = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    mike = argFoo;
                    zulu = mike.streamKey;
                    var _closure4_slot0 = zulu;
                    mike = mike.canShowFeedback;
                    if(!mike) { _fun00006_ip = 63; continue _fun00005 }
 24:
                    tango = _closure3_slot0;
                    zulu = tango.possiblyShowFeedbackModal;
                    mike = _closure1_slot12;
                    mike = mike.STREAM;
                    entity = function() {
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            report = _closure1_slot0;
                            tango = _closure1_slot2;
                            entity = 10;
                            tango = tango[entity];
                            entity = undefined;
                            oscar = report.bind(entity)(tango);
                            report = oscar.decodeStreamKey;
                            tango = _closure4_slot0;
                            tango = report.bind(oscar)(tango);
                            var _closure5_slot0 = tango;
                            oscar = _closure1_slot9;
                            report = oscar.getChannel;
                            tango = tango.channelId;
                            oscar = report.bind(oscar)(tango);
                            tango = null;
                            if(!(tango != oscar)) { _fun00008_ip = 90; continue _fun00007 }
 74:
                            report = oscar.isGuildStageVoice;
                            report = report.bind(oscar)();
                            if(report) { _fun00008_ip = 275; continue _fun00007 }
 90:
                            options = _closure1_slot11;
                            oscar = options.getVideoStats;
                            report = _closure4_slot0;
                            report = oscar.bind(options)(report);
                            if(!(tango == report)) { _fun00008_ip = 115; continue _fun00007 }
 113:
                            report = {};
 115:
                            tango = {};
                            options = _closure1_slot11;
                            oscar = options.getMediaSessionId;
                            golf = _closure4_slot0;
                            oscar = oscar.bind(options)(golf);
                            tango['media_session_id'] = oscar;
                            oscar = options.getRtcConnectionId;
                            oscar = oscar.bind(options)(golf);
                            tango['rtc_connection_id'] = oscar;
                            oscar = options.getRegion;
                            oscar = oscar.bind(options)(golf);
                            tango['stream_region'] = oscar;
                            oscar = options.getMaxViewers;
                            oscar = oscar.bind(options)(golf);
                            tango['max_viewers'] = oscar;
                            offset = tango;
                            verify = report;
                            report = copyDataProperties(offset, verify);
                            var _closure5_slot1 = tango;
                            tango = _closure1_slot0;
                            report = _closure1_slot2;
                            zulu = 12;
                            zulu = report[zulu];
                            golf = tango.bind(entity)(zulu);
                            zulu = 11;
                            oscar = report[zulu];
                            zulu = report.paths;
                            zulu = golf.bind(entity)(oscar, zulu);
                            var _closure5_slot2 = zulu;
                            zulu = 13;
                            zulu = report[zulu];
                            tango = tango.bind(entity)(zulu);
                            zulu = tango.runAfterInteractions;
                            mike = function() {
                                zulu = _closure1_slot1;
                                mike = _closure1_slot2;
                                entity = 14;
                                mike = mike[entity];
                                entity = undefined;
                                oscar = zulu.bind(entity)(mike);
                                report = oscar.openLazy;
                                tango = _closure5_slot2;
                                options = _closure4_slot0;
                                mike = global;
                                mike = mike.HermesInternal;
                                zulu = mike.concat;
                                mike = 'StreamFeedback';
                                zulu = zulu.bind(mike)(options);
                                mike = {};
                                options = _closure5_slot0;
                                mike['stream'] = options;
                                golf = _closure5_slot1;
                                mike['analyticsData'] = golf;
                                mike = report.bind(oscar)(tango, zulu, mike);
                                return entity;
                            };
                            mike = zulu.bind(tango)(mike);
 275:
                            return entity;
                        }
                    };
                    entity = zulu.bind(tango)(mike, entity);
 63:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleShowStreamFeedback'] = zulu;
            zulu = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = argFoo;
                    report = entity.applicationId;
                    var _closure4_slot0 = report;
                    options = entity.location;
                    var _closure4_slot1 = options;
                    golf = entity.showFeedback;
                    tango = _closure1_slot8;
                    entity = tango.getApplication;
                    tango = entity.bind(tango)(report);
                    var _closure4_slot2 = tango;
                    oscar = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 15;
                    report = report[entity];
                    entity = undefined;
                    oscar = oscar.bind(entity)(report);
                    report = oscar.getEmbeddedActivityLocationChannelId;
                    options = report.bind(oscar)(options);
                    oscar = _closure1_slot9;
                    report = oscar.getChannel;
                    oscar = report.bind(oscar)(options);
                    var _closure4_slot3 = oscar;
                    report = null;
                    tango = report != tango;
                    if(!tango) { _fun00010_ip = 114; continue _fun00009 }
 111:
                    tango = golf;
 114:
                    if(!tango) { _fun00010_ip = 121; continue _fun00009 }
 117:
                    tango = report != oscar;
 121:
                    if(!tango) { _fun00010_ip = 160; continue _fun00009 }
 124:
                    report = _closure3_slot0;
                    tango = report.possiblyShowFeedbackModal;
                    zulu = _closure1_slot12;
                    zulu = zulu.ACTIVITY;
                    mike = function() {
                        tango = _closure1_slot0;
                        report = _closure1_slot2;
                        entity = 12;
                        zulu = report[entity];
                        entity = undefined;
                        options = tango.bind(entity)(zulu);
                        zulu = 16;
                        golf = report[zulu];
                        zulu = report.paths;
                        zulu = options.bind(entity)(golf, zulu);
                        var _closure5_slot0 = zulu;
                        zulu = {};
                        golf = _closure1_slot10;
                        oscar = golf.getMediaSessionId;
                        oscar = oscar.bind(golf)();
                        zulu['media_session_id'] = oscar;
                        oscar = golf.getRTCConnectionId;
                        oscar = oscar.bind(golf)();
                        zulu['rtc_connection_id'] = oscar;
                        var _closure5_slot1 = zulu;
                        zulu = 13;
                        zulu = report[zulu];
                        tango = tango.bind(entity)(zulu);
                        zulu = tango.runAfterInteractions;
                        mike = function() {
                            zulu = _closure1_slot1;
                            mike = _closure1_slot2;
                            entity = 14;
                            mike = mike[entity];
                            entity = undefined;
                            oscar = zulu.bind(entity)(mike);
                            report = oscar.openLazy;
                            tango = _closure5_slot0;
                            mike = _closure4_slot1;
                            offset = mike.id;
                            verify = _closure4_slot0;
                            mike = global;
                            mike = mike.HermesInternal;
                            zulu = mike.concat;
                            mike = 'ActivityFeedback';
                            zulu = zulu.bind(mike)(offset, verify);
                            mike = {};
                            options = _closure5_slot1;
                            mike['analyticsData'] = options;
                            options = _closure4_slot2;
                            mike['activityApplication'] = options;
                            golf = _closure4_slot3;
                            mike['channel'] = golf;
                            mike = report.bind(oscar)(tango, zulu, mike);
                            return entity;
                        };
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    mike = tango.bind(report)(zulu, mike);
 160:
                    return entity;
                }
            };
            entity['handleShowActivityFeedback'] = zulu;
            zulu = function(argFoo) {
                mike = argFoo;
                mike = mike.analyticsData;
                var _closure4_slot0 = mike;
                tango = _closure3_slot0;
                zulu = tango.possiblyShowFeedbackModal;
                mike = _closure1_slot12;
                mike = mike.VOICE;
                entity = function() {
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 12;
                    zulu = report[entity];
                    entity = undefined;
                    golf = tango.bind(entity)(zulu);
                    zulu = 17;
                    oscar = report[zulu];
                    zulu = report.paths;
                    zulu = golf.bind(entity)(oscar, zulu);
                    var _closure5_slot0 = zulu;
                    zulu = 13;
                    zulu = report[zulu];
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.runAfterInteractions;
                    mike = function() {
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 14;
                        mike = mike[entity];
                        entity = undefined;
                        oscar = zulu.bind(entity)(mike);
                        report = oscar.openLazy;
                        tango = _closure5_slot0;
                        golf = _closure4_slot0;
                        options = golf.channel_id;
                        mike = global;
                        mike = mike.HermesInternal;
                        zulu = mike.concat;
                        mike = 'VoiceFeedback';
                        zulu = zulu.bind(mike)(options);
                        mike = {};
                        mike['analyticsData'] = golf;
                        mike = report.bind(oscar)(tango, zulu, mike);
                        return entity;
                    };
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                entity = zulu.bind(tango)(mike, entity);
                entity = undefined;
                return entity;
            };
            entity['handleShowVoiceFeedback'] = zulu;
            zulu = function(argFoo) {
                mike = argFoo;
                zulu = mike.reportId;
                var _closure4_slot0 = zulu;
                mike = mike.reportType;
                var _closure4_slot1 = mike;
                tango = _closure3_slot0;
                zulu = tango.possiblyShowFeedbackModal;
                mike = _closure1_slot12;
                mike = mike.IN_APP_REPORTS;
                entity = function() {
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 12;
                    zulu = report[entity];
                    entity = undefined;
                    golf = tango.bind(entity)(zulu);
                    zulu = 18;
                    oscar = report[zulu];
                    zulu = report.paths;
                    zulu = golf.bind(entity)(oscar, zulu);
                    var _closure5_slot0 = zulu;
                    zulu = 13;
                    zulu = report[zulu];
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.runAfterInteractions;
                    mike = function() {
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            zulu = _closure1_slot1;
                            mike = _closure1_slot2;
                            entity = 14;
                            mike = mike[entity];
                            entity = undefined;
                            oscar = zulu.bind(entity)(mike);
                            report = oscar.openLazy;
                            tango = _closure5_slot0;
                            verify = _closure4_slot1;
                            zulu = _closure4_slot0;
                            mike = null;
                            mike = mike != zulu;
                            options = '';
                            if(!mike) { _fun00012_ip = 66; continue _fun00011 }
 62:
                            options = _closure4_slot0;
 66:
                            mike = global;
                            mike = mike.HermesInternal;
                            zulu = mike.concat;
                            mike = 'ReportingFeedback';
                            zulu = zulu.bind(mike)(verify, options);
                            mike = {};
                            options = _closure4_slot0;
                            mike['reportId'] = options;
                            golf = _closure4_slot1;
                            mike['reportType'] = golf;
                            mike = report.bind(oscar)(tango, zulu, mike);
                            return entity;
                        }
                    };
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                entity = zulu.bind(tango)(mike, entity);
                entity = undefined;
                return entity;
            };
            entity['handleInAppReportsFeedback'] = zulu;
            mike = function() {
                tango = _closure3_slot0;
                zulu = tango.possiblyShowFeedbackModal;
                entity = _closure1_slot12;
                mike = entity.BLOCK_USER;
                entity = function() {
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 12;
                    zulu = report[entity];
                    entity = undefined;
                    golf = tango.bind(entity)(zulu);
                    zulu = 19;
                    oscar = report[zulu];
                    zulu = report.paths;
                    zulu = golf.bind(entity)(oscar, zulu);
                    var _closure5_slot0 = zulu;
                    zulu = 13;
                    zulu = report[zulu];
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.runAfterInteractions;
                    mike = function() {
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 14;
                        mike = mike[entity];
                        entity = undefined;
                        oscar = zulu.bind(entity)(mike);
                        report = oscar.openLazy;
                        tango = _closure5_slot0;
                        zulu = 'BlockUserFeedback';
                        mike = {};
                        mike = report.bind(oscar)(tango, zulu, mike);
                        return entity;
                    };
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                entity = zulu.bind(tango)(mike, entity);
                entity = undefined;
                return entity;
            };
            entity['handleBlockUserFeedback'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        oscar = _closure1_slot7;
        zulu = undefined;
        report = argFoo;
        report = oscar.bind(zulu)(tango, report);
        mike = _closure1_slot4;
        report = {};
        oscar = '_initialize';
        report['key'] = oscar;
        entity = function() { // Original name: value
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 20;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.init;
            mike = mike.bind(zulu)();
            return entity;
        };
        report['value'] = entity;
        entity = new Array(1);
        entity[0] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 22;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/feedback/native/FeedbackManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();