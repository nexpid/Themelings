// app/actions/InstantInviteActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    oscard = argBar;
    tangon = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = tangon;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = golfie;
    entity = function(argFoo) { // Original name: generateAcceptInviteOptions
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = {};
            tangon = zuuluu.target_type;
            michal = _closure1_slot33;
            michal = michal.STREAM;
            if(!(michal !== tangon)) { _fun00002_ip = 112; continue _fun00001 }
 28:
            michal = _closure1_slot33;
            michal = michal.EMBEDDED_APPLICATION;
            if(!(michal !== tangon)) { _fun00002_ip = 70; continue _fun00001 }
 42:
            michal = _closure1_slot33;
            michal = michal.ROLE_SUBSCRIPTIONS_PURCHASE;
            if(!(michal === tangon)) { _fun00002_ip = 152; continue _fun00001 }
 56:
            michal = zuuluu.target_type;
            entity['targetType'] = michal;
            _fun00002_ip = 152; continue _fun00001;
 70:
            michal = zuuluu.target_type;
            entity['targetType'] = michal;
            tangon = zuuluu.target_application;
            michal = null;
            oscard = michal == tangon;
            michal = undefined;
            if(oscard) { _fun00002_ip = 104; continue _fun00001 }
 99:
            michal = tangon.id;
 104:
            entity['targetApplicationId'] = michal;
            _fun00002_ip = 152; continue _fun00001;
 112:
            michal = zuuluu.target_type;
            entity['targetType'] = michal;
            tangon = zuuluu.target_user;
            michal = null;
            oscard = michal == tangon;
            michal = undefined;
            if(oscard) { _fun00002_ip = 146; continue _fun00001 }
 141:
            michal = tangon.id;
 146:
            entity['targetUserId'] = michal;
 152:
            option = _closure1_slot16;
            golfie = option.getGuild;
            verify = zuuluu.guild;
            tangon = null;
            offset = tangon == verify;
            michal = undefined;
            oscard = undefined;
            if(offset) { _fun00002_ip = 184; continue _fun00001 }
 179:
            oscard = verify.id;
 184:
            oscard = golfie.bind(option)(oscard);
            golfie = tangon != oscard;
            oscard = !golfie;
            if(!golfie) { _fun00002_ip = 205; continue _fun00001 }
 199:
            oscard = zuuluu.new_member;
 205:
            if(!oscard) { _fun00002_ip = 217; continue _fun00001 }
 208:
            golfie = zuuluu.channel;
            oscard = tangon != golfie;
 217:
            if(!oscard) { _fun00002_ip = 239; continue _fun00001 }
 220:
            option = _closure1_slot8;
            golfie = zuuluu.channel;
            golfie = golfie.type;
            oscard = option.bind(michal)(golfie);
 239:
            if(!oscard) { _fun00002_ip = 258; continue _fun00001 }
 242:
            oscard = zuuluu.channel;
            oscard = oscard.id;
            entity['welcomeModalChannelId'] = oscard;
 258:
            oscard = zuuluu.guild_scheduled_event;
            if(!(tangon != oscard)) { _fun00002_ip = 280; continue _fun00001 }
 268:
            oscard = zuuluu.guild_scheduled_event;
            entity['guildScheduledEvent'] = oscard;
 280:
            golfie = _closure1_slot0;
            oscard = _closure1_slot3;
            verify = 19;
            oscard = oscard[verify];
            backup = golfie.bind(michal)(oscard);
            foxtra = backup.hasFlag;
            oscard = zuuluu.flags;
            golfie = tangon != oscard;
            romeon = 0;
            if(!golfie) { _fun00002_ip = 323; continue _fun00001 }
 320:
            romeon = oscard;
 323:
            golfie = _closure1_slot0;
            oscard = _closure1_slot3;
            offset = 20;
            yankee = oscard[offset];
            yankee = golfie.bind(michal)(yankee);
            yankee = yankee.GuildInviteFlags;
            yankee = yankee.IS_GUEST_INVITE;
            yankee = foxtra.bind(backup)(romeon, yankee);
            entity['isGuestInvite'] = yankee;
            oscard = oscard[verify];
            golfie = golfie.bind(michal)(oscard);
            oscard = golfie.hasFlag;
            verify = zuuluu.flags;
            yankee = tangon != verify;
            option = 0;
            if(!yankee) { _fun00002_ip = 399; continue _fun00001 }
 396:
            option = verify;
 399:
            verify = _closure1_slot0;
            report = _closure1_slot3;
            report = report[offset];
            report = verify.bind(michal)(report);
            report = report.GuildInviteFlags;
            report = report.IS_APPLICATION_BYPASS;
            report = oscard.bind(golfie)(option, report);
            entity['isApplicationBypassInvite'] = report;
            zuuluu = zuuluu.inviter;
            tangon = tangon == zuuluu;
            michal = undefined;
            if(tangon) { _fun00002_ip = 460; continue _fun00001 }
 455:
            michal = zuuluu.id;
 460:
            entity['inviterUserId'] = michal;
            return entity;
        }
    };
    var _closure1_slot37 = entity;
    entity = function(argFoo) { // Original name: transitionToInviteChannel
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            golfie = entity.guildId;
            var _closure2_slot0 = golfie;
            report = entity.channel;
            var _closure2_slot1 = report;
            tangon = entity.options;
            var _closure2_slot2 = tangon;
            verify = entity.analyticsLocations;
            entity = undefined;
            if(!(verify === entity)) { _fun00004_ip = 48; continue _fun00003 }
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
            option = _closure1_slot16;
            zuuluu = option.getGuild;
            foxtra = zuuluu.bind(option)(golfie);
            option = _closure1_slot0;
            offset = _closure1_slot3;
            zuuluu = 24;
            zuuluu = offset[zuuluu];
            offset = option.bind(entity)(zuuluu);
            option = offset.getMemberVerificationRolloutEnabled;
            zuuluu = 'invite';
            zuuluu = option.bind(offset)(golfie, zuuluu);
            offset = null;
            yankee = offset == foxtra;
            if(zuuluu) { _fun00004_ip = 204; continue _fun00003 }
 142:
            zuuluu = undefined;
            if(yankee) { _fun00004_ip = 168; continue _fun00003 }
 147:
            romeon = foxtra.hasFeature;
            option = _closure1_slot27;
            option = option.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            zuuluu = romeon.bind(foxtra)(option);
 168:
            if(!zuuluu) { _fun00004_ip = 202; continue _fun00003 }
 171:
            option = offset != foxtra;
            if(!option) { _fun00004_ip = 199; continue _fun00003 }
 178:
            backup = foxtra.hasFeature;
            romeon = _closure1_slot27;
            romeon = romeon.PREVIEW_ENABLED;
            option = backup.bind(foxtra)(romeon);
 199:
            zuuluu = !option;
 202:
            _fun00004_ip = 233; continue _fun00003;
 204:
            option = undefined;
            if(yankee) { _fun00004_ip = 230; continue _fun00003 }
 209:
            romeon = foxtra.hasFeature;
            yankee = _closure1_slot27;
            yankee = yankee.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            option = romeon.bind(foxtra)(yankee);
 230:
            zuuluu = option;
 233:
            option = tangon;
            if(!(offset == option)) { _fun00004_ip = 242; continue _fun00003 }
 240:
            option = {};
 242:
            yankee = option.targetUserId;
            _closure2_slot4 = yankee;
            backup = option.targetType;
            _closure2_slot5 = backup;
            yankee = option.targetApplicationId;
            _closure2_slot6 = yankee;
            romeon = option.isGuestInvite;
            _closure2_slot7 = romeon;
            option = option.isApplicationBypassInvite;
            if(romeon) { _fun00004_ip = 333; continue _fun00003 }
 291:
            if(option) { _fun00004_ip = 333; continue _fun00003 }
 294:
            if(!(offset != tangon)) { _fun00004_ip = 309; continue _fun00003 }
 298:
            option = tangon.forceTransition;
            if(option) { _fun00004_ip = 333; continue _fun00003 }
 309:
            if(!zuuluu) { _fun00004_ip = 333; continue _fun00003 }
 312:
            option = _closure1_slot20;
            zuuluu = option.getGuildId;
            zuuluu = zuuluu.bind(option)();
            if(!(zuuluu === golfie)) { _fun00004_ip = 881; continue _fun00003 }
 333:
            sizing = report.type;
            romeon = _closure1_slot13;
            option = romeon.getChannel;
            zuuluu = report.id;
            kiloes = option.bind(romeon)(zuuluu);
            option = offset == tangon;
            zuuluu = undefined;
            if(option) { _fun00004_ip = 372; continue _fun00003 }
 366:
            zuuluu = tangon.targetType;
 372:
            if(!(offset == zuuluu)) { _fun00004_ip = 444; continue _fun00003 }
 376:
            romeon = _closure1_slot9;
            option = romeon.has;
            zuuluu = report.type;
            zuuluu = option.bind(romeon)(zuuluu);
            if(zuuluu) { _fun00004_ip = 444; continue _fun00003 }
 398:
            option = _closure1_slot0;
            romeon = _closure1_slot3;
            zuuluu = 21;
            zuuluu = romeon[zuuluu];
            option = option.bind(entity)(zuuluu);
            zuuluu = option.canSeeOnboardingHome;
            zuuluu = zuuluu.bind(option)(golfie);
            if(!zuuluu) { _fun00004_ip = 444; continue _fun00003 }
 432:
            zuuluu = _closure1_slot31;
            romeon = zuuluu.GUILD_HOME;
            _fun00004_ip = 554; continue _fun00003;
 444:
            foxtra = _closure1_slot13;
            option = foxtra.getChannel;
            zuuluu = report.id;
            output = option.bind(foxtra)(zuuluu);
            foxtra = _closure1_slot19;
            option = foxtra.can;
            zuuluu = _closure1_slot30;
            zuuluu = zuuluu.VIEW_CHANNEL;
            zuuluu = option.bind(foxtra)(zuuluu, output);
            if(zuuluu) { _fun00004_ip = 546; continue _fun00003 }
 492:
            output = _closure1_slot14;
            foxtra = output.getDefaultChannel;
            zuuluu = _closure1_slot30;
            option = zuuluu.CREATE_INSTANT_INVITE;
            zuuluu = true;
            option = foxtra.bind(output)(golfie, zuuluu, option);
            foxtra = offset == option;
            zuuluu = undefined;
            if(foxtra) { _fun00004_ip = 535; continue _fun00003 }
 530:
            zuuluu = option.id;
 535:
            if(!(offset == zuuluu)) { _fun00004_ip = 544; continue _fun00003 }
 539:
            zuuluu = report.id;
 544:
            _fun00004_ip = 551; continue _fun00003;
 546:
            zuuluu = report.id;
 551:
            romeon = zuuluu;
 554:
            _closure2_slot8 = romeon;
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.GUILD_STAGE_VOICE;
            zuuluu = sizing === zuuluu;
            _closure2_slot9 = zuuluu;
            option = _closure1_slot24;
            zuuluu = option.CHANNEL;
            zuuluu = zuuluu.bind(option)(golfie, romeon);
            _closure2_slot10 = zuuluu;
            foxtra = _closure1_slot9;
            option = foxtra.has;
            option = option.bind(foxtra)(sizing);
            if(option) { _fun00004_ip = 851; continue _fun00003 }
 616:
            foxtra = _closure1_slot0;
            sizing = _closure1_slot3;
            option = 33;
            option = sizing[option];
            foxtra = foxtra.bind(entity)(option);
            option = foxtra.isActivityInTextSupportedForChannel;
            option = option.bind(foxtra)(kiloes);
            if(!option) { _fun00004_ip = 664; continue _fun00003 }
 650:
            foxtra = _closure1_slot33;
            foxtra = foxtra.EMBEDDED_APPLICATION;
            option = backup === foxtra;
 664:
            if(!option) { _fun00004_ip = 671; continue _fun00003 }
 667:
            option = offset != yankee;
 671:
            if(!option) { _fun00004_ip = 865; continue _fun00003 }
 677:
            foxtra = _closure1_slot0;
            backup = _closure1_slot3;
            option = 23;
            option = backup[option];
            foxtra = foxtra.bind(entity)(option);
            option = foxtra.transitionTo;
            kiloes = _closure1_slot24;
            backup = kiloes.CHANNEL;
            if(!(offset == golfie)) { _fun00004_ip = 721; continue _fun00003 }
 717:
            golfie = _closure1_slot25;
 721:
            golfie = backup.bind(kiloes)(golfie, romeon);
            golfie = option.bind(foxtra)(golfie);
            option = _closure1_slot1;
            foxtra = _closure1_slot3;
            golfie = 29;
            golfie = foxtra[golfie];
            option = option.bind(entity)(golfie);
            golfie = {};
            golfie['channelId'] = romeon;
            golfie['applicationId'] = yankee;
            romeon = offset == tangon;
            yankee = undefined;
            if(romeon) { _fun00004_ip = 777; continue _fun00003 }
 771:
            yankee = tangon.intent;
 777:
            golfie['intent'] = yankee;
            yankee = offset == tangon;
            offset = undefined;
            if(yankee) { _fun00004_ip = 797; continue _fun00003 }
 791:
            offset = tangon.inviterUserId;
 797:
            golfie['inviterUserId'] = offset;
            golfie['analyticsLocations'] = verify;
            offset = _closure1_slot0;
            yankee = _closure1_slot3;
            verify = 30;
            verify = yankee[verify];
            verify = offset.bind(entity)(verify);
            verify = verify.CommandOrigin;
            verify = verify.CHAT;
            golfie['commandOrigin'] = verify;
            golfie = option.bind(entity)(golfie);
            _fun00004_ip = 865; continue _fun00003;
 851:
            golfie = _closure1_slot5;
            oscard = function() {
                tangon = _closure1_slot0;
                michal = _closure1_slot3;
                entity = 26;
                zuuluu = michal[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = 25;
                zuuluu = michal[zuuluu];
                michal = michal.paths;
                tangon = tangon.bind(entity)(zuuluu, michal);
                zuuluu = tangon.then;
                michal = function(argFoo) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        michal = argFoo;
                        michal = michal.default;
                        var _closure4_slot0 = michal;
                        michal = function() { // Original name: connect
                            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                                michal = _closure2_slot9;
                                if(michal) { _fun00008_ip = 406; continue _fun00007 }
 13:
                                tangon = _closure4_slot0;
                                zuuluu = tangon.selectVoiceChannel;
                                michal = _closure2_slot8;
                                michal = zuuluu.bind(tangon)(michal);
                                zuuluu = _closure2_slot5;
                                michal = _closure1_slot33;
                                michal = michal.STREAM;
                                michal = zuuluu === michal;
                                if(!michal) { _fun00008_ip = 69; continue _fun00007 }
 59:
                                tangon = _closure2_slot4;
                                zuuluu = null;
                                michal = zuuluu != tangon;
 69:
                                if(!michal) { _fun00008_ip = 147; continue _fun00007 }
 72:
                                tangon = _closure1_slot2;
                                zuuluu = _closure1_slot3;
                                michal = 28;
                                zuuluu = zuuluu[michal];
                                michal = undefined;
                                tangon = tangon.bind(michal)(zuuluu);
                                zuuluu = tangon.watchStreamAndTransitionToStream;
                                michal = {};
                                oscard = _closure1_slot32;
                                oscard = oscard.GUILD;
                                michal['streamType'] = oscard;
                                oscard = _closure2_slot4;
                                michal['ownerId'] = oscard;
                                oscard = _closure2_slot0;
                                michal['guildId'] = oscard;
                                oscard = _closure2_slot8;
                                michal['channelId'] = oscard;
                                michal = zuuluu.bind(tangon)(michal);
 147:
                                zuuluu = _closure2_slot5;
                                michal = _closure1_slot33;
                                michal = michal.EMBEDDED_APPLICATION;
                                michal = zuuluu === michal;
                                if(!michal) { _fun00008_ip = 178; continue _fun00007 }
 168:
                                tangon = _closure2_slot6;
                                zuuluu = null;
                                michal = zuuluu != tangon;
 178:
                                if(!michal) { _fun00008_ip = 402; continue _fun00007 }
 184:
                                zuuluu = _closure1_slot0;
                                tangon = _closure1_slot3;
                                michal = 23;
                                michal = tangon[michal];
                                tangon = undefined;
                                oscard = zuuluu.bind(tangon)(michal);
                                zuuluu = oscard.transitionTo;
                                offset = _closure1_slot24;
                                verify = offset.CHANNEL;
                                michal = _closure2_slot0;
                                golfie = null;
                                if(!(golfie == michal)) { _fun00008_ip = 238; continue _fun00007 }
 232:
                                option = _closure1_slot25;
                                _fun00008_ip = 242; continue _fun00007;
 238:
                                option = _closure2_slot0;
 242:
                                michal = _closure2_slot8;
                                michal = verify.bind(offset)(option, michal);
                                michal = zuuluu.bind(oscard)(michal);
                                zuuluu = _closure1_slot1;
                                oscard = _closure1_slot3;
                                michal = 29;
                                michal = oscard[michal];
                                zuuluu = zuuluu.bind(tangon)(michal);
                                michal = {};
                                oscard = _closure2_slot8;
                                michal['channelId'] = oscard;
                                oscard = _closure2_slot6;
                                michal['applicationId'] = oscard;
                                oscard = _closure2_slot2;
                                option = golfie == oscard;
                                oscard = undefined;
                                if(option) { _fun00008_ip = 318; continue _fun00007 }
 308:
                                option = _closure2_slot2;
                                oscard = option.intent;
 318:
                                michal['intent'] = oscard;
                                oscard = _closure2_slot2;
                                golfie = golfie == oscard;
                                oscard = undefined;
                                if(golfie) { _fun00008_ip = 346; continue _fun00007 }
 336:
                                golfie = _closure2_slot2;
                                oscard = golfie.inviterUserId;
 346:
                                michal['inviterUserId'] = oscard;
                                oscard = _closure2_slot3;
                                michal['analyticsLocations'] = oscard;
                                oscard = _closure1_slot0;
                                golfie = _closure1_slot3;
                                report = 30;
                                report = golfie[report];
                                report = oscard.bind(tangon)(report);
                                report = report.CommandOrigin;
                                report = report.CHAT;
                                michal['commandOrigin'] = report;
                                michal = zuuluu.bind(tangon)(michal);
 402:
                                michal = undefined;
                                return michal;
 406:
                                report = _closure1_slot0;
                                tangon = _closure1_slot3;
                                zuuluu = 27;
                                zuuluu = tangon[zuuluu];
                                tangon = undefined;
                                oscard = report.bind(tangon)(zuuluu);
                                report = oscard.connectAndOpen;
                                golfie = _closure2_slot1;
                                zuuluu = _closure1_slot11;
                                zuuluu = golfie instanceof zuuluu;
                                if(zuuluu) { _fun00008_ip = 467; continue _fun00007 }
 452:
                                golfie = _closure1_slot10;
                                zuuluu = _closure2_slot1;
                                zuuluu = golfie.bind(tangon)(zuuluu);
                                _fun00008_ip = 471; continue _fun00007;
 467:
                                zuuluu = _closure2_slot1;
 471:
                                zuuluu = report.bind(oscard)(zuuluu);
                                zuuluu = _closure1_slot0;
                                report = _closure1_slot3;
                                michal = 23;
                                michal = report[michal];
                                zuuluu = zuuluu.bind(tangon)(michal);
                                michal = zuuluu.transitionTo;
                                entity = _closure2_slot10;
                                entity = michal.bind(zuuluu)(entity);
                                entity = undefined;
                                return entity;
                            }
                        };
                        zuuluu = _closure2_slot7;
                        if(zuuluu) { _fun00006_ip = 147; continue _fun00005 }
 29:
                        oscard = _closure1_slot0;
                        report = _closure1_slot3;
                        tangon = 31;
                        tangon = report[tangon];
                        report = undefined;
                        option = oscard.bind(report)(tangon);
                        golfie = option.shouldShowMembershipVerificationGate;
                        oscard = _closure2_slot0;
                        verify = _closure1_slot16;
                        tangon = new Array(4);
                        tangon[0] = verify;
                        verify = _closure1_slot17;
                        tangon[1] = verify;
                        verify = _closure1_slot21;
                        tangon[2] = verify;
                        verify = _closure1_slot15;
                        tangon[3] = verify;
                        tangon = golfie.bind(option)(oscard, tangon);
                        if(!tangon) { _fun00006_ip = 147; continue _fun00005 }
 109:
                        tangon = _closure1_slot0;
                        oscard = _closure1_slot3;
                        zuuluu = 32;
                        zuuluu = oscard[zuuluu];
                        tangon = tangon.bind(report)(zuuluu);
                        zuuluu = tangon.openMemberVerificationModal;
                        entity = _closure2_slot0;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        _fun00006_ip = 153; continue _fun00005;
 147:
                        entity = undefined;
                        entity = michal.bind(entity)();
 153:
                        entity = undefined;
                        return entity;
                    }
                };
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            oscard = golfie.bind(entity)(oscard);
 865:
            michal = function(argFoo, argBar) { // Original name: getTransition
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = argBar;
                    zuuluu = argFoo;
                    golfie = zuuluu.type;
                    tangon = null;
                    if(!(tangon == michal)) { _fun00010_ip = 21; continue _fun00009 }
 19:
                    michal = {};
 21:
                    zuuluu = michal.transitionTo;
                    var _closure3_slot0 = zuuluu;
                    option = michal.welcomeModalChannelId;
                    michal = michal.guildScheduledEvent;
                    zuuluu = _closure1_slot23;
                    oscard = zuuluu.GUILD_STAGE_VOICE;
                    zuuluu = {};
                    yankee = _closure1_slot1;
                    offset = _closure1_slot3;
                    verify = 22;
                    offset = offset[verify];
                    verify = undefined;
                    verify = yankee.bind(verify)(offset);
                    verify = verify.INVITE_ACCEPT;
                    zuuluu['source'] = verify;
                    verify = true;
                    zuuluu['navigationReplace'] = verify;
                    var _closure3_slot1 = zuuluu;
                    if(!(tangon != option)) { _fun00010_ip = 111; continue _fun00009 }
 105:
                    zuuluu['welcomeModalChannelId'] = option;
 111:
                    if(!(golfie === oscard)) { _fun00010_ip = 125; continue _fun00009 }
 115:
                    report = _closure1_slot34;
                    zuuluu['state'] = report;
 125:
                    if(!(tangon != michal)) { _fun00010_ip = 140; continue _fun00009 }
 129:
                    michal = michal.id;
                    zuuluu['guildScheduledEventId'] = michal;
 140:
                    entity = function(argFoo) {
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            report = argFoo;
                            zuuluu = _closure3_slot0;
                            entity = null;
                            if(!(entity == zuuluu)) { _fun00012_ip = 59; continue _fun00011 }
 16:
                            tangon = _closure1_slot0;
                            zuuluu = _closure1_slot3;
                            entity = 23;
                            zuuluu = zuuluu[entity];
                            entity = undefined;
                            tangon = tangon.bind(entity)(zuuluu);
                            zuuluu = tangon.transitionTo;
                            entity = _closure3_slot1;
                            entity = zuuluu.bind(tangon)(report, entity);
                            _fun00012_ip = 75; continue _fun00011;
 59:
                            tangon = _closure3_slot0;
                            zuuluu = _closure3_slot1;
                            michal = undefined;
                            entity = tangon.bind(michal)(report, zuuluu);
 75:
                            return entity;
                        }
                    };
                    return entity;
                }
            };
            michal = michal.bind(entity)(report, tangon);
            michal = michal.bind(entity)(zuuluu);
 881:
            return entity;
        }
    };
    var _closure1_slot38 = entity;
    entity = global;
    verify = entity.Object;
    report = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = report.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = golfie[entity];
    entity = undefined;
    michal = tangon.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 1;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    michal = michal.addPostConnectionCallback;
    var _closure1_slot5 = michal;
    michal = 2;
    report = golfie[michal];
    report = tangon.bind(entity)(report);
    var _closure1_slot6 = report;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    michal = michal.isGuildScheduledEventActive;
    var _closure1_slot7 = michal;
    michal = 3;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    report = michal.isGuildTextChannelType;
    var _closure1_slot8 = report;
    report = michal.GUILD_VOCAL_CHANNEL_TYPES;
    var _closure1_slot9 = report;
    report = michal.createChannelRecord;
    var _closure1_slot10 = report;
    michal = michal.ChannelRecordBase;
    var _closure1_slot11 = michal;
    michal = 4;
    michal = golfie[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot12 = michal;
    michal = 5;
    michal = golfie[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot13 = michal;
    michal = 6;
    michal = golfie[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot14 = michal;
    michal = 7;
    michal = golfie[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot15 = michal;
    michal = 8;
    michal = golfie[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot16 = michal;
    michal = 9;
    michal = golfie[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot17 = michal;
    michal = 10;
    michal = golfie[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot18 = michal;
    michal = 11;
    michal = golfie[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot19 = michal;
    michal = 12;
    michal = golfie[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot20 = michal;
    michal = 13;
    michal = golfie[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot21 = michal;
    michal = 14;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    tangon = michal.Endpoints;
    var _closure1_slot22 = tangon;
    tangon = michal.ChannelTypes;
    var _closure1_slot23 = tangon;
    tangon = michal.Routes;
    var _closure1_slot24 = tangon;
    tangon = michal.ME;
    var _closure1_slot25 = tangon;
    tangon = michal.RPCCommands;
    var _closure1_slot26 = tangon;
    tangon = michal.GuildFeatures;
    var _closure1_slot27 = tangon;
    tangon = michal.AnalyticEvents;
    var _closure1_slot28 = tangon;
    tangon = michal.UserFlags;
    var _closure1_slot29 = tangon;
    michal = michal.Permissions;
    var _closure1_slot30 = michal;
    michal = 15;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    michal = michal.StaticChannelRoute;
    var _closure1_slot31 = michal;
    michal = 16;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    michal = michal.StreamTypes;
    var _closure1_slot32 = michal;
    michal = 17;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    michal = michal.InviteTargetTypes;
    var _closure1_slot33 = michal;
    michal = 18;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    michal = michal.STAGE_INVITE_STATE_KEY;
    var _closure1_slot34 = michal;
    michal = null;
    var _closure1_slot35 = michal;
    report = function(argFoo, argBar) { // Original name: transitionToInviteChannelSync
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zuuluu = arguments[2];
            entity = argFoo;
            var _closure2_slot0 = entity;
            entity = argBar;
            var _closure2_slot1 = entity;
            entity = undefined;
            if(!(zuuluu === entity)) { _fun00014_ip = 29; continue _fun00013 }
 25:
            zuuluu = new Array(0);
 29:
            var _closure2_slot2 = zuuluu;
            tangon = _closure1_slot13;
            zuuluu = tangon.addConditionalChangeListener;
            michal = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    tangon = _closure1_slot13;
                    michal = tangon.getChannel;
                    entity = _closure2_slot0;
                    golfie = michal.bind(tangon)(entity);
                    michal = _closure1_slot21;
                    entity = michal.getCurrentUser;
                    tangon = entity.bind(michal)();
                    offset = null;
                    entity = offset == golfie;
                    if(entity) { _fun00016_ip = 50; continue _fun00015 }
 46:
                    entity = offset == tangon;
 50:
                    if(entity) { _fun00016_ip = 188; continue _fun00015 }
 56:
                    michal = golfie.nsfw;
                    if(!michal) { _fun00016_ip = 74; continue _fun00015 }
 65:
                    tangon = tangon.nsfwAllowed;
                    michal = !tangon;
 74:
                    michal = !michal;
                    if(!michal) { _fun00016_ip = 185; continue _fun00015 }
 80:
                    tangon = _closure2_slot1;
                    oscard = offset == tangon;
                    report = undefined;
                    tangon = undefined;
                    if(oscard) { _fun00016_ip = 105; continue _fun00015 }
 95:
                    oscard = _closure2_slot1;
                    tangon = oscard.guildScheduledEvent;
 105:
                    if(!(offset == tangon)) { _fun00016_ip = 167; continue _fun00015 }
 109:
                    oscard = _closure1_slot38;
                    tangon = {};
                    option = golfie.getGuildId;
                    option = option.bind(golfie)();
                    if(!(offset == option)) { _fun00016_ip = 133; continue _fun00015 }
 129:
                    option = _closure1_slot25;
 133:
                    tangon['guildId'] = option;
                    tangon['channel'] = golfie;
                    golfie = _closure2_slot1;
                    tangon['options'] = golfie;
                    golfie = _closure2_slot2;
                    tangon['analyticsLocations'] = golfie;
                    tangon = oscard.bind(report)(tangon);
                    michal = false;
                    _fun00016_ip = 185; continue _fun00015;
 167:
                    tangon = _closure2_slot1;
                    zuuluu = function(argFoo) { // Original name: transitionToInviteEvent
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            michal = argFoo;
                            zuuluu = michal.guildScheduledEvent;
                            var _closure4_slot0 = zuuluu;
                            michal = michal.welcomeModalChannelId;
                            var _closure4_slot1 = michal;
                            michal = null;
                            if(!(michal != zuuluu)) { _fun00018_ip = 50; continue _fun00017 }
 31:
                            zuuluu = _closure1_slot5;
                            michal = undefined;
                            entity = function() {
                                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                                    report = {};
                                    entity = _closure4_slot0;
                                    entity = entity.id;
                                    report['guildScheduledEventId'] = entity;
                                    zuuluu = _closure4_slot1;
                                    entity = null;
                                    if(!(entity != zuuluu)) { _fun00020_ip = 39; continue _fun00019 }
 29:
                                    entity = _closure4_slot1;
                                    report['welcomeModalChannelId'] = entity;
 39:
                                    tangon = _closure1_slot0;
                                    zuuluu = _closure1_slot3;
                                    entity = 34;
                                    zuuluu = zuuluu[entity];
                                    entity = undefined;
                                    tangon = tangon.bind(entity)(zuuluu);
                                    zuuluu = tangon.transitionToEventDetailsFromInvite;
                                    michal = _closure4_slot0;
                                    michal = zuuluu.bind(tangon)(michal, report);
                                    return entity;
                                }
                            };
                            entity = zuuluu.bind(michal)(entity);
 50:
                            entity = undefined;
                            return entity;
                        }
                    };
                    zuuluu = zuuluu.bind(report)(tangon);
                    michal = false;
 185:
                    entity = michal;
 188:
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    var _closure1_slot36 = report;
    michal = function() {
        tangon = _closure1_slot4;
        zuuluu = undefined;
        michal = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    StartGenerator();
                    oscard = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00022_ip = 99; continue _fun00021 }
 10:
                    golfie = oscard.guild_id;
                    tangon = oscard.channel_id;
                    report = _closure1_slot7;
                    michal = undefined;
                    report = report.bind(michal)(oscard);
                    if(!report) { _fun00022_ip = 43; continue _fun00021 }
 37:
                    report = null;
                    if(!(report == tangon)) { _fun00022_ip = 87; continue _fun00021 }
 43:
                    oscard = _closure1_slot1;
                    option = _closure1_slot3;
                    report = 37;
                    report = option[report];
                    oscard = oscard.bind(michal)(report);
                    report = oscard.transitionToGuildSync;
                    report = report.bind(oscard)(golfie);
                    SaveGenerator(address=78);
 76:
                    return report;
 78:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(!oscard) { _fun00022_ip = 96; continue _fun00021 }
 84:
                    return report;
 87:
                    zuuluu = _closure1_slot36;
                    zuuluu = zuuluu.bind(michal)(tangon);
 96:
                    return michal;
 99:
                    return entity;
                }
            };
            return entity;
        };
        michal = tangon.bind(zuuluu)(michal);
        var _closure2_slot0 = michal;
        entity = function() {
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = {};
    verify = function(argFoo, argBar, argBaz) { // Original name: resolveInvite
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            oscard = argFoo;
            report = argBar;
            tangon = argBaz;
            var _closure2_slot0 = oscard;
            var _closure2_slot1 = report;
            var _closure2_slot2 = tangon;
            verify = _closure1_slot1;
            zuuluu = _closure1_slot3;
            entity = 35;
            golfie = zuuluu[entity];
            zuuluu = undefined;
            verify = verify.bind(zuuluu)(golfie);
            golfie = verify.isDispatching;
            golfie = golfie.bind(verify)();
            if(golfie) { _fun00024_ip = 138; continue _fun00023 }
 61:
            golfie = _closure1_slot1;
            option = _closure1_slot3;
            entity = option[entity];
            offset = golfie.bind(zuuluu)(entity);
            verify = offset.dispatch;
            entity = {};
            yankee = 'INVITE_RESOLVE';
            entity['type'] = yankee;
            entity['code'] = oscard;
            entity = verify.bind(offset)(entity);
            entity = 36;
            entity = option[entity];
            entity = golfie.bind(zuuluu)(entity);
            tangon = entity.bind(zuuluu)(oscard, report, tangon);
            zuuluu = tangon.then;
            entity = function(argFoo) {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    entity = argFoo;
                    zuuluu = entity.invite;
                    michal = entity.code;
                    oscard = entity.banned;
                    entity = null;
                    if(!(entity == zuuluu)) { _fun00026_ip = 84; continue _fun00025 }
 26:
                    report = _closure1_slot1;
                    tangon = _closure1_slot3;
                    entity = 35;
                    tangon = tangon[entity];
                    entity = undefined;
                    report = report.bind(entity)(tangon);
                    tangon = report.dispatch;
                    entity = {};
                    golfie = 'INVITE_RESOLVE_FAILURE';
                    entity['type'] = golfie;
                    entity['code'] = michal;
                    entity['banned'] = oscard;
                    entity = tangon.bind(report)(entity);
                    _fun00026_ip = 138; continue _fun00025;
 84:
                    report = _closure1_slot1;
                    tangon = _closure1_slot3;
                    entity = 35;
                    tangon = tangon[entity];
                    entity = undefined;
                    report = report.bind(entity)(tangon);
                    tangon = report.dispatch;
                    entity = {};
                    oscard = 'INVITE_RESOLVE_SUCCESS';
                    entity['type'] = oscard;
                    entity['invite'] = zuuluu;
                    entity['code'] = michal;
                    entity = tangon.bind(report)(entity);
 138:
                    entity = {};
                    entity['invite'] = zuuluu;
                    entity['code'] = michal;
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity);
            _fun00024_ip = 171; continue _fun00023;
 138:
            zuuluu = global;
            tangon = zuuluu.Promise;
            zuuluu = tangon.resolve;
            tangon = zuuluu.bind(tangon)();
            zuuluu = tangon.then;
            michal = function() {
                report = _closure1_slot39;
                tangon = _closure2_slot0;
                zuuluu = _closure2_slot1;
                michal = _closure2_slot2;
                entity = undefined;
                entity = report.bind(entity)(tangon, zuuluu, michal);
                return entity;
            };
            entity = zuuluu.bind(tangon)(michal);
 171:
            return entity;
        }
    };
    var _closure1_slot39 = verify;
    tangon['resolveInvite'] = verify;
    verify = function(argFoo, argBar) { // Original name: getInviteContext
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            zuuluu = argBar;
            entity = {};
            michal = argFoo;
            entity['location'] = michal;
            michal = zuuluu.guild;
            report = null;
            oscard = report != michal;
            tangon = undefined;
            if(!oscard) { _fun00028_ip = 38; continue _fun00027 }
 28:
            oscard = zuuluu.guild;
            tangon = oscard.id;
 38:
            entity['location_guild_id'] = tangon;
            tangon = zuuluu.channel;
            oscard = report != tangon;
            tangon = undefined;
            if(!oscard) { _fun00028_ip = 69; continue _fun00027 }
 59:
            oscard = zuuluu.channel;
            tangon = oscard.id;
 69:
            entity['location_channel_id'] = tangon;
            tangon = zuuluu.channel;
            tangon = report != tangon;
            michal = undefined;
            if(!tangon) { _fun00028_ip = 100; continue _fun00027 }
 90:
            zuuluu = zuuluu.channel;
            michal = zuuluu.type;
 100:
            entity['location_channel_type'] = michal;
            return entity;
        }
    };
    tangon['getInviteContext'] = verify;
    verify = function(argFoo) { // Original name: createInvite
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            zuuluu = arguments[1];
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = undefined;
            if(!(zuuluu === michal)) { _fun00030_ip = 20; continue _fun00029 }
 18:
            zuuluu = {};
 20:
            var _closure2_slot1 = zuuluu;
            zuuluu = arguments[2];
            var _closure2_slot2 = zuuluu;
            zuuluu = _closure1_slot4;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00032_ip = 278; continue _fun00031 }
 10: // try_start_0
                        zuuluu = _closure1_slot0;
                        report = _closure1_slot3;
                        michal = 38;
                        michal = report[michal];
                        oscard = undefined;
                        michal = zuuluu.bind(oscard)(michal);
                        report = michal.HTTP;
                        zuuluu = report.post;
                        michal = {};
                        offset = _closure1_slot22;
                        verify = offset.INSTANT_INVITES;
                        option = _closure2_slot0;
                        option = verify.bind(offset)(option);
                        michal['url'] = option;
                        option = _closure2_slot1;
                        michal['body'] = option;
                        option = {};
                        verify = _closure2_slot2;
                        option['location'] = verify;
                        michal['context'] = option;
                        option = true;
                        michal['rejectWithError'] = option;
                        michal = zuuluu.bind(report)(michal);
                        SaveGenerator(address=111);
 109:
                        return michal;
 111:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(zuuluu) { _fun00032_ip = 178; continue _fun00031 }
 117:
                        zuuluu = michal.body;
                        report = _closure1_slot1;
                        option = _closure1_slot3;
                        tangon = 35;
                        tangon = option[tangon];
                        oscard = report.bind(oscard)(tangon);
                        report = oscard.dispatch;
                        tangon = {};
                        option = 'INSTANT_INVITE_CREATE_SUCCESS';
                        tangon['type'] = option;
                        golfie = _closure2_slot0;
                        tangon['channelId'] = golfie;
                        tangon['invite'] = zuuluu;
                        tangon = report.bind(oscard)(tangon);
 175: // try_end0
                        return zuuluu;
 178:
                        return michal;
 181: // catch_target0
                        CatchBlockStart(arg_register=3);
                        report = _closure1_slot1;
                        oscard = _closure1_slot3;
                        michal = 35;
                        michal = oscard[michal];
                        zuuluu = undefined;
                        option = report.bind(zuuluu)(michal);
                        golfie = option.dispatch;
                        michal = {};
                        verify = 'INSTANT_INVITE_CREATE_FAILURE';
                        michal['type'] = verify;
                        verify = _closure2_slot0;
                        michal['channelId'] = verify;
                        michal = golfie.bind(option)(michal);
                        michal = 39;
                        michal = oscard[michal];
                        michal = report.bind(zuuluu)(michal);
                        zuuluu = michal.prototype;
                        zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
                        romeon = zuuluu;
                        yankee = tangon;
                        michal = new romeon[michal](yankee, offset);
                        michal = michal instanceof Object ? michal : zuuluu;
                        throw michal;
 278:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zuuluu.bind(michal)(entity);
            entity = entity.bind(michal)();
            return entity;
        }
    };
    tangon['createInvite'] = verify;
    verify = function(argFoo, argBar) { // Original name: mobileCreateInvite
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        michal = this;
        var _closure2_slot2 = michal;
        zuuluu = _closure1_slot4;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00034_ip = 186; continue _fun00033 }
 10:
                    oscard = _closure1_slot18;
                    report = oscard.getInvite;
                    tangon = _closure2_slot0;
                    tangon = tangon.id;
                    report = report.bind(oscard)(tangon);
                    tangon = null;
                    if(!(tangon != report)) { _fun00034_ip = 67; continue _fun00033 }
 46:
                    oscard = report.isExpired;
                    oscard = oscard.bind(report)();
                    if(oscard) { _fun00034_ip = 67; continue _fun00033 }
 59:
                    report = report.code;
                    return report;
 67:
                    option = {};
                    oscard = _closure1_slot1;
                    report = _closure1_slot3;
                    zuuluu = 40;
                    report = report[zuuluu];
                    zuuluu = undefined;
                    report = oscard.bind(zuuluu)(report);
                    report = report.Seconds;
                    report = report.DAY;
                    option['max_age'] = report;
                    golfie = _closure2_slot2;
                    oscard = golfie.createInvite;
                    report = _closure2_slot0;
                    report = report.id;
                    michal = _closure2_slot1;
                    oscard = oscard.bind(golfie)(report, option, michal);
                    report = oscard.catch;
                    michal = function() {
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot3;
                        entity = 35;
                        michal = michal[entity];
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.dispatch;
                        entity = {};
                        tangon = 'NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED';
                        entity['type'] = tangon;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    michal = report.bind(oscard)(michal);
                    SaveGenerator(address=160);
 158:
                    return michal;
 160:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00034_ip = 183; continue _fun00033 }
 166:
                    tangon = tangon == michal;
                    zuuluu = undefined;
                    if(tangon) { _fun00034_ip = 180; continue _fun00033 }
 175:
                    zuuluu = michal.code;
 180:
                    return zuuluu;
 183:
                    return michal;
 186:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    tangon['mobileCreateInvite'] = verify;
    verify = function(argFoo) { // Original name: getAllFriendInvites
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot4;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00036_ip = 424; continue _fun00035 }
 12:
                    zuuluu = global;
                    oscard = zuuluu.Promise;
                    michal = oscard.prototype;
                    report = Object.create(michal, {constructor: {value: oscard}});
                    foxtra = function(argFoo) {
                        michal = argFoo;
                        var _closure5_slot0 = michal;
                        tangon = _closure1_slot1;
                        zuuluu = _closure1_slot3;
                        michal = 35;
                        zuuluu = zuuluu[michal];
                        michal = undefined;
                        zuuluu = tangon.bind(michal)(zuuluu);
                        michal = zuuluu.wait;
                        entity = function() {
                            zuuluu = _closure5_slot0;
                            michal = undefined;
                            entity = null;
                            entity = zuuluu.bind(michal)(entity);
                            return entity;
                        };
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    backup = report;
                    michal = new backup[oscard](foxtra, romeon);
                    michal = michal instanceof Object ? michal : report;
                    SaveGenerator(address=49);
 47:
                    return michal;
 49:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00036_ip = 421; continue _fun00035 }
 58:
                    golfie = _closure1_slot18;
                    oscard = golfie.getFriendInvitesFetching;
                    oscard = oscard.bind(golfie)();
                    if(oscard) { _fun00036_ip = 338; continue _fun00035 }
 83:
                    option = _closure1_slot0;
                    oscard = _closure1_slot3;
                    golfie = 38;
                    golfie = oscard[golfie];
                    offset = undefined;
                    golfie = option.bind(offset)(golfie);
                    verify = golfie.HTTP;
                    option = verify.get;
                    golfie = {};
                    yankee = _closure1_slot22;
                    yankee = yankee.FRIEND_INVITES;
                    golfie['url'] = yankee;
                    yankee = {};
                    romeon = _closure2_slot0;
                    yankee['location'] = romeon;
                    golfie['context'] = yankee;
                    yankee = false;
                    golfie['rejectWithError'] = yankee;
                    golfie = option.bind(verify)(golfie);
                    _closure1_slot35 = golfie;
                    golfie = _closure1_slot1;
                    yankee = 35;
                    oscard = oscard[yankee];
                    option = golfie.bind(offset)(oscard);
                    golfie = option.dispatch;
                    oscard = {};
                    verify = 'FRIEND_INVITES_FETCH_REQUEST';
                    oscard['type'] = verify;
                    verify = zuuluu.Date;
                    romeon = verify.prototype;
                    romeon = Object.create(romeon, {constructor: {value: verify}});
                    backup = romeon;
                    verify = new backup[verify](foxtra);
                    verify = verify instanceof Object ? verify : romeon;
                    oscard['requestedAt'] = verify;
                    oscard = golfie.bind(option)(oscard);
                    oscard = _closure1_slot35;
                    SaveGenerator(address=240);
 238:
                    return oscard;
 240:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(golfie) { _fun00036_ip = 335; continue _fun00035 }
 246:
                    golfie = oscard.body;
                    option = null;
                    _closure1_slot35 = option;
                    verify = _closure1_slot1;
                    option = _closure1_slot3;
                    option = option[yankee];
                    offset = verify.bind(offset)(option);
                    verify = offset.dispatch;
                    option = {};
                    yankee = 'FRIEND_INVITES_FETCH_RESPONSE';
                    option['type'] = yankee;
                    yankee = zuuluu.Date;
                    romeon = yankee.prototype;
                    romeon = Object.create(romeon, {constructor: {value: yankee}});
                    backup = romeon;
                    yankee = new backup[yankee](foxtra);
                    yankee = yankee instanceof Object ? yankee : romeon;
                    option['receivedAt'] = yankee;
                    option['invites'] = golfie;
                    option = verify.bind(offset)(option);
                    return golfie;
 335:
                    return oscard;
 338:
                    golfie = _closure1_slot35;
                    oscard = null;
                    if(!(oscard == golfie)) { _fun00036_ip = 399; continue _fun00035 }
 348:
                    golfie = zuuluu.Promise;
                    oscard = golfie.reject;
                    verify = zuuluu.Error;
                    zuuluu = verify.prototype;
                    option = Object.create(zuuluu, {constructor: {value: verify}});
                    foxtra = 'Invalid friend invite fetch request';
                    backup = option;
                    zuuluu = new backup[verify](foxtra, romeon);
                    zuuluu = zuuluu instanceof Object ? zuuluu : option;
                    zuuluu = oscard.bind(golfie)(zuuluu);
                    _fun00036_ip = 418; continue _fun00035;
 399:
                    oscard = _closure1_slot35;
                    report = oscard.then;
                    tangon = function(argFoo) {
                        entity = argFoo;
                        entity = entity.body;
                        return entity;
                    };
                    zuuluu = report.bind(oscard)(tangon);
 418:
                    return zuuluu;
 421:
                    return michal;
 424:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    tangon['getAllFriendInvites'] = verify;
    verify = function(argFoo, argBar) { // Original name: createFriendInvite
        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
            report = argFoo;
            zuuluu = _closure1_slot1;
            golfie = _closure1_slot3;
            michal = 35;
            michal = golfie[michal];
            tangon = undefined;
            option = zuuluu.bind(tangon)(michal);
            zuuluu = option.dispatch;
            michal = {};
            verify = 'FRIEND_INVITE_CREATE_REQUEST';
            michal['type'] = verify;
            michal = zuuluu.bind(option)(michal);
            zuuluu = _closure1_slot0;
            michal = 38;
            michal = golfie[michal];
            michal = zuuluu.bind(tangon)(michal);
            tangon = michal.HTTP;
            zuuluu = tangon.post;
            michal = {};
            oscard = _closure1_slot22;
            oscard = oscard.FRIEND_INVITES;
            michal['url'] = oscard;
            oscard = null;
            if(!(oscard == report)) { _fun00038_ip = 103; continue _fun00037 }
 101:
            report = {};
 103:
            michal['body'] = report;
            report = {};
            oscard = argBar;
            report['location'] = oscard;
            michal['context'] = report;
            report = false;
            michal['rejectWithError'] = report;
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.then;
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.body;
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot3;
                michal = 35;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.dispatch;
                michal = {};
                report = 'FRIEND_INVITE_CREATE_SUCCESS';
                michal['type'] = report;
                michal['invite'] = entity;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity = function(argFoo) {
                entity = argFoo;
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot3;
                michal = 35;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.dispatch;
                michal = {};
                report = 'FRIEND_INVITE_CREATE_FAILURE';
                michal['type'] = report;
                michal['error'] = entity;
                michal = zuuluu.bind(tangon)(michal);
                throw entity;
            };
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    tangon['createFriendInvite'] = verify;
    verify = function() { // Original name: revokeFriendInvites
        michal = _closure1_slot1;
        report = _closure1_slot3;
        entity = 35;
        entity = report[entity];
        zuuluu = undefined;
        oscard = michal.bind(zuuluu)(entity);
        michal = oscard.dispatch;
        entity = {};
        golfie = 'FRIEND_INVITE_REVOKE_REQUEST';
        entity['type'] = golfie;
        entity = michal.bind(oscard)(entity);
        michal = _closure1_slot0;
        entity = 38;
        entity = report[entity];
        entity = michal.bind(zuuluu)(entity);
        zuuluu = entity.HTTP;
        michal = zuuluu.del;
        entity = {};
        tangon = _closure1_slot22;
        tangon = tangon.FRIEND_INVITES;
        entity['url'] = tangon;
        tangon = {};
        report = global;
        report = report.location;
        tangon['location'] = report;
        entity['context'] = tangon;
        tangon = false;
        entity['rejectWithError'] = tangon;
        zuuluu = michal.bind(zuuluu)(entity);
        michal = zuuluu.then;
        entity = function(argFoo) {
            entity = argFoo;
            report = entity.body;
            zuuluu = _closure1_slot1;
            michal = _closure1_slot3;
            entity = 35;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'FRIEND_INVITE_REVOKE_SUCCESS';
            michal['type'] = oscard;
            michal['invites'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon['revokeFriendInvites'] = verify;
    verify = function(argFoo) { // Original name: revokeFriendInvite
        zuuluu = _closure1_slot0;
        michal = _closure1_slot3;
        entity = 38;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.del;
        entity = {};
        oscard = _closure1_slot22;
        report = oscard.INVITE;
        tangon = argFoo;
        tangon = report.bind(oscard)(tangon);
        entity['url'] = tangon;
        tangon = false;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon['revokeFriendInvite'] = verify;
    verify = function(argFoo) { // Original name: clearInviteFromStore
        zuuluu = _closure1_slot1;
        michal = _closure1_slot3;
        entity = 35;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'INSTANT_INVITE_CLEAR';
        michal['type'] = report;
        report = argFoo;
        michal['channelId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    tangon['clearInviteFromStore'] = verify;
    verify = function(argFoo) { // Original name: revokeInvite
        golfie = argFoo;
        yankee = golfie.code;
        var _closure2_slot0 = yankee;
        michal = golfie.channel;
        var _closure2_slot1 = michal;
        zuuluu = _closure1_slot1;
        offset = _closure1_slot3;
        michal = 41;
        michal = offset[michal];
        verify = undefined;
        tangon = zuuluu.bind(verify)(michal);
        zuuluu = tangon.delete;
        michal = {};
        option = _closure1_slot22;
        report = option.INVITE;
        report = report.bind(option)(yankee);
        michal['url'] = report;
        report = true;
        michal['oldFormErrors'] = report;
        report = {};
        option = _closure1_slot0;
        oscard = 42;
        oscard = offset[oscard];
        oscard = option.bind(verify)(oscard);
        oscard = oscard.NetworkActionNames;
        oscard = oscard.INVITE_REVOKE;
        report['event'] = oscard;
        oscard = {};
        option = golfie.uses;
        oscard['uses'] = option;
        option = golfie.maxUses;
        oscard['max_uses'] = option;
        option = golfie.maxAge;
        oscard['max_age'] = option;
        golfie = golfie.type;
        oscard['invite_type'] = golfie;
        report['properties'] = oscard;
        michal['trackedActionData'] = report;
        report = false;
        michal['rejectWithError'] = report;
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = zuuluu.then;
        entity = function() {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot3;
            entity = 35;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            report = 'INSTANT_INVITE_REVOKE_SUCCESS';
            michal['type'] = report;
            oscard = _closure2_slot0;
            michal['code'] = oscard;
            report = _closure2_slot1;
            report = report.id;
            michal['channelId'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon['revokeInvite'] = verify;
    verify = function(argFoo) { // Original name: acceptInvite
        _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
            entity = argFoo;
            golfie = entity.inviteKey;
            romeon = entity.context;
            zuuluu = entity.callback;
            var _closure2_slot0 = zuuluu;
            entity = entity.skipOnboarding;
            var _closure2_slot1 = entity;
            oscard = _closure1_slot0;
            tangon = _closure1_slot3;
            entity = 43;
            entity = tangon[entity];
            tangon = undefined;
            oscard = oscard.bind(tangon)(entity);
            entity = oscard.parseExtraDataFromInviteKey;
            entity = entity.bind(oscard)(golfie);
            var _closure2_slot2 = entity;
            yankee = entity.baseCode;
            var _closure2_slot3 = yankee;
            golfie = _closure1_slot12;
            oscard = golfie.getSessionId;
            option = oscard.bind(golfie)();
            golfie = {};
            foxtra = golfie;
            report = copyDataProperties(foxtra, romeon);
            report = entity.guildScheduledEventId;
            entity = 'invite_guild_scheduled_event_id';
            golfie[entity] = report;
            report = _closure1_slot21;
            entity = report.getCurrentUser;
            offset = entity.bind(report)();
            report = null;
            oscard = report == offset;
            entity = undefined;
            if(oscard) { _fun00040_ip = 171; continue _fun00039 }
 150:
            verify = offset.hasFlag;
            oscard = _closure1_slot29;
            oscard = oscard.QUARANTINED;
            entity = verify.bind(offset)(oscard);
 171:
            if(!(report != entity)) { _fun00040_ip = 181; continue _fun00039 }
 175:
            if(entity) { _fun00040_ip = 333; continue _fun00039 }
 181:
            report = _closure1_slot1;
            oscard = _closure1_slot3;
            entity = 35;
            entity = oscard[entity];
            verify = report.bind(tangon)(entity);
            report = verify.dispatch;
            entity = {};
            offset = 'INVITE_ACCEPT';
            entity['type'] = offset;
            entity['code'] = yankee;
            entity = report.bind(verify)(entity);
            report = _closure1_slot0;
            entity = 38;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            oscard = entity.HTTP;
            report = oscard.post;
            entity = {};
            offset = _closure1_slot22;
            verify = offset.INVITE;
            verify = verify.bind(offset)(yankee);
            entity['url'] = verify;
            entity['context'] = golfie;
            golfie = true;
            entity['oldFormErrors'] = golfie;
            golfie = {};
            golfie['session_id'] = option;
            entity['body'] = golfie;
            golfie = false;
            entity['rejectWithError'] = golfie;
            golfie = report.bind(oscard)(entity);
            oscard = golfie.then;
            entity = function() {
                tangon = _closure1_slot4;
                zuuluu = undefined;
                michal = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                            StartGenerator();
                            michal = argFoo;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(zuuluu) { _fun00042_ip = 303; continue _fun00041 }
 13:
                            tangon = _closure1_slot1;
                            report = _closure1_slot3;
                            zuuluu = 35;
                            zuuluu = report[zuuluu];
                            report = undefined;
                            option = tangon.bind(report)(zuuluu);
                            golfie = option.dispatch;
                            tangon = {};
                            zuuluu = 'INVITE_ACCEPT_SUCCESS';
                            tangon['type'] = zuuluu;
                            zuuluu = michal.body;
                            tangon['invite'] = zuuluu;
                            verify = _closure2_slot3;
                            tangon['code'] = verify;
                            tangon = golfie.bind(option)(tangon);
                            option = _closure1_slot6;
                            golfie = option.getGuildScheduledEvent;
                            tangon = _closure2_slot2;
                            tangon = tangon.guildScheduledEventId;
                            option = golfie.bind(option)(tangon);
                            tangon = {};
                            romeon = michal.body;
                            foxtra = tangon;
                            golfie = copyDataProperties(foxtra, romeon);
                            golfie = 'guild_scheduled_event';
                            tangon[golfie] = option;
                            golfie = null;
                            option = golfie == tangon;
                            offset = undefined;
                            if(option) { _fun00042_ip = 143; continue _fun00041 }
 138:
                            offset = tangon.guild_id;
 143:
                            if(!(golfie == offset)) { _fun00042_ip = 178; continue _fun00041 }
 147:
                            verify = golfie == tangon;
                            option = undefined;
                            if(verify) { _fun00042_ip = 175; continue _fun00041 }
 156:
                            verify = tangon.guild;
                            yankee = golfie == verify;
                            option = undefined;
                            if(yankee) { _fun00042_ip = 175; continue _fun00041 }
 170:
                            option = verify.id;
 175:
                            offset = option;
 178:
                            option = _closure2_slot1;
                            if(option) { _fun00042_ip = 278; continue _fun00041 }
 185:
                            if(!(golfie != offset)) { _fun00042_ip = 278; continue _fun00041 }
 189:
                            option = tangon.new_member;
                            if(!option) { _fun00042_ip = 278; continue _fun00041 }
 198:
                            verify = _closure1_slot0;
                            oscard = _closure1_slot3;
                            option = 26;
                            option = oscard[option];
                            verify = verify.bind(report)(option);
                            option = 45;
                            option = oscard[option];
                            oscard = oscard.paths;
                            oscard = verify.bind(report)(option, oscard);
                            SaveGenerator(address=240);
 238:
                            return oscard;
 240:
                            ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                            if(option) { _fun00042_ip = 275; continue _fun00041 }
 246:
                            verify = oscard.default;
                            option = {};
                            option['guildId'] = offset;
                            option = verify.bind(report)(option);
                            SaveGenerator(address=266);
 264:
                            return option;
 266:
                            ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                            if(!verify) { _fun00042_ip = 278; continue _fun00041 }
 272:
                            return option;
 275:
                            return oscard;
 278:
                            oscard = _closure2_slot0;
                            if(!(golfie != oscard)) { _fun00042_ip = 295; continue _fun00041 }
 286:
                            zuuluu = _closure2_slot0;
                            zuuluu = zuuluu.bind(report)(tangon);
 295:
                            michal = michal.body;
                            return michal;
 303:
                            return entity;
                        }
                    };
                    return entity;
                };
                michal = tangon.bind(zuuluu)(michal);
                var _closure3_slot0 = michal;
                entity = function() {
                    entity = undefined;
                    tangon = _closure3_slot0;
                    zuuluu = tangon.apply;
                    entity = arguments;
                    michal = entity;
                    entity = this;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                };
                return entity;
            };
            report = entity.bind(tangon)();
            entity = function(argFoo) {
                _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                    zuuluu = argFoo;
                    report = _closure1_slot1;
                    tangon = _closure1_slot3;
                    michal = 35;
                    michal = tangon[michal];
                    tangon = undefined;
                    oscard = report.bind(tangon)(michal);
                    report = oscard.dispatch;
                    michal = {};
                    golfie = 'INVITE_ACCEPT_FAILURE';
                    michal['type'] = golfie;
                    golfie = _closure2_slot3;
                    michal['code'] = golfie;
                    golfie = {};
                    offset = zuuluu.body;
                    option = null;
                    yankee = option == offset;
                    verify = undefined;
                    if(yankee) { _fun00044_ip = 79; continue _fun00043 }
 74:
                    verify = offset.message;
 79:
                    golfie['message'] = verify;
                    verify = zuuluu.body;
                    offset = option == verify;
                    option = undefined;
                    if(offset) { _fun00044_ip = 102; continue _fun00043 }
 97:
                    option = verify.code;
 102:
                    golfie['code'] = option;
                    michal['error'] = golfie;
                    michal = report.bind(oscard)(michal);
                    michal = _closure1_slot1;
                    report = _closure1_slot3;
                    entity = 46;
                    entity = report[entity];
                    entity = michal.bind(tangon)(entity);
                    michal = entity.prototype;
                    michal = Object.create(michal, {constructor: {value: entity}});
                    foxtra = michal;
                    romeon = zuuluu;
                    entity = new foxtra[entity](romeon, yankee);
                    entity = entity instanceof Object ? entity : michal;
                    throw entity;
                }
            };
            entity = oscard.bind(golfie)(report, entity);
            _fun00040_ip = 390; continue _fun00039;
 333:
            report = _closure1_slot1;
            oscard = _closure1_slot3;
            zuuluu = 44;
            zuuluu = oscard[zuuluu];
            zuuluu = report.bind(tangon)(zuuluu);
            zuuluu = zuuluu.bind(tangon)();
            zuuluu = global;
            tangon = zuuluu.Promise;
            zuuluu = tangon.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
            foxtra = function(argFoo, argBar) {
                entity = global;
                entity = entity.Error;
                michal = entity.prototype;
                michal = Object.create(michal, {constructor: {value: entity}});
                report = michal;
                entity = new report[entity](tangon);
                zuuluu = entity instanceof Object ? entity : michal;
                michal = argBar;
                entity = undefined;
                entity = michal.bind(entity)(zuuluu);
                return entity;
            };
            backup = zuuluu;
            michal = new backup[tangon](foxtra, romeon);
            entity = michal instanceof Object ? michal : zuuluu;
 390:
            return entity;
        }
    };
    tangon['acceptInvite'] = verify;
    verify = function(argFoo) { // Original name: acceptInviteAndTransitionToInviteChannel
        entity = argFoo;
        zuuluu = this;
        golfie = entity.inviteKey;
        oscard = entity.context;
        michal = entity.analyticsLocations;
        var _closure2_slot0 = michal;
        michal = entity.callback;
        var _closure2_slot1 = michal;
        report = entity.skipOnboarding;
        michal = zuuluu.acceptInvite;
        entity = {};
        entity['inviteKey'] = golfie;
        entity['context'] = oscard;
        entity['skipOnboarding'] = report;
        tangon = function(argFoo) { // Original name: callback
            _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                zuuluu = argFoo;
                entity = zuuluu.channel;
                tangon = null;
                if(!(tangon != entity)) { _fun00046_ip = 70; continue _fun00045 }
 14:
                michal = _closure1_slot37;
                golfie = undefined;
                oscard = michal.bind(golfie)(zuuluu);
                report = _closure1_slot36;
                entity = zuuluu.channel;
                michal = entity.id;
                entity = _closure2_slot0;
                if(!(tangon == entity)) { _fun00046_ip = 59; continue _fun00045 }
 53:
                entity = new Array(0);
                _fun00046_ip = 63; continue _fun00045;
 59:
                entity = _closure2_slot0;
 63:
                entity = report.bind(golfie)(michal, oscard, entity);
 70:
                michal = _closure2_slot1;
                if(!(tangon != michal)) { _fun00046_ip = 92; continue _fun00045 }
 81:
                michal = _closure2_slot1;
                entity = undefined;
                entity = michal.bind(entity)(zuuluu);
 92:
                entity = undefined;
                return entity;
            }
        };
        entity['callback'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon['acceptInviteAndTransitionToInviteChannel'] = verify;
    verify = function(argFoo, argBar) { // Original name: transitionToInvite
        _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
            zuuluu = argFoo;
            michal = argBar;
            golfie = zuuluu.channel;
            verify = zuuluu.guild;
            offset = null;
            if(!(offset != verify)) { _fun00048_ip = 61; continue _fun00047 }
 22:
            oscard = verify.features;
            if(!(offset != oscard)) { _fun00048_ip = 61; continue _fun00047 }
 32:
            report = oscard.includes;
            tangon = _closure1_slot27;
            tangon = tangon.HUB;
            tangon = report.bind(oscard)(tangon);
            if(tangon) { _fun00048_ip = 286; continue _fun00047 }
 61:
            oscard = _closure1_slot0;
            report = _closure1_slot3;
            tangon = 19;
            tangon = report[tangon];
            report = undefined;
            romeon = oscard.bind(report)(tangon);
            yankee = romeon.hasFlag;
            tangon = zuuluu.flags;
            foxtra = offset != tangon;
            oscard = 0;
            if(!foxtra) { _fun00048_ip = 109; continue _fun00047 }
 106:
            oscard = tangon;
 109:
            foxtra = _closure1_slot0;
            backup = _closure1_slot3;
            tangon = 20;
            tangon = backup[tangon];
            tangon = foxtra.bind(report)(tangon);
            tangon = tangon.GuildInviteFlags;
            tangon = tangon.IS_APPLICATION_BYPASS;
            tangon = yankee.bind(romeon)(oscard, tangon);
            if(!(offset != verify)) { _fun00048_ip = 223; continue _fun00047 }
 151:
            if(tangon) { _fun00048_ip = 223; continue _fun00047 }
 154:
            oscard = _closure1_slot0;
            tangon = _closure1_slot3;
            yankee = 48;
            tangon = tangon[yankee];
            oscard = oscard.bind(report)(tangon);
            tangon = oscard.inviteGuildHasPendingMemberDisabledVerification;
            tangon = tangon.bind(oscard)(verify);
            if(!tangon) { _fun00048_ip = 223; continue _fun00047 }
 188:
            oscard = _closure1_slot0;
            tangon = _closure1_slot3;
            tangon = tangon[yankee];
            yankee = oscard.bind(report)(tangon);
            oscard = yankee.openVerificationModalOrTransitionToApplication;
            tangon = verify.id;
            tangon = oscard.bind(yankee)(tangon);
            _fun00048_ip = 319; continue _fun00047;
 223:
            if(!(offset != golfie)) { _fun00048_ip = 319; continue _fun00047 }
 227:
            tangon = _closure1_slot37;
            oscard = tangon.bind(report)(zuuluu);
            if(!(offset != michal)) { _fun00048_ip = 246; continue _fun00047 }
 240:
            oscard['transitionTo'] = michal;
 246:
            tangon = _closure1_slot38;
            michal = {};
            if(!(offset == verify)) { _fun00048_ip = 262; continue _fun00047 }
 256:
            option = _closure1_slot25;
            _fun00048_ip = 267; continue _fun00047;
 262:
            option = verify.id;
 267:
            michal['guildId'] = option;
            michal['channel'] = golfie;
            michal['options'] = oscard;
            michal = tangon.bind(report)(michal);
            _fun00048_ip = 319; continue _fun00047;
 286:
            tangon = _closure1_slot1;
            michal = _closure1_slot3;
            entity = 47;
            michal = michal[entity];
            entity = undefined;
            michal = tangon.bind(entity)(michal);
            entity = michal.onOpenHubInvite;
            entity = entity.bind(michal)(zuuluu);
 319:
            entity = undefined;
            return entity;
        }
    };
    tangon['transitionToInvite'] = verify;
    verify = function(argFoo, argBar, argBaz) { // Original name: transitionToInviteSync
        _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
            entity = argFoo;
            tangon = this;
            zuuluu = entity.channel;
            michal = null;
            if(!(michal != zuuluu)) { _fun00050_ip = 99; continue _fun00049 }
 17:
            zuuluu = _closure1_slot37;
            michal = undefined;
            golfie = zuuluu.bind(michal)(entity);
            zuuluu = tangon.transitionToInviteChannelSync;
            entity = entity.channel;
            michal = entity.id;
            entity = {};
            option = entity;
            report = copyDataProperties(option, golfie);
            oscard = argBaz;
            report = 'intent';
            entity[report] = oscard;
            oscard = argBar;
            report = 'transitionTo';
            entity[report] = oscard;
            oscard = true;
            report = 'forceTransition';
            entity[report] = oscard;
            entity = zuuluu.bind(tangon)(michal, entity);
 99:
            entity = undefined;
            return entity;
        }
    };
    tangon['transitionToInviteSync'] = verify;
    verify = function(argFoo) { // Original name: openNativeAppModal
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot3;
        entity = 49;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.openNativeAppModal;
        michal = _closure1_slot26;
        zuuluu = michal.INVITE_BROWSER;
        michal = argFoo;
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    tangon['openNativeAppModal'] = verify;
    option = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: openApp
        _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
            report = argFoo;
            option = argBar;
            sizing = argBaz;
            var _closure2_slot0 = report;
            offset = null;
            entity = offset != report;
            yankee = null;
            if(!entity) { _fun00052_ip = 62; continue _fun00051 }
 26:
            tangon = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 43;
            michal = michal[entity];
            entity = undefined;
            michal = tangon.bind(entity)(michal);
            entity = michal.parseExtraDataFromInviteKey;
            yankee = entity.bind(michal)(report);
 62:
            michal = offset == yankee;
            entity = undefined;
            romeon = undefined;
            if(michal) { _fun00052_ip = 79; continue _fun00051 }
 73:
            romeon = yankee.baseCode;
 79:
            golfie = _closure1_slot1;
            oscard = _closure1_slot3;
            tangon = 35;
            verify = oscard[tangon];
            backup = golfie.bind(entity)(verify);
            foxtra = backup.dispatch;
            verify = {};
            kiloes = 'INVITE_APP_OPENING';
            verify['type'] = kiloes;
            verify['code'] = report;
            verify = foxtra.bind(backup)(verify);
            verify = 50;
            oscard = oscard[verify];
            oscard = golfie.bind(entity)(oscard);
            oscard = oscard.ua;
            if(!(offset != oscard)) { _fun00052_ip = 212; continue _fun00051 }
 150:
            golfie = _closure1_slot1;
            oscard = _closure1_slot3;
            oscard = oscard[verify];
            oscard = golfie.bind(entity)(oscard);
            golfie = oscard.ua;
            oscard = golfie.toLowerCase;
            foxtra = oscard.bind(golfie)();
            golfie = foxtra.indexOf;
            oscard = 'googlebot';
            golfie = golfie.bind(foxtra)(oscard);
            oscard = -1;
            if(!(!(golfie > oscard))) { _fun00052_ip = 737; continue _fun00051 }
 212:
            golfie = _closure1_slot1;
            oscard = _closure1_slot3;
            oscard = oscard[verify];
            oscard = golfie.bind(entity)(oscard);
            oscard = oscard.os;
            foxtra = offset == oscard;
            golfie = undefined;
            if(foxtra) { _fun00052_ip = 250; continue _fun00051 }
 244:
            golfie = oscard.family;
 250:
            oscard = 'Android';
            if(!(oscard !== golfie)) { _fun00052_ip = 396; continue _fun00051 }
 263:
            golfie = _closure1_slot1;
            oscard = _closure1_slot3;
            oscard = oscard[verify];
            oscard = golfie.bind(entity)(oscard);
            oscard = oscard.os;
            verify = offset == oscard;
            golfie = undefined;
            if(verify) { _fun00052_ip = 301; continue _fun00051 }
 295:
            golfie = oscard.family;
 301:
            oscard = 'iOS';
            if(!(oscard !== golfie)) { _fun00052_ip = 396; continue _fun00051 }
 311:
            oscard = offset != option;
            verify = '';
            if(!oscard) { _fun00052_ip = 337; continue _fun00051 }
 322:
            golfie = _closure1_slot24;
            oscard = golfie.INVITE_PROXY;
            verify = oscard.bind(golfie)(option);
 337:
            oscard = 0;
            golfie = verify[oscard];
            oscard = '#';
            option = verify;
            if(!(oscard === golfie)) { _fun00052_ip = 367; continue _fun00051 }
 354:
            golfie = verify.slice;
            oscard = 1;
            option = golfie.bind(verify)(oscard);
 367:
            oscard = global;
            oscard = oscard.HermesInternal;
            golfie = oscard.concat;
            oscard = 'discord://';
            option = golfie.bind(oscard)(option);
            _fun00052_ip = 698; continue _fun00051;
 396:
            if(!(offset == romeon)) { _fun00052_ip = 432; continue _fun00051 }
 400:
            golfie = _closure1_slot0;
            verify = _closure1_slot3;
            oscard = 51;
            oscard = verify[oscard];
            golfie = golfie.bind(entity)(oscard);
            oscard = golfie.getDefaultDynamicLinkTemplate;
            verify = oscard.bind(golfie)();
            _fun00052_ip = 463; continue _fun00051;
 432:
            golfie = _closure1_slot0;
            foxtra = _closure1_slot3;
            oscard = 51;
            oscard = foxtra[oscard];
            golfie = golfie.bind(entity)(oscard);
            oscard = golfie.getInviteDynamicLinkTemplate;
            verify = oscard.bind(golfie)(romeon);
 463:
            foxtra = _closure1_slot0;
            backup = _closure1_slot3;
            oscard = 52;
            golfie = backup[oscard];
            foxtra = foxtra.bind(entity)(golfie);
            golfie = foxtra.generateAttemptId;
            foxtra = golfie.bind(foxtra)();
            golfie = _closure1_slot1;
            oscard = backup[oscard];
            golfie = golfie.bind(entity)(oscard);
            oscard = {};
            backup = 'friend_invite';
            output = 2;
            kiloes = argGra;
            if(!(output !== kiloes)) { _fun00052_ip = 528; continue _fun00051 }
 524:
            backup = 'invite';
 528:
            oscard['utmSource'] = backup;
            oscard['fingerprint'] = sizing;
            backup = argCor;
            oscard['username'] = backup;
            oscard['attemptId'] = foxtra;
            backup = offset == yankee;
            offset = undefined;
            if(backup) { _fun00052_ip = 565; continue _fun00051 }
 559:
            offset = yankee.guildScheduledEventId;
 565:
            oscard['event'] = offset;
            offset = global;
            offset = offset.HermesInternal;
            yankee = offset.concat;
            offset = 'https://discord.com/api/download/mobile?invite_code=';
            offset = yankee.bind(offset)(romeon);
            oscard['iosFallbackLink'] = offset;
            option = golfie.bind(entity)(verify, oscard);
            verify = _closure1_slot1;
            output = _closure1_slot3;
            golfie = 53;
            golfie = output[golfie];
            yankee = verify.bind(entity)(golfie);
            offset = yankee.track;
            golfie = _closure1_slot28;
            verify = golfie.DEEP_LINK_CLICKED;
            golfie = {};
            kiloes = _closure1_slot0;
            backup = 54;
            backup = output[backup];
            kiloes = kiloes.bind(entity)(backup);
            backup = kiloes.maybeExtractId;
            backup = backup.bind(kiloes)(sizing);
            golfie['fingerprint'] = backup;
            golfie['attempt_id'] = foxtra;
            foxtra = 'invite';
            golfie['source'] = foxtra;
            golfie['invite_code'] = romeon;
            golfie = offset.bind(yankee)(verify, golfie);
 698:
            golfie = _closure1_slot1;
            verify = _closure1_slot3;
            oscard = 55;
            oscard = verify[oscard];
            golfie = golfie.bind(entity)(oscard);
            oscard = golfie.launch;
            zuuluu = function(argFoo) {
                _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot3;
                    entity = 35;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.dispatch;
                    report = {};
                    michal = argFoo;
                    if(michal) { _fun00054_ip = 64; continue _fun00053 }
 38:
                    michal = 'INVITE_APP_NOT_OPENED';
                    report['type'] = michal;
                    michal = _closure2_slot0;
                    report['code'] = michal;
                    michal = report;
                    _fun00054_ip = 86; continue _fun00053;
 64:
                    oscard = 'INVITE_APP_OPENED';
                    report['type'] = oscard;
                    oscard = _closure2_slot0;
                    report['code'] = oscard;
                    michal = report;
 86:
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            zuuluu = oscard.bind(golfie)(option, zuuluu);
            _fun00052_ip = 780; continue _fun00051;
 737:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot3;
            michal = michal[tangon];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'INVITE_APP_NOT_OPENED';
            michal['type'] = oscard;
            michal['code'] = report;
            michal = zuuluu.bind(tangon)(michal);
 780:
            return entity;
        }
    };
    tangon['openApp'] = option;
    tangon['transitionToInviteChannelSync'] = report;
    report = 56;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'actions/InstantInviteActionCreators.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['transitionToGuildFromEventInvite'] = michal;
    return entity;
})();