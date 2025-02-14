// app/modules/message_request/hooks/useMessageRequestTimestampText.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: getMessageTimestampForChannel
        _fun120442: for(var _fun120442_ip = 0; ; ) switch(_fun120442_ip) {
 0:
            entity = argFoo;
            report = entity.lastMessageId;
            mike = entity.message;
            entity = entity.loaded;
            if(!entity) { _fun120442_ip = 29; continue _fun120442 }
 23:
            entity = null;
            if(!(entity == mike)) { _fun120442_ip = 76; continue _fun120442 }
 29:
            entity = null;
            zulu = entity != report;
            if(!zulu) { _fun120442_ip = 74; continue _fun120442 }
 38:
            oscar = _closure1_slot1;
            tango = _closure1_slot2;
            zulu = 1;
            tango = tango[zulu];
            zulu = undefined;
            tango = oscar.bind(zulu)(tango);
            zulu = tango.extractTimestamp;
            entity = zulu.bind(tango)(report);
 74:
            _fun120442_ip = 117; continue _fun120442;
 76:
            report = _closure1_slot1;
            tango = _closure1_slot2;
            zulu = 1;
            tango = tango[zulu];
            zulu = undefined;
            tango = report.bind(zulu)(tango);
            zulu = tango.extractTimestamp;
            mike = mike.id;
            entity = zulu.bind(tango)(mike);
 117:
            return entity;
        }
    };
    var _closure1_slot4 = entity;
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
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/message_request/hooks/useMessageRequestTimestampText.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: useMessageRequestTimestampText
        _fun120443: for(var _fun120443_ip = 0; ; ) switch(_fun120443_ip) {
 0:
            report = argFoo;
            var _closure2_slot0 = report;
            options = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 2;
            entity = verify[entity];
            tango = undefined;
            zulu = options.bind(tango)(entity);
            entity = zulu.useMessageRequestPreview;
            report = entity.bind(zulu)(report);
            zulu = _closure1_slot4;
            entity = {};
            golf = 3;
            golf = verify[golf];
            verify = options.bind(tango)(golf);
            options = verify.useStateFromStores;
            offset = _closure1_slot3;
            golf = new Array(1);
            golf[0] = offset;
            oscar = function() {
                zulu = _closure1_slot3;
                mike = zulu.lastMessageId;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            oscar = options.bind(verify)(golf, oscar);
            entity['lastMessageId'] = oscar;
            romeo = entity;
            yankee = report;
            report = copyDataProperties(romeo, yankee);
            zulu = zulu.bind(tango)(entity);
            entity = null;
            report = entity == zulu;
            entity = '';
            if(report) { _fun120443_ip = 161; continue _fun120443 }
 126:
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 4;
            mike = oscar[mike];
            mike = report.bind(tango)(mike);
            zulu = mike.bind(tango)(zulu);
            mike = zulu.calendar;
            entity = mike.bind(zulu)();
 161:
            return entity;
        }
    };
    zulu['useMessageRequestTimestampText'] = tango;
    mike = function(argFoo) { // Original name: useMessageRequestRelativeTimestampText
        _fun120445: for(var _fun120445_ip = 0; ; ) switch(_fun120445_ip) {
 0:
            tango = argFoo;
            var _closure2_slot0 = tango;
            options = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 2;
            entity = verify[entity];
            report = undefined;
            zulu = options.bind(report)(entity);
            entity = zulu.useMessageRequestPreview;
            tango = entity.bind(zulu)(tango);
            zulu = _closure1_slot4;
            entity = {};
            golf = 3;
            golf = verify[golf];
            verify = options.bind(report)(golf);
            options = verify.useStateFromStores;
            offset = _closure1_slot3;
            golf = new Array(1);
            golf[0] = offset;
            oscar = function() {
                zulu = _closure1_slot3;
                mike = zulu.lastMessageId;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            oscar = options.bind(verify)(golf, oscar);
            entity['lastMessageId'] = oscar;
            romeo = entity;
            yankee = tango;
            tango = copyDataProperties(romeo, yankee);
            tango = zulu.bind(report)(entity);
            entity = null;
            zulu = entity == tango;
            entity = '';
            if(zulu) { _fun120445_ip = 157; continue _fun120445 }
 126:
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 5;
            mike = oscar[mike];
            zulu = zulu.bind(report)(mike);
            mike = zulu.getTimestampString;
            entity = mike.bind(zulu)(tango);
 157:
            return entity;
        }
    };
    zulu['useMessageRequestRelativeTimestampText'] = mike;
    return entity;
})();