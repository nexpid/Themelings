// app/components_native/common/VolumeSlider.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        report = argBar;
        zuuluu = argFre;
        oscard = argPlu;
        var _closure1_slot0 = report;
        entity = argBaz;
        var _closure1_slot1 = entity;
        var _closure1_slot2 = oscard;
        entity = global;
        option = entity.Object;
        golfie = option.defineProperty;
        tangon = {};
        entity = true;
        tangon['value'] = entity;
        entity = '__esModule';
        entity = golfie.bind(option)(zuuluu, entity, tangon);
        tangon = 0;
        option = oscard[tangon];
        golfie = argCor;
        entity = undefined;
        golfie = golfie.bind(entity)(option);
        golfie = 1;
        golfie = oscard[golfie];
        golfie = report.bind(entity)(golfie);
        option = golfie.View;
        var _closure1_slot3 = option;
        option = golfie.StyleSheet;
        golfie = 2;
        verify = oscard[golfie];
        verify = report.bind(entity)(verify);
        verify = verify.jsx;
        var _closure1_slot4 = verify;
        golfie = oscard[golfie];
        golfie = report.bind(entity)(golfie);
        golfie = golfie.jsxs;
        var _closure1_slot5 = golfie;
        golfie = 3;
        golfie = oscard[golfie];
        verify = report.bind(entity)(golfie);
        golfie = verify.isAndroid;
        golfie = golfie.bind(verify)();
        offset = 16;
        if(!golfie) { _fun00002_ip = 169; continue _fun00001 }
 167:
        offset = 0;
 169:
        golfie = option.create;
        tangon = {};
        verify = {'flexDirection': 'row', 'alignItems': 'center'};
        tangon['volumerSlider'] = verify;
        verify = {};
        verify['marginRight'] = offset;
        tangon['leftIcon'] = verify;
        verify = {};
        verify['marginLeft'] = offset;
        tangon['rightIcon'] = verify;
        verify = {'flex': 1, 'marginVertical': 4294967286, 'backgroundColor': 'transparent'};
        tangon['volumerSliderNative'] = verify;
        tangon = golfie.bind(option)(tangon);
        var _closure1_slot6 = tangon;
        tangon = 10;
        tangon = oscard[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.fileFinishedImporting;
        tangon = 'components_native/common/VolumeSlider.tsx';
        tangon = report.bind(oscard)(tangon);
        michal = function(argFoo) { // Original name: _default
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = argFoo;
                oscard = entity.style;
                foxtra = entity.minTrackColor;
                tangon = undefined;
                if(!(foxtra === tangon)) { _fun00004_ip = 58; continue _fun00003 }
 24:
                zuuluu = _closure1_slot1;
                report = _closure1_slot2;
                michal = 4;
                michal = report[michal];
                michal = zuuluu.bind(tangon)(michal);
                michal = michal.unsafe_rawColors;
                foxtra = michal.BRAND_500;
 58:
                yankee = entity.maxTrackTintColor;
                if(!(yankee === tangon)) { _fun00004_ip = 102; continue _fun00003 }
 68:
                zuuluu = _closure1_slot1;
                report = _closure1_slot2;
                michal = 4;
                michal = report[michal];
                michal = zuuluu.bind(tangon)(michal);
                michal = michal.unsafe_rawColors;
                yankee = michal.PRIMARY_400;
 102:
                echoed = entity.value;
                backup = entity.maxVolume;
                if(!(backup === tangon)) { _fun00004_ip = 120; continue _fun00003 }
 117:
                backup = 200;
 120:
                michal = entity.onValueChange;
                var _closure2_slot0 = michal;
                offset = entity.onResponderGrant;
                zuuluu = _closure1_slot5;
                michal = _closure1_slot3;
                entity = {};
                report = _closure1_slot6;
                golfie = report.volumerSlider;
                report = new Array(2);
                report[0] = golfie;
                report[1] = oscard;
                entity['style'] = report;
                option = _closure1_slot4;
                kiloes = _closure1_slot0;
                sizing = _closure1_slot2;
                report = 5;
                report = sizing[report];
                report = kiloes.bind(tangon)(report);
                oscard = report.VoiceXIcon;
                report = {};
                golfie = _closure1_slot6;
                golfie = golfie.leftIcon;
                report['style'] = golfie;
                oscard = option.bind(tangon)(oscard, report);
                report = new Array(3);
                report[0] = oscard;
                golfie = _closure1_slot1;
                oscard = 6;
                oscard = sizing[oscard];
                golfie = golfie.bind(tangon)(oscard);
                oscard = {};
                output = _closure1_slot6;
                output = output.volumerSliderNative;
                oscard['style'] = output;
                output = 7;
                output = sizing[output];
                result = kiloes.bind(tangon)(output);
                output = result.amplitudeToPerceptual;
                output = output.bind(result)(echoed);
                oscard['value'] = output;
                output = 0;
                oscard['minimumValue'] = output;
                oscard['maximumValue'] = backup;
                oscard['minimumTrackTintColor'] = foxtra;
                oscard['maximumTrackTintColor'] = yankee;
                yankee = 8;
                foxtra = sizing[yankee];
                foxtra = kiloes.bind(tangon)(foxtra);
                backup = foxtra.intl;
                foxtra = backup.string;
                yankee = sizing[yankee];
                yankee = kiloes.bind(tangon)(yankee);
                yankee = yankee.t;
                yankee = yankee.xPHVBg;
                yankee = foxtra.bind(backup)(yankee);
                oscard['accessibilityLabel'] = yankee;
                yankee = function(argFoo) { // Original name: onValueChange
                    zuuluu = _closure2_slot0;
                    tangon = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 7;
                    entity = michal[entity];
                    michal = undefined;
                    report = tangon.bind(michal)(entity);
                    tangon = report.perceptualToAmplitude;
                    entity = argFoo;
                    entity = tangon.bind(report)(entity);
                    entity = zuuluu.bind(michal)(entity);
                    return entity;
                };
                oscard['onValueChange'] = yankee;
                yankee = null;
                if(!(yankee == offset)) { _fun00004_ip = 425; continue _fun00003 }
 383:
                foxtra = _closure1_slot0;
                backup = _closure1_slot2;
                yankee = 3;
                yankee = backup[yankee];
                foxtra = foxtra.bind(tangon)(yankee);
                yankee = foxtra.isAndroid;
                foxtra = yankee.bind(foxtra)();
                yankee = undefined;
                if(!foxtra) { _fun00004_ip = 422; continue _fun00003 }
 417:
                yankee = function() {
                    entity = true;
                    return entity;
                };
 422:
                offset = yankee;
 425:
                oscard['onResponderGrant'] = offset;
                oscard = option.bind(tangon)(golfie, oscard);
                report[1] = oscard;
                option = _closure1_slot4;
                golfie = _closure1_slot0;
                offset = _closure1_slot2;
                oscard = 9;
                oscard = offset[oscard];
                oscard = golfie.bind(tangon)(oscard);
                golfie = oscard.VoiceNormalIcon;
                oscard = {};
                verify = _closure1_slot6;
                verify = verify.rightIcon;
                oscard['style'] = verify;
                oscard = option.bind(tangon)(golfie, oscard);
                report[2] = oscard;
                entity['children'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            }
        };
        zuuluu['default'] = michal;
        return entity;
    }
})();