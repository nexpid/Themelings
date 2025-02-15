// app/modules/forums/native/composer/ForumComposerModalActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    tango = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = tango;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, oscar);
    entity = 4;
    tango = tango[entity];
    entity = undefined;
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/forums/native/composer/ForumComposerModalActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscar = argFoo;
            tango = _closure1_slot0;
            entity = _closure1_slot2;
            report = 0;
            mike = entity[report];
            entity = undefined;
            golf = tango.bind(entity)(mike);
            tango = golf.trackMobileForumComposerOpened;
            mike = {};
            options = oscar.guildId;
            mike['guildId'] = options;
            options = oscar.parentChannelId;
            mike['channelId'] = options;
            options = oscar.analyticsLocationObject;
            mike['location'] = options;
            mike = tango.bind(golf)(mike);
            tango = oscar.isEdit;
            mike = null;
            mike = mike != tango;
            if(!mike) { _fun00002_ip = 90; continue _fun00001 }
 84:
            mike = oscar.isEdit;
 90:
            if(mike) { _fun00002_ip = 142; continue _fun00001 }
 93:
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[report];
            report = tango.bind(entity)(mike);
            tango = report.trackForumCreateNewPostStarted;
            mike = {};
            golf = oscar.guildId;
            mike['guildId'] = golf;
            golf = oscar.parentChannelId;
            mike['channelId'] = golf;
            mike = tango.bind(report)(mike);
 142:
            report = _closure1_slot1;
            mike = _closure1_slot2;
            tango = 1;
            tango = mike[tango];
            report = report.bind(entity)(tango);
            tango = report.pushLazy;
            golf = _closure1_slot0;
            zulu = 3;
            zulu = mike[zulu];
            golf = golf.bind(entity)(zulu);
            zulu = 2;
            zulu = mike[zulu];
            mike = mike.paths;
            zulu = golf.bind(entity)(zulu, mike);
            mike = 'create-forum-post';
            mike = tango.bind(report)(zulu, oscar, mike);
            return entity;
        }
    };
    zulu['openCreateForumPostModal'] = tango;
    mike = function() {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            mike = arguments[0];
            entity = undefined;
            if(!(mike === entity)) { _fun00004_ip = 11; continue _fun00003 }
 9:
            mike = false;
 11:
            if(mike) { _fun00004_ip = 46; continue _fun00003 }
 14:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 0;
            mike = tango[mike];
            zulu = zulu.bind(entity)(mike);
            mike = zulu.trackMobileForumComposerDismissed;
            mike = mike.bind(zulu)();
 46:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 1;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.popWithKey;
            mike = 'create-forum-post';
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    zulu['closeCreateForumPostModal'] = mike;
    return entity;
})();