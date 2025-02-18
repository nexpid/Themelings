// app/modules/channel/native/ChannelLongPressActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: handleVoiceOrStageChannelConnectPress
        entity = undefined;
        tangon = _closure1_slot29;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot28 = entity;
    entity = function() { // Original name: _handleVoiceOrStageChannelConnectPress
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    report = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 147; continue _fun00001 }
 13:
                    michal = report.isGuildStageVoice;
                    tangon = michal.bind(report)();
                    golfie = _closure1_slot0;
                    michal = _closure1_slot2;
                    zuuluu = 18;
                    oscard = michal[zuuluu];
                    zuuluu = undefined;
                    oscard = golfie.bind(zuuluu)(oscard);
                    if(tangon) { _fun00002_ip = 102; continue _fun00001 }
 51:
                    tangon = 19;
                    golfie = michal[tangon];
                    tangon = michal.paths;
                    tangon = oscard.bind(zuuluu)(golfie, tangon);
                    SaveGenerator(address=73);
 71:
                    return tangon;
 73:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(golfie) { _fun00002_ip = 99; continue _fun00001 }
 79:
                    option = tangon.openGuildVoiceModal;
                    golfie = 'Channel List';
                    golfie = option.bind(zuuluu)(report, golfie);
                    _fun00002_ip = 141; continue _fun00001;
 99:
                    return tangon;
 102:
                    tangon = 17;
                    tangon = michal[tangon];
                    michal = michal.paths;
                    michal = oscard.bind(zuuluu)(tangon, michal);
                    SaveGenerator(address=124);
 122:
                    return michal;
 124:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 144; continue _fun00001 }
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
        _closure1_slot29 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot29 = entity;
    entity = function(argFoo) { // Original name: ChannelLongPressActionSheetConnected
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            romeon = entity.channel;
            var _closure2_slot0 = romeon;
            michal = entity.onClose;
            var _closure2_slot1 = michal;
            tangon = undefined;
            var _closure2_slot3 = tangon;
            var _closure2_slot4 = tangon;
            oscard = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 60;
            zuuluu = verify[entity];
            report = oscard.bind(tangon)(zuuluu);
            zuuluu = 61;
            zuuluu = verify[zuuluu];
            zuuluu = oscard.bind(tangon)(zuuluu);
            zuuluu = zuuluu.CHANNEL_LONG_PRESS_MENU;
            zuuluu = report.bind(tangon)(zuuluu);
            report = zuuluu.analyticsLocations;
            zuuluu = romeon.getGuildId;
            golfie = zuuluu.bind(romeon)();
            var _closure2_slot2 = golfie;
            option = _closure1_slot0;
            zuuluu = 62;
            oscard = verify[zuuluu];
            foxtra = option.bind(tangon)(oscard);
            yankee = foxtra.useStateFromStores;
            oscard = _closure1_slot15;
            offset = new Array(1);
            offset[0] = oscard;
            oscard = function() {
                zuuluu = _closure1_slot15;
                michal = zuuluu.getGuild;
                entity = _closure2_slot2;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            output = yankee.bind(foxtra)(offset, oscard);
            oscard = verify[zuuluu];
            foxtra = option.bind(tangon)(oscard);
            yankee = foxtra.useStateFromStoresObject;
            oscard = _closure1_slot16;
            offset = new Array(1);
            offset[0] = oscard;
            oscard = function() {
                entity = {};
                oscard = _closure1_slot16;
                tangon = oscard.can;
                zuuluu = _closure1_slot23;
                zuuluu = zuuluu.MANAGE_CHANNELS;
                report = _closure2_slot0;
                zuuluu = tangon.bind(oscard)(zuuluu, report);
                entity['canManageChannel'] = zuuluu;
                oscard = _closure1_slot16;
                tangon = oscard.can;
                zuuluu = _closure1_slot23;
                zuuluu = zuuluu.CREATE_INSTANT_INVITE;
                zuuluu = tangon.bind(oscard)(zuuluu, report);
                entity['canCreateInstantInvite'] = zuuluu;
                tangon = _closure1_slot16;
                zuuluu = tangon.can;
                michal = _closure1_slot23;
                michal = michal.CONNECT;
                michal = zuuluu.bind(tangon)(michal, report);
                entity['canConnect'] = michal;
                return entity;
            };
            oscard = yankee.bind(foxtra)(offset, oscard);
            sierra = oscard.canManageChannel;
            status = oscard.canCreateInstantInvite;
            target = oscard.canConnect;
            oscard = 63;
            oscard = verify[oscard];
            verify = option.bind(tangon)(oscard);
            option = verify.useOptInEnabledForGuild;
            oscard = null;
            if(!(oscard == golfie)) { _fun00004_ip = 232; continue _fun00003 }
 228:
            golfie = _closure1_slot22;
 232:
            ctrled = option.bind(verify)(golfie);
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = offset[zuuluu];
            foxtra = verify.bind(tangon)(golfie);
            yankee = foxtra.useStateFromStoresObject;
            golfie = _closure1_slot18;
            option = new Array(1);
            option[0] = golfie;
            golfie = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = {};
                    option = _closure1_slot18;
                    golfie = option.isChannelOptedIn;
                    oscard = _closure2_slot2;
                    tangon = _closure2_slot0;
                    report = tangon.id;
                    report = golfie.bind(option)(oscard, report);
                    entity['isOptedIn'] = report;
                    tangon = tangon.parent_id;
                    golfie = null;
                    tangon = golfie != tangon;
                    if(!tangon) { _fun00006_ip = 87; continue _fun00005 }
 57:
                    verify = _closure1_slot18;
                    option = verify.isChannelOptedIn;
                    oscard = _closure2_slot2;
                    report = _closure2_slot0;
                    report = report.parent_id;
                    tangon = option.bind(verify)(oscard, report);
 87:
                    entity['isParentOptedIn'] = tangon;
                    report = _closure1_slot18;
                    tangon = report.isFavorite;
                    oscard = _closure2_slot2;
                    if(!(golfie == oscard)) { _fun00006_ip = 116; continue _fun00005 }
 110:
                    zuuluu = _closure1_slot24;
                    _fun00006_ip = 120; continue _fun00005;
 116:
                    zuuluu = _closure2_slot2;
 120:
                    michal = _closure2_slot0;
                    michal = michal.id;
                    michal = tangon.bind(report)(zuuluu, michal);
                    entity['isFavorited'] = michal;
                    return entity;
                }
            };
            golfie = yankee.bind(foxtra)(option, golfie);
            source = golfie.isOptedIn;
            update = golfie.isParentOptedIn;
            echoed = golfie.isFavorited;
            golfie = offset[zuuluu];
            foxtra = verify.bind(tangon)(golfie);
            yankee = foxtra.useStateFromStores;
            golfie = _closure1_slot18;
            option = new Array(1);
            option[0] = golfie;
            golfie = function() {
                tangon = _closure1_slot18;
                zuuluu = tangon.isChannelMuted;
                michal = _closure2_slot2;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            papara = yankee.bind(foxtra)(option, golfie);
            golfie = offset[zuuluu];
            foxtra = verify.bind(tangon)(golfie);
            yankee = foxtra.useStateFromStores;
            golfie = _closure1_slot7;
            option = new Array(1);
            option[0] = golfie;
            golfie = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = _closure2_slot2;
                    entity = null;
                    entity = entity != zuuluu;
                    if(!entity) { _fun00008_ip = 48; continue _fun00007 }
 16:
                    report = _closure1_slot7;
                    tangon = report.hasThreadsForChannel;
                    zuuluu = _closure2_slot2;
                    michal = _closure2_slot0;
                    michal = michal.id;
                    entity = tangon.bind(report)(zuuluu, michal);
 48:
                    return entity;
                }
            };
            cntext = yankee.bind(foxtra)(option, golfie);
            golfie = offset[zuuluu];
            foxtra = verify.bind(tangon)(golfie);
            yankee = foxtra.useStateFromStores;
            golfie = _closure1_slot12;
            option = new Array(1);
            option[0] = golfie;
            golfie = function() {
                zuuluu = _closure1_slot12;
                michal = zuuluu.isCollapsed;
                entity = _closure2_slot0;
                entity = entity.parent_id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            config = yankee.bind(foxtra)(option, golfie);
            golfie = offset[zuuluu];
            foxtra = verify.bind(tangon)(golfie);
            yankee = foxtra.useStateFromStores;
            golfie = _closure1_slot14;
            option = new Array(1);
            option[0] = golfie;
            golfie = function() {
                zuuluu = _closure1_slot14;
                michal = zuuluu.isCollapsed;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            sequen = yankee.bind(foxtra)(option, golfie);
            golfie = offset[zuuluu];
            foxtra = verify.bind(tangon)(golfie);
            yankee = foxtra.useStateFromStores;
            golfie = _closure1_slot6;
            option = new Array(1);
            option[0] = golfie;
            golfie = function() {
                zuuluu = _closure1_slot6;
                michal = zuuluu.isLive;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            vacuum = yankee.bind(foxtra)(option, golfie);
            yankee = _closure1_slot1;
            golfie = 25;
            golfie = offset[golfie];
            golfie = yankee.bind(tangon)(golfie);
            option = true;
            backup = golfie.bind(tangon)(romeon, option);
            golfie = 64;
            golfie = offset[golfie];
            golfie = yankee.bind(tangon)(golfie);
            record = golfie.bind(tangon)(romeon);
            golfie = 65;
            golfie = offset[golfie];
            golfie = verify.bind(tangon)(golfie);
            verify = golfie.DeveloperMode;
            golfie = verify.useSetting;
            verify = golfie.bind(verify)();
            _closure2_slot3 = verify;
            if(!(oscard == output)) { _fun00004_ip = 642; continue _fun00003 }
 575:
            yankee = _closure1_slot26;
            offset = _closure1_slot1;
            limora = _closure1_slot2;
            foxtra = 67;
            golfie = limora[foxtra];
            offset = offset.bind(tangon)(golfie);
            golfie = {};
            kiloes = _closure1_slot0;
            foxtra = limora[foxtra];
            foxtra = kiloes.bind(tangon)(foxtra);
            foxtra = foxtra.AvatarSizes;
            foxtra = foxtra.LARGE;
            golfie['size'] = foxtra;
            golfie['channel'] = romeon;
            kiloes = yankee.bind(tangon)(offset, golfie);
            _fun00004_ip = 707; continue _fun00003;
 642:
            yankee = _closure1_slot26;
            offset = _closure1_slot1;
            limora = _closure1_slot2;
            foxtra = 66;
            golfie = limora[foxtra];
            offset = offset.bind(tangon)(golfie);
            golfie = {};
            golfie['guild'] = output;
            output = _closure1_slot0;
            foxtra = limora[foxtra];
            foxtra = output.bind(tangon)(foxtra);
            foxtra = foxtra.GuildIconSizes;
            foxtra = foxtra.LARGE;
            golfie['size'] = foxtra;
            kiloes = yankee.bind(tangon)(offset, golfie);
 707:
            golfie = _closure1_slot0;
            offset = _closure1_slot2;
            yankee = offset[zuuluu];
            limora = golfie.bind(tangon)(yankee);
            output = limora.useStateFromStores;
            yankee = _closure1_slot19;
            foxtra = new Array(1);
            foxtra[0] = yankee;
            yankee = function() {
                michal = _closure1_slot19;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            limora = output.bind(limora)(foxtra, yankee);
            zuuluu = offset[zuuluu];
            output = golfie.bind(tangon)(zuuluu);
            foxtra = output.useStateFromStoresObject;
            zuuluu = _closure1_slot18;
            yankee = new Array(1);
            yankee[0] = zuuluu;
            zuuluu = function() {
                entity = {};
                oscard = _closure1_slot18;
                report = oscard.isMessagesFavorite;
                michal = _closure2_slot0;
                tangon = michal.id;
                tangon = report.bind(oscard)(tangon);
                entity['isMessagesFavorited'] = tangon;
                tangon = _closure1_slot18;
                zuuluu = tangon.isAddedToMessages;
                michal = michal.id;
                michal = zuuluu.bind(tangon)(michal);
                entity['isAddedToMessages'] = michal;
                return entity;
            };
            zuuluu = foxtra.bind(output)(yankee, zuuluu);
            output = zuuluu.isMessagesFavorited;
            yankee = zuuluu.isAddedToMessages;
            zuuluu = 68;
            zuuluu = offset[zuuluu];
            golfie = golfie.bind(tangon)(zuuluu);
            zuuluu = golfie.useVoiceActivityNotificationSettingsExperiment;
            foxtra = zuuluu.bind(golfie)(romeon);
            offset = oscard != limora;
            if(!offset) { _fun00004_ip = 862; continue _fun00003 }
 836:
            zuuluu = limora.isStaff;
            zuuluu = zuuluu.bind(limora)();
            if(zuuluu) { _fun00004_ip = 859; continue _fun00003 }
 849:
            golfie = limora.isStaffPersonal;
            zuuluu = golfie.bind(limora)();
 859:
            offset = zuuluu;
 862:
            golfie = _closure1_slot0;
            limora = _closure1_slot2;
            zuuluu = 69;
            zuuluu = limora[zuuluu];
            golfie = golfie.bind(tangon)(zuuluu);
            zuuluu = golfie.useInappropriateConversationsTiers;
            limora = zuuluu.bind(golfie)(romeon);
            golfie = oscard == limora;
            zuuluu = undefined;
            if(golfie) { _fun00004_ip = 908; continue _fun00003 }
 902:
            zuuluu = limora.isTier1;
 908:
            golfie = oscard != zuuluu;
            if(!golfie) { _fun00004_ip = 931; continue _fun00003 }
 915:
            zuuluu = oscard != limora;
            if(!zuuluu) { _fun00004_ip = 928; continue _fun00003 }
 922:
            zuuluu = limora.isTier1;
 928:
            golfie = !zuuluu;
 931:
            whisks = oscard == limora;
            zuuluu = undefined;
            if(whisks) { _fun00004_ip = 946; continue _fun00003 }
 940:
            zuuluu = limora.isTier2;
 946:
            zuuluu = oscard != zuuluu;
            if(!zuuluu) { _fun00004_ip = 969; continue _fun00003 }
 953:
            oscard = oscard != limora;
            if(!oscard) { _fun00004_ip = 966; continue _fun00003 }
 960:
            oscard = limora.isTier2;
 966:
            zuuluu = !oscard;
 969:
            oscard = {};
            oscard['channel'] = romeon;
            oscard['canManageChannel'] = sierra;
            oscard['canCreateInstantInvite'] = status;
            oscard['canConnect'] = target;
            oscard['isMuted'] = papara;
            oscard['hasThreads'] = cntext;
            oscard['isNsfwGated'] = record;
            oscard['isInCollapsedCategory'] = config;
            oscard['isCollapsedVoiceChannel'] = sequen;
            oscard['isLiveStageChannel'] = vacuum;
            oscard['isOptInEnabled'] = ctrled;
            oscard['isOptedIn'] = source;
            oscard['isParentOptedIn'] = update;
            oscard['isFavorited'] = echoed;
            oscard['isMessagesFavorited'] = output;
            oscard['isInVoiceActivityNotificationExperiment'] = foxtra;
            oscard['isAddedToMessages'] = yankee;
            oscard['isAddToMessagesEnabled'] = offset;
            oscard['canMarkAsTier1InappropriateConversation'] = golfie;
            oscard['canMarkAsTier2InappropriateConversation'] = zuuluu;
            oscard['analyticsLocations'] = report;
            zuuluu = function(argFoo) { // Original name: getActionSheetButtons
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = argFoo;
                    offset = entity.channel;
                    var _closure3_slot0 = offset;
                    michal = entity.canManageChannel;
                    ctrled = entity.canCreateInstantInvite;
                    oscard = entity.canConnect;
                    echoed = entity.isMuted;
                    var _closure3_slot1 = echoed;
                    kiloes = entity.hasThreads;
                    foxtra = entity.isNsfwGated;
                    romeon = entity.isInCollapsedCategory;
                    backup = entity.isCollapsedVoiceChannel;
                    option = entity.isLiveStageChannel;
                    result = entity.isOptInEnabled;
                    status = entity.isOptedIn;
                    var _closure3_slot2 = status;
                    sierra = entity.isParentOptedIn;
                    record = entity.isFavorited;
                    var _closure3_slot3 = record;
                    sequen = entity.isMessagesFavorited;
                    var _closure3_slot4 = sequen;
                    sizing = entity.isInVoiceActivityNotificationExperiment;
                    update = entity.isAddedToMessages;
                    var _closure3_slot5 = update;
                    zuuluu = entity.isAddToMessagesEnabled;
                    source = entity.canMarkAsTier1InappropriateConversation;
                    output = entity.canMarkAsTier2InappropriateConversation;
                    entity = entity.analyticsLocations;
                    var _closure3_slot6 = entity;
                    yankee = undefined;
                    var _closure3_slot7 = yankee;
                    entity = new Array(0);
                    verify = {};
                    tangon = 'dm';
                    verify['sectionKey'] = tangon;
                    tangon = new Array(0);
                    verify['buttons'] = tangon;
                    tangon = offset.isDM;
                    tangon = tangon.bind(offset)();
                    if(!tangon) { _fun00010_ip = 418; continue _fun00009 }
 204:
                    vacuum = verify.buttons;
                    report = vacuum.push;
                    tangon = {};
                    cntext = _closure1_slot0;
                    papara = _closure1_slot2;
                    config = 20;
                    target = papara[config];
                    target = cntext.bind(yankee)(target);
                    whisks = target.intl;
                    limora = whisks.string;
                    target = papara[config];
                    target = cntext.bind(yankee)(target);
                    target = target.t;
                    target = target.LYju5O;
                    target = limora.bind(whisks)(target);
                    tangon['label'] = target;
                    target = 21;
                    target = papara[target];
                    target = cntext.bind(yankee)(target);
                    target = target.UserCircleIcon;
                    tangon['IconComponent'] = target;
                    target = function() { // Original name: onPress
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 22;
                        michal = michal[entity];
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = {};
                        report = _closure3_slot0;
                        oscard = report.getRecipientId;
                        oscard = oscard.bind(report)();
                        michal['userId'] = oscard;
                        report = report.id;
                        michal['channelId'] = report;
                        tangon = _closure3_slot6;
                        michal['sourceAnalyticsLocations'] = tangon;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    tangon['onPress'] = target;
                    tangon = report.bind(vacuum)(tangon);
                    vacuum = verify.buttons;
                    report = vacuum.push;
                    tangon = {};
                    target = papara[config];
                    target = cntext.bind(yankee)(target);
                    limora = target.intl;
                    target = limora.string;
                    config = papara[config];
                    config = cntext.bind(yankee)(config);
                    config = config.t;
                    config = config.jsvgc3;
                    config = target.bind(limora)(config);
                    tangon['label'] = config;
                    config = 23;
                    config = papara[config];
                    config = cntext.bind(yankee)(config);
                    config = config.UserMinusIcon;
                    tangon['IconComponent'] = config;
                    config = function() { // Original name: onPress
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 24;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.closePrivateChannel;
                        michal = _closure3_slot0;
                        michal = michal.id;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    tangon['onPress'] = config;
                    tangon = report.bind(vacuum)(tangon);
 418:
                    tangon = offset.isGroupDM;
                    tangon = tangon.bind(offset)();
                    if(!tangon) { _fun00010_ip = 552; continue _fun00009 }
 431:
                    vacuum = verify.buttons;
                    report = vacuum.push;
                    tangon = {};
                    cntext = _closure1_slot0;
                    papara = _closure1_slot2;
                    config = 20;
                    target = papara[config];
                    target = cntext.bind(yankee)(target);
                    limora = target.intl;
                    target = limora.string;
                    config = papara[config];
                    config = cntext.bind(yankee)(config);
                    config = config.t;
                    config = config.26C4oq;
                    config = target.bind(limora)(config);
                    tangon['label'] = config;
                    config = 23;
                    config = papara[config];
                    config = cntext.bind(yankee)(config);
                    config = config.UserMinusIcon;
                    tangon['IconComponent'] = config;
                    config = true;
                    tangon['isDestructive'] = config;
                    config = function() { // Original name: onPress
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            zuuluu = _closure1_slot0;
                            michal = _closure1_slot2;
                            entity = 25;
                            tangon = michal[entity];
                            entity = undefined;
                            verify = zuuluu.bind(entity)(tangon);
                            option = verify.computeChannelName;
                            report = _closure3_slot0;
                            golfie = _closure1_slot19;
                            tangon = _closure1_slot17;
                            yankee = option.bind(verify)(report, golfie, tangon);
                            verify = 20;
                            tangon = michal[verify];
                            tangon = zuuluu.bind(entity)(tangon);
                            offset = tangon.intl;
                            option = offset.formatToPlainString;
                            tangon = michal[verify];
                            tangon = zuuluu.bind(entity)(tangon);
                            tangon = tangon.t;
                            golfie = tangon.hJ5Ap6;
                            tangon = {};
                            tangon['name'] = yankee;
                            tangon = option.bind(offset)(golfie, tangon);
                            golfie = michal[verify];
                            golfie = zuuluu.bind(entity)(golfie);
                            option = golfie.intl;
                            golfie = option.format;
                            michal = michal[verify];
                            michal = zuuluu.bind(entity)(michal);
                            michal = michal.t;
                            zuuluu = michal.SSIVOj;
                            michal = {};
                            michal['name'] = yankee;
                            golfie = golfie.bind(option)(zuuluu, michal);
                            michal = report.isManaged;
                            michal = michal.bind(report)();
                            option = tangon;
                            if(!michal) { _fun00012_ip = 284; continue _fun00011 }
 174:
                            tangon = _closure1_slot0;
                            michal = _closure1_slot2;
                            zuuluu = michal[verify];
                            zuuluu = tangon.bind(entity)(zuuluu);
                            romeon = zuuluu.intl;
                            offset = romeon.formatToPlainString;
                            zuuluu = michal[verify];
                            zuuluu = tangon.bind(entity)(zuuluu);
                            zuuluu = zuuluu.t;
                            report = zuuluu.hVGjER;
                            zuuluu = {};
                            zuuluu['name'] = yankee;
                            option = offset.bind(romeon)(report, zuuluu);
                            report = michal[verify];
                            report = tangon.bind(entity)(report);
                            offset = report.intl;
                            report = offset.format;
                            michal = michal[verify];
                            michal = tangon.bind(entity)(michal);
                            michal = michal.t;
                            tangon = michal.IK1Qvr;
                            michal = {};
                            michal['name'] = yankee;
                            golfie = report.bind(offset)(tangon, michal);
 284:
                            zuuluu = _closure1_slot1;
                            report = _closure1_slot2;
                            michal = 26;
                            michal = report[michal];
                            tangon = zuuluu.bind(entity)(michal);
                            zuuluu = tangon.show;
                            michal = {};
                            michal['title'] = option;
                            michal['body'] = golfie;
                            option = _closure1_slot0;
                            oscard = report[verify];
                            oscard = option.bind(entity)(oscard);
                            offset = oscard.intl;
                            golfie = offset.string;
                            oscard = report[verify];
                            oscard = option.bind(entity)(oscard);
                            oscard = oscard.t;
                            oscard = oscard.p89ACg;
                            oscard = golfie.bind(offset)(oscard);
                            michal['confirmText'] = oscard;
                            oscard = report[verify];
                            oscard = option.bind(entity)(oscard);
                            golfie = oscard.intl;
                            oscard = golfie.string;
                            report = report[verify];
                            report = option.bind(entity)(report);
                            report = report.t;
                            report = report.gm1Ven;
                            report = oscard.bind(golfie)(report);
                            michal['cancelText'] = report;
                            report = function() { // Original name: onConfirm
                                zuuluu = _closure1_slot1;
                                michal = _closure1_slot2;
                                entity = 24;
                                michal = michal[entity];
                                entity = undefined;
                                tangon = zuuluu.bind(entity)(michal);
                                zuuluu = tangon.closePrivateChannel;
                                michal = _closure3_slot0;
                                michal = michal.id;
                                michal = zuuluu.bind(tangon)(michal);
                                return entity;
                            };
                            michal['onConfirm'] = report;
                            michal = zuuluu.bind(tangon)(michal);
                            return entity;
                        }
                    };
                    tangon['onPress'] = config;
                    tangon = report.bind(vacuum)(tangon);
 552:
                    tangon = verify.buttons;
                    report = tangon.length;
                    tangon = 0;
                    if(!(report > tangon)) { _fun00010_ip = 579; continue _fun00009 }
 569:
                    report = entity.push;
                    report = report.bind(entity)(verify);
 579:
                    report = offset.getGuildId;
                    vacuum = report.bind(offset)();
                    _closure3_slot7 = vacuum;
                    config = _closure1_slot10;
                    report = offset.type;
                    report = config.bind(yankee)(report);
                    if(report) { _fun00010_ip = 623; continue _fun00009 }
 613:
                    config = offset.isCategory;
                    report = config.bind(offset)();
 623:
                    if(report) { _fun00010_ip = 636; continue _fun00009 }
 626:
                    config = offset.isForumLikeChannel;
                    report = config.bind(offset)();
 636:
                    if(!report) { _fun00010_ip = 773; continue _fun00009 }
 642:
                    config = entity.push;
                    report = {};
                    cntext = 'mark-as-read';
                    report['sectionKey'] = cntext;
                    papara = {};
                    target = _closure1_slot0;
                    limora = _closure1_slot2;
                    cntext = 20;
                    whisks = limora[cntext];
                    whisks = target.bind(yankee)(whisks);
                    equals = whisks.intl;
                    whisks = equals.string;
                    cntext = limora[cntext];
                    cntext = target.bind(yankee)(cntext);
                    cntext = cntext.t;
                    cntext = cntext.e6RscX;
                    cntext = whisks.bind(equals)(cntext);
                    papara['label'] = cntext;
                    cntext = 27;
                    cntext = limora[cntext];
                    cntext = target.bind(yankee)(cntext);
                    cntext = cntext.EyeIcon;
                    papara['IconComponent'] = cntext;
                    cntext = function() { // Original name: onPress
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 28;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.ackChannel;
                        michal = _closure3_slot0;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    papara['onPress'] = cntext;
                    cntext = new Array(1);
                    cntext[0] = papara;
                    report['buttons'] = cntext;
                    report = config.bind(entity)(report);
 773:
                    report = {};
                    config = 'channel-actions';
                    report['sectionKey'] = config;
                    config = new Array(0);
                    report['buttons'] = config;
                    if(!ctrled) { _fun00010_ip = 909; continue _fun00009 }
 798:
                    cntext = report.buttons;
                    config = cntext.push;
                    ctrled = {};
                    target = _closure1_slot0;
                    limora = _closure1_slot2;
                    papara = 20;
                    whisks = limora[papara];
                    whisks = target.bind(yankee)(whisks);
                    equals = whisks.intl;
                    whisks = equals.string;
                    papara = limora[papara];
                    papara = target.bind(yankee)(papara);
                    papara = papara.t;
                    papara = papara.VINpSE;
                    papara = whisks.bind(equals)(papara);
                    ctrled['label'] = papara;
                    papara = 29;
                    papara = limora[papara];
                    papara = target.bind(yankee)(papara);
                    papara = papara.GroupPlusIcon;
                    ctrled['IconComponent'] = papara;
                    papara = function() { // Original name: onPress
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 30;
                        michal = michal[entity];
                        entity = undefined;
                        report = zuuluu.bind(entity)(michal);
                        tangon = report.showInstantInviteActionSheet;
                        zuuluu = _closure3_slot0;
                        michal = 'Context Menu';
                        michal = tangon.bind(report)(zuuluu, michal);
                        return entity;
                    };
                    ctrled['onPress'] = papara;
                    ctrled = config.bind(cntext)(ctrled);
 909:
                    ctrled = null;
                    ctrled = ctrled == vacuum;
                    if(ctrled) { _fun00010_ip = 928; continue _fun00009 }
 918:
                    vacuum = offset.isThread;
                    ctrled = vacuum.bind(offset)();
 928:
                    if(ctrled) { _fun00010_ip = 1321; continue _fun00009 }
 934:
                    ctrled = result;
                    if(!ctrled) { _fun00010_ip = 953; continue _fun00009 }
 940:
                    vacuum = offset.isCategory;
                    vacuum = vacuum.bind(offset)();
                    ctrled = !vacuum;
 953:
                    if(!ctrled) { _fun00010_ip = 1094; continue _fun00009 }
 959:
                    config = report.buttons;
                    vacuum = config.push;
                    ctrled = {};
                    limora = _closure1_slot0;
                    whisks = _closure1_slot2;
                    cntext = 20;
                    papara = whisks[cntext];
                    papara = limora.bind(yankee)(papara);
                    target = papara.intl;
                    papara = target.string;
                    cntext = whisks[cntext];
                    cntext = limora.bind(yankee)(cntext);
                    cntext = cntext.t;
                    if(record) { _fun00010_ip = 1032; continue _fun00009 }
 1019:
                    record = cntext.N2c/Ul;
                    record = papara.bind(target)(record);
                    _fun00010_ip = 1043; continue _fun00009;
 1032:
                    cntext = cntext.z7I3gY;
                    record = papara.bind(target)(cntext);
 1043:
                    ctrled['label'] = record;
                    cntext = _closure1_slot0;
                    papara = _closure1_slot2;
                    record = 31;
                    record = papara[record];
                    record = cntext.bind(yankee)(record);
                    record = record.StarIcon;
                    ctrled['IconComponent'] = record;
                    record = function() { // Original name: onPress
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            tangon = _closure1_slot0;
                            zuuluu = _closure1_slot2;
                            entity = 32;
                            zuuluu = zuuluu[entity];
                            entity = undefined;
                            offset = tangon.bind(entity)(zuuluu);
                            verify = offset.setIsFavorite;
                            kiloes = _closure3_slot7;
                            zuuluu = _closure3_slot0;
                            backup = zuuluu.id;
                            zuuluu = _closure3_slot3;
                            foxtra = !zuuluu;
                            tangon = {};
                            yankee = _closure1_slot20;
                            yankee = yankee.CHANNEL_ACTION_SHEET;
                            tangon['section'] = yankee;
                            sizing = offset;
                            romeon = tangon;
                            tangon = sizing[verify](kiloes, backup, foxtra, romeon, yankee);
                            if(zuuluu) { _fun00014_ip = 234; continue _fun00013 }
 86:
                            zuuluu = _closure1_slot0;
                            tangon = _closure1_slot2;
                            michal = 33;
                            michal = tangon[michal];
                            zuuluu = zuuluu.bind(entity)(michal);
                            michal = zuuluu.getRootNavigationRef;
                            tangon = michal.bind(zuuluu)();
                            oscard = null;
                            if(!(oscard != tangon)) { _fun00014_ip = 234; continue _fun00013 }
 122:
                            michal = tangon.getCurrentRoute;
                            michal = michal.bind(tangon)();
                            zuuluu = oscard == michal;
                            golfie = undefined;
                            if(zuuluu) { _fun00014_ip = 146; continue _fun00013 }
 141:
                            golfie = michal.name;
 146:
                            michal = tangon.getCurrentRoute;
                            michal = michal.bind(tangon)();
                            option = oscard == michal;
                            zuuluu = undefined;
                            if(option) { _fun00014_ip = 171; continue _fun00013 }
 165:
                            zuuluu = michal.params;
 171:
                            michal = 'guilds';
                            michal = michal === golfie;
                            if(!michal) { _fun00014_ip = 204; continue _fun00013 }
 182:
                            golfie = oscard == zuuluu;
                            oscard = undefined;
                            if(golfie) { _fun00014_ip = 196; continue _fun00013 }
 191:
                            oscard = zuuluu.guildId;
 196:
                            zuuluu = _closure3_slot7;
                            michal = oscard === zuuluu;
 204:
                            if(!michal) { _fun00014_ip = 234; continue _fun00013 }
 207:
                            zuuluu = tangon.setParams;
                            michal = {};
                            report = _closure3_slot0;
                            report = report.id;
                            michal['jumpToChannelId'] = report;
                            michal = zuuluu.bind(tangon)(michal);
 234:
                            return entity;
                        }
                    };
                    ctrled['onPress'] = record;
                    ctrled = vacuum.bind(config)(ctrled);
 1094:
                    if(!result) { _fun00010_ip = 1321; continue _fun00009 }
 1100:
                    vacuum = report.buttons;
                    ctrled = vacuum.push;
                    result = {};
                    record = _closure1_slot0;
                    cntext = _closure1_slot2;
                    config = 20;
                    papara = cntext[config];
                    papara = record.bind(yankee)(papara);
                    target = papara.intl;
                    papara = target.string;
                    config = cntext[config];
                    config = record.bind(yankee)(config);
                    config = config.t;
                    if(sierra) { _fun00010_ip = 1265; continue _fun00009 }
 1160:
                    if(status) { _fun00010_ip = 1176; continue _fun00009 }
 1163:
                    sierra = config.9mysCg;
                    sierra = papara.bind(target)(sierra);
                    _fun00010_ip = 1189; continue _fun00009;
 1176:
                    limora = config.3zySTE;
                    sierra = papara.bind(target)(limora);
 1189:
                    result['label'] = sierra;
                    limora = _closure1_slot0;
                    whisks = _closure1_slot2;
                    if(status) { _fun00010_ip = 1224; continue _fun00009 }
 1204:
                    status = 35;
                    status = whisks[status];
                    status = limora.bind(yankee)(status);
                    status = status.PlusLargeIcon;
                    _fun00010_ip = 1242; continue _fun00009;
 1224:
                    sierra = 34;
                    sierra = whisks[sierra];
                    sierra = limora.bind(yankee)(sierra);
                    status = sierra.XSmallIcon;
 1242:
                    result['IconComponent'] = status;
                    status = function() { // Original name: onPress
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 32;
                        michal = michal[entity];
                        entity = undefined;
                        golfie = zuuluu.bind(entity)(michal);
                        oscard = golfie.setOptInChannel;
                        romeon = _closure3_slot7;
                        zuuluu = _closure3_slot0;
                        yankee = zuuluu.id;
                        michal = _closure3_slot2;
                        offset = !michal;
                        michal = {};
                        option = _closure1_slot20;
                        option = option.CHANNEL_ACTION_SHEET;
                        michal['section'] = option;
                        foxtra = golfie;
                        verify = michal;
                        michal = foxtra[oscard](romeon, yankee, offset, verify, option);
                        return entity;
                    };
                    result['onPress'] = status;
                    status = ctrled.bind(vacuum)(result);
                    _fun00010_ip = 1321; continue _fun00009;
 1265:
                    config = config.jNphKS;
                    config = papara.bind(target)(config);
                    result['label'] = config;
                    config = 34;
                    config = cntext[config];
                    config = record.bind(yankee)(config);
                    config = config.XSmallIcon;
                    result['IconComponent'] = config;
                    config = function() { // Original name: onPress
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            entity = _closure3_slot0;
                            zuuluu = entity.parent_id;
                            entity = null;
                            if(!(entity != zuuluu)) { _fun00016_ip = 92; continue _fun00015 }
 19:
                            report = _closure1_slot0;
                            tangon = _closure1_slot2;
                            zuuluu = 32;
                            tangon = tangon[zuuluu];
                            zuuluu = undefined;
                            oscard = report.bind(zuuluu)(tangon);
                            report = oscard.setOptInChannel;
                            offset = _closure3_slot7;
                            michal = _closure3_slot0;
                            verify = michal.parent_id;
                            michal = {};
                            entity = _closure1_slot20;
                            entity = entity.CHANNEL_ACTION_SHEET;
                            michal['section'] = entity;
                            option = false;
                            yankee = oscard;
                            golfie = michal;
                            entity = yankee[report](offset, verify, option, golfie, oscard);
 92:
                            entity = undefined;
                            return entity;
                        }
                    };
                    result['onPress'] = config;
                    result = ctrled.bind(vacuum)(result);
 1321:
                    ctrled = _closure1_slot8;
                    result = offset.type;
                    result = ctrled.bind(yankee)(result);
                    if(result) { _fun00010_ip = 1352; continue _fun00009 }
 1338:
                    vacuum = _closure1_slot9;
                    ctrled = offset.type;
                    result = vacuum.bind(yankee)(ctrled);
 1352:
                    if(result) { _fun00010_ip = 1365; continue _fun00009 }
 1355:
                    ctrled = offset.isForumLikeChannel;
                    result = ctrled.bind(offset)();
 1365:
                    if(!result) { _fun00010_ip = 1486; continue _fun00009 }
 1368:
                    vacuum = report.buttons;
                    ctrled = vacuum.push;
                    result = {};
                    record = _closure1_slot0;
                    cntext = _closure1_slot2;
                    config = 20;
                    papara = cntext[config];
                    papara = record.bind(yankee)(papara);
                    target = papara.intl;
                    papara = target.string;
                    config = cntext[config];
                    config = record.bind(yankee)(config);
                    config = config.t;
                    config = config.WqhZsr;
                    config = papara.bind(target)(config);
                    result['label'] = config;
                    config = 36;
                    config = cntext[config];
                    config = record.bind(yankee)(config);
                    config = config.LinkIcon;
                    result['IconComponent'] = config;
                    config = false;
                    result['isDestructive'] = config;
                    config = function() { // Original name: onPress
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 37;
                        michal = michal[entity];
                        entity = undefined;
                        report = zuuluu.bind(entity)(michal);
                        tangon = report.copyGuildChannelOrThreadLink;
                        michal = _closure3_slot0;
                        zuuluu = michal.guild_id;
                        michal = michal.id;
                        michal = tangon.bind(report)(zuuluu, michal);
                        return entity;
                    };
                    result['onPress'] = config;
                    result = ctrled.bind(vacuum)(result);
 1486:
                    result = offset.isPrivate;
                    result = result.bind(offset)();
                    if(!result) { _fun00010_ip = 1637; continue _fun00009 }
 1502:
                    vacuum = report.buttons;
                    ctrled = vacuum.push;
                    result = {};
                    papara = _closure1_slot0;
                    target = _closure1_slot2;
                    config = 20;
                    record = target[config];
                    record = papara.bind(yankee)(record);
                    cntext = record.intl;
                    record = cntext.string;
                    config = target[config];
                    config = papara.bind(yankee)(config);
                    config = config.t;
                    if(sequen) { _fun00010_ip = 1575; continue _fun00009 }
 1562:
                    sequen = config.N2c/Ul;
                    sequen = record.bind(cntext)(sequen);
                    _fun00010_ip = 1586; continue _fun00009;
 1575:
                    config = config.z7I3gY;
                    sequen = record.bind(cntext)(config);
 1586:
                    result['label'] = sequen;
                    config = _closure1_slot0;
                    record = _closure1_slot2;
                    sequen = 31;
                    sequen = record[sequen];
                    sequen = config.bind(yankee)(sequen);
                    sequen = sequen.StarIcon;
                    result['IconComponent'] = sequen;
                    sequen = function() { // Original name: onPress
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 32;
                        michal = michal[entity];
                        entity = undefined;
                        report = zuuluu.bind(entity)(michal);
                        tangon = report.setMessagesFavorite;
                        zuuluu = _closure3_slot0;
                        zuuluu = zuuluu.id;
                        michal = _closure3_slot4;
                        michal = !michal;
                        michal = tangon.bind(report)(zuuluu, michal);
                        return entity;
                    };
                    result['onPress'] = sequen;
                    result = ctrled.bind(vacuum)(result);
 1637:
                    result = {};
                    ctrled = 'safety-warning-tooling';
                    result['sectionKey'] = ctrled;
                    ctrled = new Array(0);
                    result['buttons'] = ctrled;
                    if(!source) { _fun00010_ip = 1775; continue _fun00009 }
 1662:
                    vacuum = result.buttons;
                    ctrled = vacuum.push;
                    source = {};
                    config = _closure1_slot0;
                    record = _closure1_slot2;
                    sequen = 20;
                    cntext = record[sequen];
                    cntext = config.bind(yankee)(cntext);
                    papara = cntext.intl;
                    cntext = papara.string;
                    sequen = record[sequen];
                    sequen = config.bind(yankee)(sequen);
                    sequen = sequen.t;
                    sequen = sequen.EuzCER;
                    sequen = cntext.bind(papara)(sequen);
                    source['label'] = sequen;
                    sequen = 38;
                    sequen = record[sequen];
                    sequen = config.bind(yankee)(sequen);
                    sequen = sequen.WarningIcon;
                    source['IconComponent'] = sequen;
                    sequen = function() { // Original name: onPress
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 39;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        report = tangon.bind(entity)(zuuluu);
                        tangon = report.markAsInappropriateConversation;
                        zuuluu = _closure3_slot0;
                        zuuluu = zuuluu.id;
                        michal = _closure1_slot5;
                        michal = michal.INAPPROPRIATE_CONVERSATION_TIER_1;
                        michal = tangon.bind(report)(zuuluu, michal);
                        return entity;
                    };
                    source['onPress'] = sequen;
                    source = ctrled.bind(vacuum)(source);
 1775:
                    if(!output) { _fun00010_ip = 1891; continue _fun00009 }
 1778:
                    ctrled = result.buttons;
                    source = ctrled.push;
                    output = {};
                    sequen = _closure1_slot0;
                    config = _closure1_slot2;
                    vacuum = 20;
                    record = config[vacuum];
                    record = sequen.bind(yankee)(record);
                    cntext = record.intl;
                    record = cntext.string;
                    vacuum = config[vacuum];
                    vacuum = sequen.bind(yankee)(vacuum);
                    vacuum = vacuum.t;
                    vacuum = vacuum.tBw/1t;
                    vacuum = record.bind(cntext)(vacuum);
                    output['label'] = vacuum;
                    vacuum = 38;
                    vacuum = config[vacuum];
                    vacuum = sequen.bind(yankee)(vacuum);
                    vacuum = vacuum.WarningIcon;
                    output['IconComponent'] = vacuum;
                    vacuum = function() { // Original name: onPress
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 39;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        report = tangon.bind(entity)(zuuluu);
                        tangon = report.markAsInappropriateConversation;
                        zuuluu = _closure3_slot0;
                        zuuluu = zuuluu.id;
                        michal = _closure1_slot5;
                        michal = michal.INAPPROPRIATE_CONVERSATION_TIER_2;
                        michal = tangon.bind(report)(zuuluu, michal);
                        return entity;
                    };
                    output['onPress'] = vacuum;
                    output = source.bind(ctrled)(output);
 1891:
                    output = result.buttons;
                    output = output.length;
                    if(!(output > tangon)) { _fun00010_ip = 1916; continue _fun00009 }
 1906:
                    output = entity.push;
                    output = output.bind(entity)(result);
 1916:
                    if(!zuuluu) { _fun00010_ip = 1933; continue _fun00009 }
 1919:
                    result = _closure1_slot8;
                    output = offset.type;
                    zuuluu = result.bind(yankee)(output);
 1933:
                    if(!zuuluu) { _fun00010_ip = 2078; continue _fun00009 }
 1939:
                    result = report.buttons;
                    output = result.push;
                    zuuluu = {};
                    sequen = _closure1_slot0;
                    config = _closure1_slot2;
                    source = 20;
                    ctrled = config[source];
                    ctrled = sequen.bind(yankee)(ctrled);
                    vacuum = ctrled.intl;
                    ctrled = vacuum.string;
                    source = config[source];
                    source = sequen.bind(yankee)(source);
                    source = source.t;
                    if(update) { _fun00010_ip = 2014; continue _fun00009 }
 1999:
                    update = source.LOp2MT;
                    update = ctrled.bind(vacuum)(update);
                    _fun00010_ip = 2027; continue _fun00009;
 2014:
                    source = source.n7rKhY;
                    update = ctrled.bind(vacuum)(source);
 2027:
                    zuuluu['label'] = update;
                    source = _closure1_slot0;
                    ctrled = _closure1_slot2;
                    update = 40;
                    update = ctrled[update];
                    update = source.bind(yankee)(update);
                    update = update.ChatIcon;
                    zuuluu['IconComponent'] = update;
                    update = function() { // Original name: onPress
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 32;
                        michal = michal[entity];
                        entity = undefined;
                        report = zuuluu.bind(entity)(michal);
                        tangon = report.setAddToMessages;
                        zuuluu = _closure3_slot0;
                        zuuluu = zuuluu.id;
                        michal = _closure3_slot5;
                        michal = !michal;
                        michal = tangon.bind(report)(zuuluu, michal);
                        return entity;
                    };
                    zuuluu['onPress'] = update;
                    zuuluu = output.bind(result)(zuuluu);
 2078:
                    zuuluu = report.buttons;
                    zuuluu = zuuluu.length;
                    if(!(zuuluu > tangon)) { _fun00010_ip = 2103; continue _fun00009 }
 2093:
                    zuuluu = entity.push;
                    zuuluu = zuuluu.bind(entity)(report);
 2103:
                    report = {};
                    zuuluu = 'notifications';
                    report['sectionKey'] = zuuluu;
                    zuuluu = new Array(0);
                    report['buttons'] = zuuluu;
                    output = _closure1_slot11;
                    zuuluu = offset.type;
                    zuuluu = output.bind(yankee)(zuuluu);
                    if(zuuluu) { _fun00010_ip = 2185; continue _fun00009 }
 2140:
                    zuuluu = offset.isCategory;
                    zuuluu = zuuluu.bind(offset)();
                    if(zuuluu) { _fun00010_ip = 2185; continue _fun00009 }
 2153:
                    if(!sizing) { _fun00010_ip = 2169; continue _fun00009 }
 2156:
                    zuuluu = offset.isGuildVoice;
                    zuuluu = zuuluu.bind(offset)();
                    if(zuuluu) { _fun00010_ip = 2185; continue _fun00009 }
 2169:
                    zuuluu = offset.isForumLikeChannel;
                    zuuluu = zuuluu.bind(offset)();
                    if(!zuuluu) { _fun00010_ip = 2844; continue _fun00009 }
 2185:
                    update = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    source = 20;
                    output = zuuluu[source];
                    output = update.bind(yankee)(output);
                    result = output.intl;
                    output = result.string;
                    zuuluu = zuuluu[source];
                    zuuluu = update.bind(yankee)(zuuluu);
                    zuuluu = zuuluu.t;
                    if(echoed) { _fun00010_ip = 2542; continue _fun00009 }
 2235:
                    echoed = zuuluu.tbeRRE;
                    update = output.bind(result)(echoed);
                    echoed = offset.isCategory;
                    echoed = echoed.bind(offset)();
                    if(echoed) { _fun00010_ip = 2419; continue _fun00009 }
 2264:
                    echoed = offset.isDM;
                    echoed = echoed.bind(offset)();
                    if(echoed) { _fun00010_ip = 2363; continue _fun00009 }
 2277:
                    echoed = offset.isGroupDM;
                    echoed = echoed.bind(offset)();
                    if(echoed) { _fun00010_ip = 2363; continue _fun00009 }
 2290:
                    echoed = offset.isThread;
                    echoed = echoed.bind(offset)();
                    vacuum = update;
                    if(!echoed) { _fun00010_ip = 2473; continue _fun00009 }
 2309:
                    sequen = _closure1_slot0;
                    echoed = _closure1_slot2;
                    update = echoed[source];
                    update = sequen.bind(yankee)(update);
                    ctrled = update.intl;
                    update = ctrled.string;
                    echoed = echoed[source];
                    echoed = sequen.bind(yankee)(echoed);
                    echoed = echoed.t;
                    echoed = echoed.bUUd8v;
                    vacuum = update.bind(ctrled)(echoed);
                    _fun00010_ip = 2473; continue _fun00009;
 2363:
                    sequen = _closure1_slot0;
                    echoed = _closure1_slot2;
                    update = echoed[source];
                    update = sequen.bind(yankee)(update);
                    ctrled = update.intl;
                    update = ctrled.string;
                    echoed = echoed[source];
                    echoed = sequen.bind(yankee)(echoed);
                    echoed = echoed.t;
                    echoed = echoed.LO3kaG;
                    vacuum = update.bind(ctrled)(echoed);
                    _fun00010_ip = 2473; continue _fun00009;
 2419:
                    sequen = _closure1_slot0;
                    echoed = _closure1_slot2;
                    update = echoed[source];
                    update = sequen.bind(yankee)(update);
                    ctrled = update.intl;
                    update = ctrled.string;
                    echoed = echoed[source];
                    echoed = sequen.bind(yankee)(echoed);
                    echoed = echoed.t;
                    echoed = echoed.pNMCg4;
                    vacuum = update.bind(ctrled)(echoed);
 2473:
                    ctrled = report.buttons;
                    update = ctrled.push;
                    echoed = {};
                    echoed['label'] = vacuum;
                    sequen = _closure1_slot0;
                    config = _closure1_slot2;
                    vacuum = 41;
                    vacuum = config[vacuum];
                    vacuum = sequen.bind(yankee)(vacuum);
                    vacuum = vacuum.BellSlashIcon;
                    echoed['IconComponent'] = vacuum;
                    vacuum = function() { // Original name: onPress
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            tangon = _closure1_slot0;
                            zuuluu = _closure1_slot2;
                            entity = 33;
                            zuuluu = zuuluu[entity];
                            entity = undefined;
                            tangon = tangon.bind(entity)(zuuluu);
                            zuuluu = tangon.getRootNavigationRef;
                            report = zuuluu.bind(tangon)();
                            zuuluu = null;
                            zuuluu = zuuluu != report;
                            if(!zuuluu) { _fun00018_ip = 54; continue _fun00017 }
 44:
                            tangon = report.isReady;
                            zuuluu = tangon.bind(report)();
 54:
                            if(!zuuluu) { _fun00018_ip = 118; continue _fun00017 }
 57:
                            tangon = report.navigate;
                            zuuluu = {};
                            oscard = _closure3_slot0;
                            oscard = oscard.id;
                            zuuluu['channelId'] = oscard;
                            michal = _closure1_slot25;
                            michal = michal.MUTE;
                            zuuluu['initialRouteName'] = michal;
                            michal = 'channel-long-press-sheet';
                            zuuluu['source'] = michal;
                            michal = 'sidebar';
                            michal = tangon.bind(report)(michal, zuuluu);
 118:
                            return entity;
                        }
                    };
                    echoed['onPress'] = vacuum;
                    echoed = update.bind(ctrled)(echoed);
                    _fun00010_ip = 2844; continue _fun00009;
 2542:
                    zuuluu = zuuluu.OYefmZ;
                    output = output.bind(result)(zuuluu);
                    zuuluu = offset.isCategory;
                    zuuluu = zuuluu.bind(offset)();
                    if(zuuluu) { _fun00010_ip = 2726; continue _fun00009 }
 2571:
                    zuuluu = offset.isDM;
                    zuuluu = zuuluu.bind(offset)();
                    if(zuuluu) { _fun00010_ip = 2670; continue _fun00009 }
 2584:
                    zuuluu = offset.isGroupDM;
                    zuuluu = zuuluu.bind(offset)();
                    if(zuuluu) { _fun00010_ip = 2670; continue _fun00009 }
 2597:
                    zuuluu = offset.isThread;
                    zuuluu = zuuluu.bind(offset)();
                    echoed = output;
                    if(!zuuluu) { _fun00010_ip = 2780; continue _fun00009 }
 2616:
                    update = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    output = zuuluu[source];
                    output = update.bind(yankee)(output);
                    result = output.intl;
                    output = result.string;
                    zuuluu = zuuluu[source];
                    zuuluu = update.bind(yankee)(zuuluu);
                    zuuluu = zuuluu.t;
                    zuuluu = zuuluu.Cq/TzM;
                    echoed = output.bind(result)(zuuluu);
                    _fun00010_ip = 2780; continue _fun00009;
 2670:
                    update = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    output = zuuluu[source];
                    output = update.bind(yankee)(output);
                    result = output.intl;
                    output = result.string;
                    zuuluu = zuuluu[source];
                    zuuluu = update.bind(yankee)(zuuluu);
                    zuuluu = zuuluu.t;
                    zuuluu = zuuluu.s5/5fn;
                    echoed = output.bind(result)(zuuluu);
                    _fun00010_ip = 2780; continue _fun00009;
 2726:
                    update = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    output = zuuluu[source];
                    output = update.bind(yankee)(output);
                    result = output.intl;
                    output = result.string;
                    zuuluu = zuuluu[source];
                    zuuluu = update.bind(yankee)(zuuluu);
                    zuuluu = zuuluu.t;
                    zuuluu = zuuluu.olaBeH;
                    echoed = output.bind(result)(zuuluu);
 2780:
                    result = report.buttons;
                    output = result.push;
                    zuuluu = {};
                    zuuluu['label'] = echoed;
                    update = _closure1_slot0;
                    source = _closure1_slot2;
                    echoed = 42;
                    echoed = source[echoed];
                    echoed = update.bind(yankee)(echoed);
                    echoed = echoed.BellIcon;
                    zuuluu['IconComponent'] = echoed;
                    echoed = function() { // Original name: onPress
                        zuuluu = _closure1_slot1;
                        offset = _closure1_slot2;
                        entity = 43;
                        michal = offset[entity];
                        entity = undefined;
                        golfie = zuuluu.bind(entity)(michal);
                        oscard = golfie.updateChannelOverrideSettings;
                        zuuluu = _closure3_slot0;
                        tangon = zuuluu.getGuildId;
                        report = tangon.bind(zuuluu)();
                        foxtra = zuuluu.id;
                        zuuluu = {};
                        michal = _closure3_slot1;
                        verify = !michal;
                        zuuluu['muted'] = verify;
                        verify = _closure1_slot0;
                        option = 44;
                        option = offset[option];
                        option = verify.bind(entity)(option);
                        verify = option.NotificationLabel;
                        option = verify.muted;
                        michal = !michal;
                        yankee = option.bind(verify)(michal);
                        kiloes = golfie;
                        backup = report;
                        romeon = zuuluu;
                        michal = kiloes[oscard](backup, foxtra, romeon, yankee, offset);
                        return entity;
                    };
                    zuuluu['onPress'] = echoed;
                    zuuluu = output.bind(result)(zuuluu);
 2844:
                    output = _closure1_slot8;
                    zuuluu = offset.type;
                    zuuluu = output.bind(yankee)(zuuluu);
                    if(zuuluu) { _fun00010_ip = 2871; continue _fun00009 }
 2861:
                    output = offset.isCategory;
                    zuuluu = output.bind(offset)();
 2871:
                    if(zuuluu) { _fun00010_ip = 2884; continue _fun00009 }
 2874:
                    output = offset.isGuildStageVoice;
                    zuuluu = output.bind(offset)();
 2884:
                    if(zuuluu) { _fun00010_ip = 2903; continue _fun00009 }
 2887:
                    if(!sizing) { _fun00010_ip = 2900; continue _fun00009 }
 2890:
                    output = offset.isGuildVoice;
                    sizing = output.bind(offset)();
 2900:
                    zuuluu = sizing;
 2903:
                    if(zuuluu) { _fun00010_ip = 2916; continue _fun00009 }
 2906:
                    sizing = offset.isForumLikeChannel;
                    zuuluu = sizing.bind(offset)();
 2916:
                    if(!zuuluu) { _fun00010_ip = 3037; continue _fun00009 }
 2919:
                    output = report.buttons;
                    sizing = output.push;
                    zuuluu = {};
                    echoed = _closure1_slot0;
                    update = _closure1_slot2;
                    result = 20;
                    source = update[result];
                    source = echoed.bind(yankee)(source);
                    ctrled = source.intl;
                    source = ctrled.string;
                    result = update[result];
                    result = echoed.bind(yankee)(result);
                    result = result.t;
                    result = result.h850Sk;
                    result = source.bind(ctrled)(result);
                    zuuluu['label'] = result;
                    result = 45;
                    result = update[result];
                    result = echoed.bind(yankee)(result);
                    result = result.ChannelNotificationIcon;
                    zuuluu['IconComponent'] = result;
                    result = true;
                    zuuluu['disableColor'] = result;
                    result = function() { // Original name: onPress
                        zuuluu = _closure1_slot1;
                        tangon = _closure1_slot2;
                        michal = 46;
                        oscard = tangon[michal];
                        entity = undefined;
                        golfie = zuuluu.bind(entity)(oscard);
                        oscard = golfie.setSection;
                        report = _closure1_slot21;
                        report = report.NOTIFICATIONS;
                        report = oscard.bind(golfie)(report);
                        michal = tangon[michal];
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.open;
                        michal = _closure3_slot0;
                        michal = michal.id;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    zuuluu['onPress'] = result;
                    zuuluu = sizing.bind(output)(zuuluu);
 3037:
                    zuuluu = report.buttons;
                    zuuluu = zuuluu.length;
                    if(!(zuuluu > tangon)) { _fun00010_ip = 3062; continue _fun00009 }
 3052:
                    zuuluu = entity.push;
                    zuuluu = zuuluu.bind(entity)(report);
 3062:
                    report = {};
                    zuuluu = 'threads';
                    report['sectionKey'] = zuuluu;
                    zuuluu = new Array(0);
                    report['buttons'] = zuuluu;
                    zuuluu = offset.isThread;
                    zuuluu = zuuluu.bind(offset)();
                    if(zuuluu) { _fun00010_ip = 3105; continue _fun00009 }
 3095:
                    sizing = offset.isForumLikeChannel;
                    zuuluu = sizing.bind(offset)();
 3105:
                    if(zuuluu) { _fun00010_ip = 3111; continue _fun00009 }
 3108:
                    zuuluu = !kiloes;
 3111:
                    if(zuuluu) { _fun00010_ip = 3117; continue _fun00009 }
 3114:
                    zuuluu = foxtra;
 3117:
                    if(zuuluu) { _fun00010_ip = 3231; continue _fun00009 }
 3120:
                    kiloes = report.buttons;
                    foxtra = kiloes.push;
                    zuuluu = {};
                    output = _closure1_slot0;
                    result = _closure1_slot2;
                    sizing = 20;
                    echoed = result[sizing];
                    echoed = output.bind(yankee)(echoed);
                    update = echoed.intl;
                    echoed = update.string;
                    sizing = result[sizing];
                    sizing = output.bind(yankee)(sizing);
                    sizing = sizing.t;
                    sizing = sizing.B2panJ;
                    sizing = echoed.bind(update)(sizing);
                    zuuluu['label'] = sizing;
                    sizing = 47;
                    sizing = result[sizing];
                    sizing = output.bind(yankee)(sizing);
                    sizing = sizing.ThreadIcon;
                    zuuluu['IconComponent'] = sizing;
                    sizing = function() { // Original name: onPress
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 48;
                        michal = michal[entity];
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = _closure3_slot0;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    zuuluu['onPress'] = sizing;
                    zuuluu = foxtra.bind(kiloes)(zuuluu);
 3231:
                    zuuluu = report.buttons;
                    zuuluu = zuuluu.length;
                    if(!(zuuluu > tangon)) { _fun00010_ip = 3256; continue _fun00009 }
 3246:
                    zuuluu = entity.push;
                    zuuluu = zuuluu.bind(entity)(report);
 3256:
                    report = {};
                    zuuluu = 'voice';
                    report['sectionKey'] = zuuluu;
                    zuuluu = new Array(0);
                    report['buttons'] = zuuluu;
                    foxtra = _closure1_slot9;
                    zuuluu = offset.type;
                    zuuluu = foxtra.bind(yankee)(zuuluu);
                    if(!zuuluu) { _fun00010_ip = 3296; continue _fun00009 }
 3293:
                    zuuluu = !romeon;
 3296:
                    if(!zuuluu) { _fun00010_ip = 3441; continue _fun00009 }
 3302:
                    foxtra = report.buttons;
                    romeon = foxtra.push;
                    zuuluu = {};
                    result = _closure1_slot0;
                    echoed = _closure1_slot2;
                    kiloes = 20;
                    sizing = echoed[kiloes];
                    sizing = result.bind(yankee)(sizing);
                    output = sizing.intl;
                    sizing = output.string;
                    kiloes = echoed[kiloes];
                    kiloes = result.bind(yankee)(kiloes);
                    kiloes = kiloes.t;
                    if(backup) { _fun00010_ip = 3377; continue _fun00009 }
 3362:
                    backup = kiloes.LxzNio;
                    backup = sizing.bind(output)(backup);
                    _fun00010_ip = 3390; continue _fun00009;
 3377:
                    kiloes = kiloes.JYF2OT;
                    backup = sizing.bind(output)(kiloes);
 3390:
                    zuuluu['label'] = backup;
                    kiloes = _closure1_slot0;
                    sizing = _closure1_slot2;
                    backup = 21;
                    backup = sizing[backup];
                    backup = kiloes.bind(yankee)(backup);
                    backup = backup.UserCircleIcon;
                    zuuluu['IconComponent'] = backup;
                    backup = function() { // Original name: onPress
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 49;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.update;
                        michal = _closure3_slot0;
                        michal = michal.id;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    zuuluu['onPress'] = backup;
                    zuuluu = romeon.bind(foxtra)(zuuluu);
 3441:
                    zuuluu = offset.isGuildVocal;
                    zuuluu = zuuluu.bind(offset)();
                    if(!zuuluu) { _fun00010_ip = 3740; continue _fun00009 }
 3457:
                    zuuluu = offset.isGuildStageVoice;
                    update = zuuluu.bind(offset)();
                    foxtra = report.buttons;
                    romeon = foxtra.push;
                    zuuluu = {};
                    kiloes = _closure1_slot0;
                    sizing = _closure1_slot2;
                    backup = 20;
                    output = sizing[backup];
                    output = kiloes.bind(yankee)(output);
                    echoed = output.intl;
                    result = echoed.string;
                    output = sizing[backup];
                    output = kiloes.bind(yankee)(output);
                    output = output.t;
                    if(update) { _fun00010_ip = 3586; continue _fun00009 }
 3527:
                    update = output.ZXxLQk;
                    update = result.bind(echoed)(update);
                    zuuluu['label'] = update;
                    update = 40;
                    update = sizing[update];
                    update = kiloes.bind(yankee)(update);
                    update = update.ChatIcon;
                    zuuluu['IconComponent'] = update;
                    update = function() { // Original name: onPress
                        tangon = _closure1_slot28;
                        michal = _closure3_slot0;
                        entity = undefined;
                        tangon = tangon.bind(entity)(michal);
                        tangon = _closure1_slot1;
                        report = _closure1_slot2;
                        zuuluu = 54;
                        zuuluu = report[zuuluu];
                        report = tangon.bind(entity)(zuuluu);
                        tangon = report.updateChatOpen;
                        zuuluu = michal.id;
                        michal = true;
                        michal = tangon.bind(report)(zuuluu, michal);
                        return entity;
                    };
                    zuuluu['onPress'] = update;
                    update = romeon.bind(foxtra)(zuuluu);
                    _fun00010_ip = 3740; continue _fun00009;
 3586:
                    output = output.7vb2cX;
                    output = result.bind(echoed)(output);
                    zuuluu['label'] = output;
                    output = 50;
                    output = sizing[output];
                    output = kiloes.bind(yankee)(output);
                    output = output.StageIcon;
                    zuuluu['IconComponent'] = output;
                    output = function() { // Original name: onPress
                        zuuluu = _closure1_slot28;
                        michal = _closure3_slot0;
                        entity = undefined;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    zuuluu['onPress'] = output;
                    zuuluu = romeon.bind(foxtra)(zuuluu);
                    foxtra = report.buttons;
                    romeon = foxtra.push;
                    zuuluu = {};
                    output = sizing[backup];
                    output = kiloes.bind(yankee)(output);
                    result = output.intl;
                    output = result.string;
                    backup = sizing[backup];
                    backup = kiloes.bind(yankee)(backup);
                    backup = backup.t;
                    backup = backup.ZXxLQk;
                    backup = output.bind(result)(backup);
                    zuuluu['label'] = backup;
                    backup = 40;
                    backup = sizing[backup];
                    backup = kiloes.bind(yankee)(backup);
                    backup = backup.ChatIcon;
                    zuuluu['IconComponent'] = backup;
                    backup = function() { // Original name: onPress
                        report = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 51;
                        tangon = michal[entity];
                        entity = undefined;
                        oscard = report.bind(entity)(tangon);
                        tangon = oscard.hideActionSheet;
                        tangon = tangon.bind(oscard)();
                        tangon = 52;
                        tangon = michal[tangon];
                        report = report.bind(entity)(tangon);
                        tangon = report.pushLazy;
                        oscard = _closure1_slot0;
                        zuuluu = 18;
                        zuuluu = michal[zuuluu];
                        oscard = oscard.bind(entity)(zuuluu);
                        zuuluu = 53;
                        zuuluu = michal[zuuluu];
                        michal = michal.paths;
                        zuuluu = oscard.bind(entity)(zuuluu, michal);
                        michal = {};
                        oscard = _closure3_slot0;
                        michal['channel'] = oscard;
                        michal = tangon.bind(report)(zuuluu, michal);
                        return entity;
                    };
                    zuuluu['onPress'] = backup;
                    zuuluu = romeon.bind(foxtra)(zuuluu);
 3740:
                    zuuluu = offset.isGuildStageVoice;
                    zuuluu = zuuluu.bind(offset)();
                    if(!zuuluu) { _fun00010_ip = 3756; continue _fun00009 }
 3753:
                    zuuluu = option;
 3756:
                    if(!zuuluu) { _fun00010_ip = 3762; continue _fun00009 }
 3759:
                    zuuluu = oscard;
 3762:
                    if(!zuuluu) { _fun00010_ip = 3883; continue _fun00009 }
 3765:
                    option = report.buttons;
                    oscard = option.push;
                    zuuluu = {};
                    foxtra = _closure1_slot0;
                    backup = _closure1_slot2;
                    romeon = 20;
                    kiloes = backup[romeon];
                    kiloes = foxtra.bind(yankee)(kiloes);
                    sizing = kiloes.intl;
                    kiloes = sizing.string;
                    romeon = backup[romeon];
                    romeon = foxtra.bind(yankee)(romeon);
                    romeon = romeon.t;
                    romeon = romeon.+78Pfn;
                    romeon = kiloes.bind(sizing)(romeon);
                    zuuluu['label'] = romeon;
                    romeon = 55;
                    romeon = backup[romeon];
                    romeon = foxtra.bind(yankee)(romeon);
                    romeon = romeon.FlagIcon;
                    zuuluu['IconComponent'] = romeon;
                    romeon = true;
                    zuuluu['isDestructive'] = romeon;
                    romeon = function() { // Original name: onPress
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 56;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.showReportModalForStageChannel;
                        michal = _closure3_slot0;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    zuuluu['onPress'] = romeon;
                    zuuluu = oscard.bind(option)(zuuluu);
 3883:
                    zuuluu = report.buttons;
                    zuuluu = zuuluu.length;
                    if(!(zuuluu > tangon)) { _fun00010_ip = 3908; continue _fun00009 }
 3898:
                    zuuluu = entity.push;
                    zuuluu = zuuluu.bind(entity)(report);
 3908:
                    zuuluu = {};
                    report = 'admin-actions';
                    zuuluu['sectionKey'] = report;
                    report = new Array(0);
                    zuuluu['buttons'] = report;
                    if(!michal) { _fun00010_ip = 4319; continue _fun00009 }
 3936:
                    oscard = zuuluu.buttons;
                    report = oscard.push;
                    michal = {};
                    option = offset.isCategory;
                    option = option.bind(offset)();
                    kiloes = _closure1_slot0;
                    romeon = _closure1_slot2;
                    sizing = 20;
                    foxtra = romeon[sizing];
                    foxtra = kiloes.bind(yankee)(foxtra);
                    backup = foxtra.intl;
                    foxtra = backup.string;
                    romeon = romeon[sizing];
                    romeon = kiloes.bind(yankee)(romeon);
                    romeon = romeon.t;
                    if(option) { _fun00010_ip = 4021; continue _fun00009 }
 4006:
                    option = romeon.3gUsJS;
                    option = foxtra.bind(backup)(option);
                    _fun00010_ip = 4034; continue _fun00009;
 4021:
                    romeon = romeon.zdPFs7;
                    option = foxtra.bind(backup)(romeon);
 4034:
                    michal['label'] = option;
                    romeon = _closure1_slot0;
                    foxtra = _closure1_slot2;
                    option = 57;
                    option = foxtra[option];
                    option = romeon.bind(yankee)(option);
                    option = option.SettingsIcon;
                    michal['IconComponent'] = option;
                    option = function() { // Original name: onPress
                        zuuluu = _closure1_slot1;
                        tangon = _closure1_slot2;
                        michal = 46;
                        oscard = tangon[michal];
                        entity = undefined;
                        golfie = zuuluu.bind(entity)(oscard);
                        oscard = golfie.setSection;
                        report = _closure1_slot21;
                        report = report.OVERVIEW;
                        report = oscard.bind(golfie)(report);
                        michal = tangon[michal];
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.open;
                        michal = _closure3_slot0;
                        michal = michal.id;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    michal['onPress'] = option;
                    michal = report.bind(oscard)(michal);
                    report = _closure1_slot8;
                    michal = offset.type;
                    michal = report.bind(yankee)(michal);
                    if(michal) { _fun00010_ip = 4112; continue _fun00009 }
 4102:
                    report = offset.isForumLikeChannel;
                    michal = report.bind(offset)();
 4112:
                    if(michal) { _fun00010_ip = 4125; continue _fun00009 }
 4115:
                    report = offset.isGuildVoice;
                    michal = report.bind(offset)();
 4125:
                    if(michal) { _fun00010_ip = 4138; continue _fun00009 }
 4128:
                    report = offset.isCategory;
                    michal = report.bind(offset)();
 4138:
                    if(!michal) { _fun00010_ip = 4319; continue _fun00009 }
 4144:
                    oscard = zuuluu.buttons;
                    report = oscard.push;
                    michal = {};
                    option = offset.isCategory;
                    option = option.bind(offset)();
                    kiloes = _closure1_slot0;
                    romeon = _closure1_slot2;
                    foxtra = romeon[sizing];
                    foxtra = kiloes.bind(yankee)(foxtra);
                    backup = foxtra.intl;
                    foxtra = backup.string;
                    romeon = romeon[sizing];
                    romeon = kiloes.bind(yankee)(romeon);
                    romeon = romeon.t;
                    if(option) { _fun00010_ip = 4224; continue _fun00009 }
 4211:
                    option = romeon.dEaPc3;
                    option = foxtra.bind(backup)(option);
                    _fun00010_ip = 4235; continue _fun00009;
 4224:
                    romeon = romeon.fUYU+v;
                    option = foxtra.bind(backup)(romeon);
 4235:
                    michal['label'] = option;
                    option = offset.isCategory;
                    option = option.bind(offset)();
                    offset = _closure1_slot0;
                    romeon = _closure1_slot2;
                    if(option) { _fun00010_ip = 4280; continue _fun00009 }
 4260:
                    option = 58;
                    option = romeon[option];
                    option = offset.bind(yankee)(option);
                    option = option.CopyIcon;
                    _fun00010_ip = 4298; continue _fun00009;
 4280:
                    verify = 35;
                    verify = romeon[verify];
                    verify = offset.bind(yankee)(verify);
                    option = verify.PlusLargeIcon;
 4298:
                    michal['IconComponent'] = option;
                    golfie = function() { // Original name: onPress
                        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                            zuuluu = _closure1_slot1;
                            michal = _closure1_slot2;
                            entity = 59;
                            michal = michal[entity];
                            entity = undefined;
                            golfie = zuuluu.bind(entity)(michal);
                            oscard = golfie.open;
                            zuuluu = _closure3_slot0;
                            michal = zuuluu.isCategory;
                            michal = michal.bind(zuuluu)();
                            report = undefined;
                            if(michal) { _fun00020_ip = 62; continue _fun00019 }
 53:
                            michal = _closure3_slot0;
                            report = michal.type;
 62:
                            zuuluu = _closure3_slot0;
                            michal = zuuluu.getGuildId;
                            tangon = michal.bind(zuuluu)();
                            michal = zuuluu.isCategory;
                            zuuluu = michal.bind(zuuluu)();
                            michal = _closure3_slot0;
                            if(zuuluu) { _fun00020_ip = 101; continue _fun00019 }
 93:
                            zuuluu = michal.parent_id;
                            _fun00020_ip = 106; continue _fun00019;
 101:
                            zuuluu = michal.id;
 106:
                            verify = _closure3_slot0;
                            michal = verify.isCategory;
                            verify = michal.bind(verify)();
                            michal = undefined;
                            if(verify) { _fun00020_ip = 134; continue _fun00019 }
 125:
                            option = _closure3_slot0;
                            michal = option.id;
 134:
                            backup = golfie;
                            foxtra = report;
                            romeon = tangon;
                            yankee = zuuluu;
                            offset = michal;
                            michal = backup[oscard](foxtra, romeon, yankee, offset, verify);
                            return entity;
                        }
                    };
                    michal['onPress'] = golfie;
                    michal = report.bind(oscard)(michal);
 4319:
                    michal = zuuluu.buttons;
                    michal = michal.length;
                    if(!(michal > tangon)) { _fun00010_ip = 4344; continue _fun00009 }
 4334:
                    michal = entity.push;
                    michal = michal.bind(entity)(zuuluu);
 4344:
                    return entity;
                }
            };
            yankee = zuuluu.bind(tangon)(oscard);
            _closure2_slot4 = yankee;
            zuuluu = romeon.isGroupDM;
            zuuluu = zuuluu.bind(romeon)();
            foxtra = undefined;
            if(!zuuluu) { _fun00004_ip = 1189; continue _fun00003 }
 1106:
            oscard = _closure1_slot0;
            output = _closure1_slot2;
            zuuluu = 20;
            golfie = output[zuuluu];
            golfie = oscard.bind(tangon)(golfie);
            offset = golfie.intl;
            golfie = offset.formatToPlainString;
            zuuluu = output[zuuluu];
            zuuluu = oscard.bind(tangon)(zuuluu);
            zuuluu = zuuluu.t;
            oscard = zuuluu.ABMKx8;
            zuuluu = {};
            romeon = romeon.recipients;
            output = romeon.length;
            romeon = 1;
            romeon = output + romeon;
            zuuluu['members'] = romeon;
            foxtra = golfie.bind(offset)(oscard, zuuluu);
 1189:
            golfie = _closure1_slot4;
            oscard = golfie.useEffect;
            offset = yankee.length;
            zuuluu = new Array(3);
            zuuluu[0] = offset;
            zuuluu[1] = verify;
            zuuluu[2] = michal;
            michal = function() {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    michal = _closure2_slot4;
                    zuuluu = michal.length;
                    michal = 0;
                    michal = michal !== zuuluu;
                    if(michal) { _fun00022_ip = 25; continue _fun00021 }
 21:
                    michal = _closure2_slot3;
 25:
                    if(michal) { _fun00022_ip = 38; continue _fun00021 }
 28:
                    michal = _closure2_slot1;
                    entity = undefined;
                    entity = michal.bind(entity)();
 38:
                    entity = undefined;
                    return entity;
                }
            };
            michal = oscard.bind(golfie)(michal, zuuluu);
            zuuluu = _closure1_slot26;
            offset = _closure1_slot0;
            output = _closure1_slot2;
            entity = output[entity];
            entity = offset.bind(tangon)(entity);
            michal = entity.AnalyticsLocationProvider;
            entity = {};
            entity['value'] = report;
            golfie = _closure1_slot27;
            report = 70;
            report = output[report];
            report = offset.bind(tangon)(report);
            oscard = report.ActionSheet;
            report = {};
            report['showGradient'] = option;
            romeon = _closure1_slot26;
            option = 71;
            option = output[option];
            option = offset.bind(tangon)(option);
            offset = option.ActionSheetIconHeader;
            option = {};
            option['icon'] = kiloes;
            option['title'] = backup;
            option['subtitle'] = foxtra;
            option = romeon.bind(tangon)(offset, option);
            report['header'] = option;
            offset = yankee.map;
            option = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot26;
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 72;
                michal = tangon[michal];
                tangon = undefined;
                michal = zuuluu.bind(tangon)(michal);
                michal = michal.ActionSheetRow;
                zuuluu = michal.Group;
                michal = {};
                option = entity.buttons;
                golfie = option.map;
                oscard = function(argFoo, argBar) {
                    _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                        zuuluu = argFoo;
                        backup = zuuluu.label;
                        romeon = zuuluu.IconComponent;
                        yankee = zuuluu.iconStyle;
                        oscard = zuuluu.trailing;
                        michal = zuuluu.isDestructive;
                        tangon = zuuluu.onPress;
                        var _closure4_slot0 = tangon;
                        offset = zuuluu.disableColor;
                        kiloes = 'default';
                        if(!michal) { _fun00024_ip = 60; continue _fun00023 }
 56:
                        kiloes = 'danger';
 60:
                        report = _closure1_slot26;
                        option = _closure1_slot0;
                        foxtra = _closure1_slot2;
                        golfie = 72;
                        michal = foxtra[golfie];
                        tangon = undefined;
                        michal = option.bind(tangon)(michal);
                        zuuluu = michal.ActionSheetRow;
                        michal = {};
                        michal['variant'] = kiloes;
                        michal['label'] = backup;
                        verify = _closure1_slot26;
                        golfie = foxtra[golfie];
                        golfie = option.bind(tangon)(golfie);
                        golfie = golfie.ActionSheetRow;
                        option = golfie.Icon;
                        golfie = {};
                        golfie['IconComponent'] = romeon;
                        golfie['style'] = yankee;
                        golfie['disableColor'] = offset;
                        golfie = verify.bind(tangon)(option, golfie);
                        michal['icon'] = golfie;
                        michal['trailing'] = oscard;
                        entity = function() { // Original name: onPress
                            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                                zuuluu = _closure4_slot0;
                                michal = null;
                                if(!(michal != zuuluu)) { _fun00026_ip = 23; continue _fun00025 }
 13:
                                michal = _closure4_slot0;
                                entity = undefined;
                                entity = michal.bind(entity)();
 23:
                                michal = _closure2_slot1;
                                entity = undefined;
                                michal = michal.bind(entity)();
                                return entity;
                            }
                        };
                        michal['onPress'] = entity;
                        entity = argBar;
                        entity = report.bind(tangon)(zuuluu, michal, entity);
                        return entity;
                    }
                };
                oscard = golfie.bind(option)(oscard);
                michal['children'] = oscard;
                entity = entity.sectionKey;
                entity = report.bind(tangon)(zuuluu, michal, entity);
                return entity;
            };
            offset = offset.bind(yankee)(option);
            option = new Array(2);
            option[0] = offset;
            if(!verify) { _fun00004_ip = 1569; continue _fun00003 }
 1372:
            romeon = _closure1_slot26;
            update = _closure1_slot0;
            source = _closure1_slot2;
            output = 72;
            offset = source[output];
            offset = update.bind(tangon)(offset);
            offset = offset.ActionSheetRow;
            yankee = offset.Group;
            offset = {};
            kiloes = _closure1_slot26;
            foxtra = source[output];
            foxtra = update.bind(tangon)(foxtra);
            backup = foxtra.ActionSheetRow;
            foxtra = {};
            echoed = _closure1_slot26;
            output = source[output];
            output = update.bind(tangon)(output);
            output = output.ActionSheetRow;
            result = output.Icon;
            output = {};
            ctrled = 73;
            ctrled = source[ctrled];
            ctrled = update.bind(tangon)(ctrled);
            ctrled = ctrled.IdIcon;
            output['IconComponent'] = ctrled;
            output = echoed.bind(tangon)(result, output);
            foxtra['icon'] = output;
            output = 20;
            result = source[output];
            result = update.bind(tangon)(result);
            echoed = result.intl;
            result = echoed.string;
            output = source[output];
            output = update.bind(tangon)(output);
            output = output.t;
            output = output.gFHI3t;
            output = result.bind(echoed)(output);
            foxtra['label'] = output;
            sizing = function() { // Original name: onPress
                zuuluu = _closure2_slot1;
                entity = undefined;
                zuuluu = zuuluu.bind(entity)();
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                report = 74;
                report = tangon[report];
                oscard = zuuluu.bind(entity)(report);
                report = oscard.copy;
                michal = _closure2_slot0;
                michal = michal.id;
                michal = report.bind(oscard)(michal);
                michal = 75;
                michal = tangon[michal];
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.presentIdCopied;
                michal = michal.bind(zuuluu)();
                return entity;
            };
            foxtra['onPress'] = sizing;
            foxtra = kiloes.bind(tangon)(backup, foxtra);
            offset['children'] = foxtra;
            verify = romeon.bind(tangon)(yankee, offset);
 1569:
            option[1] = verify;
            report['children'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot30 = entity;
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
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SafetyWarningTypes;
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
    tangon = report.bind(entity)(tangon);
    option = tangon.isGuildTextChannelType;
    var _closure1_slot8 = option;
    option = tangon.isGuildVocalChannelType;
    var _closure1_slot9 = option;
    option = tangon.isReadableType;
    var _closure1_slot10 = option;
    tangon = tangon.isTextChannel;
    var _closure1_slot11 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot13 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot14 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot15 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot16 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot17 = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot18 = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot19 = tangon;
    tangon = 14;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticsSections;
    var _closure1_slot20 = golfie;
    golfie = tangon.ChannelSettingsSections;
    var _closure1_slot21 = golfie;
    golfie = tangon.NULL_STRING_GUILD_ID;
    var _closure1_slot22 = golfie;
    golfie = tangon.Permissions;
    var _closure1_slot23 = golfie;
    tangon = tangon.ZERO_STRING_GUILD_ID;
    var _closure1_slot24 = tangon;
    tangon = 15;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ChannelDetailsNavigatorScreens;
    var _closure1_slot25 = tangon;
    tangon = 16;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot26 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot27 = tangon;
    tangon = 76;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/channel/native/ChannelLongPressActionSheet.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: ChannelLongPressActionSheet
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.channelId;
            var _closure2_slot0 = zuuluu;
            oscard = michal.onClose;
            var _closure2_slot1 = oscard;
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 62;
            zuuluu = report[zuuluu];
            report = undefined;
            option = tangon.bind(report)(zuuluu);
            golfie = option.useStateFromStores;
            zuuluu = _closure1_slot13;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                zuuluu = _closure1_slot13;
                michal = zuuluu.getChannel;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            golfie = golfie.bind(option)(tangon, zuuluu);
            var _closure2_slot2 = golfie;
            option = _closure1_slot4;
            tangon = option.useEffect;
            zuuluu = new Array(2);
            zuuluu[0] = golfie;
            zuuluu[1] = oscard;
            entity = function() {
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    zuuluu = _closure2_slot2;
                    michal = null;
                    if(!(michal == zuuluu)) { _fun00030_ip = 23; continue _fun00029 }
 13:
                    michal = _closure2_slot1;
                    entity = undefined;
                    entity = michal.bind(entity)();
 23:
                    entity = undefined;
                    return entity;
                }
            };
            entity = tangon.bind(option)(entity, zuuluu);
            entity = null;
            zuuluu = entity != golfie;
            if(!zuuluu) { _fun00028_ip = 151; continue _fun00027 }
 126:
            tangon = _closure1_slot26;
            zuuluu = _closure1_slot30;
            michal = {};
            michal['channel'] = golfie;
            michal['onClose'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 151:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();