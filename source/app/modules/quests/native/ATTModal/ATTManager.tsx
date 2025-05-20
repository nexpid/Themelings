// app/modules/quests/native/ATTModal/ATTManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
    entity = function() { // Original name: _getAttEligibilityCheckResult
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot8;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 585; continue _fun00003 }
 10:
                    zuuluu = _closure1_slot11;
                    michal = zuuluu.getCurrentUser;
                    michal = michal.bind(zuuluu)();
                    oscard = {'currentUserMissing': false, 'iosVersionRequirementFailed': false, 'accountAgeRequirementFailed': false};
                    option = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    verify = 10;
                    golfie = zuuluu[verify];
                    zuuluu = undefined;
                    golfie = option.bind(zuuluu)(golfie);
                    golfie = golfie.ATTTrackingStatus;
                    golfie = golfie.UNKNOWN;
                    oscard['attTrackingStatus'] = golfie;
                    golfie = null;
                    if(!(golfie != michal)) { _fun00004_ip = 145; continue _fun00003 }
 85:
                    option = _closure1_slot1;
                    offset = _closure1_slot2;
                    golfie = 11;
                    golfie = offset[golfie];
                    option = option.bind(zuuluu)(golfie);
                    golfie = option.age;
                    michal = michal.id;
                    golfie = golfie.bind(option)(michal);
                    michal = 2592000000.0;
                    if(!(golfie < michal)) { _fun00004_ip = 153; continue _fun00003 }
 135:
                    michal = true;
                    oscard['accountAgeRequirementFailed'] = michal;
                    _fun00004_ip = 153; continue _fun00003;
 145:
                    michal = true;
                    oscard['currentUserMissing'] = michal;
 153:
                    golfie = 14.5;
                    option = _closure1_slot0;
                    offset = _closure1_slot2;
                    michal = 9;
                    michal = offset[michal];
                    option = option.bind(zuuluu)(michal);
                    michal = option.isIOS;
                    option = michal.bind(option)();
                    michal = false;
                    if(!option) { _fun00004_ip = 234; continue _fun00003 }
 198: // try_start_0
                    option = global;
                    offset = option.Number;
                    option = _closure1_slot10;
                    option = option.Version;
                    option = offset.bind(zuuluu)(option);
                    golfie = option >= golfie;
 225: // try_end0
                    michal = golfie;
                    _fun00004_ip = 234; continue _fun00003;
 230: // catch_target0
                    CatchBlockStart(arg_register=6);
                    michal = false;
 234:
                    if(michal) { _fun00004_ip = 250; continue _fun00003 }
 237:
                    michal = true;
                    oscard['iosVersionRequirementFailed'] = michal;
                    _fun00004_ip = 495; continue _fun00003;
 250:
                    michal = _closure1_slot9;
                    michal = michal.DCDAppTrackingAuthorizationManager;
                    report = michal.TrackingAuthorizationStatus;
                    michal = _closure1_slot9;
                    golfie = michal.DCDAppTrackingAuthorizationManager;
                    michal = golfie.getTrackingAuthorizationStatus;
                    michal = michal.bind(golfie)();
                    SaveGenerator(address=294);
 292:
                    return michal;
 294:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(golfie) { _fun00004_ip = 582; continue _fun00003 }
 303:
                    golfie = report.AUTHORIZED;
                    if(!(michal !== golfie)) { _fun00004_ip = 460; continue _fun00003 }
 316:
                    golfie = report.DENIED;
                    if(!(michal !== golfie)) { _fun00004_ip = 423; continue _fun00003 }
 326:
                    golfie = report.RESTRICTED;
                    if(!(michal !== golfie)) { _fun00004_ip = 386; continue _fun00003 }
 336:
                    report = report.NOT_DETERMINED;
                    if(!(michal === report)) { _fun00004_ip = 495; continue _fun00003 }
 349:
                    golfie = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[verify];
                    report = golfie.bind(zuuluu)(report);
                    report = report.ATTTrackingStatus;
                    report = report.NOT_DETERMINED;
                    oscard['attTrackingStatus'] = report;
                    _fun00004_ip = 495; continue _fun00003;
 386:
                    golfie = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[verify];
                    report = golfie.bind(zuuluu)(report);
                    report = report.ATTTrackingStatus;
                    report = report.RESTRICTED;
                    oscard['attTrackingStatus'] = report;
                    _fun00004_ip = 495; continue _fun00003;
 423:
                    golfie = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[verify];
                    report = golfie.bind(zuuluu)(report);
                    report = report.ATTTrackingStatus;
                    report = report.DENIED;
                    oscard['attTrackingStatus'] = report;
                    _fun00004_ip = 495; continue _fun00003;
 460:
                    golfie = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[verify];
                    report = golfie.bind(zuuluu)(report);
                    report = report.ATTTrackingStatus;
                    report = report.AUTHORIZED;
                    oscard['attTrackingStatus'] = report;
 495:
                    report = oscard.currentUserMissing;
                    report = !report;
                    if(!report) { _fun00004_ip = 516; continue _fun00003 }
 507:
                    golfie = oscard.iosVersionRequirementFailed;
                    report = !golfie;
 516:
                    if(!report) { _fun00004_ip = 528; continue _fun00003 }
 519:
                    golfie = oscard.accountAgeRequirementFailed;
                    report = !golfie;
 528:
                    if(!report) { _fun00004_ip = 570; continue _fun00003 }
 531:
                    golfie = oscard.attTrackingStatus;
                    option = _closure1_slot0;
                    tangon = _closure1_slot2;
                    tangon = tangon[verify];
                    tangon = option.bind(zuuluu)(tangon);
                    tangon = tangon.ATTTrackingStatus;
                    tangon = tangon.NOT_DETERMINED;
                    report = golfie === tangon;
 570:
                    tangon = argFoo;
                    tangon = tangon.bind(zuuluu)(report, oscard);
                    return zuuluu;
 582:
                    return michal;
 585:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot14 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
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
    tangon = report.bind(entity)(tangon);
    option = tangon.NativeModules;
    var _closure1_slot9 = option;
    tangon = tangon.Platform;
    var _closure1_slot10 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot12 = tangon;
    tangon = 16;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        tangon = function(argFoo) { // Original name: ATTManager
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tangon = this;
                romeon = 0;
                entity = copyRestArgs(romeon);
                golfie = _closure1_slot3;
                michal = _closure2_slot0;
                zuuluu = undefined;
                golfie = golfie.bind(zuuluu)(tangon, michal);
                verify = new Array(0);
                romeon = verify;
                yankee = entity;
                offset = 0;
                entity = arraySpread(romeon, yankee, offset);
                entity = _closure1_slot6;
                option = entity.bind(zuuluu)(michal);
                michal = _closure1_slot5;
                entity = _closure1_slot13;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00006_ip = 84; continue _fun00005 }
 71:
                entity = option.apply;
                entity = entity.bind(option)(tangon, verify);
                _fun00006_ip = 118; continue _fun00005;
 84:
                oscard = global;
                golfie = oscard.Reflect;
                oscard = golfie.construct;
                report = _closure1_slot6;
                report = report.bind(zuuluu)(tangon);
                report = report.constructor;
                entity = oscard.bind(golfie)(option, verify, report);
 118:
                entity = michal.bind(zuuluu)(tangon, entity);
                michal = {};
                zuuluu = entity.onPostConnectionOpen;
                michal['POST_CONNECTION_OPEN'] = zuuluu;
                entity['actions'] = michal;
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
        oscard = 'onPostConnectionOpen';
        report['key'] = oscard;
        entity = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                entity = 9;
                tangon = tangon[entity];
                entity = undefined;
                report = report.bind(entity)(tangon);
                tangon = report.isIOS;
                tangon = tangon.bind(report)();
                if(!tangon) { _fun00008_ip = 158; continue _fun00007 }
 40:
                report = _closure1_slot1;
                oscard = _closure1_slot2;
                tangon = 12;
                tangon = oscard[tangon];
                golfie = report.bind(entity)(tangon);
                oscard = golfie.getCurrentConfig;
                report = {};
                tangon = 'ATT_MANAGER';
                report['location'] = tangon;
                tangon = {};
                option = false;
                tangon['autoTrackExposure'] = option;
                tangon = oscard.bind(golfie)(report, tangon);
                tangon = tangon.enabled;
                if(!tangon) { _fun00008_ip = 158; continue _fun00007 }
 101: // try_start_0
                tangon = function() { // Original name: getAttEligibilityCheckResult
                    entity = undefined;
                    tangon = _closure1_slot14;
                    zuuluu = tangon.apply;
                    entity = arguments;
                    michal = entity;
                    entity = this;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                };
                zuuluu = function(argFoo, argBar) {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        zuuluu = argFoo;
                        verify = argBar;
                        report = _closure1_slot1;
                        yankee = _closure1_slot2;
                        entity = 13;
                        tangon = yankee[entity];
                        entity = undefined;
                        golfie = report.bind(entity)(tangon);
                        oscard = golfie.track;
                        tangon = _closure1_slot12;
                        report = tangon.ATT_ELIGIBILITY_CHECKED;
                        tangon = {};
                        tangon['eligible'] = zuuluu;
                        option = verify.currentUserMissing;
                        tangon['current_user_missing'] = option;
                        option = verify.iosVersionRequirementFailed;
                        tangon['ios_version_requirement_failed'] = option;
                        option = verify.accountAgeRequirementFailed;
                        tangon['account_age_requirement_failed'] = option;
                        foxtra = verify.attTrackingStatus;
                        offset = _closure1_slot0;
                        option = 10;
                        romeon = yankee[option];
                        romeon = offset.bind(entity)(romeon);
                        romeon = romeon.ATTTrackingStatus;
                        romeon = romeon.AUTHORIZED;
                        romeon = foxtra === romeon;
                        tangon['att_status_authorized'] = romeon;
                        foxtra = verify.attTrackingStatus;
                        romeon = yankee[option];
                        romeon = offset.bind(entity)(romeon);
                        romeon = romeon.ATTTrackingStatus;
                        romeon = romeon.DENIED;
                        romeon = foxtra === romeon;
                        tangon['att_status_denied'] = romeon;
                        foxtra = verify.attTrackingStatus;
                        romeon = yankee[option];
                        romeon = offset.bind(entity)(romeon);
                        romeon = romeon.ATTTrackingStatus;
                        romeon = romeon.RESTRICTED;
                        romeon = foxtra === romeon;
                        tangon['att_status_restricted'] = romeon;
                        verify = verify.attTrackingStatus;
                        option = yankee[option];
                        option = offset.bind(entity)(option);
                        option = option.ATTTrackingStatus;
                        option = option.NOT_DETERMINED;
                        option = verify === option;
                        tangon['att_status_not_determined'] = option;
                        tangon = oscard.bind(golfie)(report, tangon);
                        if(!zuuluu) { _fun00010_ip = 303; continue _fun00009 }
 260:
                        zuuluu = _closure1_slot1;
                        tangon = _closure1_slot2;
                        michal = 14;
                        michal = tangon[michal];
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.trackExposure;
                        michal = {};
                        report = 'ATT_MANAGER';
                        michal['location'] = report;
                        michal = zuuluu.bind(tangon)(michal);
 303:
                        return entity;
                    }
                };
                zuuluu = tangon.bind(entity)(zuuluu);
                zuuluu = !zuuluu;
 123: // try_end0
                _fun00008_ip = 158; continue _fun00007;
 125: // catch_target0
                CatchBlockStart(arg_register=3);
                zuuluu = _closure1_slot1;
                report = _closure1_slot2;
                michal = 15;
                michal = report[michal];
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.captureException;
                michal = michal.bind(zuuluu)(tangon);
 158:
                return entity;
            }
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
    tangon = 17;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/quests/native/ATTModal/ATTManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();