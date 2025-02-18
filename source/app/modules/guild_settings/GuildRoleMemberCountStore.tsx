// app/modules/guild_settings/GuildRoleMemberCountStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot3;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot2;
            entity = _closure1_slot8;
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
            report = _closure1_slot3;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot7 = entity;
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
            _closure1_slot8 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, michal);
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
    michal = {};
    var _closure1_slot5 = michal;
    michal = {};
    var _closure1_slot6 = michal;
    michal = 5;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    golfie = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: GuildRoleMemberCountStore
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot0;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot7;
            entity = arguments;
            entity = michal.bind(tangon)(report, zuuluu, entity);
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot4;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot1;
        report = {};
        entity = 'getRoleMemberCount';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = argFoo;
                entity = null;
                michal = entity != zuuluu;
                if(!michal) { _fun00006_ip = 23; continue _fun00005 }
 12:
                michal = _closure1_slot5;
                entity = michal[zuuluu];
 23:
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golfie = 'shouldFetch';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = argFoo;
                entity = null;
                if(!(entity != zuuluu)) { _fun00008_ip = 60; continue _fun00007 }
 9:
                michal = _closure1_slot6;
                zuuluu = michal[zuuluu];
                entity = entity == zuuluu;
                if(entity) { _fun00008_ip = 58; continue _fun00007 }
 27:
                michal = global;
                tangon = michal.Date;
                michal = tangon.now;
                michal = michal.bind(tangon)();
                zuuluu = michal - zuuluu;
                michal = 120000;
                entity = zuuluu > michal;
 58:
                return entity;
 60:
                entity = false;
                return entity;
            }
        };
        report['value'] = oscard;
        entity[1] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    golfie = michal.bind(entity)(golfie);
    michal = 'GuildRoleMemberCountStore';
    golfie['displayName'] = michal;
    michal = 6;
    michal = report[michal];
    yankee = oscard.bind(entity)(michal);
    michal = {};
    option = function(argFoo) { // Original name: handleGuildRoleMemberCountFetchSuccess
        entity = argFoo;
        zuuluu = entity.guildId;
        tangon = entity.roleMemberCount;
        michal = _closure1_slot5;
        michal[zuuluu] = tangon;
        michal = _closure1_slot6;
        entity = global;
        tangon = entity.Date;
        entity = tangon.now;
        entity = entity.bind(tangon)();
        michal[zuuluu] = entity;
        entity = undefined;
        return entity;
    };
    michal['GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS'] = option;
    option = function(argFoo) { // Original name: handleGuildRoleMemberCountUpdate
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            tangon = entity.guildId;
            zuuluu = entity.roleId;
            michal = entity.count;
            entity = _closure1_slot5;
            entity = entity[tangon];
            tangon = null;
            if(!(tangon != entity)) { _fun00010_ip = 44; continue _fun00009 }
 36:
            entity[zuuluu] = michal;
            entity = undefined;
            return entity;
 44:
            entity = false;
            return entity;
        }
    };
    michal['GUILD_ROLE_MEMBER_COUNT_UPDATE'] = option;
    option = function(argFoo) { // Original name: handleGuildRoleMemberBulkAdd
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            michal = entity.guildId;
            zuuluu = entity.roleId;
            report = entity.added;
            entity = _closure1_slot5;
            michal = entity[michal];
            tangon = null;
            if(!(tangon != michal)) { _fun00012_ip = 88; continue _fun00011 }
 37:
            entity = michal[zuuluu];
            if(!(tangon != entity)) { _fun00012_ip = 84; continue _fun00011 }
 45:
            entity = global;
            tangon = entity.Object;
            entity = tangon.keys;
            entity = entity.bind(tangon)(report);
            tangon = entity.length;
            entity = michal[zuuluu];
            entity = entity + tangon;
            michal[zuuluu] = entity;
            entity = undefined;
            return entity;
 84:
            entity = false;
            return entity;
 88:
            entity = false;
            return entity;
        }
    };
    michal['GUILD_ROLE_MEMBER_BULK_ADD'] = option;
    option = function(argFoo) { // Original name: handleGuildRoleMemberAdd
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            michal = entity.guildId;
            report = entity.roleId;
            entity = _closure1_slot5;
            tangon = entity[michal];
            zuuluu = null;
            entity = zuuluu != tangon;
            if(!entity) { _fun00014_ip = 65; continue _fun00013 }
 34:
            michal = tangon[report];
            michal = zuuluu != michal;
            if(!michal) { _fun00014_ip = 62; continue _fun00013 }
 45:
            oscard = tangon[report];
            zuuluu = 1;
            zuuluu = oscard + zuuluu;
            tangon[report] = zuuluu;
            michal = undefined;
 62:
            entity = michal;
 65:
            return entity;
        }
    };
    michal['GUILD_ROLE_MEMBER_ADD'] = option;
    option = function(argFoo) { // Original name: handleGuildRoleMemberRemove
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            michal = entity.guildId;
            report = entity.roleId;
            entity = _closure1_slot5;
            tangon = entity[michal];
            zuuluu = null;
            entity = zuuluu != tangon;
            if(!entity) { _fun00016_ip = 86; continue _fun00015 }
 34:
            michal = tangon[report];
            michal = zuuluu != michal;
            if(!michal) { _fun00016_ip = 83; continue _fun00015 }
 45:
            zuuluu = global;
            option = zuuluu.Math;
            golfie = option.max;
            oscard = tangon[report];
            zuuluu = 1;
            oscard = oscard - zuuluu;
            zuuluu = 0;
            zuuluu = golfie.bind(option)(oscard, zuuluu);
            tangon[report] = zuuluu;
            michal = undefined;
 83:
            entity = michal;
 86:
            return entity;
        }
    };
    michal['GUILD_ROLE_MEMBER_REMOVE'] = option;
    option = function(argFoo) { // Original name: handleGuildRoleCreate
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.guildId;
            entity = entity.role;
            tangon = _closure1_slot5;
            report = tangon[zuuluu];
            tangon = null;
            if(!(tangon == report)) { _fun00018_ip = 41; continue _fun00017 }
 31:
            report = _closure1_slot5;
            tangon = {};
            report[zuuluu] = tangon;
 41:
            michal = _closure1_slot5;
            zuuluu = michal[zuuluu];
            michal = entity.id;
            entity = 0;
            zuuluu[michal] = entity;
            entity = undefined;
            return entity;
        }
    };
    michal['GUILD_ROLE_CREATE'] = option;
    tangon = function(argFoo) { // Original name: handleGuildDelete
        entity = argFoo;
        entity = entity.guild;
        tangon = _closure1_slot5;
        zuuluu = entity.id;
        zuuluu = delete tangon[zuuluu];
        michal = _closure1_slot6;
        entity = entity.id;
        entity = delete michal[entity];
        entity = undefined;
        return entity;
    };
    michal['GUILD_DELETE'] = tangon;
    tangon = golfie.prototype;
    tangon = Object.create(tangon, {constructor: {value: golfie}});
    romeon = tangon;
    offset = michal;
    michal = new romeon[golfie](yankee, offset, verify);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 7;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_settings/GuildRoleMemberCountStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();