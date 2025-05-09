// app/modules/app_database/app/TryLoad.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    entity = function() { // Original name: _tryLoadAsync
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot2;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 66; continue _fun00001 }
 7:
                    michal = argFoo;
 10: // try_start_0
                    zuuluu = michal;
                    michal = undefined;
                    michal = zuuluu.bind(michal)();
                    SaveGenerator(address=23);
 21:
                    return michal;
 23:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 32; continue _fun00001 }
 29: // try_end0
                    return michal;
 32:
                    return michal;
 35: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tangon = _closure1_slot3;
                    zuuluu = tangon.log;
                    michal = 'database load failed.';
                    michal = zuuluu.bind(tangon)(michal, report);
                    michal = null;
                    return michal;
 66:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot4 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot4 = entity;
    entity = function() { // Original name: _tryLoadOrResetCacheGatewayAsync
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot2;
        zuuluu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 233; continue _fun00003 }
 10:
                    option = argFoo;
                    michal = argBar;
                    yankee = argBaz;
 19: // try_start_0
                    zuuluu = michal;
                    michal = undefined;
                    michal = zuuluu.bind(michal)();
                    SaveGenerator(address=32);
 30:
                    return michal;
 32:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 41; continue _fun00003 }
 38: // try_end0
                    return michal;
 41:
                    return michal;
 44: // catch_target0
                    CatchBlockStart(arg_register=1);
                    verify = _closure1_slot3;
                    oscard = verify.log;
                    romeon = option;
                    golfie = global;
                    tangon = golfie.HermesInternal;
                    offset = tangon.concat;
                    report = '';
                    tangon = ': exception thrown, resetting socket.';
                    report = offset.bind(report)(romeon, tangon);
                    tangon = michal.stack;
                    tangon = oscard.bind(verify)(report, michal, tangon);
                    report = _closure1_slot0;
                    tangon = _closure1_slot1;
                    zuuluu = 2;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    report = report.bind(zuuluu)(tangon);
                    tangon = report.dispatch;
                    zuuluu = {};
                    oscard = 'RESET_SOCKET';
                    zuuluu['type'] = oscard;
                    oscard = {};
                    oscard['error'] = michal;
                    michal = golfie.HermesInternal;
                    michal = michal.concat;
                    offset = 'tryLoadOrResetCacheGatewayAsync (';
                    verify = ')';
                    michal = michal.bind(offset)(romeon, verify);
                    oscard['action'] = michal;
                    romeon = yankee;
                    michal = null;
                    if(!(michal == romeon)) { _fun00004_ip = 188; continue _fun00003 }
 186:
                    _fun00004_ip = 191; continue _fun00003;
 188:
                    option = yankee;
 191:
                    golfie = golfie.HermesInternal;
                    golfie = golfie.concat;
                    golfie = golfie.bind(offset)(option, verify);
                    oscard['metricAction'] = golfie;
                    golfie = true;
                    oscard['clearCache'] = golfie;
                    zuuluu['args'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    return michal;
 233:
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
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = report[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = report[tangon];
    golfie = oscard.bind(entity)(tangon);
    tangon = golfie.prototype;
    oscard = Object.create(tangon, {constructor: {value: golfie}});
    yankee = 'TryLoad';
    romeon = oscard;
    tangon = new romeon[golfie](yankee, offset);
    tangon = tangon instanceof Object ? tangon : oscard;
    var _closure1_slot3 = tangon;
    tangon = 3;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_database/app/TryLoad.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: tryLoad
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
 3: // try_start_0
            michal = entity;
            entity = undefined;
            entity = michal.bind(entity)();
 12: // try_end0
            return entity;
 14: // catch_target0
            CatchBlockStart(arg_register=3);
            zuuluu = _closure1_slot3;
            michal = zuuluu.log;
            entity = 'database load failed.';
            entity = michal.bind(zuuluu)(entity, tangon);
            entity = null;
            return entity;
        }
    };
    zuuluu['tryLoad'] = tangon;
    tangon = function() { // Original name: tryLoadAsync
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['tryLoadAsync'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: tryLoadOrResetCacheGateway
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            golfie = argFoo;
            entity = argBar;
            offset = argBaz;
 9: // try_start_0
            michal = entity;
            entity = undefined;
            entity = michal.bind(entity)();
 18: // try_end0
            return entity;
 20: // catch_target0
            CatchBlockStart(arg_register=0);
            option = _closure1_slot3;
            report = option.log;
            yankee = golfie;
            oscard = global;
            zuuluu = oscard.HermesInternal;
            verify = zuuluu.concat;
            tangon = '';
            zuuluu = ': exception thrown, resetting socket.';
            tangon = verify.bind(tangon)(yankee, zuuluu);
            zuuluu = entity.stack;
            zuuluu = report.bind(option)(tangon, entity, zuuluu);
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 2;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.dispatch;
            michal = {};
            report = 'RESET_SOCKET';
            michal['type'] = report;
            report = {};
            report['error'] = entity;
            entity = oscard.HermesInternal;
            entity = entity.concat;
            verify = 'tryLoadOrResetCacheGateway (';
            option = ')';
            entity = entity.bind(verify)(yankee, option);
            report['action'] = entity;
            yankee = offset;
            entity = null;
            if(!(entity == yankee)) { _fun00008_ip = 164; continue _fun00007 }
 162:
            _fun00008_ip = 167; continue _fun00007;
 164:
            golfie = offset;
 167:
            oscard = oscard.HermesInternal;
            oscard = oscard.concat;
            oscard = oscard.bind(verify)(golfie, option);
            report['metricAction'] = oscard;
            oscard = true;
            report['clearCache'] = oscard;
            michal['args'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    zuuluu['tryLoadOrResetCacheGateway'] = tangon;
    michal = function() { // Original name: tryLoadOrResetCacheGatewayAsync
        entity = undefined;
        tangon = _closure1_slot5;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['tryLoadOrResetCacheGatewayAsync'] = michal;
    return entity;
})();