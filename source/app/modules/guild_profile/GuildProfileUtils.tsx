// app/modules/guild_profile/GuildProfileUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildFeatures;
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_profile/GuildProfileUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) { // Original name: getEstablishedDate
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            entity = null;
            if(!(entity != report)) { _fun00002_ip = 122; continue _fun00001 }
 9:
            michal = '';
            if(!(michal !== report)) { _fun00002_ip = 122; continue _fun00001 }
 17:
            zuuluu = global;
            michal = zuuluu.Date;
            tangon = michal.prototype;
            tangon = Object.create(tangon, {constructor: {value: michal}});
            verify = tangon;
            option = report;
            michal = new verify[michal](option, golfie);
            oscard = michal instanceof Object ? michal : tangon;
            michal = zuuluu.Date;
            tangon = oscard instanceof michal;
            michal = null;
            if(!tangon) { _fun00002_ip = 120; continue _fun00001 }
 63:
            report = zuuluu.isNaN;
            zuuluu = oscard.getTime;
            tangon = zuuluu.bind(oscard)();
            zuuluu = undefined;
            zuuluu = report.bind(zuuluu)(tangon);
            michal = null;
            if(zuuluu) { _fun00002_ip = 120; continue _fun00001 }
 91:
            report = oscard.toLocaleDateString;
            tangon = argBar;
            zuuluu = {'year': 'numeric', 'month': 'short'};
            michal = report.bind(oscard)(tangon, zuuluu);
 120:
            return michal;
 122:
            return entity;
        }
    };
    zuuluu['getEstablishedDate'] = tangon;
    michal = function(argFoo) { // Original name: guildSupportsTags
        zuuluu = argFoo;
        michal = zuuluu.hasFeature;
        entity = _closure1_slot0;
        entity = entity.GUILD_TAGS;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['guildSupportsTags'] = michal;
    return entity;
})();