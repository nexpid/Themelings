// app/modules/guild_onboarding/native/GuildOnboardingModal.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: headerTitle
        entity = null;
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: headerRight
        entity = null;
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildOnboardingModalStates;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildFeatures;
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot8 = tango;
    tango = 14;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_onboarding/native/GuildOnboardingModal.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: GuildOnboardingModal
        mike = argFoo;
        output = mike.guildId;
        var _closure2_slot0 = output;
        foxtrot = mike.onFinish;
        var _closure2_slot1 = foxtrot;
        romeo = mike.onClose;
        var _closure2_slot2 = romeo;
        yankee = mike.landingAnimation;
        var _closure2_slot3 = yankee;
        offset = mike.isFirstOpen;
        var _closure2_slot4 = offset;
        golf = mike.backShouldLeaveGuild;
        var _closure2_slot5 = golf;
        options = _closure1_slot0;
        verify = _closure1_slot2;
        zulu = 9;
        mike = verify[zulu];
        tango = undefined;
        kilo = options.bind(tango)(mike);
        backup = kilo.useStateFromStores;
        mike = _closure1_slot4;
        oscar = new Array(1);
        oscar[0] = mike;
        mike = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tango = _closure1_slot4;
                zulu = tango.getGuild;
                mike = _closure2_slot0;
                tango = zulu.bind(tango)(mike);
                mike = null;
                zulu = mike == tango;
                mike = undefined;
                if(zulu) { _fun00002_ip = 56; continue _fun00001 }
 35:
                zulu = tango.hasFeature;
                entity = _closure1_slot7;
                entity = entity.MEMBER_VERIFICATION_GATE_ENABLED;
                mike = zulu.bind(tango)(entity);
 56:
                entity = true;
                entity = entity === mike;
                return entity;
            }
        };
        mike = backup.bind(kilo)(oscar, mike);
        var _closure2_slot6 = mike;
        zulu = verify[zulu];
        kilo = options.bind(tango)(zulu);
        backup = kilo.useStateFromStoresArray;
        zulu = _closure1_slot5;
        oscar = new Array(1);
        oscar[0] = zulu;
        zulu = function() {
            zulu = _closure1_slot5;
            mike = zulu.getOnboardingPromptsForOnboarding;
            entity = _closure2_slot0;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        sizing = backup.bind(kilo)(oscar, zulu);
        var _closure2_slot7 = sizing;
        oscar = _closure1_slot3;
        kilo = oscar.useCallback;
        backup = new Array(1);
        backup[0] = output;
        zulu = function(argFoo, argBar, argBaz) {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 10;
            mike = mike[entity];
            entity = undefined;
            golf = zulu.bind(entity)(mike);
            oscar = golf.selectOption;
            yankee = _closure2_slot0;
            offset = argFoo;
            verify = argBar;
            options = argBaz;
            romeo = golf;
            mike = romeo[oscar](yankee, offset, verify, options, golf);
            return entity;
        };
        kilo = kilo.bind(oscar)(zulu, backup);
        var _closure2_slot8 = kilo;
        result = oscar.useCallback;
        backup = new Array(2);
        backup[0] = output;
        backup[1] = sizing;
        zulu = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 10;
            mike = mike[entity];
            entity = undefined;
            report = zulu.bind(entity)(mike);
            tango = report.completeOnboarding;
            zulu = _closure2_slot0;
            mike = _closure2_slot7;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        backup = result.bind(oscar)(zulu, backup);
        var _closure2_slot9 = backup;
        result = oscar.useEffect;
        zulu = new Array(2);
        zulu[0] = output;
        zulu[1] = mike;
        mike = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                mike = _closure2_slot6;
                if(!mike) { _fun00004_ip = 50; continue _fun00003 }
 10:
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 11;
                zulu = zulu[mike];
                mike = undefined;
                zulu = tango.bind(mike)(zulu);
                mike = zulu.fetchVerificationForm;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
 50:
                entity = undefined;
                return entity;
            }
        };
        mike = result.bind(oscar)(mike, zulu);
        zulu = oscar.useMemo;
        mike = new Array(9);
        mike[0] = output;
        mike[1] = sizing;
        mike[2] = kilo;
        mike[3] = backup;
        mike[4] = foxtrot;
        mike[5] = romeo;
        mike[6] = yankee;
        mike[7] = offset;
        mike[8] = golf;
        entity = function() {
            zulu = {};
            mike = _closure2_slot0;
            zulu['guildId'] = mike;
            mike = _closure2_slot7;
            zulu['prompts'] = mike;
            mike = _closure2_slot8;
            zulu['selectOption'] = mike;
            mike = _closure2_slot9;
            zulu['completeOnboarding'] = mike;
            mike = _closure2_slot1;
            zulu['onFinish'] = mike;
            mike = _closure2_slot2;
            zulu['onClose'] = mike;
            mike = _closure2_slot3;
            zulu['landingAnimation'] = mike;
            mike = _closure2_slot4;
            zulu['isFirstOpen'] = mike;
            entity = _closure2_slot5;
            zulu['backShouldLeaveGuild'] = entity;
            mike = function(argFoo) { // Original name: getScreens
                entity = argFoo;
                mike = entity.guildId;
                var _closure4_slot0 = mike;
                mike = entity.prompts;
                var _closure4_slot1 = mike;
                mike = entity.selectOption;
                var _closure4_slot2 = mike;
                mike = entity.completeOnboarding;
                var _closure4_slot3 = mike;
                mike = entity.onFinish;
                var _closure4_slot4 = mike;
                mike = entity.onClose;
                var _closure4_slot5 = mike;
                mike = entity.landingAnimation;
                var _closure4_slot6 = mike;
                mike = entity.isFirstOpen;
                var _closure4_slot7 = mike;
                entity = entity.backShouldLeaveGuild;
                var _closure4_slot8 = entity;
                entity = {};
                mike = _closure1_slot6;
                options = mike.PROMPT;
                zulu = {};
                golf = true;
                zulu['fullscreen'] = golf;
                oscar = _closure1_slot9;
                zulu['headerTitle'] = oscar;
                report = _closure1_slot10;
                zulu['headerRight'] = report;
                verify = function(argFoo) { // Original name: render
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        options = argFoo;
                        tango = _closure1_slot8;
                        mike = _closure1_slot1;
                        zulu = _closure1_slot2;
                        entity = 6;
                        entity = zulu[entity];
                        zulu = undefined;
                        mike = mike.bind(zulu)(entity);
                        entity = {};
                        oscar = _closure4_slot0;
                        entity['guildId'] = oscar;
                        oscar = null;
                        verify = oscar == options;
                        golf = undefined;
                        if(verify) { _fun00006_ip = 62; continue _fun00005 }
 56:
                        golf = options.currentPrompt;
 62:
                        options = oscar != golf;
                        oscar = 0;
                        if(!options) { _fun00006_ip = 74; continue _fun00005 }
 71:
                        oscar = golf;
 74:
                        entity['currentPromptIdx'] = oscar;
                        oscar = _closure4_slot1;
                        entity['prompts'] = oscar;
                        oscar = _closure4_slot2;
                        entity['selectOption'] = oscar;
                        oscar = _closure4_slot5;
                        entity['onClose'] = oscar;
                        oscar = _closure4_slot6;
                        entity['landingAnimation'] = oscar;
                        oscar = _closure4_slot7;
                        entity['isFirstOpen'] = oscar;
                        report = _closure4_slot8;
                        entity['backShouldLeaveGuild'] = report;
                        entity = tango.bind(zulu)(mike, entity);
                        return entity;
                    }
                };
                zulu['render'] = verify;
                entity[options] = zulu;
                options = mike.COMPLETED;
                zulu = {};
                zulu['fullscreen'] = golf;
                zulu['headerTitle'] = oscar;
                zulu['headerRight'] = report;
                verify = function() { // Original name: render
                    tango = _closure1_slot8;
                    mike = _closure1_slot1;
                    zulu = _closure1_slot2;
                    entity = 7;
                    entity = zulu[entity];
                    zulu = undefined;
                    mike = mike.bind(zulu)(entity);
                    entity = {};
                    oscar = _closure4_slot0;
                    entity['guildId'] = oscar;
                    oscar = _closure4_slot1;
                    entity['prompts'] = oscar;
                    report = _closure4_slot3;
                    entity['completeOnboarding'] = report;
                    report = function() { // Original name: onClose
                        zulu = _closure4_slot5;
                        entity = undefined;
                        zulu = zulu.bind(entity)();
                        mike = _closure4_slot4;
                        mike = mike.bind(entity)();
                        return entity;
                    };
                    entity['onClose'] = report;
                    entity = tango.bind(zulu)(mike, entity);
                    return entity;
                };
                zulu['render'] = verify;
                entity[options] = zulu;
                zulu = mike.RULES;
                mike = {};
                mike['fullscreen'] = golf;
                mike['headerTitle'] = oscar;
                mike['headerRight'] = report;
                tango = function() { // Original name: render
                    tango = _closure1_slot8;
                    mike = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 8;
                    entity = zulu[entity];
                    zulu = undefined;
                    entity = mike.bind(zulu)(entity);
                    mike = entity.RulesPrompt;
                    entity = {};
                    oscar = _closure4_slot0;
                    entity['guildId'] = oscar;
                    report = _closure4_slot5;
                    entity['onClose'] = report;
                    entity = tango.bind(zulu)(mike, entity);
                    return entity;
                };
                mike['render'] = tango;
                entity[zulu] = mike;
                return entity;
            };
            entity = undefined;
            entity = mike.bind(entity)(zulu);
            return entity;
        };
        oscar = zulu.bind(oscar)(entity, mike);
        zulu = _closure1_slot8;
        entity = 12;
        entity = verify[entity];
        entity = options.bind(tango)(entity);
        mike = entity.Navigator;
        entity = {};
        entity['screens'] = oscar;
        report = _closure1_slot6;
        report = report.PROMPT;
        entity['initialRouteName'] = report;
        report = 13;
        oscar = verify[report];
        oscar = options.bind(tango)(oscar);
        golf = oscar.intl;
        oscar = golf.string;
        report = verify[report];
        report = options.bind(tango)(report);
        report = report.t;
        report = report.13/7kZ;
        report = oscar.bind(golf)(report);
        entity['headerBackTitle'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();