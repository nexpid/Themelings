// app/modules/guild_member_verification/GuildJoinRequestStore.tsx
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
            _closure1_slot25 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot25 = entity;
    entity = function(argFoo) { // Original name: getSubmittedGuildJoinRequestTotal
        michal = _closure1_slot13;
        entity = argFoo;
        entity = michal[entity];
        return entity;
    };
    var _closure1_slot26 = entity;
    entity = function(argFoo, argBar) { // Original name: setSubmittedGuildJoinRequestTotal
        report = argFoo;
        zuuluu = _closure1_slot13;
        michal = argBar;
        zuuluu[report] = michal;
        tangon = _closure1_slot12;
        zuuluu = tangon.set;
        oscard = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 9;
        michal = michal[entity];
        entity = undefined;
        michal = oscard.bind(entity)(michal);
        michal = michal.bind(entity)();
        michal = zuuluu.bind(tangon)(report, michal);
        return entity;
    };
    var _closure1_slot27 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: updateSubmittedGuildJoinRequestTotal
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            oscard = argBar;
            report = argBaz;
            if(!(oscard !== report)) { _fun00004_ip = 172; continue _fun00003 }
 16:
            entity = null;
            if(!(entity != oscard)) { _fun00004_ip = 172; continue _fun00003 }
 25:
            option = _closure1_slot0;
            michal = _closure1_slot2;
            golfie = 10;
            michal = michal[golfie];
            zuuluu = undefined;
            michal = option.bind(zuuluu)(michal);
            michal = michal.GuildJoinRequestApplicationStatuses;
            michal = michal.SUBMITTED;
            if(!(oscard === michal)) { _fun00004_ip = 92; continue _fun00003 }
 66:
            oscard = _closure1_slot27;
            michal = _closure1_slot26;
            option = michal.bind(zuuluu)(tangon);
            michal = 1;
            michal = option + michal;
            michal = oscard.bind(zuuluu)(tangon, michal);
 92:
            oscard = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[golfie];
            michal = oscard.bind(zuuluu)(michal);
            michal = michal.GuildJoinRequestApplicationStatuses;
            michal = michal.SUBMITTED;
            if(!(report === michal)) { _fun00004_ip = 172; continue _fun00003 }
 125:
            michal = _closure1_slot26;
            report = michal.bind(zuuluu)(tangon);
            michal = _closure1_slot27;
            entity = global;
            golfie = entity.Math;
            oscard = golfie.max;
            entity = 1;
            report = report - entity;
            entity = 0;
            entity = oscard.bind(golfie)(entity, report);
            entity = michal.bind(zuuluu)(tangon, entity);
 172:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    yankee = function(argFoo) { // Original name: guildJoinRequestsIndex
        michal = argFoo;
        entity = new Array(0);
        report = entity.push;
        golfie = _closure1_slot15;
        zuuluu = michal.joinRequestId;
        oscard = undefined;
        zuuluu = golfie.bind(oscard)(zuuluu);
        zuuluu = report.bind(entity)(zuuluu);
        zuuluu = entity.push;
        report = _closure1_slot16;
        tangon = michal.guildId;
        michal = michal.applicationStatus;
        michal = report.bind(oscard)(tangon, michal);
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    entity = function(argFoo) { // Original name: get
        zuuluu = _closure1_slot17;
        michal = zuuluu.get;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot29 = entity;
    entity = function(argFoo) { // Original name: upsert
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argFoo;
            zuuluu = _closure1_slot23;
            entity = report.joinRequestId;
            zuuluu[entity] = report;
            tangon = _closure1_slot17;
            zuuluu = tangon.set;
            entity = report.joinRequestId;
            entity = zuuluu.bind(tangon)(entity, report);
            tangon = _closure1_slot0;
            entity = _closure1_slot2;
            oscard = 12;
            zuuluu = entity[oscard];
            entity = undefined;
            golfie = tangon.bind(entity)(zuuluu);
            tangon = golfie.isSubmittedApplicationStatus;
            zuuluu = report.applicationStatus;
            zuuluu = tangon.bind(golfie)(zuuluu);
            if(!zuuluu) { _fun00006_ip = 124; continue _fun00005 }
 83:
            golfie = _closure1_slot19;
            tangon = golfie.delete;
            zuuluu = report.joinRequestId;
            zuuluu = tangon.bind(golfie)(zuuluu);
            golfie = _closure1_slot18;
            tangon = golfie.set;
            zuuluu = report.joinRequestId;
            zuuluu = tangon.bind(golfie)(zuuluu, report);
 124:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[oscard];
            oscard = tangon.bind(entity)(zuuluu);
            tangon = oscard.isActionedApplicationStatus;
            zuuluu = report.applicationStatus;
            zuuluu = tangon.bind(oscard)(zuuluu);
            if(!zuuluu) { _fun00006_ip = 202; continue _fun00005 }
 161:
            oscard = _closure1_slot18;
            tangon = oscard.delete;
            zuuluu = report.joinRequestId;
            zuuluu = tangon.bind(oscard)(zuuluu);
            tangon = _closure1_slot19;
            zuuluu = tangon.set;
            michal = report.joinRequestId;
            michal = zuuluu.bind(tangon)(michal, report);
 202:
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    verify = function(argFoo) { // Original name: handleGuildJoinRequestCreateOrUpdate
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            golfie = entity.guildId;
            tangon = entity.request;
            michal = _closure1_slot10;
            zuuluu = undefined;
            michal = michal.bind(zuuluu)(tangon);
            report = _closure1_slot9;
            tangon = report.getCurrentUser;
            tangon = tangon.bind(report)();
            report = null;
            if(!(report != tangon)) { _fun00008_ip = 121; continue _fun00007 }
 47:
            oscard = michal.userId;
            tangon = tangon.id;
            if(!(oscard !== tangon)) { _fun00008_ip = 121; continue _fun00007 }
 61:
            oscard = _closure1_slot29;
            tangon = michal.joinRequestId;
            tangon = oscard.bind(zuuluu)(tangon);
            report = report == tangon;
            oscard = undefined;
            if(report) { _fun00008_ip = 91; continue _fun00007 }
 85:
            oscard = tangon.applicationStatus;
 91:
            report = _closure1_slot28;
            tangon = michal.applicationStatus;
            tangon = report.bind(zuuluu)(golfie, tangon, oscard);
            entity = _closure1_slot30;
            entity = entity.bind(zuuluu)(michal);
            entity = true;
            return entity;
 121:
            entity = false;
            return entity;
        }
    };
    michal = global;
    romeon = michal.Object;
    offset = romeon.defineProperty;
    option = {};
    entity = true;
    option['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(romeon)(zuuluu, entity, option);
    entity = 0;
    option = oscard[entity];
    entity = undefined;
    option = golfie.bind(entity)(option);
    var _closure1_slot3 = option;
    option = 1;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot4 = option;
    option = 2;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot5 = option;
    option = 3;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot6 = option;
    option = 4;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot7 = option;
    option = 5;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot8 = option;
    option = 6;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot9 = option;
    option = 7;
    option = oscard[option];
    option = report.bind(entity)(option);
    option = option.joinRequestFromServer;
    var _closure1_slot10 = option;
    option = 8;
    option = oscard[option];
    option = report.bind(entity)(option);
    option = option.GuildFeatures;
    var _closure1_slot11 = option;
    michal = michal.Map;
    option = michal.prototype;
    option = Object.create(option, {constructor: {value: michal}});
    sizing = option;
    michal = new sizing[michal](kiloes);
    michal = michal instanceof Object ? michal : option;
    var _closure1_slot12 = michal;
    michal = {};
    var _closure1_slot13 = michal;
    michal = false;
    var _closure1_slot14 = michal;
    michal = function(argFoo) { // Original name: StaticGuildJoinRequestIndexes_GUILD_JOIN_REQUESTS_BY_ID
        entity = global;
        entity = entity.HermesInternal;
        zuuluu = entity.concat;
        michal = 'guild-join-request=';
        entity = argFoo;
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    var _closure1_slot15 = michal;
    michal = function(argFoo, argBar) { // Original name: StaticGuildJoinRequestIndexes_GUILD_JOIN_REQUESTS_BY_STATUS
        entity = global;
        entity = entity.HermesInternal;
        report = entity.concat;
        tangon = 'guild-';
        zuuluu = argFoo;
        michal = '-';
        entity = argBar;
        entity = report.bind(tangon)(zuuluu, michal, entity);
        return entity;
    };
    var _closure1_slot16 = michal;
    michal = 11;
    option = oscard[michal];
    option = report.bind(entity)(option);
    romeon = option.SecondaryIndexMap;
    option = romeon.prototype;
    offset = Object.create(option, {constructor: {value: romeon}});
    backup = function(argFoo) {
        entity = argFoo;
        zuuluu = entity.joinRequestId;
        entity = global;
        entity = entity.HermesInternal;
        michal = entity.concat;
        entity = '';
        entity = michal.bind(entity)(zuuluu);
        return entity;
    };
    sizing = offset;
    kiloes = yankee;
    option = new sizing[romeon](kiloes, backup, foxtra);
    option = option instanceof Object ? option : offset;
    var _closure1_slot17 = option;
    option = oscard[michal];
    option = report.bind(entity)(option);
    romeon = option.SecondaryIndexMap;
    option = romeon.prototype;
    offset = Object.create(option, {constructor: {value: romeon}});
    backup = function(argFoo) {
        entity = argFoo;
        zuuluu = entity.joinRequestId;
        entity = global;
        entity = entity.HermesInternal;
        michal = entity.concat;
        entity = '';
        entity = michal.bind(entity)(zuuluu);
        return entity;
    };
    sizing = offset;
    kiloes = yankee;
    option = new sizing[romeon](kiloes, backup, foxtra);
    option = option instanceof Object ? option : offset;
    var _closure1_slot18 = option;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    offset = michal.SecondaryIndexMap;
    michal = offset.prototype;
    option = Object.create(michal, {constructor: {value: offset}});
    backup = function(argFoo) {
        entity = argFoo;
        zuuluu = entity.actionedAt;
        entity = global;
        entity = entity.HermesInternal;
        michal = entity.concat;
        entity = '';
        entity = michal.bind(entity)(zuuluu);
        return entity;
    };
    sizing = option;
    kiloes = yankee;
    michal = new sizing[offset](kiloes, backup, foxtra);
    michal = michal instanceof Object ? michal : option;
    var _closure1_slot19 = michal;
    michal = {};
    var _closure1_slot20 = michal;
    michal = {};
    var _closure1_slot21 = michal;
    michal = {};
    var _closure1_slot22 = michal;
    michal = {};
    var _closure1_slot23 = michal;
    michal = 13;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    michal = michal.Seconds;
    option = michal.MINUTE;
    michal = 10;
    michal = michal * option;
    var _closure1_slot24 = michal;
    michal = 14;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: GuildJoinRequestStoreV2
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
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
                entity = _closure1_slot25;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00010_ip = 69; continue _fun00009 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00010_ip = 105; continue _fun00009;
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
        entity = 'getRequest';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            michal = _closure1_slot23;
            entity = argFoo;
            entity = michal[entity];
            return entity;
        };
        report['value'] = entity;
        entity = new Array(8);
        entity[0] = report;
        report = {};
        golfie = 'getRequests';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                report = argBar;
                zuuluu = _closure1_slot16;
                oscard = undefined;
                entity = argFoo;
                tangon = zuuluu.bind(oscard)(entity, report);
                zuuluu = _closure1_slot0;
                entity = _closure1_slot2;
                golfie = 12;
                entity = entity[golfie];
                zuuluu = zuuluu.bind(oscard)(entity);
                entity = zuuluu.isActionedApplicationStatus;
                entity = entity.bind(zuuluu)(report);
                if(entity) { _fun00012_ip = 118; continue _fun00011 }
 55:
                zuuluu = _closure1_slot0;
                entity = _closure1_slot2;
                entity = entity[golfie];
                zuuluu = zuuluu.bind(oscard)(entity);
                entity = zuuluu.isSubmittedApplicationStatus;
                entity = entity.bind(zuuluu)(report);
                if(entity) { _fun00012_ip = 102; continue _fun00011 }
 86:
                zuuluu = _closure1_slot17;
                entity = zuuluu.values;
                entity = entity.bind(zuuluu)(tangon);
                _fun00012_ip = 116; continue _fun00011;
 102:
                report = _closure1_slot18;
                zuuluu = report.values;
                entity = zuuluu.bind(report)(tangon);
 116:
                _fun00012_ip = 132; continue _fun00011;
 118:
                zuuluu = _closure1_slot19;
                michal = zuuluu.values;
                entity = michal.bind(zuuluu)(tangon);
 132:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getSubmittedGuildJoinRequestTotal';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            michal = _closure1_slot13;
            entity = argFoo;
            entity = michal[entity];
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'isFetching';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot14;
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'hasFetched';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                tangon = argFoo;
                zuuluu = _closure1_slot12;
                entity = zuuluu.has;
                entity = entity.bind(zuuluu)(tangon);
                if(entity) { _fun00014_ip = 27; continue _fun00013 }
 23:
                entity = false;
                return entity;
 27:
                zuuluu = _closure1_slot12;
                entity = zuuluu.get;
                oscard = entity.bind(zuuluu)(tangon);
                entity = null;
                entity = entity != oscard;
                if(!entity) { _fun00014_ip = 100; continue _fun00013 }
 50:
                report = _closure1_slot1;
                tangon = _closure1_slot2;
                zuuluu = 9;
                zuuluu = tangon[zuuluu];
                tangon = undefined;
                zuuluu = report.bind(tangon)(zuuluu);
                report = zuuluu.bind(tangon)();
                tangon = report.diff;
                zuuluu = 'seconds';
                zuuluu = tangon.bind(report)(oscard, zuuluu);
                michal = _closure1_slot24;
                entity = zuuluu < michal;
 100:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'getSelectedApplicationTab';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                tangon = argFoo;
                report = this;
                zuuluu = _closure1_slot8;
                entity = zuuluu.getGuild;
                verify = entity.bind(zuuluu)(tangon);
                zuuluu = report.getRequests;
                oscard = _closure1_slot0;
                entity = _closure1_slot2;
                option = 10;
                entity = entity[option];
                golfie = undefined;
                entity = oscard.bind(golfie)(entity);
                entity = entity.GuildJoinRequestApplicationStatuses;
                entity = entity.SUBMITTED;
                entity = zuuluu.bind(report)(tangon, entity);
                zuuluu = entity.length;
                entity = 0;
                report = zuuluu > entity;
                zuuluu = null;
                if(!(zuuluu != verify)) { _fun00016_ip = 121; continue _fun00015 }
 88:
                oscard = verify.hasFeature;
                entity = _closure1_slot11;
                entity = entity.CLAN;
                entity = oscard.bind(verify)(entity);
                if(!entity) { _fun00016_ip = 121; continue _fun00015 }
 112:
                entity = 'REVIEW_APPLICATION';
                if(!report) { _fun00016_ip = 150; continue _fun00015 }
 121:
                oscard = _closure1_slot0;
                report = _closure1_slot2;
                report = report[option];
                report = oscard.bind(golfie)(report);
                report = report.GuildJoinRequestApplicationStatuses;
                entity = report.SUBMITTED;
 150:
                michal = _closure1_slot20;
                michal = michal[tangon];
                if(!(zuuluu != michal)) { _fun00016_ip = 165; continue _fun00015 }
 162:
                entity = michal;
 165:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'getSelectedSortOrder';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                zuuluu = _closure1_slot21;
                entity = argFoo;
                entity = zuuluu[entity];
                zuuluu = null;
                if(!(zuuluu == entity)) { _fun00018_ip = 54; continue _fun00017 }
 20:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 10;
                zuuluu = zuuluu[michal];
                michal = undefined;
                michal = tangon.bind(michal)(zuuluu);
                michal = michal.GuildJoinRequestSortOrders;
                entity = michal.TIMESTAMP_DESC;
 54:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'getSelectedGuildJoinRequest';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                michal = _closure1_slot22;
                entity = argFoo;
                michal = michal[entity];
                entity = null;
                tangon = entity != michal;
                if(!tangon) { _fun00020_ip = 40; continue _fun00019 }
 23:
                tangon = _closure1_slot29;
                zuuluu = michal.joinRequestId;
                michal = undefined;
                entity = tangon.bind(michal)(zuuluu);
 40:
                return entity;
            }
        };
        report['value'] = oscard;
        entity[7] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'GuildJoinRequestStoreV2';
    option['displayName'] = michal;
    michal = 15;
    michal = oscard[michal];
    kiloes = golfie.bind(entity)(michal);
    michal = {};
    offset = function(argFoo) { // Original name: handleFetchByIdSuccess
        entity = argFoo;
        zuuluu = entity.joinRequest;
        michal = _closure1_slot30;
        entity = undefined;
        michal = michal.bind(entity)(zuuluu);
        return entity;
    };
    michal['GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS'] = offset;
    offset = function(argFoo) { // Original name: handleFetchSuccess
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            entity = argFoo;
            golfie = entity.status;
            tangon = entity.requests;
            report = entity.total;
            zuuluu = entity.guildId;
            entity = false;
            _closure1_slot14 = entity;
            option = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 10;
            oscard = oscard[entity];
            entity = undefined;
            oscard = option.bind(entity)(oscard);
            oscard = oscard.GuildJoinRequestApplicationStatuses;
            oscard = oscard.SUBMITTED;
            if(!(golfie === oscard)) { _fun00022_ip = 82; continue _fun00021 }
 72:
            michal = _closure1_slot27;
            michal = michal.bind(entity)(zuuluu, report);
 82:
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                zuuluu = _closure1_slot30;
                entity = undefined;
                michal = argFoo;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    michal['GUILD_JOIN_REQUESTS_FETCH_SUCCESS'] = offset;
    offset = function() { // Original name: handleFetchStart
        entity = true;
        _closure1_slot14 = entity;
        entity = undefined;
        return entity;
    };
    michal['GUILD_JOIN_REQUESTS_FETCH_START'] = offset;
    offset = function() { // Original name: handleFetchFailure
        entity = false;
        _closure1_slot14 = entity;
        entity = undefined;
        return entity;
    };
    michal['GUILD_JOIN_REQUESTS_FETCH_FAILURE'] = offset;
    offset = function(argFoo) { // Original name: handleGuildJoinRequestsBulkAction
        entity = argFoo;
        tangon = entity.guildId;
        entity = entity.action;
        var _closure2_slot0 = entity;
        golfie = _closure1_slot17;
        oscard = golfie.values;
        option = _closure1_slot16;
        verify = _closure1_slot0;
        report = _closure1_slot2;
        entity = 10;
        report = report[entity];
        entity = undefined;
        report = verify.bind(entity)(report);
        report = report.GuildJoinRequestApplicationStatuses;
        report = report.SUBMITTED;
        report = option.bind(entity)(tangon, report);
        oscard = oscard.bind(golfie)(report);
        report = oscard.forEach;
        zuuluu = function(argFoo) {
            zuuluu = _closure1_slot30;
            michal = {};
            report = argFoo;
            oscard = michal;
            entity = copyDataProperties(oscard, report);
            tangon = _closure2_slot0;
            entity = 'applicationStatus';
            michal[entity] = tangon;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        zuuluu = report.bind(oscard)(zuuluu);
        zuuluu = _closure1_slot27;
        michal = 0;
        michal = zuuluu.bind(entity)(tangon, michal);
        return entity;
    };
    michal['GUILD_JOIN_REQUESTS_BULK_ACTION'] = offset;
    michal['GUILD_JOIN_REQUEST_CREATE'] = verify;
    michal['GUILD_JOIN_REQUEST_UPDATE'] = verify;
    verify = function(argFoo) { // Original name: handleGuildJoinRequestDelete
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argFoo;
            tangon = entity.id;
            golfie = entity.guildId;
            zuuluu = _closure1_slot29;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(tangon);
            report = null;
            if(!(report != zuuluu)) { _fun00024_ip = 104; continue _fun00023 }
 33:
            oscard = _closure1_slot28;
            report = zuuluu.applicationStatus;
            zuuluu = 'DELETED';
            zuuluu = oscard.bind(entity)(golfie, zuuluu, report);
            zuuluu = _closure1_slot23;
            zuuluu = delete zuuluu[tangon];
            report = _closure1_slot17;
            zuuluu = report.delete;
            zuuluu = zuuluu.bind(report)(tangon);
            report = _closure1_slot18;
            zuuluu = report.delete;
            zuuluu = zuuluu.bind(report)(tangon);
            zuuluu = _closure1_slot19;
            michal = zuuluu.delete;
            michal = michal.bind(zuuluu)(tangon);
 104:
            return entity;
        }
    };
    michal['GUILD_JOIN_REQUEST_DELETE'] = verify;
    verify = function(argFoo) { // Original name: handleSetApplicationTab
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.guildId;
            michal = entity.applicationTab;
            tangon = _closure1_slot20;
            tangon = tangon[zuuluu];
            if(!(michal !== tangon)) { _fun00026_ip = 37; continue _fun00025 }
 29:
            entity = _closure1_slot20;
            entity[zuuluu] = michal;
 37:
            entity = undefined;
            return entity;
        }
    };
    michal['GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB'] = verify;
    verify = function(argFoo) { // Original name: handleSetSortOrder
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.guildId;
            tangon = entity.sortOrder;
            michal = _closure1_slot21;
            michal = michal[zuuluu];
            if(!(tangon !== michal)) { _fun00028_ip = 193; continue _fun00027 }
 32:
            michal = _closure1_slot21;
            michal[zuuluu] = tangon;
            michal = _closure1_slot20;
            tangon = michal[zuuluu];
            michal = null;
            if(!(michal == tangon)) { _fun00028_ip = 88; continue _fun00027 }
 54:
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 10;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = report.bind(michal)(zuuluu);
            michal = michal.GuildJoinRequestApplicationStatuses;
            tangon = michal.SUBMITTED;
 88:
            michal = 'REVIEW_APPLICATION';
            if(!(michal !== tangon)) { _fun00028_ip = 193; continue _fun00027 }
 98:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            oscard = 12;
            michal = michal[oscard];
            report = undefined;
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.isActionedApplicationStatus;
            michal = michal.bind(zuuluu)(tangon);
            if(!michal) { _fun00028_ip = 148; continue _fun00027 }
 134:
            zuuluu = _closure1_slot19;
            michal = zuuluu.clear;
            michal = michal.bind(zuuluu)();
 148:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.isSubmittedApplicationStatus;
            michal = michal.bind(zuuluu)(tangon);
            if(!michal) { _fun00028_ip = 193; continue _fun00027 }
 179:
            michal = _closure1_slot18;
            entity = michal.clear;
            entity = entity.bind(michal)();
 193:
            entity = undefined;
            return entity;
        }
    };
    michal['GUILD_JOIN_REQUESTS_SET_SORT_ORDER'] = verify;
    tangon = function(argFoo) { // Original name: handleGuildJoinRequestSelect
        entity = argFoo;
        zuuluu = entity.guildId;
        michal = entity.request;
        entity = _closure1_slot22;
        entity[zuuluu] = michal;
        entity = undefined;
        return entity;
    };
    michal['GUILD_JOIN_REQUESTS_SET_SELECTED'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    sizing = tangon;
    backup = michal;
    michal = new sizing[option](kiloes, backup, foxtra);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 16;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_member_verification/GuildJoinRequestStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();