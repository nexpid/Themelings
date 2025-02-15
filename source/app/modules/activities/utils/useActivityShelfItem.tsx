// app/modules/activities/utils/useActivityShelfItem.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    verify = argBar;
    options = argBaz;
    zulu = argFred;
    offset = argPlugh;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = options;
    var _closure1_slot2 = offset;
    report = function(argFoo, argBar) { // Original name: getStaffReleasePhase
        _fun118517: for(var _fun118517_ip = 0; ; ) switch(_fun118517_ip) {
 0:
            entity = argFoo;
            entity = entity.flags;
            mike = null;
            mike = mike != entity;
            tango = 0;
            if(!mike) { _fun118517_ip = 22; continue _fun118517 }
 19:
            tango = entity;
 22:
            oscar = _closure1_slot0;
            entity = _closure1_slot2;
            report = 10;
            zulu = entity[report];
            entity = undefined;
            golf = oscar.bind(entity)(zulu);
            oscar = golf.hasFlag;
            zulu = _closure1_slot6;
            zulu = zulu.EMBEDDED_RELEASED;
            zulu = oscar.bind(golf)(tango, zulu);
            oscar = tango;
            if(zulu) { _fun118517_ip = 119; continue _fun118517 }
 75:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[report];
            report = tango.bind(entity)(zulu);
            tango = report.hasFlag;
            zulu = _closure1_slot6;
            zulu = zulu.EMBEDDED_FIRST_PARTY;
            zulu = tango.bind(report)(oscar, zulu);
            if(zulu) { _fun118517_ip = 119; continue _fun118517 }
 117:
            return entity;
 119:
            zulu = argBar;
            tango = zulu.client_platform_config;
            report = _closure1_slot1;
            golf = _closure1_slot2;
            zulu = 4;
            zulu = golf[zulu];
            report = report.bind(entity)(zulu);
            oscar = _closure1_slot0;
            zulu = 5;
            zulu = golf[zulu];
            oscar = oscar.bind(entity)(zulu);
            zulu = oscar.getOS;
            zulu = zulu.bind(oscar)();
            zulu = report.bind(entity)(zulu);
            zulu = tango[zulu];
            report = zulu.release_phase;
            zulu = _closure1_slot5;
            mike = zulu.includes;
            mike = mike.bind(zulu)(report);
            entity = undefined;
            if(!mike) { _fun118517_ip = 261; continue _fun118517 }
 208:
            tango = report.replace;
            zulu = '_';
            mike = ' ';
            report = tango.bind(report)(zulu, mike);
            tango = report.replace;
            zulu = /(^\w|\s\w)/g;
            mike = function(argFoo) {
                mike = argFoo;
                entity = mike.toUpperCase;
                entity = entity.bind(mike)();
                return entity;
            };
            entity = tango.bind(report)(zulu, mike);
 261:
            return entity;
        }
    };
    var _closure1_slot8 = report;
    tango = function(argFoo) { // Original name: useActivityAction
        _fun118519: for(var _fun118519_ip = 0; ; ) switch(_fun118519_ip) {
 0:
            entity = argFoo;
            mike = entity.context;
            foxtrot = entity.applicationId;
            yankee = entity.fetchesApplication;
            oscar = undefined;
            if(!(yankee === oscar)) { _fun118519_ip = 29; continue _fun118519 }
 27:
            yankee = true;
 29:
            var _closure2_slot0 = oscar;
            entity = _closure1_slot7;
            entity = entity.START;
            golf = mike.type;
            report = 'channel';
            options = undefined;
            if(!(report === golf)) { _fun118519_ip = 66; continue _fun118519 }
 61:
            options = mike.channel;
 66:
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            mike = 11;
            mike = offset[mike];
            mike = verify.bind(oscar)(mike);
            romeo = mike.bind(oscar)();
            mike = 12;
            mike = offset[mike];
            report = verify.bind(oscar)(mike);
            mike = {};
            mike['fetchesApplication'] = yankee;
            golf = report.bind(oscar)(mike);
            report = _closure1_slot0;
            mike = 13;
            mike = offset[mike];
            report = report.bind(oscar)(mike);
            mike = report.useGetOrFetchApplication;
            mike = mike.bind(report)(foxtrot, yankee);
            _closure2_slot0 = mike;
            report = 8;
            report = offset[report];
            report = verify.bind(oscar)(report);
            verify = report.bind(oscar)(options);
            report = verify.find;
            tango = function(argFoo) {
                _fun118520: for(var _fun118520_ip = 0; ; ) switch(_fun118520_ip) {
 0:
                    entity = argFoo;
                    mike = entity.embeddedActivity;
                    tango = _closure2_slot0;
                    entity = null;
                    entity = entity != tango;
                    if(!entity) { _fun118520_ip = 43; continue _fun118520 }
 25:
                    zulu = _closure2_slot0;
                    zulu = zulu.id;
                    mike = mike.applicationId;
                    entity = zulu === mike;
 43:
                    return entity;
                }
            };
            report = report.bind(verify)(tango);
            tango = null;
            if(!(tango != mike)) { _fun118519_ip = 298; continue _fun118519 }
 186:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            verify = 14;
            verify = yankee[verify];
            yankee = offset.bind(oscar)(verify);
            offset = yankee.getEmbeddedActivityLocationChannelId;
            foxtrot = tango == romeo;
            verify = undefined;
            if(foxtrot) { _fun118519_ip = 226; continue _fun118519 }
 221:
            verify = romeo.location;
 226:
            verify = offset.bind(yankee)(verify);
            if(!(tango != options)) { _fun118519_ip = 267; continue _fun118519 }
 235:
            options = options.id;
            if(!(verify === options)) { _fun118519_ip = 267; continue _fun118519 }
 244:
            options = tango == golf;
            oscar = undefined;
            if(options) { _fun118519_ip = 258; continue _fun118519 }
 253:
            oscar = golf.id;
 258:
            mike = mike.id;
            if(!(oscar !== mike)) { _fun118519_ip = 286; continue _fun118519 }
 267:
            mike = entity;
            if(!(tango != report)) { _fun118519_ip = 296; continue _fun118519 }
 274:
            tango = _closure1_slot7;
            mike = tango.JOIN;
            _fun118519_ip = 296; continue _fun118519;
 286:
            zulu = _closure1_slot7;
            mike = zulu.LEAVE;
 296:
            return mike;
 298:
            return entity;
        }
    };
    var _closure1_slot9 = tango;
    mike = function(argFoo) { // Original name: useOnActivityItemSelected
        _fun118521: for(var _fun118521_ip = 0; ; ) switch(_fun118521_ip) {
 0:
            mike = argFoo;
            golf = mike.applicationId;
            var _closure2_slot0 = golf;
            zulu = mike.botUserIdForAppDM;
            var _closure2_slot1 = zulu;
            options = mike.context;
            var _closure2_slot2 = options;
            zulu = mike.locationObject;
            var _closure2_slot3 = zulu;
            zulu = mike.embeddedActivitiesManager;
            var _closure2_slot4 = zulu;
            zulu = mike.onActivityItemSelectedProp;
            var _closure2_slot5 = zulu;
            zulu = mike.launchingComponentId;
            var _closure2_slot6 = zulu;
            zulu = mike.commandOrigin;
            var _closure2_slot7 = zulu;
            zulu = mike.sectionName;
            var _closure2_slot8 = zulu;
            zulu = mike.source;
            var _closure2_slot9 = zulu;
            oscar = mike.fetchesApplication;
            zulu = undefined;
            if(!(oscar === zulu)) { _fun118521_ip = 118; continue _fun118521 }
 116:
            oscar = true;
 118:
            tango = mike.customId;
            var _closure2_slot10 = tango;
            mike = mike.referrerId;
            var _closure2_slot11 = mike;
            var _closure2_slot12 = zulu;
            var _closure2_slot13 = zulu;
            report = _closure1_slot9;
            tango = {};
            tango['context'] = options;
            tango['applicationId'] = golf;
            tango['fetchesApplication'] = oscar;
            report = report.bind(zulu)(tango);
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            tango = 15;
            tango = golf[tango];
            tango = oscar.bind(zulu)(tango);
            tango = tango.bind(zulu)();
            tango = tango.analyticsLocations;
            _closure2_slot12 = tango;
            tango = 11;
            tango = golf[tango];
            tango = oscar.bind(zulu)(tango);
            tango = tango.bind(zulu)();
            _closure2_slot13 = tango;
            tango = _closure1_slot7;
            tango = tango.START;
            if(!(tango !== report)) { _fun118521_ip = 298; continue _fun118521 }
 241:
            tango = _closure1_slot7;
            tango = tango.JOIN;
            if(!(tango !== report)) { _fun118521_ip = 280; continue _fun118521 }
 255:
            tango = _closure1_slot7;
            tango = tango.LEAVE;
            if(!(tango !== report)) { _fun118521_ip = 271; continue _fun118521 }
 269:
            return zulu;
 271:
            tango = function() {
                _fun118528: for(var _fun118528_ip = 0; ; ) switch(_fun118528_ip) {
 0:
                    mike = _closure1_slot4;
                    entity = mike.isLaunchingActivity;
                    entity = entity.bind(mike)();
                    if(entity) { _fun118528_ip = 100; continue _fun118528 }
 20:
                    mike = _closure2_slot13;
                    zulu = null;
                    if(!(zulu != mike)) { _fun118528_ip = 71; continue _fun118528 }
 33:
                    report = _closure2_slot4;
                    tango = report.leaveActivity;
                    mike = {};
                    oscar = _closure2_slot13;
                    oscar = oscar.location;
                    mike['location'] = oscar;
                    oscar = _closure2_slot0;
                    mike['applicationId'] = oscar;
                    mike = tango.bind(report)(mike);
 71:
                    mike = _closure2_slot5;
                    if(!(zulu != mike)) { _fun118528_ip = 100; continue _fun118528 }
 79:
                    zulu = _closure2_slot5;
                    mike = {};
                    entity = _closure2_slot0;
                    mike['applicationId'] = entity;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
 100:
                    entity = undefined;
                    return entity;
                }
            };
            return tango;
 280:
            report = _closure1_slot3;
            tango = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun118526: for(var _fun118526_ip = 0; ; ) switch(_fun118526_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun118526_ip = 210; continue _fun118526 }
 10:
                        tango = _closure1_slot4;
                        zulu = tango.isLaunchingActivity;
                        zulu = zulu.bind(tango)();
                        if(zulu) { _fun118526_ip = 205; continue _fun118526 }
 33:
                        zulu = _closure1_slot1;
                        tango = _closure1_slot2;
                        mike = 18;
                        mike = tango[mike];
                        tango = undefined;
                        zulu = zulu.bind(tango)(mike);
                        mike = {};
                        oscar = _closure2_slot0;
                        mike['applicationId'] = oscar;
                        oscar = _closure2_slot2;
                        options = oscar.type;
                        golf = 'channel';
                        oscar = undefined;
                        if(!(golf === options)) { _fun118526_ip = 101; continue _fun118526 }
 87:
                        golf = _closure2_slot2;
                        golf = golf.channel;
                        oscar = golf.id;
 101:
                        mike['activityChannelId'] = oscar;
                        oscar = _closure2_slot3;
                        mike['locationObject'] = oscar;
                        oscar = _closure2_slot12;
                        mike['analyticsLocations'] = oscar;
                        oscar = _closure2_slot6;
                        mike['componentId'] = oscar;
                        oscar = _closure2_slot8;
                        mike['sectionName'] = oscar;
                        oscar = _closure2_slot9;
                        mike['source'] = oscar;
                        oscar = _closure2_slot10;
                        mike['customId'] = oscar;
                        report = _closure2_slot11;
                        mike['referrerId'] = report;
                        tango = zulu.bind(tango)(mike);
                        zulu = tango.then;
                        mike = function(argFoo) {
                            _fun118527: for(var _fun118527_ip = 0; ; ) switch(_fun118527_ip) {
 0:
                                entity = argFoo;
                                if(!entity) { _fun118527_ip = 48; continue _fun118527 }
 6:
                                zulu = _closure2_slot5;
                                mike = null;
                                zulu = mike == zulu;
                                report = undefined;
                                mike = undefined;
                                if(zulu) { _fun118527_ip = 45; continue _fun118527 }
 26:
                                tango = _closure2_slot5;
                                zulu = {};
                                oscar = _closure2_slot0;
                                zulu['applicationId'] = oscar;
                                mike = tango.bind(report)(zulu);
 45:
                                entity = mike;
 48:
                                return entity;
                            }
                        };
                        mike = zulu.bind(tango)(mike);
                        SaveGenerator(address=196);
 194:
                        return mike;
 196:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(!zulu) { _fun118526_ip = 205; continue _fun118526 }
 202:
                        return mike;
 205:
                        mike = undefined;
                        return mike;
 210:
                        return entity;
                    }
                };
                return entity;
            };
            tango = report.bind(zulu)(tango);
            return tango;
 298:
            mike = _closure1_slot3;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun118523: for(var _fun118523_ip = 0; ; ) switch(_fun118523_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun118523_ip = 274; continue _fun118523 }
 10:
                        mike = undefined;
                        golf = undefined;
                        zulu = _closure2_slot2;
                        report = zulu.type;
                        tango = 'channel';
                        zulu = undefined;
                        if(!(tango === report)) { _fun118523_ip = 50; continue _fun118523 }
 36:
                        tango = _closure2_slot2;
                        tango = tango.channel;
                        zulu = tango.id;
 50:
                        golf = zulu;
                        tango = _closure2_slot1;
                        zulu = null;
                        if(!(zulu != tango)) { _fun118523_ip = 117; continue _fun118523 }
 63: // try_start_0
                        tango = _closure1_slot1;
                        report = _closure1_slot2;
                        zulu = 16;
                        zulu = report[zulu];
                        report = tango.bind(mike)(zulu);
                        tango = report.openPrivateChannel;
                        zulu = _closure2_slot1;
                        zulu = tango.bind(report)(zulu);
                        SaveGenerator(address=105);
 103:
                        return zulu;
 105:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(tango) { _fun118523_ip = 266; continue _fun118523 }
 114:
                        golf = zulu;
 117: // try_end0
                        report = _closure1_slot1;
                        options = _closure1_slot2;
                        tango = 17;
                        tango = options[tango];
                        report = report.bind(mike)(tango);
                        tango = {};
                        options = _closure2_slot0;
                        tango['targetApplicationId'] = options;
                        options = _closure2_slot3;
                        tango['locationObject'] = options;
                        tango['channelId'] = golf;
                        golf = _closure2_slot12;
                        tango['analyticsLocations'] = golf;
                        golf = _closure2_slot6;
                        tango['componentId'] = golf;
                        golf = _closure2_slot7;
                        tango['commandOrigin'] = golf;
                        golf = _closure2_slot8;
                        tango['sectionName'] = golf;
                        golf = _closure2_slot9;
                        tango['source'] = golf;
                        golf = _closure2_slot10;
                        tango['customId'] = golf;
                        oscar = _closure2_slot11;
                        tango['referrerId'] = oscar;
                        oscar = report.bind(mike)(tango);
                        report = oscar.then;
                        tango = function(argFoo) {
                            _fun118524: for(var _fun118524_ip = 0; ; ) switch(_fun118524_ip) {
 0:
                                entity = argFoo;
                                if(!entity) { _fun118524_ip = 48; continue _fun118524 }
 6:
                                zulu = _closure2_slot5;
                                mike = null;
                                zulu = mike == zulu;
                                report = undefined;
                                mike = undefined;
                                if(zulu) { _fun118524_ip = 45; continue _fun118524 }
 26:
                                tango = _closure2_slot5;
                                zulu = {};
                                oscar = _closure2_slot0;
                                zulu['applicationId'] = oscar;
                                mike = tango.bind(report)(zulu);
 45:
                                entity = mike;
 48:
                                return entity;
                            }
                        };
                        tango = report.bind(oscar)(tango);
                        SaveGenerator(address=254);
 252:
                        return tango;
 254:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                        if(report) { _fun118523_ip = 263; continue _fun118523 }
 260:
                        return mike;
 263:
                        return tango;
 266:
                        return zulu;
 269: // catch_target0
                        CatchBlockStart(arg_register=2);
                        return mike;
 274:
                        return entity;
                    }
                };
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    var _closure1_slot10 = mike;
    entity = global;
    romeo = entity.Object;
    yankee = romeo.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeo)(zulu, entity, oscar);
    foxtrot = 0;
    oscar = offset[foxtrot];
    entity = undefined;
    oscar = options.bind(entity)(oscar);
    var _closure1_slot3 = oscar;
    romeo = 1;
    oscar = offset[romeo];
    oscar = options.bind(entity)(oscar);
    var _closure1_slot4 = oscar;
    yankee = 2;
    oscar = offset[yankee];
    oscar = verify.bind(entity)(oscar);
    oscar = oscar.STAFF_RELEASE_PHASES;
    var _closure1_slot5 = oscar;
    oscar = 3;
    oscar = offset[oscar];
    oscar = verify.bind(entity)(oscar);
    oscar = oscar.ApplicationFlags;
    var _closure1_slot6 = oscar;
    oscar = {};
    oscar['START'] = foxtrot;
    options = 'START';
    oscar[foxtrot] = options;
    oscar['JOIN'] = romeo;
    options = 'JOIN';
    oscar[romeo] = options;
    oscar['LEAVE'] = yankee;
    options = 'LEAVE';
    oscar[yankee] = options;
    var _closure1_slot7 = oscar;
    options = 19;
    options = offset[options];
    offset = verify.bind(entity)(options);
    verify = offset.fileFinishedImporting;
    options = 'modules/activities/utils/useActivityShelfItem.tsx';
    options = verify.bind(offset)(options);
    golf = function(argFoo) { // Original name: useActivityShelfItem
        _fun118529: for(var _fun118529_ip = 0; ; ) switch(_fun118529_ip) {
 0:
            zulu = argFoo;
            entity = zulu.activityItem;
            echo = zulu.context;
            result = zulu.locationObject;
            sizing = zulu.onActivityItemSelected;
            output = zulu.embeddedActivitiesManager;
            yankee = zulu.assetNames;
            oscar = undefined;
            if(!(yankee === oscar)) { _fun118529_ip = 56; continue _fun118529 }
 46:
            yankee = ['embedded_cover'];
 56:
            update = zulu.backgroundResolution;
            if(!(update === oscar)) { _fun118529_ip = 69; continue _fun118529 }
 66:
            update = 250;
 69:
            kilo = zulu.launchingComponentId;
            backup = zulu.commandOrigin;
            foxtrot = zulu.source;
            var _closure2_slot0 = oscar;
            romeo = entity.application;
            _closure2_slot0 = romeo;
            golf = entity.activity;
            report = golf.client_platform_config;
            options = _closure1_slot1;
            offset = _closure1_slot2;
            tango = 4;
            tango = offset[tango];
            options = options.bind(oscar)(tango);
            verify = _closure1_slot0;
            tango = 5;
            tango = offset[tango];
            verify = verify.bind(oscar)(tango);
            tango = verify.getOS;
            tango = tango.bind(verify)();
            tango = options.bind(oscar)(tango);
            tango = report[tango];
            report = tango.label_until;
            offset = null;
            report = offset != report;
            if(!report) { _fun118529_ip = 228; continue _fun118529 }
 184:
            options = global;
            source = options.Date;
            verify = source.now;
            verify = verify.bind(source)();
            control = options.Date;
            source = control.parse;
            options = tango.label_until;
            options = source.bind(control)(options);
            report = verify < options;
 228:
            verify = _closure1_slot1;
            source = _closure1_slot2;
            options = 6;
            options = source[options];
            verify = verify.bind(oscar)(options);
            options = {};
            source = romeo.id;
            options['applicationId'] = source;
            options['size'] = update;
            options['names'] = yankee;
            yankee = verify.bind(oscar)(options);
            options = golf.activity_preview_video_asset_id;
            options = offset != options;
            offset = null;
            if(!options) { _fun118529_ip = 324; continue _fun118529 }
 287:
            verify = _closure1_slot1;
            update = _closure1_slot2;
            options = 7;
            options = update[options];
            verify = verify.bind(oscar)(options);
            options = romeo.id;
            golf = golf.activity_preview_video_asset_id;
            offset = verify.bind(oscar)(options, golf);
 324:
            options = _closure1_slot1;
            verify = _closure1_slot2;
            golf = 8;
            golf = verify[golf];
            options = options.bind(oscar)(golf);
            update = echo.type;
            verify = 'channel';
            golf = undefined;
            if(!(verify === update)) { _fun118529_ip = 364; continue _fun118529 }
 359:
            golf = echo.channel;
 364:
            options = options.bind(oscar)(golf);
            golf = options.find;
            mike = function(argFoo) {
                entity = argFoo;
                entity = entity.embeddedActivity;
                mike = _closure2_slot0;
                mike = mike.id;
                entity = entity.applicationId;
                entity = mike === entity;
                return entity;
            };
            verify = golf.bind(options)(mike);
            golf = _closure1_slot9;
            mike = {};
            mike['context'] = echo;
            options = romeo.id;
            mike['applicationId'] = options;
            options = golf.bind(oscar)(mike);
            golf = _closure1_slot10;
            mike = {};
            update = entity.application;
            update = update.id;
            mike['applicationId'] = update;
            mike['context'] = echo;
            mike['locationObject'] = result;
            mike['embeddedActivitiesManager'] = output;
            mike['onActivityItemSelectedProp'] = sizing;
            mike['launchingComponentId'] = kilo;
            mike['commandOrigin'] = backup;
            mike['source'] = foxtrot;
            golf = golf.bind(oscar)(mike);
            mike = _closure1_slot8;
            entity = entity.activity;
            mike = mike.bind(oscar)(romeo, entity);
            entity = {};
            entity['imageBackground'] = yankee;
            entity['videoUrl'] = offset;
            entity['joinableEmbeddedApp'] = verify;
            entity['activityAction'] = options;
            entity['onActivityItemSelected'] = golf;
            if(report) { _fun118529_ip = 550; continue _fun118529 }
 516:
            report = _closure1_slot0;
            golf = _closure1_slot2;
            zulu = 9;
            zulu = golf[zulu];
            zulu = report.bind(oscar)(zulu);
            zulu = zulu.EmbeddedActivityLabelTypes;
            zulu = zulu.NONE;
            _fun118529_ip = 556; continue _fun118529;
 550:
            zulu = tango.label_type;
 556:
            entity['labelType'] = zulu;
            entity['staffReleasePhase'] = mike;
            return entity;
        }
    };
    zulu['default'] = golf;
    zulu['ActivityAction'] = oscar;
    zulu['getStaffReleasePhase'] = report;
    zulu['useActivityAction'] = tango;
    zulu['useOnActivityItemSelected'] = mike;
    return entity;
})();