// discord_common/js/packages/media-engine/webrtc/GetUserMediaPool.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = report[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    var _closure1_slot0 = tango;
    tango = 1;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot1 = tango;
    mike = function() {
        tango = _closure1_slot1;
        zulu = function() { // Original name: GetUserMediaPool
            tango = _closure1_slot0;
            zulu = _closure2_slot0;
            entity = undefined;
            mike = this;
            mike = tango.bind(entity)(mike, zulu);
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'acquire';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            entity = global;
            entity = entity.navigator;
            zulu = entity.mediaDevices;
            mike = zulu.getUserMedia;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(2);
        mike[0] = entity;
        entity = {};
        oscar = 'release';
        entity['key'] = oscar;
        report = function(argFoo) { // Original name: value
            mike = argFoo;
            entity = mike.getTracks;
            zulu = entity.bind(mike)();
            mike = zulu.forEach;
            entity = function(argFoo) {
                mike = argFoo;
                entity = function() {
                    entity = undefined;
                    return entity;
                };
                mike['onended'] = entity;
                entity = mike.stop;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        mike[1] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 2;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/packages/media-engine/webrtc/GetUserMediaPool.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();