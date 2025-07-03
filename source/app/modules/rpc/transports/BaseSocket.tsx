// app/modules/rpc/transports/BaseSocket.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.RPC_VERSION;
    var _closure1_slot4 = golfie;
    tangon = tangon.RPCCloseCodes;
    var _closure1_slot5 = tangon;
    michal = function() {
        tangon = _closure1_slot3;
        zuuluu = function(argFoo, argBar, argBaz) { // Original name: BaseSocket
            tangon = argBar;
            zuuluu = this;
            oscard = _closure1_slot2;
            report = _closure2_slot0;
            entity = undefined;
            report = oscard.bind(entity)(zuuluu, report);
            report = argFoo;
            zuuluu['transport'] = report;
            zuuluu['version'] = tangon;
            report = argBaz;
            zuuluu['encoding'] = report;
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            michal = 3;
            michal = oscard[michal];
            report = report.bind(entity)(michal);
            michal = report.uniqueId;
            michal = michal.bind(report)();
            zuuluu['id'] = michal;
            report = {'authing': false, 'scopes': null, 'accessToken': null};
            michal = new Array(0);
            report['scopes'] = michal;
            michal = global;
            option = michal.Date;
            oscard = option.prototype;
            golfie = Object.create(oscard, {constructor: {value: option}});
            offset = 0;
            yankee = golfie;
            oscard = new yankee[option](offset, verify);
            oscard = oscard instanceof Object ? oscard : golfie;
            report['expires'] = oscard;
            zuuluu['authorization'] = report;
            report = {'id': null, 'name': null, 'icon': null};
            zuuluu['application'] = report;
            michal = michal.AbortController;
            report = michal.prototype;
            report = Object.create(report, {constructor: {value: michal}});
            yankee = report;
            michal = new yankee[michal](offset);
            michal = michal instanceof Object ? michal : report;
            zuuluu['abortController'] = michal;
            michal = zuuluu.checkRpcVersion;
            michal = michal.bind(zuuluu)(tangon);
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        report = 'checkRpcVersion';
        entity['key'] = report;
        michal = function(argFoo) { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                report = argFoo;
                entity = null;
                if(!(entity != report)) { _fun00002_ip = 31; continue _fun00001 }
 9:
                entity = _closure1_slot4;
                if(!(!(report > entity))) { _fun00002_ip = 31; continue _fun00001 }
 20:
                entity = 1;
                if(!(!(report < entity))) { _fun00002_ip = 31; continue _fun00001 }
 27:
                entity = undefined;
                return entity;
 31:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot1;
                michal = 4;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = {};
                entity = _closure1_slot5;
                entity = entity.INVALID_VERSION;
                zuuluu['closeCode'] = entity;
                entity = global;
                entity = entity.HermesInternal;
                michal = entity.concat;
                entity = 'Invalid Version: ';
                oscard = michal.bind(entity)(report);
                michal = tangon.prototype;
                michal = Object.create(michal, {constructor: {value: tangon}});
                option = michal;
                golfie = zuuluu;
                entity = new option[tangon](golfie, oscard, report);
                entity = entity instanceof Object ? entity : michal;
                throw entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(1);
        michal[0] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/rpc/transports/BaseSocket.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();