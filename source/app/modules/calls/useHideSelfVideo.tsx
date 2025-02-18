// app/modules/calls/useHideSelfVideo.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
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
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.VideoToggleState;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.MediaEngineContextTypes;
    var _closure1_slot6 = golfie;
    tangon = tangon.Features;
    var _closure1_slot7 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/calls/useHideSelfVideo.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useHideSelfVideo
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            zuuluu = arguments[1];
            verify = undefined;
            if(!(zuuluu === verify)) { _fun00002_ip = 27; continue _fun00001 }
 14:
            entity = _closure1_slot6;
            zuuluu = entity.DEFAULT;
 27:
            var _closure2_slot0 = zuuluu;
            var _closure2_slot1 = verify;
            option = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 4;
            tangon = offset[golfie];
            romeon = option.bind(verify)(tangon);
            yankee = romeon.useStateFromStores;
            tangon = _closure1_slot3;
            report = new Array(1);
            report[0] = tangon;
            tangon = function() {
                michal = _closure1_slot3;
                entity = michal.getId;
                entity = entity.bind(michal)();
                return entity;
            };
            report = yankee.bind(romeon)(report, tangon);
            _closure2_slot1 = report;
            tangon = offset[golfie];
            foxtra = option.bind(verify)(tangon);
            romeon = foxtra.useStateFromStores;
            tangon = _closure1_slot4;
            yankee = new Array(1);
            yankee[0] = tangon;
            entity = function() {
                zuuluu = _closure1_slot4;
                michal = zuuluu.supports;
                entity = _closure1_slot7;
                entity = entity.DISABLE_VIDEO;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = romeon.bind(foxtra)(yankee, entity);
            golfie = offset[golfie];
            verify = option.bind(verify)(golfie);
            option = verify.useStateFromStores;
            golfie = new Array(1);
            golfie[0] = tangon;
            tangon = new Array(2);
            tangon[0] = report;
            tangon[1] = zuuluu;
            zuuluu = function() {
                tangon = _closure1_slot4;
                zuuluu = tangon.isLocalVideoDisabled;
                michal = _closure2_slot1;
                entity = _closure2_slot0;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            zuuluu = option.bind(verify)(golfie, zuuluu, tangon);
            tangon = null;
            tangon = tangon == oscard;
            if(tangon) { _fun00002_ip = 192; continue _fun00001 }
 188:
            tangon = oscard === report;
 192:
            if(!tangon) { _fun00002_ip = 198; continue _fun00001 }
 195:
            tangon = entity;
 198:
            entity = new Array(3);
            entity[0] = tangon;
            entity[1] = zuuluu;
            michal = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure1_slot5;
                    zuuluu = argFoo;
                    if(zuuluu) { _fun00004_ip = 21; continue _fun00003 }
 13:
                    oscard = michal.MANUAL_ENABLED;
                    _fun00004_ip = 27; continue _fun00003;
 21:
                    oscard = michal.DISABLED;
 27:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 5;
                    michal = michal[entity];
                    entity = undefined;
                    report = zuuluu.bind(entity)(michal);
                    tangon = report.setDisableLocalVideo;
                    zuuluu = _closure2_slot1;
                    michal = _closure2_slot0;
                    michal = tangon.bind(report)(zuuluu, oscard, michal);
                    return entity;
                }
            };
            entity[2] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();