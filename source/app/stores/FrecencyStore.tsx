// app/stores/FrecencyStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = golfie;
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
            entity = _closure1_slot19;
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
    var _closure1_slot18 = entity;
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
            _closure1_slot19 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    offset = function(argFoo) { // Original name: handleChannelSelect
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            oscard = entity.guildId;
            option = entity.channelId;
            tangon = _closure1_slot15;
            michal = false;
            if(!(option !== tangon)) { _fun00006_ip = 137; continue _fun00005 }
 26:
            tangon = null;
            golfie = tangon != option;
            report = null;
            if(!golfie) { _fun00006_ip = 40; continue _fun00005 }
 37:
            report = option;
 40:
            _closure1_slot15 = report;
            tangon = tangon != option;
            if(!tangon) { _fun00006_ip = 65; continue _fun00005 }
 51:
            golfie = _closure1_slot12;
            report = golfie.test;
            tangon = report.bind(golfie)(option);
 65:
            entity = false;
            if(!tangon) { _fun00006_ip = 134; continue _fun00005 }
 70:
            report = _closure1_slot14;
            tangon = report.track;
            tangon = tangon.bind(report)(option);
            tangon = _closure1_slot17;
            golfie = tangon.pendingUsages;
            report = golfie.push;
            tangon = {};
            tangon['key'] = option;
            option = global;
            verify = option.Date;
            option = verify.now;
            option = option.bind(verify)();
            tangon['timestamp'] = option;
            tangon = report.bind(golfie)(tangon);
            entity = true;
 134:
            michal = entity;
 137:
            tangon = _closure1_slot16;
            entity = michal;
            if(!(oscard !== tangon)) { _fun00006_ip = 257; continue _fun00005 }
 148:
            tangon = null;
            golfie = tangon != oscard;
            report = null;
            if(!golfie) { _fun00006_ip = 162; continue _fun00005 }
 159:
            report = oscard;
 162:
            _closure1_slot16 = report;
            tangon = tangon != oscard;
            if(!tangon) { _fun00006_ip = 187; continue _fun00005 }
 173:
            golfie = _closure1_slot12;
            report = golfie.test;
            tangon = report.bind(golfie)(oscard);
 187:
            if(!tangon) { _fun00006_ip = 254; continue _fun00005 }
 190:
            report = _closure1_slot14;
            tangon = report.track;
            tangon = tangon.bind(report)(oscard);
            zuuluu = _closure1_slot17;
            report = zuuluu.pendingUsages;
            tangon = report.push;
            zuuluu = {};
            zuuluu['key'] = oscard;
            oscard = global;
            golfie = oscard.Date;
            oscard = golfie.now;
            oscard = oscard.bind(golfie)();
            zuuluu['timestamp'] = oscard;
            zuuluu = tangon.bind(report)(zuuluu);
            michal = true;
 254:
            entity = michal;
 257:
            return entity;
        }
    };
    entity = function() { // Original name: initFrecency
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = _closure1_slot7;
            entity = entity.frecencyWithoutFetchingLatest;
            tangon = entity.guildAndChannelFrecency;
            zuuluu = null;
            report = zuuluu == tangon;
            entity = undefined;
            option = undefined;
            if(report) { _fun00008_ip = 38; continue _fun00007 }
 32:
            option = tangon.guildAndChannels;
 38:
            if(!(zuuluu != option)) { _fun00008_ip = 109; continue _fun00007 }
 42:
            report = _closure1_slot14;
            tangon = report.overwriteHistory;
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            zuuluu = 13;
            zuuluu = golfie[zuuluu];
            golfie = oscard.bind(entity)(zuuluu);
            oscard = golfie.mapValues;
            zuuluu = function(argFoo) {
                michal = argFoo;
                entity = {};
                oscard = entity;
                report = michal;
                zuuluu = copyDataProperties(oscard, report);
                tangon = michal.recentUses;
                zuuluu = tangon.map;
                michal = global;
                michal = michal.Number;
                tangon = zuuluu.bind(tangon)(michal);
                zuuluu = tangon.filter;
                michal = function(argFoo) {
                    michal = argFoo;
                    entity = 0;
                    entity = michal > entity;
                    return entity;
                };
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = 'recentUses';
                entity[michal] = zuuluu;
                return entity;
            };
            zuuluu = oscard.bind(golfie)(option, zuuluu);
            michal = _closure1_slot17;
            michal = michal.pendingUsages;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
 109:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = global;
    verify = entity.Object;
    tangon = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = golfie[entity];
    entity = undefined;
    michal = option.bind(entity)(michal);
    var _closure1_slot2 = michal;
    michal = 1;
    michal = golfie[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 2;
    michal = golfie[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 3;
    michal = golfie[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 4;
    michal = golfie[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 5;
    michal = golfie[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 6;
    michal = golfie[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 7;
    michal = golfie[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot9 = michal;
    michal = 8;
    michal = golfie[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot10 = michal;
    michal = 9;
    michal = golfie[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot11 = michal;
    verify = 10;
    michal = golfie[verify];
    michal = oscard.bind(entity)(michal);
    michal = michal.ID_REGEX;
    var _closure1_slot12 = michal;
    michal = 11;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    michal = michal.UserSettingsTypes;
    var _closure1_slot13 = michal;
    michal = 12;
    michal = golfie[michal];
    yankee = option.bind(entity)(michal);
    tangon = {};
    michal = function() { // Original name: computeBonus
        entity = 100;
        return entity;
    };
    tangon['computeBonus'] = michal;
    michal = function(argFoo) { // Original name: computeWeight
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = argFoo;
            entity = 100;
            michal = 0;
            if(!(michal !== tangon)) { _fun00010_ip = 88; continue _fun00009 }
 12:
            zuuluu = 1;
            if(!(tangon >= zuuluu)) { _fun00010_ip = 32; continue _fun00009 }
 19:
            michal = 2;
            michal = tangon < michal;
            entity = 70;
            if(michal) { _fun00010_ip = 88; continue _fun00009 }
 32:
            michal = 2;
            if(!(tangon >= michal)) { _fun00010_ip = 52; continue _fun00009 }
 39:
            michal = 4;
            michal = tangon < michal;
            entity = 50;
            if(michal) { _fun00010_ip = 88; continue _fun00009 }
 52:
            michal = 4;
            if(!(tangon >= michal)) { _fun00010_ip = 72; continue _fun00009 }
 59:
            michal = 7;
            michal = tangon < michal;
            entity = 30;
            if(michal) { _fun00010_ip = 88; continue _fun00009 }
 72:
            michal = 7;
            michal = tangon >= michal;
            entity = zuuluu;
            if(!michal) { _fun00010_ip = 88; continue _fun00009 }
 85:
            entity = 10;
 88:
            return entity;
        }
    };
    tangon['computeWeight'] = michal;
    michal = function(argFoo) { // Original name: lookupKey
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            report = argFoo;
            zuuluu = _closure1_slot9;
            entity = zuuluu.getGuild;
            entity = entity.bind(zuuluu)(report);
            zuuluu = null;
            if(!(zuuluu == entity)) { _fun00012_ip = 40; continue _fun00011 }
 26:
            oscard = _closure1_slot8;
            tangon = oscard.getChannel;
            entity = tangon.bind(oscard)(report);
 40:
            if(!(zuuluu == entity)) { _fun00012_ip = 69; continue _fun00011 }
 44:
            tangon = _closure1_slot8;
            zuuluu = tangon.getChannel;
            michal = tangon.getDMFromUserId;
            michal = michal.bind(tangon)(report);
            entity = zuuluu.bind(tangon)(michal);
 69:
            return entity;
        }
    };
    tangon['lookupKey'] = michal;
    michal = function() { // Original name: afterCompute
        entity = undefined;
        return entity;
    };
    tangon['afterCompute'] = michal;
    michal = 100;
    tangon['numFrequentlyItems'] = michal;
    tangon['maxSamples'] = verify;
    verify = yankee.prototype;
    verify = Object.create(verify, {constructor: {value: yankee}});
    sizing = verify;
    kiloes = tangon;
    tangon = new sizing[yankee](kiloes, backup);
    tangon = tangon instanceof Object ? tangon : verify;
    var _closure1_slot14 = tangon;
    tangon = null;
    var _closure1_slot15 = tangon;
    var _closure1_slot16 = tangon;
    tangon = {};
    verify = new Array(0);
    tangon['pendingUsages'] = verify;
    var _closure1_slot17 = tangon;
    tangon = 14;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    verify = tangon.PersistedStore;
    tangon = function(argFoo) {
        tangon = function() { // Original name: FrecencyStore
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot2;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot18;
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
        entity = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                michal = argFoo;
                tangon = this;
                oscard = tangon.waitFor;
                report = _closure1_slot11;
                zuuluu = _closure1_slot10;
                zuuluu = oscard.bind(tangon)(report, zuuluu);
                zuuluu = null;
                if(!(zuuluu != michal)) { _fun00014_ip = 68; continue _fun00013 }
 35:
                oscard = michal.pendingUsages;
                report = oscard.filter;
                zuuluu = function(argFoo) {
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        michal = argFoo;
                        entity = null;
                        entity = entity != michal;
                        if(!entity) { _fun00016_ip = 34; continue _fun00015 }
 12:
                        tangon = _closure1_slot12;
                        zuuluu = tangon.test;
                        michal = michal.key;
                        entity = zuuluu.bind(tangon)(michal);
 34:
                        return entity;
                    }
                };
                zuuluu = report.bind(oscard)(zuuluu);
                michal['pendingUsages'] = zuuluu;
                _closure1_slot17 = michal;
 68:
                zuuluu = tangon.syncWith;
                report = _closure1_slot7;
                michal = new Array(1);
                michal[0] = report;
                entity = _closure1_slot20;
                entity = zuuluu.bind(tangon)(michal, entity);
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(9);
        entity[0] = report;
        report = {};
        golfie = 'getState';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot17;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'hasPendingUsage';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot17;
            entity = entity.pendingUsages;
            michal = entity.length;
            entity = 0;
            entity = michal > entity;
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'frecencyWithoutFetchingLatest';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot14;
            return entity;
        };
        report['get'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getFrequentlyWithoutFetchingLatest';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot14;
            entity = entity.frequently;
            return entity;
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'getScoreWithoutFetchingLatest';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                zuuluu = _closure1_slot14;
                michal = zuuluu.getFrecency;
                entity = argFoo;
                michal = michal.bind(zuuluu)(entity);
                entity = null;
                zuuluu = entity != michal;
                entity = 0;
                if(!zuuluu) { _fun00018_ip = 37; continue _fun00017 }
 34:
                entity = michal;
 37:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'getScoreForDMWithoutFetchingLatest';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                tangon = this;
                zuuluu = _closure1_slot8;
                michal = zuuluu.getDMFromUserId;
                entity = argFoo;
                zuuluu = michal.bind(zuuluu)(entity);
                entity = null;
                michal = entity != zuuluu;
                entity = 0;
                if(!michal) { _fun00020_ip = 46; continue _fun00019 }
 35:
                michal = tangon.getScoreWithoutFetchingLatest;
                entity = michal.bind(tangon)(zuuluu);
 46:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'getMaxScore';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = 1000;
            return entity;
        };
        report['value'] = golfie;
        entity[7] = report;
        report = {};
        golfie = 'getBonusScore';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = 100;
            return entity;
        };
        report['value'] = oscard;
        entity[8] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    verify = tangon.bind(entity)(verify);
    tangon = 'FrecencyStore';
    verify['displayName'] = tangon;
    verify['persistKey'] = tangon;
    tangon = 15;
    tangon = golfie[tangon];
    kiloes = option.bind(entity)(tangon);
    tangon = {};
    tangon['CHANNEL_SELECT'] = offset;
    tangon['VOICE_CHANNEL_SELECT'] = offset;
    report = function(argFoo) { // Original name: handleUserSettingsProtoUpdate
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            entity = argFoo;
            michal = entity.settings;
            tangon = michal.type;
            entity = entity.wasSaved;
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.FRECENCY_AND_FAVORITES_SETTINGS;
            zuuluu = tangon !== zuuluu;
            if(zuuluu) { _fun00022_ip = 43; continue _fun00021 }
 40:
            zuuluu = !entity;
 43:
            entity = !zuuluu;
            if(zuuluu) { _fun00022_ip = 65; continue _fun00021 }
 49:
            zuuluu = _closure1_slot17;
            michal = new Array(0);
            zuuluu['pendingUsages'] = michal;
            entity = true;
 65:
            return entity;
        }
    };
    tangon['USER_SETTINGS_PROTO_UPDATE'] = report;
    report = verify.prototype;
    report = Object.create(report, {constructor: {value: verify}});
    sizing = report;
    backup = tangon;
    tangon = new sizing[verify](kiloes, backup, foxtra);
    tangon = tangon instanceof Object ? tangon : report;
    report = 16;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'stores/FrecencyStore.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['MAX_NUM_SELECTED_ITEMS'] = michal;
    return entity;
})();