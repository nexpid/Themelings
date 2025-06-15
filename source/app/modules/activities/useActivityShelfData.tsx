// app/modules/activities/useActivityShelfData.tsx
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/useActivityShelfData.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useActivityShelfData
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            var _closure2_slot0 = michal;
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 4;
            michal = oscard[zuuluu];
            golfie = undefined;
            offset = report.bind(golfie)(michal);
            verify = offset.useStateFromStores;
            michal = _closure1_slot4;
            option = new Array(1);
            option[0] = michal;
            michal = michal.getCurrentUser;
            michal = verify.bind(offset)(option, michal);
            var _closure2_slot1 = michal;
            option = oscard[zuuluu];
            yankee = report.bind(golfie)(option);
            offset = yankee.useStateFromStoresArray;
            option = _closure1_slot6;
            verify = new Array(1);
            verify[0] = option;
            option = function() {
                zuuluu = _closure1_slot6;
                michal = zuuluu.getShelfActivities;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            offset = offset.bind(yankee)(verify, option);
            var _closure2_slot2 = offset;
            zuuluu = oscard[zuuluu];
            option = report.bind(golfie)(zuuluu);
            oscard = option.useStateFromStores;
            zuuluu = _closure1_slot5;
            report = new Array(1);
            report[0] = zuuluu;
            zuuluu = function() {
                entity = _closure1_slot5;
                entity = entity.testModeEmbeddedApplicationId;
                return entity;
            };
            report = oscard.bind(option)(report, zuuluu);
            var _closure2_slot3 = report;
            oscard = offset.map;
            zuuluu = function(argFoo) {
                entity = argFoo;
                entity = entity.application_id;
                return entity;
            };
            yankee = oscard.bind(offset)(zuuluu);
            option = null;
            oscard = yankee;
            if(!(option != report)) { _fun00002_ip = 203; continue _fun00001 }
 179:
            zuuluu = new Array(1);
            zuuluu[0] = report;
            romeon = 1;
            backup = zuuluu;
            foxtra = yankee;
            verify = arraySpread(backup, foxtra, romeon);
            oscard = zuuluu;
 203:
            verify = _closure1_slot1;
            yankee = _closure1_slot2;
            zuuluu = 5;
            zuuluu = yankee[zuuluu];
            zuuluu = verify.bind(golfie)(zuuluu);
            zuuluu = zuuluu.bind(golfie)(oscard);
            var _closure2_slot4 = zuuluu;
            tangon = _closure1_slot3;
            verify = tangon.useMemo;
            oscard = new Array(1);
            oscard[0] = zuuluu;
            zuuluu = function() {
                zuuluu = _closure2_slot4;
                michal = zuuluu.filter;
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                entity = 6;
                tangon = tangon[entity];
                entity = undefined;
                entity = report.bind(entity)(tangon);
                entity = entity.isNotNullish;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu = verify.bind(tangon)(zuuluu, oscard);
            var _closure2_slot5 = zuuluu;
            verify = tangon.useMemo;
            oscard = new Array(2);
            oscard[0] = zuuluu;
            oscard[1] = report;
            report = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure2_slot3;
                    zuuluu = null;
                    if(!(zuuluu != entity)) { _fun00004_ip = 67; continue _fun00003 }
 13:
                    entity = _closure2_slot5;
                    entity = entity.length;
                    tangon = 0;
                    if(!(entity > tangon)) { _fun00004_ip = 67; continue _fun00003 }
 28:
                    entity = _closure2_slot5;
                    entity = entity[tangon];
                    report = entity.id;
                    entity = _closure2_slot3;
                    if(!(report === entity)) { _fun00004_ip = 67; continue _fun00003 }
 49:
                    entity = _closure2_slot5;
                    entity = entity[tangon];
                    entity = entity.embeddedActivityConfig;
                    if(!(zuuluu == entity)) { _fun00004_ip = 73; continue _fun00003 }
 67:
                    entity = new Array(0);
                    _fun00004_ip = 117; continue _fun00003;
 73:
                    zuuluu = {};
                    report = _closure2_slot5;
                    report = report[tangon];
                    report = report.embeddedActivityConfig;
                    zuuluu['activity'] = report;
                    michal = _closure2_slot5;
                    michal = michal[tangon];
                    zuuluu['application'] = michal;
                    michal = new Array(1);
                    michal[0] = zuuluu;
                    entity = michal;
 117:
                    return entity;
                }
            };
            report = verify.bind(tangon)(report, oscard);
            var _closure2_slot6 = report;
            verify = tangon.useMemo;
            oscard = new Array(2);
            oscard[0] = offset;
            oscard[1] = zuuluu;
            zuuluu = function() {
                zuuluu = _closure2_slot2;
                michal = zuuluu.map;
                entity = function(argFoo) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        tangon = argFoo;
                        var _closure4_slot0 = tangon;
                        zuuluu = _closure2_slot5;
                        michal = zuuluu.find;
                        entity = function(argFoo) {
                            entity = argFoo;
                            michal = entity.id;
                            entity = _closure4_slot0;
                            entity = entity.application_id;
                            entity = michal === entity;
                            return entity;
                        };
                        zuuluu = michal.bind(zuuluu)(entity);
                        entity = null;
                        michal = entity == zuuluu;
                        if(michal) { _fun00006_ip = 57; continue _fun00005 }
 43:
                        michal = {};
                        michal['activity'] = tangon;
                        michal['application'] = zuuluu;
                        entity = michal;
 57:
                        return entity;
                    }
                };
                zuuluu = michal.bind(zuuluu)(entity);
                michal = zuuluu.filter;
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                entity = 6;
                tangon = tangon[entity];
                entity = undefined;
                entity = report.bind(entity)(tangon);
                entity = entity.isNotNullish;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            oscard = verify.bind(tangon)(zuuluu, oscard);
            var _closure2_slot7 = oscard;
            zuuluu = tangon.useMemo;
            option = option == michal;
            golfie = undefined;
            if(option) { _fun00002_ip = 354; continue _fun00001 }
 348:
            golfie = michal.nsfwAllowed;
 354:
            michal = new Array(3);
            michal[0] = golfie;
            michal[1] = oscard;
            michal[2] = report;
            entity = function() {
                golfie = _closure2_slot6;
                tangon = new Array(0);
                oscard = 0;
                option = tangon;
                oscard = arraySpread(option, golfie, oscard);
                golfie = _closure2_slot7;
                option = tangon;
                michal = arraySpread(option, golfie, oscard);
                zuuluu = tangon.filter;
                michal = function(argFoo) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        entity = argFoo;
                        entity = entity.activity;
                        zuuluu = entity.supported_platforms;
                        entity = null;
                        if(!(entity == zuuluu)) { _fun00008_ip = 25; continue _fun00007 }
 21:
                        zuuluu = new Array(0);
 25:
                        michal = zuuluu.includes;
                        oscard = _closure1_slot1;
                        golfie = _closure1_slot2;
                        tangon = 7;
                        tangon = golfie[tangon];
                        report = undefined;
                        tangon = oscard.bind(report)(tangon);
                        oscard = _closure1_slot0;
                        entity = 8;
                        entity = golfie[entity];
                        oscard = oscard.bind(report)(entity);
                        entity = oscard.getOS;
                        entity = entity.bind(oscard)();
                        entity = tangon.bind(report)(entity);
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    }
                };
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = zuuluu.filter;
                entity = function(argFoo) {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        entity = argFoo;
                        entity = entity.activity;
                        entity = entity.requires_age_gate;
                        entity = !entity;
                        if(entity) { _fun00010_ip = 55; continue _fun00009 }
 21:
                        tangon = _closure2_slot1;
                        zuuluu = null;
                        tangon = zuuluu == tangon;
                        zuuluu = undefined;
                        if(tangon) { _fun00010_ip = 49; continue _fun00009 }
 39:
                        michal = _closure2_slot1;
                        zuuluu = michal.nsfwAllowed;
 49:
                        michal = true;
                        entity = michal === zuuluu;
 55:
                        if(entity) { _fun00010_ip = 90; continue _fun00009 }
 58:
                        michal = _closure2_slot1;
                        zuuluu = null;
                        report = zuuluu == michal;
                        michal = undefined;
                        if(report) { _fun00010_ip = 86; continue _fun00009 }
 76:
                        tangon = _closure2_slot1;
                        michal = tangon.nsfwAllowed;
 86:
                        entity = zuuluu == michal;
 90:
                        return entity;
                    }
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        }
    };
    zuuluu['useActivityShelfData'] = michal;
    return entity;
})();