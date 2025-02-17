// app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardLiveStage.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    output = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = output;
    var _closure1_slot2 = golf;
    mike = function(argFoo) { // Original name: HappeningNowLiveStageContent
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            foxtrot = entity.stage;
            mike = entity.renderingContext;
            golf = entity.streamingUser;
            zulu = entity.guildId;
            entity = _closure1_slot9;
            tango = undefined;
            report = entity.bind(tango)();
            oscar = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 10;
            entity = verify[entity];
            oscar = oscar.bind(tango)(entity);
            entity = oscar.useLiveStageData;
            oscar = entity.bind(oscar)(foxtrot);
            entity = oscar.channel;
            offset = oscar.speakers;
            yankee = oscar.friends;
            oscar = null;
            romeo = oscar == entity;
            verify = undefined;
            if(romeo) { _fun00002_ip = 103; continue _fun00001 }
 98:
            verify = entity.name;
 103:
            entity = 'guild';
            if(!(entity === mike)) { _fun00002_ip = 125; continue _fun00001 }
 111:
            mike = offset.length;
            entity = 0;
            if(!(!(mike > entity))) { _fun00002_ip = 270; continue _fun00001 }
 125:
            entity = yankee.length;
            mike = 0;
            if(!(!(entity > mike))) { _fun00002_ip = 218; continue _fun00001 }
 136:
            entity = offset.length;
            if(!(entity > mike)) { _fun00002_ip = 335; continue _fun00001 }
 148:
            mike = _closure1_slot12;
            entity = {};
            romeo = offset;
            if(!(oscar != golf)) { _fun00002_ip = 172; continue _fun00001 }
 161:
            backup = new Array(1);
            backup[0] = golf;
            romeo = backup;
 172:
            entity['users'] = romeo;
            if(!(oscar == golf)) { _fun00002_ip = 193; continue _fun00001 }
 181:
            romeo = _closure1_slot10;
            romeo = romeo.ON_STAGE;
            _fun00002_ip = 203; continue _fun00001;
 193:
            backup = _closure1_slot10;
            romeo = backup.SHARING;
 203:
            entity['action'] = romeo;
            entity['guildId'] = zulu;
            verify = mike.bind(tango)(entity);
            _fun00002_ip = 335; continue _fun00001;
 218:
            mike = _closure1_slot12;
            entity = {};
            entity['users'] = yankee;
            if(!(oscar == golf)) { _fun00002_ip = 245; continue _fun00001 }
 233:
            yankee = _closure1_slot10;
            yankee = yankee.LISTENING;
            _fun00002_ip = 255; continue _fun00001;
 245:
            romeo = _closure1_slot10;
            yankee = romeo.WATCHING;
 255:
            entity['action'] = yankee;
            entity['guildId'] = zulu;
            verify = mike.bind(tango)(entity);
            _fun00002_ip = 335; continue _fun00001;
 270:
            mike = _closure1_slot12;
            entity = {};
            if(!(oscar != golf)) { _fun00002_ip = 291; continue _fun00001 }
 280:
            yankee = new Array(1);
            yankee[0] = golf;
            offset = yankee;
 291:
            entity['users'] = offset;
            if(!(oscar == golf)) { _fun00002_ip = 312; continue _fun00001 }
 300:
            oscar = _closure1_slot10;
            oscar = oscar.ON_STAGE;
            _fun00002_ip = 322; continue _fun00001;
 312:
            golf = _closure1_slot10;
            oscar = golf.SHARING;
 322:
            entity['action'] = oscar;
            entity['guildId'] = zulu;
            verify = mike.bind(tango)(entity);
 335:
            zulu = _closure1_slot8;
            mike = _closure1_slot4;
            entity = {};
            report = report.content;
            entity['style'] = report;
            romeo = _closure1_slot7;
            golf = _closure1_slot0;
            offset = _closure1_slot2;
            oscar = 13;
            report = offset[oscar];
            report = golf.bind(tango)(report);
            yankee = report.HappeningNowCardHeader;
            report = {};
            backup = 3;
            report['lineClamp'] = backup;
            foxtrot = foxtrot.topic;
            report['children'] = foxtrot;
            yankee = romeo.bind(tango)(yankee, report);
            report = new Array(2);
            report[0] = yankee;
            options = _closure1_slot7;
            oscar = offset[oscar];
            oscar = golf.bind(tango)(oscar);
            golf = oscar.HappeningNowCardSubtitle;
            oscar = {};
            offset = 1;
            oscar['lineClamp'] = offset;
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot11 = mike;
    entity = function(argFoo) { // Original name: getUsersSubtitle
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            mike = entity.users;
            zulu = entity.action;
            offset = entity.guildId;
            oscar = mike.length;
            entity = 0;
            if(!(entity !== oscar)) { _fun00004_ip = 1393; continue _fun00003 }
 33:
            tango = 1;
            if(!(tango !== oscar)) { _fun00004_ip = 912; continue _fun00003 }
 43:
            report = 2;
            if(!(report !== oscar)) { _fun00004_ip = 479; continue _fun00003 }
 53:
            oscar = mike.length;
            options = '';
            report = options;
            if(!(entity !== oscar)) { _fun00004_ip = 477; continue _fun00003 }
 72:
            verify = _closure1_slot1;
            yankee = _closure1_slot2;
            golf = 19;
            golf = yankee[golf];
            foxtrot = undefined;
            romeo = verify.bind(foxtrot)(golf);
            yankee = romeo.getName;
            verify = mike[entity];
            golf = null;
            romeo = yankee.bind(romeo)(offset, golf, verify);
            golf = mike.length;
            yankee = golf - tango;
            golf = _closure1_slot10;
            golf = golf.LISTENING;
            if(!(golf !== zulu)) { _fun00004_ip = 409; continue _fun00003 }
 142:
            golf = _closure1_slot10;
            golf = golf.WATCHING;
            if(!(golf !== zulu)) { _fun00004_ip = 339; continue _fun00003 }
 159:
            golf = _closure1_slot10;
            golf = golf.ON_STAGE;
            if(!(golf !== zulu)) { _fun00004_ip = 266; continue _fun00003 }
 173:
            golf = _closure1_slot10;
            golf = golf.SHARING;
            report = options;
            if(!(golf === zulu)) { _fun00004_ip = 477; continue _fun00003 }
 193:
            options = _closure1_slot0;
            kilo = _closure1_slot2;
            golf = 18;
            verify = kilo[golf];
            verify = options.bind(foxtrot)(verify);
            backup = verify.intl;
            verify = backup.formatToPlainString;
            golf = kilo[golf];
            golf = options.bind(foxtrot)(golf);
            golf = golf.t;
            options = golf.m+NEcH;
            golf = {};
            golf['name'] = romeo;
            golf['count'] = yankee;
            report = verify.bind(backup)(options, golf);
            _fun00004_ip = 477; continue _fun00003;
 266:
            options = _closure1_slot0;
            kilo = _closure1_slot2;
            golf = 18;
            verify = kilo[golf];
            verify = options.bind(foxtrot)(verify);
            backup = verify.intl;
            verify = backup.formatToPlainString;
            golf = kilo[golf];
            golf = options.bind(foxtrot)(golf);
            golf = golf.t;
            options = golf.zRm3ZW;
            golf = {};
            golf['name'] = romeo;
            golf['count'] = yankee;
            report = verify.bind(backup)(options, golf);
            _fun00004_ip = 477; continue _fun00003;
 339:
            options = _closure1_slot0;
            kilo = _closure1_slot2;
            golf = 18;
            verify = kilo[golf];
            verify = options.bind(foxtrot)(verify);
            backup = verify.intl;
            verify = backup.formatToPlainString;
            golf = kilo[golf];
            golf = options.bind(foxtrot)(golf);
            golf = golf.t;
            options = golf.Iwxee3;
            golf = {};
            golf['name'] = romeo;
            golf['count'] = yankee;
            report = verify.bind(backup)(options, golf);
            _fun00004_ip = 477; continue _fun00003;
 409:
            golf = _closure1_slot0;
            backup = _closure1_slot2;
            oscar = 18;
            options = backup[oscar];
            options = golf.bind(foxtrot)(options);
            verify = options.intl;
            options = verify.formatToPlainString;
            oscar = backup[oscar];
            oscar = golf.bind(foxtrot)(oscar);
            oscar = oscar.t;
            golf = oscar.CsvyMT;
            oscar = {};
            oscar['name'] = romeo;
            oscar['count'] = yankee;
            report = options.bind(verify)(golf, oscar);
 477:
            return report;
 479:
            backup = mike[entity];
            options = mike[tango];
            oscar = _closure1_slot1;
            verify = _closure1_slot2;
            tango = 19;
            golf = verify[tango];
            romeo = undefined;
            foxtrot = oscar.bind(romeo)(golf);
            yankee = foxtrot.getName;
            golf = null;
            yankee = yankee.bind(foxtrot)(offset, golf, backup);
            tango = verify[tango];
            oscar = oscar.bind(romeo)(tango);
            tango = oscar.getName;
            verify = tango.bind(oscar)(offset, golf, options);
            tango = _closure1_slot10;
            tango = tango.LISTENING;
            if(!(tango !== zulu)) { _fun00004_ip = 840; continue _fun00003 }
 566:
            tango = _closure1_slot10;
            tango = tango.WATCHING;
            if(!(tango !== zulu)) { _fun00004_ip = 768; continue _fun00003 }
 583:
            tango = _closure1_slot10;
            tango = tango.ON_STAGE;
            if(!(tango !== zulu)) { _fun00004_ip = 693; continue _fun00003 }
 597:
            tango = _closure1_slot10;
            oscar = tango.SHARING;
            tango = '';
            if(!(oscar === zulu)) { _fun00004_ip = 910; continue _fun00003 }
 618:
            golf = _closure1_slot0;
            backup = _closure1_slot2;
            oscar = 18;
            options = backup[oscar];
            options = golf.bind(romeo)(options);
            foxtrot = options.intl;
            options = foxtrot.formatToPlainString;
            oscar = backup[oscar];
            oscar = golf.bind(romeo)(oscar);
            oscar = oscar.t;
            golf = oscar.uRjRHR;
            oscar = {};
            oscar['name1'] = yankee;
            oscar['name2'] = verify;
            tango = options.bind(foxtrot)(golf, oscar);
            _fun00004_ip = 910; continue _fun00003;
 693:
            golf = _closure1_slot0;
            backup = _closure1_slot2;
            oscar = 18;
            options = backup[oscar];
            options = golf.bind(romeo)(options);
            foxtrot = options.intl;
            options = foxtrot.formatToPlainString;
            oscar = backup[oscar];
            oscar = golf.bind(romeo)(oscar);
            oscar = oscar.t;
            golf = oscar.SrTuJy;
            oscar = {};
            oscar['name1'] = yankee;
            oscar['name2'] = verify;
            tango = options.bind(foxtrot)(golf, oscar);
            _fun00004_ip = 910; continue _fun00003;
 768:
            golf = _closure1_slot0;
            backup = _closure1_slot2;
            oscar = 18;
            options = backup[oscar];
            options = golf.bind(romeo)(options);
            foxtrot = options.intl;
            options = foxtrot.formatToPlainString;
            oscar = backup[oscar];
            oscar = golf.bind(romeo)(oscar);
            oscar = oscar.t;
            golf = oscar.afUntr;
            oscar = {};
            oscar['name1'] = yankee;
            oscar['name2'] = verify;
            tango = options.bind(foxtrot)(golf, oscar);
            _fun00004_ip = 910; continue _fun00003;
 840:
            oscar = _closure1_slot0;
            foxtrot = _closure1_slot2;
            report = 18;
            golf = foxtrot[report];
            golf = oscar.bind(romeo)(golf);
            options = golf.intl;
            golf = options.formatToPlainString;
            report = foxtrot[report];
            report = oscar.bind(romeo)(report);
            report = report.t;
            oscar = report.GFMcxs;
            report = {};
            report['name1'] = yankee;
            report['name2'] = verify;
            tango = golf.bind(options)(oscar, report);
 910:
            return tango;
 912:
            verify = mike[entity];
            entity = _closure1_slot10;
            entity = entity.LISTENING;
            if(!(entity !== zulu)) { _fun00004_ip = 1294; continue _fun00003 }
 936:
            entity = _closure1_slot10;
            entity = entity.WATCHING;
            if(!(entity !== zulu)) { _fun00004_ip = 1195; continue _fun00003 }
 953:
            entity = _closure1_slot10;
            entity = entity.ON_STAGE;
            if(!(entity !== zulu)) { _fun00004_ip = 1093; continue _fun00003 }
 970:
            entity = _closure1_slot10;
            mike = entity.SHARING;
            entity = '';
            if(!(mike === zulu)) { _fun00004_ip = 1391; continue _fun00003 }
 991:
            zulu = _closure1_slot0;
            romeo = _closure1_slot2;
            mike = 18;
            tango = romeo[mike];
            yankee = undefined;
            tango = zulu.bind(yankee)(tango);
            report = tango.intl;
            tango = report.formatToPlainString;
            mike = romeo[mike];
            mike = zulu.bind(yankee)(mike);
            mike = mike.t;
            zulu = mike.5oa7dX;
            mike = {};
            options = _closure1_slot1;
            golf = 19;
            golf = romeo[golf];
            yankee = options.bind(yankee)(golf);
            options = yankee.getName;
            golf = null;
            golf = options.bind(yankee)(offset, golf, verify);
            mike['name'] = golf;
            entity = tango.bind(report)(zulu, mike);
            _fun00004_ip = 1391; continue _fun00003;
 1093:
            zulu = _closure1_slot0;
            romeo = _closure1_slot2;
            mike = 18;
            tango = romeo[mike];
            yankee = undefined;
            tango = zulu.bind(yankee)(tango);
            report = tango.intl;
            tango = report.formatToPlainString;
            mike = romeo[mike];
            mike = zulu.bind(yankee)(mike);
            mike = mike.t;
            zulu = mike.5uJ3+v;
            mike = {};
            options = _closure1_slot1;
            golf = 19;
            golf = romeo[golf];
            yankee = options.bind(yankee)(golf);
            options = yankee.getName;
            golf = null;
            golf = options.bind(yankee)(offset, golf, verify);
            mike['name'] = golf;
            entity = tango.bind(report)(zulu, mike);
            _fun00004_ip = 1391; continue _fun00003;
 1195:
            zulu = _closure1_slot0;
            romeo = _closure1_slot2;
            mike = 18;
            tango = romeo[mike];
            yankee = undefined;
            tango = zulu.bind(yankee)(tango);
            report = tango.intl;
            tango = report.formatToPlainString;
            mike = romeo[mike];
            mike = zulu.bind(yankee)(mike);
            mike = mike.t;
            zulu = mike.iWY9ws;
            mike = {};
            options = _closure1_slot1;
            golf = 19;
            golf = romeo[golf];
            yankee = options.bind(yankee)(golf);
            options = yankee.getName;
            golf = null;
            golf = options.bind(yankee)(offset, golf, verify);
            mike['name'] = golf;
            entity = tango.bind(report)(zulu, mike);
            _fun00004_ip = 1391; continue _fun00003;
 1294:
            zulu = _closure1_slot0;
            yankee = _closure1_slot2;
            mike = 18;
            tango = yankee[mike];
            options = undefined;
            tango = zulu.bind(options)(tango);
            report = tango.intl;
            tango = report.formatToPlainString;
            mike = yankee[mike];
            mike = zulu.bind(options)(mike);
            mike = mike.t;
            zulu = mike.lJXKtL;
            mike = {};
            golf = _closure1_slot1;
            oscar = 19;
            oscar = yankee[oscar];
            options = golf.bind(options)(oscar);
            golf = options.getName;
            oscar = null;
            oscar = golf.bind(options)(offset, oscar, verify);
            mike['name'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 1391:
            return entity;
 1393:
            entity = '';
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = global;
    verify = entity.Object;
    report = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(verify)(zulu, entity, tango);
    foxtrot = 0;
    report = golf[foxtrot];
    tango = argCorge;
    entity = undefined;
    verify = tango.bind(entity)(report);
    var _closure1_slot3 = verify;
    romeo = 1;
    tango = golf[romeo];
    tango = oscar.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot4 = tango;
    yankee = 2;
    tango = golf[yankee];
    tango = oscar.bind(entity)(tango);
    echo = tango.HAPPENING_NOW_CONTENT_HEIGHT;
    sizing = tango.HAPPENING_NOW_STAGE_PREVIEW_HEIGHT;
    result = tango.HAPPENING_NOW_STAGE_PREVIEW_WIDTH;
    tango = tango.HappeningNowCardTrackingType;
    var _closure1_slot5 = tango;
    offset = 3;
    tango = golf[offset];
    tango = oscar.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot6 = tango;
    tango = 4;
    report = golf[tango];
    report = oscar.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot7 = report;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot8 = tango;
    tango = 5;
    tango = golf[tango];
    backup = oscar.bind(entity)(tango);
    report = backup.createStyles;
    tango = {};
    kilo = {'flexShrink': 1, 'gap': 2};
    tango['content'] = kilo;
    kilo = {'marginRight': 12, 'flexDirection': 'column', 'justifyContent': 'space-between', 'height': '100%'};
    kilo['width'] = result;
    tango['stagePreviewContainer'] = kilo;
    kilo = {};
    kilo['height'] = sizing;
    sizing = 6;
    result = golf[sizing];
    result = output.bind(entity)(result);
    result = result.unsafe_rawColors;
    result = result.PRIMARY_800;
    kilo['backgroundColor'] = result;
    result = golf[sizing];
    result = output.bind(entity)(result);
    result = result.radii;
    result = result.sm;
    kilo['borderRadius'] = result;
    result = 'center';
    kilo['alignItems'] = result;
    kilo['paddingTop'] = sizing;
    tango['stagePreviewBackground'] = kilo;
    kilo = {};
    kilo['height'] = echo;
    echo = golf[sizing];
    echo = output.bind(entity)(echo);
    echo = echo.unsafe_rawColors;
    echo = echo.PRIMARY_800;
    kilo['backgroundColor'] = echo;
    echo = golf[sizing];
    echo = output.bind(entity)(echo);
    echo = echo.radii;
    echo = echo.sm;
    kilo['borderRadius'] = echo;
    kilo['justifyContent'] = result;
    kilo['alignItems'] = result;
    tango['stagePreviewBackgroundNoAudience'] = kilo;
    kilo = {'backgroundColor': null, 'padding': 2, 'borderRadius': null, 'position': 'absolute', 'alignSelf': 'center', 'bottom': 0};
    result = golf[sizing];
    result = output.bind(entity)(result);
    result = result.colors;
    result = result.STAGE_CARD_PILL_BG;
    kilo['backgroundColor'] = result;
    sizing = golf[sizing];
    sizing = output.bind(entity)(sizing);
    sizing = sizing.radii;
    sizing = sizing.xl;
    kilo['borderRadius'] = sizing;
    tango['avatarStackContainer'] = kilo;
    tango = report.bind(backup)(tango);
    var _closure1_slot9 = tango;
    report = verify.memo;
    tango = function(argFoo) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            mike = argFoo;
            sizing = mike.stage;
            yankee = mike.index;
            var _closure2_slot0 = yankee;
            options = mike.fullwidth;
            golf = mike.renderingContext;
            oscar = mike.panelVariant;
            report = undefined;
            if(!(oscar === report)) { _fun00006_ip = 46; continue _fun00005 }
 44:
            oscar = false;
 46:
            var _closure2_slot1 = report;
            var _closure2_slot2 = report;
            zulu = _closure1_slot9;
            source = zulu.bind(report)();
            tango = sizing.channel_id;
            _closure2_slot1 = tango;
            offset = sizing.guild_id;
            _closure2_slot2 = offset;
            romeo = _closure1_slot3;
            verify = romeo.useCallback;
            zulu = new Array(3);
            zulu[0] = tango;
            zulu[1] = offset;
            zulu[2] = yankee;
            entity = function() {
                report = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 7;
                tango = mike[entity];
                entity = undefined;
                golf = report.bind(entity)(tango);
                oscar = golf.track;
                tango = _closure1_slot6;
                report = tango.ACTIVITY_CARD_CLICKED;
                tango = {};
                verify = _closure2_slot0;
                tango['order'] = verify;
                verify = _closure2_slot2;
                tango['guild_id'] = verify;
                verify = _closure1_slot5;
                verify = verify.GUILD_LIVE_STAGE_CARD;
                tango['type'] = verify;
                options = _closure2_slot1;
                tango['destination_channel_id'] = options;
                tango = oscar.bind(golf)(report, tango);
                tango = _closure1_slot0;
                zulu = 9;
                zulu = mike[zulu];
                tango = tango.bind(entity)(zulu);
                zulu = 8;
                zulu = mike[zulu];
                mike = mike.paths;
                tango = tango.bind(entity)(zulu, mike);
                zulu = tango.then;
                mike = function(argFoo) {
                    entity = argFoo;
                    tango = entity.default;
                    zulu = _closure2_slot1;
                    entity = undefined;
                    mike = true;
                    mike = tango.bind(entity)(zulu, mike);
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            romeo = verify.bind(romeo)(entity, zulu);
            zulu = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 10;
            entity = verify[entity];
            foxtrot = zulu.bind(report)(entity);
            entity = foxtrot.useLiveStageData;
            entity = entity.bind(foxtrot)(sizing);
            record = entity.speakers;
            context = entity.audienceCount;
            sequence = entity.audiencePrefixedFriends;
            entity = 11;
            entity = verify[entity];
            zulu = zulu.bind(report)(entity);
            entity = zulu.useCallActivityData;
            entity = entity.bind(zulu)(tango);
            verify = entity.stream;
            output = null;
            if(!(output == verify)) { _fun00006_ip = 731; continue _fun00005 }
 208:
            tango = _closure1_slot8;
            zulu = _closure1_slot1;
            foxtrot = _closure1_slot2;
            entity = 13;
            entity = foxtrot[entity];
            zulu = zulu.bind(report)(entity);
            entity = {};
            entity['onPress'] = romeo;
            romeo = 'large';
            if(!options) { _fun00006_ip = 249; continue _fun00005 }
 245:
            romeo = 'full';
 249:
            entity['width'] = romeo;
            foxtrot = _closure1_slot1;
            backup = _closure1_slot2;
            romeo = 14;
            romeo = backup[romeo];
            romeo = foxtrot.bind(report)(romeo);
            entity['badgeIcon'] = romeo;
            foxtrot = _closure1_slot0;
            romeo = 15;
            romeo = backup[romeo];
            romeo = foxtrot.bind(report)(romeo);
            romeo = romeo.StageIcon;
            entity['IconComponent'] = romeo;
            entity['panelVariant'] = oscar;
            backup = _closure1_slot8;
            foxtrot = _closure1_slot4;
            romeo = {};
            kilo = source.stagePreviewContainer;
            romeo['style'] = kilo;
            echo = _closure1_slot7;
            result = _closure1_slot4;
            kilo = {};
            config = 0;
            if(!(config !== context)) { _fun00006_ip = 354; continue _fun00005 }
 346:
            update = source.stagePreviewBackground;
            _fun00006_ip = 360; continue _fun00005;
 354:
            update = source.stagePreviewBackgroundNoAudience;
 360:
            kilo['style'] = update;
            update = record.length;
            update = update > config;
            if(!update) { _fun00006_ip = 464; continue _fun00005 }
 376:
            papa = _closure1_slot7;
            vacuum = _closure1_slot1;
            sierra = _closure1_slot2;
            target = 16;
            control = sierra[target];
            vacuum = vacuum.bind(report)(control);
            control = {};
            status = record[config];
            control['user'] = status;
            status = record[config];
            status = status.avatarDecoration;
            control['avatarDecoration'] = status;
            control['guildId'] = offset;
            status = _closure1_slot0;
            target = sierra[target];
            target = status.bind(report)(target);
            target = target.AvatarSizes;
            target = target.REFRESH_MEDIUM_32;
            control['size'] = target;
            update = papa.bind(report)(vacuum, control);
 464:
            kilo['children'] = update;
            result = echo.bind(report)(result, kilo);
            kilo = new Array(2);
            kilo[0] = result;
            result = context > config;
            output = null;
            if(!result) { _fun00006_ip = 650; continue _fun00005 }
 494:
            update = _closure1_slot7;
            echo = _closure1_slot4;
            result = {};
            source = source.avatarStackContainer;
            result['style'] = source;
            vacuum = _closure1_slot7;
            control = _closure1_slot0;
            papa = _closure1_slot2;
            source = 17;
            source = papa[source];
            source = control.bind(report)(source);
            control = source.HappeningNowAvatarStack;
            source = {};
            source['users'] = sequence;
            source['guildId'] = offset;
            sequence = record.length;
            sequence = context + sequence;
            record = record.length;
            record = record > config;
            config = 0;
            if(!record) { _fun00006_ip = 581; continue _fun00005 }
 578:
            config = 1;
 581:
            sequence = sequence - config;
            source['userCount'] = sequence;
            sequence = true;
            source['isStage'] = sequence;
            config = _closure1_slot0;
            record = _closure1_slot2;
            sequence = 16;
            sequence = record[sequence];
            sequence = config.bind(report)(sequence);
            sequence = sequence.AvatarSizes;
            sequence = sequence.SIZE_16;
            source['avatarSize'] = sequence;
            source = vacuum.bind(report)(control, source);
            result['children'] = source;
            output = update.bind(report)(echo, result);
 650:
            kilo[1] = output;
            romeo['children'] = kilo;
            foxtrot = backup.bind(report)(foxtrot, romeo);
            romeo = new Array(2);
            romeo[0] = foxtrot;
            kilo = _closure1_slot7;
            backup = _closure1_slot11;
            foxtrot = {};
            foxtrot['stage'] = sizing;
            foxtrot['renderingContext'] = golf;
            output = 'guild';
            sizing = undefined;
            if(!(output === golf)) { _fun00006_ip = 705; continue _fun00005 }
 702:
            sizing = offset;
 705:
            foxtrot['guildId'] = sizing;
            foxtrot = kilo.bind(report)(backup, foxtrot);
            romeo[1] = foxtrot;
            entity['children'] = romeo;
            entity = tango.bind(report)(zulu, entity);
            _fun00006_ip = 801; continue _fun00005;
 731:
            tango = _closure1_slot7;
            zulu = _closure1_slot1;
            romeo = _closure1_slot2;
            mike = 12;
            mike = romeo[mike];
            zulu = zulu.bind(report)(mike);
            mike = {};
            mike['index'] = yankee;
            yankee = verify.ownerId;
            mike['userId'] = yankee;
            mike['guildId'] = offset;
            mike['stream'] = verify;
            mike['fullwidth'] = options;
            mike['renderingContext'] = golf;
            mike['panelVariant'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 801:
            return entity;
        }
    };
    tango = report.bind(verify)(tango);
    report = {};
    report['LISTENING'] = foxtrot;
    verify = 'LISTENING';
    report[foxtrot] = verify;
    report['WATCHING'] = romeo;
    verify = 'WATCHING';
    report[romeo] = verify;
    report['ON_STAGE'] = yankee;
    verify = 'ON_STAGE';
    report[yankee] = verify;
    report['SHARING'] = offset;
    verify = 'SHARING';
    report[offset] = verify;
    var _closure1_slot10 = report;
    report = 20;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardLiveStage.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['HappeningNowLiveStageContent'] = mike;
    return entity;
})();