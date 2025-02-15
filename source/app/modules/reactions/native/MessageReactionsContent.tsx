// app/modules/reactions/native/MessageReactionsContent.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    golf = argBar;
    kilo = argBaz;
    verify = argCorge;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = kilo;
    var _closure1_slot2 = verify;
    var _closure1_slot3 = options;
    report = function(argFoo) { // Original name: useReactors
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            foxtrot = zulu.channelId;
            var _closure2_slot0 = foxtrot;
            mike = zulu.messageId;
            var _closure2_slot1 = mike;
            tango = zulu.reaction;
            var _closure2_slot2 = tango;
            oscar = zulu.reactionType;
            var _closure2_slot3 = oscar;
            verify = _closure1_slot0;
            golf = _closure1_slot3;
            report = 15;
            options = golf[report];
            report = undefined;
            romeo = verify.bind(report)(options);
            yankee = romeo.useStateFromStores;
            options = _closure1_slot14;
            offset = new Array(1);
            offset[0] = options;
            options = new Array(4);
            options[0] = foxtrot;
            options[1] = mike;
            mike = tango.emoji;
            options[2] = mike;
            options[3] = oscar;
            foxtrot = _closure1_slot1;
            mike = 18;
            mike = golf[mike];
            backup = foxtrot.bind(report)(mike);
            sizing = function() {
                options = _closure1_slot14;
                golf = options.getReactions;
                foxtrot = _closure2_slot0;
                romeo = _closure2_slot1;
                zulu = _closure2_slot2;
                yankee = zulu.emoji;
                offset = _closure1_slot16;
                verify = _closure2_slot3;
                backup = options;
                tango = backup[golf](foxtrot, romeo, yankee, offset, verify, options);
                zulu = _closure1_slot1;
                mike = _closure1_slot3;
                entity = 17;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.map;
                entity = function(argFoo) {
                    entity = argFoo;
                    return entity;
                };
                entity = mike.bind(zulu)(tango, entity);
                return entity;
            };
            result = romeo;
            output = offset;
            kilo = options;
            mike = result[yankee](output, sizing, kilo, backup, foxtrot);
            entity = {};
            entity['reactors'] = mike;
            options = 19;
            golf = golf[options];
            golf = verify.bind(report)(golf);
            golf = golf.ReactionTypes;
            golf = golf.VOTE;
            if(!(oscar !== golf)) { _fun00002_ip = 230; continue _fun00001 }
 182:
            golf = _closure1_slot0;
            zulu = _closure1_slot3;
            zulu = zulu[options];
            zulu = golf.bind(report)(zulu);
            zulu = zulu.ReactionTypes;
            zulu = zulu.BURST;
            if(!(oscar !== zulu)) { _fun00002_ip = 222; continue _fun00001 }
 215:
            zulu = tango.count;
            _fun00002_ip = 228; continue _fun00001;
 222:
            zulu = tango.burst_count;
 228:
            _fun00002_ip = 268; continue _fun00001;
 230:
            oscar = tango.count_details;
            tango = null;
            golf = tango == oscar;
            report = undefined;
            if(golf) { _fun00002_ip = 253; continue _fun00001 }
 247:
            report = oscar.vote;
 253:
            oscar = tango != report;
            tango = 0;
            if(!oscar) { _fun00002_ip = 265; continue _fun00001 }
 262:
            tango = report;
 265:
            zulu = tango;
 268:
            mike = mike.length;
            mike = zulu > mike;
            entity['reactorsHasMore'] = mike;
            return entity;
        }
    };
    var _closure1_slot27 = report;
    tango = function(argFoo) { // Original name: useReactorsOnScrollNative
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            mike = argFoo;
            romeo = mike.channelId;
            var _closure2_slot0 = romeo;
            yankee = mike.messageId;
            var _closure2_slot1 = yankee;
            offset = mike.reactionSelected;
            var _closure2_slot2 = offset;
            oscar = mike.reactors;
            verify = mike.reactorsHasMore;
            var _closure2_slot3 = verify;
            tango = mike.reactionType;
            var _closure2_slot4 = tango;
            zulu = undefined;
            var _closure2_slot6 = zulu;
            var _closure2_slot7 = zulu;
            var _closure2_slot8 = zulu;
            var _closure2_slot9 = zulu;
            options = _closure1_slot5;
            golf = options.useRef;
            report = false;
            report = golf.bind(options)(report);
            var _closure2_slot5 = report;
            golf = oscar.length;
            report = 0;
            report = golf > report;
            options = null;
            if(!report) { _fun00004_ip = 137; continue _fun00003 }
 116:
            golf = oscar.length;
            report = 1;
            report = golf - report;
            report = oscar[report];
            options = report.id;
 137:
            _closure2_slot6 = options;
            golf = _closure1_slot5;
            oscar = golf.useCallback;
            report = new Array(6);
            report[0] = romeo;
            report[1] = yankee;
            report[2] = offset;
            report[3] = verify;
            report[4] = options;
            report[5] = tango;
            tango = function(argFoo, argBar) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    mike = argFoo;
                    entity = argBar;
                    mike = mike / entity;
                    entity = 0.75;
                    entity = mike > entity;
                    if(!entity) { _fun00006_ip = 34; continue _fun00005 }
 27:
                    entity = _closure2_slot3;
 34:
                    if(!entity) { _fun00006_ip = 52; continue _fun00005 }
 37:
                    mike = _closure2_slot5;
                    mike = mike.current;
                    entity = !mike;
 52:
                    if(!entity) { _fun00006_ip = 187; continue _fun00005 }
 58:
                    mike = _closure2_slot5;
                    entity = true;
                    mike['current'] = entity;
                    zulu = _closure1_slot2;
                    mike = _closure1_slot3;
                    entity = 20;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.getReactors;
                    entity = {};
                    oscar = _closure2_slot0;
                    entity['channelId'] = oscar;
                    oscar = _closure2_slot1;
                    entity['messageId'] = oscar;
                    oscar = _closure2_slot2;
                    oscar = oscar.emoji;
                    entity['emoji'] = oscar;
                    report = _closure1_slot16;
                    entity['limit'] = report;
                    report = _closure2_slot6;
                    entity['after'] = report;
                    tango = _closure2_slot4;
                    entity['type'] = tango;
                    zulu = mike.bind(zulu)(entity);
                    mike = zulu.then;
                    entity = function() {
                        mike = _closure2_slot5;
                        entity = false;
                        mike['current'] = entity;
                        entity = undefined;
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
 187:
                    entity = undefined;
                    return entity;
                }
            };
            tango = oscar.bind(golf)(tango, report);
            _closure2_slot7 = tango;
            oscar = _closure1_slot5;
            report = oscar.useRef;
            report = report.bind(oscar)(tango);
            _closure2_slot8 = report;
            golf = _closure1_slot5;
            oscar = golf.useEffect;
            report = new Array(1);
            report[0] = tango;
            tango = function() {
                mike = _closure2_slot8;
                entity = _closure2_slot7;
                mike['current'] = entity;
                entity = undefined;
                return entity;
            };
            tango = oscar.bind(golf)(tango, report);
            tango = _closure1_slot1;
            report = _closure1_slot3;
            mike = 21;
            oscar = report[mike];
            golf = tango.bind(zulu)(oscar);
            oscar = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot3;
                entity = 17;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.debounce;
                mike = function(argFoo, argBar) {
                    tango = _closure2_slot8;
                    zulu = tango.current;
                    mike = argFoo;
                    entity = argBar;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                entity = 16;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            oscar = golf.bind(zulu)(oscar);
            _closure2_slot9 = oscar;
            mike = report[mike];
            mike = tango.bind(zulu)(mike);
            entity = function() {
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.nativeEvent;
                    mike = entity.contentOffset;
                    tango = mike.y;
                    entity = entity.contentSize;
                    zulu = entity.height;
                    mike = _closure2_slot9;
                    entity = undefined;
                    entity = mike.bind(entity)(tango, zulu);
                    return entity;
                };
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    var _closure1_slot28 = tango;
    entity = function(argFoo, argBar) { // Original name: useRenderFooter
        golf = argFoo;
        oscar = argBar;
        var _closure2_slot0 = golf;
        var _closure2_slot1 = oscar;
        tango = _closure1_slot21;
        zulu = undefined;
        report = tango.bind(zulu)();
        var _closure2_slot2 = report;
        tango = _closure1_slot5;
        zulu = tango.useCallback;
        mike = new Array(3);
        mike[0] = golf;
        mike[1] = oscar;
        mike[2] = report;
        entity = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = _closure2_slot1;
                if(entity) { _fun00008_ip = 27; continue _fun00007 }
 10:
                entity = _closure2_slot0;
                tango = entity.length;
                zulu = 0;
                entity = null;
                if(!(zulu === tango)) { _fun00008_ip = 70; continue _fun00007 }
 27:
                report = _closure1_slot18;
                tango = _closure1_slot6;
                zulu = {};
                mike = _closure2_slot2;
                mike = mike.loadingSpinner;
                zulu['style'] = mike;
                mike = 'large';
                zulu['size'] = mike;
                mike = undefined;
                entity = report.bind(mike)(tango, zulu);
 70:
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot29 = entity;
    entity = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: useRenderItem
        yankee = argFoo;
        options = argBar;
        offset = argBaz;
        golf = argCorge;
        verify = argGrault;
        var _closure2_slot0 = yankee;
        var _closure2_slot1 = options;
        var _closure2_slot2 = offset;
        var _closure2_slot3 = golf;
        var _closure2_slot4 = verify;
        zulu = _closure1_slot21;
        tango = undefined;
        oscar = zulu.bind(tango)();
        var _closure2_slot5 = oscar;
        report = _closure1_slot1;
        romeo = _closure1_slot3;
        zulu = 22;
        zulu = romeo[zulu];
        zulu = report.bind(tango)(zulu);
        zulu = zulu.bind(tango)();
        report = zulu.analyticsLocations;
        var _closure2_slot6 = report;
        tango = _closure1_slot5;
        zulu = tango.useCallback;
        mike = new Array(7);
        mike[0] = yankee;
        mike[1] = offset;
        mike[2] = verify;
        mike[3] = options;
        mike[4] = golf;
        mike[5] = oscar;
        mike[6] = report;
        entity = function(argFoo, argBar) {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                verify = argBar;
                entity = _closure2_slot0;
                result = entity[verify];
                var _closure3_slot0 = result;
                zulu = result.id;
                var _closure3_slot1 = zulu;
                mike = entity.length;
                entity = 1;
                options = mike - entity;
                tango = _closure1_slot12;
                mike = tango.getChannel;
                entity = _closure2_slot2;
                tango = mike.bind(tango)(entity);
                oscar = null;
                entity = oscar != tango;
                mike = null;
                if(!entity) { _fun00010_ip = 83; continue _fun00009 }
 73:
                entity = tango.getGuildId;
                mike = entity.bind(tango)();
 83:
                report = _closure1_slot1;
                tango = _closure1_slot3;
                entity = 23;
                entity = tango[entity];
                tango = undefined;
                offset = report.bind(tango)(entity);
                report = offset.getNickname;
                entity = _closure2_slot2;
                output = report.bind(offset)(mike, entity, result);
                update = mike;
                if(!(oscar == output)) { _fun00010_ip = 160; continue _fun00009 }
 129:
                mike = _closure1_slot1;
                report = _closure1_slot3;
                entity = 24;
                entity = report[entity];
                mike = mike.bind(tango)(entity);
                entity = mike.getGlobalName;
                output = entity.bind(mike)(result);
 160:
                entity = oscar != update;
                control = null;
                if(!entity) { _fun00010_ip = 185; continue _fun00009 }
 169:
                mike = _closure1_slot13;
                entity = mike.getMember;
                control = entity.bind(mike)(update, zulu);
 185:
                entity = _closure2_slot3;
                mike = entity.burst_count;
                entity = 0;
                if(!(!(mike > entity))) { _fun00010_ip = 235; continue _fun00009 }
 201:
                mike = _closure1_slot0;
                zulu = _closure1_slot3;
                entity = 19;
                entity = zulu[entity];
                entity = mike.bind(tango)(entity);
                entity = entity.ReactionTypes;
                entity = entity.NORMAL;
                _fun00010_ip = 267; continue _fun00009;
 235:
                zulu = _closure1_slot0;
                report = _closure1_slot3;
                mike = 19;
                mike = report[mike];
                mike = zulu.bind(tango)(mike);
                mike = mike.ReactionTypes;
                entity = mike.BURST;
 267:
                var _closure3_slot2 = entity;
                zulu = _closure1_slot19;
                mike = _closure1_slot10;
                entity = {};
                source = _closure2_slot5;
                report = source.listRow;
                entity['style'] = report;
                yankee = _closure1_slot18;
                kilo = _closure1_slot1;
                vacuum = _closure1_slot3;
                report = 25;
                report = vacuum[report];
                offset = kilo.bind(tango)(report);
                report = {};
                sizing = _closure1_slot18;
                echo = 26;
                backup = vacuum[echo];
                kilo = kilo.bind(tango)(backup);
                backup = {};
                source = source.avatar;
                backup['style'] = source;
                source = _closure1_slot0;
                echo = vacuum[echo];
                echo = source.bind(tango)(echo);
                echo = echo.AvatarSizes;
                echo = echo.SMALL;
                backup['size'] = echo;
                echo = result.getAvatarSource;
                source = echo.bind(result)(update);
                echo = source;
                if(!(oscar != update)) { _fun00010_ip = 450; continue _fun00009 }
 396:
                vacuum = oscar == control;
                update = undefined;
                if(vacuum) { _fun00010_ip = 411; continue _fun00009 }
 405:
                update = control.avatar;
 411:
                echo = source;
                if(!(oscar != update)) { _fun00010_ip = 450; continue _fun00009 }
 418:
                source = _closure1_slot1;
                vacuum = _closure1_slot3;
                update = 27;
                update = vacuum[update];
                source = source.bind(tango)(update);
                update = source.getGuildMemberAvatarSource;
                echo = update.bind(source)(control, result);
 450:
                backup['source'] = echo;
                backup = sizing.bind(tango)(kilo, backup);
                report['leading'] = backup;
                sizing = _closure1_slot18;
                kilo = _closure1_slot1;
                echo = _closure1_slot3;
                backup = 28;
                backup = echo[backup];
                kilo = kilo.bind(tango)(backup);
                backup = {};
                backup['user'] = result;
                backup['nick'] = output;
                backup = sizing.bind(tango)(kilo, backup);
                report['label'] = backup;
                backup = _closure2_slot4;
                foxtrot = null;
                if(!backup) { _fun00010_ip = 632; continue _fun00009 }
 519:
                kilo = _closure1_slot0;
                sizing = _closure1_slot3;
                backup = 29;
                backup = sizing[backup];
                kilo = kilo.bind(tango)(backup);
                backup = kilo.isAndroid;
                backup = backup.bind(kilo)();
                foxtrot = null;
                if(!backup) { _fun00010_ip = 632; continue _fun00009 }
 553:
                sizing = _closure1_slot18;
                kilo = _closure1_slot9;
                backup = {};
                output = function() { // Original name: onPress
                    options = _closure1_slot0;
                    verify = _closure1_slot3;
                    tango = 20;
                    entity = verify[tango];
                    golf = undefined;
                    zulu = options.bind(golf)(entity);
                    mike = zulu.removeReaction;
                    entity = {};
                    oscar = _closure2_slot2;
                    entity['channelId'] = oscar;
                    oscar = _closure2_slot1;
                    entity['messageId'] = oscar;
                    report = _closure2_slot3;
                    report = report.emoji;
                    entity['emoji'] = report;
                    tango = verify[tango];
                    tango = options.bind(golf)(tango);
                    tango = tango.ReactionLocations;
                    tango = tango.MESSAGE;
                    entity['location'] = tango;
                    tango = _closure3_slot0;
                    tango = tango.id;
                    entity['userId'] = tango;
                    tango = {};
                    oscar = _closure3_slot2;
                    report = 19;
                    report = verify[report];
                    report = options.bind(golf)(report);
                    report = report.ReactionTypes;
                    report = report.BURST;
                    report = oscar === report;
                    tango['burst'] = report;
                    entity['options'] = tango;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                backup['onPress'] = output;
                echo = _closure1_slot18;
                source = _closure1_slot1;
                control = _closure1_slot3;
                output = 30;
                output = control[output];
                result = source.bind(tango)(output);
                output = {};
                update = 31;
                update = control[update];
                update = source.bind(tango)(update);
                output['source'] = update;
                output = echo.bind(tango)(result, output);
                backup['children'] = output;
                foxtrot = sizing.bind(tango)(kilo, backup);
 632:
                report['trailing'] = foxtrot;
                romeo = function() { // Original name: onLongPress
                    zulu = _closure1_slot1;
                    mike = _closure1_slot3;
                    entity = 32;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = {};
                    tango = _closure3_slot1;
                    mike['userId'] = tango;
                    oscar = _closure2_slot2;
                    mike['channelId'] = oscar;
                    oscar = _closure2_slot1;
                    mike['messageId'] = oscar;
                    report = _closure3_slot0;
                    mike['localUser'] = report;
                    tango = _closure2_slot6;
                    mike['sourceAnalyticsLocations'] = tango;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                report['onLongPress'] = romeo;
                offset = yankee.bind(tango)(offset, report);
                report = new Array(2);
                report[0] = offset;
                oscar = null;
                if(!(verify !== options)) { _fun00010_ip = 701; continue _fun00009 }
 669:
                verify = _closure1_slot18;
                options = _closure1_slot1;
                offset = _closure1_slot3;
                golf = 33;
                golf = offset[golf];
                options = options.bind(tango)(golf);
                golf = {};
                oscar = verify.bind(tango)(options, golf);
 701:
                report[1] = oscar;
                entity['children'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot30 = entity;
    entity = function(argFoo, argBar, argBaz, argCorge) { // Original name: useRenderQuickActions
        options = argFoo;
        golf = argBar;
        oscar = argBaz;
        verify = argCorge;
        var _closure2_slot0 = options;
        var _closure2_slot1 = golf;
        var _closure2_slot2 = oscar;
        var _closure2_slot3 = verify;
        tango = _closure1_slot21;
        zulu = undefined;
        report = tango.bind(zulu)();
        var _closure2_slot4 = report;
        tango = _closure1_slot5;
        zulu = tango.useCallback;
        mike = new Array(5);
        mike[0] = verify;
        mike[1] = options;
        mike[2] = golf;
        mike[3] = oscar;
        mike[4] = report;
        entity = function(argFoo, argBar) {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zulu = _closure2_slot3;
                mike = argBar;
                mike = zulu[mike];
                var _closure3_slot0 = mike;
                mike = _closure2_slot2;
                zulu = mike.burst_count;
                mike = 0;
                if(!(!(zulu > mike))) { _fun00012_ip = 75; continue _fun00011 }
 36:
                tango = _closure1_slot0;
                zulu = _closure1_slot3;
                mike = 19;
                zulu = zulu[mike];
                mike = undefined;
                mike = tango.bind(mike)(zulu);
                mike = mike.ReactionTypes;
                mike = mike.NORMAL;
                _fun00012_ip = 112; continue _fun00011;
 75:
                report = _closure1_slot0;
                tango = _closure1_slot3;
                zulu = 19;
                tango = tango[zulu];
                zulu = undefined;
                zulu = report.bind(zulu)(tango);
                zulu = zulu.ReactionTypes;
                mike = zulu.BURST;
 112:
                var _closure3_slot1 = mike;
                tango = _closure1_slot18;
                zulu = _closure1_slot10;
                mike = {};
                entity = _closure2_slot4;
                entity = entity.buttonRow;
                mike['style'] = entity;
                golf = _closure1_slot18;
                offset = _closure1_slot1;
                yankee = _closure1_slot3;
                entity = 34;
                report = yankee[entity];
                entity = undefined;
                oscar = offset.bind(entity)(report);
                report = {};
                backup = _closure1_slot0;
                verify = 35;
                romeo = yankee[verify];
                romeo = backup.bind(entity)(romeo);
                foxtrot = romeo.intl;
                romeo = foxtrot.string;
                verify = yankee[verify];
                verify = backup.bind(entity)(verify);
                verify = verify.t;
                verify = verify.N86XcH;
                verify = romeo.bind(foxtrot)(verify);
                report['title'] = verify;
                verify = 31;
                verify = yankee[verify];
                verify = offset.bind(entity)(verify);
                report['icon'] = verify;
                verify = 14;
                verify = yankee[verify];
                verify = offset.bind(entity)(verify);
                verify = verify.unsafe_rawColors;
                verify = verify.RED_400;
                report['color'] = verify;
                options = function() { // Original name: onPress
                    options = _closure1_slot0;
                    verify = _closure1_slot3;
                    tango = 20;
                    entity = verify[tango];
                    golf = undefined;
                    zulu = options.bind(golf)(entity);
                    mike = zulu.removeReaction;
                    entity = {};
                    oscar = _closure2_slot0;
                    entity['channelId'] = oscar;
                    oscar = _closure2_slot1;
                    entity['messageId'] = oscar;
                    report = _closure2_slot2;
                    report = report.emoji;
                    entity['emoji'] = report;
                    tango = verify[tango];
                    tango = options.bind(golf)(tango);
                    tango = tango.ReactionLocations;
                    tango = tango.MESSAGE;
                    entity['location'] = tango;
                    tango = _closure3_slot0;
                    tango = tango.id;
                    entity['userId'] = tango;
                    tango = {};
                    oscar = _closure3_slot1;
                    report = 19;
                    report = verify[report];
                    report = options.bind(golf)(report);
                    report = report.ReactionTypes;
                    report = report.BURST;
                    report = oscar === report;
                    tango['burst'] = report;
                    entity['options'] = tango;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                report['onPress'] = options;
                options = 48;
                report['height'] = options;
                report = golf.bind(entity)(oscar, report);
                mike['children'] = report;
                entity = tango.bind(entity)(zulu, mike);
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot31 = entity;
    entity = function(argFoo) { // Original name: ReactionTab
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            romeo = entity.reaction;
            yankee = entity.index;
            verify = entity.reactionSelectedIndex;
            entity = _closure1_slot21;
            report = undefined;
            output = entity.bind(report)();
            entity = romeo.burst_count;
            foxtrot = 0;
            sizing = entity > foxtrot;
            mike = _closure1_slot0;
            zulu = _closure1_slot3;
            entity = 36;
            entity = zulu[entity];
            zulu = mike.bind(report)(entity);
            mike = zulu.useEmojiColorPalette;
            entity = romeo.burst_colors;
            golf = null;
            if(!(golf == entity)) { _fun00014_ip = 87; continue _fun00013 }
 83:
            entity = new Array(0);
 87:
            mike = mike.bind(zulu)(entity);
            zulu = golf == mike;
            entity = undefined;
            if(zulu) { _fun00014_ip = 107; continue _fun00013 }
 101:
            entity = mike.accentColor;
 107:
            entity = golf != entity;
            kilo = null;
            if(!entity) { _fun00014_ip = 131; continue _fun00013 }
 116:
            entity = {};
            zulu = mike.accentColor;
            entity['color'] = zulu;
            kilo = entity;
 131:
            entity = golf != mike;
            offset = null;
            if(!entity) { _fun00014_ip = 191; continue _fun00013 }
 140:
            entity = {};
            tango = _closure1_slot0;
            oscar = _closure1_slot3;
            zulu = 37;
            zulu = oscar[zulu];
            oscar = tango.bind(report)(zulu);
            tango = oscar.hexOpacityToRgba;
            zulu = mike.backgroundColor;
            mike = mike.opacity;
            mike = tango.bind(oscar)(zulu, mike);
            entity['backgroundColor'] = mike;
            offset = entity;
 191:
            oscar = romeo.emoji;
            tango = _closure1_slot19;
            zulu = _closure1_slot10;
            mike = {};
            backup = output.tabContainer;
            entity = new Array(3);
            entity[0] = backup;
            result = yankee === verify;
            verify = null;
            if(!result) { _fun00014_ip = 236; continue _fun00013 }
 230:
            verify = output.tabContainerSelected;
 236:
            entity[1] = verify;
            verify = null;
            if(!result) { _fun00014_ip = 253; continue _fun00013 }
 245:
            verify = null;
            if(!sizing) { _fun00014_ip = 253; continue _fun00013 }
 250:
            verify = offset;
 253:
            entity[2] = verify;
            mike['style'] = entity;
            entity = true;
            mike['accessible'] = entity;
            entity = oscar.name;
            mike['accessibilityLabel'] = entity;
            entity = {};
            entity['selected'] = result;
            mike['accessibilityState'] = entity;
            entity = oscar.id;
            if(!(golf != entity)) { _fun00014_ip = 415; continue _fun00013 }
 298:
            offset = _closure1_slot18;
            verify = _closure1_slot8;
            entity = {};
            backup = output.emoji;
            yankee = new Array(2);
            yankee[0] = backup;
            backup = output.emojiImage;
            yankee[1] = backup;
            entity['style'] = yankee;
            yankee = {};
            echo = _closure1_slot1;
            update = _closure1_slot3;
            backup = 27;
            backup = update[backup];
            update = echo.bind(report)(backup);
            echo = update.getEmojiURL;
            backup = {};
            source = oscar.id;
            backup['id'] = source;
            source = oscar.animated;
            backup['animated'] = source;
            source = 48;
            backup['size'] = source;
            backup = echo.bind(update)(backup);
            yankee['uri'] = backup;
            entity['source'] = yankee;
            verify = offset.bind(report)(verify, entity);
            _fun00014_ip = 497; continue _fun00013;
 415:
            yankee = _closure1_slot18;
            offset = _closure1_slot0;
            backup = _closure1_slot3;
            entity = 38;
            entity = backup[entity];
            entity = offset.bind(report)(entity);
            offset = entity.LegacyText;
            entity = {};
            echo = output.emoji;
            backup = new Array(2);
            backup[0] = echo;
            echo = output.emojiText;
            backup[1] = echo;
            entity['style'] = backup;
            backup = false;
            entity['allowFontScaling'] = backup;
            backup = oscar.name;
            entity['children'] = backup;
            verify = yankee.bind(report)(offset, entity);
 497:
            entity = new Array(2);
            entity[0] = verify;
            offset = _closure1_slot18;
            verify = _closure1_slot0;
            yankee = _closure1_slot3;
            options = 12;
            options = yankee[options];
            options = verify.bind(report)(options);
            verify = options.Text;
            options = {};
            yankee = 'text-md/bold';
            options['variant'] = yankee;
            backup = output.reactionCountText;
            yankee = new Array(3);
            yankee[0] = backup;
            backup = null;
            if(!result) { _fun00014_ip = 571; continue _fun00013 }
 565:
            backup = output.reactionCountTextSelected;
 571:
            yankee[1] = backup;
            backup = null;
            if(!sizing) { _fun00014_ip = 583; continue _fun00013 }
 580:
            backup = kilo;
 583:
            yankee[2] = backup;
            options['style'] = yankee;
            yankee = romeo.burst_count;
            if(!(!(yankee > foxtrot))) { _fun00014_ip = 608; continue _fun00013 }
 601:
            yankee = romeo.count;
            _fun00014_ip = 614; continue _fun00013;
 608:
            yankee = romeo.burst_count;
 614:
            options['children'] = yankee;
            options = offset.bind(report)(verify, options);
            entity[1] = options;
            mike['children'] = entity;
            entity = oscar.id;
            if(!(golf == entity)) { _fun00014_ip = 646; continue _fun00013 }
 641:
            entity = oscar.name;
 646:
            entity = tango.bind(report)(zulu, mike, entity);
            return entity;
        }
    };
    var _closure1_slot32 = entity;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, oscar);
    entity = 0;
    oscar = options[entity];
    entity = undefined;
    oscar = kilo.bind(entity)(oscar);
    var _closure1_slot4 = oscar;
    backup = 1;
    oscar = options[backup];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot5 = oscar;
    oscar = 2;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    verify = oscar.ActivityIndicator;
    var _closure1_slot6 = verify;
    verify = oscar.Dimensions;
    var _closure1_slot7 = verify;
    verify = oscar.Image;
    var _closure1_slot8 = verify;
    verify = oscar.Platform;
    verify = oscar.Pressable;
    var _closure1_slot9 = verify;
    oscar = oscar.View;
    var _closure1_slot10 = oscar;
    oscar = 3;
    oscar = options[oscar];
    oscar = kilo.bind(entity)(oscar);
    var _closure1_slot11 = oscar;
    oscar = 4;
    oscar = options[oscar];
    oscar = kilo.bind(entity)(oscar);
    var _closure1_slot12 = oscar;
    oscar = 5;
    oscar = options[oscar];
    oscar = kilo.bind(entity)(oscar);
    var _closure1_slot13 = oscar;
    oscar = 6;
    oscar = options[oscar];
    oscar = kilo.bind(entity)(oscar);
    var _closure1_slot14 = oscar;
    oscar = 7;
    oscar = options[oscar];
    oscar = kilo.bind(entity)(oscar);
    var _closure1_slot15 = oscar;
    foxtrot = 8;
    oscar = options[foxtrot];
    oscar = golf.bind(entity)(oscar);
    verify = oscar.DEFAULT_NUM_REACTION_USERS;
    var _closure1_slot16 = verify;
    oscar = oscar.Permissions;
    var _closure1_slot17 = oscar;
    oscar = 9;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    sizing = oscar.ACTION_SHEET_BACKGROUND_COLOR;
    romeo = 10;
    oscar = options[romeo];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.jsx;
    var _closure1_slot18 = oscar;
    oscar = options[romeo];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.jsxs;
    var _closure1_slot19 = oscar;
    oscar = 11;
    oscar = options[oscar];
    offset = kilo.bind(entity)(oscar);
    verify = offset.createAnimatedComponent;
    oscar = 12;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.Text;
    oscar = verify.bind(offset)(oscar);
    var _closure1_slot20 = oscar;
    oscar = 13;
    oscar = options[oscar];
    offset = golf.bind(entity)(oscar);
    verify = offset.createStyles;
    oscar = {};
    yankee = {};
    yankee['flex'] = backup;
    oscar['container'] = yankee;
    yankee = {};
    backup = 32;
    yankee['padding'] = backup;
    backup = 14;
    output = options[backup];
    output = kilo.bind(entity)(output);
    output = output.radii;
    output = output.sm;
    yankee['borderTopLeftRadius'] = output;
    output = options[backup];
    output = kilo.bind(entity)(output);
    output = output.radii;
    output = output.sm;
    yankee['borderTopRightRadius'] = output;
    oscar['containerEmpty'] = yankee;
    yankee = {};
    output = 48;
    yankee['height'] = output;
    yankee['backgroundColor'] = sizing;
    oscar['listRow'] = yankee;
    yankee = {'flexDirection': 'row', 'alignItems': 'center', 'borderRadius': null, 'padding': 8, 'marginTop': 8};
    sizing = options[backup];
    sizing = kilo.bind(entity)(sizing);
    sizing = sizing.radii;
    sizing = sizing.sm;
    yankee['borderRadius'] = sizing;
    oscar['tabContainer'] = yankee;
    yankee = {};
    sizing = options[backup];
    sizing = kilo.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.BACKGROUND_TERTIARY;
    yankee['backgroundColor'] = sizing;
    oscar['tabContainerSelected'] = yankee;
    yankee = {'padding': 0, 'marginHorizontal': 8, 'marginBottom': 8};
    oscar['tab'] = yankee;
    yankee = {};
    sizing = 'transparent';
    yankee['borderBottomColor'] = sizing;
    oscar['tabSelected'] = yankee;
    yankee = {};
    sizing = options[backup];
    sizing = kilo.bind(entity)(sizing);
    sizing = sizing.radii;
    sizing = sizing.sm;
    yankee['borderRadius'] = sizing;
    oscar['tabActive'] = yankee;
    yankee = {'display': 'flex', 'flexDirection': 'column'};
    oscar['reactionTab'] = yankee;
    yankee = {'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center'};
    oscar['removeButtonContainer'] = yankee;
    yankee = {'backgroundColor': 'red', 'borderRadius': null, 'height': 32, 'overflow': 'hidden', 'minWidth': 42, 'marginRight': 20, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'paddingHorizontal': 12};
    sizing = options[backup];
    sizing = kilo.bind(entity)(sizing);
    sizing = sizing.radii;
    sizing = sizing.xxl;
    yankee['borderRadius'] = sizing;
    oscar['removeAllButton'] = yankee;
    yankee = {};
    sizing = options[backup];
    sizing = kilo.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.INTERACTIVE_NORMAL;
    yankee['color'] = sizing;
    oscar['reactionCountText'] = yankee;
    yankee = {};
    backup = options[backup];
    backup = kilo.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.INTERACTIVE_ACTIVE;
    yankee['color'] = backup;
    oscar['reactionCountTextSelected'] = yankee;
    yankee = {};
    yankee['marginRight'] = foxtrot;
    oscar['emoji'] = yankee;
    yankee = {'lineHeight': 24, 'fontSize': 20, 'textAlign': 'center'};
    oscar['emojiText'] = yankee;
    yankee = {'resizeMode': 'contain', 'width': 24, 'height': 24};
    oscar['emojiImage'] = yankee;
    yankee = {};
    foxtrot = 16;
    yankee['padding'] = foxtrot;
    oscar['emojiTextIdentifier'] = yankee;
    yankee = {};
    yankee['marginRight'] = romeo;
    oscar['avatar'] = yankee;
    yankee = {'flexDirection': 'row', 'justifyContent': 'flex-end', 'alignItems': 'center'};
    oscar['buttonRow'] = yankee;
    yankee = {'height': 48, 'padding': 6};
    oscar['loadingSpinner'] = yankee;
    oscar = verify.bind(offset)(oscar);
    var _closure1_slot21 = oscar;
    oscar = {};
    verify = 'function MessageReactionsContentTsx1(){const{useReducedMotion,buttonWidth,withTiming,buttonColor}=this.__closure;return{maxWidth:useReducedMotion?buttonWidth.get():withTiming(buttonWidth.get(),{duration:200}),backgroundColor:useReducedMotion?buttonColor.get():withTiming(buttonColor.get(),{duration:200})};}';
    oscar['code'] = verify;
    var _closure1_slot22 = oscar;
    oscar = {};
    verify = "function MessageReactionsContentTsx2(){const{useReducedMotion,textOpacity,withTiming}=this.__closure;return{opacity:useReducedMotion?textOpacity.get():withTiming(textOpacity.get(),{duration:125}),color:'white',fontSize:14,marginLeft:8,textAlignVertical:'center'};}";
    oscar['code'] = verify;
    var _closure1_slot23 = oscar;
    oscar = function(argFoo) { // Original name: RemoveAllButton
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            mike = argFoo;
            entity = mike.reactions;
            var _closure2_slot0 = entity;
            romeo = mike.reactionSelectedIndex;
            var _closure2_slot1 = romeo;
            entity = mike.channelId;
            var _closure2_slot2 = entity;
            mike = mike.messageId;
            var _closure2_slot3 = mike;
            mike = _closure1_slot21;
            report = undefined;
            verify = mike.bind(report)();
            output = _closure1_slot0;
            result = _closure1_slot3;
            mike = 15;
            mike = result[mike];
            oscar = output.bind(report)(mike);
            tango = oscar.useStateFromStores;
            mike = _closure1_slot12;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                zulu = _closure1_slot12;
                mike = zulu.getChannel;
                entity = _closure2_slot2;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = tango.bind(oscar)(zulu, entity, mike);
            zulu = _closure1_slot1;
            entity = 39;
            entity = result[entity];
            entity = zulu.bind(report)(entity);
            mike = entity.bind(report)(mike);
            entity = _closure1_slot11;
            echo = entity.useReducedMotion;
            var _closure2_slot4 = echo;
            tango = _closure1_slot5;
            zulu = tango.useState;
            entity = true;
            tango = zulu.bind(tango)(entity);
            zulu = _closure1_slot4;
            entity = 2;
            zulu = zulu.bind(report)(tango, entity);
            tango = 0;
            entity = zulu[tango];
            var _closure2_slot5 = entity;
            entity = 1;
            entity = zulu[entity];
            var _closure2_slot6 = entity;
            oscar = 11;
            entity = result[oscar];
            options = output.bind(report)(entity);
            zulu = options.useSharedValue;
            entity = 64;
            kilo = zulu.bind(options)(entity);
            var _closure2_slot7 = kilo;
            entity = result[oscar];
            options = output.bind(report)(entity);
            zulu = options.useSharedValue;
            entity = 40;
            entity = result[entity];
            entity = output.bind(report)(entity);
            entity = entity.ButtonColors;
            entity = entity.GREY;
            backup = zulu.bind(options)(entity);
            var _closure2_slot8 = backup;
            entity = result[oscar];
            options = output.bind(report)(entity);
            zulu = options.useAnimatedStyle;
            entity = function() { // Original name: b
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    entity = {};
                    mike = _closure2_slot4;
                    if(mike) { _fun00018_ip = 72; continue _fun00017 }
 12:
                    report = _closure1_slot0;
                    tango = _closure1_slot3;
                    mike = 41;
                    tango = tango[mike];
                    mike = undefined;
                    oscar = report.bind(mike)(tango);
                    report = oscar.withTiming;
                    tango = _closure2_slot7;
                    mike = tango.get;
                    tango = mike.bind(tango)();
                    mike = {};
                    golf = 200;
                    mike['duration'] = golf;
                    mike = report.bind(oscar)(tango, mike);
                    _fun00018_ip = 85; continue _fun00017;
 72:
                    report = _closure2_slot7;
                    tango = report.get;
                    mike = tango.bind(report)();
 85:
                    entity['maxWidth'] = mike;
                    mike = _closure2_slot4;
                    if(mike) { _fun00018_ip = 157; continue _fun00017 }
 97:
                    report = _closure1_slot0;
                    tango = _closure1_slot3;
                    mike = 41;
                    tango = tango[mike];
                    mike = undefined;
                    oscar = report.bind(mike)(tango);
                    report = oscar.withTiming;
                    tango = _closure2_slot8;
                    mike = tango.get;
                    tango = mike.bind(tango)();
                    mike = {};
                    golf = 200;
                    mike['duration'] = golf;
                    mike = report.bind(oscar)(tango, mike);
                    _fun00018_ip = 170; continue _fun00017;
 157:
                    tango = _closure2_slot8;
                    zulu = tango.get;
                    mike = zulu.bind(tango)();
 170:
                    entity['backgroundColor'] = mike;
                    return entity;
                }
            };
            yankee = {};
            yankee['useReducedMotion'] = echo;
            yankee['buttonWidth'] = kilo;
            sizing = 41;
            foxtrot = result[sizing];
            foxtrot = output.bind(report)(foxtrot);
            foxtrot = foxtrot.withTiming;
            yankee['withTiming'] = foxtrot;
            yankee['buttonColor'] = backup;
            entity['__closure'] = yankee;
            yankee = 6585999467118.0;
            entity['__workletHash'] = yankee;
            yankee = _closure1_slot22;
            entity['__initData'] = yankee;
            yankee = zulu.bind(options)(entity);
            entity = result[oscar];
            zulu = output.bind(report)(entity);
            entity = zulu.useSharedValue;
            entity = entity.bind(zulu)(tango);
            var _closure2_slot9 = entity;
            zulu = result[oscar];
            options = output.bind(report)(zulu);
            tango = options.useAnimatedStyle;
            zulu = function() { // Original name: T
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    entity = {'opacity': null, 'color': 'white', 'fontSize': 14, 'marginLeft': 8, 'textAlignVertical': 'center'};
                    mike = _closure2_slot4;
                    if(mike) { _fun00020_ip = 80; continue _fun00019 }
 20:
                    report = _closure1_slot0;
                    tango = _closure1_slot3;
                    mike = 41;
                    tango = tango[mike];
                    mike = undefined;
                    oscar = report.bind(mike)(tango);
                    report = oscar.withTiming;
                    tango = _closure2_slot9;
                    mike = tango.get;
                    tango = mike.bind(tango)();
                    mike = {};
                    golf = 125;
                    mike['duration'] = golf;
                    mike = report.bind(oscar)(tango, mike);
                    _fun00020_ip = 93; continue _fun00019;
 80:
                    tango = _closure2_slot9;
                    zulu = tango.get;
                    mike = zulu.bind(tango)();
 93:
                    entity['opacity'] = mike;
                    return entity;
                }
            };
            foxtrot = {};
            foxtrot['useReducedMotion'] = echo;
            foxtrot['textOpacity'] = entity;
            sizing = result[sizing];
            sizing = output.bind(report)(sizing);
            sizing = sizing.withTiming;
            foxtrot['withTiming'] = sizing;
            zulu['__closure'] = foxtrot;
            foxtrot = 8698187840986.0;
            zulu['__workletHash'] = foxtrot;
            foxtrot = _closure1_slot23;
            zulu['__initData'] = foxtrot;
            foxtrot = tango.bind(options)(zulu);
            options = _closure1_slot5;
            tango = options.useCallback;
            zulu = new Array(3);
            zulu[0] = kilo;
            zulu[1] = backup;
            zulu[2] = entity;
            entity = function() {
                tango = _closure2_slot6;
                entity = undefined;
                zulu = true;
                zulu = tango.bind(entity)(zulu);
                report = _closure2_slot7;
                tango = report.set;
                zulu = 32;
                zulu = tango.bind(report)(zulu);
                report = _closure2_slot8;
                tango = report.set;
                oscar = _closure1_slot0;
                golf = _closure1_slot3;
                zulu = 40;
                zulu = golf[zulu];
                zulu = oscar.bind(entity)(zulu);
                zulu = zulu.ButtonColors;
                zulu = zulu.GREY;
                zulu = tango.bind(report)(zulu);
                tango = _closure2_slot9;
                zulu = tango.set;
                mike = 0;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity = tango.bind(options)(entity, zulu);
            var _closure2_slot10 = entity;
            options = _closure1_slot5;
            tango = options.useEffect;
            zulu = new Array(2);
            zulu[0] = romeo;
            zulu[1] = entity;
            entity = function() {
                mike = _closure2_slot10;
                entity = undefined;
                mike = mike.bind(entity)();
                return entity;
            };
            entity = tango.bind(options)(entity, zulu);
            entity = null;
            if(!mike) { _fun00016_ip = 828; continue _fun00015 }
 571:
            tango = _closure1_slot18;
            zulu = _closure1_slot9;
            mike = {};
            golf = function() { // Original name: onPress
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    mike = _closure2_slot5;
                    if(mike) { _fun00022_ip = 84; continue _fun00021 }
 10:
                    tango = _closure1_slot2;
                    zulu = _closure1_slot3;
                    mike = 20;
                    mike = zulu[mike];
                    zulu = undefined;
                    golf = tango.bind(zulu)(mike);
                    oscar = golf.removeEmojiReactions;
                    report = _closure2_slot2;
                    tango = _closure2_slot3;
                    options = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = options[mike];
                    mike = mike.emoji;
                    mike = oscar.bind(golf)(report, tango, mike);
                    mike = _closure2_slot10;
                    mike = mike.bind(zulu)();
                    _fun00022_ip = 200; continue _fun00021;
 84:
                    zulu = _closure2_slot6;
                    oscar = undefined;
                    mike = false;
                    mike = zulu.bind(oscar)(mike);
                    report = _closure2_slot7;
                    tango = report.set;
                    options = _closure1_slot7;
                    golf = options.get;
                    zulu = 'window';
                    zulu = golf.bind(options)(zulu);
                    zulu = zulu.width;
                    zulu = tango.bind(report)(zulu);
                    tango = _closure2_slot8;
                    zulu = tango.set;
                    report = _closure1_slot0;
                    golf = _closure1_slot3;
                    mike = 40;
                    mike = golf[mike];
                    mike = report.bind(oscar)(mike);
                    mike = mike.ButtonColors;
                    mike = mike.RED;
                    mike = zulu.bind(tango)(mike);
                    zulu = _closure2_slot9;
                    mike = zulu.set;
                    entity = 1;
                    entity = mike.bind(zulu)(entity);
 200:
                    entity = undefined;
                    return entity;
                }
            };
            mike['onPress'] = golf;
            options = _closure1_slot19;
            kilo = _closure1_slot1;
            output = _closure1_slot3;
            oscar = output[oscar];
            oscar = kilo.bind(report)(oscar);
            golf = oscar.View;
            oscar = {};
            romeo = verify.removeAllButton;
            verify = new Array(2);
            verify[0] = romeo;
            verify[1] = yankee;
            oscar['style'] = verify;
            romeo = _closure1_slot18;
            sizing = _closure1_slot0;
            verify = 42;
            verify = output[verify];
            verify = sizing.bind(report)(verify);
            yankee = verify.TrashIcon;
            verify = {};
            backup = 14;
            backup = output[backup];
            backup = kilo.bind(report)(backup);
            backup = backup.unsafe_rawColors;
            backup = backup.WHITE_500;
            verify['color'] = backup;
            backup = 'sm';
            verify['size'] = backup;
            yankee = romeo.bind(report)(yankee, verify);
            verify = new Array(2);
            verify[0] = yankee;
            romeo = _closure1_slot18;
            yankee = _closure1_slot20;
            offset = {'style': null, 'variant': 'text-sm/semibold', 'color': 'white'};
            offset['style'] = foxtrot;
            foxtrot = 35;
            backup = output[foxtrot];
            backup = sizing.bind(report)(backup);
            kilo = backup.intl;
            backup = kilo.string;
            foxtrot = output[foxtrot];
            foxtrot = sizing.bind(report)(foxtrot);
            foxtrot = foxtrot.t;
            foxtrot = foxtrot.zx/e4O;
            foxtrot = backup.bind(kilo)(foxtrot);
            offset['children'] = foxtrot;
            offset = romeo.bind(report)(yankee, offset);
            verify[1] = offset;
            oscar['children'] = verify;
            oscar = options.bind(report)(golf, oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 828:
            return entity;
        }
    };
    var _closure1_slot24 = oscar;
    oscar = function(argFoo) { // Original name: ReactionTabs
        foxtrot = argFoo;
        entity = _closure1_slot21;
        tango = undefined;
        echo = entity.bind(tango)();
        output = foxtrot.reactions;
        backup = foxtrot.reactionSelectedIndex;
        var _closure2_slot0 = backup;
        entity = foxtrot.setReactionSelectedIndex;
        var _closure2_slot1 = entity;
        zulu = _closure1_slot19;
        mike = _closure1_slot10;
        entity = {};
        report = echo.reactionTab;
        entity['style'] = report;
        options = _closure1_slot18;
        golf = _closure1_slot1;
        result = _closure1_slot3;
        report = 43;
        report = result[report];
        oscar = golf.bind(tango)(report);
        report = {};
        romeo = output.map;
        yankee = function(argFoo, argBar) {
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                entity = argFoo;
                report = _closure1_slot18;
                tango = _closure1_slot32;
                zulu = {};
                zulu['reaction'] = entity;
                mike = argBar;
                zulu['index'] = mike;
                mike = _closure2_slot0;
                zulu['reactionSelectedIndex'] = mike;
                mike = entity.emoji;
                mike = mike.id;
                oscar = null;
                oscar = oscar != mike;
                options = '';
                golf = options;
                if(!oscar) { _fun00024_ip = 70; continue _fun00023 }
 67:
                golf = mike;
 70:
                entity = entity.emoji;
                oscar = entity.name;
                entity = global;
                entity = entity.HermesInternal;
                mike = entity.concat;
                entity = ':';
                mike = mike.bind(options)(golf, entity, oscar);
                entity = undefined;
                entity = report.bind(entity)(tango, zulu, mike);
                return entity;
            }
        };
        yankee = romeo.bind(output)(yankee);
        report['tabs'] = yankee;
        yankee = echo.tab;
        report['tabStyle'] = yankee;
        yankee = echo.tabActive;
        report['tabStyleActive'] = yankee;
        yankee = echo.tabSelected;
        report['tabStyleSelected'] = yankee;
        report['tabIndexSelected'] = backup;
        verify = function(argFoo) { // Original name: onSelect
            tango = _closure1_slot0;
            oscar = _closure1_slot3;
            entity = 44;
            zulu = oscar[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.triggerHapticFeedback;
            report = _closure1_slot1;
            mike = 45;
            mike = oscar[mike];
            mike = report.bind(entity)(mike);
            mike = mike.IMPACT_LIGHT;
            mike = zulu.bind(tango)(mike);
            zulu = _closure2_slot1;
            mike = argFoo;
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        report['onSelect'] = verify;
        sizing = _closure1_slot0;
        kilo = 16;
        verify = result[kilo];
        verify = sizing.bind(tango)(verify);
        verify = verify.MAX_REACTIONS;
        report['initialNumTabsToRender'] = verify;
        oscar = options.bind(tango)(oscar, report);
        report = new Array(3);
        report[0] = oscar;
        options = _closure1_slot18;
        oscar = 33;
        oscar = result[oscar];
        golf = golf.bind(tango)(oscar);
        oscar = {};
        verify = true;
        oscar['outer'] = verify;
        oscar = options.bind(tango)(golf, oscar);
        report[1] = oscar;
        options = _closure1_slot19;
        golf = _closure1_slot10;
        oscar = {};
        verify = echo.removeButtonContainer;
        oscar['style'] = verify;
        romeo = _closure1_slot18;
        verify = 12;
        verify = result[verify];
        verify = sizing.bind(tango)(verify);
        yankee = verify.Text;
        verify = {'style': null, 'variant': 'eyebrow', 'color': 'header-secondary'};
        echo = echo.emojiTextIdentifier;
        verify['style'] = echo;
        kilo = result[kilo];
        sizing = sizing.bind(tango)(kilo);
        kilo = sizing.getReactionEmojiName;
        backup = output[backup];
        backup = backup.emoji;
        backup = kilo.bind(sizing)(backup);
        verify['children'] = backup;
        yankee = romeo.bind(tango)(yankee, verify);
        verify = new Array(2);
        verify[0] = yankee;
        romeo = _closure1_slot18;
        yankee = _closure1_slot24;
        offset = {};
        source = offset;
        update = foxtrot;
        foxtrot = copyDataProperties(source, update);
        offset = romeo.bind(tango)(yankee, offset);
        verify[1] = offset;
        oscar['children'] = verify;
        oscar = options.bind(tango)(golf, oscar);
        report[2] = oscar;
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot25 = oscar;
    oscar = 51;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    yankee = oscar.Storage;
    offset = yankee.get;
    verify = 'MessageReactionsContent_SwipableBounced';
    oscar = false;
    oscar = offset.bind(yankee)(verify, oscar);
    var _closure1_slot26 = oscar;
    oscar = 57;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/reactions/native/MessageReactionsContent.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['useReactors'] = report;
    zulu['useReactorsOnScrollNative'] = tango;
    tango = function() {
        entity = _closure1_slot21;
        tango = undefined;
        offset = entity.bind(tango)();
        verify = _closure1_slot1;
        kilo = _closure1_slot3;
        entity = 46;
        entity = kilo[entity];
        entity = verify.bind(tango)(entity);
        report = entity.bind(tango)();
        backup = _closure1_slot0;
        entity = 47;
        entity = kilo[entity];
        mike = backup.bind(tango)(entity);
        entity = mike.useNoResultsSource;
        yankee = entity.bind(mike)();
        zulu = _closure1_slot18;
        entity = 48;
        entity = kilo[entity];
        entity = backup.bind(tango)(entity);
        mike = entity.BottomSheet;
        entity = {};
        oscar = true;
        entity['scrollable'] = oscar;
        oscar = report.bottom;
        report = 338;
        report = report + oscar;
        entity['startHeight'] = report;
        golf = _closure1_slot18;
        report = 49;
        report = kilo[report];
        report = backup.bind(tango)(report);
        oscar = report.BottomSheetView;
        report = {};
        offset = offset.containerEmpty;
        report['style'] = offset;
        offset = _closure1_slot18;
        options = 50;
        options = kilo[options];
        verify = verify.bind(tango)(options);
        options = {};
        options['source'] = yankee;
        yankee = 35;
        romeo = kilo[yankee];
        romeo = backup.bind(tango)(romeo);
        sizing = romeo.intl;
        foxtrot = sizing.string;
        romeo = kilo[yankee];
        romeo = backup.bind(tango)(romeo);
        romeo = romeo.t;
        romeo = romeo.HmPOrq;
        romeo = foxtrot.bind(sizing)(romeo);
        options['title'] = romeo;
        romeo = kilo[yankee];
        romeo = backup.bind(tango)(romeo);
        foxtrot = romeo.intl;
        romeo = foxtrot.string;
        yankee = kilo[yankee];
        yankee = backup.bind(tango)(yankee);
        yankee = yankee.t;
        yankee = yankee.pTJ5Jy;
        yankee = romeo.bind(foxtrot)(yankee);
        options['body'] = yankee;
        options = offset.bind(tango)(verify, options);
        report['children'] = options;
        report = golf.bind(tango)(oscar, report);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['MessageReactionsEmpty'] = tango;
    mike = function(argFoo) {
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            mike = argFoo;
            backup = mike.channelId;
            var _closure2_slot0 = backup;
            kilo = mike.messageId;
            oscar = mike.emoji;
            result = mike.reactions;
            entity = mike.isSelectedBurst;
            verify = mike.disableManage;
            tango = undefined;
            if(!(verify === tango)) { _fun00026_ip = 53; continue _fun00025 }
 51:
            verify = false;
 53:
            golf = mike.disableTabs;
            if(!(golf === tango)) { _fun00026_ip = 67; continue _fun00025 }
 65:
            golf = false;
 67:
            mike = _closure1_slot21;
            report = mike.bind(tango)();
            mike = {};
            mike['reactions'] = result;
            mike['emoji'] = oscar;
            mike['isSelectedBurst'] = entity;
            entity = function(argFoo) { // Original name: useReactionSelected
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    entity = argFoo;
                    tango = entity.reactions;
                    var _closure3_slot0 = tango;
                    zulu = entity.emoji;
                    var _closure3_slot1 = zulu;
                    entity = entity.isSelectedBurst;
                    report = undefined;
                    if(!(entity === report)) { _fun00028_ip = 39; continue _fun00027 }
 37:
                    entity = false;
 39:
                    var _closure3_slot2 = entity;
                    oscar = _closure1_slot5;
                    zulu = oscar.useState;
                    mike = function() {
                        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                            zulu = _closure3_slot1;
                            mike = null;
                            if(!(mike != zulu)) { _fun00030_ip = 51; continue _fun00029 }
 13:
                            zulu = _closure3_slot0;
                            mike = zulu.findIndex;
                            entity = function(argFoo) {
                                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                                    mike = argFoo;
                                    tango = _closure1_slot0;
                                    zulu = _closure1_slot3;
                                    entity = 16;
                                    zulu = zulu[entity];
                                    entity = undefined;
                                    oscar = tango.bind(entity)(zulu);
                                    report = oscar.emojiEquals;
                                    tango = mike.emoji;
                                    zulu = _closure3_slot1;
                                    zulu = report.bind(oscar)(tango, zulu);
                                    report = mike.burst_count;
                                    mike = null;
                                    oscar = mike != report;
                                    tango = 0;
                                    mike = 0;
                                    if(!oscar) { _fun00032_ip = 75; continue _fun00031 }
 72:
                                    mike = report;
 75:
                                    mike = mike > tango;
                                    entity = _closure3_slot2;
                                    if(entity) { _fun00032_ip = 97; continue _fun00031 }
 86:
                                    entity = !mike;
                                    if(mike) { _fun00032_ip = 95; continue _fun00031 }
 92:
                                    entity = zulu;
 95:
                                    _fun00032_ip = 106; continue _fun00031;
 97:
                                    if(!mike) { _fun00032_ip = 103; continue _fun00031 }
 100:
                                    mike = zulu;
 103:
                                    entity = mike;
 106:
                                    return entity;
                                }
                            };
                            mike = mike.bind(zulu)(entity);
                            entity = 0;
                            zulu = mike >= entity;
                            if(!zulu) { _fun00030_ip = 49; continue _fun00029 }
 46:
                            entity = mike;
 49:
                            return entity;
 51:
                            entity = 0;
                            return entity;
                        }
                    };
                    zulu = zulu.bind(oscar)(mike);
                    mike = _closure1_slot4;
                    entity = 2;
                    entity = mike.bind(report)(zulu, entity);
                    mike = 0;
                    oscar = entity[mike];
                    golf = 1;
                    mike = entity[golf];
                    entity = global;
                    report = entity.Math;
                    zulu = report.min;
                    entity = tango.length;
                    entity = entity - golf;
                    zulu = zulu.bind(report)(oscar, entity);
                    entity = {};
                    tango = tango[zulu];
                    entity['reactionSelected'] = tango;
                    entity['reactionSelectedIndex'] = zulu;
                    entity['setReactionSelectedIndex'] = mike;
                    return entity;
                }
            };
            entity = entity.bind(tango)(mike);
            control = entity.reactionSelected;
            output = entity.reactionSelectedIndex;
            sizing = entity.setReactionSelectedIndex;
            entity = control.me_vote;
            oscar = null;
            if(!(oscar == entity)) { _fun00026_ip = 217; continue _fun00025 }
 137:
            mike = control.burst_count;
            entity = 0;
            if(!(!(mike > entity))) { _fun00026_ip = 183; continue _fun00025 }
 149:
            mike = _closure1_slot0;
            options = _closure1_slot3;
            entity = 19;
            entity = options[entity];
            entity = mike.bind(tango)(entity);
            entity = entity.ReactionTypes;
            source = entity.NORMAL;
            _fun00026_ip = 215; continue _fun00025;
 183:
            mike = _closure1_slot0;
            options = _closure1_slot3;
            entity = 19;
            entity = options[entity];
            entity = mike.bind(tango)(entity);
            entity = entity.ReactionTypes;
            source = entity.BURST;
 215:
            _fun00026_ip = 249; continue _fun00025;
 217:
            mike = _closure1_slot0;
            options = _closure1_slot3;
            entity = 19;
            entity = options[entity];
            entity = mike.bind(tango)(entity);
            entity = entity.ReactionTypes;
            source = entity.VOTE;
 249:
            mike = _closure1_slot27;
            entity = {};
            entity['channelId'] = backup;
            entity['messageId'] = kilo;
            entity['reaction'] = control;
            entity['reactionType'] = source;
            entity = mike.bind(tango)(entity);
            options = entity.reactors;
            romeo = entity.reactorsHasMore;
            mike = _closure1_slot0;
            foxtrot = _closure1_slot3;
            entity = 15;
            entity = foxtrot[entity];
            vacuum = mike.bind(tango)(entity);
            update = vacuum.useStateFromStores;
            entity = _closure1_slot12;
            echo = new Array(1);
            echo[0] = entity;
            offset = new Array(1);
            offset[0] = backup;
            entity = function() {
                zulu = _closure1_slot12;
                mike = zulu.getChannel;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            offset = update.bind(vacuum)(echo, entity, offset);
            entity = 52;
            entity = foxtrot[entity];
            mike = mike.bind(tango)(entity);
            entity = mike.useIsActiveChannelOrUnarchivableThread;
            entity = entity.bind(mike)(offset);
            offset = _closure1_slot1;
            mike = 46;
            mike = foxtrot[mike];
            mike = offset.bind(tango)(mike);
            offset = mike.bind(tango)();
            mike = function(argFoo) { // Original name: useCanManageMessages
                oscar = argFoo;
                var _closure3_slot0 = oscar;
                report = _closure1_slot0;
                tango = _closure1_slot3;
                zulu = 15;
                tango = tango[zulu];
                zulu = undefined;
                report = report.bind(zulu)(tango);
                tango = report.useStateFromStores;
                mike = _closure1_slot15;
                zulu = new Array(1);
                zulu[0] = mike;
                mike = new Array(1);
                mike[0] = oscar;
                entity = function() {
                    tango = _closure1_slot15;
                    zulu = tango.canWithPartialContext;
                    entity = _closure1_slot17;
                    mike = entity.MANAGE_MESSAGES;
                    entity = {};
                    report = _closure3_slot0;
                    entity['channelId'] = report;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                entity = tango.bind(report)(zulu, entity, mike);
                return entity;
            };
            mike = mike.bind(tango)(backup);
            if(!mike) { _fun00026_ip = 410; continue _fun00025 }
 407:
            mike = !verify;
 410:
            if(!mike) { _fun00026_ip = 416; continue _fun00025 }
 413:
            mike = entity;
 416:
            verify = {};
            update = _closure1_slot0;
            vacuum = _closure1_slot3;
            entity = 35;
            foxtrot = vacuum[entity];
            foxtrot = update.bind(tango)(foxtrot);
            echo = foxtrot.intl;
            foxtrot = echo.string;
            entity = vacuum[entity];
            entity = update.bind(tango)(entity);
            entity = entity.t;
            entity = entity.gHp0Cw;
            entity = foxtrot.bind(echo)(entity);
            verify['accessibilityLabel'] = entity;
            entity = 48;
            verify['footerSize'] = entity;
            offset = offset.bottom;
            verify['insetBottom'] = offset;
            offset = control.emoji;
            offset = offset.id;
            if(!(oscar == offset)) { _fun00026_ip = 521; continue _fun00025 }
 510:
            foxtrot = control.emoji;
            offset = foxtrot.name;
 521:
            verify['key'] = offset;
            foxtrot = _closure1_slot28;
            offset = {};
            offset['channelId'] = backup;
            offset['messageId'] = kilo;
            offset['reactionSelected'] = control;
            offset['reactors'] = options;
            offset['reactorsHasMore'] = romeo;
            offset['reactionType'] = source;
            offset = foxtrot.bind(tango)(offset);
            verify['onScroll'] = offset;
            offset = _closure1_slot29;
            offset = offset.bind(tango)(options, romeo);
            verify['renderFooter'] = offset;
            offset = _closure1_slot30;
            target = undefined;
            papa = options;
            context = kilo;
            record = backup;
            config = control;
            sequence = mike;
            offset = target[offset](papa, context, record, config, sequence, vacuum);
            verify['renderItem'] = offset;
            offset = _closure1_slot31;
            papa = backup;
            context = kilo;
            record = control;
            config = options;
            offset = target[offset](papa, context, record, config, sequence);
            verify['renderQuickActions'] = offset;
            verify['itemSize'] = entity;
            offset = options.length;
            options = new Array(1);
            options[0] = offset;
            verify['sections'] = options;
            report = report.container;
            verify['style'] = report;
            offset = _closure1_slot5;
            options = offset.useCallback;
            report = function() {
                report = true;
                _closure1_slot26 = report;
                zulu = _closure1_slot0;
                mike = _closure1_slot3;
                entity = 51;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                tango = mike.Storage;
                zulu = tango.set;
                mike = 'MessageReactionsContent_SwipableBounced';
                mike = zulu.bind(tango)(mike, report);
                return entity;
            };
            zulu = new Array(0);
            offset = options.bind(offset)(report, zulu);
            report = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 29;
            zulu = options[zulu];
            report = report.bind(tango)(zulu);
            zulu = report.isIOS;
            report = zulu.bind(report)();
            if(!report) { _fun00026_ip = 733; continue _fun00025 }
 730:
            report = mike;
 733:
            zulu = _closure1_slot18;
            foxtrot = _closure1_slot0;
            echo = _closure1_slot3;
            entity = echo[entity];
            entity = foxtrot.bind(tango)(entity);
            mike = entity.BottomSheet;
            entity = {};
            romeo = true;
            entity['scrollable'] = romeo;
            options = 53;
            options = echo[options];
            options = foxtrot.bind(tango)(options);
            options = options.BACKDROP_OPACITY;
            entity['backdropOpacity'] = options;
            options = 19;
            options = echo[options];
            options = foxtrot.bind(tango)(options);
            options = options.ReactionTypes;
            foxtrot = options.BURST;
            options = null;
            if(!(source === foxtrot)) { _fun00026_ip = 878; continue _fun00025 }
 822:
            update = _closure1_slot18;
            echo = _closure1_slot1;
            vacuum = _closure1_slot3;
            foxtrot = 54;
            foxtrot = vacuum[foxtrot];
            echo = echo.bind(tango)(foxtrot);
            foxtrot = {};
            control = control.emoji;
            foxtrot['emoji'] = control;
            foxtrot['reactionType'] = source;
            foxtrot['messageId'] = kilo;
            foxtrot['channelId'] = backup;
            options = update.bind(tango)(echo, foxtrot);
 878:
            entity['backdropChildren'] = options;
            oscar = null;
            if(!(romeo !== golf)) { _fun00026_ip = 928; continue _fun00025 }
 889:
            foxtrot = _closure1_slot18;
            options = _closure1_slot25;
            golf = {};
            golf['reactions'] = result;
            golf['reactionSelectedIndex'] = output;
            golf['setReactionSelectedIndex'] = sizing;
            golf['messageId'] = kilo;
            golf['channelId'] = backup;
            oscar = foxtrot.bind(tango)(options, golf);
 928:
            entity['header'] = oscar;
            options = _closure1_slot18;
            golf = _closure1_slot1;
            foxtrot = _closure1_slot3;
            if(report) { _fun00026_ip = 984; continue _fun00025 }
 947:
            report = 56;
            report = foxtrot[report];
            oscar = golf.bind(tango)(report);
            report = {};
            report['inActionSheet'] = romeo;
            papa = report;
            context = verify;
            backup = copyDataProperties(papa, context);
            report = options.bind(tango)(oscar, report);
            _fun00026_ip = 1036; continue _fun00025;
 984:
            oscar = 55;
            oscar = foxtrot[oscar];
            golf = golf.bind(tango)(oscar);
            oscar = {};
            oscar['inActionSheet'] = romeo;
            yankee = _closure1_slot26;
            yankee = !yankee;
            oscar['bounceFirstRowOnMount'] = yankee;
            oscar['onBounceSwipable'] = offset;
            papa = oscar;
            context = verify;
            verify = copyDataProperties(papa, context);
            report = options.bind(tango)(golf, oscar);
 1036:
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['MessageReactionsContent'] = mike;
    return entity;
})();