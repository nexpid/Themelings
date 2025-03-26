// app/modules/go_live/ApplicationStreamingManager.tsx
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
            if(michal) { _fun00002_ip = 344; continue _fun00001 }
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
            verify = _closure1_slot25;
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
            golfie = _closure1_slot25;
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
 344:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot24 = entity;
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
    var _closure1_slot25 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot6;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot5;
            entity = _closure1_slot27;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00008_ip = 51; continue _fun00007 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00008_ip = 92; continue _fun00007;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00008_ip = 71; continue _fun00007 }
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
    var _closure1_slot26 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
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
            _fun00010_ip = 76; continue _fun00009;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot27 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot27 = entity;
    entity = function(argFoo, argBar) { // Original name: maybeAutowatchStream
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tangon = argFoo;
            oscard = argBar;
            zuuluu = _closure1_slot13;
            entity = zuuluu.getVoiceChannelId;
            entity = entity.bind(zuuluu)();
            if(!(entity === tangon)) { _fun00012_ip = 251; continue _fun00011 }
 30:
            zuuluu = _closure1_slot10;
            entity = zuuluu.getChannel;
            golfie = entity.bind(zuuluu)(tangon);
            entity = null;
            if(!(entity != golfie)) { _fun00012_ip = 247; continue _fun00011 }
 53:
            zuuluu = golfie.isDM;
            zuuluu = zuuluu.bind(golfie)();
            if(zuuluu) { _fun00012_ip = 83; continue _fun00011 }
 66:
            zuuluu = golfie.isGuildStageVoice;
            zuuluu = zuuluu.bind(golfie)();
            if(zuuluu) { _fun00012_ip = 83; continue _fun00011 }
 79:
            zuuluu = false;
            return zuuluu;
 83:
            report = _closure1_slot8;
            tangon = report.getActiveStreamForUser;
            zuuluu = golfie.getGuildId;
            zuuluu = zuuluu.bind(golfie)();
            zuuluu = tangon.bind(report)(oscard, zuuluu);
            if(!(entity == zuuluu)) { _fun00012_ip = 243; continue _fun00011 }
 116:
            report = _closure1_slot8;
            tangon = report.getStreamForUser;
            zuuluu = golfie.getGuildId;
            zuuluu = zuuluu.bind(golfie)();
            oscard = tangon.bind(report)(oscard, zuuluu);
            if(!(entity != oscard)) { _fun00012_ip = 239; continue _fun00011 }
 146:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 19;
            entity = tangon[entity];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = zuuluu.encodeStreamKey;
            zuuluu = entity.bind(zuuluu)(oscard);
            entity = _closure1_slot23;
            entity = zuuluu !== entity;
            if(!entity) { _fun00012_ip = 237; continue _fun00011 }
 190:
            _closure1_slot23 = zuuluu;
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            michal = 16;
            michal = report[michal];
            report = zuuluu.bind(tangon)(michal);
            tangon = report.watchStream;
            zuuluu = {};
            michal = true;
            zuuluu['noFocus'] = michal;
            zuuluu = tangon.bind(report)(oscard, zuuluu);
            entity = true;
 237:
            return entity;
 239:
            entity = false;
            return entity;
 243:
            entity = false;
            return entity;
 247:
            entity = false;
            return entity;
 251:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    entity = function(argFoo, argBar) { // Original name: updateRegion
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            tangon = argBar;
            entity = null;
            if(!(entity == tangon)) { _fun00014_ip = 26; continue _fun00013 }
 9:
            zuuluu = _closure1_slot12;
            michal = zuuluu.getPreferredRegion;
            tangon = michal.bind(zuuluu)();
 26:
            entity = entity != tangon;
            if(!entity) { _fun00014_ip = 84; continue _fun00013 }
 33:
            report = _closure1_slot12;
            zuuluu = report.getRegion;
            golfie = _closure1_slot14;
            oscard = golfie.getHostname;
            option = _closure1_slot14;
            michal = option.getActiveStreamKey;
            michal = michal.bind(option)();
            michal = oscard.bind(golfie)(michal);
            michal = zuuluu.bind(report)(michal);
            entity = tangon !== michal;
 84:
            if(!entity) { _fun00014_ip = 127; continue _fun00013 }
 87:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 16;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.changeStreamRegion;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity, tangon);
 127:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot29 = entity;
    entity = function(argFoo, argBar) { // Original name: maybeStartConnectTimeout
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            tangon = argFoo;
            var _closure2_slot0 = tangon;
            zuuluu = _closure1_slot14;
            michal = zuuluu.getAllActiveStreamKeys;
            zuuluu = michal.bind(zuuluu)();
            michal = zuuluu.includes;
            michal = michal.bind(zuuluu)(tangon);
            if(michal) { _fun00016_ip = 77; continue _fun00015 }
 39:
            tangon = _closure1_slot19;
            zuuluu = tangon.start;
            michal = argBar;
            if(michal) { _fun00016_ip = 60; continue _fun00015 }
 54:
            michal = _closure1_slot21;
            _fun00016_ip = 64; continue _fun00015;
 60:
            michal = _closure1_slot22;
 64:
            entity = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 20;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                report = 'STREAM_TIMED_OUT';
                michal['type'] = report;
                report = _closure2_slot0;
                michal['streamKey'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity = zuuluu.bind(tangon)(michal, entity);
 77:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot30 = entity;
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
    yankee = 3;
    tangon = oscard[yankee];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    offset = 5;
    tangon = oscard[offset];
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
    option = 12;
    tangon = oscard[option];
    tangon = golfie.bind(entity)(tangon);
    tangon = 13;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.STREAM_NOTIFY_GUILD_MAX_SIZE;
    tangon = 14;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    verify = tangon.ApplicationStreamDeleteReasons;
    var _closure1_slot15 = verify;
    verify = tangon.ApplicationStreamStates;
    var _closure1_slot16 = verify;
    tangon = tangon.MediaEngineVideoStates;
    var _closure1_slot17 = tangon;
    tangon = 15;
    tangon = oscard[tangon];
    foxtra = report.bind(entity)(tangon);
    romeon = foxtra.debounce;
    tangon = 16;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    verify = tangon.notifyStreamStart;
    tangon = 1000;
    tangon = romeon.bind(foxtra)(verify, tangon);
    tangon = 17;
    verify = oscard[tangon];
    verify = report.bind(entity)(verify);
    verify = verify.Timeout;
    romeon = verify.prototype;
    romeon = Object.create(romeon, {constructor: {value: verify}});
    output = romeon;
    verify = new output[verify](sizing);
    verify = verify instanceof Object ? verify : romeon;
    var _closure1_slot18 = verify;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Timeout;
    verify = tangon.prototype;
    verify = Object.create(verify, {constructor: {value: tangon}});
    output = verify;
    tangon = new output[tangon](sizing);
    tangon = tangon instanceof Object ? tangon : verify;
    var _closure1_slot19 = tangon;
    tangon = 18;
    verify = oscard[tangon];
    verify = golfie.bind(entity)(verify);
    verify = verify.Millis;
    verify = verify.MINUTE;
    verify = yankee * verify;
    var _closure1_slot20 = verify;
    verify = oscard[tangon];
    verify = golfie.bind(entity)(verify);
    verify = verify.Millis;
    verify = verify.SECOND;
    verify = offset * verify;
    var _closure1_slot21 = verify;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.Millis;
    tangon = tangon.SECOND;
    tangon = option * tangon;
    var _closure1_slot22 = tangon;
    tangon = null;
    var _closure1_slot23 = tangon;
    tangon = 23;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        zuuluu = function(argFoo) { // Original name: BaseApplicationStreamingManager
            oscard = this;
            yankee = 0;
            golfie = copyRestArgs(yankee);
            zuuluu = _closure1_slot4;
            report = _closure2_slot0;
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(oscard, report);
            zuuluu = _closure1_slot26;
            entity = new Array(0);
            yankee = entity;
            offset = golfie;
            verify = 0;
            golfie = arraySpread(yankee, offset, verify);
            entity = zuuluu.bind(tangon)(oscard, report, entity);
            var _closure3_slot0 = entity;
            zuuluu = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    entity = argFoo;
                    golfie = entity.streamKey;
                    var _closure4_slot0 = golfie;
                    tangon = entity.allowMultiple;
                    oscard = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 19;
                    report = report[entity];
                    entity = undefined;
                    oscard = oscard.bind(entity)(report);
                    report = oscard.decodeStreamKey;
                    report = report.bind(oscard)(golfie);
                    option = report.channelId;
                    oscard = _closure1_slot10;
                    report = oscard.getChannel;
                    verify = report.bind(oscard)(option);
                    oscard = _closure1_slot30;
                    report = null;
                    option = report == verify;
                    report = undefined;
                    if(option) { _fun00018_ip = 101; continue _fun00017 }
 91:
                    option = verify.isGuildStageVoice;
                    report = option.bind(verify)();
 101:
                    report = oscard.bind(entity)(golfie, report);
                    if(tangon) { _fun00018_ip = 141; continue _fun00017 }
 110:
                    tangon = _closure1_slot8;
                    zuuluu = tangon.getAllActiveStreams;
                    tangon = zuuluu.bind(tangon)();
                    zuuluu = tangon.forEach;
                    michal = function(argFoo) {
                        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                            zuuluu = argFoo;
                            report = _closure1_slot0;
                            tangon = _closure1_slot2;
                            entity = 19;
                            tangon = tangon[entity];
                            entity = undefined;
                            report = report.bind(entity)(tangon);
                            tangon = report.encodeStreamKey;
                            report = tangon.bind(report)(zuuluu);
                            tangon = zuuluu.ownerId;
                            oscard = _closure1_slot9;
                            zuuluu = oscard.getId;
                            zuuluu = zuuluu.bind(oscard)();
                            zuuluu = tangon !== zuuluu;
                            if(!zuuluu) { _fun00020_ip = 77; continue _fun00019 }
 66:
                            tangon = _closure4_slot0;
                            zuuluu = report !== tangon;
 77:
                            if(!zuuluu) { _fun00020_ip = 114; continue _fun00019 }
 80:
                            zuuluu = _closure1_slot0;
                            tangon = _closure1_slot2;
                            michal = 16;
                            michal = tangon[michal];
                            tangon = zuuluu.bind(entity)(michal);
                            zuuluu = tangon.stopStream;
                            michal = false;
                            michal = zuuluu.bind(tangon)(report, michal);
 114:
                            return entity;
                        }
                    };
                    michal = zuuluu.bind(tangon)(michal);
 141:
                    return entity;
                }
            };
            entity['handleStreamWatch'] = zuuluu;
            zuuluu = function(argFoo) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    tangon = argFoo;
                    verify = tangon.channelId;
                    yankee = tangon.streamType;
                    offset = tangon.guildId;
                    michal = _closure1_slot10;
                    entity = michal.getChannel;
                    golfie = entity.bind(michal)(verify);
                    report = _closure1_slot30;
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 19;
                    michal = michal[entity];
                    entity = undefined;
                    oscard = zuuluu.bind(entity)(michal);
                    zuuluu = oscard.encodeStreamKey;
                    michal = {};
                    michal['streamType'] = yankee;
                    michal['guildId'] = offset;
                    michal['channelId'] = verify;
                    verify = _closure1_slot9;
                    option = verify.getId;
                    option = option.bind(verify)();
                    michal['ownerId'] = option;
                    zuuluu = zuuluu.bind(oscard)(michal);
                    michal = null;
                    oscard = michal == golfie;
                    michal = undefined;
                    if(oscard) { _fun00022_ip = 128; continue _fun00021 }
 118:
                    oscard = golfie.isGuildStageVoice;
                    michal = oscard.bind(golfie)();
 128:
                    michal = report.bind(entity)(zuuluu, michal);
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.platformHandleStreamStart;
                    michal = michal.bind(zuuluu)(tangon);
                    return entity;
                }
            };
            entity['handleStreamStart'] = zuuluu;
            zuuluu = function(argFoo) {
                entity = argFoo;
                report = entity.streamKey;
                zuuluu = _closure1_slot19;
                entity = zuuluu.stop;
                entity = entity.bind(zuuluu)();
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 19;
                zuuluu = zuuluu[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.decodeStreamKey;
                zuuluu = zuuluu.bind(tangon)(report);
                tangon = zuuluu.ownerId;
                tangon = zuuluu.guildId;
                zuuluu = _closure1_slot11;
                michal = zuuluu.getMemberCount;
                michal = michal.bind(zuuluu)(tangon);
                return entity;
            };
            entity['handleStreamCreate'] = zuuluu;
            zuuluu = function() {
                michal = _closure1_slot19;
                entity = michal.stop;
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
            };
            entity['handleStreamUpdate'] = zuuluu;
            zuuluu = function(argFoo) {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    entity = argFoo;
                    zuuluu = entity.reason;
                    oscard = entity.streamKey;
                    tangon = _closure1_slot19;
                    michal = tangon.stop;
                    michal = michal.bind(tangon)();
                    michal = _closure1_slot15;
                    michal = michal.STREAM_FULL;
                    if(!(zuuluu === michal)) { _fun00024_ip = 143; continue _fun00023 }
 46:
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    entity = 21;
                    michal = option[entity];
                    report = undefined;
                    tangon = golfie.bind(report)(michal);
                    zuuluu = tangon.reportAVError;
                    entity = option[entity];
                    entity = golfie.bind(report)(entity);
                    entity = entity.AVError;
                    michal = entity.STREAM_FULL;
                    entity = 22;
                    entity = option[entity];
                    report = golfie.bind(report)(entity);
                    entity = report.getStreamErrorContext;
                    entity = entity.bind(report)(oscard);
                    entity = zuuluu.bind(tangon)(michal, entity);
                    michal = _closure3_slot0;
                    entity = michal.platformShowStreamFull;
                    entity = entity.bind(michal)();
 143:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleStreamDelete'] = zuuluu;
            zuuluu = function() {
                zuuluu = _closure1_slot18;
                michal = zuuluu.stop;
                michal = michal.bind(zuuluu)();
                michal = _closure1_slot19;
                entity = michal.stop;
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
            };
            entity['handleStreamClose'] = zuuluu;
            zuuluu = function(argFoo) {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    entity = argFoo;
                    tangon = entity.channelId;
                    zuuluu = null;
                    if(!(zuuluu != tangon)) { _fun00026_ip = 83; continue _fun00025 }
 14:
                    _closure1_slot23 = zuuluu;
                    report = _closure1_slot8;
                    entity = report.getAllApplicationStreamsForChannel;
                    oscard = entity.bind(report)(tangon);
                    report = oscard.filter;
                    entity = function(argFoo) {
                        entity = argFoo;
                        michal = entity.ownerId;
                        zuuluu = _closure1_slot9;
                        entity = zuuluu.getId;
                        entity = entity.bind(zuuluu)();
                        entity = michal !== entity;
                        return entity;
                    };
                    report = report.bind(oscard)(entity);
                    entity = 0;
                    entity = report[entity];
                    if(!(zuuluu != entity)) { _fun00026_ip = 83; continue _fun00025 }
 65:
                    zuuluu = _closure1_slot28;
                    michal = entity.ownerId;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(tangon, michal);
 83:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleVoiceChannelSelect'] = zuuluu;
            zuuluu = function(argFoo) {
                entity = argFoo;
                zuuluu = entity.voiceStates;
                michal = zuuluu.forEach;
                entity = function(argFoo) {
                    _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                        zuuluu = argFoo;
                        golfie = zuuluu.userId;
                        offset = zuuluu.channelId;
                        oscard = zuuluu.guildId;
                        report = zuuluu.selfStream;
                        michal = _closure3_slot0;
                        entity = michal.platformHandleVoiceStateUpdate;
                        entity = entity.bind(michal)(zuuluu);
                        zuuluu = _closure1_slot9;
                        entity = zuuluu.getId;
                        entity = entity.bind(zuuluu)();
                        if(!(golfie !== entity)) { _fun00028_ip = 282; continue _fun00027 }
 70:
                        zuuluu = null;
                        if(!(zuuluu != offset)) { _fun00028_ip = 282; continue _fun00027 }
 79:
                        if(!report) { _fun00028_ip = 100; continue _fun00027 }
 82:
                        tangon = _closure1_slot28;
                        entity = undefined;
                        tangon = tangon.bind(entity)(offset, golfie);
                        if(tangon) { _fun00028_ip = 290; continue _fun00027 }
 100:
                        verify = _closure1_slot8;
                        tangon = verify.getActiveStreamForUser;
                        tangon = tangon.bind(verify)(golfie, oscard);
                        var _closure5_slot0 = tangon;
                        if(!(zuuluu != tangon)) { _fun00028_ip = 282; continue _fun00027 }
 127:
                        verify = tangon.channelId;
                        if(!(verify === offset)) { _fun00028_ip = 282; continue _fun00027 }
 139:
                        verify = report;
                        if(verify) { _fun00028_ip = 164; continue _fun00027 }
 145:
                        yankee = tangon.state;
                        offset = _closure1_slot16;
                        offset = offset.ENDED;
                        verify = yankee === offset;
 164:
                        if(verify) { _fun00028_ip = 193; continue _fun00027 }
 167:
                        yankee = _closure1_slot18;
                        offset = yankee.start;
                        verify = _closure1_slot20;
                        option = function() {
                            report = _closure1_slot0;
                            oscard = _closure1_slot2;
                            entity = 16;
                            entity = oscard[entity];
                            michal = undefined;
                            tangon = report.bind(michal)(entity);
                            zuuluu = tangon.closeStream;
                            entity = 19;
                            entity = oscard[entity];
                            report = report.bind(michal)(entity);
                            michal = report.encodeStreamKey;
                            entity = _closure5_slot0;
                            michal = michal.bind(report)(entity);
                            entity = false;
                            entity = zuuluu.bind(tangon)(michal, entity);
                            return entity;
                        };
                        option = offset.bind(yankee)(verify, option);
 193:
                        if(!report) { _fun00028_ip = 282; continue _fun00027 }
 196:
                        report = tangon.state;
                        tangon = _closure1_slot16;
                        tangon = tangon.ENDED;
                        if(!(report === tangon)) { _fun00028_ip = 282; continue _fun00027 }
 215:
                        report = _closure1_slot18;
                        tangon = report.stop;
                        tangon = tangon.bind(report)();
                        report = _closure1_slot8;
                        tangon = report.getStreamForUser;
                        tangon = tangon.bind(report)(golfie, oscard);
                        if(!(zuuluu != tangon)) { _fun00028_ip = 286; continue _fun00027 }
 249:
                        report = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        michal = 16;
                        zuuluu = zuuluu[michal];
                        michal = undefined;
                        zuuluu = report.bind(michal)(zuuluu);
                        michal = zuuluu.watchStream;
                        michal = michal.bind(zuuluu)(tangon);
 282:
                        michal = undefined;
                        return michal;
 286:
                        michal = undefined;
                        return michal;
 290:
                        return entity;
                    }
                };
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            entity['handleVoiceStateUpdates'] = zuuluu;
            zuuluu = function(argFoo) {
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    entity = argFoo;
                    report = entity.channelId;
                    tangon = entity.region;
                    zuuluu = _closure1_slot8;
                    entity = zuuluu.getCurrentUserActiveStream;
                    oscard = entity.bind(zuuluu)();
                    entity = null;
                    golfie = entity == oscard;
                    entity = undefined;
                    zuuluu = undefined;
                    if(golfie) { _fun00030_ip = 49; continue _fun00029 }
 44:
                    zuuluu = oscard.channelId;
 49:
                    if(!(zuuluu === report)) { _fun00030_ip = 94; continue _fun00029 }
 53:
                    zuuluu = _closure1_slot29;
                    report = _closure1_slot0;
                    golfie = _closure1_slot2;
                    michal = 19;
                    michal = golfie[michal];
                    report = report.bind(entity)(michal);
                    michal = report.encodeStreamKey;
                    michal = michal.bind(report)(oscard);
                    michal = zuuluu.bind(entity)(michal, tangon);
 94:
                    return entity;
                }
            };
            entity['handleCallUpdate'] = zuuluu;
            zuuluu = function(argFoo) {
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    entity = argFoo;
                    michal = entity.channels;
                    zuuluu = _closure1_slot8;
                    entity = zuuluu.getCurrentUserActiveStream;
                    oscard = entity.bind(zuuluu)();
                    entity = null;
                    if(!(entity != oscard)) { _fun00032_ip = 136; continue _fun00031 }
 32:
                    entity = _closure1_slot24;
                    report = undefined;
                    tangon = entity.bind(report)(michal);
                    michal = tangon.bind(report)();
                    entity = michal.done;
                    zuuluu = 19;
                    if(entity) { _fun00032_ip = 136; continue _fun00031 }
 58:
                    entity = michal.value;
                    verify = oscard.channelId;
                    option = entity.id;
                    if(!(verify === option)) { _fun00032_ip = 121; continue _fun00031 }
 77:
                    verify = _closure1_slot29;
                    offset = _closure1_slot0;
                    option = _closure1_slot2;
                    option = option[zuuluu];
                    offset = offset.bind(report)(option);
                    option = offset.encodeStreamKey;
                    option = option.bind(offset)(oscard);
                    entity = entity.rtcRegion;
                    entity = verify.bind(report)(option, entity);
 121:
                    option = tangon.bind(report)();
                    entity = option.done;
                    michal = option;
                    if(!entity) { _fun00032_ip = 58; continue _fun00031 }
 136:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleChannelUpdates'] = zuuluu;
            michal = function(argFoo) {
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    entity = argFoo;
                    report = entity.videoState;
                    zuuluu = _closure1_slot8;
                    entity = zuuluu.getCurrentUserActiveStream;
                    tangon = entity.bind(zuuluu)();
                    entity = null;
                    if(!(entity != tangon)) { _fun00034_ip = 80; continue _fun00033 }
 32:
                    entity = _closure1_slot17;
                    entity = entity.PAUSED;
                    oscard = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 16;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = oscard.bind(michal)(zuuluu);
                    michal = zuuluu.setStreamPaused;
                    entity = report === entity;
                    entity = michal.bind(zuuluu)(tangon, entity);
 80:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleMediaEngineVideoStateChanged'] = michal;
            michal = {};
            zuuluu = entity.handleStreamWatch;
            michal['STREAM_WATCH'] = zuuluu;
            zuuluu = entity.handleStreamStart;
            michal['STREAM_START'] = zuuluu;
            zuuluu = entity.handleStreamCreate;
            michal['STREAM_CREATE'] = zuuluu;
            zuuluu = entity.handleStreamUpdate;
            michal['STREAM_UPDATE'] = zuuluu;
            zuuluu = entity.handleStreamDelete;
            michal['STREAM_DELETE'] = zuuluu;
            zuuluu = entity.handleStreamClose;
            michal['STREAM_CLOSE'] = zuuluu;
            zuuluu = entity.handleCallUpdate;
            michal['CALL_UPDATE'] = zuuluu;
            zuuluu = entity.handleChannelUpdates;
            michal['CHANNEL_UPDATES'] = zuuluu;
            zuuluu = entity.handleVoiceChannelSelect;
            michal['VOICE_CHANNEL_SELECT'] = zuuluu;
            zuuluu = entity.handleVoiceStateUpdates;
            michal['VOICE_STATE_UPDATES'] = zuuluu;
            zuuluu = entity.handleMediaEngineVideoStateChanged;
            michal['MEDIA_ENGINE_VIDEO_STATE_CHANGED'] = zuuluu;
            entity['actions'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        report = _closure1_slot7;
        michal = undefined;
        tangon = argFoo;
        tangon = report.bind(michal)(zuuluu, tangon);
        entity = _closure1_slot3;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = 24;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/go_live/ApplicationStreamingManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();