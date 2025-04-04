// app/modules/activities/useActivityShelfItemsSorting.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = function(argFoo, argBar) { // Original name: applySorting
        tangon = argBar;
        zuuluu = new Array(0);
        golfie = argFoo;
        michal = 0;
        option = zuuluu;
        oscard = 0;
        report = arraySpread(option, golfie, oscard);
        var _closure2_slot0 = zuuluu;
        var _closure2_slot1 = michal;
        zuuluu = tangon.forEach;
        michal = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = argFoo;
                var _closure3_slot0 = michal;
                tangon = _closure2_slot0;
                zuuluu = tangon.findIndex;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.application;
                    michal = entity.id;
                    entity = _closure3_slot0;
                    entity = michal === entity;
                    return entity;
                };
                oscard = zuuluu.bind(tangon)(entity);
                entity = -1;
                if(!(entity !== oscard)) { _fun00002_ip = 154; continue _fun00001 }
 44:
                entity = _closure2_slot0;
                report = entity[oscard];
                zuuluu = _closure2_slot0;
                entity = zuuluu.splice;
                tangon = 1;
                entity = entity.bind(zuuluu)(oscard, tangon);
                golfie = _closure2_slot0;
                zuuluu = golfie.slice;
                entity = _closure2_slot1;
                oscard = 0;
                verify = zuuluu.bind(golfie)(oscard, entity);
                entity = new Array(1);
                offset = entity;
                option = 0;
                zuuluu = arraySpread(offset, verify, option);
                entity[zuuluu] = report;
                option = zuuluu + tangon;
                oscard = _closure2_slot0;
                report = oscard.slice;
                zuuluu = _closure2_slot1;
                verify = report.bind(oscard)(zuuluu);
                offset = entity;
                zuuluu = arraySpread(offset, verify, option);
                _closure2_slot0 = entity;
                entity = _closure2_slot1;
                entity = entity + 1;
                _closure2_slot1 = entity;
 154:
                entity = undefined;
                return entity;
            }
        };
        michal = zuuluu.bind(tangon)(michal);
        tangon = _closure2_slot0;
        zuuluu = tangon.map;
        michal = function(argFoo, argBar) {
            entity = new Array(2);
            michal = argFoo;
            entity[0] = michal;
            michal = argBar;
            entity[1] = michal;
            return entity;
        };
        tangon = zuuluu.bind(tangon)(michal);
        zuuluu = tangon.filter;
        michal = function(argFoo) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = argFoo;
                michal = entity[Symbol.iterator];
                entity = michal().next;
                tangon = entity().value;
                entity = michal;
                oscard = undefined;
                zuuluu = entity === oscard;
                entity = undefined;
                if(zuuluu) { _fun00004_ip = 27; continue _fun00003 }
 24:
                entity = tangon;
 27:
                if(zuuluu) { _fun00004_ip = 33; continue _fun00003 }
 30:
                michal.return();
 33:
                entity = entity.application;
                entity = entity.embeddedActivityConfig;
                michal = null;
                zuuluu = michal == entity;
                tangon = undefined;
                if(zuuluu) { _fun00004_ip = 134; continue _fun00003 }
 55:
                zuuluu = entity.client_platform_config;
                golfie = _closure1_slot1;
                option = _closure1_slot2;
                report = 2;
                report = option[report];
                report = golfie.bind(oscard)(report);
                golfie = _closure1_slot0;
                entity = 3;
                entity = option[entity];
                golfie = golfie.bind(oscard)(entity);
                entity = golfie.getOS;
                entity = entity.bind(golfie)();
                entity = report.bind(oscard)(entity);
                entity = zuuluu[entity];
                michal = michal == entity;
                tangon = undefined;
                if(michal) { _fun00004_ip = 134; continue _fun00003 }
 128:
                tangon = entity.label_type;
 134:
                michal = !tangon;
                entity = !michal;
                if(michal) { _fun00004_ip = 221; continue _fun00003 }
 143:
                report = _closure1_slot0;
                michal = _closure1_slot2;
                golfie = 4;
                michal = michal[golfie];
                michal = report.bind(oscard)(michal);
                michal = michal.EmbeddedActivityLabelTypes;
                michal = michal.NEW;
                michal = tangon === michal;
                if(michal) { _fun00004_ip = 218; continue _fun00003 }
 185:
                report = _closure1_slot0;
                zuuluu = _closure1_slot2;
                zuuluu = zuuluu[golfie];
                zuuluu = report.bind(oscard)(zuuluu);
                zuuluu = zuuluu.EmbeddedActivityLabelTypes;
                zuuluu = zuuluu.UPDATED;
                michal = tangon === zuuluu;
 218:
                entity = michal;
 221:
                return entity;
            }
        };
        tangon = zuuluu.bind(tangon)(michal);
        zuuluu = tangon.forEach;
        michal = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                report = argFoo;
                zuuluu = report[Symbol.iterator];
                report = zuuluu().next;
                oscard = report().value;
                michal = zuuluu;
                entity = undefined;
                tangon = michal === entity;
                michal = undefined;
                if(tangon) { _fun00006_ip = 27; continue _fun00005 }
 24:
                michal = oscard;
 27:
                option = undefined;
                if(tangon) { _fun00006_ip = 57; continue _fun00005 }
 32:
                oscard = report().value;
                report = zuuluu;
                report = report === entity;
                option = undefined;
                tangon = report;
                if(report) { _fun00006_ip = 57; continue _fun00005 }
 51:
                option = oscard;
                tangon = report;
 57:
                if(tangon) { _fun00006_ip = 63; continue _fun00005 }
 60:
                zuuluu.return();
 63:
                zuuluu = michal.application;
                zuuluu = zuuluu.embeddedActivityConfig;
                tangon = null;
                golfie = option;
                if(!(tangon != zuuluu)) { _fun00006_ip = 131; continue _fun00005 }
 83:
                zuuluu = michal.application;
                zuuluu = zuuluu.embeddedActivityConfig;
                zuuluu = zuuluu.shelf_rank;
                golfie = option;
                if(!(tangon != zuuluu)) { _fun00006_ip = 131; continue _fun00005 }
 107:
                michal = michal.application;
                michal = michal.embeddedActivityConfig;
                zuuluu = michal.shelf_rank;
                michal = 1;
                golfie = zuuluu - michal;
 131:
                if(!(golfie < option)) { _fun00006_ip = 229; continue _fun00005 }
 135:
                michal = _closure2_slot0;
                oscard = michal[option];
                tangon = _closure2_slot0;
                michal = tangon.splice;
                report = 1;
                michal = michal.bind(tangon)(option, report);
                tangon = _closure2_slot0;
                michal = tangon.slice;
                option = 0;
                offset = michal.bind(tangon)(option, golfie);
                michal = new Array(1);
                yankee = michal;
                verify = 0;
                tangon = arraySpread(yankee, offset, verify);
                michal[tangon] = oscard;
                verify = tangon + report;
                oscard = _closure2_slot0;
                tangon = oscard.slice;
                offset = tangon.bind(oscard)(golfie);
                yankee = michal;
                tangon = arraySpread(yankee, offset, verify);
                _closure2_slot0 = michal;
 229:
                return entity;
            }
        };
        michal = zuuluu.bind(tangon)(michal);
        entity = _closure2_slot0;
        return entity;
    };
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/useActivityShelfItemsSorting.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useActivityShelfItemsSorting
        report = argFoo;
        var _closure2_slot0 = report;
        oscard = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 1;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        zuuluu = oscard.bind(zuuluu)(tangon);
        tangon = zuuluu.FrecencyUserSettingsActionCreators;
        zuuluu = tangon.loadIfNecessary;
        zuuluu = zuuluu.bind(tangon)();
        tangon = _closure1_slot3;
        zuuluu = tangon.useMemo;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            report = new Array(0);
            var _closure3_slot0 = report;
            tangon = _closure2_slot0;
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                zuuluu = _closure3_slot0;
                michal = zuuluu.push;
                entity = argFoo;
                entity = entity.application;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = new Array(0);
            oscard = 0;
            option = zuuluu;
            golfie = report;
            michal = arraySpread(option, golfie, oscard);
            michal = zuuluu.sort;
            entity = function(argFoo, argBar) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = argFoo;
                    var _closure4_slot0 = michal;
                    michal = argBar;
                    var _closure4_slot1 = michal;
                    tangon = _closure3_slot0;
                    zuuluu = tangon.findIndex;
                    michal = function(argFoo) {
                        michal = _closure4_slot0;
                        entity = argFoo;
                        entity = entity === michal;
                        return entity;
                    };
                    michal = zuuluu.bind(tangon)(michal);
                    zuuluu = tangon.findIndex;
                    entity = function(argFoo) {
                        michal = _closure4_slot1;
                        entity = argFoo;
                        entity = entity === michal;
                        return entity;
                    };
                    entity = zuuluu.bind(tangon)(entity);
                    michal = michal < entity;
                    entity = 1;
                    if(!michal) { _fun00008_ip = 75; continue _fun00007 }
 69:
                    entity = -1;
 75:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            michal = _closure1_slot4;
            entity = undefined;
            entity = michal.bind(entity)(tangon, zuuluu);
            return entity;
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();