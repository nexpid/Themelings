// app/modules/labs/LabFeatureStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
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
            report = _closure1_slot5;
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
    golf = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = report[entity];
    entity = undefined;
    mike = oscar.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 1;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 2;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 3;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 4;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = {};
    var _closure1_slot7 = mike;
    mike = 6;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    golf = mike.DeviceSettingsStore;
    mike = function(argFoo) {
        tango = function() { // Original name: LabFeatureStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot2;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot8;
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
        entity = 'getUserAgnosticState';
        report['key'] = entity;
        entity = function() { // Original name: value
            entity = {};
            mike = _closure1_slot7;
            entity['toggleStates'] = mike;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golf = 'initialize';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                offset = argFoo;
                zulu = _closure1_slot0;
                mike = _closure1_slot1;
                entity = 5;
                mike = mike[entity];
                entity = undefined;
                options = zulu.bind(entity)(mike);
                zulu = null;
                mike = undefined;
                for(tango in options)
 40:
                {
 49:
                    foxtrot = tango;
                    romeo = _closure1_slot7;
                    yankee = zulu == offset;
                    backup = undefined;
                    if(yankee) { _fun00006_ip = 90; continue _fun00005 }
 65:
                    kilo = offset.toggleStates;
                    yankee = zulu == kilo;
                    mike = kilo;
                    backup = undefined;
                    if(yankee) { _fun00006_ip = 90; continue _fun00005 }
 83:
                    backup = kilo[foxtrot];
                    mike = kilo;
 90:
                    yankee = zulu != backup;
                    if(!yankee) { _fun00006_ip = 100; continue _fun00005 }
 97:
                    yankee = backup;
 100:
                    romeo[foxtrot] = yankee;
                    _fun00006_ip = 40; continue _fun00005;
                }
 106:
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'get';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                mike = _closure1_slot7;
                entity = argFoo;
                mike = mike[entity];
                entity = null;
                entity = entity != mike;
                if(!entity) { _fun00008_ip = 26; continue _fun00007 }
 23:
                entity = mike;
 26:
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'set';
        report['key'] = golf;
        oscar = function(argFoo, argBar) { // Original name: value
            entity = argBar;
            zulu = _closure1_slot7;
            mike = argFoo;
            zulu[mike] = entity;
            return entity;
        };
        report['value'] = oscar;
        entity[3] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    golf = mike.bind(entity)(golf);
    mike = 'LabFeatureStore';
    golf['displayName'] = mike;
    golf['persistKey'] = mike;
    mike = 7;
    mike = report[mike];
    yankee = oscar.bind(entity)(mike);
    mike = {};
    tango = function(argFoo) { // Original name: handleLabFeatureToggleSet
        entity = argFoo;
        zulu = entity.labFeature;
        mike = entity.enabled;
        entity = _closure1_slot7;
        entity[zulu] = mike;
        entity = undefined;
        return entity;
    };
    mike['LAB_FEATURE_TOGGLE'] = tango;
    tango = golf.prototype;
    tango = Object.create(tango, {constructor: {value: golf}});
    romeo = tango;
    offset = mike;
    mike = new romeo[golf](yankee, offset, verify);
    mike = mike instanceof Object ? mike : tango;
    tango = 8;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/labs/LabFeatureStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();