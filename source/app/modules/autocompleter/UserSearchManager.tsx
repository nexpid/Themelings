// app/modules/autocompleter/UserSearchManager.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = golf;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun79096: for(var _fun79096_ip = 0; ; ) switch(_fun79096_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun79096_ip = 46; continue _fun79096 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun79096_ip = 55; continue _fun79096 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun79096_ip = 345; continue _fun79096 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun79096_ip = 323; continue _fun79096 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun79096_ip = 283; continue _fun79096 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun79096_ip = 270; continue _fun79096 }
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
            if(!golf) { _fun79096_ip = 163; continue _fun79096 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun79096_ip = 179; continue _fun79096 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun79096_ip = 249; continue _fun79096 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun79096_ip = 249; continue _fun79096 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun79096_ip = 234; continue _fun79096 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun79096_ip = 247; continue _fun79096 }
 234:
            verify = _closure1_slot19;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun79096_ip = 265; continue _fun79096;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun79096_ip = 283; continue _fun79096;
 270:
            golf = _closure1_slot19;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun79096_ip = 323; continue _fun79096 }
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
            if(!tango) { _fun79096_ip = 330; continue _fun79096 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun79097: for(var _fun79097_ip = 0; ; ) switch(_fun79097_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun79097_ip = 56; continue _fun79097 }
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
                    _fun79097_ip = 67; continue _fun79097;
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
    var _closure1_slot18 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun79098: for(var _fun79098_ip = 0; ; ) switch(_fun79098_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun79098_ip = 23; continue _fun79098 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun79098_ip = 33; continue _fun79098 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun79098_ip = 70; continue _fun79098 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun79098_ip = 55; continue _fun79098 }
 70:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun79099: for(var _fun79099_ip = 0; ; ) switch(_fun79099_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot21;
            entity = entity.bind(zulu)();
            if(entity) { _fun79099_ip = 51; continue _fun79099 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun79099_ip = 92; continue _fun79099;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun79099_ip = 71; continue _fun79099 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot5;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun79100: for(var _fun79100_ip = 0; ; ) switch(_fun79100_ip) {
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
            _fun79100_ip = 76; continue _fun79100;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot21 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo) { // Original name: getTransformedUser
        _fun79103: for(var _fun79103_ip = 0; ; ) switch(_fun79103_ip) {
 0:
            zulu = argFoo;
            entity = null;
            if(!(entity != zulu)) { _fun79103_ip = 354; continue _fun79103 }
 12:
            oscar = _closure1_slot13;
            report = oscar.isBlockedOrIgnored;
            mike = zulu.id;
            mike = report.bind(oscar)(mike);
            if(mike) { _fun79103_ip = 354; continue _fun79103 }
 41:
            mike = {};
            report = zulu.id;
            mike['id'] = report;
            oscar = zulu.discriminator;
            report = '0';
            if(!(report === oscar)) { _fun79103_ip = 75; continue _fun79103 }
 68:
            report = zulu.username;
            _fun79103_ip = 114; continue _fun79103;
 75:
            offset = zulu.username;
            verify = zulu.discriminator;
            oscar = global;
            oscar = oscar.HermesInternal;
            options = oscar.concat;
            golf = '';
            oscar = '#';
            report = options.bind(golf)(offset, oscar, verify);
 114:
            mike['username'] = report;
            oscar = _closure1_slot1;
            golf = _closure1_slot3;
            report = 12;
            report = golf[report];
            golf = undefined;
            oscar = oscar.bind(golf)(report);
            report = oscar.getGlobalName;
            report = report.bind(oscar)(zulu);
            if(!(entity != report)) { _fun79103_ip = 167; continue _fun79103 }
 155:
            report = zulu.globalName;
            mike['globalName'] = report;
 167:
            report = zulu.bot;
            if(!report) { _fun79103_ip = 184; continue _fun79103 }
 176:
            report = true;
            mike['isBot'] = report;
 184:
            report = _closure1_slot10;
            report = zulu instanceof report;
            if(report) { _fun79103_ip = 283; continue _fun79103 }
 195:
            report = 'flags';
            report = report in zulu;
            if(report) { _fun79103_ip = 216; continue _fun79103 }
 206:
            report = false;
            mike['isProvisional'] = report;
            _fun79103_ip = 295; continue _fun79103;
 216:
            oscar = _closure1_slot2;
            options = _closure1_slot3;
            report = 13;
            report = options[report];
            options = oscar.bind(golf)(report);
            golf = options.hasFlag;
            report = zulu.flags;
            verify = entity != report;
            oscar = 0;
            if(!verify) { _fun79103_ip = 259; continue _fun79103 }
 256:
            oscar = report;
 259:
            report = _closure1_slot15;
            report = report.PROVISIONAL_ACCOUNT;
            report = golf.bind(options)(oscar, report);
            mike['isProvisional'] = report;
            _fun79103_ip = 295; continue _fun79103;
 283:
            report = zulu.isProvisional;
            mike['isProvisional'] = report;
 295:
            golf = _closure1_slot13;
            oscar = golf.isFriend;
            report = zulu.id;
            report = oscar.bind(golf)(report);
            if(!report) { _fun79103_ip = 352; continue _fun79103 }
 318:
            report = true;
            mike['isFriend'] = report;
            report = _closure1_slot13;
            tango = report.getNickname;
            zulu = zulu.id;
            zulu = tango.bind(report)(zulu);
            mike['friendNickname'] = zulu;
 352:
            return mike;
 354:
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: setNick
        _fun79104: for(var _fun79104_ip = 0; ; ) switch(_fun79104_ip) {
 0:
            zulu = argFoo;
            entity = argBaz;
            report = null;
            if(!(report != zulu)) { _fun79104_ip = 41; continue _fun79104 }
 12:
            tango = report != entity;
            mike = null;
            if(!tango) { _fun79104_ip = 34; continue _fun79104 }
 21:
            tango = '';
            mike = null;
            if(!(tango !== entity)) { _fun79104_ip = 34; continue _fun79104 }
 31:
            mike = entity;
 34:
            entity = argBar;
            zulu[entity] = mike;
 41:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo) { // Original name: getDMUpdates
        _fun79105: for(var _fun79105_ip = 0; ; ) switch(_fun79105_ip) {
 0:
            tango = argFoo;
            var _closure2_slot0 = tango;
            entity = new Array(0);
            var _closure2_slot1 = entity;
            zulu = null;
            if(!(zulu != tango)) { _fun79105_ip = 78; continue _fun79105 }
 23:
            oscar = _closure1_slot9;
            report = tango.type;
            zulu = undefined;
            report = oscar.bind(zulu)(report);
            if(!report) { _fun79105_ip = 78; continue _fun79105 }
 45:
            tango = tango.recipients;
            if(!(zulu === tango)) { _fun79105_ip = 59; continue _fun79105 }
 55:
            tango = new Array(0);
 59:
            zulu = tango.forEach;
            mike = function(argFoo) {
                _fun79106: for(var _fun79106_ip = 0; ; ) switch(_fun79106_ip) {
 0:
                    tango = _closure1_slot22;
                    report = _closure1_slot14;
                    mike = report.getUser;
                    entity = argFoo;
                    mike = mike.bind(report)(entity);
                    entity = undefined;
                    tango = tango.bind(entity)(mike);
                    oscar = _closure2_slot0;
                    report = null;
                    if(!(report != oscar)) { _fun79106_ip = 64; continue _fun79106 }
 45:
                    report = _closure1_slot23;
                    zulu = _closure2_slot0;
                    zulu = zulu.id;
                    zulu = report.bind(entity)(tango, zulu);
 64:
                    zulu = _closure2_slot1;
                    mike = zulu.push;
                    mike = mike.bind(zulu)(tango);
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            return entity;
 78:
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    entity = function(argFoo, argBar) { // Original name: updateMembersList
        tango = argFoo;
        entity = argBar;
        var _closure2_slot0 = entity;
        entity = new Array(0);
        var _closure2_slot1 = entity;
        zulu = tango.forEach;
        mike = function(argFoo) {
            _fun79108: for(var _fun79108_ip = 0; ; ) switch(_fun79108_ip) {
 0:
                zulu = argFoo;
                report = _closure1_slot22;
                tango = zulu.user;
                entity = undefined;
                tango = report.bind(entity)(tango);
                report = null;
                if(!(report != tango)) { _fun79108_ip = 66; continue _fun79108 }
 28:
                oscar = _closure1_slot23;
                report = _closure2_slot0;
                zulu = zulu.nick;
                zulu = oscar.bind(entity)(tango, report, zulu);
                zulu = _closure2_slot1;
                mike = zulu.push;
                mike = mike.bind(zulu)(tango);
 66:
                return entity;
            }
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot25 = entity;
    entity = global;
    verify = entity.Object;
    report = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = report.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = golf[entity];
    entity = undefined;
    mike = options.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 1;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 2;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 3;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 4;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 5;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    mike = mike.isPrivate;
    var _closure1_slot9 = mike;
    mike = 6;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot10 = mike;
    mike = 7;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot11 = mike;
    mike = 8;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot12 = mike;
    mike = 9;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot13 = mike;
    mike = 10;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot14 = mike;
    mike = 11;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    mike = mike.UserFlags;
    var _closure1_slot15 = mike;
    mike = {};
    report = 'UPDATE_USERS';
    mike['UPDATE_USERS'] = report;
    report = 'USER_RESULTS';
    mike['USER_RESULTS'] = report;
    report = 'QUERY_SET';
    mike['QUERY_SET'] = report;
    report = 'QUERY_CLEAR';
    mike['QUERY_CLEAR'] = report;
    var _closure1_slot16 = mike;
    mike = function() {
        tango = _closure1_slot8;
        zulu = function(argFoo, argBar) { // Original name: SearchContext
            _fun79110: for(var _fun79110_ip = 0; ; ) switch(_fun79110_ip) {
 0:
                mike = arguments[2];
                zulu = this;
                var _closure3_slot0 = zulu;
                entity = undefined;
                if(!(mike === entity)) { _fun79110_ip = 21; continue _fun79110 }
 18:
                mike = 10;
 21:
                golf = _closure1_slot7;
                oscar = _closure2_slot0;
                oscar = golf.bind(entity)(zulu, oscar);
                report = function(argFoo) {
                    _fun79111: for(var _fun79111_ip = 0; ; ) switch(_fun79111_ip) {
 0:
                        entity = argFoo;
                        mike = entity.data;
                        zulu = null;
                        entity = zulu != mike;
                        if(!entity) { _fun79111_ip = 39; continue _fun79111 }
 17:
                        report = mike.type;
                        tango = _closure1_slot16;
                        tango = tango.USER_RESULTS;
                        entity = report === tango;
 39:
                        if(!entity) { _fun79111_ip = 65; continue _fun79111 }
 42:
                        report = mike.uuid;
                        tango = _closure3_slot0;
                        tango = tango._uuid;
                        entity = report === tango;
 65:
                        if(!entity) { _fun79111_ip = 146; continue _fun79111 }
 68:
                        tango = _closure3_slot0;
                        report = tango._currentQuery;
                        tango = false;
                        if(!(tango !== report)) { _fun79111_ip = 108; continue _fun79111 }
 87:
                        report = _closure3_slot0;
                        tango = report._callback;
                        mike = mike.payload;
                        mike = tango.bind(report)(mike);
 108:
                        mike = _closure3_slot0;
                        mike = mike._currentQuery;
                        if(!(zulu != mike)) { _fun79111_ip = 132; continue _fun79111 }
 122:
                        mike = _closure3_slot0;
                        mike['_currentQuery'] = zulu;
 132:
                        mike = _closure3_slot0;
                        entity = mike._setNextQuery;
                        entity = entity.bind(mike)();
 146:
                        entity = undefined;
                        return entity;
                    }
                };
                zulu['handleMessages'] = report;
                report = argFoo;
                zulu['_worker'] = report;
                report = _closure1_slot0;
                oscar = _closure1_slot3;
                tango = 14;
                tango = oscar[tango];
                report = report.bind(entity)(tango);
                tango = report.v4;
                tango = tango.bind(report)();
                zulu['_uuid'] = tango;
                tango = argBar;
                zulu['_callback'] = tango;
                zulu['_limit'] = mike;
                mike = null;
                zulu['_currentQuery'] = mike;
                zulu['_nextQuery'] = mike;
                mike = false;
                zulu['_subscribed'] = mike;
                mike = zulu.subscribe;
                mike = mike.bind(zulu)();
                return entity;
            }
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'setLimit';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            _fun79112: for(var _fun79112_ip = 0; ; ) switch(_fun79112_ip) {
 0:
                mike = argFoo;
                entity = this;
                entity['_limit'] = mike;
                tango = entity._nextQuery;
                zulu = null;
                if(!(zulu != tango)) { _fun79112_ip = 36; continue _fun79112 }
 24:
                entity = entity._nextQuery;
                entity['limit'] = mike;
 36:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(7);
        mike[0] = entity;
        entity = {};
        oscar = 'subscribe';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun79113: for(var _fun79113_ip = 0; ; ) switch(_fun79113_ip) {
 0:
                mike = this;
                zulu = mike._worker;
                entity = null;
                entity = entity == zulu;
                if(entity) { _fun79113_ip = 24; continue _fun79113 }
 18:
                entity = mike._subscribed;
 24:
                if(entity) { _fun79113_ip = 76; continue _fun79113 }
 27:
                oscar = mike._worker;
                report = oscar.addEventListener;
                tango = mike.handleMessages;
                zulu = 'message';
                entity = false;
                entity = report.bind(oscar)(zulu, tango, entity);
                entity = true;
                mike['_subscribed'] = entity;
                entity = mike._setNextQuery;
                entity = entity.bind(mike)();
 76:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'unsubscribe';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun79114: for(var _fun79114_ip = 0; ; ) switch(_fun79114_ip) {
 0:
                mike = this;
                zulu = mike._worker;
                entity = null;
                entity = entity != zulu;
                if(!entity) { _fun79114_ip = 24; continue _fun79114 }
 18:
                entity = mike._subscribed;
 24:
                if(!entity) { _fun79114_ip = 64; continue _fun79114 }
 27:
                oscar = mike._worker;
                report = oscar.removeEventListener;
                tango = mike.handleMessages;
                zulu = 'message';
                entity = false;
                zulu = report.bind(oscar)(zulu, tango, entity);
                mike['_subscribed'] = entity;
 64:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'destroy';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            mike = this;
            entity = mike.clearQuery;
            entity = entity.bind(mike)();
            entity = mike.unsubscribe;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'clearQuery';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun79116: for(var _fun79116_ip = 0; ; ) switch(_fun79116_ip) {
 0:
                tango = this;
                entity = false;
                tango['_currentQuery'] = entity;
                mike = null;
                tango['_nextQuery'] = mike;
                entity = tango._worker;
                entity = mike != entity;
                if(!entity) { _fun79116_ip = 38; continue _fun79116 }
 32:
                entity = tango._subscribed;
 38:
                if(!entity) { _fun79116_ip = 88; continue _fun79116 }
 41:
                zulu = tango._worker;
                mike = zulu.postMessage;
                entity = {};
                tango = tango._uuid;
                entity['uuid'] = tango;
                tango = _closure1_slot16;
                tango = tango.QUERY_CLEAR;
                entity['type'] = tango;
                entity = mike.bind(zulu)(entity);
 88:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'setQuery';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz, argCorge) { // Original name: value
            _fun79117: for(var _fun79117_ip = 0; ; ) switch(_fun79117_ip) {
 0:
                report = argFoo;
                zulu = argCorge;
                mike = this;
                tango = null;
                if(!(tango != report)) { _fun79117_ip = 75; continue _fun79117 }
 15:
                entity = {};
                entity['query'] = report;
                report = argBar;
                entity['filters'] = report;
                report = argBaz;
                entity['blacklist'] = report;
                if(!(tango == zulu)) { _fun79117_ip = 43; continue _fun79117 }
 41:
                zulu = {};
 43:
                entity['boosters'] = zulu;
                zulu = mike._limit;
                entity['limit'] = zulu;
                mike['_nextQuery'] = entity;
                entity = mike._setNextQuery;
                entity = entity.bind(mike)();
 75:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = '_setNextQuery';
        entity['key'] = oscar;
        report = function() { // Original name: value
            _fun79118: for(var _fun79118_ip = 0; ; ) switch(_fun79118_ip) {
 0:
                tango = this;
                mike = tango._currentQuery;
                entity = null;
                mike = entity != mike;
                if(!mike) { _fun79118_ip = 30; continue _fun79118 }
 18:
                report = tango._currentQuery;
                zulu = false;
                mike = zulu !== report;
 30:
                if(mike) { _fun79118_ip = 43; continue _fun79118 }
 33:
                zulu = tango._nextQuery;
                mike = entity == zulu;
 43:
                if(mike) { _fun79118_ip = 162; continue _fun79118 }
 46:
                mike = tango._worker;
                if(!(entity != mike)) { _fun79118_ip = 65; continue _fun79118 }
 56:
                mike = tango._subscribed;
                if(mike) { _fun79118_ip = 86; continue _fun79118 }
 65:
                mike = tango._subscribed;
                if(mike) { _fun79118_ip = 162; continue _fun79118 }
 74:
                mike = tango.subscribe;
                mike = mike.bind(tango)();
                _fun79118_ip = 162; continue _fun79118;
 86:
                mike = tango._nextQuery;
                tango['_currentQuery'] = mike;
                tango['_nextQuery'] = entity;
                zulu = tango._worker;
                mike = zulu.postMessage;
                entity = {};
                report = tango._uuid;
                entity['uuid'] = report;
                report = _closure1_slot16;
                report = report.QUERY_SET;
                entity['type'] = report;
                tango = tango._currentQuery;
                entity['payload'] = tango;
                entity = mike.bind(zulu)(entity);
 162:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = report;
        mike[6] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    var _closure1_slot17 = mike;
    report = 20;
    report = golf[report];
    report = options.bind(entity)(report);
    tango = function(argFoo) {
        tango = function(argFoo) { // Original name: UserSearchManager
            oscar = this;
            yankee = 0;
            golf = copyRestArgs(yankee);
            zulu = _closure1_slot7;
            report = _closure2_slot0;
            tango = undefined;
            zulu = zulu.bind(tango)(oscar, report);
            zulu = _closure1_slot20;
            entity = new Array(0);
            yankee = entity;
            offset = golf;
            verify = 0;
            golf = arraySpread(yankee, offset, verify);
            entity = zulu.bind(tango)(oscar, report, entity);
            var _closure3_slot0 = entity;
            zulu = {};
            tango = function() { // Original name: LOGOUT
                mike = _closure3_slot0;
                entity = mike._handleLogout;
                entity = entity.bind(mike)();
                return entity;
            };
            zulu['LOGOUT'] = tango;
            tango = function() { // Original name: POST_CONNECTION_OPEN
                mike = _closure3_slot0;
                entity = mike._handleConnectionOpen;
                entity = entity.bind(mike)();
                return entity;
            };
            zulu['POST_CONNECTION_OPEN'] = tango;
            tango = function(argFoo) { // Original name: CONNECTION_OPEN_SUPPLEMENTAL
                zulu = _closure3_slot0;
                mike = zulu._handleConnectionOpenSupplemental;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu['CONNECTION_OPEN_SUPPLEMENTAL'] = tango;
            tango = function(argFoo) { // Original name: OVERLAY_INITIALIZE
                zulu = _closure3_slot0;
                mike = zulu._handleOverlayInitialize;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu['OVERLAY_INITIALIZE'] = tango;
            tango = function(argFoo) { // Original name: CURRENT_USER_UPDATE
                zulu = _closure3_slot0;
                mike = zulu._handleCurrentUserUpdate;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu['CURRENT_USER_UPDATE'] = tango;
            tango = function(argFoo) { // Original name: GUILD_CREATE
                zulu = _closure3_slot0;
                mike = zulu._handleGuildCreate;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu['GUILD_CREATE'] = tango;
            tango = function(argFoo) { // Original name: GUILD_MEMBERS_CHUNK_BATCH
                zulu = _closure3_slot0;
                mike = zulu._handleGuildMembersChunkBatch;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu['GUILD_MEMBERS_CHUNK_BATCH'] = tango;
            tango = function(argFoo) { // Original name: GUILD_MEMBER_ADD
                zulu = _closure3_slot0;
                mike = zulu._handleGuildMemberUpdate;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu['GUILD_MEMBER_ADD'] = tango;
            tango = function(argFoo) { // Original name: GUILD_MEMBER_UPDATE
                zulu = _closure3_slot0;
                mike = zulu._handleGuildMemberUpdate;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu['GUILD_MEMBER_UPDATE'] = tango;
            tango = function(argFoo) { // Original name: RELATIONSHIP_ADD
                zulu = _closure3_slot0;
                mike = zulu._handleRelationshipAdd;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu['RELATIONSHIP_ADD'] = tango;
            tango = function(argFoo) { // Original name: RELATIONSHIP_UPDATE
                zulu = _closure3_slot0;
                mike = zulu._handleRelationshipUpdate;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu['RELATIONSHIP_UPDATE'] = tango;
            tango = function(argFoo) { // Original name: RELATIONSHIP_REMOVE
                zulu = _closure3_slot0;
                mike = zulu._handleRelationshipRemove;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu['RELATIONSHIP_REMOVE'] = tango;
            tango = function(argFoo) { // Original name: CHANNEL_CREATE
                zulu = _closure3_slot0;
                mike = zulu._handleDMCreate;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu['CHANNEL_CREATE'] = tango;
            tango = function(argFoo) { // Original name: CHANNEL_UPDATES
                zulu = _closure3_slot0;
                mike = zulu._handleDMUpdates;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu['CHANNEL_UPDATES'] = tango;
            tango = function(argFoo) { // Original name: CHANNEL_RECIPIENT_ADD
                zulu = _closure3_slot0;
                mike = zulu._handleRecipientChanges;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu['CHANNEL_RECIPIENT_ADD'] = tango;
            tango = function(argFoo) { // Original name: PASSIVE_UPDATE_V2
                zulu = _closure3_slot0;
                mike = zulu._handlePassiveUpdateV2;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu['PASSIVE_UPDATE_V2'] = tango;
            entity['actions'] = zulu;
            zulu = function() {
                mike = _closure3_slot0;
                entity = mike.rebootWebworker;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            };
            entity['_handleLogout'] = zulu;
            zulu = function() {
                entity = global;
                tango = entity.setTimeout;
                entity = undefined;
                zulu = function() {
                    _fun79139: for(var _fun79139_ip = 0; ; ) switch(_fun79139_ip) {
 0:
                        zulu = _closure1_slot14;
                        entity = zulu.getCurrentUser;
                        zulu = entity.bind(zulu)();
                        control = null;
                        if(!(control != zulu)) { _fun79139_ip = 391; continue _fun79139 }
 27:
                        entity = _closure1_slot22;
                        source = undefined;
                        zulu = entity.bind(source)(zulu);
                        report = {};
                        entity = zulu.id;
                        report[entity] = zulu;
                        var _closure5_slot0 = report;
                        entity = global;
                        oscar = entity.Object;
                        tango = oscar.values;
                        golf = _closure1_slot14;
                        zulu = golf.getUsers;
                        zulu = zulu.bind(golf)();
                        tango = tango.bind(oscar)(zulu);
                        zulu = tango.forEach;
                        mike = function(argFoo) {
                            report = argFoo;
                            tango = _closure5_slot0;
                            zulu = report.id;
                            mike = _closure1_slot22;
                            entity = undefined;
                            mike = mike.bind(entity)(report);
                            tango[zulu] = mike;
                            return entity;
                        };
                        mike = zulu.bind(tango)(mike);
                        zulu = _closure1_slot12;
                        mike = zulu.getMutableAllGuildsAndMembers;
                        update = mike.bind(zulu)();
                        result = update;
                        backup = '';
                        foxtrot = 12;
                        context = undefined;
                        record = undefined;
                        config = undefined;
                        sequence = undefined;
                        for(kilo in result)
 146:
                        {
                            oscar = context;
                            tango = record;
                            zulu = config;
                            mike = sequence;
 170:
                            romeo = kilo;
                            offset = update[romeo];
                            context = oscar;
                            record = tango;
                            config = zulu;
                            sequence = mike;
                            oscar = context;
                            tango = record;
                            zulu = config;
                            mike = sequence;
                            ForInLoopInit(obj_props_register=10, obj_register=9, iter_index_register=8, iter_size_register=7);
                            if(yankee === undefined) { _fun79139_ip = 146; continue _fun79139 }
 209:
                            context = oscar;
                            record = tango;
                            config = zulu;
                            sequence = mike;
                            ForInLoopNextIter(next_value_register=6, obj_props_register=10, obj_register=9, iter_index_register=8, iter_size_register=7);
                            if(golf === undefined) { _fun79139_ip = 146; continue _fun79139 }
 230:
                            record = golf;
                            config = report[record];
                            sequence = update[romeo];
                            record = sequence[record];
                            sequence = control == record;
                            context = undefined;
                            if(sequence) { _fun79139_ip = 260; continue _fun79139 }
 254:
                            context = record.nick;
 260:
                            sequence = context;
                            if(!(control == sequence)) { _fun79139_ip = 295; continue _fun79139 }
 267:
                            target = _closure1_slot1;
                            papa = _closure1_slot3;
                            papa = papa[foxtrot];
                            target = target.bind(source)(papa);
                            papa = target.getGlobalName;
                            sequence = papa.bind(target)(config);
 295:
                            oscar = context;
                            tango = record;
                            zulu = config;
                            mike = sequence;
                            if(control == config) { _fun79139_ip = 209; continue _fun79139 }
 311:
                            target = control != sequence;
                            papa = null;
                            if(!target) { _fun79139_ip = 329; continue _fun79139 }
 320:
                            papa = null;
                            if(!(backup !== sequence)) { _fun79139_ip = 329; continue _fun79139 }
 326:
                            papa = sequence;
 329:
                            config[romeo] = papa;
                            oscar = context;
                            tango = record;
                            zulu = config;
                            mike = sequence;
                            _fun79139_ip = 209; continue _fun79139;
                        }
 350:
                        tango = _closure3_slot0;
                        zulu = tango.updateUsers;
                        mike = entity.Object;
                        entity = mike.values;
                        mike = entity.bind(mike)(report);
                        entity = 'connection_open';
                        entity = zulu.bind(tango)(mike, entity);
 391:
                        entity = undefined;
                        return entity;
                    }
                };
                mike = 3000;
                mike = tango.bind(entity)(zulu, mike);
                return entity;
            };
            entity['_handleConnectionOpen'] = zulu;
            zulu = function(argFoo) {
                entity = argFoo;
                entity = entity.guilds;
                var _closure4_slot0 = entity;
                entity = global;
                tango = entity.setTimeout;
                entity = undefined;
                zulu = function() {
                    tango = _closure1_slot1;
                    oscar = _closure1_slot3;
                    zulu = 15;
                    report = oscar[zulu];
                    entity = undefined;
                    verify = tango.bind(entity)(report);
                    options = verify.flatMap;
                    report = _closure4_slot0;
                    golf = function(argFoo) {
                        entity = argFoo;
                        tango = _closure1_slot25;
                        zulu = entity.members;
                        mike = entity.id;
                        entity = undefined;
                        entity = tango.bind(entity)(zulu, mike);
                        return entity;
                    };
                    golf = options.bind(verify)(report, golf);
                    zulu = oscar[zulu];
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.flatMap;
                    mike = function(argFoo) {
                        _fun79144: for(var _fun79144_ip = 0; ; ) switch(_fun79144_ip) {
 0:
                            zulu = argFoo;
                            var _closure6_slot0 = zulu;
                            entity = new Array(0);
                            var _closure6_slot1 = entity;
                            tango = zulu.activity_instances;
                            zulu = null;
                            if(!(zulu != tango)) { _fun79144_ip = 46; continue _fun79144 }
 29:
                            zulu = tango.forEach;
                            mike = function(argFoo) {
                                entity = argFoo;
                                zulu = entity.participants;
                                mike = zulu.forEach;
                                entity = function(argFoo) {
                                    _fun79146: for(var _fun79146_ip = 0; ; ) switch(_fun79146_ip) {
 0:
                                        entity = argFoo;
                                        mike = entity.member;
                                        tango = null;
                                        if(!(tango != mike)) { _fun79146_ip = 81; continue _fun79146 }
 15:
                                        report = _closure1_slot22;
                                        zulu = mike.user;
                                        oscar = undefined;
                                        zulu = report.bind(oscar)(zulu);
                                        if(!(tango != zulu)) { _fun79146_ip = 81; continue _fun79146 }
 38:
                                        report = _closure1_slot23;
                                        tango = _closure6_slot0;
                                        tango = tango.id;
                                        mike = mike.nick;
                                        mike = report.bind(oscar)(zulu, tango, mike);
                                        mike = _closure6_slot1;
                                        entity = mike.push;
                                        entity = entity.bind(mike)(zulu);
 81:
                                        entity = undefined;
                                        return entity;
                                    }
                                };
                                entity = mike.bind(zulu)(entity);
                                entity = undefined;
                                return entity;
                            };
                            mike = zulu.bind(tango)(mike);
 46:
                            return entity;
                        }
                    };
                    oscar = zulu.bind(tango)(report, mike);
                    report = _closure3_slot0;
                    tango = report.updateUsers;
                    zulu = new Array(0);
                    offset = 0;
                    romeo = zulu;
                    yankee = golf;
                    offset = arraySpread(romeo, yankee, offset);
                    romeo = zulu;
                    yankee = oscar;
                    mike = arraySpread(romeo, yankee, offset);
                    mike = 'connection_open_supplemental';
                    mike = tango.bind(report)(zulu, mike);
                    return entity;
                };
                mike = 3000;
                mike = tango.bind(entity)(zulu, mike);
                return entity;
            };
            entity['_handleConnectionOpenSupplemental'] = zulu;
            zulu = function(argFoo) {
                _fun79147: for(var _fun79147_ip = 0; ; ) switch(_fun79147_ip) {
 0:
                    entity = argFoo;
                    report = entity.users;
                    kilo = entity.guildMembers;
                    mike = global;
                    entity = mike.Map;
                    zulu = entity.prototype;
                    zulu = Object.create(zulu, {constructor: {value: entity}});
                    status = zulu;
                    entity = new status[entity](target);
                    zulu = entity instanceof Object ? entity : zulu;
                    tango = _closure1_slot18;
                    entity = undefined;
                    oscar = tango.bind(entity)(report);
                    report = oscar.bind(entity)();
                    tango = report.done;
                    if(tango) { _fun79147_ip = 114; continue _fun79147 }
 69:
                    verify = report.value;
                    options = zulu.set;
                    golf = verify.id;
                    tango = _closure1_slot22;
                    tango = tango.bind(entity)(verify);
                    tango = options.bind(zulu)(golf, tango);
                    golf = oscar.bind(entity)();
                    tango = golf.done;
                    report = golf;
                    if(!tango) { _fun79147_ip = 69; continue _fun79147 }
 114:
                    report = _closure1_slot18;
                    oscar = _closure1_slot1;
                    tango = _closure1_slot3;
                    foxtrot = 16;
                    tango = tango[foxtrot];
                    oscar = oscar.bind(entity)(tango);
                    tango = oscar.keys;
                    tango = tango.bind(oscar)(kilo);
                    romeo = report.bind(entity)(tango);
                    report = romeo.bind(entity)();
                    tango = report.done;
                    yankee = null;
                    offset = report;
                    verify = undefined;
                    options = undefined;
                    golf = undefined;
                    oscar = undefined;
                    report = undefined;
                    if(tango) { _fun79147_ip = 405; continue _fun79147 }
 183:
                    control = offset.value;
                    source = kilo[control];
                    result = golf;
                    output = oscar;
                    sizing = report;
                    if(!(yankee != source)) { _fun79147_ip = 378; continue _fun79147 }
 208:
                    echo = _closure1_slot18;
                    update = _closure1_slot1;
                    tango = _closure1_slot3;
                    tango = tango[foxtrot];
                    update = update.bind(entity)(tango);
                    tango = update.keys;
                    tango = tango.bind(update)(source);
                    update = echo.bind(entity)(tango);
                    vacuum = update.bind(entity)();
                    tango = vacuum.done;
                    echo = vacuum;
                    verify = echo;
                    options = update;
                    result = golf;
                    output = oscar;
                    sizing = report;
                    if(tango) { _fun79147_ip = 378; continue _fun79147 }
 274:
                    config = echo.value;
                    tango = zulu.get;
                    sequence = tango.bind(zulu)(config);
                    vacuum = source[config];
                    tango = yankee != sequence;
                    if(!tango) { _fun79147_ip = 304; continue _fun79147 }
 300:
                    tango = yankee != vacuum;
 304:
                    if(!tango) { _fun79147_ip = 317; continue _fun79147 }
 307:
                    record = vacuum.nick;
                    tango = yankee != record;
 317:
                    if(!tango) { _fun79147_ip = 348; continue _fun79147 }
 320:
                    record = _closure1_slot23;
                    tango = vacuum.nick;
                    tango = record.bind(entity)(sequence, control, tango);
                    tango = zulu.set;
                    tango = tango.bind(zulu)(config, sequence);
 348:
                    record = update.bind(entity)();
                    tango = record.done;
                    echo = record;
                    verify = echo;
                    options = update;
                    result = config;
                    output = sequence;
                    sizing = vacuum;
                    if(!tango) { _fun79147_ip = 274; continue _fun79147 }
 378:
                    echo = romeo.bind(entity)();
                    tango = echo.done;
                    golf = result;
                    oscar = output;
                    report = sizing;
                    offset = echo;
                    if(!tango) { _fun79147_ip = 183; continue _fun79147 }
 405:
                    oscar = _closure3_slot0;
                    report = oscar.updateUsers;
                    golf = mike.Array;
                    tango = golf.from;
                    mike = zulu.values;
                    mike = mike.bind(zulu)();
                    tango = tango.bind(golf)(mike);
                    mike = 'overlay_initialize';
                    mike = report.bind(oscar)(tango, mike);
                    mike = zulu.clear;
                    mike = mike.bind(zulu)();
                    return entity;
                }
            };
            entity['_handleOverlayInitialize'] = zulu;
            zulu = function(argFoo) {
                _fun79148: for(var _fun79148_ip = 0; ; ) switch(_fun79148_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.user;
                    mike = _closure1_slot22;
                    entity = undefined;
                    mike = mike.bind(entity)(zulu);
                    zulu = null;
                    if(!(zulu != mike)) { _fun79148_ip = 61; continue _fun79148 }
 28:
                    report = _closure3_slot0;
                    tango = report.updateUsers;
                    zulu = new Array(1);
                    zulu[0] = mike;
                    mike = 'current_user_update';
                    mike = tango.bind(report)(zulu, mike);
 61:
                    return entity;
                }
            };
            entity['_handleCurrentUserUpdate'] = zulu;
            zulu = function(argFoo) {
                entity = argFoo;
                entity = entity.guild;
                oscar = entity.members;
                report = _closure3_slot0;
                tango = report.updateUsers;
                zulu = _closure1_slot25;
                mike = entity.id;
                entity = undefined;
                zulu = zulu.bind(entity)(oscar, mike);
                mike = 'guild_create';
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            entity['_handleGuildCreate'] = zulu;
            zulu = function(argFoo) {
                _fun79150: for(var _fun79150_ip = 0; ; ) switch(_fun79150_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.chunks;
                    report = new Array(0);
                    mike = _closure1_slot18;
                    entity = undefined;
                    oscar = mike.bind(entity)(zulu);
                    zulu = oscar.bind(entity)();
                    mike = zulu.done;
                    if(mike) { _fun79150_ip = 111; continue _fun79150 }
 39:
                    mike = zulu.value;
                    options = report.push;
                    offset = _closure1_slot25;
                    verify = mike.members;
                    mike = mike.guildId;
                    romeo = offset.bind(entity)(verify, mike);
                    mike = new Array(0);
                    foxtrot = mike;
                    yankee = 0;
                    verify = arraySpread(foxtrot, romeo, yankee);
                    foxtrot = options;
                    romeo = mike;
                    yankee = report;
                    mike = apply(foxtrot, romeo, yankee);
                    options = oscar.bind(entity)();
                    mike = options.done;
                    zulu = options;
                    if(!mike) { _fun79150_ip = 39; continue _fun79150 }
 111:
                    tango = _closure3_slot0;
                    zulu = tango.updateUsers;
                    mike = 'guild_members_chunk_batch';
                    mike = zulu.bind(tango)(report, mike);
                    return entity;
                }
            };
            entity['_handleGuildMembersChunkBatch'] = zulu;
            zulu = function(argFoo) {
                _fun79151: for(var _fun79151_ip = 0; ; ) switch(_fun79151_ip) {
 0:
                    entity = argFoo;
                    report = entity.guildId;
                    oscar = entity.user;
                    tango = entity.nick;
                    mike = _closure1_slot22;
                    entity = undefined;
                    mike = mike.bind(entity)(oscar);
                    oscar = null;
                    if(!(oscar != mike)) { _fun79151_ip = 83; continue _fun79151 }
 39:
                    zulu = _closure1_slot23;
                    zulu = zulu.bind(entity)(mike, report, tango);
                    report = _closure3_slot0;
                    tango = report.updateUsers;
                    zulu = new Array(1);
                    zulu[0] = mike;
                    mike = 'guild_member_update';
                    mike = tango.bind(report)(zulu, mike);
 83:
                    return entity;
                }
            };
            entity['_handleGuildMemberUpdate'] = zulu;
            zulu = function(argFoo) {
                entity = argFoo;
                report = _closure3_slot0;
                tango = report.updateUsers;
                oscar = _closure1_slot25;
                zulu = entity.members;
                mike = entity.guildId;
                entity = undefined;
                zulu = oscar.bind(entity)(zulu, mike);
                mike = 'passive_update_v2';
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            entity['_handlePassiveUpdateV2'] = zulu;
            zulu = function(argFoo) {
                zulu = _closure1_slot22;
                entity = argFoo;
                entity = entity.relationship;
                mike = entity.user;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                report = _closure3_slot0;
                tango = report.updateUsers;
                zulu = new Array(1);
                zulu[0] = mike;
                mike = 'relationship_add';
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            entity['_handleRelationshipAdd'] = zulu;
            zulu = function(argFoo) {
                zulu = _closure1_slot22;
                tango = _closure1_slot14;
                mike = tango.getUser;
                entity = argFoo;
                entity = entity.relationship;
                entity = entity.id;
                mike = mike.bind(tango)(entity);
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                report = _closure3_slot0;
                tango = report.updateUsers;
                zulu = new Array(1);
                zulu[0] = mike;
                mike = 'relationship_update';
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            entity['_handleRelationshipUpdate'] = zulu;
            zulu = function(argFoo) {
                zulu = _closure1_slot22;
                tango = _closure1_slot14;
                mike = tango.getUser;
                entity = argFoo;
                entity = entity.relationship;
                entity = entity.id;
                mike = mike.bind(tango)(entity);
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                report = _closure3_slot0;
                tango = report.updateUsers;
                zulu = new Array(1);
                zulu[0] = mike;
                mike = 'relationship_remove';
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            entity['_handleRelationshipRemove'] = zulu;
            zulu = function(argFoo) {
                _fun79156: for(var _fun79156_ip = 0; ; ) switch(_fun79156_ip) {
 0:
                    entity = argFoo;
                    entity = entity.channel;
                    tango = entity.id;
                    report = _closure1_slot24;
                    zulu = _closure1_slot11;
                    entity = zulu.getChannel;
                    zulu = entity.bind(zulu)(tango);
                    entity = undefined;
                    report = report.bind(entity)(zulu);
                    oscar = report.length;
                    zulu = 0;
                    if(!(zulu !== oscar)) { _fun79156_ip = 119; continue _fun79156 }
 52:
                    oscar = _closure1_slot22;
                    golf = _closure1_slot14;
                    zulu = golf.getCurrentUser;
                    zulu = zulu.bind(golf)();
                    zulu = oscar.bind(entity)(zulu);
                    mike = _closure1_slot23;
                    mike = mike.bind(entity)(zulu, tango);
                    mike = report.push;
                    mike = mike.bind(report)(zulu);
                    tango = _closure3_slot0;
                    zulu = tango.updateUsers;
                    mike = 'dm_create';
                    mike = zulu.bind(tango)(report, mike);
 119:
                    return entity;
                }
            };
            entity['_handleDMCreate'] = zulu;
            zulu = function(argFoo) {
                _fun79157: for(var _fun79157_ip = 0; ; ) switch(_fun79157_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.channels;
                    mike = _closure1_slot18;
                    entity = undefined;
                    golf = mike.bind(entity)(zulu);
                    zulu = golf.bind(entity)();
                    mike = zulu.done;
                    report = 'dm_updates';
                    tango = 0;
                    if(mike) { _fun79157_ip = 166; continue _fun79157 }
 46:
                    mike = zulu.value;
                    offset = _closure1_slot24;
                    romeo = _closure1_slot11;
                    yankee = romeo.getChannel;
                    verify = mike.id;
                    verify = yankee.bind(romeo)(verify);
                    offset = offset.bind(entity)(verify);
                    verify = offset.length;
                    if(!(tango !== verify)) { _fun79157_ip = 151; continue _fun79157 }
 88:
                    yankee = _closure1_slot22;
                    romeo = _closure1_slot14;
                    verify = romeo.getCurrentUser;
                    verify = verify.bind(romeo)();
                    verify = yankee.bind(entity)(verify);
                    yankee = _closure1_slot23;
                    mike = mike.id;
                    mike = yankee.bind(entity)(verify, mike);
                    mike = offset.push;
                    mike = mike.bind(offset)(verify);
                    verify = _closure3_slot0;
                    mike = verify.updateUsers;
                    mike = mike.bind(verify)(offset, report);
 151:
                    verify = golf.bind(entity)();
                    mike = verify.done;
                    zulu = verify;
                    if(!mike) { _fun79157_ip = 46; continue _fun79157 }
 166:
                    return entity;
                }
            };
            entity['_handleDMUpdates'] = zulu;
            mike = function(argFoo) {
                _fun79158: for(var _fun79158_ip = 0; ; ) switch(_fun79158_ip) {
 0:
                    entity = argFoo;
                    tango = entity.channelId;
                    report = entity.user;
                    entity = entity.isMember;
                    if(!entity) { _fun79158_ip = 79; continue _fun79158 }
 22:
                    entity = _closure1_slot22;
                    zulu = undefined;
                    entity = entity.bind(zulu)(report);
                    mike = _closure1_slot23;
                    mike = mike.bind(zulu)(entity, tango);
                    tango = _closure3_slot0;
                    zulu = tango.updateUsers;
                    mike = new Array(1);
                    mike[0] = entity;
                    entity = 'recipient_changes';
                    entity = zulu.bind(tango)(mike, entity);
 79:
                    entity = undefined;
                    return entity;
                }
            };
            entity['_handleRecipientChanges'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot6;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot8;
        report = {};
        entity = '_initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            mike = this;
            entity = mike.rebootWebworker;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(5);
        entity[0] = report;
        report = {};
        golf = '_terminate';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun79160: for(var _fun79160_ip = 0; ; ) switch(_fun79160_ip) {
 0:
                mike = this;
                zulu = mike._worker;
                entity = null;
                if(!(entity != zulu)) { _fun79160_ip = 37; continue _fun79160 }
 15:
                tango = mike._worker;
                zulu = tango.terminate;
                zulu = zulu.bind(tango)();
                mike['_worker'] = entity;
 37:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'rebootWebworker';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun79161: for(var _fun79161_ip = 0; ; ) switch(_fun79161_ip) {
 0:
                zulu = this;
                mike = zulu._worker;
                entity = null;
                if(!(entity != mike)) { _fun79161_ip = 37; continue _fun79161 }
 15:
                tango = zulu._worker;
                mike = tango.terminate;
                mike = mike.bind(tango)();
                zulu['_worker'] = entity;
 37:
                tango = _closure1_slot0;
                mike = _closure1_slot3;
                entity = 17;
                mike = mike[entity];
                entity = undefined;
                mike = tango.bind(entity)(mike);
                zulu['_worker'] = mike;
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'updateUsers';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun79162: for(var _fun79162_ip = 0; ; ) switch(_fun79162_ip) {
 0:
                oscar = argFoo;
                offset = argBar;
                entity = this;
                zulu = entity._worker;
                verify = null;
                if(!(verify != zulu)) { _fun79162_ip = 388; continue _fun79162 }
 24:
                entity = _closure1_slot18;
                tango = oscar.filter;
                golf = _closure1_slot0;
                options = _closure1_slot3;
                mike = 18;
                mike = options[mike];
                options = undefined;
                mike = golf.bind(options)(mike);
                mike = mike.isNotNullish;
                tango = tango.bind(oscar)(mike);
                golf = entity.bind(options)(tango);
                mike = golf.bind(options)();
                entity = mike.done;
                oscar = 19;
                if(entity) { _fun79162_ip = 356; continue _fun79162 }
 92:
                sizing = mike.value;
                yankee = verify == sizing;
                entity = undefined;
                if(yankee) { _fun79162_ip = 111; continue _fun79162 }
 106:
                entity = sizing.id;
 111:
                if(!(verify == entity)) { _fun79162_ip = 338; continue _fun79162 }
 118:
                yankee = _closure1_slot1;
                entity = _closure1_slot3;
                entity = entity[oscar];
                romeo = yankee.bind(options)(entity);
                yankee = romeo.addBreadcrumb;
                entity = {'category': 'debug', 'message': 'User missing id'};
                foxtrot = {};
                foxtrot['action'] = offset;
                backup = {};
                kilo = verify == sizing;
                backup['userIsNull'] = kilo;
                output = verify == sizing;
                kilo = undefined;
                if(output) { _fun79162_ip = 188; continue _fun79162 }
 183:
                kilo = sizing.id;
 188:
                kilo = verify == kilo;
                backup['idIsNull'] = kilo;
                output = verify == sizing;
                kilo = undefined;
                if(output) { _fun79162_ip = 213; continue _fun79162 }
 208:
                kilo = sizing.username;
 213:
                kilo = verify == kilo;
                backup['usernameIsNull'] = kilo;
                output = verify == sizing;
                kilo = undefined;
                if(output) { _fun79162_ip = 239; continue _fun79162 }
 233:
                kilo = sizing.isBot;
 239:
                backup['isBot'] = kilo;
                output = verify == sizing;
                kilo = undefined;
                if(output) { _fun79162_ip = 259; continue _fun79162 }
 253:
                kilo = sizing.isFriend;
 259:
                backup['isFriend'] = kilo;
                output = verify == sizing;
                kilo = undefined;
                if(output) { _fun79162_ip = 279; continue _fun79162 }
 273:
                kilo = sizing.isProvisional;
 279:
                backup['isProvisional'] = kilo;
                output = verify == sizing;
                kilo = undefined;
                if(output) { _fun79162_ip = 299; continue _fun79162 }
 293:
                kilo = sizing.globalName;
 299:
                kilo = verify == kilo;
                backup['globalNameIsNull'] = kilo;
                kilo = tango.length;
                backup['usersArrayLength'] = kilo;
                foxtrot['userFields'] = backup;
                entity['data'] = foxtrot;
                entity = yankee.bind(romeo)(entity);
 338:
                yankee = golf.bind(options)();
                entity = yankee.done;
                mike = yankee;
                if(!entity) { _fun79162_ip = 92; continue _fun79162 }
 356:
                mike = zulu.postMessage;
                entity = {};
                report = _closure1_slot16;
                report = report.UPDATE_USERS;
                entity['type'] = report;
                entity['payload'] = tango;
                entity = mike.bind(zulu)(entity);
 388:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getSearchContext';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun79163: for(var _fun79163_ip = 0; ; ) switch(_fun79163_ip) {
 0:
                report = arguments[1];
                entity = this;
                mike = undefined;
                if(!(report === mike)) { _fun79163_ip = 15; continue _fun79163 }
 12:
                report = 10;
 15:
                mike = entity.initialize;
                mike = mike.bind(entity)();
                tango = entity._worker;
                entity = null;
                if(!(entity != tango)) { _fun79163_ip = 75; continue _fun79163 }
 37:
                zulu = _closure1_slot17;
                entity = zulu.prototype;
                mike = Object.create(entity, {constructor: {value: zulu}});
                golf = argFoo;
                verify = mike;
                options = tango;
                oscar = report;
                entity = new verify[zulu](options, golf, oscar, report);
                entity = entity instanceof Object ? entity : mike;
                return entity;
 75:
                entity = global;
                zulu = entity.Error;
                entity = zulu.prototype;
                mike = Object.create(entity, {constructor: {value: zulu}});
                options = 'SearchContextManager: No webworker initialized';
                verify = mike;
                entity = new verify[zulu](options, golf);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
            }
        };
        report['value'] = oscar;
        entity[4] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    tango = tango.bind(entity)(report);
    report = tango.prototype;
    report = Object.create(report, {constructor: {value: tango}});
    foxtrot = report;
    tango = new foxtrot[tango](romeo);
    tango = tango instanceof Object ? tango : report;
    report = 21;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/autocompleter/UserSearchManager.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['SearchContext'] = mike;
    return entity;
})();