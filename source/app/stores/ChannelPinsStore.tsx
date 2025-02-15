// app/stores/ChannelPinsStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun90952: for(var _fun90952_ip = 0; ; ) switch(_fun90952_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot17;
            entity = entity.bind(zulu)();
            if(entity) { _fun90952_ip = 51; continue _fun90952 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun90952_ip = 92; continue _fun90952;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun90952_ip = 71; continue _fun90952 }
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
    var _closure1_slot16 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun90953: for(var _fun90953_ip = 0; ; ) switch(_fun90953_ip) {
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
            _fun90953_ip = 76; continue _fun90953;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot17 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: createChannel
        _fun90956: for(var _fun90956_ip = 0; ; ) switch(_fun90956_ip) {
 0:
            report = argFoo;
            golf = arguments[1];
            zulu = arguments[2];
            mike = arguments[3];
            entity = undefined;
            if(!(golf === entity)) { _fun90956_ip = 22; continue _fun90956 }
 18:
            golf = new Array(0);
 22:
            if(!(zulu === entity)) { _fun90956_ip = 28; continue _fun90956 }
 26:
            zulu = false;
 28:
            if(!(mike === entity)) { _fun90956_ip = 34; continue _fun90956 }
 32:
            mike = false;
 34:
            tango = _closure1_slot9;
            entity = tango.getChannel;
            oscar = entity.bind(tango)(report);
            tango = null;
            entity = tango != oscar;
            if(!entity) { _fun90956_ip = 70; continue _fun90956 }
 60:
            entity = oscar.getGuildId;
            tango = entity.bind(oscar)();
 70:
            entity = {};
            entity['id'] = report;
            oscar = golf.map;
            report = function(argFoo) {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 12;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.createMessageRecord;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            report = oscar.bind(golf)(report);
            entity['messages'] = report;
            entity['guildId'] = tango;
            entity['loaded'] = zulu;
            entity['loading'] = mike;
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    offset = function(argFoo) { // Original name: handleDeleteChannel
        entity = argFoo;
        entity = entity.channel;
        mike = _closure1_slot15;
        entity = entity.id;
        entity = delete mike[entity];
        entity = undefined;
        return entity;
    };
    verify = function() { // Original name: handleRelationshipUpdate
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 13;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.forEach;
        zulu = _closure1_slot15;
        mike = function(argFoo) {
            mike = argFoo;
            tango = mike.messages;
            zulu = tango.map;
            entity = function(argFoo) {
                report = argFoo;
                tango = report.set;
                zulu = _closure1_slot13;
                mike = zulu.isBlockedForMessage;
                zulu = mike.bind(zulu)(report);
                mike = 'blocked';
                tango = tango.bind(report)(mike, zulu);
                zulu = tango.set;
                mike = _closure1_slot13;
                entity = mike.isIgnoredForMessage;
                mike = entity.bind(mike)(report);
                entity = 'ignored';
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            entity = zulu.bind(tango)(entity);
            mike['messages'] = entity;
            entity = undefined;
            return entity;
        };
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    entity = global;
    yankee = entity.Object;
    options = yankee.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(yankee)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot9 = mike;
    mike = 7;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot10 = mike;
    mike = 8;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot11 = mike;
    mike = 9;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot12 = mike;
    mike = 10;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot13 = mike;
    mike = 11;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot14 = mike;
    mike = {};
    var _closure1_slot15 = mike;
    mike = 15;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: ChannelPinsStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot3;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot16;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            options = this;
            golf = options.waitFor;
            backup = _closure1_slot9;
            foxtrot = _closure1_slot11;
            romeo = _closure1_slot10;
            yankee = _closure1_slot12;
            offset = _closure1_slot14;
            verify = _closure1_slot8;
            kilo = options;
            entity = kilo[golf](backup, foxtrot, romeo, yankee, offset, verify, options);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golf = 'getPinnedMessages';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun90965: for(var _fun90965_ip = 0; ; ) switch(_fun90965_ip) {
 0:
                mike = _closure1_slot15;
                entity = argFoo;
                mike = mike[entity];
                entity = null;
                zulu = entity != mike;
                entity = undefined;
                if(!zulu) { _fun90965_ip = 28; continue _fun90965 }
 25:
                entity = mike;
 28:
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'loaded';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun90966: for(var _fun90966_ip = 0; ; ) switch(_fun90966_ip) {
 0:
                zulu = argFoo;
                entity = _closure1_slot15;
                tango = entity[zulu];
                entity = null;
                entity = entity != tango;
                if(!entity) { _fun90966_ip = 37; continue _fun90966 }
 23:
                mike = _closure1_slot15;
                mike = mike[zulu];
                entity = mike.loaded;
 37:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[2] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'ChannelPinsStore';
    options['displayName'] = mike;
    mike = 16;
    mike = oscar[mike];
    backup = golf.bind(entity)(mike);
    mike = {};
    yankee = function() { // Original name: handleConnectionOpen
        entity = {};
        _closure1_slot15 = entity;
        entity = undefined;
        return entity;
    };
    mike['CONNECTION_OPEN'] = yankee;
    yankee = function(argFoo) { // Original name: handleGuildDelete
        entity = argFoo;
        entity = entity.guild;
        var _closure2_slot0 = entity;
        report = _closure1_slot1;
        tango = _closure1_slot2;
        entity = 13;
        tango = tango[entity];
        entity = undefined;
        report = report.bind(entity)(tango);
        tango = _closure1_slot15;
        report = report.bind(entity)(tango);
        tango = report.filter;
        mike = function(argFoo) {
            entity = argFoo;
            mike = entity.guildId;
            entity = _closure2_slot0;
            entity = entity.id;
            entity = mike !== entity;
            return entity;
        };
        report = tango.bind(report)(mike);
        tango = report.keyBy;
        mike = 'id';
        tango = tango.bind(report)(mike);
        mike = tango.value;
        mike = mike.bind(tango)();
        _closure1_slot15 = mike;
        return entity;
    };
    mike['GUILD_DELETE'] = yankee;
    yankee = function(argFoo) { // Original name: handleMessageUpdate
        _fun90970: for(var _fun90970_ip = 0; ; ) switch(_fun90970_ip) {
 0:
            entity = argFoo;
            mike = entity.message;
            mike = mike.id;
            var _closure2_slot0 = mike;
            mike = entity.message;
            zulu = mike.channel_id;
            oscar = null;
            if(!(oscar != zulu)) { _fun90970_ip = 632; continue _fun90970 }
 38:
            report = _closure1_slot15;
            report = report[zulu];
            if(!(oscar == report)) { _fun90970_ip = 71; continue _fun90970 }
 53:
            golf = entity.message;
            golf = golf.pinned;
            if(golf) { _fun90970_ip = 71; continue _fun90970 }
 67:
            golf = false;
            return golf;
 71:
            golf = entity.message;
            golf = golf.author;
            if(!(oscar == golf)) { _fun90970_ip = 244; continue _fun90970 }
 89:
            if(!(oscar != report)) { _fun90970_ip = 588; continue _fun90970 }
 96:
            options = _closure1_slot1;
            verify = _closure1_slot2;
            golf = 13;
            golf = verify[golf];
            yankee = undefined;
            offset = options.bind(yankee)(golf);
            verify = offset.findIndex;
            options = report.messages;
            golf = function(argFoo) {
                entity = argFoo;
                mike = entity.id;
                entity = _closure2_slot0;
                entity = mike === entity;
                return entity;
            };
            verify = verify.bind(offset)(options, golf);
            golf = 0;
            if(!(verify >= golf)) { _fun90970_ip = 588; continue _fun90970 }
 152:
            golf = report.messages;
            options = golf[verify];
            offset = _closure1_slot0;
            romeo = _closure1_slot2;
            golf = 12;
            golf = romeo[golf];
            yankee = offset.bind(yankee)(golf);
            offset = yankee.updateMessageRecord;
            golf = entity.message;
            golf = offset.bind(yankee)(options, golf);
            if(!(golf !== options)) { _fun90970_ip = 588; continue _fun90970 }
 206:
            offset = report.messages;
            options = offset.slice;
            options = options.bind(offset)();
            options[verify] = golf;
            golf = _closure1_slot15;
            golf = golf[zulu];
            golf['messages'] = options;
            _fun90970_ip = 588; continue _fun90970;
 244:
            golf = entity.message;
            golf = golf.pinned;
            if(golf) { _fun90970_ip = 383; continue _fun90970 }
 261:
            if(!(oscar != report)) { _fun90970_ip = 379; continue _fun90970 }
 265:
            verify = _closure1_slot1;
            options = _closure1_slot2;
            golf = 13;
            options = options[golf];
            golf = undefined;
            yankee = verify.bind(golf)(options);
            offset = yankee.findIndex;
            verify = report.messages;
            options = function(argFoo) {
                entity = argFoo;
                mike = entity.id;
                entity = _closure2_slot0;
                entity = mike === entity;
                return entity;
            };
            yankee = offset.bind(yankee)(verify, options);
            options = -1;
            if(!(options !== yankee)) { _fun90970_ip = 377; continue _fun90970 }
 322:
            verify = report.messages;
            options = verify.slice;
            options = options.bind(verify)();
            report['messages'] = options;
            offset = report.messages;
            verify = offset.splice;
            options = 1;
            options = verify.bind(offset)(yankee, options);
            options = _closure1_slot15;
            options[zulu] = report;
            _fun90970_ip = 588; continue _fun90970;
 377:
            return golf;
 379:
            golf = undefined;
            return golf;
 383:
            if(!(oscar != report)) { _fun90970_ip = 592; continue _fun90970 }
 390:
            golf = report.messages;
            oscar = golf.slice;
            oscar = oscar.bind(golf)();
            report['messages'] = oscar;
            golf = _closure1_slot1;
            options = _closure1_slot2;
            oscar = 13;
            oscar = options[oscar];
            verify = undefined;
            options = golf.bind(verify)(oscar);
            golf = options.findIndex;
            oscar = report.messages;
            tango = function(argFoo) {
                entity = argFoo;
                mike = entity.id;
                entity = _closure2_slot0;
                entity = mike === entity;
                return entity;
            };
            golf = golf.bind(options)(oscar, tango);
            tango = -1;
            if(!(tango !== golf)) { _fun90970_ip = 527; continue _fun90970 }
 468:
            oscar = report.messages;
            options = _closure1_slot0;
            offset = _closure1_slot2;
            tango = 12;
            tango = offset[tango];
            yankee = options.bind(verify)(tango);
            offset = yankee.updateMessageRecord;
            tango = report.messages;
            options = tango[golf];
            tango = entity.message;
            tango = offset.bind(yankee)(options, tango);
            oscar[golf] = tango;
            _fun90970_ip = 580; continue _fun90970;
 527:
            golf = report.messages;
            oscar = golf.unshift;
            options = _closure1_slot0;
            offset = _closure1_slot2;
            tango = 12;
            tango = offset[tango];
            verify = options.bind(verify)(tango);
            options = verify.createMessageRecord;
            tango = entity.message;
            tango = options.bind(verify)(tango);
            tango = oscar.bind(golf)(tango);
 580:
            tango = _closure1_slot15;
            tango[zulu] = report;
 588:
            tango = undefined;
            return tango;
 592:
            oscar = _closure1_slot18;
            entity = entity.message;
            report = new Array(1);
            report[0] = entity;
            tango = undefined;
            entity = false;
            entity = oscar.bind(tango)(zulu, report, entity);
            mike = _closure1_slot15;
            mike[zulu] = entity;
            entity = undefined;
            return entity;
 632:
            entity = false;
            return entity;
        }
    };
    mike['MESSAGE_UPDATE'] = yankee;
    yankee = function(argFoo) { // Original name: handleMessageDelete
        _fun90974: for(var _fun90974_ip = 0; ; ) switch(_fun90974_ip) {
 0:
            entity = argFoo;
            zulu = entity.id;
            var _closure2_slot0 = zulu;
            report = entity.channelId;
            entity = _closure1_slot15;
            zulu = entity[report];
            entity = null;
            entity = entity != zulu;
            if(!entity) { _fun90974_ip = 134; continue _fun90974 }
 39:
            options = _closure1_slot1;
            golf = _closure1_slot2;
            oscar = 13;
            golf = golf[oscar];
            oscar = undefined;
            options = options.bind(oscar)(golf);
            golf = options.remove;
            oscar = zulu.messages;
            mike = function(argFoo) {
                entity = argFoo;
                mike = entity.id;
                entity = _closure2_slot0;
                entity = mike === entity;
                return entity;
            };
            mike = golf.bind(options)(oscar, mike);
            oscar = mike.length;
            mike = 0;
            mike = mike !== oscar;
            if(!mike) { _fun90974_ip = 131; continue _fun90974 }
 100:
            golf = zulu.messages;
            oscar = golf.slice;
            oscar = oscar.bind(golf)();
            zulu['messages'] = oscar;
            tango = _closure1_slot15;
            tango[report] = zulu;
            mike = undefined;
 131:
            entity = mike;
 134:
            return entity;
        }
    };
    mike['MESSAGE_DELETE'] = yankee;
    yankee = function(argFoo) { // Original name: handleMessageDeleteBulk
        _fun90976: for(var _fun90976_ip = 0; ; ) switch(_fun90976_ip) {
 0:
            mike = argFoo;
            zulu = mike.ids;
            var _closure2_slot0 = zulu;
            zulu = mike.channelId;
            mike = _closure1_slot15;
            mike = mike[zulu];
            zulu = null;
            if(!(zulu != mike)) { _fun90976_ip = 66; continue _fun90976 }
 37:
            tango = mike.messages;
            zulu = tango.filter;
            entity = function(argFoo) {
                zulu = _closure2_slot0;
                mike = zulu.indexOf;
                entity = argFoo;
                entity = entity.id;
                mike = mike.bind(zulu)(entity);
                entity = -1;
                entity = entity === mike;
                return entity;
            };
            entity = zulu.bind(tango)(entity);
            mike['messages'] = entity;
 66:
            entity = undefined;
            return entity;
        }
    };
    mike['MESSAGE_DELETE_BULK'] = yankee;
    yankee = function(argFoo) { // Original name: handleLoadPinMessages
        entity = argFoo;
        tango = entity.channelId;
        zulu = _closure1_slot15;
        golf = _closure1_slot18;
        entity = undefined;
        offset = new Array(0);
        verify = false;
        options = true;
        romeo = undefined;
        yankee = tango;
        mike = romeo[golf](yankee, offset, verify, options, golf);
        zulu[tango] = mike;
        return entity;
    };
    mike['LOAD_PINNED_MESSAGES'] = yankee;
    yankee = function(argFoo) { // Original name: handlePinMessagesLoaded
        entity = argFoo;
        tango = entity.channelId;
        oscar = entity.messages;
        zulu = _closure1_slot15;
        report = _closure1_slot18;
        entity = undefined;
        mike = true;
        mike = report.bind(entity)(tango, oscar, mike);
        zulu[tango] = mike;
        return entity;
    };
    mike['LOAD_PINNED_MESSAGES_SUCCESS'] = yankee;
    yankee = function(argFoo) { // Original name: handlePinMessagesFailed
        entity = argFoo;
        mike = entity.channelId;
        entity = _closure1_slot15;
        entity = delete entity[mike];
        entity = undefined;
        return entity;
    };
    mike['LOAD_PINNED_MESSAGES_FAILURE'] = yankee;
    mike['CHANNEL_DELETE'] = offset;
    mike['THREAD_DELETE'] = offset;
    mike['RELATIONSHIP_ADD'] = verify;
    mike['RELATIONSHIP_REMOVE'] = verify;
    mike['RELATIONSHIP_UPDATE'] = verify;
    tango = function(argFoo) { // Original name: handleScanTimeout
        _fun90981: for(var _fun90981_ip = 0; ; ) switch(_fun90981_ip) {
 0:
            entity = argFoo;
            mike = entity.messageId;
            var _closure2_slot0 = mike;
            zulu = entity.channelId;
            mike = _closure1_slot15;
            mike = mike[zulu];
            report = null;
            if(!(report != mike)) { _fun90981_ip = 176; continue _fun90981 }
 39:
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            report = 13;
            report = golf[report];
            options = undefined;
            golf = oscar.bind(options)(report);
            oscar = golf.findIndex;
            report = mike.messages;
            tango = function(argFoo) {
                entity = argFoo;
                mike = entity.id;
                entity = _closure2_slot0;
                entity = mike === entity;
                return entity;
            };
            oscar = oscar.bind(golf)(report, tango);
            tango = -1;
            if(!(tango !== oscar)) { _fun90981_ip = 176; continue _fun90981 }
 96:
            report = mike.messages;
            tango = report.slice;
            tango = tango.bind(report)();
            mike['messages'] = tango;
            report = mike.messages;
            golf = _closure1_slot0;
            verify = _closure1_slot2;
            tango = 14;
            tango = verify[tango];
            options = golf.bind(options)(tango);
            golf = options.handleExplicitMediaScanTimeoutForMessage;
            tango = mike.messages;
            tango = tango[oscar];
            tango = golf.bind(options)(tango);
            report[oscar] = tango;
            entity = _closure1_slot15;
            entity[zulu] = mike;
 176:
            entity = undefined;
            return entity;
        }
    };
    mike['MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    kilo = tango;
    foxtrot = mike;
    mike = new kilo[options](backup, foxtrot, romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 17;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'stores/ChannelPinsStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();