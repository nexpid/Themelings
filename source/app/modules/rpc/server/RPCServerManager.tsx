// app/modules/rpc/server/RPCServerManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
            if(!michal) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 323; continue _fun00001 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 270; continue _fun00001 }
 110:
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
            if(!golfie) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot24;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golfie = _closure1_slot24;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 323:
            if(!tangon) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tangon;
 330:
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
 345:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot23 = entity;
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
    var _closure1_slot24 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot13 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot14 = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot15 = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.ActivityActionTypes;
    var _closure1_slot16 = golfie;
    golfie = tangon.RelationshipTypes;
    var _closure1_slot17 = golfie;
    golfie = tangon.AnalyticEvents;
    var _closure1_slot18 = golfie;
    golfie = tangon.RPCEvents;
    var _closure1_slot19 = golfie;
    tangon = tangon.RPCCloseCodes;
    var _closure1_slot20 = tangon;
    tangon = 14;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ActivityLayoutMode;
    var _closure1_slot21 = tangon;
    tangon = 15;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.MediaEngineContextTypes;
    var _closure1_slot22 = tangon;
    michal = function() {
        tangon = _closure1_slot5;
        zuuluu = function(argFoo) { // Original name: RPCServerManager
            michal = argFoo;
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            var _closure3_slot1 = zuuluu;
            oscard = _closure1_slot4;
            report = _closure2_slot0;
            entity = undefined;
            report = oscard.bind(entity)(zuuluu, report);
            report = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = argFoo;
                    zuuluu = _closure3_slot0;
                    zuuluu = zuuluu.rpcServer;
                    zuuluu = zuuluu.subscriptions;
                    tangon = zuuluu.length;
                    zuuluu = 0;
                    if(!(zuuluu !== tangon)) { _fun00008_ip = 397; continue _fun00007 }
 36:
                    tangon = michal.type;
                    zuuluu = 'MESSAGE_CREATE';
                    if(!(zuuluu === tangon)) { _fun00008_ip = 64; continue _fun00007 }
 49:
                    report = _closure3_slot0;
                    tangon = report.handleActivityMessage;
                    tangon = tangon.bind(report)(michal);
 64:
                    tangon = michal.type;
                    if(!(zuuluu !== tangon)) { _fun00008_ip = 224; continue _fun00007 }
 76:
                    zuuluu = 'MESSAGE_UPDATE';
                    if(!(zuuluu !== tangon)) { _fun00008_ip = 192; continue _fun00007 }
 84:
                    zuuluu = 'MESSAGE_DELETE';
                    if(!(zuuluu !== tangon)) { _fun00008_ip = 130; continue _fun00007 }
 92:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 16;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    tangon = report.bind(zuuluu)(tangon);
                    zuuluu = tangon.assertNever;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    return zuuluu;
 130:
                    zuuluu = _closure1_slot19;
                    tangon = zuuluu.MESSAGE_DELETE;
                    golfie = michal.channelId;
                    verify = {};
                    zuuluu = michal.id;
                    verify['id'] = zuuluu;
                    oscard = michal.id;
                    zuuluu = global;
                    zuuluu = zuuluu.HermesInternal;
                    report = zuuluu.concat;
                    zuuluu = '';
                    report = report.bind(zuuluu)(tangon, oscard);
                    oscard = tangon;
                    _fun00008_ip = 304; continue _fun00007;
 192:
                    zuuluu = _closure1_slot19;
                    oscard = zuuluu.MESSAGE_UPDATE;
                    zuuluu = michal.message;
                    golfie = zuuluu.channel_id;
                    verify = michal.message;
                    report = null;
                    _fun00008_ip = 304; continue _fun00007;
 224:
                    zuuluu = michal.message;
                    tangon = zuuluu.state;
                    zuuluu = 'SENDING';
                    if(!(zuuluu !== tangon)) { _fun00008_ip = 401; continue _fun00007 }
 245:
                    zuuluu = _closure1_slot19;
                    option = zuuluu.MESSAGE_CREATE;
                    golfie = michal.channelId;
                    verify = michal.message;
                    michal = michal.message;
                    yankee = michal.id;
                    michal = global;
                    michal = michal.HermesInternal;
                    offset = michal.concat;
                    michal = '';
                    report = offset.bind(michal)(option, yankee);
                    oscard = option;
 304:
                    michal = null;
                    if(!(michal != golfie)) { _fun00008_ip = 397; continue _fun00007 }
 310:
                    entity = _closure3_slot0;
                    tangon = entity.rpcServer;
                    zuuluu = tangon.dispatchToSubscriptions;
                    michal = {};
                    michal['channel_id'] = golfie;
                    entity = {};
                    entity['channel_id'] = golfie;
                    offset = _closure1_slot0;
                    option = _closure1_slot2;
                    golfie = 17;
                    option = option[golfie];
                    golfie = undefined;
                    option = offset.bind(golfie)(option);
                    golfie = option.transformInternalTextMessage;
                    golfie = golfie.bind(option)(verify);
                    entity['message'] = golfie;
                    sizing = tangon;
                    kiloes = oscard;
                    backup = michal;
                    foxtra = entity;
                    romeon = report;
                    entity = sizing[zuuluu](kiloes, backup, foxtra, romeon, yankee);
 397:
                    entity = undefined;
                    return entity;
 401:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu['handleMessage'] = report;
            report = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    oscard = argFoo;
                    michal = _closure3_slot0;
                    michal = michal.rpcServer;
                    michal = michal.subscriptions;
                    michal = michal.length;
                    zuuluu = 0;
                    if(!(zuuluu !== michal)) { _fun00010_ip = 227; continue _fun00009 }
 36:
                    michal = oscard.speakingFlags;
                    if(!(zuuluu === michal)) { _fun00010_ip = 61; continue _fun00009 }
 46:
                    michal = _closure1_slot19;
                    report = michal.SPEAKING_STOP;
                    _fun00010_ip = 74; continue _fun00009;
 61:
                    michal = _closure1_slot19;
                    report = michal.SPEAKING_START;
 74:
                    tangon = oscard.context;
                    michal = _closure1_slot22;
                    michal = michal.DEFAULT;
                    if(!(tangon === michal)) { _fun00010_ip = 227; continue _fun00009 }
 99:
                    tangon = _closure1_slot13;
                    michal = tangon.getVoiceChannelId;
                    option = michal.bind(tangon)();
                    michal = null;
                    if(!(michal != option)) { _fun00010_ip = 227; continue _fun00009 }
 119:
                    golfie = _closure1_slot6;
                    tangon = golfie.getChannel;
                    tangon = tangon.bind(golfie)(option);
                    if(!(michal != tangon)) { _fun00010_ip = 235; continue _fun00009 }
 137:
                    option = _closure1_slot15;
                    golfie = option.getVoiceState;
                    zuuluu = tangon.getGuildId;
                    tangon = zuuluu.bind(tangon)();
                    zuuluu = oscard.userId;
                    golfie = golfie.bind(option)(tangon, zuuluu);
                    if(!(michal != golfie)) { _fun00010_ip = 231; continue _fun00009 }
 172:
                    entity = _closure3_slot0;
                    tangon = entity.rpcServer;
                    zuuluu = tangon.dispatchToSubscriptions;
                    michal = {};
                    entity = golfie.channelId;
                    michal['channel_id'] = entity;
                    entity = {};
                    golfie = golfie.channelId;
                    entity['channel_id'] = golfie;
                    oscard = oscard.userId;
                    entity['user_id'] = oscard;
                    entity = zuuluu.bind(tangon)(report, michal, entity);
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
            zuuluu['handleSpeaking'] = report;
            report = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    michal = argFoo;
                    entity = michal.guildId;
                    oscard = michal.channelId;
                    zuuluu = _closure3_slot0;
                    zuuluu = zuuluu.rpcServer;
                    zuuluu = zuuluu.subscriptions;
                    tangon = zuuluu.length;
                    zuuluu = 0;
                    if(!(zuuluu !== tangon)) { _fun00012_ip = 91; continue _fun00011 }
 43:
                    michal = _closure3_slot0;
                    report = michal.rpcServer;
                    tangon = report.dispatchToSubscriptions;
                    michal = _closure1_slot19;
                    zuuluu = michal.VOICE_CHANNEL_SELECT;
                    michal = {};
                    michal['channel_id'] = oscard;
                    michal['guild_id'] = entity;
                    entity = {};
                    entity = tangon.bind(report)(zuuluu, entity, michal);
 91:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu['handleVoiceChannelSelect'] = report;
            report = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = argFoo;
                    golfie = entity.channelId;
                    foxtra = entity.message;
                    offset = entity.icon;
                    oscard = entity.title;
                    entity = entity.body;
                    zuuluu = _closure3_slot0;
                    zuuluu = zuuluu.rpcServer;
                    zuuluu = zuuluu.subscriptions;
                    tangon = zuuluu.length;
                    zuuluu = 0;
                    if(!(zuuluu !== tangon)) { _fun00014_ip = 192; continue _fun00013 }
 61:
                    michal = _closure3_slot0;
                    report = michal.rpcServer;
                    tangon = report.dispatchToSubscriptions;
                    michal = _closure1_slot19;
                    zuuluu = michal.NOTIFICATION_CREATE;
                    michal = {};
                    michal['channel_id'] = golfie;
                    verify = _closure1_slot0;
                    golfie = _closure1_slot2;
                    romeon = 17;
                    golfie = golfie[romeon];
                    yankee = undefined;
                    verify = verify.bind(yankee)(golfie);
                    golfie = verify.transformInternalTextMessage;
                    golfie = golfie.bind(verify)(foxtra);
                    michal['message'] = golfie;
                    golfie = null;
                    verify = golfie != offset;
                    if(!verify) { _fun00014_ip = 170; continue _fun00013 }
 142:
                    verify = _closure1_slot0;
                    option = _closure1_slot2;
                    option = option[romeon];
                    verify = verify.bind(yankee)(option);
                    option = verify.getRemoteIconURL;
                    golfie = option.bind(verify)(offset);
 170:
                    michal['icon_url'] = golfie;
                    michal['title'] = oscard;
                    michal['body'] = entity;
                    entity = {};
                    entity = tangon.bind(report)(zuuluu, entity, michal);
 192:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu['handleNotificationCreate'] = report;
            report = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    michal = argFoo;
                    zuuluu = michal.applicationId;
                    var _closure4_slot0 = zuuluu;
                    oscard = michal.secret;
                    zuuluu = michal.intent;
                    tangon = michal.embedded;
                    report = _closure3_slot0;
                    report = report.rpcServer;
                    report = report.subscriptions;
                    golfie = report.length;
                    report = 0;
                    if(!(report !== golfie)) { _fun00016_ip = 153; continue _fun00015 }
 62:
                    report = {};
                    report['secret'] = oscard;
                    if(!tangon) { _fun00016_ip = 78; continue _fun00015 }
 72:
                    report['intent'] = zuuluu;
 78:
                    zuuluu = _closure3_slot0;
                    option = zuuluu.rpcServer;
                    golfie = option.dispatchToSubscriptions;
                    michal = _closure1_slot19;
                    oscard = michal.ACTIVITY_JOIN;
                    tangon = function(argFoo) {
                        entity = argFoo;
                        entity = entity.socket;
                        entity = entity.application;
                        michal = entity.id;
                        entity = _closure4_slot0;
                        entity = michal === entity;
                        return entity;
                    };
                    tangon = golfie.bind(option)(oscard, tangon, report);
                    tangon = zuuluu.rpcServer;
                    zuuluu = tangon.dispatchToSubscriptions;
                    michal = michal.GAME_JOIN;
                    entity = function(argFoo) {
                        entity = argFoo;
                        entity = entity.socket;
                        entity = entity.application;
                        michal = entity.id;
                        entity = _closure4_slot0;
                        entity = michal === entity;
                        return entity;
                    };
                    entity = zuuluu.bind(tangon)(michal, entity, report);
 153:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu['handleActivityJoin'] = report;
            report = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    michal = argFoo;
                    zuuluu = michal.applicationId;
                    var _closure4_slot0 = zuuluu;
                    oscard = michal.layoutMode;
                    michal = _closure3_slot0;
                    michal = michal.rpcServer;
                    michal = michal.subscriptions;
                    tangon = michal.length;
                    michal = 0;
                    if(!(michal !== tangon)) { _fun00018_ip = 153; continue _fun00017 }
 50:
                    tangon = _closure1_slot21;
                    tangon = tangon.FOCUSED;
                    zuuluu = _closure3_slot0;
                    verify = zuuluu.rpcServer;
                    option = verify.dispatchToSubscriptions;
                    michal = _closure1_slot19;
                    golfie = michal.ACTIVITY_PIP_MODE_UPDATE;
                    report = {};
                    tangon = oscard !== tangon;
                    report['is_pip_mode'] = tangon;
                    tangon = function(argFoo) {
                        entity = argFoo;
                        entity = entity.socket;
                        entity = entity.application;
                        michal = entity.id;
                        entity = _closure4_slot0;
                        entity = michal === entity;
                        return entity;
                    };
                    tangon = option.bind(verify)(golfie, tangon, report);
                    report = zuuluu.rpcServer;
                    tangon = report.dispatchToSubscriptions;
                    zuuluu = michal.ACTIVITY_LAYOUT_MODE_UPDATE;
                    michal = {};
                    michal['layout_mode'] = oscard;
                    entity = function(argFoo) {
                        entity = argFoo;
                        entity = entity.socket;
                        entity = entity.application;
                        michal = entity.id;
                        entity = _closure4_slot0;
                        entity = michal === entity;
                        return entity;
                    };
                    entity = tangon.bind(report)(zuuluu, entity, michal);
 153:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu['handleActivityLayoutModeUpdate'] = report;
            report = function(argFoo) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    michal = argFoo;
                    tangon = michal.applicationId;
                    var _closure4_slot0 = tangon;
                    michal = _closure3_slot0;
                    michal = michal.rpcServer;
                    michal = michal.subscriptions;
                    report = michal.length;
                    michal = 0;
                    if(!(michal !== report)) { _fun00020_ip = 132; continue _fun00019 }
 44:
                    michal = null;
                    if(!(michal != tangon)) { _fun00020_ip = 132; continue _fun00019 }
 50:
                    report = {};
                    golfie = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 18;
                    oscard = oscard[tangon];
                    tangon = undefined;
                    oscard = golfie.bind(tangon)(oscard);
                    tangon = oscard.getThermalState;
                    tangon = tangon.bind(oscard)();
                    report['thermal_state'] = tangon;
                    zuuluu = _closure3_slot0;
                    tangon = zuuluu.rpcServer;
                    zuuluu = tangon.dispatchToSubscriptions;
                    michal = _closure1_slot19;
                    michal = michal.THERMAL_STATE_UPDATE;
                    entity = function(argFoo) {
                        entity = argFoo;
                        entity = entity.socket;
                        entity = entity.application;
                        michal = entity.id;
                        entity = _closure4_slot0;
                        entity = michal === entity;
                        return entity;
                    };
                    entity = zuuluu.bind(tangon)(michal, entity, report);
 132:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu['handleThermalStateChange'] = report;
            report = function(argFoo) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    entity = argFoo;
                    entity = entity.screenOrientation;
                    zuuluu = _closure3_slot0;
                    zuuluu = zuuluu.rpcServer;
                    zuuluu = zuuluu.subscriptions;
                    tangon = zuuluu.length;
                    zuuluu = 0;
                    if(!(zuuluu !== tangon)) { _fun00022_ip = 84; continue _fun00021 }
 39:
                    michal = _closure3_slot0;
                    report = michal.rpcServer;
                    tangon = report.dispatchToSubscriptions;
                    michal = _closure1_slot19;
                    zuuluu = michal.ORIENTATION_UPDATE;
                    michal = {};
                    michal['screen_orientation'] = entity;
                    entity = {};
                    entity = tangon.bind(report)(zuuluu, entity, michal);
 84:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu['handleScreenOrientationUpdate'] = report;
            report = function() {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    entity = _closure3_slot0;
                    entity = entity.rpcServer;
                    entity = entity.subscriptions;
                    zuuluu = entity.length;
                    entity = 0;
                    if(!(entity !== zuuluu)) { _fun00024_ip = 100; continue _fun00023 }
 30:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 19;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    tangon = report.bind(zuuluu)(tangon);
                    zuuluu = tangon.activityInstanceConnectedParticipants;
                    report = zuuluu.bind(tangon)();
                    michal = _closure3_slot0;
                    tangon = michal.rpcServer;
                    zuuluu = tangon.dispatchToSubscriptions;
                    entity = _closure1_slot19;
                    michal = entity.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE;
                    entity = {};
                    entity = zuuluu.bind(tangon)(michal, entity, report);
 100:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu['handleEmbeddedActivityUpdate'] = report;
            report = function(argFoo) {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    entity = argFoo;
                    option = entity.channelId;
                    golfie = entity.message;
                    entity = undefined;
                    var _closure4_slot0 = entity;
                    tangon = _closure3_slot0;
                    tangon = tangon.rpcServer;
                    tangon = tangon.subscriptions;
                    report = tangon.length;
                    tangon = 0;
                    if(!(tangon !== report)) { _fun00026_ip = 511; continue _fun00025 }
 54:
                    tangon = golfie.application;
                    verify = golfie.activity;
                    report = null;
                    if(!(report != tangon)) { _fun00026_ip = 511; continue _fun00025 }
 74:
                    if(!(report != verify)) { _fun00026_ip = 511; continue _fun00025 }
 81:
                    oscard = verify.party_id;
                    if(!(report != oscard)) { _fun00026_ip = 511; continue _fun00025 }
 94:
                    romeon = _closure1_slot14;
                    offset = romeon.getUser;
                    foxtra = golfie.author;
                    backup = report == foxtra;
                    oscard = undefined;
                    if(backup) { _fun00026_ip = 127; continue _fun00025 }
 122:
                    oscard = foxtra.id;
 127:
                    romeon = offset.bind(romeon)(oscard);
                    if(!(report != romeon)) { _fun00026_ip = 511; continue _fun00025 }
 139:
                    offset = _closure1_slot14;
                    oscard = offset.getCurrentUser;
                    oscard = oscard.bind(offset)();
                    if(!(report != oscard)) { _fun00026_ip = 511; continue _fun00025 }
 159:
                    foxtra = romeon.id;
                    offset = oscard.id;
                    if(!(foxtra !== offset)) { _fun00026_ip = 511; continue _fun00025 }
 176:
                    foxtra = verify.type;
                    offset = _closure1_slot16;
                    offset = offset.JOIN_REQUEST;
                    if(!(foxtra !== offset)) { _fun00026_ip = 223; continue _fun00025 }
 195:
                    kiloes = _closure1_slot10;
                    backup = kiloes.getApplicationActivity;
                    foxtra = romeon.id;
                    offset = tangon.id;
                    offset = backup.bind(kiloes)(foxtra, offset);
                    _fun00026_ip = 249; continue _fun00025;
 223:
                    backup = _closure1_slot10;
                    foxtra = backup.getApplicationActivity;
                    oscard = oscard.id;
                    tangon = tangon.id;
                    offset = foxtra.bind(backup)(oscard, tangon);
 249:
                    if(!(report != offset)) { _fun00026_ip = 511; continue _fun00025 }
 256:
                    tangon = offset.party;
                    if(!(report != tangon)) { _fun00026_ip = 511; continue _fun00025 }
 269:
                    tangon = offset.party;
                    report = tangon.id;
                    tangon = verify.party_id;
                    if(!(report === tangon)) { _fun00026_ip = 511; continue _fun00025 }
 293:
                    tangon = offset.application_id;
                    _closure4_slot0 = tangon;
                    report = verify.type;
                    tangon = _closure1_slot16;
                    tangon = tangon.JOIN;
                    if(!(tangon !== report)) { _fun00026_ip = 412; continue _fun00025 }
 322:
                    tangon = _closure1_slot16;
                    tangon = tangon.JOIN_REQUEST;
                    if(!(tangon === report)) { _fun00026_ip = 511; continue _fun00025 }
 339:
                    tangon = _closure3_slot0;
                    backup = tangon.rpcServer;
                    foxtra = backup.dispatchToSubscriptions;
                    tangon = _closure1_slot19;
                    oscard = tangon.ACTIVITY_JOIN_REQUEST;
                    report = {};
                    kiloes = _closure1_slot1;
                    sizing = _closure1_slot2;
                    tangon = 20;
                    tangon = sizing[tangon];
                    tangon = kiloes.bind(entity)(tangon);
                    tangon = tangon.bind(entity)(romeon);
                    report['user'] = tangon;
                    tangon = function(argFoo) {
                        entity = argFoo;
                        entity = entity.socket;
                        entity = entity.application;
                        michal = entity.id;
                        entity = _closure4_slot0;
                        entity = michal === entity;
                        return entity;
                    };
                    tangon = foxtra.bind(backup)(oscard, tangon, report);
                    _fun00026_ip = 511; continue _fun00025;
 412:
                    zuuluu = _closure3_slot0;
                    oscard = zuuluu.rpcServer;
                    report = oscard.dispatchToSubscriptions;
                    zuuluu = _closure1_slot19;
                    tangon = zuuluu.ACTIVITY_INVITE;
                    zuuluu = {};
                    foxtra = _closure1_slot1;
                    backup = _closure1_slot2;
                    yankee = 20;
                    yankee = backup[yankee];
                    yankee = foxtra.bind(entity)(yankee);
                    yankee = yankee.bind(entity)(romeon);
                    zuuluu['user'] = yankee;
                    zuuluu['activity'] = offset;
                    verify = verify.type;
                    zuuluu['type'] = verify;
                    zuuluu['channel_id'] = option;
                    golfie = golfie.id;
                    zuuluu['message_id'] = golfie;
                    michal = function(argFoo) {
                        entity = argFoo;
                        entity = entity.socket;
                        entity = entity.application;
                        michal = entity.id;
                        entity = _closure4_slot0;
                        entity = michal === entity;
                        return entity;
                    };
                    michal = report.bind(oscard)(tangon, michal, zuuluu);
 511:
                    return entity;
                }
            };
            zuuluu['handleActivityMessage'] = report;
            report = function(argFoo) {
                michal = argFoo;
                michal = michal.accessToken;
                var _closure4_slot0 = michal;
                michal = _closure3_slot0;
                michal = michal.rpcServer;
                zuuluu = michal.sockets;
                michal = zuuluu.forEach;
                entity = function(argFoo) {
                    _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                        tangon = argFoo;
                        entity = tangon.authorization;
                        michal = entity.accessToken;
                        entity = _closure4_slot0;
                        if(!(michal === entity)) { _fun00028_ip = 57; continue _fun00027 }
 26:
                        zuuluu = tangon.close;
                        entity = _closure1_slot20;
                        michal = entity.TOKEN_REVOKED;
                        entity = 'Token revoked';
                        entity = zuuluu.bind(tangon)(michal, entity);
 57:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            zuuluu['handleOAuth2TokenRevoke'] = report;
            report = function(argFoo) {
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    entity = argFoo;
                    entity = entity.guild;
                    oscard = entity.id;
                    zuuluu = _closure1_slot8;
                    entity = zuuluu.getGuild;
                    entity = entity.bind(zuuluu)(oscard);
                    tangon = _closure3_slot0;
                    tangon = tangon.rpcServer;
                    tangon = tangon.subscriptions;
                    report = tangon.length;
                    tangon = 0;
                    tangon = tangon !== report;
                    if(!tangon) { _fun00030_ip = 69; continue _fun00029 }
 63:
                    report = null;
                    tangon = report != entity;
 69:
                    if(!tangon) { _fun00030_ip = 122; continue _fun00029 }
 72:
                    zuuluu = _closure3_slot0;
                    report = zuuluu.rpcServer;
                    tangon = report.dispatchToSubscriptions;
                    michal = _closure1_slot19;
                    zuuluu = michal.GUILD_CREATE;
                    michal = {};
                    michal['id'] = oscard;
                    entity = entity.name;
                    michal['name'] = entity;
                    entity = {};
                    entity = tangon.bind(report)(zuuluu, entity, michal);
 122:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu['handleGuildCreate'] = report;
            report = function(argFoo) {
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    entity = argFoo;
                    entity = entity.channel;
                    golfie = entity.id;
                    oscard = entity.name;
                    entity = entity.type;
                    zuuluu = _closure3_slot0;
                    zuuluu = zuuluu.rpcServer;
                    zuuluu = zuuluu.subscriptions;
                    tangon = zuuluu.length;
                    zuuluu = 0;
                    if(!(zuuluu !== tangon)) { _fun00032_ip = 105; continue _fun00031 }
 53:
                    michal = _closure3_slot0;
                    report = michal.rpcServer;
                    tangon = report.dispatchToSubscriptions;
                    michal = _closure1_slot19;
                    zuuluu = michal.CHANNEL_CREATE;
                    michal = {};
                    michal['id'] = golfie;
                    michal['name'] = oscard;
                    michal['type'] = entity;
                    entity = {};
                    entity = tangon.bind(report)(zuuluu, entity, michal);
 105:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu['handleChannelCreate'] = report;
            report = function() {
                entity = _closure3_slot0;
                entity = entity.rpcServer;
                zuuluu = entity.sockets;
                michal = zuuluu.forEach;
                entity = function(argFoo) {
                    tangon = argFoo;
                    zuuluu = tangon.close;
                    entity = _closure1_slot20;
                    michal = entity.CLOSE_NORMAL;
                    entity = 'User logout';
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            zuuluu['handleLogout'] = report;
            report = function(argFoo) {
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    entity = argFoo;
                    entity = entity.relationship;
                    golfie = entity.id;
                    option = entity.type;
                    entity = undefined;
                    var _closure4_slot0 = entity;
                    zuuluu = _closure3_slot0;
                    zuuluu = zuuluu.rpcServer;
                    zuuluu = zuuluu.subscriptions;
                    report = zuuluu.length;
                    zuuluu = 0;
                    if(!(zuuluu !== report)) { _fun00034_ip = 159; continue _fun00033 }
 57:
                    oscard = _closure1_slot14;
                    report = oscard.getUser;
                    golfie = report.bind(oscard)(golfie);
                    report = null;
                    if(!(report != golfie)) { _fun00034_ip = 159; continue _fun00033 }
 81:
                    oscard = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 17;
                    report = verify[report];
                    oscard = oscard.bind(entity)(report);
                    report = oscard.transformBaseRelationship;
                    report = report.bind(oscard)(option, golfie);
                    _closure4_slot0 = report;
                    tangon = _closure3_slot0;
                    oscard = tangon.rpcServer;
                    report = oscard.dispatchToSubscriptions;
                    zuuluu = _closure1_slot19;
                    tangon = zuuluu.RELATIONSHIP_UPDATE;
                    zuuluu = {};
                    michal = function(argFoo) {
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 17;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.transformApplicationRelationship;
                        michal = _closure4_slot0;
                        entity = argFoo;
                        entity = entity.socket;
                        entity = entity.application;
                        entity = entity.id;
                        entity = zuuluu.bind(tangon)(michal, entity);
                        return entity;
                    };
                    michal = report.bind(oscard)(tangon, zuuluu, michal);
 159:
                    return entity;
                }
            };
            zuuluu['handleRelationshipAdd'] = report;
            report = function(argFoo) {
                _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                    entity = argFoo;
                    entity = entity.relationship;
                    golfie = entity.id;
                    option = entity.type;
                    entity = undefined;
                    var _closure4_slot0 = entity;
                    zuuluu = _closure3_slot0;
                    zuuluu = zuuluu.rpcServer;
                    zuuluu = zuuluu.subscriptions;
                    report = zuuluu.length;
                    zuuluu = 0;
                    if(!(zuuluu !== report)) { _fun00036_ip = 159; continue _fun00035 }
 57:
                    oscard = _closure1_slot14;
                    report = oscard.getUser;
                    golfie = report.bind(oscard)(golfie);
                    report = null;
                    if(!(report != golfie)) { _fun00036_ip = 159; continue _fun00035 }
 81:
                    oscard = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 17;
                    report = verify[report];
                    oscard = oscard.bind(entity)(report);
                    report = oscard.transformBaseRelationship;
                    report = report.bind(oscard)(option, golfie);
                    _closure4_slot0 = report;
                    tangon = _closure3_slot0;
                    oscard = tangon.rpcServer;
                    report = oscard.dispatchToSubscriptions;
                    zuuluu = _closure1_slot19;
                    tangon = zuuluu.RELATIONSHIP_UPDATE;
                    zuuluu = {};
                    michal = function(argFoo) {
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 17;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.transformApplicationRelationship;
                        michal = _closure4_slot0;
                        entity = argFoo;
                        entity = entity.socket;
                        entity = entity.application;
                        entity = entity.id;
                        entity = zuuluu.bind(tangon)(michal, entity);
                        return entity;
                    };
                    michal = report.bind(oscard)(tangon, zuuluu, michal);
 159:
                    return entity;
                }
            };
            zuuluu['handleRelationshipUpdate'] = report;
            report = function(argFoo) {
                _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                    entity = argFoo;
                    entity = entity.relationship;
                    golfie = entity.id;
                    entity = undefined;
                    var _closure4_slot0 = entity;
                    zuuluu = _closure3_slot0;
                    zuuluu = zuuluu.rpcServer;
                    zuuluu = zuuluu.subscriptions;
                    report = zuuluu.length;
                    zuuluu = 0;
                    if(!(zuuluu !== report)) { _fun00038_ip = 164; continue _fun00037 }
 52:
                    oscard = _closure1_slot14;
                    report = oscard.getUser;
                    option = report.bind(oscard)(golfie);
                    report = null;
                    if(!(report != option)) { _fun00038_ip = 164; continue _fun00037 }
 76:
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    report = 17;
                    report = golfie[report];
                    golfie = oscard.bind(entity)(report);
                    oscard = golfie.transformBaseRelationship;
                    report = _closure1_slot17;
                    report = report.NONE;
                    report = oscard.bind(golfie)(report, option);
                    _closure4_slot0 = report;
                    tangon = _closure3_slot0;
                    oscard = tangon.rpcServer;
                    report = oscard.dispatchToSubscriptions;
                    zuuluu = _closure1_slot19;
                    tangon = zuuluu.RELATIONSHIP_UPDATE;
                    zuuluu = {};
                    michal = function(argFoo) {
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 17;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.transformApplicationRelationship;
                        michal = _closure4_slot0;
                        entity = argFoo;
                        entity = entity.socket;
                        entity = entity.application;
                        entity = entity.id;
                        entity = zuuluu.bind(tangon)(michal, entity);
                        return entity;
                    };
                    michal = report.bind(oscard)(tangon, zuuluu, michal);
 164:
                    return entity;
                }
            };
            zuuluu['handleRelationshipRemove'] = report;
            report = function(argFoo) {
                _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                    entity = argFoo;
                    option = entity.updates;
                    entity = undefined;
                    var _closure4_slot0 = entity;
                    michal = _closure3_slot0;
                    michal = michal.rpcServer;
                    michal = michal.subscriptions;
                    zuuluu = michal.length;
                    michal = 0;
                    if(!(michal !== zuuluu)) { _fun00040_ip = 160; continue _fun00039 }
 47:
                    report = function() { // Original name: _loop
                        _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                            oscard = _closure1_slot12;
                            report = oscard.getRelationshipType;
                            tangon = _closure4_slot0;
                            golfie = report.bind(oscard)(tangon);
                            tangon = _closure1_slot17;
                            tangon = tangon.NONE;
                            if(!(golfie !== tangon)) { _fun00042_ip = 155; continue _fun00041 }
 41:
                            report = _closure1_slot14;
                            tangon = report.getUser;
                            entity = _closure4_slot0;
                            oscard = tangon.bind(report)(entity);
                            entity = null;
                            if(!(entity != oscard)) { _fun00042_ip = 151; continue _fun00041 }
 66:
                            report = _closure1_slot0;
                            tangon = _closure1_slot2;
                            entity = 17;
                            tangon = tangon[entity];
                            entity = undefined;
                            report = report.bind(entity)(tangon);
                            tangon = report.transformBaseRelationship;
                            tangon = tangon.bind(report)(golfie, oscard);
                            var _closure5_slot0 = tangon;
                            tangon = _closure3_slot1;
                            oscard = tangon.rpcServer;
                            report = oscard.dispatchToSubscriptions;
                            zuuluu = _closure1_slot19;
                            tangon = zuuluu.RELATIONSHIP_UPDATE;
                            zuuluu = {};
                            michal = function(argFoo) {
                                zuuluu = _closure1_slot0;
                                michal = _closure1_slot2;
                                entity = 17;
                                michal = michal[entity];
                                entity = undefined;
                                tangon = zuuluu.bind(entity)(michal);
                                zuuluu = tangon.transformApplicationRelationship;
                                michal = _closure5_slot0;
                                entity = argFoo;
                                entity = entity.socket;
                                entity = entity.application;
                                entity = entity.id;
                                entity = zuuluu.bind(tangon)(michal, entity);
                                return entity;
                            };
                            michal = report.bind(oscard)(tangon, zuuluu, michal);
                            return entity;
 151:
                            entity = 0;
                            return entity;
 155:
                            entity = 0;
                            return entity;
                        }
                    };
                    zuuluu = _closure1_slot23;
                    michal = global;
                    golfie = michal.Set;
                    tangon = option.map;
                    michal = function(argFoo) {
                        entity = argFoo;
                        entity = entity.user;
                        entity = entity.id;
                        return entity;
                    };
                    verify = tangon.bind(option)(michal);
                    tangon = golfie.prototype;
                    tangon = Object.create(tangon, {constructor: {value: golfie}});
                    offset = tangon;
                    michal = new offset[golfie](verify, option);
                    tangon = michal instanceof Object ? michal : tangon;
                    michal = tangon.values;
                    michal = michal.bind(tangon)();
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.bind(entity)();
                    michal = zuuluu.done;
                    if(michal) { _fun00040_ip = 160; continue _fun00039 }
 132:
                    michal = zuuluu.value;
                    _closure4_slot0 = michal;
                    michal = report.bind(entity)();
                    golfie = tangon.bind(entity)();
                    michal = golfie.done;
                    zuuluu = golfie;
                    if(!michal) { _fun00040_ip = 132; continue _fun00039 }
 160:
                    return entity;
                }
            };
            zuuluu['handlePresenceUpdates'] = report;
            report = function() {
                _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                    entity = _closure3_slot0;
                    entity = entity.rpcServer;
                    entity = entity.subscriptions;
                    michal = entity.length;
                    entity = 0;
                    if(!(entity !== michal)) { _fun00044_ip = 89; continue _fun00043 }
 30:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 21;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.forEach;
                    michal = _closure1_slot12;
                    entity = michal.getRelationships;
                    michal = entity.bind(michal)();
                    entity = function(argFoo, argBar) {
                        _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                            oscard = argFoo;
                            zuuluu = _closure1_slot17;
                            zuuluu = zuuluu.NONE;
                            if(!(oscard !== zuuluu)) { _fun00046_ip = 129; continue _fun00045 }
 22:
                            report = _closure1_slot14;
                            tangon = report.getUser;
                            zuuluu = argBar;
                            report = tangon.bind(report)(zuuluu);
                            zuuluu = null;
                            if(!(zuuluu != report)) { _fun00046_ip = 129; continue _fun00045 }
 46:
                            golfie = _closure1_slot0;
                            tangon = _closure1_slot2;
                            zuuluu = 17;
                            tangon = tangon[zuuluu];
                            zuuluu = undefined;
                            tangon = golfie.bind(zuuluu)(tangon);
                            zuuluu = tangon.transformBaseRelationship;
                            zuuluu = zuuluu.bind(tangon)(oscard, report);
                            var _closure5_slot0 = zuuluu;
                            zuuluu = _closure3_slot0;
                            report = zuuluu.rpcServer;
                            tangon = report.dispatchToSubscriptions;
                            michal = _closure1_slot19;
                            zuuluu = michal.RELATIONSHIP_UPDATE;
                            michal = {};
                            entity = function(argFoo) {
                                zuuluu = _closure1_slot0;
                                michal = _closure1_slot2;
                                entity = 17;
                                michal = michal[entity];
                                entity = undefined;
                                tangon = zuuluu.bind(entity)(michal);
                                zuuluu = tangon.transformApplicationRelationship;
                                michal = _closure5_slot0;
                                entity = argFoo;
                                entity = entity.socket;
                                entity = entity.application;
                                entity = entity.id;
                                entity = zuuluu.bind(tangon)(michal, entity);
                                return entity;
                            };
                            entity = tangon.bind(report)(zuuluu, michal, entity);
 129:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = zuuluu.bind(tangon)(michal, entity);
 89:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu['handlePresencesReplace'] = report;
            report = function(argFoo) {
                _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                    entity = argFoo;
                    entity = entity.user;
                    golfie = entity.id;
                    entity = undefined;
                    var _closure4_slot0 = entity;
                    zuuluu = _closure3_slot0;
                    zuuluu = zuuluu.rpcServer;
                    zuuluu = zuuluu.subscriptions;
                    report = zuuluu.length;
                    zuuluu = 0;
                    if(!(zuuluu !== report)) { _fun00048_ip = 185; continue _fun00047 }
 54:
                    oscard = _closure1_slot12;
                    report = oscard.getRelationshipType;
                    option = report.bind(oscard)(golfie);
                    report = _closure1_slot17;
                    report = report.NONE;
                    if(!(option !== report)) { _fun00048_ip = 185; continue _fun00047 }
 86:
                    oscard = _closure1_slot14;
                    report = oscard.getUser;
                    golfie = report.bind(oscard)(golfie);
                    report = null;
                    if(!(report != golfie)) { _fun00048_ip = 185; continue _fun00047 }
 107:
                    oscard = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 17;
                    report = verify[report];
                    oscard = oscard.bind(entity)(report);
                    report = oscard.transformBaseRelationship;
                    report = report.bind(oscard)(option, golfie);
                    _closure4_slot0 = report;
                    tangon = _closure3_slot0;
                    oscard = tangon.rpcServer;
                    report = oscard.dispatchToSubscriptions;
                    zuuluu = _closure1_slot19;
                    tangon = zuuluu.RELATIONSHIP_UPDATE;
                    zuuluu = {};
                    michal = function(argFoo) {
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 17;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.transformApplicationRelationship;
                        michal = _closure4_slot0;
                        entity = argFoo;
                        entity = entity.socket;
                        entity = entity.application;
                        entity = entity.id;
                        entity = zuuluu.bind(tangon)(michal, entity);
                        return entity;
                    };
                    michal = report.bind(oscard)(tangon, zuuluu, michal);
 185:
                    return entity;
                }
            };
            zuuluu['handleUserUpdate'] = report;
            report = function(argFoo) {
                _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                    michal = argFoo;
                    oscard = michal.entitlement;
                    var _closure4_slot0 = oscard;
                    zuuluu = _closure3_slot0;
                    zuuluu = zuuluu.rpcServer;
                    zuuluu = zuuluu.subscriptions;
                    tangon = zuuluu.length;
                    zuuluu = 0;
                    if(!(zuuluu !== tangon)) { _fun00050_ip = 95; continue _fun00049 }
 45:
                    michal = _closure3_slot0;
                    report = michal.rpcServer;
                    tangon = report.dispatchToSubscriptions;
                    michal = _closure1_slot19;
                    zuuluu = michal.ENTITLEMENT_CREATE;
                    michal = {};
                    michal['entitlement'] = oscard;
                    entity = function(argFoo) {
                        entity = argFoo;
                        entity = entity.socket;
                        entity = entity.application;
                        michal = entity.id;
                        entity = _closure4_slot0;
                        entity = entity.application_id;
                        entity = michal === entity;
                        return entity;
                    };
                    entity = tangon.bind(report)(zuuluu, entity, michal);
 95:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu['handleEntitlementCreate'] = report;
            tangon = function(argFoo) {
                _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                    michal = argFoo;
                    oscard = michal.entitlement;
                    var _closure4_slot0 = oscard;
                    zuuluu = _closure3_slot0;
                    zuuluu = zuuluu.rpcServer;
                    zuuluu = zuuluu.subscriptions;
                    tangon = zuuluu.length;
                    zuuluu = 0;
                    if(!(zuuluu !== tangon)) { _fun00052_ip = 95; continue _fun00051 }
 45:
                    michal = _closure3_slot0;
                    report = michal.rpcServer;
                    tangon = report.dispatchToSubscriptions;
                    michal = _closure1_slot19;
                    zuuluu = michal.ENTITLEMENT_DELETE;
                    michal = {};
                    michal['entitlement'] = oscard;
                    entity = function(argFoo) {
                        entity = argFoo;
                        entity = entity.socket;
                        entity = entity.application;
                        michal = entity.id;
                        entity = _closure4_slot0;
                        entity = entity.application_id;
                        entity = michal === entity;
                        return entity;
                    };
                    entity = tangon.bind(report)(zuuluu, entity, michal);
 95:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu['handleEntitlementDelete'] = tangon;
            tangon = michal.server;
            zuuluu['rpcServer'] = tangon;
            tangon = michal.transports;
            zuuluu['transports'] = tangon;
            tangon = michal.commands;
            zuuluu['rpcCommandHandlers'] = tangon;
            tangon = michal.events;
            zuuluu['rpcEventHandlers'] = tangon;
            tangon = michal.stores;
            zuuluu['stores'] = tangon;
            michal = michal.registerTransportsForEmbeddedPlatform;
            zuuluu['registerTransportsForEmbeddedPlatform'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'loadServer';
        entity['key'] = michal;
        michal = function() { // Original name: loadServer
            _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                verify = this;
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 22;
                michal = michal[entity];
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                michal = michal.isPlatformEmbedded;
                if(!michal) { _fun00054_ip = 47; continue _fun00053 }
 37:
                michal = verify.registerTransportsForEmbeddedPlatform;
                michal = michal.bind(verify)();
 47:
                zuuluu = _closure1_slot23;
                michal = verify.transports;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.bind(entity)();
                michal = zuuluu.done;
                if(michal) { _fun00054_ip = 113; continue _fun00053 }
 74:
                oscard = zuuluu.value;
                report = verify.rpcServer;
                michal = report.registerTransport;
                michal = michal.bind(report)(oscard);
                report = tangon.bind(entity)();
                michal = report.done;
                zuuluu = report;
                if(!michal) { _fun00054_ip = 74; continue _fun00053 }
 113:
                report = verify.rpcCommandHandlers;
                michal = global;
                tangon = michal.Object;
                zuuluu = tangon.entries;
                offset = zuuluu.bind(tangon)(report);
                zuuluu = offset.length;
                golfie = 0;
                zuuluu = golfie < zuuluu;
                oscard = 2;
                report = 1;
                tangon = 0;
                if(!zuuluu) { _fun00054_ip = 214; continue _fun00053 }
 160:
                yankee = offset[tangon];
                zuuluu = _closure1_slot3;
                zuuluu = zuuluu.bind(entity)(yankee, oscard);
                foxtra = zuuluu[golfie];
                romeon = zuuluu[report];
                yankee = verify.rpcServer;
                zuuluu = yankee.setCommandHandler;
                zuuluu = zuuluu.bind(yankee)(foxtra, romeon);
                tangon = tangon + 1;
                zuuluu = offset.length;
                if(tangon < zuuluu) { _fun00054_ip = 160; continue _fun00053 }
 214:
                tangon = verify.rpcEventHandlers;
                zuuluu = michal.Object;
                michal = zuuluu.entries;
                tangon = michal.bind(zuuluu)(tangon);
                michal = tangon.length;
                michal = golfie < michal;
                zuuluu = 0;
                if(!michal) { _fun00054_ip = 305; continue _fun00053 }
 251:
                offset = tangon[zuuluu];
                michal = _closure1_slot3;
                michal = michal.bind(entity)(offset, oscard);
                romeon = michal[golfie];
                yankee = michal[report];
                offset = verify.rpcServer;
                michal = offset.setEventHandler;
                michal = michal.bind(offset)(romeon, yankee);
                zuuluu = zuuluu + 1;
                michal = tangon.length;
                if(zuuluu < michal) { _fun00054_ip = 251; continue _fun00053 }
 305:
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(3);
        michal[0] = entity;
        entity = {};
        oscard = 'init';
        entity['key'] = oscard;
        oscard = function() { // Original name: init
            michal = this;
            var _closure3_slot0 = michal;
            zuuluu = michal.rpcServer;
            entity = function() {
                michal = _closure1_slot14;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            zuuluu['getCurrentUser'] = entity;
            zuuluu = michal.rpcServer;
            entity = function(argFoo) {
                oscard = argFoo;
                tangon = _closure1_slot1;
                report = _closure1_slot2;
                entity = 23;
                zuuluu = report[entity];
                entity = undefined;
                option = tangon.bind(entity)(zuuluu);
                golfie = option.dispatch;
                zuuluu = {};
                verify = 'RPC_APP_CONNECTED';
                zuuluu['type'] = verify;
                verify = oscard.id;
                zuuluu['socketId'] = verify;
                verify = oscard.application;
                zuuluu['application'] = verify;
                zuuluu = golfie.bind(option)(zuuluu);
                zuuluu = 24;
                zuuluu = report[zuuluu];
                report = tangon.bind(entity)(zuuluu);
                tangon = report.track;
                michal = _closure1_slot18;
                zuuluu = michal.AUTHORIZED_APP_CONNECTED;
                michal = {};
                golfie = oscard.application;
                golfie = golfie.id;
                michal['app_id'] = golfie;
                oscard = oscard.transport;
                michal['transport'] = oscard;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            zuuluu['onConnect'] = entity;
            zuuluu = michal.rpcServer;
            entity = function(argFoo, argBar) {
                report = argFoo;
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 23;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                oscard = 'RPC_APP_DISCONNECTED';
                michal['type'] = oscard;
                oscard = report.id;
                michal['socketId'] = oscard;
                report = report.application;
                michal['application'] = report;
                report = argBar;
                michal['reason'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            zuuluu['onDisconnect'] = entity;
            entity = _closure1_slot6;
            verify = new Array(6);
            verify[0] = entity;
            entity = _closure1_slot7;
            verify[1] = entity;
            entity = _closure1_slot10;
            verify[2] = entity;
            entity = _closure1_slot15;
            verify[3] = entity;
            entity = _closure1_slot9;
            verify[4] = entity;
            entity = _closure1_slot11;
            verify[5] = entity;
            golfie = _closure1_slot0;
            report = _closure1_slot2;
            entity = 25;
            oscard = report[entity];
            entity = undefined;
            oscard = golfie.bind(entity)(oscard);
            option = oscard.BatchedStoreListener;
            golfie = verify.concat;
            oscard = michal.stores;
            yankee = golfie.bind(verify)(oscard);
            oscard = option.prototype;
            oscard = Object.create(oscard, {constructor: {value: option}});
            offset = function() {
                entity = _closure3_slot0;
                michal = entity.rpcServer;
                entity = michal.updateSubscriptions;
                entity = entity.bind(michal)();
                return entity;
            };
            romeon = oscard;
            tangon = new romeon[option](yankee, offset, verify);
            golfie = tangon instanceof Object ? tangon : oscard;
            oscard = golfie.attach;
            tangon = 'RPCServerManager';
            tangon = oscard.bind(golfie)(tangon);
            tangon = _closure1_slot1;
            zuuluu = 23;
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.subscribe;
            golfie = michal.handleMessage;
            oscard = 'MESSAGE_CREATE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.subscribe;
            golfie = michal.handleMessage;
            oscard = 'MESSAGE_UPDATE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.subscribe;
            golfie = michal.handleMessage;
            oscard = 'MESSAGE_DELETE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.subscribe;
            golfie = michal.handleSpeaking;
            oscard = 'SPEAKING';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.subscribe;
            golfie = michal.handleOAuth2TokenRevoke;
            oscard = 'OAUTH2_TOKEN_REVOKE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.subscribe;
            golfie = michal.handleGuildCreate;
            oscard = 'GUILD_CREATE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.subscribe;
            golfie = michal.handleChannelCreate;
            oscard = 'CHANNEL_CREATE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.subscribe;
            golfie = michal.handleLogout;
            oscard = 'LOGOUT';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.subscribe;
            golfie = michal.handleVoiceChannelSelect;
            oscard = 'VOICE_CHANNEL_SELECT';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.subscribe;
            golfie = michal.handleNotificationCreate;
            oscard = 'RPC_NOTIFICATION_CREATE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.subscribe;
            golfie = michal.handleActivityJoin;
            oscard = 'ACTIVITY_JOIN';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.subscribe;
            golfie = michal.handleActivityLayoutModeUpdate;
            oscard = 'ACTIVITY_LAYOUT_MODE_UPDATE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.subscribe;
            golfie = michal.handleThermalStateChange;
            oscard = 'THERMAL_STATE_CHANGE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.subscribe;
            golfie = michal.handleScreenOrientationUpdate;
            oscard = 'ACTIVITY_SCREEN_ORIENTATION_UPDATE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.subscribe;
            golfie = michal.handleEmbeddedActivityUpdate;
            oscard = 'EMBEDDED_ACTIVITY_UPDATE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.subscribe;
            golfie = michal.handleRelationshipAdd;
            oscard = 'RELATIONSHIP_ADD';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.subscribe;
            golfie = michal.handleRelationshipUpdate;
            oscard = 'RELATIONSHIP_UPDATE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.subscribe;
            golfie = michal.handleRelationshipRemove;
            oscard = 'RELATIONSHIP_REMOVE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.subscribe;
            golfie = michal.handlePresenceUpdates;
            oscard = 'PRESENCE_UPDATES';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.subscribe;
            golfie = michal.handlePresencesReplace;
            oscard = 'PRESENCES_REPLACE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.subscribe;
            golfie = michal.handleUserUpdate;
            oscard = 'USER_UPDATE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.subscribe;
            golfie = michal.handleEntitlementCreate;
            oscard = 'ENTITLEMENT_CREATE';
            oscard = option.bind(verify)(oscard, golfie);
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.subscribe;
            zuuluu = michal.handleEntitlementDelete;
            michal = 'ENTITLEMENT_DELETE';
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'terminate';
        entity['key'] = oscard;
        report = function() { // Original name: terminate
            michal = this;
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 23;
            oscard = report[zuuluu];
            entity = undefined;
            verify = tangon.bind(entity)(oscard);
            option = verify.unsubscribe;
            golfie = michal.handleMessage;
            oscard = 'MESSAGE_CREATE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.unsubscribe;
            golfie = michal.handleMessage;
            oscard = 'MESSAGE_UPDATE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.unsubscribe;
            golfie = michal.handleMessage;
            oscard = 'MESSAGE_DELETE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.unsubscribe;
            golfie = michal.handleSpeaking;
            oscard = 'SPEAKING';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.unsubscribe;
            golfie = michal.handleOAuth2TokenRevoke;
            oscard = 'OAUTH2_TOKEN_REVOKE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.unsubscribe;
            golfie = michal.handleGuildCreate;
            oscard = 'GUILD_CREATE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.unsubscribe;
            golfie = michal.handleChannelCreate;
            oscard = 'CHANNEL_CREATE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.unsubscribe;
            golfie = michal.handleLogout;
            oscard = 'LOGOUT';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.unsubscribe;
            golfie = michal.handleVoiceChannelSelect;
            oscard = 'VOICE_CHANNEL_SELECT';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.unsubscribe;
            golfie = michal.handleNotificationCreate;
            oscard = 'RPC_NOTIFICATION_CREATE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.unsubscribe;
            golfie = michal.handleActivityJoin;
            oscard = 'ACTIVITY_JOIN';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.unsubscribe;
            golfie = michal.handleActivityLayoutModeUpdate;
            oscard = 'ACTIVITY_LAYOUT_MODE_UPDATE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.unsubscribe;
            golfie = michal.handleThermalStateChange;
            oscard = 'THERMAL_STATE_CHANGE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.unsubscribe;
            golfie = michal.handleScreenOrientationUpdate;
            oscard = 'ACTIVITY_SCREEN_ORIENTATION_UPDATE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.unsubscribe;
            golfie = michal.handleEmbeddedActivityUpdate;
            oscard = 'EMBEDDED_ACTIVITY_UPDATE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.unsubscribe;
            golfie = michal.handleRelationshipAdd;
            oscard = 'RELATIONSHIP_ADD';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.unsubscribe;
            golfie = michal.handleRelationshipUpdate;
            oscard = 'RELATIONSHIP_UPDATE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.unsubscribe;
            golfie = michal.handleRelationshipRemove;
            oscard = 'RELATIONSHIP_REMOVE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.unsubscribe;
            golfie = michal.handlePresenceUpdates;
            oscard = 'PRESENCE_UPDATES';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.unsubscribe;
            golfie = michal.handlePresencesReplace;
            oscard = 'PRESENCES_REPLACE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.unsubscribe;
            golfie = michal.handleUserUpdate;
            oscard = 'USER_UPDATE';
            oscard = option.bind(verify)(oscard, golfie);
            oscard = report[zuuluu];
            verify = tangon.bind(entity)(oscard);
            option = verify.unsubscribe;
            golfie = michal.handleEntitlementCreate;
            oscard = 'ENTITLEMENT_CREATE';
            oscard = option.bind(verify)(oscard, golfie);
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.unsubscribe;
            zuuluu = michal.handleEntitlementDelete;
            michal = 'ENTITLEMENT_DELETE';
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        };
        entity['value'] = report;
        michal[2] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 26;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/rpc/server/RPCServerManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();