// app/stores/ApplicationStreamingStore.tsx
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
            mike = _closure1_slot10;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot9;
            entity = _closure1_slot32;
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
            report = _closure1_slot10;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot31 = entity;
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
            _closure1_slot32 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot32 = entity;
    tango = function() { // Original name: reset
        entity = global;
        entity = entity.Map;
        mike = entity.prototype;
        mike = Object.create(mike, {constructor: {value: entity}});
        zulu = mike;
        entity = new zulu[entity](mike);
        entity = entity instanceof Object ? entity : mike;
        var _closure1_slot3 = entity;
        entity = {};
        var _closure1_slot4 = entity;
        entity = {};
        var _closure1_slot5 = entity;
        entity = {};
        var _closure1_slot6 = entity;
        entity = undefined;
        return entity;
    };
    entity = function(argFoo) { // Original name: closeActiveStream
        zulu = _closure1_slot3;
        mike = zulu.delete;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    var _closure1_slot33 = entity;
    entity = function() { // Original name: getAllStreams
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = new Array(0);
            romeo = _closure1_slot4;
            for(options in romeo)
 19:
            {
 28:
                golf = options;
                mike = _closure1_slot4;
                mike = mike[golf];
                report = mike;
                ForInLoopInit(obj_props_register=5, obj_register=4, iter_index_register=3, iter_size_register=2);
                if(oscar === undefined) { _fun00006_ip = 19; continue _fun00005 }
 50:
                ForInLoopNextIter(next_value_register=1, obj_props_register=5, obj_register=4, iter_index_register=3, iter_size_register=2);
                if(mike === undefined) { _fun00006_ip = 19; continue _fun00005 }
 59:
                sizing = mike;
                kilo = entity.push;
                backup = _closure1_slot4;
                backup = backup[golf];
                backup = backup[sizing];
                backup = kilo.bind(entity)(backup);
                _fun00006_ip = 50; continue _fun00005;
            }
 86:
            return entity;
        }
    };
    var _closure1_slot34 = entity;
    offset = function(argFoo) { // Original name: handleStreamUpdate
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            tango = entity.streamKey;
            oscar = entity.region;
            report = entity.viewerIds;
            offset = entity.paused;
            options = _closure1_slot3;
            golf = options.set;
            zulu = {};
            yankee = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 17;
            verify = verify[entity];
            entity = undefined;
            yankee = yankee.bind(entity)(verify);
            verify = yankee.decodeStreamKey;
            romeo = verify.bind(yankee)(tango);
            foxtrot = zulu;
            verify = copyDataProperties(foxtrot, romeo);
            verify = _closure1_slot22;
            if(offset) { _fun00008_ip = 96; continue _fun00007 }
 88:
            offset = verify.ACTIVE;
            _fun00008_ip = 102; continue _fun00007;
 96:
            offset = verify.PAUSED;
 102:
            verify = 'state';
            zulu[verify] = offset;
            zulu = golf.bind(options)(tango, zulu);
            zulu = _closure1_slot5;
            mike = {};
            mike['streamKey'] = tango;
            mike['region'] = oscar;
            mike['viewerIds'] = report;
            zulu[tango] = mike;
            return entity;
        }
    };
    entity = function(argFoo, argBar) { // Original name: canViewChannel
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tango = _closure1_slot15;
            mike = tango.getBasicChannel;
            entity = argBar;
            oscar = mike.bind(tango)(entity);
            entity = _closure1_slot27;
            mike = entity.CALL;
            entity = argFoo;
            entity = entity === mike;
            if(entity) { _fun00010_ip = 79; continue _fun00009 }
 41:
            mike = null;
            mike = mike != oscar;
            if(!mike) { _fun00010_ip = 76; continue _fun00009 }
 50:
            report = _closure1_slot18;
            tango = report.canBasicChannel;
            zulu = _closure1_slot26;
            zulu = zulu.VIEW_CHANNEL;
            mike = tango.bind(report)(zulu, oscar);
 76:
            entity = mike;
 79:
            return entity;
        }
    };
    var _closure1_slot35 = entity;
    entity = function(argFoo) { // Original name: isWatchableStream
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            oscar = _closure1_slot35;
            tango = entity.streamType;
            zulu = entity.channelId;
            report = undefined;
            zulu = oscar.bind(report)(tango, zulu);
            if(zulu) { _fun00012_ip = 121; continue _fun00011 }
 32:
            tango = _closure1_slot15;
            zulu = tango.getBasicChannel;
            entity = entity.channelId;
            options = zulu.bind(tango)(entity);
            entity = null;
            entity = entity != options;
            if(!entity) { _fun00012_ip = 119; continue _fun00011 }
 61:
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            zulu = 21;
            zulu = oscar[zulu];
            golf = tango.bind(report)(zulu);
            oscar = golf.canWatchStream;
            romeo = _closure1_slot21;
            yankee = _closure1_slot16;
            offset = _closure1_slot18;
            verify = _closure1_slot12;
            backup = golf;
            foxtrot = options;
            zulu = backup[oscar](foxtrot, romeo, yankee, offset, verify, options);
            mike = 0;
            entity = zulu[mike];
 119:
            return entity;
 121:
            entity = true;
            return entity;
        }
    };
    var _closure1_slot36 = entity;
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
    var _closure1_slot7 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot9 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot10 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot11 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot12 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot13 = mike;
    mike = 7;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot14 = mike;
    mike = 8;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot15 = mike;
    mike = 9;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot16 = mike;
    mike = 10;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot17 = mike;
    mike = 11;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot18 = mike;
    mike = 12;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot19 = mike;
    mike = 13;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot20 = mike;
    mike = 14;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot21 = mike;
    mike = 15;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    options = mike.ApplicationStreamStates;
    var _closure1_slot22 = options;
    options = mike.RTCConnectionStates;
    var _closure1_slot23 = options;
    options = mike.ApplicationStreamDeleteReasons;
    var _closure1_slot24 = options;
    options = mike.NULL_STRING_GUILD_ID;
    var _closure1_slot25 = options;
    mike = mike.BasicPermissions;
    var _closure1_slot26 = mike;
    mike = 16;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.StreamTypes;
    var _closure1_slot27 = mike;
    mike = null;
    var _closure1_slot28 = mike;
    options = {};
    var _closure1_slot29 = options;
    var _closure1_slot30 = mike;
    mike = tango.bind(entity)();
    mike = 23;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.PersistedStore;
    mike = function(argFoo) {
        tango = function() { // Original name: ApplicationStreamingStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot7;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot31;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot11;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot8;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                oscar = argFoo;
                report = this;
                tango = report.syncWith;
                entity = _closure1_slot18;
                mike = new Array(1);
                mike[0] = entity;
                entity = function() {
                    entity = true;
                    return entity;
                };
                entity = tango.bind(report)(mike, entity);
                tango = report.waitFor;
                mike = _closure1_slot13;
                entity = _closure1_slot18;
                entity = tango.bind(report)(mike, entity);
                mike = null;
                report = mike == oscar;
                entity = undefined;
                tango = undefined;
                if(report) { _fun00014_ip = 79; continue _fun00013 }
 73:
                tango = oscar.selfStreamParticipantsHidden;
 79:
                if(!(entity !== tango)) { _fun00014_ip = 121; continue _fun00013 }
 83:
                tango = global;
                report = tango.Object;
                tango = report.assign;
                zulu = _closure1_slot29;
                golf = mike == oscar;
                mike = undefined;
                if(golf) { _fun00014_ip = 115; continue _fun00013 }
 109:
                mike = oscar.selfStreamParticipantsHidden;
 115:
                mike = tango.bind(report)(zulu, mike);
 121:
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(22);
        entity[0] = report;
        report = {};
        golf = 'getState';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = {};
            mike = _closure1_slot29;
            entity['selfStreamParticipantsHidden'] = mike;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'isSelfStreamHidden';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                mike = _closure1_slot29;
                entity = argFoo;
                mike = mike[entity];
                entity = null;
                entity = entity != mike;
                if(!entity) { _fun00016_ip = 26; continue _fun00015 }
 23:
                entity = mike;
 26:
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getLastActiveStream';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                entity = 22;
                entity = tango[entity];
                tango = undefined;
                zulu = zulu.bind(tango)(entity);
                entity = _closure1_slot17;
                zulu = zulu.bind(tango)(entity);
                tango = null;
                entity = null;
                if(!zulu) { _fun00018_ip = 94; continue _fun00017 }
 41:
                zulu = global;
                report = zulu.Array;
                zulu = report.from;
                oscar = _closure1_slot3;
                mike = oscar.values;
                mike = mike.bind(oscar)();
                zulu = zulu.bind(report)(mike);
                mike = zulu.pop;
                mike = mike.bind(zulu)();
                zulu = tango != mike;
                entity = null;
                if(!zulu) { _fun00018_ip = 94; continue _fun00017 }
 91:
                entity = mike;
 94:
                return entity;
            }
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getAllActiveStreams';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                entity = 22;
                entity = tango[entity];
                tango = undefined;
                zulu = zulu.bind(tango)(entity);
                entity = _closure1_slot17;
                entity = zulu.bind(tango)(entity);
                if(entity) { _fun00020_ip = 43; continue _fun00019 }
 37:
                entity = new Array(0);
                _fun00020_ip = 74; continue _fun00019;
 43:
                zulu = global;
                tango = zulu.Array;
                zulu = tango.from;
                report = _closure1_slot3;
                mike = report.values;
                mike = mike.bind(report)();
                entity = zulu.bind(tango)(mike);
 74:
                return entity;
            }
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getAllActiveStreamsForChannel';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                entity = argFoo;
                var _closure3_slot0 = entity;
                tango = _closure1_slot1;
                report = _closure1_slot2;
                entity = 22;
                entity = report[entity];
                report = undefined;
                tango = tango.bind(report)(entity);
                entity = _closure1_slot17;
                entity = tango.bind(report)(entity);
                if(entity) { _fun00022_ip = 52; continue _fun00021 }
 46:
                entity = new Array(0);
                _fun00022_ip = 98; continue _fun00021;
 52:
                tango = global;
                report = tango.Array;
                tango = report.from;
                oscar = _closure1_slot3;
                zulu = oscar.values;
                zulu = zulu.bind(oscar)();
                tango = tango.bind(report)(zulu);
                zulu = tango.filter;
                mike = function(argFoo) {
                    entity = argFoo;
                    mike = entity.channelId;
                    entity = _closure3_slot0;
                    entity = mike === entity;
                    return entity;
                };
                entity = zulu.bind(tango)(mike);
 98:
                return entity;
            }
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'getActiveStreamForStreamKey';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                entity = 22;
                entity = tango[entity];
                tango = undefined;
                zulu = zulu.bind(tango)(entity);
                entity = _closure1_slot17;
                zulu = zulu.bind(tango)(entity);
                tango = null;
                entity = null;
                if(!zulu) { _fun00024_ip = 70; continue _fun00023 }
 41:
                report = _closure1_slot3;
                zulu = report.get;
                mike = argFoo;
                mike = zulu.bind(report)(mike);
                zulu = tango != mike;
                entity = null;
                if(!zulu) { _fun00024_ip = 70; continue _fun00023 }
 67:
                entity = mike;
 70:
                return entity;
            }
        };
        report['value'] = golf;
        entity[6] = report;
        report = {};
        golf = 'getActiveStreamForApplicationStream';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                report = argFoo;
                tango = this;
                zulu = _closure1_slot1;
                oscar = _closure1_slot2;
                entity = 22;
                entity = oscar[entity];
                oscar = undefined;
                zulu = zulu.bind(oscar)(entity);
                entity = _closure1_slot17;
                entity = zulu.bind(oscar)(entity);
                if(!entity) { _fun00026_ip = 105; continue _fun00025 }
 43:
                entity = null;
                if(!(entity != report)) { _fun00026_ip = 105; continue _fun00025 }
 49:
                zulu = _closure1_slot0;
                golf = _closure1_slot2;
                mike = 17;
                mike = golf[mike];
                zulu = zulu.bind(oscar)(mike);
                mike = zulu.encodeStreamKey;
                zulu = mike.bind(zulu)(report);
                mike = tango.getActiveStreamForStreamKey;
                mike = mike.bind(tango)(zulu);
                zulu = entity != mike;
                entity = null;
                if(!zulu) { _fun00026_ip = 103; continue _fun00025 }
 100:
                entity = mike;
 103:
                return entity;
 105:
                entity = null;
                return entity;
            }
        };
        report['value'] = golf;
        entity[7] = report;
        report = {};
        golf = 'getCurrentUserActiveStream';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                report = this;
                zulu = _closure1_slot20;
                entity = zulu.getVoiceChannelId;
                tango = entity.bind(zulu)();
                zulu = _closure1_slot15;
                entity = zulu.getChannel;
                oscar = entity.bind(zulu)(tango);
                entity = null;
                zulu = entity == oscar;
                if(zulu) { _fun00028_ip = 79; continue _fun00027 }
 43:
                tango = report.getActiveStreamForUser;
                zulu = _closure1_slot14;
                mike = zulu.getId;
                zulu = mike.bind(zulu)();
                mike = oscar.getGuildId;
                mike = mike.bind(oscar)();
                entity = tango.bind(report)(zulu, mike);
 79:
                return entity;
            }
        };
        report['value'] = golf;
        entity[8] = report;
        report = {};
        golf = 'getActiveStreamForUser';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                report = argFoo;
                tango = this;
                var _closure3_slot0 = report;
                zulu = tango.getStreamForUser;
                entity = argBar;
                zulu = zulu.bind(tango)(report, entity);
                entity = null;
                if(!(entity == zulu)) { _fun00030_ip = 72; continue _fun00029 }
 33:
                report = tango.getAllActiveStreams;
                oscar = report.bind(tango)();
                report = oscar.find;
                mike = function(argFoo) {
                    entity = argFoo;
                    mike = entity.ownerId;
                    entity = _closure3_slot0;
                    entity = mike === entity;
                    return entity;
                };
                mike = report.bind(oscar)(mike);
                report = entity != mike;
                entity = null;
                if(!report) { _fun00030_ip = 70; continue _fun00029 }
 67:
                entity = mike;
 70:
                _fun00030_ip = 85; continue _fun00029;
 72:
                mike = tango.getActiveStreamForApplicationStream;
                entity = mike.bind(tango)(zulu);
 85:
                return entity;
            }
        };
        report['value'] = golf;
        entity[9] = report;
        report = {};
        golf = 'getStreamerActiveStreamMetadata';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                oscar = this;
                mike = _closure1_slot20;
                entity = mike.getVoiceChannelId;
                tango = entity.bind(mike)();
                mike = _closure1_slot15;
                entity = mike.getChannel;
                golf = entity.bind(mike)(tango);
                entity = null;
                if(!(entity != golf)) { _fun00032_ip = 143; continue _fun00031 }
 40:
                report = oscar.getActiveStreamForUser;
                tango = _closure1_slot14;
                mike = tango.getId;
                tango = mike.bind(tango)();
                mike = golf.getGuildId;
                mike = mike.bind(golf)();
                oscar = report.bind(oscar)(tango, mike);
                tango = entity == oscar;
                mike = null;
                if(tango) { _fun00032_ip = 141; continue _fun00031 }
 85:
                tango = _closure1_slot6;
                golf = _closure1_slot0;
                report = _closure1_slot2;
                zulu = 17;
                report = report[zulu];
                zulu = undefined;
                report = golf.bind(zulu)(report);
                zulu = report.encodeStreamKey;
                zulu = zulu.bind(report)(oscar);
                tango = tango[zulu];
                report = entity != tango;
                zulu = null;
                if(!report) { _fun00032_ip = 138; continue _fun00031 }
 135:
                zulu = tango;
 138:
                mike = zulu;
 141:
                return mike;
 143:
                return entity;
            }
        };
        report['value'] = golf;
        entity[10] = report;
        report = {};
        golf = 'getStreamerActiveStreamMetadataForStream';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                mike = _closure1_slot6;
                entity = argFoo;
                mike = mike[entity];
                entity = null;
                zulu = entity != mike;
                if(!zulu) { _fun00034_ip = 26; continue _fun00033 }
 23:
                entity = mike;
 26:
                return entity;
            }
        };
        report['value'] = golf;
        entity[11] = report;
        report = {};
        golf = 'getIsActiveStreamPreviewDisabled';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                mike = _closure1_slot6;
                entity = argFoo;
                zulu = mike[entity];
                entity = null;
                tango = entity == zulu;
                mike = undefined;
                if(tango) { _fun00036_ip = 31; continue _fun00035 }
 25:
                mike = zulu.previewDisabled;
 31:
                entity = entity != mike;
                if(!entity) { _fun00036_ip = 41; continue _fun00035 }
 38:
                entity = mike;
 41:
                return entity;
            }
        };
        report['value'] = golf;
        entity[12] = report;
        report = {};
        golf = 'getAnyStreamForUser';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 22;
                mike = tango[mike];
                tango = undefined;
                zulu = zulu.bind(tango)(mike);
                mike = _closure1_slot17;
                zulu = zulu.bind(tango)(mike);
                mike = null;
                if(zulu) { _fun00038_ip = 41; continue _fun00037 }
 39:
                return mike;
 41:
                zulu = _closure1_slot4;
                entity = argFoo;
                report = zulu[entity];
                zulu = mike == report;
                entity = null;
                if(zulu) { _fun00038_ip = 111; continue _fun00037 }
 61:
                zulu = global;
                tango = zulu.Object;
                zulu = tango.values;
                report = zulu.bind(tango)(report);
                tango = report.find;
                zulu = function(argFoo) {
                    zulu = _closure1_slot36;
                    mike = undefined;
                    entity = argFoo;
                    entity = zulu.bind(mike)(entity);
                    return entity;
                };
                zulu = tango.bind(report)(zulu);
                tango = mike != zulu;
                mike = null;
                if(!tango) { _fun00038_ip = 108; continue _fun00037 }
 105:
                mike = zulu;
 108:
                entity = mike;
 111:
                return entity;
            }
        };
        report['value'] = golf;
        entity[13] = report;
        report = {};
        golf = 'getAnyDiscoverableStreamForUser';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 22;
                mike = tango[mike];
                tango = undefined;
                zulu = zulu.bind(tango)(mike);
                mike = _closure1_slot17;
                zulu = zulu.bind(tango)(mike);
                mike = null;
                if(zulu) { _fun00040_ip = 41; continue _fun00039 }
 39:
                return mike;
 41:
                zulu = _closure1_slot4;
                entity = argFoo;
                report = zulu[entity];
                zulu = mike == report;
                entity = null;
                if(zulu) { _fun00040_ip = 111; continue _fun00039 }
 61:
                zulu = global;
                tango = zulu.Object;
                zulu = tango.values;
                report = zulu.bind(tango)(report);
                tango = report.find;
                zulu = function(argFoo) {
                    _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                        mike = argFoo;
                        zulu = _closure1_slot36;
                        entity = undefined;
                        entity = zulu.bind(entity)(mike);
                        if(!entity) { _fun00042_ip = 32; continue _fun00041 }
 20:
                        zulu = mike.discoverable;
                        mike = false;
                        entity = mike !== zulu;
 32:
                        return entity;
                    }
                };
                zulu = tango.bind(report)(zulu);
                tango = mike != zulu;
                mike = null;
                if(!tango) { _fun00040_ip = 108; continue _fun00039 }
 105:
                mike = zulu;
 108:
                entity = mike;
 111:
                return entity;
            }
        };
        report['value'] = golf;
        entity[14] = report;
        report = {};
        golf = 'getStreamForUser';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                oscar = argBar;
                mike = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 22;
                entity = zulu[entity];
                report = undefined;
                mike = mike.bind(report)(entity);
                entity = _closure1_slot17;
                entity = mike.bind(report)(entity);
                mike = null;
                if(entity) { _fun00044_ip = 44; continue _fun00043 }
 42:
                return mike;
 44:
                zulu = _closure1_slot4;
                entity = argFoo;
                entity = zulu[entity];
                golf = mike == entity;
                zulu = undefined;
                if(golf) { _fun00044_ip = 76; continue _fun00043 }
 64:
                if(!(mike == oscar)) { _fun00044_ip = 72; continue _fun00043 }
 68:
                oscar = _closure1_slot25;
 72:
                zulu = entity[oscar];
 76:
                oscar = mike == zulu;
                entity = null;
                if(oscar) { _fun00044_ip = 105; continue _fun00043 }
 85:
                tango = _closure1_slot36;
                tango = tango.bind(report)(zulu);
                mike = null;
                if(!tango) { _fun00044_ip = 102; continue _fun00043 }
 99:
                mike = zulu;
 102:
                entity = mike;
 105:
                return entity;
            }
        };
        report['value'] = golf;
        entity[15] = report;
        report = {};
        golf = 'getRTCStream';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                entity = 22;
                entity = tango[entity];
                tango = undefined;
                zulu = zulu.bind(tango)(entity);
                entity = _closure1_slot17;
                zulu = zulu.bind(tango)(entity);
                tango = null;
                entity = null;
                if(!zulu) { _fun00046_ip = 64; continue _fun00045 }
 41:
                zulu = _closure1_slot5;
                mike = argFoo;
                mike = zulu[mike];
                zulu = tango != mike;
                entity = null;
                if(!zulu) { _fun00046_ip = 64; continue _fun00045 }
 61:
                entity = mike;
 64:
                return entity;
            }
        };
        report['value'] = golf;
        entity[16] = report;
        report = {};
        golf = 'getAllApplicationStreams';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 22;
                entity = zulu[entity];
                zulu = undefined;
                tango = tango.bind(zulu)(entity);
                entity = _closure1_slot17;
                entity = tango.bind(zulu)(entity);
                if(entity) { _fun00048_ip = 43; continue _fun00047 }
 37:
                entity = new Array(0);
                _fun00048_ip = 68; continue _fun00047;
 43:
                mike = _closure1_slot34;
                tango = mike.bind(zulu)();
                zulu = tango.filter;
                mike = function(argFoo) {
                    _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                        mike = argFoo;
                        entity = null;
                        entity = entity != mike;
                        if(!entity) { _fun00050_ip = 38; continue _fun00049 }
 12:
                        report = _closure1_slot35;
                        tango = mike.streamType;
                        zulu = mike.channelId;
                        mike = undefined;
                        entity = report.bind(mike)(tango, zulu);
 38:
                        return entity;
                    }
                };
                entity = zulu.bind(tango)(mike);
 68:
                return entity;
            }
        };
        report['value'] = golf;
        entity[17] = report;
        report = {};
        golf = 'getAllApplicationStreamsForChannel';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                entity = argFoo;
                var _closure3_slot0 = entity;
                report = _closure1_slot1;
                tango = _closure1_slot2;
                entity = 22;
                entity = tango[entity];
                tango = undefined;
                report = report.bind(tango)(entity);
                entity = _closure1_slot17;
                entity = report.bind(tango)(entity);
                if(entity) { _fun00052_ip = 52; continue _fun00051 }
 46:
                entity = new Array(0);
                _fun00052_ip = 75; continue _fun00051;
 52:
                zulu = _closure1_slot34;
                tango = zulu.bind(tango)();
                zulu = tango.filter;
                mike = function(argFoo) {
                    _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                        mike = argFoo;
                        entity = null;
                        entity = entity != mike;
                        if(!entity) { _fun00054_ip = 28; continue _fun00053 }
 12:
                        tango = mike.channelId;
                        zulu = _closure3_slot0;
                        entity = tango === zulu;
 28:
                        if(!entity) { _fun00054_ip = 57; continue _fun00053 }
 31:
                        report = _closure1_slot35;
                        tango = mike.streamType;
                        zulu = mike.channelId;
                        mike = undefined;
                        entity = report.bind(mike)(tango, zulu);
 57:
                        return entity;
                    }
                };
                entity = zulu.bind(tango)(mike);
 75:
                return entity;
            }
        };
        report['value'] = golf;
        entity[18] = report;
        report = {};
        golf = 'getViewerIds';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
                report = argFoo;
                mike = _closure1_slot1;
                tango = _closure1_slot2;
                entity = 22;
                entity = tango[entity];
                oscar = undefined;
                mike = mike.bind(oscar)(entity);
                entity = _closure1_slot17;
                entity = mike.bind(oscar)(entity);
                if(entity) { _fun00056_ip = 46; continue _fun00055 }
 40:
                entity = new Array(0);
                return entity;
 46:
                mike = 'string';
                entity = typeof report;
                tango = report;
                if(!(mike !== entity)) { _fun00056_ip = 91; continue _fun00055 }
 60:
                mike = _closure1_slot0;
                golf = _closure1_slot2;
                entity = 17;
                entity = golf[entity];
                mike = mike.bind(oscar)(entity);
                entity = mike.encodeStreamKey;
                tango = entity.bind(mike)(report);
 91:
                entity = null;
                report = entity != tango;
                mike = null;
                if(!report) { _fun00056_ip = 110; continue _fun00055 }
 102:
                zulu = _closure1_slot5;
                mike = zulu[tango];
 110:
                if(!(entity == mike)) { _fun00056_ip = 120; continue _fun00055 }
 114:
                entity = new Array(0);
                _fun00056_ip = 126; continue _fun00055;
 120:
                entity = mike.viewerIds;
 126:
                return entity;
            }
        };
        report['value'] = golf;
        entity[19] = report;
        report = {};
        golf = 'getCurrentAppIntent';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot30;
            return entity;
        };
        report['value'] = golf;
        entity[20] = report;
        report = {};
        golf = 'getStreamingState';
        report['key'] = golf;
        oscar = function() { // Original name: value
            _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
                mike = _closure1_slot1;
                tango = _closure1_slot2;
                entity = 22;
                entity = tango[entity];
                tango = undefined;
                mike = mike.bind(tango)(entity);
                entity = _closure1_slot17;
                entity = mike.bind(tango)(entity);
                mike = {};
                if(entity) { _fun00058_ip = 74; continue _fun00057 }
 39:
                entity = new Array(0);
                mike['activeStreams'] = entity;
                entity = {};
                mike['streamsByUserAndGuild'] = entity;
                entity = {};
                mike['rtcStreams'] = entity;
                entity = {};
                mike['streamerActiveStreamMetadatas'] = entity;
                entity = mike;
                _fun00058_ip = 141; continue _fun00057;
 74:
                tango = global;
                oscar = tango.Array;
                report = oscar.from;
                golf = _closure1_slot3;
                tango = golf.entries;
                tango = tango.bind(golf)();
                tango = report.bind(oscar)(tango);
                mike['activeStreams'] = tango;
                tango = _closure1_slot4;
                mike['streamsByUserAndGuild'] = tango;
                tango = _closure1_slot5;
                mike['rtcStreams'] = tango;
                zulu = _closure1_slot6;
                mike['streamerActiveStreamMetadatas'] = zulu;
                entity = mike;
 141:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[21] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'ApplicationStreamingStore';
    options['displayName'] = mike;
    options['persistKey'] = mike;
    mike = 24;
    mike = oscar[mike];
    backup = golf.bind(entity)(mike);
    mike = {};
    yankee = function(argFoo) { // Original name: handleOverlayInitialize
        entity = argFoo;
        entity = entity.applicationStreamState;
        zulu = entity.streamsByUserAndGuild;
        _closure1_slot4 = zulu;
        zulu = global;
        report = zulu.Map;
        oscar = entity.activeStreams;
        tango = report.prototype;
        tango = Object.create(tango, {constructor: {value: report}});
        golf = tango;
        zulu = new golf[report](oscar, report);
        zulu = zulu instanceof Object ? zulu : tango;
        _closure1_slot3 = zulu;
        zulu = entity.rtcStreams;
        _closure1_slot5 = zulu;
        entity = entity.streamerActiveStreamMetadatas;
        _closure1_slot6 = entity;
        entity = undefined;
        return entity;
    };
    mike['OVERLAY_INITIALIZE'] = yankee;
    yankee = function(argFoo) { // Original name: handleVoiceStateUpdates
        entity = argFoo;
        tango = entity.voiceStates;
        zulu = tango.reduce;
        mike = function(argFoo, argBar) {
            _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                options = argFoo;
                entity = argBar;
                oscar = entity.userId;
                tango = entity.guildId;
                mike = entity.channelId;
                golf = entity.sessionId;
                zulu = entity.selfStream;
                entity = entity.discoverable;
                if(!zulu) { _fun00060_ip = 51; continue _fun00059 }
 42:
                report = null;
                if(!(report == mike)) { _fun00060_ip = 175; continue _fun00059 }
 51:
                yankee = _closure1_slot14;
                zulu = yankee.getSessionId;
                zulu = zulu.bind(yankee)();
                offset = yankee.getId;
                offset = offset.bind(yankee)();
                if(!(oscar === offset)) { _fun00060_ip = 109; continue _fun00059 }
 82:
                if(!(golf !== zulu)) { _fun00060_ip = 109; continue _fun00059 }
 86:
                golf = _closure1_slot19;
                zulu = golf.getChannelId;
                offset = zulu.bind(golf)();
                golf = null;
                zulu = options;
                if(!(golf == offset)) { _fun00060_ip = 173; continue _fun00059 }
 109:
                yankee = null;
                offset = tango;
                if(!(yankee == offset)) { _fun00060_ip = 122; continue _fun00059 }
 118:
                offset = _closure1_slot25;
 122:
                golf = _closure1_slot4;
                romeo = golf[oscar];
                foxtrot = yankee == romeo;
                golf = undefined;
                if(foxtrot) { _fun00060_ip = 143; continue _fun00059 }
 139:
                golf = romeo[offset];
 143:
                golf = yankee != golf;
                if(!golf) { _fun00060_ip = 164; continue _fun00059 }
 150:
                verify = _closure1_slot4;
                verify = verify[oscar];
                verify = delete verify[offset];
                golf = true;
 164:
                if(golf) { _fun00060_ip = 170; continue _fun00059 }
 167:
                golf = options;
 170:
                zulu = golf;
 173:
                return zulu;
 175:
                zulu = {};
                if(!(report == tango)) { _fun00060_ip = 196; continue _fun00059 }
 181:
                golf = _closure1_slot27;
                golf = golf.CALL;
                _fun00060_ip = 209; continue _fun00059;
 196:
                options = _closure1_slot27;
                golf = options.GUILD;
 209:
                zulu['streamType'] = golf;
                zulu['ownerId'] = oscar;
                zulu['guildId'] = tango;
                zulu['channelId'] = mike;
                zulu['discoverable'] = entity;
                mike = _closure1_slot4;
                entity = zulu.ownerId;
                entity = mike[entity];
                if(!(report == entity)) { _fun00060_ip = 269; continue _fun00059 }
 253:
                oscar = _closure1_slot4;
                mike = zulu.ownerId;
                entity = {};
                oscar[mike] = entity;
 269:
                mike = _closure1_slot4;
                entity = zulu.ownerId;
                mike = mike[entity];
                entity = zulu.guildId;
                if(!(report == entity)) { _fun00060_ip = 296; continue _fun00059 }
 292:
                entity = _closure1_slot25;
 296:
                mike[entity] = zulu;
                entity = true;
                return entity;
            }
        };
        entity = false;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    mike['VOICE_STATE_UPDATES'] = yankee;
    yankee = function(argFoo) { // Original name: handleStreamWatch
        _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
            entity = argFoo;
            golf = entity.streamKey;
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            tango = tango.bind(entity)(mike);
            mike = tango.decodeStreamKey;
            mike = mike.bind(tango)(golf);
            report = _closure1_slot3;
            tango = report.delete;
            tango = tango.bind(report)(golf);
            oscar = _closure1_slot3;
            report = oscar.set;
            tango = {};
            yankee = tango;
            offset = mike;
            options = copyDataProperties(yankee, offset);
            options = _closure1_slot22;
            verify = options.CONNECTING;
            options = 'state';
            tango[options] = verify;
            tango = report.bind(oscar)(golf, tango);
            report = mike.ownerId;
            oscar = _closure1_slot14;
            tango = oscar.getId;
            tango = tango.bind(oscar)();
            if(!(report === tango)) { _fun00062_ip = 144; continue _fun00061 }
 129:
            tango = _closure1_slot29;
            zulu = mike.channelId;
            mike = false;
            tango[zulu] = mike;
 144:
            return entity;
        }
    };
    mike['STREAM_WATCH'] = yankee;
    yankee = function(argFoo) { // Original name: handleStreamStart
        _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
 0:
            entity = argFoo;
            verify = entity.streamType;
            options = entity.guildId;
            golf = entity.channelId;
            yankee = entity.pid;
            offset = entity.sourceName;
            mike = entity.sourceId;
            var _closure2_slot0 = mike;
            tango = entity.previewDisabled;
            romeo = _closure1_slot0;
            report = _closure1_slot2;
            entity = 17;
            report = report[entity];
            entity = undefined;
            foxtrot = romeo.bind(entity)(report);
            romeo = foxtrot.encodeStreamKey;
            report = {};
            report['streamType'] = verify;
            report['guildId'] = options;
            report['channelId'] = golf;
            kilo = _closure1_slot14;
            backup = kilo.getId;
            backup = backup.bind(kilo)();
            report['ownerId'] = backup;
            report = romeo.bind(foxtrot)(report);
            romeo = null;
            if(!(romeo == yankee)) { _fun00064_ip = 167; continue _fun00063 }
 125:
            foxtrot = romeo != mike;
            mike = null;
            if(!foxtrot) { _fun00064_ip = 165; continue _fun00063 }
 134:
            backup = _closure1_slot13;
            foxtrot = backup.getRunningGames;
            backup = foxtrot.bind(backup)();
            foxtrot = backup.find;
            zulu = function(argFoo) {
                mike = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 18;
                entity = zulu[entity];
                tango = undefined;
                zulu = mike.bind(tango)(entity);
                mike = _closure2_slot0;
                entity = argFoo;
                entity = entity.windowHandle;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike = foxtrot.bind(backup)(zulu);
 165:
            _fun00064_ip = 182; continue _fun00063;
 167:
            foxtrot = _closure1_slot13;
            zulu = foxtrot.getGameForPID;
            mike = zulu.bind(foxtrot)(yankee);
 182:
            zulu = romeo != mike;
            foxtrot = null;
            if(!zulu) { _fun00064_ip = 194; continue _fun00063 }
 191:
            foxtrot = mike;
 194:
            zulu = _closure1_slot6;
            mike = {};
            backup = romeo == foxtrot;
            romeo = undefined;
            if(backup) { _fun00064_ip = 214; continue _fun00063 }
 209:
            romeo = foxtrot.id;
 214:
            mike['id'] = romeo;
            mike['pid'] = yankee;
            mike['sourceName'] = offset;
            mike['previewDisabled'] = tango;
            zulu[report] = mike;
            zulu = _closure1_slot3;
            mike = zulu.delete;
            mike = mike.bind(zulu)(report);
            tango = _closure1_slot3;
            zulu = tango.set;
            mike = {};
            mike['streamType'] = verify;
            mike['guildId'] = options;
            mike['channelId'] = golf;
            options = _closure1_slot14;
            golf = options.getId;
            golf = golf.bind(options)();
            mike['ownerId'] = golf;
            oscar = _closure1_slot22;
            oscar = oscar.CONNECTING;
            mike['state'] = oscar;
            mike = zulu.bind(tango)(report, mike);
            return entity;
        }
    };
    mike['STREAM_START'] = yankee;
    yankee = function(argFoo) { // Original name: handleStreamStop
        entity = argFoo;
        zulu = entity.streamKey;
        mike = _closure1_slot6;
        entity = null;
        mike[zulu] = entity;
        entity = undefined;
        return entity;
    };
    mike['STREAM_STOP'] = yankee;
    mike['STREAM_CREATE'] = offset;
    mike['STREAM_UPDATE'] = offset;
    offset = function(argFoo) { // Original name: handleStreamTimedOut
        _fun00065: for(var _fun00066_ip = 0; ; ) switch(_fun00066_ip) {
 0:
            entity = argFoo;
            tango = entity.streamKey;
            mike = _closure1_slot3;
            entity = mike.get;
            oscar = entity.bind(mike)(tango);
            entity = null;
            if(!(entity != oscar)) { _fun00066_ip = 82; continue _fun00065 }
 32:
            zulu = _closure1_slot3;
            mike = zulu.set;
            entity = {};
            options = entity;
            golf = oscar;
            oscar = copyDataProperties(options, golf);
            report = _closure1_slot22;
            oscar = report.FAILED;
            report = 'state';
            entity[report] = oscar;
            entity = mike.bind(zulu)(tango, entity);
            entity = undefined;
            return entity;
 82:
            entity = false;
            return entity;
        }
    };
    mike['STREAM_TIMED_OUT'] = offset;
    offset = function(argFoo) { // Original name: handleStreamDelete
        _fun00067: for(var _fun00068_ip = 0; ; ) switch(_fun00068_ip) {
 0:
            entity = argFoo;
            zulu = entity.streamKey;
            oscar = entity.unavailable;
            golf = entity.reason;
            entity = undefined;
            var _closure2_slot0 = entity;
            report = _closure1_slot5;
            report = delete report[zulu];
            options = _closure1_slot3;
            report = options.get;
            options = report.bind(options)(zulu);
            report = null;
            if(!(report != options)) { _fun00068_ip = 301; continue _fun00067 }
 63:
            report = _closure1_slot22;
            report = report.ENDED;
            if(oscar) { _fun00068_ip = 216; continue _fun00067 }
 79:
            oscar = _closure1_slot24;
            oscar = oscar.UNAUTHORIZED;
            if(!(golf !== oscar)) { _fun00068_ip = 204; continue _fun00067 }
 93:
            oscar = _closure1_slot24;
            oscar = oscar.SAFETY_GUILD_RATE_LIMITED;
            if(!(golf === oscar)) { _fun00068_ip = 226; continue _fun00067 }
 107:
            verify = _closure1_slot0;
            oscar = _closure1_slot2;
            golf = 17;
            golf = oscar[golf];
            offset = verify.bind(entity)(golf);
            golf = offset.decodeStreamKey;
            golf = golf.bind(offset)(zulu);
            golf = golf.guildId;
            _closure2_slot0 = golf;
            golf = 20;
            golf = oscar[golf];
            verify = verify.bind(entity)(golf);
            golf = 19;
            golf = oscar[golf];
            oscar = oscar.paths;
            golf = verify.bind(entity)(golf, oscar);
            oscar = golf.then;
            tango = function(argFoo) {
                entity = argFoo;
                zulu = entity.default;
                mike = _closure2_slot0;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            tango = oscar.bind(golf)(tango);
            tango = _closure1_slot22;
            report = tango.ENDED;
            _fun00068_ip = 226; continue _fun00067;
 204:
            tango = _closure1_slot22;
            report = tango.FAILED;
            _fun00068_ip = 226; continue _fun00067;
 216:
            tango = _closure1_slot22;
            report = tango.RECONNECTING;
 226:
            golf = _closure1_slot3;
            oscar = golf.set;
            tango = {};
            romeo = tango;
            yankee = options;
            options = copyDataProperties(romeo, yankee);
            options = 'state';
            tango[options] = report;
            tango = oscar.bind(golf)(zulu, tango);
            tango = _closure1_slot22;
            tango = tango.ENDED;
            tango = report === tango;
            if(!tango) { _fun00068_ip = 287; continue _fun00067 }
 279:
            report = _closure1_slot28;
            tango = report !== zulu;
 287:
            if(!tango) { _fun00068_ip = 299; continue _fun00067 }
 290:
            mike = _closure1_slot33;
            mike = mike.bind(entity)(zulu);
 299:
            return entity;
 301:
            entity = false;
            return entity;
        }
    };
    mike['STREAM_DELETE'] = offset;
    offset = function(argFoo) { // Original name: handleStreamClose
        entity = argFoo;
        zulu = entity.streamKey;
        mike = _closure1_slot33;
        entity = undefined;
        mike = mike.bind(entity)(zulu);
        return entity;
    };
    mike['STREAM_CLOSE'] = offset;
    offset = function(argFoo) { // Original name: handleUpdateSelfStreamHidden
        _fun00069: for(var _fun00070_ip = 0; ; ) switch(_fun00070_ip) {
 0:
            entity = argFoo;
            tango = entity.channelId;
            zulu = entity.selfStreamHidden;
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            entity = 17;
            report = report[entity];
            entity = undefined;
            golf = oscar.bind(entity)(report);
            oscar = golf.isStreamKey;
            report = _closure1_slot28;
            report = oscar.bind(golf)(report);
            options = undefined;
            if(!report) { _fun00070_ip = 72; continue _fun00069 }
 59:
            oscar = _closure1_slot28;
            golf = null;
            report = golf != oscar;
            options = oscar;
 72:
            if(!report) { _fun00070_ip = 99; continue _fun00069 }
 75:
            golf = options.includes;
            verify = _closure1_slot14;
            oscar = verify.getId;
            oscar = oscar.bind(verify)();
            report = golf.bind(options)(oscar);
 99:
            if(!report) { _fun00070_ip = 116; continue _fun00069 }
 102:
            oscar = _closure1_slot29;
            golf = oscar[tango];
            oscar = false;
            report = oscar === golf;
 116:
            if(!report) { _fun00070_ip = 125; continue _fun00069 }
 119:
            oscar = true;
            report = oscar === zulu;
 125:
            if(!report) { _fun00070_ip = 134; continue _fun00069 }
 128:
            report = null;
            _closure1_slot28 = report;
 134:
            mike = _closure1_slot29;
            mike[tango] = zulu;
            return entity;
        }
    };
    mike['STREAM_UPDATE_SELF_HIDDEN'] = offset;
    offset = function(argFoo) { // Original name: handleStreamSetAppIntent
        entity = argFoo;
        mike = entity.intent;
        _closure1_slot30 = mike;
        entity = undefined;
        return entity;
    };
    mike['SET_STREAM_APP_INTENT'] = offset;
    offset = function(argFoo) { // Original name: handleRTCConnectionState
        _fun00071: for(var _fun00072_ip = 0; ; ) switch(_fun00072_ip) {
 0:
            entity = argFoo;
            tango = entity.streamKey;
            zulu = entity.state;
            mike = null;
            if(!(mike != tango)) { _fun00072_ip = 178; continue _fun00071 }
 23:
            oscar = _closure1_slot3;
            report = oscar.get;
            report = report.bind(oscar)(tango);
            if(!(mike != report)) { _fun00072_ip = 174; continue _fun00071 }
 47:
            oscar = report.state;
            mike = _closure1_slot22;
            mike = mike.ENDED;
            if(!(oscar !== mike)) { _fun00072_ip = 174; continue _fun00071 }
 66:
            oscar = report.state;
            mike = _closure1_slot23;
            mike = mike.DISCONNECTED;
            if(!(mike !== zulu)) { _fun00072_ip = 111; continue _fun00071 }
 85:
            mike = _closure1_slot23;
            mike = mike.RTC_CONNECTED;
            if(!(mike === zulu)) { _fun00072_ip = 121; continue _fun00071 }
 99:
            mike = _closure1_slot22;
            oscar = mike.ACTIVE;
            _fun00072_ip = 121; continue _fun00071;
 111:
            mike = _closure1_slot22;
            oscar = mike.RECONNECTING;
 121:
            mike = report.state;
            if(!(oscar !== mike)) { _fun00072_ip = 170; continue _fun00071 }
 130:
            zulu = _closure1_slot3;
            mike = zulu.set;
            entity = {};
            options = entity;
            golf = report;
            report = copyDataProperties(options, golf);
            report = 'state';
            entity[report] = oscar;
            entity = mike.bind(zulu)(tango, entity);
            entity = undefined;
            return entity;
 170:
            entity = false;
            return entity;
 174:
            entity = false;
            return entity;
 178:
            entity = false;
            return entity;
        }
    };
    mike['RTC_CONNECTION_STATE'] = offset;
    verify = function(argFoo) { // Original name: handleStreamCloseAll
        _fun00073: for(var _fun00074_ip = 0; ; ) switch(_fun00074_ip) {
 0:
            entity = argFoo;
            oscar = entity.id;
            zulu = entity.channelId;
            _closure1_slot28 = oscar;
            mike = global;
            report = mike.Array;
            tango = report.from;
            golf = _closure1_slot3;
            mike = golf.values;
            mike = mike.bind(golf)();
            report = tango.bind(report)(mike);
            tango = report.forEach;
            mike = function(argFoo) {
                _fun00075: for(var _fun00076_ip = 0; ; ) switch(_fun00076_ip) {
 0:
                    report = argFoo;
                    tango = _closure1_slot0;
                    entity = _closure1_slot2;
                    oscar = 17;
                    zulu = entity[oscar];
                    entity = undefined;
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.encodeStreamKey;
                    tango = zulu.bind(tango)(report);
                    zulu = _closure1_slot28;
                    zulu = tango !== zulu;
                    if(!zulu) { _fun00076_ip = 69; continue _fun00075 }
 50:
                    golf = report.state;
                    tango = _closure1_slot22;
                    tango = tango.ENDED;
                    zulu = golf === tango;
 69:
                    if(!zulu) { _fun00076_ip = 109; continue _fun00075 }
 72:
                    zulu = _closure1_slot33;
                    tango = _closure1_slot0;
                    mike = _closure1_slot2;
                    mike = mike[oscar];
                    tango = tango.bind(entity)(mike);
                    mike = tango.encodeStreamKey;
                    mike = mike.bind(tango)(report);
                    mike = zulu.bind(entity)(mike);
 109:
                    return entity;
                }
            };
            mike = tango.bind(report)(mike);
            mike = null;
            mike = mike != oscar;
            if(!mike) { _fun00074_ip = 110; continue _fun00073 }
 77:
            golf = _closure1_slot0;
            report = _closure1_slot2;
            tango = 17;
            report = report[tango];
            tango = undefined;
            report = golf.bind(tango)(report);
            tango = report.isStreamKey;
            mike = tango.bind(report)(oscar);
 110:
            if(!mike) { _fun00074_ip = 137; continue _fun00073 }
 113:
            report = oscar.includes;
            golf = _closure1_slot14;
            tango = golf.getId;
            tango = tango.bind(golf)();
            mike = report.bind(oscar)(tango);
 137:
            if(!mike) { _fun00074_ip = 150; continue _fun00073 }
 140:
            mike = _closure1_slot29;
            entity = false;
            mike[zulu] = entity;
 150:
            entity = undefined;
            return entity;
        }
    };
    mike['CHANNEL_RTC_SELECT_PARTICIPANT'] = verify;
    mike['CONNECTION_OPEN'] = tango;
    mike['CONNECTION_CLOSED'] = tango;
    mike['LOGOUT'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    kilo = tango;
    foxtrot = mike;
    mike = new kilo[options](backup, foxtrot, romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 25;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'stores/ApplicationStreamingStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();