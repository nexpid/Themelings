// app/modules/launchpad/native/shared/VoiceOrStageChannel.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: getStageChannelAccessibilityProps
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            option = entity.channelName;
            oscard = entity.channel;
            golfie = entity.userCount;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            offset = 12;
            tangon = michal[offset];
            verify = undefined;
            tangon = zuuluu.bind(verify)(tangon);
            report = tangon.intl;
            tangon = report.formatToPlainString;
            michal = michal[offset];
            michal = zuuluu.bind(verify)(michal);
            michal = michal.t;
            zuuluu = michal.TPPk2d;
            michal = {};
            michal['channelName'] = option;
            michal = tangon.bind(report)(zuuluu, michal);
            tangon = oscard.userLimit;
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00002_ip = 112; continue _fun00001 }
 100:
            tangon = oscard.userLimit;
            zuuluu = 0;
            if(!(!(tangon > zuuluu))) { _fun00002_ip = 188; continue _fun00001 }
 112:
            zuuluu = 0;
            if(!(golfie > zuuluu)) { _fun00002_ip = 264; continue _fun00001 }
 121:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            report = zuuluu[offset];
            report = tangon.bind(verify)(report);
            yankee = report.intl;
            report = yankee.formatToPlainString;
            zuuluu = zuuluu[offset];
            zuuluu = tangon.bind(verify)(zuuluu);
            zuuluu = zuuluu.t;
            tangon = zuuluu.7yr3QU;
            zuuluu = {};
            zuuluu['channelName'] = option;
            zuuluu['userCount'] = golfie;
            michal = report.bind(yankee)(tangon, zuuluu);
            _fun00002_ip = 264; continue _fun00001;
 188:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            tangon = entity[offset];
            tangon = zuuluu.bind(verify)(tangon);
            report = tangon.intl;
            tangon = report.formatToPlainString;
            entity = entity[offset];
            entity = zuuluu.bind(verify)(entity);
            entity = entity.t;
            zuuluu = entity.rhh6Eh;
            entity = {};
            entity['channelName'] = option;
            entity['userCount'] = golfie;
            oscard = oscard.userLimit;
            entity['limit'] = oscard;
            michal = tangon.bind(report)(zuuluu, entity);
 264:
            entity = {'accessible': true, 'accessibilityRole': 'button'};
            entity['accessibilityLabel'] = michal;
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function() { // Original name: handleVoiceOrStageChannelConnectPress
        entity = undefined;
        tangon = _closure1_slot21;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot20 = entity;
    entity = function() { // Original name: _handleVoiceOrStageChannelConnectPress
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    report = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 147; continue _fun00003 }
 13:
                    michal = report.isGuildStageVoice;
                    tangon = michal.bind(report)();
                    golfie = _closure1_slot0;
                    michal = _closure1_slot2;
                    zuuluu = 14;
                    oscard = michal[zuuluu];
                    zuuluu = undefined;
                    oscard = golfie.bind(zuuluu)(oscard);
                    if(tangon) { _fun00004_ip = 102; continue _fun00003 }
 51:
                    tangon = 15;
                    golfie = michal[tangon];
                    tangon = michal.paths;
                    tangon = oscard.bind(zuuluu)(golfie, tangon);
                    SaveGenerator(address=73);
 71:
                    return tangon;
 73:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(golfie) { _fun00004_ip = 99; continue _fun00003 }
 79:
                    option = tangon.openGuildVoiceModal;
                    golfie = 'Channel List';
                    golfie = option.bind(zuuluu)(report, golfie);
                    _fun00004_ip = 141; continue _fun00003;
 99:
                    return tangon;
 102:
                    tangon = 13;
                    tangon = michal[tangon];
                    michal = michal.paths;
                    michal = oscard.bind(zuuluu)(tangon, michal);
                    SaveGenerator(address=124);
 122:
                    return michal;
 124:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00004_ip = 144; continue _fun00003 }
 130:
                    tangon = michal.connectAndOpen;
                    tangon = tangon.bind(zuuluu)(report);
 141:
                    return zuuluu;
 144:
                    return michal;
 147:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot21 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo) { // Original name: useVoiceChannelPressEvents
        zuuluu = argFoo;
        var _closure2_slot0 = zuuluu;
        tangon = function() { // Original name: useVoiceChannelOnPressHandler
            tangon = _closure1_slot4;
            zuuluu = tangon.useCallback;
            michal = function() {
                tangon = _closure1_slot3;
                zuuluu = undefined;
                michal = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            StartGenerator();
                            report = argFoo;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(michal) { _fun00006_ip = 269; continue _fun00005 }
 15:
                            var _closure6_slot0 = report;
                            oscard = _closure1_slot0;
                            golfie = _closure1_slot2;
                            zuuluu = 16;
                            zuuluu = golfie[zuuluu];
                            golfie = undefined;
                            option = oscard.bind(golfie)(zuuluu);
                            oscard = option.getChannelRoleSubscriptionStatus;
                            zuuluu = report.id;
                            zuuluu = oscard.bind(option)(zuuluu);
                            zuuluu = zuuluu.needSubscriptionToAccess;
                            oscard = report.getGuildId;
                            oscard = oscard.bind(report)();
                            option = null;
                            if(!(option != oscard)) { _fun00006_ip = 116; continue _fun00005 }
 82:
                            verify = _closure1_slot0;
                            offset = _closure1_slot2;
                            option = 17;
                            option = offset[option];
                            verify = verify.bind(golfie)(option);
                            option = verify.shouldShowMembershipVerificationGate;
                            option = option.bind(verify)(oscard);
                            if(option) { _fun00006_ip = 196; continue _fun00005 }
 116:
                            if(zuuluu) { _fun00006_ip = 132; continue _fun00005 }
 119:
                            zuuluu = _closure1_slot20;
                            zuuluu = zuuluu.bind(golfie)(report);
                            zuuluu = undefined;
                            _fun00006_ip = 194; continue _fun00005;
 132:
                            verify = _closure1_slot0;
                            offset = _closure1_slot2;
                            option = 19;
                            option = offset[option];
                            verify = verify.bind(golfie)(option);
                            option = verify.transitionTo;
                            romeon = _closure1_slot11;
                            yankee = romeon.CHANNEL;
                            offset = report.guild_id;
                            report = _closure1_slot12;
                            report = report.ROLE_SUBSCRIPTIONS;
                            report = yankee.bind(romeon)(offset, report);
                            zuuluu = option.bind(verify)(report);
 194:
                            _fun00006_ip = 263; continue _fun00005;
 196:
                            option = _closure1_slot0;
                            michal = _closure1_slot2;
                            report = 14;
                            report = michal[report];
                            option = option.bind(golfie)(report);
                            report = 18;
                            report = michal[report];
                            michal = michal.paths;
                            michal = option.bind(golfie)(report, michal);
                            SaveGenerator(address=238);
 236:
                            return michal;
 238:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(report) { _fun00006_ip = 266; continue _fun00005 }
 244:
                            report = michal.openMemberVerificationModal;
                            tangon = function() {
                                zuuluu = _closure1_slot20;
                                michal = _closure6_slot0;
                                entity = undefined;
                                entity = zuuluu.bind(entity)(michal);
                                return entity;
                            };
                            zuuluu = report.bind(golfie)(oscard, tangon);
 263:
                            return zuuluu;
 266:
                            return michal;
 269:
                            return entity;
                        }
                    };
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
            entity = undefined;
            michal = michal.bind(entity)();
            entity = new Array(0);
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        entity = undefined;
        report = tangon.bind(entity)();
        var _closure2_slot1 = report;
        entity = {};
        option = _closure1_slot4;
        golfie = option.useCallback;
        oscard = new Array(2);
        oscard[0] = zuuluu;
        oscard[1] = report;
        report = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = _closure2_slot0;
                zuuluu = entity.guild_id;
                entity = null;
                if(!(entity != zuuluu)) { _fun00008_ip = 63; continue _fun00007 }
 18:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 20;
                zuuluu = zuuluu[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.transitionToGuild;
                entity = _closure2_slot0;
                entity = entity.guild_id;
                entity = zuuluu.bind(tangon)(entity);
 63:
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 21;
                zuuluu = zuuluu[entity];
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                zuuluu = zuuluu.bind(entity)();
                zuuluu = _closure2_slot1;
                michal = _closure2_slot0;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            }
        };
        report = golfie.bind(option)(report, oscard);
        entity['onPress'] = report;
        report = _closure1_slot4;
        tangon = report.useCallback;
        oscard = zuuluu.id;
        zuuluu = new Array(1);
        zuuluu[0] = oscard;
        michal = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 22;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.openChannelLongPressActionSheet;
            entity = _closure2_slot0;
            entity = entity.id;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = tangon.bind(report)(michal, zuuluu);
        entity['onLongPress'] = michal;
        return entity;
    };
    var _closure1_slot22 = entity;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argCor;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Routes;
    var _closure1_slot11 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.StaticChannelRoute;
    var _closure1_slot12 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.getThemedRippleConfig;
    var _closure1_slot13 = tangon;
    tangon = 11;
    option = oscard[tangon];
    option = report.bind(entity)(option);
    option = option.jsx;
    var _closure1_slot14 = option;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot15 = tangon;
    tangon = 23;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = function(argFoo, argBar) {
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            yankee = argBar;
            entity = {};
            option = -2;
            michal = {'display': 'flex', 'flexDirection': 'row', 'paddingRight': 16, 'marginTop': 4294967294};
            entity['voiceUsers'] = michal;
            michal = {};
            verify = 1;
            michal['flex'] = verify;
            entity['pressable'] = michal;
            michal = {'borderRadius': null, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
            offset = _closure1_slot1;
            golfie = _closure1_slot2;
            oscard = 24;
            tangon = golfie[oscard];
            report = undefined;
            tangon = offset.bind(report)(tangon);
            tangon = tangon.radii;
            tangon = tangon.round;
            michal['borderRadius'] = tangon;
            tangon = 'center';
            entity['joinButton'] = michal;
            michal = {'width': 'auto', 'flexDirection': 'row', 'alignItems': 'center'};
            entity['joinButtonContent'] = michal;
            michal = {};
            romeon = golfie[oscard];
            romeon = offset.bind(report)(romeon);
            romeon = romeon.colors;
            romeon = romeon.STATUS_DANGER;
            michal['backgroundColor'] = romeon;
            entity['joinButtonLive'] = michal;
            michal = {};
            romeon = 'uppercase';
            michal['textTransform'] = romeon;
            entity['joinButtonLiveText'] = michal;
            michal = {};
            romeon = golfie[oscard];
            romeon = offset.bind(report)(romeon);
            romeon = romeon.colors;
            romeon = romeon.STATUS_POSITIVE;
            michal['backgroundColor'] = romeon;
            entity['joinButtonActive'] = michal;
            michal = {};
            golfie = golfie[oscard];
            golfie = offset.bind(report)(golfie);
            golfie = golfie.colors;
            golfie = golfie.BG_BASE_PRIMARY;
            michal['backgroundColor'] = golfie;
            offset = argFoo;
            golfie = verify;
            if(!offset) { _fun00010_ip = 238; continue _fun00009 }
 236:
            golfie = 0;
 238:
            michal['elevation'] = golfie;
            golfie = 4;
            michal['shadowRadius'] = golfie;
            offset = {'width': 0, 'height': 1};
            michal['shadowOffset'] = offset;
            romeon = _closure1_slot1;
            offset = _closure1_slot2;
            offset = offset[oscard];
            offset = romeon.bind(report)(offset);
            offset = offset.colors;
            offset = offset.BLACK;
            michal['shadowColor'] = offset;
            offset = 0.14;
            if(!yankee) { _fun00010_ip = 322; continue _fun00009 }
 312:
            offset = 0.08;
 322:
            michal['shadowOpacity'] = offset;
            offset = 'rgba(255, 255, 255, 0.14)';
            if(!yankee) { _fun00010_ip = 342; continue _fun00009 }
 336:
            offset = 'rgba(0, 0, 0, 0.08)';
 342:
            michal['borderColor'] = offset;
            michal['borderWidth'] = verify;
            entity['joinButtonInactive'] = michal;
            michal = {'marginRight': 2, 'flex': 1, 'alignItems': 'center', 'justifyContent': 'center'};
            entity['joinButtonIconWrapper'] = michal;
            michal = {};
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            verify = yankee[oscard];
            verify = offset.bind(report)(verify);
            verify = verify.colors;
            verify = verify.WHITE;
            michal['tintColor'] = verify;
            entity['joinButtonIconActive'] = michal;
            michal = {};
            verify = yankee[oscard];
            verify = offset.bind(report)(verify);
            verify = verify.colors;
            verify = verify.INTERACTIVE_NORMAL;
            michal['tintColor'] = verify;
            entity['joinButtonIconInactive'] = michal;
            michal = {};
            offset = _closure1_slot0;
            verify = 25;
            verify = yankee[verify];
            offset = offset.bind(report)(verify);
            verify = offset.isAndroid;
            verify = verify.bind(offset)();
            golfie = 0;
            if(!verify) { _fun00010_ip = 481; continue _fun00009 }
 478:
            golfie = option;
 481:
            michal['marginTop'] = golfie;
            michal['alignSelf'] = tangon;
            entity['joinButtonText'] = michal;
            michal = {'backgroundColor': null, 'width': 8, 'height': 8};
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            golfie = zuuluu[oscard];
            golfie = tangon.bind(report)(golfie);
            golfie = golfie.colors;
            golfie = golfie.WHITE;
            michal['backgroundColor'] = golfie;
            zuuluu = zuuluu[oscard];
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = zuuluu.radii;
            zuuluu = zuuluu.round;
            michal['borderRadius'] = zuuluu;
            entity['liveIcon'] = michal;
            return entity;
        }
    };
    tangon = option.bind(verify)(tangon);
    var _closure1_slot16 = tangon;
    tangon = new Array(0);
    var _closure1_slot17 = tangon;
    option = golfie.memo;
    tangon = function(argFoo) { // Original name: UnmemoedVoiceOrStageChannelBase
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = argFoo;
            backup = michal.channel;
            var _closure2_slot0 = backup;
            limora = michal.subtitle;
            var _closure2_slot1 = limora;
            option = michal.voiceStates;
            zuuluu = undefined;
            if(!(option === zuuluu)) { _fun00012_ip = 43; continue _fun00011 }
 36:
            option = _closure1_slot17;
 43:
            michal = michal.speakerVoiceStates;
            if(!(michal === zuuluu)) { _fun00012_ip = 60; continue _fun00011 }
 53:
            michal = _closure1_slot17;
 60:
            sierra = backup.id;
            status = backup.guild_id;
            report = _closure1_slot1;
            foxtra = _closure1_slot2;
            tangon = 26;
            tangon = foxtra[tangon];
            tangon = report.bind(zuuluu)(tangon);
            romeon = tangon.bind(zuuluu)();
            tangon = 27;
            tangon = foxtra[tangon];
            tangon = report.bind(zuuluu)(tangon);
            golfie = tangon.bind(zuuluu)();
            oscard = _closure1_slot16;
            offset = _closure1_slot0;
            tangon = 28;
            tangon = foxtra[tangon];
            verify = offset.bind(zuuluu)(tangon);
            tangon = verify.isThemeLight;
            tangon = tangon.bind(verify)(romeon);
            romeon = oscard.bind(zuuluu)(golfie, tangon);
            tangon = 29;
            tangon = foxtra[tangon];
            tangon = report.bind(zuuluu)(tangon);
            sizing = tangon.bind(zuuluu)();
            tangon = 30;
            tangon = foxtra[tangon];
            report = offset.bind(zuuluu)(tangon);
            tangon = report.useIsConnectedToVoiceChannel;
            update = tangon.bind(report)(backup);
            tangon = 31;
            tangon = foxtra[tangon];
            oscard = offset.bind(zuuluu)(tangon);
            report = oscard.useBaseChannelUnreadBadgeState;
            tangon = !update;
            tangon = report.bind(oscard)(backup, tangon);
            vacuum = tangon.unread;
            record = tangon.mentionCount;
            report = 32;
            tangon = foxtra[report];
            verify = offset.bind(zuuluu)(tangon);
            golfie = verify.useStateFromStores;
            tangon = _closure1_slot9;
            oscard = new Array(1);
            oscard[0] = tangon;
            tangon = function() {
                zuuluu = _closure1_slot9;
                michal = zuuluu.resolveUnreadSetting;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            ctrled = golfie.bind(verify)(oscard, tangon);
            tangon = 33;
            tangon = foxtra[tangon];
            verify = offset.bind(zuuluu)(tangon);
            golfie = verify.useStageParticipantsCount;
            oscard = backup.id;
            tangon = 34;
            tangon = foxtra[tangon];
            tangon = offset.bind(zuuluu)(tangon);
            tangon = tangon.StageChannelParticipantNamedIndex;
            tangon = tangon.AUDIENCE;
            foxtra = golfie.bind(verify)(oscard, tangon);
            tangon = option.length;
            tangon = foxtra + tangon;
            verify = 0;
            oscard = null;
            target = 0;
            if(!(oscard != tangon)) { _fun00012_ip = 345; continue _fun00011 }
 342:
            target = tangon;
 345:
            tangon = _closure1_slot22;
            cntext = tangon.bind(zuuluu)(backup);
            offset = _closure1_slot1;
            tangon = _closure1_slot2;
            golfie = 35;
            golfie = tangon[golfie];
            golfie = offset.bind(zuuluu)(golfie);
            config = golfie.bind(zuuluu)(backup);
            kiloes = _closure1_slot0;
            golfie = 36;
            offset = tangon[golfie];
            result = kiloes.bind(zuuluu)(offset);
            output = result.getChannelAccessibilityProps;
            offset = {};
            offset['channel'] = backup;
            offset['unread'] = vacuum;
            offset['mentionCount'] = record;
            offset['userCount'] = target;
            echoed = config.length;
            offset['embeddedActivitiesCount'] = echoed;
            offset = output.bind(result)(offset);
            tangon = tangon[report];
            echoed = kiloes.bind(zuuluu)(tangon);
            result = echoed.useStateFromStores;
            tangon = _closure1_slot7;
            output = new Array(1);
            output[0] = tangon;
            tangon = backup.id;
            kiloes = new Array(1);
            kiloes[0] = tangon;
            tangon = function() {
                zuuluu = _closure1_slot7;
                michal = zuuluu.getStageInstanceByChannel;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            source = result.bind(echoed)(output, tangon, kiloes);
            tangon = oscard == source;
            whisks = undefined;
            if(tangon) { _fun00012_ip = 505; continue _fun00011 }
 499:
            whisks = source.topic;
 505:
            kiloes = _closure1_slot1;
            output = _closure1_slot2;
            tangon = 37;
            tangon = output[tangon];
            kiloes = kiloes.bind(zuuluu)(tangon);
            tangon = false;
            equals = kiloes.bind(zuuluu)(backup, tangon);
            tangon = backup.isGuildStageVoice;
            tangon = tangon.bind(backup)();
            kiloes = option;
            if(!tangon) { _fun00012_ip = 552; continue _fun00011 }
 549:
            kiloes = michal;
 552:
            tangon = kiloes.map;
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.user;
                return entity;
            };
            kiloes = tangon.bind(kiloes)(michal);
            michal = _closure1_slot1;
            papara = _closure1_slot2;
            tangon = 38;
            tangon = papara[tangon];
            tangon = michal.bind(zuuluu)(tangon);
            variable36 = tangon.bind(zuuluu)();
            tangon = _closure1_slot0;
            output = 39;
            output = papara[output];
            result = tangon.bind(zuuluu)(output);
            output = result.useFontScale;
            echoed = output.bind(result)();
            report = papara[report];
            sequen = tangon.bind(zuuluu)(report);
            result = sequen.useStateFromStores;
            report = _closure1_slot8;
            output = new Array(1);
            output[0] = report;
            report = function() {
                entity = _closure1_slot8;
                entity = entity.locale;
                return entity;
            };
            sequen = result.bind(sequen)(output, report);
            report = 16;
            report = papara[report];
            output = michal.bind(zuuluu)(report);
            report = backup.id;
            report = output.bind(zuuluu)(report);
            result = report.isSubscriptionGated;
            output = report.needSubscriptionToAccess;
            variable37 = _closure1_slot4;
            quebec = variable37.useEffect;
            report = new Array(2);
            report[0] = update;
            report[1] = limora;
            entity = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    michal = null;
                    michal = michal != zuuluu;
                    if(!michal) { _fun00014_ip = 31; continue _fun00013 }
 16:
                    zuuluu = _closure2_slot1;
                    tangon = 'string';
                    zuuluu = typeof zuuluu;
                    michal = tangon !== zuuluu;
 31:
                    if(!michal) { _fun00014_ip = 51; continue _fun00013 }
 34:
                    zuuluu = _closure2_slot1;
                    tangon = zuuluu.type;
                    zuuluu = 'voice';
                    michal = zuuluu === tangon;
 51:
                    if(!michal) { _fun00014_ip = 105; continue _fun00013 }
 54:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 40;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    michal = tangon.bind(michal)(zuuluu);
                    zuuluu = michal.messagePreviewASTCache;
                    michal = zuuluu.del;
                    entity = _closure2_slot1;
                    entity = entity.text;
                    entity = michal.bind(zuuluu)(entity);
 105:
                    entity = undefined;
                    return entity;
                }
            };
            entity = quebec.bind(variable37)(entity, report);
            entity = 41;
            entity = papara[entity];
            michal = michal.bind(zuuluu)(entity);
            report = _closure1_slot15;
            entity = 42;
            entity = papara[entity];
            entity = tangon.bind(zuuluu)(entity);
            tangon = entity.PressableHighlight;
            entity = {};
            quebec = romeon.pressable;
            papara = new Array(2);
            papara[0] = quebec;
            quebec = {};
            variable37 = option.length;
            variable38 = variable37 > verify;
            variable37 = 0;
            if(!variable38) { _fun00012_ip = 795; continue _fun00011 }
 792:
            variable37 = 6;
 795:
            quebec['paddingBottom'] = variable37;
            variable37 = sizing.container;
            variable37 = variable37.borderRadius;
            quebec['borderRadius'] = variable37;
            papara[1] = quebec;
            entity['style'] = papara;
            entity['underlayColor'] = variable36;
            quebec = _closure1_slot13;
            papara = {};
            papara['color'] = variable36;
            papara = quebec.bind(zuuluu)(papara);
            entity['androidRippleConfig'] = papara;
            variable41 = entity;
            variable40 = cntext;
            cntext = copyDataProperties(variable41, variable40);
            cntext = backup.isGuildStageVoice;
            cntext = cntext.bind(backup)();
            if(!cntext) { _fun00012_ip = 895; continue _fun00011 }
 870:
            papara = _closure1_slot19;
            cntext = {};
            cntext['channelName'] = equals;
            cntext['channel'] = backup;
            cntext['userCount'] = target;
            offset = papara.bind(zuuluu)(cntext);
 895:
            variable41 = entity;
            variable40 = offset;
            offset = copyDataProperties(variable41, variable40);
            offset = _closure1_slot1;
            target = _closure1_slot2;
            golfie = target[golfie];
            offset = offset.bind(zuuluu)(golfie);
            golfie = {};
            golfie['channel'] = backup;
            papara = _closure1_slot0;
            cntext = 43;
            cntext = target[cntext];
            target = papara.bind(zuuluu)(cntext);
            papara = target.renderChannelSubtitle;
            cntext = {};
            if(!(oscard != whisks)) { _fun00012_ip = 959; continue _fun00011 }
 956:
            limora = whisks;
 959:
            cntext['subtitle'] = limora;
            cntext['channelId'] = sierra;
            cntext['guildId'] = status;
            cntext['connected'] = update;
            cntext = papara.bind(target)(cntext);
            golfie['subtitle'] = cntext;
            if(vacuum) { _fun00012_ip = 994; continue _fun00011 }
 990:
            vacuum = record > verify;
 994:
            golfie['unread'] = vacuum;
            golfie['resolvedUnreadSetting'] = ctrled;
            golfie['mentionCount'] = record;
            vacuum = _closure1_slot1;
            cntext = _closure1_slot2;
            ctrled = 44;
            ctrled = cntext[ctrled];
            vacuum = vacuum.bind(zuuluu)(ctrled);
            ctrled = {};
            ctrled['mentionCount'] = record;
            ctrled['locale'] = sequen;
            ctrled = vacuum.bind(zuuluu)(ctrled);
            golfie['mentionBadge'] = ctrled;
            source = oscard != source;
            golfie['live'] = source;
            source = config.length;
            if(!(!(source > verify))) { _fun00012_ip = 1118; continue _fun00011 }
 1069:
            vacuum = _closure1_slot14;
            ctrled = _closure1_slot0;
            sequen = _closure1_slot2;
            source = 46;
            source = sequen[source];
            source = ctrled.bind(zuuluu)(source);
            ctrled = source.VocalChannelJoinButton;
            source = {};
            source['channel'] = backup;
            source['voiceStates'] = option;
            source = vacuum.bind(zuuluu)(ctrled, source);
            _fun00012_ip = 1176; continue _fun00011;
 1118:
            sequen = _closure1_slot14;
            vacuum = _closure1_slot1;
            record = _closure1_slot2;
            ctrled = 45;
            ctrled = record[ctrled];
            vacuum = vacuum.bind(zuuluu)(ctrled);
            ctrled = {};
            ctrled['embeddedApps'] = config;
            config = sizing.joinVoiceButton;
            config = config.icon;
            config = config.gameSize;
            ctrled['size'] = config;
            source = sequen.bind(zuuluu)(vacuum, ctrled);
 1176:
            golfie['end'] = source;
            golfie['connected'] = update;
            golfie['fontScale'] = echoed;
            golfie['isSubscriptionGated'] = result;
            golfie['needSubscriptionToAccess'] = output;
            output = true;
            golfie['showGuildBadgeIcon'] = output;
            offset = offset.bind(zuuluu)(golfie);
            golfie = new Array(2);
            golfie[0] = offset;
            option = option.length;
            option = option > verify;
            oscard = null;
            if(!option) { _fun00012_ip = 1342; continue _fun00011 }
 1234:
            offset = _closure1_slot14;
            verify = _closure1_slot5;
            option = {};
            output = romeon.voiceUsers;
            romeon = new Array(2);
            romeon[0] = output;
            sizing = sizing.voiceUsers;
            sizing = sizing.margin;
            romeon[1] = sizing;
            option['style'] = romeon;
            romeon = _closure1_slot1;
            sizing = _closure1_slot2;
            yankee = 47;
            yankee = sizing[yankee];
            romeon = romeon.bind(zuuluu)(yankee);
            yankee = {};
            yankee['users'] = kiloes;
            kiloes = 5;
            yankee['max'] = kiloes;
            backup = backup.guild_id;
            yankee['guildId'] = backup;
            yankee['audienceCount'] = foxtra;
            yankee = offset.bind(zuuluu)(romeon, yankee);
            option['children'] = yankee;
            oscard = offset.bind(zuuluu)(verify, option);
 1342:
            golfie[1] = oscard;
            oscard = 'children';
            entity[oscard] = golfie;
            entity = report.bind(zuuluu)(tangon, entity);
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    tangon = option.bind(golfie)(tangon);
    var _closure1_slot18 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) { // Original name: VoiceOrStageChannel
        entity = argFoo;
        option = entity.channel;
        var _closure2_slot0 = option;
        report = entity.customSubtitle;
        oscard = _closure1_slot0;
        verify = _closure1_slot2;
        zuuluu = 32;
        golfie = verify[zuuluu];
        tangon = undefined;
        romeon = oscard.bind(tangon)(golfie);
        yankee = romeon.useStateFromStores;
        golfie = _closure1_slot10;
        offset = new Array(1);
        offset[0] = golfie;
        golfie = function() {
            zuuluu = _closure1_slot10;
            michal = zuuluu.getVoiceStatesForChannel;
            entity = _closure2_slot0;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        golfie = yankee.bind(romeon)(offset, golfie);
        zuuluu = verify[zuuluu];
        verify = oscard.bind(tangon)(zuuluu);
        oscard = verify.useStateFromStoresArray;
        offset = _closure1_slot6;
        zuuluu = new Array(1);
        zuuluu[0] = offset;
        michal = function() {
            golfie = _closure1_slot6;
            zuuluu = golfie.getMutableParticipants;
            michal = _closure2_slot0;
            michal = michal.id;
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 34;
            entity = oscard[entity];
            tangon = undefined;
            entity = report.bind(tangon)(entity);
            entity = entity.StageChannelParticipantNamedIndex;
            entity = entity.SPEAKER;
            zuuluu = zuuluu.bind(golfie)(michal, entity);
            michal = zuuluu.filter;
            entity = function(argFoo) {
                entity = argFoo;
                michal = entity.type;
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 34;
                zuuluu = zuuluu[entity];
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu);
                entity = entity.StageChannelParticipantTypes;
                entity = entity.VOICE;
                entity = michal === entity;
                return entity;
            };
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.map;
            entity = 48;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            entity = entity.transformParticipantToSortedVoiceState;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        oscard = oscard.bind(verify)(zuuluu, michal);
        zuuluu = _closure1_slot14;
        michal = _closure1_slot18;
        entity = {};
        entity['channel'] = option;
        entity['voiceStates'] = golfie;
        entity['speakerVoiceStates'] = oscard;
        entity['subtitle'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 49;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/launchpad/native/shared/VoiceOrStageChannel.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();