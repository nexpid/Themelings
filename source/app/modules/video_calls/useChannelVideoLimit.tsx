// app/modules/video_calls/useChannelVideoLimit.tsx
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
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ChannelTypes;
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/video_calls/useChannelVideoLimit.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: useChannelVideoLimit
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 3;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStoresObject;
        golfie = _closure1_slot3;
        zuuluu = new Array(2);
        zuuluu[0] = golfie;
        michal = _closure1_slot2;
        zuuluu[1] = michal;
        michal = new Array(1);
        michal[0] = oscard;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                report = _closure1_slot3;
                tangon = report.countVoiceStatesForChannel;
                golfie = _closure2_slot0;
                zuuluu = golfie.id;
                report = tangon.bind(report)(zuuluu);
                oscard = _closure1_slot2;
                tangon = oscard.getGuild;
                zuuluu = golfie.getGuildId;
                zuuluu = zuuluu.bind(golfie)();
                zuuluu = tangon.bind(oscard)(zuuluu);
                tangon = null;
                if(!(tangon != zuuluu)) { _fun00002_ip = 161; continue _fun00001 }
 60:
                michal = _closure2_slot0;
                michal = michal.type;
                entity = _closure1_slot4;
                entity = entity.GUILD_STAGE_VOICE;
                if(!(michal !== entity)) { _fun00002_ip = 128; continue _fun00001 }
 83:
                entity = {};
                tangon = zuuluu.maxVideoChannelUsers;
                michal = 0;
                michal = tangon > michal;
                if(!michal) { _fun00002_ip = 110; continue _fun00001 }
 100:
                tangon = zuuluu.maxVideoChannelUsers;
                michal = report > tangon;
 110:
                entity['reachedLimit'] = michal;
                michal = zuuluu.maxVideoChannelUsers;
                entity['limit'] = michal;
                _fun00002_ip = 159; continue _fun00001;
 128:
                michal = {};
                tangon = zuuluu.maxStageVideoChannelUsers;
                tangon = report > tangon;
                michal['reachedLimit'] = tangon;
                zuuluu = zuuluu.maxStageVideoChannelUsers;
                michal['limit'] = zuuluu;
                entity = michal;
 159:
                _fun00002_ip = 171; continue _fun00001;
 161:
                entity = {'reachedLimit': false, 'limit': 4294967295};
 171:
                return entity;
            }
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: getChannelVideoLimit
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            report = _closure1_slot3;
            tangon = report.countVoiceStatesForChannel;
            zuuluu = michal.id;
            report = tangon.bind(report)(zuuluu);
            oscard = _closure1_slot2;
            tangon = oscard.getGuild;
            zuuluu = michal.getGuildId;
            zuuluu = zuuluu.bind(michal)();
            zuuluu = tangon.bind(oscard)(zuuluu);
            tangon = null;
            if(!(tangon != zuuluu)) { _fun00004_ip = 153; continue _fun00003 }
 56:
            michal = michal.type;
            entity = _closure1_slot4;
            entity = entity.GUILD_STAGE_VOICE;
            if(!(michal !== entity)) { _fun00004_ip = 120; continue _fun00003 }
 75:
            entity = {};
            tangon = zuuluu.maxVideoChannelUsers;
            michal = 0;
            michal = tangon > michal;
            if(!michal) { _fun00004_ip = 102; continue _fun00003 }
 92:
            tangon = zuuluu.maxVideoChannelUsers;
            michal = report > tangon;
 102:
            entity['reachedLimit'] = michal;
            michal = zuuluu.maxVideoChannelUsers;
            entity['limit'] = michal;
            _fun00004_ip = 151; continue _fun00003;
 120:
            michal = {};
            tangon = zuuluu.maxStageVideoChannelUsers;
            tangon = report > tangon;
            michal['reachedLimit'] = tangon;
            zuuluu = zuuluu.maxStageVideoChannelUsers;
            michal['limit'] = zuuluu;
            entity = michal;
 151:
            _fun00004_ip = 163; continue _fun00003;
 153:
            entity = {'reachedLimit': false, 'limit': 4294967295};
 163:
            return entity;
        }
    };
    zuuluu['getChannelVideoLimit'] = michal;
    return entity;
})();