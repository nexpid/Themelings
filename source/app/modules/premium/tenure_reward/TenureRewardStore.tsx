// app/modules/premium/tenure_reward/TenureRewardStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot9;
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
            report = _closure1_slot3;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot8 = entity;
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
            _closure1_slot9 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = global;
    options = entity.Object;
    tango = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(options)(zulu, entity, mike);
    offset = 0;
    mike = oscar[offset];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot0 = mike;
    verify = 1;
    mike = oscar[verify];
    mike = golf.bind(entity)(mike);
    var _closure1_slot1 = mike;
    options = 2;
    mike = oscar[options];
    mike = golf.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = {};
    mike['NOT_FETCHED'] = offset;
    tango = 'NOT_FETCHED';
    mike[offset] = tango;
    mike['FETCHING'] = verify;
    tango = 'FETCHING';
    mike[verify] = tango;
    mike['FETCHED'] = options;
    tango = 'FETCHED';
    mike[options] = tango;
    var _closure1_slot5 = mike;
    tango = {};
    options = {};
    tango['userTenureRewardStatusByRewardId'] = options;
    options = null;
    tango['lastFetchTimeMs'] = options;
    options = mike.NOT_FETCHED;
    tango['fetchState'] = options;
    var _closure1_slot6 = tango;
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    options = tango.PersistedStore;
    tango = function(argFoo) {
        tango = function() { // Original name: TenureRewardStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot0;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot8;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot4;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot1;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zulu = argFoo;
                mike = {};
                report = _closure1_slot7;
                oscar = mike;
                tango = copyDataProperties(oscar, report);
                tango = null;
                if(!(tango == zulu)) { _fun00006_ip = 27; continue _fun00005 }
 25:
                zulu = {};
 27:
                oscar = mike;
                report = zulu;
                zulu = copyDataProperties(oscar, report);
                _closure1_slot7 = mike;
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golf = 'getState';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot7;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getFetchState';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot7;
            entity = entity.fetchState;
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getTenureRewardStatusForRewardId';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            entity = _closure1_slot7;
            mike = entity.userTenureRewardStatusByRewardId;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        report['value'] = oscar;
        entity[3] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = tango.bind(entity)(options);
    tango = 'TenureRewardStore';
    options['displayName'] = tango;
    options['persistKey'] = tango;
    tango = 6;
    tango = oscar[tango];
    foxtrot = golf.bind(entity)(tango);
    tango = {};
    verify = function() { // Original name: handleTenureRewardSyncStart
        mike = _closure1_slot7;
        entity = _closure1_slot5;
        entity = entity.FETCHING;
        mike['fetchState'] = entity;
        entity = undefined;
        return entity;
    };
    tango['USER_TENURE_REWARD_SYNC_START'] = verify;
    verify = function(argFoo) { // Original name: handleTenureRewardSyncSuccess
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            report = entity.userTenureRewardStatus;
            entity = undefined;
            var _closure2_slot0 = entity;
            zulu = null;
            if(!(zulu == report)) { _fun00008_ip = 50; continue _fun00007 }
 25:
            tango = _closure1_slot7;
            zulu = _closure1_slot6;
            zulu = zulu.userTenureRewardStatusByRewardId;
            tango['userTenureRewardStatusByRewardId'] = zulu;
            _fun00008_ip = 86; continue _fun00007;
 50:
            zulu = {};
            _closure2_slot0 = zulu;
            tango = report.forEach;
            mike = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zulu = argFoo;
                    mike = zulu.next_tenure_reward_id;
                    entity = null;
                    if(!(entity != mike)) { _fun00010_ip = 32; continue _fun00009 }
 15:
                    mike = _closure2_slot0;
                    entity = zulu.next_tenure_reward_id;
                    mike[entity] = zulu;
 32:
                    entity = undefined;
                    return entity;
                }
            };
            mike = tango.bind(report)(mike);
            mike = _closure1_slot7;
            mike['userTenureRewardStatusByRewardId'] = zulu;
 86:
            tango = _closure1_slot7;
            zulu = global;
            report = zulu.Date;
            zulu = report.now;
            zulu = zulu.bind(report)();
            tango['lastFetchTimeMs'] = zulu;
            zulu = _closure1_slot7;
            mike = _closure1_slot5;
            mike = mike.FETCHED;
            zulu['fetchState'] = mike;
            return entity;
        }
    };
    tango['USER_TENURE_REWARD_SYNC_SUCCESS'] = verify;
    verify = function() { // Original name: handleUserTenureRewardStatusReset
        mike = _closure1_slot7;
        entity = _closure1_slot6;
        entity = entity.userTenureRewardStatusByRewardId;
        mike['userTenureRewardStatusByRewardId'] = entity;
        entity = undefined;
        return entity;
    };
    tango['USER_TENURE_REWARD_STATUS_RESET'] = verify;
    verify = function(argFoo) { // Original name: handleUserTenureRewardStatusDelete
        entity = argFoo;
        zulu = entity.tenureRewardIds;
        mike = zulu.forEach;
        entity = function(argFoo) {
            entity = _closure1_slot7;
            mike = entity.userTenureRewardStatusByRewardId;
            entity = argFoo;
            entity = delete mike[entity];
            entity = undefined;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    tango['USER_TENURE_REWARD_STATUS_DELETE'] = verify;
    report = function() { // Original name: reset
        entity = _closure1_slot6;
        _closure1_slot7 = entity;
        entity = undefined;
        return entity;
    };
    tango['LOGOUT'] = report;
    report = options.prototype;
    report = Object.create(report, {constructor: {value: options}});
    backup = report;
    romeo = tango;
    tango = new backup[options](foxtrot, romeo, yankee);
    tango = tango instanceof Object ? tango : report;
    report = 7;
    oscar = oscar[report];
    report = argBar;
    golf = report.bind(entity)(oscar);
    oscar = golf.fileFinishedImporting;
    report = 'modules/premium/tenure_reward/TenureRewardStore.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['FetchState'] = mike;
    return entity;
})();