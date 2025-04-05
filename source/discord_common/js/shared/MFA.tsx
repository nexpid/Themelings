// discord_common/js/shared/MFA.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    tangon = function() { // Original name: finishMFACheck
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot3 = tangon;
    entity = function() { // Original name: _finishMFACheck
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot2;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    oscard = argFoo;
                    michal = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 240; continue _fun00001 }
 16:
                    romeon = oscard.ticket;
                    yankee = oscard.mfaType;
                    offset = oscard.data;
                    golfie = undefined;
                    if(!(michal === golfie)) { _fun00002_ip = 42; continue _fun00001 }
 39:
                    michal = 2;
 42:
                    option = michal;
                    tangon = undefined;
                    SaveGenerator(address=51);
 49:
                    return golfie;
 51:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 237; continue _fun00001 }
 60: // try_start_0
                    oscard = _closure1_slot0;
                    verify = _closure1_slot1;
                    report = 1;
                    report = verify[report];
                    report = oscard.bind(golfie)(report);
                    golfie = report.HTTP;
                    oscard = golfie.post;
                    report = {};
                    verify = '/mfa/finish';
                    report['url'] = verify;
                    verify = {};
                    verify['ticket'] = romeon;
                    verify['mfa_type'] = yankee;
                    verify['data'] = offset;
                    report['body'] = verify;
                    report['retries'] = option;
                    option = false;
                    report['rejectWithError'] = option;
                    report = oscard.bind(golfie)(report);
                    SaveGenerator(address=148);
 146:
                    return report;
 148:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(oscard) { _fun00002_ip = 162; continue _fun00001 }
 154:
                    oscard = report.body;
 159: // try_end0
                    return oscard;
 162:
                    return report;
 165: // catch_target0
                    CatchBlockStart(arg_register=4);
                    zuuluu = report;
                    oscard = report.body;
                    tangon = oscard;
                    report = null;
                    if(!(report != oscard)) { _fun00002_ip = 192; continue _fun00001 }
 184:
                    tangon = tangon.message;
                    if(tangon) { _fun00002_ip = 197; continue _fun00001 }
 192:
                    tangon = zuuluu;
                    throw tangon;
 197:
                    tangon = global;
                    report = tangon.Error;
                    zuuluu = zuuluu.body;
                    foxtra = zuuluu.message;
                    tangon = report.prototype;
                    tangon = Object.create(tangon, {constructor: {value: report}});
                    backup = tangon;
                    zuuluu = new backup[report](foxtra, romeon);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    throw zuuluu;
 237:
                    return michal;
 240:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot4 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot4 = entity;
    entity = function() { // Original name: _trySubmit
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot2;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 98; continue _fun00003 }
 9:
                    michal = argBar;
                    var _closure4_slot0 = michal;
                    report = undefined;
                    var _closure4_slot1 = report;
                    tangon = _closure1_slot3;
                    michal = argFoo;
                    michal = tangon.bind(report)(michal);
                    SaveGenerator(address=41);
 39:
                    return michal;
 41:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00004_ip = 95; continue _fun00003 }
 47:
                    tangon = michal.token;
                    _closure4_slot1 = tangon;
                    tangon = global;
                    report = tangon.Promise;
                    tangon = report.prototype;
                    tangon = Object.create(tangon, {constructor: {value: report}});
                    oscard = function(argFoo, argBar) {
                        entity = argFoo;
                        var _closure5_slot0 = entity;
                        entity = argBar;
                        var _closure5_slot1 = entity;
                        tangon = _closure4_slot0;
                        zuuluu = {};
                        entity = _closure4_slot1;
                        zuuluu['X-Discord-MFA-Authorization'] = entity;
                        entity = undefined;
                        michal = function(argFoo) {
                            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                                michal = argFoo;
                                entity = michal.body;
                                zuuluu = null;
                                oscard = zuuluu == entity;
                                tangon = undefined;
                                report = undefined;
                                if(oscard) { _fun00006_ip = 26; continue _fun00005 }
 21:
                                report = entity.code;
 26:
                                entity = 60008;
                                if(!(entity !== report)) { _fun00006_ip = 80; continue _fun00005 }
 36:
                                entity = michal.body;
                                report = zuuluu == entity;
                                zuuluu = undefined;
                                if(report) { _fun00006_ip = 55; continue _fun00005 }
 50:
                                zuuluu = entity.code;
 55:
                                entity = 60003;
                                if(!(entity !== zuuluu)) { _fun00006_ip = 80; continue _fun00005 }
 65:
                                entity = _closure5_slot0;
                                entity = entity.bind(tangon)();
                                entity = false;
                                _fun00006_ip = 132; continue _fun00005;
 80:
                                zuuluu = _closure5_slot1;
                                report = global;
                                oscard = report.Error;
                                michal = michal.body;
                                golfie = michal.message;
                                report = oscard.prototype;
                                report = Object.create(report, {constructor: {value: oscard}});
                                option = report;
                                michal = new option[oscard](golfie, oscard);
                                michal = michal instanceof Object ? michal : report;
                                michal = zuuluu.bind(tangon)(michal);
                                entity = true;
 132:
                                return entity;
                            }
                        };
                        michal = tangon.bind(entity)(zuuluu, michal);
                        return entity;
                    };
                    golfie = tangon;
                    zuuluu = new golfie[report](oscard, report);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    return zuuluu;
 95:
                    return michal;
 98:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot5 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot5 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    option = golfie[entity];
    report = argBaz;
    entity = undefined;
    report = report.bind(entity)(option);
    var _closure1_slot2 = report;
    report = 2;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = '../discord_common/js/shared/MFA.tsx';
    report = oscard.bind(golfie)(report);
    report = 8;
    zuuluu['BACKUP_CODE_MIN_LENGTH'] = report;
    report = 11;
    zuuluu['BACKUP_CODE_MAX_LENGTH'] = report;
    report = 6;
    zuuluu['TOTP_CODE_LENGTH'] = report;
    zuuluu['SMS_CODE_LENGTH'] = report;
    zuuluu['finishMFACheck'] = tangon;
    michal = function() { // Original name: trySubmit
        entity = undefined;
        tangon = _closure1_slot5;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['trySubmit'] = michal;
    return entity;
})();