// app/modules/rpc/helpers/validateTransportType.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = oscard;
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
    tangon = tangon.TransportTypes;
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.RPCErrors;
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/rpc/helpers/validateTransportType.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: validateTransportType
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            michal = _closure1_slot2;
            michal = michal.IPC;
            if(!(michal !== zuuluu)) { _fun00002_ip = 34; continue _fun00001 }
 20:
            michal = _closure1_slot2;
            michal = michal.POST_MESSAGE;
            if(!(michal === zuuluu)) { _fun00002_ip = 38; continue _fun00001 }
 34:
            michal = undefined;
            return michal;
 38:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 2;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = {};
            entity = _closure1_slot3;
            entity = entity.INVALID_COMMAND;
            zuuluu['errorCode'] = entity;
            entity = tangon.prototype;
            michal = Object.create(entity, {constructor: {value: tangon}});
            report = 'Invalid transport.';
            golfie = michal;
            oscard = zuuluu;
            entity = new golfie[tangon](oscard, report, tangon);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        }
    };
    zuuluu['validateTransportType'] = michal;
    return entity;
})();