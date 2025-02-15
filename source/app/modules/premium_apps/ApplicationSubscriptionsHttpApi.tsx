// app/modules/premium_apps/ApplicationSubscriptionsHttpApi.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    options = argBar;
    report = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = report;
    var _closure1_slot2 = verify;
    entity = function() { // Original name: _fetchEligibleApplicationSubscriptionGuilds
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun73984: for(var _fun73984_ip = 0; ; ) switch(_fun73984_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun73984_ip = 112; continue _fun73984 }
 7:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 2;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
                    tango = mike.HTTP;
                    zulu = tango.get;
                    mike = {};
                    report = _closure1_slot4;
                    report = report.ELIGIBLE_APPLICATION_SUBSCRIPTION_GUILDS;
                    mike['url'] = report;
                    report = {};
                    oscar = argFoo;
                    report['application_id'] = oscar;
                    oscar = argBar;
                    report['sku_id'] = oscar;
                    mike['query'] = report;
                    report = false;
                    mike['rejectWithError'] = report;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=95);
 93:
                    return mike;
 95:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun73984_ip = 109; continue _fun73984 }
 101:
                    zulu = mike.body;
                    return zulu;
 109:
                    return mike;
 112:
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
    golf = entity.Object;
    oscar = golf.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(golf)(zulu, entity, tango);
    entity = 0;
    tango = verify[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = verify[tango];
    tango = options.bind(entity)(tango);
    tango = tango.Endpoints;
    var _closure1_slot4 = tango;
    tango = function() {
        tango = _closure1_slot3;
        zulu = undefined;
        mike = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun73987: for(var _fun73987_ip = 0; ; ) switch(_fun73987_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun73987_ip = 102; continue _fun73987 }
 7:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 2;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
                    tango = mike.HTTP;
                    zulu = tango.get;
                    mike = {};
                    options = _closure1_slot4;
                    golf = options.APPLICATION_SUBSCRIPTION_GROUP_LISTING;
                    oscar = argFoo;
                    report = argBar;
                    report = golf.bind(options)(oscar, report);
                    mike['url'] = report;
                    report = false;
                    mike['rejectWithError'] = report;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=85);
 83:
                    return mike;
 85:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun73987_ip = 99; continue _fun73987 }
 91:
                    zulu = mike.body;
                    return zulu;
 99:
                    return mike;
 102:
                    return entity;
                }
            };
            return entity;
        };
        mike = tango.bind(zulu)(mike);
        var _closure2_slot0 = mike;
        entity = function() {
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        return entity;
    };
    oscar = tango.bind(entity)();
    tango = function() {
        tango = _closure1_slot3;
        zulu = undefined;
        mike = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun73991: for(var _fun73991_ip = 0; ; ) switch(_fun73991_ip) {
 0:
                    StartGenerator();
                    golf = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun73991_ip = 144; continue _fun73991 }
 13:
                    report = undefined;
                    if(!(golf === report)) { _fun73991_ip = 21; continue _fun73991 }
 19:
                    golf = false;
 21:
                    SaveGenerator(address=25);
 23:
                    return report;
 25:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun73991_ip = 141; continue _fun73991 }
 31:
                    tango = _closure1_slot0;
                    options = _closure1_slot2;
                    zulu = 2;
                    zulu = options[zulu];
                    zulu = tango.bind(report)(zulu);
                    report = zulu.HTTP;
                    tango = report.get;
                    zulu = {};
                    verify = _closure1_slot4;
                    options = verify.GUILD_ENTITLEMENTS;
                    oscar = argFoo;
                    oscar = options.bind(verify)(oscar);
                    zulu['url'] = oscar;
                    oscar = {'with_sku': true, 'with_application': true};
                    oscar['exclude_deleted'] = golf;
                    zulu['query'] = oscar;
                    oscar = false;
                    zulu['rejectWithError'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    SaveGenerator(address=124);
 122:
                    return zulu;
 124:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun73991_ip = 138; continue _fun73991 }
 130:
                    tango = zulu.body;
                    return tango;
 138:
                    return zulu;
 141:
                    return mike;
 144:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        mike = tango.bind(zulu)(mike);
        var _closure2_slot0 = mike;
        entity = function() {
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        return entity;
    };
    report = tango.bind(entity)();
    tango = function() {
        tango = _closure1_slot3;
        zulu = undefined;
        mike = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun73995: for(var _fun73995_ip = 0; ; ) switch(_fun73995_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun73995_ip = 98; continue _fun73995 }
 7:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 2;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
                    tango = mike.HTTP;
                    zulu = tango.get;
                    mike = {};
                    golf = _closure1_slot4;
                    oscar = golf.SUBSCRIPTION_PLAN_GROUP_LISTING;
                    report = argFoo;
                    report = oscar.bind(golf)(report);
                    mike['url'] = report;
                    report = false;
                    mike['rejectWithError'] = report;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=81);
 79:
                    return mike;
 81:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun73995_ip = 95; continue _fun73995 }
 87:
                    zulu = mike.body;
                    return zulu;
 95:
                    return mike;
 98:
                    return entity;
                }
            };
            return entity;
        };
        mike = tango.bind(zulu)(mike);
        var _closure2_slot0 = mike;
        entity = function() {
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        return entity;
    };
    tango = tango.bind(entity)();
    golf = 5;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/premium_apps/ApplicationSubscriptionsHttpApi.tsx';
    golf = options.bind(verify)(golf);
    zulu['getApplicationSubscriptionGroupListingsForApplication'] = oscar;
    zulu['getEntitlementsForGuild'] = report;
    zulu['getSubscriptionGroupForSubscriptionPlan'] = tango;
    tango = function(argFoo, argBar) { // Original name: fetchApplication
        golf = argFoo;
        var _closure2_slot0 = golf;
        zulu = _closure1_slot1;
        oscar = _closure1_slot2;
        mike = 3;
        mike = oscar[mike];
        tango = undefined;
        options = zulu.bind(tango)(mike);
        zulu = options.dispatch;
        mike = {};
        verify = 'APPLICATION_FETCH';
        mike['type'] = verify;
        mike['applicationId'] = golf;
        mike = zulu.bind(options)(mike);
        zulu = _closure1_slot0;
        mike = 2;
        mike = oscar[mike];
        mike = zulu.bind(tango)(mike);
        tango = mike.HTTP;
        zulu = tango.get;
        mike = {};
        oscar = _closure1_slot4;
        report = oscar.APPLICATION_PUBLIC;
        report = report.bind(oscar)(golf);
        mike['url'] = report;
        report = argBar;
        mike['signal'] = report;
        report = false;
        mike['rejectWithError'] = report;
        tango = zulu.bind(tango)(mike);
        zulu = tango.then;
        mike = function(argFoo) {
            entity = argFoo;
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 3;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.dispatch;
            mike = {};
            report = 'APPLICATION_FETCH_SUCCESS';
            mike['type'] = report;
            report = entity.body;
            mike['application'] = report;
            mike = zulu.bind(tango)(mike);
            entity = entity.body;
            return entity;
        };
        zulu = zulu.bind(tango)(mike);
        mike = zulu.catch;
        entity = function(argFoo) {
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            entity = 3;
            entity = oscar[entity];
            tango = undefined;
            zulu = report.bind(tango)(entity);
            mike = zulu.dispatch;
            entity = {};
            golf = 'APPLICATION_FETCH_FAIL';
            entity['type'] = golf;
            golf = _closure2_slot0;
            entity['applicationId'] = golf;
            entity = mike.bind(zulu)(entity);
            entity = global;
            zulu = entity.Promise;
            mike = zulu.reject;
            entity = 4;
            entity = oscar[entity];
            report = report.bind(tango)(entity);
            entity = report.prototype;
            tango = Object.create(entity, {constructor: {value: report}});
            options = argFoo;
            verify = tango;
            entity = new verify[report](options, golf);
            entity = entity instanceof Object ? entity : tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['fetchApplication'] = tango;
    mike = function() { // Original name: fetchEligibleApplicationSubscriptionGuilds
        entity = undefined;
        tango = _closure1_slot5;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchEligibleApplicationSubscriptionGuilds'] = mike;
    return entity;
})();