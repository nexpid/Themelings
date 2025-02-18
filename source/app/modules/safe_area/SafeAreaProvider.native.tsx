// app/modules/safe_area/SafeAreaProvider.native.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        oscard = argBar;
        verify = argBaz;
        zuuluu = argFre;
        golfie = argPlu;
        var _closure1_slot0 = oscard;
        var _closure1_slot1 = verify;
        var _closure1_slot2 = golfie;
        entity = global;
        option = entity.Object;
        report = option.defineProperty;
        tangon = {};
        entity = true;
        tangon['value'] = entity;
        entity = '__esModule';
        entity = report.bind(option)(zuuluu, entity, tangon);
        entity = 0;
        report = golfie[entity];
        tangon = argCor;
        entity = undefined;
        tangon = tangon.bind(entity)(report);
        var _closure1_slot3 = tangon;
        foxtra = 1;
        tangon = golfie[foxtra];
        tangon = oscard.bind(entity)(tangon);
        yankee = tangon.StyleSheet;
        option = tangon.requireNativeComponent;
        tangon = 2;
        tangon = golfie[tangon];
        tangon = oscard.bind(entity)(tangon);
        tangon = tangon.jsx;
        var _closure1_slot4 = tangon;
        tangon = {};
        report = 3;
        report = golfie[report];
        report = oscard.bind(entity)(report);
        report = report.INITIAL_SAFE_AREA_INSETS;
        tangon['insets'] = report;
        report = {'x': 0, 'y': 0};
        offset = 4;
        romeon = golfie[offset];
        backup = oscard.bind(entity)(romeon);
        romeon = backup.getWindowDimensions;
        romeon = romeon.bind(backup)();
        romeon = romeon.width;
        report['width'] = romeon;
        offset = golfie[offset];
        romeon = oscard.bind(entity)(offset);
        offset = romeon.getWindowDimensions;
        offset = offset.bind(romeon)();
        offset = offset.height;
        report['height'] = offset;
        tangon['frame'] = report;
        var _closure1_slot5 = tangon;
        offset = yankee.create;
        report = {};
        romeon = {};
        romeon['flex'] = foxtra;
        report['flex'] = romeon;
        report = offset.bind(yankee)(report);
        var _closure1_slot6 = report;
        report = 5;
        report = golfie[report];
        offset = oscard.bind(entity)(report);
        report = offset.isAndroid;
        report = report.bind(offset)();
        if(report) { _fun00002_ip = 289; continue _fun00001 }
 276:
        report = 'DCDSafeArea';
        report = option.bind(entity)(report);
        _fun00002_ip = 301; continue _fun00001;
 289:
        option = 6;
        option = golfie[option];
        report = verify.bind(entity)(option);
 301:
        var _closure1_slot7 = report;
        report = 10;
        report = golfie[report];
        golfie = oscard.bind(entity)(report);
        oscard = golfie.fileFinishedImporting;
        report = 'modules/safe_area/SafeAreaProvider.native.tsx';
        report = oscard.bind(golfie)(report);
        zuuluu['INITIAL_SAFE_AREA_METRICS'] = tangon;
        michal = function(argFoo) {
            entity = argFoo;
            golfie = entity.children;
            tangon = _closure1_slot3;
            zuuluu = tangon.useCallback;
            michal = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    report = entity.nativeEvent;
                    var _closure3_slot0 = report;
                    zuuluu = report.imeInsetsBottom;
                    entity = null;
                    if(!(entity == zuuluu)) { _fun00004_ip = 34; continue _fun00003 }
 26:
                    entity = 0;
                    report['imeInsetsBottom'] = entity;
 34:
                    oscard = _closure1_slot1;
                    tangon = _closure1_slot2;
                    entity = 7;
                    tangon = tangon[entity];
                    entity = undefined;
                    oscard = oscard.bind(entity)(tangon);
                    tangon = oscard.getState;
                    tangon = tangon.bind(oscard)();
                    oscard = tangon.safeAreaInsets;
                    golfie = oscard.bottom;
                    tangon = report.bottom;
                    tangon = golfie === tangon;
                    if(!tangon) { _fun00004_ip = 106; continue _fun00003 }
 92:
                    option = oscard.top;
                    golfie = report.top;
                    tangon = option === golfie;
 106:
                    if(!tangon) { _fun00004_ip = 123; continue _fun00003 }
 109:
                    option = oscard.left;
                    golfie = report.left;
                    tangon = option === golfie;
 123:
                    if(!tangon) { _fun00004_ip = 140; continue _fun00003 }
 126:
                    option = oscard.right;
                    golfie = report.right;
                    tangon = option === golfie;
 140:
                    if(!tangon) { _fun00004_ip = 159; continue _fun00003 }
 143:
                    oscard = oscard.imeInsetsBottom;
                    report = report.imeInsetsBottom;
                    tangon = oscard === report;
 159:
                    if(tangon) { _fun00004_ip = 200; continue _fun00003 }
 162:
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    zuuluu = 8;
                    zuuluu = report[zuuluu];
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.batchUpdates;
                    michal = function() {
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 7;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.setState;
                        michal = function() {
                            entity = {};
                            michal = _closure3_slot0;
                            entity['safeAreaInsets'] = michal;
                            return entity;
                        };
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    michal = zuuluu.bind(tangon)(michal);
 200:
                    return entity;
                }
            };
            entity = new Array(0);
            entity = zuuluu.bind(tangon)(michal, entity);
            tangon = _closure1_slot4;
            zuuluu = _closure1_slot7;
            michal = {};
            michal['onSafeAreaInsetsDidChange'] = entity;
            entity = _closure1_slot6;
            entity = entity.flex;
            michal['style'] = entity;
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            entity = 9;
            report = report[entity];
            entity = undefined;
            report = oscard.bind(entity)(report);
            oscard = report.SafeAreaProvider;
            report = {};
            option = _closure1_slot5;
            report['initialMetrics'] = option;
            report['children'] = golfie;
            report = tangon.bind(entity)(oscard, report);
            michal['children'] = report;
            entity = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        zuuluu['SafeAreaProvider'] = michal;
        return entity;
    }
})();