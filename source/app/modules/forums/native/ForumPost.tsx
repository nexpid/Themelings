// app/modules/forums/native/ForumPost.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golf;
    entity = function(argFoo) { // Original name: ForumPostGrid
        entity = argFoo;
        yankee = entity.firstMessage;
        offset = entity.hasUnreads;
        kilo = entity.isNew;
        sizing = entity.media;
        verify = entity.parentChannel;
        romeo = entity.thread;
        tango = _closure1_slot7;
        zulu = _closure1_slot6;
        mike = {};
        backup = _closure1_slot5;
        golf = _closure1_slot1;
        foxtrot = _closure1_slot2;
        entity = 4;
        report = foxtrot[entity];
        entity = undefined;
        options = golf.bind(entity)(report);
        report = {};
        report['thread'] = romeo;
        report['hasUnreads'] = offset;
        report['isNew'] = kilo;
        options = backup.bind(entity)(options, report);
        report = new Array(3);
        report[0] = options;
        kilo = _closure1_slot5;
        options = 5;
        options = foxtrot[options];
        backup = golf.bind(entity)(options);
        options = {};
        options['thread'] = romeo;
        options['hasUnreads'] = offset;
        options['media'] = sizing;
        options = kilo.bind(entity)(backup, options);
        report[1] = options;
        options = _closure1_slot5;
        oscar = 6;
        oscar = foxtrot[oscar];
        golf = golf.bind(entity)(oscar);
        oscar = {};
        oscar['thread'] = romeo;
        oscar['firstMessage'] = yankee;
        oscar['hasUnreads'] = offset;
        oscar['parentChannel'] = verify;
        oscar = options.bind(entity)(golf, oscar);
        report[2] = oscar;
        mike['children'] = report;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = golf[entity];
    tango = argCorge;
    entity = undefined;
    options = tango.bind(entity)(options);
    tango = 1;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.useForumChannelStore;
    var _closure1_slot4 = tango;
    tango = 3;
    report = golf[tango];
    report = oscar.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot5 = report;
    report = golf[tango];
    report = oscar.bind(entity)(report);
    report = report.Fragment;
    var _closure1_slot6 = report;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot7 = tango;
    report = options.memo;
    tango = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zulu = entity.threadId;
            var _closure2_slot0 = zulu;
            options = entity.style;
            tango = _closure1_slot0;
            verify = _closure1_slot2;
            report = 7;
            entity = verify[report];
            oscar = undefined;
            yankee = tango.bind(oscar)(entity);
            offset = yankee.useStateFromStores;
            romeo = _closure1_slot3;
            zulu = new Array(1);
            zulu[0] = romeo;
            entity = function() {
                zulu = _closure1_slot3;
                mike = zulu.getChannel;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            kilo = offset.bind(yankee)(zulu, entity);
            zulu = _closure1_slot1;
            entity = 8;
            entity = verify[entity];
            yankee = zulu.bind(oscar)(entity);
            entity = null;
            offset = entity != kilo;
            zulu = '[Forum Post] The thread should not be null here. A store must have missed an update.';
            zulu = yankee.bind(oscar)(offset, zulu);
            offset = kilo.parent_id;
            var _closure2_slot1 = offset;
            zulu = _closure1_slot4;
            zulu = zulu.bind(oscar)(offset);
            zulu = zulu.layoutType;
            report = verify[report];
            yankee = tango.bind(oscar)(report);
            offset = yankee.useStateFromStores;
            report = new Array(1);
            report[0] = romeo;
            mike = function() {
                zulu = _closure1_slot3;
                mike = zulu.getChannel;
                entity = _closure2_slot1;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            foxtrot = offset.bind(yankee)(report, mike);
            mike = 9;
            mike = verify[mike];
            report = tango.bind(oscar)(mike);
            mike = report.useFirstForumPostMessage;
            mike = mike.bind(report)(kilo);
            romeo = mike.firstMessage;
            output = mike.loaded;
            mike = 10;
            report = verify[mike];
            offset = tango.bind(oscar)(report);
            report = offset.useForumPostReadStates;
            report = report.bind(offset)(kilo);
            offset = report.isNew;
            yankee = report.hasUnreads;
            mike = verify[mike];
            backup = tango.bind(oscar)(mike);
            report = backup.useForumPostFirstMessageMarkup;
            mike = {};
            mike['firstMessage'] = romeo;
            mike = report.bind(backup)(mike);
            echo = mike.content;
            report = mike.hasSpoilerEmbeds;
            mike = 13;
            backup = verify[mike];
            sizing = tango.bind(oscar)(backup);
            backup = sizing.useForumPostMediaThumbnail;
            backup = backup.bind(sizing)(romeo, foxtrot, report);
            mike = verify[mike];
            tango = tango.bind(oscar)(mike);
            mike = tango.useFirstMediaIsEmbed;
            result = mike.bind(tango)(romeo, report);
            if(!output) { _fun00002_ip = 628; continue _fun00001 }
 329:
            tango = _closure1_slot0;
            report = _closure1_slot2;
            mike = 14;
            mike = report[mike];
            mike = tango.bind(oscar)(mike);
            mike = mike.ForumLayout;
            mike = mike.GRID;
            if(!(zulu === mike)) { _fun00002_ip = 379; continue _fun00001 }
 365:
            zulu = backup.length;
            mike = 0;
            if(!(!(zulu > mike))) { _fun00002_ip = 523; continue _fun00001 }
 379:
            tango = _closure1_slot5;
            zulu = _closure1_slot0;
            update = _closure1_slot2;
            mike = 11;
            mike = update[mike];
            mike = zulu.bind(oscar)(mike);
            zulu = mike.ForumPostPressableContainer;
            mike = {};
            mike['style'] = options;
            report = kilo.id;
            mike['threadId'] = report;
            sizing = _closure1_slot5;
            verify = _closure1_slot1;
            report = 12;
            report = update[report];
            verify = verify.bind(oscar)(report);
            report = {};
            report['thread'] = kilo;
            report['parentChannel'] = foxtrot;
            report['firstMessage'] = romeo;
            report['messageContent'] = echo;
            echo = 0;
            echo = backup[echo];
            report['media'] = echo;
            report['isEmbed'] = result;
            report['hasUnreads'] = yankee;
            report['isNew'] = offset;
            report['firstMessageLoaded'] = output;
            output = false;
            report['isLocalDeviceMedia'] = output;
            report = sizing.bind(oscar)(verify, report);
            mike['children'] = report;
            mike = tango.bind(oscar)(zulu, mike);
            _fun00002_ip = 625; continue _fun00001;
 523:
            report = _closure1_slot5;
            tango = _closure1_slot0;
            verify = _closure1_slot2;
            zulu = 11;
            zulu = verify[zulu];
            zulu = tango.bind(oscar)(zulu);
            tango = zulu.ForumPostPressableContainer;
            zulu = {};
            zulu['style'] = options;
            options = kilo.id;
            zulu['threadId'] = options;
            verify = _closure1_slot5;
            options = _closure1_slot8;
            golf = {};
            golf['thread'] = kilo;
            golf['media'] = backup;
            golf['parentChannel'] = foxtrot;
            golf['firstMessage'] = romeo;
            golf['hasUnreads'] = yankee;
            golf['isNew'] = offset;
            golf = verify.bind(oscar)(options, golf);
            zulu['children'] = golf;
            mike = report.bind(oscar)(tango, zulu);
 625:
            entity = mike;
 628:
            return entity;
        }
    };
    tango = report.bind(options)(tango);
    report = 15;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/forums/native/ForumPost.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    mike = function(argFoo) { // Original name: ForumPostListDisabled
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            golf = entity.style;
            verify = entity.localDeviceMedia;
            entity = entity.threadId;
            var _closure2_slot0 = entity;
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            options = 7;
            entity = tango[options];
            report = undefined;
            foxtrot = zulu.bind(report)(entity);
            yankee = foxtrot.useStateFromStores;
            romeo = _closure1_slot3;
            offset = new Array(1);
            offset[0] = romeo;
            entity = function() {
                zulu = _closure1_slot3;
                mike = zulu.getChannel;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            backup = yankee.bind(foxtrot)(offset, entity);
            var _closure2_slot1 = backup;
            offset = _closure1_slot1;
            entity = 8;
            entity = tango[entity];
            foxtrot = offset.bind(report)(entity);
            entity = null;
            yankee = entity != backup;
            offset = '[Forum Post] The thread should not be null here. A store must have missed an update.';
            offset = foxtrot.bind(report)(yankee, offset);
            options = tango[options];
            yankee = zulu.bind(report)(options);
            offset = yankee.useStateFromStores;
            options = new Array(1);
            options[0] = romeo;
            mike = function() {
                zulu = _closure1_slot3;
                mike = zulu.getChannel;
                entity = _closure2_slot1;
                entity = entity.parent_id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            foxtrot = offset.bind(yankee)(options, mike);
            mike = 9;
            mike = tango[mike];
            options = zulu.bind(report)(mike);
            mike = options.useFirstForumPostMessage;
            mike = mike.bind(options)(backup);
            romeo = mike.firstMessage;
            offset = mike.loaded;
            mike = 10;
            mike = tango[mike];
            tango = zulu.bind(report)(mike);
            zulu = tango.useForumPostFirstMessageMarkup;
            mike = {};
            mike['firstMessage'] = romeo;
            mike = zulu.bind(tango)(mike);
            yankee = mike.content;
            if(!offset) { _fun00004_ip = 353; continue _fun00003 }
 230:
            tango = _closure1_slot5;
            zulu = _closure1_slot0;
            kilo = _closure1_slot2;
            mike = 11;
            mike = kilo[mike];
            mike = zulu.bind(report)(mike);
            zulu = mike.ForumPostDisabledContainer;
            mike = {};
            mike['style'] = golf;
            options = _closure1_slot5;
            golf = _closure1_slot1;
            oscar = 12;
            oscar = kilo[oscar];
            golf = golf.bind(report)(oscar);
            oscar = {};
            oscar['thread'] = backup;
            oscar['parentChannel'] = foxtrot;
            oscar['firstMessage'] = romeo;
            oscar['messageContent'] = yankee;
            oscar['media'] = verify;
            verify = true;
            oscar['hasUnreads'] = verify;
            yankee = false;
            oscar['isNew'] = yankee;
            oscar['firstMessageLoaded'] = offset;
            oscar['isLocalDeviceMedia'] = verify;
            oscar = options.bind(report)(golf, oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 353:
            return entity;
        }
    };
    zulu['ForumPostListDisabled'] = mike;
    return entity;
})();