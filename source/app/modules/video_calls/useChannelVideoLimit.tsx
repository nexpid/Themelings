// app/modules/video_calls/useChannelVideoLimit.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ChannelTypes;
    var _closure1_slot4 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/video_calls/useChannelVideoLimit.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: useChannelVideoLimit
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 3;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStoresObject;
        golf = _closure1_slot3;
        zulu = new Array(2);
        zulu[0] = golf;
        mike = _closure1_slot2;
        zulu[1] = mike;
        mike = new Array(1);
        mike[0] = oscar;
        entity = function() {
            _fun73127: for(var _fun73127_ip = 0; ; ) switch(_fun73127_ip) {
 0:
                report = _closure1_slot3;
                tango = report.countVoiceStatesForChannel;
                golf = _closure2_slot0;
                zulu = golf.id;
                report = tango.bind(report)(zulu);
                oscar = _closure1_slot2;
                tango = oscar.getGuild;
                zulu = golf.getGuildId;
                zulu = zulu.bind(golf)();
                zulu = tango.bind(oscar)(zulu);
                tango = null;
                if(!(tango != zulu)) { _fun73127_ip = 161; continue _fun73127 }
 60:
                mike = _closure2_slot0;
                mike = mike.type;
                entity = _closure1_slot4;
                entity = entity.GUILD_STAGE_VOICE;
                if(!(mike !== entity)) { _fun73127_ip = 128; continue _fun73127 }
 83:
                entity = {};
                tango = zulu.maxVideoChannelUsers;
                mike = 0;
                mike = tango > mike;
                if(!mike) { _fun73127_ip = 110; continue _fun73127 }
 100:
                tango = zulu.maxVideoChannelUsers;
                mike = report > tango;
 110:
                entity['reachedLimit'] = mike;
                mike = zulu.maxVideoChannelUsers;
                entity['limit'] = mike;
                _fun73127_ip = 159; continue _fun73127;
 128:
                mike = {};
                tango = zulu.maxStageVideoChannelUsers;
                tango = report > tango;
                mike['reachedLimit'] = tango;
                zulu = zulu.maxStageVideoChannelUsers;
                mike['limit'] = zulu;
                entity = mike;
 159:
                _fun73127_ip = 171; continue _fun73127;
 161:
                entity = {'reachedLimit': false, 'limit': 4294967295};
 171:
                return entity;
            }
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['default'] = tango;
    mike = function(argFoo) { // Original name: getChannelVideoLimit
        _fun73128: for(var _fun73128_ip = 0; ; ) switch(_fun73128_ip) {
 0:
            mike = argFoo;
            report = _closure1_slot3;
            tango = report.countVoiceStatesForChannel;
            zulu = mike.id;
            report = tango.bind(report)(zulu);
            oscar = _closure1_slot2;
            tango = oscar.getGuild;
            zulu = mike.getGuildId;
            zulu = zulu.bind(mike)();
            zulu = tango.bind(oscar)(zulu);
            tango = null;
            if(!(tango != zulu)) { _fun73128_ip = 153; continue _fun73128 }
 56:
            mike = mike.type;
            entity = _closure1_slot4;
            entity = entity.GUILD_STAGE_VOICE;
            if(!(mike !== entity)) { _fun73128_ip = 120; continue _fun73128 }
 75:
            entity = {};
            tango = zulu.maxVideoChannelUsers;
            mike = 0;
            mike = tango > mike;
            if(!mike) { _fun73128_ip = 102; continue _fun73128 }
 92:
            tango = zulu.maxVideoChannelUsers;
            mike = report > tango;
 102:
            entity['reachedLimit'] = mike;
            mike = zulu.maxVideoChannelUsers;
            entity['limit'] = mike;
            _fun73128_ip = 151; continue _fun73128;
 120:
            mike = {};
            tango = zulu.maxStageVideoChannelUsers;
            tango = report > tango;
            mike['reachedLimit'] = tango;
            zulu = zulu.maxStageVideoChannelUsers;
            mike['limit'] = zulu;
            entity = mike;
 151:
            _fun73128_ip = 163; continue _fun73128;
 153:
            entity = {'reachedLimit': false, 'limit': 4294967295};
 163:
            return entity;
        }
    };
    zulu['getChannelVideoLimit'] = mike;
    return entity;
})();