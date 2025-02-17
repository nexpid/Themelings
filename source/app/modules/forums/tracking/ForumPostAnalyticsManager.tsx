// app/modules/forums/tracking/ForumPostAnalyticsManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot12;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 70: // try_end0
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot12 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot12 = entity;
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
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 10;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: ForumPostAnalyticsManager
            oscar = this;
            yankee = 0;
            golf = copyRestArgs(yankee);
            zulu = _closure1_slot3;
            report = _closure2_slot0;
            tango = undefined;
            zulu = zulu.bind(tango)(oscar, report);
            zulu = _closure1_slot11;
            entity = new Array(0);
            yankee = entity;
            offset = golf;
            verify = 0;
            golf = arraySpread(yankee, offset, verify);
            entity = zulu.bind(tango)(oscar, report, entity);
            var _closure3_slot0 = entity;
            zulu = {};
            entity['readStateSnapshots'] = zulu;
            zulu = {};
            tango = function(argFoo) { // Original name: CHANNEL_SELECT
                zulu = _closure3_slot0;
                mike = zulu.handleChannelSelect;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu['CHANNEL_SELECT'] = tango;
            tango = function(argFoo) { // Original name: THREAD_CREATE
                zulu = _closure3_slot0;
                mike = zulu.handleThreadCreate;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu['THREAD_CREATE'] = tango;
            entity['actions'] = zulu;
            zulu = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = argFoo;
                    tango = entity.channelId;
                    mike = null;
                    if(!(mike != tango)) { _fun00006_ip = 83; continue _fun00005 }
 14:
                    zulu = _closure1_slot10;
                    entity = zulu.getChannel;
                    entity = entity.bind(zulu)(tango);
                    mike = mike != entity;
                    if(!mike) { _fun00006_ip = 48; continue _fun00005 }
 38:
                    zulu = entity.isForumLikeChannel;
                    mike = zulu.bind(entity)();
 48:
                    if(!mike) { _fun00006_ip = 83; continue _fun00005 }
 51:
                    zulu = _closure3_slot0;
                    mike = {};
                    zulu['readStateSnapshots'] = mike;
                    mike = zulu.processForumChannel;
                    entity = entity.guild_id;
                    entity = mike.bind(zulu)(entity, tango);
 83:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleChannelSelect'] = zulu;
            zulu = function(argFoo, argBar) {
                report = _closure1_slot8;
                tango = report.getThreadsForParent;
                zulu = argFoo;
                mike = argBar;
                tango = tango.bind(report)(zulu, mike);
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 8;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.keys;
                tango = mike.bind(zulu)(tango);
                zulu = tango.forEach;
                mike = function(argFoo) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        tango = argFoo;
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 9;
                        mike = mike[entity];
                        entity = undefined;
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.getForumPostReadStatesById;
                        zulu = mike.bind(zulu)(tango);
                        mike = null;
                        if(!(mike != zulu)) { _fun00008_ip = 62; continue _fun00007 }
 45:
                        mike = _closure3_slot0;
                        mike = mike.readStateSnapshots;
                        mike[tango] = zulu;
 62:
                        return entity;
                    }
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity['processForumChannel'] = zulu;
            mike = function(argFoo) {
                entity = _closure3_slot0;
                mike = entity.readStateSnapshots;
                entity = argFoo;
                entity = mike[entity];
                return entity;
            };
            entity['getReadStateSnapshotAnalytics'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        oscar = _closure1_slot7;
        zulu = undefined;
        report = argFoo;
        report = oscar.bind(zulu)(tango, report);
        mike = _closure1_slot4;
        report = {};
        oscar = 'handleThreadCreate';
        report['key'] = oscar;
        entity = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = argFoo;
                entity = entity.channel;
                mike = entity.isForumPost;
                mike = mike.bind(entity)();
                if(!mike) { _fun00010_ip = 81; continue _fun00009 }
 21:
                report = entity.ownerId;
                zulu = _closure1_slot9;
                mike = zulu.getId;
                tango = mike.bind(zulu)();
                mike = this;
                zulu = mike.readStateSnapshots;
                mike = entity.id;
                entity = {};
                tango = report === tango;
                tango = !tango;
                entity['isNew'] = tango;
                entity['hasUnreads'] = tango;
                zulu[mike] = entity;
 81:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(1);
        entity[0] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/forums/tracking/ForumPostAnalyticsManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();