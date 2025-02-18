// app/modules/creator_monetization_eligibility/useCreatorMonetizationEligibility.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    golfie = argCor;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.CreatorMonetizationApplicationState;
    var _closure1_slot6 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/creator_monetization_eligibility/useCreatorMonetizationEligibility.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useCreatorMonetizationEligibility
        golfie = argFoo;
        var _closure2_slot0 = golfie;
        report = _closure1_slot5;
        tangon = report.useState;
        entity = null;
        entity = entity != golfie;
        entity = tangon.bind(report)(entity);
        yankee = _closure1_slot4;
        oscard = undefined;
        offset = 2;
        entity = yankee.bind(oscard)(entity, offset);
        zuuluu = 0;
        tangon = entity[zuuluu];
        verify = 1;
        entity = entity[verify];
        var _closure2_slot1 = entity;
        entity = report.useState;
        entity = entity.bind(report)();
        entity = yankee.bind(oscard)(entity, offset);
        option = entity[zuuluu];
        entity = entity[verify];
        var _closure2_slot2 = entity;
        entity = report.useState;
        entity = entity.bind(report)();
        entity = yankee.bind(oscard)(entity, offset);
        zuuluu = entity[zuuluu];
        entity = entity[verify];
        var _closure2_slot3 = entity;
        verify = report.useCallback;
        entity = function() {
            tangon = _closure1_slot3;
            zuuluu = undefined;
            michal = function* (argFoo) {
                entity = function* (argFoo) { // Original name: ?anon_0_
                    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(zuuluu) { _fun00002_ip = 620; continue _fun00001 }
 10:
                        michal = argFoo;
                        report = undefined;
                        foxtra = undefined;
                        backup = undefined;
                        romeon = undefined;
                        yankee = undefined;
                        option = undefined;
                        golfie = undefined;
                        oscard = _closure2_slot1;
                        tangon = true;
                        tangon = oscard.bind(report)(tangon);
                        tangon = _closure2_slot2;
                        tangon = tangon.bind(report)(report);
 50: // try_start_0 // try_start_1
                        oscard = _closure1_slot1;
                        verify = _closure1_slot2;
                        tangon = 4;
                        tangon = verify[tangon];
                        oscard = oscard.bind(report)(tangon);
                        tangon = oscard.getCreatorMonetizationEligibility;
                        michal = tangon.bind(oscard)(michal);
                        SaveGenerator(address=88);
 86:
                        return michal;
 88:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tangon) { _fun00002_ip = 520; continue _fun00001 }
 97:
                        golfie = michal;
                        oscard = _closure2_slot3;
                        tangon = {};
                        verify = michal.sufficient;
                        tangon['isEligibleForMonetization'] = verify;
                        verify = michal.size;
                        tangon['hasSufficientMembers'] = verify;
                        verify = michal.mfa;
                        tangon['hasEnabled2FA'] = verify;
                        verify = michal.age;
                        tangon['meetsServerAgeRequirement'] = verify;
                        verify = michal.owner_age;
                        tangon['meetsOwnerAgeRequirement'] = verify;
                        verify = michal.safe_environment;
                        tangon['noRecentViolations'] = verify;
                        verify = michal.engagement_healthy;
                        tangon['weeklyCommunicators'] = verify;
                        verify = michal.retention_healthy;
                        tangon['hasMemberRetention'] = verify;
                        verify = global;
                        sizing = verify.Object;
                        kiloes = sizing.keys;
                        verify = michal.nsfw_properties;
                        verify = kiloes.bind(sizing)(verify);
                        kiloes = verify.length;
                        verify = 0;
                        verify = verify === kiloes;
                        tangon['notNSFW'] = verify;
                        verify = michal.can_apply;
                        tangon['canApply'] = verify;
                        kiloes = michal.latest_request;
                        foxtra = kiloes;
                        verify = null;
                        sizing = verify == kiloes;
                        kiloes = undefined;
                        if(sizing) { _fun00002_ip = 285; continue _fun00001 }
 280:
                        kiloes = foxtra.state;
 285:
                        foxtra = _closure1_slot6;
                        foxtra = foxtra.OPEN;
                        foxtra = kiloes === foxtra;
                        tangon['isApplicationPending'] = foxtra;
                        foxtra = golfie;
                        foxtra = foxtra.latest_request;
                        backup = foxtra;
                        kiloes = verify == foxtra;
                        foxtra = undefined;
                        if(kiloes) { _fun00002_ip = 330; continue _fun00001 }
 325:
                        foxtra = backup.state;
 330:
                        offset = _closure1_slot6;
                        offset = offset.ACTION_REQUIRED;
                        offset = foxtra === offset;
                        tangon['actionRequired'] = offset;
                        offset = golfie;
                        foxtra = offset.minimum_age_in_days;
                        tangon['minimumAgeInDays'] = foxtra;
                        foxtra = offset.minimum_owner_age_in_years;
                        tangon['minimumOwnerAgeInYears'] = foxtra;
                        foxtra = offset.minimum_size;
                        tangon['minimumSize'] = foxtra;
                        foxtra = offset.latest_request;
                        tangon['latestRequest'] = foxtra;
                        foxtra = offset.rejection;
                        tangon['rejection'] = foxtra;
                        offset = offset.health_score;
                        romeon = offset;
                        foxtra = verify == offset;
                        offset = undefined;
                        if(foxtra) { _fun00002_ip = 439; continue _fun00001 }
 433:
                        offset = romeon.guild_size;
 439:
                        tangon['guildMemberCount'] = offset;
                        offset = golfie;
                        offset = offset.health_score;
                        yankee = offset;
                        romeon = verify == offset;
                        offset = undefined;
                        if(romeon) { _fun00002_ip = 473; continue _fun00001 }
 465:
                        offset = yankee.communicators;
 473:
                        tangon['communicatorCount'] = offset;
                        golfie = golfie.health_score;
                        option = golfie;
                        verify = verify == golfie;
                        golfie = undefined;
                        if(verify) { _fun00002_ip = 506; continue _fun00001 }
 498:
                        golfie = option.perc_ret_w1;
 506:
                        tangon['retentionScore'] = golfie;
                        tangon = oscard.bind(report)(tangon);
 518: // try_end0
                        _fun00002_ip = 591; continue _fun00001;
 520: // try_end1
                        oscard = _closure2_slot1;
                        tangon = false;
                        tangon = oscard.bind(report)(tangon);
                        return michal;
 534: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=6);
                        tangon = _closure2_slot2;
                        oscard = _closure1_slot0;
                        option = _closure1_slot2;
                        michal = 5;
                        michal = option[michal];
                        michal = oscard.bind(report)(michal);
                        oscard = michal.prototype;
                        oscard = Object.create(oscard, {constructor: {value: michal}});
                        result = oscard;
                        output = golfie;
                        michal = new result[michal](output, sizing);
                        michal = michal instanceof Object ? michal : oscard;
                        michal = tangon.bind(report)(michal);
 591: // try_end2
                        tangon = _closure2_slot1;
                        michal = false;
                        michal = tangon.bind(report)(michal);
                        return report;
 605: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=1);
                        tangon = _closure2_slot1;
                        zuuluu = false;
                        zuuluu = tangon.bind(report)(zuuluu);
                        throw michal;
 620:
                        return entity;
                    }
                };
                return entity;
            };
            michal = tangon.bind(zuuluu)(michal);
            var _closure3_slot0 = michal;
            entity = function() {
                entity = undefined;
                tangon = _closure3_slot0;
                zuuluu = tangon.apply;
                entity = arguments;
                michal = entity;
                entity = this;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            return entity;
        };
        oscard = entity.bind(oscard)();
        entity = new Array(0);
        oscard = verify.bind(report)(oscard, entity);
        var _closure2_slot4 = oscard;
        entity = {};
        entity['error'] = option;
        entity['loading'] = tangon;
        entity['eligibility'] = zuuluu;
        tangon = report.useCallback;
        zuuluu = new Array(2);
        zuuluu[0] = golfie;
        zuuluu[1] = oscard;
        michal = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = _closure2_slot0;
                michal = null;
                if(!(michal != zuuluu)) { _fun00004_ip = 28; continue _fun00003 }
 13:
                zuuluu = _closure2_slot4;
                michal = _closure2_slot0;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
 28:
                entity = undefined;
                return entity;
            }
        };
        michal = tangon.bind(report)(michal, zuuluu);
        entity['refresh'] = michal;
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();