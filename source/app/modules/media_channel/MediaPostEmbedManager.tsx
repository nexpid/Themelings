// app/modules/media_channel/MediaPostEmbedManager.tsx
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
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot16;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 48; continue _fun00001 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, zulu);
            _fun00002_ip = 86; continue _fun00001;
 48:
            oscar = global;
            options = oscar.Reflect;
            golf = options.construct;
            oscar = new Array(0);
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 86:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
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
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot16 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: resolveMediaPostEmbeds
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            golf = entity.embeds;
            zulu = null;
            report = zulu == golf;
            entity = undefined;
            tango = undefined;
            if(report) { _fun00006_ip = 45; continue _fun00005 }
 28:
            oscar = golf.filter;
            report = function(argFoo) {
                entity = argFoo;
                mike = entity.type;
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 10;
                zulu = zulu[entity];
                entity = undefined;
                entity = tango.bind(entity)(zulu);
                entity = entity.MessageEmbedTypes;
                entity = entity.POST_PREVIEW;
                entity = mike === entity;
                return entity;
            };
            tango = oscar.bind(golf)(report);
 45:
            zulu = zulu != tango;
            if(!zulu) { _fun00006_ip = 63; continue _fun00005 }
 52:
            oscar = tango.length;
            report = 0;
            zulu = report !== oscar;
 63:
            if(!zulu) { _fun00006_ip = 83; continue _fun00005 }
 66:
            zulu = tango.forEach;
            mike = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = argFoo;
                    mike = entity.url;
                    oscar = null;
                    if(!(oscar != mike)) { _fun00008_ip = 431; continue _fun00007 }
 17:
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 11;
                    zulu = tango[zulu];
                    tango = undefined;
                    report = report.bind(tango)(zulu);
                    zulu = report.isEligibleForGuildMediaChannelPostPreviewEmbed;
                    zulu = zulu.bind(report)();
                    if(!zulu) { _fun00008_ip = 431; continue _fun00007 }
 58:
                    report = _closure1_slot0;
                    golf = _closure1_slot2;
                    zulu = 12;
                    zulu = golf[zulu];
                    report = report.bind(tango)(zulu);
                    zulu = report.getMediaPostEmbedChannelPath;
                    entity = entity.url;
                    entity = zulu.bind(report)(entity);
                    if(!(oscar != entity)) { _fun00008_ip = 431; continue _fun00007 }
 101:
                    report = oscar == entity;
                    zulu = undefined;
                    if(report) { _fun00008_ip = 116; continue _fun00007 }
 110:
                    zulu = entity.threadId;
 116:
                    if(!(oscar != zulu)) { _fun00008_ip = 431; continue _fun00007 }
 123:
                    report = oscar == entity;
                    zulu = undefined;
                    if(report) { _fun00008_ip = 137; continue _fun00007 }
 132:
                    zulu = entity.channelId;
 137:
                    if(!(oscar != zulu)) { _fun00008_ip = 431; continue _fun00007 }
 144:
                    golf = _closure1_slot11;
                    report = golf.getEmbedFetchState;
                    zulu = entity.threadId;
                    report = report.bind(golf)(zulu);
                    zulu = _closure1_slot12;
                    zulu = zulu.NOT_FETCHED;
                    if(!(report === zulu)) { _fun00008_ip = 431; continue _fun00007 }
 182:
                    golf = _closure1_slot14;
                    report = golf.has;
                    zulu = entity.threadId;
                    zulu = report.bind(golf)(zulu);
                    if(zulu) { _fun00008_ip = 431; continue _fun00007 }
 208:
                    golf = _closure1_slot14;
                    report = golf.add;
                    zulu = entity.threadId;
                    zulu = report.bind(golf)(zulu);
                    report = _closure1_slot9;
                    zulu = report.getId;
                    options = zulu.bind(report)();
                    golf = _closure1_slot10;
                    report = golf.isMember;
                    verify = oscar == entity;
                    zulu = undefined;
                    if(verify) { _fun00008_ip = 266; continue _fun00007 }
 261:
                    zulu = entity.guildId;
 266:
                    report = report.bind(golf)(zulu, options);
                    verify = _closure1_slot8;
                    options = verify.isChannelGated;
                    golf = entity.guildId;
                    zulu = entity.channelId;
                    options = options.bind(verify)(golf, zulu);
                    golf = _closure1_slot0;
                    verify = _closure1_slot2;
                    zulu = 13;
                    zulu = verify[zulu];
                    verify = golf.bind(tango)(zulu);
                    golf = verify.hasFlag;
                    zulu = _closure2_slot0;
                    zulu = zulu.flags;
                    offset = oscar != zulu;
                    oscar = 0;
                    if(!offset) { _fun00008_ip = 348; continue _fun00007 }
 345:
                    oscar = zulu;
 348:
                    zulu = _closure1_slot13;
                    zulu = zulu.IS_CROSSPOST;
                    oscar = golf.bind(verify)(oscar, zulu);
                    zulu = report;
                    if(!zulu) { _fun00008_ip = 376; continue _fun00007 }
 370:
                    golf = false;
                    zulu = golf === options;
 376:
                    if(zulu) { _fun00008_ip = 391; continue _fun00007 }
 379:
                    report = !report;
                    if(!report) { _fun00008_ip = 388; continue _fun00007 }
 385:
                    report = oscar;
 388:
                    zulu = report;
 391:
                    if(zulu) { _fun00008_ip = 431; continue _fun00007 }
 394:
                    zulu = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 14;
                    mike = report[mike];
                    zulu = zulu.bind(tango)(mike);
                    mike = zulu.fetchMediaPostEmbed;
                    entity = entity.threadId;
                    entity = mike.bind(zulu)(entity);
 431:
                    entity = undefined;
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
 83:
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    tango = global;
    offset = tango.Object;
    verify = offset.defineProperty;
    options = {};
    entity = true;
    options['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, options);
    entity = 0;
    options = oscar[entity];
    entity = undefined;
    options = golf.bind(entity)(options);
    var _closure1_slot3 = options;
    options = 1;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot4 = options;
    options = 2;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot5 = options;
    options = 3;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot6 = options;
    options = 4;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot7 = options;
    options = 5;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot8 = options;
    options = 6;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot9 = options;
    options = 7;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot10 = options;
    options = 8;
    verify = oscar[options];
    verify = golf.bind(entity)(verify);
    var _closure1_slot11 = verify;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.FetchState;
    var _closure1_slot12 = options;
    options = 9;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.MessageFlags;
    var _closure1_slot13 = options;
    tango = tango.Set;
    options = tango.prototype;
    options = Object.create(options, {constructor: {value: tango}});
    backup = options;
    tango = new backup[tango](foxtrot);
    tango = tango instanceof Object ? tango : options;
    var _closure1_slot14 = tango;
    tango = 16;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        tango = function() { // Original name: MediaPostEmbedManager
            tango = this;
            entity = _closure1_slot3;
            zulu = _closure2_slot0;
            report = undefined;
            entity = entity.bind(report)(tango, zulu);
            entity = _closure1_slot15;
            entity = entity.bind(report)(tango, zulu);
            zulu = {};
            tango = entity.handleLoadThreadsSuccess;
            zulu['LOAD_THREADS_SUCCESS'] = tango;
            tango = entity.handleLoadThreadsSuccess;
            zulu['LOAD_ARCHIVED_THREADS_SUCCESS'] = tango;
            tango = entity.handleLoadForumPosts;
            zulu['LOAD_FORUM_POSTS'] = tango;
            entity['actions'] = zulu;
            tango = _closure1_slot1;
            oscar = _closure1_slot2;
            zulu = 15;
            zulu = oscar[zulu];
            tango = tango.bind(report)(zulu);
            zulu = _closure1_slot17;
            mike = {};
            oscar = function() { // Original name: onBeforeBatch
                mike = _closure1_slot14;
                entity = mike.clear;
                entity = entity.bind(mike)();
                return entity;
            };
            mike['onBeforeBatch'] = oscar;
            mike = tango.bind(report)(entity, zulu, mike);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'handleLoadThreadsSuccess';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = argFoo;
                zulu = entity.firstMessages;
                entity = null;
                if(!(entity != zulu)) { _fun00010_ip = 59; continue _fun00009 }
 15:
                tango = _closure1_slot14;
                mike = tango.clear;
                mike = mike.bind(tango)();
                if(!(entity != zulu)) { _fun00010_ip = 55; continue _fun00009 }
 36:
                mike = zulu.forEach;
                entity = function(argFoo) {
                    zulu = _closure1_slot17;
                    entity = undefined;
                    mike = argFoo;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
 55:
                entity = undefined;
                return entity;
 59:
                entity = false;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golf = 'handleLoadForumPosts';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            entity = argFoo;
            zulu = entity.threads;
            mike = _closure1_slot14;
            entity = mike.clear;
            entity = entity.bind(mike)();
            entity = global;
            mike = entity.Object;
            entity = mike.values;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.map;
            entity = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = argFoo;
                    tango = entity.first_message;
                    entity = null;
                    entity = entity != tango;
                    if(!entity) { _fun00012_ip = 34; continue _fun00011 }
 18:
                    zulu = _closure1_slot17;
                    mike = undefined;
                    zulu = zulu.bind(mike)(tango);
                    entity = undefined;
 34:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = oscar;
        entity[1] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    backup = tango;
    mike = new backup[mike](foxtrot);
    mike = mike instanceof Object ? mike : tango;
    tango = 17;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/media_channel/MediaPostEmbedManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();