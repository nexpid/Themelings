// app/modules/multi_account/MultiAccountStore.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    entity = argCorge;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot15;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot15 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: removeAccountById
        tango = argFoo;
        var _closure2_slot0 = tango;
        report = _closure1_slot12;
        zulu = report.filter;
        mike = function(argFoo) {
            entity = argFoo;
            mike = entity.id;
            entity = _closure2_slot0;
            entity = mike !== entity;
            return entity;
        };
        mike = zulu.bind(report)(mike);
        _closure1_slot12 = mike;
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.removeToken;
        mike = mike.bind(zulu)(tango);
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo, argBar) { // Original name: setTokenStatus
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            tango = _closure1_slot12;
            entity = tango.slice;
            entity = entity.bind(tango)();
            tango = entity.find;
            zulu = function(argFoo) {
                entity = argFoo;
                mike = entity.id;
                entity = _closure2_slot0;
                entity = mike === entity;
                return entity;
            };
            tango = tango.bind(entity)(zulu);
            zulu = null;
            if(!(zulu != tango)) { _fun00006_ip = 61; continue _fun00005 }
 48:
            zulu = argBar;
            tango['tokenStatus'] = zulu;
            _closure1_slot12 = entity;
 61:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = global;
    verify = entity.Object;
    tango = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(verify)(zulu, entity, mike);
    yankee = 0;
    mike = golf[yankee];
    entity = undefined;
    mike = options.bind(entity)(mike);
    var _closure1_slot3 = mike;
    offset = 1;
    mike = golf[offset];
    mike = options.bind(entity)(mike);
    var _closure1_slot4 = mike;
    verify = 2;
    mike = golf[verify];
    mike = options.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 5;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    mike = mike.MAX_ACCOUNTS;
    var _closure1_slot8 = mike;
    mike = {};
    mike['INVALID'] = yankee;
    tango = 'INVALID';
    mike[yankee] = tango;
    mike['VALIDATING'] = offset;
    tango = 'VALIDATING';
    mike[offset] = tango;
    mike['VALID'] = verify;
    tango = 'VALID';
    mike[verify] = tango;
    var _closure1_slot11 = mike;
    tango = new Array(0);
    var _closure1_slot12 = tango;
    tango = false;
    var _closure1_slot13 = tango;
    tango = 9;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    verify = tango.PersistedStore;
    tango = function(argFoo) {
        tango = function() { // Original name: MultiAccountStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot3;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot14;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = argFoo;
                mike = null;
                if(!(mike != entity)) { _fun00008_ip = 40; continue _fun00007 }
 9:
                zulu = entity.users;
                if(!(mike == zulu)) { _fun00008_ip = 23; continue _fun00007 }
 19:
                zulu = new Array(0);
 23:
                _closure1_slot12 = zulu;
                entity = entity.canUseMultiAccountMobile;
                var _closure1_slot10 = entity;
 40:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(9);
        entity[0] = report;
        report = {};
        golf = 'getCanUseMultiAccountMobile';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot10;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getState';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = {};
            zulu = _closure1_slot12;
            entity['users'] = zulu;
            mike = _closure1_slot10;
            entity['canUseMultiAccountMobile'] = mike;
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getUsers';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot12;
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getValidUsers';
        report['key'] = golf;
        golf = function() { // Original name: value
            zulu = _closure1_slot12;
            mike = zulu.filter;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.tokenStatus;
                entity = _closure1_slot11;
                entity = entity.INVALID;
                entity = mike !== entity;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getHasLoggedInAccounts';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot12;
            mike = entity.length;
            entity = 0;
            entity = mike > entity;
            return entity;
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'getIsValidatingUsers';
        report['key'] = golf;
        golf = function() { // Original name: value
            zulu = _closure1_slot12;
            mike = zulu.some;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.tokenStatus;
                entity = _closure1_slot11;
                entity = entity.VALIDATING;
                entity = mike === entity;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[6] = report;
        report = {};
        golf = 'canUseMultiAccountNotifications';
        report['key'] = golf;
        golf = function() { // Original name: get
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                mike = this;
                entity = mike.getCanUseMultiAccountMobile;
                entity = entity.bind(mike)();
                if(!entity) { _fun00010_ip = 86; continue _fun00009 }
 16:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 8;
                zulu = zulu[mike];
                mike = undefined;
                mike = tango.bind(mike)(zulu);
                report = mike.MultiAccountMobileNotificationsExperiment;
                tango = report.getCurrentConfig;
                zulu = {};
                mike = '09e468_1';
                zulu['location'] = mike;
                mike = {};
                oscar = false;
                mike['autoTrackExposure'] = oscar;
                mike = tango.bind(report)(zulu, mike);
                entity = mike.isMultiAccountMobileNotificationsEnabled;
 86:
                return entity;
            }
        };
        report['get'] = golf;
        entity[7] = report;
        report = {};
        golf = 'isSwitchingAccount';
        report['key'] = golf;
        oscar = function() { // Original name: get
            entity = _closure1_slot13;
            return entity;
        };
        report['get'] = oscar;
        entity[8] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    verify = tango.bind(entity)(verify);
    tango = 'MultiAccountStore';
    verify['displayName'] = tango;
    verify['persistKey'] = tango;
    tango = new Array(1);
    offset = function(argFoo) {
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zulu = argFoo;
            tango = null;
            if(!(tango == zulu)) { _fun00012_ip = 29; continue _fun00011 }
 9:
            entity = {};
            mike = new Array(0);
            entity['users'] = mike;
            mike = false;
            entity['canUseMultiAccountMobile'] = mike;
            _fun00012_ip = 60; continue _fun00011;
 29:
            mike = {};
            zulu = zulu.users;
            if(!(tango == zulu)) { _fun00012_ip = 45; continue _fun00011 }
 41:
            zulu = new Array(0);
 45:
            mike['users'] = zulu;
            zulu = false;
            mike['canUseMultiAccountMobile'] = zulu;
            entity = mike;
 60:
            return entity;
        }
    };
    tango[0] = offset;
    verify['migrations'] = tango;
    tango = 10;
    tango = golf[tango];
    backup = options.bind(entity)(tango);
    tango = {};
    offset = function(argFoo) { // Original name: handleConnectionOpen
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            mike = argFoo;
            tango = mike.user;
            var _closure2_slot0 = tango;
            zulu = tango.id;
            var _closure1_slot9 = zulu;
            zulu = false;
            _closure1_slot13 = zulu;
            report = _closure1_slot12;
            zulu = report.slice;
            zulu = zulu.bind(report)();
            oscar = zulu.findIndex;
            report = function(argFoo) {
                entity = argFoo;
                mike = entity.id;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = mike === entity;
                return entity;
            };
            report = oscar.bind(zulu)(report);
            oscar = -1;
            if(!(!(report > oscar))) { _fun00014_ip = 153; continue _fun00013 }
 73:
            golf = zulu.push;
            oscar = {};
            options = tango.id;
            oscar['id'] = options;
            options = tango.avatar;
            oscar['avatar'] = options;
            options = tango.username;
            oscar['username'] = options;
            options = tango.discriminator;
            oscar['discriminator'] = options;
            options = _closure1_slot11;
            options = options.VALID;
            oscar['tokenStatus'] = options;
            options = null;
            oscar['pushSyncToken'] = options;
            oscar = golf.bind(zulu)(oscar);
            _closure1_slot12 = zulu;
            _fun00014_ip = 240; continue _fun00013;
 153:
            oscar = _closure1_slot12;
            golf = oscar[report];
            oscar = tango.avatar;
            golf['avatar'] = oscar;
            oscar = _closure1_slot12;
            golf = oscar[report];
            oscar = tango.username;
            golf['username'] = oscar;
            oscar = _closure1_slot12;
            oscar = oscar[report];
            tango = tango.discriminator;
            oscar['discriminator'] = tango;
            tango = _closure1_slot12;
            report = tango[report];
            tango = _closure1_slot11;
            tango = tango.VALID;
            report['tokenStatus'] = tango;
            _closure1_slot12 = zulu;
 240:
            zulu = _closure1_slot12;
            tango = zulu.length;
            zulu = _closure1_slot8;
            if(!(tango > zulu)) { _fun00014_ip = 293; continue _fun00013 }
 257:
            tango = _closure1_slot12;
            zulu = tango.splice;
            mike = _closure1_slot8;
            zulu = zulu.bind(tango)(mike);
            mike = zulu.forEach;
            entity = function(argFoo) {
                entity = argFoo;
                zulu = entity.id;
                mike = _closure1_slot16;
                entity = undefined;
                mike = mike.bind(entity)(zulu);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
 293:
            entity = undefined;
            return entity;
        }
    };
    tango['CONNECTION_OPEN'] = offset;
    offset = function(argFoo) { // Original name: handleLogout
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            mike = entity.isSwitchingAccount;
            zulu = !mike;
            zulu = !zulu;
            _closure1_slot13 = zulu;
            entity = entity.isSwitchingAccount;
            if(entity) { _fun00016_ip = 58; continue _fun00015 }
 31:
            tango = _closure1_slot12;
            zulu = tango.filter;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.id;
                entity = _closure1_slot9;
                entity = mike !== entity;
                return entity;
            };
            entity = zulu.bind(tango)(entity);
            _closure1_slot12 = entity;
 58:
            entity = null;
            _closure1_slot9 = entity;
            entity = undefined;
            return entity;
        }
    };
    tango['LOGOUT'] = offset;
    offset = function(argFoo) { // Original name: MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST
        tango = _closure1_slot17;
        mike = argFoo;
        zulu = mike.userId;
        entity = _closure1_slot11;
        mike = entity.VALIDATING;
        entity = undefined;
        mike = tango.bind(entity)(zulu, mike);
        return entity;
    };
    tango['MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST'] = offset;
    offset = function(argFoo) { // Original name: MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS
        tango = _closure1_slot17;
        mike = argFoo;
        zulu = mike.userId;
        entity = _closure1_slot11;
        mike = entity.VALID;
        entity = undefined;
        mike = tango.bind(entity)(zulu, mike);
        return entity;
    };
    tango['MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS'] = offset;
    offset = function(argFoo) { // Original name: MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE
        tango = _closure1_slot17;
        mike = argFoo;
        zulu = mike.userId;
        entity = _closure1_slot11;
        mike = entity.INVALID;
        entity = undefined;
        mike = tango.bind(entity)(zulu, mike);
        return entity;
    };
    tango['MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE'] = offset;
    offset = function(argFoo) { // Original name: MULTI_ACCOUNT_REMOVE_ACCOUNT
        zulu = _closure1_slot16;
        entity = argFoo;
        mike = entity.userId;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango['MULTI_ACCOUNT_REMOVE_ACCOUNT'] = offset;
    offset = function(argFoo) { // Original name: handleMoveAccount
        entity = argFoo;
        golf = entity.from;
        oscar = entity.to;
        tango = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 7;
        mike = mike[entity];
        entity = undefined;
        report = tango.bind(entity)(mike);
        tango = report.moveItemFromTo;
        mike = _closure1_slot12;
        mike = tango.bind(report)(mike, golf, oscar);
        _closure1_slot12 = mike;
        return entity;
    };
    tango['MULTI_ACCOUNT_MOVE_ACCOUNT'] = offset;
    offset = function(argFoo) { // Original name: handleCurrentUserUpdate
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            zulu = entity.user;
            var _closure2_slot0 = zulu;
            report = _closure1_slot12;
            entity = report.slice;
            entity = entity.bind(report)();
            report = entity.find;
            tango = function(argFoo) {
                entity = argFoo;
                mike = entity.id;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = mike === entity;
                return entity;
            };
            tango = report.bind(entity)(tango);
            report = null;
            if(!(report != tango)) { _fun00018_ip = 92; continue _fun00017 }
 53:
            report = zulu.avatar;
            tango['avatar'] = report;
            report = zulu.username;
            tango['username'] = report;
            zulu = zulu.discriminator;
            tango['discriminator'] = zulu;
            _closure1_slot12 = entity;
 92:
            entity = undefined;
            return entity;
        }
    };
    tango['CURRENT_USER_UPDATE'] = offset;
    offset = function(argFoo) { // Original name: handleMultiAccountMobileExperimentUpdate
        entity = argFoo;
        mike = entity.multiAccountMobileExperimentEnabled;
        _closure1_slot10 = mike;
        entity = undefined;
        return entity;
    };
    tango['MULTI_ACCOUNT_MOBILE_EXPERIMENT_UPDATE'] = offset;
    offset = function(argFoo) { // Original name: handleUpdatePushSyncToken
        mike = argFoo;
        zulu = mike.userId;
        var _closure2_slot0 = zulu;
        mike = mike.pushSyncToken;
        var _closure2_slot1 = mike;
        tango = _closure1_slot12;
        zulu = tango.map;
        entity = function(argFoo) {
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                tango = argFoo;
                report = tango.id;
                mike = _closure2_slot0;
                entity = tango;
                if(!(report === mike)) { _fun00020_ip = 50; continue _fun00019 }
 22:
                mike = {};
                golf = mike;
                oscar = tango;
                tango = copyDataProperties(golf, oscar);
                tango = _closure2_slot1;
                zulu = 'pushSyncToken';
                mike[zulu] = tango;
                entity = mike;
 50:
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity);
        _closure1_slot12 = entity;
        entity = undefined;
        return entity;
    };
    tango['MULTI_ACCOUNT_UPDATE_PUSH_SYNC_TOKEN'] = offset;
    report = function(argFoo) { // Original name: handleInvalidatePushSyncTokens
        mike = argFoo;
        mike = mike.invalidPushSyncTokens;
        var _closure2_slot0 = mike;
        tango = _closure1_slot12;
        zulu = tango.map;
        entity = function(argFoo) {
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                zulu = argFoo;
                mike = zulu.pushSyncToken;
                tango = null;
                entity = zulu;
                if(!(tango != mike)) { _fun00022_ip = 71; continue _fun00021 }
 18:
                oscar = _closure2_slot0;
                report = oscar.includes;
                mike = zulu.pushSyncToken;
                mike = report.bind(oscar)(mike);
                entity = zulu;
                if(!mike) { _fun00022_ip = 71; continue _fun00021 }
 47:
                mike = {};
                options = mike;
                golf = zulu;
                zulu = copyDataProperties(options, golf);
                zulu = 'pushSyncToken';
                mike[zulu] = tango;
                entity = mike;
 71:
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity);
        _closure1_slot12 = entity;
        entity = undefined;
        return entity;
    };
    tango['MULTI_ACCOUNT_INVALIDATE_PUSH_SYNC_TOKENS'] = report;
    report = verify.prototype;
    report = Object.create(report, {constructor: {value: verify}});
    kilo = report;
    foxtrot = tango;
    tango = new kilo[verify](backup, foxtrot, romeo);
    tango = tango instanceof Object ? tango : report;
    report = 11;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/multi_account/MultiAccountStore.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['MultiAccountTokenStatus'] = mike;
    return entity;
})();