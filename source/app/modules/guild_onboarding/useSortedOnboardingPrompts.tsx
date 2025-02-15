// app/modules/guild_onboarding/useSortedOnboardingPrompts.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
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
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argBaz;
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_onboarding/useSortedOnboardingPrompts.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useSortedOnboardingPrompts
        mike = argFoo;
        var _closure2_slot0 = mike;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 2;
        tango = tango[zulu];
        zulu = undefined;
        oscar = report.bind(zulu)(tango);
        report = oscar.useStateFromStoresArray;
        zulu = _closure1_slot3;
        tango = new Array(1);
        tango[0] = zulu;
        zulu = function() {
            zulu = _closure1_slot3;
            mike = zulu.getEnabledOnboardingPrompts;
            entity = _closure2_slot0;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report = report.bind(oscar)(tango, zulu);
        var _closure2_slot1 = report;
        tango = _closure1_slot2;
        zulu = tango.useMemo;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            _fun90225: for(var _fun90225_ip = 0; ; ) switch(_fun90225_ip) {
 0:
                oscar = new Array(0);
                report = new Array(0);
                tango = new Array(0);
                zulu = new Array(0);
                entity = _closure2_slot1;
                entity = entity.length;
                mike = 0;
                entity = mike < entity;
                verify = 0;
                options = 0;
                if(!entity) { _fun90225_ip = 194; continue _fun90225 }
 46:
                entity = _closure2_slot1;
                romeo = entity[options];
                entity = romeo.isNew;
                if(entity) { _fun90225_ip = 156; continue _fun90225 }
 63:
                entity = romeo.hasNewAnswers;
                if(entity) { _fun90225_ip = 113; continue _fun90225 }
 74:
                entity = romeo.inOnboarding;
                if(entity) { _fun90225_ip = 98; continue _fun90225 }
 83:
                entity = tango.push;
                entity = entity.bind(tango)(romeo);
                yankee = verify;
                _fun90225_ip = 169; continue _fun90225;
 98:
                entity = zulu.push;
                entity = entity.bind(zulu)(romeo);
                yankee = verify;
                _fun90225_ip = 169; continue _fun90225;
 113:
                entity = report.push;
                entity = entity.bind(report)(romeo);
                backup = romeo.options;
                foxtrot = backup.filter;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.isUnseen;
                    return entity;
                };
                entity = foxtrot.bind(backup)(entity);
                entity = entity.length;
                yankee = verify + entity;
                _fun90225_ip = 169; continue _fun90225;
 156:
                entity = oscar.push;
                entity = entity.bind(oscar)(romeo);
                yankee = verify;
 169:
                options = options + 1;
                entity = _closure2_slot1;
                entity = entity.length;
                verify = yankee;
                mike = verify;
                if(options < entity) { _fun90225_ip = 46; continue _fun90225 }
 194:
                entity = {};
                golf = _closure2_slot1;
                entity['onboardingPromptsRaw'] = golf;
                entity['newOnboardingPrompts'] = oscar;
                entity['onboardingPromptsWithNewAnswers'] = report;
                entity['newAnswersCount'] = mike;
                mike = tango.concat;
                mike = mike.bind(tango)(zulu);
                entity['onboardingPrompts'] = mike;
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();