// app/modules/experiments/native/NativeExperimentBridgeManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun127772: for(var _fun127772_ip = 0; ; ) switch(_fun127772_ip) {
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
            if(entity) { _fun127772_ip = 51; continue _fun127772 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun127772_ip = 92; continue _fun127772;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun127772_ip = 71; continue _fun127772 }
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
        _fun127773: for(var _fun127773_ip = 0; ; ) switch(_fun127773_ip) {
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
            _fun127773_ip = 76; continue _fun127773;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
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
    tango = 10;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        zulu = function(argFoo) { // Original name: NativeExperimentBridgeManager
            _fun127777: for(var _fun127777_ip = 0; ; ) switch(_fun127777_ip) {
 0:
                golf = this;
                romeo = 0;
                options = copyRestArgs(romeo);
                entity = _closure1_slot3;
                oscar = _closure2_slot0;
                report = undefined;
                entity = entity.bind(report)(golf, oscar);
                tango = _closure1_slot8;
                entity = new Array(0);
                romeo = entity;
                yankee = options;
                offset = 0;
                options = arraySpread(romeo, yankee, offset);
                entity = tango.bind(report)(golf, oscar, entity);
                tango = _closure1_slot0;
                oscar = _closure1_slot1;
                mike = 6;
                mike = oscar[mike];
                tango = tango.bind(report)(mike);
                mike = tango.isIOS;
                mike = mike.bind(tango)();
                if(mike) { _fun127777_ip = 102; continue _fun127777 }
 93:
                mike = function() {
                    entity = undefined;
                    return entity;
                };
                _fun127777_ip = 109; continue _fun127777;
 102:
                mike = function() {
                    _fun127778: for(var _fun127778_ip = 0; ; ) switch(_fun127778_ip) {
 0:
                        mike = _closure1_slot7;
                        report = mike.NSUserDefaultsBridge;
                        mike = null;
                        if(!(mike != report)) { _fun127778_ip = 77; continue _fun127778 }
 19:
                        tango = report.setShareJumpToAppEnabled;
                        golf = _closure1_slot0;
                        oscar = _closure1_slot1;
                        zulu = 7;
                        oscar = oscar[zulu];
                        zulu = undefined;
                        golf = golf.bind(zulu)(oscar);
                        oscar = golf.isShareJumpToAppEnabled;
                        zulu = {};
                        options = 'NativeExperimentBridgeManager';
                        zulu['location'] = options;
                        zulu = oscar.bind(golf)(zulu);
                        zulu = tango.bind(report)(zulu);
 77:
                        zulu = _closure1_slot7;
                        report = zulu.NSUserDefaultsBridge;
                        if(!(mike != report)) { _fun127778_ip = 149; continue _fun127778 }
 91:
                        tango = report.setSwiftMessageViewExperimentEnabled;
                        golf = _closure1_slot0;
                        oscar = _closure1_slot1;
                        zulu = 8;
                        oscar = oscar[zulu];
                        zulu = undefined;
                        golf = golf.bind(zulu)(oscar);
                        oscar = golf.isSwiftMessageViewExperimentEnabled;
                        zulu = {};
                        options = 'NativeExperimentBridgeManager';
                        zulu['location'] = options;
                        zulu = oscar.bind(golf)(zulu);
                        zulu = tango.bind(report)(zulu);
 149:
                        zulu = _closure1_slot7;
                        zulu = zulu.NSUserDefaultsBridge;
                        if(!(mike != zulu)) { _fun127778_ip = 221; continue _fun127778 }
 163:
                        mike = zulu.setSwiftMessageCellExperimentEnabled;
                        report = _closure1_slot0;
                        tango = _closure1_slot1;
                        entity = 9;
                        tango = tango[entity];
                        entity = undefined;
                        report = report.bind(entity)(tango);
                        tango = report.isSwiftMessageCellExperimentEnabled;
                        entity = {};
                        oscar = 'NativeExperimentBridgeManager';
                        entity['location'] = oscar;
                        entity = tango.bind(report)(entity);
                        entity = mike.bind(zulu)(entity);
 221:
                        entity = undefined;
                        return entity;
                    }
                };
 109:
                entity['handlePostConnectionOpen'] = mike;
                mike = {};
                zulu = entity.handlePostConnectionOpen;
                mike['POST_CONNECTION_OPEN'] = zulu;
                entity['actions'] = mike;
                return entity;
            }
        };
        var _closure2_slot0 = zulu;
        report = _closure1_slot6;
        mike = undefined;
        tango = argFoo;
        tango = report.bind(mike)(zulu, tango);
        entity = _closure1_slot2;
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/experiments/native/NativeExperimentBridgeManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();