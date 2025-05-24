// app/modules/nuf/native/NotificationPermissionManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 72: // try_end0
            _fun00002_ip = 76; continue _fun00001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot21 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo, argBar) { // Original name: haveNotSeenPromptSince
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            michal = _closure1_slot11;
            entity = michal.getState;
            entity = entity.bind(michal)();
            entity = entity.promptLastSeen;
            oscard = entity[report];
            entity = null;
            entity = entity == oscard;
            if(entity) { _fun00004_ip = 110; continue _fun00003 }
 39:
            tangon = _closure1_slot19;
            michal = tangon.includes;
            report = michal.bind(tangon)(report);
            tangon = undefined;
            michal = undefined;
            if(!report) { _fun00004_ip = 107; continue _fun00003 }
 60:
            report = _closure1_slot1;
            golfie = _closure1_slot2;
            zuuluu = 16;
            zuuluu = golfie[zuuluu];
            zuuluu = report.bind(tangon)(zuuluu);
            report = zuuluu.bind(tangon)();
            tangon = report.diff;
            zuuluu = 'days';
            tangon = tangon.bind(report)(oscard, zuuluu);
            zuuluu = 1;
            michal = tangon >= zuuluu;
 107:
            entity = michal;
 110:
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function() { // Original name: shouldShowPrompt
        entity = undefined;
        tangon = _closure1_slot24;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot23 = entity;
    entity = function() { // Original name: _shouldShowPrompt
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot8;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 98; continue _fun00005 }
 7:
                    michal = _closure1_slot9;
                    zuuluu = michal.NativePermissionManager;
                    michal = zuuluu.getNotificationAuthorizationStatus;
                    michal = michal.bind(zuuluu)();
                    SaveGenerator(address=34);
 32:
                    return michal;
 34:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00006_ip = 95; continue _fun00005 }
 40:
                    zuuluu = _closure1_slot18;
                    zuuluu = zuuluu.UNDETERMINED;
                    zuuluu = michal === zuuluu;
                    if(zuuluu) { _fun00006_ip = 71; continue _fun00005 }
 57:
                    report = _closure1_slot18;
                    report = report.PROVISIONAL;
                    zuuluu = michal === report;
 71:
                    if(!zuuluu) { _fun00006_ip = 92; continue _fun00005 }
 74:
                    golfie = _closure1_slot22;
                    oscard = undefined;
                    report = argFoo;
                    tangon = 1;
                    zuuluu = golfie.bind(oscard)(report, tangon);
 92:
                    return zuuluu;
 95:
                    return michal;
 98:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot24 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot24 = entity;
    entity = function() { // Original name: shouldShowReactivationPrompt
        entity = undefined;
        tangon = _closure1_slot26;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot25 = entity;
    entity = function() { // Original name: _shouldShowReactivationPrompt
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot8;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 81; continue _fun00007 }
 7:
                    michal = _closure1_slot9;
                    zuuluu = michal.NativePermissionManager;
                    michal = zuuluu.getNotificationAuthorizationStatus;
                    michal = michal.bind(zuuluu)();
                    SaveGenerator(address=34);
 32:
                    return michal;
 34:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00008_ip = 78; continue _fun00007 }
 40:
                    zuuluu = _closure1_slot18;
                    zuuluu = zuuluu.DENIED;
                    zuuluu = michal === zuuluu;
                    if(!zuuluu) { _fun00008_ip = 75; continue _fun00007 }
 57:
                    golfie = _closure1_slot22;
                    oscard = undefined;
                    report = argFoo;
                    tangon = 1;
                    zuuluu = golfie.bind(oscard)(report, tangon);
 75:
                    return zuuluu;
 78:
                    return michal;
 81:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot26 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot26 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: showPrompt
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            entity = argBar;
            var _closure2_slot1 = entity;
            tangon = _closure1_slot20;
            entity = null;
            if(!(entity != tangon)) { _fun00010_ip = 48; continue _fun00009 }
 29:
            entity = global;
            report = entity.clearTimeout;
            tangon = _closure1_slot20;
            entity = undefined;
            entity = report.bind(entity)(tangon);
 48:
            entity = global;
            report = entity.setTimeout;
            entity = undefined;
            tangon = function() {
                verify = _closure1_slot0;
                offset = _closure1_slot2;
                entity = 17;
                zuuluu = offset[entity];
                entity = undefined;
                oscard = verify.bind(entity)(zuuluu);
                report = oscard.setPushPermissionReactivationSeen;
                tangon = _closure2_slot0;
                tangon = report.bind(oscard)(tangon);
                golfie = _closure2_slot1;
                tangon = _closure1_slot1;
                zuuluu = 12;
                zuuluu = offset[zuuluu];
                oscard = tangon.bind(entity)(zuuluu);
                report = oscard.openLazy;
                zuuluu = 14;
                zuuluu = offset[zuuluu];
                option = verify.bind(entity)(zuuluu);
                zuuluu = 13;
                tangon = offset[zuuluu];
                zuuluu = offset.paths;
                tangon = option.bind(entity)(tangon, zuuluu);
                zuuluu = _closure1_slot13;
                michal = {};
                option = 15;
                option = offset[option];
                option = verify.bind(entity)(option);
                option = option.ImpressionNames;
                option = option.PUSH_NOTIFICATION_REACTIVATION_PROMPT;
                michal['impressionName'] = option;
                option = {};
                option['action_location'] = golfie;
                michal['impressionProperties'] = option;
                michal['location'] = golfie;
                michal = report.bind(oscard)(tangon, zuuluu, michal);
                return entity;
            };
            michal = argBaz;
            michal = report.bind(entity)(tangon, michal);
            _closure1_slot20 = michal;
            return entity;
        }
    };
    var _closure1_slot27 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.NativeModules;
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 8;
    option = oscard[tangon];
    option = golfie.bind(entity)(option);
    var _closure1_slot11 = option;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.PermissionPromptType;
    var _closure1_slot12 = option;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    verify = tangon.NOTIFICATION_REACTIVATION_ACTIONSHEET_KEY;
    var _closure1_slot13 = verify;
    tangon = tangon.EventActionLocation;
    var _closure1_slot14 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    verify = tangon.RelationshipTypes;
    var _closure1_slot15 = verify;
    verify = tangon.GuildFeatures;
    var _closure1_slot16 = verify;
    tangon = tangon.AnalyticEvents;
    var _closure1_slot17 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.NotificationAuthorizationStatus;
    var _closure1_slot18 = tangon;
    verify = option.FRIEND_REQUEST_SENT;
    tangon = new Array(2);
    tangon[0] = verify;
    option = option.INVITE_ACCEPTED;
    tangon[1] = option;
    var _closure1_slot19 = tangon;
    tangon = null;
    var _closure1_slot20 = tangon;
    tangon = 20;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        zuuluu = function(argFoo) { // Original name: NotificationPermissionManager
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                oscard = this;
                backup = 0;
                entity = copyRestArgs(backup);
                option = _closure1_slot4;
                report = _closure2_slot0;
                zuuluu = undefined;
                option = option.bind(zuuluu)(oscard, report);
                yankee = new Array(0);
                backup = yankee;
                foxtra = entity;
                romeon = 0;
                entity = arraySpread(backup, foxtra, romeon);
                entity = _closure1_slot6;
                offset = entity.bind(zuuluu)(report);
                report = _closure1_slot5;
                entity = _closure1_slot21;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00012_ip = 86; continue _fun00011 }
 73:
                entity = offset.apply;
                entity = entity.bind(offset)(oscard, yankee);
                _fun00012_ip = 120; continue _fun00011;
 86:
                golfie = global;
                verify = golfie.Reflect;
                option = verify.construct;
                golfie = _closure1_slot6;
                golfie = golfie.bind(zuuluu)(oscard);
                golfie = golfie.constructor;
                entity = option.bind(verify)(offset, yankee, golfie);
 120:
                entity = report.bind(zuuluu)(oscard, entity);
                var _closure3_slot0 = entity;
                report = {};
                oscard = function(argFoo) { // Original name: MESSAGE_CREATE
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.handleMessageCreate;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                report['MESSAGE_CREATE'] = oscard;
                oscard = function(argFoo) { // Original name: INVITE_ACCEPT_SUCCESS
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.handleInviteAccept;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                report['INVITE_ACCEPT_SUCCESS'] = oscard;
                oscard = function(argFoo) { // Original name: RELATIONSHIP_ADD
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.handleSendFriendRequest;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                report['RELATIONSHIP_ADD'] = oscard;
                oscard = function() { // Original name: POST_CONNECTION_OPEN
                    michal = _closure3_slot0;
                    entity = michal.handleConnectionOpen;
                    entity = entity.bind(michal)();
                    entity = undefined;
                    return entity;
                };
                report['POST_CONNECTION_OPEN'] = oscard;
                entity['actions'] = report;
                report = _closure1_slot8;
                tangon = function* () {
                    entity = function* () { // Original name: ?anon_0_
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(michal) { _fun00014_ip = 153; continue _fun00013 }
 10:
                            michal = _closure1_slot9;
                            zuuluu = michal.NativePermissionManager;
                            michal = zuuluu.getNotificationAuthorizationStatus;
                            michal = michal.bind(zuuluu)();
                            SaveGenerator(address=37);
 35:
                            return michal;
 37:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(zuuluu) { _fun00014_ip = 150; continue _fun00013 }
 43:
                            report = _closure1_slot0;
                            oscard = _closure1_slot2;
                            zuuluu = 18;
                            tangon = oscard[zuuluu];
                            zuuluu = undefined;
                            report = report.bind(zuuluu)(tangon);
                            tangon = report.allowInAppNotifications;
                            option = tangon.bind(report)();
                            report = _closure1_slot1;
                            tangon = 19;
                            tangon = oscard[tangon];
                            golfie = report.bind(zuuluu)(tangon);
                            oscard = golfie.track;
                            tangon = _closure1_slot17;
                            report = tangon.NOTIFICATION_PERMISSION_STATUS;
                            tangon = {};
                            verify = _closure1_slot18;
                            verify = verify.AUTHORIZED;
                            verify = michal === verify;
                            tangon['os_enabled'] = verify;
                            tangon['foreground_app_enabled'] = option;
                            tangon['background_app_enabled'] = option;
                            tangon = oscard.bind(golfie)(report, tangon);
                            return zuuluu;
 150:
                            return michal;
 153:
                            return entity;
                        }
                    };
                    return entity;
                };
                tangon = report.bind(zuuluu)(tangon);
                entity['handleConnectionOpen'] = tangon;
                tangon = function() {
                    tangon = _closure1_slot8;
                    zuuluu = undefined;
                    michal = function* (argFoo) {
                        entity = function* (argFoo) { // Original name: ?anon_0_
                            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                                StartGenerator();
                                michal = argFoo;
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                                if(zuuluu) { _fun00016_ip = 210; continue _fun00015 }
 13:
                                tangon = michal.message;
                                report = michal.optimistic;
                                oscard = michal.isPushNotification;
                                golfie = michal.sendMessageOptions;
                                zuuluu = undefined;
                                SaveGenerator(address=42);
 40:
                                return zuuluu;
 42:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                                if(option) { _fun00016_ip = 207; continue _fun00015 }
 51:
                                if(report) { _fun00016_ip = 57; continue _fun00015 }
 54:
                                report = oscard;
 57:
                                if(report) { _fun00016_ip = 66; continue _fun00015 }
 60:
                                oscard = null;
                                report = oscard != golfie;
 66:
                                if(report) { _fun00016_ip = 204; continue _fun00015 }
 72:
                                report = null;
                                golfie = report == tangon;
                                oscard = undefined;
                                if(golfie) { _fun00016_ip = 103; continue _fun00015 }
 83:
                                tangon = tangon.author;
                                report = report == tangon;
                                oscard = undefined;
                                if(report) { _fun00016_ip = 103; continue _fun00015 }
 98:
                                oscard = tangon.id;
 103:
                                golfie = _closure1_slot10;
                                tangon = golfie.getId;
                                tangon = tangon.bind(golfie)();
                                oscard = oscard === tangon;
                                if(!oscard) { _fun00016_ip = 159; continue _fun00015 }
 127:
                                golfie = _closure1_slot23;
                                tangon = _closure1_slot12;
                                tangon = tangon.MESSAGE_SENT;
                                tangon = golfie.bind(zuuluu)(tangon);
                                SaveGenerator(address=150);
 148:
                                return tangon;
 150:
                                ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                                oscard = tangon;
                                if(golfie) { _fun00016_ip = 201; continue _fun00015 }
 159:
                                if(!oscard) { _fun00016_ip = 204; continue _fun00015 }
 162:
                                option = _closure1_slot27;
                                oscard = _closure1_slot12;
                                golfie = oscard.MESSAGE_SENT;
                                report = _closure1_slot14;
                                oscard = report.MESSAGE_SENT;
                                report = 1000;
                                report = option.bind(zuuluu)(golfie, oscard, report);
                                _fun00016_ip = 204; continue _fun00015;
 201:
                                return tangon;
 204:
                                return zuuluu;
 207:
                                return michal;
 210:
                                return entity;
                            }
                        };
                        michal = entity.next;
                        michal = michal.bind(entity)();
                        return entity;
                    };
                    michal = tangon.bind(zuuluu)(michal);
                    var _closure4_slot0 = michal;
                    entity = function() {
                        entity = undefined;
                        tangon = _closure4_slot0;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    return entity;
                };
                tangon = tangon.bind(zuuluu)();
                entity['handleMessageCreate'] = tangon;
                tangon = function() {
                    tangon = _closure1_slot8;
                    zuuluu = undefined;
                    michal = function* (argFoo) {
                        entity = function* (argFoo) { // Original name: ?anon_0_
                            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(michal) { _fun00018_ip = 211; continue _fun00017 }
 10:
                                michal = argFoo;
                                tangon = michal.invite;
                                zuuluu = undefined;
                                SaveGenerator(address=25);
 23:
                                return zuuluu;
 25:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                if(report) { _fun00018_ip = 208; continue _fun00017 }
 34:
                                report = tangon.guild;
                                tangon = null;
                                oscard = tangon == report;
                                golfie = undefined;
                                if(oscard) { _fun00018_ip = 56; continue _fun00017 }
 50:
                                golfie = report.features;
 56:
                                if(!(tangon == golfie)) { _fun00018_ip = 64; continue _fun00017 }
 60:
                                golfie = new Array(0);
 64:
                                oscard = golfie.includes;
                                tangon = _closure1_slot16;
                                tangon = tangon.COMMUNITY;
                                tangon = oscard.bind(golfie)(tangon);
                                if(tangon) { _fun00018_ip = 205; continue _fun00017 }
 90:
                                oscard = _closure1_slot23;
                                tangon = _closure1_slot12;
                                tangon = tangon.INVITE_ACCEPTED;
                                tangon = oscard.bind(zuuluu)(tangon);
                                SaveGenerator(address=113);
 111:
                                return tangon;
 113:
                                ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                                if(oscard) { _fun00018_ip = 202; continue _fun00017 }
 119:
                                oscard = tangon;
                                if(oscard) { _fun00018_ip = 160; continue _fun00017 }
 125:
                                option = _closure1_slot25;
                                golfie = _closure1_slot12;
                                golfie = golfie.INVITE_ACCEPTED;
                                golfie = option.bind(zuuluu)(golfie);
                                SaveGenerator(address=148);
 146:
                                return golfie;
 148:
                                ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                                oscard = golfie;
                                if(!option) { _fun00018_ip = 160; continue _fun00017 }
 157:
                                return golfie;
 160:
                                if(!oscard) { _fun00018_ip = 205; continue _fun00017 }
 163:
                                option = _closure1_slot27;
                                oscard = _closure1_slot12;
                                golfie = oscard.INVITE_ACCEPTED;
                                report = _closure1_slot14;
                                oscard = report.INVITE_ACCEPTED;
                                report = 1000;
                                report = option.bind(zuuluu)(golfie, oscard, report);
                                _fun00018_ip = 205; continue _fun00017;
 202:
                                return tangon;
 205:
                                return zuuluu;
 208:
                                return michal;
 211:
                                return entity;
                            }
                        };
                        michal = entity.next;
                        michal = michal.bind(entity)();
                        return entity;
                    };
                    michal = tangon.bind(zuuluu)(michal);
                    var _closure4_slot0 = michal;
                    entity = function() {
                        entity = undefined;
                        tangon = _closure4_slot0;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    return entity;
                };
                tangon = tangon.bind(zuuluu)();
                entity['handleInviteAccept'] = tangon;
                michal = function() {
                    tangon = _closure1_slot8;
                    zuuluu = undefined;
                    michal = function* (argFoo) {
                        entity = function* (argFoo) { // Original name: ?anon_0_
                            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(michal) { _fun00020_ip = 178; continue _fun00019 }
 10:
                                michal = argFoo;
                                zuuluu = michal.relationship;
                                tangon = undefined;
                                SaveGenerator(address=25);
 23:
                                return tangon;
 25:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                if(report) { _fun00020_ip = 175; continue _fun00019 }
 34:
                                oscard = zuuluu.type;
                                zuuluu = _closure1_slot15;
                                zuuluu = zuuluu.PENDING_OUTGOING;
                                oscard = oscard === zuuluu;
                                if(!oscard) { _fun00020_ip = 132; continue _fun00019 }
 59:
                                golfie = _closure1_slot23;
                                zuuluu = _closure1_slot12;
                                zuuluu = zuuluu.FRIEND_REQUEST_SENT;
                                zuuluu = golfie.bind(tangon)(zuuluu);
                                SaveGenerator(address=82);
 80:
                                return zuuluu;
 82:
                                ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                                if(golfie) { _fun00020_ip = 172; continue _fun00019 }
 88:
                                golfie = zuuluu;
                                if(golfie) { _fun00020_ip = 129; continue _fun00019 }
 94:
                                verify = _closure1_slot25;
                                option = _closure1_slot12;
                                option = option.FRIEND_REQUEST_SENT;
                                option = verify.bind(tangon)(option);
                                SaveGenerator(address=117);
 115:
                                return option;
 117:
                                ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                                golfie = option;
                                if(!verify) { _fun00020_ip = 129; continue _fun00019 }
 126:
                                return option;
 129:
                                oscard = golfie;
 132:
                                if(!oscard) { _fun00020_ip = 169; continue _fun00019 }
 135:
                                option = _closure1_slot27;
                                oscard = _closure1_slot12;
                                golfie = oscard.FRIEND_REQUEST_SENT;
                                report = _closure1_slot14;
                                oscard = report.FRIEND_REQUEST_SENT;
                                report = 100;
                                report = option.bind(tangon)(golfie, oscard, report);
 169:
                                return tangon;
 172:
                                return zuuluu;
 175:
                                return michal;
 178:
                                return entity;
                            }
                        };
                        michal = entity.next;
                        michal = michal.bind(entity)();
                        return entity;
                    };
                    michal = tangon.bind(zuuluu)(michal);
                    var _closure4_slot0 = michal;
                    entity = function() {
                        entity = undefined;
                        tangon = _closure4_slot0;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    return entity;
                };
                michal = michal.bind(zuuluu)();
                entity['handleSendFriendRequest'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        report = _closure1_slot7;
        michal = undefined;
        tangon = argFoo;
        tangon = report.bind(michal)(zuuluu, tangon);
        entity = _closure1_slot3;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 21;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/nuf/native/NotificationPermissionManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();