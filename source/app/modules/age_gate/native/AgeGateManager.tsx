// app/modules/age_gate/native/AgeGateManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
            _closure1_slot16 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot16 = entity;
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
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.EXISTING_USER_AGE_GATE_MODAL_KEY;
    var _closure1_slot12 = option;
    tangon = tangon.AgeGateSource;
    var _closure1_slot13 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.ChannelTypes;
    var _closure1_slot14 = option;
    tangon = tangon.GuildNSFWContentLevel;
    var _closure1_slot15 = tangon;
    tangon = 16;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        tangon = function(argFoo) { // Original name: AgeGateManager
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = this;
                romeon = 0;
                entity = copyRestArgs(romeon);
                golfie = _closure1_slot4;
                michal = _closure2_slot0;
                zuuluu = undefined;
                golfie = golfie.bind(zuuluu)(tangon, michal);
                verify = new Array(0);
                romeon = verify;
                yankee = entity;
                offset = 0;
                entity = arraySpread(romeon, yankee, offset);
                entity = _closure1_slot7;
                option = entity.bind(zuuluu)(michal);
                michal = _closure1_slot6;
                entity = _closure1_slot16;
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
                report = _closure1_slot7;
                report = report.bind(zuuluu)(tangon);
                report = report.constructor;
                entity = oscard.bind(golfie)(option, verify, report);
 118:
                entity = michal.bind(zuuluu)(tangon, entity);
                michal = {};
                zuuluu = entity.handlePostConnectionOpen;
                michal['POST_CONNECTION_OPEN'] = zuuluu;
                zuuluu = entity.handleChannelSelect;
                michal['CHANNEL_SELECT'] = zuuluu;
                zuuluu = entity.handleAgeGateModalOpen;
                michal['AGE_GATE_MODAL_OPEN'] = zuuluu;
                zuuluu = entity.handleAgeGateModalClose;
                michal['AGE_GATE_MODAL_CLOSE'] = zuuluu;
                zuuluu = entity.handleGuildUpdate;
                michal['GUILD_UPDATE'] = zuuluu;
                entity['actions'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot8;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot5;
        report = {};
        entity = 'handlePostConnectionOpen';
        report['key'] = entity;
        entity = function() { // Original name: value
            zuuluu = _closure1_slot11;
            michal = zuuluu.getGuildId;
            report = michal.bind(zuuluu)();
            zuuluu = _closure1_slot10;
            michal = zuuluu.getChannelId;
            tangon = michal.bind(zuuluu)();
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 11;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.maybeShowAgeGate;
            michal = michal.bind(zuuluu)(report, tangon);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(5);
        entity[0] = report;
        report = {};
        golfie = 'handleChannelSelect';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = argFoo;
                report = entity.guildId;
                tangon = entity.channelId;
                zuuluu = _closure1_slot9;
                michal = zuuluu.getChannel;
                zuuluu = michal.bind(zuuluu)(tangon);
                oscard = null;
                michal = oscard != report;
                if(!michal) { _fun00006_ip = 67; continue _fun00005 }
 39:
                golfie = oscard == zuuluu;
                oscard = undefined;
                if(golfie) { _fun00006_ip = 53; continue _fun00005 }
 48:
                oscard = zuuluu.type;
 53:
                zuuluu = _closure1_slot14;
                zuuluu = zuuluu.GUILD_VOICE;
                michal = oscard !== zuuluu;
 67:
                if(!michal) { _fun00006_ip = 115; continue _fun00005 }
 70:
                oscard = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 11;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = oscard.bind(michal)(zuuluu);
                michal = zuuluu.maybeShowAgeGate;
                entity = _closure1_slot13;
                entity = entity.NSFW_CHANNEL;
                entity = michal.bind(zuuluu)(report, tangon, entity);
 115:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'handleAgeGateModalOpen';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            entity = argFoo;
            golfie = entity.source;
            var _closure3_slot0 = golfie;
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 12;
            tangon = tangon[entity];
            entity = undefined;
            oscard = report.bind(entity)(tangon);
            report = oscard.pushLazy;
            tangon = _closure1_slot3;
            zuuluu = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00008_ip = 140; continue _fun00007 }
 10:
                        tangon = _closure1_slot0;
                        michal = _closure1_slot2;
                        zuuluu = 14;
                        zuuluu = michal[zuuluu];
                        golfie = undefined;
                        tangon = tangon.bind(golfie)(zuuluu);
                        zuuluu = 13;
                        zuuluu = michal[zuuluu];
                        michal = michal.paths;
                        michal = tangon.bind(golfie)(zuuluu, michal);
                        SaveGenerator(address=57);
 55:
                        return michal;
 57:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(zuuluu) { _fun00008_ip = 137; continue _fun00007 }
 63:
                        zuuluu = michal.default;
                        oscard = _closure3_slot0;
                        tangon = _closure1_slot13;
                        tangon = tangon.AUTH;
                        if(!(oscard === tangon)) { _fun00008_ip = 134; continue _fun00007 }
 89:
                        tangon = {};
                        oscard = _closure1_slot0;
                        option = _closure1_slot2;
                        report = 15;
                        report = option[report];
                        report = oscard.bind(golfie)(report);
                        report = report.ModalAnimation;
                        report = report.SLIDE_IN_OUT;
                        tangon['animation'] = report;
                        zuuluu['modalConfig'] = tangon;
 134:
                        return zuuluu;
 137:
                        return michal;
 140:
                        return entity;
                    }
                };
                return entity;
            };
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = {};
            zuuluu['source'] = golfie;
            michal = _closure1_slot12;
            michal = report.bind(oscard)(tangon, zuuluu, michal);
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'handleAgeGateModalClose';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 12;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.popWithKey;
            michal = _closure1_slot12;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'handleGuildUpdate';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = argFoo;
                entity = entity.guild;
                tangon = _closure1_slot11;
                zuuluu = tangon.getGuildId;
                oscard = zuuluu.bind(tangon)();
                tangon = null;
                zuuluu = tangon != oscard;
                if(!zuuluu) { _fun00010_ip = 43; continue _fun00009 }
 34:
                report = entity.id;
                zuuluu = report === oscard;
 43:
                if(!zuuluu) { _fun00010_ip = 66; continue _fun00009 }
 46:
                oscard = entity.nsfw_level;
                report = _closure1_slot15;
                report = report.AGE_RESTRICTED;
                zuuluu = oscard === report;
 66:
                if(!zuuluu) { _fun00010_ip = 108; continue _fun00009 }
 69:
                report = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 11;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = report.bind(michal)(zuuluu);
                michal = zuuluu.maybeShowAgeGate;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity, tangon);
 108:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = oscard;
        entity[4] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 17;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/age_gate/native/AgeGateManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();