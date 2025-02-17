// app/modules/messages/native/renderer/MessageConnected.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    verify = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: ThreadStarterMessage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            yankee = mike.row;
            var _closure2_slot0 = yankee;
            verify = mike.starterMessage;
            var _closure2_slot1 = verify;
            tango = undefined;
            var _closure2_slot3 = tango;
            zulu = yankee.message;
            var _closure2_slot2 = zulu;
            backup = yankee.isFirst;
            foxtrot = yankee.isEditing;
            mike = yankee.isSystemDM;
            options = tango !== mike;
            if(!options) { _fun00002_ip = 68; continue _fun00001 }
 65:
            options = mike;
 68:
            mike = yankee.canShowImages;
            romeo = tango === mike;
            if(romeo) { _fun00002_ip = 84; continue _fun00001 }
 81:
            romeo = mike;
 84:
            oscar = _closure1_slot1;
            offset = _closure1_slot2;
            mike = 5;
            mike = offset[mike];
            golf = oscar.bind(tango)(mike);
            mike = {};
            mike['message'] = verify;
            mike['isFirst'] = backup;
            mike['isEditing'] = foxtrot;
            mike['canShowImages'] = romeo;
            mike['isSystemDM'] = options;
            options = false;
            mike['canShowReactions'] = options;
            mike = golf.bind(tango)(mike);
            _closure2_slot3 = mike;
            options = _closure1_slot3;
            golf = options.useMemo;
            romeo = zulu.id;
            zulu = new Array(2);
            zulu[0] = romeo;
            zulu[1] = mike;
            mike = function() {
                entity = {};
                verify = _closure2_slot3;
                offset = entity;
                zulu = copyDataProperties(offset, verify);
                golf = _closure1_slot0;
                options = _closure1_slot2;
                zulu = 6;
                tango = options[zulu];
                oscar = undefined;
                tango = golf.bind(oscar)(tango);
                report = tango.intl;
                tango = report.string;
                zulu = options[zulu];
                zulu = golf.bind(oscar)(zulu);
                zulu = zulu.t;
                zulu = zulu.uBid4u;
                tango = tango.bind(report)(zulu);
                zulu = 'threadStarterMessageHeader';
                entity[zulu] = tango;
                mike = _closure2_slot2;
                zulu = mike.id;
                mike = 'id';
                entity[mike] = zulu;
                return entity;
            };
            options = golf.bind(options)(mike, zulu);
            golf = _closure1_slot3;
            zulu = golf.useMemo;
            mike = new Array(2);
            mike[0] = yankee;
            mike[1] = verify;
            entity = function() {
                entity = {};
                tango = _closure2_slot0;
                report = entity;
                zulu = copyDataProperties(report, tango);
                zulu = _closure2_slot1;
                mike = 'message';
                entity[mike] = zulu;
                return entity;
            };
            verify = zulu.bind(golf)(entity, mike);
            zulu = _closure1_slot6;
            mike = _closure1_slot0;
            entity = 7;
            entity = offset[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.RenderMessageOptionsOverride;
            entity = {'renderThreadEmbeds': false, 'renderReactions': false};
            golf = _closure1_slot6;
            report = 8;
            report = offset[report];
            oscar = oscar.bind(tango)(report);
            report = {};
            report['row'] = verify;
            report['messageContent'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo) { // Original name: UserMessage
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            oscar = entity.row;
            options = entity.isMentioningReply;
            backup = oscar.message;
            foxtrot = oscar.isFirst;
            romeo = oscar.isEditing;
            entity = oscar.isSystemDM;
            tango = undefined;
            offset = tango !== entity;
            if(!offset) { _fun00004_ip = 50; continue _fun00003 }
 47:
            offset = entity;
 50:
            entity = oscar.canShowImages;
            yankee = tango === entity;
            if(yankee) { _fun00004_ip = 66; continue _fun00003 }
 63:
            yankee = entity;
 66:
            verify = oscar.renderContentOnly;
            mike = _closure1_slot1;
            golf = _closure1_slot2;
            zulu = 5;
            zulu = golf[zulu];
            report = mike.bind(tango)(zulu);
            zulu = {};
            zulu['message'] = backup;
            zulu['isFirst'] = foxtrot;
            zulu['isEditing'] = romeo;
            zulu['canShowImages'] = yankee;
            zulu['isSystemDM'] = offset;
            zulu['renderContentOnly'] = verify;
            zulu['isMentioningReply'] = options;
            report = report.bind(tango)(zulu);
            zulu = _closure1_slot6;
            entity = 8;
            entity = golf[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            entity['row'] = oscar;
            entity['messageContent'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    options = tango.bind(entity)(golf);
    var _closure1_slot3 = options;
    tango = 1;
    golf = oscar[tango];
    golf = verify.bind(entity)(golf);
    var _closure1_slot4 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ReferencedMessageState;
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot6 = tango;
    golf = options.memo;
    tango = function(argFoo) { // Original name: MessageConnected
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            golf = entity.row;
            options = entity.isMentioningReply;
            zulu = golf.message;
            entity = function(argFoo) { // Original name: useReferencedThreadStarterMessage
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tango = argFoo;
                    golf = tango.type;
                    oscar = _closure1_slot0;
                    report = _closure1_slot2;
                    zulu = 3;
                    zulu = report[zulu];
                    report = undefined;
                    zulu = oscar.bind(report)(zulu);
                    zulu = zulu.MessageTypes;
                    oscar = zulu.THREAD_STARTER_MESSAGE;
                    zulu = undefined;
                    if(!(golf === oscar)) { _fun00008_ip = 59; continue _fun00007 }
 53:
                    zulu = tango.messageReference;
 59:
                    var _closure3_slot0 = zulu;
                    tango = _closure1_slot0;
                    oscar = _closure1_slot2;
                    zulu = 4;
                    zulu = oscar[zulu];
                    report = tango.bind(report)(zulu);
                    tango = report.useStateFromStores;
                    oscar = _closure1_slot4;
                    zulu = new Array(1);
                    zulu[0] = oscar;
                    mike = function() {
                        zulu = _closure1_slot4;
                        mike = zulu.getMessageByReference;
                        entity = _closure3_slot0;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    mike = tango.bind(report)(zulu, mike);
                    tango = mike.state;
                    entity = _closure1_slot5;
                    zulu = entity.LOADED;
                    entity = null;
                    if(!(tango === zulu)) { _fun00008_ip = 137; continue _fun00007 }
 132:
                    entity = mike.message;
 137:
                    return entity;
                }
            };
            report = undefined;
            oscar = entity.bind(report)(zulu);
            entity = null;
            if(!(entity == oscar)) { _fun00006_ip = 134; continue _fun00005 }
 40:
            tango = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 9;
            entity = verify[entity];
            entity = tango.bind(report)(entity);
            entity = entity.bind(report)(zulu);
            tango = _closure1_slot6;
            if(entity) { _fun00006_ip = 99; continue _fun00005 }
 75:
            zulu = _closure1_slot8;
            entity = {};
            entity['row'] = golf;
            entity['isMentioningReply'] = options;
            entity = tango.bind(report)(zulu, entity);
            _fun00006_ip = 132; continue _fun00005;
 99:
            zulu = _closure1_slot1;
            options = _closure1_slot2;
            mike = 10;
            mike = options[mike];
            zulu = zulu.bind(report)(mike);
            mike = {};
            mike['row'] = golf;
            entity = tango.bind(report)(zulu, mike);
 132:
            _fun00006_ip = 163; continue _fun00005;
 134:
            tango = _closure1_slot6;
            zulu = _closure1_slot7;
            mike = {};
            mike['row'] = golf;
            mike['starterMessage'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 163:
            return entity;
        }
    };
    mike = function(argFoo, argBar) {
        mike = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 11;
        entity = zulu[entity];
        tango = undefined;
        zulu = mike.bind(tango)(entity);
        entity = argFoo;
        mike = entity.row;
        entity = argBar;
        entity = entity.row;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    mike = golf.bind(options)(tango, mike);
    tango = 12;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/native/renderer/MessageConnected.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();