// app/modules/guild_role_subscriptions/RoleSubscriptionEmojiUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    zulu = argFred;
    oscar = argPlugh;
    tango = function(argFoo) { // Original name: isPurchasableRoleSubscriptionEmoji
        _fun44431: for(var _fun44431_ip = 0; ; ) switch(_fun44431_ip) {
 0:
            mike = argFoo;
            tango = null;
            report = tango == mike;
            zulu = undefined;
            if(report) { _fun44431_ip = 22; continue _fun44431 }
 16:
            zulu = mike.roles;
 22:
            if(!(tango != zulu)) { _fun44431_ip = 105; continue _fun44431 }
 26:
            zulu = mike.roles;
            report = zulu.length;
            zulu = 0;
            if(!(zulu !== report)) { _fun44431_ip = 105; continue _fun44431 }
 43:
            zulu = mike.guildId;
            if(!(tango != zulu)) { _fun44431_ip = 105; continue _fun44431 }
 52:
            report = _closure1_slot0;
            tango = report.getPurchasableSubscriptionRoles;
            zulu = mike.guildId;
            zulu = tango.bind(report)(zulu);
            var _closure2_slot0 = zulu;
            zulu = mike.roles;
            mike = zulu.some;
            entity = function(argFoo) {
                zulu = _closure2_slot0;
                mike = zulu.has;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
 105:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot1 = tango;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, report);
    entity = 0;
    golf = oscar[entity];
    report = argBaz;
    entity = undefined;
    report = report.bind(entity)(golf);
    var _closure1_slot0 = report;
    report = 1;
    oscar = oscar[report];
    report = argBar;
    golf = report.bind(entity)(oscar);
    oscar = golf.fileFinishedImporting;
    report = 'modules/guild_role_subscriptions/RoleSubscriptionEmojiUtils.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo, argBar) { // Original name: isRoleSubscriptionEmoji
        _fun44433: for(var _fun44433_ip = 0; ; ) switch(_fun44433_ip) {
 0:
            mike = argFoo;
            report = argBar;
            zulu = null;
            oscar = zulu == mike;
            tango = undefined;
            if(oscar) { _fun44433_ip = 25; continue _fun44433 }
 19:
            tango = mike.roles;
 25:
            if(!(zulu != tango)) { _fun44433_ip = 96; continue _fun44433 }
 29:
            tango = mike.roles;
            oscar = tango.length;
            tango = 0;
            if(!(tango !== oscar)) { _fun44433_ip = 96; continue _fun44433 }
 46:
            if(!(zulu != report)) { _fun44433_ip = 96; continue _fun44433 }
 50:
            tango = _closure1_slot0;
            zulu = tango.getSubscriptionRoles;
            zulu = zulu.bind(tango)(report);
            var _closure2_slot0 = zulu;
            zulu = mike.roles;
            mike = zulu.some;
            entity = function(argFoo) {
                zulu = _closure2_slot0;
                mike = zulu.has;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
 96:
            entity = false;
            return entity;
        }
    };
    zulu['isRoleSubscriptionEmoji'] = report;
    zulu['isPurchasableRoleSubscriptionEmoji'] = tango;
    mike = function(argFoo, argBar) { // Original name: isUnusableRoleSubscriptionEmoji
        _fun44435: for(var _fun44435_ip = 0; ; ) switch(_fun44435_ip) {
 0:
            zulu = argFoo;
            tango = null;
            oscar = tango == zulu;
            report = undefined;
            mike = undefined;
            if(oscar) { _fun44435_ip = 24; continue _fun44435 }
 18:
            mike = zulu.roles;
 24:
            if(!(tango != mike)) { _fun44435_ip = 167; continue _fun44435 }
 31:
            mike = zulu.roles;
            oscar = mike.length;
            mike = 0;
            if(!(mike !== oscar)) { _fun44435_ip = 167; continue _fun44435 }
 48:
            mike = zulu.guildId;
            if(!(tango != mike)) { _fun44435_ip = 167; continue _fun44435 }
 57:
            mike = _closure1_slot1;
            mike = mike.bind(report)(zulu);
            if(!mike) { _fun44435_ip = 163; continue _fun44435 }
 72:
            oscar = _closure1_slot0;
            report = oscar.getUserSubscriptionRoles;
            mike = zulu.guildId;
            mike = report.bind(oscar)(mike);
            var _closure2_slot0 = mike;
            report = zulu.roles;
            mike = report.some;
            entity = function(argFoo) {
                zulu = _closure2_slot0;
                mike = zulu.has;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = mike.bind(report)(entity);
            report = zulu.guildId;
            entity = argBar;
            entity = entity === report;
            if(!entity) { _fun44435_ip = 153; continue _fun44435 }
 133:
            report = _closure1_slot0;
            tango = report.getUserIsAdmin;
            zulu = zulu.guildId;
            entity = tango.bind(report)(zulu);
 153:
            if(mike) { _fun44435_ip = 163; continue _fun44435 }
 156:
            if(entity) { _fun44435_ip = 163; continue _fun44435 }
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
    zulu['isUnusableRoleSubscriptionEmoji'] = mike;
    return entity;
})();