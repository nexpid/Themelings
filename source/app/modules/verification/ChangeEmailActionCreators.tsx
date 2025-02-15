// app/modules/verification/ChangeEmailActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _confirmEmailChange
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00002_ip = 142; continue _fun00001 }
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
                    report = report.USER_EMAIL_VERIFY_CODE;
                    mike['url'] = report;
                    report = {};
                    golf = argFoo;
                    report['code'] = golf;
                    mike['body'] = report;
                    report = {};
                    golf = _closure1_slot0;
                    oscar = 3;
                    oscar = verify[oscar];
                    oscar = golf.bind(options)(oscar);
                    oscar = oscar.NetworkActionNames;
                    oscar = oscar.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE;
                    report['event'] = oscar;
                    mike['trackedActionData'] = report;
                    report = false;
                    mike['rejectWithError'] = report;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=125);
 123:
                    return mike;
 125:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00002_ip = 139; continue _fun00001 }
 131:
                    zulu = mike.body;
                    return zulu;
 139:
                    return mike;
 142:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot5 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot5 = entity;
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
    tango = report.bind(entity)(tango);
    tango = tango.Endpoints;
    var _closure1_slot4 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/verification/ChangeEmailActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: sendConfirmationCode
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscar = arguments[0];
            options = undefined;
            if(!(oscar === options)) { _fun00004_ip = 11; continue _fun00003 }
 9:
            oscar = false;
 11:
            mike = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 2;
            entity = verify[entity];
            zulu = mike.bind(options)(entity);
            mike = zulu.put;
            entity = {};
            tango = _closure1_slot4;
            tango = tango.USER_EMAIL;
            entity['url'] = tango;
            tango = {};
            golf = _closure1_slot0;
            report = 3;
            report = verify[report];
            report = golf.bind(options)(report);
            report = report.NetworkActionNames;
            report = report.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE;
            tango['event'] = report;
            report = {};
            report['is_resend'] = oscar;
            tango['properties'] = report;
            entity['trackedActionData'] = tango;
            tango = false;
            entity['rejectWithError'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['sendConfirmationCode'] = tango;
    mike = function() { // Original name: confirmEmailChange
        entity = undefined;
        tango = _closure1_slot5;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['confirmEmailChange'] = mike;
    return entity;
})();