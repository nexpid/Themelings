// app/actions/HubActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.Endpoints;
    var _closure1_slot4 = mike;
    mike = {};
    golf = function(argFoo, argBar) { // Original name: signup
        mike = _closure1_slot1;
        options = _closure1_slot2;
        entity = 2;
        entity = options[entity];
        golf = undefined;
        zulu = mike.bind(golf)(entity);
        mike = zulu.post;
        entity = {};
        tango = _closure1_slot4;
        tango = tango.HUB_WAITLIST_SIGNUP;
        entity['url'] = tango;
        tango = {};
        oscar = argFoo;
        tango['email'] = oscar;
        oscar = argBar;
        tango['school'] = oscar;
        entity['body'] = tango;
        tango = {};
        oscar = _closure1_slot0;
        report = 3;
        report = options[report];
        report = oscar.bind(golf)(report);
        report = report.NetworkActionNames;
        report = report.HUB_WAITLIST_SIGNUP;
        tango['event'] = report;
        report = function(argFoo) { // Original name: properties
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                mike = argFoo;
                entity = null;
                tango = entity == mike;
                zulu = undefined;
                report = undefined;
                if(tango) { _fun00002_ip = 38; continue _fun00001 }
 16:
                mike = mike.body;
                tango = entity == mike;
                report = undefined;
                if(tango) { _fun00002_ip = 38; continue _fun00001 }
 30:
                report = mike.email_domain;
 38:
                entity = entity != report;
                tango = false;
                if(!entity) { _fun00002_ip = 87; continue _fun00001 }
 47:
                mike = report.split;
                entity = '.';
                report = mike.bind(report)(entity);
                mike = report.indexOf;
                entity = 'edu';
                mike = mike.bind(report)(entity);
                entity = -1;
                tango = entity !== mike;
 87:
                mike = _closure1_slot0;
                report = _closure1_slot2;
                entity = 4;
                entity = report[entity];
                zulu = mike.bind(zulu)(entity);
                mike = zulu.exact;
                entity = {};
                entity['is_edu_email'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        tango['properties'] = report;
        entity['trackedActionData'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['signup'] = golf;
    golf = function(argFoo, argBar, argBaz) { // Original name: sendVerificationEmail
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        mike = argBaz;
        var _closure2_slot2 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00004_ip = 189; continue _fun00003 }
 10:
                    zulu = _closure1_slot1;
                    verify = _closure1_slot2;
                    mike = 2;
                    mike = verify[mike];
                    options = undefined;
                    tango = zulu.bind(options)(mike);
                    zulu = tango.post;
                    mike = {};
                    report = _closure1_slot4;
                    report = report.HUB_EMAIL_VERIFY_SEND;
                    mike['url'] = report;
                    report = {};
                    offset = _closure2_slot0;
                    report['email'] = offset;
                    offset = _closure2_slot2;
                    report['guild_id'] = offset;
                    golf = _closure2_slot1;
                    report['allow_multiple_guilds'] = golf;
                    golf = true;
                    report['use_verification_code'] = golf;
                    mike['body'] = report;
                    report = {};
                    golf = _closure1_slot0;
                    oscar = 3;
                    oscar = verify[oscar];
                    oscar = golf.bind(options)(oscar);
                    oscar = oscar.NetworkActionNames;
                    oscar = oscar.HUB_EMAIL_VERIFY_SEND;
                    report['event'] = oscar;
                    oscar = function(argFoo) { // Original name: properties
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            entity = argFoo;
                            mike = null;
                            report = mike == entity;
                            zulu = undefined;
                            tango = undefined;
                            if(report) { _fun00006_ip = 36; continue _fun00005 }
 16:
                            entity = entity.body;
                            mike = mike == entity;
                            tango = undefined;
                            if(mike) { _fun00006_ip = 36; continue _fun00005 }
 30:
                            tango = entity.has_matching_guild;
 36:
                            mike = _closure1_slot0;
                            report = _closure1_slot2;
                            entity = 4;
                            entity = report[entity];
                            zulu = mike.bind(zulu)(entity);
                            mike = zulu.exact;
                            entity = {};
                            entity['has_matching_guild'] = tango;
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        }
                    };
                    report['properties'] = oscar;
                    mike['trackedActionData'] = report;
                    report = false;
                    mike['rejectWithError'] = report;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=172);
 170:
                    return mike;
 172:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00004_ip = 186; continue _fun00003 }
 178:
                    zulu = mike.body;
                    return zulu;
 186:
                    return mike;
 189:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['sendVerificationEmail'] = golf;
    golf = function(argFoo) { // Original name: verify
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00008_ip = 289; continue _fun00007 }
 10:
                    mike = undefined;
                    report = undefined;
                    zulu = _closure2_slot0;
                    golf = null;
                    if(!(golf != zulu)) { _fun00008_ip = 286; continue _fun00007 }
 30: // try_start_0
                    oscar = _closure1_slot1;
                    romeo = _closure1_slot2;
                    zulu = 2;
                    zulu = romeo[zulu];
                    options = oscar.bind(mike)(zulu);
                    oscar = options.post;
                    zulu = {};
                    verify = _closure1_slot4;
                    verify = verify.HUB_EMAIL_VERIFY;
                    zulu['url'] = verify;
                    verify = {};
                    offset = _closure2_slot0;
                    verify['token'] = offset;
                    zulu['body'] = verify;
                    verify = {};
                    yankee = _closure1_slot0;
                    offset = 3;
                    offset = romeo[offset];
                    offset = yankee.bind(mike)(offset);
                    offset = offset.NetworkActionNames;
                    offset = offset.HUB_EMAIL_VERIFY;
                    verify['event'] = offset;
                    zulu['trackedActionData'] = verify;
                    verify = false;
                    zulu['rejectWithError'] = verify;
                    zulu = oscar.bind(options)(zulu);
                    SaveGenerator(address=145);
 143:
                    return zulu;
 145:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(oscar) { _fun00008_ip = 226; continue _fun00007 }
 151:
                    oscar = zulu.body;
                    oscar = oscar.guild;
                    report = oscar;
                    oscar = golf == oscar;
                    golf = undefined;
                    if(oscar) { _fun00008_ip = 178; continue _fun00007 }
 173:
                    golf = report.id;
 178:
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    tango = 5;
                    tango = oscar[tango];
                    oscar = report.bind(mike)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    options = 'HUB_VERIFY_EMAIL_SUCCESS';
                    tango['type'] = options;
                    tango['guildId'] = golf;
                    tango = report.bind(oscar)(tango);
 224: // try_end0
                    _fun00008_ip = 286; continue _fun00007;
 226:
                    return zulu;
 229: // catch_target0
                    CatchBlockStart(arg_register=5);
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    zulu = 5;
                    zulu = report[zulu];
                    report = tango.bind(mike)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    golf = 'HUB_VERIFY_EMAIL_FAILURE';
                    zulu['type'] = golf;
                    oscar = oscar.body;
                    zulu['errors'] = oscar;
                    zulu = tango.bind(report)(zulu);
 286:
                    return mike;
 289:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['verify'] = golf;
    tango = function(argFoo, argBar, argBaz) { // Original name: verifyCode
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        mike = argBaz;
        var _closure2_slot2 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00010_ip = 315; continue _fun00009 }
 10:
                    report = undefined;
                    oscar = undefined;
                    zulu = undefined;
                    mike = _closure2_slot0;
                    options = null;
                    if(!(options == mike)) { _fun00010_ip = 32; continue _fun00009 }
 29:
                    return report;
 32: // try_start_0
                    golf = _closure1_slot1;
                    foxtrot = _closure1_slot2;
                    mike = 2;
                    mike = foxtrot[mike];
                    verify = golf.bind(report)(mike);
                    golf = verify.post;
                    mike = {};
                    offset = _closure1_slot4;
                    offset = offset.HUB_EMAIL_VERIFY_CODE;
                    mike['url'] = offset;
                    offset = {};
                    romeo = _closure2_slot0;
                    offset['code'] = romeo;
                    romeo = _closure2_slot1;
                    offset['guild_id'] = romeo;
                    yankee = _closure2_slot2;
                    offset['email'] = yankee;
                    mike['body'] = offset;
                    offset = {};
                    romeo = _closure1_slot0;
                    yankee = 3;
                    yankee = foxtrot[yankee];
                    yankee = romeo.bind(report)(yankee);
                    yankee = yankee.NetworkActionNames;
                    yankee = yankee.HUB_EMAIL_VERIFY;
                    offset['event'] = yankee;
                    mike['trackedActionData'] = offset;
                    offset = false;
                    mike['rejectWithError'] = offset;
                    mike = golf.bind(verify)(mike);
                    SaveGenerator(address=163);
 161:
                    return mike;
 163:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(golf) { _fun00010_ip = 253; continue _fun00009 }
 169:
                    zulu = mike;
                    golf = mike.body;
                    golf = golf.guild;
                    oscar = golf;
                    golf = options == golf;
                    options = undefined;
                    if(golf) { _fun00010_ip = 199; continue _fun00009 }
 194:
                    options = oscar.id;
 199:
                    oscar = _closure1_slot1;
                    golf = _closure1_slot2;
                    tango = 5;
                    tango = golf[tango];
                    golf = oscar.bind(report)(tango);
                    oscar = golf.dispatch;
                    tango = {};
                    verify = 'HUB_VERIFY_EMAIL_SUCCESS';
                    tango['type'] = verify;
                    tango['guildId'] = options;
                    tango = oscar.bind(golf)(tango);
                    zulu = zulu.body;
 250: // try_end0
                    return zulu;
 253:
                    return mike;
 256: // catch_target0
                    CatchBlockStart(arg_register=1);
                    tango = _closure1_slot1;
                    oscar = _closure1_slot2;
                    zulu = 5;
                    zulu = oscar[zulu];
                    report = tango.bind(report)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    oscar = 'HUB_VERIFY_EMAIL_FAILURE';
                    zulu['type'] = oscar;
                    oscar = mike.body;
                    zulu['errors'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    throw mike;
 315:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['verifyCode'] = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'actions/HubActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();