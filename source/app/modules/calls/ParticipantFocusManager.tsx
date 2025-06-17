// app/modules/calls/ParticipantFocusManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
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
            _closure1_slot7 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot7 = entity;
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
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot1 = tangon;
    tangon = 2;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 3;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 4;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 6;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 7;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    michal = function(argFoo) {
        tangon = function(argFoo) { // Original name: ParticipantFocusManager
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                report = this;
                foxtra = 0;
                entity = copyRestArgs(foxtra);
                golfie = _closure1_slot0;
                zuuluu = _closure2_slot0;
                tangon = undefined;
                golfie = golfie.bind(tangon)(report, zuuluu);
                offset = new Array(0);
                foxtra = offset;
                romeon = entity;
                yankee = 0;
                entity = arraySpread(foxtra, romeon, yankee);
                entity = _closure1_slot3;
                verify = entity.bind(tangon)(zuuluu);
                zuuluu = _closure1_slot2;
                entity = _closure1_slot7;
                entity = entity.bind(tangon)();
                if(entity) { _fun00004_ip = 84; continue _fun00003 }
 71:
                entity = verify.apply;
                entity = entity.bind(verify)(report, offset);
                _fun00004_ip = 118; continue _fun00003;
 84:
                oscard = global;
                option = oscard.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot3;
                oscard = oscard.bind(tangon)(report);
                oscard = oscard.constructor;
                entity = golfie.bind(option)(verify, offset, oscard);
 118:
                entity = zuuluu.bind(tangon)(report, entity);
                zuuluu = global;
                zuuluu = zuuluu.Map;
                tangon = zuuluu.prototype;
                tangon = Object.create(tangon, {constructor: {value: zuuluu}});
                backup = tangon;
                zuuluu = new backup[zuuluu](foxtra);
                report = zuuluu instanceof Object ? zuuluu : tangon;
                tangon = report.set;
                zuuluu = _closure1_slot6;
                michal = entity.handleFocusParticipant;
                michal = tangon.bind(report)(zuuluu, michal);
                entity['stores'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        oscard = _closure1_slot4;
        zuuluu = undefined;
        report = argFoo;
        report = oscard.bind(zuuluu)(tangon, report);
        michal = _closure1_slot1;
        report = {};
        oscard = 'handleFocusParticipant';
        report['key'] = oscard;
        entity = function() { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = _closure1_slot5;
                entity = zuuluu.getChannelId;
                oscard = entity.bind(zuuluu)();
                entity = null;
                if(!(entity != oscard)) { _fun00006_ip = 115; continue _fun00005 }
 25:
                report = _closure1_slot6;
                zuuluu = report.getSelectedParticipantId;
                zuuluu = zuuluu.bind(report)(oscard);
                var _closure3_slot0 = zuuluu;
                zuuluu = report.getVideoParticipants;
                oscard = zuuluu.bind(report)(oscard);
                zuuluu = _closure1_slot5;
                michal = zuuluu.getRTCConnection;
                zuuluu = michal.bind(zuuluu)();
                if(!(entity != zuuluu)) { _fun00006_ip = 115; continue _fun00005 }
 73:
                michal = zuuluu.setSelectedParticipant;
                report = oscard.find;
                tangon = function(argFoo) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        michal = argFoo;
                        zuuluu = michal.id;
                        entity = _closure3_slot0;
                        entity = zuuluu === entity;
                        if(!entity) { _fun00008_ip = 31; continue _fun00007 }
 22:
                        michal = michal.localVideoDisabled;
                        entity = !michal;
 31:
                        return entity;
                    }
                };
                tangon = report.bind(oscard)(tangon);
                report = entity == tangon;
                entity = undefined;
                if(report) { _fun00006_ip = 110; continue _fun00005 }
 105:
                entity = tangon.id;
 110:
                entity = michal.bind(zuuluu)(entity);
 115:
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
    tangon = 'modules/calls/ParticipantFocusManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();