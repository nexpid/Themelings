// app/modules/creator_monetization_eligibility/useCreatorMonetizationEligibility.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    golf = argCorge;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.CreatorMonetizationApplicationState;
    var _closure1_slot6 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/creator_monetization_eligibility/useCreatorMonetizationEligibility.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useCreatorMonetizationEligibility
        golf = argFoo;
        var _closure2_slot0 = golf;
        report = _closure1_slot5;
        tango = report.useState;
        entity = null;
        entity = entity != golf;
        entity = tango.bind(report)(entity);
        yankee = _closure1_slot4;
        oscar = undefined;
        offset = 2;
        entity = yankee.bind(oscar)(entity, offset);
        zulu = 0;
        tango = entity[zulu];
        verify = 1;
        entity = entity[verify];
        var _closure2_slot1 = entity;
        entity = report.useState;
        entity = entity.bind(report)();
        entity = yankee.bind(oscar)(entity, offset);
        options = entity[zulu];
        entity = entity[verify];
        var _closure2_slot2 = entity;
        entity = report.useState;
        entity = entity.bind(report)();
        entity = yankee.bind(oscar)(entity, offset);
        zulu = entity[zulu];
        entity = entity[verify];
        var _closure2_slot3 = entity;
        verify = report.useCallback;
        entity = function() {
            tango = _closure1_slot3;
            zulu = undefined;
            mike = function* (argFoo) {
                entity = function* (argFoo) { // Original name: ?anon_0_
                    _fun126868: for(var _fun126868_ip = 0; ; ) switch(_fun126868_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(zulu) { _fun126868_ip = 620; continue _fun126868 }
 10:
                        mike = argFoo;
                        report = undefined;
                        foxtrot = undefined;
                        backup = undefined;
                        romeo = undefined;
                        yankee = undefined;
                        options = undefined;
                        golf = undefined;
                        oscar = _closure2_slot1;
                        tango = true;
                        tango = oscar.bind(report)(tango);
                        tango = _closure2_slot2;
                        tango = tango.bind(report)(report);
 50: // try_start_0 // try_start_1
                        oscar = _closure1_slot1;
                        verify = _closure1_slot2;
                        tango = 4;
                        tango = verify[tango];
                        oscar = oscar.bind(report)(tango);
                        tango = oscar.getCreatorMonetizationEligibility;
                        mike = tango.bind(oscar)(mike);
                        SaveGenerator(address=88);
 86:
                        return mike;
 88:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tango) { _fun126868_ip = 520; continue _fun126868 }
 97:
                        golf = mike;
                        oscar = _closure2_slot3;
                        tango = {};
                        verify = mike.sufficient;
                        tango['isEligibleForMonetization'] = verify;
                        verify = mike.size;
                        tango['hasSufficientMembers'] = verify;
                        verify = mike.mfa;
                        tango['hasEnabled2FA'] = verify;
                        verify = mike.age;
                        tango['meetsServerAgeRequirement'] = verify;
                        verify = mike.owner_age;
                        tango['meetsOwnerAgeRequirement'] = verify;
                        verify = mike.safe_environment;
                        tango['noRecentViolations'] = verify;
                        verify = mike.engagement_healthy;
                        tango['weeklyCommunicators'] = verify;
                        verify = mike.retention_healthy;
                        tango['hasMemberRetention'] = verify;
                        verify = global;
                        sizing = verify.Object;
                        kilo = sizing.keys;
                        verify = mike.nsfw_properties;
                        verify = kilo.bind(sizing)(verify);
                        kilo = verify.length;
                        verify = 0;
                        verify = verify === kilo;
                        tango['notNSFW'] = verify;
                        verify = mike.can_apply;
                        tango['canApply'] = verify;
                        kilo = mike.latest_request;
                        foxtrot = kilo;
                        verify = null;
                        sizing = verify == kilo;
                        kilo = undefined;
                        if(sizing) { _fun126868_ip = 285; continue _fun126868 }
 280:
                        kilo = foxtrot.state;
 285:
                        foxtrot = _closure1_slot6;
                        foxtrot = foxtrot.OPEN;
                        foxtrot = kilo === foxtrot;
                        tango['isApplicationPending'] = foxtrot;
                        foxtrot = golf;
                        foxtrot = foxtrot.latest_request;
                        backup = foxtrot;
                        kilo = verify == foxtrot;
                        foxtrot = undefined;
                        if(kilo) { _fun126868_ip = 330; continue _fun126868 }
 325:
                        foxtrot = backup.state;
 330:
                        offset = _closure1_slot6;
                        offset = offset.ACTION_REQUIRED;
                        offset = foxtrot === offset;
                        tango['actionRequired'] = offset;
                        offset = golf;
                        foxtrot = offset.minimum_age_in_days;
                        tango['minimumAgeInDays'] = foxtrot;
                        foxtrot = offset.minimum_owner_age_in_years;
                        tango['minimumOwnerAgeInYears'] = foxtrot;
                        foxtrot = offset.minimum_size;
                        tango['minimumSize'] = foxtrot;
                        foxtrot = offset.latest_request;
                        tango['latestRequest'] = foxtrot;
                        foxtrot = offset.rejection;
                        tango['rejection'] = foxtrot;
                        offset = offset.health_score;
                        romeo = offset;
                        foxtrot = verify == offset;
                        offset = undefined;
                        if(foxtrot) { _fun126868_ip = 439; continue _fun126868 }
 433:
                        offset = romeo.guild_size;
 439:
                        tango['guildMemberCount'] = offset;
                        offset = golf;
                        offset = offset.health_score;
                        yankee = offset;
                        romeo = verify == offset;
                        offset = undefined;
                        if(romeo) { _fun126868_ip = 473; continue _fun126868 }
 465:
                        offset = yankee.communicators;
 473:
                        tango['communicatorCount'] = offset;
                        golf = golf.health_score;
                        options = golf;
                        verify = verify == golf;
                        golf = undefined;
                        if(verify) { _fun126868_ip = 506; continue _fun126868 }
 498:
                        golf = options.perc_ret_w1;
 506:
                        tango['retentionScore'] = golf;
                        tango = oscar.bind(report)(tango);
 518: // try_end0
                        _fun126868_ip = 591; continue _fun126868;
 520: // try_end1
                        oscar = _closure2_slot1;
                        tango = false;
                        tango = oscar.bind(report)(tango);
                        return mike;
 534: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=6);
                        tango = _closure2_slot2;
                        oscar = _closure1_slot0;
                        options = _closure1_slot2;
                        mike = 5;
                        mike = options[mike];
                        mike = oscar.bind(report)(mike);
                        oscar = mike.prototype;
                        oscar = Object.create(oscar, {constructor: {value: mike}});
                        result = oscar;
                        output = golf;
                        mike = new result[mike](output, sizing);
                        mike = mike instanceof Object ? mike : oscar;
                        mike = tango.bind(report)(mike);
 591: // try_end2
                        tango = _closure2_slot1;
                        mike = false;
                        mike = tango.bind(report)(mike);
                        return report;
 605: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=1);
                        tango = _closure2_slot1;
                        zulu = false;
                        zulu = tango.bind(report)(zulu);
                        throw mike;
 620:
                        return entity;
                    }
                };
                return entity;
            };
            mike = tango.bind(zulu)(mike);
            var _closure3_slot0 = mike;
            entity = function() {
                entity = undefined;
                tango = _closure3_slot0;
                zulu = tango.apply;
                entity = arguments;
                mike = entity;
                entity = this;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            return entity;
        };
        oscar = entity.bind(oscar)();
        entity = new Array(0);
        oscar = verify.bind(report)(oscar, entity);
        var _closure2_slot4 = oscar;
        entity = {};
        entity['error'] = options;
        entity['loading'] = tango;
        entity['eligibility'] = zulu;
        tango = report.useCallback;
        zulu = new Array(2);
        zulu[0] = golf;
        zulu[1] = oscar;
        mike = function() {
            _fun126870: for(var _fun126870_ip = 0; ; ) switch(_fun126870_ip) {
 0:
                zulu = _closure2_slot0;
                mike = null;
                if(!(mike != zulu)) { _fun126870_ip = 28; continue _fun126870 }
 13:
                zulu = _closure2_slot4;
                mike = _closure2_slot0;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
 28:
                entity = undefined;
                return entity;
            }
        };
        mike = tango.bind(report)(mike, zulu);
        entity['refresh'] = mike;
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();