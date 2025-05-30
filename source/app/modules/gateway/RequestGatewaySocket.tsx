// app/modules/gateway/RequestGatewaySocket.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    option = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = verify;
    entity = function(argFoo) { // Original name: addToken
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            zuuluu = _closure1_slot7;
            michal = zuuluu.get;
            michal = michal.bind(zuuluu)(tangon);
            zuuluu = null;
            zuuluu = zuuluu != michal;
            report = 0;
            if(!zuuluu) { _fun00002_ip = 34; continue _fun00001 }
 31:
            report = michal;
 34:
            zuuluu = _closure1_slot7;
            michal = zuuluu.set;
            entity = 1;
            entity = report + entity;
            entity = michal.bind(zuuluu)(tangon, entity);
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo) { // Original name: deleteToken
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            tangon = _closure1_slot7;
            michal = tangon.get;
            tangon = michal.bind(tangon)(zuuluu);
            michal = null;
            oscard = michal != tangon;
            michal = 0;
            report = 0;
            if(!oscard) { _fun00004_ip = 36; continue _fun00003 }
 33:
            report = tangon;
 36:
            tangon = 1;
            report = report - tangon;
            if(!(!(report <= michal))) { _fun00004_ip = 64; continue _fun00003 }
 47:
            tangon = _closure1_slot7;
            michal = tangon.set;
            michal = michal.bind(tangon)(zuuluu, report);
            _fun00004_ip = 78; continue _fun00003;
 64:
            michal = _closure1_slot7;
            entity = michal.delete;
            entity = entity.bind(michal)(zuuluu);
 78:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo) { // Original name: makeBridgeToken
        entity = global;
        entity = entity.HermesInternal;
        zuuluu = entity.concat;
        michal = 'BRIDGE:';
        entity = argFoo;
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    var _closure1_slot10 = entity;
    oscard = function() { // Original name: isRequested
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = _closure1_slot7;
            zuuluu = entity.size;
            entity = 0;
            entity = zuuluu > entity;
            if(entity) { _fun00006_ip = 25; continue _fun00005 }
 21:
            entity = _closure1_slot6;
 25:
            return entity;
        }
    };
    var _closure1_slot11 = oscard;
    report = function(argFoo) { // Original name: setRequestedBy
        entity = argFoo;
        var _closure2_slot0 = entity;
        zuuluu = _closure1_slot15;
        entity = undefined;
        michal = function() {
            zuuluu = _closure1_slot8;
            tangon = _closure2_slot0;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(tangon);
            zuuluu = _closure1_slot9;
            michal = _closure1_slot10;
            michal = michal.bind(entity)(tangon);
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    var _closure1_slot12 = report;
    tangon = function(argFoo) { // Original name: stopRequest
        entity = argFoo;
        var _closure2_slot0 = entity;
        zuuluu = _closure1_slot15;
        entity = undefined;
        michal = function() {
            zuuluu = _closure1_slot9;
            michal = _closure2_slot0;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    var _closure1_slot13 = tangon;
    entity = function() { // Original name: _withRequest
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tangon) { _fun00008_ip = 95; continue _fun00007 }
 7:
                    zuuluu = argFoo;
                    michal = argBar;
 13: // try_start_0
                    golfie = _closure1_slot12;
                    report = zuuluu;
                    oscard = undefined;
                    report = golfie.bind(oscard)(report);
                    michal = michal.bind(oscard)();
                    SaveGenerator(address=38);
 36:
                    return michal;
 38:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00008_ip = 59; continue _fun00007 }
 44: // try_end0
                    golfie = _closure1_slot13;
                    report = zuuluu;
                    report = golfie.bind(oscard)(report);
                    return michal;
 59:
                    report = _closure1_slot13;
                    tangon = zuuluu;
                    tangon = report.bind(oscard)(tangon);
                    return michal;
 74: // catch_target0
                    CatchBlockStart(arg_register=1);
                    report = _closure1_slot13;
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
        _closure1_slot14 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: withStateTransitions
        michal = _closure1_slot11;
        entity = undefined;
        zuuluu = michal.bind(entity)();
        zuuluu = false;
        _closure1_slot6 = zuuluu;
        zuuluu = argFoo;
        zuuluu = zuuluu.bind(entity)();
        michal = michal.bind(entity)();
        return entity;
    };
    var _closure1_slot15 = entity;
    golfie = global;
    backup = golfie.Object;
    foxtra = backup.defineProperty;
    yankee = {};
    offset = true;
    yankee['value'] = offset;
    entity = '__esModule';
    entity = foxtra.bind(backup)(zuuluu, entity, yankee);
    entity = 0;
    yankee = verify[entity];
    entity = undefined;
    yankee = romeon.bind(entity)(yankee);
    var _closure1_slot3 = yankee;
    yankee = 1;
    yankee = verify[yankee];
    yankee = option.bind(entity)(yankee);
    yankee = yankee.AnalyticEvents;
    var _closure1_slot4 = yankee;
    yankee = ['COLD_START'];
    var _closure1_slot5 = yankee;
    var _closure1_slot6 = offset;
    golfie = golfie.Map;
    offset = golfie.prototype;
    offset = Object.create(offset, {constructor: {value: golfie}});
    result = offset;
    golfie = new result[golfie](output);
    golfie = golfie instanceof Object ? golfie : offset;
    var _closure1_slot7 = golfie;
    golfie = 4;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/gateway/RequestGatewaySocket.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['isRequested'] = oscard;
    oscard = function() { // Original name: recordStartHeadlessTask
        entity = false;
        _closure1_slot6 = entity;
        entity = undefined;
        return entity;
    };
    zuuluu['recordStartHeadlessTask'] = oscard;
    oscard = function() { // Original name: describeConnectionReasons
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = _closure1_slot6;
            if(michal) { _fun00010_ip = 16; continue _fun00009 }
 10:
            tangon = new Array(0);
            _fun00010_ip = 20; continue _fun00009;
 16:
            tangon = _closure1_slot5;
 20:
            zuuluu = new Array(0);
            michal = 0;
            option = zuuluu;
            golfie = tangon;
            oscard = 0;
            oscard = arraySpread(option, golfie, oscard);
            report = _closure1_slot7;
            entity = report.keys;
            golfie = entity.bind(report)();
            option = zuuluu;
            entity = arraySpread(option, golfie, oscard);
            entity = zuuluu.sort;
            tangon = entity.bind(zuuluu)();
            entity = tangon.length;
            michal = entity > michal;
            entity = 'NO_REASONS';
            if(!michal) { _fun00010_ip = 100; continue _fun00009 }
 86:
            zuuluu = tangon.join;
            michal = ',';
            entity = zuuluu.bind(tangon)(michal);
 100:
            return entity;
        }
    };
    zuuluu['describeConnectionReasons'] = oscard;
    zuuluu['setRequestedBy'] = report;
    report = function(argFoo) { // Original name: startBridgeTo
        report = _closure1_slot10;
        entity = undefined;
        tangon = argFoo;
        tangon = report.bind(entity)(tangon);
        var _closure2_slot0 = tangon;
        tangon = global;
        report = tangon.performance;
        tangon = report.now;
        tangon = tangon.bind(report)();
        var _closure2_slot1 = tangon;
        report = _closure1_slot15;
        tangon = function() {
            zuuluu = _closure1_slot8;
            michal = _closure2_slot0;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        tangon = report.bind(entity)(tangon);
        tangon = _closure1_slot0;
        report = _closure1_slot2;
        zuuluu = 2;
        zuuluu = report[zuuluu];
        report = tangon.bind(entity)(zuuluu);
        tangon = report.requestSafeIdleCallback;
        zuuluu = {};
        oscard = 5000;
        zuuluu['timeout'] = oscard;
        michal = function() {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                report = _closure1_slot7;
                tangon = report.has;
                zuuluu = _closure2_slot0;
                zuuluu = tangon.bind(report)(zuuluu);
                if(!zuuluu) { _fun00012_ip = 111; continue _fun00011 }
 27:
                report = _closure1_slot1;
                tangon = _closure1_slot2;
                zuuluu = 3;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                oscard = report.bind(zuuluu)(tangon);
                report = oscard.track;
                zuuluu = _closure1_slot4;
                tangon = zuuluu.GATEWAY_BRIDGE_TIMEOUT;
                zuuluu = {};
                golfie = _closure2_slot0;
                zuuluu['bridge_token'] = golfie;
                golfie = global;
                option = golfie.performance;
                golfie = option.now;
                option = golfie.bind(option)();
                golfie = _closure2_slot1;
                golfie = option - golfie;
                zuuluu['cleared_after'] = golfie;
                zuuluu = report.bind(oscard)(tangon, zuuluu);
 111:
                zuuluu = _closure1_slot13;
                michal = _closure2_slot0;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            }
        };
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    zuuluu['startBridgeTo'] = report;
    zuuluu['stopRequest'] = tangon;
    michal = function() { // Original name: withRequest
        entity = undefined;
        tangon = _closure1_slot14;
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