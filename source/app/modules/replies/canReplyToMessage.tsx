// app/modules/replies/canReplyToMessage.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: hasReplyPermission
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            report = argBaz;
            entity = zulu.isPrivate;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 71; continue _fun00001 }
 19:
            tango = report.can;
            entity = _closure1_slot7;
            entity = entity.SEND_MESSAGES;
            entity = tango.bind(report)(entity, zulu);
            if(!entity) { _fun00002_ip = 69; continue _fun00001 }
 47:
            tango = report.can;
            mike = _closure1_slot7;
            mike = mike.READ_MESSAGE_HISTORY;
            entity = tango.bind(report)(mike, zulu);
 69:
            _fun00002_ip = 84; continue _fun00001;
 71:
            mike = zulu.isSystemDM;
            mike = mike.bind(zulu)();
            entity = !mike;
 84:
            if(!entity) { _fun00002_ip = 142; continue _fun00001 }
 87:
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 5;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            mike = mike.MessageTypesSets;
            tango = mike.REPLYABLE;
            zulu = tango.has;
            mike = argBar;
            mike = mike.type;
            entity = zulu.bind(tango)(mike);
 142:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: _canReplyToMessage
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscar = argFoo;
            tango = argBar;
            entity = argBaz;
            report = argGrault;
            golf = tango.hasFlag;
            zulu = _closure1_slot5;
            zulu = zulu.EPHEMERAL;
            zulu = golf.bind(tango)(zulu);
            tango = tango.state;
            mike = _closure1_slot6;
            mike = mike.SENT;
            tango = tango === mike;
            mike = oscar.isArchivedThread;
            mike = mike.bind(oscar)();
            mike = !mike;
            if(mike) { _fun00004_ip = 74; continue _fun00003 }
 71:
            mike = report;
 74:
            if(!entity) { _fun00004_ip = 80; continue _fun00003 }
 77:
            entity = tango;
 80:
            if(!entity) { _fun00004_ip = 86; continue _fun00003 }
 83:
            entity = !zulu;
 86:
            if(!entity) { _fun00004_ip = 95; continue _fun00003 }
 89:
            zulu = argCorge;
            entity = !zulu;
 95:
            if(!entity) { _fun00004_ip = 101; continue _fun00003 }
 98:
            entity = mike;
 101:
            return entity;
        }
    };
    var _closure1_slot9 = entity;
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
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.MessageFlags;
    var _closure1_slot5 = golf;
    tango = tango.MessageStates;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Permissions;
    var _closure1_slot7 = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/replies/canReplyToMessage.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar) { // Original name: useCanReplyToMessage
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            options = argFoo;
            golf = argBar;
            var _closure2_slot0 = options;
            var _closure2_slot1 = golf;
            tango = _closure1_slot0;
            verify = _closure1_slot1;
            zulu = 6;
            zulu = verify[zulu];
            oscar = undefined;
            report = tango.bind(oscar)(zulu);
            zulu = report.useCanUnarchiveThread;
            report = zulu.bind(report)(options);
            zulu = 7;
            zulu = verify[zulu];
            offset = tango.bind(oscar)(zulu);
            tango = offset.useCurrentUserCommunicationDisabled;
            verify = null;
            zulu = verify == options;
            yankee = undefined;
            if(zulu) { _fun00006_ip = 91; continue _fun00005 }
 81:
            zulu = options.getGuildId;
            yankee = zulu.bind(options)();
 91:
            romeo = verify != yankee;
            zulu = undefined;
            if(!romeo) { _fun00006_ip = 103; continue _fun00005 }
 100:
            zulu = yankee;
 103:
            offset = tango.bind(offset)(zulu);
            tango = _closure1_slot2;
            zulu = 2;
            tango = tango.bind(oscar)(offset, zulu);
            zulu = 1;
            tango = tango[zulu];
            offset = _closure1_slot0;
            yankee = _closure1_slot1;
            zulu = 8;
            zulu = yankee[zulu];
            yankee = offset.bind(oscar)(zulu);
            offset = yankee.useStateFromStores;
            romeo = _closure1_slot3;
            zulu = new Array(1);
            zulu[0] = romeo;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = _closure2_slot0;
                    tango = null;
                    entity = tango != entity;
                    if(!entity) { _fun00008_ip = 24; continue _fun00007 }
 16:
                    mike = _closure2_slot1;
                    entity = tango != mike;
 24:
                    if(!entity) { _fun00008_ip = 55; continue _fun00007 }
 27:
                    oscar = _closure1_slot8;
                    report = _closure2_slot0;
                    tango = _closure2_slot1;
                    zulu = _closure1_slot3;
                    mike = undefined;
                    entity = oscar.bind(mike)(report, tango, zulu);
 55:
                    return entity;
                }
            };
            zulu = offset.bind(yankee)(zulu, entity);
            entity = verify != options;
            if(!entity) { _fun00006_ip = 189; continue _fun00005 }
 185:
            entity = verify != golf;
 189:
            if(!entity) { _fun00006_ip = 217; continue _fun00005 }
 192:
            mike = _closure1_slot9;
            result = undefined;
            output = options;
            sizing = golf;
            kilo = zulu;
            backup = tango;
            foxtrot = report;
            entity = result[mike](output, sizing, kilo, backup, foxtrot, romeo);
 217:
            return entity;
        }
    };
    zulu['useCanReplyToMessage'] = tango;
    mike = function(argFoo, argBar) { // Original name: canReplyToMessage
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            golf = argFoo;
            oscar = argBar;
            options = _closure1_slot0;
            verify = _closure1_slot1;
            mike = 6;
            mike = verify[mike];
            report = undefined;
            zulu = options.bind(report)(mike);
            mike = zulu.canUnarchiveThread;
            tango = mike.bind(zulu)(golf);
            zulu = _closure1_slot8;
            mike = _closure1_slot3;
            zulu = zulu.bind(report)(golf, oscar, mike);
            offset = _closure1_slot4;
            mike = offset.getCurrentUser;
            yankee = mike.bind(offset)();
            mike = 7;
            mike = verify[mike];
            offset = options.bind(report)(mike);
            verify = offset.userCommunicationDisabled;
            mike = null;
            romeo = mike == yankee;
            options = undefined;
            if(romeo) { _fun00010_ip = 104; continue _fun00009 }
 99:
            options = yankee.id;
 104:
            yankee = golf.getGuildId;
            yankee = yankee.bind(golf)();
            romeo = mike != yankee;
            mike = undefined;
            if(!romeo) { _fun00010_ip = 126; continue _fun00009 }
 123:
            mike = yankee;
 126:
            verify = verify.bind(offset)(options, mike);
            mike = _closure1_slot9;
            options = _closure1_slot2;
            entity = 2;
            options = options.bind(report)(verify, entity);
            entity = 1;
            backup = options[entity];
            result = undefined;
            output = golf;
            sizing = oscar;
            kilo = zulu;
            foxtrot = tango;
            entity = result[mike](output, sizing, kilo, backup, foxtrot, romeo);
            return entity;
        }
    };
    zulu['canReplyToMessage'] = mike;
    return entity;
})();