// app/modules/guild_mod_dash_member_safety/GuildMemberSafetyPagination.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    verify = argBar;
    oscar = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = options;
    report = function() { // Original name: createDefaultMemberSafetyPaginationState
        entity = {'pageSize': null, 'currentPage': 1, 'continuationToken': null, 'sort': null, 'elasticSearchCursor': null};
        tango = _closure1_slot6;
        zulu = 0;
        zulu = tango[zulu];
        entity['pageSize'] = zulu;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 4;
        zulu = zulu[mike];
        mike = undefined;
        mike = tango.bind(mike)(zulu);
        mike = mike.OrderBy;
        mike = mike.ORDER_BY_UNSPECIFIED;
        entity['sort'] = mike;
        return entity;
    };
    var _closure1_slot8 = report;
    entity = global;
    offset = entity.Object;
    golf = offset.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(offset)(zulu, entity, mike);
    entity = 0;
    mike = options[entity];
    entity = undefined;
    mike = oscar.bind(entity)(mike);
    var _closure1_slot2 = mike;
    offset = 1;
    mike = options[offset];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 2;
    mike = options[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 3;
    mike = options[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot5 = mike;
    golf = [12, 25, 50, 100];
    var _closure1_slot6 = golf;
    mike = {};
    mike['FORWARD'] = offset;
    oscar = 'FORWARD';
    mike[offset] = oscar;
    offset = -1;
    mike['BACKWARD'] = offset;
    oscar = 'BACKWARD';
    mike[offset] = oscar;
    var _closure1_slot7 = mike;
    mike = function() {
        tango = _closure1_slot4;
        zulu = function(argFoo, argBar) { // Original name: GuildMemberSafetyPagination
            zulu = this;
            var _closure3_slot0 = zulu;
            oscar = _closure1_slot3;
            report = _closure2_slot0;
            entity = undefined;
            report = oscar.bind(entity)(zulu, report);
            tango = function(argFoo, argBar, argBaz) {
                _fun59713: for(var _fun59713_ip = 0; ; ) switch(_fun59713_ip) {
 0:
                    entity = argFoo;
                    mike = global;
                    tango = mike.Math;
                    zulu = tango.floor;
                    mike = _closure3_slot0;
                    mike = mike._paginationState;
                    report = mike.pageSize;
                    mike = argBaz;
                    mike = mike / report;
                    zulu = zulu.bind(tango)(mike);
                    mike = 1;
                    mike = zulu + mike;
                    tango = entity[mike];
                    zulu = null;
                    if(!(zulu == tango)) { _fun59713_ip = 73; continue _fun59713 }
 65:
                    zulu = new Array(0);
                    entity[mike] = zulu;
 73:
                    tango = entity[mike];
                    zulu = tango.push;
                    mike = argBar;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                }
            };
            zulu['_reduceMemberIdsToPaginationChunks'] = tango;
            tango = argFoo;
            zulu['guildId'] = tango;
            tango = _closure1_slot8;
            tango = tango.bind(entity)();
            zulu['_paginationState'] = tango;
            tango = 0;
            zulu['_version'] = tango;
            oscar = zulu._initPaginationFromRawMembers;
            report = argBar;
            oscar = oscar.bind(zulu)(report);
            report = _closure1_slot2;
            mike = 2;
            mike = report.bind(entity)(oscar, mike);
            report = mike[tango];
            tango = 1;
            mike = mike[tango];
            zulu['_sortedMemberIds'] = report;
            zulu['_cachedPaginationChunks'] = mike;
            mike = zulu._version;
            mike = mike + tango;
            zulu['_version'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'reset';
        entity['key'] = mike;
        mike = function() { // Original name: value
            zulu = this;
            mike = _closure1_slot8;
            entity = undefined;
            mike = mike.bind(entity)();
            zulu['_paginationState'] = mike;
            mike = new Array(0);
            zulu['_sortedMemberIds'] = mike;
            mike = {};
            zulu['_cachedPaginationChunks'] = mike;
            tango = zulu._version;
            mike = 1;
            mike = tango + mike;
            zulu['_version'] = mike;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(16);
        mike[0] = entity;
        entity = {};
        oscar = 'isMemberOnCurrentPage';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun59715: for(var _fun59715_ip = 0; ; ) switch(_fun59715_ip) {
 0:
                entity = this;
                mike = entity._cachedPaginationChunks;
                entity = entity._paginationState;
                entity = entity.currentPage;
                zulu = mike[entity];
                entity = null;
                if(!(entity == zulu)) { _fun59715_ip = 35; continue _fun59715 }
 31:
                zulu = new Array(0);
 35:
                mike = zulu.includes;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'isMemberInAnyChunk';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity._sortedMemberIds;
            mike = zulu.includes;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = '_initPaginationFromRawMembers';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            report = argFoo;
            mike = this;
            var _closure3_slot0 = mike;
            zulu = new Array(0);
            var _closure3_slot1 = zulu;
            tango = report.reduce;
            mike = function(argFoo, argBar, argBaz) {
                mike = argBar;
                golf = _closure3_slot0;
                oscar = golf._reduceMemberIdsToPaginationChunks;
                report = mike.userId;
                tango = argFoo;
                entity = argBaz;
                entity = oscar.bind(golf)(tango, report, entity);
                tango = _closure3_slot1;
                zulu = tango.push;
                mike = mike.userId;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity = {};
            mike = tango.bind(report)(mike, entity);
            entity = new Array(2);
            entity[0] = zulu;
            entity[1] = mike;
            return entity;
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = '_buildPaginationFromMemberIds';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            tango = argFoo;
            zulu = tango.reduce;
            entity = this;
            mike = entity._reduceMemberIdsToPaginationChunks;
            entity = {};
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = '_rebuildPaginationChunksFromStoredMembers';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            mike = this;
            zulu = mike._buildPaginationFromMemberIds;
            entity = mike._sortedMemberIds;
            entity = zulu.bind(mike)(entity);
            mike['_cachedPaginationChunks'] = entity;
            zulu = mike._version;
            entity = 1;
            entity = zulu + entity;
            mike['_version'] = entity;
            entity = true;
            return entity;
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'getPaginationState';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            entity = entity._paginationState;
            return entity;
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'updatePaginationToken';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun59722: for(var _fun59722_ip = 0; ; ) switch(_fun59722_ip) {
 0:
                report = argFoo;
                zulu = this;
                entity = zulu._paginationState;
                entity = entity.continuationToken;
                entity = report !== entity;
                if(!entity) { _fun59722_ip = 57; continue _fun59722 }
 25:
                mike = {};
                oscar = zulu._paginationState;
                golf = mike;
                tango = copyDataProperties(golf, oscar);
                tango = 'continuationToken';
                mike[tango] = report;
                zulu['_paginationState'] = mike;
                entity = true;
 57:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[7] = entity;
        entity = {};
        oscar = '_calculateNewPageFromPageSizeChange';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun59723: for(var _fun59723_ip = 0; ; ) switch(_fun59723_ip) {
 0:
                golf = argFoo;
                mike = argBar;
                zulu = this;
                entity = zulu._paginationState;
                oscar = entity.currentPage;
                entity = entity.pageSize;
                tango = golf * entity;
                zulu = zulu._sortedMemberIds;
                zulu = zulu.length;
                if(!(!(tango <= zulu))) { _fun59723_ip = 51; continue _fun59723 }
 46:
                zulu = 1;
                return zulu;
 51:
                zulu = null;
                if(!(zulu != mike)) { _fun59723_ip = 60; continue _fun59723 }
 57:
                oscar = mike;
 60:
                mike = global;
                tango = mike.Math;
                zulu = tango.max;
                report = mike.Math;
                mike = report.ceil;
                entity = entity / golf;
                entity = entity * oscar;
                mike = mike.bind(report)(entity);
                entity = 1;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[8] = entity;
        entity = {};
        oscar = 'updatePaginationState';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun59724: for(var _fun59724_ip = 0; ; ) switch(_fun59724_ip) {
 0:
                tango = argFoo;
                zulu = this;
                mike = tango.pageSize;
                entity = null;
                report = entity != mike;
                if(!report) { _fun59724_ip = 43; continue _fun59724 }
 21:
                oscar = tango.pageSize;
                mike = zulu._paginationState;
                mike = mike.pageSize;
                report = oscar !== mike;
 43:
                mike = false;
                if(!report) { _fun59724_ip = 98; continue _fun59724 }
 48:
                oscar = zulu._calculateNewPageFromPageSizeChange;
                report = tango.pageSize;
                if(!(entity == report)) { _fun59724_ip = 78; continue _fun59724 }
 66:
                entity = zulu._paginationState;
                report = entity.pageSize;
 78:
                entity = tango.currentPage;
                entity = oscar.bind(zulu)(report, entity);
                tango['currentPage'] = entity;
                mike = true;
 98:
                entity = {};
                golf = zulu._paginationState;
                options = entity;
                report = copyDataProperties(options, golf);
                options = entity;
                golf = tango;
                tango = copyDataProperties(options, golf);
                zulu['_paginationState'] = entity;
                if(!mike) { _fun59724_ip = 142; continue _fun59724 }
 132:
                entity = zulu._rebuildPaginationChunksFromStoredMembers;
                entity = entity.bind(zulu)();
 142:
                entity = new Array(2);
                zulu = true;
                entity[0] = zulu;
                entity[1] = mike;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[9] = entity;
        entity = {};
        oscar = 'updateSortedMembers';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            mike = this;
            zulu = mike._initPaginationFromRawMembers;
            entity = argFoo;
            report = zulu.bind(mike)(entity);
            tango = _closure1_slot2;
            zulu = undefined;
            entity = 2;
            entity = tango.bind(zulu)(report, entity);
            zulu = 0;
            tango = entity[zulu];
            zulu = 1;
            entity = entity[zulu];
            mike['_sortedMemberIds'] = tango;
            mike['_cachedPaginationChunks'] = entity;
            entity = mike._version;
            entity = entity + zulu;
            mike['_version'] = entity;
            entity = true;
            return entity;
        };
        entity['value'] = oscar;
        mike[10] = entity;
        entity = {};
        oscar = 'updateSortedMembersByUserIds';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            mike = this;
            entity = argFoo;
            mike['_sortedMemberIds'] = entity;
            entity = mike._rebuildPaginationChunksFromStoredMembers;
            entity = entity.bind(mike)();
            entity = true;
            return entity;
        };
        entity['value'] = oscar;
        mike[11] = entity;
        entity = {};
        oscar = '_findMember';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun59727: for(var _fun59727_ip = 0; ; ) switch(_fun59727_ip) {
 0:
                verify = argFoo;
                options = arguments[1];
                golf = this;
                oscar = undefined;
                if(!(options === oscar)) { _fun59727_ip = 28; continue _fun59727 }
 15:
                entity = _closure1_slot7;
                options = entity.BACKWARD;
 28:
                entity = golf._sortedMemberIds;
                mike = entity.length;
                entity = verify;
                if(!(verify < mike)) { _fun59727_ip = 64; continue _fun59727 }
 46:
                mike = golf._sortedMemberIds;
                zulu = mike.length;
                mike = 1;
                entity = zulu - mike;
 64:
                report = 0;
                entity = entity < report;
                entity = golf._sortedMemberIds;
                offset = entity[verify];
                zulu = _closure1_slot5;
                mike = zulu.getMember;
                entity = golf.guildId;
                mike = mike.bind(zulu)(entity, offset);
                zulu = null;
                entity = mike;
                if(!(zulu == entity)) { _fun59727_ip = 204; continue _fun59727 }
 113:
                verify = verify + options;
                entity = mike;
                if(!(!(verify < report))) { _fun59727_ip = 204; continue _fun59727 }
 124:
                offset = golf._sortedMemberIds;
                offset = offset.length;
                entity = mike;
                if(!(!(verify >= offset))) { _fun59727_ip = 204; continue _fun59727 }
 142:
                offset = golf._sortedMemberIds;
                foxtrot = offset[verify];
                romeo = _closure1_slot5;
                yankee = romeo.getMember;
                offset = golf.guildId;
                offset = yankee.bind(romeo)(offset, foxtrot);
                romeo = zulu == offset;
                yankee = undefined;
                if(romeo) { _fun59727_ip = 188; continue _fun59727 }
 182:
                yankee = offset.joinedAt;
 188:
                if(!(zulu == yankee)) { _fun59727_ip = 194; continue _fun59727 }
 192:
                offset = null;
 194:
                mike = offset;
                entity = mike;
                if(zulu == entity) { _fun59727_ip = 113; continue _fun59727 }
 204:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[12] = entity;
        entity = {};
        oscar = 'getElasticSearchPagination';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            mike = this;
            entity = mike.getPaginationState;
            entity = entity.bind(mike)();
            entity = entity.elasticSearchCursor;
            return entity;
        };
        entity['value'] = oscar;
        mike[13] = entity;
        entity = {};
        oscar = 'paginatedMembers';
        entity['key'] = oscar;
        oscar = function() { // Original name: get
            entity = this;
            entity = entity._cachedPaginationChunks;
            return entity;
        };
        entity['get'] = oscar;
        mike[14] = entity;
        entity = {};
        oscar = 'version';
        entity['key'] = oscar;
        report = function() { // Original name: get
            entity = this;
            entity = entity._version;
            return entity;
        };
        entity['get'] = report;
        mike[15] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    oscar = 5;
    options = options[oscar];
    offset = verify.bind(entity)(options);
    verify = offset.fileFinishedImporting;
    options = 'modules/guild_mod_dash_member_safety/GuildMemberSafetyPagination.tsx';
    options = verify.bind(offset)(options);
    zulu['PAGINATION_PAGE_SIZE_OPTIONS'] = golf;
    golf = 7;
    zulu['MAX_VISIBLE_PAGES'] = golf;
    zulu['MAX_FORWARD_PAGE_SKIP'] = oscar;
    oscar = 250;
    zulu['DEFAULT_SEARCH_CHUNK_LIMIT'] = oscar;
    zulu['createDefaultMemberSafetyPaginationState'] = report;
    tango = function(argFoo) { // Original name: getSearchChunkLimit
        entity = global;
        tango = entity.Math;
        zulu = tango.max;
        entity = argFoo;
        mike = entity.pageSize;
        entity = 5;
        mike = entity * mike;
        entity = 250;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['getSearchChunkLimit'] = tango;
    zulu['GuildMemberSafetyPagination'] = mike;
    return entity;
})();