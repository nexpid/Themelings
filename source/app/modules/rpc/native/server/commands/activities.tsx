// app/modules/rpc/native/server/commands/activities.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    tango = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tango;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = tango.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    romeo = mike.RPC_AUTHENTICATED_SCOPE;
    foxtrot = mike.RPC_LOCAL_SCOPE;
    yankee = mike.RPC_SCOPE_CONFIG;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    tango = mike.InstantInviteSources;
    var _closure1_slot4 = tango;
    tango = mike.RPCCommands;
    mike = mike.RPCErrors;
    var _closure1_slot5 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.NativePermissionTypes;
    var _closure1_slot6 = mike;
    mike = {};
    verify = tango.OPEN_INVITE_DIALOG;
    golf = {};
    backup = {};
    sizing = yankee.ANY;
    offset = 4;
    kilo = oscar[offset];
    kilo = report.bind(entity)(kilo);
    kilo = kilo.OAuth2Scopes;
    output = kilo.RPC;
    kilo = new Array(3);
    kilo[0] = output;
    kilo[1] = foxtrot;
    kilo[2] = romeo;
    backup[sizing] = kilo;
    golf['scope'] = backup;
    backup = function(argFoo) { // Original name: handler
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            golf = entity.socket;
            tango = _closure1_slot0;
            report = _closure1_slot2;
            entity = 5;
            zulu = report[entity];
            entity = undefined;
            oscar = tango.bind(entity)(zulu);
            zulu = oscar.validateOpenInviteDialog;
            zulu = zulu.bind(oscar)();
            oscar = zulu.channel;
            zulu = 6;
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.showInstantInviteActionSheet;
            mike = _closure1_slot4;
            zulu = mike.ACTIVITY_INVITE;
            mike = {};
            golf = golf.application;
            options = golf.id;
            golf = null;
            verify = golf != options;
            golf = undefined;
            if(!verify) { _fun00002_ip = 103; continue _fun00001 }
 100:
            golf = options;
 103:
            mike['targetApplicationId'] = golf;
            mike = tango.bind(report)(oscar, zulu, mike);
            return entity;
        }
    };
    golf['handler'] = backup;
    mike[verify] = golf;
    golf = tango.INITIATE_IMAGE_UPLOAD;
    tango = {};
    verify = {};
    yankee = yankee.ANY;
    offset = oscar[offset];
    offset = report.bind(entity)(offset);
    offset = offset.OAuth2Scopes;
    backup = offset.RPC;
    offset = new Array(3);
    offset[0] = backup;
    offset[1] = foxtrot;
    offset[2] = romeo;
    verify[yankee] = offset;
    tango['scope'] = verify;
    options = function(argFoo) { // Original name: handler
        mike = argFoo;
        mike = mike.socket;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00004_ip = 740; continue _fun00003 }
 10:
                    mike = _closure2_slot0;
                    mike = mike.application;
                    yankee = mike.id;
                    options = null;
                    if(!(options != yankee)) { _fun00004_ip = 667; continue _fun00003 }
 36:
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    zulu = 8;
                    zulu = report[zulu];
                    report = undefined;
                    zulu = tango.bind(report)(zulu);
                    zulu = zulu.bind(report)();
                    tango = options == zulu;
                    offset = undefined;
                    if(tango) { _fun00004_ip = 79; continue _fun00003 }
 74:
                    offset = zulu.id;
 79:
                    if(!(options != offset)) { _fun00004_ip = 599; continue _fun00003 }
 86:
                    tango = _closure1_slot1;
                    oscar = _closure1_slot2;
                    zulu = 9;
                    zulu = oscar[zulu];
                    oscar = tango.bind(report)(zulu);
                    tango = oscar.requestPermission;
                    zulu = _closure1_slot6;
                    zulu = zulu.PHOTOS;
                    oscar = tango.bind(oscar)(zulu);
                    tango = oscar.catch;
                    zulu = function() {
                        tango = _closure1_slot1;
                        zulu = _closure1_slot2;
                        mike = 7;
                        zulu = zulu[mike];
                        mike = undefined;
                        tango = tango.bind(mike)(zulu);
                        zulu = {};
                        entity = _closure1_slot5;
                        entity = entity.UNKNOWN_ERROR;
                        zulu['errorCode'] = entity;
                        entity = tango.prototype;
                        mike = Object.create(entity, {constructor: {value: tango}});
                        report = 'Failed requesting photo permissions';
                        golf = mike;
                        oscar = zulu;
                        entity = new golf[tango](oscar, report, tango);
                        entity = entity instanceof Object ? entity : mike;
                        throw entity;
                    };
                    zulu = tango.bind(oscar)(zulu);
                    SaveGenerator(address=151);
 149:
                    return zulu;
 151:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun00004_ip = 596; continue _fun00003 }
 160:
                    if(zulu) { _fun00004_ip = 231; continue _fun00003 }
 163:
                    oscar = _closure1_slot1;
                    golf = _closure1_slot2;
                    tango = 7;
                    tango = golf[tango];
                    verify = oscar.bind(report)(tango);
                    golf = {};
                    tango = _closure1_slot5;
                    tango = tango.UNKNOWN_ERROR;
                    golf['errorCode'] = tango;
                    tango = verify.prototype;
                    oscar = Object.create(tango, {constructor: {value: verify}});
                    kilo = 'Missing photo permissions';
                    output = oscar;
                    sizing = golf;
                    tango = new output[verify](sizing, kilo, backup);
                    tango = tango instanceof Object ? tango : oscar;
                    throw tango;
 231:
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    tango = 10;
                    tango = golf[tango];
                    golf = oscar.bind(report)(tango);
                    oscar = golf.launchImageLibrary;
                    tango = {'mediaType': 'photo', 'includeBase64': false, 'presentationStyle': 'pageSheet', 'selectionLimit': 1};
                    tango = oscar.bind(golf)(tango);
                    SaveGenerator(address=280);
 278:
                    return tango;
 280:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscar) { _fun00004_ip = 593; continue _fun00003 }
 289:
                    golf = tango.assets;
                    oscar = 0;
                    romeo = golf[oscar];
                    if(!(options != romeo)) { _fun00004_ip = 525; continue _fun00003 }
 308:
                    golf = _closure1_slot0;
                    verify = _closure1_slot2;
                    oscar = 11;
                    oscar = verify[oscar];
                    verify = golf.bind(report)(oscar);
                    golf = verify.uploadImageAttachment;
                    oscar = {};
                    foxtrot = romeo.fileName;
                    oscar['name'] = foxtrot;
                    foxtrot = romeo.type;
                    oscar['type'] = foxtrot;
                    romeo = romeo.uri;
                    oscar['uri'] = romeo;
                    oscar = golf.bind(verify)(yankee, offset, oscar);
                    SaveGenerator(address=377);
 375:
                    return oscar;
 377:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(golf) { _fun00004_ip = 522; continue _fun00003 }
 386:
                    if(!(options != oscar)) { _fun00004_ip = 441; continue _fun00003 }
 390:
                    golf = oscar.url;
                    if(!(options != golf)) { _fun00004_ip = 441; continue _fun00003 }
 399:
                    options = _closure1_slot1;
                    verify = _closure1_slot2;
                    golf = 12;
                    golf = verify[golf];
                    golf = options.bind(report)(golf);
                    golf = oscar instanceof golf;
                    if(golf) { _fun00004_ip = 441; continue _fun00003 }
 426:
                    golf = {};
                    options = oscar.url;
                    golf['image_url'] = options;
                    return golf;
 441:
                    options = _closure1_slot1;
                    verify = _closure1_slot2;
                    golf = 7;
                    golf = verify[golf];
                    offset = options.bind(report)(golf);
                    verify = {};
                    golf = _closure1_slot5;
                    golf = golf.UNKNOWN_ERROR;
                    verify['errorCode'] = golf;
                    golf = global;
                    options = golf.JSON;
                    golf = options.stringify;
                    kilo = golf.bind(options)(oscar);
                    options = offset.prototype;
                    options = Object.create(options, {constructor: {value: offset}});
                    output = options;
                    sizing = verify;
                    golf = new output[offset](sizing, kilo, backup);
                    golf = golf instanceof Object ? golf : options;
                    throw golf;
 522:
                    return oscar;
 525:
                    golf = _closure1_slot1;
                    options = _closure1_slot2;
                    oscar = 7;
                    oscar = options[oscar];
                    verify = golf.bind(report)(oscar);
                    options = {};
                    oscar = _closure1_slot5;
                    oscar = oscar.UNKNOWN_ERROR;
                    options['errorCode'] = oscar;
                    oscar = verify.prototype;
                    golf = Object.create(oscar, {constructor: {value: verify}});
                    kilo = 'No image selected';
                    output = golf;
                    sizing = options;
                    oscar = new output[verify](sizing, kilo, backup);
                    oscar = oscar instanceof Object ? oscar : golf;
                    throw oscar;
 593:
                    return tango;
 596:
                    return zulu;
 599:
                    tango = _closure1_slot1;
                    oscar = _closure1_slot2;
                    zulu = 7;
                    zulu = oscar[zulu];
                    report = tango.bind(report)(zulu);
                    tango = {};
                    mike = _closure1_slot5;
                    mike = mike.UNKNOWN_ERROR;
                    tango['errorCode'] = mike;
                    mike = report.prototype;
                    zulu = Object.create(mike, {constructor: {value: report}});
                    kilo = 'Unable to find selected channel';
                    output = zulu;
                    sizing = tango;
                    mike = new output[report](sizing, kilo, backup);
                    mike = mike instanceof Object ? mike : zulu;
                    throw mike;
 667:
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    zulu = 7;
                    tango = tango[zulu];
                    zulu = undefined;
                    report = report.bind(zulu)(tango);
                    tango = {};
                    mike = _closure1_slot5;
                    mike = mike.INVALID_COMMAND;
                    tango['errorCode'] = mike;
                    mike = report.prototype;
                    zulu = Object.create(mike, {constructor: {value: report}});
                    kilo = 'No application.';
                    output = zulu;
                    sizing = tango;
                    mike = new output[report](sizing, kilo, backup);
                    mike = mike instanceof Object ? mike : zulu;
                    throw mike;
 740:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    tango['handler'] = options;
    mike[golf] = tango;
    tango = 13;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/rpc/native/server/commands/activities.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();