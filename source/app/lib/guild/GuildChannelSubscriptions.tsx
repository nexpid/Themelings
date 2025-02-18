// app/lib/guild/GuildChannelSubscriptions.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    entity = function(argFoo) { // Original name: serializeChannelRanges
        tangon = argFoo;
        entity = {};
        var _closure2_slot0 = entity;
        zuuluu = tangon.forEach;
        michal = function(argFoo, argBar) {
            zuuluu = _closure2_slot0;
            michal = argFoo;
            entity = argBar;
            zuuluu[entity] = michal;
            entity = undefined;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot4 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = report[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    michal = function() {
        tangon = _closure1_slot3;
        zuuluu = function(argFoo) { // Original name: GuildChannelSubscriptions
            zuuluu = this;
            tangon = _closure1_slot2;
            michal = _closure2_slot0;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            michal = {};
            zuuluu['_subscriptions'] = michal;
            michal = argFoo;
            zuuluu['_onChange'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'reset';
        entity['key'] = michal;
        michal = function() { // Original name: value
            michal = {};
            entity = this;
            entity['_subscriptions'] = michal;
            entity = undefined;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(5);
        michal[0] = entity;
        entity = {};
        oscard = 'get';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            tangon = this;
            zuuluu = _closure1_slot4;
            michal = tangon._get;
            entity = argFoo;
            michal = michal.bind(tangon)(entity);
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = '_get';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = this;
                michal = entity._subscriptions;
                entity = argFoo;
                entity = michal[entity];
                michal = null;
                if(!(michal == entity)) { _fun00002_ip = 79; continue _fun00001 }
 22:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot1;
                michal = 2;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                michal = {};
                zuuluu = 5;
                michal['max'] = zuuluu;
                zuuluu = tangon.prototype;
                zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
                oscard = zuuluu;
                report = michal;
                michal = new oscard[tangon](report, tangon);
                entity = michal instanceof Object ? michal : zuuluu;
 79:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'clear';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            entity = this;
            michal = entity._subscriptions;
            entity = argFoo;
            entity = delete michal[entity];
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = 'subscribe';
        entity['key'] = oscard;
        report = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                report = argFoo;
                verify = argBar;
                option = argBaz;
                tangon = this;
                entity = tangon._get;
                golfie = entity.bind(tangon)(report);
                zuuluu = _closure1_slot0;
                oscard = _closure1_slot1;
                entity = 3;
                entity = oscard[entity];
                oscard = undefined;
                offset = zuuluu.bind(oscard)(entity);
                zuuluu = offset.isEqual;
                entity = golfie.get;
                entity = entity.bind(golfie)(verify);
                entity = zuuluu.bind(offset)(entity, option);
                entity = !entity;
                if(!entity) { _fun00004_ip = 120; continue _fun00003 }
 76:
                zuuluu = golfie.set;
                zuuluu = zuuluu.bind(golfie)(verify, option);
                zuuluu = tangon._subscriptions;
                zuuluu[report] = golfie;
                zuuluu = tangon._onChange;
                michal = _closure1_slot4;
                michal = michal.bind(oscard)(golfie);
                michal = zuuluu.bind(tangon)(report, michal);
                entity = true;
 120:
                return entity;
            }
        };
        entity['value'] = report;
        michal[4] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 4;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'lib/guild/GuildChannelSubscriptions.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    michal = 100;
    zuuluu['MINIMUM_RANGE'] = michal;
    michal = new Array(1);
    tangon = [0, 99];
    michal[0] = tangon;
    zuuluu['DEFAULT_RANGES'] = michal;
    return entity;
})();