// app/modules/activities/native/EmbeddedActivityWebView.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    options = argCorge;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = options;
    var _closure1_slot3 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot19;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot19;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo, argBar) { // Original name: getSafeArea
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tango = argFoo;
            verify = argBar;
            oscar = null;
            entity = verify;
            if(!(oscar != tango)) { _fun00008_ip = 113; continue _fun00007 }
 15:
            zulu = tango.disable;
            golf = 0;
            mike = 0;
            if(zulu) { _fun00008_ip = 110; continue _fun00007 }
 28:
            zulu = tango.override;
            if(!(oscar == zulu)) { _fun00008_ip = 82; continue _fun00007 }
 38:
            report = tango.offset;
            zulu = verify;
            if(!(oscar != report)) { _fun00008_ip = 80; continue _fun00007 }
 51:
            report = global;
            options = report.Math;
            oscar = options.max;
            report = tango.offset;
            report = verify + report;
            zulu = oscar.bind(options)(golf, report);
 80:
            _fun00008_ip = 107; continue _fun00007;
 82:
            report = global;
            oscar = report.Math;
            report = oscar.max;
            tango = tango.override;
            zulu = report.bind(oscar)(golf, tango);
 107:
            mike = zulu;
 110:
            entity = mike;
 113:
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.Linking;
    var _closure1_slot7 = options;
    tango = tango.NativeModules;
    var _closure1_slot8 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.ActivityPlatform;
    var _closure1_slot10 = options;
    tango = tango.DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY;
    var _closure1_slot11 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.ComponentActions;
    var _closure1_slot12 = options;
    tango = tango.AnalyticEvents;
    var _closure1_slot13 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot14 = tango;
    tango = 8;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {};
    yankee = 'transparent';
    offset['backgroundColor'] = yankee;
    tango['webView'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot15 = tango;
    tango = 9;
    tango = oscar[tango];
    options = golf.bind(entity)(tango);
    tango = options.prototype;
    golf = Object.create(tango, {constructor: {value: options}});
    backup = 'EmbeddedActivityWebView';
    kilo = golf;
    tango = new kilo[options](backup, foxtrot);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot16 = tango;
    tango = 10;
    tango = oscar[tango];
    golf = report.bind(entity)(tango);
    tango = golf.isIOS;
    tango = tango.bind(golf)();
    var _closure1_slot17 = tango;
    tango = 31;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/activities/native/EmbeddedActivityWebView.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: EmbeddedActivityWebView
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            whiskey = entity.activityUrl;
            romeo = entity.applicationId;
            var _closure2_slot0 = romeo;
            config = entity.channelId;
            var _closure2_slot1 = config;
            status = entity.guildId;
            var _closure2_slot2 = status;
            result = entity.activitySessionId;
            var _closure2_slot3 = result;
            context = entity.queryParams;
            tango = entity.onActivityCrash;
            var _closure2_slot4 = tango;
            echo = entity.onLoadError;
            var _closure2_slot5 = echo;
            update = entity.allowPopups;
            golf = entity.referrerPolicy;
            var _closure2_slot6 = golf;
            equality = entity.isPipOrGridMode;
            var _closure2_slot7 = equality;
            kilo = entity.webViewKey;
            var _closure2_slot8 = kilo;
            offset = entity.ignoreSilentHardwareSwitch;
            oscar = undefined;
            if(!(offset === oscar)) { _fun00010_ip = 124; continue _fun00009 }
 122:
            offset = true;
 124:
            yankee = entity.safeAreasConfig;
            var _closure2_slot9 = yankee;
            zulu = entity.currentEmbeddedActivity;
            var _closure2_slot10 = zulu;
            var _closure2_slot11 = oscar;
            var _closure2_slot12 = oscar;
            var _closure2_slot13 = oscar;
            var _closure2_slot14 = oscar;
            var _closure2_slot15 = oscar;
            var _closure2_slot16 = oscar;
            var _closure2_slot17 = oscar;
            var _closure2_slot18 = oscar;
            var _closure2_slot19 = oscar;
            var _closure2_slot20 = oscar;
            var _closure2_slot21 = oscar;
            var _closure2_slot22 = oscar;
            var _closure2_slot23 = oscar;
            var _closure2_slot24 = oscar;
            var _closure2_slot25 = oscar;
            var _closure2_slot26 = oscar;
            var _closure2_slot27 = oscar;
            var _closure2_slot28 = oscar;
            var _closure2_slot29 = oscar;
            var _closure2_slot30 = oscar;
            var _closure2_slot31 = oscar;
            entity = _closure1_slot15;
            record = entity.bind(oscar)();
            target = _closure1_slot6;
            mike = target.useContext;
            options = _closure1_slot0;
            backup = _closure1_slot3;
            entity = 11;
            entity = backup[entity];
            entity = options.bind(oscar)(entity);
            entity = entity.WebViewContext;
            sizing = mike.bind(target)(entity);
            mike = target.useState;
            entity = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot3;
                entity = 12;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                entity = mike.hasFrameId;
                entity = entity.bind(mike)();
                return entity;
            };
            entity = mike.bind(target)(entity);
            output = _closure1_slot5;
            verify = 1;
            entity = output.bind(oscar)(entity, verify);
            sequence = 0;
            mike = entity[sequence];
            _closure2_slot11 = mike;
            options = target.useState;
            entity = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    mike = _closure2_slot8;
                    entity = null;
                    if(!(entity == mike)) { _fun00012_ip = 50; continue _fun00011 }
 13:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot3;
                    entity = 13;
                    mike = mike[entity];
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    entity = mike.v4;
                    entity = entity.bind(mike)();
                    _fun00012_ip = 87; continue _fun00011;
 50:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot3;
                    mike = 12;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = tango.bind(mike)(zulu);
                    mike = zulu.getOrCreateFrameId;
                    entity = mike.bind(zulu)();
 87:
                    return entity;
                }
            };
            entity = options.bind(target)(entity);
            entity = output.bind(oscar)(entity, verify);
            control = entity[sequence];
            _closure2_slot12 = control;
            options = target.useState;
            entity = null;
            options = options.bind(target)(entity);
            papa = 2;
            options = output.bind(oscar)(options, papa);
            source = options[sequence];
            _closure2_slot13 = source;
            options = options[verify];
            _closure2_slot14 = options;
            sierra = target.useMemo;
            vacuum = new Array(1);
            vacuum[0] = kilo;
            options = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zulu = _closure2_slot8;
                    entity = null;
                    zulu = entity != zulu;
                    report = undefined;
                    entity = undefined;
                    if(!zulu) { _fun00014_ip = 58; continue _fun00013 }
 20:
                    tango = _closure1_slot0;
                    oscar = _closure1_slot3;
                    zulu = 14;
                    zulu = oscar[zulu];
                    tango = tango.bind(report)(zulu);
                    zulu = tango.getWebViewProxy;
                    mike = _closure2_slot8;
                    entity = zulu.bind(tango)(mike);
 58:
                    return entity;
                }
            };
            lima = sierra.bind(target)(options, vacuum);
            _closure2_slot15 = lima;
            options = target.useState;
            options = options.bind(target)(entity);
            options = output.bind(oscar)(options, papa);
            vacuum = options[sequence];
            options = options[verify];
            _closure2_slot16 = options;
            output = target.useEffect;
            options = new Array(3);
            options[0] = mike;
            options[1] = control;
            options[2] = kilo;
            mike = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = _closure2_slot11;
                    if(!entity) { _fun00016_ip = 20; continue _fun00015 }
 10:
                    zulu = _closure2_slot8;
                    mike = null;
                    entity = mike != zulu;
 20:
                    if(entity) { _fun00016_ip = 85; continue _fun00015 }
 23:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot3;
                    mike = 15;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
                    tango = mike.ComponentDispatch;
                    zulu = tango.dispatch;
                    entity = _closure1_slot12;
                    mike = entity.IFRAME_MOUNT;
                    entity = {};
                    report = _closure2_slot12;
                    entity['id'] = report;
                    entity = zulu.bind(tango)(mike, entity);
 85:
                    entity = undefined;
                    return entity;
                }
            };
            mike = output.bind(target)(mike, options);
            output = target.useEffect;
            options = new Array(2);
            options[0] = kilo;
            options[1] = control;
            mike = function() {
                entity = function() {
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        mike = _closure2_slot8;
                        entity = null;
                        if(!(entity == mike)) { _fun00018_ip = 75; continue _fun00017 }
 13:
                        tango = _closure1_slot0;
                        zulu = _closure1_slot3;
                        mike = 15;
                        zulu = zulu[mike];
                        mike = undefined;
                        mike = tango.bind(mike)(zulu);
                        tango = mike.ComponentDispatch;
                        zulu = tango.dispatch;
                        entity = _closure1_slot12;
                        mike = entity.IFRAME_UNMOUNT;
                        entity = {};
                        report = _closure2_slot12;
                        entity['id'] = report;
                        entity = zulu.bind(tango)(mike, entity);
 75:
                        entity = undefined;
                        return entity;
                    }
                };
                return entity;
            };
            mike = output.bind(target)(mike, options);
            options = _closure1_slot1;
            mike = 16;
            mike = backup[mike];
            mike = options.bind(oscar)(mike);
            mike = mike.bind(oscar)();
            backup = {};
            if(!(entity != zulu)) { _fun00010_ip = 580; continue _fun00009 }
 536:
            options = zulu.customId;
            if(!(entity != options)) { _fun00010_ip = 558; continue _fun00009 }
 546:
            options = zulu.customId;
            backup['custom_id'] = options;
 558:
            options = zulu.referrerId;
            if(!(entity != options)) { _fun00010_ip = 580; continue _fun00009 }
 568:
            options = zulu.referrerId;
            backup['referrer_id'] = options;
 580:
            output = _closure1_slot2;
            sierra = _closure1_slot3;
            options = 17;
            options = sierra[options];
            output = output.bind(oscar)(options);
            options = output.getConstants;
            options = options.bind(output)();
            output = {};
            variable40 = output;
            variable39 = context;
            context = copyDataProperties(variable40, variable39);
            variable40 = output;
            variable39 = backup;
            backup = copyDataProperties(variable40, variable39);
            backup = 'frame_id';
            output[backup] = control;
            backup = _closure1_slot10;
            context = backup.MOBILE;
            backup = 'platform';
            output[backup] = context;
            backup = options.Version;
            options = 'mobile_app_version';
            output[options] = backup;
            context = _closure1_slot1;
            options = 18;
            options = sierra[options];
            backup = context.bind(oscar)(options);
            options = {};
            options['allowPopups'] = update;
            quebec = backup.bind(oscar)(options);
            _closure2_slot17 = quebec;
            update = global;
            options = update.URLSearchParams;
            backup = options.prototype;
            backup = Object.create(backup, {constructor: {value: options}});
            variable41 = backup;
            variable40 = output;
            options = new variable41[options](variable40, variable39);
            output = options instanceof Object ? options : backup;
            options = update.HermesInternal;
            backup = options.concat;
            target = '';
            options = '?';
            whiskey = backup.bind(target)(whiskey, options, output);
            _closure2_slot18 = whiskey;
            backup = _closure1_slot6;
            options = backup.useRef;
            options = options.bind(backup)(yankee);
            _closure2_slot19 = options;
            output = backup.useEffect;
            options = new Array(4);
            options[0] = whiskey;
            options[1] = quebec;
            options[2] = echo;
            options[3] = golf;
            golf = function() {
                mike = function() {
                    tango = _closure1_slot4;
                    zulu = undefined;
                    mike = function* () {
                        entity = function* () { // Original name: ?anon_0_
                            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(mike) { _fun00020_ip = 380; continue _fun00019 }
 10:
                                zulu = undefined;
                                golf = undefined;
                                tango = undefined;
                                oscar = null;
                                options = null;
 20: // try_start_0
                                mike = _closure1_slot8;
                                report = mike.DCDSafeAreaManager;
                                mike = report.getStableSafeAreaInsets;
                                mike = mike.bind(report)();
                                SaveGenerator(address=47);
 45:
                                return mike;
 47:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                if(report) { _fun00020_ip = 250; continue _fun00019 }
 56:
                                options = mike;
                                report = _closure2_slot19;
                                offset = report.current;
                                golf = offset;
                                report = {};
                                romeo = _closure1_slot20;
                                offset = oscar == offset;
                                yankee = undefined;
                                if(offset) { _fun00020_ip = 97; continue _fun00019 }
 89:
                                offset = golf;
                                yankee = offset.left;
 97:
                                offset = options;
                                offset = offset.left;
                                offset = romeo.bind(zulu)(yankee, offset);
                                report['left'] = offset;
                                romeo = _closure1_slot20;
                                offset = golf;
                                offset = oscar == offset;
                                yankee = undefined;
                                if(offset) { _fun00020_ip = 139; continue _fun00019 }
 131:
                                offset = golf;
                                yankee = offset.right;
 139:
                                offset = options;
                                offset = offset.right;
                                offset = romeo.bind(zulu)(yankee, offset);
                                report['right'] = offset;
                                romeo = _closure1_slot20;
                                offset = golf;
                                offset = oscar == offset;
                                yankee = undefined;
                                if(offset) { _fun00020_ip = 181; continue _fun00019 }
 173:
                                offset = golf;
                                yankee = offset.top;
 181:
                                offset = options;
                                offset = offset.top;
                                offset = romeo.bind(zulu)(yankee, offset);
                                report['top'] = offset;
                                offset = _closure1_slot20;
                                verify = golf;
                                yankee = oscar == verify;
                                verify = undefined;
                                if(yankee) { _fun00020_ip = 220; continue _fun00019 }
 215:
                                verify = golf.bottom;
 220:
                                golf = options;
                                golf = golf.bottom;
                                golf = offset.bind(zulu)(verify, golf);
                                report['bottom'] = golf;
                                golf = 0;
                                report['imeInsetsBottom'] = golf;
                                options = report;
 248: // try_end0
                                _fun00020_ip = 255; continue _fun00019;
 250:
                                return mike;
 253: // catch_target0
                                CatchBlockStart(arg_register=1);
 255:
                                report = _closure1_slot1;
                                golf = _closure1_slot3;
                                mike = 19;
                                mike = golf[mike];
                                golf = report.bind(zulu)(mike);
                                mike = {};
                                offset = _closure2_slot18;
                                mike['iFrameUri'] = offset;
                                offset = _closure2_slot17;
                                mike['iFrameSandboxAttributes'] = offset;
                                offset = _closure2_slot6;
                                mike['referrerPolicy'] = offset;
                                mike['insets'] = options;
                                offset = _closure1_slot17;
                                options = undefined;
                                if(offset) { _fun00020_ip = 328; continue _fun00019 }
 324:
                                options = _closure1_slot11;
 328:
                                mike['messageForDisallowedNavigationError'] = options;
                                mike = golf.bind(zulu)(mike);
                                SaveGenerator(address=342);
 340:
                                return mike;
 342:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                                if(golf) { _fun00020_ip = 377; continue _fun00019 }
 348:
                                tango = mike;
                                if(!(oscar == mike)) { _fun00020_ip = 365; continue _fun00019 }
 355:
                                oscar = _closure2_slot5;
                                oscar = oscar.bind(zulu)();
                                _fun00020_ip = 374; continue _fun00019;
 365:
                                report = _closure2_slot16;
                                tango = report.bind(zulu)(tango);
 374:
                                return zulu;
 377:
                                return mike;
 380:
                                return entity;
                            }
                        };
                        return entity;
                    };
                    mike = tango.bind(zulu)(mike);
                    var _closure4_slot0 = mike;
                    entity = function() {
                        entity = undefined;
                        tango = _closure4_slot0;
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
                mike = mike.bind(entity)();
                mike = mike.bind(entity)();
                return entity;
            };
            golf = output.bind(backup)(golf, options);
            output = backup.useCallback;
            options = new Array(1);
            options[0] = romeo;
            golf = function(argFoo) {
                entity = argFoo;
                oscar = entity.nativeEvent;
                zulu = _closure1_slot16;
                mike = zulu.warn;
                golf = _closure2_slot0;
                entity = global;
                report = entity.JSON;
                tango = report.stringify;
                oscar = tango.bind(report)(oscar);
                entity = entity.HermesInternal;
                report = entity.concat;
                tango = 'activity WebView error for appId ';
                entity = '. ';
                entity = report.bind(tango)(golf, entity, oscar);
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            echo = output.bind(backup)(golf, options);
            output = backup.useCallback;
            options = new Array(1);
            options[0] = romeo;
            golf = function(argFoo) {
                entity = argFoo;
                oscar = entity.nativeEvent;
                zulu = _closure1_slot16;
                mike = zulu.warn;
                golf = _closure2_slot0;
                entity = global;
                report = entity.JSON;
                tango = report.stringify;
                oscar = tango.bind(report)(oscar);
                entity = entity.HermesInternal;
                report = entity.concat;
                tango = 'activity WebView render process gone for appId ';
                entity = '. ';
                entity = report.bind(tango)(golf, entity, oscar);
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            output = output.bind(backup)(golf, options);
            options = backup.useCallback;
            golf = new Array(7);
            golf[0] = romeo;
            golf[1] = config;
            golf[2] = status;
            golf[3] = result;
            golf[4] = control;
            golf[5] = tango;
            golf[6] = lima;
            tango = function() {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    report = _closure1_slot16;
                    tango = report.warn;
                    offset = _closure2_slot0;
                    entity = global;
                    entity = entity.HermesInternal;
                    oscar = entity.concat;
                    entity = 'activity WebView content process terminated for appId ';
                    entity = oscar.bind(entity)(offset);
                    entity = tango.bind(report)(entity);
                    tango = _closure1_slot1;
                    report = _closure1_slot3;
                    entity = 20;
                    oscar = report[entity];
                    entity = undefined;
                    verify = tango.bind(entity)(oscar);
                    options = verify.track;
                    oscar = _closure1_slot13;
                    golf = oscar.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED;
                    oscar = {};
                    oscar['application_id'] = offset;
                    offset = _closure2_slot1;
                    oscar['channel_id'] = offset;
                    offset = _closure2_slot2;
                    oscar['guild_id'] = offset;
                    offset = _closure2_slot3;
                    oscar['activity_session_id'] = offset;
                    oscar = options.bind(verify)(golf, oscar);
                    golf = _closure1_slot0;
                    oscar = 15;
                    oscar = report[oscar];
                    oscar = golf.bind(entity)(oscar);
                    options = oscar.ComponentDispatch;
                    golf = options.dispatch;
                    zulu = _closure1_slot12;
                    oscar = zulu.IFRAME_UNMOUNT;
                    zulu = {};
                    verify = _closure2_slot12;
                    zulu['id'] = verify;
                    zulu = golf.bind(options)(oscar, zulu);
                    zulu = 12;
                    zulu = report[zulu];
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.releaseFrameId;
                    zulu = zulu.bind(tango)();
                    tango = _closure2_slot15;
                    zulu = null;
                    if(!(zulu != tango)) { _fun00022_ip = 222; continue _fun00021 }
 208:
                    tango = _closure2_slot15;
                    zulu = tango.releaseWebView;
                    zulu = zulu.bind(tango)();
 222:
                    mike = _closure2_slot4;
                    mike = mike.bind(entity)();
                    return entity;
                }
            };
            result = options.bind(backup)(tango, golf);
            golf = _closure1_slot0;
            tango = 21;
            tango = sierra[tango];
            status = golf.bind(oscar)(tango);
            options = status.useStateFromStores;
            tango = _closure1_slot9;
            golf = new Array(1);
            golf[0] = tango;
            tango = function() {
                mike = _closure1_slot9;
                entity = mike.getUseActivityUrlOverride;
                entity = entity.bind(mike)();
                return entity;
            };
            tango = options.bind(status)(golf, tango);
            _closure2_slot20 = tango;
            golf = backup.useState;
            options = false;
            status = golf.bind(backup)(options);
            golf = _closure1_slot5;
            golf = golf.bind(oscar)(status, papa);
            status = golf[sequence];
            _closure2_slot21 = status;
            golf = golf[verify];
            _closure2_slot22 = golf;
            golf = 22;
            golf = sierra[golf];
            golf = context.bind(oscar)(golf);
            context = golf.bind(oscar)(status);
            _closure2_slot23 = context;
            sierra = backup.useEffect;
            golf = new Array(2);
            golf[0] = whiskey;
            golf[1] = tango;
            tango = function() {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0: // try_start_0
                    entity = global;
                    report = entity.URL;
                    oscar = _closure2_slot18;
                    tango = report.prototype;
                    tango = Object.create(tango, {constructor: {value: report}});
                    golf = tango;
                    zulu = new golf[report](oscar, report);
                    tango = zulu instanceof Object ? zulu : tango;
                    zulu = _closure2_slot14;
                    entity = undefined;
                    entity = zulu.bind(entity)(tango);
 46: // try_end0
                    _fun00024_ip = 75; continue _fun00023;
 48: // catch_target0
                    CatchBlockStart(arg_register=1);
                    zulu = _closure2_slot20;
                    if(zulu) { _fun00024_ip = 62; continue _fun00023 }
 60:
                    throw mike;
 62:
                    zulu = _closure2_slot22;
                    mike = undefined;
                    entity = true;
                    entity = zulu.bind(mike)(entity);
 75:
                    entity = undefined;
                    return entity;
                }
            };
            tango = sierra.bind(backup)(tango, golf);
            golf = backup.useEffect;
            tango = new Array(5);
            tango[0] = status;
            tango[1] = context;
            tango[2] = config;
            tango[3] = romeo;
            tango[4] = zulu;
            zulu = function() {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    entity = _closure2_slot23;
                    entity = !entity;
                    if(!entity) { _fun00026_ip = 17; continue _fun00025 }
 13:
                    entity = _closure2_slot21;
 17:
                    if(!entity) { _fun00026_ip = 307; continue _fun00025 }
 23:
                    mike = _closure1_slot1;
                    zulu = _closure1_slot3;
                    entity = 23;
                    entity = zulu[entity];
                    report = undefined;
                    golf = mike.bind(report)(entity);
                    oscar = golf.show;
                    entity = {};
                    yankee = _closure1_slot0;
                    options = 24;
                    verify = zulu[options];
                    verify = yankee.bind(report)(verify);
                    romeo = verify.intl;
                    offset = romeo.string;
                    verify = zulu[options];
                    verify = yankee.bind(report)(verify);
                    verify = verify.t;
                    verify = verify.PtobXV;
                    verify = offset.bind(romeo)(verify);
                    entity['title'] = verify;
                    verify = zulu[options];
                    verify = yankee.bind(report)(verify);
                    romeo = verify.intl;
                    offset = romeo.string;
                    verify = zulu[options];
                    verify = yankee.bind(report)(verify);
                    verify = verify.t;
                    verify = verify.55iAUV;
                    verify = offset.bind(romeo)(verify);
                    entity['body'] = verify;
                    verify = zulu[options];
                    verify = yankee.bind(report)(verify);
                    offset = verify.intl;
                    verify = offset.string;
                    options = zulu[options];
                    options = yankee.bind(report)(options);
                    options = options.t;
                    options = options.BddRzc;
                    options = verify.bind(offset)(options);
                    entity['confirmText'] = options;
                    entity = oscar.bind(golf)(entity);
                    entity = 25;
                    entity = zulu[entity];
                    options = mike.bind(report)(entity);
                    oscar = options.selectParticipant;
                    entity = _closure2_slot1;
                    golf = null;
                    entity = oscar.bind(options)(entity, golf);
                    entity = 12;
                    entity = zulu[entity];
                    zulu = mike.bind(report)(entity);
                    mike = zulu.leaveActivity;
                    entity = {};
                    oscar = _closure2_slot10;
                    oscar = golf == oscar;
                    if(oscar) { _fun00026_ip = 283; continue _fun00025 }
 274:
                    oscar = _closure2_slot10;
                    report = oscar.location;
 283:
                    entity['location'] = report;
                    tango = _closure2_slot0;
                    entity['applicationId'] = tango;
                    tango = false;
                    entity['showFeedback'] = tango;
                    entity = mike.bind(zulu)(entity);
 307:
                    entity = undefined;
                    return entity;
                }
            };
            zulu = golf.bind(backup)(zulu, tango);
            _closure2_slot24 = entity;
            zulu = entity != source;
            config = null;
            if(!zulu) { _fun00010_ip = 1197; continue _fun00009 }
 1122:
            zulu = _closure1_slot17;
            if(zulu) { _fun00010_ip = 1168; continue _fun00009 }
 1129:
            variable40 = source.origin;
            zulu = update.HermesInternal;
            golf = zulu.concat;
            variable39 = '/';
            variable37 = '/activity.html';
            variable41 = target;
            variable38 = control;
            zulu = variable41[golf](variable40, variable39, variable38, variable37, variable36);
            _fun00010_ip = 1190; continue _fun00009;
 1168:
            tango = update.HermesInternal;
            golf = tango.concat;
            tango = 'file://';
            zulu = golf.bind(tango)(vacuum);
 1190:
            _closure2_slot24 = zulu;
            config = zulu;
 1197:
            tango = _closure1_slot17;
            _closure2_slot25 = tango;
            context = _closure1_slot6;
            zulu = context.useState;
            zulu = zulu.bind(context)(options);
            backup = _closure1_slot5;
            golf = backup.bind(oscar)(zulu, papa);
            zulu = golf[sequence];
            golf = golf[verify];
            _closure2_slot26 = golf;
            status = context.useState;
            golf = new Array(0);
            golf = status.bind(context)(golf);
            backup = backup.bind(oscar)(golf, papa);
            golf = backup[sequence];
            _closure2_slot27 = golf;
            backup = backup[verify];
            _closure2_slot28 = backup;
            papa = context.useEffect;
            backup = new Array(2);
            backup[0] = romeo;
            backup[1] = tango;
            romeo = function() {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    mike = _closure2_slot25;
                    if(!mike) { _fun00028_ip = 54; continue _fun00027 }
 12:
                    mike = ["'self'"];
                    var _closure3_slot0 = mike;
                    mike = function(argFoo, argBar) { // Original name: parseCsp
                        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                            zulu = argBar;
                            mike = zulu.match;
                            entity = argFoo;
                            zulu = mike.bind(zulu)(entity);
                            entity = null;
                            if(!(entity !== zulu)) { _fun00030_ip = 35; continue _fun00029 }
 23:
                            mike = zulu.length;
                            entity = 2;
                            if(!(!(mike >= entity))) { _fun00030_ip = 41; continue _fun00029 }
 35:
                            entity = new Array(0);
                            _fun00030_ip = 81; continue _fun00029;
 41:
                            mike = 1;
                            tango = zulu[mike];
                            zulu = tango.split;
                            mike = ' ';
                            tango = zulu.bind(tango)(mike);
                            zulu = tango.filter;
                            mike = function(argFoo) {
                                zulu = _closure3_slot0;
                                mike = zulu.includes;
                                entity = argFoo;
                                entity = mike.bind(zulu)(entity);
                                entity = !entity;
                                return entity;
                            };
                            entity = zulu.bind(tango)(mike);
 81:
                            return entity;
                        }
                    };
                    var _closure3_slot1 = mike;
                    entity = function() {
                        tango = _closure1_slot4;
                        zulu = undefined;
                        mike = function* () {
                            entity = function* () { // Original name: ?anon_0_
                                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(mike) { _fun00032_ip = 286; continue _fun00031 }
 10:
                                    golf = _closure2_slot0;
                                    options = global;
                                    mike = options.HermesInternal;
                                    oscar = mike.concat;
                                    report = 'https://';
                                    zulu = '.';
                                    mike = 'discordsays.com';
                                    report = oscar.bind(report)(golf, zulu, mike);
                                    oscar = _closure1_slot0;
                                    zulu = _closure1_slot3;
                                    mike = 26;
                                    mike = zulu[mike];
                                    zulu = undefined;
                                    mike = oscar.bind(zulu)(mike);
                                    golf = mike.HTTP;
                                    oscar = golf.get;
                                    mike = {};
                                    options = options.HermesInternal;
                                    offset = options.concat;
                                    verify = '';
                                    options = '/.discord/csp';
                                    options = offset.bind(verify)(report, options);
                                    mike['url'] = options;
                                    options = false;
                                    mike['rejectWithError'] = options;
                                    mike = oscar.bind(golf)(mike);
                                    SaveGenerator(address=136);
 134:
                                    return mike;
 136:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                                    if(oscar) { _fun00032_ip = 283; continue _fun00031 }
 145:
                                    oscar = mike.headers;
                                    verify = oscar.content-security-policy;
                                    options = ['about:blank', 'file://*'];
                                    options[2] = report;
                                    golf = _closure3_slot1;
                                    oscar = /frame-src (.*?);/;
                                    romeo = golf.bind(zulu)(oscar, verify);
                                    yankee = 3;
                                    foxtrot = options;
                                    yankee = arraySpread(foxtrot, romeo, yankee);
                                    golf = _closure3_slot1;
                                    report = /child-src (.*?);/;
                                    romeo = golf.bind(zulu)(report, verify);
                                    foxtrot = options;
                                    report = arraySpread(foxtrot, romeo, yankee);
                                    oscar = _closure2_slot28;
                                    golf = options.map;
                                    report = function(argFoo) {
                                        mike = _closure1_slot1;
                                        zulu = _closure1_slot3;
                                        entity = 27;
                                        entity = zulu[entity];
                                        zulu = undefined;
                                        mike = mike.bind(zulu)(entity);
                                        entity = argFoo;
                                        tango = mike.bind(zulu)(entity);
                                        zulu = tango.replace;
                                        mike = /\\\*/g;
                                        entity = '.*';
                                        zulu = zulu.bind(tango)(mike, entity);
                                        entity = global;
                                        entity = entity.HermesInternal;
                                        mike = entity.concat;
                                        entity = '^';
                                        entity = mike.bind(entity)(zulu);
                                        return entity;
                                    };
                                    report = golf.bind(options)(report);
                                    report = oscar.bind(zulu)(report);
                                    report = _closure2_slot26;
                                    tango = true;
                                    tango = report.bind(zulu)(tango);
                                    return zulu;
 283:
                                    return mike;
 286:
                                    return entity;
                                }
                            };
                            return entity;
                        };
                        mike = tango.bind(zulu)(mike);
                        var _closure4_slot0 = mike;
                        entity = function() {
                            entity = undefined;
                            tango = _closure4_slot0;
                            zulu = tango.apply;
                            entity = arguments;
                            mike = entity;
                            entity = this;
                            entity = zulu.bind(tango)(entity, mike);
                            return entity;
                        };
                        return entity;
                    };
                    mike = undefined;
                    entity = entity.bind(mike)();
                    entity = entity.bind(mike)();
 54:
                    entity = undefined;
                    return entity;
                }
            };
            romeo = papa.bind(context)(romeo, backup);
            backup = context.useCallback;
            romeo = new Array(2);
            romeo[0] = config;
            romeo[1] = golf;
            golf = function(argFoo) {
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    entity = argFoo;
                    tango = entity.mainDocumentURL;
                    mike = _closure2_slot24;
                    report = null;
                    if(!(report != mike)) { _fun00034_ip = 37; continue _fun00033 }
 22:
                    if(!(report != tango)) { _fun00034_ip = 37; continue _fun00033 }
 26:
                    mike = _closure2_slot24;
                    if(!(tango === mike)) { _fun00034_ip = 283; continue _fun00033 }
 37:
                    tango = _closure1_slot18;
                    zulu = _closure2_slot27;
                    oscar = undefined;
                    options = tango.bind(oscar)(zulu);
                    tango = options.bind(oscar)();
                    zulu = tango.done;
                    golf = global;
                    if(zulu) { _fun00034_ip = 139; continue _fun00033 }
 69:
                    yankee = tango.value;
                    zulu = golf.RegExp;
                    verify = zulu.prototype;
                    verify = Object.create(verify, {constructor: {value: zulu}});
                    romeo = verify;
                    zulu = new romeo[zulu](yankee, offset);
                    offset = zulu instanceof Object ? zulu : verify;
                    verify = offset.test;
                    zulu = entity.url;
                    zulu = verify.bind(offset)(zulu);
                    if(zulu) { _fun00034_ip = 135; continue _fun00033 }
 118:
                    verify = options.bind(oscar)();
                    zulu = verify.done;
                    tango = verify;
                    if(zulu) { _fun00034_ip = 139; continue _fun00033 }
 133:
                    _fun00034_ip = 69; continue _fun00033;
 135:
                    zulu = true;
                    return zulu;
 139:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot3;
                    golf = 28;
                    zulu = zulu[golf];
                    options = tango.bind(oscar)(zulu);
                    tango = options.toURLSafe;
                    verify = _closure1_slot9;
                    zulu = verify.getActivityUrlOverride;
                    verify = zulu.bind(verify)();
                    offset = report != verify;
                    zulu = '';
                    if(!offset) { _fun00034_ip = 193; continue _fun00033 }
 190:
                    zulu = verify;
 193:
                    tango = tango.bind(options)(zulu);
                    zulu = _closure1_slot1;
                    mike = _closure1_slot3;
                    mike = mike[golf];
                    oscar = zulu.bind(oscar)(mike);
                    zulu = oscar.toURLSafe;
                    mike = entity.url;
                    zulu = zulu.bind(oscar)(mike);
                    mike = report != tango;
                    if(!mike) { _fun00034_ip = 242; continue _fun00033 }
 238:
                    mike = report != zulu;
 242:
                    if(!mike) { _fun00034_ip = 281; continue _fun00033 }
 245:
                    report = tango.origin;
                    tango = tango.pathname;
                    tango = report + tango;
                    report = zulu.origin;
                    zulu = zulu.pathname;
                    zulu = report + zulu;
                    mike = tango === zulu;
 281:
                    return mike;
 283:
                    zulu = _closure1_slot7;
                    mike = zulu.openURL;
                    entity = entity.url;
                    entity = mike.bind(zulu)(entity);
                    entity = false;
                    return entity;
                }
            };
            romeo = backup.bind(context)(golf, romeo);
            whiskey = entity != config;
            if(!whiskey) { _fun00010_ip = 1348; continue _fun00009 }
 1344:
            whiskey = entity != source;
 1348:
            if(!whiskey) { _fun00010_ip = 1355; continue _fun00009 }
 1351:
            whiskey = entity != vacuum;
 1355:
            _closure2_slot29 = whiskey;
            status = _closure1_slot6;
            golf = status.useRef;
            golf = golf.bind(status)(entity);
            _closure2_slot30 = golf;
            papa = status.useCallback;
            context = function(argFoo) {
                _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                    entity = _closure2_slot30;
                    zulu = entity.current;
                    entity = null;
                    if(!(entity != zulu)) { _fun00036_ip = 62; continue _fun00035 }
 18:
                    mike = zulu.injectJavaScript;
                    tango = _closure1_slot1;
                    report = _closure1_slot3;
                    entity = 29;
                    entity = report[entity];
                    report = undefined;
                    tango = tango.bind(report)(entity);
                    entity = argFoo;
                    entity = tango.bind(report)(entity);
                    entity = mike.bind(zulu)(entity);
 62:
                    entity = undefined;
                    return entity;
                }
            };
            backup = new Array(0);
            sierra = papa.bind(status)(context, backup);
            _closure2_slot31 = sierra;
            papa = status.useCallback;
            context = new Array(3);
            context[0] = kilo;
            quebec = entity == source;
            backup = undefined;
            if(quebec) { _fun00010_ip = 1431; continue _fun00009 }
 1425:
            backup = source.origin;
 1431:
            context[1] = backup;
            context[2] = sierra;
            backup = function(argFoo) {
                _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                    mike = _closure2_slot8;
                    golf = null;
                    if(!(golf == mike)) { _fun00038_ip = 155; continue _fun00037 }
 16:
                    mike = global;
                    tango = mike.JSON;
                    zulu = tango.parse;
                    mike = argFoo;
                    mike = mike.nativeEvent;
                    mike = mike.data;
                    report = zulu.bind(tango)(mike);
                    zulu = 'object';
                    mike = typeof report;
                    mike = zulu === mike;
                    if(!mike) { _fun00038_ip = 89; continue _fun00037 }
 62:
                    zulu = _closure2_slot13;
                    tango = golf == zulu;
                    zulu = undefined;
                    if(tango) { _fun00038_ip = 85; continue _fun00037 }
 75:
                    tango = _closure2_slot13;
                    zulu = tango.origin;
 85:
                    mike = golf != zulu;
 89:
                    if(!mike) { _fun00038_ip = 155; continue _fun00037 }
 92:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot3;
                    mike = 30;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.handleMessage;
                    oscar = _closure2_slot13;
                    oscar = golf == oscar;
                    if(oscar) { _fun00038_ip = 144; continue _fun00037 }
 134:
                    oscar = _closure2_slot13;
                    mike = oscar.origin;
 144:
                    entity = _closure2_slot31;
                    entity = zulu.bind(tango)(report, mike, entity);
 155:
                    entity = undefined;
                    return entity;
                }
            };
            backup = papa.bind(status)(backup, context);
            status = _closure1_slot6;
            papa = status.useEffect;
            context = new Array(6);
            context[0] = mike;
            context[1] = equality;
            context[2] = whiskey;
            context[3] = lima;
            context[4] = sierra;
            context[5] = yankee;
            report = function() {
                _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                    entity = _closure2_slot29;
                    if(!entity) { _fun00040_ip = 20; continue _fun00039 }
 10:
                    zulu = _closure2_slot15;
                    mike = null;
                    entity = mike != zulu;
 20:
                    if(!entity) { _fun00040_ip = 71; continue _fun00039 }
 23:
                    entity = _closure1_slot8;
                    mike = entity.DCDSafeAreaManager;
                    entity = mike.getStableSafeAreaInsets;
                    zulu = entity.bind(mike)();
                    mike = zulu.then;
                    tango = function() {
                        tango = _closure1_slot4;
                        zulu = undefined;
                        mike = function* (argFoo) {
                            entity = function* (argFoo) { // Original name: ?anon_0_
                                _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                                    StartGenerator();
                                    report = argFoo;
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(mike) { _fun00042_ip = 358; continue _fun00041 }
 13:
                                    mike = undefined;
                                    offset = undefined;
                                    zulu = undefined;
                                    oscar = _closure2_slot7;
                                    if(!oscar) { _fun00042_ip = 39; continue _fun00041 }
 29:
                                    report = {'top': 0, 'bottom': 0, 'left': 0, 'right': 0};
 39:
                                    offset = report;
                                    oscar = {};
                                    report = 'safeAreaUpdateEvent';
                                    oscar['type'] = report;
                                    options = {};
                                    verify = {};
                                    foxtrot = _closure1_slot20;
                                    yankee = _closure2_slot9;
                                    golf = null;
                                    yankee = golf == yankee;
                                    romeo = undefined;
                                    if(yankee) { _fun00042_ip = 89; continue _fun00041 }
 80:
                                    yankee = _closure2_slot9;
                                    romeo = yankee.left;
 89:
                                    yankee = offset;
                                    yankee = yankee.left;
                                    yankee = foxtrot.bind(mike)(romeo, yankee);
                                    verify['left'] = yankee;
                                    foxtrot = _closure1_slot20;
                                    yankee = _closure2_slot9;
                                    yankee = golf == yankee;
                                    romeo = undefined;
                                    if(yankee) { _fun00042_ip = 133; continue _fun00041 }
 124:
                                    yankee = _closure2_slot9;
                                    romeo = yankee.right;
 133:
                                    yankee = offset;
                                    yankee = yankee.right;
                                    yankee = foxtrot.bind(mike)(romeo, yankee);
                                    verify['right'] = yankee;
                                    foxtrot = _closure1_slot20;
                                    yankee = _closure2_slot9;
                                    yankee = golf == yankee;
                                    romeo = undefined;
                                    if(yankee) { _fun00042_ip = 177; continue _fun00041 }
 168:
                                    yankee = _closure2_slot9;
                                    romeo = yankee.top;
 177:
                                    yankee = offset;
                                    yankee = yankee.top;
                                    yankee = foxtrot.bind(mike)(romeo, yankee);
                                    verify['top'] = yankee;
                                    romeo = _closure1_slot20;
                                    yankee = _closure2_slot9;
                                    foxtrot = golf == yankee;
                                    yankee = undefined;
                                    if(foxtrot) { _fun00042_ip = 221; continue _fun00041 }
 212:
                                    foxtrot = _closure2_slot9;
                                    yankee = foxtrot.bottom;
 221:
                                    offset = offset.bottom;
                                    offset = romeo.bind(mike)(yankee, offset);
                                    verify['bottom'] = offset;
                                    options['insets'] = verify;
                                    oscar['data'] = options;
                                    zulu = oscar;
 248: // try_start_0
                                    verify = _closure2_slot15;
                                    options = verify.injectJavaScript;
                                    offset = _closure1_slot1;
                                    yankee = _closure1_slot3;
                                    oscar = 29;
                                    oscar = yankee[oscar];
                                    offset = offset.bind(mike)(oscar);
                                    oscar = zulu;
                                    oscar = offset.bind(mike)(oscar);
                                    oscar = options.bind(verify)(oscar);
                                    SaveGenerator(address=295);
 293:
                                    return oscar;
 295:
                                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                                    if(options) { _fun00042_ip = 303; continue _fun00041 }
 301: // try_end0
                                    _fun00042_ip = 355; continue _fun00041;
 303:
                                    return oscar;
 306: // catch_target0
                                    CatchBlockStart(arg_register=5);
                                    oscar = _closure2_slot30;
                                    oscar = oscar.current;
                                    if(!(golf != oscar)) { _fun00042_ip = 355; continue _fun00041 }
 321:
                                    tango = _closure2_slot31;
                                    oscar = _closure1_slot1;
                                    golf = _closure1_slot3;
                                    report = 29;
                                    report = golf[report];
                                    report = oscar.bind(mike)(report);
                                    zulu = report.bind(mike)(zulu);
                                    zulu = tango.bind(mike)(zulu);
 355:
                                    return mike;
 358:
                                    return entity;
                                }
                            };
                            return entity;
                        };
                        mike = tango.bind(zulu)(mike);
                        var _closure4_slot0 = mike;
                        entity = function() {
                            entity = undefined;
                            tango = _closure4_slot0;
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
                    entity = tango.bind(entity)();
                    entity = mike.bind(zulu)(entity);
 71:
                    entity = undefined;
                    return entity;
                }
            };
            report = papa.bind(status)(report, context);
            if(!(entity != config)) { _fun00010_ip = 2097; continue _fun00009 }
 1509:
            if(!(entity != source)) { _fun00010_ip = 2097; continue _fun00009 }
 1516:
            if(!tango) { _fun00010_ip = 1526; continue _fun00009 }
 1519:
            if(!(options !== zulu)) { _fun00010_ip = 2097; continue _fun00009 }
 1526:
            tango = {};
            context = _closure1_slot20;
            zulu = entity == yankee;
            report = undefined;
            if(zulu) { _fun00010_ip = 1546; continue _fun00009 }
 1541:
            report = yankee.left;
 1546:
            zulu = mike.left;
            zulu = context.bind(oscar)(report, zulu);
            tango['left'] = zulu;
            context = _closure1_slot20;
            zulu = entity == yankee;
            report = undefined;
            if(zulu) { _fun00010_ip = 1579; continue _fun00009 }
 1574:
            report = yankee.right;
 1579:
            zulu = mike.right;
            zulu = context.bind(oscar)(report, zulu);
            tango['right'] = zulu;
            context = _closure1_slot20;
            zulu = entity == yankee;
            report = undefined;
            if(zulu) { _fun00010_ip = 1612; continue _fun00009 }
 1607:
            report = yankee.top;
 1612:
            zulu = mike.top;
            zulu = context.bind(oscar)(report, zulu);
            tango['top'] = zulu;
            report = _closure1_slot20;
            context = entity == yankee;
            zulu = undefined;
            if(context) { _fun00010_ip = 1645; continue _fun00009 }
 1640:
            zulu = yankee.bottom;
 1645:
            mike = mike.bottom;
            mike = report.bind(oscar)(zulu, mike);
            tango['bottom'] = mike;
            tango['imeInsetsBottom'] = sequence;
            mike = _closure1_slot17;
            yankee = undefined;
            if(!mike) { _fun00010_ip = 1705; continue _fun00009 }
 1674:
            zulu = _closure1_slot0;
            report = _closure1_slot3;
            mike = 19;
            mike = report[mike];
            zulu = zulu.bind(oscar)(mike);
            mike = zulu.createInjectedJavascriptForIOS;
            yankee = mike.bind(zulu)(tango);
 1705:
            zulu = entity == vacuum;
            mike = null;
            if(zulu) { _fun00010_ip = 2095; continue _fun00009 }
 1717:
            report = _closure1_slot14;
            tango = _closure1_slot0;
            context = _closure1_slot3;
            zulu = 14;
            zulu = context[zulu];
            zulu = tango.bind(oscar)(zulu);
            tango = zulu.WebView;
            zulu = {};
            record = record.webView;
            zulu['style'] = record;
            zulu['ref'] = golf;
            golf = {};
            golf['uri'] = config;
            zulu['source'] = golf;
            golf = {};
            config = source.port;
            if(!(target !== config)) { _fun00010_ip = 1822; continue _fun00009 }
 1786:
            papa = source.hostname;
            context = source.port;
            config = update.HermesInternal;
            record = config.concat;
            config = ':';
            config = record.bind(target)(papa, config, context);
            _fun00010_ip = 1828; continue _fun00009;
 1822:
            config = source.host;
 1828:
            golf['domain'] = config;
            config = source.protocol;
            source = 'http:';
            source = source === config;
            golf['httpAllowed'] = source;
            source = {};
            config = 'internal';
            source['type'] = config;
            update = update.HermesInternal;
            update = update.concat;
            config = '/';
            update = update.bind(config)(control, config);
            source['path'] = update;
            control = vacuum.substring;
            update = vacuum.lastIndexOf;
            update = update.bind(vacuum)(config);
            update = control.bind(vacuum)(sequence, update);
            source['directory'] = update;
            update = new Array(1);
            update[0] = source;
            golf['pathHandlers'] = update;
            zulu['androidAssetLoaderConfig'] = golf;
            golf = ['*'];
            zulu['originWhitelist'] = golf;
            golf = 'never';
            zulu['overScrollMode'] = golf;
            zulu['scrollEnabled'] = options;
            golf = true;
            zulu['cacheEnabled'] = golf;
            zulu['onError'] = echo;
            zulu['onContentProcessDidTerminate'] = result;
            zulu['onRenderProcessGone'] = output;
            zulu['webViewKey'] = kilo;
            zulu['temporaryParentNodeTag'] = sizing;
            kilo = entity != kilo;
            zulu['messagingWithWebViewKeyEnabled'] = kilo;
            zulu['onMessage'] = backup;
            foxtrot = _closure1_slot17;
            zulu['allowFileAccess'] = foxtrot;
            zulu['injectedJavaScript'] = yankee;
            zulu['injectedJavaScriptForMainFrameOnly'] = options;
            yankee = undefined;
            if(!foxtrot) { _fun00010_ip = 2050; continue _fun00009 }
 2047:
            yankee = romeo;
 2050:
            zulu['onShouldStartLoadWithRequest'] = yankee;
            zulu['mediaPlaybackRequiresUserAction'] = options;
            zulu['ignoreSilentHardwareSwitch'] = offset;
            zulu['allowsInlineMediaPlayback'] = golf;
            zulu['minimumFontSize'] = verify;
            zulu['bounces'] = options;
            zulu['allowsProtectedMedia'] = golf;
            mike = report.bind(oscar)(tango, zulu);
 2095:
            return mike;
 2097:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();