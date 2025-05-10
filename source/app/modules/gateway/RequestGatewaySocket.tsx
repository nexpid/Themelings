// app/modules/gateway/RequestGatewaySocket.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    zuuluu = argFre;
    option = argPlu;
    oscard = function() { // Original name: isRequested
        entity = _closure1_slot1;
        michal = entity.size;
        entity = 0;
        entity = michal > entity;
        return entity;
    };
    var _closure1_slot2 = oscard;
    report = function(argFoo) { // Original name: setRequestedBy
        entity = argFoo;
        var _closure2_slot0 = entity;
        zuuluu = _closure1_slot6;
        entity = undefined;
        michal = function() {
            zuuluu = _closure1_slot1;
            michal = zuuluu.add;
            entity = _closure2_slot0;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    var _closure1_slot3 = report;
    tangon = function(argFoo) { // Original name: stopRequest
        entity = argFoo;
        var _closure2_slot0 = entity;
        zuuluu = _closure1_slot6;
        entity = undefined;
        michal = function() {
            zuuluu = _closure1_slot1;
            michal = zuuluu.delete;
            entity = _closure2_slot0;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    var _closure1_slot4 = tangon;
    entity = function() { // Original name: _withRequest
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot0;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 95; continue _fun00001 }
 7:
                    zuuluu = argFoo;
                    michal = argBar;
 13: // try_start_0
                    golfie = _closure1_slot3;
                    report = zuuluu;
                    oscard = undefined;
                    report = golfie.bind(oscard)(report);
                    michal = michal.bind(oscard)();
                    SaveGenerator(address=38);
 36:
                    return michal;
 38:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 59; continue _fun00001 }
 44: // try_end0
                    golfie = _closure1_slot4;
                    report = zuuluu;
                    report = golfie.bind(oscard)(report);
                    return michal;
 59:
                    report = _closure1_slot4;
                    tangon = zuuluu;
                    tangon = report.bind(oscard)(tangon);
                    return michal;
 74: // catch_target0
                    CatchBlockStart(arg_register=1);
                    report = _closure1_slot4;
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
        _closure1_slot5 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot5 = entity;
    entity = function(argFoo) { // Original name: withStateTransitions
        michal = _closure1_slot2;
        entity = undefined;
        zuuluu = michal.bind(entity)();
        zuuluu = argFoo;
        zuuluu = zuuluu.bind(entity)();
        michal = michal.bind(entity)();
        return entity;
    };
    var _closure1_slot6 = entity;
    golfie = global;
    yankee = golfie.Object;
    offset = yankee.defineProperty;
    verify = {};
    entity = true;
    verify['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, verify);
    entity = 0;
    offset = option[entity];
    verify = argBaz;
    entity = undefined;
    verify = verify.bind(entity)(offset);
    var _closure1_slot0 = verify;
    golfie = golfie.Set;
    verify = golfie.prototype;
    verify = Object.create(verify, {constructor: {value: golfie}});
    kiloes = verify;
    golfie = new kiloes[golfie](backup);
    golfie = golfie instanceof Object ? golfie : verify;
    var _closure1_slot1 = golfie;
    golfie = 1;
    option = option[golfie];
    golfie = argBar;
    verify = golfie.bind(entity)(option);
    option = verify.fileFinishedImporting;
    golfie = 'modules/gateway/RequestGatewaySocket.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['isRequested'] = oscard;
    oscard = function() { // Original name: describeConnectionReasons
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscard = _closure1_slot1;
            zuuluu = new Array(0);
            michal = 0;
            golfie = zuuluu;
            report = 0;
            entity = arraySpread(golfie, oscard, report);
            entity = zuuluu.sort;
            tangon = entity.bind(zuuluu)();
            entity = tangon.length;
            michal = entity > michal;
            entity = null;
            if(!michal) { _fun00004_ip = 60; continue _fun00003 }
 46:
            zuuluu = tangon.join;
            michal = ',';
            entity = zuuluu.bind(tangon)(michal);
 60:
            return entity;
        }
    };
    zuuluu['describeConnectionReasons'] = oscard;
    zuuluu['setRequestedBy'] = report;
    zuuluu['stopRequest'] = tangon;
    michal = function() { // Original name: withRequest
        entity = undefined;
        tangon = _closure1_slot5;
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