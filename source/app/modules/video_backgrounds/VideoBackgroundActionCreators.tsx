// app/modules/video_backgrounds/VideoBackgroundActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    entity = function() { // Original name: _fetchVideoFilterAssets
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 140; continue _fun00001 }
 10:
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 4;
                    michal = report[michal];
                    report = undefined;
                    michal = tangon.bind(report)(michal);
                    oscard = michal.HTTP;
                    tangon = oscard.get;
                    michal = {};
                    golfie = _closure1_slot6;
                    golfie = golfie.VIDEO_FILTER_ASSETS;
                    michal['url'] = golfie;
                    golfie = false;
                    michal['rejectWithError'] = golfie;
                    michal = tangon.bind(oscard)(michal);
                    SaveGenerator(address=76);
 74:
                    return michal;
 76:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 137; continue _fun00001 }
 82:
                    tangon = _closure1_slot1;
                    oscard = _closure1_slot2;
                    zuuluu = 5;
                    zuuluu = oscard[zuuluu];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    oscard = 'VIDEO_FILTER_ASSETS_FETCH_SUCCESS';
                    zuuluu['type'] = oscard;
                    oscard = michal.body;
                    zuuluu['assets'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    return michal;
 137:
                    return michal;
 140:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot7 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = function() { // Original name: _uploadVideoFilterAsset
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 256; continue _fun00003 }
 10:
                    option = argFoo;
                    offset = argBar;
                    verify = argBaz;
 19: // try_start_0
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 4;
                    michal = report[michal];
                    report = undefined;
                    michal = tangon.bind(report)(michal);
                    oscard = michal.HTTP;
                    tangon = oscard.post;
                    michal = {};
                    golfie = _closure1_slot6;
                    golfie = golfie.VIDEO_FILTER_ASSETS;
                    michal['url'] = golfie;
                    golfie = {};
                    golfie['type'] = offset;
                    golfie['asset'] = option;
                    offset = verify;
                    option = null;
                    offset = option == offset;
                    option = undefined;
                    if(offset) { _fun00004_ip = 109; continue _fun00003 }
 96:
                    offset = verify;
                    verify = offset.toISOString;
                    option = verify.bind(offset)();
 109:
                    golfie['last_used'] = option;
                    michal['body'] = golfie;
                    golfie = false;
                    michal['rejectWithError'] = golfie;
                    michal = tangon.bind(oscard)(michal);
                    SaveGenerator(address=135);
 133:
                    return michal;
 135:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00004_ip = 201; continue _fun00003 }
 141:
                    tangon = _closure1_slot1;
                    oscard = _closure1_slot2;
                    zuuluu = 5;
                    zuuluu = oscard[zuuluu];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    oscard = 'VIDEO_FILTER_ASSET_UPLOAD_SUCCESS';
                    zuuluu['type'] = oscard;
                    oscard = michal.body;
                    zuuluu['videoFilterAsset'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    zuuluu = michal.body;
 198: // try_end0
                    return zuuluu;
 201:
                    return michal;
 204: // catch_target0
                    CatchBlockStart(arg_register=3);
                    report = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 6;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    michal = report.bind(michal)(zuuluu);
                    zuuluu = michal.prototype;
                    zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
                    romeon = zuuluu;
                    yankee = tangon;
                    michal = new romeon[michal](yankee, offset);
                    michal = michal instanceof Object ? michal : zuuluu;
                    throw michal;
 256:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot8 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = function() { // Original name: _deleteVideoFilterAsset
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    golfie = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 250; continue _fun00005 }
 13:
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 4;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    michal = report.bind(zuuluu)(michal);
                    oscard = michal.HTTP;
                    report = oscard.del;
                    michal = {};
                    offset = _closure1_slot6;
                    verify = offset.VIDEO_FILTER_ASSET;
                    option = golfie.id;
                    option = verify.bind(offset)(option);
                    michal['url'] = option;
                    option = false;
                    michal['rejectWithError'] = option;
                    michal = report.bind(oscard)(michal);
                    SaveGenerator(address=90);
 88:
                    return michal;
 90:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00006_ip = 247; continue _fun00005 }
 99:
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 7;
                    report = verify[report];
                    offset = option.bind(zuuluu)(report);
                    oscard = offset.getLastUsedVideoBackgroundOption;
                    yankee = _closure1_slot5;
                    report = yankee.getCurrentUser;
                    report = report.bind(yankee)();
                    oscard = oscard.bind(offset)(report);
                    report = 8;
                    report = verify[report];
                    option = option.bind(zuuluu)(report);
                    report = option.isCustomBackgroundOption;
                    report = report.bind(option)(oscard);
                    if(!report) { _fun00006_ip = 183; continue _fun00005 }
 169:
                    option = oscard.id;
                    oscard = golfie.id;
                    report = option === oscard;
 183:
                    if(!report) { _fun00006_ip = 197; continue _fun00005 }
 186:
                    oscard = _closure1_slot10;
                    report = null;
                    report = oscard.bind(zuuluu)(report);
 197:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    tangon = 5;
                    tangon = oscard[tangon];
                    oscard = report.bind(zuuluu)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    option = 'VIDEO_FILTER_ASSET_DELETE_SUCCESS';
                    tangon['type'] = option;
                    tangon['videoFilterAsset'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    return zuuluu;
 247:
                    return michal;
 250:
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
    tangon = function() { // Original name: saveLastUsedBackgroundOption
        entity = undefined;
        tangon = _closure1_slot11;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot10 = tangon;
    entity = function() { // Original name: _saveLastUsedBackgroundOption
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    option = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00008_ip = 331; continue _fun00007 }
 15:
                    var _closure4_slot0 = option;
                    oscard = _closure1_slot0;
                    offset = _closure1_slot2;
                    zuuluu = 9;
                    golfie = offset[zuuluu];
                    tangon = undefined;
                    golfie = oscard.bind(tangon)(golfie);
                    verify = golfie.PreloadedUserSettingsActionCreators;
                    golfie = verify.updateAsync;
                    zuuluu = offset[zuuluu];
                    zuuluu = oscard.bind(tangon)(zuuluu);
                    zuuluu = zuuluu.UserSettingsDelay;
                    oscard = zuuluu.FREQUENT_USER_ACTION;
                    zuuluu = 'voiceAndVideo';
                    michal = function(argFoo) {
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 8;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.getVideoBackgroundProtoFromOption;
                        michal = _closure4_slot0;
                        zuuluu = zuuluu.bind(tangon)(michal);
                        michal = argFoo;
                        michal['videoBackgroundFilterDesktop'] = zuuluu;
                        return entity;
                    };
                    michal = golfie.bind(verify)(zuuluu, michal, oscard);
                    SaveGenerator(address=97);
 95:
                    return michal;
 97:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00008_ip = 328; continue _fun00007 }
 106:
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    zuuluu = 8;
                    zuuluu = golfie[zuuluu];
                    oscard = oscard.bind(tangon)(zuuluu);
                    zuuluu = oscard.isCustomBackgroundOption;
                    zuuluu = zuuluu.bind(oscard)(option);
                    if(zuuluu) { _fun00008_ip = 192; continue _fun00007 }
 140:
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    zuuluu = 5;
                    zuuluu = golfie[zuuluu];
                    golfie = oscard.bind(tangon)(zuuluu);
                    oscard = golfie.dispatch;
                    zuuluu = {};
                    verify = 'VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION';
                    zuuluu['type'] = verify;
                    zuuluu['backgroundOption'] = option;
                    zuuluu = oscard.bind(golfie)(zuuluu);
                    _fun00008_ip = 322; continue _fun00007;
 192:
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    zuuluu = 4;
                    zuuluu = golfie[zuuluu];
                    zuuluu = oscard.bind(tangon)(zuuluu);
                    golfie = zuuluu.HTTP;
                    oscard = golfie.post;
                    zuuluu = {};
                    offset = _closure1_slot6;
                    verify = offset.VIDEO_FILTER_ASSET_LAST_USED;
                    option = option.id;
                    option = verify.bind(offset)(option);
                    zuuluu['url'] = option;
                    option = false;
                    zuuluu['rejectWithError'] = option;
                    zuuluu = oscard.bind(golfie)(zuuluu);
                    SaveGenerator(address=264);
 262:
                    return zuuluu;
 264:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(oscard) { _fun00008_ip = 325; continue _fun00007 }
 270:
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    report = 5;
                    report = golfie[report];
                    golfie = oscard.bind(tangon)(report);
                    oscard = golfie.dispatch;
                    report = {};
                    option = 'VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION';
                    report['type'] = option;
                    option = zuuluu.body;
                    report['backgroundOption'] = option;
                    report = oscard.bind(golfie)(report);
 322:
                    return tangon;
 325:
                    return zuuluu;
 328:
                    return michal;
 331:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot11 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot11 = entity;
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
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.Endpoints;
    var _closure1_slot6 = report;
    report = 10;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/video_backgrounds/VideoBackgroundActionCreators.tsx';
    report = oscard.bind(golfie)(report);
    report = function() { // Original name: fetchVideoFilterAssets
        entity = undefined;
        tangon = _closure1_slot7;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchVideoFilterAssets'] = report;
    report = function() { // Original name: uploadVideoFilterAsset
        entity = undefined;
        tangon = _closure1_slot8;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['uploadVideoFilterAsset'] = report;
    report = function() { // Original name: deleteVideoFilterAsset
        entity = undefined;
        tangon = _closure1_slot9;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['deleteVideoFilterAsset'] = report;
    zuuluu['saveLastUsedBackgroundOption'] = tangon;
    tangon = function(argFoo) { // Original name: applyMediaFilterSettings
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = _closure1_slot4;
            michal = zuuluu.isSupported;
            michal = michal.bind(zuuluu)();
            if(!michal) { _fun00010_ip = 70; continue _fun00009 }
 20:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.dispatch;
            entity = {};
            tangon = 'MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS';
            entity['type'] = tangon;
            tangon = argFoo;
            entity['settings'] = tangon;
            entity = michal.bind(zuuluu)(entity);
 70:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['applyMediaFilterSettings'] = tangon;
    tangon = function() { // Original name: startApplyMediaFilterSettings
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zuuluu = _closure1_slot4;
            michal = zuuluu.isSupported;
            michal = michal.bind(zuuluu)();
            if(!michal) { _fun00012_ip = 64; continue _fun00011 }
 20:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.dispatch;
            entity = {};
            tangon = 'MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START';
            entity['type'] = tangon;
            entity = michal.bind(zuuluu)(entity);
 64:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['startApplyMediaFilterSettings'] = tangon;
    michal = function() { // Original name: errorApplyingMediaFilterSettings
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['errorApplyingMediaFilterSettings'] = michal;
    return entity;
})();