// app/modules/guild_profile/GuildProfileUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
    tangon = tangon.createChannelRecordFromInvite;
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildFeatures;
    var _closure1_slot3 = tangon;
    tangon = 3;
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
    tangon = function(argFoo) { // Original name: guildSupportsTags
        zuuluu = argFoo;
        michal = zuuluu.hasFeature;
        entity = _closure1_slot3;
        entity = entity.GUILD_TAGS;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['guildSupportsTags'] = tangon;
    michal = function(argFoo) { // Original name: guildInviteCanEmbedProfile
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.guild;
            entity = null;
            if(!(entity != zuuluu)) { _fun00004_ip = 145; continue _fun00003 }
 17:
            oscard = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 2;
            zuuluu = report[zuuluu];
            report = undefined;
            golfie = oscard.bind(report)(zuuluu);
            oscard = golfie.fromInviteGuild;
            zuuluu = michal.guild;
            golfie = oscard.bind(golfie)(zuuluu);
            oscard = golfie.hasFeature;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.HUB;
            zuuluu = oscard.bind(golfie)(zuuluu);
            if(zuuluu) { _fun00004_ip = 141; continue _fun00003 }
 82:
            oscard = entity == michal;
            zuuluu = undefined;
            if(oscard) { _fun00004_ip = 96; continue _fun00003 }
 91:
            zuuluu = michal.channel;
 96:
            oscard = entity != zuuluu;
            zuuluu = null;
            if(!oscard) { _fun00004_ip = 119; continue _fun00003 }
 105:
            tangon = _closure1_slot2;
            michal = michal.channel;
            zuuluu = tangon.bind(report)(michal);
 119:
            entity = entity == zuuluu;
            if(entity) { _fun00004_ip = 139; continue _fun00003 }
 126:
            michal = zuuluu.isGuildVocal;
            michal = michal.bind(zuuluu)();
            entity = !michal;
 139:
            return entity;
 141:
            entity = false;
            return entity;
 145:
            entity = false;
            return entity;
        }
    };
    zuuluu['guildInviteCanEmbedProfile'] = michal;
    return entity;
})();