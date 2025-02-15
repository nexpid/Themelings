// app/modules/collectibles/CollectiblesMarketingsStore.tsx
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
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot0 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot1 = mike;
    mike = 2;
    mike = oscar[mike];
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
    tango = 'NOT_FETCHED';
    mike['NOT_FETCHED'] = tango;
    tango = 'FETCHING';
    mike['FETCHING'] = tango;
    tango = 'FETCHED';
    mike['FETCHED'] = tango;
    var _closure1_slot5 = mike;
    tango = {};
    var _closure1_slot6 = tango;
    tango = mike.NOT_FETCHED;
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    options = tango.Store;
    tango = function(argFoo) {
        tango = function() { // Original name: CollectiblesMarketingsStore
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
        entity = 'getMarketingBySurface';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            mike = _closure1_slot6;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golf = 'fetchState';
        report['key'] = golf;
        oscar = function() { // Original name: get
            entity = _closure1_slot7;
            return entity;
        };
        report['get'] = oscar;
        entity[1] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = tango.bind(entity)(options);
    tango = 'CollectiblesMarketingsStore';
    options['displayName'] = tango;
    tango = 6;
    tango = oscar[tango];
    romeo = golf.bind(entity)(tango);
    tango = {};
    verify = function() { // Original name: COLLECTIBLES_MARKETING_FETCH
        entity = _closure1_slot5;
        entity = entity.FETCHING;
        _closure1_slot7 = entity;
        entity = undefined;
        return entity;
    };
    tango['COLLECTIBLES_MARKETING_FETCH'] = verify;
    verify = function(argFoo) { // Original name: COLLECTIBLES_MARKETING_FETCH_SUCCESS
        entity = argFoo;
        entity = entity.marketings;
        entity = entity.marketingsBySurfaces;
        _closure1_slot6 = entity;
        entity = _closure1_slot5;
        entity = entity.FETCHED;
        _closure1_slot7 = entity;
        entity = undefined;
        return entity;
    };
    tango['COLLECTIBLES_MARKETING_FETCH_SUCCESS'] = verify;
    report = function() { // Original name: LOGOUT
        entity = {};
        _closure1_slot6 = entity;
        entity = _closure1_slot5;
        entity = entity.NOT_FETCHED;
        _closure1_slot7 = entity;
        entity = undefined;
        return entity;
    };
    tango['LOGOUT'] = report;
    report = options.prototype;
    report = Object.create(report, {constructor: {value: options}});
    foxtrot = report;
    yankee = tango;
    tango = new foxtrot[options](romeo, yankee, offset);
    tango = tango instanceof Object ? tango : report;
    report = 7;
    oscar = oscar[report];
    report = argBar;
    golf = report.bind(entity)(oscar);
    oscar = golf.fileFinishedImporting;
    report = 'modules/collectibles/CollectiblesMarketingsStore.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['FetchState'] = mike;
    return entity;
})();