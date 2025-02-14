// app/stores/TypingStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun100548: for(var _fun100548_ip = 0; ; ) switch(_fun100548_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot17;
            entity = entity.bind(zulu)();
            if(entity) { _fun100548_ip = 51; continue _fun100548 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun100548_ip = 92; continue _fun100548;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun100548_ip = 71; continue _fun100548 }
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
    var _closure1_slot16 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun100549: for(var _fun100549_ip = 0; ; ) switch(_fun100549_ip) {
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
            _fun100549_ip = 76; continue _fun100549;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot17 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: _getTypingUsers
        _fun100552: for(var _fun100552_ip = 0; ; ) switch(_fun100552_ip) {
 0:
            zulu = _closure1_slot14;
            entity = argFoo;
            entity = zulu[entity];
            zulu = null;
            if(!(zulu == entity)) { _fun100552_ip = 24; continue _fun100552 }
 20:
            entity = _closure1_slot15;
 24:
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    yankee = function(argFoo) { // Original name: handleTypingStart
        entity = argFoo;
        tango = entity.channelId;
        oscar = entity.userId;
        zulu = {};
        report = _closure1_slot18;
        entity = undefined;
        options = report.bind(entity)(tango);
        verify = zulu;
        report = copyDataProperties(verify, options);
        report = global;
        golf = report.clearTimeout;
        report = zulu[oscar];
        report = golf.bind(entity)(report);
        report = function(argFoo, argBar) { // Original name: scheduleClear
            mike = argFoo;
            var _closure3_slot0 = mike;
            mike = argBar;
            var _closure3_slot1 = mike;
            mike = global;
            tango = mike.setTimeout;
            zulu = _closure1_slot12;
            mike = undefined;
            entity = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 11;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {};
                report = 'TYPING_STOP';
                mike['type'] = report;
                oscar = _closure3_slot0;
                mike['channelId'] = oscar;
                report = _closure3_slot1;
                mike['userId'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity = tango.bind(mike)(entity, zulu);
            return entity;
        };
        report = report.bind(entity)(tango, oscar);
        zulu[oscar] = report;
        mike = _closure1_slot14;
        mike[tango] = zulu;
        return entity;
    };
    var _closure1_slot19 = yankee;
    offset = function(argFoo) { // Original name: handleTypingStop
        _fun100556: for(var _fun100556_ip = 0; ; ) switch(_fun100556_ip) {
 0:
            entity = argFoo;
            tango = entity.channelId;
            report = entity.userId;
            entity = _closure1_slot14;
            entity = entity[tango];
            oscar = null;
            if(!(oscar != entity)) { _fun100556_ip = 83; continue _fun100556 }
 30:
            zulu = entity[report];
            if(!(oscar != zulu)) { _fun100556_ip = 83; continue _fun100556 }
 38:
            zulu = {};
            verify = zulu;
            options = entity;
            entity = copyDataProperties(verify, options);
            entity = global;
            golf = entity.clearTimeout;
            oscar = zulu[report];
            entity = undefined;
            oscar = golf.bind(entity)(oscar);
            report = delete zulu[report];
            mike = _closure1_slot14;
            mike[tango] = zulu;
            return entity;
 83:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot20 = offset;
    verify = function() { // Original name: handleConnectionOpen
        entity = {};
        _closure1_slot14 = entity;
        entity = undefined;
        return entity;
    };
    mike = global;
    foxtrot = mike.Object;
    romeo = foxtrot.defineProperty;
    options = {};
    entity = true;
    options['value'] = entity;
    entity = '__esModule';
    entity = romeo.bind(foxtrot)(zulu, entity, options);
    entity = 0;
    options = oscar[entity];
    entity = undefined;
    options = golf.bind(entity)(options);
    var _closure1_slot3 = options;
    options = 1;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot4 = options;
    options = 2;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot5 = options;
    options = 3;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot6 = options;
    options = 4;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot7 = options;
    options = 5;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot8 = options;
    options = 6;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.SlowmodeType;
    var _closure1_slot9 = options;
    options = 7;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.Endpoints;
    var _closure1_slot10 = options;
    options = 8;
    romeo = oscar[options];
    romeo = golf.bind(entity)(romeo);
    romeo = romeo.Millis;
    foxtrot = romeo.SECOND;
    romeo = 10;
    romeo = romeo * foxtrot;
    var _closure1_slot12 = romeo;
    options = oscar[options];
    options = golf.bind(entity)(options);
    options = options.Millis;
    romeo = options.SECOND;
    options = 1.5;
    options = options * romeo;
    var _closure1_slot13 = options;
    options = {};
    var _closure1_slot14 = options;
    romeo = mike.Object;
    options = romeo.freeze;
    mike = {};
    mike = options.bind(romeo)(mike);
    var _closure1_slot15 = mike;
    mike = 12;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: TypingStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot3;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot16;
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
        entity = 'getTypingUsers';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            zulu = _closure1_slot18;
            mike = undefined;
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golf = 'isTyping';
        report['key'] = golf;
        oscar = function(argFoo, argBar) { // Original name: value
            zulu = _closure1_slot18;
            mike = undefined;
            entity = argFoo;
            mike = zulu.bind(mike)(entity);
            entity = argBar;
            mike = mike[entity];
            entity = null;
            entity = entity != mike;
            return entity;
        };
        report['value'] = oscar;
        entity[1] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'TypingStore';
    options['displayName'] = mike;
    mike = 11;
    mike = oscar[mike];
    sizing = golf.bind(entity)(mike);
    mike = {};
    mike['TYPING_START'] = yankee;
    mike['TYPING_STOP'] = offset;
    offset = function(argFoo) { // Original name: handleTypingStartLocal
        _fun100562: for(var _fun100562_ip = 0; ; ) switch(_fun100562_ip) {
 0:
            entity = argFoo;
            report = entity.channelId;
            var _closure2_slot0 = report;
            tango = _closure1_slot8;
            entity = tango.getId;
            tango = entity.bind(tango)();
            var _closure2_slot1 = tango;
            verify = null;
            if(!(verify != tango)) { _fun100562_ip = 332; continue _fun100562 }
 44:
            golf = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 9;
            oscar = oscar[entity];
            entity = undefined;
            oscar = golf.bind(entity)(oscar);
            oscar = oscar.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
            if(!(report !== oscar)) { _fun100562_ip = 328; continue _fun100562 }
 79:
            oscar = _closure1_slot11;
            oscar = verify != oscar;
            if(!oscar) { _fun100562_ip = 103; continue _fun100562 }
 90:
            golf = _closure1_slot11;
            golf = golf.channelId;
            oscar = golf !== report;
 103:
            if(!oscar) { _fun100562_ip = 147; continue _fun100562 }
 106:
            oscar = _closure1_slot11;
            oscar = oscar.timeout;
            if(!(verify != oscar)) { _fun100562_ip = 143; continue _fun100562 }
 120:
            oscar = global;
            golf = oscar.clearTimeout;
            oscar = _closure1_slot11;
            oscar = oscar.timeout;
            oscar = golf.bind(entity)(oscar);
 143:
            var _closure1_slot11 = verify;
 147:
            golf = global;
            options = golf.Date;
            oscar = options.now;
            oscar = oscar.bind(options)();
            offset = _closure1_slot12;
            options = 0.8;
            offset = options * offset;
            options = _closure1_slot11;
            if(!(verify != options)) { _fun100562_ip = 222; continue _fun100562 }
 190:
            options = _closure1_slot11;
            options = options.timeout;
            if(!(verify == options)) { _fun100562_ip = 324; continue _fun100562 }
 204:
            options = _closure1_slot11;
            options = options.prevSend;
            options = options + offset;
            if(!(!(options > oscar))) { _fun100562_ip = 324; continue _fun100562 }
 222:
            options = _closure1_slot11;
            if(!(verify != options)) { _fun100562_ip = 260; continue _fun100562 }
 230:
            options = _closure1_slot11;
            verify = options.prevSend;
            options = 2;
            options = options * offset;
            options = oscar - options;
            verify = verify > options;
            options = 0;
            if(!verify) { _fun100562_ip = 264; continue _fun100562 }
 260:
            options = _closure1_slot13;
 264:
            golf = golf.setTimeout;
            zulu = function() {
                _fun100563: for(var _fun100563_ip = 0; ; ) switch(_fun100563_ip) {
 0:
                    entity = _closure1_slot11;
                    mike = null;
                    entity = mike != entity;
                    if(!entity) { _fun100563_ip = 36; continue _fun100563 }
 16:
                    zulu = _closure1_slot11;
                    tango = zulu.channelId;
                    zulu = _closure2_slot0;
                    entity = tango === zulu;
 36:
                    if(!entity) { _fun100563_ip = 64; continue _fun100563 }
 39:
                    tango = _closure2_slot1;
                    oscar = _closure1_slot8;
                    zulu = oscar.getId;
                    zulu = zulu.bind(oscar)();
                    entity = tango === zulu;
 64:
                    if(!entity) { _fun100563_ip = 81; continue _fun100563 }
 67:
                    zulu = _closure1_slot11;
                    zulu = zulu.timeout;
                    entity = mike != zulu;
 81:
                    if(!entity) { _fun100563_ip = 245; continue _fun100563 }
 87:
                    entity = _closure1_slot11;
                    entity['timeout'] = mike;
                    mike = _closure2_slot0;
                    entity = _closure1_slot18;
                    zulu = undefined;
                    golf = entity.bind(zulu)(mike);
                    entity = _closure1_slot15;
                    mike = 0;
                    if(!(golf !== entity)) { _fun100563_ip = 148; continue _fun100563 }
 125:
                    entity = global;
                    oscar = entity.Object;
                    entity = oscar.keys;
                    entity = entity.bind(oscar)(golf);
                    mike = entity.length;
 148:
                    entity = 5;
                    if(!(!(mike > entity))) { _fun100563_ip = 245; continue _fun100563 }
 155:
                    mike = _closure1_slot0;
                    oscar = _closure1_slot2;
                    entity = 10;
                    entity = oscar[entity];
                    entity = mike.bind(zulu)(entity);
                    zulu = entity.HTTP;
                    mike = zulu.post;
                    entity = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    oscar = _closure1_slot10;
                    report = oscar.TYPING;
                    tango = _closure2_slot0;
                    tango = report.bind(oscar)(tango);
                    entity['url'] = tango;
                    zulu = mike.bind(zulu)(entity);
                    mike = zulu.then;
                    entity = function(argFoo) {
                        _fun100564: for(var _fun100564_ip = 0; ; ) switch(_fun100564_ip) {
 0:
                            mike = argFoo;
                            zulu = mike.status;
                            entity = 200;
                            if(!(entity === zulu)) { _fun100564_ip = 236; continue _fun100564 }
 18:
                            entity = mike.body;
                            tango = entity.message_send_cooldown_ms;
                            zulu = null;
                            report = zulu != tango;
                            entity = 0;
                            oscar = 0;
                            if(!report) { _fun100564_ip = 47; continue _fun100564 }
 44:
                            oscar = tango;
 47:
                            mike = mike.body;
                            mike = mike.thread_create_cooldown_ms;
                            zulu = zulu != mike;
                            tango = 0;
                            if(!zulu) { _fun100564_ip = 72; continue _fun100564 }
 69:
                            tango = mike;
 72:
                            if(!(oscar > entity)) { _fun100564_ip = 154; continue _fun100564 }
 76:
                            report = _closure1_slot1;
                            zulu = _closure1_slot2;
                            mike = 11;
                            zulu = zulu[mike];
                            mike = undefined;
                            report = report.bind(mike)(zulu);
                            zulu = report.dispatch;
                            mike = {};
                            options = 'SLOWMODE_SET_COOLDOWN';
                            mike['type'] = options;
                            options = _closure2_slot0;
                            mike['channelId'] = options;
                            golf = _closure1_slot9;
                            golf = golf.SendMessage;
                            mike['slowmodeType'] = golf;
                            mike['cooldownMs'] = oscar;
                            mike = zulu.bind(report)(mike);
 154:
                            if(!(tango > entity)) { _fun100564_ip = 236; continue _fun100564 }
 158:
                            zulu = _closure1_slot1;
                            mike = _closure1_slot2;
                            entity = 11;
                            mike = mike[entity];
                            entity = undefined;
                            zulu = zulu.bind(entity)(mike);
                            mike = zulu.dispatch;
                            entity = {};
                            oscar = 'SLOWMODE_SET_COOLDOWN';
                            entity['type'] = oscar;
                            oscar = _closure2_slot0;
                            entity['channelId'] = oscar;
                            report = _closure1_slot9;
                            report = report.CreateThread;
                            entity['slowmodeType'] = report;
                            entity['cooldownMs'] = tango;
                            entity = mike.bind(zulu)(entity);
 236:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = mike.bind(zulu)(entity);
 245:
                    entity = undefined;
                    return entity;
                }
            };
            golf = golf.bind(entity)(zulu, options);
            zulu = {};
            zulu['channelId'] = report;
            zulu['timeout'] = golf;
            zulu['prevSend'] = oscar;
            _closure1_slot11 = zulu;
            zulu = _closure1_slot19;
            mike = {};
            mike['channelId'] = report;
            mike['userId'] = tango;
            mike = zulu.bind(entity)(mike);
            return entity;
 324:
            entity = false;
            return entity;
 328:
            entity = false;
            return entity;
 332:
            entity = false;
            return entity;
        }
    };
    mike['TYPING_START_LOCAL'] = offset;
    offset = function(argFoo) { // Original name: handleTypingStopLocal
        _fun100565: for(var _fun100565_ip = 0; ; ) switch(_fun100565_ip) {
 0:
            entity = argFoo;
            golf = entity.channelId;
            mike = _closure1_slot8;
            entity = mike.getId;
            oscar = entity.bind(mike)();
            tango = null;
            entity = tango != oscar;
            if(!entity) { _fun100565_ip = 129; continue _fun100565 }
 34:
            mike = _closure1_slot11;
            mike = tango != mike;
            if(!mike) { _fun100565_ip = 58; continue _fun100565 }
 45:
            report = _closure1_slot11;
            report = report.channelId;
            mike = report === golf;
 58:
            if(!mike) { _fun100565_ip = 75; continue _fun100565 }
 61:
            report = _closure1_slot11;
            report = report.timeout;
            mike = tango != report;
 75:
            if(!mike) { _fun100565_ip = 126; continue _fun100565 }
 78:
            report = global;
            verify = report.clearTimeout;
            report = _closure1_slot11;
            options = report.timeout;
            report = undefined;
            options = verify.bind(report)(options);
            _closure1_slot11 = tango;
            tango = _closure1_slot20;
            zulu = {};
            zulu['channelId'] = golf;
            zulu['userId'] = oscar;
            mike = tango.bind(report)(zulu);
 126:
            entity = mike;
 129:
            return entity;
        }
    };
    mike['TYPING_STOP_LOCAL'] = offset;
    mike['CONNECTION_OPEN'] = verify;
    mike['OVERLAY_INITIALIZE'] = verify;
    tango = function(argFoo) { // Original name: handleIncomingMessage
        _fun100566: for(var _fun100566_ip = 0; ; ) switch(_fun100566_ip) {
 0:
            entity = argFoo;
            report = entity.channelId;
            mike = entity.message;
            mike = mike.author;
            entity = entity.optimistic;
            if(!entity) { _fun100566_ip = 97; continue _fun100566 }
 28:
            tango = _closure1_slot11;
            entity = null;
            if(!(entity != tango)) { _fun100566_ip = 97; continue _fun100566 }
 41:
            tango = _closure1_slot11;
            tango = tango.channelId;
            if(!(tango === report)) { _fun100566_ip = 97; continue _fun100566 }
 54:
            tango = _closure1_slot11;
            tango = tango.timeout;
            if(!(entity != tango)) { _fun100566_ip = 93; continue _fun100566 }
 68:
            tango = global;
            golf = tango.clearTimeout;
            tango = _closure1_slot11;
            oscar = tango.timeout;
            tango = undefined;
            tango = golf.bind(tango)(oscar);
 93:
            _closure1_slot11 = entity;
 97:
            entity = null;
            entity = entity != mike;
            if(!entity) { _fun100566_ip = 135; continue _fun100566 }
 106:
            tango = _closure1_slot20;
            zulu = {};
            zulu['channelId'] = report;
            mike = mike.id;
            zulu['userId'] = mike;
            mike = undefined;
            entity = tango.bind(mike)(zulu);
 135:
            return entity;
        }
    };
    mike['MESSAGE_CREATE'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    output = tango;
    kilo = mike;
    mike = new output[options](sizing, kilo, backup);
    mike = mike instanceof Object ? mike : tango;
    tango = 13;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'stores/TypingStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();