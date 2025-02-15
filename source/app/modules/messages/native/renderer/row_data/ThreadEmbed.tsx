// app/modules/messages/native/renderer/row_data/ThreadEmbed.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: ThreadEmbedWithMessage
        mike = argFoo;
        options = mike.title;
        golf = mike.messageCountLabel;
        report = mike.message;
        var _closure2_slot0 = report;
        tango = _closure1_slot3;
        zulu = tango.useMemo;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            entity = {'rowType': null, 'message': null, 'isFirst': true, 'isEditing': false, 'canShowImages': true, 'changeType': null, 'roleStyle': 'hidden'};
            zulu = _closure1_slot8;
            zulu = zulu.MESSAGE;
            entity['rowType'] = zulu;
            zulu = _closure2_slot0;
            entity['message'] = zulu;
            mike = _closure1_slot6;
            mike = mike.NOOP;
            entity['changeType'] = mike;
            return entity;
        };
        backup = zulu.bind(tango)(entity, mike);
        tango = _closure1_slot9;
        sizing = _closure1_slot0;
        kilo = _closure1_slot2;
        report = 5;
        entity = kilo[report];
        zulu = undefined;
        entity = sizing.bind(zulu)(entity);
        mike = entity.DataWithChildren;
        entity = {};
        oscar = 'threadEmbed';
        entity['keyPath'] = oscar;
        oscar = {};
        oscar['title'] = options;
        oscar['messageCountLabel'] = golf;
        entity['rowProps'] = oscar;
        golf = _closure1_slot9;
        report = kilo[report];
        report = sizing.bind(zulu)(report);
        oscar = report.DataWithChildren;
        report = {};
        options = 'referencedMessage';
        report['keyPath'] = options;
        options = {};
        verify = _closure1_slot7;
        verify = verify.LOADED;
        options['state'] = verify;
        report['rowProps'] = options;
        offset = _closure1_slot9;
        romeo = _closure1_slot1;
        foxtrot = 6;
        options = kilo[foxtrot];
        options = romeo.bind(zulu)(options);
        verify = options.Provider;
        options = {};
        foxtrot = kilo[foxtrot];
        foxtrot = sizing.bind(zulu)(foxtrot);
        foxtrot = foxtrot.NestedMessageType;
        foxtrot = foxtrot.THREAD_EMBED;
        options['value'] = foxtrot;
        foxtrot = _closure1_slot9;
        yankee = 7;
        yankee = kilo[yankee];
        romeo = romeo.bind(zulu)(yankee);
        yankee = {};
        yankee['row'] = backup;
        yankee = foxtrot.bind(zulu)(romeo, yankee);
        options['children'] = yankee;
        options = offset.bind(zulu)(verify, options);
        report['children'] = options;
        report = golf.bind(zulu)(oscar, report);
        entity['children'] = report;
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: ThreadEmbedMissingMessage
        _fun69533: for(var _fun69533_ip = 0; ; ) switch(_fun69533_ip) {
 0:
            mike = argFoo;
            options = mike.title;
            report = mike.messageCountLabel;
            entity = mike.messagePreviewString;
            golf = mike.archived;
            tango = _closure1_slot9;
            zulu = _closure1_slot10;
            mike = {};
            mike['title'] = options;
            mike['messageCountLabel'] = report;
            mike['messagePreviewString'] = entity;
            mike['archived'] = golf;
            entity = undefined;
            report = undefined;
            if(!golf) { _fun69533_ip = 112; continue _fun69533 }
 65:
            options = _closure1_slot0;
            offset = _closure1_slot2;
            golf = 8;
            golf = offset[golf];
            options = options.bind(entity)(golf);
            golf = options.getAssetUriForEmbed;
            verify = _closure1_slot1;
            oscar = 9;
            oscar = offset[oscar];
            oscar = verify.bind(entity)(oscar);
            report = golf.bind(options)(oscar);
 112:
            mike['archivedIconUrl'] = report;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: ThreadEmbedBuilder
        _fun69534: for(var _fun69534_ip = 0; ; ) switch(_fun69534_ip) {
 0:
            mike = argFoo;
            yankee = mike.messageId;
            var _closure2_slot0 = yankee;
            zulu = mike.channel;
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            mike = 10;
            mike = options[mike];
            tango = undefined;
            offset = oscar.bind(tango)(mike);
            verify = offset.useStateFromStoresObject;
            mike = _closure1_slot4;
            golf = new Array(1);
            golf[0] = mike;
            mike = new Array(1);
            mike[0] = yankee;
            entity = function() {
                entity = {};
                offset = _closure1_slot4;
                verify = offset.getMostRecentMessage;
                golf = _closure1_slot1;
                options = _closure1_slot2;
                mike = 11;
                tango = options[mike];
                report = undefined;
                yankee = golf.bind(report)(tango);
                tango = yankee.castMessageIdAsChannelId;
                oscar = _closure2_slot0;
                tango = tango.bind(yankee)(oscar);
                tango = verify.bind(offset)(tango);
                entity['mostRecentMessage'] = tango;
                tango = _closure1_slot4;
                zulu = tango.getCount;
                mike = options[mike];
                report = golf.bind(report)(mike);
                mike = report.castMessageIdAsChannelId;
                mike = mike.bind(report)(oscar);
                mike = zulu.bind(tango)(mike);
                entity['messageCount'] = mike;
                return entity;
            };
            mike = verify.bind(offset)(golf, entity, mike);
            entity = mike.mostRecentMessage;
            verify = mike.messageCount;
            golf = zulu.name;
            mike = 12;
            mike = options[mike];
            options = oscar.bind(tango)(mike);
            oscar = options.formatMobileMessageCountLabel;
            mike = zulu.id;
            oscar = oscar.bind(options)(verify, mike);
            mike = null;
            if(!(mike != verify)) { _fun69534_ip = 142; continue _fun69534 }
 136:
            options = 0;
            if(!(!(verify > options))) { _fun69534_ip = 236; continue _fun69534 }
 142:
            offset = _closure1_slot9;
            verify = _closure1_slot12;
            options = {};
            options['title'] = golf;
            options['messageCountLabel'] = oscar;
            backup = _closure1_slot0;
            kilo = _closure1_slot2;
            yankee = 13;
            romeo = kilo[yankee];
            romeo = backup.bind(tango)(romeo);
            foxtrot = romeo.intl;
            romeo = foxtrot.string;
            yankee = kilo[yankee];
            yankee = backup.bind(tango)(yankee);
            yankee = yankee.t;
            yankee = yankee.HYtNyM;
            yankee = romeo.bind(foxtrot)(yankee);
            options['messagePreviewString'] = yankee;
            yankee = false;
            options['archived'] = yankee;
            options = offset.bind(tango)(verify, options);
            return options;
 236:
            zulu = zulu.threadMetadata;
            if(!(mike != zulu)) { _fun69534_ip = 258; continue _fun69534 }
 246:
            zulu = zulu.archived;
            if(zulu) { _fun69534_ip = 609; continue _fun69534 }
 258:
            if(!(mike != entity)) { _fun69534_ip = 515; continue _fun69534 }
 265:
            zulu = entity.type;
            options = _closure1_slot0;
            mike = _closure1_slot2;
            verify = 14;
            mike = mike[verify];
            mike = options.bind(tango)(mike);
            mike = mike.MessageTypes;
            mike = mike.CHANNEL_NAME_CHANGE;
            if(!(zulu !== mike)) { _fun69534_ip = 515; continue _fun69534 }
 309:
            zulu = entity.type;
            options = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[verify];
            mike = options.bind(tango)(mike);
            mike = mike.MessageTypes;
            mike = mike.THREAD_STARTER_MESSAGE;
            if(!(zulu !== mike)) { _fun69534_ip = 515; continue _fun69534 }
 350:
            mike = entity.blocked;
            if(mike) { _fun69534_ip = 399; continue _fun69534 }
 359:
            mike = entity.ignored;
            if(mike) { _fun69534_ip = 399; continue _fun69534 }
 368:
            options = _closure1_slot9;
            zulu = _closure1_slot11;
            mike = {};
            mike['title'] = golf;
            mike['messageCountLabel'] = oscar;
            mike['message'] = entity;
            mike = options.bind(tango)(zulu, mike);
            return mike;
 399:
            options = entity.blocked;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            entity = 13;
            mike = offset[entity];
            mike = verify.bind(tango)(mike);
            zulu = mike.intl;
            mike = zulu.string;
            entity = offset[entity];
            entity = verify.bind(tango)(entity);
            entity = entity.t;
            if(options) { _fun69534_ip = 465; continue _fun69534 }
 452:
            options = entity.G7p6v7;
            options = mike.bind(zulu)(options);
            _fun69534_ip = 476; continue _fun69534;
 465:
            entity = entity.XAkOo6;
            options = mike.bind(zulu)(entity);
 476:
            zulu = _closure1_slot9;
            mike = _closure1_slot12;
            entity = {};
            entity['title'] = golf;
            entity['messageCountLabel'] = oscar;
            entity['messagePreviewString'] = options;
            options = false;
            entity['archived'] = options;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
 515:
            zulu = _closure1_slot9;
            mike = _closure1_slot12;
            entity = {};
            entity['title'] = golf;
            entity['messageCountLabel'] = oscar;
            yankee = _closure1_slot0;
            romeo = _closure1_slot2;
            options = 13;
            verify = romeo[options];
            verify = yankee.bind(tango)(verify);
            offset = verify.intl;
            verify = offset.string;
            options = romeo[options];
            options = yankee.bind(tango)(options);
            options = options.t;
            options = options.ZTo4HR;
            options = verify.bind(offset)(options);
            entity['messagePreviewString'] = options;
            options = false;
            entity['archived'] = options;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
 609:
            zulu = _closure1_slot9;
            mike = _closure1_slot12;
            entity = {};
            entity['title'] = golf;
            entity['messageCountLabel'] = oscar;
            options = _closure1_slot0;
            verify = _closure1_slot2;
            report = 13;
            oscar = verify[report];
            oscar = options.bind(tango)(oscar);
            golf = oscar.intl;
            oscar = golf.string;
            report = verify[report];
            report = options.bind(tango)(report);
            report = report.t;
            report = report.ZTo4HR;
            report = oscar.bind(golf)(report);
            entity['messagePreviewString'] = report;
            report = true;
            entity['archived'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
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
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.Changeset;
    var _closure1_slot6 = golf;
    golf = tango.ReferencedMessageRowState;
    var _closure1_slot7 = golf;
    tango = tango.RowType;
    var _closure1_slot8 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot9 = tango;
    tango = 5;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.makeKeyedDataComponent;
    tango = 'threadEmbed';
    tango = golf.bind(options)(tango);
    var _closure1_slot10 = tango;
    tango = 15;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/native/renderer/row_data/ThreadEmbed.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: ThreadEmbed
        _fun69536: for(var _fun69536_ip = 0; ; ) switch(_fun69536_ip) {
 0:
            mike = argFoo;
            golf = mike.message;
            var _closure2_slot0 = golf;
            tango = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 10;
            zulu = report[zulu];
            report = undefined;
            options = tango.bind(report)(zulu);
            oscar = options.useStateFromStores;
            zulu = _closure1_slot5;
            tango = new Array(1);
            tango[0] = zulu;
            verify = golf.id;
            zulu = new Array(1);
            zulu[0] = verify;
            entity = function() {
                zulu = _closure1_slot5;
                mike = zulu.getChannel;
                report = _closure1_slot1;
                tango = _closure1_slot2;
                entity = 11;
                tango = tango[entity];
                entity = undefined;
                report = report.bind(entity)(tango);
                tango = report.castMessageIdAsChannelId;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = tango.bind(report)(entity);
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            oscar = oscar.bind(options)(tango, entity, zulu);
            entity = null;
            zulu = entity == oscar;
            if(zulu) { _fun69536_ip = 121; continue _fun69536 }
 92:
            tango = _closure1_slot9;
            zulu = _closure1_slot13;
            mike = {};
            golf = golf.id;
            mike['messageId'] = golf;
            mike['channel'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 121:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();