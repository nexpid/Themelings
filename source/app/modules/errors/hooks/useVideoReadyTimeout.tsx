// app/modules/errors/hooks/useVideoReadyTimeout.tsx
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
    tangon = tangon.Millis;
    golfie = tangon.SECOND;
    tangon = 20;
    tangon = tangon * golfie;
    var _closure1_slot3 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/errors/hooks/useVideoReadyTimeout.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useVideoReadyTimeout
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            verify = zuuluu.streamId;
            var _closure2_slot0 = verify;
            golfie = zuuluu.userId;
            var _closure2_slot1 = golfie;
            report = zuuluu.videoSpinnerContext;
            entity = zuuluu.streamKey;
            var _closure2_slot2 = entity;
            option = zuuluu.loading;
            var _closure2_slot3 = option;
            offset = zuuluu.paused;
            yankee = undefined;
            if(!(offset === yankee)) { _fun00002_ip = 64; continue _fun00001 }
 62:
            offset = false;
 64:
            var _closure2_slot4 = offset;
            var _closure2_slot5 = yankee;
            var _closure2_slot6 = yankee;
            backup = _closure1_slot2;
            foxtra = backup.useRef;
            oscard = _closure1_slot0;
            tangon = _closure1_slot1;
            romeon = 2;
            romeon = tangon[romeon];
            romeon = oscard.bind(yankee)(romeon);
            romeon = romeon.Timeout;
            kiloes = romeon.prototype;
            kiloes = Object.create(kiloes, {constructor: {value: romeon}});
            result = kiloes;
            romeon = new result[romeon](output);
            romeon = romeon instanceof Object ? romeon : kiloes;
            romeon = foxtra.bind(backup)(romeon);
            _closure2_slot5 = romeon;
            romeon = 3;
            tangon = tangon[romeon];
            tangon = oscard.bind(yankee)(tangon);
            tangon = tangon.VideoSpinnerContext;
            tangon = tangon.SELF_STREAM;
            if(!(report !== tangon)) { _fun00002_ip = 238; continue _fun00001 }
 171:
            oscard = _closure1_slot0;
            tangon = _closure1_slot1;
            tangon = tangon[romeon];
            tangon = oscard.bind(yankee)(tangon);
            tangon = tangon.VideoSpinnerContext;
            tangon = tangon.REMOTE_STREAM;
            if(!(report !== tangon)) { _fun00002_ip = 238; continue _fun00001 }
 204:
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            tangon = 4;
            tangon = oscard[tangon];
            tangon = report.bind(yankee)(tangon);
            tangon = tangon.MediaEngineContextTypes;
            oscard = tangon.DEFAULT;
            _fun00002_ip = 270; continue _fun00001;
 238:
            report = _closure1_slot0;
            romeon = _closure1_slot1;
            tangon = 4;
            tangon = romeon[tangon];
            tangon = report.bind(yankee)(tangon);
            tangon = tangon.MediaEngineContextTypes;
            oscard = tangon.STREAM;
 270:
            _closure2_slot6 = oscard;
            report = _closure1_slot2;
            tangon = report.useEffect;
            zuuluu = new Array(6);
            zuuluu[0] = offset;
            zuuluu[1] = verify;
            zuuluu[2] = option;
            zuuluu[3] = oscard;
            zuuluu[4] = entity;
            zuuluu[5] = golfie;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot3;
                    if(!michal) { _fun00004_ip = 107; continue _fun00003 }
 12:
                    michal = _closure2_slot4;
                    if(michal) { _fun00004_ip = 107; continue _fun00003 }
 19:
                    oscard = _closure1_slot0;
                    report = _closure1_slot1;
                    tangon = 5;
                    report = report[tangon];
                    tangon = undefined;
                    tangon = oscard.bind(tangon)(report);
                    report = tangon.WindowVisibilityVideoManager;
                    tangon = report.isIncomingVideoEnabled;
                    tangon = tangon.bind(report)();
                    if(!tangon) { _fun00004_ip = 107; continue _fun00003 }
 63:
                    zuuluu = _closure2_slot5;
                    report = zuuluu.current;
                    var _closure3_slot0 = report;
                    tangon = report.start;
                    zuuluu = _closure1_slot3;
                    michal = function() {
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot1;
                        entity = 6;
                        michal = michal[entity];
                        entity = undefined;
                        golfie = zuuluu.bind(entity)(michal);
                        oscard = golfie.videoStreamTimedOut;
                        yankee = _closure2_slot0;
                        offset = _closure2_slot1;
                        verify = _closure2_slot6;
                        option = _closure2_slot2;
                        romeon = golfie;
                        michal = romeon[oscard](yankee, offset, verify, option, golfie);
                        return entity;
                    };
                    michal = tangon.bind(report)(zuuluu, michal);
                    entity = function() {
                        michal = _closure3_slot0;
                        entity = michal.stop;
                        entity = entity.bind(michal)();
                        entity = undefined;
                        return entity;
                    };
                    return entity;
 107:
                    entity = undefined;
                    return entity;
                }
            };
            entity = tangon.bind(report)(entity, zuuluu);
            entity = {};
            tangon = report.useCallback;
            zuuluu = new Array(2);
            zuuluu[0] = golfie;
            zuuluu[1] = oscard;
            michal = function() {
                entity = _closure2_slot5;
                zuuluu = entity.current;
                entity = zuuluu.stop;
                entity = entity.bind(zuuluu)();
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot1;
                entity = 6;
                zuuluu = zuuluu[entity];
                entity = undefined;
                report = tangon.bind(entity)(zuuluu);
                tangon = report.clearVideoStreamTimeout;
                zuuluu = _closure2_slot6;
                michal = _closure2_slot1;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            michal = tangon.bind(report)(michal, zuuluu);
            entity['onReady'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();