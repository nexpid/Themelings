// app/modules/guild_onboarding/GuildOnboardingPromptsActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    verify = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = options;
    report = function(argFoo) { // Original name: fetchOnboardingPrompts
        golf = argFoo;
        var _closure2_slot0 = golf;
        zulu = _closure1_slot1;
        oscar = _closure1_slot2;
        mike = 10;
        mike = oscar[mike];
        tango = undefined;
        options = zulu.bind(tango)(mike);
        zulu = options.dispatch;
        mike = {};
        verify = 'GUILD_ONBOARDING_PROMPTS_FETCH_START';
        mike['type'] = verify;
        mike['guildId'] = golf;
        mike = zulu.bind(options)(mike);
        zulu = _closure1_slot0;
        mike = 11;
        mike = oscar[mike];
        mike = zulu.bind(tango)(mike);
        tango = mike.HTTP;
        zulu = tango.get;
        mike = {};
        oscar = _closure1_slot10;
        report = oscar.GUILD_ONBOARDING;
        report = report.bind(oscar)(golf);
        mike['url'] = report;
        report = false;
        mike['rejectWithError'] = report;
        tango = zulu.bind(tango)(mike);
        zulu = tango.then;
        mike = function(argFoo) {
            mike = argFoo;
            report = mike.body;
            zulu = _closure1_slot8;
            tango = undefined;
            report = zulu.bind(tango)(report);
            var _closure3_slot0 = report;
            zulu = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 10;
            mike = oscar[mike];
            tango = zulu.bind(tango)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS';
            mike['type'] = oscar;
            oscar = _closure2_slot0;
            mike['guildId'] = oscar;
            options = mike;
            golf = report;
            report = copyDataProperties(options, golf);
            zulu = zulu.bind(tango)(mike);
            mike = zulu.then;
            entity = function() {
                entity = _closure3_slot0;
                entity = entity.prompts;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = function(argFoo) {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 10;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dispatch;
            entity = {};
            tango = 'GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE';
            entity['type'] = tango;
            tango = _closure2_slot0;
            entity['guildId'] = tango;
            entity = mike.bind(zulu)(entity);
            entity = argFoo;
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot14 = report;
    entity = function() { // Original name: _maybeFetchOnboardingPrompts
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun61276: for(var _fun61276_ip = 0; ; ) switch(_fun61276_ip) {
 0:
                    StartGenerator();
                    golf = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun61276_ip = 424; continue _fun61276 }
 15:
                    tango = _closure1_slot4;
                    mike = tango.getId;
                    options = mike.bind(tango)();
                    tango = _closure1_slot0;
                    oscar = _closure1_slot2;
                    mike = 12;
                    mike = oscar[mike];
                    oscar = undefined;
                    yankee = tango.bind(oscar)(mike);
                    offset = yankee.hasFlag;
                    tango = _closure1_slot5;
                    mike = tango.getMember;
                    tango = mike.bind(tango)(golf, options);
                    mike = null;
                    verify = mike == tango;
                    options = undefined;
                    if(verify) { _fun61276_ip = 92; continue _fun61276 }
 87:
                    options = tango.flags;
 92:
                    romeo = mike != options;
                    tango = 0;
                    verify = 0;
                    if(!romeo) { _fun61276_ip = 106; continue _fun61276 }
 103:
                    verify = options;
 106:
                    options = _closure1_slot12;
                    options = options.COMPLETED_ONBOARDING;
                    options = offset.bind(yankee)(verify, options);
                    offset = _closure1_slot6;
                    verify = offset.getGuild;
                    offset = verify.bind(offset)(golf);
                    if(!(mike != offset)) { _fun61276_ip = 403; continue _fun61276 }
 143:
                    verify = offset.hasFeature;
                    mike = _closure1_slot11;
                    mike = mike.GUILD_ONBOARDING;
                    mike = verify.bind(offset)(mike);
                    if(!mike) { _fun61276_ip = 403; continue _fun61276 }
 170:
                    verify = _closure1_slot7;
                    mike = verify.shouldFetchPrompts;
                    mike = mike.bind(verify)(golf);
                    offset = _closure1_slot7;
                    verify = offset.getOnboardingPrompts;
                    verify = verify.bind(offset)(golf);
                    if(mike) { _fun61276_ip = 293; continue _fun61276 }
 203:
                    mike = verify.length;
                    if(!(mike > tango)) { _fun61276_ip = 293; continue _fun61276 }
 212:
                    tango = verify.every;
                    mike = function(argFoo) {
                        entity = argFoo;
                        entity = entity.inOnboarding;
                        entity = !entity;
                        return entity;
                    };
                    mike = tango.bind(verify)(mike);
                    if(mike) { _fun61276_ip = 263; continue _fun61276 }
 231:
                    if(options) { _fun61276_ip = 243; continue _fun61276 }
 234:
                    mike = _closure1_slot16;
                    mike = mike.bind(oscar)(golf);
 243:
                    mike = global;
                    tango = mike.Promise;
                    mike = tango.resolve;
                    mike = mike.bind(tango)();
                    _fun61276_ip = 290; continue _fun61276;
 263:
                    tango = _closure1_slot17;
                    tango = tango.bind(oscar)(golf);
                    tango = global;
                    verify = tango.Promise;
                    tango = verify.resolve;
                    mike = tango.bind(verify)();
 290:
                    return mike;
 293:
                    mike = _closure1_slot14;
                    mike = mike.bind(oscar)(golf);
                    SaveGenerator(address=306);
 304:
                    return mike;
 306:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun61276_ip = 400; continue _fun61276 }
 312:
                    tango = global;
                    offset = tango.Array;
                    verify = offset.isArray;
                    verify = verify.bind(offset)(mike);
                    if(!verify) { _fun61276_ip = 352; continue _fun61276 }
 333:
                    verify = mike.every;
                    zulu = function(argFoo) {
                        entity = argFoo;
                        entity = entity.inOnboarding;
                        entity = !entity;
                        return entity;
                    };
                    zulu = verify.bind(mike)(zulu);
                    if(zulu) { _fun61276_ip = 372; continue _fun61276 }
 352:
                    zulu = mike;
                    if(options) { _fun61276_ip = 397; continue _fun61276 }
 358:
                    options = _closure1_slot16;
                    options = options.bind(oscar)(golf);
                    zulu = mike;
                    _fun61276_ip = 397; continue _fun61276;
 372:
                    report = _closure1_slot17;
                    report = report.bind(oscar)(golf);
                    report = tango.Promise;
                    tango = report.resolve;
                    zulu = tango.bind(report)();
 397:
                    return zulu;
 400:
                    return mike;
 403:
                    mike = global;
                    zulu = mike.Promise;
                    mike = zulu.resolve;
                    mike = mike.bind(zulu)();
                    return mike;
 424:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot15 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot15 = entity;
    mike = function(argFoo) { // Original name: startOnboarding
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 10;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_ONBOARDING_START';
        mike['type'] = report;
        report = argFoo;
        mike['guildId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot16 = mike;
    entity = function(argFoo) { // Original name: _trackOnboardingDirectJoin
        yankee = argFoo;
        zulu = _closure1_slot1;
        romeo = _closure1_slot2;
        mike = 8;
        tango = romeo[mike];
        entity = undefined;
        backup = zulu.bind(entity)(tango);
        foxtrot = backup.track;
        tango = _closure1_slot9;
        report = tango.GUILD_ONBOARDING_STEP_VIEWED;
        tango = {};
        offset = _closure1_slot0;
        verify = 9;
        golf = romeo[verify];
        options = offset.bind(entity)(golf);
        golf = options.collectGuildAnalyticsMetadata;
        sizing = golf.bind(options)(yankee);
        output = tango;
        golf = copyDataProperties(output, sizing);
        golf = _closure1_slot13;
        options = 'step';
        tango[options] = golf;
        golf = true;
        kilo = 'required';
        tango[kilo] = golf;
        tango = foxtrot.bind(backup)(report, tango);
        mike = romeo[mike];
        report = zulu.bind(entity)(mike);
        tango = report.track;
        mike = _closure1_slot9;
        zulu = mike.GUILD_ONBOARDING_STEP_COMPLETED;
        mike = {};
        verify = romeo[verify];
        offset = offset.bind(entity)(verify);
        verify = offset.collectGuildAnalyticsMetadata;
        sizing = verify.bind(offset)(yankee);
        output = mike;
        verify = copyDataProperties(output, sizing);
        oscar = _closure1_slot13;
        mike[options] = oscar;
        options = false;
        oscar = 'skipped';
        mike[oscar] = options;
        oscar = 'is_final_step';
        mike[oscar] = golf;
        oscar = 'in_onboarding';
        mike[oscar] = golf;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, oscar);
    entity = 0;
    oscar = options[entity];
    entity = undefined;
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot3 = oscar;
    oscar = 1;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot4 = oscar;
    oscar = 2;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot5 = oscar;
    oscar = 3;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot6 = oscar;
    oscar = 4;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot7 = oscar;
    oscar = 5;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.serverApiResponseToClientState;
    var _closure1_slot8 = oscar;
    oscar = 6;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    verify = oscar.AnalyticEvents;
    var _closure1_slot9 = verify;
    verify = oscar.Endpoints;
    var _closure1_slot10 = verify;
    oscar = oscar.GuildFeatures;
    var _closure1_slot11 = oscar;
    oscar = 7;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.GuildMemberFlags;
    var _closure1_slot12 = oscar;
    oscar = -2;
    var _closure1_slot13 = oscar;
    oscar = 13;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/guild_onboarding/GuildOnboardingPromptsActionCreators.tsx';
    oscar = golf.bind(options)(oscar);
    oscar = function(argFoo) { // Original name: loadOnboardingPrompts
        zulu = _closure1_slot1;
        options = _closure1_slot2;
        entity = 8;
        mike = options[entity];
        entity = undefined;
        report = zulu.bind(entity)(mike);
        tango = report.track;
        mike = _closure1_slot9;
        zulu = mike.GUILD_ONBOARDING_LOADED;
        mike = {};
        golf = _closure1_slot0;
        oscar = 9;
        oscar = options[oscar];
        options = golf.bind(entity)(oscar);
        golf = options.collectGuildAnalyticsMetadata;
        oscar = argFoo;
        verify = golf.bind(options)(oscar);
        offset = mike;
        oscar = copyDataProperties(offset, verify);
        golf = false;
        oscar = 'has_new_prompts';
        mike[oscar] = golf;
        golf = 0;
        oscar = 'number_of_prompts';
        mike[oscar] = golf;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['loadOnboardingPrompts'] = oscar;
    zulu['fetchOnboardingPrompts'] = report;
    tango = function() { // Original name: maybeFetchOnboardingPrompts
        entity = undefined;
        tango = _closure1_slot15;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['maybeFetchOnboardingPrompts'] = tango;
    zulu['startOnboarding'] = mike;
    return entity;
})();