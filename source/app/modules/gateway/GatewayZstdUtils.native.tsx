// app/modules/gateway/GatewayZstdUtils.native.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.NativeModules;
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/gateway/GatewayZstdUtils.native.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: supportsZstd
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 1;
            entity = tangon[entity];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = zuuluu.isAndroid;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 76; continue _fun00001 }
 37:
            entity = _closure1_slot3;
            report = entity.DCDCompressionManager;
            entity = null;
            oscard = entity == report;
            zuuluu = undefined;
            if(oscard) { _fun00002_ip = 64; continue _fun00001 }
 58:
            zuuluu = report.supportsZstd;
 64:
            entity = entity != zuuluu;
            if(!entity) { _fun00002_ip = 74; continue _fun00001 }
 71:
            entity = zuuluu;
 74:
            _fun00002_ip = 112; continue _fun00001;
 76:
            zuuluu = _closure1_slot1;
            report = _closure1_slot2;
            michal = 2;
            michal = report[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.getConstants;
            michal = michal.bind(zuuluu)();
            entity = michal.supportsZstd;
 112:
            return entity;
        }
    };
    zuuluu['supportsZstd'] = tangon;
    michal = function() { // Original name: createZstdContextWeb
        entity = global;
        zuuluu = entity.Error;
        entity = zuuluu.prototype;
        michal = Object.create(entity, {constructor: {value: zuuluu}});
        tangon = 'Attempting to use createZstdContextWeb in a native context. Use MobileGatewayCompressionHandler instead.';
        report = michal;
        entity = new report[zuuluu](tangon, zuuluu);
        entity = entity instanceof Object ? entity : michal;
        throw entity;
    };
    zuuluu['createZstdContextWeb'] = michal;
    return entity;
})();