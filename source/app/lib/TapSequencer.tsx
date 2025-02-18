// app/lib/TapSequencer.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    report = argBaz;
    zuuluu = argFre;
    option = argPlu;
    entity = global;
    verify = entity.Object;
    oscard = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = option[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = option[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot1 = tangon;
    tangon = 2;
    tangon = option[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 3;
    tangon = option[tangon];
    tangon = golfie.bind(entity)(tangon);
    report = tangon.useState;
    var _closure1_slot3 = report;
    tangon = tangon.useEffect;
    var _closure1_slot4 = tangon;
    report = {};
    tangon = 'short';
    report['SHORT'] = tangon;
    tangon = 'long';
    report['LONG'] = tangon;
    var _closure1_slot5 = report;
    tangon = {'long': 1250, 'short': 500};
    var _closure1_slot6 = tangon;
    tangon = function() {
        tangon = _closure1_slot2;
        zuuluu = function(argFoo) { // Original name: TapSequencer
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            report = _closure1_slot1;
            tangon = _closure2_slot0;
            entity = undefined;
            tangon = report.bind(entity)(zuuluu, tangon);
            tangon = argFoo;
            zuuluu['tapSequenceHandlers'] = tangon;
            tangon = null;
            zuuluu['_state'] = tangon;
            tangon = function() {
                zuuluu = _closure3_slot0;
                michal = zuuluu.handlePress;
                entity = _closure1_slot5;
                entity = entity.SHORT;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu['handleShortPress'] = tangon;
            michal = function() {
                zuuluu = _closure3_slot0;
                michal = zuuluu.handlePress;
                entity = _closure1_slot5;
                entity = entity.LONG;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu['handleLongPress'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'setTapSequenceHandlers';
        entity['key'] = michal;
        michal = function(argFoo) { // Original name: value
            michal = argFoo;
            entity = this;
            entity['tapSequenceHandlers'] = michal;
            entity = undefined;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(4);
        michal[0] = entity;
        entity = {};
        oscard = 'getState';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = this;
                michal = global;
                zuuluu = michal.Date;
                michal = zuuluu.now;
                zuuluu = michal.bind(zuuluu)();
                tangon = _closure1_slot6;
                michal = argFoo;
                report = tangon[michal];
                tangon = entity._state;
                michal = null;
                michal = michal === tangon;
                if(michal) { _fun00002_ip = 69; continue _fun00001 }
 49:
                tangon = entity._state;
                tangon = tangon.timestamp;
                tangon = tangon + report;
                michal = tangon < zuuluu;
 69:
                if(!michal) { _fun00002_ip = 96; continue _fun00001 }
 72:
                michal = {};
                tangon = entity.tapSequenceHandlers;
                michal['handlers'] = tangon;
                michal['timestamp'] = zuuluu;
                entity['_state'] = michal;
 96:
                entity = entity._state;
                entity = entity.handlers;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'progressState';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = argFoo;
                michal = null;
                entity = michal == zuuluu;
                if(entity) { _fun00004_ip = 44; continue _fun00003 }
 12:
                entity = {};
                entity['handlers'] = zuuluu;
                zuuluu = global;
                tangon = zuuluu.Date;
                zuuluu = tangon.now;
                zuuluu = zuuluu.bind(tangon)();
                entity['timestamp'] = zuuluu;
                michal = entity;
 44:
                entity = this;
                entity['_state'] = michal;
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'handlePress';
        entity['key'] = oscard;
        report = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = argFoo;
                tangon = this;
                michal = tangon.getState;
                option = michal.bind(tangon)(entity);
                zuuluu = tangon.progressState;
                golfie = option[entity];
                michal = null;
                oscard = michal == golfie;
                entity = undefined;
                report = undefined;
                if(oscard) { _fun00006_ip = 52; continue _fun00005 }
 42:
                oscard = golfie.call;
                report = oscard.bind(golfie)(option);
 52:
                oscard = michal != report;
                michal = undefined;
                if(!oscard) { _fun00006_ip = 64; continue _fun00005 }
 61:
                michal = report;
 64:
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            }
        };
        entity['value'] = report;
        michal[3] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    tangon = tangon.bind(entity)();
    var _closure1_slot7 = tangon;
    oscard = 4;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'lib/TapSequencer.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['TapSequencerPressType'] = report;
    zuuluu['TapSequencer'] = tangon;
    michal = function(argFoo) { // Original name: useTapSequencer
        entity = argFoo;
        var _closure2_slot0 = entity;
        report = _closure1_slot3;
        tangon = undefined;
        entity = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = _closure1_slot7;
                entity = _closure2_slot0;
                tangon = 'function';
                entity = typeof entity;
                if(!(tangon !== entity)) { _fun00008_ip = 31; continue _fun00007 }
 25:
                entity = _closure2_slot0;
                _fun00008_ip = 41; continue _fun00007;
 31:
                tangon = _closure2_slot0;
                michal = undefined;
                entity = tangon.bind(michal)();
 41:
                michal = zuuluu.prototype;
                michal = Object.create(michal, {constructor: {value: zuuluu}});
                oscard = michal;
                report = entity;
                entity = new oscard[zuuluu](report, tangon);
                entity = entity instanceof Object ? entity : michal;
                return entity;
            }
        };
        oscard = report.bind(tangon)(entity);
        report = _closure1_slot0;
        entity = 1;
        report = report.bind(tangon)(oscard, entity);
        entity = 0;
        entity = report[entity];
        var _closure2_slot1 = entity;
        zuuluu = _closure1_slot4;
        michal = function() {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zuuluu = _closure2_slot1;
                michal = zuuluu.setTapSequenceHandlers;
                entity = _closure2_slot0;
                report = 'function';
                entity = typeof entity;
                if(!(report !== entity)) { _fun00010_ip = 36; continue _fun00009 }
 30:
                entity = _closure2_slot0;
                _fun00010_ip = 46; continue _fun00009;
 36:
                report = _closure2_slot0;
                tangon = undefined;
                entity = report.bind(tangon)();
 46:
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            }
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['useTapSequencer'] = michal;
    return entity;
})();