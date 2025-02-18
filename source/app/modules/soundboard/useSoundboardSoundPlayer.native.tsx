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
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/soundboard/useSoundboardSoundPlayer.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: useSoundboardSoundPlayer
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            offset = argFoo;
            report = argBar;
            zuuluu = arguments[2];
            var _closure2_slot0 = offset;
            var _closure2_slot1 = report;
            yankee = undefined;
            if(!(zuuluu === yankee)) { _fun00002_ip = 97; continue _fun00001 }
 25:
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 3;
            michal = oscard[michal];
            michal = tangon.bind(yankee)(michal);
            tangon = michal.SoundboardSettings;
            michal = tangon.getSetting;
            oscard = michal.bind(tangon)();
            michal = null;
            golfie = michal == oscard;
            tangon = undefined;
            if(golfie) { _fun00002_ip = 81; continue _fun00001 }
 75:
            tangon = oscard.volume;
 81:
            oscard = michal != tangon;
            michal = 100;
            if(!oscard) { _fun00002_ip = 94; continue _fun00001 }
 91:
            michal = tangon;
 94:
            zuuluu = michal;
 97:
            var _closure2_slot2 = zuuluu;
            var _closure2_slot3 = yankee;
            var _closure2_slot4 = yankee;
            option = _closure1_slot4;
            oscard = option.useContext;
            golfie = _closure1_slot1;
            romeon = _closure1_slot2;
            michal = 4;
            michal = romeon[michal];
            michal = golfie.bind(yankee)(michal);
            michal = oscard.bind(option)(michal);
            verify = michal.audioRef;
            _closure2_slot3 = verify;
            oscard = option.useState;
            michal = false;
            golfie = oscard.bind(option)(michal);
            oscard = _closure1_slot3;
            michal = 2;
            golfie = oscard.bind(yankee)(golfie, michal);
            michal = 0;
            michal = golfie[michal];
            oscard = 1;
            oscard = golfie[oscard];
            _closure2_slot4 = oscard;
            golfie = _closure1_slot0;
            oscard = 5;
            oscard = romeon[oscard];
            romeon = golfie.bind(yankee)(oscard);
            yankee = romeon.useStateFromStores;
            tangon = _closure1_slot5;
            golfie = new Array(1);
            golfie[0] = tangon;
            oscard = new Array(1);
            oscard[0] = offset;
            tangon = function() {
                zuuluu = _closure1_slot5;
                michal = zuuluu.isPlayingSound;
                entity = _closure2_slot0;
                entity = entity.soundId;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = yankee.bind(romeon)(golfie, tangon, oscard);
            golfie = option.useCallback;
            oscard = new Array(3);
            oscard[0] = offset;
            oscard[1] = verify;
            oscard[2] = report;
            report = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot3;
                    michal = michal.current;
                    zuuluu = null;
                    if(!(zuuluu != michal)) { _fun00004_ip = 37; continue _fun00003 }
 18:
                    michal = _closure2_slot3;
                    tangon = michal.current;
                    michal = tangon.pause;
                    michal = michal.bind(tangon)();
 37:
                    michal = _closure2_slot1;
                    if(!(zuuluu != michal)) { _fun00004_ip = 94; continue _fun00003 }
 45:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 6;
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
            report = golfie.bind(option)(report, oscard);
            golfie = option.useCallback;
            oscard = new Array(3);
            oscard[0] = offset;
            oscard[1] = zuuluu;
            oscard[2] = verify;
            zuuluu = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = global;
                    oscard = entity.Audio;
                    tangon = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 7;
                    michal = michal[entity];
                    entity = undefined;
                    report = tangon.bind(entity)(michal);
                    tangon = _closure2_slot0;
                    tangon = tangon.soundId;
                    verify = report.bind(entity)(tangon);
                    report = oscard.prototype;
                    report = Object.create(report, {constructor: {value: oscard}});
                    offset = report;
                    tangon = new offset[oscard](verify, option);
                    oscard = tangon instanceof Object ? tangon : report;
                    tangon = _closure2_slot3;
                    report = tangon.current;
                    tangon = null;
                    if(!(tangon != report)) { _fun00006_ip = 107; continue _fun00005 }
 88:
                    tangon = _closure2_slot3;
                    report = tangon.current;
                    tangon = report.pause;
                    tangon = tangon.bind(report)();
 107:
                    tangon = _closure2_slot3;
                    tangon['current'] = oscard;
                    tangon = 0;
                    oscard['currentTime'] = tangon;
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    zuuluu = 8;
                    zuuluu = report[zuuluu];
                    report = tangon.bind(entity)(zuuluu);
                    zuuluu = _closure2_slot0;
                    tangon = zuuluu.volume;
                    zuuluu = _closure2_slot2;
                    zuuluu = report.bind(entity)(tangon, zuuluu);
                    oscard['volume'] = zuuluu;
                    zuuluu = oscard.play;
                    zuuluu = zuuluu.bind(oscard)();
                    zuuluu = _closure2_slot4;
                    michal = true;
                    zuuluu = zuuluu.bind(entity)(michal);
                    report = oscard.addEventListener;
                    tangon = {};
                    tangon['once'] = michal;
                    zuuluu = 'pause';
                    michal = function() {
                        zuuluu = _closure2_slot4;
                        michal = undefined;
                        entity = false;
                        entity = zuuluu.bind(michal)(entity);
                        return entity;
                    };
                    michal = report.bind(oscard)(zuuluu, michal, tangon);
                    return entity;
                }
            };
            zuuluu = golfie.bind(option)(zuuluu, oscard);
            golfie = option.useCallback;
            oscard = new Array(1);
            oscard[0] = verify;
            entity = function() {
                entity = function() {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        entity = _closure2_slot3;
                        zuuluu = entity.current;
                        entity = null;
                        michal = entity == zuuluu;
                        entity = undefined;
                        if(michal) { _fun00008_ip = 33; continue _fun00007 }
 23:
                        michal = zuuluu.pause;
                        entity = michal.bind(zuuluu)();
 33:
                        return entity;
                    }
                };
                return entity;
            };
            entity = golfie.bind(option)(entity, oscard);
            entity = {};
            entity['playSoundboardSound'] = report;
            entity['isPlayingSound'] = tangon;
            entity['previewSound'] = zuuluu;
            entity['isPreviewingSound'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();