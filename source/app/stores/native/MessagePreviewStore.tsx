// app/stores/native/MessagePreviewStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot11;
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
            report = _closure1_slot6;
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
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = null;
    var _closure1_slot8 = mike;
    var _closure1_slot9 = mike;
    mike = 7;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: MessagePreviewStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot3;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot10;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'messages';
        report['key'] = entity;
        entity = function() { // Original name: get
            entity = _closure1_slot8;
            return entity;
        };
        report['get'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golf = 'jumpTargetId';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot9;
            return entity;
        };
        report['get'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getMessage';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            mike = argFoo;
            var _closure3_slot0 = mike;
            report = _closure1_slot1;
            tango = _closure1_slot2;
            zulu = 6;
            tango = tango[zulu];
            zulu = undefined;
            tango = report.bind(zulu)(tango);
            zulu = tango.find;
            mike = _closure1_slot8;
            entity = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = argFoo;
                    tango = entity.id;
                    zulu = entity.nonce;
                    entity = _closure3_slot0;
                    entity = tango === entity;
                    if(entity) { _fun00006_ip = 36; continue _fun00005 }
 28:
                    mike = _closure3_slot0;
                    entity = zulu === mike;
 36:
                    return entity;
                }
            };
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        report['value'] = oscar;
        entity[2] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'MessagePreviewStore';
    options['displayName'] = mike;
    mike = 8;
    mike = oscar[mike];
    romeo = golf.bind(entity)(mike);
    mike = {};
    verify = function(argFoo) { // Original name: handleLoadMessagesAroundSuccess
        entity = argFoo;
        mike = entity.around;
        report = entity.messages;
        zulu = new Array(0);
        _closure1_slot8 = zulu;
        tango = report.forEach;
        zulu = function(argFoo) {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zulu = _closure1_slot8;
                mike = null;
                if(!(mike != zulu)) { _fun00008_ip = 64; continue _fun00007 }
 13:
                zulu = _closure1_slot8;
                mike = zulu.unshift;
                report = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 5;
                tango = tango[entity];
                entity = undefined;
                report = report.bind(entity)(tango);
                tango = report.createMessageRecord;
                entity = argFoo;
                entity = tango.bind(report)(entity);
                entity = mike.bind(zulu)(entity);
 64:
                entity = undefined;
                return entity;
            }
        };
        zulu = tango.bind(report)(zulu);
        _closure1_slot9 = mike;
        entity = undefined;
        return entity;
    };
    mike['LOAD_MESSAGES_AROUND_SUCCESS'] = verify;
    tango = function() { // Original name: handleClearMessagesAround
        entity = null;
        _closure1_slot8 = entity;
        _closure1_slot9 = entity;
        entity = undefined;
        return entity;
    };
    mike['CLEAR_MESSAGES_AROUND_SUCCESS'] = tango;
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
    tango = 'stores/native/MessagePreviewStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();