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
                    zuuluu = 19;
                    oscard = michal[zuuluu];
                    zuuluu = undefined;
                    oscard = golfie.bind(zuuluu)(oscard);
                    if(tangon) { _fun00002_ip = 102; continue _fun00001 }
 51:
                    tangon = 20;
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
                    tangon = 18;
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
            output = entity.channel;
            var _closure2_slot0 = output;
            michal = entity.onClose;
            var _closure2_slot1 = michal;
            tangon = undefined;
            var _closure2_slot3 = tangon;
            var _closure2_slot4 = tangon;
            oscard = _closure1_slot1;
            yankee = _closure1_slot2;
            entity = 67;
            zuuluu = yankee[entity];
            report = oscard.bind(tangon)(zuuluu);
            zuuluu = 68;
            zuuluu = yankee[zuuluu];
            zuuluu = oscard.bind(tangon)(zuuluu);
            zuuluu = zuuluu.CHANNEL_LONG_PRESS_MENU;
            zuuluu = report.bind(tangon)(zuuluu);
            report = zuuluu.analyticsLocations;
            zuuluu = output.getGuildId;
            golfie = zuuluu.bind(output)();
            var _closure2_slot2 = golfie;
            offset = _closure1_slot0;
            zuuluu = 69;
            oscard = yankee[zuuluu];
            backup = offset.bind(tangon)(oscard);
            foxtra = backup.useStateFromStores;
            oscard = _closure1_slot15;
            romeon = new Array(1);
            romeon[0] = oscard;
            oscard = function() {
                zuuluu = _closure1_slot15;
                michal = zuuluu.getGuild;
                entity = _closure2_slot2;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            result = foxtra.bind(backup)(romeon, oscard);
            oscard = yankee[zuuluu];
            backup = offset.bind(tangon)(oscard);
            foxtra = backup.useStateFromStoresObject;
            oscard = _closure1_slot16;
            romeon = new Array(1);
            romeon[0] = oscard;
            oscard = function() {
                entity = {};
                oscard = _closure1_slot16;
                tangon = oscard.can;
                zuuluu = _closure1_slot24;
                zuuluu = zuuluu.MANAGE_CHANNELS;
                report = _closure2_slot0;
                zuuluu = tangon.bind(oscard)(zuuluu, report);
                entity['canManageChannel'] = zuuluu;
                oscard = _closure1_slot16;
                tangon = oscard.can;
                zuuluu = _closure1_slot24;
                zuuluu = zuuluu.CREATE_INSTANT_INVITE;
                zuuluu = tangon.bind(oscard)(zuuluu, report);
                entity['canCreateInstantInvite'] = zuuluu;
                tangon = _closure1_slot16;
                zuuluu = tangon.can;
                michal = _closure1_slot24;
                michal = michal.CONNECT;
                michal = zuuluu.bind(tangon)(michal, report);
                entity['canConnect'] = michal;
                return entity;
            };
            oscard = foxtra.bind(backup)(romeon, oscard);
            limora = oscard.canManageChannel;
            sierra = oscard.canCreateInstantInvite;
            status = oscard.canConnect;
            oscard = 70;
            oscard = yankee[oscard];
            yankee = offset.bind(tangon)(oscard);
            offset = yankee.useOptInEnabledForGuild;
            oscard = null;
            if(!(oscard == golfie)) { _fun00004_ip = 228; continue _fun00003 }
 224:
            golfie = _closure1_slot23;
 228:
            ctrled = offset.bind(yankee)(golfie);
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            golfie = yankee[zuuluu];
            backup = offset.bind(tangon)(golfie);
            foxtra = backup.useStateFromStoresObject;
            golfie = _closure1_slot19;
            romeon = new Array(1);
            romeon[0] = golfie;
            golfie = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = {};
                    option = _closure1_slot19;
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
                    verify = _closure1_slot19;
                    option = verify.isChannelOptedIn;
                    oscard = _closure2_slot2;
                    report = _closure2_slot0;
                    report = report.parent_id;
                    tangon = option.bind(verify)(oscard, report);
 87:
                    entity['isParentOptedIn'] = tangon;
                    report = _closure1_slot19;
                    tangon = report.isFavorite;
                    oscard = _closure2_slot2;
                    if(!(golfie == oscard)) { _fun00006_ip = 116; continue _fun00005 }
 110:
                    zuuluu = _closure1_slot25;
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
            golfie = foxtra.bind(backup)(romeon, golfie);
            source = golfie.isOptedIn;
            update = golfie.isParentOptedIn;
            echoed = golfie.isFavorited;
            golfie = yankee[zuuluu];
            backup = offset.bind(tangon)(golfie);
            foxtra = backup.useStateFromStores;
            golfie = _closure1_slot19;
            romeon = new Array(1);
            romeon[0] = golfie;
            golfie = function() {
                tangon = _closure1_slot19;
                zuuluu = tangon.isChannelMuted;
                michal = _closure2_slot2;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            target = foxtra.bind(backup)(romeon, golfie);
            golfie = yankee[zuuluu];
            backup = offset.bind(tangon)(golfie);
            foxtra = backup.useStateFromStores;
            golfie = _closure1_slot7;
            romeon = new Array(1);
            romeon[0] = golfie;
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
            cntext = foxtra.bind(backup)(romeon, golfie);
            golfie = yankee[zuuluu];
            backup = offset.bind(tangon)(golfie);
            foxtra = backup.useStateFromStores;
            golfie = _closure1_slot12;
            romeon = new Array(1);
            romeon[0] = golfie;
            golfie = function() {
                zuuluu = _closure1_slot12;
                michal = zuuluu.isCollapsed;
                entity = _closure2_slot0;
                entity = entity.parent_id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            config = foxtra.bind(backup)(romeon, golfie);
            golfie = yankee[zuuluu];
            backup = offset.bind(tangon)(golfie);
            foxtra = backup.useStateFromStores;
            golfie = _closure1_slot14;
            romeon = new Array(1);
            romeon[0] = golfie;
            golfie = function() {
                zuuluu = _closure1_slot14;
                michal = zuuluu.isCollapsed;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            sequen = foxtra.bind(backup)(romeon, golfie);
            golfie = yankee[zuuluu];
            backup = offset.bind(tangon)(golfie);
            foxtra = backup.useStateFromStores;
            golfie = _closure1_slot6;
            romeon = new Array(1);
            romeon[0] = golfie;
            golfie = function() {
                zuuluu = _closure1_slot6;
                michal = zuuluu.isLive;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            vacuum = foxtra.bind(backup)(romeon, golfie);
            foxtra = _closure1_slot1;
            golfie = 26;
            golfie = yankee[golfie];
            golfie = foxtra.bind(tangon)(golfie);
            romeon = true;
            backup = golfie.bind(tangon)(output, romeon);
            golfie = 71;
            golfie = yankee[golfie];
            golfie = foxtra.bind(tangon)(golfie);
            record = golfie.bind(tangon)(output);
            golfie = 72;
            golfie = yankee[golfie];
            golfie = offset.bind(tangon)(golfie);
            offset = golfie.DeveloperMode;
            golfie = offset.useSetting;
            yankee = golfie.bind(offset)();
            _closure2_slot3 = yankee;
            if(!(oscard == result)) { _fun00004_ip = 626; continue _fun00003 }
 559:
            foxtra = _closure1_slot27;
            offset = _closure1_slot1;
            papara = _closure1_slot2;
            kiloes = 74;
            golfie = papara[kiloes];
            offset = offset.bind(tangon)(golfie);
            golfie = {};
            sizing = _closure1_slot0;
            kiloes = papara[kiloes];
            kiloes = sizing.bind(tangon)(kiloes);
            kiloes = kiloes.AvatarSizes;
            kiloes = kiloes.LARGE;
            golfie['size'] = kiloes;
            golfie['channel'] = output;
            kiloes = foxtra.bind(tangon)(offset, golfie);
            _fun00004_ip = 691; continue _fun00003;
 626:
            foxtra = _closure1_slot27;
            offset = _closure1_slot1;
            papara = _closure1_slot2;
            sizing = 73;
            golfie = papara[sizing];
            offset = offset.bind(tangon)(golfie);
            golfie = {};
            golfie['guild'] = result;
            result = _closure1_slot0;
            sizing = papara[sizing];
            sizing = result.bind(tangon)(sizing);
            sizing = sizing.GuildIconSizes;
            sizing = sizing.LARGE;
            golfie['size'] = sizing;
            kiloes = foxtra.bind(tangon)(offset, golfie);
 691:
            offset = _closure1_slot0;
            golfie = _closure1_slot2;
            golfie = golfie[zuuluu];
            sizing = offset.bind(tangon)(golfie);
            foxtra = sizing.useStateFromStores;
            golfie = _closure1_slot20;
            offset = new Array(1);
            offset[0] = golfie;
            golfie = function() {
                michal = _closure1_slot20;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            whisks = foxtra.bind(sizing)(offset, golfie);
            papara = oscard != whisks;
            if(!papara) { _fun00004_ip = 759; continue _fun00003 }
 743:
            offset = output.isOwner;
            golfie = whisks.id;
            papara = offset.bind(output)(golfie);
 759:
            golfie = _closure1_slot0;
            offset = _closure1_slot2;
            zuuluu = offset[zuuluu];
            result = golfie.bind(tangon)(zuuluu);
            sizing = result.useStateFromStoresObject;
            zuuluu = _closure1_slot19;
            foxtra = new Array(1);
            foxtra[0] = zuuluu;
            zuuluu = function() {
                entity = {};
                oscard = _closure1_slot19;
                report = oscard.isMessagesFavorite;
                michal = _closure2_slot0;
                tangon = michal.id;
                tangon = report.bind(oscard)(tangon);
                entity['isMessagesFavorited'] = tangon;
                tangon = _closure1_slot19;
                zuuluu = tangon.isAddedToMessages;
                michal = michal.id;
                michal = zuuluu.bind(tangon)(michal);
                entity['isAddedToMessages'] = michal;
                return entity;
            };
            zuuluu = sizing.bind(result)(foxtra, zuuluu);
            result = zuuluu.isMessagesFavorited;
            foxtra = zuuluu.isAddedToMessages;
            zuuluu = 75;
            zuuluu = offset[zuuluu];
            golfie = golfie.bind(tangon)(zuuluu);
            zuuluu = golfie.useVoiceActivityNotificationSettingsExperiment;
            sizing = zuuluu.bind(golfie)(output);
            offset = oscard != whisks;
            if(!offset) { _fun00004_ip = 873; continue _fun00003 }
 847:
            zuuluu = whisks.isStaff;
            zuuluu = zuuluu.bind(whisks)();
            if(zuuluu) { _fun00004_ip = 870; continue _fun00003 }
 860:
            golfie = whisks.isStaffPersonal;
            zuuluu = golfie.bind(whisks)();
 870:
            offset = zuuluu;
 873:
            golfie = _closure1_slot0;
            whisks = _closure1_slot2;
            zuuluu = 76;
            zuuluu = whisks[zuuluu];
            golfie = golfie.bind(tangon)(zuuluu);
            zuuluu = golfie.useInappropriateConversationsTiers;
            whisks = zuuluu.bind(golfie)(output);
            golfie = oscard == whisks;
            zuuluu = undefined;
            if(golfie) { _fun00004_ip = 919; continue _fun00003 }
 913:
            zuuluu = whisks.isTier1;
 919:
            golfie = oscard != zuuluu;
            if(!golfie) { _fun00004_ip = 942; continue _fun00003 }
 926:
            zuuluu = oscard != whisks;
            if(!zuuluu) { _fun00004_ip = 939; continue _fun00003 }
 933:
            zuuluu = whisks.isTier1;
 939:
            golfie = !zuuluu;
 942:
            equals = oscard == whisks;
            zuuluu = undefined;
            if(equals) { _fun00004_ip = 957; continue _fun00003 }
 951:
            zuuluu = whisks.isTier2;
 957:
            zuuluu = oscard != zuuluu;
            if(!zuuluu) { _fun00004_ip = 980; continue _fun00003 }
 964:
            oscard = oscard != whisks;
            if(!oscard) { _fun00004_ip = 977; continue _fun00003 }
 971:
            oscard = whisks.isTier2;
 977:
            zuuluu = !oscard;
 980:
            oscard = {};
            oscard['channel'] = output;
            oscard['canManageChannel'] = limora;
            oscard['canCreateInstantInvite'] = sierra;
            oscard['canConnect'] = status;
            oscard['developerMode'] = yankee;
            oscard['isMuted'] = target;
            oscard['isOwner'] = papara;
            oscard['hasThreads'] = cntext;
            oscard['isNsfwGated'] = record;
            oscard['isInCollapsedCategory'] = config;
            oscard['isCollapsedVoiceChannel'] = sequen;
            oscard['isLiveStageChannel'] = vacuum;
            oscard['isOptInEnabled'] = ctrled;
            oscard['isOptedIn'] = source;
            oscard['isParentOptedIn'] = update;
            oscard['isFavorited'] = echoed;
            oscard['isMessagesFavorited'] = result;
            oscard['isInVoiceActivityNotificationExperiment'] = sizing;
            oscard['isAddedToMessages'] = foxtra;
            oscard['isAddToMessagesEnabled'] = offset;
            oscard['canMarkAsTier1InappropriateConversation'] = golfie;
            oscard['canMarkAsTier2InappropriateConversation'] = zuuluu;
            oscard['analyticsLocations'] = report;
            zuuluu = function(argFoo) { // Original name: getActionSheetButtons
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = argFoo;
                    backup = entity.channel;
                    var _closure3_slot0 = backup;
                    golfie = entity.canManageChannel;
                    source = entity.canCreateInstantInvite;
                    yankee = entity.canConnect;
                    michal = entity.developerMode;
                    ctrled = entity.isMuted;
                    var _closure3_slot1 = ctrled;
                    tangon = entity.isOwner;
                    result = entity.hasThreads;
                    sizing = entity.isNsfwGated;
                    kiloes = entity.isInCollapsedCategory;
                    output = entity.isCollapsedVoiceChannel;
                    foxtra = entity.isLiveStageChannel;
                    offset = entity.isOptInEnabled;
                    limora = entity.isOptedIn;
                    var _closure3_slot2 = limora;
                    equals = entity.isParentOptedIn;
                    target = entity.isFavorited;
                    var _closure3_slot3 = target;
                    cntext = entity.isMessagesFavorited;
                    var _closure3_slot4 = cntext;
                    echoed = entity.isInVoiceActivityNotificationExperiment;
                    vacuum = entity.isAddedToMessages;
                    var _closure3_slot5 = vacuum;
                    oscard = entity.isAddToMessagesEnabled;
                    sequen = entity.canMarkAsTier1InappropriateConversation;
                    update = entity.canMarkAsTier2InappropriateConversation;
                    entity = entity.analyticsLocations;
                    var _closure3_slot6 = entity;
                    romeon = undefined;
                    var _closure3_slot7 = romeon;
                    entity = new Array(0);
                    config = {};
                    zuuluu = 'dm';
                    config['sectionKey'] = zuuluu;
                    zuuluu = new Array(0);
                    config['buttons'] = zuuluu;
                    zuuluu = backup.isDM;
                    zuuluu = zuuluu.bind(backup)();
                    if(!zuuluu) { _fun00010_ip = 428; continue _fun00009 }
 216:
                    option = config.buttons;
                    report = option.push;
                    zuuluu = {};
                    papara = _closure1_slot0;
                    status = _closure1_slot2;
                    record = 21;
                    sierra = status[record];
                    sierra = papara.bind(romeon)(sierra);
                    quebec = sierra.intl;
                    whisks = quebec.string;
                    sierra = status[record];
                    sierra = papara.bind(romeon)(sierra);
                    sierra = sierra.t;
                    sierra = sierra.LYju5O;
                    sierra = whisks.bind(quebec)(sierra);
                    zuuluu['label'] = sierra;
                    sierra = 22;
                    sierra = status[sierra];
                    sierra = papara.bind(romeon)(sierra);
                    sierra = sierra.UserCircleIcon;
                    zuuluu['IconComponent'] = sierra;
                    sierra = function() { // Original name: onPress
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 23;
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
                    zuuluu['onPress'] = sierra;
                    zuuluu = report.bind(option)(zuuluu);
                    option = config.buttons;
                    report = option.push;
                    zuuluu = {};
                    sierra = status[record];
                    sierra = papara.bind(romeon)(sierra);
                    whisks = sierra.intl;
                    sierra = whisks.string;
                    record = status[record];
                    record = papara.bind(romeon)(record);
                    record = record.t;
                    record = record.jsvgc3;
                    record = sierra.bind(whisks)(record);
                    zuuluu['label'] = record;
                    record = 24;
                    record = status[record];
                    record = papara.bind(romeon)(record);
                    record = record.UserMinusIcon;
                    zuuluu['IconComponent'] = record;
                    record = function() { // Original name: onPress
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 25;
                        michal = michal[entity];
                        entity = undefined;
                        report = zuuluu.bind(entity)(michal);
                        tangon = report.closePrivateChannel;
                        michal = _closure3_slot0;
                        zuuluu = michal.id;
                        golfie = _closure1_slot18;
                        oscard = golfie.getCurrentlySelectedChannelId;
                        oscard = oscard.bind(golfie)();
                        michal = michal.id;
                        michal = oscard === michal;
                        michal = tangon.bind(report)(zuuluu, michal);
                        return entity;
                    };
                    zuuluu['onPress'] = record;
                    zuuluu = report.bind(option)(zuuluu);
 428:
                    report = {};
                    zuuluu = 'gdm';
                    report['sectionKey'] = zuuluu;
                    zuuluu = new Array(0);
                    report['buttons'] = zuuluu;
                    zuuluu = {};
                    option = 'gdm-destructive';
                    zuuluu['sectionKey'] = option;
                    option = new Array(0);
                    zuuluu['buttons'] = option;
                    option = backup.isGroupDM;
                    option = option.bind(backup)();
                    if(!option) { _fun00010_ip = 814; continue _fun00009 }
 488:
                    status = zuuluu.buttons;
                    record = status.push;
                    option = {};
                    quebec = _closure1_slot0;
                    variable36 = _closure1_slot2;
                    papara = 21;
                    whisks = variable36[papara];
                    whisks = quebec.bind(romeon)(whisks);
                    variable38 = whisks.intl;
                    variable37 = variable38.string;
                    whisks = variable36[papara];
                    whisks = quebec.bind(romeon)(whisks);
                    whisks = whisks.t;
                    whisks = whisks.26C4oq;
                    whisks = variable37.bind(variable38)(whisks);
                    option['label'] = whisks;
                    whisks = 24;
                    whisks = variable36[whisks];
                    whisks = quebec.bind(romeon)(whisks);
                    whisks = whisks.UserMinusIcon;
                    option['IconComponent'] = whisks;
                    whisks = true;
                    option['isDestructive'] = whisks;
                    whisks = function() { // Original name: onPress
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            zuuluu = _closure1_slot0;
                            michal = _closure1_slot2;
                            entity = 26;
                            tangon = michal[entity];
                            entity = undefined;
                            verify = zuuluu.bind(entity)(tangon);
                            option = verify.computeChannelName;
                            report = _closure3_slot0;
                            golfie = _closure1_slot20;
                            tangon = _closure1_slot17;
                            yankee = option.bind(verify)(report, golfie, tangon);
                            verify = 21;
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
                            michal = 27;
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
                                entity = 25;
                                michal = michal[entity];
                                entity = undefined;
                                report = zuuluu.bind(entity)(michal);
                                tangon = report.closePrivateChannel;
                                michal = _closure3_slot0;
                                zuuluu = michal.id;
                                golfie = _closure1_slot18;
                                oscard = golfie.getCurrentlySelectedChannelId;
                                oscard = oscard.bind(golfie)();
                                michal = michal.id;
                                michal = oscard === michal;
                                michal = tangon.bind(report)(zuuluu, michal);
                                return entity;
                            };
                            michal['onConfirm'] = report;
                            michal = zuuluu.bind(tangon)(michal);
                            return entity;
                        }
                    };
                    option['onPress'] = whisks;
                    option = record.bind(status)(option);
                    status = report.buttons;
                    record = status.push;
                    option = {};
                    whisks = variable36[papara];
                    whisks = quebec.bind(romeon)(whisks);
                    variable38 = whisks.intl;
                    variable37 = variable38.string;
                    whisks = variable36[papara];
                    whisks = quebec.bind(romeon)(whisks);
                    whisks = whisks.t;
                    whisks = whisks.1r5E+v;
                    whisks = variable37.bind(variable38)(whisks);
                    option['label'] = whisks;
                    whisks = 28;
                    whisks = variable36[whisks];
                    whisks = quebec.bind(romeon)(whisks);
                    whisks = whisks.PencilIcon;
                    option['IconComponent'] = whisks;
                    whisks = function() { // Original name: onPress
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 29;
                        michal = michal[entity];
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = {};
                        tangon = _closure3_slot0;
                        tangon = tangon.id;
                        michal['channelId'] = tangon;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    option['onPress'] = whisks;
                    option = record.bind(status)(option);
                    if(!tangon) { _fun00010_ip = 814; continue _fun00009 }
 708:
                    record = report.buttons;
                    option = record.push;
                    tangon = {};
                    status = _closure1_slot0;
                    sierra = _closure1_slot2;
                    whisks = sierra[papara];
                    whisks = status.bind(romeon)(whisks);
                    quebec = whisks.intl;
                    whisks = quebec.string;
                    papara = sierra[papara];
                    papara = status.bind(romeon)(papara);
                    papara = papara.t;
                    papara = papara.OQ9MKi;
                    papara = whisks.bind(quebec)(papara);
                    tangon['label'] = papara;
                    papara = 30;
                    papara = sierra[papara];
                    papara = status.bind(romeon)(papara);
                    papara = papara.LinkIcon;
                    tangon['IconComponent'] = papara;
                    papara = function() { // Original name: onPress
                        report = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 31;
                        tangon = michal[entity];
                        entity = undefined;
                        report = report.bind(entity)(tangon);
                        tangon = report.pushLazy;
                        oscard = _closure1_slot0;
                        zuuluu = 19;
                        zuuluu = michal[zuuluu];
                        oscard = oscard.bind(entity)(zuuluu);
                        zuuluu = 32;
                        zuuluu = michal[zuuluu];
                        michal = michal.paths;
                        zuuluu = oscard.bind(entity)(zuuluu, michal);
                        michal = {};
                        oscard = _closure3_slot0;
                        oscard = oscard.id;
                        michal['channelId'] = oscard;
                        michal = tangon.bind(report)(zuuluu, michal);
                        return entity;
                    };
                    tangon['onPress'] = papara;
                    tangon = option.bind(record)(tangon);
 814:
                    tangon = config.buttons;
                    option = tangon.length;
                    tangon = 0;
                    if(!(option > tangon)) { _fun00010_ip = 841; continue _fun00009 }
 831:
                    option = entity.push;
                    option = option.bind(entity)(config);
 841:
                    option = backup.getGuildId;
                    config = option.bind(backup)();
                    _closure3_slot7 = config;
                    option = {};
                    record = 'channel-actions';
                    option['sectionKey'] = record;
                    record = new Array(0);
                    option['buttons'] = record;
                    if(!source) { _fun00010_ip = 992; continue _fun00009 }
 880:
                    papara = option.buttons;
                    record = papara.push;
                    source = {};
                    sierra = _closure1_slot0;
                    whisks = _closure1_slot2;
                    status = 21;
                    quebec = whisks[status];
                    quebec = sierra.bind(romeon)(quebec);
                    variable36 = quebec.intl;
                    quebec = variable36.string;
                    status = whisks[status];
                    status = sierra.bind(romeon)(status);
                    status = status.t;
                    status = status.VINpSE;
                    status = quebec.bind(variable36)(status);
                    source['label'] = status;
                    status = 33;
                    status = whisks[status];
                    status = sierra.bind(romeon)(status);
                    status = status.GroupPlusIcon;
                    source['IconComponent'] = status;
                    status = function() { // Original name: onPress
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 34;
                        michal = michal[entity];
                        entity = undefined;
                        report = zuuluu.bind(entity)(michal);
                        tangon = report.showInstantInviteActionSheet;
                        zuuluu = _closure3_slot0;
                        michal = 'Context Menu';
                        michal = tangon.bind(report)(zuuluu, michal);
                        return entity;
                    };
                    source['onPress'] = status;
                    source = record.bind(papara)(source);
 992:
                    source = null;
                    source = source == config;
                    if(source) { _fun00010_ip = 1011; continue _fun00009 }
 1001:
                    config = backup.isThread;
                    source = config.bind(backup)();
 1011:
                    if(source) { _fun00010_ip = 1404; continue _fun00009 }
 1017:
                    source = offset;
                    if(!source) { _fun00010_ip = 1036; continue _fun00009 }
 1023:
                    config = backup.isCategory;
                    config = config.bind(backup)();
                    source = !config;
 1036:
                    if(!source) { _fun00010_ip = 1178; continue _fun00009 }
 1042:
                    record = option.buttons;
                    config = record.push;
                    source = {};
                    quebec = _closure1_slot0;
                    variable36 = _closure1_slot2;
                    status = 21;
                    sierra = variable36[status];
                    sierra = quebec.bind(romeon)(sierra);
                    whisks = sierra.intl;
                    sierra = whisks.string;
                    status = variable36[status];
                    status = quebec.bind(romeon)(status);
                    status = status.t;
                    if(target) { _fun00010_ip = 1118; continue _fun00009 }
 1105:
                    target = status.N2c/Ul;
                    target = sierra.bind(whisks)(target);
                    _fun00010_ip = 1129; continue _fun00009;
 1118:
                    status = status.z7I3gY;
                    target = sierra.bind(whisks)(status);
 1129:
                    source['label'] = target;
                    target = _closure1_slot0;
                    status = _closure1_slot2;
                    papara = 35;
                    papara = status[papara];
                    papara = target.bind(romeon)(papara);
                    papara = papara.StarIcon;
                    source['IconComponent'] = papara;
                    papara = function() { // Original name: onPress
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            tangon = _closure1_slot0;
                            zuuluu = _closure1_slot2;
                            entity = 36;
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
                            yankee = _closure1_slot21;
                            yankee = yankee.CHANNEL_ACTION_SHEET;
                            tangon['section'] = yankee;
                            sizing = offset;
                            romeon = tangon;
                            tangon = sizing[verify](kiloes, backup, foxtra, romeon, yankee);
                            if(zuuluu) { _fun00014_ip = 234; continue _fun00013 }
 86:
                            zuuluu = _closure1_slot0;
                            tangon = _closure1_slot2;
                            michal = 37;
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
                    source['onPress'] = papara;
                    source = config.bind(record)(source);
 1178:
                    if(!offset) { _fun00010_ip = 1404; continue _fun00009 }
 1184:
                    config = option.buttons;
                    source = config.push;
                    offset = {};
                    papara = _closure1_slot0;
                    target = _closure1_slot2;
                    record = 21;
                    status = target[record];
                    status = papara.bind(romeon)(status);
                    sierra = status.intl;
                    status = sierra.string;
                    record = target[record];
                    record = papara.bind(romeon)(record);
                    record = record.t;
                    if(equals) { _fun00010_ip = 1350; continue _fun00009 }
 1247:
                    if(limora) { _fun00010_ip = 1263; continue _fun00009 }
 1250:
                    equals = record.9mysCg;
                    equals = status.bind(sierra)(equals);
                    _fun00010_ip = 1276; continue _fun00009;
 1263:
                    quebec = record.3zySTE;
                    equals = status.bind(sierra)(quebec);
 1276:
                    offset['label'] = equals;
                    equals = _closure1_slot0;
                    quebec = _closure1_slot2;
                    if(limora) { _fun00010_ip = 1311; continue _fun00009 }
 1291:
                    limora = 39;
                    limora = quebec[limora];
                    limora = equals.bind(romeon)(limora);
                    limora = limora.PlusLargeIcon;
                    _fun00010_ip = 1329; continue _fun00009;
 1311:
                    whisks = 38;
                    whisks = quebec[whisks];
                    whisks = equals.bind(romeon)(whisks);
                    limora = whisks.XSmallIcon;
 1329:
                    offset['IconComponent'] = limora;
                    limora = function() { // Original name: onPress
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 36;
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
                        option = _closure1_slot21;
                        option = option.CHANNEL_ACTION_SHEET;
                        michal['section'] = option;
                        foxtra = golfie;
                        verify = michal;
                        michal = foxtra[oscard](romeon, yankee, offset, verify, option);
                        return entity;
                    };
                    offset['onPress'] = limora;
                    limora = source.bind(config)(offset);
                    _fun00010_ip = 1404; continue _fun00009;
 1350:
                    record = record.jNphKS;
                    record = status.bind(sierra)(record);
                    offset['label'] = record;
                    record = 38;
                    record = target[record];
                    record = papara.bind(romeon)(record);
                    record = record.XSmallIcon;
                    offset['IconComponent'] = record;
                    record = function() { // Original name: onPress
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            entity = _closure3_slot0;
                            zuuluu = entity.parent_id;
                            entity = null;
                            if(!(entity != zuuluu)) { _fun00016_ip = 92; continue _fun00015 }
 19:
                            report = _closure1_slot0;
                            tangon = _closure1_slot2;
                            zuuluu = 36;
                            tangon = tangon[zuuluu];
                            zuuluu = undefined;
                            oscard = report.bind(zuuluu)(tangon);
                            report = oscard.setOptInChannel;
                            offset = _closure3_slot7;
                            michal = _closure3_slot0;
                            verify = michal.parent_id;
                            michal = {};
                            entity = _closure1_slot21;
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
                    offset['onPress'] = record;
                    offset = source.bind(config)(offset);
 1404:
                    config = _closure1_slot8;
                    source = backup.type;
                    source = config.bind(romeon)(source);
                    if(source) { _fun00010_ip = 1438; continue _fun00009 }
 1424:
                    record = _closure1_slot9;
                    config = backup.type;
                    source = record.bind(romeon)(config);
 1438:
                    if(source) { _fun00010_ip = 1451; continue _fun00009 }
 1441:
                    config = backup.isForumLikeChannel;
                    source = config.bind(backup)();
 1451:
                    if(!source) { _fun00010_ip = 1570; continue _fun00009 }
 1454:
                    record = option.buttons;
                    config = record.push;
                    source = {};
                    target = _closure1_slot0;
                    status = _closure1_slot2;
                    papara = 21;
                    sierra = status[papara];
                    sierra = target.bind(romeon)(sierra);
                    limora = sierra.intl;
                    sierra = limora.string;
                    papara = status[papara];
                    papara = target.bind(romeon)(papara);
                    papara = papara.t;
                    papara = papara.WqhZsr;
                    papara = sierra.bind(limora)(papara);
                    source['label'] = papara;
                    papara = 30;
                    papara = status[papara];
                    papara = target.bind(romeon)(papara);
                    papara = papara.LinkIcon;
                    source['IconComponent'] = papara;
                    papara = false;
                    source['isDestructive'] = papara;
                    papara = function() { // Original name: onPress
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 40;
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
                    source['onPress'] = papara;
                    source = config.bind(record)(source);
 1570:
                    source = backup.isPrivate;
                    source = source.bind(backup)();
                    if(!source) { _fun00010_ip = 1719; continue _fun00009 }
 1586:
                    record = option.buttons;
                    config = record.push;
                    source = {};
                    sierra = _closure1_slot0;
                    limora = _closure1_slot2;
                    papara = 21;
                    target = limora[papara];
                    target = sierra.bind(romeon)(target);
                    status = target.intl;
                    target = status.string;
                    papara = limora[papara];
                    papara = sierra.bind(romeon)(papara);
                    papara = papara.t;
                    if(cntext) { _fun00010_ip = 1659; continue _fun00009 }
 1646:
                    cntext = papara.N2c/Ul;
                    cntext = target.bind(status)(cntext);
                    _fun00010_ip = 1670; continue _fun00009;
 1659:
                    papara = papara.z7I3gY;
                    cntext = target.bind(status)(papara);
 1670:
                    source['label'] = cntext;
                    papara = _closure1_slot0;
                    target = _closure1_slot2;
                    cntext = 35;
                    cntext = target[cntext];
                    cntext = papara.bind(romeon)(cntext);
                    cntext = cntext.StarIcon;
                    source['IconComponent'] = cntext;
                    cntext = function() { // Original name: onPress
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 36;
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
                    source['onPress'] = cntext;
                    source = config.bind(record)(source);
 1719:
                    source = {};
                    config = 'safety-warning-tooling';
                    source['sectionKey'] = config;
                    config = new Array(0);
                    source['buttons'] = config;
                    if(!sequen) { _fun00010_ip = 1855; continue _fun00009 }
 1744:
                    record = source.buttons;
                    config = record.push;
                    sequen = {};
                    papara = _closure1_slot0;
                    target = _closure1_slot2;
                    cntext = 21;
                    status = target[cntext];
                    status = papara.bind(romeon)(status);
                    sierra = status.intl;
                    status = sierra.string;
                    cntext = target[cntext];
                    cntext = papara.bind(romeon)(cntext);
                    cntext = cntext.t;
                    cntext = cntext.EuzCER;
                    cntext = status.bind(sierra)(cntext);
                    sequen['label'] = cntext;
                    cntext = 41;
                    cntext = target[cntext];
                    cntext = papara.bind(romeon)(cntext);
                    cntext = cntext.WarningIcon;
                    sequen['IconComponent'] = cntext;
                    cntext = function() { // Original name: onPress
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 42;
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
                    sequen['onPress'] = cntext;
                    sequen = config.bind(record)(sequen);
 1855:
                    if(!update) { _fun00010_ip = 1969; continue _fun00009 }
 1858:
                    config = source.buttons;
                    sequen = config.push;
                    update = {};
                    cntext = _closure1_slot0;
                    papara = _closure1_slot2;
                    record = 21;
                    target = papara[record];
                    target = cntext.bind(romeon)(target);
                    status = target.intl;
                    target = status.string;
                    record = papara[record];
                    record = cntext.bind(romeon)(record);
                    record = record.t;
                    record = record.tBw/1t;
                    record = target.bind(status)(record);
                    update['label'] = record;
                    record = 41;
                    record = papara[record];
                    record = cntext.bind(romeon)(record);
                    record = record.WarningIcon;
                    update['IconComponent'] = record;
                    record = function() { // Original name: onPress
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 42;
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
                    update['onPress'] = record;
                    update = sequen.bind(config)(update);
 1969:
                    update = source.buttons;
                    update = update.length;
                    if(!(update > tangon)) { _fun00010_ip = 1994; continue _fun00009 }
 1984:
                    update = entity.push;
                    update = update.bind(entity)(source);
 1994:
                    if(!oscard) { _fun00010_ip = 2011; continue _fun00009 }
 1997:
                    source = _closure1_slot8;
                    update = backup.type;
                    oscard = source.bind(romeon)(update);
 2011:
                    if(!oscard) { _fun00010_ip = 2154; continue _fun00009 }
 2017:
                    source = option.buttons;
                    update = source.push;
                    oscard = {};
                    cntext = _closure1_slot0;
                    papara = _closure1_slot2;
                    sequen = 21;
                    config = papara[sequen];
                    config = cntext.bind(romeon)(config);
                    record = config.intl;
                    config = record.string;
                    sequen = papara[sequen];
                    sequen = cntext.bind(romeon)(sequen);
                    sequen = sequen.t;
                    if(vacuum) { _fun00010_ip = 2092; continue _fun00009 }
 2077:
                    vacuum = sequen.LOp2MT;
                    vacuum = config.bind(record)(vacuum);
                    _fun00010_ip = 2105; continue _fun00009;
 2092:
                    sequen = sequen.n7rKhY;
                    vacuum = config.bind(record)(sequen);
 2105:
                    oscard['label'] = vacuum;
                    sequen = _closure1_slot0;
                    config = _closure1_slot2;
                    vacuum = 43;
                    vacuum = config[vacuum];
                    vacuum = sequen.bind(romeon)(vacuum);
                    vacuum = vacuum.ChatIcon;
                    oscard['IconComponent'] = vacuum;
                    vacuum = function() { // Original name: onPress
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 36;
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
                    oscard['onPress'] = vacuum;
                    oscard = update.bind(source)(oscard);
 2154:
                    oscard = option.buttons;
                    oscard = oscard.length;
                    if(!(oscard > tangon)) { _fun00010_ip = 2179; continue _fun00009 }
 2169:
                    oscard = entity.push;
                    oscard = oscard.bind(entity)(option);
 2179:
                    option = {};
                    oscard = 'notifications';
                    option['sectionKey'] = oscard;
                    oscard = new Array(0);
                    option['buttons'] = oscard;
                    update = _closure1_slot10;
                    oscard = backup.type;
                    oscard = update.bind(romeon)(oscard);
                    if(oscard) { _fun00010_ip = 2226; continue _fun00009 }
 2216:
                    update = backup.isCategory;
                    oscard = update.bind(backup)();
 2226:
                    if(oscard) { _fun00010_ip = 2239; continue _fun00009 }
 2229:
                    update = backup.isForumLikeChannel;
                    oscard = update.bind(backup)();
 2239:
                    if(!oscard) { _fun00010_ip = 2351; continue _fun00009 }
 2242:
                    source = option.buttons;
                    update = source.push;
                    oscard = {};
                    sequen = _closure1_slot0;
                    config = _closure1_slot2;
                    vacuum = 21;
                    record = config[vacuum];
                    record = sequen.bind(romeon)(record);
                    cntext = record.intl;
                    record = cntext.string;
                    vacuum = config[vacuum];
                    vacuum = sequen.bind(romeon)(vacuum);
                    vacuum = vacuum.t;
                    vacuum = vacuum.e6RscX;
                    vacuum = record.bind(cntext)(vacuum);
                    oscard['label'] = vacuum;
                    vacuum = 44;
                    vacuum = config[vacuum];
                    vacuum = sequen.bind(romeon)(vacuum);
                    vacuum = vacuum.EyeIcon;
                    oscard['IconComponent'] = vacuum;
                    vacuum = function() { // Original name: onPress
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 45;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.ackChannel;
                        michal = _closure3_slot0;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    oscard['onPress'] = vacuum;
                    oscard = update.bind(source)(oscard);
 2351:
                    update = _closure1_slot11;
                    oscard = backup.type;
                    oscard = update.bind(romeon)(oscard);
                    if(oscard) { _fun00010_ip = 2413; continue _fun00009 }
 2368:
                    oscard = backup.isCategory;
                    oscard = oscard.bind(backup)();
                    if(oscard) { _fun00010_ip = 2413; continue _fun00009 }
 2381:
                    if(!echoed) { _fun00010_ip = 2397; continue _fun00009 }
 2384:
                    oscard = backup.isGuildVoice;
                    oscard = oscard.bind(backup)();
                    if(oscard) { _fun00010_ip = 2413; continue _fun00009 }
 2397:
                    oscard = backup.isForumLikeChannel;
                    oscard = oscard.bind(backup)();
                    if(!oscard) { _fun00010_ip = 3068; continue _fun00009 }
 2413:
                    vacuum = _closure1_slot0;
                    oscard = _closure1_slot2;
                    sequen = 21;
                    update = oscard[sequen];
                    update = vacuum.bind(romeon)(update);
                    source = update.intl;
                    update = source.string;
                    oscard = oscard[sequen];
                    oscard = vacuum.bind(romeon)(oscard);
                    oscard = oscard.t;
                    if(ctrled) { _fun00010_ip = 2768; continue _fun00009 }
 2463:
                    ctrled = oscard.tbeRRE;
                    vacuum = update.bind(source)(ctrled);
                    ctrled = backup.isCategory;
                    ctrled = ctrled.bind(backup)();
                    if(ctrled) { _fun00010_ip = 2647; continue _fun00009 }
 2492:
                    ctrled = backup.isDM;
                    ctrled = ctrled.bind(backup)();
                    if(ctrled) { _fun00010_ip = 2591; continue _fun00009 }
 2505:
                    ctrled = backup.isGroupDM;
                    ctrled = ctrled.bind(backup)();
                    if(ctrled) { _fun00010_ip = 2591; continue _fun00009 }
 2518:
                    ctrled = backup.isThread;
                    ctrled = ctrled.bind(backup)();
                    record = vacuum;
                    if(!ctrled) { _fun00010_ip = 2701; continue _fun00009 }
 2537:
                    cntext = _closure1_slot0;
                    ctrled = _closure1_slot2;
                    vacuum = ctrled[sequen];
                    vacuum = cntext.bind(romeon)(vacuum);
                    config = vacuum.intl;
                    vacuum = config.string;
                    ctrled = ctrled[sequen];
                    ctrled = cntext.bind(romeon)(ctrled);
                    ctrled = ctrled.t;
                    ctrled = ctrled.bUUd8v;
                    record = vacuum.bind(config)(ctrled);
                    _fun00010_ip = 2701; continue _fun00009;
 2591:
                    cntext = _closure1_slot0;
                    ctrled = _closure1_slot2;
                    vacuum = ctrled[sequen];
                    vacuum = cntext.bind(romeon)(vacuum);
                    config = vacuum.intl;
                    vacuum = config.string;
                    ctrled = ctrled[sequen];
                    ctrled = cntext.bind(romeon)(ctrled);
                    ctrled = ctrled.t;
                    ctrled = ctrled.LO3kaG;
                    record = vacuum.bind(config)(ctrled);
                    _fun00010_ip = 2701; continue _fun00009;
 2647:
                    cntext = _closure1_slot0;
                    ctrled = _closure1_slot2;
                    vacuum = ctrled[sequen];
                    vacuum = cntext.bind(romeon)(vacuum);
                    config = vacuum.intl;
                    vacuum = config.string;
                    ctrled = ctrled[sequen];
                    ctrled = cntext.bind(romeon)(ctrled);
                    ctrled = ctrled.t;
                    ctrled = ctrled.pNMCg4;
                    record = vacuum.bind(config)(ctrled);
 2701:
                    config = option.buttons;
                    vacuum = config.push;
                    ctrled = {};
                    ctrled['label'] = record;
                    cntext = _closure1_slot0;
                    papara = _closure1_slot2;
                    record = 46;
                    record = papara[record];
                    record = cntext.bind(romeon)(record);
                    record = record.BellSlashIcon;
                    ctrled['IconComponent'] = record;
                    record = function() { // Original name: onPress
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            tangon = _closure1_slot0;
                            zuuluu = _closure1_slot2;
                            entity = 37;
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
                            michal = _closure1_slot26;
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
                    ctrled['onPress'] = record;
                    ctrled = vacuum.bind(config)(ctrled);
                    _fun00010_ip = 3068; continue _fun00009;
 2768:
                    oscard = oscard.OYefmZ;
                    update = update.bind(source)(oscard);
                    oscard = backup.isCategory;
                    oscard = oscard.bind(backup)();
                    if(oscard) { _fun00010_ip = 2952; continue _fun00009 }
 2797:
                    oscard = backup.isDM;
                    oscard = oscard.bind(backup)();
                    if(oscard) { _fun00010_ip = 2896; continue _fun00009 }
 2810:
                    oscard = backup.isGroupDM;
                    oscard = oscard.bind(backup)();
                    if(oscard) { _fun00010_ip = 2896; continue _fun00009 }
 2823:
                    oscard = backup.isThread;
                    oscard = oscard.bind(backup)();
                    ctrled = update;
                    if(!oscard) { _fun00010_ip = 3006; continue _fun00009 }
 2842:
                    vacuum = _closure1_slot0;
                    oscard = _closure1_slot2;
                    update = oscard[sequen];
                    update = vacuum.bind(romeon)(update);
                    source = update.intl;
                    update = source.string;
                    oscard = oscard[sequen];
                    oscard = vacuum.bind(romeon)(oscard);
                    oscard = oscard.t;
                    oscard = oscard.Cq/TzM;
                    ctrled = update.bind(source)(oscard);
                    _fun00010_ip = 3006; continue _fun00009;
 2896:
                    vacuum = _closure1_slot0;
                    oscard = _closure1_slot2;
                    update = oscard[sequen];
                    update = vacuum.bind(romeon)(update);
                    source = update.intl;
                    update = source.string;
                    oscard = oscard[sequen];
                    oscard = vacuum.bind(romeon)(oscard);
                    oscard = oscard.t;
                    oscard = oscard.s5/5fn;
                    ctrled = update.bind(source)(oscard);
                    _fun00010_ip = 3006; continue _fun00009;
 2952:
                    vacuum = _closure1_slot0;
                    oscard = _closure1_slot2;
                    update = oscard[sequen];
                    update = vacuum.bind(romeon)(update);
                    source = update.intl;
                    update = source.string;
                    oscard = oscard[sequen];
                    oscard = vacuum.bind(romeon)(oscard);
                    oscard = oscard.t;
                    oscard = oscard.olaBeH;
                    ctrled = update.bind(source)(oscard);
 3006:
                    source = option.buttons;
                    update = source.push;
                    oscard = {};
                    oscard['label'] = ctrled;
                    vacuum = _closure1_slot0;
                    sequen = _closure1_slot2;
                    ctrled = 47;
                    ctrled = sequen[ctrled];
                    ctrled = vacuum.bind(romeon)(ctrled);
                    ctrled = ctrled.BellIcon;
                    oscard['IconComponent'] = ctrled;
                    ctrled = function() { // Original name: onPress
                        zuuluu = _closure1_slot1;
                        offset = _closure1_slot2;
                        entity = 48;
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
                        option = 49;
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
                    oscard['onPress'] = ctrled;
                    oscard = update.bind(source)(oscard);
 3068:
                    update = _closure1_slot8;
                    oscard = backup.type;
                    oscard = update.bind(romeon)(oscard);
                    if(oscard) { _fun00010_ip = 3095; continue _fun00009 }
 3085:
                    update = backup.isCategory;
                    oscard = update.bind(backup)();
 3095:
                    if(oscard) { _fun00010_ip = 3108; continue _fun00009 }
 3098:
                    update = backup.isGuildStageVoice;
                    oscard = update.bind(backup)();
 3108:
                    if(oscard) { _fun00010_ip = 3127; continue _fun00009 }
 3111:
                    if(!echoed) { _fun00010_ip = 3124; continue _fun00009 }
 3114:
                    update = backup.isGuildVoice;
                    echoed = update.bind(backup)();
 3124:
                    oscard = echoed;
 3127:
                    if(oscard) { _fun00010_ip = 3140; continue _fun00009 }
 3130:
                    echoed = backup.isForumLikeChannel;
                    oscard = echoed.bind(backup)();
 3140:
                    if(!oscard) { _fun00010_ip = 3259; continue _fun00009 }
 3143:
                    update = option.buttons;
                    echoed = update.push;
                    oscard = {};
                    ctrled = _closure1_slot0;
                    vacuum = _closure1_slot2;
                    source = 21;
                    sequen = vacuum[source];
                    sequen = ctrled.bind(romeon)(sequen);
                    config = sequen.intl;
                    sequen = config.string;
                    source = vacuum[source];
                    source = ctrled.bind(romeon)(source);
                    source = source.t;
                    source = source.h850Sk;
                    source = sequen.bind(config)(source);
                    oscard['label'] = source;
                    source = 50;
                    source = vacuum[source];
                    source = ctrled.bind(romeon)(source);
                    source = source.ChannelNotificationIcon;
                    oscard['IconComponent'] = source;
                    source = true;
                    oscard['disableColor'] = source;
                    source = function() { // Original name: onPress
                        zuuluu = _closure1_slot1;
                        tangon = _closure1_slot2;
                        michal = 51;
                        oscard = tangon[michal];
                        entity = undefined;
                        golfie = zuuluu.bind(entity)(oscard);
                        oscard = golfie.setSection;
                        report = _closure1_slot22;
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
                    oscard['onPress'] = source;
                    oscard = echoed.bind(update)(oscard);
 3259:
                    oscard = option.buttons;
                    oscard = oscard.length;
                    if(!(oscard > tangon)) { _fun00010_ip = 3284; continue _fun00009 }
 3274:
                    oscard = entity.push;
                    oscard = oscard.bind(entity)(option);
 3284:
                    option = {};
                    oscard = 'threads';
                    option['sectionKey'] = oscard;
                    oscard = new Array(0);
                    option['buttons'] = oscard;
                    oscard = backup.isThread;
                    oscard = oscard.bind(backup)();
                    if(oscard) { _fun00010_ip = 3327; continue _fun00009 }
 3317:
                    echoed = backup.isForumLikeChannel;
                    oscard = echoed.bind(backup)();
 3327:
                    if(oscard) { _fun00010_ip = 3333; continue _fun00009 }
 3330:
                    oscard = !result;
 3333:
                    if(oscard) { _fun00010_ip = 3339; continue _fun00009 }
 3336:
                    oscard = sizing;
 3339:
                    if(oscard) { _fun00010_ip = 3451; continue _fun00009 }
 3342:
                    result = option.buttons;
                    sizing = result.push;
                    oscard = {};
                    update = _closure1_slot0;
                    source = _closure1_slot2;
                    echoed = 21;
                    ctrled = source[echoed];
                    ctrled = update.bind(romeon)(ctrled);
                    vacuum = ctrled.intl;
                    ctrled = vacuum.string;
                    echoed = source[echoed];
                    echoed = update.bind(romeon)(echoed);
                    echoed = echoed.t;
                    echoed = echoed.B2panJ;
                    echoed = ctrled.bind(vacuum)(echoed);
                    oscard['label'] = echoed;
                    echoed = 52;
                    echoed = source[echoed];
                    echoed = update.bind(romeon)(echoed);
                    echoed = echoed.ThreadIcon;
                    oscard['IconComponent'] = echoed;
                    echoed = function() { // Original name: onPress
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 53;
                        michal = michal[entity];
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = _closure3_slot0;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    oscard['onPress'] = echoed;
                    oscard = sizing.bind(result)(oscard);
 3451:
                    oscard = option.buttons;
                    oscard = oscard.length;
                    if(!(oscard > tangon)) { _fun00010_ip = 3476; continue _fun00009 }
 3466:
                    oscard = entity.push;
                    oscard = oscard.bind(entity)(option);
 3476:
                    option = {};
                    oscard = 'voice';
                    option['sectionKey'] = oscard;
                    oscard = new Array(0);
                    option['buttons'] = oscard;
                    sizing = _closure1_slot9;
                    oscard = backup.type;
                    oscard = sizing.bind(romeon)(oscard);
                    if(!oscard) { _fun00010_ip = 3516; continue _fun00009 }
 3513:
                    oscard = !kiloes;
 3516:
                    if(!oscard) { _fun00010_ip = 3659; continue _fun00009 }
 3522:
                    sizing = option.buttons;
                    kiloes = sizing.push;
                    oscard = {};
                    source = _closure1_slot0;
                    ctrled = _closure1_slot2;
                    result = 21;
                    echoed = ctrled[result];
                    echoed = source.bind(romeon)(echoed);
                    update = echoed.intl;
                    echoed = update.string;
                    result = ctrled[result];
                    result = source.bind(romeon)(result);
                    result = result.t;
                    if(output) { _fun00010_ip = 3597; continue _fun00009 }
 3582:
                    output = result.LxzNio;
                    output = echoed.bind(update)(output);
                    _fun00010_ip = 3610; continue _fun00009;
 3597:
                    result = result.JYF2OT;
                    output = echoed.bind(update)(result);
 3610:
                    oscard['label'] = output;
                    result = _closure1_slot0;
                    echoed = _closure1_slot2;
                    output = 22;
                    output = echoed[output];
                    output = result.bind(romeon)(output);
                    output = output.UserCircleIcon;
                    oscard['IconComponent'] = output;
                    output = function() { // Original name: onPress
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 54;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.update;
                        michal = _closure3_slot0;
                        michal = michal.id;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    oscard['onPress'] = output;
                    oscard = kiloes.bind(sizing)(oscard);
 3659:
                    oscard = backup.isGuildVocal;
                    oscard = oscard.bind(backup)();
                    if(!oscard) { _fun00010_ip = 3952; continue _fun00009 }
 3675:
                    oscard = backup.isGuildStageVoice;
                    vacuum = oscard.bind(backup)();
                    sizing = option.buttons;
                    kiloes = sizing.push;
                    oscard = {};
                    result = _closure1_slot0;
                    echoed = _closure1_slot2;
                    output = 21;
                    update = echoed[output];
                    update = result.bind(romeon)(update);
                    ctrled = update.intl;
                    source = ctrled.string;
                    update = echoed[output];
                    update = result.bind(romeon)(update);
                    update = update.t;
                    if(vacuum) { _fun00010_ip = 3802; continue _fun00009 }
 3745:
                    vacuum = update.ZXxLQk;
                    vacuum = source.bind(ctrled)(vacuum);
                    oscard['label'] = vacuum;
                    vacuum = 43;
                    vacuum = echoed[vacuum];
                    vacuum = result.bind(romeon)(vacuum);
                    vacuum = vacuum.ChatIcon;
                    oscard['IconComponent'] = vacuum;
                    vacuum = function() { // Original name: onPress
                        tangon = _closure1_slot28;
                        michal = _closure3_slot0;
                        entity = undefined;
                        tangon = tangon.bind(entity)(michal);
                        tangon = _closure1_slot1;
                        report = _closure1_slot2;
                        zuuluu = 58;
                        zuuluu = report[zuuluu];
                        report = tangon.bind(entity)(zuuluu);
                        tangon = report.updateChatOpen;
                        zuuluu = michal.id;
                        michal = true;
                        michal = tangon.bind(report)(zuuluu, michal);
                        return entity;
                    };
                    oscard['onPress'] = vacuum;
                    vacuum = kiloes.bind(sizing)(oscard);
                    _fun00010_ip = 3952; continue _fun00009;
 3802:
                    update = update.7vb2cX;
                    update = source.bind(ctrled)(update);
                    oscard['label'] = update;
                    update = 55;
                    update = echoed[update];
                    update = result.bind(romeon)(update);
                    update = update.StageIcon;
                    oscard['IconComponent'] = update;
                    update = function() { // Original name: onPress
                        zuuluu = _closure1_slot28;
                        michal = _closure3_slot0;
                        entity = undefined;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    oscard['onPress'] = update;
                    oscard = kiloes.bind(sizing)(oscard);
                    sizing = option.buttons;
                    kiloes = sizing.push;
                    oscard = {};
                    update = echoed[output];
                    update = result.bind(romeon)(update);
                    source = update.intl;
                    update = source.string;
                    output = echoed[output];
                    output = result.bind(romeon)(output);
                    output = output.t;
                    output = output.ZXxLQk;
                    output = update.bind(source)(output);
                    oscard['label'] = output;
                    output = 43;
                    output = echoed[output];
                    output = result.bind(romeon)(output);
                    output = output.ChatIcon;
                    oscard['IconComponent'] = output;
                    output = function() { // Original name: onPress
                        report = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 56;
                        tangon = michal[entity];
                        entity = undefined;
                        oscard = report.bind(entity)(tangon);
                        tangon = oscard.hideActionSheet;
                        tangon = tangon.bind(oscard)();
                        tangon = 31;
                        tangon = michal[tangon];
                        report = report.bind(entity)(tangon);
                        tangon = report.pushLazy;
                        oscard = _closure1_slot0;
                        zuuluu = 19;
                        zuuluu = michal[zuuluu];
                        oscard = oscard.bind(entity)(zuuluu);
                        zuuluu = 57;
                        zuuluu = michal[zuuluu];
                        michal = michal.paths;
                        zuuluu = oscard.bind(entity)(zuuluu, michal);
                        michal = {};
                        oscard = _closure3_slot0;
                        michal['channel'] = oscard;
                        michal = tangon.bind(report)(zuuluu, michal);
                        return entity;
                    };
                    oscard['onPress'] = output;
                    oscard = kiloes.bind(sizing)(oscard);
 3952:
                    oscard = backup.isGuildStageVoice;
                    oscard = oscard.bind(backup)();
                    if(!oscard) { _fun00010_ip = 3968; continue _fun00009 }
 3965:
                    oscard = foxtra;
 3968:
                    if(!oscard) { _fun00010_ip = 3974; continue _fun00009 }
 3971:
                    oscard = yankee;
 3974:
                    if(!oscard) { _fun00010_ip = 4093; continue _fun00009 }
 3977:
                    foxtra = option.buttons;
                    yankee = foxtra.push;
                    oscard = {};
                    sizing = _closure1_slot0;
                    output = _closure1_slot2;
                    kiloes = 21;
                    result = output[kiloes];
                    result = sizing.bind(romeon)(result);
                    echoed = result.intl;
                    result = echoed.string;
                    kiloes = output[kiloes];
                    kiloes = sizing.bind(romeon)(kiloes);
                    kiloes = kiloes.t;
                    kiloes = kiloes.+78Pfn;
                    kiloes = result.bind(echoed)(kiloes);
                    oscard['label'] = kiloes;
                    kiloes = 59;
                    kiloes = output[kiloes];
                    kiloes = sizing.bind(romeon)(kiloes);
                    kiloes = kiloes.FlagIcon;
                    oscard['IconComponent'] = kiloes;
                    kiloes = true;
                    oscard['isDestructive'] = kiloes;
                    kiloes = function() { // Original name: onPress
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 60;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.showReportModalForStageChannel;
                        michal = _closure3_slot0;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    oscard['onPress'] = kiloes;
                    oscard = yankee.bind(foxtra)(oscard);
 4093:
                    oscard = option.buttons;
                    oscard = oscard.length;
                    if(!(oscard > tangon)) { _fun00010_ip = 4118; continue _fun00009 }
 4108:
                    oscard = entity.push;
                    oscard = oscard.bind(entity)(option);
 4118:
                    oscard = {};
                    option = 'admin-actions';
                    oscard['sectionKey'] = option;
                    option = new Array(0);
                    oscard['buttons'] = option;
                    if(!golfie) { _fun00010_ip = 4525; continue _fun00009 }
 4146:
                    yankee = oscard.buttons;
                    option = yankee.push;
                    golfie = {};
                    foxtra = backup.isCategory;
                    foxtra = foxtra.bind(backup)();
                    result = _closure1_slot0;
                    kiloes = _closure1_slot2;
                    echoed = 21;
                    sizing = kiloes[echoed];
                    sizing = result.bind(romeon)(sizing);
                    output = sizing.intl;
                    sizing = output.string;
                    kiloes = kiloes[echoed];
                    kiloes = result.bind(romeon)(kiloes);
                    kiloes = kiloes.t;
                    if(foxtra) { _fun00010_ip = 4231; continue _fun00009 }
 4216:
                    foxtra = kiloes.3gUsJS;
                    foxtra = sizing.bind(output)(foxtra);
                    _fun00010_ip = 4244; continue _fun00009;
 4231:
                    kiloes = kiloes.zdPFs7;
                    foxtra = sizing.bind(output)(kiloes);
 4244:
                    golfie['label'] = foxtra;
                    kiloes = _closure1_slot0;
                    sizing = _closure1_slot2;
                    foxtra = 61;
                    foxtra = sizing[foxtra];
                    foxtra = kiloes.bind(romeon)(foxtra);
                    foxtra = foxtra.SettingsIcon;
                    golfie['IconComponent'] = foxtra;
                    foxtra = function() { // Original name: onPress
                        zuuluu = _closure1_slot1;
                        tangon = _closure1_slot2;
                        michal = 51;
                        oscard = tangon[michal];
                        entity = undefined;
                        golfie = zuuluu.bind(entity)(oscard);
                        oscard = golfie.setSection;
                        report = _closure1_slot22;
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
                    golfie['onPress'] = foxtra;
                    golfie = option.bind(yankee)(golfie);
                    option = _closure1_slot8;
                    golfie = backup.type;
                    golfie = option.bind(romeon)(golfie);
                    if(golfie) { _fun00010_ip = 4320; continue _fun00009 }
 4310:
                    option = backup.isForumLikeChannel;
                    golfie = option.bind(backup)();
 4320:
                    if(golfie) { _fun00010_ip = 4333; continue _fun00009 }
 4323:
                    option = backup.isGuildVoice;
                    golfie = option.bind(backup)();
 4333:
                    if(golfie) { _fun00010_ip = 4346; continue _fun00009 }
 4336:
                    option = backup.isCategory;
                    golfie = option.bind(backup)();
 4346:
                    if(!golfie) { _fun00010_ip = 4525; continue _fun00009 }
 4352:
                    yankee = oscard.buttons;
                    option = yankee.push;
                    golfie = {};
                    foxtra = backup.isCategory;
                    foxtra = foxtra.bind(backup)();
                    result = _closure1_slot0;
                    kiloes = _closure1_slot2;
                    sizing = kiloes[echoed];
                    sizing = result.bind(romeon)(sizing);
                    output = sizing.intl;
                    sizing = output.string;
                    kiloes = kiloes[echoed];
                    kiloes = result.bind(romeon)(kiloes);
                    kiloes = kiloes.t;
                    if(foxtra) { _fun00010_ip = 4432; continue _fun00009 }
 4419:
                    foxtra = kiloes.dEaPc3;
                    foxtra = sizing.bind(output)(foxtra);
                    _fun00010_ip = 4443; continue _fun00009;
 4432:
                    kiloes = kiloes.fUYU+v;
                    foxtra = sizing.bind(output)(kiloes);
 4443:
                    golfie['label'] = foxtra;
                    foxtra = backup.isCategory;
                    foxtra = foxtra.bind(backup)();
                    kiloes = _closure1_slot0;
                    sizing = _closure1_slot2;
                    if(foxtra) { _fun00010_ip = 4488; continue _fun00009 }
 4468:
                    foxtra = 62;
                    foxtra = sizing[foxtra];
                    foxtra = kiloes.bind(romeon)(foxtra);
                    foxtra = foxtra.CopyIcon;
                    _fun00010_ip = 4506; continue _fun00009;
 4488:
                    backup = 39;
                    backup = sizing[backup];
                    backup = kiloes.bind(romeon)(backup);
                    foxtra = backup.PlusLargeIcon;
 4506:
                    golfie['IconComponent'] = foxtra;
                    foxtra = function() { // Original name: onPress
                        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                            zuuluu = _closure1_slot1;
                            michal = _closure1_slot2;
                            entity = 63;
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
                    golfie['onPress'] = foxtra;
                    golfie = option.bind(yankee)(golfie);
 4525:
                    if(!michal) { _fun00010_ip = 4639; continue _fun00009 }
 4528:
                    option = oscard.buttons;
                    golfie = option.push;
                    michal = {};
                    yankee = _closure1_slot0;
                    foxtra = _closure1_slot2;
                    offset = 21;
                    backup = foxtra[offset];
                    backup = yankee.bind(romeon)(backup);
                    kiloes = backup.intl;
                    backup = kiloes.string;
                    offset = foxtra[offset];
                    offset = yankee.bind(romeon)(offset);
                    offset = offset.t;
                    offset = offset.gFHI3t;
                    offset = backup.bind(kiloes)(offset);
                    michal['label'] = offset;
                    offset = 64;
                    offset = foxtra[offset];
                    offset = yankee.bind(romeon)(offset);
                    offset = offset.IdIcon;
                    michal['IconComponent'] = offset;
                    verify = function() { // Original name: onPress
                        zuuluu = _closure1_slot0;
                        tangon = _closure1_slot2;
                        entity = 65;
                        michal = tangon[entity];
                        entity = undefined;
                        oscard = zuuluu.bind(entity)(michal);
                        report = oscard.copy;
                        michal = _closure3_slot0;
                        michal = michal.id;
                        michal = report.bind(oscard)(michal);
                        michal = 66;
                        michal = tangon[michal];
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.presentIdCopied;
                        michal = michal.bind(zuuluu)();
                        return entity;
                    };
                    michal['onPress'] = verify;
                    michal = golfie.bind(option)(michal);
 4639:
                    michal = oscard.buttons;
                    michal = michal.length;
                    if(!(michal > tangon)) { _fun00010_ip = 4664; continue _fun00009 }
 4654:
                    michal = entity.push;
                    michal = michal.bind(entity)(oscard);
 4664:
                    michal = report.buttons;
                    michal = michal.length;
                    if(!(michal > tangon)) { _fun00010_ip = 4689; continue _fun00009 }
 4679:
                    michal = entity.push;
                    michal = michal.bind(entity)(report);
 4689:
                    michal = zuuluu.buttons;
                    michal = michal.length;
                    if(!(michal > tangon)) { _fun00010_ip = 4714; continue _fun00009 }
 4704:
                    michal = entity.push;
                    michal = michal.bind(entity)(zuuluu);
 4714:
                    return entity;
                }
            };
            offset = zuuluu.bind(tangon)(oscard);
            _closure2_slot4 = offset;
            zuuluu = output.isGroupDM;
            zuuluu = zuuluu.bind(output)();
            foxtra = undefined;
            if(!zuuluu) { _fun00004_ip = 1208; continue _fun00003 }
 1125:
            oscard = _closure1_slot0;
            result = _closure1_slot2;
            zuuluu = 21;
            golfie = result[zuuluu];
            golfie = oscard.bind(tangon)(golfie);
            sizing = golfie.intl;
            golfie = sizing.formatToPlainString;
            zuuluu = result[zuuluu];
            zuuluu = oscard.bind(tangon)(zuuluu);
            zuuluu = zuuluu.t;
            oscard = zuuluu.ABMKx8;
            zuuluu = {};
            output = output.recipients;
            result = output.length;
            output = 1;
            output = result + output;
            zuuluu['members'] = output;
            foxtra = golfie.bind(sizing)(oscard, zuuluu);
 1208:
            golfie = _closure1_slot4;
            oscard = golfie.useEffect;
            sizing = offset.length;
            zuuluu = new Array(3);
            zuuluu[0] = sizing;
            zuuluu[1] = yankee;
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
            zuuluu = _closure1_slot27;
            yankee = _closure1_slot0;
            sizing = _closure1_slot2;
            entity = sizing[entity];
            entity = yankee.bind(tangon)(entity);
            michal = entity.AnalyticsLocationProvider;
            entity = {};
            entity['value'] = report;
            golfie = _closure1_slot27;
            report = 77;
            report = sizing[report];
            report = yankee.bind(tangon)(report);
            oscard = report.ActionSheet;
            report = {};
            report['showGradient'] = romeon;
            romeon = _closure1_slot27;
            verify = 78;
            verify = sizing[verify];
            verify = yankee.bind(tangon)(verify);
            yankee = verify.ActionSheetIconHeader;
            verify = {};
            verify['icon'] = kiloes;
            verify['title'] = backup;
            verify['subtitle'] = foxtra;
            verify = romeon.bind(tangon)(yankee, verify);
            report['header'] = verify;
            verify = offset.map;
            option = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot27;
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 79;
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
                        report = _closure1_slot27;
                        option = _closure1_slot0;
                        foxtra = _closure1_slot2;
                        golfie = 79;
                        michal = foxtra[golfie];
                        tangon = undefined;
                        michal = option.bind(tangon)(michal);
                        zuuluu = michal.ActionSheetRow;
                        michal = {};
                        michal['variant'] = kiloes;
                        michal['label'] = backup;
                        verify = _closure1_slot27;
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
            option = verify.bind(offset)(option);
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot20 = tangon;
    tangon = 15;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticsSections;
    var _closure1_slot21 = golfie;
    golfie = tangon.ChannelSettingsSections;
    var _closure1_slot22 = golfie;
    golfie = tangon.NULL_STRING_GUILD_ID;
    var _closure1_slot23 = golfie;
    golfie = tangon.Permissions;
    var _closure1_slot24 = golfie;
    tangon = tangon.ZERO_STRING_GUILD_ID;
    var _closure1_slot25 = tangon;
    tangon = 16;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ChannelDetailsNavigatorScreens;
    var _closure1_slot26 = tangon;
    tangon = 17;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot27 = tangon;
    tangon = 80;
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
            zuuluu = 69;
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
            if(!zuuluu) { _fun00028_ip = 147; continue _fun00027 }
 122:
            tangon = _closure1_slot27;
            zuuluu = _closure1_slot30;
            michal = {};
            michal['channel'] = golfie;
            michal['onClose'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 147:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();