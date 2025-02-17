// app/components_native/QRScannerModal.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        report = argBar;
        verify = argBaz;
        zulu = argFred;
        oscar = argPlugh;
        var _closure1_slot0 = report;
        var _closure1_slot1 = verify;
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
        tango = verify.bind(entity)(tango);
        var _closure1_slot3 = tango;
        tango = 1;
        golf = oscar[tango];
        tango = argCorge;
        tango = tango.bind(entity)(golf);
        var _closure1_slot4 = tango;
        tango = 2;
        tango = oscar[tango];
        tango = report.bind(entity)(tango);
        golf = tango.requireNativeComponent;
        tango = tango.View;
        var _closure1_slot5 = tango;
        tango = 3;
        tango = oscar[tango];
        tango = report.bind(entity)(tango);
        tango = tango.UserSettingsSections;
        var _closure1_slot6 = tango;
        tango = 4;
        tango = oscar[tango];
        tango = report.bind(entity)(tango);
        tango = tango.FAMILY_CENTER_LINK_REQUEST_REGEX;
        var _closure1_slot7 = tango;
        tango = 5;
        options = oscar[tango];
        options = report.bind(entity)(options);
        options = options.jsx;
        var _closure1_slot8 = options;
        tango = oscar[tango];
        tango = report.bind(entity)(tango);
        tango = tango.jsxs;
        var _closure1_slot9 = tango;
        tango = 6;
        tango = oscar[tango];
        options = report.bind(entity)(tango);
        tango = options.isAndroid;
        tango = tango.bind(options)();
        if(tango) { _fun00002_ip = 241; continue _fun00001 }
 228:
        tango = 'DCDQRScanner';
        tango = golf.bind(entity)(tango);
        _fun00002_ip = 253; continue _fun00001;
 241:
        golf = 7;
        golf = oscar[golf];
        tango = verify.bind(entity)(golf);
 253:
        var _closure1_slot10 = tango;
        tango = function(argFoo) { // Original name: DCDQRScanner
            tango = _closure1_slot8;
            zulu = _closure1_slot10;
            mike = {};
            report = argFoo;
            oscar = mike;
            entity = copyDataProperties(oscar, report);
            entity = undefined;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
        };
        var _closure1_slot11 = tango;
        tango = {};
        golf = {'position': 'absolute', 'height': '100%', 'width': '100%'};
        tango['scanner'] = golf;
        golf = {};
        options = 8;
        golf['marginLeft'] = options;
        tango['closeButton'] = golf;
        golf = {};
        offset = oscar[options];
        offset = verify.bind(entity)(offset);
        offset = offset.unsafe_rawColors;
        offset = offset.BLACK_500;
        golf['backgroundColor'] = offset;
        tango['emptyView'] = golf;
        golf = {'marginLeft': 16, 'marginRight': 16, 'marginTop': 'auto', 'borderRadius': 16, 'backgroundColor': null, 'paddingTop': 4, 'paddingBottom': 4, 'paddingLeft': 16, 'paddingRight': 16};
        offset = oscar[options];
        offset = verify.bind(entity)(offset);
        offset = offset.unsafe_rawColors;
        offset = offset.BRAND_500;
        golf['backgroundColor'] = offset;
        tango['showHelp'] = golf;
        golf = {};
        options = oscar[options];
        options = verify.bind(entity)(options);
        options = options.unsafe_rawColors;
        options = options.WHITE_500;
        golf['color'] = options;
        options = 'center';
        golf['textAlign'] = options;
        tango['text'] = golf;
        var _closure1_slot12 = tango;
        tango = {};
        golf = 'SUCCEEDED';
        tango['SUCCEEDED'] = golf;
        golf = 'FAILED';
        tango['FAILED'] = golf;
        var _closure1_slot13 = tango;
        tango = 24;
        tango = oscar[tango];
        oscar = report.bind(entity)(tango);
        report = oscar.fileFinishedImporting;
        tango = 'components_native/QRScannerModal.tsx';
        tango = report.bind(oscar)(tango);
        mike = function(argFoo) { // Original name: QRScannerModal
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = argFoo;
                mike = entity.showHelp;
                tango = undefined;
                verify = tango !== mike;
                if(!verify) { _fun00004_ip = 23; continue _fun00003 }
 20:
                verify = mike;
 23:
                entity = entity.onScanSuccess;
                var _closure2_slot0 = entity;
                report = _closure1_slot4;
                mike = report.useState;
                entity = true;
                zulu = mike.bind(report)(entity);
                mike = _closure1_slot3;
                entity = 2;
                entity = mike.bind(tango)(zulu, entity);
                mike = 0;
                golf = entity[mike];
                oscar = 1;
                entity = entity[oscar];
                var _closure2_slot1 = entity;
                zulu = report.useEffect;
                mike = function() {
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 9;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.runAfterInteractions;
                    mike = function() {
                        zulu = _closure2_slot1;
                        entity = undefined;
                        mike = false;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    mike = zulu.bind(tango)(mike);
                    var _closure3_slot0 = mike;
                    entity = function() {
                        mike = _closure3_slot0;
                        entity = mike.cancel;
                        entity = entity.bind(mike)();
                        entity = undefined;
                        return entity;
                    };
                    return entity;
                };
                entity = new Array(0);
                entity = zulu.bind(report)(mike, entity);
                mike = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 10;
                entity = zulu[entity];
                entity = mike.bind(tango)(entity);
                entity = entity.bind(tango)();
                backup = entity.bottom;
                result = entity.top;
                zulu = _closure1_slot9;
                mike = _closure1_slot5;
                entity = {};
                report = {};
                report['flex'] = oscar;
                entity['style'] = report;
                offset = _closure1_slot8;
                if(golf) { _fun00004_ip = 214; continue _fun00003 }
 165:
                oscar = _closure1_slot11;
                report = {};
                yankee = _closure1_slot12;
                yankee = yankee.scanner;
                report['style'] = yankee;
                yankee = 'none';
                report['pointerEvents'] = yankee;
                options = function(argFoo) { // Original name: onQRCodeFound
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        entity = argFoo;
                        mike = entity.nativeEvent;
                        zulu = mike.status;
                        mike = _closure1_slot13;
                        mike = mike.SUCCEEDED;
                        if(!(mike !== zulu)) { _fun00006_ip = 190; continue _fun00005 }
 33:
                        mike = _closure1_slot13;
                        mike = mike.FAILED;
                        zulu = _closure1_slot1;
                        yankee = _closure1_slot2;
                        mike = 19;
                        mike = yankee[mike];
                        offset = undefined;
                        tango = zulu.bind(offset)(mike);
                        zulu = tango.show;
                        mike = {};
                        verify = _closure1_slot0;
                        oscar = 20;
                        golf = yankee[oscar];
                        golf = verify.bind(offset)(golf);
                        romeo = golf.intl;
                        options = romeo.string;
                        golf = yankee[oscar];
                        golf = verify.bind(offset)(golf);
                        golf = golf.t;
                        golf = golf.QOQlWV;
                        golf = options.bind(romeo)(golf);
                        mike['body'] = golf;
                        golf = yankee[oscar];
                        golf = verify.bind(offset)(golf);
                        options = golf.intl;
                        golf = options.string;
                        oscar = yankee[oscar];
                        oscar = verify.bind(offset)(oscar);
                        oscar = oscar.t;
                        oscar = oscar.6S318P;
                        oscar = golf.bind(options)(oscar);
                        mike['title'] = oscar;
                        mike = zulu.bind(tango)(mike);
                        _fun00006_ip = 385; continue _fun00005;
 190:
                        tango = _closure2_slot0;
                        zulu = undefined;
                        if(!(zulu === tango)) { _fun00006_ip = 623; continue _fun00005 }
 206:
                        oscar = _closure1_slot1;
                        golf = _closure1_slot2;
                        tango = 11;
                        tango = golf[tango];
                        golf = oscar.bind(zulu)(tango);
                        oscar = golf.toURLSafe;
                        tango = entity.nativeEvent;
                        tango = tango.result;
                        oscar = oscar.bind(golf)(tango);
                        tango = null;
                        if(!(tango == oscar)) { _fun00006_ip = 256; continue _fun00005 }
 254:
                        oscar = {};
 256:
                        options = oscar.hostname;
                        verify = oscar.pathname;
                        golf = _closure1_slot0;
                        offset = _closure1_slot2;
                        oscar = 12;
                        oscar = offset[oscar];
                        golf = golf.bind(zulu)(oscar);
                        oscar = golf.findRemoteAuthFingerprint;
                        options = oscar.bind(golf)(options, verify);
                        if(!(tango == options)) { _fun00006_ip = 527; continue _fun00005 }
 307:
                        golf = tango == verify;
                        oscar = undefined;
                        if(golf) { _fun00006_ip = 331; continue _fun00005 }
 316:
                        offset = verify.match;
                        golf = _closure1_slot7;
                        oscar = offset.bind(verify)(golf);
 331:
                        if(!(tango != oscar)) { _fun00006_ip = 339; continue _fun00005 }
 335:
                        if(!(tango == verify)) { _fun00006_ip = 419; continue _fun00005 }
 339:
                        oscar = _closure1_slot1;
                        golf = _closure1_slot2;
                        tango = 18;
                        tango = golf[tango];
                        offset = oscar.bind(zulu)(tango);
                        golf = offset.openURL;
                        tango = entity.nativeEvent;
                        oscar = tango.result;
                        tango = false;
                        tango = golf.bind(offset)(oscar, zulu, tango);
 385:
                        golf = _closure1_slot1;
                        oscar = _closure1_slot2;
                        tango = 13;
                        oscar = oscar[tango];
                        tango = undefined;
                        golf = golf.bind(tango)(oscar);
                        oscar = golf.pop;
                        oscar = oscar.bind(golf)();
                        return tango;
 419:
                        oscar = _closure1_slot1;
                        golf = _closure1_slot2;
                        tango = 13;
                        tango = golf[tango];
                        oscar = oscar.bind(zulu)(tango);
                        tango = oscar.pop;
                        tango = tango.bind(oscar)();
                        oscar = _closure1_slot0;
                        tango = 16;
                        tango = golf[tango];
                        yankee = oscar.bind(zulu)(tango);
                        offset = yankee.openUserSettings;
                        tango = {};
                        romeo = _closure1_slot6;
                        romeo = romeo.FAMILY_CENTER;
                        tango['screen'] = romeo;
                        tango = offset.bind(yankee)(tango);
                        tango = 17;
                        tango = golf[tango];
                        golf = oscar.bind(zulu)(tango);
                        oscar = golf.handleFamilyCenterQRCodeScan;
                        tango = 'UserSettingsQRCodeScan';
                        tango = oscar.bind(golf)(verify, tango);
                        tango = undefined;
                        return tango;
 527:
                        golf = _closure1_slot1;
                        tango = _closure1_slot2;
                        oscar = 13;
                        verify = tango[oscar];
                        offset = golf.bind(zulu)(verify);
                        verify = offset.pop;
                        verify = verify.bind(offset)();
                        oscar = tango[oscar];
                        golf = golf.bind(zulu)(oscar);
                        oscar = golf.pushLazy;
                        verify = _closure1_slot0;
                        report = 15;
                        report = tango[report];
                        verify = verify.bind(zulu)(report);
                        report = 14;
                        report = tango[report];
                        tango = tango.paths;
                        report = verify.bind(zulu)(report, tango);
                        tango = {};
                        tango['remoteAuthFingerprint'] = options;
                        tango = oscar.bind(golf)(report, tango);
                        tango = undefined;
                        return tango;
 623:
                        mike = _closure2_slot0;
                        entity = entity.nativeEvent;
                        entity = entity.result;
                        entity = mike.bind(zulu)(entity);
                        entity = undefined;
                        return entity;
                    }
                };
                report['onQRCodeFound'] = options;
                oscar = offset.bind(tango)(oscar, report);
                _fun00004_ip = 262; continue _fun00003;
 214:
                options = _closure1_slot5;
                report = {};
                yankee = _closure1_slot12;
                romeo = yankee.scanner;
                yankee = new Array(2);
                yankee[0] = romeo;
                romeo = _closure1_slot12;
                romeo = romeo.emptyView;
                yankee[1] = romeo;
                report['style'] = yankee;
                oscar = offset.bind(tango)(options, report);
 262:
                report = new Array(3);
                report[0] = oscar;
                offset = _closure1_slot8;
                romeo = _closure1_slot1;
                kilo = _closure1_slot2;
                oscar = 21;
                oscar = kilo[oscar];
                options = romeo.bind(tango)(oscar);
                oscar = {};
                yankee = 'button';
                oscar['accessibilityRole'] = yankee;
                update = _closure1_slot0;
                sizing = 20;
                yankee = kilo[sizing];
                yankee = update.bind(tango)(yankee);
                echo = yankee.intl;
                output = echo.string;
                yankee = kilo[sizing];
                yankee = update.bind(tango)(yankee);
                yankee = yankee.t;
                yankee = yankee.cpT0Cg;
                yankee = output.bind(echo)(yankee);
                oscar['accessibilityLabel'] = yankee;
                yankee = 22;
                yankee = kilo[yankee];
                yankee = romeo.bind(tango)(yankee);
                oscar['source'] = yankee;
                yankee = _closure1_slot12;
                output = yankee.closeButton;
                yankee = new Array(2);
                yankee[0] = output;
                output = {};
                output['marginTop'] = result;
                yankee[1] = output;
                oscar['style'] = yankee;
                yankee = 13;
                yankee = kilo[yankee];
                yankee = romeo.bind(tango)(yankee);
                yankee = yankee.pop;
                oscar['onPress'] = yankee;
                oscar = offset.bind(tango)(options, oscar);
                report[1] = oscar;
                oscar = null;
                if(!verify) { _fun00004_ip = 611; continue _fun00003 }
 447:
                oscar = null;
                if(golf) { _fun00004_ip = 611; continue _fun00003 }
 455:
                verify = _closure1_slot8;
                options = _closure1_slot5;
                golf = {};
                offset = _closure1_slot12;
                yankee = offset.showHelp;
                offset = new Array(2);
                offset[0] = yankee;
                yankee = {};
                romeo = 8;
                romeo = backup + romeo;
                yankee['marginBottom'] = romeo;
                offset[1] = yankee;
                golf['style'] = offset;
                kilo = _closure1_slot0;
                romeo = _closure1_slot2;
                offset = 23;
                offset = romeo[offset];
                offset = kilo.bind(tango)(offset);
                yankee = offset.LegacyText;
                offset = {};
                foxtrot = _closure1_slot12;
                foxtrot = foxtrot.text;
                offset['style'] = foxtrot;
                foxtrot = romeo[sizing];
                foxtrot = kilo.bind(tango)(foxtrot);
                backup = foxtrot.intl;
                foxtrot = backup.string;
                romeo = romeo[sizing];
                romeo = kilo.bind(tango)(romeo);
                romeo = romeo.t;
                romeo = romeo.dklV0N;
                romeo = foxtrot.bind(backup)(romeo);
                offset['children'] = romeo;
                offset = verify.bind(tango)(yankee, offset);
                golf['children'] = offset;
                oscar = verify.bind(tango)(options, golf);
 611:
                report[2] = oscar;
                entity['children'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        zulu['default'] = mike;
        return entity;
    }
})();