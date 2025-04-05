// app/modules/activities/utils/selectAndWaitForVoiceChannelJoin.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    option = argBaz;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = report;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 70: // try_end0
            _fun00002_ip = 74; continue _fun00001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot10 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _selectAndWaitForVoiceChannelJoin
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot2;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=6);
                    if(golfie) { _fun00004_ip = 172; continue _fun00003 }
 15:
                    option = michal.channelId;
                    oscard = option;
                    var _closure4_slot0 = option;
                    michal = michal.timeoutMs;
                    verify = undefined;
                    if(!(michal === verify)) { _fun00004_ip = 45; continue _fun00003 }
 39:
                    michal = 10000;
 45:
                    var _closure4_slot1 = michal;
                    report = undefined;
                    SaveGenerator(address=55);
 53:
                    return verify;
 55:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(golfie) { _fun00004_ip = 169; continue _fun00003 }
 61:
                    golfie = global;
                    option = golfie.Promise;
                    golfie = option.prototype;
                    golfie = Object.create(golfie, {constructor: {value: option}});
                    yankee = function(argFoo, argBar) {
                        entity = argFoo;
                        var _closure5_slot0 = entity;
                        entity = argBar;
                        var _closure5_slot1 = entity;
                        entity = global;
                        report = entity.setTimeout;
                        tangon = _closure4_slot1;
                        entity = undefined;
                        zuuluu = function() {
                            zuuluu = _closure5_slot1;
                            tangon = _closure1_slot9;
                            entity = tangon.prototype;
                            michal = Object.create(entity, {constructor: {value: tangon}});
                            report = 'Joining voice channel has timed out.';
                            oscard = michal;
                            entity = new oscard[tangon](report, tangon);
                            michal = entity instanceof Object ? entity : michal;
                            entity = undefined;
                            michal = zuuluu.bind(entity)(michal);
                            return entity;
                        };
                        zuuluu = report.bind(entity)(zuuluu, tangon);
                        var _closure5_slot2 = zuuluu;
                        tangon = _closure1_slot8;
                        zuuluu = tangon.addConditionalChangeListener;
                        michal = function() {
                            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                                michal = _closure1_slot8;
                                entity = michal.getVoiceChannelId;
                                michal = entity.bind(michal)();
                                entity = _closure4_slot0;
                                entity = michal !== entity;
                                if(entity) { _fun00006_ip = 63; continue _fun00005 }
 31:
                                michal = global;
                                report = michal.clearTimeout;
                                tangon = _closure5_slot2;
                                zuuluu = undefined;
                                tangon = report.bind(zuuluu)(tangon);
                                michal = _closure5_slot0;
                                michal = michal.bind(zuuluu)();
                                entity = false;
 63:
                                return entity;
                            }
                        };
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    romeon = golfie;
                    tangon = new romeon[option](yankee, offset);
                    report = tangon instanceof Object ? tangon : golfie;
                    option = _closure1_slot0;
                    offset = _closure1_slot1;
                    golfie = 8;
                    golfie = offset[golfie];
                    option = option.bind(verify)(golfie);
                    golfie = option.selectVoiceChannel;
                    oscard = golfie.bind(option)(oscard);
 128: // try_start_0
                    SaveGenerator(address=132);
 130:
                    return report;
 132:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(oscard) { _fun00004_ip = 143; continue _fun00003 }
 138: // try_end0
                    oscard = true;
                    return oscard;
 143:
                    return report;
 146: // catch_target0
                    CatchBlockStart(arg_register=4);
                    zuuluu = report;
                    tangon = _closure1_slot9;
                    tangon = report instanceof tangon;
                    if(tangon) { _fun00004_ip = 164; continue _fun00003 }
 162:
                    throw zuuluu;
 164:
                    zuuluu = false;
                    return zuuluu;
 169:
                    return michal;
 172:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot11 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot11 = entity;
    tangon = global;
    verify = tangon.Object;
    golfie = verify.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, oscard);
    entity = 0;
    oscard = report[entity];
    entity = undefined;
    oscard = option.bind(entity)(oscard);
    var _closure1_slot2 = oscard;
    oscard = 1;
    oscard = report[oscard];
    oscard = option.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 2;
    oscard = report[oscard];
    oscard = option.bind(entity)(oscard);
    var _closure1_slot4 = oscard;
    oscard = 3;
    oscard = report[oscard];
    oscard = option.bind(entity)(oscard);
    var _closure1_slot5 = oscard;
    oscard = 4;
    oscard = report[oscard];
    oscard = option.bind(entity)(oscard);
    var _closure1_slot6 = oscard;
    oscard = 5;
    oscard = report[oscard];
    oscard = option.bind(entity)(oscard);
    var _closure1_slot7 = oscard;
    oscard = 6;
    oscard = report[oscard];
    oscard = option.bind(entity)(oscard);
    golfie = 7;
    golfie = report[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot8 = golfie;
    tangon = tangon.Error;
    oscard = oscard.bind(entity)(tangon);
    tangon = function(argFoo) {
        zuuluu = function() { // Original name: JoinTimeoutError
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot4;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot6;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot5;
                entity = _closure1_slot10;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00008_ip = 69; continue _fun00007 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00008_ip = 105; continue _fun00007;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot6;
                oscard = oscard.bind(zuuluu)(tangon);
                oscard = oscard.constructor;
                report = arguments;
                entity = golfie.bind(option)(verify, report, oscard);
 105:
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        report = _closure1_slot7;
        michal = undefined;
        tangon = argFoo;
        tangon = report.bind(michal)(zuuluu, tangon);
        entity = _closure1_slot3;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    tangon = tangon.bind(entity)(oscard);
    var _closure1_slot9 = tangon;
    tangon = 9;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/utils/selectAndWaitForVoiceChannelJoin.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: selectAndWaitForVoiceChannelJoin
        entity = undefined;
        tangon = _closure1_slot11;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();