// app/modules/keyboard/native/KeyboardAwareView.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function(argFoo) { // Original name: KeyboardAwareViewInner
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            verify = entity.style;
            var _closure2_slot0 = verify;
            report = entity.children;
            oscard = entity.pointerEvents;
            zuuluu = entity.animated;
            tangon = undefined;
            if(!(zuuluu === tangon)) { _fun00002_ip = 39; continue _fun00001 }
 37:
            zuuluu = true;
 39:
            var _closure2_slot1 = zuuluu;
            golfie = entity.keyboardHeightOffset;
            if(!(golfie === tangon)) { _fun00002_ip = 55; continue _fun00001 }
 53:
            golfie = 0;
 55:
            var _closure2_slot2 = golfie;
            var _closure2_slot3 = tangon;
            var _closure2_slot4 = tangon;
            offset = _closure1_slot0;
            yankee = _closure1_slot1;
            option = 5;
            option = yankee[option];
            romeon = offset.bind(tangon)(option);
            yankee = romeon.useStateFromStores;
            option = _closure1_slot5;
            offset = new Array(1);
            offset[0] = option;
            option = new Array(1);
            option[0] = golfie;
            golfie = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure1_slot5;
                    michal = entity.keyboardOpen;
                    entity = _closure1_slot5;
                    if(michal) { _fun00004_ip = 54; continue _fun00003 }
 20:
                    report = entity.keyboardType;
                    michal = _closure1_slot6;
                    tangon = michal.SYSTEM;
                    michal = 0;
                    if(!(report !== tangon)) { _fun00004_ip = 52; continue _fun00003 }
 42:
                    zuuluu = _closure1_slot5;
                    michal = zuuluu.customKeyboardHeight;
 52:
                    _fun00004_ip = 60; continue _fun00003;
 54:
                    michal = entity.keyboardHeight;
 60:
                    entity = global;
                    tangon = entity.Math;
                    zuuluu = tangon.max;
                    entity = _closure2_slot2;
                    michal = michal + entity;
                    entity = 0;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                }
            };
            offset = yankee.bind(romeon)(offset, golfie, option);
            _closure2_slot3 = offset;
            yankee = _closure1_slot2;
            option = yankee.useRef;
            golfie = false;
            golfie = option.bind(yankee)(golfie);
            _closure2_slot4 = golfie;
            yankee = _closure1_slot2;
            option = yankee.useEffect;
            golfie = new Array(2);
            golfie[0] = zuuluu;
            golfie[1] = offset;
            zuuluu = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = _closure2_slot4;
                    entity = entity.current;
                    if(entity) { _fun00006_ip = 29; continue _fun00005 }
 15:
                    zuuluu = _closure2_slot4;
                    entity = true;
                    zuuluu['current'] = entity;
                    _fun00006_ip = 111; continue _fun00005;
 29:
                    report = _closure1_slot0;
                    tangon = _closure1_slot1;
                    zuuluu = 6;
                    zuuluu = tangon[zuuluu];
                    tangon = undefined;
                    report = report.bind(tangon)(zuuluu);
                    zuuluu = report.getKeyboardDuration;
                    zuuluu = zuuluu.bind(report)();
                    michal = _closure2_slot1;
                    if(!michal) { _fun00006_ip = 77; continue _fun00005 }
 71:
                    report = 0;
                    michal = zuuluu > report;
 77:
                    if(!michal) { _fun00006_ip = 111; continue _fun00005 }
 80:
                    michal = _closure1_slot0;
                    report = _closure1_slot1;
                    entity = 7;
                    entity = report[entity];
                    michal = michal.bind(tangon)(entity);
                    entity = michal.DeprecatedLayoutAnimationKeyboard;
                    entity = entity.bind(michal)(zuuluu);
 111:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = option.bind(yankee)(zuuluu, golfie);
            option = _closure1_slot2;
            golfie = option.useMemo;
            zuuluu = new Array(2);
            zuuluu[0] = offset;
            zuuluu[1] = verify;
            michal = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00008_ip = 117; continue _fun00007 }
 13:
                    tangon = _closure1_slot4;
                    zuuluu = tangon.flatten;
                    entity = _closure2_slot0;
                    tangon = zuuluu.bind(tangon)(entity);
                    entity = tangon.marginBottom;
                    zuuluu = 'number';
                    entity = typeof entity;
                    if(!(zuuluu !== entity)) { _fun00008_ip = 78; continue _fun00007 }
 51:
                    entity = {};
                    golfie = entity;
                    oscard = tangon;
                    zuuluu = copyDataProperties(golfie, oscard);
                    report = _closure2_slot3;
                    zuuluu = 'marginBottom';
                    entity[zuuluu] = report;
                    _fun00008_ip = 115; continue _fun00007;
 78:
                    zuuluu = {};
                    golfie = zuuluu;
                    oscard = tangon;
                    report = copyDataProperties(golfie, oscard);
                    report = tangon.marginBottom;
                    tangon = _closure2_slot3;
                    report = report + tangon;
                    tangon = 'marginBottom';
                    zuuluu[tangon] = report;
                    entity = zuuluu;
 115:
                    return entity;
 117:
                    entity = {};
                    michal = _closure2_slot3;
                    entity['marginBottom'] = michal;
                    return entity;
                }
            };
            golfie = golfie.bind(option)(michal, zuuluu);
            zuuluu = _closure1_slot7;
            michal = _closure1_slot3;
            entity = {};
            entity['style'] = golfie;
            entity['pointerEvents'] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot2 = golfie;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.View;
    var _closure1_slot3 = option;
    tangon = tangon.StyleSheet;
    var _closure1_slot4 = tangon;
    tangon = 2;
    option = oscard[tangon];
    tangon = argBaz;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.KeyboardTypes;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot7 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) { // Original name: KeyboardAwareView
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = argFoo;
            entity = tangon.disabled;
            report = undefined;
            if(!(entity === report)) { _fun00010_ip = 46; continue _fun00009 }
 14:
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot1;
            michal = 8;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.isAndroid;
            entity = michal.bind(zuuluu)();
 46:
            michal = null;
            zuuluu = Object.create(michal);
            michal = 0;
            zuuluu['disabled'] = michal;
            offset = {};
            verify = tangon;
            option = zuuluu;
            oscard = copyDataProperties(offset, verify, option);
            tangon = _closure1_slot7;
            if(entity) { _fun00010_ip = 103; continue _fun00009 }
 79:
            zuuluu = _closure1_slot8;
            entity = {};
            offset = entity;
            verify = oscard;
            golfie = copyDataProperties(offset, verify);
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00010_ip = 144; continue _fun00009;
 103:
            zuuluu = _closure1_slot3;
            michal = {};
            golfie = oscard.children;
            michal['children'] = golfie;
            golfie = oscard.pointerEvents;
            michal['pointerEvents'] = golfie;
            oscard = oscard.style;
            michal['style'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 144:
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/keyboard/native/KeyboardAwareView.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();