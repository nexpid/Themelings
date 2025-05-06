// app/modules/voice_messages/native/useVoiceMessageTooltip.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argBaz;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.hideVoiceMessagesTooltip;
    var _closure1_slot4 = golfie;
    golfie = tangon.showVoiceMessagesTooltip;
    var _closure1_slot5 = golfie;
    tangon = tangon.useVoiceMessagesUIStore;
    var _closure1_slot6 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_messages/native/useVoiceMessageTooltip.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useVoiceMessageTooltip
        option = _closure1_slot2;
        tangon = option.useRef;
        zuuluu = null;
        zuuluu = tangon.bind(option)(zuuluu);
        report = _closure1_slot6;
        oscard = undefined;
        tangon = function(argFoo) {
            entity = argFoo;
            entity = entity.showVoiceMessagesTooltip;
            return entity;
        };
        verify = report.bind(oscard)(tangon);
        var _closure2_slot0 = verify;
        golfie = option.useMemo;
        report = new Array(1);
        report[0] = verify;
        tangon = function() {
            entity = {};
            michal = 'top';
            entity['position'] = michal;
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 3;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.hP6+09;
            michal = zuuluu.bind(tangon)(michal);
            entity['label'] = michal;
            michal = _closure2_slot0;
            entity['visible'] = michal;
            return entity;
        };
        report = golfie.bind(option)(tangon, report);
        golfie = option.useEffect;
        tangon = new Array(1);
        tangon[0] = verify;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = _closure2_slot0;
                if(michal) { _fun00002_ip = 16; continue _fun00001 }
 12:
                michal = undefined;
                return michal;
 16:
                tangon = _closure1_slot0;
                report = _closure1_slot1;
                zuuluu = 4;
                zuuluu = report[zuuluu];
                report = undefined;
                oscard = tangon.bind(report)(zuuluu);
                tangon = oscard.getKeyboardIsOpen;
                zuuluu = {};
                golfie = true;
                zuuluu['includeCustomKeyboard'] = golfie;
                zuuluu = tangon.bind(oscard)(zuuluu);
                var _closure3_slot0 = zuuluu;
                zuuluu = _closure1_slot3;
                michal = function() {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        tangon = _closure3_slot0;
                        report = _closure1_slot0;
                        zuuluu = _closure1_slot1;
                        entity = 4;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        oscard = report.bind(entity)(zuuluu);
                        report = oscard.getKeyboardIsOpen;
                        zuuluu = {};
                        golfie = true;
                        zuuluu['includeCustomKeyboard'] = golfie;
                        zuuluu = report.bind(oscard)(zuuluu);
                        if(!(tangon !== zuuluu)) { _fun00004_ip = 64; continue _fun00003 }
 56:
                        michal = _closure1_slot4;
                        michal = michal.bind(entity)();
 64:
                        return entity;
                    }
                };
                michal = zuuluu.bind(report)(michal);
                var _closure3_slot1 = michal;
                michal = global;
                tangon = michal.setTimeout;
                zuuluu = function() {
                    michal = _closure1_slot4;
                    entity = undefined;
                    michal = michal.bind(entity)();
                    return entity;
                };
                michal = 2000;
                michal = tangon.bind(report)(zuuluu, michal);
                var _closure3_slot2 = michal;
                entity = function() {
                    entity = global;
                    tangon = entity.clearTimeout;
                    zuuluu = _closure3_slot2;
                    entity = undefined;
                    zuuluu = tangon.bind(entity)(zuuluu);
                    michal = _closure3_slot1;
                    michal = michal.bind(entity)();
                    return entity;
                };
                return entity;
            }
        };
        entity = golfie.bind(option)(entity, tangon);
        tangon = _closure1_slot0;
        golfie = _closure1_slot1;
        entity = 5;
        entity = golfie[entity];
        tangon = tangon.bind(oscard)(entity);
        entity = tangon.useTooltip;
        entity = entity.bind(tangon)(zuuluu, report);
        entity = {};
        entity['tooltipTargetRef'] = zuuluu;
        michal = _closure1_slot5;
        entity['showVoiceMessagesTooltip'] = michal;
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();