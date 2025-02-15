// app/modules/user_affinities/UserAffinitiesStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
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
            entity = _closure1_slot12;
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
    var _closure1_slot11 = entity;
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
 70: // try_end0
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
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
    entity = function() { // Original name: recomputeViews
        entity = global;
        report = entity.Map;
        tango = _closure1_slot9;
        golf = tango.userAffinities;
        oscar = golf.filter;
        tango = function(argFoo) {
            entity = argFoo;
            zulu = entity.user_id;
            mike = _closure1_slot5;
            entity = mike.isBlockedOrIgnored;
            entity = entity.bind(mike)(zulu);
            entity = !entity;
            return entity;
        };
        oscar = oscar.bind(golf)(tango);
        tango = oscar.map;
        zulu = function(argFoo) {
            mike = argFoo;
            zulu = mike.user_id;
            entity = new Array(2);
            entity[0] = zulu;
            entity[1] = mike;
            return entity;
        };
        options = tango.bind(oscar)(zulu);
        tango = report.prototype;
        tango = Object.create(tango, {constructor: {value: report}});
        verify = tango;
        zulu = new verify[report](options, golf);
        tango = zulu instanceof Object ? zulu : tango;
        report = entity.Set;
        entity = tango.keys;
        options = entity.bind(tango)();
        zulu = report.prototype;
        zulu = Object.create(zulu, {constructor: {value: report}});
        verify = zulu;
        entity = new verify[report](options, golf);
        zulu = entity instanceof Object ? entity : zulu;
        entity = {};
        entity['userAffinitiesMap'] = tango;
        entity['affinityUserIds'] = zulu;
        _closure1_slot10 = entity;
        entity = undefined;
        return entity;
    };
    var _closure1_slot13 = entity;
    offset = global;
    options = offset.Object;
    golf = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    verify = 0;
    mike = report[verify];
    entity = undefined;
    mike = oscar.bind(entity)(mike);
    var _closure1_slot0 = mike;
    mike = 1;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot1 = mike;
    mike = 2;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 3;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 4;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 5;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = false;
    var _closure1_slot6 = mike;
    options = offset.Object;
    golf = options.freeze;
    mike = {};
    yankee = new Array(0);
    mike['userAffinities'] = yankee;
    yankee = offset.Set;
    romeo = yankee.prototype;
    romeo = Object.create(romeo, {constructor: {value: yankee}});
    sizing = romeo;
    yankee = new sizing[yankee](kilo);
    yankee = yankee instanceof Object ? yankee : romeo;
    mike['affinityUserIds'] = yankee;
    mike['lastFetched'] = verify;
    options = golf.bind(options)(mike);
    var _closure1_slot7 = options;
    verify = offset.Object;
    golf = verify.freeze;
    mike = {};
    yankee = offset.Map;
    romeo = yankee.prototype;
    romeo = Object.create(romeo, {constructor: {value: yankee}});
    sizing = romeo;
    yankee = new sizing[yankee](kilo);
    yankee = yankee instanceof Object ? yankee : romeo;
    mike['userAffinitiesMap'] = yankee;
    offset = offset.Set;
    yankee = offset.prototype;
    yankee = Object.create(yankee, {constructor: {value: offset}});
    sizing = yankee;
    offset = new sizing[offset](kilo);
    offset = offset instanceof Object ? offset : yankee;
    mike['affinityUserIds'] = offset;
    golf = golf.bind(verify)(mike);
    var _closure1_slot8 = golf;
    mike = {};
    kilo = mike;
    backup = options;
    options = copyDataProperties(kilo, backup);
    var _closure1_slot9 = mike;
    mike = {};
    kilo = mike;
    backup = golf;
    golf = copyDataProperties(kilo, backup);
    var _closure1_slot10 = mike;
    mike = 6;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    golf = mike.PersistedStore;
    mike = function(argFoo) {
        tango = function() { // Original name: UserAffinitiesStore
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
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                mike = argFoo;
                tango = this;
                report = tango.waitFor;
                zulu = _closure1_slot5;
                zulu = report.bind(tango)(zulu);
                zulu = null;
                if(!(zulu != mike)) { _fun00006_ip = 72; continue _fun00005 }
 30:
                report = _closure1_slot9;
                zulu = mike.userAffinities;
                report['userAffinities'] = zulu;
                zulu = _closure1_slot9;
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
        golf = 'needsRefresh';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zulu = _closure1_slot6;
                entity = !zulu;
                if(zulu) { _fun00008_ip = 54; continue _fun00007 }
 13:
                zulu = global;
                tango = zulu.Date;
                zulu = tango.now;
                zulu = zulu.bind(tango)();
                mike = _closure1_slot9;
                mike = mike.lastFetched;
                zulu = zulu - mike;
                mike = 86400000;
                entity = zulu > mike;
 54:
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getFetching';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot6;
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getState';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot9;
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getUserAffinities';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot9;
            entity = entity.userAffinities;
            return entity;
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getUserAffinitiesMap';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot10;
            entity = entity.userAffinitiesMap;
            return entity;
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'getUserAffinity';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = _closure1_slot10;
            zulu = entity.userAffinitiesMap;
            mike = zulu.get;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[6] = report;
        report = {};
        golf = 'getUserAffinitiesUserIds';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = _closure1_slot10;
            entity = entity.affinityUserIds;
            return entity;
        };
        report['value'] = oscar;
        entity[7] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    golf = mike.bind(entity)(golf);
    mike = 'UserAffinitiesStore';
    golf['displayName'] = mike;
    golf['persistKey'] = mike;
    mike = new Array(1);
    options = function() {
        entity = null;
        return entity;
    };
    mike[0] = options;
    golf['migrations'] = mike;
    mike = 7;
    mike = report[mike];
    kilo = oscar.bind(entity)(mike);
    mike = {};
    options = function(argFoo) { // Original name: handleLoadUserAffinitiesSuccess
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            entity = entity.affinities;
            mike = _closure1_slot9;
            entity = entity.user_affinities;
            tango = null;
            if(!(tango == entity)) { _fun00010_ip = 32; continue _fun00009 }
 28:
            entity = new Array(0);
 32:
            mike['userAffinities'] = entity;
            mike = _closure1_slot9;
            entity = global;
            tango = entity.Date;
            entity = tango.now;
            entity = entity.bind(tango)();
            mike['lastFetched'] = entity;
            mike = _closure1_slot13;
            entity = undefined;
            mike = mike.bind(entity)();
            mike = false;
            _closure1_slot6 = mike;
            return entity;
        }
    };
    mike['LOAD_USER_AFFINITIES_SUCCESS'] = options;
    options = function() { // Original name: handleLoadUserAffinities
        entity = true;
        _closure1_slot6 = entity;
        entity = undefined;
        return entity;
    };
    mike['LOAD_USER_AFFINITIES'] = options;
    options = function() { // Original name: handleLoadUserAffinitiesFailure
        entity = false;
        _closure1_slot6 = entity;
        entity = undefined;
        return entity;
    };
    mike['LOAD_USER_AFFINITIES_FAILURE'] = options;
    tango = function() { // Original name: handleLogout
        entity = {};
        tango = _closure1_slot7;
        report = entity;
        zulu = copyDataProperties(report, tango);
        _closure1_slot9 = entity;
        entity = {};
        tango = _closure1_slot8;
        report = entity;
        zulu = copyDataProperties(report, tango);
        _closure1_slot10 = entity;
        entity = undefined;
        return entity;
    };
    mike['LOGOUT'] = tango;
    tango = golf.prototype;
    tango = Object.create(tango, {constructor: {value: golf}});
    sizing = tango;
    backup = mike;
    mike = new sizing[golf](kilo, backup, foxtrot);
    mike = mike instanceof Object ? mike : tango;
    tango = 8;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_affinities/UserAffinitiesStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();