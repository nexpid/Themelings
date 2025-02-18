// app/modules/applications/ApplicationFrecencyHooks.tsx
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
    tangon = tangon.UserSettingsTypes;
    var _closure1_slot5 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/applications/ApplicationFrecencyHooks.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: useSortApplicationsViaFrecency
        michal = argFoo;
        report = argBar;
        var _closure2_slot0 = michal;
        var _closure2_slot1 = report;
        tangon = _closure1_slot3;
        option = tangon.useEffect;
        golfie = function() {
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 3;
            zuuluu = zuuluu[entity];
            entity = undefined;
            zuuluu = tangon.bind(entity)(zuuluu);
            tangon = zuuluu.FrecencyUserSettingsActionCreators;
            zuuluu = tangon.loadIfUncached;
            michal = _closure1_slot5;
            michal = michal.FRECENCY_AND_FAVORITES_SETTINGS;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        oscard = new Array(0);
        oscard = option.bind(tangon)(golfie, oscard);
        option = _closure1_slot0;
        golfie = _closure1_slot2;
        oscard = 4;
        golfie = golfie[oscard];
        oscard = undefined;
        option = option.bind(oscard)(golfie);
        golfie = option.useStateFromStores;
        zuuluu = _closure1_slot4;
        oscard = new Array(1);
        oscard[0] = zuuluu;
        zuuluu = function() {
            michal = _closure1_slot4;
            entity = michal.getApplicationFrecencyWithoutLoadingLatest;
            entity = entity.bind(michal)();
            return entity;
        };
        oscard = golfie.bind(option)(oscard, zuuluu);
        var _closure2_slot2 = oscard;
        option = tangon.useMemo;
        golfie = new Array(2);
        golfie[0] = michal;
        golfie[1] = report;
        zuuluu = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure2_slot1;
                entity = null;
                if(!(entity != zuuluu)) { _fun00002_ip = 53; continue _fun00001 }
 13:
                entity = _closure2_slot1;
                zuuluu = entity.length;
                entity = 0;
                if(!(entity !== zuuluu)) { _fun00002_ip = 53; continue _fun00001 }
 28:
                tangon = _closure2_slot0;
                zuuluu = tangon.map;
                entity = function(argFoo) {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        michal = argFoo;
                        var _closure4_slot0 = michal;
                        entity = {};
                        option = entity;
                        golfie = michal;
                        michal = copyDataProperties(option, golfie);
                        michal = _closure2_slot1;
                        zuuluu = null;
                        oscard = zuuluu == michal;
                        michal = undefined;
                        if(oscard) { _fun00004_ip = 61; continue _fun00003 }
 39:
                        oscard = _closure2_slot1;
                        report = oscard.some;
                        tangon = function(argFoo) {
                            entity = argFoo;
                            entity = entity.application;
                            michal = entity.id;
                            entity = _closure4_slot0;
                            entity = entity.id;
                            entity = michal === entity;
                            return entity;
                        };
                        michal = report.bind(oscard)(tangon);
 61:
                        zuuluu = zuuluu != michal;
                        if(!zuuluu) { _fun00004_ip = 71; continue _fun00003 }
 68:
                        zuuluu = michal;
 71:
                        michal = 'isUserApp';
                        entity[michal] = zuuluu;
                        return entity;
                    }
                };
                entity = zuuluu.bind(tangon)(entity);
                _fun00002_ip = 57; continue _fun00001;
 53:
                entity = _closure2_slot0;
 57:
                return entity;
            }
        };
        golfie = option.bind(tangon)(zuuluu, golfie);
        var _closure2_slot3 = golfie;
        option = tangon.useMemo;
        zuuluu = new Array(2);
        zuuluu[0] = michal;
        zuuluu[1] = report;
        michal = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = _closure2_slot1;
                entity = null;
                zuuluu = entity == zuuluu;
                entity = undefined;
                if(zuuluu) { _fun00006_ip = 41; continue _fun00005 }
 18:
                tangon = _closure2_slot1;
                zuuluu = tangon.filter;
                michal = function(argFoo) {
                    michal = argFoo;
                    var _closure4_slot0 = michal;
                    zuuluu = _closure2_slot0;
                    michal = zuuluu.some;
                    entity = function(argFoo) {
                        entity = argFoo;
                        michal = entity.id;
                        entity = _closure4_slot0;
                        entity = entity.application;
                        entity = entity.id;
                        entity = michal === entity;
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
                    entity = !entity;
                    return entity;
                };
                entity = zuuluu.bind(tangon)(michal);
 41:
                return entity;
            }
        };
        michal = option.bind(tangon)(michal, zuuluu);
        var _closure2_slot4 = michal;
        option = tangon.useMemo;
        zuuluu = new Array(3);
        zuuluu[0] = golfie;
        zuuluu[1] = oscard;
        zuuluu[2] = michal;
        michal = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = _closure2_slot4;
                zuuluu = null;
                if(!(zuuluu != tangon)) { _fun00008_ip = 36; continue _fun00007 }
 15:
                oscard = _closure2_slot4;
                report = oscard.forEach;
                tangon = function(argFoo) {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        michal = argFoo;
                        tangon = _closure1_slot1;
                        zuuluu = _closure1_slot2;
                        entity = 5;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        report = tangon.bind(entity)(zuuluu);
                        tangon = report.extractTimestamp;
                        zuuluu = michal.id;
                        report = tangon.bind(report)(zuuluu);
                        golfie = _closure2_slot2;
                        oscard = golfie.getEntry;
                        tangon = michal.application;
                        tangon = tangon.id;
                        oscard = oscard.bind(golfie)(tangon);
                        tangon = null;
                        if(!(tangon == oscard)) { _fun00010_ip = 103; continue _fun00009 }
 78:
                        tangon = _closure2_slot2;
                        zuuluu = tangon.track;
                        michal = michal.application;
                        michal = michal.id;
                        michal = zuuluu.bind(tangon)(michal, report);
 103:
                        return entity;
                    }
                };
                tangon = report.bind(oscard)(tangon);
 36:
                report = _closure2_slot2;
                tangon = report.compute;
                tangon = tangon.bind(report)();
                tangon = _closure2_slot4;
                tangon = zuuluu == tangon;
                oscard = undefined;
                if(tangon) { _fun00008_ip = 84; continue _fun00007 }
 63:
                golfie = _closure2_slot4;
                report = golfie.map;
                tangon = function(argFoo) {
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 6;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.getApplicationCommandSection;
                    entity = argFoo;
                    michal = entity.application;
                    entity = true;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                oscard = report.bind(golfie)(tangon);
 84:
                if(!(zuuluu == oscard)) { _fun00008_ip = 92; continue _fun00007 }
 88:
                oscard = new Array(0);
 92:
                verify = _closure2_slot3;
                entity = new Array(0);
                offset = entity;
                option = 0;
                zuuluu = arraySpread(offset, verify, option);
                tangon = entity.push;
                zuuluu = new Array(0);
                offset = zuuluu;
                verify = oscard;
                report = arraySpread(offset, verify, option);
                offset = tangon;
                verify = zuuluu;
                option = entity;
                zuuluu = apply(offset, verify, option);
                zuuluu = entity.sort;
                michal = function(argFoo, argBar) {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        zuuluu = argFoo;
                        michal = argBar;
                        report = _closure2_slot2;
                        tangon = report.getScore;
                        entity = michal.id;
                        golfie = tangon.bind(report)(entity);
                        entity = null;
                        option = entity != golfie;
                        tangon = 0;
                        report = 0;
                        if(!option) { _fun00012_ip = 45; continue _fun00011 }
 42:
                        report = golfie;
 45:
                        option = _closure2_slot2;
                        golfie = option.getScore;
                        oscard = zuuluu.id;
                        oscard = golfie.bind(option)(oscard);
                        golfie = entity != oscard;
                        entity = 0;
                        if(!golfie) { _fun00012_ip = 77; continue _fun00011 }
 74:
                        entity = oscard;
 77:
                        entity = report - entity;
                        if(!(tangon === entity)) { _fun00012_ip = 106; continue _fun00011 }
 85:
                        tangon = zuuluu.name;
                        zuuluu = tangon.localeCompare;
                        michal = michal.name;
                        entity = zuuluu.bind(tangon)(michal);
 106:
                        return entity;
                    }
                };
                michal = zuuluu.bind(entity)(michal);
                return entity;
            }
        };
        option = option.bind(tangon)(michal, zuuluu);
        var _closure2_slot5 = option;
        zuuluu = tangon.useMemo;
        michal = new Array(4);
        michal[0] = option;
        michal[1] = golfie;
        michal[2] = oscard;
        michal[3] = report;
        entity = function() {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                tangon = _closure2_slot1;
                zuuluu = null;
                if(!(zuuluu != tangon)) { _fun00014_ip = 36; continue _fun00013 }
 15:
                oscard = _closure2_slot1;
                report = oscard.forEach;
                tangon = function(argFoo) {
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        tangon = argFoo;
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 5;
                        michal = michal[entity];
                        entity = undefined;
                        report = zuuluu.bind(entity)(michal);
                        zuuluu = report.extractTimestamp;
                        michal = tangon.id;
                        zuuluu = zuuluu.bind(report)(michal);
                        oscard = _closure3_slot1;
                        report = null;
                        report = report == oscard;
                        if(report) { _fun00016_ip = 68; continue _fun00015 }
 60:
                        oscard = _closure3_slot1;
                        report = zuuluu > oscard;
 68:
                        if(!report) { _fun00016_ip = 79; continue _fun00015 }
 71:
                        var _closure3_slot0 = tangon;
                        var _closure3_slot1 = zuuluu;
 79:
                        return entity;
                    }
                };
                tangon = report.bind(oscard)(tangon);
 36:
                oscard = _closure2_slot3;
                report = oscard.forEach;
                tangon = function(argFoo) {
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        tangon = argFoo;
                        entity = global;
                        report = entity.Math;
                        zuuluu = report.max;
                        oscard = _closure2_slot2;
                        michal = oscard.getEntry;
                        entity = tangon.id;
                        michal = michal.bind(oscard)(entity);
                        oscard = null;
                        golfie = oscard == michal;
                        entity = undefined;
                        option = undefined;
                        if(golfie) { _fun00018_ip = 58; continue _fun00017 }
 52:
                        option = michal.recentUses;
 58:
                        if(!(oscard == option)) { _fun00018_ip = 66; continue _fun00017 }
 62:
                        option = new Array(0);
 66:
                        michal = new Array(0);
                        verify = 0;
                        yankee = michal;
                        offset = option;
                        golfie = arraySpread(yankee, offset, verify);
                        yankee = zuuluu;
                        offset = michal;
                        verify = report;
                        zuuluu = apply(yankee, offset, verify);
                        report = _closure3_slot1;
                        report = oscard == report;
                        if(report) { _fun00018_ip = 117; continue _fun00017 }
 109:
                        oscard = _closure3_slot1;
                        report = zuuluu > oscard;
 117:
                        if(!report) { _fun00018_ip = 128; continue _fun00017 }
 120:
                        _closure3_slot0 = tangon;
                        _closure3_slot1 = zuuluu;
 128:
                        return entity;
                    }
                };
                tangon = report.bind(oscard)(tangon);
                report = _closure3_slot0;
                oscard = zuuluu == report;
                tangon = undefined;
                if(oscard) { _fun00014_ip = 89; continue _fun00013 }
 70:
                report = report.application;
                oscard = zuuluu == report;
                tangon = undefined;
                if(oscard) { _fun00014_ip = 89; continue _fun00013 }
 84:
                tangon = report.id;
 89:
                report = zuuluu != tangon;
                zuuluu = '';
                if(!report) { _fun00014_ip = 103; continue _fun00013 }
 100:
                zuuluu = tangon;
 103:
                var _closure3_slot2 = zuuluu;
                report = _closure2_slot5;
                zuuluu = report.filter;
                entity = function(argFoo) {
                    entity = argFoo;
                    michal = entity.id;
                    entity = _closure3_slot2;
                    entity = michal === entity;
                    return entity;
                };
                verify = zuuluu.bind(report)(entity);
                entity = new Array(0);
                option = 0;
                offset = entity;
                option = arraySpread(offset, verify, option);
                tangon = report.filter;
                michal = function(argFoo) {
                    entity = argFoo;
                    michal = entity.id;
                    entity = _closure3_slot2;
                    entity = michal !== entity;
                    return entity;
                };
                verify = tangon.bind(report)(michal);
                offset = entity;
                michal = arraySpread(offset, verify, option);
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useSortApplicationsViaFrecency'] = michal;
    return entity;
})();