// app/modules/application_commands/native/ApplicationCommandBuiltIns.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.BuiltInSectionId;
    tango = {'id': '-15', 'untranslatedName': 'leave', 'displayName': 'leave'};
    options = 3;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.ApplicationCommandType;
    options = options.CHAT;
    tango['type'] = options;
    options = 4;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.ApplicationCommandInputType;
    options = options.BUILT_IN;
    tango['inputType'] = options;
    golf = golf.BUILT_IN;
    tango['applicationId'] = golf;
    options = function() { // Original name: get untranslatedDescription
        report = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 5;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.26C4oq;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    golf = 'untranslatedDescription';
    Object.defineProperty(tango, golf, {get: options, set: entity, enumerable: true});
    options = function() { // Original name: get displayDescription
        report = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 5;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.26C4oq;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    golf = 'displayDescription';
    Object.defineProperty(tango, golf, {get: options, set: entity, enumerable: true});
    golf = function(argFoo) { // Original name: predicate
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zulu = entity.channel;
            entity = null;
            entity = entity != zulu;
            if(!entity) { _fun00002_ip = 27; continue _fun00001 }
 17:
            mike = zulu.isGroupDM;
            entity = mike.bind(zulu)();
 27:
            return entity;
        }
    };
    tango['predicate'] = golf;
    mike = function(argFoo, argBar) { // Original name: execute
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argBar;
            report = entity.channel;
            var _closure2_slot0 = report;
            entity = null;
            if(!(entity != report)) { _fun00004_ip = 453; continue _fun00003 }
 23:
            mike = _closure1_slot0;
            entity = _closure1_slot2;
            zulu = 6;
            zulu = entity[zulu];
            verify = undefined;
            offset = mike.bind(verify)(zulu);
            options = offset.computeChannelName;
            golf = _closure1_slot4;
            zulu = _closure1_slot3;
            romeo = options.bind(offset)(report, golf, zulu);
            offset = 5;
            zulu = entity[offset];
            zulu = mike.bind(verify)(zulu);
            yankee = zulu.intl;
            options = yankee.formatToPlainString;
            zulu = entity[offset];
            zulu = mike.bind(verify)(zulu);
            zulu = zulu.t;
            golf = zulu.hJ5Ap6;
            zulu = {};
            zulu['name'] = romeo;
            zulu = options.bind(yankee)(golf, zulu);
            golf = entity[offset];
            golf = mike.bind(verify)(golf);
            options = golf.intl;
            golf = options.format;
            entity = entity[offset];
            entity = mike.bind(verify)(entity);
            entity = entity.t;
            mike = entity.SSIVOj;
            entity = {};
            entity['name'] = romeo;
            golf = golf.bind(options)(mike, entity);
            entity = report.isManaged;
            entity = entity.bind(report)();
            options = zulu;
            if(!entity) { _fun00004_ip = 300; continue _fun00003 }
 190:
            zulu = _closure1_slot0;
            entity = _closure1_slot2;
            mike = entity[offset];
            mike = zulu.bind(verify)(mike);
            foxtrot = mike.intl;
            yankee = foxtrot.formatToPlainString;
            mike = entity[offset];
            mike = zulu.bind(verify)(mike);
            mike = mike.t;
            report = mike.hVGjER;
            mike = {};
            mike['name'] = romeo;
            options = yankee.bind(foxtrot)(report, mike);
            report = entity[offset];
            report = zulu.bind(verify)(report);
            yankee = report.intl;
            report = yankee.format;
            entity = entity[offset];
            entity = zulu.bind(verify)(entity);
            entity = entity.t;
            zulu = entity.IK1Qvr;
            entity = {};
            entity['name'] = romeo;
            golf = report.bind(yankee)(zulu, entity);
 300:
            mike = _closure1_slot1;
            report = _closure1_slot2;
            entity = 7;
            entity = report[entity];
            zulu = mike.bind(verify)(entity);
            mike = zulu.show;
            entity = {};
            entity['title'] = options;
            entity['body'] = golf;
            options = _closure1_slot0;
            oscar = report[offset];
            oscar = options.bind(verify)(oscar);
            yankee = oscar.intl;
            golf = yankee.string;
            oscar = report[offset];
            oscar = options.bind(verify)(oscar);
            oscar = oscar.t;
            oscar = oscar.26C4oq;
            oscar = golf.bind(yankee)(oscar);
            entity['confirmText'] = oscar;
            oscar = report[offset];
            oscar = options.bind(verify)(oscar);
            golf = oscar.intl;
            oscar = golf.string;
            report = report[offset];
            report = options.bind(verify)(report);
            report = report.t;
            report = report.ETE/oK;
            report = oscar.bind(golf)(report);
            entity['cancelText'] = report;
            tango = function() { // Original name: onConfirm
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0: // try_start_0
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 8;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.closePrivateChannel;
                    entity = _closure2_slot0;
                    entity = entity.id;
                    entity = mike.bind(zulu)(entity);
 48: // try_end0
                    _fun00006_ip = 154; continue _fun00005;
 50: // catch_target0
                    CatchBlockStart(arg_register=0);
                    zulu = _closure1_slot1;
                    verify = _closure1_slot2;
                    mike = 9;
                    mike = verify[mike];
                    options = undefined;
                    tango = zulu.bind(options)(mike);
                    zulu = tango.sendBotMessage;
                    mike = _closure2_slot0;
                    mike = mike.id;
                    golf = _closure1_slot0;
                    entity = 5;
                    report = verify[entity];
                    report = golf.bind(options)(report);
                    oscar = report.intl;
                    report = oscar.string;
                    entity = verify[entity];
                    entity = golf.bind(options)(entity);
                    entity = entity.t;
                    entity = entity.YOsuT0;
                    entity = report.bind(oscar)(entity);
                    entity = zulu.bind(tango)(mike, entity);
 154:
                    entity = undefined;
                    return entity;
                }
            };
            entity['onConfirm'] = tango;
            entity = mike.bind(zulu)(entity);
 453:
            entity = undefined;
            return entity;
        }
    };
    tango['execute'] = mike;
    mike = new Array(1);
    mike[0] = tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/application_commands/native/ApplicationCommandBuiltIns.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();