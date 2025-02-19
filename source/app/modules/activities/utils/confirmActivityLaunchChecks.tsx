// app/modules/activities/utils/confirmActivityLaunchChecks.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: getOrFetchApplicationForLaunch
        entity = undefined;
        tangon = _closure1_slot8;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = function() { // Original name: _getOrFetchApplicationForLaunch
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 199; continue _fun00001 }
 10:
                    option = argFoo;
                    verify = argBar;
 16: // try_start_0
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 4;
                    michal = tangon[michal];
                    report = undefined;
                    tangon = zuuluu.bind(report)(michal);
                    zuuluu = option;
                    michal = verify;
                    michal = tangon.bind(report)(zuuluu, michal);
                    SaveGenerator(address=57);
 55:
                    return michal;
 57:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 66; continue _fun00001 }
 63: // try_end0
                    return michal;
 66:
                    return michal;
 69: // catch_target0
                    CatchBlockStart(arg_register=5);
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 5;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {'type': 'EMBEDDED_ACTIVITY_LAUNCH_FAIL', 'nonce': ''};
                    zuuluu['applicationId'] = option;
                    offset = verify;
                    option = null;
                    offset = option != offset;
                    if(!offset) { _fun00002_ip = 134; continue _fun00001 }
 131:
                    option = verify;
 134:
                    zuuluu['channelId'] = option;
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    golfie = 6;
                    golfie = verify[golfie];
                    golfie = option.bind(michal)(golfie);
                    option = golfie.APIError;
                    romeon = oscard;
                    golfie = option.prototype;
                    golfie = Object.create(golfie, {constructor: {value: option}});
                    foxtra = golfie;
                    oscard = new foxtra[option](romeon, yankee);
                    oscard = oscard instanceof Object ? oscard : golfie;
                    zuuluu['error'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    return michal;
 199:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot8 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = function() { // Original name: _confirmActivityChange
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 102; continue _fun00003 }
 9:
                    michal = argFoo;
                    report = michal.currentEmbeddedApplication;
                    var _closure4_slot0 = report;
                    michal = undefined;
                    SaveGenerator(address=28);
 26:
                    return michal;
 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00004_ip = 99; continue _fun00003 }
 34:
                    tangon = null;
                    if(!(tangon != report)) { _fun00004_ip = 91; continue _fun00003 }
 40:
                    tangon = global;
                    report = tangon.Promise;
                    tangon = report.prototype;
                    tangon = Object.create(tangon, {constructor: {value: report}});
                    oscard = function(argFoo) {
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            golfie = argFoo;
                            var _closure5_slot0 = golfie;
                            zuuluu = _closure1_slot5;
                            entity = zuuluu.getSelfEmbeddedActivities;
                            oscard = entity.bind(zuuluu)();
                            report = oscard.get;
                            entity = _closure4_slot0;
                            entity = entity.id;
                            option = report.bind(oscard)(entity);
                            var _closure5_slot1 = option;
                            oscard = _closure1_slot0;
                            report = _closure1_slot2;
                            entity = 7;
                            report = report[entity];
                            entity = undefined;
                            offset = oscard.bind(entity)(report);
                            verify = offset.getEmbeddedActivityLocationChannelId;
                            report = null;
                            yankee = report == option;
                            oscard = undefined;
                            if(yankee) { _fun00006_ip = 96; continue _fun00005 }
 91:
                            oscard = option.location;
 96:
                            offset = verify.bind(offset)(oscard);
                            verify = _closure1_slot4;
                            oscard = verify.getChannel;
                            oscard = oscard.bind(verify)(offset);
                            if(!(report != option)) { _fun00006_ip = 123; continue _fun00005 }
 119:
                            if(!(report == oscard)) { _fun00006_ip = 132; continue _fun00005 }
 123:
                            report = true;
                            report = golfie.bind(entity)(report);
                            _fun00006_ip = 175; continue _fun00005;
 132:
                            report = _closure1_slot1;
                            golfie = _closure1_slot2;
                            tangon = 8;
                            tangon = golfie[tangon];
                            report = report.bind(entity)(tangon);
                            kiloes = _closure4_slot0;
                            foxtra = function() {
                                zuuluu = _closure1_slot1;
                                michal = _closure1_slot2;
                                entity = 9;
                                michal = michal[entity];
                                entity = undefined;
                                michal = zuuluu.bind(entity)(michal);
                                report = michal.bind(entity)();
                                tangon = report.leaveActivity;
                                zuuluu = {};
                                oscard = _closure5_slot1;
                                oscard = oscard.location;
                                zuuluu['location'] = oscard;
                                oscard = _closure4_slot0;
                                oscard = oscard.id;
                                zuuluu['applicationId'] = oscard;
                                zuuluu = tangon.bind(report)(zuuluu);
                                zuuluu = _closure5_slot0;
                                michal = true;
                                michal = zuuluu.bind(entity)(michal);
                                return entity;
                            };
                            romeon = function() {
                                zuuluu = _closure5_slot0;
                                michal = undefined;
                                entity = false;
                                entity = zuuluu.bind(michal)(entity);
                                return entity;
                            };
                            sizing = undefined;
                            backup = oscard;
                            michal = sizing[report](kiloes, backup, foxtra, romeon, yankee);
 175:
                            return entity;
                        }
                    };
                    golfie = tangon;
                    zuuluu = new golfie[report](oscard, report);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    SaveGenerator(address=77);
 75:
                    return zuuluu;
 77:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00004_ip = 96; continue _fun00003 }
 83:
                    if(zuuluu) { _fun00004_ip = 91; continue _fun00003 }
 86:
                    tangon = false;
                    return tangon;
 91:
                    tangon = true;
                    return tangon;
 96:
                    return zuuluu;
 99:
                    return michal;
 102:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot9 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _confirmActivityAgeGate
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tangon) { _fun00008_ip = 223; continue _fun00007 }
 15:
                    oscard = michal.application;
                    verify = michal.applicationId;
                    offset = michal.channel;
                    var _closure4_slot0 = offset;
                    report = michal.user;
                    tangon = undefined;
                    var _closure4_slot1 = tangon;
                    SaveGenerator(address=49);
 47:
                    return tangon;
 49:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(golfie) { _fun00008_ip = 220; continue _fun00007 }
 58:
                    golfie = report.nsfwAllowed;
                    report = null;
                    if(!(report == golfie)) { _fun00008_ip = 207; continue _fun00007 }
 73:
                    if(!(report == oscard)) { _fun00008_ip = 120; continue _fun00007 }
 77:
                    option = _closure1_slot7;
                    yankee = report == offset;
                    golfie = undefined;
                    if(yankee) { _fun00008_ip = 98; continue _fun00007 }
 93:
                    golfie = offset.id;
 98:
                    golfie = option.bind(tangon)(verify, golfie);
                    SaveGenerator(address=108);
 106:
                    return golfie;
 108:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    oscard = golfie;
                    if(!option) { _fun00008_ip = 120; continue _fun00007 }
 117:
                    return golfie;
 120:
                    _closure4_slot1 = oscard;
                    if(!(report != oscard)) { _fun00008_ip = 215; continue _fun00007 }
 128:
                    oscard = oscard.embeddedActivityConfig;
                    golfie = report == oscard;
                    tangon = undefined;
                    if(golfie) { _fun00008_ip = 149; continue _fun00007 }
 143:
                    tangon = oscard.requires_age_gate;
 149:
                    if(!(report != tangon)) { _fun00008_ip = 207; continue _fun00007 }
 153:
                    if(!tangon) { _fun00008_ip = 207; continue _fun00007 }
 156:
                    tangon = global;
                    report = tangon.Promise;
                    tangon = report.prototype;
                    tangon = Object.create(tangon, {constructor: {value: report}});
                    foxtra = function(argFoo) {
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            entity = argFoo;
                            var _closure5_slot0 = entity;
                            zuuluu = _closure1_slot0;
                            michal = _closure1_slot2;
                            entity = 10;
                            michal = michal[entity];
                            entity = undefined;
                            tangon = zuuluu.bind(entity)(michal);
                            zuuluu = tangon.confirmActivityAgeGateAlert;
                            michal = {};
                            oscard = _closure4_slot1;
                            michal['application'] = oscard;
                            option = _closure4_slot0;
                            oscard = null;
                            option = oscard == option;
                            oscard = undefined;
                            if(option) { _fun00010_ip = 77; continue _fun00009 }
 68:
                            golfie = _closure4_slot0;
                            oscard = golfie.id;
 77:
                            michal['channelId'] = oscard;
                            oscard = function() { // Original name: onAgree
                                zuuluu = _closure5_slot0;
                                michal = undefined;
                                entity = true;
                                entity = zuuluu.bind(michal)(entity);
                                return entity;
                            };
                            michal['onAgree'] = oscard;
                            report = function() { // Original name: onDisagree
                                zuuluu = _closure5_slot0;
                                michal = undefined;
                                entity = false;
                                entity = zuuluu.bind(michal)(entity);
                                return entity;
                            };
                            michal['onDisagree'] = report;
                            michal = zuuluu.bind(tangon)(michal);
                            return entity;
                        }
                    };
                    backup = tangon;
                    zuuluu = new backup[report](foxtra, romeon);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    SaveGenerator(address=193);
 191:
                    return zuuluu;
 193:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00008_ip = 212; continue _fun00007 }
 199:
                    if(zuuluu) { _fun00008_ip = 207; continue _fun00007 }
 202:
                    tangon = false;
                    return tangon;
 207:
                    tangon = true;
                    return tangon;
 212:
                    return zuuluu;
 215:
                    zuuluu = false;
                    return zuuluu;
 220:
                    return michal;
 223:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot10 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _confirmExternalAppLaunch
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00012_ip = 254; continue _fun00011 }
 15:
                    tangon = michal.application;
                    option = michal.applicationId;
                    verify = michal.channel;
                    offset = undefined;
                    var _closure4_slot0 = offset;
                    SaveGenerator(address=40);
 38:
                    return offset;
 40:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00012_ip = 251; continue _fun00011 }
 49:
                    zuuluu = null;
                    if(!(zuuluu == tangon)) { _fun00012_ip = 98; continue _fun00011 }
 55:
                    golfie = _closure1_slot7;
                    yankee = zuuluu == verify;
                    report = undefined;
                    if(yankee) { _fun00012_ip = 76; continue _fun00011 }
 71:
                    report = verify.id;
 76:
                    report = golfie.bind(offset)(option, report);
                    SaveGenerator(address=86);
 84:
                    return report;
 86:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    tangon = report;
                    if(!golfie) { _fun00012_ip = 98; continue _fun00011 }
 95:
                    return report;
 98:
                    _closure4_slot0 = tangon;
                    zuuluu = zuuluu != tangon;
                    if(!zuuluu) { _fun00012_ip = 248; continue _fun00011 }
 112:
                    verify = _closure1_slot0;
                    yankee = _closure1_slot2;
                    golfie = 11;
                    golfie = yankee[golfie];
                    yankee = verify.bind(offset)(golfie);
                    offset = yankee.hasFlag;
                    verify = tangon.flags;
                    golfie = _closure1_slot6;
                    golfie = golfie.EMBEDDED_RELEASED;
                    golfie = offset.bind(yankee)(verify, golfie);
                    golfie = !golfie;
                    if(!golfie) { _fun00012_ip = 177; continue _fun00011 }
 168:
                    tangon = tangon.isVerified;
                    golfie = !tangon;
 177:
                    tangon = !golfie;
                    if(!golfie) { _fun00012_ip = 245; continue _fun00011 }
 183:
                    golfie = _closure1_slot5;
                    report = golfie.hasActivityEverBeenLaunched;
                    report = report.bind(golfie)(option);
                    golfie = !report;
                    report = !golfie;
                    if(!golfie) { _fun00012_ip = 242; continue _fun00011 }
 209:
                    golfie = global;
                    option = golfie.Promise;
                    golfie = option.prototype;
                    golfie = Object.create(golfie, {constructor: {value: option}});
                    foxtra = function(argFoo) {
                        entity = argFoo;
                        var _closure5_slot0 = entity;
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 12;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.confirmExternalAppLaunchAlert;
                        michal = {};
                        oscard = _closure4_slot0;
                        michal['application'] = oscard;
                        oscard = function() { // Original name: onConfirm
                            zuuluu = _closure5_slot0;
                            michal = undefined;
                            entity = true;
                            entity = zuuluu.bind(michal)(entity);
                            return entity;
                        };
                        michal['onConfirm'] = oscard;
                        report = function() { // Original name: onCancel
                            zuuluu = _closure5_slot0;
                            michal = undefined;
                            entity = false;
                            entity = zuuluu.bind(michal)(entity);
                            return entity;
                        };
                        michal['onCancel'] = report;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    backup = golfie;
                    oscard = new backup[option](foxtra, romeon);
                    report = oscard instanceof Object ? oscard : golfie;
 242:
                    tangon = report;
 245:
                    zuuluu = tangon;
 248:
                    return zuuluu;
 251:
                    return michal;
 254:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot11 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = function() { // Original name: _confirmActivityLaunchChecks
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    oscard = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00014_ip = 121; continue _fun00013 }
 12:
                    zuuluu = {};
                    michal = oscard.currentEmbeddedApplication;
                    zuuluu['currentEmbeddedApplication'] = michal;
                    michal = function() { // Original name: confirmActivityChange
                        entity = undefined;
                        tangon = _closure1_slot9;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    report = undefined;
                    michal = michal.bind(report)(zuuluu);
                    SaveGenerator(address=41);
 39:
                    return michal;
 41:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00014_ip = 118; continue _fun00013 }
 47:
                    if(michal) { _fun00014_ip = 55; continue _fun00013 }
 50:
                    zuuluu = false;
                    return zuuluu;
 55:
                    zuuluu = function() { // Original name: confirmActivityAgeGate
                        entity = undefined;
                        tangon = _closure1_slot10;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    zuuluu = zuuluu.bind(report)(oscard);
                    SaveGenerator(address=69);
 67:
                    return zuuluu;
 69:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(golfie) { _fun00014_ip = 115; continue _fun00013 }
 75:
                    if(zuuluu) { _fun00014_ip = 83; continue _fun00013 }
 78:
                    golfie = false;
                    return golfie;
 83:
                    tangon = function() { // Original name: confirmExternalAppLaunch
                        entity = undefined;
                        tangon = _closure1_slot11;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    tangon = tangon.bind(report)(oscard);
                    SaveGenerator(address=97);
 95:
                    return tangon;
 97:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00014_ip = 112; continue _fun00013 }
 103:
                    report = !tangon;
                    report = !report;
                    return report;
 112:
                    return tangon;
 115:
                    return zuuluu;
 118:
                    return michal;
 121:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot12 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot12 = entity;
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ApplicationFlags;
    var _closure1_slot6 = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/utils/confirmActivityLaunchChecks.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: confirmActivityLaunchChecks
        entity = undefined;
        tangon = _closure1_slot12;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['confirmActivityLaunchChecks'] = michal;
    return entity;
})();