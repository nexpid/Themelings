// app/modules/main_tabs_v2/native/channel/ChannelActions.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: ChannelActionButtons
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            offset = entity.channel;
            var _closure2_slot0 = offset;
            entity = entity.screenIndex;
            var _closure2_slot1 = entity;
            michal = _closure1_slot14;
            tangon = undefined;
            oscard = michal.bind(tangon)();
            golfie = _closure1_slot1;
            romeon = _closure1_slot2;
            michal = 10;
            michal = romeon[michal];
            michal = golfie.bind(tangon)(michal);
            verify = michal.bind(tangon)(offset);
            option = _closure1_slot0;
            michal = 11;
            michal = romeon[michal];
            zuuluu = option.bind(tangon)(michal);
            michal = zuuluu.useCanSearchForumPosts;
            zuuluu = michal.bind(zuuluu)(offset);
            michal = 12;
            michal = romeon[michal];
            yankee = option.bind(tangon)(michal);
            michal = yankee.useThreadNotificationSetting;
            foxtra = michal.bind(yankee)(offset);
            michal = _closure1_slot11;
            yankee = michal.NO_MESSAGES;
            michal = 13;
            michal = romeon[michal];
            michal = golfie.bind(tangon)(michal);
            michal = michal.bind(tangon)();
            golfie = 14;
            golfie = romeon[golfie];
            backup = option.bind(tangon)(golfie);
            romeon = backup.useStateFromStores;
            golfie = _closure1_slot4;
            option = new Array(1);
            option[0] = golfie;
            golfie = function() {
                tangon = _closure1_slot4;
                zuuluu = tangon.hasThreadsForChannel;
                entity = _closure2_slot0;
                michal = entity.guild_id;
                entity = entity.id;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            option = romeon.bind(backup)(option, golfie);
            golfie = new Array(0);
            var _closure2_slot2 = golfie;
            backup = offset.type;
            romeon = _closure1_slot8;
            romeon = romeon.GUILD_DIRECTORY;
            if(!(romeon !== backup)) { _fun00002_ip = 720; continue _fun00001 }
 208:
            romeon = _closure1_slot8;
            romeon = romeon.GUILD_FORUM;
            if(!(romeon !== backup)) { _fun00002_ip = 586; continue _fun00001 }
 225:
            romeon = _closure1_slot8;
            romeon = romeon.GUILD_MEDIA;
            if(!(romeon !== backup)) { _fun00002_ip = 586; continue _fun00001 }
 242:
            romeon = _closure1_slot8;
            romeon = romeon.PUBLIC_THREAD;
            if(!(romeon !== backup)) { _fun00002_ip = 421; continue _fun00001 }
 259:
            romeon = _closure1_slot8;
            romeon = romeon.PRIVATE_THREAD;
            if(!(romeon !== backup)) { _fun00002_ip = 421; continue _fun00001 }
 276:
            romeon = _closure1_slot8;
            romeon = romeon.ANNOUNCEMENT_THREAD;
            if(!(romeon !== backup)) { _fun00002_ip = 421; continue _fun00001 }
 293:
            backup = golfie.push;
            romeon = {};
            sizing = _closure1_slot1;
            echoed = _closure1_slot2;
            kiloes = 15;
            kiloes = echoed[kiloes];
            kiloes = sizing.bind(tangon)(kiloes);
            romeon['source'] = kiloes;
            result = _closure1_slot0;
            kiloes = 16;
            kiloes = echoed[kiloes];
            kiloes = result.bind(tangon)(kiloes);
            kiloes = kiloes.MagnifyingGlassIcon;
            romeon['IconComponent'] = kiloes;
            kiloes = function() { // Original name: onPress
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    golfie = _closure1_slot7;
                    entity = _closure2_slot0;
                    report = entity.id;
                    entity = undefined;
                    tangon = true;
                    zuuluu = 'initial';
                    zuuluu = golfie.bind(entity)(report, tangon, zuuluu);
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    zuuluu = 24;
                    zuuluu = report[zuuluu];
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.isIOS;
                    zuuluu = zuuluu.bind(tangon)();
                    if(!zuuluu) { _fun00004_ip = 128; continue _fun00003 }
 67:
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    zuuluu = 25;
                    zuuluu = report[zuuluu];
                    golfie = tangon.bind(entity)(zuuluu);
                    report = golfie.getChatInputRef;
                    zuuluu = _closure2_slot0;
                    tangon = zuuluu.id;
                    zuuluu = _closure2_slot1;
                    tangon = report.bind(golfie)(tangon, zuuluu);
                    zuuluu = null;
                    if(!(zuuluu != tangon)) { _fun00004_ip = 128; continue _fun00003 }
 118:
                    zuuluu = tangon.blur;
                    zuuluu = zuuluu.bind(tangon)();
 128:
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    zuuluu = 26;
                    zuuluu = report[zuuluu];
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.isSwipeToMemberListEnabled;
                    zuuluu = zuuluu.bind(tangon)();
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    if(zuuluu) { _fun00004_ip = 261; continue _fun00003 }
 169:
                    zuuluu = 28;
                    zuuluu = report[zuuluu];
                    golfie = tangon.bind(entity)(zuuluu);
                    zuuluu = golfie.getRootNavigationRef;
                    verify = zuuluu.bind(golfie)();
                    zuuluu = null;
                    if(!(zuuluu != verify)) { _fun00004_ip = 259; continue _fun00003 }
 197:
                    zuuluu = verify.isReady;
                    zuuluu = zuuluu.bind(verify)();
                    if(!zuuluu) { _fun00004_ip = 259; continue _fun00003 }
 210:
                    option = verify.navigate;
                    golfie = {'channelId': null, 'search': true, 'source': 'channel-header-search'};
                    zuuluu = _closure2_slot0;
                    zuuluu = zuuluu.id;
                    golfie['channelId'] = zuuluu;
                    zuuluu = 'sidebar';
                    zuuluu = option.bind(verify)(zuuluu, golfie);
                    _fun00004_ip = 334; continue _fun00003;
 259:
                    return entity;
 261:
                    zuuluu = 27;
                    zuuluu = report[zuuluu];
                    zuuluu = tangon.bind(entity)(zuuluu);
                    report = zuuluu.ComponentDispatch;
                    tangon = report.dispatch;
                    michal = _closure1_slot10;
                    zuuluu = michal.SHOW_CHANNEL_DETAILS;
                    michal = {};
                    golfie = 'channel-header-search';
                    michal['source'] = golfie;
                    golfie = _closure2_slot0;
                    golfie = golfie.id;
                    michal['channelId'] = golfie;
                    oscard = _closure2_slot1;
                    michal['screenIndex'] = oscard;
                    michal = tangon.bind(report)(zuuluu, michal);
 334:
                    return entity;
                }
            };
            romeon['onPress'] = kiloes;
            kiloes = 18;
            sizing = echoed[kiloes];
            sizing = result.bind(tangon)(sizing);
            output = sizing.intl;
            sizing = output.string;
            kiloes = echoed[kiloes];
            kiloes = result.bind(tangon)(kiloes);
            kiloes = kiloes.t;
            kiloes = kiloes.5h0QOD;
            kiloes = sizing.bind(output)(kiloes);
            romeon['accessibilityLabel'] = kiloes;
            romeon = backup.bind(golfie)(romeon);
            _fun00002_ip = 843; continue _fun00001;
 421:
            romeon = offset.isForumPost;
            romeon = romeon.bind(offset)();
            if(romeon) { _fun00002_ip = 843; continue _fun00001 }
 437:
            romeon = _closure1_slot1;
            if(!(foxtra !== yankee)) { _fun00002_ip = 458; continue _fun00001 }
 445:
            foxtra = _closure1_slot2;
            yankee = 21;
            yankee = foxtra[yankee];
            _fun00002_ip = 469; continue _fun00001;
 458:
            backup = _closure1_slot2;
            foxtra = 20;
            yankee = backup[foxtra];
 469:
            foxtra = romeon.bind(tangon)(yankee);
            romeon = golfie.push;
            yankee = {};
            yankee['source'] = foxtra;
            sizing = _closure1_slot0;
            output = _closure1_slot2;
            foxtra = 22;
            foxtra = output[foxtra];
            foxtra = sizing.bind(tangon)(foxtra);
            foxtra = foxtra.BellIcon;
            yankee['IconComponent'] = foxtra;
            foxtra = function() { // Original name: onPress
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 23;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.showThreadNotificationsBottomSheet;
                michal = _closure2_slot0;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            yankee['onPress'] = foxtra;
            foxtra = 18;
            backup = output[foxtra];
            backup = sizing.bind(tangon)(backup);
            kiloes = backup.intl;
            backup = kiloes.string;
            foxtra = output[foxtra];
            foxtra = sizing.bind(tangon)(foxtra);
            foxtra = foxtra.t;
            foxtra = foxtra.HcoRu7;
            foxtra = backup.bind(kiloes)(foxtra);
            yankee['accessibilityLabel'] = foxtra;
            yankee = romeon.bind(golfie)(yankee);
            _fun00002_ip = 843; continue _fun00001;
 586:
            if(!zuuluu) { _fun00002_ip = 843; continue _fun00001 }
 592:
            yankee = golfie.push;
            zuuluu = {};
            foxtra = _closure1_slot1;
            sizing = _closure1_slot2;
            romeon = 15;
            romeon = sizing[romeon];
            romeon = foxtra.bind(tangon)(romeon);
            zuuluu['source'] = romeon;
            kiloes = _closure1_slot0;
            romeon = 16;
            romeon = sizing[romeon];
            romeon = kiloes.bind(tangon)(romeon);
            romeon = romeon.MagnifyingGlassIcon;
            zuuluu['IconComponent'] = romeon;
            romeon = function() { // Original name: onPress
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 19;
                michal = michal[entity];
                entity = undefined;
                report = zuuluu.bind(entity)(michal);
                tangon = report.updateForumSearchQuery;
                michal = _closure2_slot0;
                zuuluu = michal.id;
                michal = '';
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            zuuluu['onPress'] = romeon;
            romeon = 18;
            foxtra = sizing[romeon];
            foxtra = kiloes.bind(tangon)(foxtra);
            backup = foxtra.intl;
            foxtra = backup.string;
            romeon = sizing[romeon];
            romeon = kiloes.bind(tangon)(romeon);
            romeon = romeon.t;
            romeon = romeon.5h0QOD;
            romeon = foxtra.bind(backup)(romeon);
            zuuluu['accessibilityLabel'] = romeon;
            zuuluu = yankee.bind(golfie)(zuuluu);
            _fun00002_ip = 843; continue _fun00001;
 720:
            yankee = golfie.push;
            zuuluu = {};
            foxtra = _closure1_slot1;
            sizing = _closure1_slot2;
            romeon = 15;
            romeon = sizing[romeon];
            romeon = foxtra.bind(tangon)(romeon);
            zuuluu['source'] = romeon;
            kiloes = _closure1_slot0;
            romeon = 16;
            romeon = sizing[romeon];
            romeon = kiloes.bind(tangon)(romeon);
            romeon = romeon.MagnifyingGlassIcon;
            zuuluu['IconComponent'] = romeon;
            romeon = function() { // Original name: onPress
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 17;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.open;
                michal = {};
                report = _closure2_slot0;
                michal['channel'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            zuuluu['onPress'] = romeon;
            romeon = 18;
            foxtra = sizing[romeon];
            foxtra = kiloes.bind(tangon)(foxtra);
            backup = foxtra.intl;
            foxtra = backup.string;
            romeon = sizing[romeon];
            romeon = kiloes.bind(tangon)(romeon);
            romeon = romeon.t;
            romeon = romeon.5h0QOD;
            romeon = foxtra.bind(backup)(romeon);
            zuuluu['accessibilityLabel'] = romeon;
            zuuluu = yankee.bind(golfie)(zuuluu);
 843:
            if(!michal) { _fun00002_ip = 857; continue _fun00001 }
 846:
            yankee = golfie.length;
            zuuluu = 0;
            michal = zuuluu !== yankee;
 857:
            if(michal) { _fun00002_ip = 986; continue _fun00001 }
 863:
            zuuluu = {};
            zuuluu['channel'] = offset;
            zuuluu['isChannelNSFWGated'] = verify;
            zuuluu['channelHasThreads'] = option;
            offset = zuuluu.channel;
            verify = zuuluu.isChannelNSFWGated;
            yankee = zuuluu.channelHasThreads;
            romeon = _closure1_slot5;
            option = romeon.has;
            zuuluu = offset.type;
            zuuluu = option.bind(romeon)(zuuluu);
            option = !zuuluu;
            if(!option) { _fun00002_ip = 924; continue _fun00001 }
 921:
            option = yankee;
 924:
            if(!option) { _fun00002_ip = 955; continue _fun00001 }
 927:
            yankee = _closure1_slot9;
            foxtra = yankee.GUILD_THREADS_ONLY;
            romeon = foxtra.has;
            yankee = offset.type;
            yankee = romeon.bind(foxtra)(yankee);
            option = !yankee;
 955:
            if(!zuuluu) { _fun00002_ip = 961; continue _fun00001 }
 958:
            zuuluu = !verify;
 961:
            if(!zuuluu) { _fun00002_ip = 977; continue _fun00001 }
 964:
            verify = offset.isForumLikeChannel;
            verify = verify.bind(offset)();
            zuuluu = !verify;
 977:
            if(!zuuluu) { _fun00002_ip = 983; continue _fun00001 }
 980:
            zuuluu = option;
 983:
            michal = !zuuluu;
 986:
            if(michal) { _fun00002_ip = 1116; continue _fun00001 }
 992:
            zuuluu = golfie.unshift;
            michal = {};
            verify = _closure1_slot1;
            romeon = _closure1_slot2;
            option = 29;
            option = romeon[option];
            option = verify.bind(tangon)(option);
            michal['source'] = option;
            yankee = _closure1_slot0;
            option = 30;
            option = romeon[option];
            option = yankee.bind(tangon)(option);
            option = option.ThreadIcon;
            michal['IconComponent'] = option;
            option = function() { // Original name: onPress
                michal = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 31;
                entity = zuuluu[entity];
                zuuluu = undefined;
                michal = michal.bind(zuuluu)(entity);
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal['onPress'] = option;
            option = 18;
            verify = romeon[option];
            verify = yankee.bind(tangon)(verify);
            offset = verify.intl;
            verify = offset.string;
            option = romeon[option];
            option = yankee.bind(tangon)(option);
            option = option.t;
            option = option.B2panJ;
            option = verify.bind(offset)(option);
            michal['accessibilityLabel'] = option;
            michal = zuuluu.bind(golfie)(michal);
 1116:
            zuuluu = _closure1_slot13;
            michal = _closure1_slot3;
            entity = {};
            oscard = oscard.actionWrapper;
            entity['style'] = oscard;
            oscard = golfie.map;
            report = function(argFoo, argBar) {
                report = argFoo;
                entity = _closure2_slot2;
                michal = entity.length;
                entity = 1;
                golfie = michal - entity;
                tangon = _closure1_slot12;
                michal = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 32;
                entity = zuuluu[entity];
                zuuluu = undefined;
                michal = michal.bind(zuuluu)(entity);
                entity = {};
                oscard = argBar;
                oscard = oscard === golfie;
                entity['noMargin'] = oscard;
                verify = entity;
                option = report;
                oscard = copyDataProperties(verify, option);
                oscard = report.accessibilityLabel;
                report = 'key';
                entity[report] = oscard;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            };
            report = oscard.bind(golfie)(report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: WrappedChannelNavButtons
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            tangon = michal.channelId;
            var _closure2_slot0 = tangon;
            oscard = michal.screenIndex;
            zuuluu = _closure1_slot0;
            option = _closure1_slot2;
            report = 14;
            golfie = option[report];
            report = undefined;
            offset = zuuluu.bind(report)(golfie);
            verify = offset.useStateFromStores;
            yankee = _closure1_slot6;
            golfie = new Array(1);
            golfie[0] = yankee;
            entity = function() {
                zuuluu = _closure1_slot6;
                michal = zuuluu.getChannel;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            golfie = verify.bind(offset)(golfie, entity);
            entity = 33;
            entity = option[entity];
            zuuluu = zuuluu.bind(report)(entity);
            entity = zuuluu.useShouldAgeGateChannel;
            zuuluu = entity.bind(zuuluu)(tangon);
            tangon = null;
            option = tangon == golfie;
            entity = null;
            if(option) { _fun00006_ip = 187; continue _fun00005 }
 107:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            option = 34;
            option = offset[option];
            offset = verify.bind(report)(option);
            verify = offset.shouldNSFWGateGuild;
            yankee = tangon == golfie;
            option = undefined;
            if(yankee) { _fun00006_ip = 147; continue _fun00005 }
 142:
            option = golfie.guild_id;
 147:
            option = verify.bind(offset)(option);
            entity = null;
            if(option) { _fun00006_ip = 187; continue _fun00005 }
 157:
            entity = null;
            if(zuuluu) { _fun00006_ip = 187; continue _fun00005 }
 162:
            tangon = _closure1_slot13;
            zuuluu = _closure1_slot15;
            michal = {};
            michal['channel'] = golfie;
            michal['screenIndex'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 187:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    tangon = 0;
    verify = oscard[tangon];
    golfie = argCor;
    entity = undefined;
    golfie = golfie.bind(entity)(verify);
    golfie = 1;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.View;
    var _closure1_slot3 = golfie;
    golfie = 2;
    golfie = oscard[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    golfie = 3;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.THREADED_CHANNEL_TYPES;
    var _closure1_slot5 = golfie;
    golfie = 4;
    golfie = oscard[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot6 = golfie;
    golfie = 5;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.setIsChannelDetailsSearchActive;
    var _closure1_slot7 = golfie;
    golfie = 6;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    option = golfie.ChannelTypes;
    var _closure1_slot8 = option;
    option = golfie.ChannelTypesSets;
    var _closure1_slot9 = option;
    golfie = golfie.ComponentActions;
    var _closure1_slot10 = golfie;
    golfie = 7;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.ThreadMemberFlags;
    var _closure1_slot11 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.createElement;
    var _closure1_slot12 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot13 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'flexShrink': 0, 'flexDirection': 'row', 'alignItems': 'center'};
    tangon['actionWrapper'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot14 = tangon;
    tangon = 37;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/channel/ChannelActions.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: ChannelActions
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            verify = michal.channelId;
            var _closure2_slot0 = verify;
            offset = michal.screenIndex;
            yankee = michal.containerStyle;
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            tangon = 14;
            report = zuuluu[tangon];
            tangon = undefined;
            option = michal.bind(tangon)(report);
            golfie = option.useStateFromStoresObject;
            romeon = _closure1_slot6;
            report = new Array(1);
            report[0] = romeon;
            entity = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = {};
                    oscard = _closure1_slot6;
                    zuuluu = oscard.getChannel;
                    michal = _closure2_slot0;
                    option = zuuluu.bind(oscard)(michal);
                    michal = null;
                    oscard = michal == option;
                    golfie = undefined;
                    if(oscard) { _fun00010_ip = 47; continue _fun00009 }
 37:
                    oscard = option.isMultiUserDM;
                    golfie = oscard.bind(option)();
 47:
                    oscard = michal != golfie;
                    if(!oscard) { _fun00010_ip = 57; continue _fun00009 }
 54:
                    oscard = golfie;
 57:
                    entity['isMultiUserDM'] = oscard;
                    oscard = _closure1_slot6;
                    report = oscard.getChannel;
                    tangon = _closure2_slot0;
                    report = report.bind(oscard)(tangon);
                    tangon = michal == report;
                    zuuluu = undefined;
                    if(tangon) { _fun00010_ip = 99; continue _fun00009 }
 89:
                    tangon = report.isDM;
                    zuuluu = tangon.bind(report)();
 99:
                    michal = michal != zuuluu;
                    if(!michal) { _fun00010_ip = 109; continue _fun00009 }
 106:
                    michal = zuuluu;
 109:
                    entity['isDM'] = michal;
                    return entity;
                }
            };
            entity = golfie.bind(option)(report, entity);
            report = entity.isMultiUserDM;
            golfie = entity.isDM;
            entity = 11;
            entity = zuuluu[entity];
            michal = michal.bind(tangon)(entity);
            entity = michal.useHasForumSearchQuery;
            option = entity.bind(michal)(verify);
            zuuluu = _closure1_slot13;
            michal = _closure1_slot3;
            entity = {};
            entity['style'] = yankee;
            if(option) { _fun00008_ip = 203; continue _fun00007 }
 132:
            if(golfie) { _fun00008_ip = 165; continue _fun00007 }
 135:
            if(report) { _fun00008_ip = 165; continue _fun00007 }
 138:
            option = _closure1_slot13;
            golfie = _closure1_slot16;
            report = {};
            report['channelId'] = verify;
            report['screenIndex'] = offset;
            report = option.bind(tangon)(golfie, report);
            _fun00008_ip = 201; continue _fun00007;
 165:
            offset = _closure1_slot13;
            option = _closure1_slot1;
            yankee = _closure1_slot2;
            golfie = 36;
            golfie = yankee[golfie];
            option = option.bind(tangon)(golfie);
            golfie = {};
            golfie['channelId'] = verify;
            report = offset.bind(tangon)(option, golfie);
 201:
            _fun00008_ip = 245; continue _fun00007;
 203:
            option = _closure1_slot13;
            golfie = _closure1_slot0;
            offset = _closure1_slot2;
            oscard = 35;
            oscard = offset[oscard];
            oscard = golfie.bind(tangon)(oscard);
            golfie = oscard.ForumChannelCloseSearchButton;
            oscard = {};
            oscard['channelId'] = verify;
            report = option.bind(tangon)(golfie, oscard);
 245:
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();