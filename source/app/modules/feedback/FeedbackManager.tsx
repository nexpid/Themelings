// app/modules/feedback/FeedbackManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
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
    entity = function(argFoo) { // Original name: hotspotEligibilityCheck
        zuuluu = _closure1_slot8;
        michal = zuuluu.hasHotspot;
        entity = argFoo;
        entity = entity.hotspot;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot15 = entity;
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
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: recencyEligibilityCheck
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.storageKey;
            michal = null;
            if(!(michal != zuuluu)) { _fun00006_ip = 97; continue _fun00005 }
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
            if(!(michal != zuuluu)) { _fun00006_ip = 97; continue _fun00005 }
 66:
            michal = global;
            tangon = michal.Date;
            michal = tangon.now;
            michal = michal.bind(tangon)();
            michal = michal - zuuluu;
            entity = entity.cooldown;
            if(!(!(michal < entity))) { _fun00006_ip = 101; continue _fun00005 }
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
    romeon = {'chance': 0.2, 'cooldown': 86400000};
    michal = {};
    yankee = report.VOICE;
    verify = {};
    echoed = verify;
    result = romeon;
    offset = copyDataProperties(echoed, result);
    offset = 9;
    foxtra = golfie[offset];
    foxtra = oscard.bind(entity)(foxtra);
    foxtra = foxtra.HotspotLocations;
    foxtra = foxtra.VOICE_CALL_FEEDBACK;
    backup = 'hotspot';
    verify[backup] = foxtra;
    kiloes = 'lastVoiceFeedback';
    foxtra = 'storageKey';
    verify[foxtra] = kiloes;
    sizing = new Array(1);
    kiloes = function() { // Original name: voiceEligibilityCheck
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = _closure1_slot9;
            michal = zuuluu.getWasEverRtcConnected;
            michal = michal.bind(zuuluu)();
            if(michal) { _fun00008_ip = 24; continue _fun00007 }
 20:
            michal = true;
            return michal;
 24:
            michal = _closure1_slot9;
            entity = michal.getWasEverMultiParticipant;
            entity = entity.bind(michal)();
            return entity;
        }
    };
    sizing[0] = kiloes;
    kiloes = 'eligibilityChecks';
    verify[kiloes] = sizing;
    michal[yankee] = verify;
    yankee = report.STREAM;
    verify = {};
    echoed = verify;
    result = romeon;
    kiloes = copyDataProperties(echoed, result);
    kiloes = golfie[offset];
    kiloes = oscard.bind(entity)(kiloes);
    kiloes = kiloes.HotspotLocations;
    kiloes = kiloes.REPORT_PROBLEM_POST_STREAM;
    verify[backup] = kiloes;
    kiloes = 'lastStreamFeedback';
    verify[foxtra] = kiloes;
    michal[yankee] = verify;
    yankee = report.VIDEO_BACKGROUND;
    verify = {};
    echoed = verify;
    result = romeon;
    romeon = copyDataProperties(echoed, result);
    romeon = golfie[offset];
    romeon = oscard.bind(entity)(romeon);
    romeon = romeon.HotspotLocations;
    romeon = romeon.VIDEO_BACKGROUND_FEEDBACK;
    verify[backup] = romeon;
    romeon = 'lastVideoBackgroundFeedback';
    verify[foxtra] = romeon;
    michal[yankee] = verify;
    yankee = report.ACTIVITY;
    verify = {'cooldown': 0, 'chance': 0.5, 'hotspot': null, 'storageKey': 'lastActivityFeedback'};
    romeon = golfie[offset];
    romeon = oscard.bind(entity)(romeon);
    romeon = romeon.HotspotLocations;
    romeon = romeon.POST_ACTIVITY_FEEDBACK;
    verify['hotspot'] = romeon;
    michal[yankee] = verify;
    yankee = report.IN_APP_REPORTS;
    verify = {'cooldown': 172800000, 'chance': 0.5, 'hotspot': null, 'storageKey': 'inAppReportsFeedback'};
    romeon = golfie[offset];
    romeon = oscard.bind(entity)(romeon);
    romeon = romeon.HotspotLocations;
    romeon = romeon.IN_APP_REPORTS_FEEDBACK;
    verify['hotspot'] = romeon;
    michal[yankee] = verify;
    yankee = report.USER_DM_MUTE;
    verify = {'cooldown': 604800000, 'chance': 1, 'hotspot': null, 'storageKey': 'userDmMute'};
    romeon = golfie[offset];
    romeon = oscard.bind(entity)(romeon);
    romeon = romeon.HotspotLocations;
    romeon = romeon.USER_DM_MUTE_FEEDBACK;
    verify['hotspot'] = romeon;
    michal[yankee] = verify;
    verify = report.BLOCK_USER;
    report = {'cooldown': 0, 'chance': 1, 'hotspot': null, 'storageKey': 'blockUser'};
    offset = golfie[offset];
    offset = oscard.bind(entity)(offset);
    offset = offset.HotspotLocations;
    offset = offset.BLOCK_USER_FEEDBACK;
    report['hotspot'] = offset;
    michal[verify] = report;
    var _closure1_slot12 = michal;
    report = 12;
    report = golfie[report];
    report = option.bind(entity)(report);
    tangon = function(argFoo) {
        tangon = function(argFoo) { // Original name: FeedbackManager
            golfie = this;
            romeon = 0;
            option = copyRestArgs(romeon);
            entity = _closure1_slot3;
            oscard = _closure2_slot0;
            report = undefined;
            entity = entity.bind(report)(golfie, oscard);
            tangon = _closure1_slot13;
            entity = new Array(0);
            romeon = entity;
            yankee = option;
            offset = 0;
            option = arraySpread(romeon, yankee, offset);
            entity = tangon.bind(report)(golfie, oscard, entity);
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
                        zuuluu = _closure1_slot17;
                        report = new Array(3);
                        report[0] = zuuluu;
                        zuuluu = _closure1_slot16;
                        report[1] = zuuluu;
                        entity = _closure1_slot15;
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