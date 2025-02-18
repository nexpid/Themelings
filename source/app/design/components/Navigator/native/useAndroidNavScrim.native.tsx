// app/design/components/Navigator/native/useAndroidNavScrim.native.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
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
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'position': 'absolute', 'bottom': 0, 'left': 0, 'right': 0};
    offset = 4;
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.ANDROID_NAVIGATION_SCRIM_BACKGROUND;
    verify['backgroundColor'] = offset;
    tangon['androidNavScrim'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'design/components/Navigator/native/useAndroidNavScrim.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useAndroidNavScrim
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            var _closure2_slot0 = report;
            zuuluu = _closure1_slot6;
            option = undefined;
            oscard = zuuluu.bind(option)();
            var _closure2_slot1 = oscard;
            tangon = _closure1_slot1;
            verify = _closure1_slot2;
            zuuluu = 5;
            zuuluu = verify[zuuluu];
            zuuluu = tangon.bind(option)(zuuluu);
            zuuluu = zuuluu.bind(option)();
            zuuluu = zuuluu.bottom;
            golfie = _closure1_slot0;
            tangon = 6;
            tangon = verify[tangon];
            golfie = golfie.bind(option)(tangon);
            tangon = golfie.isAndroid;
            tangon = tangon.bind(golfie)();
            golfie = 0;
            if(!tangon) { _fun00002_ip = 88; continue _fun00001 }
 85:
            golfie = zuuluu;
 88:
            var _closure2_slot2 = golfie;
            tangon = _closure1_slot3;
            zuuluu = tangon.useMemo;
            michal = new Array(3);
            michal[0] = golfie;
            michal[1] = oscard;
            michal[2] = report;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure2_slot2;
                    michal = 0;
                    if(!(!(entity > michal))) { _fun00004_ip = 29; continue _fun00003 }
 13:
                    entity = {};
                    entity['scrimHeight'] = michal;
                    michal = undefined;
                    entity['scrim'] = michal;
                    _fun00004_ip = 113; continue _fun00003;
 29:
                    michal = {};
                    zuuluu = _closure2_slot2;
                    michal['scrimHeight'] = zuuluu;
                    oscard = _closure1_slot5;
                    report = _closure1_slot4;
                    tangon = {};
                    zuuluu = _closure2_slot1;
                    option = zuuluu.androidNavScrim;
                    zuuluu = new Array(3);
                    zuuluu[0] = option;
                    option = {};
                    verify = _closure2_slot2;
                    option['height'] = verify;
                    zuuluu[1] = option;
                    golfie = _closure2_slot0;
                    zuuluu[2] = golfie;
                    tangon['style'] = zuuluu;
                    zuuluu = undefined;
                    zuuluu = oscard.bind(zuuluu)(report, tangon);
                    michal['scrim'] = zuuluu;
                    entity = michal;
 113:
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        }
    };
    zuuluu['useAndroidNavScrim'] = michal;
    return entity;
})();