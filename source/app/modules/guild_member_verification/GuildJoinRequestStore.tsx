// app/modules/guild_member_verification/GuildJoinRequestStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun66747: for(var _fun66747_ip = 0; ; ) switch(_fun66747_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot26;
            entity = entity.bind(zulu)();
            if(entity) { _fun66747_ip = 51; continue _fun66747 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun66747_ip = 92; continue _fun66747;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun66747_ip = 71; continue _fun66747 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot25 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun66748: for(var _fun66748_ip = 0; ; ) switch(_fun66748_ip) {
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
 72: // try_end0
            _fun66748_ip = 76; continue _fun66748;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot26 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    entity = function(argFoo) { // Original name: getSubmittedGuildJoinRequestTotal
        mike = _closure1_slot13;
        entity = argFoo;
        entity = mike[entity];
        return entity;
    };
    var _closure1_slot27 = entity;
    entity = function(argFoo, argBar) { // Original name: setSubmittedGuildJoinRequestTotal
        report = argFoo;
        zulu = _closure1_slot13;
        mike = argBar;
        zulu[report] = mike;
        tango = _closure1_slot12;
        zulu = tango.set;
        oscar = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 9;
        mike = mike[entity];
        entity = undefined;
        mike = oscar.bind(entity)(mike);
        mike = mike.bind(entity)();
        mike = zulu.bind(tango)(report, mike);
        return entity;
    };
    var _closure1_slot28 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: updateSubmittedGuildJoinRequestTotal
        _fun66753: for(var _fun66753_ip = 0; ; ) switch(_fun66753_ip) {
 0:
            tango = argFoo;
            oscar = argBar;
            report = argBaz;
            if(!(oscar !== report)) { _fun66753_ip = 172; continue _fun66753 }
 16:
            entity = null;
            if(!(entity != oscar)) { _fun66753_ip = 172; continue _fun66753 }
 25:
            options = _closure1_slot0;
            mike = _closure1_slot2;
            golf = 10;
            mike = mike[golf];
            zulu = undefined;
            mike = options.bind(zulu)(mike);
            mike = mike.GuildJoinRequestApplicationStatuses;
            mike = mike.SUBMITTED;
            if(!(oscar === mike)) { _fun66753_ip = 92; continue _fun66753 }
 66:
            oscar = _closure1_slot28;
            mike = _closure1_slot27;
            options = mike.bind(zulu)(tango);
            mike = 1;
            mike = options + mike;
            mike = oscar.bind(zulu)(tango, mike);
 92:
            oscar = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[golf];
            mike = oscar.bind(zulu)(mike);
            mike = mike.GuildJoinRequestApplicationStatuses;
            mike = mike.SUBMITTED;
            if(!(report === mike)) { _fun66753_ip = 172; continue _fun66753 }
 125:
            mike = _closure1_slot27;
            report = mike.bind(zulu)(tango);
            mike = _closure1_slot28;
            entity = global;
            golf = entity.Math;
            oscar = golf.max;
            entity = 1;
            report = report - entity;
            entity = 0;
            entity = oscar.bind(golf)(entity, report);
            entity = mike.bind(zulu)(tango, entity);
 172:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot29 = entity;
    yankee = function(argFoo) { // Original name: guildJoinRequestsIndex
        mike = argFoo;
        entity = new Array(0);
        report = entity.push;
        golf = _closure1_slot15;
        zulu = mike.joinRequestId;
        oscar = undefined;
        zulu = golf.bind(oscar)(zulu);
        zulu = report.bind(entity)(zulu);
        zulu = entity.push;
        report = _closure1_slot16;
        tango = mike.guildId;
        mike = mike.applicationStatus;
        mike = report.bind(oscar)(tango, mike);
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    entity = function(argFoo) { // Original name: get
        zulu = _closure1_slot17;
        mike = zulu.get;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot30 = entity;
    entity = function(argFoo) { // Original name: upsert
        _fun66756: for(var _fun66756_ip = 0; ; ) switch(_fun66756_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot23;
            entity = report.joinRequestId;
            zulu[entity] = report;
            tango = _closure1_slot17;
            zulu = tango.set;
            entity = report.joinRequestId;
            entity = zulu.bind(tango)(entity, report);
            tango = _closure1_slot0;
            entity = _closure1_slot2;
            oscar = 12;
            zulu = entity[oscar];
            entity = undefined;
            golf = tango.bind(entity)(zulu);
            tango = golf.isSubmittedApplicationStatus;
            zulu = report.applicationStatus;
            zulu = tango.bind(golf)(zulu);
            if(!zulu) { _fun66756_ip = 124; continue _fun66756 }
 83:
            golf = _closure1_slot19;
            tango = golf.delete;
            zulu = report.joinRequestId;
            zulu = tango.bind(golf)(zulu);
            golf = _closure1_slot18;
            tango = golf.set;
            zulu = report.joinRequestId;
            zulu = tango.bind(golf)(zulu, report);
 124:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[oscar];
            oscar = tango.bind(entity)(zulu);
            tango = oscar.isActionedApplicationStatus;
            zulu = report.applicationStatus;
            zulu = tango.bind(oscar)(zulu);
            if(!zulu) { _fun66756_ip = 202; continue _fun66756 }
 161:
            oscar = _closure1_slot18;
            tango = oscar.delete;
            zulu = report.joinRequestId;
            zulu = tango.bind(oscar)(zulu);
            tango = _closure1_slot19;
            zulu = tango.set;
            mike = report.joinRequestId;
            mike = zulu.bind(tango)(mike, report);
 202:
            return entity;
        }
    };
    var _closure1_slot31 = entity;
    verify = function(argFoo) { // Original name: handleGuildJoinRequestCreateOrUpdate
        _fun66757: for(var _fun66757_ip = 0; ; ) switch(_fun66757_ip) {
 0:
            entity = argFoo;
            golf = entity.guildId;
            tango = entity.request;
            mike = _closure1_slot10;
            zulu = undefined;
            mike = mike.bind(zulu)(tango);
            report = _closure1_slot9;
            tango = report.getCurrentUser;
            tango = tango.bind(report)();
            report = null;
            if(!(report != tango)) { _fun66757_ip = 121; continue _fun66757 }
 47:
            oscar = mike.userId;
            tango = tango.id;
            if(!(oscar !== tango)) { _fun66757_ip = 121; continue _fun66757 }
 61:
            oscar = _closure1_slot30;
            tango = mike.joinRequestId;
            tango = oscar.bind(zulu)(tango);
            report = report == tango;
            oscar = undefined;
            if(report) { _fun66757_ip = 91; continue _fun66757 }
 85:
            oscar = tango.applicationStatus;
 91:
            report = _closure1_slot29;
            tango = mike.applicationStatus;
            tango = report.bind(zulu)(golf, tango, oscar);
            entity = _closure1_slot31;
            entity = entity.bind(zulu)(mike);
            entity = true;
            return entity;
 121:
            entity = false;
            return entity;
        }
    };
    mike = global;
    romeo = mike.Object;
    offset = romeo.defineProperty;
    options = {};
    entity = true;
    options['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(romeo)(zulu, entity, options);
    entity = 0;
    options = oscar[entity];
    entity = undefined;
    options = golf.bind(entity)(options);
    var _closure1_slot3 = options;
    options = 1;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot4 = options;
    options = 2;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot5 = options;
    options = 3;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot6 = options;
    options = 4;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot7 = options;
    options = 5;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot8 = options;
    options = 6;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot9 = options;
    options = 7;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.joinRequestFromServer;
    var _closure1_slot10 = options;
    options = 8;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.GuildFeatures;
    var _closure1_slot11 = options;
    mike = mike.Map;
    options = mike.prototype;
    options = Object.create(options, {constructor: {value: mike}});
    sizing = options;
    mike = new sizing[mike](kilo);
    mike = mike instanceof Object ? mike : options;
    var _closure1_slot12 = mike;
    mike = {};
    var _closure1_slot13 = mike;
    mike = false;
    var _closure1_slot14 = mike;
    mike = function(argFoo) { // Original name: StaticGuildJoinRequestIndexes_GUILD_JOIN_REQUESTS_BY_ID
        entity = global;
        entity = entity.HermesInternal;
        zulu = entity.concat;
        mike = 'guild-join-request=';
        entity = argFoo;
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    var _closure1_slot15 = mike;
    mike = function(argFoo, argBar) { // Original name: StaticGuildJoinRequestIndexes_GUILD_JOIN_REQUESTS_BY_STATUS
        entity = global;
        entity = entity.HermesInternal;
        report = entity.concat;
        tango = 'guild-';
        zulu = argFoo;
        mike = '-';
        entity = argBar;
        entity = report.bind(tango)(zulu, mike, entity);
        return entity;
    };
    var _closure1_slot16 = mike;
    mike = 11;
    options = oscar[mike];
    options = report.bind(entity)(options);
    romeo = options.SecondaryIndexMap;
    options = romeo.prototype;
    offset = Object.create(options, {constructor: {value: romeo}});
    backup = function(argFoo) {
        entity = argFoo;
        zulu = entity.joinRequestId;
        entity = global;
        entity = entity.HermesInternal;
        mike = entity.concat;
        entity = '';
        entity = mike.bind(entity)(zulu);
        return entity;
    };
    sizing = offset;
    kilo = yankee;
    options = new sizing[romeo](kilo, backup, foxtrot);
    options = options instanceof Object ? options : offset;
    var _closure1_slot17 = options;
    options = oscar[mike];
    options = report.bind(entity)(options);
    romeo = options.SecondaryIndexMap;
    options = romeo.prototype;
    offset = Object.create(options, {constructor: {value: romeo}});
    backup = function(argFoo) {
        entity = argFoo;
        zulu = entity.joinRequestId;
        entity = global;
        entity = entity.HermesInternal;
        mike = entity.concat;
        entity = '';
        entity = mike.bind(entity)(zulu);
        return entity;
    };
    sizing = offset;
    kilo = yankee;
    options = new sizing[romeo](kilo, backup, foxtrot);
    options = options instanceof Object ? options : offset;
    var _closure1_slot18 = options;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    offset = mike.SecondaryIndexMap;
    mike = offset.prototype;
    options = Object.create(mike, {constructor: {value: offset}});
    backup = function(argFoo) {
        entity = argFoo;
        zulu = entity.actionedAt;
        entity = global;
        entity = entity.HermesInternal;
        mike = entity.concat;
        entity = '';
        entity = mike.bind(entity)(zulu);
        return entity;
    };
    sizing = options;
    kilo = yankee;
    mike = new sizing[offset](kilo, backup, foxtrot);
    mike = mike instanceof Object ? mike : options;
    var _closure1_slot19 = mike;
    mike = {};
    var _closure1_slot20 = mike;
    mike = {};
    var _closure1_slot21 = mike;
    mike = {};
    var _closure1_slot22 = mike;
    mike = {};
    var _closure1_slot23 = mike;
    mike = 13;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    mike = mike.Seconds;
    options = mike.MINUTE;
    mike = 10;
    mike = mike * options;
    var _closure1_slot24 = mike;
    mike = 14;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: GuildJoinRequestStoreV2
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot3;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot25;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'getRequest';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            mike = _closure1_slot23;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        report['value'] = entity;
        entity = new Array(8);
        entity[0] = report;
        report = {};
        golf = 'getRequests';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun66766: for(var _fun66766_ip = 0; ; ) switch(_fun66766_ip) {
 0:
                report = argBar;
                zulu = _closure1_slot16;
                oscar = undefined;
                entity = argFoo;
                tango = zulu.bind(oscar)(entity, report);
                zulu = _closure1_slot0;
                entity = _closure1_slot2;
                golf = 12;
                entity = entity[golf];
                zulu = zulu.bind(oscar)(entity);
                entity = zulu.isActionedApplicationStatus;
                entity = entity.bind(zulu)(report);
                if(entity) { _fun66766_ip = 118; continue _fun66766 }
 55:
                zulu = _closure1_slot0;
                entity = _closure1_slot2;
                entity = entity[golf];
                zulu = zulu.bind(oscar)(entity);
                entity = zulu.isSubmittedApplicationStatus;
                entity = entity.bind(zulu)(report);
                if(entity) { _fun66766_ip = 102; continue _fun66766 }
 86:
                zulu = _closure1_slot17;
                entity = zulu.values;
                entity = entity.bind(zulu)(tango);
                _fun66766_ip = 116; continue _fun66766;
 102:
                report = _closure1_slot18;
                zulu = report.values;
                entity = zulu.bind(report)(tango);
 116:
                _fun66766_ip = 132; continue _fun66766;
 118:
                zulu = _closure1_slot19;
                mike = zulu.values;
                entity = mike.bind(zulu)(tango);
 132:
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getSubmittedGuildJoinRequestTotal';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            mike = _closure1_slot13;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'isFetching';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot14;
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'hasFetched';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun66769: for(var _fun66769_ip = 0; ; ) switch(_fun66769_ip) {
 0:
                tango = argFoo;
                zulu = _closure1_slot12;
                entity = zulu.has;
                entity = entity.bind(zulu)(tango);
                if(entity) { _fun66769_ip = 27; continue _fun66769 }
 23:
                entity = false;
                return entity;
 27:
                zulu = _closure1_slot12;
                entity = zulu.get;
                oscar = entity.bind(zulu)(tango);
                entity = null;
                entity = entity != oscar;
                if(!entity) { _fun66769_ip = 100; continue _fun66769 }
 50:
                report = _closure1_slot1;
                tango = _closure1_slot2;
                zulu = 9;
                zulu = tango[zulu];
                tango = undefined;
                zulu = report.bind(tango)(zulu);
                report = zulu.bind(tango)();
                tango = report.diff;
                zulu = 'seconds';
                zulu = tango.bind(report)(oscar, zulu);
                mike = _closure1_slot24;
                entity = zulu < mike;
 100:
                return entity;
            }
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getSelectedApplicationTab';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun66770: for(var _fun66770_ip = 0; ; ) switch(_fun66770_ip) {
 0:
                tango = argFoo;
                report = this;
                zulu = _closure1_slot8;
                entity = zulu.getGuild;
                verify = entity.bind(zulu)(tango);
                zulu = report.getRequests;
                oscar = _closure1_slot0;
                entity = _closure1_slot2;
                options = 10;
                entity = entity[options];
                golf = undefined;
                entity = oscar.bind(golf)(entity);
                entity = entity.GuildJoinRequestApplicationStatuses;
                entity = entity.SUBMITTED;
                entity = zulu.bind(report)(tango, entity);
                zulu = entity.length;
                entity = 0;
                report = zulu > entity;
                zulu = null;
                if(!(zulu != verify)) { _fun66770_ip = 121; continue _fun66770 }
 88:
                oscar = verify.hasFeature;
                entity = _closure1_slot11;
                entity = entity.CLAN;
                entity = oscar.bind(verify)(entity);
                if(!entity) { _fun66770_ip = 121; continue _fun66770 }
 112:
                entity = 'REVIEW_APPLICATION';
                if(!report) { _fun66770_ip = 150; continue _fun66770 }
 121:
                oscar = _closure1_slot0;
                report = _closure1_slot2;
                report = report[options];
                report = oscar.bind(golf)(report);
                report = report.GuildJoinRequestApplicationStatuses;
                entity = report.SUBMITTED;
 150:
                mike = _closure1_slot20;
                mike = mike[tango];
                if(!(zulu != mike)) { _fun66770_ip = 165; continue _fun66770 }
 162:
                entity = mike;
 165:
                return entity;
            }
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'getSelectedSortOrder';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun66771: for(var _fun66771_ip = 0; ; ) switch(_fun66771_ip) {
 0:
                zulu = _closure1_slot21;
                entity = argFoo;
                entity = zulu[entity];
                zulu = null;
                if(!(zulu == entity)) { _fun66771_ip = 54; continue _fun66771 }
 20:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 10;
                zulu = zulu[mike];
                mike = undefined;
                mike = tango.bind(mike)(zulu);
                mike = mike.GuildJoinRequestSortOrders;
                entity = mike.TIMESTAMP_DESC;
 54:
                return entity;
            }
        };
        report['value'] = golf;
        entity[6] = report;
        report = {};
        golf = 'getSelectedGuildJoinRequest';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun66772: for(var _fun66772_ip = 0; ; ) switch(_fun66772_ip) {
 0:
                mike = _closure1_slot22;
                entity = argFoo;
                mike = mike[entity];
                entity = null;
                tango = entity != mike;
                if(!tango) { _fun66772_ip = 40; continue _fun66772 }
 23:
                tango = _closure1_slot30;
                zulu = mike.joinRequestId;
                mike = undefined;
                entity = tango.bind(mike)(zulu);
 40:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[7] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'GuildJoinRequestStoreV2';
    options['displayName'] = mike;
    mike = 15;
    mike = oscar[mike];
    kilo = golf.bind(entity)(mike);
    mike = {};
    offset = function(argFoo) { // Original name: handleFetchByIdSuccess
        entity = argFoo;
        zulu = entity.joinRequest;
        mike = _closure1_slot31;
        entity = undefined;
        mike = mike.bind(entity)(zulu);
        return entity;
    };
    mike['GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS'] = offset;
    offset = function(argFoo) { // Original name: handleFetchSuccess
        _fun66774: for(var _fun66774_ip = 0; ; ) switch(_fun66774_ip) {
 0:
            entity = argFoo;
            golf = entity.status;
            tango = entity.requests;
            report = entity.total;
            zulu = entity.guildId;
            entity = false;
            _closure1_slot14 = entity;
            options = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 10;
            oscar = oscar[entity];
            entity = undefined;
            oscar = options.bind(entity)(oscar);
            oscar = oscar.GuildJoinRequestApplicationStatuses;
            oscar = oscar.SUBMITTED;
            if(!(golf === oscar)) { _fun66774_ip = 82; continue _fun66774 }
 72:
            mike = _closure1_slot28;
            mike = mike.bind(entity)(zulu, report);
 82:
            zulu = tango.forEach;
            mike = function(argFoo) {
                zulu = _closure1_slot31;
                entity = undefined;
                mike = argFoo;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    mike['GUILD_JOIN_REQUESTS_FETCH_SUCCESS'] = offset;
    offset = function() { // Original name: handleFetchStart
        entity = true;
        _closure1_slot14 = entity;
        entity = undefined;
        return entity;
    };
    mike['GUILD_JOIN_REQUESTS_FETCH_START'] = offset;
    offset = function() { // Original name: handleFetchFailure
        entity = false;
        _closure1_slot14 = entity;
        entity = undefined;
        return entity;
    };
    mike['GUILD_JOIN_REQUESTS_FETCH_FAILURE'] = offset;
    offset = function(argFoo) { // Original name: handleGuildJoinRequestsBulkAction
        entity = argFoo;
        tango = entity.guildId;
        entity = entity.action;
        var _closure2_slot0 = entity;
        golf = _closure1_slot17;
        oscar = golf.values;
        options = _closure1_slot16;
        verify = _closure1_slot0;
        report = _closure1_slot2;
        entity = 10;
        report = report[entity];
        entity = undefined;
        report = verify.bind(entity)(report);
        report = report.GuildJoinRequestApplicationStatuses;
        report = report.SUBMITTED;
        report = options.bind(entity)(tango, report);
        oscar = oscar.bind(golf)(report);
        report = oscar.forEach;
        zulu = function(argFoo) {
            zulu = _closure1_slot31;
            mike = {};
            report = argFoo;
            oscar = mike;
            entity = copyDataProperties(oscar, report);
            tango = _closure2_slot0;
            entity = 'applicationStatus';
            mike[entity] = tango;
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        zulu = report.bind(oscar)(zulu);
        zulu = _closure1_slot28;
        mike = 0;
        mike = zulu.bind(entity)(tango, mike);
        return entity;
    };
    mike['GUILD_JOIN_REQUESTS_BULK_ACTION'] = offset;
    mike['GUILD_JOIN_REQUEST_CREATE'] = verify;
    mike['GUILD_JOIN_REQUEST_UPDATE'] = verify;
    verify = function(argFoo) { // Original name: handleGuildJoinRequestDelete
        _fun66780: for(var _fun66780_ip = 0; ; ) switch(_fun66780_ip) {
 0:
            entity = argFoo;
            tango = entity.id;
            golf = entity.guildId;
            zulu = _closure1_slot30;
            entity = undefined;
            zulu = zulu.bind(entity)(tango);
            report = null;
            if(!(report != zulu)) { _fun66780_ip = 104; continue _fun66780 }
 33:
            oscar = _closure1_slot29;
            report = zulu.applicationStatus;
            zulu = 'DELETED';
            zulu = oscar.bind(entity)(golf, zulu, report);
            zulu = _closure1_slot23;
            zulu = delete zulu[tango];
            report = _closure1_slot17;
            zulu = report.delete;
            zulu = zulu.bind(report)(tango);
            report = _closure1_slot18;
            zulu = report.delete;
            zulu = zulu.bind(report)(tango);
            zulu = _closure1_slot19;
            mike = zulu.delete;
            mike = mike.bind(zulu)(tango);
 104:
            return entity;
        }
    };
    mike['GUILD_JOIN_REQUEST_DELETE'] = verify;
    verify = function(argFoo) { // Original name: handleSetApplicationTab
        _fun66781: for(var _fun66781_ip = 0; ; ) switch(_fun66781_ip) {
 0:
            entity = argFoo;
            zulu = entity.guildId;
            mike = entity.applicationTab;
            tango = _closure1_slot20;
            tango = tango[zulu];
            if(!(mike !== tango)) { _fun66781_ip = 37; continue _fun66781 }
 29:
            entity = _closure1_slot20;
            entity[zulu] = mike;
 37:
            entity = undefined;
            return entity;
        }
    };
    mike['GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB'] = verify;
    verify = function(argFoo) { // Original name: handleSetSortOrder
        _fun66782: for(var _fun66782_ip = 0; ; ) switch(_fun66782_ip) {
 0:
            entity = argFoo;
            zulu = entity.guildId;
            tango = entity.sortOrder;
            mike = _closure1_slot21;
            mike = mike[zulu];
            if(!(tango !== mike)) { _fun66782_ip = 193; continue _fun66782 }
 32:
            mike = _closure1_slot21;
            mike[zulu] = tango;
            mike = _closure1_slot20;
            tango = mike[zulu];
            mike = null;
            if(!(mike == tango)) { _fun66782_ip = 88; continue _fun66782 }
 54:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 10;
            zulu = zulu[mike];
            mike = undefined;
            mike = report.bind(mike)(zulu);
            mike = mike.GuildJoinRequestApplicationStatuses;
            tango = mike.SUBMITTED;
 88:
            mike = 'REVIEW_APPLICATION';
            if(!(mike !== tango)) { _fun66782_ip = 193; continue _fun66782 }
 98:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            oscar = 12;
            mike = mike[oscar];
            report = undefined;
            zulu = zulu.bind(report)(mike);
            mike = zulu.isActionedApplicationStatus;
            mike = mike.bind(zulu)(tango);
            if(!mike) { _fun66782_ip = 148; continue _fun66782 }
 134:
            zulu = _closure1_slot19;
            mike = zulu.clear;
            mike = mike.bind(zulu)();
 148:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[oscar];
            zulu = zulu.bind(report)(mike);
            mike = zulu.isSubmittedApplicationStatus;
            mike = mike.bind(zulu)(tango);
            if(!mike) { _fun66782_ip = 193; continue _fun66782 }
 179:
            mike = _closure1_slot18;
            entity = mike.clear;
            entity = entity.bind(mike)();
 193:
            entity = undefined;
            return entity;
        }
    };
    mike['GUILD_JOIN_REQUESTS_SET_SORT_ORDER'] = verify;
    tango = function(argFoo) { // Original name: handleGuildJoinRequestSelect
        entity = argFoo;
        zulu = entity.guildId;
        mike = entity.request;
        entity = _closure1_slot22;
        entity[zulu] = mike;
        entity = undefined;
        return entity;
    };
    mike['GUILD_JOIN_REQUESTS_SET_SELECTED'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    sizing = tango;
    backup = mike;
    mike = new sizing[options](kilo, backup, foxtrot);
    mike = mike instanceof Object ? mike : tango;
    tango = 16;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_member_verification/GuildJoinRequestStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();