// app/modules/main_tabs_v2/native/tabs/gravity/ICYMIActiveVoiceRow.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _handleVoiceOrStageChannelConnectPress
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    report = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00002_ip = 147; continue _fun00001 }
 13:
                    mike = report.isGuildStageVoice;
                    tango = mike.bind(report)();
                    golf = _closure1_slot0;
                    mike = _closure1_slot2;
                    zulu = 26;
                    oscar = mike[zulu];
                    zulu = undefined;
                    oscar = golf.bind(zulu)(oscar);
                    if(tango) { _fun00002_ip = 102; continue _fun00001 }
 51:
                    tango = 27;
                    golf = mike[tango];
                    tango = mike.paths;
                    tango = oscar.bind(zulu)(golf, tango);
                    SaveGenerator(address=73);
 71:
                    return tango;
 73:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(golf) { _fun00002_ip = 99; continue _fun00001 }
 79:
                    options = tango.openGuildVoiceModal;
                    golf = 'Channel List';
                    golf = options.bind(zulu)(report, golf);
                    _fun00002_ip = 141; continue _fun00001;
 99:
                    return tango;
 102:
                    tango = 25;
                    tango = mike[tango];
                    mike = mike.paths;
                    mike = oscar.bind(zulu)(tango, mike);
                    SaveGenerator(address=124);
 122:
                    return mike;
 124:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00002_ip = 144; continue _fun00001 }
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
        _closure1_slot27 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot27 = entity;
    entity = function(argFoo) { // Original name: ICYMIActiveVoiceRowInner
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            oscar = entity.guild;
            var _closure2_slot0 = oscar;
            result = entity.channel;
            var _closure2_slot1 = result;
            report = undefined;
            var _closure2_slot5 = report;
            var _closure2_slot6 = report;
            entity = _closure1_slot26;
            foxtrot = entity.bind(report)();
            var _closure2_slot2 = foxtrot;
            zulu = _closure1_slot0;
            options = _closure1_slot2;
            golf = 24;
            entity = options[golf];
            verify = zulu.bind(report)(entity);
            tango = verify.useStateFromStoresArray;
            entity = _closure1_slot20;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                zulu = _closure1_slot20;
                mike = zulu.getVoiceStatesForChannel;
                entity = _closure2_slot1;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = tango.bind(verify)(mike, entity);
            var _closure2_slot3 = entity;
            mike = 28;
            mike = options[mike];
            verify = zulu.bind(report)(mike);
            tango = verify.useSubscribeGuildMembers;
            mike = {};
            yankee = oscar.id;
            romeo = entity.map;
            offset = function(argFoo) {
                entity = argFoo;
                entity = entity.user;
                entity = entity.id;
                return entity;
            };
            offset = romeo.bind(entity)(offset);
            mike[yankee] = offset;
            mike = tango.bind(verify)(mike);
            mike = options[golf];
            yankee = zulu.bind(report)(mike);
            offset = yankee.useStateFromStoresArray;
            mike = _closure1_slot14;
            verify = new Array(2);
            verify[0] = mike;
            mike = _closure1_slot11;
            verify[1] = mike;
            mike = oscar.id;
            tango = new Array(2);
            tango[0] = mike;
            tango[1] = entity;
            mike = function() {
                tango = _closure2_slot3;
                zulu = tango.map;
                mike = function(argFoo) {
                    tango = _closure1_slot14;
                    zulu = tango.getMember;
                    entity = _closure2_slot0;
                    mike = entity.id;
                    entity = argFoo;
                    entity = entity.user;
                    entity = entity.id;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                tango = zulu.bind(tango)(mike);
                zulu = tango.filter;
                mike = global;
                mike = mike.Boolean;
                zulu = zulu.bind(tango)(mike);
                mike = zulu.sort;
                entity = function(argFoo, argBar) {
                    tango = _closure1_slot11;
                    zulu = tango.compare;
                    entity = argFoo;
                    mike = entity.userId;
                    entity = argBar;
                    entity = entity.userId;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            sizing = offset.bind(yankee)(verify, mike, tango);
            mike = options[golf];
            offset = zulu.bind(report)(mike);
            verify = offset.useStateFromStores;
            mike = _closure1_slot18;
            tango = new Array(2);
            tango[0] = mike;
            mike = _closure1_slot13;
            tango[1] = mike;
            mike = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zulu = _closure1_slot18;
                    entity = zulu.getChannelId;
                    tango = entity.bind(zulu)();
                    entity = null;
                    zulu = entity != tango;
                    if(!zulu) { _fun00006_ip = 40; continue _fun00005 }
 26:
                    zulu = _closure1_slot13;
                    mike = zulu.getChannel;
                    entity = mike.bind(zulu)(tango);
 40:
                    return entity;
                }
            };
            verify = verify.bind(offset)(tango, mike);
            tango = _closure1_slot1;
            mike = 29;
            mike = options[mike];
            mike = tango.bind(report)(mike);
            mike = mike.bind(report)(verify);
            echo = mike.selfMute;
            mike = options[golf];
            offset = zulu.bind(report)(mike);
            verify = offset.useStateFromStores;
            mike = _closure1_slot12;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tango = _closure2_slot3;
                    zulu = tango.find;
                    entity = function(argFoo) {
                        entity = argFoo;
                        entity = entity.voiceState;
                        entity = entity.selfStream;
                        return entity;
                    };
                    zulu = zulu.bind(tango)(entity);
                    entity = null;
                    tango = entity == zulu;
                    if(tango) { _fun00008_ip = 73; continue _fun00007 }
 35:
                    report = _closure1_slot12;
                    tango = report.getStreamForUser;
                    zulu = zulu.user;
                    zulu = zulu.id;
                    mike = _closure2_slot0;
                    mike = mike.id;
                    entity = tango.bind(report)(zulu, mike);
 73:
                    return entity;
                }
            };
            mike = verify.bind(offset)(zulu, mike);
            var _closure2_slot4 = mike;
            zulu = 30;
            zulu = options[zulu];
            verify = tango.bind(report)(zulu);
            yankee = null;
            zulu = yankee == mike;
            options = undefined;
            if(zulu) { _fun00004_ip = 366; continue _fun00003 }
 361:
            options = mike.guildId;
 366:
            zulu = yankee == mike;
            tango = undefined;
            if(zulu) { _fun00004_ip = 380; continue _fun00003 }
 375:
            tango = mike.channelId;
 380:
            offset = yankee == mike;
            zulu = undefined;
            if(offset) { _fun00004_ip = 395; continue _fun00003 }
 389:
            zulu = mike.ownerId;
 395:
            zulu = verify.bind(report)(options, tango, zulu);
            romeo = zulu.previewUrl;
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            options = zulu[golf];
            kilo = tango.bind(report)(options);
            offset = kilo.useStateFromStores;
            options = _closure1_slot19;
            verify = new Array(1);
            verify[0] = options;
            options = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zulu = _closure1_slot19;
                    mike = zulu.getUser;
                    report = _closure2_slot4;
                    entity = null;
                    report = entity == report;
                    entity = undefined;
                    if(report) { _fun00010_ip = 41; continue _fun00009 }
 31:
                    tango = _closure2_slot4;
                    entity = tango.ownerId;
 41:
                    entity = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            variable45 = offset.bind(kilo)(verify, options);
            zulu = zulu[golf];
            options = tango.bind(report)(zulu);
            golf = options.useStateFromStores;
            zulu = _closure1_slot17;
            tango = new Array(2);
            tango[0] = zulu;
            zulu = _closure1_slot8;
            tango[1] = zulu;
            zulu = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 31;
                    mike = mike[entity];
                    entity = undefined;
                    report = zulu.bind(entity)(mike);
                    zulu = report.getStreamerActivity;
                    mike = _closure2_slot4;
                    entity = _closure1_slot17;
                    zulu = zulu.bind(report)(mike, entity);
                    report = null;
                    mike = report != zulu;
                    entity = null;
                    if(!mike) { _fun00012_ip = 115; continue _fun00011 }
 59:
                    mike = zulu.application_id;
                    if(!(report == mike)) { _fun00012_ip = 91; continue _fun00011 }
 69:
                    oscar = _closure1_slot8;
                    report = oscar.getApplicationByName;
                    mike = zulu.name;
                    mike = report.bind(oscar)(mike);
                    _fun00012_ip = 112; continue _fun00011;
 91:
                    report = _closure1_slot8;
                    tango = report.getApplication;
                    zulu = zulu.application_id;
                    mike = tango.bind(report)(zulu);
 112:
                    entity = mike;
 115:
                    return entity;
                }
            };
            vacuum = golf.bind(options)(tango, zulu);
            zulu = yankee != mike;
            if(!zulu) { _fun00004_ip = 513; continue _fun00003 }
 509:
            zulu = yankee != variable45;
 513:
            _closure2_slot5 = zulu;
            options = _closure1_slot5;
            golf = options.useEffect;
            tango = new Array(4);
            tango[0] = zulu;
            verify = yankee == mike;
            zulu = undefined;
            if(verify) { _fun00004_ip = 548; continue _fun00003 }
 543:
            zulu = mike.guildId;
 548:
            tango[1] = zulu;
            verify = yankee == mike;
            zulu = undefined;
            if(verify) { _fun00004_ip = 566; continue _fun00003 }
 561:
            zulu = mike.channelId;
 566:
            tango[2] = zulu;
            verify = yankee == mike;
            zulu = undefined;
            if(verify) { _fun00004_ip = 585; continue _fun00003 }
 579:
            zulu = mike.ownerId;
 585:
            tango[3] = zulu;
            zulu = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    mike = _closure2_slot5;
                    if(!mike) { _fun00014_ip = 68; continue _fun00013 }
 10:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 32;
                    zulu = zulu[mike];
                    mike = undefined;
                    report = tango.bind(mike)(zulu);
                    tango = report.fetchStreamPreview;
                    entity = _closure2_slot4;
                    zulu = entity.guildId;
                    mike = entity.channelId;
                    entity = entity.ownerId;
                    entity = tango.bind(report)(zulu, mike, entity);
 68:
                    entity = undefined;
                    return entity;
                }
            };
            zulu = golf.bind(options)(zulu, tango);
            tango = _closure1_slot9;
            zulu = tango.getChannelStatus;
            record = zulu.bind(tango)(result);
            options = _closure1_slot5;
            golf = options.useCallback;
            zulu = result.id;
            tango = new Array(1);
            tango[0] = zulu;
            zulu = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 33;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.selectVoiceChannel;
                mike = _closure2_slot1;
                mike = mike.id;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            sequence = golf.bind(options)(zulu, tango);
            options = _closure1_slot5;
            golf = options.useCallback;
            tango = new Array(2);
            tango[0] = mike;
            zulu = result.id;
            tango[1] = zulu;
            zulu = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    tango = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 33;
                    mike = mike[entity];
                    entity = undefined;
                    oscar = tango.bind(entity)(mike);
                    report = oscar.selectVoiceChannel;
                    tango = _closure2_slot1;
                    tango = tango.id;
                    tango = report.bind(oscar)(tango);
                    report = _closure2_slot4;
                    tango = null;
                    if(!(tango != report)) { _fun00016_ip = 103; continue _fun00015 }
 58:
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    zulu = 32;
                    zulu = report[zulu];
                    report = tango.bind(entity)(zulu);
                    tango = report.watchStream;
                    zulu = _closure2_slot4;
                    mike = {};
                    oscar = true;
                    mike['forceMultiple'] = oscar;
                    mike = tango.bind(report)(zulu, mike);
 103:
                    return entity;
                }
            };
            context = golf.bind(options)(zulu, tango);
            options = _closure1_slot5;
            golf = options.useCallback;
            tango = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 34;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.toggleSelfMute;
                mike = {};
                report = _closure1_slot22;
                report = report.ACCOUNT_PANEL;
                mike['location'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            zulu = new Array(0);
            update = golf.bind(options)(tango, zulu);
            options = _closure1_slot5;
            golf = options.useCallback;
            tango = new Array(1);
            tango[0] = result;
            zulu = function() {
                mike = _closure2_slot1;
                zulu = function() { // Original name: handleVoiceOrStageChannelConnectPress
                    entity = undefined;
                    tango = _closure1_slot27;
                    zulu = tango.apply;
                    entity = arguments;
                    mike = entity;
                    entity = this;
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                };
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                zulu = !zulu;
                tango = _closure1_slot1;
                report = _closure1_slot2;
                zulu = 35;
                zulu = report[zulu];
                report = tango.bind(entity)(zulu);
                tango = report.updateChatOpen;
                zulu = mike.id;
                mike = true;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            source = golf.bind(options)(zulu, tango);
            options = _closure1_slot5;
            golf = options.useCallback;
            zulu = result.id;
            tango = new Array(1);
            tango[0] = zulu;
            zulu = function(argFoo) {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 36;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = {};
                tango = argFoo;
                tango = tango.id;
                mike['userId'] = tango;
                tango = _closure2_slot1;
                tango = tango.id;
                mike['channelId'] = tango;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            zulu = golf.bind(options)(zulu, tango);
            _closure2_slot6 = zulu;
            zulu = yankee != vacuum;
            lima = null;
            if(!zulu) { _fun00004_ip = 821; continue _fun00003 }
 795:
            tango = yankee == vacuum;
            zulu = undefined;
            if(tango) { _fun00004_ip = 818; continue _fun00003 }
 804:
            golf = vacuum.getIconSource;
            tango = 48;
            zulu = golf.bind(vacuum)(tango);
 818:
            lima = zulu;
 821:
            mike = yankee != mike;
            offset = null;
            if(!mike) { _fun00004_ip = 1571; continue _fun00003 }
 833:
            mike = yankee != variable45;
            offset = null;
            if(!mike) { _fun00004_ip = 1571; continue _fun00003 }
 845:
            tango = _closure1_slot25;
            zulu = _closure1_slot6;
            mike = {};
            golf = foxtrot.stream;
            mike['style'] = golf;
            verify = _closure1_slot24;
            options = _closure1_slot1;
            golf = _closure1_slot2;
            whiskey = 37;
            golf = golf[whiskey];
            options = options.bind(report)(golf);
            golf = {};
            if(!(yankee == romeo)) { _fun00004_ip = 917; continue _fun00003 }
 895:
            control = _closure1_slot1;
            config = _closure1_slot2;
            kilo = 38;
            kilo = config[kilo];
            kilo = control.bind(report)(kilo);
            _fun00004_ip = 927; continue _fun00003;
 917:
            control = {};
            control['uri'] = romeo;
            kilo = control;
 927:
            golf['source'] = kilo;
            control = _closure1_slot1;
            config = _closure1_slot2;
            kilo = 38;
            kilo = config[kilo];
            kilo = control.bind(report)(kilo);
            golf['placeholder'] = kilo;
            if(!(yankee == romeo)) { _fun00004_ip = 968; continue _fun00003 }
 960:
            kilo = foxtrot.streamPreviewImagePlaceholder;
            _fun00004_ip = 974; continue _fun00003;
 968:
            kilo = foxtrot.streamPreviewImage;
 974:
            golf['style'] = kilo;
            kilo = yankee != romeo;
            romeo = 'contain';
            if(!kilo) { _fun00004_ip = 993; continue _fun00003 }
 989:
            romeo = 'cover';
 993:
            golf['resizeMode'] = romeo;
            options = verify.bind(report)(options, golf);
            golf = new Array(2);
            golf[0] = options;
            romeo = _closure1_slot25;
            verify = _closure1_slot6;
            options = {};
            kilo = foxtrot.streamOverlay;
            options['style'] = kilo;
            config = _closure1_slot25;
            control = _closure1_slot6;
            kilo = {};
            papa = foxtrot.streamLeft;
            kilo['style'] = papa;
            if(!(yankee == lima)) { _fun00004_ip = 1138; continue _fun00003 }
 1056:
            status = _closure1_slot24;
            target = _closure1_slot6;
            papa = {};
            sierra = foxtrot.activityIcon;
            papa['style'] = sierra;
            quebec = _closure1_slot24;
            equality = _closure1_slot0;
            variable36 = _closure1_slot2;
            sierra = 39;
            sierra = variable36[sierra];
            sierra = equality.bind(report)(sierra);
            equality = sierra.ScreenIcon;
            sierra = {'size': 'sm', 'color': 'interactive-active'};
            sierra = quebec.bind(report)(equality, sierra);
            papa['children'] = sierra;
            papa = status.bind(report)(target, papa);
            _fun00004_ip = 1181; continue _fun00003;
 1138:
            sierra = _closure1_slot24;
            status = _closure1_slot1;
            target = _closure1_slot2;
            target = target[whiskey];
            status = status.bind(report)(target);
            target = {};
            target['source'] = lima;
            lima = foxtrot.activityIcon;
            target['style'] = lima;
            papa = sierra.bind(report)(status, target);
 1181:
            target = new Array(2);
            target[0] = papa;
            lima = _closure1_slot25;
            sierra = _closure1_slot6;
            status = {};
            papa = foxtrot.streamInfo;
            status['style'] = papa;
            whiskey = yankee != vacuum;
            papa = null;
            if(!whiskey) { _fun00004_ip = 1276; continue _fun00003 }
 1218:
            quebec = _closure1_slot24;
            equality = _closure1_slot0;
            variable36 = _closure1_slot2;
            whiskey = 40;
            whiskey = variable36[whiskey];
            whiskey = equality.bind(report)(whiskey);
            equality = whiskey.Text;
            whiskey = {'variant': 'text-sm/bold', 'color': 'header-primary'};
            variable36 = vacuum.name;
            whiskey['children'] = variable36;
            papa = quebec.bind(report)(equality, whiskey);
 1276:
            whiskey = new Array(2);
            whiskey[0] = papa;
            variable36 = _closure1_slot24;
            equality = _closure1_slot0;
            quebec = _closure1_slot2;
            papa = 40;
            papa = quebec[papa];
            papa = equality.bind(report)(papa);
            quebec = papa.Text;
            equality = {};
            papa = yankee != vacuum;
            vacuum = 'text-xs/semibold';
            if(!papa) { _fun00004_ip = 1334; continue _fun00003 }
 1328:
            vacuum = 'text-xs/normal';
 1334:
            equality['variant'] = vacuum;
            vacuum = 'header-primary';
            equality['color'] = vacuum;
            vacuum = _closure1_slot0;
            papa = _closure1_slot2;
            variable37 = 41;
            variable38 = papa[variable37];
            variable38 = vacuum.bind(report)(variable38);
            variable40 = variable38.intl;
            variable39 = variable40.format;
            variable37 = papa[variable37];
            variable37 = vacuum.bind(report)(variable37);
            variable37 = variable37.t;
            variable38 = variable37.0QO34e;
            variable37 = {};
            variable42 = _closure1_slot1;
            variable41 = 42;
            variable41 = papa[variable41];
            variable44 = variable42.bind(report)(variable41);
            variable43 = variable44.getName;
            variable42 = oscar.id;
            variable41 = result.id;
            variable41 = variable43.bind(variable44)(variable42, variable41, variable45);
            variable37['username'] = variable41;
            variable37 = variable39.bind(variable40)(variable38, variable37);
            equality['children'] = variable37;
            equality = variable36.bind(report)(quebec, equality);
            whiskey[1] = equality;
            status['children'] = whiskey;
            status = lima.bind(report)(sierra, status);
            target[1] = status;
            kilo['children'] = target;
            control = config.bind(report)(control, kilo);
            kilo = new Array(2);
            kilo[0] = control;
            config = _closure1_slot24;
            control = 43;
            control = papa[control];
            control = vacuum.bind(report)(control);
            vacuum = control.Button;
            control = {'text': 'Watch', 'variant': 'primary-overlay', 'size': 'sm', 'shrink': true, 'grow': false};
            control['onPress'] = context;
            control = config.bind(report)(vacuum, control);
            kilo[1] = control;
            options['children'] = kilo;
            options = romeo.bind(report)(verify, options);
            golf[1] = options;
            mike['children'] = golf;
            offset = tango.bind(report)(zulu, mike);
 1571:
            zulu = entity.length;
            mike = 0;
            entity = null;
            if(!(mike !== zulu)) { _fun00004_ip = 2321; continue _fun00003 }
 1587:
            tango = _closure1_slot24;
            zulu = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 44;
            mike = golf[mike];
            mike = zulu.bind(report)(mike);
            zulu = mike.VoiceChannelPost;
            mike = {};
            mike['guild'] = oscar;
            mike['channel'] = result;
            oscar = global;
            golf = oscar.Date;
            oscar = golf.now;
            oscar = oscar.bind(golf)();
            mike['timestamp'] = oscar;
            oscar = '123';
            mike['id'] = oscar;
            mike['onHeaderPress'] = sequence;
            mike['onHeaderLongPress'] = sequence;
            options = _closure1_slot25;
            golf = _closure1_slot6;
            oscar = {};
            verify = foxtrot.content;
            oscar['style'] = verify;
            verify = yankee != record;
            yankee = null;
            if(!verify) { _fun00004_ip = 1808; continue _fun00003 }
 1697:
            kilo = _closure1_slot24;
            romeo = _closure1_slot0;
            config = _closure1_slot2;
            verify = 40;
            verify = config[verify];
            verify = romeo.bind(report)(verify);
            romeo = verify.Text;
            verify = {'style': null, 'variant': 'text-sm/normal', 'color': 'text-muted', 'lineClamp': 1};
            control = {};
            vacuum = _closure1_slot21;
            control['marginBottom'] = vacuum;
            verify['style'] = control;
            vacuum = _closure1_slot1;
            control = 45;
            control = config[control];
            config = vacuum.bind(report)(control);
            vacuum = config.parseVoiceChannelStatus;
            control = {};
            result = result.id;
            control['channelId'] = result;
            result = true;
            result = vacuum.bind(config)(record, result, control);
            verify['children'] = result;
            yankee = kilo.bind(report)(romeo, verify);
 1808:
            verify = new Array(4);
            verify[0] = yankee;
            verify[1] = offset;
            romeo = _closure1_slot24;
            yankee = _closure1_slot7;
            offset = {'horizontal': true, 'showsHorizontalScrollIndicator': false};
            kilo = foxtrot.users;
            offset['contentContainerStyle'] = kilo;
            kilo = sizing.map;
            backup = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    mike = argFoo;
                    tango = _closure1_slot19;
                    zulu = tango.getUser;
                    entity = mike.userId;
                    kilo = zulu.bind(tango)(entity);
                    var _closure3_slot0 = kilo;
                    entity = null;
                    zulu = entity == kilo;
                    if(zulu) { _fun00018_ip = 283; continue _fun00017 }
 44:
                    oscar = _closure1_slot25;
                    verify = _closure1_slot0;
                    sizing = _closure1_slot2;
                    zulu = 46;
                    zulu = sizing[zulu];
                    report = undefined;
                    zulu = verify.bind(report)(zulu);
                    tango = zulu.PressableOpacity;
                    zulu = {};
                    offset = _closure2_slot2;
                    offset = offset.user;
                    zulu['style'] = offset;
                    golf = function() { // Original name: onPress
                        zulu = _closure2_slot6;
                        mike = _closure3_slot0;
                        entity = undefined;
                        entity = zulu.bind(entity)(mike);
                        return entity;
                    };
                    zulu['onPress'] = golf;
                    foxtrot = _closure1_slot24;
                    backup = _closure1_slot1;
                    output = 47;
                    golf = sizing[output];
                    offset = backup.bind(report)(golf);
                    golf = {};
                    golf['user'] = kilo;
                    romeo = _closure2_slot0;
                    result = romeo.id;
                    golf['guildId'] = result;
                    output = sizing[output];
                    output = verify.bind(report)(output);
                    output = output.AvatarSizes;
                    output = output.SMALL;
                    golf['size'] = output;
                    offset = foxtrot.bind(report)(offset, golf);
                    golf = new Array(2);
                    golf[0] = offset;
                    offset = _closure1_slot24;
                    options = 40;
                    options = sizing[options];
                    options = verify.bind(report)(options);
                    verify = options.Text;
                    options = {'variant': 'text-sm/semibold', 'color': 'header-primary', 'lineClamp': 2};
                    foxtrot = 42;
                    foxtrot = sizing[foxtrot];
                    backup = backup.bind(report)(foxtrot);
                    foxtrot = backup.getName;
                    romeo = romeo.id;
                    yankee = _closure2_slot1;
                    yankee = yankee.id;
                    yankee = foxtrot.bind(backup)(romeo, yankee, kilo);
                    options['children'] = yankee;
                    options = offset.bind(report)(verify, options);
                    golf[1] = options;
                    zulu['children'] = golf;
                    mike = mike.userId;
                    entity = oscar.bind(report)(tango, zulu, mike);
 283:
                    return entity;
                }
            };
            backup = kilo.bind(sizing)(backup);
            offset['children'] = backup;
            offset = romeo.bind(report)(yankee, offset);
            verify[2] = offset;
            romeo = _closure1_slot25;
            yankee = _closure1_slot6;
            offset = {};
            foxtrot = foxtrot.actions;
            offset['style'] = foxtrot;
            sizing = _closure1_slot24;
            config = _closure1_slot0;
            result = _closure1_slot2;
            backup = 48;
            foxtrot = result[backup];
            foxtrot = config.bind(report)(foxtrot);
            kilo = foxtrot.IconButton;
            foxtrot = {};
            foxtrot['onPress'] = update;
            update = 41;
            control = result[update];
            control = config.bind(report)(control);
            vacuum = control.intl;
            control = vacuum.string;
            result = result[update];
            result = config.bind(report)(result);
            result = result.t;
            result = result.w4m94+;
            result = control.bind(vacuum)(result);
            foxtrot['accessibilityLabel'] = result;
            result = 'lg';
            foxtrot['size'] = result;
            control = 'primary-overlay';
            if(!echo) { _fun00004_ip = 2008; continue _fun00003 }
 2004:
            control = 'secondary';
 2008:
            foxtrot['variant'] = control;
            control = _closure1_slot1;
            config = _closure1_slot2;
            if(echo) { _fun00004_ip = 2032; continue _fun00003 }
 2023:
            echo = 50;
            echo = config[echo];
            _fun00004_ip = 2039; continue _fun00003;
 2032:
            vacuum = 49;
            echo = config[vacuum];
 2039:
            echo = control.bind(report)(echo);
            foxtrot['icon'] = echo;
            kilo = sizing.bind(report)(kilo, foxtrot);
            foxtrot = new Array(3);
            foxtrot[0] = kilo;
            control = _closure1_slot24;
            vacuum = _closure1_slot0;
            echo = _closure1_slot2;
            kilo = 43;
            kilo = echo[kilo];
            kilo = vacuum.bind(report)(kilo);
            sizing = kilo.Button;
            kilo = {'text': null, 'onPress': null, 'grow': true, 'size': 'lg', 'variant': 'active'};
            config = echo[update];
            config = vacuum.bind(report)(config);
            context = config.intl;
            record = context.string;
            config = echo[update];
            config = vacuum.bind(report)(config);
            config = config.t;
            config = config.96ANUF;
            config = record.bind(context)(config);
            kilo['text'] = config;
            kilo['onPress'] = sequence;
            kilo = control.bind(report)(sizing, kilo);
            foxtrot[1] = kilo;
            sizing = _closure1_slot24;
            backup = echo[backup];
            backup = vacuum.bind(report)(backup);
            kilo = backup.IconButton;
            backup = {};
            backup['onPress'] = source;
            source = echo[update];
            source = vacuum.bind(report)(source);
            control = source.intl;
            source = control.string;
            update = echo[update];
            update = vacuum.bind(report)(update);
            update = update.t;
            update = update.w4m94+;
            update = source.bind(control)(update);
            backup['accessibilityLabel'] = update;
            backup['size'] = result;
            result = 'secondary';
            backup['variant'] = result;
            result = _closure1_slot1;
            output = 51;
            output = echo[output];
            output = result.bind(report)(output);
            backup['icon'] = output;
            backup = sizing.bind(report)(kilo, backup);
            foxtrot[2] = backup;
            offset['children'] = foxtrot;
            offset = romeo.bind(report)(yankee, offset);
            verify[3] = offset;
            oscar['children'] = verify;
            oscar = options.bind(report)(golf, oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 2321:
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = yankee.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    foxtrot = tango.StyleSheet;
    golf = tango.View;
    var _closure1_slot6 = golf;
    tango = tango.ScrollView;
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot11 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot12 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot13 = tango;
    tango = 10;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot14 = tango;
    tango = 11;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot15 = tango;
    tango = 12;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot16 = tango;
    tango = 13;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot17 = tango;
    tango = 14;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot18 = tango;
    tango = 15;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot19 = tango;
    tango = 16;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot20 = tango;
    tango = 17;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    romeo = tango.ICYMI_MARGIN;
    var _closure1_slot21 = romeo;
    tango = 18;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.AnalyticsSections;
    var _closure1_slot22 = golf;
    tango = tango.Permissions;
    var _closure1_slot23 = tango;
    tango = 19;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot24 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot25 = tango;
    tango = 20;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    verify['paddingHorizontal'] = romeo;
    verify['paddingBottom'] = romeo;
    tango['content'] = verify;
    verify = {'position': 'relative', 'height': 224, 'marginBottom': null, 'borderRadius': null, 'overflow': 'hidden'};
    verify['marginBottom'] = romeo;
    offset = 21;
    backup = oscar[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.lg;
    verify['borderRadius'] = backup;
    tango['stream'] = verify;
    verify = {'width': 32, 'height': 32, 'borderRadius': null, 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'};
    backup = oscar[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.md;
    verify['borderRadius'] = backup;
    backup = oscar[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BG_SURFACE_OVERLAY;
    verify['backgroundColor'] = backup;
    tango['activityIcon'] = verify;
    verify = {};
    sizing = foxtrot.absoluteFillObject;
    output = verify;
    foxtrot = copyDataProperties(output, sizing);
    tango['streamPreviewImage'] = verify;
    verify = {'width': '75%', 'height': 224};
    tango['streamPreviewImagePlaceholder'] = verify;
    verify = {'position': 'absolute', 'bottom': 0, 'left': 0, 'right': 0, 'backgroundColor': 'rgba(0, 0, 0, 0.7)', 'padding': null, 'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center'};
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.spacing;
    foxtrot = foxtrot.PX_12;
    verify['padding'] = foxtrot;
    tango['streamOverlay'] = verify;
    verify = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.spacing;
    foxtrot = foxtrot.PX_8;
    verify['gap'] = foxtrot;
    tango['streamLeft'] = verify;
    verify = {};
    tango['streamInfo'] = verify;
    verify = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.spacing;
    foxtrot = foxtrot.PX_12;
    verify['gap'] = foxtrot;
    verify['marginBottom'] = romeo;
    tango['users'] = verify;
    verify = {'backgroundColor': null, 'paddingHorizontal': null, 'borderRadius': null, 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center', 'justifyContent': 'center', 'gap': 6, 'width': 96, 'maxWidth': 96, 'height': 104, 'maxHeight': 104};
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.BG_BASE_TERTIARY;
    verify['backgroundColor'] = romeo;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_12;
    verify['paddingHorizontal'] = romeo;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.radii;
    romeo = romeo.lg;
    verify['borderRadius'] = romeo;
    tango['user'] = verify;
    verify = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_12;
    verify['gap'] = romeo;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_16;
    verify['padding'] = romeo;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.BG_SURFACE_OVERLAY;
    verify['backgroundColor'] = romeo;
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.radii;
    offset = offset.xl;
    verify['borderRadius'] = offset;
    tango['actions'] = verify;
    verify = {'height': 48, 'width': 48};
    tango['roundButton'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot26 = tango;
    tango = 52;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/tabs/gravity/ICYMIActiveVoiceRow.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: ICYMIActiveVoiceRow
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            mike = argFoo;
            mike = mike.channelId;
            var _closure2_slot0 = mike;
            tango = _closure1_slot0;
            golf = _closure1_slot2;
            zulu = 24;
            oscar = golf[zulu];
            report = undefined;
            offset = tango.bind(report)(oscar);
            verify = offset.useStateFromStores;
            oscar = _closure1_slot13;
            options = new Array(1);
            options[0] = oscar;
            oscar = function() {
                zulu = _closure1_slot13;
                mike = zulu.getChannel;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            oscar = verify.bind(offset)(options, oscar);
            var _closure2_slot1 = oscar;
            zulu = golf[zulu];
            golf = tango.bind(report)(zulu);
            tango = golf.useStateFromStores;
            options = _closure1_slot15;
            zulu = new Array(1);
            zulu[0] = options;
            entity = function() {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    zulu = _closure1_slot15;
                    mike = zulu.getGuild;
                    report = _closure2_slot1;
                    entity = null;
                    report = entity == report;
                    entity = undefined;
                    if(report) { _fun00022_ip = 39; continue _fun00021 }
 30:
                    tango = _closure2_slot1;
                    entity = tango.guild_id;
 39:
                    entity = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            golf = tango.bind(golf)(zulu, entity);
            tango = null;
            zulu = tango == oscar;
            entity = null;
            if(zulu) { _fun00020_ip = 156; continue _fun00019 }
 123:
            zulu = tango == golf;
            entity = null;
            if(zulu) { _fun00020_ip = 156; continue _fun00019 }
 132:
            tango = _closure1_slot24;
            zulu = _closure1_slot28;
            mike = {};
            mike['guild'] = golf;
            mike['channel'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 156:
            return entity;
        }
    };
    zulu['default'] = tango;
    mike = function() { // Original name: useEligibleActiveVoiceChannelId
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            oscar = _closure1_slot5;
            tango = oscar.useEffect;
            zulu = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 22;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.fetchUserAffinitiesV2;
                mike = mike.bind(zulu)();
                return entity;
            };
            mike = new Array(0);
            mike = tango.bind(oscar)(zulu, mike);
            options = _closure1_slot0;
            verify = _closure1_slot2;
            mike = 23;
            mike = verify[mike];
            golf = undefined;
            tango = options.bind(golf)(mike);
            zulu = tango.useICYMIActiveVoice;
            mike = 'icymi';
            zulu = zulu.bind(tango)(mike);
            oscar = _closure1_slot5;
            mike = oscar.useState;
            tango = null;
            offset = mike.bind(oscar)(tango);
            oscar = _closure1_slot4;
            mike = 2;
            offset = oscar.bind(golf)(offset, mike);
            mike = 0;
            mike = offset[mike];
            oscar = 1;
            oscar = offset[oscar];
            var _closure2_slot0 = oscar;
            oscar = 24;
            oscar = verify[oscar];
            verify = options.bind(golf)(oscar);
            options = verify.useStateFromStores;
            oscar = _closure1_slot10;
            golf = new Array(1);
            golf[0] = oscar;
            oscar = function() {
                mike = _closure1_slot10;
                entity = mike.getVersion;
                entity = entity.bind(mike)();
                return entity;
            };
            options = options.bind(verify)(golf, oscar);
            golf = _closure1_slot5;
            oscar = golf.useEffect;
            report = new Array(1);
            report[0] = options;
            entity = function() {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    mike = function() { // Original name: getEligibleVoiceChannels
                        tango = _closure1_slot20;
                        zulu = tango.getAllVoiceStates;
                        oscar = zulu.bind(tango)();
                        var _closure4_slot0 = oscar;
                        zulu = _closure1_slot11;
                        mike = zulu.getUserAffinitiesMap;
                        mike = mike.bind(zulu)();
                        var _closure4_slot1 = mike;
                        tango = {};
                        var _closure4_slot2 = tango;
                        mike = global;
                        report = mike.Object;
                        zulu = report.keys;
                        oscar = zulu.bind(report)(oscar);
                        report = oscar.forEach;
                        zulu = function(argFoo) {
                            zulu = _closure4_slot0;
                            mike = argFoo;
                            report = zulu[mike];
                            var _closure5_slot0 = report;
                            mike = global;
                            tango = mike.Object;
                            zulu = tango.keys;
                            mike = report.getVoiceStates;
                            mike = mike.bind(report)();
                            zulu = zulu.bind(tango)(mike);
                            mike = zulu.forEach;
                            entity = function(argFoo) {
                                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                                    zulu = argFoo;
                                    tango = _closure5_slot0;
                                    mike = tango.getVoiceStates;
                                    mike = mike.bind(tango)();
                                    report = mike[zulu];
                                    oscar = _closure1_slot13;
                                    tango = oscar.getChannel;
                                    golf = tango.bind(oscar)(zulu);
                                    oscar = _closure1_slot16;
                                    tango = oscar.can;
                                    mike = _closure1_slot23;
                                    mike = mike.CONNECT;
                                    mike = tango.bind(oscar)(mike, golf);
                                    if(!mike) { _fun00028_ip = 205; continue _fun00027 }
 75:
                                    tango = report.map;
                                    mike = function(argFoo) {
                                        entity = argFoo;
                                        entity = entity.user;
                                        entity = entity.id;
                                        return entity;
                                    };
                                    report = tango.bind(report)(mike);
                                    tango = report.map;
                                    mike = function(argFoo) {
                                        zulu = _closure4_slot1;
                                        mike = zulu.get;
                                        entity = argFoo;
                                        entity = mike.bind(zulu)(entity);
                                        return entity;
                                    };
                                    report = tango.bind(report)(mike);
                                    tango = report.filter;
                                    mike = global;
                                    mike = mike.Boolean;
                                    report = tango.bind(report)(mike);
                                    tango = report.sort;
                                    mike = function(argFoo, argBar) {
                                        entity = argFoo;
                                        mike = entity.vcRank;
                                        entity = argBar;
                                        entity = entity.vcRank;
                                        entity = mike - entity;
                                        return entity;
                                    };
                                    oscar = tango.bind(report)(mike);
                                    report = 0;
                                    mike = oscar[report];
                                    tango = null;
                                    golf = tango == mike;
                                    tango = undefined;
                                    if(golf) { _fun00028_ip = 168; continue _fun00027 }
 162:
                                    tango = mike.vcRank;
 168:
                                    mike = 20;
                                    if(!(tango < mike)) { _fun00028_ip = 205; continue _fun00027 }
 175:
                                    mike = _closure4_slot2;
                                    tango = oscar.reduce;
                                    entity = function(argFoo, argBar) {
                                        entity = argBar;
                                        mike = entity.communicationProbability;
                                        entity = argFoo;
                                        entity = entity + mike;
                                        return entity;
                                    };
                                    entity = tango.bind(oscar)(entity, report);
                                    mike[zulu] = entity;
 205:
                                    entity = undefined;
                                    return entity;
                                }
                            };
                            entity = mike.bind(zulu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        zulu = report.bind(oscar)(zulu);
                        zulu = mike.Object;
                        mike = zulu.entries;
                        tango = mike.bind(zulu)(tango);
                        zulu = tango.sort;
                        mike = function(argFoo, argBar) {
                            entity = argBar;
                            zulu = 1;
                            mike = entity[zulu];
                            entity = argFoo;
                            entity = entity[zulu];
                            entity = mike - entity;
                            return entity;
                        };
                        zulu = zulu.bind(tango)(mike);
                        mike = zulu.map;
                        entity = function(argFoo) {
                            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                                entity = argFoo;
                                mike = entity[Symbol.iterator];
                                entity = mike().next;
                                tango = entity().value;
                                zulu = mike;
                                entity = undefined;
                                zulu = zulu === entity;
                                if(zulu) { _fun00030_ip = 25; continue _fun00029 }
 22:
                                entity = tango;
 25:
                                if(zulu) { _fun00030_ip = 31; continue _fun00029 }
 28:
                                mike.return();
 31:
                                return entity;
                            }
                        };
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    entity = undefined;
                    tango = mike.bind(entity)();
                    zulu = tango.length;
                    mike = 0;
                    if(!(zulu > mike)) { _fun00026_ip = 42; continue _fun00025 }
 26:
                    zulu = _closure2_slot0;
                    mike = tango[mike];
                    mike = zulu.bind(entity)(mike);
 42:
                    return entity;
                }
            };
            entity = oscar.bind(golf)(entity, report);
            entity = null;
            if(!zulu) { _fun00024_ip = 203; continue _fun00023 }
 191:
            zulu = tango != mike;
            entity = null;
            if(!zulu) { _fun00024_ip = 203; continue _fun00023 }
 200:
            entity = mike;
 203:
            return entity;
        }
    };
    zulu['useEligibleActiveVoiceChannelId'] = mike;
    return entity;
})();