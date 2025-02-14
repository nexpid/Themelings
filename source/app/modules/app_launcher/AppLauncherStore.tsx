// app/modules/app_launcher/AppLauncherStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun70849: for(var _fun70849_ip = 0; ; ) switch(_fun70849_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot10;
            entity = entity.bind(zulu)();
            if(entity) { _fun70849_ip = 51; continue _fun70849 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun70849_ip = 92; continue _fun70849;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun70849_ip = 71; continue _fun70849 }
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
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun70850: for(var _fun70850_ip = 0; ; ) switch(_fun70850_ip) {
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
            _fun70850_ip = 76; continue _fun70850;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot10 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    yankee = function(argFoo) { // Original name: handleDismiss
        _fun70853: for(var _fun70853_ip = 0; ; ) switch(_fun70853_ip) {
 0:
            entity = argFoo;
            tango = entity.closeReason;
            mike = undefined;
            if(!(tango === mike)) { _fun70853_ip = 50; continue _fun70853 }
 15:
            zulu = _closure1_slot0;
            report = _closure1_slot1;
            entity = 5;
            entity = report[entity];
            entity = zulu.bind(mike)(entity);
            entity = entity.AppLauncherCloseReason;
            tango = entity.DISMISSED;
 50:
            report = _closure1_slot7;
            zulu = false;
            report['show'] = zulu;
            report = _closure1_slot7;
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            zulu = 5;
            zulu = golf[zulu];
            zulu = oscar.bind(mike)(zulu);
            zulu = zulu.AppLauncherEntrypoint;
            zulu = zulu.NONE;
            report['entrypoint'] = zulu;
            zulu = _closure1_slot7;
            zulu['closeReason'] = tango;
            entity = _closure1_slot7;
            entity['initialState'] = mike;
            entity = true;
            return entity;
        }
    };
    var _closure1_slot11 = yankee;
    offset = function() { // Original name: handleDismissWithDismissed
        zulu = _closure1_slot11;
        mike = {};
        report = _closure1_slot0;
        tango = _closure1_slot1;
        entity = 5;
        tango = tango[entity];
        entity = undefined;
        tango = report.bind(entity)(tango);
        tango = tango.AppLauncherCloseReason;
        tango = tango.DISMISSED;
        mike['closeReason'] = tango;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    verify = function() { // Original name: handleSetActiveCommand
        zulu = _closure1_slot11;
        mike = {};
        report = _closure1_slot0;
        tango = _closure1_slot1;
        entity = 5;
        tango = tango[entity];
        entity = undefined;
        tango = report.bind(entity)(tango);
        tango = tango.AppLauncherCloseReason;
        tango = tango.COMMAND;
        mike['closeReason'] = tango;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    mike = global;
    foxtrot = mike.Object;
    romeo = foxtrot.defineProperty;
    options = {};
    entity = true;
    options['value'] = entity;
    entity = '__esModule';
    entity = romeo.bind(foxtrot)(zulu, entity, options);
    entity = 0;
    options = oscar[entity];
    entity = undefined;
    options = golf.bind(entity)(options);
    var _closure1_slot2 = options;
    options = 1;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot3 = options;
    options = 2;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot4 = options;
    options = 3;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot5 = options;
    options = 4;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot6 = options;
    options = {};
    romeo = false;
    options['show'] = romeo;
    romeo = 5;
    foxtrot = oscar[romeo];
    foxtrot = report.bind(entity)(foxtrot);
    foxtrot = foxtrot.AppLauncherEntrypoint;
    foxtrot = foxtrot.NONE;
    options['entrypoint'] = foxtrot;
    foxtrot = oscar[romeo];
    foxtrot = report.bind(entity)(foxtrot);
    foxtrot = foxtrot.AppLauncherEntrypoint;
    foxtrot = foxtrot.NONE;
    options['lastShownEntrypoint'] = foxtrot;
    foxtrot = null;
    options['activeViewType'] = foxtrot;
    romeo = oscar[romeo];
    romeo = report.bind(entity)(romeo);
    romeo = romeo.AppLauncherCloseReason;
    romeo = romeo.DISMISSED;
    options['closeReason'] = romeo;
    options['initialState'] = entity;
    var _closure1_slot7 = options;
    mike = mike.Set;
    options = mike.prototype;
    options = Object.create(options, {constructor: {value: mike}});
    output = options;
    mike = new output[mike](sizing);
    mike = mike instanceof Object ? mike : options;
    var _closure1_slot8 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: AppLauncherStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot2;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot9;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot6;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot3;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(9);
        entity[0] = report;
        report = {};
        golf = 'shouldShowPopup';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun70859: for(var _fun70859_ip = 0; ; ) switch(_fun70859_ip) {
 0:
                entity = _closure1_slot7;
                entity = entity.show;
                if(!entity) { _fun70859_ip = 64; continue _fun70859 }
 16:
                zulu = _closure1_slot7;
                zulu = zulu.entrypoint;
                report = _closure1_slot0;
                tango = _closure1_slot1;
                mike = 5;
                tango = tango[mike];
                mike = undefined;
                mike = report.bind(mike)(tango);
                mike = mike.AppLauncherEntrypoint;
                mike = mike.TEXT;
                entity = zulu === mike;
 64:
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'shouldShowModal';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun70860: for(var _fun70860_ip = 0; ; ) switch(_fun70860_ip) {
 0:
                entity = _closure1_slot7;
                entity = entity.show;
                if(!entity) { _fun70860_ip = 64; continue _fun70860 }
 16:
                zulu = _closure1_slot7;
                zulu = zulu.entrypoint;
                report = _closure1_slot0;
                tango = _closure1_slot1;
                mike = 5;
                tango = tango[mike];
                mike = undefined;
                mike = report.bind(mike)(tango);
                mike = mike.AppLauncherEntrypoint;
                mike = mike.VOICE;
                entity = zulu === mike;
 64:
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'entrypoint';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot7;
            entity = entity.entrypoint;
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'lastShownEntrypoint';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot7;
            entity = entity.lastShownEntrypoint;
            return entity;
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'activeViewType';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot7;
            entity = entity.activeViewType;
            return entity;
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'closeReason';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot7;
            entity = entity.closeReason;
            return entity;
        };
        report['value'] = golf;
        entity[6] = report;
        report = {};
        golf = 'initialState';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot7;
            entity = entity.initialState;
            return entity;
        };
        report['value'] = golf;
        entity[7] = report;
        report = {};
        golf = 'appDMChannelsWithFailedLoads';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = _closure1_slot8;
            return entity;
        };
        report['value'] = oscar;
        entity[8] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'AppLauncherStore';
    options['displayName'] = mike;
    mike = 7;
    mike = oscar[mike];
    sizing = golf.bind(entity)(mike);
    mike = {};
    romeo = function(argFoo) { // Original name: handleShow
        entity = argFoo;
        oscar = entity.entrypoint;
        report = entity.activeViewType;
        zulu = entity.initialState;
        tango = _closure1_slot7;
        entity = true;
        tango['show'] = entity;
        tango = _closure1_slot7;
        tango['entrypoint'] = oscar;
        tango = _closure1_slot7;
        tango['lastShownEntrypoint'] = oscar;
        oscar = _closure1_slot7;
        options = _closure1_slot0;
        golf = _closure1_slot1;
        tango = 5;
        golf = golf[tango];
        tango = undefined;
        tango = options.bind(tango)(golf);
        tango = tango.AppLauncherCloseReason;
        tango = tango.DISMISSED;
        oscar['closeReason'] = tango;
        tango = _closure1_slot7;
        tango['activeViewType'] = report;
        mike = _closure1_slot7;
        mike['initialState'] = zulu;
        return entity;
    };
    mike['APP_LAUNCHER_SHOW'] = romeo;
    mike['APP_LAUNCHER_DISMISS'] = yankee;
    mike['CONNECTION_OPEN'] = offset;
    mike['LOGOUT'] = offset;
    mike['CHANNEL_SELECT'] = offset;
    mike['APPLICATION_COMMAND_SET_ACTIVE_COMMAND'] = verify;
    mike['APP_LAUNCHER_SET_ACTIVE_COMMAND'] = verify;
    verify = function(argFoo) { // Original name: handleAddFailedAppDMLoad
        entity = argFoo;
        zulu = entity.channelId;
        mike = _closure1_slot8;
        entity = mike.add;
        entity = entity.bind(mike)(zulu);
        entity = undefined;
        return entity;
    };
    mike['APP_LAUNCHER_ADD_FAILED_APP_DM_LOAD'] = verify;
    tango = function(argFoo) { // Original name: handleRemoveFailedAppDMLoad
        entity = argFoo;
        zulu = entity.channelId;
        mike = _closure1_slot8;
        entity = mike.delete;
        entity = entity.bind(mike)(zulu);
        entity = undefined;
        return entity;
    };
    mike['APP_LAUNCHER_REMOVE_FAILED_APP_DM_LOAD'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    output = tango;
    kilo = mike;
    mike = new output[options](sizing, kilo, backup);
    mike = mike instanceof Object ? mike : tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_launcher/AppLauncherStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();