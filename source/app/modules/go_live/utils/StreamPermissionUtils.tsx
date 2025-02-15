// app/modules/go_live/utils/StreamPermissionUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    options = argBar;
    golf = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = verify;
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
            verify = _closure1_slot12;
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
            golf = _closure1_slot12;
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
    var _closure1_slot11 = entity;
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
    var _closure1_slot12 = entity;
    oscar = function(argFoo, argBar, argBaz) { // Original name: canStreamInChannel
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            tango = argBar;
            options = argBaz;
            mike = arguments[3];
            golf = undefined;
            if(!(mike === golf)) { _fun00008_ip = 20; continue _fun00007 }
 18:
            mike = true;
 20:
            entity = report.isPrivate;
            entity = entity.bind(report)();
            if(entity) { _fun00008_ip = 218; continue _fun00007 }
 36:
            zulu = tango.getGuild;
            entity = report.getGuildId;
            entity = entity.bind(report)();
            oscar = zulu.bind(tango)(entity);
            tango = null;
            zulu = tango == oscar;
            entity = undefined;
            if(zulu) { _fun00008_ip = 73; continue _fun00007 }
 67:
            entity = oscar.maxStageVideoChannelUsers;
 73:
            offset = tango != entity;
            verify = 0;
            zulu = 0;
            if(!offset) { _fun00008_ip = 87; continue _fun00007 }
 84:
            zulu = entity;
 87:
            entity = report.isGuildStageVoice;
            entity = entity.bind(report)();
            if(!entity) { _fun00008_ip = 104; continue _fun00007 }
 100:
            entity = zulu <= verify;
 104:
            entity = !entity;
            if(!entity) { _fun00008_ip = 216; continue _fun00007 }
 110:
            if(!mike) { _fun00008_ip = 145; continue _fun00007 }
 113:
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            zulu = 7;
            zulu = offset[zulu];
            zulu = verify.bind(golf)(zulu);
            zulu = zulu.bind(golf)(report, options);
            mike = !zulu;
 145:
            mike = !mike;
            if(!mike) { _fun00008_ip = 213; continue _fun00007 }
 151:
            golf = options.can;
            zulu = _closure1_slot9;
            zulu = zulu.STREAM;
            zulu = golf.bind(options)(zulu, report);
            golf = !zulu;
            zulu = !golf;
            if(golf) { _fun00008_ip = 210; continue _fun00007 }
 185:
            tango = tango != oscar;
            if(!tango) { _fun00008_ip = 207; continue _fun00007 }
 192:
            oscar = oscar.afkChannelId;
            report = report.id;
            tango = oscar !== report;
 207:
            zulu = tango;
 210:
            mike = zulu;
 213:
            entity = mike;
 216:
            return entity;
 218:
            entity = true;
            return entity;
        }
    };
    var _closure1_slot13 = oscar;
    tango = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: canWatchStream
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            oscar = argFoo;
            offset = argBar;
            verify = argGrault;
            golf = null;
            if(!(golf != oscar)) { _fun00010_ip = 240; continue _fun00009 }
 18:
            mike = offset.isInChannel;
            entity = oscar.id;
            entity = mike.bind(offset)(entity);
            mike = _closure1_slot4;
            report = oscar instanceof mike;
            if(!report) { _fun00010_ip = 86; continue _fun00009 }
 48:
            options = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 9;
            tango = tango[mike];
            mike = undefined;
            options = options.bind(mike)(tango);
            tango = options.isChannelFull;
            mike = argBaz;
            report = tango.bind(options)(oscar, offset, mike);
 86:
            tango = _closure1_slot1;
            options = _closure1_slot2;
            mike = 7;
            mike = options[mike];
            options = undefined;
            tango = tango.bind(options)(mike);
            mike = argCorge;
            tango = tango.bind(options)(oscar, mike);
            mike = verify.getAwaitingRemoteSessionInfo;
            mike = mike.bind(verify)();
            oscar = golf != mike;
            if(oscar) { _fun00010_ip = 148; continue _fun00009 }
 134:
            mike = verify.getRemoteSessionId;
            mike = mike.bind(verify)();
            oscar = golf != mike;
 148:
            if(oscar) { _fun00010_ip = 195; continue _fun00009 }
 151:
            if(tango) { _fun00010_ip = 169; continue _fun00009 }
 154:
            if(entity) { _fun00010_ip = 169; continue _fun00009 }
 157:
            mike = _closure1_slot10;
            mike = mike.NO_PERMISSION;
            _fun00010_ip = 205; continue _fun00009;
 169:
            golf = report;
            if(!golf) { _fun00010_ip = 178; continue _fun00009 }
 175:
            golf = !entity;
 178:
            mike = undefined;
            if(!golf) { _fun00010_ip = 205; continue _fun00009 }
 183:
            golf = _closure1_slot10;
            mike = golf.CHANNEL_FULL;
            _fun00010_ip = 205; continue _fun00009;
 195:
            zulu = _closure1_slot10;
            mike = zulu.REMOTE_MODE;
 205:
            zulu = !oscar;
            if(oscar) { _fun00010_ip = 226; continue _fun00009 }
 211:
            if(entity) { _fun00010_ip = 223; continue _fun00009 }
 214:
            if(!tango) { _fun00010_ip = 220; continue _fun00009 }
 217:
            tango = !report;
 220:
            entity = tango;
 223:
            zulu = entity;
 226:
            entity = new Array(2);
            entity[0] = zulu;
            entity[1] = mike;
            return entity;
 240:
            entity = new Array(2);
            mike = false;
            entity[0] = mike;
            mike = _closure1_slot10;
            mike = mike.NO_PERMISSION;
            entity[1] = mike;
            return entity;
        }
    };
    var _closure1_slot14 = tango;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, report);
    romeo = 0;
    report = verify[romeo];
    entity = undefined;
    report = golf.bind(entity)(report);
    var _closure1_slot3 = report;
    yankee = 1;
    report = verify[yankee];
    report = options.bind(entity)(report);
    report = report.ChannelRecordBase;
    var _closure1_slot4 = report;
    offset = 2;
    report = verify[offset];
    report = options.bind(entity)(report);
    report = report.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot5 = report;
    report = 3;
    report = verify[report];
    report = golf.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = verify[report];
    report = golf.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 5;
    report = verify[report];
    report = golf.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 6;
    report = verify[report];
    report = options.bind(entity)(report);
    report = report.Permissions;
    var _closure1_slot9 = report;
    report = {};
    report['REMOTE_MODE'] = romeo;
    golf = 'REMOTE_MODE';
    report[romeo] = golf;
    report['CHANNEL_FULL'] = yankee;
    golf = 'CHANNEL_FULL';
    report[yankee] = golf;
    report['NO_PERMISSION'] = offset;
    golf = 'NO_PERMISSION';
    report[offset] = golf;
    var _closure1_slot10 = report;
    golf = 11;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/go_live/utils/StreamPermissionUtils.tsx';
    golf = options.bind(verify)(golf);
    zulu['canStreamInChannel'] = oscar;
    oscar = function(argFoo) { // Original name: getStreamCTAString
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zulu = argFoo;
            mike = _closure1_slot10;
            mike = mike.REMOTE_MODE;
            if(!(mike !== zulu)) { _fun00012_ip = 231; continue _fun00011 }
 23:
            mike = _closure1_slot10;
            mike = mike.CHANNEL_FULL;
            if(!(mike !== zulu)) { _fun00012_ip = 172; continue _fun00011 }
 40:
            mike = _closure1_slot10;
            mike = mike.NO_PERMISSION;
            if(!(mike !== zulu)) { _fun00012_ip = 113; continue _fun00011 }
 54:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 8;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.7Xq/nZ;
            mike = zulu.bind(tango)(mike);
            return mike;
 113:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 8;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.pgUTZG;
            mike = zulu.bind(tango)(mike);
            return mike;
 172:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 8;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.elyVbm;
            mike = zulu.bind(tango)(mike);
            return mike;
 231:
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 8;
            mike = oscar[entity];
            tango = undefined;
            mike = report.bind(tango)(mike);
            zulu = mike.intl;
            mike = zulu.string;
            entity = oscar[entity];
            entity = report.bind(tango)(entity);
            entity = entity.t;
            entity = entity.1i3tSU;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['getStreamCTAString'] = oscar;
    zulu['StreamUnavailableReasons'] = report;
    zulu['canWatchStream'] = tango;
    tango = function(argFoo) { // Original name: useCanWatchStream
        mike = argFoo;
        var _closure2_slot0 = mike;
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        mike = 10;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStoresArray;
        oscar = _closure1_slot8;
        mike = new Array(4);
        mike[0] = oscar;
        oscar = _closure1_slot6;
        mike[1] = oscar;
        oscar = _closure1_slot7;
        mike[2] = oscar;
        report = _closure1_slot3;
        mike[3] = report;
        entity = function() {
            golf = _closure1_slot14;
            romeo = _closure2_slot0;
            yankee = _closure1_slot8;
            offset = _closure1_slot6;
            verify = _closure1_slot7;
            options = _closure1_slot3;
            foxtrot = undefined;
            entity = foxtrot[golf](romeo, yankee, offset, verify, options, golf);
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useCanWatchStream'] = tango;
    mike = function(argFoo, argBar, argBaz) { // Original name: getStreamEligibleChannels
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            options = argBar;
            golf = argBaz;
            entity = new Array(0);
            zulu = _closure1_slot11;
            tango = _closure1_slot5;
            mike = argFoo;
            mike = mike[tango];
            report = undefined;
            tango = zulu.bind(report)(mike);
            zulu = tango.bind(report)();
            mike = zulu.done;
            if(mike) { _fun00014_ip = 96; continue _fun00013 }
 47:
            mike = zulu.value;
            verify = mike.channel;
            mike = _closure1_slot13;
            mike = mike.bind(report)(verify, options, golf);
            if(!mike) { _fun00014_ip = 81; continue _fun00013 }
 71:
            mike = entity.push;
            mike = mike.bind(entity)(verify);
 81:
            verify = tango.bind(report)();
            mike = verify.done;
            zulu = verify;
            if(!mike) { _fun00014_ip = 47; continue _fun00013 }
 96:
            return entity;
        }
    };
    zulu['getStreamEligibleChannels'] = mike;
    return entity;
})();