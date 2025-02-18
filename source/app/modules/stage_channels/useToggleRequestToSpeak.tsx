// app/modules/stage_channels/useToggleRequestToSpeak.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/stage_channels/useToggleRequestToSpeak.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useToggleRequestToSpeak
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            var _closure2_slot0 = report;
            tangon = _closure1_slot0;
            entity = _closure1_slot2;
            oscard = 3;
            oscard = entity[oscard];
            golfie = undefined;
            offset = tangon.bind(golfie)(oscard);
            verify = offset.useStateFromStores;
            oscard = _closure1_slot5;
            option = new Array(1);
            option[0] = oscard;
            oscard = function() {
                michal = _closure1_slot5;
                entity = michal.getId;
                entity = entity.bind(michal)();
                return entity;
            };
            verify = verify.bind(offset)(option, oscard);
            offset = _closure1_slot1;
            option = 4;
            oscard = entity[option];
            oscard = offset.bind(golfie)(oscard);
            report = report.id;
            report = oscard.bind(golfie)(verify, report);
            var _closure2_slot1 = report;
            entity = entity[option];
            entity = tangon.bind(golfie)(entity);
            entity = entity.RequestToSpeakStates;
            entity = entity.REQUESTED_TO_SPEAK;
            entity = report === entity;
            if(entity) { _fun00002_ip = 156; continue _fun00001 }
 123:
            oscard = _closure1_slot0;
            tangon = _closure1_slot2;
            tangon = tangon[option];
            tangon = oscard.bind(golfie)(tangon);
            tangon = tangon.RequestToSpeakStates;
            tangon = tangon.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            entity = report === tangon;
 156:
            var _closure2_slot2 = entity;
            oscard = _closure1_slot4;
            tangon = oscard.useState;
            report = tangon.bind(oscard)(entity);
            tangon = _closure1_slot3;
            zuuluu = 2;
            report = tangon.bind(golfie)(report, zuuluu);
            zuuluu = 0;
            zuuluu = report[zuuluu];
            var _closure2_slot3 = zuuluu;
            tangon = 1;
            tangon = report[tangon];
            var _closure2_slot4 = tangon;
            report = oscard.useEffect;
            tangon = new Array(1);
            tangon[0] = entity;
            entity = function() {
                zuuluu = _closure2_slot4;
                michal = _closure2_slot2;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            entity = report.bind(oscard)(entity, tangon);
            entity = new Array(2);
            entity[0] = zuuluu;
            michal = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    report = _closure2_slot1;
                    oscard = _closure1_slot0;
                    tangon = _closure1_slot2;
                    entity = 4;
                    tangon = tangon[entity];
                    entity = undefined;
                    tangon = oscard.bind(entity)(tangon);
                    tangon = tangon.RequestToSpeakStates;
                    tangon = tangon.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
                    if(!(report !== tangon)) { _fun00004_ip = 93; continue _fun00003 }
 48:
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 5;
                    tangon = oscard[tangon];
                    golfie = report.bind(entity)(tangon);
                    oscard = golfie.toggleRequestToSpeak;
                    report = _closure2_slot0;
                    tangon = _closure2_slot3;
                    tangon = !tangon;
                    tangon = oscard.bind(golfie)(report, tangon);
                    _fun00004_ip = 131; continue _fun00003;
 93:
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    zuuluu = 5;
                    zuuluu = report[zuuluu];
                    oscard = tangon.bind(entity)(zuuluu);
                    report = oscard.audienceAckRequestToSpeak;
                    tangon = _closure2_slot0;
                    zuuluu = true;
                    zuuluu = report.bind(oscard)(tangon, zuuluu);
 131:
                    zuuluu = _closure2_slot4;
                    michal = _closure2_slot3;
                    michal = !michal;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                }
            };
            entity[1] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();