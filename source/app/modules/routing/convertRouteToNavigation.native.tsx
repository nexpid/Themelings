// app/modules/routing/convertRouteToNavigation.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Routes;
    var _closure1_slot4 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/routing/convertRouteToNavigation.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: convertRouteToNavigation
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = argFoo;
            romeon = golfie.pathname;
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            foxtra = 2;
            entity = entity[foxtra];
            report = undefined;
            zuuluu = zuuluu.bind(report)(entity);
            entity = zuuluu.getRootNavigationRef;
            backup = entity.bind(zuuluu)();
            oscard = null;
            if(!(oscard != backup)) { _fun00002_ip = 1544; continue _fun00001 }
 53:
            entity = backup.isReady;
            entity = entity.bind(backup)();
            if(!entity) { _fun00002_ip = 1544; continue _fun00001 }
 69:
            tangon = golfie.navigationReplace;
            entity = _closure1_slot4;
            entity = entity.NOTIFICATIONS;
            if(!(romeon !== entity)) { _fun00002_ip = 1418; continue _fun00001 }
 92:
            zuuluu = romeon.startsWith;
            entity = '/channels/';
            entity = zuuluu.bind(romeon)(entity);
            if(!entity) { _fun00002_ip = 472; continue _fun00001 }
 115:
            kiloes = _closure1_slot0;
            yankee = _closure1_slot2;
            option = 5;
            entity = yankee[option];
            offset = kiloes.bind(report)(entity);
            verify = offset.matchPath;
            zuuluu = {};
            update = _closure1_slot4;
            result = update.CHANNEL;
            echoed = 6;
            entity = yankee[echoed];
            entity = kiloes.bind(report)(entity);
            sizing = entity.RouteParam;
            entity = sizing.guildId;
            output = entity.bind(sizing)();
            entity = yankee[echoed];
            entity = kiloes.bind(report)(entity);
            ctrled = entity.RouteParam;
            source = ctrled.channelId;
            sizing = {};
            entity = true;
            sizing['optional'] = entity;
            sizing = source.bind(ctrled)(sizing);
            output = result.bind(update)(output, sizing);
            result = update.VOICE_CHAT_CHANNEL_PARTIAL;
            sizing = yankee[echoed];
            sizing = kiloes.bind(report)(sizing);
            ctrled = sizing.RouteParam;
            source = ctrled.guildId;
            sizing = {};
            vacuum = 'voiceGuildId';
            sizing['name'] = vacuum;
            sizing = source.bind(ctrled)(sizing);
            yankee = yankee[echoed];
            yankee = kiloes.bind(report)(yankee);
            source = yankee.RouteParam;
            kiloes = source.channelId;
            yankee = {};
            ctrled = 'voiceChannelId';
            yankee['name'] = ctrled;
            kiloes = kiloes.bind(source)(yankee);
            yankee = ':voiceMessageId?';
            sizing = result.bind(update)(sizing, kiloes, yankee);
            yankee = global;
            yankee = yankee.HermesInternal;
            kiloes = yankee.concat;
            yankee = '';
            yankee = kiloes.bind(yankee)(output, sizing);
            zuuluu['path'] = yankee;
            zuuluu = verify.bind(offset)(romeon, zuuluu);
            if(!(oscard == zuuluu)) { _fun00002_ip = 1309; continue _fun00001 }
 350:
            kiloes = _closure1_slot0;
            yankee = _closure1_slot2;
            option = yankee[option];
            offset = kiloes.bind(report)(option);
            verify = offset.matchPath;
            option = {};
            result = _closure1_slot4;
            output = result.CHANNEL;
            sizing = yankee[echoed];
            sizing = kiloes.bind(report)(sizing);
            update = sizing.RouteParam;
            sizing = update.guildId;
            sizing = sizing.bind(update)();
            yankee = yankee[echoed];
            yankee = kiloes.bind(report)(yankee);
            echoed = yankee.RouteParam;
            kiloes = echoed.channelId;
            yankee = {};
            yankee['optional'] = entity;
            kiloes = kiloes.bind(echoed)(yankee);
            yankee = ':messageId?';
            yankee = output.bind(result)(sizing, kiloes, yankee);
            option['path'] = yankee;
            option = verify.bind(offset)(romeon, option);
            if(!(oscard == option)) { _fun00002_ip = 783; continue _fun00001 }
 472:
            offset = romeon.startsWith;
            verify = '/member-verification/';
            verify = offset.bind(romeon)(verify);
            if(verify) { _fun00002_ip = 639; continue _fun00001 }
 495:
            offset = romeon.startsWith;
            verify = _closure1_slot4;
            verify = verify.LOGIN;
            verify = offset.bind(romeon)(verify);
            if(verify) { _fun00002_ip = 605; continue _fun00001 }
 519:
            offset = romeon.startsWith;
            verify = _closure1_slot4;
            verify = verify.REGISTER;
            verify = offset.bind(romeon)(verify);
            if(verify) { _fun00002_ip = 605; continue _fun00001 }
 543:
            offset = romeon.startsWith;
            verify = _closure1_slot4;
            verify = verify.ACCOUNT_STANDING;
            verify = offset.bind(romeon)(verify);
            offset = !verify;
            verify = !offset;
            if(offset) { _fun00002_ip = 603; continue _fun00001 }
 573:
            yankee = backup.navigate;
            offset = {};
            kiloes = 'account-standing';
            offset['name'] = kiloes;
            offset['params'] = report;
            offset = yankee.bind(backup)(offset);
            verify = true;
 603:
            _fun00002_ip = 637; continue _fun00001;
 605:
            yankee = _closure1_slot0;
            kiloes = _closure1_slot2;
            offset = 4;
            offset = kiloes[offset];
            yankee = yankee.bind(report)(offset);
            offset = yankee.resetToAuthRoute;
            offset = offset.bind(yankee)();
            verify = true;
 637:
            return verify;
 639:
            result = _closure1_slot0;
            echoed = _closure1_slot2;
            verify = 5;
            verify = echoed[verify];
            yankee = result.bind(report)(verify);
            offset = yankee.matchPath;
            verify = {};
            output = _closure1_slot4;
            sizing = output.GUILD_MEMBER_VERIFICATION;
            kiloes = 6;
            kiloes = echoed[kiloes];
            kiloes = result.bind(report)(kiloes);
            result = kiloes.RouteParam;
            kiloes = result.guildId;
            kiloes = kiloes.bind(result)();
            kiloes = sizing.bind(output)(kiloes);
            verify['path'] = kiloes;
            verify = offset.bind(yankee)(romeon, verify);
            if(!(oscard != verify)) { _fun00002_ip = 779; continue _fun00001 }
 724:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            offset = 4;
            offset = romeon[offset];
            romeon = yankee.bind(report)(offset);
            yankee = romeon.navigateToMemberVerification;
            offset = verify.params;
            offset = offset.guildId;
            verify = verify.params;
            verify = verify.inviteCode;
            verify = yankee.bind(romeon)(offset, verify);
 779:
            verify = true;
            return verify;
 783:
            option = option.params;
            verify = option.channelId;
            offset = option.guildId;
            yankee = option.messageId;
            romeon = _closure1_slot1;
            kiloes = _closure1_slot2;
            option = 8;
            option = kiloes[option];
            romeon = romeon.bind(report)(option);
            option = backup.getCurrentRoute;
            option = option.bind(backup)();
            romeon = romeon.bind(report)(option);
            option = _closure1_slot3;
            foxtra = option.bind(report)(romeon, foxtra);
            option = 0;
            romeon = foxtra[option];
            option = 1;
            option = foxtra[option];
            if(!(romeon === offset)) { _fun00002_ip = 873; continue _fun00001 }
 866:
            if(!(option !== verify)) { _fun00002_ip = 1307; continue _fun00001 }
 873:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            option = 9;
            option = foxtra[option];
            romeon = romeon.bind(report)(option);
            option = romeon.getChatLayout;
            option = option.bind(romeon)();
            option = option.isChatLockedOpen;
            if(option) { _fun00002_ip = 1184; continue _fun00001 }
 915:
            if(!(oscard == verify)) { _fun00002_ip = 974; continue _fun00001 }
 919:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            option = 4;
            option = foxtra[option];
            foxtra = romeon.bind(report)(option);
            romeon = foxtra.navigateToRootTab;
            option = {};
            backup = 'guilds';
            option['screen'] = backup;
            option['guildId'] = offset;
            option['channelId'] = verify;
            option['resetRoot'] = tangon;
            option = romeon.bind(foxtra)(option);
 974:
            if(!(entity === tangon)) { _fun00002_ip = 994; continue _fun00001 }
 978:
            golfie = golfie.openChannel;
            if(!golfie) { _fun00002_ip = 994; continue _fun00001 }
 987:
            if(!(oscard == verify)) { _fun00002_ip = 1127; continue _fun00001 }
 994:
            golfie = false;
            if(!(golfie !== tangon)) { _fun00002_ip = 1055; continue _fun00001 }
 1000:
            option = _closure1_slot0;
            romeon = _closure1_slot2;
            golfie = 4;
            golfie = romeon[golfie];
            romeon = option.bind(report)(golfie);
            option = romeon.navigateToRootTab;
            golfie = {};
            foxtra = 'guilds';
            golfie['screen'] = foxtra;
            golfie['guildId'] = offset;
            golfie['channelId'] = verify;
            golfie['resetRoot'] = tangon;
            golfie = option.bind(romeon)(golfie);
 1055:
            golfie = oscard != verify;
            if(!golfie) { _fun00002_ip = 1066; continue _fun00001 }
 1062:
            golfie = entity !== tangon;
 1066:
            if(!golfie) { _fun00002_ip = 1305; continue _fun00001 }
 1072:
            option = _closure1_slot0;
            romeon = _closure1_slot2;
            golfie = 4;
            golfie = romeon[golfie];
            romeon = option.bind(report)(golfie);
            option = romeon.navigateToChannel;
            golfie = {};
            golfie['channelId'] = verify;
            golfie['guildId'] = offset;
            golfie['messageId'] = yankee;
            golfie['replaceChannelAndFixRoot'] = report;
            golfie = option.bind(romeon)(golfie);
            _fun00002_ip = 1305; continue _fun00001;
 1127:
            option = _closure1_slot0;
            romeon = _closure1_slot2;
            golfie = 4;
            golfie = romeon[golfie];
            romeon = option.bind(report)(golfie);
            option = romeon.navigateToChannel;
            golfie = {};
            golfie['channelId'] = verify;
            golfie['guildId'] = offset;
            golfie['messageId'] = yankee;
            golfie['replaceChannelAndFixRoot'] = tangon;
            golfie['openChannel'] = entity;
            golfie = option.bind(romeon)(golfie);
            return entity;
 1184:
            if(!(oscard != verify)) { _fun00002_ip = 1250; continue _fun00001 }
 1188:
            golfie = false;
            if(!(golfie === tangon)) { _fun00002_ip = 1250; continue _fun00001 }
 1194:
            if(!(oscard != offset)) { _fun00002_ip = 1305; continue _fun00001 }
 1198:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            oscard = 4;
            oscard = option[oscard];
            option = golfie.bind(report)(oscard);
            golfie = option.navigateToChannel;
            oscard = {};
            oscard['channelId'] = verify;
            oscard['guildId'] = offset;
            oscard['messageId'] = yankee;
            oscard['replaceChannelAndFixRoot'] = tangon;
            oscard = golfie.bind(option)(oscard);
            _fun00002_ip = 1305; continue _fun00001;
 1250:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            oscard = 4;
            oscard = option[oscard];
            option = golfie.bind(report)(oscard);
            golfie = option.navigateToRootTab;
            oscard = {};
            yankee = 'guilds';
            oscard['screen'] = yankee;
            oscard['guildId'] = offset;
            oscard['channelId'] = verify;
            oscard['resetRoot'] = tangon;
            oscard = golfie.bind(option)(oscard);
 1305:
            return entity;
 1307:
            return entity;
 1309:
            zuuluu = zuuluu.params;
            verify = zuuluu.voiceGuildId;
            offset = zuuluu.voiceChannelId;
            option = zuuluu.voiceMessageId;
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 7;
            zuuluu = golfie[zuuluu];
            oscard = oscard.bind(report)(zuuluu);
            zuuluu = oscard.isVoicePanelEnabled;
            zuuluu = zuuluu.bind(oscard)();
            if(zuuluu) { _fun00002_ip = 1416; continue _fun00001 }
 1366:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 4;
            zuuluu = golfie[zuuluu];
            golfie = oscard.bind(report)(zuuluu);
            oscard = golfie.navigateToChannel;
            zuuluu = {};
            zuuluu['channelId'] = offset;
            zuuluu['guildId'] = verify;
            zuuluu['messageId'] = option;
            zuuluu['replaceChannelAndFixRoot'] = tangon;
            zuuluu = oscard.bind(golfie)(zuuluu);
 1416:
            return entity;
 1418:
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 3;
            entity = oscard[entity];
            oscard = zuuluu.bind(report)(entity);
            zuuluu = oscard.getIsNotificationsTabMerged;
            entity = {};
            golfie = 'convertRouteToNavigation';
            entity['location'] = golfie;
            entity = zuuluu.bind(oscard)(entity);
            entity = entity.enabled;
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 4;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.navigateToRootTab;
            if(entity) { _fun00002_ip = 1516; continue _fun00001 }
 1493:
            entity = {};
            report = 'notifications';
            entity['screen'] = report;
            entity['resetRoot'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            _fun00002_ip = 1540; continue _fun00001;
 1516:
            entity = {'screen': 'icymi', 'icymiScreen': 'notifications-screen'};
            entity['resetRoot'] = tangon;
            entity = michal.bind(zuuluu)(entity);
 1540:
            entity = true;
            return entity;
 1544:
            entity = true;
            return entity;
        }
    };
    zuuluu['convertRouteToNavigation'] = michal;
    return entity;
})();