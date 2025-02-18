// app/modules/main_tabs_v2/native/panels/createChatPanelNativeStackNavigator.tsx
export default (function(argFoo, argBar, _, argCor, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    golfie = report.bind(entity)(tangon);
    tangon = golfie.createNavigatorFactory;
    michal = function(argFoo) { // Original name: ChatPanelNativeStackNavigator
        tangon = argFoo;
        kiloes = tangon.id;
        backup = tangon.initialRouteName;
        foxtra = tangon.children;
        romeon = tangon.screenListeners;
        offset = tangon.screenOptions;
        zuuluu = {'id': 0, 'initialRouteName': 0, 'children': 0, 'screenListeners': 0, 'screenOptions': 0};
        output = null;
        result = zuuluu;
        entity = silentSetPrototypeOf(result, output);
        result = {};
        output = tangon;
        sizing = zuuluu;
        golfie = copyDataProperties(result, output, sizing);
        oscard = _closure1_slot0;
        yankee = _closure1_slot1;
        zuuluu = 2;
        report = yankee[zuuluu];
        tangon = undefined;
        verify = oscard.bind(tangon)(report);
        option = verify.useNavigationBuilder;
        zuuluu = yankee[zuuluu];
        zuuluu = oscard.bind(tangon)(zuuluu);
        report = zuuluu.StackRouter;
        zuuluu = {};
        zuuluu['id'] = kiloes;
        zuuluu['initialRouteName'] = backup;
        zuuluu['children'] = foxtra;
        zuuluu['screenListeners'] = romeon;
        zuuluu['screenOptions'] = offset;
        zuuluu = option.bind(verify)(report, zuuluu);
        report = zuuluu.state;
        var _closure2_slot0 = report;
        option = zuuluu.descriptors;
        verify = zuuluu.navigation;
        var _closure2_slot1 = verify;
        zuuluu = zuuluu.NavigationContent;
        foxtra = _closure1_slot2;
        romeon = foxtra.useMemo;
        offset = new Array(1);
        offset[0] = report;
        report = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = {};
                michal = _closure2_slot0;
                sizing = entity;
                kiloes = michal;
                zuuluu = copyDataProperties(sizing, kiloes);
                kiloes = michal.routes;
                zuuluu = new Array(0);
                tangon = 0;
                sizing = zuuluu;
                backup = 0;
                michal = arraySpread(sizing, kiloes, backup);
                michal = 'routes';
                entity[michal] = zuuluu;
                yankee = new Array(0);
                michal = new Array(0);
                zuuluu = entity.routes;
                zuuluu = zuuluu.length;
                zuuluu = tangon < zuuluu;
                verify = 3;
                option = undefined;
                golfie = null;
                oscard = 0;
                report = 0;
                if(!zuuluu) { _fun00002_ip = 195; continue _fun00001 }
 89:
                zuuluu = entity.routes;
                foxtra = zuuluu[report];
                romeon = _closure1_slot0;
                zuuluu = _closure1_slot1;
                zuuluu = zuuluu[verify];
                romeon = romeon.bind(option)(zuuluu);
                zuuluu = romeon.coerceChannelRoute;
                zuuluu = zuuluu.bind(romeon)(foxtra);
                if(!(golfie == zuuluu)) { _fun00002_ip = 146; continue _fun00001 }
 131:
                zuuluu = michal.push;
                zuuluu = zuuluu.bind(michal)(foxtra);
                romeon = oscard;
                _fun00002_ip = 171; continue _fun00001;
 146:
                zuuluu = yankee.push;
                zuuluu = zuuluu.bind(yankee)(foxtra);
                zuuluu = entity.index;
                romeon = oscard;
                if(!(report <= zuuluu)) { _fun00002_ip = 171; continue _fun00001 }
 168:
                romeon = oscard + 1;
 171:
                report = report + 1;
                zuuluu = entity.routes;
                zuuluu = zuuluu.length;
                oscard = romeon;
                tangon = oscard;
                if(report < zuuluu) { _fun00002_ip = 89; continue _fun00001 }
 195:
                zuuluu = entity.index;
                zuuluu = zuuluu - tangon;
                entity['index'] = zuuluu;
                entity['routes'] = michal;
                return entity;
            }
        };
        offset = romeon.bind(foxtra)(report, offset);
        var _closure2_slot2 = offset;
        romeon = foxtra.useEffect;
        report = new Array(3);
        report[0] = verify;
        backup = offset.index;
        report[1] = backup;
        backup = offset.key;
        report[2] = backup;
        michal = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = _closure2_slot1;
                report = null;
                zuuluu = report == entity;
                entity = undefined;
                if(zuuluu) { _fun00004_ip = 66; continue _fun00003 }
 18:
                zuuluu = _closure2_slot1;
                zuuluu = zuuluu.addListener;
                zuuluu = report == zuuluu;
                entity = undefined;
                if(zuuluu) { _fun00004_ip = 66; continue _fun00003 }
 37:
                report = _closure2_slot1;
                tangon = report.addListener;
                zuuluu = 'tabPress';
                michal = function(argFoo) {
                    entity = argFoo;
                    var _closure4_slot0 = entity;
                    zuuluu = _closure2_slot1;
                    entity = zuuluu.isFocused;
                    entity = entity.bind(zuuluu)();
                    var _closure4_slot1 = entity;
                    entity = global;
                    zuuluu = entity.requestAnimationFrame;
                    entity = undefined;
                    michal = function() {
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            entity = _closure2_slot2;
                            michal = entity.index;
                            entity = 0;
                            entity = michal > entity;
                            if(!entity) { _fun00006_ip = 28; continue _fun00005 }
 21:
                            entity = _closure4_slot1;
 28:
                            if(!entity) { _fun00006_ip = 47; continue _fun00005 }
 31:
                            michal = _closure4_slot0;
                            michal = michal.defaultPrevented;
                            entity = !michal;
 47:
                            if(!entity) { _fun00006_ip = 132; continue _fun00005 }
 50:
                            zuuluu = _closure2_slot1;
                            michal = zuuluu.dispatch;
                            entity = {};
                            golfie = _closure1_slot0;
                            oscard = _closure1_slot1;
                            report = 2;
                            oscard = oscard[report];
                            report = undefined;
                            report = golfie.bind(report)(oscard);
                            oscard = report.StackActions;
                            report = oscard.popToTop;
                            option = report.bind(oscard)();
                            verify = entity;
                            report = copyDataProperties(verify, option);
                            tangon = _closure2_slot2;
                            report = tangon.key;
                            tangon = 'target';
                            entity[tangon] = report;
                            entity = michal.bind(zuuluu)(entity);
 132:
                            entity = undefined;
                            return entity;
                        }
                    };
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                entity = tangon.bind(report)(zuuluu, michal);
 66:
                return entity;
            }
        };
        michal = romeon.bind(foxtra)(michal, report);
        michal = _closure1_slot3;
        entity = {};
        report = 4;
        report = yankee[report];
        report = oscard.bind(tangon)(report);
        oscard = report.NativeStackView;
        report = {};
        result = report;
        output = golfie;
        golfie = copyDataProperties(result, output);
        golfie = 'state';
        report[golfie] = offset;
        golfie = 'navigation';
        report[golfie] = verify;
        golfie = 'descriptors';
        report[golfie] = option;
        report = michal.bind(tangon)(oscard, report);
        entity['children'] = report;
        entity = michal.bind(tangon)(zuuluu, entity);
        return entity;
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/panels/createChatPanelNativeStackNavigator.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();