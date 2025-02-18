// app/modules/channel_list_v2/native/ChannelListUtils.tsx
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
    tangon = tangon.AnalyticEvents;
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/channel_list_v2/native/ChannelListUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) { // Original name: isFavoritesSection
        entity = argBar;
        michal = entity.favoritesSectionNumber;
        entity = argFoo;
        entity = entity === michal;
        return entity;
    };
    zuuluu['isFavoritesSection'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: isRecentsSection
        entity = argBar;
        michal = entity.recentsSectionNumber;
        entity = argFoo;
        entity = entity === michal;
        return entity;
    };
    zuuluu['isRecentsSection'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: isVoiceChannelsSection
        entity = argBar;
        michal = entity.voiceChannelsSectionNumber;
        entity = argFoo;
        entity = entity === michal;
        return entity;
    };
    zuuluu['isVoiceChannelsSection'] = tangon;
    tangon = function(argFoo) { // Original name: isNamedCategorySection
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 1;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        michal = entity.SECTION_INDEX_FIRST_NAMED_CATEGORY;
        entity = argFoo;
        entity = entity >= michal;
        return entity;
    };
    zuuluu['isNamedCategorySection'] = tangon;
    tangon = function(argFoo) { // Original name: isReadableItem
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.kind;
            entity = 'channel';
            entity = entity === zuuluu;
            if(entity) { _fun00002_ip = 32; continue _fun00001 }
 19:
            zuuluu = michal.kind;
            michal = 'thread';
            entity = michal === zuuluu;
 32:
            return entity;
        }
    };
    zuuluu['isReadableItem'] = tangon;
    michal = function() { // Original name: logChannelListEndReached
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 2;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.trackWithMetadata;
        michal = _closure1_slot3;
        michal = michal.CHANNEL_LIST_END_REACHED;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['logChannelListEndReached'] = michal;
    return entity;
})();