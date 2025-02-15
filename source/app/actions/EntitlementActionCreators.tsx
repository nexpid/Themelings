// app/actions/EntitlementActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _fetchUserEntitlements
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00002_ip = 330; continue _fun00001 }
 13:
                    report = mike.withSku;
                    zulu = undefined;
                    if(!(report === zulu)) { _fun00002_ip = 29; continue _fun00001 }
 27:
                    report = false;
 29:
                    foxtrot = report;
                    report = mike.withApplication;
                    if(!(report === zulu)) { _fun00002_ip = 44; continue _fun00001 }
 42:
                    report = false;
 44:
                    romeo = report;
                    report = mike.excludeEnded;
                    if(!(report === zulu)) { _fun00002_ip = 59; continue _fun00001 }
 57:
                    report = true;
 59:
                    offset = report;
                    yankee = mike.entitlementType;
                    SaveGenerator(address=72);
 70:
                    return zulu;
 72:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00002_ip = 327; continue _fun00001 }
 81:
                    golf = _closure1_slot1;
                    report = _closure1_slot2;
                    oscar = 2;
                    report = report[oscar];
                    options = golf.bind(zulu)(report);
                    golf = options.dispatch;
                    report = {};
                    verify = 'ENTITLEMENTS_FETCH_FOR_USER_START';
                    report['type'] = verify;
                    report = golf.bind(options)(report);
 126: // try_start_0
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    report = 3;
                    report = options[report];
                    report = golf.bind(zulu)(report);
                    options = report.HTTP;
                    golf = options.get;
                    report = {};
                    verify = _closure1_slot4;
                    verify = verify.ENTITLEMENTS_FOR_USER;
                    report['url'] = verify;
                    verify = {};
                    verify['with_sku'] = foxtrot;
                    verify['with_application'] = romeo;
                    verify['entitlement_type'] = yankee;
                    yankee = offset;
                    verify['exclude_ended'] = yankee;
                    report['query'] = verify;
                    verify = true;
                    report['rejectWithError'] = verify;
                    report = golf.bind(options)(report);
                    SaveGenerator(address=220);
 218:
                    return report;
 220:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(golf) { _fun00002_ip = 280; continue _fun00001 }
 226:
                    options = _closure1_slot1;
                    golf = _closure1_slot2;
                    golf = golf[oscar];
                    verify = options.bind(zulu)(golf);
                    options = verify.dispatch;
                    golf = {};
                    yankee = 'ENTITLEMENTS_FETCH_FOR_USER_SUCCESS';
                    golf['type'] = yankee;
                    yankee = report.body;
                    golf['entitlements'] = yankee;
                    golf['excludeEnded'] = offset;
                    golf = options.bind(verify)(golf);
 278: // try_end0
                    _fun00002_ip = 324; continue _fun00001;
 280:
                    return report;
 283: // catch_target0
                    CatchBlockStart(arg_register=4);
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    tango = tango[oscar];
                    oscar = report.bind(zulu)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    golf = 'ENTITLEMENTS_FETCH_FOR_USER_FAIL';
                    tango['type'] = golf;
                    tango = report.bind(oscar)(tango);
 324:
                    return zulu;
 327:
                    return mike;
 330:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
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
    entity = function() { // Original name: _fetchGiftableEntitlements
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00004_ip = 216; continue _fun00003 }
 10:
                    oscar = _closure1_slot1;
                    mike = _closure1_slot2;
                    report = 2;
                    tango = mike[report];
                    mike = undefined;
                    golf = oscar.bind(mike)(tango);
                    oscar = golf.dispatch;
                    tango = {};
                    options = 'ENTITLEMENTS_GIFTABLE_FETCH';
                    tango['type'] = options;
                    tango = oscar.bind(golf)(tango);
 57: // try_start_0
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    tango = 4;
                    tango = golf[tango];
                    golf = oscar.bind(mike)(tango);
                    oscar = golf.httpGetWithCountryCodeQuery;
                    tango = {};
                    options = _closure1_slot4;
                    options = options.ENTITLEMENTS_GIFTABLE;
                    tango['url'] = options;
                    options = true;
                    tango['rejectWithError'] = options;
                    tango = oscar.bind(golf)(tango);
                    SaveGenerator(address=114);
 112:
                    return tango;
 114:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscar) { _fun00004_ip = 169; continue _fun00003 }
 120:
                    golf = _closure1_slot1;
                    oscar = _closure1_slot2;
                    oscar = oscar[report];
                    options = golf.bind(mike)(oscar);
                    golf = options.dispatch;
                    oscar = {};
                    verify = 'ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS';
                    oscar['type'] = verify;
                    verify = tango.body;
                    oscar['entitlements'] = verify;
                    oscar = golf.bind(options)(oscar);
 167: // try_end0
                    _fun00004_ip = 213; continue _fun00003;
 169:
                    return tango;
 172: // catch_target0
                    CatchBlockStart(arg_register=3);
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    zulu = zulu[report];
                    report = tango.bind(mike)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    oscar = 'ENTITLEMENTS_GIFTABLE_FETCH_FAIL';
                    zulu['type'] = oscar;
                    zulu = tango.bind(report)(zulu);
 213:
                    return mike;
 216:
                    return entity;
                }
            };
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
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'actions/EntitlementActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: fetchUserEntitlementsForApplication
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            options = argFoo;
            golf = arguments[1];
            var _closure2_slot0 = options;
            tango = undefined;
            if(!(golf === tango)) { _fun00006_ip = 20; continue _fun00005 }
 18:
            golf = true;
 20:
            zulu = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 2;
            mike = oscar[mike];
            verify = zulu.bind(tango)(mike);
            zulu = verify.wait;
            mike = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 2;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {};
                report = 'ENTITLEMENT_FETCH_APPLICATION_START';
                mike['type'] = report;
                report = _closure2_slot0;
                mike['applicationId'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            mike = zulu.bind(verify)(mike);
            zulu = _closure1_slot0;
            mike = 3;
            mike = oscar[mike];
            mike = zulu.bind(tango)(mike);
            tango = mike.HTTP;
            zulu = tango.get;
            mike = {};
            oscar = _closure1_slot4;
            report = oscar.ENTITLEMENTS_FOR_APPLICATION;
            report = report.bind(oscar)(options);
            mike['url'] = report;
            report = true;
            mike['oldFormErrors'] = report;
            oscar = {};
            oscar['exclude_consumed'] = golf;
            mike['query'] = oscar;
            mike['rejectWithError'] = report;
            tango = zulu.bind(tango)(mike);
            zulu = tango.then;
            mike = function(argFoo) {
                entity = argFoo;
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 2;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = tango.dispatch;
                mike = {};
                report = 'ENTITLEMENT_FETCH_APPLICATION_SUCCESS';
                mike['type'] = report;
                report = _closure2_slot0;
                mike['applicationId'] = report;
                report = entity.body;
                mike['entitlements'] = report;
                mike = zulu.bind(tango)(mike);
                entity = entity.body;
                return entity;
            };
            zulu = zulu.bind(tango)(mike);
            mike = zulu.catch;
            entity = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 2;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {};
                report = 'ENTITLEMENT_FETCH_APPLICATION_FAIL';
                mike['type'] = report;
                report = _closure2_slot0;
                mike['applicationId'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['fetchUserEntitlementsForApplication'] = tango;
    tango = function() { // Original name: fetchUserEntitlements
        entity = undefined;
        tango = _closure1_slot5;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchUserEntitlements'] = tango;
    mike = function() { // Original name: fetchGiftableEntitlements
        entity = undefined;
        tango = _closure1_slot6;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchGiftableEntitlements'] = mike;
    return entity;
})();