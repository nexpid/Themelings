// app/modules/guild/markGuildsAsRead.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
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
            verify = _closure1_slot10;
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
            golf = _closure1_slot10;
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
    var _closure1_slot9 = entity;
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
    var _closure1_slot10 = entity;
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
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ReadStateTypes;
    var _closure1_slot8 = tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild/markGuildsAsRead.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar, argBaz) { // Original name: markGuildsAsRead
        options = argFoo;
        oscar = _closure1_slot1;
        report = _closure1_slot2;
        zulu = 6;
        tango = report[zulu];
        zulu = undefined;
        verify = oscar.bind(zulu)(tango);
        golf = verify.flatMap;
        tango = function(argFoo) {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                oscar = argFoo;
                tango = _closure1_slot5;
                entity = tango.getSelectableChannelIds;
                zulu = entity.bind(tango)(oscar);
                entity = tango.getVocalChannelIds;
                report = entity.bind(tango)(oscar);
                entity = new Array(0);
                backup = 0;
                sizing = entity;
                kilo = zulu;
                backup = arraySpread(sizing, kilo, backup);
                sizing = entity;
                kilo = report;
                tango = arraySpread(sizing, kilo, backup);
                report = _closure1_slot4;
                tango = report.getActiveJoinedThreadsForGuild;
                golf = tango.bind(report)(oscar);
                mike = _closure1_slot9;
                oscar = undefined;
                report = mike.bind(oscar)(zulu);
                zulu = report.bind(oscar)();
                mike = zulu.done;
                tango = null;
                if(mike) { _fun00008_ip = 163; continue _fun00007 }
 98:
                mike = zulu.value;
                mike = golf[mike];
                if(!(tango == mike)) { _fun00008_ip = 113; continue _fun00007 }
 111:
                mike = {};
 113:
                offset = mike;
                for(mike in offset)
 124:
                {
 133:
                    foxtrot = mike;
                    romeo = entity.push;
                    romeo = romeo.bind(entity)(foxtrot);
                    _fun00008_ip = 124; continue _fun00007;
                }
 148:
                options = report.bind(oscar)();
                mike = options.done;
                zulu = options;
                if(!mike) { _fun00008_ip = 98; continue _fun00007 }
 163:
                return entity;
            }
        };
        verify = golf.bind(verify)(options, tango);
        golf = verify.map;
        tango = function(argFoo) {
            tango = argFoo;
            entity = {};
            entity['channelId'] = tango;
            zulu = _closure1_slot8;
            zulu = zulu.CHANNEL;
            entity['readStateType'] = zulu;
            zulu = _closure1_slot6;
            mike = zulu.lastMessageId;
            mike = mike.bind(zulu)(tango);
            entity['messageId'] = mike;
            return entity;
        };
        tango = golf.bind(verify)(tango);
        var _closure2_slot0 = tango;
        golf = options.forEach;
        mike = function(argFoo) {
            golf = argFoo;
            tango = _closure2_slot0;
            zulu = tango.push;
            mike = {};
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            options = 7;
            oscar = offset[options];
            entity = undefined;
            yankee = verify.bind(entity)(oscar);
            oscar = yankee.cast;
            oscar = oscar.bind(yankee)(golf);
            mike['channelId'] = oscar;
            oscar = _closure1_slot8;
            yankee = oscar.GUILD_EVENT;
            mike['readStateType'] = yankee;
            foxtrot = _closure1_slot6;
            romeo = foxtrot.lastMessageId;
            yankee = oscar.GUILD_EVENT;
            yankee = romeo.bind(foxtrot)(golf, yankee);
            mike['messageId'] = yankee;
            mike = zulu.bind(tango)(mike);
            zulu = tango.push;
            mike = {};
            options = offset[options];
            verify = verify.bind(entity)(options);
            options = verify.cast;
            options = options.bind(verify)(golf);
            mike['channelId'] = options;
            oscar = oscar.GUILD_ONBOARDING_QUESTION;
            mike['readStateType'] = oscar;
            oscar = _closure1_slot3;
            report = oscar.ackIdForGuild;
            report = report.bind(oscar)(golf);
            mike['messageId'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        mike = golf.bind(options)(mike);
        mike = 8;
        mike = report[mike];
        options = oscar.bind(zulu)(mike);
        golf = options.track;
        mike = _closure1_slot7;
        oscar = mike.MARK_AS_READ;
        mike = {};
        verify = argBar;
        mike['source'] = verify;
        verify = 'guild';
        mike['type'] = verify;
        mike = golf.bind(options)(oscar, mike);
        mike = _closure1_slot0;
        entity = 9;
        entity = report[entity];
        zulu = mike.bind(zulu)(entity);
        mike = zulu.bulkAck;
        entity = argBaz;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();