// app/modules/feedback/FeedbackManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
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
    entity = function(argFoo) { // Original name: hotspotEligibilityCheck
        zulu = _closure1_slot8;
        mike = zulu.hasHotspot;
        entity = argFoo;
        entity = entity.hotspot;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: triggerRateEligibilityCheck
        entity = global;
        mike = entity.Math;
        entity = mike.random;
        mike = entity.bind(mike)();
        entity = argFoo;
        entity = entity.chance;
        entity = mike < entity;
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: recencyEligibilityCheck
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            zulu = entity.storageKey;
            mike = null;
            if(!(mike != zulu)) { _fun00006_ip = 97; continue _fun00005 }
 15:
            report = _closure1_slot0;
            tango = _closure1_slot2;
            zulu = 10;
            tango = tango[zulu];
            zulu = undefined;
            zulu = report.bind(zulu)(tango);
            report = zulu.Storage;
            tango = report.get;
            zulu = entity.storageKey;
            zulu = tango.bind(report)(zulu);
            if(!(mike != zulu)) { _fun00006_ip = 97; continue _fun00005 }
 66:
            mike = global;
            tango = mike.Date;
            mike = tango.now;
            mike = mike.bind(tango)();
            mike = mike - zulu;
            entity = entity.cooldown;
            if(!(!(mike < entity))) { _fun00006_ip = 101; continue _fun00005 }
 97:
            entity = true;
            return entity;
 101:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = global;
    verify = entity.Object;
    report = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = report.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = golf[entity];
    entity = undefined;
    mike = options.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 5;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 6;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot9 = mike;
    mike = 7;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot10 = mike;
    mike = 8;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    report = mike.FeedbackType;
    mike = mike.FeedbackTypePrecedence;
    var _closure1_slot11 = mike;
    romeo = {'chance': 0.2, 'cooldown': 86400000};
    mike = {};
    yankee = report.VOICE;
    verify = {};
    echo = verify;
    result = romeo;
    offset = copyDataProperties(echo, result);
    offset = 9;
    foxtrot = golf[offset];
    foxtrot = oscar.bind(entity)(foxtrot);
    foxtrot = foxtrot.HotspotLocations;
    foxtrot = foxtrot.VOICE_CALL_FEEDBACK;
    backup = 'hotspot';
    verify[backup] = foxtrot;
    kilo = 'lastVoiceFeedback';
    foxtrot = 'storageKey';
    verify[foxtrot] = kilo;
    sizing = new Array(1);
    kilo = function() { // Original name: voiceEligibilityCheck
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zulu = _closure1_slot9;
            mike = zulu.getWasEverRtcConnected;
            mike = mike.bind(zulu)();
            if(mike) { _fun00008_ip = 24; continue _fun00007 }
 20:
            mike = true;
            return mike;
 24:
            mike = _closure1_slot9;
            entity = mike.getWasEverMultiParticipant;
            entity = entity.bind(mike)();
            return entity;
        }
    };
    sizing[0] = kilo;
    kilo = 'eligibilityChecks';
    verify[kilo] = sizing;
    mike[yankee] = verify;
    yankee = report.STREAM;
    verify = {};
    echo = verify;
    result = romeo;
    kilo = copyDataProperties(echo, result);
    kilo = golf[offset];
    kilo = oscar.bind(entity)(kilo);
    kilo = kilo.HotspotLocations;
    kilo = kilo.REPORT_PROBLEM_POST_STREAM;
    verify[backup] = kilo;
    kilo = 'lastStreamFeedback';
    verify[foxtrot] = kilo;
    mike[yankee] = verify;
    yankee = report.VIDEO_BACKGROUND;
    verify = {};
    echo = verify;
    result = romeo;
    romeo = copyDataProperties(echo, result);
    romeo = golf[offset];
    romeo = oscar.bind(entity)(romeo);
    romeo = romeo.HotspotLocations;
    romeo = romeo.VIDEO_BACKGROUND_FEEDBACK;
    verify[backup] = romeo;
    romeo = 'lastVideoBackgroundFeedback';
    verify[foxtrot] = romeo;
    mike[yankee] = verify;
    yankee = report.ACTIVITY;
    verify = {'cooldown': 0, 'chance': 0.5, 'hotspot': null, 'storageKey': 'lastActivityFeedback'};
    romeo = golf[offset];
    romeo = oscar.bind(entity)(romeo);
    romeo = romeo.HotspotLocations;
    romeo = romeo.POST_ACTIVITY_FEEDBACK;
    verify['hotspot'] = romeo;
    mike[yankee] = verify;
    yankee = report.IN_APP_REPORTS;
    verify = {'cooldown': 172800000, 'chance': 0.5, 'hotspot': null, 'storageKey': 'inAppReportsFeedback'};
    romeo = golf[offset];
    romeo = oscar.bind(entity)(romeo);
    romeo = romeo.HotspotLocations;
    romeo = romeo.IN_APP_REPORTS_FEEDBACK;
    verify['hotspot'] = romeo;
    mike[yankee] = verify;
    yankee = report.USER_DM_MUTE;
    verify = {'cooldown': 604800000, 'chance': 1, 'hotspot': null, 'storageKey': 'userDmMute'};
    romeo = golf[offset];
    romeo = oscar.bind(entity)(romeo);
    romeo = romeo.HotspotLocations;
    romeo = romeo.USER_DM_MUTE_FEEDBACK;
    verify['hotspot'] = romeo;
    mike[yankee] = verify;
    verify = report.BLOCK_USER;
    report = {'cooldown': 0, 'chance': 1, 'hotspot': null, 'storageKey': 'blockUser'};
    offset = golf[offset];
    offset = oscar.bind(entity)(offset);
    offset = offset.HotspotLocations;
    offset = offset.BLOCK_USER_FEEDBACK;
    report['hotspot'] = offset;
    mike[verify] = report;
    var _closure1_slot12 = mike;
    report = 12;
    report = golf[report];
    report = options.bind(entity)(report);
    tango = function(argFoo) {
        tango = function(argFoo) { // Original name: FeedbackManager
            golf = this;
            romeo = 0;
            options = copyRestArgs(romeo);
            entity = _closure1_slot3;
            oscar = _closure2_slot0;
            report = undefined;
            entity = entity.bind(report)(golf, oscar);
            tango = _closure1_slot13;
            entity = new Array(0);
            romeo = entity;
            yankee = options;
            offset = 0;
            options = arraySpread(romeo, yankee, offset);
            entity = tango.bind(report)(golf, oscar, entity);
            var _closure3_slot0 = entity;
            tango = null;
            entity['feedbackTypeToShow'] = tango;
            tango = _closure1_slot1;
            oscar = _closure1_slot2;
            zulu = 11;
            zulu = oscar[zulu];
            report = tango.bind(report)(zulu);
            tango = report.debounce;
            zulu = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    mike = _closure3_slot0;
                    zulu = mike.feedbackTypeToShow;
                    mike = null;
                    if(!(mike != zulu)) { _fun00010_ip = 127; continue _fun00009 }
 19:
                    entity = _closure3_slot0;
                    report = entity.feedbackTypeToShow;
                    zulu = _closure1_slot12;
                    zulu = zulu[report];
                    report = zulu.storageKey;
                    if(!(mike != report)) { _fun00010_ip = 112; continue _fun00009 }
 50:
                    oscar = _closure1_slot0;
                    report = _closure1_slot2;
                    tango = 10;
                    report = report[tango];
                    tango = undefined;
                    tango = oscar.bind(tango)(report);
                    oscar = tango.Storage;
                    report = oscar.set;
                    tango = zulu.storageKey;
                    zulu = global;
                    golf = zulu.Date;
                    zulu = golf.now;
                    zulu = zulu.bind(golf)();
                    zulu = report.bind(oscar)(tango, zulu);
 112:
                    entity['feedbackTypeToShow'] = mike;
                    mike = argFoo;
                    entity = undefined;
                    entity = mike.bind(entity)();
 127:
                    entity = undefined;
                    return entity;
                }
            };
            mike = 200;
            mike = tango.bind(report)(zulu, mike);
            entity['showFeedbackModalDebounced'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        oscar = _closure1_slot7;
        zulu = undefined;
        report = argFoo;
        report = oscar.bind(zulu)(tango, report);
        mike = _closure1_slot4;
        report = {};
        oscar = 'possiblyShowFeedbackModal';
        report['key'] = oscar;
        entity = function(argFoo, argBar) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                mike = argFoo;
                tango = this;
                zulu = function(argFoo) { // Original name: feedbackTypeIsEligibleToBeShown
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        oscar = argFoo;
                        tango = _closure1_slot10;
                        zulu = tango.getFeedbackConfig;
                        tango = zulu.bind(tango)(oscar);
                        zulu = null;
                        if(!(zulu == tango)) { _fun00014_ip = 39; continue _fun00013 }
 31:
                        report = _closure1_slot12;
                        tango = report[oscar];
 39:
                        var _closure4_slot0 = tango;
                        tango = tango.eligibilityChecks;
                        if(!(zulu == tango)) { _fun00014_ip = 59; continue _fun00013 }
 55:
                        tango = new Array(0);
 59:
                        zulu = _closure1_slot17;
                        report = new Array(3);
                        report[0] = zulu;
                        zulu = _closure1_slot16;
                        report[1] = zulu;
                        entity = _closure1_slot15;
                        report[2] = entity;
                        zulu = report.every;
                        entity = function(argFoo) {
                            zulu = _closure4_slot0;
                            mike = argFoo;
                            entity = undefined;
                            entity = mike.bind(entity)(zulu);
                            return entity;
                        };
                        entity = zulu.bind(report)(entity);
                        if(!entity) { _fun00014_ip = 126; continue _fun00013 }
 108:
                        zulu = tango.every;
                        mike = function(argFoo) {
                            zulu = _closure4_slot0;
                            mike = argFoo;
                            entity = undefined;
                            entity = mike.bind(entity)(zulu);
                            return entity;
                        };
                        entity = zulu.bind(tango)(mike);
 126:
                        return entity;
                    }
                };
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                zulu = !zulu;
                if(zulu) { _fun00012_ip = 71; continue _fun00011 }
 28:
                oscar = tango.feedbackTypeToShow;
                report = null;
                report = report != oscar;
                if(!report) { _fun00012_ip = 68; continue _fun00011 }
 43:
                oscar = _closure1_slot11;
                golf = tango.feedbackTypeToShow;
                golf = oscar[golf];
                oscar = oscar[mike];
                report = golf < oscar;
 68:
                zulu = report;
 71:
                if(zulu) { _fun00012_ip = 94; continue _fun00011 }
 74:
                tango['feedbackTypeToShow'] = mike;
                zulu = tango.showFeedbackModalDebounced;
                mike = argBar;
                mike = zulu.bind(tango)(mike);
 94:
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(1);
        entity[0] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    tango = tango.bind(entity)(report);
    report = 13;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/feedback/FeedbackManager.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['FeedbackConfig'] = mike;
    return entity;
})();