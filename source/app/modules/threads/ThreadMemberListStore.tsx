// app/modules/threads/ThreadMemberListStore.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot21;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot5;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 70: // try_end0
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot21 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00006_ip = 46; continue _fun00005 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00006_ip = 55; continue _fun00005 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00006_ip = 343; continue _fun00005 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00006_ip = 323; continue _fun00005 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00006_ip = 283; continue _fun00005 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00006_ip = 270; continue _fun00005 }
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
            if(!golf) { _fun00006_ip = 163; continue _fun00005 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00006_ip = 179; continue _fun00005 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00006_ip = 249; continue _fun00005 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00006_ip = 249; continue _fun00005 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00006_ip = 234; continue _fun00005 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00006_ip = 247; continue _fun00005 }
 234:
            verify = _closure1_slot23;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00006_ip = 265; continue _fun00005;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00006_ip = 283; continue _fun00005;
 270:
            golf = _closure1_slot23;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00006_ip = 323; continue _fun00005 }
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
            if(!tango) { _fun00006_ip = 330; continue _fun00005 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00008_ip = 56; continue _fun00007 }
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
                    _fun00008_ip = 67; continue _fun00007;
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
 343:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00010_ip = 23; continue _fun00009 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00010_ip = 33; continue _fun00009 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00010_ip = 70; continue _fun00009 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00010_ip = 55; continue _fun00009 }
 70:
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    offset = function(argFoo) { // Original name: handleUserUpdate
        zulu = _closure1_slot24;
        entity = argFoo;
        entity = entity.user;
        mike = entity.id;
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        return entity;
    };
    entity = function(argFoo) { // Original name: updateUserId
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            offset = argFoo;
            entity = null;
            if(!(entity != offset)) { _fun00012_ip = 71; continue _fun00011 }
 9:
            options = _closure1_slot18;
            mike = false;
            entity = false;
            for(tango in options)
 28:
            {
                entity = mike;
 40:
                romeo = tango;
                yankee = _closure1_slot18;
                romeo = yankee[romeo];
                yankee = romeo.updateUserId;
                yankee = yankee.bind(romeo)(offset);
                if(!yankee) { _fun00012_ip = 28; continue _fun00011 }
 65:
                mike = true;
                _fun00012_ip = 28; continue _fun00011;
            }
 69:
            return entity;
 71:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    verify = function(argFoo) { // Original name: handleGuildRoleUpdateOrDelete
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            offset = entity.guildId;
            options = _closure1_slot18;
            mike = false;
            entity = false;
            for(tango in options)
 27:
            {
                entity = mike;
 39:
                romeo = tango;
                yankee = _closure1_slot18;
                yankee = yankee[romeo];
                yankee = yankee.guildId;
                if(yankee !== offset) { _fun00014_ip = 27; continue _fun00013 }
 59:
                yankee = _closure1_slot18;
                romeo = yankee[romeo];
                yankee = romeo.rebuild;
                yankee = yankee.bind(romeo)();
                mike = true;
                _fun00014_ip = 27; continue _fun00013;
            }
 81:
            return entity;
        }
    };
    entity = global;
    yankee = entity.Object;
    options = yankee.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(yankee)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot9 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot10 = mike;
    mike = 7;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot11 = mike;
    mike = 8;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot12 = mike;
    mike = 9;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot13 = mike;
    mike = 10;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot14 = mike;
    mike = 11;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot15 = mike;
    mike = 12;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    options = mike.StatusTypes;
    var _closure1_slot16 = options;
    mike = mike.Permissions;
    var _closure1_slot17 = mike;
    mike = {};
    var _closure1_slot18 = mike;
    mike = function() {
        tango = _closure1_slot9;
        zulu = function(argFoo, argBar, argBaz) { // Original name: MemberList
            zulu = this;
            tango = _closure1_slot8;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = argFoo;
            zulu['guildId'] = mike;
            mike = argBar;
            zulu['parentId'] = mike;
            mike = argBaz;
            zulu['threadId'] = mike;
            mike = 0;
            zulu['version'] = mike;
            mike = {};
            zulu['sections'] = mike;
            mike = global;
            mike = mike.Set;
            tango = mike.prototype;
            tango = Object.create(tango, {constructor: {value: mike}});
            golf = tango;
            mike = new golf[mike](oscar);
            mike = mike instanceof Object ? mike : tango;
            zulu['allUserIds'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'rebuild';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                report = argFoo;
                zulu = this;
                var _closure3_slot0 = zulu;
                entity = zulu.version;
                entity = entity + 1;
                zulu['version'] = entity;
                entity = {};
                zulu['sections'] = entity;
                entity = null;
                if(!(entity != report)) { _fun00016_ip = 78; continue _fun00015 }
 41:
                entity = global;
                entity = entity.Set;
                tango = entity.prototype;
                tango = Object.create(tango, {constructor: {value: entity}});
                options = tango;
                golf = report;
                entity = new options[entity](golf, oscar);
                entity = entity instanceof Object ? entity : tango;
                zulu['allUserIds'] = entity;
 78:
                oscar = _closure1_slot10;
                report = oscar.getChannel;
                tango = zulu.parentId;
                tango = report.bind(oscar)(tango);
                var _closure3_slot1 = tango;
                report = _closure1_slot1;
                tango = _closure1_slot3;
                entity = 13;
                tango = tango[entity];
                entity = undefined;
                tango = report.bind(entity)(tango);
                report = global;
                oscar = report.Array;
                report = oscar.from;
                zulu = zulu.allUserIds;
                zulu = report.bind(oscar)(zulu);
                report = tango.bind(entity)(zulu);
                tango = report.map;
                zulu = function(argFoo) {
                    mike = argFoo;
                    tango = _closure3_slot0;
                    zulu = tango.calculateNewState;
                    entity = _closure3_slot1;
                    report = zulu.bind(tango)(mike, entity);
                    tango = _closure1_slot7;
                    zulu = undefined;
                    entity = 3;
                    zulu = tango.bind(zulu)(report, entity);
                    entity = {};
                    entity['userId'] = mike;
                    mike = 0;
                    mike = zulu[mike];
                    entity['sectionId'] = mike;
                    mike = 1;
                    mike = zulu[mike];
                    entity['displayName'] = mike;
                    mike = 2;
                    mike = zulu[mike];
                    entity['canViewChannel'] = mike;
                    return entity;
                };
                report = tango.bind(report)(zulu);
                tango = report.sort;
                zulu = function(argFoo, argBar) {
                    zulu = _closure1_slot1;
                    mike = _closure1_slot3;
                    entity = 14;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.compare;
                    entity = argFoo;
                    mike = entity.userId;
                    entity = argBar;
                    entity = entity.userId;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                report = tango.bind(report)(zulu);
                tango = report.sortBy;
                zulu = function(argFoo) {
                    entity = argFoo;
                    entity = entity.displayName;
                    return entity;
                };
                tango = tango.bind(report)(zulu);
                zulu = tango.forEach;
                mike = function(argFoo) {
                    entity = argFoo;
                    golf = _closure3_slot0;
                    oscar = golf.addUser;
                    romeo = entity.userId;
                    yankee = entity.sectionId;
                    offset = entity.displayName;
                    verify = entity.canViewChannel;
                    options = true;
                    foxtrot = golf;
                    entity = foxtrot[oscar](romeo, yankee, offset, verify, options, golf);
                    entity = undefined;
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(10);
        mike[0] = entity;
        entity = {};
        oscar = 'updateMultipleUserIds';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                oscar = argFoo;
                report = argBar;
                tango = this;
                var _closure3_slot0 = tango;
                entity = null;
                entity = entity == report;
                if(entity) { _fun00018_ip = 33; continue _fun00017 }
 24:
                mike = tango.guildId;
                entity = mike === report;
 33:
                if(!entity) { _fun00018_ip = 111; continue _fun00017 }
 36:
                report = oscar.filter;
                mike = function(argFoo) {
                    entity = _closure3_slot0;
                    zulu = entity.allUserIds;
                    mike = zulu.has;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                oscar = report.bind(oscar)(mike);
                report = oscar.length;
                mike = 0;
                mike = mike !== report;
                if(!mike) { _fun00018_ip = 108; continue _fun00017 }
 65:
                golf = oscar.length;
                report = 50;
                if(!(!(golf > report))) { _fun00018_ip = 96; continue _fun00017 }
 77:
                report = oscar.forEach;
                zulu = function(argFoo) {
                    zulu = _closure3_slot0;
                    mike = zulu.updateUserId;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                zulu = report.bind(oscar)(zulu);
                mike = true;
                _fun00018_ip = 108; continue _fun00017;
 96:
                zulu = tango.rebuild;
                zulu = zulu.bind(tango)();
                mike = true;
 108:
                entity = mike;
 111:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'updateUserId';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                golf = argFoo;
                oscar = this;
                mike = oscar.allUserIds;
                entity = mike.has;
                entity = entity.bind(mike)(golf);
                if(entity) { _fun00020_ip = 29; continue _fun00019 }
 25:
                entity = false;
                return entity;
 29:
                entity = oscar.findOldState;
                mike = entity.bind(oscar)(golf);
                romeo = _closure1_slot7;
                yankee = undefined;
                offset = 3;
                mike = romeo.bind(yankee)(mike, offset);
                report = 0;
                options = mike[report];
                tango = 1;
                verify = mike[tango];
                zulu = 2;
                mike = mike[zulu];
                foxtrot = oscar.calculateNewState;
                kilo = _closure1_slot10;
                backup = kilo.getChannel;
                entity = oscar.parentId;
                entity = backup.bind(kilo)(entity);
                entity = foxtrot.bind(oscar)(golf, entity);
                entity = romeo.bind(yankee)(entity, offset);
                report = entity[report];
                tango = entity[tango];
                zulu = entity[zulu];
                entity = options !== report;
                if(entity) { _fun00020_ip = 141; continue _fun00019 }
 137:
                entity = verify !== tango;
 141:
                if(entity) { _fun00020_ip = 148; continue _fun00019 }
 144:
                entity = mike !== zulu;
 148:
                if(!entity) { _fun00020_ip = 190; continue _fun00019 }
 151:
                mike = oscar.removeUserId;
                mike = mike.bind(oscar)(golf, options);
                mike = oscar.addUser;
                update = oscar;
                echo = golf;
                result = report;
                output = tango;
                sizing = zulu;
                mike = update[mike](echo, result, output, sizing, kilo);
                entity = true;
 190:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'addUserId';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            golf = argFoo;
            oscar = this;
            zulu = oscar.calculateNewState;
            report = _closure1_slot10;
            tango = report.getChannel;
            mike = oscar.parentId;
            mike = tango.bind(report)(mike);
            tango = zulu.bind(oscar)(golf, mike);
            zulu = _closure1_slot7;
            entity = undefined;
            mike = 3;
            zulu = zulu.bind(entity)(tango, mike);
            mike = 0;
            offset = zulu[mike];
            mike = 1;
            verify = zulu[mike];
            mike = 2;
            options = zulu[mike];
            mike = oscar.addUser;
            romeo = oscar;
            yankee = golf;
            mike = romeo[mike](yankee, offset, verify, options, golf);
            return entity;
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'removeUserId';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                options = argFoo;
                mike = argBar;
                golf = this;
                zulu = golf.allUserIds;
                entity = zulu.delete;
                entity = entity.bind(zulu)(options);
                entity = null;
                if(!(entity != mike)) { _fun00022_ip = 46; continue _fun00021 }
 31:
                entity = golf.removeUserIdFromSection;
                entity = entity.bind(golf)(options, mike);
                if(entity) { _fun00022_ip = 95; continue _fun00021 }
 46:
                report = golf.sections;
                for(mike in report)
 60:
                {
 69:
                    verify = mike;
                    entity = golf.removeUserIdFromSection;
                    entity = entity.bind(golf)(options, verify);
                    if(!entity) { _fun00022_ip = 60; continue _fun00021 }
 87:
                    entity = true;
                    return entity;
                }
 91:
                entity = false;
                return entity;
 95:
                entity = true;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'addUser';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                tango = argFoo;
                zulu = argBar;
                report = argBaz;
                mike = this;
                oscar = mike.allUserIds;
                entity = oscar.add;
                entity = entity.bind(oscar)(tango);
                oscar = _closure1_slot15;
                entity = oscar.getUser;
                entity = entity.bind(oscar)(tango);
                oscar = null;
                if(!(oscar != entity)) { _fun00024_ip = 230; continue _fun00023 }
 55:
                oscar = entity.username;
                entity = '';
                if(!(entity !== oscar)) { _fun00024_ip = 230; continue _fun00023 }
 71:
                entity = mike.sections;
                entity = zulu in entity;
                if(entity) { _fun00024_ip = 117; continue _fun00023 }
 84:
                oscar = mike.sections;
                entity = {};
                entity['sectionId'] = zulu;
                golf = {};
                entity['usersById'] = golf;
                golf = new Array(0);
                entity['userIds'] = golf;
                oscar[zulu] = entity;
 117:
                entity = mike.sections;
                entity = entity[zulu];
                oscar = entity.usersById;
                zulu = {};
                zulu['userId'] = tango;
                zulu['displayName'] = report;
                golf = argCorge;
                zulu['canViewChannel'] = golf;
                oscar[tango] = zulu;
                zulu = argGrault;
                if(zulu) { _fun00024_ip = 199; continue _fun00023 }
 161:
                zulu = mike.findUserIdSortedPosition;
                golf = zulu.bind(mike)(entity, tango, report);
                oscar = entity.userIds;
                report = oscar.splice;
                zulu = 0;
                zulu = report.bind(oscar)(golf, zulu, tango);
                _fun00024_ip = 215; continue _fun00023;
 199:
                zulu = entity.userIds;
                entity = zulu.push;
                entity = entity.bind(zulu)(tango);
 215:
                entity = mike.version;
                entity = entity + 1;
                mike['version'] = entity;
 230:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'findUserIdSortedPosition';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                entity = argFoo;
                options = argBar;
                golf = argBaz;
                mike = entity.userIds;
                oscar = entity.usersById;
                entity = mike.length;
                report = 0;
                entity = report < entity;
                tango = null;
                if(!entity) { _fun00026_ip = 93; continue _fun00025 }
 37:
                zulu = mike[report];
                entity = oscar[zulu];
                verify = entity.displayName;
                entity = report;
                if(!(verify !== golf)) { _fun00026_ip = 77; continue _fun00025 }
 57:
                if(!(tango != verify)) { _fun00026_ip = 71; continue _fun00025 }
 61:
                if(!(tango != golf)) { _fun00026_ip = 81; continue _fun00025 }
 65:
                if(!(golf < verify)) { _fun00026_ip = 81; continue _fun00025 }
 69:
                return entity;
 71:
                if(!(tango != golf)) { _fun00026_ip = 81; continue _fun00025 }
 75:
                return entity;
 77:
                if(!(!(options < zulu))) { _fun00026_ip = 100; continue _fun00025 }
 81:
                report = entity + 1;
                zulu = mike.length;
                if(report < zulu) { _fun00026_ip = 37; continue _fun00025 }
 93:
                mike = mike.length;
                return mike;
 100:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'removeUserIdFromSection';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                golf = argFoo;
                mike = argBar;
                tango = this;
                var _closure3_slot0 = golf;
                entity = tango.sections;
                report = entity[mike];
                entity = null;
                entity = entity != mike;
                if(!entity) { _fun00028_ip = 104; continue _fun00027 }
 34:
                mike = report.usersById;
                mike = golf in mike;
                if(!mike) { _fun00028_ip = 101; continue _fun00027 }
 47:
                oscar = report.usersById;
                oscar = delete oscar[golf];
                golf = report.userIds;
                oscar = golf.filter;
                zulu = function(argFoo) {
                    mike = _closure3_slot0;
                    entity = argFoo;
                    entity = entity !== mike;
                    return entity;
                };
                zulu = oscar.bind(golf)(zulu);
                report['userIds'] = zulu;
                zulu = tango.version;
                zulu = zulu + 1;
                tango['version'] = zulu;
                mike = true;
 101:
                entity = mike;
 104:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[7] = entity;
        entity = {};
        oscar = 'findOldState';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                mike = argFoo;
                offset = this;
                options = offset.sections;
                for(report in options)
 20:
                {
 29:
                    zulu = report;
                    entity = offset.sections;
                    entity = entity[zulu];
                    tango = entity.usersById;
                    tango = mike in tango;
                    if(!tango) { _fun00030_ip = 20; continue _fun00029 }
 55:
                    entity = entity.usersById;
                    mike = entity[mike];
                    entity = new Array(3);
                    entity[0] = zulu;
                    zulu = mike.displayName;
                    entity[1] = zulu;
                    mike = mike.canViewChannel;
                    entity[2] = mike;
                    return entity;
                }
 94:
                entity = new Array(3);
                mike = undefined;
                entity[0] = mike;
                entity[1] = mike;
                mike = false;
                entity[2] = mike;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[8] = entity;
        entity = {};
        oscar = 'calculateNewState';
        entity['key'] = oscar;
        report = function(argFoo, argBar) { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                verify = argFoo;
                yankee = argBar;
                mike = this;
                report = _closure1_slot11;
                tango = report.getMember;
                zulu = mike.guildId;
                golf = tango.bind(report)(zulu, verify);
                tango = _closure1_slot15;
                zulu = tango.getUser;
                options = zulu.bind(tango)(verify);
                zulu = tango.getCurrentUser;
                offset = zulu.bind(tango)();
                tango = null;
                report = tango == options;
                zulu = undefined;
                oscar = undefined;
                if(report) { _fun00032_ip = 75; continue _fun00031 }
 70:
                oscar = options.id;
 75:
                romeo = tango == offset;
                report = undefined;
                if(romeo) { _fun00032_ip = 89; continue _fun00031 }
 84:
                report = offset.id;
 89:
                if(!(oscar !== report)) { _fun00032_ip = 116; continue _fun00031 }
 93:
                oscar = _closure1_slot13;
                report = oscar.getStatus;
                mike = mike.guildId;
                verify = report.bind(oscar)(verify, mike);
                _fun00032_ip = 130; continue _fun00031;
 116:
                report = _closure1_slot14;
                mike = report.getStatus;
                verify = mike.bind(report)();
 130:
                mike = tango != options;
                if(!mike) { _fun00032_ip = 141; continue _fun00031 }
 137:
                mike = tango != yankee;
 141:
                if(!mike) { _fun00032_ip = 200; continue _fun00031 }
 144:
                oscar = _closure1_slot2;
                offset = _closure1_slot3;
                report = 15;
                report = offset[report];
                offset = oscar.bind(zulu)(report);
                oscar = offset.can;
                report = {};
                romeo = _closure1_slot17;
                romeo = romeo.VIEW_CHANNEL;
                report['permission'] = romeo;
                report['user'] = options;
                report['context'] = yankee;
                mike = oscar.bind(offset)(report);
 200:
                report = _closure1_slot16;
                report = report.OFFLINE;
                offset = 'offline';
                oscar = offset;
                if(!(verify !== report)) { _fun00032_ip = 287; continue _fun00031 }
 221:
                report = _closure1_slot16;
                report = report.INVISIBLE;
                oscar = offset;
                if(!(verify !== report)) { _fun00032_ip = 287; continue _fun00031 }
 238:
                report = _closure1_slot16;
                report = report.UNKNOWN;
                oscar = offset;
                if(!(verify !== report)) { _fun00032_ip = 287; continue _fun00031 }
 255:
                report = tango == golf;
                verify = undefined;
                if(report) { _fun00032_ip = 270; continue _fun00031 }
 264:
                verify = golf.hoistRoleId;
 270:
                offset = tango != verify;
                report = 'online';
                if(!offset) { _fun00032_ip = 284; continue _fun00031 }
 281:
                report = verify;
 284:
                oscar = report;
 287:
                verify = tango == golf;
                report = undefined;
                if(verify) { _fun00032_ip = 302; continue _fun00031 }
 296:
                report = golf.nick;
 302:
                if(!(tango == report)) { _fun00032_ip = 337; continue _fun00031 }
 306:
                golf = _closure1_slot1;
                verify = _closure1_slot3;
                entity = 16;
                entity = verify[entity];
                golf = golf.bind(zulu)(entity);
                entity = golf.getName;
                report = entity.bind(golf)(options);
 337:
                entity = new Array(3);
                entity[0] = oscar;
                tango = tango == report;
                zulu = undefined;
                if(tango) { _fun00032_ip = 364; continue _fun00031 }
 354:
                tango = report.toLowerCase;
                zulu = tango.bind(report)();
 364:
                entity[1] = zulu;
                entity[2] = mike;
                return entity;
            }
        };
        entity['value'] = report;
        mike[9] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    var _closure1_slot19 = mike;
    mike = 18;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: ThreadMemberListStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot8;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot20;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot6;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot9;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            tango = this;
            verify = tango.waitFor;
            kilo = _closure1_slot10;
            backup = _closure1_slot11;
            mike = _closure1_slot12;
            romeo = _closure1_slot13;
            report = _closure1_slot14;
            offset = _closure1_slot15;
            sizing = tango;
            foxtrot = mike;
            yankee = report;
            zulu = sizing[verify](kilo, backup, foxtrot, romeo, yankee, offset, verify);
            oscar = tango.syncWith;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    mike = _closure1_slot12;
                    entity = mike.getSubscribedThreadIds;
                    verify = entity.bind(mike)();
                    golf = _closure1_slot18;
                    mike = false;
                    entity = false;
                    for(tango in golf)
 33:
                    {
                        entity = mike;
 45:
                        romeo = tango;
                        yankee = verify.has;
                        yankee = yankee.bind(verify)(romeo);
                        if(yankee) { _fun00034_ip = 33; continue _fun00033 }
 61:
                        yankee = _closure1_slot18;
                        yankee = delete yankee[romeo];
                        mike = true;
                        _fun00034_ip = 33; continue _fun00033;
                    }
 73:
                    return entity;
                }
            };
            mike = oscar.bind(tango)(zulu, mike);
            zulu = tango.syncWith;
            mike = new Array(1);
            mike[0] = report;
            entity = function() {
                _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                    zulu = _closure1_slot24;
                    mike = _closure1_slot15;
                    entity = mike.getCurrentUser;
                    tango = entity.bind(mike)();
                    entity = null;
                    report = entity == tango;
                    mike = undefined;
                    entity = undefined;
                    if(report) { _fun00036_ip = 38; continue _fun00035 }
 33:
                    entity = tango.id;
 38:
                    entity = zulu.bind(mike)(entity);
                    return entity;
                }
            };
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golf = 'getMemberListVersion';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                mike = _closure1_slot18;
                entity = argFoo;
                mike = mike[entity];
                entity = null;
                zulu = entity == mike;
                entity = undefined;
                if(zulu) { _fun00038_ip = 31; continue _fun00037 }
 25:
                entity = mike.version;
 31:
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getMemberListSections';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                mike = _closure1_slot18;
                entity = argFoo;
                mike = mike[entity];
                entity = null;
                zulu = entity == mike;
                entity = undefined;
                if(zulu) { _fun00040_ip = 31; continue _fun00039 }
 25:
                entity = mike.sections;
 31:
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'canUserViewChannel';
        report['key'] = golf;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                mike = _closure1_slot18;
                entity = argFoo;
                mike = mike[entity];
                entity = null;
                if(!(entity != mike)) { _fun00042_ip = 82; continue _fun00041 }
 20:
                zulu = mike.sections;
                mike = argBar;
                tango = zulu[mike];
                report = entity == tango;
                zulu = undefined;
                if(report) { _fun00042_ip = 55; continue _fun00041 }
 42:
                report = tango.usersById;
                tango = argBaz;
                zulu = report[tango];
 55:
                tango = entity == zulu;
                mike = undefined;
                if(tango) { _fun00042_ip = 70; continue _fun00041 }
 64:
                mike = zulu.canViewChannel;
 70:
                entity = entity != mike;
                if(!entity) { _fun00042_ip = 80; continue _fun00041 }
 77:
                entity = mike;
 80:
                return entity;
 82:
                entity = false;
                return entity;
            }
        };
        report['value'] = oscar;
        entity[3] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'ThreadMemberListStore';
    options['displayName'] = mike;
    mike = 19;
    mike = oscar[mike];
    backup = golf.bind(entity)(mike);
    mike = {};
    yankee = function() { // Original name: handleConnectionOpen
        entity = {};
        _closure1_slot18 = entity;
        entity = undefined;
        return entity;
    };
    mike['CONNECTION_OPEN'] = yankee;
    yankee = function(argFoo) { // Original name: handleThreadMembersUpdate
        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            tango = zulu.id;
            mike = _closure1_slot18;
            mike = tango in mike;
            if(mike) { _fun00044_ip = 32; continue _fun00043 }
 28:
            mike = false;
            return mike;
 32:
            oscar = zulu.addedMembers;
            mike = null;
            if(!(mike != oscar)) { _fun00044_ip = 59; continue _fun00043 }
 44:
            report = oscar.forEach;
            tango = function(argFoo) {
                entity = argFoo;
                zulu = entity.userId;
                mike = _closure1_slot18;
                entity = _closure2_slot0;
                entity = entity.id;
                mike = mike[entity];
                entity = mike.addUserId;
                entity = entity.bind(mike)(zulu);
                return entity;
            };
            tango = report.bind(oscar)(tango);
 59:
            zulu = zulu.removedMemberIds;
            if(!(mike != zulu)) { _fun00044_ip = 84; continue _fun00043 }
 69:
            mike = zulu.forEach;
            entity = function(argFoo) {
                mike = _closure1_slot18;
                entity = _closure2_slot0;
                entity = entity.id;
                zulu = mike[entity];
                mike = zulu.removeUserId;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
 84:
            entity = undefined;
            return entity;
        }
    };
    mike['THREAD_MEMBERS_UPDATE'] = yankee;
    yankee = function(argFoo) { // Original name: handleThreadUpdate
        _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
            entity = argFoo;
            mike = entity.channel;
            tango = mike.id;
            entity = _closure1_slot18;
            entity = tango in entity;
            if(!entity) { _fun00046_ip = 73; continue _fun00045 }
 27:
            tango = mike.threadMetadata;
            entity = null;
            oscar = entity == tango;
            entity = undefined;
            report = undefined;
            if(oscar) { _fun00046_ip = 52; continue _fun00045 }
 46:
            report = tango.archived;
 52:
            tango = true;
            if(!(tango === report)) { _fun00046_ip = 73; continue _fun00045 }
 58:
            zulu = _closure1_slot18;
            mike = mike.id;
            mike = delete zulu[mike];
            return entity;
 73:
            entity = false;
            return entity;
        }
    };
    mike['THREAD_UPDATE'] = yankee;
    yankee = function(argFoo) { // Original name: handleThreadDelete
        _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
            entity = argFoo;
            entity = entity.channel;
            tango = entity.id;
            zulu = _closure1_slot18;
            zulu = tango in zulu;
            if(zulu) { _fun00048_ip = 31; continue _fun00047 }
 27:
            zulu = false;
            return zulu;
 31:
            mike = _closure1_slot18;
            entity = entity.id;
            entity = delete mike[entity];
            entity = undefined;
            return entity;
        }
    };
    mike['THREAD_DELETE'] = yankee;
    yankee = function(argFoo) { // Original name: handleChannelUpdates
        _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
            entity = argFoo;
            tango = entity.channels;
            entity = global;
            zulu = entity.Set;
            mike = tango.map;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            backup = mike.bind(tango)(entity);
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            kilo = mike;
            entity = new kilo[zulu](backup, foxtrot);
            offset = entity instanceof Object ? entity : mike;
            options = _closure1_slot18;
            mike = false;
            entity = false;
            for(tango in options)
 73:
            {
                entity = mike;
 85:
                romeo = tango;
                foxtrot = offset.has;
                yankee = _closure1_slot18;
                yankee = yankee[romeo];
                yankee = yankee.parentId;
                yankee = foxtrot.bind(offset)(yankee);
                if(!yankee) { _fun00050_ip = 73; continue _fun00049 }
 115:
                yankee = _closure1_slot18;
                romeo = yankee[romeo];
                yankee = romeo.rebuild;
                yankee = yankee.bind(romeo)();
                mike = true;
                _fun00050_ip = 73; continue _fun00049;
            }
 137:
            return entity;
        }
    };
    mike['CHANNEL_UPDATES'] = yankee;
    yankee = function(argFoo) { // Original name: handleThreadMemberListUpdate
        _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
            entity = argFoo;
            zulu = entity.threadId;
            verify = entity.guildId;
            oscar = entity.members;
            tango = _closure1_slot10;
            entity = tango.getChannel;
            report = entity.bind(tango)(zulu);
            tango = null;
            golf = tango == report;
            entity = undefined;
            options = undefined;
            if(golf) { _fun00052_ip = 56; continue _fun00051 }
 50:
            options = report.parent_id;
 56:
            if(!(tango != options)) { _fun00052_ip = 137; continue _fun00051 }
 60:
            report = _closure1_slot18;
            tango = _closure1_slot19;
            golf = tango.prototype;
            golf = Object.create(golf, {constructor: {value: tango}});
            foxtrot = golf;
            romeo = verify;
            yankee = options;
            offset = zulu;
            tango = new foxtrot[tango](romeo, yankee, offset, verify);
            tango = tango instanceof Object ? tango : golf;
            report[zulu] = tango;
            mike = _closure1_slot18;
            tango = mike[zulu];
            zulu = tango.rebuild;
            report = oscar.map;
            mike = function(argFoo) {
                entity = argFoo;
                entity = entity.user_id;
                return entity;
            };
            mike = report.bind(oscar)(mike);
            mike = zulu.bind(tango)(mike);
 137:
            return entity;
        }
    };
    mike['THREAD_MEMBER_LIST_UPDATE'] = yankee;
    mike['USER_UPDATE'] = offset;
    yankee = function(argFoo) { // Original name: handleUserUpdates
        mike = argFoo;
        tango = mike.updates;
        zulu = tango.map;
        mike = function(argFoo) {
            entity = argFoo;
            entity = entity.user;
            zulu = _closure1_slot24;
            mike = entity.id;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            return entity;
        };
        zulu = zulu.bind(tango)(mike);
        mike = zulu.some;
        entity = function(argFoo) {
            entity = argFoo;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['PRESENCE_UPDATES'] = yankee;
    mike['GUILD_MEMBER_ADD'] = offset;
    mike['GUILD_MEMBER_UPDATE'] = offset;
    mike['GUILD_MEMBER_REMOVE'] = offset;
    offset = function(argFoo) { // Original name: handlePresenceReplace
        _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
            entity = argFoo;
            mike = entity.presences;
            zulu = _closure1_slot1;
            oscar = _closure1_slot3;
            entity = 13;
            entity = oscar[entity];
            report = undefined;
            entity = zulu.bind(report)(entity);
            zulu = entity.bind(report)(mike);
            mike = zulu.map;
            entity = function(argFoo) {
                _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
                    entity = argFoo;
                    mike = entity.user;
                    entity = null;
                    zulu = entity == mike;
                    entity = undefined;
                    if(zulu) { _fun00056_ip = 24; continue _fun00055 }
 19:
                    entity = mike.id;
 24:
                    return entity;
                }
            };
            zulu = mike.bind(zulu)(entity);
            mike = zulu.filter;
            tango = _closure1_slot0;
            entity = 17;
            entity = oscar[entity];
            entity = tango.bind(report)(entity);
            entity = entity.isNotNullish;
            mike = mike.bind(zulu)(entity);
            entity = mike.uniq;
            mike = entity.bind(mike)();
            entity = mike.value;
            verify = entity.bind(mike)();
            golf = _closure1_slot18;
            mike = false;
            entity = false;
            for(tango in golf)
 123:
            {
                entity = mike;
 135:
                romeo = tango;
                yankee = _closure1_slot18;
                romeo = yankee[romeo];
                yankee = romeo.updateMultipleUserIds;
                yankee = yankee.bind(romeo)(verify);
                if(!yankee) { _fun00054_ip = 123; continue _fun00053 }
 160:
                mike = true;
                _fun00054_ip = 123; continue _fun00053;
            }
 164:
            return entity;
        }
    };
    mike['PRESENCES_REPLACE'] = offset;
    offset = function(argFoo) { // Original name: handleGuildMembersChunkBatch
        _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
            entity = argFoo;
            mike = entity.chunks;
            entity = _closure1_slot22;
            golf = undefined;
            oscar = entity.bind(golf)(mike);
            zulu = oscar.bind(golf)();
            mike = zulu.done;
            tango = zulu;
            zulu = false;
            entity = false;
            if(mike) { _fun00058_ip = 156; continue _fun00057 }
 44:
            mike = tango.value;
            output = mike.guildId;
            yankee = mike.members;
            offset = yankee.map;
            mike = function(argFoo) {
                entity = argFoo;
                entity = entity.user;
                entity = entity.id;
                return entity;
            };
            sizing = offset.bind(yankee)(mike);
            backup = _closure1_slot18;
            mike = zulu;
            offset = mike;
            for(yankee in backup)
 93:
            {
                offset = mike;
 105:
                echo = yankee;
                result = _closure1_slot18;
                echo = result[echo];
                result = echo.updateMultipleUserIds;
                result = result.bind(echo)(sizing, output);
                if(!result) { _fun00058_ip = 93; continue _fun00057 }
 131:
                mike = true;
                _fun00058_ip = 93; continue _fun00057;
            }
 135:
            yankee = oscar.bind(golf)();
            mike = yankee.done;
            zulu = offset;
            tango = yankee;
            entity = zulu;
            if(!mike) { _fun00058_ip = 44; continue _fun00057 }
 156:
            return entity;
        }
    };
    mike['GUILD_MEMBERS_CHUNK_BATCH'] = offset;
    mike['GUILD_ROLE_UPDATE'] = verify;
    mike['GUILD_ROLE_DELETE'] = verify;
    tango = function(argFoo) { // Original name: handlePassiveUpdateV2
        entity = argFoo;
        tango = entity.members;
        zulu = tango.reduce;
        mike = function(argFoo, argBar) {
            _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                mike = argFoo;
                tango = _closure1_slot24;
                entity = argBar;
                entity = entity.user;
                zulu = entity.id;
                entity = undefined;
                entity = tango.bind(entity)(zulu);
                if(entity) { _fun00060_ip = 36; continue _fun00059 }
 33:
                entity = mike;
 36:
                return entity;
            }
        };
        entity = false;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    mike['PASSIVE_UPDATE_V2'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    kilo = tango;
    foxtrot = mike;
    mike = new kilo[options](backup, foxtrot, romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 20;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/threads/ThreadMemberListStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();