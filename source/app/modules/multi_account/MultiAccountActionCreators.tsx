// app/modules/multi_account/MultiAccountActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscar;
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
    var _closure1_slot4 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Endpoints;
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    options = golf.bind(entity)(tango);
    tango = options.prototype;
    golf = Object.create(tango, {constructor: {value: options}});
    romeo = 'MultiAccountActionCreators';
    foxtrot = golf;
    tango = new foxtrot[options](romeo, yankee);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot8 = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/multi_account/MultiAccountActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: validateMultiAccountTokens
        tango = _closure1_slot5;
        zulu = tango.getId;
        zulu = zulu.bind(tango)();
        var _closure2_slot0 = zulu;
        zulu = _closure1_slot6;
        mike = zulu.getUsers;
        tango = mike.bind(zulu)();
        zulu = tango.forEach;
        mike = function() {
            tango = _closure1_slot4;
            zulu = undefined;
            mike = function* (argFoo) {
                entity = function* (argFoo) { // Original name: ?anon_0_
                    _fun93642: for(var _fun93642_ip = 0; ; ) switch(_fun93642_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun93642_ip = 531; continue _fun93642 }
 10:
                        mike = argFoo;
                        oscar = mike.id;
                        report = undefined;
                        backup = undefined;
                        foxtrot = undefined;
                        SaveGenerator(address=28);
 26:
                        return report;
 28:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(zulu) { _fun93642_ip = 528; continue _fun93642 }
 37:
                        golf = _closure1_slot2;
                        verify = _closure1_slot3;
                        tango = 5;
                        tango = verify[tango];
                        verify = golf.bind(report)(tango);
                        golf = verify.getToken;
                        tango = oscar;
                        tango = golf.bind(verify)(tango);
                        backup = tango;
                        offset = null;
                        if(!(offset != tango)) { _fun93642_ip = 94; continue _fun93642 }
 83:
                        golf = backup;
                        tango = '';
                        if(!(tango === golf)) { _fun93642_ip = 148; continue _fun93642 }
 94:
                        golf = _closure1_slot1;
                        verify = _closure1_slot3;
                        tango = 6;
                        tango = verify[tango];
                        verify = golf.bind(report)(tango);
                        golf = verify.dispatch;
                        tango = {};
                        yankee = 'MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE';
                        tango['type'] = yankee;
                        yankee = oscar;
                        tango['userId'] = yankee;
                        tango = golf.bind(verify)(tango);
                        _fun93642_ip = 397; continue _fun93642;
 148:
                        verify = _closure1_slot1;
                        tango = _closure1_slot3;
                        golf = 6;
                        tango = tango[golf];
                        yankee = verify.bind(report)(tango);
                        verify = yankee.dispatch;
                        tango = {};
                        romeo = 'MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST';
                        tango['type'] = romeo;
                        romeo = oscar;
                        tango['userId'] = romeo;
                        tango = verify.bind(yankee)(tango);
 197: // try_start_0
                        verify = _closure1_slot0;
                        yankee = _closure1_slot3;
                        tango = 7;
                        tango = yankee[tango];
                        tango = verify.bind(report)(tango);
                        yankee = tango.HTTP;
                        verify = yankee.get;
                        tango = {};
                        romeo = _closure1_slot7;
                        romeo = romeo.ME;
                        tango['url'] = romeo;
                        romeo = {};
                        romeo['authorization'] = backup;
                        tango['headers'] = romeo;
                        romeo = 3;
                        tango['retries'] = romeo;
                        romeo = false;
                        tango['rejectWithError'] = romeo;
                        tango = verify.bind(yankee)(tango);
                        SaveGenerator(address=278);
 276:
                        return tango;
 278:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=8);
                        if(verify) { _fun93642_ip = 400; continue _fun93642 }
 284:
                        foxtrot = tango;
 287: // try_end0
                        yankee = _closure1_slot1;
                        verify = _closure1_slot3;
                        verify = verify[golf];
                        romeo = yankee.bind(report)(verify);
                        yankee = romeo.dispatch;
                        verify = {};
                        sizing = _closure2_slot0;
                        kilo = oscar;
                        backup = 'USER_UPDATE';
                        if(!(sizing === kilo)) { _fun93642_ip = 333; continue _fun93642 }
 329:
                        backup = 'CURRENT_USER_UPDATE';
 333:
                        verify['type'] = backup;
                        foxtrot = foxtrot.body;
                        verify['user'] = foxtrot;
                        verify = yankee.bind(romeo)(verify);
                        yankee = _closure1_slot1;
                        verify = _closure1_slot3;
                        verify = verify[golf];
                        romeo = yankee.bind(report)(verify);
                        yankee = romeo.dispatch;
                        verify = {};
                        foxtrot = 'MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS';
                        verify['type'] = foxtrot;
                        foxtrot = oscar;
                        verify['userId'] = foxtrot;
                        verify = yankee.bind(romeo)(verify);
 397:
                        return report;
 400:
                        return tango;
 403: // catch_target0
                        CatchBlockStart(arg_register=8);
                        options = verify;
                        verify = offset == verify;
                        yankee = undefined;
                        if(verify) { _fun93642_ip = 425; continue _fun93642 }
 417:
                        verify = options;
                        yankee = verify.status;
 425:
                        verify = 401;
                        verify = verify === yankee;
                        tango = verify;
                        if(verify) { _fun93642_ip = 468; continue _fun93642 }
 441:
                        verify = options;
                        offset = offset == verify;
                        verify = undefined;
                        if(offset) { _fun93642_ip = 458; continue _fun93642 }
 453:
                        verify = options.status;
 458:
                        options = 403;
                        tango = options === verify;
 468:
                        options = tango;
                        tango = _closure1_slot1;
                        zulu = _closure1_slot3;
                        zulu = zulu[golf];
                        report = tango.bind(report)(zulu);
                        tango = report.dispatch;
                        zulu = {};
                        golf = 'MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS';
                        if(!options) { _fun93642_ip = 510; continue _fun93642 }
 504:
                        golf = 'MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE';
 510:
                        zulu['type'] = golf;
                        zulu['userId'] = oscar;
                        zulu = tango.bind(report)(zulu);
                        zulu = undefined;
                        return zulu;
 528:
                        return mike;
 531:
                        return entity;
                    }
                };
                mike = entity.next;
                mike = mike.bind(entity)();
                return entity;
            };
            mike = tango.bind(zulu)(mike);
            var _closure3_slot0 = mike;
            entity = function() {
                entity = undefined;
                tango = _closure3_slot0;
                zulu = tango.apply;
                entity = arguments;
                mike = entity;
                entity = this;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            return entity;
        };
        entity = undefined;
        mike = mike.bind(entity)();
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['validateMultiAccountTokens'] = tango;
    tango = function(argFoo, argBar) { // Original name: switchAccount
        _fun93644: for(var _fun93644_ip = 0; ; ) switch(_fun93644_ip) {
 0:
            oscar = argFoo;
            options = argBar;
            golf = _closure1_slot8;
            report = golf.log;
            mike = global;
            entity = mike.HermesInternal;
            tango = entity.concat;
            entity = 'Switching account to ';
            tango = tango.bind(entity)(oscar);
            entity = {};
            entity['switchSynchronously'] = options;
            entity = report.bind(golf)(tango, entity);
            tango = _closure1_slot2;
            report = _closure1_slot3;
            entity = 5;
            entity = report[entity];
            report = undefined;
            tango = tango.bind(report)(entity);
            entity = tango.getToken;
            golf = entity.bind(tango)(oscar);
            entity = null;
            if(!(entity != golf)) { _fun93644_ip = 131; continue _fun93644 }
 97:
            tango = _closure1_slot1;
            verify = _closure1_slot3;
            entity = 8;
            entity = verify[entity];
            tango = tango.bind(report)(entity);
            entity = tango.switchAccountToken;
            entity = entity.bind(tango)(golf, options);
            _fun93644_ip = 214; continue _fun93644;
 131:
            options = _closure1_slot8;
            golf = options.log;
            tango = 'Switching accounts failed because there was no token';
            tango = golf.bind(options)(tango);
            tango = _closure1_slot1;
            golf = _closure1_slot3;
            zulu = 6;
            zulu = golf[zulu];
            report = tango.bind(report)(zulu);
            tango = report.dispatch;
            zulu = {};
            golf = 'MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE';
            zulu['type'] = golf;
            zulu['userId'] = oscar;
            zulu = tango.bind(report)(zulu);
            zulu = mike.Promise;
            mike = zulu.resolve;
            entity = mike.bind(zulu)();
 214:
            return entity;
        }
    };
    zulu['switchAccount'] = tango;
    tango = function(argFoo, argBar) { // Original name: moveAccount
        zulu = _closure1_slot1;
        mike = _closure1_slot3;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'MULTI_ACCOUNT_MOVE_ACCOUNT';
        mike['type'] = report;
        report = argFoo;
        mike['from'] = report;
        report = argBar;
        mike['to'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['moveAccount'] = tango;
    tango = function(argFoo) { // Original name: removeAccount
        zulu = _closure1_slot1;
        mike = _closure1_slot3;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'MULTI_ACCOUNT_REMOVE_ACCOUNT';
        mike['type'] = report;
        report = argFoo;
        mike['userId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['removeAccount'] = tango;
    tango = function(argFoo) { // Original name: multiAccountMobileExperimentUpdate
        zulu = _closure1_slot1;
        mike = _closure1_slot3;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'MULTI_ACCOUNT_MOBILE_EXPERIMENT_UPDATE';
        mike['type'] = report;
        report = argFoo;
        mike['multiAccountMobileExperimentEnabled'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['multiAccountMobileExperimentUpdate'] = tango;
    tango = function(argFoo, argBar) { // Original name: updatePushSyncToken
        zulu = _closure1_slot1;
        mike = _closure1_slot3;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'MULTI_ACCOUNT_UPDATE_PUSH_SYNC_TOKEN';
        mike['type'] = report;
        report = argFoo;
        mike['userId'] = report;
        report = argBar;
        mike['pushSyncToken'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['updatePushSyncToken'] = tango;
    mike = function(argFoo) { // Original name: invalidatePushSyncTokens
        zulu = _closure1_slot1;
        mike = _closure1_slot3;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'MULTI_ACCOUNT_INVALIDATE_PUSH_SYNC_TOKENS';
        mike['type'] = report;
        report = argFoo;
        mike['invalidPushSyncTokens'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['invalidatePushSyncTokens'] = mike;
    return entity;
})();