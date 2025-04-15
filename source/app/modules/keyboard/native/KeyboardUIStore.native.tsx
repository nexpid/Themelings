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
                michal = _closure1_slot5;
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
                entity = _closure1_slot4;
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
                zuuluu = _closure1_slot5;
                zuuluu = tangon.bind(report)(zuuluu, michal);
                entity = michal;
 179:
                return entity;
            }
        };
        var _closure1_slot7 = entity;
        entity = function(argFoo, argBar) { // Original name: getSystemKeyboardHeight
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = argFoo;
                tangon = argBar;
                oscard = entity.keyboardHeight;
                report = undefined;
                if(!(oscard === report)) { _fun00006_ip = 66; continue _fun00005 }
 18:
                zuuluu = _closure1_slot3;
                michal = zuuluu.metrics;
                golfie = michal.bind(zuuluu)();
                michal = null;
                option = michal == golfie;
                zuuluu = undefined;
                if(option) { _fun00006_ip = 51; continue _fun00005 }
 46:
                zuuluu = golfie.height;
 51:
                golfie = michal != zuuluu;
                michal = 0;
                if(!golfie) { _fun00006_ip = 63; continue _fun00005 }
 60:
                michal = zuuluu;
 63:
                oscard = michal;
 66:
                golfie = entity.keyboardImeInsetBottom;
                if(!(golfie === report)) { _fun00006_ip = 114; continue _fun00005 }
 76:
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 4;
                entity = zuuluu[entity];
                michal = michal.bind(report)(entity);
                entity = michal.getSafeAreaInsets;
                entity = entity.bind(michal)();
                golfie = entity.bottom;
 114:
                zuuluu = _closure1_slot0;
                option = _closure1_slot2;
                entity = 3;
                entity = option[entity];
                zuuluu = zuuluu.bind(report)(entity);
                entity = zuuluu.isAndroid;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00006_ip = 169; continue _fun00005 }
 149:
                entity = 0;
                if(!(entity !== oscard)) { _fun00006_ip = 167; continue _fun00005 }
 155:
                zuuluu = 0;
                if(tangon) { _fun00006_ip = 163; continue _fun00005 }
 160:
                zuuluu = golfie;
 163:
                entity = oscard + zuuluu;
 167:
                _fun00006_ip = 202; continue _fun00005;
 169:
                zuuluu = _closure1_slot1;
                oscard = _closure1_slot2;
                michal = 5;
                michal = oscard[michal];
                zuuluu = zuuluu.bind(report)(michal);
                michal = zuuluu.getImeInsets;
                entity = michal.bind(zuuluu)(tangon);
 202:
                return entity;
            }
        };
        var _closure1_slot8 = entity;
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
                zuuluu = _closure1_slot6;
                michal = zuuluu.setState;
                entity = function(argFoo) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        entity = argFoo;
                        michal = _closure2_slot0;
                        option = michal.keyboardDuration;
                        tangon = null;
                        if(!(tangon == option)) { _fun00008_ip = 28; continue _fun00007 }
 22:
                        option = entity.keyboardDuration;
 28:
                        verify = _closure1_slot8;
                        report = _closure2_slot0;
                        zuuluu = undefined;
                        oscard = false;
                        golfie = verify.bind(zuuluu)(report, oscard);
                        oscard = true;
                        oscard = verify.bind(zuuluu)(report, oscard);
                        report = report.keyboardType;
                        if(!(tangon == report)) { _fun00008_ip = 73; continue _fun00007 }
 67:
                        report = entity.keyboardType;
 73:
                        tangon = entity.keyboardType;
                        if(!(report === tangon)) { _fun00008_ip = 91; continue _fun00007 }
 83:
                        tangon = entity.keyboardTypePrevious;
                        _fun00008_ip = 97; continue _fun00007;
 91:
                        tangon = entity.keyboardType;
 97:
                        michal = _closure1_slot7;
                        zuuluu = michal.bind(zuuluu)(oscard, report);
                        michal = entity.keyboardDuration;
                        if(!(michal === option)) { _fun00008_ip = 157; continue _fun00007 }
 117:
                        michal = entity.keyboardHeight;
                        if(!(michal === golfie)) { _fun00008_ip = 157; continue _fun00007 }
 127:
                        michal = entity.keyboardHeightExcludingSafeAreaInsets;
                        if(!(michal === oscard)) { _fun00008_ip = 157; continue _fun00007 }
 137:
                        michal = entity.keyboardType;
                        if(!(michal === report)) { _fun00008_ip = 157; continue _fun00007 }
 147:
                        michal = entity.customKeyboardHeight;
                        if(!(michal !== zuuluu)) { _fun00008_ip = 192; continue _fun00007 }
 157:
                        michal = {};
                        michal['keyboardDuration'] = option;
                        michal['keyboardHeight'] = golfie;
                        michal['keyboardHeightExcludingSafeAreaInsets'] = oscard;
                        michal['keyboardType'] = report;
                        michal['keyboardTypePrevious'] = tangon;
                        michal['customKeyboardHeight'] = zuuluu;
                        entity = michal;
 192:
                        return entity;
                    }
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        var _closure1_slot9 = entity;
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
        var _closure1_slot3 = yankee;
        tangon = 1;
        tangon = golfie[tangon];
        tangon = oscard.bind(entity)(tangon);
        tangon = tangon.KeyboardTypes;
        var _closure1_slot4 = tangon;
        tangon = 'customKeyboardHeight';
        var _closure1_slot5 = tangon;
        tangon = 3;
        report = golfie[tangon];
        verify = oscard.bind(entity)(report);
        report = verify.isAndroid;
        report = report.bind(verify)();
        romeon = 'keyboardWillShow';
        if(!report) { _fun00002_ip = 174; continue _fun00001 }
 168:
        romeon = 'keyboardDidShow';
 174:
        tangon = golfie[tangon];
        report = oscard.bind(entity)(tangon);
        tangon = report.isAndroid;
        tangon = tangon.bind(report)();
        offset = 'keyboardWillHide';
        if(!tangon) { _fun00002_ip = 207; continue _fun00001 }
 201:
        offset = 'keyboardDidHide';
 207:
        tangon = 7;
        tangon = golfie[tangon];
        verify = oscard.bind(entity)(tangon);
        report = verify.create;
        tangon = function() {
            entity = {};
            oscard = 0;
            entity['keyboardDuration'] = oscard;
            golfie = _closure1_slot8;
            report = undefined;
            tangon = {};
            zuuluu = false;
            zuuluu = golfie.bind(report)(tangon, zuuluu);
            entity['keyboardHeight'] = zuuluu;
            tangon = {};
            zuuluu = true;
            zuuluu = golfie.bind(report)(tangon, zuuluu);
            entity['keyboardHeightExcludingSafeAreaInsets'] = zuuluu;
            tangon = _closure1_slot7;
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.SYSTEM;
            zuuluu = tangon.bind(report)(oscard, zuuluu);
            entity['customKeyboardHeight'] = zuuluu;
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.SYSTEM;
            entity['keyboardType'] = zuuluu;
            michal = _closure1_slot4;
            michal = michal.SYSTEM;
            entity['keyboardTypePrevious'] = michal;
            return entity;
        };
        tangon = report.bind(verify)(tangon);
        var _closure1_slot6 = tangon;
        verify = yankee.addListener;
        report = function(argFoo) {
            michal = argFoo;
            entity = michal.duration;
            michal = michal.endCoordinates;
            tangon = michal.height;
            zuuluu = _closure1_slot9;
            michal = {};
            michal['keyboardHeight'] = tangon;
            michal['keyboardDuration'] = entity;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        report = verify.bind(yankee)(romeon, report);
        verify = yankee.addListener;
        report = function() {
            zuuluu = _closure1_slot9;
            michal = {};
            entity = 0;
            michal['keyboardHeight'] = entity;
            entity = undefined;
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
            zuuluu = _closure1_slot9;
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
            zuuluu = _closure1_slot9;
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