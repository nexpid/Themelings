// app/modules/age_assurance/native/AgeVerificationModal.tsx
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
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot4 = tangon;
    tangon = {};
    golfie = 'VERIFY_AGE';
    tangon['VERIFY_AGE'] = golfie;
    var _closure1_slot5 = tangon;
    tangon = function(argFoo) { // Original name: AgeVerifyScreen
        entity = argFoo;
        golfie = entity.webviewUrl;
        report = _closure1_slot3;
        tangon = report.useCallback;
        zuuluu = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = argFoo;
                zuuluu = tangon;
                entity = null;
                michal = null;
                tangon = tangon.nativeEvent;
                tangon = tangon.data;
                report = 'string';
                tangon = typeof tangon;
                if(!(report === tangon)) { _fun00002_ip = 66; continue _fun00001 }
 31: // try_start_0
                tangon = global;
                report = tangon.JSON;
                tangon = report.parse;
                zuuluu = zuuluu.nativeEvent;
                zuuluu = zuuluu.data;
                michal = tangon.bind(report)(zuuluu);
 60: // try_end0
                _fun00002_ip = 66; continue _fun00001;
 62: // catch_target0
                CatchBlockStart(arg_register=2);
                michal = null;
 66:
                tangon = entity == michal;
                entity = undefined;
                zuuluu = undefined;
                if(tangon) { _fun00002_ip = 82; continue _fun00001 }
 77:
                zuuluu = michal.status;
 82:
                michal = 'AGE_CHECK_COMPLETE';
                if(!(michal === zuuluu)) { _fun00002_ip = 125; continue _fun00001 }
 92:
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                michal = 2;
                michal = tangon[michal];
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.pop;
                michal = michal.bind(zuuluu)();
 125:
                return entity;
            }
        };
        michal = new Array(0);
        report = tangon.bind(report)(zuuluu, michal);
        tangon = _closure1_slot4;
        michal = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 3;
        entity = zuuluu[entity];
        zuuluu = undefined;
        michal = michal.bind(zuuluu)(entity);
        entity = {'allowsInlineMediaPlayback': true, 'javaScriptEnabled': true, 'source': null, 'onMessage': null, 'injectedJavaScript': "\n  window.addEventListener('message', function(event) {\n    window.ReactNativeWebView.postMessage(event.data);\n  }, true);\n"};
        oscard = {};
        oscard['uri'] = golfie;
        entity['source'] = oscard;
        entity['onMessage'] = report;
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {};
    offset = 5;
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.BG_BASE_SECONDARY;
    verify['backgroundColor'] = offset;
    tangon['headerStyle'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/age_assurance/native/AgeVerificationModal.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: AgeVerificationModal
        michal = argFoo;
        golfie = michal.webviewUrl;
        var _closure2_slot0 = golfie;
        michal = _closure1_slot7;
        tangon = undefined;
        option = michal.bind(tangon)();
        var _closure2_slot1 = option;
        oscard = _closure1_slot3;
        zuuluu = oscard.useMemo;
        michal = new Array(2);
        michal[0] = option;
        michal[1] = golfie;
        entity = function() {
            tangon = _closure2_slot1;
            zuuluu = _closure2_slot0;
            michal = function(argFoo, argBar) { // Original name: getScreens
                entity = argBar;
                var _closure4_slot0 = entity;
                entity = {};
                michal = _closure1_slot5;
                zuuluu = michal.VERIFY_AGE;
                michal = {};
                oscard = argFoo;
                oscard = oscard.headerStyle;
                michal['headerStyle'] = oscard;
                oscard = function() { // Original name: headerTitle
                    entity = null;
                    return entity;
                };
                michal['headerTitle'] = oscard;
                golfie = _closure1_slot0;
                oscard = _closure1_slot2;
                report = 6;
                oscard = oscard[report];
                report = undefined;
                golfie = golfie.bind(report)(oscard);
                oscard = golfie.getHeaderCloseButton;
                report = function() {
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 2;
                    michal = michal[entity];
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    entity = michal.pop;
                    entity = entity.bind(michal)();
                    return entity;
                };
                report = oscard.bind(golfie)(report);
                michal['headerLeft'] = report;
                tangon = function() { // Original name: render
                    tangon = _closure1_slot4;
                    zuuluu = _closure1_slot6;
                    michal = {};
                    entity = _closure4_slot0;
                    michal['webviewUrl'] = entity;
                    entity = undefined;
                    entity = tangon.bind(entity)(zuuluu, michal);
                    return entity;
                };
                michal['render'] = tangon;
                entity[zuuluu] = michal;
                return entity;
            };
            entity = undefined;
            entity = michal.bind(entity)(tangon, zuuluu);
            return entity;
        };
        oscard = zuuluu.bind(oscard)(entity, michal);
        zuuluu = _closure1_slot4;
        option = _closure1_slot0;
        verify = _closure1_slot2;
        entity = 7;
        entity = verify[entity];
        entity = option.bind(tangon)(entity);
        michal = entity.Navigator;
        entity = {};
        entity['screens'] = oscard;
        report = _closure1_slot5;
        report = report.VERIFY_AGE;
        entity['initialRouteName'] = report;
        report = 8;
        oscard = verify[report];
        oscard = option.bind(tangon)(oscard);
        golfie = oscard.intl;
        oscard = golfie.string;
        report = verify[report];
        report = option.bind(tangon)(report);
        report = report.t;
        report = report.13/7kZ;
        report = oscard.bind(golfie)(report);
        entity['headerBackTitle'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();