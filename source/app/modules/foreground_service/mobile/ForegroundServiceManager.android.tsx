// app/modules/foreground_service/mobile/ForegroundServiceManager.android.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun75433: for(var _fun75433_ip = 0; ; ) switch(_fun75433_ip) {
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
            if(entity) { _fun75433_ip = 51; continue _fun75433 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun75433_ip = 92; continue _fun75433;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun75433_ip = 71; continue _fun75433 }
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
        _fun75434: for(var _fun75434_ip = 0; ; ) switch(_fun75434_ip) {
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
            _fun75434_ip = 76; continue _fun75434;
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
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.NativeModules;
    var _closure1_slot7 = tango;
    tango = function() {
        tango = _closure1_slot6;
        zulu = function() { // Original name: ForegroundServiceManager
            zulu = this;
            var _closure3_slot0 = zulu;
            report = _closure1_slot5;
            tango = _closure2_slot0;
            entity = undefined;
            tango = report.bind(entity)(zulu, tango);
            tango = global;
            tango = tango.Map;
            report = tango.prototype;
            report = Object.create(report, {constructor: {value: tango}});
            options = report;
            tango = new options[tango](golf);
            tango = tango instanceof Object ? tango : report;
            zulu['serviceNotifications'] = tango;
            tango = 1;
            zulu['serviceNotificationIdentifier'] = tango;
            mike = function() {
                _fun75439: for(var _fun75439_ip = 0; ; ) switch(_fun75439_ip) {
 0:
                    mike = _closure3_slot0;
                    mike = mike.serviceNotifications;
                    mike = mike.size;
                    report = 0;
                    if(!(!(mike > report))) { _fun75439_ip = 51; continue _fun75439 }
 24:
                    mike = _closure1_slot7;
                    zulu = mike.ForegroundServiceModule;
                    mike = zulu.stopService;
                    mike = mike.bind(zulu)();
                    _fun75439_ip = 109; continue _fun75439;
 51:
                    mike = _closure1_slot7;
                    zulu = mike.ForegroundServiceModule;
                    mike = zulu.startService;
                    entity = _closure3_slot0;
                    tango = entity.serviceNotifications;
                    entity = tango.values;
                    golf = entity.bind(tango)();
                    entity = new Array(0);
                    options = entity;
                    oscar = 0;
                    tango = arraySpread(options, golf, oscar);
                    entity = mike.bind(zulu)(entity);
 109:
                    entity = undefined;
                    return entity;
                }
            };
            zulu['handleChange'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'initialize';
        entity['key'] = mike;
        mike = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(6);
        mike[0] = entity;
        entity = {};
        oscar = 'terminate';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'addServiceHandler';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            mike = this;
            var _closure3_slot0 = mike;
            mike = argFoo;
            var _closure3_slot1 = mike;
            mike = global;
            zulu = mike.Promise;
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            tango = function(argFoo) {
                tango = _closure3_slot0;
                zulu = tango.serviceNotificationIdentifier;
                mike = tango.serviceNotificationIdentifier;
                mike = mike + 1;
                tango['serviceNotificationIdentifier'] = mike;
                mike = tango.updateServiceHandler;
                entity = _closure3_slot1;
                entity = mike.bind(tango)(zulu, entity);
                mike = argFoo;
                entity = undefined;
                mike = mike.bind(entity)(zulu);
                return entity;
            };
            report = mike;
            entity = new report[zulu](tango, zulu);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'updateServiceHandler';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun75444: for(var _fun75444_ip = 0; ; ) switch(_fun75444_ip) {
 0:
                tango = argFoo;
                report = argBar;
                mike = this;
                entity = null;
                if(!(entity != report)) { _fun75444_ip = 94; continue _fun75444 }
 15:
                zulu = _closure1_slot0;
                oscar = _closure1_slot1;
                entity = 6;
                entity = oscar[entity];
                oscar = undefined;
                zulu = zulu.bind(oscar)(entity);
                golf = mike.serviceNotifications;
                entity = golf.get;
                entity = entity.bind(golf)(tango);
                entity = zulu.bind(oscar)(entity, report);
                if(entity) { _fun75444_ip = 139; continue _fun75444 }
 65:
                zulu = mike.serviceNotifications;
                entity = zulu.set;
                entity = entity.bind(zulu)(tango, report);
                entity = mike.handleChange;
                entity = entity.bind(mike)();
                _fun75444_ip = 139; continue _fun75444;
 94:
                zulu = mike.serviceNotifications;
                entity = zulu.has;
                entity = entity.bind(zulu)(tango);
                if(!entity) { _fun75444_ip = 139; continue _fun75444 }
 113:
                zulu = mike.serviceNotifications;
                entity = zulu.delete;
                entity = entity.bind(zulu)(tango);
                entity = mike.handleChange;
                entity = entity.bind(mike)();
 139:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'removeServiceHandler';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            tango = this;
            zulu = tango.updateServiceHandler;
            mike = argFoo;
            entity = null;
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'isForegroundServiceRunning';
        entity['key'] = oscar;
        report = function(argFoo) { // Original name: value
            entity = _closure1_slot7;
            zulu = entity.ForegroundServiceModule;
            mike = zulu.isServiceRunning;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        mike[5] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    tango = tango.bind(entity)();
    options = tango.prototype;
    options = Object.create(options, {constructor: {value: tango}});
    foxtrot = options;
    tango = new foxtrot[tango](romeo);
    tango = tango instanceof Object ? tango : options;
    var _closure1_slot8 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        tango = function() { // Original name: ForegroundServiceLifecycleManager
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
        entity = '_initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            mike = _closure1_slot8;
            entity = mike.initialize;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(6);
        entity[0] = report;
        report = {};
        golf = '_terminate';
        report['key'] = golf;
        golf = function() { // Original name: value
            mike = _closure1_slot8;
            entity = mike.terminate;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'addServiceHandler';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = _closure1_slot8;
            mike = zulu.addServiceHandler;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'updateServiceHandler';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            tango = _closure1_slot8;
            zulu = tango.updateServiceHandler;
            mike = argFoo;
            entity = argBar;
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'removeServiceHandler';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = _closure1_slot8;
            mike = zulu.removeServiceHandler;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'isForegroundServiceRunning';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            zulu = _closure1_slot8;
            mike = zulu.isForegroundServiceRunning;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = oscar;
        entity[5] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/foreground_service/mobile/ForegroundServiceManager.android.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();