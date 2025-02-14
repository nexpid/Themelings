// app/modules/nuf/native/components/DiscoverabilityModal.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    foxtrot = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = foxtrot;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: DiscoverabilityLandingScene
        _fun93930: for(var _fun93930_ip = 0; ; ) switch(_fun93930_ip) {
 0:
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            zulu = 9;
            zulu = oscar[zulu];
            tango = undefined;
            golf = report.bind(tango)(zulu);
            zulu = golf.useNavigation;
            yankee = zulu.bind(golf)();
            var _closure2_slot0 = yankee;
            zulu = 10;
            zulu = oscar[zulu];
            golf = report.bind(tango)(zulu);
            oscar = golf.useStateFromStores;
            zulu = _closure1_slot6;
            report = new Array(1);
            report[0] = zulu;
            zulu = function() {
                _fun93931: for(var _fun93931_ip = 0; ; ) switch(_fun93931_ip) {
 0:
                    mike = _closure1_slot6;
                    entity = mike.getCurrentUser;
                    mike = entity.bind(mike)();
                    entity = null;
                    zulu = entity == mike;
                    entity = undefined;
                    if(zulu) { _fun93931_ip = 33; continue _fun93931 }
 27:
                    entity = mike.phone;
 33:
                    return entity;
                }
            };
            offset = oscar.bind(golf)(report, zulu);
            var _closure2_slot1 = offset;
            zulu = _closure1_slot5;
            zulu = zulu.bind(tango)();
            options = zulu.allowPhone;
            var _closure2_slot2 = options;
            verify = zulu.allowEmail;
            var _closure2_slot3 = verify;
            golf = options;
            if(golf) { _fun93930_ip = 124; continue _fun93930 }
 121:
            golf = verify;
 124:
            var _closure2_slot4 = golf;
            oscar = _closure1_slot3;
            report = oscar.useCallback;
            zulu = new Array(5);
            zulu[0] = yankee;
            zulu[1] = offset;
            zulu[2] = verify;
            zulu[3] = options;
            zulu[4] = golf;
            mike = function() {
                _fun93932: for(var _fun93932_ip = 0; ; ) switch(_fun93932_ip) {
 0:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    entity = 11;
                    zulu = zulu[entity];
                    entity = undefined;
                    oscar = tango.bind(entity)(zulu);
                    report = oscar.updateDiscoverability;
                    tango = {};
                    golf = _closure2_slot2;
                    tango['phone'] = golf;
                    golf = _closure2_slot3;
                    tango['email'] = golf;
                    tango = report.bind(oscar)(tango);
                    tango = _closure2_slot4;
                    if(!tango) { _fun93932_ip = 83; continue _fun93932 }
 66:
                    report = _closure2_slot1;
                    tango = null;
                    if(!(tango != report)) { _fun93932_ip = 83; continue _fun93932 }
 76:
                    tango = _closure2_slot2;
                    if(tango) { _fun93932_ip = 118; continue _fun93932 }
 83:
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    tango = 13;
                    tango = oscar[tango];
                    oscar = report.bind(entity)(tango);
                    report = oscar.closeDiscoverabilityModal;
                    tango = false;
                    tango = report.bind(oscar)(tango);
                    _fun93932_ip = 164; continue _fun93932;
 118:
                    tango = _closure2_slot0;
                    zulu = tango.push;
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    mike = 12;
                    mike = oscar[mike];
                    mike = report.bind(entity)(mike);
                    mike = mike.DiscoverabilityScenes;
                    mike = mike.NAME;
                    mike = zulu.bind(tango)(mike);
 164:
                    return entity;
                }
            };
            report = report.bind(oscar)(mike, zulu);
            zulu = _closure1_slot7;
            mike = _closure1_slot1;
            oscar = _closure1_slot2;
            entity = 14;
            entity = oscar[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            entity['onNext'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: DiscoverabilityNameScene
        _fun93933: for(var _fun93933_ip = 0; ; ) switch(_fun93933_ip) {
 0:
            mike = _closure1_slot8;
            tango = undefined;
            oscar = mike.bind(tango)();
            mike = _closure1_slot5;
            mike = mike.bind(tango)();
            verify = mike.name;
            mike = mike.allowPhone;
            var _closure2_slot0 = mike;
            options = _closure1_slot3;
            golf = options.useEffect;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                _fun93934: for(var _fun93934_ip = 0; ; ) switch(_fun93934_ip) {
 0:
                    entity = _closure2_slot0;
                    if(entity) { _fun93934_ip = 48; continue _fun93934 }
 10:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 13;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.closeDiscoverabilityModal;
                    entity = false;
                    entity = mike.bind(zulu)(entity);
 48:
                    entity = undefined;
                    return entity;
                }
            };
            mike = golf.bind(options)(mike, zulu);
            golf = _closure1_slot3;
            zulu = golf.useCallback;
            mike = function(argFoo) {
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                mike = 13;
                report = tango[mike];
                entity = undefined;
                golf = zulu.bind(entity)(report);
                oscar = golf.startContactSyncForDiscoverability;
                report = argFoo;
                report = oscar.bind(golf)(report);
                mike = tango[mike];
                tango = zulu.bind(entity)(mike);
                zulu = tango.closeDiscoverabilityModal;
                mike = false;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity = new Array(0);
            options = zulu.bind(golf)(mike, entity);
            zulu = _closure1_slot7;
            mike = _closure1_slot4;
            entity = {};
            oscar = oscar.container;
            entity['style'] = oscar;
            golf = _closure1_slot7;
            oscar = _closure1_slot1;
            offset = _closure1_slot2;
            report = 15;
            report = offset[report];
            oscar = oscar.bind(tango)(report);
            report = {};
            report['onNext'] = options;
            options = false;
            report['loading'] = options;
            options = null;
            offset = options != verify;
            options = '';
            if(!offset) { _fun93933_ip = 167; continue _fun93933 }
 164:
            options = verify;
 167:
            report['initialName'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    mike = function() { // Original name: DiscoverabilityModal
        tango = _closure1_slot7;
        options = _closure1_slot0;
        verify = _closure1_slot2;
        entity = 17;
        entity = verify[entity];
        zulu = undefined;
        entity = options.bind(zulu)(entity);
        mike = entity.Navigator;
        entity = {};
        offset = _closure1_slot3;
        golf = offset.useMemo;
        oscar = function() {
            mike = function() { // Original name: getScreens
                entity = {};
                golf = _closure1_slot0;
                options = _closure1_slot2;
                mike = 12;
                zulu = options[mike];
                oscar = undefined;
                zulu = golf.bind(oscar)(zulu);
                zulu = zulu.DiscoverabilityScenes;
                verify = zulu.LANDING;
                zulu = {'ignoreKeyboard': true, 'impressionName': null, 'fullscreen': true};
                report = 16;
                offset = options[report];
                offset = golf.bind(oscar)(offset);
                offset = offset.ImpressionNames;
                offset = offset.DISCOVERABILITY;
                zulu['impressionName'] = offset;
                offset = function() { // Original name: headerLeft
                    entity = null;
                    return entity;
                };
                zulu['headerLeft'] = offset;
                offset = function() { // Original name: headerTitle
                    entity = null;
                    return entity;
                };
                zulu['headerTitle'] = offset;
                offset = function() { // Original name: render
                    tango = _closure1_slot7;
                    zulu = _closure1_slot9;
                    mike = undefined;
                    entity = {};
                    entity = tango.bind(mike)(zulu, entity);
                    return entity;
                };
                zulu['render'] = offset;
                entity[verify] = zulu;
                mike = options[mike];
                mike = golf.bind(oscar)(mike);
                mike = mike.DiscoverabilityScenes;
                zulu = mike.NAME;
                mike = {'ignoreKeyboard': true, 'impressionName': null, 'fullscreen': true};
                report = options[report];
                report = golf.bind(oscar)(report);
                report = report.ImpressionNames;
                report = report.DISCOVERABILITY;
                mike['impressionName'] = report;
                report = function() { // Original name: headerTitle
                    entity = null;
                    return entity;
                };
                mike['headerTitle'] = report;
                tango = function() { // Original name: render
                    tango = _closure1_slot7;
                    zulu = _closure1_slot10;
                    mike = undefined;
                    entity = {};
                    entity = tango.bind(mike)(zulu, entity);
                    return entity;
                };
                mike['render'] = tango;
                entity[zulu] = mike;
                return entity;
            };
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        };
        report = new Array(0);
        report = golf.bind(offset)(oscar, report);
        entity['screens'] = report;
        report = 12;
        report = verify[report];
        report = options.bind(zulu)(report);
        report = report.DiscoverabilityScenes;
        report = report.LANDING;
        entity['initialRouteName'] = report;
        report = 18;
        oscar = verify[report];
        oscar = options.bind(zulu)(oscar);
        golf = oscar.intl;
        oscar = golf.string;
        report = verify[report];
        report = options.bind(zulu)(report);
        report = report.t;
        report = report.13/7kZ;
        report = oscar.bind(golf)(report);
        entity['headerBackTitle'] = report;
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.useContactSyncModalStore;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.ModalAnimation;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot7 = tango;
    tango = 6;
    tango = oscar[tango];
    offset = report.bind(entity)(tango);
    verify = offset.createStyles;
    tango = {};
    yankee = {};
    romeo = 7;
    backup = oscar[romeo];
    backup = foxtrot.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.HEADER_PRIMARY;
    yankee['color'] = backup;
    tango['backButton'] = yankee;
    yankee = {'flex': 1, 'backgroundColor': null, 'justifyContent': 'center', 'paddingBottom': 44};
    romeo = oscar[romeo];
    romeo = foxtrot.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.BACKGROUND_PRIMARY;
    yankee['backgroundColor'] = romeo;
    romeo = 8;
    romeo = oscar[romeo];
    romeo = report.bind(entity)(romeo);
    foxtrot = romeo.NAV_BAR_HEIGHT;
    romeo = 32;
    romeo = foxtrot + romeo;
    yankee['paddingTop'] = romeo;
    tango['container'] = yankee;
    tango = verify.bind(offset)(tango);
    var _closure1_slot8 = tango;
    tango = {};
    golf = golf.SLIDE_IN_OUT;
    tango['animation'] = golf;
    mike['modalConfig'] = tango;
    tango = 19;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/nuf/native/components/DiscoverabilityModal.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();