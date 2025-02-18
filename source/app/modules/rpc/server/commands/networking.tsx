// app/modules/rpc/server/commands/networking.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    golfie = entity.Object;
    tangon = golfie.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(golfie)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = report.bind(entity)(michal);
    verify = michal.RPC_LOCAL_SCOPE;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    tangon = michal.Endpoints;
    var _closure1_slot3 = tangon;
    tangon = michal.AnalyticEvents;
    var _closure1_slot4 = tangon;
    tangon = michal.RPCCommands;
    michal = {};
    offset = tangon.GET_NETWORKING_CONFIG;
    golfie = {};
    golfie['scope'] = verify;
    yankee = function() { // Original name: handler
        romeon = global;
        tangon = romeon.Promise;
        zuuluu = tangon.all;
        golfie = _closure1_slot0;
        verify = _closure1_slot2;
        report = 2;
        michal = verify[report];
        oscard = undefined;
        michal = golfie.bind(oscard)(michal);
        yankee = michal.HTTP;
        offset = yankee.get;
        michal = {'url': null, 'retries': 3, 'rejectWithError': false};
        foxtra = romeon.location;
        foxtra = foxtra.protocol;
        romeon = romeon.window;
        romeon = romeon.GLOBAL_ENV;
        romeon = romeon.NETWORKING_ENDPOINT;
        romeon = foxtra + romeon;
        michal['url'] = romeon;
        yankee = offset.bind(yankee)(michal);
        offset = yankee.then;
        michal = function(argFoo) {
            entity = argFoo;
            entity = entity.body;
            entity = entity.address;
            return entity;
        };
        offset = offset.bind(yankee)(michal);
        michal = new Array(2);
        michal[0] = offset;
        report = verify[report];
        report = golfie.bind(oscard)(report);
        golfie = report.HTTP;
        oscard = golfie.post;
        report = {'url': null, 'retries': 3, 'oldFormErrors': true, 'rejectWithError': false};
        option = _closure1_slot3;
        option = option.NETWORKING_TOKEN;
        report['url'] = option;
        golfie = oscard.bind(golfie)(report);
        oscard = golfie.then;
        report = function(argFoo) {
            entity = argFoo;
            entity = entity.body;
            entity = entity.token;
            return entity;
        };
        report = oscard.bind(golfie)(report);
        michal[1] = report;
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = zuuluu.then;
        entity = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                report = argFoo;
                entity = report[Symbol.iterator];
                report = entity().next;
                michal = report().value;
                zuuluu = entity;
                golfie = undefined;
                tangon = zuuluu === golfie;
                zuuluu = undefined;
                if(tangon) { _fun00002_ip = 27; continue _fun00001 }
 24:
                zuuluu = michal;
 27:
                michal = undefined;
                if(tangon) { _fun00002_ip = 57; continue _fun00001 }
 32:
                oscard = report().value;
                report = entity;
                report = report === golfie;
                michal = undefined;
                tangon = report;
                if(report) { _fun00002_ip = 57; continue _fun00001 }
 51:
                michal = oscard;
                tangon = report;
 57:
                if(tangon) { _fun00002_ip = 63; continue _fun00001 }
 60:
                entity.return();
 63:
                entity = {};
                entity['address'] = zuuluu;
                entity['token'] = michal;
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    golfie['handler'] = yankee;
    michal[offset] = golfie;
    offset = tangon.NETWORKING_SYSTEM_METRICS;
    golfie = {};
    golfie['scope'] = verify;
    yankee = function(argFoo) { // Original name: handler
        michal = argFoo;
        entity = michal.socket;
        report = michal.args;
        entity = entity.application;
        entity = entity.id;
        report['application_id'] = entity;
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 3;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.track;
        michal = _closure1_slot4;
        michal = michal.NETWORKING_SYSTEM_METRICS;
        michal = zuuluu.bind(tangon)(michal, report);
        return entity;
    };
    golfie['handler'] = yankee;
    michal[offset] = golfie;
    offset = tangon.NETWORKING_PEER_METRICS;
    golfie = {};
    golfie['scope'] = verify;
    yankee = function(argFoo) { // Original name: handler
        michal = argFoo;
        entity = michal.socket;
        report = michal.args;
        entity = entity.application;
        entity = entity.id;
        report['application_id'] = entity;
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 3;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.track;
        michal = _closure1_slot4;
        michal = michal.NETWORKING_PEER_METRICS;
        michal = zuuluu.bind(tangon)(michal, report);
        return entity;
    };
    golfie['handler'] = yankee;
    michal[offset] = golfie;
    golfie = tangon.NETWORKING_CREATE_TOKEN;
    tangon = {};
    tangon['scope'] = verify;
    option = function() { // Original name: handler
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.post;
        entity = {'url': null, 'retries': 1, 'oldFormErrors': true, 'rejectWithError': false};
        tangon = _closure1_slot3;
        tangon = tangon.NETWORKING_TOKEN;
        entity['url'] = tangon;
        zuuluu = michal.bind(zuuluu)(entity);
        michal = zuuluu.then;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.body;
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon['handler'] = option;
    michal[golfie] = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/rpc/server/commands/networking.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();