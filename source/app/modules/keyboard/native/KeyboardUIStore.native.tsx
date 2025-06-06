// app/modules/keyboard/native/KeyboardUIStore.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        option = argBar;
        offset = argBaz;
        zuuluu = argFre;
        verify = argPlu;
        var _closure1_slot0 = option;
        var _closure1_slot1 = offset;
        var _closure1_slot2 = verify;
        entity = function(argFoo, argBar) { // Original name: getCustomKeyboardHeight
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                option = argFoo;
                michal = _closure1_slot0;
                entity = _closure1_slot2;
                golfie = 6;
                entity = entity[golfie];
                oscard = undefined;
                entity = michal.bind(oscard)(entity);
                report = entity.Storage;
                tangon = report.get;
                michal = _closure1_slot6;
                entity = 253;
                michal = tangon.bind(report)(michal, entity);
                tangon = null;
                tangon = tangon != michal;
                if(!tangon) { _fun00004_ip = 64; continue _fun00003 }
 61:
                entity = michal;
 64:
                tangon = _closure1_slot0;
                report = _closure1_slot2;
                michal = 5;
                michal = report[michal];
                michal = tangon.bind(oscard)(michal);
                michal = michal.KeyboardTypes;
                tangon = michal.SYSTEM;
                michal = argBar;
                if(!(michal === tangon)) { _fun00004_ip = 175; continue _fun00003 }
 103:
                michal = 0;
                if(!(michal !== option)) { _fun00004_ip = 175; continue _fun00003 }
 109:
                michal = global;
                report = michal.Math;
                tangon = report.max;
                michal = 200;
                michal = tangon.bind(report)(option, michal);
                if(!(michal !== entity)) { _fun00004_ip = 173; continue _fun00003 }
 135:
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                tangon = tangon[golfie];
                tangon = report.bind(oscard)(tangon);
                report = tangon.Storage;
                tangon = report.set;
                zuuluu = _closure1_slot6;
                zuuluu = tangon.bind(report)(zuuluu, michal);
 173:
                return michal;
 175:
                return entity;
            }
        };
        var _closure1_slot10 = entity;
        entity = function(argFoo) { // Original name: getSystemKeyboardHeight
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = argFoo;
                oscard = entity.keyboardHeight;
                tangon = entity.excludeSafeAreaInsets;
                zuuluu = _closure1_slot0;
                report = _closure1_slot2;
                entity = 7;
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
                golfie = 9;
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
                michal = 8;
                michal = oscard[michal];
                zuuluu = zuuluu.bind(report)(michal);
                michal = zuuluu.getImeInsets;
                entity = michal.bind(zuuluu)(tangon);
 137:
                return entity;
            }
        };
        var _closure1_slot11 = entity;
        entity = function(argFoo) { // Original name: updateSystemKeyboardStoreState
            entity = argFoo;
            var _closure2_slot0 = entity;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 10;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                zuuluu = _closure1_slot9;
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
                        tangon = _closure1_slot11;
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
                        tangon = _closure1_slot11;
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
                        zuuluu = _closure1_slot10;
                        zuuluu = zuuluu.bind(romeon)(golfie, report);
                        offset = entity.keyboardContexts;
                        kiloes = offset[report];
                        offset = _closure2_slot0;
                        foxtra = offset.keyboardType;
                        backup = yankee == foxtra;
                        offset = undefined;
                        if(backup) { _fun00008_ip = 221; continue _fun00007 }
 216:
                        offset = foxtra.context;
 221:
                        foxtra = kiloes;
                        if(!(yankee != offset)) { _fun00008_ip = 231; continue _fun00007 }
 228:
                        foxtra = offset;
 231:
                        backup = 'object';
                        offset = typeof kiloes;
                        if(!(backup === offset)) { _fun00008_ip = 249; continue _fun00007 }
 242:
                        offset = typeof foxtra;
                        if(!(backup !== offset)) { _fun00008_ip = 255; continue _fun00007 }
 249:
                        offset = kiloes !== foxtra;
                        _fun00008_ip = 284; continue _fun00007;
 255:
                        output = _closure1_slot1;
                        result = _closure1_slot2;
                        backup = 11;
                        backup = result[backup];
                        backup = output.bind(romeon)(backup);
                        backup = backup.bind(romeon)(kiloes, foxtra);
                        offset = !backup;
 284:
                        oscard = _closure2_slot0;
                        oscard = oscard.keyboardOpen;
                        if(!(yankee == oscard)) { _fun00008_ip = 304; continue _fun00007 }
 298:
                        oscard = entity.keyboardOpen;
 304:
                        if(!oscard) { _fun00008_ip = 358; continue _fun00007 }
 307:
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
                        if(yankee) { _fun00008_ip = 394; continue _fun00007 }
 358:
                        backup = entity.keyboardContexts;
                        if(offset) { _fun00008_ip = 372; continue _fun00007 }
 367:
                        offset = backup;
                        _fun00008_ip = 392; continue _fun00007;
 372:
                        yankee = {};
                        source = yankee;
                        update = backup;
                        backup = copyDataProperties(source, update);
                        yankee[report] = foxtra;
                        offset = yankee;
 392:
                        _fun00008_ip = 495; continue _fun00007;
 394:
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
 495:
                        yankee = _closure1_slot1;
                        foxtra = _closure1_slot2;
                        michal = 11;
                        michal = foxtra[michal];
                        yankee = yankee.bind(romeon)(michal);
                        michal = entity.keyboardContexts;
                        michal = yankee.bind(romeon)(michal, offset);
                        michal = !michal;
                        yankee = entity.keyboardDuration;
                        if(!(yankee === verify)) { _fun00008_ip = 593; continue _fun00007 }
 540:
                        if(michal) { _fun00008_ip = 593; continue _fun00007 }
 543:
                        michal = entity.keyboardHeight;
                        if(!(michal === option)) { _fun00008_ip = 593; continue _fun00007 }
 553:
                        michal = entity.keyboardHeightExcludingSafeAreaInsets;
                        if(!(michal === golfie)) { _fun00008_ip = 593; continue _fun00007 }
 563:
                        michal = entity.keyboardType;
                        if(!(michal === report)) { _fun00008_ip = 593; continue _fun00007 }
 573:
                        michal = entity.customKeyboardHeight;
                        if(!(michal === zuuluu)) { _fun00008_ip = 593; continue _fun00007 }
 583:
                        michal = entity.keyboardOpen;
                        if(!(michal !== oscard)) { _fun00008_ip = 638; continue _fun00007 }
 593:
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
 638:
                        return entity;
                    }
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        var _closure1_slot12 = entity;
        entity = global;
        oscard = entity.Object;
        report = oscard.defineProperty;
        tangon = {};
        entity = true;
        tangon['value'] = entity;
        entity = '__esModule';
        entity = report.bind(oscard)(zuuluu, entity, tangon);
        entity = 0;
        tangon = verify[entity];
        entity = undefined;
        tangon = option.bind(entity)(tangon);
        foxtra = tangon.Keyboard;
        tangon = 1;
        tangon = verify[tangon];
        tangon = option.bind(entity)(tangon);
        tangon = tangon.AppLauncherRouteName;
        var _closure1_slot3 = tangon;
        tangon = 2;
        tangon = verify[tangon];
        tangon = option.bind(entity)(tangon);
        tangon = tangon.ExpressionPickerViewType;
        var _closure1_slot4 = tangon;
        tangon = 3;
        tangon = verify[tangon];
        tangon = option.bind(entity)(tangon);
        tangon = tangon.MediaKeyboardTarget;
        var _closure1_slot5 = tangon;
        tangon = 'customKeyboardHeight';
        var _closure1_slot6 = tangon;
        tangon = 4;
        report = verify[tangon];
        golfie = option.bind(entity)(report);
        oscard = golfie.makeMutable;
        report = 5;
        report = verify[report];
        report = option.bind(entity)(report);
        report = report.KeyboardTypes;
        report = report.SYSTEM;
        report = oscard.bind(golfie)(report);
        var _closure1_slot7 = report;
        tangon = verify[tangon];
        golfie = option.bind(entity)(tangon);
        oscard = golfie.makeMutable;
        tangon = false;
        tangon = oscard.bind(golfie)(tangon);
        var _closure1_slot8 = tangon;
        oscard = 7;
        golfie = verify[oscard];
        yankee = option.bind(entity)(golfie);
        golfie = yankee.isAndroid;
        golfie = golfie.bind(yankee)();
        backup = 'keyboardWillShow';
        if(!golfie) { _fun00002_ip = 291; continue _fun00001 }
 285:
        backup = 'keyboardDidShow';
 291:
        oscard = verify[oscard];
        golfie = option.bind(entity)(oscard);
        oscard = golfie.isAndroid;
        oscard = oscard.bind(golfie)();
        romeon = 'keyboardWillHide';
        if(!oscard) { _fun00002_ip = 324; continue _fun00001 }
 318:
        romeon = 'keyboardDidHide';
 324:
        oscard = 12;
        oscard = verify[oscard];
        yankee = option.bind(entity)(oscard);
        golfie = yankee.create;
        oscard = function() {
            entity = {};
            verify = _closure1_slot10;
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
            option = _closure1_slot11;
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
        oscard = golfie.bind(yankee)(oscard);
        var _closure1_slot9 = oscard;
        yankee = foxtra.addListener;
        golfie = function(argFoo) {
            michal = argFoo;
            entity = michal.duration;
            michal = michal.endCoordinates;
            report = michal.height;
            tangon = _closure1_slot12;
            zuuluu = {};
            zuuluu['keyboardHeight'] = report;
            zuuluu['keyboardDuration'] = entity;
            report = true;
            zuuluu['keyboardOpen'] = report;
            entity = undefined;
            zuuluu = tangon.bind(entity)(zuuluu);
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 13;
            zuuluu = oscard[zuuluu];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.onKeyboardChanged;
            zuuluu = zuuluu.bind(tangon)(report);
            tangon = _closure1_slot8;
            zuuluu = tangon.set;
            michal = false;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        golfie = yankee.bind(foxtra)(backup, golfie);
        yankee = foxtra.addListener;
        golfie = function() {
            report = _closure1_slot12;
            tangon = false;
            entity = undefined;
            zuuluu = {'keyboardHeight': 0, 'keyboardOpen': false};
            zuuluu = report.bind(entity)(zuuluu);
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 13;
            zuuluu = oscard[zuuluu];
            report = report.bind(entity)(zuuluu);
            zuuluu = report.onKeyboardChanged;
            zuuluu = zuuluu.bind(report)(tangon);
            zuuluu = _closure1_slot8;
            michal = zuuluu.set;
            michal = michal.bind(zuuluu)(tangon);
            return entity;
        };
        golfie = yankee.bind(foxtra)(romeon, golfie);
        golfie = 14;
        golfie = verify[golfie];
        offset = offset.bind(entity)(golfie);
        golfie = function(argFoo) {
            entity = argFoo;
            entity = entity.bottom;
            zuuluu = _closure1_slot12;
            michal = {};
            michal['keyboardImeInsetBottom'] = entity;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        golfie = offset.bind(entity)(golfie);
        golfie = 15;
        golfie = verify[golfie];
        verify = option.bind(entity)(golfie);
        option = verify.fileFinishedImporting;
        golfie = 'modules/keyboard/native/KeyboardUIStore.native.tsx';
        golfie = option.bind(verify)(golfie);
        zuuluu['default'] = oscard;
        zuuluu['keyboardTypeSharedValue'] = report;
        zuuluu['keyboardWillOpenSharedValue'] = tangon;
        michal = function(argFoo) { // Original name: setKeyboardToggled
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tangon = argFoo;
                report = _closure1_slot7;
                zuuluu = report.set;
                entity = tangon.type;
                entity = zuuluu.bind(report)(entity);
                oscard = _closure1_slot8;
                report = oscard.set;
                golfie = tangon.type;
                option = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 5;
                zuuluu = zuuluu[entity];
                entity = undefined;
                zuuluu = option.bind(entity)(zuuluu);
                zuuluu = zuuluu.KeyboardTypes;
                zuuluu = zuuluu.SYSTEM;
                zuuluu = golfie === zuuluu;
                if(!zuuluu) { _fun00010_ip = 108; continue _fun00009 }
 80:
                golfie = tangon.context;
                option = null;
                verify = option == golfie;
                option = undefined;
                if(verify) { _fun00010_ip = 102; continue _fun00009 }
 96:
                option = golfie.keyboardWillOpen;
 102:
                golfie = true;
                zuuluu = golfie === option;
 108:
                zuuluu = report.bind(oscard)(zuuluu);
                zuuluu = _closure1_slot12;
                michal = {};
                michal['keyboardType'] = tangon;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            }
        };
        zuuluu['setKeyboardToggled'] = michal;
        return entity;
    }
})();