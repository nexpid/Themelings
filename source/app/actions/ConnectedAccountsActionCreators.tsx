// app/actions/ConnectedAccountsActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    golf = function(argFoo, argBar) { // Original name: callback
        _fun59517: for(var _fun59517_ip = 0; ; ) switch(_fun59517_ip) {
 0:
            yankee = argFoo;
            offset = arguments[2];
            options = undefined;
            if(!(offset === options)) { _fun59517_ip = 14; continue _fun59517 }
 12:
            offset = false;
 14:
            oscar = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 5;
            entity = verify[entity];
            entity = oscar.bind(options)(entity);
            zulu = entity.HTTP;
            mike = zulu.post;
            entity = {};
            report = _closure1_slot7;
            tango = report.CONNECTIONS_CALLBACK;
            tango = tango.bind(report)(yankee);
            entity['url'] = tango;
            tango = {};
            romeo = argBar;
            foxtrot = tango;
            report = copyDataProperties(foxtrot, romeo);
            report = 'insecure';
            tango[report] = offset;
            offset = _closure1_slot8;
            report = offset.has;
            offset = report.bind(offset)(yankee);
            report = 'friend_sync';
            tango[report] = offset;
            report = 6;
            report = verify[report];
            report = oscar.bind(options)(report);
            options = report.ExperimentConnectionFlowRefactor;
            oscar = options.getCurrentConfig;
            report = {};
            verify = 'ConnectedAccountsActionCreators.callback';
            report['location'] = verify;
            report = oscar.bind(options)(report);
            report = report.enabled;
            if(report) { _fun59517_ip = 166; continue _fun59517 }
 162:
            report = {};
            _fun59517_ip = 190; continue _fun59517;
 166:
            oscar = {};
            options = _closure1_slot4;
            golf = options.getSessionId;
            golf = golf.bind(options)();
            oscar['session_id'] = golf;
            report = oscar;
 190:
            foxtrot = tango;
            romeo = report;
            report = copyDataProperties(foxtrot, romeo);
            entity['body'] = tango;
            tango = true;
            entity['oldFormErrors'] = tango;
            tango = false;
            entity['rejectWithError'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    var _closure1_slot11 = golf;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = options.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    verify = mike.AbortCodes;
    var _closure1_slot6 = verify;
    verify = mike.Endpoints;
    var _closure1_slot7 = verify;
    verify = mike.FRIEND_SYNC_PLATFORM_TYPES;
    var _closure1_slot8 = verify;
    mike = mike.AnalyticEvents;
    var _closure1_slot9 = mike;
    mike = 4;
    mike = oscar[mike];
    verify = options.bind(entity)(mike);
    mike = verify.prototype;
    options = Object.create(mike, {constructor: {value: verify}});
    foxtrot = 'ConnectedAccounts';
    backup = options;
    mike = new backup[verify](foxtrot, romeo);
    mike = mike instanceof Object ? mike : options;
    var _closure1_slot10 = mike;
    mike = {};
    options = function() { // Original name: fetch
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        mike = 5;
        zulu = zulu[mike];
        mike = undefined;
        mike = tango.bind(mike)(zulu);
        tango = mike.HTTP;
        zulu = tango.get;
        mike = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
        report = _closure1_slot7;
        report = report.CONNECTIONS;
        mike['url'] = report;
        tango = zulu.bind(tango)(mike);
        zulu = tango.then;
        mike = function(argFoo) {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 7;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dispatch;
            entity = {'type': 'USER_CONNECTIONS_UPDATE', 'local': true};
            tango = argFoo;
            tango = tango.body;
            entity['accounts'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 7;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dispatch;
            entity = {'type': 'USER_CONNECTIONS_UPDATE', 'local': true};
            tango = new Array(0);
            entity['accounts'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    mike['fetch'] = options;
    options = function(argFoo) { // Original name: authorize
        _fun59521: for(var _fun59521_ip = 0; ; ) switch(_fun59521_ip) {
 0:
            zulu = arguments[1];
            mike = argFoo;
            var _closure2_slot0 = mike;
            mike = undefined;
            if(!(zulu === mike)) { _fun59521_ip = 20; continue _fun59521 }
 18:
            zulu = {};
 20:
            tango = zulu.location;
            var _closure2_slot1 = tango;
            tango = zulu.twoWayLinkType;
            var _closure2_slot2 = tango;
            tango = zulu.userCode;
            var _closure2_slot3 = tango;
            tango = zulu.twoWayLink;
            var _closure2_slot4 = tango;
            tango = zulu.successRedirect;
            var _closure2_slot5 = tango;
            zulu = zulu.handle;
            var _closure2_slot6 = zulu;
            zulu = _closure1_slot3;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun59523: for(var _fun59523_ip = 0; ; ) switch(_fun59523_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun59523_ip = 636; continue _fun59523 }
 10:
                        tango = _closure1_slot1;
                        report = _closure1_slot2;
                        mike = 8;
                        mike = report[mike];
                        options = undefined;
                        verify = tango.bind(options)(mike);
                        golf = verify.track;
                        mike = _closure1_slot9;
                        report = mike.CONNECTED_ACCOUNT_INITIATED;
                        tango = {};
                        oscar = _closure2_slot0;
                        tango['platform_type'] = oscar;
                        offset = _closure2_slot1;
                        tango['location'] = offset;
                        tango = golf.bind(verify)(report, tango);
                        report = _closure1_slot7;
                        tango = report.CONNECTIONS_AUTHORIZE;
                        report = tango.bind(report)(oscar);
                        golf = global;
                        tango = golf.URLSearchParams;
                        oscar = tango.prototype;
                        oscar = Object.create(oscar, {constructor: {value: tango}});
                        kilo = oscar;
                        tango = new kilo[tango](backup);
                        oscar = tango instanceof Object ? tango : oscar;
                        verify = _closure2_slot3;
                        tango = null;
                        if(!(tango != verify)) { _fun59523_ip = 153; continue _fun59523 }
 131:
                        yankee = oscar.append;
                        offset = _closure2_slot3;
                        verify = 'two_way_user_code';
                        verify = yankee.bind(oscar)(verify, offset);
 153:
                        verify = _closure2_slot5;
                        if(!(tango != verify)) { _fun59523_ip = 183; continue _fun59523 }
 161:
                        yankee = oscar.append;
                        offset = _closure2_slot5;
                        verify = 'success_redirect';
                        verify = yankee.bind(oscar)(verify, offset);
 183:
                        verify = _closure2_slot2;
                        if(!(tango == verify)) { _fun59523_ip = 234; continue _fun59523 }
 191:
                        verify = _closure2_slot4;
                        if(!(tango != verify)) { _fun59523_ip = 278; continue _fun59523 }
 199:
                        offset = oscar.append;
                        verify = golf.String;
                        golf = _closure2_slot4;
                        verify = verify.bind(options)(golf);
                        golf = 'two_way_link';
                        golf = offset.bind(oscar)(golf, verify);
                        _fun59523_ip = 278; continue _fun59523;
 234:
                        offset = oscar.append;
                        verify = _closure2_slot2;
                        golf = 'two_way_link_type';
                        golf = offset.bind(oscar)(golf, verify);
                        offset = oscar.append;
                        verify = 'two_way_link';
                        golf = 'true';
                        golf = offset.bind(oscar)(verify, golf);
 278:
                        golf = _closure2_slot6;
                        if(!(tango != golf)) { _fun59523_ip = 306; continue _fun59523 }
 286:
                        verify = oscar.append;
                        golf = _closure2_slot6;
                        mike = 'handle';
                        mike = verify.bind(oscar)(mike, golf);
 306:
                        golf = _closure1_slot0;
                        mike = _closure1_slot2;
                        verify = 6;
                        mike = mike[verify];
                        mike = golf.bind(options)(mike);
                        yankee = mike.ExperimentConnectionFlowRefactor;
                        offset = yankee.getCurrentConfig;
                        golf = {};
                        mike = 'ConnectedAcountsActionCreators.authorize';
                        golf['location'] = mike;
                        mike = {};
                        romeo = true;
                        mike['autoTrackExposure'] = romeo;
                        mike = offset.bind(yankee)(golf, mike);
                        mike = mike.enabled;
                        if(!mike) { _fun59523_ip = 407; continue _fun59523 }
 373:
                        golf = _closure1_slot4;
                        mike = golf.getSessionId;
                        offset = mike.bind(golf)();
                        if(!(tango != offset)) { _fun59523_ip = 407; continue _fun59523 }
 391:
                        golf = oscar.append;
                        mike = 'session_id';
                        mike = golf.bind(oscar)(mike, offset);
 407:
                        mike = '?';
                        report = report + mike;
                        mike = oscar.toString;
                        mike = mike.bind(oscar)();
                        golf = report + mike;
                        report = _closure1_slot0;
                        oscar = _closure1_slot2;
                        mike = 5;
                        mike = oscar[mike];
                        mike = report.bind(options)(mike);
                        oscar = mike.HTTP;
                        report = oscar.get;
                        mike = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                        mike['url'] = golf;
                        mike = report.bind(oscar)(mike);
                        SaveGenerator(address=483);
 481:
                        return mike;
 483:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(report) { _fun59523_ip = 633; continue _fun59523 }
 492:
                        oscar = _closure1_slot0;
                        golf = _closure1_slot2;
                        report = 9;
                        report = golf[report];
                        golf = oscar.bind(options)(report);
                        oscar = golf.getCallbackParamsFromURL;
                        report = mike.body;
                        offset = report.url;
                        yankee = tango != offset;
                        report = '';
                        if(!yankee) { _fun59523_ip = 542; continue _fun59523 }
 539:
                        report = offset;
 542:
                        report = oscar.bind(golf)(report);
                        report = report.state;
                        tango = tango == report;
                        if(tango) { _fun59523_ip = 610; continue _fun59523 }
 559:
                        golf = _closure1_slot0;
                        oscar = _closure1_slot2;
                        oscar = oscar[verify];
                        oscar = golf.bind(options)(oscar);
                        options = oscar.ExperimentConnectionFlowRefactor;
                        golf = options.getCurrentConfig;
                        oscar = {};
                        verify = 'ConnectedAccountsActionCreators.authorize';
                        oscar['location'] = verify;
                        oscar = golf.bind(options)(oscar);
                        tango = oscar.enabled;
 610:
                        if(tango) { _fun59523_ip = 630; continue _fun59523 }
 613:
                        tango = _closure1_slot5;
                        zulu = tango.addPendingAuthorizedState;
                        zulu = zulu.bind(tango)(report);
 630:
                        return mike;
 633:
                        return mike;
 636:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zulu.bind(mike)(entity);
            entity = entity.bind(mike)();
            return entity;
        }
    };
    mike['authorize'] = options;
    mike['callback'] = golf;
    golf = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: connect
        _fun59524: for(var _fun59524_ip = 0; ; ) switch(_fun59524_ip) {
 0:
            options = argFoo;
            golf = argBaz;
            yankee = argGrault;
            mike = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 10;
            entity = zulu[entity];
            offset = undefined;
            zulu = mike.bind(offset)(entity);
            mike = zulu.put;
            entity = {};
            verify = _closure1_slot7;
            report = verify.CONNECTION;
            tango = argBar;
            tango = report.bind(verify)(options, tango);
            entity['url'] = tango;
            tango = {};
            tango['name'] = golf;
            verify = null;
            romeo = verify == yankee;
            report = undefined;
            if(romeo) { _fun59524_ip = 88; continue _fun59524 }
 82:
            report = yankee.friend_sync;
 88:
            if(!(verify == report)) { _fun59524_ip = 106; continue _fun59524 }
 92:
            yankee = _closure1_slot8;
            verify = yankee.has;
            report = verify.bind(yankee)(options);
 106:
            tango['friend_sync'] = report;
            entity['body'] = tango;
            tango = {};
            report = argCorge;
            tango['location'] = report;
            entity['context'] = tango;
            tango = true;
            entity['oldFormErrors'] = tango;
            tango = {};
            verify = _closure1_slot0;
            yankee = _closure1_slot2;
            report = 11;
            report = yankee[report];
            report = verify.bind(offset)(report);
            report = report.NetworkActionNames;
            report = report.USER_CONNECTIONS_UPDATE;
            tango['event'] = report;
            report = {};
            report['name'] = golf;
            golf = _closure1_slot8;
            oscar = golf.has;
            oscar = oscar.bind(golf)(options);
            report['friend_sync'] = oscar;
            tango['properties'] = report;
            entity['trackedActionData'] = tango;
            tango = false;
            entity['rejectWithError'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    mike['connect'] = golf;
    golf = function(argFoo, argBar) { // Original name: disconnect
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.del;
        entity = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        golf = _closure1_slot7;
        oscar = golf.CONNECTION;
        report = argFoo;
        tango = argBar;
        tango = oscar.bind(golf)(report, tango);
        entity['url'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['disconnect'] = golf;
    golf = function(argFoo, argBar) { // Original name: refresh
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.post;
        entity = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        golf = _closure1_slot7;
        oscar = golf.CONNECTION_REFRESH;
        report = argFoo;
        tango = argBar;
        tango = oscar.bind(golf)(report, tango);
        entity['url'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['refresh'] = golf;
    golf = function(argFoo, argBar, argBaz) { // Original name: setVisibility
        report = this;
        tango = report.update;
        zulu = {};
        mike = 1;
        entity = argBaz;
        entity = mike === entity;
        zulu['visibility'] = entity;
        mike = argFoo;
        entity = argBar;
        entity = tango.bind(report)(mike, entity, zulu);
        return entity;
    };
    mike['setVisibility'] = golf;
    golf = function(argFoo, argBar, argBaz) { // Original name: setMetadataVisibility
        report = this;
        tango = report.update;
        zulu = {};
        mike = 1;
        entity = argBaz;
        entity = mike === entity;
        zulu['metadata_visibility'] = entity;
        mike = argFoo;
        entity = argBar;
        entity = tango.bind(report)(mike, entity, zulu);
        return entity;
    };
    mike['setMetadataVisibility'] = golf;
    golf = function(argFoo, argBar, argBaz) { // Original name: setFriendSync
        report = this;
        tango = report.update;
        zulu = {};
        entity = argBaz;
        zulu['friend_sync'] = entity;
        mike = argFoo;
        entity = argBar;
        entity = tango.bind(report)(mike, entity, zulu);
        return entity;
    };
    mike['setFriendSync'] = golf;
    golf = function(argFoo, argBar, argBaz) { // Original name: setShowActivity
        report = this;
        tango = report.update;
        zulu = {};
        entity = argBaz;
        zulu['show_activity'] = entity;
        mike = argFoo;
        entity = argBar;
        entity = tango.bind(report)(mike, entity, zulu);
        return entity;
    };
    mike['setShowActivity'] = golf;
    golf = function(argFoo, argBar, argBaz) { // Original name: update
        oscar = argBaz;
        mike = _closure1_slot1;
        verify = _closure1_slot2;
        entity = 10;
        entity = verify[entity];
        options = undefined;
        zulu = mike.bind(options)(entity);
        mike = zulu.patch;
        entity = {};
        yankee = _closure1_slot7;
        offset = yankee.CONNECTION;
        golf = argFoo;
        tango = argBar;
        tango = offset.bind(yankee)(golf, tango);
        entity['url'] = tango;
        entity['body'] = oscar;
        tango = true;
        entity['oldFormErrors'] = tango;
        tango = {};
        golf = _closure1_slot0;
        report = 11;
        report = verify[report];
        report = golf.bind(options)(report);
        report = report.NetworkActionNames;
        report = report.USER_CONNECTIONS_UPDATE;
        tango['event'] = report;
        report = {};
        foxtrot = report;
        romeo = oscar;
        oscar = copyDataProperties(foxtrot, romeo);
        tango['properties'] = report;
        entity['trackedActionData'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['update'] = golf;
    golf = function(argFoo, argBar) { // Original name: joinServer
        options = argFoo;
        var _closure2_slot0 = options;
        entity = argBar;
        var _closure2_slot1 = entity;
        tango = _closure1_slot1;
        report = _closure1_slot2;
        entity = 7;
        zulu = report[entity];
        entity = undefined;
        golf = tango.bind(entity)(zulu);
        tango = golf.dispatch;
        zulu = {'type': 'USER_CONNECTIONS_INTEGRATION_JOINING', 'integrationId': null, 'joining': true};
        zulu['integrationId'] = options;
        zulu = tango.bind(golf)(zulu);
        tango = _closure1_slot0;
        zulu = 5;
        zulu = report[zulu];
        zulu = tango.bind(entity)(zulu);
        report = zulu.HTTP;
        tango = report.post;
        zulu = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        golf = _closure1_slot7;
        oscar = golf.INTEGRATION_JOIN;
        oscar = oscar.bind(golf)(options);
        zulu['url'] = oscar;
        mike = function(argFoo) {
            _fun59533: for(var _fun59533_ip = 0; ; ) switch(_fun59533_ip) {
 0:
                golf = argFoo;
                tango = _closure1_slot1;
                entity = _closure1_slot2;
                report = 7;
                mike = entity[report];
                entity = undefined;
                options = tango.bind(entity)(mike);
                oscar = options.dispatch;
                tango = {'type': 'USER_CONNECTIONS_INTEGRATION_JOINING', 'integrationId': null, 'joining': false};
                verify = _closure2_slot0;
                tango['integrationId'] = verify;
                tango = oscar.bind(options)(tango);
                tango = golf.ok;
                if(tango) { _fun59533_ip = 165; continue _fun59533 }
 74:
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                zulu = zulu[report];
                report = tango.bind(entity)(zulu);
                tango = report.dispatch;
                zulu = {};
                oscar = 'USER_CONNECTIONS_INTEGRATION_JOINING_ERROR';
                zulu['type'] = oscar;
                oscar = _closure2_slot0;
                zulu['integrationId'] = oscar;
                options = golf.hasErr;
                oscar = undefined;
                if(options) { _fun59533_ip = 138; continue _fun59533 }
 128:
                golf = golf.body;
                oscar = golf.message;
 138:
                zulu['error'] = oscar;
                zulu = tango.bind(report)(zulu);
                tango = _closure2_slot1;
                zulu = null;
                if(!(zulu != tango)) { _fun59533_ip = 165; continue _fun59533 }
 157:
                mike = _closure2_slot1;
                mike = mike.bind(entity)();
 165:
                return entity;
            }
        };
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    mike['joinServer'] = golf;
    golf = function(argFoo, argBar) { // Original name: refreshAccessToken
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun59536: for(var _fun59536_ip = 0; ; ) switch(_fun59536_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun59536_ip = 289; continue _fun59536 }
 10: // try_start_0
                    tango = _closure1_slot0;
                    oscar = _closure1_slot2;
                    zulu = 5;
                    zulu = oscar[zulu];
                    golf = undefined;
                    zulu = tango.bind(golf)(zulu);
                    oscar = zulu.HTTP;
                    tango = oscar.get;
                    zulu = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    romeo = _closure1_slot7;
                    yankee = romeo.CONNECTION_ACCESS_TOKEN;
                    offset = _closure2_slot0;
                    verify = _closure2_slot1;
                    verify = yankee.bind(romeo)(offset, verify);
                    zulu['url'] = verify;
                    zulu = tango.bind(oscar)(zulu);
                    SaveGenerator(address=97);
 95:
                    return zulu;
 97:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun59536_ip = 181; continue _fun59536 }
 103:
                    tango = zulu.body;
                    tango = tango.access_token;
                    oscar = _closure1_slot1;
                    verify = _closure1_slot2;
                    report = 7;
                    report = verify[report];
                    golf = oscar.bind(golf)(report);
                    oscar = golf.dispatch;
                    report = {};
                    verify = 'USER_CONNECTION_UPDATE';
                    report['type'] = verify;
                    verify = _closure2_slot0;
                    report['platformType'] = verify;
                    options = _closure2_slot1;
                    report['id'] = options;
                    report['accessToken'] = tango;
                    report = oscar.bind(golf)(report);
 178: // try_end0
                    return tango;
 181:
                    return zulu;
 184: // catch_target0
                    CatchBlockStart(arg_register=2);
                    mike = zulu;
                    zulu = zulu.body;
                    report = zulu.code;
                    tango = _closure1_slot6;
                    tango = tango.CONNECTION_REVOKED;
                    if(!(report === tango)) { _fun59536_ip = 287; continue _fun59536 }
 216:
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    zulu = 7;
                    tango = tango[zulu];
                    zulu = undefined;
                    report = report.bind(zulu)(tango);
                    tango = report.dispatch;
                    zulu = {};
                    oscar = 'USER_CONNECTION_UPDATE';
                    zulu['type'] = oscar;
                    golf = _closure2_slot0;
                    zulu['platformType'] = golf;
                    oscar = _closure2_slot1;
                    zulu['id'] = oscar;
                    oscar = true;
                    zulu['revoked'] = oscar;
                    zulu = tango.bind(report)(zulu);
 287:
                    throw mike;
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
    mike['refreshAccessToken'] = golf;
    golf = function(argFoo, argBar) { // Original name: linkDispatchAuthCallback
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.post;
        entity = {};
        oscar = _closure1_slot7;
        report = oscar.CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK;
        tango = argFoo;
        tango = report.bind(oscar)(tango);
        entity['url'] = tango;
        tango = {};
        golf = argBar;
        options = tango;
        report = copyDataProperties(options, golf);
        entity['body'] = tango;
        tango = true;
        entity['oldFormErrors'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['linkDispatchAuthCallback'] = golf;
    golf = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: completeTwoWayLink
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        mike = argBaz;
        var _closure2_slot2 = mike;
        mike = argCorge;
        var _closure2_slot3 = mike;
        mike = argGrault;
        var _closure2_slot4 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun59540: for(var _fun59540_ip = 0; ; ) switch(_fun59540_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun59540_ip = 209; continue _fun59540 }
 10:
                    mike = _closure2_slot1;
                    tango = null;
                    if(!(tango == mike)) { _fun59540_ip = 48; continue _fun59540 }
 23:
                    report = _closure1_slot10;
                    zulu = report.error;
                    mike = 'Two-way link: missing authorize location';
                    mike = zulu.bind(report)(mike);
                    _fun59540_ip = 140; continue _fun59540;
 48:
                    golf = _closure1_slot0;
                    report = _closure1_slot2;
                    zulu = 9;
                    zulu = report[zulu];
                    report = undefined;
                    options = golf.bind(report)(zulu);
                    golf = options.getCallbackParamsFromURL;
                    zulu = _closure2_slot1;
                    zulu = golf.bind(options)(zulu);
                    golf = zulu.code;
                    offset = zulu.error;
                    zulu = zulu.errorDescription;
                    if(!(tango != offset)) { _fun59540_ip = 145; continue _fun59540 }
 108:
                    verify = _closure1_slot10;
                    options = verify.error;
                    tango = {};
                    tango['error'] = offset;
                    tango['errorDescription'] = zulu;
                    zulu = 'Two-way link: missing authorize code';
                    zulu = options.bind(verify)(zulu, tango);
 140:
                    zulu = undefined;
                    return zulu;
 145:
                    tango = _closure1_slot11;
                    zulu = _closure2_slot0;
                    mike = {};
                    options = _closure2_slot2;
                    mike['code'] = options;
                    options = _closure2_slot3;
                    mike['state'] = options;
                    mike['two_way_link_code'] = golf;
                    oscar = _closure2_slot4;
                    mike['token_redirect_uri'] = oscar;
                    mike = tango.bind(report)(zulu, mike);
                    SaveGenerator(address=197);
 195:
                    return mike;
 197:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun59540_ip = 206; continue _fun59540 }
 203:
                    return mike;
 206:
                    return mike;
 209:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['completeTwoWayLink'] = golf;
    golf = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: sessionHandoff
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.post;
        entity = {};
        oscar = _closure1_slot7;
        report = oscar.CONNECTIONS_SESSION_HANDOFF;
        tango = argFoo;
        tango = report.bind(oscar)(tango);
        entity['url'] = tango;
        tango = {};
        report = argBar;
        tango['state'] = report;
        report = argBaz;
        tango['code'] = report;
        report = argCorge;
        tango['openid_params'] = report;
        report = argGrault;
        tango['iss'] = report;
        entity['body'] = tango;
        tango = true;
        entity['oldFormErrors'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['sessionHandoff'] = golf;
    tango = function(argFoo, argBar) { // Original name: getHandoffStatus
        report = argBar;
        mike = global;
        entity = mike.URLSearchParams;
        zulu = entity.prototype;
        zulu = Object.create(zulu, {constructor: {value: entity}});
        yankee = zulu;
        entity = new yankee[entity](offset);
        tango = entity instanceof Object ? entity : zulu;
        zulu = tango.append;
        entity = 'state';
        entity = zulu.bind(tango)(entity, report);
        golf = _closure1_slot7;
        oscar = golf.CONNECTIONS_SESSION_HANDOFF;
        zulu = argFoo;
        golf = oscar.bind(golf)(zulu);
        zulu = tango.toString;
        oscar = zulu.bind(tango)();
        mike = mike.HermesInternal;
        tango = mike.concat;
        zulu = '';
        mike = '?';
        tango = tango.bind(zulu)(golf, mike, oscar);
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.get;
        entity = {};
        entity['url'] = tango;
        tango = {};
        tango['state'] = report;
        entity['body'] = tango;
        tango = true;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['getHandoffStatus'] = tango;
    tango = 12;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'actions/ConnectedAccountsActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();