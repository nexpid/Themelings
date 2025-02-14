// app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowAnalytics.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun114932: for(var _fun114932_ip = 0; ; ) switch(_fun114932_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun114932_ip = 46; continue _fun114932 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun114932_ip = 55; continue _fun114932 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun114932_ip = 345; continue _fun114932 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun114932_ip = 323; continue _fun114932 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun114932_ip = 283; continue _fun114932 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun114932_ip = 270; continue _fun114932 }
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
            if(!golf) { _fun114932_ip = 163; continue _fun114932 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun114932_ip = 179; continue _fun114932 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun114932_ip = 249; continue _fun114932 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun114932_ip = 249; continue _fun114932 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun114932_ip = 234; continue _fun114932 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun114932_ip = 247; continue _fun114932 }
 234:
            verify = _closure1_slot5;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun114932_ip = 265; continue _fun114932;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun114932_ip = 283; continue _fun114932;
 270:
            golf = _closure1_slot5;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun114932_ip = 323; continue _fun114932 }
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
            if(!tango) { _fun114932_ip = 330; continue _fun114932 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun114933: for(var _fun114933_ip = 0; ; ) switch(_fun114933_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun114933_ip = 56; continue _fun114933 }
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
                    _fun114933_ip = 67; continue _fun114933;
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
    var _closure1_slot4 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun114934: for(var _fun114934_ip = 0; ; ) switch(_fun114934_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun114934_ip = 23; continue _fun114934 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun114934_ip = 33; continue _fun114934 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun114934_ip = 70; continue _fun114934 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun114934_ip = 55; continue _fun114934 }
 70:
            return entity;
        }
    };
    var _closure1_slot5 = entity;
    entity = function(argFoo) { // Original name: convertNullableArrayToItemAndItemIndex
        _fun114935: for(var _fun114935_ip = 0; ; ) switch(_fun114935_ip) {
 0:
            zulu = new Array(0);
            mike = new Array(0);
            tango = _closure1_slot4;
            verify = undefined;
            entity = argFoo;
            options = tango.bind(verify)(entity);
            tango = options.bind(verify)();
            entity = tango.done;
            golf = -1;
            oscar = 1;
            report = null;
            if(entity) { _fun114935_ip = 113; continue _fun114935 }
 48:
            offset = tango.value;
            if(!(report !== offset)) { _fun114935_ip = 88; continue _fun114935 }
 57:
            entity = zulu.push;
            entity = entity.bind(zulu)(offset);
            offset = mike.push;
            entity = zulu.length;
            entity = entity - oscar;
            entity = offset.bind(mike)(entity);
            _fun114935_ip = 98; continue _fun114935;
 88:
            entity = mike.push;
            entity = entity.bind(mike)(golf);
 98:
            offset = options.bind(verify)();
            entity = offset.done;
            tango = offset;
            if(!entity) { _fun114935_ip = 48; continue _fun114935 }
 113:
            entity = new Array(2);
            entity[0] = zulu;
            entity[1] = mike;
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = function(argFoo) { // Original name: getItemUserId
        _fun114936: for(var _fun114936_ip = 0; ; ) switch(_fun114936_ip) {
 0:
            mike = argFoo;
            entity = 'userId';
            zulu = entity in mike;
            entity = null;
            if(!zulu) { _fun114936_ip = 21; continue _fun114936 }
 16:
            entity = mike.userId;
 21:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo) { // Original name: getItemChannelId
        _fun114937: for(var _fun114937_ip = 0; ; ) switch(_fun114937_ip) {
 0:
            mike = argFoo;
            entity = 'channelId';
            entity = entity in mike;
            if(entity) { _fun114937_ip = 166; continue _fun114937 }
 17:
            entity = 'voiceState';
            entity = entity in mike;
            if(entity) { _fun114937_ip = 127; continue _fun114937 }
 28:
            entity = 'stream';
            entity = entity in mike;
            if(entity) { _fun114937_ip = 88; continue _fun114937 }
 39:
            entity = 'stage';
            zulu = entity in mike;
            report = null;
            entity = null;
            if(!zulu) { _fun114937_ip = 86; continue _fun114937 }
 54:
            tango = mike.stage;
            oscar = report == tango;
            zulu = undefined;
            if(oscar) { _fun114937_ip = 74; continue _fun114937 }
 69:
            zulu = tango.channel_id;
 74:
            tango = report != zulu;
            entity = null;
            if(!tango) { _fun114937_ip = 86; continue _fun114937 }
 83:
            entity = zulu;
 86:
            _fun114937_ip = 125; continue _fun114937;
 88:
            report = mike.stream;
            zulu = null;
            oscar = zulu == report;
            tango = undefined;
            if(oscar) { _fun114937_ip = 110; continue _fun114937 }
 105:
            tango = report.channelId;
 110:
            report = zulu != tango;
            zulu = null;
            if(!report) { _fun114937_ip = 122; continue _fun114937 }
 119:
            zulu = tango;
 122:
            entity = zulu;
 125:
            _fun114937_ip = 164; continue _fun114937;
 127:
            report = mike.voiceState;
            zulu = null;
            oscar = zulu == report;
            tango = undefined;
            if(oscar) { _fun114937_ip = 149; continue _fun114937 }
 144:
            tango = report.channelId;
 149:
            report = zulu != tango;
            zulu = null;
            if(!report) { _fun114937_ip = 161; continue _fun114937 }
 158:
            zulu = tango;
 161:
            entity = zulu;
 164:
            _fun114937_ip = 171; continue _fun114937;
 166:
            entity = mike.channelId;
 171:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo) { // Original name: getUserIdProperties
        report = argFoo;
        zulu = _closure1_slot6;
        tango = report.map;
        mike = _closure1_slot7;
        mike = tango.bind(report)(mike);
        tango = undefined;
        zulu = zulu.bind(tango)(mike);
        mike = _closure1_slot2;
        entity = 2;
        zulu = mike.bind(tango)(zulu, entity);
        entity = {};
        mike = 0;
        mike = zulu[mike];
        entity['highlighted_user_ids'] = mike;
        mike = 1;
        mike = zulu[mike];
        entity['highlighted_user_ids_index'] = mike;
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo) { // Original name: getChannelIdProperties
        report = argFoo;
        zulu = _closure1_slot6;
        tango = report.map;
        mike = _closure1_slot8;
        mike = tango.bind(report)(mike);
        tango = undefined;
        zulu = zulu.bind(tango)(mike);
        mike = _closure1_slot2;
        entity = 2;
        zulu = mike.bind(tango)(zulu, entity);
        entity = {};
        mike = 0;
        mike = zulu[mike];
        entity['destination_channel_ids'] = mike;
        mike = 1;
        mike = zulu[mike];
        entity['destination_channel_ids_index'] = mike;
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = report[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 3;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowAnalytics.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: getAffinityProperties
        _fun114940: for(var _fun114940_ip = 0; ; ) switch(_fun114940_ip) {
 0:
            report = argFoo;
            mike = _closure1_slot3;
            entity = mike.getId;
            oscar = entity.bind(mike)();
            mike = _closure1_slot0;
            tango = _closure1_slot1;
            entity = 2;
            entity = tango[entity];
            tango = undefined;
            mike = mike.bind(tango)(entity);
            entity = mike.extractTimestamp;
            mike = entity.bind(mike)(oscar);
            entity = 25;
            mike = mike % entity;
            entity = 0;
            if(!(mike !== entity)) { _fun114940_ip = 70; continue _fun114940 }
 66:
            entity = {};
            _fun114940_ip = 107; continue _fun114940;
 70:
            mike = {};
            oscar = _closure1_slot10;
            golf = oscar.bind(tango)(report);
            options = mike;
            oscar = copyDataProperties(options, golf);
            zulu = _closure1_slot9;
            golf = zulu.bind(tango)(report);
            options = mike;
            zulu = copyDataProperties(options, golf);
            entity = mike;
 107:
            return entity;
        }
    };
    zulu['getAffinityProperties'] = mike;
    return entity;
})();