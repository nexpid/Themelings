// app/modules/messages/native/renderer/system_messages/ChannelLinkedToLobbySystemMessage.tsx
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
    tango = tango.HelpdeskArticles;
    var _closure1_slot4 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/native/renderer/system_messages/ChannelLinkedToLobbySystemMessage.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: createChannelLinkedToLobbySystemMessage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            golf = report.message;
            romeo = report.roleStyle;
            mike = report.theme;
            oscar = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 2;
            entity = tango[entity];
            tango = undefined;
            entity = oscar.bind(tango)(entity);
            verify = entity.bind(tango)(mike);
            options = golf.author;
            offset = _closure1_slot3;
            oscar = offset.getApplication;
            yankee = golf.applicationId;
            entity = null;
            foxtrot = entity != yankee;
            mike = '';
            if(!foxtrot) { _fun00002_ip = 87; continue _fun00001 }
 84:
            mike = yankee;
 87:
            mike = oscar.bind(offset)(mike);
            if(!(entity != mike)) { _fun00002_ip = 447; continue _fun00001 }
 99:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            oscar = 3;
            oscar = yankee[oscar];
            offset = offset.bind(tango)(oscar);
            oscar = offset.getMessageAuthorWithProcessedColor;
            offset = oscar.bind(offset)(golf);
            oscar = offset.nick;
            yankee = offset.colorString;
            offset = {};
            offset['username'] = oscar;
            oscar = {};
            foxtrot = 'bindUserMenu';
            oscar['action'] = foxtrot;
            options = options.id;
            oscar['userId'] = options;
            oscar['colorString'] = yankee;
            foxtrot = 'username';
            options = null;
            if(!(foxtrot === romeo)) { _fun00002_ip = 187; continue _fun00001 }
 184:
            options = yankee;
 187:
            if(!(entity == options)) { _fun00002_ip = 197; continue _fun00001 }
 191:
            options = verify.defaultUsernameColor;
 197:
            oscar['linkColor'] = options;
            oscar['roleColor'] = yankee;
            options = 'dot';
            options = options === romeo;
            if(!options) { _fun00002_ip = 222; continue _fun00001 }
 218:
            options = entity != yankee;
 222:
            oscar['shouldShowRoleDot'] = options;
            golf = golf.channel_id;
            oscar['messageChannelId'] = golf;
            options = true;
            oscar['medium'] = options;
            offset['usernameOnClick'] = oscar;
            mike = mike.name;
            offset['applicationName'] = mike;
            mike = {};
            oscar = verify.defaultUsernameColor;
            mike['linkColor'] = oscar;
            mike['medium'] = options;
            offset['applicationNameOnClick'] = mike;
            mike = {};
            oscar = 'bindOpenUrl';
            mike['action'] = oscar;
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            yankee = 4;
            yankee = golf[yankee];
            foxtrot = oscar.bind(tango)(yankee);
            romeo = foxtrot.getArticleURL;
            yankee = _closure1_slot4;
            yankee = yankee.LINKED_LOBBIES;
            yankee = romeo.bind(foxtrot)(yankee);
            mike['url'] = yankee;
            verify = verify.linkColor;
            mike['linkColor'] = verify;
            mike['medium'] = options;
            offset['urlOnClick'] = mike;
            mike = {};
            yankee = _closure1_slot0;
            zulu = 5;
            options = golf[zulu];
            options = yankee.bind(tango)(options);
            verify = options.intl;
            options = verify.formatToParts;
            zulu = golf[zulu];
            zulu = yankee.bind(tango)(zulu);
            zulu = zulu.t;
            zulu = zulu.gZfhOz;
            zulu = options.bind(verify)(zulu, offset);
            mike['content'] = zulu;
            zulu = 6;
            zulu = golf[zulu];
            zulu = oscar.bind(tango)(zulu);
            backup = zulu.bind(tango)(report);
            kilo = mike;
            zulu = copyDataProperties(kilo, backup);
            return mike;
 447:
            return entity;
        }
    };
    zulu['createChannelLinkedToLobbySystemMessage'] = mike;
    return entity;
})();