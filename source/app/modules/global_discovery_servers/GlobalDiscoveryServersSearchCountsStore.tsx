// app/modules/global_discovery_servers/GlobalDiscoveryServersSearchCountsStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun106757: for(var _fun106757_ip = 0; ; ) switch(_fun106757_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot10;
            entity = entity.bind(zulu)();
            if(entity) { _fun106757_ip = 51; continue _fun106757 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun106757_ip = 92; continue _fun106757;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun106757_ip = 71; continue _fun106757 }
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
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun106758: for(var _fun106758_ip = 0; ; ) switch(_fun106758_ip) {
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
            _fun106758_ip = 76; continue _fun106758;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot10 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: getOrCreateSearchCountState
        _fun106761: for(var _fun106761_ip = 0; ; ) switch(_fun106761_ip) {
 0:
            tango = argFoo;
            zulu = _closure1_slot7;
            entity = zulu.get;
            entity = entity.bind(zulu)(tango);
            zulu = null;
            if(!(zulu == entity)) { _fun106761_ip = 50; continue _fun106761 }
 26:
            zulu = _closure1_slot8;
            report = zulu.prototype;
            report = Object.create(report, {constructor: {value: zulu}});
            options = report;
            zulu = new options[zulu](golf);
            entity = zulu instanceof Object ? zulu : report;
 50:
            zulu = _closure1_slot7;
            mike = zulu.set;
            mike = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo, argBar) { // Original name: withSearchCountState
        _fun106762: for(var _fun106762_ip = 0; ; ) switch(_fun106762_ip) {
 0:
            zulu = _closure1_slot7;
            mike = zulu.get;
            entity = argFoo;
            tango = mike.bind(zulu)(entity);
            entity = null;
            mike = entity != tango;
            if(!mike) { _fun106762_ip = 39; continue _fun106762 }
 29:
            zulu = argBar;
            mike = undefined;
            entity = zulu.bind(mike)(tango);
 39:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    mike = global;
    offset = mike.Object;
    verify = offset.defineProperty;
    options = {};
    entity = true;
    options['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, options);
    entity = 0;
    options = oscar[entity];
    entity = undefined;
    options = golf.bind(entity)(options);
    var _closure1_slot2 = options;
    options = 1;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot3 = options;
    options = 2;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot4 = options;
    options = 3;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot5 = options;
    options = 4;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot6 = options;
    mike = mike.Map;
    options = mike.prototype;
    options = Object.create(options, {constructor: {value: mike}});
    backup = options;
    mike = new backup[mike](foxtrot);
    mike = mike instanceof Object ? mike : options;
    var _closure1_slot7 = mike;
    mike = function() {
        tango = _closure1_slot6;
        zulu = function() { // Original name: SearchCountState
            zulu = this;
            tango = _closure1_slot5;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = false;
            zulu['isInitialFetchComplete'] = mike;
            zulu['isFetching'] = mike;
            mike = null;
            zulu['error'] = mike;
            zulu['counts'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'handleSearchCountStart';
        entity['key'] = mike;
        mike = function() { // Original name: value
            mike = this;
            entity = null;
            mike['error'] = entity;
            entity = true;
            mike['isFetching'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(3);
        mike[0] = entity;
        entity = {};
        oscar = 'handleSearchCountSuccess';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            mike = this;
            entity = argFoo;
            mike['counts'] = entity;
            entity = false;
            mike['isFetching'] = entity;
            entity = true;
            mike['isInitialFetchComplete'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'handleSearchCountFailure';
        entity['key'] = oscar;
        report = function(argFoo) { // Original name: value
            zulu = this;
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 5;
            mike = mike[entity];
            entity = undefined;
            mike = tango.bind(entity)(mike);
            report = mike.APIError;
            mike = report.prototype;
            tango = Object.create(mike, {constructor: {value: report}});
            oscar = argFoo;
            golf = tango;
            mike = new golf[report](oscar, report);
            mike = mike instanceof Object ? mike : tango;
            zulu['error'] = mike;
            mike = false;
            zulu['isFetching'] = mike;
            return entity;
        };
        entity['value'] = report;
        mike[2] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    var _closure1_slot8 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: GlobalDiscoveryServersSearchCountStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot5;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot9;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot4;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot6;
        report = {};
        entity = 'getIsInitialFetchComplete';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            tango = _closure1_slot12;
            zulu = undefined;
            mike = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.isInitialFetchComplete;
                return entity;
            };
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golf = 'getIsFetchingCounts';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            tango = _closure1_slot12;
            zulu = undefined;
            mike = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.isFetching;
                return entity;
            };
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getCounts';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            tango = _closure1_slot12;
            zulu = undefined;
            mike = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.counts;
                return entity;
            };
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        };
        report['value'] = oscar;
        entity[2] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'GlobalDiscoveryServersSearchCountStore';
    options['displayName'] = mike;
    mike = 7;
    mike = oscar[mike];
    foxtrot = golf.bind(entity)(mike);
    mike = {};
    verify = function() { // Original name: handleConnectionOpen
        mike = _closure1_slot7;
        entity = mike.clear;
        entity = entity.bind(mike)();
        entity = undefined;
        return entity;
    };
    mike['CONNECTION_OPEN'] = verify;
    verify = function(argFoo) { // Original name: handleGlobalDiscoveryServersSearchCountStart
        entity = argFoo;
        zulu = entity.query;
        mike = _closure1_slot11;
        entity = undefined;
        zulu = mike.bind(entity)(zulu);
        mike = zulu.handleSearchCountStart;
        mike = mike.bind(zulu)();
        return entity;
    };
    mike['GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_START'] = verify;
    verify = function(argFoo) { // Original name: handleGlobalDiscoveryServersSearchCountSuccess
        entity = argFoo;
        zulu = entity.query;
        tango = entity.categoryCounts;
        mike = _closure1_slot11;
        entity = undefined;
        zulu = mike.bind(entity)(zulu);
        mike = zulu.handleSearchCountSuccess;
        mike = mike.bind(zulu)(tango);
        return entity;
    };
    mike['GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS'] = verify;
    verify = function(argFoo) { // Original name: handleGlobalDiscoveryServersSearchCountFailure
        entity = argFoo;
        zulu = entity.query;
        tango = entity.error;
        mike = _closure1_slot11;
        entity = undefined;
        zulu = mike.bind(entity)(zulu);
        mike = zulu.handleSearchCountFailure;
        mike = mike.bind(zulu)(tango);
        return entity;
    };
    mike['GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_FAILURE'] = verify;
    tango = function(argFoo) { // Original name: handleGlobalDiscoveryServersSearchClear
        mike = argFoo;
        report = mike.ignoreQueries;
        mike = global;
        mike = mike.Set;
        zulu = mike.prototype;
        zulu = Object.create(zulu, {constructor: {value: mike}});
        oscar = zulu;
        mike = new oscar[mike](report, tango);
        mike = mike instanceof Object ? mike : zulu;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot7;
        mike = zulu.forEach;
        entity = function(argFoo, argBar) {
            _fun106781: for(var _fun106781_ip = 0; ; ) switch(_fun106781_ip) {
 0:
                zulu = argBar;
                mike = _closure2_slot0;
                entity = mike.has;
                entity = entity.bind(mike)(zulu);
                if(entity) { _fun106781_ip = 40; continue _fun106781 }
 23:
                mike = _closure1_slot7;
                entity = mike.delete;
                entity = entity.bind(mike)(zulu);
 40:
                entity = undefined;
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    mike['GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    backup = tango;
    romeo = mike;
    mike = new backup[options](foxtrot, romeo, yankee);
    mike = mike instanceof Object ? mike : tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/global_discovery_servers/GlobalDiscoveryServersSearchCountsStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();