// app/modules/video_calls/useVideoSpinnerTimer.tsx
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
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/video_calls/useVideoSpinnerTimer.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useVideoSpinnerTimer
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.location;
            var _closure2_slot0 = zuuluu;
            golfie = entity.videoSpinnerContext;
            var _closure2_slot1 = golfie;
            oscard = entity.userId;
            var _closure2_slot2 = oscard;
            verify = entity.streamId;
            var _closure2_slot3 = verify;
            yankee = entity.loading;
            var _closure2_slot4 = yankee;
            offset = entity.paused;
            entity = undefined;
            if(!(offset === entity)) { _fun00002_ip = 67; continue _fun00001 }
 65:
            offset = false;
 67:
            var _closure2_slot5 = offset;
            var _closure2_slot6 = entity;
            report = _closure1_slot3;
            option = report.useState;
            tangon = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 2;
                michal = michal[entity];
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                zuuluu = entity.VideoSpinnerTimer;
                tangon = _closure2_slot0;
                michal = zuuluu.prototype;
                michal = Object.create(michal, {constructor: {value: zuuluu}});
                report = michal;
                entity = new report[zuuluu](tangon, zuuluu);
                entity = entity instanceof Object ? entity : michal;
                return entity;
            };
            option = option.bind(report)(tangon);
            tangon = _closure1_slot2;
            zuuluu = 1;
            tangon = tangon.bind(entity)(option, zuuluu);
            zuuluu = 0;
            option = tangon[zuuluu];
            _closure2_slot6 = option;
            tangon = report.useEffect;
            zuuluu = new Array(6);
            zuuluu[0] = yankee;
            zuuluu[1] = offset;
            zuuluu[2] = verify;
            zuuluu[3] = option;
            zuuluu[4] = golfie;
            zuuluu[5] = oscard;
            michal = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot5;
                    if(michal) { _fun00004_ip = 76; continue _fun00003 }
 10:
                    michal = _closure2_slot4;
                    if(michal) { _fun00004_ip = 60; continue _fun00003 }
 17:
                    zuuluu = _closure2_slot3;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00004_ip = 76; continue _fun00003 }
 27:
                    oscard = _closure2_slot6;
                    report = oscard.trackSpinnerDuration;
                    tangon = _closure2_slot1;
                    zuuluu = _closure2_slot2;
                    michal = _closure2_slot3;
                    michal = report.bind(oscard)(tangon, zuuluu, michal);
                    _fun00004_ip = 76; continue _fun00003;
 60:
                    michal = _closure2_slot6;
                    entity = michal.onSpinnerStarted;
                    entity = entity.bind(michal)();
 76:
                    entity = undefined;
                    return entity;
                }
            };
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();