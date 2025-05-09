// app/modules/app_database/managers/native/KvBackgroundManager.tsx
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
            verify = _closure1_slot18;
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
            golfie = _closure1_slot18;
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
    var _closure1_slot17 = entity;
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
    var _closure1_slot18 = entity;
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
            _closure1_slot19 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot19 = entity;
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
    option = 5;
    tangon = oscard[option];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Platform;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 9;
    verify = oscard[tangon];
    verify = report.bind(entity)(verify);
    offset = verify.MAXIMUM_MESSAGES_PER_CHANNEL_DEFAULT;
    var _closure1_slot11 = offset;
    verify = verify.MAXIMUM_MESSAGES_PER_CHANNEL_EVER;
    var _closure1_slot12 = verify;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot13 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot14 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.Millis;
    tangon = tangon.MINUTE;
    tangon = option * tangon;
    var _closure1_slot15 = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    verify = golfie.bind(entity)(tangon);
    tangon = verify.prototype;
    option = Object.create(tangon, {constructor: {value: verify}});
    foxtra = 'KvBackgroundManager';
    backup = option;
    tangon = new backup[verify](foxtra, romeon);
    tangon = tangon instanceof Object ? tangon : option;
    var _closure1_slot16 = tangon;
    tangon = 17;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        tangon = function(argFoo) { // Original name: KvBackgroundManager
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                oscard = this;
                tangon = 0;
                backup = 0;
                entity = copyRestArgs(backup);
                option = _closure1_slot5;
                michal = _closure2_slot3;
                report = undefined;
                option = option.bind(report)(oscard, michal);
                yankee = new Array(0);
                backup = yankee;
                foxtra = entity;
                romeon = 0;
                entity = arraySpread(backup, foxtra, romeon);
                entity = _closure1_slot8;
                offset = entity.bind(report)(michal);
                michal = _closure1_slot7;
                entity = _closure1_slot19;
                entity = entity.bind(report)();
                if(entity) { _fun00010_ip = 88; continue _fun00009 }
 75:
                entity = offset.apply;
                entity = entity.bind(offset)(oscard, yankee);
                _fun00010_ip = 122; continue _fun00009;
 88:
                option = global;
                verify = option.Reflect;
                option = verify.construct;
                golfie = _closure1_slot8;
                golfie = golfie.bind(report)(oscard);
                golfie = golfie.constructor;
                entity = option.bind(verify)(offset, yankee, golfie);
 122:
                entity = michal.bind(report)(oscard, entity);
                var _closure3_slot0 = entity;
                michal = false;
                entity['isCleaning'] = michal;
                entity['lastDeepClean'] = tangon;
                entity['hasConnected'] = michal;
                entity['applicationActive'] = michal;
                michal = {};
                tangon = function(argFoo) { // Original name: APP_STATE_UPDATE
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.handleAppStateUpdate;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                michal['APP_STATE_UPDATE'] = tangon;
                tangon = function(argFoo) { // Original name: LOGOUT
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.handleLogout;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                michal['LOGOUT'] = tangon;
                tangon = function(argFoo) { // Original name: POST_CONNECTION_OPEN
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.handlePostConnectionOpen;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                michal['POST_CONNECTION_OPEN'] = tangon;
                entity['actions'] = michal;
                michal = {};
                tangon = function(argFoo) { // Original name: trimOrphanedChannels
                    michal = argFoo;
                    var _closure4_slot0 = michal;
                    zuuluu = _closure1_slot4;
                    michal = undefined;
                    entity = function* () {
                        entity = function* () { // Original name: ?anon_0_
                            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                                if(zuuluu) { _fun00012_ip = 181; continue _fun00011 }
 12:
                                zuuluu = undefined;
                                var _closure6_slot0 = zuuluu;
                                var _closure6_slot1 = zuuluu;
                                var _closure6_slot2 = zuuluu;
                                golfie = _closure1_slot1;
                                verify = _closure1_slot2;
                                oscard = 13;
                                tangon = verify[oscard];
                                yankee = golfie.bind(zuuluu)(tangon);
                                offset = yankee.channels;
                                option = _closure4_slot0;
                                offset = offset.bind(yankee)(option);
                                _closure6_slot0 = offset;
                                offset = verify[oscard];
                                yankee = golfie.bind(zuuluu)(offset);
                                offset = yankee.messages;
                                offset = offset.bind(yankee)(option);
                                _closure6_slot1 = offset;
                                oscard = verify[oscard];
                                golfie = golfie.bind(zuuluu)(oscard);
                                oscard = golfie.channelsTemp;
                                oscard = oscard.bind(golfie)(option);
                                _closure6_slot2 = oscard;
                                oscard = _closure1_slot13;
                                report = oscard.canEvictOrphans;
                                report = report.bind(oscard)();
                                if(!report) { _fun00012_ip = 175; continue _fun00011 }
 138:
                                oscard = _closure4_slot0;
                                report = oscard.transaction;
                                tangon = function(argFoo) {
                                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                                        zuuluu = argFoo;
                                        michal = _closure6_slot1;
                                        entity = michal.upgradeTransaction;
                                        oscard = entity.bind(michal)(zuuluu);
                                        michal = _closure6_slot2;
                                        entity = michal.upgradeTransaction;
                                        zuuluu = entity.bind(michal)(zuuluu);
                                        golfie = _closure1_slot17;
                                        report = _closure1_slot13;
                                        entity = report.getSaveableChannels;
                                        report = entity.bind(report)();
                                        entity = undefined;
                                        verify = golfie.bind(entity)(report);
                                        golfie = verify.bind(entity)();
                                        report = golfie.done;
                                        option = null;
                                        if(report) { _fun00014_ip = 123; continue _fun00013 }
 80:
                                        report = golfie.value;
                                        yankee = zuuluu.put;
                                        offset = report.guildId;
                                        report = report.channelId;
                                        report = yankee.bind(zuuluu)(offset, report, option);
                                        offset = verify.bind(entity)();
                                        report = offset.done;
                                        golfie = offset;
                                        if(!report) { _fun00014_ip = 80; continue _fun00013 }
 123:
                                        golfie = oscard.trimOrphans;
                                        report = _closure6_slot0;
                                        report = report.prefix;
                                        report = golfie.bind(oscard)(report);
                                        option = oscard.trimChannelsIn;
                                        report = _closure6_slot2;
                                        golfie = report.prefix;
                                        report = _closure1_slot12;
                                        report = option.bind(oscard)(golfie, report);
                                        report = oscard.trimChannelsNotIn;
                                        tangon = _closure6_slot2;
                                        tangon = tangon.prefix;
                                        michal = _closure1_slot11;
                                        michal = report.bind(oscard)(tangon, michal);
                                        michal = zuuluu.delete;
                                        michal = michal.bind(zuuluu)();
                                        return entity;
                                    }
                                };
                                michal = 'trimOrphanedChannels';
                                michal = report.bind(oscard)(tangon, michal);
                                SaveGenerator(address=169);
 167:
                                return michal;
 169:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                if(tangon) { _fun00012_ip = 178; continue _fun00011 }
 175:
                                return zuuluu;
 178:
                                return michal;
 181:
                                return entity;
                            }
                        };
                        return entity;
                    };
                    entity = zuuluu.bind(michal)(entity);
                    entity = entity.bind(michal)();
                    return entity;
                };
                michal['trimOrphanedChannels'] = tangon;
                tangon = function(argFoo) { // Original name: deleteDeprecatedKeyspaces
                    michal = argFoo;
                    var _closure4_slot0 = michal;
                    zuuluu = _closure1_slot4;
                    michal = undefined;
                    entity = function* () {
                        entity = function* () { // Original name: ?anon_0_
                            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(michal) { _fun00016_ip = 57; continue _fun00015 }
 7:
                                report = _closure4_slot0;
                                tangon = report.transaction;
                                zuuluu = function(argFoo) {
                                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                                        romeon = argFoo;
                                        zuuluu = _closure1_slot17;
                                        tangon = _closure1_slot0;
                                        michal = _closure1_slot2;
                                        entity = 13;
                                        michal = michal[entity];
                                        entity = undefined;
                                        michal = tangon.bind(entity)(michal);
                                        michal = michal.DEPRECATED_KEYSPACES;
                                        offset = zuuluu.bind(entity)(michal);
                                        zuuluu = offset.bind(entity)();
                                        michal = zuuluu.done;
                                        verify = 2;
                                        option = 0;
                                        golfie = 1;
                                        oscard = 14;
                                        if(michal) { _fun00018_ip = 187; continue _fun00017 }
 69:
                                        foxtra = zuuluu.value;
                                        michal = _closure1_slot3;
                                        michal = michal.bind(entity)(foxtra, verify);
                                        echoed = michal[option];
                                        michal = michal[golfie];
                                        backup = _closure1_slot0;
                                        foxtra = _closure1_slot2;
                                        foxtra = foxtra[oscard];
                                        foxtra = backup.bind(entity)(foxtra);
                                        kiloes = foxtra.Table;
                                        backup = new Array(1);
                                        backup[0] = michal;
                                        result = _closure4_slot0;
                                        foxtra = kiloes.prototype;
                                        foxtra = Object.create(foxtra, {constructor: {value: kiloes}});
                                        source = foxtra;
                                        update = backup;
                                        output = true;
                                        michal = new source[kiloes](update, echoed, result, output, sizing);
                                        foxtra = michal instanceof Object ? michal : foxtra;
                                        michal = foxtra.upgradeTransaction;
                                        foxtra = michal.bind(foxtra)(romeon);
                                        michal = foxtra.delete;
                                        michal = michal.bind(foxtra)();
                                        foxtra = offset.bind(entity)();
                                        michal = foxtra.done;
                                        zuuluu = foxtra;
                                        if(!michal) { _fun00018_ip = 69; continue _fun00017 }
 187:
                                        return entity;
                                    }
                                };
                                michal = 'deleteDeprecatedKeyspaces';
                                michal = tangon.bind(report)(zuuluu, michal);
                                SaveGenerator(address=43);
 41:
                                return michal;
 43:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(zuuluu) { _fun00016_ip = 54; continue _fun00015 }
 49:
                                zuuluu = undefined;
                                return zuuluu;
 54:
                                return michal;
 57:
                                return entity;
                            }
                        };
                        return entity;
                    };
                    entity = zuuluu.bind(michal)(entity);
                    entity = entity.bind(michal)();
                    return entity;
                };
                michal['deleteDeprecatedKeyspaces'] = tangon;
                tangon = function(argFoo) { // Original name: trimLowDisk
                    michal = argFoo;
                    var _closure4_slot0 = michal;
                    zuuluu = _closure1_slot4;
                    michal = undefined;
                    entity = function* () {
                        entity = function* () { // Original name: ?anon_0_
                            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(michal) { _fun00020_ip = 78; continue _fun00019 }
 7:
                                michal = _closure1_slot14;
                                michal = michal.isLowDisk;
                                if(!michal) { _fun00020_ip = 70; continue _fun00019 }
 23:
                                zuuluu = _closure4_slot0;
                                michal = zuuluu.incrementalVacuum;
                                tangon = michal.bind(zuuluu)();
                                zuuluu = tangon.catch;
                                michal = function(argFoo) {
                                    zuuluu = _closure1_slot16;
                                    michal = zuuluu.warn;
                                    entity = argFoo;
                                    entity = michal.bind(zuuluu)(entity);
                                    return entity;
                                };
                                michal = zuuluu.bind(tangon)(michal);
                                SaveGenerator(address=64);
 62:
                                return michal;
 64:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(zuuluu) { _fun00020_ip = 75; continue _fun00019 }
 70:
                                zuuluu = undefined;
                                return zuuluu;
 75:
                                return michal;
 78:
                                return entity;
                            }
                        };
                        return entity;
                    };
                    entity = zuuluu.bind(michal)(entity);
                    entity = entity.bind(michal)();
                    return entity;
                };
                michal['trimLowDisk'] = tangon;
                tangon = function() { // Original name: deleteExtraDatabases
                    zuuluu = _closure1_slot4;
                    michal = undefined;
                    entity = function* () {
                        entity = function* () { // Original name: ?anon_0_
                            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(michal) { _fun00022_ip = 272; continue _fun00021 }
 12:
                                zuuluu = _closure1_slot10;
                                michal = zuuluu.getUsers;
                                report = michal.bind(zuuluu)();
                                offset = global;
                                tangon = offset.Set;
                                zuuluu = report.map;
                                michal = function(argFoo) {
                                    zuuluu = _closure1_slot1;
                                    michal = _closure1_slot2;
                                    entity = 15;
                                    michal = michal[entity];
                                    entity = undefined;
                                    zuuluu = zuuluu.bind(entity)(michal);
                                    michal = zuuluu.databaseName;
                                    entity = argFoo;
                                    entity = entity.id;
                                    entity = michal.bind(zuuluu)(entity);
                                    return entity;
                                };
                                sizing = zuuluu.bind(report)(michal);
                                zuuluu = tangon.prototype;
                                zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
                                output = zuuluu;
                                michal = new output[tangon](sizing, kiloes);
                                verify = michal instanceof Object ? michal : zuuluu;
                                tangon = _closure1_slot17;
                                report = _closure1_slot0;
                                michal = _closure1_slot2;
                                option = 14;
                                michal = michal[option];
                                zuuluu = undefined;
                                michal = report.bind(zuuluu)(michal);
                                report = michal.Kv;
                                michal = report.databases;
                                michal = michal.bind(report)();
                                SaveGenerator(address=120);
 118:
                                return michal;
 120:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                if(report) { _fun00022_ip = 269; continue _fun00021 }
 129:
                                golfie = tangon.bind(zuuluu)(michal);
                                report = golfie.bind(zuuluu)();
                                tangon = report.done;
                                oscard = 'deleting orphaned database: ';
                                if(tangon) { _fun00022_ip = 266; continue _fun00021 }
 152:
                                backup = report.value;
                                tangon = verify.has;
                                tangon = tangon.bind(verify)(backup);
                                if(tangon) { _fun00022_ip = 251; continue _fun00021 }
 170:
                                kiloes = _closure1_slot16;
                                foxtra = kiloes.log;
                                tangon = offset.HermesInternal;
                                tangon = tangon.concat;
                                tangon = tangon.bind(oscard)(backup);
                                tangon = foxtra.bind(kiloes)(tangon);
                                foxtra = _closure1_slot0;
                                tangon = _closure1_slot2;
                                tangon = tangon[option];
                                tangon = foxtra.bind(zuuluu)(tangon);
                                foxtra = tangon.Database;
                                tangon = foxtra.delete;
                                backup = tangon.bind(foxtra)(backup);
                                foxtra = backup.catch;
                                tangon = function() {
                                    entity = null;
                                    return entity;
                                };
                                tangon = foxtra.bind(backup)(tangon);
 251:
                                foxtra = golfie.bind(zuuluu)();
                                tangon = foxtra.done;
                                report = foxtra;
                                if(!tangon) { _fun00022_ip = 152; continue _fun00021 }
 266:
                                return zuuluu;
 269:
                                return michal;
 272:
                                return entity;
                            }
                        };
                        return entity;
                    };
                    entity = zuuluu.bind(michal)(entity);
                    entity = entity.bind(michal)();
                    return entity;
                };
                michal['deleteExtraDatabases'] = tangon;
                zuuluu = function() { // Original name: optimize
                    zuuluu = _closure1_slot4;
                    michal = undefined;
                    entity = function* () {
                        entity = function* () { // Original name: ?anon_0_
                            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(michal) { _fun00024_ip = 67; continue _fun00023 }
 7:
                                tangon = _closure1_slot0;
                                zuuluu = _closure1_slot2;
                                michal = 14;
                                michal = zuuluu[michal];
                                zuuluu = undefined;
                                michal = tangon.bind(zuuluu)(michal);
                                report = michal.Kv;
                                tangon = report.optimize;
                                michal = true;
                                michal = tangon.bind(report)(michal);
                                SaveGenerator(address=55);
 53:
                                return michal;
 55:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                if(tangon) { _fun00024_ip = 64; continue _fun00023 }
 61:
                                return zuuluu;
 64:
                                return michal;
 67:
                                return entity;
                            }
                        };
                        return entity;
                    };
                    entity = zuuluu.bind(michal)(entity);
                    entity = entity.bind(michal)();
                    return entity;
                };
                michal['optimize'] = zuuluu;
                entity['steps'] = michal;
                return entity;
            }
        };
        var _closure2_slot3 = tangon;
        michal = _closure1_slot9;
        zuuluu = undefined;
        entity = argFoo;
        entity = michal.bind(zuuluu)(tangon, entity);
        michal = _closure1_slot6;
        report = {};
        entity = 'handleAppStateUpdate';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                michal = this;
                entity = argFoo;
                zuuluu = entity.state;
                entity = 'active';
                entity = entity === zuuluu;
                tangon = michal.applicationActive;
                zuuluu = !entity;
                if(entity) { _fun00026_ip = 34; continue _fun00025 }
 31:
                zuuluu = tangon;
 34:
                if(!zuuluu) { _fun00026_ip = 49; continue _fun00025 }
 37:
                zuuluu = michal.maybeCleanup;
                zuuluu = zuuluu.bind(michal)();
 49:
                michal['applicationActive'] = entity;
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(6);
        entity[0] = report;
        report = {};
        option = 'handleLogout';
        report['key'] = option;
        option = function() { // Original name: value
            michal = false;
            entity = this;
            entity['hasConnected'] = michal;
            entity = undefined;
            return entity;
        };
        report['value'] = option;
        entity[1] = report;
        report = {};
        option = 'handlePostConnectionOpen';
        report['key'] = option;
        option = function() { // Original name: value
            michal = true;
            entity = this;
            entity['hasConnected'] = michal;
            entity = undefined;
            return entity;
        };
        report['value'] = option;
        entity[2] = report;
        report = {};
        option = 'maybeCleanup';
        report['key'] = option;
        option = _closure1_slot4;
        golfie = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    StartGenerator();
                    verify = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00028_ip = 380; continue _fun00027 }
 13:
                    michal = undefined;
                    offset = undefined;
                    golfie = undefined;
                    report = undefined;
                    zuuluu = verify.hasConnected;
                    if(!zuuluu) { _fun00028_ip = 377; continue _fun00027 }
 33:
                    zuuluu = verify.isCleaning;
                    if(zuuluu) { _fun00028_ip = 377; continue _fun00027 }
 45:
                    zuuluu = global;
                    tangon = zuuluu.Date;
                    zuuluu = tangon.now;
                    offset = zuuluu.bind(tangon)();
                    zuuluu = _closure1_slot14;
                    zuuluu = zuuluu.isLowDisk;
                    if(zuuluu) { _fun00028_ip = 99; continue _fun00027 }
 78:
                    option = offset;
                    tangon = verify.lastDeepClean;
                    option = option - tangon;
                    tangon = _closure1_slot15;
                    zuuluu = option >= tangon;
 99:
                    golfie = zuuluu;
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    option = 16;
                    zuuluu = zuuluu[option];
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.startBackgroundTask;
                    zuuluu = zuuluu.bind(tangon)();
                    SaveGenerator(address=136);
 134:
                    return zuuluu;
 136:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00028_ip = 374; continue _fun00027 }
 145:
                    report = zuuluu;
 148: // try_start_0
                    tangon = true;
                    verify['isCleaning'] = tangon;
                    yankee = verify.cleanupAsync;
                    tangon = golfie;
                    tangon = yankee.bind(verify)(tangon);
                    SaveGenerator(address=176);
 174:
                    return tangon;
 176:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=10);
                    if(yankee) { _fun00028_ip = 249; continue _fun00027 }
 182: // try_end0
                    yankee = false;
                    verify['isCleaning'] = yankee;
                    yankee = golfie;
                    if(yankee) { _fun00028_ip = 204; continue _fun00027 }
 196:
                    yankee = verify.lastDeepClean;
                    _fun00028_ip = 207; continue _fun00027;
 204:
                    yankee = offset;
 207:
                    verify['lastDeepClean'] = yankee;
                    romeon = _closure1_slot1;
                    yankee = _closure1_slot2;
                    yankee = yankee[option];
                    foxtra = romeon.bind(michal)(yankee);
                    romeon = foxtra.endBackgroundTask;
                    yankee = report;
                    yankee = romeon.bind(foxtra)(yankee);
                    _fun00028_ip = 377; continue _fun00027;
 249:
                    yankee = false;
                    verify['isCleaning'] = yankee;
                    yankee = golfie;
                    if(yankee) { _fun00028_ip = 271; continue _fun00027 }
 263:
                    yankee = verify.lastDeepClean;
                    _fun00028_ip = 274; continue _fun00027;
 271:
                    yankee = offset;
 274:
                    verify['lastDeepClean'] = yankee;
                    romeon = _closure1_slot1;
                    yankee = _closure1_slot2;
                    yankee = yankee[option];
                    foxtra = romeon.bind(michal)(yankee);
                    romeon = foxtra.endBackgroundTask;
                    yankee = report;
                    yankee = romeon.bind(foxtra)(yankee);
                    return tangon;
 314: // catch_target0
                    CatchBlockStart(arg_register=3);
                    yankee = false;
                    verify['isCleaning'] = yankee;
                    if(golfie) { _fun00028_ip = 335; continue _fun00027 }
 327:
                    golfie = verify.lastDeepClean;
                    _fun00028_ip = 338; continue _fun00027;
 335:
                    golfie = offset;
 338:
                    verify['lastDeepClean'] = golfie;
                    golfie = _closure1_slot1;
                    oscard = _closure1_slot2;
                    oscard = oscard[option];
                    golfie = golfie.bind(michal)(oscard);
                    oscard = golfie.endBackgroundTask;
                    report = oscard.bind(golfie)(report);
                    throw tangon;
 374:
                    return zuuluu;
 377:
                    return michal;
 380:
                    return entity;
                }
            };
            return entity;
        };
        golfie = option.bind(zuuluu)(golfie);
        var _closure2_slot2 = golfie;
        golfie = function() { // Original name: maybeCleanup
            entity = undefined;
            tangon = _closure2_slot2;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'cleanupAsync';
        report['key'] = golfie;
        golfie = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    StartGenerator();
                    oscard = argFoo;
                    tangon = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00030_ip = 189; continue _fun00029 }
 16:
                    golfie = _closure1_slot16;
                    report = golfie.verbose;
                    zuuluu = global;
                    zuuluu = zuuluu.HermesInternal;
                    verify = zuuluu.concat;
                    option = 'performing cleanup (deep: ';
                    zuuluu = ')';
                    zuuluu = verify.bind(option)(oscard, zuuluu);
                    zuuluu = report.bind(golfie)(zuuluu);
                    zuuluu = _closure1_slot1;
                    report = _closure1_slot2;
                    michal = 13;
                    michal = report[michal];
                    report = undefined;
                    zuuluu = zuuluu.bind(report)(michal);
                    michal = zuuluu.database;
                    zuuluu = michal.bind(zuuluu)();
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00030_ip = 125; continue _fun00029 }
 101:
                    michal = tangon.cleanDatabaseAsync;
                    michal = michal.bind(tangon)(zuuluu, oscard);
                    SaveGenerator(address=119);
 117:
                    return michal;
 119:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00030_ip = 186; continue _fun00029 }
 125:
                    oscard = tangon.steps;
                    zuuluu = oscard.optimize;
                    zuuluu = zuuluu.bind(oscard)();
                    SaveGenerator(address=145);
 143:
                    return zuuluu;
 145:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(oscard) { _fun00030_ip = 183; continue _fun00029 }
 151:
                    oscard = tangon.steps;
                    tangon = oscard.deleteExtraDatabases;
                    tangon = tangon.bind(oscard)();
                    SaveGenerator(address=171);
 169:
                    return tangon;
 171:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscard) { _fun00030_ip = 180; continue _fun00029 }
 177:
                    return report;
 180:
                    return tangon;
 183:
                    return zuuluu;
 186:
                    return michal;
 189:
                    return entity;
                }
            };
            return entity;
        };
        golfie = option.bind(zuuluu)(golfie);
        var _closure2_slot1 = golfie;
        golfie = function() { // Original name: cleanupAsync
            entity = undefined;
            tangon = _closure2_slot1;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'cleanDatabaseAsync';
        report['key'] = golfie;
        golfie = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    StartGenerator();
                    report = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00032_ip = 151; continue _fun00031 }
 13:
                    tangon = argFoo;
                    zuuluu = argBar;
 19: // try_start_0
                    golfie = report.steps;
                    oscard = golfie.trimOrphanedChannels;
                    michal = tangon;
                    michal = oscard.bind(golfie)(michal);
                    SaveGenerator(address=43);
 41:
                    return michal;
 43:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(oscard) { _fun00032_ip = 117; continue _fun00031 }
 49:
                    if(!zuuluu) { _fun00032_ip = 109; continue _fun00031 }
 52:
                    golfie = report.steps;
                    oscard = golfie.deleteDeprecatedKeyspaces;
                    zuuluu = tangon;
                    zuuluu = oscard.bind(golfie)(zuuluu);
                    SaveGenerator(address=76);
 74:
                    return zuuluu;
 76:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(oscard) { _fun00032_ip = 114; continue _fun00031 }
 82:
                    oscard = report.steps;
                    report = oscard.trimLowDisk;
                    tangon = report.bind(oscard)(tangon);
                    SaveGenerator(address=103);
 101:
                    return tangon;
 103:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00032_ip = 111; continue _fun00031 }
 109: // try_end0
                    _fun00032_ip = 146; continue _fun00031;
 111:
                    return tangon;
 114:
                    return zuuluu;
 117:
                    return michal;
 120: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tangon = _closure1_slot16;
                    zuuluu = tangon.warn;
                    michal = "couldn't clean database:";
                    michal = zuuluu.bind(tangon)(michal, report);
 146:
                    michal = undefined;
                    return michal;
 151:
                    return entity;
                }
            };
            return entity;
        };
        golfie = option.bind(zuuluu)(golfie);
        var _closure2_slot0 = golfie;
        oscard = function() { // Original name: cleanDatabaseAsync
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        report['value'] = oscard;
        entity[5] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    backup = tangon;
    michal = new backup[michal](foxtra);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 18;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_database/managers/native/KvBackgroundManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();