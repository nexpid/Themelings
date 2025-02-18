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
    tangon = 7;
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
            if(!(entity != michal)) { _fun00002_ip = 447; continue _fun00001 }
 99:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            oscard = 3;
            oscard = yankee[oscard];
            offset = offset.bind(tangon)(oscard);
            oscard = offset.getMessageAuthorWithProcessedColor;
            offset = oscard.bind(offset)(golfie);
            oscard = offset.nick;
            yankee = offset.colorString;
            offset = {};
            offset['username'] = oscard;
            oscard = {};
            foxtra = 'bindUserMenu';
            oscard['action'] = foxtra;
            option = option.id;
            oscard['userId'] = option;
            oscard['colorString'] = yankee;
            foxtra = 'username';
            option = null;
            if(!(foxtra === romeon)) { _fun00002_ip = 187; continue _fun00001 }
 184:
            option = yankee;
 187:
            if(!(entity == option)) { _fun00002_ip = 197; continue _fun00001 }
 191:
            option = verify.defaultUsernameColor;
 197:
            oscard['linkColor'] = option;
            oscard['roleColor'] = yankee;
            option = 'dot';
            option = option === romeon;
            if(!option) { _fun00002_ip = 222; continue _fun00001 }
 218:
            option = entity != yankee;
 222:
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
            yankee = 4;
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
            zuuluu = 5;
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
            zuuluu = 6;
            zuuluu = golfie[zuuluu];
            zuuluu = oscard.bind(tangon)(zuuluu);
            backup = zuuluu.bind(tangon)(report);
            kiloes = michal;
            zuuluu = copyDataProperties(kiloes, backup);
            return michal;
 447:
            return entity;
        }
    };
    zuuluu['createChannelLinkedToLobbySystemMessage'] = michal;
    return entity;
})();