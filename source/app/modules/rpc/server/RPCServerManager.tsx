// app/modules/rpc/server/RPCServerManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun109451: for(var _fun109451_ip = 0; ; ) switch(_fun109451_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun109451_ip = 46; continue _fun109451 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun109451_ip = 55; continue _fun109451 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun109451_ip = 345; continue _fun109451 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun109451_ip = 323; continue _fun109451 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun109451_ip = 283; continue _fun109451 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun109451_ip = 270; continue _fun109451 }
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
            if(!golf) { _fun109451_ip = 163; continue _fun109451 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun109451_ip = 179; continue _fun109451 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun109451_ip = 249; continue _fun109451 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun109451_ip = 249; continue _fun109451 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun109451_ip = 234; continue _fun109451 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun109451_ip = 247; continue _fun109451 }
 234:
            verify = _closure1_slot25;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun109451_ip = 265; continue _fun109451;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun109451_ip = 283; continue _fun109451;
 270:
            golf = _closure1_slot25;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun109451_ip = 323; continue _fun109451 }
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
            if(!tango) { _fun109451_ip = 330; continue _fun109451 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun109452: for(var _fun109452_ip = 0; ; ) switch(_fun109452_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun109452_ip = 56; continue _fun109452 }
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
                    _fun109452_ip = 67; continue _fun109452;
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
    var _closure1_slot24 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun109453: for(var _fun109453_ip = 0; ; ) switch(_fun109453_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun109453_ip = 23; continue _fun109453 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun109453_ip = 33; continue _fun109453 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun109453_ip = 70; continue _fun109453 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun109453_ip = 55; continue _fun109453 }
 70:
            return entity;
        }
    };
    var _closure1_slot25 = entity;
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
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot11 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot12 = tango;
    tango = 10;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot13 = tango;
    tango = 11;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot14 = tango;
    tango = 12;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot15 = tango;
    tango = 13;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot16 = tango;
    tango = 14;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.ActivityActionTypes;
    var _closure1_slot17 = golf;
    golf = tango.RelationshipTypes;
    var _closure1_slot18 = golf;
    golf = tango.AnalyticEvents;
    var _closure1_slot19 = golf;
    golf = tango.RPCEvents;
    var _closure1_slot20 = golf;
    tango = tango.RPCCloseCodes;
    var _closure1_slot21 = tango;
    tango = 15;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ActivityLayoutMode;
    var _closure1_slot22 = tango;
    tango = 16;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.MediaEngineContextTypes;
    var _closure1_slot23 = tango;
    mike = function() {
        tango = _closure1_slot6;
        zulu = function(argFoo) { // Original name: RPCServerManager
            mike = argFoo;
            zulu = this;
            var _closure3_slot0 = zulu;
            var _closure3_slot1 = zulu;
            oscar = _closure1_slot5;
            report = _closure2_slot0;
            entity = undefined;
            report = oscar.bind(entity)(zulu, report);
            report = function(argFoo) {
                _fun109456: for(var _fun109456_ip = 0; ; ) switch(_fun109456_ip) {
 0:
                    mike = argFoo;
                    zulu = _closure3_slot0;
                    zulu = zulu.rpcServer;
                    zulu = zulu.subscriptions;
                    tango = zulu.length;
                    zulu = 0;
                    if(!(zulu !== tango)) { _fun109456_ip = 397; continue _fun109456 }
 36:
                    tango = mike.type;
                    zulu = 'MESSAGE_CREATE';
                    if(!(zulu === tango)) { _fun109456_ip = 64; continue _fun109456 }
 49:
                    report = _closure3_slot0;
                    tango = report.handleActivityMessage;
                    tango = tango.bind(report)(mike);
 64:
                    tango = mike.type;
                    if(!(zulu !== tango)) { _fun109456_ip = 224; continue _fun109456 }
 76:
                    zulu = 'MESSAGE_UPDATE';
                    if(!(zulu !== tango)) { _fun109456_ip = 192; continue _fun109456 }
 84:
                    zulu = 'MESSAGE_DELETE';
                    if(!(zulu !== tango)) { _fun109456_ip = 130; continue _fun109456 }
 92:
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 17;
                    tango = tango[zulu];
                    zulu = undefined;
                    tango = report.bind(zulu)(tango);
                    zulu = tango.assertNever;
                    zulu = zulu.bind(tango)(mike);
                    return zulu;
 130:
                    zulu = _closure1_slot20;
                    tango = zulu.MESSAGE_DELETE;
                    golf = mike.channelId;
                    verify = {};
                    zulu = mike.id;
                    verify['id'] = zulu;
                    oscar = mike.id;
                    zulu = global;
                    zulu = zulu.HermesInternal;
                    report = zulu.concat;
                    zulu = '';
                    report = report.bind(zulu)(tango, oscar);
                    oscar = tango;
                    _fun109456_ip = 304; continue _fun109456;
 192:
                    zulu = _closure1_slot20;
                    oscar = zulu.MESSAGE_UPDATE;
                    zulu = mike.message;
                    golf = zulu.channel_id;
                    verify = mike.message;
                    report = null;
                    _fun109456_ip = 304; continue _fun109456;
 224:
                    zulu = mike.message;
                    tango = zulu.state;
                    zulu = 'SENDING';
                    if(!(zulu !== tango)) { _fun109456_ip = 401; continue _fun109456 }
 245:
                    zulu = _closure1_slot20;
                    options = zulu.MESSAGE_CREATE;
                    golf = mike.channelId;
                    verify = mike.message;
                    mike = mike.message;
                    yankee = mike.id;
                    mike = global;
                    mike = mike.HermesInternal;
                    offset = mike.concat;
                    mike = '';
                    report = offset.bind(mike)(options, yankee);
                    oscar = options;
 304:
                    mike = null;
                    if(!(mike != golf)) { _fun109456_ip = 397; continue _fun109456 }
 310:
                    entity = _closure3_slot0;
                    tango = entity.rpcServer;
                    zulu = tango.dispatchToSubscriptions;
                    mike = {};
                    mike['channel_id'] = golf;
                    entity = {};
                    entity['channel_id'] = golf;
                    offset = _closure1_slot0;
                    options = _closure1_slot2;
                    golf = 18;
                    options = options[golf];
                    golf = undefined;
                    options = offset.bind(golf)(options);
                    golf = options.transformInternalTextMessage;
                    golf = golf.bind(options)(verify);
                    entity['message'] = golf;
                    sizing = tango;
                    kilo = oscar;
                    backup = mike;
                    foxtrot = entity;
                    romeo = report;
                    entity = sizing[zulu](kilo, backup, foxtrot, romeo, yankee);
 397:
                    entity = undefined;
                    return entity;
 401:
                    entity = undefined;
                    return entity;
                }
            };
            zulu['handleMessage'] = report;
            report = function(argFoo) {
                _fun109457: for(var _fun109457_ip = 0; ; ) switch(_fun109457_ip) {
 0:
                    oscar = argFoo;
                    mike = _closure3_slot0;
                    mike = mike.rpcServer;
                    mike = mike.subscriptions;
                    mike = mike.length;
                    zulu = 0;
                    if(!(zulu !== mike)) { _fun109457_ip = 227; continue _fun109457 }
 36:
                    mike = oscar.speakingFlags;
                    if(!(zulu === mike)) { _fun109457_ip = 61; continue _fun109457 }
 46:
                    mike = _closure1_slot20;
                    report = mike.SPEAKING_STOP;
                    _fun109457_ip = 74; continue _fun109457;
 61:
                    mike = _closure1_slot20;
                    report = mike.SPEAKING_START;
 74:
                    tango = oscar.context;
                    mike = _closure1_slot23;
                    mike = mike.DEFAULT;
                    if(!(tango === mike)) { _fun109457_ip = 227; continue _fun109457 }
 99:
                    tango = _closure1_slot14;
                    mike = tango.getVoiceChannelId;
                    options = mike.bind(tango)();
                    mike = null;
                    if(!(mike != options)) { _fun109457_ip = 227; continue _fun109457 }
 119:
                    golf = _closure1_slot7;
                    tango = golf.getChannel;
                    tango = tango.bind(golf)(options);
                    if(!(mike != tango)) { _fun109457_ip = 235; continue _fun109457 }
 137:
                    options = _closure1_slot16;
                    golf = options.getVoiceState;
                    zulu = tango.getGuildId;
                    tango = zulu.bind(tango)();
                    zulu = oscar.userId;
                    golf = golf.bind(options)(tango, zulu);
                    if(!(mike != golf)) { _fun109457_ip = 231; continue _fun109457 }
 172:
                    entity = _closure3_slot0;
                    tango = entity.rpcServer;
                    zulu = tango.dispatchToSubscriptions;
                    mike = {};
                    entity = golf.channelId;
                    mike['channel_id'] = entity;
                    entity = {};
                    golf = golf.channelId;
                    entity['channel_id'] = golf;
                    oscar = oscar.userId;
                    entity['user_id'] = oscar;
                    entity = zulu.bind(tango)(report, mike, entity);
 227:
                    entity = undefined;
                    return entity;
 231:
                    entity = undefined;
                    return entity;
 235:
                    entity = undefined;
                    return entity;
                }
            };
            zulu['handleSpeaking'] = report;
            report = function(argFoo) {
                _fun109458: for(var _fun109458_ip = 0; ; ) switch(_fun109458_ip) {
 0:
                    mike = argFoo;
                    entity = mike.guildId;
                    oscar = mike.channelId;
                    zulu = _closure3_slot0;
                    zulu = zulu.rpcServer;
                    zulu = zulu.subscriptions;
                    tango = zulu.length;
                    zulu = 0;
                    if(!(zulu !== tango)) { _fun109458_ip = 91; continue _fun109458 }
 43:
                    mike = _closure3_slot0;
                    report = mike.rpcServer;
                    tango = report.dispatchToSubscriptions;
                    mike = _closure1_slot20;
                    zulu = mike.VOICE_CHANNEL_SELECT;
                    mike = {};
                    mike['channel_id'] = oscar;
                    mike['guild_id'] = entity;
                    entity = {};
                    entity = tango.bind(report)(zulu, entity, mike);
 91:
                    entity = undefined;
                    return entity;
                }
            };
            zulu['handleVoiceChannelSelect'] = report;
            report = function(argFoo) {
                _fun109459: for(var _fun109459_ip = 0; ; ) switch(_fun109459_ip) {
 0:
                    entity = argFoo;
                    golf = entity.channelId;
                    foxtrot = entity.message;
                    offset = entity.icon;
                    oscar = entity.title;
                    entity = entity.body;
                    zulu = _closure3_slot0;
                    zulu = zulu.rpcServer;
                    zulu = zulu.subscriptions;
                    tango = zulu.length;
                    zulu = 0;
                    if(!(zulu !== tango)) { _fun109459_ip = 192; continue _fun109459 }
 61:
                    mike = _closure3_slot0;
                    report = mike.rpcServer;
                    tango = report.dispatchToSubscriptions;
                    mike = _closure1_slot20;
                    zulu = mike.NOTIFICATION_CREATE;
                    mike = {};
                    mike['channel_id'] = golf;
                    verify = _closure1_slot0;
                    golf = _closure1_slot2;
                    romeo = 18;
                    golf = golf[romeo];
                    yankee = undefined;
                    verify = verify.bind(yankee)(golf);
                    golf = verify.transformInternalTextMessage;
                    golf = golf.bind(verify)(foxtrot);
                    mike['message'] = golf;
                    golf = null;
                    verify = golf != offset;
                    if(!verify) { _fun109459_ip = 170; continue _fun109459 }
 142:
                    verify = _closure1_slot0;
                    options = _closure1_slot2;
                    options = options[romeo];
                    verify = verify.bind(yankee)(options);
                    options = verify.getRemoteIconURL;
                    golf = options.bind(verify)(offset);
 170:
                    mike['icon_url'] = golf;
                    mike['title'] = oscar;
                    mike['body'] = entity;
                    entity = {};
                    entity = tango.bind(report)(zulu, entity, mike);
 192:
                    entity = undefined;
                    return entity;
                }
            };
            zulu['handleNotificationCreate'] = report;
            report = function(argFoo) {
                _fun109460: for(var _fun109460_ip = 0; ; ) switch(_fun109460_ip) {
 0:
                    mike = argFoo;
                    zulu = mike.applicationId;
                    var _closure4_slot0 = zulu;
                    oscar = mike.secret;
                    zulu = mike.intent;
                    tango = mike.embedded;
                    report = _closure3_slot0;
                    report = report.rpcServer;
                    report = report.subscriptions;
                    golf = report.length;
                    report = 0;
                    if(!(report !== golf)) { _fun109460_ip = 153; continue _fun109460 }
 62:
                    report = {};
                    report['secret'] = oscar;
                    if(!tango) { _fun109460_ip = 78; continue _fun109460 }
 72:
                    report['intent'] = zulu;
 78:
                    zulu = _closure3_slot0;
                    options = zulu.rpcServer;
                    golf = options.dispatchToSubscriptions;
                    mike = _closure1_slot20;
                    oscar = mike.ACTIVITY_JOIN;
                    tango = function(argFoo) {
                        entity = argFoo;
                        entity = entity.socket;
                        entity = entity.application;
                        mike = entity.id;
                        entity = _closure4_slot0;
                        entity = mike === entity;
                        return entity;
                    };
                    tango = golf.bind(options)(oscar, tango, report);
                    tango = zulu.rpcServer;
                    zulu = tango.dispatchToSubscriptions;
                    mike = mike.GAME_JOIN;
                    entity = function(argFoo) {
                        entity = argFoo;
                        entity = entity.socket;
                        entity = entity.application;
                        mike = entity.id;
                        entity = _closure4_slot0;
                        entity = mike === entity;
                        return entity;
                    };
                    entity = zulu.bind(tango)(mike, entity, report);
 153:
                    entity = undefined;
                    return entity;
                }
            };
            zulu['handleActivityJoin'] = report;
            report = function(argFoo) {
                _fun109463: for(var _fun109463_ip = 0; ; ) switch(_fun109463_ip) {
 0:
                    mike = argFoo;
                    zulu = mike.applicationId;
                    var _closure4_slot0 = zulu;
                    oscar = mike.layoutMode;
                    mike = _closure3_slot0;
                    mike = mike.rpcServer;
                    mike = mike.subscriptions;
                    tango = mike.length;
                    mike = 0;
                    if(!(mike !== tango)) { _fun109463_ip = 153; continue _fun109463 }
 50:
                    tango = _closure1_slot22;
                    tango = tango.FOCUSED;
                    zulu = _closure3_slot0;
                    verify = zulu.rpcServer;
                    options = verify.dispatchToSubscriptions;
                    mike = _closure1_slot20;
                    golf = mike.ACTIVITY_PIP_MODE_UPDATE;
                    report = {};
                    tango = oscar !== tango;
                    report['is_pip_mode'] = tango;
                    tango = function(argFoo) {
                        entity = argFoo;
                        entity = entity.socket;
                        entity = entity.application;
                        mike = entity.id;
                        entity = _closure4_slot0;
                        entity = mike === entity;
                        return entity;
                    };
                    tango = options.bind(verify)(golf, tango, report);
                    report = zulu.rpcServer;
                    tango = report.dispatchToSubscriptions;
                    zulu = mike.ACTIVITY_LAYOUT_MODE_UPDATE;
                    mike = {};
                    mike['layout_mode'] = oscar;
                    entity = function(argFoo) {
                        entity = argFoo;
                        entity = entity.socket;
                        entity = entity.application;
                        mike = entity.id;
                        entity = _closure4_slot0;
                        entity = mike === entity;
                        return entity;
                    };
                    entity = tango.bind(report)(zulu, entity, mike);
 153:
                    entity = undefined;
                    return entity;
                }
            };
            zulu['handleActivityLayoutModeUpdate'] = report;
            report = function(argFoo) {
                _fun109466: for(var _fun109466_ip = 0; ; ) switch(_fun109466_ip) {
 0:
                    mike = argFoo;
                    tango = mike.applicationId;
                    var _closure4_slot0 = tango;
                    mike = _closure3_slot0;
                    mike = mike.rpcServer;
                    mike = mike.subscriptions;
                    report = mike.length;
                    mike = 0;
                    if(!(mike !== report)) { _fun109466_ip = 132; continue _fun109466 }
 44:
                    mike = null;
                    if(!(mike != tango)) { _fun109466_ip = 132; continue _fun109466 }
 50:
                    report = {};
                    golf = _closure1_slot0;
                    oscar = _closure1_slot2;
                    tango = 19;
                    oscar = oscar[tango];
                    tango = undefined;
                    oscar = golf.bind(tango)(oscar);
                    tango = oscar.getThermalState;
                    tango = tango.bind(oscar)();
                    report['thermal_state'] = tango;
                    zulu = _closure3_slot0;
                    tango = zulu.rpcServer;
                    zulu = tango.dispatchToSubscriptions;
                    mike = _closure1_slot20;
                    mike = mike.THERMAL_STATE_UPDATE;
                    entity = function(argFoo) {
                        entity = argFoo;
                        entity = entity.socket;
                        entity = entity.application;
                        mike = entity.id;
                        entity = _closure4_slot0;
                        entity = mike === entity;
                        return entity;
                    };
                    entity = zulu.bind(tango)(mike, entity, report);
 132:
                    entity = undefined;
                    return entity;
                }
            };
            zulu['handleThermalStateChange'] = report;
            report = function(argFoo) {
                _fun109468: for(var _fun109468_ip = 0; ; ) switch(_fun109468_ip) {
 0:
                    entity = argFoo;
                    entity = entity.screenOrientation;
                    zulu = _closure3_slot0;
                    zulu = zulu.rpcServer;
                    zulu = zulu.subscriptions;
                    tango = zulu.length;
                    zulu = 0;
                    if(!(zulu !== tango)) { _fun109468_ip = 84; continue _fun109468 }
 39:
                    mike = _closure3_slot0;
                    report = mike.rpcServer;
                    tango = report.dispatchToSubscriptions;
                    mike = _closure1_slot20;
                    zulu = mike.ORIENTATION_UPDATE;
                    mike = {};
                    mike['screen_orientation'] = entity;
                    entity = {};
                    entity = tango.bind(report)(zulu, entity, mike);
 84:
                    entity = undefined;
                    return entity;
                }
            };
            zulu['handleScreenOrientationUpdate'] = report;
            report = function() {
                _fun109469: for(var _fun109469_ip = 0; ; ) switch(_fun109469_ip) {
 0:
                    entity = _closure3_slot0;
                    entity = entity.rpcServer;
                    entity = entity.subscriptions;
                    zulu = entity.length;
                    entity = 0;
                    if(!(entity !== zulu)) { _fun109469_ip = 100; continue _fun109469 }
 30:
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 20;
                    tango = tango[zulu];
                    zulu = undefined;
                    tango = report.bind(zulu)(tango);
                    zulu = tango.activityInstanceConnectedParticipants;
                    report = zulu.bind(tango)();
                    mike = _closure3_slot0;
                    tango = mike.rpcServer;
                    zulu = tango.dispatchToSubscriptions;
                    entity = _closure1_slot20;
                    mike = entity.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE;
                    entity = {};
                    entity = zulu.bind(tango)(mike, entity, report);
 100:
                    entity = undefined;
                    return entity;
                }
            };
            zulu['handleEmbeddedActivityUpdate'] = report;
            report = function(argFoo) {
                _fun109470: for(var _fun109470_ip = 0; ; ) switch(_fun109470_ip) {
 0:
                    entity = argFoo;
                    options = entity.channelId;
                    golf = entity.message;
                    entity = undefined;
                    var _closure4_slot0 = entity;
                    tango = _closure3_slot0;
                    tango = tango.rpcServer;
                    tango = tango.subscriptions;
                    report = tango.length;
                    tango = 0;
                    if(!(tango !== report)) { _fun109470_ip = 511; continue _fun109470 }
 54:
                    tango = golf.application;
                    verify = golf.activity;
                    report = null;
                    if(!(report != tango)) { _fun109470_ip = 511; continue _fun109470 }
 74:
                    if(!(report != verify)) { _fun109470_ip = 511; continue _fun109470 }
 81:
                    oscar = verify.party_id;
                    if(!(report != oscar)) { _fun109470_ip = 511; continue _fun109470 }
 94:
                    romeo = _closure1_slot15;
                    offset = romeo.getUser;
                    foxtrot = golf.author;
                    backup = report == foxtrot;
                    oscar = undefined;
                    if(backup) { _fun109470_ip = 127; continue _fun109470 }
 122:
                    oscar = foxtrot.id;
 127:
                    romeo = offset.bind(romeo)(oscar);
                    if(!(report != romeo)) { _fun109470_ip = 511; continue _fun109470 }
 139:
                    offset = _closure1_slot15;
                    oscar = offset.getCurrentUser;
                    oscar = oscar.bind(offset)();
                    if(!(report != oscar)) { _fun109470_ip = 511; continue _fun109470 }
 159:
                    foxtrot = romeo.id;
                    offset = oscar.id;
                    if(!(foxtrot !== offset)) { _fun109470_ip = 511; continue _fun109470 }
 176:
                    foxtrot = verify.type;
                    offset = _closure1_slot17;
                    offset = offset.JOIN_REQUEST;
                    if(!(foxtrot !== offset)) { _fun109470_ip = 223; continue _fun109470 }
 195:
                    kilo = _closure1_slot11;
                    backup = kilo.getApplicationActivity;
                    foxtrot = romeo.id;
                    offset = tango.id;
                    offset = backup.bind(kilo)(foxtrot, offset);
                    _fun109470_ip = 249; continue _fun109470;
 223:
                    backup = _closure1_slot11;
                    foxtrot = backup.getApplicationActivity;
                    oscar = oscar.id;
                    tango = tango.id;
                    offset = foxtrot.bind(backup)(oscar, tango);
 249:
                    if(!(report != offset)) { _fun109470_ip = 511; continue _fun109470 }
 256:
                    tango = offset.party;
                    if(!(report != tango)) { _fun109470_ip = 511; continue _fun109470 }
 269:
                    tango = offset.party;
                    report = tango.id;
                    tango = verify.party_id;
                    if(!(report === tango)) { _fun109470_ip = 511; continue _fun109470 }
 293:
                    tango = offset.application_id;
                    _closure4_slot0 = tango;
                    report = verify.type;
                    tango = _closure1_slot17;
                    tango = tango.JOIN;
                    if(!(tango !== report)) { _fun109470_ip = 412; continue _fun109470 }
 322:
                    tango = _closure1_slot17;
                    tango = tango.JOIN_REQUEST;
                    if(!(tango === report)) { _fun109470_ip = 511; continue _fun109470 }
 339:
                    tango = _closure3_slot0;
                    backup = tango.rpcServer;
                    foxtrot = backup.dispatchToSubscriptions;
                    tango = _closure1_slot20;
                    oscar = tango.ACTIVITY_JOIN_REQUEST;
                    report = {};
                    kilo = _closure1_slot1;
                    sizing = _closure1_slot2;
                    tango = 21;
                    tango = sizing[tango];
                    tango = kilo.bind(entity)(tango);
                    tango = tango.bind(entity)(romeo);
                    report['user'] = tango;
                    tango = function(argFoo) {
                        entity = argFoo;
                        entity = entity.socket;
                        entity = entity.application;
                        mike = entity.id;
                        entity = _closure4_slot0;
                        entity = mike === entity;
                        return entity;
                    };
                    tango = foxtrot.bind(backup)(oscar, tango, report);
                    _fun109470_ip = 511; continue _fun109470;
 412:
                    zulu = _closure3_slot0;
                    oscar = zulu.rpcServer;
                    report = oscar.dispatchToSubscriptions;
                    zulu = _closure1_slot20;
                    tango = zulu.ACTIVITY_INVITE;
                    zulu = {};
                    foxtrot = _closure1_slot1;
                    backup = _closure1_slot2;
                    yankee = 21;
                    yankee = backup[yankee];
                    yankee = foxtrot.bind(entity)(yankee);
                    yankee = yankee.bind(entity)(romeo);
                    zulu['user'] = yankee;
                    zulu['activity'] = offset;
                    verify = verify.type;
                    zulu['type'] = verify;
                    zulu['channel_id'] = options;
                    golf = golf.id;
                    zulu['message_id'] = golf;
                    mike = function(argFoo) {
                        entity = argFoo;
                        entity = entity.socket;
                        entity = entity.application;
                        mike = entity.id;
                        entity = _closure4_slot0;
                        entity = mike === entity;
                        return entity;
                    };
                    mike = report.bind(oscar)(tango, mike, zulu);
 511:
                    return entity;
                }
            };
            zulu['handleActivityMessage'] = report;
            report = function(argFoo) {
                mike = argFoo;
                mike = mike.accessToken;
                var _closure4_slot0 = mike;
                mike = _closure3_slot0;
                mike = mike.rpcServer;
                zulu = mike.sockets;
                mike = zulu.forEach;
                entity = function(argFoo) {
                    _fun109474: for(var _fun109474_ip = 0; ; ) switch(_fun109474_ip) {
 0:
                        tango = argFoo;
                        entity = tango.authorization;
                        mike = entity.accessToken;
                        entity = _closure4_slot0;
                        if(!(mike === entity)) { _fun109474_ip = 57; continue _fun109474 }
 26:
                        zulu = tango.close;
                        entity = _closure1_slot21;
                        mike = entity.TOKEN_REVOKED;
                        entity = 'Token revoked';
                        entity = zulu.bind(tango)(mike, entity);
 57:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            zulu['handleOAuth2TokenRevoke'] = report;
            report = function(argFoo) {
                _fun109475: for(var _fun109475_ip = 0; ; ) switch(_fun109475_ip) {
 0:
                    entity = argFoo;
                    entity = entity.guild;
                    oscar = entity.id;
                    zulu = _closure1_slot9;
                    entity = zulu.getGuild;
                    entity = entity.bind(zulu)(oscar);
                    tango = _closure3_slot0;
                    tango = tango.rpcServer;
                    tango = tango.subscriptions;
                    report = tango.length;
                    tango = 0;
                    tango = tango !== report;
                    if(!tango) { _fun109475_ip = 69; continue _fun109475 }
 63:
                    report = null;
                    tango = report != entity;
 69:
                    if(!tango) { _fun109475_ip = 122; continue _fun109475 }
 72:
                    zulu = _closure3_slot0;
                    report = zulu.rpcServer;
                    tango = report.dispatchToSubscriptions;
                    mike = _closure1_slot20;
                    zulu = mike.GUILD_CREATE;
                    mike = {};
                    mike['id'] = oscar;
                    entity = entity.name;
                    mike['name'] = entity;
                    entity = {};
                    entity = tango.bind(report)(zulu, entity, mike);
 122:
                    entity = undefined;
                    return entity;
                }
            };
            zulu['handleGuildCreate'] = report;
            report = function(argFoo) {
                _fun109476: for(var _fun109476_ip = 0; ; ) switch(_fun109476_ip) {
 0:
                    entity = argFoo;
                    entity = entity.channel;
                    golf = entity.id;
                    oscar = entity.name;
                    entity = entity.type;
                    zulu = _closure3_slot0;
                    zulu = zulu.rpcServer;
                    zulu = zulu.subscriptions;
                    tango = zulu.length;
                    zulu = 0;
                    if(!(zulu !== tango)) { _fun109476_ip = 105; continue _fun109476 }
 53:
                    mike = _closure3_slot0;
                    report = mike.rpcServer;
                    tango = report.dispatchToSubscriptions;
                    mike = _closure1_slot20;
                    zulu = mike.CHANNEL_CREATE;
                    mike = {};
                    mike['id'] = golf;
                    mike['name'] = oscar;
                    mike['type'] = entity;
                    entity = {};
                    entity = tango.bind(report)(zulu, entity, mike);
 105:
                    entity = undefined;
                    return entity;
                }
            };
            zulu['handleChannelCreate'] = report;
            report = function() {
                entity = _closure3_slot0;
                entity = entity.rpcServer;
                zulu = entity.sockets;
                mike = zulu.forEach;
                entity = function(argFoo) {
                    tango = argFoo;
                    zulu = tango.close;
                    entity = _closure1_slot21;
                    mike = entity.CLOSE_NORMAL;
                    entity = 'User logout';
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            zulu['handleLogout'] = report;
            report = function(argFoo) {
                _fun109479: for(var _fun109479_ip = 0; ; ) switch(_fun109479_ip) {
 0:
                    entity = argFoo;
                    entity = entity.relationship;
                    golf = entity.id;
                    options = entity.type;
                    entity = undefined;
                    var _closure4_slot0 = entity;
                    zulu = _closure3_slot0;
                    zulu = zulu.rpcServer;
                    zulu = zulu.subscriptions;
                    report = zulu.length;
                    zulu = 0;
                    if(!(zulu !== report)) { _fun109479_ip = 159; continue _fun109479 }
 57:
                    oscar = _closure1_slot15;
                    report = oscar.getUser;
                    golf = report.bind(oscar)(golf);
                    report = null;
                    if(!(report != golf)) { _fun109479_ip = 159; continue _fun109479 }
 81:
                    oscar = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 18;
                    report = verify[report];
                    oscar = oscar.bind(entity)(report);
                    report = oscar.transformBaseRelationship;
                    report = report.bind(oscar)(options, golf);
                    _closure4_slot0 = report;
                    tango = _closure3_slot0;
                    oscar = tango.rpcServer;
                    report = oscar.dispatchToSubscriptions;
                    zulu = _closure1_slot20;
                    tango = zulu.RELATIONSHIP_UPDATE;
                    zulu = {};
                    mike = function(argFoo) {
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 18;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.transformApplicationRelationship;
                        mike = _closure4_slot0;
                        entity = argFoo;
                        entity = entity.socket;
                        entity = entity.application;
                        entity = entity.id;
                        entity = zulu.bind(tango)(mike, entity);
                        return entity;
                    };
                    mike = report.bind(oscar)(tango, zulu, mike);
 159:
                    return entity;
                }
            };
            zulu['handleRelationshipAdd'] = report;
            report = function(argFoo) {
                _fun109481: for(var _fun109481_ip = 0; ; ) switch(_fun109481_ip) {
 0:
                    entity = argFoo;
                    entity = entity.relationship;
                    golf = entity.id;
                    options = entity.type;
                    entity = undefined;
                    var _closure4_slot0 = entity;
                    zulu = _closure3_slot0;
                    zulu = zulu.rpcServer;
                    zulu = zulu.subscriptions;
                    report = zulu.length;
                    zulu = 0;
                    if(!(zulu !== report)) { _fun109481_ip = 159; continue _fun109481 }
 57:
                    oscar = _closure1_slot15;
                    report = oscar.getUser;
                    golf = report.bind(oscar)(golf);
                    report = null;
                    if(!(report != golf)) { _fun109481_ip = 159; continue _fun109481 }
 81:
                    oscar = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 18;
                    report = verify[report];
                    oscar = oscar.bind(entity)(report);
                    report = oscar.transformBaseRelationship;
                    report = report.bind(oscar)(options, golf);
                    _closure4_slot0 = report;
                    tango = _closure3_slot0;
                    oscar = tango.rpcServer;
                    report = oscar.dispatchToSubscriptions;
                    zulu = _closure1_slot20;
                    tango = zulu.RELATIONSHIP_UPDATE;
                    zulu = {};
                    mike = function(argFoo) {
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 18;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.transformApplicationRelationship;
                        mike = _closure4_slot0;
                        entity = argFoo;
                        entity = entity.socket;
                        entity = entity.application;
                        entity = entity.id;
                        entity = zulu.bind(tango)(mike, entity);
                        return entity;
                    };
                    mike = report.bind(oscar)(tango, zulu, mike);
 159:
                    return entity;
                }
            };
            zulu['handleRelationshipUpdate'] = report;
            report = function(argFoo) {
                _fun109483: for(var _fun109483_ip = 0; ; ) switch(_fun109483_ip) {
 0:
                    entity = argFoo;
                    entity = entity.relationship;
                    golf = entity.id;
                    entity = undefined;
                    var _closure4_slot0 = entity;
                    zulu = _closure3_slot0;
                    zulu = zulu.rpcServer;
                    zulu = zulu.subscriptions;
                    report = zulu.length;
                    zulu = 0;
                    if(!(zulu !== report)) { _fun109483_ip = 164; continue _fun109483 }
 52:
                    oscar = _closure1_slot15;
                    report = oscar.getUser;
                    options = report.bind(oscar)(golf);
                    report = null;
                    if(!(report != options)) { _fun109483_ip = 164; continue _fun109483 }
 76:
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    report = 18;
                    report = golf[report];
                    golf = oscar.bind(entity)(report);
                    oscar = golf.transformBaseRelationship;
                    report = _closure1_slot18;
                    report = report.NONE;
                    report = oscar.bind(golf)(report, options);
                    _closure4_slot0 = report;
                    tango = _closure3_slot0;
                    oscar = tango.rpcServer;
                    report = oscar.dispatchToSubscriptions;
                    zulu = _closure1_slot20;
                    tango = zulu.RELATIONSHIP_UPDATE;
                    zulu = {};
                    mike = function(argFoo) {
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 18;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.transformApplicationRelationship;
                        mike = _closure4_slot0;
                        entity = argFoo;
                        entity = entity.socket;
                        entity = entity.application;
                        entity = entity.id;
                        entity = zulu.bind(tango)(mike, entity);
                        return entity;
                    };
                    mike = report.bind(oscar)(tango, zulu, mike);
 164:
                    return entity;
                }
            };
            zulu['handleRelationshipRemove'] = report;
            report = function(argFoo) {
                _fun109485: for(var _fun109485_ip = 0; ; ) switch(_fun109485_ip) {
 0:
                    entity = argFoo;
                    options = entity.updates;
                    entity = undefined;
                    var _closure4_slot0 = entity;
                    mike = _closure3_slot0;
                    mike = mike.rpcServer;
                    mike = mike.subscriptions;
                    zulu = mike.length;
                    mike = 0;
                    if(!(mike !== zulu)) { _fun109485_ip = 160; continue _fun109485 }
 47:
                    report = function() { // Original name: _loop
                        _fun109486: for(var _fun109486_ip = 0; ; ) switch(_fun109486_ip) {
 0:
                            oscar = _closure1_slot13;
                            report = oscar.getRelationshipType;
                            tango = _closure4_slot0;
                            golf = report.bind(oscar)(tango);
                            tango = _closure1_slot18;
                            tango = tango.NONE;
                            if(!(golf !== tango)) { _fun109486_ip = 155; continue _fun109486 }
 41:
                            report = _closure1_slot15;
                            tango = report.getUser;
                            entity = _closure4_slot0;
                            oscar = tango.bind(report)(entity);
                            entity = null;
                            if(!(entity != oscar)) { _fun109486_ip = 151; continue _fun109486 }
 66:
                            report = _closure1_slot0;
                            tango = _closure1_slot2;
                            entity = 18;
                            tango = tango[entity];
                            entity = undefined;
                            report = report.bind(entity)(tango);
                            tango = report.transformBaseRelationship;
                            tango = tango.bind(report)(golf, oscar);
                            var _closure5_slot0 = tango;
                            tango = _closure3_slot1;
                            oscar = tango.rpcServer;
                            report = oscar.dispatchToSubscriptions;
                            zulu = _closure1_slot20;
                            tango = zulu.RELATIONSHIP_UPDATE;
                            zulu = {};
                            mike = function(argFoo) {
                                zulu = _closure1_slot0;
                                mike = _closure1_slot2;
                                entity = 18;
                                mike = mike[entity];
                                entity = undefined;
                                tango = zulu.bind(entity)(mike);
                                zulu = tango.transformApplicationRelationship;
                                mike = _closure5_slot0;
                                entity = argFoo;
                                entity = entity.socket;
                                entity = entity.application;
                                entity = entity.id;
                                entity = zulu.bind(tango)(mike, entity);
                                return entity;
                            };
                            mike = report.bind(oscar)(tango, zulu, mike);
                            return entity;
 151:
                            entity = 0;
                            return entity;
 155:
                            entity = 0;
                            return entity;
                        }
                    };
                    zulu = _closure1_slot24;
                    mike = global;
                    golf = mike.Set;
                    tango = options.map;
                    mike = function(argFoo) {
                        entity = argFoo;
                        entity = entity.user;
                        entity = entity.id;
                        return entity;
                    };
                    verify = tango.bind(options)(mike);
                    tango = golf.prototype;
                    tango = Object.create(tango, {constructor: {value: golf}});
                    offset = tango;
                    mike = new offset[golf](verify, options);
                    tango = mike instanceof Object ? mike : tango;
                    mike = tango.values;
                    mike = mike.bind(tango)();
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.bind(entity)();
                    mike = zulu.done;
                    if(mike) { _fun109485_ip = 160; continue _fun109485 }
 132:
                    mike = zulu.value;
                    _closure4_slot0 = mike;
                    mike = report.bind(entity)();
                    golf = tango.bind(entity)();
                    mike = golf.done;
                    zulu = golf;
                    if(!mike) { _fun109485_ip = 132; continue _fun109485 }
 160:
                    return entity;
                }
            };
            zulu['handlePresenceUpdates'] = report;
            report = function() {
                _fun109489: for(var _fun109489_ip = 0; ; ) switch(_fun109489_ip) {
 0:
                    entity = _closure3_slot0;
                    entity = entity.rpcServer;
                    entity = entity.subscriptions;
                    mike = entity.length;
                    entity = 0;
                    if(!(entity !== mike)) { _fun109489_ip = 89; continue _fun109489 }
 30:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 22;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.forEach;
                    mike = _closure1_slot13;
                    entity = mike.getRelationships;
                    mike = entity.bind(mike)();
                    entity = function(argFoo, argBar) {
                        _fun109490: for(var _fun109490_ip = 0; ; ) switch(_fun109490_ip) {
 0:
                            oscar = argFoo;
                            zulu = _closure1_slot18;
                            zulu = zulu.NONE;
                            if(!(oscar !== zulu)) { _fun109490_ip = 129; continue _fun109490 }
 22:
                            report = _closure1_slot15;
                            tango = report.getUser;
                            zulu = argBar;
                            report = tango.bind(report)(zulu);
                            zulu = null;
                            if(!(zulu != report)) { _fun109490_ip = 129; continue _fun109490 }
 46:
                            golf = _closure1_slot0;
                            tango = _closure1_slot2;
                            zulu = 18;
                            tango = tango[zulu];
                            zulu = undefined;
                            tango = golf.bind(zulu)(tango);
                            zulu = tango.transformBaseRelationship;
                            zulu = zulu.bind(tango)(oscar, report);
                            var _closure5_slot0 = zulu;
                            zulu = _closure3_slot0;
                            report = zulu.rpcServer;
                            tango = report.dispatchToSubscriptions;
                            mike = _closure1_slot20;
                            zulu = mike.RELATIONSHIP_UPDATE;
                            mike = {};
                            entity = function(argFoo) {
                                zulu = _closure1_slot0;
                                mike = _closure1_slot2;
                                entity = 18;
                                mike = mike[entity];
                                entity = undefined;
                                tango = zulu.bind(entity)(mike);
                                zulu = tango.transformApplicationRelationship;
                                mike = _closure5_slot0;
                                entity = argFoo;
                                entity = entity.socket;
                                entity = entity.application;
                                entity = entity.id;
                                entity = zulu.bind(tango)(mike, entity);
                                return entity;
                            };
                            entity = tango.bind(report)(zulu, mike, entity);
 129:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = zulu.bind(tango)(mike, entity);
 89:
                    entity = undefined;
                    return entity;
                }
            };
            zulu['handlePresencesReplace'] = report;
            report = function(argFoo) {
                _fun109492: for(var _fun109492_ip = 0; ; ) switch(_fun109492_ip) {
 0:
                    entity = argFoo;
                    entity = entity.user;
                    golf = entity.id;
                    entity = undefined;
                    var _closure4_slot0 = entity;
                    zulu = _closure3_slot0;
                    zulu = zulu.rpcServer;
                    zulu = zulu.subscriptions;
                    report = zulu.length;
                    zulu = 0;
                    if(!(zulu !== report)) { _fun109492_ip = 185; continue _fun109492 }
 54:
                    oscar = _closure1_slot13;
                    report = oscar.getRelationshipType;
                    options = report.bind(oscar)(golf);
                    report = _closure1_slot18;
                    report = report.NONE;
                    if(!(options !== report)) { _fun109492_ip = 185; continue _fun109492 }
 86:
                    oscar = _closure1_slot15;
                    report = oscar.getUser;
                    golf = report.bind(oscar)(golf);
                    report = null;
                    if(!(report != golf)) { _fun109492_ip = 185; continue _fun109492 }
 107:
                    oscar = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 18;
                    report = verify[report];
                    oscar = oscar.bind(entity)(report);
                    report = oscar.transformBaseRelationship;
                    report = report.bind(oscar)(options, golf);
                    _closure4_slot0 = report;
                    tango = _closure3_slot0;
                    oscar = tango.rpcServer;
                    report = oscar.dispatchToSubscriptions;
                    zulu = _closure1_slot20;
                    tango = zulu.RELATIONSHIP_UPDATE;
                    zulu = {};
                    mike = function(argFoo) {
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 18;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.transformApplicationRelationship;
                        mike = _closure4_slot0;
                        entity = argFoo;
                        entity = entity.socket;
                        entity = entity.application;
                        entity = entity.id;
                        entity = zulu.bind(tango)(mike, entity);
                        return entity;
                    };
                    mike = report.bind(oscar)(tango, zulu, mike);
 185:
                    return entity;
                }
            };
            zulu['handleUserUpdate'] = report;
            report = function(argFoo) {
                _fun109494: for(var _fun109494_ip = 0; ; ) switch(_fun109494_ip) {
 0:
                    mike = argFoo;
                    oscar = mike.entitlement;
                    var _closure4_slot0 = oscar;
                    zulu = _closure3_slot0;
                    zulu = zulu.rpcServer;
                    zulu = zulu.subscriptions;
                    tango = zulu.length;
                    zulu = 0;
                    if(!(zulu !== tango)) { _fun109494_ip = 95; continue _fun109494 }
 45:
                    mike = _closure3_slot0;
                    report = mike.rpcServer;
                    tango = report.dispatchToSubscriptions;
                    mike = _closure1_slot20;
                    zulu = mike.ENTITLEMENT_CREATE;
                    mike = {};
                    mike['entitlement'] = oscar;
                    entity = function(argFoo) {
                        entity = argFoo;
                        entity = entity.socket;
                        entity = entity.application;
                        mike = entity.id;
                        entity = _closure4_slot0;
                        entity = entity.application_id;
                        entity = mike === entity;
                        return entity;
                    };
                    entity = tango.bind(report)(zulu, entity, mike);
 95:
                    entity = undefined;
                    return entity;
                }
            };
            zulu['handleEntitlementCreate'] = report;
            tango = function(argFoo) {
                _fun109496: for(var _fun109496_ip = 0; ; ) switch(_fun109496_ip) {
 0:
                    mike = argFoo;
                    oscar = mike.entitlement;
                    var _closure4_slot0 = oscar;
                    zulu = _closure3_slot0;
                    zulu = zulu.rpcServer;
                    zulu = zulu.subscriptions;
                    tango = zulu.length;
                    zulu = 0;
                    if(!(zulu !== tango)) { _fun109496_ip = 95; continue _fun109496 }
 45:
                    mike = _closure3_slot0;
                    report = mike.rpcServer;
                    tango = report.dispatchToSubscriptions;
                    mike = _closure1_slot20;
                    zulu = mike.ENTITLEMENT_DELETE;
                    mike = {};
                    mike['entitlement'] = oscar;
                    entity = function(argFoo) {
                        entity = argFoo;
                        entity = entity.socket;
                        entity = entity.application;
                        mike = entity.id;
                        entity = _closure4_slot0;
                        entity = entity.application_id;
                        entity = mike === entity;
                        return entity;
                    };
                    entity = tango.bind(report)(zulu, entity, mike);
 95:
                    entity = undefined;
                    return entity;
                }
            };
            zulu['handleEntitlementDelete'] = tango;
            tango = mike.server;
            zulu['rpcServer'] = tango;
            tango = mike.transports;
            zulu['transports'] = tango;
            tango = mike.commands;
            zulu['rpcCommandHandlers'] = tango;
            tango = mike.events;
            zulu['rpcEventHandlers'] = tango;
            tango = mike.stores;
            zulu['stores'] = tango;
            mike = mike.registerTransportsForEmbeddedPlatform;
            zulu['registerTransportsForEmbeddedPlatform'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'loadServer';
        entity['key'] = mike;
        mike = function() { // Original name: loadServer
            _fun109498: for(var _fun109498_ip = 0; ; ) switch(_fun109498_ip) {
 0:
                verify = this;
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 23;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                mike = mike.isPlatformEmbedded;
                if(!mike) { _fun109498_ip = 47; continue _fun109498 }
 37:
                mike = verify.registerTransportsForEmbeddedPlatform;
                mike = mike.bind(verify)();
 47:
                zulu = _closure1_slot24;
                mike = verify.transports;
                tango = zulu.bind(entity)(mike);
                zulu = tango.bind(entity)();
                mike = zulu.done;
                if(mike) { _fun109498_ip = 113; continue _fun109498 }
 74:
                oscar = zulu.value;
                report = verify.rpcServer;
                mike = report.registerTransport;
                mike = mike.bind(report)(oscar);
                report = tango.bind(entity)();
                mike = report.done;
                zulu = report;
                if(!mike) { _fun109498_ip = 74; continue _fun109498 }
 113:
                report = verify.rpcCommandHandlers;
                mike = global;
                tango = mike.Object;
                zulu = tango.entries;
                offset = zulu.bind(tango)(report);
                zulu = offset.length;
                golf = 0;
                zulu = golf < zulu;
                oscar = 2;
                report = 1;
                tango = 0;
                if(!zulu) { _fun109498_ip = 214; continue _fun109498 }
 160:
                yankee = offset[tango];
                zulu = _closure1_slot4;
                zulu = zulu.bind(entity)(yankee, oscar);
                foxtrot = zulu[golf];
                romeo = zulu[report];
                yankee = verify.rpcServer;
                zulu = yankee.setCommandHandler;
                zulu = zulu.bind(yankee)(foxtrot, romeo);
                tango = tango + 1;
                zulu = offset.length;
                if(tango < zulu) { _fun109498_ip = 160; continue _fun109498 }
 214:
                tango = verify.rpcEventHandlers;
                zulu = mike.Object;
                mike = zulu.entries;
                tango = mike.bind(zulu)(tango);
                mike = tango.length;
                mike = golf < mike;
                zulu = 0;
                if(!mike) { _fun109498_ip = 305; continue _fun109498 }
 251:
                offset = tango[zulu];
                mike = _closure1_slot4;
                mike = mike.bind(entity)(offset, oscar);
                romeo = mike[golf];
                yankee = mike[report];
                offset = verify.rpcServer;
                mike = offset.setEventHandler;
                mike = mike.bind(offset)(romeo, yankee);
                zulu = zulu + 1;
                mike = tango.length;
                if(zulu < mike) { _fun109498_ip = 251; continue _fun109498 }
 305:
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(3);
        mike[0] = entity;
        entity = {};
        oscar = 'init';
        entity['key'] = oscar;
        oscar = function() { // Original name: init
            mike = this;
            var _closure3_slot0 = mike;
            zulu = mike.rpcServer;
            entity = function() {
                mike = _closure1_slot15;
                entity = mike.getCurrentUser;
                entity = entity.bind(mike)();
                return entity;
            };
            zulu['getCurrentUser'] = entity;
            report = mike.rpcServer;
            zulu = function() {
                tango = _closure1_slot3;
                zulu = undefined;
                mike = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun109503: for(var _fun109503_ip = 0; ; ) switch(_fun109503_ip) {
 0:
                            StartGenerator();
                            oscar = argFoo;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(mike) { _fun109503_ip = 217; continue _fun109503 }
 13:
                            report = _closure1_slot1;
                            golf = _closure1_slot2;
                            zulu = 24;
                            tango = golf[zulu];
                            zulu = undefined;
                            verify = report.bind(zulu)(tango);
                            options = verify.dispatch;
                            tango = {};
                            offset = 'RPC_APP_CONNECTED';
                            tango['type'] = offset;
                            offset = oscar.id;
                            tango['socketId'] = offset;
                            offset = oscar.application;
                            tango['application'] = offset;
                            tango = options.bind(verify)(tango);
                            tango = 25;
                            tango = golf[tango];
                            options = report.bind(zulu)(tango);
                            golf = options.track;
                            tango = _closure1_slot19;
                            report = tango.AUTHORIZED_APP_CONNECTED;
                            tango = {};
                            verify = oscar.application;
                            verify = verify.id;
                            tango['app_id'] = verify;
                            verify = oscar.transport;
                            tango['transport'] = verify;
                            tango = golf.bind(options)(report, tango);
                            tango = oscar.application;
                            golf = tango.id;
                            tango = null;
                            if(!(tango != golf)) { _fun109503_ip = 211; continue _fun109503 }
 154:
                            tango = _closure1_slot0;
                            report = _closure1_slot2;
                            mike = 26;
                            mike = report[mike];
                            report = tango.bind(zulu)(mike);
                            tango = report.setDefaultPresenceForEmbeddedApp;
                            mike = {};
                            mike['applicationId'] = golf;
                            oscar = oscar.id;
                            mike['socketId'] = oscar;
                            mike = tango.bind(report)(mike);
                            SaveGenerator(address=205);
 203:
                            return mike;
 205:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(tango) { _fun109503_ip = 214; continue _fun109503 }
 211:
                            return zulu;
 214:
                            return mike;
 217:
                            return entity;
                        }
                    };
                    return entity;
                };
                mike = tango.bind(zulu)(mike);
                var _closure4_slot0 = mike;
                entity = function(argFoo) {
                    entity = undefined;
                    tango = _closure4_slot0;
                    zulu = tango.apply;
                    entity = arguments;
                    mike = entity;
                    entity = this;
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                };
                return entity;
            };
            entity = undefined;
            zulu = zulu.bind(entity)();
            report['onConnect'] = zulu;
            report = mike.rpcServer;
            zulu = function(argFoo, argBar) {
                report = argFoo;
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 24;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {};
                oscar = 'RPC_APP_DISCONNECTED';
                mike['type'] = oscar;
                oscar = report.id;
                mike['socketId'] = oscar;
                report = report.application;
                mike['application'] = report;
                report = argBar;
                mike['reason'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            report['onDisconnect'] = zulu;
            report = _closure1_slot7;
            verify = new Array(6);
            verify[0] = report;
            report = _closure1_slot8;
            verify[1] = report;
            report = _closure1_slot11;
            verify[2] = report;
            report = _closure1_slot16;
            verify[3] = report;
            report = _closure1_slot10;
            verify[4] = report;
            report = _closure1_slot12;
            verify[5] = report;
            golf = _closure1_slot0;
            report = _closure1_slot2;
            oscar = 27;
            oscar = report[oscar];
            oscar = golf.bind(entity)(oscar);
            options = oscar.BatchedStoreListener;
            golf = verify.concat;
            oscar = mike.stores;
            yankee = golf.bind(verify)(oscar);
            oscar = options.prototype;
            oscar = Object.create(oscar, {constructor: {value: options}});
            offset = function() {
                entity = _closure3_slot0;
                mike = entity.rpcServer;
                entity = mike.updateSubscriptions;
                entity = entity.bind(mike)();
                return entity;
            };
            romeo = oscar;
            tango = new romeo[options](yankee, offset, verify);
            golf = tango instanceof Object ? tango : oscar;
            oscar = golf.attach;
            tango = 'RPCServerManager';
            tango = oscar.bind(golf)(tango);
            tango = _closure1_slot1;
            zulu = 24;
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.subscribe;
            golf = mike.handleMessage;
            oscar = 'MESSAGE_CREATE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.subscribe;
            golf = mike.handleMessage;
            oscar = 'MESSAGE_UPDATE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.subscribe;
            golf = mike.handleMessage;
            oscar = 'MESSAGE_DELETE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.subscribe;
            golf = mike.handleSpeaking;
            oscar = 'SPEAKING';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.subscribe;
            golf = mike.handleOAuth2TokenRevoke;
            oscar = 'OAUTH2_TOKEN_REVOKE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.subscribe;
            golf = mike.handleGuildCreate;
            oscar = 'GUILD_CREATE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.subscribe;
            golf = mike.handleChannelCreate;
            oscar = 'CHANNEL_CREATE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.subscribe;
            golf = mike.handleLogout;
            oscar = 'LOGOUT';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.subscribe;
            golf = mike.handleVoiceChannelSelect;
            oscar = 'VOICE_CHANNEL_SELECT';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.subscribe;
            golf = mike.handleNotificationCreate;
            oscar = 'RPC_NOTIFICATION_CREATE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.subscribe;
            golf = mike.handleActivityJoin;
            oscar = 'ACTIVITY_JOIN';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.subscribe;
            golf = mike.handleActivityLayoutModeUpdate;
            oscar = 'ACTIVITY_LAYOUT_MODE_UPDATE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.subscribe;
            golf = mike.handleThermalStateChange;
            oscar = 'THERMAL_STATE_CHANGE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.subscribe;
            golf = mike.handleScreenOrientationUpdate;
            oscar = 'ACTIVITY_SCREEN_ORIENTATION_UPDATE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.subscribe;
            golf = mike.handleEmbeddedActivityUpdate;
            oscar = 'EMBEDDED_ACTIVITY_UPDATE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.subscribe;
            golf = mike.handleRelationshipAdd;
            oscar = 'RELATIONSHIP_ADD';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.subscribe;
            golf = mike.handleRelationshipUpdate;
            oscar = 'RELATIONSHIP_UPDATE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.subscribe;
            golf = mike.handleRelationshipRemove;
            oscar = 'RELATIONSHIP_REMOVE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.subscribe;
            golf = mike.handlePresenceUpdates;
            oscar = 'PRESENCE_UPDATES';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.subscribe;
            golf = mike.handlePresencesReplace;
            oscar = 'PRESENCES_REPLACE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.subscribe;
            golf = mike.handleUserUpdate;
            oscar = 'USER_UPDATE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.subscribe;
            golf = mike.handleEntitlementCreate;
            oscar = 'ENTITLEMENT_CREATE';
            oscar = options.bind(verify)(oscar, golf);
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.subscribe;
            zulu = mike.handleEntitlementDelete;
            mike = 'ENTITLEMENT_DELETE';
            mike = tango.bind(report)(mike, zulu);
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'terminate';
        entity['key'] = oscar;
        report = function() { // Original name: terminate
            mike = this;
            tango = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 24;
            oscar = report[zulu];
            entity = undefined;
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleMessage;
            oscar = 'MESSAGE_CREATE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleMessage;
            oscar = 'MESSAGE_UPDATE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleMessage;
            oscar = 'MESSAGE_DELETE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleSpeaking;
            oscar = 'SPEAKING';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleOAuth2TokenRevoke;
            oscar = 'OAUTH2_TOKEN_REVOKE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleGuildCreate;
            oscar = 'GUILD_CREATE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleChannelCreate;
            oscar = 'CHANNEL_CREATE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleLogout;
            oscar = 'LOGOUT';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleVoiceChannelSelect;
            oscar = 'VOICE_CHANNEL_SELECT';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleNotificationCreate;
            oscar = 'RPC_NOTIFICATION_CREATE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleActivityJoin;
            oscar = 'ACTIVITY_JOIN';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleActivityLayoutModeUpdate;
            oscar = 'ACTIVITY_LAYOUT_MODE_UPDATE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleThermalStateChange;
            oscar = 'THERMAL_STATE_CHANGE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleScreenOrientationUpdate;
            oscar = 'ACTIVITY_SCREEN_ORIENTATION_UPDATE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleEmbeddedActivityUpdate;
            oscar = 'EMBEDDED_ACTIVITY_UPDATE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleRelationshipAdd;
            oscar = 'RELATIONSHIP_ADD';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleRelationshipUpdate;
            oscar = 'RELATIONSHIP_UPDATE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleRelationshipRemove;
            oscar = 'RELATIONSHIP_REMOVE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handlePresenceUpdates;
            oscar = 'PRESENCE_UPDATES';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handlePresencesReplace;
            oscar = 'PRESENCES_REPLACE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleUserUpdate;
            oscar = 'USER_UPDATE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleEntitlementCreate;
            oscar = 'ENTITLEMENT_CREATE';
            oscar = options.bind(verify)(oscar, golf);
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.unsubscribe;
            zulu = mike.handleEntitlementDelete;
            mike = 'ENTITLEMENT_DELETE';
            mike = tango.bind(report)(mike, zulu);
            return entity;
        };
        entity['value'] = report;
        mike[2] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 28;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/rpc/server/RPCServerManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();