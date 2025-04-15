// app/modules/errors/av_errors/AVErrorUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.Millis;
    golfie = tangon.SECOND;
    tangon = 10;
    tangon = tangon * golfie;
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/errors/av_errors/AVErrorUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: getReportInboundErrors
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot1;
            golfie = 2;
            entity = entity[golfie];
            oscard = undefined;
            entity = zuuluu.bind(oscard)(entity);
            zuuluu = entity.WindowVisibilityVideoManager;
            entity = zuuluu.isIncomingVideoEnabled;
            entity = entity.bind(zuuluu)();
            if(!entity) { _fun00002_ip = 108; continue _fun00001 }
 44:
            zuuluu = global;
            tangon = zuuluu.Date;
            zuuluu = tangon.now;
            tangon = zuuluu.bind(tangon)();
            report = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[golfie];
            zuuluu = report.bind(oscard)(zuuluu);
            report = zuuluu.WindowVisibilityVideoManager;
            zuuluu = report.lastIncomingVideoEnabledChangeTime;
            zuuluu = zuuluu.bind(report)();
            zuuluu = tangon - zuuluu;
            michal = _closure1_slot3;
            entity = zuuluu > michal;
 108:
            return entity;
        }
    };
    zuuluu['getReportInboundErrors'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: getAccumulatedStatsWithMinDatapoints
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            golfie = argFoo;
            report = argBar;
            oscard = arguments[2];
            entity = undefined;
            if(!(oscard === entity)) { _fun00004_ip = 18; continue _fun00003 }
 15:
            oscard = 15;
 18:
            zuuluu = _closure1_slot2;
            michal = zuuluu.getAccumulatedPerformanceStats;
            entity = 'short';
            tangon = michal.bind(zuuluu)(golfie, report, entity);
            michal = zuuluu.getAccumulatedPerformanceStats;
            entity = 'long';
            zuuluu = michal.bind(zuuluu)(golfie, report, entity);
            report = null;
            michal = report == tangon;
            entity = null;
            if(michal) { _fun00004_ip = 124; continue _fun00003 }
 70:
            michal = report == zuuluu;
            entity = null;
            if(michal) { _fun00004_ip = 124; continue _fun00003 }
 79:
            michal = tangon.numDatapoints;
            michal = michal < oscard;
            entity = null;
            if(michal) { _fun00004_ip = 124; continue _fun00003 }
 94:
            michal = zuuluu.numDatapoints;
            michal = michal < oscard;
            entity = null;
            if(michal) { _fun00004_ip = 124; continue _fun00003 }
 109:
            michal = {};
            michal['short'] = tangon;
            michal['long'] = zuuluu;
            entity = michal;
 124:
            return entity;
        }
    };
    zuuluu['getAccumulatedStatsWithMinDatapoints'] = tangon;
    michal = function() { // Original name: getWarningFrameRate
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = arguments[0];
            entity = undefined;
            if(!(report === entity)) { _fun00006_ip = 12; continue _fun00005 }
 9:
            report = 30;
 12:
            entity = 5;
            michal = report <= entity;
            entity = 3;
            if(michal) { _fun00006_ip = 57; continue _fun00005 }
 25:
            tangon = 15;
            zuuluu = report <= tangon;
            michal = 8;
            if(zuuluu) { _fun00006_ip = 54; continue _fun00005 }
 38:
            zuuluu = 30;
            report = report <= zuuluu;
            if(!report) { _fun00006_ip = 51; continue _fun00005 }
 48:
            zuuluu = tangon;
 51:
            michal = zuuluu;
 54:
            entity = michal;
 57:
            return entity;
        }
    };
    zuuluu['getWarningFrameRate'] = michal;
    return entity;
})();