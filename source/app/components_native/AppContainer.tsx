// app/components_native/AppContainer.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        verify = argBar;
        yankee = argBaz;
        foxtra = argFre;
        offset = argPlu;
        entity = argFoo;
        var _closure1_slot0 = entity;
        report = verify;
        var _closure1_slot1 = verify;
        tangon = yankee;
        var _closure1_slot2 = yankee;
        michal = foxtra;
        oscard = offset;
        var _closure1_slot3 = offset;
        entity = function(argFoo) { // Original name: SafeAreaWrapper
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = argFoo;
                report = entity.children;
                michal = _closure1_slot18;
                tangon = undefined;
                oscard = michal.bind(tangon)();
                zuuluu = _closure1_slot7;
                michal = function(argFoo) {
                    michal = argFoo;
                    entity = michal.shouldDisableSafeAreas;
                    entity = entity.bind(michal)();
                    return entity;
                };
                golfie = zuuluu.bind(tangon)(michal);
                zuuluu = _closure1_slot1;
                option = _closure1_slot3;
                michal = 13;
                michal = option[michal];
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = zuuluu.useOpenModalKey;
                offset = michal.bind(zuuluu)();
                michal = null;
                option = michal != offset;
                if(!option) { _fun00004_ip = 161; continue _fun00003 }
 78:
                zuuluu = _closure1_slot1;
                verify = _closure1_slot3;
                michal = 14;
                michal = verify[michal];
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = zuuluu.isVoiceChannelModalKey;
                michal = michal.bind(zuuluu)(offset);
                if(michal) { _fun00004_ip = 158; continue _fun00003 }
 112:
                zuuluu = _closure1_slot11;
                verify = new Array(4);
                verify[0] = zuuluu;
                zuuluu = _closure1_slot12;
                verify[1] = zuuluu;
                zuuluu = _closure1_slot14;
                verify[2] = zuuluu;
                zuuluu = _closure1_slot13;
                verify[3] = zuuluu;
                zuuluu = verify.includes;
                michal = zuuluu.bind(verify)(offset);
 158:
                option = michal;
 161:
                zuuluu = _closure1_slot15;
                michal = _closure1_slot1;
                verify = _closure1_slot3;
                entity = 15;
                entity = verify[entity];
                entity = michal.bind(tangon)(entity);
                michal = entity.SafeAreaPaddingView;
                entity = {};
                verify = !golfie;
                if(!verify) { _fun00004_ip = 202; continue _fun00003 }
 199:
                verify = !option;
 202:
                entity['left'] = verify;
                golfie = !golfie;
                if(!golfie) { _fun00004_ip = 215; continue _fun00003 }
 212:
                golfie = !option;
 215:
                entity['right'] = golfie;
                oscard = oscard.flex;
                entity['style'] = oscard;
                entity['children'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            }
        };
        var _closure1_slot21 = entity;
        entity = function(argFoo) { // Original name: GestureWrapper
            entity = argFoo;
            report = entity.children;
            michal = _closure1_slot18;
            tangon = undefined;
            offset = michal.bind(tangon)();
            var _closure2_slot0 = offset;
            michal = _closure1_slot1;
            golfie = _closure1_slot3;
            oscard = 16;
            oscard = golfie[oscard];
            option = michal.bind(tangon)(oscard);
            oscard = option.useIsScreenLandscape;
            yankee = oscard.bind(option)();
            var _closure2_slot1 = yankee;
            verify = _closure1_slot5;
            option = verify.useMemo;
            oscard = new Array(2);
            oscard[0] = yankee;
            oscard[1] = offset;
            zuuluu = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = _closure2_slot0;
                    michal = entity.flex;
                    entity = new Array(2);
                    entity[0] = michal;
                    tangon = _closure2_slot1;
                    michal = undefined;
                    if(!tangon) { _fun00006_ip = 39; continue _fun00005 }
 29:
                    zuuluu = _closure2_slot0;
                    michal = zuuluu.rootBackgroundColor;
 39:
                    entity[1] = michal;
                    return entity;
                }
            };
            oscard = option.bind(verify)(zuuluu, oscard);
            zuuluu = _closure1_slot15;
            entity = 17;
            entity = golfie[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.GestureHandlerRootView;
            entity = {};
            entity['style'] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        var _closure1_slot22 = entity;
        entity = function() { // Original name: handleNavigationOnReady
            tangon = _closure1_slot2;
            oscard = _closure1_slot3;
            entity = 18;
            zuuluu = oscard[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.flush;
            zuuluu = zuuluu.bind(tangon)();
            report = _closure1_slot1;
            zuuluu = 19;
            zuuluu = oscard[zuuluu];
            zuuluu = report.bind(entity)(zuuluu);
            tangon = zuuluu.ComponentDispatch;
            zuuluu = tangon.dispatch;
            michal = _closure1_slot10;
            michal = michal.NAVIGATOR_READY;
            michal = zuuluu.bind(tangon)(michal);
            michal = 20;
            michal = oscard[michal];
            michal = report.bind(entity)(michal);
            tangon = michal.routingInstrumentation;
            zuuluu = tangon.registerNavigationContainer;
            michal = 21;
            michal = oscard[michal];
            report = report.bind(entity)(michal);
            michal = report.getRootNavigationRef;
            michal = michal.bind(report)();
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        var _closure1_slot23 = entity;
        entity = function(argFoo) { // Original name: AppNavigationContainer
            michal = argFoo;
            report = michal.children;
            zuuluu = _closure1_slot2;
            yankee = _closure1_slot3;
            michal = 27;
            michal = yankee[michal];
            tangon = undefined;
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = michal.bind(tangon)();
            oscard = _closure1_slot5;
            michal = oscard.useRef;
            michal = michal.bind(oscard)(tangon);
            var _closure2_slot0 = michal;
            verify = _closure1_slot5;
            golfie = verify.useCallback;
            oscard = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot3;
                    entity = 21;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.getRootNavigationRef;
                    report = zuuluu.bind(tangon)();
                    zuuluu = null;
                    if(!(zuuluu != report)) { _fun00008_ip = 373; continue _fun00007 }
 44:
                    tangon = report.isReady;
                    tangon = tangon.bind(report)();
                    if(!tangon) { _fun00008_ip = 373; continue _fun00007 }
 60:
                    tangon = report.getCurrentRoute;
                    oscard = tangon.bind(report)();
                    report = _closure1_slot1;
                    tangon = _closure1_slot3;
                    option = 13;
                    tangon = tangon[option];
                    report = report.bind(entity)(tangon);
                    tangon = report.coerceMessagesRoute;
                    tangon = tangon.bind(report)(oscard);
                    if(!(zuuluu == tangon)) { _fun00008_ip = 133; continue _fun00007 }
 105:
                    golfie = _closure1_slot1;
                    report = _closure1_slot3;
                    report = report[option];
                    golfie = golfie.bind(entity)(report);
                    report = golfie.coerceGuildsRoute;
                    tangon = report.bind(golfie)(oscard);
 133:
                    golfie = zuuluu != tangon;
                    report = _closure1_slot1;
                    tangon = _closure1_slot3;
                    tangon = tangon[option];
                    verify = report.bind(entity)(tangon);
                    option = verify.coerceChannelRoute;
                    report = _closure2_slot0;
                    report = report.current;
                    report = option.bind(verify)(report);
                    report = zuuluu != report;
                    if(!report) { _fun00008_ip = 187; continue _fun00007 }
 184:
                    report = golfie;
 187:
                    if(!report) { _fun00008_ip = 230; continue _fun00007 }
 190:
                    golfie = _closure1_slot2;
                    option = _closure1_slot3;
                    report = 28;
                    report = option[report];
                    option = golfie.bind(entity)(report);
                    golfie = option.track;
                    report = _closure1_slot9;
                    report = report.NAV_DRAWER_OPENED;
                    report = golfie.bind(option)(report);
 230:
                    tangon = _closure2_slot0;
                    tangon['current'] = oscard;
                    report = _closure1_slot2;
                    golfie = _closure1_slot3;
                    tangon = 25;
                    tangon = golfie[tangon];
                    report = report.bind(entity)(tangon);
                    tangon = true;
                    oscard = report.bind(entity)(oscard, tangon);
                    report = _closure1_slot4;
                    tangon = 2;
                    report = report.bind(entity)(oscard, tangon);
                    tangon = 0;
                    golfie = report[tangon];
                    tangon = 1;
                    oscard = report[tangon];
                    zuuluu = zuuluu != oscard;
                    if(!zuuluu) { _fun00008_ip = 319; continue _fun00007 }
 301:
                    report = _closure1_slot8;
                    tangon = report.getChannelId;
                    tangon = tangon.bind(report)();
                    zuuluu = oscard !== tangon;
 319:
                    if(!zuuluu) { _fun00008_ip = 373; continue _fun00007 }
 322:
                    tangon = _closure1_slot2;
                    report = _closure1_slot3;
                    zuuluu = 26;
                    zuuluu = report[zuuluu];
                    report = tangon.bind(entity)(zuuluu);
                    tangon = report.selectChannel;
                    zuuluu = {};
                    zuuluu['guildId'] = golfie;
                    zuuluu['channelId'] = oscard;
                    oscard = 'Navigation Fix';
                    zuuluu['source'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 373:
                    michal = _closure1_slot6;
                    michal = michal.bind(entity)();
                    return entity;
                }
            };
            michal = new Array(0);
            golfie = golfie.bind(verify)(oscard, michal);
            offset = _closure1_slot5;
            verify = offset.useMemo;
            oscard = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure1_slot2;
                    tangon = _closure1_slot3;
                    entity = 29;
                    entity = tangon[entity];
                    golfie = undefined;
                    entity = zuuluu.bind(golfie)(entity);
                    entity = entity.bind(golfie)();
                    michal = 30;
                    michal = tangon[michal];
                    tangon = zuuluu.bind(golfie)(michal);
                    zuuluu = tangon.log;
                    report = null;
                    michal = report == entity;
                    oscard = undefined;
                    if(michal) { _fun00010_ip = 84; continue _fun00009 }
 58:
                    option = entity.routes;
                    michal = 0;
                    michal = option[michal];
                    report = report == michal;
                    oscard = undefined;
                    if(report) { _fun00010_ip = 84; continue _fun00009 }
 79:
                    oscard = michal.name;
 84:
                    michal = global;
                    michal = michal.HermesInternal;
                    report = michal.concat;
                    michal = 'Initial Screen: ';
                    michal = report.bind(michal)(oscard);
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            michal = new Array(0);
            oscard = verify.bind(offset)(oscard, michal);
            offset = _closure1_slot5;
            verify = offset.useRef;
            michal = true;
            michal = verify.bind(offset)(michal);
            var _closure2_slot1 = michal;
            offset = _closure1_slot5;
            verify = offset.useEffect;
            michal = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    zuuluu = zuuluu.current;
                    if(zuuluu) { _fun00012_ip = 55; continue _fun00011 }
 17:
                    zuuluu = global;
                    oscard = zuuluu.setTimeout;
                    report = undefined;
                    tangon = function() {
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            tangon = _closure1_slot1;
                            zuuluu = _closure1_slot3;
                            entity = 21;
                            zuuluu = zuuluu[entity];
                            entity = undefined;
                            tangon = tangon.bind(entity)(zuuluu);
                            zuuluu = tangon.getRootNavigationRef;
                            tangon = zuuluu.bind(tangon)();
                            zuuluu = null;
                            if(!(zuuluu != tangon)) { _fun00014_ip = 125; continue _fun00013 }
 41:
                            zuuluu = tangon.isReady;
                            zuuluu = zuuluu.bind(tangon)();
                            if(!zuuluu) { _fun00014_ip = 125; continue _fun00013 }
 54:
                            zuuluu = tangon.getState;
                            zuuluu = zuuluu.bind(tangon)();
                            oscard = zuuluu.routes;
                            report = oscard.filter;
                            zuuluu = function(argFoo) {
                                entity = argFoo;
                                michal = entity.name;
                                entity = 'modal';
                                entity = entity === michal;
                                return entity;
                            };
                            zuuluu = report.bind(oscard)(zuuluu);
                            report = _closure1_slot2;
                            oscard = _closure1_slot3;
                            michal = 29;
                            michal = oscard[michal];
                            michal = report.bind(entity)(michal);
                            zuuluu = michal.bind(entity)(zuuluu);
                            michal = tangon.reset;
                            michal = michal.bind(tangon)(zuuluu);
 125:
                            return entity;
                        }
                    };
                    zuuluu = 0;
                    zuuluu = oscard.bind(report)(tangon, zuuluu);
                    var _closure3_slot0 = zuuluu;
                    michal = function() {
                        entity = global;
                        zuuluu = entity.clearTimeout;
                        michal = _closure3_slot0;
                        entity = undefined;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    return michal;
 55:
                    michal = _closure2_slot1;
                    entity = false;
                    michal['current'] = entity;
                    entity = undefined;
                    return entity;
                }
            };
            entity = new Array(0);
            entity = verify.bind(offset)(michal, entity);
            offset = _closure1_slot1;
            entity = 31;
            entity = yankee[entity];
            michal = offset.bind(tangon)(entity);
            entity = michal.useNavigationTheme;
            verify = entity.bind(michal)(zuuluu);
            zuuluu = _closure1_slot15;
            entity = 32;
            entity = yankee[entity];
            entity = offset.bind(tangon)(entity);
            michal = entity.NavigationContainer;
            entity = {};
            entity['theme'] = verify;
            verify = 21;
            verify = yankee[verify];
            offset = offset.bind(tangon)(verify);
            verify = offset.getRootNavigationRef;
            verify = verify.bind(offset)();
            entity['ref'] = verify;
            option = _closure1_slot23;
            entity['onReady'] = option;
            entity['onStateChange'] = golfie;
            entity['initialState'] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        var _closure1_slot24 = entity;
        entity = function(argFoo) { // Original name: ShareNavigationContainer
            entity = argFoo;
            report = entity.children;
            zuuluu = _closure1_slot2;
            golfie = _closure1_slot3;
            michal = 27;
            michal = golfie[michal];
            tangon = undefined;
            michal = zuuluu.bind(tangon)(michal);
            option = michal.bind(tangon)();
            michal = _closure1_slot1;
            zuuluu = 31;
            zuuluu = golfie[zuuluu];
            oscard = michal.bind(tangon)(zuuluu);
            zuuluu = oscard.useNavigationTheme;
            oscard = zuuluu.bind(oscard)(option);
            zuuluu = _closure1_slot15;
            entity = 32;
            entity = golfie[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.NavigationContainer;
            entity = {};
            entity['theme'] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        var _closure1_slot25 = entity;
        entity = function(argFoo) { // Original name: AppNavigationContainerOrEmpty
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                entity = argFoo;
                michal = entity.children;
                tangon = entity.appEntryKey;
                entity = 'main';
                if(!(entity !== tangon)) { _fun00016_ip = 60; continue _fun00015 }
 22:
                zuuluu = 'share';
                entity = michal;
                if(!(zuuluu === tangon)) { _fun00016_ip = 58; continue _fun00015 }
 33:
                oscard = _closure1_slot15;
                report = _closure1_slot25;
                tangon = {};
                tangon['children'] = michal;
                zuuluu = undefined;
                entity = oscard.bind(zuuluu)(report, tangon);
 58:
                _fun00016_ip = 85; continue _fun00015;
 60:
                report = _closure1_slot15;
                tangon = _closure1_slot24;
                zuuluu = {};
                zuuluu['children'] = michal;
                michal = undefined;
                entity = report.bind(michal)(tangon, zuuluu);
 85:
                return entity;
            }
        };
        var _closure1_slot26 = entity;
        entity = global;
        romeon = entity.Object;
        option = romeon.defineProperty;
        golfie = {};
        entity = true;
        golfie['value'] = entity;
        entity = '__esModule';
        entity = option.bind(romeon)(foxtra, entity, golfie);
        entity = 0;
        golfie = offset[entity];
        entity = undefined;
        golfie = yankee.bind(entity)(golfie);
        var _closure1_slot4 = golfie;
        foxtra = 1;
        option = offset[foxtra];
        golfie = argCor;
        golfie = golfie.bind(entity)(option);
        var _closure1_slot5 = golfie;
        option = 2;
        option = offset[option];
        option = verify.bind(entity)(option);
        option = option.handleHistoryStoreNavigationChange;
        var _closure1_slot6 = option;
        option = 3;
        option = offset[option];
        option = yankee.bind(entity)(option);
        var _closure1_slot7 = option;
        option = 4;
        option = offset[option];
        option = yankee.bind(entity)(option);
        var _closure1_slot8 = option;
        option = 5;
        option = offset[option];
        option = verify.bind(entity)(option);
        yankee = option.AnalyticEvents;
        var _closure1_slot9 = yankee;
        yankee = option.ComponentActions;
        var _closure1_slot10 = yankee;
        option = option.MEDIA_MODAL_KEY;
        var _closure1_slot11 = option;
        option = 6;
        option = offset[option];
        option = verify.bind(entity)(option);
        yankee = option.OAUTH2_AUTHORIZE_MODAL_KEY;
        var _closure1_slot12 = yankee;
        yankee = option.OAUTH2_ERROR_RESULT_MODAL_KEY;
        var _closure1_slot13 = yankee;
        option = option.OAUTH2_SUCCESS_RESULT_MODAL_KEY;
        var _closure1_slot14 = option;
        option = 7;
        yankee = offset[option];
        yankee = verify.bind(entity)(yankee);
        yankee = yankee.jsx;
        var _closure1_slot15 = yankee;
        option = offset[option];
        option = verify.bind(entity)(option);
        option = option.jsxs;
        var _closure1_slot16 = option;
        option = 8;
        option = offset[option];
        verify = verify.bind(entity)(option);
        option = verify.isIOS;
        option = option.bind(verify)();
        if(option) { _fun00002_ip = 388; continue _fun00001 }
 380:
        golfie = golfie.Fragment;
        _fun00002_ip = 412; continue _fun00001;
 388:
        verify = report;
        offset = oscard;
        option = 9;
        option = offset[option];
        option = verify.bind(entity)(option);
        golfie = option.KeyboardProvider;
 412:
        var _closure1_slot17 = golfie;
        yankee = report;
        romeon = oscard;
        golfie = 10;
        golfie = romeon[golfie];
        verify = yankee.bind(entity)(golfie);
        option = verify.createStyles;
        golfie = {};
        offset = {};
        offset['flex'] = foxtra;
        golfie['flex'] = offset;
        offset = {};
        backup = tangon;
        foxtra = 11;
        foxtra = romeon[foxtra];
        foxtra = backup.bind(entity)(foxtra);
        foxtra = foxtra.colors;
        foxtra = foxtra.ANDROID_NAVIGATION_BAR_BACKGROUND;
        offset['backgroundColor'] = foxtra;
        golfie['rootBackgroundColor'] = offset;
        golfie = option.bind(verify)(golfie);
        var _closure1_slot18 = golfie;
        golfie = 12;
        option = romeon[golfie];
        offset = yankee.bind(entity)(option);
        verify = offset.configureReanimatedLogger;
        option = {};
        golfie = romeon[golfie];
        golfie = yankee.bind(entity)(golfie);
        golfie = golfie.ReanimatedLogLevel;
        golfie = golfie.error;
        option['level'] = golfie;
        golfie = false;
        option['strict'] = golfie;
        option = verify.bind(offset)(option);
 554: // try_start_0
        verify = report;
        offset = oscard;
        option = 22;
        option = offset[option];
        verify = verify.bind(entity)(option);
        option = verify.enableFreeze;
        option = option.bind(verify)();
 582: // try_end0
        _fun00002_ip = 586; continue _fun00001;
 584: // catch_target0
        CatchBlockStart(arg_register=7);
 586:
        option = 23;
        option = oscard[option];
        offset = report.bind(entity)(option);
        verify = offset.setDesignConfig;
        option = {};
        yankee = 24;
        yankee = oscard[yankee];
        yankee = report.bind(entity)(yankee);
        yankee = yankee.useTrackNavigatorScreenImpression;
        option['useTrackNavigatorScreenImpression'] = yankee;
        option = verify.bind(offset)(option);
        var _closure1_slot19 = golfie;
        golfie = {};
        option = 'function AppContainerTsx1(){const{RNScreensTurboModule}=this.__closure;global.RNScreensTurboModule=RNScreensTurboModule;}';
        golfie['code'] = option;
        var _closure1_slot20 = golfie;
        golfie = tangon;
        tangon = 48;
        tangon = oscard[tangon];
        golfie = golfie.bind(entity)(tangon);
        tangon = golfie.profiledRootComponent;
        zuuluu = function(argFoo) { // Original name: AppContainer
            entity = argFoo;
            variable48 = entity.children;
            output = entity.appEntryKey;
            variable47 = _closure1_slot2;
            variable49 = _closure1_slot3;
            entity = 33;
            entity = variable49[entity];
            tangon = undefined;
            entity = variable47.bind(tangon)(entity);
            entity = entity.bind(tangon)();
            report = _closure1_slot5;
            zuuluu = report.useEffect;
            michal = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    zuuluu = _closure1_slot19;
                    if(zuuluu) { _fun00018_ip = 115; continue _fun00017 }
 12:
                    zuuluu = _closure1_slot0;
                    golfie = zuuluu.RNScreensTurboModule;
                    var _closure3_slot0 = golfie;
                    report = _closure1_slot1;
                    tangon = _closure1_slot3;
                    zuuluu = 12;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    report = report.bind(zuuluu)(tangon);
                    tangon = report.runOnUI;
                    entity = function() { // Original name: e
                        michal = _closure1_slot0;
                        entity = _closure3_slot0;
                        michal['RNScreensTurboModule'] = entity;
                        entity = undefined;
                        return entity;
                    };
                    oscard = {};
                    oscard['RNScreensTurboModule'] = golfie;
                    entity['__closure'] = oscard;
                    oscard = 8891274578898.0;
                    entity['__workletHash'] = oscard;
                    oscard = _closure1_slot20;
                    entity['__initData'] = oscard;
                    entity = tangon.bind(report)(entity);
                    entity = entity.bind(zuuluu)();
                    entity = true;
                    _closure1_slot19 = entity;
 115:
                    entity = undefined;
                    return entity;
                }
            };
            entity = new Array(0);
            entity = zuuluu.bind(report)(michal, entity);
            zuuluu = _closure1_slot15;
            report = 34;
            entity = variable49[report];
            michal = variable47.bind(tangon)(entity);
            entity = {};
            variable41 = _closure1_slot1;
            report = variable49[report];
            report = variable41.bind(tangon)(report);
            report = report.Profiles;
            report = report.AppContainer;
            entity['profile'] = report;
            golfie = _closure1_slot15;
            report = 35;
            report = variable49[report];
            report = variable41.bind(tangon)(report);
            oscard = report.ReanimatedScreenProvider;
            report = {};
            offset = _closure1_slot15;
            option = 36;
            option = variable49[option];
            option = variable41.bind(tangon)(option);
            verify = option.RootThemeContextProvider;
            option = {};
            foxtra = _closure1_slot15;
            yankee = 37;
            yankee = variable49[yankee];
            romeon = variable47.bind(tangon)(yankee);
            yankee = {};
            sizing = _closure1_slot15;
            kiloes = _closure1_slot26;
            backup = {};
            backup['appEntryKey'] = output;
            echoed = _closure1_slot15;
            output = 38;
            output = variable49[output];
            output = variable41.bind(tangon)(output);
            result = output.WebViewContextProvider;
            output = {};
            ctrled = _closure1_slot15;
            update = 39;
            update = variable49[update];
            update = variable41.bind(tangon)(update);
            source = update.Router;
            update = {};
            vacuum = 40;
            vacuum = variable49[vacuum];
            sequen = variable47.bind(tangon)(vacuum);
            vacuum = sequen.getHistory;
            vacuum = vacuum.bind(sequen)();
            update['history'] = vacuum;
            config = _closure1_slot15;
            sequen = _closure1_slot22;
            vacuum = {};
            record = 41;
            record = variable49[record];
            cntext = variable47.bind(tangon)(record);
            record = {};
            status = _closure1_slot15;
            papara = 42;
            papara = variable49[papara];
            papara = variable41.bind(tangon)(papara);
            target = papara.PortalProvider;
            papara = {};
            whisks = _closure1_slot15;
            limora = _closure1_slot17;
            sierra = {};
            equals = 43;
            equals = variable49[equals];
            equals = variable41.bind(tangon)(equals);
            quebec = equals.PortalKeyboardContextProvider;
            equals = {};
            variable38 = _closure1_slot16;
            variable36 = 44;
            variable36 = variable49[variable36];
            variable37 = variable47.bind(tangon)(variable36);
            variable36 = {};
            variable42 = _closure1_slot15;
            variable39 = 45;
            variable39 = variable49[variable39];
            variable40 = variable47.bind(tangon)(variable39);
            variable39 = {};
            variable40 = variable42.bind(tangon)(variable40, variable39);
            variable39 = new Array(2);
            variable39[0] = variable40;
            variable42 = _closure1_slot15;
            variable40 = 46;
            variable40 = variable49[variable40];
            variable40 = variable41.bind(tangon)(variable40);
            variable41 = variable40.SafeAreaProvider;
            variable40 = {};
            variable44 = _closure1_slot21;
            variable43 = {};
            variable45 = new Array(2);
            variable45[0] = variable48;
            variable48 = _closure1_slot15;
            variable46 = 47;
            variable46 = variable49[variable46];
            variable47 = variable47.bind(tangon)(variable46);
            variable46 = {};
            variable46 = variable48.bind(tangon)(variable47, variable46);
            variable45[1] = variable46;
            variable43['children'] = variable45;
            variable43 = variable38.bind(tangon)(variable44, variable43);
            variable40['children'] = variable43;
            variable40 = variable42.bind(tangon)(variable41, variable40);
            variable39[1] = variable40;
            variable36['children'] = variable39;
            variable36 = variable38.bind(tangon)(variable37, variable36);
            equals['children'] = variable36;
            equals = whisks.bind(tangon)(quebec, equals);
            sierra['children'] = equals;
            sierra = whisks.bind(tangon)(limora, sierra);
            papara['children'] = sierra;
            papara = status.bind(tangon)(target, papara);
            record['children'] = papara;
            record = config.bind(tangon)(cntext, record);
            vacuum['children'] = record;
            vacuum = config.bind(tangon)(sequen, vacuum);
            update['children'] = vacuum;
            update = ctrled.bind(tangon)(source, update);
            output['children'] = update;
            output = echoed.bind(tangon)(result, output);
            backup['children'] = output;
            backup = sizing.bind(tangon)(kiloes, backup);
            yankee['children'] = backup;
            yankee = foxtra.bind(tangon)(romeon, yankee);
            option['children'] = yankee;
            option = offset.bind(tangon)(verify, option);
            report['children'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        zuuluu = tangon.bind(golfie)(zuuluu);
        tangon = 49;
        tangon = oscard[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.fileFinishedImporting;
        tangon = 'components_native/AppContainer.tsx';
        tangon = report.bind(oscard)(tangon);
        michal['default'] = zuuluu;
        return entity;
    }
})();