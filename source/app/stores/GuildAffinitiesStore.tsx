// app/stores/GuildAffinitiesStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
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
            entity = _closure1_slot11;
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
    var _closure1_slot10 = entity;
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
            _closure1_slot11 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot11 = entity;
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
    michal = golfie.bind(entity)(michal);
    var _closure1_slot2 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 5;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = {};
    var _closure1_slot8 = michal;
    michal = function() { // Original name: setDefaultState
        michal = {};
        entity = {};
        michal['guildAffinitiesByGuildId'] = entity;
        entity = new Array(0);
        michal['guildAffinities'] = entity;
        entity = 0;
        michal['lastFetched'] = entity;
        _closure1_slot8 = michal;
        entity = undefined;
        return entity;
    };
    var _closure1_slot9 = michal;
    michal = michal.bind(entity)();
    michal = 7;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.PersistedStore;
    michal = function(argFoo) {
        tangon = function() { // Original name: GuildAffinitiesStore
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot2;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot10;
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
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = argFoo;
                zuuluu = this;
                entity = null;
                if(!(entity != michal)) { _fun00006_ip = 19; continue _fun00005 }
 12:
                _closure1_slot8 = michal;
 19:
                michal = zuuluu.waitFor;
                entity = _closure1_slot7;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(5);
        entity[0] = report;
        report = {};
        golfie = 'getState';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot8;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getGuildAffinity';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            entity = _closure1_slot8;
            michal = entity.guildAffinitiesByGuildId;
            entity = argFoo;
            entity = michal[entity];
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'affinities';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot8;
            entity = entity.guildAffinities;
            return entity;
        };
        report['get'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'hasRequestResolved';
        report['key'] = golfie;
        oscard = function() { // Original name: get
            entity = _closure1_slot8;
            michal = entity.lastFetched;
            entity = 0;
            entity = entity !== michal;
            return entity;
        };
        report['get'] = oscard;
        entity[4] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'GuildAffinitiesStore';
    option['displayName'] = michal;
    option['persistKey'] = michal;
    michal = 8;
    michal = oscard[michal];
    romeon = golfie.bind(entity)(michal);
    michal = {};
    verify = function() { // Original name: handleConnectionOpen
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = global;
            michal = entity.Date;
            entity = michal.now;
            zuuluu = entity.bind(michal)();
            michal = _closure1_slot8;
            michal = michal.lastFetched;
            zuuluu = zuuluu - michal;
            michal = 86400000;
            if(!(zuuluu > michal)) { _fun00008_ip = 76; continue _fun00007 }
 44:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 6;
            michal = michal[entity];
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            entity = michal.fetchGuildAffinities;
            entity = entity.bind(michal)();
 76:
            entity = false;
            return entity;
        }
    };
    michal['CONNECTION_OPEN'] = verify;
    verify = function(argFoo) { // Original name: handleLoadGuildAffinitiesSuccess
        entity = argFoo;
        zuuluu = entity.guildAffinities;
        tangon = _closure1_slot8;
        michal = new Array(0);
        tangon['guildAffinities'] = michal;
        tangon = _closure1_slot8;
        michal = {};
        tangon['guildAffinitiesByGuildId'] = michal;
        michal = _closure1_slot8;
        entity = global;
        tangon = entity.Date;
        entity = tangon.now;
        entity = entity.bind(tangon)();
        michal['lastFetched'] = entity;
        michal = zuuluu.forEach;
        entity = function(argFoo, argBar) {
            michal = argFoo;
            entity = michal.affinity;
            tangon = michal.guild_id;
            zuuluu = {};
            zuuluu['score'] = entity;
            zuuluu['guildId'] = tangon;
            entity = argBar;
            zuuluu['index'] = entity;
            michal = _closure1_slot8;
            michal = michal.guildAffinitiesByGuildId;
            michal[tangon] = zuuluu;
            entity = _closure1_slot8;
            michal = entity.guildAffinities;
            entity = michal.push;
            entity = entity.bind(michal)(zuuluu);
            entity = undefined;
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    michal['LOAD_GUILD_AFFINITIES_SUCCESS'] = verify;
    tangon = function() { // Original name: handleLogout
        michal = _closure1_slot9;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    michal['LOGOUT'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    foxtra = tangon;
    yankee = michal;
    michal = new foxtra[option](romeon, yankee, offset);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'stores/GuildAffinitiesStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();