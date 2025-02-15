// app/modules/threads/LazyLoadedThreadManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    tango = function(argFoo) { // Original name: loadThread
        _fun81490: for(var _fun81490_ip = 0; ; ) switch(_fun81490_ip) {
 0:
            report = argFoo;
            var _closure2_slot0 = report;
            tango = null;
            if(!(tango != report)) { _fun81490_ip = 508; continue _fun81490 }
 18:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 7;
            mike = golf[mike];
            golf = undefined;
            mike = oscar.bind(golf)(mike);
            mike = mike.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
            if(!(report !== mike)) { _fun81490_ip = 488; continue _fun81490 }
 56:
            mike = _closure1_slot10;
            mike = mike.bind(golf)(report);
            if(mike) { _fun81490_ip = 468; continue _fun81490 }
 71:
            oscar = _closure1_slot6;
            mike = oscar.getChannel;
            mike = mike.bind(oscar)(report);
            if(!(tango == mike)) { _fun81490_ip = 448; continue _fun81490 }
 92:
            mike = function() { // Original name: initialize
                _fun81491: for(var _fun81491_ip = 0; ; ) switch(_fun81491_ip) {
 0:
                    mike = _closure1_slot12;
                    if(mike) { _fun81491_ip = 63; continue _fun81491 }
 10:
                    mike = true;
                    _closure1_slot12 = mike;
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 6;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.subscribe;
                    mike = 'CONNECTION_OPEN';
                    entity = function() {
                        _fun81492: for(var _fun81492_ip = 0; ; ) switch(_fun81492_ip) {
 0:
                            mike = {};
                            _closure1_slot11 = mike;
                            zulu = _closure1_slot7;
                            mike = zulu.getChannelId;
                            zulu = mike.bind(zulu)();
                            tango = _closure1_slot6;
                            mike = tango.getChannel;
                            report = mike.bind(tango)(zulu);
                            tango = null;
                            mike = tango != zulu;
                            if(!mike) { _fun81492_ip = 50; continue _fun81492 }
 46:
                            mike = tango == report;
 50:
                            if(!mike) { _fun81492_ip = 64; continue _fun81492 }
 53:
                            mike = _closure1_slot13;
                            entity = undefined;
                            entity = mike.bind(entity)(zulu);
 64:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = zulu.bind(tango)(mike, entity);
 63:
                    entity = undefined;
                    return entity;
                }
            };
            mike = mike.bind(golf)();
            oscar = _closure1_slot3;
            mike = oscar.isConnected;
            mike = mike.bind(oscar)();
            if(mike) { _fun81490_ip = 140; continue _fun81490 }
 120:
            mike = global;
            oscar = mike.Promise;
            mike = oscar.resolve;
            mike = mike.bind(oscar)();
            return mike;
 140:
            mike = _closure1_slot11;
            mike = mike[report];
            if(!(tango == mike)) { _fun81490_ip = 407; continue _fun81490 }
 155:
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            tango = 8;
            tango = options[tango];
            yankee = oscar.bind(golf)(tango);
            offset = yankee.matchPath;
            tango = global;
            tango = tango.location;
            verify = tango.pathname;
            tango = {};
            sizing = _closure1_slot9;
            kilo = sizing.CHANNEL;
            romeo = 9;
            foxtrot = options[romeo];
            foxtrot = oscar.bind(golf)(foxtrot);
            backup = foxtrot.RouteParam;
            foxtrot = backup.guildId;
            backup = foxtrot.bind(backup)();
            romeo = options[romeo];
            romeo = oscar.bind(golf)(romeo);
            foxtrot = romeo.RouteParam;
            romeo = foxtrot.channelId;
            foxtrot = romeo.bind(foxtrot)();
            romeo = ':messageId';
            romeo = kilo.bind(sizing)(backup, foxtrot, romeo);
            tango['path'] = romeo;
            romeo = true;
            tango['exact'] = romeo;
            tango = offset.bind(yankee)(verify, tango);
            var _closure2_slot1 = tango;
            tango = 10;
            tango = options[tango];
            tango = oscar.bind(golf)(tango);
            golf = tango.HTTP;
            oscar = golf.get;
            tango = {};
            verify = _closure1_slot8;
            options = verify.CHANNEL;
            options = options.bind(verify)(report);
            tango['url'] = options;
            options = false;
            tango['rejectWithError'] = options;
            golf = oscar.bind(golf)(tango);
            oscar = golf.then;
            tango = function(argFoo) {
                _fun81493: for(var _fun81493_ip = 0; ; ) switch(_fun81493_ip) {
 0:
                    entity = argFoo;
                    oscar = entity.body;
                    zulu = _closure1_slot11;
                    mike = _closure2_slot0;
                    entity = {};
                    golf = 'LOADED';
                    entity['type'] = golf;
                    zulu[mike] = entity;
                    zulu = _closure1_slot5;
                    mike = zulu.has;
                    entity = oscar.type;
                    entity = mike.bind(zulu)(entity);
                    if(!entity) { _fun81493_ip = 156; continue _fun81493 }
 58:
                    mike = _closure1_slot1;
                    zulu = _closure1_slot2;
                    entity = 6;
                    entity = zulu[entity];
                    golf = undefined;
                    zulu = mike.bind(golf)(entity);
                    mike = zulu.dispatch;
                    entity = {};
                    options = 'THREAD_CREATE';
                    entity['type'] = options;
                    tango = _closure1_slot4;
                    tango = tango.bind(golf)(oscar);
                    entity['channel'] = tango;
                    tango = _closure2_slot1;
                    oscar = null;
                    options = oscar == tango;
                    tango = undefined;
                    if(options) { _fun81493_ip = 147; continue _fun81493 }
 123:
                    report = _closure2_slot1;
                    report = report.params;
                    oscar = oscar == report;
                    tango = undefined;
                    if(oscar) { _fun81493_ip = 147; continue _fun81493 }
 142:
                    tango = report.messageId;
 147:
                    entity['messageId'] = tango;
                    entity = mike.bind(zulu)(entity);
 156:
                    entity = undefined;
                    return entity;
                }
            };
            oscar = oscar.bind(golf)(tango);
            tango = oscar.catch;
            entity = function() {
                _fun81494: for(var _fun81494_ip = 0; ; ) switch(_fun81494_ip) {
 0:
                    zulu = _closure1_slot11;
                    oscar = _closure2_slot0;
                    mike = {};
                    tango = 'NOT_FOUND';
                    mike['type'] = tango;
                    zulu[oscar] = mike;
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 6;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.dispatch;
                    mike = {};
                    report = 'CHANNEL_DELETE';
                    mike['type'] = report;
                    report = {};
                    report['id'] = oscar;
                    oscar = _closure2_slot1;
                    options = null;
                    verify = options == oscar;
                    oscar = undefined;
                    if(verify) { _fun81494_ip = 110; continue _fun81494 }
 86:
                    golf = _closure2_slot1;
                    golf = golf.params;
                    options = options == golf;
                    oscar = undefined;
                    if(options) { _fun81494_ip = 110; continue _fun81494 }
 105:
                    oscar = golf.guildId;
 110:
                    report['guild_id'] = oscar;
                    report['parent_id'] = entity;
                    mike['channel'] = report;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                }
            };
            entity = tango.bind(oscar)(entity);
            tango = _closure1_slot11;
            zulu = {};
            oscar = 'LOADING';
            zulu['type'] = oscar;
            zulu['promise'] = entity;
            tango[report] = zulu;
            return entity;
 407:
            zulu = mike.type;
            entity = 'LOADING';
            if(!(entity !== zulu)) { _fun81490_ip = 440; continue _fun81490 }
 420:
            entity = global;
            zulu = entity.Promise;
            entity = zulu.resolve;
            entity = entity.bind(zulu)();
            _fun81490_ip = 446; continue _fun81490;
 440:
            entity = mike.promise;
 446:
            return entity;
 448:
            entity = global;
            mike = entity.Promise;
            entity = mike.resolve;
            entity = entity.bind(mike)();
            return entity;
 468:
            entity = global;
            mike = entity.Promise;
            entity = mike.resolve;
            entity = entity.bind(mike)();
            return entity;
 488:
            entity = global;
            mike = entity.Promise;
            entity = mike.resolve;
            entity = entity.bind(mike)();
            return entity;
 508:
            entity = global;
            mike = entity.Promise;
            entity = mike.resolve;
            entity = entity.bind(mike)();
            return entity;
        }
    };
    var _closure1_slot13 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = options.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    verify = mike.createChannelRecordFromServer;
    var _closure1_slot4 = verify;
    mike = mike.THREAD_CHANNEL_TYPES;
    var _closure1_slot5 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    options = mike.Endpoints;
    var _closure1_slot8 = options;
    mike = mike.Routes;
    var _closure1_slot9 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.isStaticChannelRoute;
    var _closure1_slot10 = mike;
    mike = {};
    var _closure1_slot11 = mike;
    mike = false;
    var _closure1_slot12 = mike;
    mike = {};
    mike['loadThread'] = tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/threads/LazyLoadedThreadManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();