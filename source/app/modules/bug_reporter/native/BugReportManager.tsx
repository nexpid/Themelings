// app/modules/bug_reporter/native/BugReportManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot15;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot15 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function() { // Original name: showNotification
        zulu = function() {
            tango = _closure1_slot8;
            zulu = undefined;
            mike = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun00006_ip = 242; continue _fun00005 }
 10:
                        tango = _closure1_slot0;
                        report = _closure1_slot2;
                        mike = 9;
                        mike = report[mike];
                        report = undefined;
                        tango = tango.bind(report)(mike);
                        mike = tango.isIOS;
                        mike = mike.bind(tango)();
                        if(mike) { _fun00006_ip = 102; continue _fun00005 }
 48:
                        mike = _closure1_slot9;
                        oscar = mike.CameraRollUtils;
                        tango = oscar.getPhotos;
                        mike = {'first': 1, 'assetType': 'photos'};
                        mike = tango.bind(oscar)(mike);
                        SaveGenerator(address=87);
 85:
                        return mike;
 87:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        oscar = tango;
                        tango = mike;
                        if(!oscar) { _fun00006_ip = 188; continue _fun00005 }
 99:
                        return mike;
 102:
                        oscar = _closure1_slot1;
                        mike = _closure1_slot2;
                        golf = 10;
                        mike = mike[golf];
                        oscar = oscar.bind(report)(mike);
                        mike = null;
                        oscar = mike == oscar;
                        mike = undefined;
                        if(oscar) { _fun00006_ip = 175; continue _fun00005 }
 133:
                        oscar = _closure1_slot1;
                        zulu = _closure1_slot2;
                        zulu = zulu[golf];
                        golf = oscar.bind(report)(zulu);
                        oscar = golf.getPhotos;
                        zulu = {'first': 1, 'groupTypes': 'Recents', 'assetType': 'Photos'};
                        mike = oscar.bind(golf)(zulu);
 175:
                        SaveGenerator(address=179);
 177:
                        return mike;
 179:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        tango = mike;
                        if(zulu) { _fun00006_ip = 239; continue _fun00005 }
 188:
                        zulu = null;
                        if(!(zulu == tango)) { _fun00006_ip = 196; continue _fun00005 }
 194:
                        tango = {};
 196:
                        tango = tango.edges;
                        if(!(zulu != tango)) { _fun00006_ip = 217; continue _fun00005 }
 206:
                        oscar = tango.length;
                        zulu = 0;
                        if(!(!(oscar > zulu))) { _fun00006_ip = 220; continue _fun00005 }
 217:
                        return report;
 220:
                        zulu = tango[zulu];
                        zulu = zulu.node;
                        zulu = zulu.image;
                        return zulu;
 239:
                        return mike;
 242:
                        return entity;
                    }
                };
                return entity;
            };
            mike = tango.bind(zulu)(mike);
            var _closure3_slot0 = mike;
            entity = function() {
                entity = undefined;
                tango = _closure3_slot0;
                zulu = tango.apply;
                entity = arguments;
                mike = entity;
                entity = this;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            return entity;
        };
        entity = undefined;
        zulu = zulu.bind(entity)();
        var _closure2_slot0 = zulu;
        zulu = global;
        tango = zulu.setTimeout;
        zulu = _closure1_slot8;
        mike = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00008_ip = 161; continue _fun00007 }
 10:
                    mike = _closure2_slot0;
                    zulu = undefined;
                    mike = mike.bind(zulu)();
                    SaveGenerator(address=27);
 25:
                    return mike;
 27:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00008_ip = 158; continue _fun00007 }
 36:
                    report = _closure1_slot1;
                    verify = _closure1_slot2;
                    tango = 11;
                    tango = verify[tango];
                    oscar = report.bind(zulu)(tango);
                    report = oscar.enqueueNotification;
                    tango = {'type': 'BUG_REPORTER', 'duration': 5000};
                    options = _closure1_slot0;
                    golf = 12;
                    golf = verify[golf];
                    options = options.bind(zulu)(golf);
                    golf = options.v4;
                    golf = golf.bind(options)();
                    tango['key'] = golf;
                    tango['image'] = mike;
                    golf = null;
                    options = golf == mike;
                    golf = undefined;
                    if(options) { _fun00008_ip = 131; continue _fun00007 }
 125:
                    golf = mike.uri;
 131:
                    tango['imageUri'] = golf;
                    golf = function() { // Original name: onDismiss
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 11;
                        mike = mike[entity];
                        entity = undefined;
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.clearNotification;
                        mike = mike.bind(zulu)();
                        return entity;
                    };
                    tango['onDismiss'] = golf;
                    tango = report.bind(oscar)(tango);
                    return zulu;
 158:
                    return mike;
 161:
                    return entity;
                }
            };
            return entity;
        };
        zulu = zulu.bind(entity)(mike);
        mike = 1200;
        mike = tango.bind(entity)(zulu, mike);
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    tango = options.NativeModules;
    var _closure1_slot9 = tango;
    verify = options.NativeEventEmitter;
    options = 7;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot10 = options;
    options = 8;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.NativePermissionStatus;
    var _closure1_slot11 = options;
    romeo = tango.ScreenshotHelper;
    options = verify.prototype;
    options = Object.create(options, {constructor: {value: verify}});
    foxtrot = options;
    tango = new foxtrot[verify](romeo, yankee);
    tango = tango instanceof Object ? tango : options;
    var _closure1_slot13 = tango;
    tango = 14;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        tango = function() { // Original name: BugReportManager
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot3;
            zulu = _closure2_slot1;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot14;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot1 = tango;
        mike = _closure1_slot7;
        zulu = undefined;
        entity = argFoo;
        entity = mike.bind(zulu)(tango, entity);
        mike = _closure1_slot4;
        report = {};
        entity = '_initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            mike = this;
            entity = mike.initBugReporter;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        options = '_terminate';
        report['key'] = options;
        options = function() { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zulu = _closure1_slot12;
                entity = null;
                if(!(entity != zulu)) { _fun00010_ip = 23; continue _fun00009 }
 13:
                entity = zulu.remove;
                entity = entity.bind(zulu)();
 23:
                entity = undefined;
                var _closure1_slot12 = entity;
                return entity;
            }
        };
        report['value'] = options;
        entity[1] = report;
        report = {};
        options = 'initBugReporter';
        report['key'] = options;
        options = _closure1_slot8;
        golf = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00012_ip = 194; continue _fun00011 }
 10:
                    mike = _closure1_slot9;
                    zulu = mike.NativePermissionManager;
                    mike = zulu.hasPhotoAuthorization;
                    mike = mike.bind(zulu)();
                    SaveGenerator(address=39);
 37:
                    return mike;
 39:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00012_ip = 191; continue _fun00011 }
 48:
                    zulu = _closure1_slot11;
                    zulu = zulu.AUTHORIZED;
                    oscar = mike === zulu;
                    zulu = _closure1_slot10;
                    golf = zulu.isBugReporterEnabled;
                    options = _closure1_slot1;
                    tango = _closure1_slot2;
                    zulu = 13;
                    tango = tango[zulu];
                    zulu = undefined;
                    offset = options.bind(zulu)(tango);
                    verify = offset.getCurrentConfig;
                    options = {};
                    tango = 'native-BugReportManager';
                    options['location'] = tango;
                    tango = {};
                    yankee = false;
                    tango['autoTrackExposure'] = yankee;
                    tango = verify.bind(offset)(options, tango);
                    tango = tango.hasBugReporterAccess;
                    if(!tango) { _fun00012_ip = 139; continue _fun00011 }
 136:
                    tango = golf;
 139:
                    if(!tango) { _fun00012_ip = 145; continue _fun00011 }
 142:
                    tango = oscar;
 145:
                    if(!tango) { _fun00012_ip = 188; continue _fun00011 }
 148:
                    oscar = _closure1_slot12;
                    tango = null;
                    if(!(tango == oscar)) { _fun00012_ip = 188; continue _fun00011 }
 158:
                    options = _closure1_slot13;
                    golf = options.addListener;
                    oscar = _closure1_slot16;
                    tango = 'screenshotTaken';
                    tango = golf.bind(options)(tango, oscar);
                    _closure1_slot12 = tango;
 188:
                    return zulu;
 191:
                    return mike;
 194:
                    return entity;
                }
            };
            return entity;
        };
        golf = options.bind(zulu)(golf);
        var _closure2_slot0 = golf;
        oscar = function() { // Original name: initBugReporter
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        report['value'] = oscar;
        entity[2] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 15;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/bug_reporter/native/BugReportManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();