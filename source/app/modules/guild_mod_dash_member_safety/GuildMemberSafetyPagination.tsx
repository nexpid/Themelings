// app/modules/guild_mod_dash_member_safety/GuildMemberSafetyPagination.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    verify = argBar;
    oscard = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = option;
    report = function() { // Original name: createDefaultMemberSafetyPaginationState
        entity = {'pageSize': null, 'currentPage': 1, 'continuationToken': null, 'sort': null, 'elasticSearchCursor': null};
        tangon = _closure1_slot6;
        zuuluu = 0;
        zuuluu = tangon[zuuluu];
        entity['pageSize'] = zuuluu;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 4;
        zuuluu = zuuluu[michal];
        michal = undefined;
        michal = tangon.bind(michal)(zuuluu);
        michal = michal.OrderBy;
        michal = michal.ORDER_BY_UNSPECIFIED;
        entity['sort'] = michal;
        return entity;
    };
    var _closure1_slot8 = report;
    entity = global;
    offset = entity.Object;
    golfie = offset.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(offset)(zuuluu, entity, michal);
    entity = 0;
    michal = option[entity];
    entity = undefined;
    michal = oscard.bind(entity)(michal);
    var _closure1_slot2 = michal;
    offset = 1;
    michal = option[offset];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 2;
    michal = option[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 3;
    michal = option[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot5 = michal;
    golfie = [12, 25, 50, 100];
    var _closure1_slot6 = golfie;
    michal = {};
    michal['FORWARD'] = offset;
    oscard = 'FORWARD';
    michal[offset] = oscard;
    offset = -1;
    michal['BACKWARD'] = offset;
    oscard = 'BACKWARD';
    michal[offset] = oscard;
    var _closure1_slot7 = michal;
    michal = function() {
        tangon = _closure1_slot4;
        zuuluu = function(argFoo, argBar) { // Original name: GuildMemberSafetyPagination
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            oscard = _closure1_slot3;
            report = _closure2_slot0;
            entity = undefined;
            report = oscard.bind(entity)(zuuluu, report);
            tangon = function(argFoo, argBar, argBaz) {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    entity = argFoo;
                    michal = global;
                    tangon = michal.Math;
                    zuuluu = tangon.floor;
                    michal = _closure3_slot0;
                    michal = michal._paginationState;
                    report = michal.pageSize;
                    michal = argBaz;
                    michal = michal / report;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = 1;
                    michal = zuuluu + michal;
                    tangon = entity[michal];
                    zuuluu = null;
                    if(!(zuuluu == tangon)) { _fun00002_ip = 73; continue _fun00001 }
 65:
                    zuuluu = new Array(0);
                    entity[michal] = zuuluu;
 73:
                    tangon = entity[michal];
                    zuuluu = tangon.push;
                    michal = argBar;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            zuuluu['_reduceMemberIdsToPaginationChunks'] = tangon;
            tangon = argFoo;
            zuuluu['guildId'] = tangon;
            tangon = _closure1_slot8;
            tangon = tangon.bind(entity)();
            zuuluu['_paginationState'] = tangon;
            tangon = 0;
            zuuluu['_version'] = tangon;
            oscard = zuuluu._initPaginationFromRawMembers;
            report = argBar;
            oscard = oscard.bind(zuuluu)(report);
            report = _closure1_slot2;
            michal = 2;
            michal = report.bind(entity)(oscard, michal);
            report = michal[tangon];
            tangon = 1;
            michal = michal[tangon];
            zuuluu['_sortedMemberIds'] = report;
            zuuluu['_cachedPaginationChunks'] = michal;
            michal = zuuluu._version;
            michal = michal + tangon;
            zuuluu['_version'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'reset';
        entity['key'] = michal;
        michal = function() { // Original name: value
            zuuluu = this;
            michal = _closure1_slot8;
            entity = undefined;
            michal = michal.bind(entity)();
            zuuluu['_paginationState'] = michal;
            michal = new Array(0);
            zuuluu['_sortedMemberIds'] = michal;
            michal = {};
            zuuluu['_cachedPaginationChunks'] = michal;
            tangon = zuuluu._version;
            michal = 1;
            michal = tangon + michal;
            zuuluu['_version'] = michal;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(16);
        michal[0] = entity;
        entity = {};
        oscard = 'isMemberOnCurrentPage';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = this;
                michal = entity._cachedPaginationChunks;
                entity = entity._paginationState;
                entity = entity.currentPage;
                zuuluu = michal[entity];
                entity = null;
                if(!(entity == zuuluu)) { _fun00004_ip = 35; continue _fun00003 }
 31:
                zuuluu = new Array(0);
 35:
                michal = zuuluu.includes;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'isMemberInAnyChunk';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            entity = this;
            zuuluu = entity._sortedMemberIds;
            michal = zuuluu.includes;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = '_initPaginationFromRawMembers';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            report = argFoo;
            michal = this;
            var _closure3_slot0 = michal;
            zuuluu = new Array(0);
            var _closure3_slot1 = zuuluu;
            tangon = report.reduce;
            michal = function(argFoo, argBar, argBaz) {
                michal = argBar;
                golfie = _closure3_slot0;
                oscard = golfie._reduceMemberIdsToPaginationChunks;
                report = michal.userId;
                tangon = argFoo;
                entity = argBaz;
                entity = oscard.bind(golfie)(tangon, report, entity);
                tangon = _closure3_slot1;
                zuuluu = tangon.push;
                michal = michal.userId;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity = {};
            michal = tangon.bind(report)(michal, entity);
            entity = new Array(2);
            entity[0] = zuuluu;
            entity[1] = michal;
            return entity;
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = '_buildPaginationFromMemberIds';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            tangon = argFoo;
            zuuluu = tangon.reduce;
            entity = this;
            michal = entity._reduceMemberIdsToPaginationChunks;
            entity = {};
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        entity['value'] = oscard;
        michal[4] = entity;
        entity = {};
        oscard = '_rebuildPaginationChunksFromStoredMembers';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            michal = this;
            zuuluu = michal._buildPaginationFromMemberIds;
            entity = michal._sortedMemberIds;
            entity = zuuluu.bind(michal)(entity);
            michal['_cachedPaginationChunks'] = entity;
            zuuluu = michal._version;
            entity = 1;
            entity = zuuluu + entity;
            michal['_version'] = entity;
            entity = true;
            return entity;
        };
        entity['value'] = oscard;
        michal[5] = entity;
        entity = {};
        oscard = 'getPaginationState';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            entity = entity._paginationState;
            return entity;
        };
        entity['value'] = oscard;
        michal[6] = entity;
        entity = {};
        oscard = 'updatePaginationToken';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                report = argFoo;
                zuuluu = this;
                entity = zuuluu._paginationState;
                entity = entity.continuationToken;
                entity = report !== entity;
                if(!entity) { _fun00006_ip = 57; continue _fun00005 }
 25:
                michal = {};
                oscard = zuuluu._paginationState;
                golfie = michal;
                tangon = copyDataProperties(golfie, oscard);
                tangon = 'continuationToken';
                michal[tangon] = report;
                zuuluu['_paginationState'] = michal;
                entity = true;
 57:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[7] = entity;
        entity = {};
        oscard = '_calculateNewPageFromPageSizeChange';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                golfie = argFoo;
                michal = argBar;
                zuuluu = this;
                entity = zuuluu._paginationState;
                oscard = entity.currentPage;
                entity = entity.pageSize;
                tangon = golfie * entity;
                zuuluu = zuuluu._sortedMemberIds;
                zuuluu = zuuluu.length;
                if(!(!(tangon <= zuuluu))) { _fun00008_ip = 51; continue _fun00007 }
 46:
                zuuluu = 1;
                return zuuluu;
 51:
                zuuluu = null;
                if(!(zuuluu != michal)) { _fun00008_ip = 60; continue _fun00007 }
 57:
                oscard = michal;
 60:
                michal = global;
                tangon = michal.Math;
                zuuluu = tangon.max;
                report = michal.Math;
                michal = report.ceil;
                entity = entity / golfie;
                entity = entity * oscard;
                michal = michal.bind(report)(entity);
                entity = 1;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[8] = entity;
        entity = {};
        oscard = 'updatePaginationState';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tangon = argFoo;
                zuuluu = this;
                michal = tangon.pageSize;
                entity = null;
                report = entity != michal;
                if(!report) { _fun00010_ip = 43; continue _fun00009 }
 21:
                oscard = tangon.pageSize;
                michal = zuuluu._paginationState;
                michal = michal.pageSize;
                report = oscard !== michal;
 43:
                michal = false;
                if(!report) { _fun00010_ip = 98; continue _fun00009 }
 48:
                oscard = zuuluu._calculateNewPageFromPageSizeChange;
                report = tangon.pageSize;
                if(!(entity == report)) { _fun00010_ip = 78; continue _fun00009 }
 66:
                entity = zuuluu._paginationState;
                report = entity.pageSize;
 78:
                entity = tangon.currentPage;
                entity = oscard.bind(zuuluu)(report, entity);
                tangon['currentPage'] = entity;
                michal = true;
 98:
                entity = {};
                golfie = zuuluu._paginationState;
                option = entity;
                report = copyDataProperties(option, golfie);
                option = entity;
                golfie = tangon;
                tangon = copyDataProperties(option, golfie);
                zuuluu['_paginationState'] = entity;
                if(!michal) { _fun00010_ip = 142; continue _fun00009 }
 132:
                entity = zuuluu._rebuildPaginationChunksFromStoredMembers;
                entity = entity.bind(zuuluu)();
 142:
                entity = new Array(2);
                zuuluu = true;
                entity[0] = zuuluu;
                entity[1] = michal;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[9] = entity;
        entity = {};
        oscard = 'updateSortedMembers';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            michal = this;
            zuuluu = michal._initPaginationFromRawMembers;
            entity = argFoo;
            report = zuuluu.bind(michal)(entity);
            tangon = _closure1_slot2;
            zuuluu = undefined;
            entity = 2;
            entity = tangon.bind(zuuluu)(report, entity);
            zuuluu = 0;
            tangon = entity[zuuluu];
            zuuluu = 1;
            entity = entity[zuuluu];
            michal['_sortedMemberIds'] = tangon;
            michal['_cachedPaginationChunks'] = entity;
            entity = michal._version;
            entity = entity + zuuluu;
            michal['_version'] = entity;
            entity = true;
            return entity;
        };
        entity['value'] = oscard;
        michal[10] = entity;
        entity = {};
        oscard = 'updateSortedMembersByUserIds';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            michal = this;
            entity = argFoo;
            michal['_sortedMemberIds'] = entity;
            entity = michal._rebuildPaginationChunksFromStoredMembers;
            entity = entity.bind(michal)();
            entity = true;
            return entity;
        };
        entity['value'] = oscard;
        michal[11] = entity;
        entity = {};
        oscard = '_findMember';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                verify = argFoo;
                option = arguments[1];
                golfie = this;
                oscard = undefined;
                if(!(option === oscard)) { _fun00012_ip = 28; continue _fun00011 }
 15:
                entity = _closure1_slot7;
                option = entity.BACKWARD;
 28:
                entity = golfie._sortedMemberIds;
                michal = entity.length;
                entity = verify;
                if(!(verify < michal)) { _fun00012_ip = 64; continue _fun00011 }
 46:
                michal = golfie._sortedMemberIds;
                zuuluu = michal.length;
                michal = 1;
                entity = zuuluu - michal;
 64:
                report = 0;
                entity = entity < report;
                entity = golfie._sortedMemberIds;
                offset = entity[verify];
                zuuluu = _closure1_slot5;
                michal = zuuluu.getMember;
                entity = golfie.guildId;
                michal = michal.bind(zuuluu)(entity, offset);
                zuuluu = null;
                entity = michal;
                if(!(zuuluu == entity)) { _fun00012_ip = 204; continue _fun00011 }
 113:
                verify = verify + option;
                entity = michal;
                if(!(!(verify < report))) { _fun00012_ip = 204; continue _fun00011 }
 124:
                offset = golfie._sortedMemberIds;
                offset = offset.length;
                entity = michal;
                if(!(!(verify >= offset))) { _fun00012_ip = 204; continue _fun00011 }
 142:
                offset = golfie._sortedMemberIds;
                foxtra = offset[verify];
                romeon = _closure1_slot5;
                yankee = romeon.getMember;
                offset = golfie.guildId;
                offset = yankee.bind(romeon)(offset, foxtra);
                romeon = zuuluu == offset;
                yankee = undefined;
                if(romeon) { _fun00012_ip = 188; continue _fun00011 }
 182:
                yankee = offset.joinedAt;
 188:
                if(!(zuuluu == yankee)) { _fun00012_ip = 194; continue _fun00011 }
 192:
                offset = null;
 194:
                michal = offset;
                entity = michal;
                if(zuuluu == entity) { _fun00012_ip = 113; continue _fun00011 }
 204:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[12] = entity;
        entity = {};
        oscard = 'getElasticSearchPagination';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            michal = this;
            entity = michal.getPaginationState;
            entity = entity.bind(michal)();
            entity = entity.elasticSearchCursor;
            return entity;
        };
        entity['value'] = oscard;
        michal[13] = entity;
        entity = {};
        oscard = 'paginatedMembers';
        entity['key'] = oscard;
        oscard = function() { // Original name: get
            entity = this;
            entity = entity._cachedPaginationChunks;
            return entity;
        };
        entity['get'] = oscard;
        michal[14] = entity;
        entity = {};
        oscard = 'version';
        entity['key'] = oscard;
        report = function() { // Original name: get
            entity = this;
            entity = entity._version;
            return entity;
        };
        entity['get'] = report;
        michal[15] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    oscard = 5;
    option = option[oscard];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'modules/guild_mod_dash_member_safety/GuildMemberSafetyPagination.tsx';
    option = verify.bind(offset)(option);
    zuuluu['PAGINATION_PAGE_SIZE_OPTIONS'] = golfie;
    golfie = 7;
    zuuluu['MAX_VISIBLE_PAGES'] = golfie;
    zuuluu['MAX_FORWARD_PAGE_SKIP'] = oscard;
    oscard = 250;
    zuuluu['DEFAULT_SEARCH_CHUNK_LIMIT'] = oscard;
    zuuluu['createDefaultMemberSafetyPaginationState'] = report;
    tangon = function(argFoo) { // Original name: getSearchChunkLimit
        entity = global;
        tangon = entity.Math;
        zuuluu = tangon.max;
        entity = argFoo;
        michal = entity.pageSize;
        entity = 5;
        michal = entity * michal;
        entity = 250;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['getSearchChunkLimit'] = tangon;
    zuuluu['GuildMemberSafetyPagination'] = michal;
    return entity;
})();