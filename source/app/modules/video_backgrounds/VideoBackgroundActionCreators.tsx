// app/modules/video_backgrounds/VideoBackgroundActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    entity = function() { // Original name: _fetchVideoFilterAssets
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun52806: for(var _fun52806_ip = 0; ; ) switch(_fun52806_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun52806_ip = 140; continue _fun52806 }
 10:
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 4;
                    mike = report[mike];
                    report = undefined;
                    mike = tango.bind(report)(mike);
                    oscar = mike.HTTP;
                    tango = oscar.get;
                    mike = {};
                    golf = _closure1_slot6;
                    golf = golf.VIDEO_FILTER_ASSETS;
                    mike['url'] = golf;
                    golf = false;
                    mike['rejectWithError'] = golf;
                    mike = tango.bind(oscar)(mike);
                    SaveGenerator(address=76);
 74:
                    return mike;
 76:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun52806_ip = 137; continue _fun52806 }
 82:
                    tango = _closure1_slot1;
                    oscar = _closure1_slot2;
                    zulu = 5;
                    zulu = oscar[zulu];
                    report = tango.bind(report)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    oscar = 'VIDEO_FILTER_ASSETS_FETCH_SUCCESS';
                    zulu['type'] = oscar;
                    oscar = mike.body;
                    zulu['assets'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    return mike;
 137:
                    return mike;
 140:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot7 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = function() { // Original name: _uploadVideoFilterAsset
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun52809: for(var _fun52809_ip = 0; ; ) switch(_fun52809_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun52809_ip = 256; continue _fun52809 }
 10:
                    options = argFoo;
                    offset = argBar;
                    verify = argBaz;
 19: // try_start_0
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 4;
                    mike = report[mike];
                    report = undefined;
                    mike = tango.bind(report)(mike);
                    oscar = mike.HTTP;
                    tango = oscar.post;
                    mike = {};
                    golf = _closure1_slot6;
                    golf = golf.VIDEO_FILTER_ASSETS;
                    mike['url'] = golf;
                    golf = {};
                    golf['type'] = offset;
                    golf['asset'] = options;
                    offset = verify;
                    options = null;
                    offset = options == offset;
                    options = undefined;
                    if(offset) { _fun52809_ip = 109; continue _fun52809 }
 96:
                    offset = verify;
                    verify = offset.toISOString;
                    options = verify.bind(offset)();
 109:
                    golf['last_used'] = options;
                    mike['body'] = golf;
                    golf = false;
                    mike['rejectWithError'] = golf;
                    mike = tango.bind(oscar)(mike);
                    SaveGenerator(address=135);
 133:
                    return mike;
 135:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun52809_ip = 201; continue _fun52809 }
 141:
                    tango = _closure1_slot1;
                    oscar = _closure1_slot2;
                    zulu = 5;
                    zulu = oscar[zulu];
                    report = tango.bind(report)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    oscar = 'VIDEO_FILTER_ASSET_UPLOAD_SUCCESS';
                    zulu['type'] = oscar;
                    oscar = mike.body;
                    zulu['videoFilterAsset'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    zulu = mike.body;
 198: // try_end0
                    return zulu;
 201:
                    return mike;
 204: // catch_target0
                    CatchBlockStart(arg_register=3);
                    report = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 6;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = report.bind(mike)(zulu);
                    zulu = mike.prototype;
                    zulu = Object.create(zulu, {constructor: {value: mike}});
                    romeo = zulu;
                    yankee = tango;
                    mike = new romeo[mike](yankee, offset);
                    mike = mike instanceof Object ? mike : zulu;
                    throw mike;
 256:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot8 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = function() { // Original name: _deleteVideoFilterAsset
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun52812: for(var _fun52812_ip = 0; ; ) switch(_fun52812_ip) {
 0:
                    StartGenerator();
                    golf = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun52812_ip = 250; continue _fun52812 }
 13:
                    report = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 4;
                    mike = zulu[mike];
                    zulu = undefined;
                    mike = report.bind(zulu)(mike);
                    oscar = mike.HTTP;
                    report = oscar.del;
                    mike = {};
                    offset = _closure1_slot6;
                    verify = offset.VIDEO_FILTER_ASSET;
                    options = golf.id;
                    options = verify.bind(offset)(options);
                    mike['url'] = options;
                    options = false;
                    mike['rejectWithError'] = options;
                    mike = report.bind(oscar)(mike);
                    SaveGenerator(address=90);
 88:
                    return mike;
 90:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun52812_ip = 247; continue _fun52812 }
 99:
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 7;
                    report = verify[report];
                    offset = options.bind(zulu)(report);
                    oscar = offset.getLastUsedVideoBackgroundOption;
                    yankee = _closure1_slot5;
                    report = yankee.getCurrentUser;
                    report = report.bind(yankee)();
                    oscar = oscar.bind(offset)(report);
                    report = 8;
                    report = verify[report];
                    options = options.bind(zulu)(report);
                    report = options.isCustomBackgroundOption;
                    report = report.bind(options)(oscar);
                    if(!report) { _fun52812_ip = 183; continue _fun52812 }
 169:
                    options = oscar.id;
                    oscar = golf.id;
                    report = options === oscar;
 183:
                    if(!report) { _fun52812_ip = 197; continue _fun52812 }
 186:
                    oscar = _closure1_slot10;
                    report = null;
                    report = oscar.bind(zulu)(report);
 197:
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    tango = 5;
                    tango = oscar[tango];
                    oscar = report.bind(zulu)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    options = 'VIDEO_FILTER_ASSET_DELETE_SUCCESS';
                    tango['type'] = options;
                    tango['videoFilterAsset'] = golf;
                    tango = report.bind(oscar)(tango);
                    return zulu;
 247:
                    return mike;
 250:
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
    tango = function() { // Original name: saveLastUsedBackgroundOption
        entity = undefined;
        tango = _closure1_slot11;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot10 = tango;
    entity = function() { // Original name: _saveLastUsedBackgroundOption
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun52816: for(var _fun52816_ip = 0; ; ) switch(_fun52816_ip) {
 0:
                    StartGenerator();
                    options = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun52816_ip = 331; continue _fun52816 }
 15:
                    var _closure4_slot0 = options;
                    oscar = _closure1_slot0;
                    offset = _closure1_slot2;
                    zulu = 9;
                    golf = offset[zulu];
                    tango = undefined;
                    golf = oscar.bind(tango)(golf);
                    verify = golf.PreloadedUserSettingsActionCreators;
                    golf = verify.updateAsync;
                    zulu = offset[zulu];
                    zulu = oscar.bind(tango)(zulu);
                    zulu = zulu.UserSettingsDelay;
                    oscar = zulu.FREQUENT_USER_ACTION;
                    zulu = 'voiceAndVideo';
                    mike = function(argFoo) {
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 8;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.getVideoBackgroundProtoFromOption;
                        mike = _closure4_slot0;
                        zulu = zulu.bind(tango)(mike);
                        mike = argFoo;
                        mike['videoBackgroundFilterDesktop'] = zulu;
                        return entity;
                    };
                    mike = golf.bind(verify)(zulu, mike, oscar);
                    SaveGenerator(address=97);
 95:
                    return mike;
 97:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun52816_ip = 328; continue _fun52816 }
 106:
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    zulu = 8;
                    zulu = golf[zulu];
                    oscar = oscar.bind(tango)(zulu);
                    zulu = oscar.isCustomBackgroundOption;
                    zulu = zulu.bind(oscar)(options);
                    if(zulu) { _fun52816_ip = 192; continue _fun52816 }
 140:
                    oscar = _closure1_slot1;
                    golf = _closure1_slot2;
                    zulu = 5;
                    zulu = golf[zulu];
                    golf = oscar.bind(tango)(zulu);
                    oscar = golf.dispatch;
                    zulu = {};
                    verify = 'VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION';
                    zulu['type'] = verify;
                    zulu['backgroundOption'] = options;
                    zulu = oscar.bind(golf)(zulu);
                    _fun52816_ip = 322; continue _fun52816;
 192:
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    zulu = 4;
                    zulu = golf[zulu];
                    zulu = oscar.bind(tango)(zulu);
                    golf = zulu.HTTP;
                    oscar = golf.post;
                    zulu = {};
                    offset = _closure1_slot6;
                    verify = offset.VIDEO_FILTER_ASSET_LAST_USED;
                    options = options.id;
                    options = verify.bind(offset)(options);
                    zulu['url'] = options;
                    options = false;
                    zulu['rejectWithError'] = options;
                    zulu = oscar.bind(golf)(zulu);
                    SaveGenerator(address=264);
 262:
                    return zulu;
 264:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(oscar) { _fun52816_ip = 325; continue _fun52816 }
 270:
                    oscar = _closure1_slot1;
                    golf = _closure1_slot2;
                    report = 5;
                    report = golf[report];
                    golf = oscar.bind(tango)(report);
                    oscar = golf.dispatch;
                    report = {};
                    options = 'VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION';
                    report['type'] = options;
                    options = zulu.body;
                    report['backgroundOption'] = options;
                    report = oscar.bind(golf)(report);
 322:
                    return tango;
 325:
                    return zulu;
 328:
                    return mike;
 331:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot11 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
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
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.Endpoints;
    var _closure1_slot6 = report;
    report = 10;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/video_backgrounds/VideoBackgroundActionCreators.tsx';
    report = oscar.bind(golf)(report);
    report = function() { // Original name: fetchVideoFilterAssets
        entity = undefined;
        tango = _closure1_slot7;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchVideoFilterAssets'] = report;
    report = function() { // Original name: uploadVideoFilterAsset
        entity = undefined;
        tango = _closure1_slot8;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['uploadVideoFilterAsset'] = report;
    report = function() { // Original name: deleteVideoFilterAsset
        entity = undefined;
        tango = _closure1_slot9;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['deleteVideoFilterAsset'] = report;
    zulu['saveLastUsedBackgroundOption'] = tango;
    tango = function(argFoo) { // Original name: applyMediaFilterSettings
        _fun52821: for(var _fun52821_ip = 0; ; ) switch(_fun52821_ip) {
 0:
            zulu = _closure1_slot4;
            mike = zulu.isSupported;
            mike = mike.bind(zulu)();
            if(!mike) { _fun52821_ip = 70; continue _fun52821 }
 20:
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 5;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dispatch;
            entity = {};
            tango = 'MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS';
            entity['type'] = tango;
            tango = argFoo;
            entity['settings'] = tango;
            entity = mike.bind(zulu)(entity);
 70:
            entity = undefined;
            return entity;
        }
    };
    zulu['applyMediaFilterSettings'] = tango;
    tango = function() { // Original name: startApplyMediaFilterSettings
        _fun52822: for(var _fun52822_ip = 0; ; ) switch(_fun52822_ip) {
 0:
            zulu = _closure1_slot4;
            mike = zulu.isSupported;
            mike = mike.bind(zulu)();
            if(!mike) { _fun52822_ip = 64; continue _fun52822 }
 20:
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 5;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dispatch;
            entity = {};
            tango = 'MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START';
            entity['type'] = tango;
            entity = mike.bind(zulu)(entity);
 64:
            entity = undefined;
            return entity;
        }
    };
    zulu['startApplyMediaFilterSettings'] = tango;
    mike = function() { // Original name: errorApplyingMediaFilterSettings
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['errorApplyingMediaFilterSettings'] = mike;
    return entity;
})();