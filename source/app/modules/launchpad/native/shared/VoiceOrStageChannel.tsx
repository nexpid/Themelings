// app/modules/launchpad/native/shared/VoiceOrStageChannel.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: getStageChannelAccessibilityProps
        _fun121100: for(var _fun121100_ip = 0; ; ) switch(_fun121100_ip) {
 0:
            entity = argFoo;
            options = entity.channelName;
            oscar = entity.channel;
            golf = entity.userCount;
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            offset = 12;
            tango = mike[offset];
            verify = undefined;
            tango = zulu.bind(verify)(tango);
            report = tango.intl;
            tango = report.formatToPlainString;
            mike = mike[offset];
            mike = zulu.bind(verify)(mike);
            mike = mike.t;
            zulu = mike.TPPk2d;
            mike = {};
            mike['channelName'] = options;
            mike = tango.bind(report)(zulu, mike);
            tango = oscar.userLimit;
            zulu = null;
            if(!(zulu != tango)) { _fun121100_ip = 112; continue _fun121100 }
 100:
            tango = oscar.userLimit;
            zulu = 0;
            if(!(!(tango > zulu))) { _fun121100_ip = 188; continue _fun121100 }
 112:
            zulu = 0;
            if(!(golf > zulu)) { _fun121100_ip = 264; continue _fun121100 }
 121:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            report = zulu[offset];
            report = tango.bind(verify)(report);
            yankee = report.intl;
            report = yankee.formatToPlainString;
            zulu = zulu[offset];
            zulu = tango.bind(verify)(zulu);
            zulu = zulu.t;
            tango = zulu.7yr3QU;
            zulu = {};
            zulu['channelName'] = options;
            zulu['userCount'] = golf;
            mike = report.bind(yankee)(tango, zulu);
            _fun121100_ip = 264; continue _fun121100;
 188:
            zulu = _closure1_slot0;
            entity = _closure1_slot2;
            tango = entity[offset];
            tango = zulu.bind(verify)(tango);
            report = tango.intl;
            tango = report.formatToPlainString;
            entity = entity[offset];
            entity = zulu.bind(verify)(entity);
            entity = entity.t;
            zulu = entity.rhh6Eh;
            entity = {};
            entity['channelName'] = options;
            entity['userCount'] = golf;
            oscar = oscar.userLimit;
            entity['limit'] = oscar;
            mike = tango.bind(report)(zulu, entity);
 264:
            entity = {'accessible': true, 'accessibilityRole': 'button'};
            entity['accessibilityLabel'] = mike;
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function() { // Original name: handleVoiceOrStageChannelConnectPress
        entity = undefined;
        tango = _closure1_slot21;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot20 = entity;
    entity = function() { // Original name: _handleVoiceOrStageChannelConnectPress
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun121104: for(var _fun121104_ip = 0; ; ) switch(_fun121104_ip) {
 0:
                    StartGenerator();
                    report = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun121104_ip = 147; continue _fun121104 }
 13:
                    mike = report.isGuildStageVoice;
                    tango = mike.bind(report)();
                    golf = _closure1_slot0;
                    mike = _closure1_slot2;
                    zulu = 14;
                    oscar = mike[zulu];
                    zulu = undefined;
                    oscar = golf.bind(zulu)(oscar);
                    if(tango) { _fun121104_ip = 102; continue _fun121104 }
 51:
                    tango = 15;
                    golf = mike[tango];
                    tango = mike.paths;
                    tango = oscar.bind(zulu)(golf, tango);
                    SaveGenerator(address=73);
 71:
                    return tango;
 73:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(golf) { _fun121104_ip = 99; continue _fun121104 }
 79:
                    options = tango.openGuildVoiceModal;
                    golf = 'Channel List';
                    golf = options.bind(zulu)(report, golf);
                    _fun121104_ip = 141; continue _fun121104;
 99:
                    return tango;
 102:
                    tango = 13;
                    tango = mike[tango];
                    mike = mike.paths;
                    mike = oscar.bind(zulu)(tango, mike);
                    SaveGenerator(address=124);
 122:
                    return mike;
 124:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun121104_ip = 144; continue _fun121104 }
 130:
                    tango = mike.connectAndOpen;
                    tango = tango.bind(zulu)(report);
 141:
                    return zulu;
 144:
                    return mike;
 147:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot21 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo) { // Original name: useVoiceChannelPressEvents
        zulu = argFoo;
        var _closure2_slot0 = zulu;
        tango = function() { // Original name: useVoiceChannelOnPressHandler
            tango = _closure1_slot4;
            zulu = tango.useCallback;
            mike = function() {
                tango = _closure1_slot3;
                zulu = undefined;
                mike = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun121109: for(var _fun121109_ip = 0; ; ) switch(_fun121109_ip) {
 0:
                            StartGenerator();
                            report = argFoo;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(mike) { _fun121109_ip = 269; continue _fun121109 }
 15:
                            var _closure6_slot0 = report;
                            oscar = _closure1_slot0;
                            golf = _closure1_slot2;
                            zulu = 16;
                            zulu = golf[zulu];
                            golf = undefined;
                            options = oscar.bind(golf)(zulu);
                            oscar = options.getChannelRoleSubscriptionStatus;
                            zulu = report.id;
                            zulu = oscar.bind(options)(zulu);
                            zulu = zulu.needSubscriptionToAccess;
                            oscar = report.getGuildId;
                            oscar = oscar.bind(report)();
                            options = null;
                            if(!(options != oscar)) { _fun121109_ip = 116; continue _fun121109 }
 82:
                            verify = _closure1_slot0;
                            offset = _closure1_slot2;
                            options = 17;
                            options = offset[options];
                            verify = verify.bind(golf)(options);
                            options = verify.shouldShowMembershipVerificationGate;
                            options = options.bind(verify)(oscar);
                            if(options) { _fun121109_ip = 196; continue _fun121109 }
 116:
                            if(zulu) { _fun121109_ip = 132; continue _fun121109 }
 119:
                            zulu = _closure1_slot20;
                            zulu = zulu.bind(golf)(report);
                            zulu = undefined;
                            _fun121109_ip = 194; continue _fun121109;
 132:
                            verify = _closure1_slot0;
                            offset = _closure1_slot2;
                            options = 19;
                            options = offset[options];
                            verify = verify.bind(golf)(options);
                            options = verify.transitionTo;
                            romeo = _closure1_slot11;
                            yankee = romeo.CHANNEL;
                            offset = report.guild_id;
                            report = _closure1_slot12;
                            report = report.ROLE_SUBSCRIPTIONS;
                            report = yankee.bind(romeo)(offset, report);
                            zulu = options.bind(verify)(report);
 194:
                            _fun121109_ip = 263; continue _fun121109;
 196:
                            options = _closure1_slot0;
                            mike = _closure1_slot2;
                            report = 14;
                            report = mike[report];
                            options = options.bind(golf)(report);
                            report = 18;
                            report = mike[report];
                            mike = mike.paths;
                            mike = options.bind(golf)(report, mike);
                            SaveGenerator(address=238);
 236:
                            return mike;
 238:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(report) { _fun121109_ip = 266; continue _fun121109 }
 244:
                            report = mike.openMemberVerificationModal;
                            tango = function() {
                                zulu = _closure1_slot20;
                                mike = _closure6_slot0;
                                entity = undefined;
                                entity = zulu.bind(entity)(mike);
                                return entity;
                            };
                            zulu = report.bind(golf)(oscar, tango);
 263:
                            return zulu;
 266:
                            return mike;
 269:
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
            entity = new Array(0);
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        entity = undefined;
        report = tango.bind(entity)();
        var _closure2_slot1 = report;
        entity = {};
        options = _closure1_slot4;
        golf = options.useCallback;
        oscar = new Array(2);
        oscar[0] = zulu;
        oscar[1] = report;
        report = function() {
            _fun121112: for(var _fun121112_ip = 0; ; ) switch(_fun121112_ip) {
 0:
                entity = _closure2_slot0;
                zulu = entity.guild_id;
                entity = null;
                if(!(entity != zulu)) { _fun121112_ip = 63; continue _fun121112 }
 18:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 20;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.transitionToGuild;
                entity = _closure2_slot0;
                entity = entity.guild_id;
                entity = zulu.bind(tango)(entity);
 63:
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 21;
                zulu = zulu[entity];
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                zulu = zulu.bind(entity)();
                zulu = _closure2_slot1;
                mike = _closure2_slot0;
                mike = zulu.bind(entity)(mike);
                return entity;
            }
        };
        report = golf.bind(options)(report, oscar);
        entity['onPress'] = report;
        report = _closure1_slot4;
        tango = report.useCallback;
        oscar = zulu.id;
        zulu = new Array(1);
        zulu[0] = oscar;
        mike = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 22;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.openChannelLongPressActionSheet;
            entity = _closure2_slot0;
            entity = entity.id;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = tango.bind(report)(mike, zulu);
        entity['onLongPress'] = mike;
        return entity;
    };
    var _closure1_slot22 = entity;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argCorge;
    golf = tango.bind(entity)(golf);
    var _closure1_slot4 = golf;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Routes;
    var _closure1_slot11 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.StaticChannelRoute;
    var _closure1_slot12 = tango;
    tango = 10;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.getThemedRippleConfig;
    var _closure1_slot13 = tango;
    tango = 11;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot14 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot15 = tango;
    tango = 23;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = function(argFoo, argBar) {
        _fun121114: for(var _fun121114_ip = 0; ; ) switch(_fun121114_ip) {
 0:
            yankee = argBar;
            entity = {};
            options = -2;
            mike = {'display': 'flex', 'flexDirection': 'row', 'paddingRight': 16, 'marginTop': 4294967294};
            entity['voiceUsers'] = mike;
            mike = {};
            verify = 1;
            mike['flex'] = verify;
            entity['pressable'] = mike;
            mike = {'borderRadius': null, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
            offset = _closure1_slot1;
            golf = _closure1_slot2;
            oscar = 24;
            tango = golf[oscar];
            report = undefined;
            tango = offset.bind(report)(tango);
            tango = tango.radii;
            tango = tango.round;
            mike['borderRadius'] = tango;
            tango = 'center';
            entity['joinButton'] = mike;
            mike = {'width': 'auto', 'flexDirection': 'row', 'alignItems': 'center'};
            entity['joinButtonContent'] = mike;
            mike = {};
            romeo = golf[oscar];
            romeo = offset.bind(report)(romeo);
            romeo = romeo.colors;
            romeo = romeo.STATUS_DANGER;
            mike['backgroundColor'] = romeo;
            entity['joinButtonLive'] = mike;
            mike = {};
            romeo = 'uppercase';
            mike['textTransform'] = romeo;
            entity['joinButtonLiveText'] = mike;
            mike = {};
            romeo = golf[oscar];
            romeo = offset.bind(report)(romeo);
            romeo = romeo.colors;
            romeo = romeo.STATUS_POSITIVE;
            mike['backgroundColor'] = romeo;
            entity['joinButtonActive'] = mike;
            mike = {};
            golf = golf[oscar];
            golf = offset.bind(report)(golf);
            golf = golf.colors;
            golf = golf.BG_BASE_PRIMARY;
            mike['backgroundColor'] = golf;
            offset = argFoo;
            golf = verify;
            if(!offset) { _fun121114_ip = 242; continue _fun121114 }
 240:
            golf = 0;
 242:
            mike['elevation'] = golf;
            golf = 4;
            mike['shadowRadius'] = golf;
            offset = {'width': 0, 'height': 1};
            mike['shadowOffset'] = offset;
            romeo = _closure1_slot1;
            offset = _closure1_slot2;
            offset = offset[oscar];
            offset = romeo.bind(report)(offset);
            offset = offset.colors;
            offset = offset.BLACK;
            mike['shadowColor'] = offset;
            offset = 0.14;
            if(!yankee) { _fun121114_ip = 326; continue _fun121114 }
 316:
            offset = 0.08;
 326:
            mike['shadowOpacity'] = offset;
            offset = 'rgba(255, 255, 255, 0.14)';
            if(!yankee) { _fun121114_ip = 346; continue _fun121114 }
 340:
            offset = 'rgba(0, 0, 0, 0.08)';
 346:
            mike['borderColor'] = offset;
            mike['borderWidth'] = verify;
            entity['joinButtonInactive'] = mike;
            mike = {'marginRight': 2, 'flex': 1, 'alignItems': 'center', 'justifyContent': 'center'};
            entity['joinButtonIconWrapper'] = mike;
            mike = {};
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            verify = yankee[oscar];
            verify = offset.bind(report)(verify);
            verify = verify.colors;
            verify = verify.WHITE;
            mike['tintColor'] = verify;
            entity['joinButtonIconActive'] = mike;
            mike = {};
            verify = yankee[oscar];
            verify = offset.bind(report)(verify);
            verify = verify.colors;
            verify = verify.INTERACTIVE_NORMAL;
            mike['tintColor'] = verify;
            entity['joinButtonIconInactive'] = mike;
            mike = {};
            offset = _closure1_slot0;
            verify = 25;
            verify = yankee[verify];
            offset = offset.bind(report)(verify);
            verify = offset.isAndroid;
            verify = verify.bind(offset)();
            golf = 0;
            if(!verify) { _fun121114_ip = 489; continue _fun121114 }
 486:
            golf = options;
 489:
            mike['marginTop'] = golf;
            mike['alignSelf'] = tango;
            entity['joinButtonText'] = mike;
            mike = {'backgroundColor': null, 'width': 8, 'height': 8};
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            golf = zulu[oscar];
            golf = tango.bind(report)(golf);
            golf = golf.colors;
            golf = golf.WHITE;
            mike['backgroundColor'] = golf;
            zulu = zulu[oscar];
            zulu = tango.bind(report)(zulu);
            zulu = zulu.radii;
            zulu = zulu.round;
            mike['borderRadius'] = zulu;
            entity['liveIcon'] = mike;
            return entity;
        }
    };
    tango = options.bind(verify)(tango);
    var _closure1_slot16 = tango;
    tango = new Array(0);
    var _closure1_slot17 = tango;
    options = golf.memo;
    tango = function(argFoo) { // Original name: UnmemoedVoiceOrStageChannelBase
        _fun121115: for(var _fun121115_ip = 0; ; ) switch(_fun121115_ip) {
 0:
            mike = argFoo;
            backup = mike.channel;
            var _closure2_slot0 = backup;
            lima = mike.subtitle;
            var _closure2_slot1 = lima;
            options = mike.voiceStates;
            zulu = undefined;
            if(!(options === zulu)) { _fun121115_ip = 43; continue _fun121115 }
 36:
            options = _closure1_slot17;
 43:
            mike = mike.speakerVoiceStates;
            if(!(mike === zulu)) { _fun121115_ip = 60; continue _fun121115 }
 53:
            mike = _closure1_slot17;
 60:
            sierra = backup.id;
            status = backup.guild_id;
            report = _closure1_slot1;
            foxtrot = _closure1_slot2;
            tango = 26;
            tango = foxtrot[tango];
            tango = report.bind(zulu)(tango);
            romeo = tango.bind(zulu)();
            tango = 27;
            tango = foxtrot[tango];
            tango = report.bind(zulu)(tango);
            golf = tango.bind(zulu)();
            oscar = _closure1_slot16;
            offset = _closure1_slot0;
            tango = 28;
            tango = foxtrot[tango];
            verify = offset.bind(zulu)(tango);
            tango = verify.isThemeLight;
            tango = tango.bind(verify)(romeo);
            romeo = oscar.bind(zulu)(golf, tango);
            tango = 29;
            tango = foxtrot[tango];
            tango = report.bind(zulu)(tango);
            sizing = tango.bind(zulu)();
            tango = 30;
            tango = foxtrot[tango];
            report = offset.bind(zulu)(tango);
            tango = report.useIsConnectedToVoiceChannel;
            update = tango.bind(report)(backup);
            tango = 31;
            tango = foxtrot[tango];
            oscar = offset.bind(zulu)(tango);
            report = oscar.useBaseChannelUnreadBadgeState;
            tango = !update;
            tango = report.bind(oscar)(backup, tango);
            vacuum = tango.unread;
            record = tango.mentionCount;
            report = 32;
            tango = foxtrot[report];
            verify = offset.bind(zulu)(tango);
            golf = verify.useStateFromStores;
            tango = _closure1_slot9;
            oscar = new Array(1);
            oscar[0] = tango;
            tango = function() {
                zulu = _closure1_slot9;
                mike = zulu.resolveUnreadSetting;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            control = golf.bind(verify)(oscar, tango);
            tango = 33;
            tango = foxtrot[tango];
            verify = offset.bind(zulu)(tango);
            golf = verify.useStageParticipantsCount;
            oscar = backup.id;
            tango = 34;
            tango = foxtrot[tango];
            tango = offset.bind(zulu)(tango);
            tango = tango.StageChannelParticipantNamedIndex;
            tango = tango.AUDIENCE;
            foxtrot = golf.bind(verify)(oscar, tango);
            tango = options.length;
            tango = foxtrot + tango;
            verify = 0;
            oscar = null;
            target = 0;
            if(!(oscar != tango)) { _fun121115_ip = 345; continue _fun121115 }
 342:
            target = tango;
 345:
            tango = _closure1_slot22;
            context = tango.bind(zulu)(backup);
            offset = _closure1_slot1;
            tango = _closure1_slot2;
            golf = 35;
            golf = tango[golf];
            golf = offset.bind(zulu)(golf);
            config = golf.bind(zulu)(backup);
            kilo = _closure1_slot0;
            golf = 36;
            offset = tango[golf];
            result = kilo.bind(zulu)(offset);
            output = result.getChannelAccessibilityProps;
            offset = {};
            offset['channel'] = backup;
            offset['unread'] = vacuum;
            offset['mentionCount'] = record;
            offset['userCount'] = target;
            echo = config.length;
            offset['embeddedActivitiesCount'] = echo;
            offset = output.bind(result)(offset);
            tango = tango[report];
            echo = kilo.bind(zulu)(tango);
            result = echo.useStateFromStores;
            tango = _closure1_slot7;
            output = new Array(1);
            output[0] = tango;
            tango = backup.id;
            kilo = new Array(1);
            kilo[0] = tango;
            tango = function() {
                zulu = _closure1_slot7;
                mike = zulu.getStageInstanceByChannel;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            source = result.bind(echo)(output, tango, kilo);
            tango = oscar == source;
            whiskey = undefined;
            if(tango) { _fun121115_ip = 505; continue _fun121115 }
 499:
            whiskey = source.topic;
 505:
            kilo = _closure1_slot1;
            output = _closure1_slot2;
            tango = 37;
            tango = output[tango];
            kilo = kilo.bind(zulu)(tango);
            tango = false;
            equality = kilo.bind(zulu)(backup, tango);
            tango = backup.isGuildStageVoice;
            tango = tango.bind(backup)();
            kilo = options;
            if(!tango) { _fun121115_ip = 552; continue _fun121115 }
 549:
            kilo = mike;
 552:
            tango = kilo.map;
            mike = function(argFoo) {
                entity = argFoo;
                entity = entity.user;
                return entity;
            };
            kilo = tango.bind(kilo)(mike);
            mike = _closure1_slot1;
            papa = _closure1_slot2;
            tango = 38;
            tango = papa[tango];
            tango = mike.bind(zulu)(tango);
            variable36 = tango.bind(zulu)();
            tango = _closure1_slot0;
            output = 39;
            output = papa[output];
            result = tango.bind(zulu)(output);
            output = result.useFontScale;
            echo = output.bind(result)();
            report = papa[report];
            sequence = tango.bind(zulu)(report);
            result = sequence.useStateFromStores;
            report = _closure1_slot8;
            output = new Array(1);
            output[0] = report;
            report = function() {
                entity = _closure1_slot8;
                entity = entity.locale;
                return entity;
            };
            sequence = result.bind(sequence)(output, report);
            report = 16;
            report = papa[report];
            output = mike.bind(zulu)(report);
            report = backup.id;
            report = output.bind(zulu)(report);
            result = report.isSubscriptionGated;
            output = report.needSubscriptionToAccess;
            variable37 = _closure1_slot4;
            quebec = variable37.useEffect;
            report = new Array(2);
            report[0] = update;
            report[1] = lima;
            entity = function() {
                _fun121120: for(var _fun121120_ip = 0; ; ) switch(_fun121120_ip) {
 0:
                    zulu = _closure2_slot1;
                    mike = null;
                    mike = mike != zulu;
                    if(!mike) { _fun121120_ip = 31; continue _fun121120 }
 16:
                    zulu = _closure2_slot1;
                    tango = 'string';
                    zulu = typeof zulu;
                    mike = tango !== zulu;
 31:
                    if(!mike) { _fun121120_ip = 51; continue _fun121120 }
 34:
                    zulu = _closure2_slot1;
                    tango = zulu.type;
                    zulu = 'voice';
                    mike = zulu === tango;
 51:
                    if(!mike) { _fun121120_ip = 105; continue _fun121120 }
 54:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 40;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
                    zulu = mike.messagePreviewASTCache;
                    mike = zulu.del;
                    entity = _closure2_slot1;
                    entity = entity.text;
                    entity = mike.bind(zulu)(entity);
 105:
                    entity = undefined;
                    return entity;
                }
            };
            entity = quebec.bind(variable37)(entity, report);
            entity = 41;
            entity = papa[entity];
            mike = mike.bind(zulu)(entity);
            report = _closure1_slot15;
            entity = 42;
            entity = papa[entity];
            entity = tango.bind(zulu)(entity);
            tango = entity.PressableHighlight;
            entity = {};
            quebec = romeo.pressable;
            papa = new Array(2);
            papa[0] = quebec;
            quebec = {};
            variable37 = options.length;
            variable38 = variable37 > verify;
            variable37 = 0;
            if(!variable38) { _fun121115_ip = 795; continue _fun121115 }
 792:
            variable37 = 6;
 795:
            quebec['paddingBottom'] = variable37;
            variable37 = sizing.container;
            variable37 = variable37.borderRadius;
            quebec['borderRadius'] = variable37;
            papa[1] = quebec;
            entity['style'] = papa;
            entity['underlayColor'] = variable36;
            quebec = _closure1_slot13;
            papa = {};
            papa['color'] = variable36;
            papa = quebec.bind(zulu)(papa);
            entity['androidRippleConfig'] = papa;
            variable41 = entity;
            variable40 = context;
            context = copyDataProperties(variable41, variable40);
            context = backup.isGuildStageVoice;
            context = context.bind(backup)();
            if(!context) { _fun121115_ip = 895; continue _fun121115 }
 870:
            papa = _closure1_slot19;
            context = {};
            context['channelName'] = equality;
            context['channel'] = backup;
            context['userCount'] = target;
            offset = papa.bind(zulu)(context);
 895:
            variable41 = entity;
            variable40 = offset;
            offset = copyDataProperties(variable41, variable40);
            offset = _closure1_slot1;
            target = _closure1_slot2;
            golf = target[golf];
            offset = offset.bind(zulu)(golf);
            golf = {};
            golf['channel'] = backup;
            papa = _closure1_slot0;
            context = 43;
            context = target[context];
            target = papa.bind(zulu)(context);
            papa = target.renderChannelSubtitle;
            context = {};
            if(!(oscar != whiskey)) { _fun121115_ip = 959; continue _fun121115 }
 956:
            lima = whiskey;
 959:
            context['subtitle'] = lima;
            context['channelId'] = sierra;
            context['guildId'] = status;
            context['connected'] = update;
            context = papa.bind(target)(context);
            golf['subtitle'] = context;
            if(vacuum) { _fun121115_ip = 994; continue _fun121115 }
 990:
            vacuum = record > verify;
 994:
            golf['unread'] = vacuum;
            golf['resolvedUnreadSetting'] = control;
            golf['mentionCount'] = record;
            vacuum = _closure1_slot1;
            context = _closure1_slot2;
            control = 44;
            control = context[control];
            vacuum = vacuum.bind(zulu)(control);
            control = {};
            control['mentionCount'] = record;
            control['locale'] = sequence;
            control = vacuum.bind(zulu)(control);
            golf['mentionBadge'] = control;
            source = oscar != source;
            golf['live'] = source;
            source = config.length;
            if(!(!(source > verify))) { _fun121115_ip = 1117; continue _fun121115 }
 1068:
            vacuum = _closure1_slot14;
            control = _closure1_slot0;
            sequence = _closure1_slot2;
            source = 46;
            source = sequence[source];
            source = control.bind(zulu)(source);
            control = source.VocalChannelJoinButton;
            source = {};
            source['channel'] = backup;
            source['voiceStates'] = options;
            source = vacuum.bind(zulu)(control, source);
            _fun121115_ip = 1175; continue _fun121115;
 1117:
            sequence = _closure1_slot14;
            vacuum = _closure1_slot1;
            record = _closure1_slot2;
            control = 45;
            control = record[control];
            vacuum = vacuum.bind(zulu)(control);
            control = {};
            control['embeddedApps'] = config;
            config = sizing.joinVoiceButton;
            config = config.icon;
            config = config.gameSize;
            control['size'] = config;
            source = sequence.bind(zulu)(vacuum, control);
 1175:
            golf['end'] = source;
            golf['connected'] = update;
            golf['fontScale'] = echo;
            golf['isSubscriptionGated'] = result;
            golf['needSubscriptionToAccess'] = output;
            output = true;
            golf['showGuildBadgeIcon'] = output;
            offset = offset.bind(zulu)(golf);
            golf = new Array(2);
            golf[0] = offset;
            options = options.length;
            options = options > verify;
            oscar = null;
            if(!options) { _fun121115_ip = 1341; continue _fun121115 }
 1233:
            offset = _closure1_slot14;
            verify = _closure1_slot5;
            options = {};
            output = romeo.voiceUsers;
            romeo = new Array(2);
            romeo[0] = output;
            sizing = sizing.voiceUsers;
            sizing = sizing.margin;
            romeo[1] = sizing;
            options['style'] = romeo;
            romeo = _closure1_slot1;
            sizing = _closure1_slot2;
            yankee = 47;
            yankee = sizing[yankee];
            romeo = romeo.bind(zulu)(yankee);
            yankee = {};
            yankee['users'] = kilo;
            kilo = 5;
            yankee['max'] = kilo;
            backup = backup.guild_id;
            yankee['guildId'] = backup;
            yankee['audienceCount'] = foxtrot;
            yankee = offset.bind(zulu)(romeo, yankee);
            options['children'] = yankee;
            oscar = offset.bind(zulu)(verify, options);
 1341:
            golf[1] = oscar;
            oscar = 'children';
            entity[oscar] = golf;
            entity = report.bind(zulu)(tango, entity);
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    tango = options.bind(golf)(tango);
    var _closure1_slot18 = tango;
    tango = golf.memo;
    mike = function(argFoo) { // Original name: VoiceOrStageChannel
        entity = argFoo;
        options = entity.channel;
        var _closure2_slot0 = options;
        report = entity.customSubtitle;
        oscar = _closure1_slot0;
        verify = _closure1_slot2;
        zulu = 32;
        golf = verify[zulu];
        tango = undefined;
        romeo = oscar.bind(tango)(golf);
        yankee = romeo.useStateFromStores;
        golf = _closure1_slot10;
        offset = new Array(1);
        offset[0] = golf;
        golf = function() {
            zulu = _closure1_slot10;
            mike = zulu.getVoiceStatesForChannel;
            entity = _closure2_slot0;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        golf = yankee.bind(romeo)(offset, golf);
        zulu = verify[zulu];
        verify = oscar.bind(tango)(zulu);
        oscar = verify.useStateFromStoresArray;
        offset = _closure1_slot6;
        zulu = new Array(1);
        zulu[0] = offset;
        mike = function() {
            golf = _closure1_slot6;
            zulu = golf.getMutableParticipants;
            mike = _closure2_slot0;
            mike = mike.id;
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 34;
            entity = oscar[entity];
            tango = undefined;
            entity = report.bind(tango)(entity);
            entity = entity.StageChannelParticipantNamedIndex;
            entity = entity.SPEAKER;
            zulu = zulu.bind(golf)(mike, entity);
            mike = zulu.filter;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.type;
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 34;
                zulu = zulu[entity];
                entity = undefined;
                entity = tango.bind(entity)(zulu);
                entity = entity.StageChannelParticipantTypes;
                entity = entity.VOICE;
                entity = mike === entity;
                return entity;
            };
            zulu = mike.bind(zulu)(entity);
            mike = zulu.map;
            entity = 48;
            entity = oscar[entity];
            entity = report.bind(tango)(entity);
            entity = entity.transformParticipantToSortedVoiceState;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        oscar = oscar.bind(verify)(zulu, mike);
        zulu = _closure1_slot14;
        mike = _closure1_slot18;
        entity = {};
        entity['channel'] = options;
        entity['voiceStates'] = golf;
        entity['speakerVoiceStates'] = oscar;
        entity['subtitle'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    mike = tango.bind(golf)(mike);
    tango = 49;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/launchpad/native/shared/VoiceOrStageChannel.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();