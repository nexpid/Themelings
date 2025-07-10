// app/modules/voice_calls/VoiceChannelNotificationsManager.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    entity = argCor;
    var _closure1_slot0 = entity;
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
 72: // try_end0
            _fun00002_ip = 76; continue _fun00001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot8 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot8 = entity;
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
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 7;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    michal = function(argFoo) {
        tangon = function(argFoo) { // Original name: VoiceChannelNotificationsManager
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = this;
                romeon = 0;
                entity = copyRestArgs(romeon);
                golfie = _closure1_slot2;
                michal = _closure2_slot0;
                zuuluu = undefined;
                golfie = golfie.bind(zuuluu)(tangon, michal);
                verify = new Array(0);
                romeon = verify;
                yankee = entity;
                offset = 0;
                entity = arraySpread(romeon, yankee, offset);
                entity = _closure1_slot5;
                option = entity.bind(zuuluu)(michal);
                michal = _closure1_slot4;
                entity = _closure1_slot8;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00004_ip = 84; continue _fun00003 }
 71:
                entity = option.apply;
                entity = entity.bind(option)(tangon, verify);
                _fun00004_ip = 118; continue _fun00003;
 84:
                oscard = global;
                golfie = oscard.Reflect;
                oscard = golfie.construct;
                report = _closure1_slot5;
                report = report.bind(zuuluu)(tangon);
                report = report.constructor;
                entity = oscard.bind(golfie)(option, verify, report);
 118:
                entity = michal.bind(zuuluu)(tangon, entity);
                michal = {};
                zuuluu = entity.handleVoiceChannelSelect;
                michal['VOICE_CHANNEL_SELECT'] = zuuluu;
                entity['actions'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        oscard = _closure1_slot6;
        zuuluu = undefined;
        report = argFoo;
        report = oscard.bind(zuuluu)(tangon, report);
        michal = _closure1_slot3;
        report = {};
        oscard = 'handleVoiceChannelSelect';
        report['key'] = oscard;
        entity = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = argFoo;
                zuuluu = entity.channelId;
                entity = entity.guildId;
                michal = null;
                if(!(michal != zuuluu)) { _fun00006_ip = 93; continue _fun00005 }
 19:
                if(!(michal != entity)) { _fun00006_ip = 93; continue _fun00005 }
 23:
                report = _closure1_slot7;
                tangon = report.getChannel;
                report = tangon.bind(report)(zuuluu);
                michal = michal != report;
                if(!michal) { _fun00006_ip = 57; continue _fun00005 }
 47:
                tangon = report.isGuildVoice;
                michal = tangon.bind(report)();
 57:
                if(!michal) { _fun00006_ip = 93; continue _fun00005 }
 60:
                tangon = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 6;
                michal = michal[entity];
                entity = undefined;
                michal = tangon.bind(entity)(michal);
                entity = michal.sendVoiceChannelActivityNotification;
                entity = entity.bind(michal)(zuuluu);
 93:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(1);
        entity[0] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    romeon = tangon;
    michal = new romeon[michal](yankee);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 8;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_calls/VoiceChannelNotificationsManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();