// app/modules/nuf/NewUserStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun43572: for(var _fun43572_ip = 0; ; ) switch(_fun43572_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot8;
            entity = entity.bind(zulu)();
            if(entity) { _fun43572_ip = 51; continue _fun43572 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun43572_ip = 92; continue _fun43572;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun43572_ip = 71; continue _fun43572 }
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
    var _closure1_slot7 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun43573: for(var _fun43573_ip = 0; ; ) switch(_fun43573_ip) {
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
            _fun43573_ip = 74; continue _fun43573;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot8 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot8 = entity;
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
    mike = null;
    var _closure1_slot5 = mike;
    mike = 5;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    golf = mike.PersistedStore;
    mike = function(argFoo) {
        tango = function() { // Original name: NewUserStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot0;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot7;
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
            _fun43578: for(var _fun43578_ip = 0; ; ) switch(_fun43578_ip) {
 0:
                tango = argFoo;
                zulu = null;
                report = zulu == tango;
                entity = undefined;
                mike = undefined;
                if(report) { _fun43578_ip = 21; continue _fun43578 }
 16:
                mike = tango.type;
 21:
                tango = zulu != mike;
                zulu = null;
                if(!tango) { _fun43578_ip = 33; continue _fun43578 }
 30:
                zulu = mike;
 33:
                _closure1_slot5 = zulu;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golf = 'getType';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot5;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getState';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = {};
            mike = _closure1_slot5;
            entity['type'] = mike;
            return entity;
        };
        report['value'] = oscar;
        entity[2] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(golf);
    mike = 'NewUserStore';
    options['displayName'] = mike;
    mike = 'nuf';
    options['persistKey'] = mike;
    mike = 6;
    mike = report[mike];
    yankee = oscar.bind(entity)(mike);
    mike = {};
    oscar = function(argFoo) { // Original name: handleNewUser
        entity = argFoo;
        mike = entity.newUserType;
        _closure1_slot5 = mike;
        mike = _closure1_slot6;
        entity = mike.persist;
        entity = entity.bind(mike)();
        entity = undefined;
        return entity;
    };
    mike['NUF_NEW_USER'] = oscar;
    oscar = function() { // Original name: handleNUFCompleted
        mike = null;
        _closure1_slot5 = mike;
        mike = _closure1_slot6;
        entity = mike.persist;
        entity = entity.bind(mike)();
        entity = undefined;
        return entity;
    };
    mike['NUF_COMPLETE'] = oscar;
    oscar = options.prototype;
    oscar = Object.create(oscar, {constructor: {value: options}});
    romeo = oscar;
    offset = mike;
    mike = new romeo[options](yankee, offset, verify);
    mike = mike instanceof Object ? mike : oscar;
    var _closure1_slot6 = mike;
    tango = 7;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/nuf/NewUserStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();