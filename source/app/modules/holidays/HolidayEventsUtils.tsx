// app/modules/holidays/HolidayEventsUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    zuuluu = argFre;
    tangon = argPlu;
    michal = argBaz;
    var _closure1_slot0 = michal;
    var _closure1_slot1 = tangon;
    oscard = function() { // Original name: isEligible
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = _closure1_slot4;
            tangon = undefined;
            entity = entity.bind(tangon)();
            if(!entity) { _fun00002_ip = 79; continue _fun00001 }
 16:
            zuuluu = _closure1_slot0;
            report = _closure1_slot1;
            michal = 0;
            michal = report[michal];
            michal = zuuluu.bind(tangon)(michal);
            report = michal.experiment;
            tangon = report.getCurrentConfig;
            zuuluu = {};
            michal = 'holiday_events_is_eligible';
            zuuluu['location'] = michal;
            michal = {};
            oscard = false;
            michal['autoTrackExposure'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            entity = michal.enabled;
 79:
            return entity;
        }
    };
    var _closure1_slot2 = oscard;
    report = function() { // Original name: useIsEligible
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 0;
            michal = zuuluu[michal];
            zuuluu = undefined;
            michal = tangon.bind(zuuluu)(michal);
            oscard = michal.experiment;
            report = oscard.useExperiment;
            tangon = {};
            michal = 'holiday_events_use_eligible';
            tangon['location'] = michal;
            michal = {};
            golfie = false;
            michal['autoTrackExposure'] = golfie;
            michal = report.bind(oscard)(tangon, michal);
            michal = michal.enabled;
            entity = _closure1_slot4;
            entity = entity.bind(zuuluu)();
            if(!entity) { _fun00004_ip = 82; continue _fun00003 }
 79:
            entity = michal;
 82:
            return entity;
        }
    };
    var _closure1_slot3 = report;
    michal = function() { // Original name: isHolidayHappening
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = global;
            michal = entity.Date;
            entity = michal.now;
            zuuluu = entity.bind(michal)();
            tangon = _closure1_slot0;
            entity = _closure1_slot1;
            oscard = 0;
            entity = entity[oscard];
            report = undefined;
            entity = tangon.bind(report)(entity);
            entity = entity.startTimeMs;
            entity = zuuluu >= entity;
            if(!entity) { _fun00006_ip = 81; continue _fun00005 }
 54:
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[oscard];
            michal = tangon.bind(report)(michal);
            michal = michal.endTimeMs;
            entity = zuuluu <= michal;
 81:
            return entity;
        }
    };
    var _closure1_slot4 = michal;
    michal = global;
    verify = michal.Object;
    option = verify.defineProperty;
    golfie = {};
    michal = true;
    golfie['value'] = michal;
    michal = '__esModule';
    michal = option.bind(verify)(zuuluu, michal, golfie);
    michal = {};
    golfie = function(argFoo) { // Original name: subscribe
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 0;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        tangon = entity.experiment;
        zuuluu = tangon.subscribe;
        michal = {};
        entity = 'holiday_events_subscribe';
        michal['location'] = entity;
        entity = argFoo;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    michal['subscribe'] = golfie;
    michal['isEligible'] = oscard;
    oscard = function() { // Original name: useHolidaySoundpack
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = _closure1_slot3;
            report = undefined;
            michal = entity.bind(report)();
            tangon = null;
            entity = null;
            if(!michal) { _fun00008_ip = 135; continue _fun00007 }
 20:
            golfie = _closure1_slot0;
            michal = _closure1_slot1;
            oscard = 0;
            michal = michal[oscard];
            michal = golfie.bind(report)(michal);
            michal = michal.soundpack;
            entity = null;
            if(!michal) { _fun00008_ip = 135; continue _fun00007 }
 50:
            golfie = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[oscard];
            michal = golfie.bind(report)(michal);
            michal = michal.soundpackLabel;
            michal = tangon != michal;
            entity = null;
            if(!michal) { _fun00008_ip = 135; continue _fun00007 }
 82:
            michal = {};
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            golfie = zuuluu[oscard];
            golfie = tangon.bind(report)(golfie);
            golfie = golfie.soundpack;
            michal['soundpack'] = golfie;
            zuuluu = zuuluu[oscard];
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = zuuluu.soundpackLabel;
            michal['soundpackLabel'] = zuuluu;
            entity = michal;
 135:
            return entity;
        }
    };
    michal['useHolidaySoundpack'] = oscard;
    michal['useIsEligible'] = report;
    report = function() { // Original name: getAppSpinnerSources
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = _closure1_slot4;
            tangon = undefined;
            zuuluu = entity.bind(tangon)();
            entity = null;
            if(!zuuluu) { _fun00010_ip = 43; continue _fun00009 }
 18:
            zuuluu = _closure1_slot0;
            report = _closure1_slot1;
            michal = 0;
            michal = report[michal];
            michal = zuuluu.bind(tangon)(michal);
            entity = michal.appSpinnerSources;
 43:
            return entity;
        }
    };
    michal['getAppSpinnerSources'] = report;
    report = function() { // Original name: getLoadingTips
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = _closure1_slot4;
            report = undefined;
            michal = entity.bind(report)();
            tangon = null;
            entity = null;
            if(!michal) { _fun00012_ip = 84; continue _fun00011 }
 20:
            golfie = _closure1_slot0;
            michal = _closure1_slot1;
            oscard = 0;
            michal = michal[oscard];
            michal = golfie.bind(report)(michal);
            michal = michal.getLoadingTips;
            tangon = tangon == michal;
            michal = undefined;
            if(tangon) { _fun00012_ip = 81; continue _fun00011 }
 54:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[oscard];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.getLoadingTips;
            michal = zuuluu.bind(tangon)();
 81:
            entity = michal;
 84:
            return entity;
        }
    };
    michal['getLoadingTips'] = report;
    entity = function() { // Original name: getHolidaySoundpack
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = _closure1_slot2;
            tangon = undefined;
            zuuluu = entity.bind(tangon)();
            entity = null;
            if(!zuuluu) { _fun00014_ip = 71; continue _fun00013 }
 18:
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot1;
            report = 0;
            zuuluu = zuuluu[report];
            zuuluu = golfie.bind(tangon)(zuuluu);
            zuuluu = zuuluu.soundpack;
            entity = null;
            if(!zuuluu) { _fun00014_ip = 71; continue _fun00013 }
 48:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[report];
            michal = zuuluu.bind(tangon)(michal);
            entity = michal.soundpack;
 71:
            return entity;
        }
    };
    michal['getHolidaySoundpack'] = entity;
    entity = 1;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/holidays/HolidayEventsUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();