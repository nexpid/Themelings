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
                golfie = 2;
                michal = michal[golfie];
                oscard = undefined;
                michal = report.bind(oscard)(michal);
                yankee = michal.Storage;
                verify = yankee.get;
                michal = _closure1_slot4;
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
                entity = _closure1_slot3;
                offset = entity.SYSTEM;
                verify = argBar;
                entity = tangon;
                if(!(verify === offset)) { _fun00004_ip = 179; continue _fun00003 }
 124:
                entity = tangon;
                if(!(report !== option)) { _fun00004_ip = 179; continue _fun00003 }
 131:
                entity = michal;
                if(!(michal !== tangon)) { _fun00004_ip = 179; continue _fun00003 }
 138:
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                tangon = tangon[golfie];
                tangon = report.bind(oscard)(tangon);
                report = tangon.Storage;
                tangon = report.set;
                zuuluu = _closure1_slot4;
                zuuluu = tangon.bind(report)(zuuluu, michal);
                entity = michal;
 179:
                return entity;
            }
        };
        var _closure1_slot6 = entity;
        entity = function(argFoo) { // Original name: getSystemKeyboardHeight
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = argFoo;
                oscard = entity.keyboardHeight;
                tangon = entity.excludeSafeAreaInsets;
                zuuluu = _closure1_slot0;
                report = _closure1_slot2;
                entity = 3;
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
                golfie = 5;
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
                michal = 4;
                michal = oscard[michal];
                zuuluu = zuuluu.bind(report)(michal);
                michal = zuuluu.getImeInsets;
                entity = michal.bind(zuuluu)(tangon);
 137:
                return entity;
            }
        };
        var _closure1_slot7 = entity;
        entity = function(argFoo) { // Original name: updateSystemKeyboardStoreState
            entity = argFoo;
            var _closure2_slot0 = entity;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 6;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                zuuluu = _closure1_slot5;
                michal = zuuluu.setState;
                entity = function(argFoo) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        entity = argFoo;
                        michal = _closure2_slot0;
                        verify = michal.keyboardDuration;
                        michal = null;
                        if(!(michal == verify)) { _fun00008_ip = 28; continue _fun00007 }
 22:
                        verify = entity.keyboardDuration;
 28:
                        report = _closure1_slot7;
                        tangon = {};
                        golfie = _closure2_slot0;
                        golfie = golfie.keyboardHeight;
                        if(!(michal == golfie)) { _fun00008_ip = 57; continue _fun00007 }
 51:
                        golfie = entity.keyboardHeight;
 57:
                        tangon['keyboardHeight'] = golfie;
                        golfie = false;
                        tangon['excludeSafeAreaInsets'] = golfie;
                        offset = undefined;
                        option = report.bind(offset)(tangon);
                        report = _closure1_slot7;
                        tangon = {};
                        golfie = _closure2_slot0;
                        golfie = golfie.keyboardHeight;
                        if(!(michal == golfie)) { _fun00008_ip = 102; continue _fun00007 }
 96:
                        golfie = entity.keyboardHeight;
 102:
                        tangon['keyboardHeight'] = golfie;
                        golfie = true;
                        tangon['excludeSafeAreaInsets'] = golfie;
                        golfie = report.bind(offset)(tangon);
                        tangon = _closure2_slot0;
                        report = tangon.keyboardType;
                        if(!(michal == report)) { _fun00008_ip = 139; continue _fun00007 }
 133:
                        report = entity.keyboardType;
 139:
                        tangon = entity.keyboardType;
                        if(!(report === tangon)) { _fun00008_ip = 157; continue _fun00007 }
 149:
                        tangon = entity.keyboardTypePrevious;
                        _fun00008_ip = 163; continue _fun00007;
 157:
                        tangon = entity.keyboardType;
 163:
                        zuuluu = _closure1_slot6;
                        zuuluu = zuuluu.bind(offset)(golfie, report);
                        oscard = _closure2_slot0;
                        oscard = oscard.keyboardOpen;
                        if(!(michal == oscard)) { _fun00008_ip = 193; continue _fun00007 }
 187:
                        oscard = entity.keyboardOpen;
 193:
                        michal = entity.keyboardDuration;
                        if(!(michal === verify)) { _fun00008_ip = 253; continue _fun00007 }
 203:
                        michal = entity.keyboardHeight;
                        if(!(michal === option)) { _fun00008_ip = 253; continue _fun00007 }
 213:
                        michal = entity.keyboardHeightExcludingSafeAreaInsets;
                        if(!(michal === golfie)) { _fun00008_ip = 253; continue _fun00007 }
 223:
                        michal = entity.keyboardType;
                        if(!(michal === report)) { _fun00008_ip = 253; continue _fun00007 }
 233:
                        michal = entity.customKeyboardHeight;
                        if(!(michal === zuuluu)) { _fun00008_ip = 253; continue _fun00007 }
 243:
                        michal = entity.keyboardOpen;
                        if(!(michal !== oscard)) { _fun00008_ip = 293; continue _fun00007 }
 253:
                        michal = {};
                        michal['keyboardDuration'] = verify;
                        michal['keyboardHeight'] = option;
                        michal['keyboardHeightExcludingSafeAreaInsets'] = golfie;
                        michal['keyboardOpen'] = oscard;
                        michal['keyboardType'] = report;
                        michal['keyboardTypePrevious'] = tangon;
                        michal['customKeyboardHeight'] = zuuluu;
                        entity = michal;
 293:
                        return entity;
                    }
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        var _closure1_slot8 = entity;
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
        tangon = tangon.KeyboardTypes;
        var _closure1_slot3 = tangon;
        tangon = 'customKeyboardHeight';
        var _closure1_slot4 = tangon;
        tangon = 3;
        report = golfie[tangon];
        verify = oscard.bind(entity)(report);
        report = verify.isAndroid;
        report = report.bind(verify)();
        romeon = 'keyboardWillShow';
        if(!report) { _fun00002_ip = 170; continue _fun00001 }
 164:
        romeon = 'keyboardDidShow';
 170:
        tangon = golfie[tangon];
        report = oscard.bind(entity)(tangon);
        tangon = report.isAndroid;
        tangon = tangon.bind(report)();
        offset = 'keyboardWillHide';
        if(!tangon) { _fun00002_ip = 203; continue _fun00001 }
 197:
        offset = 'keyboardDidHide';
 203:
        tangon = 7;
        tangon = golfie[tangon];
        verify = oscard.bind(entity)(tangon);
        report = verify.create;
        tangon = function() {
            entity = {};
            report = _closure1_slot6;
            zuuluu = _closure1_slot3;
            tangon = zuuluu.SYSTEM;
            oscard = undefined;
            zuuluu = 0;
            tangon = report.bind(oscard)(zuuluu, tangon);
            entity['customKeyboardHeight'] = tangon;
            entity['keyboardDuration'] = zuuluu;
            report = _closure1_slot7;
            zuuluu = false;
            tangon = {'keyboardHeight': 0, 'excludeSafeAreaInsets': false};
            tangon = report.bind(oscard)(tangon);
            entity['keyboardHeight'] = tangon;
            tangon = {'keyboardHeight': 0, 'excludeSafeAreaInsets': true};
            tangon = report.bind(oscard)(tangon);
            entity['keyboardHeightExcludingSafeAreaInsets'] = tangon;
            entity['keyboardOpen'] = zuuluu;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.SYSTEM;
            entity['keyboardType'] = zuuluu;
            michal = _closure1_slot3;
            michal = michal.SYSTEM;
            entity['keyboardTypePrevious'] = michal;
            return entity;
        };
        tangon = report.bind(verify)(tangon);
        var _closure1_slot5 = tangon;
        verify = yankee.addListener;
        report = function(argFoo) {
            michal = argFoo;
            entity = michal.duration;
            michal = michal.endCoordinates;
            tangon = michal.height;
            zuuluu = _closure1_slot8;
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
            zuuluu = _closure1_slot8;
            entity = undefined;
            michal = {'keyboardHeight': 0, 'keyboardOpen': false};
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        report = verify.bind(yankee)(offset, report);
        report = 8;
        report = golfie[report];
        option = option.bind(entity)(report);
        report = function(argFoo) {
            entity = argFoo;
            entity = entity.bottom;
            zuuluu = _closure1_slot8;
            michal = {};
            michal['keyboardImeInsetBottom'] = entity;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        report = option.bind(entity)(report);
        report = 9;
        report = golfie[report];
        golfie = oscard.bind(entity)(report);
        oscard = golfie.fileFinishedImporting;
        report = 'modules/keyboard/native/KeyboardUIStore.native.tsx';
        report = oscard.bind(golfie)(report);
        zuuluu['default'] = tangon;
        michal = function(argFoo) { // Original name: setKeyboardToggled
            zuuluu = _closure1_slot8;
            michal = {};
            entity = argFoo;
            entity = entity.keyboardType;
            michal['keyboardType'] = entity;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        zuuluu['setKeyboardToggled'] = michal;
        return entity;
    }
})();