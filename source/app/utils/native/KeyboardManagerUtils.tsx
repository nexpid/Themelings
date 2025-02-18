// app/utils/native/KeyboardManagerUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.NativeModules;
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'utils/native/KeyboardManagerUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: dismissGlobalKeyboard
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 1;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.isAndroid;
            zuuluu = zuuluu.bind(tangon)();
            if(zuuluu) { _fun00002_ip = 59; continue _fun00001 }
 37:
            zuuluu = _closure1_slot3;
            tangon = zuuluu.KeyboardManager;
            zuuluu = tangon.dismissGlobalKeyboard;
            zuuluu = zuuluu.bind(tangon)();
            _fun00002_ip = 112; continue _fun00001;
 59:
            report = _closure1_slot1;
            zuuluu = _closure1_slot2;
            tangon = 2;
            zuuluu = zuuluu[tangon];
            report = report.bind(entity)(zuuluu);
            zuuluu = null;
            if(!(zuuluu != report)) { _fun00002_ip = 112; continue _fun00001 }
 85:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            michal = michal[tangon];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.dismissGlobalKeyboard;
            michal = michal.bind(zuuluu)();
 112:
            return entity;
        }
    };
    zuuluu['dismissGlobalKeyboard'] = tangon;
    tangon = function() { // Original name: clearCurrentFocusAndDismissKeyboard
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 1;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.isAndroid;
            zuuluu = zuuluu.bind(tangon)();
            if(!zuuluu) { _fun00004_ip = 90; continue _fun00003 }
 37:
            report = _closure1_slot1;
            zuuluu = _closure1_slot2;
            tangon = 2;
            zuuluu = zuuluu[tangon];
            report = report.bind(entity)(zuuluu);
            zuuluu = null;
            if(!(zuuluu != report)) { _fun00004_ip = 90; continue _fun00003 }
 63:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            michal = michal[tangon];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.clearCurrentFocusAndDismissKeyboard;
            michal = michal.bind(zuuluu)();
 90:
            return entity;
        }
    };
    zuuluu['clearCurrentFocusAndDismissKeyboard'] = tangon;
    michal = function(argFoo) { // Original name: onKeyboardChanged
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 1;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.isAndroid;
            zuuluu = zuuluu.bind(tangon)();
            if(zuuluu) { _fun00006_ip = 90; continue _fun00005 }
 37:
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.KeyboardManager;
            tangon = zuuluu.onKeyboardChanged;
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00006_ip = 147; continue _fun00005 }
 59:
            zuuluu = _closure1_slot3;
            report = zuuluu.KeyboardManager;
            tangon = report.onKeyboardChanged;
            zuuluu = global;
            zuuluu = zuuluu.open;
            zuuluu = tangon.bind(report)(zuuluu);
            _fun00006_ip = 147; continue _fun00005;
 90:
            report = _closure1_slot1;
            zuuluu = _closure1_slot2;
            tangon = 2;
            zuuluu = zuuluu[tangon];
            report = report.bind(entity)(zuuluu);
            zuuluu = null;
            if(!(zuuluu != report)) { _fun00006_ip = 147; continue _fun00005 }
 116:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            michal = michal[tangon];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.onKeyboardChanged;
            michal = argFoo;
            michal = zuuluu.bind(tangon)(michal);
 147:
            return entity;
        }
    };
    zuuluu['onKeyboardChanged'] = michal;
    return entity;
})();