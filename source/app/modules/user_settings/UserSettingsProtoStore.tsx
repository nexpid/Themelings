// app/modules/user_settings/UserSettingsProtoStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
    verify = function() { // Original name: handleConnectionClosedOrResumed
        michal = _closure1_slot15;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    entity = function() { // Original name: clearInFlightTimeouts
        entity = global;
        zuuluu = entity.Object;
        michal = zuuluu.values;
        entity = _closure1_slot12;
        zuuluu = michal.bind(zuuluu)(entity);
        michal = zuuluu.forEach;
        entity = function(argFoo) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = argFoo;
                entity = tangon.editInfo;
                michal = entity.timeout;
                entity = null;
                if(!(entity != michal)) { _fun00004_ip = 150; continue _fun00003 }
 24:
                michal = global;
                oscard = michal.clearTimeout;
                zuuluu = tangon.editInfo;
                report = zuuluu.timeout;
                zuuluu = undefined;
                report = oscard.bind(zuuluu)(report);
                report = tangon.editInfo;
                report['timeout'] = zuuluu;
                report = tangon.editInfo;
                michal = michal.Number;
                michal = michal.MAX_SAFE_INTEGER;
                report['timeoutDelay'] = michal;
                report = tangon.editInfo;
                michal = false;
                report['rateLimited'] = michal;
                michal = tangon.editInfo;
                tangon = tangon.proto;
                tangon = tangon.versions;
                report = entity == tangon;
                if(report) { _fun00004_ip = 132; continue _fun00003 }
 126:
                zuuluu = tangon.dataVersion;
 132:
                tangon = entity != zuuluu;
                entity = 0;
                if(!tangon) { _fun00004_ip = 144; continue _fun00003 }
 141:
                entity = zuuluu;
 144:
                michal['offlineEditDataVersion'] = entity;
 150:
                entity = undefined;
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: resetEditInfo_
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            entity = zuuluu.editInfo;
            michal = entity.timeout;
            entity = null;
            if(!(entity != michal)) { _fun00006_ip = 48; continue _fun00005 }
 21:
            entity = global;
            tangon = entity.clearTimeout;
            entity = zuuluu.editInfo;
            michal = entity.timeout;
            entity = undefined;
            entity = tangon.bind(entity)(michal);
 48:
            michal = _closure1_slot9;
            entity = undefined;
            michal = michal.bind(entity)();
            zuuluu['editInfo'] = michal;
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    offset = function(argFoo) { // Original name: handleUserSettingsProtoUpdate
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            michal = entity.settings;
            verify = michal.proto;
            report = michal.type;
            zuuluu = entity.partial;
            tangon = entity.resetEditInfo;
            entity = entity.local;
            entity = !entity;
            _closure1_slot13 = entity;
            entity = _closure1_slot12;
            entity = entity[report];
            if(!tangon) { _fun00008_ip = 70; continue _fun00007 }
 59:
            report = _closure1_slot16;
            tangon = undefined;
            tangon = report.bind(tangon)(entity);
 70:
            if(zuuluu) { _fun00008_ip = 160; continue _fun00007 }
 73:
            entity['proto'] = verify;
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 8;
            zuuluu = report[zuuluu];
            oscard = undefined;
            report = tangon.bind(oscard)(zuuluu);
            zuuluu = entity.proto;
            tangon = 'string';
            zuuluu = typeof zuuluu;
            tangon = tangon !== zuuluu;
            zuuluu = 'UserSettingsProto cannot be a string';
            zuuluu = report.bind(oscard)(tangon, zuuluu);
            tangon = entity.editInfo;
            zuuluu = true;
            tangon['loaded'] = zuuluu;
            tangon = entity.editInfo;
            zuuluu = false;
            tangon['loading'] = zuuluu;
            _fun00008_ip = 258; continue _fun00007;
 160:
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 9;
            zuuluu = report[zuuluu];
            tangon = undefined;
            option = oscard.bind(tangon)(zuuluu);
            golfie = option.mergeTopLevelFields;
            oscard = entity.ProtoClass;
            zuuluu = entity.proto;
            zuuluu = golfie.bind(option)(oscard, zuuluu, verify);
            entity['proto'] = zuuluu;
            zuuluu = _closure1_slot1;
            michal = 8;
            michal = report[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            entity = entity.proto;
            michal = 'string';
            entity = typeof entity;
            michal = michal !== entity;
            entity = 'UserSettingsProto cannot be a string';
            entity = zuuluu.bind(tangon)(michal, entity);
 258:
            entity = undefined;
            return entity;
        }
    };
    entity = function(argFoo) { // Original name: loadFromCache
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            michal = null;
            if(!(michal != zuuluu)) { _fun00010_ip = 60; continue _fun00009 }
 15:
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            zuuluu = 11;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            tangon = report.bind(zuuluu)(tangon);
            zuuluu = tangon.forEach;
            michal = _closure1_slot12;
            entity = function(argFoo, argBar) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = argFoo;
                    tangon = _closure2_slot0;
                    entity = global;
                    report = entity.Number;
                    entity = undefined;
                    michal = argBar;
                    michal = report.bind(entity)(michal);
                    michal = tangon[michal];
                    tangon = null;
                    if(!(tangon != michal)) { _fun00012_ip = 283; continue _fun00011 }
 41:
                    oscard = tangon == michal;
                    report = undefined;
                    if(oscard) { _fun00012_ip = 56; continue _fun00011 }
 50:
                    report = michal.proto;
 56:
                    oscard = tangon != report;
                    offset = '';
                    if(!oscard) { _fun00012_ip = 70; continue _fun00011 }
 67:
                    offset = report;
 70:
                    option = _closure1_slot0;
                    oscard = _closure1_slot2;
                    golfie = 9;
                    oscard = oscard[golfie];
                    verify = option.bind(entity)(oscard);
                    option = verify.b64ToProto;
                    oscard = zuuluu.ProtoClass;
                    oscard = option.bind(verify)(oscard, offset);
                    if(!(tangon != oscard)) { _fun00012_ip = 283; continue _fun00011 }
 118:
                    zuuluu['proto'] = oscard;
                    option = _closure1_slot1;
                    verify = _closure1_slot2;
                    oscard = 8;
                    oscard = verify[oscard];
                    verify = option.bind(entity)(oscard);
                    oscard = zuuluu.proto;
                    option = 'string';
                    oscard = typeof oscard;
                    option = option !== oscard;
                    oscard = 'UserSettingsProto cannot be a string';
                    oscard = verify.bind(entity)(option, oscard);
                    option = tangon == michal;
                    oscard = undefined;
                    if(option) { _fun00012_ip = 188; continue _fun00011 }
 182:
                    oscard = michal.protoToSave;
 188:
                    verify = tangon != oscard;
                    option = null;
                    if(!verify) { _fun00012_ip = 200; continue _fun00011 }
 197:
                    option = oscard;
 200:
                    if(!(tangon != option)) { _fun00012_ip = 283; continue _fun00011 }
 204:
                    oscard = michal.offlineEditDataVersion;
                    if(!(tangon != oscard)) { _fun00012_ip = 283; continue _fun00011 }
 214:
                    oscard = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[golfie];
                    golfie = oscard.bind(entity)(report);
                    oscard = golfie.b64ToProto;
                    report = zuuluu.ProtoClass;
                    report = oscard.bind(golfie)(report, option);
                    if(!(tangon != report)) { _fun00012_ip = 283; continue _fun00011 }
 253:
                    tangon = zuuluu.editInfo;
                    tangon['protoToSave'] = report;
                    zuuluu = zuuluu.editInfo;
                    michal = michal.offlineEditDataVersion;
                    zuuluu['offlineEditDataVersion'] = michal;
 283:
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(michal, entity);
 60:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = global;
    yankee = entity.Object;
    option = yankee.defineProperty;
    michal = {};
    foxtra = true;
    michal['value'] = foxtra;
    entity = '__esModule';
    entity = option.bind(yankee)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 5;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    yankee = michal.UserSettingsTypes;
    var _closure1_slot8 = yankee;
    option = michal.createEmptyEditInfo;
    var _closure1_slot9 = option;
    backup = {};
    michal = 6;
    romeon = oscard[michal];
    romeon = report.bind(entity)(romeon);
    romeon = romeon.PreloadedUserSettings;
    backup['ProtoClass'] = romeon;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    romeon = michal.PreloadedUserSettings;
    michal = romeon.create;
    michal = michal.bind(romeon)();
    backup['proto'] = michal;
    michal = false;
    backup['lazyLoaded'] = michal;
    romeon = option.bind(entity)();
    backup['editInfo'] = romeon;
    var _closure1_slot10 = backup;
    romeon = {};
    kiloes = 7;
    sizing = oscard[kiloes];
    sizing = report.bind(entity)(sizing);
    sizing = sizing.FrecencyUserSettings;
    romeon['ProtoClass'] = sizing;
    kiloes = oscard[kiloes];
    kiloes = report.bind(entity)(kiloes);
    sizing = kiloes.FrecencyUserSettings;
    kiloes = sizing.create;
    kiloes = kiloes.bind(sizing)();
    romeon['proto'] = kiloes;
    romeon['lazyLoaded'] = foxtra;
    option = option.bind(entity)();
    romeon['editInfo'] = option;
    var _closure1_slot11 = romeon;
    option = {};
    foxtra = yankee.PRELOADED_USER_SETTINGS;
    option[foxtra] = backup;
    yankee = yankee.FRECENCY_AND_FAVORITES_SETTINGS;
    option[yankee] = romeon;
    var _closure1_slot12 = option;
    var _closure1_slot13 = michal;
    michal = 13;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.PersistedStore;
    michal = function(argFoo) {
        tangon = function() { // Original name: UserSettingsProtoStore
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot3;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot6;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot5;
                entity = _closure1_slot14;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00014_ip = 69; continue _fun00013 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00014_ip = 105; continue _fun00013;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot6;
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
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot17;
            entity = undefined;
            michal = argFoo;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(12);
        entity[0] = report;
        report = {};
        golfie = 'getState';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'computeState';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 11;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.mapValues;
            michal = _closure1_slot12;
            entity = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    michal = argFoo;
                    entity = {};
                    golfie = _closure1_slot0;
                    tangon = _closure1_slot2;
                    oscard = 9;
                    tangon = tangon[oscard];
                    report = undefined;
                    verify = golfie.bind(report)(tangon);
                    option = verify.protoToB64;
                    golfie = michal.ProtoClass;
                    tangon = michal.proto;
                    tangon = option.bind(verify)(golfie, tangon);
                    entity['proto'] = tangon;
                    tangon = michal.editInfo;
                    tangon = tangon.offlineEditDataVersion;
                    option = null;
                    tangon = option != tangon;
                    if(!tangon) { _fun00016_ip = 96; continue _fun00015 }
 80:
                    golfie = michal.editInfo;
                    golfie = golfie.protoToSave;
                    tangon = option != golfie;
 96:
                    if(!tangon) { _fun00016_ip = 170; continue _fun00015 }
 99:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[oscard];
                    oscard = tangon.bind(report)(zuuluu);
                    report = oscard.protoToB64;
                    tangon = michal.ProtoClass;
                    zuuluu = michal.editInfo;
                    zuuluu = zuuluu.protoToSave;
                    zuuluu = report.bind(oscard)(tangon, zuuluu);
                    entity['protoToSave'] = zuuluu;
                    michal = michal.editInfo;
                    michal = michal.offlineEditDataVersion;
                    entity['offlineEditDataVersion'] = michal;
 170:
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'hasLoaded';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            michal = _closure1_slot12;
            entity = argFoo;
            entity = michal[entity];
            entity = entity.editInfo;
            entity = entity.loaded;
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'settings';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot10;
            entity = entity.proto;
            return entity;
        };
        report['get'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'frecencyWithoutFetchingLatest';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot11;
            entity = entity.proto;
            return entity;
        };
        report['get'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'wasMostRecentUpdateFromServer';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot13;
            return entity;
        };
        report['get'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'getFullState';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot12;
            return entity;
        };
        report['value'] = golfie;
        entity[7] = report;
        report = {};
        golfie = 'getGuildFolders';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                entity = _closure1_slot10;
                entity = entity.proto;
                michal = entity.guildFolders;
                entity = null;
                zuuluu = entity == michal;
                tangon = undefined;
                if(zuuluu) { _fun00018_ip = 36; continue _fun00017 }
 30:
                tangon = michal.folders;
 36:
                michal = entity == tangon;
                entity = null;
                if(michal) { _fun00018_ip = 62; continue _fun00017 }
 45:
                zuuluu = tangon.map;
                michal = function(argFoo) {
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        zuuluu = argFoo;
                        entity = zuuluu.id;
                        michal = null;
                        tangon = michal == entity;
                        report = undefined;
                        option = undefined;
                        if(tangon) { _fun00020_ip = 26; continue _fun00019 }
 21:
                        option = entity.value;
 26:
                        entity = zuuluu.color;
                        oscard = michal == entity;
                        tangon = undefined;
                        if(oscard) { _fun00020_ip = 45; continue _fun00019 }
 40:
                        tangon = entity.value;
 45:
                        entity = {};
                        oscard = zuuluu.guildIds;
                        entity['guildIds'] = oscard;
                        golfie = michal == option;
                        oscard = undefined;
                        if(golfie) { _fun00020_ip = 80; continue _fun00019 }
 67:
                        golfie = global;
                        golfie = golfie.Number;
                        oscard = golfie.bind(report)(option);
 80:
                        entity['folderId'] = oscard;
                        oscard = zuuluu.name;
                        golfie = michal == oscard;
                        zuuluu = undefined;
                        if(golfie) { _fun00020_ip = 104; continue _fun00019 }
 99:
                        zuuluu = oscard.value;
 104:
                        entity['folderName'] = zuuluu;
                        zuuluu = michal == tangon;
                        michal = undefined;
                        if(zuuluu) { _fun00020_ip = 131; continue _fun00019 }
 118:
                        zuuluu = global;
                        zuuluu = zuuluu.Number;
                        michal = zuuluu.bind(report)(tangon);
 131:
                        entity['folderColor'] = michal;
                        return entity;
                    }
                };
                entity = zuuluu.bind(tangon)(michal);
 62:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[8] = report;
        report = {};
        golfie = 'getGuildRecentsDismissedAt';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                zuuluu = argFoo;
                entity = null;
                if(!(entity != zuuluu)) { _fun00022_ip = 121; continue _fun00021 }
 9:
                michal = this;
                michal = michal.settings;
                michal = michal.guilds;
                oscard = entity == michal;
                report = undefined;
                tangon = undefined;
                if(oscard) { _fun00022_ip = 60; continue _fun00021 }
 35:
                michal = michal.guilds;
                michal = michal[zuuluu];
                zuuluu = entity == michal;
                tangon = undefined;
                if(zuuluu) { _fun00022_ip = 60; continue _fun00021 }
 54:
                tangon = michal.guildRecentsDismissedAt;
 60:
                michal = entity == tangon;
                entity = 0;
                if(michal) { _fun00022_ip = 119; continue _fun00021 }
 69:
                zuuluu = _closure1_slot0;
                oscard = _closure1_slot2;
                michal = 12;
                michal = oscard[michal];
                michal = zuuluu.bind(report)(michal);
                zuuluu = michal.Timestamp;
                michal = zuuluu.toDate;
                zuuluu = michal.bind(zuuluu)(tangon);
                michal = zuuluu.getTime;
                entity = michal.bind(zuuluu)();
 119:
                return entity;
 121:
                entity = 0;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[9] = report;
        report = {};
        golfie = 'getDismissedGuildContent';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                oscard = argFoo;
                tangon = null;
                michal = tangon == oscard;
                entity = null;
                if(michal) { _fun00024_ip = 75; continue _fun00023 }
 14:
                michal = this;
                michal = michal.settings;
                zuuluu = michal.guilds;
                golfie = tangon == zuuluu;
                michal = undefined;
                if(golfie) { _fun00024_ip = 72; continue _fun00023 }
 38:
                zuuluu = zuuluu.guilds;
                golfie = tangon == zuuluu;
                michal = undefined;
                if(golfie) { _fun00024_ip = 72; continue _fun00023 }
 53:
                zuuluu = zuuluu[oscard];
                tangon = tangon == zuuluu;
                michal = undefined;
                if(tangon) { _fun00024_ip = 72; continue _fun00023 }
 66:
                michal = zuuluu.dismissedGuildContent;
 72:
                entity = michal;
 75:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[10] = report;
        report = {};
        golfie = 'getGuildsProto';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                entity = this;
                entity = entity.settings;
                zuuluu = entity.guilds;
                entity = null;
                tangon = entity == zuuluu;
                michal = undefined;
                if(tangon) { _fun00026_ip = 32; continue _fun00025 }
 26:
                michal = zuuluu.guilds;
 32:
                zuuluu = entity != michal;
                entity = null;
                if(!zuuluu) { _fun00026_ip = 44; continue _fun00025 }
 41:
                entity = michal;
 44:
                return entity;
            }
        };
        report['value'] = oscard;
        entity[11] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'UserSettingsProtoStore';
    option['displayName'] = michal;
    michal = 'UserSettingsProtoStore-Cache';
    option['persistKey'] = michal;
    michal = 14;
    michal = oscard[michal];
    echoed = golfie.bind(entity)(michal);
    michal = {};
    yankee = function(argFoo) { // Original name: handleCacheLoaded
        entity = argFoo;
        zuuluu = entity.userSettings;
        michal = _closure1_slot17;
        entity = undefined;
        michal = michal.bind(entity)(zuuluu);
        return entity;
    };
    michal['CACHE_LOADED'] = yankee;
    michal['USER_SETTINGS_PROTO_UPDATE'] = offset;
    michal['USER_SETTINGS_PROTO_ENQUEUE_UPDATE'] = offset;
    offset = function(argFoo) { // Original name: handleUserSettingsProtoSaveStateUpdate
        entity = argFoo;
        entity = entity.settings;
        michal = entity.type;
        zuuluu = entity.changes;
        report = _closure1_slot1;
        oscard = _closure1_slot2;
        tangon = 8;
        tangon = oscard[tangon];
        golfie = undefined;
        oscard = report.bind(golfie)(tangon);
        report = true;
        tangon = 'this cannot run in the overlay';
        tangon = oscard.bind(golfie)(report, tangon);
        entity = _closure1_slot12;
        michal = entity[michal];
        entity = {};
        option = michal.editInfo;
        verify = entity;
        tangon = copyDataProperties(verify, option);
        verify = entity;
        option = zuuluu;
        zuuluu = copyDataProperties(verify, option);
        michal['editInfo'] = entity;
        entity = false;
        return entity;
    };
    michal['USER_SETTINGS_PROTO_UPDATE_EDIT_INFO'] = offset;
    offset = function(argFoo) { // Original name: handleConnectionOpen
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.userSettingsProto;
            entity = null;
            if(!(entity != zuuluu)) { _fun00028_ip = 79; continue _fun00027 }
 15:
            entity = _closure1_slot10;
            entity['proto'] = zuuluu;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 8;
            michal = tangon[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            entity = entity.proto;
            michal = 'string';
            entity = typeof entity;
            michal = michal !== entity;
            entity = 'UserSettingsProto cannot be a string';
            entity = zuuluu.bind(tangon)(michal, entity);
 79:
            tangon = _closure1_slot0;
            option = _closure1_slot2;
            entity = 9;
            zuuluu = option[entity];
            entity = undefined;
            oscard = tangon.bind(entity)(zuuluu);
            report = oscard.runMigrations;
            zuuluu = _closure1_slot10;
            tangon = zuuluu.proto;
            golfie = _closure1_slot1;
            zuuluu = 10;
            zuuluu = option[zuuluu];
            golfie = golfie.bind(entity)(zuuluu);
            zuuluu = _closure1_slot8;
            zuuluu = zuuluu.PRELOADED_USER_SETTINGS;
            zuuluu = golfie[zuuluu];
            zuuluu = report.bind(oscard)(tangon, zuuluu);
            tangon = zuuluu.proto;
            oscard = zuuluu.isDirty;
            report = zuuluu.cleanupFuncs;
            if(!oscard) { _fun00028_ip = 190; continue _fun00027 }
 177:
            golfie = _closure1_slot16;
            zuuluu = _closure1_slot10;
            zuuluu = golfie.bind(entity)(zuuluu);
 190:
            zuuluu = _closure1_slot10;
            zuuluu['proto'] = tangon;
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            tangon = 8;
            tangon = option[tangon];
            option = golfie.bind(entity)(tangon);
            tangon = zuuluu.proto;
            golfie = 'string';
            tangon = typeof tangon;
            golfie = golfie !== tangon;
            tangon = 'UserSettingsProto cannot be a string';
            tangon = option.bind(entity)(golfie, tangon);
            tangon = zuuluu.editInfo;
            tangon['triggeredMigrations'] = oscard;
            tangon = zuuluu.editInfo;
            tangon['cleanupFuncs'] = report;
            tangon = zuuluu.editInfo;
            zuuluu = true;
            tangon['loaded'] = zuuluu;
            zuuluu = global;
            report = zuuluu.Object;
            tangon = report.values;
            zuuluu = _closure1_slot12;
            report = tangon.bind(report)(zuuluu);
            tangon = report.forEach;
            zuuluu = function(argFoo) {
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    entity = argFoo;
                    michal = entity.lazyLoaded;
                    if(!michal) { _fun00030_ip = 38; continue _fun00029 }
 12:
                    zuuluu = entity.editInfo;
                    michal = false;
                    zuuluu['loaded'] = michal;
                    entity = entity.editInfo;
                    entity['loading'] = michal;
 38:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = tangon.bind(report)(zuuluu);
            michal = _closure1_slot15;
            michal = michal.bind(entity)();
            return entity;
        }
    };
    michal['CONNECTION_OPEN'] = offset;
    michal['CONNECTION_CLOSED'] = verify;
    michal['CONNECTION_RESUMED'] = verify;
    verify = function(argFoo) { // Original name: handleOverlayInitialize
        entity = argFoo;
        golfie = entity.userSettingsProto;
        michal = _closure1_slot10;
        oscard = _closure1_slot0;
        report = _closure1_slot2;
        entity = 9;
        tangon = report[entity];
        entity = undefined;
        oscard = oscard.bind(entity)(tangon);
        tangon = oscard.b64ToPreloadedUserSettingsProto;
        tangon = tangon.bind(oscard)(golfie);
        michal['proto'] = tangon;
        tangon = _closure1_slot1;
        zuuluu = 8;
        zuuluu = report[zuuluu];
        tangon = tangon.bind(entity)(zuuluu);
        michal = michal.proto;
        zuuluu = 'string';
        michal = typeof michal;
        zuuluu = zuuluu !== michal;
        michal = 'UserSettingsProto cannot be a string';
        michal = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal['OVERLAY_INITIALIZE'] = verify;
    tangon = function() { // Original name: handleLogout
        zuuluu = _closure1_slot15;
        entity = undefined;
        zuuluu = zuuluu.bind(entity)();
        zuuluu = global;
        tangon = zuuluu.Object;
        zuuluu = tangon.values;
        michal = _closure1_slot12;
        tangon = zuuluu.bind(tangon)(michal);
        zuuluu = tangon.forEach;
        michal = function(argFoo) {
            zuuluu = argFoo;
            michal = zuuluu.ProtoClass;
            entity = michal.create;
            entity = entity.bind(michal)();
            zuuluu['proto'] = entity;
            michal = _closure1_slot9;
            entity = undefined;
            michal = michal.bind(entity)();
            zuuluu['editInfo'] = michal;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['LOGOUT'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    update = tangon;
    result = michal;
    michal = new update[option](echoed, result, output);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 15;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_settings/UserSettingsProtoStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();