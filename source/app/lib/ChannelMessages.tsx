// app/lib/ChannelMessages.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscar;
    entity = function(argFoo, argBar) { // Original name: mergeMessage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            tango = argBar;
            zulu = mike.get;
            entity = tango.id;
            entity = zulu.bind(mike)(entity);
            options = null;
            if(!(options != entity)) { _fun00002_ip = 189; continue _fun00001 }
 30:
            zulu = entity.editedTimestamp;
            zulu = options != zulu;
            report = 0;
            if(!zulu) { _fun00002_ip = 54; continue _fun00001 }
 45:
            zulu = entity.editedTimestamp;
            report = zulu - 0;
 54:
            zulu = tango.edited_timestamp;
            golf = options != zulu;
            zulu = 0;
            if(!golf) { _fun00002_ip = 106; continue _fun00001 }
 69:
            golf = global;
            offset = golf.Date;
            yankee = tango.edited_timestamp;
            verify = offset.prototype;
            verify = Object.create(verify, {constructor: {value: offset}});
            romeo = verify;
            golf = new romeo[offset](yankee, offset);
            golf = golf instanceof Object ? golf : verify;
            zulu = golf - 0;
 106:
            zulu = zulu > report;
            if(zulu) { _fun00002_ip = 160; continue _fun00001 }
 113:
            report = entity.embeds;
            report = report.length;
            verify = tango.embeds;
            offset = options == verify;
            golf = undefined;
            if(offset) { _fun00002_ip = 144; continue _fun00001 }
 139:
            golf = verify.length;
 144:
            options = options != golf;
            oscar = 0;
            if(!options) { _fun00002_ip = 156; continue _fun00001 }
 153:
            oscar = golf;
 156:
            zulu = report < oscar;
 160:
            if(zulu) { _fun00002_ip = 177; continue _fun00001 }
 163:
            oscar = entity.content;
            report = tango.content;
            zulu = oscar !== report;
 177:
            if(zulu) { _fun00002_ip = 189; continue _fun00001 }
 180:
            mike = mike.cached;
            if(!mike) { _fun00002_ip = 225; continue _fun00001 }
 189:
            report = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 5;
            zulu = zulu[mike];
            mike = undefined;
            zulu = report.bind(mike)(zulu);
            mike = zulu.createMessageRecord;
            entity = mike.bind(zulu)(tango);
 225:
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
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
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
    options = tango.MAX_MESSAGES_PER_CHANNEL;
    var _closure1_slot6 = options;
    options = tango.MAX_LOADED_MESSAGES;
    var _closure1_slot7 = options;
    options = tango.MAX_MESSAGE_CACHE_SIZE;
    var _closure1_slot8 = options;
    options = tango.TRUNCATED_MESSAGE_VIEW_SIZE;
    var _closure1_slot9 = options;
    tango = tango.MessageStates;
    var _closure1_slot10 = tango;
    tango = 4;
    tango = oscar[tango];
    options = golf.bind(entity)(tango);
    tango = options.prototype;
    golf = Object.create(tango, {constructor: {value: options}});
    romeo = 'ChannelMessages';
    foxtrot = golf;
    tango = new foxtrot[options](romeo, yankee);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot11 = tango;
    tango = function() {
        tango = function(argFoo) { // Original name: MessageCache
            zulu = this;
            tango = _closure1_slot4;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = new Array(0);
            zulu['_messages'] = mike;
            mike = {};
            zulu['_map'] = mike;
            mike = false;
            zulu['_wasAtEdge'] = mike;
            mike = argFoo;
            zulu['_isCacheBefore'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        zulu = _closure1_slot5;
        entity = {};
        mike = 'clone';
        entity['key'] = mike;
        mike = function() { // Original name: clone
            mike = this;
            tango = _closure2_slot0;
            options = mike._isCacheBefore;
            zulu = tango.prototype;
            zulu = Object.create(zulu, {constructor: {value: tango}});
            verify = zulu;
            entity = new verify[tango](options, golf);
            entity = entity instanceof Object ? entity : zulu;
            zulu = {};
            golf = mike._map;
            options = zulu;
            tango = copyDataProperties(options, golf);
            entity['_map'] = zulu;
            golf = mike._messages;
            zulu = new Array(0);
            oscar = 0;
            options = zulu;
            tango = arraySpread(options, golf, oscar);
            entity['_messages'] = zulu;
            mike = mike._wasAtEdge;
            entity['_wasAtEdge'] = mike;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(14);
        mike[0] = entity;
        entity = {};
        oscar = 'wasAtEdge';
        entity['key'] = oscar;
        oscar = function() { // Original name: get
            entity = this;
            entity = entity._wasAtEdge;
            return entity;
        };
        entity['get'] = oscar;
        oscar = function(argFoo) { // Original name: set
            mike = argFoo;
            entity = this;
            entity['_wasAtEdge'] = mike;
            entity = undefined;
            return entity;
        };
        entity['set'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'length';
        entity['key'] = oscar;
        oscar = function() { // Original name: get
            entity = this;
            entity = entity._messages;
            entity = entity.length;
            return entity;
        };
        entity['get'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'clear';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            mike = this;
            entity = {};
            mike['_map'] = entity;
            entity = new Array(0);
            mike['_messages'] = entity;
            entity = false;
            mike['_wasAtEdge'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'remove';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            zulu = argFoo;
            mike = this;
            var _closure3_slot0 = zulu;
            oscar = _closure1_slot1;
            report = _closure1_slot3;
            entity = 6;
            report = report[entity];
            entity = undefined;
            golf = oscar.bind(entity)(report);
            oscar = golf.filter;
            report = mike._messages;
            tango = function(argFoo) {
                entity = argFoo;
                mike = entity.id;
                entity = _closure3_slot0;
                entity = mike !== entity;
                return entity;
            };
            tango = oscar.bind(golf)(report, tango);
            mike['_messages'] = tango;
            mike = mike._map;
            mike = delete mike[zulu];
            return entity;
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'removeMany';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            golf = argFoo;
            zulu = this;
            var _closure3_slot0 = zulu;
            var _closure3_slot1 = golf;
            report = _closure1_slot1;
            tango = _closure1_slot3;
            entity = 6;
            tango = tango[entity];
            entity = undefined;
            oscar = report.bind(entity)(tango);
            report = oscar.each;
            tango = function(argFoo) {
                entity = _closure3_slot0;
                mike = entity._map;
                entity = argFoo;
                entity = delete mike[entity];
                entity = undefined;
                return entity;
            };
            tango = report.bind(oscar)(golf, tango);
            report = zulu._messages;
            tango = report.filter;
            mike = function(argFoo) {
                zulu = _closure3_slot1;
                mike = zulu.indexOf;
                entity = argFoo;
                entity = entity.id;
                mike = mike.bind(zulu)(entity);
                entity = -1;
                entity = entity === mike;
                return entity;
            };
            mike = tango.bind(report)(mike);
            zulu['_messages'] = mike;
            return entity;
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'replace';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tango = argFoo;
                zulu = argBar;
                entity = this;
                mike = entity._map;
                report = mike[tango];
                mike = null;
                if(!(mike != report)) { _fun00004_ip = 76; continue _fun00003 }
 25:
                mike = entity._map;
                mike = delete mike[tango];
                tango = entity._map;
                mike = zulu.id;
                tango[mike] = zulu;
                mike = entity._messages;
                tango = entity._messages;
                entity = tango.indexOf;
                entity = entity.bind(tango)(report);
                mike[entity] = zulu;
 76:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'update';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = this;
                zulu = entity._map;
                mike = argFoo;
                report = zulu[mike];
                mike = null;
                if(!(mike != report)) { _fun00006_ip = 73; continue _fun00005 }
 22:
                zulu = argBar;
                mike = undefined;
                zulu = zulu.bind(mike)(report);
                tango = entity._map;
                mike = report.id;
                tango[mike] = zulu;
                mike = entity._messages;
                tango = entity._messages;
                entity = tango.indexOf;
                entity = entity.bind(tango)(report);
                mike[entity] = zulu;
 73:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[7] = entity;
        entity = {};
        oscar = 'has';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            mike = entity._map;
            entity = argFoo;
            mike = mike[entity];
            entity = null;
            entity = entity != mike;
            return entity;
        };
        entity['value'] = oscar;
        mike[8] = entity;
        entity = {};
        oscar = 'get';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            mike = entity._map;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        entity['value'] = oscar;
        mike[9] = entity;
        entity = {};
        oscar = 'forEach';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            entity = this;
            tango = entity._messages;
            zulu = tango.forEach;
            mike = argFoo;
            entity = argBar;
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[10] = entity;
        entity = {};
        oscar = 'cache';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                report = argFoo;
                zulu = arguments[1];
                mike = this;
                var _closure3_slot0 = mike;
                tango = undefined;
                if(!(zulu === tango)) { _fun00008_ip = 23; continue _fun00007 }
 21:
                zulu = false;
 23:
                oscar = mike.length;
                golf = 0;
                if(!(golf === oscar)) { _fun00008_ip = 40; continue _fun00007 }
 34:
                mike['_wasAtEdge'] = zulu;
 40:
                zulu = mike._messages;
                oscar = zulu.length;
                zulu = report.length;
                options = oscar + zulu;
                oscar = _closure1_slot8;
                if(!(options > oscar)) { _fun00008_ip = 187; continue _fun00007 }
 71:
                oscar = false;
                mike['_wasAtEdge'] = oscar;
                options = report.length;
                oscar = _closure1_slot8;
                if(!(!(options > oscar))) { _fun00008_ip = 295; continue _fun00007 }
 95:
                options = _closure1_slot8;
                oscar = report.length;
                romeo = options - oscar;
                oscar = mike._isCacheBefore;
                verify = mike._messages;
                options = verify.slice;
                if(oscar) { _fun00008_ip = 142; continue _fun00007 }
 128:
                oscar = options.bind(verify)(golf, romeo);
                mike['_messages'] = oscar;
                _fun00008_ip = 187; continue _fun00007;
 142:
                oscar = global;
                yankee = oscar.Math;
                offset = yankee.max;
                oscar = mike._messages;
                oscar = oscar.length;
                oscar = oscar - romeo;
                oscar = offset.bind(yankee)(oscar, golf);
                oscar = options.bind(verify)(oscar);
                mike['_messages'] = oscar;
 187:
                oscar = mike._isCacheBefore;
                options = new Array(0);
                if(oscar) { _fun00008_ip = 230; continue _fun00007 }
 200:
                kilo = options;
                backup = report;
                foxtrot = 0;
                foxtrot = arraySpread(kilo, backup, foxtrot);
                backup = mike._messages;
                kilo = options;
                oscar = arraySpread(kilo, backup, foxtrot);
                oscar = options;
                _fun00008_ip = 258; continue _fun00007;
 230:
                backup = mike._messages;
                kilo = options;
                foxtrot = 0;
                foxtrot = arraySpread(kilo, backup, foxtrot);
                kilo = options;
                backup = report;
                verify = arraySpread(kilo, backup, foxtrot);
                oscar = options;
 258:
                mike['_messages'] = oscar;
                oscar = {};
                mike['_map'] = oscar;
                verify = mike._messages;
                options = verify.forEach;
                oscar = function(argFoo) {
                    entity = argFoo;
                    mike = _closure3_slot0;
                    zulu = mike._map;
                    mike = entity.id;
                    zulu[mike] = entity;
                    return entity;
                };
                oscar = options.bind(verify)(oscar);
                return tango;
 295:
                oscar = mike._isCacheBefore;
                tango = report.slice;
                if(oscar) { _fun00008_ip = 327; continue _fun00007 }
 309:
                oscar = _closure1_slot8;
                oscar = tango.bind(report)(golf, oscar);
                mike['_messages'] = oscar;
                _fun00008_ip = 351; continue _fun00007;
 327:
                oscar = report.length;
                zulu = _closure1_slot8;
                zulu = oscar - zulu;
                zulu = tango.bind(report)(zulu);
                mike['_messages'] = zulu;
 351:
                zulu = {};
                mike['_map'] = zulu;
                zulu = mike._messages;
                mike = zulu.forEach;
                entity = function(argFoo) {
                    entity = argFoo;
                    mike = _closure3_slot0;
                    zulu = mike._map;
                    mike = entity.id;
                    zulu[mike] = entity;
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[11] = entity;
        entity = {};
        oscar = 'extractAll';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            zulu = this;
            entity = zulu._messages;
            mike = new Array(0);
            zulu['_messages'] = mike;
            mike = {};
            zulu['_map'] = mike;
            return entity;
        };
        entity['value'] = oscar;
        mike[12] = entity;
        entity = {};
        oscar = 'extract';
        entity['key'] = oscar;
        report = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                report = argFoo;
                tango = this;
                var _closure3_slot0 = tango;
                entity = tango._isCacheBefore;
                zulu = global;
                golf = zulu.Math;
                if(entity) { _fun00010_ip = 84; continue _fun00009 }
 29:
                zulu = golf.min;
                entity = tango.length;
                oscar = zulu.bind(golf)(report, entity);
                zulu = tango._messages;
                entity = zulu.slice;
                options = 0;
                entity = entity.bind(zulu)(options, oscar);
                oscar = tango._messages;
                zulu = oscar.splice;
                zulu = zulu.bind(oscar)(options, report);
                _fun00010_ip = 145; continue _fun00009;
 84:
                oscar = golf.max;
                zulu = tango.length;
                report = zulu - report;
                zulu = 0;
                oscar = oscar.bind(golf)(report, zulu);
                golf = tango.length;
                report = tango._messages;
                zulu = report.slice;
                entity = zulu.bind(report)(oscar, golf);
                report = tango._messages;
                tango = report.splice;
                tango = tango.bind(report)(oscar);
 145:
                zulu = entity.forEach;
                mike = function(argFoo) {
                    entity = _closure3_slot0;
                    mike = entity._map;
                    entity = argFoo;
                    entity = entity.id;
                    entity = delete mike[entity];
                    return entity;
                };
                mike = zulu.bind(entity)(mike);
                return entity;
            }
        };
        entity['value'] = report;
        mike[13] = entity;
        entity = undefined;
        entity = zulu.bind(entity)(tango, mike);
        return entity;
    };
    tango = tango.bind(entity)();
    var _closure1_slot12 = tango;
    mike = function() {
        report = function(argFoo) { // Original name: ChannelMessages
            zulu = this;
            report = _closure1_slot4;
            mike = _closure2_slot0;
            entity = undefined;
            mike = report.bind(entity)(zulu, mike);
            mike = new Array(0);
            zulu['_array'] = mike;
            mike = {};
            zulu['_map'] = mike;
            mike = argFoo;
            zulu['channelId'] = mike;
            mike = false;
            zulu['ready'] = mike;
            oscar = null;
            zulu['jumpTargetId'] = oscar;
            report = 0;
            zulu['jumpTargetOffset'] = report;
            report = 1;
            zulu['jumpSequenceId'] = report;
            zulu['jumped'] = mike;
            zulu['jumpedToPresent'] = mike;
            golf = _closure1_slot0;
            options = _closure1_slot3;
            report = 7;
            report = options[report];
            report = golf.bind(entity)(report);
            report = report.JumpTypes;
            report = report.ANIMATED;
            zulu['jumpType'] = report;
            report = true;
            zulu['jumpFlash'] = report;
            zulu['jumpReturnTargetId'] = oscar;
            zulu['hasMoreBefore'] = report;
            zulu['hasMoreAfter'] = mike;
            zulu['loadingMore'] = mike;
            zulu['revealedMessageId'] = oscar;
            oscar = zulu._clearMessages;
            oscar = oscar.bind(zulu)();
            tango = _closure1_slot12;
            oscar = tango.prototype;
            oscar = Object.create(oscar, {constructor: {value: tango}});
            yankee = oscar;
            offset = true;
            report = new yankee[tango](offset, verify);
            report = report instanceof Object ? report : oscar;
            zulu['_before'] = report;
            report = tango.prototype;
            report = Object.create(report, {constructor: {value: tango}});
            yankee = report;
            offset = false;
            tango = new yankee[tango](offset, verify);
            tango = tango instanceof Object ? tango : report;
            zulu['_after'] = tango;
            zulu['cached'] = mike;
            zulu['hasFetched'] = mike;
            zulu['error'] = mike;
            return entity;
        };
        var _closure2_slot0 = report;
        tango = _closure1_slot5;
        entity = {};
        mike = 'mutate';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zulu = argFoo;
                report = arguments[1];
                tango = this;
                mike = undefined;
                if(!(report === mike)) { _fun00012_ip = 17; continue _fun00011 }
 15:
                report = false;
 17:
                golf = _closure2_slot0;
                romeo = tango.channelId;
                oscar = golf.prototype;
                oscar = Object.create(oscar, {constructor: {value: golf}});
                foxtrot = oscar;
                entity = new foxtrot[golf](romeo, yankee);
                entity = entity instanceof Object ? entity : oscar;
                verify = tango._array;
                if(report) { _fun00012_ip = 63; continue _fun00011 }
 58:
                oscar = verify;
                _fun00012_ip = 82; continue _fun00011;
 63:
                golf = new Array(0);
                offset = 0;
                romeo = golf;
                yankee = verify;
                options = arraySpread(romeo, yankee, offset);
                oscar = golf;
 82:
                entity['_array'] = oscar;
                options = tango._map;
                if(report) { _fun00012_ip = 102; continue _fun00011 }
 97:
                oscar = options;
                _fun00012_ip = 117; continue _fun00011;
 102:
                golf = {};
                romeo = golf;
                yankee = options;
                options = copyDataProperties(romeo, yankee);
                oscar = golf;
 117:
                entity['_map'] = oscar;
                options = tango._after;
                if(report) { _fun00012_ip = 137; continue _fun00011 }
 132:
                oscar = options;
                _fun00012_ip = 147; continue _fun00011;
 137:
                golf = options.clone;
                oscar = golf.bind(options)();
 147:
                entity['_after'] = oscar;
                golf = tango._before;
                if(report) { _fun00012_ip = 167; continue _fun00011 }
 162:
                report = golf;
                _fun00012_ip = 177; continue _fun00011;
 167:
                oscar = golf.clone;
                report = oscar.bind(golf)();
 177:
                entity['_before'] = report;
                report = global;
                report = report.Function;
                report = zulu instanceof report;
                if(report) { _fun00012_ip = 763; continue _fun00011 }
 201:
                oscar = 'object';
                report = typeof zulu;
                if(!(oscar === report)) { _fun00012_ip = 971; continue _fun00011 }
 215:
                report = zulu.ready;
                if(!(mike === report)) { _fun00012_ip = 233; continue _fun00011 }
 225:
                report = tango.ready;
                _fun00012_ip = 245; continue _fun00011;
 233:
                golf = zulu.ready;
                oscar = true;
                report = oscar === golf;
 245:
                entity['ready'] = report;
                report = zulu.jumpType;
                if(!(mike === report)) { _fun00012_ip = 269; continue _fun00011 }
 261:
                report = tango.jumpType;
                _fun00012_ip = 275; continue _fun00011;
 269:
                report = zulu.jumpType;
 275:
                entity['jumpType'] = report;
                report = zulu.jumpTargetId;
                if(!(mike === report)) { _fun00012_ip = 299; continue _fun00011 }
 291:
                report = tango.jumpTargetId;
                _fun00012_ip = 305; continue _fun00011;
 299:
                report = zulu.jumpTargetId;
 305:
                entity['jumpTargetId'] = report;
                report = zulu.jumpTargetOffset;
                if(!(mike === report)) { _fun00012_ip = 329; continue _fun00011 }
 321:
                report = tango.jumpTargetOffset;
                _fun00012_ip = 335; continue _fun00011;
 329:
                report = zulu.jumpTargetOffset;
 335:
                entity['jumpTargetOffset'] = report;
                report = zulu.jumpSequenceId;
                if(!(mike === report)) { _fun00012_ip = 359; continue _fun00011 }
 351:
                report = tango.jumpSequenceId;
                _fun00012_ip = 365; continue _fun00011;
 359:
                report = zulu.jumpSequenceId;
 365:
                entity['jumpSequenceId'] = report;
                report = zulu.jumped;
                if(!(mike === report)) { _fun00012_ip = 389; continue _fun00011 }
 381:
                report = tango.jumped;
                _fun00012_ip = 401; continue _fun00011;
 389:
                golf = zulu.jumped;
                oscar = true;
                report = oscar === golf;
 401:
                entity['jumped'] = report;
                report = zulu.jumpedToPresent;
                if(!(mike === report)) { _fun00012_ip = 425; continue _fun00011 }
 417:
                report = tango.jumpedToPresent;
                _fun00012_ip = 437; continue _fun00011;
 425:
                golf = zulu.jumpedToPresent;
                oscar = true;
                report = oscar === golf;
 437:
                entity['jumpedToPresent'] = report;
                report = zulu.jumpFlash;
                if(!(mike === report)) { _fun00012_ip = 461; continue _fun00011 }
 453:
                report = tango.jumpFlash;
                _fun00012_ip = 473; continue _fun00011;
 461:
                golf = zulu.jumpFlash;
                oscar = true;
                report = oscar === golf;
 473:
                entity['jumpFlash'] = report;
                report = zulu.jumpReturnTargetId;
                if(!(mike === report)) { _fun00012_ip = 497; continue _fun00011 }
 489:
                report = tango.jumpReturnTargetId;
                _fun00012_ip = 503; continue _fun00011;
 497:
                report = zulu.jumpReturnTargetId;
 503:
                entity['jumpReturnTargetId'] = report;
                report = zulu.focusTargetId;
                if(!(mike === report)) { _fun00012_ip = 527; continue _fun00011 }
 519:
                report = tango.focusTargetId;
                _fun00012_ip = 533; continue _fun00011;
 527:
                report = zulu.focusTargetId;
 533:
                entity['focusTargetId'] = report;
                report = zulu.hasMoreBefore;
                if(!(mike === report)) { _fun00012_ip = 557; continue _fun00011 }
 549:
                report = tango.hasMoreBefore;
                _fun00012_ip = 569; continue _fun00011;
 557:
                golf = zulu.hasMoreBefore;
                oscar = true;
                report = oscar === golf;
 569:
                entity['hasMoreBefore'] = report;
                report = zulu.hasMoreAfter;
                if(!(mike === report)) { _fun00012_ip = 593; continue _fun00011 }
 585:
                report = tango.hasMoreAfter;
                _fun00012_ip = 605; continue _fun00011;
 593:
                golf = zulu.hasMoreAfter;
                oscar = true;
                report = oscar === golf;
 605:
                entity['hasMoreAfter'] = report;
                report = zulu.loadingMore;
                if(!(mike === report)) { _fun00012_ip = 629; continue _fun00011 }
 621:
                report = tango.loadingMore;
                _fun00012_ip = 635; continue _fun00011;
 629:
                report = zulu.loadingMore;
 635:
                entity['loadingMore'] = report;
                report = zulu.revealedMessageId;
                if(!(mike === report)) { _fun00012_ip = 659; continue _fun00011 }
 651:
                report = tango.revealedMessageId;
                _fun00012_ip = 665; continue _fun00011;
 659:
                report = zulu.revealedMessageId;
 665:
                entity['revealedMessageId'] = report;
                report = zulu.cached;
                if(!(mike === report)) { _fun00012_ip = 689; continue _fun00011 }
 681:
                report = tango.cached;
                _fun00012_ip = 695; continue _fun00011;
 689:
                report = zulu.cached;
 695:
                entity['cached'] = report;
                report = zulu.hasFetched;
                if(!(mike === report)) { _fun00012_ip = 719; continue _fun00011 }
 711:
                report = tango.hasFetched;
                _fun00012_ip = 725; continue _fun00011;
 719:
                report = zulu.hasFetched;
 725:
                entity['hasFetched'] = report;
                report = zulu.error;
                if(!(mike === report)) { _fun00012_ip = 747; continue _fun00011 }
 740:
                report = tango.error;
                _fun00012_ip = 752; continue _fun00011;
 747:
                report = zulu.error;
 752:
                entity['error'] = report;
                _fun00012_ip = 971; continue _fun00011;
 763:
                report = tango.ready;
                entity['ready'] = report;
                report = tango.jumpType;
                entity['jumpType'] = report;
                report = tango.jumpTargetId;
                entity['jumpTargetId'] = report;
                report = tango.jumpTargetOffset;
                entity['jumpTargetOffset'] = report;
                report = tango.jumpSequenceId;
                entity['jumpSequenceId'] = report;
                report = tango.jumped;
                entity['jumped'] = report;
                report = tango.jumpedToPresent;
                entity['jumpedToPresent'] = report;
                report = tango.jumpFlash;
                entity['jumpFlash'] = report;
                report = tango.jumpReturnTargetId;
                entity['jumpReturnTargetId'] = report;
                report = tango.focusTargetId;
                entity['focusTargetId'] = report;
                report = tango.hasMoreBefore;
                entity['hasMoreBefore'] = report;
                report = tango.hasMoreAfter;
                entity['hasMoreAfter'] = report;
                report = tango.loadingMore;
                entity['loadingMore'] = report;
                report = tango.revealedMessageId;
                entity['revealedMessageId'] = report;
                report = tango.cached;
                entity['cached'] = report;
                report = tango.hasFetched;
                entity['hasFetched'] = report;
                tango = tango.error;
                entity['error'] = tango;
                mike = zulu.bind(mike)(entity);
 971:
                return entity;
            }
        };
        entity['value'] = mike;
        zulu = new Array(45);
        zulu[0] = entity;
        entity = {};
        mike = 'length';
        entity['key'] = mike;
        mike = function() { // Original name: get
            entity = this;
            entity = entity._array;
            entity = entity.length;
            return entity;
        };
        entity['get'] = mike;
        zulu[1] = entity;
        entity = {};
        mike = 'toArray';
        entity['key'] = mike;
        mike = function() { // Original name: value
            entity = this;
            report = entity._array;
            entity = new Array(0);
            tango = 0;
            oscar = entity;
            mike = arraySpread(oscar, report, tango);
            return entity;
        };
        entity['value'] = mike;
        zulu[2] = entity;
        entity = {};
        mike = 'forEach';
        entity['key'] = mike;
        golf = function(argFoo, argBar) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                options = argFoo;
                golf = argBar;
                mike = arguments[2];
                entity = undefined;
                if(!(mike === entity)) { _fun00014_ip = 17; continue _fun00013 }
 15:
                mike = false;
 17:
                zulu = this;
                oscar = zulu._array;
                if(mike) { _fun00014_ip = 42; continue _fun00013 }
 29:
                mike = oscar.forEach;
                mike = mike.bind(oscar)(options, golf);
                _fun00014_ip = 112; continue _fun00013;
 42:
                zulu = oscar.length;
                mike = 1;
                zulu = zulu - mike;
                report = 0;
                if(!(zulu >= report)) { _fun00014_ip = 112; continue _fun00013 }
 60:
                tango = options.call;
                mike = oscar[zulu];
                mike = tango.bind(options)(golf, mike, zulu);
                tango = false;
                if(!(tango !== mike)) { _fun00014_ip = 112; continue _fun00013 }
 82:
                verify = zulu - 1;
                if(!(verify >= report)) { _fun00014_ip = 112; continue _fun00013 }
 89:
                offset = options.call;
                mike = oscar[verify];
                mike = offset.bind(options)(golf, mike, verify);
                zulu = verify;
                if(tango !== mike) { _fun00014_ip = 82; continue _fun00013 }
 112:
                return entity;
            }
        };
        entity['value'] = golf;
        zulu[3] = entity;
        entity = {};
        golf = 'reduce';
        entity['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            entity = this;
            tango = entity._array;
            zulu = tango.reduce;
            mike = argFoo;
            entity = argBar;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        entity['value'] = golf;
        zulu[4] = entity;
        entity = {};
        golf = 'some';
        entity['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            entity = this;
            tango = entity._array;
            zulu = tango.some;
            mike = argFoo;
            entity = argBar;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        entity['value'] = golf;
        zulu[5] = entity;
        entity = {};
        golf = 'filter';
        entity['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            entity = this;
            tango = entity._array;
            zulu = tango.filter;
            mike = argFoo;
            entity = argBar;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        entity['value'] = golf;
        zulu[6] = entity;
        entity = {};
        golf = 'forAll';
        entity['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            tango = argFoo;
            zulu = argBar;
            entity = this;
            report = entity._before;
            mike = report.forEach;
            mike = mike.bind(report)(tango, zulu);
            report = entity._array;
            mike = report.forEach;
            mike = mike.bind(report)(tango, zulu);
            mike = entity._after;
            entity = mike.forEach;
            entity = entity.bind(mike)(tango, zulu);
            entity = undefined;
            return entity;
        };
        entity['value'] = golf;
        zulu[7] = entity;
        entity = {};
        golf = 'findOldest';
        entity['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                report = argFoo;
                mike = this;
                tango = _closure1_slot1;
                entity = _closure1_slot3;
                golf = 6;
                entity = entity[golf];
                oscar = undefined;
                options = tango.bind(oscar)(entity);
                tango = options.find;
                entity = mike._before;
                entity = entity._messages;
                entity = tango.bind(options)(entity, report);
                tango = null;
                if(!(tango == entity)) { _fun00016_ip = 94; continue _fun00015 }
 60:
                verify = _closure1_slot1;
                options = _closure1_slot3;
                options = options[golf];
                offset = verify.bind(oscar)(options);
                verify = offset.find;
                options = mike._array;
                entity = verify.bind(offset)(options, report);
 94:
                if(!(tango == entity)) { _fun00016_ip = 138; continue _fun00015 }
 98:
                tango = _closure1_slot1;
                zulu = _closure1_slot3;
                zulu = zulu[golf];
                tango = tango.bind(oscar)(zulu);
                zulu = tango.find;
                mike = mike._after;
                mike = mike._messages;
                entity = zulu.bind(tango)(mike, report);
 138:
                return entity;
            }
        };
        entity['value'] = golf;
        zulu[8] = entity;
        entity = {};
        golf = 'findNewest';
        entity['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                report = argFoo;
                mike = this;
                tango = _closure1_slot1;
                entity = _closure1_slot3;
                golf = 6;
                entity = entity[golf];
                oscar = undefined;
                options = tango.bind(oscar)(entity);
                tango = options.findLast;
                entity = mike._after;
                entity = entity._messages;
                entity = tango.bind(options)(entity, report);
                tango = null;
                if(!(tango == entity)) { _fun00018_ip = 96; continue _fun00017 }
 61:
                verify = _closure1_slot1;
                options = _closure1_slot3;
                options = options[golf];
                offset = verify.bind(oscar)(options);
                verify = offset.findLast;
                options = mike._array;
                entity = verify.bind(offset)(options, report);
 96:
                if(!(tango == entity)) { _fun00018_ip = 141; continue _fun00017 }
 100:
                tango = _closure1_slot1;
                zulu = _closure1_slot3;
                zulu = zulu[golf];
                tango = tango.bind(oscar)(zulu);
                zulu = tango.findLast;
                mike = mike._before;
                mike = mike._messages;
                entity = zulu.bind(tango)(mike, report);
 141:
                return entity;
            }
        };
        entity['value'] = golf;
        zulu[9] = entity;
        entity = {};
        golf = 'map';
        entity['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            entity = this;
            tango = entity._array;
            zulu = tango.map;
            mike = argFoo;
            entity = argBar;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        entity['value'] = golf;
        zulu[10] = entity;
        entity = {};
        golf = 'first';
        entity['key'] = golf;
        golf = function() { // Original name: value
            entity = this;
            mike = entity._array;
            entity = 0;
            entity = mike[entity];
            return entity;
        };
        entity['value'] = golf;
        zulu[11] = entity;
        entity = {};
        golf = 'last';
        entity['key'] = golf;
        golf = function() { // Original name: value
            entity = this;
            mike = entity._array;
            entity = entity._array;
            zulu = entity.length;
            entity = 1;
            entity = zulu - entity;
            entity = mike[entity];
            return entity;
        };
        entity['value'] = golf;
        zulu[12] = entity;
        entity = {};
        options = 'get';
        entity['key'] = options;
        golf = function(argFoo) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                report = argFoo;
                mike = arguments[1];
                zulu = this;
                entity = undefined;
                if(!(mike === entity)) { _fun00020_ip = 17; continue _fun00019 }
 15:
                mike = false;
 17:
                entity = zulu._map;
                oscar = entity[report];
                tango = null;
                entity = oscar;
                if(!(tango == oscar)) { _fun00020_ip = 81; continue _fun00019 }
 36:
                entity = oscar;
                if(!mike) { _fun00020_ip = 81; continue _fun00019 }
 42:
                oscar = zulu._before;
                mike = oscar.get;
                mike = mike.bind(oscar)(report);
                if(!(tango == mike)) { _fun00020_ip = 78; continue _fun00019 }
 62:
                tango = zulu._after;
                zulu = tango.get;
                mike = zulu.bind(tango)(report);
 78:
                entity = mike;
 81:
                return entity;
            }
        };
        entity['value'] = golf;
        zulu[13] = entity;
        entity = {};
        golf = 'getByIndex';
        entity['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = this;
            mike = entity._array;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        entity['value'] = golf;
        zulu[14] = entity;
        entity = {};
        golf = 'getAfter';
        entity['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                tango = this;
                mike = tango.get;
                entity = argFoo;
                report = mike.bind(tango)(entity);
                entity = null;
                if(!(entity != report)) { _fun00022_ip = 84; continue _fun00021 }
 22:
                zulu = tango._array;
                mike = zulu.indexOf;
                report = mike.bind(zulu)(report);
                zulu = -1;
                mike = null;
                if(!(zulu !== report)) { _fun00022_ip = 82; continue _fun00021 }
 50:
                oscar = tango.length;
                zulu = 1;
                oscar = oscar - zulu;
                mike = null;
                if(!(report !== oscar)) { _fun00022_ip = 82; continue _fun00021 }
 68:
                tango = tango._array;
                zulu = report + zulu;
                mike = tango[zulu];
 82:
                return mike;
 84:
                return entity;
            }
        };
        entity['value'] = golf;
        zulu[15] = entity;
        entity = {};
        golf = 'getManyAfter';
        entity['key'] = golf;
        golf = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                options = argBar;
                golf = argBaz;
                oscar = this;
                mike = oscar.get;
                entity = argFoo;
                tango = mike.bind(oscar)(entity);
                entity = null;
                if(!(entity != tango)) { _fun00024_ip = 183; continue _fun00023 }
 31:
                zulu = oscar._array;
                mike = zulu.indexOf;
                report = mike.bind(zulu)(tango);
                zulu = -1;
                if(!(zulu !== report)) { _fun00024_ip = 181; continue _fun00023 }
 60:
                mike = new Array(0);
                tango = 1;
                verify = report + tango;
                tango = oscar.length;
                if(!(verify < tango)) { _fun00024_ip = 179; continue _fun00023 }
 80:
                report = zulu === options;
                tango = verify;
                if(report) { _fun00024_ip = 102; continue _fun00023 }
 90:
                zulu = mike.length;
                tango = verify;
                if(!(zulu < options)) { _fun00024_ip = 179; continue _fun00023 }
 102:
                zulu = entity == golf;
                if(zulu) { _fun00024_ip = 126; continue _fun00023 }
 109:
                verify = oscar._array;
                offset = verify[tango];
                verify = undefined;
                zulu = golf.bind(verify)(offset);
 126:
                if(!zulu) { _fun00024_ip = 149; continue _fun00023 }
 129:
                verify = mike.push;
                zulu = oscar._array;
                zulu = zulu[tango];
                zulu = verify.bind(mike)(zulu);
 149:
                verify = tango + 1;
                zulu = oscar.length;
                if(!(verify < zulu)) { _fun00024_ip = 179; continue _fun00023 }
 161:
                tango = verify;
                if(report) { _fun00024_ip = 102; continue _fun00023 }
 167:
                zulu = mike.length;
                tango = verify;
                if(zulu < options) { _fun00024_ip = 102; continue _fun00023 }
 179:
                return mike;
 181:
                return entity;
 183:
                return entity;
            }
        };
        entity['value'] = golf;
        zulu[16] = entity;
        entity = {};
        golf = 'getManyBefore';
        entity['key'] = golf;
        golf = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                verify = argBar;
                options = argBaz;
                golf = this;
                mike = golf.get;
                entity = argFoo;
                tango = mike.bind(golf)(entity);
                entity = null;
                if(!(entity != tango)) { _fun00026_ip = 173; continue _fun00025 }
 31:
                zulu = golf._array;
                mike = zulu.indexOf;
                report = mike.bind(zulu)(tango);
                zulu = -1;
                if(!(zulu !== report)) { _fun00026_ip = 171; continue _fun00025 }
 57:
                mike = new Array(0);
                tango = 1;
                offset = report - tango;
                oscar = 0;
                if(!(offset >= oscar)) { _fun00026_ip = 169; continue _fun00025 }
 74:
                report = zulu === verify;
                tango = offset;
                if(report) { _fun00026_ip = 96; continue _fun00025 }
 84:
                zulu = mike.length;
                tango = offset;
                if(!(zulu < verify)) { _fun00026_ip = 169; continue _fun00025 }
 96:
                zulu = entity == options;
                if(zulu) { _fun00026_ip = 120; continue _fun00025 }
 103:
                offset = golf._array;
                yankee = offset[tango];
                offset = undefined;
                zulu = options.bind(offset)(yankee);
 120:
                if(!zulu) { _fun00026_ip = 144; continue _fun00025 }
 123:
                offset = mike.unshift;
                zulu = golf._array;
                zulu = zulu[tango];
                zulu = offset.bind(mike)(zulu);
 144:
                offset = tango - 1;
                if(!(offset >= oscar)) { _fun00026_ip = 169; continue _fun00025 }
 151:
                tango = offset;
                if(report) { _fun00026_ip = 96; continue _fun00025 }
 157:
                zulu = mike.length;
                tango = offset;
                if(zulu < verify) { _fun00026_ip = 96; continue _fun00025 }
 169:
                return mike;
 171:
                return entity;
 173:
                return entity;
            }
        };
        entity['value'] = golf;
        zulu[17] = entity;
        entity = {};
        golf = 'has';
        entity['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                oscar = argFoo;
                mike = arguments[1];
                tango = this;
                entity = undefined;
                if(!(mike === entity)) { _fun00028_ip = 17; continue _fun00027 }
 15:
                mike = true;
 17:
                entity = tango._map;
                zulu = entity[oscar];
                entity = null;
                entity = entity != zulu;
                if(entity) { _fun00028_ip = 80; continue _fun00027 }
 36:
                if(!mike) { _fun00028_ip = 77; continue _fun00027 }
 39:
                report = tango._before;
                zulu = report.has;
                zulu = zulu.bind(report)(oscar);
                if(zulu) { _fun00028_ip = 74; continue _fun00027 }
 58:
                report = tango._after;
                tango = report.has;
                zulu = tango.bind(report)(oscar);
 74:
                mike = zulu;
 77:
                entity = mike;
 80:
                return entity;
            }
        };
        entity['value'] = golf;
        zulu[18] = entity;
        entity = {};
        golf = 'indexOf';
        entity['key'] = golf;
        golf = function(argFoo) { // Original name: value
            mike = argFoo;
            var _closure3_slot0 = mike;
            mike = -1;
            var _closure3_slot1 = mike;
            mike = this;
            tango = mike._array;
            zulu = tango.find;
            mike = function(argFoo, argBar) {
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    entity = argFoo;
                    mike = entity.id;
                    entity = _closure3_slot0;
                    entity = mike === entity;
                    if(!entity) { _fun00030_ip = 31; continue _fun00029 }
 22:
                    mike = argBar;
                    _closure3_slot1 = mike;
                    entity = true;
 31:
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            entity = _closure3_slot1;
            return entity;
        };
        entity['value'] = golf;
        zulu[19] = entity;
        entity = {};
        golf = 'hasPresent';
        entity['key'] = golf;
        verify = function() { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                mike = this;
                entity = mike._after;
                zulu = entity.length;
                entity = 0;
                entity = zulu > entity;
                if(!entity) { _fun00032_ip = 35; continue _fun00031 }
 23:
                zulu = mike._after;
                entity = zulu.wasAtEdge;
 35:
                if(entity) { _fun00032_ip = 47; continue _fun00031 }
 38:
                mike = mike.hasMoreAfter;
                entity = !mike;
 47:
                return entity;
            }
        };
        entity['value'] = verify;
        zulu[20] = entity;
        entity = {};
        verify = 'hasBeforeCached';
        entity['key'] = verify;
        verify = function(argFoo) { // Original name: value
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                mike = this;
                entity = mike.length;
                zulu = 0;
                if(!(entity > zulu)) { _fun00034_ip = 29; continue _fun00033 }
 14:
                entity = mike._before;
                entity = entity.length;
                if(!(!(entity > zulu))) { _fun00034_ip = 33; continue _fun00033 }
 29:
                entity = false;
                return entity;
 33:
                entity = mike.first;
                mike = entity.bind(mike)();
                entity = null;
                entity = entity != mike;
                if(!entity) { _fun00034_ip = 64; continue _fun00033 }
 52:
                zulu = mike.id;
                mike = argFoo;
                entity = zulu === mike;
 64:
                return entity;
            }
        };
        entity['value'] = verify;
        zulu[21] = entity;
        entity = {};
        verify = 'hasAfterCached';
        entity['key'] = verify;
        verify = function(argFoo) { // Original name: value
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                mike = this;
                entity = mike.length;
                zulu = 0;
                if(!(entity > zulu)) { _fun00036_ip = 29; continue _fun00035 }
 14:
                entity = mike._after;
                entity = entity.length;
                if(!(!(entity > zulu))) { _fun00036_ip = 33; continue _fun00035 }
 29:
                entity = false;
                return entity;
 33:
                entity = mike.last;
                mike = entity.bind(mike)();
                entity = null;
                entity = entity != mike;
                if(!entity) { _fun00036_ip = 64; continue _fun00035 }
 52:
                zulu = mike.id;
                mike = argFoo;
                entity = zulu === mike;
 64:
                return entity;
            }
        };
        entity['value'] = verify;
        zulu[22] = entity;
        entity = {};
        verify = 'update';
        entity['key'] = verify;
        verify = function(argFoo, argBar) { // Original name: value
            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                tango = argFoo;
                oscar = argBar;
                report = this;
                var _closure3_slot0 = tango;
                var _closure3_slot1 = oscar;
                entity = report._map;
                zulu = entity[tango];
                var _closure3_slot2 = zulu;
                entity = null;
                if(!(entity != zulu)) { _fun00038_ip = 71; continue _fun00037 }
 39:
                entity = undefined;
                entity = oscar.bind(entity)(zulu);
                var _closure3_slot3 = entity;
                oscar = report.mutate;
                zulu = function(argFoo) {
                    mike = argFoo;
                    oscar = mike._map;
                    report = _closure3_slot2;
                    tango = report.id;
                    zulu = _closure3_slot3;
                    oscar[tango] = zulu;
                    zulu = mike._array;
                    tango = mike._array;
                    mike = tango.indexOf;
                    mike = mike.bind(tango)(report);
                    entity = _closure3_slot3;
                    zulu[mike] = entity;
                    entity = undefined;
                    return entity;
                };
                entity = true;
                entity = oscar.bind(report)(zulu, entity);
                return entity;
 71:
                zulu = report._before;
                entity = zulu.has;
                entity = entity.bind(zulu)(tango);
                if(entity) { _fun00038_ip = 133; continue _fun00037 }
 90:
                zulu = report._after;
                entity = zulu.has;
                zulu = entity.bind(zulu)(tango);
                entity = report;
                if(!zulu) { _fun00038_ip = 131; continue _fun00037 }
 112:
                oscar = report.mutate;
                tango = function(argFoo) {
                    entity = argFoo;
                    tango = entity._after;
                    zulu = tango.update;
                    mike = _closure3_slot0;
                    entity = _closure3_slot1;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                zulu = true;
                entity = oscar.bind(report)(tango, zulu);
 131:
                _fun00038_ip = 152; continue _fun00037;
 133:
                tango = report.mutate;
                zulu = function(argFoo) {
                    entity = argFoo;
                    tango = entity._before;
                    zulu = tango.update;
                    mike = _closure3_slot0;
                    entity = _closure3_slot1;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                mike = true;
                entity = tango.bind(report)(zulu, mike);
 152:
                return entity;
            }
        };
        entity['value'] = verify;
        zulu[23] = entity;
        entity = {};
        verify = 'replace';
        entity['key'] = verify;
        verify = function(argFoo, argBar) { // Original name: value
            _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                report = argFoo;
                oscar = this;
                var _closure3_slot0 = report;
                entity = argBar;
                var _closure3_slot1 = entity;
                entity = oscar._map;
                mike = entity[report];
                var _closure3_slot2 = mike;
                entity = null;
                if(!(entity != mike)) { _fun00040_ip = 60; continue _fun00039 }
 39:
                tango = oscar.mutate;
                mike = function(argFoo) {
                    tango = argFoo;
                    zulu = tango._map;
                    mike = _closure3_slot0;
                    mike = delete zulu[mike];
                    report = tango._map;
                    zulu = _closure3_slot1;
                    mike = zulu.id;
                    report[mike] = zulu;
                    mike = tango._array;
                    report = tango._array;
                    tango = report.indexOf;
                    entity = _closure3_slot2;
                    entity = tango.bind(report)(entity);
                    mike[entity] = zulu;
                    entity = undefined;
                    return entity;
                };
                entity = true;
                entity = tango.bind(oscar)(mike, entity);
                _fun00040_ip = 144; continue _fun00039;
 60:
                tango = oscar._before;
                mike = tango.has;
                mike = mike.bind(tango)(report);
                if(mike) { _fun00040_ip = 122; continue _fun00039 }
 79:
                tango = oscar._after;
                mike = tango.has;
                tango = mike.bind(tango)(report);
                mike = oscar;
                if(!tango) { _fun00040_ip = 120; continue _fun00039 }
 101:
                golf = oscar.mutate;
                report = function(argFoo) {
                    entity = argFoo;
                    tango = entity._after;
                    zulu = tango.replace;
                    mike = _closure3_slot0;
                    entity = _closure3_slot1;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                tango = true;
                mike = golf.bind(oscar)(report, tango);
 120:
                _fun00040_ip = 141; continue _fun00039;
 122:
                report = oscar.mutate;
                tango = function(argFoo) {
                    entity = argFoo;
                    tango = entity._before;
                    zulu = tango.replace;
                    mike = _closure3_slot0;
                    entity = _closure3_slot1;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                zulu = true;
                mike = report.bind(oscar)(tango, zulu);
 141:
                entity = mike;
 144:
                return entity;
            }
        };
        entity['value'] = verify;
        zulu[24] = entity;
        entity = {};
        verify = 'remove';
        entity['key'] = verify;
        verify = function(argFoo) { // Original name: value
            tango = this;
            mike = argFoo;
            var _closure3_slot0 = mike;
            zulu = tango.mutate;
            mike = function(argFoo) {
                entity = argFoo;
                mike = entity._map;
                zulu = _closure3_slot0;
                mike = delete mike[zulu];
                report = entity._array;
                tango = report.filter;
                mike = function(argFoo) {
                    entity = argFoo;
                    mike = entity.id;
                    entity = _closure3_slot0;
                    entity = mike !== entity;
                    return entity;
                };
                mike = tango.bind(report)(mike);
                entity['_array'] = mike;
                tango = entity._before;
                mike = tango.remove;
                mike = mike.bind(tango)(zulu);
                mike = entity._after;
                entity = mike.remove;
                entity = entity.bind(mike)(zulu);
                entity = undefined;
                return entity;
            };
            entity = true;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        entity['value'] = verify;
        zulu[25] = entity;
        entity = {};
        verify = 'removeMany';
        entity['key'] = verify;
        verify = function(argFoo) { // Original name: value
            _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                tango = argFoo;
                report = this;
                var _closure3_slot0 = report;
                var _closure3_slot1 = tango;
                zulu = tango.some;
                entity = function(argFoo) {
                    zulu = _closure3_slot0;
                    mike = zulu.has;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                zulu = zulu.bind(tango)(entity);
                entity = report;
                if(!zulu) { _fun00042_ip = 57; continue _fun00041 }
 38:
                tango = report.mutate;
                zulu = function(argFoo) {
                    mike = argFoo;
                    var _closure4_slot0 = mike;
                    report = _closure1_slot1;
                    tango = _closure1_slot3;
                    entity = 6;
                    tango = tango[entity];
                    entity = undefined;
                    golf = report.bind(entity)(tango);
                    oscar = golf.each;
                    tango = _closure3_slot1;
                    report = function(argFoo) {
                        entity = _closure4_slot0;
                        mike = entity._map;
                        entity = argFoo;
                        entity = delete mike[entity];
                        entity = undefined;
                        return entity;
                    };
                    report = oscar.bind(golf)(tango, report);
                    oscar = mike._array;
                    report = oscar.filter;
                    zulu = function(argFoo) {
                        zulu = _closure3_slot1;
                        mike = zulu.indexOf;
                        entity = argFoo;
                        entity = entity.id;
                        mike = mike.bind(zulu)(entity);
                        entity = -1;
                        entity = entity === mike;
                        return entity;
                    };
                    zulu = report.bind(oscar)(zulu);
                    mike['_array'] = zulu;
                    report = mike._before;
                    zulu = report.removeMany;
                    zulu = zulu.bind(report)(tango);
                    zulu = mike._after;
                    mike = zulu.removeMany;
                    mike = mike.bind(zulu)(tango);
                    return entity;
                };
                mike = true;
                entity = tango.bind(report)(zulu, mike);
 57:
                return entity;
            }
        };
        entity['value'] = verify;
        zulu[26] = entity;
        entity = {};
        verify = 'merge';
        entity['key'] = verify;
        verify = function(argFoo) { // Original name: value
            _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                report = arguments[1];
                mike = arguments[2];
                tango = this;
                zulu = argFoo;
                var _closure3_slot0 = zulu;
                zulu = undefined;
                if(!(report === zulu)) { _fun00044_ip = 26; continue _fun00043 }
 24:
                report = false;
 26:
                var _closure3_slot1 = report;
                if(!(mike === zulu)) { _fun00044_ip = 36; continue _fun00043 }
 34:
                mike = false;
 36:
                var _closure3_slot2 = mike;
                zulu = tango.mutate;
                mike = function(argFoo) {
                    report = argFoo;
                    tango = report._merge;
                    zulu = _closure3_slot0;
                    mike = _closure3_slot1;
                    entity = _closure3_slot2;
                    entity = tango.bind(report)(zulu, mike, entity);
                    entity = undefined;
                    return entity;
                };
                entity = true;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        entity['value'] = verify;
        zulu[27] = entity;
        entity = {};
        verify = '_merge';
        entity['key'] = verify;
        verify = function(argFoo) { // Original name: value
            _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                golf = argFoo;
                mike = arguments[1];
                tango = arguments[2];
                zulu = this;
                var _closure3_slot0 = zulu;
                entity = undefined;
                if(!(mike === entity)) { _fun00046_ip = 26; continue _fun00045 }
 24:
                mike = false;
 26:
                if(!(tango === entity)) { _fun00046_ip = 32; continue _fun00045 }
 30:
                tango = false;
 32:
                oscar = golf.filter;
                report = function(argFoo) {
                    _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                        tango = argFoo;
                        entity = _closure3_slot0;
                        report = entity._map;
                        zulu = tango.id;
                        oscar = report[zulu];
                        zulu = entity._map;
                        entity = tango.id;
                        zulu[entity] = tango;
                        entity = null;
                        entity = entity == oscar;
                        if(entity) { _fun00048_ip = 81; continue _fun00047 }
 49:
                        mike = _closure3_slot0;
                        zulu = mike._array;
                        report = mike._array;
                        mike = report.indexOf;
                        mike = mike.bind(report)(oscar);
                        zulu[mike] = tango;
                        entity = false;
 81:
                        return entity;
                    }
                };
                oscar = oscar.bind(golf)(report);
                if(!tango) { _fun00046_ip = 77; continue _fun00045 }
 50:
                if(mike) { _fun00046_ip = 61; continue _fun00045 }
 53:
                report = zulu._after;
                _fun00046_ip = 67; continue _fun00045;
 61:
                report = zulu._before;
 67:
                tango = report.clear;
                tango = tango.bind(report)();
 77:
                tango = new Array(0);
                if(mike) { _fun00046_ip = 114; continue _fun00045 }
 84:
                verify = zulu._array;
                offset = tango;
                options = 0;
                options = arraySpread(offset, verify, options);
                offset = tango;
                verify = oscar;
                mike = arraySpread(offset, verify, options);
                mike = tango;
                _fun00046_ip = 142; continue _fun00045;
 114:
                offset = tango;
                verify = oscar;
                options = 0;
                options = arraySpread(offset, verify, options);
                verify = zulu._array;
                offset = tango;
                report = arraySpread(offset, verify, options);
                mike = tango;
 142:
                zulu['_array'] = mike;
                return entity;
            }
        };
        entity['value'] = verify;
        zulu[28] = entity;
        entity = {};
        verify = 'mergeDelta';
        entity['key'] = verify;
        verify = function() { // Original name: value
            _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                oscar = arguments[0];
                report = arguments[1];
                mike = arguments[2];
                zulu = this;
                tango = undefined;
                if(!(oscar === tango)) { _fun00050_ip = 24; continue _fun00049 }
 20:
                oscar = new Array(0);
 24:
                var _closure3_slot0 = oscar;
                if(!(report === tango)) { _fun00050_ip = 36; continue _fun00049 }
 32:
                report = new Array(0);
 36:
                var _closure3_slot1 = report;
                if(!(mike === tango)) { _fun00050_ip = 48; continue _fun00049 }
 44:
                mike = new Array(0);
 48:
                var _closure3_slot2 = mike;
                mike = zulu.mutate;
                entity = function(argFoo) {
                    mike = argFoo;
                    tango = mike._before;
                    zulu = tango.clear;
                    zulu = zulu.bind(tango)();
                    tango = mike._after;
                    zulu = tango.clear;
                    zulu = zulu.bind(tango)();
                    zulu = global;
                    oscar = zulu.Set;
                    offset = _closure3_slot2;
                    report = oscar.prototype;
                    report = Object.create(report, {constructor: {value: oscar}});
                    yankee = report;
                    tango = new yankee[oscar](offset, verify);
                    tango = tango instanceof Object ? tango : report;
                    var _closure4_slot0 = tango;
                    golf = _closure3_slot0;
                    report = golf.forEach;
                    tango = function(argFoo) {
                        zulu = _closure4_slot0;
                        mike = zulu.add;
                        entity = argFoo;
                        entity = entity.id;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    tango = report.bind(golf)(tango);
                    options = _closure3_slot1;
                    tango = options.forEach;
                    zulu = function(argFoo) {
                        zulu = _closure4_slot0;
                        mike = zulu.add;
                        entity = argFoo;
                        entity = entity.id;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    zulu = tango.bind(options)(zulu);
                    report = mike._array;
                    tango = report.filter;
                    zulu = function(argFoo) {
                        zulu = _closure4_slot0;
                        mike = zulu.has;
                        entity = argFoo;
                        entity = entity.id;
                        entity = mike.bind(zulu)(entity);
                        entity = !entity;
                        return entity;
                    };
                    oscar = tango.bind(report)(zulu);
                    report = oscar.concat;
                    tango = golf.map;
                    zulu = function(argFoo) {
                        zulu = _closure1_slot0;
                        mike = _closure1_slot3;
                        entity = 5;
                        mike = mike[entity];
                        entity = undefined;
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.createMessageRecord;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    tango = tango.bind(golf)(zulu);
                    golf = options.map;
                    zulu = function(argFoo) {
                        zulu = _closure1_slot0;
                        mike = _closure1_slot3;
                        entity = 5;
                        mike = mike[entity];
                        entity = undefined;
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.createMessageRecord;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    zulu = golf.bind(options)(zulu);
                    tango = report.bind(oscar)(tango, zulu);
                    zulu = tango.sort;
                    entity = function(argFoo, argBar) {
                        zulu = _closure1_slot1;
                        mike = _closure1_slot3;
                        entity = 8;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.compare;
                        entity = argFoo;
                        mike = entity.id;
                        entity = argBar;
                        entity = entity.id;
                        entity = zulu.bind(tango)(mike, entity);
                        return entity;
                    };
                    entity = zulu.bind(tango)(entity);
                    mike['_array'] = entity;
                    entity = undefined;
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        entity['value'] = verify;
        zulu[29] = entity;
        entity = {};
        verify = '_clearMessages';
        entity['key'] = verify;
        verify = function() { // Original name: value
            mike = this;
            entity = new Array(0);
            mike['_array'] = entity;
            entity = {};
            mike['_map'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = verify;
        zulu[30] = entity;
        entity = {};
        verify = 'reset';
        entity['key'] = verify;
        verify = function(argFoo) { // Original name: value
            zulu = this;
            mike = argFoo;
            var _closure3_slot0 = mike;
            mike = zulu.mutate;
            entity = function(argFoo) {
                entity = argFoo;
                var _closure4_slot0 = entity;
                tango = _closure3_slot0;
                entity['_array'] = tango;
                zulu = {};
                entity['_map'] = zulu;
                zulu = tango.forEach;
                mike = function(argFoo) {
                    entity = argFoo;
                    mike = _closure4_slot0;
                    zulu = mike._map;
                    mike = entity.id;
                    zulu[mike] = entity;
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                zulu = entity._before;
                mike = zulu.clear;
                mike = mike.bind(zulu)();
                mike = entity._after;
                entity = mike.clear;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = verify;
        zulu[31] = entity;
        entity = {};
        verify = 'truncateTop';
        entity['key'] = verify;
        verify = function(argFoo) { // Original name: value
            _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                report = arguments[1];
                tango = this;
                entity = undefined;
                if(!(report === entity)) { _fun00052_ip = 16; continue _fun00051 }
 14:
                report = true;
 16:
                var _closure3_slot0 = entity;
                entity = tango._array;
                zulu = entity.length;
                entity = argFoo;
                oscar = zulu - entity;
                _closure3_slot0 = oscar;
                zulu = 0;
                entity = tango;
                if(!(!(oscar <= zulu))) { _fun00052_ip = 68; continue _fun00051 }
 51:
                zulu = tango.mutate;
                mike = function(argFoo) {
                    _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                        mike = argFoo;
                        zulu = _closure3_slot0;
                        options = 0;
                        zulu = options < zulu;
                        tango = 0;
                        if(!zulu) { _fun00054_ip = 57; continue _fun00053 }
 21:
                        report = mike._map;
                        zulu = mike._array;
                        zulu = zulu[tango];
                        zulu = zulu.id;
                        zulu = delete report[zulu];
                        tango = tango + 1;
                        zulu = _closure3_slot0;
                        if(tango < zulu) { _fun00054_ip = 21; continue _fun00053 }
 57:
                        oscar = mike._before;
                        report = oscar.cache;
                        golf = mike._array;
                        tango = golf.slice;
                        zulu = _closure3_slot0;
                        tango = tango.bind(golf)(options, zulu);
                        zulu = mike.hasMoreBefore;
                        zulu = !zulu;
                        zulu = report.bind(oscar)(tango, zulu);
                        tango = mike._array;
                        zulu = tango.slice;
                        entity = _closure3_slot0;
                        entity = zulu.bind(tango)(entity);
                        mike['_array'] = entity;
                        entity = true;
                        mike['hasMoreBefore'] = entity;
                        entity = undefined;
                        return entity;
                    }
                };
                entity = zulu.bind(tango)(mike, report);
 68:
                return entity;
            }
        };
        entity['value'] = verify;
        zulu[32] = entity;
        entity = {};
        verify = 'truncateBottom';
        entity['key'] = verify;
        verify = function(argFoo) { // Original name: value
            entity = this;
            return entity;
        };
        entity['value'] = verify;
        zulu[33] = entity;
        entity = {};
        verify = 'jumpToPresent';
        entity['key'] = verify;
        verify = function(argFoo) { // Original name: value
            tango = this;
            mike = argFoo;
            var _closure3_slot0 = mike;
            zulu = tango.mutate;
            mike = function(argFoo) {
                mike = argFoo;
                zulu = mike._after;
                entity = zulu.extractAll;
                golf = entity.bind(zulu)();
                entity = false;
                mike['hasMoreAfter'] = entity;
                zulu = global;
                oscar = zulu.Math;
                tango = oscar.max;
                report = golf.length;
                zulu = _closure3_slot0;
                zulu = report - zulu;
                report = 0;
                oscar = tango.bind(oscar)(zulu, report);
                zulu = golf.slice;
                tango = zulu.bind(golf)(oscar);
                zulu = golf.splice;
                zulu = zulu.bind(golf)(oscar);
                options = mike._before;
                oscar = options.cache;
                zulu = mike._array;
                zulu = oscar.bind(options)(zulu);
                oscar = mike._before;
                zulu = oscar.cache;
                zulu = zulu.bind(oscar)(golf);
                zulu = mike._clearMessages;
                zulu = zulu.bind(mike)();
                zulu = mike._merge;
                zulu = zulu.bind(mike)(tango);
                zulu = mike._before;
                zulu = zulu.length;
                zulu = zulu > report;
                mike['hasMoreBefore'] = zulu;
                zulu = true;
                mike['jumped'] = zulu;
                tango = null;
                mike['jumpTargetId'] = tango;
                mike['jumpTargetOffset'] = report;
                mike['jumpedToPresent'] = zulu;
                mike['jumpFlash'] = entity;
                mike['jumpReturnTargetId'] = tango;
                report = mike.jumpSequenceId;
                tango = 1;
                tango = report + tango;
                mike['jumpSequenceId'] = tango;
                mike['ready'] = zulu;
                mike['loadingMore'] = entity;
                entity = undefined;
                return entity;
            };
            entity = true;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        entity['value'] = verify;
        zulu[34] = entity;
        entity = {};
        verify = 'jumpToMessage';
        entity['key'] = verify;
        verify = function(argFoo) { // Original name: value
            _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
                mike = arguments[1];
                tango = this;
                zulu = argFoo;
                var _closure3_slot0 = zulu;
                zulu = undefined;
                if(!(mike === zulu)) { _fun00056_ip = 23; continue _fun00055 }
 21:
                mike = true;
 23:
                var _closure3_slot1 = mike;
                mike = arguments[2];
                var _closure3_slot2 = mike;
                mike = arguments[3];
                var _closure3_slot3 = mike;
                mike = arguments[4];
                var _closure3_slot4 = mike;
                zulu = tango.mutate;
                mike = function(argFoo) {
                    _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
                        mike = argFoo;
                        zulu = true;
                        mike['jumped'] = zulu;
                        entity = false;
                        mike['jumpedToPresent'] = entity;
                        report = _closure3_slot4;
                        options = null;
                        if(!(options == report)) { _fun00058_ip = 71; continue _fun00057 }
 32:
                        golf = _closure1_slot0;
                        oscar = _closure1_slot3;
                        report = 7;
                        oscar = oscar[report];
                        report = undefined;
                        report = golf.bind(report)(oscar);
                        report = report.JumpTypes;
                        report = report.ANIMATED;
                        _fun00058_ip = 75; continue _fun00057;
 71:
                        report = _closure3_slot4;
 75:
                        mike['jumpType'] = report;
                        report = _closure3_slot0;
                        mike['jumpTargetId'] = report;
                        oscar = options != report;
                        report = 0;
                        if(!oscar) { _fun00058_ip = 117; continue _fun00057 }
 100:
                        oscar = _closure3_slot2;
                        oscar = options != oscar;
                        report = 0;
                        if(!oscar) { _fun00058_ip = 117; continue _fun00057 }
 113:
                        report = _closure3_slot2;
 117:
                        mike['jumpTargetOffset'] = report;
                        oscar = mike.jumpSequenceId;
                        report = 1;
                        report = oscar + report;
                        mike['jumpSequenceId'] = report;
                        report = _closure3_slot1;
                        mike['jumpFlash'] = report;
                        tango = _closure3_slot3;
                        mike['jumpReturnTargetId'] = tango;
                        mike['ready'] = zulu;
                        mike['loadingMore'] = entity;
                        entity = undefined;
                        return entity;
                    }
                };
                entity = false;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        entity['value'] = verify;
        zulu[35] = entity;
        entity = {};
        verify = 'focusOnMessage';
        entity['key'] = verify;
        verify = function(argFoo) { // Original name: value
            tango = this;
            mike = argFoo;
            var _closure3_slot0 = mike;
            zulu = tango.mutate;
            mike = function(argFoo) {
                mike = argFoo;
                entity = _closure3_slot0;
                mike['focusTargetId'] = entity;
                entity = true;
                mike['ready'] = entity;
                entity = false;
                mike['loadingMore'] = entity;
                entity = undefined;
                return entity;
            };
            entity = false;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        entity['value'] = verify;
        zulu[36] = entity;
        entity = {};
        verify = 'loadFromCache';
        entity['key'] = verify;
        verify = function(argFoo, argBar) { // Original name: value
            tango = this;
            mike = argFoo;
            var _closure3_slot0 = mike;
            mike = argBar;
            var _closure3_slot1 = mike;
            zulu = tango.mutate;
            mike = function(argFoo) {
                _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                    mike = argFoo;
                    entity = _closure3_slot0;
                    if(entity) { _fun00060_ip = 21; continue _fun00059 }
 13:
                    tango = mike._after;
                    _fun00060_ip = 27; continue _fun00059;
 21:
                    tango = mike._before;
 27:
                    oscar = mike._merge;
                    report = tango.extract;
                    entity = _closure3_slot1;
                    report = report.bind(tango)(entity);
                    entity = _closure3_slot0;
                    entity = oscar.bind(mike)(report, entity);
                    report = tango.length;
                    entity = 0;
                    entity = report > entity;
                    if(entity) { _fun00060_ip = 81; continue _fun00059 }
 72:
                    tango = tango.wasAtEdge;
                    entity = !tango;
 81:
                    zulu = _closure3_slot0;
                    if(zulu) { _fun00060_ip = 96; continue _fun00059 }
 88:
                    mike['hasMoreAfter'] = entity;
                    _fun00060_ip = 102; continue _fun00059;
 96:
                    mike['hasMoreBefore'] = entity;
 102:
                    entity = true;
                    mike['ready'] = entity;
                    entity = false;
                    mike['loadingMore'] = entity;
                    entity = undefined;
                    return entity;
                }
            };
            entity = true;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        entity['value'] = verify;
        zulu[37] = entity;
        entity = {};
        verify = 'truncate';
        entity['key'] = verify;
        verify = function(argFoo, argBar) { // Original name: value
            _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
                report = this;
                tango = report.length;
                mike = _closure1_slot7;
                entity = report;
                if(!(!(tango <= mike))) { _fun00062_ip = 72; continue _fun00061 }
 22:
                mike = argFoo;
                if(mike) { _fun00062_ip = 54; continue _fun00061 }
 28:
                tango = argBar;
                mike = report;
                if(!tango) { _fun00062_ip = 52; continue _fun00061 }
 37:
                oscar = report.truncateTop;
                tango = _closure1_slot9;
                mike = oscar.bind(report)(tango);
 52:
                _fun00062_ip = 69; continue _fun00061;
 54:
                tango = report.truncateBottom;
                zulu = _closure1_slot9;
                mike = tango.bind(report)(zulu);
 69:
                entity = mike;
 72:
                return entity;
            }
        };
        entity['value'] = verify;
        zulu[38] = entity;
        entity = {};
        verify = 'receiveMessage';
        entity['key'] = verify;
        verify = function(argFoo) { // Original name: value
            _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
 0:
                entity = argFoo;
                zulu = arguments[1];
                tango = this;
                golf = undefined;
                if(!(zulu === golf)) { _fun00064_ip = 17; continue _fun00063 }
 15:
                zulu = true;
 17:
                mike = entity.nonce;
                oscar = null;
                report = oscar == mike;
                mike = null;
                if(report) { _fun00064_ip = 53; continue _fun00063 }
 34:
                verify = tango.get;
                options = entity.nonce;
                report = true;
                mike = verify.bind(tango)(options, report);
 53:
                if(!(oscar != mike)) { _fun00064_ip = 170; continue _fun00063 }
 57:
                report = entity.author;
                verify = oscar == report;
                options = undefined;
                if(verify) { _fun00064_ip = 77; continue _fun00063 }
 72:
                options = report.id;
 77:
                verify = mike.author;
                offset = oscar == verify;
                report = undefined;
                if(offset) { _fun00064_ip = 97; continue _fun00063 }
 92:
                report = verify.id;
 97:
                if(!(options !== report)) { _fun00064_ip = 142; continue _fun00063 }
 101:
                report = entity.interaction;
                if(!(oscar != report)) { _fun00064_ip = 170; continue _fun00063 }
 111:
                report = entity.interaction;
                report = report.user;
                options = report.id;
                report = mike.author;
                report = report.id;
                if(!(options === report)) { _fun00064_ip = 170; continue _fun00063 }
 142:
                report = entity.nonce;
                if(!(oscar != report)) { _fun00064_ip = 170; continue _fun00063 }
 152:
                options = mike.id;
                report = entity.nonce;
                if(!(options !== report)) { _fun00064_ip = 394; continue _fun00063 }
 170:
                report = tango.hasMoreAfter;
                if(report) { _fun00064_ip = 363; continue _fun00063 }
 182:
                verify = _closure1_slot1;
                offset = _closure1_slot3;
                options = 9;
                options = offset[options];
                romeo = verify.bind(golf)(options);
                yankee = romeo.getCurrentConfig;
                verify = {};
                options = '2ecb25_1';
                verify['location'] = options;
                options = {};
                offset = false;
                options['autoTrackExposure'] = offset;
                options = yankee.bind(romeo)(verify, options);
                options = options.enabled;
                if(options) { _fun00064_ip = 258; continue _fun00063 }
 246:
                options = _closure1_slot13;
                yankee = options.bind(golf)(tango, entity);
                _fun00064_ip = 289; continue _fun00063;
 258:
                verify = _closure1_slot0;
                romeo = _closure1_slot3;
                options = 5;
                options = romeo[options];
                verify = verify.bind(golf)(options);
                options = verify.createMessageRecord;
                yankee = options.bind(verify)(entity);
 289:
                verify = tango.merge;
                options = new Array(1);
                options[0] = yankee;
                verify = verify.bind(tango)(options);
                if(zulu) { _fun00064_ip = 345; continue _fun00063 }
 311:
                yankee = tango.length;
                options = _closure1_slot7;
                zulu = verify;
                if(!(yankee > options)) { _fun00064_ip = 343; continue _fun00063 }
 327:
                yankee = verify.truncateBottom;
                options = _closure1_slot6;
                zulu = yankee.bind(verify)(options, offset);
 343:
                _fun00064_ip = 361; continue _fun00063;
 345:
                options = verify.truncateTop;
                report = _closure1_slot6;
                zulu = options.bind(verify)(report, offset);
 361:
                return zulu;
 363:
                zulu = tango._after;
                zulu = zulu.wasAtEdge;
                if(!zulu) { _fun00064_ip = 392; continue _fun00063 }
 378:
                report = tango._after;
                zulu = false;
                report['wasAtEdge'] = zulu;
 392:
                return tango;
 394:
                report = _closure1_slot0;
                options = _closure1_slot3;
                zulu = 5;
                zulu = options[zulu];
                report = report.bind(golf)(zulu);
                zulu = report.createMessageRecord;
                zulu = zulu.bind(report)(entity);
                report = mike.interactionData;
                if(!(oscar != report)) { _fun00064_ip = 450; continue _fun00063 }
 438:
                mike = mike.interactionData;
                zulu['interactionData'] = mike;
 450:
                mike = tango.replace;
                entity = entity.nonce;
                entity = mike.bind(tango)(entity, zulu);
                return entity;
            }
        };
        entity['value'] = verify;
        zulu[39] = entity;
        entity = {};
        verify = 'receivePushNotification';
        entity['key'] = verify;
        verify = function(argFoo) { // Original name: value
            _fun00065: for(var _fun00066_ip = 0; ; ) switch(_fun00066_ip) {
 0:
                golf = argFoo;
                oscar = this;
                entity = golf.nonce;
                zulu = null;
                entity = zulu == entity;
                mike = null;
                if(entity) { _fun00066_ip = 42; continue _fun00065 }
 23:
                report = oscar.get;
                tango = golf.nonce;
                entity = true;
                mike = report.bind(oscar)(tango, entity);
 42:
                entity = oscar;
                if(!(zulu == mike)) { _fun00066_ip = 104; continue _fun00065 }
 49:
                zulu = oscar.mutate;
                mike = {'ready': true, 'cached': true};
                tango = zulu.bind(oscar)(mike);
                zulu = tango.merge;
                report = _closure1_slot13;
                mike = undefined;
                report = report.bind(mike)(oscar, golf);
                mike = new Array(1);
                mike[0] = report;
                entity = zulu.bind(tango)(mike);
 104:
                return entity;
            }
        };
        entity['value'] = verify;
        zulu[40] = entity;
        entity = {};
        verify = 'receiveReactionInAppNotification';
        entity['key'] = verify;
        verify = function(argFoo) { // Original name: value
            _fun00067: for(var _fun00068_ip = 0; ; ) switch(_fun00068_ip) {
 0:
                golf = argFoo;
                oscar = this;
                entity = golf.nonce;
                zulu = null;
                entity = zulu == entity;
                mike = null;
                if(entity) { _fun00068_ip = 42; continue _fun00067 }
 23:
                report = oscar.get;
                tango = golf.nonce;
                entity = true;
                mike = report.bind(oscar)(tango, entity);
 42:
                entity = oscar;
                if(!(zulu == mike)) { _fun00068_ip = 104; continue _fun00067 }
 49:
                zulu = oscar.mutate;
                mike = {'ready': true, 'cached': true};
                tango = zulu.bind(oscar)(mike);
                zulu = tango.merge;
                report = _closure1_slot13;
                mike = undefined;
                report = report.bind(mike)(oscar, golf);
                mike = new Array(1);
                mike[0] = report;
                entity = zulu.bind(tango)(mike);
 104:
                return entity;
            }
        };
        entity['value'] = verify;
        zulu[41] = entity;
        entity = {};
        verify = 'loadStart';
        entity['key'] = verify;
        verify = function(argFoo) { // Original name: value
            _fun00069: for(var _fun00070_ip = 0; ; ) switch(_fun00070_ip) {
 0:
                report = argFoo;
                zulu = this;
                mike = zulu.mutate;
                entity = {};
                tango = true;
                entity['loadingMore'] = tango;
                tango = null;
                oscar = tango != report;
                entity['jumped'] = oscar;
                oscar = tango == report;
                options = undefined;
                if(oscar) { _fun00070_ip = 47; continue _fun00069 }
 41:
                options = report.present;
 47:
                oscar = tango != options;
                if(!oscar) { _fun00070_ip = 57; continue _fun00069 }
 54:
                oscar = options;
 57:
                entity['jumpedToPresent'] = oscar;
                oscar = tango == report;
                options = undefined;
                if(oscar) { _fun00070_ip = 76; continue _fun00069 }
 71:
                options = report.messageId;
 76:
                verify = tango != options;
                oscar = null;
                if(!verify) { _fun00070_ip = 88; continue _fun00069 }
 85:
                oscar = options;
 88:
                entity['jumpTargetId'] = oscar;
                oscar = tango == report;
                options = undefined;
                if(oscar) { _fun00070_ip = 108; continue _fun00069 }
 102:
                options = report.offset;
 108:
                verify = tango != options;
                oscar = 0;
                if(!verify) { _fun00070_ip = 120; continue _fun00069 }
 117:
                oscar = options;
 120:
                entity['jumpTargetOffset'] = oscar;
                oscar = tango == report;
                golf = undefined;
                if(oscar) { _fun00070_ip = 140; continue _fun00069 }
 134:
                golf = report.returnMessageId;
 140:
                options = tango != golf;
                oscar = null;
                if(!options) { _fun00070_ip = 152; continue _fun00069 }
 149:
                oscar = golf;
 152:
                entity['jumpReturnTargetId'] = oscar;
                tango = tango == report;
                if(!tango) { _fun00070_ip = 170; continue _fun00069 }
 164:
                tango = zulu.ready;
 170:
                entity['ready'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        entity['value'] = verify;
        zulu[42] = entity;
        entity = {};
        verify = 'loadComplete';
        entity['key'] = verify;
        verify = function(argFoo) { // Original name: value
            _fun00071: for(var _fun00072_ip = 0; ; ) switch(_fun00072_ip) {
 0:
                report = argFoo;
                output = this;
                var _closure3_slot0 = output;
                config = report.newMessages;
                zulu = new Array(0);
                sizing = 0;
                record = zulu;
                sequence = 0;
                mike = arraySpread(record, config, sequence);
                mike = report.isBefore;
                yankee = null;
                options = yankee != mike;
                if(!options) { _fun00072_ip = 51; continue _fun00071 }
 48:
                options = mike;
 51:
                mike = report.isAfter;
                romeo = yankee != mike;
                if(!romeo) { _fun00072_ip = 67; continue _fun00071 }
 64:
                romeo = mike;
 67:
                mike = report.jump;
                tango = yankee != mike;
                offset = null;
                if(!tango) { _fun00072_ip = 85; continue _fun00071 }
 82:
                offset = mike;
 85:
                mike = report.hasMoreBefore;
                foxtrot = yankee != mike;
                if(!foxtrot) { _fun00072_ip = 101; continue _fun00071 }
 98:
                foxtrot = mike;
 101:
                mike = report.hasMoreAfter;
                verify = yankee != mike;
                if(!verify) { _fun00072_ip = 117; continue _fun00071 }
 114:
                verify = mike;
 117:
                mike = report.cached;
                oscar = yankee != mike;
                if(!oscar) { _fun00072_ip = 133; continue _fun00071 }
 130:
                oscar = mike;
 133:
                tango = _closure1_slot1;
                result = _closure1_slot3;
                mike = 6;
                mike = result[mike];
                backup = undefined;
                mike = tango.bind(backup)(mike);
                zulu = mike.bind(backup)(zulu);
                mike = zulu.reverse;
                golf = mike.bind(zulu)();
                zulu = golf.map;
                mike = 9;
                mike = result[mike];
                update = tango.bind(backup)(mike);
                echo = update.getCurrentConfig;
                result = {};
                mike = '2ecb25_2';
                result['location'] = mike;
                mike = {};
                tango = false;
                mike['autoTrackExposure'] = tango;
                mike = echo.bind(update)(result, mike);
                mike = mike.enabled;
                if(mike) { _fun00072_ip = 238; continue _fun00071 }
 231:
                mike = function(argFoo) {
                    tango = _closure1_slot13;
                    zulu = _closure3_slot0;
                    mike = undefined;
                    entity = argFoo;
                    entity = tango.bind(mike)(zulu, entity);
                    return entity;
                };
                _fun00072_ip = 243; continue _fun00071;
 238:
                mike = function(argFoo) {
                    zulu = _closure1_slot0;
                    mike = _closure1_slot3;
                    entity = 5;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.createMessageRecord;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
 243:
                zulu = zulu.bind(golf)(mike);
                mike = zulu.value;
                golf = mike.bind(zulu)();
                if(options) { _fun00072_ip = 263; continue _fun00071 }
 260:
                if(!romeo) { _fun00072_ip = 279; continue _fun00071 }
 263:
                if(!(yankee == offset)) { _fun00072_ip = 279; continue _fun00071 }
 267:
                mike = output.ready;
                if(mike) { _fun00072_ip = 615; continue _fun00071 }
 279:
                result = output._array;
                zulu = result.filter;
                mike = function(argFoo) {
                    entity = argFoo;
                    mike = entity.state;
                    entity = _closure1_slot10;
                    entity = entity.SENDING;
                    entity = mike === entity;
                    return entity;
                };
                mike = zulu.bind(result)(mike);
                result = output._array;
                zulu = result.filter;
                entity = function(argFoo) {
                    entity = argFoo;
                    mike = entity.state;
                    entity = _closure1_slot10;
                    entity = entity.SEND_FAILED;
                    entity = mike === entity;
                    return entity;
                };
                result = zulu.bind(result)(entity);
                entity = mike.length;
                zulu = entity > sizing;
                if(zulu) { _fun00072_ip = 342; continue _fun00071 }
 333:
                entity = result.length;
                zulu = entity > sizing;
 342:
                entity = output.reset;
                entity = entity.bind(output)(golf);
                if(!zulu) { _fun00072_ip = 553; continue _fun00071 }
 359:
                if(options) { _fun00072_ip = 553; continue _fun00071 }
 365:
                if(romeo) { _fun00072_ip = 553; continue _fun00071 }
 371:
                echo = yankee == offset;
                zulu = undefined;
                if(echo) { _fun00072_ip = 385; continue _fun00071 }
 380:
                zulu = offset.messageId;
 385:
                if(!(yankee == zulu)) { _fun00072_ip = 553; continue _fun00071 }
 392:
                echo = yankee == offset;
                zulu = undefined;
                if(echo) { _fun00072_ip = 407; continue _fun00071 }
 401:
                zulu = offset.offset;
 407:
                if(!(yankee == zulu)) { _fun00072_ip = 553; continue _fun00071 }
 414:
                zulu = result.length;
                echo = entity;
                if(!(zulu > sizing)) { _fun00072_ip = 481; continue _fun00071 }
 426:
                source = _closure1_slot11;
                update = source.info;
                vacuum = output.channelId;
                zulu = global;
                zulu = zulu.HermesInternal;
                control = zulu.concat;
                zulu = 'loadComplete: merging with SEND_FAILED messages for channelId=';
                zulu = control.bind(zulu)(vacuum);
                zulu = update.bind(source)(zulu);
                zulu = entity.merge;
                echo = zulu.bind(entity)(result);
 481:
                result = mike.length;
                zulu = echo;
                if(!(result > sizing)) { _fun00072_ip = 630; continue _fun00071 }
 496:
                source = _closure1_slot11;
                update = source.info;
                vacuum = output.channelId;
                result = global;
                result = result.HermesInternal;
                control = result.concat;
                result = 'loadComplete: merging with SENDING messages for channelId=';
                result = control.bind(result)(vacuum);
                result = update.bind(source)(result);
                result = echo.merge;
                zulu = result.bind(echo)(mike);
                _fun00072_ip = 630; continue _fun00071;
 553:
                echo = _closure1_slot11;
                result = echo.info;
                vacuum = output.channelId;
                control = mike.length;
                mike = global;
                mike = mike.HermesInternal;
                source = mike.concat;
                update = 'loadComplete: resetting state for channelId=';
                mike = ', sending.length=';
                mike = source.bind(update)(vacuum, mike, control);
                mike = result.bind(echo)(mike);
                zulu = entity;
                _fun00072_ip = 630; continue _fun00071;
 615:
                mike = output.merge;
                entity = true;
                zulu = mike.bind(output)(golf, options, entity);
 630:
                mike = zulu.mutate;
                entity = {'ready': true, 'loadingMore': false};
                output = yankee == offset;
                golf = undefined;
                if(output) { _fun00072_ip = 661; continue _fun00071 }
 655:
                golf = offset.jumpType;
 661:
                if(!(yankee == golf)) { _fun00072_ip = 697; continue _fun00071 }
 665:
                output = _closure1_slot0;
                result = _closure1_slot3;
                kilo = 7;
                kilo = result[kilo];
                kilo = output.bind(backup)(kilo);
                kilo = kilo.JumpTypes;
                golf = kilo.ANIMATED;
 697:
                entity['jumpType'] = golf;
                golf = yankee == offset;
                kilo = undefined;
                if(golf) { _fun00072_ip = 717; continue _fun00071 }
 711:
                kilo = offset.flash;
 717:
                golf = yankee != kilo;
                if(!golf) { _fun00072_ip = 727; continue _fun00071 }
 724:
                golf = kilo;
 727:
                entity['jumpFlash'] = golf;
                golf = yankee != offset;
                entity['jumped'] = golf;
                golf = yankee == offset;
                kilo = undefined;
                if(golf) { _fun00072_ip = 756; continue _fun00071 }
 750:
                kilo = offset.present;
 756:
                golf = yankee != kilo;
                if(!golf) { _fun00072_ip = 766; continue _fun00071 }
 763:
                golf = kilo;
 766:
                entity['jumpedToPresent'] = golf;
                golf = yankee == offset;
                kilo = undefined;
                if(golf) { _fun00072_ip = 785; continue _fun00071 }
 780:
                kilo = offset.messageId;
 785:
                output = yankee != kilo;
                golf = null;
                if(!output) { _fun00072_ip = 797; continue _fun00071 }
 794:
                golf = kilo;
 797:
                entity['jumpTargetId'] = golf;
                kilo = yankee != offset;
                golf = 0;
                if(!kilo) { _fun00072_ip = 846; continue _fun00071 }
 811:
                kilo = offset.messageId;
                kilo = yankee != kilo;
                golf = 0;
                if(!kilo) { _fun00072_ip = 846; continue _fun00071 }
 825:
                kilo = offset.offset;
                kilo = yankee != kilo;
                golf = 0;
                if(!kilo) { _fun00072_ip = 846; continue _fun00071 }
 840:
                golf = offset.offset;
 846:
                entity['jumpTargetOffset'] = golf;
                if(!(yankee == offset)) { _fun00072_ip = 863; continue _fun00071 }
 855:
                golf = zulu.jumpSequenceId;
                _fun00072_ip = 876; continue _fun00071;
 863:
                sizing = zulu.jumpSequenceId;
                kilo = 1;
                golf = sizing + kilo;
 876:
                entity['jumpSequenceId'] = golf;
                golf = yankee == offset;
                backup = undefined;
                if(golf) { _fun00072_ip = 896; continue _fun00071 }
 890:
                backup = offset.returnMessageId;
 896:
                kilo = yankee != backup;
                golf = null;
                if(!kilo) { _fun00072_ip = 908; continue _fun00071 }
 905:
                golf = backup;
 908:
                entity['jumpReturnTargetId'] = golf;
                golf = foxtrot;
                if(!(yankee == offset)) { _fun00072_ip = 932; continue _fun00071 }
 920:
                golf = foxtrot;
                if(!romeo) { _fun00072_ip = 932; continue _fun00071 }
 926:
                golf = zulu.hasMoreBefore;
 932:
                entity['hasMoreBefore'] = golf;
                golf = verify;
                if(!(yankee == offset)) { _fun00072_ip = 956; continue _fun00071 }
 944:
                golf = verify;
                if(!options) { _fun00072_ip = 956; continue _fun00071 }
 950:
                golf = zulu.hasMoreAfter;
 956:
                entity['hasMoreAfter'] = golf;
                entity['cached'] = oscar;
                report = report.hasFetched;
                entity['hasFetched'] = report;
                entity['error'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        entity['value'] = verify;
        zulu[43] = entity;
        entity = {};
        verify = 'addCachedMessages';
        entity['key'] = verify;
        verify = function(argFoo, argBar) { // Original name: value
            report = argFoo;
            zulu = this;
            var _closure3_slot0 = zulu;
            oscar = _closure1_slot0;
            tango = _closure1_slot3;
            mike = 10;
            tango = tango[mike];
            mike = undefined;
            tango = oscar.bind(mike)(tango);
            mike = tango.requireSortedDescending;
            mike = mike.bind(tango)(report);
            tango = report.map;
            mike = function(argFoo) {
                tango = _closure1_slot13;
                zulu = _closure3_slot0;
                mike = undefined;
                entity = argFoo;
                entity = tango.bind(mike)(zulu, entity);
                return entity;
            };
            tango = tango.bind(report)(mike);
            mike = tango.reverse;
            mike = mike.bind(tango)();
            var _closure3_slot1 = mike;
            oscar = zulu._array;
            report = oscar.filter;
            tango = function(argFoo) {
                mike = argFoo;
                var _closure4_slot0 = mike;
                zulu = _closure3_slot1;
                mike = zulu.some;
                entity = function(argFoo) {
                    entity = argFoo;
                    mike = entity.id;
                    entity = _closure4_slot0;
                    entity = entity.id;
                    entity = mike === entity;
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                entity = !entity;
                return entity;
            };
            report = report.bind(oscar)(tango);
            tango = report.forEach;
            entity = function(argFoo) {
                zulu = _closure1_slot2;
                mike = _closure1_slot3;
                entity = 11;
                mike = mike[entity];
                entity = undefined;
                report = zulu.bind(entity)(mike);
                tango = report.insert;
                zulu = _closure3_slot1;
                mike = argFoo;
                entity = function(argFoo, argBar) {
                    zulu = _closure1_slot1;
                    mike = _closure1_slot3;
                    entity = 8;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.compare;
                    entity = argFoo;
                    mike = entity.id;
                    entity = argBar;
                    entity = entity.id;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                entity = tango.bind(report)(zulu, mike, entity);
                return entity;
            };
            entity = tango.bind(report)(entity);
            entity = zulu.reset;
            zulu = entity.bind(zulu)(mike);
            mike = zulu.mutate;
            entity = {'ready': true, 'cached': null, 'error': false};
            tango = argBar;
            entity['cached'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = verify;
        zulu[44] = entity;
        entity = {};
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            zulu = _closure1_slot1;
            mike = _closure1_slot3;
            entity = 6;
            mike = mike[entity];
            entity = undefined;
            report = zulu.bind(entity)(mike);
            tango = report.forEach;
            mike = _closure2_slot0;
            zulu = mike._channelMessages;
            mike = argFoo;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(7);
        mike[0] = entity;
        entity = {};
        entity['key'] = options;
        options = function(argFoo) { // Original name: value
            entity = _closure2_slot0;
            mike = entity._channelMessages;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        entity['value'] = options;
        mike[1] = entity;
        entity = {};
        entity['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00073: for(var _fun00074_ip = 0; ; ) switch(_fun00074_ip) {
 0:
                zulu = _closure2_slot0;
                mike = zulu.get;
                entity = argFoo;
                zulu = mike.bind(zulu)(entity);
                entity = null;
                entity = entity != zulu;
                if(!entity) { _fun00074_ip = 39; continue _fun00073 }
 29:
                mike = zulu.hasPresent;
                entity = mike.bind(zulu)();
 39:
                return entity;
            }
        };
        entity['value'] = golf;
        mike[2] = entity;
        entity = {};
        golf = 'getOrCreate';
        entity['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00075: for(var _fun00076_ip = 0; ; ) switch(_fun00076_ip) {
 0:
                tango = argFoo;
                entity = _closure2_slot0;
                entity = entity._channelMessages;
                entity = entity[tango];
                zulu = null;
                if(!(zulu == entity)) { _fun00076_ip = 66; continue _fun00075 }
 26:
                zulu = _closure2_slot0;
                mike = zulu.prototype;
                report = Object.create(mike, {constructor: {value: zulu}});
                golf = report;
                oscar = tango;
                mike = new golf[zulu](oscar, report);
                mike = mike instanceof Object ? mike : report;
                zulu = zulu._channelMessages;
                zulu[tango] = mike;
                entity = mike;
 66:
                return entity;
            }
        };
        entity['value'] = golf;
        mike[3] = entity;
        entity = {};
        golf = 'clear';
        entity['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = _closure2_slot0;
            mike = entity._channelMessages;
            entity = argFoo;
            entity = delete mike[entity];
            entity = undefined;
            return entity;
        };
        entity['value'] = golf;
        mike[4] = entity;
        entity = {};
        golf = 'clearCache';
        entity['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00077: for(var _fun00078_ip = 0; ; ) switch(_fun00078_ip) {
 0:
                zulu = this;
                entity = _closure2_slot0;
                mike = entity._channelMessages;
                entity = argFoo;
                mike = mike[entity];
                entity = null;
                if(!(entity != mike)) { _fun00078_ip = 72; continue _fun00077 }
 29:
                tango = mike._before;
                entity = tango.clear;
                entity = entity.bind(tango)();
                tango = mike._after;
                entity = tango.clear;
                entity = entity.bind(tango)();
                entity = zulu.commit;
                entity = entity.bind(zulu)(mike);
 72:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = golf;
        mike[5] = entity;
        entity = {};
        golf = 'commit';
        entity['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            zulu = argFoo;
            entity = _closure2_slot0;
            mike = entity._channelMessages;
            entity = zulu.channelId;
            mike[entity] = zulu;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = undefined;
        entity = tango.bind(entity)(report, zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = {};
    mike['_channelMessages'] = tango;
    tango = 12;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'lib/ChannelMessages.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();