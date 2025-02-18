// app/modules/go_live/utils/trackStreamProblem.tsx
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
    tangon = 'modules/go_live/utils/trackStreamProblem.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: trackStreamProblem
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            romeon = entity.problem;
            offset = entity.stream;
            golfie = entity.feedback;
            yankee = entity.streamApplication;
            oscard = entity.analyticsData;
            verify = entity.location;
            option = entity.rating;
            entity = undefined;
            if(!(option === entity)) { _fun00002_ip = 52; continue _fun00001 }
 50:
            option = null;
 52:
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 1;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.track;
            michal = _closure1_slot2;
            zuuluu = michal.STREAM_REPORT_PROBLEM;
            michal = {};
            michal['reason'] = romeon;
            romeon = offset.ownerId;
            michal['streamer_user_id'] = romeon;
            romeon = offset.channelId;
            michal['stream_channel_id'] = romeon;
            offset = offset.guildId;
            michal['guild_id'] = offset;
            offset = null;
            foxtra = offset != yankee;
            romeon = null;
            if(!foxtra) { _fun00002_ip = 147; continue _fun00001 }
 142:
            romeon = yankee.id;
 147:
            michal['application_id'] = romeon;
            romeon = offset != yankee;
            offset = null;
            if(!romeon) { _fun00002_ip = 166; continue _fun00001 }
 161:
            offset = yankee.name;
 166:
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