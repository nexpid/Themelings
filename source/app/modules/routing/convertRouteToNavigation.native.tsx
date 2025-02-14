// app/modules/routing/convertRouteToNavigation.native.tsx
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
    tango = tango.Routes;
    var _closure1_slot4 = tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/routing/convertRouteToNavigation.native.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: convertRouteToNavigation
        _fun110170: for(var _fun110170_ip = 0; ; ) switch(_fun110170_ip) {
 0:
            golf = argFoo;
            romeo = golf.pathname;
            zulu = _closure1_slot0;
            entity = _closure1_slot2;
            foxtrot = 2;
            entity = entity[foxtrot];
            report = undefined;
            zulu = zulu.bind(report)(entity);
            entity = zulu.getRootNavigationRef;
            backup = entity.bind(zulu)();
            oscar = null;
            if(!(oscar != backup)) { _fun110170_ip = 1544; continue _fun110170 }
 53:
            entity = backup.isReady;
            entity = entity.bind(backup)();
            if(!entity) { _fun110170_ip = 1544; continue _fun110170 }
 69:
            tango = golf.navigationReplace;
            entity = _closure1_slot4;
            entity = entity.NOTIFICATIONS;
            if(!(romeo !== entity)) { _fun110170_ip = 1418; continue _fun110170 }
 92:
            zulu = romeo.startsWith;
            entity = '/channels/';
            entity = zulu.bind(romeo)(entity);
            if(!entity) { _fun110170_ip = 472; continue _fun110170 }
 115:
            kilo = _closure1_slot0;
            yankee = _closure1_slot2;
            options = 5;
            entity = yankee[options];
            offset = kilo.bind(report)(entity);
            verify = offset.matchPath;
            zulu = {};
            update = _closure1_slot4;
            result = update.CHANNEL;
            echo = 6;
            entity = yankee[echo];
            entity = kilo.bind(report)(entity);
            sizing = entity.RouteParam;
            entity = sizing.guildId;
            output = entity.bind(sizing)();
            entity = yankee[echo];
            entity = kilo.bind(report)(entity);
            control = entity.RouteParam;
            source = control.channelId;
            sizing = {};
            entity = true;
            sizing['optional'] = entity;
            sizing = source.bind(control)(sizing);
            output = result.bind(update)(output, sizing);
            result = update.VOICE_CHAT_CHANNEL_PARTIAL;
            sizing = yankee[echo];
            sizing = kilo.bind(report)(sizing);
            control = sizing.RouteParam;
            source = control.guildId;
            sizing = {};
            vacuum = 'voiceGuildId';
            sizing['name'] = vacuum;
            sizing = source.bind(control)(sizing);
            yankee = yankee[echo];
            yankee = kilo.bind(report)(yankee);
            source = yankee.RouteParam;
            kilo = source.channelId;
            yankee = {};
            control = 'voiceChannelId';
            yankee['name'] = control;
            kilo = kilo.bind(source)(yankee);
            yankee = ':voiceMessageId?';
            sizing = result.bind(update)(sizing, kilo, yankee);
            yankee = global;
            yankee = yankee.HermesInternal;
            kilo = yankee.concat;
            yankee = '';
            yankee = kilo.bind(yankee)(output, sizing);
            zulu['path'] = yankee;
            zulu = verify.bind(offset)(romeo, zulu);
            if(!(oscar == zulu)) { _fun110170_ip = 1309; continue _fun110170 }
 350:
            kilo = _closure1_slot0;
            yankee = _closure1_slot2;
            options = yankee[options];
            offset = kilo.bind(report)(options);
            verify = offset.matchPath;
            options = {};
            result = _closure1_slot4;
            output = result.CHANNEL;
            sizing = yankee[echo];
            sizing = kilo.bind(report)(sizing);
            update = sizing.RouteParam;
            sizing = update.guildId;
            sizing = sizing.bind(update)();
            yankee = yankee[echo];
            yankee = kilo.bind(report)(yankee);
            echo = yankee.RouteParam;
            kilo = echo.channelId;
            yankee = {};
            yankee['optional'] = entity;
            kilo = kilo.bind(echo)(yankee);
            yankee = ':messageId?';
            yankee = output.bind(result)(sizing, kilo, yankee);
            options['path'] = yankee;
            options = verify.bind(offset)(romeo, options);
            if(!(oscar == options)) { _fun110170_ip = 783; continue _fun110170 }
 472:
            offset = romeo.startsWith;
            verify = '/member-verification/';
            verify = offset.bind(romeo)(verify);
            if(verify) { _fun110170_ip = 639; continue _fun110170 }
 495:
            offset = romeo.startsWith;
            verify = _closure1_slot4;
            verify = verify.LOGIN;
            verify = offset.bind(romeo)(verify);
            if(verify) { _fun110170_ip = 605; continue _fun110170 }
 519:
            offset = romeo.startsWith;
            verify = _closure1_slot4;
            verify = verify.REGISTER;
            verify = offset.bind(romeo)(verify);
            if(verify) { _fun110170_ip = 605; continue _fun110170 }
 543:
            offset = romeo.startsWith;
            verify = _closure1_slot4;
            verify = verify.ACCOUNT_STANDING;
            verify = offset.bind(romeo)(verify);
            offset = !verify;
            verify = !offset;
            if(offset) { _fun110170_ip = 603; continue _fun110170 }
 573:
            yankee = backup.navigate;
            offset = {};
            kilo = 'account-standing';
            offset['name'] = kilo;
            offset['params'] = report;
            offset = yankee.bind(backup)(offset);
            verify = true;
 603:
            _fun110170_ip = 637; continue _fun110170;
 605:
            yankee = _closure1_slot0;
            kilo = _closure1_slot2;
            offset = 4;
            offset = kilo[offset];
            yankee = yankee.bind(report)(offset);
            offset = yankee.resetToAuthRoute;
            offset = offset.bind(yankee)();
            verify = true;
 637:
            return verify;
 639:
            result = _closure1_slot0;
            echo = _closure1_slot2;
            verify = 5;
            verify = echo[verify];
            yankee = result.bind(report)(verify);
            offset = yankee.matchPath;
            verify = {};
            output = _closure1_slot4;
            sizing = output.GUILD_MEMBER_VERIFICATION;
            kilo = 6;
            kilo = echo[kilo];
            kilo = result.bind(report)(kilo);
            result = kilo.RouteParam;
            kilo = result.guildId;
            kilo = kilo.bind(result)();
            kilo = sizing.bind(output)(kilo);
            verify['path'] = kilo;
            verify = offset.bind(yankee)(romeo, verify);
            if(!(oscar != verify)) { _fun110170_ip = 779; continue _fun110170 }
 724:
            yankee = _closure1_slot0;
            romeo = _closure1_slot2;
            offset = 4;
            offset = romeo[offset];
            romeo = yankee.bind(report)(offset);
            yankee = romeo.navigateToMemberVerification;
            offset = verify.params;
            offset = offset.guildId;
            verify = verify.params;
            verify = verify.inviteCode;
            verify = yankee.bind(romeo)(offset, verify);
 779:
            verify = true;
            return verify;
 783:
            options = options.params;
            verify = options.channelId;
            offset = options.guildId;
            yankee = options.messageId;
            romeo = _closure1_slot1;
            kilo = _closure1_slot2;
            options = 8;
            options = kilo[options];
            romeo = romeo.bind(report)(options);
            options = backup.getCurrentRoute;
            options = options.bind(backup)();
            romeo = romeo.bind(report)(options);
            options = _closure1_slot3;
            foxtrot = options.bind(report)(romeo, foxtrot);
            options = 0;
            romeo = foxtrot[options];
            options = 1;
            options = foxtrot[options];
            if(!(romeo === offset)) { _fun110170_ip = 873; continue _fun110170 }
 866:
            if(!(options !== verify)) { _fun110170_ip = 1307; continue _fun110170 }
 873:
            romeo = _closure1_slot0;
            foxtrot = _closure1_slot2;
            options = 9;
            options = foxtrot[options];
            romeo = romeo.bind(report)(options);
            options = romeo.getChatLayout;
            options = options.bind(romeo)();
            options = options.isChatLockedOpen;
            if(options) { _fun110170_ip = 1184; continue _fun110170 }
 915:
            if(!(oscar == verify)) { _fun110170_ip = 974; continue _fun110170 }
 919:
            romeo = _closure1_slot0;
            foxtrot = _closure1_slot2;
            options = 4;
            options = foxtrot[options];
            foxtrot = romeo.bind(report)(options);
            romeo = foxtrot.navigateToRootTab;
            options = {};
            backup = 'guilds';
            options['screen'] = backup;
            options['guildId'] = offset;
            options['channelId'] = verify;
            options['resetRoot'] = tango;
            options = romeo.bind(foxtrot)(options);
 974:
            if(!(entity === tango)) { _fun110170_ip = 994; continue _fun110170 }
 978:
            golf = golf.openChannel;
            if(!golf) { _fun110170_ip = 994; continue _fun110170 }
 987:
            if(!(oscar == verify)) { _fun110170_ip = 1127; continue _fun110170 }
 994:
            golf = false;
            if(!(golf !== tango)) { _fun110170_ip = 1055; continue _fun110170 }
 1000:
            options = _closure1_slot0;
            romeo = _closure1_slot2;
            golf = 4;
            golf = romeo[golf];
            romeo = options.bind(report)(golf);
            options = romeo.navigateToRootTab;
            golf = {};
            foxtrot = 'guilds';
            golf['screen'] = foxtrot;
            golf['guildId'] = offset;
            golf['channelId'] = verify;
            golf['resetRoot'] = tango;
            golf = options.bind(romeo)(golf);
 1055:
            golf = oscar != verify;
            if(!golf) { _fun110170_ip = 1066; continue _fun110170 }
 1062:
            golf = entity !== tango;
 1066:
            if(!golf) { _fun110170_ip = 1305; continue _fun110170 }
 1072:
            options = _closure1_slot0;
            romeo = _closure1_slot2;
            golf = 4;
            golf = romeo[golf];
            romeo = options.bind(report)(golf);
            options = romeo.navigateToChannel;
            golf = {};
            golf['channelId'] = verify;
            golf['guildId'] = offset;
            golf['messageId'] = yankee;
            golf['replaceChannelAndFixRoot'] = report;
            golf = options.bind(romeo)(golf);
            _fun110170_ip = 1305; continue _fun110170;
 1127:
            options = _closure1_slot0;
            romeo = _closure1_slot2;
            golf = 4;
            golf = romeo[golf];
            romeo = options.bind(report)(golf);
            options = romeo.navigateToChannel;
            golf = {};
            golf['channelId'] = verify;
            golf['guildId'] = offset;
            golf['messageId'] = yankee;
            golf['replaceChannelAndFixRoot'] = tango;
            golf['openChannel'] = entity;
            golf = options.bind(romeo)(golf);
            return entity;
 1184:
            if(!(oscar != verify)) { _fun110170_ip = 1250; continue _fun110170 }
 1188:
            golf = false;
            if(!(golf === tango)) { _fun110170_ip = 1250; continue _fun110170 }
 1194:
            if(!(oscar != offset)) { _fun110170_ip = 1305; continue _fun110170 }
 1198:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            oscar = 4;
            oscar = options[oscar];
            options = golf.bind(report)(oscar);
            golf = options.navigateToChannel;
            oscar = {};
            oscar['channelId'] = verify;
            oscar['guildId'] = offset;
            oscar['messageId'] = yankee;
            oscar['replaceChannelAndFixRoot'] = tango;
            oscar = golf.bind(options)(oscar);
            _fun110170_ip = 1305; continue _fun110170;
 1250:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            oscar = 4;
            oscar = options[oscar];
            options = golf.bind(report)(oscar);
            golf = options.navigateToRootTab;
            oscar = {};
            yankee = 'guilds';
            oscar['screen'] = yankee;
            oscar['guildId'] = offset;
            oscar['channelId'] = verify;
            oscar['resetRoot'] = tango;
            oscar = golf.bind(options)(oscar);
 1305:
            return entity;
 1307:
            return entity;
 1309:
            zulu = zulu.params;
            verify = zulu.voiceGuildId;
            offset = zulu.voiceChannelId;
            options = zulu.voiceMessageId;
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            zulu = 7;
            zulu = golf[zulu];
            oscar = oscar.bind(report)(zulu);
            zulu = oscar.isVoicePanelEnabled;
            zulu = zulu.bind(oscar)();
            if(zulu) { _fun110170_ip = 1416; continue _fun110170 }
 1366:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            zulu = 4;
            zulu = golf[zulu];
            golf = oscar.bind(report)(zulu);
            oscar = golf.navigateToChannel;
            zulu = {};
            zulu['channelId'] = offset;
            zulu['guildId'] = verify;
            zulu['messageId'] = options;
            zulu['replaceChannelAndFixRoot'] = tango;
            zulu = oscar.bind(golf)(zulu);
 1416:
            return entity;
 1418:
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 3;
            entity = oscar[entity];
            oscar = zulu.bind(report)(entity);
            zulu = oscar.getIsNotificationsTabMerged;
            entity = {};
            golf = 'convertRouteToNavigation';
            entity['location'] = golf;
            entity = zulu.bind(oscar)(entity);
            entity = entity.enabled;
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 4;
            mike = oscar[mike];
            zulu = zulu.bind(report)(mike);
            mike = zulu.navigateToRootTab;
            if(entity) { _fun110170_ip = 1516; continue _fun110170 }
 1493:
            entity = {};
            report = 'notifications';
            entity['screen'] = report;
            entity['resetRoot'] = tango;
            entity = mike.bind(zulu)(entity);
            _fun110170_ip = 1540; continue _fun110170;
 1516:
            entity = {'screen': 'icymi', 'icymiScreen': 'notifications-screen'};
            entity['resetRoot'] = tango;
            entity = mike.bind(zulu)(entity);
 1540:
            entity = true;
            return entity;
 1544:
            entity = true;
            return entity;
        }
    };
    zulu['convertRouteToNavigation'] = mike;
    return entity;
})();