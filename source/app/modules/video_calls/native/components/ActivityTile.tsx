// app/modules/video_calls/native/components/ActivityTile.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: ActivityTileInner
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            yankee = entity.participant;
            var _closure2_slot0 = yankee;
            update = entity.style;
            offset = entity.channel;
            var _closure2_slot1 = offset;
            golf = entity.onSingleTap;
            var _closure2_slot2 = golf;
            report = undefined;
            var _closure2_slot3 = report;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            var _closure2_slot6 = report;
            var _closure2_slot7 = report;
            entity = function() { // Original name: handleCanJoin
                entity = undefined;
                tango = _closure2_slot9;
                zulu = tango.apply;
                entity = arguments;
                mike = entity;
                entity = this;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            var _closure2_slot8 = entity;
            entity = function() { // Original name: _handleCanJoin
                tango = undefined;
                entity = undefined;
                zulu = _closure1_slot3;
                mike = function* () {
                    entity = function* () { // Original name: ?anon_0_
                        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(mike) { _fun00004_ip = 175; continue _fun00003 }
 10:
                            mike = _closure2_slot4;
                            report = null;
                            mike = report != mike;
                            if(!mike) { _fun00004_ip = 34; continue _fun00003 }
 26:
                            tango = _closure2_slot3;
                            mike = report != tango;
 34:
                            if(!mike) { _fun00004_ip = 167; continue _fun00003 }
 40:
                            report = _closure1_slot1;
                            oscar = _closure1_slot2;
                            mike = 25;
                            mike = oscar[mike];
                            oscar = undefined;
                            report = report.bind(oscar)(mike);
                            mike = {};
                            golf = _closure2_slot4;
                            golf = golf.applicationId;
                            mike['applicationId'] = golf;
                            golf = _closure2_slot1;
                            golf = golf.id;
                            mike['activityChannelId'] = golf;
                            golf = _closure2_slot6;
                            golf = golf.location;
                            mike['locationObject'] = golf;
                            golf = _closure2_slot5;
                            mike['analyticsLocations'] = golf;
                            mike = report.bind(oscar)(mike);
                            SaveGenerator(address=126);
 124:
                            return mike;
 126:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(report) { _fun00004_ip = 172; continue _fun00003 }
 132:
                            report = _closure1_slot0;
                            golf = _closure1_slot2;
                            tango = 26;
                            tango = golf[tango];
                            report = report.bind(oscar)(tango);
                            tango = report.setOrientationLockState;
                            zulu = _closure2_slot3;
                            zulu = tango.bind(report)(zulu);
 167:
                            zulu = undefined;
                            return zulu;
 172:
                            return mike;
 175:
                            return entity;
                        }
                    };
                    return entity;
                };
                tango = zulu.bind(tango)(mike);
                _closure2_slot9 = tango;
                zulu = tango.apply;
                entity = arguments;
                mike = entity;
                entity = this;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            var _closure2_slot9 = entity;
            vacuum = function() { // Original name: handleTileOrButtonPress
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 27;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = {};
                    report = _closure2_slot7;
                    zulu['embeddedActivityJoinability'] = report;
                    report = _closure2_slot8;
                    zulu['handleCanJoin'] = report;
                    zulu = tango.bind(entity)(zulu);
                    tango = _closure2_slot2;
                    zulu = null;
                    if(!(zulu != tango)) { _fun00006_ip = 71; continue _fun00005 }
 63:
                    mike = _closure2_slot2;
                    mike = mike.bind(entity)();
 71:
                    return entity;
                }
            };
            entity = _closure1_slot16;
            options = entity.bind(report)();
            mike = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 16;
            entity = zulu[entity];
            tango = mike.bind(report)(entity);
            oscar = yankee.applicationId;
            entity = new Array(1);
            entity[0] = oscar;
            tango = tango.bind(report)(entity);
            entity = _closure1_slot4;
            oscar = 1;
            entity = entity.bind(report)(tango, oscar);
            tango = 0;
            foxtrot = entity[tango];
            _closure2_slot3 = foxtrot;
            entity = function(argFoo) { // Original name: useUsersForActivityParticipant
                mike = argFoo;
                var _closure3_slot0 = mike;
                report = _closure1_slot0;
                tango = _closure1_slot2;
                zulu = 14;
                tango = tango[zulu];
                zulu = undefined;
                tango = report.bind(zulu)(tango);
                zulu = tango.useStateFromStoresArray;
                report = _closure1_slot7;
                mike = new Array(1);
                mike[0] = report;
                entity = function() {
                    entity = _closure3_slot0;
                    zulu = entity.participants;
                    entity = global;
                    mike = entity.Array;
                    entity = mike.from;
                    zulu = entity.bind(mike)(zulu);
                    mike = zulu.map;
                    entity = function(argFoo) {
                        zulu = _closure1_slot7;
                        mike = zulu.getUser;
                        entity = argFoo;
                        entity = entity.userId;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    zulu = mike.bind(zulu)(entity);
                    mike = zulu.filter;
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    entity = 15;
                    tango = tango[entity];
                    entity = undefined;
                    entity = report.bind(entity)(tango);
                    entity = entity.isNotNullish;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            record = entity.bind(report)(yankee);
            entity = 17;
            entity = zulu[entity];
            romeo = mike.bind(report)(entity);
            yankee = romeo.getName;
            entity = offset.getGuildId;
            zulu = entity.bind(offset)();
            mike = offset.id;
            kilo = null;
            backup = kilo == record;
            entity = undefined;
            if(backup) { _fun00002_ip = 222; continue _fun00001 }
 218:
            entity = record[tango];
 222:
            romeo = yankee.bind(romeo)(zulu, mike, entity);
            if(!(kilo == romeo)) { _fun00002_ip = 277; continue _fun00001 }
 233:
            mike = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 18;
            entity = zulu[entity];
            zulu = mike.bind(report)(entity);
            mike = zulu.getName;
            yankee = kilo == record;
            entity = undefined;
            if(yankee) { _fun00002_ip = 272; continue _fun00001 }
 268:
            entity = record[tango];
 272:
            romeo = mike.bind(zulu)(entity);
 277:
            sizing = _closure1_slot1;
            yankee = _closure1_slot2;
            entity = 19;
            entity = yankee[entity];
            entity = sizing.bind(report)(entity);
            mike = entity.bind(report)();
            zulu = _closure1_slot0;
            entity = 14;
            entity = yankee[entity];
            output = zulu.bind(report)(entity);
            backup = output.useStateFromStores;
            entity = _closure1_slot6;
            tango = new Array(1);
            tango[0] = entity;
            entity = function() {
                zulu = _closure1_slot6;
                mike = zulu.getEmbeddedActivitiesForChannel;
                entity = _closure2_slot1;
                entity = entity.id;
                zulu = mike.bind(zulu)(entity);
                mike = zulu.find;
                entity = function(argFoo) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        entity = argFoo;
                        mike = entity.applicationId;
                        tango = _closure2_slot3;
                        entity = null;
                        tango = entity == tango;
                        entity = undefined;
                        if(tango) { _fun00008_ip = 35; continue _fun00007 }
 26:
                        zulu = _closure2_slot3;
                        entity = zulu.id;
 35:
                        entity = mike === entity;
                        return entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango = backup.bind(output)(tango, entity);
            _closure2_slot4 = tango;
            entity = 20;
            entity = yankee[entity];
            backup = sizing.bind(report)(entity);
            entity = 21;
            entity = yankee[entity];
            entity = sizing.bind(report)(entity);
            entity = entity.ACTIVITY_TILE;
            entity = backup.bind(report)(entity);
            entity = entity.analyticsLocations;
            _closure2_slot5 = entity;
            entity = 22;
            entity = yankee[entity];
            zulu = zulu.bind(report)(entity);
            entity = zulu.useAnalyticsContext;
            entity = entity.bind(zulu)();
            _closure2_slot6 = entity;
            entity = kilo == foxtrot;
            source = undefined;
            if(entity) { _fun00002_ip = 436; continue _fun00001 }
 431:
            source = foxtrot.name;
 436:
            if(!(kilo == source)) { _fun00002_ip = 495; continue _fun00001 }
 440:
            backup = _closure1_slot0;
            sizing = _closure1_slot2;
            entity = 23;
            zulu = sizing[entity];
            zulu = backup.bind(report)(zulu);
            yankee = zulu.intl;
            zulu = yankee.string;
            entity = sizing[entity];
            entity = backup.bind(report)(entity);
            entity = entity.t;
            entity = entity.WCNe7O;
            source = zulu.bind(yankee)(entity);
 495:
            zulu = _closure1_slot7;
            entity = zulu.getCurrentUser;
            entity = entity.bind(zulu)();
            zulu = kilo == entity;
            backup = undefined;
            if(zulu) { _fun00002_ip = 522; continue _fun00001 }
 517:
            backup = entity.id;
 522:
            entity = kilo != mike;
            if(!entity) { _fun00002_ip = 552; continue _fun00001 }
 529:
            zulu = mike.id;
            yankee = kilo == foxtrot;
            mike = undefined;
            if(yankee) { _fun00002_ip = 548; continue _fun00001 }
 543:
            mike = foxtrot.id;
 548:
            entity = zulu === mike;
 552:
            if(entity) { _fun00002_ip = 593; continue _fun00001 }
 555:
            mike = kilo != backup;
            if(!mike) { _fun00002_ip = 590; continue _fun00001 }
 562:
            yankee = kilo == tango;
            zulu = undefined;
            if(yankee) { _fun00002_ip = 587; continue _fun00001 }
 571:
            yankee = tango.userIds;
            tango = yankee.has;
            zulu = tango.bind(yankee)(backup);
 587:
            mike = zulu;
 590:
            entity = mike;
 593:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            tango = 24;
            mike = mike[tango];
            yankee = zulu.bind(report)(mike);
            zulu = yankee.useEmbeddedActivityJoinability;
            mike = {};
            sizing = _closure1_slot7;
            backup = sizing.getCurrentUser;
            sizing = backup.bind(sizing)();
            output = kilo == sizing;
            backup = undefined;
            if(output) { _fun00002_ip = 648; continue _fun00001 }
 643:
            backup = sizing.id;
 648:
            mike['userId'] = backup;
            backup = offset.id;
            mike['channelId'] = backup;
            mike['application'] = foxtrot;
            output = zulu.bind(yankee)(mike);
            _closure2_slot7 = output;
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[tango];
            mike = zulu.bind(report)(mike);
            mike = mike.EmbeddedActivityJoinability;
            sizing = mike.CAN_JOIN;
            mike = record.length;
            if(!(!(mike > oscar))) { _fun00002_ip = 776; continue _fun00001 }
 712:
            zulu = _closure1_slot0;
            backup = _closure1_slot2;
            mike = 23;
            tango = backup[mike];
            tango = zulu.bind(report)(tango);
            yankee = tango.intl;
            tango = yankee.formatToPlainString;
            mike = backup[mike];
            mike = zulu.bind(report)(mike);
            mike = mike.t;
            zulu = mike.7Uuia2;
            mike = {};
            mike['username'] = romeo;
            context = tango.bind(yankee)(zulu, mike);
            _fun00002_ip = 851; continue _fun00001;
 776:
            zulu = _closure1_slot0;
            backup = _closure1_slot2;
            mike = 23;
            tango = backup[mike];
            tango = zulu.bind(report)(tango);
            yankee = tango.intl;
            tango = yankee.formatToPlainString;
            mike = backup[mike];
            mike = zulu.bind(report)(mike);
            mike = mike.t;
            zulu = mike.cpe6CA;
            mike = {};
            mike['username'] = romeo;
            romeo = record.length;
            romeo = romeo - oscar;
            mike['count'] = romeo;
            context = tango.bind(yankee)(zulu, mike);
 851:
            if(entity) { _fun00002_ip = 1430; continue _fun00001 }
 857:
            zulu = _closure1_slot11;
            echo = _closure1_slot0;
            sequence = _closure1_slot2;
            entity = 28;
            entity = sequence[entity];
            entity = echo.bind(report)(entity);
            mike = entity.PressableOpacity;
            entity = {};
            tango = 'button';
            entity['accessibilityRole'] = tango;
            control = 23;
            tango = sequence[control];
            tango = echo.bind(report)(tango);
            backup = tango.intl;
            romeo = backup.formatToPlainString;
            tango = sequence[control];
            tango = echo.bind(report)(tango);
            tango = tango.t;
            yankee = tango.Yw5Hr6;
            tango = {};
            tango['applicationName'] = source;
            tango = romeo.bind(backup)(yankee, tango);
            entity['accessibilityLabel'] = tango;
            tango = _closure1_slot15;
            entity['androidRippleConfig'] = tango;
            entity['onPress'] = vacuum;
            tango = options.pressableOpacity;
            entity['style'] = tango;
            romeo = _closure1_slot10;
            result = _closure1_slot1;
            tango = 30;
            tango = sequence[tango];
            yankee = result.bind(report)(tango);
            tango = {};
            tango['application'] = foxtrot;
            foxtrot = 'cover';
            tango['resizeMode'] = foxtrot;
            yankee = romeo.bind(report)(yankee, tango);
            tango = new Array(2);
            tango[0] = yankee;
            foxtrot = _closure1_slot11;
            romeo = _closure1_slot5;
            yankee = {};
            papa = options.activityPreview;
            backup = new Array(2);
            backup[0] = papa;
            backup[1] = update;
            yankee['style'] = backup;
            update = _closure1_slot10;
            papa = 31;
            backup = sequence[papa];
            result = result.bind(report)(backup);
            backup = {};
            target = -6;
            backup['offsetAmount'] = target;
            target = options.overflow;
            backup['overflowStyle'] = target;
            papa = sequence[papa];
            papa = echo.bind(report)(papa);
            papa = papa.OverflowText;
            backup['overflowComponent'] = papa;
            backup['items'] = record;
            record = 4;
            backup['max'] = record;
            config = function(argFoo, argBar) { // Original name: renderItem
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    tango = _closure1_slot10;
                    mike = _closure1_slot1;
                    entity = _closure1_slot2;
                    verify = 13;
                    entity = entity[verify];
                    zulu = undefined;
                    mike = mike.bind(zulu)(entity);
                    entity = {};
                    report = argFoo;
                    entity['user'] = report;
                    report = _closure2_slot0;
                    oscar = report.guildId;
                    report = null;
                    golf = report != oscar;
                    report = undefined;
                    if(!golf) { _fun00010_ip = 64; continue _fun00009 }
 61:
                    report = oscar;
 64:
                    entity['guildId'] = report;
                    report = _closure1_slot12;
                    entity['size'] = report;
                    oscar = argBar;
                    report = undefined;
                    if(oscar) { _fun00010_ip = 177; continue _fun00009 }
 84:
                    oscar = {};
                    options = _closure1_slot0;
                    golf = _closure1_slot2;
                    yankee = golf[verify];
                    yankee = options.bind(zulu)(yankee);
                    romeo = yankee.AVATAR_SIZE_MAP;
                    yankee = _closure1_slot12;
                    romeo = romeo[yankee];
                    yankee = 2;
                    yankee = romeo / yankee;
                    offset = _closure1_slot13;
                    offset = yankee + offset;
                    oscar['radius'] = offset;
                    golf = golf[verify];
                    golf = options.bind(zulu)(golf);
                    golf = golf.CutoutDirection;
                    golf = golf.RIGHT;
                    oscar['direction'] = golf;
                    golf = -6;
                    oscar['inset'] = golf;
                    report = oscar;
 177:
                    entity['cutout'] = report;
                    entity = tango.bind(zulu)(mike, entity);
                    return entity;
                }
            };
            backup['renderItem'] = config;
            result = update.bind(report)(result, backup);
            backup = new Array(4);
            backup[0] = result;
            record = _closure1_slot10;
            result = 32;
            update = sequence[result];
            update = echo.bind(report)(update);
            config = update.LegacyText;
            update = {};
            papa = options.subtitleText;
            update['style'] = papa;
            papa = 2;
            update['numberOfLines'] = papa;
            update['children'] = context;
            update = record.bind(report)(config, update);
            backup[1] = update;
            update = _closure1_slot10;
            result = sequence[result];
            result = echo.bind(report)(result);
            echo = result.LegacyText;
            result = {};
            sequence = options.titleText;
            result['style'] = sequence;
            result['children'] = source;
            result = update.bind(report)(echo, result);
            backup[2] = result;
            kilo = null;
            if(!(output === sizing)) { _fun00002_ip = 1400; continue _fun00001 }
 1268:
            result = _closure1_slot10;
            update = _closure1_slot1;
            source = _closure1_slot2;
            echo = 33;
            sizing = source[echo];
            output = update.bind(report)(sizing);
            sizing = {};
            sizing['onPress'] = vacuum;
            vacuum = options.button;
            sizing['style'] = vacuum;
            config = _closure1_slot0;
            vacuum = source[control];
            vacuum = config.bind(report)(vacuum);
            sequence = vacuum.intl;
            vacuum = sequence.string;
            control = source[control];
            control = config.bind(report)(control);
            control = control.t;
            control = control.4i2vj4;
            control = vacuum.bind(sequence)(control);
            sizing['text'] = control;
            echo = source[echo];
            echo = update.bind(report)(echo);
            echo = echo.Colors;
            echo = echo.GREY;
            sizing['color'] = echo;
            echo = _closure1_slot14;
            sizing['cornerRadius'] = echo;
            kilo = result.bind(report)(output, sizing);
 1400:
            backup[3] = kilo;
            yankee['children'] = backup;
            yankee = foxtrot.bind(report)(romeo, yankee);
            tango[1] = yankee;
            entity['children'] = tango;
            entity = zulu.bind(report)(mike, entity);
            _fun00002_ip = 1549; continue _fun00001;
 1430:
            tango = _closure1_slot10;
            zulu = _closure1_slot0;
            yankee = _closure1_slot2;
            mike = 28;
            mike = yankee[mike];
            mike = zulu.bind(report)(mike);
            zulu = mike.PressableOpacity;
            mike = {};
            romeo = 'box-only';
            mike['pointerEvents'] = romeo;
            options = options.activityViewContainer;
            mike['style'] = options;
            mike['onPress'] = golf;
            mike['activeOpacity'] = oscar;
            options = _closure1_slot10;
            golf = _closure1_slot1;
            oscar = 29;
            oscar = yankee[oscar];
            golf = golf.bind(report)(oscar);
            oscar = {};
            oscar['channel'] = offset;
            verify = _closure1_slot9;
            verify = verify.PIP;
            oscar['layoutMode'] = verify;
            oscar = options.bind(report)(golf, oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 1549:
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    options = true;
    tango['value'] = options;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = yankee.bind(entity)(tango);
    var _closure1_slot3 = tango;
    kilo = 1;
    tango = oscar[kilo];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    tango = 3;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.View;
    var _closure1_slot5 = golf;
    romeo = 4;
    golf = oscar[romeo];
    golf = yankee.bind(entity)(golf);
    var _closure1_slot6 = golf;
    golf = 5;
    golf = oscar[golf];
    golf = yankee.bind(entity)(golf);
    var _closure1_slot7 = golf;
    golf = 6;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    backup = golf.Fonts;
    golf = golf.ThemeTypes;
    var _closure1_slot8 = golf;
    golf = 7;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.ActivityLayoutMode;
    var _closure1_slot9 = golf;
    golf = 8;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.getThemedRippleConfig;
    verify = 9;
    offset = oscar[verify];
    offset = report.bind(entity)(offset);
    offset = offset.jsx;
    var _closure1_slot10 = offset;
    verify = oscar[verify];
    verify = report.bind(entity)(verify);
    verify = verify.jsxs;
    var _closure1_slot11 = verify;
    verify = 10;
    verify = oscar[verify];
    verify = report.bind(entity)(verify);
    verify = verify.AvatarSizes;
    foxtrot = verify.XSMALL;
    var _closure1_slot12 = foxtrot;
    var _closure1_slot13 = tango;
    tango = 100;
    var _closure1_slot14 = tango;
    tango = {};
    tango['foreground'] = options;
    tango = golf.bind(entity)(tango);
    var _closure1_slot15 = tango;
    tango = 11;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'width': '100%', 'height': '100%', 'backgroundColor': null, 'justifyContent': 'center', 'alignItems': 'center'};
    offset = 12;
    sizing = oscar[offset];
    sizing = yankee.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.BACKGROUND_SECONDARY;
    verify['backgroundColor'] = sizing;
    tango['pressableOpacity'] = verify;
    verify = {'flex': 1, 'opacity': 0.6};
    sizing = oscar[offset];
    sizing = yankee.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.BLACK;
    verify['backgroundColor'] = sizing;
    tango['overlay'] = verify;
    verify = {'alignItems': 'center', 'display': 'flex', 'width': '100%', 'padding': 16};
    tango['activityPreview'] = verify;
    verify = {};
    verify['flex'] = kilo;
    kilo = oscar[offset];
    kilo = yankee.bind(entity)(kilo);
    kilo = kilo.colors;
    kilo = kilo.BACKGROUND_SECONDARY;
    verify['backgroundColor'] = kilo;
    tango['activityViewContainer'] = verify;
    verify = {'fontSize': 16, 'lineHeight': 24, 'color': null, 'fontFamily': null, 'textAlign': 'center', 'marginLeft': 16, 'marginRight': 16};
    kilo = oscar[offset];
    kilo = yankee.bind(entity)(kilo);
    kilo = kilo.colors;
    kilo = kilo.TEXT_NORMAL;
    verify['color'] = kilo;
    kilo = backup.DISPLAY_EXTRABOLD;
    verify['fontFamily'] = kilo;
    tango['titleText'] = verify;
    verify = {'fontSize': 14, 'lineHeight': 18, 'color': null, 'fontFamily': null, 'textAlign': 'center', 'marginLeft': 16, 'marginRight': 16};
    kilo = oscar[offset];
    kilo = yankee.bind(entity)(kilo);
    kilo = kilo.colors;
    kilo = kilo.TEXT_NORMAL;
    verify['color'] = kilo;
    backup = backup.PRIMARY_NORMAL;
    verify['fontFamily'] = backup;
    tango['subtitleText'] = verify;
    verify = {};
    backup = oscar[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.lg;
    verify['borderRadius'] = backup;
    verify['borderWidth'] = romeo;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.BACKGROUND_MOBILE_SECONDARY;
    verify['borderColor'] = romeo;
    tango['iconWrapper'] = verify;
    verify = {};
    romeo = 13;
    romeo = oscar[romeo];
    romeo = report.bind(entity)(romeo);
    romeo = romeo.AVATAR_SIZE_MAP;
    romeo = romeo[foxtrot];
    verify['height'] = romeo;
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.BACKGROUND_SECONDARY_ALT;
    verify['backgroundColor'] = offset;
    tango['overflow'] = verify;
    verify = {'marginTop': 8, 'borderRadius': 100, 'alignSelf': 'center', 'paddingHorizontal': 24};
    tango['button'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot16 = tango;
    tango = 35;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/video_calls/native/components/ActivityTile.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: ActivityTile
        tango = _closure1_slot10;
        mike = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 34;
        entity = zulu[entity];
        zulu = undefined;
        entity = mike.bind(zulu)(entity);
        mike = entity.ThemeContextProvider;
        entity = {};
        oscar = _closure1_slot8;
        oscar = oscar.DARK;
        entity['theme'] = oscar;
        golf = _closure1_slot10;
        oscar = _closure1_slot17;
        report = {};
        verify = argFoo;
        offset = report;
        options = copyDataProperties(offset, verify);
        report = golf.bind(zulu)(oscar, report);
        entity['children'] = report;
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();