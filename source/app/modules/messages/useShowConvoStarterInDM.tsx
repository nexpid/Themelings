// app/modules/messages/useShowConvoStarterInDM.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
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
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.RelationshipTypes;
    var _closure1_slot6 = golf;
    tango = tango.UserFlags;
    var _closure1_slot7 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/useShowConvoStarterInDM.tsx';
    tango = report.bind(oscar)(tango);
    tango = 25;
    zulu['MAX_MESSAGES_ALLOWED_FOR_GREETING'] = tango;
    mike = function(argFoo) { // Original name: useShowConvoStarterInDM
        _fun100627: for(var _fun100627_ip = 0; ; ) switch(_fun100627_ip) {
 0:
            golf = argFoo;
            var _closure2_slot0 = golf;
            mike = golf.isDM;
            options = mike.bind(golf)();
            if(!options) { _fun100627_ip = 35; continue _fun100627 }
 22:
            mike = golf.isSystemDM;
            mike = mike.bind(golf)();
            options = !mike;
 35:
            if(!options) { _fun100627_ip = 65; continue _fun100627 }
 38:
            tango = golf.rawRecipients;
            zulu = tango.some;
            mike = function(argFoo) {
                entity = argFoo;
                entity = entity.bot;
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            options = !mike;
 65:
            var _closure2_slot1 = options;
            oscar = null;
            if(!options) { _fun100627_ip = 84; continue _fun100627 }
 74:
            mike = golf.getRecipientId;
            oscar = mike.bind(golf)();
 84:
            var _closure2_slot2 = oscar;
            report = _closure1_slot0;
            offset = _closure1_slot1;
            zulu = 5;
            zulu = offset[zulu];
            tango = undefined;
            yankee = report.bind(tango)(zulu);
            verify = yankee.useStrangerDangerWarning;
            zulu = golf.id;
            verify = verify.bind(yankee)(zulu);
            var _closure2_slot3 = verify;
            zulu = 6;
            zulu = offset[zulu];
            report = report.bind(tango)(zulu);
            tango = report.useStateFromStores;
            offset = _closure1_slot3;
            zulu = new Array(4);
            zulu[0] = offset;
            offset = _closure1_slot2;
            zulu[1] = offset;
            offset = _closure1_slot4;
            zulu[2] = offset;
            mike = _closure1_slot5;
            zulu[3] = mike;
            mike = new Array(4);
            mike[0] = verify;
            mike[1] = options;
            golf = golf.id;
            mike[2] = golf;
            mike[3] = oscar;
            entity = function() {
                _fun100629: for(var _fun100629_ip = 0; ; ) switch(_fun100629_ip) {
 0:
                    zulu = _closure2_slot3;
                    entity = null;
                    if(!(entity == zulu)) { _fun100629_ip = 274; continue _fun100629 }
 16:
                    zulu = _closure2_slot1;
                    if(zulu) { _fun100629_ip = 27; continue _fun100629 }
 23:
                    zulu = false;
                    return zulu;
 27:
                    oscar = _closure1_slot2;
                    report = oscar.isMessageRequest;
                    tango = _closure2_slot0;
                    tango = tango.id;
                    tango = report.bind(oscar)(tango);
                    if(tango) { _fun100629_ip = 270; continue _fun100629 }
 60:
                    tango = _closure2_slot2;
                    if(!(entity != tango)) { _fun100629_ip = 104; continue _fun100629 }
 68:
                    oscar = _closure1_slot4;
                    report = oscar.getRelationshipType;
                    tango = _closure2_slot2;
                    report = report.bind(oscar)(tango);
                    tango = _closure1_slot6;
                    tango = tango.BLOCKED;
                    if(!(report !== tango)) { _fun100629_ip = 266; continue _fun100629 }
 104:
                    tango = _closure2_slot2;
                    if(!(entity != tango)) { _fun100629_ip = 159; continue _fun100629 }
 112:
                    oscar = _closure1_slot5;
                    report = oscar.getUser;
                    tango = _closure2_slot2;
                    report = report.bind(oscar)(tango);
                    if(!(entity != report)) { _fun100629_ip = 159; continue _fun100629 }
 135:
                    tango = report.hasFlag;
                    entity = _closure1_slot7;
                    entity = entity.PROVISIONAL_ACCOUNT;
                    entity = tango.bind(report)(entity);
                    if(entity) { _fun100629_ip = 262; continue _fun100629 }
 159:
                    report = _closure1_slot3;
                    tango = report.getMessages;
                    entity = _closure2_slot0;
                    entity = entity.id;
                    tango = tango.bind(report)(entity);
                    entity = tango.ready;
                    if(!entity) { _fun100629_ip = 201; continue _fun100629 }
 192:
                    report = tango.hasMoreBefore;
                    entity = !report;
 201:
                    if(!entity) { _fun100629_ip = 213; continue _fun100629 }
 204:
                    report = tango.hasMoreAfter;
                    entity = !report;
 213:
                    if(!entity) { _fun100629_ip = 228; continue _fun100629 }
 216:
                    report = tango.length;
                    tango = 25;
                    entity = report < tango;
 228:
                    if(!entity) { _fun100629_ip = 260; continue _fun100629 }
 231:
                    tango = _closure1_slot3;
                    zulu = tango.hasCurrentUserSentMessage;
                    mike = _closure2_slot0;
                    mike = mike.id;
                    mike = zulu.bind(tango)(mike);
                    entity = !mike;
 260:
                    return entity;
 262:
                    entity = false;
                    return entity;
 266:
                    entity = false;
                    return entity;
 270:
                    entity = false;
                    return entity;
 274:
                    entity = false;
                    return entity;
                }
            };
            entity = tango.bind(report)(zulu, entity, mike);
            return entity;
        }
    };
    zulu['useShowConvoStarterInDM'] = mike;
    return entity;
})();