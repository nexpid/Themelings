// app/modules/application_commands/getPrimaryAppCommand.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    verify = argBar;
    options = argBaz;
    zulu = argFred;
    offset = argPlugh;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = offset;
    entity = function() { // Original name: _getPrimaryAppCommand
        report = undefined;
        entity = undefined;
        tango = _closure1_slot2;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun73608: for(var _fun73608_ip = 0; ; ) switch(_fun73608_ip) {
 0:
                    StartGenerator();
                    verify = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun73608_ip = 181; continue _fun73608 }
 13:
                    report = _closure1_slot4;
                    zulu = report.getChannel;
                    mike = argFoo;
                    offset = zulu.bind(report)(mike);
                    report = null;
                    mike = report != offset;
                    options = undefined;
                    zulu = undefined;
                    if(!mike) { _fun73608_ip = 77; continue _fun73608 }
 46:
                    golf = _closure1_slot11;
                    oscar = {};
                    oscar['channel'] = offset;
                    yankee = 'channel';
                    oscar['type'] = yankee;
                    oscar = golf.bind(options)(oscar, verify);
                    mike = report == oscar;
                    zulu = oscar;
 77:
                    if(!mike) { _fun73608_ip = 137; continue _fun73608 }
 80:
                    oscar = _closure1_slot5;
                    mike = {};
                    golf = 'application';
                    mike['type'] = golf;
                    mike['applicationId'] = verify;
                    mike = oscar.bind(options)(mike);
                    SaveGenerator(address=107);
 105:
                    return mike;
 107:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(oscar) { _fun73608_ip = 178; continue _fun73608 }
 113:
                    golf = _closure1_slot11;
                    oscar = {};
                    oscar['channel'] = offset;
                    offset = 'channel';
                    oscar['type'] = offset;
                    zulu = golf.bind(options)(oscar, verify);
 137:
                    if(!(report == zulu)) { _fun73608_ip = 175; continue _fun73608 }
 141:
                    report = global;
                    oscar = report.Error;
                    foxtrot = _closure1_slot8;
                    report = oscar.prototype;
                    report = Object.create(report, {constructor: {value: oscar}});
                    backup = report;
                    tango = new backup[oscar](foxtrot, romeo);
                    tango = tango instanceof Object ? tango : report;
                    throw tango;
 175:
                    return zulu;
 178:
                    return mike;
 181:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot10 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot10 = entity;
    oscar = function(argFoo, argBar) { // Original name: queryForPrimaryAppCommand
        report = _closure1_slot7;
        tango = report.query;
        zulu = {};
        golf = _closure1_slot0;
        options = _closure1_slot1;
        entity = 4;
        entity = options[entity];
        oscar = undefined;
        entity = golf.bind(oscar)(entity);
        entity = entity.ApplicationCommandType;
        mike = entity.PRIMARY_ENTRY_POINT;
        entity = new Array(1);
        entity[0] = mike;
        zulu['commandTypes'] = entity;
        mike = {'placeholderCount': 1, 'scoreMethod': null, 'applicationId': null, 'allowFetch': false, 'allowApplicationState': true};
        entity = 5;
        entity = options[entity];
        entity = golf.bind(oscar)(entity);
        entity = entity.ScoreMethod;
        entity = entity.COMMAND_ONLY;
        mike['scoreMethod'] = entity;
        entity = argBar;
        mike['applicationId'] = entity;
        entity = argFoo;
        entity = tango.bind(report)(entity, zulu, mike);
        mike = entity.commands;
        entity = 0;
        entity = mike[entity];
        return entity;
    };
    var _closure1_slot11 = oscar;
    report = function(argFoo, argBar) { // Original name: useGetPrimaryAppCommand
        options = argBar;
        var _closure2_slot0 = options;
        report = _closure1_slot13;
        tango = undefined;
        entity = argFoo;
        entity = report.bind(tango)(entity, options);
        tango = entity.commands;
        oscar = entity.loading;
        var _closure2_slot1 = oscar;
        entity = 0;
        entity = tango[entity];
        tango = null;
        golf = tango != entity;
        var _closure2_slot2 = golf;
        report = _closure1_slot3;
        tango = report.useEffect;
        zulu = new Array(3);
        zulu[0] = options;
        zulu[1] = golf;
        zulu[2] = oscar;
        mike = function() {
            _fun73611: for(var _fun73611_ip = 0; ; ) switch(_fun73611_ip) {
 0:
                entity = _closure2_slot2;
                if(entity) { _fun73611_ip = 14; continue _fun73611 }
 10:
                entity = _closure2_slot1;
 14:
                if(entity) { _fun73611_ip = 71; continue _fun73611 }
 17:
                zulu = _closure1_slot0;
                mike = _closure1_slot1;
                entity = 6;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.requestApplicationCommandIndex;
                entity = {};
                report = 'application';
                entity['type'] = report;
                tango = _closure2_slot0;
                entity['applicationId'] = tango;
                entity = mike.bind(zulu)(entity);
 71:
                entity = undefined;
                return entity;
            }
        };
        mike = tango.bind(report)(mike, zulu);
        return entity;
    };
    var _closure1_slot12 = report;
    tango = function(argFoo, argBar) { // Original name: useQueryForPrimaryAppCommand
        report = _closure1_slot6;
        tango = {};
        mike = _closure1_slot9;
        tango['commandTypes'] = mike;
        zulu = {'placeholderCount': 1, 'scoreMethod': null, 'applicationId': null, 'allowFetch': false, 'allowApplicationState': true};
        oscar = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 5;
        entity = mike[entity];
        mike = undefined;
        entity = oscar.bind(mike)(entity);
        entity = entity.ScoreMethod;
        entity = entity.COMMAND_ONLY;
        zulu['scoreMethod'] = entity;
        entity = argBar;
        zulu['applicationId'] = entity;
        entity = argFoo;
        entity = report.bind(mike)(entity, tango, zulu);
        return entity;
    };
    var _closure1_slot13 = tango;
    entity = global;
    romeo = entity.Object;
    yankee = romeo.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeo)(zulu, entity, golf);
    entity = 0;
    golf = offset[entity];
    entity = undefined;
    golf = options.bind(entity)(golf);
    var _closure1_slot2 = golf;
    golf = 1;
    yankee = offset[golf];
    golf = argCorge;
    golf = golf.bind(entity)(yankee);
    var _closure1_slot3 = golf;
    golf = 2;
    golf = offset[golf];
    golf = options.bind(entity)(golf);
    var _closure1_slot4 = golf;
    golf = 3;
    yankee = offset[golf];
    yankee = verify.bind(entity)(yankee);
    romeo = yankee.getOrFetchApplicationCommandIndexForTarget;
    var _closure1_slot5 = romeo;
    yankee = yankee.useQueryState;
    var _closure1_slot6 = yankee;
    golf = offset[golf];
    golf = options.bind(entity)(golf);
    var _closure1_slot7 = golf;
    golf = 'no primary app command for application';
    var _closure1_slot8 = golf;
    options = 4;
    options = offset[options];
    options = verify.bind(entity)(options);
    options = options.ApplicationCommandType;
    yankee = options.PRIMARY_ENTRY_POINT;
    options = new Array(1);
    options[0] = yankee;
    var _closure1_slot9 = options;
    options = 8;
    options = offset[options];
    offset = verify.bind(entity)(options);
    verify = offset.fileFinishedImporting;
    options = 'modules/application_commands/getPrimaryAppCommand.tsx';
    options = verify.bind(offset)(options);
    options = function() { // Original name: getPrimaryAppCommand
        entity = undefined;
        tango = _closure1_slot10;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['default'] = options;
    zulu['NO_PRIMARY_APP_COMMAND_ERROR'] = golf;
    zulu['queryForPrimaryAppCommand'] = oscar;
    zulu['useGetPrimaryAppCommand'] = report;
    zulu['useQueryForPrimaryAppCommand'] = tango;
    mike = function(argFoo) { // Original name: useIsPrimaryAppCommandUsableInAppDM
        _fun73614: for(var _fun73614_ip = 0; ; ) switch(_fun73614_ip) {
 0:
            entity = argFoo;
            zulu = entity.context;
            mike = entity.applicationId;
            tango = entity.botUserId;
            entity = _closure1_slot12;
            verify = undefined;
            oscar = entity.bind(verify)(zulu, mike);
            entity = null;
            if(!(entity != oscar)) { _fun73614_ip = 183; continue _fun73614 }
 43:
            mike = oscar.integration_types;
            zulu = entity != mike;
            if(!zulu) { _fun73614_ip = 104; continue _fun73614 }
 56:
            options = oscar.integration_types;
            golf = options.includes;
            offset = _closure1_slot0;
            yankee = _closure1_slot1;
            mike = 7;
            mike = yankee[mike];
            mike = offset.bind(verify)(mike);
            mike = mike.ApplicationIntegrationType;
            mike = mike.USER_INSTALL;
            zulu = golf.bind(options)(mike);
 104:
            mike = oscar.contexts;
            mike = entity != mike;
            if(!mike) { _fun73614_ip = 165; continue _fun73614 }
 117:
            golf = oscar.contexts;
            oscar = golf.includes;
            options = _closure1_slot0;
            offset = _closure1_slot1;
            report = 4;
            report = offset[report];
            report = options.bind(verify)(report);
            report = report.InteractionContextType;
            report = report.BOT_DM;
            mike = oscar.bind(golf)(report);
 165:
            entity = entity != tango;
            if(!entity) { _fun73614_ip = 175; continue _fun73614 }
 172:
            entity = zulu;
 175:
            if(!entity) { _fun73614_ip = 181; continue _fun73614 }
 178:
            entity = mike;
 181:
            return entity;
 183:
            entity = false;
            return entity;
        }
    };
    zulu['useIsPrimaryAppCommandUsableInAppDM'] = mike;
    return entity;
})();