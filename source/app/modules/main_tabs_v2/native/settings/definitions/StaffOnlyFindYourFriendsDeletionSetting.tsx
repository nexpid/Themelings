// app/modules/main_tabs_v2/native/settings/definitions/StaffOnlyFindYourFriendsDeletionSetting.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: setFindYourFriendsDeletionIsLoading
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 6;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot6;
            michal = zuuluu.setState;
            entity = {};
            tangon = _closure2_slot0;
            entity['isLoading'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = function() { // Original name: useFindYourFriendsDeletionIsLoading
        tangon = _closure1_slot6;
        michal = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 7;
        entity = zuuluu[entity];
        zuuluu = undefined;
        entity = michal.bind(zuuluu)(entity);
        michal = entity.shallow;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.isLoading;
            return entity;
        };
        entity = tangon.bind(zuuluu)(entity, michal);
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = function() { // Original name: _onFindYourFriendsDeletionPress
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 261; continue _fun00001 }
 10:
                    michal = undefined;
                    golfie = undefined;
                    report = _closure1_slot6;
                    zuuluu = report.getState;
                    zuuluu = zuuluu.bind(report)();
                    zuuluu = zuuluu.isLoading;
                    if(zuuluu) { _fun00002_ip = 258; continue _fun00001 }
 43:
                    report = _closure1_slot7;
                    zuuluu = true;
                    zuuluu = report.bind(michal)(zuuluu);
 54: // try_start_0 // try_start_1
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    zuuluu = 8;
                    zuuluu = oscard[zuuluu];
                    report = report.bind(michal)(zuuluu);
                    zuuluu = report.adminDeleteContactSync;
                    zuuluu = zuuluu.bind(report)();
                    SaveGenerator(address=88);
 86:
                    return zuuluu;
 88:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 99; continue _fun00001 }
 94: // try_end0
                    _fun00002_ip = 230; continue _fun00001;
 99: // try_end1
                    oscard = _closure1_slot7;
                    report = false;
                    report = oscard.bind(michal)(report);
                    return zuuluu;
 113: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=5);
                    report = _closure1_slot0;
                    option = _closure1_slot2;
                    zuuluu = 9;
                    zuuluu = option[zuuluu];
                    zuuluu = report.bind(michal)(zuuluu);
                    zuuluu = zuuluu.APIError;
                    report = zuuluu.prototype;
                    report = Object.create(report, {constructor: {value: zuuluu}});
                    offset = report;
                    verify = oscard;
                    zuuluu = new offset[zuuluu](verify, option);
                    report = zuuluu instanceof Object ? zuuluu : report;
                    zuuluu = report.getAnyErrorMessage;
                    report = zuuluu.bind(report)();
                    golfie = report;
                    zuuluu = null;
                    if(!(zuuluu != report)) { _fun00002_ip = 230; continue _fun00001 }
 183:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    zuuluu = 10;
                    zuuluu = oscard[zuuluu];
                    oscard = report.bind(michal)(zuuluu);
                    report = oscard.open;
                    zuuluu = {};
                    option = 'FIND_YOUR_FRIENDS_DELETION';
                    zuuluu['key'] = option;
                    zuuluu['content'] = golfie;
                    zuuluu = report.bind(oscard)(zuuluu);
 230: // try_end2
                    report = _closure1_slot7;
                    zuuluu = false;
                    zuuluu = report.bind(michal)(zuuluu);
                    _fun00002_ip = 258; continue _fun00001;
 243: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=2);
                    report = _closure1_slot7;
                    tangon = false;
                    tangon = report.bind(michal)(tangon);
                    throw zuuluu;
 258:
                    return michal;
 261:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot9 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.ActivityIndicator;
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    golfie = michal.MobileSetting;
    michal = 3;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    option = michal.RendererType;
    michal = 4;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.jsx;
    var _closure1_slot5 = michal;
    michal = 5;
    michal = oscard[michal];
    offset = report.bind(entity)(michal);
    verify = offset.createWithEqualityFn;
    michal = function() {
        entity = {};
        michal = false;
        entity['isLoading'] = michal;
        return entity;
    };
    michal = verify.bind(offset)(michal);
    var _closure1_slot6 = michal;
    michal = {};
    option = option.PRESSABLE;
    michal['type'] = option;
    option = 'STAFF ONLY - Find your friends deletion';
    michal['title'] = option;
    golfie = golfie.CONTENT_AND_SOCIAL_DISCORD;
    michal['parent'] = golfie;
    golfie = function() { // Original name: useIsFindYourFriendsDeletionDisabled
        michal = _closure1_slot8;
        entity = undefined;
        entity = michal.bind(entity)();
        return entity;
    };
    michal['useIsDisabled'] = golfie;
    golfie = function() { // Original name: onFindYourFriendsDeletionPress
        entity = undefined;
        tangon = _closure1_slot9;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    michal['onPress'] = golfie;
    golfie = 11;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.useStaffOrDevEnvSettingPredicate;
    michal['usePredicate'] = golfie;
    tangon = function() { // Original name: useIsFindYourFriendsDeletionTrailing
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = _closure1_slot8;
            report = undefined;
            zuuluu = entity.bind(report)();
            entity = null;
            if(!zuuluu) { _fun00004_ip = 34; continue _fun00003 }
 18:
            tangon = _closure1_slot5;
            zuuluu = _closure1_slot4;
            michal = {};
            entity = tangon.bind(report)(zuuluu, michal);
 34:
            return entity;
        }
    };
    michal['useTrailing'] = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/definitions/StaffOnlyFindYourFriendsDeletionSetting.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();