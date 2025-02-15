// app/modules/global_discovery_servers/GlobalDiscoveryServersSearchResultsStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
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
            entity = _closure1_slot14;
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
    var _closure1_slot13 = entity;
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
            _closure1_slot14 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: getSearchStateId
        entity = argFoo;
        tango = _closure1_slot7;
        zulu = new Array(6);
        zulu[0] = tango;
        tango = entity.query;
        zulu[1] = tango;
        tango = _closure1_slot8;
        zulu[2] = tango;
        tango = entity.categoryId;
        zulu[3] = tango;
        mike = _closure1_slot9;
        zulu[4] = mike;
        entity = entity.languageCode;
        zulu[5] = entity;
        mike = zulu.join;
        entity = '-';
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: getOrCreateSearchState
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot15;
            entity = undefined;
            tango = zulu.bind(entity)(report);
            zulu = _closure1_slot10;
            entity = zulu.get;
            entity = entity.bind(zulu)(tango);
            zulu = null;
            if(!(zulu == entity)) { _fun00006_ip = 75; continue _fun00005 }
 37:
            oscar = _closure1_slot12;
            zulu = {};
            report = report.query;
            zulu['query'] = report;
            report = oscar.prototype;
            report = Object.create(report, {constructor: {value: oscar}});
            verify = report;
            options = zulu;
            zulu = new verify[oscar](options, golf);
            entity = zulu instanceof Object ? zulu : report;
 75:
            zulu = _closure1_slot10;
            mike = zulu.set;
            mike = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo, argBar) { // Original name: withSearchState
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zulu = _closure1_slot15;
            tango = undefined;
            mike = argFoo;
            zulu = zulu.bind(tango)(mike);
            mike = _closure1_slot10;
            entity = mike.get;
            zulu = entity.bind(mike)(zulu);
            entity = null;
            mike = entity != zulu;
            if(!mike) { _fun00008_ip = 48; continue _fun00007 }
 40:
            mike = argBar;
            entity = mike.bind(tango)(zulu);
 48:
            return entity;
        }
    };
    var _closure1_slot17 = entity;
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
    options = 5;
    options = oscar[options];
    options = report.bind(entity)(options);
    verify = options.SEARCH_RESULTS_QUERY_PREFIX;
    var _closure1_slot7 = verify;
    verify = options.SEARCH_RESULTS_CATEGORY_PREFIX;
    var _closure1_slot8 = verify;
    options = options.SEARCH_RESULTS_LANGUAGE_CODE_PREFIX;
    var _closure1_slot9 = options;
    options = mike.Map;
    verify = options.prototype;
    verify = Object.create(verify, {constructor: {value: options}});
    backup = verify;
    options = new backup[options](foxtrot);
    options = options instanceof Object ? options : verify;
    var _closure1_slot10 = options;
    mike = mike.Map;
    options = mike.prototype;
    options = Object.create(options, {constructor: {value: mike}});
    backup = options;
    mike = new backup[mike](foxtrot);
    mike = mike instanceof Object ? mike : options;
    var _closure1_slot11 = mike;
    mike = function() {
        tango = _closure1_slot6;
        zulu = function(argFoo) { // Original name: SearchState
            zulu = this;
            entity = argFoo;
            mike = entity.query;
            report = _closure1_slot5;
            tango = _closure2_slot0;
            entity = undefined;
            tango = report.bind(entity)(zulu, tango);
            tango = new Array(0);
            zulu['guildIds'] = tango;
            tango = null;
            zulu['error'] = tango;
            zulu['offset'] = tango;
            zulu['total'] = tango;
            report = false;
            zulu['isFetching'] = report;
            zulu['isInitialFetchComplete'] = report;
            zulu['lastFetchTimestamp'] = tango;
            zulu['query'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'handleSearchStart';
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
        oscar = 'handleSearchFailure';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            zulu = this;
            entity = false;
            zulu['isFetching'] = entity;
            entity = true;
            zulu['isInitialFetchComplete'] = entity;
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 6;
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
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'handleSearchSuccess';
        entity['key'] = oscar;
        report = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = argFoo;
                zulu = this;
                mike = entity.total;
                oscar = entity.guilds;
                entity = undefined;
                var _closure3_slot0 = entity;
                report = null;
                zulu['error'] = report;
                golf = false;
                zulu['isFetching'] = golf;
                golf = true;
                zulu['isInitialFetchComplete'] = golf;
                golf = global;
                options = golf.Date;
                golf = options.now;
                golf = golf.bind(options)();
                zulu['lastFetchTimestamp'] = golf;
                if(!(report != mike)) { _fun00010_ip = 83; continue _fun00009 }
 77:
                zulu['total'] = mike;
 83:
                offset = zulu.guildIds;
                mike = new Array(0);
                verify = 0;
                yankee = mike;
                report = arraySpread(yankee, offset, verify);
                _closure3_slot0 = mike;
                report = oscar.forEach;
                tango = function(argFoo) {
                    zulu = _closure3_slot0;
                    mike = zulu.push;
                    entity = argFoo;
                    entity = entity.id;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                tango = report.bind(oscar)(tango);
                zulu['guildIds'] = mike;
                mike = mike.length;
                zulu['offset'] = mike;
                return entity;
            }
        };
        entity['value'] = report;
        mike[2] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    var _closure1_slot12 = mike;
    mike = 7;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: GlobalDiscoveryServersSearchResultsStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot5;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot13;
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
        entity = 'getGuild';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            zulu = _closure1_slot11;
            mike = zulu.get;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(9);
        entity[0] = report;
        report = {};
        golf = 'getGuildIds';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            tango = _closure1_slot17;
            zulu = undefined;
            mike = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.guildIds;
                return entity;
            };
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getIsFetching';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            tango = _closure1_slot17;
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
        entity[2] = report;
        report = {};
        golf = 'getIsInitialFetchComplete';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            tango = _closure1_slot17;
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
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getOffset';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            tango = _closure1_slot17;
            zulu = undefined;
            mike = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.offset;
                return entity;
            };
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getTotal';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            tango = _closure1_slot17;
            zulu = undefined;
            mike = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.total;
                return entity;
            };
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'getLastFetchTimestamp';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            tango = _closure1_slot17;
            zulu = undefined;
            mike = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.lastFetchTimestamp;
                return entity;
            };
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        };
        report['value'] = golf;
        entity[6] = report;
        report = {};
        golf = 'getError';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            tango = _closure1_slot17;
            zulu = undefined;
            mike = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.error;
                return entity;
            };
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        };
        report['value'] = golf;
        entity[7] = report;
        report = {};
        golf = 'getErrorMessage';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            tango = _closure1_slot17;
            zulu = undefined;
            mike = argFoo;
            entity = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.error;
                    entity = null;
                    mike = entity == zulu;
                    entity = undefined;
                    if(mike) { _fun00012_ip = 29; continue _fun00011 }
 19:
                    mike = zulu.getAnyErrorMessage;
                    entity = mike.bind(zulu)();
 29:
                    return entity;
                }
            };
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        };
        report['value'] = oscar;
        entity[8] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'GlobalDiscoveryServersSearchResultsStore';
    options['displayName'] = mike;
    mike = 8;
    mike = oscar[mike];
    foxtrot = golf.bind(entity)(mike);
    mike = {};
    verify = function() { // Original name: handleConnectionOpen
        zulu = _closure1_slot10;
        mike = zulu.clear;
        mike = mike.bind(zulu)();
        mike = _closure1_slot11;
        entity = mike.clear;
        entity = entity.bind(mike)();
        entity = undefined;
        return entity;
    };
    mike['CONNECTION_OPEN'] = verify;
    verify = function(argFoo) { // Original name: handleGlobalDiscoveryServersSearchStart
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            oscar = entity.query;
            report = entity.categoryId;
            tango = entity.languageCode;
            zulu = entity.reset;
            options = _closure1_slot15;
            golf = {};
            golf['query'] = oscar;
            golf['categoryId'] = report;
            golf['languageCode'] = tango;
            entity = undefined;
            options = options.bind(entity)(golf);
            if(!zulu) { _fun00014_ip = 73; continue _fun00013 }
 59:
            golf = _closure1_slot10;
            zulu = golf.delete;
            zulu = zulu.bind(golf)(options);
 73:
            zulu = _closure1_slot16;
            mike = {};
            mike['query'] = oscar;
            mike['categoryId'] = report;
            mike['languageCode'] = tango;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.handleSearchStart;
            mike = mike.bind(zulu)();
            return entity;
        }
    };
    mike['GLOBAL_DISCOVERY_SERVERS_SEARCH_START'] = verify;
    verify = function(argFoo) { // Original name: handleGlobalDiscoveryServersSearchSuccess
        mike = argFoo;
        golf = mike.query;
        report = mike.categoryId;
        entity = mike.languageCode;
        oscar = mike.total;
        tango = mike.guilds;
        zulu = _closure1_slot16;
        mike = {};
        mike['query'] = golf;
        mike['categoryId'] = report;
        mike['languageCode'] = entity;
        entity = undefined;
        report = zulu.bind(entity)(mike);
        zulu = report.handleSearchSuccess;
        mike = {};
        mike['total'] = oscar;
        mike['guilds'] = tango;
        mike = zulu.bind(report)(mike);
        zulu = tango.forEach;
        mike = function(argFoo) {
            tango = argFoo;
            zulu = _closure1_slot11;
            mike = zulu.set;
            entity = tango.id;
            entity = mike.bind(zulu)(entity, tango);
            entity = undefined;
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS'] = verify;
    verify = function(argFoo) { // Original name: handleGlobalDiscoveryServersSearchFailure
        mike = argFoo;
        oscar = mike.query;
        report = mike.categoryId;
        entity = mike.languageCode;
        tango = mike.error;
        zulu = _closure1_slot16;
        mike = {};
        mike['query'] = oscar;
        mike['categoryId'] = report;
        mike['languageCode'] = entity;
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.handleSearchFailure;
        mike = mike.bind(zulu)(tango);
        return entity;
    };
    mike['GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE'] = verify;
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
        zulu = _closure1_slot10;
        mike = zulu.forEach;
        entity = function(argFoo, argBar) {
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                entity = argFoo;
                zulu = entity.query;
                mike = null;
                if(!(mike != zulu)) { _fun00016_ip = 59; continue _fun00015 }
 14:
                zulu = _closure2_slot0;
                mike = zulu.has;
                entity = entity.query;
                entity = mike.bind(zulu)(entity);
                if(entity) { _fun00016_ip = 59; continue _fun00015 }
 39:
                zulu = _closure1_slot10;
                mike = zulu.delete;
                entity = argBar;
                entity = mike.bind(zulu)(entity);
 59:
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
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/global_discovery_servers/GlobalDiscoveryServersSearchResultsStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();