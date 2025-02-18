// app/modules/activities/useDeveloperActivityShelfItems.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argBaz;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.DEFAULT_EMBEDDED_ACTIVITY_CONFIG;
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/useDeveloperActivityShelfItems.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() {
        option = _closure1_slot0;
        verify = _closure1_slot1;
        tangon = 3;
        zuuluu = verify[tangon];
        golfie = undefined;
        romeon = option.bind(golfie)(zuuluu);
        yankee = romeon.useStateFromStoresObject;
        zuuluu = _closure1_slot3;
        offset = new Array(1);
        offset[0] = zuuluu;
        oscard = function() {
            entity = {};
            zuuluu = _closure1_slot3;
            michal = zuuluu.getIsEnabled;
            michal = michal.bind(zuuluu)();
            entity['isEnabled'] = michal;
            michal = zuuluu.getLastUsedObject;
            michal = michal.bind(zuuluu)();
            entity['lastUsedObject'] = michal;
            return entity;
        };
        report = new Array(0);
        report = yankee.bind(romeon)(offset, oscard, report);
        oscard = report.isEnabled;
        var _closure2_slot0 = oscard;
        report = report.lastUsedObject;
        var _closure2_slot1 = report;
        tangon = verify[tangon];
        verify = option.bind(golfie)(tangon);
        option = verify.useStateFromStoresArray;
        golfie = new Array(1);
        golfie[0] = zuuluu;
        tangon = function() {
            michal = _closure1_slot3;
            entity = michal.getDeveloperShelfItems;
            entity = entity.bind(michal)();
            return entity;
        };
        zuuluu = new Array(0);
        golfie = option.bind(verify)(golfie, tangon, zuuluu);
        var _closure2_slot2 = golfie;
        tangon = _closure1_slot2;
        zuuluu = tangon.useMemo;
        michal = new Array(3);
        michal[0] = golfie;
        michal[1] = oscard;
        michal[2] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = _closure2_slot0;
                if(entity) { _fun00002_ip = 18; continue _fun00001 }
 12:
                entity = new Array(0);
                _fun00002_ip = 57; continue _fun00001;
 18:
                report = _closure2_slot2;
                tangon = report.map;
                zuuluu = function(argFoo) {
                    zuuluu = argFoo;
                    entity = {};
                    entity['application'] = zuuluu;
                    michal = {};
                    report = _closure1_slot4;
                    oscard = michal;
                    tangon = copyDataProperties(oscard, report);
                    report = zuuluu.embeddedActivityConfig;
                    oscard = michal;
                    tangon = copyDataProperties(oscard, report);
                    tangon = zuuluu.id;
                    zuuluu = 'application_id';
                    michal[zuuluu] = tangon;
                    entity['activity'] = michal;
                    return entity;
                };
                tangon = tangon.bind(report)(zuuluu);
                zuuluu = tangon.sort;
                michal = function(argFoo, argBar) {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        michal = _closure2_slot1;
                        entity = argFoo;
                        entity = entity.application;
                        entity = entity.id;
                        tangon = michal[entity];
                        entity = argBar;
                        entity = entity.application;
                        entity = entity.id;
                        zuuluu = michal[entity];
                        michal = null;
                        report = michal == tangon;
                        entity = 1;
                        if(report) { _fun00004_ip = 73; continue _fun00003 }
 53:
                        report = michal == zuuluu;
                        michal = -1;
                        if(report) { _fun00004_ip = 70; continue _fun00003 }
 66:
                        michal = zuuluu - tangon;
 70:
                        entity = michal;
 73:
                        return entity;
                    }
                };
                entity = zuuluu.bind(tangon)(michal);
 57:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useDeveloperActivityShelfItems'] = michal;
    return entity;
})();