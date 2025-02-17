// app/modules/main_tabs_v2/native/shared_components/happening_now/useHappeningNowData.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot37;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot37;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot36 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot37 = entity;
    entity = function(argFoo) { // Original name: countActiveChannels
        zulu = argFoo;
        mike = zulu.filter;
        entity = function(argFoo) {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = argFoo;
                zulu = entity.kind;
                entity = 'active-channel';
                entity = entity === zulu;
                if(entity) { _fun00008_ip = 29; continue _fun00007 }
 21:
                mike = 'voice';
                entity = mike === zulu;
 29:
                if(entity) { _fun00008_ip = 42; continue _fun00007 }
 32:
                mike = 'live-guild-stage';
                entity = mike === zulu;
 42:
                if(entity) { _fun00008_ip = 55; continue _fun00007 }
 45:
                mike = 'unified-vc';
                entity = mike === zulu;
 55:
                if(entity) { _fun00008_ip = 68; continue _fun00007 }
 58:
                mike = 'embedded-activity';
                entity = mike === zulu;
 68:
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        entity = entity.length;
        return entity;
    };
    var _closure1_slot38 = entity;
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
    tango = tango.bind(entity)(golf);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
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
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    verify = golf.eventScheduledToStartWithin;
    var _closure1_slot8 = verify;
    verify = golf.isEventUpcoming;
    var _closure1_slot9 = verify;
    golf = golf.isGuildScheduledEventActive;
    var _closure1_slot10 = golf;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot11 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot12 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot13 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot14 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot15 = tango;
    tango = 10;
    golf = oscar[tango];
    verify = options.bind(entity)(golf);
    var _closure1_slot16 = verify;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.MemberListRowTypes;
    var _closure1_slot17 = tango;
    tango = 11;
    tango = oscar[tango];
    offset = options.bind(entity)(tango);
    var _closure1_slot18 = offset;
    tango = 12;
    golf = oscar[tango];
    golf = options.bind(entity)(golf);
    var _closure1_slot19 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot20 = tango;
    tango = 13;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot21 = tango;
    tango = 14;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot22 = tango;
    tango = 15;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot23 = tango;
    tango = 16;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot24 = tango;
    tango = 17;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot25 = tango;
    tango = 18;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot26 = tango;
    tango = 19;
    tango = oscar[tango];
    golf = options.bind(entity)(tango);
    var _closure1_slot27 = golf;
    tango = 20;
    tango = oscar[tango];
    options = options.bind(entity)(tango);
    var _closure1_slot28 = options;
    tango = 21;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.HappeningNowItem;
    var _closure1_slot29 = tango;
    tango = 22;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    yankee = tango.ActivityFlags;
    var _closure1_slot30 = yankee;
    yankee = tango.GuildFeatures;
    var _closure1_slot31 = yankee;
    yankee = tango.Permissions;
    var _closure1_slot32 = yankee;
    yankee = tango.RelationshipTypes;
    var _closure1_slot33 = yankee;
    tango = tango.StatusTypes;
    var _closure1_slot34 = tango;
    tango = new Array(4);
    tango[0] = offset;
    tango[1] = verify;
    tango[2] = options;
    tango[3] = golf;
    var _closure1_slot35 = tango;
    tango = 42;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/shared_components/happening_now/useHappeningNowData.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: useHappeningNowData
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            echo = argFoo;
            entity = argBar;
            var _closure2_slot0 = echo;
            offset = entity.guildId;
            var _closure2_slot1 = offset;
            result = entity.withoutUserCards;
            var _closure2_slot2 = result;
            mike = entity.showMultipleActivitiesPerChannel;
            report = undefined;
            vacuum = report !== mike;
            if(!vacuum) { _fun00010_ip = 49; continue _fun00009 }
 46:
            vacuum = mike;
 49:
            var _closure2_slot3 = vacuum;
            verify = entity.isFocused;
            var _closure2_slot4 = verify;
            tango = echo.has;
            mike = _closure1_slot29;
            zulu = mike.LIVE_GUILD_STAGE;
            status = tango.bind(echo)(zulu);
            var _closure2_slot5 = status;
            tango = echo.has;
            zulu = mike.EMBEDDED_ACTIVITY;
            sequence = tango.bind(echo)(zulu);
            var _closure2_slot6 = sequence;
            tango = echo.has;
            zulu = mike.STREAMS;
            config = tango.bind(echo)(zulu);
            var _closure2_slot7 = config;
            tango = echo.has;
            zulu = mike.USER_CUSTOM_STATUS;
            source = tango.bind(echo)(zulu);
            var _closure2_slot8 = source;
            tango = echo.has;
            zulu = mike.ACTIVITIES;
            update = tango.bind(echo)(zulu);
            var _closure2_slot9 = update;
            zulu = echo.has;
            mike = mike.USER;
            record = zulu.bind(echo)(mike);
            var _closure2_slot10 = record;
            backup = _closure1_slot4;
            tango = backup.useEffect;
            zulu = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 23;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.fetchUserAffinities;
                mike = mike.bind(zulu)();
                return entity;
            };
            mike = new Array(0);
            mike = tango.bind(backup)(zulu, mike);
            golf = _closure1_slot0;
            options = _closure1_slot2;
            tango = 24;
            mike = options[tango];
            romeo = golf.bind(report)(mike);
            yankee = romeo.useStateFromStores;
            mike = _closure1_slot6;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                mike = _closure1_slot6;
                entity = mike.isConnected;
                entity = entity.bind(mike)();
                return entity;
            };
            zulu = yankee.bind(romeo)(zulu, mike);
            var _closure2_slot11 = zulu;
            mike = options[tango];
            foxtrot = golf.bind(report)(mike);
            romeo = foxtrot.useStateFromStores;
            mike = _closure1_slot15;
            yankee = new Array(1);
            yankee[0] = mike;
            mike = function() {
                mike = _closure1_slot15;
                entity = mike.getSessionId;
                mike = entity.bind(mike)();
                entity = null;
                entity = entity != mike;
                return entity;
            };
            mike = romeo.bind(foxtrot)(yankee, mike);
            var _closure2_slot12 = mike;
            foxtrot = backup.useCallback;
            romeo = new Array(5);
            romeo[0] = echo;
            romeo[1] = mike;
            romeo[2] = offset;
            romeo[3] = verify;
            romeo[4] = zulu;
            yankee = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    mike = _closure2_slot1;
                    oscar = null;
                    if(!(oscar != mike)) { _fun00012_ip = 194; continue _fun00011 }
 16:
                    report = _closure2_slot0;
                    tango = report.has;
                    zulu = _closure1_slot29;
                    zulu = zulu.ACTIVE_CHANNEL;
                    zulu = tango.bind(report)(zulu);
                    if(!zulu) { _fun00012_ip = 194; continue _fun00011 }
 49:
                    zulu = _closure2_slot12;
                    if(!zulu) { _fun00012_ip = 194; continue _fun00011 }
 59:
                    zulu = _closure2_slot11;
                    if(!zulu) { _fun00012_ip = 194; continue _fun00011 }
 69:
                    zulu = _closure2_slot4;
                    if(!zulu) { _fun00012_ip = 194; continue _fun00011 }
 76:
                    report = _closure1_slot7;
                    tango = report.getActiveChannelsFetchStatus;
                    zulu = _closure2_slot1;
                    tango = tango.bind(report)(zulu);
                    zulu = oscar == tango;
                    if(zulu) { _fun00012_ip = 114; continue _fun00011 }
 104:
                    report = tango.fetchedAt;
                    zulu = oscar == report;
 114:
                    if(zulu) { _fun00012_ip = 154; continue _fun00011 }
 117:
                    report = global;
                    oscar = report.Date;
                    report = oscar.now;
                    report = report.bind(oscar)();
                    tango = tango.fetchedAt;
                    report = report - tango;
                    tango = 300000;
                    zulu = report > tango;
 154:
                    if(!zulu) { _fun00012_ip = 194; continue _fun00011 }
 157:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 25;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = tango.bind(mike)(zulu);
                    mike = zulu.fetchActiveChannels;
                    entity = _closure2_slot1;
                    entity = mike.bind(zulu)(entity);
 194:
                    entity = undefined;
                    return entity;
                }
            };
            kilo = foxtrot.bind(backup)(yankee, romeo);
            var _closure2_slot13 = kilo;
            foxtrot = backup.useEffect;
            romeo = new Array(1);
            romeo[0] = kilo;
            yankee = function() {
                mike = _closure2_slot13;
                entity = undefined;
                mike = mike.bind(entity)();
                return entity;
            };
            yankee = foxtrot.bind(backup)(yankee, romeo);
            yankee = options[tango];
            sizing = golf.bind(report)(yankee);
            foxtrot = sizing.useStateFromStores;
            yankee = _closure1_slot22;
            romeo = new Array(1);
            romeo[0] = yankee;
            yankee = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zulu = _closure2_slot1;
                    entity = null;
                    zulu = entity != zulu;
                    if(!zulu) { _fun00014_ip = 37; continue _fun00013 }
 16:
                    tango = _closure1_slot22;
                    zulu = tango.getGuild;
                    mike = _closure2_slot1;
                    entity = zulu.bind(tango)(mike);
 37:
                    return entity;
                }
            };
            output = foxtrot.bind(sizing)(romeo, yankee);
            var _closure2_slot14 = output;
            yankee = options[tango];
            control = golf.bind(report)(yankee);
            sizing = control.useStateFromStores;
            romeo = _closure1_slot19;
            foxtrot = new Array(1);
            foxtrot[0] = romeo;
            yankee = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zulu = _closure2_slot1;
                    entity = null;
                    zulu = entity != zulu;
                    if(!zulu) { _fun00016_ip = 38; continue _fun00015 }
 16:
                    tango = _closure1_slot19;
                    zulu = tango.getDefaultChannel;
                    mike = _closure2_slot1;
                    entity = zulu.bind(tango)(mike);
 38:
                    return entity;
                }
            };
            yankee = sizing.bind(control)(foxtrot, yankee);
            var _closure2_slot15 = yankee;
            foxtrot = 26;
            foxtrot = options[foxtrot];
            sizing = golf.bind(report)(foxtrot);
            foxtrot = sizing.useFirstGloballyViewbleGuildChannelId;
            control = foxtrot.bind(sizing)(offset);
            var _closure2_slot16 = control;
            foxtrot = options[tango];
            context = golf.bind(report)(foxtrot);
            sizing = context.useStateFromStores;
            foxtrot = new Array(1);
            foxtrot[0] = romeo;
            romeo = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    zulu = _closure2_slot1;
                    entity = null;
                    zulu = entity != zulu;
                    if(!zulu) { _fun00018_ip = 38; continue _fun00017 }
 16:
                    tango = _closure1_slot19;
                    zulu = tango.getChannels;
                    mike = _closure2_slot1;
                    entity = zulu.bind(tango)(mike);
 38:
                    return entity;
                }
            };
            sizing = sizing.bind(context)(foxtrot, romeo);
            var _closure2_slot17 = sizing;
            foxtrot = backup.useCallback;
            romeo = new Array(6);
            romeo[0] = mike;
            romeo[1] = yankee;
            romeo[2] = control;
            romeo[3] = offset;
            romeo[4] = verify;
            romeo[5] = zulu;
            zulu = function() {
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
                    tango = _closure2_slot1;
                    zulu = null;
                    entity = zulu != tango;
 34:
                    if(!entity) { _fun00020_ip = 47; continue _fun00019 }
 37:
                    tango = _closure2_slot15;
                    zulu = null;
                    entity = zulu != tango;
 47:
                    if(!entity) { _fun00020_ip = 228; continue _fun00019 }
 53:
                    yankee = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 27;
                    report = tango[zulu];
                    golf = undefined;
                    oscar = yankee.bind(golf)(report);
                    report = oscar.subscribeGuild;
                    offset = _closure2_slot1;
                    report = report.bind(oscar)(offset);
                    report = tango[zulu];
                    verify = yankee.bind(golf)(report);
                    oscar = verify.subscribeChannel;
                    report = _closure2_slot15;
                    report = report.id;
                    options = 28;
                    tango = tango[options];
                    tango = yankee.bind(golf)(tango);
                    tango = tango.DEFAULT_RANGES;
                    tango = oscar.bind(verify)(offset, report, tango);
                    report = _closure2_slot16;
                    tango = null;
                    tango = tango != report;
                    if(!tango) { _fun00020_ip = 172; continue _fun00019 }
 155:
                    oscar = _closure2_slot16;
                    report = _closure2_slot15;
                    report = report.id;
                    tango = oscar !== report;
 172:
                    if(!tango) { _fun00020_ip = 228; continue _fun00019 }
 175:
                    oscar = _closure1_slot0;
                    entity = _closure1_slot2;
                    zulu = entity[zulu];
                    report = oscar.bind(golf)(zulu);
                    tango = report.subscribeChannel;
                    zulu = _closure2_slot1;
                    mike = _closure2_slot16;
                    entity = entity[options];
                    entity = oscar.bind(golf)(entity);
                    entity = entity.DEFAULT_RANGES;
                    entity = tango.bind(report)(zulu, mike, entity);
 228:
                    entity = undefined;
                    return entity;
                }
            };
            zulu = foxtrot.bind(backup)(zulu, romeo);
            var _closure2_slot18 = zulu;
            control = backup.useEffect;
            foxtrot = new Array(1);
            foxtrot[0] = zulu;
            romeo = function() {
                mike = _closure2_slot18;
                entity = undefined;
                mike = mike.bind(entity)();
                return entity;
            };
            romeo = control.bind(backup)(romeo, foxtrot);
            foxtrot = backup.useCallback;
            romeo = new Array(2);
            romeo[0] = kilo;
            romeo[1] = zulu;
            zulu = function() {
                zulu = _closure2_slot13;
                entity = undefined;
                zulu = zulu.bind(entity)();
                mike = _closure2_slot18;
                mike = mike.bind(entity)();
                return entity;
            };
            zulu = foxtrot.bind(backup)(zulu, romeo);
            var _closure2_slot19 = zulu;
            foxtrot = backup.useEffect;
            romeo = new Array(1);
            romeo[0] = zulu;
            zulu = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 29;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.subscribe;
                mike = _closure2_slot19;
                entity = 'CONNECTION_OPEN';
                entity = zulu.bind(tango)(entity, mike);
                entity = function() {
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 29;
                    mike = mike[entity];
                    entity = undefined;
                    report = zulu.bind(entity)(mike);
                    tango = report.unsubscribe;
                    zulu = _closure2_slot19;
                    mike = 'CONNECTION_OPEN';
                    mike = tango.bind(report)(mike, zulu);
                    return entity;
                };
                return entity;
            };
            zulu = foxtrot.bind(backup)(zulu, romeo);
            zulu = 30;
            zulu = options[zulu];
            golf = golf.bind(report)(zulu);
            zulu = golf.useIsVoicePanelFullscreen;
            zulu = zulu.bind(golf)();
            golf = verify;
            if(!golf) { _fun00010_ip = 704; continue _fun00009 }
 701:
            golf = !zulu;
 704:
            var _closure2_slot20 = golf;
            backup = _closure1_slot0;
            control = _closure1_slot2;
            zulu = control[tango];
            foxtrot = backup.bind(report)(zulu);
            romeo = foxtrot.useStateFromStores;
            zulu = _closure1_slot16;
            options = new Array(1);
            options[0] = zulu;
            zulu = function() {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    mike = _closure2_slot1;
                    report = null;
                    if(!(report != mike)) { _fun00022_ip = 129; continue _fun00021 }
 13:
                    mike = _closure2_slot15;
                    if(!(report != mike)) { _fun00022_ip = 129; continue _fun00021 }
 21:
                    oscar = _closure1_slot16;
                    tango = oscar.getProps;
                    zulu = _closure2_slot1;
                    entity = _closure2_slot15;
                    entity = entity.id;
                    zulu = tango.bind(oscar)(zulu, entity);
                    tango = report == zulu;
                    if(tango) { _fun00022_ip = 70; continue _fun00021 }
 60:
                    entity = zulu.groups;
                    tango = report == entity;
 70:
                    if(tango) { _fun00022_ip = 90; continue _fun00021 }
 73:
                    entity = zulu.groups;
                    report = entity.length;
                    entity = 0;
                    tango = report <= entity;
 90:
                    entity = !tango;
                    if(tango) { _fun00022_ip = 127; continue _fun00021 }
 96:
                    tango = zulu.groups;
                    zulu = 0;
                    zulu = tango[zulu];
                    zulu = zulu.id;
                    mike = _closure1_slot34;
                    mike = mike.UNKNOWN;
                    entity = zulu === mike;
 127:
                    return entity;
 129:
                    entity = false;
                    return entity;
                }
            };
            options = romeo.bind(foxtrot)(options, zulu);
            zulu = control[tango];
            papa = backup.bind(report)(zulu);
            context = papa.useStateFromStores;
            romeo = _closure1_slot7;
            kilo = new Array(1);
            kilo[0] = romeo;
            foxtrot = new Array(2);
            foxtrot[0] = offset;
            foxtrot[1] = echo;
            zulu = function() {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    entity = _closure2_slot1;
                    tango = null;
                    entity = tango != entity;
                    if(!entity) { _fun00024_ip = 78; continue _fun00023 }
 16:
                    golf = _closure2_slot0;
                    oscar = golf.has;
                    mike = _closure1_slot29;
                    mike = mike.ACTIVE_CHANNEL;
                    mike = oscar.bind(golf)(mike);
                    oscar = !mike;
                    mike = !oscar;
                    if(oscar) { _fun00024_ip = 75; continue _fun00023 }
 52:
                    oscar = _closure1_slot7;
                    report = oscar.getActiveChannelIds;
                    zulu = _closure2_slot1;
                    zulu = report.bind(oscar)(zulu);
                    mike = tango == zulu;
 75:
                    entity = mike;
 78:
                    return entity;
                }
            };
            zulu = context.bind(papa)(kilo, zulu, foxtrot);
            foxtrot = control[tango];
            papa = backup.bind(report)(foxtrot);
            context = papa.useStateFromStores;
            foxtrot = _closure1_slot13;
            kilo = new Array(1);
            kilo[0] = foxtrot;
            foxtrot = function() {
                mike = _closure1_slot13;
                entity = mike.getUserAffinities;
                entity = entity.bind(mike)();
                return entity;
            };
            sierra = context.bind(papa)(kilo, foxtrot);
            var _closure2_slot21 = sierra;
            foxtrot = control[tango];
            papa = backup.bind(report)(foxtrot);
            context = papa.useStateFromStoresObject;
            foxtrot = _closure1_slot25;
            kilo = new Array(1);
            kilo[0] = foxtrot;
            foxtrot = function() {
                mike = _closure1_slot25;
                entity = mike.getRelationships;
                entity = entity.bind(mike)();
                return entity;
            };
            target = context.bind(papa)(kilo, foxtrot);
            var _closure2_slot22 = target;
            foxtrot = control[tango];
            papa = backup.bind(report)(foxtrot);
            context = papa.useStateFromStores;
            foxtrot = _closure1_slot27;
            kilo = new Array(1);
            kilo[0] = foxtrot;
            foxtrot = function() {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    mike = _closure1_slot27;
                    entity = mike.getCurrentUser;
                    zulu = entity.bind(mike)();
                    entity = null;
                    tango = entity == zulu;
                    mike = undefined;
                    if(tango) { _fun00026_ip = 33; continue _fun00025 }
 27:
                    mike = zulu.nsfwAllowed;
 33:
                    entity = entity != mike;
                    if(!entity) { _fun00026_ip = 43; continue _fun00025 }
 40:
                    entity = mike;
 43:
                    return entity;
                }
            };
            context = context.bind(papa)(kilo, foxtrot);
            var _closure2_slot23 = context;
            foxtrot = control[tango];
            whiskey = backup.bind(report)(foxtrot);
            lima = whiskey.useStateFromStoresObject;
            foxtrot = _closure1_slot23;
            papa = new Array(1);
            papa[0] = foxtrot;
            kilo = new Array(1);
            kilo[0] = offset;
            foxtrot = function() {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    entity = {};
                    zulu = _closure1_slot23;
                    mike = zulu.getChannelsVersion;
                    mike = mike.bind(zulu)();
                    entity['permissionChannelsVersion'] = mike;
                    report = _closure2_slot1;
                    mike = null;
                    report = mike != report;
                    if(!report) { _fun00028_ip = 65; continue _fun00027 }
 44:
                    report = _closure1_slot23;
                    tango = report.getGuildVersion;
                    zulu = _closure2_slot1;
                    mike = tango.bind(report)(zulu);
 65:
                    entity['permissionGuildVersion'] = mike;
                    return entity;
                }
            };
            foxtrot = lima.bind(whiskey)(papa, foxtrot, kilo);
            kilo = control[tango];
            whiskey = backup.bind(report)(kilo);
            lima = whiskey.useStateFromStores;
            papa = new Array(1);
            papa[0] = romeo;
            kilo = new Array(1);
            kilo[0] = offset;
            romeo = function() {
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    zulu = _closure2_slot1;
                    entity = null;
                    zulu = entity != zulu;
                    if(!zulu) { _fun00030_ip = 38; continue _fun00029 }
 16:
                    tango = _closure1_slot7;
                    zulu = tango.getActiveChannelIds;
                    mike = _closure2_slot1;
                    entity = zulu.bind(tango)(mike);
 38:
                    return entity;
                }
            };
            kilo = lima.bind(whiskey)(papa, romeo, kilo);
            romeo = control[tango];
            equality = backup.bind(report)(romeo);
            whiskey = equality.useStateFromStoresArray;
            romeo = _closure1_slot11;
            lima = new Array(1);
            lima[0] = romeo;
            papa = new Array(1);
            papa[0] = offset;
            romeo = function() {
                zulu = _closure1_slot11;
                mike = zulu.getGuildScheduledEventsForGuild;
                entity = _closure2_slot1;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            papa = whiskey.bind(equality)(lima, romeo, papa);
            var _closure2_slot24 = papa;
            tango = control[tango];
            equality = backup.bind(report)(tango);
            whiskey = equality.useStateFromStoresArray;
            tango = _closure1_slot5;
            lima = new Array(1);
            lima[0] = tango;
            romeo = new Array(1);
            romeo[0] = offset;
            tango = function() {
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    zulu = _closure2_slot1;
                    mike = null;
                    if(!(mike != zulu)) { _fun00032_ip = 37; continue _fun00031 }
 13:
                    zulu = _closure1_slot5;
                    mike = zulu.getEmbeddedActivitiesForGuild;
                    entity = _closure2_slot1;
                    entity = mike.bind(zulu)(entity);
                    _fun00032_ip = 41; continue _fun00031;
 37:
                    entity = new Array(0);
 41:
                    return entity;
                }
            };
            tango = whiskey.bind(equality)(lima, tango, romeo);
            romeo = 31;
            romeo = control[romeo];
            control = backup.bind(report)(romeo);
            backup = control.useBlockingVoiceStatesConfigForBlocker;
            romeo = 'use-happening-now-data';
            romeo = backup.bind(control)(romeo);
            control = romeo.enabled;
            var _closure2_slot25 = control;
            mike = !mike;
            if(mike) { _fun00010_ip = 1179; continue _fun00009 }
 1176:
            mike = options;
 1179:
            if(mike) { _fun00010_ip = 1185; continue _fun00009 }
 1182:
            mike = zulu;
 1185:
            var _closure2_slot26 = mike;
            backup = _closure1_slot4;
            options = backup.useRef;
            zulu = {};
            zulu['guildId'] = offset;
            romeo = false;
            zulu['hasComputed'] = romeo;
            zulu = options.bind(backup)(zulu);
            var _closure2_slot27 = zulu;
            romeo = backup.useCallback;
            options = new Array(21);
            options[0] = offset;
            options[1] = sierra;
            options[2] = yankee;
            options[3] = status;
            options[4] = target;
            options[5] = papa;
            options[6] = context;
            options[7] = record;
            options[8] = config;
            options[9] = sequence;
            options[10] = vacuum;
            options[11] = control;
            options[12] = source;
            options[13] = update;
            options[14] = echo;
            options[15] = result;
            options[16] = output;
            options[17] = sizing;
            options[18] = kilo;
            options[19] = foxtrot;
            options[20] = tango;
            tango = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 32;
                mike = mike[entity];
                entity = undefined;
                report = zulu.bind(entity)(mike);
                tango = report.time;
                zulu = '🎨';
                mike = 'computeHappeningNowState';
                entity = function() {
                    _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                        entity = function(argFoo, argBar, argBaz) { // Original name: addUser
                            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                                zulu = argFoo;
                                verify = argBar;
                                foxtrot = argBaz;
                                var _closure5_slot0 = zulu;
                                var _closure5_slot1 = foxtrot;
                                mike = _closure1_slot25;
                                entity = mike.isBlockedOrIgnored;
                                entity = entity.bind(mike)(zulu);
                                if(entity) { _fun00036_ip = 1372; continue _fun00035 }
 43:
                                report = _closure1_slot18;
                                mike = report.getChannel;
                                golf = null;
                                oscar = golf == foxtrot;
                                tango = undefined;
                                entity = undefined;
                                if(oscar) { _fun00036_ip = 70; continue _fun00035 }
 65:
                                entity = foxtrot.channelId;
 70:
                                entity = mike.bind(report)(entity);
                                if(!(golf != entity)) { _fun00036_ip = 159; continue _fun00035 }
 79:
                                mike = entity.isNSFW;
                                mike = mike.bind(entity)();
                                if(!mike) { _fun00036_ip = 159; continue _fun00035 }
 92:
                                mike = _closure2_slot23;
                                if(!mike) { _fun00036_ip = 1372; continue _fun00035 }
 105:
                                oscar = _closure1_slot21;
                                report = oscar.didAgree;
                                mike = _closure2_slot1;
                                if(!(golf == mike)) { _fun00036_ip = 144; continue _fun00035 }
 123:
                                romeo = golf == entity;
                                mike = undefined;
                                if(romeo) { _fun00036_ip = 142; continue _fun00035 }
 132:
                                romeo = entity.getGuildId;
                                mike = romeo.bind(entity)();
 142:
                                _fun00036_ip = 148; continue _fun00035;
 144:
                                mike = _closure2_slot1;
 148:
                                mike = report.bind(oscar)(mike);
                                if(!mike) { _fun00036_ip = 1372; continue _fun00035 }
 159:
                                if(!(golf != entity)) { _fun00036_ip = 241; continue _fun00035 }
 163:
                                mike = entity.isGroupDM;
                                mike = mike.bind(entity)();
                                if(mike) { _fun00036_ip = 234; continue _fun00035 }
 176:
                                oscar = _closure1_slot23;
                                report = oscar.can;
                                mike = _closure1_slot32;
                                mike = mike.CONNECT;
                                mike = report.bind(oscar)(mike, entity);
                                if(!mike) { _fun00036_ip = 241; continue _fun00035 }
 205:
                                oscar = _closure1_slot23;
                                report = oscar.can;
                                mike = _closure1_slot32;
                                mike = mike.VIEW_CHANNEL;
                                mike = report.bind(oscar)(mike, entity);
                                if(!mike) { _fun00036_ip = 241; continue _fun00035 }
 234:
                                if(!(golf == foxtrot)) { _fun00036_ip = 757; continue _fun00035 }
 241:
                                if(!(golf == verify)) { _fun00036_ip = 390; continue _fun00035 }
 248:
                                mike = _closure2_slot10;
                                if(!mike) { _fun00036_ip = 1372; continue _fun00035 }
 261:
                                oscar = _closure1_slot24;
                                report = oscar.getStatus;
                                mike = _closure2_slot1;
                                report = report.bind(oscar)(zulu, mike);
                                if(!(golf != report)) { _fun00036_ip = 1372; continue _fun00035 }
 288:
                                mike = _closure1_slot34;
                                mike = mike.OFFLINE;
                                if(!(report !== mike)) { _fun00036_ip = 346; continue _fun00035 }
 302:
                                oscar = _closure4_slot8;
                                report = oscar.push;
                                mike = {};
                                romeo = 'user';
                                mike['kind'] = romeo;
                                mike['userId'] = zulu;
                                romeo = _closure2_slot1;
                                mike['guildId'] = romeo;
                                mike = report.bind(oscar)(mike);
                                _fun00036_ip = 1372; continue _fun00035;
 346:
                                oscar = _closure4_slot9;
                                report = oscar.push;
                                mike = {};
                                romeo = 'user';
                                mike['kind'] = romeo;
                                mike['userId'] = zulu;
                                yankee = _closure2_slot1;
                                mike['guildId'] = yankee;
                                mike = report.bind(oscar)(mike);
                                _fun00036_ip = 1372; continue _fun00035;
 390:
                                report = _closure1_slot0;
                                oscar = _closure1_slot2;
                                mike = 35;
                                mike = oscar[mike];
                                report = report.bind(tango)(mike);
                                mike = report.isActivityPermanentCustomStatus;
                                mike = mike.bind(report)(verify);
                                if(mike) { _fun00036_ip = 695; continue _fun00035 }
 427:
                                report = _closure1_slot0;
                                oscar = _closure1_slot2;
                                mike = 36;
                                mike = oscar[mike];
                                report = report.bind(tango)(mike);
                                mike = report.isActivityTemporaryCustomStatus;
                                mike = mike.bind(report)(verify);
                                if(mike) { _fun00036_ip = 642; continue _fun00035 }
 467:
                                mike = _closure2_slot9;
                                if(!mike) { _fun00036_ip = 1372; continue _fun00035 }
 477:
                                report = _closure1_slot1;
                                yankee = _closure1_slot2;
                                mike = 37;
                                mike = yankee[mike];
                                report = report.bind(tango)(mike);
                                mike = _closure1_slot30;
                                mike = mike.EMBEDDED;
                                mike = report.bind(tango)(verify, mike);
                                if(!mike) { _fun00036_ip = 593; continue _fun00035 }
 516:
                                romeo = _closure1_slot18;
                                yankee = romeo.getChannel;
                                kilo = _closure1_slot28;
                                backup = kilo.getVoiceStateForSession;
                                report = verify.session_id;
                                backup = backup.bind(kilo)(zulu, report);
                                kilo = golf == backup;
                                report = undefined;
                                if(kilo) { _fun00036_ip = 561; continue _fun00035 }
 556:
                                report = backup.channelId;
 561:
                                romeo = yankee.bind(romeo)(report);
                                report = golf == romeo;
                                yankee = undefined;
                                if(report) { _fun00036_ip = 585; continue _fun00035 }
 575:
                                report = romeo.getGuildId;
                                yankee = report.bind(romeo)();
 585:
                                report = _closure2_slot1;
                                mike = yankee !== report;
 593:
                                if(mike) { _fun00036_ip = 1372; continue _fun00035 }
 599:
                                report = _closure4_slot6;
                                mike = {};
                                mike['userId'] = zulu;
                                yankee = _closure2_slot1;
                                mike['guildId'] = yankee;
                                yankee = 'activity';
                                mike['kind'] = yankee;
                                mike['activity'] = verify;
                                report[zulu] = mike;
                                _fun00036_ip = 1372; continue _fun00035;
 642:
                                mike = _closure2_slot8;
                                if(!mike) { _fun00036_ip = 1372; continue _fun00035 }
 652:
                                report = _closure4_slot7;
                                mike = {};
                                mike['userId'] = zulu;
                                oscar = _closure2_slot1;
                                mike['guildId'] = oscar;
                                oscar = 'activity';
                                mike['kind'] = oscar;
                                mike['activity'] = verify;
                                report[zulu] = mike;
                                _fun00036_ip = 1372; continue _fun00035;
 695:
                                mike = _closure2_slot8;
                                if(!mike) { _fun00036_ip = 1372; continue _fun00035 }
 708:
                                oscar = _closure4_slot8;
                                report = oscar.push;
                                mike = {};
                                romeo = 'activity';
                                mike['kind'] = romeo;
                                mike['userId'] = zulu;
                                yankee = _closure2_slot1;
                                mike['guildId'] = yankee;
                                mike['activity'] = verify;
                                mike = report.bind(oscar)(mike);
                                _fun00036_ip = 1372; continue _fun00035;
 757:
                                yankee = _closure1_slot14;
                                report = yankee.getStreamForUser;
                                mike = _closure2_slot1;
                                if(!(golf == mike)) { _fun00036_ip = 799; continue _fun00035 }
 778:
                                romeo = golf == entity;
                                mike = undefined;
                                if(romeo) { _fun00036_ip = 797; continue _fun00035 }
 787:
                                romeo = entity.getGuildId;
                                mike = romeo.bind(entity)();
 797:
                                _fun00036_ip = 803; continue _fun00035;
 799:
                                mike = _closure2_slot1;
 803:
                                report = report.bind(yankee)(zulu, mike);
                                if(!(golf != report)) { _fun00036_ip = 823; continue _fun00035 }
 813:
                                mike = _closure2_slot7;
                                if(mike) { _fun00036_ip = 1282; continue _fun00035 }
 823:
                                if(!(golf != entity)) { _fun00036_ip = 1372; continue _fun00035 }
 830:
                                backup = _closure4_slot1;
                                romeo = backup.has;
                                yankee = entity.id;
                                yankee = romeo.bind(backup)(yankee);
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
                                romeo = backup.getEmbeddedActivitiesForChannel;
                                yankee = entity.id;
                                sizing = romeo.bind(backup)(yankee);
                                yankee = _closure2_slot3;
                                if(yankee) { _fun00036_ip = 1040; continue _fun00035 }
 914:
                                yankee = _closure2_slot25;
                                if(yankee) { _fun00036_ip = 948; continue _fun00035 }
 921:
                                romeo = _closure1_slot1;
                                backup = _closure1_slot2;
                                yankee = 34;
                                yankee = backup[yankee];
                                yankee = romeo.bind(tango)(yankee);
                                yankee = yankee.bind(tango)(sizing);
                                _fun00036_ip = 979; continue _fun00035;
 948:
                                backup = _closure1_slot0;
                                kilo = _closure1_slot2;
                                romeo = 34;
                                romeo = kilo[romeo];
                                backup = backup.bind(tango)(romeo);
                                romeo = backup.findActivityWithMostNonBlockedOrIgnoredParticipants;
                                yankee = romeo.bind(backup)(sizing);
 979:
                                if(!(golf !== yankee)) { _fun00036_ip = 1087; continue _fun00035 }
 983:
                                backup = _closure4_slot4;
                                romeo = entity.id;
                                kilo = {};
                                output = 'embedded-activity';
                                kilo['kind'] = output;
                                kilo['userId'] = zulu;
                                kilo['voiceState'] = foxtrot;
                                output = _closure2_slot1;
                                kilo['guildId'] = output;
                                kilo['activity'] = yankee;
                                yankee = new Array(1);
                                yankee[0] = kilo;
                                backup[romeo] = yankee;
                                _fun00036_ip = 1087; continue _fun00035;
 1040:
                                romeo = _closure4_slot4;
                                yankee = entity.id;
                                kilo = sizing.filter;
                                backup = function(argFoo) {
                                    entity = argFoo;
                                    report = entity.userIds;
                                    zulu = new Array(0);
                                    tango = 0;
                                    oscar = zulu;
                                    entity = arraySpread(oscar, report, tango);
                                    mike = zulu.some;
                                    entity = function(argFoo) {
                                        zulu = _closure1_slot25;
                                        mike = zulu.isBlockedOrIgnored;
                                        entity = argFoo;
                                        entity = mike.bind(zulu)(entity);
                                        entity = !entity;
                                        return entity;
                                    };
                                    entity = mike.bind(zulu)(entity);
                                    return entity;
                                };
                                kilo = kilo.bind(sizing)(backup);
                                backup = kilo.map;
                                offset = function(argFoo) {
                                    entity = {};
                                    mike = 'embedded-activity';
                                    entity['kind'] = mike;
                                    zulu = _closure5_slot0;
                                    entity['userId'] = zulu;
                                    mike = _closure5_slot1;
                                    entity['voiceState'] = mike;
                                    mike = _closure2_slot1;
                                    entity['guildId'] = mike;
                                    mike = argFoo;
                                    entity['activity'] = mike;
                                    return entity;
                                };
                                offset = backup.bind(kilo)(offset);
                                romeo[yankee] = offset;
 1087:
                                romeo = _closure4_slot3;
                                yankee = entity.id;
                                offset = {};
                                backup = 'voice';
                                offset['kind'] = backup;
                                offset['userId'] = zulu;
                                offset['voiceState'] = foxtrot;
                                foxtrot = _closure2_slot1;
                                if(!(golf == foxtrot)) { _fun00036_ip = 1144; continue _fun00035 }
 1123:
                                foxtrot = golf == entity;
                                backup = undefined;
                                if(foxtrot) { _fun00036_ip = 1142; continue _fun00035 }
 1132:
                                foxtrot = entity.getGuildId;
                                backup = foxtrot.bind(entity)();
 1142:
                                _fun00036_ip = 1148; continue _fun00035;
 1144:
                                backup = _closure2_slot1;
 1148:
                                kilo = golf != backup;
                                foxtrot = undefined;
                                if(!kilo) { _fun00036_ip = 1160; continue _fun00035 }
 1157:
                                foxtrot = backup;
 1160:
                                offset['guildId'] = foxtrot;
                                romeo[yankee] = offset;
                                _fun00036_ip = 1372; continue _fun00035;
 1173:
                                yankee = _closure1_slot25;
                                offset = yankee.isFriend;
                                offset = offset.bind(yankee)(zulu);
                                if(offset) { _fun00036_ip = 1193; continue _fun00035 }
 1191:
                                return tango;
 1193:
                                romeo = _closure1_slot12;
                                yankee = romeo.getStageInstanceByChannel;
                                offset = entity.id;
                                offset = yankee.bind(romeo)(offset);
                                if(!(golf != offset)) { _fun00036_ip = 1280; continue _fun00035 }
 1217:
                                romeo = _closure1_slot23;
                                yankee = romeo.can;
                                options = _closure1_slot32;
                                options = options.CONNECT;
                                options = yankee.bind(romeo)(options, entity);
                                if(options) { _fun00036_ip = 1248; continue _fun00035 }
 1246:
                                return tango;
 1248:
                                options = _closure4_slot2;
                                mike = entity.id;
                                entity = {};
                                yankee = 'live-guild-stage';
                                entity['kind'] = yankee;
                                entity['stage'] = offset;
                                options[mike] = entity;
                                _fun00036_ip = 1372; continue _fun00035;
 1280:
                                return tango;
 1282:
                                mike = _closure4_slot5;
                                entity = {};
                                entity['userId'] = zulu;
                                options = _closure2_slot1;
                                entity['guildId'] = options;
                                options = 'activity';
                                entity['kind'] = options;
                                offset = golf != verify;
                                options = undefined;
                                if(!offset) { _fun00036_ip = 1323; continue _fun00035 }
 1320:
                                options = verify;
 1323:
                                entity['activity'] = options;
                                options = _closure2_slot1;
                                if(!(golf != options)) { _fun00036_ip = 1360; continue _fun00035 }
 1336:
                                options = golf == report;
                                golf = undefined;
                                if(options) { _fun00036_ip = 1350; continue _fun00035 }
 1345:
                                golf = report.guildId;
 1350:
                                oscar = _closure2_slot1;
                                tango = undefined;
                                if(!(golf === oscar)) { _fun00036_ip = 1363; continue _fun00035 }
 1360:
                                tango = report;
 1363:
                                entity['stream'] = tango;
                                mike[zulu] = entity;
 1372:
                                entity = undefined;
                                return entity;
                            }
                        };
                        var _closure4_slot12 = entity;
                        entity = _closure2_slot27;
                        mike = entity.current;
                        entity = _closure2_slot1;
                        mike['guildId'] = entity;
                        entity = _closure2_slot27;
                        mike = entity.current;
                        entity = true;
                        mike['hasComputed'] = entity;
                        variable41 = global;
                        entity = variable41.Set;
                        mike = entity.prototype;
                        mike = Object.create(mike, {constructor: {value: entity}});
                        variable66 = mike;
                        entity = new variable66[entity](variable65);
                        report = entity instanceof Object ? entity : mike;
                        var _closure4_slot0 = report;
                        zulu = variable41.Math;
                        mike = zulu.min;
                        entity = _closure2_slot21;
                        entity = entity.length;
                        variable40 = 50;
                        mike = mike.bind(zulu)(entity, variable40);
                        variable39 = 0;
                        zulu = variable39 < mike;
                        entity = 0;
                        if(!zulu) { _fun00034_ip = 155; continue _fun00033 }
 124:
                        tango = report.add;
                        zulu = _closure2_slot21;
                        zulu = zulu[entity];
                        zulu = zulu.user_id;
                        zulu = tango.bind(report)(zulu);
                        entity = entity + 1;
                        if(entity < mike) { _fun00034_ip = 124; continue _fun00033 }
 155:
                        tango = _closure2_slot22;
                        for(entity in tango)
 170:
                        {
 179:
                            options = entity;
                            golf = _closure2_slot22;
                            verify = golf[options];
                            golf = _closure1_slot33;
                            golf = golf.FRIEND;
                            if(verify !== golf) { _fun00034_ip = 170; continue _fun00033 }
 204:
                            golf = report.add;
                            golf = golf.bind(report)(options);
                            _fun00034_ip = 170; continue _fun00033;
                        }
 216:
                        mike = _closure1_slot18;
                        entity = mike.getMutablePrivateChannels;
                        golf = entity.bind(mike)();
                        tango = golf;
                        for(entity in tango)
 241:
                        {
 250:
                            options = entity;
                            offset = golf[options];
                            options = offset.isPrivate;
                            options = options.bind(offset)();
                            if(!options) { _fun00034_ip = 241; continue _fun00033 }
 270:
                            verify = report.add;
                            options = offset.getRecipientId;
                            options = options.bind(offset)();
                            options = verify.bind(report)(options);
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
                        zulu = new Array(0);
                        _fun00034_ip = 345; continue _fun00033;
 316:
                        oscar = _closure1_slot16;
                        tango = oscar.getRows;
                        mike = _closure2_slot1;
                        entity = _closure2_slot15;
                        entity = entity.id;
                        zulu = tango.bind(oscar)(mike, entity);
 345:
                        mike = zulu.forEach;
                        entity = function(argFoo) {
                            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                                entity = argFoo;
                                zulu = entity.type;
                                mike = _closure1_slot17;
                                mike = mike.MEMBER;
                                if(!(zulu === mike)) { _fun00038_ip = 47; continue _fun00037 }
 25:
                                zulu = _closure4_slot0;
                                mike = zulu.add;
                                entity = entity.userId;
                                entity = mike.bind(zulu)(entity);
 47:
                                entity = undefined;
                                return entity;
                            }
                        };
                        entity = mike.bind(zulu)(entity);
                        variable36 = new Array(0);
                        quebec = new Array(0);
                        entity = variable41.Set;
                        mike = entity.prototype;
                        mike = Object.create(mike, {constructor: {value: entity}});
                        variable66 = mike;
                        entity = new variable66[entity](variable65);
                        oscar = entity instanceof Object ? entity : mike;
                        var _closure4_slot1 = oscar;
                        mike = _closure1_slot36;
                        entity = _closure2_slot24;
                        equality = undefined;
                        tango = mike.bind(equality)(entity);
                        mike = tango.bind(equality)();
                        entity = mike.done;
                        zulu = 604800;
                        if(entity) { _fun00034_ip = 536; continue _fun00033 }
 433:
                        entity = mike.value;
                        golf = _closure1_slot10;
                        golf = golf.bind(equality)(entity);
                        if(golf) { _fun00034_ip = 487; continue _fun00033 }
 450:
                        golf = _closure1_slot9;
                        golf = golf.bind(equality)(entity);
                        if(!golf) { _fun00034_ip = 472; continue _fun00033 }
 462:
                        options = _closure1_slot8;
                        golf = options.bind(equality)(entity, zulu);
 472:
                        if(!golf) { _fun00034_ip = 497; continue _fun00033 }
 475:
                        golf = quebec.push;
                        golf = golf.bind(quebec)(entity);
                        _fun00034_ip = 497; continue _fun00033;
 487:
                        golf = variable36.push;
                        golf = golf.bind(variable36)(entity);
 497:
                        golf = entity.channel_id;
                        if(!(variable37 != golf)) { _fun00034_ip = 521; continue _fun00033 }
 506:
                        golf = oscar.add;
                        entity = entity.channel_id;
                        entity = golf.bind(oscar)(entity);
 521:
                        golf = tango.bind(equality)();
                        entity = golf.done;
                        mike = golf;
                        if(!entity) { _fun00034_ip = 433; continue _fun00033 }
 536:
                        whiskey = {};
                        var _closure4_slot2 = whiskey;
                        lima = {};
                        var _closure4_slot3 = lima;
                        sierra = {};
                        var _closure4_slot4 = sierra;
                        status = {};
                        var _closure4_slot5 = status;
                        target = {};
                        var _closure4_slot6 = target;
                        papa = {};
                        var _closure4_slot7 = papa;
                        entity = _closure2_slot1;
                        if(!(variable37 != entity)) { _fun00034_ip = 644; continue _fun00033 }
 580:
                        entity = _closure2_slot5;
                        if(!entity) { _fun00034_ip = 644; continue _fun00033 }
 587:
                        zulu = _closure1_slot12;
                        mike = zulu.getStageInstancesByGuild;
                        entity = _closure2_slot1;
                        tango = mike.bind(zulu)(entity);
                        mike = _closure1_slot1;
                        zulu = _closure1_slot2;
                        entity = 33;
                        entity = zulu[entity];
                        zulu = mike.bind(equality)(entity);
                        mike = zulu.forEach;
                        entity = function(argFoo) {
                            _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                                tango = argFoo;
                                report = _closure1_slot23;
                                zulu = report.canWithPartialContext;
                                entity = _closure1_slot32;
                                mike = entity.CONNECT;
                                entity = {};
                                oscar = tango.channel_id;
                                entity['channelId'] = oscar;
                                entity = zulu.bind(report)(mike, entity);
                                if(!entity) { _fun00040_ip = 70; continue _fun00039 }
 46:
                                report = tango.channel_id;
                                zulu = function(argFoo) { // Original name: blockedOrIgnoredUserInVoiceChannel
                                    _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                                        oscar = argFoo;
                                        tango = _closure1_slot0;
                                        report = _closure1_slot2;
                                        entity = 31;
                                        entity = report[entity];
                                        golf = undefined;
                                        report = tango.bind(golf)(entity);
                                        tango = report.isBlockingVoiceStatesEnabledBlocker;
                                        entity = 'blocked-user-in-voice-channel';
                                        entity = tango.bind(report)(entity);
                                        if(entity) { _fun00042_ip = 54; continue _fun00041 }
 50:
                                        entity = false;
                                        return entity;
 54:
                                        entity = null;
                                        if(!(entity != oscar)) { _fun00042_ip = 176; continue _fun00041 }
 60:
                                        report = _closure1_slot28;
                                        tango = report.getVoiceStatesForChannel;
                                        report = tango.bind(report)(oscar);
                                        entity = entity != report;
                                        if(!entity) { _fun00042_ip = 174; continue _fun00041 }
 82:
                                        oscar = _closure1_slot1;
                                        options = _closure1_slot2;
                                        tango = 33;
                                        tango = options[tango];
                                        tango = oscar.bind(golf)(tango);
                                        oscar = tango.bind(golf)(report);
                                        report = oscar.map;
                                        tango = function(argFoo) {
                                            _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                                                zulu = _closure1_slot27;
                                                mike = zulu.getUser;
                                                entity = argFoo;
                                                entity = entity.userId;
                                                mike = mike.bind(zulu)(entity);
                                                entity = null;
                                                zulu = entity == mike;
                                                entity = undefined;
                                                if(zulu) { _fun00044_ip = 42; continue _fun00043 }
 37:
                                                entity = mike.id;
 42:
                                                return entity;
                                            }
                                        };
                                        report = report.bind(oscar)(tango);
                                        tango = report.filter;
                                        oscar = _closure1_slot0;
                                        zulu = 40;
                                        zulu = options[zulu];
                                        zulu = oscar.bind(golf)(zulu);
                                        zulu = zulu.isNotNullish;
                                        tango = tango.bind(report)(zulu);
                                        zulu = tango.some;
                                        mike = function(argFoo) {
                                            zulu = _closure1_slot25;
                                            mike = zulu.isBlockedOrIgnored;
                                            entity = argFoo;
                                            entity = mike.bind(zulu)(entity);
                                            return entity;
                                        };
                                        entity = zulu.bind(tango)(mike);
 174:
                                        return entity;
 176:
                                        entity = false;
                                        return entity;
                                    }
                                };
                                mike = undefined;
                                mike = zulu.bind(mike)(report);
                                entity = !mike;
 70:
                                if(!entity) { _fun00040_ip = 106; continue _fun00039 }
 73:
                                zulu = _closure4_slot2;
                                mike = tango.channel_id;
                                entity = {};
                                report = 'live-guild-stage';
                                entity['kind'] = report;
                                entity['stage'] = tango;
                                zulu[mike] = entity;
 106:
                                entity = undefined;
                                return entity;
                            }
                        };
                        entity = mike.bind(zulu)(tango, entity);
 644:
                        context = new Array(0);
                        var _closure4_slot8 = context;
                        record = new Array(0);
                        var _closure4_slot9 = record;
                        zulu = _closure1_slot28;
                        mike = zulu.getVoiceStates;
                        entity = _closure2_slot1;
                        tango = mike.bind(zulu)(entity);
                        var _closure4_slot10 = tango;
                        zulu = report.forEach;
                        mike = function(argFoo) {
                            _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                                report = argFoo;
                                mike = _closure1_slot27;
                                entity = mike.getUser;
                                entity = entity.bind(mike)(report);
                                mike = null;
                                if(!(mike != entity)) { _fun00046_ip = 128; continue _fun00045 }
 27:
                                entity = entity.bot;
                                if(entity) { _fun00046_ip = 128; continue _fun00045 }
 36:
                                golf = _closure1_slot24;
                                tango = golf.getPrimaryActivity;
                                oscar = _closure2_slot1;
                                tango = tango.bind(golf)(report, oscar);
                                if(!(mike == oscar)) { _fun00046_ip = 80; continue _fun00045 }
 63:
                                oscar = _closure1_slot28;
                                zulu = oscar.getVoiceStateForUser;
                                zulu = zulu.bind(oscar)(report);
                                _fun00046_ip = 91; continue _fun00045;
 80:
                                oscar = _closure4_slot10;
                                zulu = oscar[report];
 91:
                                entity = _closure2_slot10;
                                if(entity) { _fun00046_ip = 102; continue _fun00045 }
 98:
                                entity = mike != tango;
 102:
                                if(entity) { _fun00046_ip = 109; continue _fun00045 }
 105:
                                entity = mike != zulu;
 109:
                                if(!entity) { _fun00046_ip = 128; continue _fun00045 }
 112:
                                mike = _closure4_slot12;
                                entity = undefined;
                                entity = mike.bind(entity)(report, tango, zulu);
 128:
                                entity = undefined;
                                return entity;
                            }
                        };
                        mike = zulu.bind(report)(mike);
                        if(!(variable37 != entity)) { _fun00034_ip = 742; continue _fun00033 }
 704:
                        mike = _closure1_slot1;
                        zulu = _closure1_slot2;
                        entity = 33;
                        entity = zulu[entity];
                        zulu = mike.bind(equality)(entity);
                        mike = zulu.forEach;
                        entity = function(argFoo) {
                            report = argFoo;
                            tango = report.userId;
                            zulu = _closure4_slot12;
                            oscar = _closure1_slot24;
                            mike = oscar.getPrimaryActivity;
                            entity = _closure2_slot1;
                            mike = mike.bind(oscar)(tango, entity);
                            entity = undefined;
                            mike = zulu.bind(entity)(tango, mike, report);
                            return entity;
                        };
                        entity = mike.bind(zulu)(tango, entity);
 742:
                        entity = new Array(0);
                        var _closure4_slot11 = entity;
                        zulu = _closure1_slot36;
                        mike = _closure2_slot0;
                        config = zulu.bind(equality)(mike);
                        zulu = config.bind(equality)();
                        mike = zulu.done;
                        sequence = 'unified-vc';
                        vacuum = 'kind';
                        control = 38;
                        source = 2;
                        update = 'active-channel';
                        echo = 'student-hub-add-channel';
                        result = 'create-channel';
                        output = 'invite';
                        sizing = 39;
                        kilo = 'customize-guild';
                        backup = 40;
                        foxtrot = zulu;
                        romeo = undefined;
                        yankee = undefined;
                        offset = undefined;
                        verify = undefined;
                        options = undefined;
                        golf = undefined;
                        oscar = undefined;
                        report = undefined;
                        tango = undefined;
                        zulu = undefined;
                        if(mike) { _fun00034_ip = 3365; continue _fun00033 }
 851:
                        variable45 = foxtrot.value;
                        mike = _closure1_slot29;
                        mike = mike.LIVE_GUILD_STAGE;
                        if(!(mike !== variable45)) { _fun00034_ip = 3218; continue _fun00033 }
 873:
                        mike = _closure1_slot29;
                        mike = mike.LIVE_GUILD_EVENT;
                        if(!(mike !== variable45)) { _fun00034_ip = 3169; continue _fun00033 }
 890:
                        mike = _closure1_slot29;
                        mike = mike.UPCOMING_GUILD_EVENT;
                        if(!(mike !== variable45)) { _fun00034_ip = 3117; continue _fun00033 }
 907:
                        mike = _closure1_slot29;
                        mike = mike.VOICES;
                        if(!(mike !== variable45)) { _fun00034_ip = 3012; continue _fun00033 }
 924:
                        mike = _closure1_slot29;
                        mike = mike.EMBEDDED_ACTIVITY;
                        if(!(mike !== variable45)) { _fun00034_ip = 2845; continue _fun00033 }
 941:
                        mike = _closure1_slot29;
                        mike = mike.COMBINED_VC;
                        if(!(mike !== variable45)) { _fun00034_ip = 2726; continue _fun00033 }
 958:
                        mike = _closure1_slot29;
                        mike = mike.STREAMS;
                        if(!(mike !== variable45)) { _fun00034_ip = 2621; continue _fun00033 }
 975:
                        mike = _closure1_slot29;
                        mike = mike.USER_CUSTOM_STATUS;
                        if(!(mike !== variable45)) { _fun00034_ip = 2516; continue _fun00033 }
 992:
                        mike = _closure1_slot29;
                        mike = mike.ACTIVITIES;
                        if(!(mike !== variable45)) { _fun00034_ip = 2411; continue _fun00033 }
 1009:
                        mike = _closure1_slot29;
                        mike = mike.ACTIVE_CHANNEL;
                        if(!(mike !== variable45)) { _fun00034_ip = 2159; continue _fun00033 }
 1026:
                        mike = _closure1_slot29;
                        mike = mike.USER;
                        if(!(mike !== variable45)) { _fun00034_ip = 1812; continue _fun00033 }
 1043:
                        mike = _closure1_slot29;
                        mike = mike.STUDENT_HUB_ADD_CHANNEL;
                        if(!(mike !== variable45)) { _fun00034_ip = 1676; continue _fun00033 }
 1060:
                        mike = _closure1_slot29;
                        mike = mike.CREATE_CHANNEL;
                        if(!(mike !== variable45)) { _fun00034_ip = 1500; continue _fun00033 }
 1077:
                        mike = _closure1_slot29;
                        mike = mike.INVITE;
                        if(!(mike !== variable45)) { _fun00034_ip = 1341; continue _fun00033 }
 1094:
                        mike = _closure1_slot29;
                        mike = mike.CUSTOMIZE_GUILD;
                        if(!(mike !== variable45)) { _fun00034_ip = 1171; continue _fun00033 }
 1108:
                        variable44 = _closure1_slot0;
                        mike = _closure1_slot2;
                        mike = mike[backup];
                        variable44 = variable44.bind(equality)(mike);
                        mike = variable44.assertNever;
                        mike = mike.bind(variable44)(variable45);
                        variable53 = romeo;
                        variable52 = yankee;
                        variable51 = offset;
                        variable50 = verify;
                        variable49 = options;
                        variable48 = golf;
                        variable47 = oscar;
                        variable46 = report;
                        variable45 = tango;
                        variable44 = zulu;
                        _fun00034_ip = 3317; continue _fun00033;
 1171:
                        mike = _closure2_slot14;
                        mike = variable37 != mike;
                        if(!mike) { _fun00034_ip = 1212; continue _fun00033 }
 1182:
                        variable57 = _closure1_slot23;
                        variable56 = variable57.can;
                        variable54 = _closure1_slot32;
                        variable55 = variable54.MANAGE_GUILD;
                        variable54 = _closure2_slot14;
                        mike = variable56.bind(variable57)(variable55, variable54);
 1212:
                        if(!mike) { _fun00034_ip = 1241; continue _fun00033 }
 1215:
                        variable54 = _closure2_slot14;
                        variable55 = variable37 == variable54;
                        variable54 = undefined;
                        if(variable55) { _fun00034_ip = 1237; continue _fun00033 }
 1228:
                        variable55 = _closure2_slot14;
                        variable54 = variable55.icon;
 1237:
                        mike = variable37 == variable54;
 1241:
                        variable53 = romeo;
                        variable52 = yankee;
                        variable51 = offset;
                        variable50 = verify;
                        variable49 = options;
                        variable48 = golf;
                        variable47 = oscar;
                        variable46 = report;
                        variable45 = tango;
                        variable44 = zulu;
                        if(!mike) { _fun00034_ip = 3317; continue _fun00033 }
 1277:
                        variable54 = entity.push;
                        mike = {};
                        mike['kind'] = kilo;
                        variable55 = _closure2_slot14;
                        variable55 = variable55.id;
                        mike['guildId'] = variable55;
                        mike = variable54.bind(entity)(mike);
                        variable53 = romeo;
                        variable52 = yankee;
                        variable51 = offset;
                        variable50 = verify;
                        variable49 = options;
                        variable48 = golf;
                        variable47 = oscar;
                        variable46 = report;
                        variable45 = tango;
                        variable44 = zulu;
                        _fun00034_ip = 3317; continue _fun00033;
 1341:
                        mike = _closure2_slot14;
                        mike = variable37 != mike;
                        if(!mike) { _fun00034_ip = 1360; continue _fun00033 }
 1352:
                        variable54 = _closure2_slot17;
                        mike = variable37 != variable54;
 1360:
                        if(!mike) { _fun00034_ip = 1400; continue _fun00033 }
 1363:
                        variable55 = _closure1_slot0;
                        variable54 = _closure1_slot2;
                        variable54 = variable54[sizing];
                        variable57 = variable55.bind(equality)(variable54);
                        variable56 = variable57.shouldRenderInvite;
                        variable55 = _closure2_slot17;
                        variable54 = _closure2_slot14;
                        mike = variable56.bind(variable57)(variable55, variable54);
 1400:
                        variable53 = romeo;
                        variable52 = yankee;
                        variable51 = offset;
                        variable50 = verify;
                        variable49 = options;
                        variable48 = golf;
                        variable47 = oscar;
                        variable46 = report;
                        variable45 = tango;
                        variable44 = zulu;
                        if(!mike) { _fun00034_ip = 3317; continue _fun00033 }
 1436:
                        variable54 = entity.push;
                        mike = {};
                        mike['kind'] = output;
                        variable55 = _closure2_slot14;
                        variable55 = variable55.id;
                        mike['guildId'] = variable55;
                        mike = variable54.bind(entity)(mike);
                        variable53 = romeo;
                        variable52 = yankee;
                        variable51 = offset;
                        variable50 = verify;
                        variable49 = options;
                        variable48 = golf;
                        variable47 = oscar;
                        variable46 = report;
                        variable45 = tango;
                        variable44 = zulu;
                        _fun00034_ip = 3317; continue _fun00033;
 1500:
                        mike = _closure2_slot14;
                        mike = variable37 != mike;
                        if(!mike) { _fun00034_ip = 1541; continue _fun00033 }
 1511:
                        variable57 = _closure1_slot23;
                        variable56 = variable57.can;
                        variable54 = _closure1_slot32;
                        variable55 = variable54.MANAGE_CHANNELS;
                        variable54 = _closure2_slot14;
                        mike = variable56.bind(variable57)(variable55, variable54);
 1541:
                        if(!mike) { _fun00034_ip = 1552; continue _fun00033 }
 1544:
                        variable54 = _closure2_slot17;
                        mike = variable37 != variable54;
 1552:
                        if(!mike) { _fun00034_ip = 1576; continue _fun00033 }
 1555:
                        variable55 = _closure2_slot17;
                        variable54 = _closure1_slot20;
                        variable54 = variable55[variable54];
                        variable54 = variable54.length;
                        mike = variable54 <= source;
 1576:
                        variable53 = romeo;
                        variable52 = yankee;
                        variable51 = offset;
                        variable50 = verify;
                        variable49 = options;
                        variable48 = golf;
                        variable47 = oscar;
                        variable46 = report;
                        variable45 = tango;
                        variable44 = zulu;
                        if(!mike) { _fun00034_ip = 3317; continue _fun00033 }
 1612:
                        variable54 = entity.push;
                        mike = {};
                        mike['kind'] = result;
                        variable55 = _closure2_slot14;
                        variable55 = variable55.id;
                        mike['guildId'] = variable55;
                        mike = variable54.bind(entity)(mike);
                        variable53 = romeo;
                        variable52 = yankee;
                        variable51 = offset;
                        variable50 = verify;
                        variable49 = options;
                        variable48 = golf;
                        variable47 = oscar;
                        variable46 = report;
                        variable45 = tango;
                        variable44 = zulu;
                        _fun00034_ip = 3317; continue _fun00033;
 1676:
                        mike = _closure2_slot14;
                        mike = variable37 != mike;
                        if(!mike) { _fun00034_ip = 1712; continue _fun00033 }
 1687:
                        variable56 = _closure2_slot14;
                        variable55 = variable56.hasFeature;
                        variable54 = _closure1_slot31;
                        variable54 = variable54.HUB;
                        mike = variable55.bind(variable56)(variable54);
 1712:
                        variable53 = romeo;
                        variable52 = yankee;
                        variable51 = offset;
                        variable50 = verify;
                        variable49 = options;
                        variable48 = golf;
                        variable47 = oscar;
                        variable46 = report;
                        variable45 = tango;
                        variable44 = zulu;
                        if(!mike) { _fun00034_ip = 3317; continue _fun00033 }
 1748:
                        variable54 = entity.push;
                        mike = {};
                        mike['kind'] = echo;
                        variable55 = _closure2_slot14;
                        variable55 = variable55.id;
                        mike['guildId'] = variable55;
                        mike = variable54.bind(entity)(mike);
                        variable53 = romeo;
                        variable52 = yankee;
                        variable51 = offset;
                        variable50 = verify;
                        variable49 = options;
                        variable48 = golf;
                        variable47 = oscar;
                        variable46 = report;
                        variable45 = tango;
                        variable44 = zulu;
                        _fun00034_ip = 3317; continue _fun00033;
 1812:
                        mike = context.length;
                        variable58 = variable39 < mike;
                        variable55 = 0;
                        variable54 = 0;
                        mike = 0;
                        variable57 = 0;
                        variable56 = report;
                        if(!variable58) { _fun00034_ip = 1928; continue _fun00033 }
 1835:
                        variable59 = context[variable54];
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
                        variable61 = context.length;
                        mike = variable58;
                        variable57 = variable60;
                        variable56 = variable59;
                        if(!(variable60 < variable61)) { _fun00034_ip = 1928; continue _fun00033 }
 1909:
                        variable55 = variable58;
                        variable54 = variable60;
                        variable57 = variable54;
                        variable56 = variable59;
                        mike = variable55;
                        if(mike < variable40) { _fun00034_ip = 1835; continue _fun00033 }
 1928:
                        variable54 = record.length;
                        variable54 = variable39 < variable54;
                        variable53 = romeo;
                        variable52 = yankee;
                        variable51 = offset;
                        variable50 = verify;
                        variable49 = options;
                        variable48 = mike;
                        variable47 = variable57;
                        variable46 = variable56;
                        variable45 = 0;
                        variable44 = zulu;
                        if(!variable54) { _fun00034_ip = 3317; continue _fun00033 }
 1972:
                        variable55 = mike;
                        variable54 = 0;
                        variable53 = romeo;
                        variable52 = yankee;
                        variable51 = offset;
                        variable50 = verify;
                        variable49 = options;
                        variable48 = variable55;
                        variable47 = variable57;
                        variable46 = variable56;
                        variable45 = 0;
                        variable44 = zulu;
                        if(!(mike < variable40)) { _fun00034_ip = 3317; continue _fun00033 }
 2013:
                        variable58 = record[variable54];
                        mike = _closure2_slot2;
                        variable59 = variable37 != mike;
                        if(!variable59) { _fun00034_ip = 2047; continue _fun00033 }
 2028:
                        variable61 = _closure2_slot2;
                        variable60 = variable61.has;
                        mike = variable58.userId;
                        variable59 = variable60.bind(variable61)(mike);
 2047:
                        mike = variable55;
                        if(variable59) { _fun00034_ip = 2066; continue _fun00033 }
 2053:
                        variable59 = entity.push;
                        variable59 = variable59.bind(entity)(variable58);
                        mike = variable55 + 1;
 2066:
                        variable59 = variable54 + 1;
                        variable60 = record.length;
                        variable53 = romeo;
                        variable52 = yankee;
                        variable51 = offset;
                        variable50 = verify;
                        variable49 = options;
                        variable48 = mike;
                        variable47 = variable57;
                        variable46 = variable56;
                        variable44 = variable58;
                        variable45 = variable59;
                        if(!(variable45 < variable60)) { _fun00034_ip = 3317; continue _fun00033 }
 2111:
                        variable55 = mike;
                        variable54 = variable59;
                        variable53 = romeo;
                        variable52 = yankee;
                        variable51 = offset;
                        variable50 = verify;
                        variable49 = options;
                        variable48 = variable55;
                        variable47 = variable57;
                        variable46 = variable56;
                        variable45 = variable54;
                        variable44 = variable58;
                        if(mike < variable40) { _fun00034_ip = 2013; continue _fun00033 }
 2154:
                        _fun00034_ip = 3317; continue _fun00033;
 2159:
                        mike = _closure2_slot1;
                        variable53 = romeo;
                        variable52 = yankee;
                        variable51 = offset;
                        variable50 = verify;
                        variable49 = options;
                        variable48 = golf;
                        variable47 = oscar;
                        variable46 = report;
                        variable45 = tango;
                        variable44 = zulu;
                        if(!(variable37 != mike)) { _fun00034_ip = 3317; continue _fun00033 }
 2200:
                        variable54 = _closure1_slot0;
                        mike = _closure1_slot2;
                        mike = mike[control];
                        variable56 = variable54.bind(equality)(mike);
                        variable55 = variable56.getActiveTextChannels;
                        variable54 = _closure2_slot1;
                        variable57 = _closure1_slot18;
                        mike = new Array(4);
                        mike[0] = variable57;
                        variable57 = _closure1_slot23;
                        mike[1] = variable57;
                        variable57 = _closure1_slot7;
                        mike[2] = variable57;
                        variable57 = _closure1_slot26;
                        mike[3] = variable57;
                        variable55 = variable55.bind(variable56)(variable54, mike);
                        variable56 = variable41.Math;
                        variable54 = variable56.min;
                        mike = variable55.length;
                        variable54 = variable54.bind(variable56)(source, mike);
                        variable56 = variable39 < variable54;
                        mike = 0;
                        variable53 = romeo;
                        variable52 = yankee;
                        variable51 = variable55;
                        variable50 = variable54;
                        variable49 = 0;
                        variable48 = golf;
                        variable47 = oscar;
                        variable46 = report;
                        variable45 = tango;
                        variable44 = zulu;
                        if(!variable56) { _fun00034_ip = 3317; continue _fun00033 }
 2332:
                        variable57 = entity.push;
                        variable56 = {};
                        variable56['kind'] = update;
                        variable58 = _closure2_slot1;
                        variable56['guildId'] = variable58;
                        variable58 = variable55[mike];
                        variable58 = variable58.id;
                        variable56['channelId'] = variable58;
                        variable56 = variable57.bind(entity)(variable56);
                        mike = mike + 1;
                        variable53 = romeo;
                        variable52 = yankee;
                        variable51 = variable55;
                        variable50 = variable54;
                        variable48 = golf;
                        variable47 = oscar;
                        variable46 = report;
                        variable45 = tango;
                        variable44 = zulu;
                        variable49 = mike;
                        if(variable49 < variable54) { _fun00034_ip = 2332; continue _fun00033 }
 2406:
                        _fun00034_ip = 3317; continue _fun00033;
 2411:
                        variable56 = target;
                        variable53 = romeo;
                        variable52 = yankee;
                        variable51 = offset;
                        variable50 = verify;
                        variable49 = options;
                        variable48 = golf;
                        variable47 = oscar;
                        variable46 = report;
                        variable45 = tango;
                        variable44 = zulu;
                        for(mike in variable56)
 2455:
                        {
                            variable53 = romeo;
                            variable52 = yankee;
                            variable51 = offset;
                            variable50 = verify;
                            variable49 = options;
                            variable48 = golf;
                            variable47 = oscar;
                            variable46 = report;
                            variable45 = tango;
                            variable44 = zulu;
 2497:
                            variable58 = mike;
                            variable59 = entity.push;
                            variable58 = target[variable58];
                            variable58 = variable59.bind(entity)(variable58);
                            _fun00034_ip = 2455; continue _fun00033;
 2516:
                            variable56 = papa;
                            variable53 = romeo;
                            variable52 = yankee;
                            variable51 = offset;
                            variable50 = verify;
                            variable49 = options;
                            variable48 = golf;
                            variable47 = oscar;
                            variable46 = report;
                            variable45 = tango;
                            variable44 = zulu;
                            for(mike in variable56)
 2560:
                            {
                                variable53 = romeo;
                                variable52 = yankee;
                                variable51 = offset;
                                variable50 = verify;
                                variable49 = options;
                                variable48 = golf;
                                variable47 = oscar;
                                variable46 = report;
                                variable45 = tango;
                                variable44 = zulu;
 2602:
                                variable58 = mike;
                                variable59 = entity.push;
                                variable58 = papa[variable58];
                                variable58 = variable59.bind(entity)(variable58);
                                _fun00034_ip = 2560; continue _fun00033;
 2621:
                                variable56 = status;
                                variable53 = romeo;
                                variable52 = yankee;
                                variable51 = offset;
                                variable50 = verify;
                                variable49 = options;
                                variable48 = golf;
                                variable47 = oscar;
                                variable46 = report;
                                variable45 = tango;
                                variable44 = zulu;
                                for(mike in variable56)
 2665:
                                {
                                    variable53 = romeo;
                                    variable52 = yankee;
                                    variable51 = offset;
                                    variable50 = verify;
                                    variable49 = options;
                                    variable48 = golf;
                                    variable47 = oscar;
                                    variable46 = report;
                                    variable45 = tango;
                                    variable44 = zulu;
 2707:
                                    variable58 = mike;
                                    variable59 = entity.push;
                                    variable58 = status[variable58];
                                    variable58 = variable59.bind(entity)(variable58);
                                    _fun00034_ip = 2665; continue _fun00033;
 2726:
                                    variable56 = lima;
                                    variable53 = romeo;
                                    variable52 = yankee;
                                    variable51 = offset;
                                    variable50 = verify;
                                    variable49 = options;
                                    variable48 = golf;
                                    variable47 = oscar;
                                    variable46 = report;
                                    variable45 = tango;
                                    variable44 = zulu;
                                    for(mike in variable56)
 2770:
                                    {
                                        variable53 = romeo;
                                        variable52 = yankee;
                                        variable51 = offset;
                                        variable50 = verify;
                                        variable49 = options;
                                        variable48 = golf;
                                        variable47 = oscar;
                                        variable46 = report;
                                        variable45 = tango;
                                        variable44 = zulu;
 2812:
                                        variable60 = mike;
                                        variable59 = entity.push;
                                        variable58 = {};
                                        variable64 = lima[variable60];
                                        variable65 = variable58;
                                        variable60 = copyDataProperties(variable65, variable64);
                                        variable58[vacuum] = sequence;
                                        variable58 = variable59.bind(entity)(variable58);
                                        _fun00034_ip = 2770; continue _fun00033;
 2845:
                                        variable61 = sierra;
                                        variable57 = romeo;
                                        variable56 = yankee;
                                        variable53 = variable57;
                                        variable52 = variable56;
                                        variable51 = offset;
                                        variable50 = verify;
                                        variable49 = options;
                                        variable48 = golf;
                                        variable47 = oscar;
                                        variable46 = report;
                                        variable45 = tango;
                                        variable44 = zulu;
                                        for(variable58 in variable61)
 2895:
                                        {
                                            variable53 = variable57;
                                            variable52 = variable56;
                                            variable51 = offset;
                                            variable50 = verify;
                                            variable49 = options;
                                            variable48 = golf;
                                            variable47 = oscar;
                                            variable46 = report;
                                            variable45 = tango;
                                            variable44 = zulu;
 2937:
                                            mike = variable58;
                                            variable54 = _closure1_slot36;
                                            mike = sierra[mike];
                                            variable55 = variable54.bind(equality)(mike);
                                            variable54 = variable55.bind(equality)();
                                            mike = variable54.done;
                                            variable57 = variable54;
                                            variable56 = variable55;
                                            variable54 = variable57;
                                            if(mike) { _fun00034_ip = 2895; continue _fun00033 }
 2974:
                                            variable63 = variable54.value;
                                            mike = entity.push;
                                            mike = mike.bind(entity)(variable63);
                                            variable63 = variable55.bind(equality)();
                                            mike = variable63.done;
                                            variable57 = variable63;
                                            variable56 = variable55;
                                            variable54 = variable57;
                                            if(mike) { _fun00034_ip = 2895; continue _fun00033 }
 3010:
                                            _fun00034_ip = 2974; continue _fun00033;
 3012:
                                            variable56 = lima;
                                            variable53 = romeo;
                                            variable52 = yankee;
                                            variable51 = offset;
                                            variable50 = verify;
                                            variable49 = options;
                                            variable48 = golf;
                                            variable47 = oscar;
                                            variable46 = report;
                                            variable45 = tango;
                                            variable44 = zulu;
                                            for(mike in variable56)
 3056:
                                            {
                                                variable53 = romeo;
                                                variable52 = yankee;
                                                variable51 = offset;
                                                variable50 = verify;
                                                variable49 = options;
                                                variable48 = golf;
                                                variable47 = oscar;
                                                variable46 = report;
                                                variable45 = tango;
                                                variable44 = zulu;
 3098:
                                                variable58 = mike;
                                                variable59 = entity.push;
                                                variable58 = lima[variable58];
                                                variable58 = variable59.bind(entity)(variable58);
                                                _fun00034_ip = 3056; continue _fun00033;
 3117:
                                                variable54 = quebec.forEach;
                                                mike = function(argFoo) {
                                                    zulu = _closure4_slot11;
                                                    mike = zulu.push;
                                                    entity = {'kind': 'guild-event', 'event': null, 'isLive': false};
                                                    tango = argFoo;
                                                    entity['event'] = tango;
                                                    entity = mike.bind(zulu)(entity);
                                                    return entity;
                                                };
                                                mike = variable54.bind(quebec)(mike);
                                                variable53 = romeo;
                                                variable52 = yankee;
                                                variable51 = offset;
                                                variable50 = verify;
                                                variable49 = options;
                                                variable48 = golf;
                                                variable47 = oscar;
                                                variable46 = report;
                                                variable45 = tango;
                                                variable44 = zulu;
                                                _fun00034_ip = 3317; continue _fun00033;
 3169:
                                                variable54 = variable36.forEach;
                                                mike = function(argFoo) {
                                                    zulu = _closure4_slot11;
                                                    mike = zulu.push;
                                                    entity = {'kind': 'guild-event', 'event': null, 'isLive': true};
                                                    tango = argFoo;
                                                    entity['event'] = tango;
                                                    entity = mike.bind(zulu)(entity);
                                                    return entity;
                                                };
                                                mike = variable54.bind(variable36)(mike);
                                                variable53 = romeo;
                                                variable52 = yankee;
                                                variable51 = offset;
                                                variable50 = verify;
                                                variable49 = options;
                                                variable48 = golf;
                                                variable47 = oscar;
                                                variable46 = report;
                                                variable45 = tango;
                                                variable44 = zulu;
                                                _fun00034_ip = 3317; continue _fun00033;
 3218:
                                                variable56 = whiskey;
                                                variable53 = romeo;
                                                variable52 = yankee;
                                                variable51 = offset;
                                                variable50 = verify;
                                                variable49 = options;
                                                variable48 = golf;
                                                variable47 = oscar;
                                                variable46 = report;
                                                variable45 = tango;
                                                variable44 = zulu;
                                                for(mike in variable56)
 3259:
                                                {
                                                    variable53 = romeo;
                                                    variable52 = yankee;
                                                    variable51 = offset;
                                                    variable50 = verify;
                                                    variable49 = options;
                                                    variable48 = golf;
                                                    variable47 = oscar;
                                                    variable46 = report;
                                                    variable45 = tango;
                                                    variable44 = zulu;
 3298:
                                                    variable58 = mike;
                                                    variable59 = entity.push;
                                                    variable58 = whiskey[variable58];
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
                        variable54 = config.bind(equality)();
                        mike = variable54.done;
                        romeo = variable53;
                        yankee = variable52;
                        offset = variable51;
                        verify = variable50;
                        options = variable49;
                        golf = variable48;
                        oscar = variable47;
                        report = variable46;
                        tango = variable45;
                        zulu = variable44;
                        foxtrot = variable54;
                        if(!mike) { _fun00034_ip = 851; continue _fun00033 }
 3365:
                        return entity;
                    }
                };
                entity = tango.bind(report)(zulu, mike, entity);
                return entity;
            };
            options = romeo.bind(backup)(tango, options);
            var _closure2_slot28 = options;
            romeo = backup.useState;
            tango = function() {
                _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                    entity = _closure2_slot26;
                    if(entity) { _fun00048_ip = 98; continue _fun00047 }
 10:
                    entity = _closure2_slot28;
                    golf = undefined;
                    entity = entity.bind(golf)();
                    zulu = _closure2_slot1;
                    mike = null;
                    if(!(mike != zulu)) { _fun00048_ip = 96; continue _fun00047 }
 30:
                    zulu = _closure1_slot1;
                    tango = _closure1_slot2;
                    mike = 29;
                    mike = tango[mike];
                    tango = zulu.bind(golf)(mike);
                    zulu = tango.dispatch;
                    mike = {};
                    options = 'GUILD_HEADER_ACTIVE_CHANNELS_COUNT';
                    mike['type'] = options;
                    oscar = _closure1_slot38;
                    oscar = oscar.bind(golf)(entity);
                    mike['count'] = oscar;
                    report = _closure2_slot1;
                    mike['guildId'] = report;
                    mike = zulu.bind(tango)(mike);
 96:
                    return entity;
 98:
                    entity = new Array(0);
                    return entity;
                }
            };
            foxtrot = romeo.bind(backup)(tango);
            romeo = _closure1_slot3;
            tango = 2;
            foxtrot = romeo.bind(report)(foxtrot, tango);
            tango = 0;
            tango = foxtrot[tango];
            romeo = 1;
            romeo = foxtrot[romeo];
            var _closure2_slot29 = romeo;
            foxtrot = backup.useCallback;
            romeo = new Array(2);
            romeo[0] = options;
            romeo[1] = offset;
            options = function() {
                _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                    mike = _closure2_slot28;
                    entity = undefined;
                    golf = mike.bind(entity)();
                    mike = _closure2_slot29;
                    mike = mike.bind(entity)(golf);
                    zulu = _closure2_slot1;
                    mike = null;
                    if(!(mike != zulu)) { _fun00050_ip = 98; continue _fun00049 }
 32:
                    zulu = _closure1_slot1;
                    tango = _closure1_slot2;
                    mike = 29;
                    mike = tango[mike];
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.dispatch;
                    mike = {};
                    options = 'GUILD_HEADER_ACTIVE_CHANNELS_COUNT';
                    mike['type'] = options;
                    oscar = _closure1_slot38;
                    oscar = oscar.bind(entity)(golf);
                    mike['count'] = oscar;
                    report = _closure2_slot1;
                    mike['guildId'] = report;
                    mike = zulu.bind(tango)(mike);
 98:
                    return entity;
                }
            };
            options = foxtrot.bind(backup)(options, romeo);
            var _closure2_slot30 = options;
            foxtrot = backup.useEffect;
            romeo = new Array(4);
            romeo[0] = offset;
            romeo[1] = mike;
            romeo[2] = golf;
            romeo[3] = options;
            golf = function() {
                _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                    tango = _closure2_slot1;
                    zulu = _closure2_slot27;
                    zulu = zulu.current;
                    zulu = zulu.guildId;
                    if(!(tango !== zulu)) { _fun00052_ip = 54; continue _fun00051 }
 27:
                    tango = _closure2_slot27;
                    zulu = {};
                    report = _closure2_slot1;
                    zulu['guildId'] = report;
                    report = false;
                    zulu['hasComputed'] = report;
                    tango['current'] = zulu;
 54:
                    zulu = _closure2_slot27;
                    zulu = zulu.current;
                    zulu = zulu.hasComputed;
                    if(zulu) { _fun00052_ip = 93; continue _fun00051 }
 72:
                    tango = _closure2_slot26;
                    zulu = undefined;
                    if(tango) { _fun00052_ip = 91; continue _fun00051 }
 81:
                    tango = _closure2_slot30;
                    tango = tango.bind(zulu)();
                    _fun00052_ip = 100; continue _fun00051;
 91:
                    return zulu;
 93:
                    mike = _closure2_slot20;
                    if(mike) { _fun00052_ip = 104; continue _fun00051 }
 100:
                    mike = undefined;
                    return mike;
 104:
                    mike = global;
                    report = mike.setTimeout;
                    tango = undefined;
                    zulu = function() {
                        mike = _closure2_slot30;
                        entity = undefined;
                        mike = mike.bind(entity)();
                        return entity;
                    };
                    mike = 50;
                    mike = report.bind(tango)(zulu, mike);
                    var _closure3_slot0 = mike;
                    entity = function() {
                        entity = global;
                        zulu = entity.clearTimeout;
                        mike = _closure3_slot0;
                        entity = undefined;
                        entity = zulu.bind(entity)(mike);
                        return entity;
                    };
                    return entity;
                }
            };
            golf = foxtrot.bind(backup)(golf, romeo);
            golf = null;
            romeo = golf == yankee;
            golf = undefined;
            if(romeo) { _fun00010_ip = 1465; continue _fun00009 }
 1460:
            golf = yankee.id;
 1465:
            oscar = function(argFoo, argBar, argBaz, argCorge) { // Original name: useSpammyStoresVersion
                options = argFoo;
                golf = argBar;
                mike = argBaz;
                oscar = argCorge;
                var _closure3_slot0 = options;
                var _closure3_slot1 = golf;
                var _closure3_slot2 = mike;
                var _closure3_slot3 = oscar;
                tango = _closure1_slot4;
                report = tango.useRef;
                zulu = -1;
                zulu = report.bind(tango)(zulu);
                var _closure3_slot4 = zulu;
                report = tango.useRef;
                zulu = 0;
                zulu = report.bind(tango)(zulu);
                var _closure3_slot5 = zulu;
                report = tango.useCallback;
                zulu = new Array(4);
                zulu[0] = options;
                zulu[1] = golf;
                zulu[2] = oscar;
                zulu[3] = mike;
                mike = function() {
                    _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                        mike = global;
                        report = mike.clearTimeout;
                        entity = _closure3_slot4;
                        tango = entity.current;
                        entity = undefined;
                        tango = report.bind(entity)(tango);
                        tango = _closure3_slot2;
                        if(!tango) { _fun00054_ip = 71; continue _fun00053 }
 34:
                        zulu = _closure3_slot4;
                        report = mike.setTimeout;
                        tango = function() {
                            _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
                                mike = _closure1_slot27;
                                entity = mike.getUserStoreVersion;
                                mike = entity.bind(mike)();
                                zulu = _closure1_slot18;
                                entity = zulu.getPrivateChannelsVersion;
                                entity = entity.bind(zulu)();
                                mike = mike + entity;
                                zulu = _closure1_slot28;
                                entity = zulu.getVoiceStateVersion;
                                entity = entity.bind(zulu)();
                                zulu = mike + entity;
                                mike = _closure3_slot0;
                                golf = null;
                                report = golf != mike;
                                oscar = -1;
                                mike = oscar;
                                if(!report) { _fun00056_ip = 124; continue _fun00055 }
 80:
                                report = _closure3_slot1;
                                report = golf != report;
                                mike = oscar;
                                if(!report) { _fun00056_ip = 124; continue _fun00055 }
 94:
                                golf = _closure1_slot16;
                                oscar = golf.getProps;
                                report = _closure3_slot0;
                                tango = _closure3_slot1;
                                tango = oscar.bind(golf)(report, tango);
                                mike = tango.version;
 124:
                                zulu = zulu + mike;
                                mike = _closure3_slot5;
                                mike = mike.current;
                                if(!(mike !== zulu)) { _fun00056_ip = 161; continue _fun00055 }
 141:
                                mike = _closure3_slot5;
                                mike['current'] = zulu;
                                mike = _closure3_slot3;
                                entity = undefined;
                                entity = mike.bind(entity)();
 161:
                                entity = undefined;
                                return entity;
                            }
                        };
                        mike = 1000;
                        mike = report.bind(entity)(tango, mike);
                        zulu['current'] = mike;
 71:
                        return entity;
                    }
                };
                report = report.bind(tango)(mike, zulu);
                var _closure3_slot6 = report;
                zulu = tango.useEffect;
                mike = new Array(1);
                mike[0] = report;
                entity = function() {
                    tango = _closure1_slot35;
                    zulu = tango.forEach;
                    mike = function(argFoo) {
                        zulu = argFoo;
                        mike = zulu.addChangeListener;
                        entity = _closure3_slot6;
                        entity = mike.bind(zulu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    mike = zulu.bind(tango)(mike);
                    entity = function() {
                        entity = global;
                        zulu = entity.clearTimeout;
                        entity = _closure3_slot4;
                        mike = entity.current;
                        entity = undefined;
                        mike = zulu.bind(entity)(mike);
                        tango = _closure1_slot35;
                        zulu = tango.forEach;
                        mike = function(argFoo) {
                            zulu = argFoo;
                            mike = zulu.removeChangeListener;
                            entity = _closure3_slot6;
                            entity = mike.bind(zulu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    return entity;
                };
                entity = zulu.bind(tango)(entity, mike);
                entity = undefined;
                return entity;
            };
            variable39 = undefined;
            variable38 = offset;
            variable37 = golf;
            variable36 = verify;
            quebec = options;
            oscar = variable39[oscar](variable38, variable37, variable36, quebec, equality);
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            entity = 41;
            entity = golf[entity];
            entity = oscar.bind(report)(entity);
            zulu = entity.bind(report)(zulu);
            entity = new Array(2);
            entity[0] = tango;
            if(mike) { _fun00010_ip = 1535; continue _fun00009 }
 1526:
            zulu = zulu.hasComputed;
            mike = !zulu;
 1535:
            entity[1] = mike;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();