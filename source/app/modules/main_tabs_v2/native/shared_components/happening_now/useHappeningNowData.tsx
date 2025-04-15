// app/modules/main_tabs_v2/native/shared_components/happening_now/useHappeningNowData.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 323; continue _fun00001 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot37;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golfie = _closure1_slot37;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 323:
            if(!tangon) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tangon;
 330:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot36 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot37 = entity;
    entity = function(argFoo) { // Original name: countActiveChannels
        zuuluu = argFoo;
        michal = zuuluu.filter;
        entity = function(argFoo) {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = argFoo;
                zuuluu = entity.kind;
                entity = 'active-channel';
                entity = entity === zuuluu;
                if(entity) { _fun00008_ip = 29; continue _fun00007 }
 21:
                michal = 'voice';
                entity = michal === zuuluu;
 29:
                if(entity) { _fun00008_ip = 42; continue _fun00007 }
 32:
                michal = 'live-guild-stage';
                entity = michal === zuuluu;
 42:
                if(entity) { _fun00008_ip = 55; continue _fun00007 }
 45:
                michal = 'unified-vc';
                entity = michal === zuuluu;
 55:
                if(entity) { _fun00008_ip = 68; continue _fun00007 }
 58:
                michal = 'embedded-activity';
                entity = michal === zuuluu;
 68:
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        entity = entity.length;
        return entity;
    };
    var _closure1_slot38 = entity;
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
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
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
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    verify = golfie.eventScheduledToStartWithin;
    var _closure1_slot8 = verify;
    verify = golfie.isEventUpcoming;
    var _closure1_slot9 = verify;
    golfie = golfie.isGuildScheduledEventActive;
    var _closure1_slot10 = golfie;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot13 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot14 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot15 = tangon;
    tangon = 10;
    golfie = oscard[tangon];
    verify = option.bind(entity)(golfie);
    var _closure1_slot16 = verify;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.MemberListRowTypes;
    var _closure1_slot17 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    offset = option.bind(entity)(tangon);
    var _closure1_slot18 = offset;
    tangon = 12;
    golfie = oscard[tangon];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot19 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot20 = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot21 = tangon;
    tangon = 14;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot22 = tangon;
    tangon = 15;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot23 = tangon;
    tangon = 16;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot24 = tangon;
    tangon = 17;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot25 = tangon;
    tangon = 18;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot26 = tangon;
    tangon = 19;
    tangon = oscard[tangon];
    golfie = option.bind(entity)(tangon);
    var _closure1_slot27 = golfie;
    tangon = 20;
    tangon = oscard[tangon];
    option = option.bind(entity)(tangon);
    var _closure1_slot28 = option;
    tangon = 21;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.HappeningNowItem;
    var _closure1_slot29 = tangon;
    tangon = 22;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    yankee = tangon.ActivityFlags;
    var _closure1_slot30 = yankee;
    yankee = tangon.GuildFeatures;
    var _closure1_slot31 = yankee;
    yankee = tangon.Permissions;
    var _closure1_slot32 = yankee;
    yankee = tangon.RelationshipTypes;
    var _closure1_slot33 = yankee;
    tangon = tangon.StatusTypes;
    var _closure1_slot34 = tangon;
    tangon = new Array(4);
    tangon[0] = offset;
    tangon[1] = verify;
    tangon[2] = option;
    tangon[3] = golfie;
    var _closure1_slot35 = tangon;
    tangon = 42;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/shared_components/happening_now/useHappeningNowData.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: useHappeningNowData
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            echoed = argFoo;
            entity = argBar;
            var _closure2_slot0 = echoed;
            offset = entity.guildId;
            var _closure2_slot1 = offset;
            result = entity.withoutUserCards;
            var _closure2_slot2 = result;
            michal = entity.showMultipleActivitiesPerChannel;
            report = undefined;
            vacuum = report !== michal;
            if(!vacuum) { _fun00010_ip = 49; continue _fun00009 }
 46:
            vacuum = michal;
 49:
            var _closure2_slot3 = vacuum;
            verify = entity.isFocused;
            var _closure2_slot4 = verify;
            tangon = echoed.has;
            michal = _closure1_slot29;
            zuuluu = michal.LIVE_GUILD_STAGE;
            status = tangon.bind(echoed)(zuuluu);
            var _closure2_slot5 = status;
            tangon = echoed.has;
            zuuluu = michal.EMBEDDED_ACTIVITY;
            sequen = tangon.bind(echoed)(zuuluu);
            var _closure2_slot6 = sequen;
            tangon = echoed.has;
            zuuluu = michal.STREAMS;
            config = tangon.bind(echoed)(zuuluu);
            var _closure2_slot7 = config;
            tangon = echoed.has;
            zuuluu = michal.USER_CUSTOM_STATUS;
            source = tangon.bind(echoed)(zuuluu);
            var _closure2_slot8 = source;
            tangon = echoed.has;
            zuuluu = michal.ACTIVITIES;
            update = tangon.bind(echoed)(zuuluu);
            var _closure2_slot9 = update;
            zuuluu = echoed.has;
            michal = michal.USER;
            record = zuuluu.bind(echoed)(michal);
            var _closure2_slot10 = record;
            backup = _closure1_slot4;
            tangon = backup.useEffect;
            zuuluu = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 23;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.fetchUserAffinities;
                michal = michal.bind(zuuluu)();
                return entity;
            };
            michal = new Array(0);
            michal = tangon.bind(backup)(zuuluu, michal);
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            tangon = 24;
            michal = option[tangon];
            romeon = golfie.bind(report)(michal);
            yankee = romeon.useStateFromStores;
            michal = _closure1_slot6;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                michal = _closure1_slot6;
                entity = michal.isConnected;
                entity = entity.bind(michal)();
                return entity;
            };
            zuuluu = yankee.bind(romeon)(zuuluu, michal);
            var _closure2_slot11 = zuuluu;
            michal = option[tangon];
            foxtra = golfie.bind(report)(michal);
            romeon = foxtra.useStateFromStores;
            michal = _closure1_slot15;
            yankee = new Array(1);
            yankee[0] = michal;
            michal = function() {
                michal = _closure1_slot15;
                entity = michal.getSessionId;
                michal = entity.bind(michal)();
                entity = null;
                entity = entity != michal;
                return entity;
            };
            michal = romeon.bind(foxtra)(yankee, michal);
            var _closure2_slot12 = michal;
            foxtra = backup.useCallback;
            romeon = new Array(5);
            romeon[0] = echoed;
            romeon[1] = michal;
            romeon[2] = offset;
            romeon[3] = verify;
            romeon[4] = zuuluu;
            yankee = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    michal = _closure2_slot1;
                    oscard = null;
                    if(!(oscard != michal)) { _fun00012_ip = 194; continue _fun00011 }
 16:
                    report = _closure2_slot0;
                    tangon = report.has;
                    zuuluu = _closure1_slot29;
                    zuuluu = zuuluu.ACTIVE_CHANNEL;
                    zuuluu = tangon.bind(report)(zuuluu);
                    if(!zuuluu) { _fun00012_ip = 194; continue _fun00011 }
 49:
                    zuuluu = _closure2_slot12;
                    if(!zuuluu) { _fun00012_ip = 194; continue _fun00011 }
 59:
                    zuuluu = _closure2_slot11;
                    if(!zuuluu) { _fun00012_ip = 194; continue _fun00011 }
 69:
                    zuuluu = _closure2_slot4;
                    if(!zuuluu) { _fun00012_ip = 194; continue _fun00011 }
 76:
                    report = _closure1_slot7;
                    tangon = report.getActiveChannelsFetchStatus;
                    zuuluu = _closure2_slot1;
                    tangon = tangon.bind(report)(zuuluu);
                    zuuluu = oscard == tangon;
                    if(zuuluu) { _fun00012_ip = 114; continue _fun00011 }
 104:
                    report = tangon.fetchedAt;
                    zuuluu = oscard == report;
 114:
                    if(zuuluu) { _fun00012_ip = 154; continue _fun00011 }
 117:
                    report = global;
                    oscard = report.Date;
                    report = oscard.now;
                    report = report.bind(oscard)();
                    tangon = tangon.fetchedAt;
                    report = report - tangon;
                    tangon = 300000;
                    zuuluu = report > tangon;
 154:
                    if(!zuuluu) { _fun00012_ip = 194; continue _fun00011 }
 157:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 25;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = tangon.bind(michal)(zuuluu);
                    michal = zuuluu.fetchActiveChannels;
                    entity = _closure2_slot1;
                    entity = michal.bind(zuuluu)(entity);
 194:
                    entity = undefined;
                    return entity;
                }
            };
            kiloes = foxtra.bind(backup)(yankee, romeon);
            var _closure2_slot13 = kiloes;
            foxtra = backup.useEffect;
            romeon = new Array(1);
            romeon[0] = kiloes;
            yankee = function() {
                michal = _closure2_slot13;
                entity = undefined;
                michal = michal.bind(entity)();
                return entity;
            };
            yankee = foxtra.bind(backup)(yankee, romeon);
            yankee = option[tangon];
            sizing = golfie.bind(report)(yankee);
            foxtra = sizing.useStateFromStores;
            yankee = _closure1_slot22;
            romeon = new Array(1);
            romeon[0] = yankee;
            yankee = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    entity = null;
                    zuuluu = entity != zuuluu;
                    if(!zuuluu) { _fun00014_ip = 37; continue _fun00013 }
 16:
                    tangon = _closure1_slot22;
                    zuuluu = tangon.getGuild;
                    michal = _closure2_slot1;
                    entity = zuuluu.bind(tangon)(michal);
 37:
                    return entity;
                }
            };
            output = foxtra.bind(sizing)(romeon, yankee);
            var _closure2_slot14 = output;
            yankee = option[tangon];
            ctrled = golfie.bind(report)(yankee);
            sizing = ctrled.useStateFromStores;
            romeon = _closure1_slot19;
            foxtra = new Array(1);
            foxtra[0] = romeon;
            yankee = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    entity = null;
                    zuuluu = entity != zuuluu;
                    if(!zuuluu) { _fun00016_ip = 38; continue _fun00015 }
 16:
                    tangon = _closure1_slot19;
                    zuuluu = tangon.getDefaultChannel;
                    michal = _closure2_slot1;
                    entity = zuuluu.bind(tangon)(michal);
 38:
                    return entity;
                }
            };
            yankee = sizing.bind(ctrled)(foxtra, yankee);
            var _closure2_slot15 = yankee;
            foxtra = 26;
            foxtra = option[foxtra];
            sizing = golfie.bind(report)(foxtra);
            foxtra = sizing.useFirstGloballyViewbleGuildChannelId;
            ctrled = foxtra.bind(sizing)(offset);
            var _closure2_slot16 = ctrled;
            foxtra = option[tangon];
            cntext = golfie.bind(report)(foxtra);
            sizing = cntext.useStateFromStores;
            foxtra = new Array(1);
            foxtra[0] = romeon;
            romeon = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    entity = null;
                    zuuluu = entity != zuuluu;
                    if(!zuuluu) { _fun00018_ip = 38; continue _fun00017 }
 16:
                    tangon = _closure1_slot19;
                    zuuluu = tangon.getChannels;
                    michal = _closure2_slot1;
                    entity = zuuluu.bind(tangon)(michal);
 38:
                    return entity;
                }
            };
            sizing = sizing.bind(cntext)(foxtra, romeon);
            var _closure2_slot17 = sizing;
            foxtra = backup.useCallback;
            romeon = new Array(6);
            romeon[0] = michal;
            romeon[1] = yankee;
            romeon[2] = ctrled;
            romeon[3] = offset;
            romeon[4] = verify;
            romeon[5] = zuuluu;
            zuuluu = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    entity = _closure2_slot12;
                    if(!entity) { _fun00020_ip = 14; continue _fun00019 }
 10:
                    entity = _closure2_slot11;
 14:
                    if(!entity) { _fun00020_ip = 21; continue _fun00019 }
 17:
                    entity = _closure2_slot4;
 21:
                    if(!entity) { _fun00020_ip = 34; continue _fun00019 }
 24:
                    tangon = _closure2_slot1;
                    zuuluu = null;
                    entity = zuuluu != tangon;
 34:
                    if(!entity) { _fun00020_ip = 47; continue _fun00019 }
 37:
                    tangon = _closure2_slot15;
                    zuuluu = null;
                    entity = zuuluu != tangon;
 47:
                    if(!entity) { _fun00020_ip = 228; continue _fun00019 }
 53:
                    yankee = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 27;
                    report = tangon[zuuluu];
                    golfie = undefined;
                    oscard = yankee.bind(golfie)(report);
                    report = oscard.subscribeGuild;
                    offset = _closure2_slot1;
                    report = report.bind(oscard)(offset);
                    report = tangon[zuuluu];
                    verify = yankee.bind(golfie)(report);
                    oscard = verify.subscribeChannel;
                    report = _closure2_slot15;
                    report = report.id;
                    option = 28;
                    tangon = tangon[option];
                    tangon = yankee.bind(golfie)(tangon);
                    tangon = tangon.DEFAULT_RANGES;
                    tangon = oscard.bind(verify)(offset, report, tangon);
                    report = _closure2_slot16;
                    tangon = null;
                    tangon = tangon != report;
                    if(!tangon) { _fun00020_ip = 172; continue _fun00019 }
 155:
                    oscard = _closure2_slot16;
                    report = _closure2_slot15;
                    report = report.id;
                    tangon = oscard !== report;
 172:
                    if(!tangon) { _fun00020_ip = 228; continue _fun00019 }
 175:
                    oscard = _closure1_slot0;
                    entity = _closure1_slot2;
                    zuuluu = entity[zuuluu];
                    report = oscard.bind(golfie)(zuuluu);
                    tangon = report.subscribeChannel;
                    zuuluu = _closure2_slot1;
                    michal = _closure2_slot16;
                    entity = entity[option];
                    entity = oscard.bind(golfie)(entity);
                    entity = entity.DEFAULT_RANGES;
                    entity = tangon.bind(report)(zuuluu, michal, entity);
 228:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = foxtra.bind(backup)(zuuluu, romeon);
            var _closure2_slot18 = zuuluu;
            ctrled = backup.useEffect;
            foxtra = new Array(1);
            foxtra[0] = zuuluu;
            romeon = function() {
                michal = _closure2_slot18;
                entity = undefined;
                michal = michal.bind(entity)();
                return entity;
            };
            romeon = ctrled.bind(backup)(romeon, foxtra);
            foxtra = backup.useCallback;
            romeon = new Array(2);
            romeon[0] = kiloes;
            romeon[1] = zuuluu;
            zuuluu = function() {
                zuuluu = _closure2_slot13;
                entity = undefined;
                zuuluu = zuuluu.bind(entity)();
                michal = _closure2_slot18;
                michal = michal.bind(entity)();
                return entity;
            };
            zuuluu = foxtra.bind(backup)(zuuluu, romeon);
            var _closure2_slot19 = zuuluu;
            foxtra = backup.useEffect;
            romeon = new Array(1);
            romeon[0] = zuuluu;
            zuuluu = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 29;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.subscribe;
                michal = _closure2_slot19;
                entity = 'CONNECTION_OPEN';
                entity = zuuluu.bind(tangon)(entity, michal);
                entity = function() {
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 29;
                    michal = michal[entity];
                    entity = undefined;
                    report = zuuluu.bind(entity)(michal);
                    tangon = report.unsubscribe;
                    zuuluu = _closure2_slot19;
                    michal = 'CONNECTION_OPEN';
                    michal = tangon.bind(report)(michal, zuuluu);
                    return entity;
                };
                return entity;
            };
            zuuluu = foxtra.bind(backup)(zuuluu, romeon);
            zuuluu = 30;
            zuuluu = option[zuuluu];
            golfie = golfie.bind(report)(zuuluu);
            zuuluu = golfie.useIsVoicePanelFullscreen;
            zuuluu = zuuluu.bind(golfie)();
            golfie = verify;
            if(!golfie) { _fun00010_ip = 704; continue _fun00009 }
 701:
            golfie = !zuuluu;
 704:
            var _closure2_slot20 = golfie;
            backup = _closure1_slot0;
            ctrled = _closure1_slot2;
            zuuluu = ctrled[tangon];
            foxtra = backup.bind(report)(zuuluu);
            romeon = foxtra.useStateFromStores;
            zuuluu = _closure1_slot16;
            option = new Array(1);
            option[0] = zuuluu;
            zuuluu = function() {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    michal = _closure2_slot1;
                    report = null;
                    if(!(report != michal)) { _fun00022_ip = 129; continue _fun00021 }
 13:
                    michal = _closure2_slot15;
                    if(!(report != michal)) { _fun00022_ip = 129; continue _fun00021 }
 21:
                    oscard = _closure1_slot16;
                    tangon = oscard.getProps;
                    zuuluu = _closure2_slot1;
                    entity = _closure2_slot15;
                    entity = entity.id;
                    zuuluu = tangon.bind(oscard)(zuuluu, entity);
                    tangon = report == zuuluu;
                    if(tangon) { _fun00022_ip = 70; continue _fun00021 }
 60:
                    entity = zuuluu.groups;
                    tangon = report == entity;
 70:
                    if(tangon) { _fun00022_ip = 90; continue _fun00021 }
 73:
                    entity = zuuluu.groups;
                    report = entity.length;
                    entity = 0;
                    tangon = report <= entity;
 90:
                    entity = !tangon;
                    if(tangon) { _fun00022_ip = 127; continue _fun00021 }
 96:
                    tangon = zuuluu.groups;
                    zuuluu = 0;
                    zuuluu = tangon[zuuluu];
                    zuuluu = zuuluu.id;
                    michal = _closure1_slot34;
                    michal = michal.UNKNOWN;
                    entity = zuuluu === michal;
 127:
                    return entity;
 129:
                    entity = false;
                    return entity;
                }
            };
            option = romeon.bind(foxtra)(option, zuuluu);
            zuuluu = ctrled[tangon];
            papara = backup.bind(report)(zuuluu);
            cntext = papara.useStateFromStores;
            romeon = _closure1_slot7;
            kiloes = new Array(1);
            kiloes[0] = romeon;
            foxtra = new Array(2);
            foxtra[0] = offset;
            foxtra[1] = echoed;
            zuuluu = function() {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    entity = _closure2_slot1;
                    tangon = null;
                    entity = tangon != entity;
                    if(!entity) { _fun00024_ip = 78; continue _fun00023 }
 16:
                    golfie = _closure2_slot0;
                    oscard = golfie.has;
                    michal = _closure1_slot29;
                    michal = michal.ACTIVE_CHANNEL;
                    michal = oscard.bind(golfie)(michal);
                    oscard = !michal;
                    michal = !oscard;
                    if(oscard) { _fun00024_ip = 75; continue _fun00023 }
 52:
                    oscard = _closure1_slot7;
                    report = oscard.getActiveChannelIds;
                    zuuluu = _closure2_slot1;
                    zuuluu = report.bind(oscard)(zuuluu);
                    michal = tangon == zuuluu;
 75:
                    entity = michal;
 78:
                    return entity;
                }
            };
            zuuluu = cntext.bind(papara)(kiloes, zuuluu, foxtra);
            foxtra = ctrled[tangon];
            papara = backup.bind(report)(foxtra);
            cntext = papara.useStateFromStores;
            foxtra = _closure1_slot13;
            kiloes = new Array(1);
            kiloes[0] = foxtra;
            foxtra = function() {
                michal = _closure1_slot13;
                entity = michal.getUserAffinities;
                entity = entity.bind(michal)();
                return entity;
            };
            sierra = cntext.bind(papara)(kiloes, foxtra);
            var _closure2_slot21 = sierra;
            foxtra = ctrled[tangon];
            papara = backup.bind(report)(foxtra);
            cntext = papara.useStateFromStoresObject;
            foxtra = _closure1_slot25;
            kiloes = new Array(1);
            kiloes[0] = foxtra;
            foxtra = function() {
                michal = _closure1_slot25;
                entity = michal.getRelationships;
                entity = entity.bind(michal)();
                return entity;
            };
            target = cntext.bind(papara)(kiloes, foxtra);
            var _closure2_slot22 = target;
            foxtra = ctrled[tangon];
            papara = backup.bind(report)(foxtra);
            cntext = papara.useStateFromStores;
            foxtra = _closure1_slot27;
            kiloes = new Array(1);
            kiloes[0] = foxtra;
            foxtra = function() {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    michal = _closure1_slot27;
                    entity = michal.getCurrentUser;
                    zuuluu = entity.bind(michal)();
                    entity = null;
                    tangon = entity == zuuluu;
                    michal = undefined;
                    if(tangon) { _fun00026_ip = 33; continue _fun00025 }
 27:
                    michal = zuuluu.nsfwAllowed;
 33:
                    entity = entity != michal;
                    if(!entity) { _fun00026_ip = 43; continue _fun00025 }
 40:
                    entity = michal;
 43:
                    return entity;
                }
            };
            cntext = cntext.bind(papara)(kiloes, foxtra);
            var _closure2_slot23 = cntext;
            foxtra = ctrled[tangon];
            whisks = backup.bind(report)(foxtra);
            limora = whisks.useStateFromStoresObject;
            foxtra = _closure1_slot23;
            papara = new Array(1);
            papara[0] = foxtra;
            kiloes = new Array(1);
            kiloes[0] = offset;
            foxtra = function() {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    entity = {};
                    zuuluu = _closure1_slot23;
                    michal = zuuluu.getChannelsVersion;
                    michal = michal.bind(zuuluu)();
                    entity['permissionChannelsVersion'] = michal;
                    report = _closure2_slot1;
                    michal = null;
                    report = michal != report;
                    if(!report) { _fun00028_ip = 65; continue _fun00027 }
 44:
                    report = _closure1_slot23;
                    tangon = report.getGuildVersion;
                    zuuluu = _closure2_slot1;
                    michal = tangon.bind(report)(zuuluu);
 65:
                    entity['permissionGuildVersion'] = michal;
                    return entity;
                }
            };
            foxtra = limora.bind(whisks)(papara, foxtra, kiloes);
            kiloes = ctrled[tangon];
            whisks = backup.bind(report)(kiloes);
            limora = whisks.useStateFromStores;
            papara = new Array(1);
            papara[0] = romeon;
            kiloes = new Array(1);
            kiloes[0] = offset;
            romeon = function() {
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    entity = null;
                    zuuluu = entity != zuuluu;
                    if(!zuuluu) { _fun00030_ip = 38; continue _fun00029 }
 16:
                    tangon = _closure1_slot7;
                    zuuluu = tangon.getActiveChannelIds;
                    michal = _closure2_slot1;
                    entity = zuuluu.bind(tangon)(michal);
 38:
                    return entity;
                }
            };
            kiloes = limora.bind(whisks)(papara, romeon, kiloes);
            romeon = ctrled[tangon];
            equals = backup.bind(report)(romeon);
            whisks = equals.useStateFromStoresArray;
            romeon = _closure1_slot11;
            limora = new Array(1);
            limora[0] = romeon;
            papara = new Array(1);
            papara[0] = offset;
            romeon = function() {
                zuuluu = _closure1_slot11;
                michal = zuuluu.getGuildScheduledEventsForGuild;
                entity = _closure2_slot1;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            papara = whisks.bind(equals)(limora, romeon, papara);
            var _closure2_slot24 = papara;
            tangon = ctrled[tangon];
            equals = backup.bind(report)(tangon);
            whisks = equals.useStateFromStoresArray;
            tangon = _closure1_slot5;
            limora = new Array(1);
            limora[0] = tangon;
            romeon = new Array(1);
            romeon[0] = offset;
            tangon = function() {
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00032_ip = 37; continue _fun00031 }
 13:
                    zuuluu = _closure1_slot5;
                    michal = zuuluu.getEmbeddedActivitiesForGuild;
                    entity = _closure2_slot1;
                    entity = michal.bind(zuuluu)(entity);
                    _fun00032_ip = 41; continue _fun00031;
 37:
                    entity = new Array(0);
 41:
                    return entity;
                }
            };
            tangon = whisks.bind(equals)(limora, tangon, romeon);
            romeon = 31;
            romeon = ctrled[romeon];
            ctrled = backup.bind(report)(romeon);
            backup = ctrled.useBlockingVoiceStatesConfigForBlocker;
            romeon = 'use-happening-now-data';
            romeon = backup.bind(ctrled)(romeon);
            ctrled = romeon.enabled;
            var _closure2_slot25 = ctrled;
            michal = !michal;
            if(michal) { _fun00010_ip = 1179; continue _fun00009 }
 1176:
            michal = option;
 1179:
            if(michal) { _fun00010_ip = 1185; continue _fun00009 }
 1182:
            michal = zuuluu;
 1185:
            var _closure2_slot26 = michal;
            backup = _closure1_slot4;
            option = backup.useRef;
            zuuluu = {};
            zuuluu['guildId'] = offset;
            romeon = false;
            zuuluu['hasComputed'] = romeon;
            zuuluu = option.bind(backup)(zuuluu);
            var _closure2_slot27 = zuuluu;
            romeon = backup.useCallback;
            option = new Array(21);
            option[0] = offset;
            option[1] = sierra;
            option[2] = yankee;
            option[3] = status;
            option[4] = target;
            option[5] = papara;
            option[6] = cntext;
            option[7] = record;
            option[8] = config;
            option[9] = sequen;
            option[10] = vacuum;
            option[11] = ctrled;
            option[12] = source;
            option[13] = update;
            option[14] = echoed;
            option[15] = result;
            option[16] = output;
            option[17] = sizing;
            option[18] = kiloes;
            option[19] = foxtra;
            option[20] = tangon;
            tangon = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 32;
                michal = michal[entity];
                entity = undefined;
                report = zuuluu.bind(entity)(michal);
                tangon = report.time;
                zuuluu = '🎨';
                michal = 'computeHappeningNowState';
                entity = function() {
                    _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                        entity = function(argFoo, argBar, argBaz) { // Original name: addUser
                            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                                zuuluu = argFoo;
                                verify = argBar;
                                foxtra = argBaz;
                                var _closure5_slot0 = zuuluu;
                                var _closure5_slot1 = foxtra;
                                michal = _closure1_slot25;
                                entity = michal.isBlockedOrIgnored;
                                entity = entity.bind(michal)(zuuluu);
                                if(entity) { _fun00036_ip = 1372; continue _fun00035 }
 43:
                                report = _closure1_slot18;
                                michal = report.getChannel;
                                golfie = null;
                                oscard = golfie == foxtra;
                                tangon = undefined;
                                entity = undefined;
                                if(oscard) { _fun00036_ip = 70; continue _fun00035 }
 65:
                                entity = foxtra.channelId;
 70:
                                entity = michal.bind(report)(entity);
                                if(!(golfie != entity)) { _fun00036_ip = 159; continue _fun00035 }
 79:
                                michal = entity.isNSFW;
                                michal = michal.bind(entity)();
                                if(!michal) { _fun00036_ip = 159; continue _fun00035 }
 92:
                                michal = _closure2_slot23;
                                if(!michal) { _fun00036_ip = 1372; continue _fun00035 }
 105:
                                oscard = _closure1_slot21;
                                report = oscard.didAgree;
                                michal = _closure2_slot1;
                                if(!(golfie == michal)) { _fun00036_ip = 144; continue _fun00035 }
 123:
                                romeon = golfie == entity;
                                michal = undefined;
                                if(romeon) { _fun00036_ip = 142; continue _fun00035 }
 132:
                                romeon = entity.getGuildId;
                                michal = romeon.bind(entity)();
 142:
                                _fun00036_ip = 148; continue _fun00035;
 144:
                                michal = _closure2_slot1;
 148:
                                michal = report.bind(oscard)(michal);
                                if(!michal) { _fun00036_ip = 1372; continue _fun00035 }
 159:
                                if(!(golfie != entity)) { _fun00036_ip = 241; continue _fun00035 }
 163:
                                michal = entity.isGroupDM;
                                michal = michal.bind(entity)();
                                if(michal) { _fun00036_ip = 234; continue _fun00035 }
 176:
                                oscard = _closure1_slot23;
                                report = oscard.can;
                                michal = _closure1_slot32;
                                michal = michal.CONNECT;
                                michal = report.bind(oscard)(michal, entity);
                                if(!michal) { _fun00036_ip = 241; continue _fun00035 }
 205:
                                oscard = _closure1_slot23;
                                report = oscard.can;
                                michal = _closure1_slot32;
                                michal = michal.VIEW_CHANNEL;
                                michal = report.bind(oscard)(michal, entity);
                                if(!michal) { _fun00036_ip = 241; continue _fun00035 }
 234:
                                if(!(golfie == foxtra)) { _fun00036_ip = 757; continue _fun00035 }
 241:
                                if(!(golfie == verify)) { _fun00036_ip = 390; continue _fun00035 }
 248:
                                michal = _closure2_slot10;
                                if(!michal) { _fun00036_ip = 1372; continue _fun00035 }
 261:
                                oscard = _closure1_slot24;
                                report = oscard.getStatus;
                                michal = _closure2_slot1;
                                report = report.bind(oscard)(zuuluu, michal);
                                if(!(golfie != report)) { _fun00036_ip = 1372; continue _fun00035 }
 288:
                                michal = _closure1_slot34;
                                michal = michal.OFFLINE;
                                if(!(report !== michal)) { _fun00036_ip = 346; continue _fun00035 }
 302:
                                oscard = _closure4_slot8;
                                report = oscard.push;
                                michal = {};
                                romeon = 'user';
                                michal['kind'] = romeon;
                                michal['userId'] = zuuluu;
                                romeon = _closure2_slot1;
                                michal['guildId'] = romeon;
                                michal = report.bind(oscard)(michal);
                                _fun00036_ip = 1372; continue _fun00035;
 346:
                                oscard = _closure4_slot9;
                                report = oscard.push;
                                michal = {};
                                romeon = 'user';
                                michal['kind'] = romeon;
                                michal['userId'] = zuuluu;
                                yankee = _closure2_slot1;
                                michal['guildId'] = yankee;
                                michal = report.bind(oscard)(michal);
                                _fun00036_ip = 1372; continue _fun00035;
 390:
                                report = _closure1_slot0;
                                oscard = _closure1_slot2;
                                michal = 35;
                                michal = oscard[michal];
                                report = report.bind(tangon)(michal);
                                michal = report.isActivityPermanentCustomStatus;
                                michal = michal.bind(report)(verify);
                                if(michal) { _fun00036_ip = 695; continue _fun00035 }
 427:
                                report = _closure1_slot0;
                                oscard = _closure1_slot2;
                                michal = 36;
                                michal = oscard[michal];
                                report = report.bind(tangon)(michal);
                                michal = report.isActivityTemporaryCustomStatus;
                                michal = michal.bind(report)(verify);
                                if(michal) { _fun00036_ip = 642; continue _fun00035 }
 467:
                                michal = _closure2_slot9;
                                if(!michal) { _fun00036_ip = 1372; continue _fun00035 }
 477:
                                report = _closure1_slot1;
                                yankee = _closure1_slot2;
                                michal = 37;
                                michal = yankee[michal];
                                report = report.bind(tangon)(michal);
                                michal = _closure1_slot30;
                                michal = michal.EMBEDDED;
                                michal = report.bind(tangon)(verify, michal);
                                if(!michal) { _fun00036_ip = 593; continue _fun00035 }
 516:
                                romeon = _closure1_slot18;
                                yankee = romeon.getChannel;
                                kiloes = _closure1_slot28;
                                backup = kiloes.getVoiceStateForSession;
                                report = verify.session_id;
                                backup = backup.bind(kiloes)(zuuluu, report);
                                kiloes = golfie == backup;
                                report = undefined;
                                if(kiloes) { _fun00036_ip = 561; continue _fun00035 }
 556:
                                report = backup.channelId;
 561:
                                romeon = yankee.bind(romeon)(report);
                                report = golfie == romeon;
                                yankee = undefined;
                                if(report) { _fun00036_ip = 585; continue _fun00035 }
 575:
                                report = romeon.getGuildId;
                                yankee = report.bind(romeon)();
 585:
                                report = _closure2_slot1;
                                michal = yankee !== report;
 593:
                                if(michal) { _fun00036_ip = 1372; continue _fun00035 }
 599:
                                report = _closure4_slot6;
                                michal = {};
                                michal['userId'] = zuuluu;
                                yankee = _closure2_slot1;
                                michal['guildId'] = yankee;
                                yankee = 'activity';
                                michal['kind'] = yankee;
                                michal['activity'] = verify;
                                report[zuuluu] = michal;
                                _fun00036_ip = 1372; continue _fun00035;
 642:
                                michal = _closure2_slot8;
                                if(!michal) { _fun00036_ip = 1372; continue _fun00035 }
 652:
                                report = _closure4_slot7;
                                michal = {};
                                michal['userId'] = zuuluu;
                                oscard = _closure2_slot1;
                                michal['guildId'] = oscard;
                                oscard = 'activity';
                                michal['kind'] = oscard;
                                michal['activity'] = verify;
                                report[zuuluu] = michal;
                                _fun00036_ip = 1372; continue _fun00035;
 695:
                                michal = _closure2_slot8;
                                if(!michal) { _fun00036_ip = 1372; continue _fun00035 }
 708:
                                oscard = _closure4_slot8;
                                report = oscard.push;
                                michal = {};
                                romeon = 'activity';
                                michal['kind'] = romeon;
                                michal['userId'] = zuuluu;
                                yankee = _closure2_slot1;
                                michal['guildId'] = yankee;
                                michal['activity'] = verify;
                                michal = report.bind(oscard)(michal);
                                _fun00036_ip = 1372; continue _fun00035;
 757:
                                yankee = _closure1_slot14;
                                report = yankee.getStreamForUser;
                                michal = _closure2_slot1;
                                if(!(golfie == michal)) { _fun00036_ip = 799; continue _fun00035 }
 778:
                                romeon = golfie == entity;
                                michal = undefined;
                                if(romeon) { _fun00036_ip = 797; continue _fun00035 }
 787:
                                romeon = entity.getGuildId;
                                michal = romeon.bind(entity)();
 797:
                                _fun00036_ip = 803; continue _fun00035;
 799:
                                michal = _closure2_slot1;
 803:
                                report = report.bind(yankee)(zuuluu, michal);
                                if(!(golfie != report)) { _fun00036_ip = 823; continue _fun00035 }
 813:
                                michal = _closure2_slot7;
                                if(michal) { _fun00036_ip = 1282; continue _fun00035 }
 823:
                                if(!(golfie != entity)) { _fun00036_ip = 1372; continue _fun00035 }
 830:
                                backup = _closure4_slot1;
                                romeon = backup.has;
                                yankee = entity.id;
                                yankee = romeon.bind(backup)(yankee);
                                if(yankee) { _fun00036_ip = 1372; continue _fun00035 }
 858:
                                yankee = entity.isGuildStageVoice;
                                yankee = yankee.bind(entity)();
                                if(yankee) { _fun00036_ip = 1173; continue _fun00035 }
 874:
                                yankee = _closure2_slot6;
                                if(!yankee) { _fun00036_ip = 1087; continue _fun00035 }
 884:
                                backup = _closure1_slot5;
                                romeon = backup.getEmbeddedActivitiesForChannel;
                                yankee = entity.id;
                                sizing = romeon.bind(backup)(yankee);
                                yankee = _closure2_slot3;
                                if(yankee) { _fun00036_ip = 1040; continue _fun00035 }
 914:
                                yankee = _closure2_slot25;
                                if(yankee) { _fun00036_ip = 948; continue _fun00035 }
 921:
                                romeon = _closure1_slot1;
                                backup = _closure1_slot2;
                                yankee = 34;
                                yankee = backup[yankee];
                                yankee = romeon.bind(tangon)(yankee);
                                yankee = yankee.bind(tangon)(sizing);
                                _fun00036_ip = 979; continue _fun00035;
 948:
                                backup = _closure1_slot0;
                                kiloes = _closure1_slot2;
                                romeon = 34;
                                romeon = kiloes[romeon];
                                backup = backup.bind(tangon)(romeon);
                                romeon = backup.findActivityWithMostNonBlockedOrIgnoredParticipants;
                                yankee = romeon.bind(backup)(sizing);
 979:
                                if(!(golfie !== yankee)) { _fun00036_ip = 1087; continue _fun00035 }
 983:
                                backup = _closure4_slot4;
                                romeon = entity.id;
                                kiloes = {};
                                output = 'embedded-activity';
                                kiloes['kind'] = output;
                                kiloes['userId'] = zuuluu;
                                kiloes['voiceState'] = foxtra;
                                output = _closure2_slot1;
                                kiloes['guildId'] = output;
                                kiloes['activity'] = yankee;
                                yankee = new Array(1);
                                yankee[0] = kiloes;
                                backup[romeon] = yankee;
                                _fun00036_ip = 1087; continue _fun00035;
 1040:
                                romeon = _closure4_slot4;
                                yankee = entity.id;
                                kiloes = sizing.filter;
                                backup = function(argFoo) {
                                    entity = argFoo;
                                    report = entity.userIds;
                                    zuuluu = new Array(0);
                                    tangon = 0;
                                    oscard = zuuluu;
                                    entity = arraySpread(oscard, report, tangon);
                                    michal = zuuluu.some;
                                    entity = function(argFoo) {
                                        zuuluu = _closure1_slot25;
                                        michal = zuuluu.isBlockedOrIgnored;
                                        entity = argFoo;
                                        entity = michal.bind(zuuluu)(entity);
                                        entity = !entity;
                                        return entity;
                                    };
                                    entity = michal.bind(zuuluu)(entity);
                                    return entity;
                                };
                                kiloes = kiloes.bind(sizing)(backup);
                                backup = kiloes.map;
                                offset = function(argFoo) {
                                    entity = {};
                                    michal = 'embedded-activity';
                                    entity['kind'] = michal;
                                    zuuluu = _closure5_slot0;
                                    entity['userId'] = zuuluu;
                                    michal = _closure5_slot1;
                                    entity['voiceState'] = michal;
                                    michal = _closure2_slot1;
                                    entity['guildId'] = michal;
                                    michal = argFoo;
                                    entity['activity'] = michal;
                                    return entity;
                                };
                                offset = backup.bind(kiloes)(offset);
                                romeon[yankee] = offset;
 1087:
                                romeon = _closure4_slot3;
                                yankee = entity.id;
                                offset = {};
                                backup = 'voice';
                                offset['kind'] = backup;
                                offset['userId'] = zuuluu;
                                offset['voiceState'] = foxtra;
                                foxtra = _closure2_slot1;
                                if(!(golfie == foxtra)) { _fun00036_ip = 1144; continue _fun00035 }
 1123:
                                foxtra = golfie == entity;
                                backup = undefined;
                                if(foxtra) { _fun00036_ip = 1142; continue _fun00035 }
 1132:
                                foxtra = entity.getGuildId;
                                backup = foxtra.bind(entity)();
 1142:
                                _fun00036_ip = 1148; continue _fun00035;
 1144:
                                backup = _closure2_slot1;
 1148:
                                kiloes = golfie != backup;
                                foxtra = undefined;
                                if(!kiloes) { _fun00036_ip = 1160; continue _fun00035 }
 1157:
                                foxtra = backup;
 1160:
                                offset['guildId'] = foxtra;
                                romeon[yankee] = offset;
                                _fun00036_ip = 1372; continue _fun00035;
 1173:
                                yankee = _closure1_slot25;
                                offset = yankee.isFriend;
                                offset = offset.bind(yankee)(zuuluu);
                                if(offset) { _fun00036_ip = 1193; continue _fun00035 }
 1191:
                                return tangon;
 1193:
                                romeon = _closure1_slot12;
                                yankee = romeon.getStageInstanceByChannel;
                                offset = entity.id;
                                offset = yankee.bind(romeon)(offset);
                                if(!(golfie != offset)) { _fun00036_ip = 1280; continue _fun00035 }
 1217:
                                romeon = _closure1_slot23;
                                yankee = romeon.can;
                                option = _closure1_slot32;
                                option = option.CONNECT;
                                option = yankee.bind(romeon)(option, entity);
                                if(option) { _fun00036_ip = 1248; continue _fun00035 }
 1246:
                                return tangon;
 1248:
                                option = _closure4_slot2;
                                michal = entity.id;
                                entity = {};
                                yankee = 'live-guild-stage';
                                entity['kind'] = yankee;
                                entity['stage'] = offset;
                                option[michal] = entity;
                                _fun00036_ip = 1372; continue _fun00035;
 1280:
                                return tangon;
 1282:
                                michal = _closure4_slot5;
                                entity = {};
                                entity['userId'] = zuuluu;
                                option = _closure2_slot1;
                                entity['guildId'] = option;
                                option = 'activity';
                                entity['kind'] = option;
                                offset = golfie != verify;
                                option = undefined;
                                if(!offset) { _fun00036_ip = 1323; continue _fun00035 }
 1320:
                                option = verify;
 1323:
                                entity['activity'] = option;
                                option = _closure2_slot1;
                                if(!(golfie != option)) { _fun00036_ip = 1360; continue _fun00035 }
 1336:
                                option = golfie == report;
                                golfie = undefined;
                                if(option) { _fun00036_ip = 1350; continue _fun00035 }
 1345:
                                golfie = report.guildId;
 1350:
                                oscard = _closure2_slot1;
                                tangon = undefined;
                                if(!(golfie === oscard)) { _fun00036_ip = 1363; continue _fun00035 }
 1360:
                                tangon = report;
 1363:
                                entity['stream'] = tangon;
                                michal[zuuluu] = entity;
 1372:
                                entity = undefined;
                                return entity;
                            }
                        };
                        var _closure4_slot12 = entity;
                        entity = _closure2_slot27;
                        michal = entity.current;
                        entity = _closure2_slot1;
                        michal['guildId'] = entity;
                        entity = _closure2_slot27;
                        michal = entity.current;
                        entity = true;
                        michal['hasComputed'] = entity;
                        variable41 = global;
                        entity = variable41.Set;
                        michal = entity.prototype;
                        michal = Object.create(michal, {constructor: {value: entity}});
                        variable66 = michal;
                        entity = new variable66[entity](variable65);
                        report = entity instanceof Object ? entity : michal;
                        var _closure4_slot0 = report;
                        zuuluu = variable41.Math;
                        michal = zuuluu.min;
                        entity = _closure2_slot21;
                        entity = entity.length;
                        variable40 = 50;
                        michal = michal.bind(zuuluu)(entity, variable40);
                        variable39 = 0;
                        zuuluu = variable39 < michal;
                        entity = 0;
                        if(!zuuluu) { _fun00034_ip = 155; continue _fun00033 }
 124:
                        tangon = report.add;
                        zuuluu = _closure2_slot21;
                        zuuluu = zuuluu[entity];
                        zuuluu = zuuluu.user_id;
                        zuuluu = tangon.bind(report)(zuuluu);
                        entity = entity + 1;
                        if(entity < michal) { _fun00034_ip = 124; continue _fun00033 }
 155:
                        tangon = _closure2_slot22;
                        for(entity in tangon)
 170:
                        {
 179:
                            option = entity;
                            golfie = _closure2_slot22;
                            verify = golfie[option];
                            golfie = _closure1_slot33;
                            golfie = golfie.FRIEND;
                            if(verify !== golfie) { _fun00034_ip = 170; continue _fun00033 }
 204:
                            golfie = report.add;
                            golfie = golfie.bind(report)(option);
                            _fun00034_ip = 170; continue _fun00033;
                        }
 216:
                        michal = _closure1_slot18;
                        entity = michal.getMutablePrivateChannels;
                        golfie = entity.bind(michal)();
                        tangon = golfie;
                        for(entity in tangon)
 241:
                        {
 250:
                            option = entity;
                            offset = golfie[option];
                            option = offset.isPrivate;
                            option = option.bind(offset)();
                            if(!option) { _fun00034_ip = 241; continue _fun00033 }
 270:
                            verify = report.add;
                            option = offset.getRecipientId;
                            option = option.bind(offset)();
                            option = verify.bind(report)(option);
                            _fun00034_ip = 241; continue _fun00033;
                        }
 292:
                        entity = _closure2_slot1;
                        variable37 = null;
                        if(!(variable37 != entity)) { _fun00034_ip = 310; continue _fun00033 }
 302:
                        entity = _closure2_slot15;
                        if(!(variable37 == entity)) { _fun00034_ip = 316; continue _fun00033 }
 310:
                        zuuluu = new Array(0);
                        _fun00034_ip = 345; continue _fun00033;
 316:
                        oscard = _closure1_slot16;
                        tangon = oscard.getRows;
                        michal = _closure2_slot1;
                        entity = _closure2_slot15;
                        entity = entity.id;
                        zuuluu = tangon.bind(oscard)(michal, entity);
 345:
                        michal = zuuluu.forEach;
                        entity = function(argFoo) {
                            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                                entity = argFoo;
                                zuuluu = entity.type;
                                michal = _closure1_slot17;
                                michal = michal.MEMBER;
                                if(!(zuuluu === michal)) { _fun00038_ip = 47; continue _fun00037 }
 25:
                                zuuluu = _closure4_slot0;
                                michal = zuuluu.add;
                                entity = entity.userId;
                                entity = michal.bind(zuuluu)(entity);
 47:
                                entity = undefined;
                                return entity;
                            }
                        };
                        entity = michal.bind(zuuluu)(entity);
                        variable36 = new Array(0);
                        quebec = new Array(0);
                        entity = variable41.Set;
                        michal = entity.prototype;
                        michal = Object.create(michal, {constructor: {value: entity}});
                        variable66 = michal;
                        entity = new variable66[entity](variable65);
                        oscard = entity instanceof Object ? entity : michal;
                        var _closure4_slot1 = oscard;
                        michal = _closure1_slot36;
                        entity = _closure2_slot24;
                        equals = undefined;
                        tangon = michal.bind(equals)(entity);
                        michal = tangon.bind(equals)();
                        entity = michal.done;
                        zuuluu = 604800;
                        if(entity) { _fun00034_ip = 536; continue _fun00033 }
 433:
                        entity = michal.value;
                        golfie = _closure1_slot10;
                        golfie = golfie.bind(equals)(entity);
                        if(golfie) { _fun00034_ip = 487; continue _fun00033 }
 450:
                        golfie = _closure1_slot9;
                        golfie = golfie.bind(equals)(entity);
                        if(!golfie) { _fun00034_ip = 472; continue _fun00033 }
 462:
                        option = _closure1_slot8;
                        golfie = option.bind(equals)(entity, zuuluu);
 472:
                        if(!golfie) { _fun00034_ip = 497; continue _fun00033 }
 475:
                        golfie = quebec.push;
                        golfie = golfie.bind(quebec)(entity);
                        _fun00034_ip = 497; continue _fun00033;
 487:
                        golfie = variable36.push;
                        golfie = golfie.bind(variable36)(entity);
 497:
                        golfie = entity.channel_id;
                        if(!(variable37 != golfie)) { _fun00034_ip = 521; continue _fun00033 }
 506:
                        golfie = oscard.add;
                        entity = entity.channel_id;
                        entity = golfie.bind(oscard)(entity);
 521:
                        golfie = tangon.bind(equals)();
                        entity = golfie.done;
                        michal = golfie;
                        if(!entity) { _fun00034_ip = 433; continue _fun00033 }
 536:
                        whisks = {};
                        var _closure4_slot2 = whisks;
                        limora = {};
                        var _closure4_slot3 = limora;
                        sierra = {};
                        var _closure4_slot4 = sierra;
                        status = {};
                        var _closure4_slot5 = status;
                        target = {};
                        var _closure4_slot6 = target;
                        papara = {};
                        var _closure4_slot7 = papara;
                        entity = _closure2_slot1;
                        if(!(variable37 != entity)) { _fun00034_ip = 644; continue _fun00033 }
 580:
                        entity = _closure2_slot5;
                        if(!entity) { _fun00034_ip = 644; continue _fun00033 }
 587:
                        zuuluu = _closure1_slot12;
                        michal = zuuluu.getStageInstancesByGuild;
                        entity = _closure2_slot1;
                        tangon = michal.bind(zuuluu)(entity);
                        michal = _closure1_slot1;
                        zuuluu = _closure1_slot2;
                        entity = 33;
                        entity = zuuluu[entity];
                        zuuluu = michal.bind(equals)(entity);
                        michal = zuuluu.forEach;
                        entity = function(argFoo) {
                            _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                                tangon = argFoo;
                                report = _closure1_slot23;
                                zuuluu = report.canWithPartialContext;
                                entity = _closure1_slot32;
                                michal = entity.CONNECT;
                                entity = {};
                                oscard = tangon.channel_id;
                                entity['channelId'] = oscard;
                                entity = zuuluu.bind(report)(michal, entity);
                                if(!entity) { _fun00040_ip = 70; continue _fun00039 }
 46:
                                report = tangon.channel_id;
                                zuuluu = function(argFoo) { // Original name: blockedOrIgnoredUserInVoiceChannel
                                    _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                                        oscard = argFoo;
                                        tangon = _closure1_slot0;
                                        report = _closure1_slot2;
                                        entity = 31;
                                        entity = report[entity];
                                        golfie = undefined;
                                        report = tangon.bind(golfie)(entity);
                                        tangon = report.isBlockingVoiceStatesEnabledBlocker;
                                        entity = 'blocked-user-in-voice-channel';
                                        entity = tangon.bind(report)(entity);
                                        if(entity) { _fun00042_ip = 54; continue _fun00041 }
 50:
                                        entity = false;
                                        return entity;
 54:
                                        entity = null;
                                        if(!(entity != oscard)) { _fun00042_ip = 176; continue _fun00041 }
 60:
                                        report = _closure1_slot28;
                                        tangon = report.getVoiceStatesForChannel;
                                        report = tangon.bind(report)(oscard);
                                        entity = entity != report;
                                        if(!entity) { _fun00042_ip = 174; continue _fun00041 }
 82:
                                        oscard = _closure1_slot1;
                                        option = _closure1_slot2;
                                        tangon = 33;
                                        tangon = option[tangon];
                                        tangon = oscard.bind(golfie)(tangon);
                                        oscard = tangon.bind(golfie)(report);
                                        report = oscard.map;
                                        tangon = function(argFoo) {
                                            _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                                                zuuluu = _closure1_slot27;
                                                michal = zuuluu.getUser;
                                                entity = argFoo;
                                                entity = entity.userId;
                                                michal = michal.bind(zuuluu)(entity);
                                                entity = null;
                                                zuuluu = entity == michal;
                                                entity = undefined;
                                                if(zuuluu) { _fun00044_ip = 42; continue _fun00043 }
 37:
                                                entity = michal.id;
 42:
                                                return entity;
                                            }
                                        };
                                        report = report.bind(oscard)(tangon);
                                        tangon = report.filter;
                                        oscard = _closure1_slot0;
                                        zuuluu = 40;
                                        zuuluu = option[zuuluu];
                                        zuuluu = oscard.bind(golfie)(zuuluu);
                                        zuuluu = zuuluu.isNotNullish;
                                        tangon = tangon.bind(report)(zuuluu);
                                        zuuluu = tangon.some;
                                        michal = function(argFoo) {
                                            zuuluu = _closure1_slot25;
                                            michal = zuuluu.isBlockedOrIgnored;
                                            entity = argFoo;
                                            entity = michal.bind(zuuluu)(entity);
                                            return entity;
                                        };
                                        entity = zuuluu.bind(tangon)(michal);
 174:
                                        return entity;
 176:
                                        entity = false;
                                        return entity;
                                    }
                                };
                                michal = undefined;
                                michal = zuuluu.bind(michal)(report);
                                entity = !michal;
 70:
                                if(!entity) { _fun00040_ip = 106; continue _fun00039 }
 73:
                                zuuluu = _closure4_slot2;
                                michal = tangon.channel_id;
                                entity = {};
                                report = 'live-guild-stage';
                                entity['kind'] = report;
                                entity['stage'] = tangon;
                                zuuluu[michal] = entity;
 106:
                                entity = undefined;
                                return entity;
                            }
                        };
                        entity = michal.bind(zuuluu)(tangon, entity);
 644:
                        cntext = new Array(0);
                        var _closure4_slot8 = cntext;
                        record = new Array(0);
                        var _closure4_slot9 = record;
                        zuuluu = _closure1_slot28;
                        michal = zuuluu.getVoiceStates;
                        entity = _closure2_slot1;
                        tangon = michal.bind(zuuluu)(entity);
                        var _closure4_slot10 = tangon;
                        zuuluu = report.forEach;
                        michal = function(argFoo) {
                            _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                                report = argFoo;
                                michal = _closure1_slot27;
                                entity = michal.getUser;
                                entity = entity.bind(michal)(report);
                                michal = null;
                                if(!(michal != entity)) { _fun00046_ip = 128; continue _fun00045 }
 27:
                                entity = entity.bot;
                                if(entity) { _fun00046_ip = 128; continue _fun00045 }
 36:
                                golfie = _closure1_slot24;
                                tangon = golfie.getPrimaryActivity;
                                oscard = _closure2_slot1;
                                tangon = tangon.bind(golfie)(report, oscard);
                                if(!(michal == oscard)) { _fun00046_ip = 80; continue _fun00045 }
 63:
                                oscard = _closure1_slot28;
                                zuuluu = oscard.getVoiceStateForUser;
                                zuuluu = zuuluu.bind(oscard)(report);
                                _fun00046_ip = 91; continue _fun00045;
 80:
                                oscard = _closure4_slot10;
                                zuuluu = oscard[report];
 91:
                                entity = _closure2_slot10;
                                if(entity) { _fun00046_ip = 102; continue _fun00045 }
 98:
                                entity = michal != tangon;
 102:
                                if(entity) { _fun00046_ip = 109; continue _fun00045 }
 105:
                                entity = michal != zuuluu;
 109:
                                if(!entity) { _fun00046_ip = 128; continue _fun00045 }
 112:
                                michal = _closure4_slot12;
                                entity = undefined;
                                entity = michal.bind(entity)(report, tangon, zuuluu);
 128:
                                entity = undefined;
                                return entity;
                            }
                        };
                        michal = zuuluu.bind(report)(michal);
                        if(!(variable37 != entity)) { _fun00034_ip = 742; continue _fun00033 }
 704:
                        michal = _closure1_slot1;
                        zuuluu = _closure1_slot2;
                        entity = 33;
                        entity = zuuluu[entity];
                        zuuluu = michal.bind(equals)(entity);
                        michal = zuuluu.forEach;
                        entity = function(argFoo) {
                            report = argFoo;
                            tangon = report.userId;
                            zuuluu = _closure4_slot12;
                            oscard = _closure1_slot24;
                            michal = oscard.getPrimaryActivity;
                            entity = _closure2_slot1;
                            michal = michal.bind(oscard)(tangon, entity);
                            entity = undefined;
                            michal = zuuluu.bind(entity)(tangon, michal, report);
                            return entity;
                        };
                        entity = michal.bind(zuuluu)(tangon, entity);
 742:
                        entity = new Array(0);
                        var _closure4_slot11 = entity;
                        zuuluu = _closure1_slot36;
                        michal = _closure2_slot0;
                        config = zuuluu.bind(equals)(michal);
                        zuuluu = config.bind(equals)();
                        michal = zuuluu.done;
                        sequen = 'unified-vc';
                        vacuum = 'kind';
                        ctrled = 38;
                        source = 2;
                        update = 'active-channel';
                        echoed = 'student-hub-add-channel';
                        result = 'create-channel';
                        output = 'invite';
                        sizing = 39;
                        kiloes = 'customize-guild';
                        backup = 40;
                        foxtra = zuuluu;
                        romeon = undefined;
                        yankee = undefined;
                        offset = undefined;
                        verify = undefined;
                        option = undefined;
                        golfie = undefined;
                        oscard = undefined;
                        report = undefined;
                        tangon = undefined;
                        zuuluu = undefined;
                        if(michal) { _fun00034_ip = 3365; continue _fun00033 }
 851:
                        variable45 = foxtra.value;
                        michal = _closure1_slot29;
                        michal = michal.LIVE_GUILD_STAGE;
                        if(!(michal !== variable45)) { _fun00034_ip = 3218; continue _fun00033 }
 873:
                        michal = _closure1_slot29;
                        michal = michal.LIVE_GUILD_EVENT;
                        if(!(michal !== variable45)) { _fun00034_ip = 3169; continue _fun00033 }
 890:
                        michal = _closure1_slot29;
                        michal = michal.UPCOMING_GUILD_EVENT;
                        if(!(michal !== variable45)) { _fun00034_ip = 3117; continue _fun00033 }
 907:
                        michal = _closure1_slot29;
                        michal = michal.VOICES;
                        if(!(michal !== variable45)) { _fun00034_ip = 3012; continue _fun00033 }
 924:
                        michal = _closure1_slot29;
                        michal = michal.EMBEDDED_ACTIVITY;
                        if(!(michal !== variable45)) { _fun00034_ip = 2845; continue _fun00033 }
 941:
                        michal = _closure1_slot29;
                        michal = michal.COMBINED_VC;
                        if(!(michal !== variable45)) { _fun00034_ip = 2726; continue _fun00033 }
 958:
                        michal = _closure1_slot29;
                        michal = michal.STREAMS;
                        if(!(michal !== variable45)) { _fun00034_ip = 2621; continue _fun00033 }
 975:
                        michal = _closure1_slot29;
                        michal = michal.USER_CUSTOM_STATUS;
                        if(!(michal !== variable45)) { _fun00034_ip = 2516; continue _fun00033 }
 992:
                        michal = _closure1_slot29;
                        michal = michal.ACTIVITIES;
                        if(!(michal !== variable45)) { _fun00034_ip = 2411; continue _fun00033 }
 1009:
                        michal = _closure1_slot29;
                        michal = michal.ACTIVE_CHANNEL;
                        if(!(michal !== variable45)) { _fun00034_ip = 2159; continue _fun00033 }
 1026:
                        michal = _closure1_slot29;
                        michal = michal.USER;
                        if(!(michal !== variable45)) { _fun00034_ip = 1812; continue _fun00033 }
 1043:
                        michal = _closure1_slot29;
                        michal = michal.STUDENT_HUB_ADD_CHANNEL;
                        if(!(michal !== variable45)) { _fun00034_ip = 1676; continue _fun00033 }
 1060:
                        michal = _closure1_slot29;
                        michal = michal.CREATE_CHANNEL;
                        if(!(michal !== variable45)) { _fun00034_ip = 1500; continue _fun00033 }
 1077:
                        michal = _closure1_slot29;
                        michal = michal.INVITE;
                        if(!(michal !== variable45)) { _fun00034_ip = 1341; continue _fun00033 }
 1094:
                        michal = _closure1_slot29;
                        michal = michal.CUSTOMIZE_GUILD;
                        if(!(michal !== variable45)) { _fun00034_ip = 1171; continue _fun00033 }
 1108:
                        variable44 = _closure1_slot0;
                        michal = _closure1_slot2;
                        michal = michal[backup];
                        variable44 = variable44.bind(equals)(michal);
                        michal = variable44.assertNever;
                        michal = michal.bind(variable44)(variable45);
                        variable53 = romeon;
                        variable52 = yankee;
                        variable51 = offset;
                        variable50 = verify;
                        variable49 = option;
                        variable48 = golfie;
                        variable47 = oscard;
                        variable46 = report;
                        variable45 = tangon;
                        variable44 = zuuluu;
                        _fun00034_ip = 3317; continue _fun00033;
 1171:
                        michal = _closure2_slot14;
                        michal = variable37 != michal;
                        if(!michal) { _fun00034_ip = 1212; continue _fun00033 }
 1182:
                        variable57 = _closure1_slot23;
                        variable56 = variable57.can;
                        variable54 = _closure1_slot32;
                        variable55 = variable54.MANAGE_GUILD;
                        variable54 = _closure2_slot14;
                        michal = variable56.bind(variable57)(variable55, variable54);
 1212:
                        if(!michal) { _fun00034_ip = 1241; continue _fun00033 }
 1215:
                        variable54 = _closure2_slot14;
                        variable55 = variable37 == variable54;
                        variable54 = undefined;
                        if(variable55) { _fun00034_ip = 1237; continue _fun00033 }
 1228:
                        variable55 = _closure2_slot14;
                        variable54 = variable55.icon;
 1237:
                        michal = variable37 == variable54;
 1241:
                        variable53 = romeon;
                        variable52 = yankee;
                        variable51 = offset;
                        variable50 = verify;
                        variable49 = option;
                        variable48 = golfie;
                        variable47 = oscard;
                        variable46 = report;
                        variable45 = tangon;
                        variable44 = zuuluu;
                        if(!michal) { _fun00034_ip = 3317; continue _fun00033 }
 1277:
                        variable54 = entity.push;
                        michal = {};
                        michal['kind'] = kiloes;
                        variable55 = _closure2_slot14;
                        variable55 = variable55.id;
                        michal['guildId'] = variable55;
                        michal = variable54.bind(entity)(michal);
                        variable53 = romeon;
                        variable52 = yankee;
                        variable51 = offset;
                        variable50 = verify;
                        variable49 = option;
                        variable48 = golfie;
                        variable47 = oscard;
                        variable46 = report;
                        variable45 = tangon;
                        variable44 = zuuluu;
                        _fun00034_ip = 3317; continue _fun00033;
 1341:
                        michal = _closure2_slot14;
                        michal = variable37 != michal;
                        if(!michal) { _fun00034_ip = 1360; continue _fun00033 }
 1352:
                        variable54 = _closure2_slot17;
                        michal = variable37 != variable54;
 1360:
                        if(!michal) { _fun00034_ip = 1400; continue _fun00033 }
 1363:
                        variable55 = _closure1_slot0;
                        variable54 = _closure1_slot2;
                        variable54 = variable54[sizing];
                        variable57 = variable55.bind(equals)(variable54);
                        variable56 = variable57.shouldRenderInvite;
                        variable55 = _closure2_slot17;
                        variable54 = _closure2_slot14;
                        michal = variable56.bind(variable57)(variable55, variable54);
 1400:
                        variable53 = romeon;
                        variable52 = yankee;
                        variable51 = offset;
                        variable50 = verify;
                        variable49 = option;
                        variable48 = golfie;
                        variable47 = oscard;
                        variable46 = report;
                        variable45 = tangon;
                        variable44 = zuuluu;
                        if(!michal) { _fun00034_ip = 3317; continue _fun00033 }
 1436:
                        variable54 = entity.push;
                        michal = {};
                        michal['kind'] = output;
                        variable55 = _closure2_slot14;
                        variable55 = variable55.id;
                        michal['guildId'] = variable55;
                        michal = variable54.bind(entity)(michal);
                        variable53 = romeon;
                        variable52 = yankee;
                        variable51 = offset;
                        variable50 = verify;
                        variable49 = option;
                        variable48 = golfie;
                        variable47 = oscard;
                        variable46 = report;
                        variable45 = tangon;
                        variable44 = zuuluu;
                        _fun00034_ip = 3317; continue _fun00033;
 1500:
                        michal = _closure2_slot14;
                        michal = variable37 != michal;
                        if(!michal) { _fun00034_ip = 1541; continue _fun00033 }
 1511:
                        variable57 = _closure1_slot23;
                        variable56 = variable57.can;
                        variable54 = _closure1_slot32;
                        variable55 = variable54.MANAGE_CHANNELS;
                        variable54 = _closure2_slot14;
                        michal = variable56.bind(variable57)(variable55, variable54);
 1541:
                        if(!michal) { _fun00034_ip = 1552; continue _fun00033 }
 1544:
                        variable54 = _closure2_slot17;
                        michal = variable37 != variable54;
 1552:
                        if(!michal) { _fun00034_ip = 1576; continue _fun00033 }
 1555:
                        variable55 = _closure2_slot17;
                        variable54 = _closure1_slot20;
                        variable54 = variable55[variable54];
                        variable54 = variable54.length;
                        michal = variable54 <= source;
 1576:
                        variable53 = romeon;
                        variable52 = yankee;
                        variable51 = offset;
                        variable50 = verify;
                        variable49 = option;
                        variable48 = golfie;
                        variable47 = oscard;
                        variable46 = report;
                        variable45 = tangon;
                        variable44 = zuuluu;
                        if(!michal) { _fun00034_ip = 3317; continue _fun00033 }
 1612:
                        variable54 = entity.push;
                        michal = {};
                        michal['kind'] = result;
                        variable55 = _closure2_slot14;
                        variable55 = variable55.id;
                        michal['guildId'] = variable55;
                        michal = variable54.bind(entity)(michal);
                        variable53 = romeon;
                        variable52 = yankee;
                        variable51 = offset;
                        variable50 = verify;
                        variable49 = option;
                        variable48 = golfie;
                        variable47 = oscard;
                        variable46 = report;
                        variable45 = tangon;
                        variable44 = zuuluu;
                        _fun00034_ip = 3317; continue _fun00033;
 1676:
                        michal = _closure2_slot14;
                        michal = variable37 != michal;
                        if(!michal) { _fun00034_ip = 1712; continue _fun00033 }
 1687:
                        variable56 = _closure2_slot14;
                        variable55 = variable56.hasFeature;
                        variable54 = _closure1_slot31;
                        variable54 = variable54.HUB;
                        michal = variable55.bind(variable56)(variable54);
 1712:
                        variable53 = romeon;
                        variable52 = yankee;
                        variable51 = offset;
                        variable50 = verify;
                        variable49 = option;
                        variable48 = golfie;
                        variable47 = oscard;
                        variable46 = report;
                        variable45 = tangon;
                        variable44 = zuuluu;
                        if(!michal) { _fun00034_ip = 3317; continue _fun00033 }
 1748:
                        variable54 = entity.push;
                        michal = {};
                        michal['kind'] = echoed;
                        variable55 = _closure2_slot14;
                        variable55 = variable55.id;
                        michal['guildId'] = variable55;
                        michal = variable54.bind(entity)(michal);
                        variable53 = romeon;
                        variable52 = yankee;
                        variable51 = offset;
                        variable50 = verify;
                        variable49 = option;
                        variable48 = golfie;
                        variable47 = oscard;
                        variable46 = report;
                        variable45 = tangon;
                        variable44 = zuuluu;
                        _fun00034_ip = 3317; continue _fun00033;
 1812:
                        michal = cntext.length;
                        variable58 = variable39 < michal;
                        variable55 = 0;
                        variable54 = 0;
                        michal = 0;
                        variable57 = 0;
                        variable56 = report;
                        if(!variable58) { _fun00034_ip = 1928; continue _fun00033 }
 1835:
                        variable59 = cntext[variable54];
                        variable58 = _closure2_slot2;
                        variable60 = variable37 != variable58;
                        if(!variable60) { _fun00034_ip = 1869; continue _fun00033 }
 1850:
                        variable62 = _closure2_slot2;
                        variable61 = variable62.has;
                        variable58 = variable59.userId;
                        variable60 = variable61.bind(variable62)(variable58);
 1869:
                        variable58 = variable55;
                        if(variable60) { _fun00034_ip = 1888; continue _fun00033 }
 1875:
                        variable60 = entity.push;
                        variable60 = variable60.bind(entity)(variable59);
                        variable58 = variable55 + 1;
 1888:
                        variable60 = variable54 + 1;
                        variable61 = cntext.length;
                        michal = variable58;
                        variable57 = variable60;
                        variable56 = variable59;
                        if(!(variable60 < variable61)) { _fun00034_ip = 1928; continue _fun00033 }
 1909:
                        variable55 = variable58;
                        variable54 = variable60;
                        variable57 = variable54;
                        variable56 = variable59;
                        michal = variable55;
                        if(michal < variable40) { _fun00034_ip = 1835; continue _fun00033 }
 1928:
                        variable54 = record.length;
                        variable54 = variable39 < variable54;
                        variable53 = romeon;
                        variable52 = yankee;
                        variable51 = offset;
                        variable50 = verify;
                        variable49 = option;
                        variable48 = michal;
                        variable47 = variable57;
                        variable46 = variable56;
                        variable45 = 0;
                        variable44 = zuuluu;
                        if(!variable54) { _fun00034_ip = 3317; continue _fun00033 }
 1972:
                        variable55 = michal;
                        variable54 = 0;
                        variable53 = romeon;
                        variable52 = yankee;
                        variable51 = offset;
                        variable50 = verify;
                        variable49 = option;
                        variable48 = variable55;
                        variable47 = variable57;
                        variable46 = variable56;
                        variable45 = 0;
                        variable44 = zuuluu;
                        if(!(michal < variable40)) { _fun00034_ip = 3317; continue _fun00033 }
 2013:
                        variable58 = record[variable54];
                        michal = _closure2_slot2;
                        variable59 = variable37 != michal;
                        if(!variable59) { _fun00034_ip = 2047; continue _fun00033 }
 2028:
                        variable61 = _closure2_slot2;
                        variable60 = variable61.has;
                        michal = variable58.userId;
                        variable59 = variable60.bind(variable61)(michal);
 2047:
                        michal = variable55;
                        if(variable59) { _fun00034_ip = 2066; continue _fun00033 }
 2053:
                        variable59 = entity.push;
                        variable59 = variable59.bind(entity)(variable58);
                        michal = variable55 + 1;
 2066:
                        variable59 = variable54 + 1;
                        variable60 = record.length;
                        variable53 = romeon;
                        variable52 = yankee;
                        variable51 = offset;
                        variable50 = verify;
                        variable49 = option;
                        variable48 = michal;
                        variable47 = variable57;
                        variable46 = variable56;
                        variable44 = variable58;
                        variable45 = variable59;
                        if(!(variable45 < variable60)) { _fun00034_ip = 3317; continue _fun00033 }
 2111:
                        variable55 = michal;
                        variable54 = variable59;
                        variable53 = romeon;
                        variable52 = yankee;
                        variable51 = offset;
                        variable50 = verify;
                        variable49 = option;
                        variable48 = variable55;
                        variable47 = variable57;
                        variable46 = variable56;
                        variable45 = variable54;
                        variable44 = variable58;
                        if(michal < variable40) { _fun00034_ip = 2013; continue _fun00033 }
 2154:
                        _fun00034_ip = 3317; continue _fun00033;
 2159:
                        michal = _closure2_slot1;
                        variable53 = romeon;
                        variable52 = yankee;
                        variable51 = offset;
                        variable50 = verify;
                        variable49 = option;
                        variable48 = golfie;
                        variable47 = oscard;
                        variable46 = report;
                        variable45 = tangon;
                        variable44 = zuuluu;
                        if(!(variable37 != michal)) { _fun00034_ip = 3317; continue _fun00033 }
 2200:
                        variable54 = _closure1_slot0;
                        michal = _closure1_slot2;
                        michal = michal[ctrled];
                        variable56 = variable54.bind(equals)(michal);
                        variable55 = variable56.getActiveTextChannels;
                        variable54 = _closure2_slot1;
                        variable57 = _closure1_slot18;
                        michal = new Array(4);
                        michal[0] = variable57;
                        variable57 = _closure1_slot23;
                        michal[1] = variable57;
                        variable57 = _closure1_slot7;
                        michal[2] = variable57;
                        variable57 = _closure1_slot26;
                        michal[3] = variable57;
                        variable55 = variable55.bind(variable56)(variable54, michal);
                        variable56 = variable41.Math;
                        variable54 = variable56.min;
                        michal = variable55.length;
                        variable54 = variable54.bind(variable56)(source, michal);
                        variable56 = variable39 < variable54;
                        michal = 0;
                        variable53 = romeon;
                        variable52 = yankee;
                        variable51 = variable55;
                        variable50 = variable54;
                        variable49 = 0;
                        variable48 = golfie;
                        variable47 = oscard;
                        variable46 = report;
                        variable45 = tangon;
                        variable44 = zuuluu;
                        if(!variable56) { _fun00034_ip = 3317; continue _fun00033 }
 2332:
                        variable57 = entity.push;
                        variable56 = {};
                        variable56['kind'] = update;
                        variable58 = _closure2_slot1;
                        variable56['guildId'] = variable58;
                        variable58 = variable55[michal];
                        variable58 = variable58.id;
                        variable56['channelId'] = variable58;
                        variable56 = variable57.bind(entity)(variable56);
                        michal = michal + 1;
                        variable53 = romeon;
                        variable52 = yankee;
                        variable51 = variable55;
                        variable50 = variable54;
                        variable48 = golfie;
                        variable47 = oscard;
                        variable46 = report;
                        variable45 = tangon;
                        variable44 = zuuluu;
                        variable49 = michal;
                        if(variable49 < variable54) { _fun00034_ip = 2332; continue _fun00033 }
 2406:
                        _fun00034_ip = 3317; continue _fun00033;
 2411:
                        variable56 = target;
                        variable53 = romeon;
                        variable52 = yankee;
                        variable51 = offset;
                        variable50 = verify;
                        variable49 = option;
                        variable48 = golfie;
                        variable47 = oscard;
                        variable46 = report;
                        variable45 = tangon;
                        variable44 = zuuluu;
                        for(michal in variable56)
 2455:
                        {
                            variable53 = romeon;
                            variable52 = yankee;
                            variable51 = offset;
                            variable50 = verify;
                            variable49 = option;
                            variable48 = golfie;
                            variable47 = oscard;
                            variable46 = report;
                            variable45 = tangon;
                            variable44 = zuuluu;
 2497:
                            variable58 = michal;
                            variable59 = entity.push;
                            variable58 = target[variable58];
                            variable58 = variable59.bind(entity)(variable58);
                            _fun00034_ip = 2455; continue _fun00033;
 2516:
                            variable56 = papara;
                            variable53 = romeon;
                            variable52 = yankee;
                            variable51 = offset;
                            variable50 = verify;
                            variable49 = option;
                            variable48 = golfie;
                            variable47 = oscard;
                            variable46 = report;
                            variable45 = tangon;
                            variable44 = zuuluu;
                            for(michal in variable56)
 2560:
                            {
                                variable53 = romeon;
                                variable52 = yankee;
                                variable51 = offset;
                                variable50 = verify;
                                variable49 = option;
                                variable48 = golfie;
                                variable47 = oscard;
                                variable46 = report;
                                variable45 = tangon;
                                variable44 = zuuluu;
 2602:
                                variable58 = michal;
                                variable59 = entity.push;
                                variable58 = papara[variable58];
                                variable58 = variable59.bind(entity)(variable58);
                                _fun00034_ip = 2560; continue _fun00033;
 2621:
                                variable56 = status;
                                variable53 = romeon;
                                variable52 = yankee;
                                variable51 = offset;
                                variable50 = verify;
                                variable49 = option;
                                variable48 = golfie;
                                variable47 = oscard;
                                variable46 = report;
                                variable45 = tangon;
                                variable44 = zuuluu;
                                for(michal in variable56)
 2665:
                                {
                                    variable53 = romeon;
                                    variable52 = yankee;
                                    variable51 = offset;
                                    variable50 = verify;
                                    variable49 = option;
                                    variable48 = golfie;
                                    variable47 = oscard;
                                    variable46 = report;
                                    variable45 = tangon;
                                    variable44 = zuuluu;
 2707:
                                    variable58 = michal;
                                    variable59 = entity.push;
                                    variable58 = status[variable58];
                                    variable58 = variable59.bind(entity)(variable58);
                                    _fun00034_ip = 2665; continue _fun00033;
 2726:
                                    variable56 = limora;
                                    variable53 = romeon;
                                    variable52 = yankee;
                                    variable51 = offset;
                                    variable50 = verify;
                                    variable49 = option;
                                    variable48 = golfie;
                                    variable47 = oscard;
                                    variable46 = report;
                                    variable45 = tangon;
                                    variable44 = zuuluu;
                                    for(michal in variable56)
 2770:
                                    {
                                        variable53 = romeon;
                                        variable52 = yankee;
                                        variable51 = offset;
                                        variable50 = verify;
                                        variable49 = option;
                                        variable48 = golfie;
                                        variable47 = oscard;
                                        variable46 = report;
                                        variable45 = tangon;
                                        variable44 = zuuluu;
 2812:
                                        variable60 = michal;
                                        variable59 = entity.push;
                                        variable58 = {};
                                        variable64 = limora[variable60];
                                        variable65 = variable58;
                                        variable60 = copyDataProperties(variable65, variable64);
                                        variable58[vacuum] = sequen;
                                        variable58 = variable59.bind(entity)(variable58);
                                        _fun00034_ip = 2770; continue _fun00033;
 2845:
                                        variable61 = sierra;
                                        variable57 = romeon;
                                        variable56 = yankee;
                                        variable53 = variable57;
                                        variable52 = variable56;
                                        variable51 = offset;
                                        variable50 = verify;
                                        variable49 = option;
                                        variable48 = golfie;
                                        variable47 = oscard;
                                        variable46 = report;
                                        variable45 = tangon;
                                        variable44 = zuuluu;
                                        for(variable58 in variable61)
 2895:
                                        {
                                            variable53 = variable57;
                                            variable52 = variable56;
                                            variable51 = offset;
                                            variable50 = verify;
                                            variable49 = option;
                                            variable48 = golfie;
                                            variable47 = oscard;
                                            variable46 = report;
                                            variable45 = tangon;
                                            variable44 = zuuluu;
 2937:
                                            michal = variable58;
                                            variable54 = _closure1_slot36;
                                            michal = sierra[michal];
                                            variable55 = variable54.bind(equals)(michal);
                                            variable54 = variable55.bind(equals)();
                                            michal = variable54.done;
                                            variable57 = variable54;
                                            variable56 = variable55;
                                            variable54 = variable57;
                                            if(michal) { _fun00034_ip = 2895; continue _fun00033 }
 2974:
                                            variable63 = variable54.value;
                                            michal = entity.push;
                                            michal = michal.bind(entity)(variable63);
                                            variable63 = variable55.bind(equals)();
                                            michal = variable63.done;
                                            variable57 = variable63;
                                            variable56 = variable55;
                                            variable54 = variable57;
                                            if(michal) { _fun00034_ip = 2895; continue _fun00033 }
 3010:
                                            _fun00034_ip = 2974; continue _fun00033;
 3012:
                                            variable56 = limora;
                                            variable53 = romeon;
                                            variable52 = yankee;
                                            variable51 = offset;
                                            variable50 = verify;
                                            variable49 = option;
                                            variable48 = golfie;
                                            variable47 = oscard;
                                            variable46 = report;
                                            variable45 = tangon;
                                            variable44 = zuuluu;
                                            for(michal in variable56)
 3056:
                                            {
                                                variable53 = romeon;
                                                variable52 = yankee;
                                                variable51 = offset;
                                                variable50 = verify;
                                                variable49 = option;
                                                variable48 = golfie;
                                                variable47 = oscard;
                                                variable46 = report;
                                                variable45 = tangon;
                                                variable44 = zuuluu;
 3098:
                                                variable58 = michal;
                                                variable59 = entity.push;
                                                variable58 = limora[variable58];
                                                variable58 = variable59.bind(entity)(variable58);
                                                _fun00034_ip = 3056; continue _fun00033;
 3117:
                                                variable54 = quebec.forEach;
                                                michal = function(argFoo) {
                                                    zuuluu = _closure4_slot11;
                                                    michal = zuuluu.push;
                                                    entity = {'kind': 'guild-event', 'event': null, 'isLive': false};
                                                    tangon = argFoo;
                                                    entity['event'] = tangon;
                                                    entity = michal.bind(zuuluu)(entity);
                                                    return entity;
                                                };
                                                michal = variable54.bind(quebec)(michal);
                                                variable53 = romeon;
                                                variable52 = yankee;
                                                variable51 = offset;
                                                variable50 = verify;
                                                variable49 = option;
                                                variable48 = golfie;
                                                variable47 = oscard;
                                                variable46 = report;
                                                variable45 = tangon;
                                                variable44 = zuuluu;
                                                _fun00034_ip = 3317; continue _fun00033;
 3169:
                                                variable54 = variable36.forEach;
                                                michal = function(argFoo) {
                                                    zuuluu = _closure4_slot11;
                                                    michal = zuuluu.push;
                                                    entity = {'kind': 'guild-event', 'event': null, 'isLive': true};
                                                    tangon = argFoo;
                                                    entity['event'] = tangon;
                                                    entity = michal.bind(zuuluu)(entity);
                                                    return entity;
                                                };
                                                michal = variable54.bind(variable36)(michal);
                                                variable53 = romeon;
                                                variable52 = yankee;
                                                variable51 = offset;
                                                variable50 = verify;
                                                variable49 = option;
                                                variable48 = golfie;
                                                variable47 = oscard;
                                                variable46 = report;
                                                variable45 = tangon;
                                                variable44 = zuuluu;
                                                _fun00034_ip = 3317; continue _fun00033;
 3218:
                                                variable56 = whisks;
                                                variable53 = romeon;
                                                variable52 = yankee;
                                                variable51 = offset;
                                                variable50 = verify;
                                                variable49 = option;
                                                variable48 = golfie;
                                                variable47 = oscard;
                                                variable46 = report;
                                                variable45 = tangon;
                                                variable44 = zuuluu;
                                                for(michal in variable56)
 3259:
                                                {
                                                    variable53 = romeon;
                                                    variable52 = yankee;
                                                    variable51 = offset;
                                                    variable50 = verify;
                                                    variable49 = option;
                                                    variable48 = golfie;
                                                    variable47 = oscard;
                                                    variable46 = report;
                                                    variable45 = tangon;
                                                    variable44 = zuuluu;
 3298:
                                                    variable58 = michal;
                                                    variable59 = entity.push;
                                                    variable58 = whisks[variable58];
                                                    variable58 = variable59.bind(entity)(variable58);
                                                    _fun00034_ip = 3259; continue _fun00033;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
 3317:
                        variable54 = config.bind(equals)();
                        michal = variable54.done;
                        romeon = variable53;
                        yankee = variable52;
                        offset = variable51;
                        verify = variable50;
                        option = variable49;
                        golfie = variable48;
                        oscard = variable47;
                        report = variable46;
                        tangon = variable45;
                        zuuluu = variable44;
                        foxtra = variable54;
                        if(!michal) { _fun00034_ip = 851; continue _fun00033 }
 3365:
                        return entity;
                    }
                };
                entity = tangon.bind(report)(zuuluu, michal, entity);
                return entity;
            };
            option = romeon.bind(backup)(tangon, option);
            var _closure2_slot28 = option;
            romeon = backup.useState;
            tangon = function() {
                _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                    entity = _closure2_slot26;
                    if(entity) { _fun00048_ip = 98; continue _fun00047 }
 10:
                    entity = _closure2_slot28;
                    golfie = undefined;
                    entity = entity.bind(golfie)();
                    zuuluu = _closure2_slot1;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00048_ip = 96; continue _fun00047 }
 30:
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 29;
                    michal = tangon[michal];
                    tangon = zuuluu.bind(golfie)(michal);
                    zuuluu = tangon.dispatch;
                    michal = {};
                    option = 'GUILD_HEADER_ACTIVE_CHANNELS_COUNT';
                    michal['type'] = option;
                    oscard = _closure1_slot38;
                    oscard = oscard.bind(golfie)(entity);
                    michal['count'] = oscard;
                    report = _closure2_slot1;
                    michal['guildId'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 96:
                    return entity;
 98:
                    entity = new Array(0);
                    return entity;
                }
            };
            foxtra = romeon.bind(backup)(tangon);
            romeon = _closure1_slot3;
            tangon = 2;
            foxtra = romeon.bind(report)(foxtra, tangon);
            tangon = 0;
            tangon = foxtra[tangon];
            romeon = 1;
            romeon = foxtra[romeon];
            var _closure2_slot29 = romeon;
            foxtra = backup.useCallback;
            romeon = new Array(2);
            romeon[0] = option;
            romeon[1] = offset;
            option = function() {
                _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                    michal = _closure2_slot28;
                    entity = undefined;
                    golfie = michal.bind(entity)();
                    michal = _closure2_slot29;
                    michal = michal.bind(entity)(golfie);
                    zuuluu = _closure2_slot1;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00050_ip = 98; continue _fun00049 }
 32:
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 29;
                    michal = tangon[michal];
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.dispatch;
                    michal = {};
                    option = 'GUILD_HEADER_ACTIVE_CHANNELS_COUNT';
                    michal['type'] = option;
                    oscard = _closure1_slot38;
                    oscard = oscard.bind(entity)(golfie);
                    michal['count'] = oscard;
                    report = _closure2_slot1;
                    michal['guildId'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 98:
                    return entity;
                }
            };
            option = foxtra.bind(backup)(option, romeon);
            var _closure2_slot30 = option;
            foxtra = backup.useEffect;
            romeon = new Array(4);
            romeon[0] = offset;
            romeon[1] = michal;
            romeon[2] = golfie;
            romeon[3] = option;
            golfie = function() {
                _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                    tangon = _closure2_slot1;
                    zuuluu = _closure2_slot27;
                    zuuluu = zuuluu.current;
                    zuuluu = zuuluu.guildId;
                    if(!(tangon !== zuuluu)) { _fun00052_ip = 54; continue _fun00051 }
 27:
                    tangon = _closure2_slot27;
                    zuuluu = {};
                    report = _closure2_slot1;
                    zuuluu['guildId'] = report;
                    report = false;
                    zuuluu['hasComputed'] = report;
                    tangon['current'] = zuuluu;
 54:
                    zuuluu = _closure2_slot27;
                    zuuluu = zuuluu.current;
                    zuuluu = zuuluu.hasComputed;
                    if(zuuluu) { _fun00052_ip = 93; continue _fun00051 }
 72:
                    tangon = _closure2_slot26;
                    zuuluu = undefined;
                    if(tangon) { _fun00052_ip = 91; continue _fun00051 }
 81:
                    tangon = _closure2_slot30;
                    tangon = tangon.bind(zuuluu)();
                    _fun00052_ip = 100; continue _fun00051;
 91:
                    return zuuluu;
 93:
                    michal = _closure2_slot20;
                    if(michal) { _fun00052_ip = 104; continue _fun00051 }
 100:
                    michal = undefined;
                    return michal;
 104:
                    michal = global;
                    report = michal.setTimeout;
                    tangon = undefined;
                    zuuluu = function() {
                        michal = _closure2_slot30;
                        entity = undefined;
                        michal = michal.bind(entity)();
                        return entity;
                    };
                    michal = 50;
                    michal = report.bind(tangon)(zuuluu, michal);
                    var _closure3_slot0 = michal;
                    entity = function() {
                        entity = global;
                        zuuluu = entity.clearTimeout;
                        michal = _closure3_slot0;
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    return entity;
                }
            };
            golfie = foxtra.bind(backup)(golfie, romeon);
            golfie = null;
            romeon = golfie == yankee;
            golfie = undefined;
            if(romeon) { _fun00010_ip = 1465; continue _fun00009 }
 1460:
            golfie = yankee.id;
 1465:
            oscard = function(argFoo, argBar, argBaz, argCor) { // Original name: useSpammyStoresVersion
                option = argFoo;
                golfie = argBar;
                michal = argBaz;
                oscard = argCor;
                var _closure3_slot0 = option;
                var _closure3_slot1 = golfie;
                var _closure3_slot2 = michal;
                var _closure3_slot3 = oscard;
                tangon = _closure1_slot4;
                report = tangon.useRef;
                zuuluu = -1;
                zuuluu = report.bind(tangon)(zuuluu);
                var _closure3_slot4 = zuuluu;
                report = tangon.useRef;
                zuuluu = 0;
                zuuluu = report.bind(tangon)(zuuluu);
                var _closure3_slot5 = zuuluu;
                report = tangon.useCallback;
                zuuluu = new Array(4);
                zuuluu[0] = option;
                zuuluu[1] = golfie;
                zuuluu[2] = oscard;
                zuuluu[3] = michal;
                michal = function() {
                    _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                        michal = global;
                        report = michal.clearTimeout;
                        entity = _closure3_slot4;
                        tangon = entity.current;
                        entity = undefined;
                        tangon = report.bind(entity)(tangon);
                        tangon = _closure3_slot2;
                        if(!tangon) { _fun00054_ip = 71; continue _fun00053 }
 34:
                        zuuluu = _closure3_slot4;
                        report = michal.setTimeout;
                        tangon = function() {
                            _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
                                michal = _closure1_slot27;
                                entity = michal.getUserStoreVersion;
                                michal = entity.bind(michal)();
                                zuuluu = _closure1_slot18;
                                entity = zuuluu.getPrivateChannelsVersion;
                                entity = entity.bind(zuuluu)();
                                michal = michal + entity;
                                zuuluu = _closure1_slot28;
                                entity = zuuluu.getVoiceStateVersion;
                                entity = entity.bind(zuuluu)();
                                zuuluu = michal + entity;
                                michal = _closure3_slot0;
                                golfie = null;
                                report = golfie != michal;
                                oscard = -1;
                                michal = oscard;
                                if(!report) { _fun00056_ip = 126; continue _fun00055 }
 82:
                                report = _closure3_slot1;
                                report = golfie != report;
                                michal = oscard;
                                if(!report) { _fun00056_ip = 126; continue _fun00055 }
 96:
                                golfie = _closure1_slot16;
                                oscard = golfie.getProps;
                                report = _closure3_slot0;
                                tangon = _closure3_slot1;
                                tangon = oscard.bind(golfie)(report, tangon);
                                michal = tangon.version;
 126:
                                zuuluu = zuuluu + michal;
                                michal = _closure3_slot5;
                                michal = michal.current;
                                if(!(michal !== zuuluu)) { _fun00056_ip = 163; continue _fun00055 }
 143:
                                michal = _closure3_slot5;
                                michal['current'] = zuuluu;
                                michal = _closure3_slot3;
                                entity = undefined;
                                entity = michal.bind(entity)();
 163:
                                entity = undefined;
                                return entity;
                            }
                        };
                        michal = 1000;
                        michal = report.bind(entity)(tangon, michal);
                        zuuluu['current'] = michal;
 71:
                        return entity;
                    }
                };
                report = report.bind(tangon)(michal, zuuluu);
                var _closure3_slot6 = report;
                zuuluu = tangon.useEffect;
                michal = new Array(1);
                michal[0] = report;
                entity = function() {
                    tangon = _closure1_slot35;
                    zuuluu = tangon.forEach;
                    michal = function(argFoo) {
                        zuuluu = argFoo;
                        michal = zuuluu.addChangeListener;
                        entity = _closure3_slot6;
                        entity = michal.bind(zuuluu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    michal = zuuluu.bind(tangon)(michal);
                    entity = function() {
                        entity = global;
                        zuuluu = entity.clearTimeout;
                        entity = _closure3_slot4;
                        michal = entity.current;
                        entity = undefined;
                        michal = zuuluu.bind(entity)(michal);
                        tangon = _closure1_slot35;
                        zuuluu = tangon.forEach;
                        michal = function(argFoo) {
                            zuuluu = argFoo;
                            michal = zuuluu.removeChangeListener;
                            entity = _closure3_slot6;
                            entity = michal.bind(zuuluu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    return entity;
                };
                entity = zuuluu.bind(tangon)(entity, michal);
                entity = undefined;
                return entity;
            };
            variable39 = undefined;
            variable38 = offset;
            variable37 = golfie;
            variable36 = verify;
            quebec = option;
            oscard = variable39[oscard](variable38, variable37, variable36, quebec, equals);
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            entity = 41;
            entity = golfie[entity];
            entity = oscard.bind(report)(entity);
            zuuluu = entity.bind(report)(zuuluu);
            entity = new Array(2);
            entity[0] = tangon;
            if(michal) { _fun00010_ip = 1535; continue _fun00009 }
 1526:
            zuuluu = zuuluu.hasComputed;
            michal = !zuuluu;
 1535:
            entity[1] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();