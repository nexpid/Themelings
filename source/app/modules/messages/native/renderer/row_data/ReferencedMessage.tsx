// app/modules/messages/native/renderer/row_data/ReferencedMessage.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: ReplyLoaded
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            zulu = mike.repliedMessage;
            var _closure2_slot0 = zulu;
            backup = mike.isMentioningReply;
            tango = undefined;
            var _closure2_slot1 = tango;
            golf = _closure1_slot3;
            oscar = golf.useMemo;
            report = new Array(1);
            report[0] = zulu;
            mike = function() {
                entity = {'rowType': null, 'message': null, 'isFirst': true, 'isEditing': false, 'canShowImages': true, 'changeType': null, 'roleStyle': 'hidden'};
                zulu = _closure1_slot9;
                zulu = zulu.MESSAGE;
                entity['rowType'] = zulu;
                zulu = _closure2_slot0;
                entity['message'] = zulu;
                mike = _closure1_slot7;
                mike = mike.NOOP;
                entity['changeType'] = mike;
                return entity;
            };
            kilo = oscar.bind(golf)(mike, report);
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 6;
            mike = oscar[mike];
            report = report.bind(tango)(mike);
            mike = report.getMessageStickers;
            mike = mike.bind(report)(zulu);
            mike = mike.length;
            report = 0;
            if(!(!(mike > report))) { _fun00002_ip = 299; continue _fun00001 }
 103:
            oscar = zulu.hasFlag;
            mike = _closure1_slot10;
            mike = mike.IS_VOICE_MESSAGE;
            mike = oscar.bind(zulu)(mike);
            if(mike) { _fun00002_ip = 235; continue _fun00001 }
 127:
            mike = zulu.embeds;
            mike = mike.length;
            mike = mike > report;
            if(mike) { _fun00002_ip = 160; continue _fun00001 }
 145:
            zulu = zulu.attachments;
            zulu = zulu.length;
            mike = zulu > report;
 160:
            oscar = undefined;
            if(!mike) { _fun00002_ip = 361; continue _fun00001 }
 168:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            mike = 7;
            zulu = options[mike];
            zulu = golf.bind(tango)(zulu);
            report = zulu.intl;
            zulu = report.string;
            mike = options[mike];
            mike = golf.bind(tango)(mike);
            mike = mike.t;
            mike = mike.JAKsMz;
            mike = zulu.bind(report)(mike);
            _closure2_slot1 = mike;
            oscar = mike;
            _fun00002_ip = 361; continue _fun00001;
 235:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            mike = 7;
            zulu = options[mike];
            zulu = golf.bind(tango)(zulu);
            report = zulu.intl;
            zulu = report.string;
            mike = options[mike];
            mike = golf.bind(tango)(mike);
            mike = mike.t;
            mike = mike.6bhHra;
            mike = zulu.bind(report)(mike);
            _closure2_slot1 = mike;
            oscar = mike;
            _fun00002_ip = 361; continue _fun00001;
 299:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            mike = 7;
            zulu = options[mike];
            zulu = golf.bind(tango)(zulu);
            report = zulu.intl;
            zulu = report.string;
            mike = options[mike];
            mike = golf.bind(tango)(mike);
            mike = mike.t;
            mike = mike.7K5LmZ;
            mike = zulu.bind(report)(mike);
            _closure2_slot1 = mike;
            oscar = mike;
 361:
            report = _closure1_slot3;
            zulu = report.useMemo;
            mike = new Array(1);
            mike[0] = oscar;
            entity = function() {
                entity = {};
                mike = _closure1_slot8;
                mike = mike.LOADED;
                entity['state'] = mike;
                mike = _closure2_slot1;
                entity['systemContent'] = mike;
                return entity;
            };
            report = zulu.bind(report)(entity, mike);
            zulu = _closure1_slot11;
            verify = _closure1_slot0;
            sizing = _closure1_slot2;
            entity = 8;
            entity = sizing[entity];
            entity = verify.bind(tango)(entity);
            mike = entity.DataWithChildren;
            entity = {};
            oscar = 'referencedMessage';
            entity['keyPath'] = oscar;
            entity['rowProps'] = report;
            golf = _closure1_slot11;
            romeo = _closure1_slot1;
            options = 9;
            report = sizing[options];
            report = romeo.bind(tango)(report);
            oscar = report.Provider;
            report = {};
            options = sizing[options];
            options = verify.bind(tango)(options);
            options = options.NestedMessageType;
            options = options.REPLIED_MESSAGE;
            report['value'] = options;
            offset = _closure1_slot11;
            options = 10;
            options = sizing[options];
            options = verify.bind(tango)(options);
            verify = options.RenderMessageOptionsOverride;
            options = {};
            foxtrot = false;
            options['renderReplies'] = foxtrot;
            foxtrot = _closure1_slot11;
            yankee = 11;
            yankee = sizing[yankee];
            romeo = romeo.bind(tango)(yankee);
            yankee = {};
            yankee['row'] = kilo;
            yankee['isMentioningReply'] = backup;
            yankee = foxtrot.bind(tango)(romeo, yankee);
            options['children'] = yankee;
            options = offset.bind(tango)(verify, options);
            report['children'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: ReplyNotLoaded
        entity = argFoo;
        entity = entity.replyHint;
        tango = _closure1_slot11;
        zulu = _closure1_slot12;
        mike = {};
        report = _closure1_slot8;
        report = report.SYSTEM;
        mike['state'] = report;
        mike['content'] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    var _closure1_slot14 = entity;
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
    options = oscar[tango];
    options = golf.bind(entity)(options);
    var _closure1_slot4 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ReferencedMessageState;
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.Changeset;
    var _closure1_slot7 = golf;
    golf = tango.ReferencedMessageRowState;
    var _closure1_slot8 = golf;
    tango = tango.RowType;
    var _closure1_slot9 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.MessageFlags;
    var _closure1_slot10 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot11 = tango;
    tango = 8;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.makeKeyedDataComponent;
    tango = 'referencedMessage';
    tango = golf.bind(options)(tango);
    var _closure1_slot12 = tango;
    tango = 15;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/native/renderer/row_data/ReferencedMessage.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: ReferencedMessage
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            options = entity.message;
            entity = options.messageReference;
            var _closure2_slot0 = entity;
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            zulu = 12;
            verify = golf[zulu];
            tango = undefined;
            romeo = oscar.bind(tango)(verify);
            yankee = romeo.useStateFromStores;
            verify = _closure1_slot4;
            offset = new Array(1);
            offset[0] = verify;
            verify = new Array(1);
            verify[0] = entity;
            entity = function() {
                zulu = _closure1_slot4;
                mike = zulu.getMessageByReference;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = yankee.bind(romeo)(offset, entity, verify);
            var _closure2_slot1 = entity;
            zulu = golf[zulu];
            verify = oscar.bind(tango)(zulu);
            golf = verify.useStateFromStores;
            zulu = _closure1_slot6;
            oscar = new Array(1);
            oscar[0] = zulu;
            offset = entity.message;
            zulu = new Array(2);
            zulu[0] = offset;
            offset = entity.state;
            zulu[1] = offset;
            mike = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = _closure2_slot1;
                    tango = entity.state;
                    entity = _closure1_slot5;
                    entity = entity.LOADED;
                    entity = tango === entity;
                    if(!entity) { _fun00006_ip = 56; continue _fun00005 }
 32:
                    tango = _closure1_slot6;
                    zulu = tango.isBlockedForMessage;
                    mike = _closure2_slot1;
                    mike = mike.message;
                    entity = zulu.bind(tango)(mike);
 56:
                    return entity;
                }
            };
            mike = golf.bind(verify)(oscar, mike, zulu);
            if(mike) { _fun00004_ip = 453; continue _fun00003 }
 152:
            zulu = entity.state;
            mike = _closure1_slot5;
            mike = mike.LOADED;
            if(!(mike !== zulu)) { _fun00004_ip = 394; continue _fun00003 }
 174:
            mike = _closure1_slot5;
            mike = mike.NOT_LOADED;
            if(!(mike !== zulu)) { _fun00004_ip = 316; continue _fun00003 }
 191:
            mike = _closure1_slot5;
            mike = mike.DELETED;
            if(!(mike !== zulu)) { _fun00004_ip = 238; continue _fun00003 }
 205:
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 14;
            mike = oscar[mike];
            zulu = zulu.bind(tango)(mike);
            mike = zulu.assertNever;
            mike = mike.bind(zulu)(entity);
            return tango;
 238:
            oscar = _closure1_slot11;
            zulu = _closure1_slot14;
            mike = {};
            yankee = _closure1_slot0;
            romeo = _closure1_slot2;
            golf = 7;
            verify = romeo[golf];
            verify = yankee.bind(tango)(verify);
            offset = verify.intl;
            verify = offset.string;
            golf = romeo[golf];
            golf = yankee.bind(tango)(golf);
            golf = golf.t;
            golf = golf.mE3KJC;
            golf = verify.bind(offset)(golf);
            mike['replyHint'] = golf;
            mike = oscar.bind(tango)(zulu, mike);
            return mike;
 316:
            oscar = _closure1_slot11;
            zulu = _closure1_slot14;
            mike = {};
            yankee = _closure1_slot0;
            romeo = _closure1_slot2;
            golf = 7;
            verify = romeo[golf];
            verify = yankee.bind(tango)(verify);
            offset = verify.intl;
            verify = offset.string;
            golf = romeo[golf];
            golf = yankee.bind(tango)(golf);
            golf = golf.t;
            golf = golf.1i+hMj;
            golf = verify.bind(offset)(golf);
            mike['replyHint'] = golf;
            mike = oscar.bind(tango)(zulu, mike);
            return mike;
 394:
            golf = entity.message;
            zulu = _closure1_slot11;
            mike = _closure1_slot13;
            entity = {};
            entity['repliedMessage'] = golf;
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            oscar = 13;
            oscar = offset[oscar];
            oscar = verify.bind(tango)(oscar);
            oscar = oscar.bind(tango)(options, golf);
            entity['isMentioningReply'] = oscar;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
 453:
            zulu = _closure1_slot11;
            mike = _closure1_slot14;
            entity = {};
            options = _closure1_slot0;
            verify = _closure1_slot2;
            report = 7;
            oscar = verify[report];
            oscar = options.bind(tango)(oscar);
            golf = oscar.intl;
            oscar = golf.string;
            report = verify[report];
            report = options.bind(tango)(report);
            report = report.t;
            report = report.1i+hMj;
            report = oscar.bind(golf)(report);
            entity['replyHint'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();