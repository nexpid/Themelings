// app/modules/messages/native/renderer/system_messages/RemoveRecipientSystemMessage.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: RemoveSelfSystemMessage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            oscar = zulu.row;
            entity = zulu.channel;
            verify = zulu.formatProps;
            var _closure2_slot0 = verify;
            tango = undefined;
            var _closure2_slot1 = tango;
            zulu = null;
            options = zulu != entity;
            if(!options) { _fun00002_ip = 63; continue _fun00001 }
 41:
            report = _closure1_slot5;
            zulu = report.has;
            entity = entity.type;
            options = zulu.bind(report)(entity);
 63:
            _closure2_slot1 = options;
            golf = _closure1_slot3;
            report = golf.useMemo;
            zulu = new Array(2);
            zulu[0] = verify;
            zulu[1] = options;
            mike = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure2_slot1;
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    zulu = 7;
                    tango = options[zulu];
                    oscar = undefined;
                    tango = golf.bind(oscar)(tango);
                    report = tango.intl;
                    tango = report.formatToParts;
                    zulu = options[zulu];
                    zulu = golf.bind(oscar)(zulu);
                    zulu = zulu.t;
                    if(entity) { _fun00004_ip = 78; continue _fun00003 }
 60:
                    oscar = zulu.Qn5+LS;
                    entity = _closure2_slot0;
                    entity = tango.bind(report)(oscar, entity);
                    _fun00004_ip = 94; continue _fun00003;
 78:
                    zulu = zulu.uHmblp;
                    mike = _closure2_slot0;
                    entity = tango.bind(report)(zulu, mike);
 94:
                    return entity;
                }
            };
            report = report.bind(golf)(mike, zulu);
            zulu = _closure1_slot8;
            mike = _closure1_slot1;
            golf = _closure1_slot2;
            entity = 9;
            entity = golf[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            entity['row'] = oscar;
            entity['content'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo) { // Original name: RemoveOtherSystemMessage
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            oscar = entity.row;
            yankee = entity.channel;
            backup = entity.formatProps;
            var _closure2_slot0 = backup;
            offset = entity.otherUserId;
            var _closure2_slot1 = offset;
            verify = entity.roleStyle;
            var _closure2_slot2 = verify;
            tango = undefined;
            var _closure2_slot4 = tango;
            var _closure2_slot5 = tango;
            var _closure2_slot6 = tango;
            entity = oscar.message;
            kilo = entity.channel_id;
            var _closure2_slot3 = kilo;
            entity = null;
            foxtrot = entity != yankee;
            if(!foxtrot) { _fun00006_ip = 105; continue _fun00005 }
 83:
            report = _closure1_slot5;
            zulu = report.has;
            entity = yankee.type;
            foxtrot = zulu.bind(report)(entity);
 105:
            _closure2_slot4 = foxtrot;
            report = _closure1_slot0;
            golf = _closure1_slot2;
            zulu = 10;
            zulu = golf[zulu];
            output = report.bind(tango)(zulu);
            sizing = output.useStateFromStores;
            zulu = _closure1_slot7;
            romeo = new Array(1);
            romeo[0] = zulu;
            options = new Array(1);
            options[0] = offset;
            zulu = function() {
                zulu = _closure1_slot7;
                mike = zulu.getUser;
                entity = _closure2_slot1;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            options = sizing.bind(output)(romeo, zulu, options);
            zulu = 6;
            zulu = golf[zulu];
            report = report.bind(tango)(zulu);
            zulu = report.useUserAuthorWithProcessedColor;
            zulu = zulu.bind(report)(options, yankee);
            yankee = zulu.nick;
            _closure2_slot5 = yankee;
            romeo = zulu.colorString;
            _closure2_slot6 = romeo;
            options = _closure1_slot3;
            report = options.useMemo;
            zulu = new Array(7);
            zulu[0] = kilo;
            zulu[1] = backup;
            zulu[2] = foxtrot;
            zulu[3] = romeo;
            zulu[4] = yankee;
            zulu[5] = offset;
            zulu[6] = verify;
            mike = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    report = {};
                    verify = _closure2_slot0;
                    offset = report;
                    mike = copyDataProperties(offset, verify);
                    zulu = _closure2_slot5;
                    mike = 'otherUsername';
                    report[mike] = zulu;
                    zulu = {};
                    mike = 'bindUserMenu';
                    zulu['action'] = mike;
                    mike = _closure2_slot1;
                    zulu['userId'] = mike;
                    mike = _closure2_slot6;
                    zulu['otherColorString'] = mike;
                    golf = _closure2_slot2;
                    oscar = null;
                    tango = 'username';
                    mike = null;
                    if(!(tango === golf)) { _fun00008_ip = 78; continue _fun00007 }
 74:
                    mike = _closure2_slot6;
 78:
                    zulu['linkColor'] = mike;
                    mike = _closure2_slot6;
                    zulu['roleColor'] = mike;
                    tango = _closure2_slot2;
                    mike = 'dot';
                    mike = mike === tango;
                    if(!mike) { _fun00008_ip = 115; continue _fun00007 }
 107:
                    tango = _closure2_slot6;
                    mike = oscar != tango;
 115:
                    zulu['shouldShowRoleDot'] = mike;
                    mike = _closure2_slot3;
                    zulu['messageChannelId'] = mike;
                    mike = 'otherUsernameOnClick';
                    report[mike] = zulu;
                    entity = _closure2_slot4;
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    mike = 7;
                    zulu = options[mike];
                    oscar = undefined;
                    zulu = golf.bind(oscar)(zulu);
                    tango = zulu.intl;
                    zulu = tango.formatToParts;
                    mike = options[mike];
                    mike = golf.bind(oscar)(mike);
                    mike = mike.t;
                    if(entity) { _fun00008_ip = 209; continue _fun00007 }
 195:
                    entity = mike.QtZ0RE;
                    entity = zulu.bind(tango)(entity, report);
                    _fun00008_ip = 221; continue _fun00007;
 209:
                    mike = mike.KBrM5u;
                    entity = zulu.bind(tango)(mike, report);
 221:
                    return entity;
                }
            };
            report = report.bind(options)(mike, zulu);
            zulu = _closure1_slot8;
            mike = _closure1_slot1;
            entity = 9;
            entity = golf[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            entity['row'] = oscar;
            entity['content'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.THREAD_CHANNEL_TYPES;
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
    tango = tango.jsx;
    var _closure1_slot8 = tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/native/renderer/system_messages/RemoveRecipientSystemMessage.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: RemoveRecipientSystemMessage
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            options = entity.row;
            oscar = _closure1_slot0;
            yankee = _closure1_slot2;
            tango = 10;
            entity = yankee[tango];
            report = undefined;
            romeo = oscar.bind(report)(entity);
            offset = romeo.useStateFromStores;
            entity = _closure1_slot4;
            verify = new Array(1);
            verify[0] = entity;
            golf = function() {
                entity = _closure1_slot4;
                entity = entity.roleStyle;
                return entity;
            };
            entity = new Array(0);
            verify = offset.bind(romeo)(verify, golf, entity);
            var _closure2_slot0 = verify;
            entity = options.message;
            romeo = entity.author;
            var _closure2_slot1 = romeo;
            offset = entity.mentions;
            golf = 0;
            offset = offset[golf];
            kilo = entity.channel_id;
            var _closure2_slot2 = kilo;
            tango = yankee[tango];
            sizing = oscar.bind(report)(tango);
            backup = sizing.useStateFromStores;
            tango = _closure1_slot6;
            foxtrot = new Array(1);
            foxtrot[0] = tango;
            golf = new Array(1);
            golf[0] = kilo;
            tango = function() {
                zulu = _closure1_slot6;
                mike = zulu.getChannel;
                entity = _closure2_slot2;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            golf = backup.bind(sizing)(foxtrot, tango, golf);
            tango = 6;
            tango = yankee[tango];
            oscar = oscar.bind(report)(tango);
            tango = oscar.useMessageAuthorWithProcessedColor;
            tango = tango.bind(oscar)(entity);
            foxtrot = tango.nick;
            var _closure2_slot3 = foxtrot;
            backup = tango.colorString;
            var _closure2_slot4 = backup;
            yankee = _closure1_slot3;
            oscar = yankee.useMemo;
            tango = new Array(5);
            tango[0] = kilo;
            tango[1] = backup;
            tango[2] = foxtrot;
            tango[3] = verify;
            romeo = romeo.id;
            tango[4] = romeo;
            zulu = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = {};
                    mike = _closure2_slot3;
                    entity['username'] = mike;
                    mike = {};
                    tango = 'bindUserMenu';
                    mike['action'] = tango;
                    tango = _closure2_slot1;
                    tango = tango.id;
                    mike['userId'] = tango;
                    tango = _closure2_slot4;
                    mike['colorString'] = tango;
                    golf = _closure2_slot0;
                    oscar = null;
                    report = 'username';
                    tango = null;
                    if(!(report === golf)) { _fun00012_ip = 67; continue _fun00011 }
 63:
                    tango = _closure2_slot4;
 67:
                    mike['linkColor'] = tango;
                    tango = _closure2_slot4;
                    mike['roleColor'] = tango;
                    report = _closure2_slot0;
                    tango = 'dot';
                    tango = tango === report;
                    if(!tango) { _fun00012_ip = 104; continue _fun00011 }
 96:
                    report = _closure2_slot4;
                    tango = oscar != report;
 104:
                    mike['shouldShowRoleDot'] = tango;
                    zulu = _closure2_slot2;
                    mike['messageChannelId'] = zulu;
                    zulu = true;
                    mike['medium'] = zulu;
                    entity['usernameOnClick'] = mike;
                    return entity;
                }
            };
            oscar = oscar.bind(yankee)(zulu, tango);
            entity = entity.author;
            entity = entity.id;
            if(!(entity !== offset)) { _fun00010_ip = 310; continue _fun00009 }
 268:
            tango = _closure1_slot8;
            zulu = _closure1_slot10;
            entity = {};
            entity['row'] = options;
            entity['channel'] = golf;
            entity['formatProps'] = oscar;
            entity['otherUserId'] = offset;
            entity['roleStyle'] = verify;
            entity = tango.bind(report)(zulu, entity);
            _fun00010_ip = 340; continue _fun00009;
 310:
            tango = _closure1_slot8;
            zulu = _closure1_slot9;
            mike = {};
            mike['row'] = options;
            mike['channel'] = golf;
            mike['formatProps'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 340:
            return entity;
        }
    };
    zulu['default'] = tango;
    mike = function(argFoo) { // Original name: createRemoveRecipientSystemMessage
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            tango = argFoo;
            entity = tango.message;
            yankee = tango.roleStyle;
            oscar = entity.author;
            zulu = entity.mentions;
            mike = 0;
            romeo = zulu[mike];
            golf = _closure1_slot6;
            report = golf.getChannel;
            zulu = entity.channel_id;
            kilo = report.bind(golf)(zulu);
            offset = null;
            report = offset != kilo;
            if(!report) { _fun00014_ip = 82; continue _fun00013 }
 63:
            options = _closure1_slot5;
            golf = options.has;
            zulu = kilo.type;
            report = golf.bind(options)(zulu);
 82:
            options = _closure1_slot0;
            zulu = _closure1_slot2;
            sizing = 6;
            golf = zulu[sizing];
            zulu = undefined;
            options = options.bind(zulu)(golf);
            golf = options.getMessageAuthorWithProcessedColor;
            options = golf.bind(options)(entity);
            golf = options.nick;
            output = options.colorString;
            verify = {};
            verify['username'] = golf;
            options = {};
            backup = 'bindUserMenu';
            options['action'] = backup;
            golf = oscar.id;
            options['userId'] = golf;
            options['colorString'] = output;
            golf = 'username';
            foxtrot = golf === yankee;
            golf = null;
            if(!foxtrot) { _fun00014_ip = 175; continue _fun00013 }
 172:
            golf = output;
 175:
            options['linkColor'] = golf;
            options['roleColor'] = output;
            golf = 'dot';
            golf = golf === yankee;
            yankee = golf;
            if(!golf) { _fun00014_ip = 203; continue _fun00013 }
 199:
            yankee = offset != output;
 203:
            options['shouldShowRoleDot'] = yankee;
            yankee = entity.channel_id;
            options['messageChannelId'] = yankee;
            yankee = true;
            options['medium'] = yankee;
            verify['usernameOnClick'] = options;
            oscar = oscar.id;
            if(!(oscar !== romeo)) { _fun00014_ip = 497; continue _fun00013 }
 242:
            options = _closure1_slot7;
            oscar = options.getUser;
            yankee = oscar.bind(options)(romeo);
            options = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[sizing];
            options = options.bind(zulu)(oscar);
            oscar = options.getUserAuthorWithProcessedColor;
            oscar = oscar.bind(options)(yankee, kilo);
            kilo = oscar.nick;
            options = oscar.colorString;
            yankee = {};
            update = yankee;
            echo = verify;
            oscar = copyDataProperties(update, echo);
            oscar = 'otherUsername';
            yankee[oscar] = kilo;
            oscar = {};
            oscar['action'] = backup;
            oscar['userId'] = romeo;
            oscar['otherColorString'] = options;
            romeo = null;
            if(!foxtrot) { _fun00014_ip = 342; continue _fun00013 }
 339:
            romeo = options;
 342:
            oscar['linkColor'] = romeo;
            oscar['roleColor'] = options;
            if(!golf) { _fun00014_ip = 359; continue _fun00013 }
 355:
            golf = offset != options;
 359:
            oscar['shouldShowRoleDot'] = golf;
            entity = entity.channel_id;
            oscar['messageChannelId'] = entity;
            entity = 'otherUsernameOnClick';
            yankee[entity] = oscar;
            entity = {};
            golf = _closure1_slot0;
            romeo = _closure1_slot2;
            oscar = 7;
            options = romeo[oscar];
            options = golf.bind(zulu)(options);
            offset = options.intl;
            options = offset.formatToParts;
            oscar = romeo[oscar];
            oscar = golf.bind(zulu)(oscar);
            golf = oscar.t;
            if(report) { _fun00014_ip = 447; continue _fun00013 }
 433:
            oscar = golf.QtZ0RE;
            oscar = options.bind(offset)(oscar, yankee);
            _fun00014_ip = 459; continue _fun00013;
 447:
            golf = golf.KBrM5u;
            oscar = options.bind(offset)(golf, yankee);
 459:
            entity['content'] = oscar;
            golf = _closure1_slot1;
            options = _closure1_slot2;
            oscar = 8;
            oscar = options[oscar];
            oscar = golf.bind(zulu)(oscar);
            echo = oscar.bind(zulu)(tango);
            update = entity;
            oscar = copyDataProperties(update, echo);
            return entity;
 497:
            entity = {};
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            oscar = 7;
            golf = yankee[oscar];
            golf = offset.bind(zulu)(golf);
            options = golf.intl;
            golf = options.formatToParts;
            oscar = yankee[oscar];
            oscar = offset.bind(zulu)(oscar);
            oscar = oscar.t;
            if(report) { _fun00014_ip = 561; continue _fun00013 }
 547:
            report = oscar.Qn5+LS;
            report = golf.bind(options)(report, verify);
            _fun00014_ip = 573; continue _fun00013;
 561:
            oscar = oscar.uHmblp;
            report = golf.bind(options)(oscar, verify);
 573:
            entity['content'] = report;
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 8;
            mike = oscar[mike];
            mike = report.bind(zulu)(mike);
            echo = mike.bind(zulu)(tango);
            update = entity;
            mike = copyDataProperties(update, echo);
            return entity;
        }
    };
    zulu['createRemoveRecipientSystemMessage'] = mike;
    return entity;
})();