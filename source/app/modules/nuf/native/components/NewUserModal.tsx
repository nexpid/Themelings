// app/modules/nuf/native/components/NewUserModal.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = yankee.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.BackHandler;
    var _closure1_slot5 = golf;
    golf = tango.InteractionManager;
    var _closure1_slot6 = golf;
    tango = tango.NativeModules;
    var _closure1_slot7 = tango;
    tango = 3;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot8 = golf;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.Fragment;
    var _closure1_slot9 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot10 = tango;
    tango = 4;
    tango = oscar[tango];
    golf = report.bind(entity)(tango);
    tango = golf.createNativeStackNavigator;
    tango = tango.bind(golf)();
    var _closure1_slot11 = tango;
    tango = 5;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'borderBottomWidth': 0, 'backgroundColor': null, 'shadowColor': 'transparent'};
    offset = 6;
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.BACKGROUND_PRIMARY;
    verify['backgroundColor'] = offset;
    tango['header'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot12 = tango;
    tango = 24;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/nuf/native/components/NewUserModal.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: NewUserModal
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            golf = entity.initialRouteName;
            kilo = entity.initialOnboardingStepIndex;
            entity = _closure1_slot12;
            tango = undefined;
            entity = entity.bind(tango)();
            var _closure2_slot0 = entity;
            mike = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 10;
            oscar = zulu[entity];
            options = mike.bind(tango)(oscar);
            oscar = options.useNavigation;
            oscar = oscar.bind(options)();
            var _closure2_slot1 = oscar;
            oscar = zulu[entity];
            offset = mike.bind(tango)(oscar);
            options = offset.useNavigationState;
            oscar = function(argFoo) {
                entity = argFoo;
                entity = entity.index;
                return entity;
            };
            oscar = options.bind(offset)(oscar);
            var _closure2_slot2 = oscar;
            yankee = _closure1_slot4;
            oscar = yankee.useState;
            oscar = oscar.bind(yankee)(kilo);
            backup = _closure1_slot3;
            foxtrot = 2;
            options = backup.bind(tango)(oscar, foxtrot);
            romeo = 0;
            oscar = options[romeo];
            var _closure2_slot3 = oscar;
            offset = 1;
            options = options[offset];
            var _closure2_slot4 = options;
            options = yankee.useState;
            options = options.bind(yankee)(kilo);
            options = backup.bind(tango)(options, foxtrot);
            romeo = options[romeo];
            var _closure2_slot5 = romeo;
            options = options[offset];
            var _closure2_slot6 = options;
            options = yankee.useRef;
            options = options.bind(yankee)();
            var _closure2_slot7 = options;
            options = 11;
            options = zulu[options];
            offset = mike.bind(tango)(options);
            options = offset.useAccessibilityNativeStackOptions;
            options = options.bind(offset)();
            var _closure2_slot8 = options;
            offset = _closure1_slot1;
            options = 12;
            options = zulu[options];
            offset = offset.bind(tango)(options);
            options = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 13;
                    zulu = zulu[entity];
                    entity = undefined;
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.getRootNavigationRef;
                    report = zulu.bind(tango)();
                    zulu = null;
                    if(!(zulu != report)) { _fun00004_ip = 292; continue _fun00003 }
 44:
                    zulu = report.isReady;
                    zulu = zulu.bind(report)();
                    if(!zulu) { _fun00004_ip = 292; continue _fun00003 }
 60:
                    zulu = report.getRootState;
                    verify = zulu.bind(report)();
                    oscar = verify.routes;
                    tango = oscar.slice;
                    zulu = _closure2_slot2;
                    options = tango.bind(oscar)(zulu);
                    tango = report.dispatch;
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    zulu = 10;
                    zulu = yankee[zulu];
                    zulu = offset.bind(entity)(zulu);
                    golf = zulu.CommonActions;
                    oscar = golf.reset;
                    zulu = {};
                    output = zulu;
                    sizing = verify;
                    verify = copyDataProperties(output, sizing);
                    verify = 14;
                    verify = yankee[verify];
                    yankee = offset.bind(entity)(verify);
                    offset = yankee.wrapRouteForRootNavigator;
                    romeo = {};
                    verify = 'tabs';
                    romeo['name'] = verify;
                    verify = {};
                    backup = {};
                    foxtrot = 'messages';
                    backup['name'] = foxtrot;
                    foxtrot = new Array(1);
                    foxtrot[0] = backup;
                    verify['routes'] = foxtrot;
                    romeo['state'] = verify;
                    verify = new Array(1);
                    verify[0] = romeo;
                    sizing = offset.bind(yankee)(verify);
                    offset = new Array(0);
                    kilo = 0;
                    output = offset;
                    kilo = arraySpread(output, sizing, kilo);
                    output = offset;
                    sizing = options;
                    verify = arraySpread(output, sizing, kilo);
                    verify = 'routes';
                    zulu[verify] = offset;
                    verify = options.length;
                    options = 'index';
                    zulu[options] = verify;
                    zulu = oscar.bind(golf)(zulu);
                    zulu = tango.bind(report)(zulu);
                    tango = _closure1_slot6;
                    zulu = tango.runAfterInteractions;
                    mike = function() {
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            tango = _closure2_slot1;
                            zulu = tango.setOptions;
                            mike = {};
                            oscar = _closure1_slot0;
                            report = _closure1_slot2;
                            entity = 15;
                            report = report[entity];
                            entity = undefined;
                            oscar = oscar.bind(entity)(report);
                            report = oscar.isAndroid;
                            oscar = report.bind(oscar)();
                            report = 'fade';
                            if(!oscar) { _fun00006_ip = 62; continue _fun00005 }
 56:
                            report = 'slide_from_left';
 62:
                            mike['animation'] = report;
                            mike = zulu.bind(tango)(mike);
                            return entity;
                        }
                    };
                    mike = zulu.bind(tango)(mike);
 292:
                    return entity;
                }
            };
            options = offset.bind(tango)(options);
            offset = yankee.useCallback;
            options = new Array(2);
            options[0] = romeo;
            options[1] = oscar;
            oscar = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    mike = argFoo;
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 16;
                    zulu = zulu[entity];
                    entity = undefined;
                    oscar = tango.bind(entity)(zulu);
                    report = oscar.getNextOnboardingStep;
                    zulu = null;
                    tango = zulu != mike;
                    if(!tango) { _fun00008_ip = 46; continue _fun00007 }
 43:
                    tango = mike;
 46:
                    zulu = _closure2_slot5;
                    mike = _closure2_slot3;
                    tango = report.bind(oscar)(tango, zulu, mike);
                    zulu = tango.then;
                    mike = function(argFoo) {
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            entity = argFoo;
                            oscar = entity.lastShownStepIndex;
                            report = entity.onboardingStepIndex;
                            zulu = entity.continueNavigation;
                            tango = _closure2_slot4;
                            entity = undefined;
                            tango = tango.bind(entity)(report);
                            tango = _closure2_slot6;
                            tango = tango.bind(entity)(oscar);
                            if(!zulu) { _fun00010_ip = 62; continue _fun00009 }
 47:
                            zulu = _closure2_slot7;
                            tango = zulu.current;
                            zulu = null;
                            if(!(zulu == tango)) { _fun00010_ip = 120; continue _fun00009 }
 62:
                            oscar = _closure1_slot1;
                            options = _closure1_slot2;
                            tango = 17;
                            tango = options[tango];
                            oscar = oscar.bind(entity)(tango);
                            tango = oscar.popWithKey;
                            golf = _closure1_slot0;
                            zulu = 18;
                            zulu = options[zulu];
                            zulu = golf.bind(entity)(zulu);
                            zulu = zulu.NEW_USER_MODAL_KEY;
                            zulu = tango.bind(oscar)(zulu);
                            _fun00010_ip = 164; continue _fun00009;
 120:
                            tango = _closure1_slot0;
                            oscar = _closure1_slot2;
                            zulu = 16;
                            zulu = oscar[zulu];
                            tango = tango.bind(entity)(zulu);
                            zulu = tango.continueToNextStep;
                            mike = _closure2_slot7;
                            mike = mike.current;
                            mike = zulu.bind(tango)(report, mike);
 164:
                            return entity;
                        }
                    };
                    mike = zulu.bind(tango)(mike);
                    return entity;
                }
            };
            offset = offset.bind(yankee)(oscar, options);
            var _closure2_slot9 = offset;
            entity = zulu[entity];
            zulu = mike.bind(tango)(entity);
            mike = zulu.useFocusEffect;
            options = yankee.useCallback;
            oscar = function() {
                report = _closure1_slot5;
                tango = report.addEventListener;
                zulu = 'hardwareBackPress';
                mike = function() {
                    entity = _closure1_slot7;
                    mike = entity.MinimizeApp;
                    entity = mike.minimizeApp;
                    entity = entity.bind(mike)();
                    entity = true;
                    return entity;
                };
                mike = tango.bind(report)(zulu, mike);
                var _closure3_slot0 = mike;
                entity = function() {
                    mike = _closure3_slot0;
                    entity = mike.remove;
                    entity = entity.bind(mike)();
                    return entity;
                };
                return entity;
            };
            entity = new Array(0);
            entity = options.bind(yankee)(oscar, entity);
            entity = mike.bind(zulu)(entity);
            zulu = _closure1_slot10;
            entity = _closure1_slot11;
            mike = entity.Navigator;
            entity = {};
            oscar = function(argFoo) { // Original name: screenOptions
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = argFoo;
                    tango = entity.navigation;
                    entity = _closure2_slot7;
                    entity['current'] = tango;
                    entity = {'headerStyle': null, 'headerShadowVisible': false, 'title': '', 'headerLeft': null, 'headerRight': null, 'fullScreenGestureEnabled': false};
                    tango = _closure2_slot0;
                    tango = tango.header;
                    entity['headerStyle'] = tango;
                    tango = function() { // Original name: headerLeft
                        tango = _closure1_slot8;
                        zulu = _closure1_slot9;
                        mike = undefined;
                        entity = {};
                        entity = tango.bind(mike)(zulu, entity);
                        return entity;
                    };
                    entity['headerLeft'] = tango;
                    zulu = function() { // Original name: headerRight
                        tango = _closure1_slot8;
                        zulu = _closure1_slot9;
                        mike = undefined;
                        entity = {};
                        entity = tango.bind(mike)(zulu, entity);
                        return entity;
                    };
                    entity['headerRight'] = zulu;
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 15;
                    tango = tango[zulu];
                    zulu = undefined;
                    tango = report.bind(zulu)(tango);
                    zulu = tango.isAndroid;
                    tango = zulu.bind(tango)();
                    zulu = 'card';
                    if(!tango) { _fun00012_ip = 126; continue _fun00011 }
 120:
                    zulu = 'transparentModal';
 126:
                    entity['presentation'] = zulu;
                    zulu = 'slide_from_right';
                    entity['animation'] = zulu;
                    oscar = _closure2_slot8;
                    golf = entity;
                    mike = copyDataProperties(golf, oscar);
                    return entity;
                }
            };
            entity['screenOptions'] = oscar;
            oscar = null;
            options = oscar != golf;
            romeo = 'choose-avatar';
            oscar = romeo;
            if(!options) { _fun00002_ip = 371; continue _fun00001 }
 368:
            oscar = golf;
 371:
            entity['initialRouteName'] = oscar;
            options = _closure1_slot8;
            oscar = _closure1_slot11;
            golf = oscar.Screen;
            report = {};
            yankee = 'enable-notification';
            report['name'] = yankee;
            yankee = function() { // Original name: getComponent
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 19;
                mike = mike[entity];
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                entity = entity.RedesignNotificationScreen;
                return entity;
            };
            report['getComponent'] = yankee;
            yankee = {};
            yankee['onComplete'] = offset;
            report['initialParams'] = yankee;
            golf = options.bind(tango)(golf, report);
            report = new Array(4);
            report[0] = golf;
            yankee = oscar.Screen;
            golf = {};
            golf['name'] = romeo;
            romeo = function() { // Original name: getComponent
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 20;
                mike = mike[entity];
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                entity = entity.default;
                return entity;
            };
            golf['getComponent'] = romeo;
            romeo = function() { // Original name: options
                entity = {};
                mike = function(argFoo) { // Original name: headerRight
                    tango = _closure1_slot8;
                    mike = _closure1_slot1;
                    zulu = _closure1_slot2;
                    entity = 21;
                    entity = zulu[entity];
                    zulu = undefined;
                    mike = mike.bind(zulu)(entity);
                    entity = {};
                    golf = argFoo;
                    options = entity;
                    report = copyDataProperties(options, golf);
                    oscar = function() { // Original name: onPress
                        zulu = _closure2_slot9;
                        mike = function(argFoo) { // Original name: handleChooseAvatarSkip
                            entity = argFoo;
                            var _closure6_slot0 = entity;
                            tango = _closure1_slot4;
                            zulu = tango.lazy;
                            entity = function() {
                                zulu = _closure1_slot0;
                                entity = _closure1_slot2;
                                mike = 8;
                                mike = entity[mike];
                                tango = undefined;
                                zulu = zulu.bind(tango)(mike);
                                mike = 7;
                                mike = entity[mike];
                                entity = entity.paths;
                                entity = zulu.bind(tango)(mike, entity);
                                return entity;
                            };
                            oscar = zulu.bind(tango)(entity);
                            tango = _closure1_slot0;
                            zulu = _closure1_slot2;
                            entity = 9;
                            zulu = zulu[entity];
                            entity = undefined;
                            report = tango.bind(entity)(zulu);
                            tango = report.openAlert;
                            zulu = _closure1_slot8;
                            mike = {};
                            golf = function() { // Original name: onConfirm
                                zulu = _closure6_slot0;
                                mike = undefined;
                                entity = true;
                                entity = zulu.bind(mike)(entity);
                                return entity;
                            };
                            mike['onConfirm'] = golf;
                            zulu = zulu.bind(entity)(oscar, mike);
                            mike = 'skip-avatar-upload';
                            mike = tango.bind(report)(mike, zulu);
                            return entity;
                        };
                        entity = undefined;
                        mike = mike.bind(entity)(zulu);
                        return entity;
                    };
                    report = 'onPress';
                    entity[report] = oscar;
                    entity = tango.bind(zulu)(mike, entity);
                    return entity;
                };
                entity['headerRight'] = mike;
                return entity;
            };
            golf['options'] = romeo;
            romeo = {};
            romeo['onComplete'] = offset;
            golf['initialParams'] = romeo;
            golf = options.bind(tango)(yankee, golf);
            report[1] = golf;
            yankee = oscar.Screen;
            golf = {};
            romeo = 'contact-sync';
            golf['name'] = romeo;
            foxtrot = {};
            romeo = false;
            foxtrot['headerShown'] = romeo;
            golf['options'] = foxtrot;
            foxtrot = function() { // Original name: getComponent
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 22;
                mike = mike[entity];
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                entity = entity.ContactSyncOnboardingModal;
                return entity;
            };
            golf['getComponent'] = foxtrot;
            foxtrot = {};
            foxtrot['onComplete'] = offset;
            golf['initialParams'] = foxtrot;
            golf = options.bind(tango)(yankee, golf);
            report[2] = golf;
            golf = oscar.Screen;
            oscar = {};
            yankee = 'discoverability';
            oscar['name'] = yankee;
            yankee = {};
            yankee['headerShown'] = romeo;
            oscar['options'] = yankee;
            verify = function() { // Original name: getComponent
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 23;
                mike = mike[entity];
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                entity = entity.default;
                return entity;
            };
            oscar['getComponent'] = verify;
            verify = {};
            verify['onComplete'] = offset;
            oscar['initialParams'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[3] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();