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
                        report = false;
                        zuuluu['excludeSafeAreaInsets'] = report;
                        offset = undefined;
                        option = tangon.bind(offset)(zuuluu);
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
                        golfie = tangon.bind(offset)(zuuluu);
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
                        michal = _closure1_slot8;
                        zuuluu = michal.bind(offset)(golfie, report);
                        michal = _closure2_slot0;
                        oscard = michal.keyboardOpen;
                        if(!(yankee == oscard)) { _fun00008_ip = 207; continue _fun00007 }
 201:
                        oscard = entity.keyboardOpen;
 207:
                        michal = entity.keyboardContexts;
                        michal = michal[report];
                        romeon = _closure2_slot0;
                        romeon = romeon.keyboardType;
                        foxtra = yankee == romeon;
                        offset = undefined;
                        if(foxtra) { _fun00008_ip = 241; continue _fun00007 }
 236:
                        offset = romeon.context;
 241:
                        if(!(yankee == offset)) { _fun00008_ip = 255; continue _fun00007 }
 245:
                        yankee = entity.keyboardContexts;
                        offset = yankee[report];
 255:
                        if(!(michal !== offset)) { _fun00008_ip = 284; continue _fun00007 }
 259:
                        michal = {};
                        backup = entity.keyboardContexts;
                        kiloes = michal;
                        yankee = copyDataProperties(kiloes, backup);
                        michal[report] = offset;
                        offset = michal;
                        _fun00008_ip = 290; continue _fun00007;
 284:
                        offset = entity.keyboardContexts;
 290:
                        michal = entity.keyboardDuration;
                        if(!(michal === verify)) { _fun00008_ip = 360; continue _fun00007 }
 300:
                        michal = entity.keyboardContexts;
                        if(!(michal === offset)) { _fun00008_ip = 360; continue _fun00007 }
 310:
                        michal = entity.keyboardHeight;
                        if(!(michal === option)) { _fun00008_ip = 360; continue _fun00007 }
 320:
                        michal = entity.keyboardHeightExcludingSafeAreaInsets;
                        if(!(michal === golfie)) { _fun00008_ip = 360; continue _fun00007 }
 330:
                        michal = entity.keyboardType;
                        if(!(michal === report)) { _fun00008_ip = 360; continue _fun00007 }
 340:
                        michal = entity.customKeyboardHeight;
                        if(!(michal === zuuluu)) { _fun00008_ip = 360; continue _fun00007 }
 350:
                        michal = entity.keyboardOpen;
                        if(!(michal !== oscard)) { _fun00008_ip = 405; continue _fun00007 }
 360:
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
 405:
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
        tangon = 10;
        tangon = golfie[tangon];
        verify = oscard.bind(entity)(tangon);
        report = verify.create;
        tangon = function() {
            entity = {};
            verify = _closure1_slot8;
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            michal = 5;
            golfie = report[michal];
            zuuluu = undefined;
            golfie = tangon.bind(zuuluu)(golfie);
            golfie = golfie.KeyboardTypes;
            option = golfie.SYSTEM;
            golfie = 0;
            option = verify.bind(zuuluu)(golfie, option);
            entity['customKeyboardHeight'] = option;
            option = {};
            verify = report[michal];
            verify = tangon.bind(zuuluu)(verify);
            verify = verify.KeyboardTypes;
            offset = verify.SYSTEM;
            verify = {};
            option[offset] = verify;
            verify = report[michal];
            verify = tangon.bind(zuuluu)(verify);
            verify = verify.KeyboardTypes;
            offset = verify.EXPRESSION;
            verify = _closure1_slot4;
            verify = verify.EMOJI;
            option[offset] = verify;
            verify = report[michal];
            verify = tangon.bind(zuuluu)(verify);
            verify = verify.KeyboardTypes;
            offset = verify.MEDIA;
            verify = {};
            yankee = _closure1_slot5;
            yankee = yankee.CHAT;
            verify['target'] = yankee;
            option[offset] = verify;
            verify = report[michal];
            verify = tangon.bind(zuuluu)(verify);
            verify = verify.KeyboardTypes;
            offset = verify.APP_LAUNCHER;
            verify = {};
            yankee = _closure1_slot3;
            yankee = yankee.HOME;
            verify['initialRouteName'] = yankee;
            option[offset] = verify;
            entity['keyboardContexts'] = option;
            entity['keyboardDuration'] = golfie;
            option = _closure1_slot9;
            oscard = false;
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
        report = 11;
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
        report = 12;
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