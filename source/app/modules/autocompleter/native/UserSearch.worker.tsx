// app/modules/autocompleter/native/UserSearch.worker.tsx
export default (function(argFoo, argBar, argBaz, _, argGrault, __, argPlugh) {
    zulu = argBar;
    oscar = argBaz;
    tango = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun79165: for(var _fun79165_ip = 0; ; ) switch(_fun79165_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot7;
            entity = entity.bind(zulu)();
            if(entity) { _fun79165_ip = 51; continue _fun79165 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun79165_ip = 92; continue _fun79165;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun79165_ip = 71; continue _fun79165 }
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
    var _closure1_slot6 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun79166: for(var _fun79166_ip = 0; ; ) switch(_fun79166_ip) {
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
            _fun79166_ip = 76; continue _fun79166;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot7 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = 0;
    report = tango[entity];
    entity = undefined;
    report = oscar.bind(entity)(report);
    var _closure1_slot0 = report;
    report = 1;
    report = tango[report];
    report = oscar.bind(entity)(report);
    var _closure1_slot1 = report;
    report = 2;
    report = tango[report];
    report = oscar.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 3;
    report = tango[report];
    report = oscar.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 4;
    report = tango[report];
    report = oscar.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 5;
    report = tango[report];
    report = zulu.bind(entity)(report);
    oscar = report.NativeModules;
    report = report.NativeEventEmitter;
    oscar = oscar.UserSearchWorkerManager;
    var _closure1_slot5 = oscar;
    mike = function(argFoo) {
        tango = function() { // Original name: UserSearchWorker
            oscar = this;
            zulu = _closure1_slot0;
            report = _closure2_slot0;
            tango = undefined;
            zulu = zulu.bind(tango)(oscar, report);
            zulu = _closure1_slot6;
            golf = _closure1_slot5;
            entity = new Array(1);
            entity[0] = golf;
            entity = zulu.bind(tango)(oscar, report, entity);
            var _closure3_slot0 = entity;
            zulu = global;
            zulu = zulu.Set;
            tango = zulu.prototype;
            tango = Object.create(tango, {constructor: {value: zulu}});
            yankee = tango;
            zulu = new yankee[zulu](offset);
            zulu = zulu instanceof Object ? zulu : tango;
            entity['handlers'] = zulu;
            zulu = null;
            entity['subscription'] = zulu;
            mike = function(argFoo) {
                mike = argFoo;
                var _closure4_slot0 = mike;
                mike = _closure3_slot0;
                zulu = mike.handlers;
                mike = zulu.forEach;
                entity = function(argFoo) {
                    zulu = {};
                    entity = _closure4_slot0;
                    zulu['data'] = entity;
                    mike = argFoo;
                    entity = undefined;
                    entity = mike.bind(entity)(zulu);
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            entity['handleCallback'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot4;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot1;
        report = {};
        entity = 'postMessage';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun79173: for(var _fun79173_ip = 0; ; ) switch(_fun79173_ip) {
 0:
                report = argFoo;
                entity = global;
                if(report) { _fun79173_ip = 42; continue _fun79173 }
 8:
                tango = entity.Error;
                mike = tango.prototype;
                zulu = Object.create(mike, {constructor: {value: tango}});
                oscar = 'Invalid data';
                golf = zulu;
                mike = new golf[tango](oscar, report);
                mike = mike instanceof Object ? mike : zulu;
                throw mike;
 42:
                zulu = _closure1_slot5;
                mike = zulu.onmessage;
                tango = entity.JSON;
                entity = tango.stringify;
                entity = entity.bind(tango)(report);
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golf = 'addEventListener';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun79174: for(var _fun79174_ip = 0; ; ) switch(_fun79174_ip) {
 0:
                entity = this;
                zulu = 'message';
                mike = argFoo;
                if(!(zulu === mike)) { _fun79174_ip = 75; continue _fun79174 }
 14:
                zulu = entity.subscription;
                mike = null;
                if(!(mike == zulu)) { _fun79174_ip = 56; continue _fun79174 }
 26:
                tango = entity.addListener;
                zulu = entity.handleCallback;
                mike = 'ReturnResults';
                mike = tango.bind(entity)(mike, zulu);
                entity['subscription'] = mike;
 56:
                zulu = entity.handlers;
                mike = zulu.add;
                entity = argBar;
                entity = mike.bind(zulu)(entity);
 75:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'removeEventListener';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun79175: for(var _fun79175_ip = 0; ; ) switch(_fun79175_ip) {
 0:
                mike = this;
                zulu = 'message';
                entity = argFoo;
                if(!(zulu === entity)) { _fun79175_ip = 78; continue _fun79175 }
 14:
                tango = mike.handlers;
                zulu = tango.delete;
                entity = argBar;
                entity = zulu.bind(tango)(entity);
                entity = mike.handlers;
                zulu = entity.size;
                entity = 0;
                if(!(entity === zulu)) { _fun79175_ip = 78; continue _fun79175 }
 50:
                tango = mike.subscription;
                entity = null;
                if(!(entity != tango)) { _fun79175_ip = 72; continue _fun79175 }
 62:
                zulu = tango.remove;
                zulu = zulu.bind(tango)();
 72:
                mike['subscription'] = entity;
 78:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'terminate';
        report['key'] = golf;
        oscar = function() { // Original name: value
            mike = _closure1_slot5;
            entity = mike.terminate;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        report['value'] = oscar;
        entity[3] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(report);
    report = mike.prototype;
    report = Object.create(report, {constructor: {value: mike}});
    options = report;
    mike = new options[mike](golf);
    report = mike instanceof Object ? mike : report;
    mike = argGrault;
    mike['exports'] = report;
    mike = 6;
    mike = tango[mike];
    tango = zulu.bind(entity)(mike);
    zulu = tango.fileFinishedImporting;
    mike = 'modules/autocompleter/native/UserSearch.worker.tsx';
    mike = zulu.bind(tango)(mike);
    return entity;
})();