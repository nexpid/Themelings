// app/modules/guild_automod/ExperimentUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    tango = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tango;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, oscar);
    entity = 1;
    tango = tango[entity];
    entity = undefined;
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_automod/ExperimentUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: isInMentionRaidExperiment
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 0;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.AutomodMentionRaidLimit;
        mike = zulu.getCurrentConfig;
        entity = {};
        tango = argFoo;
        entity['guildId'] = tango;
        tango = '988d4e_3';
        entity['location'] = tango;
        entity = mike.bind(zulu)(entity);
        entity = entity.enabled;
        return entity;
    };
    zulu['isInMentionRaidExperiment'] = tango;
    mike = function(argFoo) { // Original name: useIsMentionRaidExperimentEnabled
        _fun114247: for(var _fun114247_ip = 0; ; ) switch(_fun114247_ip) {
 0:
            report = arguments[1];
            zulu = undefined;
            if(!(report === zulu)) { _fun114247_ip = 11; continue _fun114247 }
 9:
            report = true;
 11:
            mike = _closure1_slot0;
            tango = _closure1_slot1;
            entity = 0;
            entity = tango[entity];
            entity = mike.bind(zulu)(entity);
            tango = entity.AutomodMentionRaidLimit;
            zulu = tango.useExperiment;
            mike = {};
            entity = argFoo;
            mike['guildId'] = entity;
            entity = '988d4e_4';
            mike['location'] = entity;
            entity = {};
            entity['autoTrackExposure'] = report;
            entity = zulu.bind(tango)(mike, entity);
            entity = entity.enabled;
            return entity;
        }
    };
    zulu['useIsMentionRaidExperimentEnabled'] = mike;
    return entity;
})();