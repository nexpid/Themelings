// app/actions/ChannelSettingsPermissionsActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    entity = function() { // Original name: _updatePermission
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar, argBaz, argCor) {
            entity = function* (argFoo, argBar, argBaz, argCor) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    tangon = argFoo;
                    verify = argBar;
                    option = argBaz;
                    golfie = argCor;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 165; continue _fun00001 }
 22:
                    michal = tangon.getGuildId;
                    michal = michal.bind(tangon)();
                    zuuluu = null;
                    if(!(zuuluu != michal)) { _fun00002_ip = 98; continue _fun00001 }
 38:
                    if(!(verify === michal)) { _fun00002_ip = 98; continue _fun00001 }
 42:
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 1;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = report.bind(michal)(zuuluu);
                    michal = zuuluu.checkDefaultChannelThresholdMetAfterChannelPermissionDeny;
                    michal = michal.bind(zuuluu)(tangon, golfie, option);
                    SaveGenerator(address=84);
 82:
                    return michal;
 84:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 162; continue _fun00001 }
 90:
                    if(michal) { _fun00002_ip = 98; continue _fun00001 }
 93:
                    zuuluu = false;
                    return zuuluu;
 98:
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    zuuluu = 2;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    oscard = report.bind(zuuluu)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    offset = 'CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION';
                    tangon['type'] = offset;
                    tangon['id'] = verify;
                    tangon['allow'] = option;
                    tangon['deny'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    return zuuluu;
 162:
                    return michal;
 165:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot4 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot4 = entity;
    michal = function(argFoo, argBar, argBaz, argCor) { // Original name: saveAndClearPermissionUpdates
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        michal = argBaz;
        var _closure2_slot2 = michal;
        michal = argCor;
        var _closure2_slot3 = michal;
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        michal = 2;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        michal = global;
        tangon = michal.Promise;
        michal = tangon.prototype;
        zuuluu = Object.create(michal, {constructor: {value: tangon}});
        oscard = function(argFoo) {
            michal = argFoo;
            var _closure3_slot0 = michal;
            michal = function() { // Original name: chain
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    michal = michal.length;
                    zuuluu = 0;
                    if(!(zuuluu === michal)) { _fun00004_ip = 34; continue _fun00003 }
 18:
                    michal = _closure2_slot2;
                    michal = michal.length;
                    if(!(zuuluu !== michal)) { _fun00004_ip = 241; continue _fun00003 }
 34:
                    michal = _closure2_slot1;
                    michal = michal.length;
                    if(!(!(michal > zuuluu))) { _fun00004_ip = 143; continue _fun00003 }
 47:
                    zuuluu = _closure2_slot2;
                    michal = zuuluu.pop;
                    report = michal.bind(zuuluu)();
                    michal = null;
                    if(!(michal != report)) { _fun00004_ip = 128; continue _fun00003 }
 67:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 3;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.clearPermissionOverwrite;
                    michal = _closure2_slot0;
                    tangon = zuuluu.bind(tangon)(michal, report);
                    zuuluu = tangon.then;
                    michal = _closure3_slot1;
                    michal = zuuluu.bind(tangon)(michal, michal);
                    _fun00004_ip = 222; continue _fun00003;
 128:
                    zuuluu = _closure3_slot1;
                    michal = undefined;
                    michal = zuuluu.bind(michal)();
                    return michal;
 143:
                    zuuluu = _closure2_slot1;
                    michal = zuuluu.pop;
                    tangon = michal.bind(zuuluu)();
                    michal = null;
                    if(!(michal != tangon)) { _fun00004_ip = 226; continue _fun00003 }
 163:
                    report = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 3;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = report.bind(michal)(zuuluu);
                    michal = zuuluu.updatePermissionOverwrite;
                    entity = _closure2_slot0;
                    zuuluu = michal.bind(zuuluu)(entity, tangon);
                    michal = zuuluu.then;
                    entity = _closure3_slot1;
                    entity = michal.bind(zuuluu)(entity, entity);
 222:
                    entity = undefined;
                    return entity;
 226:
                    michal = _closure3_slot1;
                    entity = undefined;
                    entity = michal.bind(entity)();
                    return entity;
 241:
                    michal = _closure3_slot0;
                    entity = undefined;
                    entity = michal.bind(entity)();
                    return entity;
                }
            };
            var _closure3_slot1 = michal;
            entity = undefined;
            michal = michal.bind(entity)();
            return entity;
        };
        golfie = zuuluu;
        michal = new golfie[tangon](oscard, report);
        zuuluu = michal instanceof Object ? michal : zuuluu;
        michal = zuuluu.then;
        entity = function() {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 2;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            report = 'CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS';
            michal['type'] = report;
            report = _closure2_slot3;
            michal['silent'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot5 = michal;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'actions/ChannelSettingsPermissionsActionCreators.tsx';
    report = oscard.bind(golfie)(report);
    report = function() { // Original name: updatePermission
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['updatePermission'] = report;
    report = function(argFoo) { // Original name: selectPermission
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION';
        michal['type'] = report;
        report = argFoo;
        michal['id'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['selectPermission'] = report;
    report = function(argFoo) { // Original name: setAdvancedMode
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE';
        michal['type'] = report;
        report = argFoo;
        michal['advancedMode'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setAdvancedMode'] = report;
    report = function() { // Original name: init
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'CHANNEL_SETTINGS_PERMISSIONS_INIT';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['init'] = report;
    tangon = function(argFoo, argBar, argBaz) { // Original name: savePermissionUpdates
        oscard = _closure1_slot5;
        yankee = undefined;
        offset = argFoo;
        verify = argBar;
        option = new Array(0);
        golfie = argBaz;
        entity = yankee[oscard](offset, verify, option, golfie, oscard);
        return entity;
    };
    zuuluu['savePermissionUpdates'] = tangon;
    zuuluu['saveAndClearPermissionUpdates'] = michal;
    return entity;
})();