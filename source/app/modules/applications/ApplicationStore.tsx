// app/modules/applications/ApplicationStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
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
            _fun00002_ip = 74; continue _fun00001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot14 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00004_ip = 46; continue _fun00003 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00004_ip = 55; continue _fun00003 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00004_ip = 343; continue _fun00003 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00004_ip = 323; continue _fun00003 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00004_ip = 283; continue _fun00003 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00004_ip = 270; continue _fun00003 }
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
            if(!golfie) { _fun00004_ip = 163; continue _fun00003 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00004_ip = 179; continue _fun00003 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00004_ip = 249; continue _fun00003 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00004_ip = 249; continue _fun00003 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00004_ip = 234; continue _fun00003 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00004_ip = 247; continue _fun00003 }
 234:
            verify = _closure1_slot16;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00004_ip = 265; continue _fun00003;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00004_ip = 283; continue _fun00003;
 270:
            golfie = _closure1_slot16;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00004_ip = 323; continue _fun00003 }
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
            if(!tangon) { _fun00004_ip = 330; continue _fun00003 }
 326:
            _closure2_slot0 = tangon;
 330:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00006_ip = 56; continue _fun00005 }
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
                    _fun00006_ip = 67; continue _fun00005;
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
    var _closure1_slot15 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00008_ip = 23; continue _fun00007 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00008_ip = 33; continue _fun00007 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00008_ip = 70; continue _fun00007 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00008_ip = 55; continue _fun00007 }
 70:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: addApplication
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = argFoo;
            tangon = _closure1_slot8;
            entity = michal.id;
            tangon = tangon[entity];
            oscard = _closure1_slot11;
            report = michal.id;
            entity = global;
            golfie = entity.Date;
            entity = golfie.now;
            entity = entity.bind(golfie)();
            oscard[report] = entity;
            entity = null;
            golfie = michal;
            if(!(entity != tangon)) { _fun00010_ip = 71; continue _fun00009 }
 58:
            entity = tangon.mergeFromApplicationUpdate;
            golfie = entity.bind(tangon)(michal);
 71:
            tangon = _closure1_slot8;
            entity = michal.id;
            tangon[entity] = golfie;
            tangon = _closure1_slot10;
            report = michal.name;
            entity = report.toLowerCase;
            entity = entity.bind(report)();
            tangon[entity] = golfie;
            report = _closure1_slot15;
            tangon = michal.aliases;
            entity = undefined;
            oscard = report.bind(entity)(tangon);
            report = oscard.bind(entity)();
            tangon = report.done;
            if(tangon) { _fun00010_ip = 174; continue _fun00009 }
 136:
            verify = report.value;
            option = _closure1_slot10;
            tangon = verify.toLowerCase;
            tangon = tangon.bind(verify)();
            option[tangon] = golfie;
            option = oscard.bind(entity)();
            tangon = option.done;
            report = option;
            if(!tangon) { _fun00010_ip = 136; continue _fun00009 }
 174:
            zuuluu = _closure1_slot12;
            michal = michal.id;
            michal = delete zuuluu[michal];
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: updateApplication
        zuuluu = _closure1_slot17;
        tangon = _closure1_slot6;
        michal = tangon.createFromServer;
        entity = argFoo;
        michal = michal.bind(tangon)(entity);
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: handleAppWithBot
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.userId;
            report = entity.applicationId;
            entity = _closure1_slot13;
            entity = entity.botUserIdToAppUsage;
            tangon = entity[zuuluu];
            entity = _closure1_slot13;
            michal = entity.botUserIdToAppUsage;
            entity = null;
            if(!(entity != tangon)) { _fun00012_ip = 65; continue _fun00011 }
 46:
            entity = {};
            entity['applicationId'] = report;
            tangon = tangon.lastUsedMs;
            entity['lastUsedMs'] = tangon;
            _fun00012_ip = 96; continue _fun00011;
 65:
            tangon = {};
            tangon['applicationId'] = report;
            report = global;
            oscard = report.Date;
            report = oscard.now;
            report = report.bind(oscard)();
            tangon['lastUsedMs'] = report;
            entity = tangon;
 96:
            michal[zuuluu] = entity;
            michal = global;
            entity = michal.Map;
            zuuluu = entity.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: entity}});
            kiloes = zuuluu;
            entity = new kiloes[entity](backup);
            report = entity instanceof Object ? entity : zuuluu;
            tangon = michal.Object;
            zuuluu = tangon.entries;
            entity = _closure1_slot13;
            entity = entity.botUserIdToAppUsage;
            offset = zuuluu.bind(tangon)(entity);
            entity = offset.length;
            oscard = 0;
            zuuluu = oscard < entity;
            entity = undefined;
            verify = 2;
            option = 1;
            tangon = 0;
            if(!zuuluu) { _fun00012_ip = 224; continue _fun00011 }
 179:
            yankee = offset[tangon];
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.bind(entity)(yankee, verify);
            romeon = zuuluu[oscard];
            yankee = zuuluu[option];
            zuuluu = report.set;
            zuuluu = zuuluu.bind(report)(romeon, yankee);
            tangon = tangon + 1;
            zuuluu = offset.length;
            if(tangon < zuuluu) { _fun00012_ip = 179; continue _fun00011 }
 224:
            tangon = michal.Array;
            zuuluu = tangon.from;
            michal = report.entries;
            michal = michal.bind(report)();
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.sort;
            michal = function(argFoo, argBar) {
                entity = argBar;
                zuuluu = 1;
                entity = entity[zuuluu];
                michal = entity.lastUsedMs;
                entity = argFoo;
                entity = entity[zuuluu];
                entity = entity.lastUsedMs;
                entity = michal - entity;
                return entity;
            };
            report = zuuluu.bind(tangon)(michal);
            michal = report.length;
            michal = oscard < michal;
            tangon = 10;
            zuuluu = 0;
            if(!michal) { _fun00012_ip = 323; continue _fun00011 }
 285:
            if(!(zuuluu >= tangon)) { _fun00012_ip = 311; continue _fun00011 }
 289:
            michal = report[zuuluu];
            option = michal[oscard];
            michal = _closure1_slot13;
            michal = michal.botUserIdToAppUsage;
            michal = delete michal[option];
 311:
            zuuluu = zuuluu + 1;
            michal = report.length;
            if(zuuluu < michal) { _fun00012_ip = 285; continue _fun00011 }
 323:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    option = function(argFoo) { // Original name: handleEntitlementsFetched
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            michal = entity.entitlements;
            entity = _closure1_slot15;
            option = undefined;
            golfie = entity.bind(option)(michal);
            zuuluu = golfie.bind(option)();
            michal = zuuluu.done;
            report = null;
            tangon = zuuluu;
            zuuluu = false;
            entity = false;
            if(michal) { _fun00014_ip = 122; continue _fun00013 }
 44:
            michal = tangon.value;
            michal = michal.sku;
            yankee = report == michal;
            offset = undefined;
            if(yankee) { _fun00014_ip = 69; continue _fun00013 }
 64:
            offset = michal.application;
 69:
            if(!(report != offset)) { _fun00014_ip = 104; continue _fun00013 }
 73:
            offset = _closure1_slot17;
            romeon = _closure1_slot6;
            yankee = romeon.createFromServer;
            michal = michal.application;
            michal = yankee.bind(romeon)(michal);
            michal = offset.bind(option)(michal);
            zuuluu = true;
 104:
            yankee = golfie.bind(option)();
            michal = yankee.done;
            tangon = yankee;
            entity = zuuluu;
            if(!michal) { _fun00014_ip = 44; continue _fun00013 }
 122:
            return entity;
        }
    };
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = report[entity];
    entity = undefined;
    michal = oscard.bind(entity)(michal);
    var _closure1_slot0 = michal;
    michal = 1;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot1 = michal;
    michal = 2;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot2 = michal;
    michal = 3;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 4;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 5;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 6;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = new Array(0);
    var _closure1_slot7 = michal;
    michal = {};
    var _closure1_slot8 = michal;
    michal = {};
    var _closure1_slot9 = michal;
    michal = {};
    var _closure1_slot10 = michal;
    michal = {};
    var _closure1_slot11 = michal;
    michal = {};
    var _closure1_slot12 = michal;
    michal = {};
    golfie = {};
    michal['botUserIdToAppUsage'] = golfie;
    var _closure1_slot13 = michal;
    michal = 7;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    golfie = michal.PersistedStore;
    michal = function(argFoo) {
        tangon = function() { // Original name: ApplicationStore
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot0;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot3;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot2;
                entity = _closure1_slot14;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00016_ip = 69; continue _fun00015 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00016_ip = 105; continue _fun00015;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot3;
                oscard = oscard.bind(zuuluu)(tangon);
                oscard = oscard.constructor;
                report = arguments;
                entity = golfie.bind(option)(verify, report, oscard);
 105:
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot4;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot1;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                offset = argFoo;
                entity = null;
                if(!(entity != offset)) { _fun00018_ip = 158; continue _fun00017 }
 12:
                entity = offset.botUserIdToAppUsage;
                michal = 'object';
                entity = typeof entity;
                if(!(michal === entity)) { _fun00018_ip = 158; continue _fun00017 }
 32:
                option = offset.botUserIdToAppUsage;
                zuuluu = 0;
                michal = 'number';
                entity = 'string';
                for(report in option)
 59:
                {
 68:
                    foxtra = report;
                    yankee = offset.botUserIdToAppUsage;
                    yankee = yankee[foxtra];
                    kiloes = yankee.applicationId;
                    backup = yankee.lastUsedMs;
                    yankee = typeof kiloes;
                    yankee = entity === yankee;
                    if(!yankee) { _fun00018_ip = 111; continue _fun00017 }
 102:
                    romeon = kiloes.length;
                    yankee = romeon > zuuluu;
 111:
                    if(!yankee) { _fun00018_ip = 121; continue _fun00017 }
 114:
                    romeon = typeof backup;
                    yankee = michal === romeon;
 121:
                    if(!yankee) { _fun00018_ip = 128; continue _fun00017 }
 124:
                    yankee = backup > zuuluu;
 128:
                    if(!yankee) { _fun00018_ip = 59; continue _fun00017 }
 131:
                    yankee = _closure1_slot13;
                    romeon = yankee.botUserIdToAppUsage;
                    yankee = {};
                    yankee['applicationId'] = kiloes;
                    yankee['lastUsedMs'] = backup;
                    romeon[foxtra] = yankee;
                    _fun00018_ip = 59; continue _fun00017;
                }
 158:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(13);
        entity[0] = report;
        report = {};
        golfie = 'getState';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot13;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = '_getAllApplications';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = global;
            zuuluu = entity.Object;
            michal = zuuluu.values;
            entity = _closure1_slot8;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getApplications';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot8;
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getGuildApplication';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                oscard = argFoo;
                report = argBar;
                entity = null;
                if(!(entity != oscard)) { _fun00020_ip = 85; continue _fun00019 }
 12:
                entity = global;
                zuuluu = entity.Object;
                michal = zuuluu.values;
                entity = _closure1_slot8;
                tangon = michal.bind(zuuluu)(entity);
                entity = tangon.length;
                zuuluu = 0;
                entity = zuuluu < entity;
                if(!entity) { _fun00020_ip = 85; continue _fun00019 }
 51:
                entity = tangon[zuuluu];
                michal = entity.guildId;
                if(!(michal === oscard)) { _fun00020_ip = 73; continue _fun00019 }
 64:
                michal = entity.type;
                if(!(michal !== report)) { _fun00020_ip = 89; continue _fun00019 }
 73:
                zuuluu = zuuluu + 1;
                michal = tangon.length;
                if(zuuluu < michal) { _fun00020_ip = 51; continue _fun00019 }
 85:
                michal = undefined;
                return michal;
 89:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'getGuildApplicationIds';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                tangon = argFoo;
                zuuluu = null;
                if(!(zuuluu != tangon)) { _fun00022_ip = 30; continue _fun00021 }
 9:
                entity = _closure1_slot9;
                entity = entity[tangon];
                if(!(zuuluu == entity)) { _fun00022_ip = 28; continue _fun00021 }
 24:
                entity = _closure1_slot7;
 28:
                _fun00022_ip = 37; continue _fun00021;
 30:
                entity = _closure1_slot7;
 37:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'getApplication';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                michal = argFoo;
                entity = null;
                if(!(entity == michal)) { _fun00024_ip = 13; continue _fun00023 }
 9:
                entity = undefined;
                return entity;
 13:
                entity = _closure1_slot8;
                entity = entity[michal];
                return entity;
            }
        };
        report['value'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'getApplicationByName';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                michal = argFoo;
                entity = null;
                if(!(entity == michal)) { _fun00026_ip = 13; continue _fun00025 }
 9:
                entity = undefined;
                return entity;
 13:
                entity = michal.toLowerCase;
                zuuluu = entity.bind(michal)();
                entity = global;
                entity = entity.Object;
                entity = entity.prototype;
                report = entity.hasOwnProperty;
                tangon = report.call;
                entity = _closure1_slot10;
                tangon = tangon.bind(report)(entity, zuuluu);
                entity = undefined;
                if(!tangon) { _fun00026_ip = 73; continue _fun00025 }
 65:
                michal = _closure1_slot10;
                entity = michal[zuuluu];
 73:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[7] = report;
        report = {};
        golfie = 'getApplicationLastUpdated';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            michal = _closure1_slot11;
            entity = argFoo;
            entity = michal[entity];
            return entity;
        };
        report['value'] = golfie;
        entity[8] = report;
        report = {};
        golfie = 'isFetchingApplication';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            michal = _closure1_slot12;
            entity = argFoo;
            michal = michal[entity];
            entity = true;
            entity = entity === michal;
            return entity;
        };
        report['value'] = golfie;
        entity[9] = report;
        report = {};
        golfie = 'didFetchingApplicationFail';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            michal = _closure1_slot12;
            entity = argFoo;
            michal = michal[entity];
            entity = false;
            entity = entity === michal;
            return entity;
        };
        report['value'] = golfie;
        entity[10] = report;
        report = {};
        golfie = 'getFetchingOrFailedFetchingIds';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = global;
            zuuluu = entity.Object;
            michal = zuuluu.keys;
            entity = _closure1_slot12;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[11] = report;
        report = {};
        golfie = 'getAppIdForBotUserId';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                zuuluu = argFoo;
                entity = null;
                if(!(entity == zuuluu)) { _fun00028_ip = 13; continue _fun00027 }
 9:
                michal = undefined;
                return michal;
 13:
                michal = _closure1_slot13;
                michal = michal.botUserIdToAppUsage;
                michal = michal[zuuluu];
                zuuluu = entity == michal;
                entity = undefined;
                if(zuuluu) { _fun00028_ip = 44; continue _fun00027 }
 39:
                entity = michal.applicationId;
 44:
                return entity;
            }
        };
        report['value'] = oscard;
        entity[12] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    golfie = michal.bind(entity)(golfie);
    michal = 'ApplicationStore';
    golfie['displayName'] = michal;
    golfie['persistKey'] = michal;
    michal = 8;
    michal = report[michal];
    romeon = oscard.bind(entity)(michal);
    michal = {};
    verify = function() { // Original name: handleLogout
        entity = {};
        _closure1_slot8 = entity;
        entity = {};
        _closure1_slot9 = entity;
        entity = {};
        _closure1_slot10 = entity;
        entity = {};
        _closure1_slot11 = entity;
        entity = {};
        _closure1_slot12 = entity;
        entity = undefined;
        return entity;
    };
    michal['LOGOUT'] = verify;
    verify = function(argFoo) { // Original name: handleOverlayInitialize
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.applications;
            michal = _closure1_slot15;
            entity = undefined;
            tangon = michal.bind(entity)(zuuluu);
            zuuluu = tangon.bind(entity)();
            michal = zuuluu.done;
            if(michal) { _fun00030_ip = 88; continue _fun00029 }
 35:
            verify = zuuluu.value;
            oscard = _closure1_slot17;
            michal = _closure1_slot6;
            golfie = michal.prototype;
            golfie = Object.create(golfie, {constructor: {value: michal}});
            offset = golfie;
            michal = new offset[michal](verify, option);
            michal = michal instanceof Object ? michal : golfie;
            michal = oscard.bind(entity)(michal);
            oscard = tangon.bind(entity)();
            michal = oscard.done;
            zuuluu = oscard;
            if(!michal) { _fun00030_ip = 35; continue _fun00029 }
 88:
            return entity;
        }
    };
    michal['OVERLAY_INITIALIZE'] = verify;
    verify = function(argFoo) { // Original name: handleApplicationFetch
        entity = argFoo;
        tangon = entity.applicationId;
        michal = _closure1_slot12;
        michal = michal[tangon];
        zuuluu = _closure1_slot12;
        entity = true;
        zuuluu[tangon] = entity;
        entity = entity !== michal;
        return entity;
    };
    michal['APPLICATION_FETCH'] = verify;
    verify = function(argFoo) { // Original name: handleApplicationFetchSuccess
        entity = argFoo;
        zuuluu = entity.application;
        michal = _closure1_slot18;
        entity = undefined;
        michal = michal.bind(entity)(zuuluu);
        return entity;
    };
    michal['APPLICATION_FETCH_SUCCESS'] = verify;
    verify = function(argFoo) { // Original name: handleApplicationFetchFail
        entity = argFoo;
        tangon = entity.applicationId;
        michal = _closure1_slot12;
        michal = michal[tangon];
        zuuluu = _closure1_slot12;
        entity = false;
        zuuluu[tangon] = entity;
        entity = entity !== michal;
        return entity;
    };
    michal['APPLICATION_FETCH_FAIL'] = verify;
    verify = function(argFoo) { // Original name: handleApplicationsFetch
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            entity = argFoo;
            michal = entity.applicationIds;
            entity = _closure1_slot15;
            oscard = undefined;
            report = entity.bind(oscard)(michal);
            zuuluu = report.bind(oscard)();
            michal = zuuluu.done;
            tangon = true;
            entity = false;
            if(michal) { _fun00032_ip = 79; continue _fun00031 }
 39:
            verify = zuuluu.value;
            michal = _closure1_slot12;
            michal = michal[verify];
            option = _closure1_slot12;
            option[verify] = tangon;
            entity = tangon !== michal;
            verify = report.bind(oscard)();
            michal = verify.done;
            zuuluu = verify;
            if(!michal) { _fun00032_ip = 39; continue _fun00031 }
 79:
            return entity;
        }
    };
    michal['APPLICATIONS_FETCH'] = verify;
    verify = function(argFoo) { // Original name: handleApplicationsFetchSuccess
        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.applications;
            michal = _closure1_slot15;
            entity = undefined;
            tangon = michal.bind(entity)(zuuluu);
            zuuluu = tangon.bind(entity)();
            michal = zuuluu.done;
            if(michal) { _fun00034_ip = 79; continue _fun00033 }
 35:
            option = zuuluu.value;
            oscard = _closure1_slot17;
            golfie = _closure1_slot6;
            michal = golfie.createFromServer;
            michal = michal.bind(golfie)(option);
            michal = oscard.bind(entity)(michal);
            oscard = tangon.bind(entity)();
            michal = oscard.done;
            zuuluu = oscard;
            if(!michal) { _fun00034_ip = 35; continue _fun00033 }
 79:
            return entity;
        }
    };
    michal['APPLICATIONS_FETCH_SUCCESS'] = verify;
    verify = function(argFoo) { // Original name: handleApplicationsFetchFail
        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
            entity = argFoo;
            michal = entity.applicationIds;
            entity = _closure1_slot15;
            oscard = undefined;
            report = entity.bind(oscard)(michal);
            entity = report.bind(oscard)();
            michal = entity.done;
            tangon = false;
            zuuluu = entity;
            entity = false;
            if(michal) { _fun00036_ip = 82; continue _fun00035 }
 42:
            verify = zuuluu.value;
            michal = _closure1_slot12;
            michal = michal[verify];
            option = _closure1_slot12;
            option[verify] = tangon;
            entity = tangon !== michal;
            verify = report.bind(oscard)();
            michal = verify.done;
            zuuluu = verify;
            if(!michal) { _fun00036_ip = 42; continue _fun00035 }
 82:
            return entity;
        }
    };
    michal['APPLICATIONS_FETCH_FAIL'] = verify;
    verify = function(argFoo) { // Original name: handleUpdateApplication
        entity = argFoo;
        zuuluu = entity.application;
        michal = _closure1_slot18;
        entity = undefined;
        michal = michal.bind(entity)(zuuluu);
        return entity;
    };
    michal['APPLICATION_UPDATE'] = verify;
    michal['APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS'] = option;
    michal['ENTITLEMENTS_FETCH_FOR_USER_SUCCESS'] = option;
    michal['ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS'] = option;
    option = function(argFoo) { // Original name: handleGuildApplicationsFetchSuccess
        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
            entity = argFoo;
            tangon = entity.guildId;
            oscard = entity.applications;
            zuuluu = new Array(0);
            report = _closure1_slot15;
            entity = undefined;
            golfie = report.bind(entity)(oscard);
            oscard = golfie.bind(entity)();
            report = oscard.done;
            if(report) { _fun00038_ip = 103; continue _fun00037 }
 44:
            offset = oscard.value;
            option = zuuluu.push;
            report = offset.id;
            report = option.bind(zuuluu)(report);
            option = _closure1_slot17;
            verify = _closure1_slot6;
            report = verify.createFromServer;
            report = report.bind(verify)(offset);
            report = option.bind(entity)(report);
            option = golfie.bind(entity)();
            report = option.done;
            oscard = option;
            if(!report) { _fun00038_ip = 44; continue _fun00037 }
 103:
            michal = _closure1_slot9;
            michal[tangon] = zuuluu;
            return entity;
        }
    };
    michal['GUILD_APPLICATIONS_FETCH_SUCCESS'] = option;
    option = function(argFoo) { // Original name: handleFetchPayments
        _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.payments;
            entity = global;
            entity = entity.Set;
            michal = entity.prototype;
            michal = Object.create(michal, {constructor: {value: entity}});
            romeon = michal;
            entity = new romeon[entity](yankee);
            entity = entity instanceof Object ? entity : michal;
            michal = _closure1_slot15;
            oscard = undefined;
            report = michal.bind(oscard)(zuuluu);
            zuuluu = report.bind(oscard)();
            michal = zuuluu.done;
            tangon = null;
            if(michal) { _fun00040_ip = 154; continue _fun00039 }
 65:
            michal = zuuluu.value;
            michal = michal.sku;
            option = tangon == michal;
            offset = undefined;
            if(option) { _fun00040_ip = 90; continue _fun00039 }
 85:
            offset = michal.application;
 90:
            michal = tangon == offset;
            if(michal) { _fun00040_ip = 112; continue _fun00039 }
 97:
            verify = entity.has;
            option = offset.id;
            michal = verify.bind(entity)(option);
 112:
            if(michal) { _fun00040_ip = 139; continue _fun00039 }
 115:
            option = _closure1_slot17;
            verify = _closure1_slot6;
            michal = verify.createFromServer;
            michal = michal.bind(verify)(offset);
            michal = option.bind(oscard)(michal);
 139:
            option = report.bind(oscard)();
            michal = option.done;
            zuuluu = option;
            if(!michal) { _fun00040_ip = 65; continue _fun00039 }
 154:
            michal = entity.size;
            entity = 0;
            entity = michal > entity;
            return entity;
        }
    };
    michal['BILLING_PAYMENTS_FETCH_SUCCESS'] = option;
    option = function(argFoo) { // Original name: handleUpdatePayment
        _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
            entity = argFoo;
            michal = entity.payment;
            report = michal.sku;
            tangon = null;
            oscard = tangon == report;
            entity = undefined;
            zuuluu = undefined;
            if(oscard) { _fun00042_ip = 33; continue _fun00041 }
 28:
            zuuluu = report.application;
 33:
            if(!(tangon != zuuluu)) { _fun00042_ip = 77; continue _fun00041 }
 37:
            zuuluu = _closure1_slot17;
            report = _closure1_slot6;
            tangon = report.createFromServer;
            michal = michal.sku;
            michal = michal.application;
            michal = tangon.bind(report)(michal);
            michal = zuuluu.bind(entity)(michal);
            return entity;
 77:
            entity = false;
            return entity;
        }
    };
    michal['PAYMENT_UPDATE'] = option;
    option = function(argFoo) { // Original name: handleResolveInvite
        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
            entity = argFoo;
            entity = entity.invite;
            zuuluu = entity.target_application;
            michal = null;
            if(!(michal != zuuluu)) { _fun00044_ip = 58; continue _fun00043 }
 21:
            zuuluu = _closure1_slot17;
            tangon = _closure1_slot6;
            michal = tangon.createFromServer;
            entity = entity.target_application;
            michal = michal.bind(tangon)(entity);
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            return entity;
 58:
            entity = false;
            return entity;
        }
    };
    michal['INVITE_RESOLVE_SUCCESS'] = option;
    option = function(argFoo) { // Original name: handleGiftCodeResolveSuccess
        _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
            entity = argFoo;
            michal = entity.giftCode;
            report = michal.store_listing;
            tangon = null;
            oscard = tangon == report;
            entity = undefined;
            zuuluu = undefined;
            if(oscard) { _fun00046_ip = 39; continue _fun00045 }
 28:
            report = report.sku;
            zuuluu = report.application;
 39:
            if(!(tangon != zuuluu)) { _fun00046_ip = 89; continue _fun00045 }
 43:
            zuuluu = _closure1_slot17;
            report = _closure1_slot6;
            tangon = report.createFromServer;
            michal = michal.store_listing;
            michal = michal.sku;
            michal = michal.application;
            michal = tangon.bind(report)(michal);
            michal = zuuluu.bind(entity)(michal);
            return entity;
 89:
            entity = false;
            return entity;
        }
    };
    michal['GIFT_CODE_RESOLVE_SUCCESS'] = option;
    option = function(argFoo) { // Original name: handleLibraryApplicationsFetch
        _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.libraryApplications;
            michal = _closure1_slot15;
            entity = undefined;
            tangon = michal.bind(entity)(zuuluu);
            zuuluu = tangon.bind(entity)();
            michal = zuuluu.done;
            if(michal) { _fun00048_ip = 84; continue _fun00047 }
 35:
            michal = zuuluu.value;
            oscard = _closure1_slot17;
            option = _closure1_slot6;
            golfie = option.createFromServer;
            michal = michal.application;
            michal = golfie.bind(option)(michal);
            michal = oscard.bind(entity)(michal);
            oscard = tangon.bind(entity)();
            michal = oscard.done;
            zuuluu = oscard;
            if(!michal) { _fun00048_ip = 35; continue _fun00047 }
 84:
            return entity;
        }
    };
    michal['LIBRARY_FETCH_SUCCESS'] = option;
    option = function(argFoo) { // Original name: handleStoreListingFetch
        _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
            entity = argFoo;
            entity = entity.storeListing;
            michal = entity.sku;
            zuuluu = michal.application;
            michal = null;
            if(!(michal != zuuluu)) { _fun00050_ip = 68; continue _fun00049 }
 26:
            zuuluu = _closure1_slot17;
            tangon = _closure1_slot6;
            michal = tangon.createFromServer;
            entity = entity.sku;
            entity = entity.application;
            michal = michal.bind(tangon)(entity);
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            return entity;
 68:
            entity = false;
            return entity;
        }
    };
    michal['STORE_LISTING_FETCH_SUCCESS'] = option;
    option = function(argFoo) { // Original name: handleLoadMessages
        entity = argFoo;
        zuuluu = entity.messages;
        michal = zuuluu.forEach;
        entity = function(argFoo) {
            zuuluu = function(argFoo) { // Original name: mergeApplicationsFromMessage
                _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                    entity = argFoo;
                    zuuluu = entity.attachments;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00052_ip = 32; continue _fun00051 }
 15:
                    michal = zuuluu.forEach;
                    entity = function(argFoo) {
                        _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                            entity = argFoo;
                            zuuluu = entity.application;
                            michal = null;
                            if(!(michal != zuuluu)) { _fun00054_ip = 48; continue _fun00053 }
 14:
                            zuuluu = _closure1_slot17;
                            tangon = _closure1_slot6;
                            michal = tangon.createFromServer;
                            entity = entity.application;
                            michal = michal.bind(tangon)(entity);
                            entity = undefined;
                            entity = zuuluu.bind(entity)(michal);
 48:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = michal.bind(zuuluu)(entity);
 32:
                    entity = undefined;
                    return entity;
                }
            };
            entity = undefined;
            michal = argFoo;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    michal['LOAD_MESSAGES_SUCCESS'] = option;
    option = function(argFoo) { // Original name: handleFetchAppRecommendationsSuccess
        entity = argFoo;
        zuuluu = entity.recommendations;
        michal = zuuluu.forEach;
        entity = function(argFoo) {
            entity = argFoo;
            zuuluu = entity.items;
            michal = zuuluu.forEach;
            entity = function(argFoo) {
                zuuluu = _closure1_slot17;
                tangon = _closure1_slot6;
                michal = tangon.createFromServer;
                entity = argFoo;
                entity = entity.application;
                michal = michal.bind(tangon)(entity);
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    michal['APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS'] = option;
    option = function(argFoo) { // Original name: handleProfileFetchSuccess
        _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
            entity = argFoo;
            entity = entity.userProfile;
            tangon = entity.user;
            entity = entity.application;
            michal = tangon.bot;
            if(!michal) { _fun00056_ip = 34; continue _fun00055 }
 28:
            zuuluu = null;
            michal = zuuluu != entity;
 34:
            if(!michal) { _fun00056_ip = 71; continue _fun00055 }
 37:
            zuuluu = _closure1_slot19;
            michal = {};
            tangon = tangon.id;
            michal['userId'] = tangon;
            entity = entity.id;
            michal['applicationId'] = entity;
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
 71:
            entity = undefined;
            return entity;
        }
    };
    michal['USER_PROFILE_FETCH_SUCCESS'] = option;
    option = function(argFoo) { // Original name: handleAppDMOpen
        _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.botUserId;
            michal = _closure1_slot13;
            michal = michal.botUserIdToAppUsage;
            tangon = michal[zuuluu];
            michal = null;
            if(!(michal != tangon)) { _fun00058_ip = 84; continue _fun00057 }
 32:
            entity = _closure1_slot13;
            michal = entity.botUserIdToAppUsage;
            entity = {};
            golfie = entity;
            oscard = tangon;
            tangon = copyDataProperties(golfie, oscard);
            tangon = global;
            report = tangon.Date;
            tangon = report.now;
            report = tangon.bind(report)();
            tangon = 'lastUsedMs';
            entity[tangon] = report;
            michal[zuuluu] = entity;
 84:
            entity = undefined;
            return entity;
        }
    };
    michal['APP_DM_OPEN'] = option;
    option = function(argFoo) { // Original name: handleAuthorizedAppsUpdate
        entity = argFoo;
        zuuluu = entity.apps;
        michal = zuuluu.forEach;
        entity = function(argFoo) {
            _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                tangon = argFoo;
                report = _closure1_slot17;
                oscard = _closure1_slot6;
                zuuluu = oscard.createFromServer;
                entity = tangon.application;
                zuuluu = zuuluu.bind(oscard)(entity);
                entity = undefined;
                zuuluu = report.bind(entity)(zuuluu);
                zuuluu = tangon.application;
                report = zuuluu.bot;
                zuuluu = null;
                if(!(zuuluu != report)) { _fun00060_ip = 88; continue _fun00059 }
 54:
                zuuluu = _closure1_slot19;
                michal = {};
                report = report.id;
                michal['userId'] = report;
                tangon = tangon.application;
                tangon = tangon.id;
                michal['applicationId'] = tangon;
                michal = zuuluu.bind(entity)(michal);
 88:
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    michal['USER_AUTHORIZED_APPS_UPDATE'] = option;
    tangon = function(argFoo) { // Original name: handleNotificationCenterItemsSuccess
        entity = argFoo;
        zuuluu = entity.items;
        michal = zuuluu.forEach;
        entity = function(argFoo) {
            _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
                entity = argFoo;
                zuuluu = entity.application;
                michal = null;
                if(!(michal != zuuluu)) { _fun00062_ip = 48; continue _fun00061 }
 14:
                zuuluu = _closure1_slot17;
                tangon = _closure1_slot6;
                michal = tangon.createFromServer;
                entity = entity.application;
                michal = michal.bind(tangon)(entity);
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
 48:
                entity = undefined;
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    michal['LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS'] = tangon;
    tangon = golfie.prototype;
    tangon = Object.create(tangon, {constructor: {value: golfie}});
    foxtra = tangon;
    yankee = michal;
    michal = new foxtra[golfie](romeon, yankee, offset);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 9;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/applications/ApplicationStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();