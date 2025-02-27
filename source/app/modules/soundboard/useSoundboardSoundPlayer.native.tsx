// app/modules/soundboard/useSoundboardSoundPlayer.native.tsx
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
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/soundboard/useSoundboardSoundPlayer.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: useSoundboardSoundPlayer
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            verify = argFoo;
            tangon = argBar;
            var _closure2_slot0 = verify;
            var _closure2_slot1 = tangon;
            entity = arguments[2];
            oscard = undefined;
            if(!(entity === oscard)) { _fun00002_ip = 85; continue _fun00001 }
 25:
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            entity = 2;
            entity = report[entity];
            entity = zuuluu.bind(oscard)(entity);
            zuuluu = entity.SoundboardSettings;
            entity = zuuluu.getSetting;
            report = entity.bind(zuuluu)();
            zuuluu = null;
            golfie = zuuluu == report;
            entity = undefined;
            if(golfie) { _fun00002_ip = 81; continue _fun00001 }
 75:
            entity = report.volume;
 81:
            entity = zuuluu != entity;
 85:
            var _closure2_slot2 = oscard;
            golfie = _closure1_slot3;
            report = golfie.useContext;
            option = _closure1_slot1;
            offset = _closure1_slot2;
            zuuluu = 3;
            zuuluu = offset[zuuluu];
            zuuluu = option.bind(oscard)(zuuluu);
            zuuluu = report.bind(golfie)(zuuluu);
            option = zuuluu.audioRef;
            _closure2_slot2 = option;
            report = _closure1_slot0;
            zuuluu = 4;
            zuuluu = offset[zuuluu];
            offset = report.bind(oscard)(zuuluu);
            oscard = offset.useStateFromStores;
            entity = _closure1_slot4;
            report = new Array(1);
            report[0] = entity;
            zuuluu = new Array(1);
            zuuluu[0] = verify;
            entity = function() {
                zuuluu = _closure1_slot4;
                michal = zuuluu.isPlayingSound;
                entity = _closure2_slot0;
                entity = entity.soundId;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu = oscard.bind(offset)(report, entity, zuuluu);
            entity = {};
            oscard = golfie.useCallback;
            report = new Array(3);
            report[0] = verify;
            report[1] = option;
            report[2] = tangon;
            tangon = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot2;
                    michal = michal.current;
                    zuuluu = null;
                    if(!(zuuluu != michal)) { _fun00004_ip = 37; continue _fun00003 }
 18:
                    michal = _closure2_slot2;
                    tangon = michal.current;
                    michal = tangon.pause;
                    michal = michal.bind(tangon)();
 37:
                    michal = _closure2_slot1;
                    if(!(zuuluu != michal)) { _fun00004_ip = 94; continue _fun00003 }
 45:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 5;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.playSound;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    entity = argFoo;
                    entity = tangon.bind(report)(zuuluu, michal, entity);
 94:
                    entity = undefined;
                    return entity;
                }
            };
            tangon = oscard.bind(golfie)(tangon, report);
            entity['playSoundboardSound'] = tangon;
            entity['isPlayingSound'] = zuuluu;
            michal = function() { // Original name: previewSound
                entity = global;
                michal = entity.Promise;
                entity = michal.resolve;
                entity = entity.bind(michal)();
                return entity;
            };
            entity['previewSound'] = michal;
            michal = false;
            entity['isPreviewingSound'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();