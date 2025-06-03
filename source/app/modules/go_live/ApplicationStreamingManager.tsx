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
            verify = _closure1_slot25;
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
            golfie = _closure1_slot25;
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
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
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
            _fun00008_ip = 76; continue _fun00007;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot26 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    entity = function(argFoo) { // Original name: clearSpectatorReconnectionTimer
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = argFoo;
            zuuluu = _closure1_slot18;
            tangon = zuuluu[michal];
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00010_ip = 30; continue _fun00009 }
 20:
            zuuluu = tangon.stop;
            zuuluu = zuuluu.bind(tangon)();
 30:
            entity = _closure1_slot18;
            entity = delete entity[michal];
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot27 = entity;
    entity = function(argFoo) { // Original name: clearConnectTimeout
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = argFoo;
            zuuluu = _closure1_slot19;
            tangon = zuuluu[michal];
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00012_ip = 30; continue _fun00011 }
 20:
            zuuluu = tangon.stop;
            zuuluu = zuuluu.bind(tangon)();
 30:
            entity = _closure1_slot19;
            entity = delete entity[michal];
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    entity = function(argFoo, argBar) { // Original name: maybeAutowatchStream
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            tangon = argFoo;
            oscard = argBar;
            zuuluu = _closure1_slot13;
            entity = zuuluu.getVoiceChannelId;
            entity = entity.bind(zuuluu)();
            if(!(entity === tangon)) { _fun00014_ip = 251; continue _fun00013 }
 30:
            zuuluu = _closure1_slot10;
            entity = zuuluu.getChannel;
            golfie = entity.bind(zuuluu)(tangon);
            entity = null;
            if(!(entity != golfie)) { _fun00014_ip = 247; continue _fun00013 }
 53:
            zuuluu = golfie.isDM;
            zuuluu = zuuluu.bind(golfie)();
            if(zuuluu) { _fun00014_ip = 83; continue _fun00013 }
 66:
            zuuluu = golfie.isGuildStageVoice;
            zuuluu = zuuluu.bind(golfie)();
            if(zuuluu) { _fun00014_ip = 83; continue _fun00013 }
 79:
            zuuluu = false;
            return zuuluu;
 83:
            report = _closure1_slot8;
            tangon = report.getActiveStreamForUser;
            zuuluu = golfie.getGuildId;
            zuuluu = zuuluu.bind(golfie)();
            zuuluu = tangon.bind(report)(oscard, zuuluu);
            if(!(entity == zuuluu)) { _fun00014_ip = 243; continue _fun00013 }
 116:
            report = _closure1_slot8;
            tangon = report.getStreamForUser;
            zuuluu = golfie.getGuildId;
            zuuluu = zuuluu.bind(golfie)();
            oscard = tangon.bind(report)(oscard, zuuluu);
            if(!(entity != oscard)) { _fun00014_ip = 239; continue _fun00013 }
 146:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 18;
            entity = tangon[entity];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = zuuluu.encodeStreamKey;
            zuuluu = entity.bind(zuuluu)(oscard);
            entity = _closure1_slot23;
            entity = zuuluu !== entity;
            if(!entity) { _fun00014_ip = 237; continue _fun00013 }
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
    var _closure1_slot29 = entity;
    entity = function(argFoo, argBar) { // Original name: updateRegion
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            tangon = argFoo;
            zuuluu = argBar;
            entity = null;
            if(!(entity == zuuluu)) { _fun00016_ip = 29; continue _fun00015 }
 12:
            report = _closure1_slot12;
            michal = report.getPreferredRegion;
            zuuluu = michal.bind(report)();
 29:
            entity = entity != zuuluu;
            if(!entity) { _fun00016_ip = 73; continue _fun00015 }
 36:
            oscard = _closure1_slot12;
            report = oscard.getRegion;
            golfie = _closure1_slot14;
            michal = golfie.getHostname;
            michal = michal.bind(golfie)(tangon);
            michal = report.bind(oscard)(michal);
            entity = zuuluu !== michal;
 73:
            if(!entity) { _fun00016_ip = 113; continue _fun00015 }
 76:
            report = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 16;
            michal = michal[entity];
            entity = undefined;
            michal = report.bind(entity)(michal);
            entity = michal.changeStreamRegion;
            entity = entity.bind(michal)(tangon, zuuluu);
 113:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    entity = function(argFoo, argBar) { // Original name: maybeStartConnectTimeout
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            tangon = _closure1_slot14;
            michal = tangon.getAllActiveStreamKeys;
            tangon = michal.bind(tangon)();
            michal = tangon.includes;
            michal = michal.bind(tangon)(zuuluu);
            if(michal) { _fun00018_ip = 143; continue _fun00017 }
 39:
            michal = _closure1_slot19;
            tangon = michal[zuuluu];
            michal = null;
            if(!(michal == tangon)) { _fun00018_ip = 101; continue _fun00017 }
 53:
            golfie = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 19;
            oscard = oscard[michal];
            michal = undefined;
            michal = golfie.bind(michal)(oscard);
            michal = michal.Timeout;
            oscard = michal.prototype;
            oscard = Object.create(oscard, {constructor: {value: michal}});
            offset = oscard;
            michal = new offset[michal](verify);
            tangon = michal instanceof Object ? michal : oscard;
 101:
            michal = _closure1_slot19;
            michal[zuuluu] = tangon;
            zuuluu = tangon.start;
            michal = argBar;
            if(michal) { _fun00018_ip = 126; continue _fun00017 }
 120:
            michal = _closure1_slot21;
            _fun00018_ip = 130; continue _fun00017;
 126:
            michal = _closure1_slot22;
 130:
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
 143:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot31 = entity;
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
    tangon = {};
    var _closure1_slot18 = tangon;
    tangon = {};
    var _closure1_slot19 = tangon;
    tangon = 17;
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
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                report = this;
                foxtra = 0;
                entity = copyRestArgs(foxtra);
                option = _closure1_slot4;
                zuuluu = _closure2_slot0;
                tangon = undefined;
                option = option.bind(tangon)(report, zuuluu);
                offset = new Array(0);
                foxtra = offset;
                romeon = entity;
                yankee = 0;
                entity = arraySpread(foxtra, romeon, yankee);
                entity = _closure1_slot6;
                verify = entity.bind(tangon)(zuuluu);
                zuuluu = _closure1_slot5;
                entity = _closure1_slot26;
                entity = entity.bind(tangon)();
                if(entity) { _fun00020_ip = 86; continue _fun00019 }
 73:
                entity = verify.apply;
                entity = entity.bind(verify)(report, offset);
                _fun00020_ip = 120; continue _fun00019;
 86:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot6;
                oscard = oscard.bind(tangon)(report);
                oscard = oscard.constructor;
                entity = golfie.bind(option)(verify, offset, oscard);
 120:
                entity = zuuluu.bind(tangon)(report, entity);
                var _closure3_slot0 = entity;
                zuuluu = function(argFoo) {
                    _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                        entity = argFoo;
                        oscard = entity.streamKey;
                        var _closure4_slot0 = oscard;
                        tangon = entity.allowMultiple;
                        golfie = _closure1_slot0;
                        report = _closure1_slot2;
                        entity = 18;
                        report = report[entity];
                        entity = undefined;
                        golfie = golfie.bind(entity)(report);
                        report = golfie.decodeStreamKey;
                        report = report.bind(golfie)(oscard);
                        option = report.channelId;
                        golfie = _closure1_slot10;
                        report = golfie.getChannel;
                        verify = report.bind(golfie)(option);
                        golfie = _closure1_slot31;
                        report = null;
                        option = report == verify;
                        report = undefined;
                        if(option) { _fun00022_ip = 101; continue _fun00021 }
 91:
                        option = verify.isGuildStageVoice;
                        report = option.bind(verify)();
 101:
                        report = golfie.bind(entity)(oscard, report);
                        report = _closure1_slot27;
                        report = report.bind(entity)(oscard);
                        if(tangon) { _fun00022_ip = 150; continue _fun00021 }
 119:
                        tangon = _closure1_slot8;
                        zuuluu = tangon.getAllActiveStreams;
                        tangon = zuuluu.bind(tangon)();
                        zuuluu = tangon.forEach;
                        michal = function(argFoo) {
                            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                                zuuluu = argFoo;
                                report = _closure1_slot0;
                                tangon = _closure1_slot2;
                                entity = 18;
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
                                if(!zuuluu) { _fun00024_ip = 77; continue _fun00023 }
 66:
                                tangon = _closure4_slot0;
                                zuuluu = report !== tangon;
 77:
                                if(!zuuluu) { _fun00024_ip = 114; continue _fun00023 }
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
 150:
                        return entity;
                    }
                };
                entity['handleStreamWatch'] = zuuluu;
                zuuluu = function(argFoo) {
                    _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                        tangon = argFoo;
                        verify = tangon.channelId;
                        yankee = tangon.streamType;
                        offset = tangon.guildId;
                        michal = _closure1_slot10;
                        entity = michal.getChannel;
                        golfie = entity.bind(michal)(verify);
                        report = _closure1_slot31;
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 18;
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
                        if(oscard) { _fun00026_ip = 128; continue _fun00025 }
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
                    zuuluu = _closure1_slot28;
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(report);
                    tangon = _closure1_slot0;
                    oscard = _closure1_slot2;
                    zuuluu = 18;
                    zuuluu = oscard[zuuluu];
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
                zuuluu = function(argFoo) {
                    entity = argFoo;
                    zuuluu = entity.streamKey;
                    michal = _closure1_slot28;
                    entity = undefined;
                    michal = michal.bind(entity)(zuuluu);
                    return entity;
                };
                entity['handleStreamUpdate'] = zuuluu;
                zuuluu = function(argFoo) {
                    _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                        entity = argFoo;
                        tangon = entity.reason;
                        golfie = entity.streamKey;
                        zuuluu = _closure1_slot28;
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(golfie);
                        zuuluu = _closure1_slot15;
                        zuuluu = zuuluu.STREAM_FULL;
                        if(!(tangon === zuuluu)) { _fun00028_ip = 150; continue _fun00027 }
 43:
                        oscard = _closure1_slot0;
                        option = _closure1_slot2;
                        report = 21;
                        michal = option[report];
                        tangon = oscard.bind(entity)(michal);
                        zuuluu = tangon.reportAVError;
                        michal = {};
                        report = option[report];
                        report = oscard.bind(entity)(report);
                        report = report.AVError;
                        report = report.STREAM_FULL;
                        michal['type'] = report;
                        report = 22;
                        report = option[report];
                        oscard = oscard.bind(entity)(report);
                        report = oscard.getStreamErrorContext;
                        verify = report.bind(oscard)(golfie);
                        offset = michal;
                        report = copyDataProperties(offset, verify);
                        michal = zuuluu.bind(tangon)(michal);
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.platformShowStreamFull;
                        michal = michal.bind(zuuluu)();
 150:
                        return entity;
                    }
                };
                entity['handleStreamDelete'] = zuuluu;
                zuuluu = function(argFoo) {
                    entity = argFoo;
                    zuuluu = entity.streamKey;
                    tangon = _closure1_slot27;
                    entity = undefined;
                    tangon = tangon.bind(entity)(zuuluu);
                    michal = _closure1_slot28;
                    michal = michal.bind(entity)(zuuluu);
                    return entity;
                };
                entity['handleStreamClose'] = zuuluu;
                zuuluu = function(argFoo) {
                    _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                        entity = argFoo;
                        tangon = entity.channelId;
                        zuuluu = null;
                        if(!(zuuluu != tangon)) { _fun00030_ip = 83; continue _fun00029 }
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
                        if(!(zuuluu != entity)) { _fun00030_ip = 83; continue _fun00029 }
 65:
                        zuuluu = _closure1_slot29;
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
                        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                            tangon = argFoo;
                            option = tangon.userId;
                            verify = tangon.channelId;
                            golfie = tangon.guildId;
                            michal = tangon.selfStream;
                            zuuluu = _closure3_slot0;
                            entity = zuuluu.platformHandleVoiceStateUpdate;
                            entity = entity.bind(zuuluu)(tangon);
                            tangon = _closure1_slot9;
                            entity = tangon.getId;
                            entity = entity.bind(tangon)();
                            if(!(option !== entity)) { _fun00032_ip = 377; continue _fun00031 }
 70:
                            tangon = null;
                            if(!(tangon != verify)) { _fun00032_ip = 377; continue _fun00031 }
 79:
                            if(!michal) { _fun00032_ip = 100; continue _fun00031 }
 82:
                            oscard = _closure1_slot29;
                            entity = undefined;
                            oscard = oscard.bind(entity)(verify, option);
                            if(oscard) { _fun00032_ip = 383; continue _fun00031 }
 100:
                            offset = _closure1_slot8;
                            oscard = offset.getActiveStreamForUser;
                            offset = oscard.bind(offset)(option, golfie);
                            var _closure5_slot0 = offset;
                            if(!(tangon != offset)) { _fun00032_ip = 377; continue _fun00031 }
 127:
                            oscard = offset.channelId;
                            if(!(oscard === verify)) { _fun00032_ip = 377; continue _fun00031 }
 139:
                            if(michal) { _fun00032_ip = 262; continue _fun00031 }
 142:
                            verify = offset.state;
                            oscard = _closure1_slot16;
                            oscard = oscard.ENDED;
                            if(!(verify !== oscard)) { _fun00032_ip = 262; continue _fun00031 }
 161:
                            romeon = _closure1_slot0;
                            foxtra = _closure1_slot2;
                            oscard = 19;
                            oscard = foxtra[oscard];
                            yankee = undefined;
                            oscard = romeon.bind(yankee)(oscard);
                            oscard = oscard.Timeout;
                            verify = oscard.prototype;
                            verify = Object.create(verify, {constructor: {value: oscard}});
                            output = verify;
                            oscard = new output[oscard](sizing);
                            verify = oscard instanceof Object ? oscard : verify;
                            backup = verify.start;
                            oscard = _closure1_slot20;
                            report = function() {
                                report = _closure1_slot0;
                                oscard = _closure1_slot2;
                                entity = 16;
                                entity = oscard[entity];
                                michal = undefined;
                                tangon = report.bind(michal)(entity);
                                zuuluu = tangon.closeStream;
                                entity = 18;
                                entity = oscard[entity];
                                report = report.bind(michal)(entity);
                                michal = report.encodeStreamKey;
                                entity = _closure5_slot0;
                                michal = michal.bind(report)(entity);
                                entity = false;
                                entity = zuuluu.bind(tangon)(michal, entity);
                                return entity;
                            };
                            report = backup.bind(verify)(oscard, report);
                            oscard = _closure1_slot18;
                            report = 18;
                            report = foxtra[report];
                            yankee = romeon.bind(yankee)(report);
                            report = yankee.encodeStreamKey;
                            report = report.bind(yankee)(offset);
                            oscard[report] = verify;
 262:
                            if(!michal) { _fun00032_ip = 377; continue _fun00031 }
 265:
                            report = offset.state;
                            michal = _closure1_slot16;
                            michal = michal.ENDED;
                            if(!(report === michal)) { _fun00032_ip = 377; continue _fun00031 }
 284:
                            oscard = _closure1_slot27;
                            verify = _closure1_slot0;
                            report = _closure1_slot2;
                            michal = 18;
                            report = report[michal];
                            michal = undefined;
                            verify = verify.bind(michal)(report);
                            report = verify.encodeStreamKey;
                            report = report.bind(verify)(offset);
                            report = oscard.bind(michal)(report);
                            oscard = _closure1_slot8;
                            report = oscard.getStreamForUser;
                            report = report.bind(oscard)(option, golfie);
                            if(!(tangon != report)) { _fun00032_ip = 381; continue _fun00031 }
 346:
                            tangon = _closure1_slot0;
                            oscard = _closure1_slot2;
                            zuuluu = 16;
                            zuuluu = oscard[zuuluu];
                            tangon = tangon.bind(michal)(zuuluu);
                            zuuluu = tangon.watchStream;
                            zuuluu = zuuluu.bind(tangon)(report);
 377:
                            zuuluu = undefined;
                            return zuuluu;
 381:
                            return michal;
 383:
                            return entity;
                        }
                    };
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                entity['handleVoiceStateUpdates'] = zuuluu;
                zuuluu = function(argFoo) {
                    _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
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
                        if(golfie) { _fun00034_ip = 49; continue _fun00033 }
 44:
                        zuuluu = oscard.channelId;
 49:
                        if(!(zuuluu === report)) { _fun00034_ip = 94; continue _fun00033 }
 53:
                        zuuluu = _closure1_slot30;
                        report = _closure1_slot0;
                        golfie = _closure1_slot2;
                        michal = 18;
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
                    _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                        entity = argFoo;
                        michal = entity.channels;
                        zuuluu = _closure1_slot8;
                        entity = zuuluu.getCurrentUserActiveStream;
                        oscard = entity.bind(zuuluu)();
                        entity = null;
                        if(!(entity != oscard)) { _fun00036_ip = 136; continue _fun00035 }
 32:
                        entity = _closure1_slot24;
                        report = undefined;
                        tangon = entity.bind(report)(michal);
                        michal = tangon.bind(report)();
                        entity = michal.done;
                        zuuluu = 18;
                        if(entity) { _fun00036_ip = 136; continue _fun00035 }
 58:
                        entity = michal.value;
                        verify = oscard.channelId;
                        option = entity.id;
                        if(!(verify === option)) { _fun00036_ip = 121; continue _fun00035 }
 77:
                        verify = _closure1_slot30;
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
                        if(!entity) { _fun00036_ip = 58; continue _fun00035 }
 136:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handleChannelUpdates'] = zuuluu;
                michal = function(argFoo) {
                    _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                        entity = argFoo;
                        report = entity.videoState;
                        zuuluu = _closure1_slot8;
                        entity = zuuluu.getCurrentUserActiveStream;
                        tangon = entity.bind(zuuluu)();
                        entity = null;
                        if(!(entity != tangon)) { _fun00038_ip = 80; continue _fun00037 }
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
            }
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