// app/modules/keyboard/native/KeyboardUIStore.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        report = argBar;
        option = argBaz;
        zuuluu = argFre;
        oscard = argPlu;
        var _closure1_slot0 = report;
        var _closure1_slot1 = option;
        var _closure1_slot2 = oscard;
        entity = function() { // Original name: getLastKnownSystemKeyboardHeight
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 1;
                zuuluu = zuuluu[michal];
                michal = undefined;
                michal = tangon.bind(michal)(zuuluu);
                tangon = michal.Storage;
                zuuluu = tangon.get;
                michal = _closure1_slot4;
                entity = 0;
                michal = zuuluu.bind(tangon)(michal, entity);
                zuuluu = null;
                zuuluu = zuuluu != michal;
                if(!zuuluu) { _fun00004_ip = 60; continue _fun00003 }
 57:
                entity = michal;
 60:
                return entity;
            }
        };
        var _closure1_slot6 = entity;
        entity = function(argFoo) { // Original name: updateLastKnownSystemKeyboardHeight
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tangon = argFoo;
                entity = 0;
                if(!(entity !== tangon)) { _fun00006_ip = 67; continue _fun00005 }
 9:
                michal = _closure1_slot6;
                report = undefined;
                michal = michal.bind(report)();
                if(!(michal !== tangon)) { _fun00006_ip = 67; continue _fun00005 }
 26:
                zuuluu = _closure1_slot0;
                oscard = _closure1_slot2;
                michal = 1;
                michal = oscard[michal];
                michal = zuuluu.bind(report)(michal);
                zuuluu = michal.Storage;
                michal = zuuluu.set;
                entity = _closure1_slot4;
                entity = michal.bind(zuuluu)(entity, tangon);
 67:
                entity = undefined;
                return entity;
            }
        };
        var _closure1_slot7 = entity;
        entity = function() { // Original name: getCustomKeyboardHeight
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                michal = undefined;
                tangon = undefined;
                if(!(tangon === tangon)) { _fun00008_ip = 11; continue _fun00007 }
 8:
                tangon = 200;
 11:
                entity = _closure1_slot6;
                zuuluu = entity.bind(michal)();
                entity = global;
                michal = entity.Math;
                entity = michal.max;
                entity = entity.bind(michal)(zuuluu, tangon);
                return entity;
            }
        };
        var _closure1_slot8 = entity;
        entity = function(argFoo, argBar) { // Original name: getSystemKeyboardHeight
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = argFoo;
                tangon = argBar;
                oscard = entity.keyboardHeight;
                report = undefined;
                if(!(oscard === report)) { _fun00010_ip = 66; continue _fun00009 }
 18:
                zuuluu = _closure1_slot3;
                michal = zuuluu.metrics;
                golfie = michal.bind(zuuluu)();
                michal = null;
                option = michal == golfie;
                zuuluu = undefined;
                if(option) { _fun00010_ip = 51; continue _fun00009 }
 46:
                zuuluu = golfie.height;
 51:
                golfie = michal != zuuluu;
                michal = 0;
                if(!golfie) { _fun00010_ip = 63; continue _fun00009 }
 60:
                michal = zuuluu;
 63:
                oscard = michal;
 66:
                golfie = entity.keyboardImeInsetBottom;
                if(!(golfie === report)) { _fun00010_ip = 114; continue _fun00009 }
 76:
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 3;
                entity = zuuluu[entity];
                michal = michal.bind(report)(entity);
                entity = michal.getSafeAreaInsets;
                entity = entity.bind(michal)();
                golfie = entity.bottom;
 114:
                zuuluu = _closure1_slot0;
                option = _closure1_slot2;
                entity = 2;
                entity = option[entity];
                zuuluu = zuuluu.bind(report)(entity);
                entity = zuuluu.isAndroid;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00010_ip = 169; continue _fun00009 }
 149:
                entity = 0;
                if(!(entity !== oscard)) { _fun00010_ip = 167; continue _fun00009 }
 155:
                zuuluu = 0;
                if(tangon) { _fun00010_ip = 163; continue _fun00009 }
 160:
                zuuluu = golfie;
 163:
                entity = oscard + zuuluu;
 167:
                _fun00010_ip = 202; continue _fun00009;
 169:
                zuuluu = _closure1_slot1;
                oscard = _closure1_slot2;
                michal = 4;
                michal = oscard[michal];
                zuuluu = zuuluu.bind(report)(michal);
                michal = zuuluu.getImeInsets;
                entity = michal.bind(zuuluu)(tangon);
 202:
                return entity;
            }
        };
        var _closure1_slot9 = entity;
        entity = function(argFoo) { // Original name: updateSystemKeyboardStoreState
            entity = argFoo;
            var _closure2_slot0 = entity;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 5;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                zuuluu = _closure1_slot5;
                michal = zuuluu.setState;
                entity = function(argFoo) {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        entity = argFoo;
                        golfie = _closure1_slot9;
                        oscard = _closure2_slot0;
                        zuuluu = undefined;
                        tangon = false;
                        report = golfie.bind(zuuluu)(oscard, tangon);
                        tangon = true;
                        tangon = golfie.bind(zuuluu)(oscard, tangon);
                        oscard = _closure1_slot7;
                        oscard = oscard.bind(zuuluu)(tangon);
                        michal = _closure1_slot8;
                        zuuluu = michal.bind(zuuluu)();
                        michal = entity.keyboardHeight;
                        if(!(michal === report)) { _fun00012_ip = 82; continue _fun00011 }
 62:
                        michal = entity.keyboardHeightExcludingSafeAreaInsets;
                        if(!(michal === tangon)) { _fun00012_ip = 82; continue _fun00011 }
 72:
                        michal = entity.customKeyboardHeight;
                        if(!(michal !== zuuluu)) { _fun00012_ip = 102; continue _fun00011 }
 82:
                        michal = {};
                        michal['keyboardHeight'] = report;
                        michal['keyboardHeightExcludingSafeAreaInsets'] = tangon;
                        michal['customKeyboardHeight'] = zuuluu;
                        entity = michal;
 102:
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
        golfie = verify.defineProperty;
        michal = {};
        entity = true;
        michal['value'] = entity;
        entity = '__esModule';
        entity = golfie.bind(verify)(zuuluu, entity, michal);
        entity = 0;
        michal = oscard[entity];
        entity = undefined;
        michal = report.bind(entity)(michal);
        yankee = michal.Keyboard;
        var _closure1_slot3 = yankee;
        michal = 'lastKnownSystemKeyboardHeight';
        var _closure1_slot4 = michal;
        michal = 2;
        golfie = oscard[michal];
        verify = report.bind(entity)(golfie);
        golfie = verify.isAndroid;
        golfie = golfie.bind(verify)();
        romeon = 'keyboardWillShow';
        if(!golfie) { _fun00002_ip = 172; continue _fun00001 }
 166:
        romeon = 'keyboardDidShow';
 172:
        michal = oscard[michal];
        golfie = report.bind(entity)(michal);
        michal = golfie.isAndroid;
        michal = michal.bind(golfie)();
        offset = 'keyboardWillHide';
        if(!michal) { _fun00002_ip = 205; continue _fun00001 }
 199:
        offset = 'keyboardDidHide';
 205:
        michal = 6;
        michal = oscard[michal];
        verify = report.bind(entity)(michal);
        golfie = verify.create;
        michal = function() {
            entity = {};
            oscard = _closure1_slot9;
            zuuluu = undefined;
            report = {};
            tangon = false;
            tangon = oscard.bind(zuuluu)(report, tangon);
            entity['keyboardHeight'] = tangon;
            report = {};
            tangon = true;
            tangon = oscard.bind(zuuluu)(report, tangon);
            entity['keyboardHeightExcludingSafeAreaInsets'] = tangon;
            michal = _closure1_slot8;
            michal = michal.bind(zuuluu)();
            entity['customKeyboardHeight'] = michal;
            return entity;
        };
        michal = golfie.bind(verify)(michal);
        var _closure1_slot5 = michal;
        verify = yankee.addListener;
        golfie = function(argFoo) {
            entity = argFoo;
            entity = entity.endCoordinates;
            entity = entity.height;
            zuuluu = _closure1_slot10;
            michal = {};
            michal['keyboardHeight'] = entity;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        golfie = verify.bind(yankee)(romeon, golfie);
        verify = yankee.addListener;
        golfie = function() {
            zuuluu = _closure1_slot10;
            michal = {};
            entity = 0;
            michal['keyboardHeight'] = entity;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        golfie = verify.bind(yankee)(offset, golfie);
        golfie = 7;
        golfie = oscard[golfie];
        golfie = option.bind(entity)(golfie);
        tangon = function(argFoo) {
            entity = argFoo;
            entity = entity.bottom;
            zuuluu = _closure1_slot10;
            michal = {};
            michal['keyboardImeInsetBottom'] = entity;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        tangon = golfie.bind(entity)(tangon);
        tangon = 8;
        tangon = oscard[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.fileFinishedImporting;
        tangon = 'modules/keyboard/native/KeyboardUIStore.native.tsx';
        tangon = report.bind(oscard)(tangon);
        zuuluu['default'] = michal;
        return entity;
    }
})();