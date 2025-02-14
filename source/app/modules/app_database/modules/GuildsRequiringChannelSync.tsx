// app/modules/app_database/modules/GuildsRequiringChannelSync.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    options = argCorge;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = options;
    var _closure1_slot3 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun60891: for(var _fun60891_ip = 0; ; ) switch(_fun60891_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun60891_ip = 46; continue _fun60891 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun60891_ip = 55; continue _fun60891 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun60891_ip = 343; continue _fun60891 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun60891_ip = 323; continue _fun60891 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun60891_ip = 283; continue _fun60891 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun60891_ip = 270; continue _fun60891 }
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
            if(!golf) { _fun60891_ip = 163; continue _fun60891 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun60891_ip = 179; continue _fun60891 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun60891_ip = 249; continue _fun60891 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun60891_ip = 249; continue _fun60891 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun60891_ip = 234; continue _fun60891 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun60891_ip = 247; continue _fun60891 }
 234:
            verify = _closure1_slot11;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun60891_ip = 265; continue _fun60891;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun60891_ip = 283; continue _fun60891;
 270:
            golf = _closure1_slot11;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun60891_ip = 323; continue _fun60891 }
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
            if(!tango) { _fun60891_ip = 330; continue _fun60891 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun60892: for(var _fun60892_ip = 0; ; ) switch(_fun60892_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun60892_ip = 56; continue _fun60892 }
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
                    _fun60892_ip = 67; continue _fun60892;
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
    var _closure1_slot10 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun60893: for(var _fun60893_ip = 0; ; ) switch(_fun60893_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun60893_ip = 23; continue _fun60893 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun60893_ip = 33; continue _fun60893 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun60893_ip = 70; continue _fun60893 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun60893_ip = 55; continue _fun60893 }
 70:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Permissions;
    golf = 6;
    golf = oscar[golf];
    verify = options.bind(entity)(golf);
    options = verify.combine;
    golf = tango.VIEW_CHANNEL;
    tango = tango.ADMINISTRATOR;
    tango = options.bind(verify)(golf, tango);
    var _closure1_slot9 = tango;
    mike = function() {
        tango = _closure1_slot5;
        zulu = function() { // Original name: GuildsRequiringChannelSync
            zulu = this;
            var _closure3_slot0 = zulu;
            report = _closure1_slot4;
            mike = _closure2_slot0;
            entity = undefined;
            mike = report.bind(entity)(zulu, mike);
            mike = {};
            report = function(argFoo, argBar) { // Original name: BACKGROUND_SYNC
                tango = _closure3_slot0;
                zulu = tango.handleBackgroundSync;
                mike = argFoo;
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike['BACKGROUND_SYNC'] = report;
            report = function(argFoo, argBar) { // Original name: CONNECTION_OPEN
                tango = _closure3_slot0;
                zulu = tango.handleConnectionOpen;
                mike = argFoo;
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike['CONNECTION_OPEN'] = report;
            report = function(argFoo, argBar) { // Original name: GUILD_CREATE
                tango = _closure3_slot0;
                zulu = tango.handleGuildCreate;
                mike = argFoo;
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike['GUILD_CREATE'] = report;
            tango = function(argFoo, argBar) { // Original name: CHANNEL_SYNC
                tango = _closure3_slot0;
                zulu = tango.handleChannelSync;
                mike = argFoo;
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike['CHANNEL_SYNC'] = tango;
            zulu['actions'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'getAll';
        entity['key'] = mike;
        mike = function() { // Original name: value
            _fun60900: for(var _fun60900_ip = 0; ; ) switch(_fun60900_ip) {
 0:
                zulu = _closure1_slot1;
                mike = _closure1_slot3;
                entity = 7;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                entity = mike.guildsRequiringChannelSync;
                mike = entity.bind(mike)();
                entity = null;
                if(!(entity != mike)) { _fun60900_ip = 53; continue _fun60900 }
 41:
                entity = mike.getMany;
                entity = entity.bind(mike)();
                _fun60900_ip = 76; continue _fun60900;
 53:
                mike = global;
                tango = mike.Promise;
                zulu = tango.resolve;
                mike = new Array(0);
                entity = zulu.bind(tango)(mike);
 76:
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(13);
        mike[0] = entity;
        entity = {};
        oscar = 'handleConnectionOpen';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun60901: for(var _fun60901_ip = 0; ; ) switch(_fun60901_ip) {
 0:
                oscar = argBar;
                report = this;
                entity = argFoo;
                zulu = entity.guilds;
                mike = _closure1_slot10;
                entity = undefined;
                tango = mike.bind(entity)(zulu);
                zulu = tango.bind(entity)();
                mike = zulu.done;
                if(mike) { _fun60901_ip = 73; continue _fun60901 }
 41:
                golf = zulu.value;
                mike = report.handleGuild;
                mike = mike.bind(report)(golf, oscar);
                golf = tango.bind(entity)();
                mike = golf.done;
                zulu = golf;
                if(!mike) { _fun60901_ip = 41; continue _fun60901 }
 73:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'handleGuildCreate';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun60902: for(var _fun60902_ip = 0; ; ) switch(_fun60902_ip) {
 0:
                tango = this;
                entity = argFoo;
                zulu = entity.guild;
                mike = zulu.unavailable;
                entity = true;
                if(!(entity !== mike)) { _fun60902_ip = 38; continue _fun60902 }
 23:
                mike = tango.handleGuild;
                entity = argBar;
                entity = mike.bind(tango)(zulu, entity);
 38:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'handleBackgroundSync';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun60903: for(var _fun60903_ip = 0; ; ) switch(_fun60903_ip) {
 0:
                oscar = argBar;
                report = this;
                entity = argFoo;
                zulu = entity.guilds;
                mike = _closure1_slot10;
                entity = undefined;
                tango = mike.bind(entity)(zulu);
                zulu = tango.bind(entity)();
                mike = zulu.done;
                if(mike) { _fun60903_ip = 75; continue _fun60903 }
 41:
                golf = zulu.value;
                mike = report.handleBackgroundSyncGuild;
                mike = mike.bind(report)(golf, oscar);
                golf = tango.bind(entity)();
                mike = golf.done;
                zulu = golf;
                if(!mike) { _fun60903_ip = 41; continue _fun60903 }
 75:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'rolesHaveVisibilityChanges';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            _fun60904: for(var _fun60904_ip = 0; ; ) switch(_fun60904_ip) {
 0:
                kilo = argFoo;
                backup = argBar;
                foxtrot = argBaz;
                yankee = backup;
                golf = undefined;
                report = 6;
                tango = null;
                zulu = undefined;
                mike = undefined;
                for(options in yankee)
 37:
                {
 49:
                    entity = options;
                    sizing = foxtrot.has;
                    sizing = sizing.bind(foxtrot)(entity);
                    if(!sizing) { _fun60904_ip = 37; continue _fun60904 }
 65:
                    zulu = backup[entity];
                    mike = kilo[entity];
                    if(!(tango != mike)) { _fun60904_ip = 169; continue _fun60904 }
 77:
                    sizing = _closure1_slot2;
                    entity = _closure1_slot3;
                    output = entity[report];
                    echo = sizing.bind(golf)(output);
                    result = echo.filter;
                    output = mike.permissions;
                    source = _closure1_slot9;
                    result = result.bind(echo)(output, source);
                    output = entity[report];
                    update = sizing.bind(golf)(output);
                    echo = update.filter;
                    output = zulu.permissions;
                    output = echo.bind(update)(output, source);
                    entity = entity[report];
                    sizing = sizing.bind(golf)(entity);
                    entity = sizing.equals;
                    entity = entity.bind(sizing)(result, output);
                    if(entity) { _fun60904_ip = 37; continue _fun60904 }
 165:
                    entity = true;
                    return entity;
 169:
                    entity = true;
                    return entity;
                }
 173:
                entity = false;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'processMemberRoleIds';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun60905: for(var _fun60905_ip = 0; ; ) switch(_fun60905_ip) {
 0:
                oscar = argFoo;
                zulu = argBar;
                mike = oscar.length;
                entity = zulu.length;
                if(!(mike === entity)) { _fun60905_ip = 199; continue _fun60905 }
 23:
                entity = global;
                entity = entity.Set;
                mike = entity.prototype;
                mike = Object.create(mike, {constructor: {value: entity}});
                offset = mike;
                entity = new offset[entity](verify);
                mike = entity instanceof Object ? entity : mike;
                tango = _closure1_slot10;
                report = undefined;
                golf = tango.bind(report)(oscar);
                oscar = golf.bind(report)();
                tango = oscar.done;
                if(tango) { _fun60905_ip = 107; continue _fun60905 }
 77:
                options = oscar.value;
                tango = mike.add;
                tango = tango.bind(mike)(options);
                options = golf.bind(report)();
                tango = options.done;
                oscar = options;
                if(!tango) { _fun60905_ip = 77; continue _fun60905 }
 107:
                entity = _closure1_slot10;
                tango = entity.bind(report)(zulu);
                zulu = tango.bind(report)();
                entity = zulu.done;
                if(entity) { _fun60905_ip = 183; continue _fun60905 }
 128:
                oscar = zulu.value;
                entity = mike.has;
                entity = entity.bind(mike)(oscar);
                if(entity) { _fun60905_ip = 158; continue _fun60905 }
 146:
                entity = {'rolesAreDifferent': true, 'allRoleIds': null};
                return entity;
 158:
                entity = mike.add;
                entity = entity.bind(mike)(oscar);
                oscar = tango.bind(report)();
                entity = oscar.done;
                zulu = oscar;
                if(!entity) { _fun60905_ip = 128; continue _fun60905 }
 183:
                entity = {};
                zulu = false;
                entity['rolesAreDifferent'] = zulu;
                entity['allRoleIds'] = mike;
                return entity;
 199:
                entity = {'rolesAreDifferent': true, 'allRoleIds': null};
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'userBecameGuildOwner';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            _fun60906: for(var _fun60906_ip = 0; ; ) switch(_fun60906_ip) {
 0:
                tango = argBaz;
                entity = null;
                entity = entity != tango;
                if(!entity) { _fun60906_ip = 32; continue _fun60906 }
 12:
                mike = argBar;
                mike = mike === tango;
                if(!mike) { _fun60906_ip = 29; continue _fun60906 }
 22:
                zulu = argFoo;
                mike = zulu !== tango;
 29:
                entity = mike;
 32:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'handleBackgroundSyncGuild';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun60907: for(var _fun60907_ip = 0; ; ) switch(_fun60907_ip) {
 0:
                entity = argFoo;
                tango = argBar;
                zulu = this;
                golf = _closure1_slot7;
                oscar = golf.getSelfMember;
                mike = entity.id;
                offset = oscar.bind(golf)(mike);
                oscar = null;
                if(!(oscar == offset)) { _fun60907_ip = 58; continue _fun60907 }
 38:
                options = _closure1_slot7;
                golf = options.getCachedSelfMember;
                mike = entity.id;
                offset = golf.bind(options)(mike);
 58:
                if(!(oscar != offset)) { _fun60907_ip = 445; continue _fun60907 }
 65:
                golf = entity.data_mode;
                mike = 'partial';
                if(!(mike !== golf)) { _fun60907_ip = 118; continue _fun60907 }
 79:
                golf = entity.data_mode;
                mike = 'full';
                if(!(mike === golf)) { _fun60907_ip = 445; continue _fun60907 }
 96:
                golf = zulu.unmarkGuildForResync;
                mike = entity.id;
                mike = golf.bind(zulu)(mike, tango);
                _fun60907_ip = 445; continue _fun60907;
 118:
                options = {};
                mike = entity.partial_updates;
                mike = mike.roles;
                if(!(oscar != mike)) { _fun60907_ip = 253; continue _fun60907 }
 136:
                golf = _closure1_slot10;
                mike = entity.partial_updates;
                mike = mike.roles;
                romeo = undefined;
                yankee = golf.bind(romeo)(mike);
                golf = yankee.bind(romeo)();
                mike = golf.done;
                verify = 6;
                if(mike) { _fun60907_ip = 253; continue _fun60907 }
 174:
                backup = golf.value;
                foxtrot = backup.id;
                mike = {};
                kilo = backup.id;
                mike['id'] = kilo;
                sizing = _closure1_slot2;
                kilo = _closure1_slot3;
                kilo = kilo[verify];
                sizing = sizing.bind(romeo)(kilo);
                kilo = sizing.deserialize;
                backup = backup.permissions;
                backup = kilo.bind(sizing)(backup);
                mike['permissions'] = backup;
                options[foxtrot] = mike;
                foxtrot = yankee.bind(romeo)();
                mike = foxtrot.done;
                golf = foxtrot;
                if(!mike) { _fun60907_ip = 174; continue _fun60907 }
 253:
                mike = entity.properties;
                romeo = zulu.userBecameGuildOwner;
                yankee = _closure1_slot8;
                verify = yankee.getGuild;
                golf = entity.id;
                golf = verify.bind(yankee)(golf);
                foxtrot = oscar == golf;
                yankee = undefined;
                if(foxtrot) { _fun60907_ip = 299; continue _fun60907 }
 293:
                yankee = golf.ownerId;
 299:
                foxtrot = oscar == mike;
                golf = undefined;
                if(foxtrot) { _fun60907_ip = 314; continue _fun60907 }
 308:
                golf = mike.owner_id;
 314:
                foxtrot = _closure1_slot6;
                mike = foxtrot.getId;
                mike = mike.bind(foxtrot)();
                mike = romeo.bind(zulu)(yankee, golf, mike);
                if(mike) { _fun60907_ip = 425; continue _fun60907 }
 338:
                yankee = _closure1_slot8;
                golf = yankee.getRoles;
                report = entity.id;
                golf = golf.bind(yankee)(report);
                report = global;
                report = report.Set;
                yankee = oscar == offset;
                verify = undefined;
                if(yankee) { _fun60907_ip = 381; continue _fun60907 }
 375:
                verify = offset.roles;
 381:
                if(!(oscar == verify)) { _fun60907_ip = 389; continue _fun60907 }
 385:
                verify = new Array(0);
 389:
                oscar = report.prototype;
                oscar = Object.create(oscar, {constructor: {value: report}});
                update = oscar;
                echo = verify;
                report = new update[report](echo, result);
                oscar = report instanceof Object ? report : oscar;
                report = zulu.rolesHaveVisibilityChanges;
                mike = report.bind(zulu)(golf, options, oscar);
 425:
                if(!mike) { _fun60907_ip = 445; continue _fun60907 }
 428:
                mike = zulu.markGuildForResync;
                entity = entity.id;
                entity = mike.bind(zulu)(entity, tango);
 445:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[7] = entity;
        entity = {};
        oscar = 'handleGuild';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun60908: for(var _fun60908_ip = 0; ; ) switch(_fun60908_ip) {
 0:
                entity = argFoo;
                tango = argBar;
                zulu = this;
                mike = entity.channels;
                oscar = null;
                if(!(oscar != mike)) { _fun60908_ip = 45; continue _fun60908 }
 23:
                report = zulu.unmarkGuildForResync;
                mike = entity.id;
                mike = report.bind(zulu)(mike, tango);
                _fun60908_ip = 430; continue _fun60908;
 45:
                golf = _closure1_slot6;
                mike = golf.getId;
                yankee = mike.bind(golf)();
                var _closure3_slot0 = yankee;
                options = _closure1_slot8;
                golf = options.getGuild;
                mike = entity.id;
                mike = golf.bind(options)(mike);
                options = oscar != mike;
                golf = true;
                if(!options) { _fun60908_ip = 134; continue _fun60908 }
 94:
                offset = zulu.userBecameGuildOwner;
                options = mike.ownerId;
                romeo = entity.properties;
                foxtrot = oscar == romeo;
                mike = undefined;
                if(foxtrot) { _fun60908_ip = 127; continue _fun60908 }
 121:
                mike = romeo.owner_id;
 127:
                golf = offset.bind(zulu)(options, mike, yankee);
 134:
                options = null;
                if(golf) { _fun60908_ip = 290; continue _fun60908 }
 142:
                yankee = _closure1_slot7;
                offset = yankee.getSelfMember;
                mike = entity.id;
                mike = offset.bind(yankee)(mike);
                if(!(oscar == mike)) { _fun60908_ip = 186; continue _fun60908 }
 166:
                romeo = _closure1_slot7;
                yankee = romeo.getCachedSelfMember;
                offset = entity.id;
                mike = yankee.bind(romeo)(offset);
 186:
                yankee = entity.members;
                offset = yankee.find;
                verify = function(argFoo) {
                    entity = argFoo;
                    entity = entity.user;
                    mike = entity.id;
                    entity = _closure3_slot0;
                    entity = mike === entity;
                    return entity;
                };
                yankee = offset.bind(yankee)(verify);
                offset = zulu.processMemberRoleIds;
                if(!(oscar == mike)) { _fun60908_ip = 225; continue _fun60908 }
 219:
                verify = new Array(0);
                _fun60908_ip = 231; continue _fun60908;
 225:
                verify = mike.roles;
 231:
                romeo = oscar == yankee;
                mike = undefined;
                if(romeo) { _fun60908_ip = 246; continue _fun60908 }
 240:
                mike = yankee.roles;
 246:
                if(!(oscar == mike)) { _fun60908_ip = 254; continue _fun60908 }
 250:
                mike = new Array(0);
 254:
                mike = offset.bind(zulu)(verify, mike);
                verify = mike.rolesAreDifferent;
                mike = mike.allRoleIds;
                offset = oscar != mike;
                golf = verify;
                options = null;
                if(!offset) { _fun60908_ip = 290; continue _fun60908 }
 284:
                golf = verify;
                options = mike;
 290:
                mike = golf;
                if(golf) { _fun60908_ip = 410; continue _fun60908 }
 296:
                mike = golf;
                if(!(oscar != options)) { _fun60908_ip = 410; continue _fun60908 }
 303:
                verify = _closure1_slot8;
                golf = verify.getRoles;
                oscar = entity.id;
                golf = golf.bind(verify)(oscar);
                verify = entity.roles;
                oscar = global;
                oscar = oscar.Array;
                oscar = verify instanceof oscar;
                if(oscar) { _fun60908_ip = 352; continue _fun60908 }
 344:
                oscar = entity.roles;
                _fun60908_ip = 397; continue _fun60908;
 352:
                offset = _closure1_slot0;
                verify = _closure1_slot3;
                report = 8;
                verify = verify[report];
                report = undefined;
                yankee = offset.bind(report)(verify);
                offset = yankee.sortServerRoles;
                verify = entity.id;
                report = entity.roles;
                oscar = offset.bind(yankee)(verify, report);
 397:
                report = zulu.rolesHaveVisibilityChanges;
                mike = report.bind(zulu)(golf, oscar, options);
 410:
                if(!mike) { _fun60908_ip = 430; continue _fun60908 }
 413:
                mike = zulu.markGuildForResync;
                entity = entity.id;
                entity = mike.bind(zulu)(entity, tango);
 430:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[8] = entity;
        entity = {};
        oscar = 'handleChannelSync';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun60910: for(var _fun60910_ip = 0; ; ) switch(_fun60910_ip) {
 0:
                entity = argFoo;
                tango = this;
                zulu = entity.guild_id;
                entity = entity.integrity_check;
                if(entity) { _fun60910_ip = 35; continue _fun60910 }
 20:
                mike = tango.unmarkGuildForResync;
                entity = argBar;
                entity = mike.bind(tango)(zulu, entity);
 35:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[9] = entity;
        entity = {};
        oscar = 'markGuildForResync';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            zulu = _closure1_slot1;
            mike = _closure1_slot3;
            entity = 7;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.guildsRequiringChannelSyncTransaction;
            mike = argBar;
            tango = zulu.bind(tango)(mike);
            zulu = tango.put;
            mike = {};
            report = argFoo;
            mike['id'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity['value'] = oscar;
        mike[10] = entity;
        entity = {};
        oscar = 'unmarkGuildForResync';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            zulu = _closure1_slot1;
            mike = _closure1_slot3;
            entity = 7;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.guildsRequiringChannelSyncTransaction;
            mike = argBar;
            tango = zulu.bind(tango)(mike);
            zulu = tango.delete;
            mike = argFoo;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity['value'] = oscar;
        mike[11] = entity;
        entity = {};
        oscar = 'resetInMemoryState';
        entity['key'] = oscar;
        report = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        mike[12] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    backup = tango;
    mike = new backup[mike](foxtrot);
    mike = mike instanceof Object ? mike : tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_database/modules/GuildsRequiringChannelSync.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();