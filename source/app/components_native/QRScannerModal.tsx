// app/components_native/QRScannerModal.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        report = argBar;
        verify = argBaz;
        zuuluu = argFre;
        oscard = argPlu;
        var _closure1_slot0 = report;
        var _closure1_slot1 = verify;
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
        tangon = verify.bind(entity)(tangon);
        var _closure1_slot3 = tangon;
        tangon = 1;
        golfie = oscard[tangon];
        tangon = argCor;
        tangon = tangon.bind(entity)(golfie);
        var _closure1_slot4 = tangon;
        tangon = 2;
        tangon = oscard[tangon];
        tangon = report.bind(entity)(tangon);
        golfie = tangon.requireNativeComponent;
        tangon = tangon.View;
        var _closure1_slot5 = tangon;
        tangon = 3;
        tangon = oscard[tangon];
        tangon = report.bind(entity)(tangon);
        tangon = tangon.UserSettingsSections;
        var _closure1_slot6 = tangon;
        tangon = 4;
        tangon = oscard[tangon];
        tangon = report.bind(entity)(tangon);
        tangon = tangon.FAMILY_CENTER_LINK_REQUEST_REGEX;
        var _closure1_slot7 = tangon;
        tangon = 5;
        tangon = oscard[tangon];
        tangon = report.bind(entity)(tangon);
        option = tangon.jsx;
        var _closure1_slot8 = option;
        tangon = tangon.jsxs;
        var _closure1_slot9 = tangon;
        tangon = 6;
        tangon = oscard[tangon];
        option = report.bind(entity)(tangon);
        tangon = option.isAndroid;
        tangon = tangon.bind(option)();
        if(tangon) { _fun00002_ip = 232; continue _fun00001 }
 219:
        tangon = 'DCDQRScanner';
        tangon = golfie.bind(entity)(tangon);
        _fun00002_ip = 244; continue _fun00001;
 232:
        golfie = 7;
        golfie = oscard[golfie];
        tangon = verify.bind(entity)(golfie);
 244:
        var _closure1_slot10 = tangon;
        tangon = function(argFoo) { // Original name: DCDQRScanner
            tangon = _closure1_slot8;
            zuuluu = _closure1_slot10;
            michal = {};
            report = argFoo;
            oscard = michal;
            entity = copyDataProperties(oscard, report);
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        var _closure1_slot11 = tangon;
        tangon = {};
        golfie = {'position': 'absolute', 'height': '100%', 'width': '100%'};
        tangon['scanner'] = golfie;
        golfie = {};
        option = 8;
        golfie['marginLeft'] = option;
        tangon['closeButton'] = golfie;
        golfie = {};
        offset = oscard[option];
        offset = verify.bind(entity)(offset);
        offset = offset.unsafe_rawColors;
        offset = offset.BLACK_500;
        golfie['backgroundColor'] = offset;
        tangon['emptyView'] = golfie;
        golfie = {'marginLeft': 16, 'marginRight': 16, 'marginTop': 'auto', 'borderRadius': 16, 'backgroundColor': null, 'paddingTop': 4, 'paddingBottom': 4, 'paddingLeft': 16, 'paddingRight': 16};
        offset = oscard[option];
        offset = verify.bind(entity)(offset);
        offset = offset.unsafe_rawColors;
        offset = offset.BRAND_500;
        golfie['backgroundColor'] = offset;
        tangon['showHelp'] = golfie;
        golfie = {};
        option = oscard[option];
        option = verify.bind(entity)(option);
        option = option.unsafe_rawColors;
        option = option.WHITE_500;
        golfie['color'] = option;
        option = 'center';
        golfie['textAlign'] = option;
        tangon['text'] = golfie;
        var _closure1_slot12 = tangon;
        tangon = {};
        golfie = 'SUCCEEDED';
        tangon['SUCCEEDED'] = golfie;
        golfie = 'FAILED';
        tangon['FAILED'] = golfie;
        var _closure1_slot13 = tangon;
        tangon = 24;
        tangon = oscard[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.fileFinishedImporting;
        tangon = 'components_native/QRScannerModal.tsx';
        tangon = report.bind(oscard)(tangon);
        michal = function(argFoo) { // Original name: QRScannerModal
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = argFoo;
                michal = entity.showHelp;
                tangon = undefined;
                verify = tangon !== michal;
                if(!verify) { _fun00004_ip = 23; continue _fun00003 }
 20:
                verify = michal;
 23:
                entity = entity.onScanSuccess;
                var _closure2_slot0 = entity;
                report = _closure1_slot4;
                michal = report.useState;
                entity = true;
                zuuluu = michal.bind(report)(entity);
                michal = _closure1_slot3;
                entity = 2;
                entity = michal.bind(tangon)(zuuluu, entity);
                michal = 0;
                golfie = entity[michal];
                oscard = 1;
                entity = entity[oscard];
                var _closure2_slot1 = entity;
                zuuluu = report.useEffect;
                michal = function() {
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 9;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.runAfterInteractions;
                    michal = function() {
                        zuuluu = _closure2_slot1;
                        entity = undefined;
                        michal = false;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    michal = zuuluu.bind(tangon)(michal);
                    var _closure3_slot0 = michal;
                    entity = function() {
                        michal = _closure3_slot0;
                        entity = michal.cancel;
                        entity = entity.bind(michal)();
                        entity = undefined;
                        return entity;
                    };
                    return entity;
                };
                entity = new Array(0);
                entity = zuuluu.bind(report)(michal, entity);
                michal = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 10;
                entity = zuuluu[entity];
                entity = michal.bind(tangon)(entity);
                entity = entity.bind(tangon)();
                backup = entity.bottom;
                result = entity.top;
                zuuluu = _closure1_slot9;
                michal = _closure1_slot5;
                entity = {};
                report = {};
                report['flex'] = oscard;
                entity['style'] = report;
                offset = _closure1_slot8;
                if(golfie) { _fun00004_ip = 214; continue _fun00003 }
 165:
                oscard = _closure1_slot11;
                report = {};
                yankee = _closure1_slot12;
                yankee = yankee.scanner;
                report['style'] = yankee;
                yankee = 'none';
                report['pointerEvents'] = yankee;
                option = function(argFoo) { // Original name: onQRCodeFound
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        entity = argFoo;
                        michal = entity.nativeEvent;
                        zuuluu = michal.status;
                        michal = _closure1_slot13;
                        michal = michal.SUCCEEDED;
                        if(!(michal !== zuuluu)) { _fun00006_ip = 190; continue _fun00005 }
 33:
                        michal = _closure1_slot13;
                        michal = michal.FAILED;
                        zuuluu = _closure1_slot1;
                        yankee = _closure1_slot2;
                        michal = 19;
                        michal = yankee[michal];
                        offset = undefined;
                        tangon = zuuluu.bind(offset)(michal);
                        zuuluu = tangon.show;
                        michal = {};
                        verify = _closure1_slot0;
                        oscard = 20;
                        golfie = yankee[oscard];
                        golfie = verify.bind(offset)(golfie);
                        romeon = golfie.intl;
                        option = romeon.string;
                        golfie = yankee[oscard];
                        golfie = verify.bind(offset)(golfie);
                        golfie = golfie.t;
                        golfie = golfie.QOQlWV;
                        golfie = option.bind(romeon)(golfie);
                        michal['body'] = golfie;
                        golfie = yankee[oscard];
                        golfie = verify.bind(offset)(golfie);
                        option = golfie.intl;
                        golfie = option.string;
                        oscard = yankee[oscard];
                        oscard = verify.bind(offset)(oscard);
                        oscard = oscard.t;
                        oscard = oscard.6S318P;
                        oscard = golfie.bind(option)(oscard);
                        michal['title'] = oscard;
                        michal = zuuluu.bind(tangon)(michal);
                        _fun00006_ip = 385; continue _fun00005;
 190:
                        tangon = _closure2_slot0;
                        zuuluu = undefined;
                        if(!(zuuluu === tangon)) { _fun00006_ip = 623; continue _fun00005 }
 206:
                        oscard = _closure1_slot1;
                        golfie = _closure1_slot2;
                        tangon = 11;
                        tangon = golfie[tangon];
                        golfie = oscard.bind(zuuluu)(tangon);
                        oscard = golfie.toURLSafe;
                        tangon = entity.nativeEvent;
                        tangon = tangon.result;
                        oscard = oscard.bind(golfie)(tangon);
                        tangon = null;
                        if(!(tangon == oscard)) { _fun00006_ip = 256; continue _fun00005 }
 254:
                        oscard = {};
 256:
                        option = oscard.hostname;
                        verify = oscard.pathname;
                        golfie = _closure1_slot0;
                        offset = _closure1_slot2;
                        oscard = 12;
                        oscard = offset[oscard];
                        golfie = golfie.bind(zuuluu)(oscard);
                        oscard = golfie.findRemoteAuthFingerprint;
                        option = oscard.bind(golfie)(option, verify);
                        if(!(tangon == option)) { _fun00006_ip = 527; continue _fun00005 }
 307:
                        golfie = tangon == verify;
                        oscard = undefined;
                        if(golfie) { _fun00006_ip = 331; continue _fun00005 }
 316:
                        offset = verify.match;
                        golfie = _closure1_slot7;
                        oscard = offset.bind(verify)(golfie);
 331:
                        if(!(tangon != oscard)) { _fun00006_ip = 339; continue _fun00005 }
 335:
                        if(!(tangon == verify)) { _fun00006_ip = 419; continue _fun00005 }
 339:
                        oscard = _closure1_slot1;
                        golfie = _closure1_slot2;
                        tangon = 18;
                        tangon = golfie[tangon];
                        offset = oscard.bind(zuuluu)(tangon);
                        golfie = offset.openURL;
                        tangon = entity.nativeEvent;
                        oscard = tangon.result;
                        tangon = false;
                        tangon = golfie.bind(offset)(oscard, zuuluu, tangon);
 385:
                        golfie = _closure1_slot1;
                        oscard = _closure1_slot2;
                        tangon = 13;
                        oscard = oscard[tangon];
                        tangon = undefined;
                        golfie = golfie.bind(tangon)(oscard);
                        oscard = golfie.pop;
                        oscard = oscard.bind(golfie)();
                        return tangon;
 419:
                        oscard = _closure1_slot1;
                        golfie = _closure1_slot2;
                        tangon = 13;
                        tangon = golfie[tangon];
                        oscard = oscard.bind(zuuluu)(tangon);
                        tangon = oscard.pop;
                        tangon = tangon.bind(oscard)();
                        oscard = _closure1_slot0;
                        tangon = 16;
                        tangon = golfie[tangon];
                        yankee = oscard.bind(zuuluu)(tangon);
                        offset = yankee.openUserSettings;
                        tangon = {};
                        romeon = _closure1_slot6;
                        romeon = romeon.FAMILY_CENTER;
                        tangon['screen'] = romeon;
                        tangon = offset.bind(yankee)(tangon);
                        tangon = 17;
                        tangon = golfie[tangon];
                        golfie = oscard.bind(zuuluu)(tangon);
                        oscard = golfie.handleFamilyCenterQRCodeScan;
                        tangon = 'UserSettingsQRCodeScan';
                        tangon = oscard.bind(golfie)(verify, tangon);
                        tangon = undefined;
                        return tangon;
 527:
                        golfie = _closure1_slot1;
                        tangon = _closure1_slot2;
                        oscard = 13;
                        verify = tangon[oscard];
                        offset = golfie.bind(zuuluu)(verify);
                        verify = offset.pop;
                        verify = verify.bind(offset)();
                        oscard = tangon[oscard];
                        golfie = golfie.bind(zuuluu)(oscard);
                        oscard = golfie.pushLazy;
                        verify = _closure1_slot0;
                        report = 15;
                        report = tangon[report];
                        verify = verify.bind(zuuluu)(report);
                        report = 14;
                        report = tangon[report];
                        tangon = tangon.paths;
                        report = verify.bind(zuuluu)(report, tangon);
                        tangon = {};
                        tangon['remoteAuthFingerprint'] = option;
                        tangon = oscard.bind(golfie)(report, tangon);
                        tangon = undefined;
                        return tangon;
 623:
                        michal = _closure2_slot0;
                        entity = entity.nativeEvent;
                        entity = entity.result;
                        entity = michal.bind(zuuluu)(entity);
                        entity = undefined;
                        return entity;
                    }
                };
                report['onQRCodeFound'] = option;
                oscard = offset.bind(tangon)(oscard, report);
                _fun00004_ip = 262; continue _fun00003;
 214:
                option = _closure1_slot5;
                report = {};
                yankee = _closure1_slot12;
                romeon = yankee.scanner;
                yankee = new Array(2);
                yankee[0] = romeon;
                romeon = _closure1_slot12;
                romeon = romeon.emptyView;
                yankee[1] = romeon;
                report['style'] = yankee;
                oscard = offset.bind(tangon)(option, report);
 262:
                report = new Array(3);
                report[0] = oscard;
                offset = _closure1_slot8;
                romeon = _closure1_slot1;
                kiloes = _closure1_slot2;
                oscard = 21;
                oscard = kiloes[oscard];
                option = romeon.bind(tangon)(oscard);
                oscard = {};
                yankee = 'button';
                oscard['accessibilityRole'] = yankee;
                update = _closure1_slot0;
                sizing = 20;
                yankee = kiloes[sizing];
                yankee = update.bind(tangon)(yankee);
                echoed = yankee.intl;
                output = echoed.string;
                yankee = kiloes[sizing];
                yankee = update.bind(tangon)(yankee);
                yankee = yankee.t;
                yankee = yankee.cpT0Cg;
                yankee = output.bind(echoed)(yankee);
                oscard['accessibilityLabel'] = yankee;
                yankee = 22;
                yankee = kiloes[yankee];
                yankee = romeon.bind(tangon)(yankee);
                oscard['source'] = yankee;
                yankee = _closure1_slot12;
                output = yankee.closeButton;
                yankee = new Array(2);
                yankee[0] = output;
                output = {};
                output['marginTop'] = result;
                yankee[1] = output;
                oscard['style'] = yankee;
                yankee = 13;
                yankee = kiloes[yankee];
                yankee = romeon.bind(tangon)(yankee);
                yankee = yankee.pop;
                oscard['onPress'] = yankee;
                oscard = offset.bind(tangon)(option, oscard);
                report[1] = oscard;
                oscard = null;
                if(!verify) { _fun00004_ip = 611; continue _fun00003 }
 447:
                oscard = null;
                if(golfie) { _fun00004_ip = 611; continue _fun00003 }
 455:
                verify = _closure1_slot8;
                option = _closure1_slot5;
                golfie = {};
                offset = _closure1_slot12;
                yankee = offset.showHelp;
                offset = new Array(2);
                offset[0] = yankee;
                yankee = {};
                romeon = 8;
                romeon = backup + romeon;
                yankee['marginBottom'] = romeon;
                offset[1] = yankee;
                golfie['style'] = offset;
                kiloes = _closure1_slot0;
                romeon = _closure1_slot2;
                offset = 23;
                offset = romeon[offset];
                offset = kiloes.bind(tangon)(offset);
                yankee = offset.LegacyText;
                offset = {};
                foxtra = _closure1_slot12;
                foxtra = foxtra.text;
                offset['style'] = foxtra;
                foxtra = romeon[sizing];
                foxtra = kiloes.bind(tangon)(foxtra);
                backup = foxtra.intl;
                foxtra = backup.string;
                romeon = romeon[sizing];
                romeon = kiloes.bind(tangon)(romeon);
                romeon = romeon.t;
                romeon = romeon.dklV0N;
                romeon = foxtra.bind(backup)(romeon);
                offset['children'] = romeon;
                offset = verify.bind(tangon)(yankee, offset);
                golfie['children'] = offset;
                oscard = verify.bind(tangon)(option, golfie);
 611:
                report[2] = oscard;
                entity['children'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            }
        };
        zuuluu['default'] = michal;
        return entity;
    }
})();