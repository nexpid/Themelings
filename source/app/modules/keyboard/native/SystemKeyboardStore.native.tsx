// app/modules/keyboard/native/SystemKeyboardStore.native.tsx
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
        entity = function(argFoo, argBar) { // Original name: getSystemKeyboardHeight
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = argFoo;
                tangon = argBar;
                zuuluu = entity.keyboardHeight;
                report = undefined;
                if(!(zuuluu === report)) { _fun00004_ip = 66; continue _fun00003 }
 18:
                oscard = _closure1_slot3;
                michal = oscard.metrics;
                golfie = michal.bind(oscard)();
                michal = null;
                option = michal == golfie;
                oscard = undefined;
                if(option) { _fun00004_ip = 51; continue _fun00003 }
 46:
                oscard = golfie.height;
 51:
                golfie = michal != oscard;
                michal = 0;
                if(!golfie) { _fun00004_ip = 63; continue _fun00003 }
 60:
                michal = oscard;
 63:
                zuuluu = michal;
 66:
                oscard = entity.keyboardImeInsetBottom;
                if(!(oscard === report)) { _fun00004_ip = 114; continue _fun00003 }
 76:
                michal = _closure1_slot0;
                golfie = _closure1_slot2;
                entity = 2;
                entity = golfie[entity];
                michal = michal.bind(report)(entity);
                entity = michal.getSafeAreaInsets;
                entity = entity.bind(michal)();
                oscard = entity.bottom;
 114:
                golfie = _closure1_slot0;
                option = _closure1_slot2;
                entity = 1;
                entity = option[entity];
                golfie = golfie.bind(report)(entity);
                entity = golfie.isAndroid;
                entity = entity.bind(golfie)();
                if(entity) { _fun00004_ip = 169; continue _fun00003 }
 149:
                entity = 0;
                if(tangon) { _fun00004_ip = 163; continue _fun00003 }
 154:
                entity = 0;
                if(!(entity !== zuuluu)) { _fun00004_ip = 163; continue _fun00003 }
 160:
                entity = oscard;
 163:
                entity = zuuluu + entity;
                _fun00004_ip = 202; continue _fun00003;
 169:
                zuuluu = _closure1_slot1;
                oscard = _closure1_slot2;
                michal = 3;
                michal = oscard[michal];
                zuuluu = zuuluu.bind(report)(michal);
                michal = zuuluu.getKeyboardHeight;
                entity = michal.bind(zuuluu)(tangon);
 202:
                return entity;
            }
        };
        var _closure1_slot5 = entity;
        entity = function(argFoo) { // Original name: updateSystemKeyboardStoreState
            entity = argFoo;
            var _closure2_slot0 = entity;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 4;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                zuuluu = _closure1_slot4;
                michal = zuuluu.setState;
                entity = function(argFoo) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        entity = argFoo;
                        oscard = _closure1_slot5;
                        report = _closure2_slot0;
                        zuuluu = undefined;
                        michal = false;
                        tangon = oscard.bind(zuuluu)(report, michal);
                        michal = true;
                        zuuluu = oscard.bind(zuuluu)(report, michal);
                        michal = entity.keyboardHeight;
                        if(!(michal === tangon)) { _fun00006_ip = 55; continue _fun00005 }
 45:
                        michal = entity.keyboardHeightExcludingSafeAreaInsets;
                        if(!(michal !== zuuluu)) { _fun00006_ip = 70; continue _fun00005 }
 55:
                        michal = {};
                        michal['keyboardHeight'] = tangon;
                        michal['keyboardHeightExcludingSafeAreaInsets'] = zuuluu;
                        entity = michal;
 70:
                        return entity;
                    }
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        var _closure1_slot6 = entity;
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
        michal = 1;
        golfie = oscard[michal];
        verify = report.bind(entity)(golfie);
        golfie = verify.isAndroid;
        golfie = golfie.bind(verify)();
        romeon = 'keyboardWillShow';
        if(!golfie) { _fun00002_ip = 135; continue _fun00001 }
 129:
        romeon = 'keyboardDidShow';
 135:
        michal = oscard[michal];
        golfie = report.bind(entity)(michal);
        michal = golfie.isAndroid;
        michal = michal.bind(golfie)();
        offset = 'keyboardWillHide';
        if(!michal) { _fun00002_ip = 168; continue _fun00001 }
 162:
        offset = 'keyboardDidHide';
 168:
        michal = 5;
        michal = oscard[michal];
        verify = report.bind(entity)(michal);
        golfie = verify.create;
        michal = function() {
            entity = {};
            report = _closure1_slot5;
            tangon = undefined;
            zuuluu = {};
            michal = false;
            michal = report.bind(tangon)(zuuluu, michal);
            entity['keyboardHeight'] = michal;
            zuuluu = {};
            michal = true;
            michal = report.bind(tangon)(zuuluu, michal);
            entity['keyboardHeightExcludingSafeAreaInsets'] = michal;
            return entity;
        };
        michal = golfie.bind(verify)(michal);
        var _closure1_slot4 = michal;
        verify = yankee.addListener;
        golfie = function(argFoo) {
            entity = argFoo;
            entity = entity.endCoordinates;
            entity = entity.height;
            zuuluu = _closure1_slot6;
            michal = {};
            michal['keyboardHeight'] = entity;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        golfie = verify.bind(yankee)(romeon, golfie);
        verify = yankee.addListener;
        golfie = function() {
            zuuluu = _closure1_slot6;
            michal = {};
            entity = 0;
            michal['keyboardHeight'] = entity;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        golfie = verify.bind(yankee)(offset, golfie);
        golfie = 6;
        golfie = oscard[golfie];
        golfie = option.bind(entity)(golfie);
        tangon = function(argFoo) {
            entity = argFoo;
            entity = entity.bottom;
            zuuluu = _closure1_slot6;
            michal = {};
            michal['keyboardImeInsetBottom'] = entity;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        tangon = golfie.bind(entity)(tangon);
        tangon = 7;
        tangon = oscard[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.fileFinishedImporting;
        tangon = 'modules/keyboard/native/SystemKeyboardStore.native.tsx';
        tangon = report.bind(oscard)(tangon);
        zuuluu['default'] = michal;
        return entity;
    }
})();