// app/modules/forwarding/maybeCreateMessageRecordFromSnapshot.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    zulu = argFred;
    tango = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = tango;
    entity = global;
    golf = entity.Object;
    oscar = golf.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(golf)(zulu, entity, report);
    entity = 1;
    report = tango[entity];
    tango = argBar;
    entity = undefined;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/forwarding/maybeCreateMessageRecordFromSnapshot.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: maybeCreateMessageRecordFromSnapshot
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBar;
            report = null;
            if(!(report == oscar)) { _fun00002_ip = 57; continue _fun00001 }
 12:
            golf = _closure1_slot0;
            entity = _closure1_slot1;
            zulu = 0;
            mike = entity[zulu];
            entity = undefined;
            mike = golf.bind(entity)(mike);
            mike = mike.bind(entity)(tango);
            if(!mike) { _fun00002_ip = 54; continue _fun00001 }
 44:
            mike = tango.messageSnapshots;
            entity = mike[zulu];
 54:
            oscar = entity;
 57:
            entity = tango;
            if(!(report != oscar)) { _fun00002_ip = 248; continue _fun00001 }
 67:
            zulu = tango.merge;
            mike = {};
            golf = oscar.message;
            golf = golf.content;
            mike['content'] = golf;
            golf = oscar.message;
            golf = golf.attachments;
            mike['attachments'] = golf;
            golf = oscar.message;
            golf = golf.embeds;
            mike['embeds'] = golf;
            golf = oscar.message;
            golf = golf.flags;
            mike['flags'] = golf;
            golf = oscar.message;
            golf = golf.components;
            mike['components'] = golf;
            mike['editedTimestamp'] = report;
            golf = oscar.message;
            golf = golf.timestamp;
            mike['timestamp'] = golf;
            golf = oscar.message;
            golf = golf.codedLinks;
            mike['codedLinks'] = golf;
            golf = new Array(0);
            mike['reactions'] = golf;
            golf = new Array(0);
            mike['messageSnapshots'] = golf;
            golf = oscar.message;
            golf = golf.stickers;
            mike['stickers'] = golf;
            oscar = oscar.message;
            oscar = oscar.stickerItems;
            mike['stickerItems'] = oscar;
            mike['customRenderedContent'] = report;
            entity = zulu.bind(tango)(mike);
 248:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();