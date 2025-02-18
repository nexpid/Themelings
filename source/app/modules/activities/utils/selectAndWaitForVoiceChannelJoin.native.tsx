// app/modules/activities/utils/selectAndWaitForVoiceChannelJoin.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    option = argBaz;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = report;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot6;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot5;
            entity = _closure1_slot12;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot12 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function() { // Original name: _selectAndWaitForVoiceChannelJoin
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot2;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=6);
                    if(golfie) { _fun00006_ip = 173; continue _fun00005 }
 15:
                    option = michal.channelId;
                    oscard = option;
                    var _closure4_slot0 = option;
                    michal = michal.timeoutMs;
                    verify = undefined;
                    if(!(michal === verify)) { _fun00006_ip = 46; continue _fun00005 }
 39:
                    michal = _closure1_slot9;
 46:
                    var _closure4_slot1 = michal;
                    report = undefined;
                    SaveGenerator(address=56);
 54:
                    return verify;
 56:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(golfie) { _fun00006_ip = 170; continue _fun00005 }
 62:
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
                            tangon = _closure1_slot10;
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
                            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                                michal = _closure1_slot8;
                                entity = michal.getVoiceChannelId;
                                michal = entity.bind(michal)();
                                entity = _closure4_slot0;
                                entity = michal !== entity;
                                if(entity) { _fun00008_ip = 63; continue _fun00007 }
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
 129: // try_start_0
                    SaveGenerator(address=133);
 131:
                    return report;
 133:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(oscard) { _fun00006_ip = 144; continue _fun00005 }
 139: // try_end0
                    oscard = true;
                    return oscard;
 144:
                    return report;
 147: // catch_target0
                    CatchBlockStart(arg_register=4);
                    zuuluu = report;
                    tangon = _closure1_slot10;
                    tangon = report instanceof tangon;
                    if(tangon) { _fun00006_ip = 165; continue _fun00005 }
 163:
                    throw zuuluu;
 165:
                    zuuluu = false;
                    return zuuluu;
 170:
                    return michal;
 173:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot13 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot13 = entity;
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
    golfie = 10000;
    var _closure1_slot9 = golfie;
    tangon = tangon.Error;
    oscard = oscard.bind(entity)(tangon);
    tangon = function(argFoo) {
        zuuluu = function() { // Original name: JoinTimeoutError
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot4;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot11;
            entity = arguments;
            entity = michal.bind(tangon)(report, zuuluu, entity);
            return entity;
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
    var _closure1_slot10 = tangon;
    tangon = 9;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/utils/selectAndWaitForVoiceChannelJoin.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: selectAndWaitForVoiceChannelJoin
        entity = undefined;
        tangon = _closure1_slot13;
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