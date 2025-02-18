// app/modules/activities/utils/trackApplicationOpen.tsx
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
    tangon = 'modules/activities/utils/trackApplicationOpen.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: trackApplicationOpen
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            result = entity.type;
            output = entity.source;
            yankee = entity.userId;
            sizing = entity.guildId;
            kiloes = entity.channelId;
            backup = entity.channelType;
            romeon = entity.applicationId;
            foxtra = entity.partyId;
            offset = entity.messageId;
            verify = entity.locationObject;
            option = entity.analyticsLocations;
            golfie = entity.referrerId;
            oscard = entity.inviterUserId;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 1;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.track;
            michal = _closure1_slot2;
            zuuluu = michal.APPLICATION_OPENED;
            michal = {};
            michal['type'] = result;
            michal['source'] = output;
            michal['guild_id'] = sizing;
            michal['channel_id'] = kiloes;
            michal['channel_type'] = backup;
            michal['application_id'] = romeon;
            romeon = null;
            backup = romeon != foxtra;
            romeon = undefined;
            if(!backup) { _fun00002_ip = 156; continue _fun00001 }
 153:
            romeon = foxtra;
 156:
            michal['party_id'] = romeon;
            michal['other_user_id'] = yankee;
            michal['message_id'] = offset;
            michal['location'] = verify;
            michal['location_stack'] = option;
            michal['referrer_id'] = golfie;
            michal['invite_inviter_id'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();