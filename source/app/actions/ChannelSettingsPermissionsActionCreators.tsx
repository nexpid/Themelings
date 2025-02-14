// app/actions/ChannelSettingsPermissionsActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    entity = function() { // Original name: _updatePermission
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar, argBaz, argCorge) {
            entity = function* (argFoo, argBar, argBaz, argCorge) { // Original name: ?anon_0_
                _fun65411: for(var _fun65411_ip = 0; ; ) switch(_fun65411_ip) {
 0:
                    StartGenerator();
                    tango = argFoo;
                    verify = argBar;
                    options = argBaz;
                    golf = argCorge;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun65411_ip = 165; continue _fun65411 }
 22:
                    mike = tango.getGuildId;
                    mike = mike.bind(tango)();
                    zulu = null;
                    if(!(zulu != mike)) { _fun65411_ip = 98; continue _fun65411 }
 38:
                    if(!(verify === mike)) { _fun65411_ip = 98; continue _fun65411 }
 42:
                    report = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 1;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = report.bind(mike)(zulu);
                    mike = zulu.checkDefaultChannelThresholdMetAfterChannelPermissionDeny;
                    mike = mike.bind(zulu)(tango, golf, options);
                    SaveGenerator(address=84);
 82:
                    return mike;
 84:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun65411_ip = 162; continue _fun65411 }
 90:
                    if(mike) { _fun65411_ip = 98; continue _fun65411 }
 93:
                    zulu = false;
                    return zulu;
 98:
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    zulu = 2;
                    tango = tango[zulu];
                    zulu = undefined;
                    oscar = report.bind(zulu)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    offset = 'CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION';
                    tango['type'] = offset;
                    tango['id'] = verify;
                    tango['allow'] = options;
                    tango['deny'] = golf;
                    tango = report.bind(oscar)(tango);
                    return zulu;
 162:
                    return mike;
 165:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot4 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot4 = entity;
    mike = function(argFoo, argBar, argBaz, argCorge) { // Original name: saveAndClearPermissionUpdates
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        mike = argBaz;
        var _closure2_slot2 = mike;
        mike = argCorge;
        var _closure2_slot3 = mike;
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        mike = 2;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.dispatch;
        mike = {};
        report = 'CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        mike = global;
        tango = mike.Promise;
        mike = tango.prototype;
        zulu = Object.create(mike, {constructor: {value: tango}});
        oscar = function(argFoo) {
            mike = argFoo;
            var _closure3_slot0 = mike;
            mike = function() { // Original name: chain
                _fun65414: for(var _fun65414_ip = 0; ; ) switch(_fun65414_ip) {
 0:
                    mike = _closure2_slot1;
                    mike = mike.length;
                    zulu = 0;
                    if(!(zulu === mike)) { _fun65414_ip = 34; continue _fun65414 }
 18:
                    mike = _closure2_slot2;
                    mike = mike.length;
                    if(!(zulu !== mike)) { _fun65414_ip = 241; continue _fun65414 }
 34:
                    mike = _closure2_slot1;
                    mike = mike.length;
                    if(!(!(mike > zulu))) { _fun65414_ip = 143; continue _fun65414 }
 47:
                    zulu = _closure2_slot2;
                    mike = zulu.pop;
                    report = mike.bind(zulu)();
                    mike = null;
                    if(!(mike != report)) { _fun65414_ip = 128; continue _fun65414 }
 67:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 3;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.clearPermissionOverwrite;
                    mike = _closure2_slot0;
                    tango = zulu.bind(tango)(mike, report);
                    zulu = tango.then;
                    mike = _closure3_slot1;
                    mike = zulu.bind(tango)(mike, mike);
                    _fun65414_ip = 222; continue _fun65414;
 128:
                    zulu = _closure3_slot1;
                    mike = undefined;
                    mike = zulu.bind(mike)();
                    return mike;
 143:
                    zulu = _closure2_slot1;
                    mike = zulu.pop;
                    tango = mike.bind(zulu)();
                    mike = null;
                    if(!(mike != tango)) { _fun65414_ip = 226; continue _fun65414 }
 163:
                    report = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 3;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = report.bind(mike)(zulu);
                    mike = zulu.updatePermissionOverwrite;
                    entity = _closure2_slot0;
                    zulu = mike.bind(zulu)(entity, tango);
                    mike = zulu.then;
                    entity = _closure3_slot1;
                    entity = mike.bind(zulu)(entity, entity);
 222:
                    entity = undefined;
                    return entity;
 226:
                    mike = _closure3_slot1;
                    entity = undefined;
                    entity = mike.bind(entity)();
                    return entity;
 241:
                    mike = _closure3_slot0;
                    entity = undefined;
                    entity = mike.bind(entity)();
                    return entity;
                }
            };
            var _closure3_slot1 = mike;
            entity = undefined;
            mike = mike.bind(entity)();
            return entity;
        };
        golf = zulu;
        mike = new golf[tango](oscar, report);
        zulu = mike instanceof Object ? mike : zulu;
        mike = zulu.then;
        entity = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 2;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS';
            mike['type'] = report;
            report = _closure2_slot3;
            mike['silent'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot5 = mike;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 4;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'actions/ChannelSettingsPermissionsActionCreators.tsx';
    report = oscar.bind(golf)(report);
    report = function() { // Original name: updatePermission
        entity = undefined;
        tango = _closure1_slot4;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['updatePermission'] = report;
    report = function(argFoo) { // Original name: selectPermission
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION';
        mike['type'] = report;
        report = argFoo;
        mike['id'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['selectPermission'] = report;
    report = function(argFoo) { // Original name: setAdvancedMode
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE';
        mike['type'] = report;
        report = argFoo;
        mike['advancedMode'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setAdvancedMode'] = report;
    report = function() { // Original name: init
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'CHANNEL_SETTINGS_PERMISSIONS_INIT';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['init'] = report;
    tango = function(argFoo, argBar, argBaz) { // Original name: savePermissionUpdates
        oscar = _closure1_slot5;
        yankee = undefined;
        offset = argFoo;
        verify = argBar;
        options = new Array(0);
        golf = argBaz;
        entity = yankee[oscar](offset, verify, options, golf, oscar);
        return entity;
    };
    zulu['savePermissionUpdates'] = tango;
    zulu['saveAndClearPermissionUpdates'] = mike;
    return entity;
})();