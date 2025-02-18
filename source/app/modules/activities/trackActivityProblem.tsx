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
            romeon = entity.problem;
            offset = entity.channel;
            golfie = entity.feedback;
            yankee = entity.activityApplication;
            oscard = entity.analyticsData;
            verify = entity.location;
            option = entity.rating;
            entity = undefined;
            if(!(option === entity)) { _fun00002_ip = 51; continue _fun00001 }
 49:
            option = null;
 51:
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 1;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.track;
            michal = _closure1_slot2;
            zuuluu = michal.ACTIVITY_REPORT_PROBLEM;
            michal = {};
            michal['reason'] = romeon;
            romeon = offset.getGuildId;
            romeon = romeon.bind(offset)();
            michal['guild_id'] = romeon;
            offset = offset.id;
            michal['channel_id'] = offset;
            offset = null;
            foxtra = offset == yankee;
            romeon = undefined;
            if(foxtra) { _fun00002_ip = 135; continue _fun00001 }
 130:
            romeon = yankee.id;
 135:
            michal['application_id'] = romeon;
            romeon = offset == yankee;
            offset = undefined;
            if(romeon) { _fun00002_ip = 154; continue _fun00001 }
 149:
            offset = yankee.name;
 154:
            michal['application_name'] = offset;
            michal['location'] = verify;
            michal['rating'] = option;
            michal['feedback'] = golfie;
            kiloes = michal;
            backup = oscard;
            oscard = copyDataProperties(kiloes, backup);
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();