// app/modules/game_console/native/GameConsoleAlertUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
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
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    options = oscar[entity];
    mike = argCorge;
    entity = undefined;
    mike = mike.bind(entity)(options);
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.GAME_CONSOLE_ALERT_MODAL_LOCATION;
    var _closure1_slot4 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    golf = mike.InputModes;
    var _closure1_slot5 = golf;
    mike = mike.PlatformTypes;
    var _closure1_slot6 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.jsx;
    var _closure1_slot7 = mike;
    mike = {};
    golf = function(argFoo) { // Original name: maybeShowPTTAlert
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = _closure1_slot3;
            zulu = tango.getMode;
            tango = zulu.bind(tango)();
            zulu = _closure1_slot5;
            zulu = zulu.PUSH_TO_TALK;
            if(!(tango === zulu)) { _fun00002_ip = 355; continue _fun00001 }
 36:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            zulu = 5;
            zulu = golf[zulu];
            options = undefined;
            report = oscar.bind(options)(zulu);
            tango = report.isDismissibleContentDismissed;
            zulu = 6;
            zulu = golf[zulu];
            zulu = oscar.bind(options)(zulu);
            zulu = zulu.DismissibleContent;
            zulu = zulu.CONSOLE_PTT_DISABLE_ALERT;
            zulu = tango.bind(report)(zulu);
            if(zulu) { _fun00002_ip = 355; continue _fun00001 }
 99:
            zulu = {};
            tango = _closure1_slot6;
            oscar = tango.XBOX;
            golf = _closure1_slot0;
            verify = _closure1_slot2;
            mike = 7;
            report = verify[mike];
            report = golf.bind(options)(report);
            yankee = report.intl;
            offset = yankee.string;
            report = verify[mike];
            report = golf.bind(options)(report);
            report = report.t;
            report = report.bVZ7v7;
            report = offset.bind(yankee)(report);
            zulu[oscar] = report;
            oscar = tango.PLAYSTATION;
            report = verify[mike];
            report = golf.bind(options)(report);
            yankee = report.intl;
            offset = yankee.string;
            report = verify[mike];
            report = golf.bind(options)(report);
            report = report.t;
            report = report.6iqUsb;
            report = offset.bind(yankee)(report);
            zulu[oscar] = report;
            tango = tango.PLAYSTATION_STAGING;
            report = verify[mike];
            report = golf.bind(options)(report);
            oscar = report.intl;
            report = oscar.string;
            mike = verify[mike];
            mike = golf.bind(options)(mike);
            mike = mike.t;
            mike = mike.6iqUsb;
            mike = report.bind(oscar)(mike);
            zulu[tango] = mike;
            mike = argFoo;
            zulu = zulu[mike];
            var _closure2_slot0 = zulu;
            mike = null;
            if(!(mike != zulu)) { _fun00002_ip = 335; continue _fun00001 }
 298:
            mike = global;
            zulu = mike.Promise;
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            romeo = function(argFoo) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                zulu = _closure1_slot1;
                offset = _closure1_slot2;
                entity = 8;
                mike = offset[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.show;
                mike = {};
                golf = _closure2_slot0;
                mike['title'] = golf;
                verify = _closure1_slot0;
                oscar = 7;
                golf = offset[oscar];
                golf = verify.bind(entity)(golf);
                options = golf.intl;
                golf = options.string;
                oscar = offset[oscar];
                oscar = verify.bind(entity)(oscar);
                oscar = oscar.t;
                oscar = oscar.bL21zs;
                oscar = golf.bind(options)(oscar);
                mike['body'] = oscar;
                report = function() { // Original name: onConfirm
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    entity = 5;
                    mike = oscar[entity];
                    entity = undefined;
                    tango = report.bind(entity)(mike);
                    zulu = tango.markDismissibleContentAsDismissed;
                    mike = 6;
                    mike = oscar[mike];
                    mike = report.bind(entity)(mike);
                    mike = mike.DismissibleContent;
                    mike = mike.CONSOLE_PTT_DISABLE_ALERT;
                    mike = zulu.bind(tango)(mike);
                    mike = _closure3_slot0;
                    mike = mike.bind(entity)();
                    return entity;
                };
                mike['onConfirm'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            foxtrot = mike;
            entity = new foxtrot[zulu](romeo, yankee);
            entity = entity instanceof Object ? entity : mike;
            _fun00002_ip = 353; continue _fun00001;
 335:
            mike = global;
            zulu = mike.Promise;
            mike = zulu.resolve;
            entity = mike.bind(zulu)();
 353:
            return entity;
 355:
            entity = global;
            mike = entity.Promise;
            entity = mike.resolve;
            entity = entity.bind(mike)();
            return entity;
        }
    };
    mike['maybeShowPTTAlert'] = golf;
    tango = function(argFoo) { // Original name: showSelfDismissableAlert
        entity = argFoo;
        golf = entity.title;
        foxtrot = entity.body;
        romeo = entity.errorCodeMessage;
        entity = entity.reconnectPlatformType;
        var _closure2_slot0 = entity;
        offset = _closure1_slot1;
        yankee = _closure1_slot2;
        verify = 8;
        mike = yankee[verify];
        entity = undefined;
        tango = offset.bind(entity)(mike);
        zulu = tango.show;
        mike = {};
        mike['title'] = golf;
        options = _closure1_slot7;
        golf = _closure1_slot0;
        oscar = 9;
        oscar = yankee[oscar];
        oscar = golf.bind(entity)(oscar);
        golf = oscar.SelfDismissibleAlertBody;
        oscar = {};
        oscar['body'] = foxtrot;
        oscar['errorCodeMessage'] = romeo;
        verify = yankee[verify];
        verify = offset.bind(entity)(verify);
        verify = verify.close;
        oscar['dismissCallback'] = verify;
        oscar = options.bind(entity)(golf, oscar);
        mike['body'] = oscar;
        report = function() { // Original name: onConfirm
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                mike = _closure2_slot0;
                entity = null;
                if(!(entity != mike)) { _fun00004_ip = 62; continue _fun00003 }
 13:
                mike = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 10;
                entity = zulu[entity];
                zulu = undefined;
                mike = mike.bind(zulu)(entity);
                entity = {};
                report = _closure2_slot0;
                entity['platformType'] = report;
                tango = _closure1_slot4;
                entity['location'] = tango;
                entity = mike.bind(zulu)(entity);
 62:
                entity = undefined;
                return entity;
            }
        };
        mike['onConfirm'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['showSelfDismissableAlert'] = tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/game_console/native/GameConsoleAlertUtils.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();