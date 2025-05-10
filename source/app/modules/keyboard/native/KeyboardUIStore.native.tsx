// app/modules/keyboard/native/KeyboardUIStore.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        oscard = argBar;
        option = argBaz;
        zuuluu = argFre;
        golfie = argPlu;
        var _closure1_slot0 = oscard;
        var _closure1_slot1 = option;
        var _closure1_slot2 = golfie;
        entity = function(argFoo, argBar) { // Original name: getCustomKeyboardHeight
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                option = argFoo;
                entity = global;
                offset = entity.Math;
                tangon = offset.max;
                report = _closure1_slot0;
                michal = _closure1_slot2;
                golfie = 4;
                michal = michal[golfie];
                oscard = undefined;
                michal = report.bind(oscard)(michal);
                yankee = michal.Storage;
                verify = yankee.get;
                michal = _closure1_slot6;
                report = 0;
                verify = verify.bind(yankee)(michal, report);
                michal = null;
                yankee = michal != verify;
                michal = 0;
                if(!yankee) { _fun00004_ip = 78; continue _fun00003 }
 75:
                michal = verify;
 78:
                verify = 200;
                tangon = tangon.bind(offset)(michal, verify);
                michal = entity.Math;
                entity = michal.max;
                michal = entity.bind(michal)(option, verify);
                verify = _closure1_slot0;
                offset = _closure1_slot2;
                entity = 5;
                entity = offset[entity];
                entity = verify.bind(oscard)(entity);
                entity = entity.KeyboardTypes;
                offset = entity.SYSTEM;
                verify = argBar;
                entity = tangon;
                if(!(verify === offset)) { _fun00004_ip = 201; continue _fun00003 }
 146:
                entity = tangon;
                if(!(report !== option)) { _fun00004_ip = 201; continue _fun00003 }
 153:
                entity = michal;
                if(!(michal !== tangon)) { _fun00004_ip = 201; continue _fun00003 }
 160:
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                tangon = tangon[golfie];
                tangon = report.bind(oscard)(tangon);
                report = tangon.Storage;
                tangon = report.set;
                zuuluu = _closure1_slot6;
                zuuluu = tangon.bind(report)(zuuluu, michal);
                entity = michal;
 201:
                return entity;
            }
        };
        var _closure1_slot8 = entity;
        entity = function(argFoo) { // Original name: getSystemKeyboardHeight
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = argFoo;
                oscard = entity.keyboardHeight;
                tangon = entity.excludeSafeAreaInsets;
                zuuluu = _closure1_slot0;
                report = _closure1_slot2;
                entity = 6;
                entity = report[entity];
                report = undefined;
                zuuluu = zuuluu.bind(report)(entity);
                entity = zuuluu.isAndroid;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00006_ip = 104; continue _fun00005 }
 52:
                entity = 0;
                if(!(entity !== oscard)) { _fun00006_ip = 102; continue _fun00005 }
 58:
                zuuluu = 0;
                if(tangon) { _fun00006_ip = 98; continue _fun00005 }
 63:
                option = _closure1_slot0;
                verify = _closure1_slot2;
                golfie = 8;
                golfie = verify[golfie];
                option = option.bind(report)(golfie);
                golfie = option.getSafeAreaInsets;
                golfie = golfie.bind(option)();
                zuuluu = golfie.bottom;
 98:
                entity = oscard + zuuluu;
 102:
                _fun00006_ip = 137; continue _fun00005;
 104:
                zuuluu = _closure1_slot1;
                oscard = _closure1_slot2;
                michal = 7;
                michal = oscard[michal];
                zuuluu = zuuluu.bind(report)(michal);
                michal = zuuluu.getImeInsets;
                entity = michal.bind(zuuluu)(tangon);
 137:
                return entity;
            }
        };
        var _closure1_slot9 = entity;
        entity = function(argFoo) { // Original name: updateSystemKeyboardStoreState
            entity = argFoo;
            var _closure2_slot0 = entity;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 9;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                zuuluu = _closure1_slot7;
                michal = zuuluu.setState;
                entity = function(argFoo) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        entity = argFoo;
                        michal = _closure2_slot0;
                        verify = michal.keyboardDuration;
                        yankee = null;
                        if(!(yankee == verify)) { _fun00008_ip = 28; continue _fun00007 }
 22:
                        verify = entity.keyboardDuration;
 28:
                        tangon = _closure1_slot9;
                        zuuluu = {};
                        report = _closure2_slot0;
                        report = report.keyboardHeight;
                        if(!(yankee == report)) { _fun00008_ip = 57; continue _fun00007 }
 51:
                        report = entity.keyboardHeight;
 57:
                        zuuluu['keyboardHeight'] = report;
                        sizing = false;
                        zuuluu['excludeSafeAreaInsets'] = sizing;
                        romeon = undefined;
                        option = tangon.bind(romeon)(zuuluu);
                        tangon = _closure1_slot9;
                        zuuluu = {};
                        report = _closure2_slot0;
                        report = report.keyboardHeight;
                        if(!(yankee == report)) { _fun00008_ip = 102; continue _fun00007 }
 96:
                        report = entity.keyboardHeight;
 102:
                        zuuluu['keyboardHeight'] = report;
                        report = true;
                        zuuluu['excludeSafeAreaInsets'] = report;
                        golfie = tangon.bind(romeon)(zuuluu);
                        zuuluu = _closure2_slot0;
                        zuuluu = zuuluu.keyboardType;
                        tangon = yankee == zuuluu;
                        report = undefined;
                        if(tangon) { _fun00008_ip = 143; continue _fun00007 }
 138:
                        report = zuuluu.type;
 143:
                        if(!(yankee == report)) { _fun00008_ip = 153; continue _fun00007 }
 147:
                        report = entity.keyboardType;
 153:
                        zuuluu = entity.keyboardType;
                        if(!(report === zuuluu)) { _fun00008_ip = 171; continue _fun00007 }
 163:
                        tangon = entity.keyboardTypePrevious;
                        _fun00008_ip = 177; continue _fun00007;
 171:
                        tangon = entity.keyboardType;
 177:
                        zuuluu = _closure1_slot8;
                        zuuluu = zuuluu.bind(romeon)(golfie, report);
                        offset = entity.keyboardContexts;
                        kiloes = offset[report];
                        offset = _closure2_slot0;
                        offset = offset.keyboardType;
                        backup = yankee == offset;
                        foxtra = undefined;
                        if(backup) { _fun00008_ip = 221; continue _fun00007 }
 216:
                        foxtra = offset.context;
 221:
                        if(!(yankee == foxtra)) { _fun00008_ip = 235; continue _fun00007 }
 225:
                        offset = entity.keyboardContexts;
                        foxtra = offset[report];
 235:
                        backup = 'object';
                        offset = typeof kiloes;
                        if(!(backup === offset)) { _fun00008_ip = 253; continue _fun00007 }
 246:
                        offset = typeof foxtra;
                        if(!(backup !== offset)) { _fun00008_ip = 259; continue _fun00007 }
 253:
                        offset = kiloes !== foxtra;
                        _fun00008_ip = 288; continue _fun00007;
 259:
                        output = _closure1_slot1;
                        result = _closure1_slot2;
                        backup = 10;
                        backup = result[backup];
                        backup = output.bind(romeon)(backup);
                        backup = backup.bind(romeon)(kiloes, foxtra);
                        offset = !backup;
 288:
                        oscard = _closure2_slot0;
                        oscard = oscard.keyboardOpen;
                        if(!(yankee == oscard)) { _fun00008_ip = 308; continue _fun00007 }
 302:
                        oscard = entity.keyboardOpen;
 308:
                        yankee = entity.keyboardOpen;
                        if(!(oscard !== yankee)) { _fun00008_ip = 369; continue _fun00007 }
 318:
                        backup = entity.keyboardContexts;
                        kiloes = _closure1_slot0;
                        yankee = _closure1_slot2;
                        echoed = 5;
                        yankee = yankee[echoed];
                        yankee = kiloes.bind(romeon)(yankee);
                        yankee = yankee.KeyboardTypes;
                        yankee = yankee.SYSTEM;
                        yankee = backup[yankee];
                        yankee = yankee.keyboardWillOpen;
                        if(yankee) { _fun00008_ip = 405; continue _fun00007 }
 369:
                        backup = entity.keyboardContexts;
                        if(offset) { _fun00008_ip = 383; continue _fun00007 }
 378:
                        offset = backup;
                        _fun00008_ip = 403; continue _fun00007;
 383:
                        yankee = {};
                        source = yankee;
                        update = backup;
                        backup = copyDataProperties(source, update);
                        yankee[report] = foxtra;
                        offset = yankee;
 403:
                        _fun00008_ip = 506; continue _fun00007;
 405:
                        yankee = {};
                        update = entity.keyboardContexts;
                        source = yankee;
                        foxtra = copyDataProperties(source, update);
                        result = _closure1_slot0;
                        kiloes = _closure1_slot2;
                        foxtra = kiloes[echoed];
                        foxtra = result.bind(romeon)(foxtra);
                        foxtra = foxtra.KeyboardTypes;
                        backup = foxtra.SYSTEM;
                        foxtra = {};
                        output = entity.keyboardContexts;
                        kiloes = kiloes[echoed];
                        kiloes = result.bind(romeon)(kiloes);
                        kiloes = kiloes.KeyboardTypes;
                        kiloes = kiloes.SYSTEM;
                        update = output[kiloes];
                        source = foxtra;
                        kiloes = copyDataProperties(source, update);
                        kiloes = 'keyboardWillOpen';
                        foxtra[kiloes] = sizing;
                        yankee[backup] = foxtra;
                        offset = yankee;
 506:
                        yankee = _closure1_slot1;
                        foxtra = _closure1_slot2;
                        michal = 10;
                        michal = foxtra[michal];
                        yankee = yankee.bind(romeon)(michal);
                        michal = entity.keyboardContexts;
                        michal = yankee.bind(romeon)(michal, offset);
                        michal = !michal;
                        yankee = entity.keyboardDuration;
                        if(!(yankee === verify)) { _fun00008_ip = 604; continue _fun00007 }
 551:
                        if(michal) { _fun00008_ip = 604; continue _fun00007 }
 554:
                        michal = entity.keyboardHeight;
                        if(!(michal === option)) { _fun00008_ip = 604; continue _fun00007 }
 564:
                        michal = entity.keyboardHeightExcludingSafeAreaInsets;
                        if(!(michal === golfie)) { _fun00008_ip = 604; continue _fun00007 }
 574:
                        michal = entity.keyboardType;
                        if(!(michal === report)) { _fun00008_ip = 604; continue _fun00007 }
 584:
                        michal = entity.customKeyboardHeight;
                        if(!(michal === zuuluu)) { _fun00008_ip = 604; continue _fun00007 }
 594:
                        michal = entity.keyboardOpen;
                        if(!(michal !== oscard)) { _fun00008_ip = 649; continue _fun00007 }
 604:
                        michal = {};
                        michal['keyboardContexts'] = offset;
                        michal['keyboardDuration'] = verify;
                        michal['keyboardHeight'] = option;
                        michal['keyboardHeightExcludingSafeAreaInsets'] = golfie;
                        michal['keyboardOpen'] = oscard;
                        michal['keyboardType'] = report;
                        michal['keyboardTypePrevious'] = tangon;
                        michal['customKeyboardHeight'] = zuuluu;
                        entity = michal;
 649:
                        return entity;
                    }
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        var _closure1_slot10 = entity;
        entity = global;
        verify = entity.Object;
        report = verify.defineProperty;
        tangon = {};
        entity = true;
        tangon['value'] = entity;
        entity = '__esModule';
        entity = report.bind(verify)(zuuluu, entity, tangon);
        entity = 0;
        tangon = golfie[entity];
        entity = undefined;
        tangon = oscard.bind(entity)(tangon);
        yankee = tangon.Keyboard;
        tangon = 1;
        tangon = golfie[tangon];
        tangon = oscard.bind(entity)(tangon);
        tangon = tangon.AppLauncherRouteName;
        var _closure1_slot3 = tangon;
        tangon = 2;
        tangon = golfie[tangon];
        tangon = oscard.bind(entity)(tangon);
        tangon = tangon.ExpressionPickerViewType;
        var _closure1_slot4 = tangon;
        tangon = 3;
        tangon = golfie[tangon];
        tangon = oscard.bind(entity)(tangon);
        tangon = tangon.MediaKeyboardTarget;
        var _closure1_slot5 = tangon;
        tangon = 'customKeyboardHeight';
        var _closure1_slot6 = tangon;
        tangon = 6;
        report = golfie[tangon];
        verify = oscard.bind(entity)(report);
        report = verify.isAndroid;
        report = report.bind(verify)();
        romeon = 'keyboardWillShow';
        if(!report) { _fun00002_ip = 214; continue _fun00001 }
 208:
        romeon = 'keyboardDidShow';
 214:
        tangon = golfie[tangon];
        report = oscard.bind(entity)(tangon);
        tangon = report.isAndroid;
        tangon = tangon.bind(report)();
        offset = 'keyboardWillHide';
        if(!tangon) { _fun00002_ip = 247; continue _fun00001 }
 241:
        offset = 'keyboardDidHide';
 247:
        tangon = 11;
        tangon = golfie[tangon];
        verify = oscard.bind(entity)(tangon);
        report = verify.create;
        tangon = function() {
            entity = {};
            verify = _closure1_slot8;
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            michal = 5;
            oscard = report[michal];
            zuuluu = undefined;
            oscard = tangon.bind(zuuluu)(oscard);
            oscard = oscard.KeyboardTypes;
            oscard = oscard.SYSTEM;
            option = 0;
            oscard = verify.bind(zuuluu)(option, oscard);
            entity['customKeyboardHeight'] = oscard;
            verify = {};
            oscard = report[michal];
            oscard = tangon.bind(zuuluu)(oscard);
            oscard = oscard.KeyboardTypes;
            yankee = oscard.SYSTEM;
            offset = {};
            oscard = false;
            offset['keyboardWillOpen'] = oscard;
            verify[yankee] = offset;
            offset = report[michal];
            offset = tangon.bind(zuuluu)(offset);
            offset = offset.KeyboardTypes;
            yankee = offset.EXPRESSION;
            offset = _closure1_slot4;
            offset = offset.EMOJI;
            verify[yankee] = offset;
            offset = report[michal];
            offset = tangon.bind(zuuluu)(offset);
            offset = offset.KeyboardTypes;
            yankee = offset.MEDIA;
            offset = {};
            romeon = _closure1_slot5;
            romeon = romeon.CHAT;
            offset['target'] = romeon;
            verify[yankee] = offset;
            offset = report[michal];
            offset = tangon.bind(zuuluu)(offset);
            offset = offset.KeyboardTypes;
            yankee = offset.APP_LAUNCHER;
            offset = {};
            romeon = _closure1_slot3;
            romeon = romeon.HOME;
            offset['initialRouteName'] = romeon;
            verify[yankee] = offset;
            entity['keyboardContexts'] = verify;
            entity['keyboardDuration'] = option;
            option = _closure1_slot9;
            golfie = {'keyboardHeight': 0, 'excludeSafeAreaInsets': false};
            golfie = option.bind(zuuluu)(golfie);
            entity['keyboardHeight'] = golfie;
            golfie = {'keyboardHeight': 0, 'excludeSafeAreaInsets': true};
            golfie = option.bind(zuuluu)(golfie);
            entity['keyboardHeightExcludingSafeAreaInsets'] = golfie;
            entity['keyboardOpen'] = oscard;
            oscard = report[michal];
            oscard = tangon.bind(zuuluu)(oscard);
            oscard = oscard.KeyboardTypes;
            oscard = oscard.SYSTEM;
            entity['keyboardType'] = oscard;
            michal = report[michal];
            michal = tangon.bind(zuuluu)(michal);
            michal = michal.KeyboardTypes;
            michal = michal.SYSTEM;
            entity['keyboardTypePrevious'] = michal;
            return entity;
        };
        tangon = report.bind(verify)(tangon);
        var _closure1_slot7 = tangon;
        verify = yankee.addListener;
        report = function(argFoo) {
            michal = argFoo;
            entity = michal.duration;
            michal = michal.endCoordinates;
            tangon = michal.height;
            zuuluu = _closure1_slot10;
            michal = {};
            michal['keyboardHeight'] = tangon;
            michal['keyboardDuration'] = entity;
            entity = true;
            michal['keyboardOpen'] = entity;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        report = verify.bind(yankee)(romeon, report);
        verify = yankee.addListener;
        report = function() {
            zuuluu = _closure1_slot10;
            entity = undefined;
            michal = {'keyboardHeight': 0, 'keyboardOpen': false};
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        report = verify.bind(yankee)(offset, report);
        report = 12;
        report = golfie[report];
        option = option.bind(entity)(report);
        report = function(argFoo) {
            entity = argFoo;
            entity = entity.bottom;
            zuuluu = _closure1_slot10;
            michal = {};
            michal['keyboardImeInsetBottom'] = entity;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        report = option.bind(entity)(report);
        report = 13;
        report = golfie[report];
        golfie = oscard.bind(entity)(report);
        oscard = golfie.fileFinishedImporting;
        report = 'modules/keyboard/native/KeyboardUIStore.native.tsx';
        report = oscard.bind(golfie)(report);
        zuuluu['default'] = tangon;
        michal = function(argFoo) { // Original name: setKeyboardToggled
            zuuluu = _closure1_slot10;
            michal = {};
            entity = argFoo;
            michal['keyboardType'] = entity;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        zuuluu['setKeyboardToggled'] = michal;
        return entity;
    }
})();