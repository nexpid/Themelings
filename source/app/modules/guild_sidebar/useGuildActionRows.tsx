// app/modules/guild_sidebar/useGuildActionRows.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
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
    tango = report.bind(entity)(tango);
    tango = tango.ChannelListGuildActionRow;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildFeatures;
    var _closure1_slot5 = tango;
    tango = 16;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_sidebar/useGuildActionRows.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useGuildActionRows
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            verify = argFoo;
            var _closure2_slot0 = verify;
            zulu = _closure1_slot1;
            source = _closure1_slot2;
            tango = 3;
            tango = source[tango];
            update = undefined;
            report = zulu.bind(update)(tango);
            tango = verify.id;
            backup = report.bind(update)(tango);
            echo = _closure1_slot0;
            tango = 4;
            tango = source[tango];
            oscar = echo.bind(update)(tango);
            report = oscar.useCanReviewGuildMemberApplications;
            tango = verify.id;
            offset = report.bind(oscar)(tango);
            tango = 5;
            tango = source[tango];
            oscar = echo.bind(update)(tango);
            report = oscar.useShowRoleSubscriptionsInChannelList;
            tango = verify.id;
            yankee = report.bind(oscar)(tango);
            tango = 6;
            tango = source[tango];
            report = echo.bind(update)(tango);
            tango = report.useGuildShopVisibleInGuild;
            options = tango.bind(report)(verify);
            tango = 7;
            tango = source[tango];
            oscar = echo.bind(update)(tango);
            report = oscar.useCanSeeOnboardingHome;
            tango = verify.id;
            sizing = report.bind(oscar)(tango);
            tango = 8;
            tango = source[tango];
            golf = echo.bind(update)(tango);
            oscar = golf.useStateFromStores;
            tango = _closure1_slot3;
            report = new Array(1);
            report[0] = tango;
            romeo = verify.id;
            tango = new Array(1);
            tango[0] = romeo;
            entity = function() {
                zulu = _closure1_slot3;
                mike = zulu.getNewMemberActions;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            kilo = oscar.bind(golf)(report, entity, tango);
            entity = 9;
            entity = source[entity];
            zulu = zulu.bind(update)(entity);
            entity = verify.id;
            output = zulu.bind(update)(entity);
            entity = 10;
            entity = source[entity];
            tango = echo.bind(update)(entity);
            zulu = tango.useAllActionsCompleted;
            entity = verify.id;
            result = zulu.bind(tango)(entity);
            entity = 11;
            entity = source[entity];
            tango = echo.bind(update)(entity);
            zulu = tango.useCanAccessMemberSafetyPage;
            entity = verify.id;
            tango = zulu.bind(tango)(entity);
            entity = new Array(0);
            oscar = verify.hasFeature;
            zulu = _closure1_slot5;
            report = zulu.HUB;
            romeo = oscar.bind(verify)(report);
            oscar = verify.hasFeature;
            report = zulu.COMMUNITY;
            report = oscar.bind(verify)(report);
            oscar = 12;
            oscar = source[oscar];
            foxtrot = echo.bind(update)(oscar);
            golf = foxtrot.useShowBrowseChannelsExperiment;
            oscar = 13;
            oscar = source[oscar];
            vacuum = echo.bind(update)(oscar);
            control = vacuum.isOptInEnabledForGuild;
            oscar = verify.id;
            oscar = control.bind(vacuum)(oscar);
            oscar = !oscar;
            foxtrot = golf.bind(foxtrot)(oscar);
            oscar = verify.hasFeature;
            zulu = zulu.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY;
            golf = oscar.bind(verify)(zulu);
            zulu = 14;
            zulu = source[zulu];
            vacuum = echo.bind(update)(zulu);
            control = vacuum.useMemberVerificationRolloutEnabled;
            oscar = verify.id;
            zulu = 'Guild Sidebar';
            oscar = control.bind(vacuum)(oscar, zulu);
            zulu = 15;
            zulu = source[zulu];
            update = echo.bind(update)(zulu);
            echo = update.useGuildPowerupsExperimentEnabled;
            zulu = 'useGuildActionRow';
            zulu = echo.bind(update)(verify, zulu);
            if(!romeo) { _fun00002_ip = 490; continue _fun00001 }
 470:
            update = entity.push;
            echo = _closure1_slot4;
            echo = echo.GUILD_HUB_HEADER_OPTIONS;
            echo = update.bind(entity)(echo);
 490:
            if(result) { _fun00002_ip = 538; continue _fun00001 }
 493:
            if(!sizing) { _fun00002_ip = 538; continue _fun00001 }
 496:
            if(!output) { _fun00002_ip = 538; continue _fun00001 }
 499:
            output = null;
            if(!(output != kilo)) { _fun00002_ip = 538; continue _fun00001 }
 505:
            output = kilo.length;
            kilo = 0;
            if(!(output > kilo)) { _fun00002_ip = 538; continue _fun00001 }
 516:
            output = entity.push;
            kilo = _closure1_slot4;
            kilo = kilo.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR;
            kilo = output.bind(entity)(kilo);
            _fun00002_ip = 544; continue _fun00001;
 538:
            kilo = verify.premiumProgressBarEnabled;
 544:
            kilo = !romeo;
            if(!kilo) { _fun00002_ip = 553; continue _fun00001 }
 550:
            kilo = sizing;
 553:
            if(!kilo) { _fun00002_ip = 576; continue _fun00001 }
 556:
            sizing = entity.push;
            kilo = _closure1_slot4;
            kilo = kilo.GUILD_HOME;
            kilo = sizing.bind(entity)(kilo);
 576:
            if(!backup) { _fun00002_ip = 599; continue _fun00001 }
 579:
            kilo = entity.push;
            backup = _closure1_slot4;
            backup = backup.GUILD_SCHEDULED_EVENTS;
            backup = kilo.bind(entity)(backup);
 599:
            romeo = !romeo;
            if(!romeo) { _fun00002_ip = 608; continue _fun00001 }
 605:
            romeo = report;
 608:
            if(!romeo) { _fun00002_ip = 614; continue _fun00001 }
 611:
            romeo = foxtrot;
 614:
            if(!romeo) { _fun00002_ip = 637; continue _fun00001 }
 617:
            foxtrot = entity.push;
            romeo = _closure1_slot4;
            romeo = romeo.CHANNELS_AND_ROLES;
            romeo = foxtrot.bind(entity)(romeo);
 637:
            if(!yankee) { _fun00002_ip = 660; continue _fun00001 }
 640:
            romeo = entity.push;
            yankee = _closure1_slot4;
            yankee = yankee.GUILD_ROLE_SUBSCRIPTIONS;
            yankee = romeo.bind(entity)(yankee);
 660:
            if(!options) { _fun00002_ip = 683; continue _fun00001 }
 663:
            yankee = entity.push;
            options = _closure1_slot4;
            options = options.GUILD_SHOP;
            options = yankee.bind(entity)(options);
 683:
            options = !oscar;
            if(!options) { _fun00002_ip = 692; continue _fun00001 }
 689:
            options = offset;
 692:
            if(!options) { _fun00002_ip = 715; continue _fun00001 }
 695:
            offset = entity.push;
            options = _closure1_slot4;
            options = options.GUILD_MEMBER_APPLICATIONS;
            options = offset.bind(entity)(options);
 715:
            if(!tango) { _fun00002_ip = 757; continue _fun00001 }
 718:
            if(report) { _fun00002_ip = 724; continue _fun00001 }
 721:
            report = golf;
 724:
            if(report) { _fun00002_ip = 754; continue _fun00001 }
 727:
            if(!oscar) { _fun00002_ip = 751; continue _fun00001 }
 730:
            options = verify.hasFeature;
            golf = _closure1_slot5;
            golf = golf.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            oscar = options.bind(verify)(golf);
 751:
            report = oscar;
 754:
            tango = report;
 757:
            if(!tango) { _fun00002_ip = 780; continue _fun00001 }
 760:
            report = entity.push;
            tango = _closure1_slot4;
            tango = tango.GUILD_MOD_DASH_MEMBER_SAFETY;
            tango = report.bind(entity)(tango);
 780:
            if(!zulu) { _fun00002_ip = 803; continue _fun00001 }
 783:
            zulu = entity.push;
            mike = _closure1_slot4;
            mike = mike.GUILD_BOOSTS;
            mike = zulu.bind(entity)(mike);
 803:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();