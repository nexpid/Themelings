// app/modules/guild_profile/GuildPopoutStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
            _closure1_slot10 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot10 = entity;
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
    option = 'unset';
    michal['UNSET'] = option;
    option = 'fetching';
    michal['FETCHING'] = option;
    option = 'failed';
    michal['FAILED'] = option;
    option = 'succeeded';
    michal['SUCCEEDED'] = option;
    var _closure1_slot8 = michal;
    michal = {};
    option = {};
    michal['guilds'] = option;
    var _closure1_slot9 = michal;
    michal = 7;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: GuildPopoutStore
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
                entity = _closure1_slot10;
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
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            zuuluu = this;
            michal = zuuluu.waitFor;
            entity = _closure1_slot7;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golfie = 'isFetchingGuild';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = _closure1_slot9;
                zuuluu = entity.guilds;
                entity = argFoo;
                zuuluu = zuuluu[entity];
                entity = null;
                entity = entity != zuuluu;
                if(!entity) { _fun00006_ip = 49; continue _fun00005 }
 29:
                zuuluu = zuuluu.fetchState;
                michal = _closure1_slot8;
                michal = michal.FETCHING;
                entity = zuuluu === michal;
 49:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getGuild';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = _closure1_slot9;
                michal = entity.guilds;
                entity = argFoo;
                michal = michal[entity];
                entity = null;
                zuuluu = entity != michal;
                if(!zuuluu) { _fun00008_ip = 34; continue _fun00007 }
 29:
                entity = michal.guild;
 34:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'hasFetchFailed';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = _closure1_slot9;
                zuuluu = entity.guilds;
                entity = argFoo;
                zuuluu = zuuluu[entity];
                entity = null;
                entity = entity != zuuluu;
                if(!entity) { _fun00010_ip = 49; continue _fun00009 }
 29:
                zuuluu = zuuluu.fetchState;
                michal = _closure1_slot8;
                michal = michal.FAILED;
                entity = zuuluu === michal;
 49:
                return entity;
            }
        };
        report['value'] = oscard;
        entity[3] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'GuildPopoutStore';
    option['displayName'] = michal;
    michal = 8;
    michal = oscard[michal];
    romeon = golfie.bind(entity)(michal);
    michal = {};
    verify = function(argFoo) { // Original name: handleFetchStart
        entity = argFoo;
        zuuluu = entity.guildId;
        report = _closure1_slot9;
        michal = report.guilds;
        entity = {};
        report = report.guilds;
        oscard = report[zuuluu];
        golfie = entity;
        report = copyDataProperties(golfie, oscard);
        tangon = _closure1_slot8;
        report = tangon.FETCHING;
        tangon = 'fetchState';
        entity[tangon] = report;
        michal[zuuluu] = entity;
        entity = undefined;
        return entity;
    };
    michal['GUILD_POPOUT_FETCH_START'] = verify;
    verify = function(argFoo) { // Original name: handleFetchSuccess
        entity = argFoo;
        tangon = entity.guildId;
        oscard = entity.guild;
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 6;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.makeDiscoverableGuild;
        golfie = michal.bind(zuuluu)(oscard);
        oscard = _closure1_slot9;
        zuuluu = oscard.guilds;
        michal = {};
        oscard = oscard.guilds;
        option = oscard[tangon];
        verify = michal;
        oscard = copyDataProperties(verify, option);
        oscard = 'guild';
        michal[oscard] = golfie;
        report = _closure1_slot8;
        oscard = report.SUCCEEDED;
        report = 'fetchState';
        michal[report] = oscard;
        zuuluu[tangon] = michal;
        return entity;
    };
    michal['GUILD_POPOUT_FETCH_SUCCESS'] = verify;
    tangon = function(argFoo) { // Original name: handleFetchFailure
        entity = argFoo;
        zuuluu = entity.guildId;
        report = _closure1_slot9;
        michal = report.guilds;
        entity = {};
        report = report.guilds;
        oscard = report[zuuluu];
        golfie = entity;
        report = copyDataProperties(golfie, oscard);
        tangon = _closure1_slot8;
        report = tangon.FAILED;
        tangon = 'fetchState';
        entity[tangon] = report;
        michal[zuuluu] = entity;
        entity = undefined;
        return entity;
    };
    michal['GUILD_POPOUT_FETCH_FAILURE'] = tangon;
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
    tangon = 'modules/guild_profile/GuildPopoutStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();