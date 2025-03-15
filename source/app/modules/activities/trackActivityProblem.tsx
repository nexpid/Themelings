// app/modules/activities/trackActivityProblem.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
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
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot2 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/trackActivityProblem.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: trackActivityProblem
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            yankee = entity.problem;
            backup = entity.channel;
            golfie = entity.embeddedActivityLocation;
            option = entity.feedback;
            romeon = entity.activityApplication;
            oscard = entity.analyticsData;
            offset = entity.location;
            verify = entity.rating;
            entity = undefined;
            if(!(verify === entity)) { _fun00002_ip = 57; continue _fun00001 }
 55:
            verify = null;
 57:
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 1;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.track;
            michal = _closure1_slot2;
            zuuluu = michal.ACTIVITY_REPORT_PROBLEM;
            michal = {};
            michal['reason'] = yankee;
            yankee = null;
            kiloes = yankee == backup;
            foxtra = undefined;
            if(kiloes) { _fun00002_ip = 123; continue _fun00001 }
 113:
            kiloes = backup.getGuildId;
            foxtra = kiloes.bind(backup)();
 123:
            michal['guild_id'] = foxtra;
            kiloes = yankee == backup;
            foxtra = undefined;
            if(kiloes) { _fun00002_ip = 141; continue _fun00001 }
 136:
            foxtra = backup.id;
 141:
            michal['channel_id'] = foxtra;
            backup = yankee == romeon;
            foxtra = undefined;
            if(backup) { _fun00002_ip = 159; continue _fun00001 }
 154:
            foxtra = romeon.id;
 159:
            michal['application_id'] = foxtra;
            foxtra = yankee == romeon;
            yankee = undefined;
            if(foxtra) { _fun00002_ip = 178; continue _fun00001 }
 173:
            yankee = romeon.name;
 178:
            michal['application_name'] = yankee;
            michal['location'] = offset;
            michal['rating'] = verify;
            michal['feedback'] = option;
            golfie = golfie.kind;
            michal['embedded_activity_location_kind'] = golfie;
            output = michal;
            sizing = oscard;
            oscard = copyDataProperties(output, sizing);
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();