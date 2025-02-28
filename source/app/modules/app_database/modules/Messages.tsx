// app/modules/app_database/modules/Messages.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    oscard = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
    var _closure1_slot2 = option;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 45:
            if(michal) { _fun00002_ip = 54; continue _fun00001 }
 48:
            michal = zuuluu.@@iterator;
 54:
            if(michal) { _fun00002_ip = 342; continue _fun00001 }
 60:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 322; continue _fun00001 }
 85:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 282; continue _fun00001 }
 95:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 269; continue _fun00001 }
 109:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 162; continue _fun00001 }
 157:
            golfie = zuuluu.constructor;
 162:
            offset = verify;
            if(!golfie) { _fun00002_ip = 178; continue _fun00001 }
 168:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 178:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 186:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 194:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 233; continue _fun00001 }
 204:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 246; continue _fun00001 }
 233:
            verify = _closure1_slot13;
            golfie = verify.bind(option)(zuuluu, option);
 246:
            _fun00002_ip = 264; continue _fun00001;
 248:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 264:
            oscard = golfie;
            _fun00002_ip = 282; continue _fun00001;
 269:
            golfie = _closure1_slot13;
            oscard = golfie.bind(option)(zuuluu, option);
 282:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 322; continue _fun00001 }
 288:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 322:
            if(!tangon) { _fun00002_ip = 329; continue _fun00001 }
 325:
            _closure2_slot0 = tangon;
 329:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 342:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    michal = function(argFoo) { // Original name: isLikelyNotDelta
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            entity = michal.author;
            zuuluu = null;
            entity = zuuluu != entity;
            if(!entity) { _fun00008_ip = 27; continue _fun00007 }
 18:
            tangon = michal.content;
            entity = zuuluu != tangon;
 27:
            if(!entity) { _fun00008_ip = 40; continue _fun00007 }
 30:
            tangon = michal.mentions;
            entity = zuuluu != tangon;
 40:
            if(!entity) { _fun00008_ip = 53; continue _fun00007 }
 43:
            michal = michal.timestamp;
            entity = zuuluu != michal;
 53:
            return entity;
        }
    };
    var _closure1_slot14 = michal;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, tangon);
    entity = 0;
    tangon = option[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = option[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = option[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = option[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = option[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = option[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = option[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = option[tangon];
    verify = oscard.bind(entity)(tangon);
    tangon = verify.prototype;
    oscard = Object.create(tangon, {constructor: {value: verify}});
    foxtra = 'Messages';
    backup = oscard;
    tangon = new backup[verify](foxtra, romeon);
    tangon = tangon instanceof Object ? tangon : oscard;
    var _closure1_slot10 = tangon;
    tangon = function() {
        report = _closure1_slot6;
        tangon = function(argFoo) { // Original name: ChannelHistory
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                report = argFoo;
                zuuluu = this;
                option = _closure1_slot5;
                golfie = _closure2_slot0;
                entity = undefined;
                golfie = option.bind(entity)(zuuluu, golfie);
                golfie = null;
                zuuluu['connectionId'] = golfie;
                option = new Array(0);
                zuuluu['users'] = option;
                option = new Array(0);
                zuuluu['members'] = option;
                option = new Array(0);
                zuuluu['messages'] = option;
                option = report.length;
                verify = 0;
                if(!(option > verify)) { _fun00010_ip = 216; continue _fun00009 }
 82:
                option = report[verify];
                offset = golfie == option;
                golfie = undefined;
                if(offset) { _fun00010_ip = 101; continue _fun00009 }
 95:
                golfie = option.connectionId;
 101:
                var _closure3_slot0 = golfie;
                option = _closure2_slot0;
                oscard = option.computeUsersAndMembers;
                option = oscard.bind(option)(report);
                oscard = _closure1_slot4;
                tangon = 2;
                option = oscard.bind(entity)(option, tangon);
                oscard = option[verify];
                tangon = 1;
                tangon = option[tangon];
                option = report.length;
                option = option > verify;
                if(!option) { _fun00010_ip = 174; continue _fun00009 }
 158:
                offset = report.every;
                verify = function(argFoo) {
                    entity = argFoo;
                    michal = entity.connectionId;
                    entity = _closure3_slot0;
                    entity = michal === entity;
                    return entity;
                };
                option = offset.bind(report)(verify);
 174:
                if(!option) { _fun00010_ip = 183; continue _fun00009 }
 177:
                zuuluu['connectionId'] = golfie;
 183:
                zuuluu['users'] = oscard;
                zuuluu['members'] = tangon;
                tangon = report.map;
                michal = function(argFoo) {
                    entity = argFoo;
                    entity = entity.message;
                    return entity;
                };
                michal = tangon.bind(report)(michal);
                zuuluu['messages'] = michal;
 216:
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        entity = {};
        zuuluu = 'computeUsersAndMembers';
        entity['key'] = zuuluu;
        zuuluu = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zuuluu = argFoo;
                option = this;
                tangon = _closure1_slot0;
                report = _closure1_slot2;
                michal = 8;
                michal = report[michal];
                golfie = undefined;
                tangon = tangon.bind(golfie)(michal);
                michal = tangon.requireSortedDescending;
                michal = michal.bind(tangon)(zuuluu);
                michal = global;
                tangon = michal.Map;
                report = tangon.prototype;
                report = Object.create(report, {constructor: {value: tangon}});
                sizing = report;
                tangon = new sizing[tangon](kiloes);
                oscard = tangon instanceof Object ? tangon : report;
                tangon = michal.Map;
                report = tangon.prototype;
                report = Object.create(report, {constructor: {value: tangon}});
                sizing = report;
                tangon = new sizing[tangon](kiloes);
                report = tangon instanceof Object ? tangon : report;
                entity = _closure1_slot12;
                tangon = entity.bind(golfie)(zuuluu);
                zuuluu = tangon.bind(golfie)();
                entity = zuuluu.done;
                if(entity) { _fun00012_ip = 187; continue _fun00011 }
 119:
                entity = zuuluu.value;
                romeon = option.addIntoMap;
                yankee = entity.users;
                offset = function(argFoo) {
                    entity = argFoo;
                    entity = entity.id;
                    return entity;
                };
                offset = romeon.bind(option)(oscard, yankee, offset);
                yankee = option.addIntoMap;
                offset = entity.members;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.userId;
                    return entity;
                };
                entity = yankee.bind(option)(report, offset, entity);
                offset = tangon.bind(golfie)();
                entity = offset.done;
                zuuluu = offset;
                if(!entity) { _fun00012_ip = 119; continue _fun00011 }
 187:
                tangon = michal.Array;
                zuuluu = tangon.from;
                entity = oscard.values;
                entity = entity.bind(oscard)();
                zuuluu = zuuluu.bind(tangon)(entity);
                entity = new Array(2);
                entity[0] = zuuluu;
                tangon = michal.Array;
                zuuluu = tangon.from;
                michal = report.values;
                michal = michal.bind(report)();
                michal = zuuluu.bind(tangon)(michal);
                entity[1] = michal;
                return entity;
            }
        };
        entity['value'] = zuuluu;
        zuuluu = new Array(2);
        zuuluu[0] = entity;
        entity = {};
        oscard = 'addIntoMap';
        entity['key'] = oscard;
        michal = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                golfie = argFoo;
                oscard = argBaz;
                zuuluu = _closure1_slot12;
                entity = undefined;
                michal = argBar;
                report = zuuluu.bind(entity)(michal);
                zuuluu = report.bind(entity)();
                michal = zuuluu.done;
                tangon = null;
                if(michal) { _fun00014_ip = 114; continue _fun00013 }
 37:
                verify = zuuluu.value;
                option = oscard.bind(entity)(verify);
                michal = golfie.get;
                offset = michal.bind(golfie)(option);
                michal = tangon == offset;
                if(michal) { _fun00014_ip = 85; continue _fun00013 }
 64:
                offset = offset.incomplete;
                if(!offset) { _fun00014_ip = 82; continue _fun00013 }
 73:
                yankee = verify.incomplete;
                offset = !yankee;
 82:
                michal = offset;
 85:
                if(!michal) { _fun00014_ip = 99; continue _fun00013 }
 88:
                michal = golfie.set;
                michal = michal.bind(golfie)(option, verify);
 99:
                option = report.bind(entity)();
                michal = option.done;
                zuuluu = option;
                if(!michal) { _fun00014_ip = 37; continue _fun00013 }
 114:
                return entity;
            }
        };
        entity['value'] = michal;
        zuuluu[1] = entity;
        michal = undefined;
        entity = null;
        entity = report.bind(michal)(tangon, entity, zuuluu);
        return entity;
    };
    tangon = tangon.bind(entity)();
    var _closure1_slot11 = tangon;
    report = function() {
        tangon = _closure1_slot6;
        zuuluu = function() { // Original name: Messages
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            report = _closure1_slot5;
            michal = _closure2_slot3;
            entity = undefined;
            michal = report.bind(entity)(zuuluu, michal);
            michal = {};
            report = function(argFoo, argBar) { // Original name: CHANNEL_DELETE
                tangon = _closure3_slot0;
                zuuluu = tangon.handleChannelDelete;
                michal = argFoo;
                entity = argBar;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            michal['CHANNEL_DELETE'] = report;
            report = function(argFoo, argBar) { // Original name: GUILD_DELETE
                tangon = _closure3_slot0;
                zuuluu = tangon.handleGuildDelete;
                michal = argFoo;
                entity = argBar;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            michal['GUILD_DELETE'] = report;
            report = function(argFoo, argBar) { // Original name: LOAD_MESSAGES_SUCCESS
                tangon = _closure3_slot0;
                zuuluu = tangon.handleLoadMessagesSuccess;
                michal = argFoo;
                entity = argBar;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            michal['LOAD_MESSAGES_SUCCESS'] = report;
            report = function(argFoo, argBar) { // Original name: MESSAGE_CREATE
                tangon = _closure3_slot0;
                zuuluu = tangon.handleMessageCreate;
                michal = argFoo;
                entity = argBar;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            michal['MESSAGE_CREATE'] = report;
            report = function(argFoo, argBar) { // Original name: MESSAGE_DELETE_BULK
                tangon = _closure3_slot0;
                zuuluu = tangon.handleMessageDeleteBulk;
                michal = argFoo;
                entity = argBar;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            michal['MESSAGE_DELETE_BULK'] = report;
            report = function(argFoo, argBar) { // Original name: MESSAGE_DELETE
                tangon = _closure3_slot0;
                zuuluu = tangon.handleMessageDelete;
                michal = argFoo;
                entity = argBar;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            michal['MESSAGE_DELETE'] = report;
            report = function(argFoo, argBar) { // Original name: MESSAGE_PREVIEWS_LOADED
                tangon = _closure3_slot0;
                zuuluu = tangon.handleMessagePreviewsLoaded;
                michal = argFoo;
                entity = argBar;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            michal['MESSAGE_PREVIEWS_LOADED'] = report;
            tangon = function(argFoo, argBar) { // Original name: MESSAGE_UPDATE
                tangon = _closure3_slot0;
                zuuluu = tangon.handleMessageUpdate;
                michal = argFoo;
                entity = argBar;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            michal['MESSAGE_UPDATE'] = tangon;
            zuuluu['actions'] = michal;
            return entity;
        };
        var _closure2_slot3 = zuuluu;
        report = {};
        michal = 'startupLoad';
        report['key'] = michal;
        option = _closure1_slot3;
        michal = undefined;
        entity = function* (argFoo, argBar, argBaz, argCor) {
            entity = function* (argFoo, argBar, argBaz, argCor) { // Original name: ?anon_0_
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00016_ip = 111; continue _fun00015 }
 7:
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 9;
                    tangon = tangon[michal];
                    michal = undefined;
                    report = report.bind(michal)(tangon);
                    tangon = report.messages;
                    michal = argFoo;
                    golfie = tangon.bind(report)(michal);
                    oscard = golfie.getLatest;
                    report = argBar;
                    tangon = argBaz;
                    michal = argCor;
                    michal = oscard.bind(golfie)(report, tangon, michal);
                    SaveGenerator(address=72);
 70:
                    return michal;
 72:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00016_ip = 108; continue _fun00015 }
 78:
                    zuuluu = _closure1_slot11;
                    tangon = zuuluu.prototype;
                    tangon = Object.create(tangon, {constructor: {value: zuuluu}});
                    yankee = tangon;
                    offset = michal;
                    zuuluu = new yankee[zuuluu](offset, verify);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    return zuuluu;
 108:
                    return michal;
 111:
                    return entity;
                }
            };
            return entity;
        };
        entity = option.bind(michal)(entity);
        var _closure2_slot2 = entity;
        entity = function() { // Original name: startupLoad
            entity = undefined;
            tangon = _closure2_slot2;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(19);
        entity[0] = report;
        report = {};
        golfie = 'load';
        report['key'] = golfie;
        golfie = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    StartGenerator();
                    golfie = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00018_ip = 206; continue _fun00017 }
 13:
                    tangon = _closure1_slot8;
                    michal = tangon.getBasicChannel;
                    michal = michal.bind(tangon)(golfie);
                    tangon = null;
                    if(!(tangon != golfie)) { _fun00018_ip = 77; continue _fun00017 }
 37:
                    if(!(tangon != michal)) { _fun00018_ip = 77; continue _fun00017 }
 41:
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 10;
                    tangon = oscard[tangon];
                    oscard = undefined;
                    report = report.bind(oscard)(tangon);
                    tangon = report.isReadableChannel;
                    tangon = tangon.bind(report)(michal);
                    if(tangon) { _fun00018_ip = 108; continue _fun00017 }
 77:
                    option = _closure1_slot11;
                    tangon = option.prototype;
                    report = Object.create(tangon, {constructor: {value: option}});
                    yankee = new Array(0);
                    romeon = report;
                    tangon = new romeon[option](yankee, offset);
                    tangon = tangon instanceof Object ? tangon : report;
                    return tangon;
 108:
                    report = _closure1_slot1;
                    option = _closure1_slot2;
                    tangon = 9;
                    tangon = option[tangon];
                    oscard = report.bind(oscard)(tangon);
                    report = oscard.messages;
                    tangon = argFoo;
                    oscard = report.bind(oscard)(tangon);
                    report = oscard.getLatest;
                    tangon = michal.guild_id;
                    michal = argBaz;
                    michal = report.bind(oscard)(tangon, golfie, michal);
                    SaveGenerator(address=167);
 165:
                    return michal;
 167:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00018_ip = 203; continue _fun00017 }
 173:
                    zuuluu = _closure1_slot11;
                    tangon = zuuluu.prototype;
                    tangon = Object.create(tangon, {constructor: {value: zuuluu}});
                    romeon = tangon;
                    yankee = michal;
                    zuuluu = new romeon[zuuluu](yankee, offset);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    return zuuluu;
 203:
                    return michal;
 206:
                    return entity;
                }
            };
            return entity;
        };
        golfie = option.bind(michal)(golfie);
        var _closure2_slot1 = golfie;
        golfie = function() { // Original name: load
            entity = undefined;
            tangon = _closure2_slot1;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'handleMessageCreate';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                entity = argFoo;
                oscard = this;
                michal = entity.optimistic;
                if(michal) { _fun00020_ip = 21; continue _fun00019 }
 15:
                michal = entity.isPushNotification;
 21:
                if(michal) { _fun00020_ip = 36; continue _fun00019 }
 24:
                tangon = entity.sendMessageOptions;
                zuuluu = null;
                michal = zuuluu != tangon;
 36:
                if(michal) { _fun00020_ip = 114; continue _fun00019 }
 39:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 10;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.isReadableChannelId;
                michal = entity.channelId;
                michal = zuuluu.bind(tangon)(michal);
                if(!michal) { _fun00020_ip = 114; continue _fun00019 }
 83:
                report = oscard.upsertOne;
                offset = entity.guildId;
                verify = entity.channelId;
                option = entity.message;
                golfie = argBar;
                yankee = oscard;
                entity = yankee[report](offset, verify, option, golfie, oscard);
 114:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'handleMessageUpdate';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                entity = argFoo;
                oscard = argBar;
                report = this;
                michal = entity.message;
                michal = michal.id;
                tangon = null;
                michal = tangon != michal;
                if(!michal) { _fun00022_ip = 42; continue _fun00021 }
 28:
                zuuluu = entity.message;
                zuuluu = zuuluu.channel_id;
                michal = tangon != zuuluu;
 42:
                if(!michal) { _fun00022_ip = 91; continue _fun00021 }
 45:
                golfie = _closure1_slot0;
                tangon = _closure1_slot2;
                zuuluu = 10;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                golfie = golfie.bind(zuuluu)(tangon);
                tangon = golfie.isReadableChannelId;
                zuuluu = entity.message;
                zuuluu = zuuluu.channel_id;
                michal = tangon.bind(golfie)(zuuluu);
 91:
                if(!michal) { _fun00022_ip = 190; continue _fun00021 }
 94:
                tangon = _closure1_slot14;
                zuuluu = entity.message;
                michal = undefined;
                michal = tangon.bind(michal)(zuuluu);
                if(michal) { _fun00022_ip = 154; continue _fun00021 }
 116:
                golfie = report.updateOne;
                yankee = entity.guildId;
                michal = entity.message;
                offset = michal.channel_id;
                verify = entity.message;
                romeon = report;
                option = oscard;
                michal = romeon[golfie](yankee, offset, verify, option, golfie);
                _fun00022_ip = 190; continue _fun00021;
 154:
                tangon = report.upsertOne;
                yankee = entity.guildId;
                michal = entity.message;
                offset = michal.channel_id;
                verify = entity.message;
                romeon = report;
                option = oscard;
                entity = romeon[tangon](yankee, offset, verify, option, golfie);
 190:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'handleMessagePreviewsLoaded';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                verify = argFoo;
                option = argBar;
                golfie = this;
                zuuluu = _closure1_slot12;
                michal = verify.messages;
                entity = undefined;
                report = zuuluu.bind(entity)(michal);
                zuuluu = report.bind(entity)();
                michal = zuuluu.done;
                tangon = 10;
                if(michal) { _fun00024_ip = 131; continue _fun00023 }
 44:
                romeon = zuuluu.value;
                offset = _closure1_slot0;
                michal = _closure1_slot2;
                michal = michal[tangon];
                yankee = offset.bind(entity)(michal);
                offset = yankee.isReadableChannelId;
                michal = romeon.channel_id;
                michal = offset.bind(yankee)(michal);
                if(!michal) { _fun00024_ip = 116; continue _fun00023 }
 85:
                yankee = golfie.insertStale;
                sizing = verify.guildId;
                kiloes = romeon.channel_id;
                output = golfie;
                backup = romeon;
                foxtra = option;
                michal = output[yankee](sizing, kiloes, backup, foxtra, romeon);
 116:
                offset = report.bind(entity)();
                michal = offset.done;
                zuuluu = offset;
                if(!michal) { _fun00024_ip = 44; continue _fun00023 }
 131:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'handleLoadMessagesSuccess';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                entity = argFoo;
                oscard = argBar;
                report = this;
                golfie = _closure1_slot8;
                tangon = golfie.getBasicChannel;
                michal = entity.channelId;
                michal = tangon.bind(golfie)(michal);
                tangon = null;
                if(!(tangon != michal)) { _fun00026_ip = 190; continue _fun00025 }
 41:
                golfie = _closure1_slot0;
                tangon = _closure1_slot2;
                zuuluu = 10;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                golfie = golfie.bind(zuuluu)(tangon);
                tangon = golfie.isReadableChannelId;
                zuuluu = entity.channelId;
                zuuluu = tangon.bind(golfie)(zuuluu);
                if(!zuuluu) { _fun00026_ip = 190; continue _fun00025 }
 82:
                zuuluu = entity.isAfter;
                if(zuuluu) { _fun00026_ip = 156; continue _fun00025 }
 91:
                zuuluu = entity.isBefore;
                if(zuuluu) { _fun00026_ip = 156; continue _fun00025 }
 100:
                zuuluu = entity.hasMoreAfter;
                if(zuuluu) { _fun00026_ip = 156; continue _fun00025 }
 109:
                tangon = entity.limit;
                zuuluu = 5;
                if(!(tangon > zuuluu)) { _fun00026_ip = 156; continue _fun00025 }
 122:
                option = report.replaceAll;
                romeon = michal.guild_id;
                yankee = entity.channelId;
                offset = entity.messages;
                foxtra = report;
                verify = oscard;
                zuuluu = foxtra[option](romeon, yankee, offset, verify, option);
                _fun00026_ip = 190; continue _fun00025;
 156:
                tangon = report.upsertMany;
                romeon = michal.guild_id;
                yankee = entity.channelId;
                offset = entity.messages;
                foxtra = report;
                verify = oscard;
                entity = foxtra[tangon](romeon, yankee, offset, verify, option);
 190:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'handleMessageDelete';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                entity = argFoo;
                oscard = this;
                zuuluu = entity.id;
                michal = null;
                if(!(michal != zuuluu)) { _fun00028_ip = 48; continue _fun00027 }
 17:
                report = oscard.deleteOne;
                offset = entity.guildId;
                verify = entity.channelId;
                option = entity.id;
                golfie = argBar;
                yankee = oscard;
                entity = yankee[report](offset, verify, option, golfie, oscard);
 48:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'handleMessageDeleteBulk';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                golfie = argFoo;
                oscard = argBar;
                report = this;
                zuuluu = _closure1_slot12;
                michal = golfie.ids;
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.bind(entity)();
                michal = zuuluu.done;
                if(michal) { _fun00030_ip = 87; continue _fun00029 }
 41:
                romeon = zuuluu.value;
                verify = report.deleteOne;
                backup = golfie.guildId;
                foxtra = golfie.channelId;
                kiloes = report;
                yankee = oscard;
                michal = kiloes[verify](backup, foxtra, romeon, yankee, offset);
                option = tangon.bind(entity)();
                michal = option.done;
                zuuluu = option;
                if(!michal) { _fun00030_ip = 41; continue _fun00029 }
 87:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[7] = report;
        report = {};
        golfie = 'handleChannelDelete';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            entity = argFoo;
            report = this;
            tangon = report.deleteChannel;
            michal = entity.channel;
            zuuluu = michal.guild_id;
            entity = entity.channel;
            michal = entity.id;
            entity = argBar;
            entity = tangon.bind(report)(zuuluu, michal, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[8] = report;
        report = {};
        golfie = 'handleGuildDelete';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                entity = argFoo;
                tangon = this;
                michal = entity.guild;
                michal = michal.unavailable;
                if(michal) { _fun00032_ip = 45; continue _fun00031 }
 20:
                zuuluu = tangon.deleteGuild;
                entity = entity.guild;
                michal = entity.id;
                entity = argBar;
                entity = zuuluu.bind(tangon)(michal, entity);
 45:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[9] = report;
        report = {};
        golfie = 'resetInMemoryState';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[10] = report;
        report = {};
        golfie = 'insertStale';
        report['key'] = golfie;
        golfie = function(argFoo, argBar, argBaz, argCor) { // Original name: value
            golfie = argFoo;
            oscard = argBar;
            tangon = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 9;
            zuuluu = verify[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.messagesTransaction;
            zuuluu = argCor;
            report = tangon.bind(report)(zuuluu);
            tangon = _closure1_slot7;
            zuuluu = tangon.lastTimeConnectedChanged;
            romeon = zuuluu.bind(tangon)();
            tangon = report.put;
            option = _closure1_slot0;
            michal = 11;
            michal = verify[michal];
            michal = option.bind(entity)(michal);
            offset = michal.KvMessage;
            zuuluu = offset.fromMessage;
            foxtra = argBaz;
            sizing = offset;
            kiloes = golfie;
            backup = oscard;
            foxtra = sizing[zuuluu](kiloes, backup, foxtra, romeon, yankee);
            michal = 12;
            michal = verify[michal];
            michal = option.bind(entity)(michal);
            michal = michal.ConflictOptions;
            romeon = michal.Skip;
            sizing = report;
            kiloes = golfie;
            backup = oscard;
            michal = sizing[tangon](kiloes, backup, foxtra, romeon, yankee);
            return entity;
        };
        report['value'] = golfie;
        entity[11] = report;
        report = {};
        golfie = 'upsertOne';
        report['key'] = golfie;
        golfie = function(argFoo, argBar, argBaz, argCor) { // Original name: value
            oscard = argFoo;
            report = argBar;
            tangon = _closure1_slot1;
            offset = _closure1_slot2;
            entity = 9;
            zuuluu = offset[entity];
            entity = undefined;
            golfie = tangon.bind(entity)(zuuluu);
            tangon = golfie.messagesTransaction;
            zuuluu = argCor;
            tangon = tangon.bind(golfie)(zuuluu);
            golfie = _closure1_slot7;
            zuuluu = golfie.lastTimeConnectedChanged;
            foxtra = zuuluu.bind(golfie)();
            option = tangon.put;
            verify = _closure1_slot0;
            zuuluu = 11;
            zuuluu = offset[zuuluu];
            zuuluu = verify.bind(entity)(zuuluu);
            yankee = zuuluu.KvMessage;
            golfie = yankee.fromMessage;
            backup = argBaz;
            output = yankee;
            sizing = oscard;
            kiloes = report;
            backup = output[golfie](sizing, kiloes, backup, foxtra, romeon);
            zuuluu = 12;
            zuuluu = offset[zuuluu];
            zuuluu = verify.bind(entity)(zuuluu);
            zuuluu = zuuluu.ConflictOptions;
            foxtra = zuuluu.Replace;
            output = tangon;
            sizing = oscard;
            kiloes = report;
            zuuluu = output[option](sizing, kiloes, backup, foxtra, romeon);
            zuuluu = tangon.trimChannel;
            golfie = _closure1_slot9;
            michal = golfie.saveLimit;
            michal = michal.bind(golfie)(report);
            michal = zuuluu.bind(tangon)(oscard, report, michal);
            return entity;
        };
        report['value'] = golfie;
        entity[12] = report;
        report = {};
        golfie = 'upsertMany';
        report['key'] = golfie;
        golfie = function(argFoo, argBar, argBaz, argCor) { // Original name: value
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                oscard = argFoo;
                report = argBar;
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 9;
                zuuluu = zuuluu[entity];
                entity = undefined;
                golfie = tangon.bind(entity)(zuuluu);
                tangon = golfie.messagesTransaction;
                zuuluu = argCor;
                tangon = tangon.bind(golfie)(zuuluu);
                golfie = _closure1_slot7;
                zuuluu = golfie.lastTimeConnectedChanged;
                offset = zuuluu.bind(golfie)();
                golfie = _closure1_slot12;
                zuuluu = argBaz;
                verify = golfie.bind(entity)(zuuluu);
                golfie = verify.bind(entity)();
                zuuluu = golfie.done;
                option = 11;
                if(zuuluu) { _fun00034_ip = 164; continue _fun00033 }
 86:
                kiloes = golfie.value;
                yankee = tangon.put;
                romeon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                zuuluu = zuuluu[option];
                zuuluu = romeon.bind(entity)(zuuluu);
                romeon = zuuluu.KvMessage;
                zuuluu = romeon.fromMessage;
                result = romeon;
                output = oscard;
                sizing = report;
                backup = offset;
                zuuluu = result[zuuluu](output, sizing, kiloes, backup, foxtra);
                zuuluu = yankee.bind(tangon)(oscard, report, zuuluu);
                yankee = verify.bind(entity)();
                zuuluu = yankee.done;
                golfie = yankee;
                if(!zuuluu) { _fun00034_ip = 86; continue _fun00033 }
 164:
                zuuluu = tangon.trimChannel;
                golfie = _closure1_slot9;
                michal = golfie.saveLimit;
                michal = michal.bind(golfie)(report);
                michal = zuuluu.bind(tangon)(oscard, report, michal);
                return entity;
            }
        };
        report['value'] = golfie;
        entity[13] = report;
        report = {};
        golfie = 'replaceAll';
        report['key'] = golfie;
        golfie = function(argFoo, argBar, argBaz, argCor) { // Original name: value
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                oscard = argFoo;
                report = argBar;
                offset = argBaz;
                var _closure3_slot0 = oscard;
                var _closure3_slot1 = report;
                golfie = _closure1_slot1;
                tangon = _closure1_slot2;
                entity = 9;
                tangon = tangon[entity];
                entity = undefined;
                option = golfie.bind(entity)(tangon);
                golfie = option.messagesTransaction;
                tangon = argCor;
                tangon = golfie.bind(option)(tangon);
                option = _closure1_slot7;
                golfie = option.lastTimeConnectedChanged;
                golfie = golfie.bind(option)();
                var _closure3_slot2 = golfie;
                option = _closure1_slot9;
                golfie = option.saveLimit;
                yankee = golfie.bind(option)(report);
                golfie = offset.length;
                option = offset;
                if(!(golfie > yankee)) { _fun00036_ip = 122; continue _fun00035 }
 103:
                verify = offset.slice;
                golfie = offset.length;
                golfie = golfie - yankee;
                option = verify.bind(offset)(golfie);
 122:
                golfie = option.map;
                zuuluu = function(argFoo) {
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 11;
                    michal = michal[entity];
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    oscard = entity.KvMessage;
                    report = oscard.fromMessage;
                    offset = _closure3_slot0;
                    verify = _closure3_slot1;
                    golfie = _closure3_slot2;
                    option = argFoo;
                    yankee = oscard;
                    entity = yankee[report](offset, verify, option, golfie, oscard);
                    return entity;
                };
                golfie = golfie.bind(option)(zuuluu);
                zuuluu = tangon.replaceAll;
                zuuluu = zuuluu.bind(tangon)(oscard, report, golfie);
                zuuluu = tangon.trimChannel;
                golfie = _closure1_slot9;
                michal = golfie.saveLimit;
                michal = michal.bind(golfie)(report);
                michal = zuuluu.bind(tangon)(oscard, report, michal);
                return entity;
            }
        };
        report['value'] = golfie;
        entity[14] = report;
        report = {};
        golfie = 'updateOne';
        report['key'] = golfie;
        golfie = function* (argFoo, argBar, argBaz, argCor) {
            entity = function* (argFoo, argBar, argBaz, argCor) { // Original name: ?anon_0_
                _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                    StartGenerator();
                    golfie = argFoo;
                    oscard = argBar;
                    yankee = argBaz;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00038_ip = 244; continue _fun00037 }
 19:
                    michal = yankee.id;
                    tangon = null;
                    if(!(tangon == michal)) { _fun00038_ip = 58; continue _fun00037 }
 30:
                    report = _closure1_slot10;
                    zuuluu = report.warn;
                    michal = 'updateOne: message.id is null; cannot update a message if we do not know its id.';
                    michal = zuuluu.bind(report)(michal);
                    _fun00038_ip = 236; continue _fun00037;
 58:
                    report = _closure1_slot1;
                    option = _closure1_slot2;
                    michal = 9;
                    michal = option[michal];
                    verify = undefined;
                    option = report.bind(verify)(michal);
                    report = option.messages;
                    michal = argCor;
                    michal = michal.database;
                    report = report.bind(option)(michal);
                    option = report.get;
                    michal = yankee.id;
                    michal = option.bind(report)(golfie, oscard, michal);
                    SaveGenerator(address=124);
 122:
                    return michal;
 124:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(option) { _fun00038_ip = 241; continue _fun00037 }
 130:
                    offset = _closure1_slot7;
                    option = offset.lastTimeConnectedChanged;
                    offset = option.bind(offset)();
                    if(!(tangon != michal)) { _fun00038_ip = 236; continue _fun00037 }
 148:
                    tangon = report.put;
                    option = _closure1_slot0;
                    romeon = _closure1_slot2;
                    zuuluu = 11;
                    zuuluu = romeon[zuuluu];
                    zuuluu = option.bind(verify)(zuuluu);
                    verify = zuuluu.KvMessage;
                    option = verify.fromMessage;
                    zuuluu = {};
                    kiloes = michal.message;
                    sizing = zuuluu;
                    romeon = copyDataProperties(sizing, kiloes);
                    sizing = zuuluu;
                    kiloes = yankee;
                    yankee = copyDataProperties(sizing, kiloes);
                    output = verify;
                    sizing = golfie;
                    kiloes = oscard;
                    backup = zuuluu;
                    foxtra = offset;
                    zuuluu = output[option](sizing, kiloes, backup, foxtra, romeon);
                    zuuluu = tangon.bind(report)(golfie, oscard, zuuluu);
 236:
                    zuuluu = undefined;
                    return zuuluu;
 241:
                    return michal;
 244:
                    return entity;
                }
            };
            return entity;
        };
        golfie = option.bind(michal)(golfie);
        var _closure2_slot0 = golfie;
        golfie = function() { // Original name: updateOne
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        report['value'] = golfie;
        entity[15] = report;
        report = {};
        golfie = 'deleteOne';
        report['key'] = golfie;
        golfie = function(argFoo, argBar, argBaz, argCor) { // Original name: value
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 9;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.messagesTransaction;
            michal = argCor;
            oscard = zuuluu.bind(tangon)(michal);
            report = oscard.deleteMessage;
            tangon = argFoo;
            zuuluu = argBar;
            michal = argBaz;
            michal = report.bind(oscard)(tangon, zuuluu, michal);
            return entity;
        };
        report['value'] = golfie;
        entity[16] = report;
        report = {};
        golfie = 'deleteChannel';
        report['key'] = golfie;
        golfie = function(argFoo, argBar, argBaz) { // Original name: value
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 9;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.messagesTransaction;
            michal = argBaz;
            report = zuuluu.bind(tangon)(michal);
            tangon = report.deleteChannel;
            zuuluu = argFoo;
            michal = argBar;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        };
        report['value'] = golfie;
        entity[17] = report;
        report = {};
        golfie = 'deleteGuild';
        report['key'] = golfie;
        oscard = function(argFoo, argBar) { // Original name: value
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 9;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.messagesTransaction;
            michal = argBar;
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.deleteGuild;
            michal = argFoo;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        report['value'] = oscard;
        entity[18] = report;
        entity = tangon.bind(michal)(zuuluu, entity);
        return entity;
    };
    report = report.bind(entity)();
    oscard = report.prototype;
    oscard = Object.create(oscard, {constructor: {value: report}});
    backup = oscard;
    report = new backup[report](foxtra);
    report = report instanceof Object ? report : oscard;
    oscard = 13;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/app_database/modules/Messages.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['default'] = report;
    zuuluu['ChannelHistory'] = tangon;
    zuuluu['isLikelyNotDelta'] = michal;
    return entity;
})();