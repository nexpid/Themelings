// app/modules/modals/native/SimpleLoadingModalUI.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    offset = 0;
    golfie = oscard[offset];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    verify = 1;
    tangon = oscard[verify];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.ActivityIndicator;
    var _closure1_slot3 = golfie;
    golfie = tangon.Modal;
    var _closure1_slot4 = golfie;
    tangon = tangon.View;
    var _closure1_slot5 = tangon;
    option = 2;
    tangon = oscard[option];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    yankee = report.bind(entity)(tangon);
    golfie = yankee.createStyles;
    tangon = {};
    romeon = {'flex': 1, 'alignItems': 'center', 'flexDirection': 'column', 'justifyContent': 'center'};
    tangon['modalBackground'] = romeon;
    tangon = golfie.bind(yankee)(tangon);
    var _closure1_slot7 = tangon;
    tangon = {};
    tangon['OPENING'] = offset;
    golfie = 'OPENING';
    tangon[offset] = golfie;
    tangon['SHOWN'] = verify;
    golfie = 'SHOWN';
    tangon[verify] = golfie;
    tangon['DISMISSED'] = option;
    golfie = 'DISMISSED';
    tangon[option] = golfie;
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/modals/native/SimpleLoadingModalUI.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: SimpleLoadingModal
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            offset = zuuluu.operation;
            var _closure2_slot0 = offset;
            michal = zuuluu.onResolved;
            tangon = undefined;
            if(!(michal === tangon)) { _fun00002_ip = 32; continue _fun00001 }
 27:
            michal = function() { // Original name: I
                entity = undefined;
                return entity;
            };
 32:
            var _closure2_slot1 = michal;
            entity = zuuluu.onRejected;
            if(!(entity === tangon)) { _fun00002_ip = 51; continue _fun00001 }
 46:
            entity = function() { // Original name: f
                entity = undefined;
                return entity;
            };
 51:
            var _closure2_slot2 = entity;
            oscard = zuuluu.cancelable;
            if(!(oscard === tangon)) { _fun00002_ip = 67; continue _fun00001 }
 65:
            oscard = false;
 67:
            var _closure2_slot3 = oscard;
            zuuluu = zuuluu.onDismissed;
            if(!(zuuluu === tangon)) { _fun00002_ip = 86; continue _fun00001 }
 81:
            zuuluu = function() { // Original name: N
                entity = undefined;
                return entity;
            };
 86:
            var _closure2_slot4 = zuuluu;
            var _closure2_slot5 = tangon;
            var _closure2_slot6 = tangon;
            var _closure2_slot7 = tangon;
            var _closure2_slot8 = tangon;
            oscard = _closure1_slot7;
            golfie = oscard.bind(tangon)();
            oscard = _closure1_slot2;
            yankee = oscard.useRef;
            option = _closure1_slot8;
            option = option.OPENING;
            option = yankee.bind(oscard)(option);
            _closure2_slot5 = option;
            yankee = oscard.useCallback;
            option = new Array(1);
            option[0] = zuuluu;
            zuuluu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure2_slot5;
                    tangon = entity.current;
                    zuuluu = _closure1_slot8;
                    zuuluu = zuuluu.SHOWN;
                    if(!(tangon === zuuluu)) { _fun00004_ip = 39; continue _fun00003 }
 29:
                    tangon = _closure2_slot4;
                    zuuluu = undefined;
                    zuuluu = tangon.bind(zuuluu)();
 39:
                    michal = _closure2_slot5;
                    entity = _closure1_slot8;
                    entity = entity.DISMISSED;
                    michal['current'] = entity;
                    entity = undefined;
                    return entity;
                }
            };
            yankee = yankee.bind(oscard)(zuuluu, option);
            _closure2_slot6 = yankee;
            option = oscard.useCallback;
            zuuluu = new Array(2);
            zuuluu[0] = yankee;
            zuuluu[1] = michal;
            michal = function(argFoo) {
                tangon = _closure2_slot1;
                entity = undefined;
                zuuluu = argFoo;
                zuuluu = tangon.bind(entity)(zuuluu);
                michal = _closure2_slot6;
                michal = michal.bind(entity)();
                return entity;
            };
            option = option.bind(oscard)(michal, zuuluu);
            _closure2_slot7 = option;
            zuuluu = oscard.useCallback;
            michal = new Array(2);
            michal[0] = yankee;
            michal[1] = entity;
            entity = function(argFoo) {
                tangon = _closure2_slot2;
                entity = undefined;
                zuuluu = argFoo;
                zuuluu = tangon.bind(entity)(zuuluu);
                michal = _closure2_slot6;
                michal = michal.bind(entity)();
                return entity;
            };
            entity = zuuluu.bind(oscard)(entity, michal);
            _closure2_slot8 = entity;
            zuuluu = oscard.useEffect;
            michal = new Array(3);
            michal[0] = offset;
            michal[1] = option;
            michal[2] = entity;
            entity = function() {
                zuuluu = _closure2_slot0;
                entity = undefined;
                report = zuuluu.bind(entity)();
                tangon = report.then;
                zuuluu = function(argFoo) {
                    zuuluu = _closure2_slot7;
                    michal = undefined;
                    entity = argFoo;
                    entity = zuuluu.bind(michal)(entity);
                    return entity;
                };
                tangon = tangon.bind(report)(zuuluu);
                zuuluu = tangon.catch;
                michal = function(argFoo) {
                    zuuluu = _closure2_slot8;
                    michal = undefined;
                    entity = argFoo;
                    entity = zuuluu.bind(michal)(entity);
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity = zuuluu.bind(oscard)(entity, michal);
            zuuluu = _closure1_slot6;
            michal = _closure1_slot4;
            entity = {'transparent': true, 'animationType': 'none'};
            oscard = function() { // Original name: onShow
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = _closure2_slot5;
                    tangon = michal.current;
                    zuuluu = _closure1_slot8;
                    zuuluu = zuuluu.DISMISSED;
                    if(!(tangon !== zuuluu)) { _fun00006_ip = 51; continue _fun00005 }
 29:
                    zuuluu = _closure2_slot5;
                    michal = _closure1_slot8;
                    michal = michal.SHOWN;
                    zuuluu['current'] = michal;
                    _fun00006_ip = 61; continue _fun00005;
 51:
                    michal = _closure2_slot4;
                    entity = undefined;
                    entity = michal.bind(entity)();
 61:
                    entity = undefined;
                    return entity;
                }
            };
            entity['onShow'] = oscard;
            report = function() { // Original name: onRequestClose
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot3;
                    if(!michal) { _fun00008_ip = 20; continue _fun00007 }
 10:
                    michal = _closure2_slot6;
                    entity = undefined;
                    entity = michal.bind(entity)();
 20:
                    entity = undefined;
                    return entity;
                }
            };
            entity['onRequestClose'] = report;
            oscard = _closure1_slot5;
            report = {};
            golfie = golfie.modalBackground;
            report['style'] = golfie;
            option = _closure1_slot3;
            golfie = {'animating': true, 'color': null, 'size': 'large'};
            offset = _closure1_slot0;
            yankee = _closure1_slot1;
            verify = 4;
            verify = yankee[verify];
            verify = offset.bind(tangon)(verify);
            verify = verify.unsafe_rawColors;
            verify = verify.BRAND_500;
            golfie['color'] = verify;
            golfie = zuuluu.bind(tangon)(option, golfie);
            report['children'] = golfie;
            report = zuuluu.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();