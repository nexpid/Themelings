// app/stores/ChangeVanityURLModalStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun126458: for(var _fun126458_ip = 0; ; ) switch(_fun126458_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot12;
            entity = entity.bind(zulu)();
            if(entity) { _fun126458_ip = 51; continue _fun126458 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun126458_ip = 92; continue _fun126458;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun126458_ip = 71; continue _fun126458 }
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
    var _closure1_slot11 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun126459: for(var _fun126459_ip = 0; ; ) switch(_fun126459_ip) {
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
            _fun126459_ip = 76; continue _fun126459;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot12 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot12 = entity;
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
    mike = 5;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.FormStates;
    var _closure1_slot5 = mike;
    options = {};
    var _closure1_slot8 = options;
    mike = mike.CLOSED;
    var _closure1_slot9 = mike;
    mike = null;
    var _closure1_slot10 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: ChangeVanityURLModalStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot0;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot11;
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
        entity = 'isOpen';
        report['key'] = entity;
        entity = function() { // Original name: value
            mike = _closure1_slot9;
            entity = _closure1_slot5;
            entity = entity.CLOSED;
            entity = mike !== entity;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golf = 'getProps';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = {};
            tango = _closure1_slot9;
            zulu = _closure1_slot5;
            zulu = zulu.SUBMITTING;
            zulu = tango === zulu;
            entity['submitting'] = zulu;
            zulu = _closure1_slot10;
            entity['errorDetails'] = zulu;
            zulu = _closure1_slot8;
            entity['errors'] = zulu;
            zulu = _closure1_slot6;
            entity['guildId'] = zulu;
            mike = _closure1_slot7;
            entity['code'] = mike;
            return entity;
        };
        report['value'] = oscar;
        entity[1] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'ChangeVanityURLModalStore';
    options['displayName'] = mike;
    mike = 7;
    mike = oscar[mike];
    romeo = golf.bind(entity)(mike);
    mike = {};
    verify = function(argFoo) { // Original name: handleOpen
        entity = argFoo;
        zulu = _closure1_slot5;
        zulu = zulu.OPEN;
        _closure1_slot9 = zulu;
        zulu = entity.guildId;
        var _closure1_slot6 = zulu;
        entity = entity.code;
        var _closure1_slot7 = entity;
        entity = null;
        _closure1_slot10 = entity;
        entity = undefined;
        return entity;
    };
    mike['CHANGE_VANITY_URL_MODAL_OPEN'] = verify;
    verify = function() { // Original name: handleSubmit
        entity = _closure1_slot5;
        entity = entity.SUBMITTING;
        _closure1_slot9 = entity;
        entity = undefined;
        return entity;
    };
    mike['CHANGE_VANITY_URL_MODAL_SUBMIT'] = verify;
    verify = function(argFoo) { // Original name: handleSubmitFailure
        entity = _closure1_slot5;
        entity = entity.OPEN;
        _closure1_slot9 = entity;
        entity = argFoo;
        entity = entity.error;
        _closure1_slot10 = entity;
        entity = undefined;
        return entity;
    };
    mike['CHANGE_VANITY_URL_MODAL_SUBMIT_FAILURE'] = verify;
    tango = function() { // Original name: handleClose
        entity = _closure1_slot5;
        entity = entity.CLOSED;
        _closure1_slot9 = entity;
        entity = null;
        _closure1_slot6 = entity;
        _closure1_slot7 = entity;
        _closure1_slot10 = entity;
        entity = undefined;
        return entity;
    };
    mike['CHANGE_VANITY_URL_MODAL_CLOSE'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    foxtrot = tango;
    yankee = mike;
    mike = new foxtrot[options](romeo, yankee, offset);
    mike = mike instanceof Object ? mike : tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'stores/ChangeVanityURLModalStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();