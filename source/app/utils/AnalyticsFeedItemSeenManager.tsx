// app/utils/AnalyticsFeedItemSeenManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 343; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot8;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot8;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 343:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    golf = entity.Object;
    oscar = golf.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(golf)(zulu, entity, tango);
    offset = 0;
    tango = options[offset];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot2 = tango;
    verify = 1;
    tango = options[verify];
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    golf = 2;
    tango = options[golf];
    tango = report.bind(entity)(tango);
    var _closure1_slot4 = tango;
    oscar = {};
    tango = 'forum_channel';
    oscar['FORUM_CHANNEL'] = tango;
    report = {};
    report['IMMEDIATE'] = offset;
    tango = 'IMMEDIATE';
    report[offset] = tango;
    report['IMMEDIATE_WITH_COOLDOWN'] = verify;
    tango = 'IMMEDIATE_WITH_COOLDOWN';
    report[verify] = tango;
    report['IMMEDIATE_WITH_DELAY'] = golf;
    tango = 'IMMEDIATE_WITH_DELAY';
    report[golf] = tango;
    var _closure1_slot5 = report;
    tango = function() {
        tango = _closure1_slot4;
        zulu = function() { // Original name: TrackedFeedItem
            zulu = this;
            tango = _closure1_slot3;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = new Array(0);
            zulu['seenIntervals'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'maybeMarkSeen';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                mike = this;
                zulu = mike.seenIntervals;
                entity = mike.seenIntervals;
                tango = entity.length;
                entity = 1;
                entity = tango - entity;
                zulu = zulu[entity];
                tango = null;
                entity = tango == zulu;
                if(entity) { _fun00008_ip = 50; continue _fun00007 }
 40:
                zulu = zulu.endTimeMillis;
                entity = tango != zulu;
 50:
                if(!entity) { _fun00008_ip = 81; continue _fun00007 }
 53:
                tango = mike.seenIntervals;
                zulu = tango.push;
                mike = {};
                report = argFoo;
                mike['startTimeMillis'] = report;
                mike = zulu.bind(tango)(mike);
                entity = true;
 81:
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(4);
        mike[0] = entity;
        entity = {};
        oscar = 'maybeMarkUnseen';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = this;
                mike = entity.seenIntervals;
                entity = entity.seenIntervals;
                zulu = entity.length;
                entity = 1;
                entity = zulu - entity;
                zulu = mike[entity];
                tango = null;
                entity = tango != zulu;
                if(!entity) { _fun00010_ip = 50; continue _fun00009 }
 40:
                mike = zulu.endTimeMillis;
                entity = tango == mike;
 50:
                if(!entity) { _fun00010_ip = 64; continue _fun00009 }
 53:
                mike = argFoo;
                zulu['endTimeMillis'] = mike;
                entity = true;
 64:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'isVisible';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = this;
                mike = entity.seenIntervals;
                entity = entity.seenIntervals;
                zulu = entity.length;
                entity = 1;
                entity = zulu - entity;
                tango = mike[entity];
                zulu = null;
                report = zulu == tango;
                entity = undefined;
                if(report) { _fun00012_ip = 48; continue _fun00011 }
 42:
                entity = tango.startTimeMillis;
 48:
                entity = zulu != entity;
                if(!entity) { _fun00012_ip = 74; continue _fun00011 }
 55:
                report = zulu == tango;
                mike = undefined;
                if(report) { _fun00012_ip = 70; continue _fun00011 }
 64:
                mike = tango.endTimeMillis;
 70:
                entity = zulu == mike;
 74:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'computeSeenTimeDestructive';
        entity['key'] = oscar;
        report = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                romeo = argFoo;
                tango = this;
                mike = new Array(0);
                zulu = _closure1_slot7;
                entity = tango.seenIntervals;
                options = undefined;
                yankee = zulu.bind(options)(entity);
                golf = yankee.bind(options)();
                oscar = golf.done;
                entity = global;
                offset = null;
                verify = golf;
                golf = 0;
                zulu = 0;
                if(oscar) { _fun00014_ip = 178; continue _fun00013 }
 56:
                oscar = verify.value;
                foxtrot = oscar.endTimeMillis;
                if(!(offset != foxtrot)) { _fun00014_ip = 93; continue _fun00013 }
 71:
                backup = oscar.endTimeMillis;
                foxtrot = oscar.startTimeMillis;
                foxtrot = backup - foxtrot;
                foxtrot = golf + foxtrot;
                _fun00014_ip = 157; continue _fun00013;
 93:
                if(romeo) { _fun00014_ip = 111; continue _fun00013 }
 96:
                backup = mike.push;
                backup = backup.bind(mike)(oscar);
                foxtrot = golf;
                _fun00014_ip = 157; continue _fun00013;
 111:
                kilo = entity.Date;
                backup = kilo.now;
                sizing = backup.bind(kilo)();
                oscar = oscar.startTimeMillis;
                oscar = sizing - oscar;
                foxtrot = golf + oscar;
                kilo = mike.push;
                backup = {};
                backup['startTimeMillis'] = sizing;
                backup = kilo.bind(mike)(backup);
 157:
                backup = yankee.bind(options)();
                oscar = backup.done;
                golf = foxtrot;
                verify = backup;
                zulu = golf;
                if(!oscar) { _fun00014_ip = 56; continue _fun00013 }
 178:
                oscar = _closure1_slot0;
                golf = _closure1_slot1;
                report = 3;
                report = golf[report];
                golf = oscar.bind(options)(report);
                oscar = mike.length;
                report = 2;
                oscar = oscar < report;
                report = 'there should only be a single left over data';
                report = golf.bind(options)(oscar, report);
                tango['seenIntervals'] = mike;
                mike = entity.Math;
                entity = mike.round;
                entity = entity.bind(mike)(zulu);
                return entity;
            }
        };
        entity['value'] = report;
        mike[3] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    tango = tango.bind(entity)();
    var _closure1_slot6 = tango;
    mike = function() {
        tango = _closure1_slot4;
        zulu = function(argFoo) { // Original name: AnalyticsFeedItemSeenManager
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                entity = argFoo;
                zulu = this;
                var _closure3_slot0 = zulu;
                tango = entity.id;
                mike = entity.windowId;
                report = entity.isPaused;
                options = _closure1_slot3;
                golf = _closure2_slot0;
                entity = undefined;
                golf = options.bind(entity)(zulu, golf);
                golf = function() {
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        report = _closure1_slot0;
                        oscar = _closure1_slot1;
                        tango = 4;
                        mike = oscar[tango];
                        entity = undefined;
                        offset = report.bind(entity)(mike);
                        verify = offset.subscribe;
                        zulu = _closure3_slot0;
                        options = zulu.handleFeedItemSeen;
                        golf = 'ANALYTICS_FEED_ITEM_SEEN';
                        golf = verify.bind(offset)(golf, options);
                        golf = oscar[tango];
                        offset = report.bind(entity)(golf);
                        verify = offset.subscribe;
                        options = zulu.handleFeedItemUnseen;
                        golf = 'ANALYTICS_FEED_ITEM_UNSEEN';
                        golf = verify.bind(offset)(golf, options);
                        golf = oscar[tango];
                        offset = report.bind(entity)(golf);
                        verify = offset.subscribe;
                        options = zulu.handleFeedItemFlush;
                        golf = 'ANALYTICS_FEED_FLUSH';
                        golf = verify.bind(offset)(golf, options);
                        golf = oscar[tango];
                        offset = report.bind(entity)(golf);
                        verify = offset.subscribe;
                        options = zulu.handleAppStateUpdate;
                        golf = 'APP_STATE_UPDATE';
                        golf = verify.bind(offset)(golf, options);
                        tango = oscar[tango];
                        golf = report.bind(entity)(tango);
                        oscar = golf.subscribe;
                        report = zulu.handleWindowFocus;
                        tango = 'WINDOW_FOCUS';
                        tango = oscar.bind(golf)(tango, report);
                        tango = zulu.onInitialize;
                        zulu = null;
                        if(!(zulu != tango)) { _fun00018_ip = 212; continue _fun00017 }
 198:
                        zulu = tango.call;
                        mike = _closure3_slot0;
                        mike = zulu.bind(tango)(mike);
 212:
                        return entity;
                    }
                };
                zulu['initialize'] = golf;
                golf = function() {
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        oscar = _closure1_slot0;
                        golf = _closure1_slot1;
                        report = 4;
                        zulu = golf[report];
                        entity = undefined;
                        yankee = oscar.bind(entity)(zulu);
                        offset = yankee.unsubscribe;
                        tango = _closure3_slot0;
                        verify = tango.handleFeedItemSeen;
                        options = 'ANALYTICS_FEED_ITEM_SEEN';
                        options = offset.bind(yankee)(options, verify);
                        options = golf[report];
                        yankee = oscar.bind(entity)(options);
                        offset = yankee.unsubscribe;
                        verify = tango.handleFeedItemUnseen;
                        options = 'ANALYTICS_FEED_ITEM_UNSEEN';
                        options = offset.bind(yankee)(options, verify);
                        options = golf[report];
                        yankee = oscar.bind(entity)(options);
                        offset = yankee.unsubscribe;
                        verify = tango.handleFeedItemFlush;
                        options = 'ANALYTICS_FEED_FLUSH';
                        options = offset.bind(yankee)(options, verify);
                        options = golf[report];
                        yankee = oscar.bind(entity)(options);
                        offset = yankee.unsubscribe;
                        verify = tango.handleAppStateUpdate;
                        options = 'APP_STATE_UPDATE';
                        options = offset.bind(yankee)(options, verify);
                        report = golf[report];
                        options = oscar.bind(entity)(report);
                        golf = options.unsubscribe;
                        oscar = tango.handleWindowFocus;
                        report = 'WINDOW_FOCUS';
                        report = golf.bind(options)(report, oscar);
                        oscar = tango.onTerminate;
                        tango = null;
                        if(!(tango != oscar)) { _fun00020_ip = 212; continue _fun00019 }
 198:
                        report = oscar.call;
                        tango = _closure3_slot0;
                        tango = report.bind(oscar)(tango);
 212:
                        tango = _closure3_slot0;
                        zulu = tango.maybeFlushSeenItems;
                        mike = _closure1_slot5;
                        mike = mike.IMMEDIATE;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    }
                };
                zulu['terminate'] = golf;
                golf = function(argFoo) {
                    _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                        entity = argFoo;
                        tango = entity.id;
                        zulu = entity.force;
                        mike = _closure3_slot0;
                        mike = mike._id;
                        if(!(mike === tango)) { _fun00022_ip = 46; continue _fun00021 }
 31:
                        mike = _closure3_slot0;
                        entity = mike.maybeFlushSeenItems;
                        entity = entity.bind(mike)(zulu);
 46:
                        entity = undefined;
                        return entity;
                    }
                };
                zulu['handleFeedItemFlush'] = golf;
                golf = function(argFoo) {
                    _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                        entity = argFoo;
                        tango = entity.id;
                        oscar = entity.timestampMillis;
                        zulu = entity.feedItemId;
                        entity = _closure3_slot0;
                        entity = entity._id;
                        if(!(tango === entity)) { _fun00024_ip = 126; continue _fun00023 }
 37:
                        entity = _closure3_slot0;
                        tango = entity._paused;
                        entity = _closure3_slot0;
                        if(tango) { _fun00024_ip = 110; continue _fun00023 }
 54:
                        tango = entity.getTrackedFeedItem;
                        report = tango.bind(entity)(zulu);
                        tango = report.maybeMarkSeen;
                        oscar = tango.bind(report)(oscar);
                        report = entity.onFeedItemSeen;
                        tango = null;
                        if(!(tango != report)) { _fun00024_ip = 126; continue _fun00023 }
 92:
                        tango = report.call;
                        mike = _closure3_slot0;
                        mike = tango.bind(report)(mike, zulu, oscar);
                        _fun00024_ip = 126; continue _fun00023;
 110:
                        mike = entity._pausedFeedItemIds;
                        entity = mike.add;
                        entity = entity.bind(mike)(zulu);
 126:
                        entity = undefined;
                        return entity;
                    }
                };
                zulu['handleFeedItemSeen'] = golf;
                golf = function(argFoo) {
                    _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                        entity = argFoo;
                        zulu = entity.id;
                        report = entity.timestampMillis;
                        oscar = entity.feedItemId;
                        mike = _closure3_slot0;
                        mike = mike._id;
                        if(!(zulu === mike)) { _fun00026_ip = 142; continue _fun00025 }
 37:
                        mike = _closure3_slot0;
                        mike = mike._paused;
                        if(!mike) { _fun00026_ip = 70; continue _fun00025 }
 50:
                        mike = _closure3_slot0;
                        zulu = mike._pausedFeedItemIds;
                        mike = zulu.delete;
                        mike = mike.bind(zulu)(oscar);
 70:
                        mike = _closure3_slot0;
                        zulu = mike.getTrackedFeedItem;
                        tango = zulu.bind(mike)(oscar);
                        zulu = tango.maybeMarkUnseen;
                        report = zulu.bind(tango)(report);
                        tango = mike.onFeedItemUnseen;
                        mike = null;
                        if(!(mike != tango)) { _fun00026_ip = 128; continue _fun00025 }
 112:
                        zulu = tango.call;
                        mike = _closure3_slot0;
                        mike = zulu.bind(tango)(mike, oscar, report);
 128:
                        mike = _closure3_slot0;
                        entity = mike.maybeFlushSeenItems;
                        entity = entity.bind(mike)();
 142:
                        entity = undefined;
                        return entity;
                    }
                };
                zulu['handleFeedItemUnseen'] = golf;
                golf = function(argFoo) {
                    _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                        mike = argFoo;
                        zulu = _closure3_slot0;
                        zulu = zulu.trackedFeedItems;
                        tango = zulu[mike];
                        zulu = null;
                        if(!(zulu == tango)) { _fun00028_ip = 67; continue _fun00027 }
 26:
                        zulu = _closure3_slot0;
                        tango = zulu.trackedFeedItems;
                        zulu = _closure1_slot6;
                        report = zulu.prototype;
                        report = Object.create(report, {constructor: {value: zulu}});
                        oscar = report;
                        zulu = new oscar[zulu](report);
                        zulu = zulu instanceof Object ? zulu : report;
                        tango[mike] = zulu;
 67:
                        entity = _closure3_slot0;
                        entity = entity.trackedFeedItems;
                        entity = entity[mike];
                        return entity;
                    }
                };
                zulu['getTrackedFeedItem'] = golf;
                golf = function() {
                    entity = global;
                    tango = entity.Object;
                    zulu = tango.keys;
                    mike = _closure3_slot0;
                    mike = mike.trackedFeedItems;
                    tango = zulu.bind(tango)(mike);
                    zulu = entity.Set;
                    mike = tango.filter;
                    entity = function(argFoo) {
                        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                            entity = _closure3_slot0;
                            mike = entity.trackedFeedItems;
                            entity = argFoo;
                            zulu = mike[entity];
                            entity = null;
                            mike = entity == zulu;
                            entity = undefined;
                            if(mike) { _fun00030_ip = 41; continue _fun00029 }
 31:
                            mike = zulu.isVisible;
                            entity = mike.bind(zulu)();
 41:
                            return entity;
                        }
                    };
                    report = mike.bind(tango)(entity);
                    mike = zulu.prototype;
                    mike = Object.create(mike, {constructor: {value: zulu}});
                    oscar = mike;
                    entity = new oscar[zulu](report, tango);
                    entity = entity instanceof Object ? entity : mike;
                    return entity;
                };
                zulu['getVisibleFeedItemIds'] = golf;
                golf = function(argFoo) {
                    _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                        entity = argFoo;
                        mike = entity.state;
                        entity = 'active';
                        entity = entity === mike;
                        if(!entity) { _fun00032_ip = 32; continue _fun00031 }
 19:
                        zulu = _closure3_slot0;
                        entity = zulu._isReactNavigationFocused;
 32:
                        if(!entity) { _fun00032_ip = 52; continue _fun00031 }
 35:
                        zulu = _closure3_slot0;
                        entity = zulu.resume;
                        entity = entity.bind(zulu)();
 52:
                        entity = 'background';
                        if(!(entity === mike)) { _fun00032_ip = 118; continue _fun00031 }
 60:
                        mike = _closure3_slot0;
                        mike = mike._isReactNavigationFocused;
                        if(!mike) { _fun00032_ip = 90; continue _fun00031 }
 76:
                        zulu = _closure3_slot0;
                        mike = zulu.pause;
                        mike = mike.bind(zulu)();
 90:
                        zulu = _closure3_slot0;
                        mike = zulu.maybeFlushSeenItems;
                        entity = _closure1_slot5;
                        entity = entity.IMMEDIATE;
                        entity = mike.bind(zulu)(entity);
 118:
                        entity = undefined;
                        return entity;
                    }
                };
                zulu['handleAppStateUpdate'] = golf;
                golf = function() {
                    mike = _closure3_slot0;
                    entity = global;
                    entity = entity.Set;
                    zulu = entity.prototype;
                    zulu = Object.create(zulu, {constructor: {value: entity}});
                    tango = zulu;
                    entity = new tango[entity](zulu);
                    entity = entity instanceof Object ? entity : zulu;
                    mike['_pausedFeedItemIds'] = entity;
                    entity = false;
                    mike['_paused'] = entity;
                    entity = undefined;
                    return entity;
                };
                zulu['clearPausedFeedItemIds'] = golf;
                golf = function() {
                    _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                        mike = _closure3_slot0;
                        mike = mike._paused;
                        if(mike) { _fun00034_ip = 61; continue _fun00033 }
 16:
                        mike = _closure3_slot0;
                        entity = mike.getVisibleFeedItemIds;
                        entity = entity.bind(mike)();
                        tango = entity.forEach;
                        zulu = function(argFoo) {
                            zulu = _closure3_slot0;
                            mike = zulu.handleFeedItemUnseen;
                            entity = {};
                            tango = zulu._id;
                            entity['id'] = tango;
                            tango = argFoo;
                            entity['feedItemId'] = tango;
                            tango = global;
                            report = tango.Date;
                            tango = report.now;
                            tango = tango.bind(report)();
                            entity['timestampMillis'] = tango;
                            tango = 'ANALYTICS_FEED_ITEM_UNSEEN';
                            entity['type'] = tango;
                            entity = mike.bind(zulu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        zulu = tango.bind(entity)(zulu);
                        zulu = true;
                        mike['_paused'] = zulu;
                        mike['_pausedFeedItemIds'] = entity;
 61:
                        entity = undefined;
                        return entity;
                    }
                };
                zulu['pause'] = golf;
                golf = function() {
                    _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                        mike = _closure3_slot0;
                        mike = mike._paused;
                        if(!mike) { _fun00036_ip = 61; continue _fun00035 }
 16:
                        mike = _closure3_slot0;
                        entity = false;
                        mike['_paused'] = entity;
                        tango = mike._pausedFeedItemIds;
                        zulu = tango.forEach;
                        entity = function(argFoo) {
                            zulu = _closure3_slot0;
                            mike = zulu.handleFeedItemSeen;
                            entity = {};
                            tango = zulu._id;
                            entity['id'] = tango;
                            tango = argFoo;
                            entity['feedItemId'] = tango;
                            tango = global;
                            report = tango.Date;
                            tango = report.now;
                            tango = tango.bind(report)();
                            entity['timestampMillis'] = tango;
                            tango = 'ANALYTICS_FEED_ITEM_SEEN';
                            entity['type'] = tango;
                            entity = mike.bind(zulu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        entity = zulu.bind(tango)(entity);
                        entity = mike.clearPausedFeedItemIds;
                        entity = entity.bind(mike)();
 61:
                        entity = undefined;
                        return entity;
                    }
                };
                zulu['resume'] = golf;
                golf = function(argFoo) {
                    _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                        entity = _closure3_slot0;
                        zulu = argFoo;
                        entity['_isReactNavigationFocused'] = zulu;
                        entity = entity._isReactNavigationFocused;
                        mike = _closure3_slot0;
                        if(entity) { _fun00038_ip = 41; continue _fun00037 }
 29:
                        entity = mike.pause;
                        entity = entity.bind(mike)();
                        _fun00038_ip = 51; continue _fun00037;
 41:
                        entity = mike.resume;
                        entity = entity.bind(mike)();
 51:
                        entity = undefined;
                        return entity;
                    }
                };
                zulu['handleReactNavigationFocus'] = golf;
                oscar = function(argFoo) {
                    _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                        entity = argFoo;
                        zulu = _closure3_slot0;
                        tango = zulu._windowId;
                        zulu = entity.windowId;
                        if(!(tango === zulu)) { _fun00040_ip = 61; continue _fun00039 }
 26:
                        entity = entity.focused;
                        mike = _closure3_slot0;
                        if(entity) { _fun00040_ip = 51; continue _fun00039 }
 39:
                        entity = mike.pause;
                        entity = entity.bind(mike)();
                        _fun00040_ip = 61; continue _fun00039;
 51:
                        entity = mike.resume;
                        entity = entity.bind(mike)();
 61:
                        entity = undefined;
                        return entity;
                    }
                };
                zulu['handleWindowFocus'] = oscar;
                oscar = {};
                zulu['trackedFeedItems'] = oscar;
                zulu['_id'] = tango;
                zulu['_windowId'] = mike;
                mike = global;
                tango = mike.Set;
                oscar = tango.prototype;
                oscar = Object.create(oscar, {constructor: {value: tango}});
                yankee = oscar;
                tango = new yankee[tango](offset);
                tango = tango instanceof Object ? tango : oscar;
                zulu['_pausedFeedItemIds'] = tango;
                tango = null;
                tango = tango != report;
                if(!tango) { _fun00016_ip = 260; continue _fun00015 }
 257:
                tango = report;
 260:
                zulu['_paused'] = tango;
                tango = true;
                zulu['_isReactNavigationFocused'] = tango;
                tango = mike.Date;
                mike = tango.now;
                mike = mike.bind(tango)();
                zulu['_lastFlushTimeMillis'] = mike;
                return entity;
            }
        };
        var _closure2_slot0 = zulu;
        entity = {};
        report = 'maybeFlushSeenItems';
        entity['key'] = report;
        mike = function(argFoo) { // Original name: value
            _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                oscar = argFoo;
                options = this;
                golf = null;
                if(!(golf == oscar)) { _fun00042_ip = 54; continue _fun00041 }
 14:
                entity = global;
                zulu = entity.Date;
                mike = zulu.now;
                zulu = mike.bind(zulu)();
                mike = options._lastFlushTimeMillis;
                zulu = zulu - mike;
                mike = 60000;
                if(!(!(zulu < mike))) { _fun00042_ip = 294; continue _fun00041 }
 54:
                mike = _closure1_slot5;
                mike = mike.IMMEDIATE_WITH_COOLDOWN;
                if(!(oscar === mike)) { _fun00042_ip = 111; continue _fun00041 }
 71:
                mike = global;
                verify = mike.Date;
                report = verify.now;
                verify = report.bind(verify)();
                report = options._lastFlushTimeMillis;
                verify = verify - report;
                report = 3000;
                if(!(!(verify < report))) { _fun00042_ip = 276; continue _fun00041 }
 111:
                report = options.createFlushSeenItemsFunction;
                report = report.bind(options)(oscar);
                var _closure3_slot0 = report;
                if(!(golf != report)) { _fun00042_ip = 256; continue _fun00041 }
 133:
                report = global;
                verify = report.Date;
                golf = verify.now;
                golf = golf.bind(verify)();
                options['_lastFlushTimeMillis'] = golf;
                golf = _closure1_slot5;
                golf = golf.IMMEDIATE;
                if(!(oscar !== golf)) { _fun00042_ip = 217; continue _fun00041 }
 170:
                zulu = _closure1_slot5;
                zulu = zulu.IMMEDIATE_WITH_COOLDOWN;
                if(!(oscar !== zulu)) { _fun00042_ip = 217; continue _fun00041 }
 184:
                golf = report.Promise;
                zulu = golf.prototype;
                oscar = Object.create(zulu, {constructor: {value: golf}});
                offset = function(argFoo) {
                    entity = argFoo;
                    var _closure4_slot0 = entity;
                    entity = global;
                    tango = entity.setTimeout;
                    zulu = _closure1_slot2;
                    entity = undefined;
                    mike = function* () {
                        entity = function* () { // Original name: ?anon_0_
                            _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(mike) { _fun00044_ip = 47; continue _fun00043 }
 7:
                                mike = _closure3_slot0;
                                zulu = undefined;
                                mike = mike.bind(zulu)();
                                SaveGenerator(address=24);
 22:
                                return mike;
 24:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                if(tango) { _fun00044_ip = 44; continue _fun00043 }
 30:
                                tango = _closure4_slot0;
                                tango = tango.bind(zulu)();
                                return zulu;
 44:
                                return mike;
 47:
                                return entity;
                            }
                        };
                        return entity;
                    };
                    zulu = zulu.bind(entity)(mike);
                    mike = 100;
                    mike = tango.bind(entity)(zulu, mike);
                    return entity;
                };
                yankee = oscar;
                zulu = new yankee[golf](offset, verify);
                zulu = zulu instanceof Object ? zulu : oscar;
                _fun00042_ip = 254; continue _fun00041;
 217:
                oscar = report.Promise;
                report = function() {
                    tango = _closure1_slot2;
                    zulu = undefined;
                    mike = function* (argFoo) {
                        entity = function* (argFoo) { // Original name: ?anon_0_
                            _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(mike) { _fun00046_ip = 43; continue _fun00045 }
 7:
                                mike = _closure3_slot0;
                                zulu = undefined;
                                mike = mike.bind(zulu)();
                                SaveGenerator(address=24);
 22:
                                return mike;
 24:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                if(tango) { _fun00046_ip = 40; continue _fun00045 }
 30:
                                tango = argFoo;
                                tango = tango.bind(zulu)();
                                return zulu;
 40:
                                return mike;
 43:
                                return entity;
                            }
                        };
                        return entity;
                    };
                    mike = tango.bind(zulu)(mike);
                    var _closure4_slot0 = mike;
                    entity = function() {
                        entity = undefined;
                        tango = _closure4_slot0;
                        zulu = tango.apply;
                        entity = arguments;
                        mike = entity;
                        entity = this;
                        entity = zulu.bind(tango)(entity, mike);
                        return entity;
                    };
                    return entity;
                };
                tango = undefined;
                offset = report.bind(tango)();
                report = oscar.prototype;
                report = Object.create(report, {constructor: {value: oscar}});
                yankee = report;
                tango = new yankee[oscar](offset, verify);
                zulu = tango instanceof Object ? tango : report;
 254:
                _fun00042_ip = 274; continue _fun00041;
 256:
                tango = global;
                report = tango.Promise;
                tango = report.resolve;
                zulu = tango.bind(report)();
 274:
                return zulu;
 276:
                zulu = mike.Promise;
                mike = zulu.resolve;
                mike = mike.bind(zulu)();
                return mike;
 294:
                mike = entity.Promise;
                entity = mike.resolve;
                entity = entity.bind(mike)();
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(1);
        mike[0] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    golf = 5;
    options = options[golf];
    golf = argBar;
    verify = golf.bind(entity)(options);
    options = verify.fileFinishedImporting;
    golf = 'utils/AnalyticsFeedItemSeenManager.tsx';
    golf = options.bind(verify)(golf);
    zulu['AnalyticsFeedTypes'] = oscar;
    zulu['ForceFlushType'] = report;
    zulu['TrackedFeedItem'] = tango;
    zulu['AnalyticsFeedItemSeenManager'] = mike;
    return entity;
})();