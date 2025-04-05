// app/modules/feedback/FeedbackManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
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
            _fun00002_ip = 76; continue _fun00001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot13 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: hotspotEligibilityCheck
        zuuluu = _closure1_slot8;
        michal = zuuluu.hasHotspot;
        entity = argFoo;
        entity = entity.hotspot;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: triggerRateEligibilityCheck
        entity = global;
        michal = entity.Math;
        entity = michal.random;
        michal = entity.bind(michal)();
        entity = argFoo;
        entity = entity.chance;
        entity = michal < entity;
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: recencyEligibilityCheck
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.storageKey;
            michal = null;
            if(!(michal != zuuluu)) { _fun00004_ip = 97; continue _fun00003 }
 15:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 10;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            zuuluu = report.bind(zuuluu)(tangon);
            report = zuuluu.Storage;
            tangon = report.get;
            zuuluu = entity.storageKey;
            zuuluu = tangon.bind(report)(zuuluu);
            if(!(michal != zuuluu)) { _fun00004_ip = 97; continue _fun00003 }
 66:
            michal = global;
            tangon = michal.Date;
            michal = tangon.now;
            michal = michal.bind(tangon)();
            michal = michal - zuuluu;
            entity = entity.cooldown;
            if(!(!(michal < entity))) { _fun00004_ip = 101; continue _fun00003 }
 97:
            entity = true;
            return entity;
 101:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    romeon = function() { // Original name: voiceEligibilityCheck
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = _closure1_slot9;
            entity = zuuluu.getWasEverRtcConnected;
            entity = entity.bind(zuuluu)();
            entity = !entity;
            if(entity) { _fun00006_ip = 39; continue _fun00005 }
 23:
            zuuluu = _closure1_slot9;
            michal = zuuluu.getWasEverMultiParticipant;
            entity = michal.bind(zuuluu)();
 39:
            return entity;
        }
    };
    entity = global;
    verify = entity.Object;
    report = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = report.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = golfie[entity];
    entity = undefined;
    michal = option.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = golfie[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = golfie[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = golfie[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 4;
    michal = golfie[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 5;
    michal = golfie[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 6;
    michal = golfie[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot9 = michal;
    michal = 7;
    michal = golfie[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot10 = michal;
    michal = 8;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    report = michal.FeedbackType;
    michal = michal.FeedbackTypePrecedence;
    var _closure1_slot11 = michal;
    kiloes = {'chance': 0.2, 'cooldown': 86400000};
    michal = {};
    sizing = report.VOICE;
    verify = {};
    update = verify;
    echoed = kiloes;
    offset = copyDataProperties(update, echoed);
    offset = 9;
    yankee = golfie[offset];
    yankee = oscard.bind(entity)(yankee);
    yankee = yankee.HotspotLocations;
    yankee = yankee.VOICE_CALL_FEEDBACK;
    backup = 'hotspot';
    verify[backup] = yankee;
    yankee = 'lastVoiceFeedback';
    foxtra = 'storageKey';
    verify[foxtra] = yankee;
    output = new Array(1);
    output[0] = romeon;
    yankee = 'eligibilityChecks';
    verify[yankee] = output;
    michal[sizing] = verify;
    sizing = report.STREAM;
    verify = {};
    update = verify;
    echoed = kiloes;
    output = copyDataProperties(update, echoed);
    output = golfie[offset];
    output = oscard.bind(entity)(output);
    output = output.HotspotLocations;
    output = output.REPORT_PROBLEM_POST_STREAM;
    verify[backup] = output;
    output = 'lastStreamFeedback';
    verify[foxtra] = output;
    michal[sizing] = verify;
    sizing = report.VIDEO_BACKGROUND;
    verify = {};
    update = verify;
    echoed = kiloes;
    output = copyDataProperties(update, echoed);
    output = golfie[offset];
    output = oscard.bind(entity)(output);
    output = output.HotspotLocations;
    output = output.VIDEO_BACKGROUND_FEEDBACK;
    verify[backup] = output;
    output = 'lastVideoBackgroundFeedback';
    verify[foxtra] = output;
    michal[sizing] = verify;
    sizing = report.ACTIVITY;
    verify = {'cooldown': 0, 'chance': 0.5, 'hotspot': null, 'storageKey': 'lastActivityFeedback'};
    output = golfie[offset];
    output = oscard.bind(entity)(output);
    output = output.HotspotLocations;
    output = output.POST_ACTIVITY_FEEDBACK;
    verify['hotspot'] = output;
    michal[sizing] = verify;
    sizing = report.IN_APP_REPORTS;
    verify = {'cooldown': 172800000, 'chance': 0.5, 'hotspot': null, 'storageKey': 'inAppReportsFeedback'};
    output = golfie[offset];
    output = oscard.bind(entity)(output);
    output = output.HotspotLocations;
    output = output.IN_APP_REPORTS_FEEDBACK;
    verify['hotspot'] = output;
    michal[sizing] = verify;
    sizing = report.USER_DM_MUTE;
    verify = {'cooldown': 604800000, 'chance': 1, 'hotspot': null, 'storageKey': 'userDmMute'};
    output = golfie[offset];
    output = oscard.bind(entity)(output);
    output = output.HotspotLocations;
    output = output.USER_DM_MUTE_FEEDBACK;
    verify['hotspot'] = output;
    michal[sizing] = verify;
    sizing = report.BLOCK_USER;
    verify = {'cooldown': 0, 'chance': 1, 'hotspot': null, 'storageKey': 'blockUser'};
    output = golfie[offset];
    output = oscard.bind(entity)(output);
    output = output.HotspotLocations;
    output = output.BLOCK_USER_FEEDBACK;
    verify['hotspot'] = output;
    michal[sizing] = verify;
    verify = report.VOICE_FILTER;
    report = {};
    update = report;
    echoed = kiloes;
    kiloes = copyDataProperties(update, echoed);
    offset = golfie[offset];
    offset = oscard.bind(entity)(offset);
    offset = offset.HotspotLocations;
    offset = offset.VOICE_FILTER_FEEDBACK;
    report[backup] = offset;
    offset = 'lastVoiceFilterFeedback';
    report[foxtra] = offset;
    offset = new Array(1);
    offset[0] = romeon;
    report[yankee] = offset;
    michal[verify] = report;
    var _closure1_slot12 = michal;
    report = 12;
    report = golfie[report];
    report = option.bind(entity)(report);
    tangon = function(argFoo) {
        tangon = function(argFoo) { // Original name: FeedbackManager
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                oscard = this;
                backup = 0;
                entity = copyRestArgs(backup);
                option = _closure1_slot3;
                tangon = _closure2_slot0;
                report = undefined;
                option = option.bind(report)(oscard, tangon);
                yankee = new Array(0);
                backup = yankee;
                foxtra = entity;
                romeon = 0;
                entity = arraySpread(backup, foxtra, romeon);
                entity = _closure1_slot6;
                offset = entity.bind(report)(tangon);
                tangon = _closure1_slot5;
                entity = _closure1_slot13;
                entity = entity.bind(report)();
                if(entity) { _fun00008_ip = 86; continue _fun00007 }
 73:
                entity = offset.apply;
                entity = entity.bind(offset)(oscard, yankee);
                _fun00008_ip = 120; continue _fun00007;
 86:
                golfie = global;
                verify = golfie.Reflect;
                option = verify.construct;
                golfie = _closure1_slot6;
                golfie = golfie.bind(report)(oscard);
                golfie = golfie.constructor;
                entity = option.bind(verify)(offset, yankee, golfie);
 120:
                entity = tangon.bind(report)(oscard, entity);
                var _closure3_slot0 = entity;
                tangon = null;
                entity['feedbackTypeToShow'] = tangon;
                tangon = _closure1_slot1;
                oscard = _closure1_slot2;
                zuuluu = 11;
                zuuluu = oscard[zuuluu];
                report = tangon.bind(report)(zuuluu);
                tangon = report.debounce;
                zuuluu = function(argFoo) {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        michal = _closure3_slot0;
                        zuuluu = michal.feedbackTypeToShow;
                        michal = null;
                        if(!(michal != zuuluu)) { _fun00010_ip = 127; continue _fun00009 }
 19:
                        entity = _closure3_slot0;
                        report = entity.feedbackTypeToShow;
                        zuuluu = _closure1_slot12;
                        zuuluu = zuuluu[report];
                        report = zuuluu.storageKey;
                        if(!(michal != report)) { _fun00010_ip = 112; continue _fun00009 }
 50:
                        oscard = _closure1_slot0;
                        report = _closure1_slot2;
                        tangon = 10;
                        report = report[tangon];
                        tangon = undefined;
                        tangon = oscard.bind(tangon)(report);
                        oscard = tangon.Storage;
                        report = oscard.set;
                        tangon = zuuluu.storageKey;
                        zuuluu = global;
                        golfie = zuuluu.Date;
                        zuuluu = golfie.now;
                        zuuluu = zuuluu.bind(golfie)();
                        zuuluu = report.bind(oscard)(tangon, zuuluu);
 112:
                        entity['feedbackTypeToShow'] = michal;
                        michal = argFoo;
                        entity = undefined;
                        entity = michal.bind(entity)();
 127:
                        entity = undefined;
                        return entity;
                    }
                };
                michal = 200;
                michal = tangon.bind(report)(zuuluu, michal);
                entity['showFeedbackModalDebounced'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        oscard = _closure1_slot7;
        zuuluu = undefined;
        report = argFoo;
        report = oscard.bind(zuuluu)(tangon, report);
        michal = _closure1_slot4;
        report = {};
        oscard = 'possiblyShowFeedbackModal';
        report['key'] = oscard;
        entity = function(argFoo, argBar) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                michal = argFoo;
                tangon = this;
                zuuluu = function(argFoo) { // Original name: feedbackTypeIsEligibleToBeShown
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        oscard = argFoo;
                        tangon = _closure1_slot10;
                        zuuluu = tangon.getFeedbackConfig;
                        tangon = zuuluu.bind(tangon)(oscard);
                        zuuluu = null;
                        if(!(zuuluu == tangon)) { _fun00014_ip = 39; continue _fun00013 }
 31:
                        report = _closure1_slot12;
                        tangon = report[oscard];
 39:
                        var _closure4_slot0 = tangon;
                        tangon = tangon.eligibilityChecks;
                        if(!(zuuluu == tangon)) { _fun00014_ip = 59; continue _fun00013 }
 55:
                        tangon = new Array(0);
 59:
                        zuuluu = _closure1_slot16;
                        report = new Array(3);
                        report[0] = zuuluu;
                        zuuluu = _closure1_slot15;
                        report[1] = zuuluu;
                        entity = _closure1_slot14;
                        report[2] = entity;
                        zuuluu = report.every;
                        entity = function(argFoo) {
                            zuuluu = _closure4_slot0;
                            michal = argFoo;
                            entity = undefined;
                            entity = michal.bind(entity)(zuuluu);
                            return entity;
                        };
                        entity = zuuluu.bind(report)(entity);
                        if(!entity) { _fun00014_ip = 126; continue _fun00013 }
 108:
                        zuuluu = tangon.every;
                        michal = function(argFoo) {
                            zuuluu = _closure4_slot0;
                            michal = argFoo;
                            entity = undefined;
                            entity = michal.bind(entity)(zuuluu);
                            return entity;
                        };
                        entity = zuuluu.bind(tangon)(michal);
 126:
                        return entity;
                    }
                };
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                zuuluu = !zuuluu;
                if(zuuluu) { _fun00012_ip = 71; continue _fun00011 }
 28:
                oscard = tangon.feedbackTypeToShow;
                report = null;
                report = report != oscard;
                if(!report) { _fun00012_ip = 68; continue _fun00011 }
 43:
                oscard = _closure1_slot11;
                golfie = tangon.feedbackTypeToShow;
                golfie = oscard[golfie];
                oscard = oscard[michal];
                report = golfie < oscard;
 68:
                zuuluu = report;
 71:
                if(zuuluu) { _fun00012_ip = 94; continue _fun00011 }
 74:
                tangon['feedbackTypeToShow'] = michal;
                zuuluu = tangon.showFeedbackModalDebounced;
                michal = argBar;
                michal = zuuluu.bind(tangon)(michal);
 94:
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(1);
        entity[0] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    tangon = tangon.bind(entity)(report);
    report = 13;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/feedback/FeedbackManager.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['FeedbackConfig'] = michal;
    return entity;
})();