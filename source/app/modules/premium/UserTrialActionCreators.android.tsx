// app/modules/premium/UserTrialActionCreators.android.tsx
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
    golf = mike.Endpoints;
    var _closure1_slot4 = golf;
    mike = mike.PaymentGateways;
    var _closure1_slot5 = mike;
    mike = {};
    golf = function() { // Original name: fetchUserTrialOffer
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00002_ip = 215; continue _fun00001 }
 10: // try_start_0
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 2;
                    mike = report[mike];
                    report = undefined;
                    mike = tango.bind(report)(mike);
                    oscar = mike.HTTP;
                    tango = oscar.get;
                    mike = {};
                    golf = _closure1_slot4;
                    golf = golf.USER_TRIAL_OFFER;
                    mike['url'] = golf;
                    golf = {};
                    options = _closure1_slot5;
                    options = options.GOOGLE;
                    golf['payment_gateway'] = options;
                    mike['query'] = golf;
                    golf = true;
                    mike['oldFormErrors'] = golf;
                    mike['rejectWithError'] = golf;
                    mike = tango.bind(oscar)(mike);
                    SaveGenerator(address=102);
 100:
                    return mike;
 102:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00002_ip = 160; continue _fun00001 }
 108:
                    oscar = mike.body;
                    tango = _closure1_slot1;
                    golf = _closure1_slot2;
                    zulu = 3;
                    zulu = golf[zulu];
                    report = tango.bind(report)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    golf = 'BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS';
                    zulu['type'] = golf;
                    zulu['userTrialOffer'] = oscar;
                    zulu = tango.bind(report)(zulu);
 158: // try_end0
                    _fun00002_ip = 210; continue _fun00001;
 160:
                    return mike;
 163: // catch_target0
                    CatchBlockStart(arg_register=1);
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 3;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.dispatch;
                    mike = {};
                    report = 'BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS';
                    mike['type'] = report;
                    mike = zulu.bind(tango)(mike);
 210:
                    mike = undefined;
                    return mike;
 215:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['fetchUserTrialOffer'] = golf;
    tango = function(argFoo) { // Original name: acknowledgeUserTrialOffer
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00004_ip = 243; continue _fun00003 }
 10:
                    mike = _closure2_slot0;
                    zulu = mike.expires_at;
                    mike = null;
                    if(!(mike == zulu)) { _fun00004_ip = 238; continue _fun00003 }
 32: // try_start_0
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 2;
                    mike = report[mike];
                    report = undefined;
                    mike = tango.bind(report)(mike);
                    oscar = mike.HTTP;
                    tango = oscar.post;
                    mike = {};
                    verify = _closure1_slot4;
                    options = verify.USER_TRIAL_OFFER_ACKNOWLEDGED;
                    golf = _closure2_slot0;
                    golf = golf.id;
                    golf = options.bind(verify)(golf);
                    mike['url'] = golf;
                    golf = false;
                    mike['rejectWithError'] = golf;
                    mike = tango.bind(oscar)(mike);
                    SaveGenerator(address=113);
 111:
                    return mike;
 113:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00004_ip = 173; continue _fun00003 }
 119:
                    oscar = mike.body;
                    tango = _closure1_slot1;
                    golf = _closure1_slot2;
                    zulu = 3;
                    zulu = golf[zulu];
                    report = tango.bind(report)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    golf = 'BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS';
                    zulu['type'] = golf;
                    zulu['userTrialOffer'] = oscar;
                    zulu = tango.bind(report)(zulu);
 171: // try_end0
                    _fun00004_ip = 238; continue _fun00003;
 173:
                    return mike;
 176: // catch_target0
                    CatchBlockStart(arg_register=1);
                    zulu = mike.status;
                    mike = 404;
                    if(!(mike === zulu)) { _fun00004_ip = 238; continue _fun00003 }
 193:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 3;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.dispatch;
                    mike = {'type': 'BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS', 'userTrialOffer': null};
                    mike = zulu.bind(tango)(mike);
 238:
                    mike = undefined;
                    return mike;
 243:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['acknowledgeUserTrialOffer'] = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/premium/UserTrialActionCreators.android.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();