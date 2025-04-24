// app/modules/guild_profile/GuildProfileStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
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
            _closure1_slot11 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    yankee = function(argFoo) { // Original name: handleUpdateStart
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            tangon = entity.guildId;
            michal = _closure1_slot9;
            entity = michal.get;
            oscard = entity.bind(michal)(tangon);
            entity = null;
            if(!(entity != oscard)) { _fun00004_ip = 71; continue _fun00003 }
 31:
            zuuluu = _closure1_slot9;
            michal = zuuluu.set;
            entity = {};
            verify = entity;
            option = oscard;
            oscard = copyDataProperties(verify, option);
            golfie = true;
            oscard = 'isUpdating';
            entity[oscard] = golfie;
            entity = michal.bind(zuuluu)(tangon, entity);
            _fun00004_ip = 110; continue _fun00003;
 71:
            zuuluu = _closure1_slot9;
            michal = zuuluu.set;
            entity = {};
            option = _closure1_slot10;
            verify = entity;
            report = copyDataProperties(verify, option);
            oscard = true;
            report = 'isUpdating';
            entity[report] = oscard;
            entity = michal.bind(zuuluu)(tangon, entity);
 110:
            entity = undefined;
            return entity;
        }
    };
    report = function(argFoo) { // Original name: handleUpdateFailure
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            tangon = entity.guildId;
            oscard = entity.error;
            michal = _closure1_slot9;
            entity = michal.get;
            golfie = entity.bind(michal)(tangon);
            entity = null;
            if(!(entity != golfie)) { _fun00006_ip = 85; continue _fun00005 }
 36:
            zuuluu = _closure1_slot9;
            michal = zuuluu.set;
            entity = {};
            offset = entity;
            verify = golfie;
            golfie = copyDataProperties(offset, verify);
            golfie = 'error';
            entity[golfie] = oscard;
            option = false;
            golfie = 'isUpdating';
            entity[golfie] = option;
            entity = michal.bind(zuuluu)(tangon, entity);
            _fun00006_ip = 122; continue _fun00005;
 85:
            zuuluu = _closure1_slot9;
            michal = zuuluu.set;
            entity = {};
            verify = _closure1_slot10;
            offset = entity;
            report = copyDataProperties(offset, verify);
            report = 'error';
            entity[report] = oscard;
            entity = michal.bind(zuuluu)(tangon, entity);
 122:
            entity = undefined;
            return entity;
        }
    };
    romeon = function(argFoo) { // Original name: handleInviteResolveOrCreate
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            entity = entity.invite;
            entity = entity.profile;
            michal = null;
            if(!(michal != entity)) { _fun00008_ip = 258; continue _fun00007 }
 24:
            oscard = _closure1_slot9;
            tangon = oscard.get;
            zuuluu = entity.id;
            option = tangon.bind(oscard)(zuuluu);
            oscard = _closure1_slot0;
            tangon = _closure1_slot1;
            zuuluu = 6;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            tangon = oscard.bind(zuuluu)(tangon);
            zuuluu = tangon.buildGuildProfileFromServer;
            golfie = zuuluu.bind(tangon)(entity);
            if(!(michal != option)) { _fun00008_ip = 171; continue _fun00007 }
 83:
            oscard = _closure1_slot9;
            tangon = oscard.set;
            zuuluu = entity.id;
            michal = {};
            yankee = michal;
            offset = option;
            option = copyDataProperties(yankee, offset);
            option = 'profile';
            michal[option] = golfie;
            option = global;
            verify = option.Date;
            option = verify.now;
            verify = option.bind(verify)();
            option = 'lastSyncTimestamp';
            michal[option] = verify;
            option = _closure1_slot8;
            verify = option.FETCHED;
            option = 'fetchStatus';
            michal[option] = verify;
            michal = tangon.bind(oscard)(zuuluu, michal);
            _fun00008_ip = 258; continue _fun00007;
 171:
            tangon = _closure1_slot9;
            zuuluu = tangon.set;
            michal = entity.id;
            entity = {};
            offset = _closure1_slot10;
            yankee = entity;
            oscard = copyDataProperties(yankee, offset);
            oscard = 'profile';
            entity[oscard] = golfie;
            oscard = global;
            golfie = oscard.Date;
            oscard = golfie.now;
            golfie = oscard.bind(golfie)();
            oscard = 'lastSyncTimestamp';
            entity[oscard] = golfie;
            report = _closure1_slot8;
            oscard = report.FETCHED;
            report = 'fetchStatus';
            entity[report] = oscard;
            entity = zuuluu.bind(tangon)(michal, entity);
 258:
            entity = undefined;
            return entity;
        }
    };
    tangon = global;
    foxtra = tangon.Object;
    verify = foxtra.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(foxtra)(zuuluu, entity, michal);
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
    michal = oscard.bind(entity)(michal);
    michal = michal.ChannelTypes;
    var _closure1_slot7 = michal;
    michal = {};
    verify = 'NOT_FETCHED';
    michal['NOT_FETCHED'] = verify;
    verify = 'FETCHING';
    michal['FETCHING'] = verify;
    verify = 'FETCHED';
    michal['FETCHED'] = verify;
    var _closure1_slot8 = michal;
    tangon = tangon.Map;
    verify = tangon.prototype;
    verify = Object.create(verify, {constructor: {value: tangon}});
    output = verify;
    tangon = new output[tangon](sizing);
    tangon = tangon instanceof Object ? tangon : verify;
    var _closure1_slot9 = tangon;
    tangon = {'profile': null, 'lastSyncTimestamp': null, 'fetchStatus': null, 'isUpdating': false, 'error': null};
    verify = michal.NOT_FETCHED;
    tangon['fetchStatus'] = verify;
    var _closure1_slot10 = tangon;
    tangon = 7;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    verify = tangon.Store;
    tangon = function(argFoo) {
        tangon = function() { // Original name: GuildProfileStore
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot2;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot5;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot4;
                entity = _closure1_slot11;
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
                oscard = _closure1_slot5;
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
        report = _closure1_slot6;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot3;
        report = {};
        entity = 'getProfile';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                report = argFoo;
                michal = null;
                zuuluu = michal == report;
                entity = null;
                if(zuuluu) { _fun00012_ip = 61; continue _fun00011 }
 14:
                tangon = _closure1_slot9;
                zuuluu = tangon.get;
                tangon = zuuluu.bind(tangon)(report);
                report = michal == tangon;
                zuuluu = undefined;
                if(report) { _fun00012_ip = 46; continue _fun00011 }
 40:
                zuuluu = tangon.profile;
 46:
                tangon = michal != zuuluu;
                michal = null;
                if(!tangon) { _fun00012_ip = 58; continue _fun00011 }
 55:
                michal = zuuluu;
 58:
                entity = michal;
 61:
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(5);
        entity[0] = report;
        report = {};
        golfie = 'getFetchStatus';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                report = argFoo;
                zuuluu = null;
                if(!(zuuluu != report)) { _fun00014_ip = 57; continue _fun00013 }
 9:
                tangon = _closure1_slot9;
                entity = tangon.get;
                tangon = entity.bind(tangon)(report);
                report = zuuluu == tangon;
                entity = undefined;
                if(report) { _fun00014_ip = 41; continue _fun00013 }
 35:
                entity = tangon.fetchStatus;
 41:
                if(!(zuuluu == entity)) { _fun00014_ip = 55; continue _fun00013 }
 45:
                michal = _closure1_slot8;
                entity = michal.NOT_FETCHED;
 55:
                _fun00014_ip = 70; continue _fun00013;
 57:
                michal = _closure1_slot8;
                entity = michal.NOT_FETCHED;
 70:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getLastSyncTimestamp';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                report = argFoo;
                michal = null;
                zuuluu = michal == report;
                entity = null;
                if(zuuluu) { _fun00016_ip = 61; continue _fun00015 }
 14:
                tangon = _closure1_slot9;
                zuuluu = tangon.get;
                tangon = zuuluu.bind(tangon)(report);
                report = michal == tangon;
                zuuluu = undefined;
                if(report) { _fun00016_ip = 46; continue _fun00015 }
 40:
                zuuluu = tangon.lastSyncTimestamp;
 46:
                tangon = michal != zuuluu;
                michal = null;
                if(!tangon) { _fun00016_ip = 58; continue _fun00015 }
 55:
                michal = zuuluu;
 58:
                entity = michal;
 61:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getIsUpdating';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                report = argFoo;
                michal = null;
                entity = michal != report;
                if(!entity) { _fun00018_ip = 57; continue _fun00017 }
 12:
                tangon = _closure1_slot9;
                zuuluu = tangon.get;
                tangon = zuuluu.bind(tangon)(report);
                report = michal == tangon;
                zuuluu = undefined;
                if(report) { _fun00018_ip = 44; continue _fun00017 }
 38:
                zuuluu = tangon.isUpdating;
 44:
                michal = michal != zuuluu;
                if(!michal) { _fun00018_ip = 54; continue _fun00017 }
 51:
                michal = zuuluu;
 54:
                entity = michal;
 57:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getErrorCode';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                report = argFoo;
                michal = null;
                zuuluu = michal == report;
                entity = null;
                if(zuuluu) { _fun00020_ip = 74; continue _fun00019 }
 14:
                tangon = _closure1_slot9;
                zuuluu = tangon.get;
                tangon = zuuluu.bind(tangon)(report);
                report = michal == tangon;
                zuuluu = undefined;
                if(report) { _fun00020_ip = 59; continue _fun00019 }
 40:
                tangon = tangon.error;
                report = michal == tangon;
                zuuluu = undefined;
                if(report) { _fun00020_ip = 59; continue _fun00019 }
 54:
                zuuluu = tangon.code;
 59:
                tangon = michal != zuuluu;
                michal = null;
                if(!tangon) { _fun00020_ip = 71; continue _fun00019 }
 68:
                michal = zuuluu;
 71:
                entity = michal;
 74:
                return entity;
            }
        };
        report['value'] = oscard;
        entity[4] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    verify = tangon.bind(entity)(verify);
    tangon = 'GuildProfileStore';
    verify['displayName'] = tangon;
    tangon = 8;
    tangon = golfie[tangon];
    sizing = option.bind(entity)(tangon);
    tangon = {};
    foxtra = function(argFoo) { // Original name: handleFetchStart
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            entity = argFoo;
            tangon = entity.guildId;
            michal = _closure1_slot9;
            entity = michal.get;
            oscard = entity.bind(michal)(tangon);
            entity = null;
            if(!(entity != oscard)) { _fun00022_ip = 79; continue _fun00021 }
 31:
            zuuluu = _closure1_slot9;
            michal = zuuluu.set;
            entity = {};
            verify = entity;
            option = oscard;
            oscard = copyDataProperties(verify, option);
            oscard = _closure1_slot8;
            golfie = oscard.FETCHING;
            oscard = 'fetchStatus';
            entity[oscard] = golfie;
            entity = michal.bind(zuuluu)(tangon, entity);
            _fun00022_ip = 126; continue _fun00021;
 79:
            zuuluu = _closure1_slot9;
            michal = zuuluu.set;
            entity = {};
            option = _closure1_slot10;
            verify = entity;
            oscard = copyDataProperties(verify, option);
            report = _closure1_slot8;
            oscard = report.FETCHING;
            report = 'fetchStatus';
            entity[report] = oscard;
            entity = michal.bind(zuuluu)(tangon, entity);
 126:
            entity = undefined;
            return entity;
        }
    };
    tangon['GUILD_PROFILE_FETCH'] = foxtra;
    foxtra = function(argFoo) { // Original name: handleFetchSuccess
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argFoo;
            tangon = entity.guildId;
            golfie = entity.profile;
            michal = _closure1_slot9;
            entity = michal.get;
            oscard = entity.bind(michal)(tangon);
            entity = null;
            if(!(entity != oscard)) { _fun00024_ip = 120; continue _fun00023 }
 37:
            zuuluu = _closure1_slot9;
            michal = zuuluu.set;
            entity = {};
            offset = entity;
            verify = oscard;
            oscard = copyDataProperties(offset, verify);
            oscard = 'profile';
            entity[oscard] = golfie;
            oscard = global;
            option = oscard.Date;
            oscard = option.now;
            option = oscard.bind(option)();
            oscard = 'lastSyncTimestamp';
            entity[oscard] = option;
            oscard = _closure1_slot8;
            option = oscard.FETCHED;
            oscard = 'fetchStatus';
            entity[oscard] = option;
            entity = michal.bind(zuuluu)(tangon, entity);
            _fun00024_ip = 202; continue _fun00023;
 120:
            zuuluu = _closure1_slot9;
            michal = zuuluu.set;
            entity = {};
            verify = _closure1_slot10;
            offset = entity;
            oscard = copyDataProperties(offset, verify);
            oscard = 'profile';
            entity[oscard] = golfie;
            oscard = global;
            golfie = oscard.Date;
            oscard = golfie.now;
            golfie = oscard.bind(golfie)();
            oscard = 'lastSyncTimestamp';
            entity[oscard] = golfie;
            report = _closure1_slot8;
            oscard = report.FETCHED;
            report = 'fetchStatus';
            entity[report] = oscard;
            entity = michal.bind(zuuluu)(tangon, entity);
 202:
            entity = undefined;
            return entity;
        }
    };
    tangon['GUILD_PROFILE_FETCH_SUCCESS'] = foxtra;
    foxtra = function(argFoo) { // Original name: handleFetchFailure
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            entity = argFoo;
            tangon = entity.guildId;
            golfie = entity.error;
            michal = _closure1_slot9;
            entity = michal.get;
            oscard = entity.bind(michal)(tangon);
            entity = null;
            if(!(entity != oscard)) { _fun00026_ip = 93; continue _fun00025 }
 36:
            zuuluu = _closure1_slot9;
            michal = zuuluu.set;
            entity = {};
            offset = entity;
            verify = oscard;
            oscard = copyDataProperties(offset, verify);
            oscard = 'error';
            entity[oscard] = golfie;
            oscard = _closure1_slot8;
            option = oscard.FETCHED;
            oscard = 'fetchStatus';
            entity[oscard] = option;
            entity = michal.bind(zuuluu)(tangon, entity);
            _fun00026_ip = 149; continue _fun00025;
 93:
            zuuluu = _closure1_slot9;
            michal = zuuluu.set;
            entity = {};
            verify = _closure1_slot10;
            offset = entity;
            oscard = copyDataProperties(offset, verify);
            oscard = 'error';
            entity[oscard] = golfie;
            report = _closure1_slot8;
            oscard = report.FETCHED;
            report = 'fetchStatus';
            entity[report] = oscard;
            entity = michal.bind(zuuluu)(tangon, entity);
 149:
            entity = undefined;
            return entity;
        }
    };
    tangon['GUILD_PROFILE_FETCH_FAILURE'] = foxtra;
    tangon['GUILD_PROFILE_UPDATE'] = yankee;
    foxtra = function(argFoo) { // Original name: handleUpdateSuccess
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            entity = argFoo;
            tangon = entity.guildId;
            oscard = entity.profile;
            michal = _closure1_slot9;
            entity = michal.get;
            golfie = entity.bind(michal)(tangon);
            entity = null;
            if(!(entity != golfie)) { _fun00028_ip = 86; continue _fun00027 }
 37:
            zuuluu = _closure1_slot9;
            michal = zuuluu.set;
            entity = {};
            offset = entity;
            verify = golfie;
            golfie = copyDataProperties(offset, verify);
            golfie = 'profile';
            entity[golfie] = oscard;
            option = false;
            golfie = 'isUpdating';
            entity[golfie] = option;
            entity = michal.bind(zuuluu)(tangon, entity);
            _fun00028_ip = 123; continue _fun00027;
 86:
            zuuluu = _closure1_slot9;
            michal = zuuluu.set;
            entity = {};
            verify = _closure1_slot10;
            offset = entity;
            report = copyDataProperties(offset, verify);
            report = 'profile';
            entity[report] = oscard;
            entity = michal.bind(zuuluu)(tangon, entity);
 123:
            entity = undefined;
            return entity;
        }
    };
    tangon['GUILD_PROFILE_UPDATE_SUCCESS'] = foxtra;
    tangon['GUILD_PROFILE_UPDATE_FAILURE'] = report;
    foxtra = function(argFoo) { // Original name: handleMemberVerificationFormFetch
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.form;
            report = entity.guildId;
            michal = null;
            tangon = michal == zuuluu;
            entity = undefined;
            option = undefined;
            if(tangon) { _fun00030_ip = 33; continue _fun00029 }
 27:
            option = zuuluu.profile;
 33:
            if(!(michal != option)) { _fun00030_ip = 226; continue _fun00029 }
 40:
            tangon = _closure1_slot9;
            zuuluu = tangon.get;
            golfie = zuuluu.bind(tangon)(report);
            if(!(michal != golfie)) { _fun00030_ip = 144; continue _fun00029 }
 61:
            tangon = _closure1_slot9;
            zuuluu = tangon.set;
            michal = {};
            yankee = michal;
            offset = golfie;
            golfie = copyDataProperties(yankee, offset);
            golfie = 'profile';
            michal[golfie] = option;
            golfie = global;
            verify = golfie.Date;
            golfie = verify.now;
            verify = golfie.bind(verify)();
            golfie = 'lastSyncTimestamp';
            michal[golfie] = verify;
            golfie = _closure1_slot8;
            verify = golfie.FETCHED;
            golfie = 'fetchStatus';
            michal[golfie] = verify;
            michal = zuuluu.bind(tangon)(report, michal);
            _fun00030_ip = 226; continue _fun00029;
 144:
            tangon = _closure1_slot9;
            zuuluu = tangon.set;
            michal = {};
            offset = _closure1_slot10;
            yankee = michal;
            golfie = copyDataProperties(yankee, offset);
            golfie = 'profile';
            michal[golfie] = option;
            golfie = global;
            option = golfie.Date;
            golfie = option.now;
            option = golfie.bind(option)();
            golfie = 'lastSyncTimestamp';
            michal[golfie] = option;
            oscard = _closure1_slot8;
            golfie = oscard.FETCHED;
            oscard = 'fetchStatus';
            michal[oscard] = golfie;
            michal = zuuluu.bind(tangon)(report, michal);
 226:
            return entity;
        }
    };
    tangon['MEMBER_VERIFICATION_FORM_UPDATE'] = foxtra;
    tangon['INVITE_RESOLVE_SUCCESS'] = romeon;
    tangon['INSTANT_INVITE_CREATE_SUCCESS'] = romeon;
    romeon = function(argFoo) { // Original name: handleCreateChannel
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            entity = argFoo;
            entity = entity.channel;
            tangon = entity.type;
            zuuluu = _closure1_slot7;
            zuuluu = zuuluu.GUILD_ANNOUNCEMENT;
            zuuluu = tangon === zuuluu;
            if(!zuuluu) { _fun00032_ip = 44; continue _fun00031 }
 33:
            report = entity.guild_id;
            tangon = null;
            zuuluu = tangon != report;
 44:
            if(!zuuluu) { _fun00032_ip = 66; continue _fun00031 }
 47:
            zuuluu = _closure1_slot9;
            michal = zuuluu.delete;
            entity = entity.guild_id;
            entity = michal.bind(zuuluu)(entity);
 66:
            entity = undefined;
            return entity;
        }
    };
    tangon['CHANNEL_CREATE'] = romeon;
    romeon = function(argFoo) { // Original name: handleSetWidget
        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.guildId;
            michal = entity.enabled;
            entity = null;
            entity = entity != zuuluu;
            if(!entity) { _fun00034_ip = 25; continue _fun00033 }
 22:
            entity = michal;
 25:
            if(!entity) { _fun00034_ip = 45; continue _fun00033 }
 28:
            michal = _closure1_slot9;
            entity = michal.delete;
            entity = entity.bind(michal)(zuuluu);
 45:
            entity = undefined;
            return entity;
        }
    };
    tangon['GUILD_SETTINGS_SET_WIDGET'] = romeon;
    romeon = function(argFoo) { // Original name: handleGuildUpdate
        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
            entity = argFoo;
            entity = entity.guild;
            report = _closure1_slot9;
            tangon = report.get;
            zuuluu = entity.id;
            report = tangon.bind(report)(zuuluu);
            tangon = null;
            if(!(tangon != report)) { _fun00036_ip = 207; continue _fun00035 }
 39:
            zuuluu = report.profile;
            if(!(tangon != zuuluu)) { _fun00036_ip = 207; continue _fun00035 }
 52:
            oscard = {};
            verify = report.profile;
            offset = oscard;
            zuuluu = copyDataProperties(offset, verify);
            golfie = entity.name;
            zuuluu = 'name';
            oscard[zuuluu] = golfie;
            zuuluu = entity.icon;
            option = tangon != zuuluu;
            golfie = null;
            if(!option) { _fun00036_ip = 98; continue _fun00035 }
 95:
            golfie = zuuluu;
 98:
            zuuluu = 'icon';
            oscard[zuuluu] = golfie;
            zuuluu = entity.description;
            option = tangon != zuuluu;
            golfie = '';
            if(!option) { _fun00036_ip = 126; continue _fun00035 }
 123:
            golfie = zuuluu;
 126:
            zuuluu = 'description';
            oscard[zuuluu] = golfie;
            zuuluu = entity.discovery_splash;
            golfie = tangon != zuuluu;
            tangon = null;
            if(!golfie) { _fun00036_ip = 153; continue _fun00035 }
 150:
            tangon = zuuluu;
 153:
            zuuluu = 'customBanner';
            oscard[zuuluu] = tangon;
            tangon = _closure1_slot9;
            zuuluu = tangon.set;
            michal = entity.id;
            entity = {};
            offset = entity;
            verify = report;
            report = copyDataProperties(offset, verify);
            report = 'profile';
            entity[report] = oscard;
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = undefined;
            return entity;
 207:
            entity = false;
            return entity;
        }
    };
    tangon['GUILD_UPDATE'] = romeon;
    tangon['GUILD_PROFILE_UPDATE_VISIBILITY'] = yankee;
    offset = function(argFoo) { // Original name: handleUpdateVisibilitySuccess
        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
            entity = argFoo;
            report = entity.guildId;
            option = entity.visibility;
            zuuluu = _closure1_slot9;
            entity = zuuluu.get;
            golfie = entity.bind(zuuluu)(report);
            tangon = null;
            zuuluu = tangon == golfie;
            entity = undefined;
            oscard = undefined;
            if(zuuluu) { _fun00038_ip = 50; continue _fun00037 }
 44:
            oscard = golfie.profile;
 50:
            zuuluu = tangon != golfie;
            if(!zuuluu) { _fun00038_ip = 61; continue _fun00037 }
 57:
            zuuluu = tangon != oscard;
 61:
            if(!zuuluu) { _fun00038_ip = 132; continue _fun00037 }
 64:
            tangon = _closure1_slot9;
            zuuluu = tangon.set;
            michal = {};
            yankee = michal;
            offset = golfie;
            golfie = copyDataProperties(yankee, offset);
            verify = false;
            golfie = 'isUpdating';
            michal[golfie] = verify;
            golfie = {};
            yankee = golfie;
            offset = oscard;
            oscard = copyDataProperties(yankee, offset);
            oscard = 'visibility';
            golfie[oscard] = option;
            oscard = 'profile';
            michal[oscard] = golfie;
            michal = zuuluu.bind(tangon)(report, michal);
 132:
            return entity;
        }
    };
    tangon['GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS'] = offset;
    tangon['GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE'] = report;
    report = verify.prototype;
    report = Object.create(report, {constructor: {value: verify}});
    output = report;
    kiloes = tangon;
    tangon = new output[verify](sizing, kiloes, backup);
    tangon = tangon instanceof Object ? tangon : report;
    report = 9;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/guild_profile/GuildProfileStore.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['GuildProfileFetchStatus'] = michal;
    return entity;
})();