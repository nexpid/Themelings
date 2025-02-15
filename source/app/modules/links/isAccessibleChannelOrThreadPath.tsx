// app/modules/links/isAccessibleChannelOrThreadPath.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _isAccessibleChannelOrThreadPath
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun81293: for(var _fun81293_ip = 0; ; ) switch(_fun81293_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun81293_ip = 749; continue _fun81293 }
 13:
                    oscar = mike.guildId;
                    foxtrot = mike.channelId;
                    golf = undefined;
                    SaveGenerator(address=29);
 27:
                    return golf;
 29:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun81293_ip = 746; continue _fun81293 }
 38:
                    report = _closure1_slot7;
                    tango = report.getGuild;
                    verify = tango.bind(report)(oscar);
                    report = _closure1_slot7;
                    tango = report.getRoles;
                    report = tango.bind(report)(oscar);
                    tango = null;
                    if(!(tango == verify)) { _fun81293_ip = 87; continue _fun81293 }
 76:
                    options = _closure1_slot9;
                    if(!(oscar === options)) { _fun81293_ip = 741; continue _fun81293 }
 87:
                    if(!(tango != foxtrot)) { _fun81293_ip = 736; continue _fun81293 }
 94:
                    options = _closure1_slot10;
                    options = options.bind(golf)(foxtrot);
                    if(!options) { _fun81293_ip = 293; continue _fun81293 }
 109:
                    options = _closure1_slot11;
                    options = options.ROLE_SUBSCRIPTIONS;
                    if(!(options !== foxtrot)) { _fun81293_ip = 701; continue _fun81293 }
 126:
                    options = _closure1_slot11;
                    options = options.GUILD_SHOP;
                    if(!(options !== foxtrot)) { _fun81293_ip = 666; continue _fun81293 }
 143:
                    options = _closure1_slot11;
                    options = options.MEMBER_APPLICATIONS;
                    if(!(options !== foxtrot)) { _fun81293_ip = 632; continue _fun81293 }
 160:
                    options = _closure1_slot11;
                    options = options.GUILD_HOME;
                    if(!(options !== foxtrot)) { _fun81293_ip = 598; continue _fun81293 }
 177:
                    options = _closure1_slot11;
                    options = options.CHANNEL_BROWSER;
                    if(!(options !== foxtrot)) { _fun81293_ip = 567; continue _fun81293 }
 194:
                    options = _closure1_slot11;
                    options = options.GUILD_ONBOARDING;
                    if(!(options !== foxtrot)) { _fun81293_ip = 549; continue _fun81293 }
 211:
                    options = _closure1_slot11;
                    options = options.CUSTOMIZE_COMMUNITY;
                    if(!(options !== foxtrot)) { _fun81293_ip = 518; continue _fun81293 }
 228:
                    options = _closure1_slot11;
                    options = options.MEMBER_SAFETY;
                    if(!(options !== foxtrot)) { _fun81293_ip = 484; continue _fun81293 }
 245:
                    options = _closure1_slot11;
                    options = options.GUILD_BOOSTS;
                    if(!(options !== foxtrot)) { _fun81293_ip = 443; continue _fun81293 }
 262:
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    options = 13;
                    options = yankee[options];
                    offset = offset.bind(golf)(options);
                    options = offset.assertNever;
                    options = options.bind(offset)(foxtrot);
 293:
                    offset = _closure1_slot6;
                    options = offset.getChannel;
                    offset = options.bind(offset)(foxtrot);
                    options = tango != offset;
                    romeo = offset;
                    if(options) { _fun81293_ip = 384; continue _fun81293 }
 317:
                    yankee = _closure1_slot1;
                    backup = _closure1_slot2;
                    offset = 14;
                    offset = backup[offset];
                    yankee = yankee.bind(golf)(offset);
                    offset = yankee.loadThread;
                    offset = offset.bind(yankee)(foxtrot);
                    SaveGenerator(address=352);
 350:
                    return offset;
 352:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=10);
                    if(yankee) { _fun81293_ip = 381; continue _fun81293 }
 358:
                    backup = _closure1_slot6;
                    yankee = backup.getChannel;
                    yankee = yankee.bind(backup)(foxtrot);
                    options = tango != yankee;
                    romeo = yankee;
                    _fun81293_ip = 384; continue _fun81293;
 381:
                    return offset;
 384:
                    if(!options) { _fun81293_ip = 440; continue _fun81293 }
 387:
                    yankee = _closure1_slot0;
                    backup = _closure1_slot2;
                    offset = 15;
                    offset = backup[offset];
                    yankee = yankee.bind(golf)(offset);
                    offset = yankee.canViewChannel;
                    offset = offset.bind(yankee)(romeo);
                    if(offset) { _fun81293_ip = 437; continue _fun81293 }
 421:
                    romeo = _closure1_slot4;
                    yankee = romeo.isChannelGatedAndVisible;
                    offset = yankee.bind(romeo)(oscar, foxtrot);
 437:
                    options = offset;
 440:
                    return options;
 443:
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    options = 12;
                    options = yankee[options];
                    yankee = offset.bind(golf)(options);
                    offset = yankee.getGuildPowerupsExperimentEnabled;
                    options = 'isAccessibleChannelOrThread';
                    options = offset.bind(yankee)(verify, options);
                    return options;
 484:
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    options = 11;
                    options = yankee[options];
                    offset = offset.bind(golf)(options);
                    options = offset.canAccessMemberSafetyPage;
                    options = options.bind(offset)(oscar);
                    return options;
 518:
                    options = tango != verify;
                    if(!options) { _fun81293_ip = 546; continue _fun81293 }
 525:
                    yankee = verify.hasFeature;
                    offset = _closure1_slot8;
                    offset = offset.COMMUNITY;
                    options = yankee.bind(verify)(offset);
 546:
                    return options;
 549:
                    offset = _closure1_slot5;
                    options = offset.shouldShowOnboarding;
                    options = options.bind(offset)(oscar);
                    return options;
 567:
                    tango = tango != verify;
                    if(!tango) { _fun81293_ip = 595; continue _fun81293 }
 574:
                    offset = verify.hasFeature;
                    options = _closure1_slot8;
                    options = options.COMMUNITY;
                    tango = offset.bind(verify)(options);
 595:
                    return tango;
 598:
                    options = _closure1_slot0;
                    offset = _closure1_slot2;
                    tango = 10;
                    tango = offset[tango];
                    options = options.bind(golf)(tango);
                    tango = options.canSeeOnboardingHome;
                    tango = tango.bind(options)(oscar);
                    return tango;
 632:
                    options = _closure1_slot0;
                    offset = _closure1_slot2;
                    tango = 9;
                    tango = offset[tango];
                    options = options.bind(golf)(tango);
                    tango = options.canReviewGuildMemberApplications;
                    tango = tango.bind(options)(oscar);
                    return tango;
 666:
                    options = _closure1_slot0;
                    offset = _closure1_slot2;
                    tango = 8;
                    tango = offset[tango];
                    options = options.bind(golf)(tango);
                    tango = options.isGuildShopVisibleInGuild;
                    tango = tango.bind(options)(verify, report);
                    return tango;
 701:
                    tango = _closure1_slot0;
                    options = _closure1_slot2;
                    zulu = 7;
                    zulu = options[zulu];
                    tango = tango.bind(golf)(zulu);
                    zulu = tango.areRoleSubscriptionsVisibleInGuild;
                    zulu = zulu.bind(tango)(oscar, report);
                    return zulu;
 736:
                    zulu = true;
                    return zulu;
 741:
                    zulu = false;
                    return zulu;
 746:
                    return mike;
 749:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot12 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
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
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.GuildFeatures;
    var _closure1_slot8 = golf;
    tango = tango.ME;
    var _closure1_slot9 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.isStaticChannelRoute;
    var _closure1_slot10 = golf;
    tango = tango.StaticChannelRoute;
    var _closure1_slot11 = tango;
    tango = 16;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/links/isAccessibleChannelOrThreadPath.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: isAccessibleChannelOrThreadPath
        entity = undefined;
        tango = _closure1_slot12;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();