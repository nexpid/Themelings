// app/stores/NetworkStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
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
            report = _closure1_slot5;
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
            _closure1_slot14 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: handleConnectionInfoChange
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            mike = argFoo;
            entity = mike.type;
            tango = null;
            if(!(tango == entity)) { _fun00006_ip = 29; continue _fun00005 }
 14:
            entity = _closure1_slot7;
            zulu = entity.UNKNOWN;
            _fun00006_ip = 34; continue _fun00005;
 29:
            zulu = mike.type;
 34:
            _closure1_slot9 = zulu;
            zulu = mike.effectiveSpeed;
            if(!(tango == zulu)) { _fun00006_ip = 61; continue _fun00005 }
 51:
            tango = _closure1_slot8;
            zulu = tango.UNKNOWN;
 61:
            _closure1_slot10 = zulu;
            mike = mike.serviceProvider;
            _closure1_slot11 = mike;
            mike = _closure1_slot12;
            entity = mike.emitChange;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot15 = entity;
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
    options = mike.NetworkConnectionTypes;
    var _closure1_slot7 = options;
    mike = mike.NetworkConnectionSpeeds;
    var _closure1_slot8 = mike;
    options = options.UNKNOWN;
    var _closure1_slot9 = options;
    mike = mike.UNKNOWN;
    var _closure1_slot10 = mike;
    mike = null;
    var _closure1_slot11 = mike;
    mike = 7;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: NetworkStoreClass
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot2;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot13;
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
            zulu = _closure1_slot0;
            report = _closure1_slot1;
            mike = 6;
            oscar = report[mike];
            entity = undefined;
            golf = zulu.bind(entity)(oscar);
            oscar = golf.getNetworkInformation;
            golf = oscar.bind(golf)();
            oscar = golf.then;
            tango = _closure1_slot15;
            oscar = oscar.bind(golf)(tango);
            mike = report[mike];
            zulu = zulu.bind(entity)(mike);
            mike = zulu.addChangeCallback;
            mike = mike.bind(zulu)(tango);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golf = 'getType';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot9;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getEffectiveConnectionSpeed';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot10;
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getServiceProvider';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = _closure1_slot11;
            return entity;
        };
        report['value'] = oscar;
        entity[3] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    verify = mike.bind(entity)(options);
    mike = 'NetworkStore';
    verify['displayName'] = mike;
    mike = 8;
    mike = oscar[mike];
    romeo = golf.bind(entity)(mike);
    mike = verify.prototype;
    golf = Object.create(mike, {constructor: {value: verify}});
    yankee = {};
    foxtrot = golf;
    mike = new foxtrot[verify](romeo, yankee, offset);
    mike = mike instanceof Object ? mike : golf;
    var _closure1_slot12 = mike;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'stores/NetworkStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();