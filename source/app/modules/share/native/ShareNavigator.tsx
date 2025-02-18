// app/modules/share/native/ShareNavigator.tsx
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
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.BackHandler;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    golfie = report.bind(entity)(tangon);
    tangon = golfie.createNativeStackNavigator;
    tangon = tangon.bind(golfie)();
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'borderBottomWidth': 0, 'backgroundColor': null, 'shadowColor': 'transparent'};
    offset = 5;
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.BACKGROUND_PRIMARY;
    verify['backgroundColor'] = offset;
    tangon['header'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/share/native/ShareNavigator.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: ShareNavigator
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            michal = _closure1_slot6;
            tangon = undefined;
            michal = michal.bind(tangon)();
            var _closure2_slot0 = michal;
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            michal = 6;
            michal = report[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.useAccessibilityNativeStackOptions;
            michal = michal.bind(zuuluu)();
            var _closure2_slot1 = michal;
            zuuluu = entity.route;
            michal = null;
            report = michal == zuuluu;
            verify = undefined;
            if(report) { _fun00002_ip = 79; continue _fun00001 }
 73:
            verify = zuuluu.params;
 79:
            if(!(michal == verify)) { _fun00002_ip = 89; continue _fun00001 }
 83:
            verify = entity.sharedContent;
 89:
            zuuluu = _closure1_slot4;
            report = _closure1_slot5;
            michal = report.Navigator;
            entity = {};
            oscard = function(argFoo) { // Original name: screenOptions
                entity = argFoo;
                entity = entity.navigation;
                var _closure3_slot0 = entity;
                entity = {};
                tangon = _closure2_slot0;
                tangon = tangon.header;
                entity['headerStyle'] = tangon;
                tangon = false;
                entity['headerShadowVisible'] = tangon;
                tangon = function(argFoo) { // Original name: headerTitle
                    zuuluu = argFoo;
                    oscard = zuuluu.children;
                    entity = null;
                    michal = Object.create(entity);
                    entity = 0;
                    michal['children'] = entity;
                    verify = {};
                    option = zuuluu;
                    golfie = michal;
                    option = copyDataProperties(verify, option, golfie);
                    tangon = _closure1_slot4;
                    michal = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 7;
                    entity = zuuluu[entity];
                    zuuluu = undefined;
                    entity = michal.bind(zuuluu)(entity);
                    michal = entity.GenericHeaderTitle;
                    entity = {};
                    entity['title'] = oscard;
                    verify = entity;
                    report = copyDataProperties(verify, option);
                    entity = tangon.bind(zuuluu)(michal, entity);
                    return entity;
                };
                entity['headerTitle'] = tangon;
                zuuluu = function() { // Original name: headerLeft
                    tangon = _closure1_slot4;
                    michal = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 8;
                    entity = zuuluu[entity];
                    zuuluu = undefined;
                    michal = michal.bind(zuuluu)(entity);
                    entity = {};
                    report = _closure3_slot0;
                    entity['navigation'] = report;
                    report = function() { // Original name: onPress
                        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                            tangon = _closure1_slot0;
                            zuuluu = _closure1_slot2;
                            entity = 9;
                            zuuluu = zuuluu[entity];
                            entity = undefined;
                            zuuluu = tangon.bind(entity)(zuuluu);
                            entity = zuuluu.isAndroid;
                            entity = entity.bind(zuuluu)();
                            if(entity) { _fun00004_ip = 61; continue _fun00003 }
 37:
                            tangon = _closure3_slot0;
                            zuuluu = tangon.navigate;
                            entity = 'root';
                            entity = zuuluu.bind(tangon)(entity);
                            _fun00004_ip = 75; continue _fun00003;
 61:
                            zuuluu = _closure1_slot3;
                            michal = zuuluu.exitApp;
                            entity = michal.bind(zuuluu)();
 75:
                            return entity;
                        }
                    };
                    entity['onPress'] = report;
                    report = 'close';
                    entity['type'] = report;
                    entity = tangon.bind(zuuluu)(michal, entity);
                    return entity;
                };
                entity['headerLeft'] = zuuluu;
                report = _closure2_slot1;
                oscard = entity;
                michal = copyDataProperties(oscard, report);
                return entity;
            };
            entity['screenOptions'] = oscard;
            oscard = report.Screen;
            report = {};
            option = 'root';
            report['name'] = option;
            option = {};
            foxtra = _closure1_slot0;
            backup = _closure1_slot2;
            offset = 10;
            yankee = backup[offset];
            yankee = foxtra.bind(tangon)(yankee);
            romeon = yankee.intl;
            yankee = romeon.string;
            offset = backup[offset];
            offset = foxtra.bind(tangon)(offset);
            offset = offset.t;
            offset = offset.Ux8h5u;
            offset = yankee.bind(romeon)(offset);
            option['title'] = offset;
            report['options'] = option;
            option = {};
            sizing = option;
            kiloes = verify;
            verify = copyDataProperties(sizing, kiloes);
            report['initialParams'] = option;
            golfie = function() { // Original name: getComponent
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 11;
                michal = michal[entity];
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                entity = entity.default;
                return entity;
            };
            report['getComponent'] = golfie;
            report = zuuluu.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();