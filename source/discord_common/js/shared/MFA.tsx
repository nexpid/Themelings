// discord_common/js/shared/MFA.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    tango = function() { // Original name: finishMFACheck
        entity = undefined;
        tango = _closure1_slot6;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot5 = tango;
    entity = function() { // Original name: _finishMFACheck
        report = undefined;
        entity = undefined;
        tango = _closure1_slot2;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun98640: for(var _fun98640_ip = 0; ; ) switch(_fun98640_ip) {
 0:
                    StartGenerator();
                    oscar = argFoo;
                    mike = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                    if(report) { _fun98640_ip = 240; continue _fun98640 }
 16:
                    romeo = oscar.ticket;
                    yankee = oscar.mfaType;
                    offset = oscar.data;
                    golf = undefined;
                    if(!(mike === golf)) { _fun98640_ip = 42; continue _fun98640 }
 39:
                    mike = 2;
 42:
                    options = mike;
                    tango = undefined;
                    SaveGenerator(address=51);
 49:
                    return golf;
 51:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun98640_ip = 237; continue _fun98640 }
 60: // try_start_0
                    oscar = _closure1_slot0;
                    verify = _closure1_slot1;
                    report = 1;
                    report = verify[report];
                    report = oscar.bind(golf)(report);
                    golf = report.HTTP;
                    oscar = golf.post;
                    report = {};
                    verify = '/mfa/finish';
                    report['url'] = verify;
                    verify = {};
                    verify['ticket'] = romeo;
                    verify['mfa_type'] = yankee;
                    verify['data'] = offset;
                    report['body'] = verify;
                    report['retries'] = options;
                    options = false;
                    report['rejectWithError'] = options;
                    report = oscar.bind(golf)(report);
                    SaveGenerator(address=148);
 146:
                    return report;
 148:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(oscar) { _fun98640_ip = 162; continue _fun98640 }
 154:
                    oscar = report.body;
 159: // try_end0
                    return oscar;
 162:
                    return report;
 165: // catch_target0
                    CatchBlockStart(arg_register=4);
                    zulu = report;
                    oscar = report.body;
                    tango = oscar;
                    report = null;
                    if(!(report != oscar)) { _fun98640_ip = 192; continue _fun98640 }
 184:
                    tango = tango.message;
                    if(tango) { _fun98640_ip = 197; continue _fun98640 }
 192:
                    tango = zulu;
                    throw tango;
 197:
                    tango = global;
                    report = tango.Error;
                    zulu = zulu.body;
                    foxtrot = zulu.message;
                    tango = report.prototype;
                    tango = Object.create(tango, {constructor: {value: report}});
                    backup = tango;
                    zulu = new backup[report](foxtrot, romeo);
                    zulu = zulu instanceof Object ? zulu : tango;
                    throw zulu;
 237:
                    return mike;
 240:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot6 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot6 = entity;
    entity = function() { // Original name: _trySubmit
        report = undefined;
        entity = undefined;
        tango = _closure1_slot2;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun98643: for(var _fun98643_ip = 0; ; ) switch(_fun98643_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun98643_ip = 98; continue _fun98643 }
 9:
                    mike = argBar;
                    var _closure4_slot0 = mike;
                    report = undefined;
                    var _closure4_slot1 = report;
                    tango = _closure1_slot5;
                    mike = argFoo;
                    mike = tango.bind(report)(mike);
                    SaveGenerator(address=41);
 39:
                    return mike;
 41:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun98643_ip = 95; continue _fun98643 }
 47:
                    tango = mike.token;
                    _closure4_slot1 = tango;
                    tango = global;
                    report = tango.Promise;
                    tango = report.prototype;
                    tango = Object.create(tango, {constructor: {value: report}});
                    oscar = function(argFoo, argBar) {
                        entity = argFoo;
                        var _closure5_slot0 = entity;
                        entity = argBar;
                        var _closure5_slot1 = entity;
                        tango = _closure4_slot0;
                        zulu = {};
                        entity = _closure4_slot1;
                        zulu['X-Discord-MFA-Authorization'] = entity;
                        entity = undefined;
                        mike = function(argFoo) {
                            _fun98645: for(var _fun98645_ip = 0; ; ) switch(_fun98645_ip) {
 0:
                                mike = argFoo;
                                entity = mike.body;
                                zulu = null;
                                report = zulu == entity;
                                tango = undefined;
                                oscar = undefined;
                                if(report) { _fun98645_ip = 26; continue _fun98645 }
 21:
                                oscar = entity.code;
 26:
                                report = _closure1_slot4;
                                if(!(oscar !== report)) { _fun98645_ip = 79; continue _fun98645 }
 37:
                                report = mike.body;
                                oscar = zulu == report;
                                zulu = undefined;
                                if(oscar) { _fun98645_ip = 56; continue _fun98645 }
 51:
                                zulu = report.code;
 56:
                                entity = _closure1_slot3;
                                if(!(zulu !== entity)) { _fun98645_ip = 79; continue _fun98645 }
 64:
                                entity = _closure5_slot0;
                                entity = entity.bind(tango)();
                                entity = false;
                                _fun98645_ip = 131; continue _fun98645;
 79:
                                zulu = _closure5_slot1;
                                report = global;
                                oscar = report.Error;
                                mike = mike.body;
                                golf = mike.message;
                                report = oscar.prototype;
                                report = Object.create(report, {constructor: {value: oscar}});
                                options = report;
                                mike = new options[oscar](golf, oscar);
                                mike = mike instanceof Object ? mike : report;
                                mike = zulu.bind(tango)(mike);
                                entity = true;
 131:
                                return entity;
                            }
                        };
                        mike = tango.bind(entity)(zulu, mike);
                        return entity;
                    };
                    golf = tango;
                    zulu = new golf[report](oscar, report);
                    zulu = zulu instanceof Object ? zulu : tango;
                    return zulu;
 95:
                    return mike;
 98:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot7 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    options = golf[entity];
    report = argBaz;
    entity = undefined;
    report = report.bind(entity)(options);
    var _closure1_slot2 = report;
    report = 60003;
    var _closure1_slot3 = report;
    report = 60008;
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = '../discord_common/js/shared/MFA.tsx';
    report = oscar.bind(golf)(report);
    report = 8;
    zulu['BACKUP_CODE_MIN_LENGTH'] = report;
    report = 11;
    zulu['BACKUP_CODE_MAX_LENGTH'] = report;
    report = 6;
    zulu['TOTP_CODE_LENGTH'] = report;
    zulu['SMS_CODE_LENGTH'] = report;
    zulu['finishMFACheck'] = tango;
    mike = function() { // Original name: trySubmit
        entity = undefined;
        tango = _closure1_slot7;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['trySubmit'] = mike;
    return entity;
})();