// app/stores/TypingStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot6;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot5;
            entity = _closure1_slot17;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot17 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: _getTypingUsers
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = _closure1_slot14;
            entity = argFoo;
            entity = zuuluu[entity];
            zuuluu = null;
            if(!(zuuluu == entity)) { _fun00006_ip = 24; continue _fun00005 }
 20:
            entity = _closure1_slot15;
 24:
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    yankee = function(argFoo) { // Original name: handleTypingStart
        entity = argFoo;
        tangon = entity.channelId;
        oscard = entity.userId;
        zuuluu = {};
        report = _closure1_slot18;
        entity = undefined;
        option = report.bind(entity)(tangon);
        verify = zuuluu;
        report = copyDataProperties(verify, option);
        report = global;
        golfie = report.clearTimeout;
        report = zuuluu[oscard];
        report = golfie.bind(entity)(report);
        report = function(argFoo, argBar) { // Original name: scheduleClear
            michal = argFoo;
            var _closure3_slot0 = michal;
            michal = argBar;
            var _closure3_slot1 = michal;
            michal = global;
            tangon = michal.setTimeout;
            zuuluu = _closure1_slot12;
            michal = undefined;
            entity = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 11;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                report = 'TYPING_STOP';
                michal['type'] = report;
                oscard = _closure3_slot0;
                michal['channelId'] = oscard;
                report = _closure3_slot1;
                michal['userId'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity = tangon.bind(michal)(entity, zuuluu);
            return entity;
        };
        report = report.bind(entity)(tangon, oscard);
        zuuluu[oscard] = report;
        michal = _closure1_slot14;
        michal[tangon] = zuuluu;
        return entity;
    };
    var _closure1_slot19 = yankee;
    offset = function(argFoo) { // Original name: handleTypingStop
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            tangon = entity.channelId;
            report = entity.userId;
            entity = _closure1_slot14;
            entity = entity[tangon];
            oscard = null;
            if(!(oscard != entity)) { _fun00008_ip = 83; continue _fun00007 }
 30:
            zuuluu = entity[report];
            if(!(oscard != zuuluu)) { _fun00008_ip = 83; continue _fun00007 }
 38:
            zuuluu = {};
            verify = zuuluu;
            option = entity;
            entity = copyDataProperties(verify, option);
            entity = global;
            golfie = entity.clearTimeout;
            oscard = zuuluu[report];
            entity = undefined;
            oscard = golfie.bind(entity)(oscard);
            report = delete zuuluu[report];
            michal = _closure1_slot14;
            michal[tangon] = zuuluu;
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
    michal = global;
    foxtra = michal.Object;
    romeon = foxtra.defineProperty;
    option = {};
    entity = true;
    option['value'] = entity;
    entity = '__esModule';
    entity = romeon.bind(foxtra)(zuuluu, entity, option);
    entity = 0;
    option = oscard[entity];
    entity = undefined;
    option = golfie.bind(entity)(option);
    var _closure1_slot3 = option;
    option = 1;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot4 = option;
    option = 2;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot5 = option;
    option = 3;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot6 = option;
    option = 4;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot7 = option;
    option = 5;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot8 = option;
    option = 6;
    option = oscard[option];
    option = report.bind(entity)(option);
    option = option.SlowmodeType;
    var _closure1_slot9 = option;
    option = 7;
    option = oscard[option];
    option = report.bind(entity)(option);
    option = option.Endpoints;
    var _closure1_slot10 = option;
    option = 8;
    romeon = oscard[option];
    romeon = golfie.bind(entity)(romeon);
    romeon = romeon.Millis;
    foxtra = romeon.SECOND;
    romeon = 10;
    romeon = romeon * foxtra;
    var _closure1_slot12 = romeon;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    option = option.Millis;
    romeon = option.SECOND;
    option = 1.5;
    option = option * romeon;
    var _closure1_slot13 = option;
    option = {};
    var _closure1_slot14 = option;
    romeon = michal.Object;
    option = romeon.freeze;
    michal = {};
    michal = option.bind(romeon)(michal);
    var _closure1_slot15 = michal;
    michal = 12;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: TypingStore
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot3;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot16;
            entity = arguments;
            entity = michal.bind(tangon)(report, zuuluu, entity);
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = 'getTypingUsers';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot18;
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golfie = 'isTyping';
        report['key'] = golfie;
        oscard = function(argFoo, argBar) { // Original name: value
            zuuluu = _closure1_slot18;
            michal = undefined;
            entity = argFoo;
            michal = zuuluu.bind(michal)(entity);
            entity = argBar;
            michal = michal[entity];
            entity = null;
            entity = entity != michal;
            return entity;
        };
        report['value'] = oscard;
        entity[1] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'TypingStore';
    option['displayName'] = michal;
    michal = 11;
    michal = oscard[michal];
    sizing = golfie.bind(entity)(michal);
    michal = {};
    michal['TYPING_START'] = yankee;
    michal['TYPING_STOP'] = offset;
    offset = function(argFoo) { // Original name: handleTypingStartLocal
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            report = entity.channelId;
            var _closure2_slot0 = report;
            tangon = _closure1_slot8;
            entity = tangon.getId;
            tangon = entity.bind(tangon)();
            var _closure2_slot1 = tangon;
            verify = null;
            if(!(verify != tangon)) { _fun00010_ip = 332; continue _fun00009 }
 44:
            golfie = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 9;
            oscard = oscard[entity];
            entity = undefined;
            oscard = golfie.bind(entity)(oscard);
            oscard = oscard.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
            if(!(report !== oscard)) { _fun00010_ip = 328; continue _fun00009 }
 79:
            oscard = _closure1_slot11;
            oscard = verify != oscard;
            if(!oscard) { _fun00010_ip = 103; continue _fun00009 }
 90:
            golfie = _closure1_slot11;
            golfie = golfie.channelId;
            oscard = golfie !== report;
 103:
            if(!oscard) { _fun00010_ip = 147; continue _fun00009 }
 106:
            oscard = _closure1_slot11;
            oscard = oscard.timeout;
            if(!(verify != oscard)) { _fun00010_ip = 143; continue _fun00009 }
 120:
            oscard = global;
            golfie = oscard.clearTimeout;
            oscard = _closure1_slot11;
            oscard = oscard.timeout;
            oscard = golfie.bind(entity)(oscard);
 143:
            var _closure1_slot11 = verify;
 147:
            golfie = global;
            option = golfie.Date;
            oscard = option.now;
            oscard = oscard.bind(option)();
            offset = _closure1_slot12;
            option = 0.8;
            offset = option * offset;
            option = _closure1_slot11;
            if(!(verify != option)) { _fun00010_ip = 222; continue _fun00009 }
 190:
            option = _closure1_slot11;
            option = option.timeout;
            if(!(verify == option)) { _fun00010_ip = 324; continue _fun00009 }
 204:
            option = _closure1_slot11;
            option = option.prevSend;
            option = option + offset;
            if(!(!(option > oscard))) { _fun00010_ip = 324; continue _fun00009 }
 222:
            option = _closure1_slot11;
            if(!(verify != option)) { _fun00010_ip = 260; continue _fun00009 }
 230:
            option = _closure1_slot11;
            verify = option.prevSend;
            option = 2;
            option = option * offset;
            option = oscard - option;
            verify = verify > option;
            option = 0;
            if(!verify) { _fun00010_ip = 264; continue _fun00009 }
 260:
            option = _closure1_slot13;
 264:
            golfie = golfie.setTimeout;
            zuuluu = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = _closure1_slot11;
                    michal = null;
                    entity = michal != entity;
                    if(!entity) { _fun00012_ip = 36; continue _fun00011 }
 16:
                    zuuluu = _closure1_slot11;
                    tangon = zuuluu.channelId;
                    zuuluu = _closure2_slot0;
                    entity = tangon === zuuluu;
 36:
                    if(!entity) { _fun00012_ip = 64; continue _fun00011 }
 39:
                    tangon = _closure2_slot1;
                    oscard = _closure1_slot8;
                    zuuluu = oscard.getId;
                    zuuluu = zuuluu.bind(oscard)();
                    entity = tangon === zuuluu;
 64:
                    if(!entity) { _fun00012_ip = 81; continue _fun00011 }
 67:
                    zuuluu = _closure1_slot11;
                    zuuluu = zuuluu.timeout;
                    entity = michal != zuuluu;
 81:
                    if(!entity) { _fun00012_ip = 245; continue _fun00011 }
 87:
                    entity = _closure1_slot11;
                    entity['timeout'] = michal;
                    michal = _closure2_slot0;
                    entity = _closure1_slot18;
                    zuuluu = undefined;
                    golfie = entity.bind(zuuluu)(michal);
                    entity = _closure1_slot15;
                    michal = 0;
                    if(!(golfie !== entity)) { _fun00012_ip = 148; continue _fun00011 }
 125:
                    entity = global;
                    oscard = entity.Object;
                    entity = oscard.keys;
                    entity = entity.bind(oscard)(golfie);
                    michal = entity.length;
 148:
                    entity = 5;
                    if(!(!(michal > entity))) { _fun00012_ip = 245; continue _fun00011 }
 155:
                    michal = _closure1_slot0;
                    oscard = _closure1_slot2;
                    entity = 10;
                    entity = oscard[entity];
                    entity = michal.bind(zuuluu)(entity);
                    zuuluu = entity.HTTP;
                    michal = zuuluu.post;
                    entity = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    oscard = _closure1_slot10;
                    report = oscard.TYPING;
                    tangon = _closure2_slot0;
                    tangon = report.bind(oscard)(tangon);
                    entity['url'] = tangon;
                    zuuluu = michal.bind(zuuluu)(entity);
                    michal = zuuluu.then;
                    entity = function(argFoo) {
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            michal = argFoo;
                            zuuluu = michal.status;
                            entity = 200;
                            if(!(entity === zuuluu)) { _fun00014_ip = 236; continue _fun00013 }
 18:
                            entity = michal.body;
                            tangon = entity.message_send_cooldown_ms;
                            zuuluu = null;
                            report = zuuluu != tangon;
                            entity = 0;
                            oscard = 0;
                            if(!report) { _fun00014_ip = 47; continue _fun00013 }
 44:
                            oscard = tangon;
 47:
                            michal = michal.body;
                            michal = michal.thread_create_cooldown_ms;
                            zuuluu = zuuluu != michal;
                            tangon = 0;
                            if(!zuuluu) { _fun00014_ip = 72; continue _fun00013 }
 69:
                            tangon = michal;
 72:
                            if(!(oscard > entity)) { _fun00014_ip = 154; continue _fun00013 }
 76:
                            report = _closure1_slot1;
                            zuuluu = _closure1_slot2;
                            michal = 11;
                            zuuluu = zuuluu[michal];
                            michal = undefined;
                            report = report.bind(michal)(zuuluu);
                            zuuluu = report.dispatch;
                            michal = {};
                            option = 'SLOWMODE_SET_COOLDOWN';
                            michal['type'] = option;
                            option = _closure2_slot0;
                            michal['channelId'] = option;
                            golfie = _closure1_slot9;
                            golfie = golfie.SendMessage;
                            michal['slowmodeType'] = golfie;
                            michal['cooldownMs'] = oscard;
                            michal = zuuluu.bind(report)(michal);
 154:
                            if(!(tangon > entity)) { _fun00014_ip = 236; continue _fun00013 }
 158:
                            zuuluu = _closure1_slot1;
                            michal = _closure1_slot2;
                            entity = 11;
                            michal = michal[entity];
                            entity = undefined;
                            zuuluu = zuuluu.bind(entity)(michal);
                            michal = zuuluu.dispatch;
                            entity = {};
                            oscard = 'SLOWMODE_SET_COOLDOWN';
                            entity['type'] = oscard;
                            oscard = _closure2_slot0;
                            entity['channelId'] = oscard;
                            report = _closure1_slot9;
                            report = report.CreateThread;
                            entity['slowmodeType'] = report;
                            entity['cooldownMs'] = tangon;
                            entity = michal.bind(zuuluu)(entity);
 236:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = michal.bind(zuuluu)(entity);
 245:
                    entity = undefined;
                    return entity;
                }
            };
            golfie = golfie.bind(entity)(zuuluu, option);
            zuuluu = {};
            zuuluu['channelId'] = report;
            zuuluu['timeout'] = golfie;
            zuuluu['prevSend'] = oscard;
            _closure1_slot11 = zuuluu;
            zuuluu = _closure1_slot19;
            michal = {};
            michal['channelId'] = report;
            michal['userId'] = tangon;
            michal = zuuluu.bind(entity)(michal);
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
    michal['TYPING_START_LOCAL'] = offset;
    offset = function(argFoo) { // Original name: handleTypingStopLocal
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            golfie = entity.channelId;
            michal = _closure1_slot8;
            entity = michal.getId;
            oscard = entity.bind(michal)();
            tangon = null;
            entity = tangon != oscard;
            if(!entity) { _fun00016_ip = 129; continue _fun00015 }
 34:
            michal = _closure1_slot11;
            michal = tangon != michal;
            if(!michal) { _fun00016_ip = 58; continue _fun00015 }
 45:
            report = _closure1_slot11;
            report = report.channelId;
            michal = report === golfie;
 58:
            if(!michal) { _fun00016_ip = 75; continue _fun00015 }
 61:
            report = _closure1_slot11;
            report = report.timeout;
            michal = tangon != report;
 75:
            if(!michal) { _fun00016_ip = 126; continue _fun00015 }
 78:
            report = global;
            verify = report.clearTimeout;
            report = _closure1_slot11;
            option = report.timeout;
            report = undefined;
            option = verify.bind(report)(option);
            _closure1_slot11 = tangon;
            tangon = _closure1_slot20;
            zuuluu = {};
            zuuluu['channelId'] = golfie;
            zuuluu['userId'] = oscard;
            michal = tangon.bind(report)(zuuluu);
 126:
            entity = michal;
 129:
            return entity;
        }
    };
    michal['TYPING_STOP_LOCAL'] = offset;
    michal['CONNECTION_OPEN'] = verify;
    michal['OVERLAY_INITIALIZE'] = verify;
    tangon = function(argFoo) { // Original name: handleIncomingMessage
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            report = entity.channelId;
            michal = entity.message;
            michal = michal.author;
            entity = entity.optimistic;
            if(!entity) { _fun00018_ip = 97; continue _fun00017 }
 28:
            tangon = _closure1_slot11;
            entity = null;
            if(!(entity != tangon)) { _fun00018_ip = 97; continue _fun00017 }
 41:
            tangon = _closure1_slot11;
            tangon = tangon.channelId;
            if(!(tangon === report)) { _fun00018_ip = 97; continue _fun00017 }
 54:
            tangon = _closure1_slot11;
            tangon = tangon.timeout;
            if(!(entity != tangon)) { _fun00018_ip = 93; continue _fun00017 }
 68:
            tangon = global;
            golfie = tangon.clearTimeout;
            tangon = _closure1_slot11;
            oscard = tangon.timeout;
            tangon = undefined;
            tangon = golfie.bind(tangon)(oscard);
 93:
            _closure1_slot11 = entity;
 97:
            entity = null;
            entity = entity != michal;
            if(!entity) { _fun00018_ip = 135; continue _fun00017 }
 106:
            tangon = _closure1_slot20;
            zuuluu = {};
            zuuluu['channelId'] = report;
            michal = michal.id;
            zuuluu['userId'] = michal;
            michal = undefined;
            entity = tangon.bind(michal)(zuuluu);
 135:
            return entity;
        }
    };
    michal['MESSAGE_CREATE'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    output = tangon;
    kiloes = michal;
    michal = new output[option](sizing, kiloes, backup);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 13;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'stores/TypingStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();