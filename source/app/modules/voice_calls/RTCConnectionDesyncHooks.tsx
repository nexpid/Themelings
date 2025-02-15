// app/modules/voice_calls/RTCConnectionDesyncHooks.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
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
            verify = _closure1_slot14;
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
            golf = _closure1_slot14;
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
    var _closure1_slot13 = entity;
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
    var _closure1_slot14 = entity;
    tango = function(argFoo) { // Original name: useDesyncedChannelParticipants
        mike = argFoo;
        var _closure2_slot0 = mike;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 12;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        oscar = _closure1_slot9;
        mike = new Array(2);
        mike[0] = oscar;
        report = _closure1_slot10;
        mike[1] = report;
        entity = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tango = _closure2_slot0;
                zulu = _closure1_slot10;
                entity = zulu.getChannelId;
                zulu = entity.bind(zulu)();
                entity = null;
                if(!(tango === zulu)) { _fun00008_ip = 46; continue _fun00007 }
 30:
                zulu = _closure1_slot9;
                mike = zulu.getDesyncedParticipants;
                entity = mike.bind(zulu)();
 46:
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot15 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    verify = golf[report];
    report = argCorge;
    report = report.bind(entity)(verify);
    var _closure1_slot3 = report;
    report = 2;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 3;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 4;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 5;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 6;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 7;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 8;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot10 = report;
    report = 9;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot11 = report;
    report = 10;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot12 = report;
    report = 15;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/voice_calls/RTCConnectionDesyncHooks.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo, argBar) { // Original name: useEnsureSyncedChannelVoiceStates
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            oscar = argBar;
            mike = argFoo;
            var _closure2_slot0 = mike;
            var _closure2_slot1 = oscar;
            report = _closure1_slot0;
            options = _closure1_slot1;
            tango = 12;
            golf = options[tango];
            zulu = undefined;
            yankee = report.bind(zulu)(golf);
            offset = yankee.useStateFromStores;
            golf = _closure1_slot9;
            verify = new Array(2);
            verify[0] = golf;
            golf = _closure1_slot10;
            verify[1] = golf;
            golf = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    tango = _closure2_slot0;
                    zulu = _closure1_slot10;
                    entity = zulu.getChannelId;
                    zulu = entity.bind(zulu)();
                    entity = null;
                    if(!(tango === zulu)) { _fun00012_ip = 46; continue _fun00011 }
 30:
                    zulu = _closure1_slot9;
                    mike = zulu.getDesyncedVoiceStates;
                    entity = mike.bind(zulu)();
 46:
                    return entity;
                }
            };
            golf = offset.bind(yankee)(verify, golf);
            var _closure2_slot2 = golf;
            verify = options[tango];
            romeo = report.bind(zulu)(verify);
            yankee = romeo.useStateFromStoresArray;
            verify = _closure1_slot4;
            offset = new Array(1);
            offset[0] = verify;
            verify = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zulu = _closure2_slot0;
                    mike = null;
                    if(!(mike != zulu)) { _fun00014_ip = 50; continue _fun00013 }
 13:
                    zulu = _closure1_slot4;
                    mike = zulu.getGuildRingingUsers;
                    entity = _closure2_slot0;
                    report = mike.bind(zulu)(entity);
                    entity = new Array(0);
                    tango = 0;
                    oscar = entity;
                    mike = arraySpread(oscar, report, tango);
                    _fun00014_ip = 54; continue _fun00013;
 50:
                    entity = new Array(0);
 54:
                    return entity;
                }
            };
            verify = yankee.bind(romeo)(offset, verify);
            var _closure2_slot3 = verify;
            verify = options[tango];
            romeo = report.bind(zulu)(verify);
            yankee = romeo.useStateFromStoresArray;
            verify = _closure1_slot11;
            offset = new Array(1);
            offset[0] = verify;
            verify = function() {
                zulu = _closure2_slot3;
                mike = zulu.map;
                entity = function(argFoo) {
                    zulu = _closure1_slot11;
                    mike = zulu.getUser;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                zulu = mike.bind(zulu)(entity);
                mike = zulu.filter;
                report = _closure1_slot0;
                tango = _closure1_slot1;
                entity = 13;
                tango = tango[entity];
                entity = undefined;
                entity = report.bind(entity)(tango);
                entity = entity.isNotNullish;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            offset = yankee.bind(romeo)(offset, verify);
            var _closure2_slot4 = offset;
            tango = options[tango];
            verify = report.bind(zulu)(tango);
            options = verify.useStateFromStores;
            tango = _closure1_slot7;
            report = new Array(1);
            report[0] = tango;
            tango = function() {
                zulu = _closure1_slot7;
                mike = zulu.getBasicChannel;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            verify = options.bind(verify)(report, tango);
            var _closure2_slot5 = verify;
            options = _closure1_slot3;
            report = options.useMemo;
            tango = new Array(2);
            tango[0] = offset;
            offset = null;
            offset = offset == verify;
            if(offset) { _fun00010_ip = 245; continue _fun00009 }
 240:
            zulu = verify.guild_id;
 245:
            tango[1] = zulu;
            zulu = function() {
                zulu = _closure2_slot4;
                mike = zulu.map;
                entity = function(argFoo) {
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        mike = argFoo;
                        entity = {};
                        oscar = _closure1_slot5;
                        yankee = mike.id;
                        tango = oscar.prototype;
                        tango = Object.create(tango, {constructor: {value: oscar}});
                        romeo = tango;
                        zulu = new romeo[oscar](yankee, offset);
                        zulu = zulu instanceof Object ? zulu : tango;
                        entity['voiceState'] = zulu;
                        entity['user'] = mike;
                        zulu = _closure2_slot5;
                        verify = null;
                        oscar = verify == zulu;
                        zulu = undefined;
                        if(oscar) { _fun00016_ip = 73; continue _fun00015 }
 64:
                        oscar = _closure2_slot5;
                        zulu = oscar.guild_id;
 73:
                        oscar = verify != zulu;
                        zulu = null;
                        if(!oscar) { _fun00016_ip = 125; continue _fun00015 }
 82:
                        oscar = _closure1_slot8;
                        report = oscar.getMember;
                        options = _closure2_slot5;
                        options = verify == options;
                        golf = undefined;
                        if(options) { _fun00016_ip = 114; continue _fun00015 }
 105:
                        tango = _closure2_slot5;
                        golf = tango.guild_id;
 114:
                        tango = mike.id;
                        zulu = report.bind(oscar)(golf, tango);
 125:
                        entity['member'] = zulu;
                        zulu = mike.globalName;
                        entity['nick'] = zulu;
                        mike = mike.globalName;
                        entity['comparator'] = mike;
                        mike = false;
                        entity['_isPlaceholder'] = mike;
                        return entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            report = report.bind(options)(zulu, tango);
            var _closure2_slot6 = report;
            tango = _closure1_slot3;
            zulu = tango.useMemo;
            mike = new Array(3);
            mike[0] = golf;
            mike[1] = oscar;
            mike[2] = report;
            entity = function() {
                report = _closure2_slot2;
                tango = _closure2_slot1;
                zulu = _closure2_slot6;
                mike = function(argFoo, argBar, argBaz) { // Original name: syncChannelVoiceStates
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        tango = argFoo;
                        entity = argBar;
                        report = argBaz;
                        zulu = null;
                        if(!(zulu != tango)) { _fun00018_ip = 28; continue _fun00017 }
 17:
                        golf = tango.length;
                        oscar = 0;
                        if(!(oscar === golf)) { _fun00018_ip = 42; continue _fun00017 }
 28:
                        golf = report.length;
                        oscar = 0;
                        if(!(oscar !== golf)) { _fun00018_ip = 220; continue _fun00017 }
 42:
                        oscar = new Array(0);
                        var _closure4_slot0 = oscar;
                        golf = global;
                        golf = golf.Set;
                        options = golf.prototype;
                        options = Object.create(options, {constructor: {value: golf}});
                        sizing = options;
                        golf = new sizing[golf](kilo);
                        yankee = golf instanceof Object ? golf : options;
                        golf = _closure1_slot13;
                        offset = undefined;
                        verify = golf.bind(offset)(entity);
                        options = verify.bind(offset)();
                        golf = options.done;
                        if(golf) { _fun00018_ip = 154; continue _fun00017 }
 104:
                        golf = options.value;
                        romeo = oscar.push;
                        romeo = romeo.bind(oscar)(golf);
                        romeo = yankee.add;
                        golf = golf.user;
                        golf = golf.id;
                        golf = romeo.bind(yankee)(golf);
                        romeo = verify.bind(offset)();
                        golf = romeo.done;
                        options = romeo;
                        if(!golf) { _fun00018_ip = 104; continue _fun00017 }
 154:
                        if(!(zulu != tango)) { _fun00018_ip = 175; continue _fun00017 }
 158:
                        zulu = tango.forEach;
                        mike = function(argFoo) {
                            oscar = argFoo;
                            report = _closure4_slot0;
                            tango = report.splice;
                            golf = _closure1_slot0;
                            zulu = _closure1_slot1;
                            entity = 11;
                            zulu = zulu[entity];
                            entity = undefined;
                            options = golf.bind(entity)(zulu);
                            golf = options.sortedIndexBy;
                            zulu = _closure4_slot0;
                            mike = function(argFoo) {
                                entity = argFoo;
                                entity = entity.comparator;
                                return entity;
                            };
                            zulu = golf.bind(options)(zulu, oscar, mike);
                            mike = 0;
                            mike = tango.bind(report)(zulu, mike, oscar);
                            return entity;
                        };
                        mike = zulu.bind(tango)(mike);
 175:
                        zulu = report.length;
                        tango = 0;
                        mike = oscar;
                        if(!(zulu > tango)) { _fun00018_ip = 218; continue _fun00017 }
 189:
                        zulu = new Array(0);
                        kilo = zulu;
                        backup = oscar;
                        foxtrot = 0;
                        foxtrot = arraySpread(kilo, backup, foxtrot);
                        kilo = zulu;
                        backup = report;
                        tango = arraySpread(kilo, backup, foxtrot);
                        mike = zulu;
 218:
                        return mike;
 220:
                        return entity;
                    }
                };
                entity = undefined;
                entity = mike.bind(entity)(report, tango, zulu);
                return entity;
            };
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        }
    };
    zulu['useEnsureSyncedChannelVoiceStates'] = report;
    zulu['useDesyncedChannelParticipants'] = tango;
    tango = function(argFoo, argBar) { // Original name: useEnsureSyncedChannelParticipants
        report = argBar;
        var _closure2_slot0 = report;
        oscar = _closure1_slot15;
        tango = undefined;
        zulu = argFoo;
        oscar = oscar.bind(tango)(zulu);
        var _closure2_slot1 = oscar;
        tango = _closure1_slot3;
        zulu = tango.useMemo;
        mike = new Array(2);
        mike[0] = oscar;
        mike[1] = report;
        entity = function() {
            tango = _closure2_slot1;
            zulu = _closure2_slot0;
            mike = function(argFoo, argBar) { // Original name: syncChannelParticipants
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    report = argFoo;
                    entity = argBar;
                    mike = null;
                    if(!(mike != report)) { _fun00020_ip = 64; continue _fun00019 }
 14:
                    mike = report.length;
                    tango = 0;
                    if(!(tango !== mike)) { _fun00020_ip = 64; continue _fun00019 }
 25:
                    mike = new Array(0);
                    options = mike;
                    golf = entity;
                    oscar = 0;
                    tango = arraySpread(options, golf, oscar);
                    var _closure4_slot0 = mike;
                    tango = report.forEach;
                    zulu = function(argFoo) {
                        oscar = argFoo;
                        report = _closure4_slot0;
                        tango = report.splice;
                        golf = _closure1_slot0;
                        zulu = _closure1_slot1;
                        entity = 11;
                        zulu = zulu[entity];
                        entity = undefined;
                        options = golf.bind(entity)(zulu);
                        golf = options.sortedIndexBy;
                        zulu = _closure4_slot0;
                        mike = function(argFoo) {
                            zulu = _closure1_slot0;
                            mike = _closure1_slot1;
                            entity = 14;
                            mike = mike[entity];
                            entity = undefined;
                            zulu = zulu.bind(entity)(mike);
                            mike = zulu.sortKey;
                            entity = argFoo;
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        zulu = golf.bind(options)(zulu, oscar, mike);
                        mike = 0;
                        mike = tango.bind(report)(zulu, mike, oscar);
                        return entity;
                    };
                    zulu = tango.bind(report)(zulu);
                    return mike;
 64:
                    return entity;
                }
            };
            entity = undefined;
            entity = mike.bind(entity)(tango, zulu);
            return entity;
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useEnsureSyncedChannelParticipants'] = tango;
    mike = function(argFoo, argBar) { // Original name: useIsRTCDisconnectedUIVisible
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            offset = argFoo;
            var _closure2_slot0 = offset;
            entity = argBar;
            var _closure2_slot1 = entity;
            foxtrot = _closure1_slot0;
            backup = _closure1_slot1;
            yankee = 12;
            entity = backup[yankee];
            romeo = undefined;
            report = foxtrot.bind(romeo)(entity);
            zulu = report.useStateFromStores;
            entity = _closure1_slot6;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                mike = _closure1_slot6;
                entity = mike.getId;
                mike = entity.bind(mike)();
                entity = _closure2_slot1;
                entity = mike === entity;
                return entity;
            };
            entity = zulu.bind(report)(mike, entity);
            mike = backup[yankee];
            oscar = foxtrot.bind(romeo)(mike);
            report = oscar.useStateFromStores;
            mike = _closure1_slot10;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                mike = _closure1_slot10;
                entity = mike.getChannelId;
                entity = entity.bind(mike)();
                return entity;
            };
            report = report.bind(oscar)(zulu, mike);
            var _closure2_slot2 = report;
            golf = _closure1_slot3;
            zulu = golf.useRef;
            mike = null;
            mike = zulu.bind(golf)(mike);
            var _closure2_slot3 = mike;
            mike = golf.useState;
            output = false;
            mike = mike.bind(golf)(output);
            sizing = _closure1_slot2;
            kilo = 2;
            oscar = sizing.bind(romeo)(mike, kilo);
            zulu = 0;
            mike = oscar[zulu];
            options = 1;
            oscar = oscar[options];
            var _closure2_slot4 = oscar;
            oscar = golf.useState;
            oscar = oscar.bind(golf)(output);
            oscar = sizing.bind(romeo)(oscar, kilo);
            zulu = oscar[zulu];
            oscar = oscar[options];
            var _closure2_slot5 = oscar;
            oscar = backup[yankee];
            output = foxtrot.bind(romeo)(oscar);
            sizing = output.useStateFromStores;
            oscar = _closure1_slot10;
            kilo = new Array(2);
            kilo[0] = oscar;
            options = _closure1_slot12;
            kilo[1] = options;
            oscar = function() {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    entity = _closure2_slot1;
                    tango = null;
                    entity = tango != entity;
                    if(!entity) { _fun00024_ip = 24; continue _fun00023 }
 16:
                    zulu = _closure2_slot0;
                    entity = tango != zulu;
 24:
                    if(!entity) { _fun00024_ip = 52; continue _fun00023 }
 27:
                    report = _closure1_slot10;
                    zulu = report.getChannelId;
                    report = zulu.bind(report)();
                    zulu = _closure2_slot0;
                    entity = report === zulu;
 52:
                    if(!entity) { _fun00024_ip = 86; continue _fun00023 }
 55:
                    golf = _closure1_slot12;
                    oscar = golf.isInChannel;
                    report = _closure2_slot0;
                    zulu = _closure2_slot1;
                    zulu = oscar.bind(golf)(report, zulu);
                    entity = tango != zulu;
 86:
                    if(!entity) { _fun00024_ip = 111; continue _fun00023 }
 89:
                    tango = _closure1_slot10;
                    zulu = tango.isUserConnected;
                    mike = _closure2_slot1;
                    entity = zulu.bind(tango)(mike);
 111:
                    return entity;
                }
            };
            oscar = sizing.bind(output)(kilo, oscar);
            var _closure2_slot6 = oscar;
            yankee = backup[yankee];
            romeo = foxtrot.bind(romeo)(yankee);
            yankee = romeo.useStateFromStores;
            foxtrot = _closure1_slot10;
            verify = new Array(2);
            verify[0] = foxtrot;
            verify[1] = options;
            options = function() {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    entity = _closure2_slot1;
                    tango = null;
                    entity = tango != entity;
                    if(!entity) { _fun00026_ip = 24; continue _fun00025 }
 16:
                    zulu = _closure2_slot0;
                    entity = tango != zulu;
 24:
                    if(!entity) { _fun00026_ip = 52; continue _fun00025 }
 27:
                    report = _closure1_slot10;
                    zulu = report.getChannelId;
                    report = zulu.bind(report)();
                    zulu = _closure2_slot0;
                    entity = report === zulu;
 52:
                    if(!entity) { _fun00026_ip = 86; continue _fun00025 }
 55:
                    golf = _closure1_slot12;
                    oscar = golf.isInChannel;
                    report = _closure2_slot0;
                    zulu = _closure2_slot1;
                    zulu = oscar.bind(golf)(report, zulu);
                    entity = tango != zulu;
 86:
                    if(!entity) { _fun00026_ip = 114; continue _fun00025 }
 89:
                    tango = _closure1_slot10;
                    zulu = tango.isUserConnected;
                    mike = _closure2_slot1;
                    mike = zulu.bind(tango)(mike);
                    entity = !mike;
 114:
                    return entity;
                }
            };
            options = yankee.bind(romeo)(verify, options);
            var _closure2_slot7 = options;
            yankee = golf.useEffect;
            verify = new Array(1);
            verify[0] = oscar;
            oscar = function() {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    mike = _closure2_slot6;
                    if(!mike) { _fun00028_ip = 23; continue _fun00027 }
 10:
                    zulu = _closure2_slot5;
                    mike = undefined;
                    entity = true;
                    entity = zulu.bind(mike)(entity);
 23:
                    entity = undefined;
                    return entity;
                }
            };
            oscar = yankee.bind(golf)(oscar, verify);
            verify = golf.useEffect;
            oscar = new Array(2);
            oscar[0] = offset;
            oscar[1] = report;
            report = function() {
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    zulu = _closure2_slot2;
                    mike = _closure2_slot0;
                    if(!(zulu !== mike)) { _fun00030_ip = 28; continue _fun00029 }
 15:
                    zulu = _closure2_slot5;
                    mike = undefined;
                    entity = false;
                    entity = zulu.bind(mike)(entity);
 28:
                    entity = undefined;
                    return entity;
                }
            };
            report = verify.bind(golf)(report, oscar);
            oscar = golf.useEffect;
            report = new Array(1);
            report[0] = options;
            tango = function() {
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    zulu = _closure2_slot7;
                    if(!zulu) { _fun00032_ip = 27; continue _fun00031 }
 12:
                    zulu = _closure2_slot3;
                    tango = zulu.current;
                    zulu = null;
                    if(!(zulu != tango)) { _fun00032_ip = 72; continue _fun00031 }
 27:
                    zulu = global;
                    oscar = zulu.clearTimeout;
                    tango = _closure2_slot3;
                    zulu = tango.current;
                    report = undefined;
                    zulu = oscar.bind(report)(zulu);
                    zulu = null;
                    tango['current'] = zulu;
                    tango = _closure2_slot4;
                    zulu = false;
                    zulu = tango.bind(report)(zulu);
                    _fun00032_ip = 108; continue _fun00031;
 72:
                    zulu = _closure2_slot3;
                    mike = global;
                    oscar = mike.setTimeout;
                    report = undefined;
                    tango = function() {
                        zulu = _closure2_slot3;
                        mike = null;
                        zulu['current'] = mike;
                        zulu = _closure2_slot4;
                        entity = undefined;
                        mike = true;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    mike = 250;
                    mike = oscar.bind(report)(tango, mike);
                    zulu['current'] = mike;
 108:
                    entity = function() {
                        entity = global;
                        tango = entity.clearTimeout;
                        zulu = _closure2_slot3;
                        mike = zulu.current;
                        entity = undefined;
                        mike = tango.bind(entity)(mike);
                        mike = null;
                        zulu['current'] = mike;
                        return entity;
                    };
                    return entity;
                }
            };
            tango = oscar.bind(golf)(tango, report);
            entity = !entity;
            if(!entity) { _fun00022_ip = 393; continue _fun00021 }
 390:
            entity = zulu;
 393:
            if(!entity) { _fun00022_ip = 399; continue _fun00021 }
 396:
            entity = mike;
 399:
            return entity;
        }
    };
    zulu['useIsRTCDisconnectedUIVisible'] = mike;
    return entity;
})();