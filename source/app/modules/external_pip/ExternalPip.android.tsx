// app/modules/external_pip/ExternalPip.android.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
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
    var _closure1_slot0 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot1 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.NativeEventEmitter;
    var _closure1_slot2 = golf;
    tango = tango.NativeModules;
    var _closure1_slot3 = tango;
    tango = tango.ExternalPip;
    var _closure1_slot4 = tango;
    mike = function() {
        tango = _closure1_slot1;
        zulu = function() { // Original name: ExternalPip
            zulu = this;
            report = _closure1_slot0;
            tango = _closure2_slot0;
            entity = undefined;
            tango = report.bind(entity)(zulu, tango);
            tango = false;
            zulu['_enabled'] = tango;
            zulu['_isInPipMode'] = tango;
            report = _closure1_slot2;
            mike = _closure1_slot3;
            golf = mike.PipAndroid;
            tango = report.prototype;
            tango = Object.create(tango, {constructor: {value: report}});
            options = tango;
            mike = new options[report](golf, oscar);
            mike = mike instanceof Object ? mike : tango;
            zulu['eventEmitter'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'addOnPipModeChangedListener';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            mike = this;
            var _closure3_slot0 = mike;
            zulu = argFoo;
            var _closure3_slot1 = zulu;
            tango = mike.eventEmitter;
            zulu = tango.addListener;
            mike = 'onPipModeChanged';
            entity = function(argFoo) {
                entity = argFoo;
                zulu = entity.isInPipMode;
                mike = _closure3_slot0;
                mike['_isInPipMode'] = zulu;
                mike = _closure3_slot1;
                entity = undefined;
                mike = mike.bind(entity)(zulu);
                return entity;
            };
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(12);
        mike[0] = entity;
        entity = {};
        oscar = 'addOnPipModeWillChangeListener';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            tango = entity.eventEmitter;
            zulu = tango.addListener;
            mike = 'onPipModeWillChange';
            entity = argFoo;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'setSelectedStream';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'setFocusedStream';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'setMirrored';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'setPipAspectRatio';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            tango = _closure1_slot4;
            zulu = tango.setPipAspectRatio;
            mike = argFoo;
            entity = argBar;
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'updateSourceTrackingView';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'setEnabled';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            mike = argFoo;
            entity['_enabled'] = mike;
            zulu = _closure1_slot4;
            mike = zulu.setEnabled;
            entity = entity._enabled;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[7] = entity;
        entity = {};
        oscar = 'setActive';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            zulu = _closure1_slot4;
            mike = zulu.setActive;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[8] = entity;
        entity = {};
        oscar = 'isEnabled';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            entity = entity._enabled;
            return entity;
        };
        entity['value'] = oscar;
        mike[9] = entity;
        entity = {};
        oscar = 'isSupported';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = _closure1_slot4;
            mike = entity.isSupported;
            entity = true;
            entity = entity === mike;
            return entity;
        };
        entity['value'] = oscar;
        mike[10] = entity;
        entity = {};
        oscar = 'isInPipMode';
        entity['key'] = oscar;
        report = function() { // Original name: value
            entity = this;
            entity = entity._isInPipMode;
            return entity;
        };
        entity['value'] = report;
        mike[11] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/external_pip/ExternalPip.android.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();