// app/modules/application_directory/stores/ApplicationDirectorySimilarApplicationsStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun70488: for(var _fun70488_ip = 0; ; ) switch(_fun70488_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot9;
            entity = entity.bind(zulu)();
            if(entity) { _fun70488_ip = 51; continue _fun70488 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun70488_ip = 92; continue _fun70488;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun70488_ip = 71; continue _fun70488 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot3;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun70489: for(var _fun70489_ip = 0; ; ) switch(_fun70489_ip) {
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
            _fun70489_ip = 76; continue _fun70489;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot9 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo) { // Original name: getCacheKey
        entity = argFoo;
        romeo = entity.applicationId;
        offset = entity.guildId;
        options = entity.page;
        entity = global;
        entity = entity.HermesInternal;
        tango = entity.concat;
        foxtrot = 'applicationId:';
        yankee = ' guildId:';
        verify = ' page:';
        entity = foxtrot[tango](romeo, yankee, offset, verify, options, golf);
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = global;
    options = entity.Object;
    tango = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(options)(zulu, entity, mike);
    yankee = 0;
    mike = oscar[yankee];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot0 = mike;
    offset = 1;
    mike = oscar[offset];
    mike = golf.bind(entity)(mike);
    var _closure1_slot1 = mike;
    verify = 2;
    mike = oscar[verify];
    mike = golf.bind(entity)(mike);
    var _closure1_slot2 = mike;
    options = 3;
    mike = oscar[options];
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = {};
    mike['NOT_FETCHED'] = yankee;
    tango = 'NOT_FETCHED';
    mike[yankee] = tango;
    mike['FETCHING'] = offset;
    tango = 'FETCHING';
    mike[offset] = tango;
    mike['FETCHED'] = verify;
    tango = 'FETCHED';
    mike[verify] = tango;
    mike['ERROR'] = options;
    tango = 'ERROR';
    mike[options] = tango;
    var _closure1_slot5 = mike;
    tango = 5;
    tango = oscar[tango];
    verify = golf.bind(entity)(tango);
    tango = {};
    options = 20;
    tango['max'] = options;
    options = verify.prototype;
    options = Object.create(options, {constructor: {value: verify}});
    kilo = options;
    backup = tango;
    tango = new kilo[verify](backup, foxtrot);
    tango = tango instanceof Object ? tango : options;
    var _closure1_slot6 = tango;
    tango = {};
    var _closure1_slot7 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    options = tango.Store;
    tango = function(argFoo) {
        tango = function() { // Original name: ApplicationDirectorySimilarApplicationsStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot0;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot8;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot4;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot1;
        report = {};
        entity = 'getSimilarApplications';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun70495: for(var _fun70495_ip = 0; ; ) switch(_fun70495_ip) {
 0:
                entity = argFoo;
                oscar = entity.applicationId;
                report = entity.guildId;
                mike = entity.page;
                entity = null;
                if(!(entity == oscar)) { _fun70495_ip = 29; continue _fun70495 }
 25:
                entity = undefined;
                return entity;
 29:
                tango = _closure1_slot10;
                zulu = {};
                zulu['applicationId'] = oscar;
                zulu['guildId'] = report;
                zulu['page'] = mike;
                mike = undefined;
                zulu = tango.bind(mike)(zulu);
                mike = _closure1_slot6;
                entity = mike.get;
                entity = entity.bind(mike)(zulu);
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golf = 'getFetchState';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun70496: for(var _fun70496_ip = 0; ; ) switch(_fun70496_ip) {
 0:
                entity = argFoo;
                oscar = entity.applicationId;
                report = entity.guildId;
                mike = entity.page;
                entity = null;
                if(!(entity == oscar)) { _fun70496_ip = 29; continue _fun70496 }
 25:
                entity = undefined;
                return entity;
 29:
                tango = _closure1_slot10;
                zulu = {};
                zulu['applicationId'] = oscar;
                zulu['guildId'] = report;
                zulu['page'] = mike;
                mike = undefined;
                mike = tango.bind(mike)(zulu);
                entity = _closure1_slot7;
                entity = entity[mike];
                return entity;
            }
        };
        report['value'] = oscar;
        entity[1] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = tango.bind(entity)(options);
    tango = 'ApplicationDirectorySimilarApplicationsStore';
    options['displayName'] = tango;
    tango = 7;
    tango = oscar[tango];
    backup = golf.bind(entity)(tango);
    tango = {};
    verify = function(argFoo) { // Original name: handleFetchSimilarApplications
        entity = argFoo;
        oscar = entity.applicationId;
        report = entity.guildId;
        entity = entity.page;
        tango = _closure1_slot10;
        mike = {};
        mike['applicationId'] = oscar;
        mike['guildId'] = report;
        mike['page'] = entity;
        entity = undefined;
        report = tango.bind(entity)(mike);
        mike = {};
        golf = _closure1_slot7;
        options = mike;
        tango = copyDataProperties(options, golf);
        tango = _closure1_slot5;
        tango = tango.FETCHING;
        mike[report] = tango;
        _closure1_slot7 = mike;
        return entity;
    };
    tango['APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS'] = verify;
    verify = function(argFoo) { // Original name: handleFetchSimilarApplicationsSuccess
        mike = argFoo;
        report = mike.applicationId;
        entity = mike.guildId;
        offset = mike.similarApplications;
        verify = mike.loadId;
        options = mike.page;
        golf = mike.totalPages;
        tango = _closure1_slot10;
        mike = {};
        mike['applicationId'] = report;
        mike['guildId'] = entity;
        mike['page'] = options;
        entity = undefined;
        report = tango.bind(entity)(mike);
        oscar = _closure1_slot6;
        tango = oscar.set;
        mike = {};
        yankee = global;
        romeo = yankee.Date;
        yankee = romeo.now;
        yankee = yankee.bind(romeo)();
        mike['lastFetchTimeMs'] = yankee;
        mike['applications'] = offset;
        mike['loadId'] = verify;
        mike['page'] = options;
        mike['totalPages'] = golf;
        mike = tango.bind(oscar)(report, mike);
        mike = {};
        foxtrot = _closure1_slot7;
        backup = mike;
        tango = copyDataProperties(backup, foxtrot);
        tango = _closure1_slot5;
        tango = tango.FETCHED;
        mike[report] = tango;
        _closure1_slot7 = mike;
        return entity;
    };
    tango['APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS'] = verify;
    report = function(argFoo) { // Original name: handleFetchSimilarApplicationsFailure
        entity = argFoo;
        oscar = entity.applicationId;
        report = entity.guildId;
        entity = entity.page;
        tango = _closure1_slot10;
        mike = {};
        mike['applicationId'] = oscar;
        mike['guildId'] = report;
        mike['page'] = entity;
        entity = undefined;
        report = tango.bind(entity)(mike);
        mike = {};
        golf = _closure1_slot7;
        options = mike;
        tango = copyDataProperties(options, golf);
        tango = _closure1_slot5;
        tango = tango.ERROR;
        mike[report] = tango;
        _closure1_slot7 = mike;
        return entity;
    };
    tango['APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE'] = report;
    report = options.prototype;
    report = Object.create(report, {constructor: {value: options}});
    kilo = report;
    foxtrot = tango;
    tango = new kilo[options](backup, foxtrot, romeo);
    tango = tango instanceof Object ? tango : report;
    report = 8;
    oscar = oscar[report];
    report = argBar;
    golf = report.bind(entity)(oscar);
    oscar = golf.fileFinishedImporting;
    report = 'modules/application_directory/stores/ApplicationDirectorySimilarApplicationsStore.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['FetchState'] = mike;
    return entity;
})();