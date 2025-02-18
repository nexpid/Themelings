// app/modules/rpc/server/commands/logs.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    tangon = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = report.bind(entity)(michal);
    tangon = michal.RPCCommands;
    verify = michal.RPC_APPLICATION_LOGGING_CATEGORY;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    golfie = michal.prototype;
    golfie = Object.create(golfie, {constructor: {value: michal}});
    foxtra = golfie;
    romeon = verify;
    michal = new foxtra[michal](romeon, yankee);
    michal = michal instanceof Object ? michal : golfie;
    var _closure1_slot3 = michal;
    michal = {};
    golfie = tangon.CAPTURE_LOG;
    tangon = {};
    verify = function(argFoo) { // Original name: validation
        report = argFoo;
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        entity = michal[entity];
        michal = undefined;
        entity = zuuluu.bind(michal)(entity);
        michal = entity.bind(michal)(report);
        entity = michal.required;
        zuuluu = entity.bind(michal)();
        michal = zuuluu.keys;
        entity = {};
        tangon = report.string;
        golfie = tangon.bind(report)();
        oscard = golfie.max;
        tangon = 10;
        oscard = oscard.bind(golfie)(tangon);
        tangon = oscard.required;
        tangon = tangon.bind(oscard)();
        entity['level'] = tangon;
        tangon = report.string;
        oscard = tangon.bind(report)();
        report = oscard.max;
        tangon = 1000;
        report = report.bind(oscard)(tangon);
        tangon = report.required;
        tangon = tangon.bind(report)();
        entity['message'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon['validation'] = verify;
    option = function(argFoo) { // Original name: handler
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.socket;
            entity = entity.args;
            report = entity.level;
            option = entity.message;
            oscard = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 3;
            tangon = tangon[entity];
            entity = undefined;
            golfie = oscard.bind(entity)(tangon);
            oscard = golfie.validatePostMessageTransport;
            tangon = zuuluu.transport;
            tangon = oscard.bind(golfie)(tangon);
            zuuluu = zuuluu.application;
            golfie = zuuluu.id;
            zuuluu = global;
            zuuluu = zuuluu.HermesInternal;
            oscard = zuuluu.concat;
            tangon = '';
            zuuluu = ' - ';
            tangon = oscard.bind(tangon)(golfie, zuuluu, option);
            zuuluu = 'log';
            if(!(zuuluu !== report)) { _fun00002_ip = 214; continue _fun00001 }
 116:
            zuuluu = 'warn';
            if(!(zuuluu !== report)) { _fun00002_ip = 198; continue _fun00001 }
 124:
            zuuluu = 'debug';
            if(!(zuuluu !== report)) { _fun00002_ip = 181; continue _fun00001 }
 132:
            zuuluu = 'info';
            if(!(zuuluu !== report)) { _fun00002_ip = 164; continue _fun00001 }
 140:
            zuuluu = 'error';
            if(!(zuuluu === report)) { _fun00002_ip = 229; continue _fun00001 }
 148:
            report = _closure1_slot3;
            zuuluu = report.error;
            zuuluu = zuuluu.bind(report)(tangon);
            _fun00002_ip = 229; continue _fun00001;
 164:
            report = _closure1_slot3;
            zuuluu = report.info;
            zuuluu = zuuluu.bind(report)(tangon);
            _fun00002_ip = 229; continue _fun00001;
 181:
            report = _closure1_slot3;
            zuuluu = report.verbose;
            zuuluu = zuuluu.bind(report)(tangon);
            _fun00002_ip = 229; continue _fun00001;
 198:
            report = _closure1_slot3;
            zuuluu = report.warn;
            zuuluu = zuuluu.bind(report)(tangon);
            _fun00002_ip = 229; continue _fun00001;
 214:
            zuuluu = _closure1_slot3;
            michal = zuuluu.log;
            michal = michal.bind(zuuluu)(tangon);
 229:
            return entity;
        }
    };
    tangon['handler'] = option;
    michal[golfie] = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/rpc/server/commands/logs.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();