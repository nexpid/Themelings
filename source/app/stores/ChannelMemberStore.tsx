// app/stores/ChannelMemberStore.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    options = argBar;
    offset = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = offset;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = verify;
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
            entity = _closure1_slot27;
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
    var _closure1_slot26 = entity;
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
            _closure1_slot27 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot27 = entity;
    entity = function(argFoo, argBar, argBaz, argCorge) { // Original name: makeGroup
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argBar;
            zulu = argBaz;
            mike = argCorge;
            var _closure2_slot0 = report;
            entity = _closure1_slot19;
            entity = entity.ONLINE;
            if(!(entity !== report)) { _fun00006_ip = 166; continue _fun00005 }
 35:
            entity = _closure1_slot19;
            entity = entity.OFFLINE;
            if(!(entity !== report)) { _fun00006_ip = 166; continue _fun00005 }
 49:
            entity = _closure1_slot19;
            entity = entity.UNKNOWN;
            if(!(entity !== report)) { _fun00006_ip = 166; continue _fun00005 }
 63:
            options = _closure1_slot15;
            golf = options.getGuild;
            entity = argFoo;
            entity = golf.bind(options)(entity);
            golf = null;
            verify = golf != entity;
            options = null;
            if(!verify) { _fun00006_ip = 112; continue _fun00005 }
 91:
            offset = _closure1_slot15;
            verify = offset.getRole;
            entity = entity.id;
            options = verify.bind(offset)(entity, report);
 112:
            entity = {};
            verify = _closure1_slot22;
            verify = verify.GROUP;
            entity['type'] = verify;
            entity['key'] = report;
            entity['id'] = report;
            verify = golf != options;
            golf = '';
            if(!verify) { _fun00006_ip = 152; continue _fun00005 }
 147:
            golf = options.name;
 152:
            entity['title'] = golf;
            entity['count'] = zulu;
            entity['index'] = mike;
            return entity;
 166:
            entity = {};
            oscar = _closure1_slot22;
            oscar = oscar.GROUP;
            entity['type'] = oscar;
            entity['key'] = report;
            entity['id'] = report;
            oscar = function() { // Original name: get title
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zulu = _closure2_slot0;
                    mike = _closure1_slot19;
                    mike = mike.ONLINE;
                    if(!(mike !== zulu)) { _fun00008_ip = 159; continue _fun00007 }
 27:
                    mike = _closure1_slot19;
                    mike = mike.OFFLINE;
                    if(!(mike !== zulu)) { _fun00008_ip = 100; continue _fun00007 }
 41:
                    oscar = _closure1_slot0;
                    golf = _closure1_slot3;
                    mike = 16;
                    zulu = golf[mike];
                    report = undefined;
                    zulu = oscar.bind(report)(zulu);
                    tango = zulu.intl;
                    zulu = tango.string;
                    mike = golf[mike];
                    mike = oscar.bind(report)(mike);
                    mike = mike.t;
                    mike = mike.UQMV/P;
                    mike = zulu.bind(tango)(mike);
                    return mike;
 100:
                    oscar = _closure1_slot0;
                    golf = _closure1_slot3;
                    mike = 16;
                    zulu = golf[mike];
                    report = undefined;
                    zulu = oscar.bind(report)(zulu);
                    tango = zulu.intl;
                    zulu = tango.string;
                    mike = golf[mike];
                    mike = oscar.bind(report)(mike);
                    mike = mike.t;
                    mike = mike.Vv0abG;
                    mike = zulu.bind(tango)(mike);
                    return mike;
 159:
                    report = _closure1_slot0;
                    oscar = _closure1_slot3;
                    entity = 16;
                    mike = oscar[entity];
                    tango = undefined;
                    mike = report.bind(tango)(mike);
                    zulu = mike.intl;
                    mike = zulu.string;
                    entity = oscar[entity];
                    entity = report.bind(tango)(entity);
                    entity = entity.t;
                    entity = entity.WbGtnJ;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            report = undefined;
            tango = 'title';
            Object.defineProperty(entity, tango, {get: oscar, set: report, enumerable: true});
            entity['count'] = zulu;
            entity['index'] = mike;
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: makeMember
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            yankee = argFoo;
            report = argBaz;
            mike = _closure1_slot11;
            entity = mike.getId;
            entity = entity.bind(mike)();
            entity = report === entity;
            tango = _closure1_slot16;
            mike = tango.isMobileOnline;
            tango = mike.bind(tango)(report);
            if(entity) { _fun00010_ip = 63; continue _fun00009 }
 45:
            oscar = _closure1_slot16;
            mike = oscar.getStatus;
            options = mike.bind(oscar)(report, yankee);
            _fun00010_ip = 77; continue _fun00009;
 63:
            oscar = _closure1_slot17;
            mike = oscar.getStatus;
            options = mike.bind(oscar)();
 77:
            if(entity) { _fun00010_ip = 98; continue _fun00009 }
 80:
            mike = _closure1_slot16;
            entity = mike.getActivities;
            golf = entity.bind(mike)(report, yankee);
            _fun00010_ip = 112; continue _fun00009;
 98:
            mike = _closure1_slot17;
            entity = mike.getActivities;
            golf = entity.bind(mike)();
 112:
            mike = _closure1_slot10;
            entity = mike.getStreamForUser;
            oscar = entity.bind(mike)(report, yankee);
            mike = _closure1_slot18;
            entity = mike.getUser;
            verify = entity.bind(mike)(report);
            entity = null;
            mike = entity == verify;
            if(mike) { _fun00010_ip = 255; continue _fun00009 }
 152:
            mike = {};
            offset = _closure1_slot22;
            offset = offset.MEMBER;
            mike['type'] = offset;
            offset = _closure1_slot14;
            zulu = offset.getMember;
            romeo = zulu.bind(offset)(yankee, report);
            foxtrot = mike;
            zulu = copyDataProperties(foxtrot, romeo);
            zulu = 'user';
            mike[zulu] = verify;
            zulu = 'status';
            mike[zulu] = options;
            zulu = 'activities';
            mike[zulu] = golf;
            zulu = 'applicationStream';
            mike[zulu] = oscar;
            zulu = argBar;
            report = zulu === report;
            zulu = 'isOwner';
            mike[zulu] = report;
            zulu = 'isMobileOnline';
            mike[zulu] = tango;
            entity = mike;
 255:
            return entity;
        }
    };
    var _closure1_slot29 = entity;
    entity = function(argFoo) { // Original name: getMemberListId
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tango = _closure1_slot12;
            zulu = tango.getChannel;
            entity = argFoo;
            report = zulu.bind(tango)(entity);
            zulu = null;
            if(!(zulu != report)) { _fun00012_ip = 60; continue _fun00011 }
 26:
            entity = report.memberListId;
            if(!(zulu != entity)) { _fun00012_ip = 44; continue _fun00011 }
 36:
            entity = report.memberListId;
            _fun00012_ip = 58; continue _fun00011;
 44:
            tango = function(argFoo) { // Original name: computeMemberListId
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    mike = argFoo;
                    tango = _closure1_slot2;
                    report = _closure1_slot3;
                    zulu = 17;
                    zulu = report[zulu];
                    oscar = undefined;
                    report = tango.bind(oscar)(zulu);
                    tango = report.canEveryone;
                    zulu = _closure1_slot20;
                    zulu = zulu.VIEW_CHANNEL;
                    zulu = tango.bind(report)(zulu, mike);
                    if(zulu) { _fun00014_ip = 165; continue _fun00013 }
 53:
                    golf = _closure1_slot1;
                    options = _closure1_slot3;
                    zulu = 18;
                    zulu = options[zulu];
                    tango = golf.bind(oscar)(zulu);
                    zulu = tango.v3;
                    report = 19;
                    report = options[report];
                    report = golf.bind(oscar)(report);
                    mike = mike.permissionOverwrites;
                    golf = report.bind(oscar)(mike);
                    oscar = golf.reduce;
                    report = function(argFoo, argBar) {
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            entity = argFoo;
                            mike = argBar;
                            report = mike.id;
                            offset = mike.allow;
                            oscar = mike.deny;
                            tango = _closure1_slot2;
                            zulu = _closure1_slot3;
                            options = 20;
                            zulu = zulu[options];
                            golf = undefined;
                            verify = tango.bind(golf)(zulu);
                            tango = verify.has;
                            zulu = _closure1_slot20;
                            zulu = zulu.VIEW_CHANNEL;
                            zulu = tango.bind(verify)(offset, zulu);
                            if(zulu) { _fun00016_ip = 149; continue _fun00015 }
 72:
                            tango = _closure1_slot2;
                            zulu = _closure1_slot3;
                            zulu = zulu[options];
                            tango = tango.bind(golf)(zulu);
                            zulu = tango.has;
                            mike = _closure1_slot20;
                            mike = mike.VIEW_CHANNEL;
                            mike = zulu.bind(tango)(oscar, mike);
                            if(!mike) { _fun00016_ip = 183; continue _fun00015 }
 113:
                            zulu = entity.push;
                            mike = global;
                            mike = mike.HermesInternal;
                            tango = mike.concat;
                            mike = 'deny:';
                            mike = tango.bind(mike)(report);
                            mike = zulu.bind(entity)(mike);
                            _fun00016_ip = 183; continue _fun00015;
 149:
                            zulu = entity.push;
                            mike = global;
                            mike = mike.HermesInternal;
                            tango = mike.concat;
                            mike = 'allow:';
                            mike = tango.bind(mike)(report);
                            mike = zulu.bind(entity)(mike);
 183:
                            return entity;
                        }
                    };
                    mike = new Array(0);
                    report = oscar.bind(golf)(report, mike);
                    mike = report.sort;
                    oscar = mike.bind(report)();
                    report = oscar.join;
                    mike = ',';
                    mike = report.bind(oscar)(mike);
                    zulu = zulu.bind(tango)(mike);
                    mike = zulu.toString;
                    mike = mike.bind(zulu)();
                    return mike;
 165:
                    entity = _closure1_slot21;
                    return entity;
                }
            };
            zulu = undefined;
            entity = tango.bind(zulu)(report);
 58:
            _fun00012_ip = 64; continue _fun00011;
 60:
            entity = _closure1_slot21;
 64:
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    romeo = function() { // Original name: handleConnectionOpen
        mike = _closure1_slot24;
        entity = mike.reset;
        entity = entity.bind(mike)();
        entity = undefined;
        return entity;
    };
    entity = function() { // Original name: handleApplicationStreamUpdate
        zulu = _closure1_slot10;
        entity = zulu.getAllApplicationStreams;
        entity = entity.bind(zulu)();
        tango = _closure1_slot25;
        zulu = tango.concat;
        zulu = zulu.bind(tango)(entity);
        _closure1_slot25 = entity;
        mike = zulu.forEach;
        entity = function(argFoo) {
            mike = argFoo;
            var _closure3_slot0 = mike;
            tango = _closure1_slot24;
            zulu = tango.forEach;
            mike = null;
            entity = function(argFoo) {
                zulu = argFoo;
                mike = zulu.rebuildMember;
                entity = _closure3_slot0;
                entity = entity.ownerId;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    var _closure1_slot31 = entity;
    entity = function() { // Original name: handleLocalPresenceUpdate
        tango = _closure1_slot11;
        zulu = tango.getId;
        zulu = zulu.bind(tango)();
        var _closure2_slot0 = zulu;
        tango = _closure1_slot24;
        zulu = tango.forEach;
        mike = null;
        entity = function(argFoo) {
            zulu = argFoo;
            mike = zulu.rebuildMember;
            entity = _closure2_slot0;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        entity = undefined;
        return entity;
    };
    var _closure1_slot32 = entity;
    entity = global;
    report = entity.Object;
    tango = report.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(report)(zulu, entity, mike);
    tango = 0;
    mike = verify[tango];
    entity = undefined;
    mike = offset.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 1;
    mike = verify[mike];
    mike = offset.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 2;
    mike = verify[mike];
    mike = offset.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 3;
    mike = verify[mike];
    mike = offset.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 4;
    mike = verify[mike];
    mike = offset.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 5;
    mike = verify[mike];
    mike = offset.bind(entity)(mike);
    var _closure1_slot9 = mike;
    mike = 6;
    mike = verify[mike];
    mike = offset.bind(entity)(mike);
    var _closure1_slot10 = mike;
    mike = 7;
    mike = verify[mike];
    mike = offset.bind(entity)(mike);
    var _closure1_slot11 = mike;
    mike = 8;
    mike = verify[mike];
    mike = offset.bind(entity)(mike);
    var _closure1_slot12 = mike;
    mike = 9;
    mike = verify[mike];
    mike = offset.bind(entity)(mike);
    var _closure1_slot13 = mike;
    mike = 10;
    mike = verify[mike];
    mike = offset.bind(entity)(mike);
    var _closure1_slot14 = mike;
    mike = 11;
    mike = verify[mike];
    mike = offset.bind(entity)(mike);
    var _closure1_slot15 = mike;
    mike = 12;
    mike = verify[mike];
    mike = offset.bind(entity)(mike);
    var _closure1_slot16 = mike;
    mike = 13;
    mike = verify[mike];
    mike = offset.bind(entity)(mike);
    var _closure1_slot17 = mike;
    mike = 14;
    mike = verify[mike];
    mike = offset.bind(entity)(mike);
    var _closure1_slot18 = mike;
    mike = 15;
    mike = verify[mike];
    mike = options.bind(entity)(mike);
    report = mike.StatusTypes;
    var _closure1_slot19 = report;
    mike = mike.Permissions;
    var _closure1_slot20 = mike;
    report = 'everyone';
    var _closure1_slot21 = report;
    mike = {};
    oscar = 'GROUP';
    mike['GROUP'] = oscar;
    oscar = 'MEMBER';
    mike['MEMBER'] = oscar;
    oscar = 'CONTENT_INVENTORY';
    mike['CONTENT_INVENTORY'] = oscar;
    oscar = 'CONTENT_INVENTORY_GROUP';
    mike['CONTENT_INVENTORY_GROUP'] = oscar;
    oscar = 'HIDDEN_CONTENT_INVENTORY';
    mike['HIDDEN_CONTENT_INVENTORY'] = oscar;
    oscar = 'CONTENT_INVENTORY_LEADERBOARD';
    mike['CONTENT_INVENTORY_LEADERBOARD'] = oscar;
    var _closure1_slot22 = mike;
    oscar = function() {
        tango = _closure1_slot8;
        zulu = function(argFoo, argBar) { // Original name: MemberList
            zulu = this;
            tango = _closure1_slot7;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = new Array(0);
            zulu['rows'] = mike;
            mike = new Array(0);
            zulu['groups'] = mike;
            mike = {};
            zulu['members'] = mike;
            mike = 0;
            zulu['version'] = mike;
            mike = argFoo;
            zulu['guildId'] = mike;
            mike = argBar;
            zulu['listId'] = mike;
            mike = zulu.updateOwnerId;
            mike = mike.bind(zulu)();
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'updateOwnerId';
        entity['key'] = mike;
        mike = function() { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                zulu = this;
                report = _closure1_slot15;
                tango = report.getGuild;
                mike = zulu.guildId;
                tango = tango.bind(report)(mike);
                mike = null;
                if(!(mike != tango)) { _fun00018_ip = 87; continue _fun00017 }
 31:
                report = _closure1_slot2;
                mike = _closure1_slot3;
                entity = 17;
                mike = mike[entity];
                entity = undefined;
                mike = report.bind(entity)(mike);
                entity = mike.getGuildVisualOwnerId;
                mike = entity.bind(mike)(tango);
                entity = zulu.ownerId;
                entity = entity !== mike;
                if(!entity) { _fun00018_ip = 85; continue _fun00017 }
 77:
                zulu['ownerId'] = mike;
                entity = true;
 85:
                return entity;
 87:
                entity = false;
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(9);
        mike[0] = entity;
        entity = {};
        oscar = 'setGroups';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            report = argFoo;
            mike = this;
            var _closure3_slot0 = mike;
            zulu = 0;
            var _closure3_slot1 = zulu;
            tango = report.map;
            zulu = function(argFoo) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    entity = argFoo;
                    oscar = _closure3_slot1;
                    zulu = global;
                    golf = zulu.Math;
                    report = golf.max;
                    options = entity.count;
                    zulu = null;
                    verify = zulu != options;
                    tango = 0;
                    zulu = 0;
                    if(!verify) { _fun00020_ip = 44; continue _fun00019 }
 41:
                    zulu = options;
 44:
                    report = report.bind(golf)(tango, zulu);
                    tango = _closure3_slot1;
                    zulu = 1;
                    zulu = report + zulu;
                    zulu = tango + zulu;
                    _closure3_slot1 = zulu;
                    tango = _closure1_slot28;
                    mike = _closure3_slot0;
                    foxtrot = mike.guildId;
                    romeo = entity.id;
                    backup = undefined;
                    yankee = report;
                    offset = oscar;
                    entity = backup[tango](foxtrot, romeo, yankee, offset, verify);
                    return entity;
                }
            };
            zulu = tango.bind(report)(zulu);
            mike['groups'] = zulu;
            mike = mike.rows;
            entity = _closure3_slot1;
            mike['length'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'sync';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                tango = argBar;
                entity = this;
                var _closure3_slot0 = entity;
                entity = argFoo;
                zulu = entity[Symbol.iterator];
                entity = zulu().next;
                golf = entity().value;
                report = zulu;
                entity = undefined;
                report = report === entity;
                oscar = undefined;
                if(report) { _fun00022_ip = 39; continue _fun00021 }
 36:
                oscar = golf;
 39:
                var _closure3_slot1 = oscar;
                if(report) { _fun00022_ip = 49; continue _fun00021 }
 46:
                zulu.return();
 49:
                zulu = tango.forEach;
                mike = function(argFoo, argBar) {
                    tango = _closure3_slot0;
                    zulu = tango.update;
                    mike = _closure3_slot1;
                    entity = argBar;
                    mike = mike + entity;
                    entity = argFoo;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'invalidate';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                zulu = this;
                golf = argFoo;
                mike = golf[Symbol.iterator];
                golf = mike().next;
                report = golf().value;
                tango = mike;
                entity = undefined;
                tango = tango === entity;
                oscar = undefined;
                if(tango) { _fun00024_ip = 30; continue _fun00023 }
 27:
                oscar = report;
 30:
                report = undefined;
                if(tango) { _fun00024_ip = 60; continue _fun00023 }
 35:
                options = golf().value;
                golf = mike;
                golf = golf === entity;
                report = undefined;
                tango = golf;
                if(golf) { _fun00024_ip = 60; continue _fun00023 }
 54:
                report = options;
                tango = golf;
 60:
                if(tango) { _fun00024_ip = 66; continue _fun00023 }
 63:
                mike.return();
 66:
                mike = null;
                if(!(oscar <= report)) { _fun00024_ip = 145; continue _fun00023 }
 75:
                golf = zulu.rows;
                golf = golf[oscar];
                if(!(mike != golf)) { _fun00024_ip = 145; continue _fun00023 }
 89:
                options = zulu.rows;
                options = delete options[oscar];
                verify = golf.type;
                options = _closure1_slot22;
                options = options.MEMBER;
                if(!(verify === options)) { _fun00024_ip = 138; continue _fun00023 }
 118:
                options = zulu.members;
                golf = golf.user;
                golf = golf.id;
                golf = delete options[golf];
 138:
                oscar = oscar + 1;
                if(oscar <= report) { _fun00024_ip = 75; continue _fun00023 }
 145:
                mike = zulu.version;
                mike = mike + 1;
                zulu['version'] = mike;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'insert';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                oscar = argFoo;
                zulu = argBar;
                mike = this;
                entity = zulu.group;
                tango = zulu.member;
                report = null;
                if(!(report == entity)) { _fun00026_ip = 120; continue _fun00025 }
 27:
                if(!(report != tango)) { _fun00026_ip = 172; continue _fun00025 }
 34:
                offset = _closure1_slot29;
                verify = mike.guildId;
                options = mike.ownerId;
                zulu = tango.user;
                golf = zulu.id;
                zulu = undefined;
                golf = offset.bind(zulu)(verify, options, golf);
                if(!(report != golf)) { _fun00026_ip = 118; continue _fun00025 }
 75:
                verify = mike.rows;
                options = verify.splice;
                report = 0;
                report = options.bind(verify)(oscar, report, golf);
                report = mike.members;
                tango = tango.user;
                tango = tango.id;
                report[tango] = golf;
                _fun00026_ip = 172; continue _fun00025;
 118:
                return zulu;
 120:
                report = mike.rows;
                tango = report.splice;
                verify = _closure1_slot28;
                options = mike.guildId;
                golf = entity.id;
                zulu = entity.count;
                entity = undefined;
                zulu = verify.bind(entity)(options, golf, zulu);
                entity = 0;
                entity = tango.bind(report)(oscar, entity, zulu);
 172:
                entity = mike.version;
                entity = entity + 1;
                mike['version'] = entity;
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'update';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                tango = argFoo;
                zulu = argBar;
                mike = this;
                entity = zulu.group;
                report = zulu.member;
                zulu = mike.rows;
                zulu = zulu[tango];
                oscar = null;
                golf = oscar != zulu;
                if(!golf) { _fun00028_ip = 62; continue _fun00027 }
 40:
                verify = zulu.type;
                options = _closure1_slot22;
                options = options.MEMBER;
                golf = verify === options;
 62:
                if(!golf) { _fun00028_ip = 85; continue _fun00027 }
 65:
                golf = mike.members;
                zulu = zulu.user;
                zulu = zulu.id;
                zulu = delete golf[zulu];
 85:
                if(!(oscar == entity)) { _fun00028_ip = 168; continue _fun00027 }
 89:
                if(!(oscar != report)) { _fun00028_ip = 209; continue _fun00027 }
 93:
                offset = _closure1_slot29;
                verify = mike.guildId;
                options = mike.ownerId;
                zulu = report.user;
                golf = zulu.id;
                zulu = undefined;
                golf = offset.bind(zulu)(verify, options, golf);
                if(!(oscar != golf)) { _fun00028_ip = 166; continue _fun00027 }
 134:
                oscar = mike.rows;
                oscar[tango] = golf;
                oscar = mike.members;
                report = report.user;
                report = report.id;
                oscar[report] = golf;
                _fun00028_ip = 209; continue _fun00027;
 166:
                return zulu;
 168:
                zulu = mike.rows;
                options = _closure1_slot28;
                golf = mike.guildId;
                oscar = entity.id;
                report = entity.count;
                entity = undefined;
                entity = options.bind(entity)(golf, oscar, report);
                zulu[tango] = entity;
 209:
                entity = mike.version;
                entity = entity + 1;
                mike['version'] = entity;
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'delete';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                report = argFoo;
                mike = this;
                entity = mike.rows;
                entity = entity[report];
                zulu = null;
                if(!(zulu != entity)) { _fun00030_ip = 100; continue _fun00029 }
 22:
                tango = entity.type;
                zulu = _closure1_slot22;
                zulu = zulu.MEMBER;
                if(!(tango === zulu)) { _fun00030_ip = 64; continue _fun00029 }
 44:
                zulu = mike.members;
                entity = entity.user;
                entity = entity.id;
                entity = delete zulu[entity];
 64:
                tango = mike.rows;
                zulu = tango.splice;
                entity = 1;
                entity = zulu.bind(tango)(report, entity);
                entity = mike.version;
                entity = entity + 1;
                mike['version'] = entity;
 100:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'rebuildMember';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                verify = argFoo;
                mike = this;
                entity = mike.members;
                report = entity[verify];
                entity = null;
                if(!(entity != report)) { _fun00032_ip = 83; continue _fun00031 }
 22:
                entity = global;
                tango = entity.Object;
                zulu = tango.assign;
                options = _closure1_slot29;
                golf = mike.guildId;
                oscar = mike.ownerId;
                entity = undefined;
                entity = options.bind(entity)(golf, oscar, verify);
                entity = zulu.bind(tango)(report, entity);
                entity = mike.version;
                entity = entity + 1;
                mike['version'] = entity;
 83:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[7] = entity;
        entity = {};
        oscar = 'rebuildMembers';
        entity['key'] = oscar;
        report = function() { // Original name: value
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                tango = this;
                entity = global;
                zulu = entity.Object;
                mike = zulu.keys;
                entity = tango.members;
                zulu = mike.bind(zulu)(entity);
                entity = zulu.length;
                mike = 0;
                entity = mike < entity;
                if(!entity) { _fun00034_ip = 68; continue _fun00033 }
 41:
                report = zulu[mike];
                entity = tango.rebuildMember;
                entity = entity.bind(tango)(report);
                mike = mike + 1;
                entity = zulu.length;
                if(mike < entity) { _fun00034_ip = 41; continue _fun00033 }
 68:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = report;
        mike[8] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    oscar = oscar.bind(entity)();
    var _closure1_slot23 = oscar;
    oscar = function() {
        tango = _closure1_slot8;
        zulu = function() { // Original name: MemberLists
            zulu = this;
            tango = _closure1_slot7;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = {};
            zulu['_guildLists'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'get';
        entity['key'] = mike;
        mike = function(argFoo, argBar) { // Original name: value
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                golf = argFoo;
                tango = argBar;
                entity = this;
                mike = entity._guildLists;
                zulu = mike[golf];
                mike = null;
                if(!(mike == zulu)) { _fun00036_ip = 40; continue _fun00035 }
 25:
                report = entity._guildLists;
                entity = {};
                report[golf] = entity;
                zulu = entity;
 40:
                entity = zulu[tango];
                if(!(mike == entity)) { _fun00036_ip = 129; continue _fun00035 }
 48:
                mike = _closure1_slot23;
                oscar = mike.prototype;
                oscar = Object.create(oscar, {constructor: {value: mike}});
                offset = oscar;
                verify = golf;
                options = tango;
                mike = new offset[mike](verify, options, golf);
                mike = mike instanceof Object ? mike : oscar;
                oscar = mike.setGroups;
                golf = {};
                report = _closure1_slot19;
                report = report.UNKNOWN;
                golf['id'] = report;
                report = 0;
                golf['count'] = report;
                report = new Array(1);
                report[0] = golf;
                report = oscar.bind(mike)(report);
                zulu[tango] = mike;
                entity = mike;
 129:
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(4);
        mike[0] = entity;
        entity = {};
        oscar = 'forEach';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                report = argFoo;
                oscar = argBar;
                mike = this;
                var _closure3_slot0 = oscar;
                zulu = null;
                if(!(zulu != report)) { _fun00038_ip = 73; continue _fun00037 }
 21:
                tango = mike._guildLists;
                report = tango[report];
                if(!(zulu != report)) { _fun00038_ip = 120; continue _fun00037 }
 35:
                golf = _closure1_slot1;
                tango = _closure1_slot3;
                zulu = 19;
                tango = tango[zulu];
                zulu = undefined;
                tango = golf.bind(zulu)(tango);
                zulu = tango.forEach;
                zulu = zulu.bind(tango)(report, oscar);
                _fun00038_ip = 120; continue _fun00037;
 73:
                report = _closure1_slot1;
                tango = _closure1_slot3;
                zulu = 19;
                tango = tango[zulu];
                zulu = undefined;
                tango = report.bind(zulu)(tango);
                zulu = tango.forEach;
                mike = mike._guildLists;
                entity = function(argFoo) {
                    zulu = _closure1_slot1;
                    mike = _closure1_slot3;
                    entity = 19;
                    mike = mike[entity];
                    entity = undefined;
                    report = zulu.bind(entity)(mike);
                    tango = report.forEach;
                    zulu = _closure3_slot0;
                    mike = argFoo;
                    mike = tango.bind(report)(mike, zulu);
                    return entity;
                };
                entity = zulu.bind(tango)(mike, entity);
 120:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'delete';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            mike = entity._guildLists;
            entity = argFoo;
            entity = delete mike[entity];
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'reset';
        entity['key'] = oscar;
        report = function() { // Original name: value
            mike = {};
            entity = this;
            entity['_guildLists'] = mike;
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        mike[3] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    oscar = oscar.bind(entity)();
    yankee = oscar.prototype;
    yankee = Object.create(yankee, {constructor: {value: oscar}});
    output = yankee;
    oscar = new output[oscar](sizing);
    oscar = oscar instanceof Object ? oscar : yankee;
    var _closure1_slot24 = oscar;
    oscar = new Array(0);
    var _closure1_slot25 = oscar;
    oscar = 21;
    oscar = verify[oscar];
    oscar = offset.bind(entity)(oscar);
    yankee = oscar.Store;
    oscar = function(argFoo) {
        tango = function() { // Original name: ChannelMemberStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot7;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot26;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot6;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot8;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            tango = this;
            foxtrot = tango.waitFor;
            vacuum = _closure1_slot18;
            control = _closure1_slot15;
            source = _closure1_slot12;
            update = _closure1_slot14;
            echo = _closure1_slot16;
            result = _closure1_slot17;
            output = _closure1_slot11;
            sizing = _closure1_slot13;
            kilo = _closure1_slot10;
            backup = _closure1_slot9;
            sequence = tango;
            mike = sequence[foxtrot](vacuum, control, source, update, echo, result, output, sizing, kilo, backup, foxtrot);
            report = tango.syncWith;
            mike = _closure1_slot17;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = _closure1_slot32;
            mike = report.bind(tango)(zulu, mike);
            zulu = tango.syncWith;
            report = _closure1_slot10;
            mike = new Array(1);
            mike[0] = report;
            entity = _closure1_slot31;
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golf = 'getProps';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            tango = _closure1_slot24;
            zulu = tango.get;
            report = _closure1_slot30;
            mike = undefined;
            entity = argBar;
            mike = report.bind(mike)(entity);
            entity = argFoo;
            mike = zulu.bind(tango)(entity, mike);
            entity = {};
            golf = mike.guildId;
            oscar = mike.listId;
            zulu = global;
            zulu = zulu.HermesInternal;
            report = zulu.concat;
            tango = '';
            zulu = ':';
            zulu = report.bind(tango)(golf, zulu, oscar);
            entity['listId'] = zulu;
            zulu = mike.groups;
            entity['groups'] = zulu;
            zulu = mike.rows;
            entity['rows'] = zulu;
            mike = mike.version;
            entity['version'] = mike;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getRows';
        report['key'] = golf;
        oscar = function(argFoo, argBar) { // Original name: value
            tango = _closure1_slot24;
            zulu = tango.get;
            report = _closure1_slot30;
            mike = undefined;
            entity = argBar;
            mike = report.bind(mike)(entity);
            entity = argFoo;
            entity = zulu.bind(tango)(entity, mike);
            entity = entity.rows;
            return entity;
        };
        report['value'] = oscar;
        entity[2] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    yankee = oscar.bind(entity)(yankee);
    oscar = 'ChannelMemberStore';
    yankee['displayName'] = oscar;
    oscar = 22;
    oscar = verify[oscar];
    sizing = offset.bind(entity)(oscar);
    oscar = {};
    oscar['CONNECTION_OPEN'] = romeo;
    oscar['OVERLAY_INITIALIZE'] = romeo;
    romeo = function(argFoo) { // Original name: handleGuildMemberListUpdate
        entity = argFoo;
        oscar = _closure1_slot24;
        report = oscar.get;
        tango = entity.guildId;
        zulu = entity.id;
        zulu = report.bind(oscar)(tango, zulu);
        var _closure2_slot0 = zulu;
        report = entity.ops;
        tango = report.forEach;
        mike = function(argFoo) {
            _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                entity = argFoo;
                zulu = entity.op;
                mike = 'SYNC';
                if(!(mike !== zulu)) { _fun00040_ip = 168; continue _fun00039 }
 19:
                mike = 'INVALIDATE';
                if(!(mike !== zulu)) { _fun00040_ip = 142; continue _fun00039 }
 29:
                mike = 'INSERT';
                if(!(mike !== zulu)) { _fun00040_ip = 111; continue _fun00039 }
 37:
                mike = 'UPDATE';
                if(!(mike !== zulu)) { _fun00040_ip = 80; continue _fun00039 }
 45:
                mike = 'DELETE';
                if(!(mike === zulu)) { _fun00040_ip = 199; continue _fun00039 }
 56:
                tango = _closure2_slot0;
                zulu = tango.delete;
                mike = entity.index;
                mike = zulu.bind(tango)(mike);
                _fun00040_ip = 199; continue _fun00039;
 80:
                report = _closure2_slot0;
                tango = report.update;
                zulu = entity.index;
                mike = entity.item;
                mike = tango.bind(report)(zulu, mike);
                _fun00040_ip = 199; continue _fun00039;
 111:
                report = _closure2_slot0;
                tango = report.insert;
                zulu = entity.index;
                mike = entity.item;
                mike = tango.bind(report)(zulu, mike);
                _fun00040_ip = 199; continue _fun00039;
 142:
                tango = _closure2_slot0;
                zulu = tango.invalidate;
                mike = entity.range;
                mike = zulu.bind(tango)(mike);
                _fun00040_ip = 199; continue _fun00039;
 168:
                tango = _closure2_slot0;
                zulu = tango.sync;
                mike = entity.range;
                entity = entity.items;
                entity = zulu.bind(tango)(mike, entity);
 199:
                entity = undefined;
                return entity;
            }
        };
        mike = tango.bind(report)(mike);
        mike = zulu.setGroups;
        entity = entity.groups;
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    oscar['GUILD_MEMBER_LIST_UPDATE'] = romeo;
    romeo = function(argFoo) { // Original name: handleGuildUpdate
        entity = argFoo;
        entity = entity.guild;
        tango = _closure1_slot24;
        zulu = tango.forEach;
        mike = entity.id;
        entity = function(argFoo) {
            _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                mike = argFoo;
                entity = mike.updateOwnerId;
                entity = entity.bind(mike)();
                if(!entity) { _fun00042_ip = 26; continue _fun00041 }
 16:
                entity = mike.rebuildMembers;
                entity = entity.bind(mike)();
 26:
                entity = undefined;
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        entity = undefined;
        return entity;
    };
    oscar['GUILD_UPDATE'] = romeo;
    romeo = function(argFoo) { // Original name: handleGuildDelete
        entity = argFoo;
        entity = entity.guild;
        zulu = _closure1_slot24;
        mike = zulu.delete;
        entity = entity.id;
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    oscar['GUILD_DELETE'] = romeo;
    romeo = function(argFoo) { // Original name: handleGuildRoleUpdate
        entity = argFoo;
        tango = entity.guildId;
        zulu = _closure1_slot24;
        mike = zulu.forEach;
        entity = function(argFoo) {
            mike = argFoo;
            entity = mike.rebuildMembers;
            entity = entity.bind(mike)();
            return entity;
        };
        entity = mike.bind(zulu)(tango, entity);
        entity = undefined;
        return entity;
    };
    oscar['GUILD_ROLE_UPDATE'] = romeo;
    romeo = function(argFoo) { // Original name: handleMemberUpdate
        mike = argFoo;
        tango = mike.guildId;
        mike = mike.user;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot24;
        mike = zulu.forEach;
        entity = function(argFoo) {
            zulu = argFoo;
            mike = zulu.rebuildMember;
            entity = _closure2_slot0;
            entity = entity.id;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = mike.bind(zulu)(tango, entity);
        entity = undefined;
        return entity;
    };
    oscar['GUILD_MEMBER_UPDATE'] = romeo;
    golf = function() { // Original name: handleChannelUpdates
        entity = true;
        return entity;
    };
    oscar['CHANNEL_UPDATES'] = golf;
    golf = yankee.prototype;
    golf = Object.create(golf, {constructor: {value: yankee}});
    output = golf;
    kilo = oscar;
    oscar = new output[yankee](sizing, kilo, backup);
    oscar = oscar instanceof Object ? oscar : golf;
    golf = 23;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'stores/ChannelMemberStore.tsx';
    golf = options.bind(verify)(golf);
    zulu['default'] = oscar;
    zulu['EVERYONE_ID'] = report;
    zulu['EVERYONE_CHANNEL_ID'] = tango;
    zulu['MemberListRowTypes'] = mike;
    return entity;
})();