// app/modules/guild_boosting/native/RoleIconUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot5 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_boosting/native/RoleIconUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) {
        _fun64859: for(var _fun64859_ip = 0; ; ) switch(_fun64859_ip) {
 0:
            mike = argFoo;
            zulu = mike.guildId;
            var _closure2_slot0 = zulu;
            oscar = mike.roleId;
            var _closure2_slot1 = oscar;
            report = mike.size;
            options = undefined;
            if(!(report === options)) { _fun64859_ip = 38; continue _fun64859 }
 35:
            report = 20;
 38:
            var _closure2_slot2 = report;
            var _closure2_slot3 = options;
            var _closure2_slot4 = options;
            golf = _closure1_slot0;
            verify = _closure1_slot2;
            tango = 3;
            tango = verify[tango];
            verify = golf.bind(options)(tango);
            options = verify.useStateFromStoresObject;
            tango = _closure1_slot4;
            golf = new Array(1);
            golf[0] = tango;
            tango = new Array(1);
            tango[0] = zulu;
            zulu = function() {
                _fun64860: for(var _fun64860_ip = 0; ; ) switch(_fun64860_ip) {
 0:
                    entity = {};
                    oscar = _closure1_slot4;
                    mike = oscar.getGuild;
                    report = _closure2_slot0;
                    mike = mike.bind(oscar)(report);
                    entity['guild'] = mike;
                    mike = null;
                    report = mike != report;
                    mike = undefined;
                    if(!report) { _fun64860_ip = 60; continue _fun64860 }
 41:
                    report = _closure1_slot4;
                    tango = report.getRoles;
                    zulu = _closure2_slot0;
                    mike = tango.bind(report)(zulu);
 60:
                    entity['roles'] = mike;
                    return entity;
                }
            };
            zulu = options.bind(verify)(golf, zulu, tango);
            options = zulu.guild;
            _closure2_slot3 = options;
            golf = zulu.roles;
            _closure2_slot4 = golf;
            tango = _closure1_slot3;
            zulu = tango.useMemo;
            mike = new Array(4);
            mike[0] = options;
            mike[1] = golf;
            mike[2] = oscar;
            mike[3] = report;
            entity = function() {
                _fun64861: for(var _fun64861_ip = 0; ; ) switch(_fun64861_ip) {
 0:
                    entity = _closure2_slot3;
                    mike = null;
                    if(!(mike != entity)) { _fun64861_ip = 167; continue _fun64861 }
 16:
                    entity = _closure2_slot4;
                    if(!(mike != entity)) { _fun64861_ip = 167; continue _fun64861 }
 27:
                    entity = _closure2_slot1;
                    if(!(mike != entity)) { _fun64861_ip = 167; continue _fun64861 }
 38:
                    zulu = _closure2_slot4;
                    entity = _closure2_slot1;
                    oscar = zulu[entity];
                    golf = _closure1_slot0;
                    zulu = _closure1_slot2;
                    options = 4;
                    zulu = zulu[options];
                    tango = undefined;
                    verify = golf.bind(tango)(zulu);
                    golf = verify.canGuildUseRoleIcons;
                    zulu = _closure2_slot3;
                    zulu = golf.bind(verify)(zulu, oscar);
                    if(!zulu) { _fun64861_ip = 167; continue _fun64861 }
 94:
                    golf = _closure1_slot0;
                    zulu = _closure1_slot2;
                    zulu = zulu[options];
                    golf = golf.bind(tango)(zulu);
                    zulu = golf.getRoleIconData;
                    zulu = zulu.bind(golf)(oscar);
                    if(!(mike == zulu)) { _fun64861_ip = 128; continue _fun64861 }
 126:
                    zulu = {};
 128:
                    verify = zulu.customIconSrc;
                    golf = zulu.unicodeEmoji;
                    zulu = mike != verify;
                    options = undefined;
                    if(!zulu) { _fun64861_ip = 159; continue _fun64861 }
 149:
                    zulu = {};
                    zulu['uri'] = verify;
                    options = zulu;
 159:
                    if(!(mike == options)) { _fun64861_ip = 171; continue _fun64861 }
 163:
                    if(!(mike == golf)) { _fun64861_ip = 171; continue _fun64861 }
 167:
                    mike = undefined;
                    return mike;
 171:
                    zulu = _closure1_slot5;
                    mike = _closure1_slot1;
                    verify = _closure1_slot2;
                    entity = 5;
                    entity = verify[entity];
                    mike = mike.bind(tango)(entity);
                    entity = {};
                    entity['source'] = options;
                    entity['unicodeEmoji'] = golf;
                    oscar = oscar.name;
                    entity['name'] = oscar;
                    report = _closure2_slot2;
                    entity['size'] = report;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                }
            };
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        }
    };
    zulu['useRoleIcon'] = tango;
    mike = function(argFoo) { // Original name: getRoleIcon
        _fun64862: for(var _fun64862_ip = 0; ; ) switch(_fun64862_ip) {
 0:
            entity = argFoo;
            tango = entity.guildId;
            golf = entity.roleId;
            report = entity.size;
            zulu = _closure1_slot4;
            entity = zulu.getGuild;
            verify = entity.bind(zulu)(tango);
            zulu = null;
            if(!(zulu != verify)) { _fun64862_ip = 182; continue _fun64862 }
 45:
            if(!(zulu != golf)) { _fun64862_ip = 182; continue _fun64862 }
 52:
            oscar = _closure1_slot4;
            tango = oscar.getRole;
            entity = verify.id;
            oscar = tango.bind(oscar)(entity, golf);
            if(!(zulu != oscar)) { _fun64862_ip = 182; continue _fun64862 }
 77:
            tango = _closure1_slot0;
            entity = _closure1_slot2;
            options = 4;
            entity = entity[options];
            golf = undefined;
            tango = tango.bind(golf)(entity);
            entity = tango.canGuildUseRoleIcons;
            entity = entity.bind(tango)(verify, oscar);
            if(!entity) { _fun64862_ip = 182; continue _fun64862 }
 114:
            tango = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[options];
            tango = tango.bind(golf)(entity);
            entity = tango.getRoleIconData;
            entity = entity.bind(tango)(oscar);
            if(!(zulu == entity)) { _fun64862_ip = 148; continue _fun64862 }
 146:
            entity = {};
 148:
            options = entity.customIconSrc;
            tango = entity.unicodeEmoji;
            if(!(zulu == options)) { _fun64862_ip = 186; continue _fun64862 }
 164:
            verify = zulu == tango;
            entity = undefined;
            if(verify) { _fun64862_ip = 178; continue _fun64862 }
 173:
            entity = tango.surrogates;
 178:
            if(!(zulu == entity)) { _fun64862_ip = 186; continue _fun64862 }
 182:
            entity = undefined;
            return entity;
 186:
            entity = {};
            entity['source'] = options;
            options = oscar.name;
            entity['name'] = options;
            entity['size'] = report;
            report = zulu == tango;
            zulu = undefined;
            if(report) { _fun64862_ip = 219; continue _fun64862 }
 214:
            zulu = tango.surrogates;
 219:
            entity['unicodeEmoji'] = zulu;
            zulu = _closure1_slot0;
            options = _closure1_slot2;
            mike = 6;
            tango = options[mike];
            tango = zulu.bind(golf)(tango);
            report = tango.intl;
            tango = report.formatToPlainString;
            mike = options[mike];
            mike = zulu.bind(golf)(mike);
            mike = mike.t;
            zulu = mike.9+YWrK;
            mike = {};
            oscar = oscar.name;
            mike['name'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            entity['alt'] = mike;
            return entity;
        }
    };
    zulu['getRoleIcon'] = mike;
    return entity;
})();