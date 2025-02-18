// app/modules/links/isAccessibleChannelOrThreadPath.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _isAccessibleChannelOrThreadPath
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 749; continue _fun00001 }
 13:
                    oscard = michal.guildId;
                    foxtra = michal.channelId;
                    golfie = undefined;
                    SaveGenerator(address=29);
 27:
                    return golfie;
 29:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 746; continue _fun00001 }
 38:
                    report = _closure1_slot7;
                    tangon = report.getGuild;
                    verify = tangon.bind(report)(oscard);
                    report = _closure1_slot7;
                    tangon = report.getRoles;
                    report = tangon.bind(report)(oscard);
                    tangon = null;
                    if(!(tangon == verify)) { _fun00002_ip = 87; continue _fun00001 }
 76:
                    option = _closure1_slot9;
                    if(!(oscard === option)) { _fun00002_ip = 741; continue _fun00001 }
 87:
                    if(!(tangon != foxtra)) { _fun00002_ip = 736; continue _fun00001 }
 94:
                    option = _closure1_slot10;
                    option = option.bind(golfie)(foxtra);
                    if(!option) { _fun00002_ip = 293; continue _fun00001 }
 109:
                    option = _closure1_slot11;
                    option = option.ROLE_SUBSCRIPTIONS;
                    if(!(option !== foxtra)) { _fun00002_ip = 701; continue _fun00001 }
 126:
                    option = _closure1_slot11;
                    option = option.GUILD_SHOP;
                    if(!(option !== foxtra)) { _fun00002_ip = 666; continue _fun00001 }
 143:
                    option = _closure1_slot11;
                    option = option.MEMBER_APPLICATIONS;
                    if(!(option !== foxtra)) { _fun00002_ip = 632; continue _fun00001 }
 160:
                    option = _closure1_slot11;
                    option = option.GUILD_HOME;
                    if(!(option !== foxtra)) { _fun00002_ip = 598; continue _fun00001 }
 177:
                    option = _closure1_slot11;
                    option = option.CHANNEL_BROWSER;
                    if(!(option !== foxtra)) { _fun00002_ip = 567; continue _fun00001 }
 194:
                    option = _closure1_slot11;
                    option = option.GUILD_ONBOARDING;
                    if(!(option !== foxtra)) { _fun00002_ip = 549; continue _fun00001 }
 211:
                    option = _closure1_slot11;
                    option = option.CUSTOMIZE_COMMUNITY;
                    if(!(option !== foxtra)) { _fun00002_ip = 518; continue _fun00001 }
 228:
                    option = _closure1_slot11;
                    option = option.MEMBER_SAFETY;
                    if(!(option !== foxtra)) { _fun00002_ip = 484; continue _fun00001 }
 245:
                    option = _closure1_slot11;
                    option = option.GUILD_BOOSTS;
                    if(!(option !== foxtra)) { _fun00002_ip = 443; continue _fun00001 }
 262:
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    option = 13;
                    option = yankee[option];
                    offset = offset.bind(golfie)(option);
                    option = offset.assertNever;
                    option = option.bind(offset)(foxtra);
 293:
                    offset = _closure1_slot6;
                    option = offset.getChannel;
                    offset = option.bind(offset)(foxtra);
                    option = tangon != offset;
                    romeon = offset;
                    if(option) { _fun00002_ip = 384; continue _fun00001 }
 317:
                    yankee = _closure1_slot1;
                    backup = _closure1_slot2;
                    offset = 14;
                    offset = backup[offset];
                    yankee = yankee.bind(golfie)(offset);
                    offset = yankee.loadThread;
                    offset = offset.bind(yankee)(foxtra);
                    SaveGenerator(address=352);
 350:
                    return offset;
 352:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=10);
                    if(yankee) { _fun00002_ip = 381; continue _fun00001 }
 358:
                    backup = _closure1_slot6;
                    yankee = backup.getChannel;
                    yankee = yankee.bind(backup)(foxtra);
                    option = tangon != yankee;
                    romeon = yankee;
                    _fun00002_ip = 384; continue _fun00001;
 381:
                    return offset;
 384:
                    if(!option) { _fun00002_ip = 440; continue _fun00001 }
 387:
                    yankee = _closure1_slot0;
                    backup = _closure1_slot2;
                    offset = 15;
                    offset = backup[offset];
                    yankee = yankee.bind(golfie)(offset);
                    offset = yankee.canViewChannel;
                    offset = offset.bind(yankee)(romeon);
                    if(offset) { _fun00002_ip = 437; continue _fun00001 }
 421:
                    romeon = _closure1_slot4;
                    yankee = romeon.isChannelGatedAndVisible;
                    offset = yankee.bind(romeon)(oscard, foxtra);
 437:
                    option = offset;
 440:
                    return option;
 443:
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    option = 12;
                    option = yankee[option];
                    yankee = offset.bind(golfie)(option);
                    offset = yankee.getGuildPowerupsExperimentEnabled;
                    option = 'isAccessibleChannelOrThread';
                    option = offset.bind(yankee)(verify, option);
                    return option;
 484:
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    option = 11;
                    option = yankee[option];
                    offset = offset.bind(golfie)(option);
                    option = offset.canAccessMemberSafetyPage;
                    option = option.bind(offset)(oscard);
                    return option;
 518:
                    option = tangon != verify;
                    if(!option) { _fun00002_ip = 546; continue _fun00001 }
 525:
                    yankee = verify.hasFeature;
                    offset = _closure1_slot8;
                    offset = offset.COMMUNITY;
                    option = yankee.bind(verify)(offset);
 546:
                    return option;
 549:
                    offset = _closure1_slot5;
                    option = offset.shouldShowOnboarding;
                    option = option.bind(offset)(oscard);
                    return option;
 567:
                    tangon = tangon != verify;
                    if(!tangon) { _fun00002_ip = 595; continue _fun00001 }
 574:
                    offset = verify.hasFeature;
                    option = _closure1_slot8;
                    option = option.COMMUNITY;
                    tangon = offset.bind(verify)(option);
 595:
                    return tangon;
 598:
                    option = _closure1_slot0;
                    offset = _closure1_slot2;
                    tangon = 10;
                    tangon = offset[tangon];
                    option = option.bind(golfie)(tangon);
                    tangon = option.canSeeOnboardingHome;
                    tangon = tangon.bind(option)(oscard);
                    return tangon;
 632:
                    option = _closure1_slot0;
                    offset = _closure1_slot2;
                    tangon = 9;
                    tangon = offset[tangon];
                    option = option.bind(golfie)(tangon);
                    tangon = option.canReviewGuildMemberApplications;
                    tangon = tangon.bind(option)(oscard);
                    return tangon;
 666:
                    option = _closure1_slot0;
                    offset = _closure1_slot2;
                    tangon = 8;
                    tangon = offset[tangon];
                    option = option.bind(golfie)(tangon);
                    tangon = option.isGuildShopVisibleInGuild;
                    tangon = tangon.bind(option)(verify, report);
                    return tangon;
 701:
                    tangon = _closure1_slot0;
                    option = _closure1_slot2;
                    zuuluu = 7;
                    zuuluu = option[zuuluu];
                    tangon = tangon.bind(golfie)(zuuluu);
                    zuuluu = tangon.areRoleSubscriptionsVisibleInGuild;
                    zuuluu = zuuluu.bind(tangon)(oscard, report);
                    return zuuluu;
 736:
                    zuuluu = true;
                    return zuuluu;
 741:
                    zuuluu = false;
                    return zuuluu;
 746:
                    return michal;
 749:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot12 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.GuildFeatures;
    var _closure1_slot8 = golfie;
    tangon = tangon.ME;
    var _closure1_slot9 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.isStaticChannelRoute;
    var _closure1_slot10 = golfie;
    tangon = tangon.StaticChannelRoute;
    var _closure1_slot11 = tangon;
    tangon = 16;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/links/isAccessibleChannelOrThreadPath.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: isAccessibleChannelOrThreadPath
        entity = undefined;
        tangon = _closure1_slot12;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();