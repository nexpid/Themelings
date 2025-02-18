// app/modules/guild_role_subscriptions/RoleSubscriptionEmojiUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    zuuluu = argFre;
    oscard = argPlu;
    tangon = function(argFoo) { // Original name: isPurchasableRoleSubscriptionEmoji
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            tangon = null;
            report = tangon == michal;
            zuuluu = undefined;
            if(report) { _fun00002_ip = 22; continue _fun00001 }
 16:
            zuuluu = michal.roles;
 22:
            if(!(tangon != zuuluu)) { _fun00002_ip = 105; continue _fun00001 }
 26:
            zuuluu = michal.roles;
            report = zuuluu.length;
            zuuluu = 0;
            if(!(zuuluu !== report)) { _fun00002_ip = 105; continue _fun00001 }
 43:
            zuuluu = michal.guildId;
            if(!(tangon != zuuluu)) { _fun00002_ip = 105; continue _fun00001 }
 52:
            report = _closure1_slot0;
            tangon = report.getPurchasableSubscriptionRoles;
            zuuluu = michal.guildId;
            zuuluu = tangon.bind(report)(zuuluu);
            var _closure2_slot0 = zuuluu;
            zuuluu = michal.roles;
            michal = zuuluu.some;
            entity = function(argFoo) {
                zuuluu = _closure2_slot0;
                michal = zuuluu.has;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
 105:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot1 = tangon;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, report);
    entity = 0;
    golfie = oscard[entity];
    report = argBaz;
    entity = undefined;
    report = report.bind(entity)(golfie);
    var _closure1_slot0 = report;
    report = 1;
    oscard = oscard[report];
    report = argBar;
    golfie = report.bind(entity)(oscard);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/guild_role_subscriptions/RoleSubscriptionEmojiUtils.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo, argBar) { // Original name: isRoleSubscriptionEmoji
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            report = argBar;
            zuuluu = null;
            oscard = zuuluu == michal;
            tangon = undefined;
            if(oscard) { _fun00004_ip = 25; continue _fun00003 }
 19:
            tangon = michal.roles;
 25:
            if(!(zuuluu != tangon)) { _fun00004_ip = 96; continue _fun00003 }
 29:
            tangon = michal.roles;
            oscard = tangon.length;
            tangon = 0;
            if(!(tangon !== oscard)) { _fun00004_ip = 96; continue _fun00003 }
 46:
            if(!(zuuluu != report)) { _fun00004_ip = 96; continue _fun00003 }
 50:
            tangon = _closure1_slot0;
            zuuluu = tangon.getSubscriptionRoles;
            zuuluu = zuuluu.bind(tangon)(report);
            var _closure2_slot0 = zuuluu;
            zuuluu = michal.roles;
            michal = zuuluu.some;
            entity = function(argFoo) {
                zuuluu = _closure2_slot0;
                michal = zuuluu.has;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
 96:
            entity = false;
            return entity;
        }
    };
    zuuluu['isRoleSubscriptionEmoji'] = report;
    zuuluu['isPurchasableRoleSubscriptionEmoji'] = tangon;
    michal = function(argFoo, argBar) { // Original name: isUnusableRoleSubscriptionEmoji
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            tangon = null;
            oscard = tangon == zuuluu;
            report = undefined;
            michal = undefined;
            if(oscard) { _fun00006_ip = 24; continue _fun00005 }
 18:
            michal = zuuluu.roles;
 24:
            if(!(tangon != michal)) { _fun00006_ip = 167; continue _fun00005 }
 31:
            michal = zuuluu.roles;
            oscard = michal.length;
            michal = 0;
            if(!(michal !== oscard)) { _fun00006_ip = 167; continue _fun00005 }
 48:
            michal = zuuluu.guildId;
            if(!(tangon != michal)) { _fun00006_ip = 167; continue _fun00005 }
 57:
            michal = _closure1_slot1;
            michal = michal.bind(report)(zuuluu);
            if(!michal) { _fun00006_ip = 163; continue _fun00005 }
 72:
            oscard = _closure1_slot0;
            report = oscard.getUserSubscriptionRoles;
            michal = zuuluu.guildId;
            michal = report.bind(oscard)(michal);
            var _closure2_slot0 = michal;
            report = zuuluu.roles;
            michal = report.some;
            entity = function(argFoo) {
                zuuluu = _closure2_slot0;
                michal = zuuluu.has;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = michal.bind(report)(entity);
            report = zuuluu.guildId;
            entity = argBar;
            entity = entity === report;
            if(!entity) { _fun00006_ip = 153; continue _fun00005 }
 133:
            report = _closure1_slot0;
            tangon = report.getUserIsAdmin;
            zuuluu = zuuluu.guildId;
            entity = tangon.bind(report)(zuuluu);
 153:
            if(michal) { _fun00006_ip = 163; continue _fun00005 }
 156:
            if(entity) { _fun00006_ip = 163; continue _fun00005 }
 159:
            entity = true;
            return entity;
 163:
            entity = false;
            return entity;
 167:
            entity = false;
            return entity;
        }
    };
    zuuluu['isUnusableRoleSubscriptionEmoji'] = michal;
    return entity;
})();