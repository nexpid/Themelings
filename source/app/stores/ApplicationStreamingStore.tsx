// app/stores/ApplicationStreamingStore.tsx
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
            michal = _closure1_slot10;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot9;
            entity = _closure1_slot32;
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
            report = _closure1_slot10;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot31 = entity;
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
            _closure1_slot32 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot32 = entity;
    tangon = function() { // Original name: reset
        entity = global;
        entity = entity.Map;
        michal = entity.prototype;
        michal = Object.create(michal, {constructor: {value: entity}});
        zuuluu = michal;
        entity = new zuuluu[entity](michal);
        entity = entity instanceof Object ? entity : michal;
        var _closure1_slot3 = entity;
        entity = {};
        var _closure1_slot4 = entity;
        entity = {};
        var _closure1_slot5 = entity;
        entity = {};
        var _closure1_slot6 = entity;
        entity = undefined;
        return entity;
    };
    entity = function(argFoo) { // Original name: closeActiveStream
        zuuluu = _closure1_slot3;
        michal = zuuluu.delete;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    var _closure1_slot33 = entity;
    entity = function() { // Original name: getAllStreams
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = new Array(0);
            romeon = _closure1_slot4;
            for(option in romeon)
 19:
            {
 28:
                golfie = option;
                michal = _closure1_slot4;
                michal = michal[golfie];
                report = michal;
                ForInLoopInit(obj_props_register=5, obj_register=4, iter_index_register=3, iter_size_register=2);
                if(oscard === undefined) { _fun00006_ip = 19; continue _fun00005 }
 50:
                ForInLoopNextIter(next_value_register=1, obj_props_register=5, obj_register=4, iter_index_register=3, iter_size_register=2);
                if(michal === undefined) { _fun00006_ip = 19; continue _fun00005 }
 59:
                sizing = michal;
                kiloes = entity.push;
                backup = _closure1_slot4;
                backup = backup[golfie];
                backup = backup[sizing];
                backup = kiloes.bind(entity)(backup);
                _fun00006_ip = 50; continue _fun00005;
            }
 86:
            return entity;
        }
    };
    var _closure1_slot34 = entity;
    offset = function(argFoo) { // Original name: handleStreamUpdate
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            tangon = entity.streamKey;
            oscard = entity.region;
            report = entity.viewerIds;
            offset = entity.paused;
            option = _closure1_slot3;
            golfie = option.set;
            zuuluu = {};
            yankee = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 17;
            verify = verify[entity];
            entity = undefined;
            yankee = yankee.bind(entity)(verify);
            verify = yankee.decodeStreamKey;
            romeon = verify.bind(yankee)(tangon);
            foxtra = zuuluu;
            verify = copyDataProperties(foxtra, romeon);
            verify = _closure1_slot22;
            if(offset) { _fun00008_ip = 96; continue _fun00007 }
 88:
            offset = verify.ACTIVE;
            _fun00008_ip = 102; continue _fun00007;
 96:
            offset = verify.PAUSED;
 102:
            verify = 'state';
            zuuluu[verify] = offset;
            zuuluu = golfie.bind(option)(tangon, zuuluu);
            zuuluu = _closure1_slot5;
            michal = {};
            michal['streamKey'] = tangon;
            michal['region'] = oscard;
            michal['viewerIds'] = report;
            zuuluu[tangon] = michal;
            return entity;
        }
    };
    entity = function(argFoo, argBar) { // Original name: canViewChannel
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = _closure1_slot15;
            michal = tangon.getBasicChannel;
            entity = argBar;
            oscard = michal.bind(tangon)(entity);
            entity = _closure1_slot27;
            michal = entity.CALL;
            entity = argFoo;
            entity = entity === michal;
            if(entity) { _fun00010_ip = 79; continue _fun00009 }
 41:
            michal = null;
            michal = michal != oscard;
            if(!michal) { _fun00010_ip = 76; continue _fun00009 }
 50:
            report = _closure1_slot18;
            tangon = report.canBasicChannel;
            zuuluu = _closure1_slot26;
            zuuluu = zuuluu.VIEW_CHANNEL;
            michal = tangon.bind(report)(zuuluu, oscard);
 76:
            entity = michal;
 79:
            return entity;
        }
    };
    var _closure1_slot35 = entity;
    entity = function(argFoo) { // Original name: isWatchableStream
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            oscard = _closure1_slot35;
            tangon = entity.streamType;
            zuuluu = entity.channelId;
            report = undefined;
            zuuluu = oscard.bind(report)(tangon, zuuluu);
            if(zuuluu) { _fun00012_ip = 121; continue _fun00011 }
 32:
            tangon = _closure1_slot15;
            zuuluu = tangon.getBasicChannel;
            entity = entity.channelId;
            option = zuuluu.bind(tangon)(entity);
            entity = null;
            entity = entity != option;
            if(!entity) { _fun00012_ip = 119; continue _fun00011 }
 61:
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 21;
            zuuluu = oscard[zuuluu];
            golfie = tangon.bind(report)(zuuluu);
            oscard = golfie.canWatchStream;
            romeon = _closure1_slot21;
            yankee = _closure1_slot16;
            offset = _closure1_slot18;
            verify = _closure1_slot12;
            backup = golfie;
            foxtra = option;
            zuuluu = backup[oscard](foxtra, romeon, yankee, offset, verify, option);
            michal = 0;
            entity = zuuluu[michal];
 119:
            return entity;
 121:
            entity = true;
            return entity;
        }
    };
    var _closure1_slot36 = entity;
    entity = global;
    yankee = entity.Object;
    option = yankee.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(yankee)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot9 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot10 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot11 = michal;
    michal = 5;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot12 = michal;
    michal = 6;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot13 = michal;
    michal = 7;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot14 = michal;
    michal = 8;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot15 = michal;
    michal = 9;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot16 = michal;
    michal = 10;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot17 = michal;
    michal = 11;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot18 = michal;
    michal = 12;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot19 = michal;
    michal = 13;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot20 = michal;
    michal = 14;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot21 = michal;
    michal = 15;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    option = michal.ApplicationStreamStates;
    var _closure1_slot22 = option;
    option = michal.RTCConnectionStates;
    var _closure1_slot23 = option;
    option = michal.ApplicationStreamDeleteReasons;
    var _closure1_slot24 = option;
    option = michal.NULL_STRING_GUILD_ID;
    var _closure1_slot25 = option;
    michal = michal.BasicPermissions;
    var _closure1_slot26 = michal;
    michal = 16;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.StreamTypes;
    var _closure1_slot27 = michal;
    michal = null;
    var _closure1_slot28 = michal;
    option = {};
    var _closure1_slot29 = option;
    var _closure1_slot30 = michal;
    michal = tangon.bind(entity)();
    michal = 23;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.PersistedStore;
    michal = function(argFoo) {
        tangon = function() { // Original name: ApplicationStreamingStore
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot7;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot31;
            entity = arguments;
            entity = michal.bind(tangon)(report, zuuluu, entity);
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot11;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot8;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                oscard = argFoo;
                report = this;
                tangon = report.syncWith;
                entity = _closure1_slot18;
                michal = new Array(1);
                michal[0] = entity;
                entity = function() {
                    entity = true;
                    return entity;
                };
                entity = tangon.bind(report)(michal, entity);
                tangon = report.waitFor;
                michal = _closure1_slot13;
                entity = _closure1_slot18;
                entity = tangon.bind(report)(michal, entity);
                michal = null;
                report = michal == oscard;
                entity = undefined;
                tangon = undefined;
                if(report) { _fun00014_ip = 79; continue _fun00013 }
 73:
                tangon = oscard.selfStreamParticipantsHidden;
 79:
                if(!(entity !== tangon)) { _fun00014_ip = 121; continue _fun00013 }
 83:
                tangon = global;
                report = tangon.Object;
                tangon = report.assign;
                zuuluu = _closure1_slot29;
                golfie = michal == oscard;
                michal = undefined;
                if(golfie) { _fun00014_ip = 115; continue _fun00013 }
 109:
                michal = oscard.selfStreamParticipantsHidden;
 115:
                michal = tangon.bind(report)(zuuluu, michal);
 121:
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(22);
        entity[0] = report;
        report = {};
        golfie = 'getState';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = {};
            michal = _closure1_slot29;
            entity['selfStreamParticipantsHidden'] = michal;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'isSelfStreamHidden';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                michal = _closure1_slot29;
                entity = argFoo;
                michal = michal[entity];
                entity = null;
                entity = entity != michal;
                if(!entity) { _fun00016_ip = 26; continue _fun00015 }
 23:
                entity = michal;
 26:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getLastActiveStream';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                entity = 22;
                entity = tangon[entity];
                tangon = undefined;
                zuuluu = zuuluu.bind(tangon)(entity);
                entity = _closure1_slot17;
                zuuluu = zuuluu.bind(tangon)(entity);
                tangon = null;
                entity = null;
                if(!zuuluu) { _fun00018_ip = 94; continue _fun00017 }
 41:
                zuuluu = global;
                report = zuuluu.Array;
                zuuluu = report.from;
                oscard = _closure1_slot3;
                michal = oscard.values;
                michal = michal.bind(oscard)();
                zuuluu = zuuluu.bind(report)(michal);
                michal = zuuluu.pop;
                michal = michal.bind(zuuluu)();
                zuuluu = tangon != michal;
                entity = null;
                if(!zuuluu) { _fun00018_ip = 94; continue _fun00017 }
 91:
                entity = michal;
 94:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getAllActiveStreams';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                entity = 22;
                entity = tangon[entity];
                tangon = undefined;
                zuuluu = zuuluu.bind(tangon)(entity);
                entity = _closure1_slot17;
                entity = zuuluu.bind(tangon)(entity);
                if(entity) { _fun00020_ip = 43; continue _fun00019 }
 37:
                entity = new Array(0);
                _fun00020_ip = 74; continue _fun00019;
 43:
                zuuluu = global;
                tangon = zuuluu.Array;
                zuuluu = tangon.from;
                report = _closure1_slot3;
                michal = report.values;
                michal = michal.bind(report)();
                entity = zuuluu.bind(tangon)(michal);
 74:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'getAllActiveStreamsForChannel';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                entity = argFoo;
                var _closure3_slot0 = entity;
                tangon = _closure1_slot1;
                report = _closure1_slot2;
                entity = 22;
                entity = report[entity];
                report = undefined;
                tangon = tangon.bind(report)(entity);
                entity = _closure1_slot17;
                entity = tangon.bind(report)(entity);
                if(entity) { _fun00022_ip = 52; continue _fun00021 }
 46:
                entity = new Array(0);
                _fun00022_ip = 98; continue _fun00021;
 52:
                tangon = global;
                report = tangon.Array;
                tangon = report.from;
                oscard = _closure1_slot3;
                zuuluu = oscard.values;
                zuuluu = zuuluu.bind(oscard)();
                tangon = tangon.bind(report)(zuuluu);
                zuuluu = tangon.filter;
                michal = function(argFoo) {
                    entity = argFoo;
                    michal = entity.channelId;
                    entity = _closure3_slot0;
                    entity = michal === entity;
                    return entity;
                };
                entity = zuuluu.bind(tangon)(michal);
 98:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'getActiveStreamForStreamKey';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                entity = 22;
                entity = tangon[entity];
                tangon = undefined;
                zuuluu = zuuluu.bind(tangon)(entity);
                entity = _closure1_slot17;
                zuuluu = zuuluu.bind(tangon)(entity);
                tangon = null;
                entity = null;
                if(!zuuluu) { _fun00024_ip = 70; continue _fun00023 }
 41:
                report = _closure1_slot3;
                zuuluu = report.get;
                michal = argFoo;
                michal = zuuluu.bind(report)(michal);
                zuuluu = tangon != michal;
                entity = null;
                if(!zuuluu) { _fun00024_ip = 70; continue _fun00023 }
 67:
                entity = michal;
 70:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'getActiveStreamForApplicationStream';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                report = argFoo;
                tangon = this;
                zuuluu = _closure1_slot1;
                oscard = _closure1_slot2;
                entity = 22;
                entity = oscard[entity];
                oscard = undefined;
                zuuluu = zuuluu.bind(oscard)(entity);
                entity = _closure1_slot17;
                entity = zuuluu.bind(oscard)(entity);
                if(!entity) { _fun00026_ip = 105; continue _fun00025 }
 43:
                entity = null;
                if(!(entity != report)) { _fun00026_ip = 105; continue _fun00025 }
 49:
                zuuluu = _closure1_slot0;
                golfie = _closure1_slot2;
                michal = 17;
                michal = golfie[michal];
                zuuluu = zuuluu.bind(oscard)(michal);
                michal = zuuluu.encodeStreamKey;
                zuuluu = michal.bind(zuuluu)(report);
                michal = tangon.getActiveStreamForStreamKey;
                michal = michal.bind(tangon)(zuuluu);
                zuuluu = entity != michal;
                entity = null;
                if(!zuuluu) { _fun00026_ip = 103; continue _fun00025 }
 100:
                entity = michal;
 103:
                return entity;
 105:
                entity = null;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[7] = report;
        report = {};
        golfie = 'getCurrentUserActiveStream';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                report = this;
                zuuluu = _closure1_slot20;
                entity = zuuluu.getVoiceChannelId;
                tangon = entity.bind(zuuluu)();
                zuuluu = _closure1_slot15;
                entity = zuuluu.getChannel;
                oscard = entity.bind(zuuluu)(tangon);
                entity = null;
                zuuluu = entity == oscard;
                if(zuuluu) { _fun00028_ip = 79; continue _fun00027 }
 43:
                tangon = report.getActiveStreamForUser;
                zuuluu = _closure1_slot14;
                michal = zuuluu.getId;
                zuuluu = michal.bind(zuuluu)();
                michal = oscard.getGuildId;
                michal = michal.bind(oscard)();
                entity = tangon.bind(report)(zuuluu, michal);
 79:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[8] = report;
        report = {};
        golfie = 'getActiveStreamForUser';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                report = argFoo;
                tangon = this;
                var _closure3_slot0 = report;
                zuuluu = tangon.getStreamForUser;
                entity = argBar;
                zuuluu = zuuluu.bind(tangon)(report, entity);
                entity = null;
                if(!(entity == zuuluu)) { _fun00030_ip = 72; continue _fun00029 }
 33:
                report = tangon.getAllActiveStreams;
                oscard = report.bind(tangon)();
                report = oscard.find;
                michal = function(argFoo) {
                    entity = argFoo;
                    michal = entity.ownerId;
                    entity = _closure3_slot0;
                    entity = michal === entity;
                    return entity;
                };
                michal = report.bind(oscard)(michal);
                report = entity != michal;
                entity = null;
                if(!report) { _fun00030_ip = 70; continue _fun00029 }
 67:
                entity = michal;
 70:
                _fun00030_ip = 85; continue _fun00029;
 72:
                michal = tangon.getActiveStreamForApplicationStream;
                entity = michal.bind(tangon)(zuuluu);
 85:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[9] = report;
        report = {};
        golfie = 'getStreamerActiveStreamMetadata';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                oscard = this;
                michal = _closure1_slot20;
                entity = michal.getVoiceChannelId;
                tangon = entity.bind(michal)();
                michal = _closure1_slot15;
                entity = michal.getChannel;
                golfie = entity.bind(michal)(tangon);
                entity = null;
                if(!(entity != golfie)) { _fun00032_ip = 143; continue _fun00031 }
 40:
                report = oscard.getActiveStreamForUser;
                tangon = _closure1_slot14;
                michal = tangon.getId;
                tangon = michal.bind(tangon)();
                michal = golfie.getGuildId;
                michal = michal.bind(golfie)();
                oscard = report.bind(oscard)(tangon, michal);
                tangon = entity == oscard;
                michal = null;
                if(tangon) { _fun00032_ip = 141; continue _fun00031 }
 85:
                tangon = _closure1_slot6;
                golfie = _closure1_slot0;
                report = _closure1_slot2;
                zuuluu = 17;
                report = report[zuuluu];
                zuuluu = undefined;
                report = golfie.bind(zuuluu)(report);
                zuuluu = report.encodeStreamKey;
                zuuluu = zuuluu.bind(report)(oscard);
                tangon = tangon[zuuluu];
                report = entity != tangon;
                zuuluu = null;
                if(!report) { _fun00032_ip = 138; continue _fun00031 }
 135:
                zuuluu = tangon;
 138:
                michal = zuuluu;
 141:
                return michal;
 143:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[10] = report;
        report = {};
        golfie = 'getStreamerActiveStreamMetadataForStream';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                michal = _closure1_slot6;
                entity = argFoo;
                michal = michal[entity];
                entity = null;
                zuuluu = entity != michal;
                if(!zuuluu) { _fun00034_ip = 26; continue _fun00033 }
 23:
                entity = michal;
 26:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[11] = report;
        report = {};
        golfie = 'getIsActiveStreamPreviewDisabled';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                michal = _closure1_slot6;
                entity = argFoo;
                zuuluu = michal[entity];
                entity = null;
                tangon = entity == zuuluu;
                michal = undefined;
                if(tangon) { _fun00036_ip = 31; continue _fun00035 }
 25:
                michal = zuuluu.previewDisabled;
 31:
                entity = entity != michal;
                if(!entity) { _fun00036_ip = 41; continue _fun00035 }
 38:
                entity = michal;
 41:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[12] = report;
        report = {};
        golfie = 'getAnyStreamForUser';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                michal = 22;
                michal = tangon[michal];
                tangon = undefined;
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = _closure1_slot17;
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = null;
                if(zuuluu) { _fun00038_ip = 41; continue _fun00037 }
 39:
                return michal;
 41:
                zuuluu = _closure1_slot4;
                entity = argFoo;
                report = zuuluu[entity];
                zuuluu = michal == report;
                entity = null;
                if(zuuluu) { _fun00038_ip = 111; continue _fun00037 }
 61:
                zuuluu = global;
                tangon = zuuluu.Object;
                zuuluu = tangon.values;
                report = zuuluu.bind(tangon)(report);
                tangon = report.find;
                zuuluu = function(argFoo) {
                    zuuluu = _closure1_slot36;
                    michal = undefined;
                    entity = argFoo;
                    entity = zuuluu.bind(michal)(entity);
                    return entity;
                };
                zuuluu = tangon.bind(report)(zuuluu);
                tangon = michal != zuuluu;
                michal = null;
                if(!tangon) { _fun00038_ip = 108; continue _fun00037 }
 105:
                michal = zuuluu;
 108:
                entity = michal;
 111:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[13] = report;
        report = {};
        golfie = 'getAnyDiscoverableStreamForUser';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                michal = 22;
                michal = tangon[michal];
                tangon = undefined;
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = _closure1_slot17;
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = null;
                if(zuuluu) { _fun00040_ip = 41; continue _fun00039 }
 39:
                return michal;
 41:
                zuuluu = _closure1_slot4;
                entity = argFoo;
                report = zuuluu[entity];
                zuuluu = michal == report;
                entity = null;
                if(zuuluu) { _fun00040_ip = 111; continue _fun00039 }
 61:
                zuuluu = global;
                tangon = zuuluu.Object;
                zuuluu = tangon.values;
                report = zuuluu.bind(tangon)(report);
                tangon = report.find;
                zuuluu = function(argFoo) {
                    _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                        michal = argFoo;
                        zuuluu = _closure1_slot36;
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
                        if(!entity) { _fun00042_ip = 32; continue _fun00041 }
 20:
                        zuuluu = michal.discoverable;
                        michal = false;
                        entity = michal !== zuuluu;
 32:
                        return entity;
                    }
                };
                zuuluu = tangon.bind(report)(zuuluu);
                tangon = michal != zuuluu;
                michal = null;
                if(!tangon) { _fun00040_ip = 108; continue _fun00039 }
 105:
                michal = zuuluu;
 108:
                entity = michal;
 111:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[14] = report;
        report = {};
        golfie = 'getStreamForUser';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                oscard = argBar;
                michal = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 22;
                entity = zuuluu[entity];
                report = undefined;
                michal = michal.bind(report)(entity);
                entity = _closure1_slot17;
                entity = michal.bind(report)(entity);
                michal = null;
                if(entity) { _fun00044_ip = 44; continue _fun00043 }
 42:
                return michal;
 44:
                zuuluu = _closure1_slot4;
                entity = argFoo;
                entity = zuuluu[entity];
                golfie = michal == entity;
                zuuluu = undefined;
                if(golfie) { _fun00044_ip = 76; continue _fun00043 }
 64:
                if(!(michal == oscard)) { _fun00044_ip = 72; continue _fun00043 }
 68:
                oscard = _closure1_slot25;
 72:
                zuuluu = entity[oscard];
 76:
                oscard = michal == zuuluu;
                entity = null;
                if(oscard) { _fun00044_ip = 105; continue _fun00043 }
 85:
                tangon = _closure1_slot36;
                tangon = tangon.bind(report)(zuuluu);
                michal = null;
                if(!tangon) { _fun00044_ip = 102; continue _fun00043 }
 99:
                michal = zuuluu;
 102:
                entity = michal;
 105:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[15] = report;
        report = {};
        golfie = 'getRTCStream';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                entity = 22;
                entity = tangon[entity];
                tangon = undefined;
                zuuluu = zuuluu.bind(tangon)(entity);
                entity = _closure1_slot17;
                zuuluu = zuuluu.bind(tangon)(entity);
                tangon = null;
                entity = null;
                if(!zuuluu) { _fun00046_ip = 64; continue _fun00045 }
 41:
                zuuluu = _closure1_slot5;
                michal = argFoo;
                michal = zuuluu[michal];
                zuuluu = tangon != michal;
                entity = null;
                if(!zuuluu) { _fun00046_ip = 64; continue _fun00045 }
 61:
                entity = michal;
 64:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[16] = report;
        report = {};
        golfie = 'getAllApplicationStreams';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 22;
                entity = zuuluu[entity];
                zuuluu = undefined;
                tangon = tangon.bind(zuuluu)(entity);
                entity = _closure1_slot17;
                entity = tangon.bind(zuuluu)(entity);
                if(entity) { _fun00048_ip = 43; continue _fun00047 }
 37:
                entity = new Array(0);
                _fun00048_ip = 68; continue _fun00047;
 43:
                michal = _closure1_slot34;
                tangon = michal.bind(zuuluu)();
                zuuluu = tangon.filter;
                michal = function(argFoo) {
                    _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                        michal = argFoo;
                        entity = null;
                        entity = entity != michal;
                        if(!entity) { _fun00050_ip = 38; continue _fun00049 }
 12:
                        report = _closure1_slot35;
                        tangon = michal.streamType;
                        zuuluu = michal.channelId;
                        michal = undefined;
                        entity = report.bind(michal)(tangon, zuuluu);
 38:
                        return entity;
                    }
                };
                entity = zuuluu.bind(tangon)(michal);
 68:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[17] = report;
        report = {};
        golfie = 'getAllApplicationStreamsForChannel';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                entity = argFoo;
                var _closure3_slot0 = entity;
                report = _closure1_slot1;
                tangon = _closure1_slot2;
                entity = 22;
                entity = tangon[entity];
                tangon = undefined;
                report = report.bind(tangon)(entity);
                entity = _closure1_slot17;
                entity = report.bind(tangon)(entity);
                if(entity) { _fun00052_ip = 52; continue _fun00051 }
 46:
                entity = new Array(0);
                _fun00052_ip = 75; continue _fun00051;
 52:
                zuuluu = _closure1_slot34;
                tangon = zuuluu.bind(tangon)();
                zuuluu = tangon.filter;
                michal = function(argFoo) {
                    _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                        michal = argFoo;
                        entity = null;
                        entity = entity != michal;
                        if(!entity) { _fun00054_ip = 28; continue _fun00053 }
 12:
                        tangon = michal.channelId;
                        zuuluu = _closure3_slot0;
                        entity = tangon === zuuluu;
 28:
                        if(!entity) { _fun00054_ip = 57; continue _fun00053 }
 31:
                        report = _closure1_slot35;
                        tangon = michal.streamType;
                        zuuluu = michal.channelId;
                        michal = undefined;
                        entity = report.bind(michal)(tangon, zuuluu);
 57:
                        return entity;
                    }
                };
                entity = zuuluu.bind(tangon)(michal);
 75:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[18] = report;
        report = {};
        golfie = 'getViewerIds';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
                report = argFoo;
                michal = _closure1_slot1;
                tangon = _closure1_slot2;
                entity = 22;
                entity = tangon[entity];
                oscard = undefined;
                michal = michal.bind(oscard)(entity);
                entity = _closure1_slot17;
                entity = michal.bind(oscard)(entity);
                if(entity) { _fun00056_ip = 46; continue _fun00055 }
 40:
                entity = new Array(0);
                return entity;
 46:
                michal = 'string';
                entity = typeof report;
                tangon = report;
                if(!(michal !== entity)) { _fun00056_ip = 91; continue _fun00055 }
 60:
                michal = _closure1_slot0;
                golfie = _closure1_slot2;
                entity = 17;
                entity = golfie[entity];
                michal = michal.bind(oscard)(entity);
                entity = michal.encodeStreamKey;
                tangon = entity.bind(michal)(report);
 91:
                entity = null;
                report = entity != tangon;
                michal = null;
                if(!report) { _fun00056_ip = 110; continue _fun00055 }
 102:
                zuuluu = _closure1_slot5;
                michal = zuuluu[tangon];
 110:
                if(!(entity == michal)) { _fun00056_ip = 120; continue _fun00055 }
 114:
                entity = new Array(0);
                _fun00056_ip = 126; continue _fun00055;
 120:
                entity = michal.viewerIds;
 126:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[19] = report;
        report = {};
        golfie = 'getCurrentAppIntent';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot30;
            return entity;
        };
        report['value'] = golfie;
        entity[20] = report;
        report = {};
        golfie = 'getStreamingState';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
                michal = _closure1_slot1;
                tangon = _closure1_slot2;
                entity = 22;
                entity = tangon[entity];
                tangon = undefined;
                michal = michal.bind(tangon)(entity);
                entity = _closure1_slot17;
                entity = michal.bind(tangon)(entity);
                michal = {};
                if(entity) { _fun00058_ip = 74; continue _fun00057 }
 39:
                entity = new Array(0);
                michal['activeStreams'] = entity;
                entity = {};
                michal['streamsByUserAndGuild'] = entity;
                entity = {};
                michal['rtcStreams'] = entity;
                entity = {};
                michal['streamerActiveStreamMetadatas'] = entity;
                entity = michal;
                _fun00058_ip = 141; continue _fun00057;
 74:
                tangon = global;
                oscard = tangon.Array;
                report = oscard.from;
                golfie = _closure1_slot3;
                tangon = golfie.entries;
                tangon = tangon.bind(golfie)();
                tangon = report.bind(oscard)(tangon);
                michal['activeStreams'] = tangon;
                tangon = _closure1_slot4;
                michal['streamsByUserAndGuild'] = tangon;
                tangon = _closure1_slot5;
                michal['rtcStreams'] = tangon;
                zuuluu = _closure1_slot6;
                michal['streamerActiveStreamMetadatas'] = zuuluu;
                entity = michal;
 141:
                return entity;
            }
        };
        report['value'] = oscard;
        entity[21] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'ApplicationStreamingStore';
    option['displayName'] = michal;
    option['persistKey'] = michal;
    michal = 24;
    michal = oscard[michal];
    backup = golfie.bind(entity)(michal);
    michal = {};
    yankee = function(argFoo) { // Original name: handleOverlayInitialize
        entity = argFoo;
        entity = entity.applicationStreamState;
        zuuluu = entity.streamsByUserAndGuild;
        _closure1_slot4 = zuuluu;
        zuuluu = global;
        report = zuuluu.Map;
        oscard = entity.activeStreams;
        tangon = report.prototype;
        tangon = Object.create(tangon, {constructor: {value: report}});
        golfie = tangon;
        zuuluu = new golfie[report](oscard, report);
        zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
        _closure1_slot3 = zuuluu;
        zuuluu = entity.rtcStreams;
        _closure1_slot5 = zuuluu;
        entity = entity.streamerActiveStreamMetadatas;
        _closure1_slot6 = entity;
        entity = undefined;
        return entity;
    };
    michal['OVERLAY_INITIALIZE'] = yankee;
    yankee = function(argFoo) { // Original name: handleVoiceStateUpdates
        entity = argFoo;
        tangon = entity.voiceStates;
        zuuluu = tangon.reduce;
        michal = function(argFoo, argBar) {
            _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                option = argFoo;
                entity = argBar;
                oscard = entity.userId;
                tangon = entity.guildId;
                michal = entity.channelId;
                golfie = entity.sessionId;
                zuuluu = entity.selfStream;
                entity = entity.discoverable;
                if(!zuuluu) { _fun00060_ip = 51; continue _fun00059 }
 42:
                report = null;
                if(!(report == michal)) { _fun00060_ip = 175; continue _fun00059 }
 51:
                yankee = _closure1_slot14;
                zuuluu = yankee.getSessionId;
                zuuluu = zuuluu.bind(yankee)();
                offset = yankee.getId;
                offset = offset.bind(yankee)();
                if(!(oscard === offset)) { _fun00060_ip = 109; continue _fun00059 }
 82:
                if(!(golfie !== zuuluu)) { _fun00060_ip = 109; continue _fun00059 }
 86:
                golfie = _closure1_slot19;
                zuuluu = golfie.getChannelId;
                offset = zuuluu.bind(golfie)();
                golfie = null;
                zuuluu = option;
                if(!(golfie == offset)) { _fun00060_ip = 173; continue _fun00059 }
 109:
                yankee = null;
                offset = tangon;
                if(!(yankee == offset)) { _fun00060_ip = 122; continue _fun00059 }
 118:
                offset = _closure1_slot25;
 122:
                golfie = _closure1_slot4;
                romeon = golfie[oscard];
                foxtra = yankee == romeon;
                golfie = undefined;
                if(foxtra) { _fun00060_ip = 143; continue _fun00059 }
 139:
                golfie = romeon[offset];
 143:
                golfie = yankee != golfie;
                if(!golfie) { _fun00060_ip = 164; continue _fun00059 }
 150:
                verify = _closure1_slot4;
                verify = verify[oscard];
                verify = delete verify[offset];
                golfie = true;
 164:
                if(golfie) { _fun00060_ip = 170; continue _fun00059 }
 167:
                golfie = option;
 170:
                zuuluu = golfie;
 173:
                return zuuluu;
 175:
                zuuluu = {};
                if(!(report == tangon)) { _fun00060_ip = 196; continue _fun00059 }
 181:
                golfie = _closure1_slot27;
                golfie = golfie.CALL;
                _fun00060_ip = 209; continue _fun00059;
 196:
                option = _closure1_slot27;
                golfie = option.GUILD;
 209:
                zuuluu['streamType'] = golfie;
                zuuluu['ownerId'] = oscard;
                zuuluu['guildId'] = tangon;
                zuuluu['channelId'] = michal;
                zuuluu['discoverable'] = entity;
                michal = _closure1_slot4;
                entity = zuuluu.ownerId;
                entity = michal[entity];
                if(!(report == entity)) { _fun00060_ip = 269; continue _fun00059 }
 253:
                oscard = _closure1_slot4;
                michal = zuuluu.ownerId;
                entity = {};
                oscard[michal] = entity;
 269:
                michal = _closure1_slot4;
                entity = zuuluu.ownerId;
                michal = michal[entity];
                entity = zuuluu.guildId;
                if(!(report == entity)) { _fun00060_ip = 296; continue _fun00059 }
 292:
                entity = _closure1_slot25;
 296:
                michal[entity] = zuuluu;
                entity = true;
                return entity;
            }
        };
        entity = false;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    michal['VOICE_STATE_UPDATES'] = yankee;
    yankee = function(argFoo) { // Original name: handleStreamWatch
        _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
            entity = argFoo;
            golfie = entity.streamKey;
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(michal);
            michal = tangon.decodeStreamKey;
            michal = michal.bind(tangon)(golfie);
            report = _closure1_slot3;
            tangon = report.delete;
            tangon = tangon.bind(report)(golfie);
            oscard = _closure1_slot3;
            report = oscard.set;
            tangon = {};
            yankee = tangon;
            offset = michal;
            option = copyDataProperties(yankee, offset);
            option = _closure1_slot22;
            verify = option.CONNECTING;
            option = 'state';
            tangon[option] = verify;
            tangon = report.bind(oscard)(golfie, tangon);
            report = michal.ownerId;
            oscard = _closure1_slot14;
            tangon = oscard.getId;
            tangon = tangon.bind(oscard)();
            if(!(report === tangon)) { _fun00062_ip = 144; continue _fun00061 }
 129:
            tangon = _closure1_slot29;
            zuuluu = michal.channelId;
            michal = false;
            tangon[zuuluu] = michal;
 144:
            return entity;
        }
    };
    michal['STREAM_WATCH'] = yankee;
    yankee = function(argFoo) { // Original name: handleStreamStart
        _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
 0:
            entity = argFoo;
            verify = entity.streamType;
            option = entity.guildId;
            golfie = entity.channelId;
            yankee = entity.pid;
            offset = entity.sourceName;
            michal = entity.sourceId;
            var _closure2_slot0 = michal;
            tangon = entity.previewDisabled;
            romeon = _closure1_slot0;
            report = _closure1_slot2;
            entity = 17;
            report = report[entity];
            entity = undefined;
            foxtra = romeon.bind(entity)(report);
            romeon = foxtra.encodeStreamKey;
            report = {};
            report['streamType'] = verify;
            report['guildId'] = option;
            report['channelId'] = golfie;
            kiloes = _closure1_slot14;
            backup = kiloes.getId;
            backup = backup.bind(kiloes)();
            report['ownerId'] = backup;
            report = romeon.bind(foxtra)(report);
            romeon = null;
            if(!(romeon == yankee)) { _fun00064_ip = 167; continue _fun00063 }
 125:
            foxtra = romeon != michal;
            michal = null;
            if(!foxtra) { _fun00064_ip = 165; continue _fun00063 }
 134:
            backup = _closure1_slot13;
            foxtra = backup.getRunningGames;
            backup = foxtra.bind(backup)();
            foxtra = backup.find;
            zuuluu = function(argFoo) {
                michal = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 18;
                entity = zuuluu[entity];
                tangon = undefined;
                zuuluu = michal.bind(tangon)(entity);
                michal = _closure2_slot0;
                entity = argFoo;
                entity = entity.windowHandle;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            michal = foxtra.bind(backup)(zuuluu);
 165:
            _fun00064_ip = 182; continue _fun00063;
 167:
            foxtra = _closure1_slot13;
            zuuluu = foxtra.getGameForPID;
            michal = zuuluu.bind(foxtra)(yankee);
 182:
            zuuluu = romeon != michal;
            foxtra = null;
            if(!zuuluu) { _fun00064_ip = 194; continue _fun00063 }
 191:
            foxtra = michal;
 194:
            zuuluu = _closure1_slot6;
            michal = {};
            backup = romeon == foxtra;
            romeon = undefined;
            if(backup) { _fun00064_ip = 214; continue _fun00063 }
 209:
            romeon = foxtra.id;
 214:
            michal['id'] = romeon;
            michal['pid'] = yankee;
            michal['sourceName'] = offset;
            michal['previewDisabled'] = tangon;
            zuuluu[report] = michal;
            zuuluu = _closure1_slot3;
            michal = zuuluu.delete;
            michal = michal.bind(zuuluu)(report);
            tangon = _closure1_slot3;
            zuuluu = tangon.set;
            michal = {};
            michal['streamType'] = verify;
            michal['guildId'] = option;
            michal['channelId'] = golfie;
            option = _closure1_slot14;
            golfie = option.getId;
            golfie = golfie.bind(option)();
            michal['ownerId'] = golfie;
            oscard = _closure1_slot22;
            oscard = oscard.CONNECTING;
            michal['state'] = oscard;
            michal = zuuluu.bind(tangon)(report, michal);
            return entity;
        }
    };
    michal['STREAM_START'] = yankee;
    yankee = function(argFoo) { // Original name: handleStreamStop
        entity = argFoo;
        zuuluu = entity.streamKey;
        michal = _closure1_slot6;
        entity = null;
        michal[zuuluu] = entity;
        entity = undefined;
        return entity;
    };
    michal['STREAM_STOP'] = yankee;
    michal['STREAM_CREATE'] = offset;
    michal['STREAM_UPDATE'] = offset;
    offset = function(argFoo) { // Original name: handleStreamTimedOut
        _fun00065: for(var _fun00066_ip = 0; ; ) switch(_fun00066_ip) {
 0:
            entity = argFoo;
            tangon = entity.streamKey;
            michal = _closure1_slot3;
            entity = michal.get;
            oscard = entity.bind(michal)(tangon);
            entity = null;
            if(!(entity != oscard)) { _fun00066_ip = 82; continue _fun00065 }
 32:
            zuuluu = _closure1_slot3;
            michal = zuuluu.set;
            entity = {};
            option = entity;
            golfie = oscard;
            oscard = copyDataProperties(option, golfie);
            report = _closure1_slot22;
            oscard = report.FAILED;
            report = 'state';
            entity[report] = oscard;
            entity = michal.bind(zuuluu)(tangon, entity);
            entity = undefined;
            return entity;
 82:
            entity = false;
            return entity;
        }
    };
    michal['STREAM_TIMED_OUT'] = offset;
    offset = function(argFoo) { // Original name: handleStreamDelete
        _fun00067: for(var _fun00068_ip = 0; ; ) switch(_fun00068_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.streamKey;
            oscard = entity.unavailable;
            golfie = entity.reason;
            entity = undefined;
            var _closure2_slot0 = entity;
            report = _closure1_slot5;
            report = delete report[zuuluu];
            option = _closure1_slot3;
            report = option.get;
            option = report.bind(option)(zuuluu);
            report = null;
            if(!(report != option)) { _fun00068_ip = 301; continue _fun00067 }
 63:
            report = _closure1_slot22;
            report = report.ENDED;
            if(oscard) { _fun00068_ip = 216; continue _fun00067 }
 79:
            oscard = _closure1_slot24;
            oscard = oscard.UNAUTHORIZED;
            if(!(golfie !== oscard)) { _fun00068_ip = 204; continue _fun00067 }
 93:
            oscard = _closure1_slot24;
            oscard = oscard.SAFETY_GUILD_RATE_LIMITED;
            if(!(golfie === oscard)) { _fun00068_ip = 226; continue _fun00067 }
 107:
            verify = _closure1_slot0;
            oscard = _closure1_slot2;
            golfie = 17;
            golfie = oscard[golfie];
            offset = verify.bind(entity)(golfie);
            golfie = offset.decodeStreamKey;
            golfie = golfie.bind(offset)(zuuluu);
            golfie = golfie.guildId;
            _closure2_slot0 = golfie;
            golfie = 20;
            golfie = oscard[golfie];
            verify = verify.bind(entity)(golfie);
            golfie = 19;
            golfie = oscard[golfie];
            oscard = oscard.paths;
            golfie = verify.bind(entity)(golfie, oscard);
            oscard = golfie.then;
            tangon = function(argFoo) {
                entity = argFoo;
                zuuluu = entity.default;
                michal = _closure2_slot0;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            tangon = oscard.bind(golfie)(tangon);
            tangon = _closure1_slot22;
            report = tangon.ENDED;
            _fun00068_ip = 226; continue _fun00067;
 204:
            tangon = _closure1_slot22;
            report = tangon.FAILED;
            _fun00068_ip = 226; continue _fun00067;
 216:
            tangon = _closure1_slot22;
            report = tangon.RECONNECTING;
 226:
            golfie = _closure1_slot3;
            oscard = golfie.set;
            tangon = {};
            romeon = tangon;
            yankee = option;
            option = copyDataProperties(romeon, yankee);
            option = 'state';
            tangon[option] = report;
            tangon = oscard.bind(golfie)(zuuluu, tangon);
            tangon = _closure1_slot22;
            tangon = tangon.ENDED;
            tangon = report === tangon;
            if(!tangon) { _fun00068_ip = 287; continue _fun00067 }
 279:
            report = _closure1_slot28;
            tangon = report !== zuuluu;
 287:
            if(!tangon) { _fun00068_ip = 299; continue _fun00067 }
 290:
            michal = _closure1_slot33;
            michal = michal.bind(entity)(zuuluu);
 299:
            return entity;
 301:
            entity = false;
            return entity;
        }
    };
    michal['STREAM_DELETE'] = offset;
    offset = function(argFoo) { // Original name: handleStreamClose
        entity = argFoo;
        zuuluu = entity.streamKey;
        michal = _closure1_slot33;
        entity = undefined;
        michal = michal.bind(entity)(zuuluu);
        return entity;
    };
    michal['STREAM_CLOSE'] = offset;
    offset = function(argFoo) { // Original name: handleUpdateSelfStreamHidden
        _fun00069: for(var _fun00070_ip = 0; ; ) switch(_fun00070_ip) {
 0:
            entity = argFoo;
            tangon = entity.channelId;
            zuuluu = entity.selfStreamHidden;
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            entity = 17;
            report = report[entity];
            entity = undefined;
            golfie = oscard.bind(entity)(report);
            oscard = golfie.isStreamKey;
            report = _closure1_slot28;
            report = oscard.bind(golfie)(report);
            option = undefined;
            if(!report) { _fun00070_ip = 72; continue _fun00069 }
 59:
            oscard = _closure1_slot28;
            golfie = null;
            report = golfie != oscard;
            option = oscard;
 72:
            if(!report) { _fun00070_ip = 99; continue _fun00069 }
 75:
            golfie = option.includes;
            verify = _closure1_slot14;
            oscard = verify.getId;
            oscard = oscard.bind(verify)();
            report = golfie.bind(option)(oscard);
 99:
            if(!report) { _fun00070_ip = 116; continue _fun00069 }
 102:
            oscard = _closure1_slot29;
            golfie = oscard[tangon];
            oscard = false;
            report = oscard === golfie;
 116:
            if(!report) { _fun00070_ip = 125; continue _fun00069 }
 119:
            oscard = true;
            report = oscard === zuuluu;
 125:
            if(!report) { _fun00070_ip = 134; continue _fun00069 }
 128:
            report = null;
            _closure1_slot28 = report;
 134:
            michal = _closure1_slot29;
            michal[tangon] = zuuluu;
            return entity;
        }
    };
    michal['STREAM_UPDATE_SELF_HIDDEN'] = offset;
    offset = function(argFoo) { // Original name: handleStreamSetAppIntent
        entity = argFoo;
        michal = entity.intent;
        _closure1_slot30 = michal;
        entity = undefined;
        return entity;
    };
    michal['SET_STREAM_APP_INTENT'] = offset;
    offset = function(argFoo) { // Original name: handleRTCConnectionState
        _fun00071: for(var _fun00072_ip = 0; ; ) switch(_fun00072_ip) {
 0:
            entity = argFoo;
            tangon = entity.streamKey;
            zuuluu = entity.state;
            michal = null;
            if(!(michal != tangon)) { _fun00072_ip = 178; continue _fun00071 }
 23:
            oscard = _closure1_slot3;
            report = oscard.get;
            report = report.bind(oscard)(tangon);
            if(!(michal != report)) { _fun00072_ip = 174; continue _fun00071 }
 47:
            oscard = report.state;
            michal = _closure1_slot22;
            michal = michal.ENDED;
            if(!(oscard !== michal)) { _fun00072_ip = 174; continue _fun00071 }
 66:
            oscard = report.state;
            michal = _closure1_slot23;
            michal = michal.DISCONNECTED;
            if(!(michal !== zuuluu)) { _fun00072_ip = 111; continue _fun00071 }
 85:
            michal = _closure1_slot23;
            michal = michal.RTC_CONNECTED;
            if(!(michal === zuuluu)) { _fun00072_ip = 121; continue _fun00071 }
 99:
            michal = _closure1_slot22;
            oscard = michal.ACTIVE;
            _fun00072_ip = 121; continue _fun00071;
 111:
            michal = _closure1_slot22;
            oscard = michal.RECONNECTING;
 121:
            michal = report.state;
            if(!(oscard !== michal)) { _fun00072_ip = 170; continue _fun00071 }
 130:
            zuuluu = _closure1_slot3;
            michal = zuuluu.set;
            entity = {};
            option = entity;
            golfie = report;
            report = copyDataProperties(option, golfie);
            report = 'state';
            entity[report] = oscard;
            entity = michal.bind(zuuluu)(tangon, entity);
            entity = undefined;
            return entity;
 170:
            entity = false;
            return entity;
 174:
            entity = false;
            return entity;
 178:
            entity = false;
            return entity;
        }
    };
    michal['RTC_CONNECTION_STATE'] = offset;
    verify = function(argFoo) { // Original name: handleStreamCloseAll
        _fun00073: for(var _fun00074_ip = 0; ; ) switch(_fun00074_ip) {
 0:
            entity = argFoo;
            oscard = entity.id;
            zuuluu = entity.channelId;
            _closure1_slot28 = oscard;
            michal = global;
            report = michal.Array;
            tangon = report.from;
            golfie = _closure1_slot3;
            michal = golfie.values;
            michal = michal.bind(golfie)();
            report = tangon.bind(report)(michal);
            tangon = report.forEach;
            michal = function(argFoo) {
                _fun00075: for(var _fun00076_ip = 0; ; ) switch(_fun00076_ip) {
 0:
                    report = argFoo;
                    tangon = _closure1_slot0;
                    entity = _closure1_slot2;
                    oscard = 17;
                    zuuluu = entity[oscard];
                    entity = undefined;
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.encodeStreamKey;
                    tangon = zuuluu.bind(tangon)(report);
                    zuuluu = _closure1_slot28;
                    zuuluu = tangon !== zuuluu;
                    if(!zuuluu) { _fun00076_ip = 69; continue _fun00075 }
 50:
                    golfie = report.state;
                    tangon = _closure1_slot22;
                    tangon = tangon.ENDED;
                    zuuluu = golfie === tangon;
 69:
                    if(!zuuluu) { _fun00076_ip = 109; continue _fun00075 }
 72:
                    zuuluu = _closure1_slot33;
                    tangon = _closure1_slot0;
                    michal = _closure1_slot2;
                    michal = michal[oscard];
                    tangon = tangon.bind(entity)(michal);
                    michal = tangon.encodeStreamKey;
                    michal = michal.bind(tangon)(report);
                    michal = zuuluu.bind(entity)(michal);
 109:
                    return entity;
                }
            };
            michal = tangon.bind(report)(michal);
            michal = null;
            michal = michal != oscard;
            if(!michal) { _fun00074_ip = 110; continue _fun00073 }
 77:
            golfie = _closure1_slot0;
            report = _closure1_slot2;
            tangon = 17;
            report = report[tangon];
            tangon = undefined;
            report = golfie.bind(tangon)(report);
            tangon = report.isStreamKey;
            michal = tangon.bind(report)(oscard);
 110:
            if(!michal) { _fun00074_ip = 137; continue _fun00073 }
 113:
            report = oscard.includes;
            golfie = _closure1_slot14;
            tangon = golfie.getId;
            tangon = tangon.bind(golfie)();
            michal = report.bind(oscard)(tangon);
 137:
            if(!michal) { _fun00074_ip = 150; continue _fun00073 }
 140:
            michal = _closure1_slot29;
            entity = false;
            michal[zuuluu] = entity;
 150:
            entity = undefined;
            return entity;
        }
    };
    michal['CHANNEL_RTC_SELECT_PARTICIPANT'] = verify;
    michal['CONNECTION_OPEN'] = tangon;
    michal['CONNECTION_CLOSED'] = tangon;
    michal['LOGOUT'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    kiloes = tangon;
    foxtra = michal;
    michal = new kiloes[option](backup, foxtra, romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 25;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'stores/ApplicationStreamingStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();