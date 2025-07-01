// app/modules/icymi/native/ICYMIActiveVoiceRow.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscard;
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
                    zuuluu = 26;
                    oscard = michal[zuuluu];
                    zuuluu = undefined;
                    oscard = golfie.bind(zuuluu)(oscard);
                    if(tangon) { _fun00002_ip = 102; continue _fun00001 }
 51:
                    tangon = 27;
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
                    tangon = 25;
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
        _closure1_slot27 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot27 = entity;
    entity = function(argFoo) { // Original name: ICYMIActiveVoiceRowInner
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            oscard = entity.guild;
            var _closure2_slot0 = oscard;
            result = entity.channel;
            var _closure2_slot1 = result;
            report = undefined;
            var _closure2_slot5 = report;
            var _closure2_slot6 = report;
            entity = _closure1_slot26;
            foxtra = entity.bind(report)();
            var _closure2_slot2 = foxtra;
            zuuluu = _closure1_slot0;
            option = _closure1_slot2;
            golfie = 24;
            entity = option[golfie];
            verify = zuuluu.bind(report)(entity);
            tangon = verify.useStateFromStoresArray;
            entity = _closure1_slot19;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                zuuluu = _closure1_slot19;
                michal = zuuluu.getVoiceStatesForChannel;
                entity = _closure2_slot1;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = tangon.bind(verify)(michal, entity);
            var _closure2_slot3 = entity;
            michal = 28;
            michal = option[michal];
            verify = zuuluu.bind(report)(michal);
            tangon = verify.useSubscribeGuildMembers;
            michal = {};
            yankee = oscard.id;
            romeon = entity.map;
            offset = function(argFoo) {
                entity = argFoo;
                entity = entity.user;
                entity = entity.id;
                return entity;
            };
            offset = romeon.bind(entity)(offset);
            michal[yankee] = offset;
            michal = tangon.bind(verify)(michal);
            michal = option[golfie];
            yankee = zuuluu.bind(report)(michal);
            offset = yankee.useStateFromStoresArray;
            michal = _closure1_slot13;
            verify = new Array(2);
            verify[0] = michal;
            michal = _closure1_slot10;
            verify[1] = michal;
            michal = oscard.id;
            tangon = new Array(2);
            tangon[0] = michal;
            tangon[1] = entity;
            michal = function() {
                tangon = _closure2_slot3;
                zuuluu = tangon.map;
                michal = function(argFoo) {
                    tangon = _closure1_slot13;
                    zuuluu = tangon.getMember;
                    entity = _closure2_slot0;
                    michal = entity.id;
                    entity = argFoo;
                    entity = entity.user;
                    entity = entity.id;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                tangon = zuuluu.bind(tangon)(michal);
                zuuluu = tangon.filter;
                michal = global;
                michal = michal.Boolean;
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = zuuluu.sort;
                entity = function(argFoo, argBar) {
                    tangon = _closure1_slot10;
                    zuuluu = tangon.compare;
                    entity = argFoo;
                    michal = entity.userId;
                    entity = argBar;
                    entity = entity.userId;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            sizing = offset.bind(yankee)(verify, michal, tangon);
            michal = option[golfie];
            offset = zuuluu.bind(report)(michal);
            verify = offset.useStateFromStores;
            michal = _closure1_slot17;
            tangon = new Array(2);
            tangon[0] = michal;
            michal = _closure1_slot12;
            tangon[1] = michal;
            michal = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = _closure1_slot17;
                    entity = zuuluu.getChannelId;
                    tangon = entity.bind(zuuluu)();
                    entity = null;
                    zuuluu = entity != tangon;
                    if(!zuuluu) { _fun00006_ip = 40; continue _fun00005 }
 26:
                    zuuluu = _closure1_slot12;
                    michal = zuuluu.getChannel;
                    entity = michal.bind(zuuluu)(tangon);
 40:
                    return entity;
                }
            };
            verify = verify.bind(offset)(tangon, michal);
            tangon = _closure1_slot1;
            michal = 29;
            michal = option[michal];
            michal = tangon.bind(report)(michal);
            michal = michal.bind(report)(verify);
            echoed = michal.selfMute;
            michal = option[golfie];
            offset = zuuluu.bind(report)(michal);
            verify = offset.useStateFromStores;
            michal = _closure1_slot11;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tangon = _closure2_slot3;
                    zuuluu = tangon.find;
                    entity = function(argFoo) {
                        entity = argFoo;
                        entity = entity.voiceState;
                        entity = entity.selfStream;
                        return entity;
                    };
                    zuuluu = zuuluu.bind(tangon)(entity);
                    entity = null;
                    tangon = entity == zuuluu;
                    if(tangon) { _fun00008_ip = 73; continue _fun00007 }
 35:
                    report = _closure1_slot11;
                    tangon = report.getStreamForUser;
                    zuuluu = zuuluu.user;
                    zuuluu = zuuluu.id;
                    michal = _closure2_slot0;
                    michal = michal.id;
                    entity = tangon.bind(report)(zuuluu, michal);
 73:
                    return entity;
                }
            };
            michal = verify.bind(offset)(zuuluu, michal);
            var _closure2_slot4 = michal;
            zuuluu = 30;
            zuuluu = option[zuuluu];
            verify = tangon.bind(report)(zuuluu);
            yankee = null;
            zuuluu = yankee == michal;
            option = undefined;
            if(zuuluu) { _fun00004_ip = 366; continue _fun00003 }
 361:
            option = michal.guildId;
 366:
            zuuluu = yankee == michal;
            tangon = undefined;
            if(zuuluu) { _fun00004_ip = 380; continue _fun00003 }
 375:
            tangon = michal.channelId;
 380:
            offset = yankee == michal;
            zuuluu = undefined;
            if(offset) { _fun00004_ip = 395; continue _fun00003 }
 389:
            zuuluu = michal.ownerId;
 395:
            zuuluu = verify.bind(report)(option, tangon, zuuluu);
            romeon = zuuluu.previewUrl;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            option = zuuluu[golfie];
            kiloes = tangon.bind(report)(option);
            offset = kiloes.useStateFromStores;
            option = _closure1_slot18;
            verify = new Array(1);
            verify[0] = option;
            option = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure1_slot18;
                    michal = zuuluu.getUser;
                    report = _closure2_slot4;
                    entity = null;
                    report = entity == report;
                    entity = undefined;
                    if(report) { _fun00010_ip = 41; continue _fun00009 }
 31:
                    tangon = _closure2_slot4;
                    entity = tangon.ownerId;
 41:
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                }
            };
            variable45 = offset.bind(kiloes)(verify, option);
            zuuluu = zuuluu[golfie];
            option = tangon.bind(report)(zuuluu);
            golfie = option.useStateFromStores;
            zuuluu = _closure1_slot16;
            tangon = new Array(2);
            tangon[0] = zuuluu;
            zuuluu = _closure1_slot8;
            tangon[1] = zuuluu;
            zuuluu = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 31;
                    michal = michal[entity];
                    entity = undefined;
                    report = zuuluu.bind(entity)(michal);
                    zuuluu = report.getStreamerActivity;
                    michal = _closure2_slot4;
                    entity = _closure1_slot16;
                    zuuluu = zuuluu.bind(report)(michal, entity);
                    report = null;
                    michal = report != zuuluu;
                    entity = null;
                    if(!michal) { _fun00012_ip = 115; continue _fun00011 }
 59:
                    michal = zuuluu.application_id;
                    if(!(report == michal)) { _fun00012_ip = 91; continue _fun00011 }
 69:
                    oscard = _closure1_slot8;
                    report = oscard.getApplicationByName;
                    michal = zuuluu.name;
                    michal = report.bind(oscard)(michal);
                    _fun00012_ip = 112; continue _fun00011;
 91:
                    report = _closure1_slot8;
                    tangon = report.getApplication;
                    zuuluu = zuuluu.application_id;
                    michal = tangon.bind(report)(zuuluu);
 112:
                    entity = michal;
 115:
                    return entity;
                }
            };
            vacuum = golfie.bind(option)(tangon, zuuluu);
            zuuluu = yankee != michal;
            if(!zuuluu) { _fun00004_ip = 513; continue _fun00003 }
 509:
            zuuluu = yankee != variable45;
 513:
            _closure2_slot5 = zuuluu;
            option = _closure1_slot5;
            golfie = option.useEffect;
            tangon = new Array(4);
            tangon[0] = zuuluu;
            verify = yankee == michal;
            zuuluu = undefined;
            if(verify) { _fun00004_ip = 548; continue _fun00003 }
 543:
            zuuluu = michal.guildId;
 548:
            tangon[1] = zuuluu;
            verify = yankee == michal;
            zuuluu = undefined;
            if(verify) { _fun00004_ip = 566; continue _fun00003 }
 561:
            zuuluu = michal.channelId;
 566:
            tangon[2] = zuuluu;
            verify = yankee == michal;
            zuuluu = undefined;
            if(verify) { _fun00004_ip = 585; continue _fun00003 }
 579:
            zuuluu = michal.ownerId;
 585:
            tangon[3] = zuuluu;
            zuuluu = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    michal = _closure2_slot5;
                    if(!michal) { _fun00014_ip = 68; continue _fun00013 }
 10:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 32;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.fetchStreamPreview;
                    entity = _closure2_slot4;
                    zuuluu = entity.guildId;
                    michal = entity.channelId;
                    entity = entity.ownerId;
                    entity = tangon.bind(report)(zuuluu, michal, entity);
 68:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = golfie.bind(option)(zuuluu, tangon);
            tangon = _closure1_slot9;
            zuuluu = tangon.getChannelStatus;
            record = zuuluu.bind(tangon)(result);
            option = _closure1_slot5;
            golfie = option.useCallback;
            zuuluu = result.id;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 33;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.selectVoiceChannel;
                michal = _closure2_slot1;
                michal = michal.id;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            sequen = golfie.bind(option)(zuuluu, tangon);
            option = _closure1_slot5;
            golfie = option.useCallback;
            tangon = new Array(2);
            tangon[0] = michal;
            zuuluu = result.id;
            tangon[1] = zuuluu;
            zuuluu = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    tangon = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 33;
                    michal = michal[entity];
                    entity = undefined;
                    oscard = tangon.bind(entity)(michal);
                    report = oscard.selectVoiceChannel;
                    tangon = _closure2_slot1;
                    tangon = tangon.id;
                    tangon = report.bind(oscard)(tangon);
                    report = _closure2_slot4;
                    tangon = null;
                    if(!(tangon != report)) { _fun00016_ip = 103; continue _fun00015 }
 58:
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    zuuluu = 32;
                    zuuluu = report[zuuluu];
                    report = tangon.bind(entity)(zuuluu);
                    tangon = report.watchStream;
                    zuuluu = _closure2_slot4;
                    michal = {};
                    oscard = true;
                    michal['forceMultiple'] = oscard;
                    michal = tangon.bind(report)(zuuluu, michal);
 103:
                    return entity;
                }
            };
            cntext = golfie.bind(option)(zuuluu, tangon);
            option = _closure1_slot5;
            golfie = option.useCallback;
            tangon = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 34;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.toggleSelfMute;
                michal = {};
                report = _closure1_slot22;
                report = report.ACCOUNT_PANEL;
                michal['location'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            zuuluu = new Array(0);
            update = golfie.bind(option)(tangon, zuuluu);
            option = _closure1_slot5;
            golfie = option.useCallback;
            tangon = new Array(1);
            tangon[0] = result;
            zuuluu = function() {
                michal = _closure2_slot1;
                zuuluu = function() { // Original name: handleVoiceOrStageChannelConnectPress
                    entity = undefined;
                    tangon = _closure1_slot27;
                    zuuluu = tangon.apply;
                    entity = arguments;
                    michal = entity;
                    entity = this;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                };
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                zuuluu = !zuuluu;
                tangon = _closure1_slot1;
                report = _closure1_slot2;
                zuuluu = 35;
                zuuluu = report[zuuluu];
                report = tangon.bind(entity)(zuuluu);
                tangon = report.updateChatOpen;
                zuuluu = michal.id;
                michal = true;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            source = golfie.bind(option)(zuuluu, tangon);
            option = _closure1_slot5;
            golfie = option.useCallback;
            zuuluu = result.id;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function(argFoo) {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 36;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = {};
                tangon = argFoo;
                tangon = tangon.id;
                michal['userId'] = tangon;
                tangon = _closure2_slot1;
                tangon = tangon.id;
                michal['channelId'] = tangon;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            zuuluu = golfie.bind(option)(zuuluu, tangon);
            _closure2_slot6 = zuuluu;
            zuuluu = yankee != vacuum;
            limora = null;
            if(!zuuluu) { _fun00004_ip = 821; continue _fun00003 }
 795:
            tangon = yankee == vacuum;
            zuuluu = undefined;
            if(tangon) { _fun00004_ip = 818; continue _fun00003 }
 804:
            golfie = vacuum.getIconSource;
            tangon = 48;
            zuuluu = golfie.bind(vacuum)(tangon);
 818:
            limora = zuuluu;
 821:
            michal = yankee != michal;
            offset = null;
            if(!michal) { _fun00004_ip = 1571; continue _fun00003 }
 833:
            michal = yankee != variable45;
            offset = null;
            if(!michal) { _fun00004_ip = 1571; continue _fun00003 }
 845:
            tangon = _closure1_slot25;
            zuuluu = _closure1_slot6;
            michal = {};
            golfie = foxtra.stream;
            michal['style'] = golfie;
            verify = _closure1_slot24;
            option = _closure1_slot1;
            golfie = _closure1_slot2;
            whisks = 37;
            golfie = golfie[whisks];
            option = option.bind(report)(golfie);
            golfie = {};
            if(!(yankee == romeon)) { _fun00004_ip = 917; continue _fun00003 }
 895:
            ctrled = _closure1_slot1;
            config = _closure1_slot2;
            kiloes = 38;
            kiloes = config[kiloes];
            kiloes = ctrled.bind(report)(kiloes);
            _fun00004_ip = 927; continue _fun00003;
 917:
            ctrled = {};
            ctrled['uri'] = romeon;
            kiloes = ctrled;
 927:
            golfie['source'] = kiloes;
            ctrled = _closure1_slot1;
            config = _closure1_slot2;
            kiloes = 38;
            kiloes = config[kiloes];
            kiloes = ctrled.bind(report)(kiloes);
            golfie['placeholder'] = kiloes;
            if(!(yankee == romeon)) { _fun00004_ip = 968; continue _fun00003 }
 960:
            kiloes = foxtra.streamPreviewImagePlaceholder;
            _fun00004_ip = 974; continue _fun00003;
 968:
            kiloes = foxtra.streamPreviewImage;
 974:
            golfie['style'] = kiloes;
            kiloes = yankee != romeon;
            romeon = 'contain';
            if(!kiloes) { _fun00004_ip = 993; continue _fun00003 }
 989:
            romeon = 'cover';
 993:
            golfie['resizeMode'] = romeon;
            option = verify.bind(report)(option, golfie);
            golfie = new Array(2);
            golfie[0] = option;
            romeon = _closure1_slot25;
            verify = _closure1_slot6;
            option = {};
            kiloes = foxtra.streamOverlay;
            option['style'] = kiloes;
            config = _closure1_slot25;
            ctrled = _closure1_slot6;
            kiloes = {};
            papara = foxtra.streamLeft;
            kiloes['style'] = papara;
            if(!(yankee == limora)) { _fun00004_ip = 1138; continue _fun00003 }
 1056:
            status = _closure1_slot24;
            target = _closure1_slot6;
            papara = {};
            sierra = foxtra.activityIcon;
            papara['style'] = sierra;
            quebec = _closure1_slot24;
            equals = _closure1_slot0;
            variable36 = _closure1_slot2;
            sierra = 39;
            sierra = variable36[sierra];
            sierra = equals.bind(report)(sierra);
            equals = sierra.ScreenIcon;
            sierra = {'size': 'sm', 'color': 'interactive-active'};
            sierra = quebec.bind(report)(equals, sierra);
            papara['children'] = sierra;
            papara = status.bind(report)(target, papara);
            _fun00004_ip = 1181; continue _fun00003;
 1138:
            sierra = _closure1_slot24;
            status = _closure1_slot1;
            target = _closure1_slot2;
            target = target[whisks];
            status = status.bind(report)(target);
            target = {};
            target['source'] = limora;
            limora = foxtra.activityIcon;
            target['style'] = limora;
            papara = sierra.bind(report)(status, target);
 1181:
            target = new Array(2);
            target[0] = papara;
            limora = _closure1_slot25;
            sierra = _closure1_slot6;
            status = {};
            papara = foxtra.streamInfo;
            status['style'] = papara;
            whisks = yankee != vacuum;
            papara = null;
            if(!whisks) { _fun00004_ip = 1276; continue _fun00003 }
 1218:
            quebec = _closure1_slot24;
            equals = _closure1_slot0;
            variable36 = _closure1_slot2;
            whisks = 40;
            whisks = variable36[whisks];
            whisks = equals.bind(report)(whisks);
            equals = whisks.Text;
            whisks = {'variant': 'text-sm/bold', 'color': 'header-primary'};
            variable36 = vacuum.name;
            whisks['children'] = variable36;
            papara = quebec.bind(report)(equals, whisks);
 1276:
            whisks = new Array(2);
            whisks[0] = papara;
            variable36 = _closure1_slot24;
            equals = _closure1_slot0;
            quebec = _closure1_slot2;
            papara = 40;
            papara = quebec[papara];
            papara = equals.bind(report)(papara);
            quebec = papara.Text;
            equals = {};
            papara = yankee != vacuum;
            vacuum = 'text-xs/semibold';
            if(!papara) { _fun00004_ip = 1334; continue _fun00003 }
 1328:
            vacuum = 'text-xs/normal';
 1334:
            equals['variant'] = vacuum;
            vacuum = 'header-primary';
            equals['color'] = vacuum;
            vacuum = _closure1_slot0;
            papara = _closure1_slot2;
            variable37 = 41;
            variable38 = papara[variable37];
            variable38 = vacuum.bind(report)(variable38);
            variable40 = variable38.intl;
            variable39 = variable40.format;
            variable37 = papara[variable37];
            variable37 = vacuum.bind(report)(variable37);
            variable37 = variable37.t;
            variable38 = variable37.0QO34e;
            variable37 = {};
            variable42 = _closure1_slot1;
            variable41 = 42;
            variable41 = papara[variable41];
            variable44 = variable42.bind(report)(variable41);
            variable43 = variable44.getName;
            variable42 = oscard.id;
            variable41 = result.id;
            variable41 = variable43.bind(variable44)(variable42, variable41, variable45);
            variable37['username'] = variable41;
            variable37 = variable39.bind(variable40)(variable38, variable37);
            equals['children'] = variable37;
            equals = variable36.bind(report)(quebec, equals);
            whisks[1] = equals;
            status['children'] = whisks;
            status = limora.bind(report)(sierra, status);
            target[1] = status;
            kiloes['children'] = target;
            ctrled = config.bind(report)(ctrled, kiloes);
            kiloes = new Array(2);
            kiloes[0] = ctrled;
            config = _closure1_slot24;
            ctrled = 43;
            ctrled = papara[ctrled];
            ctrled = vacuum.bind(report)(ctrled);
            vacuum = ctrled.Button;
            ctrled = {'text': 'Watch', 'variant': 'primary-overlay', 'size': 'sm', 'shrink': true, 'grow': false};
            ctrled['onPress'] = cntext;
            ctrled = config.bind(report)(vacuum, ctrled);
            kiloes[1] = ctrled;
            option['children'] = kiloes;
            option = romeon.bind(report)(verify, option);
            golfie[1] = option;
            michal['children'] = golfie;
            offset = tangon.bind(report)(zuuluu, michal);
 1571:
            zuuluu = entity.length;
            michal = 0;
            entity = null;
            if(!(michal !== zuuluu)) { _fun00004_ip = 2325; continue _fun00003 }
 1587:
            tangon = _closure1_slot24;
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 44;
            michal = golfie[michal];
            michal = zuuluu.bind(report)(michal);
            zuuluu = michal.VoiceChannelPost;
            michal = {};
            michal['guild'] = oscard;
            michal['channel'] = result;
            oscard = global;
            golfie = oscard.Date;
            oscard = golfie.now;
            oscard = oscard.bind(golfie)();
            michal['timestamp'] = oscard;
            oscard = '123';
            michal['id'] = oscard;
            michal['onHeaderPress'] = sequen;
            michal['onHeaderLongPress'] = sequen;
            option = _closure1_slot25;
            golfie = _closure1_slot6;
            oscard = {};
            verify = foxtra.content;
            oscard['style'] = verify;
            verify = yankee != record;
            yankee = null;
            if(!verify) { _fun00004_ip = 1808; continue _fun00003 }
 1697:
            kiloes = _closure1_slot24;
            romeon = _closure1_slot0;
            config = _closure1_slot2;
            verify = 40;
            verify = config[verify];
            verify = romeon.bind(report)(verify);
            romeon = verify.Text;
            verify = {'style': null, 'variant': 'text-sm/normal', 'color': 'text-muted', 'lineClamp': 1};
            ctrled = {};
            vacuum = _closure1_slot21;
            ctrled['marginBottom'] = vacuum;
            verify['style'] = ctrled;
            vacuum = _closure1_slot1;
            ctrled = 45;
            ctrled = config[ctrled];
            config = vacuum.bind(report)(ctrled);
            vacuum = config.parseVoiceChannelStatus;
            ctrled = {};
            result = result.id;
            ctrled['channelId'] = result;
            result = true;
            result = vacuum.bind(config)(record, result, ctrled);
            verify['children'] = result;
            yankee = kiloes.bind(report)(romeon, verify);
 1808:
            verify = new Array(4);
            verify[0] = yankee;
            verify[1] = offset;
            romeon = _closure1_slot24;
            yankee = _closure1_slot7;
            offset = {'horizontal': true, 'showsHorizontalScrollIndicator': false};
            kiloes = foxtra.users;
            offset['contentContainerStyle'] = kiloes;
            kiloes = sizing.map;
            backup = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    michal = argFoo;
                    tangon = _closure1_slot18;
                    zuuluu = tangon.getUser;
                    entity = michal.userId;
                    kiloes = zuuluu.bind(tangon)(entity);
                    var _closure3_slot0 = kiloes;
                    entity = null;
                    zuuluu = entity == kiloes;
                    if(zuuluu) { _fun00018_ip = 287; continue _fun00017 }
 44:
                    oscard = _closure1_slot25;
                    verify = _closure1_slot0;
                    sizing = _closure1_slot2;
                    zuuluu = 46;
                    zuuluu = sizing[zuuluu];
                    report = undefined;
                    zuuluu = verify.bind(report)(zuuluu);
                    tangon = zuuluu.PressableOpacity;
                    zuuluu = {};
                    offset = _closure2_slot2;
                    offset = offset.user;
                    zuuluu['style'] = offset;
                    golfie = function() { // Original name: onPress
                        zuuluu = _closure2_slot6;
                        michal = _closure3_slot0;
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    zuuluu['onPress'] = golfie;
                    foxtra = _closure1_slot24;
                    backup = _closure1_slot1;
                    output = 47;
                    golfie = sizing[output];
                    offset = backup.bind(report)(golfie);
                    golfie = {};
                    golfie['user'] = kiloes;
                    romeon = _closure2_slot0;
                    result = romeon.id;
                    golfie['guildId'] = result;
                    output = sizing[output];
                    output = verify.bind(report)(output);
                    output = output.AvatarSizes;
                    output = output.SMALL;
                    golfie['size'] = output;
                    offset = foxtra.bind(report)(offset, golfie);
                    golfie = new Array(2);
                    golfie[0] = offset;
                    offset = _closure1_slot24;
                    option = 40;
                    option = sizing[option];
                    option = verify.bind(report)(option);
                    verify = option.Text;
                    option = {'variant': 'text-sm/semibold', 'color': 'header-primary', 'lineClamp': 2};
                    foxtra = 42;
                    foxtra = sizing[foxtra];
                    backup = backup.bind(report)(foxtra);
                    foxtra = backup.getName;
                    romeon = romeon.id;
                    yankee = _closure2_slot1;
                    yankee = yankee.id;
                    yankee = foxtra.bind(backup)(romeon, yankee, kiloes);
                    option['children'] = yankee;
                    option = offset.bind(report)(verify, option);
                    golfie[1] = option;
                    zuuluu['children'] = golfie;
                    michal = michal.userId;
                    entity = oscard.bind(report)(tangon, zuuluu, michal);
 287:
                    return entity;
                }
            };
            backup = kiloes.bind(sizing)(backup);
            offset['children'] = backup;
            offset = romeon.bind(report)(yankee, offset);
            verify[2] = offset;
            romeon = _closure1_slot25;
            yankee = _closure1_slot6;
            offset = {};
            foxtra = foxtra.actions;
            offset['style'] = foxtra;
            sizing = _closure1_slot24;
            config = _closure1_slot0;
            result = _closure1_slot2;
            backup = 48;
            foxtra = result[backup];
            foxtra = config.bind(report)(foxtra);
            kiloes = foxtra.IconButton;
            foxtra = {};
            foxtra['onPress'] = update;
            update = 41;
            ctrled = result[update];
            ctrled = config.bind(report)(ctrled);
            vacuum = ctrled.intl;
            ctrled = vacuum.string;
            result = result[update];
            result = config.bind(report)(result);
            result = result.t;
            result = result.w4m94+;
            result = ctrled.bind(vacuum)(result);
            foxtra['accessibilityLabel'] = result;
            result = 'lg';
            foxtra['size'] = result;
            ctrled = 'primary-overlay';
            if(!echoed) { _fun00004_ip = 2012; continue _fun00003 }
 2008:
            ctrled = 'secondary';
 2012:
            foxtra['variant'] = ctrled;
            ctrled = _closure1_slot1;
            config = _closure1_slot2;
            if(echoed) { _fun00004_ip = 2036; continue _fun00003 }
 2027:
            echoed = 50;
            echoed = config[echoed];
            _fun00004_ip = 2043; continue _fun00003;
 2036:
            vacuum = 49;
            echoed = config[vacuum];
 2043:
            echoed = ctrled.bind(report)(echoed);
            foxtra['icon'] = echoed;
            kiloes = sizing.bind(report)(kiloes, foxtra);
            foxtra = new Array(3);
            foxtra[0] = kiloes;
            ctrled = _closure1_slot24;
            vacuum = _closure1_slot0;
            echoed = _closure1_slot2;
            kiloes = 43;
            kiloes = echoed[kiloes];
            kiloes = vacuum.bind(report)(kiloes);
            sizing = kiloes.Button;
            kiloes = {'text': null, 'onPress': null, 'grow': true, 'size': 'lg', 'variant': 'active'};
            config = echoed[update];
            config = vacuum.bind(report)(config);
            cntext = config.intl;
            record = cntext.string;
            config = echoed[update];
            config = vacuum.bind(report)(config);
            config = config.t;
            config = config.96ANUF;
            config = record.bind(cntext)(config);
            kiloes['text'] = config;
            kiloes['onPress'] = sequen;
            kiloes = ctrled.bind(report)(sizing, kiloes);
            foxtra[1] = kiloes;
            sizing = _closure1_slot24;
            backup = echoed[backup];
            backup = vacuum.bind(report)(backup);
            kiloes = backup.IconButton;
            backup = {};
            backup['onPress'] = source;
            source = echoed[update];
            source = vacuum.bind(report)(source);
            ctrled = source.intl;
            source = ctrled.string;
            update = echoed[update];
            update = vacuum.bind(report)(update);
            update = update.t;
            update = update.w4m94+;
            update = source.bind(ctrled)(update);
            backup['accessibilityLabel'] = update;
            backup['size'] = result;
            result = 'secondary';
            backup['variant'] = result;
            result = _closure1_slot1;
            output = 51;
            output = echoed[output];
            output = result.bind(report)(output);
            backup['icon'] = output;
            backup = sizing.bind(report)(kiloes, backup);
            foxtra[2] = backup;
            offset['children'] = foxtra;
            offset = romeon.bind(report)(yankee, offset);
            verify[3] = offset;
            oscard['children'] = verify;
            oscard = option.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 2325:
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    foxtra = tangon.StyleSheet;
    golfie = tangon.View;
    var _closure1_slot6 = golfie;
    tangon = tangon.ScrollView;
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot13 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot14 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot15 = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot16 = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot17 = tangon;
    tangon = 14;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot18 = tangon;
    tangon = 15;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot19 = tangon;
    tangon = 16;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot20 = tangon;
    tangon = 17;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    romeon = tangon.ICYMI_MARGIN;
    var _closure1_slot21 = romeon;
    tangon = 18;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticsSections;
    var _closure1_slot22 = golfie;
    tangon = tangon.Permissions;
    var _closure1_slot23 = tangon;
    tangon = 19;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot24 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot25 = tangon;
    tangon = 20;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {};
    verify['paddingHorizontal'] = romeon;
    verify['paddingBottom'] = romeon;
    tangon['content'] = verify;
    verify = {'position': 'relative', 'height': 224, 'marginBottom': null, 'borderRadius': null, 'overflow': 'hidden'};
    verify['marginBottom'] = romeon;
    offset = 21;
    backup = oscard[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.lg;
    verify['borderRadius'] = backup;
    tangon['stream'] = verify;
    verify = {'width': 32, 'height': 32, 'borderRadius': null, 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'};
    backup = oscard[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.md;
    verify['borderRadius'] = backup;
    backup = oscard[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BG_SURFACE_OVERLAY;
    verify['backgroundColor'] = backup;
    tangon['activityIcon'] = verify;
    verify = {};
    sizing = foxtra.absoluteFillObject;
    output = verify;
    foxtra = copyDataProperties(output, sizing);
    tangon['streamPreviewImage'] = verify;
    verify = {'width': '75%', 'height': 224};
    tangon['streamPreviewImagePlaceholder'] = verify;
    verify = {'position': 'absolute', 'bottom': 0, 'left': 0, 'right': 0, 'backgroundColor': 'rgba(0, 0, 0, 0.7)', 'padding': null, 'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center'};
    foxtra = oscard[offset];
    foxtra = yankee.bind(entity)(foxtra);
    foxtra = foxtra.spacing;
    foxtra = foxtra.PX_12;
    verify['padding'] = foxtra;
    tangon['streamOverlay'] = verify;
    verify = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    foxtra = oscard[offset];
    foxtra = yankee.bind(entity)(foxtra);
    foxtra = foxtra.spacing;
    foxtra = foxtra.PX_8;
    verify['gap'] = foxtra;
    tangon['streamLeft'] = verify;
    verify = {};
    tangon['streamInfo'] = verify;
    verify = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    foxtra = oscard[offset];
    foxtra = yankee.bind(entity)(foxtra);
    foxtra = foxtra.spacing;
    foxtra = foxtra.PX_12;
    verify['gap'] = foxtra;
    verify['marginBottom'] = romeon;
    tangon['users'] = verify;
    verify = {'backgroundColor': null, 'paddingHorizontal': null, 'borderRadius': null, 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center', 'justifyContent': 'center', 'gap': 6, 'width': 96, 'maxWidth': 96, 'height': 104, 'maxHeight': 104};
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.BG_BASE_TERTIARY;
    verify['backgroundColor'] = romeon;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.spacing;
    romeon = romeon.PX_12;
    verify['paddingHorizontal'] = romeon;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.radii;
    romeon = romeon.lg;
    verify['borderRadius'] = romeon;
    tangon['user'] = verify;
    verify = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.spacing;
    romeon = romeon.PX_12;
    verify['gap'] = romeon;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.spacing;
    romeon = romeon.PX_16;
    verify['padding'] = romeon;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.BG_SURFACE_OVERLAY;
    verify['backgroundColor'] = romeon;
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.radii;
    offset = offset.xl;
    verify['borderRadius'] = offset;
    tangon['actions'] = verify;
    verify = {'height': 48, 'width': 48};
    tangon['roundButton'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot26 = tangon;
    tangon = 52;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/icymi/native/ICYMIActiveVoiceRow.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: ICYMIActiveVoiceRow
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            michal = argFoo;
            michal = michal.channelId;
            var _closure2_slot0 = michal;
            tangon = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 24;
            oscard = golfie[zuuluu];
            report = undefined;
            offset = tangon.bind(report)(oscard);
            verify = offset.useStateFromStores;
            oscard = _closure1_slot12;
            option = new Array(1);
            option[0] = oscard;
            oscard = function() {
                zuuluu = _closure1_slot12;
                michal = zuuluu.getChannel;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            oscard = verify.bind(offset)(option, oscard);
            var _closure2_slot1 = oscard;
            zuuluu = golfie[zuuluu];
            golfie = tangon.bind(report)(zuuluu);
            tangon = golfie.useStateFromStores;
            option = _closure1_slot14;
            zuuluu = new Array(1);
            zuuluu[0] = option;
            entity = function() {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    zuuluu = _closure1_slot14;
                    michal = zuuluu.getGuild;
                    report = _closure2_slot1;
                    entity = null;
                    report = entity == report;
                    entity = undefined;
                    if(report) { _fun00022_ip = 39; continue _fun00021 }
 30:
                    tangon = _closure2_slot1;
                    entity = tangon.guild_id;
 39:
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                }
            };
            golfie = tangon.bind(golfie)(zuuluu, entity);
            tangon = null;
            zuuluu = tangon == oscard;
            entity = null;
            if(zuuluu) { _fun00020_ip = 156; continue _fun00019 }
 123:
            zuuluu = tangon == golfie;
            entity = null;
            if(zuuluu) { _fun00020_ip = 156; continue _fun00019 }
 132:
            tangon = _closure1_slot24;
            zuuluu = _closure1_slot28;
            michal = {};
            michal['guild'] = golfie;
            michal['channel'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 156:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    michal = function() { // Original name: useEligibleActiveVoiceChannelId
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            oscard = _closure1_slot5;
            tangon = oscard.useEffect;
            zuuluu = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 22;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.fetchUserAffinitiesV2;
                michal = michal.bind(zuuluu)();
                return entity;
            };
            michal = new Array(0);
            michal = tangon.bind(oscard)(zuuluu, michal);
            option = _closure1_slot0;
            verify = _closure1_slot2;
            michal = 23;
            michal = verify[michal];
            golfie = undefined;
            tangon = option.bind(golfie)(michal);
            zuuluu = tangon.useICYMIActiveVoice;
            michal = 'icymi';
            zuuluu = zuuluu.bind(tangon)(michal);
            oscard = _closure1_slot5;
            michal = oscard.useState;
            tangon = null;
            offset = michal.bind(oscard)(tangon);
            oscard = _closure1_slot4;
            michal = 2;
            offset = oscard.bind(golfie)(offset, michal);
            michal = 0;
            michal = offset[michal];
            oscard = 1;
            oscard = offset[oscard];
            var _closure2_slot0 = oscard;
            oscard = 24;
            oscard = verify[oscard];
            verify = option.bind(golfie)(oscard);
            option = verify.useStateFromStores;
            oscard = _closure1_slot20;
            golfie = new Array(1);
            golfie[0] = oscard;
            oscard = function() {
                michal = _closure1_slot20;
                entity = michal.getVersion;
                entity = entity.bind(michal)();
                return entity;
            };
            option = option.bind(verify)(golfie, oscard);
            golfie = _closure1_slot5;
            oscard = golfie.useEffect;
            report = new Array(1);
            report[0] = option;
            entity = function() {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    michal = function() { // Original name: getEligibleVoiceChannels
                        tangon = _closure1_slot19;
                        zuuluu = tangon.getAllVoiceStates;
                        oscard = zuuluu.bind(tangon)();
                        var _closure4_slot0 = oscard;
                        zuuluu = _closure1_slot10;
                        michal = zuuluu.getUserAffinitiesMap;
                        michal = michal.bind(zuuluu)();
                        var _closure4_slot1 = michal;
                        tangon = {};
                        var _closure4_slot2 = tangon;
                        michal = global;
                        report = michal.Object;
                        zuuluu = report.keys;
                        oscard = zuuluu.bind(report)(oscard);
                        report = oscard.forEach;
                        zuuluu = function(argFoo) {
                            zuuluu = _closure4_slot0;
                            michal = argFoo;
                            report = zuuluu[michal];
                            var _closure5_slot0 = report;
                            michal = global;
                            tangon = michal.Object;
                            zuuluu = tangon.keys;
                            michal = report.getVoiceStates;
                            michal = michal.bind(report)();
                            zuuluu = zuuluu.bind(tangon)(michal);
                            michal = zuuluu.forEach;
                            entity = function(argFoo) {
                                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                                    zuuluu = argFoo;
                                    tangon = _closure5_slot0;
                                    michal = tangon.getVoiceStates;
                                    michal = michal.bind(tangon)();
                                    report = michal[zuuluu];
                                    oscard = _closure1_slot12;
                                    tangon = oscard.getChannel;
                                    golfie = tangon.bind(oscard)(zuuluu);
                                    oscard = _closure1_slot15;
                                    tangon = oscard.can;
                                    michal = _closure1_slot23;
                                    michal = michal.CONNECT;
                                    michal = tangon.bind(oscard)(michal, golfie);
                                    if(!michal) { _fun00028_ip = 205; continue _fun00027 }
 75:
                                    tangon = report.map;
                                    michal = function(argFoo) {
                                        entity = argFoo;
                                        entity = entity.user;
                                        entity = entity.id;
                                        return entity;
                                    };
                                    report = tangon.bind(report)(michal);
                                    tangon = report.map;
                                    michal = function(argFoo) {
                                        zuuluu = _closure4_slot1;
                                        michal = zuuluu.get;
                                        entity = argFoo;
                                        entity = michal.bind(zuuluu)(entity);
                                        return entity;
                                    };
                                    report = tangon.bind(report)(michal);
                                    tangon = report.filter;
                                    michal = global;
                                    michal = michal.Boolean;
                                    report = tangon.bind(report)(michal);
                                    tangon = report.sort;
                                    michal = function(argFoo, argBar) {
                                        entity = argFoo;
                                        michal = entity.vcRank;
                                        entity = argBar;
                                        entity = entity.vcRank;
                                        entity = michal - entity;
                                        return entity;
                                    };
                                    oscard = tangon.bind(report)(michal);
                                    report = 0;
                                    michal = oscard[report];
                                    tangon = null;
                                    golfie = tangon == michal;
                                    tangon = undefined;
                                    if(golfie) { _fun00028_ip = 168; continue _fun00027 }
 162:
                                    tangon = michal.vcRank;
 168:
                                    michal = 20;
                                    if(!(tangon < michal)) { _fun00028_ip = 205; continue _fun00027 }
 175:
                                    michal = _closure4_slot2;
                                    tangon = oscard.reduce;
                                    entity = function(argFoo, argBar) {
                                        entity = argBar;
                                        michal = entity.communicationProbability;
                                        entity = argFoo;
                                        entity = entity + michal;
                                        return entity;
                                    };
                                    entity = tangon.bind(oscard)(entity, report);
                                    michal[zuuluu] = entity;
 205:
                                    entity = undefined;
                                    return entity;
                                }
                            };
                            entity = michal.bind(zuuluu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        zuuluu = report.bind(oscard)(zuuluu);
                        zuuluu = michal.Object;
                        michal = zuuluu.entries;
                        tangon = michal.bind(zuuluu)(tangon);
                        zuuluu = tangon.sort;
                        michal = function(argFoo, argBar) {
                            entity = argBar;
                            zuuluu = 1;
                            michal = entity[zuuluu];
                            entity = argFoo;
                            entity = entity[zuuluu];
                            entity = michal - entity;
                            return entity;
                        };
                        zuuluu = zuuluu.bind(tangon)(michal);
                        michal = zuuluu.map;
                        entity = function(argFoo) {
                            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                                entity = argFoo;
                                michal = entity[Symbol.iterator];
                                entity = michal().next;
                                tangon = entity().value;
                                zuuluu = michal;
                                entity = undefined;
                                zuuluu = zuuluu === entity;
                                if(zuuluu) { _fun00030_ip = 25; continue _fun00029 }
 22:
                                entity = tangon;
 25:
                                if(zuuluu) { _fun00030_ip = 31; continue _fun00029 }
 28:
                                michal.return();
 31:
                                return entity;
                            }
                        };
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    entity = undefined;
                    tangon = michal.bind(entity)();
                    zuuluu = tangon.length;
                    michal = 0;
                    if(!(zuuluu > michal)) { _fun00026_ip = 42; continue _fun00025 }
 26:
                    zuuluu = _closure2_slot0;
                    michal = tangon[michal];
                    michal = zuuluu.bind(entity)(michal);
 42:
                    return entity;
                }
            };
            entity = oscard.bind(golfie)(entity, report);
            entity = null;
            if(!zuuluu) { _fun00024_ip = 203; continue _fun00023 }
 191:
            zuuluu = tangon != michal;
            entity = null;
            if(!zuuluu) { _fun00024_ip = 203; continue _fun00023 }
 200:
            entity = michal;
 203:
            return entity;
        }
    };
    zuuluu['useEligibleActiveVoiceChannelId'] = michal;
    return entity;
})();