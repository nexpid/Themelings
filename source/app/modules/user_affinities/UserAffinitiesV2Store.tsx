// app/modules/user_affinities/UserAffinitiesV2Store.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun79261: for(var _fun79261_ip = 0; ; ) switch(_fun79261_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot12;
            entity = entity.bind(zulu)();
            if(entity) { _fun79261_ip = 51; continue _fun79261 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun79261_ip = 92; continue _fun79261;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun79261_ip = 71; continue _fun79261 }
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
    var _closure1_slot11 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun79262: for(var _fun79262_ip = 0; ; ) switch(_fun79262_ip) {
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
            _fun79262_ip = 76; continue _fun79262;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot12 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function() { // Original name: recomputeAffinities
        mike = global;
        tango = mike.Map;
        zulu = _closure1_slot10;
        oscar = zulu.userAffinities;
        report = oscar.filter;
        zulu = function(argFoo) {
            zulu = _closure1_slot5;
            mike = zulu.isBlockedOrIgnored;
            entity = argFoo;
            entity = entity.otherUserId;
            entity = mike.bind(zulu)(entity);
            entity = !entity;
            return entity;
        };
        report = report.bind(oscar)(zulu);
        zulu = report.map;
        entity = function(argFoo) {
            mike = argFoo;
            zulu = mike.otherUserId;
            entity = new Array(2);
            entity[0] = zulu;
            entity[1] = mike;
            return entity;
        };
        golf = zulu.bind(report)(entity);
        zulu = tango.prototype;
        zulu = Object.create(zulu, {constructor: {value: tango}});
        options = zulu;
        entity = new options[tango](golf, oscar);
        entity = entity instanceof Object ? entity : zulu;
        _closure1_slot7 = entity;
        entity = undefined;
        return entity;
    };
    var _closure1_slot13 = entity;
    mike = global;
    offset = mike.Object;
    verify = offset.defineProperty;
    options = {};
    entity = true;
    options['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, options);
    offset = 0;
    options = oscar[offset];
    entity = undefined;
    options = golf.bind(entity)(options);
    var _closure1_slot0 = options;
    options = 1;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot1 = options;
    options = 2;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot2 = options;
    options = 3;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot3 = options;
    options = 4;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot4 = options;
    options = 5;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot5 = options;
    options = 6;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.USER_AFFINITY_TTL;
    var _closure1_slot6 = options;
    options = mike.Map;
    verify = options.prototype;
    verify = Object.create(verify, {constructor: {value: options}});
    kilo = verify;
    options = new kilo[options](backup);
    options = options instanceof Object ? options : verify;
    var _closure1_slot7 = options;
    options = false;
    var _closure1_slot8 = options;
    verify = mike.Object;
    options = verify.freeze;
    mike = {};
    yankee = new Array(0);
    mike['userAffinities'] = yankee;
    mike['lastFetched'] = offset;
    options = options.bind(verify)(mike);
    var _closure1_slot9 = options;
    mike = {};
    backup = mike;
    foxtrot = options;
    options = copyDataProperties(backup, foxtrot);
    var _closure1_slot10 = mike;
    mike = 7;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.PersistedStore;
    mike = function(argFoo) {
        tango = function() { // Original name: UserAffinitiesV2Store
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot0;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot11;
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
            _fun79270: for(var _fun79270_ip = 0; ; ) switch(_fun79270_ip) {
 0:
                mike = argFoo;
                tango = this;
                report = tango.waitFor;
                zulu = _closure1_slot5;
                zulu = report.bind(tango)(zulu);
                zulu = null;
                if(!(zulu != mike)) { _fun79270_ip = 72; continue _fun79270 }
 30:
                report = _closure1_slot10;
                zulu = mike.userAffinities;
                report['userAffinities'] = zulu;
                zulu = _closure1_slot10;
                mike = mike.lastFetched;
                zulu['lastFetched'] = mike;
                zulu = _closure1_slot13;
                mike = undefined;
                mike = zulu.bind(mike)();
 72:
                zulu = tango.syncWith;
                report = _closure1_slot5;
                mike = new Array(1);
                mike[0] = report;
                entity = _closure1_slot13;
                entity = zulu.bind(tango)(mike, entity);
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(8);
        entity[0] = report;
        report = {};
        golf = 'shouldFetch';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun79271: for(var _fun79271_ip = 0; ; ) switch(_fun79271_ip) {
 0:
                mike = _closure1_slot8;
                if(mike) { _fun79271_ip = 51; continue _fun79271 }
 10:
                mike = global;
                zulu = mike.Date;
                mike = zulu.now;
                zulu = mike.bind(zulu)();
                mike = _closure1_slot10;
                mike = mike.lastFetched;
                mike = zulu - mike;
                entity = _closure1_slot6;
                entity = mike > entity;
                return entity;
 51:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'isFetching';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot8;
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getUserAffinities';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot10;
            entity = entity.userAffinities;
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getUserAffinitiesMap';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot7;
            return entity;
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'compare';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun79275: for(var _fun79275_ip = 0; ; ) switch(_fun79275_ip) {
 0:
                zulu = _closure1_slot7;
                mike = zulu.get;
                entity = argBar;
                entity = mike.bind(zulu)(entity);
                tango = null;
                mike = tango == entity;
                oscar = undefined;
                if(mike) { _fun79275_ip = 37; continue _fun79275 }
 31:
                oscar = entity.communicationProbability;
 37:
                golf = tango != oscar;
                entity = 0;
                if(!golf) { _fun79275_ip = 49; continue _fun79275 }
 46:
                entity = oscar;
 49:
                golf = _closure1_slot7;
                oscar = golf.get;
                report = argFoo;
                report = oscar.bind(golf)(report);
                oscar = tango == report;
                zulu = undefined;
                if(oscar) { _fun79275_ip = 81; continue _fun79275 }
 75:
                zulu = report.communicationProbability;
 81:
                tango = tango != zulu;
                mike = 0;
                if(!tango) { _fun79275_ip = 93; continue _fun79275 }
 90:
                mike = zulu;
 93:
                entity = entity - mike;
                return entity;
            }
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'getUserAffinity';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = _closure1_slot7;
            mike = zulu.get;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[6] = report;
        report = {};
        golf = 'getState';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = _closure1_slot10;
            return entity;
        };
        report['value'] = oscar;
        entity[7] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'UserAffinitiesV2Store';
    options['displayName'] = mike;
    mike = 'UserAffinitiesStoreV2';
    options['persistKey'] = mike;
    mike = 8;
    mike = oscar[mike];
    backup = golf.bind(entity)(mike);
    mike = {};
    verify = function() { // Original name: handleLoadUserAffinities
        entity = true;
        _closure1_slot8 = entity;
        entity = undefined;
        return entity;
    };
    mike['LOAD_USER_AFFINITIES_V2'] = verify;
    verify = function(argFoo) { // Original name: handleLoadUserAffinitiesSuccess
        entity = argFoo;
        zulu = entity.affineUsers;
        tango = _closure1_slot10;
        mike = global;
        report = mike.Date;
        mike = report.now;
        mike = mike.bind(report)();
        tango['lastFetched'] = mike;
        mike = false;
        _closure1_slot8 = mike;
        mike = _closure1_slot10;
        mike['userAffinities'] = zulu;
        mike = _closure1_slot13;
        entity = undefined;
        mike = mike.bind(entity)();
        return entity;
    };
    mike['LOAD_USER_AFFINITIES_V2_SUCCESS'] = verify;
    verify = function() { // Original name: handleLoadUserAffinitiesFailure
        entity = false;
        _closure1_slot8 = entity;
        entity = undefined;
        return entity;
    };
    mike['LOAD_USER_AFFINITIES_V2_FAILURE'] = verify;
    tango = function() { // Original name: handleLogout
        entity = {};
        tango = _closure1_slot9;
        report = entity;
        zulu = copyDataProperties(report, tango);
        _closure1_slot10 = entity;
        entity = global;
        entity = entity.Map;
        zulu = entity.prototype;
        zulu = Object.create(zulu, {constructor: {value: entity}});
        oscar = zulu;
        entity = new oscar[entity](report);
        entity = entity instanceof Object ? entity : zulu;
        _closure1_slot7 = entity;
        entity = false;
        _closure1_slot8 = entity;
        entity = undefined;
        return entity;
    };
    mike['LOGOUT'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    kilo = tango;
    foxtrot = mike;
    mike = new kilo[options](backup, foxtrot, romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_affinities/UserAffinitiesV2Store.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();