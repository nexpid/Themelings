// app/modules/go_live/SharedManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    tangon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tangon;
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
            verify = _closure1_slot16;
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
            golfie = _closure1_slot16;
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
    var _closure1_slot15 = entity;
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
    var _closure1_slot16 = entity;
    entity = function(argFoo, argBar) { // Original name: maybeAutowatchStream
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            oscard = argBar;
            zuuluu = _closure1_slot7;
            entity = zuuluu.getVoiceChannelId;
            entity = entity.bind(zuuluu)();
            if(!(entity === tangon)) { _fun00008_ip = 251; continue _fun00007 }
 30:
            zuuluu = _closure1_slot5;
            entity = zuuluu.getChannel;
            golfie = entity.bind(zuuluu)(tangon);
            entity = null;
            if(!(entity != golfie)) { _fun00008_ip = 247; continue _fun00007 }
 53:
            zuuluu = golfie.isDM;
            zuuluu = zuuluu.bind(golfie)();
            if(zuuluu) { _fun00008_ip = 83; continue _fun00007 }
 66:
            zuuluu = golfie.isGuildStageVoice;
            zuuluu = zuuluu.bind(golfie)();
            if(zuuluu) { _fun00008_ip = 83; continue _fun00007 }
 79:
            zuuluu = false;
            return zuuluu;
 83:
            report = _closure1_slot3;
            tangon = report.getActiveStreamForUser;
            zuuluu = golfie.getGuildId;
            zuuluu = zuuluu.bind(golfie)();
            zuuluu = tangon.bind(report)(oscard, zuuluu);
            if(!(entity == zuuluu)) { _fun00008_ip = 243; continue _fun00007 }
 116:
            report = _closure1_slot3;
            tangon = report.getStreamForUser;
            zuuluu = golfie.getGuildId;
            zuuluu = zuuluu.bind(golfie)();
            oscard = tangon.bind(report)(oscard, zuuluu);
            if(!(entity != oscard)) { _fun00008_ip = 239; continue _fun00007 }
 146:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 9;
            entity = tangon[entity];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = zuuluu.encodeStreamKey;
            zuuluu = entity.bind(zuuluu)(oscard);
            entity = _closure1_slot14;
            entity = zuuluu !== entity;
            if(!entity) { _fun00008_ip = 237; continue _fun00007 }
 190:
            _closure1_slot14 = zuuluu;
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            michal = 10;
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
    var _closure1_slot17 = entity;
    entity = function(argFoo, argBar) { // Original name: updateRegion
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = argBar;
            entity = null;
            if(!(entity == tangon)) { _fun00010_ip = 26; continue _fun00009 }
 9:
            zuuluu = _closure1_slot6;
            michal = zuuluu.getPreferredRegion;
            tangon = michal.bind(zuuluu)();
 26:
            entity = entity != tangon;
            if(!entity) { _fun00010_ip = 84; continue _fun00009 }
 33:
            report = _closure1_slot6;
            zuuluu = report.getRegion;
            golfie = _closure1_slot8;
            oscard = golfie.getHostname;
            option = _closure1_slot8;
            michal = option.getActiveStreamKey;
            michal = michal.bind(option)();
            michal = oscard.bind(golfie)(michal);
            michal = zuuluu.bind(report)(michal);
            entity = tangon !== michal;
 84:
            if(!entity) { _fun00010_ip = 127; continue _fun00009 }
 87:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 10;
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
    var _closure1_slot18 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = tangon.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot7 = michal;
    verify = 5;
    michal = oscard[verify];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 6;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.ApplicationStreamStates;
    var _closure1_slot9 = michal;
    michal = 7;
    option = oscard[michal];
    option = report.bind(entity)(option);
    option = option.Timeout;
    offset = option.prototype;
    offset = Object.create(offset, {constructor: {value: option}});
    backup = offset;
    option = new backup[option](foxtra);
    option = option instanceof Object ? option : offset;
    var _closure1_slot10 = option;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.Timeout;
    option = michal.prototype;
    option = Object.create(option, {constructor: {value: michal}});
    backup = option;
    michal = new backup[michal](foxtra);
    michal = michal instanceof Object ? michal : option;
    var _closure1_slot11 = michal;
    michal = 8;
    option = oscard[michal];
    option = tangon.bind(entity)(option);
    option = option.Millis;
    option = option.SECOND;
    option = verify * option;
    var _closure1_slot12 = option;
    michal = oscard[michal];
    michal = tangon.bind(entity)(michal);
    michal = michal.Millis;
    michal = michal.SECOND;
    tangon = 12;
    michal = tangon * michal;
    var _closure1_slot13 = michal;
    michal = null;
    var _closure1_slot14 = michal;
    michal = {};
    golfie = function() { // Original name: init
        entity = function(argFoo, argBar) { // Original name: maybeStartConnectTimeout
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                tangon = argFoo;
                var _closure3_slot0 = tangon;
                zuuluu = _closure1_slot8;
                michal = zuuluu.getAllActiveStreamKeys;
                zuuluu = michal.bind(zuuluu)();
                michal = zuuluu.includes;
                michal = michal.bind(zuuluu)(tangon);
                if(michal) { _fun00012_ip = 75; continue _fun00011 }
 39:
                tangon = _closure1_slot11;
                zuuluu = tangon.start;
                michal = argBar;
                if(michal) { _fun00012_ip = 60; continue _fun00011 }
 54:
                michal = _closure1_slot12;
                _fun00012_ip = 64; continue _fun00011;
 60:
                michal = _closure1_slot13;
 64:
                entity = function() {
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 11;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.dispatch;
                    michal = {};
                    report = 'STREAM_TIMED_OUT';
                    michal['type'] = report;
                    report = _closure3_slot0;
                    michal['streamKey'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                entity = zuuluu.bind(tangon)(michal, entity);
 75:
                entity = undefined;
                return entity;
            }
        };
        var _closure2_slot0 = entity;
        tangon = _closure1_slot1;
        report = _closure1_slot2;
        zuuluu = 11;
        oscard = report[zuuluu];
        entity = undefined;
        verify = tangon.bind(entity)(oscard);
        option = verify.subscribe;
        golfie = 'STREAM_WATCH';
        oscard = function(argFoo) {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                entity = argFoo;
                tangon = entity.streamKey;
                report = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 9;
                zuuluu = zuuluu[entity];
                entity = undefined;
                report = report.bind(entity)(zuuluu);
                zuuluu = report.decodeStreamKey;
                zuuluu = zuuluu.bind(report)(tangon);
                report = zuuluu.channelId;
                zuuluu = _closure1_slot5;
                michal = zuuluu.getChannel;
                oscard = michal.bind(zuuluu)(report);
                zuuluu = _closure2_slot0;
                michal = null;
                report = michal == oscard;
                michal = undefined;
                if(report) { _fun00014_ip = 92; continue _fun00013 }
 82:
                report = oscard.isGuildStageVoice;
                michal = report.bind(oscard)();
 92:
                michal = zuuluu.bind(entity)(tangon, michal);
                return entity;
            }
        };
        oscard = option.bind(verify)(golfie, oscard);
        oscard = report[zuuluu];
        verify = tangon.bind(entity)(oscard);
        option = verify.subscribe;
        golfie = 'STREAM_START';
        oscard = function(argFoo) {
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                entity = argFoo;
                offset = entity.streamType;
                verify = entity.guildId;
                option = entity.channelId;
                michal = _closure1_slot5;
                entity = michal.getChannel;
                oscard = entity.bind(michal)(option);
                tangon = _closure2_slot0;
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 9;
                michal = michal[entity];
                entity = undefined;
                report = zuuluu.bind(entity)(michal);
                zuuluu = report.encodeStreamKey;
                michal = {};
                michal['streamType'] = offset;
                michal['guildId'] = verify;
                michal['channelId'] = option;
                option = _closure1_slot4;
                golfie = option.getId;
                golfie = golfie.bind(option)();
                michal['ownerId'] = golfie;
                zuuluu = zuuluu.bind(report)(michal);
                michal = null;
                report = michal == oscard;
                michal = undefined;
                if(report) { _fun00016_ip = 131; continue _fun00015 }
 121:
                report = oscard.isGuildStageVoice;
                michal = report.bind(oscard)();
 131:
                michal = tangon.bind(entity)(zuuluu, michal);
                return entity;
            }
        };
        oscard = option.bind(verify)(golfie, oscard);
        oscard = report[zuuluu];
        verify = tangon.bind(entity)(oscard);
        option = verify.subscribe;
        golfie = 'STREAM_CREATE';
        oscard = function() {
            michal = _closure1_slot11;
            entity = michal.stop;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        oscard = option.bind(verify)(golfie, oscard);
        oscard = report[zuuluu];
        verify = tangon.bind(entity)(oscard);
        option = verify.subscribe;
        golfie = 'STREAM_UPDATE';
        oscard = function() {
            michal = _closure1_slot11;
            entity = michal.stop;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        oscard = option.bind(verify)(golfie, oscard);
        oscard = report[zuuluu];
        verify = tangon.bind(entity)(oscard);
        option = verify.subscribe;
        golfie = 'STREAM_DELETE';
        oscard = function() {
            michal = _closure1_slot11;
            entity = michal.stop;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        oscard = option.bind(verify)(golfie, oscard);
        oscard = report[zuuluu];
        verify = tangon.bind(entity)(oscard);
        option = verify.subscribe;
        golfie = 'STREAM_CLOSE';
        oscard = function() {
            zuuluu = _closure1_slot10;
            michal = zuuluu.stop;
            michal = michal.bind(zuuluu)();
            michal = _closure1_slot11;
            entity = michal.stop;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        oscard = option.bind(verify)(golfie, oscard);
        oscard = report[zuuluu];
        verify = tangon.bind(entity)(oscard);
        option = verify.subscribe;
        golfie = 'VOICE_CHANNEL_SELECT';
        oscard = function(argFoo) {
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                entity = argFoo;
                tangon = entity.channelId;
                zuuluu = null;
                if(!(zuuluu != tangon)) { _fun00018_ip = 81; continue _fun00017 }
 14:
                _closure1_slot14 = zuuluu;
                report = _closure1_slot3;
                entity = report.getAllApplicationStreamsForChannel;
                oscard = entity.bind(report)(tangon);
                report = oscard.filter;
                entity = function(argFoo) {
                    entity = argFoo;
                    michal = entity.ownerId;
                    zuuluu = _closure1_slot4;
                    entity = zuuluu.getId;
                    entity = entity.bind(zuuluu)();
                    entity = michal !== entity;
                    return entity;
                };
                report = report.bind(oscard)(entity);
                entity = 0;
                entity = report[entity];
                if(!(zuuluu != entity)) { _fun00018_ip = 81; continue _fun00017 }
 63:
                zuuluu = _closure1_slot17;
                michal = entity.ownerId;
                entity = undefined;
                entity = zuuluu.bind(entity)(tangon, michal);
 81:
                entity = undefined;
                return entity;
            }
        };
        oscard = option.bind(verify)(golfie, oscard);
        oscard = report[zuuluu];
        verify = tangon.bind(entity)(oscard);
        option = verify.subscribe;
        golfie = 'VOICE_STATE_UPDATES';
        oscard = function(argFoo) {
            entity = argFoo;
            zuuluu = entity.voiceStates;
            michal = zuuluu.forEach;
            entity = function(argFoo) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    entity = argFoo;
                    golfie = entity.userId;
                    offset = entity.channelId;
                    oscard = entity.guildId;
                    report = entity.selfStream;
                    entity = undefined;
                    var _closure4_slot0 = entity;
                    tangon = _closure1_slot4;
                    zuuluu = tangon.getId;
                    zuuluu = zuuluu.bind(tangon)();
                    if(!(golfie !== zuuluu)) { _fun00020_ip = 264; continue _fun00019 }
 56:
                    zuuluu = null;
                    if(!(zuuluu != offset)) { _fun00020_ip = 264; continue _fun00019 }
 65:
                    if(!report) { _fun00020_ip = 84; continue _fun00019 }
 68:
                    tangon = _closure1_slot17;
                    tangon = tangon.bind(entity)(offset, golfie);
                    if(tangon) { _fun00020_ip = 268; continue _fun00019 }
 84:
                    verify = _closure1_slot3;
                    tangon = verify.getActiveStreamForUser;
                    tangon = tangon.bind(verify)(golfie, oscard);
                    _closure4_slot0 = tangon;
                    if(!(zuuluu != tangon)) { _fun00020_ip = 264; continue _fun00019 }
 111:
                    verify = tangon.channelId;
                    if(!(verify === offset)) { _fun00020_ip = 264; continue _fun00019 }
 123:
                    verify = report;
                    if(verify) { _fun00020_ip = 148; continue _fun00019 }
 129:
                    yankee = tangon.state;
                    offset = _closure1_slot9;
                    offset = offset.ENDED;
                    verify = yankee === offset;
 148:
                    if(verify) { _fun00020_ip = 177; continue _fun00019 }
 151:
                    yankee = _closure1_slot10;
                    offset = yankee.start;
                    verify = 180000;
                    option = function() {
                        report = _closure1_slot0;
                        oscard = _closure1_slot2;
                        entity = 10;
                        entity = oscard[entity];
                        michal = undefined;
                        tangon = report.bind(michal)(entity);
                        zuuluu = tangon.closeStream;
                        entity = 9;
                        entity = oscard[entity];
                        report = report.bind(michal)(entity);
                        michal = report.encodeStreamKey;
                        entity = _closure4_slot0;
                        michal = michal.bind(report)(entity);
                        entity = false;
                        entity = zuuluu.bind(tangon)(michal, entity);
                        return entity;
                    };
                    option = offset.bind(yankee)(verify, option);
 177:
                    if(!report) { _fun00020_ip = 264; continue _fun00019 }
 180:
                    report = tangon.state;
                    tangon = _closure1_slot9;
                    tangon = tangon.ENDED;
                    if(!(report === tangon)) { _fun00020_ip = 264; continue _fun00019 }
 199:
                    report = _closure1_slot10;
                    tangon = report.stop;
                    tangon = tangon.bind(report)();
                    report = _closure1_slot3;
                    tangon = report.getStreamForUser;
                    tangon = tangon.bind(report)(golfie, oscard);
                    if(!(zuuluu != tangon)) { _fun00020_ip = 266; continue _fun00019 }
 233:
                    zuuluu = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 10;
                    michal = report[michal];
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.watchStream;
                    michal = michal.bind(zuuluu)(tangon);
 264:
                    return entity;
 266:
                    return entity;
 268:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        oscard = option.bind(verify)(golfie, oscard);
        oscard = report[zuuluu];
        verify = tangon.bind(entity)(oscard);
        option = verify.subscribe;
        golfie = 'CALL_UPDATE';
        oscard = function(argFoo) {
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                entity = argFoo;
                report = entity.channelId;
                tangon = entity.region;
                zuuluu = _closure1_slot3;
                entity = zuuluu.getCurrentUserActiveStream;
                oscard = entity.bind(zuuluu)();
                entity = null;
                golfie = entity == oscard;
                entity = undefined;
                zuuluu = undefined;
                if(golfie) { _fun00022_ip = 49; continue _fun00021 }
 44:
                zuuluu = oscard.channelId;
 49:
                if(!(zuuluu === report)) { _fun00022_ip = 94; continue _fun00021 }
 53:
                zuuluu = _closure1_slot18;
                report = _closure1_slot0;
                golfie = _closure1_slot2;
                michal = 9;
                michal = golfie[michal];
                report = report.bind(entity)(michal);
                michal = report.encodeStreamKey;
                michal = michal.bind(report)(oscard);
                michal = zuuluu.bind(entity)(michal, tangon);
 94:
                return entity;
            }
        };
        oscard = option.bind(verify)(golfie, oscard);
        zuuluu = report[zuuluu];
        report = tangon.bind(entity)(zuuluu);
        tangon = report.subscribe;
        zuuluu = 'CHANNEL_UPDATES';
        michal = function(argFoo) {
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                entity = argFoo;
                michal = entity.channels;
                zuuluu = _closure1_slot3;
                entity = zuuluu.getCurrentUserActiveStream;
                oscard = entity.bind(zuuluu)();
                entity = null;
                if(!(entity != oscard)) { _fun00024_ip = 136; continue _fun00023 }
 32:
                entity = _closure1_slot15;
                report = undefined;
                tangon = entity.bind(report)(michal);
                michal = tangon.bind(report)();
                entity = michal.done;
                zuuluu = 9;
                if(entity) { _fun00024_ip = 136; continue _fun00023 }
 58:
                entity = michal.value;
                verify = oscard.channelId;
                option = entity.id;
                if(!(verify === option)) { _fun00024_ip = 121; continue _fun00023 }
 77:
                verify = _closure1_slot18;
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
                if(!entity) { _fun00024_ip = 58; continue _fun00023 }
 136:
                entity = undefined;
                return entity;
            }
        };
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    michal['init'] = golfie;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/go_live/SharedManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();