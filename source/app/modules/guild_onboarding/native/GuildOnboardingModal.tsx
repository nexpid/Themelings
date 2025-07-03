// app/modules/guild_onboarding/native/GuildOnboardingModal.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildOnboardingModalStates;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildFeatures;
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot8 = tangon;
    tangon = 14;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_onboarding/native/GuildOnboardingModal.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: GuildOnboardingModal
        michal = argFoo;
        output = michal.guildId;
        var _closure2_slot0 = output;
        foxtra = michal.onFinish;
        var _closure2_slot1 = foxtra;
        romeon = michal.onClose;
        var _closure2_slot2 = romeon;
        yankee = michal.landingAnimation;
        var _closure2_slot3 = yankee;
        offset = michal.isFirstOpen;
        var _closure2_slot4 = offset;
        golfie = michal.backShouldLeaveGuild;
        var _closure2_slot5 = golfie;
        option = _closure1_slot0;
        verify = _closure1_slot2;
        zuuluu = 9;
        michal = verify[zuuluu];
        tangon = undefined;
        kiloes = option.bind(tangon)(michal);
        backup = kiloes.useStateFromStores;
        michal = _closure1_slot4;
        oscard = new Array(1);
        oscard[0] = michal;
        michal = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = _closure1_slot4;
                michal = tangon.getGuild;
                entity = _closure2_slot0;
                tangon = michal.bind(tangon)(entity);
                entity = null;
                entity = entity != tangon;
                if(!entity) { _fun00002_ip = 94; continue _fun00001 }
 33:
                oscard = tangon.features;
                report = oscard.has;
                michal = _closure1_slot7;
                michal = michal.MEMBER_VERIFICATION_GATE_ENABLED;
                michal = report.bind(oscard)(michal);
                if(!michal) { _fun00002_ip = 91; continue _fun00001 }
 62:
                report = tangon.features;
                tangon = report.has;
                zuuluu = _closure1_slot7;
                zuuluu = zuuluu.MEMBER_VERIFICATION_MANUAL_APPROVAL;
                zuuluu = tangon.bind(report)(zuuluu);
                michal = !zuuluu;
 91:
                entity = michal;
 94:
                return entity;
            }
        };
        michal = backup.bind(kiloes)(oscard, michal);
        var _closure2_slot6 = michal;
        zuuluu = verify[zuuluu];
        kiloes = option.bind(tangon)(zuuluu);
        backup = kiloes.useStateFromStoresArray;
        zuuluu = _closure1_slot5;
        oscard = new Array(1);
        oscard[0] = zuuluu;
        zuuluu = function() {
            zuuluu = _closure1_slot5;
            michal = zuuluu.getOnboardingPromptsForOnboarding;
            entity = _closure2_slot0;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        sizing = backup.bind(kiloes)(oscard, zuuluu);
        var _closure2_slot7 = sizing;
        oscard = _closure1_slot3;
        kiloes = oscard.useCallback;
        backup = new Array(1);
        backup[0] = output;
        zuuluu = function(argFoo, argBar, argBaz) {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 10;
            michal = michal[entity];
            entity = undefined;
            golfie = zuuluu.bind(entity)(michal);
            oscard = golfie.selectOption;
            yankee = _closure2_slot0;
            offset = argFoo;
            verify = argBar;
            option = argBaz;
            romeon = golfie;
            michal = romeon[oscard](yankee, offset, verify, option, golfie);
            return entity;
        };
        kiloes = kiloes.bind(oscard)(zuuluu, backup);
        var _closure2_slot8 = kiloes;
        result = oscard.useCallback;
        backup = new Array(2);
        backup[0] = output;
        backup[1] = sizing;
        zuuluu = function() {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 10;
            michal = michal[entity];
            entity = undefined;
            report = zuuluu.bind(entity)(michal);
            tangon = report.completeOnboarding;
            zuuluu = _closure2_slot0;
            michal = _closure2_slot7;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        };
        backup = result.bind(oscard)(zuuluu, backup);
        var _closure2_slot9 = backup;
        result = oscard.useEffect;
        zuuluu = new Array(2);
        zuuluu[0] = output;
        zuuluu[1] = michal;
        michal = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = _closure2_slot6;
                if(!michal) { _fun00004_ip = 50; continue _fun00003 }
 10:
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 11;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = tangon.bind(michal)(zuuluu);
                michal = zuuluu.fetchVerificationForm;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
 50:
                entity = undefined;
                return entity;
            }
        };
        michal = result.bind(oscard)(michal, zuuluu);
        zuuluu = oscard.useMemo;
        michal = new Array(9);
        michal[0] = output;
        michal[1] = sizing;
        michal[2] = kiloes;
        michal[3] = backup;
        michal[4] = foxtra;
        michal[5] = romeon;
        michal[6] = yankee;
        michal[7] = offset;
        michal[8] = golfie;
        entity = function() {
            zuuluu = {};
            michal = _closure2_slot0;
            zuuluu['guildId'] = michal;
            michal = _closure2_slot7;
            zuuluu['prompts'] = michal;
            michal = _closure2_slot8;
            zuuluu['selectOption'] = michal;
            michal = _closure2_slot9;
            zuuluu['completeOnboarding'] = michal;
            michal = _closure2_slot1;
            zuuluu['onFinish'] = michal;
            michal = _closure2_slot2;
            zuuluu['onClose'] = michal;
            michal = _closure2_slot3;
            zuuluu['landingAnimation'] = michal;
            michal = _closure2_slot4;
            zuuluu['isFirstOpen'] = michal;
            entity = _closure2_slot5;
            zuuluu['backShouldLeaveGuild'] = entity;
            michal = function(argFoo) { // Original name: getScreens
                entity = argFoo;
                michal = entity.guildId;
                var _closure4_slot0 = michal;
                michal = entity.prompts;
                var _closure4_slot1 = michal;
                michal = entity.selectOption;
                var _closure4_slot2 = michal;
                michal = entity.completeOnboarding;
                var _closure4_slot3 = michal;
                michal = entity.onFinish;
                var _closure4_slot4 = michal;
                michal = entity.onClose;
                var _closure4_slot5 = michal;
                michal = entity.landingAnimation;
                var _closure4_slot6 = michal;
                michal = entity.isFirstOpen;
                var _closure4_slot7 = michal;
                entity = entity.backShouldLeaveGuild;
                var _closure4_slot8 = entity;
                entity = {};
                michal = _closure1_slot6;
                option = michal.PROMPT;
                zuuluu = {};
                golfie = true;
                zuuluu['fullscreen'] = golfie;
                oscard = _closure1_slot9;
                zuuluu['headerTitle'] = oscard;
                report = _closure1_slot10;
                zuuluu['headerRight'] = report;
                verify = function(argFoo) { // Original name: render
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        option = argFoo;
                        tangon = _closure1_slot8;
                        michal = _closure1_slot1;
                        zuuluu = _closure1_slot2;
                        entity = 6;
                        entity = zuuluu[entity];
                        zuuluu = undefined;
                        michal = michal.bind(zuuluu)(entity);
                        entity = {};
                        oscard = _closure4_slot0;
                        entity['guildId'] = oscard;
                        oscard = null;
                        verify = oscard == option;
                        golfie = undefined;
                        if(verify) { _fun00006_ip = 62; continue _fun00005 }
 56:
                        golfie = option.currentPrompt;
 62:
                        option = oscard != golfie;
                        oscard = 0;
                        if(!option) { _fun00006_ip = 74; continue _fun00005 }
 71:
                        oscard = golfie;
 74:
                        entity['currentPromptIdx'] = oscard;
                        oscard = _closure4_slot1;
                        entity['prompts'] = oscard;
                        oscard = _closure4_slot2;
                        entity['selectOption'] = oscard;
                        oscard = _closure4_slot5;
                        entity['onClose'] = oscard;
                        oscard = _closure4_slot6;
                        entity['landingAnimation'] = oscard;
                        oscard = _closure4_slot7;
                        entity['isFirstOpen'] = oscard;
                        report = _closure4_slot8;
                        entity['backShouldLeaveGuild'] = report;
                        entity = tangon.bind(zuuluu)(michal, entity);
                        return entity;
                    }
                };
                zuuluu['render'] = verify;
                entity[option] = zuuluu;
                option = michal.COMPLETED;
                zuuluu = {};
                zuuluu['fullscreen'] = golfie;
                zuuluu['headerTitle'] = oscard;
                zuuluu['headerRight'] = report;
                verify = function() { // Original name: render
                    tangon = _closure1_slot8;
                    michal = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 7;
                    entity = zuuluu[entity];
                    zuuluu = undefined;
                    michal = michal.bind(zuuluu)(entity);
                    entity = {};
                    oscard = _closure4_slot0;
                    entity['guildId'] = oscard;
                    oscard = _closure4_slot1;
                    entity['prompts'] = oscard;
                    report = _closure4_slot3;
                    entity['completeOnboarding'] = report;
                    report = function() { // Original name: onClose
                        zuuluu = _closure4_slot5;
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)();
                        michal = _closure4_slot4;
                        michal = michal.bind(entity)();
                        return entity;
                    };
                    entity['onClose'] = report;
                    entity = tangon.bind(zuuluu)(michal, entity);
                    return entity;
                };
                zuuluu['render'] = verify;
                entity[option] = zuuluu;
                zuuluu = michal.RULES;
                michal = {};
                michal['fullscreen'] = golfie;
                michal['headerTitle'] = oscard;
                michal['headerRight'] = report;
                tangon = function() { // Original name: render
                    tangon = _closure1_slot8;
                    michal = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 8;
                    entity = zuuluu[entity];
                    zuuluu = undefined;
                    entity = michal.bind(zuuluu)(entity);
                    michal = entity.RulesPrompt;
                    entity = {};
                    oscard = _closure4_slot0;
                    entity['guildId'] = oscard;
                    report = _closure4_slot5;
                    entity['onClose'] = report;
                    entity = tangon.bind(zuuluu)(michal, entity);
                    return entity;
                };
                michal['render'] = tangon;
                entity[zuuluu] = michal;
                return entity;
            };
            entity = undefined;
            entity = michal.bind(entity)(zuuluu);
            return entity;
        };
        oscard = zuuluu.bind(oscard)(entity, michal);
        zuuluu = _closure1_slot8;
        entity = 12;
        entity = verify[entity];
        entity = option.bind(tangon)(entity);
        michal = entity.Navigator;
        entity = {};
        entity['screens'] = oscard;
        report = _closure1_slot6;
        report = report.PROMPT;
        entity['initialRouteName'] = report;
        report = 13;
        oscard = verify[report];
        oscard = option.bind(tangon)(oscard);
        golfie = oscard.intl;
        oscard = golfie.string;
        report = verify[report];
        report = option.bind(tangon)(report);
        report = report.t;
        report = report.13/7kZ;
        report = oscard.bind(golfie)(report);
        entity['headerBackTitle'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();