// app/actions/InstantInviteActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    oscar = argBar;
    tango = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = tango;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = golf;
    entity = function(argFoo) { // Original name: generateAcceptInviteOptions
        _fun67490: for(var _fun67490_ip = 0; ; ) switch(_fun67490_ip) {
 0:
            zulu = argFoo;
            entity = {};
            tango = zulu.target_type;
            mike = _closure1_slot33;
            mike = mike.STREAM;
            if(!(mike !== tango)) { _fun67490_ip = 112; continue _fun67490 }
 28:
            mike = _closure1_slot33;
            mike = mike.EMBEDDED_APPLICATION;
            if(!(mike !== tango)) { _fun67490_ip = 70; continue _fun67490 }
 42:
            mike = _closure1_slot33;
            mike = mike.ROLE_SUBSCRIPTIONS_PURCHASE;
            if(!(mike === tango)) { _fun67490_ip = 152; continue _fun67490 }
 56:
            mike = zulu.target_type;
            entity['targetType'] = mike;
            _fun67490_ip = 152; continue _fun67490;
 70:
            mike = zulu.target_type;
            entity['targetType'] = mike;
            tango = zulu.target_application;
            mike = null;
            oscar = mike == tango;
            mike = undefined;
            if(oscar) { _fun67490_ip = 104; continue _fun67490 }
 99:
            mike = tango.id;
 104:
            entity['targetApplicationId'] = mike;
            _fun67490_ip = 152; continue _fun67490;
 112:
            mike = zulu.target_type;
            entity['targetType'] = mike;
            tango = zulu.target_user;
            mike = null;
            oscar = mike == tango;
            mike = undefined;
            if(oscar) { _fun67490_ip = 146; continue _fun67490 }
 141:
            mike = tango.id;
 146:
            entity['targetUserId'] = mike;
 152:
            options = _closure1_slot16;
            golf = options.getGuild;
            verify = zulu.guild;
            tango = null;
            offset = tango == verify;
            mike = undefined;
            oscar = undefined;
            if(offset) { _fun67490_ip = 184; continue _fun67490 }
 179:
            oscar = verify.id;
 184:
            oscar = golf.bind(options)(oscar);
            golf = tango != oscar;
            oscar = !golf;
            if(!golf) { _fun67490_ip = 205; continue _fun67490 }
 199:
            oscar = zulu.new_member;
 205:
            if(!oscar) { _fun67490_ip = 217; continue _fun67490 }
 208:
            golf = zulu.channel;
            oscar = tango != golf;
 217:
            if(!oscar) { _fun67490_ip = 239; continue _fun67490 }
 220:
            options = _closure1_slot8;
            golf = zulu.channel;
            golf = golf.type;
            oscar = options.bind(mike)(golf);
 239:
            if(!oscar) { _fun67490_ip = 258; continue _fun67490 }
 242:
            oscar = zulu.channel;
            oscar = oscar.id;
            entity['welcomeModalChannelId'] = oscar;
 258:
            oscar = zulu.guild_scheduled_event;
            if(!(tango != oscar)) { _fun67490_ip = 280; continue _fun67490 }
 268:
            oscar = zulu.guild_scheduled_event;
            entity['guildScheduledEvent'] = oscar;
 280:
            golf = _closure1_slot0;
            oscar = _closure1_slot3;
            verify = 19;
            oscar = oscar[verify];
            backup = golf.bind(mike)(oscar);
            foxtrot = backup.hasFlag;
            oscar = zulu.flags;
            golf = tango != oscar;
            romeo = 0;
            if(!golf) { _fun67490_ip = 323; continue _fun67490 }
 320:
            romeo = oscar;
 323:
            golf = _closure1_slot0;
            oscar = _closure1_slot3;
            offset = 20;
            yankee = oscar[offset];
            yankee = golf.bind(mike)(yankee);
            yankee = yankee.GuildInviteFlags;
            yankee = yankee.IS_GUEST_INVITE;
            yankee = foxtrot.bind(backup)(romeo, yankee);
            entity['isGuestInvite'] = yankee;
            oscar = oscar[verify];
            golf = golf.bind(mike)(oscar);
            oscar = golf.hasFlag;
            verify = zulu.flags;
            yankee = tango != verify;
            options = 0;
            if(!yankee) { _fun67490_ip = 399; continue _fun67490 }
 396:
            options = verify;
 399:
            verify = _closure1_slot0;
            report = _closure1_slot3;
            report = report[offset];
            report = verify.bind(mike)(report);
            report = report.GuildInviteFlags;
            report = report.IS_APPLICATION_BYPASS;
            report = oscar.bind(golf)(options, report);
            entity['isApplicationBypassInvite'] = report;
            zulu = zulu.inviter;
            tango = tango == zulu;
            mike = undefined;
            if(tango) { _fun67490_ip = 460; continue _fun67490 }
 455:
            mike = zulu.id;
 460:
            entity['inviterUserId'] = mike;
            return entity;
        }
    };
    var _closure1_slot37 = entity;
    entity = function(argFoo) { // Original name: transitionToInviteChannel
        _fun67491: for(var _fun67491_ip = 0; ; ) switch(_fun67491_ip) {
 0:
            entity = argFoo;
            golf = entity.guildId;
            var _closure2_slot0 = golf;
            report = entity.channel;
            var _closure2_slot1 = report;
            tango = entity.options;
            var _closure2_slot2 = tango;
            verify = entity.analyticsLocations;
            entity = undefined;
            if(!(verify === entity)) { _fun67491_ip = 48; continue _fun67491 }
 44:
            verify = new Array(0);
 48:
            var _closure2_slot3 = verify;
            var _closure2_slot4 = entity;
            var _closure2_slot5 = entity;
            var _closure2_slot6 = entity;
            var _closure2_slot7 = entity;
            var _closure2_slot8 = entity;
            var _closure2_slot9 = entity;
            var _closure2_slot10 = entity;
            options = _closure1_slot16;
            zulu = options.getGuild;
            foxtrot = zulu.bind(options)(golf);
            options = _closure1_slot0;
            offset = _closure1_slot3;
            zulu = 24;
            zulu = offset[zulu];
            offset = options.bind(entity)(zulu);
            options = offset.getMemberVerificationRolloutEnabled;
            zulu = 'invite';
            zulu = options.bind(offset)(golf, zulu);
            offset = null;
            yankee = offset == foxtrot;
            if(zulu) { _fun67491_ip = 204; continue _fun67491 }
 142:
            zulu = undefined;
            if(yankee) { _fun67491_ip = 168; continue _fun67491 }
 147:
            romeo = foxtrot.hasFeature;
            options = _closure1_slot27;
            options = options.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            zulu = romeo.bind(foxtrot)(options);
 168:
            if(!zulu) { _fun67491_ip = 202; continue _fun67491 }
 171:
            options = offset != foxtrot;
            if(!options) { _fun67491_ip = 199; continue _fun67491 }
 178:
            backup = foxtrot.hasFeature;
            romeo = _closure1_slot27;
            romeo = romeo.PREVIEW_ENABLED;
            options = backup.bind(foxtrot)(romeo);
 199:
            zulu = !options;
 202:
            _fun67491_ip = 233; continue _fun67491;
 204:
            options = undefined;
            if(yankee) { _fun67491_ip = 230; continue _fun67491 }
 209:
            romeo = foxtrot.hasFeature;
            yankee = _closure1_slot27;
            yankee = yankee.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            options = romeo.bind(foxtrot)(yankee);
 230:
            zulu = options;
 233:
            options = tango;
            if(!(offset == options)) { _fun67491_ip = 242; continue _fun67491 }
 240:
            options = {};
 242:
            yankee = options.targetUserId;
            _closure2_slot4 = yankee;
            backup = options.targetType;
            _closure2_slot5 = backup;
            yankee = options.targetApplicationId;
            _closure2_slot6 = yankee;
            romeo = options.isGuestInvite;
            _closure2_slot7 = romeo;
            options = options.isApplicationBypassInvite;
            if(romeo) { _fun67491_ip = 333; continue _fun67491 }
 291:
            if(options) { _fun67491_ip = 333; continue _fun67491 }
 294:
            if(!(offset != tango)) { _fun67491_ip = 309; continue _fun67491 }
 298:
            options = tango.forceTransition;
            if(options) { _fun67491_ip = 333; continue _fun67491 }
 309:
            if(!zulu) { _fun67491_ip = 333; continue _fun67491 }
 312:
            options = _closure1_slot20;
            zulu = options.getGuildId;
            zulu = zulu.bind(options)();
            if(!(zulu === golf)) { _fun67491_ip = 885; continue _fun67491 }
 333:
            sizing = report.type;
            romeo = _closure1_slot13;
            options = romeo.getChannel;
            zulu = report.id;
            kilo = options.bind(romeo)(zulu);
            options = offset == tango;
            zulu = undefined;
            if(options) { _fun67491_ip = 372; continue _fun67491 }
 366:
            zulu = tango.targetType;
 372:
            if(!(offset == zulu)) { _fun67491_ip = 444; continue _fun67491 }
 376:
            romeo = _closure1_slot9;
            options = romeo.has;
            zulu = report.type;
            zulu = options.bind(romeo)(zulu);
            if(zulu) { _fun67491_ip = 444; continue _fun67491 }
 398:
            options = _closure1_slot0;
            romeo = _closure1_slot3;
            zulu = 21;
            zulu = romeo[zulu];
            options = options.bind(entity)(zulu);
            zulu = options.canSeeOnboardingHome;
            zulu = zulu.bind(options)(golf);
            if(!zulu) { _fun67491_ip = 444; continue _fun67491 }
 432:
            zulu = _closure1_slot31;
            romeo = zulu.GUILD_HOME;
            _fun67491_ip = 554; continue _fun67491;
 444:
            foxtrot = _closure1_slot13;
            options = foxtrot.getChannel;
            zulu = report.id;
            output = options.bind(foxtrot)(zulu);
            foxtrot = _closure1_slot19;
            options = foxtrot.can;
            zulu = _closure1_slot30;
            zulu = zulu.VIEW_CHANNEL;
            zulu = options.bind(foxtrot)(zulu, output);
            if(zulu) { _fun67491_ip = 546; continue _fun67491 }
 492:
            output = _closure1_slot14;
            foxtrot = output.getDefaultChannel;
            zulu = _closure1_slot30;
            options = zulu.CREATE_INSTANT_INVITE;
            zulu = true;
            options = foxtrot.bind(output)(golf, zulu, options);
            foxtrot = offset == options;
            zulu = undefined;
            if(foxtrot) { _fun67491_ip = 535; continue _fun67491 }
 530:
            zulu = options.id;
 535:
            if(!(offset == zulu)) { _fun67491_ip = 544; continue _fun67491 }
 539:
            zulu = report.id;
 544:
            _fun67491_ip = 551; continue _fun67491;
 546:
            zulu = report.id;
 551:
            romeo = zulu;
 554:
            _closure2_slot8 = romeo;
            zulu = _closure1_slot23;
            zulu = zulu.GUILD_STAGE_VOICE;
            zulu = sizing === zulu;
            _closure2_slot9 = zulu;
            options = _closure1_slot24;
            zulu = options.CHANNEL;
            zulu = zulu.bind(options)(golf, romeo);
            _closure2_slot10 = zulu;
            foxtrot = _closure1_slot9;
            options = foxtrot.has;
            options = options.bind(foxtrot)(sizing);
            if(options) { _fun67491_ip = 851; continue _fun67491 }
 616:
            foxtrot = _closure1_slot0;
            sizing = _closure1_slot3;
            options = 33;
            options = sizing[options];
            foxtrot = foxtrot.bind(entity)(options);
            options = foxtrot.isActivityInTextSupportedForChannel;
            options = options.bind(foxtrot)(kilo);
            if(!options) { _fun67491_ip = 664; continue _fun67491 }
 650:
            foxtrot = _closure1_slot33;
            foxtrot = foxtrot.EMBEDDED_APPLICATION;
            options = backup === foxtrot;
 664:
            if(!options) { _fun67491_ip = 671; continue _fun67491 }
 667:
            options = offset != yankee;
 671:
            if(!options) { _fun67491_ip = 867; continue _fun67491 }
 677:
            foxtrot = _closure1_slot0;
            backup = _closure1_slot3;
            options = 23;
            options = backup[options];
            foxtrot = foxtrot.bind(entity)(options);
            options = foxtrot.transitionTo;
            kilo = _closure1_slot24;
            backup = kilo.CHANNEL;
            if(!(offset == golf)) { _fun67491_ip = 721; continue _fun67491 }
 717:
            golf = _closure1_slot25;
 721:
            golf = backup.bind(kilo)(golf, romeo);
            golf = options.bind(foxtrot)(golf);
            options = _closure1_slot1;
            foxtrot = _closure1_slot3;
            golf = 29;
            golf = foxtrot[golf];
            options = options.bind(entity)(golf);
            golf = {};
            golf['channelId'] = romeo;
            golf['applicationId'] = yankee;
            romeo = offset == tango;
            yankee = undefined;
            if(romeo) { _fun67491_ip = 777; continue _fun67491 }
 771:
            yankee = tango.intent;
 777:
            golf['intent'] = yankee;
            yankee = offset == tango;
            offset = undefined;
            if(yankee) { _fun67491_ip = 797; continue _fun67491 }
 791:
            offset = tango.inviterUserId;
 797:
            golf['inviterUserId'] = offset;
            golf['analyticsLocations'] = verify;
            offset = _closure1_slot0;
            yankee = _closure1_slot3;
            verify = 30;
            verify = yankee[verify];
            verify = offset.bind(entity)(verify);
            verify = verify.CommandOrigin;
            verify = verify.CHAT;
            golf['commandOrigin'] = verify;
            golf = options.bind(entity)(golf);
            _fun67491_ip = 867; continue _fun67491;
 851:
            golf = _closure1_slot5;
            oscar = function() {
                tango = _closure1_slot0;
                mike = _closure1_slot3;
                entity = 26;
                zulu = mike[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = 25;
                zulu = mike[zulu];
                mike = mike.paths;
                tango = tango.bind(entity)(zulu, mike);
                zulu = tango.then;
                mike = function(argFoo) {
                    _fun67493: for(var _fun67493_ip = 0; ; ) switch(_fun67493_ip) {
 0:
                        mike = argFoo;
                        mike = mike.default;
                        var _closure4_slot0 = mike;
                        mike = function() { // Original name: connect
                            _fun67494: for(var _fun67494_ip = 0; ; ) switch(_fun67494_ip) {
 0:
                                mike = _closure2_slot9;
                                if(mike) { _fun67494_ip = 406; continue _fun67494 }
 13:
                                tango = _closure4_slot0;
                                zulu = tango.selectVoiceChannel;
                                mike = _closure2_slot8;
                                mike = zulu.bind(tango)(mike);
                                zulu = _closure2_slot5;
                                mike = _closure1_slot33;
                                mike = mike.STREAM;
                                mike = zulu === mike;
                                if(!mike) { _fun67494_ip = 69; continue _fun67494 }
 59:
                                tango = _closure2_slot4;
                                zulu = null;
                                mike = zulu != tango;
 69:
                                if(!mike) { _fun67494_ip = 147; continue _fun67494 }
 72:
                                tango = _closure1_slot2;
                                zulu = _closure1_slot3;
                                mike = 28;
                                zulu = zulu[mike];
                                mike = undefined;
                                tango = tango.bind(mike)(zulu);
                                zulu = tango.watchStreamAndTransitionToStream;
                                mike = {};
                                oscar = _closure1_slot32;
                                oscar = oscar.GUILD;
                                mike['streamType'] = oscar;
                                oscar = _closure2_slot4;
                                mike['ownerId'] = oscar;
                                oscar = _closure2_slot0;
                                mike['guildId'] = oscar;
                                oscar = _closure2_slot8;
                                mike['channelId'] = oscar;
                                mike = zulu.bind(tango)(mike);
 147:
                                zulu = _closure2_slot5;
                                mike = _closure1_slot33;
                                mike = mike.EMBEDDED_APPLICATION;
                                mike = zulu === mike;
                                if(!mike) { _fun67494_ip = 178; continue _fun67494 }
 168:
                                tango = _closure2_slot6;
                                zulu = null;
                                mike = zulu != tango;
 178:
                                if(!mike) { _fun67494_ip = 402; continue _fun67494 }
 184:
                                zulu = _closure1_slot0;
                                tango = _closure1_slot3;
                                mike = 23;
                                mike = tango[mike];
                                tango = undefined;
                                oscar = zulu.bind(tango)(mike);
                                zulu = oscar.transitionTo;
                                offset = _closure1_slot24;
                                verify = offset.CHANNEL;
                                mike = _closure2_slot0;
                                golf = null;
                                if(!(golf == mike)) { _fun67494_ip = 238; continue _fun67494 }
 232:
                                options = _closure1_slot25;
                                _fun67494_ip = 242; continue _fun67494;
 238:
                                options = _closure2_slot0;
 242:
                                mike = _closure2_slot8;
                                mike = verify.bind(offset)(options, mike);
                                mike = zulu.bind(oscar)(mike);
                                zulu = _closure1_slot1;
                                oscar = _closure1_slot3;
                                mike = 29;
                                mike = oscar[mike];
                                zulu = zulu.bind(tango)(mike);
                                mike = {};
                                oscar = _closure2_slot8;
                                mike['channelId'] = oscar;
                                oscar = _closure2_slot6;
                                mike['applicationId'] = oscar;
                                oscar = _closure2_slot2;
                                options = golf == oscar;
                                oscar = undefined;
                                if(options) { _fun67494_ip = 318; continue _fun67494 }
 308:
                                options = _closure2_slot2;
                                oscar = options.intent;
 318:
                                mike['intent'] = oscar;
                                oscar = _closure2_slot2;
                                golf = golf == oscar;
                                oscar = undefined;
                                if(golf) { _fun67494_ip = 346; continue _fun67494 }
 336:
                                golf = _closure2_slot2;
                                oscar = golf.inviterUserId;
 346:
                                mike['inviterUserId'] = oscar;
                                oscar = _closure2_slot3;
                                mike['analyticsLocations'] = oscar;
                                oscar = _closure1_slot0;
                                golf = _closure1_slot3;
                                report = 30;
                                report = golf[report];
                                report = oscar.bind(tango)(report);
                                report = report.CommandOrigin;
                                report = report.CHAT;
                                mike['commandOrigin'] = report;
                                mike = zulu.bind(tango)(mike);
 402:
                                mike = undefined;
                                return mike;
 406:
                                report = _closure1_slot0;
                                tango = _closure1_slot3;
                                zulu = 27;
                                zulu = tango[zulu];
                                tango = undefined;
                                oscar = report.bind(tango)(zulu);
                                report = oscar.connectAndOpen;
                                golf = _closure2_slot1;
                                zulu = _closure1_slot11;
                                zulu = golf instanceof zulu;
                                if(zulu) { _fun67494_ip = 467; continue _fun67494 }
 452:
                                golf = _closure1_slot10;
                                zulu = _closure2_slot1;
                                zulu = golf.bind(tango)(zulu);
                                _fun67494_ip = 471; continue _fun67494;
 467:
                                zulu = _closure2_slot1;
 471:
                                zulu = report.bind(oscar)(zulu);
                                zulu = _closure1_slot0;
                                report = _closure1_slot3;
                                mike = 23;
                                mike = report[mike];
                                zulu = zulu.bind(tango)(mike);
                                mike = zulu.transitionTo;
                                entity = _closure2_slot10;
                                entity = mike.bind(zulu)(entity);
                                entity = undefined;
                                return entity;
                            }
                        };
                        zulu = _closure2_slot7;
                        if(zulu) { _fun67493_ip = 149; continue _fun67493 }
 31:
                        oscar = _closure1_slot0;
                        report = _closure1_slot3;
                        tango = 31;
                        tango = report[tango];
                        report = undefined;
                        options = oscar.bind(report)(tango);
                        golf = options.shouldShowMembershipVerificationGate;
                        oscar = _closure2_slot0;
                        verify = _closure1_slot16;
                        tango = new Array(4);
                        tango[0] = verify;
                        verify = _closure1_slot17;
                        tango[1] = verify;
                        verify = _closure1_slot21;
                        tango[2] = verify;
                        verify = _closure1_slot15;
                        tango[3] = verify;
                        tango = golf.bind(options)(oscar, tango);
                        if(!tango) { _fun67493_ip = 149; continue _fun67493 }
 111:
                        tango = _closure1_slot0;
                        oscar = _closure1_slot3;
                        zulu = 32;
                        zulu = oscar[zulu];
                        tango = tango.bind(report)(zulu);
                        zulu = tango.openMemberVerificationModal;
                        entity = _closure2_slot0;
                        entity = zulu.bind(tango)(entity, mike);
                        _fun67493_ip = 155; continue _fun67493;
 149:
                        entity = undefined;
                        entity = mike.bind(entity)();
 155:
                        entity = undefined;
                        return entity;
                    }
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            oscar = golf.bind(entity)(oscar);
 867:
            mike = function(argFoo, argBar) { // Original name: getTransition
                _fun67495: for(var _fun67495_ip = 0; ; ) switch(_fun67495_ip) {
 0:
                    mike = argBar;
                    zulu = argFoo;
                    golf = zulu.type;
                    tango = null;
                    if(!(tango == mike)) { _fun67495_ip = 21; continue _fun67495 }
 19:
                    mike = {};
 21:
                    zulu = mike.transitionTo;
                    var _closure3_slot0 = zulu;
                    options = mike.welcomeModalChannelId;
                    mike = mike.guildScheduledEvent;
                    zulu = _closure1_slot23;
                    oscar = zulu.GUILD_STAGE_VOICE;
                    zulu = {};
                    yankee = _closure1_slot1;
                    offset = _closure1_slot3;
                    verify = 22;
                    offset = offset[verify];
                    verify = undefined;
                    verify = yankee.bind(verify)(offset);
                    verify = verify.INVITE_ACCEPT;
                    zulu['source'] = verify;
                    verify = true;
                    zulu['navigationReplace'] = verify;
                    var _closure3_slot1 = zulu;
                    if(!(tango != options)) { _fun67495_ip = 111; continue _fun67495 }
 105:
                    zulu['welcomeModalChannelId'] = options;
 111:
                    if(!(golf === oscar)) { _fun67495_ip = 125; continue _fun67495 }
 115:
                    report = _closure1_slot34;
                    zulu['state'] = report;
 125:
                    if(!(tango != mike)) { _fun67495_ip = 140; continue _fun67495 }
 129:
                    mike = mike.id;
                    zulu['guildScheduledEventId'] = mike;
 140:
                    entity = function(argFoo) {
                        _fun67496: for(var _fun67496_ip = 0; ; ) switch(_fun67496_ip) {
 0:
                            report = argFoo;
                            zulu = _closure3_slot0;
                            entity = null;
                            if(!(entity == zulu)) { _fun67496_ip = 59; continue _fun67496 }
 16:
                            tango = _closure1_slot0;
                            zulu = _closure1_slot3;
                            entity = 23;
                            zulu = zulu[entity];
                            entity = undefined;
                            tango = tango.bind(entity)(zulu);
                            zulu = tango.transitionTo;
                            entity = _closure3_slot1;
                            entity = zulu.bind(tango)(report, entity);
                            _fun67496_ip = 75; continue _fun67496;
 59:
                            tango = _closure3_slot0;
                            zulu = _closure3_slot1;
                            mike = undefined;
                            entity = tango.bind(mike)(report, zulu);
 75:
                            return entity;
                        }
                    };
                    return entity;
                }
            };
            mike = mike.bind(entity)(report, tango);
            mike = mike.bind(entity)(zulu);
 885:
            return entity;
        }
    };
    var _closure1_slot38 = entity;
    entity = global;
    verify = entity.Object;
    report = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = report.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = golf[entity];
    entity = undefined;
    mike = tango.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 1;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    mike = mike.addPostConnectionCallback;
    var _closure1_slot5 = mike;
    mike = 2;
    report = golf[mike];
    report = tango.bind(entity)(report);
    var _closure1_slot6 = report;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    mike = mike.isGuildScheduledEventActive;
    var _closure1_slot7 = mike;
    mike = 3;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    report = mike.isGuildTextChannelType;
    var _closure1_slot8 = report;
    report = mike.GUILD_VOCAL_CHANNEL_TYPES;
    var _closure1_slot9 = report;
    report = mike.createChannelRecord;
    var _closure1_slot10 = report;
    mike = mike.ChannelRecordBase;
    var _closure1_slot11 = mike;
    mike = 4;
    mike = golf[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot12 = mike;
    mike = 5;
    mike = golf[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot13 = mike;
    mike = 6;
    mike = golf[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot14 = mike;
    mike = 7;
    mike = golf[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot15 = mike;
    mike = 8;
    mike = golf[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot16 = mike;
    mike = 9;
    mike = golf[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot17 = mike;
    mike = 10;
    mike = golf[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot18 = mike;
    mike = 11;
    mike = golf[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot19 = mike;
    mike = 12;
    mike = golf[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot20 = mike;
    mike = 13;
    mike = golf[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot21 = mike;
    mike = 14;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    tango = mike.Endpoints;
    var _closure1_slot22 = tango;
    tango = mike.ChannelTypes;
    var _closure1_slot23 = tango;
    tango = mike.Routes;
    var _closure1_slot24 = tango;
    tango = mike.ME;
    var _closure1_slot25 = tango;
    tango = mike.RPCCommands;
    var _closure1_slot26 = tango;
    tango = mike.GuildFeatures;
    var _closure1_slot27 = tango;
    tango = mike.AnalyticEvents;
    var _closure1_slot28 = tango;
    tango = mike.UserFlags;
    var _closure1_slot29 = tango;
    mike = mike.Permissions;
    var _closure1_slot30 = mike;
    mike = 15;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    mike = mike.StaticChannelRoute;
    var _closure1_slot31 = mike;
    mike = 16;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    mike = mike.StreamTypes;
    var _closure1_slot32 = mike;
    mike = 17;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    mike = mike.InviteTargetTypes;
    var _closure1_slot33 = mike;
    mike = 18;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    mike = mike.STAGE_INVITE_STATE_KEY;
    var _closure1_slot34 = mike;
    mike = null;
    var _closure1_slot35 = mike;
    report = function(argFoo, argBar) { // Original name: transitionToInviteChannelSync
        _fun67497: for(var _fun67497_ip = 0; ; ) switch(_fun67497_ip) {
 0:
            zulu = arguments[2];
            entity = argFoo;
            var _closure2_slot0 = entity;
            entity = argBar;
            var _closure2_slot1 = entity;
            entity = undefined;
            if(!(zulu === entity)) { _fun67497_ip = 29; continue _fun67497 }
 25:
            zulu = new Array(0);
 29:
            var _closure2_slot2 = zulu;
            tango = _closure1_slot13;
            zulu = tango.addConditionalChangeListener;
            mike = function() {
                _fun67498: for(var _fun67498_ip = 0; ; ) switch(_fun67498_ip) {
 0:
                    tango = _closure1_slot13;
                    mike = tango.getChannel;
                    entity = _closure2_slot0;
                    golf = mike.bind(tango)(entity);
                    mike = _closure1_slot21;
                    entity = mike.getCurrentUser;
                    tango = entity.bind(mike)();
                    offset = null;
                    entity = offset == golf;
                    if(entity) { _fun67498_ip = 50; continue _fun67498 }
 46:
                    entity = offset == tango;
 50:
                    if(entity) { _fun67498_ip = 190; continue _fun67498 }
 56:
                    mike = golf.nsfw;
                    if(!mike) { _fun67498_ip = 74; continue _fun67498 }
 65:
                    tango = tango.nsfwAllowed;
                    mike = !tango;
 74:
                    mike = !mike;
                    if(!mike) { _fun67498_ip = 187; continue _fun67498 }
 80:
                    tango = _closure2_slot1;
                    oscar = offset == tango;
                    report = undefined;
                    tango = undefined;
                    if(oscar) { _fun67498_ip = 105; continue _fun67498 }
 95:
                    oscar = _closure2_slot1;
                    tango = oscar.guildScheduledEvent;
 105:
                    if(!(offset == tango)) { _fun67498_ip = 167; continue _fun67498 }
 109:
                    oscar = _closure1_slot38;
                    tango = {};
                    options = golf.getGuildId;
                    options = options.bind(golf)();
                    if(!(offset == options)) { _fun67498_ip = 133; continue _fun67498 }
 129:
                    options = _closure1_slot25;
 133:
                    tango['guildId'] = options;
                    tango['channel'] = golf;
                    golf = _closure2_slot1;
                    tango['options'] = golf;
                    golf = _closure2_slot2;
                    tango['analyticsLocations'] = golf;
                    tango = oscar.bind(report)(tango);
                    mike = false;
                    _fun67498_ip = 187; continue _fun67498;
 167:
                    tango = _closure2_slot1;
                    zulu = function(argFoo) { // Original name: transitionToInviteEvent
                        _fun67499: for(var _fun67499_ip = 0; ; ) switch(_fun67499_ip) {
 0:
                            mike = argFoo;
                            zulu = mike.guildScheduledEvent;
                            var _closure4_slot0 = zulu;
                            mike = mike.welcomeModalChannelId;
                            var _closure4_slot1 = mike;
                            mike = null;
                            if(!(mike != zulu)) { _fun67499_ip = 52; continue _fun67499 }
 31:
                            zulu = _closure1_slot5;
                            mike = undefined;
                            entity = function() {
                                _fun67500: for(var _fun67500_ip = 0; ; ) switch(_fun67500_ip) {
 0:
                                    report = {};
                                    entity = _closure4_slot0;
                                    entity = entity.id;
                                    report['guildScheduledEventId'] = entity;
                                    zulu = _closure4_slot1;
                                    entity = null;
                                    if(!(entity != zulu)) { _fun67500_ip = 39; continue _fun67500 }
 29:
                                    entity = _closure4_slot1;
                                    report['welcomeModalChannelId'] = entity;
 39:
                                    tango = _closure1_slot0;
                                    zulu = _closure1_slot3;
                                    entity = 34;
                                    zulu = zulu[entity];
                                    entity = undefined;
                                    tango = tango.bind(entity)(zulu);
                                    zulu = tango.transitionToEventDetailsFromInvite;
                                    mike = _closure4_slot0;
                                    mike = zulu.bind(tango)(mike, report);
                                    return entity;
                                }
                            };
                            entity = zulu.bind(mike)(entity);
 52:
                            entity = undefined;
                            return entity;
                        }
                    };
                    zulu = zulu.bind(report)(tango);
                    mike = false;
 187:
                    entity = mike;
 190:
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    var _closure1_slot36 = report;
    mike = function() {
        tango = _closure1_slot4;
        zulu = undefined;
        mike = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun67503: for(var _fun67503_ip = 0; ; ) switch(_fun67503_ip) {
 0:
                    StartGenerator();
                    oscar = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun67503_ip = 99; continue _fun67503 }
 10:
                    golf = oscar.guild_id;
                    tango = oscar.channel_id;
                    report = _closure1_slot7;
                    mike = undefined;
                    report = report.bind(mike)(oscar);
                    if(!report) { _fun67503_ip = 43; continue _fun67503 }
 37:
                    report = null;
                    if(!(report == tango)) { _fun67503_ip = 87; continue _fun67503 }
 43:
                    oscar = _closure1_slot1;
                    options = _closure1_slot3;
                    report = 37;
                    report = options[report];
                    oscar = oscar.bind(mike)(report);
                    report = oscar.transitionToGuildSync;
                    report = report.bind(oscar)(golf);
                    SaveGenerator(address=78);
 76:
                    return report;
 78:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(!oscar) { _fun67503_ip = 96; continue _fun67503 }
 84:
                    return report;
 87:
                    zulu = _closure1_slot36;
                    zulu = zulu.bind(mike)(tango);
 96:
                    return mike;
 99:
                    return entity;
                }
            };
            return entity;
        };
        mike = tango.bind(zulu)(mike);
        var _closure2_slot0 = mike;
        entity = function() {
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        return entity;
    };
    mike = mike.bind(entity)();
    tango = {};
    verify = function(argFoo, argBar, argBaz) { // Original name: resolveInvite
        _fun67505: for(var _fun67505_ip = 0; ; ) switch(_fun67505_ip) {
 0:
            oscar = argFoo;
            report = argBar;
            tango = argBaz;
            var _closure2_slot0 = oscar;
            var _closure2_slot1 = report;
            var _closure2_slot2 = tango;
            verify = _closure1_slot1;
            zulu = _closure1_slot3;
            entity = 35;
            golf = zulu[entity];
            zulu = undefined;
            verify = verify.bind(zulu)(golf);
            golf = verify.isDispatching;
            golf = golf.bind(verify)();
            if(golf) { _fun67505_ip = 140; continue _fun67505 }
 61:
            golf = _closure1_slot1;
            options = _closure1_slot3;
            entity = options[entity];
            offset = golf.bind(zulu)(entity);
            verify = offset.dispatch;
            entity = {};
            yankee = 'INVITE_RESOLVE';
            entity['type'] = yankee;
            entity['code'] = oscar;
            entity = verify.bind(offset)(entity);
            entity = 36;
            entity = options[entity];
            entity = golf.bind(zulu)(entity);
            tango = entity.bind(zulu)(oscar, report, tango);
            zulu = tango.then;
            entity = function(argFoo) {
                _fun67507: for(var _fun67507_ip = 0; ; ) switch(_fun67507_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.invite;
                    mike = entity.code;
                    oscar = entity.banned;
                    entity = null;
                    if(!(entity == zulu)) { _fun67507_ip = 84; continue _fun67507 }
 26:
                    report = _closure1_slot1;
                    tango = _closure1_slot3;
                    entity = 35;
                    tango = tango[entity];
                    entity = undefined;
                    report = report.bind(entity)(tango);
                    tango = report.dispatch;
                    entity = {};
                    golf = 'INVITE_RESOLVE_FAILURE';
                    entity['type'] = golf;
                    entity['code'] = mike;
                    entity['banned'] = oscar;
                    entity = tango.bind(report)(entity);
                    _fun67507_ip = 138; continue _fun67507;
 84:
                    report = _closure1_slot1;
                    tango = _closure1_slot3;
                    entity = 35;
                    tango = tango[entity];
                    entity = undefined;
                    report = report.bind(entity)(tango);
                    tango = report.dispatch;
                    entity = {};
                    oscar = 'INVITE_RESOLVE_SUCCESS';
                    entity['type'] = oscar;
                    entity['invite'] = zulu;
                    entity['code'] = mike;
                    entity = tango.bind(report)(entity);
 138:
                    entity = {};
                    entity['invite'] = zulu;
                    entity['code'] = mike;
                    return entity;
                }
            };
            entity = zulu.bind(tango)(entity);
            _fun67505_ip = 175; continue _fun67505;
 140:
            zulu = global;
            tango = zulu.Promise;
            zulu = tango.resolve;
            tango = zulu.bind(tango)();
            zulu = tango.then;
            mike = function() {
                report = _closure1_slot39;
                tango = _closure2_slot0;
                zulu = _closure2_slot1;
                mike = _closure2_slot2;
                entity = undefined;
                entity = report.bind(entity)(tango, zulu, mike);
                return entity;
            };
            entity = zulu.bind(tango)(mike);
 175:
            return entity;
        }
    };
    var _closure1_slot39 = verify;
    tango['resolveInvite'] = verify;
    verify = function(argFoo, argBar) { // Original name: getInviteContext
        _fun67508: for(var _fun67508_ip = 0; ; ) switch(_fun67508_ip) {
 0:
            zulu = argBar;
            entity = {};
            mike = argFoo;
            entity['location'] = mike;
            mike = zulu.guild;
            report = null;
            oscar = report != mike;
            tango = undefined;
            if(!oscar) { _fun67508_ip = 38; continue _fun67508 }
 28:
            oscar = zulu.guild;
            tango = oscar.id;
 38:
            entity['location_guild_id'] = tango;
            tango = zulu.channel;
            oscar = report != tango;
            tango = undefined;
            if(!oscar) { _fun67508_ip = 69; continue _fun67508 }
 59:
            oscar = zulu.channel;
            tango = oscar.id;
 69:
            entity['location_channel_id'] = tango;
            tango = zulu.channel;
            tango = report != tango;
            mike = undefined;
            if(!tango) { _fun67508_ip = 100; continue _fun67508 }
 90:
            zulu = zulu.channel;
            mike = zulu.type;
 100:
            entity['location_channel_type'] = mike;
            return entity;
        }
    };
    tango['getInviteContext'] = verify;
    verify = function(argFoo) { // Original name: createInvite
        _fun67509: for(var _fun67509_ip = 0; ; ) switch(_fun67509_ip) {
 0:
            zulu = arguments[1];
            mike = argFoo;
            var _closure2_slot0 = mike;
            mike = undefined;
            if(!(zulu === mike)) { _fun67509_ip = 20; continue _fun67509 }
 18:
            zulu = {};
 20:
            var _closure2_slot1 = zulu;
            zulu = arguments[2];
            var _closure2_slot2 = zulu;
            zulu = _closure1_slot4;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun67511: for(var _fun67511_ip = 0; ; ) switch(_fun67511_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun67511_ip = 278; continue _fun67511 }
 10: // try_start_0
                        zulu = _closure1_slot0;
                        report = _closure1_slot3;
                        mike = 38;
                        mike = report[mike];
                        oscar = undefined;
                        mike = zulu.bind(oscar)(mike);
                        report = mike.HTTP;
                        zulu = report.post;
                        mike = {};
                        offset = _closure1_slot22;
                        verify = offset.INSTANT_INVITES;
                        options = _closure2_slot0;
                        options = verify.bind(offset)(options);
                        mike['url'] = options;
                        options = _closure2_slot1;
                        mike['body'] = options;
                        options = {};
                        verify = _closure2_slot2;
                        options['location'] = verify;
                        mike['context'] = options;
                        options = true;
                        mike['rejectWithError'] = options;
                        mike = zulu.bind(report)(mike);
                        SaveGenerator(address=111);
 109:
                        return mike;
 111:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(zulu) { _fun67511_ip = 178; continue _fun67511 }
 117:
                        zulu = mike.body;
                        report = _closure1_slot1;
                        options = _closure1_slot3;
                        tango = 35;
                        tango = options[tango];
                        oscar = report.bind(oscar)(tango);
                        report = oscar.dispatch;
                        tango = {};
                        options = 'INSTANT_INVITE_CREATE_SUCCESS';
                        tango['type'] = options;
                        golf = _closure2_slot0;
                        tango['channelId'] = golf;
                        tango['invite'] = zulu;
                        tango = report.bind(oscar)(tango);
 175: // try_end0
                        return zulu;
 178:
                        return mike;
 181: // catch_target0
                        CatchBlockStart(arg_register=3);
                        report = _closure1_slot1;
                        oscar = _closure1_slot3;
                        mike = 35;
                        mike = oscar[mike];
                        zulu = undefined;
                        options = report.bind(zulu)(mike);
                        golf = options.dispatch;
                        mike = {};
                        verify = 'INSTANT_INVITE_CREATE_FAILURE';
                        mike['type'] = verify;
                        verify = _closure2_slot0;
                        mike['channelId'] = verify;
                        mike = golf.bind(options)(mike);
                        mike = 39;
                        mike = oscar[mike];
                        mike = report.bind(zulu)(mike);
                        zulu = mike.prototype;
                        zulu = Object.create(zulu, {constructor: {value: mike}});
                        romeo = zulu;
                        yankee = tango;
                        mike = new romeo[mike](yankee, offset);
                        mike = mike instanceof Object ? mike : zulu;
                        throw mike;
 278:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zulu.bind(mike)(entity);
            entity = entity.bind(mike)();
            return entity;
        }
    };
    tango['createInvite'] = verify;
    verify = function(argFoo, argBar) { // Original name: mobileCreateInvite
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        mike = this;
        var _closure2_slot2 = mike;
        zulu = _closure1_slot4;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun67514: for(var _fun67514_ip = 0; ; ) switch(_fun67514_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun67514_ip = 188; continue _fun67514 }
 10:
                    oscar = _closure1_slot18;
                    report = oscar.getInvite;
                    tango = _closure2_slot0;
                    tango = tango.id;
                    report = report.bind(oscar)(tango);
                    tango = null;
                    if(!(tango != report)) { _fun67514_ip = 67; continue _fun67514 }
 46:
                    oscar = report.isExpired;
                    oscar = oscar.bind(report)();
                    if(oscar) { _fun67514_ip = 67; continue _fun67514 }
 59:
                    report = report.code;
                    return report;
 67:
                    options = {};
                    oscar = _closure1_slot1;
                    report = _closure1_slot3;
                    zulu = 40;
                    report = report[zulu];
                    zulu = undefined;
                    report = oscar.bind(zulu)(report);
                    report = report.Seconds;
                    report = report.DAY;
                    options['max_age'] = report;
                    golf = _closure2_slot2;
                    oscar = golf.createInvite;
                    report = _closure2_slot0;
                    report = report.id;
                    mike = _closure2_slot1;
                    oscar = oscar.bind(golf)(report, options, mike);
                    report = oscar.catch;
                    mike = function() {
                        zulu = _closure1_slot1;
                        mike = _closure1_slot3;
                        entity = 35;
                        mike = mike[entity];
                        entity = undefined;
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.dispatch;
                        entity = {};
                        tango = 'NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED';
                        entity['type'] = tango;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    mike = report.bind(oscar)(mike);
                    SaveGenerator(address=162);
 160:
                    return mike;
 162:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun67514_ip = 185; continue _fun67514 }
 168:
                    tango = tango == mike;
                    zulu = undefined;
                    if(tango) { _fun67514_ip = 182; continue _fun67514 }
 177:
                    zulu = mike.code;
 182:
                    return zulu;
 185:
                    return mike;
 188:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    tango['mobileCreateInvite'] = verify;
    verify = function(argFoo) { // Original name: getAllFriendInvites
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot4;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun67518: for(var _fun67518_ip = 0; ; ) switch(_fun67518_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun67518_ip = 428; continue _fun67518 }
 12:
                    zulu = global;
                    oscar = zulu.Promise;
                    mike = oscar.prototype;
                    report = Object.create(mike, {constructor: {value: oscar}});
                    foxtrot = function(argFoo) {
                        mike = argFoo;
                        var _closure5_slot0 = mike;
                        tango = _closure1_slot1;
                        zulu = _closure1_slot3;
                        mike = 35;
                        zulu = zulu[mike];
                        mike = undefined;
                        zulu = tango.bind(mike)(zulu);
                        mike = zulu.wait;
                        entity = function() {
                            zulu = _closure5_slot0;
                            mike = undefined;
                            entity = null;
                            entity = zulu.bind(mike)(entity);
                            return entity;
                        };
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    backup = report;
                    mike = new backup[oscar](foxtrot, romeo);
                    mike = mike instanceof Object ? mike : report;
                    SaveGenerator(address=51);
 49:
                    return mike;
 51:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun67518_ip = 425; continue _fun67518 }
 60:
                    golf = _closure1_slot18;
                    oscar = golf.getFriendInvitesFetching;
                    oscar = oscar.bind(golf)();
                    if(oscar) { _fun67518_ip = 340; continue _fun67518 }
 85:
                    options = _closure1_slot0;
                    oscar = _closure1_slot3;
                    golf = 38;
                    golf = oscar[golf];
                    offset = undefined;
                    golf = options.bind(offset)(golf);
                    verify = golf.HTTP;
                    options = verify.get;
                    golf = {};
                    yankee = _closure1_slot22;
                    yankee = yankee.FRIEND_INVITES;
                    golf['url'] = yankee;
                    yankee = {};
                    romeo = _closure2_slot0;
                    yankee['location'] = romeo;
                    golf['context'] = yankee;
                    yankee = false;
                    golf['rejectWithError'] = yankee;
                    golf = options.bind(verify)(golf);
                    _closure1_slot35 = golf;
                    golf = _closure1_slot1;
                    yankee = 35;
                    oscar = oscar[yankee];
                    options = golf.bind(offset)(oscar);
                    golf = options.dispatch;
                    oscar = {};
                    verify = 'FRIEND_INVITES_FETCH_REQUEST';
                    oscar['type'] = verify;
                    verify = zulu.Date;
                    romeo = verify.prototype;
                    romeo = Object.create(romeo, {constructor: {value: verify}});
                    backup = romeo;
                    verify = new backup[verify](foxtrot);
                    verify = verify instanceof Object ? verify : romeo;
                    oscar['requestedAt'] = verify;
                    oscar = golf.bind(options)(oscar);
                    oscar = _closure1_slot35;
                    SaveGenerator(address=242);
 240:
                    return oscar;
 242:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(golf) { _fun67518_ip = 337; continue _fun67518 }
 248:
                    golf = oscar.body;
                    options = null;
                    _closure1_slot35 = options;
                    verify = _closure1_slot1;
                    options = _closure1_slot3;
                    options = options[yankee];
                    offset = verify.bind(offset)(options);
                    verify = offset.dispatch;
                    options = {};
                    yankee = 'FRIEND_INVITES_FETCH_RESPONSE';
                    options['type'] = yankee;
                    yankee = zulu.Date;
                    romeo = yankee.prototype;
                    romeo = Object.create(romeo, {constructor: {value: yankee}});
                    backup = romeo;
                    yankee = new backup[yankee](foxtrot);
                    yankee = yankee instanceof Object ? yankee : romeo;
                    options['receivedAt'] = yankee;
                    options['invites'] = golf;
                    options = verify.bind(offset)(options);
                    return golf;
 337:
                    return oscar;
 340:
                    golf = _closure1_slot35;
                    oscar = null;
                    if(!(oscar == golf)) { _fun67518_ip = 401; continue _fun67518 }
 350:
                    golf = zulu.Promise;
                    oscar = golf.reject;
                    verify = zulu.Error;
                    zulu = verify.prototype;
                    options = Object.create(zulu, {constructor: {value: verify}});
                    foxtrot = 'Invalid friend invite fetch request';
                    backup = options;
                    zulu = new backup[verify](foxtrot, romeo);
                    zulu = zulu instanceof Object ? zulu : options;
                    zulu = oscar.bind(golf)(zulu);
                    _fun67518_ip = 422; continue _fun67518;
 401:
                    oscar = _closure1_slot35;
                    report = oscar.then;
                    tango = function(argFoo) {
                        entity = argFoo;
                        entity = entity.body;
                        return entity;
                    };
                    zulu = report.bind(oscar)(tango);
 422:
                    return zulu;
 425:
                    return mike;
 428:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    tango['getAllFriendInvites'] = verify;
    verify = function(argFoo, argBar) { // Original name: createFriendInvite
        _fun67522: for(var _fun67522_ip = 0; ; ) switch(_fun67522_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot1;
            golf = _closure1_slot3;
            mike = 35;
            mike = golf[mike];
            tango = undefined;
            options = zulu.bind(tango)(mike);
            zulu = options.dispatch;
            mike = {};
            verify = 'FRIEND_INVITE_CREATE_REQUEST';
            mike['type'] = verify;
            mike = zulu.bind(options)(mike);
            zulu = _closure1_slot0;
            mike = 38;
            mike = golf[mike];
            mike = zulu.bind(tango)(mike);
            tango = mike.HTTP;
            zulu = tango.post;
            mike = {};
            oscar = _closure1_slot22;
            oscar = oscar.FRIEND_INVITES;
            mike['url'] = oscar;
            oscar = null;
            if(!(oscar == report)) { _fun67522_ip = 103; continue _fun67522 }
 101:
            report = {};
 103:
            mike['body'] = report;
            report = {};
            oscar = argBar;
            report['location'] = oscar;
            mike['context'] = report;
            report = false;
            mike['rejectWithError'] = report;
            tango = zulu.bind(tango)(mike);
            zulu = tango.then;
            mike = function(argFoo) {
                entity = argFoo;
                entity = entity.body;
                tango = _closure1_slot1;
                zulu = _closure1_slot3;
                mike = 35;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = tango.dispatch;
                mike = {};
                report = 'FRIEND_INVITE_CREATE_SUCCESS';
                mike['type'] = report;
                mike['invite'] = entity;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity = function(argFoo) {
                entity = argFoo;
                tango = _closure1_slot1;
                zulu = _closure1_slot3;
                mike = 35;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = tango.dispatch;
                mike = {};
                report = 'FRIEND_INVITE_CREATE_FAILURE';
                mike['type'] = report;
                mike['error'] = entity;
                mike = zulu.bind(tango)(mike);
                throw entity;
            };
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    tango['createFriendInvite'] = verify;
    verify = function() { // Original name: revokeFriendInvites
        mike = _closure1_slot1;
        report = _closure1_slot3;
        entity = 35;
        entity = report[entity];
        zulu = undefined;
        oscar = mike.bind(zulu)(entity);
        mike = oscar.dispatch;
        entity = {};
        golf = 'FRIEND_INVITE_REVOKE_REQUEST';
        entity['type'] = golf;
        entity = mike.bind(oscar)(entity);
        mike = _closure1_slot0;
        entity = 38;
        entity = report[entity];
        entity = mike.bind(zulu)(entity);
        zulu = entity.HTTP;
        mike = zulu.del;
        entity = {};
        tango = _closure1_slot22;
        tango = tango.FRIEND_INVITES;
        entity['url'] = tango;
        tango = {};
        report = global;
        report = report.location;
        tango['location'] = report;
        entity['context'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        zulu = mike.bind(zulu)(entity);
        mike = zulu.then;
        entity = function(argFoo) {
            entity = argFoo;
            report = entity.body;
            zulu = _closure1_slot1;
            mike = _closure1_slot3;
            entity = 35;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'FRIEND_INVITE_REVOKE_SUCCESS';
            mike['type'] = oscar;
            mike['invites'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['revokeFriendInvites'] = verify;
    verify = function(argFoo) { // Original name: revokeFriendInvite
        zulu = _closure1_slot0;
        mike = _closure1_slot3;
        entity = 38;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.del;
        entity = {};
        oscar = _closure1_slot22;
        report = oscar.INVITE;
        tango = argFoo;
        tango = report.bind(oscar)(tango);
        entity['url'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['revokeFriendInvite'] = verify;
    verify = function(argFoo) { // Original name: clearInviteFromStore
        zulu = _closure1_slot1;
        mike = _closure1_slot3;
        entity = 35;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'INSTANT_INVITE_CLEAR';
        mike['type'] = report;
        report = argFoo;
        mike['channelId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango['clearInviteFromStore'] = verify;
    verify = function(argFoo) { // Original name: revokeInvite
        golf = argFoo;
        yankee = golf.code;
        var _closure2_slot0 = yankee;
        mike = golf.channel;
        var _closure2_slot1 = mike;
        zulu = _closure1_slot1;
        offset = _closure1_slot3;
        mike = 41;
        mike = offset[mike];
        verify = undefined;
        tango = zulu.bind(verify)(mike);
        zulu = tango.delete;
        mike = {};
        options = _closure1_slot22;
        report = options.INVITE;
        report = report.bind(options)(yankee);
        mike['url'] = report;
        report = true;
        mike['oldFormErrors'] = report;
        report = {};
        options = _closure1_slot0;
        oscar = 42;
        oscar = offset[oscar];
        oscar = options.bind(verify)(oscar);
        oscar = oscar.NetworkActionNames;
        oscar = oscar.INVITE_REVOKE;
        report['event'] = oscar;
        oscar = {};
        options = golf.uses;
        oscar['uses'] = options;
        options = golf.maxUses;
        oscar['max_uses'] = options;
        options = golf.maxAge;
        oscar['max_age'] = options;
        golf = golf.type;
        oscar['invite_type'] = golf;
        report['properties'] = oscar;
        mike['trackedActionData'] = report;
        report = false;
        mike['rejectWithError'] = report;
        zulu = zulu.bind(tango)(mike);
        mike = zulu.then;
        entity = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot3;
            entity = 35;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'INSTANT_INVITE_REVOKE_SUCCESS';
            mike['type'] = report;
            oscar = _closure2_slot0;
            mike['code'] = oscar;
            report = _closure2_slot1;
            report = report.id;
            mike['channelId'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['revokeInvite'] = verify;
    verify = function(argFoo) { // Original name: acceptInvite
        _fun67531: for(var _fun67531_ip = 0; ; ) switch(_fun67531_ip) {
 0:
            entity = argFoo;
            golf = entity.inviteKey;
            romeo = entity.context;
            zulu = entity.callback;
            var _closure2_slot0 = zulu;
            entity = entity.skipOnboarding;
            var _closure2_slot1 = entity;
            oscar = _closure1_slot0;
            tango = _closure1_slot3;
            entity = 43;
            entity = tango[entity];
            tango = undefined;
            oscar = oscar.bind(tango)(entity);
            entity = oscar.parseExtraDataFromInviteKey;
            entity = entity.bind(oscar)(golf);
            var _closure2_slot2 = entity;
            yankee = entity.baseCode;
            var _closure2_slot3 = yankee;
            golf = _closure1_slot12;
            oscar = golf.getSessionId;
            options = oscar.bind(golf)();
            golf = {};
            foxtrot = golf;
            report = copyDataProperties(foxtrot, romeo);
            report = entity.guildScheduledEventId;
            entity = 'invite_guild_scheduled_event_id';
            golf[entity] = report;
            report = _closure1_slot21;
            entity = report.getCurrentUser;
            offset = entity.bind(report)();
            report = null;
            oscar = report == offset;
            entity = undefined;
            if(oscar) { _fun67531_ip = 171; continue _fun67531 }
 150:
            verify = offset.hasFlag;
            oscar = _closure1_slot29;
            oscar = oscar.QUARANTINED;
            entity = verify.bind(offset)(oscar);
 171:
            if(!(report != entity)) { _fun67531_ip = 181; continue _fun67531 }
 175:
            if(entity) { _fun67531_ip = 337; continue _fun67531 }
 181:
            report = _closure1_slot1;
            oscar = _closure1_slot3;
            entity = 35;
            entity = oscar[entity];
            verify = report.bind(tango)(entity);
            report = verify.dispatch;
            entity = {};
            offset = 'INVITE_ACCEPT';
            entity['type'] = offset;
            entity['code'] = yankee;
            entity = report.bind(verify)(entity);
            report = _closure1_slot0;
            entity = 38;
            entity = oscar[entity];
            entity = report.bind(tango)(entity);
            oscar = entity.HTTP;
            report = oscar.post;
            entity = {};
            offset = _closure1_slot22;
            verify = offset.INVITE;
            verify = verify.bind(offset)(yankee);
            entity['url'] = verify;
            entity['context'] = golf;
            golf = true;
            entity['oldFormErrors'] = golf;
            golf = {};
            golf['session_id'] = options;
            entity['body'] = golf;
            golf = false;
            entity['rejectWithError'] = golf;
            golf = report.bind(oscar)(entity);
            oscar = golf.then;
            entity = function() {
                tango = _closure1_slot4;
                zulu = undefined;
                mike = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun67535: for(var _fun67535_ip = 0; ; ) switch(_fun67535_ip) {
 0:
                            StartGenerator();
                            mike = argFoo;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(zulu) { _fun67535_ip = 303; continue _fun67535 }
 13:
                            tango = _closure1_slot1;
                            report = _closure1_slot3;
                            zulu = 35;
                            zulu = report[zulu];
                            report = undefined;
                            options = tango.bind(report)(zulu);
                            golf = options.dispatch;
                            tango = {};
                            zulu = 'INVITE_ACCEPT_SUCCESS';
                            tango['type'] = zulu;
                            zulu = mike.body;
                            tango['invite'] = zulu;
                            verify = _closure2_slot3;
                            tango['code'] = verify;
                            tango = golf.bind(options)(tango);
                            options = _closure1_slot6;
                            golf = options.getGuildScheduledEvent;
                            tango = _closure2_slot2;
                            tango = tango.guildScheduledEventId;
                            options = golf.bind(options)(tango);
                            tango = {};
                            romeo = mike.body;
                            foxtrot = tango;
                            golf = copyDataProperties(foxtrot, romeo);
                            golf = 'guild_scheduled_event';
                            tango[golf] = options;
                            golf = null;
                            options = golf == tango;
                            offset = undefined;
                            if(options) { _fun67535_ip = 143; continue _fun67535 }
 138:
                            offset = tango.guild_id;
 143:
                            if(!(golf == offset)) { _fun67535_ip = 178; continue _fun67535 }
 147:
                            verify = golf == tango;
                            options = undefined;
                            if(verify) { _fun67535_ip = 175; continue _fun67535 }
 156:
                            verify = tango.guild;
                            yankee = golf == verify;
                            options = undefined;
                            if(yankee) { _fun67535_ip = 175; continue _fun67535 }
 170:
                            options = verify.id;
 175:
                            offset = options;
 178:
                            options = _closure2_slot1;
                            if(options) { _fun67535_ip = 278; continue _fun67535 }
 185:
                            if(!(golf != offset)) { _fun67535_ip = 278; continue _fun67535 }
 189:
                            options = tango.new_member;
                            if(!options) { _fun67535_ip = 278; continue _fun67535 }
 198:
                            verify = _closure1_slot0;
                            oscar = _closure1_slot3;
                            options = 26;
                            options = oscar[options];
                            verify = verify.bind(report)(options);
                            options = 45;
                            options = oscar[options];
                            oscar = oscar.paths;
                            oscar = verify.bind(report)(options, oscar);
                            SaveGenerator(address=240);
 238:
                            return oscar;
 240:
                            ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                            if(options) { _fun67535_ip = 275; continue _fun67535 }
 246:
                            verify = oscar.default;
                            options = {};
                            options['guildId'] = offset;
                            options = verify.bind(report)(options);
                            SaveGenerator(address=266);
 264:
                            return options;
 266:
                            ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                            if(!verify) { _fun67535_ip = 278; continue _fun67535 }
 272:
                            return options;
 275:
                            return oscar;
 278:
                            oscar = _closure2_slot0;
                            if(!(golf != oscar)) { _fun67535_ip = 295; continue _fun67535 }
 286:
                            zulu = _closure2_slot0;
                            zulu = zulu.bind(report)(tango);
 295:
                            mike = mike.body;
                            return mike;
 303:
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
            report = entity.bind(tango)();
            entity = function(argFoo) {
                _fun67537: for(var _fun67537_ip = 0; ; ) switch(_fun67537_ip) {
 0:
                    zulu = argFoo;
                    report = _closure1_slot1;
                    tango = _closure1_slot3;
                    mike = 35;
                    mike = tango[mike];
                    tango = undefined;
                    oscar = report.bind(tango)(mike);
                    report = oscar.dispatch;
                    mike = {};
                    golf = 'INVITE_ACCEPT_FAILURE';
                    mike['type'] = golf;
                    golf = _closure2_slot3;
                    mike['code'] = golf;
                    golf = {};
                    offset = zulu.body;
                    options = null;
                    yankee = options == offset;
                    verify = undefined;
                    if(yankee) { _fun67537_ip = 79; continue _fun67537 }
 74:
                    verify = offset.message;
 79:
                    golf['message'] = verify;
                    verify = zulu.body;
                    offset = options == verify;
                    options = undefined;
                    if(offset) { _fun67537_ip = 102; continue _fun67537 }
 97:
                    options = verify.code;
 102:
                    golf['code'] = options;
                    mike['error'] = golf;
                    mike = report.bind(oscar)(mike);
                    mike = _closure1_slot1;
                    report = _closure1_slot3;
                    entity = 46;
                    entity = report[entity];
                    entity = mike.bind(tango)(entity);
                    mike = entity.prototype;
                    mike = Object.create(mike, {constructor: {value: entity}});
                    foxtrot = mike;
                    romeo = zulu;
                    entity = new foxtrot[entity](romeo, yankee);
                    entity = entity instanceof Object ? entity : mike;
                    throw entity;
                }
            };
            entity = oscar.bind(golf)(report, entity);
            _fun67531_ip = 396; continue _fun67531;
 337:
            report = _closure1_slot1;
            oscar = _closure1_slot3;
            zulu = 44;
            zulu = oscar[zulu];
            zulu = report.bind(tango)(zulu);
            zulu = zulu.bind(tango)();
            zulu = global;
            tango = zulu.Promise;
            zulu = tango.prototype;
            zulu = Object.create(zulu, {constructor: {value: tango}});
            foxtrot = function(argFoo, argBar) {
                entity = global;
                entity = entity.Error;
                mike = entity.prototype;
                mike = Object.create(mike, {constructor: {value: entity}});
                report = mike;
                entity = new report[entity](tango);
                zulu = entity instanceof Object ? entity : mike;
                mike = argBar;
                entity = undefined;
                entity = mike.bind(entity)(zulu);
                return entity;
            };
            backup = zulu;
            mike = new backup[tango](foxtrot, romeo);
            entity = mike instanceof Object ? mike : zulu;
 396:
            return entity;
        }
    };
    tango['acceptInvite'] = verify;
    verify = function(argFoo) { // Original name: acceptInviteAndTransitionToInviteChannel
        entity = argFoo;
        zulu = this;
        golf = entity.inviteKey;
        oscar = entity.context;
        mike = entity.analyticsLocations;
        var _closure2_slot0 = mike;
        mike = entity.callback;
        var _closure2_slot1 = mike;
        report = entity.skipOnboarding;
        mike = zulu.acceptInvite;
        entity = {};
        entity['inviteKey'] = golf;
        entity['context'] = oscar;
        entity['skipOnboarding'] = report;
        tango = function(argFoo) { // Original name: callback
            _fun67539: for(var _fun67539_ip = 0; ; ) switch(_fun67539_ip) {
 0:
                zulu = argFoo;
                entity = zulu.channel;
                tango = null;
                if(!(tango != entity)) { _fun67539_ip = 70; continue _fun67539 }
 14:
                mike = _closure1_slot37;
                golf = undefined;
                oscar = mike.bind(golf)(zulu);
                report = _closure1_slot36;
                entity = zulu.channel;
                mike = entity.id;
                entity = _closure2_slot0;
                if(!(tango == entity)) { _fun67539_ip = 59; continue _fun67539 }
 53:
                entity = new Array(0);
                _fun67539_ip = 63; continue _fun67539;
 59:
                entity = _closure2_slot0;
 63:
                entity = report.bind(golf)(mike, oscar, entity);
 70:
                mike = _closure2_slot1;
                if(!(tango != mike)) { _fun67539_ip = 92; continue _fun67539 }
 81:
                mike = _closure2_slot1;
                entity = undefined;
                entity = mike.bind(entity)(zulu);
 92:
                entity = undefined;
                return entity;
            }
        };
        entity['callback'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['acceptInviteAndTransitionToInviteChannel'] = verify;
    verify = function(argFoo, argBar) { // Original name: transitionToInvite
        _fun67540: for(var _fun67540_ip = 0; ; ) switch(_fun67540_ip) {
 0:
            zulu = argFoo;
            mike = argBar;
            golf = zulu.channel;
            verify = zulu.guild;
            offset = null;
            if(!(offset != verify)) { _fun67540_ip = 61; continue _fun67540 }
 22:
            oscar = verify.features;
            if(!(offset != oscar)) { _fun67540_ip = 61; continue _fun67540 }
 32:
            report = oscar.includes;
            tango = _closure1_slot27;
            tango = tango.HUB;
            tango = report.bind(oscar)(tango);
            if(tango) { _fun67540_ip = 286; continue _fun67540 }
 61:
            oscar = _closure1_slot0;
            report = _closure1_slot3;
            tango = 19;
            tango = report[tango];
            report = undefined;
            romeo = oscar.bind(report)(tango);
            yankee = romeo.hasFlag;
            tango = zulu.flags;
            foxtrot = offset != tango;
            oscar = 0;
            if(!foxtrot) { _fun67540_ip = 109; continue _fun67540 }
 106:
            oscar = tango;
 109:
            foxtrot = _closure1_slot0;
            backup = _closure1_slot3;
            tango = 20;
            tango = backup[tango];
            tango = foxtrot.bind(report)(tango);
            tango = tango.GuildInviteFlags;
            tango = tango.IS_APPLICATION_BYPASS;
            tango = yankee.bind(romeo)(oscar, tango);
            if(!(offset != verify)) { _fun67540_ip = 223; continue _fun67540 }
 151:
            if(tango) { _fun67540_ip = 223; continue _fun67540 }
 154:
            oscar = _closure1_slot0;
            tango = _closure1_slot3;
            yankee = 48;
            tango = tango[yankee];
            oscar = oscar.bind(report)(tango);
            tango = oscar.inviteGuildHasPendingMemberDisabledVerification;
            tango = tango.bind(oscar)(verify);
            if(!tango) { _fun67540_ip = 223; continue _fun67540 }
 188:
            oscar = _closure1_slot0;
            tango = _closure1_slot3;
            tango = tango[yankee];
            yankee = oscar.bind(report)(tango);
            oscar = yankee.openVerificationModalOrTransitionToApplication;
            tango = verify.id;
            tango = oscar.bind(yankee)(tango);
            _fun67540_ip = 319; continue _fun67540;
 223:
            if(!(offset != golf)) { _fun67540_ip = 319; continue _fun67540 }
 227:
            tango = _closure1_slot37;
            oscar = tango.bind(report)(zulu);
            if(!(offset != mike)) { _fun67540_ip = 246; continue _fun67540 }
 240:
            oscar['transitionTo'] = mike;
 246:
            tango = _closure1_slot38;
            mike = {};
            if(!(offset == verify)) { _fun67540_ip = 262; continue _fun67540 }
 256:
            options = _closure1_slot25;
            _fun67540_ip = 267; continue _fun67540;
 262:
            options = verify.id;
 267:
            mike['guildId'] = options;
            mike['channel'] = golf;
            mike['options'] = oscar;
            mike = tango.bind(report)(mike);
            _fun67540_ip = 319; continue _fun67540;
 286:
            tango = _closure1_slot1;
            mike = _closure1_slot3;
            entity = 47;
            mike = mike[entity];
            entity = undefined;
            mike = tango.bind(entity)(mike);
            entity = mike.onOpenHubInvite;
            entity = entity.bind(mike)(zulu);
 319:
            entity = undefined;
            return entity;
        }
    };
    tango['transitionToInvite'] = verify;
    verify = function(argFoo, argBar, argBaz) { // Original name: transitionToInviteSync
        _fun67541: for(var _fun67541_ip = 0; ; ) switch(_fun67541_ip) {
 0:
            entity = argFoo;
            tango = this;
            zulu = entity.channel;
            mike = null;
            if(!(mike != zulu)) { _fun67541_ip = 99; continue _fun67541 }
 17:
            zulu = _closure1_slot37;
            mike = undefined;
            golf = zulu.bind(mike)(entity);
            zulu = tango.transitionToInviteChannelSync;
            entity = entity.channel;
            mike = entity.id;
            entity = {};
            options = entity;
            report = copyDataProperties(options, golf);
            oscar = argBaz;
            report = 'intent';
            entity[report] = oscar;
            oscar = argBar;
            report = 'transitionTo';
            entity[report] = oscar;
            oscar = true;
            report = 'forceTransition';
            entity[report] = oscar;
            entity = zulu.bind(tango)(mike, entity);
 99:
            entity = undefined;
            return entity;
        }
    };
    tango['transitionToInviteSync'] = verify;
    verify = function(argFoo) { // Original name: openNativeAppModal
        tango = _closure1_slot1;
        zulu = _closure1_slot3;
        entity = 49;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.openNativeAppModal;
        mike = _closure1_slot26;
        zulu = mike.INVITE_BROWSER;
        mike = argFoo;
        mike = tango.bind(report)(mike, zulu);
        return entity;
    };
    tango['openNativeAppModal'] = verify;
    options = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: openApp
        _fun67543: for(var _fun67543_ip = 0; ; ) switch(_fun67543_ip) {
 0:
            report = argFoo;
            options = argBar;
            sizing = argBaz;
            var _closure2_slot0 = report;
            offset = null;
            entity = offset != report;
            yankee = null;
            if(!entity) { _fun67543_ip = 62; continue _fun67543 }
 26:
            tango = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 43;
            mike = mike[entity];
            entity = undefined;
            mike = tango.bind(entity)(mike);
            entity = mike.parseExtraDataFromInviteKey;
            yankee = entity.bind(mike)(report);
 62:
            mike = offset == yankee;
            entity = undefined;
            romeo = undefined;
            if(mike) { _fun67543_ip = 79; continue _fun67543 }
 73:
            romeo = yankee.baseCode;
 79:
            golf = _closure1_slot1;
            oscar = _closure1_slot3;
            tango = 35;
            verify = oscar[tango];
            backup = golf.bind(entity)(verify);
            foxtrot = backup.dispatch;
            verify = {};
            kilo = 'INVITE_APP_OPENING';
            verify['type'] = kilo;
            verify['code'] = report;
            verify = foxtrot.bind(backup)(verify);
            verify = 50;
            oscar = oscar[verify];
            oscar = golf.bind(entity)(oscar);
            oscar = oscar.ua;
            if(!(offset != oscar)) { _fun67543_ip = 212; continue _fun67543 }
 150:
            golf = _closure1_slot1;
            oscar = _closure1_slot3;
            oscar = oscar[verify];
            oscar = golf.bind(entity)(oscar);
            golf = oscar.ua;
            oscar = golf.toLowerCase;
            foxtrot = oscar.bind(golf)();
            golf = foxtrot.indexOf;
            oscar = 'googlebot';
            golf = golf.bind(foxtrot)(oscar);
            oscar = -1;
            if(!(!(golf > oscar))) { _fun67543_ip = 739; continue _fun67543 }
 212:
            golf = _closure1_slot1;
            oscar = _closure1_slot3;
            oscar = oscar[verify];
            oscar = golf.bind(entity)(oscar);
            oscar = oscar.os;
            foxtrot = offset == oscar;
            golf = undefined;
            if(foxtrot) { _fun67543_ip = 250; continue _fun67543 }
 244:
            golf = oscar.family;
 250:
            oscar = 'Android';
            if(!(oscar !== golf)) { _fun67543_ip = 396; continue _fun67543 }
 263:
            golf = _closure1_slot1;
            oscar = _closure1_slot3;
            oscar = oscar[verify];
            oscar = golf.bind(entity)(oscar);
            oscar = oscar.os;
            verify = offset == oscar;
            golf = undefined;
            if(verify) { _fun67543_ip = 301; continue _fun67543 }
 295:
            golf = oscar.family;
 301:
            oscar = 'iOS';
            if(!(oscar !== golf)) { _fun67543_ip = 396; continue _fun67543 }
 311:
            oscar = offset != options;
            verify = '';
            if(!oscar) { _fun67543_ip = 337; continue _fun67543 }
 322:
            golf = _closure1_slot24;
            oscar = golf.INVITE_PROXY;
            verify = oscar.bind(golf)(options);
 337:
            oscar = 0;
            golf = verify[oscar];
            oscar = '#';
            options = verify;
            if(!(oscar === golf)) { _fun67543_ip = 367; continue _fun67543 }
 354:
            golf = verify.slice;
            oscar = 1;
            options = golf.bind(verify)(oscar);
 367:
            oscar = global;
            oscar = oscar.HermesInternal;
            golf = oscar.concat;
            oscar = 'discord://';
            options = golf.bind(oscar)(options);
            _fun67543_ip = 698; continue _fun67543;
 396:
            if(!(offset == romeo)) { _fun67543_ip = 432; continue _fun67543 }
 400:
            golf = _closure1_slot0;
            verify = _closure1_slot3;
            oscar = 51;
            oscar = verify[oscar];
            golf = golf.bind(entity)(oscar);
            oscar = golf.getDefaultDynamicLinkTemplate;
            verify = oscar.bind(golf)();
            _fun67543_ip = 463; continue _fun67543;
 432:
            golf = _closure1_slot0;
            foxtrot = _closure1_slot3;
            oscar = 51;
            oscar = foxtrot[oscar];
            golf = golf.bind(entity)(oscar);
            oscar = golf.getInviteDynamicLinkTemplate;
            verify = oscar.bind(golf)(romeo);
 463:
            foxtrot = _closure1_slot0;
            backup = _closure1_slot3;
            oscar = 52;
            golf = backup[oscar];
            foxtrot = foxtrot.bind(entity)(golf);
            golf = foxtrot.generateAttemptId;
            foxtrot = golf.bind(foxtrot)();
            golf = _closure1_slot1;
            oscar = backup[oscar];
            golf = golf.bind(entity)(oscar);
            oscar = {};
            backup = 'friend_invite';
            output = 2;
            kilo = argGrault;
            if(!(output !== kilo)) { _fun67543_ip = 528; continue _fun67543 }
 524:
            backup = 'invite';
 528:
            oscar['utmSource'] = backup;
            oscar['fingerprint'] = sizing;
            backup = argCorge;
            oscar['username'] = backup;
            oscar['attemptId'] = foxtrot;
            backup = offset == yankee;
            offset = undefined;
            if(backup) { _fun67543_ip = 565; continue _fun67543 }
 559:
            offset = yankee.guildScheduledEventId;
 565:
            oscar['event'] = offset;
            offset = global;
            offset = offset.HermesInternal;
            yankee = offset.concat;
            offset = 'https://discord.com/api/download/mobile?invite_code=';
            offset = yankee.bind(offset)(romeo);
            oscar['iosFallbackLink'] = offset;
            options = golf.bind(entity)(verify, oscar);
            verify = _closure1_slot1;
            output = _closure1_slot3;
            golf = 53;
            golf = output[golf];
            yankee = verify.bind(entity)(golf);
            offset = yankee.track;
            golf = _closure1_slot28;
            verify = golf.DEEP_LINK_CLICKED;
            golf = {};
            kilo = _closure1_slot0;
            backup = 54;
            backup = output[backup];
            kilo = kilo.bind(entity)(backup);
            backup = kilo.maybeExtractId;
            backup = backup.bind(kilo)(sizing);
            golf['fingerprint'] = backup;
            golf['attempt_id'] = foxtrot;
            foxtrot = 'invite';
            golf['source'] = foxtrot;
            golf['invite_code'] = romeo;
            golf = offset.bind(yankee)(verify, golf);
 698:
            golf = _closure1_slot1;
            verify = _closure1_slot3;
            oscar = 55;
            oscar = verify[oscar];
            golf = golf.bind(entity)(oscar);
            oscar = golf.launch;
            zulu = function(argFoo) {
                _fun67544: for(var _fun67544_ip = 0; ; ) switch(_fun67544_ip) {
 0:
                    zulu = _closure1_slot1;
                    mike = _closure1_slot3;
                    entity = 35;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.dispatch;
                    report = {};
                    mike = argFoo;
                    if(mike) { _fun67544_ip = 64; continue _fun67544 }
 38:
                    mike = 'INVITE_APP_NOT_OPENED';
                    report['type'] = mike;
                    mike = _closure2_slot0;
                    report['code'] = mike;
                    mike = report;
                    _fun67544_ip = 86; continue _fun67544;
 64:
                    oscar = 'INVITE_APP_OPENED';
                    report['type'] = oscar;
                    oscar = _closure2_slot0;
                    report['code'] = oscar;
                    mike = report;
 86:
                    mike = zulu.bind(tango)(mike);
                    return entity;
                }
            };
            zulu = oscar.bind(golf)(options, zulu);
            _fun67543_ip = 782; continue _fun67543;
 739:
            zulu = _closure1_slot1;
            mike = _closure1_slot3;
            mike = mike[tango];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'INVITE_APP_NOT_OPENED';
            mike['type'] = oscar;
            mike['code'] = report;
            mike = zulu.bind(tango)(mike);
 782:
            return entity;
        }
    };
    tango['openApp'] = options;
    tango['transitionToInviteChannelSync'] = report;
    report = 56;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'actions/InstantInviteActionCreators.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['transitionToGuildFromEventInvite'] = mike;
    return entity;
})();