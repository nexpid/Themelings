// app/modules/messages/native/renderer/system_messages/ChannelLinkedToLobbySystemMessage.tsx
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
    tangon = tangon.HelpdeskArticles;
    var _closure1_slot4 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/native/renderer/system_messages/ChannelLinkedToLobbySystemMessage.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: createChannelLinkedToLobbySystemMessage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            golfie = report.message;
            romeon = report.roleStyle;
            michal = report.theme;
            oscard = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 2;
            entity = tangon[entity];
            tangon = undefined;
            entity = oscard.bind(tangon)(entity);
            verify = entity.bind(tangon)(michal);
            option = golfie.author;
            offset = _closure1_slot3;
            oscard = offset.getApplication;
            yankee = golfie.applicationId;
            entity = null;
            foxtra = entity != yankee;
            michal = '';
            if(!foxtra) { _fun00002_ip = 87; continue _fun00001 }
 84:
            michal = yankee;
 87:
            michal = oscard.bind(offset)(michal);
            if(!(entity != michal)) { _fun00002_ip = 495; continue _fun00001 }
 99:
            backup = _closure1_slot0;
            sizing = _closure1_slot2;
            oscard = 3;
            oscard = sizing[oscard];
            offset = backup.bind(tangon)(oscard);
            oscard = offset.getMessageAuthorWithProcessedColor;
            offset = oscard.bind(offset)(golfie);
            oscard = offset.nick;
            yankee = offset.colorString;
            foxtra = offset.colorStrings;
            kiloes = offset.guildId;
            offset = 4;
            offset = sizing[offset];
            backup = backup.bind(tangon)(offset);
            offset = backup.isNativeMessageEligibleForEnhancedRoleColors;
            backup = offset.bind(backup)(kiloes, romeon);
            offset = {};
            offset['username'] = oscard;
            oscard = {};
            kiloes = 'bindUserMenu';
            oscard['action'] = kiloes;
            option = option.id;
            oscard['userId'] = option;
            oscard['colorString'] = yankee;
            kiloes = 'username';
            option = null;
            if(!(kiloes === romeon)) { _fun00002_ip = 222; continue _fun00001 }
 219:
            option = yankee;
 222:
            if(!(entity == option)) { _fun00002_ip = 232; continue _fun00001 }
 226:
            option = verify.defaultUsernameColor;
 232:
            oscard['linkColor'] = option;
            oscard['roleColor'] = yankee;
            option = null;
            if(!backup) { _fun00002_ip = 250; continue _fun00001 }
 247:
            option = foxtra;
 250:
            oscard['roleColors'] = option;
            option = 'dot';
            option = option === romeon;
            if(!option) { _fun00002_ip = 270; continue _fun00001 }
 266:
            option = entity != yankee;
 270:
            oscard['shouldShowRoleDot'] = option;
            golfie = golfie.channel_id;
            oscard['messageChannelId'] = golfie;
            option = true;
            oscard['medium'] = option;
            offset['usernameOnClick'] = oscard;
            michal = michal.name;
            offset['applicationName'] = michal;
            michal = {};
            oscard = verify.defaultUsernameColor;
            michal['linkColor'] = oscard;
            michal['medium'] = option;
            offset['applicationNameOnClick'] = michal;
            michal = {};
            oscard = 'bindOpenUrl';
            michal['action'] = oscard;
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            yankee = 5;
            yankee = golfie[yankee];
            foxtra = oscard.bind(tangon)(yankee);
            romeon = foxtra.getArticleURL;
            yankee = _closure1_slot4;
            yankee = yankee.LINKED_LOBBIES;
            yankee = romeon.bind(foxtra)(yankee);
            michal['url'] = yankee;
            verify = verify.linkColor;
            michal['linkColor'] = verify;
            michal['medium'] = option;
            offset['urlOnClick'] = michal;
            michal = {};
            yankee = _closure1_slot0;
            zuuluu = 6;
            option = golfie[zuuluu];
            option = yankee.bind(tangon)(option);
            verify = option.intl;
            option = verify.formatToParts;
            zuuluu = golfie[zuuluu];
            zuuluu = yankee.bind(tangon)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.gZfhOz;
            zuuluu = option.bind(verify)(zuuluu, offset);
            michal['content'] = zuuluu;
            zuuluu = 7;
            zuuluu = golfie[zuuluu];
            zuuluu = oscard.bind(tangon)(zuuluu);
            output = zuuluu.bind(tangon)(report);
            result = michal;
            zuuluu = copyDataProperties(result, output);
            return michal;
 495:
            return entity;
        }
    };
    zuuluu['createChannelLinkedToLobbySystemMessage'] = michal;
    return entity;
})();