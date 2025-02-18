// app/modules/public_guilds/PublicGuildsUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
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
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    golfie = tangon.PUBLIC_GUILD_ANNOUNCEMENTS_GUILD_ID;
    var _closure1_slot3 = golfie;
    golfie = tangon.PUBLIC_GUILD_UPDATES_WEBHOOK_USER_ID;
    var _closure1_slot4 = golfie;
    tangon = tangon.ENABLE_COMMUNITY_FLOW_MODAL_KEY;
    var _closure1_slot5 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot6 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/public_guilds/PublicGuildsUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: isPublicSystemMessage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            report = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 2;
            entity = michal[entity];
            michal = undefined;
            entity = report.bind(michal)(entity);
            entity = entity.bind(michal)(tangon);
            if(!entity) { _fun00002_ip = 55; continue _fun00001 }
 36:
            michal = tangon.messageReference;
            report = michal.guild_id;
            michal = _closure1_slot3;
            entity = report === michal;
 55:
            if(entity) { _fun00002_ip = 95; continue _fun00001 }
 58:
            report = tangon.author;
            michal = null;
            michal = michal != report;
            if(!michal) { _fun00002_ip = 92; continue _fun00001 }
 73:
            tangon = tangon.author;
            tangon = tangon.id;
            zuuluu = _closure1_slot4;
            michal = tangon === zuuluu;
 92:
            entity = michal;
 95:
            return entity;
        }
    };
    zuuluu['isPublicSystemMessage'] = tangon;
    tangon = function() { // Original name: getPublicSystemMessageAvatar
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        return entity;
    };
    zuuluu['getPublicSystemMessageAvatar'] = tangon;
    michal = function(argFoo) {
        oscard = argFoo;
        zuuluu = _closure1_slot1;
        verify = _closure1_slot2;
        entity = 4;
        michal = verify[entity];
        entity = undefined;
        report = zuuluu.bind(entity)(michal);
        tangon = report.track;
        michal = _closure1_slot6;
        zuuluu = michal.USER_FLOW_TRANSITION;
        michal = {};
        option = _closure1_slot5;
        michal['flow_type'] = option;
        option = oscard.fromStep;
        michal['from_step'] = option;
        option = oscard.toStep;
        michal['to_step'] = option;
        option = _closure1_slot0;
        golfie = 5;
        golfie = verify[golfie];
        option = option.bind(entity)(golfie);
        golfie = option.collectGuildAnalyticsMetadata;
        oscard = oscard.guildId;
        offset = golfie.bind(option)(oscard);
        yankee = michal;
        oscard = copyDataProperties(yankee, offset);
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackEnableCommunityFlow'] = michal;
    return entity;
})();