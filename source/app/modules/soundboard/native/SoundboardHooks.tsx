// app/modules/soundboard/native/SoundboardHooks.tsx
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
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SoundboardOrientationConfig;
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ACTION_SHEET_MAX_WIDTH;
    var _closure1_slot8 = tangon;
    tangon = function() { // Original name: useOrientationConfig
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        michal = 6;
        zuuluu = zuuluu[michal];
        michal = undefined;
        zuuluu = tangon.bind(michal)(zuuluu);
        michal = zuuluu.useOrientation;
        michal = michal.bind(zuuluu)();
        entity = _closure1_slot7;
        entity = entity[michal];
        entity = entity.alternate;
        return entity;
    };
    var _closure1_slot9 = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/soundboard/native/SoundboardHooks.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() {
        entity = {};
        zuuluu = _closure1_slot9;
        michal = undefined;
        michal = zuuluu.bind(michal)();
        michal = michal.soundsPerRow;
        entity['soundsPerRow'] = michal;
        return entity;
    };
    zuuluu['useSoundPickerListStyleConfig'] = tangon;
    tangon = function() {
        entity = _closure1_slot9;
        tangon = undefined;
        michal = entity.bind(tangon)();
        report = _closure1_slot1;
        oscard = _closure1_slot2;
        entity = 7;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.bind(tangon)();
        oscard = entity.width;
        entity = {};
        tangon = global;
        report = tangon.Math;
        tangon = report.min;
        zuuluu = _closure1_slot8;
        tangon = tangon.bind(report)(zuuluu, oscard);
        zuuluu = michal.soundRowPadding;
        zuuluu = tangon - zuuluu;
        michal = michal.soundsPerRow;
        michal = zuuluu / michal;
        entity['buttonWidth'] = michal;
        return entity;
    };
    zuuluu['useSoundButtonStyleConfig'] = tangon;
    michal = function(argFoo) {
        entity = argFoo;
        oscard = entity.shouldFetch;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        golfie = _closure1_slot2;
        tangon = 8;
        option = golfie[tangon];
        entity = undefined;
        yankee = report.bind(entity)(option);
        offset = yankee.useStateFromStores;
        option = _closure1_slot5;
        verify = new Array(1);
        verify[0] = option;
        option = function() {
            entity = _closure1_slot5;
            entity = entity.saturation;
            return entity;
        };
        option = offset.bind(yankee)(verify, option);
        tangon = golfie[tangon];
        verify = report.bind(entity)(tangon);
        golfie = verify.useStateFromStores;
        tangon = _closure1_slot6;
        report = new Array(1);
        report[0] = tangon;
        tangon = function() {
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 9;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = tangon.bind(michal)(zuuluu);
            michal = zuuluu.isThemeDark;
            entity = _closure1_slot6;
            entity = entity.theme;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        golfie = golfie.bind(verify)(report, tangon);
        report = _closure1_slot4;
        tangon = report.useEffect;
        zuuluu = new Array(3);
        zuuluu[0] = option;
        zuuluu[1] = golfie;
        zuuluu[2] = oscard;
        michal = function() {
            michal = function() {
                tangon = _closure1_slot3;
                zuuluu = undefined;
                michal = function* () {
                    entity = function* () { // Original name: ?anon_0_
                        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(michal) { _fun00002_ip = 98; continue _fun00001 }
 7:
                            michal = _closure2_slot0;
                            if(!michal) { _fun00002_ip = 90; continue _fun00001 }
 17:
                            tangon = _closure1_slot0;
                            report = _closure1_slot2;
                            michal = 10;
                            michal = report[michal];
                            zuuluu = undefined;
                            michal = tangon.bind(zuuluu)(michal);
                            oscard = michal.FrecencyUserSettingsActionCreators;
                            michal = oscard.loadIfNecessary;
                            michal = michal.bind(oscard)();
                            michal = 11;
                            michal = report[michal];
                            zuuluu = tangon.bind(zuuluu)(michal);
                            michal = zuuluu.maybeFetchSoundboardSounds;
                            michal = michal.bind(zuuluu)();
                            SaveGenerator(address=84);
 82:
                            return michal;
 84:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(zuuluu) { _fun00002_ip = 95; continue _fun00001 }
 90:
                            zuuluu = undefined;
                            return zuuluu;
 95:
                            return michal;
 98:
                            return entity;
                        }
                    };
                    return entity;
                };
                michal = tangon.bind(zuuluu)(michal);
                var _closure4_slot0 = michal;
                entity = function() {
                    entity = undefined;
                    tangon = _closure4_slot0;
                    zuuluu = tangon.apply;
                    entity = arguments;
                    michal = entity;
                    entity = this;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                };
                return entity;
            };
            entity = undefined;
            michal = michal.bind(entity)();
            michal = michal.bind(entity)();
            return entity;
        };
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    zuuluu['useMaybeFetchSoundboardSounds'] = michal;
    return entity;
})();