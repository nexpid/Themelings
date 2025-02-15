// app/stores/DefaultRouteStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun48896: for(var _fun48896_ip = 0; ; ) switch(_fun48896_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot11;
            entity = entity.bind(zulu)();
            if(entity) { _fun48896_ip = 51; continue _fun48896 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun48896_ip = 92; continue _fun48896;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun48896_ip = 71; continue _fun48896 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot5;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun48897: for(var _fun48897_ip = 0; ; ) switch(_fun48897_ip) {
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
            _fun48897_ip = 74; continue _fun48897;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot11 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.Routes;
    var _closure1_slot7 = mike;
    mike = {'lastViewedPath': null, 'lastViewedNonVoicePath': null};
    var _closure1_slot8 = mike;
    var _closure1_slot9 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.PersistedStore;
    mike = function(argFoo) {
        tango = function() { // Original name: DefaultRouteStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot2;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot10;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot6;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot3;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            _fun48902: for(var _fun48902_ip = 0; ; ) switch(_fun48902_ip) {
 0:
                zulu = arguments[0];
                entity = undefined;
                if(!(zulu === entity)) { _fun48902_ip = 16; continue _fun48902 }
 9:
                zulu = _closure1_slot8;
 16:
                mike = null;
                if(!(mike == zulu)) { _fun48902_ip = 29; continue _fun48902 }
 22:
                zulu = _closure1_slot8;
 29:
                _closure1_slot9 = zulu;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(5);
        entity[0] = report;
        report = {};
        golf = 'defaultRoute';
        report['key'] = golf;
        golf = function() { // Original name: get
            _fun48903: for(var _fun48903_ip = 0; ; ) switch(_fun48903_ip) {
 0:
                entity = _closure1_slot9;
                entity = entity.lastViewedPath;
                zulu = null;
                if(!(zulu == entity)) { _fun48903_ip = 29; continue _fun48903 }
 19:
                mike = _closure1_slot7;
                entity = mike.ME;
 29:
                return entity;
            }
        };
        report['get'] = golf;
        entity[1] = report;
        report = {};
        golf = 'lastNonVoiceRoute';
        report['key'] = golf;
        golf = function() { // Original name: get
            _fun48904: for(var _fun48904_ip = 0; ; ) switch(_fun48904_ip) {
 0:
                entity = _closure1_slot9;
                entity = entity.lastViewedNonVoicePath;
                zulu = null;
                if(!(zulu == entity)) { _fun48904_ip = 29; continue _fun48904 }
 19:
                mike = _closure1_slot7;
                entity = mike.ME;
 29:
                return entity;
            }
        };
        report['get'] = golf;
        entity[2] = report;
        report = {};
        golf = 'fallbackRoute';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot7;
            entity = entity.ME;
            return entity;
        };
        report['get'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getState';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = _closure1_slot9;
            return entity;
        };
        report['value'] = oscar;
        entity[4] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'DefaultRouteStore';
    options['displayName'] = mike;
    options['persistKey'] = mike;
    mike = new Array(1);
    verify = function() {
        report = _closure1_slot0;
        oscar = _closure1_slot1;
        entity = 7;
        mike = oscar[entity];
        zulu = undefined;
        mike = report.bind(zulu)(mike);
        options = mike.Storage;
        golf = options.get;
        tango = 'LAST_VIEWED_PATH';
        mike = null;
        mike = golf.bind(options)(tango, mike);
        entity = oscar[entity];
        entity = report.bind(zulu)(entity);
        zulu = entity.Storage;
        entity = zulu.remove;
        entity = entity.bind(zulu)(tango);
        entity = {};
        entity['lastViewedPath'] = mike;
        return entity;
    };
    mike[0] = verify;
    options['migrations'] = mike;
    mike = 8;
    mike = oscar[mike];
    romeo = golf.bind(entity)(mike);
    mike = {};
    verify = function(argFoo) { // Original name: handleSaveRoute
        entity = argFoo;
        mike = entity.path;
        entity = _closure1_slot9;
        entity['lastViewedPath'] = mike;
        entity = true;
        return entity;
    };
    mike['SAVE_LAST_ROUTE'] = verify;
    tango = function(argFoo) { // Original name: handleSaveLastNonVoiceRoute
        entity = argFoo;
        mike = entity.path;
        entity = _closure1_slot9;
        entity['lastViewedNonVoicePath'] = mike;
        entity = true;
        return entity;
    };
    mike['SAVE_LAST_NON_VOICE_ROUTE'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    foxtrot = tango;
    yankee = mike;
    mike = new foxtrot[options](romeo, yankee, offset);
    mike = mike instanceof Object ? mike : tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'stores/DefaultRouteStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();