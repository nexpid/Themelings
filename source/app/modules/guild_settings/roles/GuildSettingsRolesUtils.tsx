// app/modules/guild_settings/roles/GuildSettingsRolesUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun126107: for(var _fun126107_ip = 0; ; ) switch(_fun126107_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun126107_ip = 46; continue _fun126107 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun126107_ip = 55; continue _fun126107 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun126107_ip = 345; continue _fun126107 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun126107_ip = 323; continue _fun126107 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun126107_ip = 283; continue _fun126107 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun126107_ip = 270; continue _fun126107 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun126107_ip = 163; continue _fun126107 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun126107_ip = 179; continue _fun126107 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun126107_ip = 249; continue _fun126107 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun126107_ip = 249; continue _fun126107 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun126107_ip = 234; continue _fun126107 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun126107_ip = 247; continue _fun126107 }
 234:
            verify = _closure1_slot9;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun126107_ip = 265; continue _fun126107;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun126107_ip = 283; continue _fun126107;
 270:
            golf = _closure1_slot9;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun126107_ip = 323; continue _fun126107 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun126107_ip = 330; continue _fun126107 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun126108: for(var _fun126108_ip = 0; ; ) switch(_fun126108_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun126108_ip = 56; continue _fun126108 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun126108_ip = 67; continue _fun126108;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun126109: for(var _fun126109_ip = 0; ; ) switch(_fun126109_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun126109_ip = 23; continue _fun126109 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun126109_ip = 33; continue _fun126109 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun126109_ip = 70; continue _fun126109 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun126109_ip = 55; continue _fun126109 }
 70:
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    tango = function(argFoo, argBar) { // Original name: useGuildMembers
        report = argFoo;
        golf = argBar;
        var _closure2_slot0 = report;
        var _closure2_slot1 = golf;
        oscar = _closure1_slot0;
        options = _closure1_slot2;
        zulu = 5;
        verify = options[zulu];
        tango = undefined;
        romeo = oscar.bind(tango)(verify);
        yankee = romeo.useStateFromStoresArray;
        verify = _closure1_slot4;
        offset = new Array(1);
        offset[0] = verify;
        verify = new Array(2);
        verify[0] = report;
        verify[1] = golf;
        golf = function() {
            _fun126111: for(var _fun126111_ip = 0; ; ) switch(_fun126111_ip) {
 0:
                tango = _closure1_slot4;
                zulu = tango.getMembers;
                entity = _closure2_slot0;
                tango = zulu.bind(tango)(entity);
                report = _closure2_slot1;
                zulu = null;
                entity = tango;
                if(!(zulu != report)) { _fun126111_ip = 52; continue _fun126111 }
 38:
                zulu = tango.filter;
                mike = _closure2_slot1;
                entity = zulu.bind(tango)(mike);
 52:
                return entity;
            }
        };
        golf = yankee.bind(romeo)(offset, golf, verify);
        var _closure2_slot2 = golf;
        zulu = options[zulu];
        verify = oscar.bind(tango)(zulu);
        options = verify.useStateFromStoresObject;
        zulu = _closure1_slot5;
        oscar = new Array(1);
        oscar[0] = zulu;
        tango = new Array(1);
        tango[0] = golf;
        zulu = function() {
            tango = _closure2_slot2;
            zulu = tango.reduce;
            mike = function(argFoo, argBar) {
                _fun126113: for(var _fun126113_ip = 0; ; ) switch(_fun126113_ip) {
 0:
                    entity = argFoo;
                    mike = argBar;
                    report = _closure1_slot5;
                    tango = report.getUser;
                    zulu = mike.userId;
                    zulu = tango.bind(report)(zulu);
                    tango = null;
                    if(!(tango != zulu)) { _fun126113_ip = 44; continue _fun126113 }
 35:
                    mike = mike.userId;
                    entity[mike] = zulu;
 44:
                    return entity;
                }
            };
            entity = {};
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        oscar = options.bind(verify)(oscar, zulu, tango);
        var _closure2_slot3 = oscar;
        tango = _closure1_slot3;
        zulu = tango.useMemo;
        mike = new Array(3);
        mike[0] = golf;
        mike[1] = oscar;
        mike[2] = report;
        entity = function() {
            _fun126114: for(var _fun126114_ip = 0; ; ) switch(_fun126114_ip) {
 0:
                entity = new Array(0);
                zulu = _closure1_slot8;
                mike = _closure2_slot2;
                verify = undefined;
                options = zulu.bind(verify)(mike);
                zulu = options.bind(verify)();
                mike = zulu.done;
                golf = 6;
                oscar = 80;
                report = null;
                tango = zulu;
                zulu = undefined;
                if(mike) { _fun126114_ip = 285; continue _fun126114 }
 53:
                kilo = tango.value;
                romeo = _closure2_slot3;
                mike = kilo.userId;
                backup = romeo[mike];
                if(!(report != backup)) { _fun126114_ip = 267; continue _fun126114 }
 78:
                foxtrot = entity.push;
                romeo = {};
                mike = kilo.nick;
                sizing = mike;
                if(!(report == mike)) { _fun126114_ip = 126; continue _fun126114 }
 98:
                result = _closure1_slot1;
                output = _closure1_slot2;
                output = output[golf];
                result = result.bind(verify)(output);
                output = result.getName;
                sizing = output.bind(result)(backup);
 126:
                romeo['name'] = sizing;
                output = _closure1_slot1;
                sizing = _closure1_slot2;
                sizing = sizing[golf];
                output = output.bind(verify)(sizing);
                sizing = output.getUserTag;
                sizing = sizing.bind(output)(backup);
                romeo['userTag'] = sizing;
                sizing = kilo.userId;
                romeo['id'] = sizing;
                sizing = backup.getAvatarSource;
                output = _closure2_slot0;
                sizing = sizing.bind(backup)(output);
                romeo['avatarSource'] = sizing;
                sizing = backup.getAvatarURL;
                sizing = sizing.bind(backup)(output, oscar);
                romeo['avatarURL'] = sizing;
                sizing = backup.bot;
                romeo['bot'] = sizing;
                sizing = backup.isVerifiedBot;
                sizing = sizing.bind(backup)();
                romeo['verifiedBot'] = sizing;
                sizing = kilo.roles;
                romeo['roles'] = sizing;
                kilo = kilo.userId;
                romeo['key'] = kilo;
                romeo['user'] = backup;
                romeo = foxtrot.bind(entity)(romeo);
                zulu = mike;
 267:
                romeo = options.bind(verify)();
                mike = romeo.done;
                tango = romeo;
                if(!mike) { _fun126114_ip = 53; continue _fun126114 }
 285:
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot10 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    verify = golf[entity];
    report = argCorge;
    entity = undefined;
    report = report.bind(entity)(verify);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.GuildSettingsRoleEditSections;
    var _closure1_slot6 = report;
    report = 4;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.AnalyticEvents;
    var _closure1_slot7 = report;
    report = 12;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/guild_settings/roles/GuildSettingsRolesUtils.tsx';
    report = oscar.bind(golf)(report);
    report = 50;
    zulu['ADD_MEMBER_QUERY_LIMIT'] = report;
    report = 1000;
    zulu['MAX_PREFETCH_MEMBER_COUNT'] = report;
    zulu['useGuildMembers'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: useGuildRoleMembers
        tango = argFoo;
        golf = argBar;
        oscar = argBaz;
        var _closure2_slot0 = tango;
        var _closure2_slot1 = golf;
        var _closure2_slot2 = oscar;
        report = _closure1_slot3;
        zulu = report.useRef;
        zulu = zulu.bind(report)(oscar);
        var _closure2_slot3 = zulu;
        oscar = _closure1_slot3;
        report = oscar.useEffect;
        zulu = function() {
            mike = _closure2_slot3;
            entity = _closure2_slot2;
            mike['current'] = entity;
            entity = undefined;
            return entity;
        };
        zulu = report.bind(oscar)(zulu);
        options = _closure1_slot3;
        oscar = options.useEffect;
        report = new Array(2);
        report[0] = tango;
        report[1] = golf;
        zulu = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 7;
            mike = mike[entity];
            entity = undefined;
            oscar = zulu.bind(entity)(mike);
            report = oscar.requestMembersForRole;
            tango = _closure2_slot0;
            zulu = _closure2_slot1;
            tango = report.bind(oscar)(tango, zulu);
            zulu = tango.catch;
            mike = _closure2_slot3;
            mike = mike.current;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        zulu = oscar.bind(options)(zulu, report);
        oscar = _closure1_slot3;
        report = oscar.useCallback;
        zulu = new Array(1);
        zulu[0] = golf;
        mike = function(argFoo) {
            entity = argFoo;
            zulu = entity.roles;
            mike = zulu.includes;
            entity = _closure2_slot1;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        zulu = report.bind(oscar)(mike, zulu);
        mike = _closure1_slot10;
        entity = undefined;
        entity = mike.bind(entity)(tango, zulu);
        return entity;
    };
    zulu['useGuildRoleMembers'] = tango;
    tango = function(argFoo, argBar) { // Original name: useQueryGuildMembers
        oscar = argFoo;
        report = argBar;
        var _closure2_slot0 = oscar;
        var _closure2_slot1 = report;
        golf = _closure1_slot3;
        tango = golf.useRef;
        zulu = false;
        zulu = tango.bind(golf)(zulu);
        var _closure2_slot2 = zulu;
        tango = _closure1_slot3;
        zulu = tango.useEffect;
        mike = new Array(2);
        mike[0] = oscar;
        mike[1] = report;
        entity = function() {
            _fun126120: for(var _fun126120_ip = 0; ; ) switch(_fun126120_ip) {
 0:
                tango = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 8;
                mike = mike[entity];
                entity = undefined;
                options = tango.bind(entity)(mike);
                golf = options.requestMembers;
                oscar = _closure2_slot0;
                report = _closure2_slot1;
                tango = 200;
                tango = golf.bind(options)(oscar, report, tango);
                tango = '';
                tango = tango === report;
                if(tango) { _fun126120_ip = 72; continue _fun126120 }
 63:
                report = _closure2_slot2;
                tango = report.current;
 72:
                if(tango) { _fun126120_ip = 141; continue _fun126120 }
 75:
                report = _closure1_slot1;
                oscar = _closure1_slot2;
                tango = 9;
                tango = oscar[tango];
                oscar = report.bind(entity)(tango);
                report = oscar.track;
                zulu = _closure1_slot7;
                tango = zulu.SEARCH_STARTED;
                zulu = {};
                golf = 'Role Members';
                zulu['search_type'] = golf;
                zulu = report.bind(oscar)(tango, zulu);
                zulu = _closure2_slot2;
                mike = true;
                zulu['current'] = mike;
 141:
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        entity = undefined;
        return entity;
    };
    zulu['useQueryGuildMembers'] = tango;
    tango = function(argFoo, argBar) { // Original name: filterFullMembersByQuery
        _fun126121: for(var _fun126121_ip = 0; ; ) switch(_fun126121_ip) {
 0:
            zulu = argFoo;
            mike = argBar;
            entity = zulu.trim;
            zulu = entity.bind(zulu)();
            entity = zulu.toLowerCase;
            report = entity.bind(zulu)();
            entity = mike.id;
            entity = entity === report;
            if(entity) { _fun126121_ip = 84; continue _fun126121 }
 38:
            tango = _closure1_slot1;
            oscar = _closure1_slot2;
            zulu = 10;
            zulu = oscar[zulu];
            oscar = undefined;
            tango = tango.bind(oscar)(zulu);
            golf = mike.name;
            zulu = golf.toLowerCase;
            zulu = zulu.bind(golf)();
            entity = tango.bind(oscar)(report, zulu);
 84:
            if(entity) { _fun126121_ip = 134; continue _fun126121 }
 87:
            oscar = _closure1_slot1;
            tango = _closure1_slot2;
            zulu = 10;
            zulu = tango[zulu];
            tango = undefined;
            zulu = oscar.bind(tango)(zulu);
            oscar = mike.userTag;
            mike = oscar.toLowerCase;
            mike = mike.bind(oscar)();
            entity = zulu.bind(tango)(report, mike);
 134:
            return entity;
        }
    };
    zulu['filterFullMembersByQuery'] = tango;
    tango = function(argFoo) { // Original name: getSectionAnalyticsName
        _fun126122: for(var _fun126122_ip = 0; ; ) switch(_fun126122_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot6;
            mike = mike.MEMBERS;
            if(!(mike !== tango)) { _fun126122_ip = 119; continue _fun126122 }
 20:
            mike = _closure1_slot6;
            mike = mike.PERMISSIONS;
            if(!(mike !== tango)) { _fun126122_ip = 113; continue _fun126122 }
 34:
            mike = _closure1_slot6;
            mike = mike.DISPLAY;
            if(!(mike !== tango)) { _fun126122_ip = 105; continue _fun126122 }
 48:
            mike = _closure1_slot6;
            mike = mike.VERIFICATIONS;
            if(!(mike !== tango)) { _fun126122_ip = 97; continue _fun126122 }
 62:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 11;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.assertNever;
            mike = mike.bind(zulu)(tango);
            return entity;
 97:
            entity = 'Connections';
            return entity;
 105:
            entity = 'Role Settings';
            return entity;
 113:
            entity = 'Permissions';
            return entity;
 119:
            entity = 'Members';
            return entity;
        }
    };
    zulu['getSectionAnalyticsName'] = tango;
    mike = function(argFoo, argBar) { // Original name: filterRole
        _fun126123: for(var _fun126123_ip = 0; ; ) switch(_fun126123_ip) {
 0:
            report = argBar;
            entity = '';
            entity = entity === report;
            if(entity) { _fun126123_ip = 52; continue _fun126123 }
 14:
            mike = argFoo;
            zulu = mike.name;
            mike = zulu.toLowerCase;
            tango = mike.bind(zulu)();
            zulu = tango.includes;
            mike = report.toLowerCase;
            mike = mike.bind(report)();
            entity = zulu.bind(tango)(mike);
 52:
            return entity;
        }
    };
    zulu['filterRole'] = mike;
    return entity;
})();