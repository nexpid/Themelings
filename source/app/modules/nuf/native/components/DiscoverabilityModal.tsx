// app/modules/nuf/native/components/DiscoverabilityModal.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    foxtra = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = foxtra;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: DiscoverabilityLandingScene
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 9;
            zuuluu = oscard[zuuluu];
            tangon = undefined;
            golfie = report.bind(tangon)(zuuluu);
            zuuluu = golfie.useNavigation;
            yankee = zuuluu.bind(golfie)();
            var _closure2_slot0 = yankee;
            zuuluu = 10;
            zuuluu = oscard[zuuluu];
            golfie = report.bind(tangon)(zuuluu);
            oscard = golfie.useStateFromStores;
            zuuluu = _closure1_slot6;
            report = new Array(1);
            report[0] = zuuluu;
            zuuluu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure1_slot6;
                    entity = michal.getCurrentUser;
                    michal = entity.bind(michal)();
                    entity = null;
                    zuuluu = entity == michal;
                    entity = undefined;
                    if(zuuluu) { _fun00004_ip = 33; continue _fun00003 }
 27:
                    entity = michal.phone;
 33:
                    return entity;
                }
            };
            offset = oscard.bind(golfie)(report, zuuluu);
            var _closure2_slot1 = offset;
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.bind(tangon)();
            option = zuuluu.allowPhone;
            var _closure2_slot2 = option;
            verify = zuuluu.allowEmail;
            var _closure2_slot3 = verify;
            golfie = option;
            if(golfie) { _fun00002_ip = 124; continue _fun00001 }
 121:
            golfie = verify;
 124:
            var _closure2_slot4 = golfie;
            oscard = _closure1_slot3;
            report = oscard.useCallback;
            zuuluu = new Array(5);
            zuuluu[0] = yankee;
            zuuluu[1] = offset;
            zuuluu[2] = verify;
            zuuluu[3] = option;
            zuuluu[4] = golfie;
            michal = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 11;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    oscard = tangon.bind(entity)(zuuluu);
                    report = oscard.updateDiscoverability;
                    tangon = {};
                    golfie = _closure2_slot2;
                    tangon['phone'] = golfie;
                    golfie = _closure2_slot3;
                    tangon['email'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    tangon = _closure2_slot4;
                    if(!tangon) { _fun00006_ip = 83; continue _fun00005 }
 66:
                    report = _closure2_slot1;
                    tangon = null;
                    if(!(tangon != report)) { _fun00006_ip = 83; continue _fun00005 }
 76:
                    tangon = _closure2_slot2;
                    if(tangon) { _fun00006_ip = 118; continue _fun00005 }
 83:
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 13;
                    tangon = oscard[tangon];
                    oscard = report.bind(entity)(tangon);
                    report = oscard.closeDiscoverabilityModal;
                    tangon = false;
                    tangon = report.bind(oscard)(tangon);
                    _fun00006_ip = 164; continue _fun00005;
 118:
                    tangon = _closure2_slot0;
                    zuuluu = tangon.push;
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    michal = 12;
                    michal = oscard[michal];
                    michal = report.bind(entity)(michal);
                    michal = michal.DiscoverabilityScenes;
                    michal = michal.NAME;
                    michal = zuuluu.bind(tangon)(michal);
 164:
                    return entity;
                }
            };
            report = report.bind(oscard)(michal, zuuluu);
            zuuluu = _closure1_slot7;
            michal = _closure1_slot1;
            oscard = _closure1_slot2;
            entity = 14;
            entity = oscard[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            entity['onNext'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: DiscoverabilityNameScene
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = _closure1_slot8;
            tangon = undefined;
            oscard = michal.bind(tangon)();
            michal = _closure1_slot5;
            michal = michal.bind(tangon)();
            verify = michal.name;
            michal = michal.allowPhone;
            var _closure2_slot0 = michal;
            option = _closure1_slot3;
            golfie = option.useEffect;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = _closure2_slot0;
                    if(entity) { _fun00010_ip = 48; continue _fun00009 }
 10:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 13;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.closeDiscoverabilityModal;
                    entity = false;
                    entity = michal.bind(zuuluu)(entity);
 48:
                    entity = undefined;
                    return entity;
                }
            };
            michal = golfie.bind(option)(michal, zuuluu);
            golfie = _closure1_slot3;
            zuuluu = golfie.useCallback;
            michal = function(argFoo) {
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 13;
                report = tangon[michal];
                entity = undefined;
                golfie = zuuluu.bind(entity)(report);
                oscard = golfie.startContactSyncForDiscoverability;
                report = argFoo;
                report = oscard.bind(golfie)(report);
                michal = tangon[michal];
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.closeDiscoverabilityModal;
                michal = false;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity = new Array(0);
            option = zuuluu.bind(golfie)(michal, entity);
            zuuluu = _closure1_slot7;
            michal = _closure1_slot4;
            entity = {};
            oscard = oscard.container;
            entity['style'] = oscard;
            golfie = _closure1_slot7;
            oscard = _closure1_slot1;
            offset = _closure1_slot2;
            report = 15;
            report = offset[report];
            oscard = oscard.bind(tangon)(report);
            report = {};
            report['onNext'] = option;
            option = false;
            report['loading'] = option;
            option = null;
            offset = option != verify;
            option = '';
            if(!offset) { _fun00008_ip = 167; continue _fun00007 }
 164:
            option = verify;
 167:
            report['initialName'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    michal = function() { // Original name: DiscoverabilityModal
        tangon = _closure1_slot7;
        option = _closure1_slot0;
        verify = _closure1_slot2;
        entity = 17;
        entity = verify[entity];
        zuuluu = undefined;
        entity = option.bind(zuuluu)(entity);
        michal = entity.Navigator;
        entity = {};
        offset = _closure1_slot3;
        golfie = offset.useMemo;
        oscard = function() {
            michal = function() { // Original name: getScreens
                entity = {};
                golfie = _closure1_slot0;
                option = _closure1_slot2;
                michal = 12;
                zuuluu = option[michal];
                oscard = undefined;
                zuuluu = golfie.bind(oscard)(zuuluu);
                zuuluu = zuuluu.DiscoverabilityScenes;
                verify = zuuluu.LANDING;
                zuuluu = {'ignoreKeyboard': true, 'impressionName': null, 'fullscreen': true};
                report = 16;
                offset = option[report];
                offset = golfie.bind(oscard)(offset);
                offset = offset.ImpressionNames;
                offset = offset.DISCOVERABILITY;
                zuuluu['impressionName'] = offset;
                offset = function() { // Original name: headerLeft
                    entity = null;
                    return entity;
                };
                zuuluu['headerLeft'] = offset;
                offset = function() { // Original name: headerTitle
                    entity = null;
                    return entity;
                };
                zuuluu['headerTitle'] = offset;
                offset = function() { // Original name: render
                    tangon = _closure1_slot7;
                    zuuluu = _closure1_slot9;
                    michal = undefined;
                    entity = {};
                    entity = tangon.bind(michal)(zuuluu, entity);
                    return entity;
                };
                zuuluu['render'] = offset;
                entity[verify] = zuuluu;
                michal = option[michal];
                michal = golfie.bind(oscard)(michal);
                michal = michal.DiscoverabilityScenes;
                zuuluu = michal.NAME;
                michal = {'ignoreKeyboard': true, 'impressionName': null, 'fullscreen': true};
                report = option[report];
                report = golfie.bind(oscard)(report);
                report = report.ImpressionNames;
                report = report.DISCOVERABILITY;
                michal['impressionName'] = report;
                report = function() { // Original name: headerTitle
                    entity = null;
                    return entity;
                };
                michal['headerTitle'] = report;
                tangon = function() { // Original name: render
                    tangon = _closure1_slot7;
                    zuuluu = _closure1_slot10;
                    michal = undefined;
                    entity = {};
                    entity = tangon.bind(michal)(zuuluu, entity);
                    return entity;
                };
                michal['render'] = tangon;
                entity[zuuluu] = michal;
                return entity;
            };
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        };
        report = new Array(0);
        report = golfie.bind(offset)(oscard, report);
        entity['screens'] = report;
        report = 12;
        report = verify[report];
        report = option.bind(zuuluu)(report);
        report = report.DiscoverabilityScenes;
        report = report.LANDING;
        entity['initialRouteName'] = report;
        report = 18;
        oscard = verify[report];
        oscard = option.bind(zuuluu)(oscard);
        golfie = oscard.intl;
        oscard = golfie.string;
        report = verify[report];
        report = option.bind(zuuluu)(report);
        report = report.t;
        report = report.13/7kZ;
        report = oscard.bind(golfie)(report);
        entity['headerBackTitle'] = report;
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.useContactSyncModalStore;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = foxtra.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.ModalAnimation;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot7 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    offset = report.bind(entity)(tangon);
    verify = offset.createStyles;
    tangon = {};
    yankee = {};
    romeon = 7;
    backup = oscard[romeon];
    backup = foxtra.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.HEADER_PRIMARY;
    yankee['color'] = backup;
    tangon['backButton'] = yankee;
    yankee = {'flex': 1, 'backgroundColor': null, 'justifyContent': 'center', 'paddingBottom': 44};
    romeon = oscard[romeon];
    romeon = foxtra.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.BACKGROUND_PRIMARY;
    yankee['backgroundColor'] = romeon;
    romeon = 8;
    romeon = oscard[romeon];
    romeon = report.bind(entity)(romeon);
    foxtra = romeon.NAV_BAR_HEIGHT;
    romeon = 32;
    romeon = foxtra + romeon;
    yankee['paddingTop'] = romeon;
    tangon['container'] = yankee;
    tangon = verify.bind(offset)(tangon);
    var _closure1_slot8 = tangon;
    tangon = {};
    golfie = golfie.SLIDE_IN_OUT;
    tangon['animation'] = golfie;
    michal['modalConfig'] = tangon;
    tangon = 19;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/nuf/native/components/DiscoverabilityModal.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();