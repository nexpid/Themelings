// app/modules/channel_list_v2/native/ChannelListUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/channel_list_v2/native/ChannelListUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar) { // Original name: isFavoritesSection
        entity = argBar;
        mike = entity.favoritesSectionNumber;
        entity = argFoo;
        entity = entity === mike;
        return entity;
    };
    zulu['isFavoritesSection'] = tango;
    tango = function(argFoo, argBar) { // Original name: isRecentsSection
        entity = argBar;
        mike = entity.recentsSectionNumber;
        entity = argFoo;
        entity = entity === mike;
        return entity;
    };
    zulu['isRecentsSection'] = tango;
    tango = function(argFoo, argBar) { // Original name: isVoiceChannelsSection
        entity = argBar;
        mike = entity.voiceChannelsSectionNumber;
        entity = argFoo;
        entity = entity === mike;
        return entity;
    };
    zulu['isVoiceChannelsSection'] = tango;
    tango = function(argFoo) { // Original name: isNamedCategorySection
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 1;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        mike = entity.SECTION_INDEX_FIRST_NAMED_CATEGORY;
        entity = argFoo;
        entity = entity >= mike;
        return entity;
    };
    zulu['isNamedCategorySection'] = tango;
    tango = function(argFoo) { // Original name: isReadableItem
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            zulu = mike.kind;
            entity = 'channel';
            entity = entity === zulu;
            if(entity) { _fun00002_ip = 32; continue _fun00001 }
 19:
            zulu = mike.kind;
            mike = 'thread';
            entity = mike === zulu;
 32:
            return entity;
        }
    };
    zulu['isReadableItem'] = tango;
    mike = function() { // Original name: logChannelListEndReached
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 2;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.trackWithMetadata;
        mike = _closure1_slot3;
        mike = mike.CHANNEL_LIST_END_REACHED;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['logChannelListEndReached'] = mike;
    return entity;
})();