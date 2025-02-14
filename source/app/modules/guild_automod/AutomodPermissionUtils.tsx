// app/modules/guild_automod/AutomodPermissionUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    options = argBar;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = verify;
    report = function(argFoo) { // Original name: getAutomodQuarantinedProfileFlags
        _fun44231: for(var _fun44231_ip = 0; ; ) switch(_fun44231_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            mike = null;
            if(!(mike != zulu)) { _fun44231_ip = 73; continue _fun44231 }
 15:
            mike = global;
            zulu = mike.Set;
            report = _closure1_slot3;
            tango = report.reduce;
            mike = function(argFoo, argBar) {
                _fun44232: for(var _fun44232_ip = 0; ; ) switch(_fun44232_ip) {
 0:
                    entity = argFoo;
                    zulu = argBar;
                    report = _closure1_slot0;
                    tango = _closure1_slot1;
                    mike = 2;
                    tango = tango[mike];
                    mike = undefined;
                    report = report.bind(mike)(tango);
                    tango = report.hasFlag;
                    golf = _closure2_slot0;
                    mike = null;
                    golf = mike != golf;
                    mike = 0;
                    if(!golf) { _fun44232_ip = 59; continue _fun44232 }
 55:
                    mike = _closure2_slot0;
 59:
                    mike = tango.bind(report)(mike, zulu);
                    if(!mike) { _fun44232_ip = 78; continue _fun44232 }
 68:
                    mike = entity.push;
                    mike = mike.bind(entity)(zulu);
 78:
                    return entity;
                }
            };
            entity = new Array(0);
            golf = tango.bind(report)(mike, entity);
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            options = mike;
            entity = new options[zulu](golf, oscar);
            entity = entity instanceof Object ? entity : mike;
            _fun44231_ip = 101; continue _fun44231;
 73:
            mike = global;
            mike = mike.Set;
            zulu = mike.prototype;
            zulu = Object.create(zulu, {constructor: {value: mike}});
            options = zulu;
            mike = new options[mike](golf);
            entity = mike instanceof Object ? mike : zulu;
 101:
            return entity;
        }
    };
    var _closure1_slot4 = report;
    tango = function(argFoo) { // Original name: hasAutomodQuarantinedProfile
        _fun44233: for(var _fun44233_ip = 0; ; ) switch(_fun44233_ip) {
 0:
            mike = argFoo;
            var _closure2_slot0 = mike;
            tango = null;
            entity = tango != mike;
            if(!entity) { _fun44233_ip = 56; continue _fun44233 }
 18:
            mike = mike.flags;
            mike = tango != mike;
            if(!mike) { _fun44233_ip = 53; continue _fun44233 }
 30:
            report = _closure1_slot3;
            tango = report.some;
            zulu = function(argFoo) {
                _fun44234: for(var _fun44234_ip = 0; ; ) switch(_fun44234_ip) {
 0:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot1;
                    entity = 2;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.hasFlag;
                    entity = _closure2_slot0;
                    entity = entity.flags;
                    mike = null;
                    report = mike != entity;
                    mike = 0;
                    if(!report) { _fun44234_ip = 57; continue _fun44234 }
 54:
                    mike = entity;
 57:
                    entity = argFoo;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                }
            };
            mike = tango.bind(report)(zulu);
 53:
            entity = mike;
 56:
            return entity;
        }
    };
    var _closure1_slot5 = tango;
    entity = global;
    offset = entity.Object;
    golf = offset.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(offset)(zulu, entity, oscar);
    entity = 0;
    golf = verify[entity];
    oscar = argBaz;
    entity = undefined;
    oscar = oscar.bind(entity)(golf);
    var _closure1_slot2 = oscar;
    oscar = 1;
    oscar = verify[oscar];
    oscar = options.bind(entity)(oscar);
    golf = oscar.GuildMemberFlags;
    offset = golf.AUTOMOD_QUARANTINED_BIO;
    oscar = new Array(3);
    oscar[0] = offset;
    offset = golf.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME;
    oscar[1] = offset;
    golf = golf.AUTOMOD_QUARANTINED_CLAN_TAG;
    oscar[2] = golf;
    var _closure1_slot3 = oscar;
    golf = 4;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/guild_automod/AutomodPermissionUtils.tsx';
    golf = options.bind(verify)(golf);
    zulu['AUTOMOD_QUARANTINED_PROFILE_FLAGS'] = oscar;
    zulu['getAutomodQuarantinedProfileFlags'] = report;
    report = function(argFoo) { // Original name: getAutomodQuarantinedGuildMemberFlags
        _fun44235: for(var _fun44235_ip = 0; ; ) switch(_fun44235_ip) {
 0:
            entity = argFoo;
            mike = null;
            if(!(mike != entity)) { _fun44235_ip = 30; continue _fun44235 }
 9:
            zulu = _closure1_slot4;
            mike = entity.flags;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            _fun44235_ip = 58; continue _fun44235;
 30:
            mike = global;
            mike = mike.Set;
            zulu = mike.prototype;
            zulu = Object.create(zulu, {constructor: {value: mike}});
            report = zulu;
            mike = new report[mike](tango);
            entity = mike instanceof Object ? mike : zulu;
 58:
            return entity;
        }
    };
    zulu['getAutomodQuarantinedGuildMemberFlags'] = report;
    zulu['hasAutomodQuarantinedProfile'] = tango;
    mike = function(argFoo) { // Original name: useCurrentUserAutomodQuaratinedProfile
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 3;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStores;
        mike = _closure1_slot2;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = new Array(1);
        mike[0] = oscar;
        entity = function() {
            _fun44237: for(var _fun44237_ip = 0; ; ) switch(_fun44237_ip) {
 0:
                zulu = _closure2_slot0;
                entity = null;
                entity = entity != zulu;
                if(!entity) { _fun44237_ip = 49; continue _fun44237 }
 16:
                tango = _closure1_slot5;
                report = _closure1_slot2;
                zulu = report.getSelfMember;
                mike = _closure2_slot0;
                zulu = zulu.bind(report)(mike);
                mike = undefined;
                entity = tango.bind(mike)(zulu);
 49:
                return entity;
            }
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['useCurrentUserAutomodQuaratinedProfile'] = mike;
    return entity;
})();