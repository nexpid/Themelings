// app/modules/guild_mod_dash_member_safety/GuildMemberSafetyPageStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 343; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
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
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot9;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot9;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
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
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
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
                    _fun00004_ip = 67; continue _fun00003;
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
    var _closure1_slot8 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    golf = 3;
    tango = oscar[golf];
    tango = options.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    tango = tango.Millis;
    tango = tango.SECOND;
    tango = golf * tango;
    var _closure1_slot7 = tango;
    mike = function() {
        tango = _closure1_slot4;
        zulu = function(argFoo) { // Original name: GuildMemberSafetyPageStore
            zulu = this;
            tango = _closure1_slot3;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = 0;
            zulu['lastRefreshTimestamp'] = mike;
            mike = global;
            tango = mike.Date;
            mike = tango.now;
            mike = mike.bind(tango)();
            zulu['lastCursorTimestamp'] = mike;
            mike = null;
            zulu['_lastRefreshTimer'] = mike;
            tango = argFoo;
            zulu['guildId'] = tango;
            tango = false;
            zulu['_initialized'] = tango;
            zulu['_members'] = mike;
            zulu['_pagination'] = mike;
            zulu['_search'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'getSearchIndex';
        entity['key'] = mike;
        mike = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = this;
                zulu = entity._search;
                mike = null;
                if(!(mike != zulu)) { _fun00008_ip = 69; continue _fun00007 }
 15:
                entity = entity._search;
                entity = entity.hasDefaultQuery;
                if(entity) { _fun00008_ip = 69; continue _fun00007 }
 30:
                zulu = _closure1_slot0;
                mike = _closure1_slot1;
                entity = 6;
                mike = mike[entity];
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                entity = entity.MemberSafetySecondaryIndex;
                entity = entity.INCLUDED_IN_SEARCH_RESULTS;
                _fun00008_ip = 106; continue _fun00007;
 69:
                tango = _closure1_slot0;
                zulu = _closure1_slot1;
                mike = 6;
                zulu = zulu[mike];
                mike = undefined;
                mike = tango.bind(mike)(zulu);
                mike = mike.MemberSafetySecondaryIndex;
                entity = mike.CURRENT_GUILD_MEMBER;
 106:
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(38);
        mike[0] = entity;
        entity = {};
        oscar = 'initialize';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                mike = this;
                entity = mike._initialized;
                if(entity) { _fun00010_ip = 214; continue _fun00009 }
 15:
                entity = true;
                mike['_initialized'] = entity;
                tango = _closure1_slot0;
                report = _closure1_slot1;
                entity = 7;
                entity = report[entity];
                zulu = undefined;
                entity = tango.bind(zulu)(entity);
                golf = entity.GuildMemberSafetySearch;
                verify = mike.guildId;
                oscar = golf.prototype;
                oscar = Object.create(oscar, {constructor: {value: golf}});
                offset = oscar;
                entity = new offset[golf](verify, options);
                entity = entity instanceof Object ? entity : oscar;
                mike['_search'] = entity;
                entity = 6;
                entity = report[entity];
                entity = tango.bind(zulu)(entity);
                golf = entity.GuildMemberSafetyMembers;
                verify = mike.guildId;
                oscar = golf.prototype;
                oscar = Object.create(oscar, {constructor: {value: golf}});
                offset = oscar;
                entity = new offset[golf](verify, options);
                entity = entity instanceof Object ? entity : oscar;
                mike['_members'] = entity;
                entity = 8;
                entity = report[entity];
                entity = tango.bind(zulu)(entity);
                report = entity.GuildMemberSafetyPagination;
                tango = mike.guildId;
                oscar = mike._members;
                zulu = oscar.values;
                entity = mike.getSearchIndex;
                entity = entity.bind(mike)();
                options = zulu.bind(oscar)(entity);
                zulu = report.prototype;
                zulu = Object.create(zulu, {constructor: {value: report}});
                offset = zulu;
                verify = tango;
                entity = new offset[report](verify, options, golf);
                entity = entity instanceof Object ? entity : zulu;
                mike['_pagination'] = entity;
                _fun00010_ip = 237; continue _fun00009;
 214:
                entity = global;
                zulu = entity.Date;
                entity = zulu.now;
                entity = entity.bind(zulu)();
                mike['lastCursorTimestamp'] = entity;
 237:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'isInitialized';
        entity['key'] = oscar;
        oscar = function() { // Original name: get
            entity = this;
            entity = entity._initialized;
            return entity;
        };
        entity['get'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'reset';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                mike = arguments[0];
                zulu = this;
                entity = undefined;
                if(!(mike === entity)) { _fun00012_ip = 14; continue _fun00011 }
 12:
                mike = false;
 14:
                tango = zulu._initialized;
                if(!tango) { _fun00012_ip = 98; continue _fun00011 }
 23:
                oscar = zulu._members;
                tango = null;
                if(!(tango != oscar)) { _fun00012_ip = 45; continue _fun00011 }
 35:
                report = oscar.reset;
                report = report.bind(oscar)();
 45:
                oscar = zulu._pagination;
                if(!(tango != oscar)) { _fun00012_ip = 65; continue _fun00011 }
 55:
                report = oscar.reset;
                report = report.bind(oscar)();
 65:
                report = zulu._search;
                if(!(tango != report)) { _fun00012_ip = 85; continue _fun00011 }
 75:
                tango = report.reset;
                tango = tango.bind(report)();
 85:
                if(!mike) { _fun00012_ip = 98; continue _fun00011 }
 88:
                mike = zulu.initialize;
                mike = mike.bind(zulu)();
 98:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'searchChunkSize';
        entity['key'] = oscar;
        oscar = function() { // Original name: get
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                mike = this;
                zulu = mike._pagination;
                entity = null;
                zulu = entity != zulu;
                entity = 0;
                if(!zulu) { _fun00014_ip = 83; continue _fun00013 }
 20:
                zulu = mike._initialized;
                entity = 0;
                if(!zulu) { _fun00014_ip = 83; continue _fun00013 }
 31:
                report = _closure1_slot0;
                tango = _closure1_slot1;
                zulu = 8;
                tango = tango[zulu];
                zulu = undefined;
                tango = report.bind(zulu)(tango);
                zulu = tango.getSearchChunkLimit;
                report = mike._pagination;
                mike = report.getPaginationState;
                mike = mike.bind(report)();
                entity = zulu.bind(tango)(mike);
 83:
                return entity;
            }
        };
        entity['get'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'getMember';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                mike = this;
                entity = mike._members;
                tango = null;
                zulu = tango != entity;
                entity = null;
                if(!zulu) { _fun00016_ip = 63; continue _fun00015 }
 20:
                zulu = mike._initialized;
                entity = null;
                if(!zulu) { _fun00016_ip = 63; continue _fun00015 }
 31:
                report = mike._members;
                zulu = report.getMemberByUserId;
                mike = argFoo;
                mike = zulu.bind(report)(mike);
                zulu = tango != mike;
                entity = null;
                if(!zulu) { _fun00016_ip = 63; continue _fun00015 }
 60:
                entity = mike;
 63:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'getMembersByIndex';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                zulu = this;
                mike = zulu._members;
                entity = null;
                if(!(entity != mike)) { _fun00018_ip = 24; continue _fun00017 }
 15:
                entity = zulu._initialized;
                if(entity) { _fun00018_ip = 44; continue _fun00017 }
 24:
                entity = new Array(2);
                mike = new Array(0);
                entity[0] = mike;
                mike = 0;
                entity[1] = mike;
                _fun00018_ip = 90; continue _fun00017;
 44:
                report = zulu._members;
                tango = report.values;
                mike = argFoo;
                tango = tango.bind(report)(mike);
                mike = new Array(2);
                mike[0] = tango;
                zulu = zulu._members;
                zulu = zulu.version;
                mike[1] = zulu;
                entity = mike;
 90:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'countMembersByIndex';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                mike = this;
                zulu = mike._members;
                entity = null;
                zulu = entity != zulu;
                entity = 0;
                if(!zulu) { _fun00020_ip = 50; continue _fun00019 }
 20:
                zulu = mike._initialized;
                entity = 0;
                if(!zulu) { _fun00020_ip = 50; continue _fun00019 }
 31:
                tango = mike._members;
                zulu = tango.count;
                mike = argFoo;
                entity = zulu.bind(tango)(mike);
 50:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[7] = entity;
        entity = {};
        oscar = '_checkUpdatesForPaginationUpdate';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                zulu = argFoo;
                tango = argBar;
                entity = tango.isIncludedInSearchResults;
                report = null;
                entity = report != entity;
                if(!entity) { _fun00022_ip = 37; continue _fun00021 }
 21:
                oscar = tango.isIncludedInSearchResults;
                mike = zulu.isIncludedInSearchResults;
                entity = oscar !== mike;
 37:
                if(entity) { _fun00022_ip = 72; continue _fun00021 }
 40:
                mike = tango.isCurrentGuildMemberByTimestamp;
                mike = report != mike;
                if(!mike) { _fun00022_ip = 69; continue _fun00021 }
 53:
                tango = tango.isCurrentGuildMemberByTimestamp;
                zulu = zulu.isCurrentGuildMemberByTimestamp;
                mike = tango !== zulu;
 69:
                entity = mike;
 72:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[8] = entity;
        entity = {};
        oscar = '_getIsIncludedInSearch';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                mike = argFoo;
                entity = this;
                tango = entity._search;
                zulu = null;
                if(!(zulu != tango)) { _fun00024_ip = 112; continue _fun00023 }
 18:
                zulu = entity._search;
                zulu = zulu.hasDefaultQuery;
                if(zulu) { _fun00024_ip = 96; continue _fun00023 }
 33:
                tango = {};
                oscar = tango;
                report = mike;
                zulu = copyDataProperties(oscar, report);
                report = argBar;
                oscar = tango;
                zulu = copyDataProperties(oscar, report);
                zulu = entity._search;
                entity = zulu.isMemberIncludedInSearchResults;
                zulu = entity.bind(zulu)(tango);
                entity = new Array(2);
                entity[0] = zulu;
                mike = mike.isIncludedInSearchResults;
                mike = zulu !== mike;
                entity[1] = mike;
                return entity;
 96:
                entity = new Array(2);
                mike = false;
                entity[0] = mike;
                entity[1] = mike;
                return entity;
 112:
                entity = new Array(2);
                mike = false;
                entity[0] = mike;
                entity[1] = mike;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[9] = entity;
        entity = {};
        oscar = 'updatePaginationChunks';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                entity = this;
                mike = entity._pagination;
                zulu = null;
                if(!(zulu != mike)) { _fun00026_ip = 81; continue _fun00025 }
 15:
                mike = entity._members;
                if(!(zulu != mike)) { _fun00026_ip = 81; continue _fun00025 }
 25:
                mike = entity._initialized;
                if(!mike) { _fun00026_ip = 81; continue _fun00025 }
 34:
                tango = entity._members;
                zulu = tango.values;
                mike = entity.getSearchIndex;
                mike = mike.bind(entity)();
                zulu = zulu.bind(tango)(mike);
                mike = entity._pagination;
                entity = mike.updateSortedMembers;
                entity = entity.bind(mike)(zulu);
                return entity;
 81:
                entity = false;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[10] = entity;
        entity = {};
        oscar = 'removeMember';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                tango = argFoo;
                zulu = this;
                entity = zulu._members;
                mike = null;
                if(!(mike != entity)) { _fun00028_ip = 84; continue _fun00027 }
 18:
                entity = zulu._initialized;
                if(!entity) { _fun00028_ip = 84; continue _fun00027 }
 27:
                report = zulu._members;
                entity = report.getMemberByUserId;
                entity = entity.bind(report)(tango);
                if(!(mike != entity)) { _fun00028_ip = 80; continue _fun00027 }
 48:
                mike = zulu._members;
                entity = mike.removeMember;
                entity = entity.bind(mike)(tango);
                if(!entity) { _fun00028_ip = 78; continue _fun00027 }
 68:
                mike = zulu.updatePaginationChunks;
                entity = mike.bind(zulu)();
 78:
                return entity;
 80:
                entity = false;
                return entity;
 84:
                entity = false;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[11] = entity;
        entity = {};
        oscar = '_rawUpdateMember';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                offset = argFoo;
                golf = argBar;
                oscar = this;
                entity = oscar._members;
                zulu = null;
                if(!(zulu != entity)) { _fun00030_ip = 272; continue _fun00029 }
 24:
                mike = oscar._members;
                entity = mike.getMemberByUserId;
                tango = entity.bind(mike)(offset);
                entity = zulu == tango;
                mike = false;
                options = false;
                report = tango;
                if(!entity) { _fun00030_ip = 117; continue _fun00029 }
 55:
                verify = _closure1_slot5;
                tango = verify.getTrueMember;
                entity = oscar.guildId;
                offset = tango.bind(verify)(entity, offset);
                if(!(zulu != offset)) { _fun00030_ip = 258; continue _fun00029 }
 86:
                verify = oscar._members;
                tango = verify.enhanceNewMember;
                entity = oscar.getSearchState;
                entity = entity.bind(oscar)();
                report = tango.bind(verify)(offset, entity, golf);
                options = true;
 117:
                entity = golf.isIncludedInSearchResults;
                if(!(zulu != entity)) { _fun00030_ip = 150; continue _fun00029 }
 127:
                zulu = golf.isIncludedInSearchResults;
                entity = report.isIncludedInSearchResults;
                tango = options;
                if(!(zulu !== entity)) { _fun00030_ip = 209; continue _fun00029 }
 146:
                tango = true;
                _fun00030_ip = 209; continue _fun00029;
 150:
                entity = oscar._getIsIncludedInSearch;
                offset = entity.bind(oscar)(report, golf);
                verify = _closure1_slot2;
                zulu = undefined;
                entity = 2;
                verify = verify.bind(zulu)(offset, entity);
                entity = 0;
                entity = verify[entity];
                zulu = 1;
                zulu = verify[zulu];
                tango = options;
                if(!zulu) { _fun00030_ip = 209; continue _fun00029 }
 201:
                golf['isIncludedInSearchResults'] = entity;
                tango = true;
 209:
                zulu = oscar._members;
                entity = zulu.updateMember;
                zulu = entity.bind(zulu)(report, golf);
                if(tango) { _fun00030_ip = 244; continue _fun00029 }
 230:
                entity = oscar._checkUpdatesForPaginationUpdate;
                tango = entity.bind(oscar)(report, golf);
 244:
                entity = new Array(2);
                entity[0] = tango;
                entity[1] = zulu;
                return entity;
 258:
                entity = new Array(2);
                entity[0] = mike;
                entity[1] = mike;
                return entity;
 272:
                entity = new Array(2);
                mike = false;
                entity[0] = mike;
                entity[1] = mike;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[12] = entity;
        entity = {};
        oscar = 'isMemberInIndex';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                mike = this;
                zulu = mike._members;
                entity = null;
                zulu = entity == zulu;
                if(zulu) { _fun00032_ip = 27; continue _fun00031 }
 18:
                entity = mike._initialized;
                zulu = !entity;
 27:
                entity = !zulu;
                if(zulu) { _fun00032_ip = 58; continue _fun00031 }
 33:
                mike = mike._members;
                tango = mike._membersMap;
                zulu = tango.has;
                mike = argFoo;
                entity = zulu.bind(tango)(mike);
 58:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[13] = entity;
        entity = {};
        oscar = 'isMemberIncludedInSearchResults';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                zulu = argFoo;
                entity = this;
                tango = entity._members;
                mike = null;
                if(!(mike != tango)) { _fun00034_ip = 208; continue _fun00033 }
 21:
                tango = entity._search;
                if(!(mike != tango)) { _fun00034_ip = 208; continue _fun00033 }
 34:
                tango = entity._pagination;
                if(!(mike != tango)) { _fun00034_ip = 208; continue _fun00033 }
 47:
                tango = entity._initialized;
                if(!tango) { _fun00034_ip = 208; continue _fun00033 }
 59:
                tango = entity._search;
                tango = tango.hasDefaultQuery;
                if(tango) { _fun00034_ip = 187; continue _fun00033 }
 74:
                report = entity._members;
                tango = report.getMemberByUserId;
                report = tango.bind(report)(zulu);
                if(!(mike != report)) { _fun00034_ip = 108; continue _fun00033 }
 95:
                tango = report.isIncludedInSearchResults;
                if(!tango) { _fun00034_ip = 164; continue _fun00033 }
 104:
                tango = true;
                return tango;
 108:
                golf = _closure1_slot5;
                oscar = golf.getTrueMember;
                tango = entity.guildId;
                golf = oscar.bind(golf)(tango, zulu);
                if(!(mike != golf)) { _fun00034_ip = 183; continue _fun00033 }
 136:
                oscar = entity._members;
                tango = oscar.enhanceNewMember;
                mike = entity.getSearchState;
                mike = mike.bind(entity)();
                report = tango.bind(oscar)(golf, mike);
 164:
                tango = entity._search;
                mike = tango.isMemberIncludedInSearchResults;
                mike = mike.bind(tango)(report);
                return mike;
 183:
                mike = false;
                return mike;
 187:
                mike = entity._pagination;
                entity = mike.isMemberInAnyChunk;
                entity = entity.bind(mike)(zulu);
                return entity;
 208:
                entity = false;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[14] = entity;
        entity = {};
        oscar = 'updateMember';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                zulu = this;
                mike = zulu._members;
                entity = null;
                if(!(entity != mike)) { _fun00036_ip = 88; continue _fun00035 }
 15:
                entity = zulu._initialized;
                if(!entity) { _fun00036_ip = 88; continue _fun00035 }
 24:
                tango = zulu._rawUpdateMember;
                mike = argFoo;
                entity = argBar;
                report = tango.bind(zulu)(mike, entity);
                tango = _closure1_slot2;
                mike = undefined;
                entity = 2;
                tango = tango.bind(mike)(report, entity);
                entity = 0;
                mike = tango[entity];
                entity = 1;
                entity = tango[entity];
                if(!mike) { _fun00036_ip = 86; continue _fun00035 }
 76:
                mike = zulu.updatePaginationChunks;
                entity = mike.bind(zulu)();
 86:
                return entity;
 88:
                entity = false;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[15] = entity;
        entity = {};
        oscar = 'updateClientMembers';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                vacuum = arguments[1];
                control = arguments[2];
                zulu = this;
                source = undefined;
                if(!(vacuum === source)) { _fun00038_ip = 17; continue _fun00037 }
 15:
                vacuum = false;
 17:
                if(!(control === source)) { _fun00038_ip = 23; continue _fun00037 }
 21:
                control = false;
 23:
                entity = zulu._members;
                update = null;
                if(!(update != entity)) { _fun00038_ip = 363; continue _fun00037 }
 38:
                entity = zulu._initialized;
                if(!entity) { _fun00038_ip = 363; continue _fun00037 }
 50:
                mike = _closure1_slot8;
                entity = argFoo;
                result = mike.bind(source)(entity);
                mike = result.bind(source)();
                tango = mike.done;
                options = false;
                output = 1;
                sizing = 2;
                kilo = 0;
                backup = 9;
                foxtrot = 'isCurrentGuildMemberByTimestamp';
                romeo = 'refreshTimestamp';
                yankee = true;
                offset = 'isIncludedInSearchResults';
                verify = mike;
                golf = false;
                oscar = undefined;
                report = undefined;
                mike = false;
                entity = false;
                if(tango) { _fun00038_ip = 348; continue _fun00037 }
 122:
                tango = verify.value;
                record = tango.joinedAt;
                config = options;
                sequence = golf;
                if(!(update != record)) { _fun00038_ip = 318; continue _fun00037 }
 146:
                papa = tango;
                if(!vacuum) { _fun00038_ip = 172; continue _fun00037 }
 152:
                record = {};
                lima = record;
                sierra = tango;
                context = copyDataProperties(lima, sierra);
                record[offset] = yankee;
                papa = record;
 172:
                record = papa;
                if(!control) { _fun00038_ip = 259; continue _fun00037 }
 178:
                target = _closure1_slot0;
                context = _closure1_slot1;
                context = context[backup];
                status = target.bind(source)(context);
                target = status.getJoinedAtTimestamp;
                context = tango.joinedAt;
                target = target.bind(status)(context);
                context = {};
                lima = context;
                sierra = papa;
                papa = copyDataProperties(lima, sierra);
                papa = zulu._members;
                papa = papa.newMemberTimestamp;
                papa = target <= papa;
                context[foxtrot] = papa;
                papa = zulu.lastRefreshTimestamp;
                context[romeo] = papa;
                record = context;
 259:
                context = zulu._rawUpdateMember;
                tango = tango.userId;
                context = context.bind(zulu)(tango, record);
                tango = _closure1_slot2;
                tango = tango.bind(source)(context, sizing);
                papa = tango[kilo];
                if(papa) { _fun00038_ip = 296; continue _fun00037 }
 293:
                papa = options;
 296:
                context = tango[output];
                if(context) { _fun00038_ip = 306; continue _fun00037 }
 303:
                context = golf;
 306:
                sequence = context;
                config = papa;
                oscar = record;
                report = tango;
 318:
                record = result.bind(source)();
                tango = record.done;
                options = config;
                golf = sequence;
                verify = record;
                mike = options;
                entity = golf;
                if(!tango) { _fun00038_ip = 122; continue _fun00037 }
 348:
                if(!mike) { _fun00038_ip = 361; continue _fun00037 }
 351:
                mike = zulu.updatePaginationChunks;
                entity = mike.bind(zulu)();
 361:
                return entity;
 363:
                entity = false;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[16] = entity;
        entity = {};
        oscar = 'updateServerMembers';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                zulu = this;
                entity = zulu._members;
                kilo = null;
                if(!(kilo != entity)) { _fun00040_ip = 235; continue _fun00039 }
 18:
                entity = zulu._initialized;
                if(!entity) { _fun00040_ip = 235; continue _fun00039 }
 30:
                mike = _closure1_slot8;
                foxtrot = undefined;
                entity = argFoo;
                romeo = mike.bind(foxtrot)(entity);
                mike = romeo.bind(foxtrot)();
                tango = mike.done;
                golf = false;
                yankee = 1;
                offset = 2;
                verify = 0;
                options = mike;
                oscar = false;
                report = undefined;
                mike = false;
                entity = false;
                if(tango) { _fun00040_ip = 220; continue _fun00039 }
 83:
                tango = options.value;
                echo = _closure1_slot5;
                result = echo.getTrueMember;
                output = zulu.guildId;
                sizing = tango.user;
                sizing = sizing.id;
                echo = result.bind(echo)(output, sizing);
                output = golf;
                sizing = oscar;
                if(!(kilo != echo)) { _fun00040_ip = 190; continue _fun00039 }
 129:
                result = zulu._rawUpdateMember;
                tango = tango.user;
                tango = tango.id;
                result = result.bind(zulu)(tango, echo);
                tango = _closure1_slot2;
                tango = tango.bind(foxtrot)(result, offset);
                echo = tango[verify];
                if(echo) { _fun00040_ip = 171; continue _fun00039 }
 168:
                echo = golf;
 171:
                result = tango[yankee];
                if(result) { _fun00040_ip = 181; continue _fun00039 }
 178:
                result = oscar;
 181:
                sizing = result;
                output = echo;
                report = tango;
 190:
                result = romeo.bind(foxtrot)();
                tango = result.done;
                golf = output;
                oscar = sizing;
                options = result;
                mike = golf;
                entity = oscar;
                if(!tango) { _fun00040_ip = 83; continue _fun00039 }
 220:
                if(!mike) { _fun00040_ip = 233; continue _fun00039 }
 223:
                mike = zulu.updatePaginationChunks;
                entity = mike.bind(zulu)();
 233:
                return entity;
 235:
                entity = false;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[17] = entity;
        entity = {};
        oscar = 'updateMembersByMemberIds';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                report = argFoo;
                zulu = this;
                var _closure3_slot0 = zulu;
                tango = zulu._members;
                mike = null;
                if(!(mike != tango)) { _fun00042_ip = 67; continue _fun00041 }
 24:
                mike = zulu._initialized;
                if(!mike) { _fun00042_ip = 67; continue _fun00041 }
 33:
                tango = report.reduce;
                mike = function(argFoo, argBar) {
                    _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                        entity = argFoo;
                        report = _closure1_slot5;
                        tango = report.getTrueMember;
                        mike = _closure3_slot0;
                        zulu = mike.guildId;
                        mike = argBar;
                        zulu = tango.bind(report)(zulu, mike);
                        mike = null;
                        if(!(mike != zulu)) { _fun00044_ip = 53; continue _fun00043 }
 43:
                        mike = entity.push;
                        mike = mike.bind(entity)(zulu);
 53:
                        return entity;
                    }
                };
                entity = new Array(0);
                mike = tango.bind(report)(mike, entity);
                entity = zulu.updateClientMembers;
                entity = entity.bind(zulu)(mike);
                return entity;
 67:
                entity = false;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[18] = entity;
        entity = {};
        oscar = 'updateMembersSort';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            mike = this;
            var _closure3_slot0 = mike;
            mike = argFoo;
            var _closure3_slot1 = mike;
            mike = global;
            zulu = mike.Promise;
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            tango = function(argFoo) {
                offset = _closure1_slot0;
                yankee = _closure1_slot1;
                report = 10;
                mike = yankee[report];
                entity = undefined;
                oscar = offset.bind(entity)(mike);
                tango = oscar.cloneDeep;
                verify = _closure3_slot0;
                golf = verify.getMembersByIndex;
                mike = 6;
                zulu = yankee[mike];
                zulu = offset.bind(entity)(zulu);
                zulu = zulu.MemberSafetySecondaryIndex;
                zulu = zulu.CURRENT_GUILD_MEMBER;
                zulu = golf.bind(verify)(zulu);
                golf = 0;
                zulu = zulu[golf];
                foxtrot = tango.bind(oscar)(zulu);
                tango = new Array(0);
                backup = tango;
                romeo = 0;
                romeo = arraySpread(backup, foxtrot, romeo);
                report = yankee[report];
                oscar = offset.bind(entity)(report);
                report = oscar.cloneDeep;
                options = verify.getMembersByIndex;
                mike = yankee[mike];
                mike = offset.bind(entity)(mike);
                mike = mike.MemberSafetySecondaryIndex;
                mike = mike.NEW_GUILD_MEMBER;
                mike = options.bind(verify)(mike);
                mike = mike[golf];
                foxtrot = report.bind(oscar)(mike);
                backup = tango;
                mike = arraySpread(backup, foxtrot, romeo);
                zulu = tango.forEach;
                mike = function(argFoo) {
                    _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                        report = argFoo;
                        zulu = _closure1_slot0;
                        mike = _closure1_slot1;
                        entity = 11;
                        mike = mike[entity];
                        entity = undefined;
                        oscar = zulu.bind(entity)(mike);
                        tango = oscar.getSortValueForMember;
                        mike = _closure3_slot1;
                        golf = tango.bind(oscar)(report, mike);
                        mike = _closure3_slot0;
                        options = mike._search;
                        mike = null;
                        oscar = mike == options;
                        tango = undefined;
                        if(oscar) { _fun00046_ip = 79; continue _fun00045 }
 68:
                        oscar = options.isMemberIncludedInSearchResults;
                        tango = oscar.bind(options)(report);
 79:
                        oscar = mike != tango;
                        if(!oscar) { _fun00046_ip = 89; continue _fun00045 }
 86:
                        oscar = tango;
 89:
                        zulu = _closure3_slot0;
                        tango = zulu._members;
                        if(!(mike != tango)) { _fun00046_ip = 127; continue _fun00045 }
 103:
                        zulu = tango.updateMember;
                        mike = {};
                        mike['sort'] = golf;
                        mike['isIncludedInSearchResults'] = oscar;
                        mike = zulu.bind(tango)(report, mike);
 127:
                        return entity;
                    }
                };
                mike = zulu.bind(tango)(mike);
                mike = argFoo;
                mike = mike.bind(entity)();
                return entity;
            };
            report = mike;
            entity = new report[zulu](tango, zulu);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        };
        entity['value'] = oscar;
        mike[19] = entity;
        entity = {};
        oscar = 'sortMembersBySelectedSort';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                tango = argFoo;
                zulu = this;
                var _closure3_slot0 = zulu;
                mike = zulu._search;
                report = null;
                mike = report != mike;
                if(!mike) { _fun00048_ip = 37; continue _fun00047 }
 27:
                oscar = zulu._members;
                mike = report != oscar;
 37:
                if(!mike) { _fun00048_ip = 46; continue _fun00047 }
 40:
                mike = zulu._initialized;
 46:
                if(!mike) { _fun00048_ip = 53; continue _fun00047 }
 49:
                mike = report != tango;
 53:
                if(!mike) { _fun00048_ip = 105; continue _fun00047 }
 56:
                oscar = zulu.updatePaginationState;
                report = {};
                report['sort'] = tango;
                mike = true;
                mike = oscar.bind(zulu)(report, mike);
                mike = zulu.updateMembersSort;
                zulu = mike.bind(zulu)(tango);
                mike = zulu.then;
                entity = function() {
                    mike = _closure3_slot0;
                    entity = mike.updatePaginationChunks;
                    entity = entity.bind(mike)();
                    entity = undefined;
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
 105:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[20] = entity;
        entity = {};
        oscar = 'updateSearchedMembersByMemberIds';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                tango = argFoo;
                report = this;
                var _closure3_slot0 = report;
                mike = report._search;
                zulu = null;
                if(!(zulu != mike)) { _fun00050_ip = 105; continue _fun00049 }
 24:
                mike = report._members;
                if(!(zulu != mike)) { _fun00050_ip = 105; continue _fun00049 }
 34:
                mike = report._initialized;
                if(!mike) { _fun00050_ip = 105; continue _fun00049 }
 43:
                zulu = tango.reduce;
                mike = function(argFoo, argBar) {
                    _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                        entity = argFoo;
                        report = _closure1_slot5;
                        tango = report.getTrueMember;
                        mike = _closure3_slot0;
                        zulu = mike.guildId;
                        mike = argBar;
                        zulu = tango.bind(report)(zulu, mike);
                        mike = null;
                        if(!(mike != zulu)) { _fun00052_ip = 53; continue _fun00051 }
 43:
                        mike = entity.push;
                        mike = mike.bind(entity)(zulu);
 53:
                        return entity;
                    }
                };
                entity = new Array(0);
                tango = zulu.bind(tango)(mike, entity);
                zulu = report.updateClientMembers;
                entity = report._search;
                mike = entity.requiresUsernameMatch;
                oscar = report.lastRefreshTimestamp;
                entity = 0;
                entity = entity !== oscar;
                entity = zulu.bind(report)(tango, mike, entity);
                return entity;
 105:
                entity = false;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[21] = entity;
        entity = {};
        oscar = 'rebuildAllMembers';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                zulu = this;
                mike = zulu._members;
                entity = null;
                if(!(entity != mike)) { _fun00054_ip = 60; continue _fun00053 }
 15:
                entity = zulu._initialized;
                if(!entity) { _fun00054_ip = 60; continue _fun00053 }
 24:
                tango = _closure1_slot5;
                mike = tango.getMembers;
                entity = zulu.guildId;
                mike = mike.bind(tango)(entity);
                entity = zulu.updateClientMembers;
                entity = entity.bind(zulu)(mike);
                return entity;
 60:
                entity = false;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[22] = entity;
        entity = {};
        oscar = '_scheduleRefresh';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
                zulu = this;
                var _closure3_slot0 = zulu;
                entity = argFoo;
                zulu['lastRefreshTimestamp'] = entity;
                entity = global;
                report = entity.Date;
                tango = report.now;
                tango = tango.bind(report)();
                zulu['lastCursorTimestamp'] = tango;
                report = zulu._lastRefreshTimer;
                tango = null;
                if(!(tango != report)) { _fun00056_ip = 72; continue _fun00055 }
 53:
                oscar = entity.clearTimeout;
                report = zulu._lastRefreshTimer;
                tango = undefined;
                tango = oscar.bind(tango)(report);
 72:
                report = entity.setTimeout;
                tango = _closure1_slot7;
                entity = undefined;
                mike = function() {
                    mike = _closure3_slot0;
                    entity = null;
                    mike['_lastRefreshTimer'] = entity;
                    entity = 0;
                    mike['lastRefreshTimestamp'] = entity;
                    entity = undefined;
                    return entity;
                };
                mike = report.bind(entity)(mike, tango);
                zulu['_lastRefreshTimer'] = mike;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[23] = entity;
        entity = {};
        oscar = 'refreshNewMembersAndSearchResults';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
                zulu = this;
                entity = zulu._search;
                mike = null;
                if(!(mike != entity)) { _fun00058_ip = 376; continue _fun00057 }
 18:
                entity = zulu._members;
                if(!(mike != entity)) { _fun00058_ip = 376; continue _fun00057 }
 31:
                entity = zulu._initialized;
                if(!entity) { _fun00058_ip = 376; continue _fun00057 }
 43:
                entity = global;
                mike = entity.Number;
                tango = entity.Date;
                entity = tango.now;
                entity = entity.bind(tango)();
                verify = undefined;
                yankee = mike.bind(verify)(entity);
                entity = zulu._scheduleRefresh;
                entity = entity.bind(zulu)(yankee);
                mike = _closure1_slot8;
                offset = _closure1_slot0;
                romeo = _closure1_slot1;
                entity = 10;
                entity = romeo[entity];
                oscar = offset.bind(verify)(entity);
                tango = oscar.cloneDeep;
                options = zulu._members;
                golf = options.values;
                entity = 6;
                entity = romeo[entity];
                entity = offset.bind(verify)(entity);
                entity = entity.MemberSafetySecondaryIndex;
                entity = entity.NEW_GUILD_MEMBER;
                entity = golf.bind(options)(entity);
                entity = tango.bind(oscar)(entity);
                offset = mike.bind(verify)(entity);
                mike = offset.bind(verify)();
                oscar = mike.done;
                tango = false;
                entity = true;
                options = mike;
                golf = false;
                mike = false;
                if(oscar) { _fun00058_ip = 280; continue _fun00057 }
 192:
                backup = options.value;
                foxtrot = zulu._members;
                romeo = foxtrot.updateMember;
                oscar = {};
                oscar['isCurrentGuildMemberByTimestamp'] = entity;
                oscar['refreshTimestamp'] = yankee;
                output = _closure1_slot6;
                sizing = output.getUser;
                kilo = backup.userId;
                kilo = sizing.bind(output)(kilo);
                oscar['user'] = kilo;
                romeo = romeo.bind(foxtrot)(backup, oscar);
                if(romeo) { _fun00058_ip = 259; continue _fun00057 }
 256:
                romeo = golf;
 259:
                foxtrot = offset.bind(verify)();
                oscar = foxtrot.done;
                golf = romeo;
                options = foxtrot;
                mike = golf;
                if(!oscar) { _fun00058_ip = 192; continue _fun00057 }
 280:
                golf = zulu._members;
                oscar = golf.resetNewMemberTimestamp;
                oscar = oscar.bind(golf)();
                oscar = zulu.resetSearchState;
                oscar = oscar.bind(zulu)();
                if(!oscar) { _fun00058_ip = 311; continue _fun00057 }
 309:
                mike = false;
 311:
                options = zulu.updatePaginationState;
                golf = {};
                oscar = 1;
                golf['currentPage'] = oscar;
                options = options.bind(zulu)(golf, tango);
                golf = _closure1_slot2;
                report = 2;
                report = golf.bind(verify)(options, report);
                golf = 0;
                golf = report[golf];
                report = report[oscar];
                if(!report) { _fun00058_ip = 361; continue _fun00057 }
 359:
                mike = false;
 361:
                if(!mike) { _fun00058_ip = 374; continue _fun00057 }
 364:
                mike = zulu.updatePaginationChunks;
                mike = mike.bind(zulu)();
 374:
                return entity;
 376:
                entity = false;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[24] = entity;
        entity = {};
        oscar = 'getNewMemberTimestamp';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                mike = this;
                zulu = mike._members;
                entity = null;
                zulu = entity != zulu;
                entity = 0;
                if(!zulu) { _fun00060_ip = 43; continue _fun00059 }
 20:
                zulu = mike._initialized;
                entity = 0;
                if(!zulu) { _fun00060_ip = 43; continue _fun00059 }
 31:
                mike = mike._members;
                entity = mike.newMemberTimestamp;
 43:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[25] = entity;
        entity = {};
        oscar = 'updateSearchState';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
                tango = argFoo;
                mike = this;
                entity = mike._members;
                zulu = null;
                if(!(zulu != entity)) { _fun00062_ip = 468; continue _fun00061 }
 21:
                entity = mike._search;
                if(!(zulu != entity)) { _fun00062_ip = 468; continue _fun00061 }
 34:
                entity = mike._initialized;
                if(!entity) { _fun00062_ip = 468; continue _fun00061 }
 46:
                entity = global;
                report = entity.Boolean;
                entity = mike._search;
                entity = entity.hasDefaultQuery;
                yankee = undefined;
                oscar = report.bind(yankee)(entity);
                entity = tango.selectedSort;
                entity = zulu != entity;
                if(!entity) { _fun00062_ip = 118; continue _fun00061 }
 86:
                report = tango.selectedSort;
                golf = mike._search;
                zulu = golf.getSearchState;
                zulu = zulu.bind(golf)();
                zulu = zulu.selectedSort;
                entity = report !== zulu;
 118:
                if(!entity) { _fun00062_ip = 140; continue _fun00061 }
 121:
                zulu = mike.sortMembersBySelectedSort;
                entity = tango.selectedSort;
                entity = zulu.bind(mike)(entity);
 140:
                zulu = mike._search;
                entity = zulu.updateSearchState;
                entity = entity.bind(zulu)(tango);
                zulu = mike._search;
                zulu = zulu.hasDefaultQuery;
                if(!zulu) { _fun00062_ip = 178; continue _fun00061 }
 172:
                if(oscar) { _fun00062_ip = 456; continue _fun00061 }
 178:
                offset = _closure1_slot0;
                romeo = _closure1_slot1;
                tango = 10;
                tango = romeo[tango];
                golf = offset.bind(yankee)(tango);
                report = golf.cloneDeep;
                verify = mike._members;
                options = verify.values;
                tango = 6;
                tango = romeo[tango];
                tango = offset.bind(yankee)(tango);
                tango = tango.MemberSafetySecondaryIndex;
                tango = tango.CURRENT_GUILD_MEMBER;
                tango = options.bind(verify)(tango);
                report = report.bind(golf)(tango);
                tango = mike._search;
                tango = tango.hasDefaultQuery;
                golf = oscar !== tango;
                zulu = _closure1_slot8;
                offset = zulu.bind(yankee)(report);
                oscar = offset.bind(yankee)();
                report = oscar.done;
                verify = entity;
                options = oscar;
                oscar = undefined;
                entity = verify;
                tango = golf;
                if(report) { _fun00062_ip = 418; continue _fun00061 }
 303:
                output = options.value;
                report = output.isCurrentGuildMemberByTimestamp;
                foxtrot = verify;
                romeo = golf;
                if(!report) { _fun00062_ip = 391; continue _fun00061 }
 323:
                backup = mike._search;
                report = backup.isMemberIncludedInSearchResults;
                report = report.bind(backup)(output);
                backup = output.isIncludedInSearchResults;
                foxtrot = verify;
                romeo = golf;
                oscar = report;
                if(!(report !== backup)) { _fun00062_ip = 391; continue _fun00061 }
 359:
                sizing = mike._members;
                kilo = sizing.updateMember;
                backup = {};
                backup['isIncludedInSearchResults'] = report;
                backup = kilo.bind(sizing)(output, backup);
                foxtrot = true;
                romeo = true;
                oscar = report;
 391:
                backup = offset.bind(yankee)();
                report = backup.done;
                verify = foxtrot;
                golf = romeo;
                options = backup;
                entity = verify;
                tango = golf;
                if(!report) { _fun00062_ip = 303; continue _fun00061 }
 418:
                if(!tango) { _fun00062_ip = 454; continue _fun00061 }
 421:
                tango = mike.updatePaginationChunks;
                tango = tango.bind(mike)();
                report = mike.updatePaginationState;
                tango = {};
                oscar = 1;
                tango['currentPage'] = oscar;
                tango = report.bind(mike)(tango);
                entity = true;
 454:
                return entity;
 456:
                entity = mike.updatePaginationChunks;
                entity = entity.bind(mike)();
                return entity;
 468:
                entity = false;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[26] = entity;
        entity = {};
        oscar = 'getSearchState';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
 0:
                mike = this;
                zulu = mike._search;
                entity = null;
                if(!(entity != zulu)) { _fun00064_ip = 24; continue _fun00063 }
 15:
                entity = mike._initialized;
                if(entity) { _fun00064_ip = 61; continue _fun00063 }
 24:
                tango = _closure1_slot0;
                zulu = _closure1_slot1;
                entity = 7;
                zulu = zulu[entity];
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                entity = zulu.getDefaultSearchState;
                entity = entity.bind(zulu)();
                _fun00064_ip = 77; continue _fun00063;
 61:
                zulu = mike._search;
                mike = zulu.getSearchState;
                entity = mike.bind(zulu)();
 77:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[27] = entity;
        entity = {};
        oscar = 'hasDefaultSearchState';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00065: for(var _fun00066_ip = 0; ; ) switch(_fun00066_ip) {
 0:
                mike = this;
                zulu = mike._search;
                entity = null;
                entity = entity == zulu;
                if(entity) { _fun00066_ip = 27; continue _fun00065 }
 18:
                zulu = mike._initialized;
                entity = !zulu;
 27:
                if(entity) { _fun00066_ip = 42; continue _fun00065 }
 30:
                mike = mike._search;
                entity = mike.hasDefaultQuery;
 42:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[28] = entity;
        entity = {};
        oscar = 'resetSearchState';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00067: for(var _fun00068_ip = 0; ; ) switch(_fun00068_ip) {
 0:
                tango = this;
                mike = tango._search;
                entity = null;
                mike = entity == mike;
                if(mike) { _fun00068_ip = 27; continue _fun00067 }
 18:
                entity = tango._initialized;
                mike = !entity;
 27:
                entity = !mike;
                if(mike) { _fun00068_ip = 71; continue _fun00067 }
 33:
                zulu = tango._search;
                mike = zulu.resetSearchState;
                mike = mike.bind(zulu)();
                zulu = !mike;
                mike = !zulu;
                if(zulu) { _fun00068_ip = 68; continue _fun00067 }
 58:
                zulu = tango.updatePaginationChunks;
                mike = zulu.bind(tango)();
 68:
                entity = mike;
 71:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[29] = entity;
        entity = {};
        oscar = 'getTotalResultsCount';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00069: for(var _fun00070_ip = 0; ; ) switch(_fun00070_ip) {
 0:
                zulu = this;
                entity = zulu._search;
                tango = null;
                mike = tango != entity;
                entity = 0;
                if(!mike) { _fun00070_ip = 104; continue _fun00069 }
 20:
                mike = zulu._pagination;
                mike = tango != mike;
                entity = 0;
                if(!mike) { _fun00070_ip = 104; continue _fun00069 }
 35:
                mike = zulu._initialized;
                entity = 0;
                if(!mike) { _fun00070_ip = 104; continue _fun00069 }
 46:
                mike = zulu._search;
                mike = mike.hasDefaultQuery;
                if(!mike) { _fun00070_ip = 71; continue _fun00069 }
 61:
                mike = zulu._defaultSearchTotalResultsCount;
                if(!(tango == mike)) { _fun00070_ip = 95; continue _fun00069 }
 71:
                tango = zulu._pagination;
                mike = tango.getPaginationState;
                mike = mike.bind(tango)();
                mike = mike.totalResultsCount;
                _fun00070_ip = 101; continue _fun00069;
 95:
                mike = zulu._defaultSearchTotalResultsCount;
 101:
                entity = mike;
 104:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[30] = entity;
        entity = {};
        oscar = 'updatePaginationState';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00071: for(var _fun00072_ip = 0; ; ) switch(_fun00072_ip) {
 0:
                tango = argFoo;
                zulu = arguments[1];
                mike = this;
                entity = undefined;
                if(!(zulu === entity)) { _fun00072_ip = 17; continue _fun00071 }
 15:
                zulu = true;
 17:
                entity = mike._search;
                oscar = null;
                if(!(oscar != entity)) { _fun00072_ip = 48; continue _fun00071 }
 29:
                entity = mike._pagination;
                if(!(oscar != entity)) { _fun00072_ip = 48; continue _fun00071 }
 39:
                entity = mike._initialized;
                if(entity) { _fun00072_ip = 64; continue _fun00071 }
 48:
                entity = new Array(2);
                report = false;
                entity[0] = report;
                entity[1] = report;
                _fun00072_ip = 132; continue _fun00071;
 64:
                if(!zulu) { _fun00072_ip = 75; continue _fun00071 }
 67:
                zulu = 0;
                mike['lastRefreshTimestamp'] = zulu;
 75:
                zulu = mike._search;
                zulu = zulu.hasDefaultQuery;
                if(!zulu) { _fun00072_ip = 100; continue _fun00071 }
 90:
                report = tango.totalResultsCount;
                zulu = oscar != report;
 100:
                if(!zulu) { _fun00072_ip = 115; continue _fun00071 }
 103:
                zulu = tango.totalResultsCount;
                mike['_defaultSearchTotalResultsCount'] = zulu;
 115:
                zulu = mike._pagination;
                mike = zulu.updatePaginationState;
                entity = mike.bind(zulu)(tango);
 132:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[31] = entity;
        entity = {};
        oscar = 'clearPaginationState';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00073: for(var _fun00074_ip = 0; ; ) switch(_fun00074_ip) {
 0:
                entity = this;
                mike = entity._pagination;
                entity = null;
                if(!(entity != mike)) { _fun00074_ip = 25; continue _fun00073 }
 15:
                entity = mike.reset;
                entity = entity.bind(mike)();
 25:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[32] = entity;
        entity = {};
        oscar = 'getPaginationState';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00075: for(var _fun00076_ip = 0; ; ) switch(_fun00076_ip) {
 0:
                mike = this;
                zulu = mike._pagination;
                entity = null;
                if(!(entity != zulu)) { _fun00076_ip = 24; continue _fun00075 }
 15:
                entity = mike._initialized;
                if(entity) { _fun00076_ip = 61; continue _fun00075 }
 24:
                tango = _closure1_slot0;
                zulu = _closure1_slot1;
                entity = 8;
                zulu = zulu[entity];
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                entity = zulu.createDefaultMemberSafetyPaginationState;
                entity = entity.bind(zulu)();
                _fun00076_ip = 77; continue _fun00075;
 61:
                zulu = mike._pagination;
                mike = zulu.getPaginationState;
                entity = mike.bind(zulu)();
 77:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[33] = entity;
        entity = {};
        oscar = 'getPaginatedMembers';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00077: for(var _fun00078_ip = 0; ; ) switch(_fun00078_ip) {
 0:
                zulu = this;
                mike = zulu._pagination;
                entity = null;
                if(!(entity != mike)) { _fun00078_ip = 24; continue _fun00077 }
 15:
                entity = zulu._initialized;
                if(entity) { _fun00078_ip = 42; continue _fun00077 }
 24:
                entity = new Array(2);
                mike = {};
                entity[0] = mike;
                mike = 0;
                entity[1] = mike;
                _fun00078_ip = 83; continue _fun00077;
 42:
                mike = zulu._pagination;
                tango = mike.paginatedMembers;
                mike = new Array(2);
                mike[0] = tango;
                zulu = zulu._pagination;
                zulu = zulu.version;
                mike[1] = zulu;
                entity = mike;
 83:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[34] = entity;
        entity = {};
        oscar = 'updatePaginationToken';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00079: for(var _fun00080_ip = 0; ; ) switch(_fun00080_ip) {
 0:
                mike = this;
                zulu = mike._pagination;
                entity = null;
                zulu = entity == zulu;
                if(zulu) { _fun00080_ip = 27; continue _fun00079 }
 18:
                entity = mike._initialized;
                zulu = !entity;
 27:
                entity = !zulu;
                if(zulu) { _fun00080_ip = 53; continue _fun00079 }
 33:
                tango = mike._pagination;
                zulu = tango.updatePaginationToken;
                mike = argFoo;
                entity = zulu.bind(tango)(mike);
 53:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[35] = entity;
        entity = {};
        oscar = 'getElasticSearchPagination';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00081: for(var _fun00082_ip = 0; ; ) switch(_fun00082_ip) {
 0:
                mike = this;
                entity = mike._pagination;
                tango = null;
                zulu = tango != entity;
                entity = null;
                if(!zulu) { _fun00082_ip = 47; continue _fun00081 }
 20:
                zulu = mike._initialized;
                entity = null;
                if(!zulu) { _fun00082_ip = 47; continue _fun00081 }
 31:
                zulu = mike._pagination;
                mike = zulu.getElasticSearchPagination;
                entity = mike.bind(zulu)();
 47:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[36] = entity;
        entity = {};
        oscar = 'removeRoleFromSearchState';
        entity['key'] = oscar;
        report = function(argFoo) { // Original name: value
            zulu = this;
            entity = global;
            tango = entity.Set;
            entity = zulu.getSearchState;
            entity = entity.bind(zulu)();
            report = entity.selectedRoleIds;
            mike = tango.prototype;
            mike = Object.create(mike, {constructor: {value: tango}});
            oscar = mike;
            entity = new oscar[tango](report, tango);
            tango = entity instanceof Object ? entity : mike;
            mike = tango.delete;
            entity = argFoo;
            entity = mike.bind(tango)(entity);
            mike = zulu.updateSearchState;
            entity = {};
            entity['selectedRoleIds'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = report;
        mike[37] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 12;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_mod_dash_member_safety/GuildMemberSafetyPageStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['GuildMemberSafetyPageStore'] = mike;
    return entity;
})();