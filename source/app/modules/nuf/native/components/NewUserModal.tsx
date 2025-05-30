// app/modules/nuf/native/components/NewUserModal.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.BackHandler;
    var _closure1_slot5 = golfie;
    tangon = tangon.NativeModules;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot7 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot8 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    golfie = report.bind(entity)(tangon);
    tangon = golfie.createNativeStackNavigator;
    tangon = tangon.bind(golfie)();
    var _closure1_slot9 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'borderBottomWidth': 0, 'backgroundColor': null, 'shadowColor': 'transparent'};
    offset = 6;
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.BACKGROUND_PRIMARY;
    verify['backgroundColor'] = offset;
    tangon['header'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 21;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/nuf/native/components/NewUserModal.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: NewUserModal
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            golfie = entity.initialRouteName;
            yankee = entity.initialOnboardingStepIndex;
            entity = _closure1_slot10;
            tangon = undefined;
            entity = entity.bind(tangon)();
            var _closure2_slot0 = entity;
            romeon = _closure1_slot4;
            entity = romeon.useState;
            entity = entity.bind(romeon)(yankee);
            offset = _closure1_slot3;
            option = 2;
            michal = offset.bind(tangon)(entity, option);
            oscard = 0;
            entity = michal[oscard];
            var _closure2_slot1 = entity;
            zuuluu = 1;
            michal = michal[zuuluu];
            var _closure2_slot2 = michal;
            michal = romeon.useState;
            michal = michal.bind(romeon)(yankee);
            michal = offset.bind(tangon)(michal, option);
            yankee = michal[oscard];
            var _closure2_slot3 = yankee;
            michal = michal[zuuluu];
            var _closure2_slot4 = michal;
            michal = romeon.useRef;
            oscard = null;
            michal = michal.bind(romeon)(oscard);
            var _closure2_slot5 = michal;
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            option = 10;
            option = zuuluu[option];
            offset = michal.bind(tangon)(option);
            option = offset.useAccessibilityNativeStackOptions;
            option = option.bind(offset)();
            var _closure2_slot6 = option;
            offset = romeon.useCallback;
            option = new Array(2);
            option[0] = yankee;
            option[1] = entity;
            entity = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = argFoo;
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 11;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    oscard = tangon.bind(entity)(zuuluu);
                    report = oscard.getNextOnboardingStep;
                    zuuluu = null;
                    tangon = zuuluu != michal;
                    if(!tangon) { _fun00004_ip = 46; continue _fun00003 }
 43:
                    tangon = michal;
 46:
                    zuuluu = _closure2_slot3;
                    michal = _closure2_slot1;
                    tangon = report.bind(oscard)(tangon, zuuluu, michal);
                    zuuluu = tangon.then;
                    michal = function(argFoo) {
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            entity = argFoo;
                            oscard = entity.lastShownStepIndex;
                            report = entity.onboardingStepIndex;
                            zuuluu = entity.continueNavigation;
                            tangon = _closure2_slot2;
                            entity = undefined;
                            tangon = tangon.bind(entity)(report);
                            tangon = _closure2_slot4;
                            tangon = tangon.bind(entity)(oscard);
                            if(!zuuluu) { _fun00006_ip = 62; continue _fun00005 }
 47:
                            zuuluu = _closure2_slot5;
                            tangon = zuuluu.current;
                            zuuluu = null;
                            if(!(zuuluu == tangon)) { _fun00006_ip = 120; continue _fun00005 }
 62:
                            oscard = _closure1_slot1;
                            option = _closure1_slot2;
                            tangon = 12;
                            tangon = option[tangon];
                            oscard = oscard.bind(entity)(tangon);
                            tangon = oscard.popWithKey;
                            golfie = _closure1_slot0;
                            zuuluu = 13;
                            zuuluu = option[zuuluu];
                            zuuluu = golfie.bind(entity)(zuuluu);
                            zuuluu = zuuluu.NEW_USER_MODAL_KEY;
                            zuuluu = tangon.bind(oscard)(zuuluu);
                            _fun00006_ip = 164; continue _fun00005;
 120:
                            tangon = _closure1_slot0;
                            oscard = _closure1_slot2;
                            zuuluu = 11;
                            zuuluu = oscard[zuuluu];
                            tangon = tangon.bind(entity)(zuuluu);
                            zuuluu = tangon.continueToNextStep;
                            michal = _closure2_slot5;
                            michal = michal.current;
                            michal = zuuluu.bind(tangon)(report, michal);
 164:
                            return entity;
                        }
                    };
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            offset = offset.bind(romeon)(entity, option);
            var _closure2_slot7 = offset;
            entity = 14;
            entity = zuuluu[entity];
            zuuluu = michal.bind(tangon)(entity);
            michal = zuuluu.useFocusEffect;
            yankee = romeon.useCallback;
            option = function() {
                report = _closure1_slot5;
                tangon = report.addEventListener;
                zuuluu = 'hardwareBackPress';
                michal = function() {
                    entity = _closure1_slot6;
                    michal = entity.MinimizeApp;
                    entity = michal.minimizeApp;
                    entity = entity.bind(michal)();
                    entity = true;
                    return entity;
                };
                michal = tangon.bind(report)(zuuluu, michal);
                var _closure3_slot0 = michal;
                entity = function() {
                    michal = _closure3_slot0;
                    entity = michal.remove;
                    entity = entity.bind(michal)();
                    return entity;
                };
                return entity;
            };
            entity = new Array(0);
            entity = yankee.bind(romeon)(option, entity);
            entity = michal.bind(zuuluu)(entity);
            zuuluu = _closure1_slot8;
            entity = _closure1_slot9;
            michal = entity.Navigator;
            entity = {};
            option = function(argFoo) { // Original name: screenOptions
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = argFoo;
                    tangon = entity.navigation;
                    entity = _closure2_slot5;
                    entity['current'] = tangon;
                    entity = {'headerStyle': null, 'headerShadowVisible': false, 'title': '', 'headerLeft': null, 'headerRight': null, 'fullScreenGestureEnabled': false};
                    tangon = _closure2_slot0;
                    tangon = tangon.header;
                    entity['headerStyle'] = tangon;
                    tangon = function() { // Original name: headerLeft
                        entity = null;
                        return entity;
                    };
                    entity['headerLeft'] = tangon;
                    zuuluu = function() { // Original name: headerRight
                        entity = null;
                        return entity;
                    };
                    entity['headerRight'] = zuuluu;
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 15;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    tangon = report.bind(zuuluu)(tangon);
                    zuuluu = tangon.isAndroid;
                    tangon = zuuluu.bind(tangon)();
                    zuuluu = 'card';
                    if(!tangon) { _fun00008_ip = 126; continue _fun00007 }
 120:
                    zuuluu = 'transparentModal';
 126:
                    entity['presentation'] = zuuluu;
                    zuuluu = 'slide_from_right';
                    entity['animation'] = zuuluu;
                    oscard = _closure2_slot6;
                    golfie = entity;
                    michal = copyDataProperties(golfie, oscard);
                    return entity;
                }
            };
            entity['screenOptions'] = option;
            option = oscard != golfie;
            romeon = 'choose-avatar';
            oscard = romeon;
            if(!option) { _fun00002_ip = 290; continue _fun00001 }
 287:
            oscard = golfie;
 290:
            entity['initialRouteName'] = oscard;
            option = _closure1_slot7;
            oscard = _closure1_slot9;
            golfie = oscard.Screen;
            report = {};
            yankee = 'enable-notification';
            report['name'] = yankee;
            yankee = function() { // Original name: getComponent
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 16;
                michal = michal[entity];
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                entity = entity.RedesignNotificationScreen;
                return entity;
            };
            report['getComponent'] = yankee;
            yankee = {};
            yankee['onComplete'] = offset;
            report['initialParams'] = yankee;
            golfie = option.bind(tangon)(golfie, report);
            report = new Array(4);
            report[0] = golfie;
            yankee = oscard.Screen;
            golfie = {};
            golfie['name'] = romeon;
            romeon = function() { // Original name: getComponent
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 17;
                michal = michal[entity];
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                entity = entity.default;
                return entity;
            };
            golfie['getComponent'] = romeon;
            romeon = function() { // Original name: options
                entity = {};
                michal = function(argFoo) { // Original name: headerRight
                    tangon = _closure1_slot7;
                    michal = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 18;
                    entity = zuuluu[entity];
                    zuuluu = undefined;
                    michal = michal.bind(zuuluu)(entity);
                    entity = {};
                    golfie = argFoo;
                    option = entity;
                    report = copyDataProperties(option, golfie);
                    oscard = function() { // Original name: onPress
                        zuuluu = _closure2_slot7;
                        michal = function(argFoo) { // Original name: handleChooseAvatarSkip
                            entity = argFoo;
                            var _closure6_slot0 = entity;
                            tangon = _closure1_slot4;
                            zuuluu = tangon.lazy;
                            entity = function() {
                                zuuluu = _closure1_slot0;
                                entity = _closure1_slot2;
                                michal = 8;
                                michal = entity[michal];
                                tangon = undefined;
                                zuuluu = zuuluu.bind(tangon)(michal);
                                michal = 7;
                                michal = entity[michal];
                                entity = entity.paths;
                                entity = zuuluu.bind(tangon)(michal, entity);
                                return entity;
                            };
                            oscard = zuuluu.bind(tangon)(entity);
                            tangon = _closure1_slot0;
                            zuuluu = _closure1_slot2;
                            entity = 9;
                            zuuluu = zuuluu[entity];
                            entity = undefined;
                            report = tangon.bind(entity)(zuuluu);
                            tangon = report.openAlert;
                            zuuluu = _closure1_slot7;
                            michal = {};
                            golfie = function() { // Original name: onConfirm
                                zuuluu = _closure6_slot0;
                                michal = undefined;
                                entity = true;
                                entity = zuuluu.bind(michal)(entity);
                                return entity;
                            };
                            michal['onConfirm'] = golfie;
                            zuuluu = zuuluu.bind(entity)(oscard, michal);
                            michal = 'skip-avatar-upload';
                            michal = tangon.bind(report)(michal, zuuluu);
                            return entity;
                        };
                        entity = undefined;
                        michal = michal.bind(entity)(zuuluu);
                        return entity;
                    };
                    report = 'onPress';
                    entity[report] = oscard;
                    entity = tangon.bind(zuuluu)(michal, entity);
                    return entity;
                };
                entity['headerRight'] = michal;
                return entity;
            };
            golfie['options'] = romeon;
            romeon = {};
            romeon['onComplete'] = offset;
            golfie['initialParams'] = romeon;
            golfie = option.bind(tangon)(yankee, golfie);
            report[1] = golfie;
            yankee = oscard.Screen;
            golfie = {};
            romeon = 'contact-sync';
            golfie['name'] = romeon;
            foxtra = {};
            romeon = false;
            foxtra['headerShown'] = romeon;
            golfie['options'] = foxtra;
            foxtra = function() { // Original name: getComponent
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 19;
                michal = michal[entity];
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                entity = entity.ContactSyncOnboardingModal;
                return entity;
            };
            golfie['getComponent'] = foxtra;
            foxtra = {};
            foxtra['onComplete'] = offset;
            golfie['initialParams'] = foxtra;
            golfie = option.bind(tangon)(yankee, golfie);
            report[2] = golfie;
            golfie = oscard.Screen;
            oscard = {};
            yankee = 'discoverability';
            oscard['name'] = yankee;
            yankee = {};
            yankee['headerShown'] = romeon;
            oscard['options'] = yankee;
            verify = function() { // Original name: getComponent
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 20;
                michal = michal[entity];
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                entity = entity.default;
                return entity;
            };
            oscard['getComponent'] = verify;
            verify = {};
            verify['onComplete'] = offset;
            oscard['initialParams'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[3] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();