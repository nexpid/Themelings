// app/modules/rpc/server/commands/guilds.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    tangon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = tangon;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = report.bind(entity)(michal);
    michal = michal.getGuildIconURL;
    var _closure1_slot2 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    tangon = michal.RPCCommands;
    michal = michal.RPCErrors;
    var _closure1_slot4 = michal;
    michal = {};
    offset = tangon.GET_GUILD;
    golfie = {};
    verify = 3;
    yankee = oscard[verify];
    yankee = report.bind(entity)(yankee);
    yankee = yankee.OAuth2Scopes;
    yankee = yankee.RPC;
    golfie['scope'] = yankee;
    yankee = function(argFoo) { // Original name: validation
        report = argFoo;
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 4;
        entity = michal[entity];
        michal = undefined;
        entity = zuuluu.bind(michal)(entity);
        michal = entity.bind(michal)(report);
        entity = michal.required;
        zuuluu = entity.bind(michal)();
        michal = zuuluu.keys;
        entity = {};
        tangon = report.string;
        tangon = tangon.bind(report)();
        entity['guild_id'] = tangon;
        tangon = report.number;
        oscard = tangon.bind(report)();
        report = oscard.min;
        tangon = 0;
        oscard = report.bind(oscard)(tangon);
        report = oscard.max;
        tangon = 60;
        tangon = report.bind(oscard)(tangon);
        entity['timeout'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    golfie['validation'] = yankee;
    yankee = function(argFoo) { // Original name: handler
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            oscard = michal.socket;
            report = michal.server;
            michal = michal.args;
            zuuluu = michal.guild_id;
            var _closure2_slot0 = zuuluu;
            tangon = michal.timeout;
            michal = undefined;
            if(!(tangon === michal)) { _fun00002_ip = 46; continue _fun00001 }
 44:
            tangon = 0;
 46:
            zuuluu = report.storeWait;
            michal = function() {
                zuuluu = _closure1_slot3;
                michal = zuuluu.getGuild;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = zuuluu.bind(report)(oscard, michal, tangon);
            zuuluu = tangon.catch;
            michal = function() {
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot1;
                michal = 5;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = {};
                entity = _closure1_slot4;
                entity = entity.GET_GUILD_TIMED_OUT;
                zuuluu['errorCode'] = entity;
                entity = tangon.prototype;
                michal = Object.create(entity, {constructor: {value: tangon}});
                report = 'Request to get guild timed out.';
                golfie = michal;
                oscard = zuuluu;
                entity = new golfie[tangon](oscard, report, tangon);
                entity = entity instanceof Object ? entity : michal;
                throw entity;
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.then;
            entity = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = argFoo;
                    zuuluu = null;
                    if(!(zuuluu != michal)) { _fun00004_ip = 86; continue _fun00003 }
 9:
                    entity = {};
                    tangon = michal.id;
                    entity['id'] = tangon;
                    tangon = michal.name;
                    entity['name'] = tangon;
                    oscard = _closure1_slot2;
                    report = undefined;
                    tangon = 128;
                    tangon = oscard.bind(report)(michal, tangon);
                    report = zuuluu != tangon;
                    zuuluu = null;
                    if(!report) { _fun00004_ip = 59; continue _fun00003 }
 56:
                    zuuluu = tangon;
 59:
                    entity['icon_url'] = zuuluu;
                    zuuluu = new Array(0);
                    entity['members'] = zuuluu;
                    michal = michal.vanityURLCode;
                    entity['vanity_url_code'] = michal;
                    return entity;
 86:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    michal = 5;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = {};
                    entity = _closure1_slot4;
                    entity = entity.INVALID_GUILD;
                    zuuluu['errorCode'] = entity;
                    report = _closure2_slot0;
                    entity = global;
                    entity = entity.HermesInternal;
                    michal = entity.concat;
                    entity = 'Invalid guild id: ';
                    golfie = michal.bind(entity)(report);
                    michal = tangon.prototype;
                    michal = Object.create(michal, {constructor: {value: tangon}});
                    verify = michal;
                    option = zuuluu;
                    entity = new verify[tangon](option, golfie, oscard);
                    entity = entity instanceof Object ? entity : michal;
                    throw entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    golfie['handler'] = yankee;
    michal[offset] = golfie;
    golfie = tangon.GET_GUILDS;
    tangon = {};
    verify = oscard[verify];
    verify = report.bind(entity)(verify);
    verify = verify.OAuth2Scopes;
    verify = verify.RPC;
    tangon['scope'] = verify;
    option = function() { // Original name: handler
        entity = {};
        zuuluu = _closure1_slot3;
        michal = zuuluu.getGuildsArray;
        tangon = michal.bind(zuuluu)();
        zuuluu = tangon.map;
        michal = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                report = argFoo;
                entity = {};
                michal = report.id;
                entity['id'] = michal;
                michal = report.name;
                entity['name'] = michal;
                tangon = _closure1_slot2;
                zuuluu = undefined;
                michal = 128;
                zuuluu = tangon.bind(zuuluu)(report, michal);
                michal = null;
                tangon = michal != zuuluu;
                if(!tangon) { _fun00006_ip = 53; continue _fun00005 }
 50:
                michal = zuuluu;
 53:
                entity['icon_url'] = michal;
                return entity;
            }
        };
        michal = zuuluu.bind(tangon)(michal);
        entity['guilds'] = michal;
        return entity;
    };
    tangon['handler'] = option;
    michal[golfie] = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/rpc/server/commands/guilds.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();