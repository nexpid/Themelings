// app/components_native/common/VolumeSlider.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    _fun80832: for(var _fun80832_ip = 0; ; ) switch(_fun80832_ip) {
 0:
        report = argBar;
        zulu = argFred;
        oscar = argPlugh;
        var _closure1_slot0 = report;
        entity = argBaz;
        var _closure1_slot1 = entity;
        var _closure1_slot2 = oscar;
        entity = global;
        options = entity.Object;
        golf = options.defineProperty;
        tango = {};
        entity = true;
        tango['value'] = entity;
        entity = '__esModule';
        entity = golf.bind(options)(zulu, entity, tango);
        tango = 0;
        options = oscar[tango];
        golf = argCorge;
        entity = undefined;
        golf = golf.bind(entity)(options);
        golf = 1;
        golf = oscar[golf];
        golf = report.bind(entity)(golf);
        options = golf.View;
        var _closure1_slot3 = options;
        options = golf.StyleSheet;
        golf = 2;
        verify = oscar[golf];
        verify = report.bind(entity)(verify);
        verify = verify.jsx;
        var _closure1_slot4 = verify;
        golf = oscar[golf];
        golf = report.bind(entity)(golf);
        golf = golf.jsxs;
        var _closure1_slot5 = golf;
        golf = 3;
        golf = oscar[golf];
        verify = report.bind(entity)(golf);
        golf = verify.isAndroid;
        golf = golf.bind(verify)();
        offset = 16;
        if(!golf) { _fun80832_ip = 169; continue _fun80832 }
 167:
        offset = 0;
 169:
        golf = options.create;
        tango = {};
        verify = {'flexDirection': 'row', 'alignItems': 'center'};
        tango['volumerSlider'] = verify;
        verify = {};
        verify['marginRight'] = offset;
        tango['leftIcon'] = verify;
        verify = {};
        verify['marginLeft'] = offset;
        tango['rightIcon'] = verify;
        verify = {'flex': 1, 'marginVertical': 4294967286, 'backgroundColor': 'transparent'};
        tango['volumerSliderNative'] = verify;
        tango = golf.bind(options)(tango);
        var _closure1_slot6 = tango;
        tango = 10;
        tango = oscar[tango];
        oscar = report.bind(entity)(tango);
        report = oscar.fileFinishedImporting;
        tango = 'components_native/common/VolumeSlider.tsx';
        tango = report.bind(oscar)(tango);
        mike = function(argFoo) { // Original name: _default
            _fun80833: for(var _fun80833_ip = 0; ; ) switch(_fun80833_ip) {
 0:
                entity = argFoo;
                oscar = entity.style;
                foxtrot = entity.minTrackColor;
                tango = undefined;
                if(!(foxtrot === tango)) { _fun80833_ip = 58; continue _fun80833 }
 24:
                zulu = _closure1_slot1;
                report = _closure1_slot2;
                mike = 4;
                mike = report[mike];
                mike = zulu.bind(tango)(mike);
                mike = mike.unsafe_rawColors;
                foxtrot = mike.BRAND_500;
 58:
                yankee = entity.maxTrackTintColor;
                if(!(yankee === tango)) { _fun80833_ip = 102; continue _fun80833 }
 68:
                zulu = _closure1_slot1;
                report = _closure1_slot2;
                mike = 4;
                mike = report[mike];
                mike = zulu.bind(tango)(mike);
                mike = mike.unsafe_rawColors;
                yankee = mike.PRIMARY_400;
 102:
                echo = entity.value;
                backup = entity.maxVolume;
                if(!(backup === tango)) { _fun80833_ip = 120; continue _fun80833 }
 117:
                backup = 200;
 120:
                mike = entity.onValueChange;
                var _closure2_slot0 = mike;
                offset = entity.onResponderGrant;
                zulu = _closure1_slot5;
                mike = _closure1_slot3;
                entity = {};
                report = _closure1_slot6;
                golf = report.volumerSlider;
                report = new Array(2);
                report[0] = golf;
                report[1] = oscar;
                entity['style'] = report;
                options = _closure1_slot4;
                kilo = _closure1_slot0;
                sizing = _closure1_slot2;
                report = 5;
                report = sizing[report];
                report = kilo.bind(tango)(report);
                oscar = report.VoiceXIcon;
                report = {};
                golf = _closure1_slot6;
                golf = golf.leftIcon;
                report['style'] = golf;
                oscar = options.bind(tango)(oscar, report);
                report = new Array(3);
                report[0] = oscar;
                golf = _closure1_slot1;
                oscar = 6;
                oscar = sizing[oscar];
                golf = golf.bind(tango)(oscar);
                oscar = {};
                output = _closure1_slot6;
                output = output.volumerSliderNative;
                oscar['style'] = output;
                output = 7;
                output = sizing[output];
                result = kilo.bind(tango)(output);
                output = result.amplitudeToPerceptual;
                output = output.bind(result)(echo);
                oscar['value'] = output;
                output = 0;
                oscar['minimumValue'] = output;
                oscar['maximumValue'] = backup;
                oscar['minimumTrackTintColor'] = foxtrot;
                oscar['maximumTrackTintColor'] = yankee;
                yankee = 8;
                foxtrot = sizing[yankee];
                foxtrot = kilo.bind(tango)(foxtrot);
                backup = foxtrot.intl;
                foxtrot = backup.string;
                yankee = sizing[yankee];
                yankee = kilo.bind(tango)(yankee);
                yankee = yankee.t;
                yankee = yankee.xPHVBg;
                yankee = foxtrot.bind(backup)(yankee);
                oscar['accessibilityLabel'] = yankee;
                yankee = function(argFoo) { // Original name: onValueChange
                    zulu = _closure2_slot0;
                    tango = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 7;
                    entity = mike[entity];
                    mike = undefined;
                    report = tango.bind(mike)(entity);
                    tango = report.perceptualToAmplitude;
                    entity = argFoo;
                    entity = tango.bind(report)(entity);
                    entity = zulu.bind(mike)(entity);
                    return entity;
                };
                oscar['onValueChange'] = yankee;
                yankee = null;
                if(!(yankee == offset)) { _fun80833_ip = 429; continue _fun80833 }
 385:
                foxtrot = _closure1_slot0;
                backup = _closure1_slot2;
                yankee = 3;
                yankee = backup[yankee];
                foxtrot = foxtrot.bind(tango)(yankee);
                yankee = foxtrot.isAndroid;
                foxtrot = yankee.bind(foxtrot)();
                yankee = undefined;
                if(!foxtrot) { _fun80833_ip = 426; continue _fun80833 }
 419:
                yankee = function() {
                    entity = true;
                    return entity;
                };
 426:
                offset = yankee;
 429:
                oscar['onResponderGrant'] = offset;
                oscar = options.bind(tango)(golf, oscar);
                report[1] = oscar;
                options = _closure1_slot4;
                golf = _closure1_slot0;
                offset = _closure1_slot2;
                oscar = 9;
                oscar = offset[oscar];
                oscar = golf.bind(tango)(oscar);
                golf = oscar.VoiceNormalIcon;
                oscar = {};
                verify = _closure1_slot6;
                verify = verify.rightIcon;
                oscar['style'] = verify;
                oscar = options.bind(tango)(golf, oscar);
                report[2] = oscar;
                entity['children'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        zulu['default'] = mike;
        return entity;
    }
})();