// app/modules/age_assurance/native/AgeVerificationModal.tsx
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
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot4 = tango;
    tango = {};
    golf = 'VERIFY_AGE';
    tango['VERIFY_AGE'] = golf;
    var _closure1_slot5 = tango;
    tango = function(argFoo) { // Original name: AgeVerifyScreen
        entity = argFoo;
        golf = entity.webviewUrl;
        report = _closure1_slot3;
        tango = report.useCallback;
        zulu = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tango = argFoo;
                zulu = tango;
                entity = null;
                mike = null;
                tango = tango.nativeEvent;
                tango = tango.data;
                report = 'string';
                tango = typeof tango;
                if(!(report === tango)) { _fun00002_ip = 66; continue _fun00001 }
 31: // try_start_0
                tango = global;
                report = tango.JSON;
                tango = report.parse;
                zulu = zulu.nativeEvent;
                zulu = zulu.data;
                mike = tango.bind(report)(zulu);
 60: // try_end0
                _fun00002_ip = 66; continue _fun00001;
 62: // catch_target0
                CatchBlockStart(arg_register=2);
                mike = null;
 66:
                tango = entity == mike;
                entity = undefined;
                zulu = undefined;
                if(tango) { _fun00002_ip = 82; continue _fun00001 }
 77:
                zulu = mike.status;
 82:
                mike = 'AGE_CHECK_COMPLETE';
                if(!(mike === zulu)) { _fun00002_ip = 125; continue _fun00001 }
 92:
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 2;
                mike = tango[mike];
                zulu = zulu.bind(entity)(mike);
                mike = zulu.pop;
                mike = mike.bind(zulu)();
 125:
                return entity;
            }
        };
        mike = new Array(0);
        report = tango.bind(report)(zulu, mike);
        tango = _closure1_slot4;
        mike = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 3;
        entity = zulu[entity];
        zulu = undefined;
        mike = mike.bind(zulu)(entity);
        entity = {'allowsInlineMediaPlayback': true, 'javaScriptEnabled': true, 'source': null, 'onMessage': null, 'injectedJavaScript': "\n  window.addEventListener('message', function(event) {\n    window.ReactNativeWebView.postMessage(event.data);\n  }, true);\n"};
        oscar = {};
        oscar['uri'] = golf;
        entity['source'] = oscar;
        entity['onMessage'] = report;
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    offset = 5;
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.BG_BASE_SECONDARY;
    verify['backgroundColor'] = offset;
    tango['headerStyle'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot7 = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/age_assurance/native/AgeVerificationModal.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: AgeVerificationModal
        mike = argFoo;
        golf = mike.webviewUrl;
        var _closure2_slot0 = golf;
        mike = _closure1_slot7;
        tango = undefined;
        options = mike.bind(tango)();
        var _closure2_slot1 = options;
        oscar = _closure1_slot3;
        zulu = oscar.useMemo;
        mike = new Array(2);
        mike[0] = options;
        mike[1] = golf;
        entity = function() {
            tango = _closure2_slot1;
            zulu = _closure2_slot0;
            mike = function(argFoo, argBar) { // Original name: getScreens
                entity = argBar;
                var _closure4_slot0 = entity;
                entity = {};
                mike = _closure1_slot5;
                zulu = mike.VERIFY_AGE;
                mike = {};
                oscar = argFoo;
                oscar = oscar.headerStyle;
                mike['headerStyle'] = oscar;
                oscar = function() { // Original name: headerTitle
                    entity = null;
                    return entity;
                };
                mike['headerTitle'] = oscar;
                golf = _closure1_slot0;
                oscar = _closure1_slot2;
                report = 6;
                oscar = oscar[report];
                report = undefined;
                golf = golf.bind(report)(oscar);
                oscar = golf.getHeaderCloseButton;
                report = function() {
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 2;
                    mike = mike[entity];
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    entity = mike.pop;
                    entity = entity.bind(mike)();
                    return entity;
                };
                report = oscar.bind(golf)(report);
                mike['headerLeft'] = report;
                tango = function() { // Original name: render
                    tango = _closure1_slot4;
                    zulu = _closure1_slot6;
                    mike = {};
                    entity = _closure4_slot0;
                    mike['webviewUrl'] = entity;
                    entity = undefined;
                    entity = tango.bind(entity)(zulu, mike);
                    return entity;
                };
                mike['render'] = tango;
                entity[zulu] = mike;
                return entity;
            };
            entity = undefined;
            entity = mike.bind(entity)(tango, zulu);
            return entity;
        };
        oscar = zulu.bind(oscar)(entity, mike);
        zulu = _closure1_slot4;
        options = _closure1_slot0;
        verify = _closure1_slot2;
        entity = 7;
        entity = verify[entity];
        entity = options.bind(tango)(entity);
        mike = entity.Navigator;
        entity = {};
        entity['screens'] = oscar;
        report = _closure1_slot5;
        report = report.VERIFY_AGE;
        entity['initialRouteName'] = report;
        report = 8;
        oscar = verify[report];
        oscar = options.bind(tango)(oscar);
        golf = oscar.intl;
        oscar = golf.string;
        report = verify[report];
        report = options.bind(tango)(report);
        report = report.t;
        report = report.13/7kZ;
        report = oscar.bind(golf)(report);
        entity['headerBackTitle'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();