// app/stores/SpeakingStore.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    entity = argCor;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot5;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot4;
            entity = _closure1_slot20;
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
            report = _closure1_slot5;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot19 = entity;
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
 70: // try_end0
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot20 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00006_ip = 46; continue _fun00005 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00006_ip = 55; continue _fun00005 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00006_ip = 343; continue _fun00005 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00006_ip = 323; continue _fun00005 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00006_ip = 283; continue _fun00005 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00006_ip = 270; continue _fun00005 }
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
            if(!golfie) { _fun00006_ip = 163; continue _fun00005 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00006_ip = 179; continue _fun00005 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00006_ip = 249; continue _fun00005 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00006_ip = 249; continue _fun00005 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00006_ip = 234; continue _fun00005 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00006_ip = 247; continue _fun00005 }
 234:
            verify = _closure1_slot22;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00006_ip = 265; continue _fun00005;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00006_ip = 283; continue _fun00005;
 270:
            golfie = _closure1_slot22;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00006_ip = 323; continue _fun00005 }
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
            if(!tangon) { _fun00006_ip = 330; continue _fun00005 }
 326:
            _closure2_slot0 = tangon;
 330:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00008_ip = 56; continue _fun00007 }
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
                    _fun00008_ip = 67; continue _fun00007;
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
 343:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00010_ip = 23; continue _fun00009 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00010_ip = 33; continue _fun00009 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00010_ip = 70; continue _fun00009 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00010_ip = 55; continue _fun00009 }
 70:
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo, argBar) { // Original name: clearSpeakingFlagsInContext
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tangon = argFoo;
            zuuluu = _closure1_slot15;
            entity = zuuluu.get;
            zuuluu = entity.bind(zuuluu)(tangon);
            entity = null;
            if(!(entity != zuuluu)) { _fun00012_ip = 66; continue _fun00011 }
 26:
            report = zuuluu.delete;
            entity = argBar;
            entity = report.bind(zuuluu)(entity);
            report = zuuluu.size;
            zuuluu = 0;
            if(!(zuuluu === report)) { _fun00012_ip = 64; continue _fun00011 }
 50:
            zuuluu = _closure1_slot15;
            michal = zuuluu.delete;
            michal = michal.bind(zuuluu)(tangon);
 64:
            return entity;
 66:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: hasSpeakingFlagInContext
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            michal = argBaz;
            report = _closure1_slot15;
            tangon = report.get;
            entity = argFoo;
            option = tangon.bind(report)(entity);
            tangon = null;
            report = tangon == option;
            entity = undefined;
            if(report) { _fun00014_ip = 61; continue _fun00013 }
 34:
            oscard = option.get;
            report = argBar;
            report = oscard.bind(option)(report);
            oscard = tangon == report;
            entity = undefined;
            if(oscard) { _fun00014_ip = 61; continue _fun00013 }
 56:
            entity = report.flags;
 61:
            if(!(tangon == entity)) { _fun00014_ip = 75; continue _fun00013 }
 65:
            zuuluu = _closure1_slot13;
            entity = zuuluu.NONE;
 75:
            entity = entity & michal;
            entity = entity === michal;
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    entity = function(argFoo, argBar) { // Original name: anyoneHasFlagInContext
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            offset = argBar;
            verify = arguments[2];
            option = undefined;
            if(!(verify === option)) { _fun00016_ip = 14; continue _fun00015 }
 12:
            verify = false;
 14:
            zuuluu = _closure1_slot15;
            michal = zuuluu.get;
            entity = argFoo;
            michal = michal.bind(zuuluu)(entity);
            entity = null;
            if(!(entity != michal)) { _fun00016_ip = 141; continue _fun00015 }
 40:
            entity = _closure1_slot21;
            oscard = entity.bind(option)(michal);
            michal = oscard.bind(option)();
            entity = michal.done;
            report = 2;
            tangon = 0;
            zuuluu = 1;
            if(entity) { _fun00016_ip = 137; continue _fun00015 }
 69:
            yankee = michal.value;
            entity = _closure1_slot7;
            entity = entity.bind(option)(yankee, report);
            romeon = entity[tangon];
            entity = entity[zuuluu];
            entity = entity.flags;
            if(!verify) { _fun00016_ip = 108; continue _fun00015 }
 100:
            yankee = _closure1_slot16;
            if(!(romeon !== yankee)) { _fun00016_ip = 116; continue _fun00015 }
 108:
            entity = entity & offset;
            if(!(entity !== offset)) { _fun00016_ip = 133; continue _fun00015 }
 116:
            yankee = oscard.bind(option)();
            entity = yankee.done;
            michal = yankee;
            if(entity) { _fun00016_ip = 137; continue _fun00015 }
 131:
            _fun00016_ip = 69; continue _fun00015;
 133:
            entity = true;
            return entity;
 137:
            entity = false;
            return entity;
 141:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot25 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: setSpeakingFlagForUserInContext
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            zuuluu = argFoo;
            oscard = argBar;
            verify = argBaz;
            golfie = undefined;
            tangon = zuuluu;
            if(!(tangon === golfie)) { _fun00018_ip = 31; continue _fun00017 }
 18:
            entity = _closure1_slot14;
            tangon = entity.DEFAULT;
 31:
            report = _closure1_slot15;
            michal = report.get;
            michal = michal.bind(report)(tangon);
            report = null;
            yankee = tangon;
            if(!(report == michal)) { _fun00018_ip = 103; continue _fun00017 }
 57:
            tangon = global;
            tangon = tangon.Map;
            option = tangon.prototype;
            option = Object.create(option, {constructor: {value: tangon}});
            kiloes = option;
            tangon = new kiloes[tangon](backup);
            tangon = tangon instanceof Object ? tangon : option;
            offset = _closure1_slot15;
            option = offset.set;
            option = option.bind(offset)(yankee, tangon);
            michal = tangon;
 103:
            tangon = michal.get;
            option = tangon.bind(michal)(oscard);
            tangon = report == option;
            yankee = undefined;
            if(tangon) { _fun00018_ip = 127; continue _fun00017 }
 122:
            yankee = option.flags;
 127:
            romeon = report != yankee;
            tangon = 0;
            offset = 0;
            if(!romeon) { _fun00018_ip = 141; continue _fun00017 }
 138:
            offset = yankee;
 141:
            if(!(tangon === offset)) { _fun00018_ip = 152; continue _fun00017 }
 145:
            if(!(tangon !== verify)) { _fun00018_ip = 332; continue _fun00017 }
 152:
            if(!(tangon !== verify)) { _fun00018_ip = 295; continue _fun00017 }
 159:
            yankee = report == option;
            golfie = undefined;
            if(yankee) { _fun00018_ip = 174; continue _fun00017 }
 168:
            golfie = option.since;
 174:
            yankee = report != golfie;
            option = null;
            if(!yankee) { _fun00018_ip = 186; continue _fun00017 }
 183:
            option = golfie;
 186:
            golfie = _closure1_slot13;
            golfie = golfie.VOICE;
            yankee = offset & golfie;
            golfie = _closure1_slot13;
            offset = golfie.VOICE;
            golfie = _closure1_slot13;
            golfie = golfie.VOICE;
            romeon = verify & golfie;
            golfie = _closure1_slot13;
            golfie = golfie.VOICE;
            golfie = romeon === golfie;
            offset = yankee === offset;
            if(!(offset !== golfie)) { _fun00018_ip = 271; continue _fun00017 }
 246:
            report = null;
            if(!golfie) { _fun00018_ip = 268; continue _fun00017 }
 251:
            golfie = global;
            offset = golfie.Date;
            golfie = offset.now;
            report = golfie.bind(offset)();
 268:
            option = report;
 271:
            golfie = michal.set;
            report = {};
            report['flags'] = verify;
            report['since'] = option;
            report = golfie.bind(michal)(oscard, report);
            _fun00018_ip = 328; continue _fun00017;
 295:
            report = michal.delete;
            report = report.bind(michal)(oscard);
            michal = michal.size;
            if(!(tangon === michal)) { _fun00018_ip = 328; continue _fun00017 }
 314:
            michal = _closure1_slot15;
            entity = michal.delete;
            entity = entity.bind(michal)(zuuluu);
 328:
            entity = true;
            return entity;
 332:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    verify = function(argFoo) { // Original name: handleConnectionOpen
        entity = argFoo;
        michal = entity.user;
        entity = entity.sessionId;
        zuuluu = michal.id;
        _closure1_slot16 = zuuluu;
        _closure1_slot17 = entity;
        entity = null;
        _closure1_slot18 = entity;
        entity = undefined;
        return entity;
    };
    michal = global;
    yankee = michal.Object;
    offset = yankee.defineProperty;
    option = {};
    entity = true;
    option['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, option);
    entity = 0;
    option = oscard[entity];
    entity = undefined;
    option = golfie.bind(entity)(option);
    var _closure1_slot2 = option;
    option = 1;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot3 = option;
    option = 2;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot4 = option;
    option = 3;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot5 = option;
    option = 4;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot6 = option;
    option = 5;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot7 = option;
    option = 6;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot8 = option;
    option = 7;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot9 = option;
    option = 8;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot10 = option;
    option = 9;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot11 = option;
    option = 10;
    option = oscard[option];
    option = report.bind(entity)(option);
    option = option.Permissions;
    var _closure1_slot12 = option;
    option = 11;
    option = oscard[option];
    option = report.bind(entity)(option);
    offset = option.SpeakingFlags;
    var _closure1_slot13 = offset;
    option = option.MediaEngineContextTypes;
    var _closure1_slot14 = option;
    michal = michal.Map;
    option = michal.prototype;
    option = Object.create(option, {constructor: {value: michal}});
    kiloes = option;
    michal = new kiloes[michal](backup);
    michal = michal instanceof Object ? michal : option;
    var _closure1_slot15 = michal;
    michal = null;
    var _closure1_slot16 = michal;
    var _closure1_slot17 = michal;
    var _closure1_slot18 = michal;
    michal = 13;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: SpeakingStore
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot2;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot19;
            entity = arguments;
            entity = michal.bind(tangon)(report, zuuluu, entity);
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot6;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot3;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            zuuluu = this;
            michal = zuuluu.mustEmitChanges;
            entity = function(argFoo) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    michal = argFoo;
                    zuuluu = michal.type;
                    entity = 'CONNECTION_OPEN';
                    entity = entity !== zuuluu;
                    if(!entity) { _fun00020_ip = 32; continue _fun00019 }
 19:
                    zuuluu = michal.type;
                    michal = 'VOICE_STATE_UPDATES';
                    entity = michal !== zuuluu;
 32:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            michal = zuuluu.waitFor;
            entity = _closure1_slot10;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(10);
        entity[0] = report;
        report = {};
        golfie = 'getSpeakingDuration';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                zuuluu = arguments[2];
                report = undefined;
                if(!(zuuluu === report)) { _fun00022_ip = 22; continue _fun00021 }
 9:
                entity = _closure1_slot14;
                zuuluu = entity.DEFAULT;
 22:
                michal = _closure1_slot15;
                entity = michal.get;
                oscard = entity.bind(michal)(zuuluu);
                entity = null;
                michal = entity == oscard;
                zuuluu = undefined;
                if(michal) { _fun00022_ip = 78; continue _fun00021 }
 50:
                tangon = oscard.get;
                michal = argFoo;
                michal = tangon.bind(oscard)(michal);
                tangon = entity == michal;
                zuuluu = undefined;
                if(tangon) { _fun00022_ip = 78; continue _fun00021 }
 72:
                zuuluu = michal.since;
 78:
                michal = entity != zuuluu;
                entity = 0;
                if(!michal) { _fun00022_ip = 94; continue _fun00021 }
 87:
                michal = argBar;
                entity = michal - zuuluu;
 94:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getSpeakers';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                golfie = arguments[0];
                tangon = undefined;
                if(!(golfie === tangon)) { _fun00024_ip = 24; continue _fun00023 }
 11:
                michal = _closure1_slot14;
                golfie = michal.DEFAULT;
 24:
                var _closure3_slot0 = golfie;
                michal = global;
                zuuluu = michal.Array;
                michal = zuuluu.from;
                oscard = _closure1_slot15;
                report = oscard.get;
                golfie = report.bind(oscard)(golfie);
                report = null;
                oscard = report == golfie;
                tangon = undefined;
                if(oscard) { _fun00024_ip = 78; continue _fun00023 }
 69:
                oscard = golfie.keys;
                tangon = oscard.bind(golfie)();
 78:
                if(!(report == tangon)) { _fun00024_ip = 86; continue _fun00023 }
 82:
                tangon = new Array(0);
 86:
                zuuluu = michal.bind(zuuluu)(tangon);
                michal = zuuluu.filter;
                entity = function(argFoo) {
                    report = _closure1_slot24;
                    tangon = _closure3_slot0;
                    entity = _closure1_slot13;
                    zuuluu = entity.VOICE;
                    michal = undefined;
                    entity = argFoo;
                    entity = report.bind(michal)(tangon, entity, zuuluu);
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'isSpeaking';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                report = arguments[1];
                tangon = undefined;
                if(!(report === tangon)) { _fun00026_ip = 22; continue _fun00025 }
 9:
                entity = _closure1_slot14;
                report = entity.DEFAULT;
 22:
                zuuluu = _closure1_slot24;
                entity = _closure1_slot13;
                michal = entity.VOICE;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(report, entity, michal);
                return entity;
            }
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'isPrioritySpeaker';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                report = arguments[1];
                tangon = undefined;
                if(!(report === tangon)) { _fun00028_ip = 22; continue _fun00027 }
 9:
                entity = _closure1_slot14;
                report = entity.DEFAULT;
 22:
                zuuluu = _closure1_slot24;
                entity = _closure1_slot13;
                michal = entity.PRIORITY;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(report, entity, michal);
                return entity;
            }
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'isSoundSharing';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                report = arguments[1];
                tangon = undefined;
                if(!(report === tangon)) { _fun00030_ip = 22; continue _fun00029 }
 9:
                entity = _closure1_slot14;
                report = entity.DEFAULT;
 22:
                zuuluu = _closure1_slot24;
                entity = _closure1_slot13;
                michal = entity.SOUNDSHARE;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(report, entity, michal);
                return entity;
            }
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'isAnyoneElseSpeaking';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                report = arguments[0];
                tangon = undefined;
                if(!(report === tangon)) { _fun00032_ip = 22; continue _fun00031 }
 9:
                entity = _closure1_slot14;
                report = entity.DEFAULT;
 22:
                zuuluu = _closure1_slot25;
                entity = _closure1_slot13;
                michal = entity.VOICE;
                entity = true;
                entity = zuuluu.bind(tangon)(report, michal, entity);
                return entity;
            }
        };
        report['value'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'isCurrentUserSpeaking';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                report = arguments[0];
                tangon = this;
                entity = undefined;
                if(!(report === entity)) { _fun00034_ip = 25; continue _fun00033 }
 12:
                entity = _closure1_slot14;
                report = entity.DEFAULT;
 25:
                zuuluu = _closure1_slot16;
                entity = null;
                entity = entity != zuuluu;
                if(!entity) { _fun00034_ip = 57; continue _fun00033 }
 41:
                zuuluu = tangon.isSpeaking;
                michal = _closure1_slot16;
                entity = zuuluu.bind(tangon)(michal, report);
 57:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[7] = report;
        report = {};
        golfie = 'isAnyonePrioritySpeaking';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                tangon = arguments[0];
                zuuluu = undefined;
                if(!(tangon === zuuluu)) { _fun00036_ip = 22; continue _fun00035 }
 9:
                entity = _closure1_slot14;
                tangon = entity.DEFAULT;
 22:
                michal = _closure1_slot25;
                report = _closure1_slot13;
                report = report.VOICE;
                entity = _closure1_slot13;
                entity = entity.PRIORITY;
                entity = report | entity;
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            }
        };
        report['value'] = golfie;
        entity[8] = report;
        report = {};
        golfie = 'isCurrentUserPrioritySpeaking';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                report = arguments[0];
                tangon = this;
                entity = undefined;
                if(!(report === entity)) { _fun00038_ip = 25; continue _fun00037 }
 12:
                entity = _closure1_slot14;
                report = entity.DEFAULT;
 25:
                zuuluu = _closure1_slot16;
                entity = null;
                entity = entity != zuuluu;
                if(!entity) { _fun00038_ip = 59; continue _fun00037 }
 41:
                oscard = tangon.isPrioritySpeaker;
                zuuluu = _closure1_slot16;
                entity = oscard.bind(tangon)(zuuluu, report);
 59:
                if(!entity) { _fun00038_ip = 78; continue _fun00037 }
 62:
                zuuluu = tangon.isSpeaking;
                michal = _closure1_slot16;
                entity = zuuluu.bind(tangon)(michal, report);
 78:
                return entity;
            }
        };
        report['value'] = oscard;
        entity[9] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'SpeakingStore';
    option['displayName'] = michal;
    michal = 14;
    michal = oscard[michal];
    backup = golfie.bind(entity)(michal);
    michal = {};
    michal['CONNECTION_OPEN'] = verify;
    michal['OVERLAY_INITIALIZE'] = verify;
    verify = function(argFoo) { // Original name: handleSpeaking
        _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
            entity = argFoo;
            report = entity.context;
            tangon = entity.userId;
            michal = entity.speakingFlags;
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.PRIORITY;
            golfie = michal & zuuluu;
            zuuluu = _closure1_slot13;
            oscard = zuuluu.PRIORITY;
            zuuluu = michal;
            if(!(golfie === oscard)) { _fun00040_ip = 209; continue _fun00039 }
 56:
            option = _closure1_slot8;
            golfie = option.getChannel;
            verify = _closure1_slot11;
            oscard = verify.getVoiceChannelId;
            oscard = oscard.bind(verify)();
            verify = golfie.bind(option)(oscard);
            oscard = null;
            if(!(oscard != verify)) { _fun00040_ip = 151; continue _fun00039 }
 90:
            option = _closure1_slot0;
            golfie = _closure1_slot1;
            oscard = 12;
            golfie = golfie[oscard];
            oscard = undefined;
            option = option.bind(oscard)(golfie);
            golfie = option.can;
            oscard = {};
            offset = _closure1_slot12;
            offset = offset.PRIORITY_SPEAKER;
            oscard['permission'] = offset;
            oscard['user'] = tangon;
            oscard['context'] = verify;
            oscard = golfie.bind(option)(oscard);
            if(oscard) { _fun00040_ip = 188; continue _fun00039 }
 151:
            option = _closure1_slot9;
            golfie = option.setCanHavePriority;
            oscard = false;
            oscard = golfie.bind(option)(tangon, oscard);
            oscard = _closure1_slot13;
            oscard = oscard.PRIORITY;
            oscard = ~oscard;
            zuuluu = michal & oscard;
            _fun00040_ip = 209; continue _fun00039;
 188:
            option = _closure1_slot9;
            golfie = option.setCanHavePriority;
            oscard = true;
            oscard = golfie.bind(option)(tangon, oscard);
            zuuluu = michal;
 209:
            michal = _closure1_slot26;
            entity = undefined;
            entity = michal.bind(entity)(report, tangon, zuuluu);
            return entity;
        }
    };
    michal['SPEAKING'] = verify;
    tangon = function(argFoo) { // Original name: handleVoiceStateUpdates
        entity = argFoo;
        tangon = entity.voiceStates;
        zuuluu = tangon.reduce;
        michal = function(argFoo, argBar) {
            _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                michal = argFoo;
                entity = argBar;
                option = entity.userId;
                golfie = entity.channelId;
                oscard = entity.sessionId;
                verify = _closure1_slot18;
                entity = _closure1_slot16;
                entity = option === entity;
                if(!entity) { _fun00042_ip = 48; continue _fun00041 }
 40:
                zuuluu = _closure1_slot17;
                entity = oscard === zuuluu;
 48:
                if(!entity) { _fun00042_ip = 67; continue _fun00041 }
 51:
                entity = null;
                zuuluu = entity != golfie;
                if(!zuuluu) { _fun00042_ip = 63; continue _fun00041 }
 60:
                entity = golfie;
 63:
                _closure1_slot18 = entity;
 67:
                entity = _closure1_slot18;
                report = false;
                if(!(verify !== entity)) { _fun00042_ip = 109; continue _fun00041 }
 77:
                offset = _closure1_slot15;
                verify = offset.delete;
                entity = _closure1_slot14;
                entity = entity.DEFAULT;
                entity = verify.bind(offset)(entity);
                if(entity) { _fun00042_ip = 106; continue _fun00041 }
 104:
                entity = false;
 106:
                report = entity;
 109:
                entity = null;
                if(!(entity != golfie)) { _fun00042_ip = 240; continue _fun00041 }
 118:
                entity = _closure1_slot16;
                if(!(option === entity)) { _fun00042_ip = 134; continue _fun00041 }
 126:
                entity = _closure1_slot17;
                if(!(oscard === entity)) { _fun00042_ip = 205; continue _fun00041 }
 134:
                entity = _closure1_slot16;
                zuuluu = option !== entity;
                if(!zuuluu) { _fun00042_ip = 163; continue _fun00041 }
 145:
                verify = _closure1_slot10;
                entity = verify.getChannelId;
                entity = entity.bind(verify)();
                zuuluu = golfie !== entity;
 163:
                entity = report;
                if(!zuuluu) { _fun00042_ip = 322; continue _fun00041 }
 172:
                verify = _closure1_slot23;
                zuuluu = _closure1_slot14;
                golfie = zuuluu.DEFAULT;
                zuuluu = undefined;
                zuuluu = verify.bind(zuuluu)(golfie, option);
                if(zuuluu) { _fun00042_ip = 200; continue _fun00041 }
 197:
                zuuluu = report;
 200:
                entity = zuuluu;
                _fun00042_ip = 322; continue _fun00041;
 205:
                verify = _closure1_slot15;
                golfie = verify.delete;
                zuuluu = _closure1_slot14;
                zuuluu = zuuluu.DEFAULT;
                zuuluu = golfie.bind(verify)(zuuluu);
                if(zuuluu) { _fun00042_ip = 235; continue _fun00041 }
 232:
                zuuluu = report;
 235:
                entity = zuuluu;
                _fun00042_ip = 322; continue _fun00041;
 240:
                zuuluu = _closure1_slot16;
                if(!(option === zuuluu)) { _fun00042_ip = 256; continue _fun00041 }
 248:
                zuuluu = _closure1_slot17;
                if(!(oscard !== zuuluu)) { _fun00042_ip = 286; continue _fun00041 }
 256:
                golfie = _closure1_slot23;
                zuuluu = _closure1_slot14;
                oscard = zuuluu.DEFAULT;
                zuuluu = undefined;
                zuuluu = golfie.bind(zuuluu)(oscard, option);
                if(zuuluu) { _fun00042_ip = 284; continue _fun00041 }
 281:
                zuuluu = report;
 284:
                _fun00042_ip = 319; continue _fun00041;
 286:
                golfie = _closure1_slot15;
                oscard = golfie.delete;
                tangon = _closure1_slot14;
                tangon = tangon.DEFAULT;
                tangon = oscard.bind(golfie)(tangon);
                if(tangon) { _fun00042_ip = 316; continue _fun00041 }
 313:
                tangon = report;
 316:
                zuuluu = tangon;
 319:
                entity = zuuluu;
 322:
                if(entity) { _fun00042_ip = 328; continue _fun00041 }
 325:
                entity = michal;
 328:
                return entity;
            }
        };
        entity = false;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    michal['VOICE_STATE_UPDATES'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    kiloes = tangon;
    foxtra = michal;
    michal = new kiloes[option](backup, foxtra, romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 15;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'stores/SpeakingStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();