// app/modules/gateway/GatewayZstdUtils.native.tsx
export default (function(_, argBar, argBaz, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.NativeModules;
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/gateway/GatewayZstdUtils.native.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: supportsZstd
        _fun106138: for(var _fun106138_ip = 0; ; ) switch(_fun106138_ip) {
 0:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 1;
            entity = tango[entity];
            tango = undefined;
            zulu = zulu.bind(tango)(entity);
            entity = zulu.isAndroid;
            entity = entity.bind(zulu)();
            if(entity) { _fun106138_ip = 76; continue _fun106138 }
 37:
            entity = _closure1_slot3;
            report = entity.DCDCompressionManager;
            entity = null;
            oscar = entity == report;
            zulu = undefined;
            if(oscar) { _fun106138_ip = 64; continue _fun106138 }
 58:
            zulu = report.supportsZstd;
 64:
            entity = entity != zulu;
            if(!entity) { _fun106138_ip = 74; continue _fun106138 }
 71:
            entity = zulu;
 74:
            _fun106138_ip = 112; continue _fun106138;
 76:
            zulu = _closure1_slot1;
            report = _closure1_slot2;
            mike = 2;
            mike = report[mike];
            zulu = zulu.bind(tango)(mike);
            mike = zulu.getConstants;
            mike = mike.bind(zulu)();
            entity = mike.supportsZstd;
 112:
            return entity;
        }
    };
    zulu['supportsZstd'] = tango;
    mike = function() { // Original name: createZstdContextWeb
        entity = global;
        zulu = entity.Error;
        entity = zulu.prototype;
        mike = Object.create(entity, {constructor: {value: zulu}});
        tango = 'Attempting to use createZstdContextWeb in a native context. Use MobileGatewayCompressionHandler instead.';
        report = mike;
        entity = new report[zulu](tango, zulu);
        entity = entity instanceof Object ? entity : mike;
        throw entity;
    };
    zulu['createZstdContextWeb'] = mike;
    return entity;
})();