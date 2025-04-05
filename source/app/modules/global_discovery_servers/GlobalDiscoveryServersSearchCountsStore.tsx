// app/modules/global_discovery_servers/GlobalDiscoveryServersSearchCountsStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 72: // try_end0
            _fun00002_ip = 76; continue _fun00001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot9 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo) { // Original name: getOrCreateSearchCountState
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            zuuluu = _closure1_slot7;
            entity = zuuluu.get;
            entity = entity.bind(zuuluu)(tangon);
            zuuluu = null;
            if(!(zuuluu == entity)) { _fun00004_ip = 50; continue _fun00003 }
 26:
            zuuluu = _closure1_slot8;
            report = zuuluu.prototype;
            report = Object.create(report, {constructor: {value: zuuluu}});
            option = report;
            zuuluu = new option[zuuluu](golfie);
            entity = zuuluu instanceof Object ? zuuluu : report;
 50:
            zuuluu = _closure1_slot7;
            michal = zuuluu.set;
            michal = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo, argBar) { // Original name: withSearchCountState
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = _closure1_slot7;
            michal = zuuluu.get;
            entity = argFoo;
            tangon = michal.bind(zuuluu)(entity);
            entity = null;
            michal = entity != tangon;
            if(!michal) { _fun00006_ip = 39; continue _fun00005 }
 29:
            zuuluu = argBar;
            michal = undefined;
            entity = zuuluu.bind(michal)(tangon);
 39:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    michal = global;
    offset = michal.Object;
    verify = offset.defineProperty;
    option = {};
    entity = true;
    option['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, option);
    entity = 0;
    option = oscard[entity];
    entity = undefined;
    option = golfie.bind(entity)(option);
    var _closure1_slot2 = option;
    option = 1;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot3 = option;
    option = 2;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot4 = option;
    option = 3;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot5 = option;
    option = 4;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot6 = option;
    michal = michal.Map;
    option = michal.prototype;
    option = Object.create(option, {constructor: {value: michal}});
    backup = option;
    michal = new backup[michal](foxtra);
    michal = michal instanceof Object ? michal : option;
    var _closure1_slot7 = michal;
    michal = function() {
        tangon = _closure1_slot6;
        zuuluu = function() { // Original name: SearchCountState
            zuuluu = this;
            tangon = _closure1_slot5;
            michal = _closure2_slot0;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            michal = false;
            zuuluu['isInitialFetchComplete'] = michal;
            zuuluu['isFetching'] = michal;
            michal = null;
            zuuluu['error'] = michal;
            zuuluu['counts'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'handleSearchCountStart';
        entity['key'] = michal;
        michal = function() { // Original name: value
            michal = this;
            entity = null;
            michal['error'] = entity;
            entity = true;
            michal['isFetching'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(3);
        michal[0] = entity;
        entity = {};
        oscard = 'handleSearchCountSuccess';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            michal = this;
            entity = argFoo;
            michal['counts'] = entity;
            entity = false;
            michal['isFetching'] = entity;
            entity = true;
            michal['isInitialFetchComplete'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'handleSearchCountFailure';
        entity['key'] = oscard;
        report = function(argFoo) { // Original name: value
            zuuluu = this;
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            michal = tangon.bind(entity)(michal);
            report = michal.APIError;
            michal = report.prototype;
            tangon = Object.create(michal, {constructor: {value: report}});
            oscard = argFoo;
            golfie = tangon;
            michal = new golfie[report](oscard, report);
            michal = michal instanceof Object ? michal : tangon;
            zuuluu['error'] = michal;
            michal = false;
            zuuluu['isFetching'] = michal;
            return entity;
        };
        entity['value'] = report;
        michal[2] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    var _closure1_slot8 = michal;
    michal = 6;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: GlobalDiscoveryServersSearchCountStore
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot5;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot3;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot2;
                entity = _closure1_slot9;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00008_ip = 69; continue _fun00007 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00008_ip = 105; continue _fun00007;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot3;
                oscard = oscard.bind(zuuluu)(tangon);
                oscard = oscard.constructor;
                report = arguments;
                entity = golfie.bind(option)(verify, report, oscard);
 105:
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot4;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot6;
        report = {};
        entity = 'getIsInitialFetchComplete';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            tangon = _closure1_slot11;
            zuuluu = undefined;
            michal = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.isInitialFetchComplete;
                return entity;
            };
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golfie = 'getIsFetchingCounts';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            tangon = _closure1_slot11;
            zuuluu = undefined;
            michal = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.isFetching;
                return entity;
            };
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getCounts';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            tangon = _closure1_slot11;
            zuuluu = undefined;
            michal = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.counts;
                return entity;
            };
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        };
        report['value'] = oscard;
        entity[2] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'GlobalDiscoveryServersSearchCountStore';
    option['displayName'] = michal;
    michal = 7;
    michal = oscard[michal];
    foxtra = golfie.bind(entity)(michal);
    michal = {};
    verify = function() { // Original name: handleConnectionOpen
        michal = _closure1_slot7;
        entity = michal.clear;
        entity = entity.bind(michal)();
        entity = undefined;
        return entity;
    };
    michal['CONNECTION_OPEN'] = verify;
    verify = function(argFoo) { // Original name: handleGlobalDiscoveryServersSearchCountStart
        entity = argFoo;
        zuuluu = entity.query;
        michal = _closure1_slot10;
        entity = undefined;
        zuuluu = michal.bind(entity)(zuuluu);
        michal = zuuluu.handleSearchCountStart;
        michal = michal.bind(zuuluu)();
        return entity;
    };
    michal['GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_START'] = verify;
    verify = function(argFoo) { // Original name: handleGlobalDiscoveryServersSearchCountSuccess
        entity = argFoo;
        zuuluu = entity.query;
        tangon = entity.categoryCounts;
        michal = _closure1_slot10;
        entity = undefined;
        zuuluu = michal.bind(entity)(zuuluu);
        michal = zuuluu.handleSearchCountSuccess;
        michal = michal.bind(zuuluu)(tangon);
        return entity;
    };
    michal['GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS'] = verify;
    verify = function(argFoo) { // Original name: handleGlobalDiscoveryServersSearchCountFailure
        entity = argFoo;
        zuuluu = entity.query;
        tangon = entity.error;
        michal = _closure1_slot10;
        entity = undefined;
        zuuluu = michal.bind(entity)(zuuluu);
        michal = zuuluu.handleSearchCountFailure;
        michal = michal.bind(zuuluu)(tangon);
        return entity;
    };
    michal['GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_FAILURE'] = verify;
    tangon = function(argFoo) { // Original name: handleGlobalDiscoveryServersSearchClear
        michal = argFoo;
        report = michal.ignoreQueries;
        michal = global;
        michal = michal.Set;
        zuuluu = michal.prototype;
        zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
        oscard = zuuluu;
        michal = new oscard[michal](report, tangon);
        michal = michal instanceof Object ? michal : zuuluu;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot7;
        michal = zuuluu.forEach;
        entity = function(argFoo, argBar) {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zuuluu = argBar;
                michal = _closure2_slot0;
                entity = michal.has;
                entity = entity.bind(michal)(zuuluu);
                if(entity) { _fun00010_ip = 40; continue _fun00009 }
 23:
                michal = _closure1_slot7;
                entity = michal.delete;
                entity = entity.bind(michal)(zuuluu);
 40:
                entity = undefined;
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    michal['GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    backup = tangon;
    romeon = michal;
    michal = new backup[option](foxtra, romeon, yankee);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/global_discovery_servers/GlobalDiscoveryServersSearchCountsStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();