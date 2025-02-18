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
    tangon = 5;
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
                tangon = _closure1_slot3;
                michal = tangon.keyboardOrCustomKeyboardOpen;
                var _closure3_slot0 = michal;
                zuuluu = function() { // Original name: keyboardChangeListener
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        zuuluu = _closure3_slot0;
                        michal = _closure1_slot3;
                        michal = michal.keyboardOrCustomKeyboardOpen;
                        if(!(zuuluu !== michal)) { _fun00004_ip = 34; continue _fun00003 }
 24:
                        michal = _closure1_slot4;
                        entity = undefined;
                        entity = michal.bind(entity)();
 34:
                        entity = undefined;
                        return entity;
                    }
                };
                var _closure3_slot1 = zuuluu;
                michal = tangon.addChangeListener;
                michal = michal.bind(tangon)(zuuluu);
                michal = global;
                report = michal.setTimeout;
                tangon = undefined;
                zuuluu = function() {
                    michal = _closure1_slot4;
                    entity = undefined;
                    michal = michal.bind(entity)();
                    return entity;
                };
                michal = 2000;
                michal = report.bind(tangon)(zuuluu, michal);
                var _closure3_slot2 = michal;
                entity = function() {
                    entity = global;
                    tangon = entity.clearTimeout;
                    zuuluu = _closure3_slot2;
                    entity = undefined;
                    zuuluu = tangon.bind(entity)(zuuluu);
                    tangon = _closure1_slot3;
                    zuuluu = tangon.removeChangeListener;
                    michal = _closure3_slot1;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                return entity;
            }
        };
        entity = golfie.bind(option)(entity, tangon);
        tangon = _closure1_slot0;
        golfie = _closure1_slot1;
        entity = 4;
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