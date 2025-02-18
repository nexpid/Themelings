// app/modules/guilds_bar/native/utils/transitionGuildsBarToGuildOrOpenSelectedChannel.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    tangon = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tangon;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = 4;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guilds_bar/native/utils/transitionGuildsBarToGuildOrOpenSelectedChannel.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: transitionGuildsBarToGuildOrOpenSelectedChannel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 0;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.getRootNavigationRef;
            verify = zuuluu.bind(tangon)();
            zuuluu = null;
            tangon = zuuluu == verify;
            golfie = undefined;
            if(tangon) { _fun00002_ip = 58; continue _fun00001 }
 48:
            tangon = verify.isReady;
            golfie = tangon.bind(verify)();
 58:
            report = true;
            tangon = undefined;
            if(!(report === golfie)) { _fun00002_ip = 165; continue _fun00001 }
 66:
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            report = 1;
            report = option[report];
            option = golfie.bind(entity)(report);
            golfie = option.coerceGuildsRoute;
            report = verify.getCurrentRoute;
            report = report.bind(verify)();
            report = golfie.bind(option)(report);
            golfie = zuuluu != report;
            tangon = undefined;
            if(!golfie) { _fun00002_ip = 165; continue _fun00001 }
 116:
            option = report.params;
            verify = zuuluu == option;
            golfie = undefined;
            if(verify) { _fun00002_ip = 136; continue _fun00001 }
 131:
            golfie = option.guildId;
 136:
            tangon = undefined;
            if(!(golfie === oscard)) { _fun00002_ip = 165; continue _fun00001 }
 142:
            golfie = report.params;
            option = zuuluu == golfie;
            report = undefined;
            if(option) { _fun00002_ip = 162; continue _fun00001 }
 157:
            report = golfie.channelId;
 162:
            tangon = report;
 165:
            if(!(zuuluu == tangon)) { _fun00002_ip = 202; continue _fun00001 }
 169:
            report = _closure1_slot0;
            golfie = _closure1_slot1;
            zuuluu = 3;
            zuuluu = golfie[zuuluu];
            report = report.bind(entity)(zuuluu);
            zuuluu = report.transitionToGuild;
            zuuluu = zuuluu.bind(report)(oscard);
            _fun00002_ip = 233; continue _fun00001;
 202:
            zuuluu = _closure1_slot0;
            report = _closure1_slot1;
            michal = 2;
            michal = report[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.transitionToChannel;
            michal = michal.bind(zuuluu)(tangon);
 233:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();