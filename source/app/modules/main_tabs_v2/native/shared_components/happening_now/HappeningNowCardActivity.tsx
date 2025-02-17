// app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActivity.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    foxtrot = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = foxtrot;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: IconOrPreview
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            oscar = zulu.userId;
            entity = zulu.activity;
            offset = zulu.stream;
            zulu = zulu.game;
            report = _closure1_slot16;
            tango = undefined;
            verify = report.bind(tango)();
            var _closure2_slot0 = verify;
            report = {};
            report['userId'] = oscar;
            report['activity'] = entity;
            report['game'] = zulu;
            report['stream'] = offset;
            zulu = function(argFoo) { // Original name: useActivityIcon
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    options = entity.userId;
                    mike = entity.activity;
                    offset = entity.game;
                    yankee = entity.stream;
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    zulu = 45;
                    zulu = report[zulu];
                    report = undefined;
                    verify = tango.bind(report)(zulu);
                    zulu = null;
                    tango = zulu == yankee;
                    golf = undefined;
                    if(tango) { _fun00004_ip = 67; continue _fun00003 }
 62:
                    golf = yankee.guildId;
 67:
                    tango = zulu == yankee;
                    oscar = undefined;
                    if(tango) { _fun00004_ip = 81; continue _fun00003 }
 76:
                    oscar = yankee.channelId;
 81:
                    romeo = zulu == yankee;
                    tango = undefined;
                    if(romeo) { _fun00004_ip = 96; continue _fun00003 }
 90:
                    tango = yankee.ownerId;
 96:
                    tango = verify.bind(report)(golf, oscar, tango);
                    oscar = tango.previewUrl;
                    golf = zulu != oscar;
                    tango = undefined;
                    if(!golf) { _fun00004_ip = 121; continue _fun00003 }
 118:
                    tango = oscar;
 121:
                    oscar = zulu == tango;
                    if(!oscar) { _fun00004_ip = 162; continue _fun00003 }
 128:
                    verify = zulu == mike;
                    golf = undefined;
                    if(verify) { _fun00004_ip = 158; continue _fun00003 }
 137:
                    verify = mike.assets;
                    yankee = zulu == verify;
                    golf = undefined;
                    if(yankee) { _fun00004_ip = 158; continue _fun00003 }
 152:
                    golf = verify.large_image;
 158:
                    oscar = zulu != golf;
 162:
                    if(!oscar) { _fun00004_ip = 254; continue _fun00003 }
 165:
                    golf = _closure1_slot0;
                    verify = _closure1_slot2;
                    oscar = 46;
                    oscar = verify[oscar];
                    romeo = golf.bind(report)(oscar);
                    yankee = romeo.getAssetImage;
                    oscar = zulu == mike;
                    verify = undefined;
                    if(oscar) { _fun00004_ip = 206; continue _fun00003 }
 200:
                    verify = mike.application_id;
 206:
                    oscar = zulu == mike;
                    golf = undefined;
                    if(oscar) { _fun00004_ip = 227; continue _fun00003 }
 215:
                    oscar = mike.assets;
                    golf = oscar.large_image;
 227:
                    foxtrot = _closure1_slot14;
                    oscar = new Array(2);
                    oscar[0] = foxtrot;
                    foxtrot = _closure1_slot14;
                    oscar[1] = foxtrot;
                    tango = yankee.bind(romeo)(verify, golf, oscar);
 254:
                    if(!(zulu == tango)) { _fun00004_ip = 285; continue _fun00003 }
 258:
                    golf = zulu == offset;
                    oscar = undefined;
                    if(golf) { _fun00004_ip = 282; continue _fun00003 }
 267:
                    verify = offset.getIconURL;
                    golf = _closure1_slot14;
                    oscar = verify.bind(offset)(golf);
 282:
                    tango = oscar;
 285:
                    oscar = zulu == tango;
                    if(!oscar) { _fun00004_ip = 326; continue _fun00003 }
 292:
                    verify = zulu == mike;
                    golf = undefined;
                    if(verify) { _fun00004_ip = 322; continue _fun00003 }
 301:
                    verify = mike.assets;
                    offset = zulu == verify;
                    golf = undefined;
                    if(offset) { _fun00004_ip = 322; continue _fun00003 }
 316:
                    golf = verify.small_image;
 322:
                    oscar = zulu != golf;
 326:
                    if(!oscar) { _fun00004_ip = 418; continue _fun00003 }
 329:
                    golf = _closure1_slot0;
                    verify = _closure1_slot2;
                    oscar = 46;
                    oscar = verify[oscar];
                    yankee = golf.bind(report)(oscar);
                    offset = yankee.getAssetImage;
                    oscar = zulu == mike;
                    verify = undefined;
                    if(oscar) { _fun00004_ip = 370; continue _fun00003 }
 364:
                    verify = mike.application_id;
 370:
                    oscar = zulu == mike;
                    golf = undefined;
                    if(oscar) { _fun00004_ip = 391; continue _fun00003 }
 379:
                    oscar = mike.assets;
                    golf = oscar.small_image;
 391:
                    romeo = _closure1_slot14;
                    oscar = new Array(2);
                    oscar[0] = romeo;
                    romeo = _closure1_slot14;
                    oscar[1] = romeo;
                    tango = offset.bind(yankee)(verify, golf, oscar);
 418:
                    if(!(zulu == tango)) { _fun00004_ip = 521; continue _fun00003 }
 422:
                    oscar = zulu == mike;
                    zulu = undefined;
                    if(oscar) { _fun00004_ip = 436; continue _fun00003 }
 431:
                    zulu = mike.type;
 436:
                    mike = _closure1_slot9;
                    mike = mike.PLAYING;
                    if(!(zulu !== mike)) { _fun00004_ip = 472; continue _fun00003 }
 450:
                    zulu = _closure1_slot1;
                    oscar = _closure1_slot2;
                    mike = 47;
                    mike = oscar[mike];
                    mike = zulu.bind(report)(mike);
                    _fun00004_ip = 518; continue _fun00003;
 472:
                    oscar = _closure1_slot15;
                    golf = options.slice;
                    zulu = -1;
                    options = golf.bind(options)(zulu);
                    golf = options.charCodeAt;
                    zulu = 0;
                    golf = golf.bind(options)(zulu);
                    zulu = oscar.length;
                    zulu = golf % zulu;
                    mike = oscar[zulu];
 518:
                    tango = mike;
 521:
                    mike = _closure1_slot0;
                    oscar = _closure1_slot2;
                    entity = 48;
                    zulu = oscar[entity];
                    golf = mike.bind(report)(zulu);
                    zulu = golf.memoizedImageSource;
                    zulu = zulu.bind(golf)(tango);
                    entity = oscar[entity];
                    mike = mike.bind(report)(entity);
                    entity = mike.useDominantRGBFromImage;
                    mike = entity.bind(mike)(tango, zulu);
                    entity = {};
                    entity['source'] = zulu;
                    entity['accentColor'] = mike;
                    return entity;
                }
            };
            zulu = zulu.bind(tango)(report);
            kilo = zulu.source;
            zulu = zulu.accentColor;
            backup = zulu.r;
            foxtrot = zulu.g;
            romeo = zulu.b;
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            report = 39;
            zulu = golf[report];
            yankee = oscar.bind(tango)(zulu);
            zulu = yankee.rgbToHex;
            zulu = zulu.bind(yankee)(backup, foxtrot, romeo);
            var _closure2_slot1 = zulu;
            report = golf[report];
            golf = oscar.bind(tango)(report);
            oscar = golf.hexWithOpacity;
            report = 0.2;
            yankee = oscar.bind(golf)(zulu, report);
            var _closure2_slot2 = yankee;
            golf = _closure1_slot3;
            oscar = golf.useMemo;
            report = new Array(2);
            report[0] = zulu;
            zulu = verify.cardImageAssetContainer;
            report[1] = zulu;
            zulu = function() {
                entity = _closure2_slot0;
                mike = entity.cardImageAssetContainer;
                entity = new Array(2);
                entity[0] = mike;
                mike = {};
                zulu = _closure2_slot1;
                mike['shadowColor'] = zulu;
                entity[1] = mike;
                return entity;
            };
            report = oscar.bind(golf)(zulu, report);
            golf = _closure1_slot3;
            oscar = golf.useMemo;
            zulu = new Array(2);
            zulu[0] = yankee;
            yankee = verify.cardImageAssetBackground;
            zulu[1] = yankee;
            mike = function() {
                entity = _closure2_slot0;
                mike = entity.cardImageAssetBackground;
                entity = new Array(2);
                entity[0] = mike;
                mike = {};
                zulu = _closure2_slot2;
                mike['backgroundColor'] = zulu;
                entity[1] = mike;
                return entity;
            };
            romeo = oscar.bind(golf)(mike, zulu);
            mike = null;
            if(!(mike == offset)) { _fun00002_ip = 720; continue _fun00001 }
 266:
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            zulu = 27;
            zulu = golf[zulu];
            zulu = oscar.bind(tango)(zulu);
            zulu = zulu.bind(tango)(entity);
            if(zulu) { _fun00002_ip = 563; continue _fun00001 }
 297:
            zulu = mike == entity;
            oscar = undefined;
            if(zulu) { _fun00002_ip = 311; continue _fun00001 }
 306:
            oscar = entity.type;
 311:
            zulu = _closure1_slot9;
            zulu = zulu.LISTENING;
            if(!(oscar !== zulu)) { _fun00002_ip = 504; continue _fun00001 }
 328:
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            zulu = 30;
            zulu = golf[zulu];
            zulu = oscar.bind(tango)(zulu);
            zulu = zulu.bind(tango)(entity);
            if(zulu) { _fun00002_ip = 445; continue _fun00001 }
 356:
            zulu = mike == entity;
            mike = undefined;
            if(zulu) { _fun00002_ip = 370; continue _fun00001 }
 365:
            mike = entity.type;
 370:
            entity = _closure1_slot9;
            entity = entity.CUSTOM_STATUS;
            oscar = undefined;
            if(!(mike !== entity)) { _fun00002_ip = 443; continue _fun00001 }
 386:
            golf = _closure1_slot0;
            yankee = _closure1_slot2;
            entity = 38;
            mike = yankee[entity];
            mike = golf.bind(tango)(mike);
            zulu = mike.intl;
            mike = zulu.string;
            entity = yankee[entity];
            entity = golf.bind(tango)(entity);
            entity = entity.t;
            entity = entity.2TbM/P;
            oscar = mike.bind(zulu)(entity);
 443:
            _fun00002_ip = 502; continue _fun00001;
 445:
            golf = _closure1_slot0;
            yankee = _closure1_slot2;
            entity = 38;
            mike = yankee[entity];
            mike = golf.bind(tango)(mike);
            zulu = mike.intl;
            mike = zulu.string;
            entity = yankee[entity];
            entity = golf.bind(tango)(entity);
            entity = entity.t;
            entity = entity.T0uYKy;
            oscar = mike.bind(zulu)(entity);
 502:
            _fun00002_ip = 561; continue _fun00001;
 504:
            golf = _closure1_slot0;
            yankee = _closure1_slot2;
            entity = 38;
            mike = yankee[entity];
            mike = golf.bind(tango)(mike);
            zulu = mike.intl;
            mike = zulu.string;
            entity = yankee[entity];
            entity = golf.bind(tango)(entity);
            entity = entity.t;
            entity = entity.kUEnxM;
            oscar = mike.bind(zulu)(entity);
 561:
            _fun00002_ip = 620; continue _fun00001;
 563:
            golf = _closure1_slot0;
            yankee = _closure1_slot2;
            entity = 38;
            mike = yankee[entity];
            mike = golf.bind(tango)(mike);
            zulu = mike.intl;
            mike = zulu.string;
            entity = yankee[entity];
            entity = golf.bind(tango)(entity);
            entity = entity.t;
            entity = entity.rmnkz8;
            oscar = mike.bind(zulu)(entity);
 620:
            zulu = _closure1_slot11;
            mike = _closure1_slot4;
            entity = {};
            entity['style'] = report;
            entity['accessibilityLabel'] = oscar;
            yankee = _closure1_slot11;
            golf = _closure1_slot4;
            oscar = {};
            oscar['style'] = romeo;
            backup = _closure1_slot11;
            foxtrot = _closure1_slot1;
            sizing = _closure1_slot2;
            romeo = 42;
            romeo = sizing[romeo];
            foxtrot = foxtrot.bind(tango)(romeo);
            romeo = {};
            sizing = verify.cardImageAsset;
            romeo['style'] = sizing;
            romeo['source'] = kilo;
            romeo = backup.bind(tango)(foxtrot, romeo);
            oscar['children'] = romeo;
            oscar = yankee.bind(tango)(golf, oscar);
            entity['children'] = oscar;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
 720:
            zulu = _closure1_slot11;
            mike = _closure1_slot4;
            entity = {};
            entity['style'] = report;
            golf = _closure1_slot11;
            yankee = _closure1_slot1;
            romeo = _closure1_slot2;
            report = 40;
            report = romeo[report];
            oscar = yankee.bind(tango)(report);
            report = {};
            report['stream'] = offset;
            foxtrot = _closure1_slot11;
            offset = 41;
            offset = romeo[offset];
            yankee = yankee.bind(tango)(offset);
            offset = {};
            backup = verify.cardImageStreamLive;
            offset['style'] = backup;
            backup = verify.stageStreamLiveText;
            offset['textStyle'] = backup;
            backup = false;
            offset['allowFontScaling'] = backup;
            offset = foxtrot.bind(tango)(yankee, offset);
            report['children'] = offset;
            verify = verify.cardImageStreamPreview;
            report['style'] = verify;
            yankee = _closure1_slot0;
            options = 38;
            verify = romeo[options];
            verify = yankee.bind(tango)(verify);
            offset = verify.intl;
            verify = offset.string;
            options = romeo[options];
            options = yankee.bind(tango)(options);
            options = options.t;
            options = options.7Xq/nZ;
            options = verify.bind(offset)(options);
            report['ctaText'] = options;
            options = true;
            report['disabled'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: StageStreamAvatars
        entity = argFoo;
        options = entity.user;
        romeo = entity.stage;
        entity = _closure1_slot16;
        tango = undefined;
        oscar = entity.bind(tango)();
        verify = _closure1_slot0;
        offset = _closure1_slot2;
        entity = 43;
        entity = offset[entity];
        mike = verify.bind(tango)(entity);
        entity = mike.useLiveStageData;
        entity = entity.bind(mike)(romeo);
        yankee = entity.audienceCount;
        sizing = entity.audienceFriends;
        zulu = _closure1_slot11;
        mike = _closure1_slot4;
        entity = {};
        oscar = oscar.avatarStackContainer;
        entity['style'] = oscar;
        golf = _closure1_slot11;
        report = 44;
        report = offset[report];
        report = verify.bind(tango)(report);
        oscar = report.HappeningNowAvatarStack;
        report = {};
        foxtrot = new Array(1);
        foxtrot[0] = options;
        options = 1;
        output = foxtrot;
        kilo = options;
        backup = arraySpread(output, sizing, kilo);
        report['users'] = foxtrot;
        romeo = romeo.guild_id;
        report['guildId'] = romeo;
        options = yankee + options;
        report['userCount'] = options;
        options = true;
        report['isStage'] = options;
        options = 25;
        options = offset[options];
        options = verify.bind(tango)(options);
        options = options.AvatarSizes;
        options = options.SIZE_16;
        report['avatarSize'] = options;
        report = golf.bind(tango)(oscar, report);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot18 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    golf = tango.bind(entity)(golf);
    var _closure1_slot3 = golf;
    kilo = 1;
    tango = oscar[kilo];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot4 = tango;
    sizing = 2;
    tango = oscar[sizing];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    backup = tango.HAPPENING_NOW_CONTENT_HEIGHT;
    options = tango.HappeningNowCardTrackingType;
    var _closure1_slot7 = options;
    output = tango.HAPPENING_NOW_STAGE_PREVIEW_HEIGHT;
    tango = tango.STATUS_CUTOUT_SMALL;
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.ActivityTypes;
    var _closure1_slot9 = options;
    tango = tango.AnalyticEvents;
    var _closure1_slot10 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    yankee = tango.Fonts;
    tango = 7;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot11 = options;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsxs;
    var _closure1_slot12 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Fragment;
    var _closure1_slot13 = tango;
    tango = 64;
    var _closure1_slot14 = tango;
    tango = 8;
    tango = oscar[tango];
    options = foxtrot.bind(entity)(tango);
    tango = new Array(2);
    tango[0] = options;
    options = 9;
    options = oscar[options];
    options = foxtrot.bind(entity)(options);
    tango[1] = options;
    var _closure1_slot15 = tango;
    tango = 10;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {'flexShrink': 1, 'gap': 2};
    tango['content'] = offset;
    offset = {'backgroundColor': null, 'padding': 2, 'borderRadius': null, 'position': 'absolute', 'alignSelf': 'center', 'bottom': 0};
    romeo = 11;
    result = oscar[romeo];
    result = foxtrot.bind(entity)(result);
    result = result.colors;
    result = result.STAGE_CARD_PILL_BG;
    offset['backgroundColor'] = result;
    result = oscar[romeo];
    result = foxtrot.bind(entity)(result);
    result = result.radii;
    result = result.xl;
    offset['borderRadius'] = result;
    tango['avatarStackContainer'] = offset;
    offset = {};
    offset['marginBottom'] = sizing;
    tango['cardAvatar'] = offset;
    offset = {};
    offset['height'] = backup;
    offset['minWidth'] = backup;
    sizing = 12;
    offset['marginRight'] = sizing;
    sizing = 'relative';
    offset['position'] = sizing;
    tango['cardImage'] = offset;
    offset = {};
    offset['height'] = output;
    offset['minWidth'] = backup;
    offset['position'] = sizing;
    tango['cardImageStream'] = offset;
    offset = {};
    offset['width'] = backup;
    offset['height'] = backup;
    sizing = oscar[romeo];
    sizing = foxtrot.bind(entity)(sizing);
    sizing = sizing.radii;
    sizing = sizing.sm;
    offset['borderRadius'] = sizing;
    offset['borderWidth'] = kilo;
    kilo = oscar[romeo];
    kilo = foxtrot.bind(entity)(kilo);
    kilo = kilo.colors;
    kilo = kilo.BORDER_SUBTLE;
    offset['borderColor'] = kilo;
    tango['cardImageAsset'] = offset;
    offset = {'height': '100%', 'backgroundColor': null, 'borderRadius': null, 'shadowOffset': null, 'shadowRadius': 5, 'shadowOpacity': 0.32, 'elevation': 10};
    kilo = oscar[romeo];
    kilo = foxtrot.bind(entity)(kilo);
    kilo = kilo.colors;
    kilo = kilo.CARD_SECONDARY_BG;
    offset['backgroundColor'] = kilo;
    kilo = oscar[romeo];
    kilo = foxtrot.bind(entity)(kilo);
    kilo = kilo.radii;
    kilo = kilo.sm;
    offset['borderRadius'] = kilo;
    kilo = {'width': 0, 'height': 0};
    offset['shadowOffset'] = kilo;
    tango['cardImageAssetContainer'] = offset;
    offset = {};
    offset['width'] = backup;
    offset['height'] = backup;
    backup = oscar[romeo];
    backup = foxtrot.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.sm;
    offset['borderRadius'] = backup;
    tango['cardImageAssetBackground'] = offset;
    offset = {};
    romeo = oscar[romeo];
    romeo = foxtrot.bind(entity)(romeo);
    romeo = romeo.radii;
    romeo = romeo.sm;
    offset['borderRadius'] = romeo;
    romeo = 'hidden';
    offset['overflow'] = romeo;
    tango['cardImageStreamPreview'] = offset;
    offset = {'top': 4, 'left': 4, 'position': 'absolute'};
    tango['cardImageStreamLive'] = offset;
    offset = {'fontSize': 10, 'lineHeight': 13};
    yankee = yankee.PRIMARY_BOLD;
    offset['fontFamily'] = yankee;
    tango['stageStreamLiveText'] = offset;
    offset = {'marginRight': 12, 'flexDirection': 'column', 'height': '100%'};
    tango['stagePreviewWrapper'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot16 = tango;
    tango = golf.memo;
    mike = function(argFoo) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            sizing = entity.userId;
            var _closure2_slot0 = sizing;
            yankee = entity.guildId;
            var _closure2_slot1 = yankee;
            lima = entity.status;
            kilo = entity.index;
            var _closure2_slot2 = kilo;
            offset = entity.activity;
            var _closure2_slot3 = offset;
            target = entity.stream;
            var _closure2_slot4 = target;
            foxtrot = entity.fullwidth;
            source = entity.renderingContext;
            report = entity.panelVariant;
            tango = undefined;
            if(!(report === tango)) { _fun00006_ip = 83; continue _fun00005 }
 81:
            report = false;
 83:
            var _closure2_slot5 = tango;
            var _closure2_slot6 = tango;
            zulu = _closure1_slot16;
            record = zulu.bind(tango)();
            oscar = _closure1_slot1;
            options = _closure1_slot2;
            zulu = 12;
            zulu = options[zulu];
            zulu = oscar.bind(tango)(zulu);
            zulu = zulu.bind(tango)();
            verify = zulu.analyticsLocations;
            _closure2_slot5 = verify;
            golf = _closure1_slot0;
            oscar = 13;
            zulu = options[oscar];
            output = golf.bind(tango)(zulu);
            backup = output.useStateFromStores;
            zulu = _closure1_slot6;
            romeo = new Array(1);
            romeo[0] = zulu;
            zulu = function() {
                zulu = _closure1_slot6;
                mike = zulu.getUser;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            romeo = backup.bind(output)(romeo, zulu);
            _closure2_slot6 = romeo;
            zulu = 14;
            zulu = options[zulu];
            options = golf.bind(tango)(zulu);
            golf = options.useGetOrFetchApplication;
            vacuum = null;
            backup = vacuum == offset;
            zulu = undefined;
            if(backup) { _fun00006_ip = 221; continue _fun00005 }
 215:
            zulu = offset.application_id;
 221:
            status = golf.bind(options)(zulu);
            golf = _closure1_slot0;
            zulu = _closure1_slot2;
            oscar = zulu[oscar];
            backup = golf.bind(tango)(oscar);
            options = backup.useStateFromStores;
            oscar = _closure1_slot5;
            golf = new Array(1);
            golf[0] = oscar;
            oscar = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zulu = _closure1_slot5;
                    mike = zulu.getStageInstanceByChannel;
                    report = _closure2_slot4;
                    entity = null;
                    report = entity == report;
                    entity = undefined;
                    if(report) { _fun00008_ip = 40; continue _fun00007 }
 31:
                    tango = _closure2_slot4;
                    entity = tango.channelId;
 40:
                    entity = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            control = options.bind(backup)(golf, oscar);
            oscar = _closure1_slot1;
            golf = 27;
            zulu = zulu[golf];
            zulu = oscar.bind(tango)(zulu);
            zulu = zulu.bind(tango)(offset);
            if(zulu) { _fun00006_ip = 481; continue _fun00005 }
 300:
            zulu = vacuum == offset;
            oscar = undefined;
            if(zulu) { _fun00006_ip = 314; continue _fun00005 }
 309:
            oscar = offset.type;
 314:
            zulu = _closure1_slot9;
            zulu = zulu.LISTENING;
            if(!(oscar !== zulu)) { _fun00006_ip = 459; continue _fun00005 }
 331:
            oscar = _closure1_slot1;
            options = _closure1_slot2;
            zulu = 30;
            zulu = options[zulu];
            zulu = oscar.bind(tango)(zulu);
            zulu = zulu.bind(tango)(offset);
            if(zulu) { _fun00006_ip = 437; continue _fun00005 }
 359:
            zulu = vacuum == offset;
            oscar = undefined;
            if(zulu) { _fun00006_ip = 373; continue _fun00005 }
 368:
            oscar = offset.type;
 373:
            zulu = _closure1_slot9;
            zulu = zulu.CUSTOM_STATUS;
            backup = null;
            if(!(oscar !== zulu)) { _fun00006_ip = 501; continue _fun00005 }
 389:
            if(!(vacuum == control)) { _fun00006_ip = 415; continue _fun00005 }
 393:
            oscar = _closure1_slot1;
            options = _closure1_slot2;
            zulu = 33;
            zulu = options[zulu];
            backup = oscar.bind(tango)(zulu);
            _fun00006_ip = 501; continue _fun00005;
 415:
            oscar = _closure1_slot1;
            options = _closure1_slot2;
            zulu = 32;
            zulu = options[zulu];
            backup = oscar.bind(tango)(zulu);
            _fun00006_ip = 501; continue _fun00005;
 437:
            oscar = _closure1_slot1;
            options = _closure1_slot2;
            zulu = 31;
            zulu = options[zulu];
            backup = oscar.bind(tango)(zulu);
            _fun00006_ip = 501; continue _fun00005;
 459:
            oscar = _closure1_slot1;
            options = _closure1_slot2;
            zulu = 29;
            zulu = options[zulu];
            backup = oscar.bind(tango)(zulu);
            _fun00006_ip = 501; continue _fun00005;
 481:
            oscar = _closure1_slot1;
            options = _closure1_slot2;
            zulu = 28;
            zulu = options[zulu];
            backup = oscar.bind(tango)(zulu);
 501:
            oscar = _closure1_slot1;
            zulu = _closure1_slot2;
            zulu = zulu[golf];
            zulu = oscar.bind(tango)(zulu);
            zulu = zulu.bind(tango)(offset);
            golf = undefined;
            if(zulu) { _fun00006_ip = 734; continue _fun00005 }
 531:
            zulu = vacuum == offset;
            oscar = undefined;
            if(zulu) { _fun00006_ip = 545; continue _fun00005 }
 540:
            oscar = offset.type;
 545:
            zulu = _closure1_slot9;
            zulu = zulu.LISTENING;
            if(!(oscar !== zulu)) { _fun00006_ip = 708; continue _fun00005 }
 562:
            oscar = _closure1_slot1;
            options = _closure1_slot2;
            zulu = 30;
            zulu = options[zulu];
            zulu = oscar.bind(tango)(zulu);
            zulu = zulu.bind(tango)(offset);
            if(zulu) { _fun00006_ip = 680; continue _fun00005 }
 590:
            zulu = vacuum == offset;
            oscar = undefined;
            if(zulu) { _fun00006_ip = 604; continue _fun00005 }
 599:
            oscar = offset.type;
 604:
            zulu = _closure1_slot9;
            zulu = zulu.CUSTOM_STATUS;
            golf = undefined;
            if(!(oscar !== zulu)) { _fun00006_ip = 734; continue _fun00005 }
 620:
            if(!(vacuum == control)) { _fun00006_ip = 652; continue _fun00005 }
 624:
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            zulu = 37;
            zulu = options[zulu];
            zulu = oscar.bind(tango)(zulu);
            golf = zulu.GameControllerIcon;
            _fun00006_ip = 734; continue _fun00005;
 652:
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            zulu = 36;
            zulu = options[zulu];
            zulu = oscar.bind(tango)(zulu);
            golf = zulu.StageIcon;
            _fun00006_ip = 734; continue _fun00005;
 680:
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            zulu = 35;
            zulu = options[zulu];
            zulu = oscar.bind(tango)(zulu);
            golf = zulu.XboxNeutralIcon;
            _fun00006_ip = 734; continue _fun00005;
 708:
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            zulu = 34;
            zulu = options[zulu];
            zulu = oscar.bind(tango)(zulu);
            golf = zulu.MusicIcon;
 734:
            options = _closure1_slot3;
            oscar = options.useCallback;
            zulu = new Array(7);
            zulu[0] = sizing;
            zulu[1] = romeo;
            zulu[2] = target;
            zulu[3] = yankee;
            zulu[4] = offset;
            zulu[5] = kilo;
            zulu[6] = verify;
            mike = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = _closure2_slot4;
                    report = null;
                    if(!(report == entity)) { _fun00010_ip = 76; continue _fun00009 }
 15:
                    entity = _closure2_slot3;
                    if(!(report != entity)) { _fun00010_ip = 49; continue _fun00009 }
 23:
                    entity = _closure2_slot3;
                    oscar = entity.type;
                    zulu = _closure1_slot9;
                    zulu = zulu.CUSTOM_STATUS;
                    if(!(oscar === zulu)) { _fun00010_ip = 64; continue _fun00009 }
 49:
                    zulu = _closure1_slot7;
                    offset = zulu.STATUS_CARD;
                    _fun00010_ip = 74; continue _fun00009;
 64:
                    entity = _closure1_slot7;
                    offset = entity.ACTIVITY_CARD;
 74:
                    _fun00010_ip = 89; continue _fun00009;
 76:
                    entity = _closure1_slot7;
                    offset = entity.STREAM_CARD;
 89:
                    golf = _closure1_slot1;
                    oscar = _closure1_slot2;
                    entity = 15;
                    oscar = oscar[entity];
                    entity = undefined;
                    verify = golf.bind(entity)(oscar);
                    options = verify.track;
                    oscar = _closure1_slot10;
                    golf = oscar.ACTIVITY_CARD_CLICKED;
                    oscar = {};
                    oscar['type'] = offset;
                    offset = _closure2_slot2;
                    oscar['order'] = offset;
                    offset = _closure2_slot1;
                    oscar['guild_id'] = offset;
                    yankee = _closure2_slot0;
                    offset = new Array(1);
                    offset[0] = yankee;
                    oscar['highlighted_user_ids'] = offset;
                    offset = _closure2_slot4;
                    yankee = report == offset;
                    offset = undefined;
                    if(yankee) { _fun00010_ip = 191; continue _fun00009 }
 182:
                    yankee = _closure2_slot4;
                    offset = yankee.channelId;
 191:
                    oscar['destination_channel_id'] = offset;
                    oscar = options.bind(verify)(golf, oscar);
                    tango = _closure2_slot4;
                    if(!(report == tango)) { _fun00010_ip = 267; continue _fun00009 }
 210:
                    oscar = _closure1_slot0;
                    tango = _closure1_slot2;
                    report = 17;
                    report = tango[report];
                    oscar = oscar.bind(entity)(report);
                    report = 18;
                    report = tango[report];
                    tango = tango.paths;
                    oscar = oscar.bind(entity)(report, tango);
                    report = oscar.then;
                    tango = function(argFoo) {
                        entity = argFoo;
                        zulu = entity.default;
                        mike = {};
                        tango = _closure2_slot0;
                        mike['userId'] = tango;
                        tango = _closure2_slot6;
                        mike['localUser'] = tango;
                        entity = _closure2_slot5;
                        mike['sourceAnalyticsLocations'] = entity;
                        entity = undefined;
                        entity = zulu.bind(entity)(mike);
                        return entity;
                    };
                    tango = report.bind(oscar)(tango);
                    _fun00010_ip = 322; continue _fun00009;
 267:
                    report = _closure1_slot0;
                    zulu = _closure1_slot2;
                    tango = 17;
                    tango = zulu[tango];
                    report = report.bind(entity)(tango);
                    tango = 16;
                    tango = zulu[tango];
                    zulu = zulu.paths;
                    tango = report.bind(entity)(tango, zulu);
                    zulu = tango.then;
                    mike = function(argFoo) {
                        entity = argFoo;
                        tango = entity.default;
                        entity = _closure2_slot4;
                        zulu = entity.channelId;
                        mike = undefined;
                        entity = true;
                        entity = tango.bind(mike)(zulu, entity);
                        return entity;
                    };
                    mike = zulu.bind(tango)(mike);
 322:
                    return entity;
                }
            };
            options = oscar.bind(options)(mike, zulu);
            if(!(vacuum != romeo)) { _fun00006_ip = 1584; continue _fun00005 }
 795:
            kilo = 'full';
            if(foxtrot) { _fun00006_ip = 820; continue _fun00005 }
 802:
            zulu = vacuum != target;
            mike = 'medium';
            if(!zulu) { _fun00006_ip = 817; continue _fun00005 }
 813:
            mike = 'large';
 817:
            kilo = mike;
 820:
            zulu = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 20;
            mike = oscar[mike];
            zulu = zulu.bind(tango)(mike);
            mike = zulu.getName;
            verify = mike.bind(zulu)(yankee, vacuum, romeo);
            mike = vacuum == offset;
            zulu = undefined;
            if(mike) { _fun00006_ip = 867; continue _fun00005 }
 862:
            zulu = offset.type;
 867:
            mike = _closure1_slot9;
            mike = mike.CUSTOM_STATUS;
            if(!(zulu !== mike)) { _fun00006_ip = 1512; continue _fun00005 }
 884:
            oscar = _closure1_slot11;
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            sequence = 22;
            mike = mike[sequence];
            zulu = zulu.bind(tango)(mike);
            mike = {};
            mike['onPress'] = options;
            mike['width'] = kilo;
            mike['badgeIcon'] = backup;
            mike['IconComponent'] = golf;
            mike['panelVariant'] = report;
            kilo = _closure1_slot12;
            backup = _closure1_slot13;
            if(!(vacuum == control)) { _fun00006_ip = 1270; continue _fun00005 }
 948:
            golf = {};
            result = _closure1_slot11;
            output = _closure1_slot4;
            sizing = {};
            echo = record.cardImage;
            sizing['style'] = echo;
            config = _closure1_slot11;
            update = _closure1_slot17;
            echo = {};
            context = romeo.id;
            echo['userId'] = context;
            echo['activity'] = offset;
            echo['game'] = status;
            echo['stream'] = target;
            echo = config.bind(tango)(update, echo);
            sizing['children'] = echo;
            output = result.bind(tango)(output, sizing);
            sizing = new Array(2);
            sizing[0] = output;
            echo = _closure1_slot12;
            result = _closure1_slot4;
            output = {};
            update = record.content;
            output['style'] = update;
            sierra = _closure1_slot11;
            config = _closure1_slot1;
            papa = _closure1_slot2;
            update = 24;
            update = papa[update];
            context = config.bind(tango)(update);
            update = {};
            update['user'] = romeo;
            config = romeo.avatarDecoration;
            update['avatarDecoration'] = config;
            config = _closure1_slot0;
            whiskey = 25;
            whiskey = papa[whiskey];
            whiskey = config.bind(tango)(whiskey);
            whiskey = whiskey.AvatarSizes;
            whiskey = whiskey.XSMALL;
            update['size'] = whiskey;
            update['guildId'] = yankee;
            update['status'] = lima;
            lima = record.cardAvatar;
            update['style'] = lima;
            lima = _closure1_slot8;
            update['autoStatusCutout'] = lima;
            context = sierra.bind(tango)(context, update);
            update = new Array(3);
            update[0] = context;
            sierra = _closure1_slot11;
            sequence = papa[sequence];
            sequence = config.bind(tango)(sequence);
            context = sequence.HappeningNowCardHeader;
            sequence = {};
            lima = true;
            sequence['noMargin'] = lima;
            sequence['children'] = verify;
            sequence = sierra.bind(tango)(context, sequence);
            update[1] = sequence;
            context = _closure1_slot11;
            sequence = 26;
            sequence = papa[sequence];
            sequence = config.bind(tango)(sequence);
            config = sequence.HappeningNowActivityCardSubtitle;
            sequence = {};
            sequence['activity'] = offset;
            sequence['stream'] = target;
            sequence = context.bind(tango)(config, sequence);
            update[2] = sequence;
            output['children'] = update;
            output = echo.bind(tango)(result, output);
            sizing[1] = output;
            golf['children'] = sizing;
            _fun00006_ip = 1494; continue _fun00005;
 1270:
            sizing = {};
            echo = _closure1_slot12;
            result = _closure1_slot4;
            output = {};
            update = record.stagePreviewWrapper;
            output['style'] = update;
            config = _closure1_slot11;
            sequence = _closure1_slot4;
            update = {};
            record = record.cardImageStream;
            update['style'] = record;
            papa = _closure1_slot11;
            context = _closure1_slot17;
            record = {};
            sierra = romeo.id;
            record['userId'] = sierra;
            record['activity'] = offset;
            record['game'] = status;
            record['stream'] = target;
            record = papa.bind(tango)(context, record);
            update['children'] = record;
            sequence = config.bind(tango)(sequence, update);
            update = new Array(2);
            update[0] = sequence;
            sequence = vacuum != control;
            vacuum = null;
            if(!sequence) { _fun00006_ip = 1404; continue _fun00005 }
 1379:
            record = _closure1_slot11;
            config = _closure1_slot18;
            sequence = {};
            sequence['user'] = romeo;
            sequence['stage'] = control;
            vacuum = record.bind(tango)(config, sequence);
 1404:
            update[1] = vacuum;
            output['children'] = update;
            result = echo.bind(tango)(result, output);
            output = new Array(2);
            output[0] = result;
            update = _closure1_slot11;
            echo = _closure1_slot0;
            vacuum = _closure1_slot2;
            result = 23;
            result = vacuum[result];
            result = echo.bind(tango)(result);
            echo = result.HappeningNowLiveStageContent;
            result = {};
            result['stage'] = control;
            result['renderingContext'] = source;
            result['guildId'] = yankee;
            result['streamingUser'] = romeo;
            result = update.bind(tango)(echo, result);
            output[1] = result;
            sizing['children'] = output;
            golf = sizing;
 1494:
            golf = kilo.bind(tango)(backup, golf);
            mike['children'] = golf;
            mike = oscar.bind(tango)(zulu, mike);
            _fun00006_ip = 1582; continue _fun00005;
 1512:
            golf = _closure1_slot11;
            oscar = _closure1_slot0;
            backup = _closure1_slot2;
            zulu = 21;
            zulu = backup[zulu];
            zulu = oscar.bind(tango)(zulu);
            oscar = zulu.CustomStatusActivityCard;
            zulu = {};
            zulu['fullwidth'] = foxtrot;
            zulu['user'] = romeo;
            zulu['guildId'] = yankee;
            zulu['activity'] = offset;
            zulu['userTitle'] = verify;
            zulu['onPress'] = options;
            zulu['panelVariant'] = report;
            mike = golf.bind(tango)(oscar, zulu);
 1582:
            return mike;
 1584:
            zulu = _closure1_slot11;
            mike = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 19;
            entity = oscar[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.HappeningNowCardPlaceholder;
            entity = {};
            entity['panelVariant'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 49;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActivity.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();