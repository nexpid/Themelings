// app/modules/guild/BasicGuildStore.tsx
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
 72: // try_end0
            _fun00002_ip = 76; continue _fun00001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot7 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, michal);
    michal = 0;
    golfie = report[michal];
    entity = undefined;
    golfie = oscard.bind(entity)(golfie);
    var _closure1_slot0 = golfie;
    golfie = 1;
    golfie = report[golfie];
    golfie = oscard.bind(entity)(golfie);
    var _closure1_slot1 = golfie;
    golfie = 2;
    golfie = report[golfie];
    golfie = oscard.bind(entity)(golfie);
    var _closure1_slot2 = golfie;
    golfie = 3;
    golfie = report[golfie];
    golfie = oscard.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    golfie = 4;
    golfie = report[golfie];
    golfie = oscard.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    var _closure1_slot5 = michal;
    michal = {};
    var _closure1_slot6 = michal;
    michal = 5;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    golfie = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: BasicGuildStore
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
                entity = _closure1_slot7;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00004_ip = 69; continue _fun00003 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00004_ip = 105; continue _fun00003;
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
        entity = 'getGuild';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = _closure1_slot6;
                entity = argFoo;
                entity = michal[entity];
                michal = null;
                if(!(michal != entity)) { _fun00006_ip = 33; continue _fun00005 }
 20:
                michal = 'type';
                michal = michal in entity;
                if(michal) { _fun00006_ip = 33; continue _fun00005 }
 31:
                return entity;
 33:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golfie = 'getGuildOrStatus';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            michal = _closure1_slot6;
            entity = argFoo;
            entity = michal[entity];
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getVersion';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = _closure1_slot5;
            return entity;
        };
        report['value'] = oscard;
        entity[2] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    golfie = michal.bind(entity)(golfie);
    michal = 'BasicGuildStore';
    golfie['displayName'] = michal;
    michal = 6;
    michal = report[michal];
    yankee = oscard.bind(entity)(michal);
    michal = {};
    option = function(argFoo) { // Original name: handleBasicGuildFetch
        zuuluu = _closure1_slot6;
        entity = argFoo;
        michal = entity.guildId;
        entity = {};
        tangon = 'loading';
        entity['type'] = tangon;
        zuuluu[michal] = entity;
        entity = false;
        return entity;
    };
    michal['BASIC_GUILD_FETCH'] = option;
    option = function(argFoo) { // Original name: handleBasicGuildFetchSuccess
        entity = argFoo;
        tangon = _closure1_slot6;
        zuuluu = entity.guildId;
        entity = entity.guildInfo;
        tangon[zuuluu] = entity;
        entity = _closure1_slot5;
        entity = entity + 1;
        _closure1_slot5 = entity;
        entity = undefined;
        return entity;
    };
    michal['BASIC_GUILD_FETCH_SUCCESS'] = option;
    tangon = function(argFoo) { // Original name: handleBasicGuildFetchFailure
        zuuluu = _closure1_slot6;
        entity = argFoo;
        michal = entity.guildId;
        entity = {};
        tangon = 'failed';
        entity['type'] = tangon;
        zuuluu[michal] = entity;
        entity = false;
        return entity;
    };
    michal['BASIC_GUILD_FETCH_FAILURE'] = tangon;
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
    tangon = 'modules/guild/BasicGuildStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();