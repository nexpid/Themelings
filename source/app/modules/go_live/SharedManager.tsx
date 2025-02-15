// app/modules/go_live/SharedManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    tango = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tango;
    var _closure1_slot2 = oscar;
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
            if(mike) { _fun00002_ip = 345; continue _fun00001 }
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
            verify = _closure1_slot16;
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
            golf = _closure1_slot16;
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
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
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
    var _closure1_slot16 = entity;
    entity = function(argFoo, argBar) { // Original name: maybeAutowatchStream
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tango = argFoo;
            oscar = argBar;
            zulu = _closure1_slot7;
            entity = zulu.getVoiceChannelId;
            entity = entity.bind(zulu)();
            if(!(entity === tango)) { _fun00008_ip = 251; continue _fun00007 }
 30:
            zulu = _closure1_slot5;
            entity = zulu.getChannel;
            golf = entity.bind(zulu)(tango);
            entity = null;
            if(!(entity != golf)) { _fun00008_ip = 247; continue _fun00007 }
 53:
            zulu = golf.isDM;
            zulu = zulu.bind(golf)();
            if(zulu) { _fun00008_ip = 83; continue _fun00007 }
 66:
            zulu = golf.isGuildStageVoice;
            zulu = zulu.bind(golf)();
            if(zulu) { _fun00008_ip = 83; continue _fun00007 }
 79:
            zulu = false;
            return zulu;
 83:
            report = _closure1_slot3;
            tango = report.getActiveStreamForUser;
            zulu = golf.getGuildId;
            zulu = zulu.bind(golf)();
            zulu = tango.bind(report)(oscar, zulu);
            if(!(entity == zulu)) { _fun00008_ip = 243; continue _fun00007 }
 116:
            report = _closure1_slot3;
            tango = report.getStreamForUser;
            zulu = golf.getGuildId;
            zulu = zulu.bind(golf)();
            oscar = tango.bind(report)(oscar, zulu);
            if(!(entity != oscar)) { _fun00008_ip = 239; continue _fun00007 }
 146:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 9;
            entity = tango[entity];
            tango = undefined;
            zulu = zulu.bind(tango)(entity);
            entity = zulu.encodeStreamKey;
            zulu = entity.bind(zulu)(oscar);
            entity = _closure1_slot14;
            entity = zulu !== entity;
            if(!entity) { _fun00008_ip = 237; continue _fun00007 }
 190:
            _closure1_slot14 = zulu;
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            mike = 10;
            mike = report[mike];
            report = zulu.bind(tango)(mike);
            tango = report.watchStream;
            zulu = {};
            mike = true;
            zulu['noFocus'] = mike;
            zulu = tango.bind(report)(oscar, zulu);
            entity = true;
 237:
            return entity;
 239:
            entity = false;
            return entity;
 243:
            entity = false;
            return entity;
 247:
            entity = false;
            return entity;
 251:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo, argBar) { // Original name: updateRegion
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tango = argBar;
            entity = null;
            if(!(entity == tango)) { _fun00010_ip = 26; continue _fun00009 }
 9:
            zulu = _closure1_slot6;
            mike = zulu.getPreferredRegion;
            tango = mike.bind(zulu)();
 26:
            entity = entity != tango;
            if(!entity) { _fun00010_ip = 84; continue _fun00009 }
 33:
            report = _closure1_slot6;
            zulu = report.getRegion;
            golf = _closure1_slot8;
            oscar = golf.getHostname;
            options = _closure1_slot8;
            mike = options.getActiveStreamKey;
            mike = mike.bind(options)();
            mike = oscar.bind(golf)(mike);
            mike = zulu.bind(report)(mike);
            entity = tango !== mike;
 84:
            if(!entity) { _fun00010_ip = 127; continue _fun00009 }
 87:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 10;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.changeStreamRegion;
            entity = argFoo;
            entity = mike.bind(zulu)(entity, tango);
 127:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = tango.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot7 = mike;
    verify = 5;
    mike = oscar[verify];
    mike = tango.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.ApplicationStreamStates;
    var _closure1_slot9 = mike;
    mike = 7;
    options = oscar[mike];
    options = report.bind(entity)(options);
    options = options.Timeout;
    offset = options.prototype;
    offset = Object.create(offset, {constructor: {value: options}});
    backup = offset;
    options = new backup[options](foxtrot);
    options = options instanceof Object ? options : offset;
    var _closure1_slot10 = options;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.Timeout;
    options = mike.prototype;
    options = Object.create(options, {constructor: {value: mike}});
    backup = options;
    mike = new backup[mike](foxtrot);
    mike = mike instanceof Object ? mike : options;
    var _closure1_slot11 = mike;
    mike = 8;
    options = oscar[mike];
    options = tango.bind(entity)(options);
    options = options.Millis;
    options = options.SECOND;
    options = verify * options;
    var _closure1_slot12 = options;
    mike = oscar[mike];
    mike = tango.bind(entity)(mike);
    mike = mike.Millis;
    mike = mike.SECOND;
    tango = 12;
    mike = tango * mike;
    var _closure1_slot13 = mike;
    mike = null;
    var _closure1_slot14 = mike;
    mike = {};
    golf = function() { // Original name: init
        entity = function(argFoo, argBar) { // Original name: maybeStartConnectTimeout
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                tango = argFoo;
                var _closure3_slot0 = tango;
                zulu = _closure1_slot8;
                mike = zulu.getAllActiveStreamKeys;
                zulu = mike.bind(zulu)();
                mike = zulu.includes;
                mike = mike.bind(zulu)(tango);
                if(mike) { _fun00012_ip = 77; continue _fun00011 }
 39:
                tango = _closure1_slot11;
                zulu = tango.start;
                mike = argBar;
                if(mike) { _fun00012_ip = 60; continue _fun00011 }
 54:
                mike = _closure1_slot12;
                _fun00012_ip = 64; continue _fun00011;
 60:
                mike = _closure1_slot13;
 64:
                entity = function() {
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 11;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.dispatch;
                    mike = {};
                    report = 'STREAM_TIMED_OUT';
                    mike['type'] = report;
                    report = _closure3_slot0;
                    mike['streamKey'] = report;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                entity = zulu.bind(tango)(mike, entity);
 77:
                entity = undefined;
                return entity;
            }
        };
        var _closure2_slot0 = entity;
        tango = _closure1_slot1;
        report = _closure1_slot2;
        zulu = 11;
        oscar = report[zulu];
        entity = undefined;
        verify = tango.bind(entity)(oscar);
        options = verify.subscribe;
        golf = 'STREAM_WATCH';
        oscar = function(argFoo) {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                entity = argFoo;
                tango = entity.streamKey;
                report = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 9;
                zulu = zulu[entity];
                entity = undefined;
                report = report.bind(entity)(zulu);
                zulu = report.decodeStreamKey;
                zulu = zulu.bind(report)(tango);
                report = zulu.channelId;
                zulu = _closure1_slot5;
                mike = zulu.getChannel;
                oscar = mike.bind(zulu)(report);
                zulu = _closure2_slot0;
                mike = null;
                report = mike == oscar;
                mike = undefined;
                if(report) { _fun00014_ip = 92; continue _fun00013 }
 82:
                report = oscar.isGuildStageVoice;
                mike = report.bind(oscar)();
 92:
                mike = zulu.bind(entity)(tango, mike);
                return entity;
            }
        };
        oscar = options.bind(verify)(golf, oscar);
        oscar = report[zulu];
        verify = tango.bind(entity)(oscar);
        options = verify.subscribe;
        golf = 'STREAM_START';
        oscar = function(argFoo) {
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                entity = argFoo;
                offset = entity.streamType;
                verify = entity.guildId;
                options = entity.channelId;
                mike = _closure1_slot5;
                entity = mike.getChannel;
                oscar = entity.bind(mike)(options);
                tango = _closure2_slot0;
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 9;
                mike = mike[entity];
                entity = undefined;
                report = zulu.bind(entity)(mike);
                zulu = report.encodeStreamKey;
                mike = {};
                mike['streamType'] = offset;
                mike['guildId'] = verify;
                mike['channelId'] = options;
                options = _closure1_slot4;
                golf = options.getId;
                golf = golf.bind(options)();
                mike['ownerId'] = golf;
                zulu = zulu.bind(report)(mike);
                mike = null;
                report = mike == oscar;
                mike = undefined;
                if(report) { _fun00016_ip = 131; continue _fun00015 }
 121:
                report = oscar.isGuildStageVoice;
                mike = report.bind(oscar)();
 131:
                mike = tango.bind(entity)(zulu, mike);
                return entity;
            }
        };
        oscar = options.bind(verify)(golf, oscar);
        oscar = report[zulu];
        verify = tango.bind(entity)(oscar);
        options = verify.subscribe;
        golf = 'STREAM_CREATE';
        oscar = function() {
            mike = _closure1_slot11;
            entity = mike.stop;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        oscar = options.bind(verify)(golf, oscar);
        oscar = report[zulu];
        verify = tango.bind(entity)(oscar);
        options = verify.subscribe;
        golf = 'STREAM_UPDATE';
        oscar = function() {
            mike = _closure1_slot11;
            entity = mike.stop;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        oscar = options.bind(verify)(golf, oscar);
        oscar = report[zulu];
        verify = tango.bind(entity)(oscar);
        options = verify.subscribe;
        golf = 'STREAM_DELETE';
        oscar = function() {
            mike = _closure1_slot11;
            entity = mike.stop;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        oscar = options.bind(verify)(golf, oscar);
        oscar = report[zulu];
        verify = tango.bind(entity)(oscar);
        options = verify.subscribe;
        golf = 'STREAM_CLOSE';
        oscar = function() {
            zulu = _closure1_slot10;
            mike = zulu.stop;
            mike = mike.bind(zulu)();
            mike = _closure1_slot11;
            entity = mike.stop;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        oscar = options.bind(verify)(golf, oscar);
        oscar = report[zulu];
        verify = tango.bind(entity)(oscar);
        options = verify.subscribe;
        golf = 'VOICE_CHANNEL_SELECT';
        oscar = function(argFoo) {
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                entity = argFoo;
                tango = entity.channelId;
                zulu = null;
                if(!(zulu != tango)) { _fun00018_ip = 83; continue _fun00017 }
 14:
                _closure1_slot14 = zulu;
                report = _closure1_slot3;
                entity = report.getAllApplicationStreamsForChannel;
                oscar = entity.bind(report)(tango);
                report = oscar.filter;
                entity = function(argFoo) {
                    entity = argFoo;
                    mike = entity.ownerId;
                    zulu = _closure1_slot4;
                    entity = zulu.getId;
                    entity = entity.bind(zulu)();
                    entity = mike !== entity;
                    return entity;
                };
                report = report.bind(oscar)(entity);
                entity = 0;
                entity = report[entity];
                if(!(zulu != entity)) { _fun00018_ip = 83; continue _fun00017 }
 65:
                zulu = _closure1_slot17;
                mike = entity.ownerId;
                entity = undefined;
                entity = zulu.bind(entity)(tango, mike);
 83:
                entity = undefined;
                return entity;
            }
        };
        oscar = options.bind(verify)(golf, oscar);
        oscar = report[zulu];
        verify = tango.bind(entity)(oscar);
        options = verify.subscribe;
        golf = 'VOICE_STATE_UPDATES';
        oscar = function(argFoo) {
            entity = argFoo;
            zulu = entity.voiceStates;
            mike = zulu.forEach;
            entity = function(argFoo) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    entity = argFoo;
                    golf = entity.userId;
                    offset = entity.channelId;
                    oscar = entity.guildId;
                    report = entity.selfStream;
                    entity = undefined;
                    var _closure4_slot0 = entity;
                    tango = _closure1_slot4;
                    zulu = tango.getId;
                    zulu = zulu.bind(tango)();
                    if(!(golf !== zulu)) { _fun00020_ip = 266; continue _fun00019 }
 56:
                    zulu = null;
                    if(!(zulu != offset)) { _fun00020_ip = 266; continue _fun00019 }
 65:
                    if(!report) { _fun00020_ip = 84; continue _fun00019 }
 68:
                    tango = _closure1_slot17;
                    tango = tango.bind(entity)(offset, golf);
                    if(tango) { _fun00020_ip = 270; continue _fun00019 }
 84:
                    verify = _closure1_slot3;
                    tango = verify.getActiveStreamForUser;
                    tango = tango.bind(verify)(golf, oscar);
                    _closure4_slot0 = tango;
                    if(!(zulu != tango)) { _fun00020_ip = 266; continue _fun00019 }
 111:
                    verify = tango.channelId;
                    if(!(verify === offset)) { _fun00020_ip = 266; continue _fun00019 }
 123:
                    verify = report;
                    if(verify) { _fun00020_ip = 148; continue _fun00019 }
 129:
                    yankee = tango.state;
                    offset = _closure1_slot9;
                    offset = offset.ENDED;
                    verify = yankee === offset;
 148:
                    if(verify) { _fun00020_ip = 179; continue _fun00019 }
 151:
                    yankee = _closure1_slot10;
                    offset = yankee.start;
                    verify = 180000;
                    options = function() {
                        report = _closure1_slot0;
                        oscar = _closure1_slot2;
                        entity = 10;
                        entity = oscar[entity];
                        mike = undefined;
                        tango = report.bind(mike)(entity);
                        zulu = tango.closeStream;
                        entity = 9;
                        entity = oscar[entity];
                        report = report.bind(mike)(entity);
                        mike = report.encodeStreamKey;
                        entity = _closure4_slot0;
                        mike = mike.bind(report)(entity);
                        entity = false;
                        entity = zulu.bind(tango)(mike, entity);
                        return entity;
                    };
                    options = offset.bind(yankee)(verify, options);
 179:
                    if(!report) { _fun00020_ip = 266; continue _fun00019 }
 182:
                    report = tango.state;
                    tango = _closure1_slot9;
                    tango = tango.ENDED;
                    if(!(report === tango)) { _fun00020_ip = 266; continue _fun00019 }
 201:
                    report = _closure1_slot10;
                    tango = report.stop;
                    tango = tango.bind(report)();
                    report = _closure1_slot3;
                    tango = report.getStreamForUser;
                    tango = tango.bind(report)(golf, oscar);
                    if(!(zulu != tango)) { _fun00020_ip = 268; continue _fun00019 }
 235:
                    zulu = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 10;
                    mike = report[mike];
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.watchStream;
                    mike = mike.bind(zulu)(tango);
 266:
                    return entity;
 268:
                    return entity;
 270:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        oscar = options.bind(verify)(golf, oscar);
        oscar = report[zulu];
        verify = tango.bind(entity)(oscar);
        options = verify.subscribe;
        golf = 'CALL_UPDATE';
        oscar = function(argFoo) {
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                entity = argFoo;
                report = entity.channelId;
                tango = entity.region;
                zulu = _closure1_slot3;
                entity = zulu.getCurrentUserActiveStream;
                oscar = entity.bind(zulu)();
                entity = null;
                golf = entity == oscar;
                entity = undefined;
                zulu = undefined;
                if(golf) { _fun00022_ip = 49; continue _fun00021 }
 44:
                zulu = oscar.channelId;
 49:
                if(!(zulu === report)) { _fun00022_ip = 94; continue _fun00021 }
 53:
                zulu = _closure1_slot18;
                report = _closure1_slot0;
                golf = _closure1_slot2;
                mike = 9;
                mike = golf[mike];
                report = report.bind(entity)(mike);
                mike = report.encodeStreamKey;
                mike = mike.bind(report)(oscar);
                mike = zulu.bind(entity)(mike, tango);
 94:
                return entity;
            }
        };
        oscar = options.bind(verify)(golf, oscar);
        zulu = report[zulu];
        report = tango.bind(entity)(zulu);
        tango = report.subscribe;
        zulu = 'CHANNEL_UPDATES';
        mike = function(argFoo) {
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                entity = argFoo;
                mike = entity.channels;
                zulu = _closure1_slot3;
                entity = zulu.getCurrentUserActiveStream;
                oscar = entity.bind(zulu)();
                entity = null;
                if(!(entity != oscar)) { _fun00024_ip = 136; continue _fun00023 }
 32:
                entity = _closure1_slot15;
                report = undefined;
                tango = entity.bind(report)(mike);
                mike = tango.bind(report)();
                entity = mike.done;
                zulu = 9;
                if(entity) { _fun00024_ip = 136; continue _fun00023 }
 58:
                entity = mike.value;
                verify = oscar.channelId;
                options = entity.id;
                if(!(verify === options)) { _fun00024_ip = 121; continue _fun00023 }
 77:
                verify = _closure1_slot18;
                offset = _closure1_slot0;
                options = _closure1_slot2;
                options = options[zulu];
                offset = offset.bind(report)(options);
                options = offset.encodeStreamKey;
                options = options.bind(offset)(oscar);
                entity = entity.rtcRegion;
                entity = verify.bind(report)(options, entity);
 121:
                options = tango.bind(report)();
                entity = options.done;
                mike = options;
                if(!entity) { _fun00024_ip = 58; continue _fun00023 }
 136:
                entity = undefined;
                return entity;
            }
        };
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    mike['init'] = golf;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/go_live/SharedManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();