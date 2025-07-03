// app/modules/guild_onboarding/GuildOnboardingPromptsActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = option;
    report = function(argFoo) { // Original name: fetchOnboardingPrompts
        golfie = argFoo;
        var _closure2_slot0 = golfie;
        zuuluu = _closure1_slot1;
        oscard = _closure1_slot2;
        michal = 10;
        michal = oscard[michal];
        tangon = undefined;
        option = zuuluu.bind(tangon)(michal);
        zuuluu = option.dispatch;
        michal = {};
        verify = 'GUILD_ONBOARDING_PROMPTS_FETCH_START';
        michal['type'] = verify;
        michal['guildId'] = golfie;
        michal = zuuluu.bind(option)(michal);
        zuuluu = _closure1_slot0;
        michal = 11;
        michal = oscard[michal];
        michal = zuuluu.bind(tangon)(michal);
        tangon = michal.HTTP;
        zuuluu = tangon.get;
        michal = {};
        oscard = _closure1_slot10;
        report = oscard.GUILD_ONBOARDING;
        report = report.bind(oscard)(golfie);
        michal['url'] = report;
        report = false;
        michal['rejectWithError'] = report;
        tangon = zuuluu.bind(tangon)(michal);
        zuuluu = tangon.then;
        michal = function(argFoo) {
            michal = argFoo;
            report = michal.body;
            zuuluu = _closure1_slot8;
            tangon = undefined;
            report = zuuluu.bind(tangon)(report);
            var _closure3_slot0 = report;
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 10;
            michal = oscard[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS';
            michal['type'] = oscard;
            oscard = _closure2_slot0;
            michal['guildId'] = oscard;
            option = michal;
            golfie = report;
            report = copyDataProperties(option, golfie);
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.then;
            entity = function() {
                entity = _closure3_slot0;
                entity = entity.prompts;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = function(argFoo) {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 10;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.dispatch;
            entity = {};
            tangon = 'GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE';
            entity['type'] = tangon;
            tangon = _closure2_slot0;
            entity['guildId'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            entity = argFoo;
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot14 = report;
    entity = function() { // Original name: _maybeFetchOnboardingPrompts
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    golfie = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 429; continue _fun00001 }
 15:
                    tangon = _closure1_slot4;
                    michal = tangon.getId;
                    option = michal.bind(tangon)();
                    tangon = _closure1_slot0;
                    oscard = _closure1_slot2;
                    michal = 12;
                    michal = oscard[michal];
                    oscard = undefined;
                    yankee = tangon.bind(oscard)(michal);
                    offset = yankee.hasFlag;
                    tangon = _closure1_slot5;
                    michal = tangon.getMember;
                    tangon = michal.bind(tangon)(golfie, option);
                    verify = null;
                    option = verify == tangon;
                    michal = undefined;
                    if(option) { _fun00002_ip = 92; continue _fun00001 }
 87:
                    michal = tangon.flags;
 92:
                    romeon = verify != michal;
                    tangon = 0;
                    option = 0;
                    if(!romeon) { _fun00002_ip = 106; continue _fun00001 }
 103:
                    option = michal;
 106:
                    michal = _closure1_slot12;
                    michal = michal.COMPLETED_ONBOARDING;
                    option = offset.bind(yankee)(option, michal);
                    offset = _closure1_slot6;
                    michal = offset.getGuild;
                    michal = michal.bind(offset)(golfie);
                    if(!(verify != michal)) { _fun00002_ip = 408; continue _fun00001 }
 143:
                    offset = michal.features;
                    verify = offset.has;
                    michal = _closure1_slot11;
                    michal = michal.GUILD_ONBOARDING;
                    michal = verify.bind(offset)(michal);
                    if(!michal) { _fun00002_ip = 408; continue _fun00001 }
 175:
                    verify = _closure1_slot7;
                    michal = verify.shouldFetchPrompts;
                    michal = michal.bind(verify)(golfie);
                    offset = _closure1_slot7;
                    verify = offset.getOnboardingPrompts;
                    verify = verify.bind(offset)(golfie);
                    if(michal) { _fun00002_ip = 298; continue _fun00001 }
 208:
                    michal = verify.length;
                    if(!(michal > tangon)) { _fun00002_ip = 298; continue _fun00001 }
 217:
                    tangon = verify.every;
                    michal = function(argFoo) {
                        entity = argFoo;
                        entity = entity.inOnboarding;
                        entity = !entity;
                        return entity;
                    };
                    michal = tangon.bind(verify)(michal);
                    if(michal) { _fun00002_ip = 268; continue _fun00001 }
 236:
                    if(option) { _fun00002_ip = 248; continue _fun00001 }
 239:
                    michal = _closure1_slot16;
                    michal = michal.bind(oscard)(golfie);
 248:
                    michal = global;
                    tangon = michal.Promise;
                    michal = tangon.resolve;
                    michal = michal.bind(tangon)();
                    _fun00002_ip = 295; continue _fun00001;
 268:
                    tangon = _closure1_slot17;
                    tangon = tangon.bind(oscard)(golfie);
                    tangon = global;
                    verify = tangon.Promise;
                    tangon = verify.resolve;
                    michal = tangon.bind(verify)();
 295:
                    return michal;
 298:
                    michal = _closure1_slot14;
                    michal = michal.bind(oscard)(golfie);
                    SaveGenerator(address=311);
 309:
                    return michal;
 311:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 405; continue _fun00001 }
 317:
                    tangon = global;
                    offset = tangon.Array;
                    verify = offset.isArray;
                    verify = verify.bind(offset)(michal);
                    if(!verify) { _fun00002_ip = 357; continue _fun00001 }
 338:
                    verify = michal.every;
                    zuuluu = function(argFoo) {
                        entity = argFoo;
                        entity = entity.inOnboarding;
                        entity = !entity;
                        return entity;
                    };
                    zuuluu = verify.bind(michal)(zuuluu);
                    if(zuuluu) { _fun00002_ip = 377; continue _fun00001 }
 357:
                    zuuluu = michal;
                    if(option) { _fun00002_ip = 402; continue _fun00001 }
 363:
                    option = _closure1_slot16;
                    option = option.bind(oscard)(golfie);
                    zuuluu = michal;
                    _fun00002_ip = 402; continue _fun00001;
 377:
                    report = _closure1_slot17;
                    report = report.bind(oscard)(golfie);
                    report = tangon.Promise;
                    tangon = report.resolve;
                    zuuluu = tangon.bind(report)();
 402:
                    return zuuluu;
 405:
                    return michal;
 408:
                    michal = global;
                    zuuluu = michal.Promise;
                    michal = zuuluu.resolve;
                    michal = michal.bind(zuuluu)();
                    return michal;
 429:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot15 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot15 = entity;
    michal = function(argFoo) { // Original name: startOnboarding
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 10;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_ONBOARDING_START';
        michal['type'] = report;
        report = argFoo;
        michal['guildId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot16 = michal;
    entity = function(argFoo) { // Original name: _trackOnboardingDirectJoin
        yankee = argFoo;
        zuuluu = _closure1_slot1;
        romeon = _closure1_slot2;
        michal = 8;
        tangon = romeon[michal];
        entity = undefined;
        backup = zuuluu.bind(entity)(tangon);
        foxtra = backup.track;
        tangon = _closure1_slot9;
        report = tangon.GUILD_ONBOARDING_STEP_VIEWED;
        tangon = {};
        offset = _closure1_slot0;
        verify = 9;
        golfie = romeon[verify];
        option = offset.bind(entity)(golfie);
        golfie = option.collectGuildAnalyticsMetadata;
        sizing = golfie.bind(option)(yankee);
        output = tangon;
        golfie = copyDataProperties(output, sizing);
        golfie = _closure1_slot13;
        option = 'step';
        tangon[option] = golfie;
        golfie = true;
        kiloes = 'required';
        tangon[kiloes] = golfie;
        tangon = foxtra.bind(backup)(report, tangon);
        michal = romeon[michal];
        report = zuuluu.bind(entity)(michal);
        tangon = report.track;
        michal = _closure1_slot9;
        zuuluu = michal.GUILD_ONBOARDING_STEP_COMPLETED;
        michal = {};
        verify = romeon[verify];
        offset = offset.bind(entity)(verify);
        verify = offset.collectGuildAnalyticsMetadata;
        sizing = verify.bind(offset)(yankee);
        output = michal;
        verify = copyDataProperties(output, sizing);
        oscard = _closure1_slot13;
        michal[option] = oscard;
        option = false;
        oscard = 'skipped';
        michal[oscard] = option;
        oscard = 'is_final_step';
        michal[oscard] = golfie;
        oscard = 'in_onboarding';
        michal[oscard] = golfie;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 1;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot4 = oscard;
    oscard = 2;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot5 = oscard;
    oscard = 3;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot6 = oscard;
    oscard = 4;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot7 = oscard;
    oscard = 5;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.serverApiResponseToClientState;
    var _closure1_slot8 = oscard;
    oscard = 6;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    verify = oscard.AnalyticEvents;
    var _closure1_slot9 = verify;
    verify = oscard.Endpoints;
    var _closure1_slot10 = verify;
    oscard = oscard.GuildFeatures;
    var _closure1_slot11 = oscard;
    oscard = 7;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.GuildMemberFlags;
    var _closure1_slot12 = oscard;
    oscard = -2;
    var _closure1_slot13 = oscard;
    oscard = 13;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/guild_onboarding/GuildOnboardingPromptsActionCreators.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = function(argFoo) { // Original name: loadOnboardingPrompts
        zuuluu = _closure1_slot1;
        option = _closure1_slot2;
        entity = 8;
        michal = option[entity];
        entity = undefined;
        report = zuuluu.bind(entity)(michal);
        tangon = report.track;
        michal = _closure1_slot9;
        zuuluu = michal.GUILD_ONBOARDING_LOADED;
        michal = {};
        golfie = _closure1_slot0;
        oscard = 9;
        oscard = option[oscard];
        option = golfie.bind(entity)(oscard);
        golfie = option.collectGuildAnalyticsMetadata;
        oscard = argFoo;
        verify = golfie.bind(option)(oscard);
        offset = michal;
        oscard = copyDataProperties(offset, verify);
        golfie = false;
        oscard = 'has_new_prompts';
        michal[oscard] = golfie;
        golfie = 0;
        oscard = 'number_of_prompts';
        michal[oscard] = golfie;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['loadOnboardingPrompts'] = oscard;
    zuuluu['fetchOnboardingPrompts'] = report;
    tangon = function() { // Original name: maybeFetchOnboardingPrompts
        entity = undefined;
        tangon = _closure1_slot15;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['maybeFetchOnboardingPrompts'] = tangon;
    zuuluu['startOnboarding'] = michal;
    return entity;
})();