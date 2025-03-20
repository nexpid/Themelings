// app/modules/safe_area/SafeAreaProvider.native.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: getSafeAreaInsets
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            michal = 2;
            michal = report[michal];
            report = undefined;
            tangon = tangon.bind(report)(michal);
            michal = tangon.isAndroid;
            michal = michal.bind(tangon)();
            if(michal) { _fun00002_ip = 42; continue _fun00001 }
 40:
            return zuuluu;
 42:
            tangon = _closure1_slot1;
            oscard = _closure1_slot2;
            entity = 3;
            entity = oscard[entity];
            michal = tangon.bind(report)(entity);
            entity = michal.getState;
            entity = entity.bind(michal)();
            entity = entity.safeAreaInsets;
            michal = 4;
            michal = oscard[michal];
            tangon = tangon.bind(report)(michal);
            michal = tangon.getStableSafeAreaInsets;
            tangon = michal.bind(tangon)();
            report = entity.bottom;
            michal = tangon.bottom;
            if(!(report === michal)) { _fun00002_ip = 156; continue _fun00001 }
 114:
            report = entity.top;
            michal = zuuluu.top;
            if(!(report === michal)) { _fun00002_ip = 156; continue _fun00001 }
 128:
            report = entity.left;
            michal = zuuluu.left;
            if(!(report === michal)) { _fun00002_ip = 156; continue _fun00001 }
 142:
            report = entity.right;
            michal = zuuluu.right;
            if(!(report !== michal)) { _fun00002_ip = 197; continue _fun00001 }
 156:
            michal = {};
            tangon = tangon.bottom;
            michal['bottom'] = tangon;
            tangon = zuuluu.top;
            michal['top'] = tangon;
            tangon = zuuluu.left;
            michal['left'] = tangon;
            zuuluu = zuuluu.right;
            michal['right'] = zuuluu;
            entity = michal;
 197:
            return entity;
        }
    };
    var _closure1_slot5 = entity;
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
    tangon = tangon.jsx;
    var _closure1_slot4 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/safe_area/SafeAreaProvider.native.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: SafeAreaReporter
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 5;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        tangon = report.bind(zuuluu)(tangon);
        zuuluu = tangon.useSafeAreaInsets;
        report = zuuluu.bind(tangon)();
        var _closure2_slot0 = report;
        tangon = _closure1_slot3;
        zuuluu = tangon.useEffect;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 6;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 3;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.setState;
                michal = function() {
                    entity = {};
                    tangon = _closure1_slot5;
                    zuuluu = _closure2_slot0;
                    michal = undefined;
                    michal = tangon.bind(michal)(zuuluu);
                    entity['safeAreaInsets'] = michal;
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        entity = null;
        return entity;
    };
    zuuluu['SafeAreaReporter'] = tangon;
    michal = function(argFoo) {
        entity = argFoo;
        report = entity.children;
        tangon = _closure1_slot4;
        golfie = _closure1_slot0;
        option = _closure1_slot2;
        entity = 5;
        entity = option[entity];
        zuuluu = undefined;
        entity = golfie.bind(zuuluu)(entity);
        michal = entity.SafeAreaProvider;
        entity = {};
        oscard = 7;
        oscard = option[oscard];
        oscard = golfie.bind(zuuluu)(oscard);
        oscard = oscard.INITIAL_SAFE_AREA_METRICS;
        entity['initialMetrics'] = oscard;
        entity['children'] = report;
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    zuuluu['SafeAreaProvider'] = michal;
    return entity;
})();