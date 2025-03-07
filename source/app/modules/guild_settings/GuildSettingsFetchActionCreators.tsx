// app/modules/guild_settings/GuildSettingsFetchActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _fetchGuildIntegrationsApplications
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    golfie = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 194; continue _fun00001 }
 13:
                    zuuluu = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 4;
                    michal = report[michal];
                    oscard = undefined;
                    michal = zuuluu.bind(oscard)(michal);
                    report = michal.HTTP;
                    zuuluu = report.get;
                    michal = {};
                    verify = _closure1_slot6;
                    option = verify.GUILD_INTEGRATIONS;
                    option = option.bind(verify)(golfie);
                    michal['url'] = option;
                    option = true;
                    verify = {'include_applications': true, 'include_role_connections_metadata': true};
                    michal['query'] = verify;
                    michal['oldFormErrors'] = option;
                    option = false;
                    michal['rejectWithError'] = option;
                    michal = zuuluu.bind(report)(michal);
                    SaveGenerator(address=109);
 107:
                    return michal;
 109:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 191; continue _fun00001 }
 115:
                    option = michal.body;
                    report = option.map;
                    zuuluu = function(argFoo) {
                        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                            tangon = argFoo;
                            entity = {};
                            offset = entity;
                            verify = tangon;
                            michal = copyDataProperties(offset, verify);
                            zuuluu = 'application';
                            report = zuuluu in tangon;
                            michal = undefined;
                            if(!report) { _fun00004_ip = 67; continue _fun00003 }
 28:
                            golfie = tangon.application;
                            report = null;
                            report = report != golfie;
                            michal = undefined;
                            if(!report) { _fun00004_ip = 67; continue _fun00003 }
 44:
                            option = _closure1_slot4;
                            golfie = option.createFromServer;
                            report = tangon.application;
                            michal = golfie.bind(option)(report);
 67:
                            entity[zuuluu] = michal;
                            zuuluu = 'user';
                            report = zuuluu in tangon;
                            michal = undefined;
                            if(!report) { _fun00004_ip = 133; continue _fun00003 }
 85:
                            golfie = tangon.user;
                            report = null;
                            report = report != golfie;
                            michal = undefined;
                            if(!report) { _fun00004_ip = 133; continue _fun00003 }
 101:
                            oscard = _closure1_slot5;
                            offset = tangon.user;
                            report = oscard.prototype;
                            report = Object.create(report, {constructor: {value: oscard}});
                            yankee = report;
                            tangon = new yankee[oscard](offset, verify);
                            michal = tangon instanceof Object ? tangon : report;
 133:
                            entity[zuuluu] = michal;
                            return entity;
                        }
                    };
                    zuuluu = report.bind(option)(zuuluu);
                    report = _closure1_slot1;
                    option = _closure1_slot2;
                    tangon = 5;
                    tangon = option[tangon];
                    oscard = report.bind(oscard)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    option = 'GUILD_SETTINGS_LOADED_INTEGRATIONS';
                    tangon['type'] = option;
                    tangon['guildId'] = golfie;
                    tangon['integrations'] = zuuluu;
                    tangon = report.bind(oscard)(tangon);
                    return zuuluu;
 191:
                    return michal;
 194:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot7 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.BasicApplicationRecord;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Endpoints;
    var _closure1_slot6 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_settings/GuildSettingsFetchActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: fetchGuildIntegrationsApplications
        entity = undefined;
        tangon = _closure1_slot7;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchGuildIntegrationsApplications'] = tangon;
    michal = function(argFoo) { // Original name: fetchGuildEmbed
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 4;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.get;
        entity = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
        oscard = _closure1_slot6;
        report = oscard.GUILD_WIDGET;
        tangon = argFoo;
        tangon = report.bind(oscard)(tangon);
        entity['url'] = tangon;
        zuuluu = michal.bind(zuuluu)(entity);
        michal = zuuluu.then;
        entity = function(argFoo) {
            report = argFoo;
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'GUILD_SETTINGS_SET_WIDGET';
            michal['type'] = oscard;
            oscard = report.body;
            oscard = oscard.enabled;
            michal['enabled'] = oscard;
            report = report.body;
            report = report.channel_id;
            michal['channelId'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['fetchGuildEmbed'] = michal;
    return entity;
})();