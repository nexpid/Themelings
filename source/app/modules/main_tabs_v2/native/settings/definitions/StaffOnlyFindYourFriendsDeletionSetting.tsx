// app/modules/main_tabs_v2/native/settings/definitions/StaffOnlyFindYourFriendsDeletionSetting.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: setFindYourFriendsDeletionIsLoading
        entity = argFoo;
        var _closure2_slot0 = entity;
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 6;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.batchUpdates;
        mike = function() {
            zulu = _closure1_slot6;
            mike = zulu.setState;
            entity = {};
            tango = _closure2_slot0;
            entity['isLoading'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = function() { // Original name: useFindYourFriendsDeletionIsLoading
        tango = _closure1_slot6;
        mike = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 7;
        entity = zulu[entity];
        zulu = undefined;
        entity = mike.bind(zulu)(entity);
        mike = entity.shallow;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.isLoading;
            return entity;
        };
        entity = tango.bind(zulu)(entity, mike);
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = function() { // Original name: _onFindYourFriendsDeletionPress
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun94755: for(var _fun94755_ip = 0; ; ) switch(_fun94755_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun94755_ip = 261; continue _fun94755 }
 10:
                    mike = undefined;
                    golf = undefined;
                    report = _closure1_slot6;
                    zulu = report.getState;
                    zulu = zulu.bind(report)();
                    zulu = zulu.isLoading;
                    if(zulu) { _fun94755_ip = 258; continue _fun94755 }
 43:
                    report = _closure1_slot7;
                    zulu = true;
                    zulu = report.bind(mike)(zulu);
 54: // try_start_0 // try_start_1
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    zulu = 8;
                    zulu = oscar[zulu];
                    report = report.bind(mike)(zulu);
                    zulu = report.adminDeleteContactSync;
                    zulu = zulu.bind(report)();
                    SaveGenerator(address=88);
 86:
                    return zulu;
 88:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun94755_ip = 99; continue _fun94755 }
 94: // try_end0
                    _fun94755_ip = 230; continue _fun94755;
 99: // try_end1
                    oscar = _closure1_slot7;
                    report = false;
                    report = oscar.bind(mike)(report);
                    return zulu;
 113: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=5);
                    report = _closure1_slot0;
                    options = _closure1_slot2;
                    zulu = 9;
                    zulu = options[zulu];
                    zulu = report.bind(mike)(zulu);
                    zulu = zulu.APIError;
                    report = zulu.prototype;
                    report = Object.create(report, {constructor: {value: zulu}});
                    offset = report;
                    verify = oscar;
                    zulu = new offset[zulu](verify, options);
                    report = zulu instanceof Object ? zulu : report;
                    zulu = report.getAnyErrorMessage;
                    report = zulu.bind(report)();
                    golf = report;
                    zulu = null;
                    if(!(zulu != report)) { _fun94755_ip = 230; continue _fun94755 }
 183:
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    zulu = 10;
                    zulu = oscar[zulu];
                    oscar = report.bind(mike)(zulu);
                    report = oscar.open;
                    zulu = {};
                    options = 'FIND_YOUR_FRIENDS_DELETION';
                    zulu['key'] = options;
                    zulu['content'] = golf;
                    zulu = report.bind(oscar)(zulu);
 230: // try_end2
                    report = _closure1_slot7;
                    zulu = false;
                    zulu = report.bind(mike)(zulu);
                    _fun94755_ip = 258; continue _fun94755;
 243: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=2);
                    report = _closure1_slot7;
                    tango = false;
                    tango = report.bind(mike)(tango);
                    throw zulu;
 258:
                    return mike;
 261:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot9 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.ActivityIndicator;
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    golf = mike.MobileSetting;
    mike = 3;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    options = mike.RendererType;
    mike = 4;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.jsx;
    var _closure1_slot5 = mike;
    mike = 5;
    mike = oscar[mike];
    offset = report.bind(entity)(mike);
    verify = offset.createWithEqualityFn;
    mike = function() {
        entity = {};
        mike = false;
        entity['isLoading'] = mike;
        return entity;
    };
    mike = verify.bind(offset)(mike);
    var _closure1_slot6 = mike;
    mike = {};
    options = options.PRESSABLE;
    mike['type'] = options;
    options = 'STAFF ONLY - Find your friends deletion';
    mike['title'] = options;
    golf = golf.CONTENT_AND_SOCIAL;
    mike['parent'] = golf;
    golf = function() { // Original name: useIsFindYourFriendsDeletionDisabled
        mike = _closure1_slot8;
        entity = undefined;
        entity = mike.bind(entity)();
        return entity;
    };
    mike['useIsDisabled'] = golf;
    golf = function() { // Original name: onFindYourFriendsDeletionPress
        entity = undefined;
        tango = _closure1_slot9;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    mike['onPress'] = golf;
    golf = 11;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.useStaffOrDevEnvSettingPredicate;
    mike['usePredicate'] = golf;
    tango = function() { // Original name: useIsFindYourFriendsDeletionTrailing
        _fun94759: for(var _fun94759_ip = 0; ; ) switch(_fun94759_ip) {
 0:
            entity = _closure1_slot8;
            report = undefined;
            zulu = entity.bind(report)();
            entity = null;
            if(!zulu) { _fun94759_ip = 34; continue _fun94759 }
 18:
            tango = _closure1_slot5;
            zulu = _closure1_slot4;
            mike = {};
            entity = tango.bind(report)(zulu, mike);
 34:
            return entity;
        }
    };
    mike['useTrailing'] = tango;
    tango = 12;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/definitions/StaffOnlyFindYourFriendsDeletionSetting.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();