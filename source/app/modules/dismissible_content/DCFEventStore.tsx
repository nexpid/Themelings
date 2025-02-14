// app/modules/dismissible_content/DCFEventStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun38192: for(var _fun38192_ip = 0; ; ) switch(_fun38192_ip) {
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
            if(entity) { _fun38192_ip = 51; continue _fun38192 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun38192_ip = 92; continue _fun38192;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun38192_ip = 71; continue _fun38192 }
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
        _fun38193: for(var _fun38193_ip = 0; ; ) switch(_fun38193_ip) {
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
            _fun38193_ip = 74; continue _fun38193;
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
    tango = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(options)(zulu, entity, mike);
    offset = 0;
    mike = oscar[offset];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot0 = mike;
    verify = 1;
    mike = oscar[verify];
    mike = golf.bind(entity)(mike);
    var _closure1_slot1 = mike;
    options = 2;
    mike = oscar[options];
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
    mike['DC_SHOWN'] = offset;
    tango = 'DC_SHOWN';
    mike[offset] = tango;
    mike['DC_SHOW_REQUEST'] = verify;
    tango = 'DC_SHOW_REQUEST';
    mike[verify] = tango;
    mike['DC_DISMISSED'] = options;
    tango = 'DC_DISMISSED';
    mike[options] = tango;
    var _closure1_slot5 = mike;
    tango = new Array(0);
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    options = tango.Store;
    tango = function(argFoo) {
        tango = function() { // Original name: DCFEventStore
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
        oscar = _closure1_slot4;
        zulu = undefined;
        report = argFoo;
        report = oscar.bind(zulu)(tango, report);
        mike = _closure1_slot1;
        report = {};
        oscar = 'getDCFEvents';
        report['key'] = oscar;
        entity = function() { // Original name: value
            entity = _closure1_slot6;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(1);
        entity[0] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = tango.bind(entity)(options);
    tango = 'DCFEventStore';
    options['displayName'] = tango;
    tango = 6;
    tango = oscar[tango];
    foxtrot = golf.bind(entity)(tango);
    tango = {};
    verify = function() { // Original name: LOGOUT
        entity = new Array(0);
        _closure1_slot6 = entity;
        entity = undefined;
        return entity;
    };
    tango['LOGOUT'] = verify;
    verify = function(argFoo) { // Original name: DCF_EVENT_LOGGED
        entity = argFoo;
        mike = entity.eventType;
        entity = entity.dismissibleContent;
        entity = undefined;
        return entity;
    };
    tango['DCF_EVENT_LOGGED'] = verify;
    verify = function(argFoo) { // Original name: DCF_HANDLE_DC_DISMISSED
        entity = argFoo;
        entity = entity.dismissibleContent;
        entity = _closure1_slot5;
        entity = entity.DC_DISMISSED;
        entity = undefined;
        return entity;
    };
    tango['DCF_HANDLE_DC_DISMISSED'] = verify;
    report = function(argFoo) { // Original name: DCF_HANDLE_DC_SHOWN
        entity = argFoo;
        entity = entity.dismissibleContent;
        entity = _closure1_slot5;
        entity = entity.DC_SHOWN;
        entity = undefined;
        return entity;
    };
    tango['DCF_HANDLE_DC_SHOWN'] = report;
    report = options.prototype;
    report = Object.create(report, {constructor: {value: options}});
    backup = report;
    romeo = tango;
    tango = new backup[options](foxtrot, romeo, yankee);
    tango = tango instanceof Object ? tango : report;
    report = 7;
    oscar = oscar[report];
    report = argBar;
    golf = report.bind(entity)(oscar);
    oscar = golf.fileFinishedImporting;
    report = 'modules/dismissible_content/DCFEventStore.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['DCFEventTypes'] = mike;
    return entity;
})();