// app/modules/guild_onboarding/useGuildOnboardingAvailable.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
    golf = oscar[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildFeatures;
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_onboarding/useGuildOnboardingAvailable.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: useGuildOnboardingAvailable
        _fun65440: for(var _fun65440_ip = 0; ; ) switch(_fun65440_ip) {
 0:
            report = argFoo;
            var _closure2_slot0 = report;
            oscar = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 2;
            tango = tango[mike];
            mike = undefined;
            golf = oscar.bind(mike)(tango);
            oscar = golf.useStateFromStores;
            options = _closure1_slot2;
            tango = new Array(1);
            tango[0] = options;
            entity = function() {
                _fun65441: for(var _fun65441_ip = 0; ; ) switch(_fun65441_ip) {
 0:
                    mike = _closure2_slot0;
                    zulu = null;
                    tango = zulu == mike;
                    mike = undefined;
                    if(tango) { _fun65441_ip = 27; continue _fun65441 }
 18:
                    tango = _closure2_slot0;
                    mike = tango.id;
 27:
                    if(!(zulu != mike)) { _fun65441_ip = 82; continue _fun65441 }
 31:
                    tango = _closure1_slot2;
                    zulu = tango.isFullServerPreview;
                    mike = _closure2_slot0;
                    entity = mike.id;
                    entity = zulu.bind(tango)(entity);
                    zulu = tango.isOnboardingEnabled;
                    mike = mike.id;
                    mike = zulu.bind(tango)(mike);
                    if(!entity) { _fun65441_ip = 80; continue _fun65441 }
 77:
                    entity = mike;
 80:
                    return entity;
 82:
                    entity = false;
                    return entity;
                }
            };
            entity = oscar.bind(golf)(tango, entity);
            if(entity) { _fun65440_ip = 100; continue _fun65440 }
 65:
            tango = null;
            tango = tango == report;
            mike = undefined;
            if(tango) { _fun65440_ip = 97; continue _fun65440 }
 76:
            tango = report.hasFeature;
            zulu = _closure1_slot3;
            zulu = zulu.GUILD_ONBOARDING_HAS_PROMPTS;
            mike = tango.bind(report)(zulu);
 97:
            entity = mike;
 100:
            return entity;
        }
    };
    zulu['default'] = tango;
    mike = function(argFoo) { // Original name: isGuildOnboardingAvailable
        _fun65442: for(var _fun65442_ip = 0; ; ) switch(_fun65442_ip) {
 0:
            tango = argFoo;
            entity = null;
            if(!(entity != tango)) { _fun65442_ip = 80; continue _fun65442 }
 9:
            oscar = _closure1_slot2;
            zulu = oscar.isFullServerPreview;
            entity = tango.id;
            entity = zulu.bind(oscar)(entity);
            report = oscar.isOnboardingEnabled;
            zulu = tango.id;
            zulu = report.bind(oscar)(zulu);
            if(!entity) { _fun65442_ip = 54; continue _fun65442 }
 51:
            entity = zulu;
 54:
            if(entity) { _fun65442_ip = 78; continue _fun65442 }
 57:
            zulu = tango.hasFeature;
            mike = _closure1_slot3;
            mike = mike.GUILD_ONBOARDING_HAS_PROMPTS;
            entity = zulu.bind(tango)(mike);
 78:
            return entity;
 80:
            entity = false;
            return entity;
        }
    };
    zulu['isGuildOnboardingAvailable'] = mike;
    return entity;
})();