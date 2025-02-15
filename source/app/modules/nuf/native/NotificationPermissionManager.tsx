// app/modules/nuf/native/NotificationPermissionManager.tsx
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
            entity = _closure1_slot23;
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
    var _closure1_slot22 = entity;
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
            _closure1_slot23 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo, argBar) { // Original name: haveNotSeenPromptSince
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argFoo;
            mike = _closure1_slot11;
            entity = mike.getState;
            entity = entity.bind(mike)();
            entity = entity.promptLastSeen;
            oscar = entity[report];
            entity = null;
            entity = entity == oscar;
            if(entity) { _fun00006_ip = 110; continue _fun00005 }
 39:
            tango = _closure1_slot20;
            mike = tango.includes;
            report = mike.bind(tango)(report);
            tango = undefined;
            mike = undefined;
            if(!report) { _fun00006_ip = 107; continue _fun00005 }
 60:
            report = _closure1_slot1;
            golf = _closure1_slot2;
            zulu = 16;
            zulu = golf[zulu];
            zulu = report.bind(tango)(zulu);
            report = zulu.bind(tango)();
            tango = report.diff;
            zulu = 'days';
            tango = tango.bind(report)(oscar, zulu);
            zulu = argBar;
            mike = tango >= zulu;
 107:
            entity = mike;
 110:
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    entity = function() { // Original name: shouldShowPrompt
        entity = undefined;
        tango = _closure1_slot26;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot25 = entity;
    entity = function() { // Original name: _shouldShowPrompt
        report = undefined;
        entity = undefined;
        tango = _closure1_slot8;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00008_ip = 99; continue _fun00007 }
 7:
                    mike = _closure1_slot9;
                    zulu = mike.NativePermissionManager;
                    mike = zulu.getNotificationAuthorizationStatus;
                    mike = mike.bind(zulu)();
                    SaveGenerator(address=34);
 32:
                    return mike;
 34:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00008_ip = 96; continue _fun00007 }
 40:
                    zulu = _closure1_slot18;
                    zulu = zulu.UNDETERMINED;
                    zulu = mike === zulu;
                    if(zulu) { _fun00008_ip = 71; continue _fun00007 }
 57:
                    report = _closure1_slot18;
                    report = report.PROVISIONAL;
                    zulu = mike === report;
 71:
                    if(!zulu) { _fun00008_ip = 93; continue _fun00007 }
 74:
                    golf = _closure1_slot24;
                    oscar = _closure1_slot19;
                    report = undefined;
                    tango = argFoo;
                    zulu = golf.bind(report)(tango, oscar);
 93:
                    return zulu;
 96:
                    return mike;
 99:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot26 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot26 = entity;
    entity = function() { // Original name: shouldShowReactivationPrompt
        entity = undefined;
        tango = _closure1_slot28;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot27 = entity;
    entity = function() { // Original name: _shouldShowReactivationPrompt
        report = undefined;
        entity = undefined;
        tango = _closure1_slot8;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00010_ip = 82; continue _fun00009 }
 7:
                    mike = _closure1_slot9;
                    zulu = mike.NativePermissionManager;
                    mike = zulu.getNotificationAuthorizationStatus;
                    mike = mike.bind(zulu)();
                    SaveGenerator(address=34);
 32:
                    return mike;
 34:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00010_ip = 79; continue _fun00009 }
 40:
                    zulu = _closure1_slot18;
                    zulu = zulu.DENIED;
                    zulu = mike === zulu;
                    if(!zulu) { _fun00010_ip = 76; continue _fun00009 }
 57:
                    golf = _closure1_slot24;
                    oscar = _closure1_slot19;
                    report = undefined;
                    tango = argFoo;
                    zulu = golf.bind(report)(tango, oscar);
 76:
                    return zulu;
 79:
                    return mike;
 82:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot28 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot28 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: showPrompt
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            entity = argBar;
            var _closure2_slot1 = entity;
            tango = _closure1_slot21;
            entity = null;
            if(!(entity != tango)) { _fun00012_ip = 48; continue _fun00011 }
 29:
            entity = global;
            report = entity.clearTimeout;
            tango = _closure1_slot21;
            entity = undefined;
            entity = report.bind(entity)(tango);
 48:
            entity = global;
            report = entity.setTimeout;
            entity = undefined;
            tango = function() {
                verify = _closure1_slot0;
                offset = _closure1_slot2;
                entity = 17;
                zulu = offset[entity];
                entity = undefined;
                oscar = verify.bind(entity)(zulu);
                report = oscar.setPushPermissionReactivationSeen;
                tango = _closure2_slot0;
                tango = report.bind(oscar)(tango);
                golf = _closure2_slot1;
                tango = _closure1_slot1;
                zulu = 12;
                zulu = offset[zulu];
                oscar = tango.bind(entity)(zulu);
                report = oscar.openLazy;
                zulu = 14;
                zulu = offset[zulu];
                options = verify.bind(entity)(zulu);
                zulu = 13;
                tango = offset[zulu];
                zulu = offset.paths;
                tango = options.bind(entity)(tango, zulu);
                zulu = _closure1_slot13;
                mike = {};
                options = 15;
                options = offset[options];
                options = verify.bind(entity)(options);
                options = options.ImpressionNames;
                options = options.PUSH_NOTIFICATION_REACTIVATION_PROMPT;
                mike['impressionName'] = options;
                options = {};
                options['action_location'] = golf;
                mike['impressionProperties'] = options;
                mike['location'] = golf;
                mike = report.bind(oscar)(tango, zulu, mike);
                return entity;
            };
            mike = argBaz;
            mike = report.bind(entity)(tango, mike);
            _closure1_slot21 = mike;
            return entity;
        }
    };
    var _closure1_slot29 = entity;
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
    options = oscar[tango];
    options = golf.bind(entity)(options);
    var _closure1_slot4 = options;
    options = 2;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot5 = options;
    options = 3;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot6 = options;
    options = 4;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot7 = options;
    options = 5;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot8 = options;
    options = 6;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.NativeModules;
    var _closure1_slot9 = options;
    options = 7;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot10 = options;
    options = 8;
    verify = oscar[options];
    verify = golf.bind(entity)(verify);
    var _closure1_slot11 = verify;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.PermissionPromptType;
    var _closure1_slot12 = options;
    verify = 9;
    verify = oscar[verify];
    verify = report.bind(entity)(verify);
    offset = verify.NOTIFICATION_REACTIVATION_ACTIONSHEET_KEY;
    var _closure1_slot13 = offset;
    verify = verify.EventActionLocation;
    var _closure1_slot14 = verify;
    verify = 10;
    verify = oscar[verify];
    verify = report.bind(entity)(verify);
    offset = verify.RelationshipTypes;
    var _closure1_slot15 = offset;
    offset = verify.GuildFeatures;
    var _closure1_slot16 = offset;
    verify = verify.AnalyticEvents;
    var _closure1_slot17 = verify;
    verify = 11;
    verify = oscar[verify];
    verify = report.bind(entity)(verify);
    verify = verify.NotificationAuthorizationStatus;
    var _closure1_slot18 = verify;
    var _closure1_slot19 = tango;
    verify = options.FRIEND_REQUEST_SENT;
    tango = new Array(2);
    tango[0] = verify;
    options = options.INVITE_ACCEPTED;
    tango[1] = options;
    var _closure1_slot20 = tango;
    tango = null;
    var _closure1_slot21 = tango;
    tango = 20;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        zulu = function(argFoo) { // Original name: NotificationPermissionManager
            golf = this;
            romeo = 0;
            options = copyRestArgs(romeo);
            entity = _closure1_slot4;
            oscar = _closure2_slot0;
            zulu = undefined;
            entity = entity.bind(zulu)(golf, oscar);
            report = _closure1_slot22;
            entity = new Array(0);
            romeo = entity;
            yankee = options;
            offset = 0;
            options = arraySpread(romeo, yankee, offset);
            entity = report.bind(zulu)(golf, oscar, entity);
            var _closure3_slot0 = entity;
            report = {};
            oscar = function(argFoo) { // Original name: MESSAGE_CREATE
                zulu = _closure3_slot0;
                mike = zulu.handleMessageCreate;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            report['MESSAGE_CREATE'] = oscar;
            oscar = function(argFoo) { // Original name: INVITE_ACCEPT_SUCCESS
                zulu = _closure3_slot0;
                mike = zulu.handleInviteAccept;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            report['INVITE_ACCEPT_SUCCESS'] = oscar;
            oscar = function(argFoo) { // Original name: RELATIONSHIP_ADD
                zulu = _closure3_slot0;
                mike = zulu.handleSendFriendRequest;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            report['RELATIONSHIP_ADD'] = oscar;
            oscar = function() { // Original name: POST_CONNECTION_OPEN
                mike = _closure3_slot0;
                entity = mike.handleConnectionOpen;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            };
            report['POST_CONNECTION_OPEN'] = oscar;
            entity['actions'] = report;
            report = _closure1_slot8;
            tango = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun00014_ip = 155; continue _fun00013 }
 10:
                        mike = _closure1_slot9;
                        zulu = mike.NativePermissionManager;
                        mike = zulu.getNotificationAuthorizationStatus;
                        mike = mike.bind(zulu)();
                        SaveGenerator(address=37);
 35:
                        return mike;
 37:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(zulu) { _fun00014_ip = 152; continue _fun00013 }
 43:
                        report = _closure1_slot0;
                        oscar = _closure1_slot2;
                        zulu = 18;
                        tango = oscar[zulu];
                        zulu = undefined;
                        report = report.bind(zulu)(tango);
                        tango = report.allowInAppNotifications;
                        options = tango.bind(report)();
                        report = _closure1_slot1;
                        tango = 19;
                        tango = oscar[tango];
                        golf = report.bind(zulu)(tango);
                        oscar = golf.track;
                        tango = _closure1_slot17;
                        report = tango.NOTIFICATION_PERMISSION_STATUS;
                        tango = {};
                        verify = _closure1_slot18;
                        verify = verify.AUTHORIZED;
                        verify = mike === verify;
                        tango['os_enabled'] = verify;
                        tango['foreground_app_enabled'] = options;
                        tango['background_app_enabled'] = options;
                        tango = oscar.bind(golf)(report, tango);
                        return zulu;
 152:
                        return mike;
 155:
                        return entity;
                    }
                };
                return entity;
            };
            tango = report.bind(zulu)(tango);
            entity['handleConnectionOpen'] = tango;
            tango = function() {
                tango = _closure1_slot8;
                zulu = undefined;
                mike = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            StartGenerator();
                            mike = argFoo;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(zulu) { _fun00016_ip = 210; continue _fun00015 }
 13:
                            tango = mike.message;
                            report = mike.optimistic;
                            oscar = mike.isPushNotification;
                            golf = mike.sendMessageOptions;
                            zulu = undefined;
                            SaveGenerator(address=42);
 40:
                            return zulu;
 42:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                            if(options) { _fun00016_ip = 207; continue _fun00015 }
 51:
                            if(report) { _fun00016_ip = 57; continue _fun00015 }
 54:
                            report = oscar;
 57:
                            if(report) { _fun00016_ip = 66; continue _fun00015 }
 60:
                            oscar = null;
                            report = oscar != golf;
 66:
                            if(report) { _fun00016_ip = 204; continue _fun00015 }
 72:
                            report = null;
                            golf = report == tango;
                            oscar = undefined;
                            if(golf) { _fun00016_ip = 103; continue _fun00015 }
 83:
                            tango = tango.author;
                            report = report == tango;
                            oscar = undefined;
                            if(report) { _fun00016_ip = 103; continue _fun00015 }
 98:
                            oscar = tango.id;
 103:
                            golf = _closure1_slot10;
                            tango = golf.getId;
                            tango = tango.bind(golf)();
                            oscar = oscar === tango;
                            if(!oscar) { _fun00016_ip = 159; continue _fun00015 }
 127:
                            golf = _closure1_slot25;
                            tango = _closure1_slot12;
                            tango = tango.MESSAGE_SENT;
                            tango = golf.bind(zulu)(tango);
                            SaveGenerator(address=150);
 148:
                            return tango;
 150:
                            ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                            oscar = tango;
                            if(golf) { _fun00016_ip = 201; continue _fun00015 }
 159:
                            if(!oscar) { _fun00016_ip = 204; continue _fun00015 }
 162:
                            options = _closure1_slot29;
                            oscar = _closure1_slot12;
                            golf = oscar.MESSAGE_SENT;
                            report = _closure1_slot14;
                            oscar = report.MESSAGE_SENT;
                            report = 1000;
                            report = options.bind(zulu)(golf, oscar, report);
                            _fun00016_ip = 204; continue _fun00015;
 201:
                            return tango;
 204:
                            return zulu;
 207:
                            return mike;
 210:
                            return entity;
                        }
                    };
                    mike = entity.next;
                    mike = mike.bind(entity)();
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
            tango = tango.bind(zulu)();
            entity['handleMessageCreate'] = tango;
            tango = function() {
                tango = _closure1_slot8;
                zulu = undefined;
                mike = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(mike) { _fun00018_ip = 211; continue _fun00017 }
 10:
                            mike = argFoo;
                            tango = mike.invite;
                            zulu = undefined;
                            SaveGenerator(address=25);
 23:
                            return zulu;
 25:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(report) { _fun00018_ip = 208; continue _fun00017 }
 34:
                            report = tango.guild;
                            tango = null;
                            oscar = tango == report;
                            golf = undefined;
                            if(oscar) { _fun00018_ip = 56; continue _fun00017 }
 50:
                            golf = report.features;
 56:
                            if(!(tango == golf)) { _fun00018_ip = 64; continue _fun00017 }
 60:
                            golf = new Array(0);
 64:
                            oscar = golf.includes;
                            tango = _closure1_slot16;
                            tango = tango.COMMUNITY;
                            tango = oscar.bind(golf)(tango);
                            if(tango) { _fun00018_ip = 205; continue _fun00017 }
 90:
                            oscar = _closure1_slot25;
                            tango = _closure1_slot12;
                            tango = tango.INVITE_ACCEPTED;
                            tango = oscar.bind(zulu)(tango);
                            SaveGenerator(address=113);
 111:
                            return tango;
 113:
                            ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                            if(oscar) { _fun00018_ip = 202; continue _fun00017 }
 119:
                            oscar = tango;
                            if(oscar) { _fun00018_ip = 160; continue _fun00017 }
 125:
                            options = _closure1_slot27;
                            golf = _closure1_slot12;
                            golf = golf.INVITE_ACCEPTED;
                            golf = options.bind(zulu)(golf);
                            SaveGenerator(address=148);
 146:
                            return golf;
 148:
                            ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                            oscar = golf;
                            if(!options) { _fun00018_ip = 160; continue _fun00017 }
 157:
                            return golf;
 160:
                            if(!oscar) { _fun00018_ip = 205; continue _fun00017 }
 163:
                            options = _closure1_slot29;
                            oscar = _closure1_slot12;
                            golf = oscar.INVITE_ACCEPTED;
                            report = _closure1_slot14;
                            oscar = report.INVITE_ACCEPTED;
                            report = 1000;
                            report = options.bind(zulu)(golf, oscar, report);
                            _fun00018_ip = 205; continue _fun00017;
 202:
                            return tango;
 205:
                            return zulu;
 208:
                            return mike;
 211:
                            return entity;
                        }
                    };
                    mike = entity.next;
                    mike = mike.bind(entity)();
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
            tango = tango.bind(zulu)();
            entity['handleInviteAccept'] = tango;
            mike = function() {
                tango = _closure1_slot8;
                zulu = undefined;
                mike = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(mike) { _fun00020_ip = 178; continue _fun00019 }
 10:
                            mike = argFoo;
                            zulu = mike.relationship;
                            tango = undefined;
                            SaveGenerator(address=25);
 23:
                            return tango;
 25:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(report) { _fun00020_ip = 175; continue _fun00019 }
 34:
                            oscar = zulu.type;
                            zulu = _closure1_slot15;
                            zulu = zulu.PENDING_OUTGOING;
                            oscar = oscar === zulu;
                            if(!oscar) { _fun00020_ip = 132; continue _fun00019 }
 59:
                            golf = _closure1_slot25;
                            zulu = _closure1_slot12;
                            zulu = zulu.FRIEND_REQUEST_SENT;
                            zulu = golf.bind(tango)(zulu);
                            SaveGenerator(address=82);
 80:
                            return zulu;
 82:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                            if(golf) { _fun00020_ip = 172; continue _fun00019 }
 88:
                            golf = zulu;
                            if(golf) { _fun00020_ip = 129; continue _fun00019 }
 94:
                            verify = _closure1_slot27;
                            options = _closure1_slot12;
                            options = options.FRIEND_REQUEST_SENT;
                            options = verify.bind(tango)(options);
                            SaveGenerator(address=117);
 115:
                            return options;
 117:
                            ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                            golf = options;
                            if(!verify) { _fun00020_ip = 129; continue _fun00019 }
 126:
                            return options;
 129:
                            oscar = golf;
 132:
                            if(!oscar) { _fun00020_ip = 169; continue _fun00019 }
 135:
                            options = _closure1_slot29;
                            oscar = _closure1_slot12;
                            golf = oscar.FRIEND_REQUEST_SENT;
                            report = _closure1_slot14;
                            oscar = report.FRIEND_REQUEST_SENT;
                            report = 100;
                            report = options.bind(tango)(golf, oscar, report);
 169:
                            return tango;
 172:
                            return zulu;
 175:
                            return mike;
 178:
                            return entity;
                        }
                    };
                    mike = entity.next;
                    mike = mike.bind(entity)();
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
            mike = mike.bind(zulu)();
            entity['handleSendFriendRequest'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        report = _closure1_slot7;
        mike = undefined;
        tango = argFoo;
        tango = report.bind(mike)(zulu, tango);
        entity = _closure1_slot3;
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    backup = tango;
    mike = new backup[mike](foxtrot);
    mike = mike instanceof Object ? mike : tango;
    tango = 21;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/nuf/native/NotificationPermissionManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();