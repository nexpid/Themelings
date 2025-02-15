// app/modules/guild_products/GuildProductsExperimentUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
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
    tango = tango.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot2 = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_products/GuildProductsExperimentUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar) { // Original name: useGuildEligibleForGuildProducts
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 1;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            zulu = entity.GuildProductsExperiment;
            mike = zulu.useExperiment;
            entity = {};
            oscar = null;
            if(!(oscar == tango)) { _fun00002_ip = 52; continue _fun00001 }
 48:
            tango = _closure1_slot2;
 52:
            entity['guildId'] = tango;
            tango = argBar;
            entity['location'] = tango;
            entity = mike.bind(zulu)(entity);
            entity = entity.enabled;
            return entity;
        }
    };
    zulu['useGuildEligibleForGuildProducts'] = tango;
    mike = function(argFoo, argBar) { // Original name: isGuildEligibleForGuildProducts
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tango = argFoo;
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 1;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            zulu = entity.GuildProductsExperiment;
            mike = zulu.getCurrentConfig;
            entity = {};
            oscar = null;
            if(!(oscar == tango)) { _fun00004_ip = 52; continue _fun00003 }
 48:
            tango = _closure1_slot2;
 52:
            entity['guildId'] = tango;
            tango = argBar;
            entity['location'] = tango;
            entity = mike.bind(zulu)(entity);
            entity = entity.enabled;
            return entity;
        }
    };
    zulu['isGuildEligibleForGuildProducts'] = mike;
    return entity;
})();