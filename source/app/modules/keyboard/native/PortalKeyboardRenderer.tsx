// app/modules/keyboard/native/PortalKeyboardRenderer.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.KeyboardTypes;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot6 = tangon;
    tangon = new Array(0);
    var _closure1_slot7 = tangon;
    tangon = function(argFoo) { // Original name: transitionGroupGetItemKey
        entity = argFoo;
        entity = entity.id;
        return entity;
    };
    var _closure1_slot8 = tangon;
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: transitionGroupRenderItem
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argBaz;
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            entity = 4;
            entity = report[entity];
            oscard = undefined;
            entity = tangon.bind(oscard)(entity);
            entity = entity.TransitionStates;
            entity = entity.YEETED;
            tangon = michal === entity;
            if(!tangon) { _fun00002_ip = 71; continue _fun00001 }
 47:
            entity = _closure1_slot4;
            report = entity.keyboardType;
            entity = _closure1_slot5;
            entity = entity.SYSTEM;
            tangon = report === entity;
 71:
            if(!tangon) { _fun00002_ip = 103; continue _fun00001 }
 74:
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 5;
            entity = golfie[entity];
            report = report.bind(oscard)(entity);
            entity = report.isAndroid;
            tangon = entity.bind(report)();
 103:
            entity = null;
            if(tangon) { _fun00002_ip = 163; continue _fun00001 }
 108:
            report = _closure1_slot6;
            tangon = _closure1_slot1;
            golfie = _closure1_slot2;
            zuuluu = 6;
            zuuluu = golfie[zuuluu];
            tangon = tangon.bind(oscard)(zuuluu);
            zuuluu = {};
            golfie = argBar;
            zuuluu['item'] = golfie;
            zuuluu['state'] = michal;
            michal = argCor;
            zuuluu['cleanUp'] = michal;
            michal = argFoo;
            entity = report.bind(oscard)(tangon, zuuluu, michal);
 163:
            return entity;
        }
    };
    var _closure1_slot9 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/keyboard/native/PortalKeyboardRenderer.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: PortalKeyboardRenderer
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            entity = entity.portal;
            tangon = undefined;
            if(!(entity === tangon)) { _fun00004_ip = 19; continue _fun00003 }
 17:
            entity = true;
 19:
            var _closure2_slot0 = tangon;
            var _closure2_slot1 = tangon;
            var _closure2_slot2 = tangon;
            verify = _closure1_slot3;
            zuuluu = verify.useId;
            oscard = zuuluu.bind(verify)();
            _closure2_slot0 = oscard;
            option = verify.useLayoutEffect;
            report = new Array(1);
            report[0] = oscard;
            zuuluu = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 7;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.registerPortalKeyboardRenderer;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu = option.bind(verify)(zuuluu, report);
            option = verify.useLayoutEffect;
            report = function() {
                tangon = function() { // Original name: onKeyboardStoreChange
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        report = _closure1_slot0;
                        entity = _closure1_slot2;
                        tangon = 7;
                        zuuluu = entity[tangon];
                        entity = undefined;
                        zuuluu = report.bind(entity)(zuuluu);
                        report = zuuluu.usePortalKeyboardStore;
                        zuuluu = report.getState;
                        zuuluu = zuuluu.bind(report)();
                        report = zuuluu.keyboard;
                        zuuluu = _closure1_slot4;
                        oscard = zuuluu.keyboardType;
                        zuuluu = null;
                        zuuluu = zuuluu != report;
                        if(!zuuluu) { _fun00006_ip = 75; continue _fun00005 }
 66:
                        report = report.type;
                        zuuluu = oscard !== report;
 75:
                        if(!zuuluu) { _fun00006_ip = 105; continue _fun00005 }
 78:
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        michal = michal[tangon];
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.closeUnhandledPortalKeyboard;
                        michal = michal.bind(zuuluu)();
 105:
                        return entity;
                    }
                };
                var _closure3_slot0 = tangon;
                zuuluu = _closure1_slot4;
                michal = zuuluu.addChangeListener;
                michal = michal.bind(zuuluu)(tangon);
                entity = function() {
                    tangon = _closure1_slot4;
                    zuuluu = tangon.removeChangeListener;
                    michal = _closure3_slot0;
                    michal = zuuluu.bind(tangon)(michal);
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 7;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.closeUnhandledPortalKeyboard;
                    michal = michal.bind(zuuluu)();
                    return entity;
                };
                return entity;
            };
            zuuluu = new Array(0);
            zuuluu = option.bind(verify)(report, zuuluu);
            option = _closure1_slot0;
            zuuluu = _closure1_slot2;
            report = 7;
            zuuluu = zuuluu[report];
            option = option.bind(tangon)(zuuluu);
            zuuluu = option.usePortalKeyboardStore;
            zuuluu = zuuluu.bind(option)();
            verify = zuuluu.keyboard;
            _closure2_slot1 = verify;
            option = zuuluu.renderers;
            offset = option.length;
            zuuluu = 0;
            offset = zuuluu === offset;
            if(offset) { _fun00004_ip = 182; continue _fun00003 }
 162:
            yankee = option.length;
            zuuluu = 1;
            zuuluu = yankee - zuuluu;
            zuuluu = option[zuuluu];
            offset = zuuluu === oscard;
 182:
            _closure2_slot2 = offset;
            option = _closure1_slot3;
            oscard = option.useMemo;
            zuuluu = new Array(2);
            zuuluu[0] = offset;
            zuuluu[1] = verify;
            michal = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00008_ip = 20; continue _fun00007 }
 13:
                    entity = _closure2_slot2;
                    if(entity) { _fun00008_ip = 29; continue _fun00007 }
 20:
                    entity = _closure1_slot7;
                    _fun00008_ip = 44; continue _fun00007;
 29:
                    zuuluu = _closure2_slot1;
                    michal = new Array(1);
                    michal[0] = zuuluu;
                    entity = michal;
 44:
                    return entity;
                }
            };
            option = oscard.bind(option)(michal, zuuluu);
            if(entity) { _fun00004_ip = 234; continue _fun00003 }
 223:
            entity = _closure1_slot3;
            zuuluu = entity.Fragment;
            _fun00004_ip = 257; continue _fun00003;
 234:
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[report];
            entity = michal.bind(tangon)(entity);
            zuuluu = entity.PortalKeyboard;
 257:
            michal = _closure1_slot6;
            entity = {};
            oscard = _closure1_slot0;
            verify = _closure1_slot2;
            report = 4;
            report = verify[report];
            report = oscard.bind(tangon)(report);
            oscard = report.TransitionGroup;
            report = {};
            report['items'] = option;
            option = _closure1_slot8;
            report['getItemKey'] = option;
            golfie = _closure1_slot9;
            report['renderItem'] = golfie;
            report = michal.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = michal.bind(tangon)(zuuluu, entity);
            return entity;
        }
    };
    zuuluu['PortalKeyboardRenderer'] = michal;
    return entity;
})();