// app/modules/gateway/RequestGatewaySocket.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    zuuluu = argFre;
    option = argPlu;
    oscard = function() { // Original name: isRequested
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = _closure1_slot3;
            zuuluu = entity.size;
            entity = 0;
            entity = zuuluu > entity;
            if(entity) { _fun00002_ip = 25; continue _fun00001 }
 21:
            entity = _closure1_slot2;
 25:
            return entity;
        }
    };
    var _closure1_slot4 = oscard;
    report = function(argFoo) { // Original name: setRequestedBy
        entity = argFoo;
        var _closure2_slot0 = entity;
        zuuluu = _closure1_slot8;
        entity = undefined;
        michal = function() {
            zuuluu = _closure1_slot3;
            michal = zuuluu.add;
            entity = _closure2_slot0;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    var _closure1_slot5 = report;
    tangon = function(argFoo) { // Original name: stopRequest
        entity = argFoo;
        var _closure2_slot0 = entity;
        zuuluu = _closure1_slot8;
        entity = undefined;
        michal = function() {
            zuuluu = _closure1_slot3;
            michal = zuuluu.delete;
            entity = _closure2_slot0;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    var _closure1_slot6 = tangon;
    entity = function() { // Original name: _withRequest
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot0;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tangon) { _fun00004_ip = 95; continue _fun00003 }
 7:
                    zuuluu = argFoo;
                    michal = argBar;
 13: // try_start_0
                    golfie = _closure1_slot5;
                    report = zuuluu;
                    oscard = undefined;
                    report = golfie.bind(oscard)(report);
                    michal = michal.bind(oscard)();
                    SaveGenerator(address=38);
 36:
                    return michal;
 38:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00004_ip = 59; continue _fun00003 }
 44: // try_end0
                    golfie = _closure1_slot6;
                    report = zuuluu;
                    report = golfie.bind(oscard)(report);
                    return michal;
 59:
                    report = _closure1_slot6;
                    tangon = zuuluu;
                    tangon = report.bind(oscard)(tangon);
                    return michal;
 74: // catch_target0
                    CatchBlockStart(arg_register=1);
                    report = _closure1_slot6;
                    tangon = zuuluu;
                    zuuluu = undefined;
                    zuuluu = report.bind(zuuluu)(tangon);
                    throw michal;
 95:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot7 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo) { // Original name: withStateTransitions
        michal = _closure1_slot4;
        entity = undefined;
        zuuluu = michal.bind(entity)();
        zuuluu = false;
        _closure1_slot2 = zuuluu;
        zuuluu = argFoo;
        zuuluu = zuuluu.bind(entity)();
        michal = michal.bind(entity)();
        return entity;
    };
    var _closure1_slot8 = entity;
    golfie = global;
    romeon = golfie.Object;
    yankee = romeon.defineProperty;
    offset = {};
    verify = true;
    offset['value'] = verify;
    entity = '__esModule';
    entity = yankee.bind(romeon)(zuuluu, entity, offset);
    entity = 0;
    yankee = option[entity];
    offset = argBaz;
    entity = undefined;
    offset = offset.bind(entity)(yankee);
    var _closure1_slot0 = offset;
    offset = ['coldStart'];
    var _closure1_slot1 = offset;
    var _closure1_slot2 = verify;
    golfie = golfie.Set;
    verify = golfie.prototype;
    verify = Object.create(verify, {constructor: {value: golfie}});
    sizing = verify;
    golfie = new sizing[golfie](kiloes);
    golfie = golfie instanceof Object ? golfie : verify;
    var _closure1_slot3 = golfie;
    golfie = 1;
    option = option[golfie];
    golfie = argBar;
    verify = golfie.bind(entity)(option);
    option = verify.fileFinishedImporting;
    golfie = 'modules/gateway/RequestGatewaySocket.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['isRequested'] = oscard;
    oscard = function() { // Original name: describeConnectionReasons
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = _closure1_slot2;
            if(michal) { _fun00006_ip = 16; continue _fun00005 }
 10:
            tangon = new Array(0);
            _fun00006_ip = 20; continue _fun00005;
 16:
            tangon = _closure1_slot1;
 20:
            zuuluu = new Array(0);
            michal = 0;
            golfie = zuuluu;
            oscard = tangon;
            report = 0;
            report = arraySpread(golfie, oscard, report);
            oscard = _closure1_slot3;
            golfie = zuuluu;
            entity = arraySpread(golfie, oscard, report);
            entity = zuuluu.sort;
            tangon = entity.bind(zuuluu)();
            entity = tangon.length;
            michal = entity > michal;
            entity = '';
            if(!michal) { _fun00006_ip = 89; continue _fun00005 }
 75:
            zuuluu = tangon.join;
            michal = ',';
            entity = zuuluu.bind(tangon)(michal);
 89:
            return entity;
        }
    };
    zuuluu['describeConnectionReasons'] = oscard;
    zuuluu['setRequestedBy'] = report;
    zuuluu['stopRequest'] = tangon;
    michal = function() { // Original name: withRequest
        entity = undefined;
        tangon = _closure1_slot7;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['withRequest'] = michal;
    return entity;
})();