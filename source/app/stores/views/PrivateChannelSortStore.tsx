// app/stores/views/PrivateChannelSortStore.tsx
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
            entity = _closure1_slot23;
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
    var _closure1_slot22 = entity;
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
            _closure1_slot23 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo) { // Original name: makeSortedChannel
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zulu = argFoo;
            mike = arguments[1];
            options = undefined;
            if(!(mike === options)) { _fun00006_ip = 165; continue _fun00005 }
 15:
            oscar = _closure1_slot13;
            report = oscar.lastMessageId;
            entity = zulu.id;
            report = report.bind(oscar)(entity);
            golf = null;
            if(!(golf == report)) { _fun00006_ip = 50; continue _fun00005 }
 44:
            report = zulu.lastMessageId;
 50:
            if(!(golf == report)) { _fun00006_ip = 59; continue _fun00005 }
 54:
            report = zulu.id;
 59:
            oscar = zulu.isMessageRequestTimestamp;
            entity = report;
            if(!(golf != oscar)) { _fun00006_ip = 162; continue _fun00005 }
 72:
            golf = _closure1_slot1;
            verify = _closure1_slot2;
            tango = 14;
            tango = verify[tango];
            tango = golf.bind(options)(tango);
            oscar = tango.bind(options)(oscar);
            tango = oscar.valueOf;
            yankee = tango.bind(oscar)();
            oscar = 15;
            tango = verify[oscar];
            offset = golf.bind(options)(tango);
            tango = offset.fromTimestamp;
            tango = tango.bind(offset)(yankee);
            oscar = verify[oscar];
            golf = golf.bind(options)(oscar);
            oscar = golf.compare;
            golf = oscar.bind(golf)(report, tango);
            oscar = 0;
            if(!(golf > oscar)) { _fun00006_ip = 159; continue _fun00005 }
 156:
            tango = report;
 159:
            entity = tango;
 162:
            mike = entity;
 165:
            entity = {};
            tango = zulu.id;
            entity['channelId'] = tango;
            entity['lastMessageId'] = mike;
            oscar = _closure1_slot14;
            report = oscar.isMessagesFavorite;
            mike = zulu.id;
            mike = report.bind(oscar)(mike);
            entity['isFavorite'] = mike;
            oscar = _closure1_slot8;
            report = oscar.isMessageRequest;
            mike = zulu.id;
            mike = report.bind(oscar)(mike);
            if(mike) { _fun00006_ip = 252; continue _fun00005 }
 232:
            report = _closure1_slot9;
            tango = report.isSpam;
            zulu = zulu.id;
            mike = tango.bind(report)(zulu);
 252:
            entity['isRequest'] = mike;
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    offset = function() { // Original name: handleConnectionOpen
        zulu = _closure1_slot17;
        mike = zulu.clear;
        mike = mike.bind(zulu)();
        mike = global;
        zulu = mike.Object;
        mike = zulu.values;
        tango = _closure1_slot11;
        entity = tango.getMutablePrivateChannels;
        entity = entity.bind(tango)();
        zulu = mike.bind(zulu)(entity);
        mike = zulu.forEach;
        entity = function(argFoo) {
            oscar = argFoo;
            report = _closure1_slot17;
            tango = report.set;
            zulu = oscar.id;
            mike = _closure1_slot24;
            entity = undefined;
            mike = mike.bind(entity)(oscar);
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    var _closure1_slot25 = offset;
    verify = function() { // Original name: handleCacheLoaded
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            mike = _closure1_slot11;
            entity = mike.getMutablePrivateChannels;
            golf = entity.bind(mike)();
            report = golf;
            entity = undefined;
            for(mike in report)
 30:
            {
 39:
                romeo = mike;
                yankee = _closure1_slot17;
                offset = yankee.set;
                foxtrot = _closure1_slot24;
                verify = golf[romeo];
                verify = foxtrot.bind(entity)(verify);
                verify = offset.bind(yankee)(romeo, verify);
                _fun00008_ip = 30; continue _fun00007;
            }
 72:
            return entity;
        }
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
    mike = report.bind(entity)(mike);
    mike = mike.isPrivate;
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
    mike = 12;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot15 = mike;
    mike = {};
    options = 'DEFAULT';
    mike['DEFAULT'] = options;
    options = 'FAVORITE';
    mike['FAVORITE'] = options;
    var _closure1_slot16 = mike;
    mike = 13;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    romeo = mike.SecondaryIndexMap;
    mike = romeo.prototype;
    options = Object.create(mike, {constructor: {value: romeo}});
    kilo = function(argFoo) {
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            mike = argFoo;
            entity = mike.isRequest;
            mike = mike.isFavorite;
            if(entity) { _fun00010_ip = 52; continue _fun00009 }
 18:
            entity = _closure1_slot16;
            if(mike) { _fun00010_ip = 36; continue _fun00009 }
 28:
            mike = entity.DEFAULT;
            _fun00010_ip = 42; continue _fun00009;
 36:
            mike = entity.FAVORITE;
 42:
            entity = new Array(1);
            entity[0] = mike;
            _fun00010_ip = 56; continue _fun00009;
 52:
            entity = new Array(0);
 56:
            return entity;
        }
    };
    backup = function(argFoo) {
        entity = argFoo;
        entity = entity.lastMessageId;
        entity = -entity;
        return entity;
    };
    sizing = options;
    mike = new sizing[romeo](kilo, backup, foxtrot);
    mike = mike instanceof Object ? mike : options;
    var _closure1_slot17 = mike;
    mike = new Array(0);
    var _closure1_slot18 = mike;
    mike = new Array(0);
    var _closure1_slot19 = mike;
    mike = new Array(0);
    var _closure1_slot20 = mike;
    mike = function() {
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            oscar = _closure1_slot17;
            report = oscar.values;
            mike = _closure1_slot16;
            tango = mike.FAVORITE;
            tango = report.bind(oscar)(tango);
            oscar = _closure1_slot17;
            report = oscar.values;
            mike = mike.DEFAULT;
            mike = report.bind(oscar)(mike);
            report = _closure1_slot18;
            report = report === tango;
            if(!report) { _fun00012_ip = 68; continue _fun00011 }
 60:
            oscar = _closure1_slot19;
            report = oscar === mike;
 68:
            if(report) { _fun00012_ip = 117; continue _fun00011 }
 71:
            report = new Array(0);
            _closure1_slot20 = report;
            oscar = tango.forEach;
            report = function(argFoo) {
                entity = argFoo;
                zulu = entity.channelId;
                mike = _closure1_slot20;
                entity = mike.push;
                entity = entity.bind(mike)(zulu);
                return entity;
            };
            report = oscar.bind(tango)(report);
            _closure1_slot18 = tango;
            tango = mike.forEach;
            zulu = function(argFoo) {
                entity = argFoo;
                zulu = entity.channelId;
                mike = _closure1_slot20;
                entity = mike.push;
                entity = entity.bind(mike)(zulu);
                return entity;
            };
            zulu = tango.bind(mike)(zulu);
            _closure1_slot19 = mike;
 117:
            entity = _closure1_slot20;
            return entity;
        }
    };
    var _closure1_slot21 = mike;
    mike = 17;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: PrivateChannelSortStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot3;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot22;
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
            tango = this;
            options = tango.waitFor;
            foxtrot = _closure1_slot11;
            romeo = _closure1_slot12;
            yankee = _closure1_slot15;
            offset = _closure1_slot8;
            verify = _closure1_slot14;
            backup = tango;
            mike = backup[options](foxtrot, romeo, yankee, offset, verify, options);
            zulu = tango.syncWith;
            report = _closure1_slot14;
            mike = new Array(2);
            mike[0] = report;
            report = _closure1_slot8;
            mike[1] = report;
            entity = _closure1_slot25;
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golf = 'getPrivateChannelIds';
        report['key'] = golf;
        golf = function() { // Original name: value
            mike = _closure1_slot21;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getSortedChannels';
        report['key'] = golf;
        golf = function() { // Original name: value
            report = _closure1_slot17;
            tango = report.values;
            mike = _closure1_slot16;
            entity = mike.FAVORITE;
            tango = tango.bind(report)(entity);
            entity = new Array(2);
            entity[0] = tango;
            tango = _closure1_slot17;
            zulu = tango.values;
            mike = mike.DEFAULT;
            mike = zulu.bind(tango)(mike);
            entity[1] = mike;
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'serializeForOverlay';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = {};
            var _closure3_slot0 = entity;
            tango = _closure1_slot17;
            zulu = tango.values;
            tango = zulu.bind(tango)();
            zulu = tango.forEach;
            mike = function(argFoo) {
                entity = argFoo;
                zulu = entity.channelId;
                mike = entity.lastMessageId;
                entity = _closure3_slot0;
                entity[zulu] = mike;
                entity = undefined;
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        report['value'] = oscar;
        entity[3] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'PrivateChannelSortStore';
    options['displayName'] = mike;
    mike = 18;
    mike = oscar[mike];
    kilo = golf.bind(entity)(mike);
    mike = {};
    mike['CONNECTION_OPEN'] = offset;
    mike['CONNECTION_OPEN_SUPPLEMENTAL'] = offset;
    mike['OVERLAY_INITIALIZE'] = offset;
    mike['CACHE_LOADED'] = verify;
    mike['CACHE_LOADED_LAZY'] = verify;
    verify = function(argFoo) { // Original name: handleChannelUpdates
        entity = argFoo;
        zulu = entity.channels;
        mike = zulu.forEach;
        entity = function(argFoo) {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                oscar = argFoo;
                tango = _closure1_slot10;
                zulu = oscar.type;
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                if(zulu) { _fun00014_ip = 44; continue _fun00013 }
 25:
                golf = _closure1_slot17;
                report = golf.has;
                tango = oscar.id;
                zulu = report.bind(golf)(tango);
 44:
                if(!zulu) { _fun00014_ip = 76; continue _fun00013 }
 47:
                report = _closure1_slot17;
                tango = report.set;
                zulu = oscar.id;
                mike = _closure1_slot24;
                mike = mike.bind(entity)(oscar);
                mike = tango.bind(report)(zulu, mike);
 76:
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    mike['CHANNEL_UPDATES'] = verify;
    verify = function(argFoo) { // Original name: handleChannelCreate
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            options = entity.channel;
            mike = _closure1_slot10;
            entity = options.type;
            golf = undefined;
            entity = mike.bind(golf)(entity);
            mike = !entity;
            entity = !mike;
            if(mike) { _fun00016_ip = 108; continue _fun00015 }
 36:
            tango = options.id;
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 16;
            mike = oscar[mike];
            mike = report.bind(golf)(mike);
            mike = mike.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
            mike = tango !== mike;
            if(!mike) { _fun00016_ip = 105; continue _fun00015 }
 74:
            oscar = _closure1_slot17;
            report = oscar.set;
            tango = options.id;
            zulu = _closure1_slot24;
            zulu = zulu.bind(golf)(options);
            zulu = report.bind(oscar)(tango, zulu);
            mike = undefined;
 105:
            entity = mike;
 108:
            return entity;
        }
    };
    mike['CHANNEL_CREATE'] = verify;
    verify = function(argFoo) { // Original name: handleChannelDelete
        entity = argFoo;
        entity = entity.channel;
        zulu = _closure1_slot17;
        mike = zulu.delete;
        entity = entity.id;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['CHANNEL_DELETE'] = verify;
    verify = function(argFoo) { // Original name: handleMessageCreate
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            report = entity.channelId;
            mike = entity.message;
            zulu = _closure1_slot17;
            entity = zulu.has;
            entity = entity.bind(zulu)(report);
            if(entity) { _fun00018_ip = 37; continue _fun00017 }
 33:
            entity = false;
            return entity;
 37:
            zulu = _closure1_slot11;
            entity = zulu.getChannel;
            options = entity.bind(zulu)(report);
            entity = null;
            entity = entity != options;
            if(!entity) { _fun00018_ip = 92; continue _fun00017 }
 60:
            tango = _closure1_slot17;
            zulu = tango.set;
            golf = _closure1_slot24;
            oscar = mike.id;
            mike = undefined;
            mike = golf.bind(mike)(options, oscar);
            entity = zulu.bind(tango)(report, mike);
 92:
            return entity;
        }
    };
    mike['MESSAGE_CREATE'] = verify;
    verify = function(argFoo) { // Original name: handleGuildCreate
        entity = argFoo;
        entity = entity.guild;
        zulu = entity.id;
        mike = _closure1_slot17;
        entity = mike.delete;
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    mike['GUILD_CREATE'] = verify;
    tango = function() { // Original name: handleLogout
        mike = _closure1_slot17;
        entity = mike.clear;
        entity = entity.bind(mike)();
        entity = undefined;
        return entity;
    };
    mike['LOGOUT'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    sizing = tango;
    backup = mike;
    mike = new sizing[options](kilo, backup, foxtrot);
    mike = mike instanceof Object ? mike : tango;
    tango = 19;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'stores/views/PrivateChannelSortStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();