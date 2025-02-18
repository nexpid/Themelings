// app/modules/media_keyboard/native/components/MediaKeyboardLimitedPickerNotice.tsx
export default (function(argFoo, argBar, _, argCor, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function() { // Original name: handleLimitedPickerPress
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = _closure1_slot3;
            michal = entity.NativePermissionManager;
            tangon = null;
            entity = tangon == michal;
            if(entity) { _fun00002_ip = 32; continue _fun00001 }
 22:
            zuuluu = michal.presentLimitedLibraryPicker;
            entity = tangon == zuuluu;
 32:
            if(entity) { _fun00002_ip = 45; continue _fun00001 }
 35:
            entity = michal.presentLimitedLibraryPicker;
            entity = entity.bind(michal)();
 45:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot8 = entity;
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
    yankee = 1;
    tangon = oscard[yankee];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.NativeModules;
    var _closure1_slot3 = golfie;
    tangon = tangon.View;
    var _closure1_slot4 = tangon;
    tangon = 2;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot5 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    offset = 16;
    verify = {'flexDirection': 'row', 'paddingHorizontal': 16, 'paddingVertical': 16, 'alignItems': 'center'};
    tangon['container'] = verify;
    verify = {};
    romeon = 'absolute';
    verify['position'] = romeon;
    tangon['absoluteContainer'] = verify;
    verify = {};
    verify['flex'] = yankee;
    tangon['text'] = verify;
    verify = {};
    verify['marginLeft'] = offset;
    tangon['button'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/media_keyboard/native/components/MediaKeyboardLimitedPickerNotice.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: MediaKeyboardLimitedPickerNotice
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            option = michal.onHeightChange;
            var _closure2_slot0 = option;
            michal = _closure1_slot7;
            tangon = undefined;
            verify = michal.bind(tangon)();
            report = _closure1_slot2;
            zuuluu = report.useCallback;
            michal = new Array(1);
            michal[0] = option;
            entity = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00006_ip = 43; continue _fun00005 }
 13:
                    zuuluu = _closure2_slot0;
                    entity = argFoo;
                    entity = entity.nativeEvent;
                    entity = entity.layout;
                    michal = entity.height;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
 43:
                    entity = undefined;
                    return entity;
                }
            };
            report = zuuluu.bind(report)(entity, michal);
            zuuluu = _closure1_slot6;
            michal = _closure1_slot4;
            entity = {};
            golfie = verify.container;
            oscard = new Array(2);
            oscard[0] = golfie;
            golfie = null;
            option = golfie != option;
            golfie = undefined;
            if(!option) { _fun00004_ip = 98; continue _fun00003 }
 92:
            golfie = verify.absoluteContainer;
 98:
            oscard[1] = golfie;
            entity['style'] = oscard;
            entity['onLayout'] = report;
            option = _closure1_slot5;
            kiloes = _closure1_slot0;
            sizing = _closure1_slot1;
            report = 4;
            report = sizing[report];
            report = kiloes.bind(tangon)(report);
            oscard = report.Text;
            report = {};
            golfie = verify.text;
            report['style'] = golfie;
            golfie = 'text-sm/normal';
            report['variant'] = golfie;
            romeon = 5;
            golfie = sizing[romeon];
            golfie = kiloes.bind(tangon)(golfie);
            foxtra = golfie.intl;
            offset = foxtra.string;
            golfie = sizing[romeon];
            golfie = kiloes.bind(tangon)(golfie);
            golfie = golfie.t;
            golfie = golfie.5g7NcH;
            golfie = offset.bind(foxtra)(golfie);
            report['children'] = golfie;
            oscard = option.bind(tangon)(oscard, report);
            report = new Array(2);
            report[0] = oscard;
            golfie = _closure1_slot4;
            oscard = {};
            verify = verify.button;
            oscard['style'] = verify;
            verify = 6;
            verify = sizing[verify];
            verify = kiloes.bind(tangon)(verify);
            offset = verify.Button;
            verify = {'size': 'sm', 'variant': 'tertiary'};
            foxtra = sizing[romeon];
            foxtra = kiloes.bind(tangon)(foxtra);
            backup = foxtra.intl;
            foxtra = backup.string;
            romeon = sizing[romeon];
            romeon = kiloes.bind(tangon)(romeon);
            romeon = romeon.t;
            romeon = romeon.JuXTi4;
            romeon = foxtra.bind(backup)(romeon);
            verify['text'] = romeon;
            yankee = _closure1_slot8;
            verify['onPress'] = yankee;
            verify = option.bind(tangon)(offset, verify);
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();