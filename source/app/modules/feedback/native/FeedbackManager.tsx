// app/modules/feedback/native/FeedbackManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot6;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot5;
            entity = _closure1_slot14;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot14 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.FeedbackType;
    var _closure1_slot12 = tangon;
    tangon = 21;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        tangon = function(argFoo) { // Original name: FeedbackManager
            oscard = this;
            yankee = 0;
            golfie = copyRestArgs(yankee);
            zuuluu = _closure1_slot3;
            report = _closure2_slot0;
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(oscard, report);
            zuuluu = _closure1_slot13;
            entity = new Array(0);
            yankee = entity;
            offset = golfie;
            verify = 0;
            golfie = arraySpread(yankee, offset, verify);
            entity = zuuluu.bind(tangon)(oscard, report, entity);
            var _closure3_slot0 = entity;
            zuuluu = {};
            tangon = function(argFoo) { // Original name: VOICE_CHANNEL_SHOW_FEEDBACK
                zuuluu = _closure3_slot0;
                michal = zuuluu.handleShowVoiceFeedback;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu['VOICE_CHANNEL_SHOW_FEEDBACK'] = tangon;
            tangon = function(argFoo) { // Original name: STREAM_CLOSE
                zuuluu = _closure3_slot0;
                michal = zuuluu.handleShowStreamFeedback;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu['STREAM_CLOSE'] = tangon;
            tangon = function(argFoo) { // Original name: EMBEDDED_ACTIVITY_CLOSE
                zuuluu = _closure3_slot0;
                michal = zuuluu.handleShowActivityFeedback;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu['EMBEDDED_ACTIVITY_CLOSE'] = tangon;
            tangon = function(argFoo) { // Original name: IN_APP_REPORTS_SHOW_FEEDBACK
                zuuluu = _closure3_slot0;
                michal = zuuluu.handleInAppReportsFeedback;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu['IN_APP_REPORTS_SHOW_FEEDBACK'] = tangon;
            tangon = function() { // Original name: BLOCK_USER_SHOW_FEEDBACK
                michal = _closure3_slot0;
                entity = michal.handleBlockUserFeedback;
                entity = entity.bind(michal)();
                return entity;
            };
            zuuluu['BLOCK_USER_SHOW_FEEDBACK'] = tangon;
            entity['actions'] = zuuluu;
            zuuluu = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = argFoo;
                    zuuluu = michal.streamKey;
                    var _closure4_slot0 = zuuluu;
                    michal = michal.canShowFeedback;
                    if(!michal) { _fun00006_ip = 63; continue _fun00005 }
 24:
                    tangon = _closure3_slot0;
                    zuuluu = tangon.possiblyShowFeedbackModal;
                    michal = _closure1_slot12;
                    michal = michal.STREAM;
                    entity = function() {
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            report = _closure1_slot0;
                            tangon = _closure1_slot2;
                            entity = 10;
                            tangon = tangon[entity];
                            entity = undefined;
                            oscard = report.bind(entity)(tangon);
                            report = oscard.decodeStreamKey;
                            tangon = _closure4_slot0;
                            tangon = report.bind(oscard)(tangon);
                            var _closure5_slot0 = tangon;
                            oscard = _closure1_slot9;
                            report = oscard.getChannel;
                            tangon = tangon.channelId;
                            oscard = report.bind(oscard)(tangon);
                            tangon = null;
                            if(!(tangon != oscard)) { _fun00008_ip = 90; continue _fun00007 }
 74:
                            report = oscard.isGuildStageVoice;
                            report = report.bind(oscard)();
                            if(report) { _fun00008_ip = 275; continue _fun00007 }
 90:
                            option = _closure1_slot11;
                            oscard = option.getVideoStats;
                            report = _closure4_slot0;
                            report = oscard.bind(option)(report);
                            if(!(tangon == report)) { _fun00008_ip = 115; continue _fun00007 }
 113:
                            report = {};
 115:
                            tangon = {};
                            option = _closure1_slot11;
                            oscard = option.getMediaSessionId;
                            golfie = _closure4_slot0;
                            oscard = oscard.bind(option)(golfie);
                            tangon['media_session_id'] = oscard;
                            oscard = option.getRtcConnectionId;
                            oscard = oscard.bind(option)(golfie);
                            tangon['rtc_connection_id'] = oscard;
                            oscard = option.getRegion;
                            oscard = oscard.bind(option)(golfie);
                            tangon['stream_region'] = oscard;
                            oscard = option.getMaxViewers;
                            oscard = oscard.bind(option)(golfie);
                            tangon['max_viewers'] = oscard;
                            offset = tangon;
                            verify = report;
                            report = copyDataProperties(offset, verify);
                            var _closure5_slot1 = tangon;
                            tangon = _closure1_slot0;
                            report = _closure1_slot2;
                            zuuluu = 12;
                            zuuluu = report[zuuluu];
                            golfie = tangon.bind(entity)(zuuluu);
                            zuuluu = 11;
                            oscard = report[zuuluu];
                            zuuluu = report.paths;
                            zuuluu = golfie.bind(entity)(oscard, zuuluu);
                            var _closure5_slot2 = zuuluu;
                            zuuluu = 13;
                            zuuluu = report[zuuluu];
                            tangon = tangon.bind(entity)(zuuluu);
                            zuuluu = tangon.runAfterInteractions;
                            michal = function() {
                                zuuluu = _closure1_slot1;
                                michal = _closure1_slot2;
                                entity = 14;
                                michal = michal[entity];
                                entity = undefined;
                                oscard = zuuluu.bind(entity)(michal);
                                report = oscard.openLazy;
                                tangon = _closure5_slot2;
                                option = _closure4_slot0;
                                michal = global;
                                michal = michal.HermesInternal;
                                zuuluu = michal.concat;
                                michal = 'StreamFeedback';
                                zuuluu = zuuluu.bind(michal)(option);
                                michal = {};
                                option = _closure5_slot0;
                                michal['stream'] = option;
                                golfie = _closure5_slot1;
                                michal['analyticsData'] = golfie;
                                michal = report.bind(oscard)(tangon, zuuluu, michal);
                                return entity;
                            };
                            michal = zuuluu.bind(tangon)(michal);
 275:
                            return entity;
                        }
                    };
                    entity = zuuluu.bind(tangon)(michal, entity);
 63:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleShowStreamFeedback'] = zuuluu;
            zuuluu = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = argFoo;
                    oscard = entity.applicationId;
                    var _closure4_slot0 = oscard;
                    option = entity.location;
                    var _closure4_slot1 = option;
                    report = entity.showFeedback;
                    tangon = _closure1_slot8;
                    entity = tangon.getApplication;
                    oscard = entity.bind(tangon)(oscard);
                    var _closure4_slot2 = oscard;
                    golfie = _closure1_slot0;
                    tangon = _closure1_slot2;
                    entity = 15;
                    tangon = tangon[entity];
                    entity = undefined;
                    golfie = golfie.bind(entity)(tangon);
                    tangon = golfie.getEmbeddedActivityLocationChannelId;
                    option = tangon.bind(golfie)(option);
                    golfie = _closure1_slot9;
                    tangon = golfie.getChannel;
                    tangon = tangon.bind(golfie)(option);
                    var _closure4_slot3 = tangon;
                    tangon = null;
                    tangon = tangon != oscard;
                    if(!tangon) { _fun00010_ip = 114; continue _fun00009 }
 111:
                    tangon = report;
 114:
                    if(!tangon) { _fun00010_ip = 153; continue _fun00009 }
 117:
                    report = _closure3_slot0;
                    tangon = report.possiblyShowFeedbackModal;
                    zuuluu = _closure1_slot12;
                    zuuluu = zuuluu.ACTIVITY;
                    michal = function() {
                        tangon = _closure1_slot0;
                        report = _closure1_slot2;
                        entity = 12;
                        zuuluu = report[entity];
                        entity = undefined;
                        option = tangon.bind(entity)(zuuluu);
                        zuuluu = 16;
                        golfie = report[zuuluu];
                        zuuluu = report.paths;
                        zuuluu = option.bind(entity)(golfie, zuuluu);
                        var _closure5_slot0 = zuuluu;
                        zuuluu = {};
                        golfie = _closure1_slot10;
                        oscard = golfie.getMediaSessionId;
                        oscard = oscard.bind(golfie)();
                        zuuluu['media_session_id'] = oscard;
                        oscard = golfie.getRTCConnectionId;
                        oscard = oscard.bind(golfie)();
                        zuuluu['rtc_connection_id'] = oscard;
                        var _closure5_slot1 = zuuluu;
                        zuuluu = 13;
                        zuuluu = report[zuuluu];
                        tangon = tangon.bind(entity)(zuuluu);
                        zuuluu = tangon.runAfterInteractions;
                        michal = function() {
                            zuuluu = _closure1_slot1;
                            michal = _closure1_slot2;
                            entity = 14;
                            michal = michal[entity];
                            entity = undefined;
                            oscard = zuuluu.bind(entity)(michal);
                            report = oscard.openLazy;
                            tangon = _closure5_slot0;
                            golfie = _closure4_slot1;
                            yankee = golfie.id;
                            offset = _closure4_slot0;
                            michal = global;
                            michal = michal.HermesInternal;
                            zuuluu = michal.concat;
                            michal = 'ActivityFeedback';
                            zuuluu = zuuluu.bind(michal)(yankee, offset);
                            michal = {};
                            verify = _closure5_slot1;
                            michal['analyticsData'] = verify;
                            verify = _closure4_slot2;
                            michal['activityApplication'] = verify;
                            option = _closure4_slot3;
                            michal['channel'] = option;
                            michal['embeddedActivityLocation'] = golfie;
                            michal = report.bind(oscard)(tangon, zuuluu, michal);
                            return entity;
                        };
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    michal = tangon.bind(report)(zuuluu, michal);
 153:
                    return entity;
                }
            };
            entity['handleShowActivityFeedback'] = zuuluu;
            zuuluu = function(argFoo) {
                michal = argFoo;
                michal = michal.analyticsData;
                var _closure4_slot0 = michal;
                tangon = _closure3_slot0;
                zuuluu = tangon.possiblyShowFeedbackModal;
                michal = _closure1_slot12;
                michal = michal.VOICE;
                entity = function() {
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 12;
                    zuuluu = report[entity];
                    entity = undefined;
                    golfie = tangon.bind(entity)(zuuluu);
                    zuuluu = 17;
                    oscard = report[zuuluu];
                    zuuluu = report.paths;
                    zuuluu = golfie.bind(entity)(oscard, zuuluu);
                    var _closure5_slot0 = zuuluu;
                    zuuluu = 13;
                    zuuluu = report[zuuluu];
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.runAfterInteractions;
                    michal = function() {
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 14;
                        michal = michal[entity];
                        entity = undefined;
                        oscard = zuuluu.bind(entity)(michal);
                        report = oscard.openLazy;
                        tangon = _closure5_slot0;
                        golfie = _closure4_slot0;
                        option = golfie.channel_id;
                        michal = global;
                        michal = michal.HermesInternal;
                        zuuluu = michal.concat;
                        michal = 'VoiceFeedback';
                        zuuluu = zuuluu.bind(michal)(option);
                        michal = {};
                        michal['analyticsData'] = golfie;
                        michal = report.bind(oscard)(tangon, zuuluu, michal);
                        return entity;
                    };
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                entity = zuuluu.bind(tangon)(michal, entity);
                entity = undefined;
                return entity;
            };
            entity['handleShowVoiceFeedback'] = zuuluu;
            zuuluu = function(argFoo) {
                michal = argFoo;
                zuuluu = michal.reportId;
                var _closure4_slot0 = zuuluu;
                michal = michal.reportType;
                var _closure4_slot1 = michal;
                tangon = _closure3_slot0;
                zuuluu = tangon.possiblyShowFeedbackModal;
                michal = _closure1_slot12;
                michal = michal.IN_APP_REPORTS;
                entity = function() {
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 12;
                    zuuluu = report[entity];
                    entity = undefined;
                    golfie = tangon.bind(entity)(zuuluu);
                    zuuluu = 18;
                    oscard = report[zuuluu];
                    zuuluu = report.paths;
                    zuuluu = golfie.bind(entity)(oscard, zuuluu);
                    var _closure5_slot0 = zuuluu;
                    zuuluu = 13;
                    zuuluu = report[zuuluu];
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.runAfterInteractions;
                    michal = function() {
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            zuuluu = _closure1_slot1;
                            michal = _closure1_slot2;
                            entity = 14;
                            michal = michal[entity];
                            entity = undefined;
                            oscard = zuuluu.bind(entity)(michal);
                            report = oscard.openLazy;
                            tangon = _closure5_slot0;
                            verify = _closure4_slot1;
                            zuuluu = _closure4_slot0;
                            michal = null;
                            michal = michal != zuuluu;
                            option = '';
                            if(!michal) { _fun00012_ip = 66; continue _fun00011 }
 62:
                            option = _closure4_slot0;
 66:
                            michal = global;
                            michal = michal.HermesInternal;
                            zuuluu = michal.concat;
                            michal = 'ReportingFeedback';
                            zuuluu = zuuluu.bind(michal)(verify, option);
                            michal = {};
                            option = _closure4_slot0;
                            michal['reportId'] = option;
                            golfie = _closure4_slot1;
                            michal['reportType'] = golfie;
                            michal = report.bind(oscard)(tangon, zuuluu, michal);
                            return entity;
                        }
                    };
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                entity = zuuluu.bind(tangon)(michal, entity);
                entity = undefined;
                return entity;
            };
            entity['handleInAppReportsFeedback'] = zuuluu;
            michal = function() {
                tangon = _closure3_slot0;
                zuuluu = tangon.possiblyShowFeedbackModal;
                entity = _closure1_slot12;
                michal = entity.BLOCK_USER;
                entity = function() {
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 12;
                    zuuluu = report[entity];
                    entity = undefined;
                    golfie = tangon.bind(entity)(zuuluu);
                    zuuluu = 19;
                    oscard = report[zuuluu];
                    zuuluu = report.paths;
                    zuuluu = golfie.bind(entity)(oscard, zuuluu);
                    var _closure5_slot0 = zuuluu;
                    zuuluu = 13;
                    zuuluu = report[zuuluu];
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.runAfterInteractions;
                    michal = function() {
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 14;
                        michal = michal[entity];
                        entity = undefined;
                        oscard = zuuluu.bind(entity)(michal);
                        report = oscard.openLazy;
                        tangon = _closure5_slot0;
                        zuuluu = 'BlockUserFeedback';
                        michal = {};
                        michal = report.bind(oscard)(tangon, zuuluu, michal);
                        return entity;
                    };
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                entity = zuuluu.bind(tangon)(michal, entity);
                entity = undefined;
                return entity;
            };
            entity['handleBlockUserFeedback'] = michal;
            return entity;
        };
        var _closure2_slot0 = tangon;
        oscard = _closure1_slot7;
        zuuluu = undefined;
        report = argFoo;
        report = oscard.bind(zuuluu)(tangon, report);
        michal = _closure1_slot4;
        report = {};
        oscard = '_initialize';
        report['key'] = oscard;
        entity = function() { // Original name: value
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 20;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.init;
            michal = michal.bind(zuuluu)();
            return entity;
        };
        report['value'] = entity;
        entity = new Array(1);
        entity[0] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 22;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/feedback/native/FeedbackManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();