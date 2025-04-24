// app/modules/guild_tag/PrimaryGuildUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    zuuluu = argFre;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    tangon = argPlu;
    entity = 0;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_tag/PrimaryGuildUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) { // Original name: isUserPrimaryGuildEqual
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            michal = argBar;
            entity = null;
            if(!(entity != zuuluu)) { _fun00002_ip = 89; continue _fun00001 }
 12:
            if(!(entity != michal)) { _fun00002_ip = 89; continue _fun00001 }
 16:
            tangon = zuuluu.identityGuildId;
            entity = michal.identityGuildId;
            entity = tangon === entity;
            if(!entity) { _fun00002_ip = 51; continue _fun00001 }
 35:
            report = zuuluu.identityEnabled;
            tangon = michal.identityEnabled;
            entity = report === tangon;
 51:
            if(!entity) { _fun00002_ip = 68; continue _fun00001 }
 54:
            report = zuuluu.tag;
            tangon = michal.tag;
            entity = report === tangon;
 68:
            if(!entity) { _fun00002_ip = 87; continue _fun00001 }
 71:
            report = zuuluu.badge;
            tangon = michal.badge;
            entity = report === tangon;
 87:
            _fun00002_ip = 93; continue _fun00001;
 89:
            entity = zuuluu === michal;
 93:
            return entity;
        }
    };
    zuuluu['isUserPrimaryGuildEqual'] = tangon;
    michal = function(argFoo) { // Original name: ensureUserPrimaryGuild
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            entity = null;
            if(!(entity != michal)) { _fun00004_ip = 68; continue _fun00003 }
 9:
            zuuluu = 'identityGuildId';
            zuuluu = zuuluu in michal;
            if(zuuluu) { _fun00004_ip = 66; continue _fun00003 }
 20:
            zuuluu = {};
            tangon = michal.identity_guild_id;
            zuuluu['identityGuildId'] = tangon;
            tangon = michal.identity_enabled;
            zuuluu['identityEnabled'] = tangon;
            tangon = michal.tag;
            zuuluu['tag'] = tangon;
            tangon = michal.badge;
            zuuluu['badge'] = tangon;
            return zuuluu;
 66:
            return michal;
 68:
            return entity;
        }
    };
    zuuluu['ensureUserPrimaryGuild'] = michal;
    return entity;
})();